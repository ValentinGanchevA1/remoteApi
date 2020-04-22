define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "../../selectors", "eshop/modules/cart/selectors", "../../actions/app"], function(e, t, o, s, r, n, l, i) {
    "use strict";

    function a(o) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), s = babelHelpers.interopRequireDefault(s);
    var c = function(e) {
            babelHelpers.inherits(r, e);
            var t = a(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "onClose",
                value: function() {
                    this.props.dismiss()
                }
            }, {
                key: "renderInfo",
                value: function() {
                    return o.default.createElement("span", null, this.props.errors && 0 < this.props.errors.length ? this.props.textInfo.replace("$1", this.props.errors[0].peselFromCheckout).replace("$2", this.props.errors[0].peselFromSession) : "")
                }
            }, {
                key: "render",
                value: function() {
                    return o.default.createElement(s.default, {
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
                    }, this.renderInfo()))))
                }
            }]), r
        }(o.Component),
        u = (0, t.connect)(function(e) {
            return {
                errors: (0, n.getCimConsistentCheckoutErrors)(e)
            }
        }, function(e) {
            return {
                dismiss: function() {
                    return e((0, i.dismissBackendValidationErrors)())
                },
                action: function() {
                    return e((0, i.gotoCartSummary)())
                }
            }
        })(c);
    e.default = u
});
//# sourceMappingURL=CimConsistentErrorModal.js.map