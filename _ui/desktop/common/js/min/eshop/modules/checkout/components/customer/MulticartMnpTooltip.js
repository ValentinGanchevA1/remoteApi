define(["exports", "react", "prop-types", "eshop/modules/core/utils/ui"], function(e, t, o, l) {
    "use strict";

    function r(n) {
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
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), o = babelHelpers.interopRequireDefault(o);
    var n = function(e) {
        babelHelpers.inherits(n, e);
        var o = r(n);

        function n(e) {
            var t;
            return babelHelpers.classCallCheck(this, n), (t = o.call(this, e)).loaded = !1, t
        }
        return babelHelpers.createClass(n, [{
            key: "load",
            value: function() {
                this.refs.tooltip && ((0, l.loadModule)(this.refs.tooltip, {
                    path: "core/modules/tooltips",
                    options: {
                        triggerSelector: ".o-tooltip__trigger",
                        contentSelector: ".o-tooltip__content",
                        triggerEvent: "mouseover",
                        maxWidth: 500
                    }
                }), this.loaded = !0)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.load()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.loaded ? this.refs.tooltip ? OPL.UI.initModules(this.refs.mainElement) : this.loaded = !1 : this.load()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                OPL.UI.stopModules(this.refs.mainElement)
            }
        }, {
            key: "render",
            value: function() {
                return t.default.createElement("div", {
                    ref: "mainElement",
                    className: this.props.className
                }, this.props.content && t.default.createElement("span", {
                    ref: "tooltip"
                }, t.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: this.props.tooltipClassName
                }), t.default.createElement("span", {
                    className: "o-tooltip__content"
                }, this.props.content)))
            }
        }]), n
    }(t.Component);
    (e.default = n).defaultProps = {
        tooltipClassName: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs-s u-spacing-left-s",
        content: "def: No tooltip content defined"
    }, n.propTypes = {
        tooltipClassName: o.default.string.isRequired,
        content: o.default.string.isRequired
    }
});
//# sourceMappingURL=MulticartMnpTooltip.js.map