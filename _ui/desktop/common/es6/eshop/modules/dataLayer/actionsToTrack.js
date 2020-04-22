import fbbEvents from "./middleware/analyticsCustomEvents";
import b2bEvents from "./middleware/analyticsCustomEventsB2BMobile";
import {
    AFTER_WWT,
    BEFORE_WWT,
    FORCE_AFTER_WWT
} from "../fix/actionTypes";
import {
    GET_CART_CUSTOMER_DONE
} from "../checkout/actionTypes";

const conditionalEvents = {
    [AFTER_WWT]: (state, action, type) => console.log("datalayer conditional event", type),
    [BEFORE_WWT]: (state, action, type) => console.log("datalayer conditional event", type),
    [GET_CART_CUSTOMER_DONE]: (state, action, type) => console.log("datalayer conditional event", type),
    [FORCE_AFTER_WWT]: (state, action, type) => console.log("datalayer conditional event", type),
};
export default {
    ...conditionalEvents,
    ...fbbEvents,
    ...b2bEvents,
}