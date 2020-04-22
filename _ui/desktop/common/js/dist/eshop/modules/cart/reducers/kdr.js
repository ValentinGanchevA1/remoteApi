define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.saving = _exports.error = _exports.accepted = _exports.kdrSource = _exports.kdrNumber = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var kdrNumber = function kdrNumber() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.KDR_NUMBER_CHANGE:
                return action.payload;

            case ACTIONS.KDR_CART_DATA:
                return action.payload.number;

            case ACTIONS.KDR_NUMBER_CLEAR:
                return "";

            default:
                return state;
        }
    };

    _exports.kdrNumber = kdrNumber;

    var kdrSource = function kdrSource() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.KDR_CART_DATA:
                return action.payload.source;

            case ACTIONS.KDR_NUMBER_CLEAR:
                return "";

            case ACTIONS.KDR_NUMBER_CHANGE:
                return "input";

            default:
                return state;
        }
    };

    _exports.kdrSource = kdrSource;

    var accepted = function accepted() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.KDR_CART_DATA:
                return !!action.payload && !!action.payload.number;

            case ACTIONS.KDR_NUMBER_APPROVE:
                return true;

            case ACTIONS.KDR_NUMBER_CHANGE:
            case ACTIONS.KDR_NUMBER_CLEAR:
            case ACTIONS.KDR_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.accepted = accepted;

    var error = function error() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.KDR_ERROR:
                return action.value;

            case ACTIONS.KDR_NUMBER_APPROVE:
            case ACTIONS.KDR_NUMBER_CHANGE:
            case ACTIONS.KDR_NUMBER_CLEAR:
            case ACTIONS.KDR_CART_DATA:
                return {};

            default:
                return state;
        }
    };

    _exports.error = error;

    var saving = function saving() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.KDR_SAVING:
                return true;

            case ACTIONS.KDR_SAVED:
            case ACTIONS.KDR_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.saving = saving;
});
//# sourceMappingURL=kdr.js.map