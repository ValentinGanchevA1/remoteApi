define(["exports", "./ArrayUtils", "../../checkout/constants/RuleTypeEnum"], function(_exports, _ArrayUtils, _RuleTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.dilateProductList = dilateProductList;
    _exports.erodeProductList = erodeProductList;
    _exports.findProductsToHide = _exports.validate = void 0;
    _RuleTypeEnum = babelHelpers.interopRequireDefault(_RuleTypeEnum);

    function _createForOfIteratorHelper(o) {
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
                var i = 0;
                var F = function F() {};
                return {
                    s: F,
                    n: function n() {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function e(_e) {
                        throw _e;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var it, normalCompletion = true,
            didErr = false,
            err;
        return {
            s: function s() {
                it = o[Symbol.iterator]();
            },
            n: function n() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function e(_e2) {
                didErr = true;
                err = _e2;
            },
            f: function f() {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally {
                    if (didErr) throw err;
                }
            }
        };
    }

    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }

    var doesRuleApplyBySources = function doesRuleApplyBySources(productList, rule) {
        if ("ALL" === rule.ruleType) {
            return rule.sourceVases.every(function(vas) {
                return productList.includes(vas);
            });
        }

        if ("NONE" === rule.ruleType) {
            return !productList.some(function(product) {
                return rule.sourceVases.includes(product);
            });
        }

        return rule.sourceVases.some(function(vas) {
            return "ANY" === vas;
        }) || productList.some(function(product) {
            return rule.sourceVases.includes(product);
        });
    };

    var doesRuleApply = function doesRuleApply(productList, rule) {
        return doesRuleApplyBySources(productList, rule) && !rule.targetVases.every(function(product) {
            return productList.includes(product);
        });
    };

    var doesDisableRuleApply = function doesDisableRuleApply(productList, rule) {
        return doesRuleApplyBySources(productList, rule) && rule.targetVases.some(function(product) {
            return productList.includes(product);
        });
    };

    var doesGroupApply = function doesGroupApply(productList, group) {
        var triggers = productList.filter(function(product) {
            return group.conditionalProducts.includes(product);
        });
        return [triggers.length > 0, triggers];
    };

    var doesVisibilityRuleApply = function doesVisibilityRuleApply(product, rule) {
        return rule.targetVases.some(function(target) {
            return target === product;
        });
    };

    var checkGroup = function checkGroup(productList, group, triggers) {
        var commonPart = (0, _ArrayUtils.commonPartOfArrays)(productList, group.targetProducts);

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
        var newProducts = (0, _ArrayUtils.removeAllFromArray)(rule.targetVases, combination.products);
        combination.autoadded = combination.autoadded.concat(newProducts);
        combination.products = combination.products.concat(newProducts);
    }

    function applyRequireRuleWithoutUpdatingAutoadded(combination, rule) {
        var newProducts = (0, _ArrayUtils.removeAllFromArray)(rule.targetVases, combination.products);
        combination.products = combination.products.concat(newProducts);
    }

    var applyDisableRule = function applyDisableRule(combination, rule) {
        combination.products = (0, _ArrayUtils.removeAllFromArray)(combination.products, rule.targetVases);
    };

    var isRuleFulfilled = function isRuleFulfilled(productList, rule) {
        return doesRuleApplyBySources(productList, rule);
    };

    function dilateProductList(combination, requireRules) {
        var changed;

        do {
            changed = false;
            requireRules.forEach(function(rule) {
                if (doesRuleApply(combination.products, rule)) {
                    if (rule.type === _RuleTypeEnum.default.REQUIRE_SOME) {
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

    function erodeProductList(combination, disableRules) {
        disableRules.forEach(function(rule) {
            if (doesDisableRuleApply(combination.products, rule)) {
                applyDisableRule(combination, rule);
            }
        });
        return combination;
    }

    var validate = function validate(combination, validationGroups) {
        var validationResult = {
            valid: true
        };

        var _iterator = _createForOfIteratorHelper(validationGroups),
            _step;

        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var group = _step.value;

                var _doesGroupApply = doesGroupApply(combination.products, group),
                    _doesGroupApply2 = babelHelpers.slicedToArray(_doesGroupApply, 2),
                    groupApplies = _doesGroupApply2[0],
                    triggers = _doesGroupApply2[1];

                if (groupApplies) {
                    validationResult = checkGroup(combination.products, group, triggers);

                    if (!validationResult.valid) {
                        break;
                    }
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }

        combination.validationResult = validationResult;
        return combination;
    };

    _exports.validate = validate;

    var findProductsToHide = function findProductsToHide(bundleProducts, productsThatCanBeHidden, requireShowRules) {
        return productsThatCanBeHidden.filter(function(product) {
            var applyingRules = requireShowRules.filter(function(rule) {
                return doesVisibilityRuleApply(product, rule);
            });

            if (applyingRules.some(function(r) {
                    return r.source === "MR";
                })) {
                return isProductToHide(applyingRules.filter(function(r) {
                    return r.source === "MR";
                }), bundleProducts);
            }

            return isProductToHide(applyingRules, bundleProducts);
        });
    };

    _exports.findProductsToHide = findProductsToHide;

    var isProductToHide = function isProductToHide(applyingRules, bundleProducts) {
        var applyingNoneRules = applyingRules.filter(function(rule) {
            return "NONE" === rule.ruleType;
        });
        var applyingOtherRules = applyingRules.filter(function(rule) {
            return "NONE" !== rule.ruleType;
        });
        return applyingNoneRules.length > 0 && applyingNoneRules.some(function(rule) {
            return !isRuleFulfilled(bundleProducts, rule);
        }) || applyingOtherRules.length > 0 && !applyingOtherRules.some(function(rule) {
            return isRuleFulfilled(bundleProducts, rule);
        });
    };
});
//# sourceMappingURL=RuleUtils.js.map