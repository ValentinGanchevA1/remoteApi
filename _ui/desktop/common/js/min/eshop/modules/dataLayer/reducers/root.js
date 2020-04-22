define(["exports", "redux", "../../cart/actionTypes", "../../../utils/DataLayerUtils", "../../checkout/selectors"], function(e, t, a, r, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), r = babelHelpers.interopRequireDefault(r);

    function o(e, t) {
        var a = 0 < arguments.length && void 0 !== e ? e : d,
            l = 1 < arguments.length ? t : void 0;
        return "dataLayer" === l.type ? r.default.createUniversalCheckoutStepEvent(l.payload, l.stepId, {
            loggedEmployee: l.loggedEmployee
        }) : a
    }
    var d = {
        event: {}
    };
    e.default = o
});
//# sourceMappingURL=root.js.map