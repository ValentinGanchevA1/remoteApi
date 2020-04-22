define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.metadata = _exports.error = _exports.voucherName = _exports.applicableProducts = _exports.voucherCode = void 0;

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

    var defaultMetadataState = {
        loading: false,
        applied: false
    };

    var voucherCode = function voucherCode() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_VOUCHER_CODE:
                return action.value;

            case _actionTypes.CLEAR_VOUCHER_DATA:
                return "";

            default:
                return state;
        }
    };

    _exports.voucherCode = voucherCode;

    var applicableProducts = function applicableProducts() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FIND_APPLICABLE_PRODUCTS_DONE:
                return action.value.applicableProducts;

            case _actionTypes.VOUCHER_ERROR:
            case _actionTypes.CLEAR_VOUCHER_DATA:
                return [];

            default:
                return state;
        }
    };

    _exports.applicableProducts = applicableProducts;

    var voucherName = function voucherName() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FIND_APPLICABLE_PRODUCTS_DONE:
                return action.value.voucherName;

            case _actionTypes.VOUCHER_ERROR:
            case _actionTypes.CLEAR_VOUCHER_DATA:
                return "";

            default:
                return state;
        }
    };

    _exports.voucherName = voucherName;

    var error = function error() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.VOUCHER_ERROR:
                return action.value;

            case _actionTypes.CLEAR_VOUCHER_DATA:
            case _actionTypes.CHANGE_VOUCHER_CODE:
                return "";

            default:
                return state;
        }
    };

    _exports.error = error;

    var metadata = function metadata() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMetadataState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FIND_APPLICABLE_PRODUCTS_DONE:
            case _actionTypes.VOUCHER_ERROR:
                return _objectSpread({}, state, {
                    loading: false
                });

            case _actionTypes.FIND_APPLICABLE_PRODUCTS_START:
            case _actionTypes.APPLY_VOUCHER_START:
                return _objectSpread({}, state, {
                    loading: true
                });

            case _actionTypes.APPLY_VOUCHER_DONE:
                return _objectSpread({}, state, {
                    loading: false,
                    applied: true
                });

            case _actionTypes.CLEAR_VOUCHER_DATA:
                return _objectSpread({}, state, {
                    loading: false,
                    applied: false
                });

            default:
                return state;
        }
    };

    _exports.metadata = metadata;
});
//# sourceMappingURL=voucher.js.map