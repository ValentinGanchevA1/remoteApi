define(["exports", "../actionTypes", "../remoteApi", "redux", "eshop/utils/OnlineUtils"], function(e, i, t, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.filterConfigurationFetched = e.maxMonthlyPriceFilterCmsConf = e.oneTimePriceFilterCmsConf = void 0, i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n);
    e.oneTimePriceFilterCmsConf = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.REGISTER_ONE_TIME_PRICE_CMS_CONF:
                var o = {};
                return n.cmsConf && n.cmsConf.map(function(e) {
                    return (o[e.offerType] || (o[e.offerType] = [])) && o[e.offerType].push(e)
                }), Object.keys(o).map(function(e) {
                    return o[e] = o[e].sort(function(e, t) {
                        return e.from - t.from
                    })
                }), o || r;
            default:
                return r
        }
    };
    e.maxMonthlyPriceFilterCmsConf = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF:
                var o = {};
                return n.cmsConf && n.cmsConf.map(function(e) {
                    return (o[e.offerType] || (o[e.offerType] = [])) && o[e.offerType].push(e)
                }), Object.keys(o).map(function(e) {
                    return o[e] = o[e].sort(function(e, t) {
                        return e.alias ? -1 : e.to - t.to
                    })
                }), o || r;
            default:
                return r
        }
    };
    e.filterConfigurationFetched = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.FETCH_FILTER_CONFIGURATION:
                return !0;
            default:
                return r
        }
    }
});
//# sourceMappingURL=metaData.js.map