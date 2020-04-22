define(["exports", "./CartInfoUtils", "../../checkout/constants/RuleTypeEnum", "../../checkout/constants/TvPackageTypeEnum", "../enum/MigrationStatus"], function(_exports, _CartInfoUtils, _RuleTypeEnum, _TvPackageTypeEnum, _MigrationStatus) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.createCustomRule = createCustomRule;
    _exports.createCustomRules = createCustomRules;
    _RuleTypeEnum = babelHelpers.interopRequireDefault(_RuleTypeEnum);
    _TvPackageTypeEnum = babelHelpers.interopRequireDefault(_TvPackageTypeEnum);
    _MigrationStatus = babelHelpers.interopRequireDefault(_MigrationStatus);

    function createCustomRule(presentable) {
        return createCustomRules(presentable, []);
    }

    function createCustomRules(presentable, migratedTvPackages, customFilters) {
        var customRules = [];
        var migratedMainOptvPackage = findMainOptvMigratedPackage(migratedTvPackages);
        var allMigratedOptvPackages = findAllOptvMigratedPackages(migratedTvPackages);
        var allMigratedOptvPackagesCodes = allMigratedOptvPackages.map(mapTvPackageToCode);
        var allMigratedNcPackages = findAllNcMigratedPackages(migratedTvPackages);
        var allMigratedNcPackagesCodes = allMigratedNcPackages.map(mapTvPackageToCode);
        customRules.push(createNewMainDisablesOptionalsRule(presentable));
        customRules.push(createNewNcMainDisablesNcOptionalsRule(presentable));
        customRules.push(createNewNcMainDisablesMigratedNcPackagesRule(presentable, allMigratedNcPackages));
        customRules.push(createNewOptvDisablesMigratedOptvPackagesRule(presentable, allMigratedOptvPackages));
        customRules.push.apply(customRules, babelHelpers.toConsumableArray(createDisableOtherProductsWithSharedBase(presentable, migratedTvPackages)));

        if (allMigratedOptvPackages && allMigratedOptvPackages.length > 0) {
            if (migratedMainOptvPackage && migratedMainOptvPackage.length > 0) {
                customRules.push(createSelectSpecificMainOptvPackageByDefaultRule(presentable, allMigratedOptvPackagesCodes));
            } else {
                customRules.push(createRestoreAdditionalPackagesRule(presentable, allMigratedOptvPackagesCodes));
            }
        } else {
            customRules.push(createSelectDefaultMainPackageRule(presentable));
        }

        if (allMigratedNcPackages && allMigratedNcPackages.length > 0) {
            customRules.push(createSelectSpecificMainNcPackageByDefaultRule(presentable, allMigratedNcPackagesCodes));
        }

        if (customFilters && customFilters.secondaryChoice) {
            customRules.push(createSecondaryChoiceTvPackagesExcludeRule(presentable, customFilters.secondaryChoice));
            customRules.push(createSecondaryChoiceTvPackagesShowRule(presentable, customFilters.secondaryChoice));
        }

        if (customFilters && customFilters.loyaltyDuration) {
            customRules.push(createSecondaryChoiceTvPackagesExcludeRule(presentable, customFilters.loyaltyDuration));
            customRules.push(createSecondaryChoiceTvPackagesShowRule(presentable, customFilters.loyaltyDuration));
        }

        return customRules;
    }

    function mapTvPackageToCode(tvPackage) {
        return tvPackage.id || tvPackage.productCode;
    }

    function findMainOptvMigratedPackage(migratedTvPackages) {
        return (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.MAIN_OPTV](migratedTvPackages).map(function(vas) {
            return vas.id || vas.productCode;
        });
    }

    function findAllOptvMigratedPackages(migratedTvPackages) {
        return (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.ALL_OPTV](migratedTvPackages);
    }

    function findAllNcMigratedPackages(migratedTvPackages) {
        return (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.ALL_NC](migratedTvPackages);
    }

    function createNewMainDisablesOptionalsRule(presentable) {
        return {
            ruleType: _RuleTypeEnum.default.ANY,
            sourceVases: (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.MAIN_OPTV](presentable).concat((0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.BASIC_TV](presentable)).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            targetVases: (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.OPTIONAL_OPTV](presentable).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            type: _RuleTypeEnum.default.EXCLUDE_ONCE
        };
    }

    function createNewNcMainDisablesNcOptionalsRule(presentable) {
        return {
            ruleType: _RuleTypeEnum.default.ANY,
            sourceVases: (0, _CartInfoUtils.Filters)()[_MigrationStatus.default.NOT_MIGRATED]((0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.MAIN_NC](presentable)).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            targetVases: (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.OPTIONAL_NC](presentable).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            type: _RuleTypeEnum.default.EXCLUDE_ONCE
        };
    }

    function createSecondaryChoiceTvPackagesExcludeRule(presentable, selectedFilter) {
        return {
            ruleType: _RuleTypeEnum.default.NONE,
            sourceVases: [],
            targetVases: (0, _CartInfoUtils.Filters)()[selectedFilter](presentable).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            type: _RuleTypeEnum.default.EXCLUDE
        };
    }

    function createSecondaryChoiceTvPackagesShowRule(presentable, selectedFilter) {
        return {
            ruleType: _RuleTypeEnum.default.ANY,
            sourceVases: [],
            targetVases: (0, _CartInfoUtils.Filters)()[selectedFilter](presentable).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            type: _RuleTypeEnum.default.SHOW
        };
    }

    function createNewNcMainDisablesMigratedNcPackagesRule(presentable, migratedNcPackages) {
        return {
            ruleType: _RuleTypeEnum.default.ANY,
            sourceVases: (0, _CartInfoUtils.Filters)()[_MigrationStatus.default.NOT_MIGRATED]((0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.MAIN_NC](presentable)).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            targetVases: migratedNcPackages.map(mapTvPackageToCode),
            type: _RuleTypeEnum.default.EXCLUDE_ONCE
        };
    }

    function createNewOptvDisablesMigratedOptvPackagesRule(presentable, migratedOptvPackages) {
        return {
            ruleType: _RuleTypeEnum.default.ANY,
            sourceVases: (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.NOT_BASIC_TV]((0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.ALL_OPTV]((0, _CartInfoUtils.Filters)()[_MigrationStatus.default.NOT_MIGRATED](presentable))).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            targetVases: findMigratedPackagesNotIncludedInProposition(presentable, migratedOptvPackages),
            type: _RuleTypeEnum.default.EXCLUDE_ONCE
        };
    }

    function createSelectSpecificMainOptvPackageByDefaultRule(presentable, defaultPackage) {
        return {
            ruleType: _RuleTypeEnum.default.NONE,
            sourceVases: (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.NOT_BASIC_TV]((0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.ALL_OPTV]((0, _CartInfoUtils.Filters)()[_MigrationStatus.default.NOT_MIGRATED](presentable))).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            targetVases: defaultPackage,
            type: _RuleTypeEnum.default.REQUIRE_SOME
        };
    }

    function createSelectSpecificMainNcPackageByDefaultRule(presentable, defaultPackage) {
        return {
            ruleType: _RuleTypeEnum.default.NONE,
            sourceVases: (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.MAIN_NC](presentable).map(function(vas) {
                return vas.id || vas.productCode;
            }),
            targetVases: defaultPackage,
            type: _RuleTypeEnum.default.REQUIRE_SOME
        };
    }

    function createDisableOtherProductsWithSharedBase(presentable, migratedTvPackages) {
        return (0, _CartInfoUtils.Filters)()[_MigrationStatus.default.NOT_MIGRATED](presentable).map(function(prod) {
            var base = prod.base;
            var migratedWithSharedBase = migratedTvPackages.filter(function(migratedProd) {
                return base === migratedProd.base;
            }).map(function(migratedProd) {
                return migratedProd.id;
            }).filter(function(migratedProd) {
                return migratedProd !== prod.id;
            });

            if (migratedWithSharedBase.length > 0) {
                console.log("Creating rule: " + prod.id + " disables " + JSON.stringify(migratedWithSharedBase));
                return {
                    ruleType: _RuleTypeEnum.default.ANY,
                    sourceVases: [prod.id],
                    targetVases: migratedWithSharedBase,
                    type: _RuleTypeEnum.default.EXCLUDE
                };
            }

            return null;
        }).filter(function(obj) {
            return !!obj;
        });
    }

    function createRestoreAdditionalPackagesRule(presentable, defaultPackage) {
        var packagesWithBasic = defaultPackage.slice();
        packagesWithBasic = packagesWithBasic.concat((0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.BASIC_TV](presentable).map(function(vas) {
            return vas.id || vas.productCode;
        }));
        return createSelectSpecificMainOptvPackageByDefaultRule(presentable, packagesWithBasic);
    }

    function createSelectDefaultMainPackageRule(presentable) {
        return createSelectSpecificMainOptvPackageByDefaultRule(presentable, (0, _CartInfoUtils.Filters)()[_TvPackageTypeEnum.default.BASIC_TV](presentable).map(function(vas) {
            return vas.id || vas.productCode;
        }));
    }

    function findMigratedPackagesNotIncludedInProposition(presentable, migratedPackages) {
        return migratedPackages.filter(function(migratedPackage) {
            return !presentable.some(function(packageInProposition) {
                return arePackagesTheSame(packageInProposition, migratedPackage);
            });
        }).map(mapTvPackageToCode);
    }

    function arePackagesTheSame(packageInProposition, migratedPackage) {
        return packageInProposition.id === migratedPackage.id || packageInProposition.hasElasticPromo && packageInProposition.base === migratedPackage.base;
    }
});
//# sourceMappingURL=TvPackageUtils.js.map