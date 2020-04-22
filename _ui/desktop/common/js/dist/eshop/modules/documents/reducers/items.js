define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    var _default = function _default() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_DOCUMENTS_FOR_CART:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.default = _default;
});
//# sourceMappingURL=items.js.map