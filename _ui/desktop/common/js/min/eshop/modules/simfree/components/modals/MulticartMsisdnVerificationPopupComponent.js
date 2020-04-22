define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "eshop/modules/configurator/components/MsisdnVerificationComponent", "eshop/modules/configurator/components/MsisdnNegativeVerificationComponent", "eshop/modules/simfree/actions/filter", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "../../../configurator/selectors/metaData"], function(e, t, n, r, s, o, a, i, l, d, c, u) {
    "use strict";

    function p(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o), a = babelHelpers.interopRequireDefault(a);
    var h = function(e) {
            babelHelpers.inherits(i, e);
            var s = p(i);

            function i(e) {
                var t;
                return babelHelpers.classCallCheck(this, i), (t = s.call(this, e)).state = {
                    msisdn: "",
                    valid: !0
                }, t.handleMsisdnChange = t.handleMsisdnChange.bind(babelHelpers.assertThisInitialized(t)), t.validate = t.validate.bind(babelHelpers.assertThisInitialized(t)), t.handleKeyPress = t.handleKeyPress.bind(babelHelpers.assertThisInitialized(t)), t.reset = t.reset.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(i, [{
                key: "componentWillMount",
                value: function() {
                    this.props.verificationNeeded()
                }
            }, {
                key: "handleMsisdnChange",
                value: function(e) {
                    this.setState({
                        msisdn: e.target.value
                    }), this.props.changeMsisdnInput(e.target.value, this.props.msisdnInput.valid)
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    "Enter" === e.key && this.validate()
                }
            }, {
                key: "validate",
                value: function() {
                    if ("undefined" != this.state.msisdn && this.state.msisdn) {
                        var e = new RegExp(this.props.descriptions.regexpForNumberValidation),
                            t = this.state.msisdn.replace(/\s/g, "");
                        e.test(t) ? (this.setState({
                            valid: !0
                        }), this.props.checkMsisdnAndGetOffersAndAddToCart(t)) : this.setState({
                            valid: !1
                        })
                    } else this.setState({
                        valid: !1
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    this.setState({
                        valid: !0
                    }), this.props.clearCheckMsisdn()
                }
            }, {
                key: "onCloseModal",
                value: function() {
                    this.props.closeModal(), this.reset()
                }
            }, {
                key: "getModalContent",
                value: function() {
                    return n.default.createElement("div", null, this.isEmpty(this.props.checkMsisdnResult) ? n.default.createElement(o.default, {
                        inputFieldDesc: this.props.descriptions.inputFieldDesc,
                        invalidNumberDesc: this.props.descriptions.invalidNumberDesc,
                        msisdn: this.props.msisdnInput.msisdn,
                        handleMsisdnChange: this.handleMsisdnChange,
                        valid: this.state.valid,
                        handleKeyPress: this.handleKeyPress,
                        validate: this.validate,
                        isMsisdnChecking: this.props.isMsisdnChecking,
                        isCustomerSelected: this.props.isCustomerSelected
                    }) : "", this.isEmpty(this.props.checkMsisdnResult) || !1 !== this.props.checkMsisdnResult.isPositive ? "" : n.default.createElement(a.default, {
                        description: this.props.checkMsisdnResult.description,
                        reset: this.reset
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement("div", {
                        id: "verificationModalWrapper"
                    }, n.default.createElement(r.default, {
                        id: "verification-modal",
                        showClose: !0,
                        open: this.props.openModal,
                        onClose: this.onCloseModal.bind(this),
                        size: "medium",
                        clickClose: !1,
                        escapeClose: !1
                    }, this.getModalContent()))
                }
            }, {
                key: "isEmpty",
                value: function(e) {
                    if (null == e) return !0;
                    if (0 < e.length) return !1;
                    if (0 === e.length) return !0;
                    if ("object" !== babelHelpers.typeof(e)) return !0;
                    for (var t in e)
                        if (hasOwnProperty.call(e, t)) return !1;
                    return !0
                }
            }]), i
        }(n.Component),
        f = (0, t.connect)(function(e) {
            return {
                checkMsisdnResult: (0, l.getCheckMsisdnResult)(e),
                openModal: (0, c.getOpenVerificationModal)(e),
                isMsisdnChecking: (0, l.getIsMsisdnChecking)(e),
                msisdnInput: (0, l.getMsisdnInput)(e),
                isCustomerSelected: (0, u.isCustomerSelected)(e)
            }
        }, function(s) {
            return {
                clearCheckMsisdn: function() {
                    return s((0, d.clearCheckMsisdn)())
                },
                checkMsisdnAndGetOffersAndAddToCart: function(e) {
                    return s((0, i.checkMsisdnAndGetOffersAndAddToCart)(e))
                },
                verificationNeeded: function() {
                    return s(i.verificationNeeded)
                },
                closeModal: function() {
                    return s(i.doCloseVerificationModal)
                },
                changeMsisdnInput: function(e, t) {
                    return s((0, d.changeMsisdnInput)(e, t))
                }
            }
        })(h);
    e.default = f
});
//# sourceMappingURL=MulticartMsisdnVerificationPopupComponent.js.map