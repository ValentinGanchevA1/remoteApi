import * as template from "./template";
import * as filters from "./filters";
import * as offers from "./offers";
import * as cart from "./cart";

import * as metaData from "./metaData";

import {
    combineReducers
} from "redux";

export default combineReducers({
    template: combineReducers(template),
    filters: combineReducers(filters),
    offers: combineReducers(offers),
    cart: combineReducers(cart),
    metaData: combineReducers(metaData)
});