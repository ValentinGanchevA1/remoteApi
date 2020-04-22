define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var GenesysWebEngagementUtils = function(GenesysWebEngagementUtils) {
        var SIMFREE_ENTRY_TYPE = 'SIMFREE';
        var SIMFREE_PROPOSITION = 'DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS';

        GenesysWebEngagementUtils.pushAddToCartEvent = function(compositeProductOfferingId, propositionProductOfferingId, cartBundle) {
            pushOnCartEvent('add', [createProduct(compositeProductOfferingId, propositionProductOfferingId)], cartBundle);
        };

        GenesysWebEngagementUtils.pushDeleteFromCartEvent = function(compositeProductOfferingId, propositionProductOfferingId, cartBundle) {
            pushOnCartEvent('delete', [createProduct(compositeProductOfferingId, propositionProductOfferingId)], cartBundle);
        };

        GenesysWebEngagementUtils.deleteAllFromCartEvent = function(entries) {
            pushOnCartEvent('deleteAll', buildGweProductList(entries));
        };

        GenesysWebEngagementUtils.pushAddVasToCartEvent = function(compositeProductOfferingId, propositionProductOfferingId, cartBundle) {
            pushOnCartEvent('addVas', [createProduct(compositeProductOfferingId, propositionProductOfferingId)], cartBundle);
        };

        GenesysWebEngagementUtils.pushDeleteVasFromCartEvent = function(compositeProductOfferingId, propositionProductOfferingId, cartBundle) {
            pushOnCartEvent('deleteVas', [createProduct(compositeProductOfferingId, propositionProductOfferingId)], cartBundle);
        };

        function pushOnCartEvent(action, product, cartBundle) {
            var data = {
                action: action,
                product: product
            };

            if (cartBundle) {
                data.cartBundle = cartBundle;
            }

            window._gt = window._gt || [];
            var eventData = {
                data: data
            };
            var event = ['event', 'portalCartChange', eventData];
            console.log(JSON.stringify(event));

            window._gt.push(event);
        }

        function createProduct(compositeProductOfferingId, propositionProductOfferingId) {
            var product = {};

            if (compositeProductOfferingId) {
                product.COMPOSITE_PROD_OFFR_ID = compositeProductOfferingId;
            }

            if (propositionProductOfferingId) {
                product.PROPOSITION_PROD_OFFR_ID = splitProposition(propositionProductOfferingId);
            }

            return product;
        }

        function buildGweProductList(entries) {
            return entries.reduce(function(products, entry) {
                return [].concat(babelHelpers.toConsumableArray(products), babelHelpers.toConsumableArray(buildGweProductListForEntry(entry)));
            }, []);
        }

        function buildGweProductListForEntry(entry) {
            var result = [];

            if (entry.entryType !== SIMFREE_ENTRY_TYPE) {
                result.push(createProduct(entry.productCode, entry.bundleCode));
            }

            entry.terminals.forEach(function(terminal) {
                return result.push(createProduct(terminal.productCode, getPropositionIdForEntry(entry)));
            });
            entry.vases.forEach(function(vas) {
                return result.push(createProduct(vas.productCode, getPropositionIdForEntry(entry)));
            });
            return result;
        }

        function splitProposition(propositionProdOfferId) {
            return propositionProdOfferId.split('$')[0];
        }

        function getPropositionIdForEntry(entry) {
            return entry.entryType === SIMFREE_ENTRY_TYPE ? SIMFREE_PROPOSITION : entry.bundleCode;
        }

        return GenesysWebEngagementUtils;
    }({});

    var _default = GenesysWebEngagementUtils;
    _exports.default = _default;
});
//# sourceMappingURL=GenesysWebEngagementUtils.js.map