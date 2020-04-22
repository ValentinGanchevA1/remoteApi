define(["exports", "react", "./MultiCartItemAttributeComponent", "./MultiCartItemIconCellComponent", "eshop/components/OraStockLevelStatusComponent", "eshop/utils/DataLayerUtils", "eshop/modules/simfree/components/ProductOfferPriceTooltipComponent", "./../utils/CartUtils", "eshop/utils/OnlineUtils", "./VASPackagesPresentationComponent"], function(e, i, t, r, n, l, o, a, p, c) {
    "use strict";

    function u(i) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(i);
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
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r), n = babelHelpers.interopRequireDefault(n), l = babelHelpers.interopRequireDefault(l), o = babelHelpers.interopRequireDefault(o), p = babelHelpers.interopRequireDefault(p), c = babelHelpers.interopRequireDefault(c);

    function d(t) {
        return function(e) {
            e.preventDefault(), t(e)
        }
    }
    var s = function(e) {
        babelHelpers.inherits(s, e);
        var t = u(s);

        function s(e) {
            return babelHelpers.classCallCheck(this, s), t.call(this, e)
        }
        return babelHelpers.createClass(s, [{
            key: "getMsisdnForProcess",
            value: function() {
                return "ACTIVATION" === this.props.processType ? this.props.msisdn ? l.default.processTypeToMsisdnDescriptionMap.ACTIVATION + this.transformMsisdn(this.props.msisdn) : "" : p.default.isAssignment(this.props.processType) ? this.props.msisdn ? l.default.processTypeToMsisdnDescriptionMap[this.props.processType] + this.transformMsisdn(this.props.msisdn) : "" : this.props.msisdnVerificationData ? l.default.processTypeToMsisdnDescriptionMap[this.props.processType] + this.transformMsisdn(this.props.msisdnVerificationData.msisdn) : ""
            }
        }, {
            key: "getMNPApplication",
            value: function() {
                return l.default.processTypeToMsisdnDescriptionMap.MNP_APPLICATION + " " + this.transformMsisdn(this.props.msisdnVerificationData.msisdn)
            }
        }, {
            key: "renderPrice",
            value: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : null;
                return this.props.monthlyPricePresentation.main ? this.renderPriceDesktop(this.props.monthlyPricePresentation.main, this.props.stockLevelStatus, t) : this.renderVoidDesktop()
            }
        }, {
            key: "renderOneTimePrice",
            value: function() {
                return i.default.createElement("div", null, this.renderPriceDesktop(this.props.oneTimePrice, this.props.stockLevelStatus))
            }
        }, {
            key: "showChangeSimButton",
            value: function() {
                return this.props.onMsisdnChangeClicked
            }
        }, {
            key: "showLowerInstallments",
            value: function() {
                return this.props.onChangeClicked && this.props.lowerInstallmentsClicked && !!this.props.monthlyPricePresentation && !!this.props.monthlyPricePresentation.main && (0 != this.props.monthlyPricePresentation.main.price || 0 != this.props.monthlyPricePresentation.main.priceWithoutVouchers)
            }
        }, {
            key: "getClassForPrice",
            value: function() {
                return this.showLowerInstallments() ? "l-col-2 u-padding-xs u-padding-top-l u-padding-left u-text-right" : "l-col-2 u-padding-l u-padding-top-l u-padding-left u-text-right"
            }
        }, {
            key: "render",
            value: function() {
                return i.default.createElement("tr", null, i.default.createElement(r.default, {
                    entryType: this.props.type,
                    image: this.props.imageUrl,
                    icon: this.props.icon,
                    rowSpan: "VAS" === this.props.type ? void 0 : "4",
                    terminalName: this.props.title
                }), i.default.createElement("td", {
                    colSpan: this.props.priceless && "3",
                    className: "u-padding-l u-padding-top-l u-padding-right-l"
                }, i.default.createElement("div", {
                    className: "u-left"
                }, this.props.processName && i.default.createElement("p", {
                    className: "u-font-bold g-gray5-c"
                }, this.props.processName), i.default.createElement("span", {
                    className: "u-font-bold"
                }, this.props.title), i.default.createElement("br", null), this.props.loyaltyLengthDescription && i.default.createElement("p", null, " ", this.props.loyaltyLengthDescription, " "), this.props.instalmentLengthDescription && i.default.createElement("p", null, " ", this.props.instalmentLengthDescription, " "), this.props.editable && this.props.processType && [this.props.simCard && (0, a.createSimCardDescription)(this.props.simCard), this.getMsisdnForProcess(), this.showChangeSimButton.apply(this) && i.default.createElement("a", {
                    className: "u-spacing-left",
                    href: "#",
                    key: "msisdnChangeClicked_key",
                    onClick: d(this.props.onMsisdnChangeClicked),
                    "aria-label": "zmień numer telefonu lub rodzaj karty sim"
                }, "Zmień")], i.default.createElement(c.default, {
                    editable: this.props.editable,
                    onVasPackagesChangeClicked: this.props.changePackages,
                    vases: this.props.vases,
                    bundleCode: this.props.bundleCode
                }), p.default.isAssignment(this.props.processType) && this.getMsisdnForProcess(), p.default.isMnpApplication(this.props.processType) && this.getMNPApplication(), this.props.editable && i.default.createElement("div", {
                    className: "u-spacing-top"
                }, this.props.onChangeClicked && i.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l",
                    onClick: d(this.props.onChangeClicked),
                    "aria-label": "zmień " + this.props.title
                }, "Zmień"), this.props.onDetailsClicked && i.default.createElement("a", {
                    href: "#",
                    className: "u-spacing-right-l",
                    onClick: d(this.props.onDetailsClicked),
                    "aria-label": "wyświetl szczegółowy opis dla " + this.props.title
                }, "Szczegóły"), this.props.onRemoveClicked && i.default.createElement("a", {
                    href: "#",
                    onClick: d(this.props.onRemoveClicked),
                    "aria-label": "usuń " + this.props.title + " z koszyka"
                }, "Usuń"))), i.default.createElement("div", {
                    className: "u-right",
                    style: {
                        width: "50%"
                    }
                }, i.default.createElement(n.default, {
                    stockLevelStatus: this.props.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.shouldStockLevelBeVisible
                }))), !this.props.priceless && i.default.createElement("td", {
                    className: "l-col-2 u-padding-l u-padding-top-l u-padding-right u-text-right"
                }, i.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty jednorazowe"), this.props.oneTimePrice ? this.renderOneTimePrice() : this.renderVoidDesktop(), this.props.oneTimePrice.crossedOut && i.default.createElement("del", {
                    className: "h4 u-font-small g-gray5-c u-inline-block"
                }, this.props.oneTimePrice.crossedOut)), !this.props.priceless && i.default.createElement("td", {
                    className: this.getClassForPrice()
                }, i.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Opłaty miesięczne"), this.props.monthlyPricePresentation.tooltip && !p.default.isAssignment(this.props.processType) ? i.default.createElement(o.default, babelHelpers.extends({
                    key: this.props.monthlyPricePresentation.tooltip.id
                }, this.props.monthlyPricePresentation.tooltip), this.renderPrice()) : this.renderPrice(), this.props.monthlyPricePresentation.crossedOut && i.default.createElement("del", {
                    className: "h4 u-font-small g-gray5-c u-inline-block"
                }, this.props.monthlyPricePresentation.crossedOut), this.props.monthlyPricePresentation.subtitle && i.default.createElement("div", {
                    className: "g-gray5-c u-font-small u-clear-both"
                }, this.props.monthlyPricePresentation.subtitle), this.showLowerInstallments() && i.default.createElement("div", null, i.default.createElement("a", {
                    className: "u-spacing-left",
                    href: "#",
                    key: "lowerInstallmentsClicked_key",
                    onClick: d(this.props.lowerInstallmentsClicked),
                    "aria-label": "Obniż raty"
                }, !!this.props.descriptions && this.props.descriptions.lowerInstallments || "Obniż raty"))))
            }
        }]), s
    }(t.default);
    e.default = s
});
//# sourceMappingURL=MultiCartItemHeaderComponent.js.map