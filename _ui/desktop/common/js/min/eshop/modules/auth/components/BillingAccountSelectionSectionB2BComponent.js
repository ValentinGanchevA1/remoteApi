define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/auth/components/MobileBillingAccount", "eshop/modules/auth/components/MobileBillingAccountTitle", "eshop/modules/auth/components/BillingAccountSearchComponent"], function(e, c, o, a, i, r) {
    "use strict";

    function t(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.BillingAccountSelectionSectionB2BComponent = void 0, c = babelHelpers.interopRequireWildcard(c), r = babelHelpers.interopRequireDefault(r);
    var l = function(e) {
        babelHelpers.inherits(n, e);
        var l = t(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = l.call(this, e)).onClickNewAccount = t.onClickNewAccount.bind(babelHelpers.assertThisInitialized(t)), t
        }
        return babelHelpers.createClass(n, [{
            key: "onClickNewAccount",
            value: function() {
                this.props.setSelectedBillingAccount("", "")
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
                    checked: !(t != this.props.selectedBillingAccountId),
                    onChange: this.onClickNewAccount
                }
            }
        }, {
            key: "channelIsWWW",
            value: function() {
                return !!this.props.channels && "WWW" === this.props.channels.sales
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return c.default.createElement("div", null, c.default.createElement("fieldset", null, c.default.createElement("div", {
                    className: "g-gray1-bg u-padding-all-l"
                }, c.default.createElement("p", {
                    className: "h3 u-no-margin"
                }, "Wybierz konto")), this.props.isBillingAccountContractLimitExceeded && c.default.createElement(r.default, this.props), c.default.createElement("div", {
                    className: "u-padding-all-l"
                }, c.default.createElement("div", {
                    className: "u-margin-m"
                }, !this.channelIsWWW() && c.default.createElement(o.OraSimpleRadio, this.getPropsForRadio(this.props.descriptions && this.props.descriptions.useNewAccountLabel || "Stwórz nowe konto abonamentowe", ""))), c.default.createElement("div", {
                    className: "o-separator u-margin-m"
                }), this.props.filteredAccounts && 0 < this.props.filteredAccounts.length && this.props.filteredAccounts.map(function(e) {
                    return [c.default.createElement(i.MobileBillingAccountTitle, {
                        key: e.id,
                        selectedBillingAccountId: t.props.selectedBillingAccountId,
                        setSelectedBillingAccount: t.props.setSelectedBillingAccount,
                        account: e
                    }), c.default.createElement(a.MobileBillingAccount, {
                        account: e
                    })]
                })), c.default.createElement("div", {
                    className: "g-gray1-bg u-padding-all-l"
                }, c.default.createElement("div", {
                    className: "l-row"
                }, c.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-9 small-offset-by-9 medium-offset-by-9"
                }, c.default.createElement("button", {
                    className: "opl-btn opl-btn--primary o-btn u-w-100",
                    onClick: this.props.selectAccount
                }, c.default.createElement("span", {
                    className: "opl-ripple-box"
                }, c.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), "Wybierz"))))))
            }
        }]), n
    }(c.Component);
    e.BillingAccountSelectionSectionB2BComponent = l
});
//# sourceMappingURL=BillingAccountSelectionSectionB2BComponent.js.map