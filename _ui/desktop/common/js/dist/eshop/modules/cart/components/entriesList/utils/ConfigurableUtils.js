define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isRemovable = _exports.isMandatory = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);

    var isMandatory = function isMandatory(productCode, configurables, selectedGroupedProductsIds) {
        if (!Array.isArray(configurables)) {
            //A non-array object for solo fix.
            configurables = [configurables];
        }

        var configurablesForProduct = findConfigurablesForProduct(configurables, productCode);
        return configurablesForProduct.length > 0 && (configurablesForProduct.some(function(c) {
            return isMandatoryForSingleConfigurables(productCode, c, selectedGroupedProductsIds);
        }) || configurablesForProduct.some(function(c) {
            return isRequiredToShowSelectedInGroup(productCode, c, selectedGroupedProductsIds);
        }));
    };

    _exports.isMandatory = isMandatory;

    var isMandatoryForSingleConfigurables = function isMandatoryForSingleConfigurables(productCode, configurablesObject, selectedGroupedProductsIds) {
        return configurablesObject.mandatoryProducts.includes(productCode) || configurablesObject.relations.filter(function(r) {
            return r.type === "REQUIRE";
        }).some(function(g) {
            return g.targetVases.some(function(v) {
                return v === productCode;
            }) && g.sourceVases.some(function(v) {
                return selectedGroupedProductsIds.includes(v);
            });
        });
    };

    var isRequiredToShowSelectedInGroup = function isRequiredToShowSelectedInGroup(productCode, configurablesObject, selectedGroupedProductsIds) {
        var requireShowRelations = configurablesObject.relations.filter(function(r) {
            return r.type === "SHOW";
        }).filter(function(r) {
            return r.ruleType === "ANY" || r.ruleType === "ALL";
        }).filter(function(r) {
            return r.targetVases.some(function(v) {
                return selectedGroupedProductsIds.includes(v);
            });
        });

        if (requireShowRelations.some(function(r) {
                return r.source === "MR";
            })) {
            return requireShowRelations.filter(function(r) {
                return r.source === "MR";
            }).some(function(r) {
                return r.sourceVases.some(function(v) {
                    return v === productCode;
                });
            });
        } else {
            return requireShowRelations.some(function(r) {
                return r.sourceVases.some(function(v) {
                    return v === productCode;
                });
            });
        }
    };

    var findConfigurablesForProduct = function findConfigurablesForProduct(configurables, productCode) {
        return configurables.filter(function(c) {
            return !!c;
        }).filter(function(c) {
            return [].concat(babelHelpers.toConsumableArray(c.services || []), babelHelpers.toConsumableArray(c.devices || []), babelHelpers.toConsumableArray(c.gadgets || [])).map(function(p) {
                return p.id;
            }).some(function(p) {
                return p === productCode;
            });
        });
    };

    var isRemovable = function isRemovable(configurables, mandatoryProducts, productCode) {
        if (!configurables) {
            return false;
        }

        if (_lodash.default.includes(mandatoryProducts, productCode)) {
            return false;
        }

        if (!Array.isArray(configurables)) {
            //A non-array object for solo fix.
            configurables = [configurables];
        } else if (configurables.length === 0) {
            return false;
        }

        var configurablesForProduct = findConfigurablesForProduct(configurables, productCode);
        return configurablesForProduct.length === 0 || !configurablesForProduct.some(function(c) {
            return c.groups.some(function(g) {
                return isMandatoryByValidationGroup(g, mandatoryProducts, productCode);
            });
        });
    };

    _exports.isRemovable = isRemovable;

    var isMandatoryByValidationGroup = function isMandatoryByValidationGroup(group, mandatoryProducts, productCode) {
        return _lodash.default.includes(group.targetProducts, productCode) && mandatoryProducts.some(function(m) {
            return group.conditionalProducts.includes(m);
        });
    };
});
//# sourceMappingURL=ConfigurableUtils.js.map