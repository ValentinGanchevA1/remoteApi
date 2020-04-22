define(["exports", "react", "react-redux", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/components/OfferFilterComponents", "eshop/modules/configurator/components/OfferFilterComponentsSwitcherView", "eshop/modules/configurator/selectors/filters", "eshop/modules/simfree/actions/app", "eshop/utils/OnlineUtils", "../../checkout/actions/data", "../../simfree/selectors", "../selectors/offers", "prop-types", "../../auth/selectors/authorization", "../../core/constants/OfferTypeEnum", "../selectors/filters"], function(e, o, t, s, r, n, l, i, c, a, p, u, f, h, d, y) {
    "use strict";

    function L(o) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), r = babelHelpers.interopRequireDefault(r), n = babelHelpers.interopRequireDefault(n), c = babelHelpers.interopRequireDefault(c), f = babelHelpers.interopRequireDefault(f), d = babelHelpers.interopRequireDefault(d);
    var g = function(e) {
            babelHelpers.inherits(s, e);
            var t = L(s);

            function s(e) {
                return babelHelpers.classCallCheck(this, s), t.call(this, e)
            }
            return babelHelpers.createClass(s, [{
                key: "componentWillMount",
                value: function() {
                    this.selectProcessType = this.selectProcessType.bind(this), this.selectLoyaltyLength = this.selectLoyaltyLength.bind(this), this.selectSwitchButton = this.selectSwitchButton.bind(this), this.props.offerType && this.props.setOfferType(this.props.offerType)
                }
            }, {
                key: "offerType",
                value: function() {
                    return this.props.offerType || this.props.selectedOfferType
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.props.subscribeCustomerSelected()
                }
            }, {
                key: "selectProcessType",
                value: function(e) {
                    this.props.selectProcessType(e.value)
                }
            }, {
                key: "selectLoyaltyLength",
                value: function(e) {
                    this.props.selectLoyaltyLength(parseInt(e.value))
                }
            }, {
                key: "selectSwitchButton",
                value: function(e) {
                    e && c.default.redirectToAnotherPage(e)
                }
            }, {
                key: "convertSwitchConf",
                value: function(e) {
                    return e && e.map(function(e) {
                        return e.selected = e.active, e
                    })
                }
            }, {
                key: "getClientContextConf",
                value: function() {
                    return b(this.props.descriptions ? this.props.descriptions : {
                        clientContextLabel: "label",
                        clientContextTooltip: "tooltip"
                    }, this.props.channels.sales)
                }
            }, {
                key: "disabledProcesses",
                value: function() {
                    if (this.props.stayLoveRetentionMSISDN && this.props.selectedOfferType === d.default.VOICE_LDF) {
                        var t = [];
                        return this.props.processTypeData.forEach(function(e) {
                            return "RETENTION" !== e.value && t.push(e)
                        }), t
                    }
                    return null
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.isPropositionListCountSetMode || 0 === this.props.propositionListCount ? null : "SWITCH" === this.props.switchType ? o.default.createElement(n.default, {
                        offerType: this.offerType(),
                        processTypeData: this.props.processTypeData,
                        selectedProcessValue: this.props.selectedProcessValue,
                        selectProcessCallback: this.selectProcessType.bind(this),
                        disabledProcesses: this.disabledProcesses(),
                        loyaltyLengthData: this.props.loyaltyLengthData,
                        selectedLoyaltyLengthValue: this.props.selectedLoyaltyLengthValue,
                        selectLoyaltyLengthCallback: this.selectLoyaltyLength.bind(this),
                        clientContextCheckboxConfig: this.getClientContextConf(),
                        softBundleGroup: this.props.softBundleGroup,
                        contractRole: this.props.contractRole,
                        hasLove: this.props.hasLove,
                        hasODF: this.props.hasODF,
                        showSwitch: this.props.showSwitch,
                        onClickSwitch: this.selectSwitchButton,
                        switchConf: this.convertSwitchConf(this.props.switchConf),
                        descriptions: this.props.descriptions,
                        channels: this.props.channels,
                        switchType: "SWITCH"
                    }) : o.default.createElement(r.default, {
                        processTypeData: this.props.processTypeData,
                        selectedProcessValue: this.props.selectedProcessValue,
                        selectProcessCallback: this.selectProcessType.bind(this),
                        loyaltyLengthData: this.props.loyaltyLengthData,
                        selectedLoyaltyLengthValue: this.props.selectedLoyaltyLengthValue,
                        selectLoyaltyLengthCallback: this.selectLoyaltyLength.bind(this),
                        clientContextCheckboxConfig: this.getClientContextConf(),
                        showSwitch: this.props.showSwitch,
                        onClickSwitch: this.selectSwitchButton,
                        switchConf: this.convertSwitchConf(this.props.switchConf),
                        headerText: this.props.descriptions && this.props.descriptions.headerDescription || "",
                        channels: this.props.channels,
                        switchType: "TAB"
                    })
                }
            }]), s
        }(o.Component),
        b = function(e, t) {
            var s = 0 < arguments.length && void 0 !== e ? e : {},
                o = 1 < arguments.length ? t : void 0;
            return {
                label: s.clientContextLabel,
                tooltip: s.clientContextTooltip,
                channel: o
            }
        };
    g.propTypes = {
        switchType: f.default.string,
        softBundleGroup: f.default.string,
        contractRole: f.default.string,
        hasLove: f.default.bool,
        hasODF: f.default.bool,
        descriptions: f.default.objectOf(f.default.string),
        processTypeData: f.default.arrayOf(f.default.shape({
            value: f.default.string,
            description: f.default.string
        })),
        channels: f.default.shape({
            sales: f.default.string
        }),
        loyaltyLengthData: f.default.arrayOf(f.default.shape({
            value: f.default.oneOfType([f.default.string, f.default.number]),
            description: f.default.string
        })),
        offerType: f.default.string,
        selectedOfferType: f.default.string,
        subscribeCustomerSelected: f.default.func,
        selectProcessType: f.default.func,
        selectLoyaltyLength: f.default.func,
        setOfferType: f.default.func,
        stayLoveRetentionMSISDN: f.default.string,
        switchConf: f.default.object,
        showSwitch: f.default.bool,
        selectedLoyaltyLengthValue: f.default.number,
        selectedProcessValue: f.default.string,
        isPropositionListCountSetMode: f.default.bool,
        propositionListCount: f.default.number
    };
    var C = (0, t.connect)(function(e) {
        return {
            isPropositionListCountSetMode: (0, l.getPropositionListCountSetMode)(e),
            propositionListCount: (0, l.getPropositionListCount)(e),
            selectedProcessValue: (0, l.getSelectedProcessTypeValue)(e),
            processTypeData: (0, l.getProcessTypeFiltersForSelect)(e),
            selectedLoyaltyLengthValue: (0, l.getSelectedLoyaltyLengthValue)(e),
            loyaltyLengthData: (0, y.getSortedLoyaltyLengthFiltersWithIndefinitePeriodForSelect)(e),
            loyaltyLengthDataUnsorted: (0, y.getLoyaltyLengthFiltersForSelect)(e),
            selectedOfferType: (0, l.getSelectedOfferType)(e),
            stayLoveRetentionMSISDN: (0, h.getStayLoveRetentionMSISDN)(e),
            softBundleGroup: (0, p.getSelectedSoftBundleGroup)(e),
            contractRole: (0, u.getContractRole)(e)[0],
            hasLove: (0, h.hasLove)(e),
            hasODF: (0, h.hasODF)(e)
        }
    }, function(t) {
        return {
            selectProcessType: function(e) {
                return t((0, s.selectProcessType)(e))
            },
            selectLoyaltyLength: function(e) {
                return t((0, s.selectLoyaltyLength)(e))
            },
            fetchOfferFilters: function() {
                return t((0, s.fetchOfferFilters)())
            },
            setOfferType: function(e) {
                return t((0, i.setOfferType)(e))
            },
            subscribeCustomerSelected: function() {
                return t((0, a.subscribeCustomerSelected)())
            }
        }
    })(g);
    e.default = C
});
//# sourceMappingURL=OfferFilterContainer.js.map