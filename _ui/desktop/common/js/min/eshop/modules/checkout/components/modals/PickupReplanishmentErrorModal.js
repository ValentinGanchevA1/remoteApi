define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "eshop/modules/checkout/selectors", "eshop/modules/cart/selectors", "../../actions/app"], function(e, t, n, a, r, l, o, s) {
    "use strict";

    function i(n) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), a = babelHelpers.interopRequireDefault(a);
    var c = function(e) {
            babelHelpers.inherits(l, e);
            var t = i(l);

            function l() {
                return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
            }
            return babelHelpers.createClass(l, [{
                key: "onClose",
                value: function() {
                    this.props.dismiss()
                }
            }, {
                key: "renderInfo",
                value: function() {
                    return n.default.createElement("div", {
                        className: "opl-cms"
                    }, n.default.createElement("p", {
                        className: "u-font-bold"
                    }, "Niestety zamówiony przez Ciebie sprzęt nie jest dostępny w wybranym salonie."), n.default.createElement("ul", null, n.default.createElement("li", null, "Możesz zmienić salon do obioru sprzętu"), n.default.createElement("li", null, "Możesz wrócić do koszyka i zmienić swój wybór"), n.default.createElement("li", null, "Możesz kontynuować zamówienie i poczekać kilka dni, aż zamówienie zostanie skompletowane w wybranym salonie")))
                }
            }, {
                key: "confirmReplanishment",
                value: function() {
                    this.props.confirm()
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement(a.default, {
                        showClose: !0,
                        open: this.props.errors && 0 < this.props.errors.length,
                        onClose: this.onClose.bind(this),
                        size: "medium"
                    }, n.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, n.default.createElement("div", {
                        className: "l-row u-letter-spacing-xs"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, n.default.createElement("h4", null, "Zamówienie nr " + this.props.cartCode + " wymaga zatowarowania"))), n.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.renderInfo())), n.default.createElement("div", {
                        className: "l-row u-padding-top-m u-padding-m u-padding-left u-padding-right"
                    }, n.default.createElement("hr", null)), n.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, this.props.dismiss ? n.default.createElement("div", {
                        className: "u-small-hide l-col l-col-medium-2 l-col-3 u-spacing-m u-spacing-top-m"
                    }, n.default.createElement(r.OraButton, {
                        type: "text",
                        onClick: this.props.dismiss
                    }, "Zmień salon")) : null, this.props.goToCart ? n.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-5 u-spacing-m u-text-right"
                    }, n.default.createElement(r.OraButton, {
                        type: "secondary",
                        onClick: this.props.goToCart
                    }, "Wróć do koszyka")) : null, this.props.confirm ? n.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 u-text-right u-spacing-m"
                    }, n.default.createElement(r.OraButton, {
                        onClick: this.confirmReplanishment.bind(this)
                    }, "Kontynuuj zamówienie")) : null, this.props.dismiss ? n.default.createElement("div", {
                        className: "u-large-hide u-medium-hide l-col l-col-small-12 u-spacing-m"
                    }, n.default.createElement(r.OraButton, {
                        type: "text",
                        onClick: this.props.dismiss
                    }, "Zmień salon")) : null)))
                }
            }]), l
        }(n.Component),
        u = (0, t.connect)(function(e) {
            return {
                errors: (0, l.getPickupReplanishmentRequiredErrors)(e),
                cartCode: (0, o.getCartCode)(e)
            }
        }, function(e) {
            return {
                dismiss: function() {
                    return e((0, s.dismissBackendValidationErrors)())
                },
                goToCart: function() {
                    return e((0, s.gotoCartSummary)())
                },
                confirm: function() {
                    return e((0, s.confirmReplanishment)())
                }
            }
        })(c);
    e.default = u
});
//# sourceMappingURL=PickupReplanishmentErrorModal.js.map