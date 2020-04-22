import * as ACTIONS from "../actionTypes";
import {
    GET_CART_CUSTOMER_DONE
} from 'eshop/modules/checkout/actionTypes';
import OnlineUtils from 'eshop/utils/OnlineUtils';

export const invoiceEmail = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.INVOICE_EMAIL_CHANGE:
            return action.value;
        default:
            return state;
    }
};

const createKeyForInvoiceEmailMapping = () => 'invoiceEmailMapping.' + OnlineUtils.getCookie('telco-cart')
const readInvoiceEmailMappingSessionStorage = () => {
    let key = createKeyForInvoiceEmailMapping();
    let value = OnlineUtils.loadFromSessionStorage(key);
    return value ? value : 'invoiceEmail';
}
const saveInvoiceEmailMappingSessionStorage = (value) => {
    let key = createKeyForInvoiceEmailMapping();
    OnlineUtils.saveInSessionStorage(key, value);
}

export const invoiceEmailMapping = (state = 'invoiceEmail', action) => {
    switch (action.type) {
        case ACTIONS.INVOICE_EMAIL_MAPPING_CHANGE:
            saveInvoiceEmailMappingSessionStorage(action.payload);
            return action.payload;
        case GET_CART_CUSTOMER_DONE:
            return readInvoiceEmailMappingSessionStorage();
        default:
            return state;
    }
};

export const errors = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.INVOICE_EMAIL_CHANGE:
            return action.errors;
        default:
            return state;
    }
};