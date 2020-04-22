define(["exports", "../actionTypes", "../../core/utils/request-actions-creator", "./../utils/utils"], function(_exports, ACTIONS, _requestActionsCreator, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getBpgDataStart = _exports.getBpgDataDone = _exports.pickupSerialNumberError = _exports.pickupDocumentsDone = _exports.pickupPaymentStateusError = _exports.pickupGeneralError = _exports.pickupActivationDone = _exports.pickupActivationStart = _exports.checkPaymentStatusStart = _exports.getSimCardTypesDone = _exports.fetchPaymentStatusDone = _exports.updateSerialNumbersDone = _exports.updateSerialNumbersStart = _exports.fetchSerialNumbersDone = _exports.fetchPosSimCardTypesDone = _exports.getCartMnpDataDone = _exports.getCartMnpDataStart = _exports.getCustomerMnpDataDone = _exports.getCustomerMnpDataStart = _exports.updateCartConsentsDone = _exports.updateCartConsentsStart = _exports.getCartConsentsDone = _exports.getCartConsentsStart = _exports.registerLeadActions = _exports.getFutureInvestmentOfferActions = _exports.getFutureInvestmentConsentActions = _exports.getFutureInvestmentAddressActions = _exports.fetchSelectedWwtAddressActions = _exports.fetchZipCodeFromWWTActions = _exports.getPeriodStart = _exports.getPeriodDone = _exports.setConsentReadOnly = _exports.getConsentsDone = _exports.getConsentsStart = _exports.getInstallationAvailableTimeSlotsDone = _exports.getInstallationAvailableTimeSlotsStart = _exports.getCartDeliveryDataDone = _exports.getCartDeliveryDataStart = _exports.getBillingAccountFormDataDone = _exports.getBillingAccountFormDataStart = _exports.getCartRepresentativeDone = _exports.getCartRepresentativeStart = _exports.getCustomerDone = _exports.getCustomerStart = _exports.getCartCustomerDone = _exports.getCartCustomerStart = _exports.doCheckoutStepError = _exports.doCheckoutStepDone = _exports.doCheckoutStepStart = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    // Checkout flow
    var doCheckoutStepStart = function doCheckoutStepStart(checkoutData) {
        return {
            type: ACTIONS.DO_CHECKOUT_STEP_START,
            checkoutData: checkoutData
        };
    };

    _exports.doCheckoutStepStart = doCheckoutStepStart;

    var doCheckoutStepDone = function doCheckoutStepDone(data) {
        return {
            type: ACTIONS.DO_CHECKOUT_STEP_DONE,
            code: data.code
        };
    };

    _exports.doCheckoutStepDone = doCheckoutStepDone;

    var doCheckoutStepError = function doCheckoutStepError(errorData) {
        return {
            type: ACTIONS.DO_CHECKOUT_STEP_ERROR,
            code: errorData.code,
            status: errorData.status,
            message: errorData.message,
            results: errorData.results
        };
    }; // Checkout data


    _exports.doCheckoutStepError = doCheckoutStepError;

    var getCartCustomerStart = function getCartCustomerStart() {
        return {
            type: ACTIONS.GET_CART_CUSTOMER_START
        };
    };

    _exports.getCartCustomerStart = getCartCustomerStart;

    var getCartCustomerDone = function getCartCustomerDone(data) {
        var fixedData = (0, _utils.fixCustomerData)(data);
        return {
            type: ACTIONS.GET_CART_CUSTOMER_DONE,
            data: fixedData,
            errors: (0, _utils.getCustomerDataErrors)(fixedData)
        };
    }; // Customer data


    _exports.getCartCustomerDone = getCartCustomerDone;

    var getCustomerStart = function getCustomerStart() {
        return {
            type: ACTIONS.GET_CUSTOMER_START
        };
    };

    _exports.getCustomerStart = getCustomerStart;

    var getCustomerDone = function getCustomerDone(data) {
        var fixedData = (0, _utils.fixCustomerData)(data);
        return {
            type: ACTIONS.GET_CUSTOMER_DONE,
            data: fixedData,
            errors: (0, _utils.getCustomerDataErrors)(fixedData)
        };
    };

    _exports.getCustomerDone = getCustomerDone;

    var getCartRepresentativeStart = function getCartRepresentativeStart() {
        return {
            type: ACTIONS.GET_CART_REPRESENTATIVE_DATA_START
        };
    };

    _exports.getCartRepresentativeStart = getCartRepresentativeStart;

    var getCartRepresentativeDone = function getCartRepresentativeDone(data) {
        return {
            type: ACTIONS.GET_CART_REPRESENTATIVE_DATA_DONE,
            data: data
        };
    };

    _exports.getCartRepresentativeDone = getCartRepresentativeDone;

    var getBillingAccountFormDataStart = function getBillingAccountFormDataStart() {
        return {
            type: ACTIONS.GET_BILLING_ACCOUNT_FORM_DATA_START
        };
    };

    _exports.getBillingAccountFormDataStart = getBillingAccountFormDataStart;

    var getBillingAccountFormDataDone = function getBillingAccountFormDataDone(data) {
        return {
            type: ACTIONS.GET_BILLING_ACCOUNT_FORM_DATA_DONE,
            data: data
        };
    };

    _exports.getBillingAccountFormDataDone = getBillingAccountFormDataDone;

    var getCartDeliveryDataStart = function getCartDeliveryDataStart() {
        return {
            type: ACTIONS.GET_CART_DELIVERY_DATA_START
        };
    };

    _exports.getCartDeliveryDataStart = getCartDeliveryDataStart;

    var getCartDeliveryDataDone = function getCartDeliveryDataDone(data) {
        return {
            type: ACTIONS.GET_CART_DELIVERY_DATA_DONE,
            data: data
        };
    };

    _exports.getCartDeliveryDataDone = getCartDeliveryDataDone;

    var getInstallationAvailableTimeSlotsStart = function getInstallationAvailableTimeSlotsStart() {
        return {
            type: ACTIONS.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START
        };
    };

    _exports.getInstallationAvailableTimeSlotsStart = getInstallationAvailableTimeSlotsStart;

    var getInstallationAvailableTimeSlotsDone = function getInstallationAvailableTimeSlotsDone(data) {
        return {
            type: ACTIONS.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE,
            data: data
        };
    };

    _exports.getInstallationAvailableTimeSlotsDone = getInstallationAvailableTimeSlotsDone;

    var getConsentsStart = function getConsentsStart(data) {
        return {
            type: ACTIONS.GET_CONSENTS_START,
            data: data
        };
    };

    _exports.getConsentsStart = getConsentsStart;

    var getConsentsDone = function getConsentsDone(data) {
        return {
            type: ACTIONS.GET_CONSENTS_DONE,
            data: data
        };
    };

    _exports.getConsentsDone = getConsentsDone;

    var setConsentReadOnly = function setConsentReadOnly(consentCode, readOnly) {
        return {
            type: ACTIONS.MAKE_CONSENT_READONLY,
            consentCode: consentCode,
            readOnly: readOnly
        };
    };

    _exports.setConsentReadOnly = setConsentReadOnly;

    var getPeriodDone = function getPeriodDone(data) {
        return {
            type: ACTIONS.GET_PERIOD_DONE,
            data: data
        };
    };

    _exports.getPeriodDone = getPeriodDone;

    var getPeriodStart = function getPeriodStart() {
        return {
            type: ACTIONS.GET_PERIOD_START
        };
    };

    _exports.getPeriodStart = getPeriodStart;
    var fetchZipCodeFromWWTActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.fetchZipCodeFromWWT);
    _exports.fetchZipCodeFromWWTActions = fetchZipCodeFromWWTActions;
    var fetchSelectedWwtAddressActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES);
    _exports.fetchSelectedWwtAddressActions = fetchSelectedWwtAddressActions;
    var getFutureInvestmentAddressActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES);
    _exports.getFutureInvestmentAddressActions = getFutureInvestmentAddressActions;
    var getFutureInvestmentConsentActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES);
    _exports.getFutureInvestmentConsentActions = getFutureInvestmentConsentActions;
    var getFutureInvestmentOfferActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES);
    _exports.getFutureInvestmentOfferActions = getFutureInvestmentOfferActions;
    var registerLeadActions = (0, _requestActionsCreator.createRequestActions)(ACTIONS.REGISTER_LEAD_ACTION_TYPES);
    _exports.registerLeadActions = registerLeadActions;

    var getCartConsentsStart = function getCartConsentsStart() {
        return {
            type: ACTIONS.GET_CART_CONSENTS_START
        };
    };

    _exports.getCartConsentsStart = getCartConsentsStart;

    var getCartConsentsDone = function getCartConsentsDone(data, consents) {
        return {
            type: ACTIONS.GET_CART_CONSENTS_DONE,
            data: data,
            consents: consents
        };
    };

    _exports.getCartConsentsDone = getCartConsentsDone;

    var updateCartConsentsStart = function updateCartConsentsStart(codes) {
        return {
            type: ACTIONS.UPDATE_CONSENT_STATE_START,
            codes: codes
        };
    };

    _exports.updateCartConsentsStart = updateCartConsentsStart;

    var updateCartConsentsDone = function updateCartConsentsDone(response) {
        return {
            type: ACTIONS.UPDATE_CONSENT_STATE_DONE,
            response: response
        };
    };

    _exports.updateCartConsentsDone = updateCartConsentsDone;

    var getCustomerMnpDataStart = function getCustomerMnpDataStart(codes) {
        return {
            type: ACTIONS.GET_CUSTOMER_MNP_DATA_START,
            codes: codes
        };
    };

    _exports.getCustomerMnpDataStart = getCustomerMnpDataStart;

    var getCustomerMnpDataDone = function getCustomerMnpDataDone(response) {
        return {
            type: ACTIONS.GET_CUSTOMER_MNP_DATA_DONE,
            response: response
        };
    };

    _exports.getCustomerMnpDataDone = getCustomerMnpDataDone;

    var getCartMnpDataStart = function getCartMnpDataStart(codes) {
        return {
            type: ACTIONS.GET_CART_MNP_DATA_START,
            codes: codes
        };
    };

    _exports.getCartMnpDataStart = getCartMnpDataStart;

    var getCartMnpDataDone = function getCartMnpDataDone(sources) {
        return {
            type: ACTIONS.GET_CART_MNP_DATA_DONE,
            sources: sources
        };
    };

    _exports.getCartMnpDataDone = getCartMnpDataDone;

    var fetchPosSimCardTypesDone = function fetchPosSimCardTypesDone(data) {
        return {
            type: ACTIONS.FETCH_POS_SIM_CARD_TYPES_DONE,
            data: data
        };
    };

    _exports.fetchPosSimCardTypesDone = fetchPosSimCardTypesDone;

    var fetchSerialNumbersDone = function fetchSerialNumbersDone(response) {
        return {
            type: ACTIONS.FETCH_PICKUP_SERIAL_NUMBERS_DONE,
            response: response
        };
    };

    _exports.fetchSerialNumbersDone = fetchSerialNumbersDone;

    var updateSerialNumbersStart = function updateSerialNumbersStart() {
        return {
            type: ACTIONS.UPDATE_SERIAL_NUMBERS_START
        };
    };

    _exports.updateSerialNumbersStart = updateSerialNumbersStart;

    var updateSerialNumbersDone = function updateSerialNumbersDone(response) {
        return {
            type: ACTIONS.UPDATE_SERIAL_NUMBERS_DONE,
            response: response
        };
    };

    _exports.updateSerialNumbersDone = updateSerialNumbersDone;

    var fetchPaymentStatusDone = function fetchPaymentStatusDone(response) {
        return {
            type: ACTIONS.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
            response: response
        };
    };

    _exports.fetchPaymentStatusDone = fetchPaymentStatusDone;

    var getSimCardTypesDone = function getSimCardTypesDone(data, serialNumbers) {
        return {
            type: ACTIONS.FETCH_SIM_CARD_TYPES_DONE,
            data: data,
            serialNumbers: serialNumbers
        };
    };

    _exports.getSimCardTypesDone = getSimCardTypesDone;

    var checkPaymentStatusStart = function checkPaymentStatusStart(codes) {
        return {
            type: ACTIONS.CHECK_PAYMENT_STATUS_START,
            codes: codes
        };
    };

    _exports.checkPaymentStatusStart = checkPaymentStatusStart;

    var pickupActivationStart = function pickupActivationStart() {
        return {
            type: ACTIONS.PICKUP_ORDER_ACTIVATION_START
        };
    };

    _exports.pickupActivationStart = pickupActivationStart;

    var pickupActivationDone = function pickupActivationDone() {
        return {
            type: ACTIONS.PICKUP_ORDER_ACTIVATION_DONE
        };
    };

    _exports.pickupActivationDone = pickupActivationDone;

    var pickupGeneralError = function pickupGeneralError(error) {
        return {
            type: ACTIONS.PICKUP_GENERAL_ERROR,
            error: error.responseJSON
        };
    };

    _exports.pickupGeneralError = pickupGeneralError;

    var pickupPaymentStateusError = function pickupPaymentStateusError() {
        return {
            type: ACTIONS.PICKUP_ORDER_PAYMENT_STATUS_ERROR
        };
    };

    _exports.pickupPaymentStateusError = pickupPaymentStateusError;

    var pickupDocumentsDone = function pickupDocumentsDone(data) {
        return {
            type: ACTIONS.PICKUP_DOCUMENTS_DONE,
            documents: data
        };
    };

    _exports.pickupDocumentsDone = pickupDocumentsDone;

    var pickupSerialNumberError = function pickupSerialNumberError(data) {
        return {
            type: ACTIONS.PICKUP_SERIAL_NUMBERS_ERROR,
            errors: data
        };
    };

    _exports.pickupSerialNumberError = pickupSerialNumberError;

    var getBpgDataDone = function getBpgDataDone(data) {
        return {
            type: ACTIONS.GET_BPG_DATA_DONE,
            data: data
        };
    };

    _exports.getBpgDataDone = getBpgDataDone;

    var getBpgDataStart = function getBpgDataStart() {
        return {
            type: ACTIONS.GET_BPG_DATA_START
        };
    };

    _exports.getBpgDataStart = getBpgDataStart;
});
//# sourceMappingURL=remote.js.map