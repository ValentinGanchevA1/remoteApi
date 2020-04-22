define(["exports", "../actionTypes", "eshop/modules/configurator/actionTypes", "eshop/modules/cart/selectors", "../selectors/offers", "eshop/modules/checkout/actions/app", "eshop/modules/auth/actions/authorization", "../selectors/cart", "../constants", "../remoteApi", "eshop/utils/OnlineUtils", "eshop/modules/cart/actions/cart", "eshop/modules/configurator/actions/offers", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/actions/filters", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/metaData", "eshop/utils/GenesysWebEngagementUtils", "jquery", "eshop/modules/auth/actionTypes", "eshop/modules/simfree/constants/OfferTypeEnum", "eshop/modules/auth/actions/api", "../selectors/filters", "../../core/enum/MarketSegment"], function(e, c, f, p, d, g, P, u, o, l, S, T, m, y, r, h, v, L, C, O, A, E, b, a, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.redirectToCart = e.addToCartWithCounter = e.pushToCart = e.addInstallmentSalesOfGoodsToCart = e.addToCart = void 0, c = babelHelpers.interopRequireWildcard(c), f = babelHelpers.interopRequireWildcard(f), l = babelHelpers.interopRequireDefault(l), S = babelHelpers.interopRequireDefault(S), C = babelHelpers.interopRequireDefault(C), O = babelHelpers.interopRequireDefault(O), E = babelHelpers.interopRequireDefault(E), t = babelHelpers.interopRequireDefault(t);

    function i() {
        return function(e, t) {
            e(n())
        }
    }
    e.addToCart = i;
    e.addInstallmentSalesOfGoodsToCart = function() {
        return function(o, t) {
            (0, g.bodyLoaderEvent)("modules.loader.show");
            var e = (0, d.getSelectedDeviceId)(t()),
                r = (0, a.getSelectedFilters)(t()),
                s = (0, v.getCurrentSelectedAvailableProductsKey)(t());
            l.default.checkAndGetOffers(null, r, s, e).then(function(e) {
                (0, g.bodyLoaderEvent)("modules.loader.hide"), e.isPositive ? (o({
                    type: c.FETCH_OFFERS,
                    payload: e.offers,
                    selectedFilters: (0, a.getSelectedFilters)(t()),
                    data: e
                }), o(i())) : o((0, P.showError)(e.description))
            }).catch(function(e) {
                (0, g.bodyLoaderEvent)("modules.loader.hide");
                var t = e.responseJSON && e.responseJSON.message || "Wystąpił błąd w trakcie dodania do koszyka";
                o((0, P.showError)(t))
            })
        }
    };

    function D(e, t) {
        var o = (0, r.getSelectedVases)(e);
        return o && o.find(function(e) {
            return e.propositionId == t.id
        }) ? o = o.find(function(e) {
            return e.propositionId == t.id
        }).vases : []
    }

    function s(i, n) {
        return function(t, e) {
            i = i || (0, d.getSelectedOffer)(e()), n = n || (0, y.getSelectedProcess)(e());
            var o = (0, d.getSelectedDeviceId)(e()),
                r = (0, y.getMarketContext)(e());
            if (i && n) {
                if (t((0, P.clearMessage)()), (0, g.bodyLoaderEvent)("modules.loader.show"), !(0, u.addToCartInProgress)(e())) {
                    var s = (0, v.getCurrentSelectedAvailableProductsKey)(e()) || (0, O.default)("#availableProductsKey").val(),
                        a = {
                            rateplanId: i.rateplanId,
                            propositionId: i.id,
                            process: n,
                            market: r,
                            availableProductsKey: s,
                            bonusesToAdd: D(e(), i) || [],
                            defaultBonusesToIgnore: function(e, t) {
                                if (!(t && t.addons && t.addons.categorizedBonuses && t.addons.categorizedBonuses.GratisPackageBonuses && t.addons.categorizedBonuses.GratisPackageBonuses.services)) return [];
                                var o = t.addons.categorizedBonuses.GratisPackageBonuses.services.filter(function(e) {
                                        return e.isDefault
                                    }).map(function(e) {
                                        return e.bonuses[0].code
                                    }),
                                    r = D(e, t);
                                return o.filter(function(e) {
                                    return r.indexOf(e) < 0
                                })
                            }(e(), i) || []
                        };
                    o && (a.deviceVariant = o), t({
                        type: c.POST_TO_CART_START,
                        args: a
                    }), l.default.postToCart(a).then(function(e) {
                        R(t, i, e, a), t((0, m.fetchContractRole)(s))
                    }, function(e) {
                        return t(B(i, e))
                    }), S.default.removePwaSuflerContextFromSession()
                }
            } else S.default.removeParameterFromURL("autoadd")
        }
    }
    e.pushToCart = s;
    var n = function() {
        return function(e, t) {
            if (0 != (0, y.getPropositionListCount)(t()) || (0, v.isDuet)(t())) e(s(null, null));
            else if ((0, y.getPropositionListSoftBundleGroup)(t()) && (0, y.getPropositionListSoftBundleGroup)(t()) == (0, v.getSelectedSoftBundleGroup)(t()) && ((0, v.isProductListPage)(t()) || (0, v.isProductDetailsPage)(t()))) {
                if ("B2B" == (0, y.getMarketContext)(t())) S.default.saveInSessionStorage("dontUseDefaults", !0);
                else if (-1 < [E.default.DATA].indexOf((0, y.getSelectedOfferType)(t()))) return void e((0, g.gotoCartSummary)());
                window.location.href = S.default.getLastViewedOfferPage()
            } else e((0, g.gotoCartSummary)())
        }
    };
    e.addToCartWithCounter = n;

    function I() {
        return function(e, t) {
            e({
                type: c.REDIRECT_TO_CART
            }), e((0, m.clearPropositionId)()), e((0, h.clearLoyaltyLength)()), e((0, h.clearProcessType)()), e((0, h.clearPropositionListSoftBundleGroup)()), e((0, T.clearAddTerminalToOfferFromSessionStorage)()), e((0, m.clearDeviceInstalmentsCountFromSessionStorage)()), e((0, m.clearSelectedVases)()), (0, v.isDuet)(t()) ? location.href = localStorage.getItem("suflerRedirectUrl") : location.href = o.constants.url.cart
        }
    }
    var R = function(e, t, o, r) {
        if (o && o.message && "string" == typeof o.message) {
            var s = {
                responseJSON: {
                    message: o.message
                }
            };
            e(B(t, s))
        } else e(_(t, o, r)), e(F())
    };
    e.redirectToCart = I;
    var _ = function(e, u, l) {
            return function(e, t) {
                var o, r;
                if (o = l, r = u, C.default.pushAddToCartEvent(o.rateplanId, o.propositionId, r.bundleNo), o.deviceVariant && C.default.pushAddToCartEvent(o.deviceVariant, o.propositionId, r.bundleNo), r.vases && r.vases.forEach(function(e) {
                        return C.default.pushAddVasToCartEvent(e.productCode, o.propositionId, r.bundleNo)
                    }), e((0, P.clearStayLoveRetentionMSISDN)()), (0, L.getAddFromLink)(t())) e(I());
                else if (OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, u.bundleCount, "header"), e({
                        type: c.POST_TO_CART_SUCCESS
                    }), e((0, h.propositionListCountDecrement)()), e({
                        type: A.AUTHORIZATION_ADD_TO_CART_AFTER,
                        value: !1
                    }), (0, p.getProcessTypesIncludeAssignment)(t())) e(I());
                else {
                    var s = (0, y.getPropositionListSoftBundleGroup)(t());
                    s || (0, v.isProductListPage)(t()) || (0, v.isProductDetailsPage)(t()) || (0, v.isAccessoryListPage)(t()) || (e((0, h.setPropositionListSoftBundleGroup)()), s = (0, y.getPropositionListSoftBundleGroup)(t()));
                    var a = (0, y.getPropositionListCount)(t()),
                        i = (0, y.getMarketContext)(t()),
                        n = (0, y.getSelectedOfferType)(t()),
                        d = (0, y.getSelectedProcessTypeValue)(t());
                    if (s && s == (0, v.getSelectedSoftBundleGroup)(t()) && ((0, v.isProductListPage)(t()) || (0, v.isProductDetailsPage)(t()) || (0, v.isAccessoryListPage)(t()))) return "B2B" == i && S.default.saveInSessionStorage("dontUseDefaults", !0), e((0, m.clearPropositionId)()), e((0, h.clearLoyaltyLength)()), e((0, h.clearProcessType)()), e((0, h.clearOfferType)()), void("/pwa" === S.default.getLastViewedOfferPage() || "B2B" !== i && -1 < [E.default.DATA].indexOf(n) ? (e((0, h.clearPropositionListSoftBundleGroup)()), e(I())) : S.default.getLastViewedOfferPage() && "" != S.default.getLastViewedOfferPage() ? window.location.href = S.default.getLastViewedOfferPage() : e(I()));
                    if ((0, g.bodyLoaderEvent)("modules.loader.hide"), "B2B" == (0, y.getMarketContext)(t())) return !s || s != (0, v.getSelectedSoftBundleGroup)(t()) ? void e(I()) : (e({
                        type: f.USE_DEFAULT_OFFER_TYPE,
                        use: !1
                    }), e({
                        type: f.USE_DEFAULT_PROCESS,
                        use: !1
                    }), e({
                        type: f.USE_DEFAULT_LOYALTY,
                        use: !1
                    }), e({
                        type: f.USE_DEFAULT_OFFER,
                        use: !1
                    }), S.default.isMnpApplication(d) || (e((0, m.clearPropositionId)()), e((0, h.clearLoyaltyLength)()), e((0, h.clearProcessType)()), e((0, h.clearOfferType)())), e((0, T.fetchMiniCart)()), void e((0, b.requestLoggedCustomerData)()));
                    if (-1 === [E.default.DATA].indexOf(n)) {
                        if (0 == a && s && !((0, v.isProductListPage)(t()) || (0, v.isProductDetailsPage)(t()) || (0, v.isAccessoryListPage)(t()))) return e((0, m.clearPropositionId)()), e((0, h.clearLoyaltyLength)()), e((0, h.clearProcessType)()), e((0, T.fetchMiniCart)()), void e((0, b.requestLoggedCustomerData)());
                        if (s && !((0, v.isProductListPage)(t()) || (0, v.isProductDetailsPage)(t()) || (0, v.isAccessoryListPage)(t()))) return e((0, T.fetchMiniCart)()), void e((0, b.requestLoggedCustomerData)())
                    }
                    e((0, h.clearPropositionListSoftBundleGroup)()), e(I())
                }
            }
        },
        B = function(e, r) {
            return function(e, t) {
                e({
                    type: c.POST_TO_CART_ERROR
                });
                var o = r.responseJSON && r.responseJSON.message || "Wystąpił błąd w trakcie dodania do koszyka";
                (0, g.bodyLoaderEvent)("modules.loader.hide"), e((0, P.showError)(o))
            }
        },
        F = function() {
            return function(e, t) {
                e({
                    type: c.CLEAR_CHECK_MSISDN
                })
            }
        }
});
//# sourceMappingURL=cart.js.map