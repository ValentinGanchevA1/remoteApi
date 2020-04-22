define(["exports", "redux", "../actionTypes"], function(_exports, _redux, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.msisdnComponent = _exports.simCardComponent = _exports.resourcesMsg = _exports.bundleNo = _exports.visible = void 0;

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

    var visible = function visible() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.RESOURCE_MODAL_OPEN:
                return true;

            case _actionTypes.RESOURCE_MODAL_CLOSE:
            case _actionTypes.CHANGE_MSISDN_SUCCESS:
            case _actionTypes.CHANGE_SIMCARD_SUCCESS:
                return false;

            default:
                return state;
        }
    };

    _exports.visible = visible;

    var bundleNo = function bundleNo() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.RESOURCE_MODAL_OPEN:
                return action.bundleNo;

            default:
                return state;
        }
    };

    _exports.bundleNo = bundleNo;

    var resourcesMsg = function resourcesMsg() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_MSISDN_FAILED:
                if (action.payload) return action.payload;
                return state;

            case _actionTypes.CHANGE_MSISDN_SUCCESS:
            case _actionTypes.RESOURCE_MODAL_CLOSE:
                return null;

            default:
                return state;
        }
    };

    _exports.resourcesMsg = resourcesMsg;

    var simCards = function simCards() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_SIM_CARDS:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.bundleNo, action.payload));

            default:
                return state;
        }
    };

    var simCard = function simCard() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_SIMCARD:
                return _objectSpread({}, action.simCard);

            case _actionTypes.RESOURCE_MODAL_OPEN:
                return _objectSpread({}, action.entry.simCard);

            default:
                return state;
        }
    };

    var changingSimCard = function changingSimCard() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_SIMCARD:
                return true;

            case _actionTypes.CHANGE_SIMCARD_SUCCESS:
                return false;

            default:
                return state;
        }
    };

    var simCardComponent = (0, _redux.combineReducers)({
        simCards: simCards,
        simCard: simCard,
        changingSimCard: changingSimCard
    });
    _exports.simCardComponent = simCardComponent;

    var msisdns = function msisdns() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_MSISDNS:
                return action.payload;

            case _actionTypes.CHANGE_MSISDN_SUCCESS:
                return [];

            default:
                return state;
        }
    };

    var msisdn = function msisdn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_MSISDN:
                return action.msisdn;

            case _actionTypes.RESOURCE_MODAL_OPEN:
                return action.entry.msisdn;

            default:
                return state;
        }
    };

    var changingMsisdn = function changingMsisdn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_MSISDN:
                return true;

            case _actionTypes.CHANGE_MSISDN_FAILED:
            case _actionTypes.CHANGE_MSISDN_SUCCESS:
                return false;

            default:
                return state;
        }
    };

    var msisdnComponent = (0, _redux.combineReducers)({
        msisdns: msisdns,
        msisdn: msisdn,
        changingMsisdn: changingMsisdn
    });
    _exports.msisdnComponent = msisdnComponent;
});
//# sourceMappingURL=resources.js.map