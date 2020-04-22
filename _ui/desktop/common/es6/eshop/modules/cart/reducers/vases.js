import {
    FETCH_MOBILE_VASES,
    UPDATING_MOBILE_VASES
} from "../actionTypes";
import OnlineUtils from "eshop/utils/OnlineUtils";
import VasUpdateStatus from "eshop/modules/core/enum/VasUpdateStatus"
export const mobileVas = (state = [], action) => {
    switch (action.type) {
        case FETCH_MOBILE_VASES:
            return state.concat(action.payload);
        default:
            return state
    }
};

export var mobileVasUpdating = (state = [], action) => {
    switch (action.type) {
        case UPDATING_MOBILE_VASES:
            console.log("mobileVasUpdating", action);
            var newState = OnlineUtils.cloneArray(state);
            if (action.productsToRemove) {
                if (!newState[action.bundleNo]) {
                    newState[0] = [];
                    newState[action.bundleNo] = [];
                }
                action.productsToRemove.forEach(code => newState[action.bundleNo][code] = action.payload ? VasUpdateStatus.UPDATING : VasUpdateStatus.DELETED)
            }
            if (action.productsToAdd) {
                if (!newState[action.bundleNo]) {
                    newState[0] = [];
                    newState[action.bundleNo] = [];
                }
                action.productsToAdd.forEach(code => newState[action.bundleNo][code] = action.payload ? VasUpdateStatus.UPDATING : VasUpdateStatus.ADDED)
            }
            console.log("mobileVasUpdating", OnlineUtils.cloneArray(newState));
            return newState;
        default:
            return state
    }
};