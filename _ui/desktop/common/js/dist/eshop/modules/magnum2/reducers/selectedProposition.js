define(["exports", "../actionTypes", "../../checkout/actionTypes"], function(_exports, actionTypes, checkoutActionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);
    checkoutActionTypes = babelHelpers.interopRequireWildcard(checkoutActionTypes);

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

    var selectedPropositionReducer = function selectedPropositionReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SELECT_PROPOSITION:
                return _objectSpread({}, action.payload.proposition);

            case checkoutActionTypes.fetchZipCodeFromWWT.reset:
                return null;

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.selectedProposition;

            default:
                return state;
        }
    };

    var _default = selectedPropositionReducer;
    _exports.default = _default;
});
//# sourceMappingURL=selectedProposition.js.map