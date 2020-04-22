define(["exports", "react", "prop-types", "jquery", "../../../components/OraCommonComponents", "../../core/components/hoc/ErrorRow", "./OraFloatingLabelWrapper"], function(_exports, _react, _propTypes, _jquery, _OraCommonComponents, _ErrorRow, _OraFloatingLabelWrapper) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    _ErrorRow = babelHelpers.interopRequireDefault(_ErrorRow);
    _OraFloatingLabelWrapper = babelHelpers.interopRequireDefault(_OraFloatingLabelWrapper);

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

    var InputWithFloatingLabel = /*#__PURE__*/ function(_PureComponent) {
        babelHelpers.inherits(InputWithFloatingLabel, _PureComponent);

        var _super = _createSuper(InputWithFloatingLabel);

        function InputWithFloatingLabel(props) {
            var _this;

            babelHelpers.classCallCheck(this, InputWithFloatingLabel);
            _this = _super.call(this, props);
            _this.state = {
                validationOnMount: !!props.value || !!props.errors && props.errors.length > 0,
                isFocused: false
            };
            return _this;
        }

        babelHelpers.createClass(InputWithFloatingLabel, [{
            key: "componentWillUpdate",
            value: function componentWillUpdate(nextProps) {
                if (this.state.validationOnMount) {
                    var hasErrors = !!nextProps.errors;
                    var hadErrors = !!this.props.errors;

                    if (hasErrors ^ hadErrors) {
                        this.setState({
                            validationOnMount: false
                        });
                    } else if (this.props.value !== nextProps.value) {
                        this.setState({
                            validationOnMount: false
                        });
                    }
                }
            }
        }, {
            key: "onFocus",
            value: function onFocus() {
                this.setState({
                    isFocused: true
                });
            }
        }, {
            key: "onBlur",
            value: function onBlur(event) {
                if (this.props.onBlur) this.props.onBlur(event);
                this.setState({
                    isFocused: false
                });
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                var inputClassName = this.props.customInputClass ? this.props.customInputClass : "";
                var markClassName = 'o-validation-mark';
                var errorsFilled = !!this.props.errors;
                var showValidation = this.props.showValidation && (errorsFilled || this.state.validationOnMount || !!this.props.value);

                if (showValidation) {
                    if (this.props.valid === true) {
                        inputClassName += " success";
                        markClassName += " o-validation-mark--success ";
                    } else if (this.props.valid === false && !this.state.isFocused) {
                        inputClassName += " error";
                        markClassName += "  o-validation-mark--error ";
                    }
                }

                var showErrorRow = this.props.showErrors && errorsFilled;
                return /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    showErrors: showErrorRow,
                    errors: this.props.errors
                }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelWrapper.default, {
                    autoComplete: this.props.autocomplete,
                    maximumWidth: true,
                    overrideClass: this.props.overrideClass
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraInput, {
                    autocomplete: this.props.autocomplete,
                    autocompleteUrl: this.props.autocompleteUrl,
                    ref: function ref(_ref) {
                        return _this2.ref = _ref;
                    },
                    type: "text",
                    id: this.props.id,
                    value: this.props.value,
                    required: this.props.required,
                    onChange: this.props.onChange,
                    disabled: this.props.autoSelect || this.props.disabled,
                    onBlur: this.onBlur.bind(this),
                    className: inputClassName,
                    onFocus: this.onFocus.bind(this),
                    focusOnMount: this.props.focusOnMount,
                    onPick: this.props.onPick,
                    browserAutocomplete: this.props.browserAutocomplete || this.props.id + "no_autocomplete",
                    name: this.props.name || this.props.id + "_no_autocomplete",
                    onKeyUp: this.props.onKeyUp
                }), this.props.showValidation && /*#__PURE__*/ _react.default.createElement("span", {
                    className: markClassName
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLabel, {
                    htmlFor: this.props.id,
                    className: "label o-floating-label__placeholder o-floating-label__p-2"
                }, this.props.placeholder), this.props.children));
            }
        }]);
        return InputWithFloatingLabel;
    }(_react.PureComponent);

    babelHelpers.defineProperty(InputWithFloatingLabel, "propTypes", {
        id: _propTypes.default.string,
        value: _propTypes.default.string,
        placeholder: _propTypes.default.string,
        required: _propTypes.default.bool,
        disabled: _propTypes.default.bool,
        autocomplete: _propTypes.default.bool,
        autocompleteUrl: _propTypes.default.string,
        onChange: _propTypes.default.func,
        onSelect: _propTypes.default.func,
        children: _propTypes.default.any,
        overrideClass: _propTypes.default.string,
        showValidation: _propTypes.default.bool,
        valid: _propTypes.default.bool,
        showErrors: _propTypes.default.bool,
        customInputClass: _propTypes.default.string,
        autoSelect: _propTypes.default.bool
    });
    babelHelpers.defineProperty(InputWithFloatingLabel, "defaultProps", {
        required: false,
        disabled: false,
        autocomplete: false,
        showValidation: false,
        showErrors: false,
        customInputClass: ""
    });
    var _default = InputWithFloatingLabel;
    _exports.default = _default;
});
//# sourceMappingURL=InputWithFloatingLabel.js.map