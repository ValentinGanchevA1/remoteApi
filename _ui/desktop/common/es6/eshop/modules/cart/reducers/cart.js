import {
    FETCH_CART,
    REMOVE_FROM_CART,
    REMOVE_TERMINAL_FROM_CART_BUNDLE,
    SET_CART_CHANNEL,
    SET_PRICE_VIEW_NET
} from "../actionTypes";

const INITIAL_CART_DATA_STATE = {
    checkoutCost: {},
    oneTimeCost: {},
    monthlyCosts: []
};
const EMPTY_CHECKOUT_COST = {
    currency: "zł",
    gross: "0,00",
    monthFrom: null,
    monthTo: null,
    net: "0,00",
    price: 0
};

//Checkout summary data
export const cartData = (state = INITIAL_CART_DATA_STATE, action) => {
    switch (action.type) {
        case FETCH_CART:
            return Object.assign({}, state, action.payload);
        case REMOVE_FROM_CART:
        case REMOVE_TERMINAL_FROM_CART_BUNDLE:
            let result = Object.assign({}, state, action.payload);
            if (!(action.payload.entries && action.payload.entries.length)) {
                result.checkoutCost = EMPTY_CHECKOUT_COST;
                result.devices = [];
            }
            return result;
        default:
            return state
    }
};