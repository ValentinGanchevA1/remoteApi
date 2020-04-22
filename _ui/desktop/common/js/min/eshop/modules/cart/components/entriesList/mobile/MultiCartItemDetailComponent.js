define(["exports", "react", "./MultiCartItemAttributeComponent"], function(e, s, t) {
    "use strict";

    function i(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s), t = babelHelpers.interopRequireDefault(t);

    function l(e) {
        var t = e.children,
            r = e.crossedOutPrice;
        return r ? s.default.createElement("div", null, s.default.createElement("div", {
            key: "price",
            className: "u-right u-w-100"
        }, t), s.default.createElement("del", {
            key: "crossedOutPrice",
            className: "h4 u-font-small g-gray5-c u-inline-block"
        }, r)) : t
    }
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = i(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return s.default.createElement("tr", {
                    className: !this.props.hideBorder && "u-border-top"
                }, s.default.createElement("td", {
                    className: (this.props.removeDownPadding ? "" : "u-padding-l") + (this.props.removeTopPadding ? "" : " u-padding-top-l") + (this.props.removeRightPadding ? "" : " u-padding-right-l"),
                    colSpan: this.props.priceless && "3"
                }, this.props.title ? s.default.createElement("span", {
                    className: this.props.captionClassName
                }, this.props.title) : this.props.children), !this.props.priceless && s.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, s.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty na start"), s.default.createElement(l, {
                    crossedOutPrice: this.props.oneTimePrice.crossedOut
                }, this.props.oneTimePrice ? this.renderPriceDesktop(this.props.oneTimePrice) : this.renderVoidDesktop())), !this.props.priceless && s.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-left u-text-right"
                }, s.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty miesięczne"), this.props.monthlyPrices && this.props.monthlyPrices[0] ? this.renderPriceDesktop(this.props.monthlyPrices[0], null, " u-left") : this.renderVoidDesktop()))
            }
        }]), r
    }(t.default);
    e.default = r
});
//# sourceMappingURL=MultiCartItemDetailComponent.js.map