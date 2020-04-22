define(["exports", "react", "react-redux", "./OraCheckoutAssistModePopup", "./OraCheckoutAssistModeConfirmationPopup", "../../selectors", "eshop/modules/checkout/actions/assistMode", "eshop/components/OraCommonComponents", "../../../fix/selectors/root", "../../../magnum2/selectors/migration", "../../../magnum2/selectors", "../consents/AssistModeEnum"], function(_exports, _react, _reactRedux, _OraCheckoutAssistModePopup, _OraCheckoutAssistModeConfirmationPopup, _selectors, _assistMode, _OraCommonComponents, _root, _migration, _selectors2, _AssistModeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _OraCheckoutAssistModePopup = babelHelpers.interopRequireDefault(_OraCheckoutAssistModePopup);
    _OraCheckoutAssistModeConfirmationPopup = babelHelpers.interopRequireDefault(_OraCheckoutAssistModeConfirmationPopup);
    _AssistModeEnum = babelHelpers.interopRequireDefault(_AssistModeEnum);

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

    var OraCheckoutAssistModePanel = /*#__PURE__*/ function(_React$Component) {
        babelHelpers.inherits(OraCheckoutAssistModePanel, _React$Component);

        var _super = _createSuper(OraCheckoutAssistModePanel);

        function OraCheckoutAssistModePanel(props) {
            babelHelpers.classCallCheck(this, OraCheckoutAssistModePanel);
            return _super.call(this, props);
        }

        babelHelpers.createClass(OraCheckoutAssistModePanel, [{
            key: "componentDidMount",
            value: function componentDidMount() {
                this.props.getAssistMode();
                OPL.UI.loadModules(document.getElementById("assist-mode-panel-loader-component"), {
                    path: "core/modules/loader",
                    options: "{\"fadeDuration\":120}"
                });
            }
        }, {
            key: "openAssistModeLeaveConfirmationPopup",
            value: function openAssistModeLeaveConfirmationPopup() {
                this.props.openConfirmationLeaveModal();
            }
        }, {
            key: "refresh",
            value: function refresh() {
                this.props.getAssistMode();
            }
        }, {
            key: "openAssistModePopup",
            value: function openAssistModePopup() {
                this.props.openAssistModeModal();
            }
        }, {
            key: "onRejectActivate",
            value: function onRejectActivate() {
                this.props.closeConfirmationModal(); // ugly but not working without timeouts...

                setTimeout(this.props.openAssistModeModal.bind(this), 400);
            }
        }, {
            key: "onConfirmActivate",
            value: function onConfirmActivate() {
                this.props.setAssistEmployee({
                    sisId: this.props.selectedEmployee
                });
            }
        }, {
            key: "onRejectLeave",
            value: function onRejectLeave() {
                this.props.closeConfirmationLeaveModal();
            }
        }, {
            key: "onConfirmLeave",
            value: function onConfirmLeave() {
                this.props.leaveAssistMode();
            }
        }, {
            key: "_renderInternal",
            value: function _renderInternal() {
                var state = this.props.assistModeState.state;
                var assistedEmployee = this.props.assistModeState.assistedEmployee || {};
                var loggedEmployee = this.props.assistModeState.loggedEmployee || {};

                if (this.props.ftthAvailabilityDate && state === _AssistModeEnum.default.INACTIVE) {
                    return this._renderForUnavailableAssistState();
                }

                if (state === _AssistModeEnum.default.ACTIVE) {
                    return this._renderForActiveState(assistedEmployee);
                } else if (state === _AssistModeEnum.default.INACTIVE) {
                    return this._renderForInactiveState(loggedEmployee);
                } else if (state === _AssistModeEnum.default.ERROR) {
                    return this._renderForErrorState();
                } else {
                    return this._renderForUnknownState();
                }
            }
        }, {
            key: "_renderForActiveState",
            value: function _renderForActiveState(assistedEmployee) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-table-row__wrapper no-table-row-small"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row l-table-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.mode, "\xA0"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-green3-c"
                }, this.props.descriptions.stateActiveLabel)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 l-col-small-12 u-vertical-middle u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.asName, "\xA0"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-green3-c"
                }, assistedEmployee.firstName + " " + assistedEmployee.lastName + " (" + assistedEmployee.loginOtsa + ")")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.bscs, "\xA0"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-green3-c"
                }, assistedEmployee.fullBscs || "")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold u-large-padding-left-l u-medium-padding-left-l u-large-no-padding-r u-medium-no-padding-r"
                }, /*#__PURE__*/ _react.default.createElement("div", null, this.props.descriptions.channel, "\xA0", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-green3-c"
                }, assistedEmployee.salesChannelName || "")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-large-padding-top-s u-medium-padding-top-s"
                }, this.props.descriptions.sisChannel || "Kanał SIS:", "\xA0", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-green3-c"
                }, assistedEmployee.sisChannelDescription || ""))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 l-col-small-12 u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-right",
                    onClick: this.openAssistModeLeaveConfirmationPopup.bind(this),
                    type: "primary"
                }, this.props.descriptions.leaveAssistModeButtonLabel))));
            }
        }, {
            key: "_renderForInactiveState",
            value: function _renderForInactiveState(loggedEmployee) {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-table-row__wrapper no-table-row-small"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row l-table-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.mode, "\xA0"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-redf-c"
                }, this.props.descriptions.stateInactiveLabel)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 l-col-small-12 u-vertical-middle u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.assistModeInactiveEmployeeDescription)), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold"
                }, /*#__PURE__*/ _react.default.createElement("span", null, this.props.descriptions.bscs, "\xA0"), /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-green3-c"
                }, loggedEmployee.fullBscs || "")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold u-large-padding-left-l u-medium-padding-left-l u-large-no-padding-r u-medium-no-padding-r"
                }, /*#__PURE__*/ _react.default.createElement("div", null, this.props.descriptions.channel, "\xA0", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-green3-c"
                }, loggedEmployee.salesChannelName || "")), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "u-large-padding-top-s u-medium-padding-top-s"
                }, this.props.descriptions.sisChannel || "Kanał SIS:", "\xA0", /*#__PURE__*/ _react.default.createElement("span", {
                    className: "g-green3-c"
                }, loggedEmployee.sisChannelDescription || ""))), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-3 l-col-small-12 u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-right",
                    onClick: this.openAssistModePopup.bind(this),
                    type: "primary"
                }, this.props.descriptions.enterAssistModeButtonLabel))));
            }
        }, {
            key: "_renderForUnknownState",
            value: function _renderForUnknownState() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-table-row__wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row l-table-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 l-col-small-12 u-vertical-middle u-text-center u-font-bold"
                }, this.props.descriptions.unknownStateLabel)));
            }
        }, {
            key: "_renderForErrorState",
            value: function _renderForErrorState() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-table-row__wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row l-table-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-10 l-col-small-12 u-vertical-middle g-redf-c u-font-bold"
                }, this.props.errorDesc || this.props.descriptions.defaultErrorText), /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-2 l-col-small-12 u-vertical-middle"
                }, /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraButton, {
                    className: "u-right",
                    onClick: this.refresh.bind(this),
                    type: "primary"
                }, this.props.descriptions.btnRefreshLabel))));
            }
        }, {
            key: "_renderForUnavailableAssistState",
            value: function _renderForUnavailableAssistState() {
                return /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-table-row__wrapper"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row l-table-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12 l-col-small-12 u-vertical-middle g-redf-c u-font-bold"
                }, this.props.descriptions.unavailableAssistModeText)));
            }
        }, {
            key: "render",
            value: function render() {
                return /*#__PURE__*/ _react.default.createElement(_OraCommonComponents.OraLoader, {
                    className: "l-page-row u-padding-s u-padding-top-s g-gray2-bg",
                    loading: this.props.isLoadingAssistModeState,
                    id: "assist-mode-panel-loader-component",
                    parentId: "assist-mode-loaders",
                    size: "m"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-row"
                }, /*#__PURE__*/ _react.default.createElement("div", {
                    className: "l-col l-col-12"
                }, this._renderInternal())), /*#__PURE__*/ _react.default.createElement(_OraCheckoutAssistModePopup.default, {
                    descriptions: this.props.descriptions
                }), /*#__PURE__*/ _react.default.createElement(_OraCheckoutAssistModeConfirmationPopup.default, {
                    descriptions: this.props.descriptions,
                    id: "ora-checkout-assist-mode-confirmation-modal",
                    open: this.props.assistModeConfirmationModalState,
                    onReject: this.onRejectActivate.bind(this),
                    onConfirm: this.onConfirmActivate.bind(this)
                }), /*#__PURE__*/ _react.default.createElement(_OraCheckoutAssistModeConfirmationPopup.default, {
                    descriptions: this.props.descriptions,
                    id: "ora-checkout-assist-mode-leave-confirmation-modal",
                    open: this.props.assistModeConfirmationLeaveModalState,
                    onReject: this.onRejectLeave.bind(this),
                    onConfirm: this.onConfirmLeave.bind(this)
                }));
            }
        }]);
        return OraCheckoutAssistModePanel;
    }(_react.default.Component);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            getAssistMode: function getAssistMode() {
                return dispatch((0, _assistMode.getAssistModeState)());
            },
            openAssistModeModal: function openAssistModeModal() {
                return dispatch((0, _assistMode.openAssistModeModal)());
            },
            closeConfirmationModal: function closeConfirmationModal() {
                return dispatch((0, _assistMode.closeConfirmationModal)());
            },
            openConfirmationLeaveModal: function openConfirmationLeaveModal() {
                return dispatch((0, _assistMode.openConfirmationLeaveModal)());
            },
            closeConfirmationLeaveModal: function closeConfirmationLeaveModal() {
                return dispatch((0, _assistMode.closeConfirmationLeaveModal)());
            },
            setAssistEmployee: function setAssistEmployee(employee) {
                return dispatch((0, _assistMode.setAssistEmployee)(employee));
            },
            leaveAssistMode: function leaveAssistMode() {
                return dispatch((0, _assistMode.leaveAssistMode)());
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            assistModeState: (0, _selectors.getAssistModeStateData)(state),
            isLoadingAssistModeState: (0, _selectors.isLoadingAssistModeState)(state),
            assistModeConfirmationModalState: (0, _selectors.getAssistModeConfirmationModalStateData)(state),
            assistModeConfirmationLeaveModalState: (0, _selectors.getAssistModeConfirmationLeaveModalStateData)(state),
            selectedEmployee: (0, _selectors.getSelectedEmployee)(state),
            ftthAvailabilityDate: (0, _migration.getMigrationFtthAvailabilityDate)(state) || (0, _root.getMigrationFtthAvailabilityAttribute)(state) || (0, _root.getFtthAvailabilityDateFromOffers)(state) || (0, _selectors2.getMigrationFtthAvailabilityDateFromMagnum)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OraCheckoutAssistModePanel);

    _exports.default = _default;
});
//# sourceMappingURL=OraCheckoutAssistModePanel.js.map