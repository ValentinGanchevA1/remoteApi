define(["exports", "lodash", "../../../analyzer/ProductInfoUtils", "../../../../checkout/constants/AddonTypeEnum"], function(e, t, o, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.convertToCartOmniCode = e.getSecondaryChoiceDiscountsWithRelatedBonuses = e.createSimCardDescription = e.getHighestMonthlyPrice = e.transformVoip = e.transformMsisdn = void 0, t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i);
    e.transformMsisdn = function(e) {
        return e.replace(/^(\d{3})(\d{3})(\d{3})$/, function() {
            return arguments[1] + " " + arguments[2] + " " + arguments[3]
        })
    };
    e.transformVoip = function(e) {
        return e.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})$/, function() {
            return arguments[1] + " " + arguments[2] + " " + arguments[3] + " " + arguments[4]
        })
    };
    e.getHighestMonthlyPrice = function(e) {
        return e.slice().sort(function(e, t) {
            return e.price - t.price
        }).pop()
    };

    function c(t, e) {
        if (e.filter(function(e) {
                return e.code === t.id
            })) {
            var n = e.filter(function(e) {
                return e.code === t.id
            })[0];
            t.paymentDescriptions && n && (t.paymentDescriptions.payNowPayment = n.payNowCost, t.paymentDescriptions.oneTimePayment = n.oneTimeCost, t.paymentDescriptions.monthlyPayments = n.monthlyCosts)
        }
        return t
    }
    e.createSimCardDescription = function(e, t) {
        var n = !(1 < arguments.length && void 0 !== t) || t ? "Karta" : "karta";
        switch (e.baseCode) {
            case "MOB_SIM_ESIM":
                return "".concat(n, " ").concat(e.description, ", ");
            default:
                return "".concat(n, " SIM ").concat(e.description, ", ")
        }
    };
    e.getSecondaryChoiceDiscountsWithRelatedBonuses = function(r, n) {
        return t.default.flatMap(r, function(t) {
            return t ? "FIX" === t.factoryName ? (0, o.getServices)(t).filter(function(e) {
                return e.addonType === i.default.SECONDARY_CHOICE_DISCOUNT
            }).filter(function(e) {
                return t.mandatoryProducts && !t.mandatoryProducts.includes(e.id)
            }).map(function(e) {
                return n = r, (t = e).relatedProducts = (0, o.getServicesRelatedToBonus)(n), t;
                var t, n
            }).map(function(e) {
                return c(e, n)
            }) : (0, o.getServices)(t).filter(function(e) {
                return e.productType === i.default.SECONDARY_CHOICE_DISCOUNT
            }).map(function(e) {
                return n = r, (t = e).relatedProducts = (0, o.getSecondaryChoiceDiscountServicesRelated)(n), t;
                var t, n
            }).map(function(e) {
                return c(e, n)
            }) : []
        })
    };
    e.convertToCartOmniCode = function(e) {
        return e && e.split("X")[0]
    }
});
//# sourceMappingURL=CartUtils.js.map