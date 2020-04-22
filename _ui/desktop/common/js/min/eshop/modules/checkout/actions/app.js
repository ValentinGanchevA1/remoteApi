define(["exports", "../actionTypes", "eshop/modules/cart/actionTypes", "../../auth/actionTypes", "eshop/modules/fix/actionTypes", "../remoteApi", "../validators", "../selectors", "eshop/utils/OnlineUtils", "../actions/data", "./remote", "eshop/modules/cbs/main", "../../cbs/selectors", "../../simfree/constants/OfferTypeEnum", "eshop/modules/cart/actions/cart", "../../documents/actions/documents", "eshop/modules/fix/selectors/root", "lodash", "../constants/DeliveryMethod", "./delivery", "eshop/utils/DataLayerUtils", "../constants/EmailWarningDescriptionEnum"], function(e, l, r, o, t, a, u, c, n, i, s, d, E, f, _, C, p, R, N, A, m, S) {
    "use strict";

    function I() {
        return function(e) {
            e({
                type: l.GOTO_CHECKOUT_NEXT
            }), window.location.href = [window.location.protocol, "//", window.location.host, window.location.pathname, "/dalej"].join("")
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.gotoNextCheckoutStep = I, e.gotoPreviousCheckoutStep = function() {
        return function(e) {
            e({
                type: l.GOTO_CHECKOUT_PREVIOUS
            }), window.location.href = [window.location.protocol, "//", window.location.host, window.location.pathname, "/wstecz"].join("")
        }
    }, e.gotoCartSummary = function() {
        return function(e) {
            e({
                type: l.GOTO_CHECKOUT_CART
            }), window.location.href = [window.location.protocol, "//", window.location.host, "/koszyk/multi"].join("")
        }
    }, e.gotoMagnumDeviceList = function() {
        return function(e) {
            e({
                type: l.GOTO_MAGNUM_DEVICE_LIST
            });
            var t = "/sklep?offerType=".concat(f.default.CONVERGENT);
            window.location.replace(t)
        }
    }, e.updateMagnumTerminal = function(n) {
        return function(e) {
            e({
                type: l.GOTO_MAGNUM_DEVICE_LIST
            }), e({
                type: r.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER,
                value: n
            });
            var t = "/sklep?offerType=".concat(f.default.CONVERGENT);
            window.location.replace(t)
        }
    }, e.showErrorMessage = y, e.bodyLoaderEvent = v, e.bodyLoaderShow = function() {
        v("modules.loader.show")
    }, e.bodyLoaderHide = function() {
        v("modules.loader.hide")
    }, e.doCheckoutStepPickup = function() {
        return function(t, e) {
            var n = (0, c.getCheckoutData)(e());
            a.default.pickupCompletion().then(function(e) {
                t(s.doCheckoutStepStart(n)), t(s.doCheckoutStepDone({
                    code: 0
                })), t(I())
            }).catch(function(e) {
                t({
                    type: l.PICKUP_GENERAL_ERROR,
                    error: e
                })
            })
        }
    }, e.doCheckoutStep = g, e.manualRedirectResult = D, e.doCheckoutStepNoRedirect = function() {
        return function(t, e) {
            var n = (0, c.getCheckoutData)(e());
            return v("modules.loader.show"), t(s.doCheckoutStepStart(n)), a.default.doCheckoutStep(n).catch(function(e) {
                v("modules.loader.hide"), t(s.doCheckoutStepError(e))
            }).then(function(e) {
                v("modules.loader.hide"), "0" === e.code || e.results && D(e.results) ? (t(s.doCheckoutStepDone(e)), window.scrollTo(0, 0)) : (v("modules.loader.hide"), t(s.doCheckoutStepError(e)))
            })
        }
    }, e.closeCimConsistentErrorModal = function() {
        return function(e) {
            e({
                type: l.CHECKOUT_ERROR_AUTH_DISMISS
            })
        }
    }, e.gotoLoginPage = function() {
        return function(e) {
            e({
                type: o.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
            })
        }
    }, e.reloadSummaryOnCart = function(e) {
        return function(t) {
            a.default.reloadSummaryOnCart(e.isBusinessClient).then(function(e) {
                return t({
                    type: r.FETCH_CART,
                    payload: e
                })
            })
        }
    }, e.setConsentStatesToNegative = function() {
        return function(e, t) {
            var n = (0, c.getCheckoutConsents)(t()),
                r = (0, c.getConsentsCheckoutData)(t()),
                o = [];
            n.filter(function(t) {
                if (!t.states.find(function(e) {
                        return e.required
                    }) && !r.find(function(e) {
                        return e.consentCode === t.consentCode
                    })) {
                    var n = t.states.find(function(e) {
                        return !e.positive
                    }).code;
                    t.bundleAssignments && 0 !== t.bundleAssignments.length ? o = matchingConsents.concat(t.bundleAssignments.map(function(e) {
                        return {
                            consentCode: t.consentCode,
                            bundleNo: e.bundleNo,
                            stateCode: n,
                            relatedWithBonus: t.isRelatedWithBonus
                        }
                    })) : t.msisdns && 0 < t.msisdns.length ? t.msisdns.forEach(function(e) {
                        o.push({
                            consentCode: t.consentCode,
                            bundleNo: e.bundleNo,
                            stateCode: n,
                            relatedWithBonus: t.isRelatedWithBonus
                        })
                    }) : o.push({
                        consentCode: t.consentCode,
                        bundleNo: null,
                        stateCode: n,
                        relatedWithBonus: t.isRelatedWithBonus
                    })
                }
                0 < o.length && e(F(o))
            })
        }
    }, e.changeConsentState = F, e.changeSerialNumberField = function(c, s) {
        return function(e, t) {
            var n, r, o, i, a = t(),
                u = a.checkout.reservation.serialNumbers;
            e((n = u = u || {}, r = s, o = c, i = Object.keys(n).filter(function(e) {
                return "" != n[e]
            }).find(function(e) {
                return n[e] === r
            }), {
                type: l.VERIFY_DUPLICATE_SERIAL_NUMBERS,
                payload: i ? {
                    details: [{
                        message: "Ten numer seryjny jest już na zamówieniu",
                        productCode: o
                    }]
                } : {
                    details: []
                }
            })), u[c] = s, e({
                type: l.CHANGE_SERIAL_NUMBER_FIELD,
                payload: u
            })
        }
    }, e.changeWarehouse = function(r, o) {
        return function(e, t) {
            var n = t().checkout.reservation.warehouses;
            (n = n || {})[o] = r, e({
                type: l.CHANGE_WAREHOUSE_TYPE,
                warehouses: n
            })
        }
    }, e.setInitialSerialNumberState = function(t) {
        return function(e) {
            var n = {};
            t.serialNumberPair && t.serialNumberPair.split(";").map(function(e) {
                var t = e.split(",");
                t && 1 < t.length && (n[t[0]] = t[1])
            });
            e({
                type: l.SET_SERIAL_NUMBER_INITIAL_STATE,
                sapReservationNumber: t.sapReservationNumber,
                serialNumberPair: n,
                paymentStatus: t.paymentStatus,
                agencyPOSReservationDone: t.agencyPOSReservationDone,
                saleUnlocked: t.saleUnlocked
            })
        }
    }, e.verifySerialNumbers = function(e) {
        return function(t) {
            t({
                type: l.VERIFY_SERIAL_NUMBERS_STARTED
            }), a.default.verifySerialNumbers(e).then(function(e) {
                e.code && "200" !== e.code ? t({
                    type: l.VERIFY_SERIAL_NUMBERS_ERROR,
                    payload: e
                }) : (t({
                    type: l.VERIFY_SERIAL_NUMBERS,
                    payload: e
                }), t(P()))
            }, function(e) {
                return t({
                    type: l.VERIFY_SERIAL_NUMBERS_ERROR,
                    payload: e
                })
            })
        }
    }, e.getSapFioriLinks = P, e.getFioriCorrectiveInvoiceLink = B, e.unlockSale = function() {
        return function(t, e) {
            t({
                type: l.UNLOCK_SALE_STARTED
            });
            var n = e().checkout.reservation.sapReservationNumber;
            a.default.unlockSale(n).then(function() {
                t({
                    type: l.UNLOCK_SALE_DONE
                }), t(V())
            }, function(e) {
                return t({
                    type: l.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: e
                })
            })
        }
    }, e.checkUnlockSaleInSapStatus = function() {
        return function(t, e) {
            var n = e().checkout.reservation.sapReservationNumber;
            a.default.unlockSale(n).then(function(e) {
                t({
                    type: l.UNLOCK_SALE_STATUS_CHECK_DONE,
                    data: e
                })
            }, function(e) {
                return t({
                    type: l.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: e
                })
            })
        }
    }, e.cancelOrder = function() {
        return function(t, e) {
            var n = e().checkout.reservation.sapReservationNumber;
            a.default.cancelOrder(n).then(function() {
                t({
                    type: l.CANCEL_ORDER_DONE
                })
            }, function(e) {
                return t({
                    type: l.CANCEL_ORDER_ERROR,
                    payload: e
                })
            })
        }
    }, e.cancelOrderWithRedirect = function() {
        return function(t, e) {
            var n = e().checkout.reservation.sapReservationNumber;
            a.default.cancelOrder(n).then(function() {
                (0, _.removeFromCartAndRedirect)(null)(t, e)
            }, function(e) {
                return t({
                    type: l.CANCEL_ORDER_ERROR,
                    payload: e
                })
            })
        }
    }, e.paymentAndFiscalization = V, e.openOrderCancelPopup = function(t) {
        return function(e) {
            e({
                type: l.OPEN_ORDER_CANCEL_POPUP,
                data: t
            })
        }
    }, e.openOrderCancelPopupFromNavComponent = function(n) {
        return function(e, t) {
            (t().checkout.reservation.sapReservationNumber && n ? G()(e, t) : Promise.resolve()).then(function() {
                return e({
                    type: l.OPEN_ORDER_CANCEL_POPUP_FROM_NAV_COMPONENT,
                    data: n
                })
            })
        }
    }, e.closeOrderCancelErrorPopup = function() {
        return function(e) {
            e({
                type: l.CLOSE_ORDER_CANCEL_ERROR_POPUP
            })
        }
    }, e.checkPaymentStatus = G, e.paymentOverride = function() {
        return function(e) {
            e({
                type: l.PAYMENT_OVERRIDE_DONE
            })
        }
    }, e.setInitialConfiguration = function(t) {
        return function(e) {
            e({
                type: l.INITIAL_CONFIGURATION_SET_DONE,
                data: t
            })
        }
    }, e.printOrderNumber = function(o) {
        return function(t, e) {
            var n = e(),
                r = o || n.checkout.reservation.sapReservationNumber;
            a.default.printOrderNumber(r).then(function(e) {
                w(e), t({
                    type: l.PRINT_ORDER_NUMBER_DONE
                })
            }, function(e) {
                return t({
                    type: l.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: e
                })
            })
        }
    }, e.printInvoiceNumber = function(o) {
        return function(t, e) {
            var n = e(),
                r = o || n.checkout.reservation.sapReservationNumber;
            a.default.printInvoiceNumber(r).then(function(e) {
                w(e), t({
                    type: l.PRINT_INVOICE_NUMBER_DONE
                })
            }, function(e) {
                return t({
                    type: l.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: e
                })
            })
        }
    }, e.openPdfInNewWindow = w, e.areSerialNumbersFilled = function(r, e) {
        var o = !0,
            i = !1;
        if (!e.checkout.reservation.miniCartData.entries) return !1;
        var t = (0, c.getAllReservableCartEntries)(e);
        return t.filter(function(e) {
            return e.isSim && e.msisdn && e.simCard.reservable
        }).map(function(e) {
            i = !0;
            var t = e.productCode + "_" + e.bundleOmniCode;
            r && r[t] && 19 === r[t].length || (o = !1)
        }), t.map(function(n) {
            n.terminals.map(function(e) {
                if (i = !0, (e.isSerialNumberRequired || e.requireSerialNumber) && !e.migrated) {
                    var t = e.productCode + "_" + n.bundleOmniCode + "_" + e.entryNo;
                    if (!(r && r[t] && 0 < r[t].length)) return o = !1
                }
            })
        }), t.map(function(n) {
            n.broadbandFixProduct && n.broadbandFixProduct.devices && n.broadbandFixProduct.devices.filter(function(e) {
                return !e.migrated
            }).map(function(e) {
                if (e.isSerialNumberRequired) {
                    i = !0;
                    var t = e.code + "_" + n.bundleOmniCode;
                    if (!(r[t] && 0 < r[t].length)) return o = !1
                }
            }), n.tvFixProduct && n.tvFixProduct.devices && n.tvFixProduct.devices.filter(function(e) {
                return !e.migrated
            }).map(function(e) {
                if (e.isSerialNumberRequired) {
                    i = !0;
                    var t = e.code + "_" + n.bundleOmniCode;
                    if (e.isSerialNumberRequired && !(r[t] && 0 < r[t].length)) return o = !1
                }
            })
        }), t.map(function(t) {
            t.euroSets && t.euroSets.map(function(e) {
                e.setElements.map(function(e) {
                    if (i = !0, !(r && r[e.sku + t.bundleNo] && 0 < r[e.sku + t.bundleNo].length)) return o = !1
                })
            })
        }), o || !i
    }, e.changeOrderComment = function(t) {
        return function(e) {
            e({
                type: l.CHANGE_COMMENT_DONE,
                data: t
            })
        }
    }, e.changeShowComment = function() {
        return function(e) {
            e({
                type: l.CHANGE_SHOW_COMMENT_DONE
            })
        }
    }, e.switchEditIdNumberMode = function() {
        return function(e) {
            e({
                type: l.SWITCH_EDIT_ID_NUMBER_MODE
            })
        }
    }, e.switchForeignerMode = function() {
        return function(e) {
            e({
                type: l.SWITCH_FOREIGNER_MODE
            })
        }
    }, e.switchSameMnpData = function() {
        return function(e) {
            e({
                type: l.SWITCH_SAME_MNP_DATA
            })
        }
    }, e.showEarlierInstallationConsentModal = k, e.finishSavingAllDocuments = e.startSavingAllDocuments = e.changeInvoiceEmail = e.changeInvoiceEmailMapping = e.registerComponentPropsValue = e.setIdVerificationResult = e.setIdVerificationsSelectedBankId = e.setIdVerificationsBanks = e.isIdVerificationInProgress = e.verifyIdentity = e.setAgreementIntroductionDocumentLoading = e.setAgreementIntroductionStatus = e.setAgreementIntroductionStatuses = e.processChanged = e.clearSapErrorMessages = e.updateDAPPhoneNumber = e.updateDeliveryPhoneNumber = e.updateSelectedPOSAvailability = e.setManualVerificationModalVisibility = e.setPermanentlyAgreedConsentsVisibleForGroup = e.fetchPickupDocuments = e.pickuErrorDismiss = e.pickupCancel = e.confirmReplanishment = e.setCourierDeliveryMethodModalState = e.courierDeliveryMethodModalDidMount = e.hideEmailWarningModal = e.showEmailWarningModal = e.closeCourierDeliveryMethodModal = e.showCourierDeliveryMethodModal = e.earlierInstallationConsentNotAcceptedModalDidMount = e.acceptEarlierInstallationConsentNotAcceptedModal = e.closeEarlierInstallationConsentNotAcceptedModal = e.showEarlierInstallationConsentNotAcceptedModal = e.getActiveContracts = e.setBillingAccountContractsVisibility = e.setSelectedBillingAccount = e.setCreateBillingAccount = e.setBillingAccounts = e.changeBillingAccountFormField = e.setBillingAccountFormVisibility = e.changeSimCardType = e.setSimCardType = e.saveInSessionDocumentPosSigned = e.changeDebtRepaymentFormField = e.changeTelesalesFormField = e.changeDocumentsConfirmation = e.registerCurrentStepId = e.changeBusinessMnpAddressFormField = e.changeCustomerMnpDataFormField = e.changeEmailRelatedConsents = e.changeCourierPhoneContact = e.changeCustomerContactFormFieldForceValid = e.changeCustomerContactDeliveryFormField = e.changeCustomerContactFormField = e.changeAddressMapping = e.changeDeliveryCourierMessageField = e.changeDeliveryAddressFormField = e.changeCorrespondenceAddressFormField = e.setModifyConsentsInCartQueue = e.pushToModifyConsentsInCartQueue = e.changeCustomerMainAddressFormField = e.setGrantingDate = e.setRepresentationMode = e.removeGrantor = e.removeRepresentative = e.changeGrantorFormField = e.clearRepresentativeFormFieldErrors = e.changeRepresentativeFormFieldNoValidations = e.changeRepresentativeFormField = e.changeRepresentativeCountry = e.changeCustomerDataFormFieldNoValidations = e.changeCustomerCountry = e.changeCustomerRegonFormField = e.changeCustomerDataFormField = e.setSelectedServiceInstanceIdAction = e.setSelectedDesignationNumberAction = e.dismissManualErrors = e.dismissBackendValidationErrors = e.dismissFbbServices = e.dismissCvErrors = e.dismissAuthErrors = e.dismissCallbackErrors = e.showSpecifiedMessage = e.setFBBServiceData = e.requestFBBServiceDataFilteredByWWT = e.requestFBBServiceData = e.hideWwtComponent = e.showWwtComponent = e.refreshFixCartWithoutFbbCheck = e.gotoFixDispatcher = void 0, l = babelHelpers.interopRequireWildcard(l), r = babelHelpers.interopRequireWildcard(r), o = babelHelpers.interopRequireWildcard(o), t = babelHelpers.interopRequireWildcard(t), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n), s = babelHelpers.interopRequireWildcard(s), f = babelHelpers.interopRequireDefault(f), R = babelHelpers.interopRequireDefault(R), N = babelHelpers.interopRequireDefault(N), m = babelHelpers.interopRequireDefault(m), S = babelHelpers.interopRequireDefault(S);

    function h(n, r) {
        return function(t, e) {
            a.default.postFbbServiceData(n, r).then(function(e) {
                t({
                    type: l.GOTO_FIX_DISPATCHER
                }), window.location.href = [window.location.protocol, "//", window.location.host, "/internet-domowy/oferty-migracyjne"].join("")
            }).catch(function(e) {})
        }
    }
    e.gotoFixDispatcher = h;
    e.refreshFixCartWithoutFbbCheck = function() {
        return function(t, e) {
            a.default.refreshFixCartWithoutFbbCheck().then(function(e) {
                t(M())
            }).catch(function(e) {})
        }
    };
    e.showWwtComponent = function() {
        return function(e) {
            e({
                type: t.SHOW_WWT_COMPONENT
            })
        }
    };
    e.hideWwtComponent = function() {
        return function(e) {
            e({
                type: t.HIDE_WWT_COMPONENT
            })
        }
    };
    e.requestFBBServiceData = function() {
        return function(t) {
            return a.default.getFBBServiceData().then(function(e) {
                t(O(e))
            })
        }
    };
    e.requestFBBServiceDataFilteredByWWT = function() {
        return function(n) {
            a.default.getFBBServiceDataFilteredByWWT().then(function(e) {
                var t;
                (t = e) && t.fixAddressWithServices && 1 == t.fixAddressWithServices.length && t.fixAddressWithServices[0].serviceBundles && 1 == t.fixAddressWithServices[0].serviceBundles.length ? n(h(e.fixAddressWithServices[0].serviceBundles[0].mainService.designationNumber, e.fixAddressWithServices[0].serviceBundles[0].mainService.cfServiceInstanceId)) : n(O(e))
            })
        }
    };
    var O = function(n) {
        return function(e, t) {
            if (e({
                    type: l.SET_FBB_SERVICE_DATA,
                    payload: n
                }), (0, p.isPreLandingPage)(t()) && n && n.fixAddressWithServices && 0 < !!n.fixAddressWithServices.length && n.fixAddressWithServices[0] && n.fixAddressWithServices[0].serviceBundles && 0 < n.fixAddressWithServices[0].serviceBundles.length) {
                window.location.replace("/internet-domowy")
            }
        }
    };

    function y(e, t) {
        if (!t || !t.results || 0 === t.results.filter(function(e) {
                return "0" !== e.code && ("CV" === e.category || "CV_MAGNUM" === e.category || "CV_MAGNUM_WITH_DEPOSIT" === e.category || "MANUAL" === e.category || "AUTH" === e.category || "CALLBACK" === e.category || "RESERVATION" === e.category || "SEARCH" === e.category || "NO_EMAIL_MNP" === e.category || "CIM_CONSISTENT" === e.category || "FBB_SERVICES" === e.category)
            }).length)
            if (t && t.results && 0 !== t.results.filter(function(e) {
                    return "0" !== e.code && "PUBLIC" === e.category
                }).length) e(T("Aby zrealizować to zamówienie skontaktuj się z infolinią pod numerem 801 234 567 lub udaj się do najbliższego salonu.", "error", "isPublicErrorMsg"));
            else {
                var n = (r = t, [{
                    condition: function(e) {
                        return e && e.results && 0 !== e.results.filter(function(e) {
                            return ["10", "13"].includes(e.code) && "ORDER" === e.category
                        }).length
                    },
                    map: function(e) {
                        var t = e && e.results && e.results.filter(function(e) {
                            return ["10", "13"].includes(e.code) && "ORDER" === e.category
                        })[0];
                        return t && t.description && {
                            text: t.description,
                            type: "error"
                        }
                    }
                }, {
                    condition: function(e) {
                        return e && e.results && 0 !== e.results.filter(function(e) {
                            return "ASSIGNMENT" === e.category
                        }).length
                    },
                    map: function(e) {
                        var t;
                        switch ((e && e.results && e.results.filter(function(e) {
                            return "ASSIGNMENT" === e.category
                        })[0]).code) {
                            case "peselsNoMatch":
                                t = "Dane osoby fizycznej nie są zgodne z danymi Jednoosobowej działalności gospodarczej. Wybierz właściwy scenariusz.";
                                break;
                            default:
                                t = "Sprawdź czy wprowadzone dane są poprawne."
                        }
                        return {
                            text: t,
                            type: "error"
                        }
                    }
                }].filter(function(e) {
                    return e.condition(r)
                }).map(function(e) {
                    return e.map(r)
                }).filter(function(e) {
                    return e
                })[0] || {
                    text: "Sprawdź czy wprowadzone dane są poprawne.",
                    type: "error"
                });
                e({
                    type: o.SHOW_MESSAGE,
                    msg: n
                })
            }
        var r
    }
    e.setFBBServiceData = O;
    var T = function(t, n, r) {
        return function(e) {
            e({
                type: o.SHOW_MESSAGE,
                msg: {
                    text: t,
                    type: n,
                    descriptionName: r
                }
            })
        }
    };

    function v(e) {
        OPL.UI.fire(e, null, "body-loader")
    }

    function g(o) {
        return function(r, e) {
            var t = (0, c.getCheckoutData)(e());
            if (k(t, e)) {
                if (!(0, c.isEarlierInstallationConsentNotAcceptedModalIsAccepted)(e())) return void r(H());
                t.delivery.forEach(function(e) {
                    return e.deliveryMethod = "courier"
                })
            }
            if (!t.delivery.some(function(e) {
                    return e.deliveryMethod === N.default.BZU
                }) || (0, c.getEmailConfirmationModalAccepted)(e())) return v("modules.loader.show"), r(s.doCheckoutStepStart(t)), (0, c.getDeliveryAndPaymentStep)(e()) && m.default.pushFinalizeOrder((0, c.getAgreementType)(e())), a.default.doCheckoutStep(t).catch(function(e) {
                if (v("modules.loader.hide"), "REDIRECT" === e.code) {
                    var t = "redirect:",
                        n = e.callbackUrl.toLowerCase();
                    0 <= n.indexOf(t) && (n = n.split(t).pop()), window.location.pathname = n
                } else "9" !== e.code && r(s.doCheckoutStepError(e));
                y(r, e)
            }).then(function(e) {
                if ("REDIRECT" === e.code)
                    if (o) r(o());
                    else {
                        var t = "redirect:",
                            n = e.callbackUrl.toLowerCase();
                        0 <= n.indexOf(t) && (n = n.split(t).pop()), window.location.pathname = n
                    }
                else "0" === e.code ? o ? r(o()) : (r(s.doCheckoutStepDone(e)), r(I())) : "6" === e.code ? (v("modules.loader.hide"), y(r, e)) : e.results.length < 2 && "9" === e.code || "12" === e.code || "15" === e.code ? (v("modules.loader.hide"), r(s.doCheckoutStepError(e))) : e.results.length < 2 && "30" === e.code ? (v("modules.loader.hide"), window.scroll({
                    top: document.getElementById("installation-carousel-loader").offsetTop - 100,
                    left: 0,
                    behavior: "smooth"
                }), r({
                    type: l.SHOW_INSTALLATION_SLOT_ERROR,
                    payload: !0
                }), r((0, i.forceSlotRefresh)(!0)), r(s.doCheckoutStepError(e))) : (v("modules.loader.hide"), e.results.length < 2 && 0 < e.results.filter(function(e) {
                    return "APPARTMENT_NO_VALIDATION" === e.category || "REPLANISHMENT_REQUIRED" === e.category || "EXISTING_ORDER" === e.category
                }).length || 0 < e.results.filter(function(e) {
                    return "CV_WITH_DEPOSIT" === e.category
                }).length || 0 < e.results.filter(function(e) {
                    return "MANUAL" === e.category
                }).length || e.results.length < 2 && 0 < e.results.filter(function(e) {
                    return "2" === e.code
                }).length ? r(s.doCheckoutStepError(e)) : (r(s.doCheckoutStepError(e)), y(r, e)))
            });
            r((0, A.setEmailConfirmationModalState)(!0))
        }
    }

    function D(e) {
        return 0 === e.filter(function(e) {
            return "0" !== e.code
        }).filter(function(e) {
            return "MANUAL" !== e.category
        }).length
    }
    e.showSpecifiedMessage = T;
    e.dismissCallbackErrors = function() {
        return {
            type: l.CHECKOUT_ERROR_CALLBACK_DISMISS
        }
    };
    e.dismissAuthErrors = function() {
        return {
            type: l.CHECKOUT_ERROR_AUTH_DISMISS
        }
    };
    e.dismissCvErrors = function() {
        return {
            type: l.CHECKOUT_ERROR_CV_DISMISS
        }
    };
    var M = function() {
        return {
            type: l.CHECKOUT_FBB_SERVICES_DISMISS
        }
    };
    e.dismissFbbServices = M;
    e.dismissBackendValidationErrors = function() {
        return {
            type: l.CHECKOUT_ERROR_BACKEND_DISMISS
        }
    };
    e.dismissManualErrors = function() {
        return {
            type: l.CHECKOUT_ERROR_MANUAL_DISMISS
        }
    };
    e.setSelectedDesignationNumberAction = function(n) {
        return function(e, t) {
            e({
                type: l.SET_SELECTED_DESIGNATION_NUMBER,
                designationNumber: n
            })
        }
    };
    e.setSelectedServiceInstanceIdAction = function(n) {
        return function(e, t) {
            e({
                type: l.SET_SELECTED_SERVICE_INSTANCE_ID,
                serviceInstanceId: n
            })
        }
    };
    e.changeCustomerDataFormField = function(e, t) {
        var n = e.name,
            r = e.value,
            o = !(1 < arguments.length && void 0 !== t) || t;
        return function(e, t) {
            "legalForm" === n && (0, c.getLegalForm)(t()) !== r && e((0, C.fetchDocuments)(r)), e({
                type: l.CHANGE_CUSTOMER_DATA_FORM_FIELD,
                name: n,
                value: r,
                errors: o ? u.customerDataFormValidators[n](r) : void 0
            })
        }
    };
    e.changeCustomerRegonFormField = function(e, t, n) {
        var r = e.name,
            o = e.value,
            i = !(1 < arguments.length && void 0 !== t) || t,
            a = 2 < arguments.length && void 0 !== n && n;
        return function(e) {
            var t = a ? r + "Sog" : r;
            e({
                type: l.CHANGE_CUSTOMER_DATA_FORM_FIELD,
                name: r,
                value: o,
                errors: i ? u.customerDataFormValidators[t](o) : void 0
            })
        }
    };
    e.changeCustomerCountry = function(e) {
        var i = e.value;
        return function(e, t) {
            var n = i,
                r = (0, E.getCountries)(t()),
                o = r.find(function(e) {
                    return e.name === n
                });
            o && (n = o.isocode), e({
                type: l.CHANGE_CUSTOMER_DATA_FORM_FIELD,
                name: "country",
                value: n,
                errors: (0, u.countryValidator)(n, r)
            })
        }
    };
    e.changeCustomerDataFormFieldNoValidations = function(e) {
        var t = e.name,
            n = e.value;
        return {
            type: l.CHANGE_CUSTOMER_DATA_FORM_FIELD,
            name: t,
            value: n
        }
    };
    e.changeRepresentativeCountry = function(e) {
        e.id, e.name;
        var i = e.value,
            a = e.index;
        return function(e, t) {
            var n = i,
                r = (0, E.getCountries)(t()),
                o = r.find(function(e) {
                    return e.name === n
                });
            o && (n = o.isocode), e({
                type: l.CHANGE_REPRESENTATIVE_FORM_FIELD,
                name: "country",
                index: a,
                value: n,
                errors: (0, u.countryValidator)(n, r)
            })
        }
    };
    e.changeRepresentativeFormField = function(e) {
        var n = e.name,
            r = e.value,
            o = e.index,
            t = e.validate,
            i = void 0 === t || t;
        return function(e, t) {
            e({
                type: l.CHANGE_REPRESENTATIVE_FORM_FIELD,
                name: n,
                value: r,
                index: o,
                errors: i && n ? u.representativeDataFormValidators[n](r) : []
            })
        }
    };
    e.changeRepresentativeFormFieldNoValidations = function(e) {
        var n = e.name,
            r = e.value,
            o = e.index;
        return function(e, t) {
            e({
                type: l.CHANGE_REPRESENTATIVE_FORM_FIELD,
                name: n,
                value: r,
                index: o
            })
        }
    };
    e.clearRepresentativeFormFieldErrors = function() {
        return function(e) {
            e({
                type: l.CLEAR_REPRESENTATIVE_FORM_FIELD_ERRORS
            })
        }
    };
    e.changeGrantorFormField = function(e) {
        var n = e.name,
            r = e.value,
            o = e.index,
            i = e.validate;
        return function(e, t) {
            e({
                type: l.CHANGE_GRANTOR_FORM_FIELD,
                name: n,
                value: r,
                index: o,
                errors: i && n ? u.representativeDataFormValidators[n](r) : []
            })
        }
    };
    e.removeRepresentative = function(n) {
        return function(e, t) {
            e({
                type: l.REMOVE_REPRESENTATIVE,
                index: n
            })
        }
    };
    e.removeGrantor = function(n) {
        return function(e, t) {
            e({
                type: l.REMOVE_GRANTOR,
                index: n
            })
        }
    };
    e.setRepresentationMode = function(n, r) {
        return function(e, t) {
            e({
                type: l.SET_REPRESENTATION_MODE,
                mode: n,
                modeConfig: r
            })
        }
    };
    e.setGrantingDate = function(r) {
        return function(e, t) {
            var n = -1 < ["JR", "WR"].indexOf((0, c.getRepresentationMode)(t()));
            e({
                type: l.SET_GRANTING_DATE,
                date: r,
                errors: n ? [] : u.representativeDataFormValidators.grantingDate(r)
            })
        }
    };

    function F(o) {
        function i(e, r, t) {
            var n, o, i, a = (n = e).consents.filter(function(e) {
                    return e.type === n.verificationConsentType
                }),
                u = (o = e, i = a.map(function(e) {
                    return e.consentCode
                }), o.conf.filter(function(e) {
                    return 0 < R.default.intersection(e.consentsCode, i).length
                }));
            0 < a.filter(function(e) {
                return n = e, 0 < r.filter(function(e) {
                    return e.consentCode === n.consentCode
                }).length && !0 === e.required && (t = e, 0 < u.filter(function(e) {
                    return R.default.includes(e.consentsCode, t.consentCode)
                }).filter(function(e) {
                    return 1 === e.listNumber || 11 === e.listNumber
                }).length);
                var t, n
            }).length && t({
                type: l.REQUIRED_CONSENT_CHANGED
            })
        }
        return function(e, t) {
            e({
                type: l.CHANGE_CONSENT_STATE,
                data: o
            });
            var n = (0, c.getConsentsData)(t());
            if (n.consents && (i(n, o, e), n.consents.find(function(e) {
                    return e.consentCode === o[0].consentCode
                }).shouldCartBeUpdateAfterStateChange)) {
                var r = (0, c.getCheckoutData)(t());
                a.default.updateConsents(r)
            }
        }
    }
    e.changeCustomerMainAddressFormField = function(e, t) {
        var n = e.name,
            r = e.value,
            o = e.cbsId,
            i = !(1 < arguments.length && void 0 !== t) || t;
        return function(e, t) {
            e({
                type: l.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD,
                name: n,
                value: r,
                cbsId: o,
                errors: i ? u.addressFormValidators[n](r) : void 0
            }), e(d.actions.getCbsData((0, c.getAddressMain)(t())))
        }
    };
    e.pushToModifyConsentsInCartQueue = function(e) {
        return {
            type: l.PUSH_TO_MODIFY_CONSENTS_IN_CART_QUEUE,
            toAdd: e
        }
    };
    e.setModifyConsentsInCartQueue = function(e) {
        return {
            type: l.SET_MODIFY_CONSENTS_IN_CART_QUEUE,
            data: e
        }
    };
    e.changeCorrespondenceAddressFormField = function(e, t) {
        var n = e.name,
            r = e.value,
            o = e.cbsId,
            i = !(1 < arguments.length && void 0 !== t) || t;
        return function(e, t) {
            e({
                type: l.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD,
                name: n,
                value: r,
                cbsId: o,
                errors: i ? u.addressFormValidators[n](r) : void 0
            }), e(d.actions.getCbsData((0, c.getAddressCorrespondence)(t())))
        }
    };
    e.changeDeliveryAddressFormField = function(e, t) {
        var n = e.name,
            r = e.value,
            o = e.cbsId,
            i = !(1 < arguments.length && void 0 !== t) || t;
        return function(e, t) {
            e({
                type: l.CHANGE_DELIVERY_ADDRESS_FORM_FIELD,
                name: n,
                value: r,
                cbsId: o,
                errors: i ? u.addressFormValidators[n](r) : void 0
            }), e(d.actions.getCbsData((0, c.getAddressDelivery)(t())))
        }
    };
    e.changeDeliveryCourierMessageField = function(e) {
        var n = e.name,
            r = e.value;
        return function(e, t) {
            e({
                type: l.CHANGE_DELIVERY_COURIER_MESSAGE,
                name: n,
                value: r,
                errors: u.courierDeliveryMessageValidator
            })
        }
    };
    e.changeAddressMapping = function(e, t) {
        return {
            type: l.CHANGE_ADDRESS,
            mappedAddress: e,
            pickedAddress: t
        }
    };
    e.changeCustomerContactFormField = function(e, t) {
        var n = e.name,
            r = e.value,
            o = !(1 < arguments.length && void 0 !== t) || t;
        return {
            type: l.CHANGE_CUSTOMER_CONTACT_FORM_FIELD,
            name: n,
            value: r,
            errors: o ? u.customerContactFormValidators[n](r) : void 0
        }
    };
    e.changeCustomerContactDeliveryFormField = function(e, t) {
        var n = e.name,
            r = e.value,
            o = !(1 < arguments.length && void 0 !== t) || t;
        return {
            type: l.CHANGE_DELIVERY_CONTACT_FORM_FIELD,
            name: n,
            value: r,
            errors: o ? u.customerContactFormValidators[n](r) : void 0
        }
    };
    e.changeCustomerContactFormFieldForceValid = function(e) {
        var t = e.name,
            n = e.value;
        return {
            type: l.CHANGE_CUSTOMER_CONTACT_FORM_FIELD,
            name: t,
            value: n,
            errors: []
        }
    };
    e.changeCourierPhoneContact = function(e, t) {
        return {
            type: l.CHANGE_COURIER_PHONE_CONTACT,
            name: e,
            value: t,
            errors: u.courierPhoneContactValidator[e](t)
        }
    };
    e.changeEmailRelatedConsents = function(t) {
        var n = "21_CONV",
            r = "NO_21_CONV";
        return function(e) {
            e({
                type: l.CHANGE_CONSENT_STATE,
                data: [{
                    consentCode: n,
                    stateCode: t ? r : null,
                    bundleNo: null
                }]
            }), e({
                type: l.MAKE_CONSENT_READONLY,
                consentCode: n,
                readOnly: t
            })
        }
    };
    e.changeCustomerMnpDataFormField = function(e) {
        var t = e.name,
            n = e.value,
            r = e.entryIndex,
            o = e.defaults;
        return {
            type: l.CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD,
            name: t,
            value: n,
            entryIndex: r,
            defaults: o,
            errors: u.mnpFormValidators[t] ? u.mnpFormValidators[t](n) : []
        }
    };
    e.changeBusinessMnpAddressFormField = function(e) {
        var n = e.name,
            r = e.value;
        return function(e, t) {
            e({
                type: l.CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD,
                name: n,
                value: r,
                errors: u.addressFormValidators[n](r)
            }), e(d.actions.getCbsData((0, c.getAddressMain)(t())))
        }
    };
    e.registerCurrentStepId = function(e) {
        return {
            type: l.REGISTER_CURRENT_STEP_ID,
            id: e
        }
    };

    function L(e) {
        return {
            type: l.CHANGE_DOCUMENTS_CONFIRMATION,
            value: e
        }
    }
    e.changeDocumentsConfirmation = L;
    e.changeTelesalesFormField = function(e, t) {
        return {
            type: l.CHANGE_TELESALES_FORM_FIELD,
            name: e,
            value: t
        }
    };
    e.changeDebtRepaymentFormField = function(e, t) {
        return {
            type: l.CHANGE_DEBT_REPAYMENT_FORM_FIELD,
            name: e,
            value: t
        }
    };
    e.saveInSessionDocumentPosSigned = function(n) {
        return function(t) {
            a.default.updateCustomerSignedDocuments(n).then(function(e) {
                t(L(n))
            })
        }
    };

    function b(e, t) {
        return {
            type: l.CHANGE_SIM_CARD_TYPE,
            bundleNo: e,
            simCardType: t
        }
    }
    e.setSimCardType = b;
    e.changeSimCardType = function(r, o) {
        return function(t, e) {
            var n = (0, c.getSimCardTypeForBundle)(r)(e());
            t(U(r, !0)), a.default.updateSimCard(r, o).then(function() {
                t(b(r, o)), t(U(r, !1)), (0, _.reloadCartState)()(t, e), t((0, A.fetchDeliveryMethods)())
            }).catch(function(e) {
                return a.default.updateSimCard(r, n)
            }).then(function() {
                t(U(r, !1)), (0, _.reloadCartState)()(t, e)
            }).catch(function(e) {
                t(U(r, !1))
            })
        }
    };
    var U = function(e, t) {
        return {
            type: l.SIM_CARD_TYPE_CHANGING,
            bundleNo: e,
            changing: t
        }
    };

    function P() {
        return function(t, e) {
            var n = e().checkout.reservation.sapReservationNumber;
            n && a.default.getSapFioriLinks(n).then(function(e) {
                t({
                    type: l.GET_SAP_FIORI_LINKS_DONE,
                    payload: e
                }), t(B())
            }, function(e) {
                return t({
                    type: l.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: e
                })
            })
        }
    }

    function B() {
        return function(t) {
            a.default.getFioriCorrectiveInvoiceLink().then(function(e) {
                t({
                    type: l.GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK_DONE,
                    payload: e
                })
            }, function(e) {
                return t({
                    type: l.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: e
                })
            })
        }
    }

    function V() {
        return function(t, e) {
            var n = e().checkout.reservation.sapReservationNumber;
            a.default.paymentAndFiscalization(n).then(function(e) {
                t({
                    type: l.PAYMENT_AND_FISCALIZATION,
                    data: e
                })
            }, function(e) {
                return t({
                    type: l.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: e
                })
            })
        }
    }

    function G() {
        return function(t, e) {
            return a.default.checkPaymentStatus(e().checkout.reservation.sapReservationNumber).then(function(e) {
                t({
                    type: l.PAYMENT_STATUS_CHECK_DONE,
                    data: e
                })
            }, function(e) {
                return t({
                    type: l.SERIAL_NUMBER_VERIFICATION_ERROR,
                    payload: e
                })
            })
        }
    }

    function w(e) {
        var t = "data:application/pdf;base64," + e;
        window.open("", "_blank", "location=0,titlebar=0,toolbar=0,location=0,menubar=0").document.write("<embed style='position: absolute; height: 99%; width: 99%;' src='" + t + "' type='application/pdf;base64'>")
    }
    e.setBillingAccountFormVisibility = function(e) {
        return {
            type: l.SET_BILLING_ACCOUNT_FORM_VISIBILITY,
            visible: e
        }
    };
    e.changeBillingAccountFormField = function(n, r) {
        return function(e, t) {
            e({
                type: l.CHANGE_BILLING_ACCOUNT_FORM_FIELD,
                name: n,
                value: r,
                errors: u.billingAccountFormValidators[n](r)
            }), e(d.actions.getCbsData((0, c.getBillingAccountFormData)(t())))
        }
    };
    e.setBillingAccounts = function(t) {
        return function(e) {
            e({
                type: l.SET_BILLING_ACCOUNTS,
                billingAccounts: t
            })
        }
    };
    e.setCreateBillingAccount = function(t) {
        return function(e) {
            a.default.setNewBillingAccount({
                type: t
            }).then(function() {
                e({
                    type: l.SET_CREATE_NEW_BILLING_ACCOUNT
                })
            })
        }
    };
    e.setSelectedBillingAccount = function(n) {
        return function(t) {
            a.default.updateBillingAccount(n).then(function() {
                "MOBILE" === n.type ? t({
                    type: l.SET_SELECTED_BILLING_ACCOUNT_MOBILE,
                    billingAccount: n
                }) : t({
                    type: l.SET_SELECTED_BILLING_ACCOUNT_FIX,
                    billingAccount: n
                })
            }).then(function(e) {
                "MOBILE" === n.type && (t({
                    type: l.GET_BILLING_ACCOUNT_CONTRACTS_START
                }), a.default.getBillingAccountContracts(n.accountId).then(function(e) {
                    t({
                        type: l.GET_BILLING_ACCOUNT_CONTRACTS,
                        accountContracts: e
                    })
                }))
            })
        }
    };
    e.setBillingAccountContractsVisibility = function(e) {
        return {
            type: l.SET_BILLING_ACCOUNT_CONTRACTS_VISIBILITY,
            visible: e
        }
    };
    e.getActiveContracts = function(n) {
        return function(t, e) {
            t({
                type: l.GET_BILLING_ACCOUNT_CONTRACTS_START
            }), a.default.getBillingAccountContracts(n).then(function(e) {
                t({
                    type: l.GET_BILLING_ACCOUNT_CONTRACTS,
                    accountContracts: e
                })
            })
        }
    };
    var H = function() {
        return function(e) {
            e({
                type: l.SHOW_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
            })
        }
    };
    e.showEarlierInstallationConsentNotAcceptedModal = H;
    e.closeEarlierInstallationConsentNotAcceptedModal = function() {
        return function(e) {
            e({
                type: l.CLOSE_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
            })
        }
    };
    e.acceptEarlierInstallationConsentNotAcceptedModal = function() {
        return function(e) {
            e({
                type: l.ACCEPT_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION
            })
        }
    };
    e.earlierInstallationConsentNotAcceptedModalDidMount = function() {
        return function(e) {
            e({
                type: l.EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_MOUNTED_ACTION
            })
        }
    };
    e.showCourierDeliveryMethodModal = function() {
        return function(e) {
            e({
                type: l.SHOW_COURIER_DELIVERY_METHOD_MODAL
            })
        }
    };
    e.closeCourierDeliveryMethodModal = function() {
        return function(e) {
            e({
                type: l.HIDE_COURIER_DELIVERY_METHOD_MODAL
            })
        }
    };
    e.showEmailWarningModal = function(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : S.default.DEFAULT;
        return function(e) {
            e({
                type: l.SHOW_EMAIL_WARNING_MODAL,
                descriptionKey: t
            })
        }
    };
    e.hideEmailWarningModal = function() {
        return function(e) {
            e({
                type: l.HIDE_EMAIL_WARNING_MODAL
            })
        }
    };
    e.courierDeliveryMethodModalDidMount = function() {
        return function(e) {
            e({
                type: l.COURIER_DELIVERY_METHOD_MODAL_MOUNTED
            })
        }
    };

    function k(e, t) {
        return (0, c.isEarlierInstallationConsentNotAcceptedModalMounted)(t()) && !(0, c.isEarlierInstallation)(t()) && e.delivery.some(function(e) {
            return "technical_assistant" === e.deliveryMethod
        })
    }
    e.setCourierDeliveryMethodModalState = function(t) {
        return function(e) {
            e({
                type: l.SET_COURIER_DELIVERY_METHOD_MODAL_STATE,
                payload: t
            })
        }
    };
    e.confirmReplanishment = function() {
        return function(t) {
            a.default.confirmReplanishment().then(function(e) {
                return t(g())
            }).catch(function(e) {})
        }
    };
    e.pickupCancel = function() {
        return function(t) {
            a.default.cancleGoodsOrder().then(function(e) {
                t(g()), t({
                    type: l.CANCEL_GOODS_ORDER_DONE
                })
            })
        }
    };
    e.pickuErrorDismiss = function() {
        return function(e) {
            e({
                type: l.PICKUP_GENERAL_ERROR_DISMISS
            })
        }
    };
    e.fetchPickupDocuments = function() {
        return function(n) {
            a.default.getPickupDocuments().then(function(e) {
                var t = {};
                0 < e.length && (t = e.reduce(function(e, t) {
                    var n = e[t.bundleNo];
                    return n && 0 < n.length ? n.push(t) : n = [t], e[t.bundleNo] = n, e
                }, {})), n(s.pickupDocumentsDone(t))
            })
        }
    };
    e.setPermanentlyAgreedConsentsVisibleForGroup = function(e, t) {
        return {
            type: l.SET_PERMANENTLY_AGREED_CONSENTS_VISIBLE_FOR_GROUP,
            groupNumber: e,
            visible: t
        }
    };
    e.setManualVerificationModalVisibility = function(e) {
        return {
            type: l.SET_MANUAL_VERIFICATION_MODAL_VISIBILITY,
            visible: e
        }
    };
    e.updateSelectedPOSAvailability = function(e) {
        a.default.updateSelectedPOSAvailabilityStatus(e)
    };
    e.updateDeliveryPhoneNumber = function(t) {
        return function(e) {
            e({
                type: l.UPDATE_DELIVERY_PHONE_NUMBER,
                data: t
            })
        }
    };
    e.updateDAPPhoneNumber = function(t) {
        return function(e) {
            e({
                type: l.UPDATE_DAP_PHONE_NUMBER,
                data: t
            })
        }
    };
    e.clearSapErrorMessages = function() {
        return function(e) {
            e({
                type: l.CLEAR_SAP_ERROR_MESSAGES
            })
        }
    };
    e.processChanged = function() {
        return function(e) {
            e({
                type: l.PROCESS_CHANGED
            })
        }
    };
    e.setAgreementIntroductionStatuses = function(e) {
        return {
            type: l.SET_AGREEMENT_INTRODUCTION_STATUSES,
            introductionStatuses: e
        }
    };
    e.setAgreementIntroductionStatus = function(e, t) {
        return {
            type: l.SET_AGREEMENT_INTRODUCTION_STATUS,
            bundleNo: e,
            status: t
        }
    };
    e.setAgreementIntroductionDocumentLoading = function(e, t) {
        return {
            type: l.SET_AGREEMENT_INTRODUCTION_DOCUMENT_LOADING,
            bundleNo: e,
            loading: t
        }
    };
    e.verifyIdentity = function() {
        return function(t) {
            a.default.requestIdVerification().then(function(e) {
                t(W(e)), n.default.pageRedirect(e.redirectUrl)
            })
        }
    };
    e.isIdVerificationInProgress = function() {
        return function(e, t) {
            return function(e) {
                return "IN_PROGRESS" === e.status && (0, c.isIdVerificationRequired)(t())
            }
        }
    };
    e.setIdVerificationsBanks = function(e) {
        return {
            type: l.SET_ID_VERIFICATION_BANKS,
            banks: e
        }
    };
    e.setIdVerificationsSelectedBankId = function(e) {
        return {
            type: l.SET_ID_VERIFICATION_SELECTED_BANK_ID,
            selectedBankId: e
        }
    };
    var W = function(e) {
        return {
            type: l.SET_ID_VERIFICATION_RESULT,
            verificationResult: e
        }
    };
    e.setIdVerificationResult = W;
    e.registerComponentPropsValue = function(e) {
        return {
            type: l.REGISTER_COMPONENT_PROPS_VALUE,
            payload: e
        }
    };
    e.changeInvoiceEmailMapping = function(e) {
        return {
            type: r.INVOICE_EMAIL_MAPPING_CHANGE,
            payload: e
        }
    };
    e.changeInvoiceEmail = function(e, t) {
        var n = !(1 < arguments.length && void 0 !== t) || t;
        return {
            type: r.INVOICE_EMAIL_CHANGE,
            value: e,
            errors: n ? u.customerDataFormValidators.invoiceEmail(e) : []
        }
    };
    e.startSavingAllDocuments = function() {
        return {
            type: l.SAVE_ALL_DOCUMENTS_STARTED
        }
    };
    e.finishSavingAllDocuments = function() {
        return {
            type: l.SAVE_ALL_DOCUMENTS_FINISHED
        }
    }
});
//# sourceMappingURL=app.js.map