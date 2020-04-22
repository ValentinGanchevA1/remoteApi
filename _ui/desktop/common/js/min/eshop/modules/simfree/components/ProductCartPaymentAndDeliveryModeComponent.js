define(["exports", "react", "react-redux", "eshop/modules/simfree/selectors", "eshop/modules/simfree/actions/app"], function(e, r, t, n, l) {
    "use strict";

    function o(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var i = function(e) {
            babelHelpers.inherits(n, e);
            var t = o(n);

            function n(e) {
                return babelHelpers.classCallCheck(this, n), t.call(this, e)
            }
            return babelHelpers.createClass(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.setDeliveryAndPaymentComponentUid(this.props.uid), this.props.fetchDeliveryAndPaymentHtml(this.props.uid)
                }
            }, {
                key: "toHTML",
                value: function(e) {
                    return {
                        __html: e
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return r.default.createElement("div", {
                        className: "delivery-payment-method"
                    }, "POS" !== this.props.channels.sales && null != this.props.deliveryAndPaymentHtml && "" !== this.props.deliveryAndPaymentHtml && r.default.createElement("div", {
                        dangerouslySetInnerHTML: this.toHTML(this.props.deliveryAndPaymentHtml)
                    }))
                }
            }]), n
        }((r = babelHelpers.interopRequireDefault(r)).default.Component),
        s = (0, t.connect)(function(e) {
            return {
                deliveryAndPaymentHtml: (0, n.getDeliveryAndPaymentHtml)(e)
            }
        }, function(t) {
            return {
                setDeliveryAndPaymentComponentUid: function(e) {
                    return t((0, l.setDeliveryAndPaymentComponentUid)(e))
                },
                fetchDeliveryAndPaymentHtml: function(e) {
                    return t((0, l.fetchDeliveryAndPaymentHtml)(e))
                }
            }
        })(i);
    e.default = s
});
//# sourceMappingURL=ProductCartPaymentAndDeliveryModeComponent.js.map