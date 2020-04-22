define(["exports", "react", "eshop/utils/OnlineUtils"], function(e, s, l) {
    "use strict";

    function a(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s), l = babelHelpers.interopRequireDefault(l);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = a(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var e = this.props.bonusPrice && this.props.bonusPrice != this.props.basePrice ? this.props.bonusPrice : this.props.basePrice,
                    t = this.props.bonusPrice && this.props.bonusPrice != this.props.basePrice ? this.props.basePrice : "";
                (e = l.default.formatPrice(e)) != (t = t ? l.default.formatPrice(t) : "") && t || (t = "");
                var r = (e = e && e.split(",")) && e[0],
                    a = e && e[1];
                return s.default.createElement("div", null, s.default.createElement("span", {
                    className: "opl-price-v2 opl-price-v2--l",
                    "data-price": e
                }, s.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, s.default.createElement("span", {
                    className: "opl-price-v2__whole  g-brand1-c"
                }, r)), s.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, s.default.createElement("span", {
                    className: "opl-price-v2__decimal g-brand1-c"
                }, a), s.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, "zł/mies."))), t && s.default.createElement("p", {
                    className: "u-padding-top u-font-bold g-gray5-c u-text-line-through"
                }, t + " zł/mies."))
            }
        }]), r
    }(s.default.Component);
    e.default = t
});
//# sourceMappingURL=Price.js.map