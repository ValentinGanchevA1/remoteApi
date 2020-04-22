import {
    SELECT_PAYMENT_METHOD,
    SELECT_DELIVERY_METHOD,
    CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE
} from '../actionTypes';
import * as ACTIONS from "../actionTypes";

export const selectedMethod = (state = '', action) => {
    switch (action.type) {
        case SELECT_PAYMENT_METHOD:
            return action.code;
        case SELECT_DELIVERY_METHOD:
            return '';
        default:
            return state;
    }
};
export const selectedEligCode = (state = '', action) => {
    switch (action.type) {
        case SELECT_PAYMENT_METHOD:
            if (action.eligCode)
                return action.eligCode;
            else
                return state;
        case SELECT_DELIVERY_METHOD:
            return '';
        default:
            return state;
    }
};