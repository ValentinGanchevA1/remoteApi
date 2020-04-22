define(["exports", "eshop/modules/core/enum/MarketSegment"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.filterAvailableProcessOptions = e.filterOptionsRecursively = e.getVerifiedMsisdnFromFilters = e.getPagePrefixUrl = e.isMarketEqual = e.filtersMatching = e.shouldCallOffersWithMsisdn = e.shouldDisableAddToCart = e.findDefaultOptionInArrayOrSmallestValue = e.findDefaultOptionInArrayOrBiggestValue = e.findDefaultOptionInArrayOrPickFirst = e.hashProcessType = e.hashFilters = e.mapRateplanIdsToJsonObject = e.hashRateplanIds = e.mapStringToJsonObject = e.mapObjectArrayToSelect = void 0, n = babelHelpers.interopRequireDefault(n);
    e.mapObjectArrayToSelect = function(e) {
        return {
            value: e.value,
            description: e.description
        }
    };

    function t(e) {
        return JSON.parse(e)
    }
    e.mapStringToJsonObject = t;

    function r(e) {
        return JSON.stringify({
            productIds: e
        })
    }
    e.hashRateplanIds = r;
    e.mapRateplanIdsToJsonObject = function(e) {
        return t(r(e))
    };
    e.hashFilters = function(e) {
        return e && JSON.stringify({
            loyaltyLength: e.loyaltyLength && e.loyaltyLength[e.processType],
            processType: e.processType,
            offerType: e.offerType,
            msisdn: e.verifiedMsisdn.value || ""
        })
    };
    e.hashProcessType = function(e) {
        return JSON.stringify({
            processType: e.processType
        })
    };
    e.findDefaultOptionInArrayOrPickFirst = function(e) {
        return e.find(function(e) {
            return e.defaultOption
        }) || e[0]
    };
    e.findDefaultOptionInArrayOrBiggestValue = function(e) {
        return e.find(function(e) {
            return e.defaultOption
        }) || Math.max.apply(Math, e.map(function(e) {
            return e.value
        }))
    };
    e.findDefaultOptionInArrayOrSmallestValue = function(e) {
        var t = e.find(function(e) {
                return e.defaultOption || 24 == e.value
            }),
            n = Math.min.apply(Math, e.map(function(e) {
                return e.value
            }));
        return t && t.value || n
    };
    e.shouldDisableAddToCart = function(e, t, n) {
        return n && "ACTIVATION" !== t && !e.isPositive
    };
    e.shouldCallOffersWithMsisdn = function(e, t, n) {
        return n && "ACTIVATION" !== t && e && e.isPositive
    };

    function i(e) {
        var t = e.verifiedMsisdn;
        return t.context && s(t.context.market, e.marketContext) && t.context.offer === e.selected.offerType && t.context.process === e.selected.processType
    }
    e.filtersMatching = i;
    var s = function(e, t) {
        return e === t || n.default.isB2B(e) && n.default.isB2B(t)
    };
    e.isMarketEqual = s;
    e.getPagePrefixUrl = function(e) {
        return e + (window.location.pathname.includes("/sklep") ? "/sklep" : "/akcesoria")
    };
    e.getVerifiedMsisdnFromFilters = function(e) {
        return i(e) ? e.verifiedMsisdn.value : null
    };

    function o(e, t) {
        return e.options && e.options.length ? (e.options = e.options.filter(function(e) {
            return o(e, t)
        }), e.options.length) : e.process && t.includes(e.process)
    }
    e.filterOptionsRecursively = o;
    e.filterAvailableProcessOptions = function(e, t) {
        var n = t && t.map(function(e) {
                return e.value
            }),
            r = e && e.options && JSON.parse(JSON.stringify(e)).options.filter(function(e) {
                return o(e, n)
            });
        return Object.assign({}, e, {
            options: r || []
        })
    }
});
//# sourceMappingURL=utils.js.map