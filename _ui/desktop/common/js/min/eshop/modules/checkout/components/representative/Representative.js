define(["exports", "react", "eshop/modules/core/components/hoc/LabeledInput", "eshop/modules/checkout/components/representative/common", "../../utils/utils", "../../../core/enum/SalesChannel", "../../../../components/OraFloatingLabelSelect", "../datepicker/DatePickerByDocumentTypeComponent"], function(e, i, s, r, n, o, l, p) {
    "use strict";

    function c(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
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
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), s = babelHelpers.interopRequireDefault(s), o = babelHelpers.interopRequireDefault(o), p = babelHelpers.interopRequireDefault(p);
    var t = function(e) {
        babelHelpers.inherits(a, e);
        var t = c(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "remove",
            value: function(e) {
                e.preventDefault(), this.props.remove(this.props.index)
            }
        }, {
            key: "renderHeader",
            value: function() {
                return this.props.label && i.default.createElement("div", {
                    className: "u-spacing-top-xl"
                }, i.default.createElement("div", {
                    className: "o-separator u-spacing-m"
                }), i.default.createElement("div", {
                    className: "u-position-relative"
                }, i.default.createElement("p", {
                    className: "h5"
                }, this.props.label), this.props.remove && i.default.createElement("a", {
                    href: "#",
                    className: "u-position-absolute u-position-bottom u-position-right",
                    onClick: this.remove.bind(this)
                }, "Usuń")))
            }
        }, {
            key: "toggleForeigner",
            value: function() {
                var e = !this.props.foreigner;
                if (this.props.setRepresentativeDataNoValidations({
                        name: "foreigner",
                        value: e,
                        index: this.props.index
                    }), e) {
                    var t = (0, n.prepareForeignerIdentificationTypes)(this.props.foreignerIdentificationMap).find(function(e) {
                        return "RESIDENCE_CARD" === e.value
                    });
                    this.props.setRepresentativeDataNoValidations({
                        name: "identification",
                        value: t.value,
                        index: this.props.index
                    })
                }
            }
        }, {
            key: "render",
            value: function() {
                return i.default.createElement("div", {
                    className: "u-spacing-top-l"
                }, this.renderHeader(), i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "u-no-margin-top u-spacing-top-xs u-spacing-l l-col l-col-12",
                    hidden: this.props.foreignerB2bDisabled || this.props.channels.sales !== o.default.POS
                }, i.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, i.default.createElement("input", {
                    type: "checkbox",
                    onChange: this.toggleForeigner.bind(this),
                    disabled: this.props.channels.sales !== o.default.POS,
                    checked: this.props.foreigner
                }), i.default.createElement("span", {
                    className: "o-ci"
                }), i.default.createElement("span", {
                    className: "o-ci-label"
                }, this.props.descriptions.foreigner))), i.default.createElement("div", {
                    className: "l-col l-col-12"
                }, i.default.createElement(s.default, babelHelpers.extends({}, (0, r.getCommonPropsForInput)(this.props, "firstName", "representative", {
                    label: "Imię"
                }), {
                    virtualKeyboard: !0
                }))), i.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing-top-l"
                }, i.default.createElement(s.default, babelHelpers.extends({}, (0, r.getCommonPropsForInput)(this.props, "lastName", "representative", {
                    label: "Nazwisko"
                }), {
                    virtualKeyboard: !0
                }))), i.default.createElement("div", {
                    className: "l-col l-col-6 u-spacing-top-l"
                }, i.default.createElement(s.default, (0, r.getCommonPropsForInput)(this.props, "pesel", "representative", {
                    label: "PESEL",
                    mask: "99999999999",
                    placeholder: "___________"
                }))), i.default.createElement("div", {
                    hidden: this.props.foreigner,
                    className: "l-col l-col-6 u-spacing-top-l"
                }, i.default.createElement(s.default, (0, r.getCommonPropsForInput)(this.props, "idNumber", "representative", {
                    label: "Numer dowodu",
                    mask: "aaa999999",
                    placeholder: "_________"
                }))), i.default.createElement("div", {
                    hidden: !this.props.foreigner,
                    className: "l-col l-col-6 u-spacing-top-l"
                }, i.default.createElement(s.default, babelHelpers.extends({}, (0, n.getPropsForInput)("country", this.props, this.props.setRepresentativeData, this.props.setRepresentativeDataNoValidations), (0, n.getInputValidationParams)("country", this.props), {
                    value: (0, n.getCountryName)(this.props.foreignCountries, this.props.country),
                    suggestions: (0, n.getCountrySuggestions)(this.props.foreignCountries, this.props.country),
                    mapSuggestion: n.mapCountrySuggestion,
                    onBlur: this.props.changeRepresentativeCountry,
                    autoComplete: !0,
                    minLength: 1,
                    index: this.props.index
                }))), i.default.createElement("div", {
                    hidden: !this.props.foreigner
                }, i.default.createElement("div", {
                    className: "l-col l-col-12 u-spacing-top-l"
                }, i.default.createElement(l.OraFloatingLabelSelect, babelHelpers.extends({}, (0, n.getPropsForSelect)("identification", this.props, this.props.setRepresentativeData), (0, n.getInputValidationParams)("identification", this.props), {
                    className: "g-gray1-bg u-font-small",
                    options: (0, n.prepareForeignerIdentificationTypes)(this.props.foreignerIdentificationMap),
                    isFeedbackParam: "true",
                    withEmptyOption: !1,
                    index: this.props.index
                })))), i.default.createElement("div", {
                    hidden: !this.props.foreigner
                }, i.default.createElement("div", {
                    className: "l-col l-col-6 u-spacing-top-l"
                }, i.default.createElement(s.default, babelHelpers.extends({}, (0, n.getPropsForIdentification)("identificationValue", !0, this.props, this.props.setRepresentativeData, this.props.setRepresentativeDataNoValidations), (0, n.getInputValidationParams)("identificationValue", this.props)))), i.default.createElement("div", {
                    className: "l-col l-col-6 u-spacing-top-l"
                }, i.default.createElement(p.default, babelHelpers.extends({}, this.props, {
                    onChange: this.props.setRepresentativeData,
                    startDateName: "identificationRegisterDate",
                    endDateName: "identificationEndDate",
                    index: this.props.index,
                    identificationRegistrationDate: this.props.identificationRegisterDate,
                    identificationExpirationDate: this.props.identificationEndDate
                }))))))
            }
        }]), a
    }(i.Component);
    e.default = t
});
//# sourceMappingURL=Representative.js.map