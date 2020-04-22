define(["exports", "../actionTypes", "../../auth/actionTypes"], function(e, d, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mobileBillingAccountsSet = e.msisdnVerificationRequired = e.addFromLink = e.urlOfferParametersUsed = e.urlParametersUsed = e.verifyMsisdnLoading = e.carouselReady = e.offersLoading = e.isCustomerSelected = void 0, i = babelHelpers.interopRequireWildcard(i);
    e.isCustomerSelected = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case d.CUSTOMER_SELECTED:
                return !0;
            case i.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
                return null == n.payload ? r : n.payload.notFound || n.payload.lastName || n.payload.tradingName;
            default:
                return r
        }
    };
    e.offersLoading = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case d.FETCH_OFFERS_START:
            case d.SELECT_PROCESS_TYPE:
            case d.SELECT_LOYALTY_LENGTH:
                return !0;
            case d.FETCH_OFFERS:
            case d.CAROUSEL_READY:
                return !1;
            default:
                return r
        }
    };
    e.carouselReady = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case d.CAROUSEL_READY:
                return !0;
            case d.CAROUSEL_PREPARING:
                return !1;
            default:
                return r
        }
    };
    e.verifyMsisdnLoading = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case d.CHECK_MSISDN_RESULT_B2B_START:
                var i = r.slice(0);
                return i[n.index] = !0, i;
            case d.CHECK_MSISDN_RESULT_B2B:
                var a = r.slice(0);
                return a[n.index] = !1, a;
            default:
                return r
        }
    };
    e.urlParametersUsed = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case d.URL_PARAMETERS_USED:
                return !0;
            default:
                return r
        }
    };
    e.urlOfferParametersUsed = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case d.URL_OFFER_PARAMETERS_USED:
                return !0;
            default:
                return r
        }
    };
    e.addFromLink = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case d.ADD_FROM_LINK:
                return !0;
            default:
                return r
        }
    };
    e.msisdnVerificationRequired = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case d.MSISDN_VERIFICATION_REQUIRED_ON:
                return !0;
            case d.MSISDN_VERIFICATION_REQUIRED_OFF:
                return !1;
            default:
                return r
        }
    };
    e.mobileBillingAccountsSet = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.SET_MOBILE_BILLING_ACCOUNTS:
                return n.meta;
            default:
                return r
        }
    }
});
//# sourceMappingURL=metaData.js.map