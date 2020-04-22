import MarketSegment from "eshop/modules/core/enum/MarketSegment";

export const mapObjectArrayToSelect = option => ({
    value: option.value,
    description: option.description
});
export const mapStringToJsonObject = stringText => JSON.parse(stringText);
export const hashRateplanIds = array => JSON.stringify({
    productIds: array
});
export const mapRateplanIdsToJsonObject = array => mapStringToJsonObject(hashRateplanIds(array));
export const hashFilters = filters => filters && JSON.stringify({
    loyaltyLength: filters.loyaltyLength && filters.loyaltyLength[filters.processType],
    processType: filters.processType,
    offerType: filters.offerType,
    msisdn: filters.verifiedMsisdn.value || ""
});
export const hashProcessType = filters => JSON.stringify({
    processType: filters.processType
});
export const findDefaultOptionInArrayOrPickFirst = (array) => array.find(elem => elem.defaultOption) || array[0];
export const findDefaultOptionInArrayOrBiggestValue = (array) => array.find(elem => elem.defaultOption) || Math.max.apply(Math, array.map(e => e.value));
export const findDefaultOptionInArrayOrSmallestValue = (array) => {
    //HARDCORE NA 24 DO WYJEBANIA BO NIE MA JESZCZE HISTORYJKI NA TO A MA BYC
    const defaultValue = array.find(elem => elem.defaultOption || elem.value == 24);
    const minValue = Math.min.apply(Math, array.map(e => e.value));
    return defaultValue && defaultValue.value || minValue;
};
export const shouldDisableAddToCart = (checkMsisdnResult, processType, msisdnVerificationNeeded) =>
    msisdnVerificationNeeded && processType !== "ACTIVATION" && !checkMsisdnResult.isPositive;
export const shouldCallOffersWithMsisdn = (checkMsisdnResult, processType, msisdnVerificationNeeded) =>
    msisdnVerificationNeeded && processType !== "ACTIVATION" && checkMsisdnResult && checkMsisdnResult.isPositive;
export const filtersMatching = (filters) => {
    const verifiedMsisdnObject = filters.verifiedMsisdn;
    return verifiedMsisdnObject.context && isMarketEqual(verifiedMsisdnObject.context.market, filters.marketContext) &&
        verifiedMsisdnObject.context.offer === filters.selected.offerType &&
        verifiedMsisdnObject.context.process === filters.selected.processType;
};
export const isMarketEqual = (market1, market2) => {
    return market1 === market2 || (MarketSegment.isB2B(market1) && MarketSegment.isB2B(market2))
};
export const getPagePrefixUrl = (marketContextPrefixUrl) => {
    return marketContextPrefixUrl + (window.location.pathname.includes("/sklep") ? "/sklep" : "/akcesoria");
};
export const getVerifiedMsisdnFromFilters = (filters) => {
    return filtersMatching(filters) ? filters.verifiedMsisdn.value : null;
};
export const filterOptionsRecursively = (option, processesForOptionFiltering) => {
    if (option.options && option.options.length) {
        option.options = option.options.filter((singleOption => filterOptionsRecursively(singleOption, processesForOptionFiltering)));
        return option.options.length;
    }
    return option.process && processesForOptionFiltering.includes(option.process);
};
export const filterAvailableProcessOptions = (extProcessSelectConfigOptions, availableProcesses) => {
    const processesForOptionFiltering = availableProcesses && availableProcesses.map(arg => arg.value);
    const filteredOptions = extProcessSelectConfigOptions && extProcessSelectConfigOptions.options && JSON.parse(JSON.stringify(extProcessSelectConfigOptions))
        .options.filter(option => filterOptionsRecursively(option, processesForOptionFiltering));
    return Object.assign({}, extProcessSelectConfigOptions, {
        options: filteredOptions ? filteredOptions : []
    });
};

export const isHtml = text => /<\/?[a-z][\s\S]*>/.test(text);