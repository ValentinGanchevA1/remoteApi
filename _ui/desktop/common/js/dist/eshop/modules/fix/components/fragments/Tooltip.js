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

    var tooltipId = 0;

    var Tooltip = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Tooltip, _Component);

        var _super = _createSuper(Tooltip);

        function Tooltip(props) {
            var _this;

            babelHelpers.classCallCheck(this, Tooltip);
            _this = _super.call(this, props);
            babelHelpers.defineProperty(babelHelpers.assertThisInitialized(_this), "state", {
                tooltipId: _this.props.tooltipId || tooltipId++
            });
            return _this;
        }

        babelHelpers.createClass(Tooltip, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadModule();
            }
        }, {
            key: "loadModule",
            value: function loadModule() {
                var options = {
                    mouseoverMinWidth: 0,
                    triggerEvent: "mouseover"
                };

                if (this.props.maxWidth !== undefined) {
                    options.maxWidth = this.props.maxWidth;
                }

                OPL.UI.loadModules(document.getElementById("tooltip-container-" + this.state.tooltipId), [{
                    path: "core/modules/tooltips",
                    options: options
                }]);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("span", {
                    id: "tooltip-container-" + this.state.tooltipId
                }, this.props.children);
            }
        }]);
        return Tooltip;
    }(_react.Component);

    var _default = Tooltip;
    _exports.default = _default;
});
//# sourceMappingURL=Tooltip.js.map