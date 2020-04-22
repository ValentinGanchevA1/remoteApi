define(["exports", "react", "react-redux", "prop-types", "eshop/modules/core/components/ui/Expander", "../selectors", "eshop/modules/checkout/selectors", "./SummaryDetailsTable", "./DeliveryCostDetails"], function(e, n, t, a, r, l, o, s, d) {
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
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), a = babelHelpers.interopRequireDefault(a), s = babelHelpers.interopRequireDefault(s), d = babelHelpers.interopRequireDefault(d);
    var i = function(e) {
        babelHelpers.inherits(l, e);
        var a = c(l);

        function l(e) {
            var t;
            return babelHelpers.classCallCheck(this, l), t = a.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "deliveryCustomRowView", function(e, t, a, l, r) {
                return n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, n.default.createElement("table", {
                    className: "u-large-spacing-top u-medium-spacing-top opl-table opl-conf-summary-table opl-table--50-50 opl-table--no-border-top"
                }, n.default.createElement("caption", {
                    className: "u-acc-hide"
                }, e), n.default.createElement("thead", {
                    className: "u-acc-hide"
                }, n.default.createElement("tr", null, n.default.createElement("th", null), n.default.createElement("th", null), n.default.createElement("th", null, t), n.default.createElement("th", null, a))), n.default.createElement("tbody", null, n.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, n.default.createElement("td", {
                    className: "u-w-auto"
                }, n.default.createElement("h3", {
                    className: "h5 g-brand2-c u-no-spacing"
                }, e)), n.default.createElement("td", {
                    "data-title": t,
                    className: "second-last u-small-padding-l g-brand2-c"
                }, l), n.default.createElement("td", {
                    "data-title": a,
                    className: "last g-brand2-c td-null"
                }, r))))))
            }), t
        }
        return babelHelpers.createClass(l, [{
            key: "componentDidMount",
            value: function() {
                this.loadModule()
            }
        }, {
            key: "render",
            value: function() {
                var l = this;
                return n.default.createElement("div", {
                    "data-js-module": "core/modules/expander",
                    id: this.props.rootComponent + "-details"
                }, n.default.createElement("div", {
                    className: "l-row l-row--space-large"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, n.default.createElement("div", {
                    className: "js-expander__container u-margin-top"
                }, n.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger u-padding-left-s u-small-no-padding"
                }, n.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, this.props.foldedSectionTriggerLabel), n.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, this.props.expandedSectionTriggerLabel)), n.default.createElement("div", {
                    className: "js-expander__content u-hide--soft"
                }, n.default.createElement("table", {
                    role: "presentation",
                    className: "opl-checkout-header u-spacing-top-l"
                }, n.default.createElement("tbody", null, n.default.createElement("tr", null, n.default.createElement("td", {
                    className: "u-no-padding-l",
                    colSpan: "2"
                }, n.default.createElement("h3", {
                    className: "h3 u-small-no-spacing-bottom"
                }, this.props.title)), n.default.createElement("td", {
                    "aria-hidden": "true",
                    className: "with-spinbox"
                }), n.default.createElement("td", {
                    "aria-hidden": "true",
                    className: "second-last u-font-normal"
                }, this.props.oneTimeHeader), n.default.createElement("td", {
                    "aria-hidden": "true",
                    className: "last u-font-normal"
                }, this.props.monthlyHeader)))), n.default.createElement("div", {
                    className: "o-separator o-separator--m u-medium-visible-hide u-large-visible-hide"
                }), n.default.createElement(r.Expander, {
                    variant: "section",
                    className: "js-stop-sticking-6",
                    scrollToSelected: !1,
                    headerClassName: "opl-section__header--with-summary",
                    summaryClassName: "opl-section__border-bottom",
                    toggleClassName: "h5 opl-checkout-section__heading g-brand1-c"
                }, this.props.entries.map(function(e, t) {
                    return n.default.createElement(s.default, {
                        key: "SummaryDetailsTable_" + t,
                        entry: e,
                        monthlyHeader: l.props.monthlyHeader,
                        oneTimeHeader: l.props.oneTimeHeader,
                        id: l.props.id + "-" + t,
                        checkoutPriceTooltipContent: l.props.checkoutPriceTooltipContent,
                        firstMonthPriceTooltipContent: l.props.firstMonthPriceTooltipContent
                    })
                })), this.props.deliveryMethod && n.default.createElement(d.default, {
                    title: "Dostawa",
                    cost: this.props.deliveryMethod.price.replace(".", ","),
                    render: function(e, t, a) {
                        return l.deliveryCustomRowView(a, l.props.oneTimeHeader, l.props.monthlyHeader, e, t)
                    }
                }), this.props.feeForSelectedPaymentMethod && 0 !== parseInt(this.props.feeForSelectedPaymentMethod) && n.default.createElement(d.default, {
                    title: "Opłata za płatność przy odbiorze",
                    cost: this.props.feeForSelectedPaymentMethod.replace(".", ","),
                    render: function(e, t, a) {
                        return l.deliveryCustomRowView(a, l.props.oneTimeHeader, l.props.monthlyHeader, e, t)
                    }
                }), null != this.props.deposit && 0 < this.props.deposit ? this.depositTableView() : null, n.default.createElement("div", {
                    className: "u-padding-top-xl u-margin-top"
                }, n.default.createElement("a", {
                    href: "#",
                    className: "js-expander__trigger u-padding-left-s u-small-no-padding"
                }, n.default.createElement("span", {
                    className: "js-expander__trigger--hide"
                }, this.props.foldedSectionTriggerLabel), n.default.createElement("span", {
                    className: "js-expander__trigger--show"
                }, this.props.expandedSectionTriggerLabel))))))))
            }
        }, {
            key: "depositTableView",
            value: function() {
                var e = n.default.createElement("span", null, "—"),
                    t = n.default.createElement("span", {
                        className: "h5 g-brand2-c u-no-margin"
                    }, this.props.deposit.toFixed(2).replace(".", ","), " zł");
                return n.default.createElement("div", {
                    className: "l-row"
                }, n.default.createElement("div", {
                    className: "l-col l-col-12"
                }, n.default.createElement("table", {
                    className: "u-spacing-top-l opl-table opl-conf-summary-table opl-table--50-50 opl-table--no-border-top"
                }, n.default.createElement("caption", {
                    className: "u-acc-hide"
                }, "Kaucja"), n.default.createElement("thead", {
                    className: "u-acc-hide"
                }, n.default.createElement("tr", null, n.default.createElement("th", null), n.default.createElement("th", null), n.default.createElement("th", null, this.props.oneTimeHeader), n.default.createElement("th", null, this.props.monthlyHeader))), n.default.createElement("tbody", null, n.default.createElement("tr", {
                    className: "u-small-no-padding"
                }, n.default.createElement("td", {
                    className: "u-w-auto"
                }, n.default.createElement("h3", {
                    className: "h5 g-brand2-c u-no-spacing"
                }, "Kaucja")), n.default.createElement("td", {
                    "data-title": this.props.oneTimeHeader,
                    className: "second-last u-small-no-padding g-brand2-c"
                }, t), n.default.createElement("td", {
                    "data-title": this.props.monthlyHeader,
                    className: "last g-brand2-c td-null"
                }, e))))))
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
        }]), l
    }(n.Component);
    i.propTypes = {
        rootComponent: a.default.string,
        expandedSectionTriggerLabel: a.default.string,
        foldedSectionTriggerLabel: a.default.string,
        feeForSelectedPaymentMethod: a.default.string,
        deliveryMethod: a.default.any
    }, i.defaultProps = {
        expandedSectionTriggerLabel: "Ukryj szczegóły opłat",
        foldedSectionTriggerLabel: "Pokaż szczegóły opłat"
    };
    var u = (0, t.connect)(function(e) {
        return {
            entries: (0, l.getCartSummaryTableRows)(e),
            description: (0, l.getOfferDescription)(e),
            devices: (0, l.getCartDevices)(e) || [],
            deliveryMethod: (0, o.getSelectedDeliveryMethod)(e),
            deposit: (0, l.getDepositCost)(e),
            feeForSelectedPaymentMethod: (0, o.getFeeForSelectedPaymentMethod)(e)
        }
    }, function() {
        return {}
    })(i);
    e.default = u
});
//# sourceMappingURL=SummaryDetails.js.map