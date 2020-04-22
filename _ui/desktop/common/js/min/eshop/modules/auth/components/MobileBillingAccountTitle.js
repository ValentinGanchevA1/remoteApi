define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, n, c) {
    "use strict";

    function r(n) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MobileBillingAccountTitle = void 0;
    var t = function(e) {
        babelHelpers.inherits(o, e);
        var t = r(o);

        function o(e) {
            return babelHelpers.classCallCheck(this, o), t.call(this, e)
        }
        return babelHelpers.createClass(o, [{
            key: "useAccount",
            value: function(e) {
                e.target.value == this.props.account.accountId && this.props.setSelectedBillingAccount(this.props.account.accountId, this.props.account.accountCode)
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
                    checked: t == this.props.selectedBillingAccountId,
                    onChange: this.useAccount.bind(this)
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.account && this.props.account.groupName ? "Konto mobilne z " + this.props.account.groupName : "Konto mobilne";
                return n.default.createElement("div", {
                    className: "u-margin-m"
                }, n.default.createElement(c.OraComplexRadio, this.getPropsForRadio(e, this.props.account.accountId), n.default.createElement("p", {
                    className: ""
                }, " ", e), n.default.createElement("p", {
                    className: "g-gray5-c u-font-normal"
                }, this.props.account.accountCode)))
            }
        }]), o
    }((n = babelHelpers.interopRequireWildcard(n)).Component);
    e.MobileBillingAccountTitle = t
});
//# sourceMappingURL=MobileBillingAccountTitle.js.map