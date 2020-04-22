define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.integer = integer;
    _exports.fraction = fraction;
    _exports.isPriceZero = isPriceZero;
    _exports.areMonthlyPricesZero = areMonthlyPricesZero;
    _exports.extractMainTvPackages = extractMainTvPackages;
    _exports.extractExtendingTvPackages = extractExtendingTvPackages;
    _exports.extractExtraTvPackages = extractExtraTvPackages;

    /**
     * Methods takes number in format "\\d.\\d" (example: 1.3) and divides it into integer (1) and fractional (3) parts
     * If given number is not valid, default value is returned { integer: null, fractional: null }
     */
    function getIntegerAndFractionPart(number) {
        function createResult(integer, fraction) {
            return {
                integer: integer,
                fraction: fraction
            };
        }

        var numberString = number.toString();

        if (new RegExp("\\d[.|,]\\d").test(numberString)) {
            var splitRegExp = new RegExp("[.|,]");
            var integerAndFraction = numberString.split(splitRegExp);
            return createResult(integerAndFraction[0], integerAndFraction[1]);
        } else if (new RegExp("\\d").test(numberString)) {
            return createResult(numberString, "00");
        } else {
            console.log("Number: " + number + " is not valid decimal number. Returning default value");
            return createResult(null, null);
        }
    }

    function integer(number) {
        return getIntegerAndFractionPart(number).integer;
    }

    function fraction(number) {
        return getIntegerAndFractionPart(number).fraction;
    }

    function isPriceZero(price) {
        return parseInt(integer(price.gross)) === 0 && parseInt(fraction(price.gross)) === 0;
    }

    function areMonthlyPricesZero(monthlyPrices) {
        return monthlyPrices.length === 1 && isPriceZero(monthlyPrices[0]);
    }

    function extractMainTvPackages(tv) {
        return tv.filter(function(tvItem) {
            return tvItem.addonType.code === "TVPCK_MAIN" && tvItem.partner === "";
        }).map(function(tvItem) {
            return createTvPackage(tvItem);
        });
    }

    function extractExtendingTvPackages(tv) {
        return tv.filter(function(tvItem) {
            return tvItem.addonType.code === "TVPCK_MAIN" && tvItem.partner === "OPTV";
        }).map(function(tvItem) {
            return createTvPackage(tvItem);
        });
    }

    function extractExtraTvPackages(tv) {
        return tv.filter(function(tvItem) {
            return tvItem.addonType.code === "TVPCK_OPTIONAL" || tvItem.addonType.code === "TVPCK_MAIN" && tvItem.partner !== "" && tvItem.partner !== "OPTV";
        }).map(function(tvItem) {
            return createTvPackage(tvItem);
        });
    }

    function createTvPackage(tvItem) {
        var features = tvItem.features ? tvItem.features.map(function(feature) {
            return feature.featureValues[0].value;
        }) : [];
        var monthlyPayments = convertPayments(tvItem.price.oraPaymentsData.monthlyPayments);
        return {
            id: tvItem.code,
            features: features,
            monthlyPayments: monthlyPayments,
            img: tvItem.img
        };
    }

    function convertPayments(monthlyPayments) {
        return monthlyPayments.map(function(monthlyPayment) {
            return {
                "monthFrom": monthlyPayment.monthFrom,
                "price": monthlyPayment.price,
                "currency": monthlyPayment.currency,
                "description": monthlyPayment.description
            };
        });
    }
});
//# sourceMappingURL=Utils.js.map