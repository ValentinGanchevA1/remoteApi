define(["exports", "./middleware/analyticsCustomEvents", "./middleware/analyticsCustomEventsB2BMobile", "../fix/actionTypes", "../checkout/actionTypes"], function(_exports, _analyticsCustomEvents, _analyticsCustomEventsB2BMobile, _actionTypes, _actionTypes2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _analyticsCustomEvents = babelHelpers.interopRequireDefault(_analyticsCustomEvents);
    _analyticsCustomEventsB2BMobile = babelHelpers.interopRequireDefault(_analyticsCustomEventsB2BMobile);

    var _conditionalEvents;

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

    var conditionalEvents = (_conditionalEvents = {}, babelHelpers.defineProperty(_conditionalEvents, _actionTypes.AFTER_WWT, function(state, action, type) {
        return console.log("datalayer conditional event", type);
    }), babelHelpers.defineProperty(_conditionalEvents, _actionTypes.BEFORE_WWT, function(state, action, type) {
        return console.log("datalayer conditional event", type);
    }), babelHelpers.defineProperty(_conditionalEvents, _actionTypes2.GET_CART_CUSTOMER_DONE, function(state, action, type) {
        return console.log("datalayer conditional event", type);
    }), babelHelpers.defineProperty(_conditionalEvents, _actionTypes.FORCE_AFTER_WWT, function(state, action, type) {
        return console.log("datalayer conditional event", type);
    }), _conditionalEvents);

    var _default = _objectSpread({}, conditionalEvents, {}, _analyticsCustomEvents.default, {}, _analyticsCustomEventsB2BMobile.default);

    _exports.default = _default;
});
//# sourceMappingURL=actionsToTrack.js.map