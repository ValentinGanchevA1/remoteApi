define(["exports", "react", "eshop/components/OraCommonComponents"], function(e, r, l) {
    "use strict";

    function a(r) {
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
    var t = function(e) {
        babelHelpers.inherits(n, e);
        var t = a(n);

        function n() {
            return babelHelpers.classCallCheck(this, n), t.apply(this, arguments)
        }
        return babelHelpers.createClass(n, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", {
                    className: "opl-console"
                }, r.default.createElement("div", {
                    className: "u-spacing-left-l"
                }, r.default.createElement("div", {
                    className: "l-row"
                }, r.default.createElement("span", {
                    className: "kss-icon-preview g-icon g-icon--only g-icon--valid g-greenf-c"
                }), r.default.createElement("span", {
                    className: "u-spacing-left-l"
                }, this.props.description)), r.default.createElement("div", {
                    className: "l-row u-spacing-top-l u-spacing-bottom-l"
                }, r.default.createElement(l.OraButton, {
                    modal: !1,
                    type: "text",
                    size: "medium",
                    onClick: this.props.reset
                }, "Zweryfikuj inny numer"))))
            }
        }]), n
    }((r = babelHelpers.interopRequireDefault(r)).default.Component);
    e.default = t
});
//# sourceMappingURL=MsisdnPositiveVerificationComponent.js.map