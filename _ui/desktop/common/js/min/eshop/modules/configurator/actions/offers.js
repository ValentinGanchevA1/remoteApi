define(["exports", "../actionTypes", "./cart", "eshop/modules/cart/actions/cart", "../selectors/filters", "eshop/modules/cart/selectors", "eshop/modules/auth/actions/authorization", "eshop/utils/OnlineUtils", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/selectors", "../selectors/offers", "eshop/utils/DataLayerUtils", "eshop/modules/configurator/selectors/metaData", "./filters", "eshop/modules/configurator/selectors/offers", "../remoteApi", "../../checkout/selectors", "../../simfree/actions/app", "../../auth/selectors/authorization", "eshop/modules/checkout/actions/app", "../../simfree/actions/filter"], function(e, s, l, a, c, t, u, i, f, d, p, S, C, E, I, o, g, O, T, r, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setDeviceInstallmentsInSessionForMagnum = function(t) {
        return function(e) {
            e({
                type: s.SET_DEVICE_INSTALMENTS_COUNT_IN_SESSION_STORAGE,
                deviceInstalmentsCount: t
            })
        }
    }, e.clearSelectedVases = e.selectVas = e.unselectVas = e.fetchFirstOffer = e.fetchContractRole = e.clearDeviceInstalmentsCountFromSessionStorage = e.pickDeviceB2B = e.setDeviceInstalmentsConfiguration = e.clearPropositionId = e.pickDevice = e.setSelectedDeviceInstalmentsCountForProductList = e.setSelectedOfferForProductList = e.setSelectedOffer = e.preSelectOffer = e.setCartConfigurationFromUrl = e.tryAddToCartFromLink = e.carouselReady = e.carouselPreparing = e.selectOffer = void 0, s = babelHelpers.interopRequireWildcard(s), i = babelHelpers.interopRequireDefault(i), S = babelHelpers.interopRequireDefault(S), o = babelHelpers.interopRequireDefault(o);

    function _(n, e, t, r) {
        var o = 1 < arguments.length && void 0 !== e ? e : -1,
            a = 2 < arguments.length && void 0 !== t ? t : "";
        return function(e, t) {
            var r = r || (0, p.getBaseRatePlanIdByPropositionId)(n)(t());
            (0, p.getDeviceInstalmentsCountValueByPropositionId)(n)(t());
            R(n)(e, t()), r && e({
                type: s.SELECT_OFFER,
                rateplanBaseProductId: r,
                propositionId: n,
                deviceId: a,
                position: o,
                urlParametersUsed: (0, C.getUrlParametersUsed)(t())
            }), (0, O.fetchIfActivePickupFromShelf)(e, t)
        }
    }

    function m(n, o, a, i) {
        return function(e, t) {
            if (S.default.pushAddToCartProductClickOfferEvent((0, p.getOfferDataInContextForPropositionId)(n)(t()), (0, c.getSelectedFilters)(t()), (0, d.getProductDataForVariantId)(a)(t()), a, o, (0, c.getMarketContext)(t()), (0, T.getSalesChannel)(t()), (0, g.getAssistModeStateData)(t())), S.default.pushAddToCartOfferEvent((0, p.getOfferDataInContextForPropositionId)(n)(t()), (0, c.getSelectedFilters)(t()), (0, d.getProductDataForVariantId)(a)(t()), a, o, (0, c.getMarketContext)(t()), (0, T.getSalesChannel)(t()), (0, g.getAssistModeStateData)(t())), e(_(n, o, a, i)), "WWW" === (0, T.getSalesChannel)(t()))(0, c.getVerifiedMsisdn)(t()) ? e((0, u.doSmsAccountVerification)()) : e((0, u.doSmsAuthorization)());
            else {
                var r = (0, c.getSelectedProcessTypeValue)(t());
                (0, c.getMsisdnVerificationNeeded)(t()) && (0, c.getVerifiedMsisdn)(t()) || ["ACTIVATION", "SALE_OF_GOODS", "INSTALMENT_SALES_OF_GOODS_NC"].includes(r) ? e((0, l.addToCart)()) : e(("INSTALMENT_SALES_OF_GOODS" === r ? (0, l.addInstallmentSalesOfGoodsToCart) : (0, f.doOpenVerificationModal))())
            }
        }
    }
    e.selectOffer = m;
    e.carouselPreparing = function() {
        return function(e, t) {
            e({
                type: s.CAROUSEL_PREPARING
            })
        }
    };
    e.carouselReady = function() {
        return function(e, t) {
            e({
                type: s.CAROUSEL_READY
            })
        }
    };
    e.tryAddToCartFromLink = function() {
        return function(e, t) {
            if ((0, C.getAddFromLink)(t())) {
                var r = i.default.getParameterValueFromUrl("propositionId"),
                    n = i.default.getParameterValueFromUrl("serviceplan"),
                    o = i.default.getParameterValueFromUrl("chosenDevice");
                if (r) n = (0, p.getBaseRatePlanIdByPropositionId)(r)(t());
                else if (n) {
                    var a = (0, p.getOffersForCurrentFilters)(t());
                    r = (0, p.getPropositionIdByRatePlanId)(n, a)
                }
                e(m(r, -1, o, n))
            }
        }
    };
    e.setCartConfigurationFromUrl = function() {
        return function(e, t) {
            if (i.default.getParameterValueFromUrl("autoadd")) {
                var r = i.default.getParameterValueFromUrl("serviceplan"),
                    n = i.default.getParameterValueFromUrl("propositionId"),
                    o = i.default.getParameterValueFromUrl("chosenDevice");
                e({
                    type: s.ADD_FROM_LINK,
                    serviceplan: r,
                    deviceId: o,
                    propositionId: n
                })
            }
        }
    };
    e.preSelectOffer = function(n, o, a) {
        return function(e, t) {
            e(_(n, o, a));
            var r = (0, I.getSelectedOffer)(t());
            r && (0, d.isProductDetailsPage)(t()) && S.default.pushProductDetailsView(r, (0, c.getSelectedOfferType)(t()), (0, c.getClientContext)(t()), (0, d.getSelectedVariant)(t()), (0, c.getMarketContext)(t()), (0, T.getSalesChannel)(t()), (0, g.getAssistModeStateData)(t()))
        }
    };
    e.setSelectedOffer = function(t) {
        return function(e) {
            return e(_(t))
        }
    };
    e.setSelectedOfferForProductList = function(t) {
        return function(e) {
            e(_(t)), e((0, f.reloadProductList)())
        }
    };
    var R = function(i) {
        return function(e, t) {
            var r = (0, p.getDeviceInstalmentsCountValueByPropositionId)(i)(t),
                n = (0, p.getCurrentDeviceInstalmentsCountValue)(t);
            if (!(-1 < r.indexOf(parseInt(n)))) {
                var o = (0, p.getDeviceInstalmentsConfigurationInContext)(t) && (0, p.getDeviceInstalmentsConfigurationInContext)(t).default,
                    a = r && 0 < r.length && r.includes(o) ? o : null;
                e({
                    type: s.SELECT_DEVICE_INSTALMENTS_COUNT,
                    deviceInstalmentsCount: a
                })
            }
        }
    };
    e.setSelectedDeviceInstalmentsCountForProductList = function(t) {
        return function(e) {
            e({
                type: s.SELECT_DEVICE_INSTALMENTS_COUNT,
                deviceInstalmentsCount: t
            }), e((0, f.reloadProductList)())
        }
    };
    e.pickDevice = function(r, n, o) {
        return function(e, t) {
            e((0, a.clearAddTerminalToOfferFromSessionStorage)()), e(F()), e(E.urlParametersUsed), e(_(r)), S.default.pushProductClickEvent((0, p.getOfferDataInContextForPropositionId)(r)(t()), (0, c.getSelectedFilters)(t()), o, null, (0, c.getMarketContext)(t()), (0, T.getSalesChannel)(t()), (0, g.getAssistModeStateData)(t())), i.default.pageRedirect(n)
        }
    };
    e.clearPropositionId = function() {
        return {
            type: s.CLEAR_OFFER
        }
    };
    e.setDeviceInstalmentsConfiguration = function(e) {
        return {
            type: s.SET_DEVICE_INSTALMENTS_CONFIGURATION,
            deviceInstalmentsConfiguration: e
        }
    };
    e.pickDeviceB2B = function(r) {
        return function(e, t) {
            i.default.pageRedirect(r)
        }
    };
    var F = function() {
        return {
            type: s.CLEAR_DEVICE_INSTALMENTS_COUNT_FROM_SESSION_STORAGE
        }
    };
    e.clearDeviceInstalmentsCountFromSessionStorage = F;
    e.fetchContractRole = function(n) {
        return function(t, e) {
            var r = (0, c.getMarketContext)(e()); - 1 !== ["B2B", "B2C"].indexOf(r) && (n = n || (0, d.getCurrentSelectedAvailableProductsKey)(e()) || (0, d.getFirstAvailableProductsKey)(e())) && (t({
                type: s.GET_CONTRACT_ROLE_START
            }), o.default.getContractRole({
                availableProductsKey: n
            }).then(function(e) {
                e.roles ? t({
                    type: s.GET_CONTRACT_ROLE_RESPONSE,
                    data: e
                }) : t({
                    type: s.GET_CONTRACT_ROLE_ERROR
                })
            }).catch(function(e) {
                t({
                    type: s.GET_CONTRACT_ROLE_ERROR
                })
            }))
        }
    };
    e.fetchFirstOffer = function(r) {
        return function(t, e) {
            r = r || (0, d.getFirstAvailableProductsKey)(e()), t({
                type: s.GET_FIRST_OFFER_START
            }), o.default.getFirstOffer({
                availableProductsKey: r
            }).then(function(e) {
                t(e ? {
                    type: s.GET_FIRST_OFFER_RESPONSE,
                    data: e
                } : {
                    type: s.GET_FIRST_OFFER_ERROR
                })
            }).catch(function(e) {
                t({
                    type: s.GET_FIRST_OFFER_ERROR
                })
            })
        }
    };
    e.unselectVas = function(r, n, o) {
        return function(e, t) {
            e({
                type: s.UNSELECT_VAS,
                propositionId: r,
                vasId: n,
                rateplanName: o
            })
        }
    };
    e.selectVas = function(r, n, o) {
        return function(e, t) {
            e({
                type: s.SELECT_VAS,
                propositionId: r,
                vasId: n,
                rateplanName: o
            })
        }
    };
    e.clearSelectedVases = function() {
        return function(e, t) {
            e({
                type: s.CLEAR_SELECTED_VASES
            })
        }
    }
});
//# sourceMappingURL=offers.js.map