define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.closeErrorModal = _exports.openErrorModal = void 0;
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

    var openErrorModal = function openErrorModal(errorMessageCode, defaultMessage) {
        var errorModalConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OPEN_ERROR_MODAL,
                payload: {
                    errorMessage: {
                        errorMessageCode: errorMessageCode,
                        defaultMessage: defaultMessage
                    },
                    errorModalConfig: _objectSpread({}, defaultModalConfig, {}, errorModalConfig)
                }
            });
        };
    };

    _exports.openErrorModal = openErrorModal;

    var closeErrorModal = function closeErrorModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_ERROR_MODAL
            });
        };
    };

    _exports.closeErrorModal = closeErrorModal;
});
//# sourceMappingURL=errors.js.map