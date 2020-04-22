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

    var initialDurationListState = {
        requestState: _RequestState.RequestState.None,
        requestId: null,
        durations: [],
        propositions: [],
        productListDescription: null,
        showOnlyFTTH: true,
        paragraphsAbove: [],
        paragraphsBelow: []
    };

    var durationListReducer = function durationListReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialDurationListState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.fetchPropositionList.start:
                return _objectSpread({}, state, {
                    requestState: _RequestState.RequestState.Waiting,
                    durations: [],
                    propositions: [],
                    requestId: action.payload.requestId,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
                });

            case actionTypes.fetchPropositionList.success:
                return _objectSpread({}, state, {}, action.payload, {
                    requestState: _RequestState.RequestState.Success
                });

            case actionTypes.fetchPropositionList.error:
                return _objectSpread({}, state, {
                    requestState: _RequestState.RequestState.Error,
                    durations: [],
                    propositions: [],
                    requestId: null,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
                });

            case actionTypes.fetchPropositionList.reset:
                return _objectSpread({}, state, {
                    requestState: _RequestState.RequestState.None,
                    durations: [],
                    propositions: [],
                    requestId: null,
                    productListDescription: null,
                    checkMsisdnAndOffersData: null,
                    paragraphsAbove: [],
                    paragraphsBelow: []
                });

            case actionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.durationList;

            case actionTypes.SHOW_ONLY_FTTH:
                return _objectSpread({}, state, {
                    showOnlyFTTH: action.payload
                });

            default:
                return state;
        }
    };

    var _default = durationListReducer;
    _exports.default = _default;
});
//# sourceMappingURL=durationList.js.map