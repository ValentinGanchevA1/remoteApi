define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "../../core/components/hoc/LabeledInput"], function(_exports, _react, _reactRedux, _OraCommonComponents, _LabeledInput) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);

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

    var SingleInputModalContent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(SingleInputModalContent, _Component);

        var _super = _createSuper(SingleInputModalContent);

        function SingleInputModalContent() {
            babelHelpers.classCallCheck(this, SingleInputModalContent);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(SingleInputModalContent, [{
            key: "onButtonClick",
            value: function onButtonClick(event) {
                this.props.onButtonClick(event);
            }
        }, {
            key: "setInputValue",
            value: function setInputValue(_ref) {
                var id = _ref.id,
                    name = _ref.name,
                    value = _ref.value;
                this.props.setInputValue({
                    id: id,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "getPropsForInput",
            value: function getPropsForInput() {
                return {
                    id: this.props.id,
                    name: this.props.id,
                    type: "text",
                    labelType: "floating",
                    label: this.props.inputPlaceHolder,
                    mask: this.props.mask,
                    placeholder: this.props.placeholder,
                    value: this.props.inputValue || "",
                    errors: !!this.props.error && Object.keys(this.props.error).length > 0 ? [this.props.error] : [],
                    autoComplete: false,
                    errorWrapperClassName: "u-spacing-l",
                    onChange: this.setInputValue.bind(this),
                    valid: !!this.props.error && Object.keys(this.props.error).length > 0 ? false : undefined,
                    validateEmpty: false,
                    showMaskOnHover: true
                };
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("h1", {
                    className: "u-font-standard u-no-margin u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "h3"
                }, this.props.modalHeader)), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "u-padding-l"
                }, this.props.modalMainText), /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, this.getPropsForInput()), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "primary",
                    size: "medium",
                    onClick: this.onButtonClick.bind(this),
                    className: "u-w-100"
                }, this.props.modalBtnText));
            }
        }]);
        return SingleInputModalContent;
    }(_react.Component);

    var _default = SingleInputModalContent;
    _exports.default = _default;
});
//# sourceMappingURL=SingleInputModalContent.js.map