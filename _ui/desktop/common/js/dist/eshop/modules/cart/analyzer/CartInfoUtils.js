define(["exports", "lodash", "../enum/EntryType", "../enum/EntryParams", "./ArrayUtils", "../../checkout/constants/AddonTypeEnum", "../../checkout/constants/ProviderTypeEnum", "../../checkout/constants/BoundedMainServiceEnum", "../../fix/enum/TvPackagesChoiceFilter"], function(_exports, _lodash, _EntryType, _EntryParams, _ArrayUtils, _AddonTypeEnum, _ProviderTypeEnum, _BoundedMainServiceEnum, _TvPackagesChoiceFilter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getCartProductsFromEntry = getCartProductsFromEntry;
    _exports.getCartProductsFromFixEntry = getCartProductsFromFixEntry;
    _exports.getCartProductsFromMobileEntry = getCartProductsFromMobileEntry;
    _exports.getCartProductsFinePrintFromFixEntry = getCartProductsFinePrintFromFixEntry;
    _exports.getPresentableProductsFromConfigurables = getPresentableProductsFromConfigurables;
    _exports.Filters = _exports.compareCombinations = _exports.compareByPartnerAndMandatoryAndTitle = _exports.compareByProductListAndPartnerAndMandatoryAndTitle = _exports.compareByProductCodeListAndMandatoryAndTitle = _exports.compareByProductListAndMandatoryAndTitle = _exports.compareByMandatoryAndTitle = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _EntryType = babelHelpers.interopRequireDefault(_EntryType);
    _EntryParams = babelHelpers.interopRequireDefault(_EntryParams);
    _AddonTypeEnum = babelHelpers.interopRequireDefault(_AddonTypeEnum);
    _ProviderTypeEnum = babelHelpers.interopRequireDefault(_ProviderTypeEnum);
    _BoundedMainServiceEnum = babelHelpers.interopRequireDefault(_BoundedMainServiceEnum);
    _TvPackagesChoiceFilter = babelHelpers.interopRequireDefault(_TvPackagesChoiceFilter);

    function mapCollectionByParam(colection, paramName) {
        return colection ? colection.map(function(entry) {
            return entry[paramName];
        }) : [];
    }

    function filterCollectionByParam(collection, paramName, paramValue) {
        return collection ? collection.filter(function(entry) {
            return entry[paramName] === paramValue;
        }) : [];
    }

    function mapServiceAndItsDevices(service) {
        if (!service) {
            return [];
        }

        return [service.code].concat(babelHelpers.toConsumableArray(mapCollectionByParam(service.devices, _EntryParams.default.CODE)));
    }

    function getCartProductsFromEntry(entry) {
        if (entry.entryType === _EntryType.default.MOBILE) {
            return getCartProductsFromMobileEntry(entry);
        } else {
            return getCartProductsFromFixEntry(entry);
        }
    }

    function getCartProductsFromFixEntry(entry) {
        return [].concat(babelHelpers.toConsumableArray(mapCollectionByParam(entry.vases, _EntryParams.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(mapCollectionByParam(entry.terminals, _EntryParams.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(mapCollectionByParam(entry.gadgets, _EntryParams.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(mapCollectionByParam(filterCollectionByParam(entry.migratedProducts, _EntryParams.default.ACTIVE, true), _EntryParams.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(mapServiceAndItsDevices(entry.broadbandFixProduct)), babelHelpers.toConsumableArray(mapServiceAndItsDevices(entry.tvFixProduct)), babelHelpers.toConsumableArray(mapServiceAndItsDevices(entry.voipFixProduct)));
    }

    function getCartProductsFromMobileEntry(entry) {
        var cartProducts = [].concat(babelHelpers.toConsumableArray(mapCollectionByParam(entry.vases, _EntryParams.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(mapCollectionByParam(entry.terminals, _EntryParams.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(mapCollectionByParam(entry.gadgets, _EntryParams.default.PRODUCT_CODE)), babelHelpers.toConsumableArray(mapCollectionByParam(entry.euroSets, _EntryParams.default.PRODUCT_CODE)));

        if (entry.simCard) {
            cartProducts.push(entry.simCard.id);
        }

        return cartProducts;
    }

    function getCartProductsFinePrintFromFixEntry(entry) {
        return [].concat(babelHelpers.toConsumableArray(mapCollectionByParam(entry.vases, _EntryParams.default.FINE_PRINT)), babelHelpers.toConsumableArray(mapCollectionByParam(entry.terminals, _EntryParams.default.FINE_PRINT)), babelHelpers.toConsumableArray(mapCollectionByParam(entry.gadgets, _EntryParams.default.FINE_PRINT)));
    }

    function getPresentableProductsFromConfigurables(configurables) {
        if (!configurables) {
            return [];
        }

        return [].concat(babelHelpers.toConsumableArray(mapCollectionByParam(configurables.tvPackages, _EntryParams.default.ID)), babelHelpers.toConsumableArray(mapCollectionByParam(configurables.devices, _EntryParams.default.ID)), babelHelpers.toConsumableArray(mapCollectionByParam(configurables.services, _EntryParams.default.ID)), babelHelpers.toConsumableArray(mapCollectionByParam(configurables.gadgets, _EntryParams.default.ID)));
    }

    var stringCompare = function stringCompare(field) {
        return function(a, b) {
            if (a[field]) {
                return a[field].localeCompare(b[field]);
            } else if (b[field]) {
                return -b[field].localeCompare(a[field]);
            } else {
                return 0;
            }
        };
    };

    var booleanCompare = function booleanCompare(trueFirst) {
        return function(field) {
            return function(a, b) {
                if (a[field] && !b[field]) {
                    return trueFirst ? -1 : 1;
                }

                if (b[field] && !a[field]) {
                    return trueFirst ? 1 : -1;
                }

                return 0;
            };
        };
    };

    var trueFirst = booleanCompare(true);
    var falseFirst = booleanCompare(false);

    var numberCompare = function numberCompare(field) {
        return function(a, b) {
            return a[field] - b[field];
        };
    };

    var arrayLengthComparator = function arrayLengthComparator(arrayField) {
        return function(a, b) {
            return numberCompare("length")(a[arrayField], b[arrayField]);
        };
    };

    var revertOrder = function revertOrder(comparator) {
        return function(a, b) {
            return -1 * comparator(a, b);
        };
    };

    var enumCompare = function enumCompare(field) {
        return function(enumOrder) {
            return function(a, b) {
                var aValue = a[field];
                var bValue = b[field];

                if (!enumOrder) {
                    return 0;
                }

                var aIndex = enumOrder.indexOf(aValue);

                if (aIndex < 0) {
                    aIndex = Number.MAX_SAFE_INTEGER;
                }

                var bIndex = enumOrder.indexOf(bValue);

                if (bIndex < 0) {
                    bIndex = Number.MAX_SAFE_INTEGER;
                }

                return aIndex - bIndex;
            };
        };
    };

    var stackableComparator = function stackableComparator(selfComparator) {
        return function(nextStackableComparator) {
            return function(a, b) {
                var selfValue = selfComparator(a, b);

                if (selfValue !== 0) {
                    return selfValue;
                }

                if (nextStackableComparator) {
                    return nextStackableComparator(a, b);
                }

                return 0;
            };
        };
    };

    var simpleComparator = function simpleComparator(selfComparator) {
        return function(a, b) {
            return stackableComparator(selfComparator)(null)(a, b);
        };
    };

    var compareByMandatoryAndTitle = function compareByMandatoryAndTitle(a, b) {
        var byMandatory = falseFirst("mandatory");
        var byTitle = stringCompare("title");
        return stackableComparator(byMandatory)(simpleComparator(byTitle))(a, b);
    };

    _exports.compareByMandatoryAndTitle = compareByMandatoryAndTitle;

    var compareByProductListAndMandatoryAndTitle = function compareByProductListAndMandatoryAndTitle(orderTable) {
        return function(a, b) {
            var byProductCode = enumCompare("id")(orderTable);
            var byMandatory = falseFirst("mandatory");
            var byTitle = stringCompare("title");
            return stackableComparator(byProductCode)(stackableComparator(byMandatory)(simpleComparator(byTitle)))(a, b);
        };
    };

    _exports.compareByProductListAndMandatoryAndTitle = compareByProductListAndMandatoryAndTitle;

    var compareByProductCodeListAndMandatoryAndTitle = function compareByProductCodeListAndMandatoryAndTitle(orderTable) {
        return function(a, b) {
            var byProductCode = enumCompare("productCode")(orderTable);
            var byMandatory = falseFirst("mandatory");
            var byTitle = stringCompare("title");
            return stackableComparator(byProductCode)(stackableComparator(byMandatory)(simpleComparator(byTitle)))(a, b);
        };
    };

    _exports.compareByProductCodeListAndMandatoryAndTitle = compareByProductCodeListAndMandatoryAndTitle;

    var compareByProductListAndPartnerAndMandatoryAndTitle = function compareByProductListAndPartnerAndMandatoryAndTitle(orderTable) {
        return function(a, b) {
            var byProductCode = enumCompare("id")(orderTable);
            var byPartner = enumCompare("provider")([_ProviderTypeEnum.default.OPTV, _ProviderTypeEnum.default.NC, _ProviderTypeEnum.default.OTHER]);
            var byMandatory = falseFirst("mandatory");
            var byTitle = stringCompare("title");
            return stackableComparator(byProductCode)(stackableComparator(byPartner)(stackableComparator(byMandatory)(simpleComparator(byTitle))))(a, b);
        };
    };

    _exports.compareByProductListAndPartnerAndMandatoryAndTitle = compareByProductListAndPartnerAndMandatoryAndTitle;

    var compareByPartnerAndMandatoryAndTitle = function compareByPartnerAndMandatoryAndTitle(a, b) {
        var byPartner = enumCompare("provider")([_ProviderTypeEnum.default.OPTV, _ProviderTypeEnum.default.NC, _ProviderTypeEnum.default.OTHER]);
        var byMandatory = falseFirst("mandatory");
        var byTitle = stringCompare("title");
        return stackableComparator(byPartner)(stackableComparator(byMandatory)(simpleComparator(byTitle)))(a, b);
    };

    _exports.compareByPartnerAndMandatoryAndTitle = compareByPartnerAndMandatoryAndTitle;

    var addComparatorInfoToCombination = function addComparatorInfoToCombination(combination, previousCombination) {
        var previousCombinationWithoutAutoadded = (0, _ArrayUtils.removeAllFromArray)(previousCombination.products, previousCombination.autoadded);
        var combinationWithoutAutoadded = (0, _ArrayUtils.removeAllFromArray)(combination.products, combination.autoadded);
        combination.added = (0, _ArrayUtils.removeAllFromArray)(combinationWithoutAutoadded, previousCombinationWithoutAutoadded);
        combination.missing = (0, _ArrayUtils.removeAllFromArray)(previousCombinationWithoutAutoadded, combinationWithoutAutoadded);
        combination.comparatorSupport = true;
    };

    var compareCombinations = function compareCombinations(previousCombination) {
        return function(combinationA, combinationB) {
            if (!combinationA.comparatorSupport) {
                addComparatorInfoToCombination(combinationA, previousCombination);
            }

            if (!combinationB.comparatorSupport) {
                addComparatorInfoToCombination(combinationB, previousCombination);
            }

            var byLastAction = trueFirst("lastActionIncluded");
            var byLeastAdded = revertOrder(arrayLengthComparator("added"));
            var byMostSurvived = arrayLengthComparator("missing");
            return stackableComparator(byLastAction)(stackableComparator(byMostSurvived)(simpleComparator(byLeastAdded)))(combinationA, combinationB);
        };
    };

    _exports.compareCombinations = compareCombinations;

    var filterCollectionWith = function filterCollectionWith(filterFunction) {
        return function(collection) {
            return _lodash.default.filter(collection, filterFunction);
        };
    };

    var SECONDARY_CHOICE_CATEGORIES = [_TvPackagesChoiceFilter.default.TV_DEFAULT_CHOICE_PRODUCT, _TvPackagesChoiceFilter.default.TV_SECONDARY_CHOICE_PRODUCT];

    var supportsFilteringByCategory = function supportsFilteringByCategory(vas) {
        return vas.addonType === _AddonTypeEnum.default.TVOPTIONAL || vas.addonType === _AddonTypeEnum.default.TVMAIN;
    };

    var isRestrictedByCategories = function isRestrictedByCategories(vas, categories) {
        return vas.supercategories && vas.supercategories.some(function(category) {
            return categories.indexOf(category) !== -1;
        });
    };

    var belongsToCategory = function belongsToCategory(vas, category) {
        return vas.supercategories && vas.supercategories.indexOf(category) !== -1;
    };

    var Filters = function Filters() {
        return {
            ASSITS: filterCollectionWith(function(vas) {
                return vas.addonType === _AddonTypeEnum.default.ASSIST;
            }),
            TV_VASES: filterCollectionWith(function(vas) {
                return vas.addonType !== _AddonTypeEnum.default.ASSIST && vas.boundedMainService === _BoundedMainServiceEnum.default.TV;
            }),
            NEO_VASES: filterCollectionWith(function(vas) {
                return vas.addonType !== _AddonTypeEnum.default.ASSIST && vas.addonType !== _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT && vas.boundedMainService === _BoundedMainServiceEnum.default.NEO;
            }),
            MAIN_TV: filterCollectionWith(function(vas) {
                return vas.addonType === _AddonTypeEnum.default.TVMAIN;
            }),
            MAIN_OPTV: filterCollectionWith(function(vas) {
                return vas.addonType === _AddonTypeEnum.default.TVMAIN && vas.provider !== _ProviderTypeEnum.default.NC;
            }),
            OPTIONAL_TV: filterCollectionWith(function(vas) {
                return vas.addonType === _AddonTypeEnum.default.TVOPTIONAL;
            }),
            OPTIONAL_OPTV: filterCollectionWith(function(vas) {
                return vas.addonType === _AddonTypeEnum.default.TVOPTIONAL && vas.provider !== _ProviderTypeEnum.default.NC;
            }),
            BASIC_TV: filterCollectionWith(function(vas) {
                return vas.addonType === _AddonTypeEnum.default.TVBASIC;
            }),
            NOT_BASIC_TV: filterCollectionWith(function(vas) {
                return vas.addonType !== _AddonTypeEnum.default.TVBASIC;
            }),
            MAIN_NC: filterCollectionWith(function(vas) {
                return vas.addonType === _AddonTypeEnum.default.TVMAIN && vas.provider === _ProviderTypeEnum.default.NC;
            }),
            OPTIONAL_NC: filterCollectionWith(function(vas) {
                return vas.addonType === _AddonTypeEnum.default.TVOPTIONAL && vas.provider === _ProviderTypeEnum.default.NC;
            }),
            ALL_OPTV: filterCollectionWith(function(vas) {
                return (vas.addonType === _AddonTypeEnum.default.TVMAIN || vas.addonType === _AddonTypeEnum.default.TVOPTIONAL) && vas.provider !== _ProviderTypeEnum.default.NC;
            }),
            ALL_NC: filterCollectionWith(function(vas) {
                return (vas.addonType === _AddonTypeEnum.default.TVMAIN || vas.addonType === _AddonTypeEnum.default.TVOPTIONAL) && vas.provider === _ProviderTypeEnum.default.NC;
            }),
            MIGRATED: filterCollectionWith(function(vas) {
                return vas.inputType;
            }),
            NOT_MIGRATED: filterCollectionWith(function(vas) {
                return !vas.inputType;
            }),
            VOICE_VASES: filterCollectionWith(function(vas) {
                return !vas.addonType && (vas.boundedMainService === null || vas.boundedMainService === _BoundedMainServiceEnum.default.OTHER);
            }),
            TV_DEFAULT_CHOICE_PRODUCT: filterCollectionWith(function(vas) {
                return supportsFilteringByCategory(vas) && isRestrictedByCategories(vas, SECONDARY_CHOICE_CATEGORIES) && !belongsToCategory(vas, _TvPackagesChoiceFilter.default.TV_DEFAULT_CHOICE_PRODUCT);
            }),
            TV_SECONDARY_CHOICE_PRODUCT: filterCollectionWith(function(vas) {
                return supportsFilteringByCategory(vas) && isRestrictedByCategories(vas, SECONDARY_CHOICE_CATEGORIES) && !belongsToCategory(vas, _TvPackagesChoiceFilter.default.TV_SECONDARY_CHOICE_PRODUCT);
            }),
            TV_LOYALTY_DURATION_12: filterCollectionWith(function(vas) {
                return vas.loyaltyDuration && vas.provider === _ProviderTypeEnum.default.NC && vas.loyaltyDuration !== 12 && vas.loyaltyDuration !== 0;
            }),
            TV_LOYALTY_DURATION_24: filterCollectionWith(function(vas) {
                return vas.loyaltyDuration && vas.provider === _ProviderTypeEnum.default.NC && vas.loyaltyDuration !== 24 && vas.loyaltyDuration !== 0;
            })
        };
    };

    _exports.Filters = Filters;
});
//# sourceMappingURL=CartInfoUtils.js.map