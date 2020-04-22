define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.registerMaxMonthlyPriceCMSConf = _exports.registerOneTimePriceCMSConf = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var registerOneTimePriceCMSConf = function registerOneTimePriceCMSConf(cmsConf) {
        return {
            type: ACTIONS.REGISTER_ONE_TIME_PRICE_CMS_CONF,
            cmsConf: cmsConf
        };
    };

    _exports.registerOneTimePriceCMSConf = registerOneTimePriceCMSConf;

    var registerMaxMonthlyPriceCMSConf = function registerMaxMonthlyPriceCMSConf(cmsConf) {
        return {
            type: ACTIONS.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF,
            cmsConf: cmsConf
        };
    };

    _exports.registerMaxMonthlyPriceCMSConf = registerMaxMonthlyPriceCMSConf;
});
//# sourceMappingURL=metaData.js.map