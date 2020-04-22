define(["exports", "react", "react-redux", "./MulticartBillingAccountSelectorComponent", "./MulticartBillingAccountContractsComponent", "eshop/modules/core/components/forms", "../../selectors", "../../actions/app", "../../actions/data", "../../../../../eshop/components/OraCommonComponents"], function(e, i, t, o, s, n, l, r, a, c) {
    "use strict";

    function u(i) {
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
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.MulticartBillingAccountsComponent = void 0, i = babelHelpers.interopRequireWildcard(i), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s);
    var d = function(e) {
        babelHelpers.inherits(l, e);
        var t = u(l);

        function l(e) {
            return babelHelpers.classCallCheck(this, l), t.call(this, e)
        }
        return babelHelpers.createClass(l, [{
            key: "componentWillMount",
            value: function() {
                this.defaultAccountType = this.props.billingAccounts[0].type, this.props.setBillingAccounts(this.props.billingAccounts)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.registerNextStepCondition("billingAccount"), this.props.requestBillingAccountFormData()
            }
        }, {
            key: "getTitle",
            value: function() {
                return {
                    __html: this.props.descriptions.title
                }
            }
        }, {
            key: "getPropsForField",
            value: function(e) {
                return {
                    name: e,
                    value: this.props.formData[e] || "",
                    errors: this.props.errors && this.props.errors[e],
                    valid: this.props.validation[e],
                    label: this.props.descriptions[e],
                    labelType: "floating",
                    onChange: this.changeFormField(e)
                }
            }
        }, {
            key: "changeFormField",
            value: function(t) {
                var l = this;
                return function(e) {
                    l.props.changeBillingAccountFormField(t, e.value)
                }
            }
        }, {
            key: "toggleFormVisibility",
            value: function() {
                this.props.setBillingAccountFormVisibility(!this.props.visible)
            }
        }, {
            key: "closeForm",
            value: function() {
                this.props.setBillingAccountFormVisibility(!1)
            }
        }, {
            key: "formValidated",
            value: function() {
                var e = this.props.formData,
                    t = this.fieldFilled(e.postalCode) && this.fieldFilled(e.town) && (this.fieldFilled(e.streetName) || (!e.streetName || "" == e.streetName) && this.streetFieldDisabled()) && this.fieldFilled(e.streetNumber),
                    l = this.props.errors,
                    i = this.noErrors(l.postalCode) && this.noErrors(l.town) && this.noErrors(l.streetName) && this.noErrors(l.streetNumber) && this.noErrors(l.appartmentNo) && this.noErrors(l.emailAddress);
                return t && i
            }
        }, {
            key: "fieldFilled",
            value: function(e) {
                return "" !== e
            }
        }, {
            key: "noErrors",
            value: function(e) {
                return !e || 0 === e.length
            }
        }, {
            key: "streetFieldDisabled",
            value: function() {
                return !!this.props.streetSuggestions && !this.props.streetSuggestions.length && !this.props.formData.streetName.length
            }
        }, {
            key: "getGroupedBillingAccounts",
            value: function() {
                var t = this,
                    l = {};
                return this.props.billingAccounts.forEach(function(e) {
                    t.addBillingAcccountToGroup(l, e)
                }), l
            }
        }, {
            key: "addBillingAcccountToGroup",
            value: function(e, t) {
                e.hasOwnProperty(t.type) || (e[t.type] = []), e[t.type].push(t)
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    l = this.getGroupedBillingAccounts.bind(this)();
                return i.default.createElement(c.OraLoader, {
                    loading: this.props.isShowContractButtonEnabled,
                    id: "accountContractsLoader",
                    parentId: "account-contracts-loader"
                }, i.default.createElement("div", {
                    className: "l-page-row u-spacing-top-l billing-account-wrapper"
                }, 0 < this.props.billingAccounts.length && i.default.createElement("div", {
                    className: "opl-console billing-account"
                }, i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-small-spacing u-padding-top-m"
                }, i.default.createElement("div", {
                    dangerouslySetInnerHTML: this.getTitle()
                })), Object.keys(l).map(function(e) {
                    return i.default.createElement(o.default, {
                        key: e,
                        accountType: e,
                        billingAccounts: l[e],
                        descriptions: t.props.descriptions
                    })
                }), this.props.newAccountButtonVisibility && this.renderAddButton()), this.props.visible && i.default.createElement("div", null, i.default.createElement("div", {
                    className: "l-row u-padding-top-l u-padding-l"
                }, i.default.createElement("div", {
                    className: "l-col l-col-12"
                }, i.default.createElement("h4", {
                    className: "h3 u-no-margin"
                }, this.props.descriptions.formLabel), i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-12"
                }, i.default.createElement("a", {
                    href: "#",
                    className: "u-right",
                    onClick: this.closeForm.bind(this)
                }, i.default.createElement("span", {
                    title: "close",
                    "aria-hidden": "true",
                    className: "kss-icon-preview g-icon g-icon--only g-icon--xs-s g-icon--close"
                })))))), i.default.createElement("div", {
                    className: "l-row u-padding-l"
                }, i.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12"
                }, i.default.createElement("div", {
                    className: "l-row"
                }, i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-small-hide u-medium-hide u-padding-l"
                }, i.default.createElement(n.LabeledPostalCodeInputWithErrors, this.getPropsForField("postalCode"))), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-large-hide u-padding-l"
                }, i.default.createElement(n.LabeledPostalCodeInputMobileWithErrors, this.getPropsForField("postalCode"))), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 u-padding-l"
                }, i.default.createElement(n.LabeledAutocompleteWithErrors, babelHelpers.extends({}, this.getPropsForField("town"), {
                    suggestions: this.props.citySuggestions
                }))), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-l"
                }, i.default.createElement(n.LabeledAutocompleteWithErrors, babelHelpers.extends({}, this.getPropsForField("streetName"), {
                    suggestions: this.props.streetSuggestions,
                    disabled: this.streetFieldDisabled.bind(this)()
                }))), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-padding-l"
                }, i.default.createElement(n.LabeledInputWithErrors, babelHelpers.extends({}, this.getPropsForField("streetNumber"), {
                    valid: !0
                }))), i.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-padding-l"
                }, i.default.createElement(n.LabeledInputWithErrors, babelHelpers.extends({}, this.getPropsForField("appartmentNo"), {
                    valid: !0
                }))), i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-l"
                }, i.default.createElement(n.LabeledInputWithErrors, this.getPropsForField("emailAddress")))))), i.default.createElement("div", {
                    className: "l-row "
                }, i.default.createElement("div", {
                    className: "l-col l-col-3"
                }, i.default.createElement("button", {
                    className: "opl-console-button--green opl-btn--medium",
                    disabled: !this.formValidated.bind(this)(),
                    onClick: this.props.setCreateBillingAccount.bind(this, this.defaultAccountType)
                }, this.props.descriptions.createLabel))))), this.props.accountContractsVisible && i.default.createElement(s.default, {
                    accountContracts: this.props.accountContracts,
                    account: this.props.selectedMobile
                })))
            }
        }, {
            key: "renderAddButton",
            value: function() {
                return i.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-2 l-col-2  u-small-spacing"
                }, i.default.createElement("button", {
                    className: "o-btn opl-btn opl-btn--medium" + (this.props.createEnabled ? " opl-btn--green" : ""),
                    onClick: this.toggleFormVisibility.bind(this)
                }, i.default.createElement("span", {
                    className: "opl-ripple-box"
                }, i.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), this.props.descriptions.createNewLabel))
            }
        }]), l
    }(i.Component);
    e.MulticartBillingAccountsComponent = d;
    var p = (0, t.connect)(l.getBillingAccountComponentData, {
        registerNextStepCondition: a.registerNextStepCondition,
        setBillingAccountFormVisibility: r.setBillingAccountFormVisibility,
        changeBillingAccountFormField: r.changeBillingAccountFormField,
        setCreateBillingAccount: r.setCreateBillingAccount,
        setSelectedBillingAccount: r.setSelectedBillingAccount,
        requestBillingAccountFormData: a.requestBillingAccountFormData,
        setBillingAccounts: r.setBillingAccounts,
        getActiveContracts: r.getActiveContracts
    })(d);
    e.default = p
});
//# sourceMappingURL=MulticartBillingAccountsComponent.js.map