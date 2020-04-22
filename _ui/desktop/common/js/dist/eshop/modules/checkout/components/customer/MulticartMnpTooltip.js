define(["exports", "react", "prop-types", "eshop/modules/core/utils/ui"], function(_exports, _react, _propTypes, _ui) {
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

    var MulticartMnpTooltip = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartMnpTooltip, _Component);

        var _super = _createSuper(MulticartMnpTooltip);

        function MulticartMnpTooltip(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartMnpTooltip);
            _this = _super.call(this, props);
            _this.loaded = false;
            return _this;
        }

        babelHelpers.createClass(MulticartMnpTooltip, [{
            key: "load",
            value: function load() {
                if (this.refs.tooltip) {
                    (0, _ui.loadModule)(this.refs.tooltip, {
                        path: "core/modules/tooltips",
                        options: {
                            triggerSelector: '.o-tooltip__trigger',
                            contentSelector: '.o-tooltip__content',
                            triggerEvent: 'mouseover',
                            maxWidth: 500
                        }
                    });
                    this.loaded = true;
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.load();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (!this.loaded) {
                    this.load();
                } else {
                    if (this.refs.tooltip) {
                        OPL.UI.initModules(this.refs.mainElement);
                    } else {
                        this.loaded = false;
                    }
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                OPL.UI.stopModules(this.refs.mainElement);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    ref: "mainElement",
                    className: this.props.className
                }, this.props.content && /*#__PURE__*/ _react.default.createElement("span", {
                    ref: "tooltip"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: this.props.tooltipClassName
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-tooltip__content"
                }, this.props.content)));
            }
        }]);
        return MulticartMnpTooltip;
    }(_react.Component);

    _exports.default = MulticartMnpTooltip;
    MulticartMnpTooltip.defaultProps = {
        tooltipClassName: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs-s u-spacing-left-s",
        content: "def: No tooltip content defined"
    };
    MulticartMnpTooltip.propTypes = {
        tooltipClassName: _propTypes.default.string.isRequired,
        content: _propTypes.default.string.isRequired
    };
});
//# sourceMappingURL=MulticartMnpTooltip.js.map