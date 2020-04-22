(window.omniJsonp = window.omniJsonp || []).push([
    [29], {
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
        PImS: function(e, t, n) {
            "use strict";
            n.d(t, "j", (function() {
                return b
            })), n.d(t, "h", (function() {
                return v
            })), n.d(t, "i", (function() {
                return T
            })), n.d(t, "g", (function() {
                return P
            })), n.d(t, "f", (function() {
                return w
            })), n.d(t, "a", (function() {
                return N
            })), n.d(t, "b", (function() {
                return k
            })), n.d(t, "e", (function() {
                return C
            })), n.d(t, "d", (function() {
                return D
            })), n.d(t, "k", (function() {
                return S
            })), n.d(t, "c", (function() {
                return R
            }));
            var r = n("zygG"),
                a = n("VtSi"),
                o = n.n(a),
                c = n("fGyu"),
                i = n("HbGN"),
                s = n("zjfJ"),
                u = n("cVGl"),
                l = n("Bc8N"),
                d = n("bVfH");

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var b = function(e, t) {
                    return e.map((function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? p(Object(n), !0).forEach((function(t) {
                                    Object(s.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            devices: e.devices.filter((function(e) {
                                return e.cartId !== t
                            }))
                        })
                    })).filter((function(e) {
                        return e.devices.length > 0 || e.services.length > 0 || e.entries || "DATA" === e.offerType
                    }))
                },
                f = function(e) {
                    return {
                        type: "SERVICE",
                        name: e.name,
                        iconType: e.thumbnailIcon
                    }
                },
                m = function(e) {
                    return {
                        price: e.price,
                        monthFrom: e.monthFrom,
                        monthTo: e.monthTo,
                        currency: e.currency,
                        netPrice: e.netPrice,
                        net: e.net
                    }
                },
                O = function(e) {
                    var t = e.colorDefinition,
                        n = e.setElements,
                        r = Object(i.a)(e, ["colorDefinition", "setElements"]);
                    return t ? [{
                        color: t.name,
                        name: r.name
                    }] : n ? n.map((function(e) {
                        return {
                            color: e.color,
                            name: e.name
                        }
                    })) : null
                },
                h = function(e) {
                    return function(t, n) {
                        var r = "euroSet" === e ? t.euroSets : t.terminals;
                        return r ? r.map((function(e, r) {
                            return {
                                cartId: "device-".concat(n, "-").concat(r),
                                entryCartId: "entry-".concat(n),
                                productEntryNumber: e.entryNo,
                                productBundleNumber: e.bundleNo,
                                offerBundleNumber: t.bundleNo,
                                offerBundleCode: t.bundleCode,
                                productCode: e.productCode,
                                planName: E(t),
                                type: "DEVICE",
                                imageUrl: e.imageUrl,
                                name: e.name,
                                monthlyPrices: e.monthlyPrices.map(m),
                                checkoutPrice: m(e.checkoutPrice),
                                elements: O(e)
                            }
                        })) : []
                    }
                },
                y = h("euroSet"),
                j = h("terminal"),
                g = function(e) {
                    return function(t) {
                        var n = [];
                        if (t.monthlyCosts) {
                            var r = t.monthlyCosts.map((function(t) {
                                return {
                                    price: t[e],
                                    monthTo: t.monthTo,
                                    monthFrom: t.monthFrom,
                                    currency: t.currency
                                }
                            }));
                            n = n.concat(r)
                        }
                        if (t.oneTimeCost) {
                            var a = {
                                price: t.oneTimeCost[e],
                                monthFrom: 1,
                                monthTo: 1,
                                currency: "z\u0142"
                            };
                            n.push(a)
                        }
                        if (t.checkoutCost) {
                            var o = {
                                price: t.checkoutCost[e],
                                monthFrom: 0,
                                monthTo: 0,
                                currency: "z\u0142"
                            };
                            n.push(o)
                        }
                        return Object(l.a)(n)
                    }
                },
                v = g("price"),
                T = g("netPrice"),
                E = function(e) {
                    var t = [],
                        n = e.entries || [];
                    if (e.voipFixProduct && t.push(e.voipFixProduct.name), e.broadbandFixProduct && t.push(e.broadbandFixProduct.name), e.tvFixProduct && t.push(e.tvFixProduct.name), n.forEach((function(e) {
                            "FTTH" === e.technology ? t.push(e.descriptionShort) : t.push(e.planName)
                        })), "HARDBUNDLE" === e.bundleType) {
                        var r = t.join(", ");
                        return r.length > 45 ? r.substring(0, 45).concat("...") : r
                    }
                    var a = t.join(" + ");
                    return e.planName && t.length > 0 ? "".concat(e.planName, " - ").concat(a) : !e.planName && t.length > 0 ? a : "SIMFREE_INST" === e.bundleType ? null : e.planName
                },
                P = function e(t, n) {
                    var r = t.bundleCode,
                        a = t.productCode,
                        o = t.processType,
                        i = t.bundleNo,
                        s = t.loyaltyLength,
                        u = t.descriptionShort,
                        l = t.loyaltyLengthDescription,
                        d = t.entries,
                        p = j(t, n),
                        b = y(t, n),
                        m = function(e) {
                            return e.vases ? e.vases.map(f) : []
                        }(t),
                        O = function(e) {
                            switch (e.bundleType) {
                                case "1P_PRE":
                                    return "FIX1P";
                                case "3P_PRE":
                                    return "FIX3P";
                                case "HARDBUNDLE":
                                    return "MINI" === e.promotionType ? "CONVERGENT2U" : "CONVERGENT4U";
                                default:
                                    return e.bundleType
                            }
                        }(t),
                        h = [].concat(Object(c.a)(p), Object(c.a)(b)),
                        g = d ? d.map(e) : null,
                        v = E(t);
                    return {
                        cartId: "entry-".concat(n),
                        services: m,
                        devices: h,
                        planName: v,
                        processType: o,
                        offerType: O,
                        entries: g,
                        offerCode: a,
                        offerBundleNumber: i,
                        offerBundleCode: r,
                        loyaltyLength: s,
                        loyaltyLengthDescription: l,
                        shortDescription: u
                    }
                },
                w = function(e) {
                    if (!e || !e.entries || !e.offerCount) return {
                        offerCount: 0,
                        entries: [],
                        grossPayments: null,
                        netPayments: null,
                        bonusesInfo: []
                    };
                    var t = v(e),
                        n = T(e),
                        r = e.entries.map(P),
                        a = x(r),
                        o = I(e);
                    return {
                        offerCount: e.offerCount,
                        entries: a,
                        grossPayments: t,
                        netPayments: n,
                        bonusesInfo: o
                    }
                },
                I = function(e) {
                    var t = e.bonuses ? e.bonuses.map((function(e) {
                        return e.description
                    })) : [];
                    return Array.from(new Set(t))
                },
                x = function(e) {
                    var t = e.filter((function(e) {
                            return "VK_SIMFREE" === e.offerType
                        })),
                        n = e.filter((function(e) {
                            return "VK_SIMFREE" !== e.offerType
                        }));
                    return [].concat(Object(c.a)(n), Object(c.a)(t))
                },
                N = function(e, t, n, r) {
                    return o.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                if (a.prev = 0, e({
                                        type: "setIsDeletingEnabled",
                                        payload: !1
                                    }), e({
                                        type: "addToDeletedItems",
                                        payload: t
                                    }), "CONVERGENT4U" !== r && "CONVERGENT2U" !== r) {
                                    a.next = 8;
                                    break
                                }
                                return a.next = 6, o.a.awrap(Promise.all([Object(u.a)(1e3), Object(d.b)()]));
                            case 6:
                                a.next = 10;
                                break;
                            case 8:
                                return a.next = 10, o.a.awrap(Promise.all([Object(u.a)(1e3), Object(d.d)(n)]));
                            case 10:
                                e({
                                    type: "deleteBundle",
                                    payload: t
                                }), e({
                                    type: "setShouldRefetchPrice",
                                    payload: !0
                                }), a.next = 17;
                                break;
                            case 14:
                                a.prev = 14, a.t0 = a.catch(0), e({
                                    type: "setIsError",
                                    payload: !0
                                });
                            case 17:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, [
                        [0, 14]
                    ], Promise)
                },
                k = function(e, t, n, r, a) {
                    return o.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return c.prev = 0, e({
                                    type: "setIsDeletingEnabled",
                                    payload: !1
                                }), e({
                                    type: "addToDeletedItems",
                                    payload: t
                                }), c.next = 5, o.a.awrap(Promise.all([Object(u.a)(1e3), Object(d.c)(n, r, a)]));
                            case 5:
                                e({
                                    type: "deleteDevice",
                                    payload: t
                                }), e({
                                    type: "setShouldRefetchPrice",
                                    payload: !0
                                }), c.next = 12;
                                break;
                            case 9:
                                c.prev = 9, c.t0 = c.catch(0), e({
                                    type: "setIsError",
                                    payload: !0
                                });
                            case 12:
                            case "end":
                                return c.stop()
                        }
                    }), null, null, [
                        [0, 9]
                    ], Promise)
                },
                C = function() {
                    var e, t, n;
                    return o.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, o.a.awrap(Promise.all([Object(d.g)(), Object(u.a)(750)]));
                            case 2:
                                return e = a.sent, t = Object(r.a)(e, 1), n = t[0], a.abrupt("return", n);
                            case 6:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                D = function() {
                    var e, t, n;
                    return o.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, o.a.awrap(Promise.all([Object(d.e)(), Object(u.a)(750)]));
                            case 2:
                                return e = a.sent, t = Object(r.a)(e, 1), n = t[0], a.abrupt("return", n);
                            case 6:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                S = function(e, t) {
                    return !("SIMFREE_INST" === t && "czas nieokre\u015blony" === e)
                },
                R = function(e) {
                    return e.replace(/Rabat /g, " -")
                }
        },
        Q1tT: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return p
            })), n.d(t, "a", (function() {
                return f
            })), n.d(t, "c", (function() {
                return m
            }));
            var r = n("cxan"),
                a = n("HbGN"),
                o = n("ERkP"),
                c = n.n(o),
                i = n("0D0S"),
                s = n.n(i),
                u = function(e, t) {
                    if (function(e, t) {
                            try {
                                return new RegExp("opl_feat_".concat(t)).test(e)
                            } catch (n) {
                                return !1
                            }
                        }(e, t)) return e.split("".concat(t, "="))[1].split(";")[0]
                },
                l = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = s()();
                    switch (u(e, t)) {
                        case "0":
                            return !1;
                        case "1":
                            return !0;
                        default:
                            return a && n ? n(a.publicRuntimeConfig.OMNIFRONTEND_APP_ENV) : r
                    }
                },
                d = n("l1C2"),
                p = (c.a.createElement, function(e) {
                    return {
                        corazoneSkipRedirect: l(e, "corazoneSkipRedirect"),
                        minicartEditMode: l(e, "minicartEditMode"),
                        suflerTransactions: l(e, "suflerTransactions", (function(e) {
                            return "PROD" !== e
                        })),
                        negateMaintenance: l(e, "negateMaintenance"),
                        marketSelection: l(e, "marketSelection"),
                        redirectVoiceOnB2B: l(e, "redirectVoiceOnB2B"),
                        loveCMB: l(e, "loveCMB", (function() {
                            return !0
                        })),
                        configuratorInFIX: l(e, "configuratorInFIX", (function() {
                            return !1
                        })),
                        skipRedirectUrl: l(e, "skipRedirectUrl"),
                        enableCBSRedirectForWarsaw: l(e, "enableCBSRedirectForWarsaw", (function() {
                            return !0
                        })),
                        suflerSummaryB2B: l(e, "suflerSummaryB2B", (function() {
                            return !0
                        })),
                        additionalPackages: l(e, "additionalPackages", (function() {
                            return !0
                        })),
                        offline: l(e, "offline"),
                        disableShame: l(e, "disableShame"),
                        webUpsell: l(e, "webUpsell"),
                        loggedCustomerPath: l(e, "loggedCustomerPath", (function(e) {
                            return "PROD" !== e
                        }))
                    }
                }),
                b = c.a.createContext(p("")),
                f = function(e) {
                    var t = e.featuresMap,
                        n = Object(a.a)(e, ["featuresMap"]);
                    return Object(d.b)(b.Provider, Object(r.a)({
                        value: t
                    }, n))
                },
                m = function() {
                    var e = c.a.useContext(b);
                    return e
                }
        },
        S9te: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return N
            }));
            var r = n("cxan"),
                a = n("zjfJ"),
                o = n("5IAQ"),
                c = n("ERkP"),
                i = n.n(c),
                s = n("Kq2c"),
                u = n("t5YO"),
                l = n("BNVM"),
                d = {
                    VOICE: "Abonament kom\xf3rkowy",
                    DATA: "Internet mobilny",
                    VK_SIMFREE: "Urz\u0105dzenia bez abonamentu",
                    SIMFREE_INST: "Urz\u0105dzenie bez abonamentu na raty",
                    FIX1P: "Internet domowy",
                    FIX3P: "Internet domowy z TV",
                    CONVERGENT4U: "Orange Love Extra",
                    CONVERGENT2U: "Orange Love Mini"
                },
                p = {
                    ACTIVATION: "Nowy numer",
                    RETENTION: "Przed\u0142u\u017cam umow\u0119",
                    MNP: "Przenosz\u0119 numer",
                    MIGRATION_NJU_POST_TO_POST: "Przechodz\u0119 z nju",
                    MIGRATION_NJU_PRE_TO_POST: "Przechodz\u0119 z nju",
                    MIGRATION_PRE_POST: "Przechodz\u0119\xa0z karty"
                },
                b = {
                    VOICE: "sim-1",
                    DATA: "sim-1",
                    FIX1P: "internet-lte",
                    FIX3P: "internet-tv",
                    CONVERGENT4U: "love-1",
                    CONVERGENT2U: "love-1"
                },
                f = n("xFjn"),
                m = n("VtSi"),
                O = n.n(m),
                h = n("xWEo"),
                y = n("l1C2"),
                j = (i.a.createElement, i.a.memo((function(e) {
                    var t, n = e.onClick,
                        r = Object(s.useTheme)(),
                        c = r.colors,
                        i = r.selectors,
                        u = r.bp,
                        l = Object(f.b)().isDeletingEnabled;
                    return Object(y.b)("button", {
                        type: "button",
                        onClick: l ? n : void 0,
                        css: Object(o.a)((t = {
                            height: 40,
                            width: 40,
                            marginLeft: 8,
                            border: "none",
                            outline: "none",
                            cursor: "pointer",
                            color: c.WHITE,
                            position: "relative",
                            borderRadius: "50%",
                            backgroundColor: l ? c.DANGER : c.DOVE,
                            transition: "all .15s"
                        }, Object(a.a)(t, i.ON_FOCUS_OR_HOVER, {
                            transform: l ? "scale(1.1)" : void 0
                        }), Object(a.a)(t, u.FROM_TABLET, {
                            marginLeft: 5,
                            marginTop: 5
                        }), t), "")
                    }, Object(y.b)(h.a, {
                        name: "close",
                        css: Object(o.a)({
                            width: 16,
                            height: 16,
                            fill: c.WHITE,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }, "")
                    }))
                })));
            j.displayName = "DeleteButton";
            var g = n("HbGN"),
                v = (i.a.createElement, i.a.memo((function(e) {
                    var t = e.shouldShowDarken,
                        n = e.textToDisplay,
                        c = Object(g.a)(e, ["shouldShowDarken", "textToDisplay"]),
                        i = Object(s.useTheme)(),
                        u = i.colors,
                        l = i.bp;
                    return Object(y.b)("p", Object(r.a)({
                        css: Object(o.a)(Object(a.a)({
                            margin: 0,
                            fontSize: 15,
                            lineHeight: 1.2,
                            color: t ? u.STONE : u.WHITE,
                            fontWeight: "bold"
                        }, l.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, c), n)
                })));
            v.displayName = "ItemName";
            var T = n("PImS");
            i.a.createElement;
            var E = {
                    name: "17ocwxd",
                    styles: "height:50px;max-width:80px;"
                },
                P = i.a.memo((function(e) {
                    var t = e.name,
                        n = e.cartId,
                        r = e.planName,
                        c = e.imageUrl,
                        u = e.entryCartId,
                        l = e.isItemVisible,
                        d = e.offerBundleNumber,
                        p = e.productEntryNumber,
                        b = e.shoudShowDeleteAnimation,
                        m = Object(s.useTheme)().bp,
                        h = Object(f.b)(),
                        g = h.isEditModeEnabled,
                        P = h.dispatch,
                        w = h.cartData,
                        I = !!r && !!t && d,
                        x = [r, t].filter((function(e) {
                            return !!e
                        })).join(" + "),
                        N = i.a.useCallback((function() {
                            var e, t;
                            return O.a.async((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!I) {
                                            r.next = 5;
                                            break
                                        }
                                        return r.next = 3, O.a.awrap(Object(T.a)(P, u, d));
                                    case 3:
                                        r.next = 9;
                                        break;
                                    case 5:
                                        return e = w ? w.entries.find((function(e) {
                                            return e.cartId === u
                                        })) : null, t = !!e && 1 === e.devices.length, r.next = 9, O.a.awrap(Object(T.b)(P, n, d, p, t));
                                    case 9:
                                    case "end":
                                        return r.stop()
                                }
                            }), null, null, null, Promise)
                        }), [n, P, w, u, I, d, p]);
                    return Object(y.b)("div", {
                        css: Object(o.a)({
                            transition: "opacity .5s, max-height .5s ease .5s",
                            opacity: l && b ? 0 : 1,
                            maxHeight: l && b ? 0 : 100
                        }, "")
                    }, Object(y.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            display: "flex",
                            padding: "6px 0",
                            alignItems: "center"
                        }, m.FROM_TABLET, {
                            padding: "10px 0"
                        }), "")
                    }, Object(y.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            width: 70,
                            height: 50,
                            minWidth: 70
                        }, m.FROM_TABLET, {
                            minWidth: 80,
                            width: 80
                        }), "")
                    }, g && Object(y.b)(j, {
                        onClick: N
                    }), !g && Object(y.b)("img", {
                        src: c,
                        alt: t,
                        css: E
                    })), Object(y.b)(v, {
                        textToDisplay: x,
                        shouldShowDarken: l
                    })))
                }));
            P.displayName = "DeviceItem";
            i.a.createElement;
            var w = i.a.memo((function(e) {
                var t = e.cartId,
                    n = e.planName,
                    r = e.offerType,
                    c = e.isItemVisible,
                    u = e.offerBundleNumber,
                    l = e.shoudShowDeleteAnimation,
                    d = Object(s.useTheme)(),
                    p = d.colors,
                    m = d.bp,
                    g = Object(f.b)(),
                    E = g.isEditModeEnabled,
                    P = g.dispatch,
                    w = i.a.useCallback((function() {
                        return O.a.async((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, O.a.awrap(Object(T.a)(P, t, u, r));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), null, null, null, Promise)
                    }), [P, u, t, r]),
                    I = b[r] || "sim-1";
                return Object(y.b)("div", {
                    css: Object(o.a)({
                        transition: "opacity .5s, max-height .5s ease .5s",
                        opacity: c && l ? 0 : 1,
                        maxHeight: c && l ? 0 : 100
                    }, "")
                }, Object(y.b)("div", {
                    css: Object(o.a)(Object(a.a)({
                        display: "flex",
                        padding: "6px 0",
                        alignItems: "center"
                    }, m.FROM_TABLET, {
                        padding: "10px 0"
                    }), "")
                }, Object(y.b)("div", {
                    css: Object(o.a)(Object(a.a)({
                        width: 70,
                        height: 50,
                        minWidth: 70
                    }, m.FROM_TABLET, {
                        minWidth: 80,
                        width: 80
                    }), "")
                }, E && Object(y.b)(j, {
                    onClick: w
                }), !E && I && Object(y.b)(h.a, {
                    name: I,
                    css: Object(o.a)(Object(a.a)({
                        width: 40,
                        height: 40,
                        marginLeft: 5,
                        fill: p.WHITE,
                        color: p.WHITE
                    }, m.FROM_TABLET, {
                        margin: 0,
                        width: 50,
                        height: 50
                    }), "")
                })), n && Object(y.b)(v, {
                    textToDisplay: n,
                    shouldShowDarken: c
                })))
            }));
            w.displayName = "BundleItem";
            i.a.createElement;
            var I = i.a.memo((function(e) {
                var t = e.cartId,
                    n = e.devices,
                    c = e.planName,
                    u = e.offerType,
                    b = e.processType,
                    m = e.offerBundleCode,
                    O = e.offerBundleNumber,
                    h = e.loyaltyLengthDescription,
                    j = Object(s.useTheme)(),
                    g = j.colors,
                    v = j.bp,
                    E = Object(f.b)().deletedItems,
                    I = i.a.useMemo((function() {
                        return E.includes(t)
                    }), [E, t]),
                    x = i.a.useMemo((function() {
                        return n.some((function(e) {
                            return E.includes(e.cartId)
                        }))
                    }), [E, n]),
                    N = (I || x) && (n.length <= 1 || "FIX1P" === u || "FIX3P" === u),
                    k = 0 === n.length || "FIX3P" === u || "FIX1P" === u || "CONVERGENT4U" === u,
                    C = n.length > 0 && "FIX1P" !== u && "FIX3P" !== u && "CONVERGENT4U" !== u,
                    D = Object(l.a)({
                        height: 500
                    }),
                    S = D.bind,
                    R = D.bounds,
                    F = N ? 0 : R.height + 20,
                    B = d[u],
                    z = p[b];
                return Object(y.b)("li", Object(r.a)({}, S, {
                    title: "Produkty w ramach danej oferty",
                    css: Object(o.a)({
                        overflow: "hidden",
                        maxHeight: F,
                        opacity: N ? 0 : 1,
                        transition: N ? "opacity .5s, max-height .5s ease .5s" : void 0
                    }, "")
                }), Object(y.b)("div", {
                    css: Object(o.a)(Object(a.a)({
                        padding: "20px 0",
                        borderTop: "1px solid ".concat(g.STONE)
                    }, v.FROM_TABLET, {
                        padding: 20
                    }), "")
                }, Object(y.b)("h4", {
                    css: Object(o.a)(Object(a.a)({
                        fontSize: 12,
                        padding: 0,
                        marginBottom: -5,
                        lineHeight: 1,
                        marginLeft: 70,
                        color: N ? g.STONE : g.DOVE
                    }, v.FROM_TABLET, {
                        marginLeft: 80
                    }), "")
                }, B, z && " - ", z && z), k && Object(y.b)(w, {
                    cartId: t,
                    planName: c,
                    offerType: u,
                    offerBundleCode: m,
                    isItemVisible: I,
                    offerBundleNumber: O,
                    shoudShowDeleteAnimation: !N
                }), C && n.map((function(e) {
                    return Object(y.b)(P, Object(r.a)({}, e, {
                        key: e.productCode,
                        shoudShowDeleteAnimation: !N,
                        isItemVisible: E.includes(e.cartId) || I
                    }))
                })), Object(T.k)(h, u) && Object(y.b)("p", {
                    css: Object(o.a)(Object(a.a)({
                        margin: 0,
                        fontSize: 12,
                        marginTop: -5,
                        lineHeight: 1,
                        marginLeft: 70,
                        color: N ? g.STONE : g.WHITE
                    }, v.FROM_TABLET, {
                        fontSize: 14,
                        marginLeft: 80
                    }), "")
                }, h)))
            }));
            I.displayName = "CartEntry";
            var x = n("sGZ7"),
                N = (i.a.createElement, i.a.memo((function() {
                    var e = Object(s.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        c = Object(u.a)(),
                        i = Object(f.b)().cartData,
                        l = Object(x.c)().isNavbarCollapsed,
                        d = i && 0 === i.entries.length;
                    return Object(y.b)(s.CustomScroll, {
                        variant: "DARK",
                        css: Object(o.a)(Object(a.a)({
                            marginTop: 10,
                            marginBottom: 20,
                            maxHeight: c.height - (l ? 50 : 80) - 320
                        }, t.FROM_TABLET, {
                            marginTop: 0,
                            overflowY: "auto",
                            transition: "max-height .1s ease-in",
                            maxHeight: c.height - (l ? 50 : 110) - 380
                        }), "")
                    }, Object(y.b)("div", {
                        css: Object(o.a)(Object(a.a)({}, t.FROM_TABLET, {
                            paddingRight: 20
                        }), "")
                    }, !d && i && Object(y.b)("ul", null, i.entries.map((function(e, t) {
                        return Object(y.b)(I, Object(r.a)({
                            key: "".concat(e.cartId, "-").concat(t)
                        }, e))
                    }))), Object(y.b)("strong", {
                        css: Object(o.a)({
                            color: n.WHITE,
                            display: "block",
                            overflow: "hidden",
                            transition: "opacity .15s",
                            opacity: d ? 1 : 0,
                            maxHeight: d ? 20 : 0
                        }, "")
                    }, "Tw\xf3j koszyk jest pusty")))
                })));
            N.displayName = "ItemsList"
        },
        bVfH: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return m
            })), n.d(t, "e", (function() {
                return O
            })), n.d(t, "g", (function() {
                return h
            })), n.d(t, "d", (function() {
                return y
            })), n.d(t, "c", (function() {
                return j
            })), n.d(t, "b", (function() {
                return g
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

            function d(e, t) {
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
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var b = function(e) {
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
                f = function() {
                    var e;
                    return c.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, c.a.awrap(b({
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
                m = function() {
                    var e;
                    return c.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, c.a.awrap(b({
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
                O = function() {
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
                h = function() {
                    var e, t, n, r, o, i, s, u, l, d;
                    return c.a.async((function(b) {
                        for (;;) switch (b.prev = b.next) {
                            case 0:
                                return b.next = 2, c.a.awrap(Promise.all([f(), O()]));
                            case 2:
                                return e = b.sent, t = Object(a.a)(e, 2), n = t[0], r = t[1], o = r.monthlyCosts, i = r.oneTimeCost, s = r.checkoutCost, u = r.bonuses, l = r.net, d = p({}, n, {
                                    monthlyCosts: o,
                                    oneTimeCost: i,
                                    checkoutCost: s,
                                    bonuses: u,
                                    net: l
                                }), b.abrupt("return", d);
                            case 9:
                            case "end":
                                return b.stop()
                        }
                    }), null, null, null, Promise)
                },
                y = function(e) {
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
                j = function(e, t, n) {
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
                g = function() {
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
                    var t, n, r, a, o, i, d, p, b, f, m, O, h;
                    return c.a.async((function(y) {
                        for (;;) switch (y.prev = y.next) {
                            case 0:
                                return t = e.ratePlanId, n = e.id, r = e.processType, a = e.offerType, o = e.deviceVariant, i = e.market, d = e.availableProductsKey, p = e.bonusesToAdd, b = e.defaultBonusesToIgnore, y.next = 3, c.a.awrap(Object(u.a)());
                            case 3:
                                if (f = y.sent, m = function(e) {
                                        return 400 === e.code || !1 === e.success || !e.success
                                    }, "SALE_OF_GOODS" !== r) {
                                    y.next = 13;
                                    break
                                }
                                return y.next = 8, c.a.awrap(l.a.post("/hapi/sklep/dodaj", s.a.stringify({
                                    productCodePost: o,
                                    bundleTemplateId: n,
                                    bundleNo: 0
                                }), {
                                    headers: {
                                        CSRFToken: f
                                    }
                                }));
                            case 8:
                                if (O = y.sent, !m(O.data) || 400 !== O.data.code) {
                                    y.next = 11;
                                    break
                                }
                                throw new Error(O.data.message);
                            case 11:
                                y.next = 18;
                                break;
                            case 13:
                                return y.next = 15, c.a.awrap(l.a.post("/hapi/koszyk/oovdodaj", s.a.stringify({
                                    rateplanId: t,
                                    propositionId: n,
                                    process: r,
                                    offerType: a,
                                    market: i,
                                    deviceVariant: o,
                                    availableProductsKey: d,
                                    bonusesToAdd: p,
                                    defaultBonusesToIgnore: b
                                }, {
                                    arrayFormat: "brackets"
                                }), {
                                    headers: {
                                        CSRFToken: f
                                    }
                                }));
                            case 15:
                                if (h = y.sent, !m(h.data)) {
                                    y.next = 18;
                                    break
                                }
                                throw new Error(h.data.message);
                            case 18:
                            case "end":
                                return y.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        fPWC: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            })), n.d(t, "b", (function() {
                return u
            }));
            var r = n("fGyu"),
                a = n("zjfJ"),
                o = n("PImS");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = {
                    cartData: null,
                    isError: !1,
                    isLoading: !1,
                    isEditModeEnabled: !1,
                    shouldRefetchPrice: !1,
                    isDeletingEnabled: !0,
                    deletedItems: [],
                    showNetPrices: !1,
                    isB2B: !1
                },
                u = function(e, t) {
                    switch (t.type) {
                        case "setCartData":
                            return i({}, e, {
                                cartData: t.payload
                            });
                        case "setIsEditModeEnabled":
                            return i({}, e, {
                                isEditModeEnabled: t.payload
                            });
                        case "setIsError":
                            return i({}, e, {
                                isError: t.payload
                            });
                        case "setIsLoading":
                            return i({}, e, {
                                isLoading: t.payload
                            });
                        case "setIsDeletingEnabled":
                            return i({}, e, {
                                isDeletingEnabled: t.payload
                            });
                        case "setShouldRefetchPrice":
                            return i({}, e, {
                                shouldRefetchPrice: t.payload
                            });
                        case "clearDeletedItems":
                            return i({}, e, {
                                deletedItems: []
                            });
                        case "addToDeletedItems":
                            return i({}, e, {
                                deletedItems: [].concat(Object(r.a)(e.deletedItems), [t.payload])
                            });
                        case "setShowNetPrices":
                            return i({}, e, {
                                showNetPrices: t.payload
                            });
                        case "deleteBundle":
                            return e.cartData ? i({}, e, {
                                cartData: i({}, e.cartData, {
                                    offerCount: e.cartData.offerCount - 1,
                                    entries: e.cartData.entries.filter((function(e) {
                                        return e.cartId !== t.payload
                                    }))
                                })
                            }) : e;
                        case "deleteDevice":
                            return e.cartData ? i({}, e, {
                                cartData: i({}, e.cartData, {
                                    offerCount: e.cartData.offerCount - 1,
                                    entries: Object(o.j)(e.cartData.entries, t.payload)
                                })
                            }) : e;
                        default:
                            return e
                    }
                }
        },
        g5od: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            var r = n("zjfJ"),
                a = n("5IAQ"),
                o = n("KD1n"),
                c = n("ERkP"),
                i = n.n(c),
                s = n("l1C2"),
                u = n("Kq2c"),
                l = n("IdR4"),
                d = n("ptpn"),
                p = n("xWEo"),
                b = n("PImS"),
                f = n("xFjn");
            i.a.createElement;

            function m() {
                var e = Object(o.a)(["\n    0% {\n      opacity: 0;\n    }\n    20% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n    }\n"]);
                return m = function() {
                    return e
                }, e
            }
            var O = i.a.memo((function() {
                var e = Object(u.useTheme)(),
                    t = e.colors,
                    n = e.bp,
                    o = Object(f.b)(),
                    c = o.cartData,
                    O = o.shouldRefetchPrice,
                    h = o.deletedItems,
                    y = o.showNetPrices,
                    j = o.isB2B,
                    g = !h.length,
                    v = O || !g,
                    T = c ? y ? c.netPayments : c.grossPayments : null,
                    E = i.a.useCallback((function() {
                        Object(d.a)({
                            prefix: "sufler-"
                        })
                    }), []),
                    P = i.a.useMemo((function() {
                        return T ? T.all.map((function(e) {
                            return e.monthFrom === e.monthTo ? 0 === e.monthFrom ? {
                                price: "".concat(Object(l.a)(e.price), " z\u0142. ").concat(y ? " + VAT" : ""),
                                text: "Op\u0142ata jednorazowa na start"
                            } : {
                                price: "".concat(Object(l.a)(e.price), " z\u0142/mies. ").concat(y ? " + VAT" : ""),
                                text: "Op\u0142aty w ".concat(e.monthFrom, " miesi\u0105cu")
                            } : {
                                price: "".concat(Object(l.a)(e.price), " z\u0142/mies. ").concat(y ? " + VAT" : ""),
                                text: "Op\u0142aty od ".concat(e.monthFrom, " do ").concat(e.monthTo, " miesi\u0105ca")
                            }
                        })) : []
                    }), [T, y]),
                    w = Object(s.c)(m());
                return c && 0 !== c.entries.length ? Object(s.b)("div", {
                    css: Object(a.a)(Object(r.a)({}, n.FROM_TABLET, {
                        paddingRight: 20
                    }), "")
                }, Object(s.b)("ul", {
                    css: Object(a.a)({
                        overflow: "hidden",
                        transition: "max-height .4s",
                        maxHeight: v ? 0 : 25 * P.length,
                        li: {
                            display: "flex",
                            color: t.WHITE
                        },
                        p: {
                            margin: 0,
                            fontSize: 14,
                            display: "inline-block"
                        },
                        strong: {
                            fontSize: 14,
                            marginLeft: "auto"
                        }
                    }, "")
                }, P.map((function(e, t) {
                    return Object(s.b)("li", {
                        key: "P_STEP-".concat(t),
                        css: Object(a.a)({
                            opacity: v ? 0 : 1,
                            transform: v ? "translateY(15px)" : "translateY(0px)",
                            transition: v ? "opacity .25s, transform 0s ease 1s" : "opacity .2s ease .".concat(1 * t, "s, transform .2s ease .").concat(1 * t, "s")
                        }, "")
                    }, Object(s.b)("p", null, e.text), Object(s.b)("strong", null, e.price))
                }))), Object(s.b)("strong", {
                    css: Object(a.a)({
                        fontSize: 18,
                        display: "block",
                        color: t.WHITE,
                        opacity: g ? 0 : 1,
                        maxHeight: g ? 0 : 20,
                        transition: "opacity .2s ease 1s, max-height .2s",
                        span: {
                            animation: "".concat(w, " 1.2s ease infinite"),
                            ":nth-of-type(2)": {
                                animationDelay: ".2s"
                            },
                            ":nth-of-type(3)": {
                                animationDelay: ".4s"
                            }
                        }
                    }, "")
                }, "Przeliczanie", Object(s.b)("span", null, "."), Object(s.b)("span", null, "."), Object(s.b)("span", null, ".")), !j && Object(s.b)("div", {
                    css: Object(a.a)(Object(r.a)({
                        display: "flex",
                        color: t.WHITE,
                        paddingTop: 15,
                        borderTop: "1px solid ".concat(t.STONE),
                        marginTop: 10,
                        opacity: v ? 0 : 1,
                        transition: v ? "opacity .3s ease .3s" : "opacity .5s ease .".concat(1 * P.length, "s")
                    }, n.FROM_TABLET, {
                        padding: "20px 0 10px"
                    }), "")
                }, Object(s.b)(p.a, {
                    name: "info-icon",
                    color: t.WHITE,
                    css: Object(a.a)(Object(r.a)({
                        width: 14,
                        height: 14,
                        flexShrink: 0,
                        marginRight: 10
                    }, n.FROM_TABLET, {
                        width: 16,
                        height: 16,
                        marginRight: 15
                    }), "")
                }), Object(s.b)("p", {
                    css: Object(a.a)(Object(r.a)({
                        fontSize: 12,
                        lineHeight: "13px",
                        margin: 0
                    }, n.FROM_TABLET, {
                        fontSize: 14,
                        lineHeight: "16px"
                    }), "")
                }, "Kwota abonamentu uwzgl\u0119dnia rabat:", Object(b.c)(c.bonusesInfo.join(", ")))), Object(s.b)(u.ButtonLink, {
                    href: "/koszyk/multi",
                    onClick: E,
                    css: Object(a.a)(Object(r.a)({
                        marginTop: 15,
                        width: "100%",
                        opacity: v ? 0 : 1,
                        transition: v ? "opacity .3s ease .3s" : "opacity .5s ease .".concat(1 * P.length, "s")
                    }, n.ONLY_TABLET, {
                        marginTop: 20
                    }), "")
                }, "Poka\u017c pe\u0142ny koszyk")) : null
            }));
            O.displayName = "Summary"
        },
        kN39: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return "B2C" !== e
            }
        },
        v4L6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var r = n("VtSi"),
                a = n.n(r),
                o = n("qnbr"),
                c = function() {
                    var e, t;
                    return a.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, a.a.awrap(Object(o.a)("hapi/pwa/v1/offerSelector/getToken"));
                            case 2:
                                return e = n.sent, n.next = 5, a.a.awrap(e.json());
                            case 5:
                                return t = n.sent, n.abrupt("return", t);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        xFjn: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return p
            }));
            var r = n("cxan"),
                a = n("zjfJ"),
                o = n("HbGN"),
                c = n("ERkP"),
                i = n.n(c),
                s = n("l1C2");
            i.a.createElement;

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
            var l = i.a.createContext(null),
                d = i.a.memo((function(e) {
                    var t = e.value,
                        n = Object(o.a)(e, ["value"]),
                        c = i.a.useMemo((function() {
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                                        Object(a.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, t)
                        }), [t]);
                    return Object(s.b)(l.Provider, Object(r.a)({
                        value: c
                    }, n))
                })),
                p = function() {
                    var e = i.a.useContext(l);
                    if (null === e) throw Error("useCartContext: Please provide CartProvider value.");
                    return e
                }
        }
    }
]);
//# sourceMappingURL=header.cart.bb9056578fa119b34389.js.map