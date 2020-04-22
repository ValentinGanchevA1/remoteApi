import {
    CHANGE_VOUCHER_CODE,
    CLEAR_VOUCHER_DATA,
    FIND_APPLICABLE_PRODUCTS_DONE,
    FIND_APPLICABLE_PRODUCTS_START,
    APPLY_VOUCHER_START,
    APPLY_VOUCHER_DONE,
    VOUCHER_ERROR
} from "../actionTypes";

const defaultMetadataState = {
    loading: false,
    applied: false
};

export const voucherCode = (state = "", action) => {
    switch (action.type) {
        case CHANGE_VOUCHER_CODE:
            return action.value;
        case CLEAR_VOUCHER_DATA:
            return "";
        default:
            return state;
    }
};

export const applicableProducts = (state = [], action) => {
    switch (action.type) {
        case FIND_APPLICABLE_PRODUCTS_DONE:
            return action.value.applicableProducts;
        case VOUCHER_ERROR:
        case CLEAR_VOUCHER_DATA:
            return [];
        default:
            return state;
    }
};

export const voucherName = (state = "", action) => {
    switch (action.type) {
        case FIND_APPLICABLE_PRODUCTS_DONE:
            return action.value.voucherName;
        case VOUCHER_ERROR:
        case CLEAR_VOUCHER_DATA:
            return "";
        default:
            return state;
    }
};

export const error = (state = "", action) => {
    switch (action.type) {
        case VOUCHER_ERROR:
            return action.value;
        case CLEAR_VOUCHER_DATA:
        case CHANGE_VOUCHER_CODE:
            return "";
        default:
            return state;
    }
};

export const metadata = (state = defaultMetadataState, action) => {
    switch (action.type) {
        case FIND_APPLICABLE_PRODUCTS_DONE:
        case VOUCHER_ERROR:
            return {
                ...state, loading: false
            };
        case FIND_APPLICABLE_PRODUCTS_START:
        case APPLY_VOUCHER_START:
            return {
                ...state, loading: true
            };
        case APPLY_VOUCHER_DONE:
            return {
                ...state, loading: false, applied: true
            };
        case CLEAR_VOUCHER_DATA:
            return {
                ...state, loading: false, applied: false
            };
        default:
            return state;
    }
};