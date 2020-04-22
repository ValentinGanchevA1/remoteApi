define(["exports", "react", "./MultiCartItemHeaderComponent", "./MultiCartItemErrorComponent", "./MultiCartItemHeaderMobileComponent", "./MultiCartItemDetailComponent", "./MultiCartItemDetailMobileComponent", "./MultiCartItemMainPriceMobileComponent", "./MultiCartItemAttributeComponent", "./MultiCartItemTooltip", "../../CartDetailsModal", "./MultiCartMnpBenefitComponent", "eshop/flux/utils/OraModalService", "eshop/components/OraStockLevelStatusComponent", "eshop/modules/cart/actions/cart", "../../../selectors", "react-redux", "../BundleTypeEnum", "../VoucherSubType", "eshop/modules/cart/components/entriesList/mobile/ShowVoucherComponent", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/resources"], function(e, c, s, i, l, o, a, p, t, u, h, d, m, f, y, r, n, b, g, v, C, P) {
    "use strict";

    function E(n) {
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
    }), e.default = void 0, c = babelHelpers.interopRequireWildcard(c), s = babelHelpers.interopRequireDefault(s), i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l), o = babelHelpers.interopRequireDefault(o), a = babelHelpers.interopRequireDefault(a), p = babelHelpers.interopRequireDefault(p), t = babelHelpers.interopRequireDefault(t), u = babelHelpers.interopRequireDefault(u), h = babelHelpers.interopRequireDefault(h), d = babelHelpers.interopRequireDefault(d), m = babelHelpers.interopRequireDefault(m), f = babelHelpers.interopRequireDefault(f), b = babelHelpers.interopRequireDefault(b), g = babelHelpers.interopRequireDefault(g), v = babelHelpers.interopRequireDefault(v), C = babelHelpers.interopRequireDefault(C);
    var k = function(e) {
            babelHelpers.inherits(n, e);
            var r = E(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).name = t.props.entry.bundleNo + "_" + t.props.entry.entryNo, t
            }
            return babelHelpers.createClass(n, [{
                key: "onChangeClicked",
                value: function() {
                    if ("function" != typeof this.props.onChange) throw "onChangeClicked should be a function!";
                    this.props.onChangeClicked()
                }
            }, {
                key: "onDetailsClicked",
                value: function() {
                    m.default.open("productDetails-" + this.name)
                }
            }, {
                key: "onMsisdnChangeClicked",
                value: function() {}
            }, {
                key: "onRemoveClicked",
                value: function() {
                    var r = this;
                    if ("" !== this.props.sapReservation) this.props.showErrorMessage(this.props.sapErrorMessage);
                    else {
                        var n = 0;
                        this.props.entries.map(function(e, t) {
                            e.bundleNo === r.props.entry.bundleNo && (e.bundleType === b.default.SIMFREE ? n = e.terminals.length : e.bundleType === b.default.SIMFREE_INST && (n = 1))
                        }), this.props.removeDeviceFromSimfreeBundle(this.props.entry.bundleNo, this.props.entry.entryNo, 1 == n)
                    }
                }
            }, {
                key: "componentWillMount",
                value: function() {
                    var t, r = this;
                    try {
                        t = this.props.entry.details ? JSON.parse(this.props.entry.details) : ""
                    } catch (e) {
                        t = this.props.entry.details
                    }
                    m.default.add(function(e) {
                        return c.default.createElement(h.default, {
                            id: "productDetails-" + r.name,
                            header: "def:Szczegóły oferty",
                            proposition: r.props.entry,
                            details: t
                        })
                    })
                }
            }, {
                key: "calculateInstallmentLength",
                value: function() {
                    var e = this.props.entry;
                    if (e && "TERMINAL" === this.props.type) {
                        var t = e.monthlyPrices && 0 < e.monthlyPrices.length && e.monthlyPrices[e.monthlyPrices.length - 1].monthTo;
                        return t && "Liczba rat za urządzenie: " + t
                    }
                    return ""
                }
            }, {
                key: "getPricePresentationMode",
                value: function(e) {
                    return -1 !== ["TERMINAL", "VAS"].indexOf(e) ? "HIGHEST_MONTHLY_PRICE" : -1 !== ["SIM", "DATA", "GADGET"].indexOf(e) ? "DISCOUNTED_PRICE" : void 0
                }
            }, {
                key: "getFirstNotNullPrice",
                value: function(e) {
                    var t;
                    return !(!e || 0 === e.length) && (0 < (t = e.slice().sort(function(e, t) {
                        return e.price - t.price
                    }).filter(function(e) {
                        return 0 < e.price
                    })).length ? t[0] : e[0])
                }
            }, {
                key: "getPricePresentation",
                value: function(e, t, r, n, s) {
                    var i, l = s && s[g.default.SUBSCRIPTION],
                        o = {
                            mobile: {},
                            desktop: {}
                        },
                        a = this.getFirstNotNullPrice(t);
                    if (-1 !== ["SIM", "DATA"].indexOf(e)) o = {
                        main: a,
                        tooltip: c.default.createElement(u.default, null, n),
                        crossedOut: r && c.default.createElement("span", null, this.getPartsOfPrice(r.price).join(","), " ", r.currency),
                        subtitle: null
                    };
                    else if ("TERMINAL" === e && (l || 1 <= t.length)) {
                        var p = 0 < t.filter(function(e) {
                            return e.netPriceWithoutVouchers > e.netPrice
                        }).length;
                        o = {
                            main: a,
                            tooltip: {
                                id: "terminalTooltip_" + this.props.entry.entryNo,
                                additionalInfo: l && ["opłata miesięczna uwzględnia rabat wynikający z użytego kuponu"],
                                monthlyPayments: t.map(function(e) {
                                    return {
                                        monthFrom: e.monthFrom,
                                        monthTo: e.monthTo,
                                        gross: String(e.priceWithoutVouchers),
                                        price: e.priceWithoutVouchers,
                                        priceGross: e.grossPriceWithoutVouchers,
                                        priceNet: e.netPriceWithoutVouchers,
                                        currency: e.currency
                                    }
                                }),
                                monthlyPaymentsWithBonuses: t,
                                isBonus: !!l || p
                            }
                        }, (l || p) && (o.crossedOut = C.default.formatPrice(a.priceWithoutVouchers) + " " + a.currency)
                    } else t && 1 === t.length ? o = {
                        main: a,
                        tooltip: null,
                        crossedOut: null,
                        subtitle: null
                    } : t && 2 === t.length ? o = {
                        main: t[0],
                        tooltip: null,
                        crossedOut: null,
                        subtitle: c.default.createElement("span", null, this.getPriceSpelling(t[0]), ", potem ", this.getPartsOfPrice(t[1].price).join(","), " ", t[1].currency)
                    } : t && 0 < t.length && (i = this.getHighestMonthlyPrice(t), o = {
                        main: a,
                        tooltip: this.getPricesTooltip(t),
                        crossedOut: c.default.createElement("span", null, this.getPartsOfPrice(i.price).join(","), "&nbsp", i.currency),
                        subtitle: null
                    });
                    return o
                }
            }, {
                key: "isSimfreeInstallmentProcess",
                value: function() {
                    return ["INSTALMENT_SALES_OF_GOODS", "INSTALMENT_SALES_OF_GOODS_NC"].includes(this.props.entry.processType)
                }
            }, {
                key: "lowerInstallmentsClicked",
                value: function(e) {
                    this.props.lowerInstallmentsModalOpen(e)
                }
            }, {
                key: "getTitle",
                value: function() {
                    var e = this.props.entry.planName || this.props.entry.name,
                        t = this.props.entry.colorDefinition && this.props.entry.colorDefinition.name;
                    return e + (t ? " (".concat(t, ")") : "")
                }
            }, {
                key: "render",
                value: function() {
                    var t = this,
                        e = this.getPricePresentation(this.props.type, this.props.entry.monthlyPrices, this.props.entry.monthlyOldPrice, this.props.entry.tooltipCmsContent, this.props.entry.voucherNames),
                        r = [g.default.SUBSCRIPTION, g.default.INSTALLMENT_ONE_TIME];
                    return c.default.createElement("div", {
                        className: "u-position-relative"
                    }, c.default.createElement("div", {
                        className: "u-small-hide u-padding-left-l u-padding-right-l"
                    }, c.default.createElement("table", {
                        className: "u-table-fixed" + (this.props.noBorder ? " u-no-border-top" : " u-border-top")
                    }, c.default.createElement("tbody", null, c.default.createElement(s.default, {
                        title: this.getTitle(),
                        monthlyPricePresentation: e,
                        oneTimePrice: !1,
                        entryType: this.props.type,
                        simFreeOneTimePrice: this.props.entry.checkoutPrice,
                        description: this.props.entry.description,
                        msisdn: this.props.entry.msisdn,
                        processType: this.props.entry.processType,
                        mnpData: this.props.entry.mnpData,
                        imageUrl: this.props.entry.imageUrl,
                        type: this.props.type,
                        onMsisdnChangeClicked: this.onMsisdnChangeClicked.bind(this),
                        onChangeClicked: this.onChangeClicked.bind(this),
                        onRemoveClicked: this.onRemoveClicked.bind(this),
                        onDetailsClicked: this.onDetailsClicked.bind(this),
                        icon: this.props.icon,
                        msisdnVerificationData: this.props.entry.msisdnVerificationData,
                        stockLevelStatus: this.props.entry.stockLevelStatus,
                        shouldStockLevelBeVisible: this.props.entry.shouldStockLevelBeVisible,
                        lowerInstallmentsClicked: this.props.lowerInstallmentsActive ? this.lowerInstallmentsClicked.bind(this, this.props.entry.bundleNo) : void 0,
                        descriptions: this.props.descriptions,
                        installmentDescription: this.calculateInstallmentLength()
                    }), c.default.createElement("tr", null, c.default.createElement("td", {
                        colSpan: "3"
                    }, this.props.entry.voucherNames && r.some(function(e) {
                        return t.props.entry.voucherNames[e]
                    }) && r.filter(function(e) {
                        return t.props.entry.voucherNames[e]
                    }).map(function(e) {
                        return c.default.createElement("div", {
                            key: e
                        }, c.default.createElement(v.default, {
                            entry: t.props.entry,
                            voucherName: t.props.entry.voucherNames[e],
                            voucherSubType: e
                        }))
                    }))), c.default.createElement("tr", null, c.default.createElement("td", {
                        colSpan: "3"
                    }, this.props.entry.voucherNames && this.props.entry.voucherNames[g.default.ACTIVATION] && c.default.createElement(v.default, {
                        entry: this.props.entry,
                        voucherName: this.props.entry.voucherNames[g.default.ACTIVATION],
                        voucherSubType: g.default.ACTIVATION
                    }))), this.props.rejectionReason && 0 < this.props.rejectionReason.length && c.default.createElement(i.default, {
                        rejectionReasons: this.props.rejectionReason
                    }), -1 !== ["SIM", "DATA"].indexOf(this.props.type) && this.props.entry.firstBillPrice && c.default.createElement(o.default, {
                        title: "Opłata aktywacyjna/instalacyjna",
                        oneTimePrice: this.props.entry.firstBillPrice,
                        captionClassName: "u-font-bold",
                        priceless: !1
                    }), this.props.hasOrangeLoveDiscount && c.default.createElement(o.default, {
                        title: "Rabat specjalnie dla Ciebie - za posiadanie Orange LOVE!",
                        priceless: !0
                    }), c.default.createElement("tr", null, c.default.createElement("td", {
                        colSpan: "3"
                    }, c.default.createElement(d.default, {
                        mnpData: this.props.entry.mnpData,
                        processType: this.props.entry.processType,
                        monthlyPrices: this.props.entry.monthlyPrices,
                        tooltip: this.props.entry.tooltipMnpBenefitContent
                    })))))), c.default.createElement("div", {
                        className: "u-hide u-small-block u-padding-top-l" + (this.props.noBorder ? " u-no-border" : " u-border-top")
                    }, c.default.createElement("div", {
                        className: "".concat(f.default.getStockCssClass(this.props.entry.stockLevelStatus))
                    }, c.default.createElement("div", {
                        className: "u-padding-left-l u-padding-right-l u-padding-l"
                    }, !this.isSimfreeInstallmentProcess() && c.default.createElement(p.default, {
                        price: this.props.entry.checkoutPrice.price,
                        currency: this.props.entry.checkoutPrice.currency,
                        tooltip: e.tooltip
                    }), this.isSimfreeInstallmentProcess() && c.default.createElement(p.default, {
                        price: this.props.entry.monthlyPrices[0].gross,
                        currency: this.props.entry.monthlyPrices[0].currency + "/mc"
                    }), e.subtitle && c.default.createElement("div", {
                        className: "u-spacing-top u-font-small g-gray5-c"
                    }, e.subtitle), e.crossedOut && c.default.createElement("div", {
                        className: "u-spacing-top-s u-font-small g-gray5-c u-text-line-through"
                    }, e.crossedOut), this.prepareCrossedOneTimePrice(this.props.entry.checkoutPrice), !this.isSimfreeInstallmentProcess() && this.props.entry.firstBillPrice && !!parseFloat(this.props.entry.firstBillPrice.price) && c.default.createElement(a.default, {
                        title: "+ %1 " + (-1 !== ["SIM", "DATA"].indexOf(this.props.type) ? "aktywacja" : "na start"),
                        price: this.props.entry.firstBillPrice,
                        className: "u-spacing-top-s u-font-small",
                        priceless: !1
                    }), this.isSimfreeInstallmentProcess() && this.props.entry.checkoutPrice && this.props.entry.checkoutPrice.gross && c.default.createElement("div", {
                        className: "u-spacing-top-s u-font-small"
                    }, "+ ", this.props.entry.checkoutPrice.gross, " na start")), c.default.createElement(l.default, {
                        type: this.props.type,
                        imageUrl: this.props.entry.imageUrl,
                        title: this.props.entry.name,
                        description: this.calculateInstallmentLength(),
                        monthlyPricePresentation: e,
                        lowerInstallmentsClicked: this.props.lowerInstallmentsActive ? this.lowerInstallmentsClicked.bind(this, this.props.entry.bundleNo) : void 0
                    })), this.props.hasOrangeLoveDiscount && c.default.createElement(a.default, {
                        title: "Rabat specjalnie dla Ciebie - za posiadanie Orange LOVE!",
                        className: "u-padding-left-l u-padding-right-l u-padding-l",
                        boldTitle: !1,
                        priceless: !0
                    }), c.default.createElement(d.default, {
                        mnpData: this.props.entry.mnpData,
                        processType: this.props.entry.processType,
                        monthlyPrices: this.props.entry.monthlyPrices,
                        tooltip: this.props.entry.tooltipMnpBenefitContent
                    }), c.default.createElement("a", {
                        href: "#",
                        className: "opl-checkout__item__remove u-hide u-small-block",
                        onClick: this.onRemoveClicked.bind(this)
                    }, c.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Usuń"))), c.default.createElement("a", {
                        className: "opl-checkout__item__remove u-hide u-small-hide",
                        onClick: this.onRemoveClicked.bind(this)
                    }, c.default.createElement("span", {
                        className: "u-acc-hide"
                    }, "Usuń")))
                }
            }]), n
        }(t.default),
        N = (0, n.connect)(function(e) {
            return {
                entries: (0, r.getCartEntries)(e)
            }
        }, function(n) {
            return {
                removeDeviceFromSimfreeBundle: function(e, t, r) {
                    return n((0, y.removeDeviceFromSimfreeBundle)(e, t, r))
                },
                showErrorMessage: function(e) {
                    return n((0, y.showErrorMessage)(e))
                },
                lowerInstallmentsModalOpen: function(e) {
                    return n((0, P.lowerInstallmentsModalOpen)(e))
                }
            }
        })(k);
    e.default = N
});
//# sourceMappingURL=MultiCartItemComponent.js.map