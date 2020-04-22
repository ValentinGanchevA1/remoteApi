define(["exports", "../actionTypes"], function(_exports, actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);

    var availableBundleTypesReducer = function availableBundleTypesReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SET_AVAILABLE_BUNDLE_TYPES:
                return action.payload.availableBundleTypes;

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.availableBundleTypes;

            default:
                return state;
        }
    };

    var _default = availableBundleTypesReducer;
    _exports.default = _default;
});
//# sourceMappingURL=availableBundleTypes.js.map