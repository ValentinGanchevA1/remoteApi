import * as actionTypes from "../actionTypes";

export const searchCustomerReducer = (state = {
    performed: false,
    displayForceSearchModal: false
}, action) => {
    switch (action.type) {
        case actionTypes.CUSTOMER_SEARCHED:
            return {
                ...state, performed: true
            };
        case actionTypes.SHOW_FORCE_SEARCH_MODAL_ACTION:
            return {
                ...state, displayForceSearchModal: true
            };
        default:
            return state;
    }
};