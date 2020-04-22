define(["exports", "../actionTypes"], function(e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r);

    function t(e, t) {
        var a = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SET_KNA_NUMBER:
                return n.payload.knaNumber;
            case r.SET_MAGNUM_STORE:
                return n.payload.magnum.knaNumber;
            default:
                return a
        }
    }
    e.default = t
});
//# sourceMappingURL=knaNumber.js.map