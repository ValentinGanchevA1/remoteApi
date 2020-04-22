import * as ACTIONS from "../actionTypes";

export var devices = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_COMPARATOR_DEVICES:
            return action.payload;
        default:
            return state;
    }
}

export var comparatorConfig = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_COMPARATOR_CONFIG:
            return action.payload;
        default:
            return state
    }
}

export var modelsForBrand = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_MODELS_FOR_BRAND:
            return action.payload;
        case ACTIONS.CLEAR_MODELS_FOR_BRAND:
            return [];
        default:
            return state
    }
}

export var deviceBrands = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DEVICE_BRANDS:
            return action.payload;
        default:
            return state
    }
}

export var producers = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_PRODUCERS:
            return action.payload;
        default:
            return state
    }
}


export var selectedProducer = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.GET_SELECTED_PRODUCER:
            return action.payload;
        default:
            return state
    }
}

export var selectedModel = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.GET_SELECTED_MODEL:
            return action.payload;
        default:
            return state
    }
}
export var isComparatorCategory = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SET_IS_COMPARATOR_CATEGORY:
            return action.value;
        default:
            return state
    }
}
export var errorCode = (state = 0, action) => {
    switch (action.type) {
        case ACTIONS.SET_COMPARATOR_ERROR_CODE:
            return action.value;
        default:
            return state
    }
}