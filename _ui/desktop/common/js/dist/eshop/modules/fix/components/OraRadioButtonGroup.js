define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents"], function(_exports, _react, _reactRedux, _OraCommonComponents) {
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

    var OraRadioButton = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(OraRadioButton, _Component);

        var _super = _createSuper(OraRadioButton);

        function OraRadioButton() {
            babelHelpers.classCallCheck(this, OraRadioButton);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(OraRadioButton, [{
            key: "handleChange",
            value: function handleChange(event) {
                this.props.onChange(event);
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraInput, {
                    type: "radio",
                    name: this.props.name,
                    checked: this.props.selectedValue === this.props.value,
                    value: this.props.value,
                    onChange: this.props.onValueChange.bind(this)
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.text));
            }
        }]);
        return OraRadioButton;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {};
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {};
    };

    var _default = OraRadioButton;
    _exports.default = _default;
});
//# sourceMappingURL=OraRadioButtonGroup.js.map