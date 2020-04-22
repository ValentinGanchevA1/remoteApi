define(["exports", "react", "prop-types", "eshop/modules/core/components/ui/Tooltip", "eshop/modules/core/components/ui/OraHtmlText"], function(e, r, t, n, o) {
    "use strict";

    function u(r) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n), o = babelHelpers.interopRequireDefault(o);
    var l = function(e) {
        babelHelpers.inherits(l, e);
        var t = u(l);

        function l() {
            return babelHelpers.classCallCheck(this, l), t.apply(this, arguments)
        }
        return babelHelpers.createClass(l, [{
            key: "render",
            value: function() {
                return r.default.createElement("div", null, r.default.createElement("p", {
                    className: "u-font-bold u-font-small"
                }, r.default.createElement(o.default, null, this.props.label), this.props.tooltip && r.default.createElement(n.default, null, r.default.createElement(o.default, null, this.props.tooltip))))
            }
        }]), l
    }(r.Component);
    (e.default = l).propTypes = {
        label: t.default.string,
        tooltip: t.default.string
    }
});
//# sourceMappingURL=InfoWithTooltip.js.map