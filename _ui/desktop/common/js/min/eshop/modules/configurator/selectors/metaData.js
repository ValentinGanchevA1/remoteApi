define(["exports", "Reselect", "./root", "eshop/modules/simfree/selectors", "eshop/modules/fix/selectors/root", "eshop/modules/configurator/selectors/filters"], function(e, t, r, a, i, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.bgColor = e.getMarketContextPrefixUrl = e.getProductListUrl = e.getB2bPrefixUrl = e.isMobileBillingAccountsSet = e.isMsisdnVerificationRequired = e.getVerifyMsisdnLoading = e.getAddFromLink = e.getUrlOfferParametersUsed = e.getUrlParametersUsed = e.getCarouselReady = e.getOffersLoading = e.isCustomerSelected = void 0;
    var s = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.isCustomerSelected
    });
    e.isCustomerSelected = s;
    var n = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.offersLoading
    });
    e.getOffersLoading = n;
    var c = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.carouselReady
    });
    e.getCarouselReady = c;
    var l = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.urlParametersUsed
    });
    e.getUrlParametersUsed = l;
    var u = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.urlOfferParametersUsed
    });
    e.getUrlOfferParametersUsed = u;
    var g = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.addFromLink
    });
    e.getAddFromLink = g;
    var d = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.verifyMsisdnLoading
    });
    e.getVerifyMsisdnLoading = d;
    var f = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.msisdnVerificationRequired
    });
    e.isMsisdnVerificationRequired = f;
    var m = (0, t.createSelector)(r.getMetaData, function(e) {
        return e.mobileBillingAccountsSet
    });
    e.isMobileBillingAccountsSet = m;
    e.getB2bPrefixUrl = "/male-firmy";
    e.getProductListUrl = "/sklep";
    var M = (0, t.createSelector)(o.isB2B, function(e) {
        return e ? "/male-firmy" : ""
    });
    e.getMarketContextPrefixUrl = M;
    var P = (0, t.createSelector)([a.isAccessoryListPage, a.isProductDetailsPage, a.isProductListPage], function(e, t, r) {
        return e || t || r ? " g-white1-bg" : " g-gray1-bg"
    });
    e.bgColor = P
});
//# sourceMappingURL=metaData.js.map