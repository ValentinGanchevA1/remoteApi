define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "../../selectors", "eshop/modules/cart/selectors", "../../actions/app", "eshop/modules/cart/actions/cart"], function(e, t, o, n, s, r, l, a, i) {
    "use strict";

    function c(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), n = babelHelpers.interopRequireDefault(n);
    var u = function(e) {
            babelHelpers.inherits(r, e);
            var t = c(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "onClose",
                value: function() {
                    this.props.dismiss()
                }
            }, {
                key: "onRemoveAllFromCart",
                value: function() {
                    this.props.sapReservationNumber && 0 !== this.props.sapReservationNumber.length ? this.props.cancelOrderWithRedirect() : this.props.removeFromCartAndRedirect()
                }
            }, {
                key: "onCloseModal",
                value: function() {
                    this.props.closeCimConsistentErrorModal()
                }
            }, {
                key: "renderInfo",
                value: function() {
                    return o.default.createElement("span", null, o.default.createElement("span", null, this.props.errors && 0 < this.props.errors.length ? this.props.textInfo : ""))
                }
            }, {
                key: "render",
                value: function() {
                    return o.default.createElement(n.default, {
                        showClose: !0,
                        open: this.props.errors && 0 < this.props.errors.length,
                        onClose: this.onClose.bind(this),
                        size: "medium",
                        id: "cim-consistent-error-modal"
                    }, o.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, o.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.renderInfo()))), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-4 large-offset-by-4"
                    }, o.default.createElement(s.OraButton, {
                        onClick: this.onRemoveAllFromCart.bind(this),
                        className: "u-w-100"
                    }, "Usuń koszyk")), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-small-spacing"
                    }, o.default.createElement(s.OraButton, {
                        onClick: this.onCloseModal.bind(this),
                        className: "u-w-100",
                        type: "secondary"
                    }, "Dalej"))))
                }
            }]), r
        }(o.Component),
        d = (0, t.connect)(function(e) {
            return {
                errors: (0, r.getCimConsistentCheckoutErrors)(e),
                sapReservationNumber: (0, r.getSapReservationNumber)(e)
            }
        }, function(e) {
            return {
                dismiss: function() {
                    return e((0, a.dismissBackendValidationErrors)())
                },
                action: function() {
                    return e((0, a.gotoCartSummary)())
                },
                cancelOrderWithRedirect: function() {
                    return e((0, a.cancelOrderWithRedirect)())
                },
                closeCimConsistentErrorModal: function() {
                    return e((0, a.closeCimConsistentErrorModal)())
                },
                removeFromCartAndRedirect: function() {
                    return e((0, i.removeFromCartAndRedirect)())
                }
            }
        })(u);
    e.default = d
});
//# sourceMappingURL=CimCartConsistentErrorModal.js.map