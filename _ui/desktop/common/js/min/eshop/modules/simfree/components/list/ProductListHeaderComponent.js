define(["exports", "react", "prop-types", "react-redux", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/cart", "../../constants/OfferTypeEnum", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/actionTypes", "../../../checkout/actions/data", "./view/ProductTabHeaderView", "./view/ProductListHeaderView", "./view/ProductSwitcherHeaderView", "./view/ProductChangingHeaderView", "eshop/modules/cart/selectors", "eshop/modules/configurator/actions/cart", "../../../magnum2/components/wwt/OraLoyaltyHeader", "eshop/modules/simfree/actions/filter", "../../selectors", "eshop/modules/auth/actions/authorization", "../../../auth/selectors/authorization", "eshop/modules/magnum2/selectors", "eshop/modules/cart/components/entriesList/StayLoveMsisdnHeader", "../../../cart/selectors", "eshop/modules/simfree/components/modals/OraVasPacketPickerComponent"], function(e, i, t, s, o, r, n, a, l, p, u, c, f, d, h, m, y, T, g, b, C, O, P, v, L, D, E) {
    "use strict";

    function S(r) {
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
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireDefault(t), o = babelHelpers.interopRequireDefault(o), n = babelHelpers.interopRequireDefault(n), f = babelHelpers.interopRequireDefault(f), d = babelHelpers.interopRequireDefault(d), h = babelHelpers.interopRequireDefault(h), m = babelHelpers.interopRequireDefault(m), g = babelHelpers.interopRequireDefault(g), L = babelHelpers.interopRequireDefault(L), E = babelHelpers.interopRequireDefault(E);
    var H = function(e) {
        babelHelpers.inherits(r, e);
        var s = S(r);

        function r(e) {
            var t;
            return babelHelpers.classCallCheck(this, r), t = s.call(this, e), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "getChangeTerminalLabel", function(e, t) {
                return e && e[t] && e[t].cmsDescriptions && e[t].cmsDescriptions.changeTerminalLabel ? e[t].cmsDescriptions.changeTerminalLabel : "Zmień terminal"
            }), babelHelpers.defineProperty(babelHelpers.assertThisInitialized(t), "getBundleGroupsProps", function(e) {
                var t = e.hasLove,
                    s = void 0 !== t && t,
                    r = e.hasODF,
                    o = void 0 !== r && r,
                    i = e.softBundleGroup;
                return {
                    hasLove: s,
                    hasODF: o,
                    softBundleGroup: void 0 === i ? null : i
                }
            }), t
        }
        return babelHelpers.createClass(r, [{
            key: "componentWillMount",
            value: function() {
                var e = this.props.cmsConf;
                this.props.isProductDetailsPage || this.props.isProductListPage || this.props.isAccessoryListPage || this.props.dontUseDefaultOffer(), this.props.registerCmsConfiguration(e, this.props.validOfferTypes), this.props.changeAddTerminalToOfferBundleNo(null), this.selectOfferType = this.selectOfferType.bind(this), this.props.fetchMiniCart()
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.props.setSalesChannel(this.props.channels.sales), "WWW" !== this.props.channels.sales && this.props.subscribeCustomerSelected(), this.props.offerType && this.props.useDefaultOfferType && this.selectOfferType(this.props.offerType)
            }
        }, {
            key: "selectOfferType",
            value: function(e) {
                document.getElementById("expander-module-one-time") && (OPL.UI.stopModules(document.getElementById("expander-module-one-time")), OPL.UI.initModules(document.getElementById("expander-module-one-time"))), document.getElementById("expander-module-monthly") && (OPL.UI.stopModules(document.getElementById("expander-module-monthly")), OPL.UI.initModules(document.getElementById("expander-module-monthly"))), o.default.removeFromSessionStorage("selectedPropositionId"), o.default.removeFromSessionStorage("selectedPropositionPosition"), o.default.removeFromSessionStorage("processType"), o.default.changeOrAddUrlParameter("processType", null), o.default.changeOrAddUrlParameter("serviceplan", null), this.props.setOfferType(e), this.props.setAllVisibility(!1), this.props.changeCurrentPage(1)
            }
        }, {
            key: "filterVisible",
            value: function(e) {
                var t = this.props,
                    s = t.hasVoiceCartEntry,
                    r = t.stayLoveRetentionMSISDN,
                    o = t.hasLove,
                    i = t.cmsConf;
                return i.VOICE_LDF && (o && s || r) && (i.VOICE_LDF.visible = !0), e.filter(function(e) {
                    return i[e.value] && i[e.value].visible
                })
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this,
                    s = this.props.wwt;
                if ((this.props.isPropositionListCountSetMode || 0 === this.props.propositionListCount) && !this.props.isProductListPage && !this.props.isProductDetailsPage) return i.default.createElement("div", {
                    id: "offerTypeSelectionComponent"
                });
                if (!this.props.isB2B && 0 < this.props.propositionListCount && this.props.isPropositionListCountLoop && (this.props.isProductListPage || this.props.isProductDetailsPage)) return i.default.createElement("div", {
                    id: "offerTypeSelectionComponent"
                }, i.default.createElement(L.default, null));
                if (this.props.addTerminalToOfferBundleNo) return i.default.createElement(m.default, {
                    redirectToCart: this.props.redirectToCart,
                    descriptions: this.props.descriptions,
                    changeTerminalLbl: this.getChangeTerminalLabel(this.props.cmsConf, this.props.selectedOfferType),
                    channels: this.props.channels
                });
                var r = this.props.selectedOfferType !== n.default.CONVERGENT ? this.props.selectValues.filter(function(e) {
                    return n.default.CONVERGENT !== e.value
                }) : this.props.selectValues.filter(function(e) {
                    return t.props.magnumType === e.value
                });
                if ("HIDDEN" === this.props.selectionType && (e = null), r = this.filterVisible(r), "DROPDOWN" === this.props.selectionType && (e = i.default.createElement(d.default, {
                        headerText: this.props.headerText || "telefony",
                        onChange: this.selectOfferType,
                        options: r,
                        descriptions: this.props.descriptions,
                        channels: this.props.channels
                    })), "TAB" === this.props.selectionType && (e = i.default.createElement(f.default, babelHelpers.extends({
                        headerText: this.props.headerText || "telefony",
                        onChange: this.selectOfferType,
                        options: r,
                        descriptions: this.props.descriptions,
                        tabHeaderText: this.props.tabHeaderText,
                        channels: this.props.channels,
                        selectedOfferType: this.props.selectedOfferType,
                        isDuet: this.props.isDuet
                    }, this.getBundleGroupsProps(this.props)))), "SWITCHER" === this.props.selectionType && (e = i.default.createElement(h.default, {
                        headerText: this.props.headerText,
                        onChange: this.selectOfferType,
                        options: r,
                        descriptions: this.props.descriptions,
                        tabHeaderText: this.props.tabHeaderText,
                        channels: this.props.channels,
                        selectedOfferType: this.props.selectedOfferType
                    })), this.props.selectedOfferType !== n.default.CONVERGENT) return i.default.createElement("div", null, i.default.createElement("div", {
                    id: "offerTypeSelectionComponent"
                }, e), i.default.createElement(L.default, null), i.default.createElement(E.default, null));
                var o = !!s.zip;
                return i.default.createElement("div", null, i.default.createElement("div", {
                    className: "u-box-shadow"
                }, e), i.default.createElement("div", {
                    className: "l-page-row" + (o ? "" : " u-hide")
                }, i.default.createElement(g.default, {
                    place: s.cityName,
                    street: s.streetName,
                    streetNumber: s.streetNumber,
                    apartmentNumber: s.apartmentNumber,
                    onClickChange: null,
                    descriptions: {}
                })))
            }
        }]), r
    }(i.Component);
    H.propTypes = {
        cmsConf: t.default.object,
        selectionType: t.default.string,
        descriptions: t.default.object,
        headerText: t.default.string,
        tabHeaderText: t.default.string,
        selectValues: t.default.any,
        selectedOfferType: t.default.string,
        wwt: t.default.object,
        registerCmsConfiguration: t.default.func,
        setOfferType: t.default.func,
        subscribeCustomerSelected: t.default.func,
        changeAddTerminalToOfferBundleNo: t.default.func,
        redirectToCart: t.default.func,
        hasLove: t.default.bool,
        hasODF: t.default.bool,
        softBundleGroup: t.default.string,
        channels: t.default.object,
        hasVoiceCartEntry: t.default.bool,
        stayLoveRetentionMSISDN: t.default.string
    };
    var B = (0, s.connect)(function(e) {
        return {
            useDefaultOfferType: (0, p.getUseDefaultOfferType)(e),
            isPropositionListCountSetMode: (0, p.getPropositionListCountSetMode)(e),
            propositionListCount: (0, p.getPropositionListCount)(e),
            headerText: (0, l.getProductListHeader)(e),
            selectValues: (0, l.getOfferTypesForSelect)(e),
            selectedOfferType: (0, p.getSelectedOfferType)(e),
            wwt: e.magnum.wwt,
            addTerminalToOfferBundleNo: (0, y.getAddTerminalToOfferBundleNo)(e),
            products: (0, C.getProductListWrapper)(e),
            productList: (0, C.getProductListData)(e),
            isProductListPage: (0, l.isProductListPage)(e),
            isAccessoryListPage: (0, l.isAccessoryListPage)(e),
            isProductDetailsPage: (0, l.isProductDetailsPage)(e),
            isPropositionListCountLoop: (0, p.getPropositionListOfferType)(e) && (0, p.getPropositionListOfferType)(e) == (0, p.getSelectedOfferType)(e),
            isB2B: "B2B" === (0, p.getMarketContext)(e),
            hasLove: (0, P.hasLove)(e),
            hasODF: (0, P.hasODF)(e),
            softBundleGroup: (0, l.getSelectedSoftBundleGroup)(e),
            magnumType: (0, v.getMagnumType)(e),
            stayLoveRetentionMSISDN: (0, P.getStayLoveRetentionMSISDN)(e),
            hasVoiceCartEntry: (0, D.hasVoiceCartEntry)(e),
            isDuet: (0, C.isDuet)(e)
        }
    }, function(s) {
        return {
            registerCmsConfiguration: function(e, t) {
                return s((0, a.setOfferTypeCmsConf)(e, t))
            },
            setOfferType: function(e) {
                return s((0, a.setOfferType)(e))
            },
            subscribeCustomerSelected: function() {
                return s((0, c.subscribeCustomerSelected)())
            },
            changeAddTerminalToOfferBundleNo: function() {
                return s((0, r.changeAddTerminalToOfferBundleNo)(null))
            },
            redirectToCart: function() {
                return s((0, T.redirectToCart)())
            },
            fetchMiniCart: function() {
                return s((0, r.fetchMiniCart)())
            },
            changeCurrentPage: function(e) {
                return s((0, b.changeCurrentPageProps)(e))
            },
            setAllVisibility: function(e) {
                return s((0, b.setAllVisibilityProduct)(e))
            },
            dontUseDefaultOffer: function() {
                return s({
                    type: u.USE_DEFAULT_OFFER,
                    use: !1
                })
            },
            setSalesChannel: function(e) {
                return s((0, O.setSalesChannel)(e))
            }
        }
    })(H);
    e.default = B
});
//# sourceMappingURL=ProductListHeaderComponent.js.map