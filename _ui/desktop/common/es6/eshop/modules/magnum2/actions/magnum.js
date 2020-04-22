import * as ACTIONS from "../actionTypes";
import {
    createRequestActions
} from "../../core/utils/request-actions-creator";

export const selectProposition = (proposition) => ({
    type: ACTIONS.SELECT_PROPOSITION,
    payload: {
        proposition
    }
});

export const setKnaNumber = (knaNumber) => ({
    type: ACTIONS.SET_KNA_NUMBER,
    payload: {
        knaNumber
    }
});

export const setPropositionComponentPk = (componentPk) => ({
    type: ACTIONS.SET_PROPOSITION_COMPONENT_PK,
    payload: {
        componentPk
    }
});

export const selectDeviceVariant = (productId, variantId) => ({
    type: ACTIONS.SELECT_DEVICE_VARIANT,
    payload: {
        productId,
        variantId
    }
});

export const setFixBroadbandTransaction = (transaction) => ({
    type: ACTIONS.SET_FIX_BROADBAND_TRANSACTION,
    payload: {
        transaction
    }
});

export const setFixVoipTransaction = (transaction) => ({
    type: ACTIONS.SET_FIX_VOIP_TRANSACTION,
    payload: {
        transaction
    }
});

export const setMobileTransaction = (transaction, msisdn) => ({
    type: ACTIONS.SET_MOBILE_TRANSACTION,
    payload: {
        transaction,
        msisdn
    }
});

export const setLoyaltyPeriod = (loyaltyPeriod) => ({
    type: ACTIONS.SET_LOYALTY_PERIOD,
    payload: {
        loyaltyPeriod
    }
});

export const setMagnumStore = (magnum) => ({
    type: ACTIONS.SET_MAGNUM_STORE,
    payload: {
        magnum
    }
});

export const setAvailableBundleTypes = (availableBundleTypes) => ({
    type: ACTIONS.SET_AVAILABLE_BUNDLE_TYPES,
    payload: {
        availableBundleTypes
    }
});

export const searchCustomerPerformed = () => ({
    type: ACTIONS.CUSTOMER_SEARCHED
});

export const showForceSearchCustomer = () => ({
    type: ACTIONS.SHOW_FORCE_SEARCH_MODAL_ACTION
});
export const closeForceSearchCustomer = () => ({
    type: ACTIONS.CLOSE_CUSTOMER_SEARCHED_MODAL
});

export const showForceSearchModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_FORCE_SEARCH_MODAL_ACTION
    });
};

export const openWWTZipModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.OPEN_WWT_ZIP_MODAL
    });
};

export const closeWWTZipModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_WWT_ZIP_MODAL
    });
};

export const fillMissingZipCode = (zip) => (dispatch) => {
    dispatch({
        type: ACTIONS.FILL_MISSING_ZIP_CODE,
        payload: {
            zip
        }
    });
};

export const showOnlyFTTH = (showOnlyFTTH) => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_ONLY_FTTH,
        payload: showOnlyFTTH
    })
};

export const fetchDocumentsListActions = createRequestActions(ACTIONS.fetchDocumentsList);
export const fetchPropositionListActions = createRequestActions(ACTIONS.fetchPropositionList);
export const fetchDeviceListActions = createRequestActions(ACTIONS.fetchDeviceList);
export const fetchPossibleTransactions = createRequestActions(ACTIONS.fetchPossibleTransactions);