define(["exports", "react", "prop-types", "./Portal", "eshop/modules/core/utils/ui"], function(t, r, e, n, o) {
    "use strict";

    function l(r) {
        return function() {
            var t, e = babelHelpers.getPrototypeOf(r);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (t) {
                        return
                    }
                }()) {
                var o = babelHelpers.getPrototypeOf(this).constructor;
                t = Reflect.construct(e, arguments, o)
            } else t = e.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, r = babelHelpers.interopRequireWildcard(r), e = babelHelpers.interopRequireDefault(e), n = babelHelpers.interopRequireDefault(n);
    var i = 0,
        s = function(t) {
            babelHelpers.inherits(o, t);
            var e = l(o);

            function o(t) {
                return babelHelpers.classCallCheck(this, o), e.call(this, t)
            }
            return babelHelpers.createClass(o, [{
                key: "componentWillMount",
                value: function() {
                    var t = this.props.id ? this.props.id : i++;
                    this.tooltipId = "react-tooltip-" + t, this.triggerId = "react-tooltip-" + t + "-trigger", this.contentClass = "react-tooltip-" + t + "-content"
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.loadModule()
                }
            }, {
                key: "loadModule",
                value: function() {
                    this.props.maxWidth && this.props.maxWidth
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    OPL.UI.stopModules(this.ref)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return r.default.createElement("div", {
                        id: "tooltip-container_" + this.tooltipId,
                        className: this.props.className
                    }, r.default.createElement("div", {
                        id: "tooltip-container-" + this.tooltipId,
                        ref: function(t) {
                            return e.ref = t
                        },
                        className: "u-inline"
                    }, this.props.children, r.default.createElement(n.default, {
                        portalId: this.tooltipId,
                        portalClassName: "u-hide--soft o-tooltip__content " + this.contentClass,
                        role: "tooltip",
                        getDestinationNode: function() {
                            return document.getElementsByClassName(e.contentClass)[0]
                        }
                    }, this.props.tooltipContent)))
                }
            }]), o
        }(r.Component);
    s.propTypes = {
        open: e.default.bool
    }, s.defaultProps = {};
    var a = s;
    t.default = a
});
//# sourceMappingURL=NoTriggerTooltip.js.map