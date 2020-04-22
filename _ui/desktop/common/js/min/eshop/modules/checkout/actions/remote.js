define(["exports", "../actionTypes", "../../core/utils/request-actions-creator", "./../utils/utils"], function(t, r, e, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getBpgDataStart = t.getBpgDataDone = t.pickupSerialNumberError = t.pickupDocumentsDone = t.pickupPaymentStateusError = t.pickupGeneralError = t.pickupActivationDone = t.pickupActivationStart = t.checkPaymentStatusStart = t.getSimCardTypesDone = t.fetchPaymentStatusDone = t.updateSerialNumbersDone = t.updateSerialNumbersStart = t.fetchSerialNumbersDone = t.fetchPosSimCardTypesDone = t.getCartMnpDataDone = t.getCartMnpDataStart = t.getCustomerMnpDataDone = t.getCustomerMnpDataStart = t.updateCartConsentsDone = t.updateCartConsentsStart = t.getCartConsentsDone = t.getCartConsentsStart = t.registerLeadActions = t.getFutureInvestmentOfferActions = t.getFutureInvestmentConsentActions = t.getFutureInvestmentAddressActions = t.fetchSelectedWwtAddressActions = t.fetchZipCodeFromWWTActions = t.getPeriodStart = t.getPeriodDone = t.setConsentReadOnly = t.getConsentsDone = t.getConsentsStart = t.getInstallationAvailableTimeSlotsDone = t.getInstallationAvailableTimeSlotsStart = t.getCartDeliveryDataDone = t.getCartDeliveryDataStart = t.getBillingAccountFormDataDone = t.getBillingAccountFormDataStart = t.getCartRepresentativeDone = t.getCartRepresentativeStart = t.getCustomerDone = t.getCustomerStart = t.getCartCustomerDone = t.getCartCustomerStart = t.doCheckoutStepError = t.doCheckoutStepDone = t.doCheckoutStepStart = void 0, r = babelHelpers.interopRequireWildcard(r);
    t.doCheckoutStepStart = function(t) {
        return {
            type: r.DO_CHECKOUT_STEP_START,
            checkoutData: t
        }
    };
    t.doCheckoutStepDone = function(t) {
        return {
            type: r.DO_CHECKOUT_STEP_DONE,
            code: t.code
        }
    };
    t.doCheckoutStepError = function(t) {
        return {
            type: r.DO_CHECKOUT_STEP_ERROR,
            code: t.code,
            status: t.status,
            message: t.message,
            results: t.results
        }
    };
    t.getCartCustomerStart = function() {
        return {
            type: r.GET_CART_CUSTOMER_START
        }
    };
    t.getCartCustomerDone = function(t) {
        var e = (0, n.fixCustomerData)(t);
        return {
            type: r.GET_CART_CUSTOMER_DONE,
            data: e,
            errors: (0, n.getCustomerDataErrors)(e)
        }
    };
    t.getCustomerStart = function() {
        return {
            type: r.GET_CUSTOMER_START
        }
    };
    t.getCustomerDone = function(t) {
        var e = (0, n.fixCustomerData)(t);
        return {
            type: r.GET_CUSTOMER_DONE,
            data: e,
            errors: (0, n.getCustomerDataErrors)(e)
        }
    };
    t.getCartRepresentativeStart = function() {
        return {
            type: r.GET_CART_REPRESENTATIVE_DATA_START
        }
    };
    t.getCartRepresentativeDone = function(t) {
        return {
            type: r.GET_CART_REPRESENTATIVE_DATA_DONE,
            data: t
        }
    };
    t.getBillingAccountFormDataStart = function() {
        return {
            type: r.GET_BILLING_ACCOUNT_FORM_DATA_START
        }
    };
    t.getBillingAccountFormDataDone = function(t) {
        return {
            type: r.GET_BILLING_ACCOUNT_FORM_DATA_DONE,
            data: t
        }
    };
    t.getCartDeliveryDataStart = function() {
        return {
            type: r.GET_CART_DELIVERY_DATA_START
        }
    };
    t.getCartDeliveryDataDone = function(t) {
        return {
            type: r.GET_CART_DELIVERY_DATA_DONE,
            data: t
        }
    };
    t.getInstallationAvailableTimeSlotsStart = function() {
        return {
            type: r.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START
        }
    };
    t.getInstallationAvailableTimeSlotsDone = function(t) {
        return {
            type: r.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE,
            data: t
        }
    };
    t.getConsentsStart = function(t) {
        return {
            type: r.GET_CONSENTS_START,
            data: t
        }
    };
    t.getConsentsDone = function(t) {
        return {
            type: r.GET_CONSENTS_DONE,
            data: t
        }
    };
    t.setConsentReadOnly = function(t, e) {
        return {
            type: r.MAKE_CONSENT_READONLY,
            consentCode: t,
            readOnly: e
        }
    };
    t.getPeriodDone = function(t) {
        return {
            type: r.GET_PERIOD_DONE,
            data: t
        }
    };
    t.getPeriodStart = function() {
        return {
            type: r.GET_PERIOD_START
        }
    };
    var o = (0, e.createRequestActions)(r.fetchZipCodeFromWWT);
    t.fetchZipCodeFromWWTActions = o;
    var a = (0, e.createRequestActions)(r.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES);
    t.fetchSelectedWwtAddressActions = a;
    var u = (0, e.createRequestActions)(r.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES);
    t.getFutureInvestmentAddressActions = u;
    var T = (0, e.createRequestActions)(r.GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES);
    t.getFutureInvestmentConsentActions = T;
    var _ = (0, e.createRequestActions)(r.GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES);
    t.getFutureInvestmentOfferActions = _;
    var s = (0, e.createRequestActions)(r.REGISTER_LEAD_ACTION_TYPES);
    t.registerLeadActions = s;
    t.getCartConsentsStart = function() {
        return {
            type: r.GET_CART_CONSENTS_START
        }
    };
    t.getCartConsentsDone = function(t, e) {
        return {
            type: r.GET_CART_CONSENTS_DONE,
            data: t,
            consents: e
        }
    };
    t.updateCartConsentsStart = function(t) {
        return {
            type: r.UPDATE_CONSENT_STATE_START,
            codes: t
        }
    };
    t.updateCartConsentsDone = function(t) {
        return {
            type: r.UPDATE_CONSENT_STATE_DONE,
            response: t
        }
    };
    t.getCustomerMnpDataStart = function(t) {
        return {
            type: r.GET_CUSTOMER_MNP_DATA_START,
            codes: t
        }
    };
    t.getCustomerMnpDataDone = function(t) {
        return {
            type: r.GET_CUSTOMER_MNP_DATA_DONE,
            response: t
        }
    };
    t.getCartMnpDataStart = function(t) {
        return {
            type: r.GET_CART_MNP_DATA_START,
            codes: t
        }
    };
    t.getCartMnpDataDone = function(t) {
        return {
            type: r.GET_CART_MNP_DATA_DONE,
            sources: t
        }
    };
    t.fetchPosSimCardTypesDone = function(t) {
        return {
            type: r.FETCH_POS_SIM_CARD_TYPES_DONE,
            data: t
        }
    };
    t.fetchSerialNumbersDone = function(t) {
        return {
            type: r.FETCH_PICKUP_SERIAL_NUMBERS_DONE,
            response: t
        }
    };
    t.updateSerialNumbersStart = function() {
        return {
            type: r.UPDATE_SERIAL_NUMBERS_START
        }
    };
    t.updateSerialNumbersDone = function(t) {
        return {
            type: r.UPDATE_SERIAL_NUMBERS_DONE,
            response: t
        }
    };
    t.fetchPaymentStatusDone = function(t) {
        return {
            type: r.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
            response: t
        }
    };
    t.getSimCardTypesDone = function(t, e) {
        return {
            type: r.FETCH_SIM_CARD_TYPES_DONE,
            data: t,
            serialNumbers: e
        }
    };
    t.checkPaymentStatusStart = function(t) {
        return {
            type: r.CHECK_PAYMENT_STATUS_START,
            codes: t
        }
    };
    t.pickupActivationStart = function() {
        return {
            type: r.PICKUP_ORDER_ACTIVATION_START
        }
    };
    t.pickupActivationDone = function() {
        return {
            type: r.PICKUP_ORDER_ACTIVATION_DONE
        }
    };
    t.pickupGeneralError = function(t) {
        return {
            type: r.PICKUP_GENERAL_ERROR,
            error: t.responseJSON
        }
    };
    t.pickupPaymentStateusError = function() {
        return {
            type: r.PICKUP_ORDER_PAYMENT_STATUS_ERROR
        }
    };
    t.pickupDocumentsDone = function(t) {
        return {
            type: r.PICKUP_DOCUMENTS_DONE,
            documents: t
        }
    };
    t.pickupSerialNumberError = function(t) {
        return {
            type: r.PICKUP_SERIAL_NUMBERS_ERROR,
            errors: t
        }
    };
    t.getBpgDataDone = function(t) {
        return {
            type: r.GET_BPG_DATA_DONE,
            data: t
        }
    };
    t.getBpgDataStart = function() {
        return {
            type: r.GET_BPG_DATA_START
        }
    }
});
//# sourceMappingURL=remote.js.map