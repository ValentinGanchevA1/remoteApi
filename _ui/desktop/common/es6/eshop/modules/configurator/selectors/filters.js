import {
    createSelector
} from "Reselect";
import {
    getFiltersState,
    getOffers
} from "./root";

import {
    filterAvailableProcessOptions,
    getVerifiedMsisdnFromFilters,
    hashProcessType,
    mapObjectArrayToSelect,
    mapStringToJsonObject,
    shouldCallOffersWithMsisdn,
    shouldDisableAddToCart
} from "../utils";
import OnlineUtils from "eshop/utils/OnlineUtils";
import TransactionProcessType from "../../core/constants/TransactionProcessTypeEnum";
import MarketSegment from "eshop/modules/core/enum/MarketSegment";

const msisdnVeirficationProcessTypes = [
    TransactionProcessType.MNP,
    TransactionProcessType.RETENTION,
    TransactionProcessType.MIGRATION_PRE_POST,
    TransactionProcessType.MNP_TWOSTEP,
    TransactionProcessType.MIGRATION_ZETAFON_POST,
    TransactionProcessType.MIGRATION_NJU_POST_TO_POST,
    TransactionProcessType.MIGRATION_NJU_PRE_TO_POST,
    TransactionProcessType.MNP_APPLICATION
];


export const getClientContext = createSelector(getFiltersState, filters => filters.clientContext)
export const getMarketContext = createSelector(getFiltersState, filters => filters.marketContext)
export const isB2B = createSelector(getMarketContext, market => MarketSegment.isB2B(market));

export const getClientContextChangeHandlers = createSelector(getFiltersState, filters => filters.clientContextChangeHandlers)
export const getMaxSimCount = createSelector(getFiltersState, filters => filters.maxSimCount)

export const getCheckMsisdnResult = createSelector(getFiltersState, filters => filters.checkMsisdnResult);
export const getIsMsisdnChecking = createSelector(getFiltersState, filters => filters.isMsisdnChecking)
export const getMsisdnVerificationNeeded = createSelector(getFiltersState, filters => filters.msisdnVerificationNeeded)
export const getMsisdnInput = createSelector(getFiltersState, filters => filters.msisdnInput)

export const getSimCountSelected = createSelector(getFiltersState, filters => filters.simCountSelected)
export const getPropositionListCount = createSelector(getFiltersState, filters => filters.propositionListCount)
export const getPropositionListCountSetMode = createSelector(getFiltersState, filters => filters.propositionListCountSetMode)
export const getPropositionListOfferType = createSelector(getFiltersState, filters => filters.propositionListOfferType)
export const getPropositionListSoftBundleGroup = createSelector(getFiltersState, filters => filters.propositionListSoftBundleGroup)

export const getFiltersData = createSelector(getFiltersState, filters => filters.data)
export const getSelectedFilters = createSelector(getFiltersState, filters => filters.selected)
export const getSelectedFiltersB2B = createSelector(getFiltersState, filters => filters.selectedB2B)
export const getSelectedFiltersByIndexB2B = (index) => createSelector(getSelectedFiltersB2B, selected => selected[index])
export const getSelectedFiltersB2BFiltered = createSelector(getSelectedFiltersB2B, selected => selected.map(singleFilter => ({
    ...singleFilter,
    loyaltyLength: singleFilter.loyaltyLength[singleFilter.processType]
}))) /* ({...selected , loyaltyLength: selected.loyaltyLength[selected.processType]}))*/
export const getDefaultFilters = createSelector(getFiltersState, filters => filters.defaultFilters)
export const getVerifiedMsisdnB2B = createSelector(getFiltersState, filters => filters.verifiedMsisdnB2B);

export const getSelectedProcessTypeValue = createSelector(getSelectedFilters, selected => selected.processType)
export const getSelectedOfferType = createSelector(getSelectedFilters, getSelectedOfferType_)

function getSelectedOfferType_(selected) {
    var selectedOfferType = selected.offerType ? selected.offerType : OnlineUtils.loadFromSessionStorage("selectedOfferType");

    return selectedOfferType;
}


export const getSelectedProcessTypeObject = createSelector([getFiltersData, getSelectedProcessTypeValue], (data, selected) => data.find(process => process.value == selected))

export const getSelectedProcessTypesObjectsB2B = createSelector([getFiltersData, getSelectedFiltersB2B], (data, selected) => selected.map(sel => data.find(d => d.value === sel.processType)))

export const getAvailableLoyaltiesLengthsB2B = createSelector(getSelectedProcessTypesObjectsB2B, processTypes => processTypes.map(processTypeObject => processTypeObject.loyalties))

export const getLoyaltyLengthFiltersForSelectB2B = createSelector(getAvailableLoyaltiesLengthsB2B, data => data && data.map(loyData => loyData && loyData.map(mapObjectArrayToSelect) || []))


export const getAvailableLoyaltiesLengths = createSelector(getSelectedProcessTypeObject, processType => processType && processType.loyalties)

export const getUseDefaultOfferType = createSelector(getFiltersState, data => data.useDefaultOfferType);
export const getUseDefaultProcess = createSelector(getFiltersState, data => data.useDefaultProcess);
export const getUseDefaultLoyalty = createSelector(getFiltersState, data => data.useDefaultLoyalty);
export const getUseDefaultOffer = createSelector(getFiltersState, data => data.useDefaultOffer);

export const getProcessTypeFiltersData = createSelector(getFiltersData, data => data.processType)
export const getLoyaltyLengthFiltersData = createSelector(getFiltersData, data => data.loyaltyLength);

export const getProcessTypeFiltersForSelect = createSelector(getFiltersData, data => data && data.map(mapObjectArrayToSelect) || [])
export const getLoyaltyLengthFiltersForSelect = createSelector(getAvailableLoyaltiesLengths, data => data && data.map(mapObjectArrayToSelect) || []);

export const getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect = createSelector(getLoyaltyLengthFiltersForSelect,
    data => data.sort((a, b) => {
        if (a.value === 0)
            return 1;
        if (b.value === 0)
            return -1;
        if (a.value < b.value)
            return -1;
        if (a.value > b.value)
            return 1;
        return 0;
    }));

export const getSelectedFiltersProcessType = createSelector(getSelectedFilters, selected => selected && mapStringToJsonObject(hashProcessType(selected)))

export const getSelectedLoyaltyLengthValue = createSelector([getSelectedFilters, getSelectedProcessTypeValue], (selected, processType) => selected && processType && selected.loyaltyLength && selected.loyaltyLength[processType])

export const getDisableAddToCart = createSelector([getCheckMsisdnResult, getSelectedProcessTypeValue, getMsisdnVerificationNeeded], (checkMsisdnResult, processType, msisdnVerificationNeeded) => shouldDisableAddToCart(checkMsisdnResult, processType, msisdnVerificationNeeded));

export const getCallOffersWithMsisdn = createSelector(
    [getCheckMsisdnResult, getSelectedProcessTypeValue, getMsisdnVerificationNeeded, getFiltersState],
    (checkMsisdnResult, processType, msisdnVerificationNeeded, filters) =>
    getVerifiedMsisdnFromFilters(filters) && shouldCallOffersWithMsisdn(checkMsisdnResult, processType, msisdnVerificationNeeded)
);

export const getVerifiedMsisdn = createSelector(getFiltersState, filters => getVerifiedMsisdnFromFilters(filters));

const getSelectedBaseRatePlanId = createSelector(getOffers, offers => offers.selectedRateplanBaseProductId)

export const getFiltersUrl = createSelector([getSelectedOfferType, getSelectedProcessTypeValue, getSelectedLoyaltyLengthValue, getClientContext, getSelectedBaseRatePlanId], createFiltersUrl);

function createFiltersUrl(offerType, processType, loyalty, clientContext, servicePlanId) {
    return 'offerType=' + offerType + '&processType=' + processType + '&loyalty=' + loyalty + (clientContext ? '&convergence=true' : '') + '&serviceplan=' + servicePlanId;


}

export const isMsisdndVerificationRequired = createSelector(getSelectedProcessTypeValue, selectedProcessType => msisdnVeirficationProcessTypes.indexOf(selectedProcessType) !== -1);

export const getOfferTypeCmsConf = createSelector(getFiltersState, offerFilter => offerFilter.cmsConf);
export const getExtProcessSelectConfig = createSelector([getOfferTypeCmsConf, getSelectedOfferType], (cmsConf, offerType) => cmsConf && cmsConf[offerType] && cmsConf[offerType].extProcessSelectConfig);
export const getClientContextRole = createSelector([getOfferTypeCmsConf, getSelectedOfferType], (cms, offerType) => (cms && cms[offerType] && cms[offerType].clientContextRole) || "SOFT_BUNDLE_COV");
export const getExtProcessSelectConfigFiltered = createSelector([getExtProcessSelectConfig, getProcessTypeFiltersForSelect],
    filterAvailableProcessOptions);
export const getOfferFiltersLoading = createSelector(getFiltersState, filters => filters.offerFiltersLoading);
export const getOfferTypeFiltersCached = createSelector(getFiltersState, filters => filters.offerTypeFiltersCached);
export const getProcessForMsisdn = createSelector(getFiltersState, filters => filters.processForMsisdn);

export const getSelectedProcess = createSelector([getSelectedProcessTypeValue, getVerifiedMsisdn, getProcessForMsisdn], (selectedProcess, verifiedMsisdn, processForMsisdn) => {
    if (verifiedMsisdn && processForMsisdn) {
        const existProcess = processForMsisdn[verifiedMsisdn];
        return existProcess || selectedProcess
    }
    return selectedProcess;
});

export const getOfferTypeCmsConfMarket = createSelector(getOfferTypeCmsConf, cmsConf =>
    Object.values(typeof cmsConf !== "undefined" && !!cmsConf && cmsConf)
    .map(conf => conf.market).find(Boolean));