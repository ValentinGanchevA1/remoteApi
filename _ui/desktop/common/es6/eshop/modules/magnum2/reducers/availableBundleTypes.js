import * as actionTypes from "../actionTypes";

const availableBundleTypesReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.SET_AVAILABLE_BUNDLE_TYPES:
            return action.payload.availableBundleTypes;
        case actionTypes.SET_MAGNUM_STORE:
            return action.payload.magnum.availableBundleTypes;
        default:
            return state;
    }
};

export default availableBundleTypesReducer;