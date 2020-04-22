import {
    FETCH_MINI_CART,
    FETCH_SIM_CARD_TYPES_DONE,
    CHANGE_SERIAL_NUMBER_FIELD,
    CHANGE_SIM_CARD_TYPE,
    VERIFY_SERIAL_NUMBERS_STARTED,
    VERIFY_SERIAL_NUMBERS,
    GET_SAP_FIORI_LINKS_DONE,
    GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK_DONE,
    CANCEL_ORDER_DONE,
    CANCEL_ORDER_ERROR,
    UNLOCK_SALE_STARTED,
    UNLOCK_SALE_STATUS_CHECK_DONE,
    UNLOCK_SALE_DONE,
    PAYMENT_AND_FISCALIZATION,
    CHECK_PAYMENT_STATUS_START,
    PAYMENT_STATUS_CHECK_DONE,
    OPEN_ORDER_CANCEL_POPUP,
    OPEN_ORDER_CANCEL_POPUP_FROM_NAV_COMPONENT,
    CLOSE_ORDER_CANCEL_ERROR_POPUP,
    INITIAL_CONFIGURATION_SET_DONE,
    SERIAL_NUMBER_VERIFICATION_ERROR,
    VERIFY_SERIAL_NUMBERS_ERROR,
    CHANGE_COMMENT_DONE,
    CHANGE_SHOW_COMMENT_DONE,
    PAYMENT_OVERRIDE_DONE,
    SET_SERIAL_NUMBER_INITIAL_STATE,
    CHANGE_WAREHOUSE_TYPE,
    CLEAR_SAP_ERROR_MESSAGES,
    SIM_CARD_TYPE_CHANGING,
    VERIFY_DUPLICATE_SERIAL_NUMBERS
} from "../actionTypes";
import {
    getAllCartEntries
} from "../utils/MiniCartUtils";


export var miniCartData = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MINI_CART:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export var productsExists = (state = false, action) => {
    switch (action.type) {
        case FETCH_MINI_CART:
            let result = false;

            const cartEntries = getAllCartEntries(action.payload);

            if (cartEntries.filter(entry => entry.isSim && entry.msisdn).length > 0) {
                return true;
            }

            cartEntries.map(entry => {
                if (entry.terminals) {
                    entry.terminals.map(terminal => {
                        result = true;
                    });
                }
            });

            cartEntries.map(entry => {
                if (entry.euroSets) {
                    entry.euroSets.map((euroSet) => {
                        if (euroSet.setElements) {
                            euroSet.setElements.map(euroSetElement => {
                                result = true;
                            });
                        }
                    });
                }
            });

            action.payload.entries && action.payload.entries.some(entry => {
                if (entry.broadbandFixProduct && entry.broadbandFixProduct.devices &&
                    entry.broadbandFixProduct.devices.filter(device => !device.migrated).length > 0) {
                    result = true;
                    return true;
                }
                if (entry.tvFixProduct && entry.tvFixProduct.devices && entry.tvFixProduct.devices.filter(device => !device.migrated).length > 0) {
                    result = true;
                    return true;
                }
            });

            return result;
        default:
            return state;
    }
};

export var simCardTypeDefinitions = (state = [], action) => {
    switch (action.type) {
        case FETCH_SIM_CARD_TYPES_DONE:
            return action.data;
        default:
            return state;
    }
};

export var serialNumbers = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_SERIAL_NUMBER_FIELD:
            return {
                ...action.payload
            };
        case SET_SERIAL_NUMBER_INITIAL_STATE:
            return action.serialNumberPair;
        default:
            return state;
    }
};

export var warehouses = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_WAREHOUSE_TYPE:
            return action.warehouses;
        default:
            return state;
    }
};

export var simCardTypes = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_SIM_CARD_TYPE:
            return {
                ...state, [action.bundleNo]: action.simCardType
            };
        default:
            return state;
    }
};

export var sapReservationNumber = (state = "", action) => {
    switch (action.type) {
        case VERIFY_SERIAL_NUMBERS:
            return action.payload.sapReservationNumber;
        case SET_SERIAL_NUMBER_INITIAL_STATE:
            return action.sapReservationNumber ? action.sapReservationNumber : state;
        default:
            return state;
    }
};

export var agencyPosStatusValid = (state = false, action) => {
    switch (action.type) {
        case VERIFY_SERIAL_NUMBERS:
            return !!action.payload.agencyPOSReservationValid;
        case SET_SERIAL_NUMBER_INITIAL_STATE:
            return action.agencyPOSReservationDone ? action.agencyPOSReservationDone : false;
        default:
            return state;
    }
};

export var serialNumberVerificationInProgress = (state = false, action) => {
    switch (action.type) {
        case VERIFY_SERIAL_NUMBERS_STARTED:
            return true;
        case VERIFY_SERIAL_NUMBERS:
        case VERIFY_SERIAL_NUMBERS_ERROR:
            return false;
        default:
            return state;
    }
};

export var sapFioriLinks = (state = {}, action) => {
    switch (action.type) {
        case GET_SAP_FIORI_LINKS_DONE:
            return action.payload;
        default:
            return state;
    }
};

export var sapFioriCorrectiveInvoiceLink = (state = "", action) => {
    switch (action.type) {
        case GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK_DONE:
            return action.payload;
        default:
            return state;
    }
};

export var fiscalizationDataLoaded = (state = false, action) => {
    switch (action.type) {
        case VERIFY_SERIAL_NUMBERS:
            return state;
        default:
            return state;
    }
};

export var cancelOrderDone = (state = false, action) => {
    switch (action.type) {
        case CANCEL_ORDER_DONE:
            return true;
        default:
            return state;
    }
};

export var cancelOrderError = (state = false, action) => {
    switch (action.type) {
        case CANCEL_ORDER_ERROR:
            return true;
        case CLOSE_ORDER_CANCEL_ERROR_POPUP:
            return false;
        case OPEN_ORDER_CANCEL_POPUP:
            return action.data ? false : state;
        default:
            return state;
    }
};

export var saleUnlocked = (state = false, action) => {
    switch (action.type) {
        case UNLOCK_SALE_DONE:
            return true;
        case SET_SERIAL_NUMBER_INITIAL_STATE:
            return action.saleUnlocked ? action.saleUnlocked : false;
        default:
            return state;
    }
};

export var unlockSaleInProgress = (state = false, action) => {
    switch (action.type) {
        case UNLOCK_SALE_STARTED:
            return true;
        case SERIAL_NUMBER_VERIFICATION_ERROR:
        case UNLOCK_SALE_DONE:
            return false;
        default:
            return state;
    }
};

export var cancelOrderPopup = (state = false, action) => {
    switch (action.type) {
        case OPEN_ORDER_CANCEL_POPUP:
            return action.data;
        default:
            return state;
    }
};

export var cancelOrderPopupFromNavComponent = (state = false, action) => {
    switch (action.type) {
        case OPEN_ORDER_CANCEL_POPUP_FROM_NAV_COMPONENT:
            return action.data;
        default:
            return state;
    }
};

export var paymentAndFiscalization = (state = {}, action) => {
    switch (action.type) {
        case PAYMENT_AND_FISCALIZATION:
            return action.data;
        default:
            return state;
    }
};

export var checkingPaymentStatus = (state = false, action) => {
    switch (action.type) {
        case PAYMENT_STATUS_CHECK_DONE:
            return false;
        case CHECK_PAYMENT_STATUS_START:
            return true;
        default:
            return state;
    }
};

export var paymentStatus = (state = false, action) => {
    switch (action.type) {
        case PAYMENT_STATUS_CHECK_DONE:
            return action.data === "Paid";
        case SET_SERIAL_NUMBER_INITIAL_STATE:
            return action.paymentStatus === "Paid";
        default:
            return state;
    }
};

export var paymentStatusError = (state = false, action) => {
    switch (action.type) {
        case PAYMENT_STATUS_CHECK_DONE:
            return action.data !== "Paid";
        default:
            return state;
    }
};

export var paymentOverride = (state = false, action) => {
    switch (action.type) {
        case PAYMENT_OVERRIDE_DONE:
            return !state;
        default:
            return state;
    }
};

export var unlockStatus = (state = false, action) => {
    switch (action.type) {
        case UNLOCK_SALE_STATUS_CHECK_DONE:
            return action.data.status;
        case UNLOCK_SALE_DONE:
            return true;
        case SET_SERIAL_NUMBER_INITIAL_STATE:
            return action.saleUnlocked ? action.saleUnlocked : false;
        default:
            return state;
    }
};

export var reservationGeneralError = (state = {}, action) => {
    switch (action.type) {
        case SERIAL_NUMBER_VERIFICATION_ERROR:
            if (action.payload.responseJSON && action.payload.responseJSON.message) {
                return action.payload.responseJSON.message;
            }
            return action.payload.message ? action.payload.message : "";
        default:
            return state;
    }
};

export var verifySerialNumberError = (state = "", action) => {
    switch (action.type) {
        case VERIFY_SERIAL_NUMBERS_ERROR:
            return action.payload.responseJSON ? action.payload.responseJSON.message : action.payload.message;
        case SERIAL_NUMBER_VERIFICATION_ERROR:
            if (action.payload.responseJSON && action.payload.responseJSON.message) {
                return action.payload.responseJSON.message;
            }
            return action.payload.message ? action.payload.message : "";
        case VERIFY_SERIAL_NUMBERS:
        case CLEAR_SAP_ERROR_MESSAGES:
            return "";
        default:
            return state;
    }
};

export var errorDetails = (state = [], action) => {
    switch (action.type) {
        case VERIFY_SERIAL_NUMBERS_ERROR:
            return action.payload.details ? action.payload.details :
                (action.payload.responseJSON && action.payload.responseJSON.details ?
                    action.payload.responseJSON.details : []
                );
        case VERIFY_DUPLICATE_SERIAL_NUMBERS:
            return action.payload.details;
        case CLEAR_SAP_ERROR_MESSAGES:
            return [];
        default:
            return state;
    }
};

export var commentSectionVisible = (state = false, action) => {
    switch (action.type) {
        case CHANGE_SHOW_COMMENT_DONE:
            return !state;
        default:
            return state;
    }
};

export var comment = (state = "", action) => {
    switch (action.type) {
        case CHANGE_COMMENT_DONE:
            return action.data;
        default:
            return state;
    }
};

export var changingSimCardType = (state = {}, action) => {
    switch (action.type) {
        case SIM_CARD_TYPE_CHANGING:
            return {
                ...state, [action.bundleNo]: action.changing
            };
        default:
            return state;
    }
};