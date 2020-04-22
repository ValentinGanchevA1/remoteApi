import {
    CHANGE_GRANTOR_FORM_FIELD,
    GET_CART_REPRESENTATIVE_DATA_DONE,
    REMOVE_GRANTOR,
    SET_REPRESENTATION_MODE
} from "../actionTypes";

import {
    createArrayWithValueOnIndex,
    enforceArrayLengthInBounds
} from "eshop/modules/checkout/utils/utils"
import OnlineUtils from "eshop/utils/OnlineUtils";

const emptyData = {
    firstName: "",
    lastName: ""
};

export const data = (state = [], action) => {
    switch (action.type) {
        case CHANGE_GRANTOR_FORM_FIELD:
            return createArrayWithValueOnIndex(state, action.index, action.name, action.value, emptyData)
        case REMOVE_GRANTOR:
            return OnlineUtils.immutableRemove(state, action.index)
        case SET_REPRESENTATION_MODE:
            return enforceArrayLengthInBounds(state, action.modeConfig.minRMC, action.modeConfig.maxRMC, emptyData)
        case GET_CART_REPRESENTATIVE_DATA_DONE:
            return action.data.grantors;
        default:
            return state;
    }
};


export const errors = (state = [], action) => {
    switch (action.type) {
        case CHANGE_GRANTOR_FORM_FIELD:
            return createArrayWithValueOnIndex(state, action.index, action.name, action.errors)
        case REMOVE_GRANTOR:
            return OnlineUtils.immutableRemove(state, action.index)
        case SET_REPRESENTATION_MODE:
            return enforceArrayLengthInBounds(state, action.modeConfig.minRMC, action.modeConfig.maxRMC, {})
        case GET_CART_REPRESENTATIVE_DATA_DONE:
            return [];
        default:
            return state;
    }
};