import {
    TEMPLATE_INCREMENT,
    TEMPLATE_ASYNC_START,
    TEMPLATE_ASYNC_RECEIVE,
    TEMPLATE_ASYNC_ERROR
} from "../actionTypes";


export var fetching = (state = false, action) => {

    switch (action.type) {
        case TEMPLATE_ASYNC_START:
            return true
        case TEMPLATE_ASYNC_RECEIVE:
        case TEMPLATE_ASYNC_ERROR:
            return false
        default:
            return state
    }
}


export var data = (state = {}, action) => {

    switch (action.type) {
        case TEMPLATE_ASYNC_RECEIVE:
            return action.receivedData
        default:
            return state;
    }
}

export var meta = (state = {}, action) => {

    switch (action.type) {
        case TEMPLATE_ASYNC_RECEIVE:
            return {
                ...state, error: '', timestamp: Date.now()
            }
            case TEMPLATE_ASYNC_ERROR:
                return {
                    ...state, error: 'ERROR MESSAGE'
                }
                default:
                    return state;
    }
}

export var counter = (state = 0, action) => {
    switch (action.type) {
        case TEMPLATE_INCREMENT:
            return state + 1
        default:
            return state;
    }
}