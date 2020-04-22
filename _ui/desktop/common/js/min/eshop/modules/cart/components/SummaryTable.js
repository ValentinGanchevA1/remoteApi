define(["exports", "react", "react-redux", "prop-types", "../selectors", "eshop/modules/checkout/selectors", "./Utils", "./SummaryTableHeader", "./SummaryTableItem", "../../checkout/selectors"], function(e, n, t, r, o, i, l, a, s, p) {
    "use strict";

    function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, o)
        }
        return r
    }

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
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), r = babelHelpers.interopRequireDefault(r), s = babelHelpers.interopRequireDefault(s);
    var d = function(e) {
        babelHelpers.inherits(r, e);
        var t = u(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var o = this,
                    e = this.prepareEntries().map(function(e, t) {
                        var r;
                        return n.default.createElement(s.default, (r = {
                            key: "SummaryTableItem_" + t,
                            id: o.props.id + "-item-" + t,
                            header: e.title,
                            monthlyHeader: o.props.monthlyHeader,
                            oneTimeHeader: o.props.oneTimeHeader,
                            oneTimePrice: e.oneTimePrice,
                            monthlyPrice: e.monthlyPrice,
                            currency: e.currency,
                            bonuses: o.props.bonuses,
                            monthFrom: e.monthFrom
                        }, babelHelpers.defineProperty(r, "monthFrom", e.monthTo), babelHelpers.defineProperty(r, "highlighted", e.highlighted), babelHelpers.defineProperty(r, "tooltip", e.tooltip), babelHelpers.defineProperty(r, "deposit", o.props.deposit), r))
                    });
                return n.default.createElement("table", {
                    id: "SummaryTable",
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50"
                }, this.props.renderHeader ? n.default.createElement(a.SummaryTableHeader, this.props) : null, n.default.createElement("tbody", null, e, this.props.deliveryMethod && n.default.createElement(s.default, {
                    id: this.props.id + "-item-delivery",
                    header: "Dostawa",
                    monthlyHeader: this.props.monthlyHeader,
                    oneTimeHeader: this.props.oneTimeHeader,
                    oneTimePrice: this.props.deliveryMethod.price.replace(".", ","),
                    monthlyPrice: null,
                    currency: "",
                    tooltip: null
                }), this.props.feeForSelectedPaymentMethod && 0 !== parseInt(this.props.feeForSelectedPaymentMethod) && n.default.createElement(s.default, {
                    id: this.props.id + "-item-payment",
                    header: "Opłata za płatność przy odbiorze",
                    monthlyHeader: this.props.monthlyHeader,
                    oneTimeHeader: this.props.oneTimeHeader,
                    oneTimePrice: this.props.feeForSelectedPaymentMethod.replace(".", ","),
                    monthlyPrice: null,
                    currency: "",
                    tooltip: null
                })))
            }
        }, {
            key: "prepareEntries",
            value: function() {
                var o = this,
                    n = [];
                return this.props.entries.filter(function(e) {
                    return o.entryIsNonEmpty(e)
                }).map(function(e) {
                    var t = o.computeTitle(e.monthFrom, e.monthTo),
                        r = o.computeTooltip(e.monthFrom, e.monthTo);
                    n.push(function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? c(Object(r), !0).forEach(function(e) {
                                babelHelpers.defineProperty(t, e, r[e])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            })
                        }
                        return t
                    }({}, e, {
                        title: t,
                        tooltip: r
                    }))
                }), n
            }
        }, {
            key: "entryIsNonEmpty",
            value: function(e) {
                return e.oneTimePrice || e.monthlyPrice || e.monthTo
            }
        }, {
            key: "computeTitle",
            value: function(e, t) {
                return e || t ? 1 === e && 1 === t ? this.props.firstMonthPriceText || "W " + (0, l.maleOrdinal)(1) + " miesiącu" : e === t ? "W " + (0, l.maleOrdinal)(e) + " miesiącu" : "Od " + e + (t ? " do " + t : "") + " miesiąca" : this.props.checkoutPriceText
            }
        }, {
            key: "computeTooltip",
            value: function(e, t) {
                return e || t ? 1 === e && 1 === t ? this.props.firstMonthPriceTooltipContent : void 0 : this.props.checkoutPriceTooltipContent
            }
        }]), r
    }(n.Component);
    d.propTypes = {
        title: r.default.string.isRequired,
        monthlyHeader: r.default.string.isRequired,
        oneTimeHeader: r.default.string.isRequired,
        checkoutPriceText: r.default.string,
        firstMonthPriceText: r.default.string,
        id: r.default.string,
        checkoutPriceTooltipContent: r.default.string,
        firstMonthPriceTooltipContent: r.default.string,
        deliveryMethod: r.default.any,
        feeForSelectedPaymentMethod: r.default.string
    }, d.defaultProps = {
        checkoutPriceText: "Opłata na start",
        renderHeader: !0
    };
    var m = (0, t.connect)(function(e) {
        return {
            entries: (0, o.getCartSummaryTableRows)(e),
            bonuses: (0, i.getConsentsWithBonuses)(e),
            deliveryMethod: (0, i.getSelectedDeliveryMethod)(e),
            deposit: (0, o.getDepositCost)(e),
            feeForSelectedPaymentMethod: (0, p.getFeeForSelectedPaymentMethod)(e)
        }
    })(d);
    e.default = m
});
//# sourceMappingURL=SummaryTable.js.map