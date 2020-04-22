define(["exports", "react", "eshop/modules/core/components/hoc/LabeledInput", "eshop/modules/core/components/hoc/ErrorRow", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../../utils/utils", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Datepicker", "eshop/modules/core/validationHelper"], function(e, a, s, o, t, r, l, n, i, p, u, c) {
    "use strict";

    function d(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, a)
        }
        return r
    }

    function h(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? d(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function m(a) {
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
    }), e.default = e.MulticartCustomerBusinessDetailsView = void 0, a = babelHelpers.interopRequireWildcard(a), s = babelHelpers.interopRequireDefault(s), o = babelHelpers.interopRequireDefault(o);
    var g = function(e) {
        babelHelpers.inherits(r, e);
        var t = m(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "getPropsForInput",
            value: function(e) {
                var t = (0, i.isFieldDisabledForValidation)(this.props, e),
                    r = (0, i.isFieldDisabled)(this.props, e),
                    a = {
                        name: e,
                        value: this.props[e] || "",
                        errors: this.props.errors && this.props.errors[e],
                        disabled: r,
                        onBlur: this.handleChange.bind(this, !0),
                        onChange: this.handleChange.bind(this, !1),
                        label: this.props.descriptions[e],
                        labelType: "floating"
                    },
                    s = this.isValidField(e);
                return r && (t || s) || (a.valid = s), a
            }
        }, {
            key: "handleChange",
            value: function(e, t) {
                var r = t.id,
                    a = t.name,
                    s = t.value;
                this.props.changeCustomerDataFormField({
                    id: r,
                    name: a,
                    value: s
                }, e)
            }
        }, {
            key: "isValidField",
            value: function(e) {
                var t = this.props[e],
                    r = this.props.errors && this.props.errors[e] ? this.props.errors[e] : [];
                return t ? 0 === r.length : 0 === r.length && void 0
            }
        }, {
            key: "getPropsForNip",
            value: function(e) {
                return h({}, this.getPropsForInput(e), {
                    mask: "9999999999",
                    placeholder: "__________",
                    onChange: this.handleNipChange.bind(this)
                })
            }
        }, {
            key: "handleNipChange",
            value: function(e) {
                var t = e.id,
                    r = e.name,
                    a = e.value;
                !this.props.isSalesOfGoodsOnly && (0, c.validateNIP)(a) && this.props.nip !== a ? (this.props.changeCustomerDataFormField({
                    id: t,
                    name: r,
                    value: a
                }), this.refs.nip.clearFocus(), this.props.requestBpgData(a)) : this.props.changeCustomerDataFormField({
                    id: t,
                    name: r,
                    value: a
                }, !1)
            }
        }, {
            key: "handleRegonChange",
            value: function(e, t) {
                var r = t.id,
                    a = t.name,
                    s = t.value;
                this.props.changeCustomerRegonFormField({
                    id: r,
                    name: a,
                    value: s
                }, e, this.props.isSalesOfGoodsOnly)
            }
        }, {
            key: "getPropsForRegon",
            value: function(e) {
                return h({}, this.getPropsForInput(e), {
                    mask: "99999999999999",
                    placeholder: "",
                    onChange: this.handleRegonChange.bind(this, !1),
                    onBlur: this.handleRegonChange.bind(this, !0)
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.requestCartCustomerData()
            }
        }, {
            key: "handleSelectChange",
            value: function(e) {
                var t = e.id,
                    r = e.name,
                    a = e.value;
                this.props.changeCustomerDataFormField({
                    id: t,
                    name: r,
                    value: a
                })
            }
        }, {
            key: "getPropsForSelect",
            value: function(e) {
                return {
                    name: e,
                    id: e,
                    onChange: this.handleSelectChange.bind(this),
                    withEmptyOption: !0,
                    label: this.getDescription(e),
                    disabled: (0, i.isFieldDisabled)(this.props, e),
                    className: this.props[e] ? "u-w-100 is-not-empty" : "u-w-100",
                    value: this.props[e],
                    emptyOption: {
                        value: "",
                        description: "",
                        hidden: !0,
                        disabled: !1
                    }
                }
            }
        }, {
            key: "getDescription",
            value: function(e) {
                var t = e + "Label";
                return this.props.descriptions[e] || this.props[t]
            }
        }, {
            key: "handleDateChange",
            value: function(e, t) {
                var r = t.value;
                this.props.changeCustomerDataFormField({
                    id: e,
                    name: e,
                    value: r
                })
            }
        }, {
            key: "handleDateBlur",
            value: function(e, t) {
                var r = t.value,
                    a = "";
                /^[\d_]{4}-[\d_]{2}-[\d_]{2}$/.test(r) && !isNaN(Date.parse(r)) && (a = new Date(Date.parse(r)).toISOString().split("T")[0]);
                this.props.changeCustomerDataFormField({
                    id: e,
                    name: e,
                    value: a
                })
            }
        }, {
            key: "getOptionsFromState",
            value: function(e) {
                var t = e + "Array";
                return (this.props[t] || []).map(function(e) {
                    return {
                        value: e.code,
                        description: e.description,
                        hidden: !1,
                        disabled: !1
                    }
                })
            }
        }, {
            key: "getCurrentDate",
            value: function() {
                var e = new Date,
                    t = e.getDate(),
                    r = e.getMonth() + 1;
                return t < 10 && (t = "0" + t), r < 10 && (r = "0" + r), e.getFullYear() + "-" + r + "-" + t
            }
        }, {
            key: "render",
            value: function() {
                return a.default.createElement("div", {
                    className: "l-row u-no-margin-top"
                }, a.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6"
                }, a.default.createElement(s.default, babelHelpers.extends({}, this.getPropsForNip("nip"), {
                    ref: "nip"
                }))), a.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6"
                }, a.default.createElement(s.default, this.getPropsForRegon("regon"))), a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-spacing-top-l"
                }, a.default.createElement(o.default, {
                    errors: this.props.errors && this.props.errors.legalForm
                }, a.default.createElement(p.OraFloatingSelect, babelHelpers.extends({}, this.getPropsForSelect("legalForm"), {
                    options: this.getOptionsFromState("legalForm")
                })))), a.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-spacing-top-l  u-spacing-l"
                }, a.default.createElement(s.default, this.getPropsForInput("companyName"))), !this.props.isSalesOfGoodsOnly && !this.props.statusAndDateFromBpg && a.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6"
                }, a.default.createElement(o.default, {
                    errors: this.props.errors && this.props.errors.registrationDate
                }, a.default.createElement(u.DatePicker, {
                    id: "registrationDate",
                    name: "registrationDate",
                    onChange: this.handleDateChange.bind(this, "registrationDate"),
                    onBlur: this.handleDateBlur.bind(this, "registrationDate"),
                    value: this.props.registrationDate || "",
                    disabled: (0, i.isFieldDisabled)(this.props, "registrationDate"),
                    mask: "9999-99-99",
                    placeholder: "____-__-__",
                    options: {
                        disabledWeekDays: []
                    },
                    floatingLabel: "Data zarejestrowania"
                }))), !this.props.isSalesOfGoodsOnly && !this.props.statusAndDateFromBpg && a.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6"
                }, a.default.createElement(o.default, {
                    errors: this.props.errors && this.props.errors.companyStatus
                }, a.default.createElement(p.OraFloatingSelect, babelHelpers.extends({}, this.getPropsForSelect("companyStatus"), {
                    options: this.getOptionsFromState("companyStatus")
                })))))
            }
        }]), r
    }(a.Component);
    (e.MulticartCustomerBusinessDetailsView = g).propTypes = {
        companyName: a.PropTypes.string,
        nip: a.PropTypes.string,
        regon: a.PropTypes.string,
        readOnly: a.PropTypes.bool,
        requestCartCustomerData: a.PropTypes.func,
        changeCustomerDataFormField: a.PropTypes.func,
        legalFormArray: a.PropTypes.array,
        companyStatusArray: a.PropTypes.array,
        legalFormLabel: a.PropTypes.string,
        companyStatusLabel: a.PropTypes.string
    }, g.defaultProps = {
        legalFormLabel: "Forma prawna",
        companyStatusLabel: "Status firmy"
    };
    var f = (0, t.connect)(r.getCustomerDataForm, {
        changeCustomerDataFormField: l.changeCustomerDataFormField,
        changeCustomerRegonFormField: l.changeCustomerRegonFormField,
        requestCartCustomerData: n.requestCartCustomerData,
        requestBpgData: n.requestBpgData
    })(g);
    e.default = f
});
//# sourceMappingURL=MulticartCustomerBusinessDetailsDataComponent.js.map