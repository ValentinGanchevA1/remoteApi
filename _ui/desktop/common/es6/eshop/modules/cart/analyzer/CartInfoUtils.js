import _ from "lodash";

import EntryType from "../enum/EntryType";
import EntryParams from "../enum/EntryParams";
import {
    removeAllFromArray
} from "./ArrayUtils";
import AddonType from "../../checkout/constants/AddonTypeEnum";
import ProviderType from "../../checkout/constants/ProviderTypeEnum";
import BoundedMainService from "../../checkout/constants/BoundedMainServiceEnum";
import TvPackagesChoiceFilter from "../../fix/enum/TvPackagesChoiceFilter"


function mapCollectionByParam(colection, paramName) {
    return colection ? colection.map(entry => entry[paramName]) : [];
}

function filterCollectionByParam(collection, paramName, paramValue) {
    return collection ? collection.filter(entry => entry[paramName] === paramValue) : [];
}

function mapServiceAndItsDevices(service) {
    if (!service) {
        return [];
    }
    return [
        service.code,
        ...mapCollectionByParam(service.devices, EntryParams.CODE)
    ];
}

export function getCartProductsFromEntry(entry) {
    if (entry.entryType === EntryType.MOBILE) {
        return getCartProductsFromMobileEntry(entry);
    } else {
        return getCartProductsFromFixEntry(entry);
    }
}

export function getCartProductsFromFixEntry(entry) {
    return [
        ...mapCollectionByParam(entry.vases, EntryParams.PRODUCT_CODE),
        ...mapCollectionByParam(entry.terminals, EntryParams.PRODUCT_CODE),
        ...mapCollectionByParam(entry.gadgets, EntryParams.PRODUCT_CODE),
        ...mapCollectionByParam(filterCollectionByParam(entry.migratedProducts, EntryParams.ACTIVE, true), EntryParams.PRODUCT_CODE),
        ...mapServiceAndItsDevices(entry.broadbandFixProduct),
        ...mapServiceAndItsDevices(entry.tvFixProduct),
        ...mapServiceAndItsDevices(entry.voipFixProduct)
    ];
}

export function getCartProductsFromMobileEntry(entry) {
    const cartProducts = [
        ...mapCollectionByParam(entry.vases, EntryParams.PRODUCT_CODE),
        ...mapCollectionByParam(entry.terminals, EntryParams.PRODUCT_CODE),
        ...mapCollectionByParam(entry.gadgets, EntryParams.PRODUCT_CODE),
        ...mapCollectionByParam(entry.euroSets, EntryParams.PRODUCT_CODE)
    ];
    if (entry.simCard) {
        cartProducts.push(entry.simCard.id);
    }
    return cartProducts;
}

export function getCartProductsFinePrintFromFixEntry(entry) {
    return [
        ...mapCollectionByParam(entry.vases, EntryParams.FINE_PRINT),
        ...mapCollectionByParam(entry.terminals, EntryParams.FINE_PRINT),
        ...mapCollectionByParam(entry.gadgets, EntryParams.FINE_PRINT)
    ];
}

export function getPresentableProductsFromConfigurables(configurables) {
    if (!configurables) {
        return [];
    }
    return [
        ...mapCollectionByParam(configurables.tvPackages, EntryParams.ID),
        ...mapCollectionByParam(configurables.devices, EntryParams.ID),
        ...mapCollectionByParam(configurables.services, EntryParams.ID),
        ...mapCollectionByParam(configurables.gadgets, EntryParams.ID)
    ];
}

const stringCompare = (field) => (a, b) => {
    if (a[field]) {
        return a[field].localeCompare(b[field]);
    } else if (b[field]) {
        return -b[field].localeCompare(a[field]);
    } else {
        return 0;
    }
};

const booleanCompare = (trueFirst) => (field) => (a, b) => {
    if (a[field] && !b[field]) {
        return trueFirst ? -1 : 1;
    }
    if (b[field] && !a[field]) {
        return trueFirst ? 1 : -1;
    }
    return 0;
};

const trueFirst = booleanCompare(true);

const falseFirst = booleanCompare(false);

const numberCompare = (field) => (a, b) => {
    return a[field] - b[field];
};

const arrayLengthComparator = (arrayField) => (a, b) => {
    return numberCompare("length")(a[arrayField], b[arrayField]);
};

const revertOrder = (comparator) => (a, b) => {
    return -1 * comparator(a, b);
};

const enumCompare = (field) => (enumOrder) => (a, b) => {
    let aValue = a[field];
    let bValue = b[field];
    if (!enumOrder) {
        return 0;
    }
    let aIndex = enumOrder.indexOf(aValue);
    if (aIndex < 0) {
        aIndex = Number.MAX_SAFE_INTEGER;
    }
    let bIndex = enumOrder.indexOf(bValue);
    if (bIndex < 0) {
        bIndex = Number.MAX_SAFE_INTEGER;
    }
    return aIndex - bIndex;
};

const stackableComparator = (selfComparator) => (nextStackableComparator) => (a, b) => {
    let selfValue = selfComparator(a, b);
    if (selfValue !== 0) {
        return selfValue;
    }
    if (nextStackableComparator) {
        return nextStackableComparator(a, b);
    }
    return 0;
};

const simpleComparator = (selfComparator) => (a, b) => {
    return stackableComparator(selfComparator)(null)(a, b);
};

export const compareByMandatoryAndTitle = (a, b) => {
    let byMandatory = falseFirst("mandatory");
    let byTitle = stringCompare("title");
    return stackableComparator(byMandatory)(
        simpleComparator(byTitle)
    )(a, b);
};

export const compareByProductListAndMandatoryAndTitle = (orderTable) => (a, b) => {
    let byProductCode = enumCompare("id")(orderTable);
    let byMandatory = falseFirst("mandatory");
    let byTitle = stringCompare("title");
    return stackableComparator(byProductCode)(
        stackableComparator(byMandatory)(
            simpleComparator(byTitle)
        )
    )(a, b);
};

export const compareByProductCodeListAndMandatoryAndTitle = (orderTable) => (a, b) => {
    let byProductCode = enumCompare("productCode")(orderTable);
    let byMandatory = falseFirst("mandatory");
    let byTitle = stringCompare("title");
    return stackableComparator(byProductCode)(
        stackableComparator(byMandatory)(
            simpleComparator(byTitle)
        )
    )(a, b);
};

export const compareByProductListAndPartnerAndMandatoryAndTitle = (orderTable) => (a, b) => {
    let byProductCode = enumCompare("id")(orderTable);
    let byPartner = enumCompare("provider")([ProviderType.OPTV, ProviderType.NC, ProviderType.OTHER]);
    let byMandatory = falseFirst("mandatory");
    let byTitle = stringCompare("title");
    return stackableComparator(byProductCode)(
        stackableComparator(byPartner)(
            stackableComparator(byMandatory)(
                simpleComparator(byTitle)
            )
        )
    )(a, b);
};

export const compareByPartnerAndMandatoryAndTitle = (a, b) => {
    let byPartner = enumCompare("provider")([ProviderType.OPTV, ProviderType.NC, ProviderType.OTHER]);
    let byMandatory = falseFirst("mandatory");
    let byTitle = stringCompare("title");
    return stackableComparator(byPartner)(
        stackableComparator(byMandatory)(
            simpleComparator(byTitle)
        )
    )(a, b);
};

const addComparatorInfoToCombination = (combination, previousCombination) => {
    let previousCombinationWithoutAutoadded = removeAllFromArray(previousCombination.products, previousCombination.autoadded);
    let combinationWithoutAutoadded = removeAllFromArray(combination.products, combination.autoadded);
    combination.added = removeAllFromArray(combinationWithoutAutoadded, previousCombinationWithoutAutoadded);
    combination.missing = removeAllFromArray(previousCombinationWithoutAutoadded, combinationWithoutAutoadded);
    combination.comparatorSupport = true;
};

export const compareCombinations = (previousCombination) => (combinationA, combinationB) => {
    if (!combinationA.comparatorSupport) {
        addComparatorInfoToCombination(combinationA, previousCombination);
    }
    if (!combinationB.comparatorSupport) {
        addComparatorInfoToCombination(combinationB, previousCombination);
    }
    let byLastAction = trueFirst("lastActionIncluded");
    let byLeastAdded = revertOrder(arrayLengthComparator("added"));
    let byMostSurvived = arrayLengthComparator("missing");
    return stackableComparator(byLastAction)(
        stackableComparator(byMostSurvived)(
            simpleComparator(byLeastAdded)
        )
    )(combinationA, combinationB);
};

const filterCollectionWith = (filterFunction) => (collection) => {
    return _.filter(collection, filterFunction);
};

const SECONDARY_CHOICE_CATEGORIES = [TvPackagesChoiceFilter.TV_DEFAULT_CHOICE_PRODUCT, TvPackagesChoiceFilter.TV_SECONDARY_CHOICE_PRODUCT];

const supportsFilteringByCategory = (vas) => {
    return (vas.addonType === AddonType.TVOPTIONAL || vas.addonType === AddonType.TVMAIN);
};

const isRestrictedByCategories = (vas, categories) => {
    return vas.supercategories && vas.supercategories.some(category => categories.indexOf(category) !== -1)
};

const belongsToCategory = (vas, category) => {
    return vas.supercategories && vas.supercategories.indexOf(category) !== -1;
};

export const Filters = () => {
    return {
        ASSITS: filterCollectionWith(vas => vas.addonType === AddonType.ASSIST),
        TV_VASES: filterCollectionWith(vas => vas.addonType !== AddonType.ASSIST && vas.boundedMainService === BoundedMainService.TV),
        NEO_VASES: filterCollectionWith(vas => vas.addonType !== AddonType.ASSIST && vas.addonType !== AddonType.SECONDARY_CHOICE_DISCOUNT && vas.boundedMainService === BoundedMainService.NEO),
        MAIN_TV: filterCollectionWith(vas => vas.addonType === AddonType.TVMAIN),
        MAIN_OPTV: filterCollectionWith(vas => vas.addonType === AddonType.TVMAIN && vas.provider !== ProviderType.NC),
        OPTIONAL_TV: filterCollectionWith(vas => vas.addonType === AddonType.TVOPTIONAL),
        OPTIONAL_OPTV: filterCollectionWith(vas => vas.addonType === AddonType.TVOPTIONAL && vas.provider !== ProviderType.NC),
        BASIC_TV: filterCollectionWith(vas => vas.addonType === AddonType.TVBASIC),
        NOT_BASIC_TV: filterCollectionWith(vas => vas.addonType !== AddonType.TVBASIC),
        MAIN_NC: filterCollectionWith(vas => vas.addonType === AddonType.TVMAIN && vas.provider === ProviderType.NC),
        OPTIONAL_NC: filterCollectionWith(vas => vas.addonType === AddonType.TVOPTIONAL && vas.provider === ProviderType.NC),
        ALL_OPTV: filterCollectionWith(vas => (vas.addonType === AddonType.TVMAIN || vas.addonType === AddonType.TVOPTIONAL) && vas.provider !== ProviderType.NC),
        ALL_NC: filterCollectionWith(vas => (vas.addonType === AddonType.TVMAIN || vas.addonType === AddonType.TVOPTIONAL) && vas.provider === ProviderType.NC),
        MIGRATED: filterCollectionWith(vas => vas.inputType),
        NOT_MIGRATED: filterCollectionWith(vas => !vas.inputType),
        VOICE_VASES: filterCollectionWith(vas => !vas.addonType && (vas.boundedMainService === null || vas.boundedMainService === BoundedMainService.OTHER)),
        TV_DEFAULT_CHOICE_PRODUCT: filterCollectionWith(vas =>
            (supportsFilteringByCategory(vas) && isRestrictedByCategories(vas, SECONDARY_CHOICE_CATEGORIES) && !belongsToCategory(vas, TvPackagesChoiceFilter.TV_DEFAULT_CHOICE_PRODUCT))),
        TV_SECONDARY_CHOICE_PRODUCT: filterCollectionWith(vas =>
            (supportsFilteringByCategory(vas) && isRestrictedByCategories(vas, SECONDARY_CHOICE_CATEGORIES) && !belongsToCategory(vas, TvPackagesChoiceFilter.TV_SECONDARY_CHOICE_PRODUCT))),
        TV_LOYALTY_DURATION_12: filterCollectionWith(vas =>
            (vas.loyaltyDuration && vas.provider === ProviderType.NC && vas.loyaltyDuration !== 12 && vas.loyaltyDuration !== 0)),
        TV_LOYALTY_DURATION_24: filterCollectionWith(vas =>
            (vas.loyaltyDuration && vas.provider === ProviderType.NC && vas.loyaltyDuration !== 24 && vas.loyaltyDuration !== 0))
    }
};