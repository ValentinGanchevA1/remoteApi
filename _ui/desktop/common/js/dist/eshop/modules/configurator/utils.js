define(["exports", "eshop/modules/core/enum/MarketSegment"], function(_exports, _MarketSegment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isHtml = _exports.filterAvailableProcessOptions = _exports.filterOptionsRecursively = _exports.getVerifiedMsisdnFromFilters = _exports.getPagePrefixUrl = _exports.isMarketEqual = _exports.filtersMatching = _exports.shouldCallOffersWithMsisdn = _exports.shouldDisableAddToCart = _exports.findDefaultOptionInArrayOrSmallestValue = _exports.findDefaultOptionInArrayOrBiggestValue = _exports.findDefaultOptionInArrayOrPickFirst = _exports.hashProcessType = _exports.hashFilters = _exports.mapRateplanIdsToJsonObject = _exports.hashRateplanIds = _exports.mapStringToJsonObject = _exports.mapObjectArrayToSelect = void 0;
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);

    var mapObjectArrayToSelect = function mapObjectArrayToSelect(option) {
        return {
            value: option.value,
            description: option.description
        };
    };

    _exports.mapObjectArrayToSelect = mapObjectArrayToSelect;

    var mapStringToJsonObject = function mapStringToJsonObject(stringText) {
        return JSON.parse(stringText);
    };

    _exports.mapStringToJsonObject = mapStringToJsonObject;

    var hashRateplanIds = function hashRateplanIds(array) {
        return JSON.stringify({
            productIds: array
        });
    };

    _exports.hashRateplanIds = hashRateplanIds;

    var mapRateplanIdsToJsonObject = function mapRateplanIdsToJsonObject(array) {
        return mapStringToJsonObject(hashRateplanIds(array));
    };

    _exports.mapRateplanIdsToJsonObject = mapRateplanIdsToJsonObject;

    var hashFilters = function hashFilters(filters) {
        return filters && JSON.stringify({
            loyaltyLength: filters.loyaltyLength && filters.loyaltyLength[filters.processType],
            processType: filters.processType,
            offerType: filters.offerType,
            msisdn: filters.verifiedMsisdn.value || ""
        });
    };

    _exports.hashFilters = hashFilters;

    var hashProcessType = function hashProcessType(filters) {
        return JSON.stringify({
            processType: filters.processType
        });
    };

    _exports.hashProcessType = hashProcessType;

    var findDefaultOptionInArrayOrPickFirst = function findDefaultOptionInArrayOrPickFirst(array) {
        return array.find(function(elem) {
            return elem.defaultOption;
        }) || array[0];
    };

    _exports.findDefaultOptionInArrayOrPickFirst = findDefaultOptionInArrayOrPickFirst;

    var findDefaultOptionInArrayOrBiggestValue = function findDefaultOptionInArrayOrBiggestValue(array) {
        return array.find(function(elem) {
            return elem.defaultOption;
        }) || Math.max.apply(Math, array.map(function(e) {
            return e.value;
        }));
    };

    _exports.findDefaultOptionInArrayOrBiggestValue = findDefaultOptionInArrayOrBiggestValue;

    var findDefaultOptionInArrayOrSmallestValue = function findDefaultOptionInArrayOrSmallestValue(array) {
        //HARDCORE NA 24 DO WYJEBANIA BO NIE MA JESZCZE HISTORYJKI NA TO A MA BYC
        var defaultValue = array.find(function(elem) {
            return elem.defaultOption || elem.value == 24;
        });
        var minValue = Math.min.apply(Math, array.map(function(e) {
            return e.value;
        }));
        return defaultValue && defaultValue.value || minValue;
    };

    _exports.findDefaultOptionInArrayOrSmallestValue = findDefaultOptionInArrayOrSmallestValue;

    var shouldDisableAddToCart = function shouldDisableAddToCart(checkMsisdnResult, processType, msisdnVerificationNeeded) {
        return msisdnVerificationNeeded && processType !== "ACTIVATION" && !checkMsisdnResult.isPositive;
    };

    _exports.shouldDisableAddToCart = shouldDisableAddToCart;

    var shouldCallOffersWithMsisdn = function shouldCallOffersWithMsisdn(checkMsisdnResult, processType, msisdnVerificationNeeded) {
        return msisdnVerificationNeeded && processType !== "ACTIVATION" && checkMsisdnResult && checkMsisdnResult.isPositive;
    };

    _exports.shouldCallOffersWithMsisdn = shouldCallOffersWithMsisdn;

    var filtersMatching = function filtersMatching(filters) {
        var verifiedMsisdnObject = filters.verifiedMsisdn;
        return verifiedMsisdnObject.context && isMarketEqual(verifiedMsisdnObject.context.market, filters.marketContext) && verifiedMsisdnObject.context.offer === filters.selected.offerType && verifiedMsisdnObject.context.process === filters.selected.processType;
    };

    _exports.filtersMatching = filtersMatching;

    var isMarketEqual = function isMarketEqual(market1, market2) {
        return market1 === market2 || _MarketSegment.default.isB2B(market1) && _MarketSegment.default.isB2B(market2);
    };

    _exports.isMarketEqual = isMarketEqual;

    var getPagePrefixUrl = function getPagePrefixUrl(marketContextPrefixUrl) {
        return marketContextPrefixUrl + (window.location.pathname.includes("/sklep") ? "/sklep" : "/akcesoria");
    };

    _exports.getPagePrefixUrl = getPagePrefixUrl;

    var getVerifiedMsisdnFromFilters = function getVerifiedMsisdnFromFilters(filters) {
        return filtersMatching(filters) ? filters.verifiedMsisdn.value : null;
    };

    _exports.getVerifiedMsisdnFromFilters = getVerifiedMsisdnFromFilters;

    var filterOptionsRecursively = function filterOptionsRecursively(option, processesForOptionFiltering) {
        if (option.options && option.options.length) {
            option.options = option.options.filter(function(singleOption) {
                return filterOptionsRecursively(singleOption, processesForOptionFiltering);
            });
            return option.options.length;
        }

        return option.process && processesForOptionFiltering.includes(option.process);
    };

    _exports.filterOptionsRecursively = filterOptionsRecursively;

    var filterAvailableProcessOptions = function filterAvailableProcessOptions(extProcessSelectConfigOptions, availableProcesses) {
        var processesForOptionFiltering = availableProcesses && availableProcesses.map(function(arg) {
            return arg.value;
        });
        var filteredOptions = extProcessSelectConfigOptions && extProcessSelectConfigOptions.options && JSON.parse(JSON.stringify(extProcessSelectConfigOptions)).options.filter(function(option) {
            return filterOptionsRecursively(option, processesForOptionFiltering);
        });
        return Object.assign({}, extProcessSelectConfigOptions, {
            options: filteredOptions ? filteredOptions : []
        });
    };

    _exports.filterAvailableProcessOptions = filterAvailableProcessOptions;

    var isHtml = function isHtml(text) {
        return /<\/?[a-z][\s\S]*>/.test(text);
    };

    _exports.isHtml = isHtml;
});
//# sourceMappingURL=utils.js.map