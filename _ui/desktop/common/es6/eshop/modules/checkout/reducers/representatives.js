import {
    CHANGE_REPRESENTATIVE_FORM_FIELD,
    CLEAR_REPRESENTATIVE_FORM_FIELD_ERRORS,
    GET_CART_REPRESENTATIVE_DATA_DONE,
    REMOVE_REPRESENTATIVE,
    SET_REPRESENTATION_MODE
} from "../actionTypes";

import {
    createArrayWithValueOnIndex,
    enforceArrayLengthInBounds
} from "eshop/modules/checkout/utils/utils"
import OnlineUtils from "eshop/utils/OnlineUtils";

const emptyData = {
    firstName: "",
    lastName: "",
    pesel: "",
    idNumber: "",
    country: "",
    identification: "",
    identificationValue: "",
    identificationEndDate: null,
    identificationRegisterDate: null,
    foreigner: false
};

export const data = (state = [], action) => {
    switch (action.type) {
        case CHANGE_REPRESENTATIVE_FORM_FIELD:
            return createArrayWithValueOnIndex(state, action.index, action.name, action.value, emptyData)
        case REMOVE_REPRESENTATIVE:
            return OnlineUtils.immutableRemove(state, action.index)
        case SET_REPRESENTATION_MODE:
            return enforceArrayLengthInBounds(state, action.modeConfig.minRC, action.modeConfig.maxRC, emptyData)
        case GET_CART_REPRESENTATIVE_DATA_DONE:
            return action.data.representatives;
        default:
            return state;
    }
};


export const errors = (state = [], action) => {
    switch (action.type) {
        case CHANGE_REPRESENTATIVE_FORM_FIELD:
            return createArrayWithValueOnIndex(state, action.index, action.name, action.errors)
        case REMOVE_REPRESENTATIVE:
            return OnlineUtils.immutableRemove(state, action.index)
        case SET_REPRESENTATION_MODE:
            return enforceArrayLengthInBounds(state, action.modeConfig.minRC, action.modeConfig.maxRC, [])
        case CLEAR_REPRESENTATIVE_FORM_FIELD_ERRORS:
            return [];
        case GET_CART_REPRESENTATIVE_DATA_DONE:
            return [];
        default:
            return state;
    }
};