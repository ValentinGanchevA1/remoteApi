define(["exports", "redux", "../../cart/actionTypes", "../../../utils/DataLayerUtils", "../../checkout/selectors"], function(_exports, _redux, ACTIONS, _DataLayerUtils, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _DataLayerUtils = babelHelpers.interopRequireDefault(_DataLayerUtils);
    var initialState = {
        event: {}
    };

    var dataLayer = function dataLayer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        // console.warn("dataLayer REDUCER", {state});
        if (action.type === 'dataLayer') {
            // console.warn('dataLayer reducer', {action});
            // debugger;
            return _DataLayerUtils.default.createUniversalCheckoutStepEvent(action.payload, action.stepId, {
                loggedEmployee: action.loggedEmployee
            });
        }

        return state;
    };

    var _default = dataLayer;
    _exports.default = _default;
});
//# sourceMappingURL=root.js.map