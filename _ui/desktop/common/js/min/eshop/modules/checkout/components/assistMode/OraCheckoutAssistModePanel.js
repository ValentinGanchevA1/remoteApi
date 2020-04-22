define(["exports", "react", "react-redux", "./OraCheckoutAssistModePopup", "./OraCheckoutAssistModeConfirmationPopup", "../../selectors", "eshop/modules/checkout/actions/assistMode", "eshop/components/OraCommonComponents", "../../../fix/selectors/root", "../../../magnum2/selectors/migration", "../../../magnum2/selectors", "../consents/AssistModeEnum"], function(e, l, t, s, o, a, n, i, r, d, c, u) {
    "use strict";

    function p(l) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(l);
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), s = babelHelpers.interopRequireDefault(s), o = babelHelpers.interopRequireDefault(o), u = babelHelpers.interopRequireDefault(u);
    var m = function(e) {
            babelHelpers.inherits(a, e);
            var t = p(a);

            function a(e) {
                return babelHelpers.classCallCheck(this, a), t.call(this, e)
            }
            return babelHelpers.createClass(a, [{
                key: "componentDidMount",
                value: function() {
                    this.props.getAssistMode(), OPL.UI.loadModules(document.getElementById("assist-mode-panel-loader-component"), {
                        path: "core/modules/loader",
                        options: '{"fadeDuration":120}'
                    })
                }
            }, {
                key: "openAssistModeLeaveConfirmationPopup",
                value: function() {
                    this.props.openConfirmationLeaveModal()
                }
            }, {
                key: "refresh",
                value: function() {
                    this.props.getAssistMode()
                }
            }, {
                key: "openAssistModePopup",
                value: function() {
                    this.props.openAssistModeModal()
                }
            }, {
                key: "onRejectActivate",
                value: function() {
                    this.props.closeConfirmationModal(), setTimeout(this.props.openAssistModeModal.bind(this), 400)
                }
            }, {
                key: "onConfirmActivate",
                value: function() {
                    this.props.setAssistEmployee({
                        sisId: this.props.selectedEmployee
                    })
                }
            }, {
                key: "onRejectLeave",
                value: function() {
                    this.props.closeConfirmationLeaveModal()
                }
            }, {
                key: "onConfirmLeave",
                value: function() {
                    this.props.leaveAssistMode()
                }
            }, {
                key: "_renderInternal",
                value: function() {
                    var e = this.props.assistModeState.state,
                        t = this.props.assistModeState.assistedEmployee || {},
                        a = this.props.assistModeState.loggedEmployee || {};
                    return this.props.ftthAvailabilityDate && e === u.default.INACTIVE ? this._renderForUnavailableAssistState() : e === u.default.ACTIVE ? this._renderForActiveState(t) : e === u.default.INACTIVE ? this._renderForInactiveState(a) : e === u.default.ERROR ? this._renderForErrorState() : this._renderForUnknownState()
                }
            }, {
                key: "_renderForActiveState",
                value: function(e) {
                    return l.default.createElement("div", {
                        className: "l-table-row__wrapper no-table-row-small"
                    }, l.default.createElement("div", {
                        className: "l-row l-table-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold"
                    }, l.default.createElement("span", null, this.props.descriptions.mode, " "), l.default.createElement("span", {
                        className: "g-green3-c"
                    }, this.props.descriptions.stateActiveLabel)), l.default.createElement("div", {
                        className: "l-col l-col-3 l-col-small-12 u-vertical-middle u-font-bold"
                    }, l.default.createElement("span", null, this.props.descriptions.asName, " "), l.default.createElement("span", {
                        className: "g-green3-c"
                    }, e.firstName + " " + e.lastName + " (" + e.loginOtsa + ")")), l.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold"
                    }, l.default.createElement("span", null, this.props.descriptions.bscs, " "), l.default.createElement("span", {
                        className: "g-green3-c"
                    }, e.fullBscs || "")), l.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold u-large-padding-left-l u-medium-padding-left-l u-large-no-padding-r u-medium-no-padding-r"
                    }, l.default.createElement("div", null, this.props.descriptions.channel, " ", l.default.createElement("span", {
                        className: "g-green3-c"
                    }, e.salesChannelName || "")), l.default.createElement("div", {
                        className: "u-large-padding-top-s u-medium-padding-top-s"
                    }, this.props.descriptions.sisChannel || "Kanał SIS:", " ", l.default.createElement("span", {
                        className: "g-green3-c"
                    }, e.sisChannelDescription || ""))), l.default.createElement("div", {
                        className: "l-col l-col-3 l-col-small-12 u-vertical-middle"
                    }, l.default.createElement(i.OraButton, {
                        className: "u-right",
                        onClick: this.openAssistModeLeaveConfirmationPopup.bind(this),
                        type: "primary"
                    }, this.props.descriptions.leaveAssistModeButtonLabel))))
                }
            }, {
                key: "_renderForInactiveState",
                value: function(e) {
                    return l.default.createElement("div", {
                        className: "l-table-row__wrapper no-table-row-small"
                    }, l.default.createElement("div", {
                        className: "l-row l-table-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold"
                    }, l.default.createElement("span", null, this.props.descriptions.mode, " "), l.default.createElement("span", {
                        className: "g-redf-c"
                    }, this.props.descriptions.stateInactiveLabel)), l.default.createElement("div", {
                        className: "l-col l-col-3 l-col-small-12 u-vertical-middle u-font-bold"
                    }, l.default.createElement("span", null, this.props.descriptions.assistModeInactiveEmployeeDescription)), l.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold"
                    }, l.default.createElement("span", null, this.props.descriptions.bscs, " "), l.default.createElement("span", {
                        className: "g-green3-c"
                    }, e.fullBscs || "")), l.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-vertical-middle u-font-bold u-large-padding-left-l u-medium-padding-left-l u-large-no-padding-r u-medium-no-padding-r"
                    }, l.default.createElement("div", null, this.props.descriptions.channel, " ", l.default.createElement("span", {
                        className: "g-green3-c"
                    }, e.salesChannelName || "")), l.default.createElement("div", {
                        className: "u-large-padding-top-s u-medium-padding-top-s"
                    }, this.props.descriptions.sisChannel || "Kanał SIS:", " ", l.default.createElement("span", {
                        className: "g-green3-c"
                    }, e.sisChannelDescription || ""))), l.default.createElement("div", {
                        className: "l-col l-col-3 l-col-small-12 u-vertical-middle"
                    }, l.default.createElement(i.OraButton, {
                        className: "u-right",
                        onClick: this.openAssistModePopup.bind(this),
                        type: "primary"
                    }, this.props.descriptions.enterAssistModeButtonLabel))))
                }
            }, {
                key: "_renderForUnknownState",
                value: function() {
                    return l.default.createElement("div", {
                        className: "l-table-row__wrapper"
                    }, l.default.createElement("div", {
                        className: "l-row l-table-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-12 l-col-small-12 u-vertical-middle u-text-center u-font-bold"
                    }, this.props.descriptions.unknownStateLabel)))
                }
            }, {
                key: "_renderForErrorState",
                value: function() {
                    return l.default.createElement("div", {
                        className: "l-table-row__wrapper"
                    }, l.default.createElement("div", {
                        className: "l-row l-table-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-10 l-col-small-12 u-vertical-middle g-redf-c u-font-bold"
                    }, this.props.errorDesc || this.props.descriptions.defaultErrorText), l.default.createElement("div", {
                        className: "l-col l-col-2 l-col-small-12 u-vertical-middle"
                    }, l.default.createElement(i.OraButton, {
                        className: "u-right",
                        onClick: this.refresh.bind(this),
                        type: "primary"
                    }, this.props.descriptions.btnRefreshLabel))))
                }
            }, {
                key: "_renderForUnavailableAssistState",
                value: function() {
                    return l.default.createElement("div", {
                        className: "l-table-row__wrapper"
                    }, l.default.createElement("div", {
                        className: "l-row l-table-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-12 l-col-small-12 u-vertical-middle g-redf-c u-font-bold"
                    }, this.props.descriptions.unavailableAssistModeText)))
                }
            }, {
                key: "render",
                value: function() {
                    return l.default.createElement(i.OraLoader, {
                        className: "l-page-row u-padding-s u-padding-top-s g-gray2-bg",
                        loading: this.props.isLoadingAssistModeState,
                        id: "assist-mode-panel-loader-component",
                        parentId: "assist-mode-loaders",
                        size: "m"
                    }, l.default.createElement("div", {
                        className: "l-row"
                    }, l.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this._renderInternal())), l.default.createElement(s.default, {
                        descriptions: this.props.descriptions
                    }), l.default.createElement(o.default, {
                        descriptions: this.props.descriptions,
                        id: "ora-checkout-assist-mode-confirmation-modal",
                        open: this.props.assistModeConfirmationModalState,
                        onReject: this.onRejectActivate.bind(this),
                        onConfirm: this.onConfirmActivate.bind(this)
                    }), l.default.createElement(o.default, {
                        descriptions: this.props.descriptions,
                        id: "ora-checkout-assist-mode-leave-confirmation-modal",
                        open: this.props.assistModeConfirmationLeaveModalState,
                        onReject: this.onRejectLeave.bind(this),
                        onConfirm: this.onConfirmLeave.bind(this)
                    }))
                }
            }]), a
        }(l.default.Component),
        f = (0, t.connect)(function(e) {
            return {
                assistModeState: (0, a.getAssistModeStateData)(e),
                isLoadingAssistModeState: (0, a.isLoadingAssistModeState)(e),
                assistModeConfirmationModalState: (0, a.getAssistModeConfirmationModalStateData)(e),
                assistModeConfirmationLeaveModalState: (0, a.getAssistModeConfirmationLeaveModalStateData)(e),
                selectedEmployee: (0, a.getSelectedEmployee)(e),
                ftthAvailabilityDate: (0, d.getMigrationFtthAvailabilityDate)(e) || (0, r.getMigrationFtthAvailabilityAttribute)(e) || (0, r.getFtthAvailabilityDateFromOffers)(e) || (0, c.getMigrationFtthAvailabilityDateFromMagnum)(e)
            }
        }, function(t) {
            return {
                getAssistMode: function() {
                    return t((0, n.getAssistModeState)())
                },
                openAssistModeModal: function() {
                    return t((0, n.openAssistModeModal)())
                },
                closeConfirmationModal: function() {
                    return t((0, n.closeConfirmationModal)())
                },
                openConfirmationLeaveModal: function() {
                    return t((0, n.openConfirmationLeaveModal)())
                },
                closeConfirmationLeaveModal: function() {
                    return t((0, n.closeConfirmationLeaveModal)())
                },
                setAssistEmployee: function(e) {
                    return t((0, n.setAssistEmployee)(e))
                },
                leaveAssistMode: function() {
                    return t((0, n.leaveAssistMode)())
                }
            }
        })(m);
    e.default = f
});
//# sourceMappingURL=OraCheckoutAssistModePanel.js.map