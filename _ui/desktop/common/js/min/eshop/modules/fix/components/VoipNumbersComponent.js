define(["exports", "react", "react-redux", "../actions/voip", "../../core/components/ui/Modal", "./OraRadioButtonGroup", "../../core/components/ui/CmsDescription", "../../../utils/FormatUtils", "../selectors/voip"], function(e, r, t, l, a, s, c, n, o) {
    "use strict";

    function u(o) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(o);
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
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), a = babelHelpers.interopRequireDefault(a), s = babelHelpers.interopRequireDefault(s), c = babelHelpers.interopRequireDefault(c), n = babelHelpers.interopRequireWildcard(n);
    var i = function(e) {
            babelHelpers.inherits(o, e);
            var l = u(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = l.call(this, e)).onAccept = t.onAccept.bind(babelHelpers.assertThisInitialized(t)), t.state = {
                    selectedNumber: t.props.selectedVoipNumber
                }, t
            }
            return babelHelpers.createClass(o, [{
                key: "componentWillReceiveProps",
                value: function(e) {
                    this.state.selectedNumber !== e.selectedVoipNumber && this.setState({
                        selectedNumber: e.selectedVoipNumber
                    })
                }
            }, {
                key: "onAccept",
                value: function(e) {
                    e.preventDefault(), this.props.selectVoipNumber(this.state.selectedNumber), this.props.saveSelectedVoipNumber(this.state.selectedNumber), this.onClose()
                }
            }, {
                key: "onClose",
                value: function() {
                    this.props.stopVoipSelection(), this.props.closeModal()
                }
            }, {
                key: "onValueChange",
                value: function(e) {
                    var t = e.value;
                    this.setState({
                        selectedNumber: t
                    })
                }
            }, {
                key: "formatNumber",
                value: function(e) {
                    return n.formatNumber(e, "## ### ## ##")
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return r.default.createElement(a.default, {
                        onClose: function() {
                            return t.onClose()
                        },
                        open: this.props.showModal,
                        id: "voipNumbersModal",
                        showClose: !0,
                        escapeClose: !0,
                        clickClose: !0,
                        size: "narrow"
                    }, r.default.createElement("div", null, r.default.createElement("div", {
                        className: "row"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                    }, r.default.createElement(c.default, {
                        description: this.props.descriptions.secondTitle
                    }))), r.default.createElement("div", {
                        className: "row"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                    }, r.default.createElement(c.default, {
                        description: this.props.descriptions.yourNewNumber
                    }))), r.default.createElement("div", {
                        className: "row"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                    }, r.default.createElement("p", {
                        className: "h2 u-spacing-xl"
                    }, " ", this.formatNumber(this.state.selectedNumber), " "))), r.default.createElement("div", {
                        className: "row"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 "
                    }, r.default.createElement("fieldset", {
                        className: "opl-radiogroup opl-inputgroup opl-inputgroup--vertical g-gray2-bg u-padding-m u-padding-top-m u-padding-left-m"
                    }, this.props.voipNumbers.map(function(e) {
                        return r.default.createElement(s.default, {
                            name: "selectedNumber",
                            text: t.formatNumber(e),
                            value: e,
                            onValueChange: t.onValueChange.bind(t),
                            selectedValue: t.state.selectedNumber
                        })
                    })))), r.default.createElement("div", {
                        className: "row"
                    }, r.default.createElement("div", {
                        className: "l-col l-col-small-12 l-col-medium-12 l-col-12 u-padding-l u-padding-top-l"
                    }, r.default.createElement("button", {
                        className: "o-btn opl-btn opl-btn--primary u-w-100",
                        onClick: this.onAccept
                    }, "Dalej")))))
                }
            }]), o
        }(r.Component),
        p = (0, t.connect)(function(e) {
            return {
                showModal: (0, o.getShowVoipNumbersModal)(e),
                voipNumbers: (0, o.getVoipNumbers)(e),
                selectedVoipNumber: (0, o.getSelectedVoipNumber)(e)
            }
        }, function(t) {
            return {
                closeModal: function() {
                    return t((0, l.showVoipNumbersModal)(!1))
                },
                selectVoipNumber: function(e) {
                    return t((0, l.selectVoipNumber)(e))
                },
                saveSelectedVoipNumber: function(e) {
                    return t((0, l.saveSelectedVoipNumber)(e))
                },
                stopVoipSelection: function() {
                    return t((0, l.voipSelection)(!1))
                }
            }
        })(i);
    e.default = p
});
//# sourceMappingURL=VoipNumbersComponent.js.map