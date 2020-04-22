import * as ACTIONS from '../actionTypes';
import FactoryType from "../../core/constants/FactoryTypeEnum";

export const errorMessage = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.FETCH_SERVICES_TO_TRANSFER_ERROR:
            console.log(action.message);
            return action.message;
        default:
            return state;
    }
}

export const fetchingServices = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_SERVICES_TO_TRANSFER_START:
            return true;
        case ACTIONS.FETCH_SERVICES_TO_TRANSFER_END:
        case ACTIONS.FETCH_SERVICES_TO_TRANSFER_ERROR:
            return false;
        default:
            return state;
    }
}

export const process = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_PROCESS:
            return action.process;
        default:
            return state;
    }
}

export const accountBalanceWithInstallmentPlanExists = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.ACCOUNT_BALANCE_WITH_INSTALLMENT_PLAN:
            return action.payload.accountBalanceWithInstallmentPlanExists;
        default:
            return state;
    }
}


export const services = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_SERVICES_TO_TRANSFER_END:
            return action.payload.servicesToTransfer;
        default:
            return state;
    }
}

export const packageDiscountConfirmation = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.PACKAGE_DISCOUNT_CONFIRM_CHECKED:
            return true;
        case ACTIONS.PACKAGE_DISCOUNT_CONFIRM_UNCHECKED:
            return false;
        default:
            return state;
    }
}

export const selectedServices = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.SELECTED_SERVICE_CHANGED:
            let newState = action.serviceType === FactoryType.FIX ? [] : [...state];
            if (newState.includes(action.serviceNumber)) {
                newState = newState.filter(val => val !== action.serviceNumber);
            } else {
                newState.push(action.serviceNumber);
            }
            return newState;
        default:
            return state;
    }
}