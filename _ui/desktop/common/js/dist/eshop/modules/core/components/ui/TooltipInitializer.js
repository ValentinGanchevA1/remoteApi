define(["exports", "react", "prop-types", "eshop/utils/OnlineUtils"], function(_exports, _react, _propTypes, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    var tooltipPlaceholder = "TOOLTIP-ID-PLACEHOLDER";

    var TooltipInitializer = /*#__PURE__*/ function() {
        function TooltipInitializer(html) {
            babelHelpers.classCallCheck(this, TooltipInitializer);
            this.html = html;
        }

        babelHelpers.createClass(TooltipInitializer, [{
            key: "componentDidMountHandler",
            value: function componentDidMountHandler() {
                if (this.hasTooltip()) {
                    OPL.UI.loadModules(document.getElementById(this.tooltipId()), [{
                        path: 'core/modules/tooltips',
                        options: {
                            "mouseoverMinWidth": 0,
                            "triggerEvent": "mouseover"
                        }
                    }]);
                }
            }
        }, {
            key: "componentWillUnmountHandler",
            value: function componentWillUnmountHandler() {
                if (this.hasTooltip()) {
                    var tContainer = document.getElementById(this.tooltipContainerId());
                    OPL.UI.stopModules(tContainer);
                }
            }
        }, {
            key: "tooltipId",
            value: function tooltipId() {
                if (this.tooltipIdValue === undefined) this.tooltipIdValue = _OnlineUtils.default.generateUniqeHtmlId("tooltipInitializer_");
                return this.tooltipIdValue;
            }
        }, {
            key: "tooltipContainerId",
            value: function tooltipContainerId() {
                return this.tooltipId() + '-container';
            }
        }, {
            key: "hasTooltip",
            value: function hasTooltip() {
                return this.html && this.html.indexOf(tooltipPlaceholder) >= 0;
            }
        }, {
            key: "htmlWithTooltipId",
            value: function htmlWithTooltipId() {
                var value = this.html;

                if (this.hasTooltip()) {
                    value = value.replace(tooltipPlaceholder, this.tooltipId());
                }

                return value;
            }
        }, {
            key: "render",
            value: function render() {
                var innerHtmlForValue = {
                    __html: this.htmlWithTooltipId()
                };
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: this.tooltipContainerId(),
                    dangerouslySetInnerHTML: innerHtmlForValue
                });
            }
        }]);
        return TooltipInitializer;
    }();

    _exports.default = TooltipInitializer;
});
//# sourceMappingURL=TooltipInitializer.js.map