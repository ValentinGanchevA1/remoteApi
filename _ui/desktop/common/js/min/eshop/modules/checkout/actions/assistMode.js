define(["exports", "../actionTypes", "../remoteApi"], function(t, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getAssistModeState = function() {
        return function(e) {
            a(e), o.default.getAssistModeState().then(function(t) {
                e({
                    type: n.ASSIST_MODE_GET,
                    assistModeState: t
                }), u(e)
            }).catch(function() {
                e({
                    type: n.ASSIST_MODE_GET,
                    assistModeState: {
                        state: "ERROR"
                    }
                }), u(e)
            })
        }
    }, t.getEmployeeListByFilters = function(t) {
        return function(e) {
            i(e), o.default.getAssistModeEmployeeList(t).then(function(t) {
                return e({
                    type: n.EMPLOYEE_LIST_GET,
                    employeeList: t
                })
            }).then(function() {
                return s(e)
            })
        }
    }, t.setAssistEmployee = function(e) {
        return function(t) {
            o.default.setAssistEmployee(e).then(function() {
                return window.location.reload()
            }).catch(function() {
                t({
                    type: n.ASSIST_MODE_GET,
                    assistModeState: {
                        state: "ERROR"
                    }
                })
            })
        }
    }, t.leaveAssistMode = function() {
        return function(t) {
            o.default.leaveAssistMode().then(function() {
                return window.location.reload()
            }).catch(function() {
                t({
                    type: n.ASSIST_MODE_GET,
                    assistModeState: {
                        state: "ERROR"
                    }
                })
            })
        }
    }, t.setPage = t.setSelectedEmployee = t.setFilterEnabled = t.closeConfirmationLeaveModal = t.openConfirmationLeaveModal = t.closeConfirmationModal = t.openConfirmationModal = t.closeAssistModeModal = t.openAssistModeModal = void 0, n = babelHelpers.interopRequireWildcard(n), o = babelHelpers.interopRequireDefault(o);
    t.openAssistModeModal = function() {
        return function(t) {
            t({
                type: n.OPEN_ASSIST_MODE_MODAL,
                state: !0
            })
        }
    };
    t.closeAssistModeModal = function() {
        return function(t) {
            t({
                type: n.CLOSE_ASSIST_MODE_MODAL,
                state: !1
            })
        }
    };
    t.openConfirmationModal = function() {
        return function(t) {
            t({
                type: n.OPEN_CONFIRMATION_MODE_MODAL,
                state: !0
            })
        }
    };
    t.closeConfirmationModal = function() {
        return function(t) {
            t({
                type: n.CLOSE_CONFIRMATION_MODE_MODAL,
                state: !1
            })
        }
    };
    t.openConfirmationLeaveModal = function() {
        return function(t) {
            t({
                type: n.OPEN_CONFIRMATION_LEAVE_MODE_MODAL,
                state: !0
            })
        }
    };
    t.closeConfirmationLeaveModal = function() {
        return function(t) {
            t({
                type: n.CLOSE_CONFIRMATION_LEAVE_MODE_MODAL,
                state: !1
            })
        }
    };
    t.setFilterEnabled = function(e) {
        return function(t) {
            t({
                type: n.EMPLOYEE_LIST_SEARCH_BUTTON_ENABLED,
                state: e
            })
        }
    };
    t.setSelectedEmployee = function(e) {
        return function(t) {
            t({
                type: n.SELECTED_EMPLOYEE_SET,
                selected: e
            })
        }
    };
    t.setPage = function(e) {
        return function(t) {
            t({
                type: n.EMPLOYEE_LIST_SIZE_SET,
                page: e
            })
        }
    };
    var i = function(t) {
            return t({
                type: n.EMPLOYEE_LIST_START,
                state: !0
            })
        },
        s = function(t) {
            return t({
                type: n.EMPLOYEE_LIST_DONE,
                state: !1
            })
        },
        a = function(t) {
            return t({
                type: n.ASSIST_MODE_STATE_START,
                state: !0
            })
        },
        u = function(t) {
            return t({
                type: n.ASSIST_MODE_STATE_DONE,
                state: !1
            })
        }
});
//# sourceMappingURL=assistMode.js.map