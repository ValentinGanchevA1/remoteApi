import {
    sumArraysWithoutDupes,
    removeAllFromArray,
    commonPartOfArrays
} from "./ArrayUtils";
import RuleType from "../../checkout/constants/RuleTypeEnum";

const doesRuleApplyBySources = (productList, rule) => {
    if ("ALL" === rule.ruleType) {
        return rule.sourceVases.every(vas => productList.includes(vas));
    }
    if ("NONE" === rule.ruleType) {
        return !productList.some(product => rule.sourceVases.includes(product));
    }
    return rule.sourceVases.some(vas => "ANY" === vas) || productList.some(product => rule.sourceVases.includes(product));
}

const doesRuleApply = (productList, rule) => {
    return doesRuleApplyBySources(productList, rule) && !rule.targetVases.every(product => productList.includes(product));
};

const doesDisableRuleApply = (productList, rule) => {
    return doesRuleApplyBySources(productList, rule) && rule.targetVases.some(product => productList.includes(product));
};

const doesGroupApply = (productList, group) => {
    let triggers = productList.filter(product => group.conditionalProducts.includes(product));
    return [triggers.length > 0, triggers];
};

const doesVisibilityRuleApply = (product, rule) => {
    return rule.targetVases.some(target => target === product);
};

const checkGroup = (productList, group, triggers) => {
    let commonPart = commonPartOfArrays(productList, group.targetProducts);
    if (group.max && commonPart.length > group.max) {
        return {
            valid: false,
            reason: "There are too many products in this group",
            actualProducts: commonPart.slice(),
            expected: group.targetProducts,
            triggers: triggers,
            number: group.max
        };
    }
    if (group.min && commonPart.length < group.min) {
        return {
            valid: false,
            reason: "There are too few products from this group",
            actualProducts: commonPart.slice(),
            expected: group.targetProducts,
            triggers: triggers,
            number: group.min
        };
    }
    return {
        valid: true
    };
};

function applyRequireRule(combination, rule) {
    let newProducts = removeAllFromArray(rule.targetVases, combination.products);
    combination.autoadded = combination.autoadded.concat(newProducts);
    combination.products = combination.products.concat(newProducts);
}

function applyRequireRuleWithoutUpdatingAutoadded(combination, rule) {
    let newProducts = removeAllFromArray(rule.targetVases, combination.products);
    combination.products = combination.products.concat(newProducts);
}

const applyDisableRule = (combination, rule) => {
    combination.products = removeAllFromArray(combination.products, rule.targetVases);
};

const isRuleFulfilled = (productList, rule) => {
    return doesRuleApplyBySources(productList, rule);
};

export function dilateProductList(combination, requireRules) {
    let changed;
    do {
        changed = false;
        requireRules.forEach(rule => {
            if (doesRuleApply(combination.products, rule)) {
                if (rule.type === RuleType.REQUIRE_SOME) {
                    applyRequireRuleWithoutUpdatingAutoadded(combination, rule);
                } else {
                    applyRequireRule(combination, rule);
                }
                changed = true;
            }
        });
    } while (changed);
    return combination;
}

export function erodeProductList(combination, disableRules) {
    disableRules.forEach(rule => {
        if (doesDisableRuleApply(combination.products, rule)) {
            applyDisableRule(combination, rule);
        }
    });
    return combination;
}

export const validate = (combination, validationGroups) => {
    let validationResult = {
        valid: true
    };
    for (let group of validationGroups) {
        let [groupApplies, triggers] = doesGroupApply(combination.products, group);
        if (groupApplies) {
            validationResult = checkGroup(combination.products, group, triggers);
            if (!validationResult.valid) {
                break;
            }
        }
    }
    combination.validationResult = validationResult;
    return combination;
};

export const findProductsToHide = (bundleProducts, productsThatCanBeHidden, requireShowRules) => {
    return productsThatCanBeHidden.filter(product => {
        let applyingRules = requireShowRules.filter(rule => doesVisibilityRuleApply(product, rule));
        if (applyingRules.some(r => r.source === "MR")) {
            return isProductToHide(applyingRules.filter(r => r.source === "MR"), bundleProducts);
        }
        return isProductToHide(applyingRules, bundleProducts);
    });
};

const isProductToHide = (applyingRules, bundleProducts) => {
    let applyingNoneRules = applyingRules.filter(rule => "NONE" === rule.ruleType);
    let applyingOtherRules = applyingRules.filter(rule => "NONE" !== rule.ruleType);
    return (applyingNoneRules.length > 0 && applyingNoneRules.some(rule => !isRuleFulfilled(bundleProducts, rule))) ||
        (applyingOtherRules.length > 0 && !applyingOtherRules.some(rule => isRuleFulfilled(bundleProducts, rule)));
};