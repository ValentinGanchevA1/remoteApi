import {
    FETCH_DOCUMENTS_FOR_CART
} from "../actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_DOCUMENTS_FOR_CART:
            return action.payload;
        default:
            return state;
    }
}