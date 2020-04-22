define(["exports", "../actionTypes"], function(_exports, actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);

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

    var documentsReducer = function documentsReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            list: [],
            loading: false
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.fetchDocumentsList.success:
                return _objectSpread({}, state, {
                    list: action.payload,
                    loading: false
                });

            case actionTypes.fetchDocumentsList.start:
                return _objectSpread({}, state, {
                    loading: true
                });

            case actionTypes.fetchDocumentsList.error:
                return _objectSpread({}, state, {
                    loading: false
                });

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.documents;

            default:
                return state;
        }
    };

    var _default = documentsReducer;
    _exports.default = _default;
});
//# sourceMappingURL=documents.js.map