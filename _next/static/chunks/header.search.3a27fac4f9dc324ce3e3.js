(window.omniJsonp = window.omniJsonp || []).push([
    [31], {
        N865: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "SubmenuItem", (function() {
                return F
            }));
            var a = n("ERkP"),
                c = n.n(a),
                r = n("I6rk"),
                o = n("cxan"),
                i = n("zjfJ"),
                l = n("5IAQ"),
                s = n("Kq2c"),
                b = n("hgjN"),
                u = n("l1C2"),
                O = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.title,
                        n = e.children,
                        a = e.wrapperCss,
                        c = Object(s.useTheme)(),
                        r = c.colors,
                        o = c.bp;
                    return Object(u.b)("div", {
                        css: Object(l.a)([Object(i.a)({
                            padding: "25px 15px 0 15px"
                        }, o.FROM_TABLET, {
                            padding: "25px 30px 0 30px"
                        }), a], "")
                    }, Object(u.b)("div", null, Object(u.b)("strong", {
                        css: Object(l.a)({
                            fontSize: 14,
                            marginBottom: 20,
                            color: r.DOVE
                        }, "")
                    }, t)), Object(u.b)("ul", null, n))
                })));
            O.displayName = "ResultsCategory";
            var p = n("QGQh"),
                d = n("RIql");
            c.a.createElement;
            var j = {
                    name: "u1jr60",
                    styles: "height:40px;"
                },
                m = {
                    name: "1d0tddh",
                    styles: "overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"
                },
                h = c.a.memo((function(e) {
                    var t, n, a = e.url,
                        c = e.label,
                        r = e.img,
                        o = e.phrase,
                        b = !!r,
                        O = Object(s.useTheme)(),
                        h = O.bp,
                        f = O.colors,
                        g = O.selectors;
                    return Object(u.b)("li", {
                        css: Object(l.a)({
                            borderBottom: "1px solid ".concat(f.STEEL),
                            "&:last-of-type": {
                                borderBottomWidth: 2
                            }
                        }, "")
                    }, Object(u.b)("a", {
                        href: a || Object(d.a)(c),
                        title: b ? "Dowiedz si\u0119 wi\u0119cej o ".concat(c) : "Zobacz wyniki dla has\u0142a ".concat(c),
                        css: Object(l.a)((t = {
                            color: f.WHITE,
                            display: "flex",
                            alignItems: "center",
                            fontSize: 14,
                            padding: r ? "10px 0 " : "15px 0"
                        }, Object(i.a)(t, h.FROM_TABLET, {
                            fontSize: 18
                        }), Object(i.a)(t, g.ON_FOCUS_OR_HOVER, {
                            backgroundColor: f.STONE
                        }), t), "")
                    }, r && Object(u.b)("span", {
                        css: Object(l.a)((n = {
                            display: "none",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }, Object(i.a)(n, h.FROM_TABLET, {
                            display: "inline-block"
                        }), Object(i.a)(n, "width", 40), Object(i.a)(n, "marginRight", 15), n), "")
                    }, Object(u.b)("img", {
                        src: "https://orange.pl".concat(r),
                        css: j,
                        alt: "label"
                    })), Object(u.b)("span", {
                        css: m,
                        dangerouslySetInnerHTML: {
                            __html: Object(p.a)(o, c)
                        }
                    })))
                }));
            h.displayName = "Result";
            var f = n("tHt9"),
                g = n("zygG");

            function v(e) {
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return y(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
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
                var a, c, r = !0,
                    o = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return r = e.done, e
                    },
                    e: function(e) {
                        o = !0, c = e
                    },
                    f: function() {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (o) throw c
                        }
                    }
                }
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            var w = function(e) {
                    for (var t = function(e) {
                            var t, n = [],
                                a = {},
                                c = v(e);
                            try {
                                for (c.s(); !(t = c.n()).done;) {
                                    var r = t.value,
                                        o = r.category;
                                    o ? (o in a || (a[o] = []), a[o].push(r)) : n.push(r)
                                }
                            } catch (i) {
                                c.e(i)
                            } finally {
                                c.f()
                            }
                            return {
                                categories: a,
                                links: n
                            }
                        }(e), n = t.categories, a = t.links, c = [], r = 0, o = Object.entries(n); r < o.length; r++) {
                        var i = Object(g.a)(o[r], 2),
                            l = i[0],
                            s = i[1];
                        c.push({
                            title: l,
                            results: s
                        })
                    }
                    return c.push({
                        title: "Linki",
                        results: a
                    }), c
                },
                x = n("xWEo");
            c.a.createElement;
            var E = {
                    name: "ymodvo",
                    styles: "display:inline-block;margin-right:15px;"
                },
                k = {
                    name: "1d0tddh",
                    styles: "overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"
                },
                S = function() {
                    var e = Object(s.useTheme)(),
                        t = e.bp,
                        n = e.colors;
                    return Object(u.b)("li", null, Object(u.b)("div", {
                        css: Object(l.a)(Object(i.a)({
                            color: n.WHITE,
                            display: "flex",
                            alignItems: "center",
                            fontSize: 14
                        }, t.FROM_TABLET, {
                            fontSize: 18,
                            padding: "0 20px 20px 0"
                        }), "")
                    }, Object(u.b)("span", {
                        css: E
                    }, Object(u.b)(x.a, {
                        name: "warning",
                        width: 25,
                        height: 25
                    })), Object(u.b)("span", {
                        css: k
                    }, Object(u.b)("span", {
                        css: Object(l.a)(Object(i.a)({
                            display: "block",
                            fontSize: 14,
                            lineHeight: "20px"
                        }, t.FROM_TABLET, {
                            display: "inline",
                            fontSize: 18
                        }), "")
                    }, "Niewystarczaj\u0105ca ilo\u015b\u0107 znak\xf3w.", " "), "Spr\xf3buj ponownie.")))
                };
            S.displayName = "Warning";
            c.a.createElement;
            var T = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                A = {
                    name: "1alnzgs",
                    styles: "max-height:70vh;"
                },
                R = {
                    name: "gx5m19",
                    styles: "padding:30px;font-size:14px;"
                },
                N = c.a.memo((function(e) {
                    var t, n = e.data,
                        a = n.results,
                        r = void 0 === a ? [] : a,
                        p = n.phrase,
                        j = void 0 === p ? "" : p,
                        m = n.loading,
                        g = Object(s.useTheme)(),
                        v = g.bp,
                        y = g.colors,
                        x = c.a.useMemo((function() {
                            return null !== r && r.length > 0 && j.length > 1 && !m
                        }), [r, j, m]),
                        E = c.a.useMemo((function() {
                            return x ? w(r || []) : []
                        }), [x, r]),
                        k = 1 === j.length && !x;
                    return j ? Object(u.b)(f.a, {
                        css: T
                    }, Object(u.b)(b.a, {
                        returnFocus: !0,
                        autoFocus: !1,
                        group: "search"
                    }, Object(u.b)("div", {
                        css: Object(l.a)((t = {
                            top: 0,
                            left: 0,
                            right: 0,
                            position: "absolute",
                            height: "calc(100vh - 100vh / 6.4)",
                            width: "100%",
                            backgroundColor: y.BLACK
                        }, Object(i.a)(t, v.FROM_TABLET, {
                            left: "auto",
                            height: "auto",
                            backgroundColor: y.RAVEN,
                            width: "calc(100vw - 72px)"
                        }), Object(i.a)(t, v.FROM_DESKTOP, {
                            maxWidth: "60%"
                        }), t), "")
                    }, Object(u.b)("div", {
                        css: Object(l.a)({
                            borderTop: "2px solid ".concat(y.ORANGE_LIGHT),
                            paddingRight: 5
                        }, "")
                    }, Object(u.b)(s.CustomScroll, {
                        variant: "DARK",
                        offset: 5,
                        css: A
                    }, k && Object(u.b)(O, {
                        title: "",
                        wrapperCss: Object(i.a)({}, v.FROM_TABLET, {
                            paddingLeft: 15
                        })
                    }, Object(u.b)(S, null)), E.map((function(e) {
                        return Object(u.b)(O, {
                            key: e.title,
                            title: e.title
                        }, e.results.map((function(e) {
                            return Object(u.b)(h, Object(o.a)({
                                key: e.value
                            }, e, {
                                phrase: j
                            }))
                        })))
                    })))), x && Object(u.b)("div", {
                        css: R
                    }, Object(u.b)(s.A, {
                        variant: "ON_DARK_BACKGROUND",
                        href: Object(d.a)(j)
                    }, "Zobacz wszystkie wyniki"))))) : null
                }));
            N.displayName = "TabletDesktopSubmenuItem";
            var C = n("kc86"),
                I = n("nwNh"),
                _ = n("t5YO"),
                z = n("DLhp"),
                B = n("cgBw"),
                L = n("sGZ7");
            c.a.createElement;
            var M = {
                    name: "7w6khc",
                    styles: "padding-top:20px;"
                },
                D = c.a.memo((function() {
                    var e = Object(s.useTheme)(),
                        t = e.colors,
                        n = e.selectors,
                        a = Object(C.a)(B.a),
                        r = a.value,
                        b = a.setParams,
                        p = a.loading,
                        j = c.a.useState(""),
                        m = Object(g.a)(j, 2),
                        v = m[0],
                        y = m[1],
                        x = Object(L.c)(),
                        E = x.dispatch,
                        k = x.isNavbarCollapsed,
                        T = c.a.useCallback((function(e) {
                            var t = e.target.value;
                            y(t), t.trim().length > 1 && b({
                                query: t
                            })
                        }), [b]),
                        A = c.a.useCallback((function() {
                            y(""), E({
                                type: "closeSubmenu"
                            })
                        }), [E]),
                        R = c.a.useMemo((function() {
                            return !!r && r.length > 0 && v.length > 1 && !p
                        }), [r, v, p]),
                        N = Object(_.a)(),
                        D = c.a.useMemo((function() {
                            return R ? w(r || []) : []
                        }), [R, r]),
                        F = c.a.useCallback((function(e) {
                            e.preventDefault(), p || (window.location.href = Object(d.a)(v))
                        }), [p, v]),
                        K = 1 === v.length && !R;
                    return Object(u.b)(f.a, {
                        backgroundColor: "BLACK",
                        css: Object(l.a)({
                            position: "relative",
                            height: "calc(100vh - 80px);",
                            color: t.WHITE,
                            paddingTop: 15
                        }, "")
                    }, Object(u.b)("h3", {
                        css: Object(l.a)({
                            color: t.ORANGE_DARK,
                            display: "flex",
                            marginBottom: 15
                        }, "")
                    }, Object(u.b)("span", null, "Wyszukiwarka"), Object(u.b)(s.IconButton, {
                        iconName: "close-slim",
                        title: "Zamknij",
                        color: t.WHITE,
                        onClick: A,
                        css: Object(l.a)(Object(i.a)({
                            marginLeft: "auto"
                        }, n.ON_FOCUS, {
                            svg: {
                                color: t.ORANGE_DARK
                            }
                        }), "")
                    })), Object(u.b)("form", {
                        onSubmit: F,
                        css: Object(l.a)({
                            display: "flex",
                            alignItems: "center",
                            borderBottom: "2px solid ".concat(t.ORANGE_DARK),
                            padding: 15
                        }, "")
                    }, Object(u.b)(z.a, {
                        phrase: v,
                        onChange: T,
                        showSearchIcon: !1
                    }), Object(u.b)(s.IconButton, {
                        iconName: "search",
                        type: "submit",
                        title: "Szukaj",
                        color: t.WHITE,
                        width: 25,
                        height: 25,
                        css: Object(l.a)(Object(i.a)({}, n.ON_FOCUS, {
                            svg: {
                                color: t.ORANGE_DARK
                            }
                        }), "")
                    })), Object(u.b)("div", null, Object(u.b)(I.a, null, Object(u.b)(s.CustomScroll, {
                        variant: "DARK",
                        offset: 10,
                        css: Object(l.a)({
                            height: N.height - (k ? 50 : 80) - 200,
                            WebkitOverflowScrolling: "touch"
                        }, "")
                    }, K && Object(u.b)("ul", {
                        css: M
                    }, Object(u.b)(S, null)), D.map((function(e) {
                        return Object(u.b)(O, {
                            key: e.title,
                            title: e.title
                        }, e.results.map((function(e) {
                            return Object(u.b)(h, Object(o.a)({
                                key: e.value
                            }, e, {
                                phrase: v
                            }))
                        })))
                    }))))))
                }));
            D.displayName = "MobileSubmenuItem";
            c.a.createElement;
            var F = c.a.memo((function(e) {
                return !Object(r.a)() && function(e) {
                    return "data" in e && !!e.data
                }(e) ? Object(u.b)(N, e) : Object(u.b)(D, e)
            }));
            F.displayName = "SubmenuItem"
        },
        QGQh: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e, t) {
                return e ? t.replace(new RegExp("(".concat(function(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                }(e), ")"), "ig"), "<b>$1</b>") : t
            }
        }
    }
]);
//# sourceMappingURL=header.search.3a27fac4f9dc324ce3e3.js.map