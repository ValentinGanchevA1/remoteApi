define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.changeSelectedVariantOnList = changeSelectedVariantOnList;
    _exports.changeSelectedVariantOnRecommended = changeSelectedVariantOnRecommended;
    _exports.default = void 0;

    function changeSelectedVariantOnList(store, selectedVariant, product) {
        var products = store.simfree.list.products.data;

        if (products) {
            products.forEach(function(single) {
                if (single.productId === product) {
                    single.selectedVariant = selectedVariant.productId;
                }
            });
        }

        return products;
    }

    function changeSelectedVariantOnRecommended(store, selectedVariant, product, products) {
        if (products) {
            products.forEach(function(single) {
                if (single.productId === product) {
                    single.selectedVariant = selectedVariant.productId;
                }
            });
        }

        return products;
    }

    var _default = {
        changeVariant: function changeVariant(store, selectedVariant, product) {
            return changeSelectedVariantOnList(store, selectedVariant, product);
        },
        changeRecommendedVariant: function changeRecommendedVariant(store, selectedVariant, product, products) {
            return changeSelectedVariantOnRecommended(store, selectedVariant, product, products);
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=listUtils.js.map