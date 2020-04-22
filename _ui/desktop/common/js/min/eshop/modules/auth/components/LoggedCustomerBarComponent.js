define(["exports", "react", "react-redux", "eshop/modules/auth/components/LogoutConfirmationModal", "eshop/modules/auth/components/ProcessAlertModal", "eshop/modules/core/components/ui/Tooltip", "eshop/modules/auth/actions/api", "eshop/modules/checkout/selectors", "eshop/modules/auth/selectors/authorization", "eshop/modules/cart/selectors", "eshop/modules/fix/selectors/root", "eshop/modules/auth/actions/authorization", "eshop/modules/checkout/components/customer/MulticartCustomerLoginLink", "eshop/modules/simfree/selectors", "eshop/modules/fix/actions/offers"], function(e, a, t, r, n, l, s, o, i, u, p, c, d, g, m) {
    "use strict";

    function h(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), r = babelHelpers.interopRequireDefault(r), n = babelHelpers.interopRequireDefault(n), l = babelHelpers.interopRequireDefault(l), d = babelHelpers.interopRequireDefault(d);
    var f = function(e) {
            babelHelpers.inherits(o, e);
            var s = h(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = s.call(this, e)).state = {
                    isFix: !1
                }, t.props.descriptions && t.props.descriptions.isFix && (t.state = {
                    isFix: !0
                }), t
            }
            return babelHelpers.createClass(o, [{
                key: "componentDidMount",
                value: function() {
                    this.isFix() ? this.props.requestLoggedCustomerData() : this.props.requestLoggedCustomerDataAndCheckExistence()
                }
            }, {
                key: "isFix",
                value: function() {
                    return this.props.isFix || !!this.state.isFix
                }
            }, {
                key: "_getAccountCode",
                value: function() {
                    return this.props.loggedCustomerData.accountCode && "0" !== this.props.loggedCustomerData.accountCode ? this.props.loggedCustomerData.accountCode : "Nowe Konto"
                }
            }, {
                key: "_renderTooltipLabel",
                value: function() {
                    return this.isFix() ? a.default.createElement("span", {
                        className: "u-hide"
                    }, this._getAccountCode()) : a.default.createElement("span", null, a.default.createElement("span", {
                        className: "u-margin-right-s"
                    }, " konto: "), a.default.createElement("span", {
                        className: "u-margin-right-s u-font-bold"
                    }, " ", this._getAccountCode(), " "))
                }
            }, {
                key: "_renderLogout",
                value: function() {
                    return this.props.loggedCustomerData.isOnlineCookie ? this.props.showChangeAccount && !this.isFix() ? a.default.createElement("div", {
                        className: "l-col l-col-3  u-text-right"
                    }, a.default.createElement("a", {
                        href: "#",
                        onClick: this.props.showMobileAccountSelection
                    }, "Zmień konto")) : null : a.default.createElement("div", {
                        className: "l-col l-col-3  u-text-right"
                    }, a.default.createElement("a", {
                        href: "#",
                        onClick: this.props.safeLogOut
                    }, "Wyloguj"))
                }
            }, {
                key: "render",
                value: function() {
                    if (this.isFix() && "WWW" !== this.props.channels.sales) return null;
                    var e = !this.props.isLogged && "WWW" === this.props.channels.sales && (this.props.isFixLP || this.props.isCustomerDataStep || this.props.isCartStep || $("#offerTypeSelectionComponent").length && this.props.isCartMobile);
                    if (e || this.props.isLogged) {
                        var t = this.props.descriptions && this.props.descriptions.loggedCustomerTooltip || "Do faktury wskazanego przez Ciebie numeru, dołączone będą pozostałem numery umieszczone w koszyku. Będziesz otrzymywał jeden rachunek dotyczący należności z wielu numerów abonenckich zgrupowanych na wspólnym koncie, jak również będzie mógł skorzystać z promocji/rabatów związanych z łączeniem usług.",
                            s = !(this.props.isFixLP || this.props.isCartStep || this.props.isCustomerDataStep || this.props.isProductListPage || this.props.isAccessoryListPage || this.props.isProductDetailsPage || this.props.isDeliveryAndPaymentStep),
                            o = (this.props.isLogged, !(this.props.isFixLP || this.props.isCartStep || this.props.isCustomerDataStep || this.props.isDeliveryAndPaymentStep)),
                            i = " g-white1-bg ";
                        return s && (i = " g-gray1-bg "), a.default.createElement("div", {
                            className: "l-full-row " + i + (!!o && "u-padding-top-m ")
                        }, a.default.createElement("div", {
                            className: "l-page-row " + (0 == !!$("#simCountLoopMonitor").length && " u-padding-m")
                        }, a.default.createElement("div", {
                            className: " g-white1-bg " + (!!o && " u-box-shadow--s ")
                        }, a.default.createElement("div", {
                            className: "l-row u-padding-top-l " + (!!o && " u-padding-l u-padding-left-l u-padding-right-l")
                        }, !!this.props.isLogged && a.default.createElement("div", {
                            className: "l-col l-col-9 "
                        }, this.props.loggedCustomerData.tradingName && a.default.createElement("p", {
                            className: "u-inline-block u-small-block"
                        }, a.default.createElement("span", {
                            className: "u-margin-right-s u-font-bold"
                        }, this.props.loggedCustomerData.tradingName, " "), this.props.loggedCustomerData.accountCode && !this.isFix() && a.default.createElement("span", {
                            className: "u-margin-right-s u-margin-left-s u-small-hide"
                        }, "/")), (this.props.loggedCustomerData.lastName || this.props.loggedCustomerData.firstName) && a.default.createElement("p", {
                            className: "u-inline-block u-small-block"
                        }, "WWW" === this.props.channels.sales && a.default.createElement("span", {
                            className: "u-margin-right-s"
                        }, "Witaj"), a.default.createElement("span", {
                            className: "u-margin-right-s u-font-bold"
                        }, this.props.loggedCustomerData.firstName, " ", !this.isFix() && this.props.loggedCustomerData.lastName), a.default.createElement("span", {
                            className: "u-margin-right-s u-margin-left-s u-small-hide"
                        }, this.props.loggedCustomerData.accountCode && !this.props.isFix && !this.props.onlyAssignment && "/")), !this.isFix() && !this.props.onlyAssignment && a.default.createElement("div", {
                            className: "u-inline-block u-small-block"
                        }, a.default.createElement(l.default, {
                            maxWidth: "600",
                            label: this._renderTooltipLabel()
                        }, t))), !!this.props.isLogged && this._renderLogout(), !!e && a.default.createElement("div", {
                            className: o ? " u-padding-left-l u-padding-right-l" : " u-padding-left-m u-padding-right-m"
                        }, a.default.createElement(d.default, {
                            channels: this.props.channels,
                            descriptions: this.props.descriptions,
                            title: this.props.descriptions.logInTitle
                        })))), a.default.createElement(r.default, babelHelpers.extends({}, this.props, {
                            descriptions: {}
                        })), a.default.createElement(n.default, this.props)))
                    }
                    return null
                }
            }]), o
        }(a.default.Component),
        C = (0, t.connect)(function(e) {
            return {
                isFix: (0, u.isCartFix)(e) || (0, p.isLandingPage)(e) || (0, p.isPreLandingPage)(e),
                isFixLP: (0, p.isLandingPage)(e),
                loggedCustomerData: (0, i.getLoggedCustomerData)(e),
                isRegisterBillingAccountPopupB2B: (0, i.getRegisterBillingAccountPopupB2B)(e),
                showChangeAccount: !(0, o.getDeliveryAndPaymentStep)(e) && (!(0, o.getIsCartStep)(e) || (0, u.hasEntries)(e)),
                isCartStep: (0, o.getIsCartStep)(e),
                isDeliveryAndPaymentStep: (0, o.getDeliveryAndPaymentStep)(e),
                isCustomerDataStep: (0, o.getIsCustomerDataStep)(e),
                isProductListPage: (0, g.isProductListPage)(e),
                isAccessoryListPage: (0, g.isAccessoryListPage)(e),
                isProductDetailsPage: (0, g.isProductDetailsPage)(e),
                isLogged: (0, i.isLogged)(e),
                isCartMobile: (0, u.isCartMobile)(e),
                onlyAssignment: (0, u.hasOnlyAssignment)(e)
            }
        }, function(t) {
            return {
                requestLoggedCustomerDataAndCheckExistence: function() {
                    return t((0, s.requestLoggedCustomerDataAndCheckExistence)())
                },
                requestLoggedCustomerData: function() {
                    return t((0, s.requestLoggedCustomerData)())
                },
                safeLogOut: function() {
                    return t((0, c.safeLogOut)())
                },
                hideLogoutConfirmationModal: function() {
                    return t((0, c.hideLogoutConfirmationModal)())
                },
                showMobileAccountSelection: function() {
                    return t((0, c.showMobileAccountSelection)())
                },
                updateIsLandingPage: function(e) {
                    return t((0, m.updateIsLandingPage)(e))
                }
            }
        })(f);
    e.default = C
});
//# sourceMappingURL=LoggedCustomerBarComponent.js.map