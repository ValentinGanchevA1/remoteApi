import {
    createSelector
} from "Reselect";
import * as SESSION from "../sessionAttributes";
import {
    getMagnumState
} from "../../magnum2/selectors";
import _ from "lodash";
import AddonType from "../../checkout/constants/AddonTypeEnum";
import {
    RequestState
} from "../../core/constants/RequestState";
import {
    is2U,
    is2ULTE
} from "../../magnum2/components/BundleTypeUtils";
import MigrationType from "eshop/modules/core/constants/MigrationTypeEnum";
import SalesChannel from "../../core/enum/SalesChannel";

export const getFixState = state => state.fix;
export const getOffers = createSelector(getFixState, fix =>
    fix.offers.data.offers.filter(offer => !fix.offers.secondaryChoiceOffer || offer.availableAsSecondaryChoiceOffer)
);
export const getFtthAvailabilityDateFromOffers = createSelector(getFixState, fix => fix.offers.data.ftthAvailabilityDate);
export const isSecondaryChoiceOfferSelected = createSelector(getFixState, fix => fix.offers && fix.offers.secondaryChoiceOffer || false);
export const hasOffers = createSelector(getOffers, offers => offers && offers.length > 0);
export const getProductListDescription = createSelector(getFixState, fix => fix.offers.data.productListDescription);
export const getMetaData = createSelector(getFixState, fix => fix.metaData);
export const getLoading = createSelector(getMetaData, metaData => metaData.loading);
export const getOffersLoading = createSelector(getLoading, loading => loading.offers);
export const getFullPageLoader = createSelector([getLoading, getFixState], (loading, fix) => Object.keys(loading).some(k => !!loading[k]) || (fix.voip.selectionInProgress && !fix.voip.numbersFetched));
export const getAllDocumentsLoading = createSelector(getMetaData, metaData => metaData.allDocumentsLoading);
export const getKnaModalIsShow = createSelector(getMetaData, metaData => metaData.knaModalState.open);
export const getKnaModalRegistered = createSelector(getMetaData, metaData => metaData.knaModalState.registered);
export const getKnaForm = createSelector(getFixState, fix => fix.kna);
export const isAfterWWT = createSelector(getMetaData, metaData => metaData.isAfterWWT);
export const forceAfterWWT = createSelector(getMetaData, metaData => metaData.forceAfterWWT);
export const getHeaders = createSelector(getMetaData, metaData => metaData.headerInfo.headers);
export const getAdditionalHeaders = createSelector(getMetaData, metaData => metaData.isAfterWWT ? undefined : metaData.headerInfo.additionalHeaders);
export const hasPots = createSelector(getFixState, fix => fix.offers.data.pots);
export const hasFTTH = createSelector(getFixState, fix => fix.offers.data.technologies && fix.offers.data.technologies.includes("FTTH"));
export const hasADSL = createSelector(getFixState, fix => fix.offers.data.technologies && fix.offers.data.technologies.includes("ADSL"));
export const hasDTH = createSelector(getFixState, fix => fix.offers.data.technologies && fix.offers.data.technologies.includes("VIDSAT"));
export const getCarouselParagraphs = createSelector(getFixState, fix => fix.offers.data.paragraphs);
export const getSelectedOfferId = createSelector(getFixState, fix => fix.offers.selectedOfferId);
export const getPageContext = state => state.fix.pageContext;
export const shouldBeRenderedPaymentLinkComponent = createSelector(getMetaData, metaData => metaData.shouldBeRenderedPaymentLinkComponent);
export const getWwtAddress = createSelector(getMetaData, metaData => metaData.wwtAddress);
export const getMinimalLinkPrices = createSelector(getFixState, fix => fix.offers.data.offers.map(ofert => ofert.minimumLinkPrice));
export const getLoyaltyOptions = createSelector(getFixState, fix => fix.offers.data.loyaltyOptions);
export const getSelectedLoyalty = createSelector(getMetaData, metaData => metaData.selectedLoyalty);
export const getCustomerSelectedModalIsShow = createSelector(getMetaData, metaData => metaData.customerSelectedModalIsShow);
export const getServiceDetails = createSelector(getFixState, fix => fix.customerServices.serviceDetails);
export const getWwtCityId = createSelector([getMetaData, getServiceDetails],
    (metaData, serviceDetails) => (metaData.wwtAddress && metaData.wwtAddress.cityId) || (serviceDetails && serviceDetails.installationAddress && serviceDetails.installationAddress.cityId));
export const getMigrationMode = createSelector(getFixState, fix => fix.migration.mode);
export const getMagnumServiceDetails = createSelector([getServiceDetails, getMigrationMode], (serviceDetails, mode) => {
    if (_.isNil(mode) || _.isEmpty(serviceDetails)) {
        return {
            serviceDetails: null,
            mode: null
        };
    }
    return {
        serviceDetails,
        mode
    };
});
export const getServiceDetailsFetched = createSelector(getFixState, fix => fix.customerServices.serviceDetailsFetched);
export const getMigrationVariantContainers = createSelector(getFixState, fix => fix.offers.migrationVariants && fix.offers.migrationVariants.variantContainers || []);
export const getMigrationBroadbandAttribute = createSelector(getFixState, fix => {
    const broadBandAttribute = fix.offers.migrationVariants && fix.offers.migrationVariants.broadBandAttribute;
    const sessionBroadBandAttribute = JSON.parse(sessionStorage.getItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR));
    if (broadBandAttribute) {
        sessionStorage.setItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR, JSON.stringify(broadBandAttribute));
        return broadBandAttribute;
    } else {
        return sessionBroadBandAttribute;
    }
});
export const getMigrationFtthAvailabilityAttribute = createSelector(getFixState, fix => {
    return fix.offers.migrationVariants && fix.offers.migrationVariants.ftthAvailabilityDate;
});
export const getMigrationVariantsFetched = createSelector(getFixState, fix => fix.offers.migrationVariantsFetched);
export const getMigrationVariantsFetching = createSelector(getFixState, fix => fix.offers.migrationVariantsFetching);
export const getMigrationDataClear = createSelector(getMetaData, metadata => metadata.migrationDataClear);

export const getAddressFromWWT = createSelector(getMagnumState, magnum => magnum.wwt);
export const getShowCartNotEmptyModal = createSelector(getFixState, fix => fix.offers.showCartNotEmptyModal);
export const getBundleNosOnCart = createSelector(getFixState, fix => fix.offers.bundleNosOnCart);
export const isAfterSearchCustomer = createSelector(getMetaData, metaData => metaData.isAfterSearchCustomer);

export const isLandingPage = createSelector(getFixState, fix => fix.offers.isLP);
export const isPreLandingPage = createSelector(getFixState, fix => window.location.pathname.indexOf('/view/oferta/internet-domowy') > -1);

export const voipModalComponentIsMounted = createSelector(getMetaData, metaData => metaData.voipModalComponentIsMounted);

const getFixErrors = createSelector(getFixState, fix => fix.errors);
export const getShowErrorModal = createSelector(getFixErrors, errors => errors.showErrorModal);
export const getErrorMessage = createSelector(getFixErrors, errors => errors.errorMessage);
export const getErrorModalConfig = createSelector(getFixErrors, errors => errors.errorModalConfig);

export const getCartSummarySearchCustomerDone = createSelector(getMetaData, metaData => metaData.cartSummarySearchCustomerDone);
export const getLPSearchCustomerDone = createSelector(getMetaData, metaData => metaData.lpSearchCustomerDone);

export const isDuplicateOrder = createSelector(getMetaData, metaData => metaData.isDuplicateOrder);
export const hasAccessRoleToProcessDuplicateOrder = createSelector(getMetaData, metaData => metaData.hasAccessRoleToProcessDuplicateOrder);
export const duplicateOrderIsModalOpened = createSelector(getMetaData, metaData => metaData.duplicateOrderIsModalOpened);
export const duplicateOrderDetails = createSelector(getMetaData, metaData => metaData.duplicateOrderDetails);
export const isMigration = createSelector(getMetaData, metaData => metaData.isMigration);
export const duplicateOrderCalled = createSelector(getMetaData, metaData => metaData.duplicateOrderCalled);
export const getSalesChannel = createSelector(getMetaData, metaData => metaData.salesChannel);
export const isWWW = createSelector(getSalesChannel, salesChannel => salesChannel === SalesChannel.WWW);

export const showWWTModal = createSelector(getMetaData, metadata => metadata.showWWTModal);
export const wwtValidationModalState = createSelector(getMetaData, metaData => metaData.wwtValidationModalState);
export const wwtValidationModalMessage = createSelector(getMetaData, metaData => metaData.wwtValidationModalMessage);
export const marketSegment = createSelector(getMetaData, metaData => metaData.marketSegment);
export const showNetPrices = createSelector(getMetaData, metaData => metaData.showNetPrices);
export const is2UMigration = createSelector(getFixState, getMagnumState, (fixState, magnumState) =>
    MigrationType.RETENTION === fixState.migration.mode && is2U(magnumState.availableBundleTypes)
);

const isSecondaryChoiceOfferAvailableForFix = createSelector(getOffers, fixOffers => {
    return _.flatMap(fixOffers, offer => offer.feeAddons).some(feeAddon => feeAddon.addonType.code === AddonType.SECONDARY_CHOICE_DISCOUNT);
});

const isSecondaryChoiceOfferAvailableForMagnum = createSelector(getMagnumState, magnumState => {

    const magnumDurationList = magnumState.durationList;
    if (magnumDurationList.requestState !== RequestState.Success) {
        return false;
    }
    const showAfterWWT = magnumState.wwt.zip != null;
    if (!showAfterWWT && !is2ULTE(magnumState.availableBundleTypes)) {
        return false;
    }
    const result = _.flatMap(magnumDurationList.propositions, proposition => proposition.feeAddons).some(feeAddon => feeAddon.addonType.code === AddonType.SECONDARY_CHOICE_DISCOUNT);
    return result;
});

export const isSecondaryChoiceOfferAvailable = createSelector([isSecondaryChoiceOfferAvailableForFix, isSecondaryChoiceOfferAvailableForMagnum],
    (isSecondaryChoiceOfferAvailableForFix, isSecondaryChoiceOfferAvailableForMagnum) => isSecondaryChoiceOfferAvailableForFix || isSecondaryChoiceOfferAvailableForMagnum);