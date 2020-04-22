import * as ACTIONS from "../actionTypes";
import {
    createRequestActions
} from "../../core/utils/request-actions-creator";
import {
    fixCustomerData,
    getCustomerDataErrors
} from "./../utils/utils";

// Checkout flow
export const doCheckoutStepStart =
    (checkoutData) => ({
        type: ACTIONS.DO_CHECKOUT_STEP_START,
        checkoutData: checkoutData
    });

export const doCheckoutStepDone =
    (data) => ({
        type: ACTIONS.DO_CHECKOUT_STEP_DONE,
        code: data.code
    });

export const doCheckoutStepError =
    (errorData) => ({
        type: ACTIONS.DO_CHECKOUT_STEP_ERROR,
        code: errorData.code,
        status: errorData.status,
        message: errorData.message,
        results: errorData.results
    });

// Checkout data
export const getCartCustomerStart =
    () => ({
        type: ACTIONS.GET_CART_CUSTOMER_START
    });

export const getCartCustomerDone = data => {
    let fixedData = fixCustomerData(data);
    return {
        type: ACTIONS.GET_CART_CUSTOMER_DONE,
        data: fixedData,
        errors: getCustomerDataErrors(fixedData)
    };
};

// Customer data
export const getCustomerStart =
    () => ({
        type: ACTIONS.GET_CUSTOMER_START
    });

export const getCustomerDone = data => {
    let fixedData = fixCustomerData(data);
    return {
        type: ACTIONS.GET_CUSTOMER_DONE,
        data: fixedData,
        errors: getCustomerDataErrors(fixedData)
    };
};

export const getCartRepresentativeStart =
    () => ({
        type: ACTIONS.GET_CART_REPRESENTATIVE_DATA_START
    });

export const getCartRepresentativeDone =
    (data) => ({
        type: ACTIONS.GET_CART_REPRESENTATIVE_DATA_DONE,
        data
    });
export const getBillingAccountFormDataStart =
    () => ({
        type: ACTIONS.GET_BILLING_ACCOUNT_FORM_DATA_START
    });

export const getBillingAccountFormDataDone =
    (data) => ({
        type: ACTIONS.GET_BILLING_ACCOUNT_FORM_DATA_DONE,
        data
    });

export const getCartDeliveryDataStart =
    () => ({
        type: ACTIONS.GET_CART_DELIVERY_DATA_START
    });

export const getCartDeliveryDataDone =
    (data) => ({
        type: ACTIONS.GET_CART_DELIVERY_DATA_DONE,
        data
    });

export const getInstallationAvailableTimeSlotsStart =
    () => ({
        type: ACTIONS.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START
    });

export const getInstallationAvailableTimeSlotsDone =
    (data) => ({
        type: ACTIONS.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE,
        data
    });

export const getConsentsStart =
    (data) => ({
        type: ACTIONS.GET_CONSENTS_START,
        data
    });

export const getConsentsDone =
    (data) => ({
        type: ACTIONS.GET_CONSENTS_DONE,
        data
    });

export const setConsentReadOnly =
    (consentCode, readOnly) => ({
        type: ACTIONS.MAKE_CONSENT_READONLY,
        consentCode,
        readOnly
    });

export const getPeriodDone =
    (data) => ({
        type: ACTIONS.GET_PERIOD_DONE,
        data
    });

export const getPeriodStart =
    () => ({
        type: ACTIONS.GET_PERIOD_START
    });

export const fetchZipCodeFromWWTActions = createRequestActions(ACTIONS.fetchZipCodeFromWWT);
export const fetchSelectedWwtAddressActions = createRequestActions(ACTIONS.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES);

export const getFutureInvestmentAddressActions = createRequestActions(ACTIONS.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES);

export const getFutureInvestmentConsentActions = createRequestActions(ACTIONS.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES);

export const getFutureInvestmentOfferActions = createRequestActions(ACTIONS.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES);

export const registerLeadActions = createRequestActions(ACTIONS.REGISTER_LEAD_ACTION_TYPES);

export const getCartConsentsStart =
    () => ({
        type: ACTIONS.GET_CART_CONSENTS_START
    });

export const getCartConsentsDone =
    (data, consents) => ({
        type: ACTIONS.GET_CART_CONSENTS_DONE,
        data,
        consents
    });

export const updateCartConsentsStart =
    (codes) => ({
        type: ACTIONS.UPDATE_CONSENT_STATE_START,
        codes
    });

export const updateCartConsentsDone =
    (response) => ({
        type: ACTIONS.UPDATE_CONSENT_STATE_DONE,
        response
    });

export const getCustomerMnpDataStart =
    (codes) => ({
        type: ACTIONS.GET_CUSTOMER_MNP_DATA_START,
        codes
    });

export const getCustomerMnpDataDone =
    (response) => ({
        type: ACTIONS.GET_CUSTOMER_MNP_DATA_DONE,
        response
    });

export const getCartMnpDataStart =
    (codes) => ({
        type: ACTIONS.GET_CART_MNP_DATA_START,
        codes
    });

export const getCartMnpDataDone =
    (sources) => ({
        type: ACTIONS.GET_CART_MNP_DATA_DONE,
        sources
    });

export const fetchPosSimCardTypesDone = (data) => ({
    type: ACTIONS.FETCH_POS_SIM_CARD_TYPES_DONE,
    data
});

export const fetchSerialNumbersDone = (response) => ({
    type: ACTIONS.FETCH_PICKUP_SERIAL_NUMBERS_DONE,
    response
});

export const updateSerialNumbersStart = () => ({
    type: ACTIONS.UPDATE_SERIAL_NUMBERS_START,
});

export const updateSerialNumbersDone = (response) => ({
    type: ACTIONS.UPDATE_SERIAL_NUMBERS_DONE,
    response
});

export const fetchPaymentStatusDone = (response) => ({
    type: ACTIONS.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
    response
});


export const getSimCardTypesDone =
    (data, serialNumbers) => ({
        type: ACTIONS.FETCH_SIM_CARD_TYPES_DONE,
        data: data,
        serialNumbers: serialNumbers
    });

export const checkPaymentStatusStart =
    (codes) => ({
        type: ACTIONS.CHECK_PAYMENT_STATUS_START,
        codes
    });

export const pickupActivationStart = () => ({
    type: ACTIONS.PICKUP_ORDER_ACTIVATION_START
});

export const pickupActivationDone = () => ({
    type: ACTIONS.PICKUP_ORDER_ACTIVATION_DONE
});

export const pickupGeneralError = (error) => ({
    type: ACTIONS.PICKUP_GENERAL_ERROR,
    error: error.responseJSON
});

export const pickupPaymentStateusError = () => ({
    type: ACTIONS.PICKUP_ORDER_PAYMENT_STATUS_ERROR
});

export const pickupDocumentsDone = (data) => ({
    type: ACTIONS.PICKUP_DOCUMENTS_DONE,
    documents: data
});

export const pickupSerialNumberError = (data) => ({
    type: ACTIONS.PICKUP_SERIAL_NUMBERS_ERROR,
    errors: data
});

export const getBpgDataDone = (data) => ({
    type: ACTIONS.GET_BPG_DATA_DONE,
    data: data
});

export const getBpgDataStart = () => ({
    type: ACTIONS.GET_BPG_DATA_START
});