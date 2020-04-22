define(["exports", "react", "react-redux", "eshop/components/employee/OraEmployeeList", "eshop/components/OraCommonComponents", "eshop/modules/core/components/ui/Modal", "../../selectors", "eshop/modules/checkout/actions/assistMode"], function(_exports, _react, _reactRedux, _OraEmployeeList, _OraCommonComponents, _Modal, _selectors, _assistMode) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OraEmployeeList = babelHelpers.interopRequireDefault(_OraEmployeeList);
    _Modal = babelHelpers.interopRequireDefault(_Modal);

    function _createSuper(Derived) {
        return function() {
            var Super = babelHelpers.getPrototypeOf(Derived),
                result;
            if (_isNativeReflectConstruct()) {
                var NewTarget = babelHelpers.getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return babelHelpers.possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    var OraCheckoutAssistModePopup = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OraCheckoutAssistModePopup, _React$Component);

        var _super = _createSuper(OraCheckoutAssistModePopup);

        function OraCheckoutAssistModePopup() {
            babelHelpers.classCallCheck(this, OraCheckoutAssistModePopup);
            return _super.call(this);
        }

        babelHelpers.createClass(OraCheckoutAssistModePopup, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                OPL.UI.loadModules(document.getElementById("employee-list-loader-component"), {
                    path: "core/modules/loader",
                    options: "{\"fadeDuration\":120}"
                });
            }
        }, {
            key: "openAssistModeEnterConfirmationPopup",
            value: function openAssistModeEnterConfirmationPopup() {
                this.props.closeAssistModeModal();
                this.props.openConfirmationModal();
            }
        }, {
            key: "validateFilters",
            value: function validateFilters() {
                return this.validateNotEmptyTextFilter(this.refs.filterLastName.value) || this.validateNotEmptyTextFilter(this.refs.filterLoginOtsa.value) || this.validateNotEmptyTextFilter(this.refs.filterFullBscs.value) || this.validateNotEmptyNumericFilter(this.refs.filterSisId.value);
            }
        }, {
            key: "validateNotEmptyTextFilter",
            value: function validateNotEmptyTextFilter(value) {
                value = value.trim();
                return value.length >= this.props.minTextFilterChars;
            }
        }, {
            key: "validateNotEmptyNumericFilter",
            value: function validateNotEmptyNumericFilter(value) {
                return value.trim().length > 0 && !isNaN(value) && isFinite(value);
            }
        }, {
            key: "doFilterOnEnter",
            value: function doFilterOnEnter(e) {
                if (e.key === "Enter") {
                    this.doFilter();
                }
            }
        }, {
            key: "btnFilterClick",
            value: function btnFilterClick() {
                this.doFilter();
            }
        }, {
            key: "doFilter",
            value: function doFilter() {
                if (!this.validateFilters()) return;
                this.searchEmployees(0);
            }
        }, {
            key: "btnNextClick",
            value: function btnNextClick() {
                var newPage = this.props.page + 1;
                this.searchEmployees(newPage);
            }
        }, {
            key: "btnPrevClick",
            value: function btnPrevClick() {
                var newPage = this.props.page - 1;
                this.searchEmployees(newPage);
            }
        }, {
            key: "clearFilters",
            value: function clearFilters() {
                this.refs.filterLastName.value = "";
                this.refs.filterName.value = "";
                this.refs.filterLocation.value = "";
                this.refs.filterLoginOtsa.value = "";
                this.refs.filterFullBscs.value = "";
                this.refs.filterSisId.value = "";
                this.onFilterChange();
            }
        }, {
            key: "searchEmployees",
            value: function searchEmployees(page) {
                var filters = {
                    lastName: this.prepareFilterLike(this.refs.filterLastName.value),
                    name: this.prepareFilterLike(this.refs.filterName.value),
                    location: this.prepareFilterLike(this.refs.filterLocation.value),
                    loginOtsa: this.prepareFilterLike(this.refs.filterLoginOtsa.value),
                    fullBscs: this.prepareFilterLike(this.refs.filterFullBscs.value),
                    sisId: this.refs.filterSisId.value.trim(),
                    offset: page * this.props.employeeListPageSize,
                    limit: this.props.employeeListPageSize + 1
                };
                this.props.setPage(page);
                this.props.getEmployeeListByFilter(filters);
            }
        }, {
            key: "checkPrevButton",
            value: function checkPrevButton() {
                return this.props.page === 0 || this.props.isLoadingInProgress;
            }
        }, {
            key: "checkNextButton",
            value: function checkNextButton() {
                var storeList = this.props.employeeList;
                var tableList = this.props.employeeList;

                if (tableList) {
                    tableList = tableList.slice(0, this.props.employeeListPageSize);
                }

                var storeListLen = storeList ? storeList.length : 0;
                var tableListLen = tableList ? tableList.length : 0;
                return !(tableListLen < storeListLen);
            }
        }, {
            key: "prepareFilterLike",
            value: function prepareFilterLike(value) {
                var v = value.trim();
                return v.length > 0 ? "%" + v + "%" : v;
            }
        }, {
            key: "onSelectionChanged",
            value: function onSelectionChanged(sisId) {
                this.props.setSelectedEmployee(sisId);
            }
        }, {
            key: "isEmployeeSelected",
            value: function isEmployeeSelected() {
                return !this.props.selectedEmployee;
            }
        }, {
            key: "onFilterChange",
            value: function onFilterChange() {
                this.props.setFilterEnabled(this.validateFilters());
            }
        }, {
            key: "renderEmployeeList",
            value: function renderEmployeeList() {
                if (!this.props.employeeList) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-msg opl-msg--info opl-msg--context"
                    }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.descriptions.employeeListHint)));
                } else if (this.props.employeeList.length > 0) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, /*#__PURE__*/ _react.default.createElement(_OraEmployeeList.default, {
                        employees: this.props.employeeList,
                        id: "assist-mode-popup-employeeList",
                        onSelectionChanged: this.onSelectionChanged.bind(this),
                        listId: "assist-mode-employeeList"
                    }), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-row"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-1 l-col-small-6 u-right"
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                        type: "secondary",
                        size: "small",
                        className: "u-w-100",
                        disabled: this.checkNextButton(),
                        onClick: this.btnNextClick.bind(this)
                    }, ">")), /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-1 l-col-small-6 u-right"
                    }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                        type: "secondary",
                        size: "small",
                        className: "u-w-100",
                        disabled: this.checkPrevButton(),
                        onClick: this.btnPrevClick.bind(this)
                    }, "<"))));
                } else {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-msg opl-msg--info opl-msg--context"
                    }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.descriptions.searchResultEmptyHint)));
                }
            }
        }, {
            key: "renderFilterHint",
            value: function renderFilterHint() {
                if (!this.props.btnFilterEnabled) {
                    return /*#__PURE__*/ _react.default.createElement("div", {
                        className: "opl-msg opl-msg--info opl-msg--context"
                    }, /*#__PURE__*/ _react.default.createElement("p", null, this.props.descriptions.filterHint));
                }
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_Modal.default, {
                    id: "ora-checkout-assist-mode-panel-modal",
                    showClose: true,
                    open: this.props.assistModeModalState,
                    onClose: this.props.closeAssistModeModal.bind(this)
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-full-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-page-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "opl-form"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row u-spacing"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 u-font-bold opl-msg"
                }, /*#__PURE__*/ _react.default.createElement("h3", null, this.props.descriptions.assistModeSearch))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "filterLastName"
                }, this.props.descriptions.lastNameSearch), /*#__PURE__*/ _react.default.createElement("input", {
                    id: "filterLastName",
                    ref: "filterLastName",
                    type: "text",
                    onChange: this.onFilterChange.bind(this),
                    onKeyPress: this.doFilterOnEnter.bind(this)
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "filterName"
                }, this.props.descriptions.firstNameSearch), /*#__PURE__*/ _react.default.createElement("input", {
                    id: "filterName",
                    ref: "filterName",
                    type: "text",
                    onChange: this.onFilterChange.bind(this),
                    onKeyPress: this.doFilterOnEnter.bind(this)
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "filterLocation"
                }, this.props.descriptions.localizationSearch), /*#__PURE__*/ _react.default.createElement("input", {
                    id: "filterLocation",
                    ref: "filterLocation",
                    type: "text",
                    onChange: this.onFilterChange.bind(this),
                    onKeyPress: this.doFilterOnEnter.bind(this)
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "filterLoginOtsa"
                }, this.props.descriptions.ostaSearch), /*#__PURE__*/ _react.default.createElement("input", {
                    id: "filterLoginOtsa",
                    ref: "filterLoginOtsa",
                    type: "text",
                    onChange: this.onFilterChange.bind(this),
                    onKeyPress: this.doFilterOnEnter.bind(this)
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "filterFullBscs"
                }, this.props.descriptions.bscsSearch), /*#__PURE__*/ _react.default.createElement("input", {
                    id: "filterFullBscs",
                    ref: "filterFullBscs",
                    type: "text",
                    onChange: this.onFilterChange.bind(this),
                    onKeyPress: this.doFilterOnEnter.bind(this)
                })), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12"
                }, /*#__PURE__*/ _react.default.createElement("label", {
                    htmlFor: "filterSisId"
                }, this.props.descriptions.salesmanIdSearch), /*#__PURE__*/ _react.default.createElement("input", {
                    id: "filterSisId",
                    ref: "filterSisId",
                    type: "text",
                    onChange: this.onFilterChange.bind(this),
                    onKeyPress: this.doFilterOnEnter.bind(this)
                }))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-8 l-col-small-12"
                }, this.renderFilterHint()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.btnFilterClick.bind(this),
                    type: "primary",
                    size: "medium",
                    disabled: this.props.isLoadingInProgress || !this.props.btnFilterEnabled,
                    className: "u-w-100"
                }, this.props.descriptions.filterButtonLabel)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    onClick: this.clearFilters.bind(this),
                    type: "secondary",
                    size: "medium",
                    className: "u-w-100"
                }, this.props.descriptions.clearButtonLabel))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--l o-separator--expanded"
                }), /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    className: "l-row",
                    loading: this.props.isLoadingInProgress,
                    id: "employee-list-loader-component",
                    parentId: "assist-mode-loaders",
                    size: "l"
                }, this.renderEmployeeList()), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "o-separator o-separator--l o-separator--expanded"
                }), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    type: "primary",
                    size: "medium",
                    className: "u-w-100 opl-btn--green",
                    disabled: this.isEmployeeSelected(),
                    onClick: this.openAssistModeEnterConfirmationPopup.bind(this)
                }, this.props.descriptions.enterButtonLabel)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-right"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    modal: true,
                    type: "secondary",
                    size: "medium",
                    className: "u-w-100"
                }, this.props.descriptions.cancelButtonLabel)))))));
            }
        }]);
        return OraCheckoutAssistModePopup;
    }(_react.default.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            closeAssistModeModal: function closeAssistModeModal() {
                return dispatch((0, _assistMode.closeAssistModeModal)());
            },
            openConfirmationModal: function openConfirmationModal() {
                return dispatch((0, _assistMode.openConfirmationModal)());
            },
            getEmployeeListByFilter: function getEmployeeListByFilter(filters) {
                return dispatch((0, _assistMode.getEmployeeListByFilters)(filters));
            },
            setSelectedEmployee: function setSelectedEmployee(employee) {
                return dispatch((0, _assistMode.setSelectedEmployee)(employee));
            },
            setPage: function setPage(page) {
                return dispatch((0, _assistMode.setPage)(page));
            },
            setFilterEnabled: function setFilterEnabled(state) {
                return dispatch((0, _assistMode.setFilterEnabled)(state));
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            assistModeModalState: (0, _selectors.getAssistModeModalStateData)(state),
            employeeList: (0, _selectors.getEmployeeList)(state),
            filters: (0, _selectors.getEmployeeListFilters)(state),
            isLoadingInProgress: (0, _selectors.isLoadingEmployeeList)(state),
            selectedEmployee: (0, _selectors.getSelectedEmployee)(state),
            page: (0, _selectors.getCurrentPage)(state),
            btnFilterEnabled: (0, _selectors.getFilterEnabled)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraCheckoutAssistModePopup);

    _exports.default = _default;
    OraCheckoutAssistModePopup.defaultProps = {
        onEnter: function onEnter(event) {},
        employeeListPageSize: 10,
        minTextFilterChars: 3
    };
});
//# sourceMappingURL=OraCheckoutAssistModePopup.js.map