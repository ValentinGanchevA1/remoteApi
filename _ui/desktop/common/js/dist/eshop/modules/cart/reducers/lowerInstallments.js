define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.bundleNo = _exports.visibleModal = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var visibleModal = function visibleModal() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.LOWER_INSTALLMENTS_MODAL_OPEN:
                return true;

            case ACTIONS.LOWER_INSTALLMENTS_MODAL_CLOSE:
                return false;

            default:
                return state;
        }
    };

    _exports.visibleModal = visibleModal;

    var bundleNo = function bundleNo() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.LOWER_INSTALLMENTS_MODAL_OPEN:
                return action.bundleNo;

            default:
                return state;
        }
    };

    _exports.bundleNo = bundleNo;
});
//# sourceMappingURL=lowerInstallments.js.map