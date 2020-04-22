export function changeSelectedVariantOnList(store, selectedVariant, product) {
    let products = store.simfree.list.products.data;
    if (products) {
        products.forEach((single) => {
            if (single.productId === product) {
                single.selectedVariant = selectedVariant.productId;
            }
        });
    }
    return products;
}
export function changeSelectedVariantOnRecommended(store, selectedVariant, product, products) {
    if (products) {
        products.forEach((single) => {
            if (single.productId === product) {
                single.selectedVariant = selectedVariant.productId;
            }
        });
    }
    return products;
}
export default {
    changeVariant: (store, selectedVariant, product) => {
        return changeSelectedVariantOnList(store, selectedVariant, product);
    },
    changeRecommendedVariant: (store, selectedVariant, product, products) => {
        return changeSelectedVariantOnRecommended(store, selectedVariant, product, products);
    }
}