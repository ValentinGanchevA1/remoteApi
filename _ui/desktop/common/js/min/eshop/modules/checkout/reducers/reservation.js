define(["exports", "../actionTypes", "../utils/MiniCartUtils"], function(e, o, s) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.changingSimCardType = e.comment = e.commentSectionVisible = e.errorDetails = e.verifySerialNumberError = e.reservationGeneralError = e.unlockStatus = e.paymentOverride = e.paymentStatusError = e.paymentStatus = e.checkingPaymentStatus = e.paymentAndFiscalization = e.cancelOrderPopupFromNavComponent = e.cancelOrderPopup = e.unlockSaleInProgress = e.saleUnlocked = e.cancelOrderError = e.cancelOrderDone = e.fiscalizationDataLoaded = e.sapFioriCorrectiveInvoiceLink = e.sapFioriLinks = e.serialNumberVerificationInProgress = e.agencyPosStatusValid = e.sapReservationNumber = e.simCardTypes = e.warehouses = e.serialNumbers = e.simCardTypeDefinitions = e.productsExists = e.miniCartData = void 0;
    e.miniCartData = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.FETCH_MINI_CART:
                return Object.assign({}, r, n.payload);
            default:
                return r
        }
    };
    e.productsExists = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.FETCH_MINI_CART:
                var a = !1,
                    i = (0, s.getAllCartEntries)(n.payload);
                return 0 < i.filter(function(e) {
                    return e.isSim && e.msisdn
                }).length ? !0 : (i.map(function(e) {
                    e.terminals && e.terminals.map(function(e) {
                        a = !0
                    })
                }), i.map(function(e) {
                    e.euroSets && e.euroSets.map(function(e) {
                        e.setElements && e.setElements.map(function(e) {
                            a = !0
                        })
                    })
                }), n.payload.entries && n.payload.entries.some(function(e) {
                    return e.broadbandFixProduct && e.broadbandFixProduct.devices && 0 < e.broadbandFixProduct.devices.filter(function(e) {
                        return !e.migrated
                    }).length || e.tvFixProduct && e.tvFixProduct.devices && 0 < e.tvFixProduct.devices.filter(function(e) {
                        return !e.migrated
                    }).length ? a = !0 : void 0
                }), a);
            default:
                return r
        }
    };
    e.simCardTypeDefinitions = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.FETCH_SIM_CARD_TYPES_DONE:
                return n.data;
            default:
                return r
        }
    };
    e.serialNumbers = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_SERIAL_NUMBER_FIELD:
                return a({}, n.payload);
            case o.SET_SERIAL_NUMBER_INITIAL_STATE:
                return n.serialNumberPair;
            default:
                return r
        }
    };
    e.warehouses = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_WAREHOUSE_TYPE:
                return n.warehouses;
            default:
                return r
        }
    };
    e.simCardTypes = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_SIM_CARD_TYPE:
                return a({}, r, babelHelpers.defineProperty({}, n.bundleNo, n.simCardType));
            default:
                return r
        }
    };
    e.sapReservationNumber = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.VERIFY_SERIAL_NUMBERS:
                return n.payload.sapReservationNumber;
            case o.SET_SERIAL_NUMBER_INITIAL_STATE:
                return n.sapReservationNumber ? n.sapReservationNumber : r;
            default:
                return r
        }
    };
    e.agencyPosStatusValid = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.VERIFY_SERIAL_NUMBERS:
                return !!n.payload.agencyPOSReservationValid;
            case o.SET_SERIAL_NUMBER_INITIAL_STATE:
                return !!n.agencyPOSReservationDone && n.agencyPOSReservationDone;
            default:
                return r
        }
    };
    e.serialNumberVerificationInProgress = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.VERIFY_SERIAL_NUMBERS_STARTED:
                return !0;
            case o.VERIFY_SERIAL_NUMBERS:
            case o.VERIFY_SERIAL_NUMBERS_ERROR:
                return !1;
            default:
                return r
        }
    };
    e.sapFioriLinks = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.GET_SAP_FIORI_LINKS_DONE:
                return n.payload;
            default:
                return r
        }
    };
    e.sapFioriCorrectiveInvoiceLink = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK_DONE:
                return n.payload;
            default:
                return r
        }
    };
    e.fiscalizationDataLoaded = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.VERIFY_SERIAL_NUMBERS:
            default:
                return r
        }
    };
    e.cancelOrderDone = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.CANCEL_ORDER_DONE:
                return !0;
            default:
                return r
        }
    };
    e.cancelOrderError = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CANCEL_ORDER_ERROR:
                return !0;
            case o.CLOSE_ORDER_CANCEL_ERROR_POPUP:
                return !1;
            case o.OPEN_ORDER_CANCEL_POPUP:
                return !n.data && r;
            default:
                return r
        }
    };
    e.saleUnlocked = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.UNLOCK_SALE_DONE:
                return !0;
            case o.SET_SERIAL_NUMBER_INITIAL_STATE:
                return !!n.saleUnlocked && n.saleUnlocked;
            default:
                return r
        }
    };
    e.unlockSaleInProgress = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.UNLOCK_SALE_STARTED:
                return !0;
            case o.SERIAL_NUMBER_VERIFICATION_ERROR:
            case o.UNLOCK_SALE_DONE:
                return !1;
            default:
                return r
        }
    };
    e.cancelOrderPopup = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.OPEN_ORDER_CANCEL_POPUP:
                return n.data;
            default:
                return r
        }
    };
    e.cancelOrderPopupFromNavComponent = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.OPEN_ORDER_CANCEL_POPUP_FROM_NAV_COMPONENT:
                return n.data;
            default:
                return r
        }
    };
    e.paymentAndFiscalization = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.PAYMENT_AND_FISCALIZATION:
                return n.data;
            default:
                return r
        }
    };
    e.checkingPaymentStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.PAYMENT_STATUS_CHECK_DONE:
                return !1;
            case o.CHECK_PAYMENT_STATUS_START:
                return !0;
            default:
                return r
        }
    };
    e.paymentStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.PAYMENT_STATUS_CHECK_DONE:
                return "Paid" === n.data;
            case o.SET_SERIAL_NUMBER_INITIAL_STATE:
                return "Paid" === n.paymentStatus;
            default:
                return r
        }
    };
    e.paymentStatusError = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.PAYMENT_STATUS_CHECK_DONE:
                return "Paid" !== n.data;
            default:
                return r
        }
    };
    e.paymentOverride = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.PAYMENT_OVERRIDE_DONE:
                return !r;
            default:
                return r
        }
    };
    e.unlockStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.UNLOCK_SALE_STATUS_CHECK_DONE:
                return n.data.status;
            case o.UNLOCK_SALE_DONE:
                return !0;
            case o.SET_SERIAL_NUMBER_INITIAL_STATE:
                return !!n.saleUnlocked && n.saleUnlocked;
            default:
                return r
        }
    };
    e.reservationGeneralError = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SERIAL_NUMBER_VERIFICATION_ERROR:
                return n.payload.responseJSON && n.payload.responseJSON.message ? n.payload.responseJSON.message : n.payload.message ? n.payload.message : "";
            default:
                return r
        }
    };
    e.verifySerialNumberError = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.VERIFY_SERIAL_NUMBERS_ERROR:
                return n.payload.responseJSON ? n.payload.responseJSON.message : n.payload.message;
            case o.SERIAL_NUMBER_VERIFICATION_ERROR:
                return n.payload.responseJSON && n.payload.responseJSON.message ? n.payload.responseJSON.message : n.payload.message ? n.payload.message : "";
            case o.VERIFY_SERIAL_NUMBERS:
            case o.CLEAR_SAP_ERROR_MESSAGES:
                return "";
            default:
                return r
        }
    };
    e.errorDetails = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.VERIFY_SERIAL_NUMBERS_ERROR:
                return n.payload.details ? n.payload.details : n.payload.responseJSON && n.payload.responseJSON.details ? n.payload.responseJSON.details : [];
            case o.VERIFY_DUPLICATE_SERIAL_NUMBERS:
                return n.payload.details;
            case o.CLEAR_SAP_ERROR_MESSAGES:
                return [];
            default:
                return r
        }
    };
    e.commentSectionVisible = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case o.CHANGE_SHOW_COMMENT_DONE:
                return !r;
            default:
                return r
        }
    };
    e.comment = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_COMMENT_DONE:
                return n.data;
            default:
                return r
        }
    };
    e.changingSimCardType = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SIM_CARD_TYPE_CHANGING:
                return a({}, r, babelHelpers.defineProperty({}, n.bundleNo, n.changing));
            default:
                return r
        }
    }
});
//# sourceMappingURL=reservation.js.map