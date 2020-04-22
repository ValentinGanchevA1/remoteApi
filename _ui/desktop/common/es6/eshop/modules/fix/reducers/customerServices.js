import * as ACTIONS from '../actionTypes';

export const customerServicesList = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.GET_CUSTOMER_SERVICES_LIST:
            return action.payload;
        default:
            return state;
    }
};

export const serviceDetails = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.SERVICE_DETAILS_FETCHED:
            return action.payload || {};
        default:
            return state;
    }
};

export const serviceDetailsLoading = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SERVICE_DETAILS_FETCHING:
            return true;
        case ACTIONS.SERVICE_DETAILS_FETCHED:
            return false;
        default:
            return state;
    }
};

export const serviceDetailsFetched = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SERVICE_DETAILS_FETCHED:
            return true;
        default:
            return state;
    }
};