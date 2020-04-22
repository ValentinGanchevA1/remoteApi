import * as ACTIONS from "../actionTypes";
import RemoteApi from "../remoteApi";


export const openAssistModeModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.OPEN_ASSIST_MODE_MODAL,
        state: true
    });
};

export const closeAssistModeModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_ASSIST_MODE_MODAL,
        state: false
    });
};

export const openConfirmationModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.OPEN_CONFIRMATION_MODE_MODAL,
        state: true
    });
};

export const closeConfirmationModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_CONFIRMATION_MODE_MODAL,
        state: false
    });
};

export const openConfirmationLeaveModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.OPEN_CONFIRMATION_LEAVE_MODE_MODAL,
        state: true
    });
};

export const closeConfirmationLeaveModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_CONFIRMATION_LEAVE_MODE_MODAL,
        state: false
    });
};

export const setFilterEnabled = (flag) => (dispatch) => {
    dispatch({
        type: ACTIONS.EMPLOYEE_LIST_SEARCH_BUTTON_ENABLED,
        state: flag
    });
};

export const setSelectedEmployee = (employee) => (dispatch) => {
    dispatch({
        type: ACTIONS.SELECTED_EMPLOYEE_SET,
        selected: employee
    })
}

export const setPage = (page) => (dispatch) => {
    dispatch({
        type: ACTIONS.EMPLOYEE_LIST_SIZE_SET,
        page: page
    })
}

const getEmployeeListStart = (dispatch) => dispatch({
    type: ACTIONS.EMPLOYEE_LIST_START,
    state: true
});

const getEmployeeListDone = (dispatch) => dispatch({
    type: ACTIONS.EMPLOYEE_LIST_DONE,
    state: false
});

const getAssistModeStateStart = (dispatch) => dispatch({
    type: ACTIONS.ASSIST_MODE_STATE_START,
    state: true
});

const getAssistModeStateDone = (dispatch) => dispatch({
    type: ACTIONS.ASSIST_MODE_STATE_DONE,
    state: false
});

export function getAssistModeState() {
    return (dispatch) => {
        getAssistModeStateStart(dispatch);
        RemoteApi.getAssistModeState().then((response) => {
            dispatch({
                type: ACTIONS.ASSIST_MODE_GET,
                assistModeState: response
            });
            getAssistModeStateDone(dispatch);
        }).catch(() => {
            dispatch({
                type: ACTIONS.ASSIST_MODE_GET,
                assistModeState: {
                    state: "ERROR"
                }
            });
            getAssistModeStateDone(dispatch);
        })
    }
}

export function getEmployeeListByFilters(filters) {
    return (dispatch) => {
        getEmployeeListStart(dispatch);
        RemoteApi.getAssistModeEmployeeList(filters).then((response) =>
                dispatch({
                    type: ACTIONS.EMPLOYEE_LIST_GET,
                    employeeList: response
                }))
            .then(() => getEmployeeListDone(dispatch));
    }
}

export function setAssistEmployee(employee) {
    return (dispatch) => {
        RemoteApi.setAssistEmployee(employee)
            .then(() => window.location.reload())
            .catch(() => {
                dispatch({
                    type: ACTIONS.ASSIST_MODE_GET,
                    assistModeState: {
                        state: "ERROR"
                    }
                })
            });
    }
}

export function leaveAssistMode() {
    return (dispatch) => {
        RemoteApi.leaveAssistMode()
            .then(() => window.location.reload())
            .catch(() => {
                dispatch({
                    type: ACTIONS.ASSIST_MODE_GET,
                    assistModeState: {
                        state: "ERROR"
                    }
                })
            });
    }
}