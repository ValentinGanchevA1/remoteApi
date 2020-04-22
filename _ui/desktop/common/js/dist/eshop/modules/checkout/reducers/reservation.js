define(["exports", "../actionTypes", "../utils/MiniCartUtils"], function(_exports, _actionTypes, _MiniCartUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.changingSimCardType = _exports.comment = _exports.commentSectionVisible = _exports.errorDetails = _exports.verifySerialNumberError = _exports.reservationGeneralError = _exports.unlockStatus = _exports.paymentOverride = _exports.paymentStatusError = _exports.paymentStatus = _exports.checkingPaymentStatus = _exports.paymentAndFiscalization = _exports.cancelOrderPopupFromNavComponent = _exports.cancelOrderPopup = _exports.unlockSaleInProgress = _exports.saleUnlocked = _exports.cancelOrderError = _exports.cancelOrderDone = _exports.fiscalizationDataLoaded = _exports.sapFioriCorrectiveInvoiceLink = _exports.sapFioriLinks = _exports.serialNumberVerificationInProgress = _exports.agencyPosStatusValid = _exports.sapReservationNumber = _exports.simCardTypes = _exports.warehouses = _exports.serialNumbers = _exports.simCardTypeDefinitions = _exports.productsExists = _exports.miniCartData = void 0;

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

    var miniCartData = function miniCartData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_MINI_CART:
                return Object.assign({}, state, action.payload);

            default:
                return state;
        }
    };

    _exports.miniCartData = miniCartData;

    var productsExists = function productsExists() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_MINI_CART:
                var result = false;
                var cartEntries = (0, _MiniCartUtils.getAllCartEntries)(action.payload);

                if (cartEntries.filter(function(entry) {
                        return entry.isSim && entry.msisdn;
                    }).length > 0) {
                    return true;
                }

                cartEntries.map(function(entry) {
                    if (entry.terminals) {
                        entry.terminals.map(function(terminal) {
                            result = true;
                        });
                    }
                });
                cartEntries.map(function(entry) {
                    if (entry.euroSets) {
                        entry.euroSets.map(function(euroSet) {
                            if (euroSet.setElements) {
                                euroSet.setElements.map(function(euroSetElement) {
                                    result = true;
                                });
                            }
                        });
                    }
                });
                action.payload.entries && action.payload.entries.some(function(entry) {
                    if (entry.broadbandFixProduct && entry.broadbandFixProduct.devices && entry.broadbandFixProduct.devices.filter(function(device) {
                            return !device.migrated;
                        }).length > 0) {
                        result = true;
                        return true;
                    }

                    if (entry.tvFixProduct && entry.tvFixProduct.devices && entry.tvFixProduct.devices.filter(function(device) {
                            return !device.migrated;
                        }).length > 0) {
                        result = true;
                        return true;
                    }
                });
                return result;

            default:
                return state;
        }
    };

    _exports.productsExists = productsExists;

    var simCardTypeDefinitions = function simCardTypeDefinitions() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.FETCH_SIM_CARD_TYPES_DONE:
                return action.data;

            default:
                return state;
        }
    };

    _exports.simCardTypeDefinitions = simCardTypeDefinitions;

    var serialNumbers = function serialNumbers() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_SERIAL_NUMBER_FIELD:
                return _objectSpread({}, action.payload);

            case _actionTypes.SET_SERIAL_NUMBER_INITIAL_STATE:
                return action.serialNumberPair;

            default:
                return state;
        }
    };

    _exports.serialNumbers = serialNumbers;

    var warehouses = function warehouses() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_WAREHOUSE_TYPE:
                return action.warehouses;

            default:
                return state;
        }
    };

    _exports.warehouses = warehouses;

    var simCardTypes = function simCardTypes() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_SIM_CARD_TYPE:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.bundleNo, action.simCardType));

            default:
                return state;
        }
    };

    _exports.simCardTypes = simCardTypes;

    var sapReservationNumber = function sapReservationNumber() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.VERIFY_SERIAL_NUMBERS:
                return action.payload.sapReservationNumber;

            case _actionTypes.SET_SERIAL_NUMBER_INITIAL_STATE:
                return action.sapReservationNumber ? action.sapReservationNumber : state;

            default:
                return state;
        }
    };

    _exports.sapReservationNumber = sapReservationNumber;

    var agencyPosStatusValid = function agencyPosStatusValid() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.VERIFY_SERIAL_NUMBERS:
                return !!action.payload.agencyPOSReservationValid;

            case _actionTypes.SET_SERIAL_NUMBER_INITIAL_STATE:
                return action.agencyPOSReservationDone ? action.agencyPOSReservationDone : false;

            default:
                return state;
        }
    };

    _exports.agencyPosStatusValid = agencyPosStatusValid;

    var serialNumberVerificationInProgress = function serialNumberVerificationInProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.VERIFY_SERIAL_NUMBERS_STARTED:
                return true;

            case _actionTypes.VERIFY_SERIAL_NUMBERS:
            case _actionTypes.VERIFY_SERIAL_NUMBERS_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.serialNumberVerificationInProgress = serialNumberVerificationInProgress;

    var sapFioriLinks = function sapFioriLinks() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_SAP_FIORI_LINKS_DONE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.sapFioriLinks = sapFioriLinks;

    var sapFioriCorrectiveInvoiceLink = function sapFioriCorrectiveInvoiceLink() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK_DONE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.sapFioriCorrectiveInvoiceLink = sapFioriCorrectiveInvoiceLink;

    var fiscalizationDataLoaded = function fiscalizationDataLoaded() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.VERIFY_SERIAL_NUMBERS:
                return state;

            default:
                return state;
        }
    };

    _exports.fiscalizationDataLoaded = fiscalizationDataLoaded;

    var cancelOrderDone = function cancelOrderDone() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CANCEL_ORDER_DONE:
                return true;

            default:
                return state;
        }
    };

    _exports.cancelOrderDone = cancelOrderDone;

    var cancelOrderError = function cancelOrderError() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CANCEL_ORDER_ERROR:
                return true;

            case _actionTypes.CLOSE_ORDER_CANCEL_ERROR_POPUP:
                return false;

            case _actionTypes.OPEN_ORDER_CANCEL_POPUP:
                return action.data ? false : state;

            default:
                return state;
        }
    };

    _exports.cancelOrderError = cancelOrderError;

    var saleUnlocked = function saleUnlocked() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.UNLOCK_SALE_DONE:
                return true;

            case _actionTypes.SET_SERIAL_NUMBER_INITIAL_STATE:
                return action.saleUnlocked ? action.saleUnlocked : false;

            default:
                return state;
        }
    };

    _exports.saleUnlocked = saleUnlocked;

    var unlockSaleInProgress = function unlockSaleInProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.UNLOCK_SALE_STARTED:
                return true;

            case _actionTypes.SERIAL_NUMBER_VERIFICATION_ERROR:
            case _actionTypes.UNLOCK_SALE_DONE:
                return false;

            default:
                return state;
        }
    };

    _exports.unlockSaleInProgress = unlockSaleInProgress;

    var cancelOrderPopup = function cancelOrderPopup() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.OPEN_ORDER_CANCEL_POPUP:
                return action.data;

            default:
                return state;
        }
    };

    _exports.cancelOrderPopup = cancelOrderPopup;

    var cancelOrderPopupFromNavComponent = function cancelOrderPopupFromNavComponent() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.OPEN_ORDER_CANCEL_POPUP_FROM_NAV_COMPONENT:
                return action.data;

            default:
                return state;
        }
    };

    _exports.cancelOrderPopupFromNavComponent = cancelOrderPopupFromNavComponent;

    var paymentAndFiscalization = function paymentAndFiscalization() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PAYMENT_AND_FISCALIZATION:
                return action.data;

            default:
                return state;
        }
    };

    _exports.paymentAndFiscalization = paymentAndFiscalization;

    var checkingPaymentStatus = function checkingPaymentStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PAYMENT_STATUS_CHECK_DONE:
                return false;

            case _actionTypes.CHECK_PAYMENT_STATUS_START:
                return true;

            default:
                return state;
        }
    };

    _exports.checkingPaymentStatus = checkingPaymentStatus;

    var paymentStatus = function paymentStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PAYMENT_STATUS_CHECK_DONE:
                return action.data === "Paid";

            case _actionTypes.SET_SERIAL_NUMBER_INITIAL_STATE:
                return action.paymentStatus === "Paid";

            default:
                return state;
        }
    };

    _exports.paymentStatus = paymentStatus;

    var paymentStatusError = function paymentStatusError() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PAYMENT_STATUS_CHECK_DONE:
                return action.data !== "Paid";

            default:
                return state;
        }
    };

    _exports.paymentStatusError = paymentStatusError;

    var paymentOverride = function paymentOverride() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.PAYMENT_OVERRIDE_DONE:
                return !state;

            default:
                return state;
        }
    };

    _exports.paymentOverride = paymentOverride;

    var unlockStatus = function unlockStatus() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.UNLOCK_SALE_STATUS_CHECK_DONE:
                return action.data.status;

            case _actionTypes.UNLOCK_SALE_DONE:
                return true;

            case _actionTypes.SET_SERIAL_NUMBER_INITIAL_STATE:
                return action.saleUnlocked ? action.saleUnlocked : false;

            default:
                return state;
        }
    };

    _exports.unlockStatus = unlockStatus;

    var reservationGeneralError = function reservationGeneralError() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SERIAL_NUMBER_VERIFICATION_ERROR:
                if (action.payload.responseJSON && action.payload.responseJSON.message) {
                    return action.payload.responseJSON.message;
                }

                return action.payload.message ? action.payload.message : "";

            default:
                return state;
        }
    };

    _exports.reservationGeneralError = reservationGeneralError;

    var verifySerialNumberError = function verifySerialNumberError() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.VERIFY_SERIAL_NUMBERS_ERROR:
                return action.payload.responseJSON ? action.payload.responseJSON.message : action.payload.message;

            case _actionTypes.SERIAL_NUMBER_VERIFICATION_ERROR:
                if (action.payload.responseJSON && action.payload.responseJSON.message) {
                    return action.payload.responseJSON.message;
                }

                return action.payload.message ? action.payload.message : "";

            case _actionTypes.VERIFY_SERIAL_NUMBERS:
            case _actionTypes.CLEAR_SAP_ERROR_MESSAGES:
                return "";

            default:
                return state;
        }
    };

    _exports.verifySerialNumberError = verifySerialNumberError;

    var errorDetails = function errorDetails() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.VERIFY_SERIAL_NUMBERS_ERROR:
                return action.payload.details ? action.payload.details : action.payload.responseJSON && action.payload.responseJSON.details ? action.payload.responseJSON.details : [];

            case _actionTypes.VERIFY_DUPLICATE_SERIAL_NUMBERS:
                return action.payload.details;

            case _actionTypes.CLEAR_SAP_ERROR_MESSAGES:
                return [];

            default:
                return state;
        }
    };

    _exports.errorDetails = errorDetails;

    var commentSectionVisible = function commentSectionVisible() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_SHOW_COMMENT_DONE:
                return !state;

            default:
                return state;
        }
    };

    _exports.commentSectionVisible = commentSectionVisible;

    var comment = function comment() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_COMMENT_DONE:
                return action.data;

            default:
                return state;
        }
    };

    _exports.comment = comment;

    var changingSimCardType = function changingSimCardType() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SIM_CARD_TYPE_CHANGING:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.bundleNo, action.changing));

            default:
                return state;
        }
    };

    _exports.changingSimCardType = changingSimCardType;
});
//# sourceMappingURL=reservation.js.map