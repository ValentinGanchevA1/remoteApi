define(["exports", "../actionTypes"], function(e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r);

    function t(e, t) {
        var l = 0 < arguments.length && void 0 !== e ? e : null,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case r.SET_LOYALTY_PERIOD:
                return a.payload.loyaltyPeriod;
            case r.SET_MAGNUM_STORE:
                return a.payload.magnum.selectedLoyaltyPeriod;
            default:
                return l
        }
    }
    e.default = t
});
//# sourceMappingURL=selectedLoyaltyPeriod.js.map