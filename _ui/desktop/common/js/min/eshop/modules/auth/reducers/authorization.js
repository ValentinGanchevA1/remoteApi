define(["exports", "redux", "../actionTypes", "eshop/utils/OnlineUtils", "eshop/modules/checkout/actionTypes"], function(e, t, o, i, a) {
    "use strict";

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function c(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.salesChannel = e.accountByMsisdn = e.showLogoutConfirmationModal = e.ommitAccountAuth = e.selectedBillingAccountId = e.billingAccounts = e.billingAccountContractLimitExceeded = e.loggedCustomerData = e.getMessage = e.showSection = e.incompatibleMarket = e.isLoading = e.chosenExistingAccount = e.billingAccountChangeOn = e.modalForAccountSelectionOn = e.modalForAccountIdentifyOn = e.modalForProcessOn = e.addToCartAfterAuth = e.retentionAlertModalOn = e.msisdn = e.isPeselAndAddressVerified = e.isPeselAndAddressVerificationEnabled = e.stayLoveRetentionMSISDN = e.doRegisterBillingAccountPopupB2B = void 0, o = babelHelpers.interopRequireWildcard(o), i = babelHelpers.interopRequireDefault(i);

    function n(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B:
                return !0;
            default:
                return n
        }
    }
    e.doRegisterBillingAccountPopupB2B = n;

    function l(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : i.default.loadFromSessionStorage("stayLoveRetentionMSISDN"),
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.STAY_LOVE_RETENTION_MSISDN:
                return i.default.saveInSessionStorage("stayLoveRetentionMSISDN", r.msisdn), r.msisdn;
            default:
                return n
        }
    }
    e.stayLoveRetentionMSISDN = l;

    function s(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED:
                return r.isEnabled;
            default:
                return n
        }
    }
    e.isPeselAndAddressVerificationEnabled = s;

    function u(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : null,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.IS_PESEL_AND_ADDRESS_VERIFIED:
                return r.isVerified;
            default:
                return n
        }
    }
    e.isPeselAndAddressVerified = u;

    function d(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.AUTHORIZATION_MSISDN_OR_LOGIN:
                return r.msisdn;
            default:
                return n
        }
    }
    e.msisdn = d;

    function O(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.AUTHORIZATION_RETENTION_ALERT_MODAL_ON:
                return !0;
            case o.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF:
                return !1;
            default:
                return n
        }
    }
    e.retentionAlertModalOn = O;

    function A(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.AUTHORIZATION_ADD_TO_CART_AFTER:
                return r.value;
            default:
                return n
        }
    }
    e.addToCartAfterAuth = A;

    function _(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.AUTHORIZATION_MODAL_FOR_PROCESS_ON:
                return !0;
            case o.AUTHORIZATION_MODAL_FOR_PROCESS_OFF:
                return !1;
            default:
                return n
        }
    }
    e.modalForProcessOn = _;

    function T(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON:
                return !0;
            case o.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF:
                return !1;
            case a.DO_CHECKOUT_STEP_ERROR:
                return (r.results || []).filter(function(e) {
                    return "AUTH" === e.category
                }).length ? !0 : n;
            default:
                return n
        }
    }
    e.modalForAccountIdentifyOn = T;

    function I(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.AUTHORIZATION_CHOOSE_ACCOUNT_ON:
                return !0;
            case o.AUTHORIZATION_CHANGE_ACCOUNT_OFF:
            case o.AUTHORIZATION_CHOOSE_ACCOUNT_OFF:
                return !1;
            default:
                return n
        }
    }
    e.modalForAccountSelectionOn = I;

    function g(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.AUTHORIZATION_CHANGE_ACCOUNT_ON:
                return !0;
            case o.AUTHORIZATION_CHANGE_ACCOUNT_OFF:
                return !1;
            default:
                return n
        }
    }
    e.billingAccountChangeOn = g;

    function h(e, t) {
        var n = !(0 < arguments.length && void 0 !== e) || e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING:
                return !0;
            case o.AUTHORIZATION_CHOOSE_ACCOUNT_NEW:
                return !1;
            default:
                return n
        }
    }
    e.chosenExistingAccount = h;

    function f(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.AUTHORIZATION_IS_LOADING_ON:
                return !0;
            case o.AUTHORIZATION_IS_LOADING_OFF:
                return !1;
            default:
                return n
        }
    }
    e.isLoading = f;

    function N(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.MARKET_IS_INCOMPATIBLE:
                return r.payload;
            case o.MARKET_IS_COMPATIBLE:
                return !1;
            default:
                return n
        }
    }
    e.incompatibleMarket = N;

    function v(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.AUTHORIZATION_SHOW_SECTION:
                return r.section;
            default:
                return n
        }
    }
    e.showSection = v;

    function C(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SHOW_MESSAGE:
                return null == r.msg ? n : r.msg;
            case o.CLEAR_MESSAGE:
            default:
                return n
        }
    }
    e.getMessage = C;

    function E(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : null,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
                return null == r.payload ? n : c({}, r.payload, {
                    isCartChanged: n && n.isCartChanged || r.payload.isCartChanged
                });
            case o.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG:
                return c({}, n, {
                    isCartChanged: !1
                });
            default:
                return n
        }
    }
    e.loggedCustomerData = E;

    function S(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SET_MOBILE_BILLING_ACCOUNTS:
                return r.payload && r.payload.status && 422 == r.payload.status ? !0 : !1;
            default:
                return n
        }
    }
    e.billingAccountContractLimitExceeded = S;

    function p(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : null,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SET_MOBILE_BILLING_ACCOUNTS:
                return null == r.payload || r.payload.status ? null : r.payload;
            default:
                return n
        }
    }
    e.billingAccounts = p;

    function R(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SET_SELECTED_BILLING_ACCOUNT_ID:
                return r.accountId;
            case o.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
                return null == r.payload ? n : r.payload.accountId || "";
            default:
                return n
        }
    }
    e.selectedBillingAccountId = R;

    function y(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.AUTHORIZATION_OMMIT_ACCOUNT_AUTH:
                return !0;
            default:
                return n
        }
    }
    e.ommitAccountAuth = y;

    function L(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON:
                return !0;
            case o.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF:
                return !1;
            default:
                return n
        }
    }
    e.showLogoutConfirmationModal = L;

    function U(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : null,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SET_ACCOUNT_BY_MSISDN:
                return c({}, r.account, {
                    hasMagnumProduct: !1
                });
            default:
                return n
        }
    }
    e.accountByMsisdn = U;

    function D(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SET_SALES_CHANNEL:
                return r.channel;
            default:
                return n
        }
    }
    e.salesChannel = D;
    var M = (0, t.combineReducers)({
        isLoading: f,
        msisdn: d,
        modalForProcessOn: _,
        modalForAccountIdentifyOn: T,
        modalForAccountSelectionOn: I,
        addToCartAfterAuth: A,
        billingAccountChangeOn: g,
        retentionAlertModalOn: O,
        showSection: v,
        chosenExistingAccount: h,
        getMessage: C,
        loggedCustomerData: E,
        isPeselAndAddressVerificationEnabled: s,
        isPeselAndAddressVerified: u,
        billingAccountContractLimitExceeded: S,
        billingAccounts: p,
        accountByMsisdn: U,
        selectedBillingAccountId: R,
        ommitAccountAuth: y,
        showLogoutConfirmationModal: L,
        doRegisterBillingAccountPopupB2B: n,
        salesChannel: D,
        incompatibleMarket: N,
        stayLoveRetentionMSISDN: l
    });
    e.default = M
});
//# sourceMappingURL=authorization.js.map