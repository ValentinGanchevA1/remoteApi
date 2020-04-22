define(["exports", "react", "prop-types", "eshop/modules/core/components/hoc/LabeledInput", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../../validators", "../../utils/utils"], function(_exports, _react, _propTypes, _LabeledInput, _reactRedux, _selectors, _app, _data, _validators, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartContactInfoView = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);

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

    var MulticartContactInfoView = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartContactInfoView, _Component);

        var _super = _createSuper(MulticartContactInfoView);

        function MulticartContactInfoView(props) {
            babelHelpers.classCallCheck(this, MulticartContactInfoView);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartContactInfoView, [{
            key: "getTitle",
            value: function getTitle() {
                if (this.props.isBusinessClient) {
                    return this.props.descriptions.businessTitle || this.props.defaultBusinessTitle || "";
                } else {
                    return this.props.descriptions.title || "";
                }
            }
        }, {
            key: "getPropsForInput",
            value: function getPropsForInput(name) {
                return {
                    name: name,
                    value: this.props[name] || "",
                    errors: this.props.errors && this.props.errors[name],
                    valid: this._validate(name),
                    validateEmpty: this.props.isExistingCustomer && !this.isWwwChannel(),
                    disabled: (0, _utils.isFieldDisabled)(this.props, name),
                    labelType: "floating",
                    label: this.props.descriptions[name],
                    onChange: this.handleChange.bind(this)
                };
            }
        }, {
            key: "handleChange",
            value: function handleChange(_ref) {
                var id = _ref.id,
                    name = _ref.name,
                    value = _ref.value;
                this.props.changeCustomerContactFormField({
                    id: id,
                    name: name,
                    value: value
                }, false);
            }
        }, {
            key: "getPropsForInputCheckbox",
            value: function getPropsForInputCheckbox(name) {
                return {
                    name: name,
                    checked: this.props[name],
                    defaultValue: this.props[name] || '',
                    disabled: (0, _utils.isFieldDisabled)(this.props, name),
                    type: "checkbox"
                };
            }
        }, {
            key: "_validate",
            value: function _validate(name) {
                var value = this.props[name] || '';

                var errors = _validators.customerContactFormValidators[name](value);

                return errors.length == 0;
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.requestCartCustomerData();
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (!!this.props.show && !!this.refs.inputCheckboxWrapper && !this.tooltipInitialized) {
                    this.loadModule(this.refs.inputCheckboxWrapper);
                    this.tooltipInitialized = true;
                }
            }
        }, {
            key: "loadModule",
            value: function loadModule(component) {
                OPL.UI.loadModules(component, [{
                    path: "core/modules/tooltips",
                    options: {
                        showCloseIcon: false,
                        side: 'top',
                        trigger: 'hover'
                    }
                }]);
            }
        }, {
            key: "handleCheckboxChange",
            value: function handleCheckboxChange(event) {
                this.props.changeCustomerContactFormField({
                    name: event.target.name,
                    value: event.target.checked
                });
                this.props.changeEmailRelatedConsents(event.target.checked);
                this.props.changeCustomerContactFormFieldForceValid({
                    name: "emailAddress",
                    value: ""
                });
            }
        }, {
            key: "getMailInputProps",
            value: function getMailInputProps(name) {
                var inputProps = _objectSpread({}, this.getPropsForInput(name), {
                    value: this.props[name] || '',
                    valid: this.props["customerNoEmail"] || this._validate(name)
                });

                if (this.showEmailCheckbox(true)) {
                    inputProps.labelElement = /*#__PURE__*/ _react.default.createElement("div", {
                        ref: "inputCheckboxWrapper"
                    }, /*#__PURE__*/ _react.default.createElement("label", {
                        className: "opl-checkbox opl-checkbox-in-input u-margin-right-l-xl o-tooltip__trigger o-checkbox"
                    }, /*#__PURE__*/ _react.default.createElement("input", babelHelpers.extends({}, this.getPropsForInputCheckbox("customerNoEmail"), {
                        onChange: this.handleCheckboxChange.bind(this)
                    })), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "o-ci o-ci-white"
                    }), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "o-ci-label"
                    }, /*#__PURE__*/ _react.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Brak adresu email"))), /*#__PURE__*/ _react.default.createElement("span", {
                        className: "o-tooltip__content"
                    }, this.props.descriptions.noEmailTooltip || this.props.defaultNoEmailTooltip));
                }

                return inputProps;
            }
        }, {
            key: "getPhoneInputProps",
            value: function getPhoneInputProps(name) {
                return _objectSpread({}, this.getPropsForInput(name), {
                    mask: "(+48) 999-999-999",
                    placeholder: "(+48) ___-___-___",
                    onBlur: this.handlePhone.bind(this, true),
                    onChange: this.handlePhone.bind(this, false),
                    locked: false
                });
            }
        }, {
            key: "handlePhone",
            value: function handlePhone(validate, _ref2) {
                var id = _ref2.id,
                    name = _ref2.name,
                    value = _ref2.value;
                this.props.changeCustomerContactFormField({
                    id: id,
                    name: name,
                    value: (0, _utils.remapToPhone)(value)
                }, validate);
            }
        }, {
            key: "showEmailCheckbox",
            value: function showEmailCheckbox(onInput) {
                if (this.isWwwChannel()) {
                    return false;
                } else {
                    if (this.props.isBusinessClient && onInput && !this.props.isSalesOfGoodsOnly) {
                        return true;
                    }

                    if (!onInput && !this.props.isBusinessClient && (!this.props["emailAddress"] || this.props["emailAddress"] == '')) {
                        return true;
                    }

                    if (!this.props.isBusinessClient && !onInput && this.props.isSalesOfGoodsOnly) {
                        return true;
                    }

                    return false;
                }
            }
        }, {
            key: "isWwwChannel",
            value: function isWwwChannel() {
                return this.props.channels.sales === 'WWW';
            }
        }, {
            key: "isFix",
            value: function isFix() {
                return !!this.props.fixentries && this.props.fixentries.length > 0;
            }
        }, {
            key: "render",
            value: function render() {
                var _this = this;

                return !this.props.show ? /*#__PURE__*/ _react.default.createElement("div", null) : /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-top-l  ".concat(this.props.isForeignerCheckboxAvailable ? 'u-large-spacing-xl u-medium-spacing-s u-small-spacing-s' : '', " l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding")
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3",
                    dangerouslySetInnerHTML: {
                        __html: this.getTitle()
                    }
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getMailInputProps("emailAddress"), {
                    onBlur: this.props.changeCustomerContactFormField,
                    onChange: this.props.changeCustomerContactFormFieldForceValid,
                    validateEmpty: this.props.isExistingCustomer && !this.isWwwChannel() && !emailDisabled
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-spacing-l u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPhoneInputProps("phoneNumber"), {
                    className: "u-spacing-top-l"
                })))), this.showEmailCheckbox(false) && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", babelHelpers.extends({}, this.getPropsForInputCheckbox("customerNoEmail"), {
                    onChange: function onChange(event) {
                        _this.handleCheckboxChange(event);
                    }
                })), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, "Klient nie posiada adresu email")))), this.props["customerNoEmail"] && this.props.isEmailRequiredByProductInCart && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-s"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-msg opl-msg--context opl-msg--error"
                }, "W koszyku wybrano us\u0142ug\u0119 dodatkow\u0105 wymagaj\u0105c\u0105 podania adresu email. Dodaj adres email.")));
            }
        }]);
        return MulticartContactInfoView;
    }(_react.Component);

    _exports.MulticartContactInfoView = MulticartContactInfoView;
    MulticartContactInfoView.propTypes = {
        emailAddress: _propTypes.default.string,
        phoneNumber: _propTypes.default.string,
        customerNoEmail: _propTypes.default.bool,
        readOnly: _propTypes.default.bool,
        locked: _propTypes.default.bool,
        requestCartCustomerData: _propTypes.default.func,
        changeCustomerContactFormField: _propTypes.default.func,
        changeCustomerContactFormFieldForceValid: _propTypes.default.func
    };
    MulticartContactInfoView.defaultProps = {
        defaultBusinessTitle: "Dane kontaktowe firmy",
        defaultNoEmailTooltip: "Zaznacz, jeśli użytkownik nie posiada adresu e-mail."
    };
    var MulticartContactInfoComponent = (0, _reactRedux.connect)(_selectors.getCustomerContactForm, {
        changeCustomerContactFormField: _app.changeCustomerContactFormField,
        requestCartCustomerData: _data.requestCartCustomerData,
        changeCustomerDataFormField: _app.changeCustomerDataFormField,
        changeEmailRelatedConsents: _app.changeEmailRelatedConsents,
        changeCustomerContactFormFieldForceValid: _app.changeCustomerContactFormFieldForceValid
    })(MulticartContactInfoView);
    var _default = MulticartContactInfoComponent;
    _exports.default = _default;
});
//# sourceMappingURL=MulticartContactInfoComponent.js.map