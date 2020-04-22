define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.cartInvoiceValue = _exports.cashInvoiceLimit = _exports.pickupPosEnabled = _exports.lastPos = _exports.addToCartInProgress = _exports.errors = _exports.selectedVariantOnRecommended = _exports.itemAddedToCart = _exports.reviewSend = _exports.message = _exports.login = _exports.rating = _exports.chosenImageIndex = _exports.selectedVariant = _exports.selectedBaseDeviceCode = _exports.name = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var name = function name() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_DEVICE_DATA_BY_CODE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.name = name;

    var selectedBaseDeviceCode = function selectedBaseDeviceCode() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_BASE_DEVICE_CODE:
                return action.deviceCode;

            default:
                return state;
        }
    };

    _exports.selectedBaseDeviceCode = selectedBaseDeviceCode;

    var selectedVariant = function selectedVariant() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_VARIANT:
                if (action.color && action.color !== 'undefined') {
                    window.history.pushState("object or string", "Title", action.color + '?filterState=' + encodeURIComponent(action.filterState));
                }

                return action.payload.productId;

            default:
                return state;
        }
    };

    _exports.selectedVariant = selectedVariant;

    var chosenImageIndex = function chosenImageIndex() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_CHOSEN_IMAGE_INDEX:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.chosenImageIndex = chosenImageIndex;

    var rating = function rating() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_REVIEW_RATING:
                return action.rating;

            default:
                return state;
        }
    };

    _exports.rating = rating;

    var login = function login() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_REVIEW_LOGIN:
                return action.login;

            default:
                return state;
        }
    };

    _exports.login = login;

    var message = function message() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_REVIEW_MESSAGE:
                return action.message;

            default:
                return state;
        }
    };

    _exports.message = message;

    var reviewSend = function reviewSend() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SEND_REVIEW:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.reviewSend = reviewSend;

    var itemAddedToCart = function itemAddedToCart() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.ADD_TO_CART:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.itemAddedToCart = itemAddedToCart;

    var selectedVariantOnRecommended = function selectedVariantOnRecommended() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_VARIANT_ON_RECOMMENDED:
                return action.productId;

            default:
                return state;
        }
    };

    _exports.selectedVariantOnRecommended = selectedVariantOnRecommended;

    var errors = function errors() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.UPDATE_ADD_TO_CART_ERROR:
                return action.errors;

            default:
                return state;
        }
    };

    _exports.errors = errors;

    var addToCartInProgress = function addToCartInProgress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.ADD_TO_CART_START:
                return true;

            case ACTIONS.ADD_TO_CART_SUCCESS:
                return false;

            case ACTIONS.ADD_TO_CART_ERROR:
                return false;

            case ACTIONS.UPDATE_ADD_TO_CART_ERROR:
                return false;

            default:
                return state;
        }
    };

    _exports.addToCartInProgress = addToCartInProgress;

    var lastPos = function lastPos() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_LAST_PICKUP_POS:
                return action.data;

            default:
                return state;
        }
    };

    _exports.lastPos = lastPos;

    var pickupPosEnabled = function pickupPosEnabled() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHECK_IF_ACTIVE_PICKUP_FORM_SHELF:
                return action.data;

            default:
                return state;
        }
    };

    _exports.pickupPosEnabled = pickupPosEnabled;

    var cashInvoiceLimit = function cashInvoiceLimit() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_CASH_INVOICE_LIMIT:
                return action.data;

            default:
                return state;
        }
    };

    _exports.cashInvoiceLimit = cashInvoiceLimit;

    var cartInvoiceValue = function cartInvoiceValue() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_CART_INVOICE_VALUE:
                return action.data;

            default:
                return state;
        }
    };

    _exports.cartInvoiceValue = cartInvoiceValue;
});
//# sourceMappingURL=cart.js.map