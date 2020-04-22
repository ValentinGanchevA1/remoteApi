define(["exports", "react", "./MultiCartItemAttributeComponent", "./MultiCartItemIconCellComponent", "eshop/components/OraStockLevelStatusComponent", "eshop/utils/OnlineUtils", "eshop/modules/simfree/components/ProductOfferPriceTooltipComponent"], function(e, r, t, i, l, a, n) {
    "use strict";

    function o(r) {
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
                var s = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, s)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r), t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n);

    function p(t) {
        return function(e) {
            e.preventDefault(), t(e)
        }
    }
    var s = function(e) {
        babelHelpers.inherits(s, e);
        var t = o(s);

        function s(e) {
            return babelHelpers.classCallCheck(this, s), t.call(this, e)
        }
        return babelHelpers.createClass(s, [{
            key: "createDescription",
            value: function() {
                switch (this.props.processType) {
                    case "INSTALMENT_SALES_OF_GOODS":
                    case "INSTALMENT_SALES_OF_GOODS_NC":
                        return this.createInstallmentDescription.apply(this);
                    default:
                        return this.createDefaultDescription.apply(this)
                }
            }
        }, {
            key: "createInstallmentDescription",
            value: function() {
                return r.default.createElement("td", {
                    colSpan: this.props.priceless && "3",
                    className: "u-padding-right-l"
                }, r.default.createElement("div", {
                    className: "u-padding-top-l u-padding-l"
                }, r.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.title), r.default.createElement("div", {
                    className: "u-spacing"
                }, this.props.installmentDescription), r.default.createElement("div", null, r.default.createElement("a", {
                    href: "#",
                    onClick: p(this.props.onRemoveClicked),
                    "aria-label": "usuń pozycję z koszyka"
                }, "Usuń"))))
            }
        }, {
            key: "showLowerInstallments",
            value: function() {
                return this.props.onChangeClicked && this.props.lowerInstallmentsClicked && !!this.props.monthlyPricePresentation && !!this.props.monthlyPricePresentation.main && (0 != this.props.monthlyPricePresentation.main.price || 0 != this.props.monthlyPricePresentation.main.priceWithoutVouchers)
            }
        }, {
            key: "createDefaultDescription",
            value: function() {
                return r.default.createElement("td", {
                    colSpan: this.props.priceless && "3",
                    className: "u-padding-l u-padding-top-l u-padding-right-l"
                }, r.default.createElement("div", {
                    className: "u-left"
                }, r.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.title), r.default.createElement("br", null), this.props.description && r.default.createElement("div", null, this.props.description), this.props.msisdn && "ACTIVATION" === this.props.processType && r.default.createElement("div", null, "nowy numer ", this.transformMsisdn(this.props.msisdn), " ", r.default.createElement("a", {
                    onClick: this.props.onMsisdnChangeClicked,
                    className: "u-spacing-left"
                }, "Zmień")), this.props.msisdn && a.default.isMnp(this.props.processType) && r.default.createElement("div", null, "przenoszę numer ", this.transformMsisdn(this.props.mnpData.msisdn)), "SALE_OF_GOODS" !== this.props.processType && r.default.createElement("div", {
                    className: "u-spacing-top"
                }, r.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l",
                    onClick: this.props.onChangeClicked,
                    "aria-label": "zmień"
                }, "Zmień"), r.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l",
                    onClick: this.props.onDetailsClicked,
                    "aria-label": "wyświetl szczegółowy opis"
                }, "Szczegóły"), r.default.createElement("a", {
                    href: "#",
                    onClick: p(this.props.onRemoveClicked),
                    "aria-label": "usuń pozycję z koszyka"
                }, "Usuń")), "SALE_OF_GOODS" === this.props.processType && r.default.createElement("div", {
                    className: "u-spacing-top"
                }, r.default.createElement("a", {
                    href: "#",
                    onClick: p(this.props.onRemoveClicked),
                    "aria-label": "usuń pozycję z koszyka"
                }, "Usuń"))), r.default.createElement("div", {
                    className: "u-right",
                    style: {
                        width: "50%"
                    }
                }, r.default.createElement(l.default, {
                    stockLevelStatus: this.props.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.shouldStockLevelBeVisible
                })))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.showLowerInstallments();
                return r.default.createElement("tr", null, r.default.createElement(i.default, {
                    rowSpan: "5",
                    entryType: this.props.type,
                    image: this.props.imageUrl,
                    icon: this.props.icon,
                    terminalName: this.props.title
                }), this.createDescription.apply(this), !this.props.priceless && !this.props.simFreeOneTimePrice && r.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, r.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty jednorazowe"), r.default.createElement("div", null, this.props.oneTimePrice ? this.renderPriceDesktop(this.props.oneTimePrice, this.props.stockLevelStatus) : this.renderVoidDesktop()), this.prepareCrossedOneTimePrice(this.props.simFreeOneTimePrice)), !this.props.priceless && "TERMINAL" === this.props.entryType && void 0 !== this.props.simFreeOneTimePrice && r.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, r.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty jednorazowe"), r.default.createElement("div", null, this.renderPriceDesktop(this.props.simFreeOneTimePrice, this.props.stockLevelStatus)), this.prepareCrossedOneTimePrice(this.props.simFreeOneTimePrice)), !this.props.priceless && r.default.createElement("td", {
                    className: "l-col-2 u-padding-top-l u-padding-right u-text-right" + (e ? "" : " u-padding-l")
                }, r.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty miesięczne"), this.props.monthlyPricePresentation.tooltip ? r.default.createElement(n.default, babelHelpers.extends({
                    key: this.props.monthlyPricePresentation.tooltip.id
                }, this.props.monthlyPricePresentation.tooltip), this.renderPrice("u-table-cell u-vertical-middle")) : this.renderPrice(), this.props.monthlyPricePresentation.crossedOut && r.default.createElement("div", {
                    className: "g-gray5-c u-font-bold u-text-line-through u-clear-both"
                }, this.props.monthlyPricePresentation.crossedOut), this.props.monthlyPricePresentation.subtitle && r.default.createElement("div", {
                    className: "g-gray5-c u-font-small u-clear-both"
                }, this.props.monthlyPricePresentation.subtitle), e && r.default.createElement("div", null, r.default.createElement("a", {
                    className: "u-spacing-left",
                    href: "#",
                    key: "lowerInstallmentsClicked_key",
                    onClick: p(this.props.lowerInstallmentsClicked),
                    "aria-label": "Obniż raty"
                }, !!this.props.descriptions && this.props.descriptions.lowerInstallments || "Obniż raty"))))
            }
        }]), s
    }(t.default);
    e.default = s
});
//# sourceMappingURL=MultiCartItemHeaderComponent.js.map