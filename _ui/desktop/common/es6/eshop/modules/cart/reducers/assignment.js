import {
    combineReducers
} from "redux";
import {
    PAYMENT_PLAN_ASSIGN_VALUE_CHANGE,
    CONFIRMATION_DEATH_CHANGE
} from "../actionTypes";

export const isPaymentPlanAssigned = (state = [], action) => {
    switch (action.type) {
        case PAYMENT_PLAN_ASSIGN_VALUE_CHANGE:
            return action.payload;
        default:
            return state;
    }
};

export const isDeathCertificateConfirmed = (state = false, action) => {
    switch (action.type) {
        case CONFIRMATION_DEATH_CHANGE:
            return action.payload;
        default:
            return state;
    }
};