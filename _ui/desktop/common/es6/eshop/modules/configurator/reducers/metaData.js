import {
    FETCH_OFFERS_START,
    FETCH_OFFERS,
    URL_PARAMETERS_USED,
    URL_OFFER_PARAMETERS_USED,
    ADD_FROM_LINK,
    CHECK_MSISDN_RESULT_B2B_START,
    CHECK_MSISDN_RESULT_B2B,
    CAROUSEL_READY,
    CAROUSEL_PREPARING,
    MSISDN_VERIFICATION_REQUIRED_ON,
    MSISDN_VERIFICATION_REQUIRED_OFF,
    SELECT_PROCESS_TYPE,
    SELECT_LOYALTY_LENGTH,
    CUSTOMER_SELECTED
} from "../actionTypes";
import * as ACTIONS from "../../auth/actionTypes";


export var isCustomerSelected = (state = false, action) => {
    switch (action.type) {
        case CUSTOMER_SELECTED:
            return true;
        case ACTIONS.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
            if (action.payload == undefined)
                return state;
            return action.payload.notFound || action.payload.lastName || action.payload.tradingName;
        default:
            return state;
    }

}

export var offersLoading = (state = false, action) => {
    switch (action.type) {
        case FETCH_OFFERS_START:
            return true;
        case SELECT_PROCESS_TYPE:
            return true;
        case SELECT_LOYALTY_LENGTH:
            return true;

        case FETCH_OFFERS:
            return false;
        case CAROUSEL_READY:
            return false;

        default:
            return state;
    }
}
export var carouselReady = (state = false, action) => {
    switch (action.type) {
        case CAROUSEL_READY:
            return true;
        case CAROUSEL_PREPARING:
            return false;
        default:
            return state;
    }
}
export var verifyMsisdnLoading = (state = [], action) => {
    switch (action.type) {
        case CHECK_MSISDN_RESULT_B2B_START:
            const newState = state.slice(0);
            newState[action.index] = true;
            return newState;
        case CHECK_MSISDN_RESULT_B2B:
            const newState1 = state.slice(0);
            newState1[action.index] = false;
            return newState1;
        default:
            return state;
    }
}

export var urlParametersUsed = (state = false, action) => {
    switch (action.type) {
        case URL_PARAMETERS_USED:
            return true;
        default:
            return state;
    }
}
export var urlOfferParametersUsed = (state = false, action) => {
    switch (action.type) {
        case URL_OFFER_PARAMETERS_USED:
            return true;
        default:
            return state;
    }
}
export var addFromLink = (state = false, action) => {
    switch (action.type) {
        case ADD_FROM_LINK:
            return true;
        default:
            return state;
    }
}

export var msisdnVerificationRequired = (state = false, action) => {
    switch (action.type) {
        case MSISDN_VERIFICATION_REQUIRED_ON:
            return true;
        case MSISDN_VERIFICATION_REQUIRED_OFF:
            return false;
        default:
            return state;
    }
};
export const mobileBillingAccountsSet = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SET_MOBILE_BILLING_ACCOUNTS:
            return action.meta;
        default:
            return state;
    }
};