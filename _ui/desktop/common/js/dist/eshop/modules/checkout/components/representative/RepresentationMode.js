define(["exports", "react", "eshop/components/OraCommonComponents"], function(_exports, _react, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var RepresentationMode = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(RepresentationMode, _Component);

        var _super = _createSuper(RepresentationMode);

        function RepresentationMode(props) {
            babelHelpers.classCallCheck(this, RepresentationMode);
            return _super.call(this, props);
        }

        babelHelpers.createClass(RepresentationMode, [{
            key: "defaultMode",
            value: function defaultMode() {
                if (this.props.defaultMode && this.props.options.map(function(o) {
                        return o.value;
                    }).indexOf(this.props.defaultMode) > -1) {
                    return this.props.defaultMode;
                } else {
                    return this.props.options[0].value;
                }
            }
        }, {
            key: "getConfigForMode",
            value: function getConfigForMode(mode) {
                return this.props.modesConfig.filter(function(c) {
                    return c.mode == mode;
                })[0];
            }
        }, {
            key: "reset",
            value: function reset() {
                var defaultMode = this.defaultMode();
                this.props.onChange(defaultMode, this.getConfigForMode(defaultMode));
            }
        }, {
            key: "componentWillMount",
            value: function componentWillMount() {
                this.reset();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (this.props.options.map(function(o) {
                        return o.value;
                    }).indexOf(this.props.selected) == -1) {
                    this.reset();
                }
            }
        }, {
            key: "getPropsForSelect",
            value: function getPropsForSelect(name) {
                return {
                    name: name,
                    id: name,
                    onChange: this.onSelectChange.bind(this),
                    withEmptyOption: false,
                    label: "Forma reprezentacji",
                    disabled: false,
                    className: "u-w-100",
                    value: this.props.selected
                };
            }
        }, {
            key: "onSelectChange",
            value: function onSelectChange(event) {
                this.props.onChange(event.value, this.getConfigForMode(event.value));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraFloatingSelect, babelHelpers.extends({}, this.getPropsForSelect('representationMode'), {
                    options: this.props.options
                }));
            }
        }]);
        return RepresentationMode;
    }(_react.Component);

    _exports.default = RepresentationMode;
});
//# sourceMappingURL=RepresentationMode.js.map