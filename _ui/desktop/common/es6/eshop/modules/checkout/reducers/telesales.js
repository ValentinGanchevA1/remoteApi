import {
    CHANGE_TELESALES_FORM_FIELD
} from "../actionTypes";
import {
    FETCH_CART
} from "../../cart/actionTypes";

const empty = {
    campaignId: '',
    packageId: '',
    recordId: ''
};

export const Telesales = (state = empty, action) => {
    switch (action.type) {
        case CHANGE_TELESALES_FORM_FIELD:
            return {
                ...state, [action.name]: action.value
            };
        case FETCH_CART:
            console.log('FETCH_CART', action);
            if (!action.payload)
                return empty;
            const campaignData = action.payload.campaignData;
            return {
                campaignId: campaignData.campaignId,
                    packageId: campaignData.campaignPackageId,
                    recordId: campaignData.campaignRecordId
            };
        default:
            return state;
    }
};