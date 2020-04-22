define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils", "eshop/modules/auth/components/BillingAccountSelectionSectionB2BComponent", "eshop/modules/auth/components/MobileBillingAccount", "eshop/modules/auth/components/MobileBillingAccountTitle"], function(e, o, l, t, i, s, u) {
    "use strict";

    function r(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(t);
            e && (c = c.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, c)
        }
        return n
    }

    function a(c) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(c);
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), t = babelHelpers.interopRequireDefault(t);
    var n = function(e) {
        babelHelpers.inherits(c, e);
        var n = a(c);

        function c(e) {
            var t;
            return babelHelpers.classCallCheck(this, c), (t = n.call(this, e)).state = {
                filteredAccounts: [],
                selectedBillingAccountId: t.props.selectedBillingAccountId,
                selectedBillingAccountCode: t.getAccountCodeById(null, t.props.selectedBillingAccountId)
            }, t
        }
        return babelHelpers.createClass(c, [{
            key: "componentWillUpdate",
            value: function(e) {
                if (0 == this.state.filteredAccounts.length && (null != e.billingAccounts && 0 < e.billingAccounts.length || null != e.accountByMsisdn)) {
                    var t = this.getFilteredAccounts();
                    this.setState({
                        filteredAccounts: t,
                        selectedBillingAccountId: this.props.selectedBillingAccountId,
                        selectedBillingAccountCode: this.getAccountCodeById(t, this.props.selectedBillingAccountId)
                    })
                }
            }
        }, {
            key: "componentDidMount",
            value: function() {
                null == this.props.accountByMsisdn && (this.props.isB2B ? this.props.requestMobileBillingAccountsAndChooseDefault() : this.props.requestMobileBillingAccounts())
            }
        }, {
            key: "getChooseAccountButtonProps",
            value: function(e) {
                return {
                    className: "o-btn opl-btn opl-btn--primary u-w-100",
                    accept: e,
                    onClick: this.selectAccount.bind(this),
                    type: e ? "primary" : "secondary"
                }
            }
        }, {
            key: "selectAccount",
            value: function() {
                this.props.selectAccount(this.state.selectedBillingAccountId, this.state.selectedBillingAccountCode)
            }
        }, {
            key: "getPropsForRadio",
            value: function(e, t) {
                return {
                    name: "accountSelect",
                    text: e,
                    value: t,
                    labelClassName: "o-radio opl-radio",
                    readOnly: !1,
                    checked: !(t != this.state.selectedBillingAccountId),
                    onChange: this.useAccount.bind(this)
                }
            }
        }, {
            key: "setSelectedBillingAccount",
            value: function(e, t) {
                this.setState({
                    selectedBillingAccountId: e
                }), this.setState({
                    selectedBillingAccountCode: t
                })
            }
        }, {
            key: "useAccount",
            value: function(e) {
                var t = e.target.value;
                this.setSelectedBillingAccount(t, this.getAccountCodeById(t))
            }
        }, {
            key: "getAccountCodeById",
            value: function(e, t) {
                return e && e.find(function(e) {
                    return e.accountId == t
                }) ? e.find(function(e) {
                    return e.accountId == t
                }).accountCode : null
            }
        }, {
            key: "getFilteredAccounts",
            value: function() {
                var e = [];
                if (null != this.props.billingAccounts && 0 < this.props.billingAccounts.length) e = this.props.billingAccounts.filter(function(e) {
                    return e.mobileAccount && 0 < e.accountContracts.length
                });
                else if (null != this.props.accountByMsisdn) {
                    var t = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? r(Object(n), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, n[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            })
                        }
                        return t
                    }({}, this.props.accountByMsisdn, {
                        accountContracts: [{
                            serviceNumber: this.props.msisdn
                        }]
                    });
                    e.push(t)
                }
                return e
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return null != this.props.billingAccounts || null != this.props.accountByMsisdn || this.props.isB2B ? this.props.isB2B ? o.default.createElement("div", {
                    id: "smsVerificationChooseAccountSection"
                }, o.default.createElement(i.BillingAccountSelectionSectionB2BComponent, babelHelpers.extends({
                    id: "select-billing-account-popup"
                }, this.getChooseAccountButtonProps(!1), this.props, this.state, {
                    selectAccount: this.selectAccount.bind(this),
                    setSelectedBillingAccount: this.setSelectedBillingAccount.bind(this),
                    filteredAccounts: this.state.filteredAccounts
                }))) : o.default.createElement("div", {
                    id: "smsVerificationChooseAccountSection"
                }, o.default.createElement("p", {
                    className: ""
                }, this.props.descriptions.chooseAccountLabel || "Do faktury wskazanego przez ciebie konta, dołączone będą numery umieszczone na koszyku. Dołączenie wybranych numerów do Twojego istniejącego konta sprawi, że co miesiąc będziesz opłacać tylko jeden rachunek, na którym wyszczególnione będą opłaty za wszystkie numery."), o.default.createElement("fieldset", null, this.state.filteredAccounts && 0 < this.state.filteredAccounts.length && this.state.filteredAccounts.map(function(e) {
                    return [o.default.createElement(u.MobileBillingAccountTitle, {
                        key: e.id,
                        selectedBillingAccountId: t.state.selectedBillingAccountId,
                        setSelectedBillingAccount: t.setSelectedBillingAccount.bind(t),
                        account: e
                    }), o.default.createElement(s.MobileBillingAccount, {
                        account: e
                    })]
                }), o.default.createElement("div", {
                    className: "l-row u-padding-top-m",
                    hidden: "ASSIGNMENT" === this.props.processType
                }, o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, o.default.createElement(l.OraSimpleRadio, this.getPropsForRadio(this.props.descriptions.useNewAccountLabel || "Stwórz nowe konto.", "")))), o.default.createElement("div", {
                    className: "l-row u-padding-top-m"
                }, o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8 "
                }), o.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                }, o.default.createElement(l.OraButton, this.getChooseAccountButtonProps(!1), this.props.descriptions.next))))) : null
            }
        }]), c
    }(o.default.Component);
    e.default = n
});
//# sourceMappingURL=BillingAccountSelectionSectionComponent.js.map