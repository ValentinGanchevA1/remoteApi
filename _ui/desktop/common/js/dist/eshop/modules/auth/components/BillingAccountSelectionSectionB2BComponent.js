define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/auth/components/MobileBillingAccount", "eshop/modules/auth/components/MobileBillingAccountTitle", "eshop/modules/auth/components/BillingAccountSearchComponent"], function(_exports, _react, _OraCommonComponents, _MobileBillingAccount, _MobileBillingAccountTitle, _BillingAccountSearchComponent) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.BillingAccountSelectionSectionB2BComponent = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _BillingAccountSearchComponent = babelHelpers.interopRequireDefault(_BillingAccountSearchComponent);

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

    var BillingAccountSelectionSectionB2BComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(BillingAccountSelectionSectionB2BComponent, _Component);

        var _super = _createSuper(BillingAccountSelectionSectionB2BComponent);

        function BillingAccountSelectionSectionB2BComponent(props) {
            var _this;

            babelHelpers.classCallCheck(this, BillingAccountSelectionSectionB2BComponent);
            _this = _super.call(this, props);
            _this.onClickNewAccount = _this.onClickNewAccount.bind(babelHelpers.assertThisInitialized(_this));
            return _this;
        }

        babelHelpers.createClass(BillingAccountSelectionSectionB2BComponent, [{
            key: "onClickNewAccount",
            value: function onClickNewAccount() {
                this.props.setSelectedBillingAccount("", "");
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
                    checked: !!(value == this.props.selectedBillingAccountId),
                    onChange: this.onClickNewAccount
                };
            }
        }, {
            key: "channelIsWWW",
            value: function channelIsWWW() {
                return !!this.props.channels && this.props.channels.sales === 'WWW';
            }
        }, {
            key: "render",
            value: function render() {
                var _this2 = this;

                return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("fieldset", null, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray1-bg u-padding-all-l"
                }, /*#__PURE__*/ _react.default.createElement("p", {
                    className: "h3 u-no-margin"
                }, "Wybierz konto")), this.props.isBillingAccountContractLimitExceeded && /*#__PURE__*/ _react.default.createElement(_BillingAccountSearchComponent.default, this.props), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-all-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-margin-m"
                }, !this.channelIsWWW() && /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraSimpleRadio, this.getPropsForRadio(this.props.descriptions && this.props.descriptions.useNewAccountLabel || "Stwórz nowe konto abonamentowe", ""))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator u-margin-m"
                }), this.props.filteredAccounts && this.props.filteredAccounts.length > 0 && this.props.filteredAccounts.map(function(billAccount) {
                    return [ /*#__PURE__*/ _react.default.createElement(_MobileBillingAccountTitle.MobileBillingAccountTitle, {
                        key: billAccount.id,
                        selectedBillingAccountId: _this2.props.selectedBillingAccountId,
                        setSelectedBillingAccount: _this2.props.setSelectedBillingAccount,
                        account: billAccount
                    }), /*#__PURE__*/ _react.default.createElement(_MobileBillingAccount.MobileBillingAccount, {
                        account: billAccount
                    })];
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "g-gray1-bg u-padding-all-l"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 large-offset-by-9 small-offset-by-9 medium-offset-by-9"
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    className: "opl-btn opl-btn--primary o-btn u-w-100",
                    onClick: this.props.selectAccount
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-box"
                }, /*#__PURE__*/ _react.default.createElement("span", {
                    className: "opl-ripple-circle"
                })), "Wybierz"))))));
            }
        }]);
        return BillingAccountSelectionSectionB2BComponent;
    }(_react.Component);

    _exports.BillingAccountSelectionSectionB2BComponent = BillingAccountSelectionSectionB2BComponent;
});
//# sourceMappingURL=BillingAccountSelectionSectionB2BComponent.js.map