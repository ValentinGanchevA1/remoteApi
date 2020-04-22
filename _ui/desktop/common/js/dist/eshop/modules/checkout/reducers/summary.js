define(["exports", "redux", "../actionTypes"], function(_exports, _redux, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.summary = void 0;

    var summary = function summary() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.REGISTER_COMPONENT_PROPS_VALUE:
                return action.payload;

            default:
                return state;
        }
    }; // export const summary = combineReducers({
    //     summary
    //     });


    _exports.summary = summary;
});
//# sourceMappingURL=summary.js.map