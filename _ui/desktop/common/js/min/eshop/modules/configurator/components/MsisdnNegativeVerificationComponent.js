define(["exports", "react", "eshop/components/OraCommonComponents", "../../checkout/components/serialNumber/MulticartCancelOrderPopup"], function(e, t, r, s) {
    "use strict";

    function a(n) {
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
                var o = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, o)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), s = babelHelpers.interopRequireDefault(s);
    var o = function(e) {
        babelHelpers.inherits(n, e);
        var o = a(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = o.call(this, e)).state = {
                openConfirmModal: !1
            }, t
        }
        return babelHelpers.createClass(n, [{
            key: "removeByOmniCode",
            value: function() {
                this.setState({
                    openConfirmModal: !1
                }), this.props.removeCartByOmni(this.props.cartToRemove)
            }
        }, {
            key: "openCancelOrderPopup",
            value: function() {
                this.setState({
                    openConfirmModal: !0
                })
            }
        }, {
            key: "onConfirmModalClose",
            value: function() {
                this.setState({
                    openConfirmModal: !1
                })
            }
        }, {
            key: "render",
            value: function() {
                return t.default.createElement("div", {
                    className: "opl-console"
                }, t.default.createElement("div", {
                    className: "u-spacing-left-l"
                }, t.default.createElement(r.OraMessage, {
                    type: "error",
                    className: "g-redf-c"
                }, " ", t.default.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: this.props.description
                    }
                })), t.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-spacing-bottom-l"
                }, t.default.createElement(r.OraButton, {
                    modal: !1,
                    type: "text",
                    size: "medium",
                    onClick: this.props.reset
                }, "Zweryfikuj inny numer")), this.props.cartToRemove && t.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-spacing-bottom-l"
                }, t.default.createElement(r.OraButton, {
                    modal: !1,
                    type: "text",
                    size: "medium",
                    onClick: this.openCancelOrderPopup.bind(this)
                }, "Usuń koszyk"))), t.default.createElement(s.default, babelHelpers.extends({}, this.props, {
                    cancelOrderQuestion: "Czy na pewno chcesz usunąć istniejący koszyk dla msisdn: " + this.props.msisdn + " ?",
                    onConfirm: this.removeByOmniCode.bind(this),
                    onClose: this.onConfirmModalClose.bind(this),
                    openPopup: this.state.openConfirmModal,
                    id: "remove-order-cart-popup"
                })))
            }
        }]), n
    }(t.default.Component);
    e.default = o
});
//# sourceMappingURL=MsisdnNegativeVerificationComponent.js.map