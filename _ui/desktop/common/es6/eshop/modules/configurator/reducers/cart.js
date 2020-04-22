import {
    POST_TO_CART_START,
    POST_TO_CART_SUCCESS,
    POST_TO_CART_ERROR
} from "../actionTypes";



export var addToCartInProgress = (state = false, action) => {
    switch (action.type) {
        case POST_TO_CART_START:
            return true
        case POST_TO_CART_SUCCESS:
            return false
        case POST_TO_CART_ERROR:
            return false
        default:
            return state;
    }
}