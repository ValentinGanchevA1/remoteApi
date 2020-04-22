import * as ACTIONS from "../actionTypes";
import RemoteApi from "../remoteApi";
import {
    redirectToCart
} from "eshop/modules/configurator/actions/cart";
import ListUtils from "../listUtils";
import {
    checkMsisdnAndGetOffersProductList,
    clearLoyaltyLength,
    clearProcessType,
    getOffersAction,
    getProductDetailsConvergentOffersAction,
    getProductListOffersAction,
    setMarketContext,
    urlParametersUsed,
} from "eshop/modules/configurator/actions/filters";

import {
    getCallOffersWithMsisdn,
    getClientContext,
    getSelectedOfferType,
    getSelectedProcessTypeValue,
    getUseDefaultLoyalty,
    getUseDefaultOffer,
    getUseDefaultProcess,
    getVerifiedMsisdn,
} from "eshop/modules/configurator/selectors/filters";
import {
    getUrlParametersUsed
} from "eshop/modules/configurator/selectors/metaData";
import {
    clearPropositionId,
    fetchContractRole,
    fetchFirstOffer
} from "eshop/modules/configurator/actions/offers";
import {
    addToCartInProgress,
    getCurrentSelectedAvailableProductsKey,
    getCurrentSelectedAvailableProductsKeyByUrlParameter,
    getDefaultProcess,
    getDefaultProposition,
    getDefaultServicePlan,
    getDeliveryAndPaymentComponentUid,
    getFirstAvailableProductsKey,
    getSelectedBaseDeviceCode,
    getSelectedOfferTypeCmsConf,
    getSelectedOneTimePricesList,
    getSelectedVariant,
    isProductDetailsPage,
    isProductListPage,
    isAccessoryListPage
} from "eshop/modules/simfree/selectors";
import RemoteApiConf from "eshop/modules/configurator/remoteApi";
import * as ACTIONSCONF from "eshop/modules/configurator/actionTypes";
import * as ACTIONSAUTH from "eshop/modules/auth/actionTypes";
import GenesysWebEngagementUtils from "eshop/utils/GenesysWebEngagementUtils";
import {
    reloadProductList
} from "eshop/modules/simfree/actions/filter";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    bodyLoaderHide,
    bodyLoaderShow
} from "eshop/modules/checkout/actions/app";
import OfferType from "../constants/OfferTypeEnum";
import OraEshopAPI from "../../../flux/utils/OraEshopAPI";
import {
    gotoCartSummary
} from "../../checkout/actions/app";
import {
    constants
} from "../../configurator/constants";
import {
    setMagnumStore
} from "../../magnum2/actions/magnum";
import {
    getOffersForCurrentFilters,
    getPropositionIdByRatePlanId,
    getPropositionIdsByRatePlanId,
    getSelectedBaseRatePlanId,
    getSelectedOffer,
    getAvailableBaseRateplanIds,
} from "eshop/modules/configurator/selectors/offers";
import DataLayerUtils from "eshop/utils/DataLayerUtils";
import PickupPosMapUtils from "eshop/utils/PickupPosMapUtils";
import {
    getMarketContext,
    getOfferTypeFiltersCached
} from "../../configurator/selectors/filters";
import {
    getSalesChannel
} from "../../auth/selectors/authorization";
import {
    getAssistModeStateData
} from "../../checkout/selectors";
import {
    showError
} from "../../auth/actions/authorization";
import {
    getProductDetailsOffersWithoutOfferSelectorAction
} from "../../configurator/actions/filters";


export function fetchDeviceByCode(productCode) {
    return (dispatch) => {
        RemoteApi.getDeviceByCode(productCode)
            .then((response) => dispatch({
                type: ACTIONS.GET_DEVICE_DATA_BY_CODE,
                payload: response
            }));
    };
}

export function clearErrors() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.UPDATE_ADD_TO_CART_ERROR,
            errors: []
        });
    };
}

export const setErrorCode = (errorCode) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.UPDATE_ADD_TO_CART_ERROR,
        errors: [errorCode]
    });
};

export function addToCart(productCode, bundleTemplateName, redirectUrl) {
    return (dispatch, getState) => {
        if (addToCartInProgress(getState())) {
            return;
        }
        dispatch({
            type: ACTIONS.ADD_TO_CART_START
        });
        bodyLoaderShow();
        let shouldReload = true;
        RemoteApi.addToCart(productCode, bundleTemplateName)
            .then(responseData => {
                console.log(responseData);
                if (responseData.code === 200) {
                    GenesysWebEngagementUtils.pushAddToCartEvent(productCode, bundleTemplateName, responseData.bundleNo);
                    dispatch(addToCartSuccess(responseData));
                    dispatch(redirectToCart());
                } else {
                    shouldReload = false;
                    bodyLoaderHide();
                    if (responseData.code !== 400) {
                        dispatch(setErrorCode("other"));
                    } else {
                        dispatch(showError(responseData.message || ''));
                        dispatch(clearErrors());
                    }
                }
            });
        OnlineUtils.removePwaSuflerContextFromSession();
    };
}

export function addMagnumToCart(productCode) {
    return (dispatch, getState) => {
        const state = getState();
        if (addToCartInProgress(state)) {
            return;
        }
        dispatch({
            type: ACTIONS.ADD_TO_CART_START
        });
        bodyLoaderShow();

        const knaNumber = state.magnum.knaNumber;
        const voiceBundleMsisdn = state.magnum.selectedMobileTransaction.number;
        const dataBundleMsisdn = state.magnum.selectedFixBroadbandTransaction.number;
        const voipNumber = state.magnum.selectedFixVoipTransaction.designationNumber || state.magnum.selectedFixBroadbandTransaction.designationNumber;
        const selectedProposition = state.magnum.selectedProposition.code;
        const secondaryChoiceOffer = state.magnum.durationList.secondaryChoiceOffer;

        OraEshopAPI.addMagnumToMultiCart(selectedProposition, productCode, voipNumber, knaNumber, voiceBundleMsisdn, dataBundleMsisdn, secondaryChoiceOffer)
            .then(
                () => {
                    dispatch({
                        type: ACTIONS.ADD_TO_CART_SUCCESS
                    });
                    dispatch(gotoCartSummary());
                    bodyLoaderHide();
                },
                error => {
                    dispatch({
                        type: ACTIONS.UPDATE_ADD_TO_CART_ERROR,
                        errors: [error.responseJSON.message || "other"]
                    });
                    bodyLoaderHide();
                }
            );
        OnlineUtils.removePwaSuflerContextFromSession();
    };
}

export function addToCartSuccess(responseData) {
    OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, responseData.offerCounter, 'header');
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.ADD_TO_CART,
            payload: responseData
        });
        dispatch({
            type: ACTIONS.ADD_TO_CART_SUCCESS
        });
        dispatch({
            type: ACTIONSAUTH.STAY_LOVE_RETENTION_MSISDN,
            msisdn: ""
        });
    };
}
export function getProductList(page, showAll) {
    return (dispatch) => {
        RemoteApi.getProductList(page, showAll).then((response) => dispatch({
            type: ACTIONS.GET_ALL_PRODUCTS,
            products: response
        }));
    };
}
export function setSelectedBaseDeviceCode(deviceCode) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_SELECTED_BASE_DEVICE_CODE,
            deviceCode
        });
    };
}

export function setSelectedVariant(variant, productPath, filterState) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.SET_SELECTED_VARIANT,
            payload: variant,
            color: productPath,
            filterState: filterState
        });
        const selectedOffer = getSelectedOffer(getState());
        if (selectedOffer) {
            DataLayerUtils.pushProductDetailsView(
                selectedOffer,
                getSelectedOfferType(getState()),
                getClientContext(getState()),
                getSelectedVariant(getState()),
                getMarketContext(getState()),
                getSalesChannel(getState()),
                getAssistModeStateData(getState()));
        }
        PickupPosMapUtils.setSelectedDeviceVariant(variant.productId);
    };
}

export function setSelectedVariantObject(variant) {
    console.log("^##^(*@^$@(*#^$(*#@^$(@^#$(@^#($&@^#(&$^@($^#", {
        variant
    });
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_SELECTED_VARIANT_OBJECT,
            payload: variant
        });
    };
}
export function setSelectedDeviceTab(deviceTab) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_SELECTED_DEVICE_TAB,
            deviceTab
        });
    };
}
export function setSelectedVariantOnList(variant, productPath, productCode) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.SET_SELECTED_VARIANT_ON_LIST,
            products: ListUtils.changeVariant(getState(), variant, productCode),
            color: productPath
        });
    };
}

export function setSelectedVariantOnRecommended(variant, productPath, productCode, products) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.SET_SELECTED_VARIANT_ON_RECOMMENDED,
            products: ListUtils.changeRecommendedVariant(getState(), variant, productCode, products),
            productId: productCode,
            color: productPath
        });
    };
}

export function setChosenImageIndex(chosenImageIndex) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_CHOSEN_IMAGE_INDEX,
            payload: chosenImageIndex
        });
    };
}

export function changeCategory(category) {
    if (category && category.code && !window.location.href.includes("/details")) {
        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout("selectedCategory", category.code);
    }
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_SELECTED_CATEGORY,
            selectedCategory: category && category.code,
            selectedCategoryName: category && category.name
        });
    };
}

export function setRating(rating) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_REVIEW_RATING,
            rating: rating
        });
    };
}

export function setLogin(login) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_REVIEW_LOGIN,
            login: login
        });
    };
}

export function setMessage(message) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_REVIEW_MESSAGE,
            message: message
        });
    };
}

export function sendReview(productCode, rating, login, message) {
    return (dispatch) => {
        RemoteApi.sendReview(productCode, rating, login, message).then(
            () => dispatch({
                type: ACTIONS.SEND_REVIEW,
                payload: true
            }), (error) => dispatch({
                type: ACTIONS.SEND_REVIEW,
                payload: false
            }));
    };
}

const getDocuments = (dispatch, getState) => {

    console.log("getDocuments ^^^^^^^^^^^^^^^^", getDefaultProcess(getState()));

    RemoteApi.getDocumentsForDevice("MOB_CPO_SALES_OF_GOODS", getDefaultProcess(getState()))
        .then(response => dispatch({
            type: ACTIONSCONF.SELECT_DOCUMENTS,
            payload: response
        })).catch(error =>
            console.log("getDocumentsForDevice ", error)
        );

}

const trySetDefaultProcess = (response) => (dispatch, getState) => {
    console.log("trySetDefaultProcess +");
    if (!getUseDefaultProcess(getState())) {
        return;
    }
    let defProcess = getDefaultProcess(getState());
    console.log("State:", getSelectedOfferTypeCmsConf(getState()));
    console.log("defProces", defProcess);
    //console.log("!getUrlParametersUsed(getState()) && (OnlineUtils.getParameterValueFromUrl('processType') || OnlineUtils.loadFromSessionStorage('processType'))",!getUrlParametersUsed(getState()) && (OnlineUtils.getParameterValueFromUrl('processType') || OnlineUtils.loadFromSessionStorage("processType"));
    console.log("trySetDefaultProcess -");
    if (!getUrlParametersUsed(getState()) && (OnlineUtils.getParameterValueFromUrl('processType') || OnlineUtils.loadFromSessionStorage("processType"))) {
        let process = OnlineUtils.getParameterValueFromUrl('processType') || OnlineUtils.loadFromSessionStorage("processType");
        let availableProcesses = (response && response.map(process => process.value)) || [];
        if (availableProcesses.includes(process)) {
            dispatch({
                type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                processType: process,
                useDefaultLoyalty: getUseDefaultLoyalty(getState())
            });
        } else {
            dispatch({
                type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                processType: defProcess
            });
        }
    } else if (defProcess) {
        if (response && response.find(p => p.value === defProcess)) {
            dispatch({
                type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                processType: defProcess
            });
        } else {
            console.error('Wrong default process: ' + defProcess);
        }
    }
    OnlineUtils.saveInStorageOnCanonicalLinks("processType", getSelectedProcessTypeValue(getState()));
};

const fetchInitialOOVFiltersAndPreset = () => {
    return (dispatch, getState) => {
        let deviceCode = null;
        if (isProductDetailsPage(getState())) {
            deviceCode = getSelectedBaseDeviceCode(getState());
        }
        console.log("fetchInitialOOVFiltersAndPreset1", getState());
        const availableProductsKey = getCurrentSelectedAvailableProductsKey(getState());
        dispatch(fetchContractRole(availableProductsKey));
        dispatch(fetchFirstOffer(availableProductsKey));

        let cachedOfferFilters = getOfferTypeFiltersCached(getState());
        let selectedOfferType = getSelectedOfferType(getState());
        let offerFiltersCacheIndex = cachedOfferFilters.findIndex(offerFiltersElement => offerFiltersElement.offerType === selectedOfferType);
        console.log("fetchInitialOOVFiltersAndPreset2 offerFiltersCacheIndex=", offerFiltersCacheIndex);

        if (offerFiltersCacheIndex !== -1) {
            dispatch(initialOfferFiltersFetched(cachedOfferFilters[offerFiltersCacheIndex].offerFilters));
        } else {
            dispatch({
                type: ACTIONSCONF.FETCH_OFFER_FILTERS_START
            });
            RemoteApiConf.getOfferFilters(availableProductsKey, deviceCode).then(response =>
                dispatch(initialOfferFiltersFetched(response)));
        }
    };
};

const initialOfferFiltersFetched = (response) => (dispatch, getState) => {
    dispatch({
        type: ACTIONSCONF.FETCH_OFFER_FILTERS,
        payload: response,
        urlParametersUsed: getUrlParametersUsed(getState()),
        useDefaultProcess: getUseDefaultProcess(getState()),
        useDefaultLoyalty: getUseDefaultLoyalty(getState()),
        useDefaultOffer: getUseDefaultOffer(getState()),
    });
    console.log("fetchInitialOOVFiltersAndPreset2", getState());
    dispatch(trySetDefaultProcess(response));

    dispatch(urlParametersUsed);
    OnlineUtils.removeFromSessionStorage("dontUseDefaults");
    console.log("fetchInitialOOVFiltersAndPreset3", getState());
    if (isProductDetailsPage(getState()) || isProductListPage(getState()) || isAccessoryListPage(getState()))
        getDocuments(dispatch, getState);
    if (getCallOffersWithMsisdn(getState())) {
        checkMsisdnAndGetOffersProductList(getVerifiedMsisdn(getState()))(dispatch, getState);
        if (isProductDetailsPage(getState())) {
            getOffersAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()));
        }
    } else {
        if (isProductDetailsPage(getState())) {
            getProductDetailsOffersWithoutOfferSelectorAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()), true);
        } else if (isProductListPage(getState())) {
            getProductListOffersAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()), true);
        } else {
            getOffersAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()));
        }
    }
};

export const fetchIfActivePickupFromShelf = (dispatch, getState) => {
    RemoteApi.checkIfActivePickupFromShelf(
            getSelectedOfferType(getState()),
            getSelectedProcessTypeValue(getState()),
            getMarketFromOfferTypeConf(getSelectedOfferTypeCmsConf(getState())),
            getSelectedVariant(getState()))
        .then(response => dispatch({
            type: ACTIONS.CHECK_IF_ACTIVE_PICKUP_FORM_SHELF,
            data: response
        })).catch(error => console.error("Error checking pickup_from_shelf is active: ", error));
};

export const setOfferTypeCmsConf = (cmsConf, validOfferTypes) => {
    console.log("will setOfferTypeCmsConf ", cmsConf);
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.REGISTER_OFFER_TYPES_CMS_CONF,
            cmsConf,
            validOfferTypes,
        });
        console.log("setOfferTypeCmsConf");
        dispatch(setMarketContext(
            getMarketFromOfferTypeConf(getSelectedOfferTypeCmsConf(getState()))
        ));
        if (getSelectedOfferType(getState()) !== OfferType.SIMFREE && getCurrentSelectedAvailableProductsKey(getState())) {
            dispatch(fetchInitialOOVFiltersAndPreset());

        } else if (getSelectedOfferType(getState()) === OfferType.CONVERGENT) {
            fetchOrangeLove(getState, dispatch);
            reloadOrangeLove(getState, dispatch);
        } else if (getDefaultProcess(getState())) {
            // sog configuration
            dispatch({
                type: ACTIONSCONF.SELECT_PROCESS_TYPE,
                processType: getDefaultProcess(getState())
            });
            dispatch({
                type: ACTIONSCONF.SELECT_OFFER,
                propositionId: getDefaultProposition(getState())
            });
            getDocuments(dispatch, getState);
            dispatch(urlParametersUsed);
        } else {
            dispatch(clearProcessType());
            dispatch(clearLoyaltyLength());
            dispatch(clearPropositionId());

        }

        console.log("getFirstAvailableProductKey to fetch first offer", getFirstAvailableProductsKey(getState()));
        if (!getCurrentSelectedAvailableProductsKey(getState())) {
            const availableProductsKey = getCurrentSelectedAvailableProductsKeyByUrlParameter(getState()) ||
                getFirstAvailableProductsKey(getState());
            dispatch(fetchContractRole(availableProductsKey));
            dispatch(fetchFirstOffer(availableProductsKey));
        }
        fetchIfActivePickupFromShelf(dispatch, getState);
        OnlineUtils.removeFromSessionStorage("dontUseDefaults");
    };
};

export const getParamsFromUrl = () => {
    return (dispatch) => {
        dispatch(urlParametersUsed);
    };
};

function getMarketFromOfferTypeConf(offerTypeCmsConf) {
    const market = (offerTypeCmsConf && offerTypeCmsConf.market) || "B2C";
    return market.replace("_SOHO", "");
}


export const setOfferTypeAction = offerType => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SELECT_OFFER_TYPE,
        offerType: offerType,
    });
    OnlineUtils.processOneTimeCostPricesUrlParameter(getSelectedOneTimePricesList(getState()));
};

export const fetchDeliveryAndPaymentHtml = uid => (dispatch, getState) => {
    RemoteApi.getOplHtmlContentForOfferAndProcess(
            (OnlineUtils.getParameterValueFromUrl('offerType') || getSelectedOfferType(getState())),
            (OnlineUtils.getParameterValueFromUrl('processType') || getSelectedProcessTypeValue(getState())),
            uid != null ? uid : getDeliveryAndPaymentComponentUid(getState()))
        .then(response => dispatch({
            type: ACTIONS.GET_DELIVERY_AND_PAYMENT_HTML,
            data: response,
        })).catch(error => console.error("Error getting html for component: ", error));
};

export const fetchStorageCapacityForProduct = () => (dispatch, getState) => {
    RemoteApi.getStorageCapacityForProduct(getSelectedBaseDeviceCode(getState()))
        .then(response => dispatch({
            type: ACTIONS.GET_PRODUCT_STORAGE_CAPACITY,
            data: response,
        })).catch(error => console.log("Product without references", error));

};



export const setOfferType = offerType => (dispatch, getState) => {
    console.log("Set offerType", offerType);
    dispatch(setOfferTypeAction(offerType));

    if (offerType !== OfferType.SIMFREE && getCurrentSelectedAvailableProductsKey(getState())) {
        dispatch(fetchInitialOOVFiltersAndPreset());
    } else if (offerType === OfferType.CONVERGENT) {
        fetchOrangeLove(getState, dispatch);
        reloadOrangeLove(getState, dispatch);
    } else if (getDefaultProcess(getState())) {
        // sog configuration
        dispatch({
            type: ACTIONSCONF.SELECT_PROCESS_TYPE,
            processType: getDefaultProcess(getState())
        });
        dispatch({
            type: ACTIONSCONF.SELECT_OFFER,
            propositionId: getDefaultProposition(getState())
        });
        if (isProductListPage(getState())) {
            reloadProductList()(dispatch, getState);
        }
        getDocuments(dispatch, getState);
    } else {

        if (isProductListPage(getState())) {
            reloadProductList()(dispatch, getState);
        }
    }
    if (getDeliveryAndPaymentComponentUid(getState())) {
        fetchDeliveryAndPaymentHtml()(dispatch, getState);
    }
};

export const selectConvergentOffer = (propositionId) => {
    return (dispatch) => {
        dispatch({
            type: ACTIONSCONF.SELECT_OFFER,
            propositionId: propositionId
        });
    };
};

function fetchOrangeLove(getState, dispatch) {
    const magnumStore = JSON.parse(OnlineUtils.loadFromSessionStorage(constants.magnumStore));
    if (magnumStore && !getState().magnum.selectedProposition) {
        dispatch(setMagnumStore(magnumStore));

        if (isProductDetailsPage(getState())) {
            getProductDetailsConvergentOffersAction(dispatch, getState);
            selectConvergentOffer(magnumStore.selectedProposition && magnumStore.selectedProposition.mobileVoiceBundleTemplateCode)(dispatch);
        }
    }
}

function reloadOrangeLove(getState, dispatch) {
    if (getState().magnum.durationList.durations.length === 0) {
        dispatch({
            type: ACTIONS.GET_ALL_PRODUCTS,
            products: []
        });
        dispatch({
            type: ACTIONS.GET_PRODUCTS_TREES,
            payload: null
        });
    }
    reloadProductList()(dispatch, getState);
}

export const setSimfreeProcessData = () => {
    return (dispatch) => {
        // sog configuration
        dispatch(setOfferTypeAction("SIMFREE"));
        dispatch({
            type: ACTIONSCONF.SELECT_PROCESS_TYPE,
            processType: "SALE_OF_GOODS"
        });
        dispatch({
            type: ACTIONSCONF.SELECT_OFFER,
            propositionId: "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS"
        });
    };
};

export const getSimfreeDocuments = () => {

    console.log("getSimfreeDocuments ^^^^^^^^^^^^^^^^^^", );
    return (dispatch, getState) => RemoteApi.getDocumentsForDevice(getSelectedBaseDeviceCode(getState()), "SALE_OF_GOODS")
        .then(response => dispatch({
            type: ACTIONSCONF.SELECT_DOCUMENTS,
            payload: response
        }));
};

export const getStaticSimFreeDocuments = () => (dispatch, getState) => {

    RemoteApi.getDocumentsForDevice("MOB_CPO_SALES_OF_GOODS", "SALE_OF_GOODS")
        .then(response => dispatch({
            type: ACTIONSCONF.SELECT_DOCUMENTS,
            payload: response
        }));
}

export const matchPropositionIdToselectedRatePlan = () => (dispatch, getState) => {
    console.log("matchPropositionIdToselectedRatePlan");
    dispatch({
        type: ACTIONSCONF.SELECT_PROPOSITION_ID,
        propositionId: getPropositionIdByRatePlanId(getSelectedBaseRatePlanId(getState()), getOffersForCurrentFilters(getState()))
    });

};


export const trySetDefaultOffer = (response) => (dispatch, getState) => {
    console.warn("trySetDefaultOffer +", getUseDefaultOffer(getState()));
    if (!getUseDefaultOffer(getState()) && !OnlineUtils.getParameterValueFromUrl("serviceplan")) {
        dispatch(matchPropositionIdToselectedRatePlan());
        return;
    }
    let defServicePlan = getDefaultServicePlan(getState());
    console.warn("State:", getSelectedOfferTypeCmsConf(getState()));
    console.warn("defServicePlan", defServicePlan);


    let urlOrStoragePlan = OnlineUtils.getValueFromUrlOrStorage("serviceplan", "serviceplan");
    const availableOffers = getOffersForCurrentFilters(getState());
    console.log("availableOffers", availableOffers);
    if (!!availableOffers && urlOrStoragePlan) {

        console.log(availableOffers && !availableOffers.filter(offer => offer.rateplanBaseProductId == urlOrStoragePlan));
        if (!availableOffers.find(offer => offer.rateplanBaseProductId == urlOrStoragePlan)) {
            console.log("urlPlan does not match available offers -> use default");
            urlOrStoragePlan = "";

        }
    }

    console.log("FINAL urlOrStoragePlan", urlOrStoragePlan);
    //ifi urlPlan match available offers
    if (!!urlOrStoragePlan) {

        defServicePlan = urlOrStoragePlan;
        let selectedPropositionId = OnlineUtils.getValueFromUrlOrStorage("selectedPropositionId", "selectedPropositionId");
        console.log("selectedPropositionId", selectedPropositionId);

        const selectedPropositionIds = getPropositionIdsByRatePlanId(defServicePlan, getOffersForCurrentFilters(getState()));
        console.log("selectedPropositionIds", selectedPropositionIds);
        if (!selectedPropositionIds || !selectedPropositionIds.find(id => id == selectedPropositionId)) {
            console.log("siema1");
            selectedPropositionId = getPropositionIdByRatePlanId(defServicePlan, getOffersForCurrentFilters(getState()));
            console.log("siema2");
        }

        console.warn("first if defOffer", defServicePlan);

        dispatch({
            type: ACTIONSCONF.SELECT_OFFER,
            rateplanBaseProductId: defServicePlan,
            propositionId: selectedPropositionId
        });
    } else if (defServicePlan) {
        console.warn("else if defOffer", defServicePlan);
        console.log({
            type: ACTIONSCONF.SELECT_OFFER,
            rateplanBaseProductId: defServicePlan,
            propositionId: getPropositionIdByRatePlanId(defServicePlan, getOffersForCurrentFilters(getState()))
        });
        console.log("getOffersForCurrentFilters", getOffersForCurrentFilters(getState()));
        let availableBaseRatePlanIds = getAvailableBaseRateplanIds(getState());
        if (!availableBaseRatePlanIds.includes(defServicePlan)) {
            defServicePlan = availableBaseRatePlanIds[0];
        }
        dispatch({
            type: ACTIONSCONF.SELECT_OFFER,
            rateplanBaseProductId: defServicePlan,
            propositionId: getPropositionIdByRatePlanId(defServicePlan, getOffersForCurrentFilters(getState()))
        });
    }
    OnlineUtils.saveInStorageOnCanonicalLinks("processType", getSelectedProcessTypeValue(getState()));
    console.warn("trySetDefaultOffer -");

};

export const fetchPickupLastPos = (productCode) => (dispatch) => {
    RemoteApi.getLastSelectedPos(productCode).then(response => dispatch({
        type: ACTIONS.GET_LAST_PICKUP_POS,
        data: response
    })).catch(error => console.error("LastSelectedPosError: ", error));
};

export const setDeliveryAndPaymentComponentUid = (uid) => {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_DELIVERY_AND_PAYMENT_COMPONENT_UID,
            data: uid
        });
    };
};

export const setShowRatingErrorModal = (showRatingErrorModal) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SHOW_RATING_MESSAGE,
        value: showRatingErrorModal
    })
};

export const setCashInvoiceLimit = (limit) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SET_CASH_INVOICE_LIMIT,
        data: limit
    })
};

export const setCartInvoiceValue = (value) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.SET_CART_INVOICE_VALUE,
        data: value
    })
};

export const setDeliveryMethods = deliveryMethods => ({
    type: ACTIONS.SET_DELIVERY_METHODS,
    deliveryMethods
});