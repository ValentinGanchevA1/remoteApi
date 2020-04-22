define(["exports", "eshop/flux/utils/OraApiUtils", "jquery", "eshop/utils/OnlineUtils"], function(e, f, i, s) {
    "use strict";

    function c(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), s = babelHelpers.interopRequireDefault(s);

    function a() {
        return u ? {
            availableProductsKey: u
        } : {}
    }
    var u = (0, i.default)("#availableProductsKey").val();

    function l() {
        return t ? {
            component: t
        } : {}
    }
    var t = (0, i.default)("#propositionCarouselId").val();

    function p(e, t, r, n) {
        var o = t ? {
                availableProductsKey: t
            } : a(),
            i = r ? {
                deviceCode: r
            } : {};
        return Object.assign({}, {
            processType: e.processType,
            loyaltyLength: e.loyaltyLength[e.processType],
            isInitialFetch: n,
            isCanonicalLink: s.default.isCanonicalLink()
        }, i, o, l())
    }

    function o(e, t, r, n) {
        s.default.removePwaSuflerContextFromSession();
        var o = r ? {
                availableProductsKey: r
            } : a(),
            i = n ? {
                deviceCode: n
            } : {};
        return function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? c(Object(r), !0).forEach(function(e) {
                    babelHelpers.defineProperty(t, e, r[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                })
            }
            return t
        }({
            msisdn: e,
            processType: t.processType,
            loyaltyLength: t.loyaltyLength[t.processType]
        }, i, {}, o, {}, l())
    }

    function d(e) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + e
    }
    var r = {
        getOffers: function(e, t, r, n) {
            var o = 1 < arguments.length && void 0 !== t ? t : "",
                i = 2 < arguments.length ? r : void 0,
                s = 3 < arguments.length && void 0 !== n && n;
            return (0, f.get)(d("/offersList/offers"), p(e, o, i, s))
        },
        getOffersWithoutOfferSelector: function(e, t, r, n) {
            var o = 1 < arguments.length && void 0 !== t ? t : "",
                i = 2 < arguments.length ? r : void 0,
                s = 3 < arguments.length && void 0 !== n && n;
            return (0, f.get)(d("/offersList/offersWithoutOfferSelector"), p(e, o, i, s))
        },
        getConvergentOffers: function(e, t, r) {
            return (0, f.get)(d("/convergentOffersList/offers"), {
                processType: e,
                deviceCode: t,
                propositionIds: r
            })
        },
        getDocuments: function(e, t) {
            return (0, f.get)(d("/documents/getDocumentsForProducts"), (r = e, n = t, Object.assign({}, r, n)));
            var r, n
        },
        getOfferFilters: function(e, t) {
            var r, n, o = 1 < arguments.length && void 0 !== t ? t : "";
            return (0, f.get)(d("/filters/offerFilters"), (r = o, n = e || u, {
                filtersComponentPk: (0, i.default)("#filtersComponentPk").val(),
                availableProductsKey: n,
                deviceCode: r,
                isCanonicalLink: s.default.isCanonicalLink()
            }))
        },
        postToCart: function(e) {
            return (0, f.postJson)(d("/koszyk/oovdodaj"), e)
        },
        postAssignmentToCart: function(e) {
            return (0, f.post)(d("/koszyk/addServiceTransfer"), e)
        },
        postFixAssignmentToCart: function(e) {
            return (0, f.post)(d("/fix/cart/addServiceTransfer"), e)
        },
        checkAndGetOffers: function(e, t, r, n) {
            return (0, f.postJson)(d("/offersList/checkAndGetOffers"), o(e, t, r, n))
        },
        getContractRole: function(e) {
            return (0, f.get)(d("/contractRole"), e)
        },
        getFirstOffer: function(e) {
            return (0, f.get)(d("/offersList/firstOffer"), e)
        }
    };
    e.default = r
});
//# sourceMappingURL=remoteApi.js.map