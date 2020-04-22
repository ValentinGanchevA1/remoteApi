define(["exports", "../actionTypes", "eshop/modules/configurator/actionTypes", "eshop/modules/fix/remoteApi", "eshop/modules/configurator/actions/cart", "eshop/modules/configurator/selectors/filters", "eshop/modules/auth/selectors/authorization", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/selectors", "eshop/modules/cart/selectors", "eshop/modules/checkout/actions/data", "eshop/modules/auth/actions/api", "eshop/modules/cart/actions/cart", "eshop/modules/checkout/utils/utils", "eshop/modules/fix/actions/wwt", "eshop/modules/fix/selectors/root", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/magnum2/actions/magnum", "eshop/modules/magnum2/selectors", "../selectors/authorization", "../../core/constants/TransactionProcessTypeEnum", "../../core/constants/ShowSectionNameEnum", "../../configurator/selectors/filters", "../../core/constants/OfferTypeEnum"], function(e, c, n, t, A, _, T, r, u, o, s, i, a, O, l, I, d, S, f, N, C, E, p, R, h) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setSalesChannel = e.setAccountByMsisdn = e.accountChoosen = e.authorizationFailure = e.closeAuthModal = e.chooseExistingAccount = e.accountIdentifySuccess = e.authorizationSuccess = e.stayLove = e.clearStayLoveRetentionMSISDN = e.ommitAccountAuth = e.setIncompatibleMarket = e.setIsLoading = e.clearMessage = e.showProgress = e.setShowSection = e.showError = e.showMessage = e.setSelectedBillingAccountId = e.hideProcessAlertModal = e.showRetentionAlertModal = e.hideLogoutConfirmationModal = e.safeLogOut = e.logIn = e.setMSISDN = e.showMobileAccountChange = e.showMobileAccountSelection = e.registerBillingAccountPopupToPubSub = e.doRegisterBillingAccountPopupB2B = e.setPeselAndAddressVerificationEnabled = e.doSmsAccountVerification = e.doSmsAuthorization = void 0, c = babelHelpers.interopRequireWildcard(c), n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t), E = babelHelpers.interopRequireDefault(E), p = babelHelpers.interopRequireDefault(p), h = babelHelpers.interopRequireDefault(h);
    e.doSmsAuthorization = function() {
        return function(e, t) {
            var o = "WWW" === (0, T.getSalesChannel)(t()),
                n = (0, _.getClientContext)(t()),
                u = (0, _.getSelectedProcessTypeValue)(t()),
                s = (0, T.getLoggedCustomerData)(t()),
                r = s && s.accountCode,
                i = s && s.isOnlineCookie,
                a = (s && s.isCartEmpty, !1);
            if (e({
                    type: c.AUTHORIZATION_ADD_TO_CART_AFTER,
                    value: !0
                }), (0, T.getStayLoveRetentionMSISDN)(t())) e((0, A.addToCart)());
            else {
                if (o) {
                    if (u !== E.default.MNP && u !== E.default.MIGRATION_PRE_POST && u !== E.default.MIGRATION_NJU_POST_TO_POST && u !== E.default.RETENTION || (e({
                            type: c.AUTHORIZATION_MODAL_FOR_PROCESS_ON
                        }), e(y(p.default.MSISDN)), a = !0), O = t, "B2B" === (0, _.getMarketContext)(O()) && !(0, C.isLogged)(O()) && (0, _.getSelectedProcessTypeValue)(O()) !== E.default.RETENTION && (0, R.getSelectedOfferType)(O()) === h.default.VOICE_LDF && ((0, T.isLovePage)() || (0, S.isProductListPage)() || (0, S.isProductDetailsPage)() || (0, S.isAccessoryListPage)())) return e({
                        type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
                    }), e(y(p.default.CHECK_IS_CUSTOMER)), void(a = !0);
                    (n && !(0, S.isDuet)(t()) || i || u === E.default.INSTALMENT_SALES_OF_GOODS) && (!r || u === E.default.INSTALMENT_SALES_OF_GOODS && "0" === r) && (u !== E.default.MNP && u !== E.default.MIGRATION_PRE_POST && u !== E.default.MIGRATION_NJU_POST_TO_POST && u !== E.default.ACTIVATION && u !== E.default.INSTALMENT_SALES_OF_GOODS || (a = !0, i ? (0, T.getAuthorizationForProcessModalVisibility)(t()) || e(D()) : (e({
                        type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
                    }), e(y(p.default.MSISDN)))))
                }
                var O;
                a || (u === E.default.INSTALMENT_SALES_OF_GOODS ? e((0, A.addInstallmentSalesOfGoodsToCart)()) : e((0, A.addToCart)()))
            }
        }
    };
    e.doSmsAccountVerification = function() {
        return function(e, t) {
            var o, n = (0, _.getClientContext)(t()),
                u = (0, _.getSelectedProcessTypeValue)(t()),
                s = (0, T.getLoggedCustomerData)(t()),
                r = s && s.accountCode,
                i = s && s.isOnlineCookie;
            e({
                type: c.AUTHORIZATION_ADD_TO_CART_AFTER,
                value: !0
            }), !n && !i || r || (o = u) !== E.default.MNP && o !== E.default.MIGRATION_PRE_POST && o !== E.default.ACTIVATION && o !== E.default.INSTALMENT_SALES_OF_GOODS ? e((0, A.addToCart)()) : i ? (0, T.getAuthorizationForProcessModalVisibility)(t()) || e(D()) : (e({
                type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
            }), e(y(p.default.MSISDN)))
        }
    };
    e.setPeselAndAddressVerificationEnabled = function(t) {
        return function(e) {
            e({
                type: c.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED,
                isEnabled: t
            })
        }
    };

    function L() {
        return function(e) {
            e({
                type: c.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B
            })
        }
    }
    e.doRegisterBillingAccountPopupB2B = L;
    e.registerBillingAccountPopupToPubSub = function() {
        return function(e, t) {
            (0, O.whenAvailable)("PubSub", function() {
                PubSub.subscribe("UXEvent.CustomerService.SearchCustomer.NotFound", function() {
                    (0, N.wasSearchCustomerPerformed)(t()) && e({
                        type: n.CUSTOMER_SELECTED
                    }), e((0, i.requestLoggedCustomerData)()), e((0, a.fetchMiniCart)()), e((0, a.fetchCart)()), OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, 0, "header")
                }), PubSub.subscribe("UXEvent.CustomerService.SearchCustomer.Search", function() {
                    e((0, f.searchCustomerPerformed)()), e((0, i.requestLoggedCustomerData)()), e((0, a.fetchMiniCart)()), e((0, a.fetchCart)()), OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, 0, "header")
                }), e(L()), e((0, s.subscribeCustomerSelected)())
            })
        }
    };
    var D = function() {
        return function(e, t) {
            (0, o.hasRetention)(t()) ? e(g()): (e({
                type: c.AUTHORIZATION_CHOOSE_ACCOUNT_ON
            }), e(y(p.default.ACCOUNT)))
        }
    };
    e.showMobileAccountSelection = D;
    e.showMobileAccountChange = function() {
        return function(e, t) {
            (0, o.hasRetention)(t()) ? e(g()): e(D())
        }
    };
    e.setMSISDN = function(o) {
        return function(e, t) {
            e({
                type: c.AUTHORIZATION_MSISDN_OR_LOGIN,
                msisdn: o
            })
        }
    };
    e.logIn = function() {
        return function(e, t) {
            e(P(!1)), e(y(p.default.MSISDN)), e({
                type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON
            })
        }
    };
    e.safeLogOut = function() {
        return function(e, t) {
            e({
                type: c.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON
            })
        }
    };
    e.hideLogoutConfirmationModal = function() {
        return function(e, t) {
            e({
                type: c.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF
            })
        }
    };
    var g = function() {
        return function(e, t) {
            e({
                type: c.AUTHORIZATION_RETENTION_ALERT_MODAL_ON
            })
        }
    };
    e.showRetentionAlertModal = g;
    e.hideProcessAlertModal = function() {
        return function(e, t) {
            e({
                type: c.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF
            })
        }
    };
    e.setSelectedBillingAccountId = function(o) {
        return function(e, t) {
            e({
                type: c.SET_SELECTED_BILLING_ACCOUNT_ID,
                accountId: o
            }), e((0, i.requestLoggedCustomerData)())
        }
    };

    function M(o) {
        return function(e, t) {
            e({
                type: c.SHOW_MESSAGE,
                msg: {
                    text: o,
                    type: "info"
                }
            })
        }
    }
    e.showMessage = M;
    e.showError = function(o) {
        return function(e, t) {
            e({
                type: c.SHOW_MESSAGE,
                msg: {
                    text: o,
                    type: "error"
                }
            })
        }
    };
    var y = function(o) {
        return function(e, t) {
            e({
                type: c.AUTHORIZATION_SHOW_SECTION,
                section: o
            })
        }
    };
    e.setShowSection = y;
    e.showProgress = function(o) {
        return function(e, t) {
            e({
                type: c.SHOW_MESSAGE,
                msg: {
                    text: o,
                    type: "progress"
                }
            })
        }
    };

    function m() {
        return function(e, t) {
            e({
                type: c.SHOW_MESSAGE,
                msg: ""
            })
        }
    }
    e.clearMessage = m;

    function F(o) {
        return function(e, t) {
            e(o ? {
                type: c.AUTHORIZATION_IS_LOADING_ON
            } : {
                type: c.AUTHORIZATION_IS_LOADING_OFF
            })
        }
    }
    e.setIsLoading = F;
    e.setIncompatibleMarket = function(o, n) {
        return function(e, t) {
            e(o ? {
                type: c.MARKET_IS_INCOMPATIBLE,
                payload: n
            } : {
                type: c.MARKET_IS_COMPATIBLE
            })
        }
    };
    e.ommitAccountAuth = function() {
        return function(e, t) {
            e({
                type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
            }), e(F(!1)), e(M("")), e({
                type: n.CLIENT_CONTEXT_DISABLED
            }), e((0, A.addToCart)())
        }
    };
    e.clearStayLoveRetentionMSISDN = function() {
        return function(e) {
            e({
                type: n.USE_DEFAULT_PROCESS,
                use: !0
            }), e({
                type: n.USE_DEFAULT_LOYALTY,
                use: !0
            }), e({
                type: c.STAY_LOVE_RETENTION_MSISDN,
                msisdn: ""
            })
        }
    };
    e.stayLove = function() {
        return function(e, t) {
            if (e({
                    type: c.STAY_LOVE_RETENTION_MSISDN,
                    msisdn: (0, T.getMSISDN)(t())
                }), (0, S.isProductListPage)(t()) || (0, S.isProductDetailsPage)(t()) || (0, S.isAccessoryListPage)(t())) return e({
                type: n.USE_DEFAULT_PROCESS,
                use: !1
            }), e({
                type: n.USE_DEFAULT_LOYALTY,
                use: !1
            }), e((0, d.setOfferType)("VOICE_LDF")), e({
                type: c.AUTHORIZATION_ADD_TO_CART_AFTER,
                value: !1
            }), void e(U());
            var o = (0, T.getLovePaths)();
            window.location.pathname = o[0]
        }
    };
    var U = function(e, t) {
        var u = 0 < arguments.length && void 0 !== e && e,
            s = 1 < arguments.length && void 0 !== t ? t : null;
        return function(e, t) {
            var o, n;
            (e((0, r.dismissAuthErrors)()), e(m()), e(F(!1)), !u && (o = s, n = (0, S.getSelectedSoftBundleGroup)(t()), o && o.hasLove && "LDF" !== n)) ? e(y(p.default.STAY_LOVE)): (e({
                type: c.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
            }), !(0, T.getAuthorizationForAccountIdentifyModalVisibility)(t()) || (0, T.getWwwCimIdBasedOfferSelectorProcesses)().includes((0, _.getSelectedProcessTypeValue)(t())) ? (e({
                type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
            }), (0, T.addToCartAfterAuth)(t()) && e((0, A.addToCart)()), e({
                type: c.AUTHORIZATION_ADD_TO_CART_AFTER,
                value: !1
            })) : e(y(p.default.MSISDN)))
        }
    };
    e.authorizationSuccess = U;
    e.accountIdentifySuccess = function() {
        return function(e, t) {
            if (OPL.UI.fire("modules.header.reloadRightMenu"), e(F(!1)), e(m()), e({
                    type: c.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
                }), e({
                    type: c.AUTHORIZATION_IS_LOADING_OFF
                }), e((0, r.dismissAuthErrors)()), (0, I.isLandingPage)(t()) && !(0, I.isPreLandingPage)(t()) && e((0, l.updateAddress)({}, null, !0)), (0, T.addToCartAfterAuth)(t())) e((0, A.addToCart)()), e({
                type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
            }), e({
                type: c.AUTHORIZATION_ADD_TO_CART_AFTER,
                value: !1
            });
            else {
                e({
                    type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
                }), e((0, r.dismissCvErrors)()), e({
                    type: c.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
                }), e((0, s.clearCartCustomerRequested)()), e((0, i.requestLoggedCustomerData)()), e(m());
                var o = (0, u.shouldShowModalAfterProcessChanged)(t());
                e((0, s.requestCartCustomerData)()), o && e(y(p.default.FIX_PROCESS_CHANGED))
            }
            e((0, a.fetchMiniCart)()), e((0, a.fetchCart)())
        }
    };
    var P = function(t) {
        return function(e) {
            e("true" == t ? {
                type: c.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING
            } : {
                type: c.AUTHORIZATION_CHOOSE_ACCOUNT_NEW
            })
        }
    };
    e.chooseExistingAccount = P;

    function H() {
        return function(e) {
            e({
                type: c.AUTHORIZATION_CHOOSE_ACCOUNT_OFF
            }), e({
                type: c.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF
            }), e({
                type: c.AUTHORIZATION_MODAL_FOR_PROCESS_OFF
            }), e({
                type: c.AUTHORIZATION_IS_LOADING_OFF
            }), e({
                type: c.SHOW_MESSAGE,
                msg: ""
            })
        }
    }
    e.closeAuthModal = H;
    e.authorizationFailure = function() {
        return function(e) {
            e(H())
        }
    };
    e.accountChoosen = function() {
        return function(e) {
            e(H())
        }
    };
    e.setAccountByMsisdn = function(t) {
        return function(e) {
            e({
                type: c.SET_ACCOUNT_BY_MSISDN,
                account: t
            })
        }
    };
    e.setSalesChannel = function(t) {
        return function(e) {
            e({
                type: c.SET_SALES_CHANNEL,
                channel: t
            })
        }
    }
});
//# sourceMappingURL=authorization.js.map