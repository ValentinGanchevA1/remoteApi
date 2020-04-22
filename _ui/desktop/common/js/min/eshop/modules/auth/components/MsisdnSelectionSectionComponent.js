define(["exports", "react", "../../magnum2/components/InputWithFloatingLabel", "../../core/constants/TransactionProcessTypeEnum", "../../core/constants/ShowSectionNameEnum"], function(e, o, r, t, n) {
    "use strict";

    function a(i) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), r = babelHelpers.interopRequireDefault(r), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n);
    var s = function(e) {
            babelHelpers.inherits(i, e);
            var s = a(i);

            function i(e) {
                var t;
                return babelHelpers.classCallCheck(this, i), (t = s.call(this, e)).state = {
                    msisdn: ""
                }, t
            }
            return babelHelpers.createClass(i, [{
                key: "inputLabel",
                value: function() {
                    return this.props.isFix && this.props.enablePeselAuth ? this.props.descriptions.inputLabelWithPesel || "Podaj swój nr telefonu, login lub PESEL" : this.props.showModalForProcess ? this.props.descriptions.inputLabelPhoneOnly || "Podaj numer telefonu" : this.props.descriptions.inputLabel
                }
            }, {
                key: "toHTML",
                value: function(e) {
                    return {
                        __html: e
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    OPL.UI.stopModules(document.getElementById("smsVerificationMsisdnSection"))
                }
            }, {
                key: "ommitAccountAuth",
                value: function() {
                    this.props.ommitAccountAuth()
                }
            }, {
                key: "validatePesel",
                value: function(e) {
                    if (!1 === /^[0-9]{11}$/.test(e)) return !1;
                    var t = ("" + e).split("");
                    if (31 < parseInt(e.substring(4, 6)) || 12 < parseInt(e.substring(2, 4) % 20)) return !1;
                    var s = (+parseInt(t[0]) + 3 * parseInt(t[1]) + 7 * parseInt(t[2]) + 9 * parseInt(t[3]) + +parseInt(t[4]) + 3 * parseInt(t[5]) + 7 * parseInt(t[6]) + 9 * parseInt(t[7]) + +parseInt(t[8]) + 3 * parseInt(t[9])) % 10;
                    return 0 === s && (s = 10), s = 10 - s, parseInt(t[10]) === s
                }
            }, {
                key: "validateMsisdn",
                value: function() {
                    var e = this.getMsisdnInputVal();
                    return !e || (!(9 !== e.length || !jQuery.isNumeric(e)) || (this.props.showModalForProcess ? void 0 : this.props.enablePeselAuth && 11 === e.length && jQuery.isNumeric(e) ? this.validatePesel(e) : !e || e && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)))
                }
            }, {
                key: "getMsisdnInputVal",
                value: function() {
                    return this.state && this.state.msisdn && this.state.msisdn.replace(/-/g, "")
                }
            }, {
                key: "getPropsForInput",
                value: function(e) {
                    return {
                        name: e,
                        value: this.props[e] || "",
                        errors: this.props.errors && this.props.errors[e],
                        valid: this._validate.bind(this)(e),
                        validateEmpty: this.props.isExistingCustomer,
                        disabled: this.props.readOnly,
                        onChange: this.props.changeCustomerContactFormField
                    }
                }
            }, {
                key: "onSubmit",
                value: function(e) {
                    if (e.preventDefault(), !this.validateMsisdn()) return this.props.isFix && this.props.enablePeselAuth ? this.props.showError("Wpisz poprawny numer, login lub pesel!") : this.props.showModalForProcess ? this.props.showError("Wpisz poprawny numer!") : this.props.showError("Wpisz poprawny numer lub login!"), void this.refInput.focus();
                    var t = this.getMsisdnInputVal();
                    this.props.clearMessage(), this.props.setMSISDN(t), this.props.msisdnVerificationIsNotRequired() ? (this.props.showMessage("Trwa weryfikacja numeru."), this.props.pushVerifiedMsisdn(t, this.props.processType, this.props.propositionId, !this.props.accountSelectionInNotRequired() && "ACCOUNT", this.props.selectedDeviceId)) : (this.props.setShowSection(n.default.CAAP), this.props.showMessage("Trwa weryfikacja numeru."), this.props.setMsisdn(t, this.props.processType))
                }
            }, {
                key: "onMsisdnFieldChange",
                value: function(e) {
                    this.setState({
                        msisdn: e.value
                    })
                }
            }, {
                key: "isTanto",
                value: function() {
                    return t.default.isTanto(this.props.processType)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props.processType,
                        s = this.props.descriptions[["mainLabel", t].filter(Boolean).join(".")];
                    this.props.showModalForAccountIdentify && !this.props.showModalForProcess && (s = this.props.descriptions[["mainLabel", "accountIdentify", t].filter(Boolean).join(".")]), this.props.isCustomerDataStep && this.props.isAuthNeeded && (s = this.props.descriptions["mainLabel.customerExists"]);
                    var i = !(!this.props.clientContext || !this.props.showModalForAccountIdentify || this.props.showModalForProcess || this.isTanto());
                    return o.default.createElement("div", {
                        id: "smsVerificationMsisdnSection"
                    }, o.default.createElement("p", null, o.default.createElement("span", {
                        id: "opl-sms-modal-main-content",
                        "aria-atomic": "true",
                        className: "u-spacing-right-s",
                        "aria-live": "assertive",
                        dangerouslySetInnerHTML: this.toHTML(s)
                    })), o.default.createElement(l, {
                        content: this.toHTML(p("infoMessage", this.props.descriptions, this.props.processType))
                    }), o.default.createElement("form", {
                        id: "msisdnForm",
                        onSubmit: this.onSubmit.bind(this)
                    }, o.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-8 l-col-8 u-small-padding"
                    }, o.default.createElement(r.default, {
                        id: "msisdn",
                        value: this.state.msisdn,
                        required: !0,
                        onChange: this.onMsisdnFieldChange.bind(this),
                        placeholder: this.inputLabel(),
                        focusOnMount: !0,
                        showValidation: !0,
                        showErrors: !0,
                        valid: this.validateMsisdn(),
                        errors: !this.validateMsisdn(),
                        overrideClass: "o-floating-label opl-floating-label-line opl-floating-label-line--white opl-autocomplete u-w-100"
                    })), o.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                    }, o.default.createElement("button", {
                        id: "sms",
                        type: "submit",
                        className: "o-btn opl-btn opl-btn--primary u-w-100"
                    }, this.props.descriptions.next)))), o.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, this.props.showModalForAccountIdentify && !this.props.showModalForProcess && o.default.createElement("div", {
                        className: "l-col  l-col-small-12 u-text-left u-left " + (i ? " l-col-6" : " l-col-12")
                    }, o.default.createElement("span", {
                        dangerouslySetInnerHTML: {
                            __html: this.props.descriptions.registerLabel
                        }
                    })), i && o.default.createElement("div", {
                        className: "l-col l-col-6  l-col-small-12  u-text-right u-right"
                    }, o.default.createElement("a", {
                        id: "ommit",
                        href: "#",
                        onClick: function() {
                            return e.ommitAccountAuth()
                        },
                        className: ""
                    }, this.props.descriptions.ommit || "Dodaj do koszyka bez logowania"))))
                }
            }]), i
        }(o.Component),
        l = function(e) {
            return o.default.createElement("div", {
                className: "opl-msg opl-msg--box opl-msg--info u_margin-l u-margin-top-l"
            }, o.default.createElement("div", {
                className: "o-icon-list"
            }, o.default.createElement("div", {
                className: "o-icon-list__item"
            }, o.default.createElement("div", {
                className: "o-icon-list__icon u-vertical-middle"
            }, o.default.createElement("div", {
                "aria-hidden": "true",
                className: "g-icon g-icon--info g-icon--before g-icon--s"
            })), o.default.createElement("div", {
                className: "o-icon-list__text u-vertical-middle"
            }, o.default.createElement("div", {
                dangerouslySetInnerHTML: e.content
            })))))
        },
        p = function(e, t, s) {
            return t[[e, s].filter(Boolean).join(".")] || t[e] || 'This is default message for smsVerificationComponent based on "infoMessage" CMSDescriptionItem.'
        },
        i = s;
    e.default = i
});
//# sourceMappingURL=MsisdnSelectionSectionComponent.js.map