(window.omniJsonp = window.omniJsonp || []).push([
    [43], {
        "48NU": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var r = n("cxan"),
                a = n("5IAQ"),
                c = n("zjfJ"),
                i = n("HbGN"),
                o = n("ERkP"),
                s = n.n(o),
                u = n("xWEo"),
                l = n("I6rk"),
                b = n("Kq2c"),
                p = n("y6sE"),
                d = n("l1C2");
            s.a.createElement;

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        Object(c.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = {
                    name: "1r2f04i",
                    styles: "margin-bottom:10px;"
                },
                m = {
                    name: "w7p5zd",
                    styles: "float:right;width:12px;height:12px;"
                },
                h = s.a.memo((function(e) {
                    var t, n = e.content,
                        o = Object(i.a)(e, ["content"]),
                        O = Object(b.useTheme)().bp,
                        h = Object(l.a)(),
                        v = Object(p.b)().hasTouch,
                        g = s.a.useCallback((function(e) {
                            var t = e.close;
                            return Object(d.b)(s.a.Fragment, null, Object(d.b)("div", {
                                css: j
                            }, Object(d.b)(u.a, {
                                name: "close",
                                role: "button",
                                onClick: t,
                                css: m
                            })), n)
                        }), [n]);
                    return Object(d.b)(b.Tooltip, Object(r.a)({
                        content: v ? g : n,
                        withPointer: !v,
                        sides: v ? ["TOP", "BOTTOM"] : void 0,
                        trigger: v ? "CLICK" : "HOVER",
                        interceptPosition: function(e) {
                            return h ? {
                                side: e.side,
                                position: f({}, e.position, {
                                    left: 20,
                                    right: 20
                                })
                            } : e
                        },
                        safeSpace: h ? {
                            top: 80,
                            bottom: 50
                        } : {
                            top: 110
                        },
                        css: Object(a.a)((t = {
                            width: "auto"
                        }, Object(c.a)(t, O.ONLY_MOBILE, {
                            left: 20,
                            right: 20
                        }), Object(c.a)(t, O.FROM_TABLET, {
                            width: 280
                        }), t), "")
                    }, o))
                }))
        },
        "9KUe": function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return o
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "e", (function() {
                return u
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return b
            }));
            var r = n("VtSi"),
                a = n.n(r),
                c = n("v4L6"),
                i = n("qnbr"),
                o = function(e) {
                    var t, n, r;
                    return a.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return o.next = 2, a.a.awrap(Object(c.a)());
                            case 2:
                                return t = o.sent, o.next = 5, a.a.awrap(Object(i.a)("hapi/pwa/v1/product/getProducts", {
                                    headers: {
                                        "content-type": "application/json;charset=UTF-8",
                                        CSRFToken: t
                                    },
                                    method: "post",
                                    body: JSON.stringify(e)
                                }));
                            case 5:
                                return n = o.sent, o.next = 8, a.a.awrap(n.json());
                            case 8:
                                return r = o.sent, o.abrupt("return", r);
                            case 10:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, null, Promise)
                },
                s = function(e) {
                    var t, n;
                    return a.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, a.a.awrap(Object(i.a)("hapi/pwa/v1/product/getProducts", {
                                    params: {
                                        pk: e
                                    }
                                }));
                            case 2:
                                return t = r.sent, r.next = 5, a.a.awrap(t.json());
                            case 5:
                                return n = r.sent, r.abrupt("return", n);
                            case 7:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                u = function(e) {
                    var t, n, r, c = arguments;
                    return a.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return t = c.length > 1 && void 0 !== c[1] ? c[1] : {}, o.next = 3, a.a.awrap(Object(i.a)("hapi/pwa/v1/search/products", {
                                    params: {
                                        query: e.query,
                                        startRow: 1,
                                        rowNumbers: 10
                                    },
                                    headers: Object(i.c)(t.req)
                                }));
                            case 3:
                                return n = o.sent, o.next = 6, a.a.awrap(n.json());
                            case 6:
                                return r = o.sent, o.abrupt("return", r);
                            case 8:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, null, Promise)
                },
                l = function(e) {
                    var t, n, r, o, s, u;
                    return a.a.async((function(l) {
                        for (;;) switch (l.prev = l.next) {
                            case 0:
                                return t = e.baseId, n = e.paymentFilters, r = e.withPayments, l.next = 3, a.a.awrap(Object(c.a)());
                            case 3:
                                return o = l.sent, l.next = 6, a.a.awrap(Object(i.a)("hapi/pwa/v2/product/getProduct", {
                                    headers: {
                                        "content-type": "application/json;charset=UTF-8",
                                        CSRFToken: o
                                    },
                                    method: "post",
                                    body: JSON.stringify({
                                        code: t,
                                        filters: {
                                            paymentFilters: n,
                                            withPayments: r
                                        }
                                    })
                                }));
                            case 6:
                                return s = l.sent, l.next = 9, a.a.awrap(s.json());
                            case 9:
                                if (u = l.sent, s.ok) {
                                    l.next = 12;
                                    break
                                }
                                throw new Error(u.message);
                            case 12:
                                return l.abrupt("return", u);
                            case 13:
                            case "end":
                                return l.stop()
                        }
                    }), null, null, null, Promise)
                },
                b = function(e) {
                    var t, n, r, c = arguments;
                    return a.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return t = c.length > 1 && void 0 !== c[1] ? c[1] : {}, o.next = 3, a.a.awrap(Object(i.a)("hapi/pwa/v2/product/getProducts", {
                                    params: {
                                        codes: e.ids.join(",")
                                    },
                                    headers: Object(i.c)(t.req)
                                }));
                            case 3:
                                return n = o.sent, o.next = 6, a.a.awrap(n.json());
                            case 6:
                                return r = o.sent, o.abrupt("return", r);
                            case 8:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        QGQh: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e, t) {
                return e ? t.replace(new RegExp("(".concat(function(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                }(e), ")"), "ig"), "<b>$1</b>") : t
            }
        },
        bPGv: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/pwa/porownaj", function() {
                return n("heRo")
            }])
        },
        heRo: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "ProducstComparatorPage", (function() {
                return Ze
            }));
            var r = n("zjfJ"),
                a = n("9fIP"),
                c = n("MMYH"),
                i = n("8K1b"),
                o = n("K/z8"),
                s = n("sRHE"),
                u = n("VtSi"),
                l = n.n(u),
                b = n("ERkP"),
                p = n.n(b),
                d = n("AU4o"),
                O = n.n(d),
                f = n("9KUe"),
                j = n("/u09"),
                m = n("5IAQ"),
                h = n("fGyu"),
                v = n("zygG"),
                g = n("ysqo"),
                y = n.n(g),
                w = n("Kq2c"),
                x = n("tHt9"),
                E = n("kEwR"),
                T = n("sWVV"),
                R = n("I6rk"),
                P = n("NYeV"),
                S = n("+SGW"),
                k = n("l1C2"),
                C = (p.a.createElement, ["versus", "oraz"]),
                _ = function(e) {
                    var t = e.elements,
                        n = Object(w.useTheme)(),
                        a = n.colors,
                        c = n.bp,
                        i = t.map((function(e) {
                            return e.name
                        })),
                        o = i.length;
                    return Object(k.b)("div", {
                        css: Object(m.a)(Object(r.a)({
                            minHeight: 90,
                            marginBottom: 40,
                            backgroundColor: a.PEARL
                        }, c.FROM_DESKTOP, {
                            marginBottom: 80
                        }), "")
                    }, Object(k.b)("h1", {
                        css: Object(m.a)(Object(r.a)({
                            fontSize: 24,
                            lineHeight: "28px"
                        }, c.FROM_DESKTOP, {
                            fontSize: 40,
                            lineHeight: "44px"
                        }), "")
                    }, "Por\xf3wnaj", " ", i.map((function(e, t) {
                        return Object(k.b)(I, {
                            key: e,
                            name: e,
                            suffix: C[t % o],
                            isLast: t === o - 1
                        })
                    }))))
                },
                I = function(e) {
                    var t = e.name,
                        n = e.suffix,
                        r = e.isLast,
                        a = void 0 !== r && r,
                        c = Object(w.useTheme)().colors;
                    return Object(k.b)(p.a.Fragment, null, Object(k.b)("span", null, t), n && !a && Object(k.b)("span", {
                        css: Object(m.a)({
                            color: c.ORANGE_LIGHT
                        }, "")
                    }, " ", n, " "))
                },
                A = n("xWEo"),
                D = n("48NU"),
                F = n("obcW"),
                L = n("XTXV");
            p.a.createElement;
            var z = {
                    name: "18iaol3",
                    styles: "align-items:baseline;display:flex;"
                },
                M = {
                    name: "1r0tiyk",
                    styles: "font-size:34px;margin-bottom:3px;"
                },
                B = {
                    name: "1f4xrf3",
                    styles: "font-size:18px;font-weight:normal;margin-left:5px;"
                },
                H = function(e) {
                    var t = e.icon,
                        n = e.score,
                        r = e.withSlider,
                        a = void 0 === r || r,
                        c = Object(w.useTheme)().colors,
                        i = Object(R.a)(),
                        o = p.a.useState(0),
                        s = Object(v.a)(o, 2),
                        u = s[0],
                        l = s[1],
                        b = p.a.useState(!1),
                        d = Object(v.a)(b, 2),
                        O = d[0],
                        f = d[1];
                    p.a.useEffect((function() {
                        O && l(parseFloat(n))
                    }), [n, O]);
                    var j = p.a.useCallback((function(e) {
                            e && f(e)
                        }), []),
                        h = Object(F.useSpring)({
                            width: "".concat(u, "%"),
                            maxWidth: "100%",
                            height: "100%",
                            backgroundColor: c.ORANGE_DARK,
                            borderRadius: 20,
                            config: F.config.stiff
                        });
                    return Object(k.b)(L.a, {
                        onChange: j,
                        rootMargin: "0% 0% ".concat(i ? "-15%" : "-10%")
                    }, Object(k.b)("div", {
                        css: z
                    }, t && t, Object(k.b)("h4", {
                        css: M
                    }, Object(k.b)(w.Incrementer, {
                        number: u
                    }), Object(k.b)("span", {
                        css: B
                    }, "pkt"))), a && Object(k.b)("div", {
                        css: Object(m.a)({
                            height: 5,
                            borderRadius: 20,
                            backgroundColor: c.CHROME,
                            maxWidth: 240
                        }, "")
                    }, Object(k.b)(F.animated.div, {
                        style: h
                    })))
                },
                N = n("mMsu");
            p.a.createElement;
            var V = {
                    name: "70qvj9",
                    styles: "display:flex;align-items:center;"
                },
                K = function(e) {
                    var t = e.maxValue,
                        n = e.ratingValue,
                        a = Object(w.useTheme)(),
                        c = a.colors,
                        i = a.bp,
                        o = Object(R.a)(),
                        s = p.a.useState(!1),
                        u = Object(v.a)(s, 2),
                        l = u[0],
                        b = u[1],
                        d = Object(N.a)(),
                        O = Object(F.useTrail)(t, {
                            opacity: l ? 1 : 0,
                            config: F.config.stiff
                        }),
                        f = p.a.useCallback((function(e) {
                            e && b(e)
                        }), []);
                    return Object(k.b)(L.a, {
                        onChange: f,
                        rootMargin: "0% 0% ".concat(o ? "-15%" : "-10%")
                    }, Object(k.b)("div", {
                        css: V
                    }, Object(k.b)("span", {
                        css: Object(m.a)(Object(r.a)({
                            fontSize: 18,
                            fontWeight: "bold",
                            marginRight: 10
                        }, i.FROM_DESKTOP, {
                            fontSize: 30
                        }), "")
                    }, n.toFixed(1)), O.map((function(e, t) {
                        var a = ++t,
                            o = "0%";
                        (a - n < 0 && (o = "100%"), a - n < 1) && (o = "".concat((100 - 100 * (a - n)).toFixed(2), "%"));
                        return Object(k.b)("svg", {
                            key: t,
                            enableBackground: "new 0 0 448.941 448.941",
                            x: "0",
                            y: "0",
                            viewBox: "0 0 450 450",
                            xmlns: "http://www.w3.org/2000/svg",
                            css: Object(m.a)(Object(r.a)({
                                width: 16,
                                height: 16
                            }, i.FROM_DESKTOP, {
                                width: 20,
                                height: 20
                            }), "")
                        }, Object(k.b)("linearGradient", {
                            id: "grad".concat(d, "-").concat(t),
                            x1: "0",
                            x2: "100%",
                            y1: "0",
                            y2: "0"
                        }, Object(k.b)("stop", {
                            offset: o,
                            stopColor: c.WARNING
                        }), Object(k.b)("stop", {
                            offset: o,
                            stopColor: c.CHROME
                        })), Object(k.b)(F.animated.path, {
                            fill: "url(#grad".concat(d, "-").concat(t, ")"),
                            style: e,
                            d: "m448.941 168.353h-161.338l-63.132-168.353-63.132 168.353h-161.339l121.478 106.293-65.36 174.295 168.353-84.176 168.353 84.176-65.361-174.296z"
                        }))
                    }))))
                };
            p.a.createElement;
            var G = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                U = function(e) {
                    var t = e.values,
                        n = Object(w.useTheme)(),
                        a = n.bp,
                        c = n.colors;
                    return Object(k.b)("div", {
                        css: G
                    }, t.map((function(e, t) {
                        return Object(k.b)("div", {
                            css: Object(m.a)(Object(r.a)({
                                flexBasis: "50%",
                                padding: "0px 10px 15px 15px",
                                ":not(:first-of-type)": {
                                    borderLeft: "1px solid ".concat(c.PEARL)
                                }
                            }, a.FROM_TABLET, {
                                paddingLeft: 20,
                                paddingBottom: 20,
                                flexBasis: "33.33%"
                            }), ""),
                            key: t
                        }, "SCORE" === e.type && e.value && Object(k.b)(H, {
                            score: e.value,
                            icon: e.icon,
                            withSlider: e.withSlider
                        }), "STARS" === e.type && e.value && Object(k.b)(K, {
                            maxValue: 5,
                            ratingValue: parseFloat(e.value)
                        }))
                    })))
                };
            p.a.createElement;
            var W = {
                    name: "v1pg77",
                    styles: "padding:20px 15px;"
                },
                q = {
                    name: "1ruhgur",
                    styles: "display:flex;justify-content:space-between;cursor:pointer;"
                },
                Y = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                J = {
                    name: "14z7z8y",
                    styles: "font-size:24px;line-height:1;"
                },
                X = {
                    name: "t6o5t8",
                    styles: "width:14px;height:14px;margin-left:5px;"
                },
                Z = {
                    name: "1ghapnm",
                    styles: "font-size:16px;line-height:22px;"
                },
                Q = function(e) {
                    var t = e.title,
                        n = e.scores,
                        r = e.contentCss,
                        a = e.isPermanentlyOpened,
                        c = void 0 !== a && a,
                        i = e.showScores,
                        o = void 0 === i || i,
                        s = e.description,
                        u = e.children,
                        l = Object(w.useTheme)().colors,
                        b = Object(R.a)(),
                        d = p.a.useState(!1),
                        O = Object(v.a)(d, 2),
                        f = O[0],
                        j = O[1],
                        h = p.a.useState(!1),
                        g = Object(v.a)(h, 2),
                        y = g[0],
                        x = g[1],
                        E = p.a.useRef(null),
                        T = p.a.useCallback((function(e) {
                            e && x(e)
                        }), []),
                        P = Object(F.useSpring)({
                            transform: y ? "translateY(0px)" : "translateY(40px)",
                            opacity: y ? 1 : 0
                        });
                    return Object(k.b)(L.a, {
                        onChange: T,
                        rootMargin: "0% 0% ".concat(b ? "-15%" : "-10%")
                    }, Object(k.b)(F.animated.div, {
                        ref: E,
                        style: P,
                        css: Object(m.a)({
                            backgroundColor: l.WHITE,
                            marginBottom: 10,
                            borderRadius: 2
                        }, "")
                    }, Object(k.b)("div", {
                        css: W
                    }, Object(k.b)("div", {
                        role: "button",
                        onClick: function() {
                            c || j(!f)
                        },
                        css: q
                    }, Object(k.b)("div", {
                        css: Y
                    }, Object(k.b)("h2", {
                        css: J
                    }, t), s && Object(k.b)(D.a, {
                        content: s
                    }, Object(k.b)("span", null, Object(k.b)(A.a, {
                        name: "question-mark",
                        css: X
                    })))), !c && Object(k.b)("div", {
                        css: Object(m.a)({
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: l.PEARL
                        }, "")
                    }, Object(k.b)(A.a, {
                        name: "arrow-down",
                        css: Object(m.a)({
                            width: 14,
                            height: 14,
                            transition: "transform .15s",
                            transform: f ? "rotate(0)" : "rotate(180deg)"
                        }, "")
                    })))), o && n && Object(k.b)(U, {
                        values: n
                    }), Object(k.b)(w.SmoothHeightResizer, {
                        css: Object(m.a)({
                            height: f ? 0 : "auto"
                        }, "")
                    }, Object(k.b)("div", {
                        css: Z
                    }, Object(k.b)("div", {
                        css: Object(m.a)([{
                            paddingTop: 10
                        }, r], "")
                    }, u)))))
                };
            p.a.createElement;
            var $ = {
                    name: "1v994a0",
                    styles: "margin-right:6px;"
                },
                ee = function(e) {
                    var t, n = e.elements,
                        r = e.presentation,
                        a = Object(w.useTheme)().colors;
                    if (!n.length) return null;
                    var c = Math.max.apply(Math, Object(h.a)(n.map((function(e) {
                            return Number(e.scoring.scoreNormalized)
                        })))),
                        i = Object(k.b)(A.a, {
                            name: "cup",
                            color: a.ORANGE_DARK,
                            width: 24,
                            height: 24,
                            css: $
                        }),
                        o = n.map((function(e) {
                            var t = e.id,
                                n = e.scoring,
                                r = Number(n.scoreNormalized),
                                a = {
                                    deviceId: t,
                                    value: r.toString(),
                                    type: "SCORE",
                                    withSlider: !1
                                };
                            return r === c && (a.icon = i), a
                        })),
                        s = r.categories.find((function(e) {
                            return "MAIN_SCORE" === e.type
                        })),
                        u = null === s || void 0 === s ? void 0 : null === (t = s.properties) || void 0 === t ? void 0 : t.find((function(e) {
                            return "DESCRIPTION" === e.type
                        }));
                    return Object(k.b)(Q, {
                        description: (null === s || void 0 === s ? void 0 : s.desc) || null,
                        title: (null === s || void 0 === s ? void 0 : s.name) || "Og\xf3lna ocena",
                        scores: o,
                        contentCss: {
                            padding: "20px 15px"
                        }
                    }, u && u.text)
                },
                te = n("HbGN");

            function ne(e) {
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return re(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return re(e, t)
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
                var r, a, c = !0,
                    i = !1;
                return {
                    s: function() {
                        r = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = r.next();
                        return c = e.done, e
                    },
                    e: function(e) {
                        i = !0, a = e
                    },
                    f: function() {
                        try {
                            c || null == r.return || r.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                }
            }

            function re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var ce = function(e) {
                    return e.map((function(e) {
                        var t = e.item.characteristics.reduce((function(e, t) {
                            var n = t.code,
                                a = t.name,
                                c = t.features.reduce((function(e, t) {
                                    var n = t.code,
                                        a = Object(te.a)(t, ["code"]);
                                    return e[n.toLowerCase()] = function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? ae(Object(n), !0).forEach((function(t) {
                                                Object(r.a)(e, t, n[t])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                            }))
                                        }
                                        return e
                                    }({}, a), e
                                }), {});
                            return e[n] = {
                                name: a,
                                features: c
                            }, e
                        }), {});
                        return {
                            id: e.id,
                            name: e.name,
                            characteristics: t,
                            images: e.item.images,
                            video: e.item.video,
                            cannonicalUrl: e.canonicalUrl,
                            opinions: e.item.opinions,
                            scoring: e.item.scoring
                        }
                    }))
                },
                ie = function(e, t, n, r, a) {
                    var c = a;
                    return e[0] && (c = t, e.forEach((function(e, t, n) {
                        c += e.name, n[t + 1] && (c += " ".concat(r, " "))
                    })), c += n), c
                };
            p.a.createElement;
            var oe = {
                    name: "b7jvtl",
                    styles: "width:100%;flex-wrap:wrap;"
                },
                se = {
                    name: "gkvp5f",
                    styles: "padding:20px 20px 10px;width:100%;flex-grow:2;"
                },
                ue = {
                    name: "1s96cr",
                    styles: "font-size:18px;display:inline-block;margin-right:5px;"
                },
                le = {
                    name: "540lu8",
                    styles: "width:14px;height:14px;"
                },
                be = function(e) {
                    var t = e.name,
                        n = e.values,
                        a = e.description,
                        c = Object(w.useTheme)(),
                        i = c.bp,
                        o = c.colors;
                    return Object(k.b)(w.TableRow, {
                        css: oe
                    }, Object(k.b)(w.TableHead, {
                        css: se
                    }, t && Object(k.b)("h3", {
                        css: ue
                    }, t), a && Object(k.b)(D.a, {
                        content: a
                    }, Object(k.b)("span", null, Object(k.b)(A.a, {
                        name: "question-mark",
                        css: le
                    })))), n.map((function(e, t) {
                        var n;
                        return Object(k.b)(w.TableCell, {
                            key: t,
                            css: Object(m.a)(Object(r.a)({
                                flexBasis: "50%",
                                padding: "10px 20px 20px",
                                ":not(:first-of-type)": {
                                    paddingLeft: 20,
                                    borderLeft: "1px solid ".concat(o.PEARL)
                                }
                            }, i.FROM_TABLET, {
                                flexBasis: "33.33%"
                            }), "")
                        }, e.value, " ", null === (n = e.unit) || void 0 === n ? void 0 : n.symbol, !e.value && "-")
                    })))
                },
                pe = n("/G5g");
            p.a.createElement;
            var de = {
                    name: "fa7ybv",
                    styles: "display:inline-block;width:100%;"
                },
                Oe = function(e) {
                    var t = e.onClick,
                        n = e.stylesRef,
                        a = e.isVisible,
                        c = e.setIsVisible,
                        i = (e.numberOfDevices, Object(w.useTheme)()),
                        o = i.colors,
                        s = i.bp,
                        u = Object(R.a)(),
                        b = p.a.useCallback((function() {
                            c(!1), t()
                        }), [t, c]),
                        d = {
                            action: "NEW_DEVICE",
                            id: "Action",
                            title: "Otw\xf3rz: Informacje o ",
                            type: "BUTTON"
                        },
                        O = {
                            NEW_DEVICE: b
                        },
                        f = Object(F.useTransition)(a, {
                            ref: n,
                            trail: 100,
                            from: {
                                opacity: 0,
                                transform: "translateX(30%)",
                                width: "0%"
                            },
                            enter: function() {
                                return function(e) {
                                    return l.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, l.a.awrap(e({
                                                    width: u ? "48%" : "32%"
                                                }));
                                            case 2:
                                                return t.next = 4, l.a.awrap(e({
                                                    transform: "translateX(0%)",
                                                    opacity: 1
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, null, Promise)
                                }
                            },
                            leave: function() {
                                return function(e) {
                                    return l.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, l.a.awrap(e({
                                                    transform: "translateX(30%)",
                                                    opacity: 0
                                                }));
                                            case 2:
                                                return t.next = 4, l.a.awrap(e({
                                                    width: "0%"
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, null, Promise)
                                }
                            },
                            update: {
                                width: u ? "48%" : "32%"
                            },
                            config: F.config.stiff
                        });
                    return Object(k.b)(p.a.Fragment, null, f((function(e, t) {
                        var n, a, c, i, u;
                        return t ? Object(k.b)(F.animated.div, {
                            style: e
                        }, Object(k.b)(pe.a, {
                            actionsMap: O,
                            action: d,
                            css: de
                        }, Object(k.b)("div", {
                            css: Object(m.a)((n = {
                                border: "1px dashed ".concat(o.DOVE),
                                borderRadius: 10,
                                padding: 10,
                                height: 140
                            }, Object(r.a)(n, s.FROM_TABLET, {
                                padding: 20,
                                height: 220
                            }), Object(r.a)(n, s.FROM_DESKTOP, {
                                padding: 50,
                                height: 340
                            }), n), "")
                        }, Object(k.b)("p", {
                            dangerouslySetInnerHTML: {
                                __html: "Dodaj kolejny <br/>telefon do <br/>por\xf3wnania"
                            },
                            css: Object(m.a)((a = {
                                fontSize: 16,
                                lineHeight: "normal",
                                fontWeight: "bold",
                                margin: 0
                            }, Object(r.a)(a, s.FROM_TABLET, {
                                fontSize: 18
                            }), Object(r.a)(a, s.FROM_DESKTOP, {
                                fontSize: 30
                            }), a), "")
                        }), Object(k.b)("div", {
                            css: Object(m.a)(Object(r.a)({
                                display: "flex",
                                alignItems: "center",
                                paddingTop: 20
                            }, s.FROM_DESKTOP, {
                                paddingTop: 60
                            }), "")
                        }, Object(k.b)("div", {
                            css: Object(m.a)((c = {
                                border: "1px solid ".concat(o.DOVE),
                                borderRadius: "50%",
                                width: 30,
                                height: 30,
                                position: "relative"
                            }, Object(r.a)(c, s.FROM_TABLET, {
                                width: 40,
                                height: 40
                            }), Object(r.a)(c, s.FROM_DESKTOP, {
                                width: 65,
                                height: 65
                            }), c), "")
                        }, Object(k.b)(A.a, {
                            name: "phone-1",
                            css: Object(m.a)((i = {
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: 14,
                                height: 14
                            }, Object(r.a)(i, s.FROM_TABLET, {
                                width: 18,
                                height: 18
                            }), Object(r.a)(i, s.FROM_DESKTOP, {
                                width: 24,
                                height: 24
                            }), i), "")
                        })), Object(k.b)("span", {
                            css: Object(m.a)((u = {
                                fontSize: 14,
                                fontWeight: "bold",
                                marginLeft: 10
                            }, Object(r.a)(u, s.FROM_TABLET, {
                                fontSize: 16
                            }), Object(r.a)(u, s.FROM_DESKTOP, {
                                fontSize: 30,
                                marginLeft: 20
                            }), u), "")
                        }, "Dodaj"))))) : null
                    })))
                };
            p.a.createElement;
            var fe = {
                    name: "8atqhb",
                    styles: "width:100%;"
                },
                je = p.a.memo((function(e) {
                    var t, n, a, c, i, o = e.item,
                        s = e.onClick,
                        u = Object(w.useTheme)(),
                        l = u.bp,
                        b = u.colors,
                        d = u.zIndex,
                        O = Object(R.a)(),
                        f = p.a.useCallback((function(e, t) {
                            t.stopPropagation(), s(e)
                        }), [s]);
                    return Object(k.b)(p.a.Fragment, null, Object(k.b)("div", {
                        css: Object(m.a)((t = {
                            width: "100%",
                            height: 140,
                            borderRadius: 5,
                            backgroundColor: b.WHITE,
                            position: "absolute",
                            bottom: 0,
                            marginRight: 10
                        }, Object(r.a)(t, l.FROM_TABLET, {
                            height: 220,
                            marginRight: 20
                        }), Object(r.a)(t, l.FROM_DESKTOP, {
                            height: 340
                        }), t), "")
                    }, Object(k.b)(w.IconButton, {
                        iconName: "close-slim",
                        title: "Usu\u0144 urz\u0105dzenie",
                        width: O ? 14 : 22,
                        height: O ? 14 : 22,
                        css: Object(m.a)((n = {
                            top: 0,
                            right: 0,
                            position: "absolute",
                            padding: "5px 5px 15px 15px",
                            zIndex: d.LAYER_2
                        }, Object(r.a)(n, l.FROM_TABLET, {
                            padding: "15px 15px 20px 20px"
                        }), Object(r.a)(n, l.FROM_DESKTOP, {
                            padding: 20
                        }), n), ""),
                        onClick: function(e) {
                            return f(o.id, e)
                        }
                    })), Object(k.b)("div", {
                        css: Object(m.a)((a = {
                            position: "relative",
                            zIndex: d.LAYER_1,
                            padding: "0 10px"
                        }, Object(r.a)(a, l.FROM_TABLET, {
                            padding: "0 15px"
                        }), Object(r.a)(a, l.FROM_DESKTOP, {
                            padding: 20
                        }), a), "")
                    }, Object(k.b)("img", {
                        src: o.images[0] && o.images[0].source,
                        alt: o.name,
                        css: fe
                    }), Object(k.b)("div", {
                        css: Object(m.a)((c = {
                            minHeight: 60,
                            display: "flex",
                            flexDirection: "column"
                        }, Object(r.a)(c, l.FROM_TABLET, {
                            minHeight: 75
                        }), Object(r.a)(c, l.FROM_DESKTOP, {
                            minHeight: 130
                        }), c), "")
                    }, Object(k.b)("a", {
                        href: o.cannonicalUrl,
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        css: Object(m.a)((i = {
                            fontWeight: "bold",
                            fontSize: 14,
                            paddingTop: 10
                        }, Object(r.a)(i, l.FROM_TABLET, {
                            paddingTop: 15
                        }), Object(r.a)(i, l.FROM_DESKTOP, {
                            fontSize: 24,
                            paddingTop: 35
                        }), i), "")
                    }, o.name))))
                })),
                me = (p.a.createElement, function(e) {
                    var t, n = e.elements,
                        a = e.onClose,
                        c = e.addDevice,
                        i = Object(w.useTheme)().bp,
                        o = Object(R.a)(),
                        s = o ? n.length < 2 : n.length < 3,
                        u = p.a.useState(!0),
                        b = Object(v.a)(u, 2),
                        d = b[0],
                        O = b[1],
                        f = p.a.useCallback((function(e) {
                            O(!0), a(e)
                        }), [a]),
                        j = p.a.useRef(null),
                        h = p.a.useRef(null),
                        g = o ? "49%" : "32%",
                        y = g,
                        x = Object(F.useTransition)(n, {
                            ref: j,
                            trail: 100,
                            from: {
                                transform: "translateY(-25%)",
                                opacity: 0,
                                minWidth: "0%",
                                width: "0%",
                                marginRight: "0%"
                            },
                            enter: function() {
                                return function(e) {
                                    return l.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, l.a.awrap(e({
                                                    width: g,
                                                    minWidth: y,
                                                    marginRight: "2%"
                                                }));
                                            case 2:
                                                return t.next = 4, l.a.awrap(e({
                                                    transform: "translateY(0%)",
                                                    opacity: 1
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, null, Promise)
                                }
                            },
                            leave: function() {
                                return function(e) {
                                    return l.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, l.a.awrap(e({
                                                    overflow: "hidden",
                                                    transform: "translateY(-25%)",
                                                    opacity: 0
                                                }));
                                            case 2:
                                                return t.next = 4, l.a.awrap(e({
                                                    minWidth: "0%",
                                                    width: "0%",
                                                    marginRight: "0%"
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, null, Promise)
                                }
                            },
                            update: function() {
                                return {
                                    width: g,
                                    minWidth: y
                                }
                            },
                            config: F.config.stiff
                        });
                    return Object(F.useChain)(d ? [j, h] : [h, j], d ? [0, .2] : [0, .3]), Object(k.b)("div", {
                        css: Object(m.a)((t = {
                            display: "flex",
                            alignItems: "flex-end",
                            marginBottom: 15,
                            minHeight: 220,
                            position: "relative"
                        }, Object(r.a)(t, i.FROM_TABLET, {
                            minHeight: 260
                        }), Object(r.a)(t, i.FROM_DESKTOP, {
                            height: 480
                        }), t), "")
                    }, x((function(e, t) {
                        return Object(k.b)(F.animated.div, {
                            style: e
                        }, Object(k.b)(pe.a, {
                            action: {
                                action: "SHELF",
                                id: "COMPARATOR_GALLERY_SHELF",
                                text: "Galeria Produkt\xf3w",
                                title: "Galeria Produkt\xf3w",
                                type: "BUTTON",
                                variant: "PRIMARY_ON_WHITE",
                                params: {
                                    type: "COMPARATOR_GALLERY",
                                    layout: "L_100",
                                    variant: "WHITE",
                                    content: {
                                        animationState: "ENTERING",
                                        content: {
                                            devices: n,
                                            activeElementId: t.id
                                        }
                                    }
                                }
                            }
                        }, Object(k.b)(je, {
                            item: t,
                            onClick: f
                        })))
                    })), Object(k.b)(Oe, {
                        onClick: c,
                        stylesRef: h,
                        isVisible: s,
                        setIsVisible: O,
                        numberOfDevices: n.length
                    }))
                });
            p.a.createElement;
            var he = {
                    name: "b7jvtl",
                    styles: "width:100%;flex-wrap:wrap;"
                },
                ve = {
                    name: "gkvp5f",
                    styles: "padding:20px 20px 10px;width:100%;flex-grow:2;"
                },
                ge = {
                    name: "1s96cr",
                    styles: "font-size:18px;display:inline-block;margin-right:5px;"
                },
                ye = {
                    name: "122y91a",
                    styles: "position:absolute;top:0;left:0;width:100%;height:100%;"
                },
                we = function(e) {
                    var t = e.name,
                        n = e.values,
                        a = e.description,
                        c = n.map((function(e) {
                            return e.value
                        })).filter(Boolean),
                        i = Object(w.useTheme)().bp;
                    return c[0] ? Object(k.b)(w.TableRow, {
                        css: he
                    }, Object(k.b)(w.TableHead, {
                        css: ve
                    }, t && Object(k.b)("h3", {
                        css: ge
                    }, t)), c.map((function(e, t) {
                        var n;
                        return Object(k.b)(w.TableCell, {
                            key: t,
                            css: Object(m.a)((n = {
                                display: "flex",
                                justifyContent: "center",
                                height: 140,
                                maxWidth: 360,
                                position: "relative",
                                flexBasis: "100%",
                                margin: "10px 20px 20px"
                            }, Object(r.a)(n, i.FROM_TABLET, {
                                margin: "10px 10px 20px",
                                flexBasis: "33.33%",
                                height: 150
                            }), Object(r.a)(n, i.FROM_DESKTOP, {
                                height: 200
                            }), n), "")
                        }, Object(k.b)("iframe", {
                            title: a || void 0,
                            css: ye,
                            src: "https://www.youtube.com/embed/".concat(e, "?showinfo=0&modestbranding=1&rel=0"),
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;",
                            allowFullScreen: !0
                        }))
                    }))) : null
                },
                xe = n("azwC"),
                Ee = n("ePoE"),
                Te = n("Zx7g"),
                Re = n("Gtiz"),
                Pe = n("rpJ/"),
                Se = n("AsJ6"),
                ke = Re.actions.cancel,
                Ce = Object(Pe.a)({
                    id: "search",
                    initial: "idle",
                    context: {
                        phrase: "",
                        results: []
                    },
                    on: {
                        CLEAR: {
                            actions: "clear"
                        },
                        FETCH_RESULTS: {
                            target: "fetching"
                        },
                        SET_PHRASE: {
                            actions: ["assignInput", "cancelPreviousFetchingEvent", "sendFetchingEvent"]
                        }
                    },
                    states: {
                        idle: {},
                        error: {},
                        fetching: {
                            invoke: {
                                id: "searchProductsService",
                                src: function(e) {
                                    return Object(f.e)({
                                        query: e.phrase
                                    })
                                },
                                onDone: {
                                    target: "idle",
                                    actions: Object(Se.b)({
                                        results: function(e, t) {
                                            return t.data
                                        }
                                    })
                                },
                                onError: {
                                    target: "error"
                                }
                            }
                        }
                    }
                }, {
                    actions: {
                        clear: Object(Se.b)({
                            phrase: function(e) {
                                return ""
                            },
                            results: function(e) {
                                return []
                            }
                        }),
                        assignInput: Object(Se.b)({
                            phrase: function(e, t) {
                                if (! function(e, t) {
                                        if (e.type !== t) throw new Error("Invalid event");
                                        return !0
                                    }(t, "SET_PHRASE")) throw new Error("Invalid event");
                                return t.phrase
                            }
                        }),
                        cancelPreviousFetchingEvent: ke("fetchResultsEvent"),
                        sendFetchingEvent: Object(Se.q)("FETCH_RESULTS", {
                            delay: 300,
                            id: "fetchResultsEvent"
                        })
                    }
                }),
                _e = n("QGQh"),
                Ie = (p.a.createElement, function(e) {
                    var t = e.phrase,
                        n = e.result,
                        a = e.onDeviceSelect,
                        c = Object(w.useTheme)(),
                        i = c.colors,
                        o = c.selectors,
                        s = p.a.useState("IDLE"),
                        u = Object(v.a)(s, 2),
                        l = u[0],
                        b = u[1],
                        d = p.a.useCallback((function() {
                            b("LOADING"), a(n.productId)
                        }), [n, a]),
                        O = p.a.useCallback((function(e) {
                            ("Enter" === e.key || 13 === e.keyCode) && d()
                        }), [d]),
                        f = "LOADING" === l;
                    return Object(k.b)("li", {
                        css: Object(m.a)({
                            ":not(:last-of-type)": {
                                borderBottom: "1px solid ".concat(i.STEEL)
                            }
                        }, "")
                    }, Object(k.b)("div", {
                        tabIndex: 0,
                        onClick: d,
                        onKeyPress: O,
                        role: "button",
                        css: Object(m.a)(Object(r.a)({
                            background: "none",
                            border: "none",
                            color: i.BLACK,
                            display: "flex",
                            alignItems: "center",
                            fontSize: 16,
                            padding: 15,
                            textAlign: "left",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            transition: "background-color .15s"
                        }, o.ON_FOCUS_OR_HOVER, {
                            backgroundColor: i.DOVE
                        }), "")
                    }, Object(k.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: Object(_e.a)(t, n.name)
                        }
                    }), f && Object(k.b)(w.Spinner, {
                        color: "BLACK",
                        size: 18
                    })))
                }),
                Ae = (p.a.createElement, function(e) {
                    var t = e.phrase,
                        n = e.results,
                        a = e.onDeviceSelect,
                        c = Object(w.useTheme)(),
                        i = c.colors,
                        o = c.zIndex,
                        s = c.bp,
                        u = n.length > 0,
                        l = Object(F.useTransition)(u, {
                            from: {
                                opacity: 0,
                                transform: "translateY(-10px)"
                            },
                            enter: {
                                opacity: 1,
                                transform: "translateY(0px)"
                            },
                            leave: {
                                opacity: 0,
                                transform: "translateY(-10px)"
                            }
                        });
                    return Object(k.b)("div", {
                        css: Object(m.a)({
                            left: 0,
                            right: 0,
                            position: "absolute",
                            zIndex: o.LAYER_1
                        }, "")
                    }, l((function(e, c) {
                        return c && Object(k.b)(F.animated.div, {
                            style: e
                        }, Object(k.b)(w.CustomScroll, {
                            offset: "4px",
                            css: Object(m.a)(Object(r.a)({
                                maxHeight: "50vh",
                                boxShadow: "1px 2px 10px 0px rgba(0,0,0,0.2)"
                            }, s.FROM_TABLET, {
                                maxHeight: "33vh"
                            }), "")
                        }, Object(k.b)("ul", {
                            css: Object(m.a)({
                                background: i.ASH
                            }, "")
                        }, n.map((function(e, n) {
                            return Object(k.b)(Ie, {
                                key: e.productId,
                                result: e,
                                phrase: t,
                                onDeviceSelect: a
                            })
                        })))))
                    })))
                });
            p.a.createElement;
            var De = {
                    name: "1kxonj9",
                    styles: "width:100%;position:relative;"
                },
                Fe = function(e) {
                    var t = e.onDeviceSelect,
                        n = e.inputRef,
                        a = Object(w.useTheme)(),
                        c = a.colors,
                        i = a.selectors,
                        o = Object(xe.useMachine)(Ce),
                        s = Object(v.a)(o, 2),
                        u = s[0],
                        l = s[1],
                        b = Object(P.a)(),
                        d = u.context,
                        O = d.phrase,
                        f = d.results,
                        j = f && f.length > 0,
                        h = p.a.useRef(null),
                        g = p.a.useCallback((function(e) {
                            var t = e.target.value;
                            l({
                                type: "SET_PHRASE",
                                phrase: t
                            })
                        }), [l]),
                        y = p.a.useCallback((function() {
                            l({
                                type: "CLEAR"
                            })
                        }), [l]),
                        x = p.a.useCallback((function(e) {
                            t(e), setTimeout((function() {
                                b.current && y()
                            }), 200)
                        }), [y, t, b]);
                    return Object(Te.a)(h, y), Object(k.b)("div", {
                        ref: h,
                        css: De
                    }, Object(k.b)(Ee.b, {
                        type: "text",
                        value: O,
                        onChange: g,
                        name: "Wyszukaj i dodaj urz\u0105dzenie",
                        placeholder: "Wyszukaj i dodaj urz\u0105dzenie",
                        prefix: Object(k.b)(A.a, {
                            name: "search",
                            width: 20,
                            height: 20
                        }),
                        suffix: j ? Object(k.b)(w.IconButton, {
                            tabIndex: 0,
                            title: "Zamknij",
                            iconName: "close-slim",
                            onClick: y,
                            css: Object(m.a)(Object(r.a)({
                                padding: "8px 0 4px 4px",
                                svg: {
                                    transition: "color .15s"
                                }
                            }, i.ON_FOCUS_OR_HOVER, {
                                svg: {
                                    color: c.ORANGE_DARK
                                }
                            }), "")
                        }) : null,
                        wrapperCss: {
                            padding: 15,
                            backgroundColor: c.ASH
                        },
                        ref: n
                    }), Object(k.b)(Ae, {
                        phrase: O,
                        results: f,
                        onDeviceSelect: x
                    }))
                };

            function Le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Le(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Me = {};
            p.a.createElement;
            var Be = {
                    name: "6xix1i",
                    styles: "font-size:16px;"
                },
                He = {
                    name: "1y7078m",
                    styles: "flex-basis:25%;"
                },
                Ne = {
                    name: "12fq6lj",
                    styles: "width:100%;display:block;margin-bottom:40px;"
                },
                Ve = p.a.memo((function(e) {
                    var t, n = e.elements,
                        a = e.presentation,
                        c = Object(w.useTheme)(),
                        i = c.bp,
                        o = c.colors,
                        s = c.zIndex,
                        u = Object(R.a)(),
                        b = Object(P.a)(),
                        d = ce(n),
                        O = p.a.useState(u ? d.slice(0, 2) : d),
                        j = Object(v.a)(O, 2),
                        g = j[0],
                        C = j[1],
                        I = p.a.useRef(null),
                        A = p.a.useState(!1),
                        D = Object(v.a)(A, 2),
                        F = D[0],
                        L = D[1],
                        z = function(e) {
                            var t = e.presentation,
                                n = e.elements;
                            return t.categories.map((function(e) {
                                var t, r = null,
                                    a = [],
                                    c = [];
                                if ("IMAGES" === e.type) {
                                    var i = n.map((function(e) {
                                        return e.images
                                    }));
                                    return {
                                        name: "Zdj\u0119cia",
                                        type: e.type,
                                        values: i,
                                        description: r
                                    }
                                }
                                if ("MAIN_SCORE" === e.type && (t = e.name || "", r = e.desc), "OPINIONS" === e.type) {
                                    var o, s = ne(n);
                                    try {
                                        for (s.s(); !(o = s.n()).done;) {
                                            var u = o.value,
                                                l = u.opinions.averageRating;
                                            t = e.name || "", r = e.desc, a.push({
                                                deviceId: u.id,
                                                type: "STARS",
                                                value: l ? l.toFixed(1) : null
                                            })
                                        }
                                    } catch (F) {
                                        s.e(F)
                                    } finally {
                                        s.f()
                                    }
                                }
                                if (e.scoreFeaturePointer) {
                                    var b, p = ne(n);
                                    try {
                                        for (p.s(); !(b = p.n()).done;) {
                                            var d = b.value,
                                                O = d.characteristics[e.scoreFeaturePointer.groupId],
                                                f = e.scoreFeaturePointer.id.toLowerCase(),
                                                j = null === O || void 0 === O ? void 0 : O.features[f];
                                            j ? (t = e.name || "", a.push({
                                                deviceId: d.id,
                                                type: e.scoreFeaturePointer.type,
                                                value: j.featureValues[0].value
                                            })) : a.push({
                                                deviceId: d.id,
                                                type: null,
                                                value: null
                                            })
                                        }
                                    } catch (F) {
                                        p.e(F)
                                    } finally {
                                        p.f()
                                    }
                                }
                                if (e.properties) {
                                    var m, h = ne(e.properties);
                                    try {
                                        for (h.s(); !(m = h.n()).done;) {
                                            var v, g = m.value,
                                                y = void 0,
                                                w = g.groupId,
                                                x = g.type,
                                                E = g.id ? g.id.toLowerCase() : "",
                                                T = [],
                                                R = ne(n);
                                            try {
                                                for (R.s(); !(v = R.n()).done;) {
                                                    var P = v.value,
                                                        S = P.characteristics[w];
                                                    if (S) {
                                                        var k = S.features[E];
                                                        if (k) {
                                                            var C = k.featureUnit,
                                                                _ = k.featureValues;
                                                            y = g.name || "", t = e.name || "", r = e.desc, T.push({
                                                                unit: C,
                                                                productId: P.id,
                                                                value: _[0].value
                                                            })
                                                        } else T.push({
                                                            unit: null,
                                                            productId: P.id,
                                                            value: null
                                                        })
                                                    } else T.push({
                                                        unit: null,
                                                        value: null,
                                                        productId: E
                                                    });
                                                    "VIDEO" === x && P.video && T.push({
                                                        unit: null,
                                                        value: P.video.source,
                                                        productId: P.id
                                                    })
                                                }
                                            } catch (F) {
                                                R.e(F)
                                            } finally {
                                                R.f()
                                            }
                                            var I = !T.map((function(e) {
                                                return e.value
                                            })).every((function(e, t, n) {
                                                return e === n[0]
                                            }));
                                            c.push({
                                                type: x,
                                                name: y,
                                                values: T,
                                                description: g.desc,
                                                hasUniqueValues: I
                                            })
                                        }
                                    } catch (F) {
                                        h.e(F)
                                    } finally {
                                        h.f()
                                    }
                                }
                                var A = (null === c || void 0 === c ? void 0 : c.filter((function(e) {
                                        return e.values.some((function(e) {
                                            return e.value
                                        }))
                                    }))) || [],
                                    D = A.map((function(e) {
                                        return e.hasUniqueValues
                                    })).includes(!0);
                                return {
                                    scores: a,
                                    name: t,
                                    type: e.type,
                                    values: A,
                                    description: r,
                                    hasUniqueValues: D
                                }
                            }))
                        }({
                            elements: g,
                            presentation: a
                        }),
                        M = p.a.useCallback((function(e) {
                            C((function(t) {
                                return t.filter((function(t) {
                                    return t.id !== e
                                }))
                            })), g.length <= 2 && L(!1)
                        }), [g]),
                        B = p.a.useCallback((function() {
                            if (I.current) {
                                var e = I.current;
                                Object(S.a)(e, {
                                    behavior: "smooth",
                                    block: "end"
                                }).then((function() {
                                    return e ? e.focus() : null
                                }))
                            }
                        }), []);
                    return Object(k.b)(x.a, {
                        backgroundColor: "PEARL",
                        css: Object(m.a)(Object(r.a)({
                            padding: "30px 0"
                        }, i.ONLY_MOBILE, {
                            margin: 0
                        }), "")
                    }, Object(k.b)(y.a, null, Object(k.b)("title", null, ie(g, "Por\xf3wnanie ", " | Orange Polska", "vs", "Por\xf3wnywarka telefon\xf3w i smartfon\xf3w | Orange Polska")), Object(k.b)("meta", {
                        name: "description",
                        content: ie(g, "", ". Por\xf3wnanie specyfikacji telefon\xf3w i danych technicznych smartfon\xf3w. Zobacz cechy wsp\xf3lne i r\xf3\u017cnice. Kt\xf3ry jest lepszy?", "czy", "Por\xf3wnaj dane od 2 do 3 telefon\xf3w. Por\xf3wnywarka telefon\xf3w Orange to \u0142atwy, szybki i skuteczny spos\xf3b na por\xf3wnanie modeli smartfon\xf3w przed zakupem. Dzi\u0119ki por\xf3wnywarce smartfon\xf3w dowiesz si\u0119 wi\u0119cej o ich cenie, najwa\u017cniejszych elementach, takich jak aparat, bateria, pami\u0119\u0107, ekran i wiele innych.")
                    })), Object(k.b)(E.a, null, Object(k.b)(T.a, {
                        wrapperCss: {
                            top: 0,
                            zIndex: s.LAYER_4,
                            height: "100%"
                        },
                        withoutCloseOnSwipe: !0,
                        customScrollCss: {
                            paddingBottom: 0,
                            maxHeight: "100%"
                        },
                        contentCss: {
                            paddingTop: 0
                        }
                    }), Object(k.b)("div", {
                        css: Object(m.a)((t = {
                            margin: "0 auto 20px auto"
                        }, Object(r.a)(t, i.FROM_TABLET, {
                            marginBottom: 30
                        }), Object(r.a)(t, i.FROM_DESKTOP, {
                            maxWidth: 650,
                            marginBottom: 50
                        }), t), "")
                    }, Object(k.b)(Fe, {
                        onDeviceSelect: function(e) {
                            (function(e) {
                                var t, n;
                                return l.a.async((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (!Me[e]) {
                                                r.next = 2;
                                                break
                                            }
                                            return r.abrupt("return", Me[e]);
                                        case 2:
                                            return r.next = 4, l.a.awrap(Object(f.b)({
                                                ids: [e]
                                            }));
                                        case 4:
                                            if (t = r.sent) {
                                                r.next = 7;
                                                break
                                            }
                                            return r.abrupt("return", null);
                                        case 7:
                                            return n = ze({}, t[0].product, {
                                                name: t[0].name,
                                                id: t[0].id,
                                                canonicalUrl: t[0].canonicalUrl
                                            }), Me[e] = n, r.abrupt("return", n);
                                        case 10:
                                        case "end":
                                            return r.stop()
                                    }
                                }), null, null, null, Promise)
                            })(e).then((function(e) {
                                if (e && b.current) {
                                    var t = ce(Array(e));
                                    C((function(e) {
                                        return [].concat(Object(h.a)(e), Object(h.a)(t))
                                    }))
                                }
                            }))
                        },
                        inputRef: I
                    })), Object(k.b)("div", {
                        css: Object(m.a)(Object(r.a)({}, i.ONLY_MOBILE, {
                            margin: "0 20px"
                        }), "")
                    }, Object(k.b)(_, {
                        elements: g
                    }), Object(k.b)(me, {
                        elements: g,
                        onClose: M,
                        addDevice: B
                    })), g.length > 1 && Object(k.b)("div", {
                        css: Object(m.a)({
                            borderRadius: 2,
                            marginBottom: 10,
                            padding: "20px 15px",
                            backgroundColor: o.WHITE
                        }, "")
                    }, Object(k.b)(w.Checkbox, {
                        name: "showOnlyDifferences",
                        onChange: function() {
                            return L(!F)
                        },
                        defaultChecked: F
                    }, Object(k.b)("span", {
                        css: Be
                    }, "Zobacz tylko r\xf3\u017cnice"))), z.map((function(e, t) {
                        var n;
                        return !e || !e.name || !e.hasUniqueValues && F ? null : "IMAGES" === e.type ? Object(k.b)(Q, {
                            title: e.name,
                            key: "".concat(e.name, "-").concat(t),
                            description: e.description
                        }, Object(k.b)(w.Table, {
                            captionText: e.name || ""
                        }, Object(k.b)(w.TableBody, null, e.values && e.values.map((function(e, t) {
                            return Object(k.b)(w.TableRow, {
                                key: t,
                                css: He
                            }, e.map((function(e, t) {
                                return Object(k.b)("img", {
                                    key: t,
                                    src: e.source,
                                    alt: "",
                                    css: Ne
                                })
                            })))
                        }))))) : "MAIN_SCORE" === e.type ? Object(k.b)(ee, {
                            key: "".concat(e.name, "-").concat(t),
                            elements: g,
                            presentation: a
                        }) : Object(k.b)(Q, {
                            title: e.name,
                            scores: e.scores,
                            key: "".concat(e.name, "-").concat(t),
                            description: e.description,
                            isPermanentlyOpened: F,
                            showScores: !F
                        }, Object(k.b)(w.Table, {
                            captionText: e.name || ""
                        }, Object(k.b)(w.TableBody, null, null === (n = e.values) || void 0 === n ? void 0 : n.map((function(e, t) {
                            if (e.hasUniqueValues || !F) switch (e.type) {
                                case "RAW":
                                    return Object(k.b)(be, {
                                        key: t,
                                        name: e.name,
                                        values: e.values,
                                        description: e.description
                                    });
                                case "VIDEO":
                                    return Object(k.b)(we, {
                                        key: t,
                                        name: e.name,
                                        values: e.values,
                                        description: e.description
                                    });
                                default:
                                    return null
                            }
                        })))))
                    }))))
                }));

            function Ke(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var Ge = function(e) {
                    return e.map((function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ke(Object(n), !0).forEach((function(t) {
                                    Object(r.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e.product, {
                            name: e.name,
                            id: e.id,
                            canonicalUrl: e.canonicalUrl
                        })
                    }))
                },
                Ue = n("Gb8u");
            p.a.createElement;

            function We(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? We(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : We(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Ye() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var Je = O()((function() {
                    return l.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, l.a.awrap(n.e(14).then(n.bind(null, "0TmZ")));
                            case 2:
                                return e.abrupt("return", e.sent.Footer);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["0TmZ"]
                        },
                        modules: ["../../components/Footer"]
                    }
                }),
                Xe = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                Ze = function(e) {
                    Object(i.a)(r, e);
                    var t, n = (t = r, function() {
                        var e, n = Object(s.a)(t);
                        if (Ye()) {
                            var r = Object(s.a)(this).constructor;
                            e = Reflect.construct(n, arguments, r)
                        } else e = n.apply(this, arguments);
                        return Object(o.a)(this, e)
                    });

                    function r() {
                        return Object(a.a)(this, r), n.apply(this, arguments)
                    }
                    return Object(c.a)(r, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.footer,
                                n = e.header,
                                r = e.phones,
                                a = e.content,
                                c = Ge(r),
                                i = a.find((function(e) {
                                    return "DEVICE_COMPARATOR" === e.type
                                }));
                            return Object(k.b)("div", null, n && Object(k.b)(Ue.a, n), i && Object(k.b)("div", {
                                css: Xe
                            }, Object(k.b)(Ve, {
                                elements: c,
                                presentation: i.data
                            })), t && Object(k.b)(Je, t))
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function(e) {
                            var t, n, r, a, c, i, o, s, u;
                            return l.a.async((function(b) {
                                for (;;) switch (b.prev = b.next) {
                                    case 0:
                                        return n = e.req, r = e.res, a = e.asPath, b.next = 3, l.a.awrap(Object(j.b)({
                                            page: "/pwa/porownaj"
                                        }, {
                                            req: n,
                                            res: r
                                        }));
                                    case 3:
                                        return c = b.sent, i = ((null === (t = c.params.find((function(e) {
                                            return "devices" === e.key
                                        }))) || void 0 === t ? void 0 : t.value) || "").split(","), o = (p = a || "", d = "devices", d.length > 0 && (p.split("".concat(d, "="))[1] || "").split("&")[0] || "").split(","), s = o.length > 0 ? o : i, b.next = 9, l.a.awrap(Object(f.b)({
                                            ids: s
                                        }, {
                                            req: n,
                                            res: r
                                        }));
                                    case 9:
                                        return u = b.sent, b.abrupt("return", qe({}, c, {
                                            phones: u
                                        }));
                                    case 11:
                                    case "end":
                                        return b.stop()
                                }
                                var p, d
                            }), null, null, null, Promise)
                        }
                    }]), r
                }(p.a.Component);
            t.default = Ze
        },
        v4L6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("VtSi"),
                a = n.n(r),
                c = n("qnbr"),
                i = function() {
                    var e, t;
                    return a.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, a.a.awrap(Object(c.a)("hapi/pwa/v1/offerSelector/getToken"));
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
        }
    },
    [
        ["bPGv", 1, 2, 0, 4, 3, 5, 6, 9, 13]
    ]
]);
//# sourceMappingURL=porownaj.js.map