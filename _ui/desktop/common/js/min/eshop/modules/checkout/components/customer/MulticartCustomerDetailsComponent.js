define(["exports", "react", "prop-types", "eshop/modules/core/components/hoc/LabeledInput", "react-redux", "../../selectors", "../../actions/app", "../../../cbs/actions/cbs", "../../actions/data", "eshop/components/OraFloatingLabelSelect", "../../utils/utils", "../datepicker/DatePickerByDocumentTypeComponent"], function(e, t, r, o, a, s, l, i, n, p, u, d) {
    "use strict";

    function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, a)
        }
        return r
    }

    function m(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function f(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.MulticartCustomerDetailsView = void 0, t = babelHelpers.interopRequireWildcard(t), r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o), d = babelHelpers.interopRequireDefault(d);
    var g = function(e) {
        babelHelpers.inherits(a, e);
        var r = f(a);

        function a(e) {
            var t;
            return babelHelpers.classCallCheck(this, a), (t = r.call(this, e)).props.setCountries(t.props.foreignCountries), t
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {
                this.props.requestCartCustomerData()
            }
        }, {
            key: "getPropsForPesel",
            value: function(e) {
                return m({}, (0, u.getPropsForInput)(e, this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations), {
                    errors: !this.props.noPesel && this.props.errors && this.props.errors[e],
                    mask: "99999999999",
                    placeholder: "___________"
                })
            }
        }, {
            key: "getPropsForCensoredPesel",
            value: function(e) {
                return m({}, (0, u.getPropsForInput)(e, this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations), {
                    valid: void 0
                })
            }
        }, {
            key: "getPropsForId",
            value: function(e, t) {
                var r = m({}, (0, u.getPropsForInput)(e, this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations));
                return t && (r.mask = "aaa999999", r.placeholder = "______"), r
            }
        }, {
            key: "render",
            value: function() {
                return this.props.show && !this.props.isBusinessClient ? t.default.createElement("div", {
                    className: "opl-form l-table-row__wrapper"
                }, this.props.show && t.default.createElement("div", null, t.default.createElement("div", {
                    className: "l-row u-no-margin-top"
                }, t.default.createElement("div", {
                    className: "u-spacing-top-l l-col l-col-small-12 l-col-medium-6 l-col-4 u-no-padding-right u-no-padding-left u-small-no-padding"
                }, this.props.readOnly || this.props.existing ? t.default.createElement(o.default, babelHelpers.extends({}, this.getPropsForCensoredPesel("pesel"), (0, u.getInputValidationParams)("pesel", this.props))) : t.default.createElement(o.default, babelHelpers.extends({}, this.getPropsForPesel("pesel"), (0, u.getInputValidationParams)("pesel", this.props)))), t.default.createElement("div", {
                    hidden: this.props.foreigner,
                    className: "u-spacing-top-l l-col l-col-small-12 l-col-medium-6 l-col-8 u-no-padding-right u-small-no-padding u-padding-left-l"
                }, t.default.createElement(o.default, babelHelpers.extends({}, this.getPropsForId("idNumber", !0), (0, u.getInputValidationParams)("idNumber", this.props)))), t.default.createElement("div", {
                    hidden: !this.props.foreigner,
                    className: "u-spacing-top-l l-col l-col-small-12 l-col-medium-6 l-col-8 u-no-padding-right u-small-no-padding u-padding-left-l"
                }, t.default.createElement(o.default, babelHelpers.extends({}, (0, u.getPropsForInput)("country", this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations), (0, u.getInputValidationParams)("country", this.props), {
                    value: (0, u.getCountryName)(this.props.foreignCountries, this.props.country),
                    suggestions: (0, u.getCountrySuggestions)(this.props.foreignCountries, this.props.country),
                    mapSuggestion: u.mapCountrySuggestion,
                    onBlur: this.props.changeCustomerCountry,
                    autoComplete: !0,
                    minLength: 1
                })))), t.default.createElement("div", {
                    hidden: !this.props.foreigner,
                    className: "u-spacing-top-l l-row u-no-margin-top"
                }, t.default.createElement("div", {
                    className: "l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-left u-small-no-padding u-spacing-l"
                }, t.default.createElement(p.OraFloatingLabelSelect, babelHelpers.extends({}, (0, u.getPropsForSelect)("identification", this.props, this.props.changeCustomerDataFormField), (0, u.getInputValidationParams)("identification", this.props), {
                    className: "g-gray1-bg u-font-small",
                    options: (0, u.prepareForeignerIdentificationTypes)(this.props.foreignerIdentificationMap),
                    isFeedbackParam: "true",
                    withEmptyOption: !1,
                    index: this.props.index
                })))), t.default.createElement("div", {
                    hidden: !this.props.foreigner,
                    className: "l-row u-no-margin-top"
                }, t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-4 u-no-padding-right u-no-padding-left u-small-no-padding u-spacing-l"
                }, t.default.createElement(o.default, babelHelpers.extends({}, (0, u.getPropsForIdentification)("identificationNumber", !0, this.props, this.props.changeCustomerDataFormField, this.props.changeCustomerDataFormFieldNoValidations), (0, u.getInputValidationParams)("identificationNumber", this.props)))), t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-8 u-no-padding-right u-small-no-padding u-padding-left-l"
                }, t.default.createElement(d.default, babelHelpers.extends({}, this.props, {
                    onChange: this.props.changeCustomerDataFormField,
                    startDateName: "identificationRegistrationDate",
                    endDateName: "identificationExpirationDate"
                })))), t.default.createElement("div", {
                    hidden: !this.props.foreigner || !this.props.noPesel,
                    className: "l-row u-no-margin-top"
                }, t.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding-right u-no-padding-left u-small-no-padding  u-spacing-l"
                }, t.default.createElement(p.OraFloatingLabelSelect, babelHelpers.extends({}, (0, u.getPropsForSelect)("gender", this.props, this.props.changeCustomerDataFormField), {
                    className: "g-gray1-bg u-font-small",
                    options: h,
                    isFeedbackParam: "true"
                })))))) : t.default.createElement("div", null)
            }
        }]), a
    }(t.Component);
    e.MulticartCustomerDetailsView = g;
    var h = [{
        value: "MALE",
        description: "Pan"
    }, {
        value: "FEMALE",
        description: "Pani"
    }];
    g.propTypes = {
        pesel: r.default.string,
        idNumber: r.default.string,
        country: r.default.string,
        identification: r.default.string,
        identificationNumber: r.default.string,
        identificationExpirationDate: r.default.string,
        readOnly: r.default.bool,
        requestCartCustomerData: r.default.func,
        requestRecalculateConsentsForForeigner: r.default.func,
        changeCustomerDataFormField: r.default.func,
        disabledIdNumber: r.default.bool,
        foreigner: r.default.bool,
        foreignCountries: r.default.array,
        isSmsVerified: r.default.bool,
        isOnlineCookie: r.default.bool,
        foreignerIdentificationMap: r.default.oneOfType([r.default.shape({
            value: r.default.string,
            description: r.default.string
        }), r.default.arrayOf(r.default.shape({
            value: r.default.string,
            description: r.default.string
        }))])
    };
    var b = (0, a.connect)(s.getCustomerDataForm, {
        requestCartCustomerData: n.requestCartCustomerData,
        changeCustomerDataFormField: l.changeCustomerDataFormField,
        changeCustomerDataFormFieldNoValidations: l.changeCustomerDataFormFieldNoValidations,
        changeCustomerCountry: l.changeCustomerCountry,
        setCountries: i.setCountries,
        requestRecalculateConsentsForForeigner: n.requestRecalculateConsentsForForeigner
    })(g);
    e.default = b
});
//# sourceMappingURL=MulticartCustomerDetailsComponent.js.map