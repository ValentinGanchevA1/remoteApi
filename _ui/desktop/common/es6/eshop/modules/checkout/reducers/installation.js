import {
    GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE,
    SELECT_INSTALLATION_TIME_SLOT,
    CHANGE_INSTALLATION_COMMENT,
    CHANGE_KWM_CONSENT_STATE,
    GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START,
    SELECT_INSTALLATION_SLOT_DESCRIPTION,
    SHOW_INSTALLATION_SLOT_ERROR,
    INSTALLATION_SLOT_FORCE_REFRESH,
    UPDATE_DAP_PHONE_NUMBER,
    GET_CART_CUSTOMER_DONE
} from '../actionTypes';

const availableTimeSlotsDefaultState = {
    dates: [],
    slots: [],
    additionalData: {
        standard: {},
        installationAddress: {}
    }
};

export const availableTimeSlots = (state = availableTimeSlotsDefaultState, action) => {
    switch (action.type) {
        case GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
            return action.data;
        default:
            return state;
    }
};

export const comment = (state = "", action) => {
    switch (action.type) {
        case CHANGE_INSTALLATION_COMMENT:
            return action.payload;
        default:
            return state;
    }
};

export const selectedInstallationTimeSlot = (state = null, action) => {
    switch (action.type) {
        case SELECT_INSTALLATION_TIME_SLOT:
            return {
                ...state,
                startDate: action.data.startDate,
                    endDate: action.data.endDate
            };
        default:
            return state;
    }
};

export const loading = (state = false, action) => {
    switch (action.type) {
        case GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
            return false;
        case GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START:
            return true;
        default:
            return state;
    }
};

export const selectedSlotDisplayText = (state = '', action) => {
    switch (action.type) {
        case SELECT_INSTALLATION_SLOT_DESCRIPTION:
            return action.payload;
        default:
            return state;
    }
};

export const showSelectedSlotError = (state = false, action) => {
    switch (action.type) {
        case SHOW_INSTALLATION_SLOT_ERROR:
            return action.payload;
        default:
            return state;
    }
};

export const shouldRefresh = (state = false, action) => {
    switch (action.type) {
        case INSTALLATION_SLOT_FORCE_REFRESH:
            return action.payload;
        default:
            return state;
    }
};


export const phoneContactDAP = (state = '', action) => {
    switch (action.type) {
        case UPDATE_DAP_PHONE_NUMBER:
            return action.data.phoneContact;
        case GET_CART_CUSTOMER_DONE:
            return action.data.phoneNumber;
        default:
            return state;
    }
};