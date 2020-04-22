import * as actionTypes from "../actionTypes";
import * as checkoutActionTypes from "../../checkout/actionTypes";

const selectedPropositionReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.SELECT_PROPOSITION:
            return {
                ...action.payload.proposition
            };
        case checkoutActionTypes.fetchZipCodeFromWWT.reset:
            return null;
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.selectedProposition;
        default:
            return state;
    }
};

export default selectedPropositionReducer;