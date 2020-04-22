import {
    createSelector
} from "Reselect";
import {
    getCart
} from "./root";

export const addToCartInProgress = createSelector(getCart, cart => cart.addToCartInProgress)