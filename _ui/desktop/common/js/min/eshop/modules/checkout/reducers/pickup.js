define(["exports", "../actionTypes"], function(e, i) {
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

    function o(t) {
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
    }), e.serialNumberError = e.documentDownloaded = e.documentError = e.documentlinks = e.serialNumbersValidStatus = e.documents = e.generalError = e.paymentOverrideDisplayStatus = e.canceled = e.lastOrder = e.activationInProgress = e.activationStatus = e.navigationLoading = e.paymentAndFiscalizationLoaded = e.goodsOrderPaymentStatus = e.requiredDocumentPrintStatus = e.paymentOverride = e.reservationStatus = e.simCardType = e.serialNumbers = e.simCardTypes = void 0;
    e.simCardTypes = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.FETCH_POS_SIM_CARD_TYPES_DONE:
                return n.data;
            default:
                return r
        }
    };
    e.serialNumbers = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.FETCH_PICKUP_SERIAL_NUMBERS_DONE:
                return n.response;
            case i.CHANGE_PICKUP_SERIAL_NUMBER_VALUE:
                var a = o({}, r);
                return a[n.productCode] = n.value, a;
            default:
                return r
        }
    };
    e.simCardType = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.CHANGE_PICKUP_SIM_CARD_TYPE:
                var a = o({}, r);
                return a[n.bundleNo] = n.value, a;
            default:
                return r
        }
    };
    e.reservationStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.UPDATE_SERIAL_NUMBERS_DONE:
                return "RESERVED" === n.response.status;
            default:
                return r
        }
    };
    e.paymentOverride = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.CHANGE_PAYMENT_OVERRIDE:
                return n.value;
            default:
                return r
        }
    };
    e.requiredDocumentPrintStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.PRINT_REQUIRED_DOCUMENTS_DONE:
                return !0;
            default:
                return r
        }
    };
    e.goodsOrderPaymentStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE:
                return "Paid" === n.response;
            default:
                return r
        }
    };
    e.paymentAndFiscalizationLoaded = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.PAYMENT_AND_FISCALIZATION:
                return !0;
            default:
                return r
        }
    };
    e.navigationLoading = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.PICKUP_NAVIGATION_NEXT_START:
                return !0;
            case i.PICKUP_NAVIGATION_NEXT_DONE:
            case i.PICKUP_GENERAL_ERROR:
                return !1;
            default:
                return r
        }
    };
    e.activationStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.PICKUP_ORDER_ACTIVATION_DONE:
                return !0;
            default:
                return r
        }
    };
    e.activationInProgress = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.PICKUP_GENERAL_ERROR:
            case i.PICKUP_ORDER_ACTIVATION_DONE:
                return !1;
            case i.PICKUP_ORDER_ACTIVATION_START:
                return !0;
            default:
                return r
        }
    };
    e.lastOrder = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.PICKUP_LAST_ORDER_DATA:
                return n.data;
            default:
                return r
        }
    };
    e.canceled = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.CANCEL_GOODS_ORDER_DONE:
                return !0;
            case i.PICKUP_LAST_ORDER_DATA:
                return "CANCELLED" === n.data.orderStatus;
            default:
                return r
        }
    };
    e.paymentOverrideDisplayStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE:
                return "Paid" !== n.response;
            case i.PICKUP_ORDER_PAYMENT_STATUS_ERROR:
                return !0;
            default:
                return r
        }
    };
    e.generalError = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.PICKUP_GENERAL_ERROR:
                return [].concat(babelHelpers.toConsumableArray(r), [n.error]);
            case i.PICKUP_GENERAL_ERROR_DISMISS:
            case i.PICKUP_SERIAL_NUMBERS_ERROR_DISMISS:
                return [];
            default:
                return r
        }
    };
    e.documents = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.PICKUP_DOCUMENTS_DONE:
                return n.documents ? n.documents : r;
            default:
                return r
        }
    };
    e.serialNumbersValidStatus = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.PICKUP_SERIAL_NUMBERS_VALIDATION:
                return n.isValid;
            default:
                return r
        }
    };
    e.documentlinks = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.PICKUP_DOCUMENT_DOWNLOAD_DONE:
                return o({}, r, babelHelpers.defineProperty({}, n.bundleNo, o({}, r[n.bundleNo], babelHelpers.defineProperty({}, n.code, n.link))));
            default:
                return r
        }
    };
    e.documentError = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "";
        switch ((1 < arguments.length ? t : void 0).type) {
            case i.PICKUP_DOCUMENT_DOWNLOAD_ERROR:
                return "Błąd pobierania dokumentu";
            default:
                return r
        }
    };
    e.documentDownloaded = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.PICKUP_DOCUMENT_DOWNLOAD_START:
                return n.code;
            case i.PICKUP_DOCUMENT_DOWNLOAD_DONE:
            case i.PICKUP_GENERAL_ERROR:
                return "";
            default:
                return r
        }
    };
    e.serialNumberError = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case i.PICKUP_SERIAL_NUMBERS_ERROR:
                return n.errors ? n.errors : r;
            case i.PICKUP_SERIAL_NUMBERS_ERROR_DISMISS:
                return [];
            default:
                return r
        }
    }
});
//# sourceMappingURL=pickup.js.map