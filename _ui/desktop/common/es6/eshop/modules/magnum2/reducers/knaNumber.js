import * as actionTypes from "../actionTypes";

const knaNumberReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.SET_KNA_NUMBER:
            return action.payload.knaNumber;
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.knaNumber;
        default:
            return state;
    }
};

export default knaNumberReducer;