import {
    sumArraysWithoutDupes,
    removeAllFromArray
} from "./ArrayUtils";

export function createBaseCombination(cartProducts, realMandatoryCombination) {
    let products = sumArraysWithoutDupes(cartProducts, realMandatoryCombination.products);
    let combination = createCombination(products);
    combination.autoadded = realMandatoryCombination.autoadded;
    return combination;
}

export function createSmallerCombinations(cartProducts, realMandatoryCombination) {
    let products = sumArraysWithoutDupes(cartProducts, realMandatoryCombination.products);
    let removableProducts = removeAllFromArray(products, realMandatoryCombination.products);
    let combinations = [];
    for (let removableProduct of removableProducts) {
        let combination = createCombination(products, null, removableProduct);
        combination.autoadded = removeAllFromArray(realMandatoryCombination.autoadded, [removableProduct]);
        combinations.push(combination);
    }
    return combinations;
}

const createCombination = (cartProducts, addProduct, dropProduct) => {
    let combination = {};
    combination.products = cartProducts.slice();
    combination.autoadded = [];
    if (!!addProduct) {
        combination.name = "add_" + addProduct;
        combination.products.push(addProduct);
    } else if (!!dropProduct) {
        combination.name = "drop_" + dropProduct;
        combination.products = combination.products.filter(e => e !== dropProduct);
    } else {
        combination.name = "selection";
    }
    return combination;
}