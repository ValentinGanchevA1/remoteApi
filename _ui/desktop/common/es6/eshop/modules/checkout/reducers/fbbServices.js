import {
    DO_CHECKOUT_STEP_START,
    DO_CHECKOUT_STEP_DONE,
    DO_CHECKOUT_STEP_ERROR,
    CHECKOUT_FBB_SERVICES_DISMISS,
    SET_SELECTED_DESIGNATION_NUMBER,
    SET_SELECTED_SERVICE_INSTANCE_ID,
    SET_FBB_SERVICE_DATA,
} from "../actionTypes";
import _ from "lodash";

const getResults = (action) => action.results || [];

export var fbbServices = (state = [], action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
        case DO_CHECKOUT_STEP_DONE:
            return [];
        case DO_CHECKOUT_STEP_ERROR:
            ;
            const res = getResults(action)
                .filter(result => result.category === "FBB_SERVICES")
                .map(r1 => r1.details);
            return _.flatMap(res, r2 => r2.fixAddressWithServices);
        case CHECKOUT_FBB_SERVICES_DISMISS:
            return [];
        case SET_FBB_SERVICE_DATA:
            return action.payload.fixAddressWithServices || []
        default:
            return state;
    }
}

export var selectedDesignationNumber = (state = "", action) => {
    switch (action.type) {
        case SET_SELECTED_DESIGNATION_NUMBER:
            return action.designationNumber
        default:
            return state;
    }
}

export var selectedServiceInstanceId = (state = "", action) => {
    switch (action.type) {
        case SET_SELECTED_SERVICE_INSTANCE_ID:
            return action.serviceInstanceId
        default:
            return state;
    }
}