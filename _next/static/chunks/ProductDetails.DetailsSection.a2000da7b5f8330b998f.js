(window.omniJsonp = window.omniJsonp || []).push([
    [17], {
        EUF5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var r = n("zjfJ"),
                a = n("ERkP"),
                o = n.n(a),
                c = n("IdR4"),
                i = n("Bc8N"),
                s = n("KcfE");

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var l = function(e) {
                var t = e.currentPayment,
                    n = e.shouldShowNetPrices,
                    a = "ONETIME" === t.paymentType,
                    l = o.a.useMemo((function() {
                        var e = [];
                        a ? e.push({
                            price: n ? t.netPrice : t.priceGross,
                            monthFrom: 0,
                            monthTo: 0,
                            currency: "z\u0142"
                        }) : (t.monthlyPayments ? t.monthlyPayments : []).forEach((function(t) {
                            return e.push(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                                        Object(r.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, t, {
                                price: n ? t.netPrice : t.price
                            }))
                        }));
                        return Object(i.a)(e)
                    }), [a, t, n]);
                if (!t || !l) return null;
                var b = a ? "za ".concat(Object(c.a)(l.first.price), " z\u0142 ").concat(n ? "+ VAT" : "") : null,
                    p = a ? null : l.tail.map((function(e) {
                        return {
                            price: Object(c.a)(e.price, {
                                integersWithFractionDigits: !0
                            }),
                            currency: "z\u0142".concat(n ? " + VAT" : ""),
                            months: "".concat(e.monthTo, " ").concat(Object(s.a)(["rata", "raty", "rat"], e.monthTo))
                        }
                    })),
                    O = l.tail.length > 0 ? Object(c.a)(l.first.price) : null;
                return {
                    propositionName: t.propositionName,
                    oneTimePayment: b,
                    installmentPayment: p,
                    followingPriceStep: O
                }
            }
        },
        IdR4: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    integersWithFractionDigits: !1
                };
                return !t.integersWithFractionDigits && Number.isInteger(e) ? String(e) : e.toLocaleString("pl-PL", {
                    minimumFractionDigits: 2
                })
            }
        },
        Lksv: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return y
            }));
            var r = n("zjfJ"),
                a = n("5IAQ"),
                o = n("ERkP"),
                c = n.n(o),
                i = n("cxan"),
                s = n("l1C2"),
                u = (o.createElement, o.memo((function(e) {
                    return Object(s.b)("svg", Object(i.a)({
                        viewBox: "0 0 20 20",
                        width: "1em",
                        height: "1em"
                    }, e), Object(s.b)("path", {
                        d: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 2.35a1.765 1.765 0 11-1.765 1.77A1.766 1.766 0 0110 2.35zm2.941 14.12H7.647v-.6l.125-.01a1.048 1.048 0 00.809-.31 2 2 0 00.164-1.11V9.1a2 2 0 00-.2-1.16 1.089 1.089 0 00-.78-.26l-.121-.01v-.61h4.118v7.38a1.709 1.709 0 00.288 1.16 1.04 1.04 0 00.768.26l.121.01v.6z",
                        fillRule: "evenodd"
                    }))
                })));
            u.displayName = "InformationIcon";
            var l = n("Kq2c"),
                b = n("EUF5"),
                p = n("IBuz");
            c.a.createElement;
            var O = {
                    name: "scavcu",
                    styles: "margin:10px 0 20px;"
                },
                d = {
                    name: "4t9mca",
                    styles: "font-size:14px;font-weight:bold;margin:0 0 10px;line-height:1;"
                },
                f = {
                    name: "tkcdss",
                    styles: "display:block;font-size:12px;margin-bottom:20px;margin-top:2px;"
                },
                m = {
                    name: "1wcba0h",
                    styles: "display:flex;margin-top:20px;"
                },
                j = {
                    name: "1v994a0",
                    styles: "margin-right:6px;"
                },
                g = {
                    name: "1qslypz",
                    styles: "font-size:12px;line-height:normal;margin:0;"
                },
                y = function(e) {
                    var t = e.withDescriptions,
                        n = void 0 === t || t,
                        o = Object(l.useTheme)(),
                        i = o.bp,
                        y = o.colors,
                        h = Object(p.b)().current.context,
                        v = h.currentPayment,
                        T = h.showNetPrices,
                        S = Object(b.a)({
                            currentPayment: v,
                            shouldShowNetPrices: T
                        });
                    if (!S) return null;
                    var x = S.propositionName,
                        w = S.oneTimePayment,
                        E = S.installmentPayment,
                        P = S.followingPriceStep;
                    return Object(s.b)("div", {
                        css: O
                    }, Object(s.b)(l.SmoothHeightResizer, null, n && x && Object(s.b)("p", {
                        css: d
                    }, x), Object(s.b)("strong", {
                        css: Object(a.a)(Object(r.a)({
                            fontSize: 30
                        }, i.FROM_TABLET, {
                            fontSize: 40
                        }), "")
                    }, w), null === E || void 0 === E ? void 0 : E.map((function(e, t) {
                        var n = e.currency,
                            o = e.months,
                            c = e.price;
                        return Object(s.b)("span", {
                            key: t
                        }, Object(s.b)(l.Swapper, {
                            css: Object(a.a)(Object(r.a)({
                                display: "inline-block",
                                fontSize: 30,
                                fontWeight: "bold"
                            }, i.FROM_TABLET, {
                                fontSize: 40
                            }), "")
                        }, c), Object(s.b)("strong", {
                            css: Object(a.a)(Object(r.a)({
                                fontSize: 18
                            }, i.FROM_TABLET, {
                                fontSize: 24
                            }), "")
                        }, "\xa0", n, " x ", o))
                    })), P && Object(s.b)("span", {
                        css: f
                    }, "+ ", P, " z\u0142", T && "0" !== P ? " + VAT" : "", " na start"), n && x && Object(s.b)(c.a.Fragment, null, Object(s.b)(l.Separator, null), Object(s.b)("div", {
                        css: m
                    }, Object(s.b)(u, {
                        css: j,
                        fill: y.INFO,
                        height: 16,
                        width: 16
                    }), Object(s.b)("p", {
                        css: g
                    }, "Op\u0142ata za abonament kom\xf3rkowy b\u0119dzie widoczna na kolejnym kroku")))))
                }
        },
        bVfH: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return f
            })), n.d(t, "e", (function() {
                return m
            })), n.d(t, "g", (function() {
                return j
            })), n.d(t, "d", (function() {
                return g
            })), n.d(t, "c", (function() {
                return y
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "a", (function() {
                return v
            }));
            var r = n("zjfJ"),
                a = n("zygG"),
                o = n("VtSi"),
                c = n.n(o),
                i = n("pu3o"),
                s = n.n(i),
                u = n("v4L6"),
                l = n("com9");

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var O = function(e) {
                    var t, n;
                    return c.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return t = e.shouldGetLastItem, r.next = 3, c.a.awrap(l.a.get("/hapi/koszyk/minikoszyk", {
                                    params: {
                                        lastBundleMode: t
                                    }
                                }));
                            case 3:
                                return n = r.sent, r.abrupt("return", n.data);
                            case 5:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                d = function() {
                    var e;
                    return c.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, c.a.awrap(O({
                                    shouldGetLastItem: !1
                                }));
                            case 2:
                                return e = t.sent, t.abrupt("return", e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                },
                f = function() {
                    var e;
                    return c.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, c.a.awrap(O({
                                    shouldGetLastItem: !0
                                }));
                            case 2:
                                return e = t.sent, t.abrupt("return", e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                },
                m = function() {
                    var e, t, n, r, a, o, i;
                    return c.a.async((function(s) {
                        for (;;) switch (s.prev = s.next) {
                            case 0:
                                return s.next = 2, c.a.awrap(l.a.get("/hapi/koszyk/multi/_data/cart"));
                            case 2:
                                return e = s.sent, t = e.data, n = t.monthlyCosts, r = t.oneTimeCost, a = t.checkoutCost, o = t.bonuses, i = t.net, s.abrupt("return", {
                                    monthlyCosts: n,
                                    oneTimeCost: r,
                                    checkoutCost: a,
                                    bonuses: o,
                                    net: i
                                });
                            case 5:
                            case "end":
                                return s.stop()
                        }
                    }), null, null, null, Promise)
                },
                j = function() {
                    var e, t, n, r, o, i, s, u, l, b;
                    return c.a.async((function(O) {
                        for (;;) switch (O.prev = O.next) {
                            case 0:
                                return O.next = 2, c.a.awrap(Promise.all([d(), m()]));
                            case 2:
                                return e = O.sent, t = Object(a.a)(e, 2), n = t[0], r = t[1], o = r.monthlyCosts, i = r.oneTimeCost, s = r.checkoutCost, u = r.bonuses, l = r.net, b = p({}, n, {
                                    monthlyCosts: o,
                                    oneTimeCost: i,
                                    checkoutCost: s,
                                    bonuses: u,
                                    net: l
                                }), O.abrupt("return", b);
                            case 9:
                            case "end":
                                return O.stop()
                        }
                    }), null, null, null, Promise)
                },
                g = function(e) {
                    var t;
                    return c.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, c.a.awrap(Object(u.a)());
                            case 2:
                                return t = n.sent, n.next = 5, c.a.awrap(l.a.post("/koszyk/usun/".concat(e), null, {
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 5:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                y = function(e, t, n) {
                    var r;
                    return c.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, c.a.awrap(Object(u.a)());
                            case 2:
                                return r = a.sent, a.next = 5, c.a.awrap(l.a.post("/hapi/koszyk/removeDeviceFromSimFreeBundle", s.a.stringify({
                                    bundleNo: e,
                                    entryNumber: t,
                                    lastOne: n
                                }), {
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                h = function() {
                    var e;
                    return c.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, c.a.awrap(Object(u.a)());
                            case 2:
                                return e = t.sent, t.next = 5, c.a.awrap(l.a.post("/koszyk/usun/", null, {
                                    headers: {
                                        csrftoken: e
                                    }
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                },
                v = function(e) {
                    var t, n, r, a, o, i, b, p, O, d, f, m, j;
                    return c.a.async((function(g) {
                        for (;;) switch (g.prev = g.next) {
                            case 0:
                                return t = e.ratePlanId, n = e.id, r = e.processType, a = e.offerType, o = e.deviceVariant, i = e.market, b = e.availableProductsKey, p = e.bonusesToAdd, O = e.defaultBonusesToIgnore, g.next = 3, c.a.awrap(Object(u.a)());
                            case 3:
                                if (d = g.sent, f = function(e) {
                                        return 400 === e.code || !1 === e.success || !e.success
                                    }, "SALE_OF_GOODS" !== r) {
                                    g.next = 13;
                                    break
                                }
                                return g.next = 8, c.a.awrap(l.a.post("/hapi/sklep/dodaj", s.a.stringify({
                                    productCodePost: o,
                                    bundleTemplateId: n,
                                    bundleNo: 0
                                }), {
                                    headers: {
                                        CSRFToken: d
                                    }
                                }));
                            case 8:
                                if (m = g.sent, !f(m.data) || 400 !== m.data.code) {
                                    g.next = 11;
                                    break
                                }
                                throw new Error(m.data.message);
                            case 11:
                                g.next = 18;
                                break;
                            case 13:
                                return g.next = 15, c.a.awrap(l.a.post("/hapi/koszyk/oovdodaj", s.a.stringify({
                                    rateplanId: t,
                                    propositionId: n,
                                    process: r,
                                    offerType: a,
                                    market: i,
                                    deviceVariant: o,
                                    availableProductsKey: b,
                                    bonusesToAdd: p,
                                    defaultBonusesToIgnore: O
                                }, {
                                    arrayFormat: "brackets"
                                }), {
                                    headers: {
                                        CSRFToken: d
                                    }
                                }));
                            case 15:
                                if (j = g.sent, !f(j.data)) {
                                    g.next = 18;
                                    break
                                }
                                throw new Error(j.data.message);
                            case 18:
                            case "end":
                                return g.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        r9uK: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "DetailsSection", (function() {
                return Y
            }));
            var r = n("zjfJ"),
                a = n("5IAQ"),
                o = n("ERkP"),
                c = n.n(o),
                i = n("I6rk"),
                s = n("Kq2c"),
                u = n("KD1n"),
                l = n("l1C2"),
                b = n("Bit+"),
                p = n("xWEo");
            c.a.createElement;
            var O = {
                    name: "121on1r",
                    styles: "display:flex;align-items:center;padding-top:10px;width:100%;"
                },
                d = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                f = c.a.memo((function(e) {
                    var t = e.errorMessage,
                        n = Object(s.useTheme)().colors;
                    return t ? Object(l.b)("div", {
                        css: O
                    }, Object(l.b)(p.a, {
                        name: "functional-error",
                        css: Object(a.a)({
                            width: 20,
                            height: 20,
                            color: n.DANGER,
                            marginRight: 20,
                            flexShrink: 0
                        }, "")
                    }), Object(l.b)("strong", {
                        css: d
                    }, t)) : null
                })),
                m = n("VtSi"),
                j = n.n(m),
                g = n("zygG"),
                y = n("pu3o"),
                h = n.n(y),
                v = n("ptpn"),
                T = n("IBuz"),
                S = n("y6sE"),
                x = n("bVfH"),
                w = n("LsVC"),
                E = n("sGZ7");

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var I = function(e, t, n) {
                    return e.map((function(e) {
                        var a = e.action,
                            o = e.params;
                        if ("SHELF" !== a || "SUFLER" !== o.type) return e;
                        var c = o.content.content;
                        return c.configParams = c.configParams ? function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? P(Object(n), !0).forEach((function(t) {
                                    Object(r.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, c.configParams, {
                            deviceBaseId: t,
                            deviceVariantId: n
                        }) : {
                            deviceBaseId: t,
                            deviceVariantId: n
                        }, e
                    }))
                },
                k = {
                    CONTRACT: ["ACTIVATION", "MNP", "RETENTION", "MIGRATION_PRE_POST", "MIGRATION_NJU_POST_TO_POST", "MNP_TWOSTEP", "MIGRATION_NJU_PRE_TO_POST", "MIGRATION_ZETAFON_POST"],
                    NO_CONTRACT: ["SALE_OF_GOODS"],
                    NO_CONTRACT_INST: ["INSTALMENT_SALES_OF_GOODS_NC", "INSTALMENT_SALES_OF_GOODS"]
                },
                _ = {
                    CONTRACT: "z abonamentem",
                    NO_CONTRACT: "bez abonamentu",
                    NO_CONTRACT_INST: "bez abonamentu na raty",
                    INSTALMENT_SALES_OF_GOODS_NC: "nie",
                    INSTALMENT_SALES_OF_GOODS: "tak"
                };
            c.a.createElement;

            function C() {
                var e = Object(u.a)(["\n      0% {\n        opacity: 0;\n      }\n      20% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    "]);
                return C = function() {
                    return e
                }, e
            }
            var A = function() {
                var e, t = Object(s.useLayer)().level,
                    n = Object(s.useTheme)().bp,
                    o = function() {
                        var e = Object(S.b)().market,
                            t = Object(E.c)(),
                            n = t.cartItemsCount,
                            r = t.dispatch,
                            a = Object(T.b)().current.context,
                            o = a.actions,
                            i = a.currentPayment,
                            s = a.details,
                            u = a.selectedVariantSet,
                            l = c.a.useState(!1),
                            b = Object(g.a)(l, 2),
                            p = b[0],
                            O = b[1],
                            d = c.a.useState(null),
                            f = Object(g.a)(d, 2),
                            m = f[0],
                            y = f[1];
                        c.a.useEffect((function() {
                            y(null)
                        }), [i]);
                        var P = k.CONTRACT.includes(i.processType),
                            _ = i.processType,
                            C = i.servicePlan,
                            A = i.offerType,
                            N = i.rateplanId,
                            R = i.propositionId,
                            z = i.priceGross,
                            L = i.availableProductsKey,
                            D = (null === s || void 0 === s ? void 0 : s.id) || "",
                            F = u && u.code || "",
                            M = u && "".concat(u.url, "?").concat(h.a.stringify({
                                processType: _,
                                serviceplan: C,
                                chosenDevice: F,
                                offerType: A
                            })) || "",
                            B = i ? {
                                ratePlanId: N,
                                id: R,
                                offerType: A,
                                processType: _,
                                deviceVariant: F,
                                market: e,
                                availableProductsKey: L
                            } : {},
                            G = "INSTALMENT_SALES_OF_GOODS" !== i.processType,
                            V = o && P ? I(o, D, F) : null,
                            K = c.a.useCallback((function() {
                                if (i) {
                                    j.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, y(null), O(!0), Object(w.b)((null === s || void 0 === s ? void 0 : s.name) || "", R, "".concat(z), _, A, e), t.next = 6, j.a.awrap(Object(x.a)(B));
                                            case 6:
                                                r({
                                                    type: "setCartItemsCount",
                                                    payload: (n || 0) + 1
                                                }), window.location.assign("/koszyk/multi"), t.next = 14;
                                                break;
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(0), O(!1), y(t.t0.message || "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d.");
                                            case 14:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, [
                                        [0, 10]
                                    ], Promise)
                                }
                            }), [s, B, r, n, A, z, _, R, i, e]);
                        return {
                            onActionClick: c.a.useCallback((function(e) {
                                var t = e.action,
                                    n = e.params;
                                if ("SHELF" === t && "SUFLER" === n.type) {
                                    var r = n.content.content;
                                    Object(v.a)({
                                        key: "sufler-".concat(r.id)
                                    })
                                }
                            }), []),
                            actions: V,
                            onAddToCartClick: K,
                            isAddToCartResponsePending: p,
                            productPageUrl: M,
                            errorMessage: m,
                            isProcessTypeForNewCustomer: G
                        }
                    }(),
                    i = o.actions,
                    u = o.onAddToCartClick,
                    p = o.isAddToCartResponsePending,
                    O = o.errorMessage,
                    d = o.productPageUrl,
                    m = o.isProcessTypeForNewCustomer,
                    y = o.onActionClick,
                    P = 0 !== t,
                    _ = Object(l.c)(C());
                return P && i ? Object(l.b)(s.SmoothHeightResizer, null, Object(l.b)("div", {
                    css: Object(a.a)(Object(r.a)({}, n.ONLY_MOBILE, {
                        paddingBottom: 20
                    }), "")
                }, null === i || void 0 === i ? void 0 : i.map((function(e, t) {
                    return Object(l.b)(b.a, {
                        key: t,
                        action: e,
                        onClick: function() {
                            return y(e)
                        }
                    })
                })))) : Object(l.b)(s.SmoothHeightResizer, null, Object(l.b)("div", {
                    css: Object(a.a)(Object(r.a)({
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        paddingBottom: 20
                    }, n.FROM_TABLET, {
                        alignItems: "center",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        paddingBottom: 0
                    }), "")
                }, p && Object(l.b)("strong", {
                    css: Object(a.a)(Object(r.a)({
                        fontSize: 14,
                        display: "block",
                        opacity: 1,
                        maxHeight: 20,
                        transition: "opacity .2s ease 1s, max-height .2s",
                        span: {
                            animation: "".concat(_, " 1.2s ease infinite"),
                            ":nth-of-type(2)": {
                                animationDelay: ".2s"
                            },
                            ":nth-of-type(3)": {
                                animationDelay: ".4s"
                            }
                        }
                    }, n.FROM_TABLET, {
                        fontSize: 16,
                        margin: "15px 0"
                    }), "")
                }, "Trwa dodawanie do koszyka", Object(l.b)("span", null, "."), Object(l.b)("span", null, "."), Object(l.b)("span", null, ".")), Object(l.b)(b.a, {
                    disabled: p,
                    action: {
                        id: "buy_now",
                        text: "Kup teraz",
                        title: "Kup teraz",
                        variant: "PRIMARY_ON_WHITE",
                        type: m ? "BUTTON" : "BUTTON_LINK",
                        action: m ? "addToCart" : d
                    },
                    actionsMap: {
                        addToCart: u
                    },
                    css: Object(a.a)((e = {
                        display: p ? "none" : void 0,
                        width: "100%"
                    }, Object(r.a)(e, n.FROM_TABLET, {
                        width: 230,
                        order: -1
                    }), Object(r.a)(e, n.FROM_DESKTOP, {
                        width: 190
                    }), e), "")
                }), Object(l.b)(f, {
                    errorMessage: O
                }), m && Object(l.b)(s.A, {
                    title: "Zobacz wi\u0119cej",
                    href: d,
                    disabled: p,
                    css: Object(a.a)(Object(r.a)({
                        display: p ? "none" : void 0,
                        marginTop: 20,
                        fontSize: 14
                    }, n.FROM_TABLET, {
                        margin: "0 0 0 20px",
                        order: -1
                    }), "")
                }, "Zobacz wi\u0119cej")))
            };
            A.displayName = "Actions";
            var N = function() {
                var e = Object(T.b)(),
                    t = e.current.context,
                    n = t.details,
                    r = t.currentPayment,
                    a = e.send,
                    o = c.a.useMemo((function() {
                        return Object.entries(k).map((function(e) {
                            var t = Object(g.a)(e, 2),
                                r = t[0],
                                a = t[1];
                            return {
                                toggleType: r,
                                offerComponents: (null === n || void 0 === n ? void 0 : n.payments.filter((function(e) {
                                    return a.includes(e.processType)
                                })).map((function(e) {
                                    return {
                                        propositionId: e.propositionId,
                                        processType: e.processType
                                    }
                                }))) || []
                            }
                        })).filter((function(e) {
                            return e.offerComponents.length > 0
                        }))
                    }), [n]),
                    i = c.a.useMemo((function() {
                        return o.find((function(e) {
                            return e.offerComponents.some((function(e) {
                                return e.propositionId === (null === r || void 0 === r ? void 0 : r.propositionId)
                            }))
                        }))
                    }), [r, o]);
                return {
                    onOfferChange: c.a.useCallback((function(e) {
                        return a({
                            type: "SET_PROPOSITION_ID",
                            propositionId: e
                        })
                    }), [a]),
                    currentPayment: r,
                    togglesData: o,
                    currentToggle: i
                }
            };
            c.a.createElement;
            var R = {
                    name: "l57rop",
                    styles: "padding-bottom:10px;"
                },
                z = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                L = function() {
                    var e = Object(s.useTheme)().bp,
                        t = N(),
                        n = t.currentPayment,
                        o = t.onOfferChange,
                        c = t.currentToggle;
                    return Object(l.b)(s.SmoothHeightResizer, null, c.offerComponents.length > 1 && Object(l.b)("div", {
                        css: R
                    }, Object(l.b)("strong", {
                        css: z
                    }, "Korzystasz z us\u0142ug abonamentowych Orange?"), Object(l.b)("div", {
                        css: Object(a.a)(Object(r.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 10
                        }, e.FROM_TABLET, {
                            flexDirection: "row"
                        }), "")
                    }, c.offerComponents.map((function(t, a) {
                        return Object(l.b)(s.Toggle, {
                            key: a,
                            checked: t.propositionId === (null === n || void 0 === n ? void 0 : n.propositionId),
                            onChange: function() {
                                return o(t.propositionId)
                            },
                            wrapperCss: {
                                "input + div": Object(r.a)({
                                    minHeight: 45,
                                    textAlign: "center",
                                    fontSize: 12
                                }, e.FROM_TABLET, {
                                    padding: 8,
                                    minHeight: 50
                                }),
                                "&:not(:last-of-type)": Object(r.a)({
                                    marginBottom: 10
                                }, e.FROM_TABLET, {
                                    marginRight: 20,
                                    marginBottom: 0
                                })
                            }
                        }, _["INSTALMENT_SALES_OF_GOODS" === t.processType ? "INSTALMENT_SALES_OF_GOODS" : "INSTALMENT_SALES_OF_GOODS_NC"])
                    })))))
                },
                D = (c.a.createElement, c.a.memo((function() {
                    var e = Object(s.useTheme)().bp,
                        t = function() {
                            var e = Object(T.b)().current.context.details,
                                t = null === e || void 0 === e ? void 0 : e.product.items[0].name;
                            return {
                                additionalProductsNames: null === e || void 0 === e ? void 0 : e.product.items.slice(1).map((function(e) {
                                    return e.name
                                })),
                                baseProductName: t
                            }
                        }(),
                        n = t.baseProductName,
                        o = t.additionalProductsNames;
                    return Object(l.b)("h3", {
                        css: Object(a.a)(Object(r.a)({
                            fontSize: 18,
                            marginBottom: 20,
                            lineHeight: "1"
                        }, e.FROM_TABLET, {
                            fontSize: 30
                        }), "")
                    }, n, (null === o || void 0 === o ? void 0 : o.length) && Object(l.b)("span", {
                        css: Object(a.a)(Object(r.a)({
                            display: "block",
                            fontSize: 14,
                            lineHeight: "1",
                            fontWeight: "lighter"
                        }, e.FROM_TABLET, {
                            lineHeight: "22px"
                        }), "")
                    }, "w zestawie z", " ", o.map((function(e, t) {
                        return Object(l.b)("strong", {
                            key: t
                        }, " ".concat(e))
                    }))))
                })));
            c.a.createElement;
            var F = {
                    name: "1c18zwa",
                    styles: "display:flex;padding-bottom:8px;"
                },
                M = c.a.memo(c.a.forwardRef((function(e, t) {
                    var n = e.children,
                        r = e.setRefs,
                        a = c.a.useRef([]);
                    return c.a.useEffect((function() {
                        r(a.current)
                    }), [r, n]), Object(l.b)("div", {
                        ref: t,
                        css: F
                    }, c.a.Children.map(n, (function(e, t) {
                        return e && c.a.cloneElement(e, {
                            ref: function(e) {
                                a.current[t] = e
                            }
                        })
                    })))
                })));
            c.a.createElement;
            var B = {
                    name: "h6tsxv",
                    styles: "position:relative;margin-bottom:20px;"
                },
                G = function() {
                    var e = Object(s.useTheme)(),
                        t = e.colors,
                        n = e.bp,
                        o = function() {
                            var e, t = Object(T.b)(),
                                n = t.current,
                                r = t.send;
                            return {
                                onItemClick: c.a.useCallback((function(e) {
                                    return r({
                                        type: "SET_SELECTED_ITEM_INDEX",
                                        selectedItemIndex: e
                                    })
                                }), [r]),
                                product: null === (e = n.context.details) || void 0 === e ? void 0 : e.product
                            }
                        }(),
                        i = o.product,
                        u = o.onItemClick,
                        b = function() {
                            var e = c.a.useRef(null),
                                t = c.a.useRef([]),
                                n = c.a.useState(0),
                                r = Object(g.a)(n, 2),
                                a = r[0],
                                o = r[1],
                                i = c.a.useState({}),
                                s = Object(g.a)(i, 2),
                                u = s[0],
                                l = s[1];
                            return c.a.useEffect((function() {
                                t.current.length <= 0 || l({
                                    left: t.current[a].offsetLeft,
                                    width: t.current[a].offsetWidth
                                })
                            }), [a]), {
                                bind: {
                                    containerRef: e,
                                    setRefs: function(e) {
                                        t.current = e
                                    }
                                },
                                activeItemIndex: a,
                                setActiveItemIndex: o,
                                activeItemStyles: u
                            }
                        }(),
                        p = b.setActiveItemIndex,
                        O = b.bind,
                        d = b.activeItemStyles,
                        f = b.activeItemIndex;
                    return Object(l.b)("nav", {
                        role: "tablist",
                        "aria-label": "Produkty",
                        css: B
                    }, Object(l.b)(M, O, null === i || void 0 === i ? void 0 : i.items.map((function(e, o) {
                        return Object(l.b)("span", {
                            key: o,
                            role: "tab",
                            "aria-selected": o === f,
                            onClick: function() {
                                u(o), p(o)
                            },
                            css: Object(a.a)(Object(r.a)({
                                cursor: "pointer",
                                fontWeight: "bold",
                                fontSize: 12,
                                color: o === f ? t.ORANGE_DARK : t.BLACK,
                                transition: "color .15s",
                                ":not(:last-child)": {
                                    marginRight: 20
                                }
                            }, n.FROM_TABLET, {
                                fontSize: 14
                            }), "")
                        }, e.name)
                    }))), Object(l.b)("div", {
                        style: d,
                        css: Object(a.a)([{
                            position: "absolute",
                            bottom: 0,
                            height: 2,
                            backgroundColor: t.ORANGE_DARK,
                            transition: "all .2s",
                            willChange: "left, width"
                        }], "")
                    }))
                };
            c.a.createElement;
            var V = {
                    name: "1xo5ph",
                    styles: "font-size:12px;font-weight:bold;line-height:1;margin-bottom:10px;"
                },
                K = c.a.memo((function() {
                    var e = Object(s.useTheme)().bp,
                        t = N(),
                        n = t.onOfferChange,
                        o = t.currentPayment,
                        i = t.togglesData;
                    return Object(l.b)(c.a.Fragment, null, Object(l.b)("p", {
                        css: V
                    }, "Wybierz spos\xf3b zakupu"), Object(l.b)("div", {
                        css: Object(a.a)(Object(r.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: 20
                        }, e.FROM_TABLET, {
                            flexDirection: "row"
                        }), "")
                    }, i.map((function(t) {
                        return Object(l.b)(s.Toggle, {
                            key: t.toggleType,
                            checked: t.offerComponents.some((function(e) {
                                return e.propositionId === o.propositionId
                            })),
                            onChange: function() {
                                return n(t.offerComponents[0].propositionId)
                            },
                            wrapperCss: {
                                "input + div": Object(r.a)({
                                    minHeight: 45,
                                    textAlign: "center",
                                    fontSize: 12
                                }, e.FROM_TABLET, {
                                    padding: 8,
                                    minHeight: 50
                                }),
                                "&:not(:last-of-type)": Object(r.a)({
                                    marginBottom: 10
                                }, e.FROM_TABLET, {
                                    marginRight: 20,
                                    marginBottom: 0
                                })
                            }
                        }, _[t.toggleType])
                    }))))
                })),
                H = n("Lksv"),
                W = n("nJ3U");
            c.a.createElement;
            var U = {
                    name: "1xo5ph",
                    styles: "font-size:12px;font-weight:bold;line-height:1;margin-bottom:10px;"
                },
                J = {
                    name: "1nvf5u9",
                    styles: "text-transform:lowercase;"
                },
                q = {
                    name: "1ivmncw",
                    styles: "display:flex;flex-direction:row;margin-bottom:20px;"
                },
                Z = c.a.memo((function() {
                    var e = Object(s.useTheme)().colors,
                        t = function() {
                            var e = Object(T.b)(),
                                t = e.current.context,
                                n = t.details,
                                a = t.selectedItemIndex,
                                o = t.selectedVariants,
                                i = e.send,
                                s = (null === n || void 0 === n ? void 0 : n.product.items[a]) || {},
                                u = s.code,
                                l = void 0 === u ? "" : u,
                                b = s.variants,
                                p = void 0 === b ? [] : b,
                                O = o[l];
                            return {
                                onVariantChange: c.a.useCallback((function(e) {
                                    return i({
                                        type: "SET_SELECTED_VARIANTS",
                                        selectedVariants: Object(r.a)({}, l, p.find((function(t) {
                                            return t.code === e
                                        })))
                                    })
                                }), [l, i, p]),
                                selectedVariant: O,
                                variants: p
                            }
                        }(),
                        n = t.onVariantChange,
                        o = t.selectedVariant,
                        i = t.variants;
                    return Object(l.b)(c.a.Fragment, null, Object(l.b)("p", {
                        css: U
                    }, "Kolor:", " ", Object(l.b)("span", {
                        css: J
                    }, o.colorName)), Object(l.b)("div", {
                        css: q
                    }, i.map((function(t, r) {
                        var c = t.code,
                            i = t.color;
                        return Object(l.b)(s.Toggle, {
                            key: r,
                            checked: c === o.code,
                            onChange: function() {
                                return n(c)
                            },
                            wrapperCss: {
                                "input + div": {
                                    minHeight: 50
                                },
                                "&:not(:last-of-type)": {
                                    marginRight: 20
                                }
                            }
                        }, Object(l.b)("span", {
                            css: Object(a.a)({
                                backgroundColor: i,
                                border: "1px ".concat(e.DOVE, " solid"),
                                borderRadius: "50%",
                                height: 20,
                                width: 20
                            }, "")
                        }))
                    }))))
                }));
            Z.displayName = "VariantToggles";
            c.a.createElement;
            var Y = c.a.memo((function() {
                var e, t, n = Object(i.a)(),
                    o = Object(s.useTheme)().bp;
                return Object(l.b)("section", {
                    css: Object(a.a)(Object(r.a)({
                        flex: "1 0 0",
                        padding: "20px 0",
                        marginBottom: 10
                    }, o.FROM_DESKTOP, {
                        padding: "10px 0 50px 20px",
                        margin: 0,
                        width: "100%"
                    }), "")
                }, Object(l.b)("div", {
                    css: Object(a.a)((e = {
                        display: "flex",
                        flexDirection: "column"
                    }, Object(r.a)(e, o.FROM_TABLET, {
                        width: 480,
                        margin: "0 auto"
                    }), Object(r.a)(e, o.FROM_DESKTOP, {
                        width: 500,
                        margin: "0 0 0 auto",
                        justifyContent: "space-between",
                        height: "100%"
                    }), e), "")
                }, Object(l.b)(s.ArrowSeparator, {
                    css: Object(a.a)(Object(r.a)({
                        display: "none"
                    }, o.ONLY_TABLET, {
                        display: "block",
                        margin: "10px 0 40px 0"
                    }), "")
                }), Object(l.b)(G, null), Object(l.b)(s.CustomScroll, {
                    isInvisible: n,
                    variant: "LIGHT",
                    css: Object(a.a)((t = {}, Object(r.a)(t, o.FROM_DESKTOP, {
                        height: 500
                    }), Object(r.a)(t, o.SIDEBAR_NAVIGATION_INTERSECTION, {
                        margin: "0 30px 0 0"
                    }), t), "")
                }, Object(l.b)("div", {
                    css: Object(a.a)(Object(r.a)({}, o.FROM_DESKTOP, {
                        width: 400,
                        marginRight: "auto"
                    }), "")
                }, Object(l.b)(D, null), n && Object(l.b)(W.a, null), Object(l.b)(Z, null), Object(l.b)(K, null), Object(l.b)(L, null), Object(l.b)(H.a, null), Object(l.b)(A, null)))))
            }));
            Y.displayName = "DetailsSection"
        }
    }
]);
//# sourceMappingURL=ProductDetails.DetailsSection.a2000da7b5f8330b998f.js.map