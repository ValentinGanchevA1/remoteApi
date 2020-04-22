define(["exports", "react"], function(e, a) {
    "use strict";

    function n(a) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t = function(e) {
        babelHelpers.inherits(l, e);
        var t = n(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "onClick",
            value: function(e) {
                e.preventDefault(), this.props.onClick()
            }
        }, {
            key: "render",
            value: function() {
                return a.default.createElement("div", {
                    className: "l-page-row u-medium-no-padding u-small-no-padding u-small-padding-m u-padding-l u-small-padding-l"
                }, a.default.createElement("div", {
                    className: "g-white1-bg"
                }, a.default.createElement("div", {
                    className: "u-position-relative"
                }, a.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l "
                }, a.default.createElement("table", {
                    className: "u-table-fixed"
                }, a.default.createElement("tbody", null, a.default.createElement("tr", null, a.default.createElement("td", {
                    className: "u-padding-top-l u-padding-l u-padding-right-l u-font-bold"
                }, a.default.createElement("p", {
                    className: "g-brand1-c u-font-bold"
                }, "W pakiecie taniej"), a.default.createElement("p", {
                    className: "h4"
                }, "Dobierz kolejną kartę SIM za " + this.props.price + " zł/mies. + VAT")), a.default.createElement("td", {
                    className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
                }, a.default.createElement("a", {
                    href: "#",
                    "aria-label": "Dobierz kolejną kartę SIM",
                    className: "opl-product-addlink u-right u-small-right",
                    onClick: this.onClick.bind(this)
                })))))))))
            }
        }]), l
    }((a = babelHelpers.interopRequireWildcard(a)).Component);
    e.default = t
});
//# sourceMappingURL=AddMoreB2B.js.map