define(["exports", "../actionTypes"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n);

    function a(e, a) {
        var l = 0 < arguments.length && void 0 !== e ? e : null,
            t = 1 < arguments.length ? a : void 0;
        switch (t.type) {
            case n.SET_AVAILABLE_BUNDLE_TYPES:
                return t.payload.availableBundleTypes;
            case n.SET_MAGNUM_STORE:
                return t.payload.magnum.availableBundleTypes;
            default:
                return l
        }
    }
    e.default = a
});
//# sourceMappingURL=availableBundleTypes.js.map