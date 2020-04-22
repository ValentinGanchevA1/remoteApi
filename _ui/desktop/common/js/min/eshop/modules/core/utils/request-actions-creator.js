define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createRequestActions = function(t) {
        return {
            start: function(e) {
                return {
                    type: t.start,
                    payload: e
                }
            },
            success: function(e) {
                return {
                    type: t.success,
                    payload: e
                }
            },
            error: function(e) {
                return {
                    type: t.error,
                    error: e && e.errorMessage
                }
            },
            reset: function() {
                return {
                    type: t.reset
                }
            }
        }
    }, e.createRequestActionTypes = void 0;
    e.createRequestActionTypes = function(e) {
        return {
            start: "".concat(e, "_REQUEST_START"),
            success: "".concat(e, "_REQUEST_SUCCESS"),
            error: "".concat(e, "_REQUEST_ERROR"),
            reset: "".concat(e, "_REQUEST_RESET")
        }
    }
});
//# sourceMappingURL=request-actions-creator.js.map