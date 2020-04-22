define(["exports", "../actionTypes"], function(e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cartInvoiceValue = e.cashInvoiceLimit = e.pickupPosEnabled = e.lastPos = e.addToCartInProgress = e.errors = e.selectedVariantOnRecommended = e.itemAddedToCart = e.reviewSend = e.message = e.login = e.rating = e.chosenImageIndex = e.selectedVariant = e.selectedBaseDeviceCode = e.name = void 0, a = babelHelpers.interopRequireWildcard(a);
    e.name = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.GET_DEVICE_DATA_BY_CODE:
                return r.payload;
            default:
                return n
        }
    };
    e.selectedBaseDeviceCode = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_SELECTED_BASE_DEVICE_CODE:
                return r.deviceCode;
            default:
                return n
        }
    };
    e.selectedVariant = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_SELECTED_VARIANT:
                return r.color && "undefined" !== r.color && window.history.pushState("object or string", "Title", r.color + "?filterState=" + encodeURIComponent(r.filterState)), r.payload.productId;
            default:
                return n
        }
    };
    e.chosenImageIndex = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : 0,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_CHOSEN_IMAGE_INDEX:
                return r.payload;
            default:
                return n
        }
    };
    e.rating = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : 0,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_REVIEW_RATING:
                return r.rating;
            default:
                return n
        }
    };
    e.login = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_REVIEW_LOGIN:
                return r.login;
            default:
                return n
        }
    };
    e.message = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_REVIEW_MESSAGE:
                return r.message;
            default:
                return n
        }
    };
    e.reviewSend = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SEND_REVIEW:
                return r.payload;
            default:
                return n
        }
    };
    e.itemAddedToCart = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.ADD_TO_CART:
                return r.payload;
            default:
                return n
        }
    };
    e.selectedVariantOnRecommended = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_SELECTED_VARIANT_ON_RECOMMENDED:
                return r.productId;
            default:
                return n
        }
    };
    e.errors = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.UPDATE_ADD_TO_CART_ERROR:
                return r.errors;
            default:
                return n
        }
    };
    e.addToCartInProgress = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case a.ADD_TO_CART_START:
                return !0;
            case a.ADD_TO_CART_SUCCESS:
            case a.ADD_TO_CART_ERROR:
            case a.UPDATE_ADD_TO_CART_ERROR:
                return !1;
            default:
                return n
        }
    };
    e.lastPos = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.GET_LAST_PICKUP_POS:
                return r.data;
            default:
                return n
        }
    };
    e.pickupPosEnabled = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.CHECK_IF_ACTIVE_PICKUP_FORM_SHELF:
                return r.data;
            default:
                return n
        }
    };
    e.cashInvoiceLimit = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : 0,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_CASH_INVOICE_LIMIT:
                return r.data;
            default:
                return n
        }
    };
    e.cartInvoiceValue = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : 0,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_CART_INVOICE_VALUE:
                return r.data;
            default:
                return n
        }
    }
});
//# sourceMappingURL=cart.js.map