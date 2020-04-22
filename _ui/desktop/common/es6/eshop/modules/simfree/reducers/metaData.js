import * as ACTIONS from "../actionTypes";
import RemoteApi from "../remoteApi";
import {
    combineReducers
} from "redux";
import OnlineUtils from "eshop/utils/OnlineUtils";

export const oneTimePriceFilterCmsConf = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.REGISTER_ONE_TIME_PRICE_CMS_CONF:
            let newState = {};
            action.cmsConf && action.cmsConf.map(c => (newState[c.offerType] || (newState[c.offerType] = [])) && newState[c.offerType].push(c));
            Object.keys(newState).map(key => newState[key] = newState[key].sort((a, b) => a.from - b.from));
            return newState || state;
        default:
            return state
    }
};

export const maxMonthlyPriceFilterCmsConf = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF:
            let newState = {};
            action.cmsConf && action.cmsConf.map(c => (newState[c.offerType] || (newState[c.offerType] = [])) && newState[c.offerType].push(c));
            Object.keys(newState).map(key => newState[key] = newState[key].sort((a, b) => a.alias ? -1 : a.to - b.to));
            return newState || state;
        default:
            return state
    }
};

export const filterConfigurationFetched = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_FILTER_CONFIGURATION: {
            return true;
        }
        default:
            return state;
    }
};