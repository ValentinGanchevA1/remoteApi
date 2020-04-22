import * as ACTIONS from '../actionTypes'

const defaultModalConfig = {
    showIcon: true
};

export const showErrorModal = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.OPEN_ERROR_MODAL:
            return true;
        case ACTIONS.CLOSE_ERROR_MODAL:
            return false;
        default:
            return state;
    }
};

export const errorMessage = (message = null, action) => {
    switch (action.type) {
        case ACTIONS.OPEN_ERROR_MODAL:
            return action.payload.errorMessage;
        default:
            return message;
    }
};

export const errorModalConfig = (state = defaultModalConfig, action) => {
    switch (action.type) {
        case ACTIONS.OPEN_ERROR_MODAL:
            return {
                ...state, ...action.payload.errorModalConfig
            };
        default:
            return state;
    }
};