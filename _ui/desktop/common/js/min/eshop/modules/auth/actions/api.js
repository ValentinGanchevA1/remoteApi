define(["exports", "eshop/modules/auth/remoteApi", "eshop/modules/auth/actionTypes", "eshop/modules/checkout/actionTypes", "eshop/modules/auth/actions/authorization", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/checkout/selectors", "eshop/modules/auth/selectors/authorization", "eshop/modules/fix/selectors/root", "eshop/modules/cart/actions/cart", "eshop/modules/cart/selectors", "eshop/modules/checkout/actions/app", "eshop/utils/OnlineUtils", "eshop/modules/simfree/selectors", "../../core/utils/request-actions-creator", "../../configurator/selectors/metaData", "../../core/constants/ShowSectionNameEnum", "../selectors/authorization", "../../simfree/actions/app"], function(e, a, i, o, u, s, c, r, d, l, f, h, g, A, p, t, I, C, S, m) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.showResponseError = e.checkOfferSelector = e.pushVerifiedMsisdn = e.getAccountFromResponse = e.getAccountByCode = e.getAccount = e.lightLogout = e.checkMarketCompatibility = e.setMsisdn = e.pushAccount = e.setCimByLogin = e.setCimByMsisdn = e.selectAccount = e.requestLoggedCustomerData = e.requestLoggedCustomerDataAndCheckExistence = e.clearCartChangedFlag = e.setLoggedCustomerData = e.optionalRedirectToDifferentLP = e.requestMobileBillingAccountsAndChooseDefault = e.requestMobileBillingAccounts = e.setAccounts = e.requestPeselAndAddressAuth = e.backToAuthStartWithError = e.setPeselAndAddresVerified = e.doLogOut = void 0, a = babelHelpers.interopRequireDefault(a), i = babelHelpers.interopRequireWildcard(i), o = babelHelpers.interopRequireWildcard(o), A = babelHelpers.interopRequireDefault(A), C = babelHelpers.interopRequireDefault(C);
    e.doLogOut = function() {
        return function(n, e) {
            a.default.logOut().catch(function(e) {}).then(function(e) {
                A.default.removePwaSuflerContextFromSession();
                var t = A.default.getLastViewedOfferPage();
                t && $("#offerTypeSelectionComponent").length ? window.location.href = t : n((0, g.gotoCartSummary)())
            })
        }
    };

    function L(n) {
        return function(e, t) {
            e({
                type: i.IS_PESEL_AND_ADDRESS_VERIFIED,
                isVerified: n
            })
        }
    }
    e.setPeselAndAddresVerified = L;

    function O() {
        return function(e, t) {
            e((0, u.setIsLoading)(!1)), e((0, u.setShowSection)(C.default.MSISDN)), e((0, u.showError)("Nie udało się zalogować. Sprawdź dane i spróbuj jeszcze raz.")), $("#msisdn").focus()
        }
    }
    e.backToAuthStartWithError = O;
    e.requestPeselAndAddressAuth = function(n, o, i) {
        return function(t, e) {
            t((0, u.setShowSection)(C.default.MSISDN)), t((0, u.setIsLoading)(!0)), t((0, u.showMessage)("Trwa weryfikacja wprowadzonych danych.")), a.default.requestPeselAndAddressAuth(n, o, i).then(function(e) {
                var n;
                B(e) ? t(O()) : t((n = i, function(t, e) {
                    a.default.isPeselAndAddressedVerified(n).then(function(e) {
                        B(e) ? t(L(!1)) : "false" == e ? (t(L(!1)), t(O())) : (t(L(!0)), t(N(e)))
                    }).catch(function(e) {
                        t(O())
                    })
                }))
            }).catch(function(e) {
                t(O())
            })
        }
    };
    e.setAccounts = function(e) {
        return {
            type: i.SET_BILLING_ACCOUNTS,
            payload: e
        }
    };
    e.requestMobileBillingAccounts = function() {
        return function(t, e) {
            t((0, u.setIsLoading)(!0)), a.default.requestMobileBillingAccounts().then(function(e) {
                t({
                    type: i.SET_MOBILE_BILLING_ACCOUNTS,
                    payload: e,
                    meta: !0
                }), t((0, u.clearMessage)()), t((0, u.setIsLoading)(!1))
            }).catch(function(e) {
                t((0, u.showError)("Nie znaleziono kont")), t((0, u.setIsLoading)(!1))
            })
        }
    };

    function y() {
        return function(t, n) {
            (0, r.getDeliveryAndPaymentStep)(n()) || a.default.requestMobileBillingAccounts().then(function(e) {
                t({
                    type: i.SET_MOBILE_BILLING_ACCOUNTS,
                    payload: e,
                    meta: !0
                }), null == (0, d.getLoggedCustomerData)(n()).accountCode && (1 < e.length || (0, d.getBillingAccountContractLimitExceeded)(n()) ? (t({
                    type: i.AUTHORIZATION_CHANGE_ACCOUNT_ON
                }), t((0, u.showMobileAccountSelection)())) : 1 === e.length ? t(E(e[0].accountId, e[0].accountCode)) : t(E("", ""))), t((0, u.setIsLoading)(!1))
            }).catch(function(e) {
                t((0, u.showError)("Nie znaleziono kont")), t((0, u.setIsLoading)(!1))
            })
        }
    }
    e.requestMobileBillingAccountsAndChooseDefault = y;

    function w() {
        return function(e, t) {
            var n = (0, d.getSelectedBillingAccountId)(t());
            if (n) {
                var o = (0, d.getLoggedCustomerData)(t());
                if ((0, I.isMobileBillingAccountsSet)(t()))
                    if (!(o = ((0, d.getBillingAccountsForSelection)(t()) || []).filter(function(e) {
                            return e.accountId === n
                        })[0])) return;
                var i = ["/abonament-komorkowy-dla-firm", "/male-firmy/abonament-komorkowy"],
                    s = (0, d.getLovePaths)(),
                    c = window.location.pathname,
                    r = o.hasLove,
                    a = o.hasODF;
                return -1 < i.indexOf(c) && r ? (window.location.pathname = s[0], !0) : !r && (0, d.isLovePage)() && a ? (A.default.changeOrAddUrlParameterDisabledOnCheckout("offerType", "VOICE"), window.location.pathname = i[0], !0) : void 0
            }
        }
    }
    e.optionalRedirectToDifferentLP = w;

    function T(e) {
        return {
            type: i.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA,
            payload: e
        }
    }
    e.setLoggedCustomerData = T;
    e.clearCartChangedFlag = function() {
        return {
            type: i.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG
        }
    };
    e.requestLoggedCustomerDataAndCheckExistence = function(e) {
        return function(t, n) {
            a.default.getLoggedCustomerData().then(function(e) {
                t(T(e)), "WWW" === (0, d.getSalesChannel)(n()) && (0, S.isLogged)(n()) && (0, S.hasLove)(n()) && ((0, S.isOdfPage)() ? t(w()) : (0, p.isProductListPage)() && getSelectedOfferType(n()) !== OfferType.VOICE_LDF && t((0, m.setOfferType)(OfferType.VOICE_LDF))), e.accountCode || !e.lastName && !e.tradingName ? t((0, s.fetchContractRole)()) : t(y())
            }, function(e) {})
        }
    };

    function _() {
        return function(t, n) {
            a.default.getLoggedCustomerData().then(function(e) {
                t(T(e)), e.isCartChanged && ((0, r.getIsCartStep)(n()) || (0, r.getIsCustomerDataStep)(n())) ? t((0, u.setShowSection)(C.default.CART_WAS_CHANGED)) : (0, r.shouldShowModalAfterProcessChanged)(n()) || (0, d.getWwwCimIdBasedOfferSelectorProcesses)().includes((0, c.getSelectedProcessTypeValue)(n())) || t({
                    type: i.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
                })
            })
        }
    }
    e.requestLoggedCustomerData = _;
    var E = function(e, o) {
        return function(t, n) {
            t((0, u.setIsLoading)(!0)), a.default.selectAccount({
                accountId: e,
                accountCode: o
            }).then(function(e) {
                B(e) ? t(M(e)) : t(w()) || (t((0, s.fetchContractRole)()), (0, d.getBillingAccountChangeVisibility)(n()) ? (t({
                    type: i.AUTHORIZATION_CHANGE_ACCOUNT_OFF
                }), t(_()), (0, r.getIsCartStep)(n()) && (t((0, f.fetchMiniCart)()), t((0, f.fetchCart)())), t((0, u.setIsLoading)(!1))) : t((0, u.accountIdentifySuccess)()))
            }).catch(function(e) {
                t(M(e))
            })
        }
    };
    e.selectAccount = E;
    var M = function() {
        return function(e, t) {
            return e((0, u.setIsLoading)(!1)), (0, d.getAccountSelectionModalVisibility)(t()) || (e({
                type: i.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
            }), e({
                type: i.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
            }), e({
                type: i.AUTHORIZATION_IS_LOADING_OFF
            }), e((0, u.setShowSection)(""))), e((0, u.showError)("Nie znaleziono konta")), e((0, u.setIsLoading)(!1)), !0
        }
    };
    e.setCimByMsisdn = function(n) {
        return function(t, e) {
            a.default.setCimByMsisdn({
                msisdn: n
            }).then(function(e) {
                t(N(e))
            }).catch(function(e) {
                t((0, u.setIsLoading)(!1)), t((0, u.setShowSection)(C.default.MSISDN))
            })
        }
    };
    e.setCimByLogin = function(n) {
        return function(t, e) {
            a.default.setCimByLogin({
                login: n
            }).then(function(e) {
                t(N(e))
            }).catch(function(e) {
                t((0, u.showError)("Nie udało się ustawić klienta"))
            })
        }
    };
    var N = function(n) {
        return function(e, t) {
            if ("PROPOSITION_NO_LONGER_APPLIES" == n.status) return window.location.href = A.default.getLastViewedOfferPage(), !0;
            (0, l.isLandingPage)(t()) || (0, l.isPreLandingPage)(t()) ? e((0, g.requestFBBServiceData)()): e((0, g.requestFBBServiceDataFilteredByWWT)()), e({
                type: o.SET_FIX_CART_REFRESH_RESULT,
                data: n
            }), e((0, u.accountIdentifySuccess)())
        }
    };
    e.pushAccount = function(n, o) {
        return function(t, e) {
            a.default.pushAccount({
                msisdn: n,
                useExisting: o
            }).then(function(e) {
                t((0, u.accountIdentifySuccess)())
            }).catch(function(e) {
                t((0, u.showError)("Nie znaleziono konta"))
            })
        }
    };
    e.setMsisdn = function(n, o) {
        return function(t, e) {
            t((0, u.clearMessage)()), n && 11 === n.length && jQuery.isNumeric(n) ? t((0, u.setIsLoading)(!1)) : (t((0, u.setIsLoading)(!0)), a.default.setMsisdnOrLogin({
                msisdn: n,
                processType: o
            }).then(function(e) {
                n && 9 === n.length && jQuery.isNumeric(n) ? PubSub.publish("UXEvent.CAAP.PhoneVerification.Init", {
                    containerId: "smsVerificationCaapSectionBody",
                    pageVariant: "VERIFICATION_OTP_VARIANT_7_SMS_CODE"
                }) : PubSub.publish("UXEvent.CAAP.PortalLoginVerification.Init", {
                    containerId: "smsVerificationCaapSectionBody",
                    pageVariant: "VERIFICATION_PORTAL_PASSWORD"
                }), t((0, u.setIsLoading)(!1))
            }).catch(function(e) {}))
        }
    };
    var D = (0, t.createRequestActions)(i.incompatibleMarketCheck);
    e.checkMarketCompatibility = function(n) {
        return function(t, e) {
            return t(D.start()), a.default.checkMarketCompatibility({
                msisdn: n
            }).then(function(e) {
                return t(D.success(e)), B(e) ? (e && "B2B" === e.message ? t((0, u.setIncompatibleMarket)(!0, "B2B")) : e && "B2C" === e.message ? t((0, u.setIncompatibleMarket)(!0, "B2C")) : t((0, u.setIncompatibleMarket)(!0, null)), t((0, u.setShowSection)(C.default.INCOMPATIBLE_MARKET_MODAL)), t((0, u.setIsLoading)(!1)), !1) : (t((0, u.setIncompatibleMarket)(!1, null)), !0)
            }, function(e) {
                t(D.error()), t((0, u.showError)("Nie można zweryfikować rynku"))
            })
        }
    };
    e.lightLogout = function() {
        return function(t, e) {
            a.default.lightLogout().then(function(e) {}).catch(function(e) {
                t((0, u.showError)("Nie można zweryfikować rynku"))
            })
        }
    };
    e.getAccount = function(n, o) {
        return function(t, e) {
            t((0, u.showMessage)("Trwa wyszukiwanie konta.")), t((0, u.setIsLoading)(!0)), a.default.getAccount({
                msisdn: n,
                push: o
            }).then(function(e) {
                t(P(e, o))
            }).catch(function(e) {
                t(b(e))
            })
        }
    };
    e.getAccountByCode = function(n) {
        return function(t, e) {
            t((0, u.showMessage)("Trwa wyszukiwanie konta.")), t((0, u.setIsLoading)(!0)), a.default.getAccountByCode({
                accountCode: n
            }).then(function(e) {
                t(P(e, !1))
            }).catch(function(e) {
                t(b(e))
            })
        }
    };
    var P = function(c, r) {
        return function(e, t) {
            var n, o, i, s;
            B(c) ? e(b(c)) : (e((0, u.showMessage)("")), n = c, o = (0, d.getSalesChannel)(t()), i = (0, h.getCartIsNet)(t()), s = "WWW" === o, !!n.prepaid && i && s ? e(R()) : !r ? (e((0, u.setAccountByMsisdn)(c)), e((0, u.showMobileAccountSelection)()), e((0, u.setIsLoading)(!1))) : e((0, u.accountIdentifySuccess)()))
        }
    };
    e.getAccountFromResponse = P;
    var b = function(n) {
            return function(e, t) {
                e((0, u.setIsLoading)(!1)), e(k(n))
            }
        },
        R = function() {
            return function(e, t) {
                e((0, u.setIsLoading)(!1)), e((0, u.closeAuthModal)()), e(_()), (0, r.getIsCartStep)(t()) && (e((0, f.fetchMiniCart)()), e((0, f.fetchCart)()))
            }
        };
    e.pushVerifiedMsisdn = function(o, i, s, c, r) {
        return function(t, e) {
            t((0, u.setIsLoading)(!0));
            var n = (0, p.getCurrentSelectedAvailableProductsKey)(e());
            a.default.pushVerifiedMsisdn({
                msisdn: o,
                processType: i,
                availableProductsKey: n,
                propositionId: s,
                selectedDeviceId: r
            }).then(function(e) {
                B(e) ? t(k(e)) : c ? (t((0, u.clearMessage)()), t((0, u.setIsLoading)(!1)), t((0, u.setShowSection)(c))) : (t((0, u.setShowSection)("")), t((0, u.authorizationSuccess)(!1, e)))
            }).catch(function(e) {
                t(k(e))
            }), A.default.removePwaSuflerContextFromSession()
        }
    };
    e.checkOfferSelector = function(e, n, o) {
        return function(t) {
            return t((0, u.setIsLoading)(!0)), a.default.checkOfferSelector({
                processType: e,
                propositionId: n,
                selectedDeviceId: o
            }).then(function(e) {
                return B(e) ? (t(k(e)), Promise.reject(e.message)) : Promise.resolve(e)
            }).catch(function(e) {
                return t(k(e)), Promise.reject(e)
            })
        }
    };
    var k = function(n) {
        return function(e, t) {
            e((0, u.setIsLoading)(!1)), (0, d.getAccountSelectionModalVisibility)(t()) || e((0, u.setShowSection)(C.default.MSISDN)), 200 == n.status ? e((0, u.showError)(n.message)) : 500 <= n.status ? e((0, u.showError)("Mamy chwilowe trudności techniczne. Spróbuj za jakiś czas.")) : 404 != n.status && !n.responseText || e((0, u.showError)(JSON.parse(n.responseText).message))
        }
    };

    function B(e) {
        return !(!e || !e.message)
    }
    e.showResponseError = k
});
//# sourceMappingURL=api.js.map