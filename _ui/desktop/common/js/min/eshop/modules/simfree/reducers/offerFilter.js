define(["exports", "../actionTypes", "eshop/utils/OnlineUtils"], function(e, n, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.openVerificationModal = e.verificationNeeded = void 0, n = babelHelpers.interopRequireWildcard(n), i = babelHelpers.interopRequireDefault(i);
    e.verificationNeeded = function(e, i) {
        var t = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? i : void 0).type) {
            case n.VERIFICATION_NEEDED:
                return !0;
            default:
                return t
        }
    };
    e.openVerificationModal = function(e, i) {
        var t = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? i : void 0).type) {
            case n.OPEN_VERIFICATION_MODAL:
                return !0;
            case n.CLOSE_VERIFICATION_MODAL:
                return !1;
            default:
                return t
        }
    }
});
//# sourceMappingURL=offerFilter.js.map