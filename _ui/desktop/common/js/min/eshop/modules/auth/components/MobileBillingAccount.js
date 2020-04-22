define(["exports", "react", "eshop/modules/auth/components/MobileContract"], function(e, n, c) {
    "use strict";

    function o(n) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MobileBillingAccount = void 0;
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return n.default.createElement("div", {
                    className: "u-padding-checkbox"
                }, n.default.createElement("ul", {
                    className: "u-margin-m"
                }, this.props.account && this.props.account.accountContracts && 0 < this.props.account.accountContracts.length && this.props.account.accountContracts.map(function(e) {
                    return n.default.createElement(c.MobileContract, {
                        key: e.contractId,
                        data: e
                    })
                })))
            }
        }]), r
    }((n = babelHelpers.interopRequireWildcard(n)).Component);
    e.MobileBillingAccount = t
});
//# sourceMappingURL=MobileBillingAccount.js.map