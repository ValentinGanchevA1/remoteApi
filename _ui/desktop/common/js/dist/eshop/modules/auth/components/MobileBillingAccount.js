define(["exports", "react", "eshop/modules/auth/components/MobileContract"], function(_exports, _react, _MobileContract) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.MobileBillingAccount = void 0;
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

    var MobileBillingAccount = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MobileBillingAccount, _Component);

        var _super = _createSuper(MobileBillingAccount);

        function MobileBillingAccount(props) {
            babelHelpers.classCallCheck(this, MobileBillingAccount);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MobileBillingAccount, [{
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-checkbox"
                }, /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "u-margin-m"
                }, this.props.account && this.props.account.accountContracts && this.props.account.accountContracts.length > 0 && this.props.account.accountContracts.map(function(contract) {
                    return /*#__PURE__*/ _react.default.createElement(_MobileContract.MobileContract, {
                        key: contract.contractId,
                        data: contract
                    });
                })));
            }
        }]);
        return MobileBillingAccount;
    }(_react.Component);

    _exports.MobileBillingAccount = MobileBillingAccount;
});
//# sourceMappingURL=MobileBillingAccount.js.map