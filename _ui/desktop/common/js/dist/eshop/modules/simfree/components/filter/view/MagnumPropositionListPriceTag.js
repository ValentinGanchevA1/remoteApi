define(["exports", "react", "../../../../magnum2/components/Utils", "eshop/modules/simfree/components/OOVMonthlyPriceTag", "./MagnumOfferPropositionListItem", "../../../../magnum2/components/BundleTypeUtils"], function(_exports, _react, _Utils, _OOVMonthlyPriceTag, _MagnumOfferPropositionListItem, _BundleTypeUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireWildcard(_react);
    _OOVMonthlyPriceTag = babelHelpers.interopRequireDefault(_OOVMonthlyPriceTag);

    var MagnumPropositionListPriceTag = function MagnumPropositionListPriceTag(props) {
        if (!props.offer) return null;
        var monthlyPaymentsObj = [];

        if ((0, _BundleTypeUtils.isLTE)(props.availableBundleTypes) && props.offer.monthlyPayments[0]) {
            var monthTo = Math.max.apply(Math, babelHelpers.toConsumableArray(props.offer.monthlyPayments.map(function(mp) {
                return mp.endCycle;
            })).concat([0]));
            var monthlyPayment = props.offer.monthlyPayments[0];
            monthlyPaymentsObj.push({
                currency: props.offer.currency,
                description: "",
                monthFrom: monthlyPayment.startCycle,
                monthTo: monthTo,
                netPrice: monthlyPayment.finalNetPrice,
                originalGrossPrice: monthlyPayment.finalPrice,
                originalNetPrice: monthlyPayment.finalNetPrice,
                originalPrice: null,
                price: (0, _Utils.integer)(monthlyPayment.finalPrice) + ',' + (0, _Utils.fraction)(monthlyPayment.finalPrice)
            });
        } else {
            props.offer.monthlyPayments.map(function(t) {
                monthlyPaymentsObj.push({
                    currency: props.offer.currency,
                    description: "",
                    monthFrom: t.startCycle,
                    monthTo: t.endCycle === t.startCycle ? t.endCycle + 1 : t.endCycle,
                    netPrice: t.finalNetPrice,
                    originalGrossPrice: t.finalPrice,
                    originalNetPrice: t.finalNetPrice,
                    originalPrice: null,
                    price: (0, _Utils.integer)(t.finalPrice) + ',' + (0, _Utils.fraction)(t.finalPrice)
                });
            });
        }

        var monthlyPayments = (0, _MagnumOfferPropositionListItem.formatPrice)(props.offer.monthlyPayments[0].finalPrice, props.offer.currency);
        return /*#__PURE__*/ _react.default.createElement(_OOVMonthlyPriceTag.default, {
            baseSummaryPrice: monthlyPayments,
            convSummaryPrice: monthlyPayments,
            monthlyPayments: monthlyPaymentsObj,
            monthlyPaymentsWithBonuses: monthlyPaymentsObj,
            clientContext: props.clientContext,
            loyaltyLength: props.loyaltyLength,
            monthString: props.monthlyString || "mies.",
            mainPriceClass: props.mainPriceClass,
            alignClass: props.alignClass,
            offerDiscountInfoDescription: props.offerDiscountInfoDescription,
            offerDiscountInfoConvDescription: props.offerDiscountInfoConvDescription,
            baseId: props.baseId,
            isMagnum: true
        });
    };

    var _default = MagnumPropositionListPriceTag;
    _exports.default = _default;
});
//# sourceMappingURL=MagnumPropositionListPriceTag.js.map