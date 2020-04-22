import {
    REGISTER_NEXT_STEP_CONDITION,
    UNREGISTER_NEXT_STEP_CONDITION
} from "../actionTypes";
export var registered = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_NEXT_STEP_CONDITION:
            return {
                ...state, [action.condition]: true
            };
        case UNREGISTER_NEXT_STEP_CONDITION:
            return Object.keys(state).reduce((newState, conditionName) =>
                conditionName !== action.condition ? {
                    ...newState,
                    [conditionName]: state[conditionName]
                } : newState, {});
        default:
            return state;
    }
};