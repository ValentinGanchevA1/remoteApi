import {
    SELECT_CV_DOCUMENTS_LIST,
    SELECT_CV_DOCUMENT,
    SELECT_CUSTOMER_WORK_PHONE_NUMBER
} from '../actionTypes';

export var cvDocumentsList = (state = {}, action) => {
    switch (action.type) {
        case SELECT_CV_DOCUMENTS_LIST:
            return action.payload
        default:
            return state;
    }
};

export var selectedCustomerAdditionalDocument = (state = "", action) => {
    switch (action.type) {
        case SELECT_CV_DOCUMENT:
            return action.documentCode
        default:
            return state;
    }
};

export var customerWorkPhoneNumber = (state = "", action) => {
    switch (action.type) {
        case SELECT_CUSTOMER_WORK_PHONE_NUMBER:
            return action.phoneNumber
        default:
            return state;
    }
};

export const errors = (state = {}, action) => {
    switch (action.type) {
        case SELECT_CUSTOMER_WORK_PHONE_NUMBER:
            return {
                customerWorkPhoneNumber: action.errors
            };
        default:
            return state;
    }
};