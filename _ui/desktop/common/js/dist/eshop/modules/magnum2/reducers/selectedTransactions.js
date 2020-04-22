define(["exports", "../actionTypes"], function(_exports, actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.selectedMobileTransactionReducer = _exports.selectedFixVoipTransactionReducer = _exports.selectedFixBroadbandTransactionReducer = void 0;
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

    var selectedFixBroadbandTransactionReducer = function selectedFixBroadbandTransactionReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            process: null,
            number: null,
            pots: false
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SET_FIX_BROADBAND_TRANSACTION:
                return action.payload.transaction;

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.selectedFixBroadbandTransaction;

            default:
                return state;
        }
    };

    _exports.selectedFixBroadbandTransactionReducer = selectedFixBroadbandTransactionReducer;

    var selectedFixVoipTransactionReducer = function selectedFixVoipTransactionReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            process: null,
            number: null,
            pots: false
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SET_FIX_VOIP_TRANSACTION:
                return action.payload.transaction;

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.selectedFixVoipTransaction;

            default:
                return state;
        }
    };

    _exports.selectedFixVoipTransactionReducer = selectedFixVoipTransactionReducer;

    var selectedMobileTransactionReducer = function selectedMobileTransactionReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            process: null,
            number: null,
            pots: false
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.SET_MOBILE_TRANSACTION:
                return _objectSpread({}, action.payload.transaction, {
                    number: action.payload.msisdn
                });

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.selectedMobileTransaction;

            default:
                return state;
        }
    };

    _exports.selectedMobileTransactionReducer = selectedMobileTransactionReducer;
});
//# sourceMappingURL=selectedTransactions.js.map