define(["exports", "../actionTypes", "../../checkout/actionTypes"], function(e, d, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, d = babelHelpers.interopRequireWildcard(d), i = babelHelpers.interopRequireWildcard(i);

    function t(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : null,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case d.SELECT_DEVICE_VARIANT:
                return {
                    productId: a.payload.productId, variantId: a.payload.variantId
                };
            case d.SELECT_PROPOSITION:
            case i.fetchZipCodeFromWWT.reset:
                return null;
            default:
                return r
        }
    }
    e.default = t
});
//# sourceMappingURL=selectedDevice.js.map