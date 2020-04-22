define(["exports", "../actionTypes", "../remoteApi", "eshop/modules/configurator/actions/cart", "../listUtils", "eshop/modules/configurator/actions/filters", "eshop/modules/configurator/selectors/filters", "eshop/modules/configurator/selectors/metaData", "eshop/modules/configurator/actions/offers", "eshop/modules/simfree/selectors", "eshop/modules/configurator/remoteApi", "eshop/modules/configurator/actionTypes", "eshop/modules/auth/actionTypes", "eshop/utils/GenesysWebEngagementUtils", "eshop/modules/simfree/actions/filter", "eshop/utils/OnlineUtils", "eshop/modules/checkout/actions/app", "../constants/OfferTypeEnum", "../../../flux/utils/OraEshopAPI", "../../checkout/actions/app", "../../configurator/constants", "../../magnum2/actions/magnum", "eshop/modules/configurator/selectors/offers", "eshop/utils/DataLayerUtils", "eshop/utils/PickupPosMapUtils", "../../configurator/selectors/filters", "../../auth/selectors/authorization", "../../checkout/selectors", "../../auth/actions/authorization", "../../configurator/actions/filters"], function(e, l, a, n, s, i, u, c, f, d, p, S, o, E, T, g, y, P, C, _, O, m, D, R, A, h, I, F, L, v) {
    "use strict";

    function b() {
        return function(e) {
            e({
                type: l.UPDATE_ADD_TO_CART_ERROR,
                errors: []
            })
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.fetchDeviceByCode = function(e) {
        return function(t) {
            a.default.getDeviceByCode(e).then(function(e) {
                return t({
                    type: l.GET_DEVICE_DATA_BY_CODE,
                    payload: e
                })
            })
        }
    }, e.clearErrors = b, e.addToCart = function(r, o, e) {
        return function(t, e) {
            if (!(0, d.addToCartInProgress)(e())) {
                t({
                    type: l.ADD_TO_CART_START
                }), (0, y.bodyLoaderShow)();
                a.default.addToCart(r, o).then(function(e) {
                    200 === e.code ? (E.default.pushAddToCartEvent(r, o, e.bundleNo), t(V(e)), t((0, n.redirectToCart)())) : (y.bodyLoaderHide(), 400 !== e.code ? t(U("other")) : (t((0, L.showError)(e.message || "")), t(b())))
                }), g.default.removePwaSuflerContextFromSession()
            }
        }
    }, e.addMagnumToCart = function(c) {
        return function(t, e) {
            var r = e();
            if (!(0, d.addToCartInProgress)(r)) {
                t({
                    type: l.ADD_TO_CART_START
                }), (0, y.bodyLoaderShow)();
                var o = r.magnum.knaNumber,
                    n = r.magnum.selectedMobileTransaction.number,
                    a = r.magnum.selectedFixBroadbandTransaction.number,
                    s = r.magnum.selectedFixVoipTransaction.designationNumber || r.magnum.selectedFixBroadbandTransaction.designationNumber,
                    i = r.magnum.selectedProposition.code,
                    u = r.magnum.durationList.secondaryChoiceOffer;
                C.default.addMagnumToMultiCart(i, c, s, o, n, a, u).then(function() {
                    t({
                        type: l.ADD_TO_CART_SUCCESS
                    }), t((0, _.gotoCartSummary)()), (0, y.bodyLoaderHide)()
                }, function(e) {
                    t({
                        type: l.UPDATE_ADD_TO_CART_ERROR,
                        errors: [e.responseJSON.message || "other"]
                    }), (0, y.bodyLoaderHide)()
                }), g.default.removePwaSuflerContextFromSession()
            }
        }
    }, e.addToCartSuccess = V, e.getProductList = function(e, r) {
        return function(t) {
            a.default.getProductList(e, r).then(function(e) {
                return t({
                    type: l.GET_ALL_PRODUCTS,
                    products: e
                })
            })
        }
    }, e.setSelectedBaseDeviceCode = function(t) {
        return function(e) {
            e({
                type: l.SET_SELECTED_BASE_DEVICE_CODE,
                deviceCode: t
            })
        }
    }, e.setSelectedVariant = function(o, n, a) {
        return function(e, t) {
            e({
                type: l.SET_SELECTED_VARIANT,
                payload: o,
                color: n,
                filterState: a
            });
            var r = (0, D.getSelectedOffer)(t());
            r && R.default.pushProductDetailsView(r, (0, u.getSelectedOfferType)(t()), (0, u.getClientContext)(t()), (0, d.getSelectedVariant)(t()), (0, h.getMarketContext)(t()), (0, I.getSalesChannel)(t()), (0, F.getAssistModeStateData)(t())), A.default.setSelectedDeviceVariant(o.productId)
        }
    }, e.setSelectedVariantObject = function(t) {
        return function(e) {
            e({
                type: l.SET_SELECTED_VARIANT_OBJECT,
                payload: t
            })
        }
    }, e.setSelectedDeviceTab = function(t) {
        return function(e) {
            e({
                type: l.SET_SELECTED_DEVICE_TAB,
                deviceTab: t
            })
        }
    }, e.setSelectedVariantOnList = function(r, o, n) {
        return function(e, t) {
            e({
                type: l.SET_SELECTED_VARIANT_ON_LIST,
                products: s.default.changeVariant(t(), r, n),
                color: o
            })
        }
    }, e.setSelectedVariantOnRecommended = function(r, o, n, a) {
        return function(e, t) {
            e({
                type: l.SET_SELECTED_VARIANT_ON_RECOMMENDED,
                products: s.default.changeRecommendedVariant(t(), r, n, a),
                productId: n,
                color: o
            })
        }
    }, e.setChosenImageIndex = function(t) {
        return function(e) {
            e({
                type: l.SET_CHOSEN_IMAGE_INDEX,
                payload: t
            })
        }
    }, e.changeCategory = function(t) {
        t && t.code && !window.location.href.includes("/details") && g.default.changeOrAddUrlParameterDisabledOnCheckout("selectedCategory", t.code);
        return function(e) {
            e({
                type: l.SET_SELECTED_CATEGORY,
                selectedCategory: t && t.code,
                selectedCategoryName: t && t.name
            })
        }
    }, e.setRating = function(t) {
        return function(e) {
            e({
                type: l.SET_REVIEW_RATING,
                rating: t
            })
        }
    }, e.setLogin = function(t) {
        return function(e) {
            e({
                type: l.SET_REVIEW_LOGIN,
                login: t
            })
        }
    }, e.setMessage = function(t) {
        return function(e) {
            e({
                type: l.SET_REVIEW_MESSAGE,
                message: t
            })
        }
    }, e.sendReview = function(e, r, o, n) {
        return function(t) {
            a.default.sendReview(e, r, o, n).then(function() {
                return t({
                    type: l.SEND_REVIEW,
                    payload: !0
                })
            }, function(e) {
                return t({
                    type: l.SEND_REVIEW,
                    payload: !1
                })
            })
        }
    }, e.setCartInvoiceValue = e.setCashInvoiceLimit = e.setShowRatingErrorModal = e.setDeliveryAndPaymentComponentUid = e.fetchPickupLastPos = e.trySetDefaultOffer = e.matchPropositionIdToselectedRatePlan = e.getStaticSimFreeDocuments = e.getSimfreeDocuments = e.setSimfreeProcessData = e.selectConvergentOffer = e.setOfferType = e.fetchStorageCapacityForProduct = e.fetchDeliveryAndPaymentHtml = e.setOfferTypeAction = e.getParamsFromUrl = e.setOfferTypeCmsConf = e.fetchIfActivePickupFromShelf = e.setErrorCode = void 0, l = babelHelpers.interopRequireWildcard(l), a = babelHelpers.interopRequireDefault(a), s = babelHelpers.interopRequireDefault(s), p = babelHelpers.interopRequireDefault(p), S = babelHelpers.interopRequireWildcard(S), o = babelHelpers.interopRequireWildcard(o), E = babelHelpers.interopRequireDefault(E), g = babelHelpers.interopRequireDefault(g), P = babelHelpers.interopRequireDefault(P), C = babelHelpers.interopRequireDefault(C), R = babelHelpers.interopRequireDefault(R), A = babelHelpers.interopRequireDefault(A);
    var U = function(r) {
        return function(e, t) {
            e({
                type: l.UPDATE_ADD_TO_CART_ERROR,
                errors: [r]
            })
        }
    };

    function V(r) {
        return OPL.UI.fire(OPL.UI.EVENTS.modules.basket.counter.update, r.offerCounter, "header"),
            function(e, t) {
                e({
                    type: l.ADD_TO_CART,
                    payload: r
                }), e({
                    type: l.ADD_TO_CART_SUCCESS
                }), e({
                    type: o.STAY_LOVE_RETENTION_MSISDN,
                    msisdn: ""
                })
            }
    }
    e.setErrorCode = U;

    function N(t, e) {
        a.default.getDocumentsForDevice("MOB_CPO_SALES_OF_GOODS", (0, d.getDefaultProcess)(e())).then(function(e) {
            return t({
                type: S.SELECT_DOCUMENTS,
                payload: e
            })
        }).catch(function(e) {})
    }

    function M() {
        return function(t, e) {
            var r = null;
            (0, d.isProductDetailsPage)(e()) && (r = (0, d.getSelectedBaseDeviceCode)(e()));
            var o = (0, d.getCurrentSelectedAvailableProductsKey)(e());
            t((0, f.fetchContractRole)(o)), t((0, f.fetchFirstOffer)(o));
            var n = (0, h.getOfferTypeFiltersCached)(e()),
                a = (0, u.getSelectedOfferType)(e()),
                s = n.findIndex(function(e) {
                    return e.offerType === a
                }); - 1 !== s ? t(G(n[s].offerFilters)) : (t({
                type: S.FETCH_OFFER_FILTERS_START
            }), p.default.getOfferFilters(o, r).then(function(e) {
                return t(G(e))
            }))
        }
    }

    function B(t, e) {
        a.default.checkIfActivePickupFromShelf((0, u.getSelectedOfferType)(e()), (0, u.getSelectedProcessTypeValue)(e()), H((0, d.getSelectedOfferTypeCmsConf)(e())), (0, d.getSelectedVariant)(e())).then(function(e) {
            return t({
                type: l.CHECK_IF_ACTIVE_PICKUP_FORM_SHELF,
                data: e
            })
        }).catch(function(e) {})
    }
    var G = function(r) {
        return function(e, t) {
            var n;
            e({
                type: S.FETCH_OFFER_FILTERS,
                payload: r,
                urlParametersUsed: (0, c.getUrlParametersUsed)(t()),
                useDefaultProcess: (0, u.getUseDefaultProcess)(t()),
                useDefaultLoyalty: (0, u.getUseDefaultLoyalty)(t()),
                useDefaultOffer: (0, u.getUseDefaultOffer)(t())
            }), e((n = r, function(e, t) {
                if ((0, u.getUseDefaultProcess)(t())) {
                    var r = (0, d.getDefaultProcess)(t());
                    if ((0, c.getUrlParametersUsed)(t()) || !g.default.getParameterValueFromUrl("processType") && !g.default.loadFromSessionStorage("processType")) r && n && n.find(function(e) {
                        return e.value === r
                    }) && e({
                        type: S.SELECT_PROCESS_TYPE,
                        processType: r
                    });
                    else {
                        var o = g.default.getParameterValueFromUrl("processType") || g.default.loadFromSessionStorage("processType");
                        (n && n.map(function(e) {
                            return e.value
                        }) || []).includes(o) ? e({
                            type: S.SELECT_PROCESS_TYPE,
                            processType: o,
                            useDefaultLoyalty: (0, u.getUseDefaultLoyalty)(t())
                        }) : e({
                            type: S.SELECT_PROCESS_TYPE,
                            processType: r
                        })
                    }
                    g.default.saveInStorageOnCanonicalLinks("processType", (0, u.getSelectedProcessTypeValue)(t()))
                }
            })), e(i.urlParametersUsed), g.default.removeFromSessionStorage("dontUseDefaults"), ((0, d.isProductDetailsPage)(t()) || (0, d.isProductListPage)(t()) || (0, d.isAccessoryListPage)(t())) && N(e, t), (0, u.getCallOffersWithMsisdn)(t()) ? ((0, i.checkMsisdnAndGetOffersProductList)((0, u.getVerifiedMsisdn)(t()))(e, t), (0, d.isProductDetailsPage)(t()) && (0, i.getOffersAction)(e, t, (0, d.getCurrentSelectedAvailableProductsKey)(t()))) : (0, d.isProductDetailsPage)(t()) ? (0, v.getProductDetailsOffersWithoutOfferSelectorAction)(e, t, (0, d.getCurrentSelectedAvailableProductsKey)(t()), !0) : (0, d.isProductListPage)(t()) ? (0, i.getProductListOffersAction)(e, t, (0, d.getCurrentSelectedAvailableProductsKey)(t()), !0) : (0, i.getOffersAction)(e, t, (0, d.getCurrentSelectedAvailableProductsKey)(t()))
        }
    };
    e.fetchIfActivePickupFromShelf = B;
    e.setOfferTypeCmsConf = function(o, n) {
        return function(e, t) {
            if (e({
                    type: l.REGISTER_OFFER_TYPES_CMS_CONF,
                    cmsConf: o,
                    validOfferTypes: n
                }), e((0, i.setMarketContext)(H((0, d.getSelectedOfferTypeCmsConf)(t())))), (0, u.getSelectedOfferType)(t()) !== P.default.SIMFREE && (0, d.getCurrentSelectedAvailableProductsKey)(t()) ? e(M()) : (0, u.getSelectedOfferType)(t()) === P.default.CONVERGENT ? (q(t, e), w(t, e)) : (0, d.getDefaultProcess)(t()) ? (e({
                    type: S.SELECT_PROCESS_TYPE,
                    processType: (0, d.getDefaultProcess)(t())
                }), e({
                    type: S.SELECT_OFFER,
                    propositionId: (0, d.getDefaultProposition)(t())
                }), N(e, t), e(i.urlParametersUsed)) : (e((0, i.clearProcessType)()), e((0, i.clearLoyaltyLength)()), e((0, f.clearPropositionId)())), !(0, d.getCurrentSelectedAvailableProductsKey)(t())) {
                var r = (0, d.getCurrentSelectedAvailableProductsKeyByUrlParameter)(t()) || (0, d.getFirstAvailableProductsKey)(t());
                e((0, f.fetchContractRole)(r)), e((0, f.fetchFirstOffer)(r))
            }
            B(e, t), g.default.removeFromSessionStorage("dontUseDefaults")
        }
    };

    function H(e) {
        return (e && e.market || "B2C").replace("_SOHO", "")
    }
    e.getParamsFromUrl = function() {
        return function(e) {
            e(i.urlParametersUsed)
        }
    };

    function k(r) {
        return function(e, t) {
            e({
                type: l.SELECT_OFFER_TYPE,
                offerType: r
            }), g.default.processOneTimeCostPricesUrlParameter((0, d.getSelectedOneTimePricesList)(t()))
        }
    }
    e.setOfferTypeAction = k;

    function Y(r) {
        return function(t, e) {
            a.default.getOplHtmlContentForOfferAndProcess(g.default.getParameterValueFromUrl("offerType") || (0, u.getSelectedOfferType)(e()), g.default.getParameterValueFromUrl("processType") || (0, u.getSelectedProcessTypeValue)(e()), null != r ? r : (0, d.getDeliveryAndPaymentComponentUid)(e())).then(function(e) {
                return t({
                    type: l.GET_DELIVERY_AND_PAYMENT_HTML,
                    data: e
                })
            }).catch(function(e) {})
        }
    }
    e.fetchDeliveryAndPaymentHtml = Y;
    e.fetchStorageCapacityForProduct = function() {
        return function(t, e) {
            a.default.getStorageCapacityForProduct((0, d.getSelectedBaseDeviceCode)(e())).then(function(e) {
                return t({
                    type: l.GET_PRODUCT_STORAGE_CAPACITY,
                    data: e
                })
            }).catch(function(e) {})
        }
    };
    e.setOfferType = function(r) {
        return function(e, t) {
            e(k(r)), r !== P.default.SIMFREE && (0, d.getCurrentSelectedAvailableProductsKey)(t()) ? e(M()) : r === P.default.CONVERGENT ? (q(t, e), w(t, e)) : (0, d.getDefaultProcess)(t()) ? (e({
                type: S.SELECT_PROCESS_TYPE,
                processType: (0, d.getDefaultProcess)(t())
            }), e({
                type: S.SELECT_OFFER,
                propositionId: (0, d.getDefaultProposition)(t())
            }), (0, d.isProductListPage)(t()) && (0, T.reloadProductList)()(e, t), N(e, t)) : (0, d.isProductListPage)(t()) && (0, T.reloadProductList)()(e, t), (0, d.getDeliveryAndPaymentComponentUid)(t()) && Y()(e, t)
        }
    };
    var K = function(t) {
        return function(e) {
            e({
                type: S.SELECT_OFFER,
                propositionId: t
            })
        }
    };

    function q(e, t) {
        var r = JSON.parse(g.default.loadFromSessionStorage(O.constants.magnumStore));
        r && !e().magnum.selectedProposition && (t((0, m.setMagnumStore)(r)), (0, d.isProductDetailsPage)(e()) && ((0, i.getProductDetailsConvergentOffersAction)(t, e), K(r.selectedProposition && r.selectedProposition.mobileVoiceBundleTemplateCode)(t)))
    }

    function w(e, t) {
        0 === e().magnum.durationList.durations.length && (t({
            type: l.GET_ALL_PRODUCTS,
            products: []
        }), t({
            type: l.GET_PRODUCTS_TREES,
            payload: null
        })), (0, T.reloadProductList)()(t, e)
    }
    e.selectConvergentOffer = K;
    e.setSimfreeProcessData = function() {
        return function(e) {
            e(k("SIMFREE")), e({
                type: S.SELECT_PROCESS_TYPE,
                processType: "SALE_OF_GOODS"
            }), e({
                type: S.SELECT_OFFER,
                propositionId: "DEFAULT_SALES_OF_GOODS_PROPOSITION$MOB_CPO_SALES_OF_GOODS"
            })
        }
    };
    e.getSimfreeDocuments = function() {
        return function(t, e) {
            return a.default.getDocumentsForDevice((0, d.getSelectedBaseDeviceCode)(e()), "SALE_OF_GOODS").then(function(e) {
                return t({
                    type: S.SELECT_DOCUMENTS,
                    payload: e
                })
            })
        }
    };
    e.getStaticSimFreeDocuments = function() {
        return function(t, e) {
            a.default.getDocumentsForDevice("MOB_CPO_SALES_OF_GOODS", "SALE_OF_GOODS").then(function(e) {
                return t({
                    type: S.SELECT_DOCUMENTS,
                    payload: e
                })
            })
        }
    };

    function x() {
        return function(e, t) {
            e({
                type: S.SELECT_PROPOSITION_ID,
                propositionId: (0, D.getPropositionIdByRatePlanId)((0, D.getSelectedBaseRatePlanId)(t()), (0, D.getOffersForCurrentFilters)(t()))
            })
        }
    }
    e.matchPropositionIdToselectedRatePlan = x;
    e.trySetDefaultOffer = function() {
        return function(e, t) {
            if ((0, u.getUseDefaultOffer)(t()) || g.default.getParameterValueFromUrl("serviceplan")) {
                var r = (0, d.getDefaultServicePlan)(t()),
                    o = g.default.getValueFromUrlOrStorage("serviceplan", "serviceplan"),
                    n = (0, D.getOffersForCurrentFilters)(t());
                if (n && o && (n.find(function(e) {
                        return e.rateplanBaseProductId == o
                    }) || (o = "")), o) {
                    r = o;
                    var a = g.default.getValueFromUrlOrStorage("selectedPropositionId", "selectedPropositionId"),
                        s = (0, D.getPropositionIdsByRatePlanId)(r, (0, D.getOffersForCurrentFilters)(t()));
                    s && s.find(function(e) {
                        return e == a
                    }) || (a = (0, D.getPropositionIdByRatePlanId)(r, (0, D.getOffersForCurrentFilters)(t()))), e({
                        type: S.SELECT_OFFER,
                        rateplanBaseProductId: r,
                        propositionId: a
                    })
                } else if (r) {
                    var i = (0, D.getAvailableBaseRateplanIds)(t());
                    i.includes(r) || (r = i[0]), e({
                        type: S.SELECT_OFFER,
                        rateplanBaseProductId: r,
                        propositionId: (0, D.getPropositionIdByRatePlanId)(r, (0, D.getOffersForCurrentFilters)(t()))
                    })
                }
                g.default.saveInStorageOnCanonicalLinks("processType", (0, u.getSelectedProcessTypeValue)(t()))
            } else e(x())
        }
    };
    e.fetchPickupLastPos = function() {
        return function(t) {
            a.default.getLastSelectedPos().then(function(e) {
                return t({
                    type: l.GET_LAST_PICKUP_POS,
                    data: e
                })
            }).catch(function(e) {})
        }
    };
    e.setDeliveryAndPaymentComponentUid = function(t) {
        return function(e) {
            e({
                type: l.SET_DELIVERY_AND_PAYMENT_COMPONENT_UID,
                data: t
            })
        }
    };
    e.setShowRatingErrorModal = function(r) {
        return function(e, t) {
            e({
                type: l.SHOW_RATING_MESSAGE,
                value: r
            })
        }
    };
    e.setCashInvoiceLimit = function(r) {
        return function(e, t) {
            e({
                type: l.SET_CASH_INVOICE_LIMIT,
                data: r
            })
        }
    };
    e.setCartInvoiceValue = function(r) {
        return function(e, t) {
            e({
                type: l.SET_CART_INVOICE_VALUE,
                data: r
            })
        }
    }
});
//# sourceMappingURL=app.js.map