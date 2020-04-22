define(["exports", "../actionTypes", "./remote", "../remoteApi", "../selectors", "./data", "./payment", "../constants/AgreementType", "./app", "../../documents/actions/documents", "../constants/DeliveryMethod", "eshop/utils/DataLayerUtils"], function(e, o, r, u, l, a, i, s, c, d, D, f) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.selectedDocumentsDeliveryMethod = e.fetchDeliveryMethodsDone = e.setEmailConfirmationModalAccepted = e.setEmailConfirmationModalState = e.setDeliveryEmailAddress = e.setIsDigitalAgreementDefault = e.selectAgreementType = e.selectDeliveryMethodForDevices = e.selectDeliveryMethods = e.updateDeliveryMethod = e.updateAgreementType = e.initDelivery = e.fetchCartDelivery = e.fetchDeliveryMethods = void 0, o = babelHelpers.interopRequireWildcard(o), r = babelHelpers.interopRequireWildcard(r), u = babelHelpers.interopRequireDefault(u), s = babelHelpers.interopRequireDefault(s), D = babelHelpers.interopRequireDefault(D), f = babelHelpers.interopRequireDefault(f);

    function y() {
        return function(i) {
            return new Promise(function(t, n) {
                u.default.getCartDelivery().then(function(e) {
                    i(_(e)), t(e)
                }).catch(function(e) {
                    n(e)
                })
            })
        }
    }
    e.fetchDeliveryMethods = y;
    e.fetchCartDelivery = function() {
        return function(i) {
            return new Promise(function(t, n) {
                u.default.getCartDeliveryData().then(function(e) {
                    i(r.getCartDeliveryDataDone(e[0])), t(e[0])
                }).catch(function(e) {
                    n(e)
                })
            })
        }
    };
    e.initDelivery = function() {
        return function(t, n) {
            t((0, a.registerNextStepCondition)("payment")), t((0, a.registerNextStepCondition)("delivery")), t(A((0, l.getSelectedOrDefaultAgreementType)(n()))), t(m((0, l.getSelectedOrDefaultDeliveryMethod)(n())));
            var e = (0, l.getCartDeliveryMethodForDevices)(n()) || (0, l.getDeliveryMethodsForDevices)(n())[0] && (0, l.getDeliveryMethodsForDevices)(n())[0].id;
            e && t(T(e)), t(h()), (0, a.updateDelivery)()(t, n).then(function(e) {
                return p(l.hasAgreementTypeChanged)(t, n)
            }).then(function(e) {
                return v()(t, n)
            }).then(function(e) {
                t((0, a.requestCartConsentsData)()), t((0, d.fetchDocuments)()), f.default.pushAgreementVisibilityEvent((0, l.getDeliveryMethodsRaw)(n()).map(function(e) {
                    return e.id
                }).some(D.default.isDigital) ? s.default.DIGITAL : s.default.PAPER), f.default.pushSelectedAgreementType((0, l.getSelectedOrDefaultAgreementType)(n()))
            })
        }
    };
    e.updateAgreementType = function(i) {
        return function(t, n) {
            var e = (0, l.getDeliveryMethodsRaw)(n()).map(function(e) {
                return e.id
            });
            i === s.default.DIGITAL && (0, l.getCustomerNoEmail)(n()) && e.some(function(e) {
                return D.default.PICKUP_ON_EMAIL === e
            }) ? t((0, c.showEmailWarningModal)()) : (t(A(i)), t(E((0, l.getSelectedOrDefaultDeliveryMethod)(n()))), f.default.pushSelectedAgreementType(i), i === s.default.DIGITAL && t((0, a.unregisterNextStepCondition)("additionalDocuments")), (0, a.updateDelivery)()(t, n).then(function(e) {
                return y()(t)
            }).then(function(e) {
                return v()(t, n)
            }).then(function(e) {
                t((0, a.requestCartConsentsData)()), t((0, d.fetchDocuments)())
            }))
        }
    };
    e.updateDeliveryMethod = function(n) {
        return function(t, e) {
            t(E(n)), (0, a.updateDelivery)()(t, e).then(function(e) {
                t((0, a.requestCartConsentsData)()), t((0, d.fetchDocuments)())
            })
        }
    };
    var h = function() {
            return function(e, t) {
                (0, l.shouldShowEmailWarning)(t()) && e((0, c.showEmailWarningModal)((0, l.getDescriptionKey)(t())))
            }
        },
        v = function() {
            return function(e, t) {
                return (0, l.isSelectedDeliveryMethodAvailable)(t()) ? Promise.resolve(!1) : (e(E((0, l.getDefaultDeliveryMethod)(t()))), (0, a.updateDelivery)()(e, t))
            }
        },
        p = function(n) {
            return function(e, t) {
                return n(t()) ? y()(e) : Promise.resolve(!1)
            }
        },
        E = function(n) {
            return function(e, t) {
                e((0, i.selectPaymentMethod)((0, l.getSelectedOrDefaultPaymentMethod)(t()))), e(g(n))
            }
        },
        m = function(n) {
            return function(e, t) {
                e(M(n))
            }
        },
        M = function(e) {
            return {
                type: o.SELECT_DELIVERY_METHOD_WITHOUT_CHANGING_PAYMENT_METHOD,
                id: e
            }
        },
        g = function(e) {
            return {
                type: o.SELECT_DELIVERY_METHOD,
                id: e
            }
        };
    e.selectDeliveryMethods = function(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            n = t.mobile,
            i = t.fixDocuments,
            r = t.fixDevices;
        return {
            type: o.SELECT_DELIVERY_METHODS,
            mobile: n,
            fixDocuments: i,
            fixDevices: r
        }
    };
    var T = function(e) {
        return {
            type: o.SELECT_DELIVERY_METHOD_FOR_DEVICES,
            id: e
        }
    };
    e.selectDeliveryMethodForDevices = T;
    var A = function(e) {
        return {
            type: o.SELECT_AGREEMENT_TYPE,
            id: e
        }
    };
    e.selectAgreementType = A;
    e.setIsDigitalAgreementDefault = function(e) {
        return {
            type: o.SET_IS_DIGITAL_AGREEMENT_DEFAULT,
            isDigitalAgreementDefault: e
        }
    };
    e.setDeliveryEmailAddress = function(t) {
        return function(e) {
            e({
                type: o.SET_DELIVERY_EMAIL,
                payload: t
            })
        }
    };
    e.setEmailConfirmationModalState = function(t) {
        return function(e) {
            e({
                type: o.SET_EMAIL_CONFIRMATION_MODAL_STATE,
                payload: t
            })
        }
    };
    e.setEmailConfirmationModalAccepted = function(t) {
        return function(e) {
            e({
                type: o.SET_EMAIL_CONFIRMATION_MODAL_ACCEPTED,
                payload: t
            })
        }
    };
    var _ = function(e) {
        return {
            type: o.FETCH_DELIVERY_METHODS_DONE,
            methods: e.deliveryMethods,
            isDeliveryRequired: e.isDeliveryRequired,
            isFirstMethodDefault: e.isFirstMethodDefault,
            paymentWithoutDeliveryMethod: e.paymentWithoutDeliveryMethod
        }
    };
    e.fetchDeliveryMethodsDone = _;
    e.selectedDocumentsDeliveryMethod = function(e) {
        var t = (0, l.getDelivery)(e);
        return t.selectedDeliveryMethods && t.selectedDeliveryMethods.fixDocuments ? t.selectedDeliveryMethods.fixDocuments : t.selectedMethod
    }
});
//# sourceMappingURL=delivery.js.map