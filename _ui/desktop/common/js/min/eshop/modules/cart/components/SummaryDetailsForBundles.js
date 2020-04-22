define(["exports", "react", "react-redux", "prop-types", "eshop/modules/core/components/ui/Expander", "../selectors", "eshop/modules/checkout/selectors", "./SummaryDetailsTableForBundles", "eshop/utils/OnlineUtils", "../../checkout/selectors", "./DeliveryCostDetails"], function(e, o, t, a, s, l, r, d, n, u, i) {
    "use strict";

    function c(l) {
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
                var a = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, a)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), a = babelHelpers.interopRequireDefault(a), d = babelHelpers.interopRequireDefault(d), n = babelHelpers.interopRequireDefault(n), i = babelHelpers.interopRequireDefault(i);
    var p = function(e) {
        babelHelpers.inherits(a, e);
        var t = c(a);

        function a(e) {
            return babelHelpers.classCallCheck(this, a), t.call(this, e)
        }
        return babelHelpers.createClass(a, [{
            key: "componentDidMount",
            value: function() {
                this.loadModule()
            }
        }, {
            key: "titleView",
            value: function(t) {
                var e = this.props.description.filter(function(e) {
                    return e[0] === t
                });
                return [o.default.createElement("h4", {
                    key: "title-bundle" + t,
                    className: "h5"
                }, e[0][2]), o.default.createElement("p", {
                    key: "description-bundle" + t
                }, e[0][1]), o.default.createElement(s.Trigger, {
                    key: "trigger-bundle" + t,
                    triggerClassName: "opl-document__expander__trigger"
                }, o.default.createElement("span", {
                    className: "opl-section__text-show"
                }, "rozwiń opłaty"), o.default.createElement("span", {
                    className: "opl-section__text-hide"
                }, "zwiń opłaty"))]
            }
        }, {
            key: "entryNotNull",
            value: function(e) {
                return e.monthlyPrice || e.oneTimePrice || e.monthTo
            }
        }, {
            key: "getCheckoutCurrency",
            value: function() {
                return this.props.checkoutCost ? this.props.checkoutCost.currency : "zł"
            }
        }, {
            key: "render",
            value: function() {
                for (var e, t, l = this, a = [], r = [], n = 1; n <= this.props.maxBundleNumber; n++) 0 < (r = this.props.entries.filter(function(e) {
                    return e.bundleNo === n
                }).filter(function(e) {
                    return l.entryNotNull(e)
                })).length && (e = r.map(function(e, t) {
                    return o.default.createElement(d.default, {
                        key: t + "bundleNo" + n,
                        entry: e,
                        monthlyHeader: l.props.monthlyHeader,
                        oneTimeHeader: l.props.oneTimeHeader,
                        id: t ? l.props.id + "-" + t + "-bundle" + n : l.props.id + "-bundle" + n,
                        bundleNo: n,
                        className: 0 < t ? "u-padding-left-l-xl " : " u-padding-left-l-xl ",
                        checkoutPriceTooltipContent: l.props.checkoutPriceTooltipContent,
                        firstMonthPriceTooltipContent: l.props.firstMonthPriceTooltipContent
                    })
                }), t = o.default.createElement(s.Expander, {
                    key: "bundleNo-" + n + "-expander",
                    variant: "section_expander",
                    scrollToSelected: !1
                }, o.default.createElement(s.Section, {
                    key: "bundleNo-" + n + "-section",
                    header: this.titleView(n),
                    headerClassName: "u-small-padding",
                    variant: "section_expander",
                    className: "opl-document__expander opl-section--chevron-left u-no-padding-top",
                    contentClassName: "opl-document__expander__content"
                }, o.default.createElement("table", {
                    id: "ExpanderSummaryDetailsForBundleTable",
                    key: "bundleNo-" + n + "-table",
                    "aria-hidden": "true",
                    className: "u-no-margin-t opl-table opl-conf-summary-table opl-table--50-50 u-small-hide u-no-border"
                }, o.default.createElement("caption", null), o.default.createElement("thead", null, o.default.createElement("tr", null, o.default.createElement("th", null), o.default.createElement("th", null), o.default.createElement("th", {
                    className: "second-last u-font-normal u-padding-right"
                }, this.props.oneTimeHeader), o.default.createElement("th", {
                    className: "last u-font-normal u-no-padding-right"
                }, this.props.monthlyHeader)))), o.default.createElement(s.Expander, {
                    key: "bundleNo-" + n + "-expander-nested",
                    variant: "section_expander",
                    scrollToSelected: !1
                }, e))), a.push(t));
                return o.default.createElement("div", {
                    "data-js-module": "core/modules/expander",
                    id: this.props.rootComponent + "-details"
                }, o.default.createElement("div", {
                    className: "js-expander__container u-margin-top"
                }, o.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger u-padding-left-s u-small-no-padding"
                }, o.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, this.props.foldedSectionTriggerLabel), o.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, this.props.expandedSectionTriggerLabel)), o.default.createElement("div", {
                    className: "js-expander__content u-hide--soft"
                }, o.default.createElement("h3", {
                    className: "u-font-standard u-padding-top-l u-padding-l u-no-margin opl-section__heading"
                }, o.default.createElement("span", {
                    className: "h2 u-no-margin"
                }, "Szczegóły opłat")), a, this.props.deliveryMethod && o.default.createElement(i.default, {
                    title: "Dostawa",
                    cost: this.props.deliveryMethod.price.replace(".", ","),
                    render: function(e, t, a) {
                        return l.prepareCustomSummaryRow(a, e, t)
                    }
                }), this.props.feeForSelectedPaymentMethod && 0 !== parseInt(this.props.feeForSelectedPaymentMethod) && o.default.createElement(i.default, {
                    title: "Opłata za płatność przy odbiorze",
                    cost: this.props.feeForSelectedPaymentMethod.replace(".", ","),
                    render: function(e, t, a) {
                        return l.prepareCustomSummaryRow(a, e, t)
                    }
                }), 0 < this.props.depositCost ? this.depositTableView() : null, o.default.createElement("div", {
                    className: "u-margin-top"
                }, o.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger u-padding-left-s u-small-no-padding"
                }, o.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, this.props.foldedSectionTriggerLabel), o.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, this.props.expandedSectionTriggerLabel))))))
            }
        }, {
            key: "prepareCustomSummaryRow",
            value: function(e, t, a) {
                return o.default.createElement("div", {
                    className: "l-row"
                }, o.default.createElement("div", {
                    className: "l-col l-col-12"
                }, o.default.createElement("table", {
                    className: "u-spacing-top-l opl-table opl-conf-summary-table opl-table--50-50 opl-table--no-border-top"
                }, o.default.createElement("caption", {
                    className: "u-acc-hide"
                }, e), o.default.createElement("thead", {
                    className: "u-acc-hide"
                }, o.default.createElement("tr", null, o.default.createElement("th", null), o.default.createElement("th", null), o.default.createElement("th", null, this.props.oneTimeHeader), o.default.createElement("th", null, this.props.monthlyHeader))), o.default.createElement("tbody", null, o.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, o.default.createElement("td", {
                    className: "u-w-auto"
                }, o.default.createElement("h3", {
                    className: "h5 g-brand2-c u-no-spacing"
                }, e)), o.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-small-padding-l g-brand2-c"
                }, t), o.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last g-brand2-c td-null"
                }, a))))))
            }
        }, {
            key: "depositTableView",
            value: function() {
                var e = o.default.createElement("span", null, "—"),
                    t = o.default.createElement("span", {
                        className: "h5 g-brand2-c u-no-margin"
                    }, n.default.formatPrice(this.props.depositCost) + " " + this.getCheckoutCurrency());
                return this.prepareCustomSummaryRow("Kaucje", t, e)
            }
        }, {
            key: "loadModule",
            value: function() {
                OPL.UI.loadModules(document.getElementById(this.props.rootComponent + "-details"), [{
                    path: "core/modules/expander",
                    options: "",
                    conditions: ""
                }])
            }
        }]), a
    }(o.Component);
    p.propTypes = {
        rootComponent: a.default.string,
        expandedSectionTriggerLabel: a.default.string,
        foldedSectionTriggerLabel: a.default.string,
        feeForSelectedPaymentMethod: a.default.string,
        deliveryMethod: a.default.any
    }, p.defaultProps = {
        expandedSectionTriggerLabel: "Ukryj szczegóły opłat",
        foldedSectionTriggerLabel: "Pokaż szczegóły opłat"
    };
    var m = (0, t.connect)(function(e) {
        return {
            entries: (0, l.getCartSummaryTableDetailsRows)(e),
            description: (0, l.getOfferDescriptionForBundles)(e),
            devices: (0, l.getCartDevices)(e) || [],
            deliveryMethod: (0, r.getSelectedDeliveryMethod)(e),
            offerCount: (0, l.getOfferCount)(e),
            maxBundleNumber: (0, l.getMaxBundleNo)(e),
            depositCost: (0, l.getDepositCost)(e),
            checkoutCost: (0, l.getCartCheckoutCost)(e),
            feeForSelectedPaymentMethod: (0, u.getFeeForSelectedPaymentMethod)(e)
        }
    }, function() {
        return {}
    })(p);
    e.default = m
});
//# sourceMappingURL=SummaryDetailsForBundles.js.map