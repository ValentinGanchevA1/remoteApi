define(["exports", "react", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/Tooltip"], function(e, i, t, n, s) {
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
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), n = babelHelpers.interopRequireDefault(n), s = babelHelpers.interopRequireDefault(s);

    function c(e) {
        return i.default.createElement("div", {
            className: "l-row " + e.className
        }, i.default.createElement("div", {
            className: "l-col l-col-12 "
        }, e.col1))
    }

    function u(e) {
        return i.default.createElement("div", {
            className: "l-row"
        }, i.default.createElement("div", {
            className: "l-col l-col-7"
        }, e.col1), i.default.createElement("div", {
            className: "l-col l-col-5 u-text-right"
        }, e.col2))
    }
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = l(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                if (!this.props.instalmentTooltipDescription || "" == this.props.instalmentTooltipDescription) return null;
                if (!this.props.proposition) return null;
                var e = this.props.proposition.deviceData.inOffer.price.base,
                    t = this.props.proposition.deviceData.inOffer.price.convergent,
                    r = (n.default.formatPrice(this.props.proposition.deviceData.inOffer.price.base.oneTimePayment), e.devicePayments[0]),
                    l = (n.default.formatPrice(r.price), r.monthTo),
                    a = n.default.formatPrice(this.props.clientContext ? t.devicePayments[0].price : e.devicePayments[0].price);
                if (!a) return i.default.createElement("p", null, "empty");
                var o = [];
                return o.push(i.default.createElement(c, {
                    key: "line-4",
                    col1: "Rata za urządzenie"
                })), o.push(i.default.createElement(u, {
                    key: "line-5",
                    col1: "od 1 do " + l + " mies.",
                    col2: a + " zł/mies."
                })), o.push(i.default.createElement("div", {
                    key: "line-6",
                    className: "l-row  u-padding-all-m"
                }, i.default.createElement("div", {
                    className: "o-separator o-separator--s o-separator--full-width "
                }))), o.push(i.default.createElement(c, {
                    key: "line-7",
                    col1: this.props.instalmentTooltipDescription,
                    className: "u-font-bold u-font-small"
                })), i.default.createElement(s.default, {
                    maxWidth: 400,
                    baseId: "instalmentTooltip"
                }, o)
            }
        }]), r
    }(i.Component);
    e.default = r
});
//# sourceMappingURL=ProductOfferInstalmentPriceTooltipComponent.js.map