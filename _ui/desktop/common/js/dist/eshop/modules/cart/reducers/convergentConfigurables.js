define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.convergentConfigurablesReducer = void 0;
    var initialConvergentVasesState = {
        configurables: []
    };

    var convergentConfigurablesReducer = function convergentConfigurablesReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialConvergentVasesState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_CONVERGENT_CONFIGURABLES:
                return {
                    configurables: babelHelpers.toConsumableArray(action.payload.configurables)
                };

            default:
                return state;
        }
    };

    _exports.convergentConfigurablesReducer = convergentConfigurablesReducer;
});
//# sourceMappingURL=convergentConfigurables.js.map