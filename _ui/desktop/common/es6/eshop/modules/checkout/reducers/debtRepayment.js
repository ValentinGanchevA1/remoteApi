import {
    CHANGE_DEBT_REPAYMENT_FORM_FIELD
} from "../actionTypes";
import {
    FETCH_MINI_CART
} from "../../cart/actionTypes";

const empty = {
    receiptNumber: '',
    amount: ''
};

export const data = (state = empty, action) => {
    switch (action.type) {
        case CHANGE_DEBT_REPAYMENT_FORM_FIELD:
            return {
                ...state, [action.name]: action.value
            };
        default:
            return state;
    }
};

export const show = (state = false, action) => {
    switch (action.type) {
        case FETCH_MINI_CART:
            return action.payload.showDebtRepaymentForm;
        default:
            return state;
    }
};