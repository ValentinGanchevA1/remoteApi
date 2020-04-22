import * as cart from "./cart";
import * as list from "./list";
import * as details from "./details";
import * as offerFilter from "./offerFilter"
import * as metaData from "./metaData"
import * as comparator from "./comparator"

import {
    combineReducers
} from "redux";

export default combineReducers({
    cart: combineReducers(cart),
    details: combineReducers(details),
    list: combineReducers(list),
    offerFilter: combineReducers(offerFilter),
    metaData: combineReducers(metaData),
    comparator: combineReducers(comparator)
});