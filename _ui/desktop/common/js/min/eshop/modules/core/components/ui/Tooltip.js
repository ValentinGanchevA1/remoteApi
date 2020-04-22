define(["exports", "react", "prop-types"], function(t, n, e) {
    "use strict";

    function l(i) {
        return function() {
            var t, e = babelHelpers.getPrototypeOf(i);
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
    }), t.default = void 0, n = babelHelpers.interopRequireWildcard(n), e = babelHelpers.interopRequireDefault(e), window.tooltipId = null != window.tooltipId ? window.tooltipId + 1 : 1;
    var o = function(t) {
        babelHelpers.inherits(i, t);
        var o = l(i);

        function i(t) {
            var e;
            return babelHelpers.classCallCheck(this, i), e = o.call(this, t), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(e), "onClick", function(t) {
                t.preventDefault()
            }), e
        }
        return babelHelpers.createClass(i, [{
            key: "stopModule",
            value: function() {
                OPL.UI.stopModules(this.refWrapper)
            }
        }, {
            key: "componentWillMount",
            value: function() {
                var t = this.props.baseId && this.props.baseId + "_" + window.tooltipId++ || window.tooltipId++,
                    e = this.props.id || t;
                this.tooltipId = "rTip-" + t, this.triggerId = "rTip-" + e + "-trigger", this.contentClass = "rTip-" + e + "-content"
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.loadModule()
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                this.stopModule()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.loadModule()
            }
        }, {
            key: "loadModule",
            value: function() {
                OPL.UI.loadModules(this.refContainer, [{
                    path: "core/modules/tooltips",
                    options: {
                        triggerSelector: ".o-tooltip__trigger",
                        contentSelector: ".o-tooltip__content",
                        maxWidth: this.props.maxWidth,
                        triggerEvent: "hover",
                        side: "top"
                    }
                }])
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.stopModule()
            }
        }, {
            key: "renderContent",
            value: function() {
                return "string" != typeof this.props.children ? n.default.createElement("div", {
                    id: this.tooltipId,
                    className: "u-hide--soft o-tooltip__content " + this.contentClass,
                    role: "tooltip"
                }, this.props.children) : n.default.createElement("div", {
                    id: this.tooltipId,
                    className: "u-hide--soft o-tooltip__content " + this.contentClass,
                    role: "tooltip",
                    dangerouslySetInnerHTML: {
                        __html: this.props.children
                    }
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return this.props.labelSpan ? n.default.createElement("span", {
                    className: this.props.className,
                    id: "tooltip-container_wrapper_" + this.tooltipId,
                    ref: function(t) {
                        return e.refWrapper = t
                    },
                    onClick: this.onClick
                }, n.default.createElement("span", {
                    className: "u-inline",
                    id: "tooltip-container-" + this.tooltipId,
                    ref: function(t) {
                        return e.refContainer = t
                    }
                }, n.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger   tooltipstered "
                }, this.props.labelSpan), this.renderContent())) : n.default.createElement("div", {
                    className: this.props.className,
                    id: "tooltip-container_wrapper_" + this.tooltipId,
                    ref: function(t) {
                        return e.refWrapper = t
                    },
                    onClick: this.onClick
                }, n.default.createElement("div", {
                    className: "u-inline",
                    id: "tooltip-container-" + this.tooltipId,
                    ref: function(t) {
                        return e.refContainer = t
                    }
                }, !!this.props.labelBlock && n.default.createElement("div", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger   tooltipstered "
                }, this.props.labelBlock), !this.props.labelBlock && [this.props.label, n.default.createElement("a", {
                    key: "link",
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top g-black1-c tooltipstered " + this.props.iconClassName
                }, n.default.createElement("span", {
                    className: "g-icon g-icon--font g-icon--hint u-padding-left-s"
                }))], this.renderContent()))
            }
        }]), i
    }(n.Component);
    o.propTypes = {
        open: e.default.bool,
        className: e.default.string,
        iconClassName: e.default.string,
        maxWidth: e.default.oneOfType([e.default.string, e.default.number]),
        label: e.default.node
    }, o.defaultProps = {
        className: "u-inline-block",
        iconClassName: "",
        maxWidth: "300"
    };
    var i = o;
    t.default = i
});
//# sourceMappingURL=Tooltip.js.map