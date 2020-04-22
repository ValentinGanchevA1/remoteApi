define(["exports", "react", "react-redux", "./MulticartBillingAccountSelectorComponent", "./MulticartBillingAccountContractsComponent", "eshop/modules/core/components/forms", "../../selectors", "../../actions/app", "../../actions/data", "../../../../../eshop/components/OraCommonComponents"], function(_exports, _react, _reactRedux, _MulticartBillingAccountSelectorComponent, _MulticartBillingAccountContractsComponent, _forms, _selectors, _app, _data, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.MulticartBillingAccountsComponent = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MulticartBillingAccountSelectorComponent = babelHelpers.interopRequireDefault(_MulticartBillingAccountSelectorComponent);
    _MulticartBillingAccountContractsComponent = babelHelpers.interopRequireDefault(_MulticartBillingAccountContractsComponent);

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

    var MulticartBillingAccountsComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartBillingAccountsComponent, _Component);

        var _super = _createSuper(MulticartBillingAccountsComponent);

        function MulticartBillingAccountsComponent(props) {
            babelHelpers.classCallCheck(this, MulticartBillingAccountsComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartBillingAccountsComponent, [{
            key: "componentWillMount",
            value: function componentWillMount() {
                this.defaultAccountType = this.props.billingAccounts[0].type;
                this.props.setBillingAccounts(this.props.billingAccounts);
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.registerNextStepCondition('billingAccount');
                this.props.requestBillingAccountFormData();
            }
        }, {
            key: "getTitle",
            value: function getTitle() {
                return {
                    __html: this.props.descriptions.title
                };
            }
        }, {
            key: "getPropsForField",
            value: function getPropsForField(name) {
                return {
                    name: name,
                    value: this.props.formData[name] || "",
                    errors: this.props.errors && this.props.errors[name],
                    valid: this.props.validation[name],
                    label: this.props.descriptions[name],
                    labelType: 'floating',
                    onChange: this.changeFormField(name)
                };
            }
        }, {
            key: "changeFormField",
            value: function changeFormField(name) {
                var _this = this;

                return function(field) {
                    _this.props.changeBillingAccountFormField(name, field.value);
                };
            }
        }, {
            key: "toggleFormVisibility",
            value: function toggleFormVisibility() {
                this.props.setBillingAccountFormVisibility(!this.props.visible);
            }
        }, {
            key: "closeForm",
            value: function closeForm() {
                this.props.setBillingAccountFormVisibility(false);
            }
        }, {
            key: "formValidated",
            value: function formValidated() {
                var data = this.props.formData;
                var requiredFieldsFilled = this.fieldFilled(data.postalCode) && this.fieldFilled(data.town) && (this.fieldFilled(data.streetName) || (!data.streetName || data.streetName == '') && this.streetFieldDisabled()) && this.fieldFilled(data.streetNumber);
                var errors = this.props.errors;
                var fieldsValid = this.noErrors(errors.postalCode) && this.noErrors(errors.town) && this.noErrors(errors.streetName) && this.noErrors(errors.streetNumber) && this.noErrors(errors.appartmentNo) && this.noErrors(errors.emailAddress);
                return requiredFieldsFilled && fieldsValid;
            }
        }, {
            key: "fieldFilled",
            value: function fieldFilled(value) {
                return value !== '';
            }
        }, {
            key: "noErrors",
            value: function noErrors(errors) {
                return !errors || errors.length === 0;
            }
        }, {
            key: "streetFieldDisabled",
            value: function streetFieldDisabled() {
                return !!this.props.streetSuggestions && !this.props.streetSuggestions.length && !this.props.formData["streetName"].length;
            }
        }, {
            key: "getGroupedBillingAccounts",
            value: function getGroupedBillingAccounts() {
                var _this2 = this;

                var billingAccountsByType = {};
                this.props.billingAccounts.forEach(function(billingAccount) {
                    _this2.addBillingAcccountToGroup(billingAccountsByType, billingAccount);
                });
                return billingAccountsByType;
            }
        }, {
            key: "addBillingAcccountToGroup",
            value: function addBillingAcccountToGroup(billingAccountsByType, billingAccount) {
                if (!billingAccountsByType.hasOwnProperty(billingAccount.type)) {
                    billingAccountsByType[billingAccount.type] = [];
                }

                billingAccountsByType[billingAccount.type].push(billingAccount);
            }
        }, {
            key: "render",
            value: function render() {
                var _this3 = this;

                var billingAccountsByType = this.getGroupedBillingAccounts.bind(this)();
                var loaderId = "accountContractsLoader";
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    loading: this.props.isShowContractButtonEnabled,
                    id: loaderId,
                    parentId: "account-contracts-loader"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row u-spacing-top-l billing-account-wrapper"
                }, this.props.billingAccounts.length > 0 && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-console billing-account"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-2  u-small-spacing u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    dangerouslySetInnerHTML: this.getTitle()
                })), Object.keys(billingAccountsByType).map(function(accountType) {
                    return /*#__PURE__*/ _react.default.createElement(_MulticartBillingAccountSelectorComponent.default, {
                        key: accountType,
                        accountType: accountType,
                        billingAccounts: billingAccountsByType[accountType],
                        descriptions: _this3.props.descriptions
                    });
                }), this.props.newAccountButtonVisibility && this.renderAddButton()), this.props.visible && /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-l u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("h4", {
                    className: "h3 u-no-margin"
                }, this.props.descriptions.formLabel), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, /*#__PURE__*/ _react.default.createElement("a", {
                    href: "#",
                    className: "u-right",
                    onClick: this.closeForm.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    title: "close",
                    "aria-hidden": "true",
                    className: "kss-icon-preview g-icon g-icon--only g-icon--xs-s g-icon--close"
                })))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-6 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-small-hide u-medium-hide u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledPostalCodeInputWithErrors, this.getPropsForField("postalCode"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-large-hide u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledPostalCodeInputMobileWithErrors, this.getPropsForField("postalCode"))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-6 l-col-6 u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledAutocompleteWithErrors, babelHelpers.extends({}, this.getPropsForField("town"), {
                    suggestions: this.props.citySuggestions
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledAutocompleteWithErrors, babelHelpers.extends({}, this.getPropsForField("streetName"), {
                    suggestions: this.props.streetSuggestions,
                    disabled: this.streetFieldDisabled.bind(this)()
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledInputWithErrors, babelHelpers.extends({}, this.getPropsForField("streetNumber"), {
                    valid: true
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-6 l-col-medium-6 l-col-6 u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledInputWithErrors, babelHelpers.extends({}, this.getPropsForField("appartmentNo"), {
                    valid: true
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-l"
                }, /*#__PURE__*/ _react.default.createElement(_forms.LabeledInputWithErrors, this.getPropsForField("emailAddress")))))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row "
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-console-button--green opl-btn--medium",
                    disabled: !this.formValidated.bind(this)(),
                    onClick: this.props.setCreateBillingAccount.bind(this, this.defaultAccountType)
                }, this.props.descriptions.createLabel))))), this.props.accountContractsVisible && /*#__PURE__*/ _react.default.createElement(_MulticartBillingAccountContractsComponent.default, {
                    accountContracts: this.props.accountContracts,
                    account: this.props.selectedMobile
                })));
            }
        }, {
            key: "renderAddButton",
            value: function renderAddButton() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-2 l-col-2  u-small-spacing"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: 'o-btn opl-btn opl-btn--medium' + (this.props.createEnabled ? ' opl-btn--green' : ''),
                    onClick: this.toggleFormVisibility.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), this.props.descriptions.createNewLabel));
            }
        }]);
        return MulticartBillingAccountsComponent;
    }(_react.Component);

    _exports.MulticartBillingAccountsComponent = MulticartBillingAccountsComponent;

    var _default = (0, _reactRedux.connect)(_selectors.getBillingAccountComponentData, {
        registerNextStepCondition: _data.registerNextStepCondition,
        setBillingAccountFormVisibility: _app.setBillingAccountFormVisibility,
        changeBillingAccountFormField: _app.changeBillingAccountFormField,
        setCreateBillingAccount: _app.setCreateBillingAccount,
        setSelectedBillingAccount: _app.setSelectedBillingAccount,
        requestBillingAccountFormData: _data.requestBillingAccountFormData,
        setBillingAccounts: _app.setBillingAccounts,
        getActiveContracts: _app.getActiveContracts
    })(MulticartBillingAccountsComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartBillingAccountsComponent.js.map