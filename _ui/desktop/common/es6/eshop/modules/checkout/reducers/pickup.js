import {
    FETCH_POS_SIM_CARD_TYPES_DONE,
    CHANGE_PICKUP_SERIAL_NUMBER_VALUE,
    CHANGE_PICKUP_SIM_CARD_TYPE,
    FETCH_PICKUP_SERIAL_NUMBERS_DONE,
    UPDATE_SERIAL_NUMBERS_DONE,
    CHANGE_PAYMENT_OVERRIDE,
    PRINT_REQUIRED_DOCUMENTS_DONE,
    CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
    PICKUP_ORDER_PAYMENT_STATUS_ERROR,
    PAYMENT_AND_FISCALIZATION,
    PICKUP_NAVIGATION_NEXT_START,
    PICKUP_NAVIGATION_NEXT_DONE,
    PICKUP_ORDER_ACTIVATION_DONE,
    PICKUP_ORDER_ACTIVATION_START,
    PICKUP_GENERAL_ERROR,
    PICKUP_LAST_ORDER_DATA,
    CANCEL_GOODS_ORDER_DONE,
    PICKUP_GENERAL_ERROR_DISMISS,
    PICKUP_DOCUMENTS_DONE,
    PICKUP_SERIAL_NUMBERS_VALIDATION,
    PICKUP_DOCUMENT_DOWNLOAD_DONE,
    PICKUP_DOCUMENT_DOWNLOAD_ERROR,
    PICKUP_DOCUMENT_DOWNLOAD_START,
    PICKUP_SERIAL_NUMBERS_ERROR,
    PICKUP_SERIAL_NUMBERS_ERROR_DISMISS
} from "../actionTypes";


export const simCardTypes = (state = [], action) => {
    switch (action.type) {
        case FETCH_POS_SIM_CARD_TYPES_DONE:
            return action.data;
        default:
            return state;
    }
};


export const serialNumbers = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PICKUP_SERIAL_NUMBERS_DONE:
            return action.response;
        case CHANGE_PICKUP_SERIAL_NUMBER_VALUE:
            let serials = {
                ...state
            };
            serials[action.productCode] = action.value;
            return serials;
        default:
            return state;
    }
};

export const simCardType = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_PICKUP_SIM_CARD_TYPE:
            let types = {
                ...state
            };
            types[action.bundleNo] = action.value;
            return types;
        default:
            return state;
    }
};

export const reservationStatus = (state = false, action) => {
    switch (action.type) {
        case UPDATE_SERIAL_NUMBERS_DONE:
            return action.response.status === "RESERVED";
        default:
            return state;
    }
};

export const paymentOverride = (state = false, action) => {
    switch (action.type) {
        case CHANGE_PAYMENT_OVERRIDE:
            return action.value;
        default:
            return state;
    }
};

export const requiredDocumentPrintStatus = (state = false, action) => {
    switch (action.type) {
        case PRINT_REQUIRED_DOCUMENTS_DONE:
            return true;
        default:
            return state;
    }
};

export const goodsOrderPaymentStatus = (state = false, action) => {
    switch (action.type) {
        case CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE:
            return action.response === "Paid";
        default:
            return state;
    }
};

export const paymentAndFiscalizationLoaded = (state = false, action) => {
    switch (action.type) {
        case PAYMENT_AND_FISCALIZATION:
            return true;
        default:
            return state;
    }
};

export const navigationLoading = (state = false, action) => {
    switch (action.type) {
        case PICKUP_NAVIGATION_NEXT_START:
            return true;
        case PICKUP_NAVIGATION_NEXT_DONE:
        case PICKUP_GENERAL_ERROR:
            return false;
        default:
            return state;
    }
};

export const activationStatus = (state = false, action) => {
    switch (action.type) {
        case PICKUP_ORDER_ACTIVATION_DONE:
            return true;
        default:
            return state;
    }
};

export const activationInProgress = (state = false, action) => {
    switch (action.type) {
        case PICKUP_GENERAL_ERROR:
        case PICKUP_ORDER_ACTIVATION_DONE:
            return false;
        case PICKUP_ORDER_ACTIVATION_START:
            return true;
        default:
            return state;
    }
};

export const lastOrder = (state = {}, action) => {
    switch (action.type) {
        case PICKUP_LAST_ORDER_DATA:
            return action.data;
        default:
            return state;
    }
};

export const canceled = (state = false, action) => {
    switch (action.type) {
        case CANCEL_GOODS_ORDER_DONE:
            return true;
        case PICKUP_LAST_ORDER_DATA:
            return action.data.orderStatus === 'CANCELLED';
        default:
            return state;
    }
};

export const paymentOverrideDisplayStatus = (state = false, action) => {
    switch (action.type) {
        case CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE:
            return action.response !== "Paid";
        case PICKUP_ORDER_PAYMENT_STATUS_ERROR:
            return true;
        default:
            return state;
    }
};

export const generalError = (state = [], action) => {
    switch (action.type) {
        case PICKUP_GENERAL_ERROR:
            return [...state, action.error];
        case PICKUP_GENERAL_ERROR_DISMISS:
            return [];
        case PICKUP_SERIAL_NUMBERS_ERROR_DISMISS:
            return [];
        default:
            return state;
    }
};

export const documents = (state = {}, action) => {
    switch (action.type) {
        case PICKUP_DOCUMENTS_DONE:
            if (action.documents) {
                return action.documents;
            }
            return state;
        default:
            return state;
    }
};

export const serialNumbersValidStatus = (state = false, action) => {
    switch (action.type) {
        case PICKUP_SERIAL_NUMBERS_VALIDATION:
            return action.isValid;
        default:
            return state

    }
};

export const documentlinks = (state = {}, action) => {
    switch (action.type) {
        case PICKUP_DOCUMENT_DOWNLOAD_DONE:
            return {
                ...state, [action.bundleNo]: {
                    ...state[action.bundleNo],
                    [action.code]: action.link
                }
            };
        default:
            return state;
    }
};

export const documentError = (state = '', action) => {
    switch (action.type) {
        case PICKUP_DOCUMENT_DOWNLOAD_ERROR:
            return "Błąd pobierania dokumentu";
        default:
            return state;
    }
};

export const documentDownloaded = (state = '', action) => {
    switch (action.type) {
        case PICKUP_DOCUMENT_DOWNLOAD_START:
            return action.code;
        case PICKUP_DOCUMENT_DOWNLOAD_DONE:
        case PICKUP_GENERAL_ERROR:
            return '';
        default:
            return state;
    }
};

export const serialNumberError = (state = [], action) => {
    switch (action.type) {
        case PICKUP_SERIAL_NUMBERS_ERROR:
            return action.errors ? action.errors : state;
        case PICKUP_SERIAL_NUMBERS_ERROR_DISMISS:
            return [];
        default:
            return state;
    }
};