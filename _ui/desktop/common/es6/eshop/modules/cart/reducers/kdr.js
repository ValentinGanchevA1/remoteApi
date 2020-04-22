import * as ACTIONS from "../actionTypes";

export const kdrNumber = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.KDR_NUMBER_CHANGE:
            return action.payload;
        case ACTIONS.KDR_CART_DATA:
            return action.payload.number;
        case ACTIONS.KDR_NUMBER_CLEAR:
            return "";
        default:
            return state;
    }
};

export const kdrSource = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.KDR_CART_DATA:
            return action.payload.source;
        case ACTIONS.KDR_NUMBER_CLEAR:
            return "";
        case ACTIONS.KDR_NUMBER_CHANGE:
            return "input";
        default:
            return state;
    }
};

export const accepted = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.KDR_CART_DATA:
            return !!action.payload && !!action.payload.number;
        case ACTIONS.KDR_NUMBER_APPROVE:
            return true;
        case ACTIONS.KDR_NUMBER_CHANGE:
        case ACTIONS.KDR_NUMBER_CLEAR:
        case ACTIONS.KDR_ERROR:
            return false;
        default:
            return state;
    }
};

export const error = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.KDR_ERROR:
            return action.value;
        case ACTIONS.KDR_NUMBER_APPROVE:
        case ACTIONS.KDR_NUMBER_CHANGE:
        case ACTIONS.KDR_NUMBER_CLEAR:
        case ACTIONS.KDR_CART_DATA:
            return {};
        default:
            return state;
    }
};

export const saving = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.KDR_SAVING:
            return true;
        case ACTIONS.KDR_SAVED:
        case ACTIONS.KDR_ERROR:
            return false;
        default:
            return state;
    }
};