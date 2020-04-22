define(["exports", "../actionTypes", "lodash"], function(e, l, f) {
    "use strict";

    function o(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(n);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            })), t.push.apply(t, o)
        }
        return t
    }

    function C(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(t), !0).forEach(function(e) {
                babelHelpers.defineProperty(n, e, t[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
            })
        }
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.consentAcknowledgmentsReadWhileTalking = e.consentPhoneNumber = e.consentEmailAddress = e.consentDocumentStatus = e.wasBigAndZonkAgreementConfirmationModalConfirmed = e.wasBonusAgreementConfirmationModalConfirmed = e.isRegisteredAgreementConfirmationComponent = e.consentGroupExpanded = e.permanentlyAgreedVisibleForGroup = e.documentsConfirmation = e.verificationConsentType = e.consentTypeInPrintConsentsValidator = e.consentDocumentsPrintStateForMobile = e.consentDocumentsPrintState = e.consentDocumentsLoader = e.conf = e.consentStates = e.modifyConsentsInCartQueue = e.consents = void 0, l = babelHelpers.interopRequireWildcard(l), f = babelHelpers.interopRequireDefault(f);
    e.consents = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e ? e : [],
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.GET_CONSENTS_DONE:
                return o.data;
            case l.MAKE_CONSENT_READONLY:
                var r = t.slice(),
                    a = t.findIndex(function(e) {
                        return e.consentCode === o.consentCode
                    });
                return -1 != a && (r[a].readonly = o.readOnly), r;
            default:
                return t
        }
    };
    e.modifyConsentsInCartQueue = function(e, n) {
        var t, o, r, a = 0 < arguments.length && void 0 !== e ? e : [],
            i = 1 < arguments.length ? n : void 0;
        switch (i.type) {
            case l.PUSH_TO_MODIFY_CONSENTS_IN_CART_QUEUE:
                return t = a, o = i.toAdd, r = t, o.forEach(function(t) {
                    r = r.filter(function(e) {
                        return !!((n = e).consentCode != t.consentCode || t.bundleNo != n.bundleNo && t.bundleNo && n.bundleNo);
                        var n
                    })
                }), r.concat(o);
            case l.SET_MODIFY_CONSENTS_IN_CART_QUEUE:
                return i.data;
            default:
                return a
        }
    };
    e.consentStates = function(e, n) {
        var o = 0 < arguments.length && void 0 !== e ? e : [],
            r = 1 < arguments.length ? n : void 0;
        switch (r.type) {
            case l.GET_CART_CONSENTS_DONE:
                var t = r.consents.filter(function(n) {
                        var e = r.data.find(function(e) {
                            return e.consentCode === n.consentCode
                        });
                        return n.msisdns && 0 != n.msisdns.length && e && null == e.bundleNo
                    }),
                    a = t.map(function(e) {
                        return e.consentCode
                    }),
                    i = [];
                t.forEach(function(n) {
                    var t = r.data.find(function(e) {
                        return e.consentCode === n.consentCode
                    });
                    n.msisdns.forEach(function(e) {
                        i.push({
                            consentCode: t.consentCode,
                            bundleNo: e.bundleNo,
                            stateCode: t.consentStateCode,
                            permanentlyAgreed: t.permanentlyAgreed
                        })
                    })
                });
                var u = r.data.filter(function(e) {
                    return !a.includes(e.consentCode)
                }).map(function(e) {
                    return {
                        consentCode: e.consentCode,
                        bundleNo: e.bundleNo,
                        stateCode: e.consentStateCode,
                        permanentlyAgreed: e.permanentlyAgreed
                    }
                });
                return function(r, e) {
                    var n = (e || []).filter(function(e) {
                        return e.bundleAssignments && e.bundleAssignments[0]
                    });
                    r = r || [];
                    var t = n.map(function(n) {
                            var e = r.filter(function(e) {
                                    return e.consentCode == n.consentCode
                                }),
                                t = e.filter(function(e) {
                                    return null == e.bundleNo
                                })[0],
                                o = e.filter(function(e) {
                                    return null != e.bundleNo
                                });
                            return t ? C({}, n, {
                                nullConsentState: t,
                                nonNullConsentStates: o
                            }) : null
                        }).filter(function(e) {
                            return !!e
                        }),
                        o = r.filter(function(n) {
                            return !t.find(function(e) {
                                return e.consentCode == n.consentCode
                            })
                        }),
                        a = f.default.flatMap(t, function(n) {
                            return n.nonNullConsentStates[0] ? n.nonNullConsentStates : n.bundleAssignments.map(function(e) {
                                return C({}, n.nullConsentState, {
                                    bundleNo: e.bundleNo
                                })
                            })
                        });
                    return o.concat(a)
                }([].concat(i, babelHelpers.toConsumableArray(u)), r.consents);
            case l.CHANGE_CONSENT_STATE:
                var s = [];
                return r.data.map(function(n) {
                    var t = n.bundleNo || null,
                        e = o.filter(function(e) {
                            return e.consentCode === n.consentCode && (null == t || e.bundleNo == t)
                        });
                    e[0] ? e.forEach(function(e) {
                        return e.stateCode = n.stateCode
                    }) : s = s.concat([{
                        consentCode: n.consentCode,
                        stateCode: n.stateCode,
                        bundleNo: t,
                        permanentlyAgreed: !1
                    }])
                }), o.concat(s);
            case l.UPDATE_CONSENT_STATE_DONE:
                var c = [];
                return r.response.map(function(n) {
                    var t = n.bundleNo || null;
                    o.find(function(e) {
                        return e.consentCode === n.consentCode && e.bundleNo == t
                    }) ? o.find(function(e) {
                        return e.consentCode === n.consentCode && e.bundleNo == t
                    }).stateCode = n.stateCode : c = c.concat([{
                        consentCode: n.consentCode,
                        stateCode: n.stateCode,
                        bundleNo: t,
                        permanentlyAgreed: !1
                    }])
                }), o.concat(c);
            case l.GET_CONSENTS_DONE:
                var d = r.data.map(function(e) {
                    return e.consentCode
                });
                return o.filter(function(n) {
                    var t = !1;
                    return d.map(function(e) {
                        e !== n.consentCode || (t = !0)
                    }), t
                });
            default:
                return o
        }
    };
    e.conf = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e ? e : [],
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.REGISTER_CMS_CONFIGURATION:
                return t.concat(o.config || []);
            default:
                return t
        }
    };
    e.consentDocumentsLoader = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e && e,
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.CONSENT_DOCUMENTS_LOADER:
                return o.data;
            default:
                return t
        }
    };
    e.consentDocumentsPrintState = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? n : void 0).type) {
            case l.CONSENT_PRINT_DOCUMENTS:
                return !0;
            case l.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
            case l.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
            case l.CHANGE_CUSTOMER_DATA_FORM_FIELD:
            case l.REQUIRED_CONSENT_CHANGED:
                return !1;
            default:
                return t
        }
    };
    e.consentDocumentsPrintStateForMobile = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? n : void 0).type) {
            case l.CONSENT_PRINT_DOCUMENTS:
                return !0;
            default:
                return t
        }
    };
    e.consentTypeInPrintConsentsValidator = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e ? e : "WZRK",
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.CONSENT_TYPE_IN_PRINT_CONSENTS_VALIDATOR:
                return o.consentType;
            default:
                return t
        }
    };
    e.verificationConsentType = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
            n = 1 < arguments.length ? arguments[1] : void 0;
        switch (n.type) {
            case l.REGISTER_VERIFICATION_CONSENT_TYPE:
                return n.verificationConsentType;
            default:
                return e
        }
    };
    e.documentsConfirmation = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e && e,
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.CHANGE_DOCUMENTS_CONFIRMATION:
                return o.value;
            default:
                return t
        }
    };
    e.permanentlyAgreedVisibleForGroup = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.SET_PERMANENTLY_AGREED_CONSENTS_VISIBLE_FOR_GROUP:
                return C({}, t, babelHelpers.defineProperty({}, o.groupNumber, o.visible));
            default:
                return t
        }
    };
    e.consentGroupExpanded = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e ? e : [],
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.CONSENT_GROUP_EXPANDED:
                return C({}, t, babelHelpers.defineProperty({}, o.listNo, o.value));
            default:
                return t
        }
    };
    e.isRegisteredAgreementConfirmationComponent = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? n : void 0).type) {
            case l.REGISTER_AGREEMENT_VALIDATION_COMPONENT:
                return !0;
            default:
                return t
        }
    };
    e.wasBonusAgreementConfirmationModalConfirmed = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e && e,
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.CLOSE_AGREEMENT_VALIDATION_MODAL:
                return "BONUS" !== o.modalVariant && "COMMON" !== o.modalVariant || !o.wasConfirmed ? t : !0;
            default:
                return t
        }
    };
    e.wasBigAndZonkAgreementConfirmationModalConfirmed = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e && e,
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.CLOSE_AGREEMENT_VALIDATION_MODAL:
                return "BIGZONK" !== o.modalVariant && "COMMON" !== o.modalVariant || !o.wasConfirmed ? t : !0;
            default:
                return t
        }
    };
    e.consentDocumentStatus = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e ? e : "",
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.CONSENTS_GET_STATUS:
                return o.payload;
            default:
                return t
        }
    };
    e.consentEmailAddress = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e ? e : "",
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.ENTER_CONSENTS_EMAIL_ADDRESS:
                return o.payload;
            case l.GET_CUSTOMER_DONE:
            case l.GET_CART_CUSTOMER_DONE:
                return o.data.emailAddress ? o.data.emailAddress : "";
            default:
                return t
        }
    };
    e.consentPhoneNumber = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e ? e : "",
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.ENTER_CONSENTS_PHONE_NUMBER:
                return o.payload;
            case l.GET_CUSTOMER_DONE:
            case l.GET_CART_CUSTOMER_DONE:
                return o.data.phoneNumber ? o.data.phoneNumber : "";
            default:
                return t
        }
    };
    e.consentAcknowledgmentsReadWhileTalking = function(e, n) {
        var t = 0 < arguments.length && void 0 !== e && e,
            o = 1 < arguments.length ? n : void 0;
        switch (o.type) {
            case l.ENTER_CONSENTS_ACCEPTED_ACKNOWLEDGMENTS:
                return o.payload;
            default:
                return t
        }
    }
});
//# sourceMappingURL=consents.js.map