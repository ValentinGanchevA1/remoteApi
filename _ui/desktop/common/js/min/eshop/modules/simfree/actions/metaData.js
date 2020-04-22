define(["exports", "../actionTypes"], function(e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.registerMaxMonthlyPriceCMSConf = e.registerOneTimePriceCMSConf = void 0, r = babelHelpers.interopRequireWildcard(r);
    e.registerOneTimePriceCMSConf = function(e) {
        return {
            type: r.REGISTER_ONE_TIME_PRICE_CMS_CONF,
            cmsConf: e
        }
    };
    e.registerMaxMonthlyPriceCMSConf = function(e) {
        return {
            type: r.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF,
            cmsConf: e
        }
    }
});
//# sourceMappingURL=metaData.js.map