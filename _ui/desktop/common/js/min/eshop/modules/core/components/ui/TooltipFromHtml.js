define(["exports", "react", "eshop/utils/OnlineUtils"], function(t, r, o) {
    "use strict";

    function n(n) {
        return function() {
            var t, e = babelHelpers.getPrototypeOf(n);
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
    }), t.default = void 0, r = babelHelpers.interopRequireWildcard(r), o = babelHelpers.interopRequireDefault(o);
    var l = "TOOLTIP-ID-PLACEHOLDER",
        e = function(t) {
            babelHelpers.inherits(i, t);
            var e = n(i);

            function i() {
                return babelHelpers.classCallCheck(this, i), e.apply(this, arguments)
            }
            return babelHelpers.createClass(i, [{
                key: "loadModule",
                value: function(t) {
                    OPL.UI.loadModules(t, [{
                        path: "core/modules/tooltips",
                        options: {
                            mouseoverMinWidth: 0,
                            triggerEvent: "mouseover",
                            maxWidth: this.props.width
                        }
                    }])
                }
            }, {
                key: "stopModule",
                value: function(t) {
                    OPL.UI.stopModules(t)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.hasTooltip() && this.loadModule(document.getElementById(this.tooltipId()))
                }
            }, {
                key: "componentWillUpdate",
                value: function() {
                    if (this.hasTooltip()) {
                        var t = document.getElementById(this.tooltipContainerId());
                        this.stopModule(t)
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.hasTooltip() && this.loadModule(document.getElementById(this.tooltipId()))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    if (this.hasTooltip()) {
                        var t = document.getElementById(this.tooltipContainerId());
                        OPL.UI.stopModules(t)
                    }
                }
            }, {
                key: "hasTooltip",
                value: function() {
                    return i.hasTooltip(this.props.html)
                }
            }, {
                key: "tooltipId",
                value: function() {
                    return void 0 === this.tooltipIdValue && (this.tooltipIdValue = o.default.generateUniqeHtmlId("tooltipFromHtml_")), this.tooltipIdValue
                }
            }, {
                key: "tooltipContainerId",
                value: function() {
                    return this.tooltipId() + "-container"
                }
            }, {
                key: "htmlWithTooltipId",
                value: function() {
                    var t = this.props.html;
                    return this.hasTooltip() && (t = t.replace(l, this.tooltipId())), t
                }
            }, {
                key: "render",
                value: function() {
                    if (this.hasTooltip()) {
                        var t = {
                            __html: this.htmlWithTooltipId()
                        };
                        return r.default.createElement("div", {
                            className: this.props.className,
                            id: this.tooltipContainerId(),
                            dangerouslySetInnerHTML: t
                        })
                    }
                    var e = {
                        __html: this.props.html
                    };
                    return r.default.createElement("p", {
                        className: this.props.className,
                        dangerouslySetInnerHTML: e
                    })
                }
            }], [{
                key: "hasTooltip",
                value: function(t) {
                    return t && 0 <= t.indexOf(l)
                }
            }, {
                key: "conditionalRender",
                value: function(t, e) {
                    var o = 1 < arguments.length && void 0 !== e ? e : 300;
                    if (t = i.formatDescriptionValue(t), i.hasTooltip(t)) return r.default.createElement(i, {
                        html: t,
                        width: o
                    });
                    var n = {
                        __html: t
                    };
                    return r.default.createElement("p", {
                        dangerouslySetInnerHTML: n
                    })
                }
            }, {
                key: "conditionalRenderWithClassName",
                value: function(t, e, o) {
                    var n = 2 < arguments.length && void 0 !== o ? o : 300;
                    if (i.hasTooltip(t)) return r.default.createElement(i, {
                        className: e,
                        html: t,
                        width: n
                    });
                    var l = {
                        __html: t
                    };
                    return r.default.createElement("p", {
                        className: e,
                        dangerouslySetInnerHTML: l
                    })
                }
            }, {
                key: "formatDescriptionValue",
                value: function(t) {
                    return "string" == typeof t ? t.replace(/\\n/g, "<br>") : t
                }
            }]), i
        }(r.Component);
    t.default = e
});
//# sourceMappingURL=TooltipFromHtml.js.map