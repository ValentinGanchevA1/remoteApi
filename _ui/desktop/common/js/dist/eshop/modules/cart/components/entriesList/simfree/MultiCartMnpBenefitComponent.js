define(["exports", "react", "./MultiCartItemTooltip", "eshop/utils/OnlineUtils"], function(_exports, _react, _MultiCartItemTooltip, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _MultiCartItemTooltip = babelHelpers.interopRequireDefault(_MultiCartItemTooltip);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var MultiCartMnpBenefitComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(MultiCartMnpBenefitComponent, _Component);

        var _super = _createSuper(MultiCartMnpBenefitComponent);

        function MultiCartMnpBenefitComponent(props) {
            babelHelpers.classCallCheck(this, MultiCartMnpBenefitComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(MultiCartMnpBenefitComponent, [{
            key: "getMnpBenefitData",
            value: function getMnpBenefitData(processType, mnpData, monthlyPrices) {
                if (!_OnlineUtils.default.isMnp(processType)) return false;

                if (monthlyPrices && monthlyPrices[0].price === 0 && monthlyPrices[0].monthTo) {
                    return monthlyPrices[0].monthTo;
                }
            }
        }, {
            key: "render",
            value: function render() {
                var months = this.getMnpBenefitData(this.props.processType, this.props.mnpData, this.props.monthlyPrices),
                    formattedMonth = months + (months < 5 ? ' miesiące' : ' miesięcy');
                return months && /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-padding-top u-font-bold u-padding u-padding-left-l u-padding-right-l g-yellowf-bg u-spacing-l"
                }, "Dla przenosz\u0105cych numer ", formattedMonth, " za darmo!", /*#__PURE__*/ _react.default.createElement(_MultiCartItemTooltip.default, null, this.props.tooltip));
            }
        }]);
        return MultiCartMnpBenefitComponent;
    }(_react.Component);

    _exports.default = MultiCartMnpBenefitComponent;
});
//# sourceMappingURL=MultiCartMnpBenefitComponent.js.map