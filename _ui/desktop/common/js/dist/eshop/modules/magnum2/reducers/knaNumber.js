define(["exports", "../actionTypes"], function(_exports, actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);

    var knaNumberReducer = function knaNumberReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SET_KNA_NUMBER:
                return action.payload.knaNumber;

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.knaNumber;

            default:
                return state;
        }
    };

    var _default = knaNumberReducer;
    _exports.default = _default;
});
//# sourceMappingURL=knaNumber.js.map