define(["exports", "lodash", "../../../analyzer/ProductInfoUtils", "../../../../checkout/constants/AddonTypeEnum"], function(_exports, _lodash, _ProductInfoUtils, _AddonTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.convertToCartOmniCode = _exports.getSecondaryChoiceDiscountsWithRelatedBonuses = _exports.createSimCardDescription = _exports.getHighestMonthlyPrice = _exports.transformVoip = _exports.transformMsisdn = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _AddonTypeEnum = babelHelpers.interopRequireDefault(_AddonTypeEnum);

    var transformMsisdn = function transformMsisdn(number) {
        return number.replace(/^(\d{3})(\d{3})(\d{3})$/, function() {
            return arguments[1] + '\xa0' + arguments[2] + '\xa0' + arguments[3];
        });
    };

    _exports.transformMsisdn = transformMsisdn;

    var transformVoip = function transformVoip(number) {
        return number.replace(/^(\d{2})(\d{3})(\d{2})(\d{2})$/, function() {
            return arguments[1] + '\xa0' + arguments[2] + '\xa0' + arguments[3] + '\xa0' + arguments[4];
        });
    };

    _exports.transformVoip = transformVoip;

    var getHighestMonthlyPrice = function getHighestMonthlyPrice(monthlyPrices) {
        return monthlyPrices.slice().sort(function(a, b) {
            return a.price - b.price;
        }).pop();
    };

    _exports.getHighestMonthlyPrice = getHighestMonthlyPrice;

    var createSimCardDescription = function createSimCardDescription(simCard) {
        var startUpperCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var prefix = startUpperCase ? 'Karta' : 'karta';

        switch (simCard.baseCode) {
            case 'MOB_SIM_ESIM':
                return "".concat(prefix, " ").concat(simCard.description, ", ");

            default:
                return "".concat(prefix, " SIM ").concat(simCard.description, ", ");
        }
    };

    _exports.createSimCardDescription = createSimCardDescription;

    function fillRelatedProductsForSecondaryChoiceDiscount(secondaryChoiceDiscount, configurables) {
        secondaryChoiceDiscount.relatedProducts = (0, _ProductInfoUtils.getServicesRelatedToBonus)(configurables);
        return secondaryChoiceDiscount;
    }

    function fillDescriptionsForSecondaryChoiceDiscounts(secondaryChoiceDiscount, bonusEntries) {
        if (bonusEntries.filter(function(entry) {
                return entry.code === secondaryChoiceDiscount.id;
            })) {
            var entry = bonusEntries.filter(function(entry) {
                return entry.code === secondaryChoiceDiscount.id;
            })[0];

            if (secondaryChoiceDiscount.paymentDescriptions && entry) {
                secondaryChoiceDiscount.paymentDescriptions.payNowPayment = entry.payNowCost;
                secondaryChoiceDiscount.paymentDescriptions.oneTimePayment = entry.oneTimeCost;
                secondaryChoiceDiscount.paymentDescriptions.monthlyPayments = entry.monthlyCosts;
            }
        }

        return secondaryChoiceDiscount;
    }

    function fillRelatedProductsForSecondaryChoiceDiscountMobile(secondaryChoiceDiscount, configurables) {
        secondaryChoiceDiscount.relatedProducts = (0, _ProductInfoUtils.getSecondaryChoiceDiscountServicesRelated)(configurables);
        return secondaryChoiceDiscount;
    }

    var getSecondaryChoiceDiscountsWithRelatedBonuses = function getSecondaryChoiceDiscountsWithRelatedBonuses(configurables, bonusEntries) {
        return _lodash.default.flatMap(configurables, function(configurable) {
            if (configurable) {
                if (configurable.factoryName === "FIX") {
                    return (0, _ProductInfoUtils.getServices)(configurable).filter(function(service) {
                        return service.addonType === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
                    }).filter(function(service) {
                        return configurable.mandatoryProducts && !configurable.mandatoryProducts.includes(service.id);
                    }).map(function(secondaryChoiceDiscount) {
                        return fillRelatedProductsForSecondaryChoiceDiscount(secondaryChoiceDiscount, configurables);
                    }).map(function(secondaryChoiceDiscount) {
                        return fillDescriptionsForSecondaryChoiceDiscounts(secondaryChoiceDiscount, bonusEntries);
                    });
                } else {
                    return (0, _ProductInfoUtils.getServices)(configurable).filter(function(service) {
                        return service.productType === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
                    }).map(function(secondaryChoiceDiscount) {
                        return fillRelatedProductsForSecondaryChoiceDiscountMobile(secondaryChoiceDiscount, configurables);
                    }).map(function(secondaryChoiceDiscount) {
                        return fillDescriptionsForSecondaryChoiceDiscounts(secondaryChoiceDiscount, bonusEntries);
                    });
                }
            } else {
                return [];
            }
        });
    };

    _exports.getSecondaryChoiceDiscountsWithRelatedBonuses = getSecondaryChoiceDiscountsWithRelatedBonuses;

    var convertToCartOmniCode = function convertToCartOmniCode(bundleOmniCode) {
        return bundleOmniCode && bundleOmniCode.split('X')[0];
    };

    _exports.convertToCartOmniCode = convertToCartOmniCode;
});
//# sourceMappingURL=CartUtils.js.map