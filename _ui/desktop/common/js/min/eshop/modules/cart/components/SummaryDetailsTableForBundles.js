define(["exports", "react", "react-redux", "prop-types", "../selectors", "eshop/modules/checkout/selectors", "lodash", "eshop/modules/core/components/ui/Expander", "./Utils"], function(e, l, t, a, r, n, o, s, i) {
    "use strict";

    function u(r) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(r);
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l), a = babelHelpers.interopRequireDefault(a), o = babelHelpers.interopRequireDefault(o);
    var d = function(e) {
        babelHelpers.inherits(a, e);
        var t = u(a);

        function a() {
            return babelHelpers.classCallCheck(this, a), t.apply(this, arguments)
        }
        return babelHelpers.createClass(a, [{
            key: "render",
            value: function() {
                var a = this,
                    e = this.computeTitle(this.props.entry.monthFrom, this.props.entry.monthTo);
                return l.default.createElement(s.Section, {
                    header: this.getHeaderView(e, this.props.bundleNo),
                    variant: "section_expander",
                    headerClassName: "opl-section__header u-no-margin u-no-padding-left",
                    summaryClassName: "opl-section__border-bottom",
                    className: "opl-section--chevron-left u-no-margin-top u-large-no-padding-top u-medium-no-padding-top u-padding-left-l-xl u-small-padding-top-l ",
                    contentClassName: "u-small-padding-top-l"
                }, l.default.createElement("table", {
                    key: "details-table-bundle" + this.props.bundleNo,
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50 u-no-border"
                }, l.default.createElement("caption", {
                    className: "u-acc-hide"
                }, e), l.default.createElement("thead", null, l.default.createElement("tr", {
                    className: "u-acc-hide"
                }, l.default.createElement("th", null), l.default.createElement("th", null), l.default.createElement("th", {
                    className: "second-last u-font-normal"
                }, this.props.oneTimeHeader), l.default.createElement("th", {
                    className: "last u-font-normal"
                }, this.props.monthlyHeader))), l.default.createElement("tbody", null, this.props.prices.map(function(e, t) {
                    return a.prepareTableRow(e, t)
                }))))
            }
        }, {
            key: "getHeaderView",
            value: function(e, t) {
                return [this.getSummaryView(e, t), l.default.createElement(s.Trigger, {
                    key: "Nested-trigger-bundle-" + t,
                    className: "g-brand2-c"
                }, l.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwiń"), l.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwiń")), l.default.createElement("div", {
                    key: "Nested-bundle-" + t,
                    id: this.props.id
                })]
            }
        }, {
            key: "getSummaryView",
            value: function(e, t) {
                var a = "u-font-bold g-brand2-c u-no-margin",
                    r = this.props.entry.monthlyPrice ? l.default.createElement("span", {
                        className: a
                    }, this.formatPrice(this.props.entry.monthlyPrice, this.props.entry.currency)) : this.renderNoPrice("g-brand2-c u-no-margin"),
                    n = this.props.entry.oneTimePrice ? l.default.createElement("span", {
                        className: a
                    }, this.props.entry.oneTimePrice) : this.renderNoPrice("g-brand2-c u-no-margin");
                return l.default.createElement("table", {
                    id: "SummaryView-bundleNo-" + t,
                    key: "table-bundle-" + t,
                    className: "opl-table opl-conf-summary-table opl-table--50-50 u-no-margin-t no-padding-top"
                }, l.default.createElement("thead", null, l.default.createElement("tr", {
                    className: "u-acc-hide"
                }, l.default.createElement("th", null), l.default.createElement("th", null), l.default.createElement("th", {
                    className: "second-last u-font-normal u-small-hide"
                }, this.props.oneTimeHeader), l.default.createElement("th", {
                    className: "last u-font-normal u-small-hide"
                }, this.props.monthlyHeader))), l.default.createElement("tbody", null, l.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, l.default.createElement("th", {
                    className: "u-w-auto u-no-border u-padding-left-l-xl u-no-padding-top u-padding-l"
                }, l.default.createElement("span", {
                    className: "u-margin-right u-inline-block u-font-bold g-brand2-c"
                }, e)), l.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last g-brand2-c u-no-border u-no-padding-top u-padding-l u-padding-right-l"
                }, n), l.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last g-brand2-c u-no-border u-no-padding-top u-padding-l"
                }, r))))
            }
        }, {
            key: "isInPeriod",
            value: function(e, t) {
                return e <= this.props.entry.monthFrom && (null === t || null !== this.props.entry.monthTo && t >= this.props.entry.monthTo)
            }
        }, {
            key: "formatPrice",
            value: function(e, t) {
                return e.toFixed(2).replace(".", ",") + " " + t
            }
        }, {
            key: "prepareTableRow",
            value: function(e, t) {
                var a = "u-font-bold u-no-margin";
                if (e.monthlyPrice || e.oneTimeCost) {
                    var r = e.monthlyPrice ? l.default.createElement("span", {
                            className: a
                        }, e.monthlyPrice) : this.renderNoPrice(),
                        n = e.oneTimeCost ? l.default.createElement("span", {
                            className: a
                        }, e.oneTimeCost.replace(".", ",")) : this.renderNoPrice();
                    return l.default.createElement("tr", {
                        key: "price" + t,
                        className: "u-border-bottom u-no-border-t"
                    }, l.default.createElement("th", {
                        className: "u-no-border u-small-no-padding u-w-auto u-font-normal u-medium-padding-left-l-xl u-large-padding-left-l-xl u-vertical-middle"
                    }, e.description), l.default.createElement("td", {
                        "data-title": this.props.oneTimeHeader,
                        className: "second-last u-no-border u-font-normal u-small-padding-top-l u-padding-right-l u-vertical-middle"
                    }, n), l.default.createElement("td", {
                        "data-title": this.props.monthlyHeader,
                        className: "last u-no-border u-font-normal u-small-padding-top-l u-vertical-middle"
                    }, r))
                }
            }
        }, {
            key: "prepareBonusRow",
            value: function(e, t) {
                var a = e.priceSet ? e.priceSet : e.priceModification,
                    r = l.default.createElement("span", {
                        className: "h5 u-no-margin u-font-normal"
                    }, "-" + a.toFixed(2).replace(".", ",") + " " + this.props.entry.currency),
                    n = l.default.createElement("span", {
                        "aria-label": "brak"
                    }, "—");
                return l.default.createElement("tr", {
                    key: "bonus" + t,
                    className: "u-border-bottom u-small-padding u-small-no-margin u-no-border-t"
                }, l.default.createElement("th", {
                    className: "u-no-border u-small-padding-top u-small-padding u-w-auto u-no-padding-left"
                }, e.title), l.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-no-border u-font-normal u-small-padding-top"
                }, n), l.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "second-last u-no-border u-font-normal u-small-padding-top"
                }, r))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                (!this.props.entry.monthFrom && !this.props.entry.monthTo || 1 === this.props.entry.monthFrom && 1 === this.props.entry.monthTo) && OPL.UI.loadModules(document.getElementById(this.props.id), [{
                    path: "core/modules/tooltips",
                    options: {
                        mouseoverMinWidth: 0,
                        triggerEvent: "mouseover"
                    }
                }])
            }
        }, {
            key: "computeTitle",
            value: function(e, t) {
                return e || t ? 1 === e && 1 === t || !e && 1 === t ? this.props.firstMonthPriceText || "W " + (0, i.maleOrdinal)(1) + " miesiącu" : e === t ? "W " + (0, i.maleOrdinal)(e) + " miesiącu" : "Od " + e + (t ? " do " + t : "") + " miesiąca" : this.props.checkoutPriceText
            }
        }, {
            key: "computeTooltip",
            value: function(e, t) {
                return e || t ? 1 === e && 1 === t ? this.props.firstMonthPriceTooltipContent : void 0 : this.props.checkoutPriceTooltipContent
            }
        }, {
            key: "renderNoPrice",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : void 0;
                return l.default.createElement("div", {
                    className: "u-inline"
                }, l.default.createElement("span", {
                    className: t,
                    "aria-hidden": "true"
                }, "—"), l.default.createElement("span", {
                    className: "u-acc-hide"
                }, "brak"))
            }
        }]), a
    }(l.Component);
    d.propTypes = {
        monthlyHeader: a.default.string.isRequired,
        oneTimeHeader: a.default.string.isRequired,
        checkoutPriceText: a.default.string,
        firstMonthPriceText: a.default.string,
        id: a.default.string,
        checkoutPriceTooltipContent: a.default.string,
        firstMonthPriceTooltipContent: a.default.string
    }, d.defaultProps = {
        checkoutPriceText: "Opłata na start",
        firstMonthPriceText: "W pierwszym miesiącu",
        highlighted: !1
    };
    var c = (0, t.connect)(function() {
        var a = (0, r.getPricesForPeriodSelectorForBundles)();
        return function(e, t) {
            return {
                prices: a(e, t),
                bonusConsents: (0, n.getConsentsWithBonuses)(e)
            }
        }
    })(d);
    e.default = c
});
//# sourceMappingURL=SummaryDetailsTableForBundles.js.map