import * as actionTypes from "../actionTypes";
import * as checkoutActionTypes from "../../checkout/actionTypes";

const selectedDeviceReducer = (state = null, action) => {
    switch (action.type) {
        case actionTypes.SELECT_DEVICE_VARIANT:
            return {
                productId: action.payload.productId,
                    variantId: action.payload.variantId
            };
        case actionTypes.SELECT_PROPOSITION:
        case checkoutActionTypes.fetchZipCodeFromWWT.reset:
            return null;
        default:
            return state;
    }
};

export default selectedDeviceReducer;