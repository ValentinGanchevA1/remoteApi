define(["exports", "react", "react-redux", "eshop/flux/utils/OraModalService", "./MultiCartRemovePopup", "eshop/modules/cart/actions/cart", "./productEntries/ServiceEntryComponent", "./productEntries/TerminalEntriesListComponent", "./productModals/BuyMoreProductsComponent", "../../../selectors", "eshop/modules/cart/components/entriesList/mobile/SimCartIndexHeader"], function(e, f, t, o, s, n, m, b, y, l, a) {
    "use strict";

    function i(n) {
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
    }), e.default = void 0, f = babelHelpers.interopRequireWildcard(f), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s), m = babelHelpers.interopRequireDefault(m), b = babelHelpers.interopRequireDefault(b), y = babelHelpers.interopRequireDefault(y), a = babelHelpers.interopRequireDefault(a);
    var r = function(e) {
            babelHelpers.inherits(n, e);
            var r = i(n);

            function n(e) {
                var t;
                return babelHelpers.classCallCheck(this, n), (t = r.call(this, e)).addButtonClicked = t.addButtonClicked.bind(babelHelpers.assertThisInitialized(t)), t
            }
            return babelHelpers.createClass(n, [{
                key: "openRemovePopup",
                value: function(e) {
                    "" !== this.props.sapReservation ? this.props.showErrorMessage(this.props.sapErrorMessage) : o.default.open("remove-from-cart-modal-" + e.bundleNo, {
                        bundleNo: e.bundleNo,
                        offerIndex: e.bundleNo
                    })
                }
            }, {
                key: "registerRemovePopup",
                value: function(t) {
                    var r = this;
                    o.default.add(function(e) {
                        return f.default.createElement(s.default, babelHelpers.extends({}, r.props, r.getRemoveModalTexts("SERVICE"), {
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
                    this.props.setFilters(this.props.entry.bundleNo), this.props.baseProductId && (window.location = "/sklep?serviceplan=" + this.props.baseProductId)
                }
            }, {
                key: "render",
                value: function() {
                    var p = this,
                        u = this.props.sectionConf ? this.props.sectionConf.icon : "sim",
                        c = (this.props.sectionConf && this.props.sectionConf.sectionTitle, this.props.sectionConf.productSections),
                        d = this.props.idx;
                    return f.default.createElement("div", {
                        className: "l-page-row u-padding-top "
                    }, f.default.createElement("div", {
                        className: "l-row"
                    }, f.default.createElement("div", {
                        className: "l-col l-col-8"
                    }, f.default.createElement(a.default, {
                        simIndex: d
                    })), f.default.createElement("div", {
                        className: "l-col l-col-2 u-text-right u-font-small u-padding-right-l u-small-hide"
                    }, f.default.createElement("span", null, "Opłaty jednorazowe")), f.default.createElement("div", {
                        className: "l-col l-col-2  u-text-right u-font-small u-padding-right-l u-small-hide"
                    }, f.default.createElement("span", null, "Opłaty miesięczne ", !this.props.isB2B && f.default.createElement("span", null, f.default.createElement("br", null), "z rabatami")))), c && c.map(function(e, t) {
                        switch (e.entryType) {
                            case "SERVICE":
                                p.props.entry && e.buyMoreLabel;
                                var r = p.props.entry ? e.sectionTitle : null,
                                    n = c.find(function(e) {
                                        return "TERMINAL" === e.entryType
                                    }),
                                    o = n && (!p.props.entry.terminals || n.limitForBuyMoreButton) >= p.props.entry.terminals.length ? n.buyMoreLabel : null,
                                    s = n && p.props.entry.terminals && 0 < p.props.entry.terminals.length,
                                    l = n && p.props.entry.euroSets && 0 < p.props.entry.euroSets.length;
                                return f.default.createElement(g, {
                                    key: "productSectionWrapper_" + t,
                                    entry: p.props.entry,
                                    sectionTitle: r
                                }, f.default.createElement(m.default, {
                                    key: p.props.entry.bundleCode + "_bundleNo_" + p.props.entry.bundleNo,
                                    idx: d,
                                    tooltipValues: v(p.props.descriptions),
                                    mainIcon: u,
                                    entry: p.props.entry,
                                    detailsHeader: e.detailsLabel,
                                    onRemoveClicked: p.openRemovePopup.bind(p, p.props.entry),
                                    removeModalTexts: p.getRemoveModalTexts(e.entryType),
                                    channel: p.props.channel,
                                    bottomBorder: !o,
                                    editable: !1,
                                    processName: h(p.props.entry)
                                }), (s || l) && f.default.createElement(b.default, {
                                    idx: d,
                                    key: "terminal" + p.props.entry.bundleCode + "_bundleNo_" + p.props.entry.bundleNo,
                                    entries: l ? p.props.entry.euroSets : p.props.entry.terminals,
                                    detailsHeader: e.detailsLabel,
                                    removeModalTexts: p.getRemoveModalTexts(e.entryType),
                                    cartBundle: "" + p.props.entry.bundleNo,
                                    bundle: p.props.entry.productCode,
                                    propositionId: p.props.entry.bundleCode,
                                    sapReservation: p.props.sapReservation,
                                    sapErrorMessage: p.props.sapErrorMessage,
                                    editable: !1
                                }));
                            case "GADGET":
                                var a = !p.props.entry.gadgets || e.limitForBuyMoreButton >= p.props.entry.gadgets.length ? e.buyMoreLabel : null,
                                    i = p.props.entry.gadgets && p.props.entry.gadgets.length ? e.sectionTitle : null;
                                return f.default.createElement(g, {
                                    key: "productSectionWrapper_" + t,
                                    className: "u-box-shadow",
                                    entry: p.props.entry,
                                    sectionTitle: i
                                }, a && f.default.createElement(y.default, {
                                    key: "GADGET_" + d,
                                    idx: d,
                                    buyMoreLabel: a,
                                    icon: e.icon,
                                    entry: p.props.entry
                                }));
                            default:
                                return null
                        }
                    }))
                }
            }]), n
        }(f.Component),
        h = function(e) {
            switch (e.processType) {
                case "RETENTION":
                    return "Przedłużam umowę (" + e.msisdn + ")";
                case "ACTIVATION":
                    return "Nowy numer";
                case "MNP":
                case "MNP_TWOSTEP":
                    return "Przenoszę numer (" + e.mnpNumber + ")";
                case "MIGRATION_PRE_POST":
                    return "Migracja (" + e.msisdn + ")";
                case "MIGRATION_NJU_POST_TO_POST":
                case "MIGRATION_NJU_PRE_TO_POST":
                    return "Przenoszę numer z NJU (" + e.mnpNumber + ")";
                default:
                    return ""
            }
        },
        g = function(e) {
            return f.default.createElement("div", {
                className: "g-white1-bg " + (e.className ? " " + e.className : "")
            }, e.sectionTitle && f.default.createElement("h3", {
                className: "h3 u-small-hide u-padding-all-l u-no-spacing"
            }, e.sectionTitle), e.children)
        },
        v = function(e) {
            return {
                notConvergent: e["tooltip.priceDiscount"] || "def: Kwota abonamentu uwzględnia rabat za zgodę na e-fakturę i terminowe płatności – 5 zł oraz zgodę marketingową – 5 zł.",
                convergent: e["tooltip.convergentPriceDiscount"] || "Missing business CMS configuration for 'tooltip.convergentPriceDiscount'.",
                mnpPriceInfo: e["tooltip.mnpPriceInfo"] || "Missing business CMS configuration for 'tooltip.mnpPriceInfo'.",
                voucherDiscountInfo: e["tooltip.voucherDiscountInfo"] || "opłata abonamentowa uwzględnia rabat za wykorzystany kupon."
            }
        },
        p = (0, t.connect)(function() {
            var r = (0, l.getBaseProductIdForBundle)();
            return function(e, t) {
                return {
                    baseProductId: r(e, t.entry.bundleNo)
                }
            }
        }, function(r) {
            return {
                removeFromCart: function(e, t) {
                    return r((0, n.removeFromCart)(e, t))
                },
                showErrorMessage: function(e) {
                    return r((0, n.showErrorMessage)(e))
                },
                setFilters: function(e) {
                    return r((0, n.setFilters)(e))
                }
            }
        })(r);
    e.default = p
});
//# sourceMappingURL=CartEntryPreviewComponent.js.map