define(["exports", "../actionTypes"], function(e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    e.default = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            d = 1 < arguments.length ? t : void 0;
        switch (d.type) {
            case i.FETCH_DOCUMENTS_FOR_CART:
                return d.payload;
            default:
                return n
        }
    }
});
//# sourceMappingURL=items.js.map