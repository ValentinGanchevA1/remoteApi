import {
    CHANGE_BILLING_ACCOUNT_FORM_FIELD,
    SET_BILLING_ACCOUNT_FORM_VISIBILITY,
    SET_CREATE_NEW_BILLING_ACCOUNT,
    SET_SELECTED_BILLING_ACCOUNT_MOBILE,
    SET_SELECTED_BILLING_ACCOUNT_FIX,
    GET_BILLING_ACCOUNT_FORM_DATA_DONE,
    SET_BILLING_ACCOUNTS,
    GET_BILLING_ACCOUNT_CONTRACTS,
    GET_BILLING_ACCOUNT_CONTRACTS_START,
    SET_BILLING_ACCOUNT_CONTRACTS_VISIBILITY
} from '../actionTypes';
import {
    requiredBillingAccountFieldExist
} from '../utils/utils';

const emptyBillingAccountForm = {
    postalCode: '',
    town: '',
    streetName: '',
    streetNumber: '',
    appartmentNo: '',
    emailAddress: ''
};
const emptySelectedBillingAccount = {
    accountCode: ''
};

export const data = (state = [], action) => {
    switch (action.type) {
        case SET_BILLING_ACCOUNTS:
            return action.billingAccounts;
        default:
            return state;
    }
};

export const selectedMobile = (state = emptySelectedBillingAccount, action) => {
    switch (action.type) {
        case SET_SELECTED_BILLING_ACCOUNT_MOBILE:
            return action.billingAccount;
        case SET_CREATE_NEW_BILLING_ACCOUNT:
            return emptySelectedBillingAccount;
        case GET_BILLING_ACCOUNT_FORM_DATA_DONE:
            return requiredBillingAccountFieldExist(action.data) ? emptySelectedBillingAccount : state;
        default:
            return state;
    }
};

export const selectedFix = (state = emptySelectedBillingAccount, action) => {
    switch (action.type) {
        case SET_SELECTED_BILLING_ACCOUNT_FIX:
            return action.billingAccount;
        case SET_CREATE_NEW_BILLING_ACCOUNT:
            return emptySelectedBillingAccount;
        case GET_BILLING_ACCOUNT_FORM_DATA_DONE:
            return requiredBillingAccountFieldExist(action.data) ? emptySelectedBillingAccount : state;
        default:
            return state;
    }
};

export const isShowContractButtonEnabled = (state = false, action) => {
    switch (action.type) {
        case GET_BILLING_ACCOUNT_CONTRACTS_START:
            return true;
        case GET_BILLING_ACCOUNT_CONTRACTS:
            return false;
        default:
            return state;
    }
};

export const accountContracts = (state = {}, action) => {
    switch (action.type) {
        case SET_SELECTED_BILLING_ACCOUNT_MOBILE:
            return {};
        case GET_BILLING_ACCOUNT_CONTRACTS:
            return action.accountContracts;
        default:
            return state;
    }
};

export const accountContractsVisible = (state = false, action) => {
    switch (action.type) {
        case SET_SELECTED_BILLING_ACCOUNT_MOBILE:
            return false;
        case SET_SELECTED_BILLING_ACCOUNT_FIX:
            return false;
        case GET_BILLING_ACCOUNT_CONTRACTS:
            return action.accountContracts.length !== 0;
        case SET_BILLING_ACCOUNT_CONTRACTS_VISIBILITY:
            return action.visible;
        case SET_CREATE_NEW_BILLING_ACCOUNT:
            return false;
        default:
            return state;
    }
};

export const formData = (state = emptyBillingAccountForm, action) => {
    switch (action.type) {
        case CHANGE_BILLING_ACCOUNT_FORM_FIELD:
            return {
                ...state, [action.name]: action.value
            };
        case GET_BILLING_ACCOUNT_FORM_DATA_DONE:
            return action.data;
        default:
            return state;
    }
};

export const formVisible = (state = false, action) => {
    switch (action.type) {
        case SET_BILLING_ACCOUNT_FORM_VISIBILITY:
            return action.visible;
        case SET_CREATE_NEW_BILLING_ACCOUNT:
            return false;
        case SET_SELECTED_BILLING_ACCOUNT_MOBILE:
            return false;
        case SET_SELECTED_BILLING_ACCOUNT_FIX:
            return false;
        case GET_BILLING_ACCOUNT_FORM_DATA_DONE:
            return requiredBillingAccountFieldExist(action.data);
        default:
            return state;
    }
};

export const formErrors = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_BILLING_ACCOUNT_FORM_FIELD:
            return {
                ...state, [action.name]: action.errors
            };
        case GET_BILLING_ACCOUNT_FORM_DATA_DONE:
            return {};
        default:
            return state;
    }
};

export const create = (state = false, action) => {
    switch (action.type) {
        case SET_CREATE_NEW_BILLING_ACCOUNT:
            return true;
        case SET_SELECTED_BILLING_ACCOUNT_MOBILE:
            return false;
        case SET_SELECTED_BILLING_ACCOUNT_FIX:
            return false;
        case CHANGE_BILLING_ACCOUNT_FORM_FIELD:
            return false;
        case GET_BILLING_ACCOUNT_FORM_DATA_DONE:
            return requiredBillingAccountFieldExist(action.data);
        default:
            return state;
    }
};