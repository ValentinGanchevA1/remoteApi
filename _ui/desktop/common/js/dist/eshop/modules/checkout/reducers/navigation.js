define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.errorCode = _exports.inProgress = void 0;

    var inProgress = function inProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
                return true;

            case _actionTypes.GOTO_CHECKOUT_NEXT:
                return true;

            case _actionTypes.DO_CHECKOUT_STEP_DONE:
            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.inProgress = inProgress;

    var errorCode = function errorCode() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DO_CHECKOUT_STEP_START:
                return null;

            case _actionTypes.DO_CHECKOUT_STEP_ERROR:
                return action.code || "-1";

            default:
                return state;
        }
    };

    _exports.errorCode = errorCode;
});
//# sourceMappingURL=navigation.js.map