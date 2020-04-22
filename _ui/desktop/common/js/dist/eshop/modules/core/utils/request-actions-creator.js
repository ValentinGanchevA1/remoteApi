define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.createRequestActions = createRequestActions;
    _exports.createRequestActionTypes = void 0;

    var createRequestActionTypes = function createRequestActionTypes(name) {
        return {
            start: "".concat(name, "_REQUEST_START"),
            success: "".concat(name, "_REQUEST_SUCCESS"),
            error: "".concat(name, "_REQUEST_ERROR"),
            reset: "".concat(name, "_REQUEST_RESET")
        };
    };

    _exports.createRequestActionTypes = createRequestActionTypes;

    function createRequestActions(types) {
        return {
            start: function start(payload) {
                return {
                    type: types.start,
                    payload: payload
                };
            },
            success: function success(payload) {
                return {
                    type: types.success,
                    payload: payload
                };
            },
            error: function error(_error) {
                return {
                    type: types.error,
                    error: _error && _error.errorMessage
                };
            },
            reset: function reset() {
                return {
                    type: types.reset
                };
            }
        };
    }
});
//# sourceMappingURL=request-actions-creator.js.map