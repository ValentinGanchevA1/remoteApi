define(["exports", "eshop/flux/utils/OraApiUtils", "jquery", "eshop/utils/OnlineUtils"], function(_exports, _OraApiUtils, _jquery, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var availableProductsKey = (0, _jquery.default)('#availableProductsKey').val();

    var getAvailableProductKeyObject = function getAvailableProductKeyObject() {
        return availableProductsKey ? {
            availableProductsKey: availableProductsKey
        } : {};
    };

    function prepareFilters(avProductsKey, deviceCode) {
        var productsKey = avProductsKey ? avProductsKey : availableProductsKey;
        var fkPk = (0, _jquery.default)('#filtersComponentPk').val();
        return {
            filtersComponentPk: fkPk,
            availableProductsKey: productsKey,
            deviceCode: deviceCode,
            isCanonicalLink: _OnlineUtils.default.isCanonicalLink()
        };
    }

    var component = (0, _jquery.default)('#propositionCarouselId').val();

    var getComponentKeyObject = function getComponentKeyObject() {
        return component ? {
            component: component
        } : {};
    };

    function prepareGetDocumentsParameters(offers, processType) {
        return Object.assign({}, offers, processType);
    }

    function prepareGetOfferParameters(filters, availableProductsKeyVal, deviceCode, isInitialFetch) {
        //TODO pobranie PK komponentu do atrybutow klasyfikacyjnych jak w prepareFilters
        //TODO zrobic cos w stylu Object.assign({},filters,{classAttrPk})
        //FIXME cos zrobic z tym strzalem bo bez terminalOption nic nie zwraca
        //FIXME no i do chuja wafla trzeba ogarnac zeby nie zwracalo pierdyliard rzeczy te getOffers
        var availableProductsKey = availableProductsKeyVal ? {
            availableProductsKey: availableProductsKeyVal
        } : getAvailableProductKeyObject();
        var device = deviceCode ? {
            deviceCode: deviceCode
        } : {};
        return Object.assign({}, {
            processType: filters.processType,
            loyaltyLength: filters.loyaltyLength[filters.processType],
            isInitialFetch: isInitialFetch,
            isCanonicalLink: _OnlineUtils.default.isCanonicalLink()
        }, device, availableProductsKey, getComponentKeyObject());
    }

    function prepareConvergentOfferParameters(processType, deviceCode, propositionIds) {
        return {
            processType: processType,
            deviceCode: deviceCode,
            propositionIds: propositionIds
        };
    }

    function prepareCheckAndGetOfferParameters(msisdn, filters, availableProductsKeyVal, deviceCode) {
        _OnlineUtils.default.removePwaSuflerContextFromSession();

        var availableProductsKey = availableProductsKeyVal ? {
            availableProductsKey: availableProductsKeyVal
        } : getAvailableProductKeyObject();
        var device = deviceCode ? {
            deviceCode: deviceCode
        } : {};
        return _objectSpread({
            msisdn: msisdn,
            processType: filters.processType,
            loyaltyLength: filters.loyaltyLength[filters.processType]
        }, device, {}, availableProductsKey, {}, getComponentKeyObject());
    }

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    };

    var _default = {
        getOffers: function getOffers(filters) {
            var availableProductsKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var deviceCode = arguments.length > 2 ? arguments[2] : undefined;
            var isInitialFetch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            return (0, _OraApiUtils.get)(prepareUrl("/offersList/offers"), prepareGetOfferParameters(filters, availableProductsKey, deviceCode, isInitialFetch));
        },
        getOffersWithoutOfferSelector: function getOffersWithoutOfferSelector(filters) {
            var availableProductsKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var deviceCode = arguments.length > 2 ? arguments[2] : undefined;
            var isInitialFetch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
            return (0, _OraApiUtils.get)(prepareUrl("/offersList/offersWithoutOfferSelector"), prepareGetOfferParameters(filters, availableProductsKey, deviceCode, isInitialFetch));
        },
        getConvergentOffers: function getConvergentOffers(processType, deviceCode, propositionIds) {
            return (0, _OraApiUtils.get)(prepareUrl("/convergentOffersList/offers"), prepareConvergentOfferParameters(processType, deviceCode, propositionIds));
        },
        getDocuments: function getDocuments(offers, processType) {
            return (0, _OraApiUtils.get)(prepareUrl("/documents/getDocumentsForProducts"), prepareGetDocumentsParameters(offers, processType));
        },
        getOfferFilters: function getOfferFilters(availableProductsKey) {
            var deviceCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            return (0, _OraApiUtils.get)(prepareUrl("/filters/offerFilters"), prepareFilters(availableProductsKey, deviceCode));
        },
        postToCart: function postToCart(params) {
            return (0, _OraApiUtils.postJson)(prepareUrl("/koszyk/oovdodaj"), params);
        },
        postAssignmentToCart: function postAssignmentToCart(param) {
            return (0, _OraApiUtils.post)(prepareUrl("/koszyk/addServiceTransfer"), param);
        },
        postFixAssignmentToCart: function postFixAssignmentToCart(param) {
            return (0, _OraApiUtils.post)(prepareUrl("/fix/cart/addServiceTransfer"), param);
        },
        checkAndGetOffers: function checkAndGetOffers(msisdn, filters, availableProductsKey, deviceCode) {
            return (0, _OraApiUtils.postJson)(prepareUrl("/offersList/checkAndGetOffers"), prepareCheckAndGetOfferParameters(msisdn, filters, availableProductsKey, deviceCode));
        },
        getContractRole: function getContractRole(params) {
            return (0, _OraApiUtils.get)(prepareUrl("/contractRole"), params);
        },
        getFirstOffer: function getFirstOffer(params) {
            return (0, _OraApiUtils.get)(prepareUrl("/offersList/firstOffer"), params);
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map