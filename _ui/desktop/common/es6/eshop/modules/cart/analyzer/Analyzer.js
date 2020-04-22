import {
    dilateProductList,
    erodeProductList,
    dilateProductListSpecial,
    validate,
    findProductsToHide
} from "./RuleUtils";
import {
    createBaseCombination,
    createSmallerCombinations
} from "./CombinationUtils";
import {
    removeAllFromArray,
    sumArraysWithoutDupes
} from "./ArrayUtils";
import {
    compareCombinations
} from "./CartInfoUtils";
import RuleType from "../../checkout/constants/RuleTypeEnum";
import AddonType from "eshop/modules/checkout/constants/AddonTypeEnum";
import _ from "lodash";

export const analyzeCombination = (configurablesData, selectedProducts, previouslyAutoadded, productAdded, productRemoved) => {
    let coreRequireRules = configurablesData.relations.filter(rule => rule.type === RuleType.REQUIRE);
    let additionalRequireRules = configurablesData.relations.filter(rule => rule.type === RuleType.REQUIRE_SOME);
    let disableRules = configurablesData.relations.filter(rule => rule.type === RuleType.EXCLUDE);
    disableRules = disableRules.filter(rule => _.includes(rule.sourceVases, productAdded))
        .concat(disableRules.filter(rule => !_.includes(rule.sourceVases, productAdded)));
    let disableOnceRules = configurablesData.relations.filter(rule => rule.type === RuleType.EXCLUDE_ONCE)
        .filter(rule => rule.sourceVases.includes(productAdded));
    let validationGroups = configurablesData.groups.slice();
    let mandatoryProducts = configurablesData.mandatoryProducts.slice();
    let bundleProducts = configurablesData.mandatoryProducts.slice();

    let previousCombination = dilateProductList({
        products: selectedProducts,
        autoadded: previouslyAutoadded
    }, coreRequireRules);

    if (productRemoved && selectedProducts.indexOf(productRemoved) !== -1) {
        selectedProducts.splice(selectedProducts.indexOf(productRemoved), 1);
    }
    if (productAdded) {
        selectedProducts.push(productAdded);
    }

    selectedProducts = selectedProducts.filter(product => !previouslyAutoadded.includes(product));

    let realMandatoryCombination = dilateProductList({
        products: mandatoryProducts,
        autoadded: []
    }, coreRequireRules);

    console.log("Real mandatory products");
    console.log(realMandatoryCombination.products);

    let combinations = [];
    combinations.push(createBaseCombination(selectedProducts, realMandatoryCombination));
    combinations = combinations.concat(createSmallerCombinations(selectedProducts, realMandatoryCombination));
    combinations = combinations.map(combination => erodeProductList(combination, disableOnceRules));
    combinations = combinations.map(combination => dilateProductList(combination, coreRequireRules.concat(additionalRequireRules)));
    combinations = combinations.map(combination => erodeProductList(combination, disableRules));
    combinations = combinations.map(combination => validate(combination, validationGroups));
    combinations = combinations.map(combination => {
        combination.lastActionIncluded = (productAdded && combination.products.includes(productAdded)) ||
            (productRemoved && !combination.products.includes(productRemoved)) ? true : false;
        return combination;
    });

    let validCombinations = combinations.filter(combination => combination.validationResult.valid);
    //Sort combinations to find the best
    validCombinations.sort(compareCombinations(previousCombination));

    let combination = validCombinations[0];
    console.log(JSON.stringify(combination));
    if (!combination) {
        combination = combinations.find(combination => combination.name === "selection");
        return [null, null, combination.validationResult, null];
    }

    let extendedCombinationData = {};
    extendedCombinationData.hiddenProducts = extendedCombinationAnalysis(configurablesData, combination);

    return [combination.products, combination.autoadded, combination.validationResult, extendedCombinationData];
};

const extendedCombinationAnalysis = (configurablesData, combination) => {
    let requireShowRules = configurablesData.relations.filter(rule => rule.type === RuleType.SHOW);
    let productsThatCanBeHidden = removeAllFromArray(configurablesData.bundleProducts.slice(), combination.products);
    return findProductsToHide(combination.products, productsThatCanBeHidden, requireShowRules);
};

export const mobileAnalyzeCombination = (configurableData, selectedProducts, productAdded, productRemoved) => {
    const bonusVasRelations = configurableData.relations.filter(rule => rule.type === RuleType.REQUIRE).filter(rule => rule.source === "bonusVasRelation");
    var secondaryChoiceVases = configurableData.services.filter(service => service.productType === AddonType.SECONDARY_CHOICE_DISCOUNT).map(vas => vas.id);
    var secondaryChoiceRelations = configurableData.relations
        .filter(rule => rule.type === RuleType.REQUIRE)
        .filter(rule => rule.source !== "bonusVasRelation")
        .filter(rule => rule.sourceVases.some(vas => secondaryChoiceVases.includes(vas)));
    var removeProducts = [];
    var addProducts = [];
    var removeSecondaryChoiceRelation = [];
    if (productRemoved) {
        removeProducts.push(productRemoved);
        bonusVasRelations.filter(rule => rule.targetVases.includes(productRemoved))
            .forEach(rule => rule.sourceVases.forEach(vas => removeProducts.push(vas)));

        removeSecondaryChoiceRelation = secondaryChoiceRelations.filter(rel => rel.targetVases.includes(productRemoved));
    }
    if (productAdded) {
        if (secondaryChoiceVases.includes(productAdded)) {
            var requiredVases = [];
            secondaryChoiceRelations.filter(rel => rel.sourceVases.includes(productAdded))
                .forEach(rel => rel.targetVases.forEach(vas => requiredVases.push(vas)));
            var conditionalVases = requiredVases.filter(vas => selectedProducts.includes(vas));
            if (requiredVases.length == 0 || (requiredVases.length > 0 && conditionalVases.length > 0)) {
                addProducts.push(productAdded);
                bonusVasRelations.filter(rule => rule.targetVases.includes(productAdded))
                    .forEach(rule => rule.sourceVases.forEach(vas => addProducts.push(vas)));
            }
        } else {
            addProducts.push(productAdded);
            bonusVasRelations.filter(rule => rule.targetVases.includes(productAdded))
                .forEach(rule => rule.sourceVases.forEach(vas => addProducts.push(vas)));

            //remove exclude vases and related bonuses
            var excludeVases = [];
            configurableData.relations.filter(rule => rule.type === RuleType.EXCLUDE)
                .filter(rule => rule.sourceVases.includes(productAdded))
                .forEach(rule => rule.targetVases.forEach(vas => excludeVases.push(vas)));

            excludeVases.forEach(vas => {
                removeProducts.push(vas);
                bonusVasRelations.filter(rule => rule.targetVases.includes(vas))
                    .forEach(rule => rule.sourceVases.forEach(sourceVas => removeProducts.push(sourceVas)));
            });
        }
    }

    //add products
    selectedProducts = sumArraysWithoutDupes(selectedProducts, addProducts);

    //remove products
    selectedProducts = removeAllFromArray(selectedProducts, removeProducts);

    removeSecondaryChoiceRelation.forEach(rel => {
        var cartConditionalVases = rel.targetVases.filter(vas => selectedProducts.some(product => product === vas));
        if (cartConditionalVases.length === 0) {
            var removeSecondaryVas = rel.sourceVases;
            bonusVasRelations.filter(rel => rel.targetVases.filter(vas => removeSecondaryVas.some(rem => rem === vas)).length > 0)
                .forEach(rel => rel.sourceVases.forEach(vas => removeSecondaryVas.push(vas)));
            selectedProducts = removeAllFromArray(selectedProducts, removeSecondaryVas);
        }
    });

    return selectedProducts;
};