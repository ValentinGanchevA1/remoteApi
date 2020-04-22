define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.mode = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var mode = function mode() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MIGRATION_MODE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.mode = mode;
});
//# sourceMappingURL=migration.js.map