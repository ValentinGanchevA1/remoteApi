define(["exports", "react", "react-redux", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Datepicker", "eshop/modules/core/components/hoc/ErrorRow", "eshop/modules/core/components/hoc/LabeledInput", "./MulticartMnpTooltip", "./MulticartMnpBusinessAddressComponent", "../../actions/data", "eshop/modules/core/components/ui/Expander", "../../actions/app", "eshop/modules/checkout/selectors", "eshop/utils/OnlineUtils"], function(e, o, t, l, r, s, n, i, p, c, u, d, a, m) {
    "use strict";

    function h(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(t);
            e && (l = l.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, l)
        }
        return a
    }

    function f(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? h(Object(a), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, a[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return t
    }

    function g(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), s = babelHelpers.interopRequireDefault(s), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i), p = babelHelpers.interopRequireDefault(p), m = babelHelpers.interopRequireDefault(m);
    var y = "minDate",
        v = "maxDate",
        b = function(e) {
            babelHelpers.inherits(a, e);
            var t = g(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidUpdate",
                value: function() {
                    this.validateSelectedContactMethod()
                }
            }, {
                key: "validateSelectedContactMethod",
                value: function() {
                    var e = this.getContactMethods(),
                        t = this.props.entry.contactMethod;
                    e.find(function(e) {
                        return e.value === t
                    }) || this.onValueChange({
                        name: "contactMethod",
                        value: e[0].value
                    })
                }
            }, {
                key: "wrapWithBundleNo",
                value: function(e) {
                    return "mnpData-" + e + "-" + this.props.entry.bundleNo
                }
            }, {
                key: "onSimpleRadioValueChange",
                value: function(e) {
                    var t = e.target,
                        a = t.name,
                        l = t.value,
                        r = t.checked;
                    this.props.changeCustomerMnpDataFormField({
                        name: a,
                        value: l,
                        checked: r,
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.props.isB2B !== e.isB2B && "JDG" === e.legalForm || this.props.isB2B && "JDG" === e.legalForm && "JDG" !== this.props.legalForm ? this.props.changeCustomerMnpDataFormField({
                        name: "agreementType",
                        value: "2",
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    }) : !this.props.isB2B || null == e.legalForm || "JDG" === e.legalForm || "JDG" !== this.props.legalForm && null != this.props.legalForm || this.props.changeCustomerMnpDataFormField({
                        name: "agreementType",
                        value: "3",
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    })
                }
            }, {
                key: "onAgreementTypeChange",
                value: function(e) {
                    this.props.changeCustomerMnpDataFormField({
                        name: "agreementType",
                        value: e.target.value,
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    })
                }
            }, {
                key: "onHeadquartersAddressSameChange",
                value: function(e) {
                    "true" == e.target.value ? this.props.changeCustomerMnpDataFormField({
                        name: "isHeadquartersAddressSame",
                        value: !0,
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    }) : this.props.changeCustomerMnpDataFormField({
                        name: "isHeadquartersAddressSame",
                        value: e.target.value,
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    })
                }
            }, {
                key: "onValueChange",
                value: function(e) {
                    this.props.changeCustomerMnpDataFormField(f({}, e, {
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    }))
                }
            }, {
                key: "recalculateConsent",
                value: function(e) {
                    this.props.changeCustomerMnpDataFormField(f({}, e, {
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    })), this.props.requestRecalculateConsentsStrategy(this.props.entry.bundleNo, e.value)
                }
            }, {
                key: "getMigrationDateRange",
                value: function(e) {
                    var t = this;
                    if (this.props.mnpFormData && this.props.mnpFormData.migrationDateRanges) return this.props.mnpFormData.migrationDateRanges.filter(function(e) {
                        return e.migrationType === t.props.entry.migrationMode
                    }).reduce(function(e) {
                        return e
                    })[e]
                }
            }, {
                key: "getPropsForInput",
                value: function(e, t) {
                    var a = {
                        name: e,
                        id: this.wrapWithBundleNo(e),
                        defaultValue: (t ? this.props.entry[e] : "") || "",
                        selected: this.props.entry[e],
                        errors: this.props.entry.errors && this.props.entry.errors[e]
                    };
                    return t ? a.onChange = this.onValueChange.bind(this) : a.onBlur = this.onValueChange.bind(this), a
                }
            }, {
                key: "getOptionsFromState",
                value: function(e, t) {
                    if (this.props.mnpFormData && this.props.mnpFormData[e] && this.props.mnpFormData[e] instanceof Array) {
                        var a = this.props.mnpFormData[e].slice();
                        return t && a.sort(function(e, t) {
                            return e.priority - t.priority
                        }), a
                    }
                    return []
                }
            }, {
                key: "getContactMethods",
                value: function() {
                    return this.props.getMnpContactMethods(this.props.mnpFormData.contactMethods)
                }
            }, {
                key: "transformMsisdn",
                value: function(e) {
                    return e.replace(/^(\d{3})(\d{3})(\d{3})$/, function() {
                        return arguments[1] + " " + arguments[2] + " " + arguments[3]
                    })
                }
            }, {
                key: "getMnpFormDataByAttribute",
                value: function(e) {
                    return "migrationModes" === e ? this.getMigrationModes() : this.props.mnpFormData[e]
                }
            }, {
                key: "getTooltipContentForProperty",
                value: function(e, t) {
                    var a = this;
                    if (this.props.mnpFormData && this.props.mnpFormData[e] && this.props.mnpFormData[e] instanceof Array && this.props.entry[t]) return this.getMnpFormDataByAttribute(e).filter(function(e) {
                        return e.value === a.props.entry[t]
                    }).reduce(function(e) {
                        return e
                    }).tooltipDescription
                }
            }, {
                key: "sortOperators",
                value: function(e) {
                    var t = this,
                        a = e.slice().sort(function(e, t) {
                            return e.priority === t.priority ? e.description.localeCompare(t.description) : e.priority - t.priority
                        });
                    if (this.props.mnpData && this.props.mnpData[this.props.entryIndex] && this.props.mnpData[this.props.entryIndex].operator) {
                        var l = a.filter(function(e) {
                            return e.value === t.props.mnpData[t.props.entryIndex].operator || "NON CONFIGURED" === t.props.mnpData[t.props.entryIndex].operator
                        }).reduce(function(e) {
                            return e
                        });
                        a.splice(a.indexOf(l), 1), a.unshift(l)
                    }
                    return a
                }
            }, {
                key: "getMigrationModes",
                value: function() {
                    var t = this;
                    return this.getOptionsFromState("migrationModes", !0).filter(function(e) {
                        return e.operatorOfferTypeCode === t.props.entry.offerType
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    if (this.props.registerNextStepCondition("mnpData"), null === this.props.entry.operator) {
                        var e = this.sortOperators(this.getOptionsFromState("operators", !0))[0].value;
                        this.props.changeCustomerMnpDataFormField({
                            name: "operator",
                            value: e,
                            entryIndex: this.props.entryIndex,
                            defaults: this.props.mnpFormData
                        })
                    }
                    this.props.isB2B && "JDG" === this.props.legalForm && this.props.changeCustomerMnpDataFormField({
                        name: "agreementType",
                        value: "2",
                        entryIndex: this.props.entryIndex,
                        defaults: this.props.mnpFormData
                    })
                }
            }, {
                key: "getPropsForInputWithEmptyOption",
                value: function(e, t) {
                    return {
                        name: e,
                        id: this.wrapWithBundleNo(e),
                        selected: t ? void 0 : this.props.entry[e],
                        errors: this.props.entry.errors && this.props.entry.errors[e],
                        onChange: this.onValueChange.bind(this),
                        withEmptyOption: t
                    }
                }
            }, {
                key: "contactMethodSection",
                value: function() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, this.getDescription("contactMethodTitle")))), o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(s.default, {
                        errors: this.props.entry.errors && this.props.entry.errors.contactMethod
                    }, o.default.createElement(l.OraSelect, babelHelpers.extends({}, this.getPropsForInputWithEmptyOption("contactMethod", !1), {
                        label: this.getDescription("contactMethodTitle"),
                        options: this.getContactMethods()
                    })))), o.default.createElement("div", {
                        className: "l-col l-col-6 l-col-small-12"
                    }, o.default.createElement("p", null, this.getTooltipContentForProperty("contactMethods", "contactMethod")))))
                }
            }, {
                key: "handleSameMnpData",
                value: function() {
                    this.props.switchSameMnpData()()
                }
            }, {
                key: "sameDataCheckboxSection",
                value: function() {
                    var t = this;
                    return o.default.createElement("div", {
                        className: "l-row u-spacing-top-l-xl"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("label", {
                        className: "o-checkbox opl-checkbox"
                    }, o.default.createElement("input", {
                        type: "checkbox",
                        onChange: function(e) {
                            t.handleSameMnpData(e)
                        }
                    }), o.default.createElement("span", {
                        className: "o-ci"
                    }), o.default.createElement("span", {
                        className: "o-ci-label"
                    }, "Dla pozostałych przenoszonych numerów tak samo jak powyżej"))))
                }
            }, {
                key: "migratedMSISDNSection",
                value: function() {
                    return o.default.createElement("div", {
                        className: "l-row u-small-no-margin"
                    }, o.default.createElement(u.Toggle, null, o.default.createElement("h3", null, o.default.createElement("div", {
                        className: "u-spacing-s"
                    }, this.getDescription("mnpNumberText"), this.props.mnpData && this.props.mnpData[this.props.entryIndex] && " " + this.transformMsisdn(this.props.mnpData[this.props.entryIndex].mobileNumber)))))
                }
            }, {
                key: "migrationModeSection",
                value: function(e) {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, this.getDescription("transferModeTitle")))), o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(s.default, {
                        errors: this.props.entry.errors && this.props.entry.errors.migrationMode
                    }, o.default.createElement(l.OraSelect, babelHelpers.extends({
                        label: this.getDescription("transferModeTitle")
                    }, this.getPropsForInput("migrationMode", !0), {
                        options: this.getMigrationModes()
                    })))), o.default.createElement("div", {
                        className: "l-col l-col-6 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("p", null, this.getTooltipContentForProperty("migrationModes", "migrationMode")))), e.showDateInput && o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(s.default, {
                        errors: this.props.entry.errors && this.props.entry.errors.date
                    }, o.default.createElement(r.DatePicker, {
                        key: "migrationMode_datePicker",
                        id: this.wrapWithBundleNo("date"),
                        name: "date",
                        onChange: this.onValueChange.bind(this),
                        value: this.props.entry.date,
                        options: {
                            disabledWeekDays: [],
                            minDate: this.getMigrationDateRange(y),
                            maxDate: this.getMigrationDateRange(v)
                        },
                        floatingLabel: e.dateLabel
                    })))))
                }
            }, {
                key: "offerTypeSection",
                value: function() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, this.getDescription("offerTypeTitle")))), o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("div", {
                        className: "u-table u-w-100"
                    }, o.default.createElement("div", {
                        className: "u-table-cell u-w-100 u-no-padding-right"
                    }, o.default.createElement(s.default, {
                        errors: this.props.entry.errors && this.props.entry.errors.offerType
                    }, o.default.createElement(l.OraSelect, babelHelpers.extends({}, this.getPropsForInput("offerType", !0), {
                        label: this.getDescription("offerTypeTitle"),
                        options: this.getOptionsFromState("offerTypes"),
                        withEmptyOption: !0,
                        emptyOption: {
                            value: "",
                            description: this.getDescription("offerTypeDefaultText")
                        },
                        onChange: this.recalculateConsent.bind(this)
                    })))), o.default.createElement(i.default, {
                        content: this.props.descriptions.offerTypeTooltip || this.props.offerTypeTooltip,
                        className: "u-table-cell"
                    })))))
                }
            }, {
                key: "currentOperatorSection",
                value: function() {
                    return o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, this.getDescription("currentOperatorText")))), o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("div", {
                        className: "u-table u-w-100"
                    }, o.default.createElement("div", {
                        className: "u-table-cell u-w-100 u-no-padding-right"
                    }, o.default.createElement(s.default, {
                        errors: this.props.entry.errors && this.props.entry.errors.operator
                    }, o.default.createElement(l.OraSelect, babelHelpers.extends({}, this.getPropsForInput("operator", !0), {
                        label: this.getDescription("currentOperatorText"),
                        options: this.sortOperators(this.getOptionsFromState("operators", !0))
                    })))), o.default.createElement(i.default, {
                        content: this.props.descriptions.operatorTooltip || this.props.operatorTooltip,
                        className: "u-table-cell"
                    })))))
                }
            }, {
                key: "temporalNumberSection",
                value: function(e) {
                    return o.default.createElement("div", {
                        className: "l-row u-spacing-l"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-3 l-col-small-12"
                    }, o.default.createElement("div", {
                        className: "u-spacing-s"
                    }, this.getDescription("temporalNumberText")), e && o.default.createElement("div", {
                        className: "l-col u-no-padding-left "
                    }, o.default.createElement("div", {
                        className: "u-table-cell u-w-50 u-no-padding-right"
                    }, o.default.createElement("h4", null, this.transformMsisdn(this.props.mnpData[this.props.entryIndex].temporalNumber))), o.default.createElement(i.default, {
                        content: this.props.descriptions.temporalNumberTooltip || this.props.temporalNumberTooltip,
                        className: "u-table-cell u-vertical-top u-small-hide",
                        tooltipClassName: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs-s u-spacing-left-s"
                    }), o.default.createElement(i.default, {
                        content: this.props.descriptions.temporalNumberTooltip || this.props.temporalNumberTooltip,
                        className: "u-table-cell u-vertical-top u-medium-hide u-large-hide",
                        tooltipClassName: "o-tooltip__trigger o-tooltip--top g-icon g-icon--only g-icon--hint g-icon--xs u-spacing-left-s"
                    })), !e && o.default.createElement("div", {
                        className: "l-col u-no-padding-left "
                    }, o.default.createElement("div", {
                        className: "u-table-cell u-w-50 u-no-padding-right"
                    }, o.default.createElement("h4", null, this.getDescription("missingTemporalNumberText"))))))
                }
            }, {
                key: "agreementSection",
                value: function() {
                    return o.default.createElement("div", null, "3" !== this.props.entry.agreementType && [o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, this.getDescription("currentContractTitle")))), o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("fieldset", {
                        key: this.wrapWithBundleNo("fieldset"),
                        className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical"
                    }, o.default.createElement("legend", {
                        className: "u-acc-hide"
                    }, this.getDescription("currentContractText")), o.default.createElement(l.OraSimpleRadio, {
                        name: this.wrapWithBundleNo("agreementType"),
                        checked: "1" === this.props.entry.agreementType,
                        value: "1",
                        onChange: this.onAgreementTypeChange.bind(this),
                        key: this.wrapWithBundleNo("agreementType-1"),
                        text: this.getDescription("naturalPersonOption")
                    }), o.default.createElement(l.OraSimpleRadio, {
                        name: this.wrapWithBundleNo("agreementType"),
                        checked: "2" === this.props.entry.agreementType,
                        value: "2",
                        onChange: this.onAgreementTypeChange.bind(this),
                        key: this.wrapWithBundleNo("agreementType-2"),
                        text: this.getDescription("economicActivityOption")
                    }))))], "2" === this.props.entry.agreementType && !this.props.isB2B && o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-row u-spacing u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, this.getDescription("economicActivityTitle")))), o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12 u-spacing"
                    }, o.default.createElement(n.default, babelHelpers.extends({
                        label: this.getDescription("economicActivityText")
                    }, this.getPropsForInput("businessName", !0), {
                        labelType: "floating"
                    })))), o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12 u-spacing"
                    }, o.default.createElement(l.OraSelect, babelHelpers.extends({}, this.getPropsForInput("identifier", !0), {
                        options: [{
                            value: "NIP",
                            description: "NIP"
                        }, {
                            value: "REGON",
                            description: "REGON"
                        }]
                    })))), "NIP" === this.props.entry.identifier && o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(n.default, babelHelpers.extends({
                        label: this.getDescription("nipText")
                    }, this.getPropsForInput("nip", !0), {
                        labelType: "floating"
                    })))), "REGON" === this.props.entry.identifier && o.default.createElement("div", {
                        className: "l-row u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(n.default, babelHelpers.extends({
                        label: this.getDescription("regonText")
                    }, this.getPropsForInput("regon", !0), {
                        labelType: "floating"
                    })))), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, this.getDescription("headquartersAddressTitle")))), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("fieldset", {
                        className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical"
                    }, o.default.createElement("label", {
                        className: "o-radio opl-radio u-padding-right-l"
                    }, o.default.createElement(l.OraSimpleRadio, {
                        type: "radio",
                        checked: !0 === this.props.entry.isHeadquartersAddressSame,
                        name: "isHeadquartersAddressSame",
                        value: "true",
                        onChange: this.onHeadquartersAddressSameChange.bind(this),
                        id: this.wrapWithBundleNo("isHeadquartersAddressSame-1")
                    }), o.default.createElement("span", {
                        className: "o-ci"
                    }), o.default.createElement("span", {
                        className: "o-ci-label"
                    }, this.getDescription("sameAddressOption"))), o.default.createElement("label", {
                        className: "o-radio opl-radio"
                    }, o.default.createElement(l.OraSimpleRadio, {
                        type: "radio",
                        checked: !1 === this.props.entry.isHeadquartersAddressSame,
                        name: "isHeadquartersAddressSame",
                        value: "false",
                        onChange: this.onHeadquartersAddressSameChange.bind(this),
                        id: this.wrapWithBundleNo("isHeadquartersAddressSame-2")
                    }), o.default.createElement("span", {
                        className: "o-ci"
                    }), o.default.createElement("span", {
                        className: "o-ci-label"
                    }, this.getDescription("otherAddressOption"))), this.props.entry.errors.isHeadquartersAddressSame))), o.default.createElement("div", {
                        className: "l-row"
                    }, !1 === this.props.entry.isHeadquartersAddressSame && !this.props.isB2B && o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(p.default, babelHelpers.extends({}, this.props, {
                        onChange: this.onValueChange.bind(this)
                    }))))), "1" === this.props.entry.agreementType && this.props.isB2B && o.default.createElement("div", null, o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-row u-spacing u-spacing-l-xl u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, "Osoba fizyczna"))), o.default.createElement("div", {
                        className: "l-row u-spacing-l u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(n.default, babelHelpers.extends({}, this.getPropsForInput("firstName", !0), {
                        label: "Imię",
                        labelType: "floating"
                    })))), o.default.createElement("div", {
                        className: "l-row u-spacing-l u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(n.default, babelHelpers.extends({}, this.getPropsForInput("lastName", !0), {
                        label: "Nazwisko",
                        labelType: "floating",
                        className: "u-spacing-top-l"
                    })))), o.default.createElement("div", {
                        className: "l-row u-spacing-l u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(n.default, babelHelpers.extends({}, this.getPropsForInput("idNumber", !0), {
                        label: "Dowód osobisty",
                        mask: "aaa999999",
                        placeholder: "______",
                        labelType: "floating",
                        className: "u-spacing-top-l"
                    })))), o.default.createElement("div", {
                        className: "l-row u-spacing-l u-no-spacing-top"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(n.default, babelHelpers.extends({}, this.getPropsForInput("pesel", !0), {
                        label: "Pesel",
                        mask: "99999999999",
                        placeholder: "___________",
                        labelType: "floating",
                        className: "u-spacing-top-l"
                    }))))), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("h4", null, this.getDescription("headquartersAddressTitle")))), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement("fieldset", {
                        className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical"
                    }, o.default.createElement("label", {
                        className: "o-radio opl-radio u-padding-right-l"
                    }, o.default.createElement(l.OraSimpleRadio, {
                        type: "radio",
                        checked: !0 === this.props.entry.isHeadquartersAddressSame,
                        name: "isHeadquartersAddressSame",
                        value: "true",
                        onChange: this.onHeadquartersAddressSameChange.bind(this),
                        id: this.wrapWithBundleNo("isHeadquartersAddressSame-1")
                    }), o.default.createElement("span", {
                        className: "o-ci"
                    }), o.default.createElement("span", {
                        className: "o-ci-label"
                    }, this.getDescription("sameAddressOption"))), o.default.createElement("label", {
                        className: "o-radio opl-radio"
                    }, o.default.createElement(l.OraSimpleRadio, {
                        type: "radio",
                        checked: !1 === this.props.entry.isHeadquartersAddressSame,
                        name: "isHeadquartersAddressSame",
                        value: "false",
                        onChange: this.onHeadquartersAddressSameChange.bind(this),
                        id: this.wrapWithBundleNo("isHeadquartersAddressSame-2")
                    }), o.default.createElement("span", {
                        className: "o-ci"
                    }), o.default.createElement("span", {
                        className: "o-ci-label"
                    }, this.getDescription("otherAddressOption"))), this.props.entry.errors.isHeadquartersAddressSame))), o.default.createElement("div", {
                        className: "l-row"
                    }, !1 === this.props.entry.isHeadquartersAddressSame && this.props.isB2B && o.default.createElement("div", {
                        className: "l-col l-col-4 l-col-medium-6 l-col-small-12"
                    }, o.default.createElement(p.default, babelHelpers.extends({}, this.props, {
                        onChange: this.onValueChange.bind(this)
                    }))))))
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.getMigrationModes().find(function(e) {
                            return e.value === t.props.entry.migrationMode
                        }),
                        a = this.props.mnpData && this.props.mnpData[this.props.entryIndex] && this.props.mnpData[this.props.entryIndex].temporalNumber,
                        l = 0 < this.props.mnpData.filter(function(e) {
                            return !m.default.isMnpApplicationSecondStep(e.processType)
                        }).length,
                        r = m.default.isMnpApplicationSecondStep(this.props.entry.processType);
                    return o.default.createElement("div", {
                        className: "opl-form"
                    }, 0 === this.props.entryIndex && l && this.contactMethodSection(), o.default.createElement(u.Expander, {
                        scrollToSelected: !1,
                        variant: "section",
                        sectionClassName: "is-expanded"
                    }, o.default.createElement(u.Section, {
                        header: this.migratedMSISDNSection(),
                        headerBelow: !1
                    }, this.temporalNumberSection(a), !r && this.currentOperatorSection(), !r && this.offerTypeSection(), !r && this.agreementSection(), !r && 0 < this.getMigrationModes().length && this.migrationModeSection(e), !r && 0 === this.props.entryIndex && this.props.mnpData && 1 < this.props.mnpData.length && this.props.isMnpDataFilled && this.props.isB2B && this.sameDataCheckboxSection())))
                }
            }, {
                key: "getDescription",
                value: function(e) {
                    return this.props.descriptions[e] || this.props[e]
                }
            }]), a
        }(o.Component);
    b.defaultProps = {
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
    var E = (0, t.connect)(function(t) {
        return {
            isMnpDataFilled: (0, a.isMnpDataFilled)(t),
            legalForm: (0, a.getLegalForm)(t),
            getMnpContactMethods: function(e) {
                return (0, a.getMnpContactMethods)(e)(t)
            }
        }
    }, function(a) {
        return {
            registerNextStepCondition: function(e) {
                return a((0, c.registerNextStepCondition)(e))
            },
            switchSameMnpData: function() {
                return a((0, d.switchSameMnpData)())
            },
            requestRecalculateConsentsStrategy: function(e, t) {
                return a((0, c.requestRecalculateConsentsStrategy)(e, t))
            }
        }
    })(b);
    e.default = E
});
//# sourceMappingURL=MulticartMnpSectionComponent.js.map