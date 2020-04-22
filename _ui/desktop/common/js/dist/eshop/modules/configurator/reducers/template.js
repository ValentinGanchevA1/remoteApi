define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.counter = _exports.meta = _exports.data = _exports.fetching = void 0;

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

    var fetching = function fetching() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.TEMPLATE_ASYNC_START:
                return true;

            case _actionTypes.TEMPLATE_ASYNC_RECEIVE:
            case _actionTypes.TEMPLATE_ASYNC_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.fetching = fetching;

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.TEMPLATE_ASYNC_RECEIVE:
                return action.receivedData;

            default:
                return state;
        }
    };

    _exports.data = data;

    var meta = function meta() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.TEMPLATE_ASYNC_RECEIVE:
                return _objectSpread({}, state, {
                    error: '',
                    timestamp: Date.now()
                });

            case _actionTypes.TEMPLATE_ASYNC_ERROR:
                return _objectSpread({}, state, {
                    error: 'ERROR MESSAGE'
                });

            default:
                return state;
        }
    };

    _exports.meta = meta;

    var counter = function counter() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.TEMPLATE_INCREMENT:
                return state + 1;

            default:
                return state;
        }
    };

    _exports.counter = counter;
});
//# sourceMappingURL=template.js.map