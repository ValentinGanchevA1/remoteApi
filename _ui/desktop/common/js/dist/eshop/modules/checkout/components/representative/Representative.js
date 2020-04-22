define(["exports", "react", "eshop/modules/core/components/hoc/LabeledInput", "eshop/modules/checkout/components/representative/common", "../../utils/utils", "../../../core/enum/SalesChannel", "../../../../components/OraFloatingLabelSelect", "../datepicker/DatePickerByDocumentTypeComponent"], function(_exports, _react, _LabeledInput, _common, _utils, _SalesChannel, _OraFloatingLabelSelect, _DatePickerByDocumentTypeComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);
    _DatePickerByDocumentTypeComponent = babelHelpers.interopRequireDefault(_DatePickerByDocumentTypeComponent);

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

    var Representative = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(Representative, _Component);

        var _super = _createSuper(Representative);

        function Representative(props) {
            babelHelpers.classCallCheck(this, Representative);
            return _super.call(this, props);
        }

        babelHelpers.createClass(Representative, [{
            key: "remove",
            value: function remove(event) {
                event.preventDefault();
                this.props.remove(this.props.index);
            }
        }, {
            key: "renderHeader",
            value: function renderHeader() {
                return this.props.label && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-spacing-m"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-position-relative"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h5"
                }, this.props.label), this.props.remove && /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-position-absolute u-position-bottom u-position-right",
                    onClick: this.remove.bind(this)
                }, "Usu\u0144")));
            }
        }, {
            key: "toggleForeigner",
            value: function toggleForeigner() {
                var foreignerEnabled = !this.props.foreigner;
                this.props.setRepresentativeDataNoValidations({
                    name: 'foreigner',
                    value: foreignerEnabled,
                    index: this.props.index
                });

                if (foreignerEnabled) {
                    var defaultValue = (0, _utils.prepareForeignerIdentificationTypes)(this.props.foreignerIdentificationMap).find(function(t) {
                        return "RESIDENCE_CARD" === t.value;
                    });
                    this.props.setRepresentativeDataNoValidations({
                        name: 'identification',
                        value: defaultValue.value,
                        index: this.props.index
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-l"
                }, this.renderHeader(), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-no-margin-top u-spacing-top-xs u-spacing-l l-col l-col-12",
                    hidden: this.props.foreignerB2bDisabled || this.props.channels.sales !== _SalesChannel.default.POS
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    onChange: this.toggleForeigner.bind(this),
                    disabled: this.props.channels.sales !== _SalesChannel.default.POS,
                    checked: this.props.foreigner
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.descriptions.foreigner))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, (0, _common.getCommonPropsForInput)(this.props, "firstName", "representative", {
                    label: "Imię"
                }), {
                    virtualKeyboard: true
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, (0, _common.getCommonPropsForInput)(this.props, "lastName", "representative", {
                    label: "Nazwisko"
                }), {
                    virtualKeyboard: true
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, (0, _common.getCommonPropsForInput)(this.props, "pesel", "representative", {
                    label: "PESEL",
                    mask: "99999999999",
                    placeholder: "___________"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: this.props.foreigner,
                    className: "l-col l-col-6 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, (0, _common.getCommonPropsForInput)(this.props, "idNumber", "representative", {
                    label: "Numer dowodu",
                    mask: "aaa999999",
                    placeholder: "_________"
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.props.foreigner,
                    className: "l-col l-col-6 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, (0, _utils.getPropsForInput)('country', this.props, this.props.setRepresentativeData, this.props.setRepresentativeDataNoValidations), (0, _utils.getInputValidationParams)('country', this.props), {
                    value: (0, _utils.getCountryName)(this.props.foreignCountries, this.props.country),
                    suggestions: (0, _utils.getCountrySuggestions)(this.props.foreignCountries, this.props.country),
                    mapSuggestion: _utils.mapCountrySuggestion,
                    onBlur: this.props.changeRepresentativeCountry,
                    autoComplete: true,
                    minLength: 1,
                    index: this.props.index
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.props.foreigner
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraFloatingLabelSelect.OraFloatingLabelSelect, babelHelpers.extends({}, (0, _utils.getPropsForSelect)('identification', this.props, this.props.setRepresentativeData), (0, _utils.getInputValidationParams)('identification', this.props), {
                    className: "g-gray1-bg u-font-small",
                    options: (0, _utils.prepareForeignerIdentificationTypes)(this.props.foreignerIdentificationMap),
                    isFeedbackParam: "true",
                    withEmptyOption: false,
                    index: this.props.index
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    hidden: !this.props.foreigner
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, (0, _utils.getPropsForIdentification)('identificationValue', true, this.props, this.props.setRepresentativeData, this.props.setRepresentativeDataNoValidations), (0, _utils.getInputValidationParams)('identificationValue', this.props)))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement(_DatePickerByDocumentTypeComponent.default, babelHelpers.extends({}, this.props, {
                    onChange: this.props.setRepresentativeData,
                    startDateName: "identificationRegisterDate",
                    endDateName: "identificationEndDate",
                    index: this.props.index,
                    identificationRegistrationDate: this.props.identificationRegisterDate,
                    identificationExpirationDate: this.props.identificationEndDate
                }))))));
            }
        }]);
        return Representative;
    }(_react.Component);

    _exports.default = Representative;
});
//# sourceMappingURL=Representative.js.map