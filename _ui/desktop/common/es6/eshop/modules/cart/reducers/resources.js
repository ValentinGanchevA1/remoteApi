import {
    combineReducers
} from "redux";
import {
    FETCH_MSISDNS,
    FETCH_SIM_CARDS,
    CHANGE_MSISDN,
    CHANGE_MSISDN_SUCCESS,
    CHANGE_MSISDN_FAILED,
    CHANGE_SIMCARD,
    CHANGE_SIMCARD_SUCCESS,
    RESOURCE_MODAL_OPEN,
    RESOURCE_MODAL_CLOSE,
    SET_MSISDN,
    SET_SIMCARD
} from "../actionTypes";

export const visible = (state = false, action) => {
    switch (action.type) {
        case RESOURCE_MODAL_OPEN:
            return true;
        case RESOURCE_MODAL_CLOSE:
        case CHANGE_MSISDN_SUCCESS:
        case CHANGE_SIMCARD_SUCCESS:
            return false;
        default:
            return state;
    }
};

export const bundleNo = (state = null, action) => {
    switch (action.type) {
        case RESOURCE_MODAL_OPEN:
            return action.bundleNo;
        default:
            return state;
    }
};

export const resourcesMsg = (state = null, action) => {
    switch (action.type) {
        case CHANGE_MSISDN_FAILED:
            if (action.payload)
                return action.payload;
            return state;
        case CHANGE_MSISDN_SUCCESS:
        case RESOURCE_MODAL_CLOSE:
            return null;
        default:
            return state;
    }
};

const simCards = (state = {}, action) => {
    switch (action.type) {
        case FETCH_SIM_CARDS:
            return {
                ...state, [action.bundleNo]: action.payload
            };
        default:
            return state;
    }
};

const simCard = (state = {}, action) => {
    switch (action.type) {
        case SET_SIMCARD:
            return {
                ...action.simCard
            };
        case RESOURCE_MODAL_OPEN:
            return {
                ...action.entry.simCard
            };
        default:
            return state;
    }
};

const changingSimCard = (state = false, action) => {
    switch (action.type) {
        case CHANGE_SIMCARD:
            return true;
        case CHANGE_SIMCARD_SUCCESS:
            return false;
        default:
            return state;
    }
};

export const simCardComponent = combineReducers({
    simCards,
    simCard,
    changingSimCard
});

const msisdns = (state = [], action) => {
    switch (action.type) {
        case FETCH_MSISDNS:
            return action.payload;
        case CHANGE_MSISDN_SUCCESS:
            return [];
        default:
            return state;
    }
};

const msisdn = (state = null, action) => {
    switch (action.type) {
        case SET_MSISDN:
            return action.msisdn;
        case RESOURCE_MODAL_OPEN:
            return action.entry.msisdn;
        default:
            return state;
    }
};

const changingMsisdn = (state = false, action) => {
    switch (action.type) {
        case CHANGE_MSISDN:
            return true;
        case CHANGE_MSISDN_FAILED:
        case CHANGE_MSISDN_SUCCESS:
            return false;
        default:
            return state;
    }
};

export const msisdnComponent = combineReducers({
    msisdns,
    msisdn,
    changingMsisdn
});