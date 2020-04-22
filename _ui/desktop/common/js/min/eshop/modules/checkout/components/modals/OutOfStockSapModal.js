define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "../../selectors", "eshop/modules/cart/selectors", "../../actions/app"], function(e, t, a, r, n, l, o, s) {
    "use strict";

    function c(a) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), r = babelHelpers.interopRequireDefault(r);
    var i = function(e) {
            babelHelpers.inherits(l, e);
            var t = c(l);

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
                    return a.default.createElement("span", null, "Niektóre z zamówionych produktów nie są już dostępne.", a.default.createElement("br", null), " Możesz wrócić do koszyka i zmienić swój wybór, albo poczekać kilka dni, aż produkt będzie znowu dostępny.", a.default.createElement("br", null), " Koszyk zostanie zapisany i będzie można do niego wrócić.")
                }
            }, {
                key: "render",
                value: function() {
                    return a.default.createElement(r.default, {
                        showClose: !0,
                        open: this.props.errors && 0 < this.props.errors.length,
                        onClose: this.onClose.bind(this),
                        size: "medium"
                    }, a.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, a.default.createElement("div", {
                        className: "l-row u-letter-spacing-xs"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, a.default.createElement("h4", null, "Zamówienie nr " + this.props.cartCode + " nie może być zrealizowane"))), a.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.renderInfo())), a.default.createElement("div", {
                        className: "l-row u-spacing-top-xl"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, a.default.createElement("h5", null, "Nie możesz zamówić")), a.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, a.default.createElement("div", {
                        className: "l-row"
                    }, a.default.createElement("div", {
                        className: "l-col l-col-3 l-col-small-12 l-col-medium-4"
                    }, a.default.createElement("span", null, "Zamawiane urządzenie")), a.default.createElement("div", {
                        className: "l-col l-col-9 l-col-small-12 l-col-medium-8"
                    }, a.default.createElement("span", {
                        className: "u-font-bold"
                    }, this.props.errors.map(function(e, t) {
                        return e.description
                    })))))), a.default.createElement("div", {
                        className: "l-row u-padding-top-m u-padding-m u-padding-left u-padding-right"
                    }, a.default.createElement("hr", null)), a.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, this.props.action ? a.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 medium-offset-by-8 large-offset-by-8 u-text-right"
                    }, a.default.createElement(n.OraButton, {
                        onClick: this.props.action,
                        className: "u-w-100 "
                    }, "Wróć do koszyka")) : null)))
                }
            }]), l
        }(a.Component),
        u = (0, t.connect)(function(e) {
            return {
                errors: (0, l.getOutOfStockCheckoutErrors)(e),
                cartCode: (0, o.getCartCode)(e)
            }
        }, function(e) {
            return {
                dismiss: function() {
                    return e((0, s.dismissBackendValidationErrors)())
                },
                action: function() {
                    return e((0, s.gotoCartSummary)())
                }
            }
        })(i);
    e.default = u
});
//# sourceMappingURL=OutOfStockSapModal.js.map