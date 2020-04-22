define(["exports", "react", "prop-types", "eshop/utils/OnlineUtils"], function(t, o, e, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, o = babelHelpers.interopRequireWildcard(o), e = babelHelpers.interopRequireDefault(e), i = babelHelpers.interopRequireDefault(i);
    var l = "TOOLTIP-ID-PLACEHOLDER",
        n = function() {
            function e(t) {
                babelHelpers.classCallCheck(this, e), this.html = t
            }
            return babelHelpers.createClass(e, [{
                key: "componentDidMountHandler",
                value: function() {
                    this.hasTooltip() && OPL.UI.loadModules(document.getElementById(this.tooltipId()), [{
                        path: "core/modules/tooltips",
                        options: {
                            mouseoverMinWidth: 0,
                            triggerEvent: "mouseover"
                        }
                    }])
                }
            }, {
                key: "componentWillUnmountHandler",
                value: function() {
                    if (this.hasTooltip()) {
                        var t = document.getElementById(this.tooltipContainerId());
                        OPL.UI.stopModules(t)
                    }
                }
            }, {
                key: "tooltipId",
                value: function() {
                    return void 0 === this.tooltipIdValue && (this.tooltipIdValue = i.default.generateUniqeHtmlId("tooltipInitializer_")), this.tooltipIdValue
                }
            }, {
                key: "tooltipContainerId",
                value: function() {
                    return this.tooltipId() + "-container"
                }
            }, {
                key: "hasTooltip",
                value: function() {
                    return this.html && 0 <= this.html.indexOf(l)
                }
            }, {
                key: "htmlWithTooltipId",
                value: function() {
                    var t = this.html;
                    return this.hasTooltip() && (t = t.replace(l, this.tooltipId())), t
                }
            }, {
                key: "render",
                value: function() {
                    var t = {
                        __html: this.htmlWithTooltipId()
                    };
                    return o.default.createElement("div", {
                        id: this.tooltipContainerId(),
                        dangerouslySetInnerHTML: t
                    })
                }
            }]), e
        }();
    t.default = n
});
//# sourceMappingURL=TooltipInitializer.js.map