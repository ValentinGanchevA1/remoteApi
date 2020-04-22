define(["exports", "../actionTypes", "../../auth/actionTypes"], function(_exports, _actionTypes, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.mobileBillingAccountsSet = _exports.msisdnVerificationRequired = _exports.addFromLink = _exports.urlOfferParametersUsed = _exports.urlParametersUsed = _exports.verifyMsisdnLoading = _exports.carouselReady = _exports.offersLoading = _exports.isCustomerSelected = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var isCustomerSelected = function isCustomerSelected() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CUSTOMER_SELECTED:
                return true;

            case ACTIONS.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
                if (action.payload == undefined) return state;
                return action.payload.notFound || action.payload.lastName || action.payload.tradingName;

            default:
                return state;
        }
    };

    _exports.isCustomerSelected = isCustomerSelected;

    var offersLoading = function offersLoading() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_OFFERS_START:
                return true;

            case _actionTypes.SELECT_PROCESS_TYPE:
                return true;

            case _actionTypes.SELECT_LOYALTY_LENGTH:
                return true;

            case _actionTypes.FETCH_OFFERS:
                return false;

            case _actionTypes.CAROUSEL_READY:
                return false;

            default:
                return state;
        }
    };

    _exports.offersLoading = offersLoading;

    var carouselReady = function carouselReady() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CAROUSEL_READY:
                return true;

            case _actionTypes.CAROUSEL_PREPARING:
                return false;

            default:
                return state;
        }
    };

    _exports.carouselReady = carouselReady;

    var verifyMsisdnLoading = function verifyMsisdnLoading() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHECK_MSISDN_RESULT_B2B_START:
                var newState = state.slice(0);
                newState[action.index] = true;
                return newState;

            case _actionTypes.CHECK_MSISDN_RESULT_B2B:
                var newState1 = state.slice(0);
                newState1[action.index] = false;
                return newState1;

            default:
                return state;
        }
    };

    _exports.verifyMsisdnLoading = verifyMsisdnLoading;

    var urlParametersUsed = function urlParametersUsed() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.URL_PARAMETERS_USED:
                return true;

            default:
                return state;
        }
    };

    _exports.urlParametersUsed = urlParametersUsed;

    var urlOfferParametersUsed = function urlOfferParametersUsed() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.URL_OFFER_PARAMETERS_USED:
                return true;

            default:
                return state;
        }
    };

    _exports.urlOfferParametersUsed = urlOfferParametersUsed;

    var addFromLink = function addFromLink() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.ADD_FROM_LINK:
                return true;

            default:
                return state;
        }
    };

    _exports.addFromLink = addFromLink;

    var msisdnVerificationRequired = function msisdnVerificationRequired() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.MSISDN_VERIFICATION_REQUIRED_ON:
                return true;

            case _actionTypes.MSISDN_VERIFICATION_REQUIRED_OFF:
                return false;

            default:
                return state;
        }
    };

    _exports.msisdnVerificationRequired = msisdnVerificationRequired;

    var mobileBillingAccountsSet = function mobileBillingAccountsSet() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_MOBILE_BILLING_ACCOUNTS:
                return action.meta;

            default:
                return state;
        }
    };

    _exports.mobileBillingAccountsSet = mobileBillingAccountsSet;
});
//# sourceMappingURL=metaData.js.map