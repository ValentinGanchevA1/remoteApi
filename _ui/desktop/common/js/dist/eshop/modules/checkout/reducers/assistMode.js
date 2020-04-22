define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.confirmationLeaveModalState = _exports.confirmationModalState = _exports.modalAssistModeState = _exports.assistModeState = _exports.filters = _exports.employeeList = _exports.page = _exports.filterEnabled = _exports.isLoadingEmployeeList = _exports.isLoadingAssistModeState = _exports.selectedEmployee = void 0;

    var selectedEmployee = function selectedEmployee() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SELECTED_EMPLOYEE_SET:
                return action.selected;

            default:
                return state;
        }
    };

    _exports.selectedEmployee = selectedEmployee;

    var isLoadingAssistModeState = function isLoadingAssistModeState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.ASSIST_MODE_STATE_START:
            case _actionTypes.ASSIST_MODE_STATE_DONE:
                return action.state;

            default:
                return state;
        }
    };

    _exports.isLoadingAssistModeState = isLoadingAssistModeState;

    var isLoadingEmployeeList = function isLoadingEmployeeList() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.EMPLOYEE_LIST_START:
            case _actionTypes.EMPLOYEE_LIST_DONE:
                return action.state;

            default:
                return state;
        }
    };

    _exports.isLoadingEmployeeList = isLoadingEmployeeList;

    var filterEnabled = function filterEnabled() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.EMPLOYEE_LIST_SEARCH_BUTTON_ENABLED:
                return action.state;

            default:
                return state;
        }
    };

    _exports.filterEnabled = filterEnabled;

    var page = function page() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.EMPLOYEE_LIST_SIZE_SET:
                return action.page;

            default:
                return state;
        }
    };

    _exports.page = page;

    var employeeList = function employeeList() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.EMPLOYEE_LIST_GET:
                return action.employeeList;

            default:
                return state;
        }
    };

    _exports.employeeList = employeeList;

    var filters = function filters() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.UPDATE_FILTERS:
                return action.filters;

            default:
                return state;
        }
    };

    _exports.filters = filters;

    var assistModeState = function assistModeState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.ASSIST_MODE_GET:
                return action.assistModeState;

            case _actionTypes.ASSIST_MODE_DISMISS:
                return {
                    state: "INACTIVE"
                };

            default:
                return state;
        }
    };

    _exports.assistModeState = assistModeState;

    var modalAssistModeState = function modalAssistModeState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.OPEN_ASSIST_MODE_MODAL:
            case _actionTypes.CLOSE_ASSIST_MODE_MODAL:
                return action.state;

            default:
                return state;
        }
    };

    _exports.modalAssistModeState = modalAssistModeState;

    var confirmationModalState = function confirmationModalState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.OPEN_CONFIRMATION_MODE_MODAL:
            case _actionTypes.CLOSE_CONFIRMATION_MODE_MODAL:
                return action.state;

            default:
                return state;
        }
    };

    _exports.confirmationModalState = confirmationModalState;

    var confirmationLeaveModalState = function confirmationLeaveModalState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.OPEN_CONFIRMATION_LEAVE_MODE_MODAL:
            case _actionTypes.CLOSE_CONFIRMATION_LEAVE_MODE_MODAL:
                return action.state;

            default:
                return state;
        }
    };

    _exports.confirmationLeaveModalState = confirmationLeaveModalState;
});
//# sourceMappingURL=assistMode.js.map