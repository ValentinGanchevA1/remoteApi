define(["exports", "react", "react-redux", "prop-types", "eshop/components/OraCommonComponents", "../../core/components/hoc/LabeledInput", "../../magnum2/components/InputWithFloatingLabel", "../utils/utils", "../actions/data"], function(_exports, _react, _reactRedux, _propTypes, _OraCommonComponents, _LabeledInput, _InputWithFloatingLabel, _utils, _data) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);
    _InputWithFloatingLabel = babelHelpers.interopRequireDefault(_InputWithFloatingLabel);

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

    var MulticartCommonAddressForm = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartCommonAddressForm, _Component);

        var _super = _createSuper(MulticartCommonAddressForm);

        function MulticartCommonAddressForm(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartCommonAddressForm);
            _this = _super.call(this, props);
            _this.handlePostalCode = _this.handlePostalCode.bind(babelHelpers.assertThisInitialized(_this));
            _this.getPropsForInput = _this.getPropsForInput.bind(babelHelpers.assertThisInitialized(_this));
            _this.validateAppartmentNoAndStreetNumber = _this.validateAppartmentNoAndStreetNumber.bind(babelHelpers.assertThisInitialized(_this));
            _this.state = {
                hasCitySuggestions: _this.props.citySuggestions && _this.props.citySuggestions.length > 0,
                zipValidated: false,
                autoSelect: false
            };
            return _this;
        }

        babelHelpers.createClass(MulticartCommonAddressForm, [{
            key: "compareArrays",
            value: function compareArrays(a1, a2) {
                return !!a1 && !!a2 && a1.filter(function(e) {
                    return a2.indexOf(e) < 0;
                }).length === 0 && a2.filter(function(e) {
                    return a1.indexOf(e) < 0;
                }).length === 0;
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                if (!this.props.town && !this.compareArrays(prevProps.citySuggestions, this.props.citySuggestions)) {
                    this.setState({
                        hasCitySuggestions: this.props.citySuggestions && this.props.citySuggestions.length > 0
                    });
                }

                if (!!this.props['streetNumber'] && this.props.validation['streetName'] && this.props.validation['town'] && !!this.props.townId && !this.state.zipValidated) {
                    this.props.validateZipCode({
                        addressType: this.props.id,
                        zip: this.props['postalCode'],
                        townId: this.props.townId,
                        streetId: this.props.streetId,
                        streetNumber: this.props['streetNumber']
                    });
                    this.setState({
                        zipValidated: true
                    });
                    this.validateAppartmentNoAndStreetNumber();
                }

                if (this.isAddressWithOnlyOneStreet(prevProps)) {
                    this.setState({
                        autoSelect: true
                    });
                    this.props.onChange({
                        id: '',
                        name: "streetName",
                        value: this.props.streetSuggestions[0],
                        cbsId: ''
                    });
                } else if (this.isAddressWithMultipleStreets(prevProps) || prevProps.postalCode != this.props.postalCode || prevProps.town != this.props.town) {
                    this.setState({
                        autoSelect: false
                    });
                }
            }
        }, {
            key: "isAddressWithOnlyOneStreet",
            value: function isAddressWithOnlyOneStreet(prevProps) {
                return prevProps.streetSuggestions && prevProps.streetSuggestions.length == 0 && this.props.streetSuggestions && this.props.streetSuggestions.length == 1;
            }
        }, {
            key: "isAddressWithMultipleStreets",
            value: function isAddressWithMultipleStreets(prevProps) {
                return prevProps.streetSuggestions != this.props.streetSuggestions && this.props.streetSuggestions && this.props.streetSuggestions.length > 1;
            }
        }, {
            key: "validateAppartmentNoAndStreetNumber",
            value: function validateAppartmentNoAndStreetNumber() {
                this.props.onBlur({
                    id: null,
                    name: 'appartmentNo',
                    value: this.props['appartmentNo'] || ""
                });
                this.props.onBlur({
                    id: null,
                    name: 'streetNumber',
                    value: this.props['streetNumber'] || ""
                });
            }
        }, {
            key: "getPropsForInput",
            value: function getPropsForInput(name) {
                var result = {
                    name: name,
                    value: this.props[name] || "",
                    errors: this.props.errors && this.props.errors[name],
                    valid: this.props.validation[name],
                    label: this.props.descriptions[name],
                    labelType: "floating",
                    disabled: (0, _utils.isFieldDisabled)(this.props, name) || !this.props.addressMapping && !this.props.existing && this.props.wwtaddress || this.props.existing && !this.props.hasFixAddress && this.props.wwtaddress,
                    onChange: this.props.onChange,
                    onBlur: this.onBlur.bind(this),
                    className: this.props.customInputClass
                };

                if (this.props.wwtaddress && name === "appartmentNo" && !(0, _utils.isFieldDisabled)(this.props, name)) {
                    result.disabled = false;
                }

                return result;
            }
        }, {
            key: "mapToPostalCode",
            value: function mapToPostalCode(value) {
                if (value && typeof value === "string" && value.length === 5) {
                    return value.substring(0, 2) + "-" + value.substring(2, 5);
                } else {
                    return value;
                }
            }
        }, {
            key: "onBlur",
            value: function onBlur(_ref) {
                var id = _ref.id,
                    name = _ref.name,
                    value = _ref.value;

                if (!!this.props.onBlur) {
                    this.props.onBlur({
                        id: id,
                        name: name,
                        value: value
                    });
                }

                this.setState({
                    zipValidated: false
                });
            }
        }, {
            key: "getPropsForPostalInput",
            value: function getPropsForPostalInput(name) {
                return _objectSpread({}, this.getPropsForInput(name), {
                    value: this.mapToPostalCode(this.props[name]),
                    onChange: this.handleChangePostalCode.bind(this),
                    onBlur: this.handleBlurPostalCode.bind(this),
                    mask: "99-999",
                    placeholder: "__-___",
                    customInputClass: this.props.customInputClass
                });
            }
        }, {
            key: "handlePostalCode",
            value: function handlePostalCode(_ref2, action) {
                var id = _ref2.id,
                    name = _ref2.name,
                    value = _ref2.value;

                if (value) {
                    value = value.split("-").join("");
                } else {
                    value = "";
                }

                action({
                    id: id,
                    name: name,
                    value: value
                });
                this.setState({
                    hasCitySuggestions: this.props.citySuggestions && this.props.citySuggestions.length > 0
                });
            }
        }, {
            key: "handleChangePostalCode",
            value: function handleChangePostalCode(_ref3) {
                var id = _ref3.id,
                    name = _ref3.name,
                    value = _ref3.value;
                this.handlePostalCode({
                    id: id,
                    name: name,
                    value: value
                }, this.props.onChange);
            }
        }, {
            key: "handleBlurPostalCode",
            value: function handleBlurPostalCode(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    value = _ref4.value;

                if (!!this.props.onBlur) {
                    this.handlePostalCode({
                        id: id,
                        name: name,
                        value: value
                    }, this.props.onBlur);
                }
            }
        }, {
            key: "handleAutoCompleteBlur",
            value: function handleAutoCompleteBlur(event) {
                var id = event.id,
                    value = event.value;
                var name = id === 'city_id' ? 'town' : id === 'location_street' ? 'streetName' : '';

                if (this.props.onBlur) {
                    this.props.onBlur({
                        id: id,
                        name: name,
                        value: value,
                        cbsId: id === 'city_id' ? this.props.townId : id === 'location_street' ? this.props.streetId : ''
                    });
                }

                this.setState({
                    zipValidated: false
                });
            }
        }, {
            key: "handleAutoCompleteChange",
            value: function handleAutoCompleteChange(event) {
                var id = event.id,
                    value = event.value;
                var name = id === 'city_id' ? 'town' : id === 'location_street' ? 'streetName' : '';

                if (this.props.onChange) {
                    this.props.onChange({
                        id: id,
                        name: name,
                        value: value,
                        cbsId: ''
                    });
                }
            }
        }, {
            key: "onCitySelect",
            value: function onCitySelect(data) {
                var _data$item = data.item,
                    id = _data$item.id,
                    _data$item$label = _data$item.label,
                    label = _data$item$label === void 0 ? "" : _data$item$label,
                    value = _data$item.value;

                if (this.props.onChange) {
                    this.props.onChange({
                        id: id,
                        name: "town",
                        value: label.toUpperCase(),
                        cbsId: value
                    });
                }

                OPL.UI.fire(OPL.UI.EVENTS.modules.autocomplete.querydata, {
                    "city_id": data.item.value
                }, 'location_street');
            }
        }, {
            key: "onStreetSelect",
            value: function onStreetSelect(data) {
                var _data$item2 = data.item,
                    id = _data$item2.id,
                    _data$item2$label = _data$item2.label,
                    label = _data$item2$label === void 0 ? "" : _data$item2$label,
                    value = _data$item2.value;

                if (this.props.onChange) {
                    this.props.onChange({
                        id: id,
                        name: "streetName",
                        value: label.toUpperCase(),
                        cbsId: value
                    });
                }
            }
        }, {
            key: "render",
            value: function render() {
                var cityAutocompleteUrl = "/hapi/cbs/cityauto";
                var streetAutocompleteUrl = "/hapi/cbs/streetauto";
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForPostalInput("postalCode"), {
                    className: this.props.className
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l u-medium-hide u-large-hide"
                }), this.state.hasCitySuggestions ? /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForInput("town"), {
                    autoComplete: true,
                    suggestions: this.props.citySuggestions,
                    className: this.props.className
                })) : /*#__PURE__*/ _react.default.createElement(_InputWithFloatingLabel.default, babelHelpers.extends({}, this.getPropsForInput("town"), {
                    id: "city_id",
                    required: true,
                    placeholder: "Miejscowość",
                    autocomplete: true,
                    autocompleteUrl: cityAutocompleteUrl,
                    onChange: this.handleAutoCompleteChange.bind(this),
                    onSelect: this.onCitySelect.bind(this),
                    onBlur: this.handleAutoCompleteBlur.bind(this),
                    overrideClass: "o-floating-label",
                    showValidation: true,
                    showErrors: true,
                    customInputClass: this.props.customInputClass
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l "
                }), this.state.hasCitySuggestions ? /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForInput("streetName"), {
                    autoComplete: true,
                    suggestions: this.props.streetSuggestions,
                    className: this.props.className,
                    autoSelect: this.state.autoSelect
                })) : /*#__PURE__*/ _react.default.createElement(_InputWithFloatingLabel.default, babelHelpers.extends({}, this.getPropsForInput("streetName"), {
                    id: "location_street",
                    required: true,
                    placeholder: "Ulica",
                    autocomplete: true,
                    autocompleteUrl: streetAutocompleteUrl,
                    onChange: this.handleAutoCompleteChange.bind(this),
                    onSelect: this.onStreetSelect.bind(this),
                    onBlur: this.handleAutoCompleteBlur.bind(this),
                    overrideClass: "o-floating-label",
                    showValidation: true,
                    showErrors: true,
                    data: {
                        "city_id": this.props.townId
                    },
                    customInputClass: this.props.customInputClass,
                    autoSelect: this.state.autoSelect
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-l "
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForInput("streetNumber"), {
                    valid: !this.props.errors && this.props["streetNumber"] !== '' || this.props.errors && this.props.errors["streetNumber"] && this.props.errors["streetNumber"].length === 0,
                    className: this.props.className
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 "
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForInput("appartmentNo"), {
                    valid: !this.props.errors && this.props["appartmentNo"] !== '' || this.props.errors && this.props.errors["appartmentNo"] && this.props.errors["appartmentNo"].length === 0,
                    className: this.props.className
                })))));
            }
        }]);
        return MulticartCommonAddressForm;
    }(_react.Component);

    MulticartCommonAddressForm.propTypes = {
        postalCode: _propTypes.default.string.isRequired,
        town: _propTypes.default.string.isRequired,
        streetName: _propTypes.default.string.isRequired,
        streetNumber: _propTypes.default.string.isRequired,
        appartmentNo: _propTypes.default.string.isRequired,
        citySuggestions: _propTypes.default.array,
        streetSuggestions: _propTypes.default.array,
        readOnly: _propTypes.default.bool,
        onChange: _propTypes.default.func.isRequired,
        customInputClass: _propTypes.default.string
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            validateZipCode: function validateZipCode(address) {
                return dispatch((0, _data.validateZipCode)(address));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(function(state) {
        return {};
    }, mapDispatchToProps)(MulticartCommonAddressForm);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartCommonAddressFormComponent.js.map