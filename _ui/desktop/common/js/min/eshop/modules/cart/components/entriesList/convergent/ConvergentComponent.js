define(["exports", "react", "prop-types", "redux", "react-redux", "lodash", "../shared/MultiCartExpandingSectionComponent", "./ConvergentMultiCartExpandedItemComponent", "./ConvergentMultiCartCollapsedItemComponent", "eshop/flux/utils/OraModalService", "../shared/MultiCartRemovePopup", "eshop/modules/checkout/selectors", "eshop/modules/cart/actions/cart", "./vasModal/ConvergentVasModal", "../../../selectors", "../../../actions/cart", "./vasModal/ConvergentAnalyzerAdapter", "./tvPackage/ConvergentTvPackageModal", "./fixBonusModal/ConvergentFixBonusModal", "./typings", "../../../analyzer/DeviceUtils", "../../../../configurator/selectors/filters", "eshop/modules/checkout/actions/app", "../../../../checkout/constants/ProductEntryTypeEnum", "../../../../checkout/constants/CartEntryTypeEnum", "../utils/CartUtils", "../../../../checkout/constants/AddonTypeEnum", "eshop/modules/cart/actions/resources"], function(e, a, t, r, n, u, l, c, p, i, s, o, d, f, h, b, v, g, y, C, m, P, M, S, T, k, D, H) {
    "use strict";

    function E(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function I(n) {
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
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), t = babelHelpers.interopRequireDefault(t), u = babelHelpers.interopRequireDefault(u), l = babelHelpers.interopRequireDefault(l), c = babelHelpers.interopRequireDefault(c), p = babelHelpers.interopRequireDefault(p), i = babelHelpers.interopRequireDefault(i), s = babelHelpers.interopRequireDefault(s), f = babelHelpers.interopRequireDefault(f), v = babelHelpers.interopRequireDefault(v), S = babelHelpers.interopRequireDefault(S), T = babelHelpers.interopRequireDefault(T), D = babelHelpers.interopRequireDefault(D);
    var B = function(e) {
        babelHelpers.inherits(o, e);
        var n = I(o);

        function o() {
            var s;
            babelHelpers.classCallCheck(this, o);
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return s = n.call.apply(n, [this].concat(t)), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "state", {
                vasModalIsOpen: !1,
                tvPackageModalIsOpen: !1,
                servicesAndDevices: s.getServicesAndDevices(s.props.convergentConfigurables.configurables),
                vasSection: null,
                selectedSection: null
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "openRemovePopup", function() {
                var e = s.props.entry;
                i.default.open("remove-from-cart-modal-" + e.bundleNo, {
                    bundleNo: e.bundleNo,
                    offerIndex: e.bundleNo
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "removeFromCart", function() {
                s.props.removeMagnumFromMultiCart(s.props.convergentBundleNos)
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "removeTerminalFromCartBundle", function(e, t) {
                s.props.removeTerminalFromConvergentCartBundle(t, e)
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "updateTerminal", function(e) {
                e.section;
                var t = e.vas;
                s.props.updateMagnumTerminal(t.bundleNo)
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "showVasModal", function(e) {
                var t = e.section,
                    r = e.selectedSection;
                s.setState({
                    vasModalIsOpen: !0,
                    vasSection: t,
                    selectedSection: r
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "hideVasModal", function() {
                s.setState({
                    vasModalIsOpen: !1
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "showTvPackageModal", function(e) {
                var t = e.section;
                s.setState({
                    tvPackageModalIsOpen: !0,
                    tvPackageSection: t
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "hideTvPackageModal", function() {
                s.setState({
                    tvPackageModalIsOpen: !1
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "showFixBonusModal", function(e) {
                var t = e.section;
                s.setState({
                    fixBonusModalIsOpen: !0,
                    fixBonusModalSection: t
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "hideFixBonusModal", function() {
                s.setState({
                    fixBonusModalIsOpen: !1
                })
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(s), "updateCartProducts", function(e) {
                var n = [],
                    o = s.props.entry;
                u.default.forEach(e, function(e, t) {
                    var r = u.default.find(o.entries, function(e) {
                        return e.propositionId === t
                    });
                    n.push({
                        bundleNo: r ? r.bundleNo : null,
                        products: e
                    })
                }), s.props.updateCartProducts(n)
            }), s
        }
        return babelHelpers.createClass(o, [{
            key: "componentDidMount",
            value: function() {
                this.registerRemovePopup(this.props.entry), this.props.entry.propositionId && this.props.fetchConvergentConfigurables(this.props.entry.propositionId, this.props.convergentBundleNos)
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                e.convergentConfigurables.configurables !== this.props.convergentConfigurables.configurables && this.setState({
                    servicesAndDevices: this.getServicesAndDevices(e.convergentConfigurables.configurables)
                })
            }
        }, {
            key: "registerRemovePopup",
            value: function(t) {
                var r = this;
                i.default.add(function(e) {
                    return a.default.createElement(s.default, {
                        id: "remove-from-cart-modal-" + t.bundleNo,
                        bundleNo: t.bundleNo,
                        deleteEntryPopupTitle: r.props.sectionConf.deleteEntryPopupTitle,
                        deleteEntryPopupContent: r.props.sectionConf.deleteEntryPopupContent,
                        declineDeleteEntryPopupButtonLabel: r.props.sectionConf.declineDeleteEntryPopupButtonLabel,
                        confirmDeleteEntryPopupButtonLabel: r.props.sectionConf.confirmDeleteEntryPopupButtonLabel,
                        onClickRemove: r.removeFromCart,
                        textRepresentation: r.props.sectionConf.sectionTitle
                    })
                })
            }
        }, {
            key: "removeProductFromCartBundle",
            value: function(e, t) {
                var r = this.props.entry.entries.find(function(e) {
                    return e.bundleNo === t
                }).propositionId;
                this.adapter.removeButtonClicked(e, r)
            }
        }, {
            key: "lowerInstallmentsClicked",
            value: function(e) {
                this.props.lowerInstallmentsModalOpen(e)
            }
        }, {
            key: "getMigratedProducts",
            value: function() {
                var e = this.props.entry.entries || [],
                    r = [];
                return e.forEach(function(e) {
                    var t = e.migratedProducts || [];
                    r.push.apply(r, t)
                }), r
            }
        }, {
            key: "getServicesAndDevices",
            value: function(e) {
                var i = this,
                    a = {},
                    l = this.getMigratedProducts();
                return u.default.forEach(e, function(e) {
                    var t, r, n = e.devices,
                        o = e.services,
                        s = e.propositionId;
                    a[s] = [], o && 0 < o.length && (t = a[s]).push.apply(t, babelHelpers.toConsumableArray(o));
                    n && 0 < n.length && (r = a[s]).push.apply(r, babelHelpers.toConsumableArray((0, m.getDevicesWithAdjustedDeviceType)(n)));
                    a[s].forEach(function(e) {
                        return e.migrated = i.isMigrated(e, l)
                    })
                }), a
            }
        }, {
            key: "isMigrated",
            value: function(t, e) {
                return !(!e || !t) && 0 < e.filter(function(e) {
                    return e.base === t.base && e.productCode === t.id
                }).length
            }
        }, {
            key: "areSecondaryChoiceBonusesAvailable",
            value: function() {
                return 0 < (0, k.getSecondaryChoiceDiscountsWithRelatedBonuses)(this.props.convergentConfigurables.configurables, this.props.bonusEntry).length
            }
        }, {
            key: "getSecondaryChoiceDiscountsWithRelatedBonuses",
            value: function() {
                return (0, k.getSecondaryChoiceDiscountsWithRelatedBonuses)(this.props.convergentConfigurables.configurables, this.props.bonusEntry)
            }
        }, {
            key: "isSecondaryConfigurable",
            value: function(e) {
                return !!e && (e.factoryName !== T.default.FIX ? 0 < e.services.filter(function(e) {
                    return e.productType === D.default.SECONDARY_CHOICE_DISCOUNT
                }).length : 0 < e.services.filter(function(e) {
                    return e.addonType === D.default.SECONDARY_CHOICE_DISCOUNT
                }).length)
            }
        }, {
            key: "getProductListForSecondaryChoiceDiscount",
            value: function() {
                var e = (this.props.sectionConf ? this.props.sectionConf.productSections : []).filter(function(e) {
                    return e.entryType === S.default.SECONDARY_CHOICE
                }).map(function(e) {
                    return e.productList
                });
                return u.default.flatMap(e)
            }
        }, {
            key: "filterMigratedDevices",
            value: function() {
                var e = this.props.entry.entries.filter(function(e) {
                    return "FIX" === e.entryType
                }).find(function(e) {
                    return e.migratedProducts
                });
                return e && e.migratedProducts && e.migratedProducts.filter(function(e) {
                    return !!e.deviceType
                }) || []
            }
        }, {
            key: "getPresentables",
            value: function() {
                var t = this,
                    r = [];
                return Object.keys(this.state.servicesAndDevices).forEach(function(e) {
                    r.push.apply(r, babelHelpers.toConsumableArray(t.state.servicesAndDevices[e]))
                }), r
            }
        }, {
            key: "render",
            value: function() {
                var t = this,
                    e = this.props.idx,
                    r = "ost-" + this.props.entry.bundleNo,
                    n = this.filterMigratedDevices(),
                    o = this.getPresentables(),
                    s = (0, m.createCustomRules)(o, n),
                    i = this.state.fixBonusModalSection ? this.state.fixBonusModalSection.descriptions : "";
                return a.default.createElement("div", null, a.default.createElement(l.default, {
                    title: this.props.sectionConf.sectionTitle,
                    key: e,
                    entry: this.props.entry,
                    conf: this.props.sectionConf,
                    trigger: r,
                    onRemoveClicked: this.openRemovePopup
                }, a.default.createElement(c.default, {
                    entry: this.props.entry,
                    sectionConf: this.props.sectionConf,
                    key: "expanded-" + e,
                    descriptions: this.props.descriptions,
                    onDeviceChange: this.updateTerminal,
                    onRemoveProduct: this.removeProductFromCartBundle.bind(this),
                    onRemoveTerminal: this.removeTerminalFromCartBundle,
                    lowerInstallmentsClicked: this.props.lowerInstallmentsActive ? this.lowerInstallmentsClicked.bind(this) : void 0,
                    onClickAddVas: this.showVasModal,
                    onClickAddTvPackage: this.showTvPackageModal,
                    onClickAddFixBonus: this.showFixBonusModal,
                    isSatTechnology: this.props.isSatTechnologyEntry,
                    isDslTechnology: this.props.isDslTechnologyEntry,
                    openRemovePopup: this.openRemovePopup,
                    configurables: this.props.convergentConfigurables && this.props.convergentConfigurables.configurables,
                    showNetPrices: this.props.showNetPrices,
                    areSecondaryChoiceBonusesAvailable: this.areSecondaryChoiceBonusesAvailable()
                }), a.default.createElement(p.default, {
                    entry: this.props.entry,
                    sectionConf: this.props.sectionConf,
                    key: "collapsed-" + e,
                    trigger: r
                })), this.props.convergentConfigurables.configurables && a.default.createElement(v.default, {
                    configurables: this.props.convergentConfigurables.configurables,
                    entry: this.props.entry,
                    updateCartProducts: this.updateCartProducts,
                    customRules: s,
                    ref: function(e) {
                        t.adapter = e
                    }
                }, a.default.createElement(f.default, {
                    open: this.state.vasModalIsOpen,
                    label: this.state.vasSection && this.state.vasSection.buyMoreLabel,
                    services: this.state.servicesAndDevices,
                    productList: this.state.vasSection && this.state.vasSection.productList,
                    onClose: this.hideVasModal,
                    icon: this.state.vasSection && this.state.vasSection.icon,
                    header: this.state.vasSection && this.state.vasSection.buyMoreLabel,
                    saveVasesButtonText: this.props.descriptions.saveVasesButton,
                    selectedSection: this.state.selectedSection,
                    descriptions: this.state.vasSection && this.state.vasSection.descriptions,
                    showNetPrices: this.props.showNetPrices,
                    configurables: this.props.convergentConfigurables.configurables,
                    migratedProducts: n
                })), this.props.convergentConfigurables.configurables && a.default.createElement(g.ConvergentTvPackageModal, {
                    header: this.state.tvPackageSection && this.state.tvPackageSection.buyMoreLabel,
                    descriptions: this.state.tvPackageSection && this.state.tvPackageSection.descriptions,
                    convergentConfigurables: this.props.convergentConfigurables,
                    entry: this.props.entry,
                    inner: this.state.tvPackageSection && this.state.tvPackageSection.productList,
                    modalVisible: this.state.tvPackageModalIsOpen,
                    closeModalClicked: this.hideTvPackageModal,
                    updateCartProducts: this.updateCartProducts,
                    showNetPrices: this.props.showNetPrices,
                    customFilters: this.props.customFilters
                }), this.props.convergentConfigurables.configurables && this.getSecondaryChoiceDiscountsWithRelatedBonuses().map(function(e) {
                    return a.default.createElement(y.ConvergentFixBonusModal, {
                        convergentConfigurables: t.props.convergentConfigurables,
                        updateCartProducts: t.updateCartProducts,
                        entry: t.props.entry,
                        uid: "FBM_".concat(t.props.uid),
                        label: t.props.header,
                        fixBonusModalVisible: t.state.fixBonusModalIsOpen,
                        bonus: e,
                        services: e.relatedProducts,
                        onClose: t.hideFixBonusModal,
                        productList: t.getProductListForSecondaryChoiceDiscount(),
                        descriptions: i,
                        showNetPrices: t.props.showNetPrices,
                        isSecondaryConfigurable: t.isSecondaryConfigurable,
                        migratedProducts: n,
                        customRules: s
                    })
                }))
            }
        }]), o
    }(a.Component);
    babelHelpers.defineProperty(B, "propTypes", {
        entry: t.default.any,
        sectionConf: t.default.any,
        idx: t.default.number,
        descriptions: t.default.shape(C.ConvergentComponentDescriptionsType),
        convergentConfigurables: t.default.any,
        convergentBundleNos: t.default.any,
        isSatTechnologyEntry: t.default.bool,
        isDslTechnologyEntry: t.default.bool,
        fetchConvergentConfigurables: t.default.func,
        removeMagnumFromMultiCart: t.default.func,
        removeTerminalFromConvergentCartBundle: t.default.func,
        updateCartProducts: t.default.func
    });
    var O = (0, n.connect)(function(e) {
        return {
            convergentBundleNos: (0, o.getConvergentBundleNos)(e),
            convergentConfigurables: e.cart.convergentConfigurables,
            isSatTechnologyEntry: (0, h.isSatTechnologyEntry)(e),
            isDslTechnologyEntry: (0, h.isDslTechnologyEntry)(e),
            marketSegment: (0, P.getMarketContext)(e),
            bonusEntry: (0, h.getBonusEntry)(e),
            customFilters: (0, h.getCustomFilters)(e)
        }
    }, function(e) {
        return function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? E(Object(r), !0).forEach(function(e) {
                    babelHelpers.defineProperty(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }({}, (0, r.bindActionCreators)({
            removeMagnumFromMultiCart: d.removeMagnumFromMultiCart,
            removeTerminalFromConvergentCartBundle: d.removeTerminalFromConvergentCartBundle,
            fetchConvergentConfigurables: b.fetchConvergentConfigurables,
            updateCartProducts: b.updateConvergentCartProducts,
            lowerInstallmentsModalOpen: H.lowerInstallmentsModalOpen,
            updateMagnumTerminal: M.updateMagnumTerminal
        }, e))
    })(B);
    e.default = O
});
//# sourceMappingURL=ConvergentComponent.js.map