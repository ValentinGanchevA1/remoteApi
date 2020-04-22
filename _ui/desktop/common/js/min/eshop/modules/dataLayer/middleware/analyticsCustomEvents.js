define(["exports", "../../fix/actionTypes", "../../fix/selectors/root", "../../auth/selectors/authorization", "../../checkout/selectors", "../../checkout/actionTypes", "../../cart/selectors", "../dataLayerUtilities", "../../cart/actionTypes", "../../checkout/constants/CartEntryTypeEnum"], function(e, r, E, i, a, o, C, v, c, u) {
    "use strict";
    var t;

    function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function b(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(n), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, n[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, u = babelHelpers.interopRequireDefault(u);

    function d(e) {
        return {
            city: e.town,
            street: e.line1,
            streetNo: e.line2,
            flatNo: e.appartmentNo
        }
    }

    function l(e) {
        var t = JSON.stringify(e),
            n = Buffer.from(t).toString("base64");
        return n
    }

    function p(e) {
        var r = 0 < arguments.length && void 0 !== e ? e : v.AnalyticsEvents.FORM_SUBMIT_WWT;
        return function(e, t) {
            return {
                event: r + "_" + A(e),
                address: l(function(e) {
                    var t = (0, E.getWwtAddress)(e);
                    if (Object.keys(t).length) return d(t);
                    var n = (0, E.getServiceDetails)(e).installationAddress;
                    return n && Object.keys(n).length ? d(n) : {}
                }(e)),
                wwt_result: (n = t.payload.offers) ? n.map(function(e) {
                    return (0, v.stringJoiner)([e.broadband.code, e.broadband.bitrate], "_")
                }).join("|") : "LTE"
            };
            var n
        }
    }

    function f(e) {
        var t = (0, a.getAssistModeStateData)(e),
            n = t.loggedEmployee,
            r = t.assistedEmployee || n,
            o = !!r && r;
        return {
            dimension19: o.fullBscs || "brak danych ID sprzedawcy",
            dimension20: o.salesChannelName || "brak danych ID kanału",
            dimension25: o.loginOtsa || "brak danych ID sprzedawcy OTSA",
            dimension26: o.location || "brak danych ID punktu"
        }
    }

    function y(e) {
        return {
            pageType: v.PageTypes.ESHOP,
            market: (0, v.getMarket)((0, E.marketSegment)(e)),
            channel: A(e),
            pageCategory: (0, v.getPageCategory)((0, E.getPageContext)(e))
        }
    }

    function m(m, e, t, n) {
        var g = 2 < arguments.length && void 0 !== t ? t : {},
            r = e.map(function(t) {
                var e, n, r = t.productCode,
                    o = t.processType,
                    i = t.bundleType,
                    a = t.bundleCode,
                    c = (t.totalMonthlyPrices, t.loyaltyLength),
                    u = (t.entryType, t.modemFixProduct),
                    s = (t.bundleNo, t.broadbandFixProduct),
                    d = t.decoderFixProduct,
                    l = (t.totalFirstBillPrice, s && s.name, (0, C.getFixConfigurables)(m).find(function(e) {
                        return e.cartBundle === t.bundleNo
                    }), n = d, b({}, (e = u) || n, {
                        name: (e ? "Modem" : n && "Dekoder") || "FIXO"
                    })),
                    p = l && l.price && l.price.oneTimeCost && l.price.oneTimeCost.price || 0,
                    f = g && g.price || 0,
                    y = l && l.price && l.price.monthlyCosts[0] && l.price.monthlyCosts[0].price || 0;
                return {
                    name: (0, v.stringJoiner)([r, i, a], "|"),
                    id: r,
                    price: g && g.price,
                    brand: A(m),
                    category: (0, v.stringJoiner)([A(m), (0, E.marketSegment)(m), v.CategoryProduct.INTERNET_DOMOWY, (0, v.getProcessTypeName)(o)], "/"),
                    variant: l && l.name,
                    quantity: 1,
                    dimension4: p,
                    dimension5: f,
                    dimension6: y,
                    dimension7: c,
                    metric11: c * (f + y) + p
                }
            });
        return r
    }

    function n(e) {
        var t = (0, C.getMiniCartData)(e),
            n = t.entries,
            r = t.totalMonthlyPrice,
            o = t.totalCheckoutPrice;
        return m(e, n, r, o)
    }

    function g(e, t) {
        var n = t.payload.orderSummary,
            r = n.entries,
            o = n.totalMonthlyPrice,
            i = n.totalCheckoutPrice;
        return m(e, r, o, i)
    }

    function T(e) {
        return {
            checkout: {
                actionField: {
                    step: (0, v.getCheckoutStep)((0, a.getCurrentStepId)(e)).number
                },
                products: n(e)
            }
        }
    }

    function h(e) {
        return function(n, r) {
            return {
                "cart-contents": function() {
                    return T(n)
                },
                "customer-data": function() {
                    return T(n)
                },
                "delivery-payment": function() {
                    return T(n)
                },
                purchase: function() {
                    return r.payload && (e = n, {
                        purchase: {
                            actionField: {
                                id: (t = r).payload.omniNumber,
                                affiliation: t.payload.salesChannel,
                                revenue: R(t.payload),
                                shipping: t.payload.deliveryCost,
                                action: v.AnalyticsEvents.PURCHASE,
                                coupon: t.payload.orderSummary.voucherCode
                            },
                            products: g(e, t)
                        }
                    });
                    var e, t
                }
            } [e](n, r)
        }
    }

    function O(e, t) {
        return b({
            event: v.AnalyticsEvents.CHECKOUT
        }, f(e), {
            dimension27: "CIM ID no such data",
            address: l({
                city: (n = (0, a.getAddressMain)(e)).town,
                street: n.streetName,
                streetNo: n.streetNumber,
                flatNo: n.appartmentNo
            }),
            ecommerce: h((0, a.getCurrentStepId)(e))(e, t)
        });
        var n
    }

    function P() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return function(t, n) {
            return b({}, r.map(function(e) {
                return e(t, n)
            }).reduce(function(e, t) {
                return b({}, e, {}, t)
            }, {}))
        }
    }

    function I(e, t) {
        return P(y, O)(e, t)
    }

    function S(e) {
        return (0, v.stringJoiner)(["scenariusze rozprowadzające", (0, i.getSalesChannel)(e)], " ")
    }

    function _(e, t, n) {
        var r = 1 < arguments.length && void 0 !== t ? t : {},
            o = 2 < arguments.length && void 0 !== n ? n : 0;
        return {
            name: r.description,
            id: r.title,
            price: r.priceFrom,
            brand: v.Constants.ORANGE,
            category: (0, v.stringJoiner)([(0, i.getSalesChannel)(e), (0, E.marketSegment)(e), (0, v.findCategoryTypeBasedOnProduct)(r.offersUrl), (0, v.getProcessTypeName)("RETENTION")], "/"),
            variant: "",
            list: S(e),
            position: o + 1
        }
    }

    function F(n, e) {
        var t = e.payload.variantContainers || [];
        return (t = t.reduce(function(e, t) {
            return e.concat(t.variants)
        }, [])).map(function(e, t) {
            return function(e, t, n) {
                return _(e, 1 < arguments.length && void 0 !== t ? t : {}, 2 < arguments.length && void 0 !== n ? n : 0)
            }(n, e, t)
        })
    }

    function D(e, t) {
        return t.payload ? {
            products: (n = e, r = t.payload, o = r.name, i = r.priceWithDiscounts, a = r.addons, c = r.leasedDevices, u = r.formattedEndDate, s = (0, v.getMarket)((0, E.marketSegment)(n)), {
                result: {
                    name: o,
                    price: i,
                    VAS: a,
                    EOP: u,
                    variant: c && (0, v.stringJoiner)(c.map(function(e) {
                        return e.name
                    }), "|"),
                    market: s
                }
            })
        } : {};
        var n, r, o, i, a, c, u, s
    }

    function N(e, t) {
        return {
            click: {
                actionField: {
                    list: S(e)
                },
                products: (n = e, r = t, (0, E.getMigrationVariantContainers)(n).reduce(function(e, t) {
                    return e.concat(t.variants)
                }, []).map(function(e, t) {
                    return b({}, e, {
                        index: t
                    })
                }).filter(function(e) {
                    return e.migrationVariantPk === r.payload.migrationVariantPk
                }).map(function(e) {
                    return _(n, e, e.index)
                }))
            }
        };
        var n, r
    }
    var A = function(e) {
            return (0, i.getSalesChannel)(e) || (0, a.getSalesChannelForSummary)(e) || f(e).dimension20
        },
        R = function(e) {
            var t = e.tieredPrices,
                n = e.checkoutCost,
                r = (e.firstBillPrice, t.reduce(function(e, t) {
                    return e + t.price * (t.monthTo - t.monthFrom + 1)
                }, 0));
            return r + (n && n.price)
        },
        k = (t = {}, babelHelpers.defineProperty(t, r.FETCH_OFFERS, function(e, t, n) {
            return n[r.AFTER_WWT] && !n[r.SERVICE_DETAILS_FETCHED] ? P(p(), y)(e, t) : n[r.FORCE_AFTER_WWT] && n[r.SERVICE_DETAILS_FETCHED] ? P(p(v.AnalyticsEvents.FORM_SUBMIT_WWT_RETMIG), y)(e, t) : void 0
        }), babelHelpers.defineProperty(t, c.FETCH_FIX_CONFIGURABLES, I), babelHelpers.defineProperty(t, o.DO_CHECKOUT_STEP_DONE, function(e, t, n) {
            if (n[c.FETCH_FIX_CONFIGURABLES]) return I(e, t)
        }), babelHelpers.defineProperty(t, c.FETCHED_MINI_CART, function(e, t, n) {
            return "customer-data" === (0, a.getCurrentStepId)(e) && (0, a.getFixEntries)(e).length || "delivery-payment" === (0, a.getCurrentStepId)(e) && (0, a.getFixEntries)(e).length && 1 === n[o.GET_CART_CUSTOMER_DONE] && n[c.FETCHED_MINI_CART] ? I(e, t) : void 0
        }), babelHelpers.defineProperty(t, o.REGISTER_COMPONENT_PROPS_VALUE, function(e, t) {
            var n, r, o = (0, a.getOrderFactoryForSummary)(e);
            if (o === u.default.FIX) return n = e, r = t, {
                event: v.AnalyticsEvents.PURCHASE,
                dimension27: "CIM ID no such data",
                address: "no data",
                ecommerce: h("purchase")(n, r)
            }
        }), babelHelpers.defineProperty(t, r.MIGRATION_VARIANTS_FETCHED, function(e, t) {
            return t.payload ? b({}, (n = e, r = t, b({
                ecommerce: {
                    currenncyCode: v.Constants.CURRENCY_CODE
                },
                impressions: F(n, r)
            }, f(n), {
                dimension27: "CIM ID no such data"
            }))) : null;
            var n, r
        }), babelHelpers.defineProperty(t, r.SERVICE_DETAILS_FETCHED, function(e, t) {
            return n = e, r = t, {
                event: v.AnalyticsEvents.CLIENT_INFO,
                clientInfo: D(n, r)
            };
            var n, r
        }), babelHelpers.defineProperty(t, r.MIGRATION_VARIANT_SELECTED, function(e, t) {
            return n = e, r = t, {
                event: v.AnalyticsEvents.PRODUCT_CLICK,
                ecommerce: N(n, r)
            };
            var n, r
        }), t);
    e.default = k
});
//# sourceMappingURL=analyticsCustomEvents.js.map