define(["exports", "react", "eshop/utils/OnlineUtils", "eshop/modules/simfree/components/OOVMonthlyPriceTag"], function(_exports, _react, _OnlineUtils, _OOVMonthlyPriceTag) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _OOVMonthlyPriceTag = babelHelpers.interopRequireDefault(_OOVMonthlyPriceTag);

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

    var ProductListOfferPriceTagCount = 0;

    var ProductListOfferPriceTag = /*#__PURE__*/ function(_Component) {
        babelHelpers.inherits(ProductListOfferPriceTag, _Component);

        var _super = _createSuper(ProductListOfferPriceTag);

        function ProductListOfferPriceTag(props) {
            var _this;

            babelHelpers.classCallCheck(this, ProductListOfferPriceTag);
            _this = _super.call(this, props);
            _this.state = {
                countId: ProductListOfferPriceTagCount++
            };
            return _this;
        }

        babelHelpers.createClass(ProductListOfferPriceTag, [{
            key: "getPaymentsFromProposition",
            value: function getPaymentsFromProposition() {
                var plainPriceObj = _OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, "");

                var bonusPriceObj = _OnlineUtils.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole);

                var basePrice = plainPriceObj.basePrice.originalGrossPrice;
                var convPrice = bonusPriceObj.basePrice.originalGrossPrice;
                var monthlyPayments = plainPriceObj.totalPayments.monthlyPayments;
                var monthlyPaymentsWithBonuses = bonusPriceObj.totalPayments.monthlyPayments;
                return {
                    baseSummaryPrice: basePrice,
                    convSummaryPrice: convPrice,
                    monthlyPayments: monthlyPayments,
                    monthlyPaymentsWithBonuses: monthlyPaymentsWithBonuses
                };
            }
        }, {
            key: "getPaymentsFromEntry",
            value: function getPaymentsFromEntry() {
                var size = this.props.entry.monthlyPrices && this.props.entry.monthlyPrices.size;
                return {
                    baseSummaryPrice: this.props.entry.monthlyOldPrice,
                    convSummaryPrice: this.props.entry.monthlyPrices[size - 1],
                    monthlyPayments: this.props.entry.monthlyOldPrices,
                    monthlyPaymentsWithBonuses: this.props.entry.monthlyPrices,
                    clientContext: true
                };
            }
        }, {
            key: "render",
            value: function render() {
                var payments = null;

                if (this.props.entry) {
                    payments = this.getPaymentsFromEntry();
                } else if (this.props.proposition) {
                    payments = this.getPaymentsFromProposition();
                } else {
                    return null;
                }
                /*
                   :(
                */


                var clientContext = this.props.clientContext || (this.props.contractRole ? true : false);
                return /*#__PURE__*/ _react.default.createElement(_OOVMonthlyPriceTag.default, babelHelpers.extends({
                    clientContext: clientContext,
                    loyaltyLength: this.props.loyaltyLength,
                    monthString: this.props.monthlyString || "mies.",
                    mainPriceClass: this.props.mainPriceClass,
                    alignClass: this.props.alignClass,
                    offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                    offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                    baseId: this.props.baseId,
                    isMagnum: false
                }, payments));
            }
        }]);
        return ProductListOfferPriceTag;
    }(_react.Component);

    var _default = ProductListOfferPriceTag;
    _exports.default = _default;
});
//# sourceMappingURL=ProductListOfferPriceTag.js.map