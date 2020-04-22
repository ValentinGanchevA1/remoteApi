define(["exports", "react", "prop-types"], function(_exports, _react, _propTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);

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

    window.tooltipId = window.tooltipId != undefined ? window.tooltipId + 1 : 1;

    var OraTooltip = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraTooltip, _Component);

        var _super = _createSuper(OraTooltip);

        function OraTooltip(props) {
            var _this;

            babelHelpers.classCallCheck(this, OraTooltip);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "onClick", function(event) {
                console.warn("tooltip prevent", event);
                event.preventDefault();
            });
            return _this;
        }

        babelHelpers.createClass(OraTooltip, [{
            key: "stopModule",
            value: function stopModule() {
                OPL.UI.stopModules(this.refWrapper);
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                var baseId = this.props.baseId && this.props.baseId + "_" + window.tooltipId++ || window.tooltipId++;
                var id = this.props.id || baseId;
                this.tooltipId = "rTip-" + baseId;
                this.triggerId = "rTip-" + id + "-trigger";
                this.contentClass = "rTip-" + id + "-content";
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadModule();
            }
        }, {
            key: "componentWillUpdate",
            value: function componentWillUpdate() {
                this.stopModule();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadModule();
            }
        }, {
            key: "loadModule",
            value: function loadModule() {
                OPL.UI.loadModules(this.refContainer, [{
                    path: "core/modules/tooltips",
                    options: {
                        triggerSelector: ".o-tooltip__trigger",
                        contentSelector: ".o-tooltip__content",
                        maxWidth: this.props.maxWidth,
                        triggerEvent: "hover",
                        side: "top"
                    }
                }]);
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.stopModule();
            }
        }, {
            key: "renderContent",
            value: function renderContent() {
                var children = this.props.children;

                if (typeof children != "string") {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: this.tooltipId,
                        className: "u-hide--soft o-tooltip__content " + this.contentClass,
                        role: "tooltip"
                    }, this.props.children);
                } else {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        id: this.tooltipId,
                        className: "u-hide--soft o-tooltip__content " + this.contentClass,
                        role: "tooltip",
                        dangerouslySetInnerHTML: {
                            __html: this.props.children
                        }
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                if (this.props.labelSpan) return /*#__PURE__*/ _react.default.createElement("span", {
                    className: this.props.className,
                    id: "tooltip-container_wrapper_" + this.tooltipId,
                    ref: function ref(_ref2) {
                        return _this2.refWrapper = _ref2;
                    },
                    onClick: this.onClick
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-inline",
                    id: "tooltip-container-" + this.tooltipId,
                    ref: function ref(_ref) {
                        return _this2.refContainer = _ref;
                    }
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger   tooltipstered "
                }, this.props.labelSpan), this.renderContent()));
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: this.props.className,
                    id: "tooltip-container_wrapper_" + this.tooltipId,
                    ref: function ref(_ref4) {
                        return _this2.refWrapper = _ref4;
                    },
                    onClick: this.onClick
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-inline",
                    id: "tooltip-container-" + this.tooltipId,
                    ref: function ref(_ref3) {
                        return _this2.refContainer = _ref3;
                    }
                }, !!this.props.labelBlock && /*#__PURE__*/ _react.default.createElement("div", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger   tooltipstered "
                }, this.props.labelBlock), !!!this.props.labelBlock && [this.props.label, /*#__PURE__*/ _react.default.createElement("a", {
                    key: "link",
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top g-black1-c tooltipstered " + this.props.iconClassName
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--font g-icon--hint u-padding-left-s"
                }))], this.renderContent()));
            }
        }]);
        return OraTooltip;
    }(_react.Component);

    OraTooltip.propTypes = {
        open: _propTypes.default.bool,
        className: _propTypes.default.string,
        iconClassName: _propTypes.default.string,
        maxWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
        label: _propTypes.default.node
    };
    OraTooltip.defaultProps = {
        className: "u-inline-block",
        iconClassName: "",
        maxWidth: "300"
    };
    var _default = OraTooltip;
    _exports.default = _default;
});
//# sourceMappingURL=Tooltip.js.map