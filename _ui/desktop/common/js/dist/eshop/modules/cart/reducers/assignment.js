define(["exports", "redux", "../actionTypes"], function(_exports, _redux, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isDeathCertificateConfirmed = _exports.isPaymentPlanAssigned = void 0;

    var isPaymentPlanAssigned = function isPaymentPlanAssigned() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.isPaymentPlanAssigned = isPaymentPlanAssigned;

    var isDeathCertificateConfirmed = function isDeathCertificateConfirmed() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CONFIRMATION_DEATH_CHANGE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.isDeathCertificateConfirmed = isDeathCertificateConfirmed;
});
//# sourceMappingURL=assignment.js.map