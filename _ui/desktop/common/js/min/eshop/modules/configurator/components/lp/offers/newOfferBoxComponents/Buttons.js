define(["exports", "react"], function(e, r) {
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
    }), e.Buttons = void 0;
    var t = function(e) {
        babelHelpers.inherits(n, e);
        var t = o(n);

        function n() {
            return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
        }
        return babelHelpers.createClass(n, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", null, r.default.createElement("button", {
                    hidden: this.props.pickDeviceShouldBeHidden,
                    onClick: this.props.pickDeviceAction,
                    className: this.props.pickDeviceShouldBeHidden ? "" : "opl-btn opl-btn--medium opl-btn--primary u-spacing-l o-btn u-block u-w-100"
                }, this.props.labels.pickDevice), r.default.createElement("button", {
                    disabled: this.props.disabled,
                    onClick: this.props.selectOfferNoPhoneAction,
                    className: "opl-btn opl-btn--medium o-btn u-block u-w-100 u-no-padding-l u-no-padding-r"
                }, this.props.labels.selectOffer))
            }
        }]), n
    }((r = babelHelpers.interopRequireWildcard(r)).Component);
    e.Buttons = t
});
//# sourceMappingURL=Buttons.js.map