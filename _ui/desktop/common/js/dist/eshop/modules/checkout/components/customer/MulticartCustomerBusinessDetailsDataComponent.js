define(["exports", "react", "eshop/modules/core/components/hoc/LabeledInput", "eshop/modules/core/components/hoc/ErrorRow", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../../utils/utils", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Datepicker", "eshop/modules/core/validationHelper"], function(_exports, _react, _LabeledInput, _ErrorRow, _reactRedux, _selectors, _app, _data, _utils, _OraCommonComponents, _Datepicker, _validationHelper) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartCustomerBusinessDetailsView = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);
    _ErrorRow = babelHelpers.interopRequireDefault(_ErrorRow);

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

    var MulticartCustomerBusinessDetailsView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCustomerBusinessDetailsView, _Component);

        var _super = _createSuper(MulticartCustomerBusinessDetailsView);

        function MulticartCustomerBusinessDetailsView() {
            babelHelpers.classCallCheck(this, MulticartCustomerBusinessDetailsView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(MulticartCustomerBusinessDetailsView, [{
            key: "getPropsForInput",
            value: function getPropsForInput(name) {
                var validationDisabled = (0, _utils.isFieldDisabledForValidation)(this.props, name);
                var disabled = (0, _utils.isFieldDisabled)(this.props, name);
                var params = {
                    name: name,
                    value: this.props[name] || "",
                    errors: this.props.errors && this.props.errors[name],
                    disabled: disabled,
                    onBlur: this.handleChange.bind(this, true),
                    onChange: this.handleChange.bind(this, false),
                    label: this.props.descriptions[name],
                    labelType: "floating"
                };
                var valid = this.isValidField(name);

                if (!disabled || !validationDisabled && !valid) {
                    params.valid = valid;
                }

                return params;
            }
        }, {
            key: "handleChange",
            value: function handleChange(validate, _ref) {
                var id = _ref.id,
                    name = _ref.name,
                    value = _ref.value;
                this.props.changeCustomerDataFormField({
                    id: id,
                    name: name,
                    value: value
                }, validate);
            }
        }, {
            key: "isValidField",
            value: function isValidField(name) {
                var fieldValue = this.props[name];
                var fieldErrors = !!this.props.errors && !!this.props.errors[name] ? this.props.errors[name] : [];

                if (!fieldValue) {
                    if (fieldErrors.length === 0) {
                        return undefined;
                    } else {
                        return false;
                    }
                } else {
                    return fieldErrors.length === 0;
                }
            }
        }, {
            key: "getPropsForNip",
            value: function getPropsForNip(name) {
                return _objectSpread({}, this.getPropsForInput(name), {
                    mask: "9999999999",
                    placeholder: "__________",
                    onChange: this.handleNipChange.bind(this)
                });
            }
        }, {
            key: "handleNipChange",
            value: function handleNipChange(_ref2) {
                var id = _ref2.id,
                    name = _ref2.name,
                    value = _ref2.value;

                if (!this.props.isSalesOfGoodsOnly && (0, _validationHelper.validateNIP)(value) && this.props.nip !== value) {
                    this.props.changeCustomerDataFormField({
                        id: id,
                        name: name,
                        value: value
                    });
                    this.refs.nip.clearFocus();
                    this.props.requestBpgData(value);
                } else {
                    this.props.changeCustomerDataFormField({
                        id: id,
                        name: name,
                        value: value
                    }, false);
                }
            }
        }, {
            key: "handleRegonChange",
            value: function handleRegonChange(validate, _ref3) {
                var id = _ref3.id,
                    name = _ref3.name,
                    value = _ref3.value;
                this.props.changeCustomerRegonFormField({
                    id: id,
                    name: name,
                    value: value
                }, validate, this.props.isSalesOfGoodsOnly);
            }
        }, {
            key: "getPropsForRegon",
            value: function getPropsForRegon(name) {
                return _objectSpread({}, this.getPropsForInput(name), {
                    mask: "99999999999999",
                    placeholder: "",
                    onChange: this.handleRegonChange.bind(this, false),
                    onBlur: this.handleRegonChange.bind(this, true)
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.requestCartCustomerData();
            }
        }, {
            key: "handleSelectChange",
            value: function handleSelectChange(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    value = _ref4.value;
                this.props.changeCustomerDataFormField({
                    id: id,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "getPropsForSelect",
            value: function getPropsForSelect(name) {
                return {
                    name: name,
                    id: name,
                    onChange: this.handleSelectChange.bind(this),
                    withEmptyOption: true,
                    label: this.getDescription(name),
                    disabled: (0, _utils.isFieldDisabled)(this.props, name),
                    className: !!this.props[name] ? "u-w-100 is-not-empty" : "u-w-100",
                    value: this.props[name],
                    emptyOption: {
                        value: "",
                        description: "",
                        hidden: true,
                        disabled: false
                    }
                };
            }
        }, {
            key: "getDescription",
            value: function getDescription(name) {
                var labelName = name + "Label";
                return this.props.descriptions[name] || this.props[labelName];
            }
        }, {
            key: "handleDateChange",
            value: function handleDateChange(name, _ref5) {
                var value = _ref5.value;
                this.props.changeCustomerDataFormField({
                    id: name,
                    name: name,
                    value: value
                });
            }
        }, {
            key: "handleDateBlur",
            value: function handleDateBlur(name, _ref6) {
                var value = _ref6.value;
                var dateMask = /^[\d_]{4}-[\d_]{2}-[\d_]{2}$/;
                var dateValue = "";

                if (dateMask.test(value) && !isNaN(Date.parse(value))) {
                    var dateObject = new Date(Date.parse(value));
                    dateValue = dateObject.toISOString().split('T')[0];
                }

                this.props.changeCustomerDataFormField({
                    id: name,
                    name: name,
                    value: dateValue
                });
            }
        }, {
            key: "getOptionsFromState",
            value: function getOptionsFromState(name) {
                var propName = name + "Array";
                var values = this.props[propName] || [];
                return values.map(function(option) {
                    return {
                        value: option.code,
                        description: option.description,
                        hidden: false,
                        disabled: false
                    };
                });
            }
        }, {
            key: "getCurrentDate",
            value: function getCurrentDate() {
                var current = new Date();
                var dd = current.getDate();
                var mm = current.getMonth() + 1;
                var yyyy = current.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd;
                }

                if (mm < 10) {
                    mm = '0' + mm;
                }

                return yyyy + "-" + mm + "-" + dd;
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForNip("nip"), {
                    ref: "nip"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, this.getPropsForRegon("regon"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.errors && this.props.errors.legalForm
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraFloatingSelect, babelHelpers.extends({}, this.getPropsForSelect('legalForm'), {
                    options: this.getOptionsFromState('legalForm')
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-spacing-top-l  u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, this.getPropsForInput("companyName"))), !this.props.isSalesOfGoodsOnly && !this.props.statusAndDateFromBpg && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.errors && this.props.errors.registrationDate
                }, /*#__PURE__*/ _react.default.createElement(_Datepicker.DatePicker, {
                    id: "registrationDate",
                    name: "registrationDate",
                    onChange: this.handleDateChange.bind(this, "registrationDate"),
                    onBlur: this.handleDateBlur.bind(this, "registrationDate"),
                    value: this.props.registrationDate || "",
                    disabled: (0, _utils.isFieldDisabled)(this.props, "registrationDate"),
                    mask: "9999-99-99",
                    placeholder: "____-__-__",
                    options: {
                        disabledWeekDays: [] //, maxDate: this.getCurrentDate()

                    },
                    floatingLabel: "Data zarejestrowania"
                }))), !this.props.isSalesOfGoodsOnly && !this.props.statusAndDateFromBpg && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.errors && this.props.errors.companyStatus
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraFloatingSelect, babelHelpers.extends({}, this.getPropsForSelect('companyStatus'), {
                    options: this.getOptionsFromState('companyStatus')
                })))));
            }
        }]);
        return MulticartCustomerBusinessDetailsView;
    }(_react.Component);

    _exports.MulticartCustomerBusinessDetailsView = MulticartCustomerBusinessDetailsView;
    MulticartCustomerBusinessDetailsView.propTypes = {
        companyName: _react.PropTypes.string,
        nip: _react.PropTypes.string,
        regon: _react.PropTypes.string,
        readOnly: _react.PropTypes.bool,
        requestCartCustomerData: _react.PropTypes.func,
        changeCustomerDataFormField: _react.PropTypes.func,
        legalFormArray: _react.PropTypes.array,
        companyStatusArray: _react.PropTypes.array,
        legalFormLabel: _react.PropTypes.string,
        companyStatusLabel: _react.PropTypes.string
    };
    MulticartCustomerBusinessDetailsView.defaultProps = {
        legalFormLabel: "Forma prawna",
        companyStatusLabel: "Status firmy"
    };
    var MulticartCustomerBusinessDetailsDataComponent = (0, _reactRedux.connect)(_selectors.getCustomerDataForm, {
        changeCustomerDataFormField: _app.changeCustomerDataFormField,
        changeCustomerRegonFormField: _app.changeCustomerRegonFormField,
        requestCartCustomerData: _data.requestCartCustomerData,
        requestBpgData: _data.requestBpgData
    })(MulticartCustomerBusinessDetailsView);
    var _default = MulticartCustomerBusinessDetailsDataComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartCustomerBusinessDetailsDataComponent.js.map