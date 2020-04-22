define(["exports", "../actionTypes"], function(e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.selectedEligCode = e.selectedMethod = void 0, i = babelHelpers.interopRequireWildcard(i);
    e.selectedMethod = function(e, t) {
        var d = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case i.SELECT_PAYMENT_METHOD:
                return r.code;
            case i.SELECT_DELIVERY_METHOD:
                return "";
            default:
                return d
        }
    };
    e.selectedEligCode = function(e, t) {
        var d = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case i.SELECT_PAYMENT_METHOD:
                return r.eligCode ? r.eligCode : d;
            case i.SELECT_DELIVERY_METHOD:
                return "";
            default:
                return d
        }
    }
});
//# sourceMappingURL=payment.js.map