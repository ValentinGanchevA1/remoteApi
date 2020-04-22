import * as ACTIONS from '../actionTypes';

export const mode = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_MODE:
            return action.payload
        default:
            return state;
    }
};