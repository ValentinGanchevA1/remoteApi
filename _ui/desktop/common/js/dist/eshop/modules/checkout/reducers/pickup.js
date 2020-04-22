define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.serialNumberError = _exports.documentDownloaded = _exports.documentError = _exports.documentlinks = _exports.serialNumbersValidStatus = _exports.documents = _exports.generalError = _exports.paymentOverrideDisplayStatus = _exports.canceled = _exports.lastOrder = _exports.activationInProgress = _exports.activationStatus = _exports.navigationLoading = _exports.paymentAndFiscalizationLoaded = _exports.goodsOrderPaymentStatus = _exports.requiredDocumentPrintStatus = _exports.paymentOverride = _exports.reservationStatus = _exports.simCardType = _exports.serialNumbers = _exports.simCardTypes = void 0;

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

    var simCardTypes = function simCardTypes() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_POS_SIM_CARD_TYPES_DONE:
                return action.data;

            default:
                return state;
        }
    };

    _exports.simCardTypes = simCardTypes;

    var serialNumbers = function serialNumbers() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_PICKUP_SERIAL_NUMBERS_DONE:
                return action.response;

            case _actionTypes.CHANGE_PICKUP_SERIAL_NUMBER_VALUE:
                var serials = _objectSpread({}, state);

                serials[action.productCode] = action.value;
                return serials;

            default:
                return state;
        }
    };

    _exports.serialNumbers = serialNumbers;

    var simCardType = function simCardType() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_PICKUP_SIM_CARD_TYPE:
                var types = _objectSpread({}, state);

                types[action.bundleNo] = action.value;
                return types;

            default:
                return state;
        }
    };

    _exports.simCardType = simCardType;

    var reservationStatus = function reservationStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.UPDATE_SERIAL_NUMBERS_DONE:
                return action.response.status === "RESERVED";

            default:
                return state;
        }
    };

    _exports.reservationStatus = reservationStatus;

    var paymentOverride = function paymentOverride() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_PAYMENT_OVERRIDE:
                return action.value;

            default:
                return state;
        }
    };

    _exports.paymentOverride = paymentOverride;

    var requiredDocumentPrintStatus = function requiredDocumentPrintStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PRINT_REQUIRED_DOCUMENTS_DONE:
                return true;

            default:
                return state;
        }
    };

    _exports.requiredDocumentPrintStatus = requiredDocumentPrintStatus;

    var goodsOrderPaymentStatus = function goodsOrderPaymentStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE:
                return action.response === "Paid";

            default:
                return state;
        }
    };

    _exports.goodsOrderPaymentStatus = goodsOrderPaymentStatus;

    var paymentAndFiscalizationLoaded = function paymentAndFiscalizationLoaded() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PAYMENT_AND_FISCALIZATION:
                return true;

            default:
                return state;
        }
    };

    _exports.paymentAndFiscalizationLoaded = paymentAndFiscalizationLoaded;

    var navigationLoading = function navigationLoading() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_NAVIGATION_NEXT_START:
                return true;

            case _actionTypes.PICKUP_NAVIGATION_NEXT_DONE:
            case _actionTypes.PICKUP_GENERAL_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.navigationLoading = navigationLoading;

    var activationStatus = function activationStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_ORDER_ACTIVATION_DONE:
                return true;

            default:
                return state;
        }
    };

    _exports.activationStatus = activationStatus;

    var activationInProgress = function activationInProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_GENERAL_ERROR:
            case _actionTypes.PICKUP_ORDER_ACTIVATION_DONE:
                return false;

            case _actionTypes.PICKUP_ORDER_ACTIVATION_START:
                return true;

            default:
                return state;
        }
    };

    _exports.activationInProgress = activationInProgress;

    var lastOrder = function lastOrder() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_LAST_ORDER_DATA:
                return action.data;

            default:
                return state;
        }
    };

    _exports.lastOrder = lastOrder;

    var canceled = function canceled() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CANCEL_GOODS_ORDER_DONE:
                return true;

            case _actionTypes.PICKUP_LAST_ORDER_DATA:
                return action.data.orderStatus === 'CANCELLED';

            default:
                return state;
        }
    };

    _exports.canceled = canceled;

    var paymentOverrideDisplayStatus = function paymentOverrideDisplayStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE:
                return action.response !== "Paid";

            case _actionTypes.PICKUP_ORDER_PAYMENT_STATUS_ERROR:
                return true;

            default:
                return state;
        }
    };

    _exports.paymentOverrideDisplayStatus = paymentOverrideDisplayStatus;

    var generalError = function generalError() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_GENERAL_ERROR:
                return [].concat(babelHelpers.toConsumableArray(state), [action.error]);

            case _actionTypes.PICKUP_GENERAL_ERROR_DISMISS:
                return [];

            case _actionTypes.PICKUP_SERIAL_NUMBERS_ERROR_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.generalError = generalError;

    var documents = function documents() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_DOCUMENTS_DONE:
                if (action.documents) {
                    return action.documents;
                }

                return state;

            default:
                return state;
        }
    };

    _exports.documents = documents;

    var serialNumbersValidStatus = function serialNumbersValidStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_SERIAL_NUMBERS_VALIDATION:
                return action.isValid;

            default:
                return state;
        }
    };

    _exports.serialNumbersValidStatus = serialNumbersValidStatus;

    var documentlinks = function documentlinks() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_DOCUMENT_DOWNLOAD_DONE:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.bundleNo, _objectSpread({}, state[action.bundleNo], babelHelpers.defineProperty({}, action.code, action.link))));

            default:
                return state;
        }
    };

    _exports.documentlinks = documentlinks;

    var documentError = function documentError() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_DOCUMENT_DOWNLOAD_ERROR:
                return "Błąd pobierania dokumentu";

            default:
                return state;
        }
    };

    _exports.documentError = documentError;

    var documentDownloaded = function documentDownloaded() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_DOCUMENT_DOWNLOAD_START:
                return action.code;

            case _actionTypes.PICKUP_DOCUMENT_DOWNLOAD_DONE:
            case _actionTypes.PICKUP_GENERAL_ERROR:
                return '';

            default:
                return state;
        }
    };

    _exports.documentDownloaded = documentDownloaded;

    var serialNumberError = function serialNumberError() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PICKUP_SERIAL_NUMBERS_ERROR:
                return action.errors ? action.errors : state;

            case _actionTypes.PICKUP_SERIAL_NUMBERS_ERROR_DISMISS:
                return [];

            default:
                return state;
        }
    };

    _exports.serialNumberError = serialNumberError;
});
//# sourceMappingURL=pickup.js.map