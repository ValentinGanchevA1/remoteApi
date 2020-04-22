(window.omniJsonp = window.omniJsonp || []).push([
    [50], {
        "48NU": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var a = n("cxan"),
                r = n("5IAQ"),
                i = n("zjfJ"),
                c = n("HbGN"),
                o = n("ERkP"),
                s = n.n(o),
                l = n("xWEo"),
                b = n("I6rk"),
                u = n("Kq2c"),
                d = n("y6sE"),
                O = n("l1C2");
            s.a.createElement;

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = {
                    name: "1r2f04i",
                    styles: "margin-bottom:10px;"
                },
                f = {
                    name: "w7p5zd",
                    styles: "float:right;width:12px;height:12px;"
                },
                g = s.a.memo((function(e) {
                    var t, n = e.content,
                        o = Object(c.a)(e, ["content"]),
                        m = Object(u.useTheme)().bp,
                        g = Object(b.a)(),
                        h = Object(d.b)().hasTouch,
                        y = s.a.useCallback((function(e) {
                            var t = e.close;
                            return Object(O.b)(s.a.Fragment, null, Object(O.b)("div", {
                                css: j
                            }, Object(O.b)(l.a, {
                                name: "close",
                                role: "button",
                                onClick: t,
                                css: f
                            })), n)
                        }), [n]);
                    return Object(O.b)(u.Tooltip, Object(a.a)({
                        content: h ? y : n,
                        withPointer: !h,
                        sides: h ? ["TOP", "BOTTOM"] : void 0,
                        trigger: h ? "CLICK" : "HOVER",
                        interceptPosition: function(e) {
                            return g ? {
                                side: e.side,
                                position: p({}, e.position, {
                                    left: 20,
                                    right: 20
                                })
                            } : e
                        },
                        safeSpace: g ? {
                            top: 80,
                            bottom: 50
                        } : {
                            top: 110
                        },
                        css: Object(r.a)((t = {
                            width: "auto"
                        }, Object(i.a)(t, m.ONLY_MOBILE, {
                            left: 20,
                            right: 20
                        }), Object(i.a)(t, m.FROM_TABLET, {
                            width: 280
                        }), t), "")
                    }, o))
                }))
        },
        "5FZF": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var a = {
                    M: 0,
                    B: 1,
                    N: 2,
                    D: 3
                },
                r = {
                    0: ["zero", "zerowy", "zerowym", "zerowego"],
                    1: ["jeden", "pierwszy", "pierwszym", "pierwszego"],
                    2: ["dwa", "drugi", "drugim", "drugiego"],
                    3: ["trzy", "trzeci", "trzecim", "trzeciego"],
                    4: ["cztery", "czwarty", "czwartym", "czwartego"],
                    5: ["pi\u0119\u0107", "pi\u0105ty", "pi\u0105tym", "pi\u0105tego"],
                    6: ["sze\u015b\u0107", "sz\xf3sty", "sz\xf3stym", "sz\xf3stego"],
                    7: ["siedem", "si\xf3dmy", "si\xf3dmym", "si\xf3dmego"],
                    8: ["osiem", "\xf3smy", "\xf3smym", "\xf3smego"],
                    9: ["dziewi\u0119\u0107", "dziewi\u0105ty", "dziewi\u0105tym", "dziewi\u0105tego"],
                    10: ["dziesi\u0119\u0107", "dziesi\u0105ty", "dziesi\u0105tym", "dziesi\u0105tego"],
                    11: ["jedena\u015bcie", "jedenasty", "jedenastym", "jedenastego"],
                    12: ["dwana\u015bcie", "dwunasty", "dwunastym", "dwunastego"],
                    24: ["dwadzie\u015bcia cztery", "dwudziesty czwarty", "dwudziestym czwartym", "dwudziestego czwartego"]
                },
                i = function(e, t) {
                    return (r[e] || [])[a[t]] || ""
                }
        },
        "BVF/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return x
            }));
            var a = n("cxan"),
                r = n("5IAQ"),
                i = n("zygG"),
                c = n("HbGN"),
                o = n("ERkP"),
                s = n.n(o),
                l = null,
                b = null,
                u = null,
                d = function(e) {
                    e.preventDefault()
                },
                O = function(e) {
                    s.a.useEffect((function() {
                        e ? (l = window.getComputedStyle(document.body).overflow, b = window.getComputedStyle(document.documentElement).overflow, u = window.getComputedStyle(document.body).height, document.body.style.overflow = "hidden", document.documentElement.style.overflow = "initial", document.body.style.height = "100vh", document.body.addEventListener("touchmove", d, {
                            passive: !1
                        })) : (document.body.style.overflow = l || "", document.documentElement.style.overflow = b || "", document.body.style.height = u || "", l = null, b = null, u = null, document.body.removeEventListener("touchmove", d))
                    }), [e])
                },
                m = n("Kq2c"),
                p = n("l1C2"),
                j = (s.a.createElement, function(e) {
                    var t = e.shouldShow,
                        n = e.onClick,
                        a = Object(m.useTheme)().zIndex;
                    return O(t), Object(p.b)("div", {
                        role: "button",
                        "aria-label": "Zamknij warstw\u0119",
                        onClick: n,
                        css: Object(r.a)({
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            position: "fixed",
                            zIndex: a.LAYER_1,
                            opacity: t ? 1 : 0,
                            height: t ? "100vh" : 0,
                            backgroundColor: "rgba(0,0,0, .2)",
                            visibility: t ? "visible" : "hidden",
                            transition: "visibility 0s linear ".concat(t ? "0s" : ".15s", ", opacity .15s")
                        }, "")
                    })
                }),
                f = n("xWEo"),
                g = (s.a.createElement, s.a.createContext(null)),
                h = function(e) {
                    var t = e.isExpandable,
                        n = e.isExpanded,
                        r = Object(c.a)(e, ["isExpandable", "isExpanded"]);
                    return Object(p.b)(g.Provider, Object(a.a)({
                        value: {
                            isExpandable: t,
                            isExpanded: n
                        }
                    }, r))
                },
                y = function() {
                    var e = s.a.useContext(g);
                    if (null === e) throw Error("useFloaterContext: Please provide FloaterContextProvider value.");
                    return e
                };
            s.a.createElement;
            var v = {
                    name: "u111ks",
                    styles: "display:flex;align-items:center;font-weight:bold;justify-content:space-between;"
                },
                E = n("BNVM"),
                x = (s.a.createElement, s.a.createElement, {
                    Wrapper: function(e) {
                        var t = e.isExpandable,
                            n = void 0 !== t && t,
                            o = e.shouldBeVisible,
                            l = void 0 === o || o,
                            b = e.defaultExpanded,
                            u = void 0 !== b && b,
                            d = e.position,
                            O = void 0 === d ? "fixed" : d,
                            f = e.top,
                            g = e.innerCss,
                            y = e.children,
                            v = Object(c.a)(e, ["isExpandable", "shouldBeVisible", "defaultExpanded", "position", "top", "innerCss", "children"]),
                            E = Object(m.useTheme)(),
                            x = E.colors,
                            T = E.zIndex,
                            w = s.a.useState(u),
                            R = Object(i.a)(w, 2),
                            k = R[0],
                            C = R[1],
                            L = "sticky" === O,
                            A = "fixed" === O;
                        return Object(p.b)(h, {
                            top: f,
                            isExpandable: n,
                            isExpanded: k
                        }, n && Object(p.b)(j, {
                            shouldShow: k,
                            onClick: function() {
                                C(!1)
                            }
                        }), Object(p.b)("div", Object(a.a)({
                            style: {
                                position: L ? "sticky" : "absolute"
                            },
                            css: Object(r.a)([L && {
                                top: f,
                                willChange: "top",
                                transition: "top .15s",
                                zIndex: T.LAYER_3
                            }], "")
                        }, v), Object(p.b)("div", {
                            role: "button",
                            "aria-expanded": k,
                            onClick: n ? function() {
                                C(!k)
                            } : void 0,
                            style: {
                                opacity: l ? 1 : 0,
                                top: A ? f : void 0,
                                position: A ? "fixed" : "static",
                                visibility: l ? "visible" : "hidden"
                            },
                            css: Object(r.a)([{
                                left: 10,
                                right: 10,
                                padding: 10,
                                borderRadius: 4,
                                zIndex: T.LAYER_3,
                                backgroundColor: x.WHITE,
                                boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.2)",
                                transition: "visibility 0s linear ".concat(l ? "0s" : ".15s", ", opacity .15s, top .15s")
                            }, g], "")
                        }, y)))
                    },
                    Header: function(e) {
                        var t = e.children,
                            n = Object(c.a)(e, ["children"]),
                            i = y(),
                            o = i.isExpandable,
                            s = i.isExpanded;
                        return Object(p.b)("div", Object(a.a)({
                            css: v
                        }, n), t, o && Object(p.b)(f.a, {
                            name: "arrow-down",
                            css: Object(r.a)({
                                transition: "transform .1s",
                                transform: "rotate(".concat(s ? "180" : "0", "deg)")
                            }, "")
                        }))
                    },
                    Content: function(e) {
                        var t = y().isExpanded,
                            n = Object(E.a)().bind,
                            i = n.ref.current,
                            c = t && i ? i.scrollHeight : 0;
                        return Object(p.b)("div", Object(a.a)({}, n, {
                            css: Object(r.a)({
                                maxHeight: c,
                                overflow: "hidden",
                                transition: "max-height .15s",
                                visibility: t ? "visible" : "hidden"
                            }, "")
                        }, e))
                    }
                })
        },
        "D2/y": function(e, t, n) {
            "use strict";

            function a(e) {
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                        }(e))) {
                        var t = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i, c = !0,
                    o = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        o = !0, i = e
                    },
                    f: function() {
                        try {
                            c || null == a.return || a.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            n.d(t, "a", (function() {
                return i
            }));
            var i = function(e, t) {
                var n, r = [],
                    i = new Map,
                    c = a(e);
                try {
                    for (c.s(); !(n = c.n()).done;) {
                        var o = n.value;
                        i.has(o[t]) || (i.set(o[t], !0), r.push(o))
                    }
                } catch (s) {
                    c.e(s)
                } finally {
                    c.f()
                }
                return r
            }
        },
        YYwr: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("5FZF"),
                r = function(e) {
                    return e.monthFrom === e.monthTo ? 0 === e.monthFrom ? {
                        price: e.price,
                        text: "op\u0142ata na start"
                    } : {
                        price: e.price,
                        text: "w ".concat(Object(a.a)(e.monthFrom, "N"), " miesi\u0105cu")
                    } : e.monthTo ? {
                        price: e.price,
                        text: "do ".concat(Object(a.a)(e.monthTo, "D"), " miesi\u0105ca")
                    } : {
                        price: e.price,
                        text: ""
                    }
                }
        },
        hL13: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "PackagesStep", (function() {
                return ct
            }));
            var a = n("zjfJ"),
                r = n("5IAQ"),
                i = n("ERkP"),
                c = n.n(i),
                o = n("Kq2c"),
                s = n("I6rk"),
                l = n("xWEo"),
                b = n("Uqp9"),
                u = n("cxan"),
                d = n("7cvH"),
                O = n("HbGN"),
                m = n("KcfE"),
                p = function(e) {
                    return e.tvChannelList
                },
                j = n("e312"),
                f = n("l1C2");
            c.a.createElement;
            var g = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                h = {
                    name: "1flyc9m",
                    styles: "font-size:18px;"
                },
                y = {
                    name: "18njo8i",
                    styles: "transition:transform .15s;"
                },
                v = c.a.memo((function(e) {
                    var t, n, i = e.name,
                        s = e.tvPackageList,
                        b = e.isActive,
                        v = Object(O.a)(e, ["name", "tvPackageList", "isActive"]),
                        E = Object(o.useTheme)(),
                        x = E.colors,
                        T = E.selectors,
                        w = E.bp,
                        R = Object(d.b)().send,
                        k = c.a.useMemo((function() {
                            return s.filter(j.a).map(p).flat()
                        }), [s]).length,
                        C = c.a.useCallback((function() {
                            R({
                                type: "SELECT_PROPOSITION",
                                proposition: {
                                    name: i,
                                    tvPackageList: s
                                }
                            })
                        }), [R, i, s]);
                    return Object(f.b)("li", Object(u.a)({
                        onClick: C,
                        css: Object(r.a)((n = {
                            display: "flex",
                            cursor: "pointer",
                            alignItems: "center",
                            transition: "color .15s",
                            color: b ? x.ORANGE_LIGHT : x.WHITE,
                            ":not(:first-of-type)": {
                                paddingTop: 10
                            },
                            ":not(:last-of-type)": {
                                borderBottom: "1px solid ".concat(x.STONE),
                                paddingBottom: 10
                            }
                        }, Object(a.a)(n, T.ON_FOCUS_OR_HOVER, (t = {
                            color: x.ORANGE_DARK
                        }, Object(a.a)(t, w.ONLY_MOBILE, {
                            color: x.ORANGE_LIGHT
                        }), Object(a.a)(t, "svg", {
                            transform: "scale(1.2)"
                        }), t)), Object(a.a)(n, w.FROM_TABLET, {
                            color: b ? x.ORANGE_DARK : x.BLACK,
                            ":not(:last-of-type)": {
                                borderColor: x.CHROME
                            }
                        }), n), "")
                    }, v), Object(f.b)("div", {
                        css: g
                    }, Object(f.b)("h4", {
                        css: h
                    }, i), Object(f.b)("p", {
                        css: Object(r.a)(Object(a.a)({
                            fontSize: 14,
                            padding: 0,
                            margin: "5px 0 0",
                            fontWeight: "bold",
                            color: x.ASH
                        }, w.FROM_TABLET, {
                            color: x.SILVER
                        }), "")
                    }, k, " ", Object(m.a)(["kana\u0142", "kana\u0142y", "kana\u0142\xf3w"], k))), Object(f.b)(l.a, {
                        name: "arrow-right",
                        width: 18,
                        height: 18,
                        css: y
                    }))
                }));
            v.displayName = "SingleProposition";
            var E = n("YYwr"),
                x = function(e) {
                    return {
                        price: parseFloat(e.price),
                        monthTo: e.monthTo,
                        monthFrom: e.monthFrom,
                        currency: e.currency
                    }
                },
                T = function(e) {
                    return function(e, t) {
                        switch (t) {
                            case "first":
                                return e.slice(0, 1);
                            case "last":
                                return e.slice(-1);
                            default:
                                return e
                        }
                    }(e, "all").map(x).map(E.a)
                },
                w = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.payments,
                        n = (e.present, Object(O.a)(e, ["payments", "present"])),
                        i = Object(o.useTheme)(),
                        c = i.bp,
                        s = i.colors,
                        l = T(t),
                        b = 1 === l.length && 0 === l[0].price;
                    return Object(f.b)("div", n, b ? Object(f.b)("strong", null, "w cenie internetu") : l.map((function(e, t) {
                        return Object(f.b)("div", {
                            key: "PriceStep_".concat(e.price, "_").concat(t),
                            css: Object(r.a)(Object(a.a)({
                                fontSize: 14,
                                color: s.WHITE
                            }, c.FROM_TABLET, {
                                color: s.BLACK
                            }), "")
                        }, Object(f.b)("strong", null, e.price, " z\u0142/mies."))
                    })))
                })));
            w.displayName = "PriceSteps";
            c.a.createElement;
            var R = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                k = {
                    name: "odz94x",
                    styles: "margin-top:5px;"
                },
                C = {
                    name: "odz94x",
                    styles: "margin-top:5px;"
                },
                L = c.a.memo((function(e) {
                    var t = e.id,
                        n = e.title,
                        i = e.detailsDescription,
                        s = e.isActive,
                        b = e.tvChannelList,
                        u = e.paymentDescriptions,
                        O = Object(o.useTheme)(),
                        p = O.colors,
                        j = O.selectors,
                        g = O.bp,
                        h = Object(d.b)(),
                        y = h.send,
                        v = h.current.context.currentOffer,
                        E = c.a.useCallback((function() {
                            y({
                                type: "TOGGLE_PACKAGE",
                                id: t
                            })
                        }), [y, t]),
                        x = T(u.monthlyPayments);
                    return 1 === x.length && 0 === x[0].price && "CONVERGENT4U" === (null === v || void 0 === v ? void 0 : v.offerType) ? null : Object(f.b)("li", {
                        onClick: E,
                        css: Object(r.a)(Object(a.a)({
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            willChange: "color, border-color",
                            transition: "color .15s, border-color .15s",
                            position: "relative",
                            borderRadius: 4,
                            padding: 15,
                            border: "2px solid transparent",
                            borderColor: s ? p.ORANGE_LIGHT : p.CHROME,
                            ":not(:first-of-type)": {
                                marginTop: 10
                            },
                            ":not(:last-of-type)": {
                                marginBottom: 10
                            }
                        }, j.ON_FOCUS_OR_HOVER, {
                            borderColor: p.ORANGE_LIGHT
                        }), "")
                    }, Object(f.b)("div", {
                        css: Object(r.a)({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: s ? 30 : 0,
                            height: s ? 30 : 0,
                            opacity: s ? 1 : 0,
                            transition: "all .15s",
                            willChange: "width, height, opacity",
                            background: "linear-gradient(135deg, ".concat(p.ORANGE_LIGHT, " 50%, transparent 50%)")
                        }, "")
                    }, Object(f.b)(l.a, {
                        name: "check-mark",
                        color: p.WHITE
                    })), Object(f.b)("div", {
                        css: R
                    }, Object(f.b)("h4", {
                        css: Object(r.a)(Object(a.a)({
                            fontSize: 18,
                            transition: "color .15s",
                            color: s ? p.ORANGE_LIGHT : p.WHITE
                        }, g.FROM_TABLET, {
                            color: s ? p.ORANGE_DARK : p.BLACK
                        }), "")
                    }, n), i && Object(f.b)("div", {
                        css: Object(r.a)(Object(a.a)({
                            fontSize: 12,
                            marginTop: 5,
                            marginBottom: 15,
                            color: p.WHITE
                        }, g.FROM_TABLET, {
                            fontSize: 14,
                            color: p.BLACK
                        }), "")
                    }, i), Object(f.b)(w, {
                        payments: u.monthlyPayments,
                        css: k
                    }), Object(f.b)("div", {
                        css: C
                    }, Object(f.b)("strong", {
                        css: Object(r.a)(Object(a.a)({
                            fontSize: 14,
                            transition: "color .15s",
                            color: p.WHITE
                        }, g.FROM_TABLET, {
                            color: p.SILVER
                        }), "")
                    }, b.length, " ", Object(m.a)(["kana\u0142", "kana\u0142y", "kana\u0142\xf3w"], b.length)))))
                }));
            L.displayName = "SinglePackage";
            c.a.createElement;
            var A = c.a.memo((function(e) {
                var t = Object(d.b)().current.context,
                    n = t.currentProposition,
                    a = t.selectedPackagesIds,
                    r = null === n || void 0 === n ? void 0 : n.tvPackageList;
                return r ? Object(f.b)("ul", e, r.map((function(e) {
                    return Object(f.b)(L, Object(u.a)({}, e, {
                        key: e.id,
                        isActive: a.includes(e.id)
                    }))
                }))) : null
            }));
            A.displayName = "Packages";
            c.a.createElement;
            var S = c.a.memo((function(e) {
                return Object(f.b)(o.CustomScroll, e, Object(f.b)(I, null), Object(f.b)(_, null))
            }));
            S.displayName = "Content";
            var _ = c.a.memo((function() {
                var e = Object(o.useTheme)().colors,
                    t = Object(d.b)().current.context.allPropositions,
                    n = t && t.length > 1;
                return Object(f.b)("div", null, n && Object(f.b)("h4", {
                    css: Object(r.a)({
                        fontSize: 12,
                        margin: "0 0 10px 0",
                        color: e.ORANGE_DARK
                    }, "")
                }, "Pakiety mo\u017cliwe do dokupienia"), Object(f.b)(A, null))
            }));
            _.displayName = "Packages";
            var I = c.a.memo((function() {
                var e = Object(o.useTheme)(),
                    t = e.colors,
                    n = e.bp,
                    i = Object(d.b)().current.context,
                    c = i.allPropositions,
                    s = i.currentOffer,
                    l = i.currentProposition,
                    b = "CONVERGENT4U" === (null === s || void 0 === s ? void 0 : s.offerType);
                return !c || c.length < 2 || !l ? null : Object(f.b)("div", {
                    css: Object(r.a)(Object(a.a)({
                        marginBottom: 15
                    }, n.FROM_TABLET, {
                        marginBottom: 30
                    }), "")
                }, b && Object(f.b)("h4", {
                    css: Object(r.a)({
                        fontSize: 12,
                        margin: "0 0 10px 0",
                        color: t.ORANGE_DARK
                    }, "")
                }, "Pakiety Love"), Object(f.b)("ul", null, c.map((function(e) {
                    return Object(f.b)(v, Object(u.a)({}, e, {
                        key: e.name,
                        isActive: l.name === e.name
                    }))
                }))))
            }));
            I.displayName = "Propositions";
            c.a.createElement;
            var z = Array(3).fill(0),
                P = Array(2).fill(0),
                N = function(e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e
                },
                M = function(e) {
                    var t = Object(o.useTheme)().colors;
                    return Object(f.b)("div", Object(u.a)({
                        title: "Prosz\u0119 czeka\u0107"
                    }, e), Object(f.b)("div", {
                        css: Object(r.a)({
                            height: 15,
                            marginBottom: 15,
                            backgroundColor: t.STARDUST,
                            width: N(80, 100)
                        }, "")
                    }), Object(f.b)("ul", null, z.map((function(e, t) {
                        return Object(f.b)(G, {
                            key: "TVPackage_Placeholder_".concat(t)
                        })
                    }))), Object(f.b)("div", {
                        css: Object(r.a)({
                            height: 15,
                            marginTop: 30,
                            marginBottom: 10,
                            backgroundColor: t.STARDUST,
                            width: N(120, 140)
                        }, "")
                    }), Object(f.b)("ul", null, P.map((function(e, t) {
                        return Object(f.b)(D, {
                            key: "TVPackage_Placeholder_".concat(t)
                        })
                    }))))
                },
                B = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                D = function() {
                    var e = Object(o.useTheme)().colors;
                    return Object(f.b)("li", {
                        css: Object(r.a)({
                            display: "flex",
                            alignItems: "center",
                            borderRadius: 4,
                            padding: 15,
                            border: "1px solid ".concat(e.STARDUST),
                            ":not(:first-of-type)": {
                                marginTop: 10
                            },
                            ":not(:last-of-type)": {
                                borderBottom: "1px solid ".concat(e.PEARL),
                                marginBottom: 10
                            }
                        }, "")
                    }, Object(f.b)("div", {
                        css: B
                    }, Object(f.b)("div", {
                        css: Object(r.a)({
                            height: 25,
                            backgroundColor: e.STARDUST,
                            width: N(100, 200)
                        }, "")
                    }), Object(f.b)("div", {
                        css: Object(r.a)({
                            height: 20,
                            marginTop: 5,
                            backgroundColor: e.STARDUST,
                            width: N(80, 120)
                        }, "")
                    }), Object(f.b)("div", {
                        css: Object(r.a)({
                            height: 10,
                            marginTop: 10,
                            backgroundColor: e.STARDUST,
                            width: N(70, 80)
                        }, "")
                    })))
                },
                F = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                G = function() {
                    var e = Object(o.useTheme)().colors;
                    return Object(f.b)("li", {
                        css: Object(r.a)({
                            display: "flex",
                            alignItems: "center",
                            ":not(:first-of-type)": {
                                paddingTop: 10
                            },
                            ":not(:last-of-type)": {
                                borderBottom: "1px solid ".concat(e.PEARL),
                                paddingBottom: 10
                            }
                        }, "")
                    }, Object(f.b)("div", {
                        css: F
                    }, Object(f.b)("div", {
                        css: Object(r.a)({
                            height: 25,
                            backgroundColor: e.STARDUST,
                            width: N(100, 200)
                        }, "")
                    }), Object(f.b)("div", {
                        css: Object(r.a)({
                            height: 10,
                            marginTop: 10,
                            backgroundColor: e.STARDUST,
                            width: N(70, 80)
                        }, "")
                    })), Object(f.b)(l.a, {
                        name: "arrow-right",
                        css: Object(r.a)({
                            width: 18,
                            height: 18,
                            color: e.PEARL
                        }, "")
                    }))
                },
                H = (c.a.createElement, function(e) {
                    return Object(d.b)().current.context.allPropositions ? Object(f.b)(S, e) : Object(f.b)(M, e)
                }),
                W = n("Hkyy");
            c.a.createElement;
            var K = {
                    name: "8atqhb",
                    styles: "width:100%;"
                },
                U = function(e) {
                    var t = Object(o.useTheme)().colors,
                        n = Object(d.b)(),
                        a = n.send,
                        r = n.current.context.searchQuery;
                    return Object(f.b)("div", Object(u.a)({
                        css: K
                    }, e), Object(f.b)(W.a, {
                        type: "text",
                        value: r,
                        onChange: function(e) {
                            a({
                                type: "SET_SEARCH_QUERY",
                                searchQuery: e.target.value
                            })
                        },
                        name: "Wyszukaj kana\u0142",
                        placeholder: "Wyszukaj kana\u0142",
                        suffix: Object(f.b)(l.a, {
                            name: "search",
                            width: 18,
                            height: 18,
                            color: t.SILVER
                        })
                    }))
                },
                V = n("zygG"),
                q = n("RN2F"),
                Y = n.n(q),
                Z = n("5siB"),
                X = n.n(Z),
                Q = n("t5YO");
            var J = n("D2/y"),
                $ = function(e) {
                    for (var t = e.currentProposition, n = e.selectedPackagesIds, a = [], r = function(e) {
                            var r = null === t || void 0 === t ? void 0 : t.tvPackageList.find((function(t) {
                                return t.id === n[e]
                            }));
                            r && a.push(r)
                        }, i = 0; i < n.length; i++) r(i);
                    a.reverse();
                    var c = a.map(p).flat() || [];
                    return Object(J.a)(c, "name")
                },
                ee = n("aNTW"),
                te = n("XTXV"),
                ne = (c.a.createElement, function(e) {
                    var t = e.backgroundColor,
                        n = Object(O.a)(e, ["backgroundColor"]),
                        a = Object(o.useTheme)().colors;
                    return Object(f.b)("div", Object(u.a)({}, n, {
                        css: Object(r.a)({
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: a[t]
                        }, "")
                    }))
                }),
                ae = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.alt,
                        n = e.src,
                        a = Object(O.a)(e, ["alt", "src"]);
                    return Object(f.b)("img", Object(u.a)({
                        alt: t,
                        src: n
                    }, a))
                })));
            ae.displayName = "Image";
            var re = n("obcW"),
                ie = n("Zx7g"),
                ce = function(e) {
                    return function(t, n) {
                        return t % (n ? 5 : 4) === e - 1
                    }
                };
            c.a.createElement;
            var oe = ce(1),
                se = ce(2),
                le = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                be = {
                    name: "70qvj9",
                    styles: "display:flex;align-items:center;"
                },
                ue = {
                    name: "hffq0x",
                    styles: "font-size:18px;margin-left:10px;line-height:18px;"
                },
                de = {
                    name: "eg0ix8",
                    styles: "margin:0;margin-top:20px;font-size:14px;font-weight:bold;"
                },
                Oe = c.a.memo((function(e) {
                    var t = e.index,
                        n = e.image,
                        i = e.title,
                        l = e.scroll,
                        b = e.close,
                        u = e.description,
                        d = e.channelsCount,
                        O = e.parentElementRef,
                        m = Object(s.a)(),
                        p = Object(o.useTheme)(),
                        j = p.colors,
                        g = p.selectors,
                        h = p.bp,
                        y = c.a.useRef(null),
                        v = c.a.useState(null),
                        E = Object(V.a)(v, 2),
                        x = E[0],
                        T = E[1],
                        w = m ? -135.5 : -125,
                        R = m ? -45.5 : -1,
                        k = oe(t, m) ? w : se(t, m) ? R : -1,
                        C = function(e, t, n) {
                            var a = n ? 5 : 4;
                            return e > a && e - a <= t
                        }(d, t, m),
                        L = Object(s.b)({
                            maxWidth: 1239.5
                        });
                    Object(ie.a)(y, (function() {
                        b()
                    }));
                    var A = c.a.useCallback((function(e) {
                        e.stopPropagation(), b()
                    }), [b]);
                    return c.a.useEffect((function() {
                        if (O.current) {
                            var e, t, n = O.current.getBoundingClientRect(),
                                a = n.x || n.left || 0,
                                r = null === (e = O.current.parentElement) || void 0 === e ? void 0 : null === (t = e.parentElement) || void 0 === t ? void 0 : t.parentElement,
                                i = (null === r || void 0 === r ? void 0 : r.clientWidth) || 0;
                            if (m && T(a - 20), !m) {
                                a > i + (L ? 100 : 250) ? l(200) : a < i - 250 && l(-100), T(C ? 125 : 0)
                            }
                        }
                    }), [t, m, l, O, d, C, L]), null === x ? null : Object(f.b)("div", {
                        ref: y,
                        css: Object(r.a)(Object(a.a)({
                            bottom: k,
                            padding: 20,
                            left: -x,
                            height: 215,
                            cursor: "auto",
                            position: "absolute",
                            color: j.WHITE,
                            backgroundColor: j.BLACK,
                            width: "calc(100vw - ".concat(40, "px - 1px)")
                        }, h.FROM_TABLET, {
                            width: 240,
                            height: 240
                        }), "")
                    }, Object(f.b)("div", {
                        css: le
                    }, Object(f.b)(o.IconButton, {
                        iconName: "close",
                        width: 12,
                        height: 12,
                        color: j.WHITE,
                        title: "Zamknij szczeg\xf3\u0142y",
                        onClick: A,
                        css: Object(r.a)({
                            top: -10,
                            right: -10,
                            cursor: "pointer",
                            position: "absolute",
                            svg: Object(a.a)({
                                transition: "color .15s"
                            }, g.ON_FOCUS_OR_HOVER, {
                                color: j.ORANGE_DARK
                            })
                        }, "")
                    }), Object(f.b)("div", {
                        css: be
                    }, Object(f.b)(ae, {
                        alt: i,
                        src: n,
                        css: Object(r.a)({
                            width: 64,
                            height: 64,
                            backgroundColor: j.WHITE
                        }, "")
                    }), Object(f.b)("h3", {
                        css: ue
                    }, i)), u && Object(f.b)("p", {
                        css: de
                    }, u)))
                }));
            Oe.displayName = "ChannelDetails";
            c.a.createElement;
            var me = c.a.memo((function(e) {
                var t = e.description,
                    n = e.image,
                    a = e.channelsCount,
                    r = e.close,
                    i = e.index,
                    s = e.scroll,
                    l = e.shouldShowDetails,
                    b = e.parentElementRef,
                    u = e.title,
                    d = Object(o.useTheme)().zIndex,
                    O = Object(re.useTransition)(l, {
                        config: {
                            duration: 150
                        },
                        from: {
                            opacity: 0,
                            zIndex: d.LAYER_3
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        }
                    });
                return Object(f.b)(c.a.Fragment, null, O((function(e, c) {
                    return c && Object(f.b)(re.animated.div, {
                        style: e
                    }, Object(f.b)(Oe, {
                        parentElementRef: b,
                        title: u,
                        image: n,
                        index: i,
                        description: t,
                        channelsCount: a,
                        close: r,
                        scroll: s
                    }))
                })))
            }));
            me.displayName = "DetailsWrapper";
            c.a.createElement;
            var pe = {
                    name: "1e8pjs",
                    styles: "top:0;left:0;right:0;height:25px;padding:10px;display:flex;align-items:center;position:absolute;justify-content:space-between;"
                },
                je = {
                    name: "94scpr",
                    styles: "width:20px;display:flex;justify-content:space-between;"
                },
                fe = {
                    name: "540lu8",
                    styles: "width:14px;height:14px;"
                },
                ge = {
                    name: "1m2srq3",
                    styles: "font-weight:bold;font-size:12px;margin:0;"
                },
                he = c.a.memo((function(e) {
                    var t, n = e.name,
                        i = e.image,
                        s = e.index,
                        b = e.scroll,
                        d = e.description,
                        m = e.channelsCount,
                        p = e.characteristics,
                        j = (e.categoryList, e.partOfSelectedBundle, Object(O.a)(e, ["name", "image", "index", "scroll", "description", "channelsCount", "characteristics", "categoryList", "partOfSelectedBundle"])),
                        g = Object(o.useTheme)(),
                        h = g.colors,
                        y = g.bp,
                        v = c.a.useRef(null),
                        E = c.a.useState(!1),
                        x = Object(V.a)(E, 2),
                        T = x[0],
                        w = x[1],
                        R = c.a.useState(!1),
                        k = Object(V.a)(R, 2),
                        C = k[0],
                        L = k[1],
                        A = Object(te.b)({
                            threshold: 0,
                            triggerOnce: !0
                        }),
                        S = Object(V.a)(A, 2),
                        _ = S[0],
                        I = S[1],
                        z = c.a.useCallback((function() {
                            T || w(!0)
                        }), [T]),
                        P = c.a.useCallback((function() {
                            L(!0)
                        }), []),
                        N = c.a.useCallback((function() {
                            L(!1)
                        }), []),
                        M = function(e) {
                            return {
                                isItiGuaranteed: !!(null === e || void 0 === e ? void 0 : e.find((function(e) {
                                    return "ITI_GUARANTEED" === e.code
                                }))),
                                isItiUnguaranteed: !!(null === e || void 0 === e ? void 0 : e.find((function(e) {
                                    return "ITI_UNGUARANTEED" === e.code
                                }))),
                                isMultirecorderIncluded: !!(null === e || void 0 === e ? void 0 : e.find((function(e) {
                                    return "MULTIRECORDER" === e.code
                                }))),
                                isIncludedInBasePackage: !!(null === e || void 0 === e ? void 0 : e.find((function(e) {
                                    return "INCLUDED_IN_BASE" === e.code
                                })))
                            }
                        }(p),
                        B = M.isItiGuaranteed,
                        D = M.isItiUnguaranteed,
                        F = M.isMultirecorderIncluded,
                        G = M.isIncludedInBasePackage;
                    return Object(f.b)("div", Object(u.a)({
                        ref: v,
                        role: "button",
                        onClick: P,
                        css: Object(r.a)((t = {
                            margin: 5,
                            height: 80,
                            width: 80,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            position: "relative",
                            border: "1px solid ".concat(h.CHROME),
                            transition: "background-color .15s",
                            backgroundColor: T ? h.WHITE : h.STARDUST
                        }, Object(a.a)(t, y.FROM_TABLET, {
                            height: 115,
                            width: 115
                        }), Object(a.a)(t, y.ONLY_MOBILE, {
                            marginLeft: s < 5 ? 0 : void 0
                        }), t), "")
                    }, j), Object(f.b)(me, {
                        shouldShowDetails: C,
                        parentElementRef: v,
                        title: n,
                        image: i,
                        index: s,
                        description: d,
                        channelsCount: m,
                        close: N,
                        scroll: b
                    }), I && Object(f.b)(ae, {
                        alt: n,
                        src: i,
                        onLoad: z,
                        css: Object(r.a)({
                            opacity: T ? 1 : 0,
                            transition: "opacity .15s"
                        }, "")
                    }), Object(f.b)("div", {
                        ref: _
                    }), Object(f.b)("div", {
                        css: pe
                    }, Object(f.b)("div", {
                        css: je
                    }, B && Object(f.b)(ne, {
                        backgroundColor: "INFO"
                    }), D && Object(f.b)(ne, {
                        backgroundColor: "SUMMER_MADNESS"
                    }), G && Object(f.b)(ne, {
                        backgroundColor: "GREEN_PARROT"
                    })), F && Object(f.b)(l.a, {
                        name: "cloud-download",
                        css: fe
                    })), F && Object(f.b)("div", {
                        css: Object(r.a)({
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 20,
                            textAlign: "center",
                            position: "absolute",
                            backgroundColor: h.PEARL
                        }, "")
                    }, Object(f.b)("p", {
                        css: ge
                    }, "Multinagrywarka")))
                }));
            he.displayName = "SingleChannel";
            var ye = n("5zEb"),
                ve = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.isVisible,
                        n = e.direction,
                        a = Object(O.a)(e, ["isVisible", "direction"]),
                        i = Object(o.useTheme)(),
                        c = i.colors,
                        s = i.zIndex,
                        l = Object(ye.a)({}),
                        b = l.bind,
                        d = l.isHovered,
                        m = "LEFT" === n ? -10 : 10;
                    return Object(f.b)("div", Object(u.a)({}, b, {
                        css: Object(r.a)({
                            top: 0,
                            display: "flex",
                            cursor: "pointer",
                            position: "absolute",
                            alignItems: "center",
                            zIndex: s.LAYER_2,
                            height: "calc(100% - 125px)",
                            opacity: t ? 1 : 0,
                            transition: "opacity .15s, transform .15s",
                            pointerEvents: t ? "auto" : "none",
                            transform: t ? "translateX(0)" : "translateX(".concat(m, "px)"),
                            svg: {
                                height: 32,
                                width: 32,
                                transition: "color .15s, transform .15s",
                                color: d ? c.BLACK : c.CHROME,
                                transform: d ? "scale(1.1)" : "scale(1)"
                            }
                        }, "")
                    }, a))
                })));
            ve.displayName = "Button";
            var Ee = n("lY4l"),
                xe = (c.a.createElement, c.a.memo((function(e) {
                    var t = Object(o.useTheme)(),
                        n = t.bp,
                        i = t.zIndex,
                        b = Object(d.b)().current,
                        O = c.a.useRef(null),
                        m = c.a.useState(null),
                        p = Object(V.a)(m, 2),
                        j = p[0],
                        g = p[1],
                        h = Object(Q.a)().width,
                        y = Object(s.b)({
                            minWidth: 1280
                        }),
                        v = b.context,
                        E = v.filters,
                        x = v.selectedPackagesIds,
                        T = v.currentProposition,
                        w = v.debouncedSearchQuery,
                        R = function(e) {
                            return function(t) {
                                var n = e.resolution,
                                    a = e.category,
                                    r = e.multirecorder,
                                    i = !!t.characteristics && !!t.characteristics.find((function(e) {
                                        return "MULTIRECORDER" === e.code
                                    }));
                                return (!r || i) && (null === a || a in t.categoryList) && (null === n || t.resolution === n)
                            }
                        }(E),
                        k = w.length >= Ee.a ? Object(ee.a)(w) : function() {
                            return !0
                        },
                        C = c.a.useMemo((function() {
                            return $({
                                selectedPackagesIds: x,
                                currentProposition: T
                            }).filter((function(e) {
                                return R(e) && k(e)
                            }))
                        }), [k, R, T, x]),
                        L = c.a.useMemo((function() {
                            var e = h - 1280;
                            return h < 1280 ? 0 : h > 1480 ? 100 : 10 * Math.floor(e / 200 * 100 / 10)
                        }), [h]),
                        A = c.a.useMemo((function() {
                            return y ? "calc(50vw - 620px - ".concat(L, "px)") : void 0
                        }), [y, L]);
                    c.a.useEffect((function() {
                        X.a.polyfill()
                    }), []), c.a.useEffect((function() {
                        if (O.current) {
                            var e = O.current.scrollWidth,
                                t = O.current.parentElement,
                                n = (null === t || void 0 === t ? void 0 : t.scrollWidth) || 0;
                            e <= n ? g(null) : null === j && e > n && g("START")
                        }
                    }), [C.length, j]), c.a.useEffect((function() {
                        var e = O.current;
                        if (e) {
                            var t = function(e) {
                                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                        isImmediate: !1
                                    };
                                return function() {
                                    for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c];
                                    var o = this,
                                        s = function() {
                                            t = void 0, a.isImmediate || e.apply(o, i)
                                        },
                                        l = a.isImmediate && void 0 === t;
                                    void 0 !== t && clearTimeout(t), t = setTimeout(s, n), l && e.apply(o, i)
                                }
                            }((function() {
                                if (O.current) {
                                    var t, n = e.scrollWidth,
                                        a = e.scrollLeft,
                                        r = (null === (t = e.parentElement) || void 0 === t ? void 0 : t.scrollWidth) || 0;
                                    g(a < 50 ? "START" : a + r + 50 > n ? "END" : "MIDDLE")
                                }
                            }), 30);
                            return e.addEventListener("scroll", t, !!Y.a.hasSupport && {
                                    capture: !1,
                                    passive: !0
                                }),
                                function() {
                                    return e.removeEventListener("scroll", t)
                                }
                        }
                    }), [O]);
                    var S = c.a.useCallback((function(e) {
                            O.current && O.current.scrollBy({
                                left: e,
                                behavior: "smooth"
                            })
                        }), []),
                        _ = c.a.useCallback((function() {
                            S(-300)
                        }), [S]),
                        I = c.a.useCallback((function() {
                            S(300)
                        }), [S]),
                        z = !(!j || "START" === j),
                        P = !(!j || "END" === j);
                    return Object(f.b)(c.a.Fragment, null, y && Object(f.b)(ve, {
                        direction: "LEFT",
                        onClick: _,
                        isVisible: z,
                        css: Object(r.a)({
                            width: 60,
                            left: -50,
                            justifyContent: "flex-start",
                            background: "linear-gradient(to right, rgba(255,255,255,1) 80%,rgba(255,255,255,0))"
                        }, "")
                    }, Object(f.b)(l.a, {
                        name: "arrow-left"
                    })), Object(f.b)(o.CustomScroll, Object(u.a)({
                        offsetRight: A,
                        isInvisible: C.length < 1,
                        scrollableNodeProps: {
                            ref: O
                        }
                    }, e), Object(f.b)("div", {
                        css: Object(r.a)(Object(a.a)({
                            marginTop: -5,
                            maxHeight: 520,
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "column",
                            width: "".concat(80 * C.length / 5, "px")
                        }, n.FROM_TABLET, {
                            marginLeft: -5,
                            width: "".concat(120 * C.length / 4, "px")
                        }), "")
                    }, C.map((function(e, t) {
                        return Object(f.b)(he, Object(u.a)({}, e, {
                            index: t,
                            scroll: S,
                            channelsCount: C.length,
                            key: "package-".concat(e.name)
                        }))
                    })))), y && Object(f.b)(ve, {
                        direction: "RIGHT",
                        onClick: I,
                        isVisible: P,
                        css: Object(r.a)({
                            width: 70,
                            right: 55,
                            zIndex: i.LAYER_2,
                            justifyContent: "flex-end",
                            background: "linear-gradient(to left, rgba(255,255,255,1) 70%,rgba(255,255,255,0))"
                        }, "")
                    }, Object(f.b)(l.a, {
                        name: "arrow-right"
                    })))
                })));
            xe.displayName = "ChannelsList";
            c.a.createElement;
            var Te = {
                    name: "x1sij0",
                    styles: "display:flex;align-items:baseline;"
                },
                we = function(e) {
                    var t = e.children,
                        n = Object(O.a)(e, ["children"]),
                        i = Object(o.useTheme)().bp;
                    return Object(f.b)("li", Object(u.a)({
                        css: Object(r.a)(Object(a.a)({
                            marginTop: 10
                        }, i.FROM_LARGE_DESKTOP, {
                            flex: 1,
                            marginTop: 0,
                            maxWidth: 250,
                            ":not(:first-of-type)": {
                                marginLeft: 5
                            }
                        }), "")
                    }, n), Object(f.b)("div", {
                        css: Te
                    }, t))
                };
            c.a.createElement;
            var Re = {
                    title: "Kana\u0142y w ramach kategorii mog\u0105 ulec zmianie. Lista kana\u0142\xf3w aktualna na dzie\u0144 19.08.2019 r.",
                    elements: [{
                        color: "INFO",
                        text: "- kana\u0142y dost\u0119pne w ramach oferty ITI Neovision S.A. dla klient\xf3w Orange"
                    }, {
                        color: "SUMMER_MADNESS",
                        text: "- kana\u0142y niegwarantowane dost\u0119pne w ramach oferty ITI Neovision S.A. dla klient\xf3w Orange"
                    }, {
                        color: "GREEN_PARROT",
                        text: "- kana\u0142y dost\u0119pne w ramach oferty Telewizja Orange"
                    }]
                },
                ke = {
                    name: "1in8ut7",
                    styles: "margin:0;font-size:12px;"
                },
                Ce = c.a.memo((function(e) {
                    var t = Object(o.useTheme)(),
                        n = t.bp,
                        i = t.colors;
                    return Object(f.b)("div", e, Object(f.b)("p", {
                        css: ke
                    }, Object(f.b)("strong", null, Re.title)), Object(f.b)("ul", {
                        css: Object(r.a)(Object(a.a)({
                            marginTop: 20
                        }, n.FROM_LARGE_DESKTOP, {
                            display: "flex"
                        }), "")
                    }, Re.elements.map((function(e, t) {
                        return Object(f.b)(we, {
                            key: "LegendItem-".concat(t)
                        }, Object(f.b)(ne, {
                            backgroundColor: e.color
                        }), Object(f.b)("p", {
                            css: Object(r.a)({
                                flex: 1,
                                margin: 0,
                                fontSize: 12,
                                marginLeft: 5,
                                color: i.SILVER
                            }, "")
                        }, e.text))
                    }))))
                }));
            Ce.displayName = "Legend";
            var Le = n("kirR"),
                Ae = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.id,
                        n = e.value,
                        a = e.children,
                        r = e.onOptionChange,
                        i = Object(O.a)(e, ["id", "value", "children", "onOptionChange"]),
                        c = Object(Le.b)().selectedOption;
                    return Object(f.b)(o.Option, Object(u.a)({
                        id: t,
                        value: n,
                        onClick: function() {
                            r(c)
                        }
                    }, i), a)
                })));

            function Se(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            Ae.displayName = "CategoryOption";
            var _e = function(e) {
                var t = {};
                return e.forEach((function(e) {
                    t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Se(Object(n), !0).forEach((function(t) {
                                Object(a.a)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, t, {}, e.categoryList)
                })), Object.entries(t).map((function(e) {
                    var t = Object(V.a)(e, 2);
                    return {
                        id: t[0],
                        value: t[1]
                    }
                }))
            };
            c.a.createElement;
            var Ie = {
                    id: "none",
                    value: "Wszystkie kategorie"
                },
                ze = {
                    name: "8atqhb",
                    styles: "width:100%;"
                },
                Pe = c.a.memo((function(e) {
                    var t = Object(d.b)(),
                        n = t.current,
                        a = t.send,
                        r = n.context.filters,
                        i = $(n.context),
                        s = _e(i),
                        l = c.a.useCallback((function(e) {
                            var t = "none" !== e.id ? e.id : null;
                            t !== r.category && a({
                                type: "SET_CATEGORY_FILTER",
                                category: t
                            })
                        }), [r.category, a]),
                        b = s.find((function(e) {
                            return e.id === r.category
                        })) || Ie,
                        O = s.length < 1;
                    return Object(f.b)("form", Object(u.a)({
                        css: ze
                    }, e), Object(f.b)(o.Select, {
                        variant: "LIGHT",
                        disabled: O,
                        defaultOption: b,
                        wrapperCss: {
                            ul: {
                                boxShadow: "2px 2px 15px 0px rgba(0,0,0,0.3)"
                            }
                        }
                    }, Object(f.b)(Ae, Object(u.a)({}, Ie, {
                        onOptionChange: function() {
                            l(Ie)
                        }
                    }), Ie.value), s.map((function(e) {
                        return Object(f.b)(Ae, Object(u.a)({}, e, {
                            key: e.id,
                            onOptionChange: function() {
                                l(e)
                            }
                        }), e.value)
                    }))))
                }));
            Pe.displayName = "Categories";
            c.a.createElement;
            var Ne = {
                    name: "1j7y7uz",
                    styles: "p, label{margin-right:20px;}"
                },
                Me = {
                    name: "1cev0y9",
                    styles: "margin:0;font-size:14px;"
                },
                Be = c.a.memo((function(e) {
                    var t = Object(o.useTheme)().bp,
                        n = Object(d.b)(),
                        i = n.send,
                        c = n.current.context.filters.resolution;
                    return Object(f.b)("div", Object(u.a)({
                        role: "group",
                        "aria-labelledby": "qualityText",
                        css: Ne
                    }, e), Object(f.b)("p", {
                        id: "qualityText",
                        css: Me
                    }, "Jako\u015b\u0107:"), Object(f.b)("form", {
                        onChange: function(e) {
                            var t = e.target.value;
                            i({
                                type: "SET_RESOLUTION_FILTER",
                                resolution: "all" !== t ? t : null
                            })
                        },
                        defaultValue: "all",
                        css: Object(r.a)(Object(a.a)({}, t.ONLY_MOBILE, {
                            marginTop: 10
                        }), "")
                    }, Object(f.b)(o.Radio, {
                        label: "Ka\u017cda",
                        name: "quality",
                        value: "all",
                        readOnly: !0,
                        checked: null === c
                    }), Object(f.b)(o.Radio, {
                        label: "HD",
                        name: "quality",
                        value: "hd",
                        readOnly: !0,
                        checked: "hd" === c
                    }), Object(f.b)(o.Radio, {
                        label: "4K",
                        name: "quality",
                        value: "4k",
                        readOnly: !0,
                        checked: "4k" === c
                    })))
                }));
            Be.displayName = "ResolutionFilter";
            var De = n("48NU");
            c.a.createElement;
            var Fe = {
                    name: "1cev0y9",
                    styles: "margin:0;font-size:14px;"
                },
                Ge = {
                    name: "1xu0brt",
                    styles: "margin-left:10px;width:16px;height:16px;vertical-align:-3px;"
                },
                He = c.a.memo((function() {
                    var e = Object(d.b)(),
                        t = e.current,
                        n = e.send;
                    return Object(f.b)("form", null, Object(f.b)(o.Checkbox, {
                        name: "multirecorder",
                        onChange: function() {
                            n({
                                type: "TOGGLE_MULTIRECORDER_FILTER"
                            })
                        },
                        checked: t.context.filters.multirecorder
                    }, Object(f.b)("p", {
                        css: Fe
                    }, "Multinagrywarka")), Object(f.b)(De.a, {
                        content: "Us\u0142uga pozwalaj\u0105ca na nagrywanie oraz odtwarzanie 7 dniowej historii program\xf3w Telewizyjnych na wybranych kana\u0142ach."
                    }, Object(f.b)("span", null, Object(f.b)(l.a, {
                        name: "question-mark",
                        css: Ge
                    }))))
                }));
            He.displayName = "Multirecorder";
            var We = n("BVF/"),
                Ke = n("nwNh"),
                Ue = n("sGZ7");
            c.a.createElement;
            var Ve = {
                    name: "1r9gd80",
                    styles: "position:absolute;top:20px;right:20px;"
                },
                qe = {
                    name: "1g68m89",
                    styles: "flex:1;overflow:hidden;"
                },
                Ye = {
                    name: "10klw3m",
                    styles: "height:100%;"
                },
                Ze = {
                    name: "9w06ml",
                    styles: "margin:0;padding-right:16px;"
                },
                Xe = c.a.memo((function(e) {
                    var t = e.isVisible,
                        n = e.closeFn,
                        i = Object(O.a)(e, ["isVisible", "closeFn"]),
                        s = Object(o.useTheme)(),
                        l = s.zIndex,
                        b = s.colors,
                        m = s.bp,
                        p = Object(d.b)().current,
                        j = Object(Ue.c)().isNavbarCollapsed,
                        g = c.a.useRef(null),
                        h = p.context,
                        y = h.allPropositions,
                        v = h.currentOffer,
                        E = (null === y || void 0 === y ? void 0 : y.length) || 0,
                        x = j ? 50 : 80,
                        T = E > 1,
                        w = "CONVERGENT4U" === (null === v || void 0 === v ? void 0 : v.offerType),
                        R = Object(re.useTransition)(t, {
                            from: {
                                transform: "translateX(-100vw)"
                            },
                            enter: {
                                transform: "translateX(0vw)"
                            },
                            leave: {
                                transform: "translateX(-100vw)"
                            }
                        });
                    return Object(f.b)(c.a.Fragment, null, R((function(e, c) {
                        return Object(f.b)(Ke.a, {
                            enabled: t
                        }, c && Object(f.b)(re.animated.div, Object(u.a)({
                            ref: g,
                            css: Object(r.a)({
                                left: 0,
                                right: 0,
                                top: x,
                                bottom: 50,
                                position: "fixed",
                                background: "black",
                                zIndex: l.LAYER_3
                            }, ""),
                            style: e
                        }, i), Object(f.b)(o.IconButton, {
                            title: "Zamknij warstw\u0119",
                            iconName: "close-slim",
                            color: b.WHITE,
                            onClick: n,
                            height: 16,
                            width: 16,
                            css: Ve
                        }), Object(f.b)("div", {
                            css: Object(r.a)({
                                left: 20,
                                right: 20,
                                bottom: 20,
                                display: "flex",
                                flexDirection: "column",
                                position: "absolute",
                                top: w ? 40 : 50
                            }, "")
                        }, Object(f.b)(I, null), T && Object(f.b)("h4", {
                            css: Object(r.a)(Object(a.a)({
                                fontSize: 12,
                                margin: "15px 0",
                                color: b.ORANGE_LIGHT
                            }, m.FROM_TABLET, {
                                margin: "30px 0 15px"
                            }), "")
                        }, "Pakiety mo\u017cliwe do dokupienia"), Object(f.b)("div", {
                            css: qe
                        }, Object(f.b)(o.CustomScroll, {
                            variant: "DARK",
                            css: Ye
                        }, Object(f.b)(A, {
                            css: Ze
                        }))))))
                    })))
                }));
            Xe.displayName = "Layer";
            c.a.createElement;
            var Qe = {
                    name: "1rv4rd6",
                    styles: "margin-top:20px;width:calc(100% + 20px);transform:translateX(-10px);"
                },
                Je = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                $e = {
                    name: "h8laae",
                    styles: "font-size:14px;font-weight:bold;"
                },
                et = c.a.memo((function() {
                    var e = Object(o.useTheme)().zIndex,
                        t = Object(Ue.c)().isNavbarCollapsed,
                        n = c.a.useState(!1),
                        a = Object(V.a)(n, 2),
                        i = a[0],
                        s = a[1];
                    return Object(f.b)(c.a.Fragment, null, Object(f.b)(We.a.Wrapper, {
                        onClick: function() {
                            s(!0)
                        },
                        isExpandable: !1,
                        top: t ? 60 : 90,
                        position: "sticky",
                        innerCss: {
                            padding: "7px 10px"
                        },
                        css: Qe
                    }, Object(f.b)(We.a.Header, {
                        css: Object(r.a)({
                            height: 30,
                            position: "relative",
                            zIndex: e.LAYER_3
                        }, "")
                    }, Object(f.b)("h4", {
                        css: Je
                    }, "Lista pakiet\xf3w"), Object(f.b)(o.AButton, {
                        css: $e
                    }, "Poka\u017c pakiety"))), Object(f.b)(Xe, {
                        isVisible: i,
                        closeFn: function() {
                            s(!1)
                        }
                    }))
                }));
            et.displayName = "Content";
            c.a.createElement;
            var tt = function() {
                    var e = Object(o.useTheme)().colors;
                    return Object(f.b)("div", {
                        css: Object(r.a)({
                            height: 44,
                            marginTop: 20,
                            display: "flex",
                            alignItems: "center",
                            padding: "7px 10px",
                            width: "calc(100% + 20px)",
                            transform: "translateX(-10px)",
                            justifyContent: "space-between",
                            backgroundColor: e.STARDUST,
                            boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.1)"
                        }, "")
                    }, Object(f.b)("h4", {
                        css: Object(r.a)({
                            fontSize: 14,
                            color: e.SILVER
                        }, "")
                    }, "Lista pakiet\xf3w"), Object(f.b)("strong", {
                        css: Object(r.a)({
                            fontSize: 14,
                            textDecoration: "underline",
                            color: e.SILVER
                        }, "")
                    }, "Poka\u017c pakiety"))
                },
                nt = (c.a.createElement, function() {
                    return Object(d.b)().current.context.currentProposition ? Object(f.b)(et, null) : Object(f.b)(tt, null)
                }),
                at = n("Bit+");
            c.a.createElement;
            var rt = {
                    name: "8mg22s",
                    styles: "margin-right:20px;"
                },
                it = {
                    name: "9b88uv",
                    styles: "width:100%;max-width:825px;margin-top:25px;"
                },
                ct = function() {
                    var e, t, n, i, u, d, O, m, p, j, g = Object(o.useTheme)(),
                        h = g.bp,
                        y = g.colors,
                        v = Object(s.a)(),
                        E = {
                            id: "TV_BROWSER_CMB_BUTTON",
                            action: "CALL_ME_BACK",
                            text: "Zam\xf3w rozmow\u0119",
                            title: "Zam\xf3w rozmow\u0119",
                            type: "BUTTON",
                            variant: "PRIMARY_ON_WHITE",
                            params: {
                                queue: "SALES_TV_CALLBACK_GD",
                                personalScenario: "Klient zainteresowany ofert\u0105 TV+Internet",
                                description: "Zam\xf3w rozmow\u0119 pakiety telewizji Orange",
                                profile: ""
                            }
                        };
                    return Object(f.b)(c.a.Fragment, null, v && Object(f.b)(nt, null), Object(f.b)(b.a, {
                        as: "div",
                        css: Object(r.a)((e = {}, Object(a.a)(e, h.FROM_TABLET, {
                            maxHeight: 1024
                        }), Object(a.a)(e, h.FROM_DESKTOP, {
                            marginTop: 0,
                            maxHeight: 860,
                            flexDirection: "column",
                            justifyContent: "flex-start"
                        }), Object(a.a)(e, h.FROM_LARGE_DESKTOP, {
                            margin: 0,
                            maxHeight: 800
                        }), e), "")
                    }, Object(f.b)("div", {
                        css: Object(r.a)((t = {
                            display: "flex",
                            flexDirection: "column"
                        }, Object(a.a)(t, h.FROM_TABLET, {
                            marginTop: 40
                        }), Object(a.a)(t, h.FROM_LARGE_DESKTOP, {
                            flexDirection: "row",
                            marginLeft: "calc(50vw - 640px - 10px)"
                        }), t), "")
                    }, Object(f.b)("div", {
                        css: Object(r.a)((n = {}, Object(a.a)(n, h.FROM_TABLET, {
                            width: "100%",
                            maxWidth: 480,
                            display: "flex",
                            justifyContent: "space-between"
                        }), Object(a.a)(n, h.FROM_LARGE_DESKTOP, {
                            maxWidth: 695
                        }), n), "")
                    }, Object(f.b)(U, {
                        css: Object(r.a)((i = {}, Object(a.a)(i, h.ONLY_MOBILE, {
                            marginTop: 20
                        }), Object(a.a)(i, h.FROM_TABLET, {
                            maxWidth: 230
                        }), Object(a.a)(i, h.FROM_LARGE_DESKTOP, {
                            maxWidth: 295
                        }), i), "")
                    }), Object(f.b)(Pe, {
                        css: Object(r.a)((u = {
                            marginTop: 20
                        }, Object(a.a)(u, h.FROM_TABLET, {
                            marginTop: 0,
                            maxWidth: 230
                        }), Object(a.a)(u, h.FROM_LARGE_DESKTOP, {
                            maxWidth: 295
                        }), u), "")
                    })), Object(f.b)("div", {
                        css: Object(r.a)((d = {}, Object(a.a)(d, h.FROM_TABLET, {
                            display: "flex",
                            marginTop: 30
                        }), Object(a.a)(d, h.FROM_LARGE_DESKTOP, {
                            marginTop: 0,
                            marginLeft: 40
                        }), d), "")
                    }, Object(f.b)(Be, {
                        css: Object(r.a)(Object(a.a)({
                            marginTop: 20
                        }, h.FROM_TABLET, {
                            marginTop: 0,
                            display: "flex",
                            alignItems: "center"
                        }), "")
                    }), Object(f.b)("div", {
                        css: Object(r.a)(Object(a.a)({
                            display: "flex",
                            alignItems: "center"
                        }, h.ONLY_MOBILE, {
                            marginTop: 10
                        }), "")
                    }, Object(f.b)(l.a, {
                        name: "cloud-download",
                        width: 23,
                        height: 23,
                        color: y.DOVE,
                        css: rt
                    }), Object(f.b)(He, null)))), Object(f.b)("div", {
                        css: Object(r.a)(Object(a.a)({}, h.FROM_TABLET, {
                            display: "flex",
                            marginTop: 40
                        }), "")
                    }, !v && Object(f.b)("div", {
                        css: Object(r.a)((O = {
                            width: "100%",
                            display: "flex",
                            flexDirection: "column"
                        }, Object(a.a)(O, h.FROM_TABLET, {
                            maxWidth: 230
                        }), Object(a.a)(O, h.FROM_LARGE_DESKTOP, {
                            maxWidth: 295,
                            marginLeft: "calc(50vw - 640px - 10px)"
                        }), O), "")
                    }, Object(f.b)(H, {
                        css: Object(r.a)((m = {
                            maxHeight: 660,
                            paddingRight: 25
                        }, Object(a.a)(m, h.FROM_TABLET, {
                            maxWidth: 230
                        }), Object(a.a)(m, h.FROM_LARGE_DESKTOP, {
                            maxWidth: 295,
                            maxHeight: 500
                        }), m), "")
                    }), Object(f.b)(at.a, {
                        action: E,
                        wrapperCss: {
                            marginTop: 15,
                            width: "100%",
                            justifyContent: "center"
                        }
                    })), Object(f.b)("div", {
                        css: Object(r.a)((p = {
                            flex: 1
                        }, Object(a.a)(p, h.FROM_TABLET, {
                            marginLeft: 20,
                            minHeight: 710
                        }), Object(a.a)(p, h.FROM_LARGE_DESKTOP, {
                            marginLeft: 105,
                            minHeight: 520,
                            position: "relative"
                        }), p), "")
                    }, Object(f.b)(xe, {
                        css: Object(r.a)((j = {
                            width: "100%",
                            height: "100%",
                            minHeight: 455,
                            margin: "30px 0"
                        }, Object(a.a)(j, h.FROM_TABLET, {
                            margin: 0,
                            minHeight: 505,
                            maxHeight: 520
                        }), Object(a.a)(j, h.FROM_LARGE_DESKTOP, {
                            width: "calc(100% - 80px)"
                        }), j), "")
                    }), v && Object(f.b)(at.a, {
                        action: E,
                        wrapperCss: {
                            width: "100%",
                            justifyContent: "center"
                        }
                    }), Object(f.b)(Ce, {
                        css: it
                    })))))
                }
        }
    }
]);
//# sourceMappingURL=tvbrowser.packages.262889f1e48e3be9cea9.js.map