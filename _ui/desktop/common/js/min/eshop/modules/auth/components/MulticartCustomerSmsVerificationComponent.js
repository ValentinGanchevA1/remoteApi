define(["exports", "react", "prop-types", "react-redux", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/offers", "./BillingAccountSelectionSectionComponent", "./MsisdnSelectionSectionComponent", "./CaapSectionComponent", "eshop/modules/core/components/ui/Modal", "eshop/modules/configurator/actions/offers", "./LoggedCustomerBarComponent", "eshop/modules/fix/selectors/root", "../selectors/authorization", "../actions/api", "../actions/authorization", "eshop/modules/auth/actions/api", "eshop/components/OraCommonComponents", "eshop/modules/checkout/selectors", "eshop/modules/checkout/actions/app", "eshop/modules/checkout/components/MulticartModificationModalComponent", "eshop/modules/cart/selectors", "eshop/modules/checkout/components/modals/CartChangedInfoModal", "../../cart/actions/cart", "../../checkout/components/modals/IncompatibleMarketModal", "eshop/modules/auth/components/StayLoveSectionComponent", "../../core/constants/TransactionProcessTypeEnum", "../../core/constants/ShowSectionNameEnum", "./CheckIsExistingLoveCustomerComponent", "./LeadFormComponent", "../../simfree/selectors", "../../configurator/selectors/filters", "../../configurator/selectors/offers", "../../configurator/utils"], function(e, a, t, o, s, n, i, r, l, c, u, d, p, h, f, g, m, C, A, b, S, M, y, E, v, N, I, L, D, w, P, k, B, O) {
    "use strict";

    function R(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), r = babelHelpers.interopRequireDefault(r), l = babelHelpers.interopRequireDefault(l), c = babelHelpers.interopRequireDefault(c), d = babelHelpers.interopRequireDefault(d), S = babelHelpers.interopRequireDefault(S), y = babelHelpers.interopRequireDefault(y), v = babelHelpers.interopRequireDefault(v), N = babelHelpers.interopRequireDefault(N), I = babelHelpers.interopRequireDefault(I), L = babelHelpers.interopRequireDefault(L), D = babelHelpers.interopRequireDefault(D), w = babelHelpers.interopRequireDefault(w);
    var H = function(e) {
        babelHelpers.inherits(s, e);
        var o = R(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), t = o.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "renderModalComponent", function(e) {
                var t = e.setShowSection,
                    o = e.showSection,
                    s = e.closeAuthModal,
                    n = e.selectedPropositionName,
                    i = e.selectedDeviceName,
                    r = e.selectedProcessName;
                switch (o) {
                    case L.default.CHECK_IS_CUSTOMER:
                        return a.default.createElement(D.default, {
                            logIn: function() {
                                return t(L.default.MSISDN)
                            },
                            hasNoAccount: function() {
                                return t(L.default.LEAD_FORM)
                            }
                        });
                    case L.default.LEAD_FORM:
                        return a.default.createElement(w.default, {
                            closeModal: function() {
                                return s()
                            },
                            selectedPropositionName: n,
                            selectedDeviceName: i,
                            selectedProcessName: r
                        })
                }
            }), t
        }
        return babelHelpers.createClass(s, [{
            key: "componentDidMount",
            value: function() {
                this.props.setCartConfigurationFromUrl(), "true" === this.props.descriptions.isPeselAndAddresVerificationEnabled && this.props.setPeselAndAddressVerificationEnabled(!0), this.props.channels && this.props.channels.sales && this.props.setSalesChannel(this.props.channels.sales), this.props.channels && "WWW" !== this.props.channels.sales && this.props.registerBillingAccountPopupToPubSub();
                var e = this.getMyHeight();
                e < 100 && (e = 100), this.setState({
                    minHeight: e
                });
                var t = this;
                $("#showAuthModalTrigger").on("click", function() {
                    t.props.logIn()
                })
            }
        }, {
            key: "getMyHeight",
            value: function() {
                var e = document.getElementById("smsAuthLoader");
                if (!e) return 0;
                var t = $(e).outerHeight();
                return t < 100 && (t = 100), t
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                this.props.isAuthNeeded && !e.isAuthNeeded && this.props.setShowSection(L.default.MSISDN), this.props.isCallbackNeeded && this.requestCallbackModal(this.props.customerContactMsisdn)
            }
        }, {
            key: "requestCallbackModal",
            value: function(e) {
                this.props.dismissCallbackErrors(), window._gt = window._gt || [];
                var t = {
                    cmb_profile: this.props.descriptions.cmbQueueName || "SALES_C_OMNI_CALLBACK",
                    cmbPhoneNumber: e
                };
                window._gt.push(["event", "portalCmbStart", {
                    data: t
                }])
            }
        }, {
            key: "renderSeparator",
            value: function() {
                return a.default.createElement("div", {
                    className: "o-separator o-separator--s o-separator--full-width u-spacing-top-xl"
                })
            }
        }, {
            key: "renderMessage",
            value: function() {
                if (!this.props.msg) return null;
                var e = "",
                    t = !(this.props.showModalForAccountIdentify || this.props.showModalForProcess),
                    o = this.props.msg.type,
                    s = this.props.msg.text,
                    n = this.props.msg.descriptionName;
                return n && this.props.descriptions && this.props.descriptions[n] && (s = this.props.descriptions[n]), t || (e = this.renderSeparator(), "progress" === o && (o = "info")), null != this.props.msg && s && "" !== s ? (0, O.isHtml)(this.props.msg.text) ? a.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.msg.text
                    }
                }) : a.default.createElement("div", {
                    id: "smsVerificationMessageSection",
                    className: "u-padding-top-m"
                }, e, a.default.createElement(C.OraMessage, {
                    text: s,
                    type: o
                })) : void 0
            }
        }, {
            key: "isCaapAuthenticatedAndInProcess",
            value: function(e) {
                return this.props.loggedCustomerData && this.props.loggedCustomerData.isOnlineCookie && -1 !== e.indexOf(this.props.processType)
            }
        }, {
            key: "msisdnVerificationIsNotRequired",
            value: function() {
                return this.isCaapAuthenticatedAndInProcess([I.default.RETENTION, I.default.MIGRATION_PRE_POST, I.default.INSTALMENT_SALES_OF_GOODS])
            }
        }, {
            key: "accountSelectionInNotRequired",
            value: function() {
                return this.isCaapAuthenticatedAndInProcess([I.default.RETENTION, I.default.INSTALMENT_SALES_OF_GOODS]) || this.accountAlreadyChosen()
            }
        }, {
            key: "accountAlreadyChosen",
            value: function() {
                return this.props.loggedCustomerData.accountCode || this.props.loggedCustomerData.isMobileCart
            }
        }, {
            key: "title",
            value: function(e) {
                var t = e.showSection,
                    o = e.descriptions;
                switch (t) {
                    case L.default.MSISDN:
                        return this.msisdnVerificationIsNotRequired() ? "Numer telefonu" : o.title;
                    case L.default.ACCOUNT:
                        return "Zdecyduj czy zamówienie ma być rozliczane w ramach faktury dla posiadanego już konta, czy nowego.";
                    case L.default.FIX_PROCESS_CHANGED:
                    case L.default.CART_WAS_CHANGED:
                        return "Uwaga!";
                    case L.default.INCOMPATIBLE_MARKET_MODAL:
                        return "";
                    case L.default.STAY_LOVE:
                        return "Masz ofertę Love dla Firm z rabatami";
                    case L.default.CHECK_IS_CUSTOMER:
                        return a.default.createElement("div", {
                            className: "u-inline u-font-small"
                        }, "Czy masz już abonament komórkowy w Orange?");
                    case L.default.LEAD_FORM:
                        return a.default.createElement("div", {
                            className: "u-inline"
                        }, "Nie masz jeszcze pakietu Love dla Firm -", a.default.createElement("br", {
                            className: "u-small-hide"
                        }), " co dalej");
                    default:
                        return o.title
                }
            }
        }, {
            key: "getPropsForBillingAccountComponent",
            value: function() {
                return {
                    accountByMsisdn: this.props.accountByMsisdn,
                    billingAccounts: this.props.billingAccounts,
                    isBillingAccountContractLimitExceeded: this.props.isBillingAccountContractLimitExceeded,
                    channels: this.props.channels,
                    isB2B: this.props.isB2B,
                    descriptions: this.props.descriptions,
                    getAccount: this.props.getAccount,
                    getAccountByCode: this.props.getAccountByCode,
                    requestMobileBillingAccountsAndChooseDefault: this.props.requestMobileBillingAccountsAndChooseDefault,
                    requestMobileBillingAccounts: this.props.requestMobileBillingAccounts,
                    selectAccount: this.props.selectAccount,
                    selectedBillingAccountId: this.props.selectedBillingAccountId,
                    showModal: this.props.showModal
                }
            }
        }, {
            key: "getModalContent",
            value: function() {
                var e = this;
                return a.default.createElement("div", null, a.default.createElement(C.OraLoader, {
                    loading: this.props.isLoading,
                    id: "smsAuthLoader",
                    parentId: "verification-loader",
                    useHeightFixing: !1
                }, 0 < this.props.showSection.length && a.default.createElement("div", {
                    style: {
                        minHeight: this.props.offersLoading ? this.state.minHeight : 100
                    }
                }, "WWW" === this.props.channels.sales && a.default.createElement("h3", {
                    className: "u-no-padding-bottom"
                }, a.default.createElement("span", {
                    id: "opl-sms-modal-main-label",
                    "aria-atomic": "true",
                    className: "u-spacing-right-s",
                    "aria-live": "assertive"
                }, " ", this.title(this.props))), this.props.showSection === L.default.MSISDN && a.default.createElement(r.default, babelHelpers.extends({}, this.props, {
                    msisdnVerificationIsNotRequired: function() {
                        return e.msisdnVerificationIsNotRequired()
                    },
                    accountSelectionInNotRequired: function() {
                        return e.accountSelectionInNotRequired()
                    }
                })), this.props.showSection === L.default.CAAP && a.default.createElement(l.default, this.props), this.props.showSection === L.default.ACCOUNT && a.default.createElement(i.default, this.getPropsForBillingAccountComponent()), this.props.showSection === L.default.FIX_PROCESS_CHANGED && a.default.createElement(S.default, this.props), this.props.showSection === L.default.CART_WAS_CHANGED && a.default.createElement(y.default, {
                    text: this.props.descriptions.cartChangedInfoContent,
                    buttonText: this.props.descriptions.cartChangedInfoButtonText,
                    buttonClick: function() {
                        return e.onClose()
                    }
                }), this.props.showSection === L.default.STAY_LOVE && a.default.createElement(N.default, this.props), this.props.showSection === L.default.INCOMPATIBLE_MARKET_MODAL && a.default.createElement(v.default, babelHelpers.extends({}, this.props, {
                    id: "incompatible-market-modal",
                    onClickLightLogout: this.props.onClickLightLogout,
                    removeFromCart: this.props.onClickRemove
                })), this.renderModalComponent(this.props))), this.renderMessage())
            }
        }, {
            key: "onClose",
            value: function() {
                this.props.dismissAuthErrors(), this.props.showSection === L.default.CART_WAS_CHANGED && this.props.clearCartChangedFlag(), this.props.setShowSection(""), $("#msisdn").val(""), $("#smsVerificationCaapSectionBody").html(""), this.props.showModal && (this.props.clearMessage(), this.props.authorizationFailure())
            }
        }, {
            key: "getModalProps",
            value: function() {
                return {
                    size: "narrow",
                    escapeClose: !0,
                    showClose: !0,
                    clickClose: !0
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return a.default.createElement("div", {
                    id: "authModalWrapper"
                }, a.default.createElement(d.default, this.props), a.default.createElement("button", {
                    id: "showAuthModalTrigger",
                    className: "u-hide"
                }), a.default.createElement(c.default, babelHelpers.extends({
                    id: "auth-modal"
                }, this.getModalProps(), {
                    open: this.props.showModal,
                    onClose: function() {
                        return e.onClose()
                    }
                }), this.getModalContent()), a.default.createElement("div", {
                    id: "smsVerificationSection"
                }))
            }
        }]), s
    }(a.default.Component);
    H.propTypes = {
        showSection: t.default.string
    };
    var T = (0, o.connect)(function(e) {
        return {
            propositionId: (0, n.getSelectedOfferId)(e),
            selectedDeviceId: (0, n.getSelectedDeviceId)(e),
            clientContext: (0, s.getClientContext)(e),
            isLoading: (0, h.getIsLoading)(e),
            processType: (0, s.getSelectedProcessTypeValue)(e),
            msg: (0, h.getAuthMessage)(e),
            showModal: (0, h.getAccountSelectionModalVisibility)(e) || (0, h.getAuthorizationForProcessModalVisibility)(e) || (0, h.getAuthorizationForAccountIdentifyModalVisibility)(e) || "" != (0, h.getAuthMessage)(e) && null != (0, h.getAuthMessage)(e),
            showModalForProcess: (0, h.getAuthorizationForProcessModalVisibility)(e),
            showModalForAccountIdentify: (0, h.getAuthorizationForAccountIdentifyModalVisibility)(e),
            billingAccountChangeOn: (0, h.getBillingAccountChangeVisibility)(e),
            showSection: (0, h.getShowSection)(e),
            showAccountSelection: (0, h.getAccountSelectionModalVisibility)(e),
            isBillingAccountContractLimitExceeded: (0, h.getBillingAccountContractLimitExceeded)(e),
            billingAccounts: (0, h.getBillingAccountsForSelection)(e),
            selectedBillingAccountId: (0, h.getSelectedBillingAccountId)(e),
            errors: (0, A.getAuthCheckoutErrors)(e),
            isAuthNeeded: (0, A.isAuthNeeded)(e),
            isCallbackNeeded: (0, A.isCallbackNeeded)(e),
            chosenExistingAccount: (0, h.getChosenExistingAccount)(e),
            msisdn: (0, h.getMSISDN)(e),
            isExistingCustomer: (0, A.isExistingCustomer)(e),
            isCustomerDataStep: (0, A.getIsCustomerDataStep)(e),
            selectedOfferType: (0, s.getSelectedOfferType)(e),
            loggedCustomerData: (0, h.getLoggedCustomerData)(e),
            customerContactMsisdn: (0, A.getCustomerContactMsisdn)(e),
            showLogoutConfirmationModal: (0, h.getShowLogoutConfirmationModal)(e),
            isCartFix: (0, M.isCartFix)(e),
            isOnlineCookie: (0, h.getIsOnlineCookie)(e),
            accountByMsisdn: (0, h.getAccountByMsisdn)(e),
            isFixLP: (0, p.isLandingPage)(e),
            isFixPreLP: (0, p.isPreLandingPage)(e),
            isFix: (0, p.isLandingPage)(e) || (0, p.isPreLandingPage)(e) || (0, M.isCartFix)(e),
            marketIncompatibility: (0, h.getMarketIncompatible)(e),
            isB2B: "B2B" === (0, s.getMarketContext)(e) || (0, h.getLoggedCustomerData)(e) && "B2B" === (0, h.getLoggedCustomerData)(e).market,
            wwwCimIdBasedOfferSelectorProcesses: (0, h.getWwwCimIdBasedOfferSelectorProcesses)(),
            isPeselAndAddressVerified: (0, h.isPeselAndAddressVerified)(e),
            enablePeselAuth: (0, h.isPeselAndAddressVerificationEnabled)(e),
            selectedPropositionName: (0, n.getNameForSelectedOffer)(e) || "",
            selectedDeviceName: (0, P.getSelectedDeviceObject)(e) && (0, P.getSelectedDeviceObject)(e).name || (0, B.getSelectedOffersDeviceName)(e) && (0, B.getSelectedOffersDeviceName)(e).name || "",
            selectedProcessName: (0, k.getSelectedProcessTypeObject)(e) && (0, k.getSelectedProcessTypeObject)(e).description || ""
        }
    }, function(i) {
        return {
            setMSISDN: function(e) {
                return i((0, g.setMSISDN)(e))
            },
            authorizationSuccess: function(e, t) {
                return i((0, g.authorizationSuccess)(e, t))
            },
            stayLove: function() {
                return i((0, g.stayLove)())
            },
            authorizationFailure: function() {
                return i((0, g.authorizationFailure)())
            },
            closeAuthModal: function() {
                return i((0, g.closeAuthModal)())
            },
            setMsisdn: function(e, t) {
                return i((0, f.setMsisdn)(e, t))
            },
            getAccount: function(e, t) {
                return i((0, f.getAccount)(e, t))
            },
            getAccountByCode: function(e) {
                return i((0, f.getAccountByCode)(e))
            },
            checkMarketCompatibility: function(e) {
                return i((0, f.checkMarketCompatibility)(e))
            },
            setCimByMsisdn: function(e) {
                return i((0, f.setCimByMsisdn)(e))
            },
            requestMobileBillingAccounts: function() {
                return i((0, f.requestMobileBillingAccounts)())
            },
            pushVerifiedMsisdn: function(e, t, o, s, n) {
                return i((0, f.pushVerifiedMsisdn)(e, t, o, s, n))
            },
            pushAccount: function(e, t) {
                return i((0, f.pushAccount)(e, t))
            },
            showMessage: function(e) {
                return i((0, g.showMessage)(e))
            },
            setShowSection: function(e) {
                return i((0, g.setShowSection)(e))
            },
            showError: function(e) {
                return i((0, g.showError)(e))
            },
            logIn: function() {
                return i((0, g.logIn)())
            },
            safeLogOut: function() {
                return i((0, g.safeLogOut)())
            },
            selectAccount: function(e, t) {
                return i((0, f.selectAccount)(e, t))
            },
            clearMessage: function() {
                return i((0, g.clearMessage)())
            },
            setIsLoading: function(e) {
                return i((0, g.setIsLoading)(e))
            },
            setSalesChannel: function(e) {
                return i((0, g.setSalesChannel)(e))
            },
            registerBillingAccountPopupToPubSub: function() {
                return i((0, g.registerBillingAccountPopupToPubSub)())
            },
            requestMobileBillingAccountsAndChooseDefault: function() {
                return i((0, m.requestMobileBillingAccountsAndChooseDefault)())
            },
            onClickLightLogout: function() {
                return i((0, f.lightLogout)())
            },
            onClickRemove: function() {
                i((0, E.removeFromCart)(null)), i((0, f.requestLoggedCustomerData)())
            },
            requestLoggedCustomerData: function() {
                return i((0, f.requestLoggedCustomerData)())
            },
            showMobileAccountSelection: function() {
                return i((0, g.showMobileAccountSelection)())
            },
            dismissCallbackErrors: function() {
                return i((0, b.dismissCallbackErrors)())
            },
            dismissAuthErrors: function() {
                return i((0, b.dismissAuthErrors)())
            },
            ommitAccountAuth: function() {
                return i((0, g.ommitAccountAuth)())
            },
            setCartConfigurationFromUrl: function(e, t) {
                return i((0, u.setCartConfigurationFromUrl)(e, t))
            },
            hideLogoutConfirmationModal: function() {
                return i((0, g.hideLogoutConfirmationModal)())
            },
            setCimByLogin: function(e) {
                return i((0, f.setCimByLogin)(e))
            },
            clearCartChangedFlag: function() {
                return i((0, f.clearCartChangedFlag)())
            },
            checkOfferSelector: function(e, t, o) {
                return i((0, f.checkOfferSelector)(e, t, o))
            },
            requestPeselAndAddressAuth: function(e, t, o) {
                return i((0, f.requestPeselAndAddressAuth)(e, t, o))
            },
            setPeselAndAddressVerificationEnabled: function(e) {
                return i((0, g.setPeselAndAddressVerificationEnabled)(e))
            }
        }
    })(H);
    e.default = T
});
//# sourceMappingURL=MulticartCustomerSmsVerificationComponent.js.map