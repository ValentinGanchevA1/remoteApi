define(["exports", "../actionTypes", "eshop/utils/OnlineUtils"], function(e, u, s) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function i(t) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.productsFilter = e.searchValue = e.selectedMaxMonthlyPrice = e.selectedOneTimePrices = e.filterModalOpened = e.matchToFilterCounters = e.matchToFilter = e.matchToFilterData = e.allVisibility = e.priceFilter = e.actualAttrNumberFilters = e.actualStickerAttrFilters = e.actualAttrFilters = e.selectedSort = e.selectedColor = e.selectedCategoryName = e.selectedCategory = e.initiallyFiltered = e.currentPage = e.selectedProducer = e.filterConfiguration = e.categories = e.products = void 0, u = babelHelpers.interopRequireWildcard(u), s = babelHelpers.interopRequireDefault(s);
    e.products = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.GET_ALL_PRODUCTS:
            case u.FILTER_ACTION_IDENTIFIER:
                return n.products;
            case u.SET_SELECTED_VARIANT_ON_LIST:
                return i({}, r, babelHelpers.defineProperty({}, "data", n.products));
            default:
                return r
        }
    };
    e.categories = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.GET_PRODUCTS_TREES:
                return n.payload;
            default:
                return r
        }
    };
    e.filterConfiguration = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.FETCH_FILTER_CONFIGURATION:
                return n.filterConfiguration;
            case u.GET_INIT_FILTERS:
            case u.GET_FILTERS:
                return i({}, r, babelHelpers.defineProperty({}, "categoryFilter", n.filters));
            case u.SET_STICKER_FILTER:
                return i({}, r, babelHelpers.defineProperty({}, "stickerFilter", n.filters));
            default:
                return r
        }
    };
    e.selectedProducer = function(e, t) {
        var r, n, i, a = 0 < arguments.length && void 0 !== e ? e : "",
            c = 1 < arguments.length ? t : void 0;
        switch (c.type) {
            case u.SET_SELECTED_PRODUCER:
                return c.selectedProducer;
            case u.FETCH_FILTER_CONFIGURATION:
                return r = c.filterConfiguration, n = c.initProducer, i = !1, r.producerFilter.map(function(e) {
                    e.name !== n || (i = !0)
                }), i ? c.initProducer : "";
            default:
                return a
        }
    };
    e.currentPage = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : 1,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.CHANGE_CURRENT_PAGE:
                return n.payload;
            case u.GET_ALL_PRODUCTS:
                return n.products && n.products.currentPage ? n.products.currentPage : 1;
            default:
                return r
        }
    };
    e.initiallyFiltered = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case u.GET_ALL_PRODUCTS:
                return !0;
            default:
                return r
        }
    };
    e.selectedCategory = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : decodeURI(s.default.getParameterValueFromUrl("selectedCategory")) || "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_SELECTED_CATEGORY:
                return n.selectedCategory ? n.selectedCategory : r;
            case u.GET_PRODUCTS_TREES:
                return n.initCategory ? n.initCategory : r;
            default:
                return r
        }
    };
    e.selectedCategoryName = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_SELECTED_CATEGORY:
                return n.selectedCategoryName ? n.selectedCategoryName : r;
            default:
                return r
        }
    };
    e.selectedColor = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_SELECTED_COLOR:
                return n.selectedColor;
            default:
                return r
        }
    };
    e.selectedSort = function(e, t) {
        var r, n, i = 0 < arguments.length && void 0 !== e ? e : "",
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case u.SET_SELECTED_SORT:
                return a.selectedSort;
            case u.FETCH_FILTER_CONFIGURATION:
                return r = a.filterConfiguration, n = a.initSort, r && r.sortDefinition && r.sortDefinition.length && -1 !== r.sortDefinition.findIndex(function(e) {
                    return e.value === n
                }) ? a.initSort : "";
            default:
                return i
        }
    };
    e.actualAttrFilters = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_ATTR_FILTERS:
            case u.UPDATE_ATTR_FILTERS:
            case u.GET_INIT_FILTERS:
                return i({}, n.actualAttrFilters);
            default:
                return r
        }
    };
    e.actualStickerAttrFilters = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_STICKER_ATTR_FILTERS:
            case u.UPDATE_STICKER_ATTR_FILTERS:
            case u.GET_INIT_FILTERS:
                return i({}, n.actualStickerAttrFilters);
            default:
                return r
        }
    };
    e.actualAttrNumberFilters = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_ATTR_NUMBER_FILTERS:
            case u.UPDATE_NUMBER_ATTR_FILTERS:
            case u.GET_INIT_FILTERS:
                return i({}, n.actualAttrNumberFilters);
            default:
                return r
        }
    };
    e.priceFilter = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_PRICE_FILTERS:
                return i({}, r, babelHelpers.defineProperty({}, n.priceFilterType, n.price));
            default:
                return r
        }
    };
    e.allVisibility = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_SELECTED_ALL_VISIBILITY:
                return n.allVisibility;
            default:
                return r
        }
    };
    e.matchToFilterData = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.GET_MATCH_TO_DATA:
                return i({}, n.matchToFilterData);
            default:
                return r
        }
    };
    e.matchToFilter = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_SELECTED_MODEL:
            case u.UPDATE_MATCH_TO_FILTERS:
            case u.GET_INIT_FILTERS:
            case u.CLEAR_MATCH_TO_FILTERS:
                return i({}, n.matchToFilter);
            default:
                return r
        }
    };
    e.matchToFilterCounters = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.UPDATE_MATCH_TO_FILTER_COUNTERS:
                return OPL.UI.fire(OPL.UI.EVENTS.modules.categorytree.updatecounter, n.matchToFilterCounterData, "match-to-tree"), i({}, n.matchToFilterCounterData);
            default:
                return r
        }
    };
    e.filterModalOpened = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_OPENED_FILTER_MODAL:
                return n.opened;
            default:
                return r
        }
    };
    e.selectedOneTimePrices = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SELECT_ONE_TIME_PRICE:
                var i = {};
                return i[n.id] = !r[n.id], Object.assign({}, r, i);
            case u.REGISTER_ONE_TIME_PRICE_CMS_CONF:
                var a = s.default.parseOneTimeCostPricesUrlParameter();
                if (!a.length) return {};
                var c = n.cmsConf && n.cmsConf.filter(function(t) {
                        return a.find(function(e) {
                            return e.to == t.to && e.from == t.from
                        })
                    }),
                    l = {};
                return c.map(function(e) {
                    return l[e.id] = !0
                }), Object.assign({}, r, l);
            case u.CLEAR_ONE_TIME_PRICES:
                return s.default.changeOrAddUrlParameterDisabledOnCheckout("oneTimeCost", !1), {};
            default:
                return r
        }
    };
    e.selectedMaxMonthlyPrice = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SELECT_MAX_MONTHLY_PRICE:
                return babelHelpers.defineProperty({}, n.id, !0);
            case u.REGISTER_MAX_MONTHLY_PRICE_CMS_CONF:
                var i = s.default.getParameterValueFromUrl("maxMonthlyCost"),
                    a = n.cmsConf.map(function(e) {
                        return e.to
                    }),
                    c = s.default.closest(i, a),
                    l = n.cmsConf.filter(function(e) {
                        return e.to === c
                    }),
                    o = {};
                return l.map(function(e) {
                    return o[e.id] = !0
                }), Object.assign({}, r, o);
            case u.CLEAR_MONTHLY_PRICES:
                return s.default.changeOrAddUrlParameterDisabledOnCheckout("maxMonthlyCost", !1), {};
            default:
                return r
        }
    };
    e.searchValue = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_SEARCH_DEVICE_VALUE:
                return n.searchValue;
            default:
                return r
        }
    };
    e.productsFilter = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.SET_PRODUCTS_FILTER:
                return n.productsFilter ? n.productsFilter : r;
            default:
                return r
        }
    }
});
//# sourceMappingURL=list.js.map