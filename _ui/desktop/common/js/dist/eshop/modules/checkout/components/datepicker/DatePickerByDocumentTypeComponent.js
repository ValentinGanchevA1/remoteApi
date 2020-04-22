define(["exports", "react", "eshop/modules/core/components/ui/Datepicker", "../../utils/utils"], function(_exports, _react, _Datepicker, _utils) {
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

    var DatePickerByDocumentTypeView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(DatePickerByDocumentTypeView, _Component);

        var _super = _createSuper(DatePickerByDocumentTypeView);

        function DatePickerByDocumentTypeView() {
            babelHelpers.classCallCheck(this, DatePickerByDocumentTypeView);
            return _super.apply(this, arguments);
        }

        babelHelpers.createClass(DatePickerByDocumentTypeView, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    style: this.props.identification !== 'UE_CERTIFICATE' ? {
                        display: 'none'
                    } : {
                        display: 'block'
                    }
                }, /*#__PURE__*/ _react.default.createElement(_Datepicker.DatePicker, babelHelpers.extends({
                    id: this.props.startDateName,
                    name: this.props.startDateName,
                    onChange: this.handleDateChange.bind(this, this.props.startDateName),
                    onBlur: this.handleDateBlur.bind(this, this.props.startDateName),
                    value: this.getIdentificationDate(this.props.identificationRegistrationDate),
                    options: {
                        monthYearSelect: true,
                        defaultDate: new Date(),
                        minDate: this.props.descriptions['minIdentificationRegistrationDate'] ? new Date(this.props.descriptions['minIdentificationRegistrationDate']) : new Date(),
                        maxDate: new Date()
                    },
                    floatingLabel: this.resolveDescription(this.props.startDateName, "Data rejestracji dokumentu"),
                    errors: this.props.errors && this.props.errors[this.props.startDateName]
                }, this.getInputValidationParams(this.props.startDateName, this.props)))), /*#__PURE__*/ _react.default.createElement("div", {
                    style: this.props.identification !== 'RESIDENCE_CARD' ? {
                        display: 'none'
                    } : {
                        display: 'block'
                    }
                }, /*#__PURE__*/ _react.default.createElement(_Datepicker.DatePicker, babelHelpers.extends({
                    id: this.props.endDateName,
                    name: this.props.endDateName,
                    onChange: this.handleDateChange.bind(this, this.props.endDateName),
                    onBlur: this.handleDateBlur.bind(this, this.props.endDateName),
                    value: this.getIdentificationDate(this.props.identificationExpirationDate),
                    options: {
                        monthYearSelect: true,
                        defaultDate: this.getMinIdentificationExpirationDate(),
                        minDate: this.getMinIdentificationExpirationDate(),
                        maxDate: this.getMaxIdentificationExpirationDate(),
                        yearStart: this.getStartDataPickerYear(),
                        yearEnd: this.getEndDataPickerYear()
                    },
                    floatingLabel: "Data wa\u017Cno\u015Bci dokumentu",
                    errors: this.props.errors && this.props.errors[this.props.endDateName]
                }, this.getInputValidationParams(this.props.endDateName, this.props)))));
            }
        }, {
            key: "handleDateChange",
            value: function handleDateChange(name, _ref) {
                var value = _ref.value;
                var index = this.props.index;

                if (index !== undefined) {
                    this.props.onChange({
                        id: name,
                        name: name,
                        value: value,
                        index: index
                    });
                } else {
                    this.props.onChange({
                        id: name,
                        name: name,
                        value: value
                    });
                }
            }
        }, {
            key: "handleDateBlur",
            value: function handleDateBlur(name, _ref2) {
                var value = _ref2.value;
                var dateMask = /^[\d_]{4}-[\d_]{2}-[\d_]{2}$/;
                var dateValue = "";

                if (dateMask.test(value) && !isNaN(Date.parse(value))) {
                    var dateObject = new Date(Date.parse(value));
                    dateValue = dateObject.toISOString().split('T')[0];
                }

                var index = this.props.index;

                if (index !== undefined) {
                    this.props.onChange({
                        id: name,
                        name: name,
                        value: value,
                        index: index
                    });
                } else {
                    this.props.onChange({
                        id: name,
                        name: name,
                        value: dateValue
                    });
                }
            }
        }, {
            key: "getIdentificationDate",
            value: function getIdentificationDate(date) {
                var dateMask = /^[\d_]{4}-[\d_]{2}-[\d_]{2}$/;
                var dateObject = "";
                var dateValue = "";

                if (dateMask.test(date) && !isNaN(Date.parse(date))) {
                    dateObject = new Date(Date.parse(date));
                    dateValue = dateObject.toISOString().split('T')[0];
                } else if (date && !isNaN(date)) {
                    dateObject = new Date(date);
                    dateValue = dateObject.toISOString().split('T')[0];
                }

                return dateValue;
            }
        }, {
            key: "resolveDescription",
            value: function resolveDescription(description, defaultValue) {
                return this.props.descriptions[description] ? this.props.descriptions[description] : defaultValue;
            }
        }, {
            key: "getInputValidationParams",
            value: function getInputValidationParams(name) {
                var validationDisabled = (0, _utils.isFieldDisabledForValidation)(this.props, name);
                var disabled = (0, _utils.isFieldDisabled)(this.props, name);
                var params = {
                    disabled: disabled
                };
                var valid = !this.props.errors && this.props[name] !== '' || this.props.errors && this.props.errors[name] && this.props.errors[name].length === 0;

                if (!disabled || !validationDisabled && !valid) {
                    params.valid = valid;
                }

                return params;
            }
        }, {
            key: "getMinIdentificationExpirationDate",
            value: function getMinIdentificationExpirationDate() {
                var today = new Date();
                var minIdentificationExpirationDate = this.props.descriptions["minIdentificationExpirationDate"];
                var minDate = new Date(today);
                minDate.setDate(minDate.getDate() + Number(minIdentificationExpirationDate));
                return minDate;
            }
        }, {
            key: "getMaxIdentificationExpirationDate",
            value: function getMaxIdentificationExpirationDate() {
                var today = new Date();
                var maxIdentificationExpirationDate = this.props.descriptions["maxIdentificationExpirationDate"];
                return new Date(today.setFullYear(today.getFullYear() + Number(maxIdentificationExpirationDate)));
            }
        }, {
            key: "getStartDataPickerYear",
            value: function getStartDataPickerYear() {
                return this.getMinIdentificationExpirationDate().getFullYear();
            }
        }, {
            key: "getEndDataPickerYear",
            value: function getEndDataPickerYear() {
                return this.getMaxIdentificationExpirationDate().getFullYear();
            }
        }]);
        return DatePickerByDocumentTypeView;
    }(_react.Component);

    var _default = DatePickerByDocumentTypeView;
    _exports.default = _default;
});
//# sourceMappingURL=DatePickerByDocumentTypeComponent.js.map