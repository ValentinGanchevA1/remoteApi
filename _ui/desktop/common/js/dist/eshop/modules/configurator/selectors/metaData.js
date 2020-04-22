define(["exports", "Reselect", "./root", "eshop/modules/simfree/selectors", "eshop/modules/fix/selectors/root", "eshop/modules/configurator/selectors/filters"], function(_exports, _Reselect, _root, _selectors, _root2, _filters) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.bgColor = _exports.getMarketContextPrefixUrl = _exports.getProductListUrl = _exports.getB2bPrefixUrl = _exports.isMobileBillingAccountsSet = _exports.isMsisdnVerificationRequired = _exports.getVerifyMsisdnLoading = _exports.getAddFromLink = _exports.getUrlOfferParametersUsed = _exports.getUrlParametersUsed = _exports.getCarouselReady = _exports.getOffersLoading = _exports.isCustomerSelected = void 0;
    var isCustomerSelected = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.isCustomerSelected;
    });
    _exports.isCustomerSelected = isCustomerSelected;
    var getOffersLoading = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.offersLoading;
    });
    _exports.getOffersLoading = getOffersLoading;
    var getCarouselReady = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.carouselReady;
    });
    _exports.getCarouselReady = getCarouselReady;
    var getUrlParametersUsed = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.urlParametersUsed;
    });
    _exports.getUrlParametersUsed = getUrlParametersUsed;
    var getUrlOfferParametersUsed = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.urlOfferParametersUsed;
    });
    _exports.getUrlOfferParametersUsed = getUrlOfferParametersUsed;
    var getAddFromLink = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.addFromLink;
    });
    _exports.getAddFromLink = getAddFromLink;
    var getVerifyMsisdnLoading = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.verifyMsisdnLoading;
    });
    _exports.getVerifyMsisdnLoading = getVerifyMsisdnLoading;
    var isMsisdnVerificationRequired = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.msisdnVerificationRequired;
    });
    _exports.isMsisdnVerificationRequired = isMsisdnVerificationRequired;
    var isMobileBillingAccountsSet = (0, _Reselect.createSelector)(_root.getMetaData, function(data) {
        return data.mobileBillingAccountsSet;
    });
    _exports.isMobileBillingAccountsSet = isMobileBillingAccountsSet;
    var getB2bPrefixUrl = "/male-firmy";
    _exports.getB2bPrefixUrl = getB2bPrefixUrl;
    var getProductListUrl = "/sklep";
    _exports.getProductListUrl = getProductListUrl;
    var getMarketContextPrefixUrl = (0, _Reselect.createSelector)(_filters.isB2B, function(isb2b) {
        return isb2b ? "/male-firmy" : "";
    });
    _exports.getMarketContextPrefixUrl = getMarketContextPrefixUrl;
    var bgColor = (0, _Reselect.createSelector)([_selectors.isAccessoryListPage, _selectors.isProductDetailsPage, _selectors.isProductListPage], function(isAccessoryListPage, isProductDetailsPage, isProductListPage) {
        if (!(isAccessoryListPage || isProductDetailsPage || isProductListPage)) return " g-gray1-bg";
        else return " g-white1-bg"; //todevelop
    });
    _exports.bgColor = bgColor;
});
//# sourceMappingURL=metaData.js.map