define(["exports", "react", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/core/components/ui/Tooltip"], function(_exports, _react, _reactRedux, _OnlineUtils, _Tooltip) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _Tooltip = babelHelpers.interopRequireDefault(_Tooltip);

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

    var SingleColumnLine = function SingleColumnLine(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row " + props.className
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-12 "
        }, props.col1));
    };

    var DoubleColumnLine = function DoubleColumnLine(props) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-row"
        }, /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-7"
        }, props.col1), /*#__PURE__*/ _react.default.createElement("div", {
            className: "l-col l-col-5 u-text-right"
        }, props.col2));
    };

    var ProductOfferInstalmentPriceTooltipComponent = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductOfferInstalmentPriceTooltipComponent, _Component);

        var _super = _createSuper(ProductOfferInstalmentPriceTooltipComponent);

        function ProductOfferInstalmentPriceTooltipComponent(props) {
            babelHelpers.classCallCheck(this, ProductOfferInstalmentPriceTooltipComponent);
            return _super.call(this, props);
        }

        babelHelpers.createClass(ProductOfferInstalmentPriceTooltipComponent, [{
            key: "render",
            value: function render() {
                if (!this.props.instalmentTooltipDescription || this.props.instalmentTooltipDescription == "") return null;
                var proposition = this.props.proposition;
                if (!proposition) return null;
                var basePrice = this.props.proposition.deviceData.inOffer.price.base;
                var convergentPrice = this.props.proposition.deviceData.inOffer.price.convergent;

                var oneTimePayment = _OnlineUtils.default.formatPrice(this.props.proposition.deviceData.inOffer.price.base.oneTimePayment);

                var deviceRecurringPayments = basePrice.devicePayments[0];

                var deviceMonthlyPayment = _OnlineUtils.default.formatPrice(deviceRecurringPayments.price);

                var devicePaymentsLength = deviceRecurringPayments.monthTo;

                var devicePayment = _OnlineUtils.default.formatPrice(this.props.clientContext ? convergentPrice.devicePayments[0].price : basePrice.devicePayments[0].price);

                if (!devicePayment) {
                    return /*#__PURE__*/ _react.default.createElement("p", null, "empty");
                }

                var rows = [];
                var i = 0;
                rows.push( /*#__PURE__*/ _react.default.createElement(SingleColumnLine, {
                    key: "line-" + (i + 4),
                    col1: "Rata za urządzenie"
                }));
                rows.push( /*#__PURE__*/ _react.default.createElement(DoubleColumnLine, {
                    key: "line-" + (i + 5),
                    col1: "od 1 do " + devicePaymentsLength + " mies.",
                    col2: devicePayment + " zł/mies."
                }));
                rows.push( /*#__PURE__*/ _react.default.createElement("div", {
                    key: "line-" + (i + 6),
                    className: "l-row  u-padding-all-m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--s o-separator--full-width "
                })));
                rows.push( /*#__PURE__*/ _react.default.createElement(SingleColumnLine, {
                    key: "line-" + (i + 7),
                    col1: this.props.instalmentTooltipDescription,
                    className: "u-font-bold u-font-small"
                }));
                return /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
                    maxWidth: 400,
                    baseId: "instalmentTooltip"
                }, rows);
            }
        }]);
        return ProductOfferInstalmentPriceTooltipComponent;
    }(_react.Component);

    var _default = ProductOfferInstalmentPriceTooltipComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ProductOfferInstalmentPriceTooltipComponent.js.map