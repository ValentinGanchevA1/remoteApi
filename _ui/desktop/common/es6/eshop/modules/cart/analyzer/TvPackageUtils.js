import {
    Filters
} from "./CartInfoUtils";
import RuleType from "../../checkout/constants/RuleTypeEnum";
import TvPackageType from "../../checkout/constants/TvPackageTypeEnum";
import MigrationStatus from "../enum/MigrationStatus";

export function createCustomRule(presentable) {
    return createCustomRules(presentable, []);
}

export function createCustomRules(presentable, migratedTvPackages, customFilters) {
    let customRules = [];
    let migratedMainOptvPackage = findMainOptvMigratedPackage(migratedTvPackages);
    let allMigratedOptvPackages = findAllOptvMigratedPackages(migratedTvPackages);
    let allMigratedOptvPackagesCodes = allMigratedOptvPackages.map(mapTvPackageToCode);
    let allMigratedNcPackages = findAllNcMigratedPackages(migratedTvPackages);
    let allMigratedNcPackagesCodes = allMigratedNcPackages.map(mapTvPackageToCode);
    customRules.push(createNewMainDisablesOptionalsRule(presentable));
    customRules.push(createNewNcMainDisablesNcOptionalsRule(presentable));
    customRules.push(createNewNcMainDisablesMigratedNcPackagesRule(presentable, allMigratedNcPackages));
    customRules.push(createNewOptvDisablesMigratedOptvPackagesRule(presentable, allMigratedOptvPackages));
    customRules.push(...createDisableOtherProductsWithSharedBase(presentable, migratedTvPackages));
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
        customRules.push(createSecondaryChoiceTvPackagesExcludeRule(presentable, customFilters.secondaryChoice))
        customRules.push(createSecondaryChoiceTvPackagesShowRule(presentable, customFilters.secondaryChoice))
    }
    if (customFilters && customFilters.loyaltyDuration) {
        customRules.push(createSecondaryChoiceTvPackagesExcludeRule(presentable, customFilters.loyaltyDuration))
        customRules.push(createSecondaryChoiceTvPackagesShowRule(presentable, customFilters.loyaltyDuration))
    }
    return customRules;
}

function mapTvPackageToCode(tvPackage) {
    return tvPackage.id || tvPackage.productCode;
}

function findMainOptvMigratedPackage(migratedTvPackages) {
    return Filters()[TvPackageType.MAIN_OPTV](migratedTvPackages).map(vas => vas.id || vas.productCode);
}

function findAllOptvMigratedPackages(migratedTvPackages) {
    return Filters()[TvPackageType.ALL_OPTV](migratedTvPackages);
}

function findAllNcMigratedPackages(migratedTvPackages) {
    return Filters()[TvPackageType.ALL_NC](migratedTvPackages);
}

function createNewMainDisablesOptionalsRule(presentable) {
    return {
        ruleType: RuleType.ANY,
        sourceVases: Filters()[TvPackageType.MAIN_OPTV](presentable).concat(Filters()[TvPackageType.BASIC_TV](presentable)).map(vas => vas.id || vas.productCode),
        targetVases: Filters()[TvPackageType.OPTIONAL_OPTV](presentable).map(vas => vas.id || vas.productCode),
        type: RuleType.EXCLUDE_ONCE
    };
}

function createNewNcMainDisablesNcOptionalsRule(presentable) {
    return {
        ruleType: RuleType.ANY,
        sourceVases: Filters()[MigrationStatus.NOT_MIGRATED](Filters()[TvPackageType.MAIN_NC](presentable)).map(vas => vas.id || vas.productCode),
        targetVases: Filters()[TvPackageType.OPTIONAL_NC](presentable).map(vas => vas.id || vas.productCode),
        type: RuleType.EXCLUDE_ONCE
    };
}

function createSecondaryChoiceTvPackagesExcludeRule(presentable, selectedFilter) {
    return {
        ruleType: RuleType.NONE,
        sourceVases: [],
        targetVases: Filters()[selectedFilter](presentable).map(vas => vas.id || vas.productCode),
        type: RuleType.EXCLUDE
    };
}

function createSecondaryChoiceTvPackagesShowRule(presentable, selectedFilter) {
    return {
        ruleType: RuleType.ANY,
        sourceVases: [],
        targetVases: Filters()[selectedFilter](presentable).map(vas => vas.id || vas.productCode),
        type: RuleType.SHOW
    };
}

function createNewNcMainDisablesMigratedNcPackagesRule(presentable, migratedNcPackages) {
    return {
        ruleType: RuleType.ANY,
        sourceVases: Filters()[MigrationStatus.NOT_MIGRATED](Filters()[TvPackageType.MAIN_NC](presentable)).map(vas => vas.id || vas.productCode),
        targetVases: migratedNcPackages.map(mapTvPackageToCode),
        type: RuleType.EXCLUDE_ONCE
    };
}

function createNewOptvDisablesMigratedOptvPackagesRule(presentable, migratedOptvPackages) {
    return {
        ruleType: RuleType.ANY,
        sourceVases: Filters()[TvPackageType.NOT_BASIC_TV](Filters()[TvPackageType.ALL_OPTV](Filters()[MigrationStatus.NOT_MIGRATED](presentable))).map(vas => vas.id || vas.productCode),
        targetVases: findMigratedPackagesNotIncludedInProposition(presentable, migratedOptvPackages),
        type: RuleType.EXCLUDE_ONCE
    };
}

function createSelectSpecificMainOptvPackageByDefaultRule(presentable, defaultPackage) {
    return {
        ruleType: RuleType.NONE,
        sourceVases: Filters()[TvPackageType.NOT_BASIC_TV](Filters()[TvPackageType.ALL_OPTV](Filters()[MigrationStatus.NOT_MIGRATED](presentable))).map(vas => vas.id || vas.productCode),
        targetVases: defaultPackage,
        type: RuleType.REQUIRE_SOME
    };
}

function createSelectSpecificMainNcPackageByDefaultRule(presentable, defaultPackage) {
    return {
        ruleType: RuleType.NONE,
        sourceVases: Filters()[TvPackageType.MAIN_NC](presentable).map(vas => vas.id || vas.productCode),
        targetVases: defaultPackage,
        type: RuleType.REQUIRE_SOME
    };
}

function createDisableOtherProductsWithSharedBase(presentable, migratedTvPackages) {
    return Filters()[MigrationStatus.NOT_MIGRATED](presentable)
        .map(prod => {
            let base = prod.base;
            let migratedWithSharedBase = migratedTvPackages.filter(migratedProd => base === migratedProd.base)
                .map(migratedProd => migratedProd.id)
                .filter(migratedProd => migratedProd !== prod.id);
            if (migratedWithSharedBase.length > 0) {
                console.log("Creating rule: " + prod.id + " disables " + JSON.stringify(migratedWithSharedBase));
                return {
                    ruleType: RuleType.ANY,
                    sourceVases: [prod.id],
                    targetVases: migratedWithSharedBase,
                    type: RuleType.EXCLUDE
                }
            }
            return null;
        })
        .filter(obj => !!obj);
}

function createRestoreAdditionalPackagesRule(presentable, defaultPackage) {
    let packagesWithBasic = defaultPackage.slice();
    packagesWithBasic = packagesWithBasic.concat(Filters()[TvPackageType.BASIC_TV](presentable).map(vas => vas.id || vas.productCode));
    return createSelectSpecificMainOptvPackageByDefaultRule(presentable, packagesWithBasic);
}

function createSelectDefaultMainPackageRule(presentable) {
    return createSelectSpecificMainOptvPackageByDefaultRule(presentable, Filters()[TvPackageType.BASIC_TV](presentable).map(vas => vas.id || vas.productCode));
}

function findMigratedPackagesNotIncludedInProposition(presentable, migratedPackages) {
    return migratedPackages.filter(migratedPackage =>
        !presentable.some(packageInProposition => arePackagesTheSame(packageInProposition, migratedPackage))
    ).map(mapTvPackageToCode);
}

function arePackagesTheSame(packageInProposition, migratedPackage) {
    return packageInProposition.id === migratedPackage.id ||
        (packageInProposition.hasElasticPromo && packageInProposition.base === migratedPackage.base);
}