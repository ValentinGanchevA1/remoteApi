define(["exports", "../actionTypes", "../../checkout/actionTypes"], function(_exports, _actionTypes, _actionTypes2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

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

    var _default = function _default() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.DOCUMENT_READY_TO_DOWNLOAD:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.code, action.link));

            case _actionTypes2.PICKUP_DOCUMENT_DOWNLOAD_DONE:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.code + "_" + action.bundleNo, action.link));

            case _actionTypes.DOCUMENT_LINK_CLEAR:
                return {};

            default:
                return state;
        }
    };

    _exports.default = _default;
});
//# sourceMappingURL=links.js.map