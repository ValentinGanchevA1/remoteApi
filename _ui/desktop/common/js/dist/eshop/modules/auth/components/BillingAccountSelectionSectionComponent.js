define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/utils/OnlineUtils", "eshop/modules/auth/components/BillingAccountSelectionSectionB2BComponent", "eshop/modules/auth/components/MobileBillingAccount", "eshop/modules/auth/components/MobileBillingAccountTitle"], function(_exports, _react, _OraCommonComponents, _OnlineUtils, _BillingAccountSelectionSectionB2BComponent, _MobileBillingAccount, _MobileBillingAccountTitle) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
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

    var BillingAccountSelectionSectionComponent = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(BillingAccountSelectionSectionComponent, _React$Component);

        var _super = _createSuper(BillingAccountSelectionSectionComponent);

        function BillingAccountSelectionSectionComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, BillingAccountSelectionSectionComponent);
            _this = _super.call(this, props);
            _this.state = {
                filteredAccounts: [],
                selectedBillingAccountId: _this.props.selectedBillingAccountId,
                selectedBillingAccountCode: _this.getAccountCodeById(null, _this.props.selectedBillingAccountId)
            };
            return _this;
        }

        babelHelpers.createClass(BillingAccountSelectionSectionComponent, [{
            key: "componentWillUpdate",
            value: function componentWillUpdate(nxtProps) {
                console.log("BillingAccountSelectionSectionComponent componentWillUpdate", nxtProps, this.state);

                if (this.state.filteredAccounts.length == 0 && (nxtProps.billingAccounts != null && nxtProps.billingAccounts.length > 0 || nxtProps.accountByMsisdn != null)) {
                    var accounts = this.getFilteredAccounts();
                    this.setState({
                        filteredAccounts: accounts,
                        selectedBillingAccountId: this.props.selectedBillingAccountId,
                        selectedBillingAccountCode: this.getAccountCodeById(accounts, this.props.selectedBillingAccountId)
                    });
                }
            }
        }, {
            key: "componentDidMount",
            value: function componentDidMount() {
                console.log("BillingAccountSelectionSectionComponent componentDidMount");

                if (this.props.accountByMsisdn == null) {
                    if (this.props.isB2B) {
                        this.props.requestMobileBillingAccountsAndChooseDefault();
                    } else {
                        this.props.requestMobileBillingAccounts();
                    }
                }
            }
        }, {
            key: "getChooseAccountButtonProps",
            value: function getChooseAccountButtonProps(main) {
                return {
                    className: "o-btn opl-btn opl-btn--primary u-w-100",
                    accept: main,
                    onClick: this.selectAccount.bind(this),
                    type: main ? "primary" : "secondary"
                };
            }
        }, {
            key: "selectAccount",
            value: function selectAccount() {
                this.props.selectAccount(this.state.selectedBillingAccountId, this.state.selectedBillingAccountCode);
            }
        }, {
            key: "getPropsForRadio",
            value: function getPropsForRadio(text, value) {
                return {
                    name: "accountSelect",
                    text: text,
                    value: value,
                    labelClassName: "o-radio opl-radio",
                    readOnly: false,
                    checked: !!(value == this.state.selectedBillingAccountId),
                    onChange: this.useAccount.bind(this)
                };
            }
        }, {
            key: "setSelectedBillingAccount",
            value: function setSelectedBillingAccount(accountId, accountCode) {
                console.log("BillingAccountSelectionSectionComponent useAccountAction =", accountId, accountCode);
                this.setState({
                    selectedBillingAccountId: accountId
                });
                this.setState({
                    selectedBillingAccountCode: accountCode
                });
            }
        }, {
            key: "useAccount",
            value: function useAccount(event) {
                var accountId = event.target.value;
                console.log("useAccount= id", accountId);
                this.setSelectedBillingAccount(accountId, this.getAccountCodeById(accountId));
            }
        }, {
            key: "getAccountCodeById",
            value: function getAccountCodeById(accounts, accountId) {
                console.log("BillingAccountSelectionSectionComponent accounts =", accounts);

                if (accounts && accounts.find(function(account) {
                        return account.accountId == accountId;
                    })) {
                    console.log("BillingAccountSelectionSectionComponent accounts =", accounts.find(function(account) {
                        return account.accountId == accountId;
                    }).accountCode);
                    return accounts.find(function(account) {
                        return account.accountId == accountId;
                    }).accountCode;
                }

                return null;
            }
        }, {
            key: "getFilteredAccounts",
            value: function getFilteredAccounts() {
                var filteredAccounts = [];

                if (this.props.billingAccounts != null && this.props.billingAccounts.length > 0) {
                    console.log("BillingAccountSelectionSectionComponent ACCOUNTS COMPONENT");
                    console.log(this.props.billingAccounts);
                    filteredAccounts = this.props.billingAccounts.filter(function(a) {
                        return a.mobileAccount && a.accountContracts.length > 0;
                    });
                } else if (this.props.accountByMsisdn != null) {
                    var accountByMsisdn = _objectSpread({}, this.props.accountByMsisdn, {
                        accountContracts: [{
                            serviceNumber: this.props.msisdn
                        }]
                    });

                    filteredAccounts.push(accountByMsisdn);
                    console.log("filteredAccounts: ", accountByMsisdn);
                }

                console.log("BillingAccountSelectionSectionComponent selectedBillingAccountId=", this.props.selectedBillingAccountId);
                console.log("BillingAccountSelectionSectionComponent accounts", filteredAccounts);
                return filteredAccounts;
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                if (this.props.billingAccounts == null && this.props.accountByMsisdn == null && !this.props.isB2B) return null;
                if (!!this.props.isB2B) return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "smsVerificationChooseAccountSection"
                }, /*#__PURE__*/ _react.default.createElement(_BillingAccountSelectionSectionB2BComponent.BillingAccountSelectionSectionB2BComponent, babelHelpers.extends({
                    id: "select-billing-account-popup"
                }, this.getChooseAccountButtonProps(false), this.props, this.state, {
                    selectAccount: this.selectAccount.bind(this),
                    setSelectedBillingAccount: this.setSelectedBillingAccount.bind(this),
                    filteredAccounts: this.state.filteredAccounts
                })));
                return /*#__PURE__*/ _react.default.createElement("div", {
                    id: "smsVerificationChooseAccountSection"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: ""
                }, this.props.descriptions.chooseAccountLabel || "Do faktury wskazanego przez ciebie konta, dołączone będą numery umieszczone na koszyku. Dołączenie wybranych numerów do Twojego istniejącego konta sprawi, że co miesiąc będziesz opłacać tylko jeden rachunek, na którym wyszczególnione będą opłaty za wszystkie numery."), /*#__PURE__*/ _react.default.createElement("fieldset", null, this.state.filteredAccounts && this.state.filteredAccounts.length > 0 && this.state.filteredAccounts.map(function(account) {
                    return [ /*#__PURE__*/ _react.default.createElement(_MobileBillingAccountTitle.MobileBillingAccountTitle, {
                        key: account.id,
                        selectedBillingAccountId: _this2.state.selectedBillingAccountId,
                        setSelectedBillingAccount: _this2.setSelectedBillingAccount.bind(_this2),
                        account: account
                    }), /*#__PURE__*/ _react.default.createElement(_MobileBillingAccount.MobileBillingAccount, {
                        account: account
                    })];
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-m",
                    hidden: this.props.processType === 'ASSIGNMENT'
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio(this.props.descriptions.useNewAccountLabel || "Stwórz nowe konto.", "")))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-padding-top-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-8 l-col-8 "
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-4 l-col-4 "
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, this.getChooseAccountButtonProps(false), this.props.descriptions.next)))));
            }
        }]);
        return BillingAccountSelectionSectionComponent;
    }(_react.default.Component);

    var _default = BillingAccountSelectionSectionComponent;
    _exports.default = _default;
});
//# sourceMappingURL=BillingAccountSelectionSectionComponent.js.map