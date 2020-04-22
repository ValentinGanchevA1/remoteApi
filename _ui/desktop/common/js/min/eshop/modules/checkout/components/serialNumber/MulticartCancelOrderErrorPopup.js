define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal"], function(e, o, l, n) {
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
    }), e.default = e.MulticartCancelOrderErrorPopup = void 0, o = babelHelpers.interopRequireWildcard(o), n = babelHelpers.interopRequireDefault(n);
    var t = function(e) {
        babelHelpers.inherits(r, e);
        var t = a(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                return o.default.createElement(n.default, {
                    id: this.props.id,
                    open: this.props.reservation.cancelOrderError,
                    narrow: !0,
                    showClose: !1
                }, o.default.createElement("div", {
                    className: "l-page-row u-font-bold"
                }, o.default.createElement("div", {
                    className: "l-row"
                }, o.default.createElement("div", {
                    className: "l-col l-col-12"
                }, o.default.createElement("div", {
                    className: "o-icon-text g-icon g-icon--error g-icon--before g-icon--xs-s g-redf-c"
                }, o.default.createElement("p", {
                    className: "o-icon-text__text g-black1-c"
                }, "Anulowanie zamówienia nie powiodło się.")))), o.default.createElement("div", {
                    className: "l-row u-spacing-top-l"
                }, o.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-4 large-offset-by-4"
                }, o.default.createElement(l.OraButton, {
                    className: "u-w-100",
                    type: "secondary",
                    modal: this.props.autoClose,
                    onClick: this.props.onConfirm
                }, this.props.okButtonText)))))
            }
        }]), r
    }(o.Component);
    (e.MulticartCancelOrderErrorPopup = t).defaultProps = {
        autoClose: !0,
        onConfirm: function() {},
        okButtonText: "OK"
    };
    var r = t;
    e.default = r
});
//# sourceMappingURL=MulticartCancelOrderErrorPopup.js.map