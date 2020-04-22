define(["exports", "../actionTypes", "../utils/utils"], function(e, _, c) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.create = e.formErrors = e.formVisible = e.formData = e.accountContractsVisible = e.accountContracts = e.isShowContractButtonEnabled = e.selectedFix = e.selectedMobile = e.data = void 0;
    var a = {
            postalCode: "",
            town: "",
            streetName: "",
            streetNumber: "",
            appartmentNo: "",
            emailAddress: ""
        },
        o = {
            accountCode: ""
        };
    e.data = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.SET_BILLING_ACCOUNTS:
                return n.billingAccounts;
            default:
                return r
        }
    };
    e.selectedMobile = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : o,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
                return n.billingAccount;
            case _.SET_CREATE_NEW_BILLING_ACCOUNT:
                return o;
            case _.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return (0, c.requiredBillingAccountFieldExist)(n.data) ? o : r;
            default:
                return r
        }
    };
    e.selectedFix = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : o,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.SET_SELECTED_BILLING_ACCOUNT_FIX:
                return n.billingAccount;
            case _.SET_CREATE_NEW_BILLING_ACCOUNT:
                return o;
            case _.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return (0, c.requiredBillingAccountFieldExist)(n.data) ? o : r;
            default:
                return r
        }
    };
    e.isShowContractButtonEnabled = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case _.GET_BILLING_ACCOUNT_CONTRACTS_START:
                return !0;
            case _.GET_BILLING_ACCOUNT_CONTRACTS:
                return !1;
            default:
                return r
        }
    };
    e.accountContracts = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
                return {};
            case _.GET_BILLING_ACCOUNT_CONTRACTS:
                return n.accountContracts;
            default:
                return r
        }
    };
    e.accountContractsVisible = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
            case _.SET_SELECTED_BILLING_ACCOUNT_FIX:
                return !1;
            case _.GET_BILLING_ACCOUNT_CONTRACTS:
                return 0 !== n.accountContracts.length;
            case _.SET_BILLING_ACCOUNT_CONTRACTS_VISIBILITY:
                return n.visible;
            case _.SET_CREATE_NEW_BILLING_ACCOUNT:
                return !1;
            default:
                return r
        }
    };
    e.formData = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : a,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.CHANGE_BILLING_ACCOUNT_FORM_FIELD:
                return i({}, r, babelHelpers.defineProperty({}, n.name, n.value));
            case _.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return n.data;
            default:
                return r
        }
    };
    e.formVisible = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.SET_BILLING_ACCOUNT_FORM_VISIBILITY:
                return n.visible;
            case _.SET_CREATE_NEW_BILLING_ACCOUNT:
            case _.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
            case _.SET_SELECTED_BILLING_ACCOUNT_FIX:
                return !1;
            case _.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return (0, c.requiredBillingAccountFieldExist)(n.data);
            default:
                return r
        }
    };
    e.formErrors = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.CHANGE_BILLING_ACCOUNT_FORM_FIELD:
                return i({}, r, babelHelpers.defineProperty({}, n.name, n.errors));
            case _.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return {};
            default:
                return r
        }
    };
    e.create = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case _.SET_CREATE_NEW_BILLING_ACCOUNT:
                return !0;
            case _.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
            case _.SET_SELECTED_BILLING_ACCOUNT_FIX:
            case _.CHANGE_BILLING_ACCOUNT_FORM_FIELD:
                return !1;
            case _.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return (0, c.requiredBillingAccountFieldExist)(n.data);
            default:
                return r
        }
    }
});
//# sourceMappingURL=billingAccount.js.map