import {
    FETCH_CONVERGENT_CONFIGURABLES
} from "../actionTypes";

const initialConvergentVasesState = {
    configurables: []
};

export const convergentConfigurablesReducer = (state = initialConvergentVasesState, action) => {
    switch (action.type) {
        case FETCH_CONVERGENT_CONFIGURABLES:
            return {
                configurables: [...action.payload.configurables]
            };
        default:
            return state
    }
};