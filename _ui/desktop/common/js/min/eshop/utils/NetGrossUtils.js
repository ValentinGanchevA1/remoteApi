define(["exports"], function(e) {
    "use strict";

    function n(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(r);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, n)
        }
        return t
    }

    function f(r) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(t), !0).forEach(function(e) {
                babelHelpers.defineProperty(r, e, t[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
            })
        }
        return r
    }
    var r;

    function t(e, o) {
        return (e || []).map(function(e) {
            if (!e.oneTimeCost) return e;
            var r = u(e.oneTimeCost, o),
                t = e.payNowCost ? u(e.payNowCost, o) : null,
                n = e.monthlyCosts.map(function(e) {
                    return u(e, o)
                });
            return f({}, e, {}, {
                oneTimeCost: r,
                monthlyCosts: n,
                payNowCost: t
            })
        })
    }

    function o(e, i) {
        return e ? e.map(function(e) {
            return o = s(e, r = i, function(e, r) {
                return a(e, r, function(e) {
                    return e.netPrice
                }, function(e) {
                    return e.price
                })
            }, t = ["payNowCost", "oneTimeCost", "checkoutPrice"], n = ["monthlyCosts", "monthlyPrices"]), s(o, r, function(e, r) {
                return a(e, r, function(e) {
                    return e.netPriceWithoutVouchers || 0
                }, function(e) {
                    return e.priceWithoutVouchers
                }, {
                    gross: "grossPriceWithoutVouchers",
                    net: "netPriceWithoutVouchers",
                    result: "priceWithoutVouchers"
                })
            }, t, n);
            var r, t, n, o
        }) : e
    }

    function i(e, r) {
        return e.map(function(e) {
            return s(e, r, u, ["checkoutPrice", "firstBillPrice"], ["monthlyPrices"])
        })
    }

    function c(e, r) {
        var t = s(e, r, u, ["totalFirstBillPrice", "totalCheckoutPrice", "monthlyOldPrice", "firstBillPrice", "checkoutPrice", "oneTimeOldPrice"], ["totalMonthlyPrices", "monthlyOldPrices", "monthlyPrices"]);
        return t.terminals = o(t.terminals || [], r), t.euroSets = o(t.euroSets || [], r), t.gadgets = o(t.gadgets || [], r), t.vases = i(t.vases || [], r), t
    }

    function s(r, t, n, e, o) {
        var i = {};
        return e.forEach(function(e) {
            r[e] && (i[e] = n(r[e], t))
        }), o.forEach(function(e) {
            r[e] && (i[e] = r[e].map(function(e) {
                return e ? n(e, t) : null
            }))
        }), f({}, r, {}, i)
    }

    function u(e, r) {
        return e.originalGrossPrice ? a(e, r, function(e) {
            return e.originalNetPrice
        }, function(e) {
            return e.originalGrossPrice
        }) : a(e, r, function(e) {
            return e.netPrice
        }, function(e) {
            return e.price
        })
    }

    function a(e, r, t, n, o) {
        var i;
        o = o || {
            gross: "priceGross",
            net: "priceNet",
            result: "price"
        };
        var c = t(e),
            s = n(e);
        null == c && (c = s);
        var u = r ? c : s;
        return f({}, e, (i = {}, babelHelpers.defineProperty(i, o.gross, s), babelHelpers.defineProperty(i, o.net, c), babelHelpers.defineProperty(i, o.result, u), i))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var l = ((r = {}).chooseNetOrGrossPriceForVases = function(e, t) {
        function r(e) {
            return e.map(function(e) {
                return f({}, e, {
                    paymentDescriptions: f({}, r = e.paymentDescriptions, {
                        oneTimePayment: u(r.oneTimePayment, t),
                        monthlyPayments: r.monthlyPayments.map(function(e) {
                            return u(e, t)
                        })
                    })
                });
                var r
            })
        }
        return (e || []).map(function(e) {
            return f({}, e, {
                services: r(e.services || [])
            })
        })
    }, r.chooseNetOrGrossPriceForServices = function(e, r) {
        return t(e, r)
    }, r.chooseNetOrGrossPriceForOffers = function(e, r) {
        return t(e, r)
    }, r.chooseNetOrGrossPriceForCartMonthlyCosts = function(e, r) {
        return e.map(function(e) {
            return u(e, r)
        })
    }, r.chooseNetOrGrossPriceForCheckoutCost = function(e, r) {
        return e ? a(e, r, function(e) {
            return e.netPrice
        }, function(e) {
            return e.price
        }) : e
    }, r.chooseNetOrGrossPriceForCartOneTimeCost = function(e, r) {
        return u(e, r)
    }, r.chooseNetOrGrossPrice = function(e, r) {
        return e ? e.map(function(e) {
            return c(e, r)
        }) : e
    }, r.setPriceAsNetOrGross = u, r.chooseNetOrGrossPriceOnCartEntry = c, r.chooseNetOrGrossPriceForDevices = o, r);
    e.default = l
});
//# sourceMappingURL=NetGrossUtils.js.map