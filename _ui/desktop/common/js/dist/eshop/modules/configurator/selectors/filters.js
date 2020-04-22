define(["exports", "Reselect", "./root", "../utils", "eshop/utils/OnlineUtils", "../../core/constants/TransactionProcessTypeEnum", "eshop/modules/core/enum/MarketSegment"], function(_exports, _Reselect, _root, _utils, _OnlineUtils, _TransactionProcessTypeEnum, _MarketSegment) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getOfferTypeCmsConfMarket = _exports.getSelectedProcess = _exports.getProcessForMsisdn = _exports.getOfferTypeFiltersCached = _exports.getOfferFiltersLoading = _exports.getExtProcessSelectConfigFiltered = _exports.getClientContextRole = _exports.getExtProcessSelectConfig = _exports.getOfferTypeCmsConf = _exports.isMsisdndVerificationRequired = _exports.getFiltersUrl = _exports.getVerifiedMsisdn = _exports.getCallOffersWithMsisdn = _exports.getDisableAddToCart = _exports.getSelectedLoyaltyLengthValue = _exports.getSelectedFiltersProcessType = _exports.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect = _exports.getLoyaltyLengthFiltersForSelect = _exports.getProcessTypeFiltersForSelect = _exports.getLoyaltyLengthFiltersData = _exports.getProcessTypeFiltersData = _exports.getUseDefaultOffer = _exports.getUseDefaultLoyalty = _exports.getUseDefaultProcess = _exports.getUseDefaultOfferType = _exports.getAvailableLoyaltiesLengths = _exports.getLoyaltyLengthFiltersForSelectB2B = _exports.getAvailableLoyaltiesLengthsB2B = _exports.getSelectedProcessTypesObjectsB2B = _exports.getSelectedProcessTypeObject = _exports.getSelectedOfferType = _exports.getSelectedProcessTypeValue = _exports.getVerifiedMsisdnB2B = _exports.getDefaultFilters = _exports.getSelectedFiltersB2BFiltered = _exports.getSelectedFiltersByIndexB2B = _exports.getSelectedFiltersB2B = _exports.getSelectedFilters = _exports.getFiltersData = _exports.getPropositionListSoftBundleGroup = _exports.getPropositionListOfferType = _exports.getPropositionListCountSetMode = _exports.getPropositionListCount = _exports.getSimCountSelected = _exports.getMsisdnInput = _exports.getMsisdnVerificationNeeded = _exports.getIsMsisdnChecking = _exports.getCheckMsisdnResult = _exports.getMaxSimCount = _exports.getClientContextChangeHandlers = _exports.isB2B = _exports.getMarketContext = _exports.getClientContext = void 0;
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);
    _MarketSegment = babelHelpers.interopRequireDefault(_MarketSegment);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var msisdnVeirficationProcessTypes = [_TransactionProcessTypeEnum.default.MNP, _TransactionProcessTypeEnum.default.RETENTION, _TransactionProcessTypeEnum.default.MIGRATION_PRE_POST, _TransactionProcessTypeEnum.default.MNP_TWOSTEP, _TransactionProcessTypeEnum.default.MIGRATION_ZETAFON_POST, _TransactionProcessTypeEnum.default.MIGRATION_NJU_POST_TO_POST, _TransactionProcessTypeEnum.default.MIGRATION_NJU_PRE_TO_POST, _TransactionProcessTypeEnum.default.MNP_APPLICATION];
    var getClientContext = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.clientContext;
    });
    _exports.getClientContext = getClientContext;
    var getMarketContext = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.marketContext;
    });
    _exports.getMarketContext = getMarketContext;
    var isB2B = (0, _Reselect.createSelector)(getMarketContext, function(market) {
        return _MarketSegment.default.isB2B(market);
    });
    _exports.isB2B = isB2B;
    var getClientContextChangeHandlers = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.clientContextChangeHandlers;
    });
    _exports.getClientContextChangeHandlers = getClientContextChangeHandlers;
    var getMaxSimCount = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.maxSimCount;
    });
    _exports.getMaxSimCount = getMaxSimCount;
    var getCheckMsisdnResult = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.checkMsisdnResult;
    });
    _exports.getCheckMsisdnResult = getCheckMsisdnResult;
    var getIsMsisdnChecking = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.isMsisdnChecking;
    });
    _exports.getIsMsisdnChecking = getIsMsisdnChecking;
    var getMsisdnVerificationNeeded = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.msisdnVerificationNeeded;
    });
    _exports.getMsisdnVerificationNeeded = getMsisdnVerificationNeeded;
    var getMsisdnInput = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.msisdnInput;
    });
    _exports.getMsisdnInput = getMsisdnInput;
    var getSimCountSelected = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.simCountSelected;
    });
    _exports.getSimCountSelected = getSimCountSelected;
    var getPropositionListCount = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.propositionListCount;
    });
    _exports.getPropositionListCount = getPropositionListCount;
    var getPropositionListCountSetMode = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.propositionListCountSetMode;
    });
    _exports.getPropositionListCountSetMode = getPropositionListCountSetMode;
    var getPropositionListOfferType = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.propositionListOfferType;
    });
    _exports.getPropositionListOfferType = getPropositionListOfferType;
    var getPropositionListSoftBundleGroup = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.propositionListSoftBundleGroup;
    });
    _exports.getPropositionListSoftBundleGroup = getPropositionListSoftBundleGroup;
    var getFiltersData = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.data;
    });
    _exports.getFiltersData = getFiltersData;
    var getSelectedFilters = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.selected;
    });
    _exports.getSelectedFilters = getSelectedFilters;
    var getSelectedFiltersB2B = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.selectedB2B;
    });
    _exports.getSelectedFiltersB2B = getSelectedFiltersB2B;

    var getSelectedFiltersByIndexB2B = function getSelectedFiltersByIndexB2B(index) {
        return (0, _Reselect.createSelector)(getSelectedFiltersB2B, function(selected) {
            return selected[index];
        });
    };

    _exports.getSelectedFiltersByIndexB2B = getSelectedFiltersByIndexB2B;
    var getSelectedFiltersB2BFiltered = (0, _Reselect.createSelector)(getSelectedFiltersB2B, function(selected) {
        return selected.map(function(singleFilter) {
            return _objectSpread({}, singleFilter, {
                loyaltyLength: singleFilter.loyaltyLength[singleFilter.processType]
            });
        });
    });
    /* ({...selected , loyaltyLength: selected.loyaltyLength[selected.processType]}))*/

    _exports.getSelectedFiltersB2BFiltered = getSelectedFiltersB2BFiltered;
    var getDefaultFilters = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.defaultFilters;
    });
    _exports.getDefaultFilters = getDefaultFilters;
    var getVerifiedMsisdnB2B = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.verifiedMsisdnB2B;
    });
    _exports.getVerifiedMsisdnB2B = getVerifiedMsisdnB2B;
    var getSelectedProcessTypeValue = (0, _Reselect.createSelector)(getSelectedFilters, function(selected) {
        return selected.processType;
    });
    _exports.getSelectedProcessTypeValue = getSelectedProcessTypeValue;
    var getSelectedOfferType = (0, _Reselect.createSelector)(getSelectedFilters, getSelectedOfferType_);
    _exports.getSelectedOfferType = getSelectedOfferType;

    function getSelectedOfferType_(selected) {
        var selectedOfferType = selected.offerType ? selected.offerType : _OnlineUtils.default.loadFromSessionStorage("selectedOfferType");
        return selectedOfferType;
    }

    var getSelectedProcessTypeObject = (0, _Reselect.createSelector)([getFiltersData, getSelectedProcessTypeValue], function(data, selected) {
        return data.find(function(process) {
            return process.value == selected;
        });
    });
    _exports.getSelectedProcessTypeObject = getSelectedProcessTypeObject;
    var getSelectedProcessTypesObjectsB2B = (0, _Reselect.createSelector)([getFiltersData, getSelectedFiltersB2B], function(data, selected) {
        return selected.map(function(sel) {
            return data.find(function(d) {
                return d.value === sel.processType;
            });
        });
    });
    _exports.getSelectedProcessTypesObjectsB2B = getSelectedProcessTypesObjectsB2B;
    var getAvailableLoyaltiesLengthsB2B = (0, _Reselect.createSelector)(getSelectedProcessTypesObjectsB2B, function(processTypes) {
        return processTypes.map(function(processTypeObject) {
            return processTypeObject.loyalties;
        });
    });
    _exports.getAvailableLoyaltiesLengthsB2B = getAvailableLoyaltiesLengthsB2B;
    var getLoyaltyLengthFiltersForSelectB2B = (0, _Reselect.createSelector)(getAvailableLoyaltiesLengthsB2B, function(data) {
        return data && data.map(function(loyData) {
            return loyData && loyData.map(_utils.mapObjectArrayToSelect) || [];
        });
    });
    _exports.getLoyaltyLengthFiltersForSelectB2B = getLoyaltyLengthFiltersForSelectB2B;
    var getAvailableLoyaltiesLengths = (0, _Reselect.createSelector)(getSelectedProcessTypeObject, function(processType) {
        return processType && processType.loyalties;
    });
    _exports.getAvailableLoyaltiesLengths = getAvailableLoyaltiesLengths;
    var getUseDefaultOfferType = (0, _Reselect.createSelector)(_root.getFiltersState, function(data) {
        return data.useDefaultOfferType;
    });
    _exports.getUseDefaultOfferType = getUseDefaultOfferType;
    var getUseDefaultProcess = (0, _Reselect.createSelector)(_root.getFiltersState, function(data) {
        return data.useDefaultProcess;
    });
    _exports.getUseDefaultProcess = getUseDefaultProcess;
    var getUseDefaultLoyalty = (0, _Reselect.createSelector)(_root.getFiltersState, function(data) {
        return data.useDefaultLoyalty;
    });
    _exports.getUseDefaultLoyalty = getUseDefaultLoyalty;
    var getUseDefaultOffer = (0, _Reselect.createSelector)(_root.getFiltersState, function(data) {
        return data.useDefaultOffer;
    });
    _exports.getUseDefaultOffer = getUseDefaultOffer;
    var getProcessTypeFiltersData = (0, _Reselect.createSelector)(getFiltersData, function(data) {
        return data.processType;
    });
    _exports.getProcessTypeFiltersData = getProcessTypeFiltersData;
    var getLoyaltyLengthFiltersData = (0, _Reselect.createSelector)(getFiltersData, function(data) {
        return data.loyaltyLength;
    });
    _exports.getLoyaltyLengthFiltersData = getLoyaltyLengthFiltersData;
    var getProcessTypeFiltersForSelect = (0, _Reselect.createSelector)(getFiltersData, function(data) {
        return data && data.map(_utils.mapObjectArrayToSelect) || [];
    });
    _exports.getProcessTypeFiltersForSelect = getProcessTypeFiltersForSelect;
    var getLoyaltyLengthFiltersForSelect = (0, _Reselect.createSelector)(getAvailableLoyaltiesLengths, function(data) {
        return data && data.map(_utils.mapObjectArrayToSelect) || [];
    });
    _exports.getLoyaltyLengthFiltersForSelect = getLoyaltyLengthFiltersForSelect;
    var getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect = (0, _Reselect.createSelector)(getLoyaltyLengthFiltersForSelect, function(data) {
        return data.sort(function(a, b) {
            if (a.value === 0) return 1;
            if (b.value === 0) return -1;
            if (a.value < b.value) return -1;
            if (a.value > b.value) return 1;
            return 0;
        });
    });
    _exports.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect = getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect;
    var getSelectedFiltersProcessType = (0, _Reselect.createSelector)(getSelectedFilters, function(selected) {
        return selected && (0, _utils.mapStringToJsonObject)((0, _utils.hashProcessType)(selected));
    });
    _exports.getSelectedFiltersProcessType = getSelectedFiltersProcessType;
    var getSelectedLoyaltyLengthValue = (0, _Reselect.createSelector)([getSelectedFilters, getSelectedProcessTypeValue], function(selected, processType) {
        return selected && processType && selected.loyaltyLength && selected.loyaltyLength[processType];
    });
    _exports.getSelectedLoyaltyLengthValue = getSelectedLoyaltyLengthValue;
    var getDisableAddToCart = (0, _Reselect.createSelector)([getCheckMsisdnResult, getSelectedProcessTypeValue, getMsisdnVerificationNeeded], function(checkMsisdnResult, processType, msisdnVerificationNeeded) {
        return (0, _utils.shouldDisableAddToCart)(checkMsisdnResult, processType, msisdnVerificationNeeded);
    });
    _exports.getDisableAddToCart = getDisableAddToCart;
    var getCallOffersWithMsisdn = (0, _Reselect.createSelector)([getCheckMsisdnResult, getSelectedProcessTypeValue, getMsisdnVerificationNeeded, _root.getFiltersState], function(checkMsisdnResult, processType, msisdnVerificationNeeded, filters) {
        return (0, _utils.getVerifiedMsisdnFromFilters)(filters) && (0, _utils.shouldCallOffersWithMsisdn)(checkMsisdnResult, processType, msisdnVerificationNeeded);
    });
    _exports.getCallOffersWithMsisdn = getCallOffersWithMsisdn;
    var getVerifiedMsisdn = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return (0, _utils.getVerifiedMsisdnFromFilters)(filters);
    });
    _exports.getVerifiedMsisdn = getVerifiedMsisdn;
    var getSelectedBaseRatePlanId = (0, _Reselect.createSelector)(_root.getOffers, function(offers) {
        return offers.selectedRateplanBaseProductId;
    });
    var getFiltersUrl = (0, _Reselect.createSelector)([getSelectedOfferType, getSelectedProcessTypeValue, getSelectedLoyaltyLengthValue, getClientContext, getSelectedBaseRatePlanId], createFiltersUrl);
    _exports.getFiltersUrl = getFiltersUrl;

    function createFiltersUrl(offerType, processType, loyalty, clientContext, servicePlanId) {
        return 'offerType=' + offerType + '&processType=' + processType + '&loyalty=' + loyalty + (clientContext ? '&convergence=true' : '') + '&serviceplan=' + servicePlanId;
    }

    var isMsisdndVerificationRequired = (0, _Reselect.createSelector)(getSelectedProcessTypeValue, function(selectedProcessType) {
        return msisdnVeirficationProcessTypes.indexOf(selectedProcessType) !== -1;
    });
    _exports.isMsisdndVerificationRequired = isMsisdndVerificationRequired;
    var getOfferTypeCmsConf = (0, _Reselect.createSelector)(_root.getFiltersState, function(offerFilter) {
        return offerFilter.cmsConf;
    });
    _exports.getOfferTypeCmsConf = getOfferTypeCmsConf;
    var getExtProcessSelectConfig = (0, _Reselect.createSelector)([getOfferTypeCmsConf, getSelectedOfferType], function(cmsConf, offerType) {
        return cmsConf && cmsConf[offerType] && cmsConf[offerType].extProcessSelectConfig;
    });
    _exports.getExtProcessSelectConfig = getExtProcessSelectConfig;
    var getClientContextRole = (0, _Reselect.createSelector)([getOfferTypeCmsConf, getSelectedOfferType], function(cms, offerType) {
        return cms && cms[offerType] && cms[offerType].clientContextRole || "SOFT_BUNDLE_COV";
    });
    _exports.getClientContextRole = getClientContextRole;
    var getExtProcessSelectConfigFiltered = (0, _Reselect.createSelector)([getExtProcessSelectConfig, getProcessTypeFiltersForSelect], _utils.filterAvailableProcessOptions);
    _exports.getExtProcessSelectConfigFiltered = getExtProcessSelectConfigFiltered;
    var getOfferFiltersLoading = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.offerFiltersLoading;
    });
    _exports.getOfferFiltersLoading = getOfferFiltersLoading;
    var getOfferTypeFiltersCached = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.offerTypeFiltersCached;
    });
    _exports.getOfferTypeFiltersCached = getOfferTypeFiltersCached;
    var getProcessForMsisdn = (0, _Reselect.createSelector)(_root.getFiltersState, function(filters) {
        return filters.processForMsisdn;
    });
    _exports.getProcessForMsisdn = getProcessForMsisdn;
    var getSelectedProcess = (0, _Reselect.createSelector)([getSelectedProcessTypeValue, getVerifiedMsisdn, getProcessForMsisdn], function(selectedProcess, verifiedMsisdn, processForMsisdn) {
        if (verifiedMsisdn && processForMsisdn) {
            var existProcess = processForMsisdn[verifiedMsisdn];
            return existProcess || selectedProcess;
        }

        return selectedProcess;
    });
    _exports.getSelectedProcess = getSelectedProcess;
    var getOfferTypeCmsConfMarket = (0, _Reselect.createSelector)(getOfferTypeCmsConf, function(cmsConf) {
        return Object.values(typeof cmsConf !== "undefined" && !!cmsConf && cmsConf).map(function(conf) {
            return conf.market;
        }).find(Boolean);
    });
    _exports.getOfferTypeCmsConfMarket = getOfferTypeCmsConfMarket;
});
//# sourceMappingURL=filters.js.map