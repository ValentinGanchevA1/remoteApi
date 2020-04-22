define(["exports", "./RuleUtils", "./CombinationUtils", "./ArrayUtils", "./CartInfoUtils", "../../checkout/constants/RuleTypeEnum", "eshop/modules/checkout/constants/AddonTypeEnum", "lodash"], function(_exports, _RuleUtils, _CombinationUtils, _ArrayUtils, _CartInfoUtils, _RuleTypeEnum, _AddonTypeEnum, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.mobileAnalyzeCombination = _exports.analyzeCombination = void 0;
    _RuleTypeEnum = babelHelpers.interopRequireDefault(_RuleTypeEnum);
    _AddonTypeEnum = babelHelpers.interopRequireDefault(_AddonTypeEnum);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

    var analyzeCombination = function analyzeCombination(configurablesData, selectedProducts, previouslyAutoadded, productAdded, productRemoved) {
        var coreRequireRules = configurablesData.relations.filter(function(rule) {
            return rule.type === _RuleTypeEnum.default.REQUIRE;
        });
        var additionalRequireRules = configurablesData.relations.filter(function(rule) {
            return rule.type === _RuleTypeEnum.default.REQUIRE_SOME;
        });
        var disableRules = configurablesData.relations.filter(function(rule) {
            return rule.type === _RuleTypeEnum.default.EXCLUDE;
        });
        disableRules = disableRules.filter(function(rule) {
            return _lodash.default.includes(rule.sourceVases, productAdded);
        }).concat(disableRules.filter(function(rule) {
            return !_lodash.default.includes(rule.sourceVases, productAdded);
        }));
        var disableOnceRules = configurablesData.relations.filter(function(rule) {
            return rule.type === _RuleTypeEnum.default.EXCLUDE_ONCE;
        }).filter(function(rule) {
            return rule.sourceVases.includes(productAdded);
        });
        var validationGroups = configurablesData.groups.slice();
        var mandatoryProducts = configurablesData.mandatoryProducts.slice();
        var bundleProducts = configurablesData.mandatoryProducts.slice();
        var previousCombination = (0, _RuleUtils.dilateProductList)({
            products: selectedProducts,
            autoadded: previouslyAutoadded
        }, coreRequireRules);

        if (productRemoved && selectedProducts.indexOf(productRemoved) !== -1) {
            selectedProducts.splice(selectedProducts.indexOf(productRemoved), 1);
        }

        if (productAdded) {
            selectedProducts.push(productAdded);
        }

        selectedProducts = selectedProducts.filter(function(product) {
            return !previouslyAutoadded.includes(product);
        });
        var realMandatoryCombination = (0, _RuleUtils.dilateProductList)({
            products: mandatoryProducts,
            autoadded: []
        }, coreRequireRules);
        console.log("Real mandatory products");
        console.log(realMandatoryCombination.products);
        var combinations = [];
        combinations.push((0, _CombinationUtils.createBaseCombination)(selectedProducts, realMandatoryCombination));
        combinations = combinations.concat((0, _CombinationUtils.createSmallerCombinations)(selectedProducts, realMandatoryCombination));
        combinations = combinations.map(function(combination) {
            return (0, _RuleUtils.erodeProductList)(combination, disableOnceRules);
        });
        combinations = combinations.map(function(combination) {
            return (0, _RuleUtils.dilateProductList)(combination, coreRequireRules.concat(additionalRequireRules));
        });
        combinations = combinations.map(function(combination) {
            return (0, _RuleUtils.erodeProductList)(combination, disableRules);
        });
        combinations = combinations.map(function(combination) {
            return (0, _RuleUtils.validate)(combination, validationGroups);
        });
        combinations = combinations.map(function(combination) {
            combination.lastActionIncluded = productAdded && combination.products.includes(productAdded) || productRemoved && !combination.products.includes(productRemoved) ? true : false;
            return combination;
        });
        var validCombinations = combinations.filter(function(combination) {
            return combination.validationResult.valid;
        }); //Sort combinations to find the best

        validCombinations.sort((0, _CartInfoUtils.compareCombinations)(previousCombination));
        var combination = validCombinations[0];
        console.log(JSON.stringify(combination));

        if (!combination) {
            combination = combinations.find(function(combination) {
                return combination.name === "selection";
            });
            return [null, null, combination.validationResult, null];
        }

        var extendedCombinationData = {};
        extendedCombinationData.hiddenProducts = extendedCombinationAnalysis(configurablesData, combination);
        return [combination.products, combination.autoadded, combination.validationResult, extendedCombinationData];
    };

    _exports.analyzeCombination = analyzeCombination;

    var extendedCombinationAnalysis = function extendedCombinationAnalysis(configurablesData, combination) {
        var requireShowRules = configurablesData.relations.filter(function(rule) {
            return rule.type === _RuleTypeEnum.default.SHOW;
        });
        var productsThatCanBeHidden = (0, _ArrayUtils.removeAllFromArray)(configurablesData.bundleProducts.slice(), combination.products);
        return (0, _RuleUtils.findProductsToHide)(combination.products, productsThatCanBeHidden, requireShowRules);
    };

    var mobileAnalyzeCombination = function mobileAnalyzeCombination(configurableData, selectedProducts, productAdded, productRemoved) {
        var bonusVasRelations = configurableData.relations.filter(function(rule) {
            return rule.type === _RuleTypeEnum.default.REQUIRE;
        }).filter(function(rule) {
            return rule.source === "bonusVasRelation";
        });
        var secondaryChoiceVases = configurableData.services.filter(function(service) {
            return service.productType === _AddonTypeEnum.default.SECONDARY_CHOICE_DISCOUNT;
        }).map(function(vas) {
            return vas.id;
        });
        var secondaryChoiceRelations = configurableData.relations.filter(function(rule) {
            return rule.type === _RuleTypeEnum.default.REQUIRE;
        }).filter(function(rule) {
            return rule.source !== "bonusVasRelation";
        }).filter(function(rule) {
            return rule.sourceVases.some(function(vas) {
                return secondaryChoiceVases.includes(vas);
            });
        });
        var removeProducts = [];
        var addProducts = [];
        var removeSecondaryChoiceRelation = [];

        if (productRemoved) {
            removeProducts.push(productRemoved);
            bonusVasRelations.filter(function(rule) {
                return rule.targetVases.includes(productRemoved);
            }).forEach(function(rule) {
                return rule.sourceVases.forEach(function(vas) {
                    return removeProducts.push(vas);
                });
            });
            removeSecondaryChoiceRelation = secondaryChoiceRelations.filter(function(rel) {
                return rel.targetVases.includes(productRemoved);
            });
        }

        if (productAdded) {
            if (secondaryChoiceVases.includes(productAdded)) {
                var requiredVases = [];
                secondaryChoiceRelations.filter(function(rel) {
                    return rel.sourceVases.includes(productAdded);
                }).forEach(function(rel) {
                    return rel.targetVases.forEach(function(vas) {
                        return requiredVases.push(vas);
                    });
                });
                var conditionalVases = requiredVases.filter(function(vas) {
                    return selectedProducts.includes(vas);
                });

                if (requiredVases.length == 0 || requiredVases.length > 0 && conditionalVases.length > 0) {
                    addProducts.push(productAdded);
                    bonusVasRelations.filter(function(rule) {
                        return rule.targetVases.includes(productAdded);
                    }).forEach(function(rule) {
                        return rule.sourceVases.forEach(function(vas) {
                            return addProducts.push(vas);
                        });
                    });
                }
            } else {
                addProducts.push(productAdded);
                bonusVasRelations.filter(function(rule) {
                    return rule.targetVases.includes(productAdded);
                }).forEach(function(rule) {
                    return rule.sourceVases.forEach(function(vas) {
                        return addProducts.push(vas);
                    });
                }); //remove exclude vases and related bonuses

                var excludeVases = [];
                configurableData.relations.filter(function(rule) {
                    return rule.type === _RuleTypeEnum.default.EXCLUDE;
                }).filter(function(rule) {
                    return rule.sourceVases.includes(productAdded);
                }).forEach(function(rule) {
                    return rule.targetVases.forEach(function(vas) {
                        return excludeVases.push(vas);
                    });
                });
                excludeVases.forEach(function(vas) {
                    removeProducts.push(vas);
                    bonusVasRelations.filter(function(rule) {
                        return rule.targetVases.includes(vas);
                    }).forEach(function(rule) {
                        return rule.sourceVases.forEach(function(sourceVas) {
                            return removeProducts.push(sourceVas);
                        });
                    });
                });
            }
        } //add products


        selectedProducts = (0, _ArrayUtils.sumArraysWithoutDupes)(selectedProducts, addProducts); //remove products

        selectedProducts = (0, _ArrayUtils.removeAllFromArray)(selectedProducts, removeProducts);
        removeSecondaryChoiceRelation.forEach(function(rel) {
            var cartConditionalVases = rel.targetVases.filter(function(vas) {
                return selectedProducts.some(function(product) {
                    return product === vas;
                });
            });

            if (cartConditionalVases.length === 0) {
                var removeSecondaryVas = rel.sourceVases;
                bonusVasRelations.filter(function(rel) {
                    return rel.targetVases.filter(function(vas) {
                        return removeSecondaryVas.some(function(rem) {
                            return rem === vas;
                        });
                    }).length > 0;
                }).forEach(function(rel) {
                    return rel.sourceVases.forEach(function(vas) {
                        return removeSecondaryVas.push(vas);
                    });
                });
                selectedProducts = (0, _ArrayUtils.removeAllFromArray)(selectedProducts, removeSecondaryVas);
            }
        });
        return selectedProducts;
    };

    _exports.mobileAnalyzeCombination = mobileAnalyzeCombination;
});
//# sourceMappingURL=Analyzer.js.map