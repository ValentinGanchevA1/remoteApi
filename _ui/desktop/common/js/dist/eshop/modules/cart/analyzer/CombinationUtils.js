define(["exports", "./ArrayUtils"], function(_exports, _ArrayUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.createBaseCombination = createBaseCombination;
    _exports.createSmallerCombinations = createSmallerCombinations;

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

    function createBaseCombination(cartProducts, realMandatoryCombination) {
        var products = (0, _ArrayUtils.sumArraysWithoutDupes)(cartProducts, realMandatoryCombination.products);
        var combination = createCombination(products);
        combination.autoadded = realMandatoryCombination.autoadded;
        return combination;
    }

    function createSmallerCombinations(cartProducts, realMandatoryCombination) {
        var products = (0, _ArrayUtils.sumArraysWithoutDupes)(cartProducts, realMandatoryCombination.products);
        var removableProducts = (0, _ArrayUtils.removeAllFromArray)(products, realMandatoryCombination.products);
        var combinations = [];

        var _iterator = _createForOfIteratorHelper(removableProducts),
            _step;

        try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var removableProduct = _step.value;
                var combination = createCombination(products, null, removableProduct);
                combination.autoadded = (0, _ArrayUtils.removeAllFromArray)(realMandatoryCombination.autoadded, [removableProduct]);
                combinations.push(combination);
            }
        } catch (err) {
            _iterator.e(err);
        } finally {
            _iterator.f();
        }

        return combinations;
    }

    var createCombination = function createCombination(cartProducts, addProduct, dropProduct) {
        var combination = {};
        combination.products = cartProducts.slice();
        combination.autoadded = [];

        if (!!addProduct) {
            combination.name = "add_" + addProduct;
            combination.products.push(addProduct);
        } else if (!!dropProduct) {
            combination.name = "drop_" + dropProduct;
            combination.products = combination.products.filter(function(e) {
                return e !== dropProduct;
            });
        } else {
            combination.name = "selection";
        }

        return combination;
    };
});
//# sourceMappingURL=CombinationUtils.js.map