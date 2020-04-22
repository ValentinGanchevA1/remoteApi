import * as ACTIONS from "../actionTypes";
import OnlineUtils from "eshop/utils/OnlineUtils";



export var verificationNeeded = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.VERIFICATION_NEEDED:
            return true;
        default:
            return state;
    }
}

export var openVerificationModal = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.OPEN_VERIFICATION_MODAL:
            return true;
        case ACTIONS.CLOSE_VERIFICATION_MODAL:
            return false;
        default:
            return state;
    }
}