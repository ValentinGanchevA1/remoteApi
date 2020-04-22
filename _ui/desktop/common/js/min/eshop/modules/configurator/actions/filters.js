define(["exports", "../actionTypes", "../../cart/actionTypes", "eshop/modules/simfree/actionTypes", "../remoteApi", "../selectors/filters", "eshop/modules/simfree/selectors", "../selectors/offers", "eshop/modules/configurator/actions/offers", "eshop/modules/simfree/actions/filter", "eshop/utils/OnlineUtils", "eshop/utils/DataLayerUtils", "eshop/modules/configurator/selectors/metaData", "../../magnum2/actions/magnum", "../../simfree/actions/app", "../../cart/selectors", "../../auth/selectors/authorization", "../../checkout/selectors", "../utils", "lodash", "../selectors/root", "../../auth/actions/api", "../../core/constants/TransactionProcessTypeEnum", "../../../utils/SimfreeUtils", "../../simfree/selectors"], function(e, a, o, t, l, f, u, d, p, S, c, y, C, g, O, i, T, E, s, r, n, P, _, L, D) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isMatchingFilters = e.setProcessForMsisdn = e.verifyMsisdnB2B = e.setMarketContext = e.selectProcessTypeB2B = e.selectProductDetailsProcessType = e.selectProductListProcessType = e.selectProcessType = e.selectLoyaltyLengthB2B = e.selectProductDetailsLoyaltyLength = e.selectProductListLoyaltyLength = e.selectLoyaltyLength = e.clearLoyaltyLength = e.clearProcessType = e.clearOfferType = e.urlOfferParametersUsed = e.urlParametersUsed = e.requiredMsisdnVerificationOff = e.requiredMsisdnVerificationOn = e.changeMsisdnInput = e.msisdnVerificationNeeded = e.propositionListCountSetMode = e.propositionListCountSet = e.propositionListCountDecrement = e.propositionListCountIncrement = e.clearCheckMsisdnB2B = e.clearCheckMsisdn = e.setMaxSimCount = e.checkMsisdnAndGetOffersProductList = e.checkMsisdnAndGetOffersB2B = e.checkMsisdnAndGetOffers = e.fetchOfferFilters = e.getDocumentsAction = e.getProductDetailsConvergentOffersAction = e.getProductDetailsOffersWithoutOfferSelectorAction = e.getProductListOffersAction = e.getOffersAction = e.clearPropositionListSoftBundleGroup = e.clearPropositionListOfferType = e.setPropositionListSoftBundleGroup = e.subscribeToClientContextChange = e.setClientContext = void 0, a = babelHelpers.interopRequireWildcard(a), o = babelHelpers.interopRequireWildcard(o), l = babelHelpers.interopRequireDefault(l), c = babelHelpers.interopRequireDefault(c), y = babelHelpers.interopRequireDefault(y), g = babelHelpers.interopRequireWildcard(g), r = babelHelpers.interopRequireDefault(r), _ = babelHelpers.interopRequireDefault(_), L = babelHelpers.interopRequireDefault(L);
    e.setClientContext = function(r) {
        return function(t, e) {
            t({
                type: r ? a.CLIENT_CONTEXT_ENABLED : a.CLIENT_CONTEXT_DISABLED
            }), (0, f.getClientContextChangeHandlers)(e()).forEach(function(e) {
                return t(e())
            }), y.default.pushSIMOImpressionEvent((0, d.getOffersDataInContext)(e()).offers, (0, f.getSelectedFilters)(e()), (0, f.getMarketContext)(e()), (0, T.getSalesChannel)(e()), (0, E.getAssistModeStateData)(e()))
        }
    };
    e.subscribeToClientContextChange = function(r) {
        return function(e, t) {
            e({
                type: a.CLIENT_CONTEXT_CHANGE_SUBSCRIPTION,
                handler: r
            })
        }
    };

    function F(n) {
        return function(e, t) {
            if (n = n || (0, d.getOffersForCurrentFilters)(t()), e({
                    type: a.CAROUSEL_READY
                }), (0, f.getUseDefaultOffer)(t())) {
                var r = (0, d.getSelectedBaseRatePlanId)(t()),
                    s = n.find(function(e) {
                        return e.rateplanBaseProductId === r
                    });
                e((0, p.setSelectedOffer)(s && s.id || n[0] && n[0].id))
            } else e((0, O.matchPropositionIdToselectedRatePlan)())
        }
    }
    e.setPropositionListSoftBundleGroup = function() {
        return function(e, t) {
            e({
                type: a.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
                softBundleGroup: (0, u.getSelectedSoftBundleGroup)(t())
            })
        }
    };
    e.clearPropositionListOfferType = function() {
        return function(e, t) {
            e({
                type: a.PROPOSITION_LIST_OFFER_TYPE,
                offerType: null
            }), e({
                type: a.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
                softBundleGroup: null
            })
        }
    };
    e.clearPropositionListSoftBundleGroup = function() {
        return function(e, t) {
            e({
                type: a.PROPOSITION_LIST_SOFT_BUNDLE_GROUP,
                softBundleGroup: null
            })
        }
    };

    function I(t, r, e) {
        var s = 2 < arguments.length && void 0 !== e ? e : "";
        t({
            type: a.FETCH_OFFERS_START
        });
        var n = (0, u.getSelectedBaseDeviceCode)(r()),
            o = (0, f.getSelectedFilters)(r());
        return l.default.getOffers(o, s, n).then(function(e) {
            t({
                type: a.FETCH_OFFERS,
                payload: e,
                selectedFilters: o,
                useDefaultProcess: (0, f.getUseDefaultProcess)(r()),
                useDefaultLoyalty: (0, f.getUseDefaultLoyalty)(r()),
                useDefaultOffer: (0, f.getUseDefaultOffer)(r())
            }), M(t, r), t((0, O.trySetDefaultOffer)()), (0, O.fetchIfActivePickupFromShelf)(t, r), ((0, u.isProductListPage)(r()) || (0, D.isAccessoryListPage)(r())) && (0, S.reloadProductList)()(t, r), y.default.pushSIMOImpressionEvent((0, d.getOffersDataInContext)(r()).offers, o, (0, f.getMarketContext)(r()), (0, T.getSalesChannel)(r()), (0, E.getAssistModeStateData)(r())), t((0, p.tryAddToCartFromLink)())
        }, function(e) {})
    }
    e.getOffersAction = I;

    function h(t, r, e, s) {
        var n = 2 < arguments.length && void 0 !== e ? e : "",
            o = 3 < arguments.length && void 0 !== s && s;
        t({
            type: a.FETCH_OFFERS_START
        });
        var i = (0, d.getSelectedDeviceId)(r()),
            c = (0, f.getSelectedFilters)(r());
        l.default.getOffers(c, n, i, o).then(function(e) {
            t({
                type: a.FETCH_OFFERS,
                payload: e,
                selectedFilters: c
            }), t(H()), t((0, O.trySetDefaultOffer)()), M(t, r), (0, S.reloadProductList)()(t, r), t((0, p.tryAddToCartFromLink)())
        }).catch(function(e) {})
    }
    e.getProductListOffersAction = h;

    function m(t, r, e, s) {
        var n = 2 < arguments.length && void 0 !== e ? e : "",
            o = 3 < arguments.length && void 0 !== s && s;
        t({
            type: a.FETCH_OFFERS_START
        });
        var i = (0, u.getSelectedBaseDeviceCode)(r()),
            c = (0, f.getSelectedFilters)(r());
        l.default.getOffersWithoutOfferSelector(c, n, i, o).then(function(e) {
            t({
                type: a.FETCH_OFFERS,
                payload: e,
                selectedFilters: c
            }), M(t, r), (0, O.fetchIfActivePickupFromShelf)(t, r), t(H()), t((0, O.trySetDefaultOffer)()), y.default.pushProductDetailsView((0, d.getSelectedOffer)(r()), (0, f.getSelectedOfferType)(r()), (0, f.getClientContext)(r()), (0, u.getSelectedVariant)(r()), (0, f.getMarketContext)(r()), (0, T.getSalesChannel)(r()), (0, E.getAssistModeStateData)(r())), t((0, p.tryAddToCartFromLink)())
        }, function(e) {}).catch(function(e) {})
    }
    e.getProductDetailsOffersWithoutOfferSelectorAction = m;
    e.getProductDetailsConvergentOffersAction = function(o, i) {
        o({
            type: a.FETCH_OFFERS_START
        });
        var c = i().magnum,
            e = (0, u.getSelectedBaseDeviceCode)(i()),
            t = c.durationList.propositions.map(function(e) {
                return e.mobileVoiceBundleTemplateCode
            }),
            r = null;
        r = c.selectedProposition && c.selectedProposition.voice && c.selectedProposition.mobileVoiceBundleTemplateCode && c.selectedProposition.mobileVoiceBundleTemplateCode.includes(c.selectedProposition.voice.code) ? "POS" === c.possibleTransactions.salesChannel && "MNP" === c.selectedMobileTransaction.process ? "MNP_TWOSTEP" : c.selectedMobileTransaction.process : c.selectedFixBroadbandTransaction.process, l.default.getConvergentOffers(r, e, t).then(function(e) {
            var t, r, s, n;
            o({
                type: a.FETCH_OFFERS,
                payload: e,
                selectedFilters: (0, f.getSelectedFilters)(i())
            }), t = o, r = c, s = e.map(function(e) {
                return e.id
            }), n = r.durationList.propositions, r.durationList.propositions = n.filter(function(e) {
                return -1 !== s.indexOf(e.mobileVoiceBundleTemplateCode)
            }), t(g.fetchPropositionListActions.success(r.durationList))
        })
    };
    var M = function(t, e) {
        var r = (0, f.getSelectedFiltersProcessType)(e()),
            s = R(r)(e);
        l.default.getDocuments(s, r).then(function(e) {
            t({
                type: a.SELECT_DOCUMENTS,
                payload: e
            })
        })
    };
    e.getDocumentsAction = M;
    var R = function(t) {
        return function(e) {
            return t && _.default.SALE_OF_GOODS === t.processType ? {
                productIds: [L.default.CPO]
            } : (0, d.getRateplanIdsObj)(e())
        }
    };
    e.fetchOfferFilters = function() {
        return function(t, r) {
            l.default.getOfferFilters().then(function(e) {
                t({
                    type: a.FETCH_OFFER_FILTERS,
                    payload: e,
                    urlParametersUsed: (0, C.getUrlParametersUsed)(r()),
                    useDefaultProcess: (0, f.getUseDefaultProcess)(r()),
                    useDefaultLoyalty: (0, f.getUseDefaultLoyalty)(r())
                }), c.default.saveInSessionStorageAndUrlParameterDisabledOnCheckout("processType", (0, f.getSelectedProcessTypeValue)(r())), "undefined" != typeof Feedback && Feedback.showHideFeedback(), t((0, p.fetchContractRole)()), I(t, r)
            }).catch(function(e) {})
        }
    };

    function v(i) {
        return function(t, r) {
            t({
                type: a.CHECK_MSISDN
            });
            var e = (0, d.getSelectedDeviceId)(r()),
                s = (0, f.getSelectedFilters)(r()),
                n = (0, f.getMarketContext)(r()),
                o = (0, u.getCurrentSelectedAvailableProductsKey)(r());
            l.default.checkAndGetOffers(i, s, o, e).then(function(e) {
                t({
                    type: a.CHECK_MSISDN_RESULT,
                    payload: {
                        response: e,
                        process: s.processType,
                        offer: s.offerType,
                        market: n
                    }
                }), e.isPositive && (t((0, p.fetchContractRole)()), t({
                    type: a.FETCH_OFFERS,
                    payload: e.offers,
                    selectedFilters: (0, f.getSelectedFilters)(r())
                }), t((0, P.requestLoggedCustomerData)()), M(t, r), t(G(i, s.processType, e.process)), y.default.pushSIMOImpressionEvent((0, d.getOffersDataInContext)(r()).offers, s, (0, f.getMarketContext)(r()), (0, T.getSalesChannel)(r()), (0, E.getAssistModeStateData)(r())))
            }).catch(function(e) {
                t({
                    type: a.CHECK_MSISDN_ERROR,
                    message: e.responseText,
                    payload: {
                        response: {
                            msisdn: i
                        },
                        process: s.processType,
                        offer: s.offerType,
                        market: n
                    }
                })
            })
        }
    }
    e.checkMsisdnAndGetOffers = v;
    e.checkMsisdnAndGetOffersB2B = function(n, o) {
        return function(t, r) {
            var s = (0, f.getSelectedFiltersByIndexB2B)(o)(r());
            t({
                type: a.CHECK_MSISDN_RESULT_B2B_START,
                index: o
            }), l.default.checkAndGetOffers(n, s).then(function(e) {
                e.isPositive ? (t({
                    type: a.CHECK_MSISDN_RESULT_B2B,
                    status: "OK",
                    description: e.description,
                    msisdn: n,
                    index: o
                }), s.verifiedMsisdn = n, t({
                    type: a.FETCH_OFFERS,
                    payload: e.offers,
                    selectedFilters: s,
                    useDefaultProcess: (0, f.getUseDefaultProcess)(r()),
                    useDefaultLoyalty: (0, f.getUseDefaultLoyalty)(r()),
                    useDefaultOffer: (0, f.getUseDefaultOffer)(r())
                })) : t({
                    type: a.CHECK_MSISDN_RESULT_B2B,
                    status: "NOK",
                    description: e.description,
                    msisdn: null,
                    index: o
                })
            }).catch(function(e) {
                t({
                    type: a.CHECK_MSISDN_RESULT_B2B,
                    status: "NOK",
                    msisdn: null,
                    index: o
                })
            })
        }
    };

    function A(s, n) {
        return function(e, t) {
            var r = (0, f.getMarketContext)(t());
            e({
                type: a.CHECK_MSISDN_RESULT,
                payload: {
                    response: s,
                    process: n.processType,
                    offer: n.offerType,
                    market: r
                }
            }), e((0, p.fetchContractRole)()), e({
                type: a.FETCH_OFFERS,
                payload: s.offers,
                selectedFilters: (0, f.getSelectedFilters)(t())
            }), e((0, O.trySetDefaultOffer)(s)), e(H()), M(e, t), y.default.pushSIMOImpressionEvent((0, d.getOffersDataInContext)(t()).offers, n, (0, f.getMarketContext)(t()), (0, T.getSalesChannel)(t()), (0, E.getAssistModeStateData)(t())), (0, S.reloadProductList)()(e, t)
        }
    }

    function N(o) {
        return function(r, s) {
            r({
                type: a.CHECK_MSISDN
            });
            var e = (0, d.getSelectedDeviceId)(s()) || (0, u.getSelectedBaseDeviceCode)(s()),
                n = (0, f.getSelectedFilters)(s()),
                t = (0, u.getCurrentSelectedAvailableProductsKey)(s());
            (0, f.getCheckMsisdnResult)(s()) ? r(A((0, f.getCheckMsisdnResult)(s()), n)): l.default.checkAndGetOffers(o, n, t, e).then(function(e) {
                r(A(e, n))
            }).catch(function(e) {
                var t = (0, f.getMarketContext)(s());
                r({
                    type: a.CHECK_MSISDN_ERROR,
                    message: e.responseText,
                    payload: {
                        response: {
                            msisdn: o
                        },
                        process: n.processType,
                        offer: n.offerType,
                        market: t
                    }
                })
            })
        }
    }
    e.checkMsisdnAndGetOffersProductList = N;
    e.setMaxSimCount = function(e) {
        return {
            type: a.SET_MAX_SIM_COUNT,
            maxSimCount: e
        }
    };
    e.clearCheckMsisdn = function() {
        return {
            type: a.CLEAR_CHECK_MSISDN,
            payload: []
        }
    };
    e.clearCheckMsisdnB2B = function(e) {
        return {
            type: a.CLEAR_CHECK_MSISDN_B2B,
            index: e
        }
    };
    e.propositionListCountIncrement = function() {
        return function(e, t) {
            return e({
                type: a.PROPOSITION_LIST_COUNT_INCREMENT,
                defaultFilters: (0, f.getDefaultFilters)(t())
            })
        }
    };
    e.propositionListCountDecrement = function() {
        return {
            type: a.PROPOSITION_LIST_COUNT_DECREMENT
        }
    };
    e.propositionListCountSet = function(e) {
        return {
            type: a.PROPOSITION_LIST_COUNT_SET,
            count: e
        }
    };
    e.propositionListCountSetMode = function(e) {
        return {
            type: a.PROPOSITION_LIST_COUNT_SET_MODE,
            on: e
        }
    };
    var B = {
        type: a.MSISDN_VERIFICATION_NEEDED
    };
    e.msisdnVerificationNeeded = B;
    e.changeMsisdnInput = function(e, t) {
        return {
            type: a.MSISDN_INPUT_CHANGED,
            payload: {
                msisdn: e,
                valid: t
            }
        }
    };
    e.requiredMsisdnVerificationOn = function() {
        return function(e) {
            e({
                type: a.MSISDN_VERIFICATION_REQUIRED_ON
            })
        }
    };
    e.requiredMsisdnVerificationOff = function() {
        return function(e) {
            e({
                type: a.MSISDN_VERIFICATION_REQUIRED_OFF
            })
        }
    };
    var U = {
        type: a.URL_PARAMETERS_USED
    };
    e.urlParametersUsed = U;
    var k = {
        type: a.URL_OFFER_PARAMETERS_USED
    };
    e.urlOfferParametersUsed = k;
    e.clearOfferType = function() {
        return {
            type: t.SELECT_OFFER_TYPE,
            offerType: ""
        }
    };
    e.clearProcessType = function() {
        return {
            type: a.SELECT_PROCESS_TYPE,
            processType: ""
        }
    };
    e.clearLoyaltyLength = function() {
        return {
            type: a.CLEAR_LOYALTY_LENGTH
        }
    };
    e.selectLoyaltyLength = function(e) {
        return b(e, I)
    };
    e.selectProductListLoyaltyLength = function(e) {
        return b(e, h)
    };
    e.selectProductDetailsLoyaltyLength = function(e) {
        return b(e, m)
    };
    e.selectLoyaltyLengthB2B = function(e) {
        return b(e, I)
    };
    e.selectProcessType = function(e) {
        return x(e, I)
    };
    e.selectProductListProcessType = function(e) {
        return x(e, h)
    };
    e.selectProductDetailsProcessType = function(e) {
        return x(e, m)
    };
    e.selectProcessTypeB2B = function(e, t) {
        return x(e, t, getOffersActionB2B)
    };
    e.setMarketContext = function(n) {
        return function(e, t) {
            var r = (0, f.getMarketContext)(t()),
                s = (0, i.getPriceIsNet)(t());
            r === n && null != s || e({
                type: o.SET_PRICE_VIEW_NET,
                market: n
            }), e({
                type: a.SET_MARKET_CONTEXT,
                market: n
            })
        }
    };
    e.verifyMsisdnB2B = function(t, r) {
        return function(e) {
            e({
                type: a.CHECK_MSISDN_RESULT_B2B,
                msisdn: t,
                index: r
            })
        }
    };
    var b = function(r, s) {
            return function(e, t) {
                (0, f.getSelectedLoyaltyLengthValue)(t()) !== r && (e({
                    loyaltyLength: r,
                    type: a.SELECT_LOYALTY_LENGTH,
                    processType: (0, f.getSelectedProcessTypeValue)(t())
                }), (0, f.getCallOffersWithMsisdn)(t()) ? v((0, f.getVerifiedMsisdn)(t()))(e, t) : (0, d.getOffersForCurrentFilters)(t()) ? (e(F((0, d.getOffersForCurrentFilters)(t()))), y.default.pushSIMOImpressionEvent((0, d.getOffersDataInContext)(t()).offers, (0, f.getSelectedFilters)(t()), (0, f.getMarketContext)(t()), (0, T.getSalesChannel)(t()), (0, E.getAssistModeStateData)(t()))) : s(e, t, (0, u.getCurrentSelectedAvailableProductsKey)(t())).then(function() {
                    return e(F())
                }))
            }
        },
        x = function(r, s) {
            return function(e, t) {
                (0, f.getSelectedProcessTypeValue)(t()) != r && (e({
                    processType: r,
                    type: a.SELECT_PROCESS_TYPE,
                    availableLoyalties: (0, f.getFiltersData)(t())
                }), (0, d.getOffersForCurrentFilters)(t()) ? (e(F((0, d.getOffersForCurrentFilters)(t()))), y.default.pushSIMOImpressionEvent((0, d.getOffersDataInContext)(t()).offers, (0, f.getSelectedFilters)(t()), (0, f.getMarketContext)(t()), (0, T.getSalesChannel)(t()), (0, E.getAssistModeStateData)(t())), ((0, u.isProductListPage)(t()) || (0, D.isAccessoryListPage)(t())) && (0, S.reloadProductList)()(e, t), M(e, t)) : s(e, t, (0, u.getCurrentSelectedAvailableProductsKey)(t())), (0, u.getDeliveryAndPaymentComponentUid)(t()) && (0, O.fetchDeliveryAndPaymentHtml)()(e, t))
            }
        },
        H = function() {
            return function(e, t) {
                var r = (0, d.getOffersDataInContext)(t()).offers || [],
                    s = (0, u.getDefaultProposition)(t()),
                    n = c.default.getParameterValueFromUrl("serviceplan");
                if (!(0, C.getUrlOfferParametersUsed)(t()) && n) {
                    var o = r.filter(function(e) {
                            return e.rateplanBaseProductId === n
                        }),
                        i = V(o) || o[0];
                    e((0, p.setSelectedOffer)(i && i.id))
                } else c.default.loadFromSessionStorage("selectedPropositionId") ? e(F(r)) : s && (r.find(function(e) {
                    return e.id === s
                }) ? e((0, p.setSelectedOffer)(s)) : e(F(r)));
                e(k)
            }
        },
        G = function(r, s, n) {
            return function(e, t) {
                e({
                    msisdn: r,
                    genericProcess: s,
                    concreteProcess: n,
                    type: a.PROCESS_FOR_MSISDN
                })
            }
        };
    e.setProcessForMsisdn = G;
    var V = function(e) {
        var t = c.default.getParameterValueFromUrl("selectedPropositionId") || c.default.loadFromSessionStorage("selectedPropositionId");
        return e.find(function(e) {
            return t == e.id
        })
    };
    e.isMatchingFilters = function() {
        return function(e, t) {
            var r = (0, n.getFiltersState)(t());
            return (0, s.filtersMatching)(r)
        }
    }
});
//# sourceMappingURL=filters.js.map