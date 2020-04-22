import {
    combineReducers
} from "redux";
import * as ACTIONS from "../../cart/actionTypes";
import DataLayerUtils from "../../../utils/DataLayerUtils";
import {
    getCurrentStepId
} from "../../checkout/selectors";

const initialState = {
    event: {}
};

const dataLayer = (state = initialState, action) => {
    // console.warn("dataLayer REDUCER", {state});
    if (action.type === 'dataLayer') {
        // console.warn('dataLayer reducer', {action});
        // debugger;
        return DataLayerUtils.createUniversalCheckoutStepEvent(action.payload, action.stepId, {
            loggedEmployee: action.loggedEmployee
        });
    }
    return state;
};

export default dataLayer;