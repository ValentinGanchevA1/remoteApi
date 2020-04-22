define(["exports", "react", "react-redux", "../../actions/app", "../../selectors"], function(_exports, _react, _reactRedux, _app, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);

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

    var MulticartBillingAccountSelectorComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MulticartBillingAccountSelectorComponent, _Component);

        var _super = _createSuper(MulticartBillingAccountSelectorComponent);

        function MulticartBillingAccountSelectorComponent(props) {
            babelHelpers.classCallCheck(this, MulticartBillingAccountSelectorComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MulticartBillingAccountSelectorComponent, [{
            key: "showActiveContracts",
            value: function showActiveContracts(evt) {
                var accountCode = evt.target.value;
                var selected = this.getSelectedAccount();

                if (accountCode && selected.type === 'MOBILE' && selected.accountCode === accountCode && !this.props.accountContractsVisible) {
                    this.props.setBillingAccountContractsVisibility(true);
                }
            }
        }, {
            key: "renderBillingAccountSelectorOptions",
            value: function renderBillingAccountSelectorOptions() {
                var options = this.props.billingAccounts.map(function(billingAccount, i) {
                    return /*#__PURE__*/ _react.default.createElement("option", {
                        key: i,
                        "data-option": billingAccount.accountCode,
                        value: billingAccount.accountCode,
                        className: "g-white1-bg"
                    }, billingAccount.accountCode);
                });
                options.unshift( /*#__PURE__*/ _react.default.createElement("option", {
                    key: -1,
                    value: null,
                    className: "g-white1-bg"
                }));
                return options;
            }
        }, {
            key: "setSelectedBillingAccount",
            value: function setSelectedBillingAccount(evt) {
                var accountCode = evt.target.value;

                if (accountCode) {
                    var billingAccount = this.getBillingAccountByCode(accountCode);
                    this.props.setSelectedBillingAccount(billingAccount);
                }
            }
        }, {
            key: "getBillingAccountByCode",
            value: function getBillingAccountByCode(code) {
                return this.props.billingAccounts.find(function(billingAccount) {
                    return billingAccount.accountCode === code;
                });
            }
        }, {
            key: "getSelectedAccount",
            value: function getSelectedAccount() {
                if (this.props.accountType === "MOBILE") {
                    return this.props.selectedMobile;
                } else {
                    return this.props.selectedFix;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var selected = this.getSelectedAccount();
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-2 l-col-2  u-small-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    "data-js-module": "core/modules/floating-label",
                    className: "o-floating-label o-select"
                }, /*#__PURE__*/ _react.default.createElement("select", {
                    id: "select1",
                    name: "select",
                    "aria-describedby": "floating-label__placeholder1",
                    className: 'opl-select-primary opl-input--size-m' + (selected.accountCode ? ' g-greenf-bg is-not-empty' : ''),
                    value: selected.accountCode,
                    onChange: this.setSelectedBillingAccount.bind(this),
                    onClick: this.showActiveContracts.bind(this)
                }, this.renderBillingAccountSelectorOptions.bind(this)()), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "o-select__arrow"
                }), /*#__PURE__*/ _react.default.createElement("p", {
                    id: "floating-label__placeholder1",
                    className: "label o-floating-label__placeholder g-gray6-c "
                }, this.props.descriptions[this.props.accountType.toLowerCase() + 'Label'])));
            }
        }]);
        return MulticartBillingAccountSelectorComponent;
    }(_react.Component);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            selectedMobile: (0, _selectors.getSelectedBillingAccountMobile)(state),
            selectedFix: (0, _selectors.getSelectedBillingAccountFix)(state),
            accountContractsVisible: (0, _selectors.areBillingAccountContractsVisible)(state),
            accountContracts: (0, _selectors.getSelectedAccountContracts)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, {
        setSelectedBillingAccount: _app.setSelectedBillingAccount,
        getActiveContracts: _app.getActiveContracts,
        setBillingAccountContractsVisibility: _app.setBillingAccountContractsVisibility
    })(MulticartBillingAccountSelectorComponent);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartBillingAccountSelectorComponent.js.map