import * as ACTIONS from "../actionTypes";
import {
    RESOURCE_MODAL_OPEN
} from "../actionTypes";

export const visibleModal = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.LOWER_INSTALLMENTS_MODAL_OPEN:
            return true;
        case ACTIONS.LOWER_INSTALLMENTS_MODAL_CLOSE:
            return false;
        default:
            return state;
    }
};

export const bundleNo = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.LOWER_INSTALLMENTS_MODAL_OPEN:
            return action.bundleNo;
        default:
            return state;
    }
};