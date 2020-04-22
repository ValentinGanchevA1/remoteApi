define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Datepicker", "eshop/modules/core/components/hoc/ErrorRow", "eshop/modules/core/components/hoc/LabeledInput", "./MulticartMnpTooltip", "./MulticartMnpBusinessAddressComponent", "../../actions/data", "eshop/modules/core/components/ui/Expander", "../../actions/app", "eshop/modules/checkout/selectors", "eshop/utils/OnlineUtils"], function(_exports, _react, _reactRedux, _OraCommonComponents, _Datepicker, _ErrorRow, _LabeledInput, _MulticartMnpTooltip, _MulticartMnpBusinessAddressComponent, _data, _Expander, _app, _selectors, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _ErrorRow = babelHelpers.interopRequireDefault(_ErrorRow);
    _LabeledInput = babelHelpers.interopRequireDefault(_LabeledInput);
    _MulticartMnpTooltip = babelHelpers.interopRequireDefault(_MulticartMnpTooltip);
    _MulticartMnpBusinessAddressComponent = babelHelpers.interopRequireDefault(_MulticartMnpBusinessAddressComponent);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var DateRangeBoundaries = {
        MIN: 'minDate',
        MAX: 'maxDate'
    };

    var MulticartMnpSectionComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartMnpSectionComponent, _Component);

        var _super = _createSuper(MulticartMnpSectionComponent);

        function MulticartMnpSectionComponent(props) {
            babelHelpers.classCallCheck(this, MulticartMnpSectionComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartMnpSectionComponent, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                this.validateSelectedContactMethod();
            }
        }, {
            key: "validateSelectedContactMethod",
            value: function validateSelectedContactMethod() {
                var contactMethods = this.getContactMethods();
                var selectedContactMethod = this.props.entry.contactMethod;

                if (contactMethods.find(function(contactMethod) {
                        return contactMethod.value === selectedContactMethod;
                    })) {
                    return;
                }

                this.onValueChange({
                    name: 'contactMethod',
                    value: contactMethods[0].value
                });
            }
        }, {
            key: "wrapWithBundleNo",
            value: function wrapWithBundleNo(name) {
                return 'mnpData-' + name + '-' + this.props.entry.bundleNo;
            }
        }, {
            key: "onSimpleRadioValueChange",
            value: function onSimpleRadioValueChange(event) {
                var _event$target = event.target,
                    name = _event$target.name,
                    value = _event$target.value,
                    checked = _event$target.checked;
                this.props.changeCustomerMnpDataFormField({
                    name: name,
                    value: value,
                    checked: checked,
                    entryIndex: this.props.entryIndex,
                    defaults: this.props.mnpFormData
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(props) {
                if (this.props.isB2B !== props.isB2B && props.legalForm === 'JDG') {
                    this.props.changeCustomerMnpDataFormField({
                        name: 'agreementType',
                        value: '2',
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    });
                } else if (this.props.isB2B && props.legalForm === 'JDG' && this.props.legalForm !== 'JDG') {
                    this.props.changeCustomerMnpDataFormField({
                        name: 'agreementType',
                        value: '2',
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    });
                } else if (this.props.isB2B && props.legalForm != null && props.legalForm !== 'JDG' && (this.props.legalForm === 'JDG' || this.props.legalForm == null)) {
                    this.props.changeCustomerMnpDataFormField({
                        name: 'agreementType',
                        value: '3',
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    });
                }
            }
        }, {
            key: "onAgreementTypeChange",
            value: function onAgreementTypeChange(event) {
                this.props.changeCustomerMnpDataFormField({
                    name: 'agreementType',
                    value: event.target.value,
                    entryIndex: this.props.entryIndex,
                    defaults: this.props.mnpFormData
                });
            }
        }, {
            key: "onHeadquartersAddressSameChange",
            value: function onHeadquartersAddressSameChange(event) {
                if (event.target.value == "true") {
                    this.props.changeCustomerMnpDataFormField({
                        name: 'isHeadquartersAddressSame',
                        value: true,
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    });
                } else {
                    this.props.changeCustomerMnpDataFormField({
                        name: 'isHeadquartersAddressSame',
                        value: event.target.value,
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    });
                }
            }
        }, {
            key: "onValueChange",
            value: function onValueChange(target) {
                this.props.changeCustomerMnpDataFormField(_objectSpread({}, target, {
                    entryIndex: this.props.entryIndex,
                    defaults: this.props.mnpFormData
                }));
            }
        }, {
            key: "recalculateConsent",
            value: function recalculateConsent(target) {
                this.props.changeCustomerMnpDataFormField(_objectSpread({}, target, {
                    entryIndex: this.props.entryIndex,
                    defaults: this.props.mnpFormData
                }));
                this.props.requestRecalculateConsentsStrategy(this.props.entry.bundleNo, target.value);
            }
        }, {
            key: "getMigrationDateRange",
            value: function getMigrationDateRange(bound) {
                var _this = this;

                if (this.props.mnpFormData && this.props.mnpFormData.migrationDateRanges) {
                    return this.props.mnpFormData.migrationDateRanges.filter(function(el) {
                        return el.migrationType === _this.props.entry.migrationMode;
                    }).reduce(function(el) {
                        return el;
                    })[bound];
                }
            }
        }, {
            key: "getPropsForInput",
            value: function getPropsForInput(name, isSelectBox) {
                var props = {
                    name: name,
                    id: this.wrapWithBundleNo(name),
                    defaultValue: (isSelectBox ? this.props.entry[name] : "") || "",
                    selected: this.props.entry[name],
                    errors: this.props.entry.errors && this.props.entry.errors[name]
                };

                if (isSelectBox) {
                    props.onChange = this.onValueChange.bind(this);
                } else {
                    props.onBlur = this.onValueChange.bind(this);
                }

                return props;
            }
        }, {
            key: "getOptionsFromState",
            value: function getOptionsFromState(attribute, sortByPriority) {
                if (this.props.mnpFormData && this.props.mnpFormData[attribute] && this.props.mnpFormData[attribute] instanceof Array) {
                    var finalElement = this.props.mnpFormData[attribute].slice();

                    if (sortByPriority) {
                        finalElement.sort(function(a, b) {
                            return a.priority - b.priority;
                        });
                    }

                    return finalElement;
                }

                return [];
            }
        }, {
            key: "getContactMethods",
            value: function getContactMethods() {
                return this.props.getMnpContactMethods(this.props.mnpFormData.contactMethods);
            }
        }, {
            key: "transformMsisdn",
            value: function transformMsisdn(number) {
                return number.replace(/^(\d{3})(\d{3})(\d{3})$/, function() {
                    return arguments[1] + '\xa0' + arguments[2] + '\xa0' + arguments[3];
                });
            }
        }, {
            key: "getMnpFormDataByAttribute",
            value: function getMnpFormDataByAttribute(attribute) {
                if (attribute === 'migrationModes') {
                    return this.getMigrationModes();
                } else {
                    return this.props.mnpFormData[attribute];
                }
            }
        }, {
            key: "getTooltipContentForProperty",
            value: function getTooltipContentForProperty(attribute, entryProperty) {
                var _this2 = this;

                if (this.props.mnpFormData && this.props.mnpFormData[attribute] && this.props.mnpFormData[attribute] instanceof Array && this.props.entry[entryProperty]) {
                    return this.getMnpFormDataByAttribute(attribute).filter(function(el) {
                        return el.value === _this2.props.entry[entryProperty];
                    }).reduce(function(el) {
                        return el;
                    }).tooltipDescription;
                }
            }
        }, {
            key: "sortOperators",
            value: function sortOperators(operators) {
                var _this3 = this;

                var sortedOperators = operators.slice().sort(function(a, b) {
                    if (a.priority === b.priority) return a.description.localeCompare(b.description);
                    else return a.priority - b.priority;
                });

                if (this.props.mnpData && this.props.mnpData[this.props.entryIndex] && this.props.mnpData[this.props.entryIndex].operator) {
                    var firstElement = sortedOperators.filter(function(el) {
                        return el.value === _this3.props.mnpData[_this3.props.entryIndex].operator || _this3.props.mnpData[_this3.props.entryIndex].operator === 'NON CONFIGURED';
                    }).reduce(function(el) {
                        return el;
                    });
                    sortedOperators.splice(sortedOperators.indexOf(firstElement), 1);
                    sortedOperators.unshift(firstElement);
                }

                return sortedOperators;
            }
        }, {
            key: "getMigrationModes",
            value: function getMigrationModes() {
                var _this4 = this;

                return this.getOptionsFromState('migrationModes', true).filter(function(el) {
                    return el.operatorOfferTypeCode === _this4.props.entry.offerType;
                });
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.registerNextStepCondition('mnpData');

                if (this.props.entry['operator'] === null) {
                    var selectedOperator = this.sortOperators(this.getOptionsFromState('operators', true))[0].value;
                    this.props.changeCustomerMnpDataFormField({
                        name: 'operator',
                        value: selectedOperator,
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    });
                }

                if (this.props.isB2B && this.props.legalForm === 'JDG') {
                    this.props.changeCustomerMnpDataFormField({
                        name: 'agreementType',
                        value: '2',
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    });
                }
            }
        }, {
            key: "getPropsForInputWithEmptyOption",
            value: function getPropsForInputWithEmptyOption(name, isEmptyOption) {
                return {
                    name: name,
                    id: this.wrapWithBundleNo(name),
                    selected: isEmptyOption ? undefined : this.props.entry[name],
                    errors: this.props.entry.errors && this.props.entry.errors[name],
                    onChange: this.onValueChange.bind(this),
                    withEmptyOption: isEmptyOption
                };
            }
        }, {
            key: "contactMethodSection",
            value: function contactMethodSection() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("contactMethodTitle")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.entry.errors && this.props.entry.errors.contactMethod
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, babelHelpers.extends({}, this.getPropsForInputWithEmptyOption('contactMethod', false), {
                    label: this.getDescription("contactMethodTitle"),
                    options: this.getContactMethods()
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.getTooltipContentForProperty('contactMethods', 'contactMethod')))));
            }
        }, {
            key: "handleSameMnpData",
            value: function handleSameMnpData(event) {
                this.props.switchSameMnpData()();
            }
        }, {
            key: "sameDataCheckboxSection",
            value: function sameDataCheckboxSection() {
                var _this5 = this;

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-top-l-xl"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("input", {
                    type: "checkbox",
                    onChange: function onChange(event) {
                        _this5.handleSameMnpData(event);
                    }
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, "Dla pozostałych przenoszonych numerów tak samo jak powyżej"))));
            }
        }, {
            key: "migratedMSISDNSection",
            value: function migratedMSISDNSection() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-small-no-margin"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Toggle, null, /*#__PURE__*/ _react.default.createElement("h3", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-s"
                }, this.getDescription("mnpNumberText"), this.props.mnpData && this.props.mnpData[this.props.entryIndex] && " " + this.transformMsisdn(this.props.mnpData[this.props.entryIndex].mobileNumber)))));
            }
        }, {
            key: "migrationModeSection",
            value: function migrationModeSection(selectedMigrationMode) {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("transferModeTitle")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.entry.errors && this.props.entry.errors.migrationMode
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, babelHelpers.extends({
                    label: this.getDescription("transferModeTitle")
                }, this.getPropsForInput('migrationMode', true), {
                    options: this.getMigrationModes()
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("p", null, this.getTooltipContentForProperty('migrationModes', 'migrationMode')))), selectedMigrationMode.showDateInput && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.entry.errors && this.props.entry.errors.date
                }, /*#__PURE__*/ _react.default.createElement(_Datepicker.DatePicker, {
                    key: 'migrationMode' + "_datePicker",
                    id: this.wrapWithBundleNo("date"),
                    name: "date",
                    onChange: this.onValueChange.bind(this),
                    value: this.props.entry.date,
                    options: {
                        disabledWeekDays: [],
                        minDate: this.getMigrationDateRange(DateRangeBoundaries.MIN),
                        maxDate: this.getMigrationDateRange(DateRangeBoundaries.MAX)
                    },
                    floatingLabel: selectedMigrationMode.dateLabel
                })))));
            }
        }, {
            key: "offerTypeSection",
            value: function offerTypeSection() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("offerTypeTitle")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table u-w-100"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell u-w-100 u-no-padding-right"
                }, /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.entry.errors && this.props.entry.errors.offerType
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, babelHelpers.extends({}, this.getPropsForInput('offerType', true), {
                    label: this.getDescription("offerTypeTitle"),
                    options: this.getOptionsFromState('offerTypes'),
                    withEmptyOption: true,
                    emptyOption: {
                        value: '',
                        description: this.getDescription("offerTypeDefaultText")
                    },
                    onChange: this.recalculateConsent.bind(this)
                })))), /*#__PURE__*/ _react.default.createElement(_MulticartMnpTooltip.default, {
                    content: this.props.descriptions.offerTypeTooltip || this.props.offerTypeTooltip,
                    className: "u-table-cell"
                })))));
            }
        }, {
            key: "currentOperatorSection",
            value: function currentOperatorSection() {
                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("currentOperatorText")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table u-w-100"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell u-w-100 u-no-padding-right"
                }, /*#__PURE__*/ _react.default.createElement(_ErrorRow.default, {
                    errors: this.props.entry.errors && this.props.entry.errors.operator
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, babelHelpers.extends({}, this.getPropsForInput('operator', true), {
                    label: this.getDescription("currentOperatorText"),
                    options: this.sortOperators(this.getOptionsFromState('operators', true))
                })))), /*#__PURE__*/ _react.default.createElement(_MulticartMnpTooltip.default, {
                    content: this.props.descriptions.operatorTooltip || this.props.operatorTooltip,
                    className: "u-table-cell"
                })))));
            }
        }, {
            key: "temporalNumberSection",
            value: function temporalNumberSection(temporalNumberExists) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-spacing-s"
                }, this.getDescription("temporalNumberText")), temporalNumberExists && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col u-no-padding-left "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell u-w-50 u-no-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.transformMsisdn(this.props.mnpData[this.props.entryIndex].temporalNumber))), /*#__PURE__*/ _react.default.createElement(_MulticartMnpTooltip.default, {
                    content: this.props.descriptions.temporalNumberTooltip || this.props.temporalNumberTooltip,
                    className: "u-table-cell u-vertical-top u-small-hide",
                    tooltipClassName: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs-s u-spacing-left-s"
                }), /*#__PURE__*/ _react.default.createElement(_MulticartMnpTooltip.default, {
                    content: this.props.descriptions.temporalNumberTooltip || this.props.temporalNumberTooltip,
                    className: "u-table-cell u-vertical-top u-medium-hide u-large-hide",
                    tooltipClassName: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs u-spacing-left-s"
                })), !temporalNumberExists && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col u-no-padding-left "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-table-cell u-w-50 u-no-padding-right"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("missingTemporalNumberText"))))));
            }
        }, {
            key: "agreementSection",
            value: function agreementSection() {
                return /*#__PURE__*/ _react.default.createElement("div", null, this.props.entry.agreementType !== '3' && [ /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("currentContractTitle")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("fieldset", {
                    key: this.wrapWithBundleNo("fieldset"),
                    className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical"
                }, /*#__PURE__*/ _react.default.createElement("legend", {
                    className: "u-acc-hide"
                }, this.getDescription("currentContractText")), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, {
                    name: this.wrapWithBundleNo("agreementType"),
                    checked: this.props.entry.agreementType === '1',
                    value: "1",
                    onChange: this.onAgreementTypeChange.bind(this),
                    key: this.wrapWithBundleNo("agreementType-1"),
                    text: this.getDescription("naturalPersonOption")
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, {
                    name: this.wrapWithBundleNo("agreementType"),
                    checked: this.props.entry.agreementType === '2',
                    value: "2",
                    onChange: this.onAgreementTypeChange.bind(this),
                    key: this.wrapWithBundleNo("agreementType-2"),
                    text: this.getDescription("economicActivityOption")
                }))))], this.props.entry.agreementType === '2' && !this.props.isB2B && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("economicActivityTitle")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12 u-spacing"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({
                    label: this.getDescription("economicActivityText")
                }, this.getPropsForInput('businessName', true), {
                    labelType: "floating"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12 u-spacing"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSelect, babelHelpers.extends({}, this.getPropsForInput('identifier', true), {
                    options: [{
                        value: 'NIP',
                        description: 'NIP'
                    }, {
                        value: 'REGON',
                        description: 'REGON'
                    }]
                })))), this.props.entry.identifier === 'NIP' && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({
                    label: this.getDescription("nipText")
                }, this.getPropsForInput('nip', true), {
                    labelType: "floating"
                })))), this.props.entry.identifier === 'REGON' && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({
                    label: this.getDescription("regonText")
                }, this.getPropsForInput('regon', true), {
                    labelType: "floating"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("headquartersAddressTitle")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("fieldset", {
                    className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, {
                    type: "radio",
                    checked: this.props.entry.isHeadquartersAddressSame === true,
                    name: "isHeadquartersAddressSame",
                    value: 'true',
                    onChange: this.onHeadquartersAddressSameChange.bind(this),
                    id: this.wrapWithBundleNo("isHeadquartersAddressSame-1")
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.getDescription("sameAddressOption"))), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, {
                    type: "radio",
                    checked: this.props.entry.isHeadquartersAddressSame === false,
                    name: "isHeadquartersAddressSame",
                    value: 'false',
                    onChange: this.onHeadquartersAddressSameChange.bind(this),
                    id: this.wrapWithBundleNo("isHeadquartersAddressSame-2")
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.getDescription("otherAddressOption"))), this.props.entry.errors.isHeadquartersAddressSame))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, this.props.entry.isHeadquartersAddressSame === false && !this.props.isB2B && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_MulticartMnpBusinessAddressComponent.default, babelHelpers.extends({}, this.props, {
                    onChange: this.onValueChange.bind(this)
                }))))), this.props.entry.agreementType === '1' && this.props.isB2B && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing u-spacing-l-xl u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, "Osoba fizyczna"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForInput('firstName', true), {
                    label: "Imi\u0119",
                    labelType: "floating"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForInput('lastName', true), {
                    label: "Nazwisko",
                    labelType: "floating",
                    className: "u-spacing-top-l"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForInput('idNumber', true), {
                    label: "Dow\xF3d osobisty",
                    mask: "aaa999999",
                    placeholder: "______",
                    labelType: "floating",
                    className: "u-spacing-top-l"
                })))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing-l u-no-spacing-top"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_LabeledInput.default, babelHelpers.extends({}, this.getPropsForInput('pesel', true), {
                    label: "Pesel",
                    mask: "99999999999",
                    placeholder: "___________",
                    labelType: "floating",
                    className: "u-spacing-top-l"
                }))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", null, this.getDescription("headquartersAddressTitle")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("fieldset", {
                    className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio u-padding-right-l"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, {
                    type: "radio",
                    checked: this.props.entry.isHeadquartersAddressSame === true,
                    name: "isHeadquartersAddressSame",
                    value: 'true',
                    onChange: this.onHeadquartersAddressSameChange.bind(this),
                    id: this.wrapWithBundleNo("isHeadquartersAddressSame-1")
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.getDescription("sameAddressOption"))), /*#__PURE__*/ _react.default.createElement("label", {
                    className: "o-radio opl-radio"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, {
                    type: "radio",
                    checked: this.props.entry.isHeadquartersAddressSame === false,
                    name: "isHeadquartersAddressSame",
                    value: 'false',
                    onChange: this.onHeadquartersAddressSameChange.bind(this),
                    id: this.wrapWithBundleNo("isHeadquartersAddressSame-2")
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci"
                }), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-ci-label"
                }, this.getDescription("otherAddressOption"))), this.props.entry.errors.isHeadquartersAddressSame))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, this.props.entry.isHeadquartersAddressSame === false && this.props.isB2B && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement(_MulticartMnpBusinessAddressComponent.default, babelHelpers.extends({}, this.props, {
                    onChange: this.onValueChange.bind(this)
                }))))));
            }
        }, {
            key: "render",
            value: function render() {
                var _this6 = this;

                var selectedMigrationMode = this.getMigrationModes().find(function(mm) {
                    return mm.value === _this6.props.entry.migrationMode;
                });
                var temporalNumberExists = this.props.mnpData && this.props.mnpData[this.props.entryIndex] && this.props.mnpData[this.props.entryIndex].temporalNumber;
                var notOnlySecondStep = this.props.mnpData.filter(function(e) {
                    return !_OnlineUtils.default.isMnpApplicationSecondStep(e.processType);
                }).length > 0;

                var isSecondStep = _OnlineUtils.default.isMnpApplicationSecondStep(this.props.entry['processType']);

                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form"
                }, this.props.entryIndex === 0 && notOnlySecondStep && this.contactMethodSection(), /*#__PURE__*/ _react.default.createElement(_Expander.Expander, {
                    scrollToSelected: false,
                    variant: "section",
                    sectionClassName: "is-expanded"
                }, /*#__PURE__*/ _react.default.createElement(_Expander.Section, {
                    header: this.migratedMSISDNSection(),
                    headerBelow: false
                }, this.temporalNumberSection(temporalNumberExists), !isSecondStep && this.currentOperatorSection(), !isSecondStep && this.offerTypeSection(), !isSecondStep && this.agreementSection(), !isSecondStep && this.getMigrationModes().length > 0 && this.migrationModeSection(selectedMigrationMode), !isSecondStep && this.props.entryIndex === 0 && this.props.mnpData && this.props.mnpData.length > 1 && this.props.isMnpDataFilled && this.props.isB2B && this.sameDataCheckboxSection())));
            }
        }, {
            key: "getDescription",
            value: function getDescription(descName) {
                return this.props.descriptions[descName] || this.props[descName];
            }
        }]);
        return MulticartMnpSectionComponent;
    }(_react.Component);

    MulticartMnpSectionComponent.defaultProps = {
        temporalNumberTooltip: "Karta SIM, którą otrzymasz będzie aktywna z tym numerem do daty przeniesienia numeru. W dacie przeniesienia nastąpi zmiana numeru na Twój, numer przenoszony.",
        operatorTooltip: "Wybierz Operatora sieci komórkowej u którego posiadasz obecnie wskazany do przeniesienia numer.",
        offerTypeTooltip: "Wybierz rodzaj oferty jaki posiadasz na wskazanym numerze u obecnego operatora.",
        contactMethodTitle: "Sposób kontaktu",
        mnpNumberText: "Numer przenoszony",
        temporalNumberText: "Numer do czasu przeniesienia",
        currentOperatorText: "Twój obecny operator",
        offerTypeTitle: "Typ oferty",
        offerTypeDefaultText: "Wybierz typ oferty u obecnego operatora",
        currentContractTitle: "Właścicielem numeru u obecnego operatora jest",
        currentContractText: "Wybierz rodzaj umowy u obecnego operatora",
        naturalPersonOption: "Osoba fizyczna",
        economicActivityOption: "Osoba fizyczna prowadząca działalność gospodarczą",
        economicActivityTitle: "Działalność gospodarcza",
        economicActivityText: "Nazwa działalności gospodarczej",
        nipText: "Podaj NIP",
        regonText: "Podaj REGON",
        headquartersAddressTitle: "Adres siedziby",
        sameAddressOption: "Taki sam jak podany powyżej",
        otherAddressOption: "Inny adres",
        transferModeTitle: "Tryb przeniesienia",
        legalForm: "",
        missingTemporalNumberText: "BRAK"
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            isMnpDataFilled: (0, _selectors.isMnpDataFilled)(state),
            legalForm: (0, _selectors.getLegalForm)(state),
            getMnpContactMethods: function getMnpContactMethods(contactMethods) {
                return (0, _selectors.getMnpContactMethods)(contactMethods)(state);
            }
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            registerNextStepCondition: function registerNextStepCondition(condition) {
                return dispatch((0, _data.registerNextStepCondition)(condition));
            },
            switchSameMnpData: function switchSameMnpData() {
                return dispatch((0, _app.switchSameMnpData)());
            },
            requestRecalculateConsentsStrategy: function requestRecalculateConsentsStrategy(bundleNo, offerType) {
                return dispatch((0, _data.requestRecalculateConsentsStrategy)(bundleNo, offerType));
            }
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MulticartMnpSectionComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartMnpSectionComponent.js.map