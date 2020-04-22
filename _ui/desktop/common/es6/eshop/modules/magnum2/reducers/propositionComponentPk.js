import * as actionTypes from "../actionTypes";

const propositionComponentPkReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.SET_PROPOSITION_COMPONENT_PK:
            return action.payload.componentPk;
        default:
            return state;
    }
};

export default propositionComponentPkReducer;