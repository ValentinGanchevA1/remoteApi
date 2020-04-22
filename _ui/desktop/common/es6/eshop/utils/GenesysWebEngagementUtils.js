const GenesysWebEngagementUtils = function(GenesysWebEngagementUtils) {

    const SIMFREE_ENTRY_TYPE = 'SIMFREE';
    const SIMFREE_PROPOSITION = 'DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS';

    GenesysWebEngagementUtils.pushAddToCartEvent = (compositeProductOfferingId, propositionProductOfferingId, cartBundle) => {
        pushOnCartEvent('add', [createProduct(compositeProductOfferingId, propositionProductOfferingId)], cartBundle);
    };

    GenesysWebEngagementUtils.pushDeleteFromCartEvent = (compositeProductOfferingId, propositionProductOfferingId, cartBundle) => {
        pushOnCartEvent('delete', [createProduct(compositeProductOfferingId, propositionProductOfferingId)], cartBundle);
    };

    GenesysWebEngagementUtils.deleteAllFromCartEvent = (entries) => {
        pushOnCartEvent('deleteAll', buildGweProductList(entries));
    };

    GenesysWebEngagementUtils.pushAddVasToCartEvent = (compositeProductOfferingId, propositionProductOfferingId, cartBundle) => {
        pushOnCartEvent('addVas', [createProduct(compositeProductOfferingId, propositionProductOfferingId)], cartBundle);
    };

    GenesysWebEngagementUtils.pushDeleteVasFromCartEvent = (compositeProductOfferingId, propositionProductOfferingId, cartBundle) => {
        pushOnCartEvent('deleteVas', [createProduct(compositeProductOfferingId, propositionProductOfferingId)], cartBundle);
    };

    function pushOnCartEvent(action, product, cartBundle) {
        let data = {
            action: action,
            product: product
        };
        if (cartBundle) {
            data.cartBundle = cartBundle;
        }
        window._gt = window._gt || [];
        let eventData = {
            data: data
        };
        let event = ['event', 'portalCartChange', eventData];
        console.log(JSON.stringify(event));
        window._gt.push(event);
    }

    function createProduct(compositeProductOfferingId, propositionProductOfferingId) {
        let product = {};
        if (compositeProductOfferingId) {
            product.COMPOSITE_PROD_OFFR_ID = compositeProductOfferingId;
        }
        if (propositionProductOfferingId) {
            product.PROPOSITION_PROD_OFFR_ID = splitProposition(propositionProductOfferingId);
        }
        return product;
    }

    function buildGweProductList(entries) {
        return entries.reduce((products, entry) => [...products, ...buildGweProductListForEntry(entry)], []);
    }

    function buildGweProductListForEntry(entry) {
        let result = [];
        if (entry.entryType !== SIMFREE_ENTRY_TYPE) {
            result.push(createProduct(entry.productCode, entry.bundleCode));
        }
        entry.terminals.forEach(terminal => result.push(createProduct(terminal.productCode, getPropositionIdForEntry(entry))));
        entry.vases.forEach(vas => result.push(createProduct(vas.productCode, getPropositionIdForEntry(entry))))
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

export default GenesysWebEngagementUtils;