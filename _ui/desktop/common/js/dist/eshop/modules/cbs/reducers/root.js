define(["exports", "redux", "../actionTypes", "../utils"], function(_exports, _redux, _actionTypes, _utils) {
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

    var cities = function cities() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_CBS_CITIES_DONE:
                // action.data = ["a"...]
                // action.postalCode = "12332"
                return action.postalCode ? _objectSpread({}, state, babelHelpers.defineProperty({}, (0, _utils.cbsKey)(action.postalCode), action.cities)) : state;

            case _actionTypes.CLEAR_CBS_CITIES:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, (0, _utils.cbsKey)(action.postalCode), []));

            case _actionTypes.FETCH_CBS_CITIES_START:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, (0, _utils.cbsKey)(action.postalCode), []));

            case _actionTypes.FETCH_CBS_CITIES_ERROR:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, (0, _utils.cbsKey)(action.postalCode), []));

            default:
                return state;
        }
    };

    var streets = function streets() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_CBS_STREETS_DONE:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, (0, _utils.cbsKey)(action.postalCode, action.city), action.streets.map(function(street) {
                    return street.streetName;
                })));

            case _actionTypes.CLEAR_CBS_STREETS:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, (0, _utils.cbsKey)(action.postalCode, action.city), []));

            case _actionTypes.FETCH_CBS_STREETS_START:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, (0, _utils.cbsKey)(action.postalCode, action.city), []));

            case _actionTypes.FETCH_CBS_STREETS_ERROR:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, (0, _utils.cbsKey)(action.postalCode, action.city), []));

            default:
                return state;
        }
    };

    var countries = function countries() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_COUNTRIES:
                return action.countries;

            default:
                return state;
        }
    };

    var _default = (0, _redux.combineReducers)({
        cities: cities,
        streets: streets,
        countries: countries
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map