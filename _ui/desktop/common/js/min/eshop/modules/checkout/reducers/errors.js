define(["exports", "../actionTypes", "../utils/utils"], function(e, c, i) {
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

    function a(t) {
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
    }), e.frontValidationMsg = e.existingOrderOrCartValidation = e.agreementConfirmationModalVariant = e.showAgreementConfirmationModal = e.pickupReplanishmentRequired = e.fixAppartmentNoValidation = e.fixCustomerExists = e.cvWithDeposit = e.manual = e.stock = e.reservation = e.backendValidation = e.data = e.order = e.noemailmnp = e.cimconsenterror = e.needsearch = e.callback = e.auth = e.cvMagnum = e.cv = e.cim = void 0;

    function o(e) {
        return e.results || []
    }
    e.cim = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "CIM" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.cv = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "CV" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description,
                        details: e.details,
                        paytelAcceptable: !!e.paytelAcceptable
                    }
                });
            case c.CHECKOUT_ERROR_CV_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.cvMagnum = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "CV_MAGNUM" === e.category || "CV_MAGNUM_WITH_DEPOSIT" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description,
                        details: e.details,
                        category: e.category,
                        paytelAcceptable: e.paytelAcceptable
                    }
                });
            case c.CHECKOUT_ERROR_CV_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.auth = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "AUTH" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_AUTH_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.callback = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "CALLBACK" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_CALLBACK_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.needsearch = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "SEARCH" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_AUTH_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.cimconsenterror = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "CIM_CONSISTENT" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description,
                        peselFromSession: e.details.peselFromSession,
                        peselFromCheckout: e.details.peselFromCheckout
                    }
                });
            case c.CHECKOUT_ERROR_AUTH_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.noemailmnp = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "NO_EMAIL_MNP" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_AUTH_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.order = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "ORDER" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.data = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "DATA" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.backendValidation = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "VALIDATION" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.reservation = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "RESERVATION" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.stock = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "STOCK" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.manual = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "MANUAL" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_MANUAL_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.cvWithDeposit = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "CV_WITH_DEPOSIT" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description,
                        deposit: e.deposit,
                        bundleNo: e.bundleNo,
                        allowDepositAcceptance: e.allowDepositAcceptance,
                        paytelAcceptable: e.paytelAcceptable
                    }
                });
            default:
                return r
        }
    };
    e.fixCustomerExists = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "GET_CUSTOMER" === e.code
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.fixAppartmentNoValidation = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).length < 2 ? o(n).filter(function(e) {
                    return "APPARTMENT_NO_VALIDATION" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                }) : [];
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.pickupReplanishmentRequired = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).filter(function(e) {
                    return "REPLANISHMENT_REQUIRED" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                });
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.showAgreementConfirmationModal = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case c.OPEN_AGREEMENT_VALIDATION_MODAL:
                return !0;
            case c.CLOSE_AGREEMENT_VALIDATION_MODAL:
                return !1;
            default:
                return r
        }
    };
    e.agreementConfirmationModalVariant = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.OPEN_AGREEMENT_VALIDATION_MODAL:
                return n.modalVariant;
            default:
                return r
        }
    };
    e.existingOrderOrCartValidation = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.DO_CHECKOUT_STEP_START:
            case c.DO_CHECKOUT_STEP_DONE:
                return [];
            case c.DO_CHECKOUT_STEP_ERROR:
                return o(n).length < 2 ? o(n).filter(function(e) {
                    return "EXISTING_ORDER" === e.category
                }).map(function(e) {
                    return {
                        code: e.code,
                        description: e.description
                    }
                }) : [];
            case c.CHECKOUT_ERROR_BACKEND_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.frontValidationMsg = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.FRONT_VALIDATION:
                return n.data.map(function(e) {
                    return a({}, e, {
                        afterValidation: !0
                    })
                });
            case c.CHANGE_CONSENT_STATE:
            case c.UPDATE_CONSENT_STATE_START:
                return r.map(function(e) {
                    return a({}, e, {
                        afterValidation: !1
                    })
                });
            case c.CHANGE_CUSTOMER_DATA_FORM_FIELD:
            case c.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
            case c.SWITCH_CUSTOMER_EDIT_MODE:
            case c.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
            case c.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
                return (0, i.removeElementFromArray)(r, "type", "customerData").map(function(e) {
                    return a({}, e, {
                        afterValidation: !1
                    })
                });
            case c.CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD:
            case c.CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD:
            case c.CHANGE_CUSTOMER_MNP_DATA_CONTACT_METHOD:
            case c.CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_MODE:
            case c.CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_TIME:
                return (0, i.removeElementFromArray)(r, "type", "mnpData").map(function(e) {
                    return a({}, e, {
                        afterValidation: !1
                    })
                });
            case c.SELECT_APU:
                return (0, i.removeElementFromArray)(r, "type", "apuData").map(function(e) {
                    return a({}, e, {
                        afterValidation: !1
                    })
                });
            case c.CONSENT_PRINT_DOCUMENTS:
                return (0, i.removeElementFromArray)(r, "type", "consentDocuments").map(function(e) {
                    return a({}, e, {
                        afterValidation: !1
                    })
                });
            case c.CHANGE_REPRESENTATIVE_FORM_FIELD:
            case c.CHANGE_GRANTOR_FORM_FIELD:
                return (0, i.removeElementFromArray)(r, "type", "representativeData").map(function(e) {
                    return a({}, e, {
                        afterValidation: !1
                    })
                });
            case c.VERIFY_SERIAL_NUMBERS:
                return (0, i.removeElementFromArray)(r, "type", "simCardSerialNumberFilled").map(function(e) {
                    return a({}, e, {
                        afterValidation: !1
                    })
                });
            default:
                return r
        }
    }
});
//# sourceMappingURL=errors.js.map