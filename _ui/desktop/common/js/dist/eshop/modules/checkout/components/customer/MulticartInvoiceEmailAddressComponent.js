define(["exports", "react", "prop-types", "eshop/components/OraCommonComponents", "eshop/modules/core/components/hoc/LabeledInput", "react-redux", "../../selectors", "../../actions/app", "eshop/modules/checkout/actions/data"], function(_exports, _react, _propTypes, _OraCommonComponents, _LabeledInput, _reactRedux, _selectors, _app, _data) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartInvoiceEmailAddressComponent = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _propTypes = babelHelpers.interopRequireDefault(_propTypes);
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

    var MulticartInvoiceEmailAddressComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartInvoiceEmailAddressComponent, _Component);

        var _super = _createSuper(MulticartInvoiceEmailAddressComponent);

        function MulticartInvoiceEmailAddressComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, MulticartInvoiceEmailAddressComponent);
            _this = _super.call(this, props);
            _this.pickInvoiceEmail = _this.pickInvoiceEmail.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleChange = _this.handleChange.bind(babelHelpers.assertThisInitialized(_this));
            _this.handleBlur = _this.handleBlur.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(MulticartInvoiceEmailAddressComponent, [{
            key: "loadTooltipModule",
            value: function loadTooltipModule() {
                OPL.UI.loadModules(document.getElementById("tooltip-" + this.props.component), [{
                    path: "core/modules/tooltips",
                    options: {
                        "mouseoverMinWidth": 0,
                        "triggerEvent": "mouseover",
                        "maxWidth": 300
                    }
                }]);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadTooltipModule();
                this.props.registerNextStepCondition("invoiceData");
                this.props.changeInvoiceEmail(this.props.email);
            }
        }, {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                if (!this.props.contactEmailFilledAndValid && this.props.customerFinished) {
                    this.props.changeInvoiceEmailMapping("invoiceEmail");
                }
            }
        }, {
            key: "pickInvoiceEmail",
            value: function pickInvoiceEmail(_ref) {
                var name = _ref.name;
                this.props.changeInvoiceEmailMapping(name);
                this.props.changeInvoiceEmail("");

                if (name === "invoiceEmail") {
                    this.props.registerNextStepCondition("invoiceData");
                } else {
                    this.props.unregisterNextStepCondition("invoiceData");
                }
            }
        }, {
            key: "handleChange",
            value: function handleChange(_ref2) {
                var name = _ref2.name,
                    value = _ref2.value;
                this.props.changeInvoiceEmail(value, false);
            }
        }, {
            key: "handleBlur",
            value: function handleBlur(_ref3) {
                var value = _ref3.value;
                this.props.changeInvoiceEmail(value);
            }
        }, {
            key: "getDescription",
            value: function getDescription(name) {
                var defaultDescriptions = {
                    'sectionTitle': 'Adres e-faktury',
                    'sameAsAbove': 'Taki sam jak podany powyżej',
                    'otherEmail': 'Inny adres email',
                    'invoiceEmail': 'E-mail dla e-faktury',
                    'otherEmailToolip': "",
                    'sameAsAboveTooltip': ""
                };
                return this.props.descriptions[name] || defaultDescriptions[name];
            }
        }, {
            key: "render",
            value: function render() {
                var isInvoiceEmail = this.props.invoiceEmailMapping === "invoiceEmail";
                var isContactEmail = this.props.invoiceEmailMapping === "contactEmail";
                var valid = this.props.errors.length === 0;
                var showValidationMark = this.props.invoiceEmail ? this.props.invoiceEmail.length > 0 : false;
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form u-padding-l u-left  l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-right u-no-padding-left"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-l u-spacing-top-l"
                }, /*#__PURE__*/ _react.default.createElement("h3", null, this.getDescription('sectionTitle'))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding u-no-padding-left",
                    id: "tooltip-" + this.props.component
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio u-padding"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraInput, {
                    type: "radio",
                    id: "switch_right4",
                    name: "contactEmail",
                    value: "close",
                    checked: isContactEmail,
                    onChange: this.pickInvoiceEmail,
                    disabled: !this.props.contactEmailFilledAndValid
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.getDescription('sameAsAbove'))), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-padding-left u-left"
                }, this.getDescription('sameAsAboveTooltip') && /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top u-inline-block"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                })), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-tooltip__content",
                    dangerouslySetInnerHTML: {
                        __html: this.getDescription('sameAsAboveTooltip')
                    }
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraInput, {
                    type: "radio",
                    id: "switch_left3",
                    name: "invoiceEmail",
                    value: "open",
                    checked: isInvoiceEmail,
                    onChange: this.pickInvoiceEmail
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.getDescription('otherEmail'))), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "u-padding-left u-left"
                }, this.getDescription('otherEmailToolip') && /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "o-tooltip__trigger o-tooltip--top u-inline-block"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs"
                })), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "o-tooltip__content",
                    dangerouslySetInnerHTML: {
                        __html: this.getDescription('otherEmailToolip')
                    }
                })))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-small-padding-l u-padding-left u-padding-right"
                }, isInvoiceEmail && /*#__PURE__*/ _react.default.createElement("span", null, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, {
                    value: this.props.invoiceEmail,
                    name: "invoiceEmail",
                    label: this.getDescription('invoiceEmail'),
                    onChange: this.handleChange,
                    onBlur: this.handleBlur,
                    minLength: 3,
                    errors: this.props.errors,
                    validationMark: showValidationMark,
                    valid: valid
                }))));
            }
        }]);
        return MulticartInvoiceEmailAddressComponent;
    }(_react.Component);

    _exports.MulticartInvoiceEmailAddressComponent = MulticartInvoiceEmailAddressComponent;
    MulticartInvoiceEmailAddressComponent.propTypes = {
        invoiceEmail: _propTypes.default.string
    };

    var _default = (0, _reactRedux.connect)(_selectors.getInvoiceEmailForm, {
        changeInvoiceEmailMapping: _app.changeInvoiceEmailMapping,
        changeInvoiceEmail: _app.changeInvoiceEmail,
        registerNextStepCondition: _data.registerNextStepCondition,
        unregisterNextStepCondition: _data.unregisterNextStepCondition
    })(MulticartInvoiceEmailAddressComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartInvoiceEmailAddressComponent.js.map