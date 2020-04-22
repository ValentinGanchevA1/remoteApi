define(["exports", "../remoteApi", "../../documents/remoteApi", "../../documents/pickup/remoteApi", "./remote", "../actionTypes", "../../magnum2/actionTypes", "../selectors", "../../cart/actions/cart", "eshop/modules/cbs/main", "./app", "../utils/utils", "../utils/MiniCartUtils", "../../documents/actions/documents", "../reducers/helperObjects", "../validators", "eshop/modules/auth/actions/api", "eshop/modules/auth/selectors/authorization", "./delivery"], function(e, c, a, u, s, l, d, i, o, r, f, p, C, m, D, S, n, E, N) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.serialNumbersValidation = v, e.setForeignerAvailable = e.setInitialNationality = e.requestDocumentsToMerge = e.requestBpgData = e.validateCustomerDataFields = e.registerAgreementConfirmationComponent = e.updateValueConsentGroupExpanded = e.updateConsentGroupExpanded = e.forceSlotRefresh = e.printReturnDevicesDocument = e.fetchPickupLastOrder = e.pickupActivation = e.fetchSAPSerialNumbers = e.pickupNavigationNextButtonDone = e.pickupNavigationNextButtonStart = e.requestBillingAccountFormData = e.fetchSimCardTypes = e.printPickupDocument = e.pickupDocumentDownloadStarted = e.changePaymentOverride = e.fetchGoodsOrderPaymentStatus = e.updateOrderSerialNumbers = e.pickupSerialNumbersErrorDismiss = e.changeSimType = e.validateSerialNumbers = e.changeSerialNumber = e.fetchSerialNumbers = e.pickupGeneralError = e.fetchPosSimCardTypes = e.registerVerificationConsentType = e.registerPrintConsentValidator = e.selectApu = e.printMobileConsents = e.printConsents = e.openFile = e.downloadFile = e.openDocument = e.selectCustomerWorkPhoneNumber = e.selectCvDocument = e.fetchCvDocumentList = e.selectWwtAddress = e.getSelectedWwtAddress = e.validateZipCode = e.getZipCodeFromWWT = e.updateInstallationInfo = e.fetchDeliveryMethodsOnly = e.updateDelivery = e.updateCartAndGetDocuments = e.updateAsynchConsent = e.updateConsentsStates = e.clearModifyConsentsInCartQueue = e.requestRecalculateConsentsForForeigner = e.requestRecalculateConsentsStrategy = e.requestCartConsentsData = e.requestCartMnpData = e.subscribeCustomerSelected = e.changeInstallationComment = e.selectInstallationTimeSlot = e.fetchInstallationAvailableTimeSlots = e.requestCartRepresentativeData = e.clearCartCustomerRequested = e.requestCustomerData = e.requestCartCustomerData = e.forceRequestCartCustomerData = e.registerCmsConsentConfig = e.unregisterNextStepCondition = e.registerNextStepCondition = void 0, c = babelHelpers.interopRequireDefault(c), a = babelHelpers.interopRequireDefault(a), u = babelHelpers.interopRequireDefault(u), s = babelHelpers.interopRequireWildcard(s), l = babelHelpers.interopRequireWildcard(l), d = babelHelpers.interopRequireWildcard(d);

    function h(n) {
        return function(e, t) {
            (0, i.checkoutConditionIsRegistered)(n)(t()) || e({
                type: l.REGISTER_NEXT_STEP_CONDITION,
                condition: n
            })
        }
    }
    e.registerNextStepCondition = h;
    e.unregisterNextStepCondition = function(n) {
        return function(e, t) {
            (0, i.checkoutConditionIsRegistered)(n)(t()) && e({
                type: l.UNREGISTER_NEXT_STEP_CONDITION,
                condition: n
            })
        }
    };
    e.registerCmsConsentConfig = function(e) {
        return {
            type: l.REGISTER_CMS_CONFIGURATION,
            config: e
        }
    };

    function g() {
        return function(t, n) {
            return t(s.getCartCustomerStart()), c.default.getCartCustomer().then(function(e) {
                return 0 < e.length ? e[0] : null
            }).then(function(e) {
                t(s.getCartCustomerDone(e)), t(r.actions.getCbsData((0, i.getAddressMain)(n()), !0)), t(r.actions.getCbsData((0, i.getAddressCorrespondence)(n())))
            })
        }
    }
    e.forceRequestCartCustomerData = g;
    e.requestCartCustomerData = function() {
        return function(e, t) {
            return (0, i.customerDataRequested)(t()) ? Promise.resolve() : e(g())
        }
    };
    e.requestCustomerData = function() {
        return function(t, e) {
            return t(s.getCustomerStart()), c.default.getCustomer().then(function(e) {
                t(s.getCustomerDone(e))
            })
        }
    };
    e.clearCartCustomerRequested = function() {
        return {
            type: l.CLEAR_CART_CUSTOMER_REQUESTED
        }
    };
    e.requestCartRepresentativeData = function() {
        return function(t, e) {
            return (0, i.representativeDataRequested)(e()) ? Promise.resolve() : (t(s.getCartRepresentativeStart()), c.default.getCartRepresentative().then(function(e) {
                return 0 < e.length ? e[0] : null
            }).then(function(e) {
                return t(s.getCartRepresentativeDone(e))
            }))
        }
    };
    e.fetchInstallationAvailableTimeSlots = function(e, t, n) {
        var r = !(0 < arguments.length && void 0 !== e) || e,
            o = 1 < arguments.length && void 0 !== t ? t : null,
            a = 2 < arguments.length && void 0 !== n && n;
        return function(t, e) {
            t(s.getInstallationAvailableTimeSlotsStart()), (0, i.installationAvailableTimeSlotsRequested)(e()), t(h("installationTimeSlot")), c.default.getInstallationAvailableTimeSlots(r, o).then(function(e) {
                return t(s.getInstallationAvailableTimeSlotsDone(e))
            }), t(_({})), a && (t(k(!1)), t({
                type: l.SHOW_INSTALLATION_SLOT_ERROR,
                payload: !0
            }))
        }
    };
    var _ = function(a) {
        return function(r, e) {
            r({
                type: l.SELECT_INSTALLATION_TIME_SLOT,
                data: a
            }), r({
                type: l.SHOW_INSTALLATION_SLOT_ERROR,
                payload: !1
            });
            var o = "",
                t = (0, i.getInstallationAvailableTimeSlots)(e()).slots;
            t && t.map(function(n, e) {
                n.slots && n.slots.map(function(e, t) {
                    e.startDate == a.startDate && e.endDate == a.endDate && (o = o + " " + n.header.split(" ")[1] + " " + n.header.split(" ")[2] + " " + a.startDate.split("-")[0] + ", " + e.htmlText, r({
                        type: l.SELECT_INSTALLATION_SLOT_DESCRIPTION,
                        payload: o
                    }))
                })
            })
        }
    };
    e.selectInstallationTimeSlot = _;
    e.changeInstallationComment = function(e) {
        return {
            type: l.CHANGE_INSTALLATION_COMMENT,
            payload: e.value
        }
    };
    e.subscribeCustomerSelected = function() {
        return function(e, t) {
            (0, p.whenAvailable)("PubSub", function() {
                window.subscribeCustomerSelectedFlag && PubSub.unsubscribe(window.subscribeCustomerSelectedFlag), window.subscribeCustomerSelectedFlag = PubSub.subscribe("UXEvent.CustomerService.SearchCustomer.CustomerSelected", function() {
                    e({
                        type: l.CUSTOMER_SELECTED
                    }), (0, E.getRegisterBillingAccountPopupB2B)(t()) && e((0, n.requestLoggedCustomerDataAndCheckExistence)())
                })
            }, e)
        }
    };
    e.requestCartMnpData = function(n) {
        return function(t, e) {
            (0, i.cartMnpDataRequested)(e()) || (t(s.getCartMnpDataStart()), c.default.getCartMnpData().then(function(e) {
                return t(s.getCartMnpDataDone({
                    response: e,
                    defaults: n
                }))
            }))
        }
    };
    e.requestCartConsentsData = function() {
        return function(n, e) {
            var r = (0, N.selectedDocumentsDeliveryMethod)(e());
            if (!r && "delivery-payment" == (0, i.getCurrentStepId)(e()) && !(0, i.cartConsentsDataRequested)(e())) return n(s.getCartConsentsStart()), c.default.getCartConsents().then(function(e) {
                return n(s.getCartConsentsDone(e, e))
            }), Promise.resolve();
            var t = (0, i.getLegalForm)(e());
            !r && !t && (0, i.cartConsentsDataRequested)(e()) || (n(s.getCartConsentsStart()), n(s.getConsentsStart({
                deliveryMethodCode: r,
                legalForm: t
            })), c.default.getConsentsData(r, t).then(function(t) {
                n(s.getConsentsDone(t, r)), n(s.setConsentReadOnly("21_CONV", (0, i.getCustomerNoEmail)(e()))), c.default.getCartConsents().then(function(e) {
                    return n(s.getCartConsentsDone(e, t))
                })
            }))
        }
    };
    e.requestRecalculateConsentsStrategy = function(o, a) {
        return function(n, e) {
            var r = (0, N.selectedDocumentsDeliveryMethod)(e()),
                t = (0, i.getLegalForm)(e());
            n(s.getCartConsentsStart()), c.default.recalculateConsentFromStrategy(o, a).then(function() {
                c.default.getConsentsData(r, t).then(function(t) {
                    n(s.getConsentsDone(t, r)), n(s.setConsentReadOnly("21_CONV", (0, i.getCustomerNoEmail)(e()))), c.default.getCartConsents().then(function(e) {
                        return n(s.getCartConsentsDone(e, t))
                    })
                })
            })
        }
    };
    e.requestRecalculateConsentsForForeigner = function(e) {
        return function(n) {
            n(s.getCartConsentsStart()), c.default.requestRecalculateConsentsForForeigner(e).then(function() {
                c.default.getConsentsData().then(function(t) {
                    n(s.getConsentsDone(t)), c.default.getCartConsents().then(function(e) {
                        return n(s.getCartConsentsDone(e, t))
                    })
                })
            })
        }
    };

    function T(a) {
        return function(e, t) {
            var n = (0, i.getModifyConsentsInCartQueue)(t());
            if (a && a[0]) {
                var r = function(r, e) {
                        return 0 < e.filter(function(e) {
                            return n = r, (t = e).consentCode == n.consentCode && t.consentState == n.consentState;
                            var t, n
                        }).length
                    },
                    o = n.filter(function(e) {
                        return !r(e, a)
                    });
                e((0, f.setModifyConsentsInCartQueue)(o))
            }(n = (0, i.getModifyConsentsInCartQueue)(t()))[0] && e(y(n))
        }
    }
    e.clearModifyConsentsInCartQueue = T;
    var y = function(r) {
        return function(t, n) {
            if (0 < r.length && !(0, i.updatingAnyConsent)(n())) {
                var e = r.map(function(e) {
                    return e.consentCode
                });
                return t(s.updateCartConsentsStart(e)), c.default.updateCartConsents(r).then(function(e) {
                    t((0, o.fetchCartPromise)()).then(function() {
                        return t(s.updateCartConsentsDone(e))
                    }), (0, o.fetchMiniCart)()(t, n), t(T(r))
                })
            }
        }
    };
    e.updateConsentsStates = y;
    e.updateAsynchConsent = function() {
        return function(t, e) {
            var n = (0, i.getCheckoutData)(e());
            c.default.updateConsents(n).then(function(e) {
                t((0, m.clearAllLinks)())
            })
        }
    };
    e.updateCartAndGetDocuments = function() {
        return function(e, t) {
            var n = (0, i.getCheckoutData)(t());
            c.default.updateCheckoutCart(n).then(function() {
                A(e, t)
            })
        }
    };
    e.updateDelivery = function() {
        return function(e, r) {
            return new Promise(function(t, n) {
                c.default.updateCheckoutCart((0, i.getCheckoutDataForDelivery)(r())).then(function(e) {
                    t(e)
                }).catch(function(e) {
                    n(e)
                })
            })
        }
    };
    var A = function(e) {
            e((0, m.fetchDocuments)()), e(t())
        },
        t = function() {
            return function(t) {
                c.default.getCartDelivery().then(function(e) {
                    t((0, N.fetchDeliveryMethodsDone)(e))
                })
            }
        };
    e.fetchDeliveryMethodsOnly = t;
    e.updateInstallationInfo = function() {
        return function(e, t) {
            var n = (0, i.getCheckoutData)(t());
            c.default.updateInstallationInfoOnCart(n)
        }
    };
    e.getZipCodeFromWWT = function(n, r, o, a, u, i) {
        return function(t) {
            return t(s.fetchZipCodeFromWWTActions.start()), c.default.getZipCodeFromWWT(n, o, u).success(function(e) {
                1 === e.length ? t(s.fetchZipCodeFromWWTActions.success({
                    placeId: n,
                    placeName: r,
                    streetId: o,
                    streetName: a,
                    streetNumber: u,
                    apartmentNumber: i,
                    zip: e[0].zip
                })) : 1 < e.length && (t({
                    type: d.SAVE_WWT_ADDRESS_NO_ZIP,
                    payload: {
                        placeId: n,
                        placeName: r,
                        streetId: o,
                        streetName: a,
                        streetNumber: u,
                        apartmentNumber: i,
                        zips: e.map(function(e) {
                            return e.zip
                        })
                    }
                }), t({
                    type: d.OPEN_WWT_ZIP_MODAL
                }))
            }).fail(function(e) {
                return 404 === e.status ? (t({
                    type: d.SAVE_WWT_ADDRESS_NO_ZIP,
                    payload: {
                        placeId: n,
                        placeName: r,
                        streetId: o,
                        streetName: a,
                        streetNumber: u,
                        apartmentNumber: i
                    }
                }), t({
                    type: d.OPEN_WWT_ZIP_MODAL
                })) : t(s.fetchZipCodeFromWWTActions.error(e)), e
            })
        }
    };
    e.validateZipCode = function(e) {
        var r = e.addressType,
            o = e.zip,
            a = e.townId,
            u = e.streetId,
            i = e.streetNumber;
        return function(t) {
            var n = "";
            switch (r) {
                case "main":
                    n = l.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD;
                    break;
                case "correspondence":
                    n = l.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD;
                    break;
                case "delivery":
                    n = l.CHANGE_DELIVERY_ADDRESS_FORM_FIELD
            }
            c.default.validateZipCode(o, a, u, i).success(function(e) {
                return t({
                    type: n,
                    name: "zipValid",
                    value: !!e
                })
            }).fail(function(e) {
                t({
                    type: n,
                    name: "zipValid",
                    value: !1
                })
            })
        }
    };
    e.getSelectedWwtAddress = function() {
        return function(t) {
            return t(s.fetchSelectedWwtAddressActions.start()), c.default.getSelectedWwtAddress().then(function(e) {
                return t(s.fetchSelectedWwtAddressActions.success(e))
            }, function(e) {
                return t(s.fetchSelectedWwtAddressActions.error())
            })
        }
    };
    e.selectWwtAddress = function(e) {
        return {
            type: l.SELECT_WWT_ADDRESS,
            payload: e
        }
    };
    e.fetchCvDocumentList = function() {
        return function(t, e) {
            c.default.fetchCvDocumentList().then(function(e) {
                t({
                    type: l.SELECT_CV_DOCUMENTS_LIST,
                    payload: e
                })
            })
        }
    };
    e.selectCvDocument = function(n) {
        return function(e, t) {
            e({
                documentCode: n,
                type: l.SELECT_CV_DOCUMENT
            })
        }
    };
    e.selectCustomerWorkPhoneNumber = function(n) {
        return function(e, t) {
            e({
                phoneNumber: n,
                type: l.SELECT_CUSTOMER_WORK_PHONE_NUMBER,
                errors: S.customerWorkPhoneNumberValidator.customerWorkPhoneNumber(n)
            })
        }
    };

    function O(e, t) {
        var n, r = 1 < arguments.length && void 0 !== t ? t : "document.pdf",
            o = new XMLHttpRequest;
        o.open("GET", e), o.responseType = "arraybuffer", o.send(null), o.onreadystatechange = function() {
            4 === o.readyState && 200 === o.status && (n = new Blob([o.response], {
                type: "application/pdf"
            }), R(n, r))
        }
    }
    e.openDocument = O;
    e.downloadFile = function(r, e) {
        var o = 1 < arguments.length && void 0 !== e ? e : "application/pdf";
        return new Promise(function(e, t) {
            var n = new XMLHttpRequest;
            n.open("GET", r), n.responseType = "arraybuffer", n.onreadystatechange = function() {
                4 === n.readyState && (200 <= n.status && n.status < 300 ? e(new Blob([n.response], {
                    type: o
                })) : t("Error while downloading file=".concat(r)))
            }, n.send(null)
        })
    };
    var R = function(e, t) {
        if (window.navigator && window.navigator.msSaveOrOpenBlob) window.navigator.msSaveOrOpenBlob(e, t);
        else {
            var n = URL.createObjectURL(e),
                r = document.createElement("a");
            r.setAttribute("href", n), r.setAttribute("download", t), r.style.display = "none", document.body.appendChild(r), r.click(), document.body.removeChild(r)
        }
    };
    e.openFile = R;
    e.printConsents = function(n) {
        return function(r, e) {
            r((0, f.setConsentStatesToNegative)());
            var t = (0, i.getCheckoutData)(e());
            r({
                type: l.CONSENT_DOCUMENTS_LOADER,
                data: !0
            }), c.default.doCheckoutAsyncStep(t).catch(function(e) {
                "9" !== e.code && r(s.doCheckoutStepError(e)), (0, f.showErrorMessage)(r, e), r({
                    type: l.CONSENT_DOCUMENTS_LOADER,
                    data: !1
                })
            }).then(function(e) {
                "0" === e.code || "9" === e.code || e.results && (0, f.manualRedirectResult)(e.results) || 0 < e.results.filter(function(e) {
                    return "APPARTMENT_NO_VALIDATION" === e.category
                }).length ? (r(s.doCheckoutStepDone(e)), c.default.getDocumentCode(n).then(function(e) {
                    var t = e.documentCode,
                        n = {
                            documentCodes: t,
                            bundleNo: null
                        };
                    a.default.checkDocumentExistence({
                        documentCode: t,
                        bundleNo: null
                    }).then(function(e) {
                        return !1 === e ? a.default.createDocument({
                            documentDefinitionCodes: t,
                            bundleNo: 1,
                            factory: "MOBILE"
                        }) : e
                    }).then(function() {
                        return a.default.findDocumentInLocalStorage(n)
                    }).then(function(e) {
                        return e[t] ? e : a.default.getDocuments(n).then(function() {
                            return a.default.findDocumentInLocalStorage(n)
                        })
                    }).then(function(e) {
                        r({
                            type: l.CONSENT_DOCUMENTS_LOADER,
                            data: !1
                        }), r({
                            type: l.CONSENT_PRINT_DOCUMENTS
                        }), O(e[t])
                    }).catch(function(e) {
                        r({
                            type: l.CONSENT_DOCUMENTS_LOADER,
                            data: !1
                        }), r({
                            type: l.CONSENT_PRINT_DOCUMENTS
                        })
                    })
                })) : (r(s.doCheckoutStepError(e)), (0, f.showErrorMessage)(r, e), r({
                    type: l.CONSENT_DOCUMENTS_LOADER,
                    data: !1
                }))
            })
        }
    };
    e.printMobileConsents = function(n) {
        return function(r, e) {
            r((0, f.setConsentStatesToNegative)());
            var t = (0, i.getCheckoutData)(e()),
                o = (0, i.isCustomerModified)(e());
            r({
                type: l.CONSENT_DOCUMENTS_LOADER,
                data: !0
            }), c.default.doSaveCheckoutData(t).then(function(e) {
                c.default.getDocumentCode(n).then(function(e) {
                    var t = e.documentCode,
                        n = {
                            documentCodes: t,
                            bundleNo: 1
                        };
                    a.default.checkDocumentExistence({
                        documentCode: t,
                        bundleNo: 1
                    }).then(function(e) {
                        return !1 === e || o ? a.default.removeDocuments().then(function() {
                            return a.default.createDocument({
                                documentDefinitionCodes: t,
                                bundleNo: 1,
                                factory: "MOBILE"
                            })
                        }).catch(function(e) {
                            return a.default.createDocument({
                                documentDefinitionCodes: t,
                                bundleNo: 1,
                                factory: "MOBILE"
                            })
                        }) : e
                    }).then(function() {
                        return a.default.findDocumentInLocalStorage(n)
                    }).then(function(e) {
                        return e[t] ? e : a.default.getDocuments(n).then(function() {
                            return a.default.findDocumentInLocalStorage(n)
                        })
                    }).then(function(e) {
                        window.open(e[t]), r({
                            type: l.CONSENT_DOCUMENTS_LOADER,
                            data: !1
                        }), r({
                            type: l.CONSENT_PRINT_DOCUMENTS
                        })
                    }).catch(function(e) {
                        r({
                            type: l.CONSENT_DOCUMENTS_LOADER,
                            data: !1
                        }), r({
                            type: l.CONSENT_PRINT_DOCUMENTS
                        })
                    })
                })
            }).catch(function(e) {
                (0, f.showErrorMessage)(r, e), r({
                    type: l.CONSENT_DOCUMENTS_LOADER,
                    data: !1
                })
            })
        }
    };
    e.selectApu = function(e) {
        return function(t) {
            t({
                type: l.START_LOAD_APU
            }), c.default.selectApu(e).then(function(e) {
                t({
                    type: l.SELECT_APU
                }), t({
                    type: l.STOP_LOAD_APU
                })
            })
        }
    };
    e.registerPrintConsentValidator = function(n) {
        return function(e, t) {
            e({
                type: l.CONSENT_TYPE_IN_PRINT_CONSENTS_VALIDATOR,
                consentType: n
            })
        }
    };
    e.registerVerificationConsentType = function(t) {
        return function(e) {
            e({
                type: l.REGISTER_VERIFICATION_CONSENT_TYPE,
                verificationConsentType: t
            })
        }
    };
    e.fetchPosSimCardTypes = function() {
        return function(t, e) {
            c.default.getPosSimCardsTypes().then(function(e) {
                return t(s.fetchPosSimCardTypesDone(e))
            })
        }
    };
    e.pickupGeneralError = function(t) {
        return function(e) {
            e({
                type: l.PICKUP_GENERAL_ERROR,
                error: t
            })
        }
    };
    e.fetchSerialNumbers = function() {
        return function(r, o) {
            c.default.getSerialNumbers().then(function(e) {
                if (e.list && 0 < e.list.length) {
                    var t = e.list.reduce(function(e, t) {
                        return e[t.entryNo] = t.id, e
                    }, {});
                    r(s.fetchSerialNumbersDone(t)), r(s.updateSerialNumbersDone({
                        status: "RESERVED"
                    }));
                    var n = o().cart.miniCartData.orderNr;
                    c.default.paymentAndFiscalization(n).then(function(e) {
                        r({
                            type: l.PAYMENT_AND_FISCALIZATION,
                            data: e
                        }), c.default.getSapFioriLinks(n).then(function(e) {
                            return r({
                                type: l.GET_SAP_FIORI_LINKS_DONE,
                                payload: e
                            })
                        }).catch(function(e) {})
                    }).catch(function(e) {})
                }
                I(r, o)
            }).catch(function(e) {})
        }
    };
    e.changeSerialNumber = function(n, r) {
        return function(e, t) {
            e({
                type: l.CHANGE_PICKUP_SERIAL_NUMBER_VALUE,
                productCode: n,
                value: r
            }), I(e, t)
        }
    };
    var I = function(e, t) {
        e({
            type: l.PICKUP_SERIAL_NUMBERS_VALIDATION,
            isValid: v(t())
        })
    };

    function v(e) {
        var t = !0,
            n = !0,
            r = e.checkout.pickup.serialNumbers;
        return !(!r && !e.cart.miniCartData.entries) && (e.cart.miniCartData.entries.filter(function(e) {
            return (0, C.entryContainsReservableSimCard)(e)
        }).map(function(e) {
            if (!r || !r[e.entryNo] || 19 !== r[e.entryNo].length) return t = !1
        }), e.cart.miniCartData.entries.map(function(e) {
            e.terminals.map(function(e) {
                if (e.requireSerialNumber && !(r && r[e.entryNo] && 0 < r[e.entryNo].length)) return n = !1
            })
        }), t && n)
    }
    e.validateSerialNumbers = I;
    e.changeSimType = function(t, n) {
        return function(e) {
            e({
                type: l.CHANGE_PICKUP_SIM_CARD_TYPE,
                value: t,
                bundleNo: n
            })
        }
    };

    function b() {
        return {
            type: l.PICKUP_SERIAL_NUMBERS_ERROR_DISMISS
        }
    }
    e.pickupSerialNumbersErrorDismiss = b;
    e.updateOrderSerialNumbers = function(e) {
        return function(o, n) {
            o(L()), o(b()), c.default.updateSerialNumbers(e).then(function(e) {
                o(s.updateSerialNumbersDone({
                    status: "RESERVED"
                }));
                var t = n().cart.miniCartData.orderNr;
                c.default.paymentAndFiscalization(t).then(function(e) {
                    o({
                        type: l.PAYMENT_AND_FISCALIZATION,
                        data: e
                    }), c.default.getSapFioriLinks(t).then(function(e) {
                        o(M()), o({
                            type: l.GET_SAP_FIORI_LINKS_DONE,
                            payload: e
                        })
                    }).catch(function(e) {
                        o(s.pickupGeneralError(e))
                    })
                }).catch(function(e) {
                    o(s.pickupGeneralError(e))
                })
            }).catch(function(e) {
                var t = e.responseJSON;
                if (Array.isArray(t)) {
                    var n = t.filter(function(e) {
                        return !!e && e.details
                    });
                    if (n && 0 < n.length) {
                        var r = n.reduce(function(e, t) {
                            if (t.details && 0 < t.details.length) return e.concat(t.details)
                        }, []);
                        o(s.pickupSerialNumberError(r)), o(s.pickupGeneralError({
                            responseJSON: {
                                description: "Jedno lub więcej urządzeń ma błędne numery seryjne"
                            }
                        }))
                    }
                } else o(s.pickupGeneralError(e))
            })
        }
    };
    e.fetchGoodsOrderPaymentStatus = function(r) {
        return function(t, e) {
            var n = (0, i.getPaymentOverrideStatus)(e());
            n ? (t(L()), c.default.getPickupPaymentStatus(n).then(function(e) {
                t(M()), t({
                    type: l.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
                    response: "Paid"
                })
            }).catch(function(e) {
                t(M()), s.pickupPaymentStateusError()
            })) : (t(L()), c.default.checkPaymentStatus(r).then(function(e) {
                t(M()), t({
                    type: l.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE,
                    response: e
                })
            }).catch(function(e) {
                t(M()), s.pickupPaymentStateusError()
            }))
        }
    };
    e.changePaymentOverride = function(t) {
        return function(e) {
            e({
                type: l.CHANGE_PAYMENT_OVERRIDE,
                value: t
            })
        }
    };

    function P(t) {
        return function(e) {
            e({
                type: l.PICKUP_DOCUMENT_DOWNLOAD_START,
                code: t
            })
        }
    }
    e.pickupDocumentDownloadStarted = P;
    e.printPickupDocument = function(r, o) {
        return function(t) {
            t(P(r));
            var n = {
                documentCodes: r,
                bundleNo: o
            };
            return u.default.checkDocumentExistence({
                documentCode: r,
                bundleNo: o
            }).then(function(e) {
                return !1 === e ? u.default.createDocument({
                    documentDefinitionCodes: r,
                    bundleNo: o,
                    factory: "MOBILE"
                }) : e
            }).then(function() {
                return u.default.findDocumentInLocalStorage(n)
            }).then(function(e) {
                return e[r] ? e : u.default.getDocuments(n).then(function() {
                    return u.default.findDocumentInLocalStorage(n)
                })
            }).then(function(e) {
                e[r];
                return window.open(e[r], "_blank", "toolbar=0,location=0,menubar=0"), t({
                    type: l.PICKUP_DOCUMENT_DOWNLOAD_DONE,
                    code: r,
                    link: e[r],
                    bundleNo: o
                }), Promise.resolve()
            }).catch(function(e) {
                return t({
                    type: l.PICKUP_GENERAL_ERROR,
                    error: "Błąd pobierania dokumentu"
                }), Promise.reject()
            })
        }
    };
    e.fetchSimCardTypes = function(r) {
        return function(t, e) {
            var n = e().checkout.reservation.serialNumbers;
            c.default.getSimCardTypes(r).then(function(e) {
                return t(s.getSimCardTypesDone(e, n))
            })
        }
    };
    e.requestBillingAccountFormData = function() {
        return function(t, n) {
            return (0, i.billingAccountDataRequested)(n()) ? Promise.resolve() : (t(s.getBillingAccountFormDataStart()), c.default.getBillingAccount().then(function(e) {
                return e[0]
            }).then(function(e) {
                return (0, p.getBillingAccountForm)(e)
            }).then(function(e) {
                return function(e, t, n) {
                    if (!(0, p.requiredBillingAccountFieldExist)(n)) {
                        var r = (0, i.getBillingAccountsData)(t()).filter(function(e) {
                            return "FIX" === e.type
                        });
                        0 < r.length && (0, f.setSelectedBillingAccount)(r[0])(e);
                        var o = (0, i.getBillingAccountsData)(t()).filter(function(e) {
                            return "MOBILE" === e.type
                        });
                        0 < o.length && (0, f.setSelectedBillingAccount)(o[0])(e)
                    }
                    return n
                }(t, n, e)
            }).then(function(e) {
                return t(s.getBillingAccountFormDataDone(e))
            }).then(function(e) {
                return t(r.actions.getCbsData((0, i.getBillingAccountFormData)(n())))
            }))
        }
    };
    var L = function() {
        return function(e) {
            e({
                type: l.PICKUP_NAVIGATION_NEXT_START
            })
        }
    };
    e.pickupNavigationNextButtonStart = L;
    var M = function() {
        return function(e) {
            e({
                type: l.PICKUP_NAVIGATION_NEXT_DONE
            })
        }
    };
    e.pickupNavigationNextButtonDone = M;
    e.fetchSAPSerialNumbers = function() {
        return function(r, o) {
            r(L()), c.default.getWarehouseSerialNumbers().then(function(e) {
                if (e.list && 0 < e.list.length) {
                    var t = e.list.reduce(function(e, t) {
                        return e[t.entryNo] = t.id, e
                    }, {});
                    r(s.fetchSerialNumbersDone(t)), r(s.updateSerialNumbersDone({
                        status: "RESERVED"
                    }));
                    var n = o().cart.miniCartData.orderNr;
                    c.default.paymentAndFiscalization(n).then(function(e) {
                        r({
                            type: l.PAYMENT_AND_FISCALIZATION,
                            data: e
                        }), c.default.getSapFioriLinks(n).then(function(e) {
                            r(M()), r({
                                type: l.GET_SAP_FIORI_LINKS_DONE,
                                payload: e
                            })
                        }).catch(function(e) {
                            return r(s.pickupGeneralError(e))
                        })
                    }).catch(function(e) {
                        return r(s.pickupGeneralError(e))
                    })
                } else r(s.pickupGeneralError({
                    description: "Błąd pobierania danych z systemu magazynowego!"
                }))
            }).catch(function(e) {
                return r(s.pickupGeneralError(e))
            })
        }
    };
    e.pickupActivation = function() {
        return function(t) {
            t(s.pickupActivationStart()), c.default.pickupActivation().then(function(e) {
                return t(s.pickupActivationDone())
            }).catch(function(e) {
                return t(s.pickupGeneralError(e))
            })
        }
    };
    e.fetchPickupLastOrder = function() {
        return function(t) {
            c.default.getLastOrder().then(function(e) {
                return t({
                    type: l.PICKUP_LAST_ORDER_DATA,
                    data: e
                })
            }).catch(function(e) {})
        }
    };
    e.printReturnDevicesDocument = function() {
        return function(t, e) {
            t({
                type: l.RETURN_DOCUMENT_LOADER,
                data: !0
            });
            var n = "RET_DEV_INFO1",
                r = {
                    documentCodes: n,
                    bundleNo: 1
                };
            a.default.checkDocumentExistence({
                documentCode: n,
                bundleNo: 1
            }).then(function(e) {
                return !1 === e ? a.default.createDocument({
                    documentDefinitionCodes: n,
                    bundleNo: 1,
                    factory: "MOBILE"
                }) : e
            }).then(function() {
                return a.default.findDocumentInLocalStorage(r)
            }).then(function(e) {
                return e[n] ? e : a.default.getDocuments(r).then(function() {
                    return a.default.findDocumentInLocalStorage(r)
                })
            }).then(function(e) {
                window.open(e[n]), t({
                    type: l.RETURN_DOCUMENT_LOADER,
                    data: !1
                })
            }).catch(function(e) {
                t({
                    type: l.RETURN_DOCUMENT_LOADER,
                    data: !1
                })
            })
        }
    };
    var k = function(t) {
        return function(e) {
            e({
                type: l.INSTALLATION_SLOT_FORCE_REFRESH,
                payload: t
            })
        }
    };
    e.forceSlotRefresh = k;
    e.updateConsentGroupExpanded = function(r) {
        return function(e, t) {
            var n = !t().checkout.consents.consentGroupExpanded[r];
            e(F(r, n))
        }
    };
    var F = function(n, r) {
        return function(e, t) {
            e({
                type: l.CONSENT_GROUP_EXPANDED,
                listNo: n,
                value: r
            })
        }
    };
    e.updateValueConsentGroupExpanded = F;
    e.registerAgreementConfirmationComponent = function() {
        return function(e) {
            e({
                type: l.REGISTER_AGREEMENT_VALIDATION_COMPONENT,
                data: !0
            })
        }
    };

    function U(o) {
        return function(t) {
            var n = {};
            Object.keys(D.emptyBusinessData).forEach(function(e) {
                o[e] && (n[e] = o[e])
            });
            var r = {};
            Object.keys(D.emptyCustomerContact).forEach(function(e) {
                o[e] && (r[e] = o[e])
            }), o.mainAddress && Object.keys(D.emptyAddress).forEach(function(e) {
                o.mainAddress[e] ? t((0, f.changeCustomerMainAddressFormField)({
                    name: e,
                    value: o.mainAddress[e]
                })) : "boolean" == typeof o.mainAddress[e] && t((0, f.changeCustomerMainAddressFormField)({
                    name: e,
                    value: o.mainAddress[e]
                }, !1))
            }), (0, p.runValidator)(r, S.customerContactFormValidators, f.changeCustomerContactFormField, null, t), (0, p.runValidator)(n, S.customerDataFormValidators, f.changeCustomerDataFormField, null, t)
        }
    }
    e.validateCustomerDataFields = U;
    e.requestBpgData = function(e) {
        return function(t) {
            t(s.getBpgDataStart()), (0, f.bodyLoaderShow)(), c.default.getBpgData(e).then(function(e) {
                e.mainAddress && (e.mainAddress.wwtaddress = !1), e.isPublic ? t((0, f.showSpecifiedMessage)("Aby zrealizować to zamówienie skontaktuj się z infolinią pod numerem 801 234 567 lub udaj się do najbliższego salonu.", "error", "isPublicErrorMsg")) : t(s.getBpgDataDone(e)), t(r.actions.getCbsDataThenDispatch(e.mainAddress, !0, U, e)), (0, f.bodyLoaderHide)()
            }).catch(function() {
                t(s.getBpgDataDone()), (0, f.bodyLoaderHide)()
            })
        }
    };
    e.requestDocumentsToMerge = function() {
        return function(r) {
            return new Promise(function(t, n) {
                return a.default.getDocumentsToMerge().then(function(e) {
                    r({
                        type: l.SET_DOCUMENTS_TO_MERGE_PER_BUNDLE,
                        documentsToMergePerBundle: e
                    }), t(e)
                }).catch(function(e) {
                    n(e)
                })
            })
        }
    };
    e.setInitialNationality = function(t) {
        return function(e) {
            return e({
                type: l.SET_INITIAL_NATIONALITY,
                payload: t
            })
        }
    };
    e.setForeignerAvailable = function(t) {
        return function(e) {
            return e({
                type: l.SET_FOREIGNER,
                payload: t
            })
        }
    }
});
//# sourceMappingURL=data.js.map