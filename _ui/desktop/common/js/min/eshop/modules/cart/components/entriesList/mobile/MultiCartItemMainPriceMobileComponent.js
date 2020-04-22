define(["exports", "react", "./MultiCartItemAttributeComponent", "eshop/modules/simfree/components/ProductOfferPriceTooltipComponent"], function(e, a, t, s) {
    "use strict";

    function l(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), t = babelHelpers.interopRequireDefault(t), s = babelHelpers.interopRequireDefault(s);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = l(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return this.props.price ? a.default.createElement("div", {
                    className: "u-table u-left"
                }, a.default.createElement("span", {
                    className: "u-table-cell"
                }, a.default.createElement("span", {
                    className: "opl-price-v2"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__whole"
                }, this.getPartsOfPrice(this.props.price.price)[0])), a.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), a.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, this.getPartsOfPrice(this.props.price.price)[1]), a.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, this.props.price.currency, "/mc")))), a.default.createElement("span", {
                    className: "u-table-cell u-vertical-top"
                }, this.props.tooltip && c(this.props.tooltip))) : null
            }
        }]), r
    }(t.default);
    e.default = r;
    var c = function(e) {
        var t = e.id,
            r = void 0 === t ? "defaultID" : t,
            l = babelHelpers.objectWithoutProperties(e, ["id"]);
        return a.default.createElement(s.default, babelHelpers.extends({
            key: r
        }, l))
    }
});
//# sourceMappingURL=MultiCartItemMainPriceMobileComponent.js.map