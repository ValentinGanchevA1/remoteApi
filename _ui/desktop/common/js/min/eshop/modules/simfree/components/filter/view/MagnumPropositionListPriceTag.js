define(["exports", "react", "../../../../magnum2/components/Utils", "eshop/modules/simfree/components/OOVMonthlyPriceTag", "./MagnumOfferPropositionListItem", "../../../../magnum2/components/BundleTypeUtils"], function(e, o, a, l, c, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), l = babelHelpers.interopRequireDefault(l);

    function n(n) {
        if (!n.offer) return null;
        var r = [];
        if ((0, s.isLTE)(n.availableBundleTypes) && n.offer.monthlyPayments[0]) {
            var e = Math.max.apply(Math, babelHelpers.toConsumableArray(n.offer.monthlyPayments.map(function(e) {
                    return e.endCycle
                })).concat([0])),
                i = n.offer.monthlyPayments[0];
            r.push({
                currency: n.offer.currency,
                description: "",
                monthFrom: i.startCycle,
                monthTo: e,
                netPrice: i.finalNetPrice,
                originalGrossPrice: i.finalPrice,
                originalNetPrice: i.finalNetPrice,
                originalPrice: null,
                price: (0, a.integer)(i.finalPrice) + "," + (0, a.fraction)(i.finalPrice)
            })
        } else n.offer.monthlyPayments.map(function(e) {
            r.push({
                currency: n.offer.currency,
                description: "",
                monthFrom: e.startCycle,
                monthTo: e.endCycle === e.startCycle ? e.endCycle + 1 : e.endCycle,
                netPrice: e.finalNetPrice,
                originalGrossPrice: e.finalPrice,
                originalNetPrice: e.finalNetPrice,
                originalPrice: null,
                price: (0, a.integer)(e.finalPrice) + "," + (0, a.fraction)(e.finalPrice)
            })
        });
        var t = (0, c.formatPrice)(n.offer.monthlyPayments[0].finalPrice, n.offer.currency);
        return o.default.createElement(l.default, {
            baseSummaryPrice: t,
            convSummaryPrice: t,
            monthlyPayments: r,
            monthlyPaymentsWithBonuses: r,
            clientContext: n.clientContext,
            loyaltyLength: n.loyaltyLength,
            monthString: n.monthlyString || "mies.",
            mainPriceClass: n.mainPriceClass,
            alignClass: n.alignClass,
            offerDiscountInfoDescription: n.offerDiscountInfoDescription,
            offerDiscountInfoConvDescription: n.offerDiscountInfoConvDescription,
            baseId: n.baseId,
            isMagnum: !0
        })
    }
    e.default = n
});
//# sourceMappingURL=MagnumPropositionListPriceTag.js.map