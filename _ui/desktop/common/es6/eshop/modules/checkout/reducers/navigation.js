import {
    DO_CHECKOUT_STEP_START,
    DO_CHECKOUT_STEP_DONE,
    DO_CHECKOUT_STEP_ERROR,
    GOTO_CHECKOUT_NEXT
} from "../actionTypes";

export var inProgress = (state = false, action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
            return true;
        case GOTO_CHECKOUT_NEXT:
            return true;
        case DO_CHECKOUT_STEP_DONE:
        case DO_CHECKOUT_STEP_ERROR:
            return false;
        default:
            return state;
    }
}

export var errorCode = (state = null, action) => {
    switch (action.type) {
        case DO_CHECKOUT_STEP_START:
            return null;
        case DO_CHECKOUT_STEP_ERROR:
            return action.code || "-1";
        default:
            return state;
    }
}