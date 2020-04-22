define(["exports", "react", "./MultiCartItemAttributeComponent"], function(e, s, t) {
    "use strict";

    function l(s) {
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
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = l(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return s.default.createElement("tr", null, s.default.createElement("td", {
                    className: "u-padding-l u-padding-top-l u-padding-right-l",
                    colSpan: this.props.priceless && "3"
                }, s.default.createElement("span", {
                    className: this.props.captionClassName
                }, this.props.title)), !this.props.priceless && s.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, s.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty miesięczne"), this.props.monthlyPrices && this.props.monthlyPrices[0] ? this.renderPriceDesktop(this.props.monthlyPrices[0]) : this.renderVoidDesktop()), !this.props.priceless && s.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-left u-text-right"
                }, s.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty na start"), this.props.oneTimePrice ? this.renderPriceDesktop(this.props.oneTimePrice) : this.renderVoidDesktop()))
            }
        }]), r
    }((t = babelHelpers.interopRequireDefault(t)).default);
    e.default = r
});
//# sourceMappingURL=MultiCartItemDetailComponent.js.map