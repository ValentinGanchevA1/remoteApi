import {
    combineReducers
} from "redux";
import * as customerServices from './customerServices';
import * as metaData from './metaData';
import * as offers from "./offers";
import * as kna from "./kna";
import * as errors from "./errors";
import * as documents from "./documents";
import * as migration from "./migration";
import * as voip from "./voip";
import {
    filterLP,
    pageContext
} from "./filter";

export default combineReducers({
    customerServices: combineReducers(customerServices),
    offers: combineReducers(offers),
    metaData: combineReducers(metaData),
    kna: combineReducers(kna),
    errors: combineReducers(errors),
    pageContext: pageContext,
    filterLP: filterLP,
    documents: combineReducers(documents),
    migration: combineReducers(migration),
    voip: combineReducers(voip)
});