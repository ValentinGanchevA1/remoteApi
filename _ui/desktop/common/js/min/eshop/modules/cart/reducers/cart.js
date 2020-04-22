define(["exports", "../actionTypes"], function(e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cartData = void 0;
    var r = {
            checkoutCost: {},
            oneTimeCost: {},
            monthlyCosts: []
        },
        c = {
            currency: "zł",
            gross: "0,00",
            monthFrom: null,
            monthTo: null,
            net: "0,00",
            price: 0
        };
    e.cartData = function(e, t) {
        var o = 0 < arguments.length && void 0 !== e ? e : r,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case s.FETCH_CART:
                return Object.assign({}, o, a.payload);
            case s.REMOVE_FROM_CART:
            case s.REMOVE_TERMINAL_FROM_CART_BUNDLE:
                var n = Object.assign({}, o, a.payload);
                return a.payload.entries && a.payload.entries.length || (n.checkoutCost = c, n.devices = []), n;
            default:
                return o
        }
    }
});
//# sourceMappingURL=cart.js.map