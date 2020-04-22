import {
    GET_PERIOD_DONE,
    GET_PERIOD_START
} from "../actionTypes";

var emptyPeriodData = {
    propositions: "",
    stateCode: ""
};

var emptyPeriodState = {
    propositions: "",
    stateCode: ""
};

export var durationsList = (state = [], action) => {
    switch (action.type) {
        case GET_PERIOD_DONE:
            return action.data.durations;
        default:
            return state;
    }
};