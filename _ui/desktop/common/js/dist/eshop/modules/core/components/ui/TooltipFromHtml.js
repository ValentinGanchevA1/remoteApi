define(["exports", "react", "eshop/utils/OnlineUtils"], function(_exports, _react, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var tooltipPlaceholder = "TOOLTIP-ID-PLACEHOLDER";

    var TooltipFromHtml = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(TooltipFromHtml, _Component);

        var _super = _createSuper(TooltipFromHtml);

        function TooltipFromHtml() {
            babelHelpers.classCallCheck(this, TooltipFromHtml);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(TooltipFromHtml, [{
            key: "loadModule",
            value: function loadModule(element) {
                OPL.UI.loadModules(element, [{
                    path: "core/modules/tooltips",
                    options: {
                        "mouseoverMinWidth": 0,
                        "triggerEvent": "mouseover",
                        "maxWidth": this.props.width
                    }
                }]);
            }
        }, {
            key: "stopModule",
            value: function stopModule(element) {
                OPL.UI.stopModules(element);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                if (this.hasTooltip()) {
                    this.loadModule(document.getElementById(this.tooltipId()));
                }
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                if (this.hasTooltip()) {
                    var tContainer = document.getElementById(this.tooltipContainerId());
                    this.stopModule(tContainer);
                }
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.hasTooltip()) {
                    this.loadModule(document.getElementById(this.tooltipId()));
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                if (this.hasTooltip()) {
                    var tContainer = document.getElementById(this.tooltipContainerId());
                    OPL.UI.stopModules(tContainer);
                }
            }
        }, {
            key: "hasTooltip",
            value: function hasTooltip() {
                return TooltipFromHtml.hasTooltip(this.props.html);
            }
        }, {
            key: "tooltipId",
            value: function tooltipId() {
                if (this.tooltipIdValue === undefined) this.tooltipIdValue = _OnlineUtils.default.generateUniqeHtmlId("tooltipFromHtml_");
                return this.tooltipIdValue;
            }
        }, {
            key: "tooltipContainerId",
            value: function tooltipContainerId() {
                return this.tooltipId() + "-container";
            }
        }, {
            key: "htmlWithTooltipId",
            value: function htmlWithTooltipId() {
                var value = this.props.html;

                if (this.hasTooltip()) {
                    value = value.replace(tooltipPlaceholder, this.tooltipId());
                }

                return value;
            }
        }, {
            key: "render",
            value: function render() {
                if (this.hasTooltip()) {
                    var innerHtmlForValue = {
                        __html: this.htmlWithTooltipId()
                    };
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: this.props.className,
                        id: this.tooltipContainerId(),
                        dangerouslySetInnerHTML: innerHtmlForValue
                    });
                } else {
                    var _innerHtmlForValue = {
                        __html: this.props.html
                    };
                    return /*#__PURE__*/ _react.default.createElement("p", {
                        className: this.props.className,
                        dangerouslySetInnerHTML: _innerHtmlForValue
                    });
                }
            }
        }], [{
            key: "hasTooltip",
            value: function hasTooltip(html) {
                return html && html.indexOf(tooltipPlaceholder) >= 0;
            }
        }, {
            key: "conditionalRender",
            value: function conditionalRender(value) {
                var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
                value = TooltipFromHtml.formatDescriptionValue(value);

                if (TooltipFromHtml.hasTooltip(value)) {
                    return /*#__PURE__*/ _react.default.createElement(TooltipFromHtml, {
                        html: value,
                        width: width
                    });
                } else {
                    var innerHtmlForValue = {
                        __html: value
                    };
                    return /*#__PURE__*/ _react.default.createElement("p", {
                        dangerouslySetInnerHTML: innerHtmlForValue
                    });
                }
            }
        }, {
            key: "conditionalRenderWithClassName",
            value: function conditionalRenderWithClassName(value, className) {
                var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

                if (TooltipFromHtml.hasTooltip(value)) {
                    return /*#__PURE__*/ _react.default.createElement(TooltipFromHtml, {
                        className: className,
                        html: value,
                        width: width
                    });
                } else {
                    var innerHtmlForValue = {
                        __html: value
                    };
                    return /*#__PURE__*/ _react.default.createElement("p", {
                        className: className,
                        dangerouslySetInnerHTML: innerHtmlForValue
                    });
                }
            }
        }, {
            key: "formatDescriptionValue",
            value: function formatDescriptionValue(value) {
                if (typeof value === "string") {
                    return value.replace(/\\n/g, "<br>");
                }

                return value;
            }
        }]);
        return TooltipFromHtml;
    }(_react.Component);

    var _default = TooltipFromHtml;
    _exports.default = _default;
});
//# sourceMappingURL=TooltipFromHtml.js.map