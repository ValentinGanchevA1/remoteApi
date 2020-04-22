define(["exports", "react-redux", "lodash", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "../../selectors", "../../actions/app", "../../../configurator/utils"], function(e, r, o, l, s, n, t, a, c) {
    "use strict";

    function i(o) {
        return function() {
            var e, r = babelHelpers.getPrototypeOf(o);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(r, arguments, t)
            } else e = r.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), l = babelHelpers.interopRequireWildcard(l), n = babelHelpers.interopRequireDefault(n);
    var u = function(e) {
            babelHelpers.inherits(t, e);
            var r = i(t);

            function t(e) {
                return babelHelpers.classCallCheck(this, t), r.call(this, e)
            }
            return babelHelpers.createClass(t, [{
                key: "checkOpenModal",
                value: function() {
                    return this.props.errors && 0 < this.props.errors.length
                }
            }, {
                key: "getErrorMessage",
                value: function() {
                    var e = this.props.descriptions[this.props.errors[0]];
                    return o.default.isNil(e) ? this.props.errors[0] : e
                }
            }, {
                key: "renderError",
                value: function() {
                    var e = this.getErrorMessage();
                    return (0, c.isHtml)(e) ? l.default.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: e
                        }
                    }) : l.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, l.default.createElement("div", {
                        className: "l-row u-letter-spacing-xs"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, l.default.createElement("h4", null, e)), l.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 medium-offset-by-8 large-offset-by-8 u-text-right"
                    }, l.default.createElement(s.OraButton, {
                        onClick: this.props.clearErrors.bind(this),
                        className: "u-w-100 "
                    }, this.props.descriptions.confirmationButton))))
                }
            }, {
                key: "render",
                value: function() {
                    return l.default.createElement(n.default, {
                        id: "add-to-cart-error",
                        showClose: !0,
                        open: this.checkOpenModal(),
                        onClose: this.props.clearErrors.bind(this),
                        size: "narrow",
                        clickClose: !1
                    }, this.renderError())
                }
            }]), t
        }(l.Component),
        p = (0, r.connect)(function(e) {
            return {
                errors: (0, t.getProcessErrors)(e)
            }
        }, function(e) {
            return {
                clearErrors: function() {
                    return e((0, a.clearErrors)())
                }
            }
        })(u);
    e.default = p
});
//# sourceMappingURL=MulticartAddToCartErrorComponent.js.map