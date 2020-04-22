define(["exports", "react", "react-redux", "eshop/modules/simfree/components/ProductOfferPriceTooltipComponent", "eshop/utils/OnlineUtils", "eshop/modules/cart/selectors", "eshop/components/OraCommonComponents", "eshop/modules/configurator/selectors/offers"], function(e, l, t, i, a, r, p, o) {
    "use strict";

    function s(o) {
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
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), i = babelHelpers.interopRequireDefault(i), a = babelHelpers.interopRequireDefault(a);
    var c = 0,
        n = function(e) {
            babelHelpers.inherits(o, e);
            var r = s(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = r.call(this, e)).state = {
                    countId: c++
                }, t
            }
            return babelHelpers.createClass(o, [{
                key: "getPrice",
                value: function(e) {
                    return this.props.showNet ? e.priceNet || e.originalNetPrice : e.priceGross || e.originalGrossPrice
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.baseSummaryPrice,
                        t = this.props.convSummaryPrice,
                        r = this.props.selected,
                        o = this.props.monthlyPayments,
                        s = this.props.monthlyPaymentsWithBonuses;
                    !this.props.isMagnum && o && 0 < o.length && (e = this.getPrice(o[o.length - 1])), !this.props.isMagnum && 0 < s.length && (t = this.getPrice(s[s.length - 1]));
                    var n = this.props.alignClass || " u-right u-small-right ";
                    return l.default.createElement("div", null, this.props.clientContext && t != e ? l.default.createElement("div", {
                        className: n
                    }, r && a.default.updateOgTag("product:original_price:offer_price", a.default.formatPrice(t)), r && a.default.updateOgTag("product:offer_loyalyty", s && s[s.length - 1] && s[s.length - 1].monthTo), l.default.createElement(i.default, {
                        key: "client_" + this.props.clientContext + "_" + this.props.showNet + "_" + this.props.baseId,
                        offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                        offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                        monthlyPayments: o,
                        monthlyPaymentsWithBonuses: s,
                        clientContext: this.props.clientContext,
                        loyaltyLength: this.props.loyaltyLength,
                        baseId: this.props.baseId
                    }, l.default.createElement("span", {
                        className: "u-left u-small-left"
                    }, l.default.createElement(p.OraLoader, {
                        loading: this.props.getContractRoleInProgress,
                        size: "s",
                        id: "contract-role-in-progress-offers-loader-" + this.state.countId + c,
                        parentId: "offer-filter-loader-opaque",
                        blockType: "span"
                    }, l.default.createElement("span", {
                        className: this.props.mainPriceClass + " u-font-bold"
                    }, a.default.formatPrice(t), " zł", this.props.monthString && "/" + this.props.monthString)), l.default.createElement("br", null), l.default.createElement(u, {
                        baseSummaryPrice: e,
                        monthString: this.props.monthString
                    })))) : l.default.createElement("div", {
                        className: n
                    }, r && a.default.updateOgTag("product:original_price:offer_price", a.default.formatPrice(e)), r && a.default.updateOgTag("product:offer_loyalyty", o && o[o.length - 1] && o[o.length - 1].monthTo), l.default.createElement(i.default, {
                        key: "client_" + this.props.clientContext + "_" + this.props.showNet + "_" + this.props.baseId + this.state.countId,
                        offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                        offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                        monthlyPayments: o,
                        monthlyPaymentsWithBonuses: s,
                        loyaltyLength: this.props.loyaltyLength,
                        clientContext: this.props.clientContext,
                        baseId: this.props.baseId
                    }, l.default.createElement("span", {
                        className: "u-left u-small-left"
                    }, l.default.createElement(p.OraLoader, {
                        loading: this.props.getContractRoleInProgress,
                        size: "s",
                        id: "contract-role-in-progress-offers-loader-" + this.state.countId + c,
                        parentId: "offer-filter-loader-opaque",
                        blockType: "span"
                    }, l.default.createElement("span", {
                        className: this.props.mainPriceClass + " u-font-bold"
                    }, a.default.formatPrice(e), " zł", this.props.monthString && "/" + this.props.monthString))))))
                }
            }]), o
        }(l.Component),
        u = function(e) {
            return l.default.createElement("span", {
                className: "g-gray5-c u-font-bold  u-text-line-through u-left u-small-left"
            }, a.default.formatPrice(e.baseSummaryPrice), " zł", e.monthString && "/" + e.monthString)
        },
        f = (0, t.connect)(function(e) {
            return {
                showNet: (0, r.getPriceIsNet)(e),
                getContractRoleInProgress: (0, o.getContractRoleInProgress)(e)
            }
        }, null)(n);
    e.default = f
});
//# sourceMappingURL=OOVMonthlyPriceTag.js.map