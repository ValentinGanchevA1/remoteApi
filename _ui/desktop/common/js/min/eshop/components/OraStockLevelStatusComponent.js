define(["exports", "react", "prop-types"], function(e, r, t) {
    "use strict";

    function n(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), t = babelHelpers.interopRequireDefault(t);
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = n(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return this.props.shouldStockLevelBeVisible ? r.default.createElement("div", null, r.default.createElement("p", null, "Dostępnych sztuk: " + this.props.stockLevel), r.default.createElement("p", null, "Stan na " + this.props.stockLevelDate)) : null
            }
        }], [{
            key: "isAvailableInStock",
            value: function(e) {
                return !e || e.code != l.OUT_OF_STOCK
            }
        }, {
            key: "getStockLevelOrder",
            value: function(e, t) {
                return t && null != e ? e : 0
            }
        }, {
            key: "getStockCssClass",
            value: function(e) {
                return l.isAvailableInStock(e) ? "" : "g-redf-c"
            }
        }]), l
    }(r.default.Component);
    (e.default = l).OUT_OF_STOCK = "outOfStock", l.LOW_STOCK = "lowStock", l.IN_STOCK = "inStock", l.propTypes = {
        stockLevelStatus: t.default.shape({
            code: t.default.string,
            type: t.default.string
        }),
        stockLevel: t.default.number,
        stockLevelDate: t.default.string,
        shouldStockLevelBeVisible: t.default.bool
    }, l.defaultProps = {
        stockLevelStatus: null,
        stockLevel: null,
        stockLevelDate: null,
        shouldStockLevelBeVisible: !1
    }
});
//# sourceMappingURL=OraStockLevelStatusComponent.js.map