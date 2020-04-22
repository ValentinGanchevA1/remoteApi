define(["exports", "redux", "../actionTypes", "eshop/modules/configurator/actionTypes", "./voucher", "./kdr", "./lowerInstallments", "./convergentConfigurables", "./resources", "./assignment", "./filters", "eshop/utils/OnlineUtils", "../../configurator/actionTypes", "./cart", "./invoiceData", "./vases"], function(e, t, i, a, r, n, o, l, s, u, d, c, v, f, p, _) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.bonusModalStatus = e.vasModalStatus = e.priceViewIsNet = void 0, r = babelHelpers.interopRequireWildcard(r), n = babelHelpers.interopRequireWildcard(n), o = babelHelpers.interopRequireWildcard(o), s = babelHelpers.interopRequireWildcard(s), u = babelHelpers.interopRequireWildcard(u), d = babelHelpers.interopRequireWildcard(d), c = babelHelpers.interopRequireDefault(c), f = babelHelpers.interopRequireWildcard(f), p = babelHelpers.interopRequireWildcard(p);

    function b(e, t) {
        var a = 0 < arguments.length && void 0 !== e ? e : null,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case i.SET_PRICE_VIEW_NET:
                return r.market ? "B2B" === r.market || "B2C" !== r.market && a : r.showNet;
            case v.FETCH_OFFERS:
                var n = r.payload && r.payload[0] && r.payload[0].filterMarketSegment;
                return "B2B" === (n = n && n.replace("_SOHO", "")) || "B2C" !== n && a;
            default:
                return a
        }
    }
    e.priceViewIsNet = b;

    function h(e, t) {
        var a = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case i.VAS_MODAL_SHOW_CHANGE:
                return r.payload;
            default:
                return a
        }
    }
    e.vasModalStatus = h;

    function g(e, t) {
        var a = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case i.BONUS_MODAL_SHOW_CHANGE:
                return r.payload;
            default:
                return a
        }
    }
    e.bonusModalStatus = g;
    var R = (0, t.combineReducers)({
            fixConfigurablesMetadata: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e ? e : [],
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.FETCHING_FIX_CONFIGURABLES:
                        return a.concat(r.payload);
                    default:
                        return a
                }
            },
            tvModalVisibility: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e && e,
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.TV_MODAL_VISIBILITY:
                        return !!r.data;
                    default:
                        return a
                }
            },
            tvFilteredModalVisibility: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e && e,
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.TV_FILTERED_MODAL_VISIBILITY:
                        return !!r.data;
                    default:
                        return a
                }
            }
        }),
        E = (0, t.combineReducers)({
            b2bVasesModalVisibility: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e && e,
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.OFICES_SERVICES_MODAL_VISIBILITY:
                        return !!r.data;
                    default:
                        return a
                }
            }
        }),
        T = (0, t.combineReducers)({
            mobileVasMetadata: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e ? e : [],
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.FETCHING_MOBILE_VASES:
                        return a.concat(r.payload);
                    default:
                        return a
                }
            }
        }),
        m = (0, t.combineReducers)({
            hasMiniCartData: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e && e,
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.FETCHED_MINI_CART:
                        return r.payload;
                    default:
                        return a
                }
            },
            hasCartData: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e && e,
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.FETCHED_CART:
                        return r.payload;
                    default:
                        return a
                }
            },
            mobileVasUpdating: _.mobileVasUpdating,
            mobile: T,
            fix: R,
            b2b: E
        }),
        y = (0, t.combineReducers)({
            cartData: f.cartData,
            miniCartData: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e ? e : {},
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.FETCH_MINI_CART:
                    case i.REMOVE_FROM_CART:
                    case i.REMOVE_TERMINAL_FROM_CART_BUNDLE:
                        return Object.assign({}, a, r.payload);
                    default:
                        return a
                }
            },
            mobileVas: _.mobileVas,
            vasModalStatus: h,
            bonusModalStatus: g,
            priceViewIsNet: b,
            fixConfigurables: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e ? e : [],
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.FETCH_FIX_CONFIGURABLES:
                        return a.concat(r.payload);
                    default:
                        return a
                }
            },
            convergentConfigurables: l.convergentConfigurablesReducer,
            bundlesProcessType: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e ? e : [],
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.FETCH_BUNDLES_PROCESS_TYPE:
                        return r.payload.entries ? Array.from(r.payload.entries, function(e) {
                            return e.processType
                        }) : a;
                    default:
                        return a
                }
            },
            metadata: m,
            resourcesModal: (0, t.combineReducers)(s),
            assignment: (0, t.combineReducers)(u),
            manualVerificationStatus: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e ? e : "",
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.SET_MANUAL_STATUS:
                        return r.status;
                    default:
                        return a
                }
            },
            addTerminalToOfferBundleNo: function(e, t) {
                var a = 0 < arguments.length && void 0 !== e ? e : c.default.loadFromSessionStorage("addTerminalToOfferBundleNo") || null,
                    r = 1 < arguments.length ? t : void 0;
                switch (r.type) {
                    case i.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER:
                        return null != r.value ? (c.default.saveInSessionStorage("addTerminalToOfferBundleNo", r.value), r.value) : a;
                    case i.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER:
                    case i.REMOVE_FROM_CART:
                        return c.default.removeFromSessionStorage("addTerminalToOfferBundleNo"), null;
                    default:
                        return a
                }
            },
            voucher: (0, t.combineReducers)(r),
            lowerInstallments: (0, t.combineReducers)(o),
            kdrData: (0, t.combineReducers)(n),
            tvPackagesFilters: (0, t.combineReducers)(d),
            invoiceData: (0, t.combineReducers)(p)
        });
    e.default = y
});
//# sourceMappingURL=root.js.map