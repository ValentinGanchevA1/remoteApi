import * as ACTIONS from "../actionTypes";
import VoipVariant from "../enum/VoipVariant";

export const variant = (voipVariant = VoipVariant.NEW_VOIP, action) => {
    switch (action.type) {
        case ACTIONS.VOIP_VARIANT:
            return action.payload;
        case ACTIONS.DUPLICATE_ORDER_RESET:
            return VoipVariant.NEW_VOIP;
        default:
            return voipVariant;
    }
};

export const showVariantModal = (show = false, action) => {
    switch (action.type) {
        case ACTIONS.VOIP_SELECTION:
        case ACTIONS.SHOW_VOIP_VARIANT_MODAL:
            return action.payload;
        default:
            return show;
    }
};

export const showNumbersModal = (show = false, action) => {
    switch (action.type) {
        case ACTIONS.VOIP_SELECTION:
        case ACTIONS.SHOW_VOIP_NUMBERS_MODAL:
            return action.payload;
        default:
            return show;
    }
};

export const voipNumbers = (voipNumbers = [], action) => {
    switch (action.type) {
        case ACTIONS.SAVE_VOIP_NUMBERS:
            return action.payload && action.payload.voipNumbers || [];
        default:
            return voipNumbers;
    }
};

export const designationNumbers = (designationNumbers = [], action) => {
    switch (action.type) {
        case ACTIONS.SAVE_VOIP_NUMBERS:
            return action.payload && action.payload.designationNumbers || [];
        default:
            return designationNumbers;
    }
};

export const selectedVoipNumber = (selectedVoipNumber = "", action) => {
    switch (action.type) {
        case ACTIONS.SELECT_VOIP_NUMBER:
            return action.payload;
        default:
            return selectedVoipNumber;
    }
};

export const numbersFetched = (fetched = false, action) => {
    switch (action.type) {
        case ACTIONS.VOIP_NUMBERS_FETCHED:
            return action.payload;
        default:
            return fetched;
    }
};

export const numbersFetching = (fetching = false, action) => {
    switch (action.type) {
        case ACTIONS.VOIP_NUMBERS_FETCHING:
            return action.payload;
        default:
            return fetching;
    }
};

export const selectionInProgress = (inProgress = false, action) => {
    switch (action.type) {
        case ACTIONS.VOIP_SELECTION:
            return action.payload;
        default:
            return inProgress;
    }
};

export const designationNumber = (designationNumber = "", action) => {
    switch (action.type) {
        case ACTIONS.DESIGNATION_NUMBER:
            return action.payload;
        default:
            return designationNumber;
    }
};