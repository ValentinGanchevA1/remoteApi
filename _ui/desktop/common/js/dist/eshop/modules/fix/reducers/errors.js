define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.errorModalConfig = _exports.errorMessage = _exports.showErrorModal = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var defaultModalConfig = {
        showIcon: true
    };

    var showErrorModal = function showErrorModal() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.OPEN_ERROR_MODAL:
                return true;

            case ACTIONS.CLOSE_ERROR_MODAL:
                return false;

            default:
                return state;
        }
    };

    _exports.showErrorModal = showErrorModal;

    var errorMessage = function errorMessage() {
        var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.OPEN_ERROR_MODAL:
                return action.payload.errorMessage;

            default:
                return message;
        }
    };

    _exports.errorMessage = errorMessage;

    var errorModalConfig = function errorModalConfig() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultModalConfig;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.OPEN_ERROR_MODAL:
                return _objectSpread({}, state, {}, action.payload.errorModalConfig);

            default:
                return state;
        }
    };

    _exports.errorModalConfig = errorModalConfig;
});
//# sourceMappingURL=errors.js.map