import * as actionTypes from "../actionTypes";

const selectedLoyaltyPeriodReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.SET_LOYALTY_PERIOD:
            return action.payload.loyaltyPeriod;
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.selectedLoyaltyPeriod;
        default:
            return state;
    }
};

export default selectedLoyaltyPeriodReducer;