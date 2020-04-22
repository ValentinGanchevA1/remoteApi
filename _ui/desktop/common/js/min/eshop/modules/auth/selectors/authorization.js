define(["exports", "Reselect"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isOdfPage = e.isLovePage = e.hasODF = e.hasLove = e.getLovePaths = e.getStayLoveRetentionMSISDN = e.getWwwCimIdBasedOfferSelectorProcesses = e.getRegisterBillingAccountPopupB2B = e.addToCartAfterAuth = e.isPeselAndAddressVerified = e.isPeselAndAddressVerificationEnabled = e.getMarketIncompatible = e.isCartChanged = e.isNewUser = e.getSalesChannel = e.hasRetention = e.getShowRetentionAlertModal = e.getAccountByMsisdn = e.isCaapLoggedAndNoAccountSelected = e.getSelectedBillingAccount = e.getSelectedBillingAccountId = e.getBillingAccountContractLimitExceeded = e.getBillingAccountsForSelection = e.getShowSection = e.getShowLogoutConfirmationModal = e.isLogged = e.getIsOnlineCookie = e.getIsSmsVerifiedCustomer = e.getLoggedCustomerApiData = e.getLoggedCustomerData = e.getMSISDN = e.getChosenExistingAccount = e.getRetentionAlertModalVisibility = e.getBillingAccountChangeVisibility = e.getAccountSelectionModalVisibility = e.getIsLoading = e.getAuthMessage = e.getAuthorizationForAccountIdentifyModalVisibility = e.getAuthorizationForProcessModalVisibility = e.getAuthorization = e.getAuthState = void 0;

    function n(e) {
        return e.auth
    }
    e.getAuthState = n;
    var r = (0, t.createSelector)(n, function(e) {
        return e
    });
    e.getAuthorization = r;
    var o = (0, t.createSelector)(r, function(e) {
        return e.modalForProcessOn
    });
    e.getAuthorizationForProcessModalVisibility = o;
    var i = (0, t.createSelector)(r, function(e) {
        return e.modalForAccountIdentifyOn
    });
    e.getAuthorizationForAccountIdentifyModalVisibility = i;
    var c = (0, t.createSelector)(r, function(e) {
        return e.getMessage
    });
    e.getAuthMessage = c;
    var a = (0, t.createSelector)(r, function(e) {
        return e.isLoading
    });
    e.getIsLoading = a;
    var l = (0, t.createSelector)(r, function(e) {
        return e.modalForAccountSelectionOn
    });
    e.getAccountSelectionModalVisibility = l;
    var u = (0, t.createSelector)(r, function(e) {
        return e.billingAccountChangeOn
    });
    e.getBillingAccountChangeVisibility = u;
    var s = (0, t.createSelector)(r, function(e) {
        return e.retentionAlertModalOn
    });
    e.getRetentionAlertModalVisibility = s;
    var g = (0, t.createSelector)(r, function(e) {
        return e.chosenExistingAccount
    });
    e.getChosenExistingAccount = g;
    var d = (0, t.createSelector)(r, function(e) {
        return e.msisdn
    });
    e.getMSISDN = d;
    var S = (0, t.createSelector)(r, function(e) {
        return e.loggedCustomerData
    });
    e.getLoggedCustomerData = S;
    var f = (0, t.createSelector)(r, function(e) {
        return e.loggedCustomerData
    });
    e.getLoggedCustomerApiData = f;
    var A = (0, t.createSelector)(S, function(e) {
        return e && e.isSmsVerified
    });
    e.getIsSmsVerifiedCustomer = A;
    var v = (0, t.createSelector)(S, function(e) {
        return e && e.isOnlineCookie
    });
    e.getIsOnlineCookie = v;
    var m = (0, t.createSelector)(S, function(e) {
        return e && (e.isSmsVerified || e.isOnlineCookie) && (e.tradingName || e.lastName || e.firstName || e.accountCode)
    });
    e.isLogged = m;
    var h = (0, t.createSelector)(r, function(e) {
        return e.showLogoutConfirmationModal
    });
    e.getShowLogoutConfirmationModal = h;
    var C = (0, t.createSelector)(r, function(e) {
        return e.showSection
    });
    e.getShowSection = C;
    var M = (0, t.createSelector)(r, function(e) {
        return e.billingAccounts
    });
    e.getBillingAccountsForSelection = M;
    var L = (0, t.createSelector)(r, function(e) {
        return e.billingAccountContractLimitExceeded
    });
    e.getBillingAccountContractLimitExceeded = L;
    var B = (0, t.createSelector)(r, function(e) {
        return e.selectedBillingAccountId
    });
    e.getSelectedBillingAccountId = B;
    var y = (0, t.createSelector)([B, M], function(t, e) {
        return t && e && e[0] && e.filter(function(e) {
            return e.accountId == t
        })[0]
    });
    e.getSelectedBillingAccount = y;
    var O = (0, t.createSelector)(r, function(e) {
        return e.loggedCustomerData && e.loggedCustomerData.isOnlineCookie && !e.loggedCustomerData.accountCode
    });
    e.isCaapLoggedAndNoAccountSelected = O;
    var I = (0, t.createSelector)(r, function(e) {
        return e.accountByMsisdn
    });
    e.getAccountByMsisdn = I;
    var b = (0, t.createSelector)(r, function(e) {
        return e.retentionAlertModalOn
    });
    e.getShowRetentionAlertModal = b;
    var P = (0, t.createSelector)(S, function(e) {
        return !!e && e.hasRetention
    });
    e.hasRetention = P;
    var w = (0, t.createSelector)(r, function(e) {
        return e ? e.salesChannel : ""
    });
    e.getSalesChannel = w;
    var V = (0, t.createSelector)(S, function(e) {
        return e && !(e.tradingName || e.lastName)
    });
    e.isNewUser = V;
    var D = (0, t.createSelector)(S, function(e) {
        return e && e.isCartChanged
    });
    e.isCartChanged = D;
    var p = (0, t.createSelector)(r, function(e) {
        return e.incompatibleMarket
    });
    e.getMarketIncompatible = p;
    var N = (0, t.createSelector)(r, function(e) {
        return e.isPeselAndAddressVerificationEnabled
    });
    e.isPeselAndAddressVerificationEnabled = N;
    var R = (0, t.createSelector)(r, function(e) {
        return e.isPeselAndAddressVerified
    });
    e.isPeselAndAddressVerified = R;
    var F = (0, t.createSelector)(r, function(e) {
        return e.addToCartAfterAuth
    });
    e.addToCartAfterAuth = F;
    var k = (0, t.createSelector)(r, function(e) {
        return e.doRegisterBillingAccountPopupB2B
    });
    e.getRegisterBillingAccountPopupB2B = k;
    var E = (0, t.createSelector)(function() {
        return ["INSTALMENT_SALES_OF_GOODS"]
    });
    e.getWwwCimIdBasedOfferSelectorProcesses = E;
    var x = (0, t.createSelector)(r, function(e) {
        return e.stayLoveRetentionMSISDN
    });
    e.getStayLoveRetentionMSISDN = x;
    var z = (0, t.createSelector)(function() {
        return ["/love-dla-firm", "/male-firmy/love-dla-firm"]
    });
    e.getLovePaths = z;
    var T = (0, t.createSelector)(function() {
            return ["/abonament-komorkowy-dla-firm", "/male-firmy/abonament-komorkowy"]
        }),
        _ = (0, t.createSelector)(S, function(e) {
            return !!e && e.hasLove
        });
    e.hasLove = _;
    var U = (0, t.createSelector)(S, function(e) {
        return !!e && e.hasODF
    });
    e.hasODF = U;
    var W = (0, t.createSelector)(function() {
        return -1 < z().indexOf(window.location.pathname)
    });
    e.isLovePage = W;
    var j = (0, t.createSelector)(function() {
        return -1 < T().indexOf(window.location.pathname)
    });
    e.isOdfPage = j
});
//# sourceMappingURL=authorization.js.map