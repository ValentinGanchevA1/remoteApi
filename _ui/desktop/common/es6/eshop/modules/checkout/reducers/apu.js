import {
    SELECT_APU,
    START_LOAD_APU,
    STOP_LOAD_APU
} from '../actionTypes';

export const isApuSelected = (state = false, action) => {
    switch (action.type) {
        case SELECT_APU:
            return true;
        default:
            return state;
    }
};