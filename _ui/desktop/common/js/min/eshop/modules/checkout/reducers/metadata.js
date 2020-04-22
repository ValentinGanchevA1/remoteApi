define(["exports", "../actionTypes", "../utils/utils", "../constants/EmailWarningDescriptionEnum"], function(e, o, i, t) {
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

    function d(t) {
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
    }), e.allDocuments = e.payment = e.fullPageLoader = e.fixCartRefreshResult = e.emailWarningModalState = e.manualVerificationModalVisible = e.courierDeliveryMethodModalState = e.courierDeliveryMethodModalVisible = e.courierDeliveryMethodModalDidMount = e.earlierInstallationConsentNotAcceptedModalDidMount = e.earlierInstallationConsentNotAcceptedModalIsAccepted = e.earlierInstallationConsentNotAcceptedModalIsVisible = e.billingAccount = e.period = e.currentStepId = e.cartConsents = e.updatingConsents = e.cartMnpData = e.mnpData = e.consents = e.installation = e.delivery = e.representative = e.customer = void 0, o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireDefault(t);
    var a = {
            requested: !1,
            loading: !1,
            updating: !1,
            readOnly: !1,
            finished: !1
        },
        s = d({}, a, {
            locked: !1,
            isOnlineCookie: !1,
            isSmsVerified: !1,
            bpgRequested: !1,
            businessDataSource: "",
            isWWW: !0
        });
    e.customer = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : s,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.CLEAR_CART_CUSTOMER_REQUESTED:
                return d({}, n, {
                    requested: !1
                });
            case o.GET_CUSTOMER_START:
            case o.GET_CART_CUSTOMER_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.GET_CUSTOMER_DONE:
            case o.GET_CART_CUSTOMER_DONE:
                var i = !r.data.isBusinessClient || (!!r.data.existing || !!r.data.nip);
                return d({}, n, {
                    loading: !1,
                    readOnly: !!r.data.existing,
                    fixBundleInCart: r.data.fixBundleInCart,
                    isOnlineCookie: r.data.isOnlineCookie,
                    isSmsVerified: r.data.isSmsVerified,
                    bpgRequested: i,
                    businessDataSource: r.data.businessDataSource,
                    isWWW: r.data.isWWW,
                    finished: !0
                });
            case o.SWITCH_CUSTOMER_EDIT_MODE:
                return d({}, n, {
                    readOnly: !n.readOnly
                });
            case o.GET_BPG_DATA_DONE:
                var a = "";
                return r.data && r.data.nip && (a = "bpg"), d({}, n, {
                    bpgRequested: !0,
                    businessDataSource: a
                });
            default:
                return n
        }
    };
    e.representative = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.GET_CART_REPRESENTATIVE_DATA_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.GET_CART_REPRESENTATIVE_DATA_DONE:
                return d({}, n, {
                    loading: !1
                });
            default:
                return n
        }
    };
    e.delivery = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.GET_CART_DELIVERY_DATA_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.GET_CART_DELIVERY_DATA_DONE:
                return d({}, n, {
                    loading: !1,
                    readOnly: !!r.existing,
                    finished: !0
                });
            default:
                return n
        }
    };
    e.installation = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START:
                return d({}, n, {
                    requested: !0
                });
            case o.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
                return d({}, n);
            default:
                return n
        }
    };
    e.consents = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.GET_CONSENTS_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0,
                    data: r.data
                });
            case o.GET_CONSENTS_DONE:
                return d({}, n, {
                    loading: !1
                });
            case o.UPDATE_CONSENT_STATE_START:
                return d({}, n, {
                    updating: !0
                });
            case o.UPDATE_CONSENT_STATE_DONE:
                return d({}, n, {
                    updating: !1
                });
            default:
                return n
        }
    };
    e.mnpData = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.GET_CUSTOMER_MNP_DATA_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.GET_CUSTOMER_MNP_DATA_DONE:
                return d({}, n, {
                    loading: !1
                });
            default:
                return n
        }
    };
    e.cartMnpData = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.GET_CART_MNP_DATA_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.GET_CART_MNP_DATA_DONE:
                return d({}, n, {
                    loading: !1
                });
            default:
                return n
        }
    };
    e.updatingConsents = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.GET_CONSENTS_DONE:
                return r.data.map(function(e) {
                    return n[e.consentCode] = !1
                }), d({}, n);
            case o.UPDATE_CONSENT_STATE_START:
                return r.codes.map(function(e) {
                    return n[e] = !0
                }), d({}, n);
            case o.UPDATE_CONSENT_STATE_DONE:
                return r.response.map(function(e) {
                    return n[e.consentCode] = !1
                }), d({}, n);
            default:
                return n
        }
    };
    e.cartConsents = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.GET_CART_CONSENTS_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.UPDATE_CONSENT_STATE_START:
                return d({}, n, {
                    updating: !0
                });
            case o.UPDATE_CONSENT_STATE_DONE:
                return d({}, n, {
                    updating: !1
                });
            case o.GET_CART_CONSENTS_DONE:
                return d({}, n, {
                    loading: !1
                });
            default:
                return n
        }
    };
    e.currentStepId = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : document.getElementById("checkoutStepProgressBadId") && document.getElementById("checkoutStepProgressBadId").value || "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.REGISTER_CURRENT_STEP_ID:
                return r.id;
            default:
                return n
        }
    };
    e.period = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.GET_PERIOD_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.GET_PERIOD_DONE:
                return d({}, n, {
                    loading: !1
                });
            default:
                return n
        }
    };
    e.billingAccount = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.GET_BILLING_ACCOUNT_FORM_DATA_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return d({}, n, {
                    loading: !1
                });
            default:
                return n
        }
    };
    e.earlierInstallationConsentNotAcceptedModalIsVisible = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case o.SHOW_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
                return !0;
            case o.CLOSE_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
                return !1;
            default:
                return e
        }
    };
    e.earlierInstallationConsentNotAcceptedModalIsAccepted = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case o.ACCEPT_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
                return !0;
            default:
                return e
        }
    };
    e.earlierInstallationConsentNotAcceptedModalDidMount = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_MOUNTED_ACTION:
                return !0;
            default:
                return n
        }
    };
    e.courierDeliveryMethodModalDidMount = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.COURIER_DELIVERY_METHOD_MODAL_MOUNTED:
                return !0;
            default:
                return n
        }
    };
    e.courierDeliveryMethodModalVisible = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.SHOW_COURIER_DELIVERY_METHOD_MODAL:
                return !0;
            case o.HIDE_COURIER_DELIVERY_METHOD_MODAL:
                return !1;
            default:
                return n
        }
    };
    e.courierDeliveryMethodModalState = function(e, t) {
        var n = !(0 < arguments.length && void 0 !== e) || e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SET_COURIER_DELIVERY_METHOD_MODAL_STATE:
                return r.payload;
            default:
                return n
        }
    };
    var u = {
        visible: !(e.manualVerificationModalVisible = function(e, t) {
            var n = 0 < arguments.length && void 0 !== e && e,
                r = 1 < arguments.length ? t : void 0;
            switch (r.type) {
                case o.DO_CHECKOUT_STEP_START:
                case o.DO_CHECKOUT_STEP_DONE:
                case o.CHECKOUT_ERROR_MANUAL_DISMISS:
                    return !1;
                case o.DO_CHECKOUT_STEP_ERROR:
                    return (0, i.hasManualVerificationErrors)(r);
                case o.SET_MANUAL_VERIFICATION_MODAL_VISIBILITY:
                    return r.visible;
                default:
                    return n
            }
        }),
        descriptionKey: t.default.DEFAULT
    };
    e.emailWarningModalState = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : u,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.SHOW_EMAIL_WARNING_MODAL:
                return {
                    visible: !0, descriptionKey: r.descriptionKey
                };
            case o.HIDE_EMAIL_WARNING_MODAL:
                return d({}, n, {
                    visible: !1
                });
            default:
                return n
        }
    };
    e.fixCartRefreshResult = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : null,
            r = 1 < arguments.length && void 0 !== t ? t : {};
        switch (r.type) {
            case o.SET_FIX_CART_REFRESH_RESULT:
                return r.data;
            default:
                return n
        }
    };
    e.fullPageLoader = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.CONSENT_DOCUMENTS_LOADER:
                return r.data;
            default:
                return n
        }
    };
    e.payment = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.GET_PAYMENT_DATA_START:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.GET_PAYMENT_DATA_DONE:
                return d({}, n, {
                    loading: !1,
                    finished: !0
                });
            default:
                return n
        }
    };
    e.allDocuments = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : a;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.SAVE_ALL_DOCUMENTS_STARTED:
                return d({}, n, {
                    requested: !0,
                    loading: !0
                });
            case o.SAVE_ALL_DOCUMENTS_FINISHED:
                return d({}, n, {
                    loading: !1,
                    finished: !0
                });
            default:
                return n
        }
    }
});
//# sourceMappingURL=metadata.js.map