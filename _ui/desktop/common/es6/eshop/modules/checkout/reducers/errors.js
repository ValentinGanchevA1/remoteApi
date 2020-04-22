import {
    DO_CHECKOUT_STEP_START,
    DO_CHECKOUT_STEP_DONE,
    DO_CHECKOUT_STEP_ERROR,
    CHECKOUT_ERROR_CALLBACK_DISMISS,
    CHECKOUT_ERROR_AUTH_DISMISS,
    CHECKOUT_ERROR_CV_DISMISS,
    CHECKOUT_ERROR_BACKEND_DISMISS,
    CHECKOUT_ERROR_MANUAL_DISMISS,
    FRONT_VALIDATION,
    CHANGE_CONSENT_STATE,
    UPDATE_CONSENT_STATE_START,
    CHANGE_CUSTOMER_DATA_FORM_FIELD,
    CHANGE_CUSTOMER_CONTACT_FORM_FIELD,
    SWITCH_CUSTOMER_EDIT_MODE,
    CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD,
    CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD,
    CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD,
    CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD,
    CHANGE_CUSTOMER_MNP_DATA_CONTACT_METHOD,
    CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_MODE,
    CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_TIME,
    SELECT_APU,
    CONSENT_PRINT_DOCUMENTS,
    CHANGE_REPRESENTATIVE_FORM_FIELD,
    CHANGE_GRANTOR_FORM_FIELD,
    OPEN_AGREEMENT_VALIDATION_MODAL,
    CLOSE_AGREEMENT_VALIDATION_MODAL,
    VERIFY_SERIAL_NUMBERS,
} from "../actionTypes";
import {
    removeElementFromArray
} from "../utils/utils";

const getResults = (action) => action.results || [];

export var cim = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "CIM")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_BACKEND_DISMISS:
            return [];
        default:
            return state;
    }
}

export var cv = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "CV")
                .map(result => ({
                    code: result.code,
                    description: result.description,
                    details: result.details,
                    paytelAcceptable: !!result.paytelAcceptable
                }));
        case CHECKOUT_ERROR_CV_DISMISS:
            return [];
        default:
            return state;
    }
}

export var cvMagnum = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "CV_MAGNUM" || result.category === "CV_MAGNUM_WITH_DEPOSIT")
                .map(result => ({
                    code: result.code,
                    description: result.description,
                    details: result.details,
                    category: result.category,
                    paytelAcceptable: result.paytelAcceptable
                }));
        case CHECKOUT_ERROR_CV_DISMISS:
            return [];
        default:
            return state;
    }
}

export var auth = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "AUTH")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_AUTH_DISMISS:
            return [];
        default:
            return state;
    }
}
export var callback = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "CALLBACK")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_CALLBACK_DISMISS:
            return [];
        default:
            return state;
    }
}

export var needsearch = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "SEARCH")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_AUTH_DISMISS:
            return [];
        default:
            return state;
    }
}

export var cimconsenterror = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "CIM_CONSISTENT")
                .map(result => ({
                    code: result.code,
                    description: result.description,
                    peselFromSession: result.details.peselFromSession,
                    peselFromCheckout: result.details.peselFromCheckout
                }));
        case CHECKOUT_ERROR_AUTH_DISMISS:
            return [];
        default:
            return state;
    }
}

export var noemailmnp = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "NO_EMAIL_MNP")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_AUTH_DISMISS:
            return [];
        default:
            return state;
    }
}
export var order = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "ORDER")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_BACKEND_DISMISS:
            return [];
        default:
            return state;
    }
}

export var data = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "DATA")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_BACKEND_DISMISS:
            return [];
        default:
            return state;
    }
}

export var backendValidation = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "VALIDATION")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_BACKEND_DISMISS:
            return [];
        default:
            return state;
    }
}

export var reservation = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "RESERVATION")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_BACKEND_DISMISS:
            return [];
        default:
            return state;
    }
}
export var stock = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "STOCK")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_BACKEND_DISMISS:
            return [];
        default:
            return state;
    }
}

export var manual = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "MANUAL")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_MANUAL_DISMISS:
            return [];
        default:
            return state;
    }
}

export var cvWithDeposit = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "CV_WITH_DEPOSIT")
                .map(result => ({
                    code: result.code,
                    description: result.description,
                    deposit: result.deposit,
                    bundleNo: result.bundleNo,
                    allowDepositAcceptance: result.allowDepositAcceptance,
                    paytelAcceptable: result.paytelAcceptable
                }));
            //        case CHECKOUT_ERROR_BACKEND_DISMISS:
            //             return [];
        default:
            return state;
    }
}

export var fixCustomerExists = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.code === "GET_CUSTOMER")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_BACKEND_DISMISS:
            return [];
        default:
            return state;
    }
}
export var fixAppartmentNoValidation = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            if (getResults(action).length < 2) {
                return getResults(action)
                    .filter(result => result.category === "APPARTMENT_NO_VALIDATION")
                    .map(result => ({
                        code: result.code,
                        description: result.description
                    }));
            } else {
                return [];
            }
            case CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return state;
    }
}

export var pickupReplanishmentRequired = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            return getResults(action)
                .filter(result => result.category === "REPLANISHMENT_REQUIRED")
                .map(result => ({
                    code: result.code,
                    description: result.description
                }));
        case CHECKOUT_ERROR_BACKEND_DISMISS:
            return [];
        default:
            return state;
    }
}

export var showAgreementConfirmationModal = (state = false, action) => {
    switch (action.type) {
        case OPEN_AGREEMENT_VALIDATION_MODAL:
            return true;
        case CLOSE_AGREEMENT_VALIDATION_MODAL:
            return false;
        default:
            return state;
    }
};

export var agreementConfirmationModalVariant = (message = null, action) => {
    switch (action.type) {
        case OPEN_AGREEMENT_VALIDATION_MODAL:
            return action.modalVariant;
        default:
            return message;
    }
};

export var existingOrderOrCartValidation = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            if (getResults(action).length < 2) {
                return getResults(action)
                    .filter(result => result.category === "EXISTING_ORDER")
                    .map(result => ({
                        code: result.code,
                        description: result.description
                    }));
            } else {
                return [];
            }
            case CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return state;
    }
}

export var frontValidationMsg = (state = [], action) => {
    switch (action.type) {
        case FRONT_VALIDATION:
            return action.data.map(e => ({
                ...e,
                afterValidation: true
            }));
        case CHANGE_CONSENT_STATE:
        case UPDATE_CONSENT_STATE_START:
            return state.map(e => ({
                ...e,
                afterValidation: false
            }));
        case CHANGE_CUSTOMER_DATA_FORM_FIELD:
        case CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
        case SWITCH_CUSTOMER_EDIT_MODE:
        case CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
        case CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
            return removeElementFromArray(state, 'type', 'customerData').map(e => ({
                ...e,
                afterValidation: false
            }));
        case CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD:
        case CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD:
        case CHANGE_CUSTOMER_MNP_DATA_CONTACT_METHOD:
        case CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_MODE:
        case CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_TIME:
            return removeElementFromArray(state, 'type', 'mnpData').map(e => ({
                ...e,
                afterValidation: false
            }));
        case SELECT_APU:
            return removeElementFromArray(state, 'type', 'apuData').map(e => ({
                ...e,
                afterValidation: false
            }));
        case CONSENT_PRINT_DOCUMENTS:
            return removeElementFromArray(state, 'type', 'consentDocuments').map(e => ({
                ...e,
                afterValidation: false
            }));
        case CHANGE_REPRESENTATIVE_FORM_FIELD:
        case CHANGE_GRANTOR_FORM_FIELD:
            return removeElementFromArray(state, 'type', 'representativeData').map(e => ({
                ...e,
                afterValidation: false
            }));
        case VERIFY_SERIAL_NUMBERS:
            return removeElementFromArray(state, 'type', 'simCardSerialNumberFilled').map(e => ({
                ...e,
                afterValidation: false
            }));
        default:
            return state;
    }
}