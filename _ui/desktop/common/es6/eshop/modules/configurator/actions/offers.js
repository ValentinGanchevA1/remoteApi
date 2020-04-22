import * as ACTIONS from "../actionTypes";
import {
    addToCart,
    addInstallmentSalesOfGoodsToCart
} from './cart';
import {
    clearAddTerminalToOfferFromSessionStorage
} from "eshop/modules/cart/actions/cart";
import {
    getCheckMsisdnResult,
    getClientContext,
    getMsisdnVerificationNeeded,
    getSelectedFilters,
    getSelectedOfferType,
    getSelectedProcessTypeValue,
    getMarketContext,
    getVerifiedMsisdn
} from "../selectors/filters";
import {
    getAddTerminalToOfferBundleNo
} from "eshop/modules/cart/selectors";
import {
    doSmsAuthorization,
    doSmsAccountVerification,
    showError
} from "eshop/modules/auth/actions/authorization";
import OnlineUtils from "eshop/utils/OnlineUtils";
import {
    doOpenVerificationModal,
    reloadProductList,
    checkMsisdnAndGetOffersAndAddToCart
} from "eshop/modules/simfree/actions/filter";
import {
    getCurrentSelectedAvailableProductsKey,
    getFirstAvailableProductsKey,
    getProductDataForVariantId,
    getSelectedVariant,
    getVerificationNeeded,
    isProductDetailsPage,
    isProductListPage
} from "eshop/modules/simfree/selectors";
import {
    getBaseRatePlanIdByPropositionId,
    getCurrentDeviceInstalmentsCountValue,
    getDeviceInstalmentsConfigurationInContext,
    getDeviceInstalmentsCountValueByPropositionId,
    getOfferDataInContextForPropositionId,
    getPropositionIdByRatePlanId,
    getOffersForCurrentFilters
} from "../selectors/offers";
import DataLayerUtils from "eshop/utils/DataLayerUtils";
import {
    getAddFromLink,
    getUrlParametersUsed
} from "eshop/modules/configurator/selectors/metaData";
import {
    urlParametersUsed
} from "./filters";
import {
    getSelectedOffer,
    getSelectedDeviceId
} from "eshop/modules/configurator/selectors/offers";
//Prosze nie dispatchowac zadnych akcji na krzywy ryj, glownie chodzi o to zeby rownie rateplanBaseProductId bylo wysylane ta akcja.
//W przeciwnym razie zrobi sie w storze jebnik z rateplanBaseProductId i zle rzeczy sie zadzieja
//Ewentualnie dorzucac tez rateplanBaseProductId do tej akcji to bedzie git
import RemoteApi from "../remoteApi";
import {
    getAssistModeStateData
} from "../../checkout/selectors";
import {
    fetchIfActivePickupFromShelf
} from "../../simfree/actions/app";
import {
    getSalesChannel
} from "../../auth/selectors/authorization";
import {
    bodyLoaderEvent,
    gotoCartSummary
} from "eshop/modules/checkout/actions/app";
import {
    doCloseVerificationModal
} from "../../simfree/actions/filter";

const selectOfferMetaAction = (propositionId, position = -1, deviceId = "",
    rateplanBaseProductId) => (dispatch, getState) => {
    const rateplanBaseProductId = rateplanBaseProductId || getBaseRatePlanIdByPropositionId(propositionId)(getState());
    const avaliableInstalmentCount = getDeviceInstalmentsCountValueByPropositionId(propositionId)(getState());
    setAvailableInstalment(propositionId)(dispatch, getState());
    console.log("OFFERSELECTEDDD ", propositionId, rateplanBaseProductId, deviceId);
    if (rateplanBaseProductId) {
        dispatch({
            type: ACTIONS.SELECT_OFFER,
            rateplanBaseProductId,
            propositionId,
            deviceId,
            position,
            urlParametersUsed: getUrlParametersUsed(getState())
        });
    }
    fetchIfActivePickupFromShelf(dispatch, getState)
};
export const selectOffer = (propositionId, position, deviceId, rateplanBaseProductId) => (dispatch, getState) => {
    console.warn("selectOffer marketContext", getMarketContext(getState()));
    DataLayerUtils.pushAddToCartProductClickOfferEvent(getOfferDataInContextForPropositionId(propositionId)(getState()), getSelectedFilters(getState()), getProductDataForVariantId(deviceId)(getState()), deviceId, position, getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
    DataLayerUtils.pushAddToCartOfferEvent(getOfferDataInContextForPropositionId(propositionId)(getState()), getSelectedFilters(getState()), getProductDataForVariantId(deviceId)(getState()), deviceId, position, getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
    console.log("selectOffer", propositionId, deviceId);
    dispatch(selectOfferMetaAction(propositionId, position, deviceId, rateplanBaseProductId));

    if ("WWW" === getSalesChannel(getState())) {
        if (getVerifiedMsisdn(getState())) { //verifiedMsisdn set in sessionStorage by PWA
            dispatch(doSmsAccountVerification());
        } else {
            dispatch(doSmsAuthorization());
        }
    } else {
        let process = getSelectedProcessTypeValue(getState());
        if ((getMsisdnVerificationNeeded(getState()) && getVerifiedMsisdn(getState())) ||
            ['ACTIVATION', 'SALE_OF_GOODS', 'INSTALMENT_SALES_OF_GOODS_NC'].includes(process)) {
            dispatch(addToCart());
        } else if ('INSTALMENT_SALES_OF_GOODS' === process) {
            dispatch(addInstallmentSalesOfGoodsToCart());
        } else {
            dispatch(doOpenVerificationModal());
        }
    }
};

export const carouselPreparing = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CAROUSEL_PREPARING
    });
}
export const carouselReady = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CAROUSEL_READY
    });
}
export const tryAddToCartFromLink = () => (dispatch, getState) => {
    if (getAddFromLink(getState())) {
        let propositionId = OnlineUtils.getParameterValueFromUrl('propositionId');
        let serviceplan = OnlineUtils.getParameterValueFromUrl('serviceplan');
        let deviceId = OnlineUtils.getParameterValueFromUrl('chosenDevice');
        if (propositionId) {
            serviceplan = getBaseRatePlanIdByPropositionId(propositionId)(getState());
        } else if (serviceplan) {
            let data = getOffersForCurrentFilters(getState())
            propositionId = getPropositionIdByRatePlanId(serviceplan, data);
        }
        console.log("Try to auto add ***************************************************");
        console.log(propositionId);
        console.log(serviceplan);
        console.log(deviceId);
        dispatch(selectOffer(propositionId, -1, deviceId, serviceplan));
    }
};


export const setCartConfigurationFromUrl = () => (dispatch, getState) => {

    if (OnlineUtils.getParameterValueFromUrl('autoadd')) {
        const serviceplan = OnlineUtils.getParameterValueFromUrl('serviceplan');
        const propositionId = OnlineUtils.getParameterValueFromUrl('propositionId');
        const deviceId = OnlineUtils.getParameterValueFromUrl('chosenDevice');
        dispatch({
            type: ACTIONS.ADD_FROM_LINK,
            serviceplan,
            deviceId,
            propositionId
        });
    }
};
export const preSelectOffer = (propositionId, position, deviceId) => (dispatch, getState) => {
    console.log("PRESELECT OFFER **********************,", propositionId);

    dispatch(selectOfferMetaAction(propositionId, position, deviceId));
    const selectedOffer = getSelectedOffer(getState());
    if (selectedOffer) {
        if (isProductDetailsPage(getState())) {

            DataLayerUtils.pushProductDetailsView(selectedOffer, getSelectedOfferType(getState()), getClientContext(getState()), getSelectedVariant(getState()), getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
        } else {
            //other datalayer

        }
    }
};
export const setSelectedOffer = (propositionId) => (dispatch) => dispatch(selectOfferMetaAction(propositionId));

export const setSelectedOfferForProductList = (propositionId) => (dispatch) => {
    console.log("setSelectedOfferForProductList", propositionId);
    dispatch(selectOfferMetaAction(propositionId));
    dispatch(reloadProductList());
};
const setAvailableInstalment = (propositionId) => (dispatch, state) => {
    const avaliableInstalmentCount = getDeviceInstalmentsCountValueByPropositionId(propositionId)(state);
    let currentInstalmentCountValue = getCurrentDeviceInstalmentsCountValue(state);
    if (avaliableInstalmentCount.indexOf(parseInt(currentInstalmentCountValue)) > -1) {
        console.log("currently set instalmentCountValue accurate: DO NOTHING");
    } else {
        console.log("currently set instalmentCountValue not available: CHANGE ");
        let defaultInstallmentNumber = getDeviceInstalmentsConfigurationInContext(state) && getDeviceInstalmentsConfigurationInContext(state)['default'];
        let deviceInstallmentsCount = (avaliableInstalmentCount && avaliableInstalmentCount.length > 0 && avaliableInstalmentCount.includes(defaultInstallmentNumber)) ? defaultInstallmentNumber : null;
        dispatch({
            type: ACTIONS.SELECT_DEVICE_INSTALMENTS_COUNT,
            deviceInstalmentsCount: deviceInstallmentsCount
        });
    }
};
export const setSelectedDeviceInstalmentsCountForProductList = (deviceInstalmentsCount) => (dispatch) => {
    dispatch({
        type: ACTIONS.SELECT_DEVICE_INSTALMENTS_COUNT,
        deviceInstalmentsCount
    });

    dispatch(reloadProductList());
};


export function setDeviceInstallmentsInSessionForMagnum(deviceInstalmentsCount) {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE,
            deviceInstalmentsCount: deviceInstalmentsCount
        })
    }
}


export const pickDevice = (propositionId, url, position) => (dispatch, getState) => {
    dispatch(clearAddTerminalToOfferFromSessionStorage());
    dispatch(clearDeviceInstalmentsCountFromSessionStorage());
    dispatch(urlParametersUsed);
    dispatch(selectOfferMetaAction(propositionId));
    DataLayerUtils.pushProductClickEvent(getOfferDataInContextForPropositionId(propositionId)(getState()), getSelectedFilters(getState()), position, null, getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
    OnlineUtils.pageRedirect(url);
};

export const clearPropositionId = () => ({
    type: ACTIONS.CLEAR_OFFER
});

export const setDeviceInstalmentsConfiguration = (deviceInstalmentsConfiguration) => ({
    type: ACTIONS.SET_DEVICE_INSTALMENTS_CONFIGURATION,
    deviceInstalmentsConfiguration
});



export const pickDeviceB2B = (url) => (dispatch, getState) => {

    /*Temporary*/
    //let first = parameters[0]
    //dispatch({processType: first.processType, type: ACTIONS.SELECT_PROCESS_TYPE})
    //dispatch(pickDevice(first.offer.id, url))
    OnlineUtils.pageRedirect(url);
}
export const clearDeviceInstalmentsCountFromSessionStorage = () => ({
    type: ACTIONS.CLEAR_DEVICE_INSTALMENTS_COUNT_FROM_SESSION_STORAGE
})

export const fetchContractRole = (availableProductsKey) => (dispatch, getState) => {
    let marketContext = getMarketContext(getState())
    if (["B2B", "B2C"].indexOf(marketContext) === -1) {
        console.log("market context is not B2B (" + marketContext + "). fetchContractRole action skipped")
        return
    }

    availableProductsKey = availableProductsKey || getCurrentSelectedAvailableProductsKey(getState()) || getFirstAvailableProductsKey(getState());
    if (!availableProductsKey) {
        console.log("no availableProductsKey. fetchContractRole action skipped")
        return
    }

    dispatch({
        type: ACTIONS.GET_CONTRACT_ROLE_START
    })
    RemoteApi.getContractRole({
            availableProductsKey
        })
        .then(response => {
            if (response.roles) {
                dispatch({
                    type: ACTIONS.GET_CONTRACT_ROLE_RESPONSE,
                    data: response,
                })
            } else {
                dispatch({
                    type: ACTIONS.GET_CONTRACT_ROLE_ERROR
                })
            }
        }).catch(data => {
            dispatch({
                type: ACTIONS.GET_CONTRACT_ROLE_ERROR
            })
        })
}

export const fetchFirstOffer = (availableProductsKey) => (dispatch, getState) => {
    if (!availableProductsKey) {
        console.log("no availableProductsKey. fetchFirstOffer action skipped")
        availableProductsKey = getFirstAvailableProductsKey(getState());
    }
    dispatch({
        type: ACTIONS.GET_FIRST_OFFER_START
    })
    RemoteApi.getFirstOffer({
            availableProductsKey
        })
        .then(response => {
            if (response) {
                dispatch({
                    type: ACTIONS.GET_FIRST_OFFER_RESPONSE,
                    data: response,
                })
            } else {
                dispatch({
                    type: ACTIONS.GET_FIRST_OFFER_ERROR
                })
            }
        }).catch(data => {
            dispatch({
                type: ACTIONS.GET_FIRST_OFFER_ERROR
            })
        })
}

export const unselectVas = (propositionId, vasId, rateplanName) => (dispatch, getState) => {
    console.log("UNSELECT VAS ", propositionId, vasId, rateplanName);
    dispatch({
        type: ACTIONS.UNSELECT_VAS,
        propositionId,
        vasId,
        rateplanName
    });
};

export const selectVas = (propositionId, vasId, rateplanName) => (dispatch, getState) => {
    console.log("SELECT VAS ", propositionId, vasId, rateplanName);
    dispatch({
        type: ACTIONS.SELECT_VAS,
        propositionId,
        vasId,
        rateplanName
    });
};
export const clearSelectedVases = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CLEAR_SELECTED_VASES
    });
};