define(["exports"], function(_exports) {
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

    var dataLayerMiddleware = function dataLayerMiddleware(dataLayer) {
        var actionsToTrack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var type = {};

        var calculate = function calculate(action, getState) {
            var counter = type[action.type] || 0;
            type = _objectSpread({}, type, babelHelpers.defineProperty({}, action.type, ++counter));
            var nextState = getState();
            var transform = actionsToTrack[action.type]; // debugger;

            var data = transform(nextState, action, type);
            console.warn("dataLayer middleware data", {
                data: data,
                type: type
            });
            data && dataLayer.push(data);
        };

        return function(_ref) {
            var dispatch = _ref.dispatch,
                getState = _ref.getState;
            return function(next) {
                return function(action) {
                    // console.warn("logAction",action.type);
                    next(action);

                    if (!Object.keys(actionsToTrack).includes(action.type)) {
                        return;
                    }

                    calculate(action, getState); // debugger;
                };
            };
        };
    };

    var _default = dataLayerMiddleware;
    _exports.default = _default;
});
//# sourceMappingURL=dataLayerMiddleware.js.map