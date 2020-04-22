define(["exports", "react", "./MultiCartItemAttributeComponent"], function(e, a, t) {
    "use strict";

    function l(a) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a);
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
                }, this.getPartsOfPrice(this.props.price)[0])), a.default.createElement("span", {
                    className: "opl-price-v2__part"
                }, a.default.createElement("span", {
                    className: "opl-price-v2__separator"
                }, ","), a.default.createElement("span", {
                    className: "opl-price-v2__decimal"
                }, this.getPartsOfPrice(this.props.price)[1]), a.default.createElement("span", {
                    className: "opl-price-v2__suffix"
                }, " ", this.props.currency)))), a.default.createElement("span", {
                    className: "u-table-cell u-vertical-top"
                }, this.props.tooltip)) : null
            }
        }]), r
    }((t = babelHelpers.interopRequireDefault(t)).default);
    e.default = r
});
//# sourceMappingURL=MultiCartItemMainPriceMobileComponent.js.map