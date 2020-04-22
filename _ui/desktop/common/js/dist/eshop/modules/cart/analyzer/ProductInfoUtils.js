define(["exports", "lodash", "../../checkout/constants/AddonTypeEnum"], function(_exports, _lodash, _AddonTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isVasATvPack = isVasATvPack;
    _exports.getGadgets = getGadgets;
    _exports.getServices = getServices;
    _exports.getOfficesServices = getOfficesServices;
    _exports.getTvPackages = getTvPackages;
    _exports.getDevices = getDevices;
    _exports.getNumberOfTerminals = getNumberOfTerminals;
    _exports.getNumberOfGadgets = getNumberOfGadgets;
    _exports.getConfigurables = getConfigurables;
    _exports.getServicesRelatedToBonus = getServicesRelatedToBonus;
    _exports.getSecondaryChoiceDiscountServicesRelated = getSecondaryChoiceDiscountServicesRelated;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _AddonTypeEnum = babelHelpers.interopRequireDefault(_AddonTypeEnum);

    /*
        TODO
        MULTICART BREAKER
        It's hardcoded to get the very first configurables instance,
        multicart needs support for multiple configurables instances.
    */
    var DEFAULT_CONFIGURABLES_INSTANCE = 0;

    function isVasATvPack(configurables, vas) {
        return getTvPackages(configurables).map(function(pack) {
            return pack.id;
        }).includes(vas.productCode);
    }

    function getGadgets(configurables) {
        return getProductsByType(configurables, "gadgets");
    }

    function getServices(configurables) {
        return getProductsByType(configurables, "services");
    }

    function getOfficesServices(configurables) {
        return getProductsByType(configurables, "b2bServices");
    }

    function getTvPackages(configurables) {
        return getProductsByType(configurables, "tvPackages");
    }

    function getDevices(configurables) {
        return getProductsByType(configurables, "devices");
    }

    function getNumberOfTerminals(configurables) {
        return numberOfProductsByType(configurables, "devices");
    }

    function getNumberOfGadgets(configurables) {
        return numberOfProductsByType(configurables, "gadgets");
    }

    function getConfigurables(configurables) {
        return configurables && configurables.length > 0 && configurables[DEFAULT_CONFIGURABLES_INSTANCE] ? configurables[DEFAULT_CONFIGURABLES_INSTANCE] : null;
    }

    function numberOfProductsByType(configurables, productsLabel) {
        return configurables && configurables[productsLabel] ? configurables[productsLabel].length : 0;
    }

    function getProductsByType(configurables, productsLabel) {
        return numberOfProductsByType(configurables, productsLabel) > 0 ? configurables[productsLabel].slice() : [];
    }

    function getServicesRelatedToBonus(configurables) {
        var result = {};
        configurables.map(function(configurable) {
            result[configurable.propositionId] = [].concat(babelHelpers.toConsumableArray(getServices(configurable)), babelHelpers.toConsumableArray(getTvPackages(configurable)), babelHelpers.toConsumableArray(getDevices(configurable))).filter(function(serv) {
                return !!serv.linkedWithSecondaryChoice;
            });
        });
        return result;
    }

    function getSecondaryChoiceDiscountServicesRelated(configurables) {
        var result = {};
        configurables.map(function(configurable) {
            result[configurable.propositionId] = babelHelpers.toConsumableArray(getServices(configurable)).filter(function(service) {
                return service.productType !== _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
            });
        });
        return result;
    }
});
//# sourceMappingURL=ProductInfoUtils.js.map