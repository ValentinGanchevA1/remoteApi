define(["exports", "react", "./MultiCartItemTooltip", "eshop/utils/OnlineUtils"], function(e, n, l, i) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "getMnpBenefitData",
            value: function(e, t, r) {
                return !!i.default.isMnp(e) && (r && (0 == r[0].originalGrossPrice || 0 === r[0].price) && r[0].monthTo ? r[0].monthTo : void 0)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.getMnpBenefitData(this.props.processType, this.props.mnpData, this.props.monthlyPrices),
                    t = e + (e < 5 ? " miesiące" : " miesięcy");
                return e ? n.default.createElement("div", {
                    className: "u-padding-top u-font-bold u-padding u-padding-left-l u-padding-right-l g-yellowf-bg u-spacing-l"
                }, "Dla przenoszących numer ", t, " za darmo!", this.props.tooltip && n.default.createElement(l.default, null, this.props.tooltip)) : null
            }
        }]), r
    }(n.Component);
    e.default = t
});
//# sourceMappingURL=MultiCartMnpBenefitComponent.js.map