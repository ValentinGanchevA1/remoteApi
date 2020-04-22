define(["exports", "../actionTypes", "eshop/utils/OnlineUtils"], function(_exports, ACTIONS, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.openVerificationModal = _exports.verificationNeeded = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    var verificationNeeded = function verificationNeeded() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.VERIFICATION_NEEDED:
                return true;

            default:
                return state;
        }
    };

    _exports.verificationNeeded = verificationNeeded;

    var openVerificationModal = function openVerificationModal() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.OPEN_VERIFICATION_MODAL:
                return true;

            case ACTIONS.CLOSE_VERIFICATION_MODAL:
                return false;

            default:
                return state;
        }
    };

    _exports.openVerificationModal = openVerificationModal;
});
//# sourceMappingURL=offerFilter.js.map