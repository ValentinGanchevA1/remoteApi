import {
    SET_ID_VERIFICATION_BANKS,
    SET_ID_VERIFICATION_SELECTED_BANK_ID,
    SET_ID_VERIFICATION_RESULT
} from "../actionTypes";

export const banks = (state = [], action) => {
    switch (action.type) {
        case SET_ID_VERIFICATION_BANKS:
            return action.banks;
        default:
            return state;
    }
};

export const verificationResult = (state = {}, action) => {
    switch (action.type) {
        case SET_ID_VERIFICATION_RESULT:
            return action.verificationResult || {};
        case SET_ID_VERIFICATION_SELECTED_BANK_ID:
            return {
                ...state, selectedBankId: action.selectedBankId
            };
        default:
            return state;
    }
};