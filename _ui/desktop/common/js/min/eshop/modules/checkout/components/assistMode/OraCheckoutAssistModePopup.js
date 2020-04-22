define(["exports", "react", "react-redux", "eshop/components/employee/OraEmployeeList", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "../../selectors", "eshop/modules/checkout/actions/assistMode"], function(e, s, t, i, a, r, l, o) {
    "use strict";

    function n(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var l = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, l)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireDefault(s), i = babelHelpers.interopRequireDefault(i), r = babelHelpers.interopRequireDefault(r);
    var c = function(e) {
            babelHelpers.inherits(l, e);
            var t = n(l);

            function l() {
                return babelHelpers.classCallCheck(this, l), t.call(this)
            }
            return babelHelpers.createClass(l, [{
                key: "componentDidMount",
                value: function() {
                    OPL.UI.loadModules(document.getElementById("employee-list-loader-component"), {
                        path: "core/modules/loader",
                        options: '{"fadeDuration":120}'
                    })
                }
            }, {
                key: "openAssistModeEnterConfirmationPopup",
                value: function() {
                    this.props.closeAssistModeModal(), this.props.openConfirmationModal()
                }
            }, {
                key: "validateFilters",
                value: function() {
                    return this.validateNotEmptyTextFilter(this.refs.filterLastName.value) || this.validateNotEmptyTextFilter(this.refs.filterLoginOtsa.value) || this.validateNotEmptyTextFilter(this.refs.filterFullBscs.value) || this.validateNotEmptyNumericFilter(this.refs.filterSisId.value)
                }
            }, {
                key: "validateNotEmptyTextFilter",
                value: function(e) {
                    return (e = e.trim()).length >= this.props.minTextFilterChars
                }
            }, {
                key: "validateNotEmptyNumericFilter",
                value: function(e) {
                    return 0 < e.trim().length && !isNaN(e) && isFinite(e)
                }
            }, {
                key: "doFilterOnEnter",
                value: function(e) {
                    "Enter" === e.key && this.doFilter()
                }
            }, {
                key: "btnFilterClick",
                value: function() {
                    this.doFilter()
                }
            }, {
                key: "doFilter",
                value: function() {
                    this.validateFilters() && this.searchEmployees(0)
                }
            }, {
                key: "btnNextClick",
                value: function() {
                    var e = this.props.page + 1;
                    this.searchEmployees(e)
                }
            }, {
                key: "btnPrevClick",
                value: function() {
                    var e = this.props.page - 1;
                    this.searchEmployees(e)
                }
            }, {
                key: "clearFilters",
                value: function() {
                    this.refs.filterLastName.value = "", this.refs.filterName.value = "", this.refs.filterLocation.value = "", this.refs.filterLoginOtsa.value = "", this.refs.filterFullBscs.value = "", this.refs.filterSisId.value = "", this.onFilterChange()
                }
            }, {
                key: "searchEmployees",
                value: function(e) {
                    var t = {
                        lastName: this.prepareFilterLike(this.refs.filterLastName.value),
                        name: this.prepareFilterLike(this.refs.filterName.value),
                        location: this.prepareFilterLike(this.refs.filterLocation.value),
                        loginOtsa: this.prepareFilterLike(this.refs.filterLoginOtsa.value),
                        fullBscs: this.prepareFilterLike(this.refs.filterFullBscs.value),
                        sisId: this.refs.filterSisId.value.trim(),
                        offset: e * this.props.employeeListPageSize,
                        limit: this.props.employeeListPageSize + 1
                    };
                    this.props.setPage(e), this.props.getEmployeeListByFilter(t)
                }
            }, {
                key: "checkPrevButton",
                value: function() {
                    return 0 === this.props.page || this.props.isLoadingInProgress
                }
            }, {
                key: "checkNextButton",
                value: function() {
                    var e = this.props.employeeList,
                        t = this.props.employeeList;
                    t = t && t.slice(0, this.props.employeeListPageSize);
                    var l = e ? e.length : 0;
                    return !((t ? t.length : 0) < l)
                }
            }, {
                key: "prepareFilterLike",
                value: function(e) {
                    var t = e.trim();
                    return 0 < t.length ? "%" + t + "%" : t
                }
            }, {
                key: "onSelectionChanged",
                value: function(e) {
                    this.props.setSelectedEmployee(e)
                }
            }, {
                key: "isEmployeeSelected",
                value: function() {
                    return !this.props.selectedEmployee
                }
            }, {
                key: "onFilterChange",
                value: function() {
                    this.props.setFilterEnabled(this.validateFilters())
                }
            }, {
                key: "renderEmployeeList",
                value: function() {
                    return this.props.employeeList ? 0 < this.props.employeeList.length ? s.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, s.default.createElement(i.default, {
                        employees: this.props.employeeList,
                        id: "assist-mode-popup-employeeList",
                        onSelectionChanged: this.onSelectionChanged.bind(this),
                        listId: "assist-mode-employeeList"
                    }), s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-1 l-col-small-6 u-right"
                    }, s.default.createElement(a.OraButton, {
                        type: "secondary",
                        size: "small",
                        className: "u-w-100",
                        disabled: this.checkNextButton(),
                        onClick: this.btnNextClick.bind(this)
                    }, ">")), s.default.createElement("div", {
                        className: "l-col l-col-1 l-col-small-6 u-right"
                    }, s.default.createElement(a.OraButton, {
                        type: "secondary",
                        size: "small",
                        className: "u-w-100",
                        disabled: this.checkPrevButton(),
                        onClick: this.btnPrevClick.bind(this)
                    }, "<")))) : s.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, s.default.createElement("div", {
                        className: "opl-msg opl-msg--info opl-msg--context"
                    }, s.default.createElement("p", null, this.props.descriptions.searchResultEmptyHint))) : s.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, s.default.createElement("div", {
                        className: "opl-msg opl-msg--info opl-msg--context"
                    }, s.default.createElement("p", null, this.props.descriptions.employeeListHint)))
                }
            }, {
                key: "renderFilterHint",
                value: function() {
                    if (!this.props.btnFilterEnabled) return s.default.createElement("div", {
                        className: "opl-msg opl-msg--info opl-msg--context"
                    }, s.default.createElement("p", null, this.props.descriptions.filterHint))
                }
            }, {
                key: "render",
                value: function() {
                    return s.default.createElement(r.default, {
                        id: "ora-checkout-assist-mode-panel-modal",
                        showClose: !0,
                        open: this.props.assistModeModalState,
                        onClose: this.props.closeAssistModeModal.bind(this)
                    }, s.default.createElement("div", {
                        className: "l-full-row"
                    }, s.default.createElement("div", {
                        className: "l-page-row"
                    }, s.default.createElement("div", {
                        className: "opl-form"
                    }, s.default.createElement("div", {
                        className: "l-row u-spacing"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-12 u-font-bold opl-msg"
                    }, s.default.createElement("h3", null, this.props.descriptions.assistModeSearch))), s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12"
                    }, s.default.createElement("label", {
                        htmlFor: "filterLastName"
                    }, this.props.descriptions.lastNameSearch), s.default.createElement("input", {
                        id: "filterLastName",
                        ref: "filterLastName",
                        type: "text",
                        onChange: this.onFilterChange.bind(this),
                        onKeyPress: this.doFilterOnEnter.bind(this)
                    })), s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12"
                    }, s.default.createElement("label", {
                        htmlFor: "filterName"
                    }, this.props.descriptions.firstNameSearch), s.default.createElement("input", {
                        id: "filterName",
                        ref: "filterName",
                        type: "text",
                        onChange: this.onFilterChange.bind(this),
                        onKeyPress: this.doFilterOnEnter.bind(this)
                    })), s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12"
                    }, s.default.createElement("label", {
                        htmlFor: "filterLocation"
                    }, this.props.descriptions.localizationSearch), s.default.createElement("input", {
                        id: "filterLocation",
                        ref: "filterLocation",
                        type: "text",
                        onChange: this.onFilterChange.bind(this),
                        onKeyPress: this.doFilterOnEnter.bind(this)
                    })), s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12"
                    }, s.default.createElement("label", {
                        htmlFor: "filterLoginOtsa"
                    }, this.props.descriptions.ostaSearch), s.default.createElement("input", {
                        id: "filterLoginOtsa",
                        ref: "filterLoginOtsa",
                        type: "text",
                        onChange: this.onFilterChange.bind(this),
                        onKeyPress: this.doFilterOnEnter.bind(this)
                    })), s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12"
                    }, s.default.createElement("label", {
                        htmlFor: "filterFullBscs"
                    }, this.props.descriptions.bscsSearch), s.default.createElement("input", {
                        id: "filterFullBscs",
                        ref: "filterFullBscs",
                        type: "text",
                        onChange: this.onFilterChange.bind(this),
                        onKeyPress: this.doFilterOnEnter.bind(this)
                    })), s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12"
                    }, s.default.createElement("label", {
                        htmlFor: "filterSisId"
                    }, this.props.descriptions.salesmanIdSearch), s.default.createElement("input", {
                        id: "filterSisId",
                        ref: "filterSisId",
                        type: "text",
                        onChange: this.onFilterChange.bind(this),
                        onKeyPress: this.doFilterOnEnter.bind(this)
                    }))), s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-8 l-col-small-12"
                    }, this.renderFilterHint()), s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-right"
                    }, s.default.createElement(a.OraButton, {
                        onClick: this.btnFilterClick.bind(this),
                        type: "primary",
                        size: "medium",
                        disabled: this.props.isLoadingInProgress || !this.props.btnFilterEnabled,
                        className: "u-w-100"
                    }, this.props.descriptions.filterButtonLabel)), s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-right"
                    }, s.default.createElement(a.OraButton, {
                        onClick: this.clearFilters.bind(this),
                        type: "secondary",
                        size: "medium",
                        className: "u-w-100"
                    }, this.props.descriptions.clearButtonLabel))), s.default.createElement("div", {
                        className: "o-separator o-separator--l o-separator--expanded"
                    }), s.default.createElement(a.OraLoader, {
                        className: "l-row",
                        loading: this.props.isLoadingInProgress,
                        id: "employee-list-loader-component",
                        parentId: "assist-mode-loaders",
                        size: "l"
                    }, this.renderEmployeeList()), s.default.createElement("div", {
                        className: "o-separator o-separator--l o-separator--expanded"
                    }), s.default.createElement("div", {
                        className: "l-row"
                    }, s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-right"
                    }, s.default.createElement(a.OraButton, {
                        type: "primary",
                        size: "medium",
                        className: "u-w-100 opl-btn--green",
                        disabled: this.isEmployeeSelected(),
                        onClick: this.openAssistModeEnterConfirmationPopup.bind(this)
                    }, this.props.descriptions.enterButtonLabel)), s.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-right"
                    }, s.default.createElement(a.OraButton, {
                        modal: !0,
                        type: "secondary",
                        size: "medium",
                        className: "u-w-100"
                    }, this.props.descriptions.cancelButtonLabel)))))))
                }
            }]), l
        }(s.default.Component),
        d = (0, t.connect)(function(e) {
            return {
                assistModeModalState: (0, l.getAssistModeModalStateData)(e),
                employeeList: (0, l.getEmployeeList)(e),
                filters: (0, l.getEmployeeListFilters)(e),
                isLoadingInProgress: (0, l.isLoadingEmployeeList)(e),
                selectedEmployee: (0, l.getSelectedEmployee)(e),
                page: (0, l.getCurrentPage)(e),
                btnFilterEnabled: (0, l.getFilterEnabled)(e)
            }
        }, function(t) {
            return {
                closeAssistModeModal: function() {
                    return t((0, o.closeAssistModeModal)())
                },
                openConfirmationModal: function() {
                    return t((0, o.openConfirmationModal)())
                },
                getEmployeeListByFilter: function(e) {
                    return t((0, o.getEmployeeListByFilters)(e))
                },
                setSelectedEmployee: function(e) {
                    return t((0, o.setSelectedEmployee)(e))
                },
                setPage: function(e) {
                    return t((0, o.setPage)(e))
                },
                setFilterEnabled: function(e) {
                    return t((0, o.setFilterEnabled)(e))
                }
            }
        })(c);
    e.default = d, c.defaultProps = {
        onEnter: function() {},
        employeeListPageSize: 10,
        minTextFilterChars: 3
    }
});
//# sourceMappingURL=OraCheckoutAssistModePopup.js.map