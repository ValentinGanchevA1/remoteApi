define(["exports", "../actionTypes"], function(_exports, actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.searchCustomerReducer = void 0;
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

    var searchCustomerReducer = function searchCustomerReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            performed: false,
            displayForceSearchModal: false
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.CUSTOMER_SEARCHED:
                return _objectSpread({}, state, {
                    performed: true
                });

            case actionTypes.SHOW_FORCE_SEARCH_MODAL_ACTION:
                return _objectSpread({}, state, {
                    displayForceSearchModal: true
                });

            default:
                return state;
        }
    };

    _exports.searchCustomerReducer = searchCustomerReducer;
});
//# sourceMappingURL=searchCustomer.js.map