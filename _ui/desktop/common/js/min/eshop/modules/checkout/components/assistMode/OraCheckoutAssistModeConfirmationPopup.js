define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal"], function(e, o, r, n) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), n = babelHelpers.interopRequireDefault(n);
    var t = function(e) {
        babelHelpers.inherits(l, e);
        var t = s(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return o.default.createElement(n.default, {
                    id: this.props.id,
                    size: "narrow",
                    open: this.props.open,
                    showClose: !1,
                    escapeClose: !1,
                    clickClose: !1
                }, o.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, o.default.createElement("div", {
                    className: "l-row"
                }, o.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this.props.descriptions.messageText)), o.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, o.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, o.default.createElement(r.OraButton, {
                    className: "u-w-100",
                    type: "secondary",
                    onClick: this.props.onReject.bind(this)
                }, this.props.descriptions.noButtonText)), o.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 "
                }, o.default.createElement(r.OraButton, {
                    className: "u-w-100",
                    onClick: this.props.onConfirm.bind(this)
                }, this.props.descriptions.yesButtonText)))))
            }
        }]), l
    }(o.Component);
    (e.default = t).defaultProps = {
        open: !1,
        onConfirm: function() {},
        onReject: function() {}
    }
});
//# sourceMappingURL=OraCheckoutAssistModeConfirmationPopup.js.map