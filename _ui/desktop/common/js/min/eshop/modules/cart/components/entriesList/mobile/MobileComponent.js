define(["exports", "react", "../shared/MultiCartExpandingSectionComponent", "./MultiCartMobileCollapsedItemComponent", "./MultiCartAssignmentInstalmentComponent", "./MultiCartAssignmentDeathComponent", "react-redux", "eshop/flux/utils/OraModalService", "./MultiCartRemovePopup", "eshop/modules/cart/actions/cart", "./productEntries/ServiceEntryComponent", "./productEntries/TerminalEntriesListComponent", "./productEntries/VasEntriesListComponent", "./productModals/VasBuyMoreComponent", "./productModals/SelectRetentionBonusComponent", "./productModals/BuyMoreProductsComponent", "../../../selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/cart/selectors"], function(e, v, n, s, g, C, t, l, i, o, E, M, R, B, T, k, p, a, u) {
    "use strict";

    function c(o) {
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
    }), e.default = void 0, v = babelHelpers.interopRequireWildcard(v), n = babelHelpers.interopRequireDefault(n), s = babelHelpers.interopRequireDefault(s), g = babelHelpers.interopRequireDefault(g), C = babelHelpers.interopRequireDefault(C), l = babelHelpers.interopRequireDefault(l), i = babelHelpers.interopRequireDefault(i), E = babelHelpers.interopRequireDefault(E), M = babelHelpers.interopRequireDefault(M), R = babelHelpers.interopRequireDefault(R), B = babelHelpers.interopRequireDefault(B), T = babelHelpers.interopRequireDefault(T), k = babelHelpers.interopRequireDefault(k);
    var r = function(e) {
            babelHelpers.inherits(o, e);
            var r = c(o);

            function o(e) {
                var t;
                return babelHelpers.classCallCheck(this, o), (t = r.call(this, e)).addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(o, [{
                key: "openRemovePopup",
                value: function(e) {
                    "" !== this.props.sapReservation ? this.props.showErrorMessage(this.props.sapErrorMessage) : l.default.open("remove-from-cart-modal-" + e.bundleNo, {
                        bundleNo: e.bundleNo,
                        offerIndex: e.bundleNo
                    })
                }
            }, {
                key: "registerRemovePopup",
                value: function(t) {
                    var r = this;
                    l.default.add(function(e) {
                        return v.default.createElement(i.default, babelHelpers.extends({}, r.props, r.getRemoveModalTexts("SERVICE"), {
                            id: "remove-from-cart-modal-" + t.bundleNo,
                            bundleNo: t.bundleNo,
                            onClickRemove: r.props.removeFromCart.bind(r, null, t.bundleNo),
                            textRepresentation: t.planName
                        }))
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.registerRemovePopup(this.props.entry)
                }
            }, {
                key: "getRemoveModalTexts",
                value: function(e) {
                    switch (e) {
                        case "SERVICE":
                            return {
                                title: this.props.sectionConf.deleteEntryPopupTitle, content: this.props.sectionConf.deleteEntryPopupContent, decline: this.props.sectionConf.declineDeleteEntryPopupButtonLabel, confirm: this.props.sectionConf.confirmDeleteEntryPopupButtonLabel
                            };
                        case "TERMINAL":
                            return {
                                title: this.props.sectionConf.deleteTerminalPopupTitle, content: this.props.sectionConf.deleteTerminalPopupContent, decline: this.props.sectionConf.declineDeleteTerminalPopupButtonLabel, confirm: this.props.sectionConf.confirmDeleteTerminalPopupButtonLabel
                            }
                    }
                }
            }, {
                key: "addButtonClicked",
                value: function() {
                    if (this.props.setFilters(this.props.entry.bundleNo), this.props.baseProductId) {
                        var e = this.props.isB2B ? "/male-firmy/sklep" : "/sklep";
                        window.location = e + "?serviceplan=" + this.props.baseProductId + "&propositionId=" + this.props.entry.bundleCode
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var y = this,
                        m = this.props.sectionConf ? this.props.sectionConf.icon : "sim",
                        e = this.props.sectionConf ? this.props.sectionConf.sectionTitle : "Usługa mobilna",
                        b = this.props.sectionConf.productSections,
                        h = this.props.idx,
                        t = "ost-" + this.props.entry.bundleNo;
                    return v.default.createElement(n.default, {
                        title: e,
                        key: "expandingSection_" + h,
                        entry: this.props.entry,
                        conf: this.props.sectionConf,
                        onRemoveClicked: this.openRemovePopup.bind(this, this.props.entry),
                        trigger: t,
                        isB2B: this.props.isB2B
                    }, v.default.createElement("div", {
                        className: "l-full-row"
                    }, v.default.createElement("div", {
                        className: "l-page-row u-small-padding-left u-small-padding-right"
                    }, v.default.createElement("div", {
                        className: "u-padding-top u-padding"
                    }, b && b.map(function(e, t) {
                        switch (e.entryType) {
                            case "SERVICE":
                                y.props.entry && e.buyMoreLabel;
                                var r = y.props.entry ? e.sectionTitle : null,
                                    o = b.find(function(e) {
                                        return "TERMINAL" === e.entryType
                                    }),
                                    n = o && (!y.props.entry.terminals || o.limitForBuyMoreButton) >= y.props.entry.terminals.length ? o.buyMoreLabel : null,
                                    s = (o && y.props.entry.terminals && y.props.entry.terminals.length && o.sectionTitle, o && y.props.entry.terminals && 0 < y.props.entry.terminals.length),
                                    l = o && y.props.entry.euroSets && 0 < y.props.entry.euroSets.length,
                                    i = !s && !l && !["ASSIGNMENT", "MNP_APPLICATION"].includes(y.props.entry.processType);
                                return v.default.createElement("div", {
                                    key: "ServiceWrapper" + t
                                }, v.default.createElement(N, {
                                    key: "productSectionWrapper_" + t,
                                    entry: y.props.entry,
                                    sectionTitle: r,
                                    className: "u-box-shadow--s"
                                }, v.default.createElement(E.default, {
                                    key: y.props.entry.bundleCode + "_bundleNo_" + y.props.entry.bundleNo,
                                    idx: h,
                                    tooltipValues: I(y.props.descriptions),
                                    mainIcon: m,
                                    entry: y.props.entry,
                                    detailsHeader: e.detailsLabel,
                                    onRemoveClicked: y.openRemovePopup.bind(y, y.props.entry),
                                    removeModalTexts: y.getRemoveModalTexts(e.entryType),
                                    channel: y.props.channel,
                                    bottomBorder: !n
                                }), (s || l) && v.default.createElement(M.default, {
                                    idx: h,
                                    entries: l ? y.props.entry.euroSets : y.props.entry.terminals,
                                    detailsHeader: e.detailsLabel,
                                    removeModalTexts: y.getRemoveModalTexts(e.entryType),
                                    cartBundle: "" + y.props.entry.bundleNo,
                                    bundle: y.props.entry.productCode,
                                    propositionId: y.props.entry.bundleCode,
                                    sapReservation: y.props.sapReservation,
                                    descriptions: y.props.descriptions,
                                    lowerInstallmentsActive: y.props.lowerInstallmentsActive,
                                    sapErrorMessage: y.props.sapErrorMessage
                                })), i && v.default.createElement(N, {
                                    key: "childProductSectionWrapper_" + h
                                }, v.default.createElement(k.default, {
                                    idx: h,
                                    buyMoreLabel: n,
                                    addButtonClicked: y.addButtonClicked,
                                    link: y.props.baseProductId,
                                    icon: o.icon,
                                    entry: y.props.entry
                                })));
                            case "GADGET":
                                var p = !y.props.entry.gadgets || e.limitForBuyMoreButton >= y.props.entry.gadgets.length ? e.buyMoreLabel : null,
                                    a = y.props.entry.gadgets && y.props.entry.gadgets.length ? e.sectionTitle : null;
                                return v.default.createElement(N, {
                                    key: "productSectionWrapper_" + t,
                                    className: "u-box-shadow u-box-shadow–s u-box-shadow-hover",
                                    entry: y.props.entry,
                                    sectionTitle: a
                                }, p && v.default.createElement(k.default, {
                                    key: "GADGET_" + h,
                                    idx: h,
                                    buyMoreLabel: p,
                                    icon: e.icon,
                                    entry: y.props.entry
                                }));
                            case "VAS":
                                var u = !y.props.entry.vases || e.limitForBuyMoreButton >= y.props.entry.vases.length ? e.buyMoreLabel : null,
                                    c = y.props.entry.vases.length && y.hasVasesInServices(y.props.entry.vases, y.props.entry.productCode) ? e.sectionTitle : null;
                                return v.default.createElement("div", {
                                    key: "VasWrapper_" + t
                                }, v.default.createElement(N, {
                                    key: "productSectionWrapper_" + t,
                                    entry: y.props.entry,
                                    sectionTitle: c,
                                    className: "u-box-shadow--s"
                                }, v.default.createElement(R.default, {
                                    key: "VAS_" + h,
                                    idx: h,
                                    entries: y.props.entry.vases,
                                    detailsHeader: e.detailsLabel,
                                    cartBundle: "" + y.props.entry.bundleNo,
                                    bundle: y.props.entry.productCode,
                                    propositionId: y.props.entry.bundleCode
                                }), v.default.createElement(g.default, y.props), v.default.createElement(C.default, y.props)), u && v.default.createElement(B.default, {
                                    idx: h,
                                    buyMoreLabel: u,
                                    icon: e.icon,
                                    entry: y.props.entry
                                }));
                            case "RETENTIONBENEFITS":
                                var d = !y.props.entry.vases || e.limitForBuyMoreButton >= y.props.entry.vases.length ? e.buyMoreLabel : null,
                                    f = y.props.entry.vases.length ? e.sectionTitle : null;
                                return v.default.createElement(T.default, {
                                    key: "RetentionBonusCmp_" + t,
                                    idx: h,
                                    buyMoreLabel: d,
                                    index: t,
                                    sectionTitle: f,
                                    icon: e.icon,
                                    entry: y.props.entry,
                                    cartBundle: "" + y.props.entry.bundleNo,
                                    bundle: y.props.entry.productCode,
                                    propositionId: y.props.entry.bundleCode
                                });
                            default:
                                return null
                        }
                    })))), v.default.createElement(s.default, {
                        key: "collapsed_" + h,
                        icon: m,
                        entry: this.props.entry,
                        trigger: t
                    }))
                }
            }, {
                key: "getVasesForBundle",
                value: function(t) {
                    return this.props.vases && this.props.vases.find(function(e) {
                        return e.bundle === t
                    })
                }
            }, {
                key: "hasVasesInServices",
                value: function(e, t) {
                    var r = this.getVasesForBundle(t);
                    if (!r || !r.services) return !1;
                    var o = r.services,
                        n = [];
                    return o.forEach(function(t) {
                        e.forEach(function(e) {
                            t.id === e.productCode && n.push(e)
                        })
                    }), !!n.length
                }
            }]), o
        }(v.Component),
        N = function(e) {
            e.icon && e.icon.split("_").join("-");
            return v.default.createElement("div", {
                className: "g-white1-bg u-margin-top-l" + (e.className ? " " + e.className : "")
            }, e.sectionTitle && v.default.createElement("h3", {
                className: "h3 u-small-hide u-padding-all-l u-no-spacing"
            }, e.sectionTitle), e.children)
        },
        I = function(e) {
            return {
                notConvergent: e["tooltip.priceDiscount"] || "def: Kwota abonamentu uwzględnia rabat za zgodę na e-fakturę i terminowe płatności – 5 zł oraz zgodę marketingową – 5 zł.",
                convergent: e["tooltip.convergentPriceDiscount"] || "Missing business CMS configuration for 'tooltip.convergentPriceDiscount'.",
                mnpPriceInfo: e["tooltip.mnpPriceInfo"] || "Missing business CMS configuration for 'tooltip.mnpPriceInfo'.",
                voucherDiscountInfo: e["tooltip.voucherDiscountInfo"] || "opłata abonamentowa uwzględnia rabat za wykorzystany kupon."
            }
        },
        d = (0, t.connect)(function() {
            var r = (0, p.getBaseProductIdForBundle)();
            return function(e, t) {
                return {
                    vases: (0, u.getMobileVases)(e),
                    baseProductId: r(e, t.entry.bundleNo),
                    isB2B: "B2B" === (0, a.getMarketContext)(e)
                }
            }
        }, function(r) {
            return {
                removeFromCart: function(e, t) {
                    return r((0, o.removeFromCart)(e, t))
                },
                showErrorMessage: function(e) {
                    return r((0, o.showErrorMessage)(e))
                },
                setFilters: function(e) {
                    return r((0, o.setFilters)(e))
                }
            }
        })(r);
    e.default = d
});
//# sourceMappingURL=MobileComponent.js.map