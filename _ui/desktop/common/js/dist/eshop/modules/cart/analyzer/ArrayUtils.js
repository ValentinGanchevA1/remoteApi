define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.commonPartOfArrays = _exports.removeAllFromArray = _exports.sumArraysWithoutDupes = void 0;

    var sumArraysWithoutDupes = function sumArraysWithoutDupes(arrayA, arrayB) {
        return arrayA.concat(arrayB.filter(function(element) {
            return !arrayA.includes(element);
        }));
    };

    _exports.sumArraysWithoutDupes = sumArraysWithoutDupes;

    var removeAllFromArray = function removeAllFromArray(arrayA, arrayB) {
        return arrayA.filter(function(element) {
            return !arrayB.includes(element);
        });
    };

    _exports.removeAllFromArray = removeAllFromArray;

    var commonPartOfArrays = function commonPartOfArrays(arrayA, arrayB) {
        return arrayA.filter(function(element) {
            return arrayB.includes(element);
        });
    };

    _exports.commonPartOfArrays = commonPartOfArrays;
});
//# sourceMappingURL=ArrayUtils.js.map