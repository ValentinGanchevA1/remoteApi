define(["exports", "react", "react-redux", "../selectors", "eshop/modules/checkout/components/ScrollableComponent"], function(e, n, t, r, o) {
    "use strict";

    function s(o) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n);
    var l = function(e) {
        babelHelpers.inherits(r, e);
        var t = s(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "componentDidMount",
            value: function() {
                babelHelpers.get(babelHelpers.getPrototypeOf(r.prototype), "componentDidMount", this).call(this)
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                babelHelpers.get(babelHelpers.getPrototypeOf(r.prototype), "componentWillUpdate", this).call(this)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                babelHelpers.get(babelHelpers.getPrototypeOf(r.prototype), "componentDidUpdate", this).call(this)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                babelHelpers.get(babelHelpers.getPrototypeOf(r.prototype), "componentWillUnmount", this).call(this)
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.props.show && this.props.errorList && this.props.errorList.find(function(e) {
                        return t.props.messageType === e.type
                    });
                if (!e) return n.default.createElement("div", {
                    className: "VALIDATION_COMPONENT" + this.state.no
                });
                var r = "g-icon--" + this.props.iconType,
                    o = this.props.messageText || e.message;
                return n.default.createElement("div", {
                    className: "o-icon-text g-icon  g-icon--before g-icon--xs-s g-redf-c u-padding-top-s  " + r + " VALIDATION_COMPONENT" + this.state.no + this.props.className,
                    ref: "errorDiv"
                }, n.default.createElement("p", {
                    className: "o-icon-text__text u-font-bold opl-msg--error opl-msg--error-anchor " + (this.props.scrollToParent && "opl-msg-scrollToParent"),
                    "data-scroll-offset": this.props.scrollOffset
                }, o))
            }
        }]), r
    }((o = babelHelpers.interopRequireDefault(o)).default);
    l.defaultProps = {
        show: !0,
        className: "",
        scrollOffset: 0,
        iconType: "error"
    };
    var a = (0, t.connect)(function(e) {
        return {
            errorList: (0, r.getFrontValidationMsg)(e),
            isDeliveryAndPaymentStep: (0, r.getDeliveryAndPaymentStep)(e)
        }
    }, function() {
        return {}
    })(l);
    e.default = a
});
//# sourceMappingURL=MulticartValidationComponent.js.map