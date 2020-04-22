define(["exports", "../../core/constants/RequestState", "../actionTypes"], function(_exports, _RequestState, actionTypes) {
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

    var initialPossibleTransactionsState = {
        requestState: _RequestState.RequestState.None,
        transactions: [],
        cimId: null
    };

    var possibleTransactionsReducer = function possibleTransactionsReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPossibleTransactionsState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.fetchPossibleTransactions.start:
                return {
                    requestState: _RequestState.RequestState.Waiting,
                        transactions: state.transactions,
                        cimId: null
                };

            case actionTypes.fetchPossibleTransactions.success:
                return {
                    requestState: _RequestState.RequestState.Success,
                        transactions: babelHelpers.toConsumableArray(action.payload.transactionDatas),
                        cimId: action.payload.cimId,
                        userSalesChannel: action.payload.userSalesChannel
                };

            case actionTypes.fetchPossibleTransactions.error:
                return _objectSpread({}, state, {
                    requestState: _RequestState.RequestState.Error,
                    transactions: [],
                    cimId: null
                });

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.possibleTransactions;

            default:
                return state;
        }
    };

    var _default = possibleTransactionsReducer;
    _exports.default = _default;
});
//# sourceMappingURL=possibleTransactions.js.map