define(["exports", "react", "prop-types", "eshop/modules/core/components/hoc/LabeledInput", "react-redux", "../../selectors", "../../actions/app", "../../actions/data", "../../validators", "../../utils/utils"], function(e, l, t, s, a, o, r, n, i, c) {
    "use strict";

    function u(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(t);
            e && (l = l.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, l)
        }
        return a
    }

    function p(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? u(Object(a), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, a[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return t
    }

    function d(l) {
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
    }), e.default = e.MulticartContactInfoView = void 0, l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireDefault(t), s = babelHelpers.interopRequireDefault(s);
    var h = function(e) {
        babelHelpers.inherits(a, e);
        var t = d(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "getTitle",
            value: function() {
                return this.props.isBusinessClient ? this.props.descriptions.businessTitle || this.props.defaultBusinessTitle || "" : this.props.descriptions.title || ""
            }
        }, {
            key: "getPropsForInput",
            value: function(e) {
                return {
                    name: e,
                    value: this.props[e] || "",
                    errors: this.props.errors && this.props.errors[e],
                    valid: this._validate(e),
                    validateEmpty: this.props.isExistingCustomer && !this.isWwwChannel(),
                    disabled: (0, c.isFieldDisabled)(this.props, e),
                    labelType: "floating",
                    label: this.props.descriptions[e],
                    onChange: this.handleChange.bind(this)
                }
            }
        }, {
            key: "handleChange",
            value: function(e) {
                var t = e.id,
                    a = e.name,
                    l = e.value;
                this.props.changeCustomerContactFormField({
                    id: t,
                    name: a,
                    value: l
                }, !1)
            }
        }, {
            key: "getPropsForInputCheckbox",
            value: function(e) {
                return {
                    name: e,
                    checked: this.props[e],
                    defaultValue: this.props[e] || "",
                    disabled: (0, c.isFieldDisabled)(this.props, e),
                    type: "checkbox"
                }
            }
        }, {
            key: "_validate",
            value: function(e) {
                var t = this.props[e] || "";
                return 0 == i.customerContactFormValidators[e](t).length
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.requestCartCustomerData()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.props.show && this.refs.inputCheckboxWrapper && !this.tooltipInitialized && (this.loadModule(this.refs.inputCheckboxWrapper), this.tooltipInitialized = !0)
            }
        }, {
            key: "loadModule",
            value: function(e) {
                OPL.UI.loadModules(e, [{
                    path: "core/modules/tooltips",
                    options: {
                        showCloseIcon: !1,
                        side: "top",
                        trigger: "hover"
                    }
                }])
            }
        }, {
            key: "handleCheckboxChange",
            value: function(e) {
                this.props.changeCustomerContactFormField({
                    name: e.target.name,
                    value: e.target.checked
                }), this.props.changeEmailRelatedConsents(e.target.checked), this.props.changeCustomerContactFormFieldForceValid({
                    name: "emailAddress",
                    value: ""
                })
            }
        }, {
            key: "getMailInputProps",
            value: function(e) {
                var t = p({}, this.getPropsForInput(e), {
                    value: this.props[e] || "",
                    valid: this.props.customerNoEmail || this._validate(e)
                });
                return this.showEmailCheckbox(!0) && (t.labelElement = l.default.createElement("div", {
                    ref: "inputCheckboxWrapper"
                }, l.default.createElement("label", {
                    className: "opl-checkbox opl-checkbox-in-input u-margin-right-l-xl o-tooltip__trigger o-checkbox"
                }, l.default.createElement("input", babelHelpers.extends({}, this.getPropsForInputCheckbox("customerNoEmail"), {
                    onChange: this.handleCheckboxChange.bind(this)
                })), l.default.createElement("span", {
                    className: "o-ci o-ci-white"
                }), l.default.createElement("span", {
                    className: "o-ci-label"
                }, l.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Brak adresu email"))), l.default.createElement("span", {
                    className: "o-tooltip__content"
                }, this.props.descriptions.noEmailTooltip || this.props.defaultNoEmailTooltip))), t
            }
        }, {
            key: "getPhoneInputProps",
            value: function(e) {
                return p({}, this.getPropsForInput(e), {
                    mask: "(+48) 999-999-999",
                    placeholder: "(+48) ___-___-___",
                    onBlur: this.handlePhone.bind(this, !0),
                    onChange: this.handlePhone.bind(this, !1),
                    locked: !1
                })
            }
        }, {
            key: "handlePhone",
            value: function(e, t) {
                var a = t.id,
                    l = t.name,
                    s = t.value;
                this.props.changeCustomerContactFormField({
                    id: a,
                    name: l,
                    value: (0, c.remapToPhone)(s)
                }, e)
            }
        }, {
            key: "showEmailCheckbox",
            value: function(e) {
                return !this.isWwwChannel() && (!(!this.props.isBusinessClient || !e || this.props.isSalesOfGoodsOnly) || (!(e || this.props.isBusinessClient || this.props.emailAddress && "" != this.props.emailAddress) || !(this.props.isBusinessClient || e || !this.props.isSalesOfGoodsOnly)))
            }
        }, {
            key: "isWwwChannel",
            value: function() {
                return "WWW" === this.props.channels.sales
            }
        }, {
            key: "isFix",
            value: function() {
                return !!this.props.fixentries && 0 < this.props.fixentries.length
            }
        }, {
            key: "render",
            value: function() {
                var t = this;
                return this.props.show ? l.default.createElement("div", {
                    className: "opl-form"
                }, l.default.createElement("div", {
                    className: "u-spacing-top-l  ".concat(this.props.isForeignerCheckboxAvailable ? "u-large-spacing-xl u-medium-spacing-s u-small-spacing-s" : "", " l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding")
                }, l.default.createElement("p", {
                    className: "h3",
                    dangerouslySetInnerHTML: {
                        __html: this.getTitle()
                    }
                })), l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding"
                }, l.default.createElement("span", null, l.default.createElement(s.default, babelHelpers.extends({}, this.getMailInputProps("emailAddress"), {
                    onBlur: this.props.changeCustomerContactFormField,
                    onChange: this.props.changeCustomerContactFormFieldForceValid,
                    validateEmpty: this.props.isExistingCustomer && !this.isWwwChannel() && !emailDisabled
                })))), l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-spacing-l u-no-padding"
                }, l.default.createElement("span", null, l.default.createElement(s.default, babelHelpers.extends({}, this.getPhoneInputProps("phoneNumber"), {
                    className: "u-spacing-top-l"
                })))), this.showEmailCheckbox(!1) && l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-no-padding"
                }, l.default.createElement("div", {
                    className: "l-col l-col-12"
                }, l.default.createElement("label", {
                    className: "o-checkbox opl-checkbox"
                }, l.default.createElement("input", babelHelpers.extends({}, this.getPropsForInputCheckbox("customerNoEmail"), {
                    onChange: function(e) {
                        t.handleCheckboxChange(e)
                    }
                })), l.default.createElement("span", {
                    className: "o-ci"
                }), l.default.createElement("span", {
                    className: "o-ci-label"
                }, "Klient nie posiada adresu email")))), this.props.customerNoEmail && this.props.isEmailRequiredByProductInCart && l.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-s"
                }, l.default.createElement("div", {
                    className: "opl-msg opl-msg--context opl-msg--error"
                }, "W koszyku wybrano usługę dodatkową wymagającą podania adresu email. Dodaj adres email."))) : l.default.createElement("div", null)
            }
        }]), a
    }(l.Component);
    (e.MulticartContactInfoView = h).propTypes = {
        emailAddress: t.default.string,
        phoneNumber: t.default.string,
        customerNoEmail: t.default.bool,
        readOnly: t.default.bool,
        locked: t.default.bool,
        requestCartCustomerData: t.default.func,
        changeCustomerContactFormField: t.default.func,
        changeCustomerContactFormFieldForceValid: t.default.func
    }, h.defaultProps = {
        defaultBusinessTitle: "Dane kontaktowe firmy",
        defaultNoEmailTooltip: "Zaznacz, jeśli użytkownik nie posiada adresu e-mail."
    };
    var m = (0, a.connect)(o.getCustomerContactForm, {
        changeCustomerContactFormField: r.changeCustomerContactFormField,
        requestCartCustomerData: n.requestCartCustomerData,
        changeCustomerDataFormField: r.changeCustomerDataFormField,
        changeEmailRelatedConsents: r.changeEmailRelatedConsents,
        changeCustomerContactFormFieldForceValid: r.changeCustomerContactFormFieldForceValid
    })(h);
    e.default = m
});
//# sourceMappingURL=MulticartContactInfoComponent.js.map