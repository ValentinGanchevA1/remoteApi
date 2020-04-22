define(["exports", "../actionTypes"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.closeErrorModal = e.openErrorModal = void 0, n = babelHelpers.interopRequireWildcard(n);
    e.openErrorModal = function(r, o) {
        return function(e) {
            e({
                type: n.OPEN_ERROR_MODAL,
                payload: {
                    errorMessageCode: r,
                    defaultMessage: o
                }
            })
        }
    };
    e.closeErrorModal = function() {
        return function(e) {
            e({
                type: n.CLOSE_ERROR_MODAL
            })
        }
    }
});
//# sourceMappingURL=errors.js.map