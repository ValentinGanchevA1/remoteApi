import * as actionTypes from "../actionTypes";

export const selectedFixBroadbandTransactionReducer = (state = {
    process: null,
    number: null,
    pots: false
}, action) => {
    switch (action.type) {
        case actionTypes.SET_FIX_BROADBAND_TRANSACTION:
            return action.payload.transaction;
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.selectedFixBroadbandTransaction;
        default:
            return state;
    }
};
export const selectedFixVoipTransactionReducer = (state = {
    process: null,
    number: null,
    pots: false
}, action) => {
    switch (action.type) {
        case actionTypes.SET_FIX_VOIP_TRANSACTION:
            return action.payload.transaction;
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.selectedFixVoipTransaction;
        default:
            return state;
    }
};
export const selectedMobileTransactionReducer = (state = {
    process: null,
    number: null,
    pots: false
}, action) => {
    switch (action.type) {
        case actionTypes.SET_MOBILE_TRANSACTION:
            return {
                ...action.payload.transaction, number: action.payload.msisdn
            };
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.selectedMobileTransaction;
        default:
            return state;
    }
};