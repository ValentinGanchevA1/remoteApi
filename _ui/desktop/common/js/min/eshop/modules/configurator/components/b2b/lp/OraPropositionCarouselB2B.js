define(["exports", "react", "react-redux", "eshop/modules/auth/selectors/authorization", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/metaData", "eshop/components/OraCommonComponents", "./MobileCarouselB2B", "eshop/modules/cart/selectors", "../../../../auth/actions/authorization", "../../../selectors/filters", "eshop/utils/OnlineUtils", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent"], function(e, o, t, s, n, i, a, l, c, u, f, d, p, h, g, r) {
    "use strict";

    function y(o) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), f = babelHelpers.interopRequireDefault(f), g = babelHelpers.interopRequireDefault(g), r = babelHelpers.interopRequireDefault(r);
    var m = 300,
        C = function(e) {
            babelHelpers.inherits(r, e);
            var t = y(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentDidMount",
                value: function() {
                    this.props.setSalesChannel(this.props.channels.sales);
                    var e = this.getMyHeight();
                    e < m && (e = m), this.setState({
                        minHeight: e
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this.getMyHeight();
                    this.props.isCarouselReady && e !== this.state.minHeight && (e < m && (e = m), this.state.minHeight !== e && this.setState({
                        minHeight: e
                    }))
                }
            }, {
                key: "getMyHeight",
                value: function() {
                    var e = document.getElementById("offerB2BcarouselContainer-loader");
                    if (!e) return 0;
                    var t = $(e).outerHeight();
                    return t < m && (t = m), t
                }
            }, {
                key: "isLoyaltyLengthSelected",
                value: function() {
                    return this.props.selectedLoyaltyLengthValue || 0 === this.props.selectedLoyaltyLengthValue
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return !0 === this.props.isPropositionListCountSetMode || !g.default.isAssignment(this.props.processType) && !this.isLoyaltyLengthSelected() || 0 === this.props.propositionListCount ? null : o.default.createElement("div", {
                        className: "u-position-relative"
                    }, o.default.createElement(u.OraLoader, {
                        loading: this.props.offersLoading || !this.props.isCarouselReady,
                        key: "loader",
                        id: "offerB2BcarouselContainer-loader",
                        parentId: "offerb2b-filter-loader",
                        useHeightFixing: !1,
                        childrenHeight: this.state.minHeight,
                        className: "u-position-relative"
                    }, o.default.createElement("div", {
                        id: "offerB2BcarouselContainer",
                        style: {
                            minHeight: this.props.offersLoading ? this.state.minHeight : m
                        },
                        className: "g-gray1-bg u-position-relative",
                        ref: function(e) {
                            return t.ref = e
                        }
                    }, o.default.createElement(f.default, this.props))))
                }
            }]), r
        }(o.default.PureComponent),
        L = (0, t.connect)(function(e) {
            return {
                isPropositionListCountSetMode: (0, i.getPropositionListCountSetMode)(e),
                propositionListCount: (0, i.getPropositionListCount)(e),
                data: {
                    processType: (0, i.getProcessTypeFiltersForSelect)(e),
                    loyaltyLength: (0, i.getLoyaltyLengthFiltersForSelect)(e)
                },
                offers: (t = e, (r = (0, n.getOffersDataInContext)(t)) && r.offers),
                selectedOfferId: (0, n.getSelectedOfferId)(e),
                selectedBaseRatePlanId: (0, n.getSelectedBaseRatePlanId)(e),
                selectedLoyaltyLengthValue: (0, i.getSelectedLoyaltyLengthValue)(e),
                verifiedMsisdn: (0, i.getVerifiedMsisdnB2B)(e),
                verifyMsisdnLoading: (0, c.getVerifyMsisdnLoading)(e),
                offersLoading: (0, c.getOffersLoading)(e),
                isCarouselReady: (0, c.getCarouselReady)(e),
                selectedOfferType: (0, i.getSelectedOfferType)(e),
                contractRole: (0, n.getContractRole)(e)[0],
                getContractRoleInProgress: (0, n.getContractRoleInProgress)(e),
                isB2B: "B2B" === (0, i.getMarketContext)(e),
                showNet: (0, d.getPriceIsNet)(e),
                isLogged: (0, s.isLogged)(e),
                addTerminalButtonEnabled: !!(0, n.getSelectedBaseRatePlanId)(e),
                processType: (0, h.getSelectedProcessTypeValue)(e),
                disableAddToCart: (0, i.getDisableAddToCart)(e),
                marketContextPrefixUrl: (0, c.getMarketContextPrefixUrl)(e)
            };
            var t, r
        }, function(r) {
            return {
                carouselReady: function() {
                    return r((0, l.carouselReady)())
                },
                carouselPreparing: function() {
                    return r((0, l.carouselPreparing)())
                },
                selectOffer: function(e) {
                    return r((0, l.preSelectOffer)(e, 1, null))
                },
                verifyMsisdn: function(e, t) {
                    return r((0, a.checkMsisdnAndGetOffersB2B)(e, t))
                },
                clearCheckMsisdn: function(e) {
                    return r((0, a.clearCheckMsisdnB2B)(e))
                },
                setSalesChannel: function(e) {
                    return r((0, p.setSalesChannel)(e))
                },
                selectOfferNoPhone: function(e) {
                    return r((0, l.selectOffer)(e))
                },
                pickDevice: function(e, t) {
                    return r((0, l.pickDevice)(e, t))
                }
            }
        })(C);
    e.default = L
});
//# sourceMappingURL=OraPropositionCarouselB2B.js.map