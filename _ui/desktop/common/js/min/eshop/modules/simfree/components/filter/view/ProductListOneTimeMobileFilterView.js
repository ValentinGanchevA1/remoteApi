define(["exports", "react", "./ProductListPriceFilterRowView", "eshop/utils/OnlineUtils"], function(e, l, a, t) {
    "use strict";

    function i(l) {
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
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), a = babelHelpers.interopRequireDefault(a), t = babelHelpers.interopRequireDefault(t);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = i(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var r = this;
                return l.default.createElement("div", null, this.props.showComponent ? l.default.createElement("div", {
                    id: this.props.id
                }, l.default.createElement("p", {
                    className: "h4 u-spacing-l"
                }, this.props.header), l.default.createElement("div", {
                    className: "l-row u-spacing-l u-no-margin",
                    "data-js-module": "common/modules/opl-gradient-fade",
                    "data-js-options": JSON.stringify({
                        coverClass: ".cover",
                        triggerHideName: "Zwiń",
                        triggerShowName: "Rozwiń",
                        maxHeight: 300,
                        showFirst: this.props.showExpanderNumber,
                        scrollTop: !1,
                        scrollSet: 0
                    })
                }, l.default.createElement("ul", {
                    className: "opl-gradient-fade--wrapper"
                }, this.props.tieredPrices && this.props.tieredPrices.map(function(e, t) {
                    return l.default.createElement(a.default, {
                        key: "Price_" + e + "_" + t,
                        type: r.props.type,
                        checked: r.props.selectedTieredPrices[e.id],
                        onClick: function() {
                            return r.props.onClick(e.id)
                        },
                        text: r.props.labelFormatter(e)
                    })
                })), l.default.createElement("div", {
                    className: "opl-gradient-fade--trigger u-text-left u-spacing-m u-spacing-top"
                }, l.default.createElement("a", {
                    href: "#",
                    className: "opl-load-more u-font-bold"
                }, "Rozwiń")))) : null)
            }
        }]), r
    }(l.default.Component);
    e.default = r
});
//# sourceMappingURL=ProductListOneTimeMobileFilterView.js.map