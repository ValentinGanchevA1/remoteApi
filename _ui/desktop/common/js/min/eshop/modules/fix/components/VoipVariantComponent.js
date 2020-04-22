define(["exports", "react", "react-redux", "../actions/voip", "../../core/components/ui/Modal", "./OraRadioButtonGroup", "../../core/components/ui/CmsDescription", "../../../utils/FormatUtils", "../selectors/voip", "../enum/VoipVariant"], function(e, t, l, a, i, o, r, n, s, u) {
    "use strict";

    function c(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), i = babelHelpers.interopRequireDefault(i), o = babelHelpers.interopRequireDefault(o), r = babelHelpers.interopRequireDefault(r), n = babelHelpers.interopRequireWildcard(n), u = babelHelpers.interopRequireDefault(u);
    var p = function(e) {
            babelHelpers.inherits(a, e);
            var l = c(a);

            function a(e) {
                var t;
                return babelHelpers.classCallCheck(this, a), (t = l.call(this, e)).onAccept = t.onAccept.bind(babelHelpers.assertThisInitialized(t)), t.state = {
                    voipVariant: void 0,
                    hideModal: !1
                }, t
            }
            return babelHelpers.createClass(a, [{
                key: "onAccept",
                value: function(e) {
                    e.preventDefault(), this.props.selectVoipVariant(this.state.voipVariant), this.state.voipVariant === u.default.NP_INT && (this.props.selectVoipNumber(this.props.designationNumbers[0]), this.props.saveSelectedVoipNumber(this.props.designationNumbers[0])), this.onClose()
                }
            }, {
                key: "onClose",
                value: function() {
                    var e = this;
                    this.state.voipVariant !== u.default.NEW_VOIP && this.props.stopVoipSelection(), this.setState({
                        hideModal: !0
                    }), setTimeout(function() {
                        e.props.closeModal(), e.setState({
                            voipVariant: void 0,
                            hideModal: !1
                        })
                    }, 400)
                }
            }, {
                key: "onValueChange",
                value: function(e) {
                    var t = e.value;
                    this.setState({
                        voipVariant: t
                    })
                }
            }, {
                key: "formatNumber",
                value: function(e) {
                    return n.formatNumber(e, "## ### ## ##")
                }
            }, {
                key: "getConnectNumber",
                value: function(e) {
                    return this.props.descriptions.connectNumber.replace("XXXXXXXXX", this.formatNumber(e))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return t.default.createElement(i.default, {
                        onClose: function() {
                            return e.onClose()
                        },
                        open: this.props.showModal && !this.state.hideModal,
                        id: "voipVariantsModal",
                        showClose: !0,
                        escapeClose: !0,
                        clickClose: !0,
                        size: "narrow"
                    }, t.default.createElement("div", {
                        className: "row"
                    }, t.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                    }, t.default.createElement(r.default, {
                        description: this.props.descriptions.firstTitle
                    }))), t.default.createElement("div", {
                        className: "row"
                    }, t.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                    }, t.default.createElement("fieldset", {
                        className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical u-padding-m u-padding-top-m u-padding-left-m"
                    }, t.default.createElement(o.default, {
                        name: "option",
                        text: this.props.descriptions.newNumber,
                        value: u.default.NEW_VOIP,
                        onValueChange: this.onValueChange.bind(this),
                        selectedValue: this.state.voipVariant
                    }), t.default.createElement(o.default, {
                        name: "option",
                        text: this.getConnectNumber(this.props.designationNumbers[0]),
                        value: u.default.NP_INT,
                        onValueChange: this.onValueChange.bind(this),
                        selectedValue: this.state.voipVariant
                    })))), t.default.createElement("div", {
                        className: "row"
                    }, t.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                    }, t.default.createElement(r.default, {
                        description: this.props.descriptions.descriptionText1
                    }))), this.state.voipVariant === u.default.NP_INT && t.default.createElement("div", {
                        className: "row"
                    }, t.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-m"
                    }, t.default.createElement(r.default, {
                        description: this.props.descriptions.descriptionText2
                    }))), t.default.createElement("div", {
                        className: "row"
                    }, t.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-top-l u-padding-l"
                    }, t.default.createElement("button", {
                        className: "o-btn opl-btn opl-btn--primary u-w-100",
                        onClick: this.onAccept,
                        disabled: !this.state.voipVariant
                    }, "Dalej"))))
                }
            }]), a
        }(t.Component),
        d = (0, l.connect)(function(e) {
            return {
                showModal: (0, s.getShowVoipVariantModal)(e),
                designationNumbers: (0, s.getDesignationNumbers)(e)
            }
        }, function(t) {
            return {
                closeModal: function() {
                    return t((0, a.showVoipVariantModal)(!1))
                },
                selectVoipVariant: function(e) {
                    return t((0, a.selectVoipVariant)(e))
                },
                stopVoipSelection: function() {
                    return t((0, a.voipSelection)(!1))
                },
                selectVoipNumber: function(e) {
                    return t((0, a.selectVoipNumber)(e))
                },
                saveSelectedVoipNumber: function(e) {
                    return t((0, a.saveSelectedVoipNumber)(e))
                }
            }
        })(p);
    e.default = d
});
//# sourceMappingURL=VoipVariantComponent.js.map