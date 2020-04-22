define(["exports", "Reselect", "../sessionAttributes", "../../magnum2/selectors", "lodash", "../../checkout/constants/AddonTypeEnum", "../../core/constants/RequestState", "../../magnum2/components/BundleTypeUtils", "eshop/modules/core/constants/MigrationTypeEnum", "../../core/enum/SalesChannel"], function(e, t, a, r, n, o, i, c, s, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isSecondaryChoiceOfferAvailable = e.is2UMigration = e.showNetPrices = e.marketSegment = e.wwtValidationModalMessage = e.wwtValidationModalState = e.showWWTModal = e.isWWW = e.getSalesChannel = e.duplicateOrderCalled = e.isMigration = e.duplicateOrderDetails = e.duplicateOrderIsModalOpened = e.hasAccessRoleToProcessDuplicateOrder = e.isDuplicateOrder = e.getLPSearchCustomerDone = e.getCartSummarySearchCustomerDone = e.getErrorMessage = e.getShowErrorModal = e.voipModalComponentIsMounted = e.isPreLandingPage = e.isLandingPage = e.isAfterSearchCustomer = e.getBundleNosOnCart = e.getShowCartNotEmptyModal = e.getAddressFromWWT = e.getMigrationDataClear = e.getMigrationVariantsFetching = e.getMigrationVariantsFetched = e.getMigrationFtthAvailabilityAttribute = e.getMigrationBroadbandAttribute = e.getMigrationVariantContainers = e.getServiceDetailsFetched = e.getMagnumServiceDetails = e.getMigrationMode = e.getWwtCityId = e.getServiceDetails = e.getCustomerSelectedModalIsShow = e.getSelectedLoyalty = e.getLoyaltyOptions = e.getMinimalLinkPrices = e.getWwtAddress = e.shouldBeRenderedPaymentLinkComponent = e.getPageContext = e.getSelectedOfferId = e.getCarouselParagraphs = e.hasDTH = e.hasADSL = e.hasFTTH = e.hasPots = e.getAdditionalHeaders = e.getHeaders = e.forceAfterWWT = e.isAfterWWT = e.getKnaForm = e.getKnaModalRegistered = e.getKnaModalIsShow = e.getAllDocumentsLoading = e.getFullPageLoader = e.getOffersLoading = e.getLoading = e.getMetaData = e.getProductListDescription = e.hasOffers = e.isSecondaryChoiceOfferSelected = e.getFtthAvailabilityDateFromOffers = e.getOffers = e.getFixState = void 0, a = babelHelpers.interopRequireWildcard(a), n = babelHelpers.interopRequireDefault(n), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s), l = babelHelpers.interopRequireDefault(l);

    function u(e) {
        return e.fix
    }
    e.getFixState = u;
    var d = (0, t.createSelector)(u, function(t) {
        return t.offers.data.offers.filter(function(e) {
            return !t.offers.secondaryChoiceOffer || e.availableAsSecondaryChoiceOffer
        })
    });
    e.getOffers = d;
    var f = (0, t.createSelector)(u, function(e) {
        return e.offers.data.ftthAvailabilityDate
    });
    e.getFtthAvailabilityDateFromOffers = f;
    var g = (0, t.createSelector)(u, function(e) {
        return e.offers && e.offers.secondaryChoiceOffer || !1
    });
    e.isSecondaryChoiceOfferSelected = g;
    var S = (0, t.createSelector)(d, function(e) {
        return e && 0 < e.length
    });
    e.hasOffers = S;
    var v = (0, t.createSelector)(u, function(e) {
        return e.offers.data.productListDescription
    });
    e.getProductListDescription = v;
    var m = (0, t.createSelector)(u, function(e) {
        return e.metaData
    });
    e.getMetaData = m;
    var h = (0, t.createSelector)(m, function(e) {
        return e.loading
    });
    e.getLoading = h;
    var p = (0, t.createSelector)(h, function(e) {
        return e.offers
    });
    e.getOffersLoading = p;
    var M = (0, t.createSelector)([h, u], function(t, e) {
        return Object.keys(t).some(function(e) {
            return !!t[e]
        }) || e.voip.selectionInProgress && !e.voip.numbersFetched
    });
    e.getFullPageLoader = M;
    var C = (0, t.createSelector)(m, function(e) {
        return e.allDocumentsLoading
    });
    e.getAllDocumentsLoading = C;
    var D = (0, t.createSelector)(m, function(e) {
        return e.knaModalState.open
    });
    e.getKnaModalIsShow = D;
    var A = (0, t.createSelector)(m, function(e) {
        return e.knaModalState.registered
    });
    e.getKnaModalRegistered = A;
    var O = (0, t.createSelector)(u, function(e) {
        return e.kna
    });
    e.getKnaForm = O;
    var y = (0, t.createSelector)(m, function(e) {
        return e.isAfterWWT
    });
    e.isAfterWWT = y;
    var w = (0, t.createSelector)(m, function(e) {
        return e.forceAfterWWT
    });
    e.forceAfterWWT = w;
    var T = (0, t.createSelector)(m, function(e) {
        return e.headerInfo.headers
    });
    e.getHeaders = T;
    var W = (0, t.createSelector)(m, function(e) {
        return e.isAfterWWT ? void 0 : e.headerInfo.additionalHeaders
    });
    e.getAdditionalHeaders = W;
    var L = (0, t.createSelector)(u, function(e) {
        return e.offers.data.pots
    });
    e.hasPots = L;
    var I = (0, t.createSelector)(u, function(e) {
        return e.offers.data.technologies && e.offers.data.technologies.includes("FTTH")
    });
    e.hasFTTH = I;
    var b = (0, t.createSelector)(u, function(e) {
        return e.offers.data.technologies && e.offers.data.technologies.includes("ADSL")
    });
    e.hasADSL = b;
    var P = (0, t.createSelector)(u, function(e) {
        return e.offers.data.technologies && e.offers.data.technologies.includes("VIDSAT")
    });
    e.hasDTH = P;
    var F = (0, t.createSelector)(u, function(e) {
        return e.offers.data.paragraphs
    });
    e.getCarouselParagraphs = F;
    var E = (0, t.createSelector)(u, function(e) {
        return e.offers.selectedOfferId
    });
    e.getSelectedOfferId = E;
    e.getPageContext = function(e) {
        return e.fix.pageContext
    };
    var R = (0, t.createSelector)(m, function(e) {
        return e.shouldBeRenderedPaymentLinkComponent
    });
    e.shouldBeRenderedPaymentLinkComponent = R;
    var V = (0, t.createSelector)(m, function(e) {
        return e.wwtAddress
    });
    e.getWwtAddress = V;
    var N = (0, t.createSelector)(u, function(e) {
        return e.offers.data.offers.map(function(e) {
            return e.minimumLinkPrice
        })
    });
    e.getMinimalLinkPrices = N;
    var H = (0, t.createSelector)(u, function(e) {
        return e.offers.data.loyaltyOptions
    });
    e.getLoyaltyOptions = H;
    var B = (0, t.createSelector)(m, function(e) {
        return e.selectedLoyalty
    });
    e.getSelectedLoyalty = B;
    var k = (0, t.createSelector)(m, function(e) {
        return e.customerSelectedModalIsShow
    });
    e.getCustomerSelectedModalIsShow = k;
    var _ = (0, t.createSelector)(u, function(e) {
        return e.customerServices.serviceDetails
    });
    e.getServiceDetails = _;
    var x = (0, t.createSelector)([m, _], function(e, t) {
        return e.wwtAddress && e.wwtAddress.cityId || t && t.installationAddress && t.installationAddress.cityId
    });
    e.getWwtCityId = x;
    var q = (0, t.createSelector)(u, function(e) {
        return e.migration.mode
    });
    e.getMigrationMode = q;
    var U = (0, t.createSelector)([_, q], function(e, t) {
        return n.default.isNil(t) || n.default.isEmpty(e) ? {
            serviceDetails: null,
            mode: null
        } : {
            serviceDetails: e,
            mode: t
        }
    });
    e.getMagnumServiceDetails = U;
    var K = (0, t.createSelector)(u, function(e) {
        return e.customerServices.serviceDetailsFetched
    });
    e.getServiceDetailsFetched = K;
    var j = (0, t.createSelector)(u, function(e) {
        return e.offers.migrationVariants && e.offers.migrationVariants.variantContainers || []
    });
    e.getMigrationVariantContainers = j;
    var J = (0, t.createSelector)(u, function(e) {
        var t = e.offers.migrationVariants && e.offers.migrationVariants.broadBandAttribute,
            r = JSON.parse(sessionStorage.getItem(a.FIX_SERVICE_DETAILS_BB_ATTR));
        return t ? (sessionStorage.setItem(a.FIX_SERVICE_DETAILS_BB_ATTR, JSON.stringify(t)), t) : r
    });
    e.getMigrationBroadbandAttribute = J;
    var X = (0, t.createSelector)(u, function(e) {
        return e.offers.migrationVariants && e.offers.migrationVariants.ftthAvailabilityDate
    });
    e.getMigrationFtthAvailabilityAttribute = X;
    var Y = (0, t.createSelector)(u, function(e) {
        return e.offers.migrationVariantsFetched
    });
    e.getMigrationVariantsFetched = Y;
    var z = (0, t.createSelector)(u, function(e) {
        return e.offers.migrationVariantsFetching
    });
    e.getMigrationVariantsFetching = z;
    var G = (0, t.createSelector)(m, function(e) {
        return e.migrationDataClear
    });
    e.getMigrationDataClear = G;
    var Q = (0, t.createSelector)(r.getMagnumState, function(e) {
        return e.wwt
    });
    e.getAddressFromWWT = Q;
    var Z = (0, t.createSelector)(u, function(e) {
        return e.offers.showCartNotEmptyModal
    });
    e.getShowCartNotEmptyModal = Z;
    var $ = (0, t.createSelector)(u, function(e) {
        return e.offers.bundleNosOnCart
    });
    e.getBundleNosOnCart = $;
    var ee = (0, t.createSelector)(m, function(e) {
        return e.isAfterSearchCustomer
    });
    e.isAfterSearchCustomer = ee;
    var te = (0, t.createSelector)(u, function(e) {
        return e.offers.isLP
    });
    e.isLandingPage = te;
    var re = (0, t.createSelector)(u, function(e) {
        return -1 < window.location.pathname.indexOf("/view/oferta/internet-domowy")
    });
    e.isPreLandingPage = re;
    var ae = (0, t.createSelector)(m, function(e) {
        return e.voipModalComponentIsMounted
    });
    e.voipModalComponentIsMounted = ae;
    var ne = (0, t.createSelector)(u, function(e) {
        return e.errors.showErrorModal
    });
    e.getShowErrorModal = ne;
    var oe = (0, t.createSelector)(u, function(e) {
        return e.errors.errorMessage
    });
    e.getErrorMessage = oe;
    var ie = (0, t.createSelector)(m, function(e) {
        return e.cartSummarySearchCustomerDone
    });
    e.getCartSummarySearchCustomerDone = ie;
    var ce = (0, t.createSelector)(m, function(e) {
        return e.lpSearchCustomerDone
    });
    e.getLPSearchCustomerDone = ce;
    var se = (0, t.createSelector)(m, function(e) {
        return e.isDuplicateOrder
    });
    e.isDuplicateOrder = se;
    var le = (0, t.createSelector)(m, function(e) {
        return e.hasAccessRoleToProcessDuplicateOrder
    });
    e.hasAccessRoleToProcessDuplicateOrder = le;
    var ue = (0, t.createSelector)(m, function(e) {
        return e.duplicateOrderIsModalOpened
    });
    e.duplicateOrderIsModalOpened = ue;
    var de = (0, t.createSelector)(m, function(e) {
        return e.duplicateOrderDetails
    });
    e.duplicateOrderDetails = de;
    var fe = (0, t.createSelector)(m, function(e) {
        return e.isMigration
    });
    e.isMigration = fe;
    var ge = (0, t.createSelector)(m, function(e) {
        return e.duplicateOrderCalled
    });
    e.duplicateOrderCalled = ge;
    var Se = (0, t.createSelector)(m, function(e) {
        return e.salesChannel
    });
    e.getSalesChannel = Se;
    var ve = (0, t.createSelector)(Se, function(e) {
        return e === l.default.WWW
    });
    e.isWWW = ve;
    var me = (0, t.createSelector)(m, function(e) {
        return e.showWWTModal
    });
    e.showWWTModal = me;
    var he = (0, t.createSelector)(m, function(e) {
        return e.wwtValidationModalState
    });
    e.wwtValidationModalState = he;
    var pe = (0, t.createSelector)(m, function(e) {
        return e.wwtValidationModalMessage
    });
    e.wwtValidationModalMessage = pe;
    var Me = (0, t.createSelector)(m, function(e) {
        return e.marketSegment
    });
    e.marketSegment = Me;
    var Ce = (0, t.createSelector)(m, function(e) {
        return e.showNetPrices
    });
    e.showNetPrices = Ce;
    var De = (0, t.createSelector)(u, r.getMagnumState, function(e, t) {
        return s.default.RETENTION === e.migration.mode && (0, c.is2U)(t.availableBundleTypes)
    });
    e.is2UMigration = De;
    var Ae = (0, t.createSelector)(d, function(e) {
            return n.default.flatMap(e, function(e) {
                return e.feeAddons
            }).some(function(e) {
                return e.addonType.code === o.default.SECONDARY_CHOICE_DISCOUNT
            })
        }),
        Oe = (0, t.createSelector)(r.getMagnumState, function(e) {
            var t = e.durationList;
            return t.requestState === i.RequestState.Success && (!(null == e.wwt.zip && !(0, c.is2ULTE)(e.availableBundleTypes)) && n.default.flatMap(t.propositions, function(e) {
                return e.feeAddons
            }).some(function(e) {
                return e.addonType.code === o.default.SECONDARY_CHOICE_DISCOUNT
            }))
        }),
        ye = (0, t.createSelector)([Ae, Oe], function(e, t) {
            return e || t
        });
    e.isSecondaryChoiceOfferAvailable = ye
});
//# sourceMappingURL=root.js.map