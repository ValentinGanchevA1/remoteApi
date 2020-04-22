define(["exports", "react", "prop-types"], function(e, t, r) {
    "use strict";

    function n(o) {
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
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), r = babelHelpers.interopRequireDefault(r);
    var i = 0,
        o = function(e) {
            babelHelpers.inherits(o, e);
            var r = n(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), t = r.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "state", {
                    tooltipId: t.props.tooltipId || i++
                }), t
            }
            return babelHelpers.createClass(o, [{
                key: "componentDidMount",
                value: function() {
                    this.loadModule()
                }
            }, {
                key: "loadModule",
                value: function() {
                    var e = {
                        mouseoverMinWidth: 0,
                        triggerEvent: "mouseover"
                    };
                    void 0 !== this.props.maxWidth && (e.maxWidth = this.props.maxWidth), OPL.UI.loadModules(document.getElementById("tooltip-container-" + this.state.tooltipId), [{
                        path: "core/modules/tooltips",
                        options: e
                    }])
                }
            }, {
                key: "render",
                value: function() {
                    return t.default.createElement("span", {
                        id: "tooltip-container-" + this.state.tooltipId
                    }, this.props.children)
                }
            }]), o
        }(t.Component);
    e.default = o
});
//# sourceMappingURL=Tooltip.js.map