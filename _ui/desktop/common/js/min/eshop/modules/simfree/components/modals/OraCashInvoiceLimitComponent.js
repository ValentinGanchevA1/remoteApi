define(["exports", "react-redux", "react", "eshop/components/OraCommonComponents", "eshop/modules/simfree/actions/app", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/Modal", "jquery"], function(e, t, r, i, n, s, a, o) {
    "use strict";

    function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, o)
        }
        return n
    }

    function p(o) {
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
                var n = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, n)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), s = babelHelpers.interopRequireDefault(s), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o);
    var c = function(e) {
            babelHelpers.inherits(o, e);
            var n = p(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = n.call(this, e)).state = {
                    showModal: !1
                }, t.open = t.open.bind(babelHelpers.assertThisInitialized(t)), t.onClose = t.onClose.bind(babelHelpers.assertThisInitialized(t)), t.openData = {}, t
            }
            return babelHelpers.createClass(o, [{
                key: "open",
                value: function(e) {
                    this.openData = e, this.setState({
                        showModal: !0
                    })
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    o.openPopupInternal = this.open, this.props.isCheckRequired && this.props.configuration && (this.props.setCashInvoiceLimit(this.props.configuration.maxInvoiceValue), this.props.setCartInvoiceValue(this.props.cartInvoiceValue))
                }
            }, {
                key: "onClose",
                value: function() {
                    this.setState({
                        showModal: !1
                    })
                }
            }, {
                key: "genericPopupProps",
                value: function() {
                    return function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? l(Object(n), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, n[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            })
                        }
                        return t
                    }({}, s.default.extractObject(this.props.descriptions, "label.popup."), {
                        content: this.props.configuration.addToCartWarningMessage
                    }, this.openData)
                }
            }, {
                key: "render",
                value: function() {
                    return r.default.createElement(a.default, {
                        id: "max-invoice-value-limit-popup",
                        size: "narrow",
                        escapeClose: !0,
                        showClose: !0,
                        clickClose: !0,
                        open: this.state.showModal,
                        onClose: this.onClose
                    }, r.default.createElement(i.GenericPopup, babelHelpers.extends({
                        id: "max-invoice-value-limit-in-popup"
                    }, this.genericPopupProps())))
                }
            }], [{
                key: "openPopup",
                value: function(e) {
                    o.openPopupInternal(e)
                }
            }]), o
        }(r.Component),
        u = (0, t.connect)(function() {
            return {}
        }, function(t) {
            return {
                setCashInvoiceLimit: function(e) {
                    return t((0, n.setCashInvoiceLimit)(e))
                },
                setCartInvoiceValue: function(e) {
                    return t((0, n.setCartInvoiceValue)(e))
                }
            }
        })(c);
    e.default = u
});
//# sourceMappingURL=OraCashInvoiceLimitComponent.js.map