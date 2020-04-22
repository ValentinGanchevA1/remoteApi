import {
    ASSIST_MODE_GET,
    ASSIST_MODE_DISMISS,
    OPEN_ASSIST_MODE_MODAL,
    CLOSE_ASSIST_MODE_MODAL,
    OPEN_CONFIRMATION_MODE_MODAL,
    CLOSE_CONFIRMATION_MODE_MODAL,
    EMPLOYEE_LIST_GET,
    EMPLOYEE_LIST_START,
    EMPLOYEE_LIST_DONE,
    UPDATE_FILTERS,
    SELECTED_EMPLOYEE_SET,
    EMPLOYEE_LIST_SIZE_SET,
    EMPLOYEE_LIST_SEARCH_BUTTON_ENABLED,
    ASSIST_MODE_STATE_START,
    ASSIST_MODE_STATE_DONE,
    OPEN_CONFIRMATION_LEAVE_MODE_MODAL,
    CLOSE_CONFIRMATION_LEAVE_MODE_MODAL
} from "../actionTypes";

export var selectedEmployee = (state = "", action) => {
    switch (action.type) {
        case SELECTED_EMPLOYEE_SET:
            return action.selected;
        default:
            return state;
    }
}

export var isLoadingAssistModeState = (state = false, action) => {
    switch (action.type) {
        case ASSIST_MODE_STATE_START:
        case ASSIST_MODE_STATE_DONE:
            return action.state;
        default:
            return state;
    }
}

export var isLoadingEmployeeList = (state = false, action) => {
    switch (action.type) {
        case EMPLOYEE_LIST_START:
        case EMPLOYEE_LIST_DONE:
            return action.state;
        default:
            return state;
    }
}

export var filterEnabled = (state = false, action) => {
    switch (action.type) {
        case EMPLOYEE_LIST_SEARCH_BUTTON_ENABLED:
            return action.state;
        default:
            return state;
    }
}

export var page = (state = 0, action) => {
    switch (action.type) {
        case EMPLOYEE_LIST_SIZE_SET:
            return action.page;
        default:
            return state;
    }
}

export var employeeList = (state = null, action) => {
    switch (action.type) {
        case EMPLOYEE_LIST_GET:
            return action.employeeList;
        default:
            return state;
    }
}

export var filters = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_FILTERS:
            return action.filters;
        default:
            return state;
    }

}

export var assistModeState = (state = {}, action) => {
    switch (action.type) {
        case ASSIST_MODE_GET:
            return action.assistModeState;
        case ASSIST_MODE_DISMISS:
            return {
                state: "INACTIVE"
            };
        default:
            return state;
    }
}

export var modalAssistModeState = (state = false, action) => {
    switch (action.type) {
        case OPEN_ASSIST_MODE_MODAL:
        case CLOSE_ASSIST_MODE_MODAL:
            return action.state;
        default:
            return state;
    }
}

export var confirmationModalState = (state = false, action) => {
    switch (action.type) {
        case OPEN_CONFIRMATION_MODE_MODAL:
        case CLOSE_CONFIRMATION_MODE_MODAL:
            return action.state;
        default:
            return state;
    }
}

export var confirmationLeaveModalState = (state = false, action) => {
    switch (action.type) {
        case OPEN_CONFIRMATION_LEAVE_MODE_MODAL:
        case CLOSE_CONFIRMATION_LEAVE_MODE_MODAL:
            return action.state;
        default:
            return state;
    }
}