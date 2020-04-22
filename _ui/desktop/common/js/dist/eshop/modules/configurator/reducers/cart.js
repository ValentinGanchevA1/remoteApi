define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.addToCartInProgress = void 0;

    var addToCartInProgress = function addToCartInProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.POST_TO_CART_START:
                return true;

            case _actionTypes.POST_TO_CART_SUCCESS:
                return false;

            case _actionTypes.POST_TO_CART_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.addToCartInProgress = addToCartInProgress;
});
//# sourceMappingURL=cart.js.map