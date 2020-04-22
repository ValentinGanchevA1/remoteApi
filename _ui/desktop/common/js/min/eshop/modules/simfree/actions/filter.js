define(["exports", "../actionTypes", "eshop/modules/configurator/actionTypes", "../remoteApi", "eshop/modules/configurator/remoteApi", "../filterUtils", "eshop/modules/simfree/selectors", "eshop/modules/configurator/selectors/filters", "eshop/utils/DataLayerUtils", "eshop/utils/OnlineUtils", "eshop/modules/configurator/selectors/offers", "eshop/modules/configurator/actions/cart", "eshop/modules/configurator/actions/filters", "../constants/OfferTypeEnum", "eshop/modules/cart/selectors", "../../configurator/selectors/filters", "../../auth/selectors/authorization", "../../checkout/selectors", "../selectors"], function(e, s, l, a, u, f, d, p, o, c, T, m, E, F, y, g, h, C, S) {
    "use strict";

    function _(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, i)
        }
        return r
    }

    function A(t, c) {
        var l = {
            category: ""
        };
        return function(o, e) {
            a.default.getProductsTree(k(e())).then(function(e) {
                return l.category = function t(e, r) {
                    if (!r || "" === r) return !1;
                    var i = !1;
                    if (e.code === r) return !0;
                    if (!e.subCategories) return !1;
                    e.subCategories.map(function(e) {
                        if (e.code === r) return i = !0;
                        i = i || t(e, r)
                    });
                    return i
                }(e, t) ? t : "", o({
                    type: s.GET_PRODUCTS_TREES,
                    payload: e,
                    initCategory: l.category
                })
            }).then(function(e) {
                return "" !== l.category ? a.default.getFiltersList(t) : e
            }).then(function(e) {
                return "" === l.category ? e : o({
                    type: s.GET_INIT_FILTERS,
                    filters: e,
                    actualAttrFilters: (i = c, n = {}, e.map(function(e) {
                        i[e.code] && "number" !== e.type && "enum" !== e.type && (n[e.code] = i[e.code]), i[e.code] && "enum" === e.type && P(i[e.code], e.availableValues) && (n[e.code] = i[e.code])
                    }), n),
                    actualAttrNumberFilters: (t = c, r = {}, e.map(function(e) {
                        "number" === e.type && t[e.code + "_to"] && (r[e.code + "_to"] = t[e.code + "_to"]), "number" === e.type && t[e.code + "_from"] && (r[e.code + "_from"] = t[e.code + "_from"])
                    }), r)
                });
                var t, r, i, n
            })
        }
    }

    function P(e, t) {
        var r = e.split(",");
        return t && t.length && r.every(function(e) {
            return t.includes(e)
        })
    }

    function O(n) {
        return function(t, e) {
            var r = e(),
                i = {};
            i.category = r.simfree.list.selectedCategory, i.producer = r.simfree.list.selectedProducer, i.start = r.simfree.list.currentPage, i.sortMode = r.simfree.list.selectedSort, r.simfree.list.allVisibility && (i.showAll = r.simfree.list.allVisibility), i.attrFilter = r.simfree.list.actualAttrFilters, i.attrStickerFilter = r.simfree.list.actualStickerAttrFilters, i.attrNumberFilter = r.simfree.list.actualAttrNumberFilters, i.priceFilter = r.simfree.list.priceFilter, i.matchToFilter = r.simfree.list.matchToFilter, i.searchValue = r.simfree.list.searchValue, i.isChangeProductMode = !!r.cart.addTerminalToOfferBundleNo && !!(0, y.getProductCodeByBundleNo)()(e()), r.cart.addTerminalToOfferBundleNo && (i.code = (0, y.getProductCodeByBundleNo)()(e())), r.simfree.list.productsFilter && 0 < Object.entries(r.simfree.list.productsFilter).length && (i.products = r.simfree.list.productsFilter), t(M(i)), n && (i.start = n), a.default.getFilteredProductList(i).then(function(e) {
                i.offerType = (0, p.getSelectedOfferType)(r), i.selectedOffer = (0, T.getSelectedOfferDataInContext)(r), i.clientContext = (0, p.getClientContext)(r), i.marketContext = (0, g.getMarketContext)(r), i.salesChannel = (0, h.getSalesChannel)(r), i = function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? _(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, i, {}, (0, C.getAssistModeStateData)(r)), o.default.pushProductListImpressions(e, i), t({
                    type: s.GET_ALL_PRODUCTS,
                    products: e
                })
            }, function(e) {})
        }
    }

    function i(n) {
        return function(r, i) {
            var e = b(i());
            r(M(e)), n && (e.start = n), a.default.getFilteredProductTree(e).then(function(e) {
                return r({
                    type: s.GET_PRODUCTS_TREES,
                    payload: e
                })
            }, function(e) {}).then(function() {
                a.default.fetchStickerConfiguration(R(e)).then(function(e) {
                    return r({
                        type: s.SET_STICKER_FILTER,
                        filters: e
                    })
                })
            }).then(function() {
                var e, t;
                ((0, d.isProductTreeEmpty)(i()) || (0, d.checkTreeContainsElement)(i())) && (e = i(), !(t = e.simfree.list.selectedCategory) || "0" !== t) || r({
                    type: s.SET_SELECTED_CATEGORY,
                    selectedCategory: (0, S.isAccessoryListPage)() ? "accesories" : "Phones and Devices"
                }), O(n)(r, i)
            })
        }
    }

    function b(e) {
        var t = e.simfree.list,
            r = t.selectedCategory,
            i = t.selectedProducer,
            n = t.selectedSort,
            o = t.allVisibility,
            c = t.actualAttrFilters,
            l = t.actualStickerAttrFilters,
            s = t.priceFilter,
            a = t.actualAttrNumberFilters,
            u = t.matchToFilter,
            f = t.productsFilter,
            d = {};
        return d.category = r, d.producer = i, d.sortMode = n, d.showAll = o, d.attrFilter = c, d.attrStickerFilter = l, d.priceFilter = s, d.attrNumberFilter = a, d.matchToFilter = u, f && 0 < Object.entries(f).length && (d.products = f), d
    }

    function R(e) {
        return e.category = "0" === e.category ? "" : e.category, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.fetchFilterConfiguration = function(r, i, n) {
        return function(t, e) {
            (0, d.getFilterConfigurationFetched)(e()) || (0, p.getSelectedOfferType)(e()) === F.default.CONVERGENT && !e().magnum.selectedProposition || a.default.fetchFilterConfiguration(k(e())).then(function(e) {
                return t({
                    type: s.FETCH_FILTER_CONFIGURATION,
                    filterConfiguration: e,
                    initProducer: r,
                    initSort: n.sortMode ? n.sortMode : ""
                })
            }, function(e) {}).then(function() {
                return t(A(i, n))
            }, function(e) {})
        }
    }, e.getProductsTree = A, e.changeCurrentPageProps = function(t) {
        return function(e) {
            e({
                type: s.CHANGE_CURRENT_PAGE,
                payload: t
            })
        }
    }, e.changeEsimFilterAttributeIfAvailable = function(i, t) {
        return function(r, e) {
            a.default.getFiltersList(t).then(function(e) {
                var t = e.find(function(e) {
                    return "esim" === e.code
                });
                t && t.availableValues && P(i, t.availableValues) && r(n(i))
            })
        }
    }, e.getFilters = function(e) {
        return function(t, r) {
            a.default.getFiltersList(e).then(function(e) {
                return t({
                    type: s.GET_FILTERS,
                    filters: e
                })
            }).then(function(e) {
                e && e.filters && (D(f.default.clearActualFilterAfterCategoryChange(e.filters, r().simfree.list.actualAttrFilters))(t), v(f.default.clearActualFilterAfterCategoryChange(e.filters, r().simfree.list.actualAttrNumberFilters))(t))
            })
        }
    }, e.setSelectedProducer = function(t) {
        null != t && c.default.changeOrAddUrlParameterDisabledOnCheckout("producer", t);
        return function(e) {
            e({
                type: s.SET_SELECTED_PRODUCER,
                selectedProducer: t
            })
        }
    }, e.setSelectedModel = function(n, o) {
        return function(e, t) {
            var r = t(),
                i = f.default.manageMatchToData(n, o, r.simfree.list.matchToFilterData, r.simfree.list.matchToFilter);
            e({
                type: s.SET_SELECTED_MODEL,
                matchToFilter: i
            })
        }
    }, e.setSelectedRecomendedProducer = function(r, i) {
        return function(e) {
            var t = f.default.manageMatchToData(r, i, {});
            e({
                type: s.SET_SELECTED_MODEL,
                matchToFilter: t
            })
        }
    }, e.setSelectedSort = function(t) {
        t && c.default.changeOrAddUrlParameterDisabledOnCheckout("sortMode", t);
        return function(e) {
            e({
                type: s.SET_SELECTED_SORT,
                selectedSort: t
            })
        }
    }, e.setSelectedColor = function(t) {
        return function(e) {
            e({
                type: s.SET_SELECTED_COLOR,
                selectedColor: t
            })
        }
    }, e.setAllVisibilityProduct = function(t) {
        return function(e) {
            e({
                type: s.SET_SELECTED_ALL_VISIBILITY,
                allVisibility: t
            })
        }
    }, e.setOpenFilterModal = function(t) {
        return function(e) {
            e({
                type: s.SET_OPENED_FILTER_MODAL,
                opened: t
            })
        }
    }, e.changeSearchDeviceValue = function(t) {
        return function(e) {
            e({
                type: s.SET_SEARCH_DEVICE_VALUE,
                searchValue: t || ""
            }), (0 === t.length || 1 < t.length) && e(O(1))
        }
    }, e.getFilteredProductList = O, e.getFilteredProductTree = i, e.getFilteredProductTreeWithoutReloadStickers = function(i) {
        return function(t, e) {
            var r = b(e());
            t(M(r)), i && (r.start = i), a.default.getFilteredProductTree(r).then(function(e) {
                return t({
                    type: s.GET_PRODUCTS_TREES,
                    payload: e
                })
            }, function(e) {}).then(function() {
                (0, d.isProductTreeEmpty)(e()) || (0, d.checkTreeContainsElement)(e()) || t({
                    type: s.SET_SELECTED_CATEGORY,
                    selectedCategory: "Phones and Devices"
                }), O(i)(t, e)
            })
        }
    }, e.changeEsimFilterAttribute = n, e.changeFilterAttribute = function(n, o, c, l) {
        return function(e, t) {
            var r = t(),
                i = f.default.manageFilter(r.simfree.list.actualAttrFilters, n, o, c, l, r.simfree.list.filterConfiguration.categoryFilter);
            e({
                type: s.SET_ATTR_FILTERS,
                actualAttrFilters: i
            })
        }
    }, e.changeStickerFilterAttribute = function(n, o, c, l) {
        return function(e, t) {
            var r = t(),
                i = f.default.manageStickerFilter(r.simfree.list.actualStickerAttrFilters, n, o, c, l, r.simfree.list.filterConfiguration.stickerFilter);
            e({
                type: s.SET_STICKER_ATTR_FILTERS,
                actualStickerAttrFilters: i
            })
        }
    }, e.changeStickerFilter = function(n) {
        return function(r, e) {
            var t = e(),
                i = b(e());
            t.simfree.list.filterConfiguration.stickerFilter || a.default.fetchStickerConfiguration(R(i)).then(function(e) {
                var t = f.default.getStickerFilters(e, n);
                r({
                    type: s.SET_STICKER_ATTR_FILTERS,
                    actualStickerAttrFilters: t
                })
            })
        }
    }, e.changeFilterNumberAttribute = function(n, o, c) {
        return function(e, t) {
            var r = t(),
                i = f.default.manageNumberFilter(r.simfree.list.actualAttrNumberFilters, n, o, c, r.simfree.list.filterConfiguration.categoryFilter);
            e({
                type: s.SET_ATTR_NUMBER_FILTERS,
                actualAttrNumberFilters: i
            })
        }
    }, e.changePriceFilter = function(r, i) {
        r && !isNaN(i) && c.default.changeOrAddUrlParameterDisabledOnCheckout(function(e) {
            switch (e) {
                case "to":
                    return "priceTo";
                case "from":
                    return "priceFrom";
                default:
                    return "incorrectPriceTypeParameter"
            }
        }(r), i);
        return function(e, t) {
            e({
                type: s.SET_PRICE_FILTERS,
                priceFilterType: r,
                price: i
            })
        }
    }, e.clearAttrsFilters = function() {
        return function(e, t) {
            var r = t();
            r.simfree.list.actualAttrFilters = {}, r.simfree.list.actualStickerAttrFilters = {}, r.simfree.list.actualAttrNumberFilters = {}, e({
                type: s.CLEAR_ATTR_FILTERS
            })
        }
    }, e.clearMatchToFilters = function() {
        return function(e, t) {
            var r = t();
            Object.keys(r.simfree.list.matchToFilter).forEach(function(e, t) {
                $("[data-id=" + e + "] :input").prop("checked", !1)
            }), r.simfree.list.matchToFilter = {}, e({
                type: s.CLEAR_MATCH_TO_FILTERS
            }), e(I(1))
        }
    }, e.updateAttrsFilter = D, e.updateStickerAttrsFilter = function(t) {
        return function(e) {
            e({
                type: s.UPDATE_STICKER_ATTR_FILTERS,
                actualStickerAttrFilters: t
            })
        }
    }, e.updateMatchToFilters = function(t) {
        return function(e) {
            e({
                type: s.UPDATE_MATCH_TO_FILTERS,
                matchToFilter: t
            })
        }
    }, e.updateNumberAttrsFilter = v, e.getMatchToData = function() {
        return function(t, e) {
            var r = e(),
                i = {
                    category: "accesories"
                };
            i.producer = r.simfree.list.selectedProducer, i.sortMode = r.simfree.list.selectedSort, i.showAll = r.simfree.list.allVisibility, i.attrFilter = r.simfree.list.actualAttrFilters, i.attrStickerFilter = r.simfree.list.actualStickerAttrFilters, i.priceFilter = r.simfree.list.priceFilter, i.attrNumberFilter = r.simfree.list.actualAttrNumberFilters, i.matchToFilter = r.simfree.list.matchToFilter, r.simfree.list.productsFilter && 0 < Object.entries(r.simfree.list.productsFilter).length && (i.products = r.simfree.list.productsFilter), a.default.getMatchToData(i).then(function(e) {
                return t({
                    type: s.GET_MATCH_TO_DATA,
                    matchToFilterData: e
                })
            })
        }
    }, e.reloadMatchToFilter = function() {
        return function(t, e) {
            var r = e(),
                i = {};
            i.category = r.simfree.list.selectedCategory, i.producer = r.simfree.list.selectedProducer, i.sortMode = r.simfree.list.selectedSort, i.showAll = r.simfree.list.allVisibility, i.attrFilter = r.simfree.list.actualAttrFilters, i.priceFilter = r.simfree.list.priceFilter, i.attrNumberFilter = r.simfree.list.actualAttrNumberFilters, i.matchToFilter = r.simfree.list.matchToFilter, a.default.reloadMatchToData(i).then(function(e) {
                return t({
                    type: s.UPDATE_MATCH_TO_FILTER_COUNTERS,
                    matchToFilterCounterData: e
                })
            }).then(function(e) {
                OPL.UI.fire(OPL.UI.EVENTS.modules.categorytree.updatecounter, e, "match-to-tree")
            })
        }
    }, e.setProductsFilter = e.doOpenVerificationModal = e.checkMsisdnAndGetOffersAndAddToCart = e.doCloseVerificationModal = e.verificationNeeded = e.selectMaxMonthlyPrice = e.clearMonthlyPrices = e.clearOneTimePrices = e.selectOneTimePrice = e.reloadProductList = void 0, s = babelHelpers.interopRequireWildcard(s), l = babelHelpers.interopRequireWildcard(l), a = babelHelpers.interopRequireDefault(a), u = babelHelpers.interopRequireDefault(u), f = babelHelpers.interopRequireDefault(f), o = babelHelpers.interopRequireDefault(o), c = babelHelpers.interopRequireDefault(c), F = babelHelpers.interopRequireDefault(F);
    var I = function(r) {
        return function(e, t) {
            i(r)(e, t)
        }
    };

    function n(r) {
        return function(e, t) {
            e({
                type: s.SET_ATTR_FILTERS,
                actualAttrFilters: {
                    esim: r
                }
            })
        }
    }

    function D(t) {
        return function(e) {
            e({
                type: s.UPDATE_ATTR_FILTERS,
                actualAttrFilters: t
            })
        }
    }

    function M(a) {
        return function(e, t) {
            var r = (0, p.getSelectedOfferType)(t()),
                i = t();
            if (N(a, t()), L(a, t()), -1 < [F.default.DATA, F.default.VOICE, F.default.CONVERGENT, F.default.SIMFREE_INST, F.default.VOICE_LDF, F.default.DATA_LDF].indexOf(r)) {
                var n = i.simfree.metaData.oneTimePriceFilterCmsConf[i.configurator.filters.selected.offerType],
                    o = i.simfree.list.selectedOneTimePrices,
                    c = Object.keys(o).map(function(e) {
                        return {
                            id: e,
                            value: o[e]
                        }
                    }).filter(function(e) {
                        return e.value
                    }).map(function(t) {
                        return n && n.find(function(e) {
                            return e.id === t.id
                        })
                    }).filter(function(e) {
                        return e
                    });
                a.oneTimePriceInOfferFilters = c.map(function(e) {
                    return {
                        to: e.to,
                        from: e.from
                    }
                });
                var l = (0, d.getSelectedMaxMonthlyPriceRange)(t());
                l && l.to && (a.deviceInOfferPriceFilter = {
                    to: l.to
                });
                var s = (0, T.getCurrentDeviceInstalmentsCountValue)(i);
                0 < s && (a.deviceInstallmentsCount = s)
            }
        }
    }

    function L(e, t) {
        (0, p.getSelectedOfferType)(t) === F.default.CONVERGENT ? e.propositionItemId = t.magnum.selectedProposition && t.magnum.selectedProposition.mobileVoiceBundleTemplateCode : e.propositionItemId = t.configurator.offers.selected
    }

    function N(e, t) {
        (0, p.getSelectedOfferType)(t) === F.default.CONVERGENT ? t.magnum.selectedProposition && t.magnum.selectedProposition.voice && t.magnum.selectedProposition.mobileVoiceBundleTemplateCode && t.magnum.selectedProposition.mobileVoiceBundleTemplateCode.includes(t.magnum.selectedProposition.voice.code) ? "POS" === t.magnum.possibleTransactions.salesChannel && "MNP" === t.magnum.selectedMobileTransaction.process ? e.process = "MNP_TWOSTEP" : e.process = t.magnum.selectedMobileTransaction.process : e.process = t.magnum.selectedFixBroadbandTransaction.process : e.process = (0, p.getSelectedProcess)(t)
    }

    function v(t) {
        return function(e) {
            e({
                type: s.UPDATE_NUMBER_ATTR_FILTERS,
                actualAttrNumberFilters: t
            })
        }
    }
    e.reloadProductList = I;
    e.selectOneTimePrice = function(r) {
        return function(e, t) {
            e({
                type: s.SELECT_ONE_TIME_PRICE,
                id: r
            }), c.default.processOneTimeCostPricesUrlParameter((0, d.getSelectedOneTimePricesList)(t())), e(I())
        }
    };
    e.clearOneTimePrices = function() {
        return function(e) {
            e({
                type: s.CLEAR_ONE_TIME_PRICES
            })
        }
    };
    e.clearMonthlyPrices = function() {
        return function(e) {
            e({
                type: s.CLEAR_MONTHLY_PRICES
            })
        }
    };

    function k(e) {
        var t = {};
        return t.category = e.simfree.list.selectedCategory, t.producer = e.simfree.list.selectedProducer, N(t, e), L(t, e), t
    }
    e.selectMaxMonthlyPrice = function(n) {
        return function(e, t) {
            var r = (0, d.getTieredMaxMonthlyPriceForCurrentOfferType)(t()),
                i = r && r.find(function(e) {
                    return e.id == n
                });
            i && c.default.changeOrAddUrlParameterDisabledOnCheckout("maxMonthlyCost", i.to), e({
                type: s.SELECT_MAX_MONTHLY_PRICE,
                id: n
            }), e(I())
        }
    };
    var t = {
        type: s.VERIFICATION_NEEDED
    };
    e.verificationNeeded = t;
    var V = {
        type: s.CLOSE_VERIFICATION_MODAL
    };
    e.doCloseVerificationModal = V;
    e.checkMsisdnAndGetOffersAndAddToCart = function(c) {
        return function(t, r) {
            t({
                type: l.CHECK_MSISDN
            });
            var e = (0, T.getSelectedDeviceId)(r()),
                i = (0, p.getSelectedFilters)(r()),
                n = (0, g.getMarketContext)(r()),
                o = (0, d.getCurrentSelectedAvailableProductsKey)(r());
            u.default.checkAndGetOffers(c, i, o, e).then(function(e) {
                t({
                    type: l.CHECK_MSISDN_RESULT,
                    payload: {
                        response: e,
                        process: i.processType,
                        offer: i.offerType,
                        market: n
                    },
                    data: e
                }), e.isPositive && (t({
                    type: l.FETCH_OFFERS,
                    payload: e.offers,
                    selectedFilters: (0, p.getSelectedFilters)(r()),
                    data: e
                }), t((0, E.setProcessForMsisdn)(c, i.processType, e.process)), t(V), t((0, m.addToCart)()), t((0, E.clearCheckMsisdn)()))
            }).catch(function(e) {
                t({
                    type: l.CHECK_MSISDN_ERROR,
                    message: e.responseText,
                    payload: {
                        response: {
                            msisdn: c
                        },
                        process: i.processType,
                        offer: i.offerType,
                        market: n
                    }
                })
            })
        }
    };
    e.doOpenVerificationModal = function() {
        return function(e) {
            e({
                type: s.OPEN_VERIFICATION_MODAL
            })
        }
    };
    e.setProductsFilter = function(t) {
        return function(e) {
            e({
                type: s.SET_PRODUCTS_FILTER,
                productsFilter: t
            })
        }
    }
});
//# sourceMappingURL=filter.js.map