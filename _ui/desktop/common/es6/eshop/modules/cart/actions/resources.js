import * as ACTIONS from "../actionTypes";
import RemoteApi from "../remoteApi";
import {
    allCartEntries,
    getMsisdns,
    getResourceModalBundleNo,
    getSimCards,
    getMsisdn,
    getSimCard,
    getEntryForResourceModal
} from "../selectors";
import {
    getCartIsNet,
    getPriceIsNet
} from "eshop/modules/cart/selectors";
import {
    reloadCartState
} from "./cart";

export const resourceModalOpen = (bundleNo) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.RESOURCE_MODAL_OPEN,
        bundleNo: bundleNo,
        entry: allCartEntries(getState()).find(entry => entry.bundleNo === bundleNo)
    });
};

export const lowerInstallmentsModalOpen = (bundleNo) => (dispatch) => {
    dispatch({
        type: ACTIONS.LOWER_INSTALLMENTS_MODAL_OPEN,
        bundleNo: bundleNo
    });
};

export const lowerInstallmentsModaClose = (bundleNo) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.LOWER_INSTALLMENTS_MODAL_CLOSE,
        bundleNo: bundleNo
    });
};

export const resourceModalClose = (bundleNo) => (dispatch) => {
    dispatch({
        type: ACTIONS.RESOURCE_MODAL_CLOSE,
        bundleNo: bundleNo
    });
};

const changeMsisdnFailed = (bundleNo, response) => (dispatch) => {
    dispatch({
        type: ACTIONS.CHANGE_MSISDN_FAILED,
        payload: response
    });
    fetchMsisdns()(dispatch);
};

const changeMsisdnSuccess = (bundleNo, response) => (dispatch, getState) => {
    dispatch({
        type: ACTIONS.CHANGE_MSISDN_SUCCESS,
        bundleNo: bundleNo,
        payload: response
    });
    reloadCartState()(dispatch, getState);
};

/*
 * Checks if HTTP200 wraps error message
 */
const changeMsisdn200Handler = (dispatch, getState, bundleNo, responseData) => {
    if (responseData && responseData.message && typeof responseData.message === "string") {
        dispatch(changeMsisdnFailed(bundleNo, responseData));
    } else {
        dispatch(changeMsisdnSuccess(bundleNo, responseData));
    }
};

export const updateResources = () => (dispatch, getState) => {
    const msisdn = getMsisdn(getState());
    const simCard = getSimCard(getState());
    const entry = getEntryForResourceModal(getState());
    const bundleNo = getResourceModalBundleNo(getState());
    const changedMsisdn = msisdn && msisdn !== entry.msisdn;
    const changedSimCard = !entry.simCard && !!simCard.id || !!entry.simCard && simCard.id !== entry.simCard.id;
    const propositionId = entry.propositionId != null ? entry.propositionId : entry.bundleCode;
    if (changedMsisdn && changedSimCard) {
        updateCartSimCardsAndMsisdn(propositionId,
            entry.productCode,
            bundleNo,
            entry.simCard ? [entry.simCard.id] : [],
            simCard.id === "" ? [] : [simCard.id],
            msisdn)(dispatch, getState);
    } else if (changedMsisdn) {
        updateCartMsisdn(msisdn, bundleNo)(dispatch, getState);
    } else if (changedSimCard) {
        updateCartSimCards(propositionId,
            entry.productCode,
            bundleNo,
            entry.simCard ? [entry.simCard.id] : [],
            simCard.id === "" ? [] : [simCard.id])(dispatch, getState);
    } else {
        resourceModalClose(bundleNo)(dispatch);
    }
};

function updateCartSimCards(bundle, offer, bundleNo, productsToRemove, productsToAdd) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.CHANGE_SIMCARD
        });
        RemoteApi.postUpdateCartSimCards(bundle, offer, bundleNo, productsToRemove, productsToAdd)
            .then(() => {
                dispatch({
                    type: ACTIONS.CHANGE_SIMCARD_SUCCESS
                });
                reloadCartState()(dispatch, getState);
            });
    };
}

function updateCartMsisdn(msisdn, bundleNo) {
    return (dispatch, getState) => {
        dispatch({
            type: ACTIONS.CHANGE_MSISDN
        });
        RemoteApi.changeMsisdn(msisdn, bundleNo).then(
            responseData => changeMsisdn200Handler(dispatch, getState, bundleNo, responseData)
        );
    };
}

function updateCartSimCardsAndMsisdn(bundle, offer, bundleNo, productsToRemove, productsToAdd, msisdn) {
    return (dispatch, getState) => {
        RemoteApi.changeMsisdn(msisdn, bundleNo)
            .then(responseData => {
                if (responseData && responseData.message && typeof responseData.message === "string") {
                    dispatch({
                        type: ACTIONS.CHANGE_MSISDN_FAILED,
                        payload: responseData
                    });
                } else {
                    RemoteApi.postUpdateCartSimCards(bundle, offer, bundleNo, productsToRemove, productsToAdd)
                        .then(() => {
                            dispatch({
                                type: ACTIONS.CHANGE_SIMCARD_SUCCESS
                            });
                            reloadCartState()(dispatch, getState);
                        });
                    dispatch({
                        type: ACTIONS.CHANGE_MSISDN_SUCCESS,
                        bundleNo: bundleNo,
                        payload: responseData
                    });
                }
            });
    };
}

export function fetchMsisdns() {
    return (dispatch, getState) => {
        const msisdns = getMsisdns(getState());
        if (!msisdns.length) {
            RemoteApi.getMsisdns(getResourceModalBundleNo(getState()))
                .then((response) => dispatch({
                    type: ACTIONS.FETCH_MSISDNS,
                    payload: response
                }));
        }
    };
}

export function fetchSimCards() {
    return (dispatch, getState) => {
        const bundleNo = getResourceModalBundleNo(getState());
        RemoteApi.getSimCards(bundleNo).then((response) => {
            dispatch({
                type: ACTIONS.FETCH_SIM_CARDS,
                bundleNo: bundleNo,
                payload: response
            });
        });
    };
}

export const changeMsisdn = (msisdn) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_MSISDN,
        msisdn
    });
};

export const changeSimCard = (simCard) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_SIMCARD,
        simCard
    });
};