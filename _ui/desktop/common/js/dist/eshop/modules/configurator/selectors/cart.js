define(["exports", "Reselect", "./root"], function(_exports, _Reselect, _root) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.addToCartInProgress = void 0;
    var addToCartInProgress = (0, _Reselect.createSelector)(_root.getCart, function(cart) {
        return cart.addToCartInProgress;
    });
    _exports.addToCartInProgress = addToCartInProgress;
});
//# sourceMappingURL=cart.js.map