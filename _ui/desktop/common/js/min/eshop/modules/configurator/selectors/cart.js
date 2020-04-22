define(["exports", "Reselect", "./root"], function(e, r, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = (e.addToCartInProgress = void 0, r.createSelector)(t.getCart, function(e) {
        return e.addToCartInProgress
    });
    e.addToCartInProgress = o
});
//# sourceMappingURL=cart.js.map