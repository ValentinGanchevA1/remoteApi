define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.phoneContactDAP = _exports.shouldRefresh = _exports.showSelectedSlotError = _exports.selectedSlotDisplayText = _exports.loading = _exports.selectedInstallationTimeSlot = _exports.comment = _exports.availableTimeSlots = void 0;

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

    var availableTimeSlotsDefaultState = {
        dates: [],
        slots: [],
        additionalData: {
            standard: {},
            installationAddress: {}
        }
    };

    var availableTimeSlots = function availableTimeSlots() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : availableTimeSlotsDefaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
                return action.data;

            default:
                return state;
        }
    };

    _exports.availableTimeSlots = availableTimeSlots;

    var comment = function comment() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_INSTALLATION_COMMENT:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.comment = comment;

    var selectedInstallationTimeSlot = function selectedInstallationTimeSlot() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_INSTALLATION_TIME_SLOT:
                return _objectSpread({}, state, {
                    startDate: action.data.startDate,
                    endDate: action.data.endDate
                });

            default:
                return state;
        }
    };

    _exports.selectedInstallationTimeSlot = selectedInstallationTimeSlot;

    var loading = function loading() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
                return false;

            case _actionTypes.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START:
                return true;

            default:
                return state;
        }
    };

    _exports.loading = loading;

    var selectedSlotDisplayText = function selectedSlotDisplayText() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECT_INSTALLATION_SLOT_DESCRIPTION:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.selectedSlotDisplayText = selectedSlotDisplayText;

    var showSelectedSlotError = function showSelectedSlotError() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SHOW_INSTALLATION_SLOT_ERROR:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.showSelectedSlotError = showSelectedSlotError;

    var shouldRefresh = function shouldRefresh() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.INSTALLATION_SLOT_FORCE_REFRESH:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.shouldRefresh = shouldRefresh;

    var phoneContactDAP = function phoneContactDAP() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.UPDATE_DAP_PHONE_NUMBER:
                return action.data.phoneContact;

            case _actionTypes.GET_CART_CUSTOMER_DONE:
                return action.data.phoneNumber;

            default:
                return state;
        }
    };

    _exports.phoneContactDAP = phoneContactDAP;
});
//# sourceMappingURL=installation.js.map