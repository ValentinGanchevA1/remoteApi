define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.selectedEligCode = _exports.selectedMethod = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var selectedMethod = function selectedMethod() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_PAYMENT_METHOD:
                return action.code;

            case ACTIONS.SELECT_DELIVERY_METHOD:
                return '';

            default:
                return state;
        }
    };

    _exports.selectedMethod = selectedMethod;

    var selectedEligCode = function selectedEligCode() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_PAYMENT_METHOD:
                if (action.eligCode) return action.eligCode;
                else return state;

            case ACTIONS.SELECT_DELIVERY_METHOD:
                return '';

            default:
                return state;
        }
    };

    _exports.selectedEligCode = selectedEligCode;
});
//# sourceMappingURL=payment.js.map