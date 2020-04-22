define(["exports", "../actionTypes"], function(_exports, actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);

    var propositionComponentPkReducer = function propositionComponentPkReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SET_PROPOSITION_COMPONENT_PK:
                return action.payload.componentPk;

            default:
                return state;
        }
    };

    var _default = propositionComponentPkReducer;
    _exports.default = _default;
});
//# sourceMappingURL=propositionComponentPk.js.map