define(["exports", "../actionTypes", "../../../utils/OnlineUtils", "eshop/modules/configurator/actionTypes"], function(_exports, ACTIONS, _OnlineUtils, _actionTypes2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.deliveryMethods = _exports.showCanonicalLink = _exports.isDuet = _exports.showRatingErrorModal = _exports.deliveryAndPaymentComponentUid = _exports.productStorageCapacity = _exports.deliveryAndPaymentHtml = _exports.selectedVariantObject = _exports.selectedDeviceTab = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    var offerCounter = 0;
    var categoryCounter = 0;

    var selectedDeviceTab = function selectedDeviceTab() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_DEVICE_TAB:
                return action.deviceTab;

            default:
                return state;
        }
    };

    _exports.selectedDeviceTab = selectedDeviceTab;

    var selectedVariantObject = function selectedVariantObject() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_VARIANT_OBJECT:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.selectedVariantObject = selectedVariantObject;

    var deliveryAndPaymentHtml = function deliveryAndPaymentHtml() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_DELIVERY_AND_PAYMENT_HTML:
                return action.data;

            default:
                return state;
        }
    };

    _exports.deliveryAndPaymentHtml = deliveryAndPaymentHtml;

    var productStorageCapacity = function productStorageCapacity() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_PRODUCT_STORAGE_CAPACITY:
                return action.data;

            default:
                return state;
        }
    };

    _exports.productStorageCapacity = productStorageCapacity;

    var deliveryAndPaymentComponentUid = function deliveryAndPaymentComponentUid() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_DELIVERY_AND_PAYMENT_COMPONENT_UID:
                return action.data;

            default:
                return state;
        }
    };

    _exports.deliveryAndPaymentComponentUid = deliveryAndPaymentComponentUid;

    var showRatingErrorModal = function showRatingErrorModal() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_RATING_MESSAGE:
                return action.value;

            default:
                return state;
        }
    };

    _exports.showRatingErrorModal = showRatingErrorModal;

    var isDuet = function isDuet() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.getParameterValueFromUrl("isDuet") === "true";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            default:
                return state;
        }
    };

    _exports.isDuet = isDuet;

    var showCanonicalLink = function showCanonicalLink() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_OFFER_TYPE:
            case ACTIONS.SET_SELECTED_PRODUCER:
            case ACTIONS.SET_SELECTED_COLOR:
            case ACTIONS.SET_STICKER_ATTR_FILTERS:
            case ACTIONS.SELECT_MAX_MONTHLY_PRICE:
                return true;

            case ACTIONS.SET_SELECTED_CATEGORY:
                return categoryCounter++ > 1;

            case _actionTypes2.SELECT_OFFER:
                return offerCounter++ > 1;

            default:
                return state;
        }
    };

    _exports.showCanonicalLink = showCanonicalLink;

    var deliveryMethods = function deliveryMethods() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_DELIVERY_METHODS:
                return action.deliveryMethods;

            default:
                return state;
        }
    };

    _exports.deliveryMethods = deliveryMethods;
});
//# sourceMappingURL=details.js.map