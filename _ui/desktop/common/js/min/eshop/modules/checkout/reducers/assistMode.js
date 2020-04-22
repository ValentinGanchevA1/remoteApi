define(["exports", "../actionTypes"], function(e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.confirmationLeaveModalState = e.confirmationModalState = e.modalAssistModeState = e.assistModeState = e.filters = e.employeeList = e.page = e.filterEnabled = e.isLoadingEmployeeList = e.isLoadingAssistModeState = e.selectedEmployee = void 0;
    e.selectedEmployee = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : "",
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.SELECTED_EMPLOYEE_SET:
                return a.selected;
            default:
                return n
        }
    };
    e.isLoadingAssistModeState = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.ASSIST_MODE_STATE_START:
            case i.ASSIST_MODE_STATE_DONE:
                return a.state;
            default:
                return n
        }
    };
    e.isLoadingEmployeeList = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.EMPLOYEE_LIST_START:
            case i.EMPLOYEE_LIST_DONE:
                return a.state;
            default:
                return n
        }
    };
    e.filterEnabled = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.EMPLOYEE_LIST_SEARCH_BUTTON_ENABLED:
                return a.state;
            default:
                return n
        }
    };
    e.page = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : 0,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.EMPLOYEE_LIST_SIZE_SET:
                return a.page;
            default:
                return n
        }
    };
    e.employeeList = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : null,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.EMPLOYEE_LIST_GET:
                return a.employeeList;
            default:
                return n
        }
    };
    e.filters = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.UPDATE_FILTERS:
                return a.filters;
            default:
                return n
        }
    };
    e.assistModeState = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.ASSIST_MODE_GET:
                return a.assistModeState;
            case i.ASSIST_MODE_DISMISS:
                return {
                    state: "INACTIVE"
                };
            default:
                return n
        }
    };
    e.modalAssistModeState = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.OPEN_ASSIST_MODE_MODAL:
            case i.CLOSE_ASSIST_MODE_MODAL:
                return a.state;
            default:
                return n
        }
    };
    e.confirmationModalState = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.OPEN_CONFIRMATION_MODE_MODAL:
            case i.CLOSE_CONFIRMATION_MODE_MODAL:
                return a.state;
            default:
                return n
        }
    };
    e.confirmationLeaveModalState = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.OPEN_CONFIRMATION_LEAVE_MODE_MODAL:
            case i.CLOSE_CONFIRMATION_LEAVE_MODE_MODAL:
                return a.state;
            default:
                return n
        }
    }
});
//# sourceMappingURL=assistMode.js.map