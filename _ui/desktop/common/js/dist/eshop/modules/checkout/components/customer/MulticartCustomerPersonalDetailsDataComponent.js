define(["exports", "react", "eshop/modules/core/components/hoc/LabeledInput", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../../utils/utils"], function(_exports, _react, _LabeledInput, _reactRedux, _selectors, _app, _data, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartCustomerPersonalDetailsView = void 0;
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

    var MulticartCustomerPersonalDetailsView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCustomerPersonalDetailsView, _Component);

        var _super = _createSuper(MulticartCustomerPersonalDetailsView);

        function MulticartCustomerPersonalDetailsView() {
            babelHelpers.classCallCheck(this, MulticartCustomerPersonalDetailsView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartCustomerPersonalDetailsView, [{
            key: "getPropsForInput",
            value: function getPropsForInput(name) {
                return {
                    name: name,
                    defaultValue: this.props[name] || "",
                    errors: this.props.errors && this.props.errors[name],
                    onBlur: this.props.changeCustomerDataFormField
                };
            }
        }, {
            key: "getInputValidationParams",
            value: function getInputValidationParams(name) {
                var validationDisabled = (0, _utils.isFieldDisabledForValidation)(this.props, name);
                var disabled = (0, _utils.isFieldDisabled)(this.props, name);
                var params = {
                    disabled: disabled
                };
                var valid = this.props.errors === undefined && this.props[name] !== null && this.props[name].length > 0 ? true : this.props.errors && this.props.errors[name] && this.props.errors[name].length === 0;

                if (!disabled || !validationDisabled && !valid) {
                    params.valid = valid;
                }

                return params;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.requestCartCustomerData();
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({
                    key: "firstName"
                }, this.getPropsForInput("firstName"), {
                    label: this.props.descriptions.firstName
                }, this.getInputValidationParams("firstName"), {
                    labelType: "floating",
                    maxLength: "255",
                    virtualKeyboard: true
                })), /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({
                    key: "lastName"
                }, this.getPropsForInput("lastName"), {
                    label: this.props.descriptions.lastName
                }, this.getInputValidationParams("lastName"), {
                    labelType: "floating",
                    className: "u-spacing-top-l",
                    maxLength: "255",
                    virtualKeyboard: true
                })));
            }
        }]);
        return MulticartCustomerPersonalDetailsView;
    }(_react.Component);

    _exports.MulticartCustomerPersonalDetailsView = MulticartCustomerPersonalDetailsView;
    MulticartCustomerPersonalDetailsView.propTypes = {
        firstName: _react.PropTypes.string,
        lastName: _react.PropTypes.string,
        readOnly: _react.PropTypes.bool,
        requestCartCustomerData: _react.PropTypes.func,
        changeCustomerDataFormField: _react.PropTypes.func
    };
    var MulticartCustomerPersonalDetailsDataComponent = (0, _reactRedux.connect)(_selectors.getCustomerDataForm, {
        changeCustomerDataFormField: _app.changeCustomerDataFormField,
        requestCartCustomerData: _data.requestCartCustomerData
    })(MulticartCustomerPersonalDetailsView);
    var _default = MulticartCustomerPersonalDetailsDataComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartCustomerPersonalDetailsDataComponent.js.map