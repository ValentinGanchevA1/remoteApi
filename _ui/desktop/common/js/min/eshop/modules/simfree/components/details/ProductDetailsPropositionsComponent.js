define(["exports", "react", "prop-types", "react-redux", "../../../../modules/configurator/actions/offers", "eshop/components/OraCommonComponents", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/selectors/metaData", "eshop/modules/configurator/selectors/filters", "eshop/utils/OnlineUtils", "eshop/modules/simfree/selectors", "eshop/modules/simfree/components/PropositionForDeviceMobileView", "eshop/modules/simfree/components/PropositionForDeviceTabletDesktopView", "eshop/modules/core/components/ui/OraSwitcher", "../../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "../../../core/enum/MarketSegment", "../../../core/components/ui/OraHtmlText"], function(e, s, t, r, o, a, l, n, i, p, u, c, d, f, m, h, b, g) {
    "use strict";

    function y(l) {
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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), t = babelHelpers.interopRequireDefault(t), p = babelHelpers.interopRequireDefault(p), c = babelHelpers.interopRequireDefault(c), d = babelHelpers.interopRequireDefault(d), f = babelHelpers.interopRequireDefault(f), m = babelHelpers.interopRequireDefault(m), b = babelHelpers.interopRequireDefault(b), g = babelHelpers.interopRequireDefault(g);
    var v = function(e) {
        babelHelpers.inherits(r, e);
        var t = y(r);

        function r(e) {
            return babelHelpers.classCallCheck(this, r), t.call(this, e)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                if (-1 === [m.default.VOICE, m.default.DATA, m.default.VOICE_LDF, m.default.DATA_LDF].indexOf(this.props.selectedOfferType)) return null;
                var e, t = Object.assign({}, this.props);
                return this.props.propositionsInContext && (e = this.props.propositionsInContext.offers), t.propositions = e, s.default.createElement("div", {
                    className: "l-col l-col-12  g-gray1-bg u-large-no-bg u-spacing-l-xl u-medium-padding-left-l u-medium-padding-right-l u-no-padding-top u-no-margin-top"
                }, s.default.createElement("div", {
                    className: "g-gray1-bg u-medium-no-bg g-small-no-bg u-padding-all-l u-small-padding-left u-small-padding-right u-medium-no-padding-left u-medium-no-padding-right"
                }, s.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, s.default.createElement(H, babelHelpers.extends({
                    key: this.props.selectedProcess,
                    selectedOfferId: this.props.selectedOfferId
                }, t, {
                    id: "propositionLoader"
                })))))
            }
        }]), r
    }(s.Component);
    v.propTypes = {
        activeFilter: t.default.object,
        propositions: t.default.oneOfType([t.default.string, t.default.object]),
        detailsLabel: t.default.string.isRequired
    };
    var H = function(e) {
        babelHelpers.inherits(l, e);
        var r = y(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), t = r.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "getInfoDescription", function(e) {
                return t.props.descriptions[e] ? t.props.descriptions[e] : {
                    "discount.text": "z rabatami"
                } [e]
            }), t.state = {
                minHeight: 300
            }, t
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidMount",
            value: function() {}
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.getInfoDescription("discount.text"),
                    r = this.props,
                    l = r.propositions,
                    o = babelHelpers.objectWithoutProperties(r, ["propositions"]);
                return s.default.createElement(a.OraLoader, {
                    loading: this.props.offersLoading,
                    key: "loader",
                    id: "offerCarouselContainer-loader",
                    parentId: "offer-filter-loader",
                    useHeightFixing: !1,
                    childrenHeight: this.state.minHeight,
                    className: "u-position-relative"
                }, s.default.createElement("div", {
                    id: "offerCarouselContainer",
                    style: {
                        minHeight: this.props.offersLoading ? this.state.minHeight : 300
                    },
                    className: "g-gray1-bg u-position-relative",
                    ref: function(e) {
                        return t.ref = e
                    }
                }, s.default.createElement("ul", {
                    className: "opl-switcher-list"
                }, s.default.createElement("li", {
                    className: "opl-switcher-list__item u-small-hide  "
                }, s.default.createElement("div", {
                    className: "l-row u-no-margin"
                }, !this.props.addTerminalToOfferBundleNo && s.default.createElement("div", {
                    className: "l-col l-col-1 "
                }), s.default.createElement("div", {
                    className: "l-col l-col-4  u-display_table-cell u-small-block u-vertical-bottom"
                }, s.default.createElement("p", null, "Abonament")), s.default.createElement("div", {
                    className: "l-col " + (this.props.addTerminalToOfferBundleNo ? " l-col-5" : "l-col-4") + "  u-display_table-cell u-small-block u-vertical-bottom u-text-left"
                }, s.default.createElement("p", null, this.props.isB2B ? "Korzyści" : "Internet")), s.default.createElement("div", {
                    className: "l-col l-col-small-12 l-col-medium-3 l-col-3  u-display_table-cell u-small-block u-vertical-top u-text-right"
                }, s.default.createElement("p", null, "Opłata abonamentowa ", !this.props.isB2B && this.props.descriptions && s.default.createElement(g.default, null, e))))), this.props.addTerminalToOfferBundleNo ? l && l.filter(function(e) {
                    return e.id === t.props.selectedOfferId
                }).map(function(e, t) {
                    return s.default.createElement(O, babelHelpers.extends({
                        key: e.id + "_" + t,
                        proposition: e
                    }, o))
                }) : l && l.map(function(e, t) {
                    return s.default.createElement(O, babelHelpers.extends({
                        key: e.id + "_" + t,
                        proposition: e
                    }, o))
                }))))
            }
        }]), l
    }(s.Component);
    H.propTypes = {
        activeFilter: t.default.object,
        propositions: t.default.arrayOf(t.default.object),
        detailsLabel: t.default.string.isRequired
    };
    var O = function(e) {
        babelHelpers.inherits(r, e);
        var t = y(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "monthlyPaymentsWithBonuses",
            value: function() {
                return p.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole) && p.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole).totalPayments ? p.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole).totalPayments.monthlyPayments : {}
            }
        }, {
            key: "render",
            value: function() {
                var l = this,
                    o = this.props.proposition,
                    e = o.id === this.props.selectedOfferId && !this.props.addTerminalToOfferBundleNo;
                return s.default.createElement(f.default, {
                    key: o.id + "_switcher",
                    onChangeHandler: function(e) {
                        var t = $(e.target).closest(".li"),
                            r = $(t).index();
                        l.props.selectOfferNoPhone(o.id, r)
                    },
                    isSelected: e,
                    className: " u-margin-l u-no-padding-r  u-border",
                    switcherClassName: "  opl-switcher-list__item u-cursor-pointer u-padding-all-l"
                }, s.default.createElement("div", {
                    className: "u-large-hide u-medium-hide"
                }, s.default.createElement(c.default, babelHelpers.extends({
                    offer: o
                }, this.props, {
                    isSelected: e,
                    index: this.props.index
                }))), s.default.createElement("div", {
                    className: "u-small-hide"
                }, s.default.createElement(d.default, babelHelpers.extends({
                    offer: o
                }, this.props, {
                    isSelected: e,
                    index: this.props.index
                }))), e && p.default.updateOgTag("product:retailer_part_no", o.id + "^" + this.props.selectedVariant))
            }
        }]), r
    }(s.Component);
    O.propTypes = {
        proposition: t.default.object.isRequired,
        detailsLabel: t.default.string.isRequired
    };
    var C = (0, r.connect)(function(e) {
        return {
            selectedOfferType: (0, i.getSelectedOfferType)(e),
            selectedOfferId: (0, l.getSelectedOfferId)(e),
            selectedRateplanBaseProductId: (0, l.getSelectedBaseRatePlanId)(e),
            propositionsInContext: (0, l.getOffersDataInContext)(e),
            offersLoading: (0, n.getOffersLoading)(e),
            clientContext: (0, i.getClientContext)(e),
            loyaltyLength: (0, i.getSelectedLoyaltyLengthValue)(e),
            selectedProcess: (0, i.getSelectedProcessTypeValue)(e),
            addTerminalToOfferBundleNo: (0, h.getAddTerminalToOfferBundleNo)(e),
            selectedVariant: (0, u.getSelectedVariant)(e),
            contractRole: (0, l.getContractRole)(e)[0],
            contractRoleInProgress: (0, l.getContractRoleInProgress)(e),
            entryUnderChange: (0, h.getEntryUnderChange)(e),
            softBundleGroup: (0, u.getSelectedSoftBundleGroup)(e),
            isB2B: b.default.isB2B((0, i.getMarketContext)(e)),
            selectedVases: (0, l.getSelectedVases)(e)
        }
    }, function(l) {
        return {
            selectOfferNoPhone: function(e, t, r) {
                return l((0, o.preSelectOffer)(e, t, r))
            },
            pickDevice: function(e, t) {
                return l((0, o.pickDevice)(e, t))
            }
        }
    })(v);
    e.default = C
});
//# sourceMappingURL=ProductDetailsPropositionsComponent.js.map