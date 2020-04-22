define(["exports", "../actionTypes"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.addToCartInProgress = void 0;
    e.addToCartInProgress = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case n.POST_TO_CART_START:
                return !0;
            case n.POST_TO_CART_SUCCESS:
            case n.POST_TO_CART_ERROR:
                return !1;
            default:
                return r
        }
    }
});
//# sourceMappingURL=cart.js.map