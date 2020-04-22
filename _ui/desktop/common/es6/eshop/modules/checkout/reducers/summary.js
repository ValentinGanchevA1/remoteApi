import {
    combineReducers
} from "redux";

import {
    REGISTER_COMPONENT_PROPS_VALUE
} from "../actionTypes";

export const summary = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_COMPONENT_PROPS_VALUE:
            return action.payload;
        default:
            return state;
    }
};


// export const summary = combineReducers({
//     summary
//     });