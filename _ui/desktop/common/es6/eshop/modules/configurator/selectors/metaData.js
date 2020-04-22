import {
    createSelector
} from "Reselect";
import {
    getFiltersState,
    getMetaData
} from "./root";
import {
    isAccessoryListPage,
    isProductDetailsPage,
    isProductListPage
} from "eshop/modules/simfree/selectors";
import {
    isLandingPage,
    isPreLandingPage
} from "eshop/modules/fix/selectors/root"
import {
    isB2B
} from "eshop/modules/configurator/selectors/filters";

export const isCustomerSelected = createSelector(getMetaData, data => data.isCustomerSelected);
export const getOffersLoading = createSelector(getMetaData, data => data.offersLoading);
export const getCarouselReady = createSelector(getMetaData, data => data.carouselReady);
export const getUrlParametersUsed = createSelector(getMetaData, data => data.urlParametersUsed);
export const getUrlOfferParametersUsed = createSelector(getMetaData, data => data.urlOfferParametersUsed);
export const getAddFromLink = createSelector(getMetaData, data => data.addFromLink);
export const getVerifyMsisdnLoading = createSelector(getMetaData, data => data.verifyMsisdnLoading);
export const isMsisdnVerificationRequired = createSelector(getMetaData, data => data.msisdnVerificationRequired);
export const isMobileBillingAccountsSet = createSelector(getMetaData, data => data.mobileBillingAccountsSet);

export const getB2bPrefixUrl = "/male-firmy";
export const getProductListUrl = "/sklep";
export const getMarketContextPrefixUrl = createSelector(isB2B, isb2b => isb2b ? "/male-firmy" : "");

export const bgColor = createSelector([isAccessoryListPage, isProductDetailsPage, isProductListPage], (isAccessoryListPage, isProductDetailsPage, isProductListPage) => {
    if (!(isAccessoryListPage || isProductDetailsPage || isProductListPage))
        return " g-gray1-bg";
    else
        return " g-white1-bg";
    //todevelop
})