define(["exports", "../actionTypes", "../../checkout/actionTypes"], function(_exports, actionTypes, checkoutActionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);
    checkoutActionTypes = babelHelpers.interopRequireWildcard(checkoutActionTypes);

    var selectedDeviceReducer = function selectedDeviceReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SELECT_DEVICE_VARIANT:
                return {
                    productId: action.payload.productId,
                        variantId: action.payload.variantId
                };

            case actionTypes.SELECT_PROPOSITION:
            case checkoutActionTypes.fetchZipCodeFromWWT.reset:
                return null;

            default:
                return state;
        }
    };

    var _default = selectedDeviceReducer;
    _exports.default = _default;
});
//# sourceMappingURL=selectedDevice.js.map