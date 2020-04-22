import * as ACTIONS from "../actionTypes";
import OnlineUtils from "../../../utils/OnlineUtils";
import {
    SELECT_OFFER
} from "eshop/modules/configurator/actionTypes";

var offerCounter = 0;
var categoryCounter = 0;

export const selectedDeviceTab = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_DEVICE_TAB:
            return action.deviceTab;
        default:
            return state
    }
}


export const selectedVariantObject = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SET_SELECTED_VARIANT_OBJECT:
            return action.payload;
        default:
            return state
    }
}

export const deliveryAndPaymentHtml = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.GET_DELIVERY_AND_PAYMENT_HTML:
            return action.data;
        default:
            return state
    }
}

export const productStorageCapacity = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.GET_PRODUCT_STORAGE_CAPACITY:
            return action.data;
        default:
            return state
    }
}

export const deliveryAndPaymentComponentUid = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SET_DELIVERY_AND_PAYMENT_COMPONENT_UID:
            return action.data;
        default:
            return state
    }
}

export const showRatingErrorModal = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SHOW_RATING_MESSAGE:
            return action.value;
        default:
            return state
    }
}

export const isDuet = (state = OnlineUtils.getParameterValueFromUrl("isDuet") === "true", action) => {
    switch (action.type) {
        default:
            return state
    }
}

export const showCanonicalLink = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_OFFER_TYPE:
        case ACTIONS.SET_SELECTED_PRODUCER:
        case ACTIONS.SET_SELECTED_COLOR:
        case ACTIONS.SET_STICKER_ATTR_FILTERS:
        case ACTIONS.SELECT_MAX_MONTHLY_PRICE:
            return true;
        case ACTIONS.SET_SELECTED_CATEGORY:
            return categoryCounter++ > 1;
        case SELECT_OFFER:
            return offerCounter++ > 1;
        default:
            return state
    }
}

export const deliveryMethods = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.SET_DELIVERY_METHODS:
            return action.deliveryMethods;
        default:
            return state;
    }
};