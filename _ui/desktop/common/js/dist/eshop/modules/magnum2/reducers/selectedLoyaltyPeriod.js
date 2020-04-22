define(["exports", "../actionTypes"], function(_exports, actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);

    var selectedLoyaltyPeriodReducer = function selectedLoyaltyPeriodReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SET_LOYALTY_PERIOD:
                return action.payload.loyaltyPeriod;

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.selectedLoyaltyPeriod;

            default:
                return state;
        }
    };

    var _default = selectedLoyaltyPeriodReducer;
    _exports.default = _default;
});
//# sourceMappingURL=selectedLoyaltyPeriod.js.map