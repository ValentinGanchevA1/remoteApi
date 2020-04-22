define(["exports", "react", "prop-types", "react-redux", "eshop/modules/core/components/ui/Tooltip", "eshop/utils/OnlineUtils", "eshop/modules/cart/selectors", "eshop/modules/configurator/selectors/offers"], function(e, o, t, r, n, d, a, l) {
    "use strict";

    function i(o) {
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
    }), e.default = void 0, o = babelHelpers.interopRequireDefault(o), t = babelHelpers.interopRequireDefault(t), n = babelHelpers.interopRequireDefault(n), d = babelHelpers.interopRequireDefault(d);
    var s = function(e) {
            babelHelpers.inherits(r, e);
            var t = i(r);

            function r(e) {
                return babelHelpers.classCallCheck(this, r), t.call(this, e)
            }
            return babelHelpers.createClass(r, [{
                key: "componentShouldRender",
                value: function() {
                    return null != this.props.deviceTotalPrice && null != this.props.basePrice && null != this.props.basePrice.combinedTariffAndDevicePayments
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.priceIsNet ? this.props.deviceTotalPriceNet : this.props.deviceTotalPriceGross;
                    return o.default.createElement("div", {
                        className: "u-padding-top u-clear-both"
                    }, o.default.createElement("div", {
                        className: "opl-console"
                    }, o.default.createElement("p", null, o.default.createElement("span", {
                        className: "u-font-bold u-font-small"
                    }, d.default.formatPrice(e), " zł"), " łączna cena za telefon"), this.props.shouldShowStock && o.default.createElement("p", null, o.default.createElement("span", {
                        className: "u-font-bold u-font-small"
                    }, this.props.stockLevel, " szt."), " dostępne"), this.props.shouldShowSum && o.default.createElement("p", null, "suma opłat (abonament + telefon) ", o.default.createElement(n.default, {
                        className: "u-inline",
                        maxWidth: 450,
                        direction: "bottom"
                    }, this.tooltipContent()))))
                }
            }, {
                key: "isSimfreeInstallment",
                value: function() {
                    return "SIMFREE_INST" === this.props.offerType
                }
            }, {
                key: "tieredPriceIsEmpty",
                value: function(e) {
                    return 0 === e.monthFrom && 0 === e.monthTo && 0 === e.priceNet
                }
            }, {
                key: "tooltipContent",
                value: function() {
                    var t = this;
                    return this.getCombinedPrice() ? o.default.createElement("div", null, this._renderOneTimeCharges(), o.default.createElement("hr", {
                        className: "u-padding-l"
                    }), !this.isSimfreeInstallment() && this._renderOnFirstBill(), this.getCombinedPrice() ? this.getCombinedPrice().filter(function(e) {
                        return !t.tieredPriceIsEmpty(e)
                    }).map(function(e) {
                        return t._renderCombinedTerminalAndTariffPayment(e)
                    }) : "") : null
                }
            }, {
                key: "combinePayments",
                value: function(e, t, r, o) {
                    var n = {};
                    return n.priceNet = (e ? e.originalNetPrice : 0) + (t ? t.priceNet : 0), n.priceGross = (e ? e.originalGrossPrice : 0) + (t ? t.priceGross : 0), n.monthFrom = r, n.monthTo = o, n
                }
            }, {
                key: "getCombinedPrice",
                value: function() {
                    var e = this.props.proposition && d.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole),
                        t = e && e.totalPayments ? e.totalPayments.monthlyPayments : [],
                        r = this.props.basePrice && this.props.basePrice.devicePayments,
                        o = [],
                        n = [];
                    if (t && t[0]) {
                        d.default.addUniqueIntoArray(t[t.length - 1].monthTo, n), d.default.addUniqueIntoArray(t[t.length - 1].monthTo + 1, o);
                        for (var a = 0; a < t.length; a++) d.default.addUniqueIntoArray(t[a].monthFrom, o), d.default.addUniqueIntoArray(t[a].monthTo, n)
                    }
                    if (r && r[0]) {
                        d.default.addUniqueIntoArray(r[r.length - 1].monthTo, n), d.default.addUniqueIntoArray(r[r.length - 1].monthTo + 1, o);
                        for (var l = 0; l < r.length; l++) d.default.addUniqueIntoArray(r[l].monthFrom, o), d.default.addUniqueIntoArray(r[l].monthTo, n)
                    }
                    o = o.sort(function(e, t) {
                        return e - t
                    }), n = n.sort(function(e, t) {
                        return e - t
                    });
                    for (var i = [], s = 0; s < o.length - 1; s++) {
                        var c = this.getTariffPriceForPeriod(o[s], n[s]),
                            u = this.getTerminalPriceForPeriod(o[s], n[s]);
                        (c || u) && i.push(this.combinePayments(c, u, o[s], n[s]))
                    }
                    return i
                }
            }, {
                key: "_renderOneTimeCharges",
                value: function() {
                    var e;
                    return this.props.basePrice && (e = this.props.priceIsNet ? this.props.basePrice.oneTimePaymentNet : this.props.basePrice.oneTimePaymentGross), o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-row u-padding-top"
                    }, o.default.createElement("div", {
                        className: "u-font-bold " + c
                    }, "Na start")), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: u
                    }, "opłaty jednorazowe"), o.default.createElement("div", {
                        className: "u-font-bold" + p
                    }, d.default.formatPrice(e), " zł")))
                }
            }, {
                key: "_renderOnFirstBill",
                value: function() {
                    var e, t, r = this.getCombinedPrice()[0];
                    return this.props.basePrice && this.props.basePrice.payNowPayment && (e = this.props.priceIsNet ? this.props.basePrice.payNowPayment.priceNet : this.props.basePrice.payNowPayment.priceGross), r && (t = this.props.priceIsNet ? r.priceNet : r.priceGross), o.default.createElement("div", null, o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: "u-font-bold " + c
                    }, "W pierwszym miesiącu")), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: u
                    }, "opłaty jednorazowe"), o.default.createElement("div", {
                        className: "u-font-bold" + p
                    }, d.default.formatPrice(e))), null != (!!this.props.basePrice && this.props.basePrice.combinedTariffAndDevicePayments) ? o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: u
                    }, "opłaty miesięczne"), o.default.createElement("div", {
                        className: "u-font-bold" + p
                    }, d.default.formatPrice(t), " zł")) : o.default.createElement("div", null))
                }
            }, {
                key: "getTerminalPriceForPeriod",
                value: function(t, r) {
                    return this.props.basePrice && this.props.basePrice.devicePayments.find(function(e) {
                        return e.monthFrom <= t && e.monthTo >= r
                    })
                }
            }, {
                key: "getTariffPriceForPeriod",
                value: function(t, r) {
                    var e = this.props.proposition && d.default.getPaymentsForRole(this.props.proposition.payments, this.props.contractRole);
                    return e && e.totalPayments.monthlyPayments.find(function(e) {
                        return e.monthFrom <= t && e.monthTo >= r
                    })
                }
            }, {
                key: "_renderCombinedTerminalAndTariffPayment",
                value: function(e) {
                    if (!e) return null;
                    var t = this.props.priceIsNet ? e.priceNet : e.priceGross;
                    return o.default.createElement("div", {
                        id: e.monthFrom
                    }, o.default.createElement("div", {
                        className: "l-row u-padding-top"
                    }, o.default.createElement("div", {
                        className: "u-font-bold" + c
                    }, "od ", 1 == e.monthFrom ? 2 : e.monthFrom, " do ", e.monthTo, " miesiąca")), o.default.createElement("div", {
                        className: "l-row"
                    }, o.default.createElement("div", {
                        className: u
                    }, "opłaty miesięczne"), o.default.createElement("div", {
                        className: "u-font-bold" + p
                    }, d.default.formatPrice(t), " zł")))
                }
            }]), r
        }(o.default.Component),
        c = " l-col l-col-12 u-font-small ",
        u = " l-col l-col-8 u-font-small ",
        p = " l-col l-col-4 u-text-right g-brand1-c u-font-small ";
    s.defaultProps = {
        stockLevel: "",
        tooltipContent: "",
        deviceTotalPrice: ""
    }, n.default.propTypes = {
        stockLevel: t.default.string
    };
    var m = (0, r.connect)(function(e) {
        return {
            priceIsNet: (0, a.getPriceIsNet)(e),
            contractRole: (0, l.getContractRole)(e)
        }
    }, null)(s);
    e.default = m
});
//# sourceMappingURL=OraPriceSummaryComponent.js.map