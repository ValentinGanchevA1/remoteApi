define(["exports", "react", "react-redux", "prop-types", "lodash", "./MsisdnVerificationComponent", "./MsisdnPositiveVerificationComponent", "./MsisdnNegativeVerificationComponent", "../selectors/filters", "../selectors/metaData", "../actions/filters", "../../core/constants/TransactionProcessTypeEnum", "../../magnum2/selectors", "eshop/modules/cart/actions/cart"], function(e, n, s, t, r, o, p, a, i, l, d, c, u, h) {
    "use strict";

    function f(i) {
        return function() {
            var e, s = babelHelpers.getPrototypeOf(i);
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
                var t = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(s, arguments, t)
            } else e = s.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.MsisdnVerificationComponentDescriptionsType = e.MsisdnVerificationComponentContainerBase = void 0, n = babelHelpers.interopRequireWildcard(n), r = babelHelpers.interopRequireDefault(r), o = babelHelpers.interopRequireDefault(o), p = babelHelpers.interopRequireDefault(p), a = babelHelpers.interopRequireDefault(a), c = babelHelpers.interopRequireDefault(c);
    var m = function(e) {
        babelHelpers.inherits(i, e);
        var t = f(i);

        function i(e) {
            var s;
            return babelHelpers.classCallCheck(this, i), (s = t.call(this, e)).handleMsisdnChange = s.handleMsisdnChange.bind(babelHelpers.assertThisInitialized(s)), s.validate = s.validate.bind(babelHelpers.assertThisInitialized(s)), s.reset = s.reset.bind(babelHelpers.assertThisInitialized(s)), s.resetNegative = s.resetNegative.bind(babelHelpers.assertThisInitialized(s)), s.handleKeyPress = s.handleKeyPress.bind(babelHelpers.assertThisInitialized(s)), s
        }
        return babelHelpers.createClass(i, [{
            key: "componentDidMount",
            value: function() {
                document.getElementById("searchButton") && document.getElementById("searchButton").addEventListener("click", this.reset)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.getElementById("searchButton") && document.getElementById("searchButton").removeEventListener("click", this.reset)
            }
        }, {
            key: "componentWillMount",
            value: function() {
                this.props.queryParams && (this.setState({
                    msisdn: this.props.queryParams.msisdn
                }), this.props.changeMsisdnInput(this.props.queryParams.msisdn, !0)), this.props.msisdnVerificationNeeded()
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
                if ("undefined" != this.props.msisdnInput.msisdn && this.props.msisdnInput.msisdn) {
                    var e = new RegExp(this.props.descriptions.regexpForNumberValidation),
                        s = this.props.msisdnInput.msisdn.replace(/\s/g, "");
                    e.test(s) ? (this.props.changeMsisdnInput(this.props.msisdnInput.msisdn, !0), this.props.checkMsisdnAndGetOffers(s)) : this.props.changeMsisdnInput(this.props.msisdnInput.msisdn, !1)
                } else this.props.changeMsisdnInput(this.props.msisdnInput.msisdn, !1)
            }
        }, {
            key: "reset",
            value: function() {
                this.props.processType !== c.default.ASSIGNMENT && this.props.processType !== c.default.ASSIGNMENT_DEATH && (this.props.changeMsisdnInput("", !0), this.props.clearCheckMsisdn())
            }
        }, {
            key: "resetNegative",
            value: function() {
                this.props.changeMsisdnInput("", !0), this.props.clearCheckMsisdn()
            }
        }, {
            key: "render",
            value: function() {
                var e, s, t, i = [c.default.MNP, c.default.RETENTION, c.default.MIGRATION_PRE_POST, c.default.MNP_TWOSTEP, c.default.MIGRATION_ZETAFON_POST, c.default.MIGRATION_NJU_POST_TO_POST, c.default.MIGRATION_NJU_PRE_TO_POST, c.default.ASSIGNMENT, c.default.ASSIGNMENT_DEATH, c.default.ASSIGNMENT_B2C_B2B, c.default.ASSIGNMENT_B2C_JDG, c.default.MNP_APPLICATION];
                return e = this.props.isB2B ? !this.props.isPropositionListCountSetMode && 0 < this.props.propositionListCount && -1 !== i.indexOf(this.props.processType) && (0 == this.props.selectedLoyaltyLengthValue || !!this.props.selectedLoyaltyLengthValue) : -1 !== i.indexOf(this.props.processType), s = (!this.props.selectedMobileTransaction || !this.props.selectedMobileTransaction.process) && !this.props.isMatchingFilters() || r.default.isEmpty(this.props.checkMsisdnResult), e ? n.default.createElement("div", {
                    id: "msisdn-verification-container-row",
                    className: "l-full-row  u-padding-m g-gray1-bg"
                }, n.default.createElement("div", {
                    className: "l-page-row"
                }, n.default.createElement("div", {
                    className: " l-col l-col-small-12 l-col-medium-12 l-col-12 " + (this.props.isB2B ? "u-padding-l u-padding-top-l g-white1-bg" : "u-spacing-top-l")
                }, s ? n.default.createElement(o.default, {
                    inputFieldDesc: this.props.descriptions.inputFieldDesc,
                    invalidNumberDesc: this.props.descriptions.invalidNumberDesc,
                    msisdn: this.props.msisdnInput.msisdn,
                    handleMsisdnChange: this.handleMsisdnChange,
                    valid: this.props.msisdnInput.valid,
                    handleKeyPress: this.handleKeyPress,
                    validate: this.validate,
                    isMsisdnChecking: this.props.isMsisdnChecking,
                    isCustomerSelected: this.props.isCustomerSelected,
                    showMsisdnVerificationWarning: this.props.isMsisdnVerificationRequired,
                    processType: this.props.processType
                }) : "", s || !0 !== this.props.checkMsisdnResult.isPositive ? "" : n.default.createElement(p.default, {
                    description: this.props.checkMsisdnResult.description,
                    reset: this.resetNegative
                }), s || !1 !== this.props.checkMsisdnResult.isPositive ? "" : n.default.createElement(a.default, (t = {
                    description: this.props.checkMsisdnResult.description,
                    reset: this.resetNegative,
                    msisdn: this.props.msisdnInput.msisdn,
                    cartToRemove: this.props.checkMsisdnResult.cartToRemove
                }, babelHelpers.defineProperty(t, "msisdn", this.props.checkMsisdnResult.msisdn), babelHelpers.defineProperty(t, "removeCartByOmni", this.props.removeCartByOmni), t))))) : null
            }
        }]), i
    }(n.Component);
    e.MsisdnVerificationComponentContainerBase = m;
    var y = {
        regexpForNumberValidation: t.PropTypes.string,
        description: t.PropTypes.string,
        inputFieldDesc: t.PropTypes.string,
        invalidNumberDesc: t.PropTypes.string,
        negativeVerificationDesc: t.PropTypes.string,
        positiveVerificationDesc: t.PropTypes.string,
        unknownOperatorDesc: t.PropTypes.string,
        processType: t.PropTypes.string
    };
    e.MsisdnVerificationComponentDescriptionsType = y, m.propTypes = {
        descriptions: t.PropTypes.shape(y),
        checkMsisdnResult: t.PropTypes.shape({
            isPositive: t.PropTypes.bool,
            description: t.PropTypes.string
        }),
        processType: t.PropTypes.string,
        isMsisdnChecking: t.PropTypes.bool,
        msisdnInput: t.PropTypes.shape({
            msisdn: t.PropTypes.string,
            valid: t.PropTypes.bool
        }).isRequired,
        msisdnVerificationNeeded: t.PropTypes.func,
        checkMsisdnAndGetOffers: t.PropTypes.func,
        clearCheckMsisdn: t.PropTypes.func,
        changeMsisdnInput: t.PropTypes.func
    };
    var g = function(e) {
            babelHelpers.inherits(t, e);
            var s = f(t);

            function t() {
                return babelHelpers.classCallCheck(this, t), s.apply(this, arguments)
            }
            return t
        }(m),
        M = (0, s.connect)(function(e) {
            return {
                isPropositionListCountSetMode: (0, i.getPropositionListCountSetMode)(e),
                propositionListCount: (0, i.getPropositionListCount)(e),
                processType: (0, i.getSelectedProcessTypeValue)(e),
                selectedLoyaltyLengthValue: (0, i.getSelectedLoyaltyLengthValue)(e),
                checkMsisdnResult: (0, i.getCheckMsisdnResult)(e),
                isMsisdnChecking: (0, i.getIsMsisdnChecking)(e),
                msisdnInput: (0, i.getMsisdnInput)(e),
                isMsisdnVerificationRequired: (0, l.isMsisdnVerificationRequired)(e),
                isB2B: "B2B" === (0, i.getMarketContext)(e),
                isCustomerSelected: (0, l.isCustomerSelected)(e),
                selectedMobileTransaction: (0, u.getSelectedMobileTransaction)(e)
            }
        }, function(t) {
            return {
                clearCheckMsisdn: function() {
                    return t((0, d.clearCheckMsisdn)())
                },
                checkMsisdnAndGetOffers: function(e) {
                    return t((0, d.checkMsisdnAndGetOffers)(e))
                },
                msisdnVerificationNeeded: function() {
                    return t(d.msisdnVerificationNeeded)
                },
                changeMsisdnInput: function(e, s) {
                    return t((0, d.changeMsisdnInput)(e, s))
                },
                isMatchingFilters: function() {
                    return t((0, d.isMatchingFilters)())
                },
                removeCartByOmni: function(e) {
                    return t((0, h.removeCartByOmniCode)(e))
                }
            }
        })(g);
    e.default = M
});
//# sourceMappingURL=MsisdnVerificationComponentContainer.js.map