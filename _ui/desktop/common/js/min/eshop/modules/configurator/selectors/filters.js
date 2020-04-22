define(["exports", "Reselect", "./root", "../utils", "eshop/utils/OnlineUtils", "../../core/constants/TransactionProcessTypeEnum", "eshop/modules/core/enum/MarketSegment"], function(e, r, t, o, n, i, l) {
    "use strict";

    function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getOfferTypeCmsConfMarket = e.getSelectedProcess = e.getProcessForMsisdn = e.getOfferTypeFiltersCached = e.getOfferFiltersLoading = e.getExtProcessSelectConfigFiltered = e.getClientContextRole = e.getExtProcessSelectConfig = e.getOfferTypeCmsConf = e.isMsisdndVerificationRequired = e.getFiltersUrl = e.getVerifiedMsisdn = e.getCallOffersWithMsisdn = e.getDisableAddToCart = e.getSelectedLoyaltyLengthValue = e.getSelectedFiltersProcessType = e.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect = e.getLoyaltyLengthFiltersForSelect = e.getProcessTypeFiltersForSelect = e.getLoyaltyLengthFiltersData = e.getProcessTypeFiltersData = e.getUseDefaultOffer = e.getUseDefaultLoyalty = e.getUseDefaultProcess = e.getUseDefaultOfferType = e.getAvailableLoyaltiesLengths = e.getLoyaltyLengthFiltersForSelectB2B = e.getAvailableLoyaltiesLengthsB2B = e.getSelectedProcessTypesObjectsB2B = e.getSelectedProcessTypeObject = e.getSelectedOfferType = e.getSelectedProcessTypeValue = e.getVerifiedMsisdnB2B = e.getDefaultFilters = e.getSelectedFiltersB2BFiltered = e.getSelectedFiltersByIndexB2B = e.getSelectedFiltersB2B = e.getSelectedFilters = e.getFiltersData = e.getPropositionListSoftBundleGroup = e.getPropositionListOfferType = e.getPropositionListCountSetMode = e.getPropositionListCount = e.getSimCountSelected = e.getMsisdnInput = e.getMsisdnVerificationNeeded = e.getIsMsisdnChecking = e.getCheckMsisdnResult = e.getMaxSimCount = e.getClientContextChangeHandlers = e.isB2B = e.getMarketContext = e.getClientContext = void 0, n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l);
    var s = [i.default.MNP, i.default.RETENTION, i.default.MIGRATION_PRE_POST, i.default.MNP_TWOSTEP, i.default.MIGRATION_ZETAFON_POST, i.default.MIGRATION_NJU_POST_TO_POST, i.default.MIGRATION_NJU_PRE_TO_POST, i.default.MNP_APPLICATION],
        a = (0, r.createSelector)(t.getFiltersState, function(e) {
            return e.clientContext
        });
    e.getClientContext = a;
    var u = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.marketContext
    });
    e.getMarketContext = u;
    var f = (0, r.createSelector)(u, function(e) {
        return l.default.isB2B(e)
    });
    e.isB2B = f;
    var g = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.clientContextChangeHandlers
    });
    e.getClientContextChangeHandlers = g;
    var S = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.maxSimCount
    });
    e.getMaxSimCount = S;
    var d = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.checkMsisdnResult
    });
    e.getCheckMsisdnResult = d;
    var p = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.isMsisdnChecking
    });
    e.getIsMsisdnChecking = p;
    var y = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.msisdnVerificationNeeded
    });
    e.getMsisdnVerificationNeeded = y;
    var F = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.msisdnInput
    });
    e.getMsisdnInput = F;
    var v = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.simCountSelected
    });
    e.getSimCountSelected = v;
    var O = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.propositionListCount
    });
    e.getPropositionListCount = O;
    var T = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.propositionListCountSetMode
    });
    e.getPropositionListCountSetMode = T;
    var C = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.propositionListOfferType
    });
    e.getPropositionListOfferType = C;
    var P = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.propositionListSoftBundleGroup
    });
    e.getPropositionListSoftBundleGroup = P;
    var L = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.data
    });
    e.getFiltersData = L;
    var h = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.selected
    });
    e.getSelectedFilters = h;
    var B = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.selectedB2B
    });
    e.getSelectedFiltersB2B = B;
    e.getSelectedFiltersByIndexB2B = function(t) {
        return (0, r.createSelector)(B, function(e) {
            return e[t]
        })
    };
    var M = (0, r.createSelector)(B, function(e) {
        return e.map(function(e) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, e, {
                loyaltyLength: e.loyaltyLength[e.processType]
            })
        })
    });
    e.getSelectedFiltersB2BFiltered = M;
    var b = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.defaultFilters
    });
    e.getDefaultFilters = b;
    var m = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.verifiedMsisdnB2B
    });
    e.getVerifiedMsisdnB2B = m;
    var D = (0, r.createSelector)(h, function(e) {
        return e.processType
    });
    e.getSelectedProcessTypeValue = D;
    var x = (0, r.createSelector)(h, function(e) {
        return e.offerType ? e.offerType : n.default.loadFromSessionStorage("selectedOfferType")
    });
    e.getSelectedOfferType = x;
    var j = (0, r.createSelector)([L, D], function(e, t) {
        return e.find(function(e) {
            return e.value == t
        })
    });
    e.getSelectedProcessTypeObject = j;
    var I = (0, r.createSelector)([L, B], function(e, t) {
        return t.map(function(t) {
            return e.find(function(e) {
                return e.value === t.processType
            })
        })
    });
    e.getSelectedProcessTypesObjectsB2B = I;
    var R = (0, r.createSelector)(I, function(e) {
        return e.map(function(e) {
            return e.loyalties
        })
    });
    e.getAvailableLoyaltiesLengthsB2B = R;
    var A = (0, r.createSelector)(R, function(e) {
        return e && e.map(function(e) {
            return e && e.map(o.mapObjectArrayToSelect) || []
        })
    });
    e.getLoyaltyLengthFiltersForSelectB2B = A;
    var _ = (0, r.createSelector)(j, function(e) {
        return e && e.loyalties
    });
    e.getAvailableLoyaltiesLengths = _;
    var N = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.useDefaultOfferType
    });
    e.getUseDefaultOfferType = N;
    var V = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.useDefaultProcess
    });
    e.getUseDefaultProcess = V;
    var k = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.useDefaultLoyalty
    });
    e.getUseDefaultLoyalty = k;
    var E = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.useDefaultOffer
    });
    e.getUseDefaultOffer = E;
    var U = (0, r.createSelector)(L, function(e) {
        return e.processType
    });
    e.getProcessTypeFiltersData = U;
    var G = (0, r.createSelector)(L, function(e) {
        return e.loyaltyLength
    });
    e.getLoyaltyLengthFiltersData = G;
    var H = (0, r.createSelector)(L, function(e) {
        return e && e.map(o.mapObjectArrayToSelect) || []
    });
    e.getProcessTypeFiltersForSelect = H;
    var w = (0, r.createSelector)(_, function(e) {
        return e && e.map(o.mapObjectArrayToSelect) || []
    });
    e.getLoyaltyLengthFiltersForSelect = w;
    var W = (0, r.createSelector)(w, function(e) {
        return e.sort(function(e, t) {
            return 0 === e.value ? 1 : 0 === t.value || e.value < t.value ? -1 : e.value > t.value ? 1 : 0
        })
    });
    e.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect = W;
    var q = (0, r.createSelector)(h, function(e) {
        return e && (0, o.mapStringToJsonObject)((0, o.hashProcessType)(e))
    });
    e.getSelectedFiltersProcessType = q;
    var J = (0, r.createSelector)([h, D], function(e, t) {
        return e && t && e.loyaltyLength && e.loyaltyLength[t]
    });
    e.getSelectedLoyaltyLengthValue = J;
    var Z = (0, r.createSelector)([d, D, y], function(e, t, r) {
        return (0, o.shouldDisableAddToCart)(e, t, r)
    });
    e.getDisableAddToCart = Z;
    var z = (0, r.createSelector)([d, D, y, t.getFiltersState], function(e, t, r, n) {
        return (0, o.getVerifiedMsisdnFromFilters)(n) && (0, o.shouldCallOffersWithMsisdn)(e, t, r)
    });
    e.getCallOffersWithMsisdn = z;
    var K = (0, r.createSelector)(t.getFiltersState, function(e) {
        return (0, o.getVerifiedMsisdnFromFilters)(e)
    });
    e.getVerifiedMsisdn = K;
    var Q = (0, r.createSelector)(t.getOffers, function(e) {
            return e.selectedRateplanBaseProductId
        }),
        X = (0, r.createSelector)([x, D, J, a, Q], function(e, t, r, n, o) {
            return "offerType=" + e + "&processType=" + t + "&loyalty=" + r + (n ? "&convergence=true" : "") + "&serviceplan=" + o
        });
    e.getFiltersUrl = X;
    var Y = (0, r.createSelector)(D, function(e) {
        return -1 !== s.indexOf(e)
    });
    e.isMsisdndVerificationRequired = Y;
    var $ = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.cmsConf
    });
    e.getOfferTypeCmsConf = $;
    var ee = (0, r.createSelector)([$, x], function(e, t) {
        return e && e[t] && e[t].extProcessSelectConfig
    });
    e.getExtProcessSelectConfig = ee;
    var te = (0, r.createSelector)([$, x], function(e, t) {
        return e && e[t] && e[t].clientContextRole || "SOFT_BUNDLE_COV"
    });
    e.getClientContextRole = te;
    var re = (0, r.createSelector)([ee, H], o.filterAvailableProcessOptions);
    e.getExtProcessSelectConfigFiltered = re;
    var ne = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.offerFiltersLoading
    });
    e.getOfferFiltersLoading = ne;
    var oe = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.offerTypeFiltersCached
    });
    e.getOfferTypeFiltersCached = oe;
    var ie = (0, r.createSelector)(t.getFiltersState, function(e) {
        return e.processForMsisdn
    });
    e.getProcessForMsisdn = ie;
    var le = (0, r.createSelector)([D, K, ie], function(e, t, r) {
        return t && r && r[t] || e
    });
    e.getSelectedProcess = le;
    var ce = (0, r.createSelector)($, function(e) {
        return Object.values(void 0 !== e && !!e && e).map(function(e) {
            return e.market
        }).find(Boolean)
    });
    e.getOfferTypeCmsConfMarket = ce
});
//# sourceMappingURL=filters.js.map