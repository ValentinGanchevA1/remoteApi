define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "../../selectors", "../../actions/app"], function(e, t, s, n, r, o) {
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), n = babelHelpers.interopRequireDefault(n);
    var l = function(e) {
            babelHelpers.inherits(r, e);
            var t = i(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "onClose",
                value: function() {
                    this.props.dismiss()
                }
            }, {
                key: "getText",
                value: function() {
                    return void 0 !== this.props.isB2B && this.props.descriptions.textInfoB2C && this.props.descriptions.textInfoB2B ? this.props.isB2B ? this.props.descriptions.textInfoB2B : this.props.descriptions.textInfoB2C : this.props.textInfo
                }
            }, {
                key: "renderInfo",
                value: function() {
                    return s.default.createElement("span", null, this.getText())
                }
            }, {
                key: "render",
                value: function() {
                    return s.default.createElement(n.default, {
                        showClose: !0,
                        open: this.props.errors && 0 < this.props.errors.length,
                        onClose: this.onClose.bind(this),
                        size: "medium",
                        id: "search-need-customer-modal"
                    }, s.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, s.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.renderInfo()))))
                }
            }]), r
        }(s.Component),
        c = (0, t.connect)(function(e) {
            return {
                errors: (0, r.getNeedSearchCheckoutErrors)(e),
                isB2B: (0, r.isBusinessClient)(e)
            }
        }, function(e) {
            return {
                dismiss: function() {
                    return e((0, o.dismissBackendValidationErrors)())
                },
                action: function() {
                    return e((0, o.gotoCartSummary)())
                }
            }
        })(l);
    e.default = c
});
//# sourceMappingURL=SearchNeedModal.js.map