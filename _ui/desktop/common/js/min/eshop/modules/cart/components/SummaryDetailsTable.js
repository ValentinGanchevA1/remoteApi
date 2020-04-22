define(["exports", "react", "react-redux", "prop-types", "../selectors", "eshop/modules/checkout/selectors", "lodash", "eshop/modules/core/components/ui/Expander", "./Utils"], function(e, o, t, r, a, n, l, s, i) {
    "use strict";

    function c(a) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(a);
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
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), r = babelHelpers.interopRequireDefault(r), l = babelHelpers.interopRequireDefault(l);
    var u = function(e) {
        babelHelpers.inherits(r, e);
        var t = c(r);

        function r() {
            return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
        }
        return babelHelpers.createClass(r, [{
            key: "render",
            value: function() {
                var r = this,
                    e = this.computeTitle(this.props.entry.monthFrom, this.props.entry.monthTo);
                return o.default.createElement(s.Section, {
                    header: this.getHeaderView(e),
                    variant: "section",
                    headerClassName: "opl-section__header--with-summary u-small-no-padding u-no-border u-padding-left-l-xl",
                    summaryClassName: "opl-section__border-bottom",
                    summary: this.getSummaryView(e),
                    className: this.props.className
                }, o.default.createElement("table", {
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50 opl-table--no-border-top"
                }, o.default.createElement("caption", {
                    className: "u-acc-hide"
                }, e), o.default.createElement("thead", {
                    className: "u-acc-hide"
                }, o.default.createElement("tr", null, o.default.createElement("th", null), o.default.createElement("th", null), o.default.createElement("th", null, this.props.oneTimeHeader), o.default.createElement("th", null, this.props.monthlyHeader))), o.default.createElement("tbody", null, this.props.prices.map(function(e, t) {
                    return r.prepareTableRow(e, t)
                }))))
            }
        }, {
            key: "getHeaderView",
            value: function(e) {
                var t = this.computeTooltip(this.props.entry.monthFrom, this.props.entry.monthTo);
                return o.default.createElement("div", {
                    className: "l-row"
                }, o.default.createElement("div", {
                    id: this.props.id,
                    className: "l-col l-col-12"
                }, o.default.createElement("h3", {
                    className: "h5 g-brand2-c opl-section__heading u-inline u-margin-right"
                }, e), t ? o.default.createElement("span", {
                    "data-type": "no-click",
                    "data-tooltip-trigger-event": "mouseover",
                    className: "g-icon g-icon--hint g-icon--font g-icon--xs g-brand2-c o-tooltip__trigger u-inline-block",
                    style: {
                        position: "relative",
                        zIndex: 1
                    }
                }) : "", t ? o.default.createElement("span", {
                    className: "o-tooltip__content"
                }, t) : "", o.default.createElement(s.Trigger, {
                    className: "g-brand2-c"
                }, o.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwiń"), o.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwiń"))))
            }
        }, {
            key: "getSummaryView",
            value: function(e) {
                var t = " td-null",
                    r = "h5 g-brand2-c u-no-margin",
                    a = this.props.entry.monthlyPrice ? o.default.createElement("span", {
                        className: r
                    }, this.formatPrice(this.props.entry.monthlyPrice, this.props.entry.currency)) : o.default.createElement("span", null, "—"),
                    n = this.props.entry.oneTimePrice ? o.default.createElement("span", {
                        className: r
                    }, this.props.entry.oneTimePrice) : o.default.createElement("span", null, "—");
                return o.default.createElement("div", {
                    className: "opl-section__summary u-small-padding-top-s"
                }, o.default.createElement("table", {
                    role: "presentation",
                    className: "opl-table"
                }, o.default.createElement("caption", null, e + " - skrót"), o.default.createElement("thead", null, o.default.createElement("tr", null, o.default.createElement("th", null, this.props.oneTimeHeader), o.default.createElement("th", null, this.props.monthlyHeader))), o.default.createElement("tbody", null, o.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, o.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-small-no-padding g-brand2-c u-no-border" + (this.props.entry.oneTimePrice ? "" : t)
                }, n), o.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last g-brand2-c u-no-border" + (this.props.entry.monthlyPrice ? "" : t)
                }, a)))))
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
                var r = " td-null",
                    a = "h5 u-no-margin u-font-normal",
                    n = e.monthlyPrice ? o.default.createElement("span", {
                        className: a
                    }, e.monthlyPrice) : o.default.createElement("span", null, "—"),
                    l = e.oneTimeCost ? o.default.createElement("span", {
                        className: a
                    }, e.oneTimeCost.replace(".", ",")) : o.default.createElement("span", null, "—");
                return o.default.createElement("tr", {
                    key: "price" + t,
                    className: "u-small-no-spacing-top"
                }, o.default.createElement("td", {
                    className: "u-w-auto u-font-normal",
                    dangerouslySetInnerHTML: {
                        __html: e.description
                    }
                }), o.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-font-normal" + (e.oneTimeCost ? "" : r)
                }, l), o.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last u-font-normal" + (e.monthlyPrice ? "" : r)
                }, n))
            }
        }, {
            key: "prepareBonusRow",
            value: function(e, t) {
                var r = e.priceSet ? e.priceSet : e.priceModification,
                    a = o.default.createElement("span", {
                        className: "h5 u-no-margin u-font-normal"
                    }, "-" + r.toFixed(2).replace(".", ",") + " " + this.props.entry.currency),
                    n = o.default.createElement("span", null, "—");
                return o.default.createElement("tr", {
                    key: "bonus" + t,
                    className: "u-small-no-spacing-top"
                }, o.default.createElement("td", {
                    className: "u-w-auto u-font-normal"
                }, e.title), o.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-font-normal td-null"
                }, n), o.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last u-font-normal"
                }, a))
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
                return e || t ? 1 === e && 1 === t ? this.props.firstMonthPriceText || "W " + (0, i.maleOrdinal)(1) + " miesiącu" : e === t ? "W " + (0, i.maleOrdinal)(e) + " miesiącu" : "Od " + e + (t ? " do " + t : "") + " miesiąca" : this.props.checkoutPriceText
            }
        }, {
            key: "computeTooltip",
            value: function(e, t) {
                return e || t ? 1 === e && 1 === t ? this.props.firstMonthPriceTooltipContent : void 0 : this.props.checkoutPriceTooltipContent
            }
        }]), r
    }(o.Component);
    u.propTypes = {
        monthlyHeader: r.default.string.isRequired,
        oneTimeHeader: r.default.string.isRequired,
        checkoutPriceText: r.default.string,
        firstMonthPriceText: r.default.string,
        id: r.default.string,
        checkoutPriceTooltipContent: r.default.string,
        firstMonthPriceTooltipContent: r.default.string
    }, u.defaultProps = {
        checkoutPriceText: "Opłata na start",
        firstMonthPriceText: "W pierwszym miesiącu",
        highlighted: !1
    };
    var p = (0, t.connect)(function() {
        var r = (0, a.createGetPricesForPeriodSelector)();
        return function(e, t) {
            return {
                prices: r(e, t),
                bonusConsents: (0, n.getConsentsWithBonuses)(e)
            }
        }
    })(u);
    e.default = p
});
//# sourceMappingURL=SummaryDetailsTable.js.map