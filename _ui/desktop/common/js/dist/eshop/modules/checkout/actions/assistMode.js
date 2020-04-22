define(["exports", "../actionTypes", "../remoteApi"], function(_exports, ACTIONS, _remoteApi) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getAssistModeState = getAssistModeState;
    _exports.getEmployeeListByFilters = getEmployeeListByFilters;
    _exports.setAssistEmployee = setAssistEmployee;
    _exports.leaveAssistMode = leaveAssistMode;
    _exports.setPage = _exports.setSelectedEmployee = _exports.setFilterEnabled = _exports.closeConfirmationLeaveModal = _exports.openConfirmationLeaveModal = _exports.closeConfirmationModal = _exports.openConfirmationModal = _exports.closeAssistModeModal = _exports.openAssistModeModal = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);

    var openAssistModeModal = function openAssistModeModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OPEN_ASSIST_MODE_MODAL,
                state: true
            });
        };
    };

    _exports.openAssistModeModal = openAssistModeModal;

    var closeAssistModeModal = function closeAssistModeModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_ASSIST_MODE_MODAL,
                state: false
            });
        };
    };

    _exports.closeAssistModeModal = closeAssistModeModal;

    var openConfirmationModal = function openConfirmationModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OPEN_CONFIRMATION_MODE_MODAL,
                state: true
            });
        };
    };

    _exports.openConfirmationModal = openConfirmationModal;

    var closeConfirmationModal = function closeConfirmationModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_CONFIRMATION_MODE_MODAL,
                state: false
            });
        };
    };

    _exports.closeConfirmationModal = closeConfirmationModal;

    var openConfirmationLeaveModal = function openConfirmationLeaveModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OPEN_CONFIRMATION_LEAVE_MODE_MODAL,
                state: true
            });
        };
    };

    _exports.openConfirmationLeaveModal = openConfirmationLeaveModal;

    var closeConfirmationLeaveModal = function closeConfirmationLeaveModal() {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_CONFIRMATION_LEAVE_MODE_MODAL,
                state: false
            });
        };
    };

    _exports.closeConfirmationLeaveModal = closeConfirmationLeaveModal;

    var setFilterEnabled = function setFilterEnabled(flag) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.EMPLOYEE_LIST_SEARCH_BUTTON_ENABLED,
                state: flag
            });
        };
    };

    _exports.setFilterEnabled = setFilterEnabled;

    var setSelectedEmployee = function setSelectedEmployee(employee) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.SELECTED_EMPLOYEE_SET,
                selected: employee
            });
        };
    };

    _exports.setSelectedEmployee = setSelectedEmployee;

    var setPage = function setPage(page) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.EMPLOYEE_LIST_SIZE_SET,
                page: page
            });
        };
    };

    _exports.setPage = setPage;

    var getEmployeeListStart = function getEmployeeListStart(dispatch) {
        return dispatch({
            type: ACTIONS.EMPLOYEE_LIST_START,
            state: true
        });
    };

    var getEmployeeListDone = function getEmployeeListDone(dispatch) {
        return dispatch({
            type: ACTIONS.EMPLOYEE_LIST_DONE,
            state: false
        });
    };

    var getAssistModeStateStart = function getAssistModeStateStart(dispatch) {
        return dispatch({
            type: ACTIONS.ASSIST_MODE_STATE_START,
            state: true
        });
    };

    var getAssistModeStateDone = function getAssistModeStateDone(dispatch) {
        return dispatch({
            type: ACTIONS.ASSIST_MODE_STATE_DONE,
            state: false
        });
    };

    function getAssistModeState() {
        return function(dispatch) {
            getAssistModeStateStart(dispatch);

            _remoteApi.default.getAssistModeState().then(function(response) {
                dispatch({
                    type: ACTIONS.ASSIST_MODE_GET,
                    assistModeState: response
                });
                getAssistModeStateDone(dispatch);
            }).catch(function() {
                dispatch({
                    type: ACTIONS.ASSIST_MODE_GET,
                    assistModeState: {
                        state: "ERROR"
                    }
                });
                getAssistModeStateDone(dispatch);
            });
        };
    }

    function getEmployeeListByFilters(filters) {
        return function(dispatch) {
            getEmployeeListStart(dispatch);

            _remoteApi.default.getAssistModeEmployeeList(filters).then(function(response) {
                return dispatch({
                    type: ACTIONS.EMPLOYEE_LIST_GET,
                    employeeList: response
                });
            }).then(function() {
                return getEmployeeListDone(dispatch);
            });
        };
    }

    function setAssistEmployee(employee) {
        return function(dispatch) {
            _remoteApi.default.setAssistEmployee(employee).then(function() {
                return window.location.reload();
            }).catch(function() {
                dispatch({
                    type: ACTIONS.ASSIST_MODE_GET,
                    assistModeState: {
                        state: "ERROR"
                    }
                });
            });
        };
    }

    function leaveAssistMode() {
        return function(dispatch) {
            _remoteApi.default.leaveAssistMode().then(function() {
                return window.location.reload();
            }).catch(function() {
                dispatch({
                    type: ACTIONS.ASSIST_MODE_GET,
                    assistModeState: {
                        state: "ERROR"
                    }
                });
            });
        };
    }
});
//# sourceMappingURL=assistMode.js.map