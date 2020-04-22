import _ from "lodash";
import AddonType from "../../checkout/constants/AddonTypeEnum";

/*
    TODO
    MULTICART BREAKER
    It's hardcoded to get the very first configurables instance,
    multicart needs support for multiple configurables instances.
*/
const DEFAULT_CONFIGURABLES_INSTANCE = 0;

export function isVasATvPack(configurables, vas) {
    return getTvPackages(configurables).map(pack => pack.id).includes(vas.productCode);
}

export function getGadgets(configurables) {
    return getProductsByType(configurables, "gadgets");
}

export function getServices(configurables) {
    return getProductsByType(configurables, "services");
}

export function getOfficesServices(configurables) {
    return getProductsByType(configurables, "b2bServices");
}

export function getTvPackages(configurables) {
    return getProductsByType(configurables, "tvPackages");
}

export function getDevices(configurables) {
    return getProductsByType(configurables, "devices");
}

export function getNumberOfTerminals(configurables) {
    return numberOfProductsByType(configurables, "devices");
}

export function getNumberOfGadgets(configurables) {
    return numberOfProductsByType(configurables, "gadgets");
}

export function getConfigurables(configurables) {
    return configurables &&
        configurables.length > 0 &&
        configurables[DEFAULT_CONFIGURABLES_INSTANCE] ?
        configurables[DEFAULT_CONFIGURABLES_INSTANCE] :
        null;
}

function numberOfProductsByType(configurables, productsLabel) {
    return configurables &&
        configurables[productsLabel] ?
        configurables[productsLabel].length :
        0;
}

function getProductsByType(configurables, productsLabel) {
    return numberOfProductsByType(configurables, productsLabel) > 0 ?
        configurables[productsLabel].slice() : [];
}

export function getServicesRelatedToBonus(configurables) {
    let result = {};
    configurables.map(configurable => {
        result[configurable.propositionId] = [...getServices(configurable), ...getTvPackages(configurable), ...getDevices(configurable)]
            .filter(serv => !!serv.linkedWithSecondaryChoice);
    });
    return result;
}

export function getSecondaryChoiceDiscountServicesRelated(configurables) {
    let result = {};
    configurables.map(configurable => {
        result[configurable.propositionId] = [...getServices(configurable)]
            .filter(service => service.productType !== AddonType.SECONDARY_CHOICE_DISCOUNT);
    });
    return result;
}