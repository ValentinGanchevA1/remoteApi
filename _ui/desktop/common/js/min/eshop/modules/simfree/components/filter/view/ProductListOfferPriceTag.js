define(["exports", "react", "eshop/utils/OnlineUtils", "eshop/modules/simfree/components/OOVMonthlyPriceTag"], function(e, s, o, i) {
    "use strict";

    function t(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
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
    }), e.default = void 0, s = babelHelpers.interopRequireWildcard(s), o = babelHelpers.interopRequireDefault(o), i = babelHelpers.interopRequireDefault(i);
    var l = 0,
        r = function(e) {
            babelHelpers.inherits(n, e);
            var r = t(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).state = {
                    countId: l++
                }, t
            }
            return babelHelpers.createClass(n, [{
                key: "getPaymentsFromProposition",
                value: function() {
                    var e = o.default.getPaymentsForRole(this.props.proposition.payments, ""),
                        t = o.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole);
                    return {
                        baseSummaryPrice: e.basePrice.originalGrossPrice,
                        convSummaryPrice: t.basePrice.originalGrossPrice,
                        monthlyPayments: e.totalPayments.monthlyPayments,
                        monthlyPaymentsWithBonuses: t.totalPayments.monthlyPayments
                    }
                }
            }, {
                key: "getPaymentsFromEntry",
                value: function() {
                    var e = this.props.entry.monthlyPrices && this.props.entry.monthlyPrices.size;
                    return {
                        baseSummaryPrice: this.props.entry.monthlyOldPrice,
                        convSummaryPrice: this.props.entry.monthlyPrices[e - 1],
                        monthlyPayments: this.props.entry.monthlyOldPrices,
                        monthlyPaymentsWithBonuses: this.props.entry.monthlyPrices,
                        clientContext: !0
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = null;
                    if (this.props.entry) e = this.getPaymentsFromEntry();
                    else {
                        if (!this.props.proposition) return null;
                        e = this.getPaymentsFromProposition()
                    }
                    var t = this.props.clientContext || !!this.props.contractRole;
                    return s.default.createElement(i.default, babelHelpers.extends({
                        clientContext: t,
                        loyaltyLength: this.props.loyaltyLength,
                        monthString: this.props.monthlyString || "mies.",
                        mainPriceClass: this.props.mainPriceClass,
                        alignClass: this.props.alignClass,
                        offerDiscountInfoDescription: this.props.offerDiscountInfoDescription,
                        offerDiscountInfoConvDescription: this.props.offerDiscountInfoConvDescription,
                        baseId: this.props.baseId,
                        isMagnum: !1
                    }, e))
                }
            }]), n
        }(s.Component);
    e.default = r
});
//# sourceMappingURL=ProductListOfferPriceTag.js.map