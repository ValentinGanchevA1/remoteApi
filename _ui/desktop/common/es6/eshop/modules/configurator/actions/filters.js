import * as ACTIONS from "../actionTypes";
import * as CART_ACTIONS from "../../cart/actionTypes";
import {
    SELECT_OFFER_TYPE
} from "eshop/modules/simfree/actionTypes"
import RemoteApi from "../remoteApi";
import {
    getCallOffersWithMsisdn,
    getClientContext,
    getClientContextChangeHandlers,
    getDefaultFilters,
    getSelectedFilters,
    getSelectedFiltersByIndexB2B,
    getSelectedFiltersProcessType,
    getSelectedLoyaltyLengthValue,
    getSelectedOfferType,
    getSelectedProcessTypeValue,
    getUseDefaultLoyalty,
    getUseDefaultOffer,
    getUseDefaultProcess,
    getVerifiedMsisdn,
    getCheckMsisdnResult,
} from "../selectors/filters";
import {
    getCurrentSelectedAvailableProductsKey,
    getDefaultProposition,
    getDeliveryAndPaymentComponentUid,
    getSelectedBaseDeviceCode,
    getSelectedVariant,
    isProductListPage
} from "eshop/modules/simfree/selectors";
import {
    checkOffersForCurrentIndexedFiltersB2B,
    getDocumentsRequested,
    getOffersDataInContext,
    getOffersForCurrentFilters,
    getRateplanIdsObj,
    getSelectedBaseRatePlanId,
    getSelectedDeviceId,
    getSelectedOffer,
} from "../selectors/offers";
import {
    fetchContractRole,
    setSelectedOffer,
    tryAddToCartFromLink,
} from "eshop/modules/configurator/actions/offers";
import {
    reloadProductList
} from "eshop/modules/simfree/actions/filter";
import OnlineUtils from "eshop/utils/OnlineUtils";
import DataLayerUtils from "eshop/utils/DataLayerUtils";
import {
    getUrlOfferParametersUsed,
    getUrlParametersUsed
} from "eshop/modules/configurator/selectors/metaData"
import * as remote from "../../magnum2/actions/magnum";
import {
    fetchDeliveryAndPaymentHtml,
    trySetDefaultOffer,
    fetchIfActivePickupFromShelf,
    matchPropositionIdToselectedRatePlan,
} from "../../simfree/actions/app";
import {
    getFiltersData,
    getMarketContext
} from "../selectors/filters";
import {
    getPriceIsNet
} from "../../cart/selectors";
import {
    getSalesChannel
} from "../../auth/selectors/authorization";
import {
    getAssistModeStateData
} from "../../checkout/selectors";
import {
    getSelectedSoftBundleGroup
} from "eshop/modules/simfree/selectors";
import {
    filtersMatching
} from "../utils";
import _ from "lodash";
import {
    getFiltersState
} from "../selectors/root";
import {
    requestLoggedCustomerData
} from "../../auth/actions/api";
import TransactionProcessType from "../../core/constants/TransactionProcessTypeEnum";
import SimfreeUtils from "../../../utils/SimfreeUtils";
import {
    isAccessoryListPage
} from "../../simfree/selectors";

export const setClientContext = isEnabled => (dispatch, getState) => {
    dispatch({
        type: isEnabled ? ACTIONS.CLIENT_CONTEXT_ENABLED : ACTIONS.CLIENT_CONTEXT_DISABLED
    });

    let handlers = getClientContextChangeHandlers(getState());
    handlers.forEach(e => dispatch(e()));
    DataLayerUtils.pushSIMOImpressionEvent(getOffersDataInContext(getState()).offers, getSelectedFilters(getState()), getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
};


export const subscribeToClientContextChange = (action) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CLIENT_CONTEXT_CHANGE_SUBSCRIPTION,
        handler: action,
    })
};


const setCurrentProposition = (offerArray) => (dispatch, getState) => {

    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$ setCurrentProposition $$$$$$$$$$$$$$$$$$$$");
    offerArray = offerArray || getOffersForCurrentFilters(getState());
    dispatch({
        type: ACTIONS.CAROUSEL_READY
    });
    if (!getUseDefaultOffer(getState())) {
        dispatch(matchPropositionIdToselectedRatePlan());
        return;
    }
    const selectedRatePlanId = getSelectedBaseRatePlanId(getState());
    const newPropositionId = offerArray.find(offer => offer.rateplanBaseProductId === selectedRatePlanId);
    dispatch(setSelectedOffer(newPropositionId && newPropositionId.id || offerArray[0] && offerArray[0].id))
};

export const setPropositionListSoftBundleGroup = () => (dispatch, getState) => {

    console.log("ACTIONS.PROPOSITION_LIST_SOFT_BUNDLE_GROUP ", getSelectedSoftBundleGroup(getState()));

    dispatch({
        type: ACTIONS.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
        softBundleGroup: getSelectedSoftBundleGroup(getState()),
    })
};
export const clearPropositionListOfferType = () => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.PROPOSITION_LIST_OFFER_TYPE,
        offerType: null,
    });
    dispatch({
        type: ACTIONS.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
        softBundleGroup: null,
    })
};
export const clearPropositionListSoftBundleGroup = () => (dispatch, getState) => {

    dispatch({
        type: ACTIONS.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
        softBundleGroup: null,
    })
};
export const getOffersAction = (dispatch, getState, availableProductsKey = "") => {
    dispatch({
        type: ACTIONS.FETCH_OFFERS_START,
    });
    const deviceCode = getSelectedBaseDeviceCode(getState());
    const selectedFilters = getSelectedFilters(getState());
    return RemoteApi.getOffers(selectedFilters, availableProductsKey, deviceCode)
        .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_OFFERS,
                    payload: response,
                    selectedFilters: selectedFilters,
                    useDefaultProcess: getUseDefaultProcess(getState()),
                    useDefaultLoyalty: getUseDefaultLoyalty(getState()),
                    useDefaultOffer: getUseDefaultOffer(getState()),
                });
                getDocumentsAction(dispatch, getState);

                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% getOffersAction");
                dispatch(trySetDefaultOffer());
                fetchIfActivePickupFromShelf(dispatch, getState);
                if (isProductListPage(getState()) || isAccessoryListPage(getState())) {
                    reloadProductList()(dispatch, getState);
                }
                DataLayerUtils.pushSIMOImpressionEvent(getOffersDataInContext(getState()).offers, selectedFilters, getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
                dispatch(tryAddToCartFromLink());
            },
            error => console.error("Offers not fetched! getOffersAction getOffers error", error))
};

export const getProductListOffersAction = (dispatch, getState, availableProductsKey = "", isInitialFetch = false) => {
    dispatch({
        type: ACTIONS.FETCH_OFFERS_START,
    });

    const deviceCode = getSelectedDeviceId(getState());
    const selectedFilters = getSelectedFilters(getState());
    RemoteApi.getOffers(selectedFilters, availableProductsKey, deviceCode, isInitialFetch)
        .then(response => {
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response,
                selectedFilters: selectedFilters,
            });
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% getProductListOffersAction");

            dispatch(trySetDefaultProposition());
            dispatch(trySetDefaultOffer());
            getDocumentsAction(dispatch, getState);
            reloadProductList()(dispatch, getState);
            dispatch(tryAddToCartFromLink());
        })
        .catch(error => {
            console.error("offers not fetched", error);
        })
};

export const getProductDetailsOffersWithoutOfferSelectorAction = (dispatch, getState, availableProductsKey = "", isInitialFetch = false) => {
    dispatch({
        type: ACTIONS.FETCH_OFFERS_START,
    });

    const deviceCode = getSelectedBaseDeviceCode(getState());
    const selectedFilters = getSelectedFilters(getState());
    RemoteApi.getOffersWithoutOfferSelector(selectedFilters, availableProductsKey, deviceCode, isInitialFetch)
        .then(response => {
                dispatch({
                    type: ACTIONS.FETCH_OFFERS,
                    payload: response,
                    selectedFilters: selectedFilters,
                });
                getDocumentsAction(dispatch, getState);
                fetchIfActivePickupFromShelf(dispatch, getState);
                dispatch(trySetDefaultProposition());
                dispatch(trySetDefaultOffer());
                DataLayerUtils.pushProductDetailsView(getSelectedOffer(getState()), getSelectedOfferType(getState()), getClientContext(getState()), getSelectedVariant(getState()), getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
                dispatch(tryAddToCartFromLink());
            },
            error => {
                console.warn("getProductDetailsOffersAction offers not fetched", error)
            })
        .catch(error => {
            console.error("getProductDetailsOffersAction failed", error);
        });
};

export const getProductDetailsConvergentOffersAction = (dispatch, getState) => {
    dispatch({
        type: ACTIONS.FETCH_OFFERS_START,
    });
    const magnumStore = getState().magnum;
    const deviceCode = getSelectedBaseDeviceCode(getState());
    const propositionIds = magnumStore.durationList.propositions.map(proposition => proposition.mobileVoiceBundleTemplateCode);
    let processType = null;

    if (magnumStore.selectedProposition && magnumStore.selectedProposition.voice &&
        magnumStore.selectedProposition.mobileVoiceBundleTemplateCode &&
        magnumStore.selectedProposition.mobileVoiceBundleTemplateCode.includes(magnumStore.selectedProposition.voice.code)) {
        if ("POS" === magnumStore.possibleTransactions.salesChannel && "MNP" === magnumStore.selectedMobileTransaction.process) {
            processType = "MNP_TWOSTEP";
        } else {
            processType = magnumStore.selectedMobileTransaction.process;
        }
    } else {
        processType = magnumStore.selectedFixBroadbandTransaction.process;
    }

    RemoteApi.getConvergentOffers(processType, deviceCode, propositionIds)
        .then(response => {
            dispatch({
                type: ACTIONS.FETCH_OFFERS,
                payload: response,
                selectedFilters: getSelectedFilters(getState()),
            });
            filterOffersContainingDevice(dispatch, magnumStore, response);
        });
};

function filterOffersContainingDevice(dispatch, magnumStore, offersData) {
    const availableOfferIds = offersData.map(offer => offer.id);
    const propositions = magnumStore.durationList.propositions;
    magnumStore.durationList.propositions = propositions.filter(proposition => availableOfferIds.indexOf(proposition.mobileVoiceBundleTemplateCode) !== -1);
    dispatch(remote.fetchPropositionListActions.success(magnumStore.durationList));
}

export const getDocumentsAction = (dispatch, getState) => {
    const process = getSelectedFiltersProcessType(getState());
    const ratePlanIds = getRatePlanIds(process)(getState);
    RemoteApi.getDocuments(ratePlanIds, process).then(response => {
        dispatch({
            type: ACTIONS.SELECT_DOCUMENTS,
            payload: response,
        })
    });
};

const getRatePlanIds = process => getState => {
    if (process && TransactionProcessType.SALE_OF_GOODS === process.processType) {
        return {
            productIds: [SimfreeUtils.CPO]
        };
    }
    return getRateplanIdsObj(getState());
};

export const fetchOfferFilters = () => (dispatch, getState) => {
    RemoteApi.getOfferFilters().then(response => {
        dispatch({
            type: ACTIONS.FETCH_OFFER_FILTERS,
            payload: response,
            urlParametersUsed: getUrlParametersUsed(getState()),
            useDefaultProcess: getUseDefaultProcess(getState()),
            useDefaultLoyalty: getUseDefaultLoyalty(getState()),
        });
        OnlineUtils.saveInSessionStorageAndUrlParameterDisabledOnCheckout("processType", getSelectedProcessTypeValue(getState()));

        if (typeof Feedback !== "undefined") {
            Feedback.showHideFeedback();
        }
        dispatch(fetchContractRole());
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% fechOfferFilters");
        getOffersAction(dispatch, getState)
    }).catch(error => {
        console.error("Cannot get filters", error);
    })
};

export const checkMsisdnAndGetOffers = msisdn => (dispatch, getState) => {
    console.log("checkMsisdnAndGetOffers", msisdn);
    dispatch({
        type: ACTIONS.CHECK_MSISDN
    });
    const deviceCode = getSelectedDeviceId(getState());
    const selectedFilters = getSelectedFilters(getState());
    const marketContext = getMarketContext(getState());
    const availableProductsKey = getCurrentSelectedAvailableProductsKey(getState());
    RemoteApi.checkAndGetOffers(msisdn, selectedFilters, availableProductsKey, deviceCode)
        .then(response => {
            dispatch({
                type: ACTIONS.CHECK_MSISDN_RESULT,
                payload: {
                    response: response,
                    process: selectedFilters.processType,
                    offer: selectedFilters.offerType,
                    market: marketContext,
                },
            });
            if (response.isPositive) {
                dispatch(fetchContractRole());
                dispatch({
                    type: ACTIONS.FETCH_OFFERS,
                    payload: response.offers,
                    selectedFilters: getSelectedFilters(getState()),
                });

                dispatch(requestLoggedCustomerData());
                getDocumentsAction(dispatch, getState);
                dispatch(setProcessForMsisdn(msisdn, selectedFilters.processType, response.process));

                DataLayerUtils.pushSIMOImpressionEvent(
                    getOffersDataInContext(getState()).offers,
                    selectedFilters,
                    getMarketContext(getState()),
                    getSalesChannel(getState()),
                    getAssistModeStateData(getState())
                );
            }
        }).catch(response => {
            console.error("checkMsisdnAndGetOffers ");
            dispatch({
                type: ACTIONS.CHECK_MSISDN_ERROR,
                message: response.responseText,
                payload: {
                    response: {
                        msisdn: msisdn
                    },
                    process: selectedFilters.processType,
                    offer: selectedFilters.offerType,
                    market: marketContext
                }
            });
        });
};
export const checkMsisdnAndGetOffersB2B = (msisdn, index) => (dispatch, getState) => {
    const selectedFilters = getSelectedFiltersByIndexB2B(index)(getState());
    dispatch({
        type: ACTIONS.CHECK_MSISDN_RESULT_B2B_START,
        index
    });
    RemoteApi.checkAndGetOffers(msisdn, selectedFilters)
        .then(response => {
            if (response.isPositive) {
                dispatch({
                    type: ACTIONS.CHECK_MSISDN_RESULT_B2B,
                    status: "OK",
                    description: response.description,
                    msisdn,
                    index,
                });
                selectedFilters.verifiedMsisdn = msisdn;
                dispatch({
                    type: ACTIONS.FETCH_OFFERS,
                    payload: response.offers,
                    selectedFilters: selectedFilters,
                    useDefaultProcess: getUseDefaultProcess(getState()),
                    useDefaultLoyalty: getUseDefaultLoyalty(getState()),
                    useDefaultOffer: getUseDefaultOffer(getState()),
                })
            } else {
                dispatch({
                    type: ACTIONS.CHECK_MSISDN_RESULT_B2B,
                    status: "NOK",
                    description: response.description,
                    msisdn: null,
                    index,
                });
            }
        }).catch(error => {
            console.error("Error checking MSISDN", error);
            dispatch({
                type: ACTIONS.CHECK_MSISDN_RESULT_B2B,
                status: "NOK",
                msisdn: null,
                index,
            });
        });
};



const manageChackMsisdnAndGetOffersProductList = (response, selectedFilters) => (dispatch, getState) => {
    console.log("checkMsisdnAndGetOffersProductList response", response);
    const marketContext = getMarketContext(getState());
    dispatch({
        type: ACTIONS.CHECK_MSISDN_RESULT,
        payload: {
            response: response,
            process: selectedFilters.processType,
            offer: selectedFilters.offerType,
            market: marketContext,
        },
    });
    dispatch(fetchContractRole());
    dispatch({
        type: ACTIONS.FETCH_OFFERS,
        payload: response.offers,
        selectedFilters: getSelectedFilters(getState()),
    });
    dispatch(trySetDefaultOffer(response));
    console.log("after trySetDefaultOffer");
    dispatch(trySetDefaultProposition());
    getDocumentsAction(dispatch, getState);
    DataLayerUtils.pushSIMOImpressionEvent(
        getOffersDataInContext(getState()).offers,
        selectedFilters,
        getMarketContext(getState()),
        getSalesChannel(getState()),
        getAssistModeStateData(getState())
    );
    console.log("after pushSIMOImpressionEvent");
    reloadProductList()(dispatch, getState);
    console.log("WSZYSTKO GRA");

};

export const checkMsisdnAndGetOffersProductList = msisdn => (dispatch, getState) => {
    console.log("checkMsisdnAndGetOffersProductList (", msisdn);
    dispatch({
        type: ACTIONS.CHECK_MSISDN
    });
    const deviceCode = getSelectedDeviceId(getState()) || getSelectedBaseDeviceCode(getState());
    const selectedFilters = getSelectedFilters(getState());
    const availableProductsKey = getCurrentSelectedAvailableProductsKey(getState());

    if (getCheckMsisdnResult(getState())) {
        dispatch(manageChackMsisdnAndGetOffersProductList(getCheckMsisdnResult(getState()), selectedFilters));
    } else
        RemoteApi.checkAndGetOffers(msisdn, selectedFilters, availableProductsKey, deviceCode).then(response => {
            dispatch(manageChackMsisdnAndGetOffersProductList(response, selectedFilters));
        }).catch(response => {
            console.error("checkMsisdnAndGetOffersProductList ");
            const marketContext = getMarketContext(getState());
            dispatch({
                type: ACTIONS.CHECK_MSISDN_ERROR,
                message: response.responseText,
                payload: {
                    response: {
                        msisdn: msisdn
                    },
                    process: selectedFilters.processType,
                    offer: selectedFilters.offerType,
                    market: marketContext
                }
            });
        });
};

export const setMaxSimCount = maxSimCount => ({
    type: ACTIONS.SET_MAX_SIM_COUNT,
    maxSimCount
});
export const clearCheckMsisdn = () => ({
    type: ACTIONS.CLEAR_CHECK_MSISDN,
    payload: []
});
export const clearCheckMsisdnB2B = index => ({
    type: ACTIONS.CLEAR_CHECK_MSISDN_B2B,
    index
});
export const propositionListCountIncrement = () => (dispatch, getState) => (dispatch({
    type: ACTIONS.PROPOSITION_LIST_COUNT_INCREMENT,
    defaultFilters: getDefaultFilters(getState())
}));
export const propositionListCountDecrement = () => ({
    type: ACTIONS.PROPOSITION_LIST_COUNT_DECREMENT
});
export const propositionListCountSet = count => ({
    type: ACTIONS.PROPOSITION_LIST_COUNT_SET,
    count: count
});
export const propositionListCountSetMode = on => ({
    type: ACTIONS.PROPOSITION_LIST_COUNT_SET_MODE,
    on: on
});
export const msisdnVerificationNeeded = {
    type: ACTIONS.MSISDN_VERIFICATION_NEEDED
};
export const changeMsisdnInput = (msisdn, valid) => ({
    type: ACTIONS.MSISDN_INPUT_CHANGED,
    payload: {
        msisdn: msisdn,
        valid: valid
    }
});
export const requiredMsisdnVerificationOn = () => dispatch => {
    dispatch({
        type: ACTIONS.MSISDN_VERIFICATION_REQUIRED_ON
    });
};
export const requiredMsisdnVerificationOff = () => dispatch => {
    dispatch({
        type: ACTIONS.MSISDN_VERIFICATION_REQUIRED_OFF
    });
};

export const urlParametersUsed = {
    type: ACTIONS.URL_PARAMETERS_USED
};
export const urlOfferParametersUsed = {
    type: ACTIONS.URL_OFFER_PARAMETERS_USED
};

export const clearOfferType = () => ({
    type: SELECT_OFFER_TYPE,
    offerType: ""
});
export const clearProcessType = () => ({
    type: ACTIONS.SELECT_PROCESS_TYPE,
    processType: ""
});
export const clearLoyaltyLength = () => ({
    type: ACTIONS.CLEAR_LOYALTY_LENGTH
});

export const selectLoyaltyLength = loyaltyLength => selectLoyaltyLengthMetaAction(loyaltyLength, getOffersAction);
export const selectProductListLoyaltyLength = loyaltyLength => selectLoyaltyLengthMetaAction(loyaltyLength, getProductListOffersAction);
export const selectProductDetailsLoyaltyLength = loyaltyLength => selectLoyaltyLengthMetaAction(loyaltyLength, getProductDetailsOffersWithoutOfferSelectorAction);
export const selectLoyaltyLengthB2B = loyaltyLength => selectLoyaltyLengthMetaAction(loyaltyLength, getOffersAction);

export const selectProcessType = processType => selectProcessTypeMetaAction(processType, getOffersAction);
export const selectProductListProcessType = processType => selectProcessTypeMetaAction(processType, getProductListOffersAction);
export const selectProductDetailsProcessType = processType => selectProcessTypeMetaAction(processType, getProductDetailsOffersWithoutOfferSelectorAction);
export const selectProcessTypeB2B = (processType, index) => selectProcessTypeMetaAction(processType, index, getOffersActionB2B);

export const setMarketContext = market => (dispatch, getState) => {
    const marketContext = getMarketContext(getState());
    const priceIsNet = getPriceIsNet(getState());
    console.warn("setMarketContext");
    if (marketContext !== market || priceIsNet === null || priceIsNet === undefined) {
        dispatch({
            type: CART_ACTIONS.SET_PRICE_VIEW_NET,
            market,
        })
    }
    dispatch({
        type: ACTIONS.SET_MARKET_CONTEXT,
        market,
    })
};

export const verifyMsisdnB2B = (msisdn, index) => (dispatch) => {
    dispatch({
        type: ACTIONS.CHECK_MSISDN_RESULT_B2B,
        msisdn,
        index,
    });
};

const selectLoyaltyLengthMetaAction = (loyaltyLength, getOffersActionMetaAction) => (dispatch, getState) => {
    const actualLoyaltyLength = getSelectedLoyaltyLengthValue(getState());
    if (actualLoyaltyLength === loyaltyLength) {
        return;
    }
    dispatch({
        loyaltyLength,
        type: ACTIONS.SELECT_LOYALTY_LENGTH,
        processType: getSelectedProcessTypeValue(getState())
    });
    if (getCallOffersWithMsisdn(getState())) {
        checkMsisdnAndGetOffers(getVerifiedMsisdn(getState()))(dispatch, getState);

    } else if (!getOffersForCurrentFilters(getState())) {
        getOffersActionMetaAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()))
            .then(() => dispatch(setCurrentProposition()));
    } else {
        dispatch(setCurrentProposition(getOffersForCurrentFilters(getState())));
        DataLayerUtils.pushSIMOImpressionEvent(
            getOffersDataInContext(getState()).offers,
            getSelectedFilters(getState()),
            getMarketContext(getState()),
            getSalesChannel(getState()),
            getAssistModeStateData(getState())
        );
    }
};
const selectProductListLoyaltyLengthMetaAction = (loyaltyLength, getOffersActionMetaAction) => (dispatch, getState) => {
    dispatch({
        loyaltyLength,
        type: ACTIONS.SELECT_LOYALTY_LENGTH,
        processType: getSelectedProcessTypeValue(getState())
    });
    if (getCallOffersWithMsisdn(getState())) {
        checkMsisdnAndGetOffersProductList(getVerifiedMsisdn(getState()))(dispatch, getState);

    } else if (!getOffersForCurrentFilters(getState())) {
        getOffersActionMetaAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()))

    } else {
        dispatch(setCurrentProposition(getOffersForCurrentFilters(getState())));
        DataLayerUtils.pushSIMOImpressionEvent(getOffersDataInContext(getState()).offers, getSelectedFilters(getState()), getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
        dispatch(reloadProductList())
    }
};
const selectProductDetailsLoyaltyLengthMetaAction = (loyaltyLength, getOffersActionMetaAction) => (dispatch, getState) => {
    console.log("selectProductDetailsLoyaltyLengthMetaAction", loyaltyLength);

    dispatch({
        loyaltyLength,
        type: ACTIONS.SELECT_LOYALTY_LENGTH,
        processType: getSelectedProcessTypeValue(getState())
    });
    if (getCallOffersWithMsisdn(getState())) {
        checkMsisdnAndGetOffersProductList(getVerifiedMsisdn(getState()))(dispatch, getState);

    } else if (!getOffersForCurrentFilters(getState())) {
        getOffersActionMetaAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()))
    } else {
        dispatch(setCurrentProposition(getOffersForCurrentFilters(getState())));
        DataLayerUtils.pushSIMOImpressionEvent(getOffersDataInContext(getState()).offers, getSelectedFilters(getState()), getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
    }
};

const selectLoyaltyLengthB2BMetaAction = (loyaltyLength, index, getOffersActionMetaAction) => (dispatch, getState) => {
    console.log("selectLoyaltyLengthB2BMetaAction", loyaltyLength);
    dispatch({
        loyaltyLength,
        index,
        type: ACTIONS.SELECT_LOYALTY_LENGTH_B2B
    });
    dispatch({
        type: ACTIONS.SELECT_OFFER_B2B,
        propositionId: null,
        index
    });
    if (!checkOffersForCurrentIndexedFiltersB2B(index)(getState())) {
        getOffersActionMetaAction(dispatch, getState, index)
    }
};




const selectProcessTypeMetaAction = (processType, getOffersActionMetaAction) => (dispatch, getState) => {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&   selectProcessTypeMetaAction   &&&&&&&&&&");
    console.log(processType);
    let actualProcessType = getSelectedProcessTypeValue(getState());
    if (actualProcessType == processType) {
        return;
    }
    dispatch({
        processType,
        type: ACTIONS.SELECT_PROCESS_TYPE,
        availableLoyalties: getFiltersData(getState())
    })


    console.log(getOffersForCurrentFilters(getState()));
    if (!getOffersForCurrentFilters(getState())) {
        console.log("if(!getOffersForCurrentFilters(getState()))  TRUE");
        getOffersActionMetaAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()))
    } else {
        console.log("if(!getOffersForCurrentFilters(getState()))  else");

        dispatch(setCurrentProposition(getOffersForCurrentFilters(getState())));
        DataLayerUtils.pushSIMOImpressionEvent(getOffersDataInContext(getState()).offers, getSelectedFilters(getState()), getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
        if (isProductListPage(getState()) || isAccessoryListPage(getState())) {
            reloadProductList()(dispatch, getState);
        }
        getDocumentsAction(dispatch, getState)
    }
    if (getDeliveryAndPaymentComponentUid(getState())) {
        fetchDeliveryAndPaymentHtml()(dispatch, getState)
    }
};
const selectProductListProcessTypeMetaAction = (processType, getOffersActionMetaAction) => (dispatch, getState) => {
    dispatch({
        processType,
        type: ACTIONS.SELECT_PROCESS_TYPE
    });
    if (!getOffersForCurrentFilters(getState())) {
        getOffersActionMetaAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()))
    } else {
        dispatch(setCurrentProposition(getOffersForCurrentFilters(getState())));
        DataLayerUtils.pushSIMOImpressionEvent(getOffersDataInContext(getState()).offers, getSelectedFilters(getState()), getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
        dispatch(reloadProductList())
    }
};
const selectProductDetailsProcessTypeMetaAction = (processType, getOffersActionMetaAction) => (dispatch, getState) => {
    dispatch({
        processType,
        type: ACTIONS.SELECT_PROCESS_TYPE
    });
    if (!getOffersForCurrentFilters(getState())) {
        getOffersActionMetaAction(dispatch, getState, getCurrentSelectedAvailableProductsKey(getState()))
    } else {
        dispatch(setCurrentProposition(getOffersForCurrentFilters(getState())));
        DataLayerUtils.pushSIMOImpressionEvent(getOffersDataInContext(getState()).offers, getSelectedFilters(getState()), getMarketContext(getState()), getSalesChannel(getState()), getAssistModeStateData(getState()));
    }
};

const selectProcessTypeB2BMetaAction = (processType, index, getOffersActionMetaAction) => (dispatch, getState) => {
    dispatch({
        processType,
        index,
        type: ACTIONS.SELECT_PROCESS_TYPE_B2B
    });
    dispatch({
        type: ACTIONS.SELECT_OFFER_B2B,
        propositionId: null,
        index
    });
    if (!checkOffersForCurrentIndexedFiltersB2B(index)(getState())) {
        getOffersActionMetaAction(dispatch, getState, index)
    }
};

const trySetDefaultProposition = () => (dispatch, getState) => {
    const propositions = getOffersDataInContext(getState()).offers || [];
    const defProposition = getDefaultProposition(getState());
    const urlServicePlan = OnlineUtils.getParameterValueFromUrl("serviceplan");
    if (!getUrlOfferParametersUsed(getState()) && urlServicePlan) {
        const propositionsForRatePlan = propositions.filter(offer => offer.rateplanBaseProductId === urlServicePlan);
        const propositionForRatePlan = pickProposition(propositionsForRatePlan) || propositionsForRatePlan[0];

        dispatch(setSelectedOffer(propositionForRatePlan && propositionForRatePlan.id));
    } else if (OnlineUtils.loadFromSessionStorage("selectedPropositionId")) {
        dispatch(setCurrentProposition(propositions));
    } else if (defProposition) {
        if (propositions.find(offer => offer.id === defProposition)) {
            dispatch(setSelectedOffer(defProposition));
        } else {
            console.error("Wrong default proposition: " + defProposition);
            dispatch(setCurrentProposition(propositions));
        }
    }
    dispatch(urlOfferParametersUsed);
};

export const setProcessForMsisdn = (msisdn, genericProcess, concreteProcess) => (dispatch, getState) => {
    dispatch({
        msisdn,
        genericProcess,
        concreteProcess,
        type: ACTIONS.PROCESS_FOR_MSISDN
    })
};

const pickProposition = (propositionsForRatePlan) => {
    const selectedPropositionId = OnlineUtils.getParameterValueFromUrl("selectedPropositionId") || OnlineUtils.loadFromSessionStorage("selectedPropositionId");
    return propositionsForRatePlan.find(p => selectedPropositionId == p.id);
};

export const isMatchingFilters = () => (dispatch, getState) => {
    const filters = getFiltersState(getState());
    return filtersMatching(filters);
};