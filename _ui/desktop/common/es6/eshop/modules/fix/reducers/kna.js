import * as ACTIONS from '../actionTypes'

export const kna = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_KNA_FORM_FIELD:
            console.log(action.errors);
            return {
                ...state, [action.name]: action.value, errors: {
                    [action.name]: action.errors
                }
            };
        default:
            return state;
    }
};