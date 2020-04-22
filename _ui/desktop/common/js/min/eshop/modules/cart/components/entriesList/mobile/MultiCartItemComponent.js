define(["exports", "react", "react-redux", "./MultiCartItemHeaderComponent", "./MultiCartItemErrorComponent", "./MultiCartItemHeaderMobileComponent", "./MultiCartItemDetailComponent", "./MultiCartItemDetailMobileComponent", "./MultiCartItemMainPriceMobileComponent", "./MultiCartItemAttributeComponent", "../shared/MultiCartRemovePopup", "eshop/flux/utils/OraModalService", "eshop/modules/configurator/components/stateless/Discount", "eshop/components/OraStockLevelStatusComponent", "eshop/modules/cart/actions/cart", "eshop/modules/core/components/ui/RWDUtils", "./ShowVoucherComponent", "./ShowVoucherMobileComponent", "eshop/utils/OnlineUtils", "../VoucherSubType"], function(e, f, t, p, l, a, c, u, d, r, i, o, h, m, s, y, b, g, P, v) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, s)
        }
        return r
    }

    function C(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function N(s) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(s);
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
    }), e.default = void 0, f = babelHelpers.interopRequireDefault(f), p = babelHelpers.interopRequireDefault(p), l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a), c = babelHelpers.interopRequireDefault(c), u = babelHelpers.interopRequireDefault(u), d = babelHelpers.interopRequireDefault(d), r = babelHelpers.interopRequireDefault(r), i = babelHelpers.interopRequireDefault(i), o = babelHelpers.interopRequireDefault(o), h = babelHelpers.interopRequireDefault(h), m = babelHelpers.interopRequireDefault(m), b = babelHelpers.interopRequireDefault(b), g = babelHelpers.interopRequireDefault(g), P = babelHelpers.interopRequireDefault(P), v = babelHelpers.interopRequireDefault(v);
    var k = function(e) {
        babelHelpers.inherits(s, e);
        var r = N(s);

        function s(e) {
            var t;
            return babelHelpers.classCallCheck(this, s), (t = r.call(this, e)).name = t.props.entry.bundleNo + "_" + t.props.entry.entryNo, t
        }
        return babelHelpers.createClass(s, [{
            key: "openTerminalRemovePopup",
            value: function(e) {
                o.default.open("remove-terminal-from-cart-bundle-modal-" + e.entryNo)
            }
        }, {
            key: "registerTerminalRemovePopup",
            value: function(t) {
                var r = this;
                o.default.add(function(e) {
                    return f.default.createElement(i.default, babelHelpers.extends({}, r.props.removeModalTexts, {
                        id: "remove-terminal-from-cart-bundle-modal-" + t.entryNo,
                        onClickRemove: r.props.removeTerminalFromCartBundle.bind(r, null, t.entryNo),
                        textRepresentation: t.name
                    }))
                })
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
            key: "getColorName",
            value: function(e) {
                if (e.setElements && e.setElements.length) {
                    var t = "(";
                    return e.setElements.forEach(function(e) {
                        return t = t + e.color + ","
                    }), " " + t.replace(/,$/, ")")
                }
                return e.colorDefinition ? " (" + e.colorDefinition.name + ")" : ""
            }
        }, {
            key: "getEntryName",
            value: function(e, t) {
                switch (e) {
                    case "SIM":
                        return t.planName;
                    case "TERMINAL":
                        return t.name + (-1 === t.productCode.indexOf(s.couponDistinctiveCodePart) ? this.getColorName(t) : "");
                    case "VAS":
                        return t.name;
                    default:
                        return t.planName || t.name
                }
            }
        }, {
            key: "getPricePresentation",
            value: function(e, t, r, s, i, o) {
                var n, p = {
                        mobile: {},
                        desktop: {}
                    },
                    l = this.getFirstNotNullPrice(r),
                    a = !!s && s.price > l.price,
                    c = "noVoucher",
                    u = a && !!this.props.tooltipValues && this.props.tooltipValues.convergent || !!this.props.tooltipValues && this.props.tooltipValues.notConvergent,
                    d = [];
                P.default.isMnp(this.props.entry.processType) && this.props.entry.mnpDescription && d.push(P.default.stripStringFromHTML(this.props.entry.mnpDescription)), P.default.isAssignment(this.props.entry.processType) ? l = r && 0 < r.length ? r[0] : l : d.push(u);
                var h = o && o[v.default.SUBSCRIPTION];
                h && this.props.tooltipValues && (d.push(this.props.tooltipValues.voucherDiscountInfo), c = "voucherPresent");
                var m = h && 0 < r.filter(function(e) {
                    return e.netPriceWithoutVouchers !== e.netPrice
                }).length;
                if (-1 !== ["SIM", "DATA"].indexOf(t)) p = {
                    main: l,
                    crossedOut: a && f.default.createElement("span", null, this.getPartsOfPrice(s.price).join(","), " ", s.currency),
                    subtitle: null,
                    tooltip: {
                        id: e.entryType + "_" + e.bundleType + "_" + e.bundleNo + "_" + e.entryNo + "_" + c,
                        additionalInfo: d,
                        monthlyPayments: a ? e.monthlyOldPrices : e.monthlyPrices,
                        monthlyPaymentsWithBonuses: a ? e.monthlyPrices : null,
                        isBonus: a,
                        baseId: "cart_" + e.bundleNo + "_" + e.entryNo
                    }
                };
                else if ("TERMINAL" === t && (m || 1 <= r.length)) {
                    var y = 0 < r.filter(function(e) {
                        return e.netPriceWithoutVouchers > e.netPrice
                    }).length;
                    p = {
                        main: l,
                        tooltip: {
                            id: "terminalTooltip_" + e.entryNo,
                            additionalInfo: m && ["opłata miesięczna uwzględnia rabat wynikający z użytego kuponu"],
                            monthlyPayments: r.map(function(e) {
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
                            monthlyPaymentsWithBonuses: e.monthlyPrices,
                            isBonus: !!m || y
                        }
                    }, (m || y) && (p.crossedOut = P.default.formatPrice(l.priceWithoutVouchers) + " " + l.currency)
                } else r && 1 === r.length ? p = {
                    main: l,
                    tooltip: null,
                    crossedOut: null,
                    subtitle: null
                } : r && 2 === r.length ? p = {
                    main: r[0],
                    tooltip: null,
                    crossedOut: null,
                    subtitle: f.default.createElement("span", null, " ", this.getPriceSpelling(r[0]), ",", f.default.createElement("br", null), "potem ", this.getPartsOfPrice(r[1].price).join(","), " ", r[1].currency)
                } : r && 0 < r.length && (n = this.getHighestMonthlyPrice(r), p = {
                    main: l,
                    tooltip: this.getPricesTooltip(r),
                    crossedOut: f.default.createElement("span", null, this.getPartsOfPrice(n.price).join(","), "&nbsp", n.currency),
                    subtitle: null
                });
                return P.default.isMnpApplication(this.props.entry.processType) && (p = {
                    main: !1,
                    tooltip: null,
                    crossedOut: null,
                    subtitle: null
                }), p
            }
        }, {
            key: "prepareOneTimePrice",
            value: function(e, t, r) {
                var s = "TERMINAL" === t && e[r] && e[r].netPriceWithoutVouchers !== e[r].netPrice,
                    i = P.default.formatPrice(e[r].priceWithoutVouchers) + " " + e[r].currency;
                return s && (e.voucherNames || "checkoutPrice" === r) ? C({}, e[r], {
                    crossedOut: i
                }) : -1 === ["SIM", "DATA"].indexOf(t) || "firstBillPrice" !== r && !P.default.isAssignment(this.props.entry.processType) ? e[r] : this.fillOneTimeCrossedOutPrice(e)
            }
        }, {
            key: "fillOneTimeCrossedOutPrice",
            value: function(e) {
                return e.oneTimeOldPrice && e.firstBillPrice && e.firstBillPrice.price < e.oneTimeOldPrice.price ? C({}, e.firstBillPrice, {
                    crossedOut: P.default.formatPrice(e.oneTimeOldPrice.price) + " " + e.oneTimeOldPrice.currency
                }) : e.firstBillPrice
            }
        }, {
            key: "componentDidMount",
            value: function() {
                "TERMINAL" === this.props.type && this.registerTerminalRemovePopup(this.props.entry)
            }
        }, {
            key: "render",
            value: function() {
                var i = this,
                    e = this.getPricePresentation(this.props.entry, this.props.type, this.props.entry.monthlyPrices, this.props.entry.monthlyOldPrice, this.props.entry.tooltipCmsContent, this.props.entry.voucherNames),
                    t = this.props.topBorder ? "u-table-fixed u-border-top" : "u-table-fixed",
                    r = this.props.entry.monthlyPrices && 0 < this.props.entry.monthlyPrices.length && this.props.entry.monthlyPrices[this.props.entry.monthlyPrices.length - 1].monthTo,
                    s = r && "TERMINAL" === this.props.type && "Liczba rat za urządzenie: " + r,
                    o = !this.props.showStartPriceAsActivation && !P.default.isMnpApplication(this.props.entry.processType) && this.prepareOneTimePrice(this.props.entry, this.props.type, this.props.startPricePropertyName),
                    n = [v.default.SUBSCRIPTION, v.default.INSTALLMENT_ONE_TIME];
                return f.default.createElement("div", {
                    className: "u-position-relative"
                }, f.default.createElement(y.ResponsiveVisibility, {
                    mobile: !1,
                    key: "desktopView" + this.props.type + this.props.entry.entryNo + this.props.entry.bundleNo
                }, f.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l"
                }, f.default.createElement("table", {
                    className: t
                }, f.default.createElement("tbody", null, f.default.createElement(p.default, {
                    key: "desktopViewItemHeader",
                    title: this.getEntryName(this.props.type, this.props.entry),
                    monthlyPricePresentation: e,
                    oneTimePrice: o,
                    description: this.props.entry.description,
                    msisdn: this.props.entry.msisdn,
                    processType: this.props.entry.processType,
                    mnpData: this.props.entry.mnpData,
                    imageUrl: this.props.entry.imageUrl,
                    type: this.props.type,
                    onMsisdnChangeClicked: this.props.onMsisdnChangeClicked,
                    lowerInstallmentsClicked: this.props.lowerInstallmentsClicked,
                    descriptions: this.props.descriptions,
                    onChangeClicked: this.props.editable && this.props.onChangeClicked,
                    onRemoveClicked: this.props.editable && this.props.onRemoveClicked,
                    onDetailsClicked: this.props.editable && this.props.onDetailsClicked,
                    icon: this.props.icon ? this.props.icon : this.props.entry.thumbnailIcon,
                    simCard: this.props.entry.simCard,
                    msisdnVerificationData: this.props.entry.msisdnVerificationData,
                    loyaltyLengthDescription: P.default.isMnpApplication(this.props.entry.processType) ? null : this.props.entry.loyaltyLengthDescription,
                    instalmentLengthDescription: s,
                    stockLevelStatus: this.props.entry.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.entry.shouldStockLevelBeVisible,
                    editable: this.props.editable,
                    processName: this.props.processName,
                    vases: this.props.entry.vases,
                    bundleCode: this.props.entry.bundleCode,
                    changePackages: this.props.changePackages
                }), this.props.entry.rejectionReason && 0 < this.props.entry.rejectionReason.length && f.default.createElement(l.default, {
                    rejectionReasons: this.props.entry.rejectionReason
                }), this.props.editable && this.props.entry.kdrDescription && f.default.createElement(c.default, {
                    hideBorder: !0,
                    removeTopPadding: !0,
                    priceless: !0
                }, f.default.createElement(h.default, {
                    value: this.props.entry.kdrDescription,
                    simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-white1-c g-black1-bg"
                })), this.props.editable && this.props.entry.mnpDescription && f.default.createElement(c.default, {
                    hideBorder: !0,
                    removeTopPadding: !0,
                    priceless: !0
                }, f.default.createElement(h.default, {
                    value: this.props.entry.mnpDescription,
                    simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg"
                })), this.props.entry.voucherNames && n.some(function(e) {
                    return i.props.entry.voucherNames[e]
                }) && f.default.createElement(c.default, {
                    priceless: !0,
                    hideBorder: !0,
                    removeDownPadding: !0,
                    removeTopPadding: !0,
                    removeRightPadding: !0
                }, n.filter(function(e) {
                    return i.props.entry.voucherNames[e]
                }).map(function(e) {
                    return f.default.createElement("div", {
                        key: e
                    }, f.default.createElement(b.default, {
                        entry: i.props.entry,
                        voucherName: i.props.entry.voucherNames[e],
                        voucherSubType: e,
                        lowerInstallmentsVisible: !!i.props.lowerInstallmentsClicked && "TERMINAL" === i.props.type
                    }))
                })), this.props.showStartPriceAsActivation && this.props.entry[this.props.startPricePropertyName] && f.default.createElement(c.default, {
                    key: "desktopViewItemDetail",
                    title: "RETENTION" === this.props.entry.processType ? "Opłata za realizację oferty utrzymaniowej" : "Opłata aktywacyjna/instalacyjna",
                    oneTimePrice: "firstBillPrice" === this.props.startPricePropertyName || P.default.isAssignment(this.props.entry.processType) ? this.fillOneTimeCrossedOutPrice(this.props.entry) : this.props.entry[this.props.startPricePropertyName],
                    captionClassName: "u-font-bold",
                    priceless: !1
                }), this.props.entry.voucherNames && this.props.entry.voucherNames[v.default.ACTIVATION] && f.default.createElement(c.default, {
                    key: "desktopViewItemDetailVoucher",
                    priceless: !0,
                    hideBorder: !0,
                    removeDownPadding: !0,
                    removeTopPadding: !0,
                    removeRightPadding: !0
                }, f.default.createElement(b.default, {
                    entry: this.props.entry,
                    voucherName: this.props.entry.voucherNames[v.default.ACTIVATION],
                    voucherSubType: v.default.ACTIVATION
                })), this.props.editable && this.props.entry.orangeLoveDiscountDesc && f.default.createElement(c.default, {
                    key: "desktopViewItemDiscount",
                    priceless: !0
                }, f.default.createElement(h.default, {
                    value: this.props.entry.orangeLoveDiscountDesc
                })))))), f.default.createElement(y.ResponsiveVisibility, {
                    desktop: !1,
                    mobile: !0,
                    key: "mobileView" + this.props.type + this.props.entry.entryNo + this.props.entry.bundleNo
                }, f.default.createElement("div", {
                    className: "u-padding-top-l" + (this.props.bottomBorder ? " u-small-border-bottom" : "")
                }, f.default.createElement("div", {
                    className: "u-padding-left-l u-padding-right-l u-padding-l ".concat(m.default.getStockCssClass(this.props.entry.stockLevelStatus))
                }, f.default.createElement("div", null, f.default.createElement(d.default, {
                    price: e.main,
                    tooltip: e.tooltip
                })), e.subtitle && f.default.createElement("div", {
                    className: "u-spacing-top u-font-small g-gray5-c"
                }, e.subtitle), e.crossedOut && f.default.createElement("div", {
                    className: "u-spacing-top-s u-font-small g-gray5-c u-text-line-through"
                }, e.crossedOut), this.props.startPricePropertyName && this.props.entry[this.props.startPricePropertyName] && !!parseFloat(this.props.entry[this.props.startPricePropertyName].price) && f.default.createElement(u.default, {
                    key: "mobileViewItemHeader",
                    title: "+ %1" + (-1 !== ["SIM", "DATA"].indexOf(this.props.type) ? "RETENTION" === this.props.entry.processType ? "/za utrzymanie" : "/aktywacja" : " na start"),
                    price: this.prepareOneTimePrice(this.props.entry, this.props.type, this.props.startPricePropertyName),
                    className: "u-spacing-top-s u-font-small",
                    priceless: !1
                })), this.props.entry.orangeLoveDiscountDesc && f.default.createElement(u.default, {
                    key: "mobileViewItemDetail",
                    className: "u-padding-left-l"
                }, f.default.createElement(h.default, {
                    value: this.props.entry.orangeLoveDiscountDesc,
                    showOnMobile: !0
                })), this.props.entry.kdrDescription && f.default.createElement(u.default, {
                    key: "mobileViewItemDetailKDR"
                }, f.default.createElement(h.default, {
                    value: this.props.entry.kdrDescription,
                    showOnMobile: !0,
                    simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-white1-c g-black1-bg"
                })), this.props.entry.mnpDescription && f.default.createElement(u.default, {
                    key: "mobileViewItemDetailMNP"
                }, f.default.createElement(h.default, {
                    value: this.props.entry.mnpDescription,
                    showOnMobile: !0,
                    simpleWrapperClassName: "u-padding-top u-padding u-padding-left-l u-padding-right-l g-yellowf-bg u-margin"
                })), this.props.entry.voucherNames && Object.entries(this.props.entry.voucherNames).map(function(e) {
                    var t = babelHelpers.slicedToArray(e, 2),
                        r = t[0],
                        s = t[1];
                    return f.default.createElement(g.default, {
                        key: r,
                        entry: i.props.entry,
                        voucherSubType: r,
                        lowerInstallmentsVisible: !!i.props.lowerInstallmentsClicked && "TERMINAL" === i.props.type,
                        voucherName: s
                    })
                }), f.default.createElement(a.default, {
                    key: "mobileViewItemHeader",
                    title: this.getEntryName(this.props.type, this.props.entry),
                    description: this.props.entry.description,
                    msisdn: this.props.entry.msisdn,
                    imageUrl: this.props.entry.imageUrl,
                    type: this.props.type,
                    processType: this.props.entry.processType,
                    mnpData: this.props.entry.mnpData,
                    onMsisdnChangeClicked: this.props.onMsisdnChangeClicked,
                    lowerInstallmentsClicked: "TERMINAL" === this.props.type ? this.props.lowerInstallmentsClicked : void 0,
                    monthlyPricePresentation: e,
                    descriptions: this.props.descriptions,
                    onChangeClicked: this.props.onChangeClicked,
                    onRemoveClicked: this.props.onRemoveClicked,
                    onDetailsClicked: this.props.onDetailsClicked,
                    simCard: this.props.entry.simCard,
                    msisdnVerificationData: this.props.entry.msisdnVerificationData,
                    loyaltyLengthDescription: this.props.entry.loyaltyLengthDescription,
                    instalmentLengthDescription: s,
                    icon: this.props.icon ? this.props.icon : this.props.entry.thumbnailIcon,
                    stockLevelStatus: this.props.entry.stockLevelStatus,
                    shouldStockLevelBeVisible: this.props.entry.shouldStockLevelBeVisible,
                    editable: this.props.editable,
                    changeAllowed: "DATA" !== this.props.entry.bundleType && "MNP" !== this.props.entry.processType,
                    vases: this.props.entry.vases,
                    bundleCode: this.props.entry.bundleCode,
                    changePackages: this.props.changePackages
                }))), this.props.editable && f.default.createElement("a", {
                    className: "opl-checkout__item__remove u-hide u-small-block",
                    onClick: this.props.onRemoveClicked
                }, f.default.createElement("span", {
                    className: "u-acc-hide"
                }, "Usuń")))
            }
        }]), s
    }(r.default);
    babelHelpers.defineProperty(k, "couponDistinctiveCodePart", "DEV_KUPON"), k.defaultProps = {
        editable: !0
    };
    var D = (0, t.connect)(null, function(r) {
        return {
            removeTerminalFromCartBundle: function(e, t) {
                return r((0, s.removeTerminalFromCartBundle)(e, t))
            }
        }
    })(k);
    e.default = D
});
//# sourceMappingURL=MultiCartItemComponent.js.map