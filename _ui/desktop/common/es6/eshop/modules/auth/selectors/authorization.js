import {
    createSelector
} from "Reselect";

export const getAuthState = state => state["auth"];
export const getAuthorization = createSelector(getAuthState, auth => auth);

export const getAuthorizationForProcessModalVisibility = createSelector(getAuthorization, auth => auth.modalForProcessOn);
export const getAuthorizationForAccountIdentifyModalVisibility = createSelector(getAuthorization, auth => auth.modalForAccountIdentifyOn);
export const getAuthMessage = createSelector(getAuthorization, auth => auth.getMessage);
export const getIsLoading = createSelector(getAuthorization, auth => auth.isLoading);
export const getAccountSelectionModalVisibility = createSelector(getAuthorization, auth => auth.modalForAccountSelectionOn);
export const getBillingAccountChangeVisibility = createSelector(getAuthorization, auth => auth.billingAccountChangeOn);
export const getRetentionAlertModalVisibility = createSelector(getAuthorization, auth => auth.retentionAlertModalOn);
export const getChosenExistingAccount = createSelector(getAuthorization, auth => auth.chosenExistingAccount);
export const getMSISDN = createSelector(getAuthorization, auth => auth.msisdn);
export const getLoggedCustomerData = createSelector(getAuthorization, auth => auth.loggedCustomerData);
export const getLoggedCustomerApiData = createSelector(getAuthorization, auth => auth.loggedCustomerData);
export const getIsSmsVerifiedCustomer = createSelector(getLoggedCustomerData, auth => auth && auth.isSmsVerified);
export const getIsOnlineCookie = createSelector(getLoggedCustomerData, auth => auth && auth.isOnlineCookie);
export const isLogged = createSelector(getLoggedCustomerData, data => data && (data.isSmsVerified || data.isOnlineCookie) && (data.tradingName || data.lastName || data.firstName || data.accountCode));
export const getShowLogoutConfirmationModal = createSelector(getAuthorization, auth => auth.showLogoutConfirmationModal);
export const getShowSection = createSelector(getAuthorization, auth => auth.showSection);
export const getBillingAccountsForSelection = createSelector(getAuthorization, auth => auth.billingAccounts);
export const getBillingAccountContractLimitExceeded = createSelector(getAuthorization, auth => auth.billingAccountContractLimitExceeded);

export const getSelectedBillingAccountId = createSelector(getAuthorization, auth => auth.selectedBillingAccountId);
export const getSelectedBillingAccount = createSelector([getSelectedBillingAccountId, getBillingAccountsForSelection], (selectedId, accounts) => selectedId && accounts && accounts[0] && accounts.filter(a => a.accountId == selectedId)[0]);
export const isCaapLoggedAndNoAccountSelected = createSelector(getAuthorization, auth => auth.loggedCustomerData && auth.loggedCustomerData.isOnlineCookie && !auth.loggedCustomerData.accountCode);
export const getAccountByMsisdn = createSelector(getAuthorization, auth => auth.accountByMsisdn);
export const getShowRetentionAlertModal = createSelector(getAuthorization, auth => auth.retentionAlertModalOn);
export const hasRetention = createSelector(getLoggedCustomerData, data => data ? data.hasRetention : false);
export const getSalesChannel = createSelector(getAuthorization, auth => auth ? auth.salesChannel : "");
export const isNewUser = createSelector(getLoggedCustomerData, data => data && !(data.tradingName || data.lastName));
export const isCartChanged = createSelector(getLoggedCustomerData, data => data && data.isCartChanged);
export const getMarketIncompatible = createSelector(getAuthorization, auth => auth.incompatibleMarket);

export const isPeselAndAddressVerificationEnabled = createSelector(getAuthorization, auth => auth.isPeselAndAddressVerificationEnabled);
export const isPeselAndAddressVerified = createSelector(getAuthorization, auth => auth.isPeselAndAddressVerified);
export const addToCartAfterAuth = createSelector(getAuthorization, auth => auth.addToCartAfterAuth);
export const getRegisterBillingAccountPopupB2B = createSelector(getAuthorization, auth => auth.doRegisterBillingAccountPopupB2B);
export const getWwwCimIdBasedOfferSelectorProcesses = createSelector(() => ["INSTALMENT_SALES_OF_GOODS"]);

export const getStayLoveRetentionMSISDN = createSelector(getAuthorization, auth => auth.stayLoveRetentionMSISDN);
export const getLovePaths = createSelector(() => [
    "/love-dla-firm",
    "/male-firmy/love-dla-firm",
]);
const getOdfPaths = createSelector(() => [
    "/abonament-komorkowy-dla-firm",
    "/male-firmy/abonament-komorkowy",
]);
export const hasLove = createSelector(getLoggedCustomerData, data => data ? data.hasLove : false);
export const hasODF = createSelector(getLoggedCustomerData, data => data ? data.hasODF : false);
export const isLovePage = createSelector(() => getLovePaths().indexOf(window.location.pathname) > -1);
export const isOdfPage = createSelector(() => getOdfPaths().indexOf(window.location.pathname) > -1);