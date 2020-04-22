define(["exports", "Reselect"], function(_exports, _Reselect) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isOdfPage = _exports.isLovePage = _exports.hasODF = _exports.hasLove = _exports.getLovePaths = _exports.getStayLoveRetentionMSISDN = _exports.getWwwCimIdBasedOfferSelectorProcesses = _exports.getRegisterBillingAccountPopupB2B = _exports.addToCartAfterAuth = _exports.isPeselAndAddressVerified = _exports.isPeselAndAddressVerificationEnabled = _exports.getMarketIncompatible = _exports.isCartChanged = _exports.isNewUser = _exports.getSalesChannel = _exports.hasRetention = _exports.getShowRetentionAlertModal = _exports.getAccountByMsisdn = _exports.isCaapLoggedAndNoAccountSelected = _exports.getSelectedBillingAccount = _exports.getSelectedBillingAccountId = _exports.getBillingAccountContractLimitExceeded = _exports.getBillingAccountsForSelection = _exports.getShowSection = _exports.getShowLogoutConfirmationModal = _exports.isLogged = _exports.getIsOnlineCookie = _exports.getIsSmsVerifiedCustomer = _exports.getLoggedCustomerApiData = _exports.getLoggedCustomerData = _exports.getMSISDN = _exports.getChosenExistingAccount = _exports.getRetentionAlertModalVisibility = _exports.getBillingAccountChangeVisibility = _exports.getAccountSelectionModalVisibility = _exports.getIsLoading = _exports.getAuthMessage = _exports.getAuthorizationForAccountIdentifyModalVisibility = _exports.getAuthorizationForProcessModalVisibility = _exports.getAuthorization = _exports.getAuthState = void 0;

    var getAuthState = function getAuthState(state) {
        return state["auth"];
    };

    _exports.getAuthState = getAuthState;
    var getAuthorization = (0, _Reselect.createSelector)(getAuthState, function(auth) {
        return auth;
    });
    _exports.getAuthorization = getAuthorization;
    var getAuthorizationForProcessModalVisibility = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.modalForProcessOn;
    });
    _exports.getAuthorizationForProcessModalVisibility = getAuthorizationForProcessModalVisibility;
    var getAuthorizationForAccountIdentifyModalVisibility = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.modalForAccountIdentifyOn;
    });
    _exports.getAuthorizationForAccountIdentifyModalVisibility = getAuthorizationForAccountIdentifyModalVisibility;
    var getAuthMessage = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.getMessage;
    });
    _exports.getAuthMessage = getAuthMessage;
    var getIsLoading = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.isLoading;
    });
    _exports.getIsLoading = getIsLoading;
    var getAccountSelectionModalVisibility = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.modalForAccountSelectionOn;
    });
    _exports.getAccountSelectionModalVisibility = getAccountSelectionModalVisibility;
    var getBillingAccountChangeVisibility = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.billingAccountChangeOn;
    });
    _exports.getBillingAccountChangeVisibility = getBillingAccountChangeVisibility;
    var getRetentionAlertModalVisibility = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.retentionAlertModalOn;
    });
    _exports.getRetentionAlertModalVisibility = getRetentionAlertModalVisibility;
    var getChosenExistingAccount = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.chosenExistingAccount;
    });
    _exports.getChosenExistingAccount = getChosenExistingAccount;
    var getMSISDN = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.msisdn;
    });
    _exports.getMSISDN = getMSISDN;
    var getLoggedCustomerData = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.loggedCustomerData;
    });
    _exports.getLoggedCustomerData = getLoggedCustomerData;
    var getLoggedCustomerApiData = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.loggedCustomerData;
    });
    _exports.getLoggedCustomerApiData = getLoggedCustomerApiData;
    var getIsSmsVerifiedCustomer = (0, _Reselect.createSelector)(getLoggedCustomerData, function(auth) {
        return auth && auth.isSmsVerified;
    });
    _exports.getIsSmsVerifiedCustomer = getIsSmsVerifiedCustomer;
    var getIsOnlineCookie = (0, _Reselect.createSelector)(getLoggedCustomerData, function(auth) {
        return auth && auth.isOnlineCookie;
    });
    _exports.getIsOnlineCookie = getIsOnlineCookie;
    var isLogged = (0, _Reselect.createSelector)(getLoggedCustomerData, function(data) {
        return data && (data.isSmsVerified || data.isOnlineCookie) && (data.tradingName || data.lastName || data.firstName || data.accountCode);
    });
    _exports.isLogged = isLogged;
    var getShowLogoutConfirmationModal = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.showLogoutConfirmationModal;
    });
    _exports.getShowLogoutConfirmationModal = getShowLogoutConfirmationModal;
    var getShowSection = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.showSection;
    });
    _exports.getShowSection = getShowSection;
    var getBillingAccountsForSelection = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.billingAccounts;
    });
    _exports.getBillingAccountsForSelection = getBillingAccountsForSelection;
    var getBillingAccountContractLimitExceeded = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.billingAccountContractLimitExceeded;
    });
    _exports.getBillingAccountContractLimitExceeded = getBillingAccountContractLimitExceeded;
    var getSelectedBillingAccountId = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.selectedBillingAccountId;
    });
    _exports.getSelectedBillingAccountId = getSelectedBillingAccountId;
    var getSelectedBillingAccount = (0, _Reselect.createSelector)([getSelectedBillingAccountId, getBillingAccountsForSelection], function(selectedId, accounts) {
        return selectedId && accounts && accounts[0] && accounts.filter(function(a) {
            return a.accountId == selectedId;
        })[0];
    });
    _exports.getSelectedBillingAccount = getSelectedBillingAccount;
    var isCaapLoggedAndNoAccountSelected = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.loggedCustomerData && auth.loggedCustomerData.isOnlineCookie && !auth.loggedCustomerData.accountCode;
    });
    _exports.isCaapLoggedAndNoAccountSelected = isCaapLoggedAndNoAccountSelected;
    var getAccountByMsisdn = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.accountByMsisdn;
    });
    _exports.getAccountByMsisdn = getAccountByMsisdn;
    var getShowRetentionAlertModal = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.retentionAlertModalOn;
    });
    _exports.getShowRetentionAlertModal = getShowRetentionAlertModal;
    var hasRetention = (0, _Reselect.createSelector)(getLoggedCustomerData, function(data) {
        return data ? data.hasRetention : false;
    });
    _exports.hasRetention = hasRetention;
    var getSalesChannel = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth ? auth.salesChannel : "";
    });
    _exports.getSalesChannel = getSalesChannel;
    var isNewUser = (0, _Reselect.createSelector)(getLoggedCustomerData, function(data) {
        return data && !(data.tradingName || data.lastName);
    });
    _exports.isNewUser = isNewUser;
    var isCartChanged = (0, _Reselect.createSelector)(getLoggedCustomerData, function(data) {
        return data && data.isCartChanged;
    });
    _exports.isCartChanged = isCartChanged;
    var getMarketIncompatible = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.incompatibleMarket;
    });
    _exports.getMarketIncompatible = getMarketIncompatible;
    var isPeselAndAddressVerificationEnabled = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.isPeselAndAddressVerificationEnabled;
    });
    _exports.isPeselAndAddressVerificationEnabled = isPeselAndAddressVerificationEnabled;
    var isPeselAndAddressVerified = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.isPeselAndAddressVerified;
    });
    _exports.isPeselAndAddressVerified = isPeselAndAddressVerified;
    var addToCartAfterAuth = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.addToCartAfterAuth;
    });
    _exports.addToCartAfterAuth = addToCartAfterAuth;
    var getRegisterBillingAccountPopupB2B = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.doRegisterBillingAccountPopupB2B;
    });
    _exports.getRegisterBillingAccountPopupB2B = getRegisterBillingAccountPopupB2B;
    var getWwwCimIdBasedOfferSelectorProcesses = (0, _Reselect.createSelector)(function() {
        return ["INSTALMENT_SALES_OF_GOODS"];
    });
    _exports.getWwwCimIdBasedOfferSelectorProcesses = getWwwCimIdBasedOfferSelectorProcesses;
    var getStayLoveRetentionMSISDN = (0, _Reselect.createSelector)(getAuthorization, function(auth) {
        return auth.stayLoveRetentionMSISDN;
    });
    _exports.getStayLoveRetentionMSISDN = getStayLoveRetentionMSISDN;
    var getLovePaths = (0, _Reselect.createSelector)(function() {
        return ["/love-dla-firm", "/male-firmy/love-dla-firm"];
    });
    _exports.getLovePaths = getLovePaths;
    var getOdfPaths = (0, _Reselect.createSelector)(function() {
        return ["/abonament-komorkowy-dla-firm", "/male-firmy/abonament-komorkowy"];
    });
    var hasLove = (0, _Reselect.createSelector)(getLoggedCustomerData, function(data) {
        return data ? data.hasLove : false;
    });
    _exports.hasLove = hasLove;
    var hasODF = (0, _Reselect.createSelector)(getLoggedCustomerData, function(data) {
        return data ? data.hasODF : false;
    });
    _exports.hasODF = hasODF;
    var isLovePage = (0, _Reselect.createSelector)(function() {
        return getLovePaths().indexOf(window.location.pathname) > -1;
    });
    _exports.isLovePage = isLovePage;
    var isOdfPage = (0, _Reselect.createSelector)(function() {
        return getOdfPaths().indexOf(window.location.pathname) > -1;
    });
    _exports.isOdfPage = isOdfPage;
});
//# sourceMappingURL=authorization.js.map