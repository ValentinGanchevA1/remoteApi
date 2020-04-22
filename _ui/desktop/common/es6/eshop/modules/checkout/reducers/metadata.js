import * as ACTIONS from "../actionTypes";
import {
    hasManualVerificationErrors
} from "../utils/utils";
import EmailWarningDescriptionEnum from "../constants/EmailWarningDescriptionEnum";

const defaultState = {
    requested: false,
    loading: false,
    updating: false,
    readOnly: false,
    finished: false
};
const defaultCustomerState = {
    ...defaultState,
    locked: false,
    isOnlineCookie: false,
    isSmsVerified: false,
    bpgRequested: false,
    businessDataSource: "",
    isWWW: true
};

export const customer = (state = defaultCustomerState, action) => {
    switch (action.type) {
        case ACTIONS.CLEAR_CART_CUSTOMER_REQUESTED:
            return {
                ...state, requested: false
            };
        case ACTIONS.GET_CUSTOMER_START:
        case ACTIONS.GET_CART_CUSTOMER_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.GET_CUSTOMER_DONE:
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            let isBpgRequested = action.data.isBusinessClient ? !!action.data.existing || !!action.data.nip : true;
            return {
                ...state, loading: false, readOnly: !!action.data.existing, fixBundleInCart: action.data.fixBundleInCart,
                    isOnlineCookie: action.data.isOnlineCookie, isSmsVerified: action.data.isSmsVerified,
                    bpgRequested: isBpgRequested, businessDataSource: action.data.businessDataSource, isWWW: action.data.isWWW,
                    finished: true
            };
        case ACTIONS.SWITCH_CUSTOMER_EDIT_MODE:
            return {
                ...state, readOnly: !state.readOnly
            };
        case ACTIONS.GET_BPG_DATA_DONE:
            let source = "";
            if (!!action.data && !!action.data.nip) {
                source = 'bpg';
            }
            return {
                ...state, bpgRequested: true, businessDataSource: source
            };
        default:
            return state;
    }
};

export const representative = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CART_REPRESENTATIVE_DATA_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.GET_CART_REPRESENTATIVE_DATA_DONE:
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
};

export const delivery = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CART_DELIVERY_DATA_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.GET_CART_DELIVERY_DATA_DONE:
            return {
                ...state, loading: false, readOnly: !!action.existing, finished: true
            };
        default:
            return state;
    }
};

export const installation = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START:
            return {
                ...state, requested: true
            };
        case ACTIONS.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
            return {
                ...state
            };
        default:
            return state;
    }
};

export const consents = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CONSENTS_START:
            return {
                ...state, requested: true, loading: true, data: action.data
            };
        case ACTIONS.GET_CONSENTS_DONE:
            return {
                ...state, loading: false
            };
        case ACTIONS.UPDATE_CONSENT_STATE_START:
            return {
                ...state, updating: true
            };
        case ACTIONS.UPDATE_CONSENT_STATE_DONE:
            return {
                ...state, updating: false
            };
        default:
            return state;
    }
};

export const mnpData = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CUSTOMER_MNP_DATA_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.GET_CUSTOMER_MNP_DATA_DONE:
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
};

export const cartMnpData = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CART_MNP_DATA_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.GET_CART_MNP_DATA_DONE:
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
};

export const updatingConsents = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.GET_CONSENTS_DONE:
            action.data.map(cartConsent => state[cartConsent.consentCode] = false);
            return {
                ...state
            };
        case ACTIONS.UPDATE_CONSENT_STATE_START:
            action.codes.map(code => state[code] = true);
            return {
                ...state
            };
        case ACTIONS.UPDATE_CONSENT_STATE_DONE:
            action.response.map(consent => state[consent.consentCode] = false);
            return {
                ...state
            };
        default:
            return state;
    }
};

export const cartConsents = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_CART_CONSENTS_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.UPDATE_CONSENT_STATE_START:
            return {
                ...state, updating: true
            };
        case ACTIONS.UPDATE_CONSENT_STATE_DONE:
            return {
                ...state, updating: false
            };
        case ACTIONS.GET_CART_CONSENTS_DONE:
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
};

export const currentStepId = (state = document.getElementById("checkoutStepProgressBadId") && document.getElementById("checkoutStepProgressBadId").value || "", action) => {
    switch (action.type) {
        case ACTIONS.REGISTER_CURRENT_STEP_ID:
            return action.id;
        default:
            return state;
    }
};
export const period = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_PERIOD_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.GET_PERIOD_DONE:
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
};

export const billingAccount = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_BILLING_ACCOUNT_FORM_DATA_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
            return {
                ...state, loading: false
            };
        default:
            return state;
    }
};

export const earlierInstallationConsentNotAcceptedModalIsVisible = (earlierInstallationConsentNotAcceptedModalIsVisible = false, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
            return true;
        case ACTIONS.CLOSE_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
            return false;
        default:
            return earlierInstallationConsentNotAcceptedModalIsVisible;
    }
};

export const earlierInstallationConsentNotAcceptedModalIsAccepted = (earlierInstallationConsentNotAcceptedModalIsAccepted = false, action) => {
    switch (action.type) {
        case ACTIONS.ACCEPT_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
            return true;
        default:
            return earlierInstallationConsentNotAcceptedModalIsAccepted;
    }
};

export const earlierInstallationConsentNotAcceptedModalDidMount = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_MOUNTED_ACTION:
            return true;
        default:
            return state;
    }
};

export const courierDeliveryMethodModalDidMount = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.COURIER_DELIVERY_METHOD_MODAL_MOUNTED:
            return true;
        default:
            return state;
    }
};

export const courierDeliveryMethodModalVisible = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_COURIER_DELIVERY_METHOD_MODAL:
            return true;
        case ACTIONS.HIDE_COURIER_DELIVERY_METHOD_MODAL:
            return false;
        default:
            return state;
    }
};

export const courierDeliveryMethodModalState = (state = true, action) => {
    switch (action.type) {
        case ACTIONS.SET_COURIER_DELIVERY_METHOD_MODAL_STATE:
            return action.payload;
        default:
            return state;
    }
};

export const manualVerificationModalVisible = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.DO_CHECKOUT_STEP_START:
        case ACTIONS.DO_CHECKOUT_STEP_DONE:
        case ACTIONS.CHECKOUT_ERROR_MANUAL_DISMISS:
            return false;
        case ACTIONS.DO_CHECKOUT_STEP_ERROR:
            return hasManualVerificationErrors(action);
        case ACTIONS.SET_MANUAL_VERIFICATION_MODAL_VISIBILITY:
            return action.visible;
        default:
            return state;
    }
};

const warningModalDefaultState = {
    visible: false,
    descriptionKey: EmailWarningDescriptionEnum.DEFAULT
};
export const emailWarningModalState = (state = warningModalDefaultState, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_EMAIL_WARNING_MODAL:
            return {
                visible: true, descriptionKey: action.descriptionKey
            };
        case ACTIONS.HIDE_EMAIL_WARNING_MODAL:
            return {
                ...state, visible: false
            };
        default:
            return state;
    }
};

export const fixCartRefreshResult = (state = null, action = {}) => {
    switch (action.type) {
        case ACTIONS.SET_FIX_CART_REFRESH_RESULT:
            return action.data;
        default:
            return state;
    }
};

export const fullPageLoader = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.CONSENT_DOCUMENTS_LOADER:
            return action.data;
        default:
            return state;
    }
};

export const payment = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.GET_PAYMENT_DATA_START:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.GET_PAYMENT_DATA_DONE:
            return {
                ...state, loading: false, finished: true
            };
        default:
            return state;
    }
};

export const allDocuments = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.SAVE_ALL_DOCUMENTS_STARTED:
            return {
                ...state, requested: true, loading: true
            };
        case ACTIONS.SAVE_ALL_DOCUMENTS_FINISHED:
            return {
                ...state, loading: false, finished: true
            };
        default:
            return state;
    }
};