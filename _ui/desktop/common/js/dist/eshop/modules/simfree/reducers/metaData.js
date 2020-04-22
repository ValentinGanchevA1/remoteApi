define(["exports", "../actionTypes", "../remoteApi", "redux", "eshop/utils/OnlineUtils"], function(_exports, ACTIONS, _remoteApi, _redux, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.filterConfigurationFetched = _exports.maxMonthlyPriceFilterCmsConf = _exports.oneTimePriceFilterCmsConf = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    var oneTimePriceFilterCmsConf = function oneTimePriceFilterCmsConf() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.REGISTER_ONE_TIME_PRICE_CMS_CONF:
                var newState = {};
                action.cmsConf && action.cmsConf.map(function(c) {
                    return (newState[c.offerType] || (newState[c.offerType] = [])) && newState[c.offerType].push(c);
                });
                Object.keys(newState).map(function(key) {
                    return newState[key] = newState[key].sort(function(a, b) {
                        return a.from - b.from;
                    });
                });
                return newState || state;

            default:
                return state;
        }
    };

    _exports.oneTimePriceFilterCmsConf = oneTimePriceFilterCmsConf;

    var maxMonthlyPriceFilterCmsConf = function maxMonthlyPriceFilterCmsConf() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF:
                var newState = {};
                action.cmsConf && action.cmsConf.map(function(c) {
                    return (newState[c.offerType] || (newState[c.offerType] = [])) && newState[c.offerType].push(c);
                });
                Object.keys(newState).map(function(key) {
                    return newState[key] = newState[key].sort(function(a, b) {
                        return a.alias ? -1 : a.to - b.to;
                    });
                });
                return newState || state;

            default:
                return state;
        }
    };

    _exports.maxMonthlyPriceFilterCmsConf = maxMonthlyPriceFilterCmsConf;

    var filterConfigurationFetched = function filterConfigurationFetched() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_FILTER_CONFIGURATION: {
                return true;
            }

            default:
                return state;
        }
    };

    _exports.filterConfigurationFetched = filterConfigurationFetched;
});
//# sourceMappingURL=metaData.js.map