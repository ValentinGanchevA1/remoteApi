import {
    combineReducers
} from "redux";

import * as representatives from "./representatives";
import * as grantors from "./grantors";

import {
    SET_REPRESENTATION_MODE,
    SET_GRANTING_DATE,
    GET_CART_REPRESENTATIVE_DATA_DONE
} from "../actionTypes";

const representationMode = (state = "", action) => {
    switch (action.type) {
        case SET_REPRESENTATION_MODE:
            return action.mode
        case GET_CART_REPRESENTATIVE_DATA_DONE:
            return action.data.representationMethod || ""
        default:
            return state;
    }
};

const grantingDate = (state = "", action) => {
    switch (action.type) {
        case SET_GRANTING_DATE:
            return action.date
        case GET_CART_REPRESENTATIVE_DATA_DONE:
            let d = action.data.grantingDate
            if (d) {
                let formattedDate = (d[0]) + "-" + (d[1] < 10 ? ("0" + d[1]) : d[1]) + "-" + (d[2] < 10 ? ("0" + d[2]) : d[2])
                return formattedDate
            } else {
                return state
            }
            default:
                return state;
    }
};

const grantingDateErrors = (state = [], action) => {
    switch (action.type) {
        case SET_GRANTING_DATE:
            return action.errors
        case GET_CART_REPRESENTATIVE_DATA_DONE:
            return []
        default:
            return state;
    }
};

export const representativeData = combineReducers({
    representatives: combineReducers(representatives),
    grantors: combineReducers(grantors),
    representationMode,
    grantingDate,
    grantingDateErrors
});