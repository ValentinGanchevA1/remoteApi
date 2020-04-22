define(["exports", "react", "eshop/components/OraCommonComponents"], function(_exports, _react, _OraCommonComponents) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.MobileBillingAccountTitle = void 0;
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

    var MobileBillingAccountTitle = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MobileBillingAccountTitle, _Component);

        var _super = _createSuper(MobileBillingAccountTitle);

        function MobileBillingAccountTitle(props) {
            babelHelpers.classCallCheck(this, MobileBillingAccountTitle);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MobileBillingAccountTitle, [{
            key: "useAccount",
            value: function useAccount(e) {
                if (e.target.value == this.props.account.accountId) {
                    this.props.setSelectedBillingAccount(this.props.account.accountId, this.props.account.accountCode);
                }
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
                    checked: value == this.props.selectedBillingAccountId,
                    onChange: this.useAccount.bind(this)
                };
            }
        }, {
            key: "render",
            value: function render() {
                var label = this.props.account && this.props.account.groupName ? "Konto mobilne z " + this.props.account.groupName : "Konto mobilne";
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-margin-m"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraComplexRadio, this.getPropsForRadio(label, this.props.account.accountId), /*#__PURE__*/ _react.default.createElement("p", {
                    className: ""
                }, " ", label), /*#__PURE__*/ _react.default.createElement("p", {
                    className: "g-gray5-c u-font-normal"
                }, this.props.account.accountCode)));
            }
        }]);
        return MobileBillingAccountTitle;
    }(_react.Component);

    _exports.MobileBillingAccountTitle = MobileBillingAccountTitle;
});
//# sourceMappingURL=MobileBillingAccountTitle.js.map