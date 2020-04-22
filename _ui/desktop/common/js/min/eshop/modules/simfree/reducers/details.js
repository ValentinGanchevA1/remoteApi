define(["exports", "../actionTypes", "../../../utils/OnlineUtils", "eshop/modules/configurator/actionTypes"], function(e, a, r, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.deliveryMethods = e.showCanonicalLink = e.isDuet = e.showRatingErrorModal = e.deliveryAndPaymentComponentUid = e.productStorageCapacity = e.deliveryAndPaymentHtml = e.selectedVariantObject = e.selectedDeviceTab = void 0, a = babelHelpers.interopRequireWildcard(a), r = babelHelpers.interopRequireDefault(r);
    var d = 0,
        o = 0;
    e.selectedDeviceTab = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_SELECTED_DEVICE_TAB:
                return r.deviceTab;
            default:
                return n
        }
    };
    e.selectedVariantObject = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_SELECTED_VARIANT_OBJECT:
                return r.payload;
            default:
                return n
        }
    };
    e.deliveryAndPaymentHtml = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.GET_DELIVERY_AND_PAYMENT_HTML:
                return r.data;
            default:
                return n
        }
    };
    e.productStorageCapacity = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.GET_PRODUCT_STORAGE_CAPACITY:
                return r.data;
            default:
                return n
        }
    };
    e.deliveryAndPaymentComponentUid = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_DELIVERY_AND_PAYMENT_COMPONENT_UID:
                return r.data;
            default:
                return n
        }
    };
    e.showRatingErrorModal = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SHOW_RATING_MESSAGE:
                return r.value;
            default:
                return n
        }
    };
    e.isDuet = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "true" === r.default.getParameterValueFromUrl("isDuet");
        return (1 < arguments.length ? t : void 0).type, n
    };
    e.showCanonicalLink = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case a.SELECT_OFFER_TYPE:
            case a.SET_SELECTED_PRODUCER:
            case a.SET_SELECTED_COLOR:
            case a.SET_STICKER_ATTR_FILTERS:
            case a.SELECT_MAX_MONTHLY_PRICE:
                return !0;
            case a.SET_SELECTED_CATEGORY:
                return 1 < o++;
            case i.SELECT_OFFER:
                return 1 < d++;
            default:
                return n
        }
    };
    e.deliveryMethods = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : [],
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.SET_DELIVERY_METHODS:
                return r.deliveryMethods;
            default:
                return n
        }
    }
});
//# sourceMappingURL=details.js.map