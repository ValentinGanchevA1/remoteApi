define(["exports", "react", "prop-types", "eshop/modules/core/components/hoc/LabeledInput", "react-redux", "../../selectors", "../../actions/app", "../../../cbs/actions/cbs", "../../actions/data", "eshop/components/OraFloatingLabelSelect", "../../utils/utils", "../datepicker/DatePickerByDocumentTypeComponent"], function(_exports, _react, _propTypes, _LabeledInput, _reactRedux, _selectors, _app, _cbs, _data, _OraFloatingLabelSelect, _utils, _DatePickerByDocumentTypeComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartCustomerDetailsView = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);
    _DatePickerByDocumentTypeComponent = babelHelpers.interopRequireDefault(_DatePickerByDocumentTypeComponent);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

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

    var MulticartCustomerDetailsView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCustomerDetailsView, _Component);

        var _super = _createSuper(MulticartCustomerDetailsView);

        function MulticartCustomerDetailsView(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartCustomerDetailsView);
            _this = _super.call(this, props);

            _this.props.setCountries(_this.props.foreignCountries);

            return _this;
        }

        babelHelpers.createClass(MulticartCustomerDetailsView, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.requestCartCustomerData();
            }
        }, {
            key: "getPropsForPesel",
            value: function getPropsForPesel(name) {
                return _objectSpread({}, (0, _utils.getPropsForInput)(name, this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations), {
                    errors: !this.props.noPesel && this.props.errors && this.props.errors[name],
                    mask: '99999999999',
                    placeholder: '___________'
                });
            }
        }, {
            key: "getPropsForCensoredPesel",
            value: function getPropsForCensoredPesel(name) {
                return _objectSpread({}, (0, _utils.getPropsForInput)(name, this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations), {
                    valid: undefined
                });
            }
        }, {
            key: "getPropsForId",
            value: function getPropsForId(name, withMask) {
                var props = _objectSpread({}, (0, _utils.getPropsForInput)(name, this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations));

                if (withMask) {
                    props.mask = 'aaa999999';
                    props.placeholder = '______';
                }

                return props;
            }
        }, {
            key: "render",
            value: function render() {
                return this.props.show && !this.props.isBusinessClient ? /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form l-table-row__wrapper"
                }, this.props.show && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-l l-col l-col-small-12 l-col-medium-6 l-col-4 u-no-padding-right u-no-padding-left u-small-no-padding"
                }, this.props.readOnly || this.props.existing ? /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForCensoredPesel("pesel"), (0, _utils.getInputValidationParams)("pesel", this.props))) : /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForPesel("pesel"), (0, _utils.getInputValidationParams)("pesel", this.props)))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: this.props.foreigner,
                    className: "u-spacing-top-l l-col l-col-small-12 l-col-medium-6 l-col-8 u-no-padding-right u-small-no-padding u-padding-left-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForId("idNumber", true), (0, _utils.getInputValidationParams)("idNumber", this.props)))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.props.foreigner,
                    className: "u-spacing-top-l l-col l-col-small-12 l-col-medium-6 l-col-8 u-no-padding-right u-small-no-padding u-padding-left-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, (0, _utils.getPropsForInput)('country', this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations), (0, _utils.getInputValidationParams)('country', this.props), {
                    value: (0, _utils.getCountryName)(this.props.foreignCountries, this.props.country),
                    suggestions: (0, _utils.getCountrySuggestions)(this.props.foreignCountries, this.props.country),
                    mapSuggestion: _utils.mapCountrySuggestion,
                    onBlur: this.props.changeCustomerCountry,
                    autoComplete: true,
                    minLength: 1
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.props.foreigner,
                    className: "u-spacing-top-l l-row u-no-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-left u-small-no-padding u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, babelHelpers.extends({}, (0, _utils.getPropsForSelect)('identification', this.props, this.props.changeCustomerDataFormField), (0, _utils.getInputValidationParams)('identification', this.props), {
                    className: "g-gray1-bg u-font-small",
                    options: (0, _utils.prepareForeignerIdentificationTypes)(this.props.foreignerIdentificationMap),
                    isFeedbackParam: "true",
                    withEmptyOption: false,
                    index: this.props.index
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.props.foreigner,
                    className: "l-row u-no-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-no-padding-right u-no-padding-left u-small-no-padding u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, (0, _utils.getPropsForIdentification)('identificationNumber', true, this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations), (0, _utils.getInputValidationParams)('identificationNumber', this.props)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-8 u-no-padding-right u-small-no-padding u-padding-left-l"
                }, /*#__PURE__*/ _react.default.createElement(_DatePickerByDocumentTypeComponent.default, babelHelpers.extends({}, this.props, {
                    onChange: this.props.changeCustomerDataFormField,
                    startDateName: "identificationRegistrationDate",
                    endDateName: "identificationExpirationDate"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.props.foreigner || !this.props.noPesel,
                    className: "l-row u-no-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-right u-no-padding-left u-small-no-padding  u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, babelHelpers.extends({}, (0, _utils.getPropsForSelect)('gender', this.props, this.props.changeCustomerDataFormField), {
                    className: "g-gray1-bg u-font-small",
                    options: genderOptions,
                    isFeedbackParam: "true"
                })))))) : /*#__PURE__*/ _react.default.createElement("div", null);
            }
        }]);
        return MulticartCustomerDetailsView;
    }(_react.Component);

    _exports.MulticartCustomerDetailsView = MulticartCustomerDetailsView;
    var genderOptions = [{
        value: 'MALE',
        description: 'Pan'
    }, {
        value: 'FEMALE',
        description: 'Pani'
    }];
    MulticartCustomerDetailsView.propTypes = {
        pesel: _propTypes.default.string,
        idNumber: _propTypes.default.string,
        country: _propTypes.default.string,
        identification: _propTypes.default.string,
        identificationNumber: _propTypes.default.string,
        identificationExpirationDate: _propTypes.default.string,
        readOnly: _propTypes.default.bool,
        requestCartCustomerData: _propTypes.default.func,
        requestRecalculateConsentsForForeigner: _propTypes.default.func,
        changeCustomerDataFormField: _propTypes.default.func,
        disabledIdNumber: _propTypes.default.bool,
        foreigner: _propTypes.default.bool,
        foreignCountries: _propTypes.default.array,
        isSmsVerified: _propTypes.default.bool,
        isOnlineCookie: _propTypes.default.bool,
        foreignerIdentificationMap: _propTypes.default.oneOfType([_propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        }), _propTypes.default.arrayOf(_propTypes.default.shape({
            value: _propTypes.default.string,
            description: _propTypes.default.string
        }))])
    };
    var MulticartCustomerDetailsComponent = (0, _reactRedux.connect)(_selectors.getCustomerDataForm, {
        requestCartCustomerData: _data.requestCartCustomerData,
        changeCustomerDataFormField: _app.changeCustomerDataFormField,
        changeCustomerDataFormFieldNoValidations: _app.changeCustomerDataFormFieldNoValidations,
        changeCustomerCountry: _app.changeCustomerCountry,
        setCountries: _cbs.setCountries,
        requestRecalculateConsentsForForeigner: _data.requestRecalculateConsentsForForeigner
    })(MulticartCustomerDetailsView);
    var _default = MulticartCustomerDetailsComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartCustomerDetailsComponent.js.map