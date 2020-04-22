import * as ACTIONS from "../actionTypes";

export const name = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.GET_DEVICE_DATA_BY_CODE:
            return action.payload;
        default:
            return state
    }
}
export const selectedBaseDeviceCode = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_BASE_DEVICE_CODE:
            return action.deviceCode;
        default:
            return state
    }
}
export const selectedVariant = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_VARIANT:
            if (action.color && action.color !== 'undefined') {
                window.history.pushState("object or string", "Title", action.color + '?filterState=' + encodeURIComponent(action.filterState));
            }
            return action.payload.productId;
        default:
            return state
    }
}

export const chosenImageIndex = (state = 0, action) => {
    switch (action.type) {
        case ACTIONS.SET_CHOSEN_IMAGE_INDEX:
            return action.payload;
        default:
            return state
    }
}

export const rating = (state = 0, action) => {
    switch (action.type) {
        case ACTIONS.SET_REVIEW_RATING:
            return action.rating;
        default:
            return state
    }
}

export const login = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SET_REVIEW_LOGIN:
            return action.login;
        default:
            return state
    }
}

export const message = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SET_REVIEW_MESSAGE:
            return action.message;
        default:
            return state
    }
}

export const reviewSend = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SEND_REVIEW:
            return action.payload;
        default:
            return state
    }
}

export const itemAddedToCart = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            return action.payload;
        default:
            return state
    }
}

export const selectedVariantOnRecommended = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_VARIANT_ON_RECOMMENDED:
            return action.productId;
        default:
            return state
    }
}

export const errors = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_ADD_TO_CART_ERROR:
            return action.errors;
        default:
            return state
    }
}

export const addToCartInProgress = (state = false, action) => {
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
}

export const lastPos = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.GET_LAST_PICKUP_POS:
            return action.data;
        default:
            return state;
    }
};

export const pickupPosEnabled = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.CHECK_IF_ACTIVE_PICKUP_FORM_SHELF:
            return action.data;
        default:
            return state;
    }
};

export const cashInvoiceLimit = (state = 0, action) => {
    switch (action.type) {
        case ACTIONS.SET_CASH_INVOICE_LIMIT:
            return action.data;
        default:
            return state;
    }
};

export const cartInvoiceValue = (state = 0, action) => {
    switch (action.type) {
        case ACTIONS.SET_CART_INVOICE_VALUE:
            return action.data;
        default:
            return state;
    }
};