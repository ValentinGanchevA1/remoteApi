define(["exports", "Reselect", "../sessionAttributes", "../../magnum2/selectors", "lodash", "../../checkout/constants/AddonTypeEnum", "../../core/constants/RequestState", "../../magnum2/components/BundleTypeUtils", "eshop/modules/core/constants/MigrationTypeEnum", "../../core/enum/SalesChannel"], function(_exports, _Reselect, SESSION, _selectors, _lodash, _AddonTypeEnum, _RequestState, _BundleTypeUtils, _MigrationTypeEnum, _SalesChannel) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isSecondaryChoiceOfferAvailable = _exports.is2UMigration = _exports.showNetPrices = _exports.marketSegment = _exports.wwtValidationModalMessage = _exports.wwtValidationModalState = _exports.showWWTModal = _exports.isWWW = _exports.getSalesChannel = _exports.duplicateOrderCalled = _exports.isMigration = _exports.duplicateOrderDetails = _exports.duplicateOrderIsModalOpened = _exports.hasAccessRoleToProcessDuplicateOrder = _exports.isDuplicateOrder = _exports.getLPSearchCustomerDone = _exports.getCartSummarySearchCustomerDone = _exports.getErrorModalConfig = _exports.getErrorMessage = _exports.getShowErrorModal = _exports.voipModalComponentIsMounted = _exports.isPreLandingPage = _exports.isLandingPage = _exports.isAfterSearchCustomer = _exports.getBundleNosOnCart = _exports.getShowCartNotEmptyModal = _exports.getAddressFromWWT = _exports.getMigrationDataClear = _exports.getMigrationVariantsFetching = _exports.getMigrationVariantsFetched = _exports.getMigrationFtthAvailabilityAttribute = _exports.getMigrationBroadbandAttribute = _exports.getMigrationVariantContainers = _exports.getServiceDetailsFetched = _exports.getMagnumServiceDetails = _exports.getMigrationMode = _exports.getWwtCityId = _exports.getServiceDetails = _exports.getCustomerSelectedModalIsShow = _exports.getSelectedLoyalty = _exports.getLoyaltyOptions = _exports.getMinimalLinkPrices = _exports.getWwtAddress = _exports.shouldBeRenderedPaymentLinkComponent = _exports.getPageContext = _exports.getSelectedOfferId = _exports.getCarouselParagraphs = _exports.hasDTH = _exports.hasADSL = _exports.hasFTTH = _exports.hasPots = _exports.getAdditionalHeaders = _exports.getHeaders = _exports.forceAfterWWT = _exports.isAfterWWT = _exports.getKnaForm = _exports.getKnaModalRegistered = _exports.getKnaModalIsShow = _exports.getAllDocumentsLoading = _exports.getFullPageLoader = _exports.getOffersLoading = _exports.getLoading = _exports.getMetaData = _exports.getProductListDescription = _exports.hasOffers = _exports.isSecondaryChoiceOfferSelected = _exports.getFtthAvailabilityDateFromOffers = _exports.getOffers = _exports.getFixState = void 0;
    SESSION = babelHelpers.interopRequireWildcard(SESSION);
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _AddonTypeEnum = babelHelpers.interopRequireDefault(_AddonTypeEnum);
    _MigrationTypeEnum = babelHelpers.interopRequireDefault(_MigrationTypeEnum);
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);

    var getFixState = function getFixState(state) {
        return state.fix;
    };

    _exports.getFixState = getFixState;
    var getOffers = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.offers.filter(function(offer) {
            return !fix.offers.secondaryChoiceOffer || offer.availableAsSecondaryChoiceOffer;
        });
    });
    _exports.getOffers = getOffers;
    var getFtthAvailabilityDateFromOffers = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.ftthAvailabilityDate;
    });
    _exports.getFtthAvailabilityDateFromOffers = getFtthAvailabilityDateFromOffers;
    var isSecondaryChoiceOfferSelected = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers && fix.offers.secondaryChoiceOffer || false;
    });
    _exports.isSecondaryChoiceOfferSelected = isSecondaryChoiceOfferSelected;
    var hasOffers = (0, _Reselect.createSelector)(getOffers, function(offers) {
        return offers && offers.length > 0;
    });
    _exports.hasOffers = hasOffers;
    var getProductListDescription = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.productListDescription;
    });
    _exports.getProductListDescription = getProductListDescription;
    var getMetaData = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.metaData;
    });
    _exports.getMetaData = getMetaData;
    var getLoading = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.loading;
    });
    _exports.getLoading = getLoading;
    var getOffersLoading = (0, _Reselect.createSelector)(getLoading, function(loading) {
        return loading.offers;
    });
    _exports.getOffersLoading = getOffersLoading;
    var getFullPageLoader = (0, _Reselect.createSelector)([getLoading, getFixState], function(loading, fix) {
        return Object.keys(loading).some(function(k) {
            return !!loading[k];
        }) || fix.voip.selectionInProgress && !fix.voip.numbersFetched;
    });
    _exports.getFullPageLoader = getFullPageLoader;
    var getAllDocumentsLoading = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.allDocumentsLoading;
    });
    _exports.getAllDocumentsLoading = getAllDocumentsLoading;
    var getKnaModalIsShow = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.knaModalState.open;
    });
    _exports.getKnaModalIsShow = getKnaModalIsShow;
    var getKnaModalRegistered = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.knaModalState.registered;
    });
    _exports.getKnaModalRegistered = getKnaModalRegistered;
    var getKnaForm = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.kna;
    });
    _exports.getKnaForm = getKnaForm;
    var isAfterWWT = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.isAfterWWT;
    });
    _exports.isAfterWWT = isAfterWWT;
    var forceAfterWWT = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.forceAfterWWT;
    });
    _exports.forceAfterWWT = forceAfterWWT;
    var getHeaders = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.headerInfo.headers;
    });
    _exports.getHeaders = getHeaders;
    var getAdditionalHeaders = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.isAfterWWT ? undefined : metaData.headerInfo.additionalHeaders;
    });
    _exports.getAdditionalHeaders = getAdditionalHeaders;
    var hasPots = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.pots;
    });
    _exports.hasPots = hasPots;
    var hasFTTH = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.technologies && fix.offers.data.technologies.includes("FTTH");
    });
    _exports.hasFTTH = hasFTTH;
    var hasADSL = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.technologies && fix.offers.data.technologies.includes("ADSL");
    });
    _exports.hasADSL = hasADSL;
    var hasDTH = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.technologies && fix.offers.data.technologies.includes("VIDSAT");
    });
    _exports.hasDTH = hasDTH;
    var getCarouselParagraphs = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.paragraphs;
    });
    _exports.getCarouselParagraphs = getCarouselParagraphs;
    var getSelectedOfferId = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.selectedOfferId;
    });
    _exports.getSelectedOfferId = getSelectedOfferId;

    var getPageContext = function getPageContext(state) {
        return state.fix.pageContext;
    };

    _exports.getPageContext = getPageContext;
    var shouldBeRenderedPaymentLinkComponent = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.shouldBeRenderedPaymentLinkComponent;
    });
    _exports.shouldBeRenderedPaymentLinkComponent = shouldBeRenderedPaymentLinkComponent;
    var getWwtAddress = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.wwtAddress;
    });
    _exports.getWwtAddress = getWwtAddress;
    var getMinimalLinkPrices = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.offers.map(function(ofert) {
            return ofert.minimumLinkPrice;
        });
    });
    _exports.getMinimalLinkPrices = getMinimalLinkPrices;
    var getLoyaltyOptions = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.data.loyaltyOptions;
    });
    _exports.getLoyaltyOptions = getLoyaltyOptions;
    var getSelectedLoyalty = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.selectedLoyalty;
    });
    _exports.getSelectedLoyalty = getSelectedLoyalty;
    var getCustomerSelectedModalIsShow = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.customerSelectedModalIsShow;
    });
    _exports.getCustomerSelectedModalIsShow = getCustomerSelectedModalIsShow;
    var getServiceDetails = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.customerServices.serviceDetails;
    });
    _exports.getServiceDetails = getServiceDetails;
    var getWwtCityId = (0, _Reselect.createSelector)([getMetaData, getServiceDetails], function(metaData, serviceDetails) {
        return metaData.wwtAddress && metaData.wwtAddress.cityId || serviceDetails && serviceDetails.installationAddress && serviceDetails.installationAddress.cityId;
    });
    _exports.getWwtCityId = getWwtCityId;
    var getMigrationMode = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.migration.mode;
    });
    _exports.getMigrationMode = getMigrationMode;
    var getMagnumServiceDetails = (0, _Reselect.createSelector)([getServiceDetails, getMigrationMode], function(serviceDetails, mode) {
        if (_lodash.default.isNil(mode) || _lodash.default.isEmpty(serviceDetails)) {
            return {
                serviceDetails: null,
                mode: null
            };
        }

        return {
            serviceDetails: serviceDetails,
            mode: mode
        };
    });
    _exports.getMagnumServiceDetails = getMagnumServiceDetails;
    var getServiceDetailsFetched = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.customerServices.serviceDetailsFetched;
    });
    _exports.getServiceDetailsFetched = getServiceDetailsFetched;
    var getMigrationVariantContainers = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.migrationVariants && fix.offers.migrationVariants.variantContainers || [];
    });
    _exports.getMigrationVariantContainers = getMigrationVariantContainers;
    var getMigrationBroadbandAttribute = (0, _Reselect.createSelector)(getFixState, function(fix) {
        var broadBandAttribute = fix.offers.migrationVariants && fix.offers.migrationVariants.broadBandAttribute;
        var sessionBroadBandAttribute = JSON.parse(sessionStorage.getItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR));

        if (broadBandAttribute) {
            sessionStorage.setItem(SESSION.FIX_SERVICE_DETAILS_BB_ATTR, JSON.stringify(broadBandAttribute));
            return broadBandAttribute;
        } else {
            return sessionBroadBandAttribute;
        }
    });
    _exports.getMigrationBroadbandAttribute = getMigrationBroadbandAttribute;
    var getMigrationFtthAvailabilityAttribute = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.migrationVariants && fix.offers.migrationVariants.ftthAvailabilityDate;
    });
    _exports.getMigrationFtthAvailabilityAttribute = getMigrationFtthAvailabilityAttribute;
    var getMigrationVariantsFetched = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.migrationVariantsFetched;
    });
    _exports.getMigrationVariantsFetched = getMigrationVariantsFetched;
    var getMigrationVariantsFetching = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.migrationVariantsFetching;
    });
    _exports.getMigrationVariantsFetching = getMigrationVariantsFetching;
    var getMigrationDataClear = (0, _Reselect.createSelector)(getMetaData, function(metadata) {
        return metadata.migrationDataClear;
    });
    _exports.getMigrationDataClear = getMigrationDataClear;
    var getAddressFromWWT = (0, _Reselect.createSelector)(_selectors.getMagnumState, function(magnum) {
        return magnum.wwt;
    });
    _exports.getAddressFromWWT = getAddressFromWWT;
    var getShowCartNotEmptyModal = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.showCartNotEmptyModal;
    });
    _exports.getShowCartNotEmptyModal = getShowCartNotEmptyModal;
    var getBundleNosOnCart = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.bundleNosOnCart;
    });
    _exports.getBundleNosOnCart = getBundleNosOnCart;
    var isAfterSearchCustomer = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.isAfterSearchCustomer;
    });
    _exports.isAfterSearchCustomer = isAfterSearchCustomer;
    var isLandingPage = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.offers.isLP;
    });
    _exports.isLandingPage = isLandingPage;
    var isPreLandingPage = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return window.location.pathname.indexOf('/view/oferta/internet-domowy') > -1;
    });
    _exports.isPreLandingPage = isPreLandingPage;
    var voipModalComponentIsMounted = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.voipModalComponentIsMounted;
    });
    _exports.voipModalComponentIsMounted = voipModalComponentIsMounted;
    var getFixErrors = (0, _Reselect.createSelector)(getFixState, function(fix) {
        return fix.errors;
    });
    var getShowErrorModal = (0, _Reselect.createSelector)(getFixErrors, function(errors) {
        return errors.showErrorModal;
    });
    _exports.getShowErrorModal = getShowErrorModal;
    var getErrorMessage = (0, _Reselect.createSelector)(getFixErrors, function(errors) {
        return errors.errorMessage;
    });
    _exports.getErrorMessage = getErrorMessage;
    var getErrorModalConfig = (0, _Reselect.createSelector)(getFixErrors, function(errors) {
        return errors.errorModalConfig;
    });
    _exports.getErrorModalConfig = getErrorModalConfig;
    var getCartSummarySearchCustomerDone = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.cartSummarySearchCustomerDone;
    });
    _exports.getCartSummarySearchCustomerDone = getCartSummarySearchCustomerDone;
    var getLPSearchCustomerDone = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.lpSearchCustomerDone;
    });
    _exports.getLPSearchCustomerDone = getLPSearchCustomerDone;
    var isDuplicateOrder = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.isDuplicateOrder;
    });
    _exports.isDuplicateOrder = isDuplicateOrder;
    var hasAccessRoleToProcessDuplicateOrder = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.hasAccessRoleToProcessDuplicateOrder;
    });
    _exports.hasAccessRoleToProcessDuplicateOrder = hasAccessRoleToProcessDuplicateOrder;
    var duplicateOrderIsModalOpened = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.duplicateOrderIsModalOpened;
    });
    _exports.duplicateOrderIsModalOpened = duplicateOrderIsModalOpened;
    var duplicateOrderDetails = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.duplicateOrderDetails;
    });
    _exports.duplicateOrderDetails = duplicateOrderDetails;
    var isMigration = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.isMigration;
    });
    _exports.isMigration = isMigration;
    var duplicateOrderCalled = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.duplicateOrderCalled;
    });
    _exports.duplicateOrderCalled = duplicateOrderCalled;
    var getSalesChannel = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.salesChannel;
    });
    _exports.getSalesChannel = getSalesChannel;
    var isWWW = (0, _Reselect.createSelector)(getSalesChannel, function(salesChannel) {
        return salesChannel === _SalesChannel.default.WWW;
    });
    _exports.isWWW = isWWW;
    var showWWTModal = (0, _Reselect.createSelector)(getMetaData, function(metadata) {
        return metadata.showWWTModal;
    });
    _exports.showWWTModal = showWWTModal;
    var wwtValidationModalState = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.wwtValidationModalState;
    });
    _exports.wwtValidationModalState = wwtValidationModalState;
    var wwtValidationModalMessage = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.wwtValidationModalMessage;
    });
    _exports.wwtValidationModalMessage = wwtValidationModalMessage;
    var marketSegment = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.marketSegment;
    });
    _exports.marketSegment = marketSegment;
    var showNetPrices = (0, _Reselect.createSelector)(getMetaData, function(metaData) {
        return metaData.showNetPrices;
    });
    _exports.showNetPrices = showNetPrices;
    var is2UMigration = (0, _Reselect.createSelector)(getFixState, _selectors.getMagnumState, function(fixState, magnumState) {
        return _MigrationTypeEnum.default.RETENTION === fixState.migration.mode && (0, _BundleTypeUtils.is2U)(magnumState.availableBundleTypes);
    });
    _exports.is2UMigration = is2UMigration;
    var isSecondaryChoiceOfferAvailableForFix = (0, _Reselect.createSelector)(getOffers, function(fixOffers) {
        return _lodash.default.flatMap(fixOffers, function(offer) {
            return offer.feeAddons;
        }).some(function(feeAddon) {
            return feeAddon.addonType.code === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
        });
    });
    var isSecondaryChoiceOfferAvailableForMagnum = (0, _Reselect.createSelector)(_selectors.getMagnumState, function(magnumState) {
        var magnumDurationList = magnumState.durationList;

        if (magnumDurationList.requestState !== _RequestState.RequestState.Success) {
            return false;
        }

        var showAfterWWT = magnumState.wwt.zip != null;

        if (!showAfterWWT && !(0, _BundleTypeUtils.is2ULTE)(magnumState.availableBundleTypes)) {
            return false;
        }

        var result = _lodash.default.flatMap(magnumDurationList.propositions, function(proposition) {
            return proposition.feeAddons;
        }).some(function(feeAddon) {
            return feeAddon.addonType.code === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
        });

        return result;
    });
    var isSecondaryChoiceOfferAvailable = (0, _Reselect.createSelector)([isSecondaryChoiceOfferAvailableForFix, isSecondaryChoiceOfferAvailableForMagnum], function(isSecondaryChoiceOfferAvailableForFix, isSecondaryChoiceOfferAvailableForMagnum) {
        return isSecondaryChoiceOfferAvailableForFix || isSecondaryChoiceOfferAvailableForMagnum;
    });
    _exports.isSecondaryChoiceOfferAvailable = isSecondaryChoiceOfferAvailable;
});
//# sourceMappingURL=root.js.map