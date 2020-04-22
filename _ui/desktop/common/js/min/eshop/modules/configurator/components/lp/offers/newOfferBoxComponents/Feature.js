define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml"], function(e, t, s) {
    "use strict";

    function o(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.Feature = void 0, t = babelHelpers.interopRequireWildcard(t), s = babelHelpers.interopRequireDefault(s);
    var r = function(e) {
        babelHelpers.inherits(r, e);
        var t = o(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var t = this;
                if (0 !== this.props.feature.processes.length && !this.props.feature.processes.find(function(e) {
                        return e === t.props.processType
                    }) || this.props.feature.clientContext && this.props.convergence !== this.props.feature.clientContext) return null;
                this.props.feature.value;
                var e = this.props.removeClassFromLast && this.props.length - 1 === this.props.index ? "" : this.props.className;
                return s.default.conditionalRenderWithClassName(this.props.feature.value, e)
            }
        }]), r
    }(t.Component);
    e.Feature = r
});
//# sourceMappingURL=Feature.js.map