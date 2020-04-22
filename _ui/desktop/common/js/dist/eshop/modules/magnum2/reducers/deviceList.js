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

    var initialDeviceListState = {
        requestState: _RequestState.RequestState.None,
        devices: []
    };

    var deviceListReducer = function deviceListReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialDeviceListState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.fetchDeviceList.start:
                return {
                    requestState: _RequestState.RequestState.Waiting,
                        devices: []
                };

            case actionTypes.fetchDeviceList.success:
                return {
                    requestState: _RequestState.RequestState.Success,
                        devices: babelHelpers.toConsumableArray(action.payload)
                };

            case actionTypes.fetchDeviceList.error:
                return _objectSpread({}, state, {
                    requestState: _RequestState.RequestState.Error,
                    devices: []
                });

            default:
                return state;
        }
    };

    var _default = deviceListReducer;
    _exports.default = _default;
});
//# sourceMappingURL=deviceList.js.map