define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal"], function(e, n, l, r) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), r = babelHelpers.interopRequireDefault(r);
    var t = function(e) {
        babelHelpers.inherits(o, e);
        var t = a(o);

        function o(e) {
            return babelHelpers.classCallCheck(this, o), t.call(this, e)
        }
        return babelHelpers.createClass(o, [{
            key: "render",
            value: function() {
                return n.default.createElement(r.default, {
                    id: this.props.id,
                    open: this.props.openPopup,
                    narrow: !0,
                    showClose: !1
                }, n.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, n.default.createElement("div", {
                    className: "l-row u-spacing-top-l",
                    hidden: !(this.props.reservation && this.props.reservation.paymentStatus && this.props.showWarning)
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.props.cancelOrderWarning, n.default.createElement(l.OraButton, {
                    className: "g-green3-c",
                    type: "text",
                    size: "small",
                    modal: !1,
                    onClick: this.props.onCorrectiveInvoiceButtonClick
                }, this.props.cancelOrderWarningLink), ".")), n.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.props.cancelOrderQuestion, " ", this.props.autoClose)), n.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, n.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, n.default.createElement(l.OraButton, {
                    className: "u-w-100",
                    type: "secondary",
                    modal: this.props.autoClose,
                    onClick: this.handleClosePopup.bind(this)
                }, this.props.noButtonText)), n.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 "
                }, n.default.createElement(l.OraButton, {
                    className: "u-w-100 g-green3-bg",
                    type: "primary",
                    modal: this.props.autoClose,
                    onClick: this.handleOnConfirm.bind(this)
                }, this.props.yesButtonText)))))
            }
        }, {
            key: "handleClosePopup",
            value: function() {
                this.props.onClose(!1)
            }
        }, {
            key: "handleOnConfirm",
            value: function() {
                this.props.onClose(!1), this.props.onConfirm()
            }
        }, {
            key: "openInNewWindow",
            value: function(e) {
                window.open(e, "_blank", "toolbar=0,location=0,menubar=0,fullscreen=yes")
            }
        }]), o
    }(n.Component);
    (e.default = t).defaultProps = {
        cancelOrderWarning: "Chcesz anulować zamówienie, które opłacił Klient. Pamiętaj aby dokonać korekty tego zamówienia. Przejdź do Fiori klikając ten ",
        cancelOrderWarningLink: "link",
        cancelOrderQuestion: "Czy na pewno chcesz anulować zamówienie?",
        orderPayed: !1,
        autoClose: !0,
        onConfirm: function() {},
        onReject: function() {},
        onCorrectiveInvoiceButtonClick: function() {},
        noButtonText: "Nie",
        yesButtonText: "Tak",
        openPopup: !1,
        showWarning: !0
    }
});
//# sourceMappingURL=MulticartCancelOrderPopup.js.map