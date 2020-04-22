define(["exports", "redux", "../actionTypes"], function(e, t, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isDeathCertificateConfirmed = e.isPaymentPlanAssigned = void 0;
    e.isPaymentPlanAssigned = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE:
                return n.payload;
            default:
                return i
        }
    };
    e.isDeathCertificateConfirmed = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.CONFIRMATION_DEATH_CHANGE:
                return n.payload;
            default:
                return i
        }
    }
});
//# sourceMappingURL=assignment.js.map