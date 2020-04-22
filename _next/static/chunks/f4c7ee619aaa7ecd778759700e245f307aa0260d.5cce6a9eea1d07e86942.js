(window.omniJsonp = window.omniJsonp || []).push([
    [9], {
        "5s2p": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 31536e7,
                    a = "".concat(e, "=").concat(t, ";"),
                    r = "";
                if (null !== n) {
                    var o = new Date;
                    o.setTime(o.getTime() + n), r = "expires=".concat(o.toUTCString(), ";")
                }
                document.cookie = a + r
            }
        },
        BFfR: function(e, t, n) {
            "use strict";

            function a(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            n.d(t, "a", (function() {
                return a
            }))
        },
        DLhp: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return f
            }));
            var a = n("zjfJ"),
                r = n("5IAQ"),
                o = n("ERkP"),
                c = n.n(o),
                i = n("Kq2c"),
                u = n("mMsu"),
                s = n("I6rk"),
                l = n("xWEo"),
                b = n("l1C2");
            c.a.createElement;
            var d = {
                    name: "7pf6at",
                    styles: "display:flex;align-items:center;width:100%;"
                },
                f = c.a.memo((function(e) {
                    var t, n = e.onChange,
                        o = e.onClose,
                        c = e.phrase,
                        f = e.showSearchIcon,
                        p = void 0 === f || f,
                        O = Object(i.useTheme)(),
                        m = O.colors,
                        h = O.bp,
                        j = O.selectors,
                        v = Object(s.a)(),
                        g = Object(u.a)();
                    return Object(b.b)("div", {
                        css: d
                    }, p && Object(b.b)(l.a, {
                        name: "search",
                        width: 26,
                        height: 26,
                        color: m.WHITE
                    }), Object(b.b)(i.VisuallyHidden, null, Object(b.b)("label", {
                        htmlFor: g
                    }, "Wpisz czego szukasz")), Object(b.b)("input", {
                        id: g,
                        autoFocus: !v,
                        type: "text",
                        autoComplete: "off",
                        "aria-label": "Wpisz czego szukasz",
                        placeholder: "Wpisz czego szukasz",
                        css: Object(r.a)((t = {
                            width: "100%",
                            flex: 1,
                            color: m.WHITE,
                            backgroundColor: m.BLACK,
                            border: "none",
                            outline: "none",
                            fontWeight: "bold",
                            fontSize: 14,
                            "&::-ms-clear": {
                                display: "none"
                            }
                        }, Object(a.a)(t, h.FROM_TABLET, {
                            fontSize: 24,
                            marginLeft: 24
                        }), Object(a.a)(t, "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration", {
                            display: "none"
                        }), Object(a.a)(t, "&::-ms-clear, &::-ms-reveal", {
                            display: "none",
                            width: 0,
                            height: 0
                        }), t), ""),
                        onChange: n,
                        value: c
                    }), o && Object(b.b)(i.IconButton, {
                        iconName: "close-slim",
                        title: "Zamknij wyszukiwark\u0119",
                        onClick: o,
                        width: 20,
                        height: 20,
                        color: m.WHITE,
                        css: Object(r.a)(Object(a.a)({}, j.ON_FOCUS_OR_HOVER, {
                            svg: {
                                color: m.ORANGE_DARK,
                                transition: "color .15s"
                            }
                        }), "")
                    }))
                }));
            f.displayName = "Input"
        },
        Gb8u: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return xe
            }));
            var a = n("zjfJ"),
                r = n("5IAQ"),
                o = n("ERkP"),
                c = n.n(o),
                i = n("Kq2c"),
                u = n("zygG"),
                s = n("RN2F"),
                l = n.n(s),
                b = n("cxan"),
                d = n("tHt9"),
                f = n("5s2p"),
                p = n("f4ym"),
                O = n("l1C2");
            c.a.createElement;
            var m = {
                    name: "1sb0cpv",
                    styles: "height:100%;:first-of-type{a{padding-left:20px;}}"
                },
                h = c.a.memo((function(e) {
                    var t, n = e.text,
                        o = e.isActive,
                        c = e.action,
                        u = e.context,
                        s = Object(i.useTheme)(),
                        l = s.colors,
                        b = s.bp,
                        d = s.selectors;
                    return Object(O.b)("li", {
                        css: m
                    }, Object(O.b)(p.a, {
                        href: c,
                        passHref: !0
                    }, Object(O.b)("a", {
                        onClick: function() {
                            "B2B_SOHO" !== u && "B2C" !== u || Object(f.a)("opl_market", u)
                        },
                        role: "button",
                        css: Object(r.a)((t = {
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            padding: "0 13px",
                            fontSize: 10,
                            transition: "background-color, color",
                            transitionDuration: ".15s",
                            backgroundColor: o ? l.BLACK : void 0,
                            color: o ? l.ORANGE_DARK : l.CHROME,
                            fontWeight: o ? "bold" : "inherit",
                            whiteSpace: "nowrap",
                            outline: "none",
                            cursor: "pointer"
                        }, Object(a.a)(t, b.FROM_LARGE_MOBILE, {
                            fontSize: 12
                        }), Object(a.a)(t, b.FROM_TABLET, {
                            padding: "0 20px"
                        }), Object(a.a)(t, d.ON_FOCUS_OR_HOVER, {
                            backgroundColor: l.BLACK,
                            color: l.ORANGE_DARK
                        }), t), "")
                    }, n)))
                }));
            h.displayName = "TopBarElement";
            var j = n("sGZ7");
            c.a.createElement;
            var v = {
                    name: "1ssbn0c",
                    styles: "height:30px;"
                },
                g = {
                    name: "ab8yd1",
                    styles: "display:flex;height:100%;"
                },
                y = c.a.memo((function(e) {
                    var t, n = e.elements,
                        o = e.context,
                        c = Object(i.useTheme)().bp,
                        u = Object(j.c)().isNavbarCollapsed;
                    return Object(O.b)(d.a, {
                        backgroundColor: "RAVEN",
                        css: Object(r.a)((t = {}, Object(a.a)(t, c.ONLY_MOBILE, {
                            margin: "0"
                        }), Object(a.a)(t, c.FROM_TABLET, {
                            padding: 0
                        }), t), "")
                    }, Object(O.b)("nav", {
                        css: v,
                        "aria-expanded": u ? "false" : "true"
                    }, Object(O.b)("ul", {
                        css: g
                    }, n.map((function(e) {
                        return Object(O.b)(h, Object(b.a)({
                            isActive: o === e.context,
                            key: e.id
                        }, e))
                    })))))
                }));
            y.displayName = "TopBar";
            var E = n("xWEo"),
                x = n("LsVC"),
                T = n("y6sE"),
                w = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.action,
                        n = e.title,
                        o = e.children,
                        c = e.onClick,
                        u = Object(i.useTheme)(),
                        s = u.colors,
                        l = u.bp,
                        b = u.selectors,
                        d = Object(T.b)().market;
                    return Object(O.b)("a", {
                        href: t,
                        onClick: c,
                        title: n || void 0,
                        css: Object(r.a)(Object(a.a)({
                            display: "inline-block",
                            color: s.WHITE,
                            outline: "none"
                        }, b.ON_FOCUS_OR_HOVER, {
                            svg: {
                                color: s.ORANGE_LIGHT,
                                "& + span": Object(a.a)({
                                    opacity: 1,
                                    color: s.ORANGE_LIGHT
                                }, l.FROM_TABLET, {
                                    color: s.WHITE
                                })
                            }
                        }), ""),
                        id: Object(x.a)("Menu_".concat(d), n)
                    }, o)
                })));
            w.displayName = "LinkItem";
            c.a.createElement;
            var k = c.a.memo((function(e) {
                var t = e.children,
                    n = e.data,
                    o = e.id,
                    u = e.title,
                    s = e.type,
                    l = Object(j.c)().dispatch,
                    b = Object(T.b)().market,
                    d = Object(i.useTheme)(),
                    f = d.selectors,
                    p = d.colors,
                    m = d.bp,
                    h = c.a.useCallback((function() {
                        l({
                            type: "submenu",
                            payload: {
                                id: o,
                                data: n,
                                type: s
                            }
                        })
                    }), [n, l, o, s]);
                return Object(O.b)("button", {
                    type: "button",
                    css: Object(r.a)(Object(a.a)({
                        cursor: "pointer",
                        border: "none",
                        background: "none",
                        outline: "none"
                    }, f.ON_FOCUS_OR_HOVER, {
                        svg: {
                            color: p.ORANGE_LIGHT,
                            "& + span": Object(a.a)({
                                opacity: 1,
                                color: p.ORANGE_LIGHT
                            }, m.FROM_TABLET, {
                                color: p.WHITE
                            })
                        }
                    }), ""),
                    onClick: h,
                    id: Object(x.a)("Menu_".concat(b), u)
                }, t)
            }));
            k.displayName = "ExpanderItem";
            var R = n("I6rk"),
                C = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.children,
                        n = Object(j.c)().dispatch,
                        o = Object(i.useTheme)(),
                        u = o.colors,
                        s = o.bp,
                        l = o.selectors,
                        b = Object(T.b)().market,
                        d = c.a.useCallback((function() {
                            n({
                                type: "submenu",
                                payload: {
                                    id: "SEARCH",
                                    type: "SEARCH",
                                    data: null
                                }
                            })
                        }), [n]);
                    return Object(O.b)("button", {
                        type: "button",
                        id: "Menu_".concat(b, "_Search"),
                        onClick: d,
                        css: Object(r.a)(Object(a.a)({
                            background: "none",
                            border: "none",
                            outline: "none"
                        }, l.ON_FOCUS_OR_HOVER, {
                            svg: {
                                color: u.ORANGE_LIGHT,
                                "& + span": Object(a.a)({
                                    opacity: 1,
                                    color: u.ORANGE_LIGHT
                                }, s.FROM_TABLET, {
                                    color: u.WHITE
                                })
                            }
                        }), "")
                    }, t)
                })));
            C.displayName = "";
            var A = n("kc86"),
                N = n("hgjN"),
                I = n("cgBw"),
                _ = n("RIql"),
                L = n("DLhp"),
                S = (c.a.createElement, c.a.memo((function(e) {
                    var t, n = e.children,
                        o = Object(i.useTheme)(),
                        s = o.bp,
                        l = o.colors,
                        b = o.selectors,
                        d = o.zIndex,
                        f = c.a.useState(!1),
                        p = Object(u.a)(f, 2),
                        m = p[0],
                        h = p[1],
                        v = c.a.useState(""),
                        g = Object(u.a)(v, 2),
                        y = g[0],
                        E = g[1],
                        x = Object(A.a)(I.a),
                        w = x.value,
                        k = x.setParams,
                        R = x.loading,
                        C = c.a.useContext(j.a),
                        S = C.isNavbarCollapsed,
                        M = C.submenu,
                        B = C.dispatch,
                        F = Object(T.b)().market,
                        D = c.a.useCallback((function(e) {
                            var t = e.target.value;
                            E(t), t.trim().length > 1 && k({
                                query: t
                            })
                        }), [k]),
                        H = c.a.useCallback((function() {
                            h(!0), B({
                                type: "closeSubmenu"
                            })
                        }), [B]);
                    c.a.useEffect((function() {
                        S && E("")
                    }), [S]), c.a.useEffect((function() {
                        m && B({
                            type: "submenu",
                            payload: {
                                id: "SEARCH",
                                type: "SEARCH",
                                update: !0,
                                data: {
                                    results: w,
                                    phrase: y,
                                    loading: R
                                }
                            }
                        })
                    }), [w, y, m, R, B]);
                    var P = c.a.useCallback((function() {
                            E(""), h(!1), B({
                                type: "closeSubmenu"
                            })
                        }), [B]),
                        G = c.a.useCallback((function(e) {
                            e.preventDefault(), R || (window.location.href = Object(_.a)(y))
                        }), [R, y]);
                    return c.a.useEffect((function() {
                        M && "SEARCH" !== M.type && (E(""), h(!1))
                    }), [M]), m ? Object(O.b)("div", {
                        css: Object(r.a)((t = {
                            backgroundColor: l.BLACK,
                            top: 0,
                            right: 0,
                            position: "absolute",
                            fontSize: 24,
                            display: "flex",
                            flexDirection: "column",
                            color: l.WHITE,
                            flex: 1,
                            justifyContent: "center",
                            height: "100%",
                            width: "100%"
                        }, Object(a.a)(t, s.FROM_TABLET, {
                            paddingLeft: "1rem",
                            borderLeft: "1px solid ".concat(l.RAVEN),
                            width: "calc(100vw - 104px)",
                            zIndex: d.LAYER_2
                        }), Object(a.a)(t, s.FROM_DESKTOP, {
                            width: "60%"
                        }), t), "")
                    }, Object(O.b)(N.a, {
                        returnFocus: !0,
                        autoFocus: !1,
                        group: "search"
                    }, Object(O.b)("form", {
                        onSubmit: G,
                        action: "#",
                        onKeyDown: function(e) {
                            "Escape" === e.key && P()
                        }
                    }, Object(O.b)(L.a, {
                        onChange: D,
                        onClose: P,
                        phrase: y
                    })))) : Object(O.b)("button", {
                        type: "button",
                        css: Object(r.a)(Object(a.a)({
                            cursor: "pointer",
                            background: "none",
                            outline: "none",
                            border: "none"
                        }, b.ON_FOCUS_OR_HOVER, {
                            svg: {
                                color: l.ORANGE_LIGHT,
                                "& + span": {
                                    opacity: 1
                                }
                            }
                        }), ""),
                        id: "Menu_".concat(F, "_Search"),
                        onClick: H
                    }, n)
                })));
            S.displayName = "TabletDesktopSideMenuItem";
            c.a.createElement;
            var M = c.a.memo((function(e) {
                var t = Object(b.a)({}, e);
                return Object(R.a)() ? Object(O.b)(C, t) : Object(O.b)(S, t)
            }));
            M.displayName = "index";
            var B = n("VtSi"),
                F = n.n(B),
                D = n("HbGN"),
                H = n("cVGl"),
                P = (c.a.createElement, n("ptpn")),
                G = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.action,
                        n = e.children,
                        a = e.title,
                        r = Object(D.a)(e, ["action", "children", "title"]),
                        o = Object(T.b)().user,
                        i = c.a.useCallback((function() {
                            Object(P.a)({
                                prefix: "sufler-"
                            })
                        }), []);
                    return o.isLogged ? Object(O.b)(k, Object(b.a)({}, r, {
                        title: a
                    }), c.a.cloneElement(n, {
                        title: "Twoje Konto"
                    })) : Object(O.b)(w, {
                        action: t,
                        title: a,
                        onClick: i
                    }, n)
                })));
            G.displayName = "SideMenuItem";
            var z = n("GkdP"),
                W = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.icon,
                        n = e.isActive,
                        o = e.title,
                        u = Object(i.useTheme)(),
                        s = u.colors,
                        l = u.bp,
                        b = Object(j.c)().isNavbarCollapsed;
                    return Object(O.b)(c.a.Fragment, null, t && t, Object(O.b)("span", {
                        css: Object(r.a)(Object(a.a)({
                            color: n ? s.ORANGE_DARK : s.WHITE,
                            opacity: 1,
                            fontSize: 10,
                            fontWeight: "bold",
                            display: "block",
                            pointerEvents: "none",
                            transition: "all .15s",
                            transitionProperty: "opacity, color"
                        }, l.FROM_TABLET, {
                            opacity: b ? 0 : 1
                        }), "")
                    }, o))
                })));
            W.displayName = "ActionContent";
            c.a.createElement;
            var K = {
                    SEARCH: M,
                    CART: function(e) {
                        var t, n = e.children,
                            o = Object(D.a)(e, ["children"]),
                            s = Object(i.useTheme)(),
                            l = s.colors,
                            b = s.bp,
                            d = Object(j.c)(),
                            f = d.isNavbarCollapsed,
                            p = d.cartItemsCount,
                            m = c.a.useRef(!0),
                            h = c.a.useRef(p),
                            v = c.a.useState(!1),
                            g = Object(u.a)(v, 2),
                            y = g[0],
                            x = g[1];
                        c.a.useEffect((function() {
                            m.current = !0, null !== p && null === h.current && (h.current = p);
                            return F.a.async((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (y || null === p || null === h.current) {
                                                e.next = 6;
                                                break
                                            }
                                            if (!(p > h.current)) {
                                                e.next = 5;
                                                break
                                            }
                                            return x(!0), e.next = 5, F.a.awrap(Object(H.a)(3e3));
                                        case 5:
                                            m.current && (x(!1), h.current = p);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), null, null, null, Promise),
                                function() {
                                    m.current = !1
                                }
                        }), [h, p, y]);
                        var T = Object(O.b)(c.a.Fragment, null, Object(O.b)("span", {
                            css: Object(r.a)({
                                position: "relative",
                                display: "inline-block",
                                pointerEvents: "none",
                                "&::before": Object(a.a)({
                                    display: p ? "initial" : "none",
                                    position: "absolute",
                                    top: 0,
                                    right: 0,
                                    content: '"'.concat(p, '"'),
                                    color: l.WHITE,
                                    fontSize: 11,
                                    fontWeight: "lighter",
                                    borderRadius: "50%",
                                    width: 15,
                                    height: 15,
                                    textAlign: "center",
                                    background: l.ORANGE_DARK,
                                    transform: "translate(15%,-30%)"
                                }, b.FROM_TABLET, {
                                    fontSize: 13,
                                    width: 16,
                                    height: 16,
                                    transform: "translateY(-30%)"
                                })
                            }, "")
                        }, n), Object(O.b)("div", {
                            css: Object(r.a)((t = {
                                borderRadius: 4,
                                display: "flex",
                                alignItems: "center",
                                padding: "10px 15px",
                                position: "absolute",
                                cursor: "default",
                                right: 20,
                                backgroundColor: l.WHITE,
                                opacity: y ? 1 : 0,
                                boxShadow: " 0 5px 20px 0 rgba(0, 0, 0, 0.2)",
                                top: -50,
                                visibility: y ? "visible" : "hidden",
                                transition: "top .15s, opacity .5s, visibility 0s linear ".concat(y ? 0 : 1, "s")
                            }, Object(a.a)(t, b.FROM_TABLET, {
                                padding: "15px 20px",
                                right: 0,
                                top: f ? 45 : 75
                            }), Object(a.a)(t, "::before", Object(a.a)({
                                content: '""',
                                width: 12,
                                height: 12,
                                position: "absolute",
                                transform: "rotate(45deg)",
                                backgroundColor: l.WHITE,
                                right: 21,
                                bottom: -5
                            }, b.FROM_TABLET, {
                                right: 11,
                                top: -3
                            })), t), "")
                        }, Object(O.b)(E.a, {
                            name: "info-icon",
                            css: Object(r.a)({
                                width: 24,
                                height: 24,
                                cursor: "default",
                                color: "".concat(l.INFO, " !important")
                            }, "")
                        }), Object(O.b)("strong", {
                            css: Object(r.a)(Object(a.a)({
                                fontSize: 14,
                                marginLeft: 10,
                                color: l.BLACK
                            }, b.FROM_TABLET, {
                                fontSize: 16
                            }), "")
                        }, "Dodano do koszyka")));
                        return Object(O.b)(k, o, T)
                    },
                    CONTACT: k,
                    KNOWLEDGE_BASE: w,
                    LOGIN: G
                },
                U = {
                    name: "bcae3x",
                    styles: "width:22px;height:22px;pointer-events:none;transition:color .15s;"
                },
                V = c.a.memo((function(e) {
                    var t = e.elements,
                        n = Object(i.useTheme)(),
                        o = n.colors,
                        u = n.bp,
                        s = Object(j.c)(),
                        l = s.submenu,
                        b = s.isNavbarCollapsed,
                        d = Object(T.b)().user,
                        f = c.a.useContext(z.a);
                    return Object(O.b)("nav", {
                        css: Object(r.a)(Object(a.a)({
                            display: "flex",
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: o.BLACK,
                            borderTop: "1px solid ".concat(o.RAVEN),
                            height: "50px"
                        }, u.FROM_TABLET, {
                            position: "static",
                            alignItems: "center",
                            marginLeft: "auto",
                            border: "none",
                            borderLeft: "1px solid ".concat(o.RAVEN),
                            height: "100%"
                        }), "")
                    }, Object(O.b)("ul", {
                        css: Object(r.a)(Object(a.a)({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            width: "100%"
                        }, u.FROM_TABLET, {
                            alignItems: "stretch"
                        }), "")
                    }, t.map((function(e) {
                        var t, n = l && l.type === e.type || !1,
                            c = n || "LOGIN" === e.type && d.isLogged,
                            i = e.iconType,
                            s = K[e.type] || w;
                        return Object(O.b)("li", {
                            key: e.id,
                            css: Object(r.a)((t = {
                                textAlign: "center"
                            }, Object(a.a)(t, u.FROM_TABLET, {
                                transition: "padding .25s",
                                paddingLeft: 17,
                                paddingTop: b ? 15 : 5
                            }), Object(a.a)(t, u.FROM_DESKTOP, {
                                paddingTop: b ? 15 : 5,
                                paddingLeft: b ? 18 : 27
                            }), t), ""),
                            onClick: function(t) {
                                f.handleNotificationShow(t, e.type)
                            }
                        }, Object(O.b)(s, e, Object(O.b)(W, {
                            icon: i && Object(O.b)(E.a, {
                                name: i,
                                width: 22,
                                height: 22,
                                color: c ? o.ORANGE_DARK : o.WHITE,
                                css: U
                            }),
                            isActive: n,
                            title: e.title
                        })))
                    }))))
                }));
            V.displayName = "SideMenu";
            c.a.createElement;
            var Y = c.a.memo((function(e) {
                var t, n = e.logo,
                    o = n.data,
                    c = n.title,
                    u = Object(j.c)().isNavbarCollapsed,
                    s = Object(i.useTheme)().bp;
                return Object(O.b)(p.a, {
                    href: o.action,
                    passHref: !0
                }, Object(O.b)("a", {
                    title: c || void 0,
                    css: Object(r.a)((t = {
                        display: "block",
                        alignSelf: "center",
                        position: "relative",
                        height: 30,
                        width: 30,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: "url(".concat(o.small, ")"),
                        backgroundRepeat: "no-repeat"
                    }, Object(a.a)(t, s.FROM_TABLET, {
                        transition: "width .25s, height .25s",
                        height: u ? 30 : 40,
                        width: u ? 30 : 40
                    }), Object(a.a)(t, "&::after", Object(a.a)({
                        transition: "all .15s ease-in .11s",
                        content: "''",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: "url(".concat(o.big, ")")
                    }, s.FROM_TABLET, {
                        opacity: u ? 0 : 1
                    })), t), "")
                }, Object(O.b)(i.VisuallyHidden, null, "Strona g\u0142\xf3wna Orange.pl")))
            }));
            Y.displayName = "Logo";
            c.a.createElement;
            var q = c.a.memo((function(e) {
                var t, n = e.isActive,
                    o = e.id,
                    u = e.text,
                    s = e.mobileText,
                    l = e.listType,
                    b = e.list,
                    d = Object(i.useTheme)(),
                    f = d.colors,
                    p = d.bp,
                    m = d.selectors,
                    h = Object(R.a)(),
                    v = Object(T.b)().market,
                    g = Object(j.c)(),
                    y = g.dispatch,
                    E = g.submenu,
                    w = h && s || u || "Brak tekstu",
                    k = c.a.useCallback((function() {
                        y({
                            type: "submenu",
                            payload: {
                                id: o,
                                data: b,
                                type: l,
                                title: w
                            }
                        })
                    }), [y, o, b, l, w]);
                return Object(O.b)("li", {
                    css: Object(r.a)(Object(a.a)({
                        flex: 1,
                        height: "100%",
                        textAlign: "center"
                    }, p.FROM_TABLET, {
                        margin: "0 8px",
                        flex: "none"
                    }), "")
                }, Object(O.b)("button", {
                    "aria-expanded": E && E.id === o ? "true" : "false",
                    "aria-controls": "submenu-".concat(o),
                    type: "button",
                    css: Object(r.a)((t = {
                        height: "100%",
                        transition: "color, border-color",
                        transitionDuration: ".15s",
                        background: "none",
                        border: "none",
                        color: n ? f.ORANGE_LIGHT : f.WHITE,
                        borderBottom: "3px solid transparent",
                        borderColor: n ? "".concat(f.ORANGE_LIGHT) : void 0,
                        padding: "0 .25rem",
                        fontSize: 14,
                        fontWeight: "bold",
                        cursor: "pointer",
                        outline: "none"
                    }, Object(a.a)(t, p.FROM_TABLET, {
                        padding: "0 .5rem",
                        fontSize: 16
                    }), Object(a.a)(t, p.FROM_DESKTOP, {
                        padding: "0 .75rem"
                    }), Object(a.a)(t, m.ON_FOCUS_OR_HOVER, {
                        color: f.ORANGE_LIGHT
                    }), t), ""),
                    onClick: k,
                    id: Object(x.a)("Menu_".concat(v), w)
                }, w))
            }));
            q.displayName = "NavigationItem";
            c.a.createElement;
            var J = c.a.memo((function(e) {
                var t, n = e.elements,
                    o = c.a.useContext(j.a),
                    u = o.isSubmenuCollapsed,
                    s = o.submenu,
                    l = o.dispatch,
                    d = Object(i.useTheme)(),
                    f = d.bp,
                    p = d.colors,
                    m = c.a.useCallback((function() {
                        l({
                            type: "closeSubmenu"
                        })
                    }), [l]);
                return Object(O.b)("ul", {
                    css: Object(r.a)(Object(a.a)({
                        display: "flex",
                        flex: 1,
                        alignItems: "stretch",
                        height: "100%",
                        marginLeft: ".5rem"
                    }, f.FROM_TABLET, {
                        marginLeft: "1.5rem"
                    }), "")
                }, n.map((function(e) {
                    return Object(O.b)(q, Object(b.a)({
                        key: e.id,
                        isActive: !!s && s.id === e.id
                    }, e))
                })), Object(O.b)("li", {
                    css: Object(r.a)(Object(a.a)({
                        visibility: !u && s && (t = s.type, "TEXTS" === t || "ICONS" === t) ? "visible" : "hidden",
                        height: "100%",
                        marginLeft: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }, f.FROM_TABLET, {
                        display: "none"
                    }), "")
                }, Object(O.b)(i.IconButton, {
                    iconName: "close-slim",
                    title: "zamknij",
                    onClick: m,
                    color: p.WHITE
                })))
            }));
            J.displayName = "Menu";
            c.a.createElement;
            var Z = c.a.memo((function(e) {
                var t = e.menu,
                    n = e.sideMenu,
                    o = e.logo,
                    c = Object(i.useTheme)(),
                    u = c.bp,
                    s = c.zIndex,
                    l = Object(j.c)().isNavbarCollapsed;
                return Object(O.b)(d.a, {
                    backgroundColor: "BLACK",
                    css: Object(r.a)(Object(a.a)({
                        position: "relative",
                        zIndex: s.LAYER_1,
                        display: "flex",
                        alignItems: "stretch",
                        height: 50,
                        transition: "height .25s"
                    }, u.FROM_TABLET, {
                        height: l ? 50 : 80
                    }), "")
                }, Object(O.b)(Y, {
                    logo: o
                }), Object(O.b)(J, {
                    elements: t
                }), Object(O.b)(V, {
                    elements: n
                }))
            }));
            Z.displayName = "Navbar";
            var Q = n("obcW"),
                X = n("7xIC"),
                $ = n.n(X),
                ee = n("AU4o"),
                te = n.n(ee),
                ne = n("t5YO"),
                ae = n("nwNh");
            c.a.createElement;
            var re = {
                    name: "11es7hk",
                    styles: "margin-top:1rem;font-size:12px;font-weight:bold;text-align:center;"
                },
                oe = c.a.memo((function(e) {
                    var t, n, o, c = e.text,
                        u = e.iconType,
                        s = e.action,
                        l = e.title,
                        b = e.wrapperCss,
                        d = Object(i.useTheme)(),
                        f = d.colors,
                        m = d.bp,
                        h = d.selectors,
                        v = Object(j.c)().submenu,
                        g = Object(T.b)().market;
                    return Object(O.b)("li", {
                        css: Object(r.a)((t = {
                            flexBasis: "50%",
                            display: "flex"
                        }, Object(a.a)(t, m.FROM_TABLET, {
                            display: "block",
                            flexBasis: "auto"
                        }), Object(a.a)(t, m.FROM_DESKTOP, {
                            marginRight: 9
                        }), t), "")
                    }, Object(O.b)(p.a, {
                        href: s,
                        passHref: !0
                    }, Object(O.b)("a", {
                        id: Object(x.a)("Menu_".concat(g), v && v.title, l),
                        title: l || void 0,
                        tabIndex: 0,
                        css: Object(r.a)([(n = {
                            color: f.WHITE,
                            flex: 1,
                            border: "1px solid ".concat(f.RAVEN),
                            borderRadius: 4,
                            height: 110,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: 10,
                            transition: "background-color .15s",
                            outline: "none",
                            cursor: "pointer"
                        }, Object(a.a)(n, m.FROM_TABLET, {
                            margin: "10px 9px 0 0",
                            padding: 4,
                            width: 115
                        }), Object(a.a)(n, m.FROM_DESKTOP, {
                            marginRight: 0,
                            width: 128
                        }), Object(a.a)(n, h.ON_FOCUS_OR_HOVER, {
                            backgroundColor: f.STONE
                        }), n), b], "")
                    }, u && Object(O.b)(E.a, {
                        name: u,
                        css: Object(r.a)((o = {
                            width: 50,
                            height: 50
                        }, Object(a.a)(o, m.FROM_TABLET, {
                            width: 45,
                            height: 45
                        }), Object(a.a)(o, m.FROM_DESKTOP, {
                            width: 50,
                            height: 50
                        }), o), "")
                    }), Object(O.b)("span", {
                        css: re
                    }, c))))
                }));
            oe.displayName = "IconItem";
            c.a.createElement;
            var ce = c.a.memo((function(e) {
                var t, n = e.data,
                    o = Object(i.useTheme)().bp,
                    c = Object(j.c)().isNavbarCollapsed,
                    u = Object(R.a)(),
                    s = Object(ne.a)();
                return Object(O.b)(d.a, {
                    backgroundColor: "BLACK"
                }, Object(O.b)(ae.a, {
                    enabled: u
                }, Object(O.b)("ul", {
                    css: Object(r.a)((t = {}, Object(a.a)(t, o.ONLY_MOBILE, {
                        overflow: "auto",
                        height: s.height - (c ? 50 : 80) - 50
                    }), Object(a.a)(t, "display", "flex"), Object(a.a)(t, "alignContent", "flex-start"), Object(a.a)(t, "flexWrap", "wrap"), Object(a.a)(t, "WebkitOverflowScrolling", "touch"), Object(a.a)(t, o.FROM_TABLET, {
                        padding: "10px 0",
                        minHeight: 150
                    }), t), "")
                }, n.map((function(e, t) {
                    return Object(O.b)(oe, Object(b.a)({}, e, {
                        key: e.id,
                        wrapperCss: Object(a.a)({}, o.ONLY_MOBILE, {
                            marginLeft: t % 2 === 0 ? 0 : void 0,
                            marginRight: t % 2 !== 0 ? 0 : void 0
                        })
                    }))
                })))))
            }));
            ce.displayName = "Icons";
            c.a.createElement;
            var ie = c.a.memo((function(e) {
                var t, n = e.data,
                    o = Object(i.useTheme)(),
                    c = o.bp,
                    u = o.colors,
                    s = o.selectors,
                    l = Object(j.c)(),
                    b = l.isNavbarCollapsed,
                    f = l.submenu,
                    m = Object(T.b)().market;
                return Object(O.b)(d.a, {
                    backgroundColor: "BLACK"
                }, Object(O.b)("ul", {
                    css: Object(r.a)((t = {
                        columnCount: 2,
                        height: b ? "calc(100vh - 50px)" : "calc(100vh - 80px)",
                        padding: "20px 0 4px"
                    }, Object(a.a)(t, c.FROM_TABLET, {
                        height: 210,
                        columnCount: 3
                    }), Object(a.a)(t, c.FROM_DESKTOP, {
                        height: 150,
                        columnCount: 4
                    }), t), "")
                }, n.map((function(e) {
                    return Object(O.b)("li", {
                        css: Object(r.a)(Object(a.a)({
                            marginBottom: 16
                        }, c.FROM_TABLET, {
                            marginBottom: 14
                        }), ""),
                        key: e.id
                    }, Object(O.b)(p.a, {
                        href: e.action,
                        passHref: !0
                    }, Object(O.b)("a", {
                        id: Object(x.a)("Menu_".concat(m), f && f.id, e.title),
                        title: e.title || void 0,
                        css: Object(r.a)(Object(a.a)({
                            fontWeight: "bold",
                            fontSize: 14,
                            color: u.WHITE,
                            transition: "color .15s",
                            cursor: "pointer",
                            outline: "none"
                        }, s.ON_FOCUS_OR_HOVER, {
                            color: u.ORANGE_LIGHT
                        }), "")
                    }, e.text)))
                }))))
            }));
            ie.displayName = "Texts";
            c.a.createElement;
            var ue = {
                    ICONS: ce,
                    TEXTS: ie,
                    CONTACT: te()((function() {
                        return F.a.async((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, F.a.awrap(Promise.all([n.e(8), n.e(12), n.e(30)]).then(n.bind(null, "KIDJ")));
                                case 2:
                                    return e.abrupt("return", e.sent.SubmenuItem);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), null, null, null, Promise)
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["KIDJ"]
                            },
                            modules: ["../Contact"]
                        }
                    }),
                    SEARCH: te()((function() {
                        return F.a.async((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, F.a.awrap(n.e(31).then(n.bind(null, "N865")));
                                case 2:
                                    return e.abrupt("return", e.sent.SubmenuItem);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), null, null, null, Promise)
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["N865"]
                            },
                            modules: ["../Search/SubmenuItem"]
                        }
                    }),
                    LOGIN: te()((function() {
                        return F.a.async((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, F.a.awrap(n.e(32).then(n.bind(null, "0/yZ")));
                                case 2:
                                    return e.abrupt("return", e.sent.SubmenuItem);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), null, null, null, Promise)
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["0/yZ"]
                            },
                            modules: ["../User/SubmenuItem"]
                        }
                    }),
                    CART: te()((function() {
                        return F.a.async((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, F.a.awrap(Promise.all([n.e(28), n.e(29)]).then(n.bind(null, "WI4/")));
                                case 2:
                                    return e.abrupt("return", e.sent.SubmenuItem);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), null, null, null, Promise)
                    }), {
                        loadableGenerated: {
                            webpack: function() {
                                return ["WI4/"]
                            },
                            modules: ["../Cart/SubmenuItem"]
                        }
                    }),
                    KNOWLEDGE_BASE: null
                },
                se = {
                    name: "1h791jq",
                    styles: "position:absolute;left:0;right:0;will-change:transform, opacity;"
                },
                le = c.a.memo((function() {
                    var e = Object(j.c)(),
                        t = e.submenu,
                        n = void 0 === t ? null : t,
                        a = e.dispatch,
                        r = Object(R.a)();
                    c.a.useEffect((function() {
                        if (n) {
                            var e = function() {
                                a({
                                    type: "closeSubmenu"
                                })
                            };
                            return $.a.events.on("routeChangeStart", e),
                                function() {
                                    return $.a.events.off("hashChangeStart", e)
                                }
                        }
                    }), [a, n]), c.a.useEffect((function() {
                        var e = function() {
                            n && a({
                                type: "closeSubmenu"
                            })
                        };
                        if (n && !r) return window.addEventListener("scroll", e, !!l.a.hasSupport && {
                                capture: !1,
                                passive: !0
                            }),
                            function() {
                                return window.removeEventListener("scroll", e)
                            }
                    }), [n, a, r]);
                    var o = Object(Q.useTransition)(n, {
                            from: {
                                opacity: 0,
                                transform: "translateY(-20px)"
                            },
                            enter: {
                                opacity: 1,
                                transform: "translateY(0px)"
                            },
                            leave: {
                                opacity: 0,
                                transform: "translateY(-20px)"
                            }
                        }),
                        i = c.a.useCallback((function(e) {
                            n && "Escape" === e.key && a({
                                type: "closeSubmenu"
                            })
                        }), [n, a]);
                    return Object(O.b)(c.a.Fragment, null, o((function(e, t) {
                        if (null === t) return null;
                        var n = t.type,
                            a = t.data;
                        if (!n) return null;
                        var r = ue[n];
                        return r ? Object(O.b)(N.a, {
                            returnFocus: !0
                        }, Object(O.b)(Q.animated.div, {
                            id: "submenu-".concat(t.id),
                            style: e,
                            css: se,
                            onKeyDown: i
                        }, Object(O.b)(r, {
                            data: a
                        }))) : null
                    })))
                }));
            le.displayName = "Submenu";
            c.a.createElement;
            var be = {
                    name: "1l4w6pd",
                    styles: "display:flex;justify-content:center;"
                },
                de = {
                    name: "iuwq23",
                    styles: "padding:15px;display:flex;justify-content:space-between;"
                },
                fe = {
                    name: "1urj6yl",
                    styles: "margin-right:auto;width:100%;"
                },
                pe = {
                    name: "5yw8i6",
                    styles: "margin:0 0 6px 0;"
                },
                Oe = {
                    name: "1t7utft",
                    styles: "margin-left:18px;"
                },
                me = c.a.memo((function() {
                    var e = Object(i.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        o = e.zIndex,
                        u = c.a.useContext(z.a),
                        s = c.a.useCallback((function() {
                            u.setNotification(null)
                        }), [u]),
                        l = Object(Q.useTransition)(u.currentNotification, {
                            from: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1
                            },
                            leave: {
                                opacity: 0
                            }
                        });
                    return Object(O.b)("div", {
                        css: be
                    }, l((function(e, c) {
                        var u, l = c;
                        return l ? Object(O.b)(Q.animated.div, {
                            style: e,
                            css: Object(r.a)({
                                position: "fixed",
                                zIndex: o.LAYER_5,
                                backgroundColor: n.WHITE,
                                top: 0,
                                width: "calc(100% - 40px)",
                                maxWidth: 1240,
                                margin: "10px 0",
                                borderRadius: 4,
                                border: "1px solid ".concat(n.ASH)
                            }, "")
                        }, Object(O.b)("div", {
                            css: de
                        }, Object(O.b)("div", {
                            css: Object(r.a)((u = {
                                marginRight: 10
                            }, Object(a.a)(u, t.FROM_TABLET, {
                                marginRight: 20
                            }), Object(a.a)(u, t.FROM_DESKTOP, {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }), u), "")
                        }, Object(O.b)(E.a, {
                            name: "warning",
                            css: Object(r.a)(Object(a.a)({
                                fontSize: 22
                            }, t.FROM_TABLET, {
                                fontSize: 33
                            }), "")
                        })), Object(O.b)("div", {
                            css: fe
                        }, Object(O.b)("div", {
                            css: Object(r.a)(Object(a.a)({
                                display: "flex",
                                flexDirection: "column"
                            }, t.FROM_DESKTOP, {
                                flexDirection: "row"
                            }), "")
                        }, Object(O.b)("div", null, Object(O.b)("div", {
                            css: pe
                        }, Object(O.b)("strong", null, l.data.title)), Object(O.b)("div", {
                            dangerouslySetInnerHTML: {
                                __html: l.data.content
                            }
                        })), Object(O.b)("div", {
                            css: Object(r.a)(Object(a.a)({
                                alignSelf: "flex-start",
                                whiteSpace: "nowrap",
                                margin: "15px 0 0 0",
                                width: "100%"
                            }, t.FROM_DESKTOP, {
                                alignSelf: "center",
                                marginLeft: "auto",
                                padding: "0 20px",
                                width: "auto"
                            }), "")
                        }, l.data.actions && l.data.actions.map((function(e) {
                            return Object(O.b)(i.ButtonLink, {
                                key: e.id,
                                variant: "SECONDARY_BLACK_OUTLINE",
                                href: e.action,
                                target: "_blank",
                                title: "Otwarcie w nowej karcie: ".concat(e.title),
                                css: Object(r.a)(Object(a.a)({
                                    width: "100%"
                                }, t.FROM_TABLET, {
                                    width: "auto",
                                    padding: "0 35px"
                                }), "")
                            }, e.text)
                        }))))), Object(O.b)("div", {
                            css: Oe
                        }, Object(O.b)(i.IconButton, {
                            iconName: "close-slim",
                            title: "Zamknij",
                            onClick: s,
                            width: 20,
                            height: 20
                        })))) : null
                    })))
                }));
            me.displayName = "Notification";
            var he = n("yy35"),
                je = n("Bit+");
            c.a.createElement;
            var ve = {
                    name: "h8laae",
                    styles: "font-size:14px;font-weight:bold;"
                },
                ge = {
                    name: "70qvj9",
                    styles: "display:flex;align-items:center;"
                },
                ye = function() {
                    var e = Object(i.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        o = e.selectors,
                        s = Object(T.b)().market,
                        l = c.a.useState(!1),
                        b = Object(u.a)(l, 2),
                        p = b[0],
                        m = b[1];
                    c.a.useEffect((function() {
                        m("closed" !== Object(he.a)("EPIDEMIC_HEADER_WARNING", document.cookie))
                    }), []);
                    var h = c.a.useCallback((function() {
                            Object(f.a)("EPIDEMIC_HEADER_WARNING", "closed", null), m(!1)
                        }), []),
                        j = Object(Q.useTransition)(p, {
                            initial: {
                                opacity: 1
                            },
                            from: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1
                            },
                            leave: {
                                opacity: 0
                            }
                        }),
                        v = {
                            id: "moreAboutEpidemic",
                            text: "Dowiedz si\u0119 wi\u0119cej",
                            title: "Dowiedz si\u0119 wi\u0119cej",
                            action: "B2C" === s ? "https://www.orange.pl/view/zmiana-obslugi" : "https://www.orange.pl/view/zmiana-obslugi-firm",
                            type: "LINK",
                            variant: "ON_LIGHT_BACKGROUND",
                            externalTab: !0
                        };
                    return Object(O.b)(c.a.Fragment, null, j((function(e, c) {
                        var u, s;
                        return c ? Object(O.b)(Q.animated.div, {
                            css: Object(r.a)(Object(a.a)({
                                width: "100%",
                                position: "absolute",
                                backgroundColor: n.WARNING,
                                padding: "20px 0"
                            }, t.FROM_TABLET, {
                                padding: "10px 0"
                            }), ""),
                            style: e
                        }, Object(O.b)(d.a, {
                            css: ve
                        }, Object(O.b)("div", {
                            css: ge
                        }, Object(O.b)("div", {
                            css: Object(r.a)(Object(a.a)({
                                display: "flex"
                            }, t.ONLY_MOBILE, {
                                flexDirection: "column",
                                paddingRight: 40
                            }), "")
                        }, Object(O.b)("span", null, "Wa\u017cne informacje dla Klient\xf3w w czasie epidemii"), Object(O.b)(je.a, {
                            action: v,
                            css: Object(r.a)((u = {
                                display: "block",
                                whiteSpace: "nowrap"
                            }, Object(a.a)(u, t.ONLY_MOBILE, {
                                marginTop: 5
                            }), Object(a.a)(u, t.FROM_TABLET, {
                                marginLeft: 20
                            }), u), "")
                        })), Object(O.b)(i.IconButton, {
                            iconName: "close-slim",
                            title: "Zamknij informacj\u0119 o epidemii",
                            onClick: h,
                            css: Object(r.a)((s = {
                                flexShrink: 0,
                                marginLeft: "auto"
                            }, Object(a.a)(s, t.ONLY_MOBILE, {
                                alignSelf: "flex-start",
                                marginTop: 3
                            }), Object(a.a)(s, t.FROM_TABLET, {
                                svg: Object(a.a)({
                                    width: 12,
                                    height: 12,
                                    transition: "color .15s"
                                }, o.ON_FOCUS_OR_HOVER, {
                                    color: n.ORANGE_DARK
                                })
                            }), s), "")
                        })))) : null
                    })))
                };
            ye.displayName = "Warning";
            c.a.createElement;
            var Ee = {
                    name: "1ruhcke",
                    styles: "position:absolute;left:0;right:0;"
                },
                xe = c.a.memo((function(e) {
                    var t = e.data,
                        n = t.topBar,
                        o = t.menu,
                        s = t.sideMenu,
                        b = t.logo,
                        d = Object(j.c)(),
                        f = d.isNavbarCollapsed,
                        p = d.dispatch,
                        m = Object(T.b)().market,
                        h = Object(i.useTheme)(),
                        v = h.bp,
                        g = h.colors,
                        E = h.zIndex;
                    ! function(e) {
                        var t = e.initialValue,
                            n = e.callback,
                            a = c.a.useRef(null),
                            r = c.a.useState(t),
                            o = Object(u.a)(r, 2),
                            i = o[0],
                            s = o[1];
                        c.a.useEffect((function() {
                            null === a.current && (a.current = window.pageYOffset);
                            var e = function() {
                                var e = Math.max(0, window.pageYOffset);
                                if (e !== a.current) {
                                    var t = e > a.current ? "down" : "up";
                                    t !== i && (s(t), n && n(t)), a.current = e
                                }
                            };
                            return window.addEventListener("scroll", e, !!l.a.hasSupport && {
                                    capture: !1,
                                    passive: !0
                                }),
                                function() {
                                    return window.removeEventListener("scroll", e)
                                }
                        }), [n, i])
                    }({
                        callback: c.a.useCallback((function(e) {
                            p({
                                type: "scroll",
                                payload: e
                            })
                        }), [p])
                    });
                    var x = c.a.useCallback((function(e) {
                        p({
                            type: "menuHovered",
                            payload: "mouseenter" === e.type
                        })
                    }), [p]);
                    return c.a.useEffect((function() {
                        var e = s.find((function(e) {
                            return "CART" === e.type
                        }));
                        e && e.data && "elementsCount" in e.data && p({
                            type: "setCartItemsCount",
                            payload: e.data.elementsCount
                        })
                    }), [p, s]), Object(O.b)(c.a.Fragment, null, Object(O.b)("div", {
                        css: Object(r.a)(Object(a.a)({
                            height: 80,
                            backgroundColor: g.BLACK
                        }, v.FROM_TABLET, {
                            height: 110
                        }), "")
                    }), Object(O.b)("header", {
                        onMouseEnter: x,
                        onMouseLeave: x,
                        css: Object(r.a)(Object(a.a)({
                            zIndex: E.LAYER_4,
                            position: "fixed",
                            top: f ? -30 : 0,
                            borderBottom: "1px solid ".concat(g.RAVEN),
                            left: 0,
                            right: 0,
                            transition: "top 0.2s ease 0.01s"
                        }, v.FROM_TABLET, {
                            transition: "top 0.25s ease 0.01s"
                        }), "")
                    }, Object(O.b)(me, null), Object(O.b)(y, {
                        elements: n,
                        context: m
                    }), Object(O.b)(Z, {
                        logo: b,
                        menu: o,
                        sideMenu: s
                    }), Object(O.b)("div", {
                        css: Ee
                    }, Object(O.b)(ye, null)), Object(O.b)(le, null)))
                }));
            xe.displayName = "Header"
        },
        KeDb: function(e, t, n) {
            "use strict";
            var a = n("zQIG"),
                r = n("8mBC"),
                o = n("I/kN"),
                c = n("cMav"),
                i = n("pSQP");

            function u() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var s = n("Y3ZS"),
                l = n("pONU");
            t.__esModule = !0, t.default = void 0;
            var b, d = l(n("ERkP")),
                f = n("cRaD"),
                p = n("fvxO"),
                O = s(n("7xIC")),
                m = n("L9lV");

            function h(e) {
                return e && "object" === typeof e ? (0, p.formatWithValidation)(e) : e
            }
            var j = new Map,
                v = window.IntersectionObserver,
                g = {};

            function y() {
                return b || (v ? b = new v((function(e) {
                    e.forEach((function(e) {
                        if (j.has(e.target)) {
                            var t = j.get(e.target);
                            (e.isIntersecting || e.intersectionRatio > 0) && (b.unobserve(e.target), j.delete(e.target), t())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0)
            }
            var E = function(e) {
                o(s, e);
                var t, n = (t = s, function() {
                    var e, n = i(t);
                    if (u()) {
                        var a = i(this).constructor;
                        e = Reflect.construct(n, arguments, a)
                    } else e = n.apply(this, arguments);
                    return c(this, e)
                });

                function s(e) {
                    var t;
                    return a(this, s), (t = n.call(this, e)).p = void 0, t.cleanUpListeners = function() {}, t.formatUrls = function(e) {
                        var t = null,
                            n = null,
                            a = null;
                        return function(r, o) {
                            if (a && r === t && o === n) return a;
                            var c = e(r, o);
                            return t = r, n = o, a = c, c
                        }
                    }((function(e, t) {
                        return {
                            href: (0, m.addBasePath)(h(e)),
                            as: t ? (0, m.addBasePath)(h(t)) : t
                        }
                    })), t.linkClicked = function(e) {
                        var n = e.currentTarget,
                            a = n.nodeName,
                            r = n.target;
                        if ("A" !== a || !(r && "_self" !== r || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && 2 === e.nativeEvent.which)) {
                            var o = t.formatUrls(t.props.href, t.props.as),
                                c = o.href,
                                i = o.as;
                            if (function(e) {
                                    var t = (0, f.parse)(e, !1, !0),
                                        n = (0, f.parse)((0, p.getLocationOrigin)(), !1, !0);
                                    return !t.host || t.protocol === n.protocol && t.host === n.host
                                }(c)) {
                                var u = window.location.pathname;
                                c = (0, f.resolve)(u, c), i = i ? (0, f.resolve)(u, i) : c, e.preventDefault();
                                var s = t.props.scroll;
                                null == s && (s = i.indexOf("#") < 0), O.default[t.props.replace ? "replace" : "push"](c, i, {
                                    shallow: t.props.shallow
                                }).then((function(e) {
                                    e && s && (window.scrollTo(0, 0), document.body.focus())
                                }))
                            }
                        }
                    }, t.p = !1 !== e.prefetch, t
                }
                return r(s, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.cleanUpListeners()
                    }
                }, {
                    key: "getPaths",
                    value: function() {
                        var e = window.location.pathname,
                            t = this.formatUrls(this.props.href, this.props.as),
                            n = t.href,
                            a = t.as,
                            r = (0, f.resolve)(e, n);
                        return [r, a ? (0, f.resolve)(e, a) : r]
                    }
                }, {
                    key: "handleRef",
                    value: function(e) {
                        var t = this;
                        this.p && v && e && e.tagName && (this.cleanUpListeners(), g[this.getPaths().join("%")] || (this.cleanUpListeners = function(e, t) {
                            var n = y();
                            return n ? (n.observe(e), j.set(e, t), function() {
                                try {
                                    n.unobserve(e)
                                } catch (t) {
                                    console.error(t)
                                }
                                j.delete(e)
                            }) : function() {}
                        }(e, (function() {
                            t.prefetch()
                        }))))
                    }
                }, {
                    key: "prefetch",
                    value: function(e) {
                        if (this.p) {
                            var t = this.getPaths();
                            O.default.prefetch(t[0], t[1], e).catch((function(e) {
                                0
                            })), g[t.join("%")] = !0
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.children,
                            n = this.formatUrls(this.props.href, this.props.as),
                            a = n.href,
                            r = n.as;
                        "string" === typeof t && (t = d.default.createElement("a", null, t));
                        var o = d.Children.only(t),
                            c = {
                                ref: function(t) {
                                    e.handleRef(t), o && "object" === typeof o && o.ref && ("function" === typeof o.ref ? o.ref(t) : "object" === typeof o.ref && (o.ref.current = t))
                                },
                                onMouseEnter: function(t) {
                                    o.props && "function" === typeof o.props.onMouseEnter && o.props.onMouseEnter(t), e.prefetch({
                                        priority: !0
                                    })
                                },
                                onClick: function(t) {
                                    o.props && "function" === typeof o.props.onClick && o.props.onClick(t), t.defaultPrevented || e.linkClicked(t)
                                }
                            };
                        return !this.props.passHref && ("a" !== o.type || "href" in o.props) || (c.href = r || a), d.default.cloneElement(o, c)
                    }
                }]), s
            }(d.Component);
            t.default = E
        },
        RIql: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("pu3o"),
                r = n.n(a),
                o = function(e) {
                    return "/szukaj/wyniki?".concat(r.a.stringify({
                        q: e
                    }))
                }
        },
        cVGl: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }
        },
        cgBw: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("com9"),
                r = function(e) {
                    return a.a.get("/szukaj/autosugestia/zaawansowana?force=true", {
                        params: {
                            q: e.query
                        }
                    }).then((function(e) {
                        return e.data
                    }))
                }
        },
        f4ym: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            var a = n("zjfJ"),
                r = n("cxan"),
                o = n("HbGN"),
                c = n("ERkP"),
                i = n.n(c),
                u = n("jvFD"),
                s = n.n(u),
                l = n("y6sE"),
                b = n("l1C2");
            i.a.createElement;

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var f = function(e) {
                    return "/" === e ? "/" : "/[...path]"
                },
                p = function(e) {
                    if ("/" !== e) return e
                },
                O = function(e) {
                    var t = e.href,
                        n = (e.as, e.children),
                        c = e.passHref,
                        u = e.replace,
                        O = e.scroll,
                        m = e.shallow,
                        h = Object(o.a)(e, ["href", "as", "children", "passHref", "replace", "scroll", "shallow"]),
                        j = Object(l.b)().supportedPrefixes,
                        v = t.toString();
                    if (function(e, t) {
                            return "/" === e || !!t.find((function(t) {
                                return "".concat(e, "/").match("^".concat(t, "/"))
                            }))
                        }(v, j)) {
                        var g = {
                            href: f(v),
                            as: p(v)
                        };
                        return Object(b.b)(s.a, Object(r.a)({}, g, {
                            passHref: c,
                            replace: u,
                            scroll: O,
                            shallow: m
                        }, h), n)
                    }
                    return "string" === typeof t ? i.a.cloneElement(n, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? d(Object(n), !0).forEach((function(t) {
                                Object(a.a)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        href: t
                    }, h)) : null
                }
        },
        fGyu: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("lEbO");
            var r = n("HO86");

            function o(e) {
                return function(e) {
                    if (Array.isArray(e)) return Object(a.a)(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Object(r.a)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        hgjN: function(e, t, n) {
            "use strict";
            var a = n("+wNj"),
                r = n("cxan"),
                o = n("ERkP"),
                c = n.n(o),
                i = (n("aWzz"), n("Itga")),
                u = {
                    width: "1px",
                    height: "0px",
                    padding: 0,
                    overflow: "hidden",
                    position: "fixed",
                    top: "1px",
                    left: "1px"
                },
                s = function(e) {
                    var t = e.children;
                    return c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: u
                    }), t, t && c.a.createElement("div", {
                        key: "guard-last",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: u
                    }))
                };
            s.propTypes = {}, s.defaultProps = {
                children: null
            };
            var l = n("Ix1X"),
                b = Object(l.a)({}, (function(e) {
                    return {
                        target: e.target,
                        currentTarget: e.currentTarget
                    }
                })),
                d = Object(l.a)(),
                f = Object(l.a)(),
                p = Object(l.b)({
                    async: !0
                }),
                O = [],
                m = c.a.forwardRef((function(e, t) {
                    var n, a = Object(o.useState)(),
                        s = a[0],
                        l = a[1],
                        f = Object(o.useRef)(),
                        m = Object(o.useRef)(!1),
                        h = Object(o.useRef)(null),
                        j = e.children,
                        v = e.disabled,
                        g = e.noFocusGuards,
                        y = e.persistentFocus,
                        E = e.autoFocus,
                        x = (e.allowTextSelection, e.group),
                        T = e.className,
                        w = e.whiteList,
                        k = e.shards,
                        R = void 0 === k ? O : k,
                        C = e.as,
                        A = void 0 === C ? "div" : C,
                        N = e.lockProps,
                        I = void 0 === N ? {} : N,
                        _ = e.sideCar,
                        L = e.returnFocus,
                        S = e.onActivation,
                        M = e.onDeactivation,
                        B = Object(o.useState)({})[0],
                        F = Object(o.useCallback)((function() {
                            h.current = h.current || document && document.activeElement, f.current && S && S(f.current), m.current = !0
                        }), [S]),
                        D = Object(o.useCallback)((function() {
                            m.current = !1, M && M(f.current)
                        }), [M]),
                        H = Object(o.useCallback)((function(e) {
                            var t = h.current;
                            if (Boolean(L) && t && t.focus) {
                                var n = "object" === typeof L ? L : void 0;
                                h.current = null, e ? Promise.resolve().then((function() {
                                    return t.focus(n)
                                })) : t.focus(n)
                            }
                        }), [L]),
                        P = Object(o.useCallback)((function(e) {
                            m.current && b.useMedium(e)
                        }), []),
                        G = d.useMedium,
                        z = Object(o.useCallback)((function(e) {
                            f.current !== e && (f.current = e, l(e))
                        }), []);
                    var W = Object(r.a)(((n = {})["data-focus-lock-disabled"] = v && "disabled", n["data-focus-lock"] = x, n), I),
                        K = !0 !== g,
                        U = K && "tail" !== g,
                        V = Object(i.a)([t, z]);
                    return c.a.createElement(c.a.Fragment, null, K && [c.a.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        tabIndex: v ? -1 : 0,
                        style: u
                    }), c.a.createElement("div", {
                        key: "guard-nearest",
                        "data-focus-guard": !0,
                        tabIndex: v ? -1 : 1,
                        style: u
                    })], !v && c.a.createElement(_, {
                        id: B,
                        sideCar: p,
                        observed: s,
                        disabled: v,
                        persistentFocus: y,
                        autoFocus: E,
                        whiteList: w,
                        shards: R,
                        onActivation: F,
                        onDeactivation: D,
                        returnFocus: H
                    }), c.a.createElement(A, Object(r.a)({
                        ref: V
                    }, W, {
                        className: T,
                        onBlur: G,
                        onFocus: P
                    }), j), U && c.a.createElement("div", {
                        "data-focus-guard": !0,
                        tabIndex: v ? -1 : 0,
                        style: u
                    }))
                }));
            m.propTypes = {}, m.defaultProps = {
                children: void 0,
                disabled: !1,
                returnFocus: !1,
                noFocusGuards: !1,
                autoFocus: !0,
                persistentFocus: !1,
                allowTextSelection: void 0,
                group: void 0,
                className: void 0,
                whiteList: void 0,
                shards: void 0,
                as: "div",
                lockProps: {},
                onActivation: void 0,
                onDeactivation: void 0
            };
            var h = m,
                j = n("BFfR"),
                v = n("zjfJ");
            var g = function(e, t) {
                    return function(n) {
                        var a, r = [];

                        function i() {
                            a = e(r.map((function(e) {
                                return e.props
                            }))), t(a)
                        }
                        var u = function(e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }
                            Object(j.a)(t, e), t.peek = function() {
                                return a
                            };
                            var o = t.prototype;
                            return o.componentDidMount = function() {
                                r.push(this), i()
                            }, o.componentDidUpdate = function() {
                                i()
                            }, o.componentWillUnmount = function() {
                                var e = r.indexOf(this);
                                r.splice(e, 1), i()
                            }, o.render = function() {
                                return c.a.createElement(n, this.props)
                            }, t
                        }(o.PureComponent);
                        return Object(v.a)(u, "displayName", "SideEffect(" + function(e) {
                            return e.displayName || e.name || "Component"
                        }(n) + ")"), u
                    }
                },
                y = function(e) {
                    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
                    return t
                },
                E = function(e) {
                    return Array.isArray(e) ? e : [e]
                },
                x = function() {
                    return document && y(document.querySelectorAll("[data-no-focus-lock]")).some((function(e) {
                        return e.contains(document.activeElement)
                    }))
                },
                T = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                w = function(e) {
                    return E(e).filter(Boolean).reduce((function(e, t) {
                        var n = t.getAttribute("data-focus-lock");
                        return e.push.apply(e, n ? function e(t) {
                            for (var n = t.length, a = 0; a < n; a += 1)
                                for (var r = function(n) {
                                        if (a !== n && t[a].contains(t[n])) return {
                                            v: e(t.filter((function(e) {
                                                return e !== t[n]
                                            })))
                                        }
                                    }, o = 0; o < n; o += 1) {
                                    var c = r(o);
                                    if ("object" === ("undefined" === typeof c ? "undefined" : T(c))) return c.v
                                }
                            return t
                        }(y(function e(t) {
                            return t.parentNode ? e(t.parentNode) : t
                        }(t).querySelectorAll('[data-focus-lock="' + n + '"]:not([data-focus-lock-disabled="disabled"])'))) : [t]), e
                    }), [])
                },
                k = function(e) {
                    return e === document.activeElement
                },
                R = function(e) {
                    var t = document && document.activeElement;
                    return !(!t || t.dataset && t.dataset.focusGuard) && w(e).reduce((function(e, n) {
                        return e || n.contains(t) || function(e) {
                            return t = y(e.querySelectorAll("iframe")), n = k, !!t.filter((function(e) {
                                return e === n
                            }))[0];
                            var t, n
                        }(n)
                    }), !1)
                },
                C = function(e, t) {
                    var n = e.tabIndex - t.tabIndex,
                        a = e.index - t.index;
                    if (n) {
                        if (!e.tabIndex) return 1;
                        if (!t.tabIndex) return -1
                    }
                    return n || a
                },
                A = function(e, t, n) {
                    return y(e).map((function(e, t) {
                        return {
                            node: e,
                            index: t,
                            tabIndex: n && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
                        }
                    })).filter((function(e) {
                        return !t || e.tabIndex >= 0
                    })).sort(C)
                },
                N = ["button:enabled:not([readonly])", "select:enabled:not([readonly])", "textarea:enabled:not([readonly])", "input:enabled:not([readonly])", "a[href]", "area[href]", "iframe", "object", "embed", "[tabindex]", "[contenteditable]", "[autofocus]"],
                I = N.join(","),
                _ = I + ", [data-focus-guard]",
                L = function(e, t) {
                    return e.reduce((function(e, n) {
                        return e.concat(y(n.querySelectorAll(t ? _ : I)), n.parentNode ? y(n.parentNode.querySelectorAll(N.join(","))).filter((function(e) {
                            return e === n
                        })) : [])
                    }), [])
                },
                S = function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return n.push(t), t.parentNode && e(t.parentNode, n), n
                },
                M = function(e, t) {
                    for (var n = S(e), a = S(t), r = 0; r < n.length; r += 1) {
                        var o = n[r];
                        if (a.indexOf(o) >= 0) return o
                    }
                    return !1
                },
                B = function(e) {
                    return y(e).filter((function(e) {
                        return function e(t) {
                            return !t || t === document || t.nodeType === Node.DOCUMENT_NODE || !((n = window.getComputedStyle(t, null)) && n.getPropertyValue && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility"))) && e(t.parentNode);
                            var n
                        }(e)
                    })).filter((function(e) {
                        return function(e) {
                            return !(("INPUT" === e.tagName || "BUTTON" === e.tagName) && ("hidden" === e.type || e.disabled))
                        }(e)
                    }))
                },
                F = function(e, t) {
                    return A(B(L(e, t)), !0, t)
                },
                D = function(e) {
                    return B(function(e) {
                        var t = e.querySelectorAll("[data-autofocus-inside]");
                        return y(t).map((function(e) {
                            return L([e])
                        })).reduce((function(e, t) {
                            return e.concat(t)
                        }), [])
                    }(e))
                },
                H = function(e) {
                    return "INPUT" === e.tagName && "radio" === e.type
                },
                P = function(e) {
                    return e[0] && e.length > 1 && H(e[0]) && e[0].name ? function(e, t) {
                        return t.filter(H).filter((function(t) {
                            return t.name === e.name
                        })).filter((function(e) {
                            return e.checked
                        }))[0] || e
                    }(e[0], e) : e[0]
                },
                G = function(e) {
                    return e.dataset && e.dataset.focusGuard
                },
                z = function(e) {
                    return !G(e)
                },
                W = function(e, t, n) {
                    var a = E(e),
                        r = E(t),
                        o = a[0],
                        c = null;
                    return r.filter(Boolean).forEach((function(e) {
                        c = M(c || e, e) || c, n.filter(Boolean).forEach((function(e) {
                            var t = M(o, e);
                            t && (c = !c || t.contains(c) ? t : M(t, c))
                        }))
                    })), c
                },
                K = function(e, t) {
                    var n = document && document.activeElement,
                        a = w(e).filter(z),
                        r = W(n || e, e, a),
                        o = F(a).filter((function(e) {
                            var t = e.node;
                            return z(t)
                        }));
                    if (o[0] || (o = (c = a, A(B(L(c)), !1)).filter((function(e) {
                            var t = e.node;
                            return z(t)
                        })))[0]) {
                        var c, i, u = F([r]).map((function(e) {
                                return e.node
                            })),
                            s = function(e, t) {
                                var n = new Map;
                                return t.forEach((function(e) {
                                    return n.set(e.node, e)
                                })), e.map((function(e) {
                                    return n.get(e)
                                })).filter(Boolean)
                            }(u, o),
                            l = s.map((function(e) {
                                return e.node
                            })),
                            b = function(e, t, n, a, r) {
                                var o = e.length,
                                    c = e[0],
                                    i = e[o - 1];
                                if (!(e.indexOf(n) >= 0)) {
                                    var u = t.indexOf(n),
                                        s = t.indexOf(a || u),
                                        l = e.indexOf(a),
                                        b = u - s,
                                        d = t.indexOf(c),
                                        f = t.indexOf(i);
                                    return -1 === u || -1 === l ? e.indexOf(r.length ? P(r) : P(e)) : !b && l >= 0 ? l : u <= d && G(n) && Math.abs(b) > 1 ? 0 : b && Math.abs(b) > 1 ? l : u <= d ? o - 1 : u > f ? 0 : b ? Math.abs(b) > 1 ? l : (o + l + b) % o : void 0
                                }
                            }(l, u, n, t, l.filter((i = function(e) {
                                return e.reduce((function(e, t) {
                                    return e.concat(D(t))
                                }), [])
                            }(a), function(e) {
                                return !!e.autofocus || e.dataset && !!e.dataset.autofocus || i.indexOf(e) >= 0
                            })));
                        return void 0 === b ? b : s[b]
                    }
                },
                U = 0,
                V = !1,
                Y = function(e, t) {
                    var n, a = K(e, t);
                    if (!V && a) {
                        if (U > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), V = !0, void setTimeout((function() {
                            V = !1
                        }), 1);
                        U++, (n = a.node).focus(), n.contentWindow && n.contentWindow.focus(), U--
                    }
                };

            function q(e) {
                var t = window.setImmediate;
                "undefined" !== typeof t ? t(e) : setTimeout(e, 1)
            }
            var J = function() {
                    return document && document.activeElement === document.body || x()
                },
                Z = null,
                Q = null,
                X = null,
                $ = !1,
                ee = function() {
                    return !0
                };

            function te(e, t, n, a) {
                var r = null,
                    o = e;
                do {
                    var c = a[o];
                    if (c.guard) c.node.dataset.focusAutoGuard && (r = c);
                    else {
                        if (!c.lockItem) break;
                        if (o !== e) return;
                        r = null
                    }
                } while ((o += n) !== t);
                r && (r.node.tabIndex = 0)
            }
            var ne = function(e) {
                    return e && "current" in e ? e.current : e
                },
                ae = function() {
                    var e, t = !1;
                    if (Z) {
                        var n = Z,
                            a = n.observed,
                            r = n.persistentFocus,
                            o = n.autoFocus,
                            c = n.shards,
                            i = a || X && X.portaledElement,
                            u = document && document.activeElement;
                        if (i) {
                            var s = [i].concat(c.map(ne).filter(Boolean));
                            if (u && ! function(e) {
                                    return (Z.whiteList || ee)(e)
                                }(u) || (r || $ || !J() || !Q && o) && (!i || R(s) || (e = u, X && X.portaledElement === e) || (document && !Q && u && !o ? (u.blur(), document.body.focus()) : (t = Y(s, Q), X = {})), $ = !1, Q = document && document.activeElement), document) {
                                var l = document && document.activeElement,
                                    b = function(e) {
                                        var t = w(e).filter(z),
                                            n = W(e, e, t),
                                            a = F([n], !0),
                                            r = F(t).filter((function(e) {
                                                var t = e.node;
                                                return z(t)
                                            })).map((function(e) {
                                                return e.node
                                            }));
                                        return a.map((function(e) {
                                            var t = e.node;
                                            return {
                                                node: t,
                                                index: e.index,
                                                lockItem: r.indexOf(t) >= 0,
                                                guard: G(t)
                                            }
                                        }))
                                    }(s),
                                    d = b.find((function(e) {
                                        return e.node === l
                                    }));
                                if (d) {
                                    b.filter((function(e) {
                                        var t = e.guard,
                                            n = e.node;
                                        return t && n.dataset.focusAutoGuard
                                    })).forEach((function(e) {
                                        return e.node.removeAttribute("tabIndex")
                                    }));
                                    var f = b.indexOf(d);
                                    te(f, b.length, 1, b), te(f, -1, -1, b)
                                }
                            }
                        }
                    }
                    return t
                },
                re = function(e) {
                    ae() && e && (e.stopPropagation(), e.preventDefault())
                },
                oe = function() {
                    return q(ae)
                },
                ce = function(e) {
                    var t = e.target,
                        n = e.currentTarget;
                    n.contains(t) || (X = {
                        observerNode: n,
                        portaledElement: t
                    })
                },
                ie = function() {
                    $ = !0
                },
                ue = function() {
                    document.addEventListener("focusin", re, !0), document.addEventListener("focusout", oe), window.addEventListener("blur", ie)
                },
                se = function() {
                    document.removeEventListener("focusin", re, !0), document.removeEventListener("focusout", oe), window.removeEventListener("blur", ie)
                };
            b.assignSyncMedium(ce), d.assignMedium(oe), f.assignMedium((function(e) {
                return e({
                    moveFocusInside: Y,
                    focusInside: R
                })
            }));
            var le = g((function(e) {
                    return e.filter((function(e) {
                        return !e.disabled
                    }))
                }), (function(e) {
                    var t = e.slice(-1)[0];
                    t && !Z && ue();
                    var n = Z,
                        a = n && t && t.id === n.id;
                    Z = t, n && !a && (n.onDeactivation(), e.filter((function(e) {
                        return e.id === n.id
                    })).length || n.returnFocus(!t)), t ? (Q = null, a && n.observed === t.observed || t.onActivation(), ae(!0), q(ae)) : (se(), Q = null)
                }))((function() {
                    return null
                })),
                be = c.a.forwardRef((function(e, t) {
                    return c.a.createElement(h, Object(r.a)({
                        sideCar: le,
                        ref: t
                    }, e))
                })),
                de = h.propTypes || {},
                fe = (de.sideCar, Object(a.a)(de, ["sideCar"]));
            be.propTypes = fe;
            var pe = be;
            t.a = pe
        },
        jvFD: function(e, t, n) {
            e.exports = n("KeDb")
        },
        kc86: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n("zygG"),
                r = n("zjfJ"),
                o = n("ERkP"),
                c = n.n(o);

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var s = {
                    value: null,
                    loading: !1,
                    error: null,
                    params: {}
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            skipInitial: !0,
                            useLast: !0,
                            initialValue: null
                        },
                        n = function(e, t) {
                            switch (t.type) {
                                case "load":
                                    return u({}, e, {
                                        loading: t.payload,
                                        value: null
                                    });
                                case "value":
                                    return u({}, e, {
                                        value: t.payload
                                    });
                                case "error":
                                    return u({}, e, {
                                        error: t.payload
                                    });
                                case "params":
                                    return u({}, e, {
                                        params: t.payload,
                                        value: null
                                    });
                                default:
                                    return e
                            }
                        },
                        r = c.a.useReducer(n, u({}, s, {
                            value: t.initialValue
                        })),
                        o = Object(a.a)(r, 2),
                        i = o[0],
                        l = o[1],
                        b = c.a.useRef(!0),
                        d = c.a.useRef(!0),
                        f = c.a.useRef(0);
                    c.a.useEffect((function() {
                        return function() {
                            b.current = !1
                        }
                    }), []), c.a.useEffect((function() {
                        if (d.current && t.skipInitial) d.current = !1;
                        else {
                            f.current += 1;
                            var n = f.current;
                            b.current && (l({
                                type: "load",
                                payload: !0
                            }), e(i.params).then((function(e) {
                                b.current && (!t.useLast || t.useLast && n === f.current) && (l({
                                    type: "load",
                                    payload: !1
                                }), l({
                                    type: "value",
                                    payload: e
                                }))
                            })).catch((function(e) {
                                b.current && (!t.useLast || t.useLast && n === f.current) && (l({
                                    type: "load",
                                    payload: !1
                                }), l({
                                    type: "error",
                                    payload: e
                                }))
                            })))
                        }
                    }), [i.params, l, t.skipInitial, t.useLast, e]);
                    var p = function(e) {
                        return l({
                            type: "params",
                            payload: e
                        })
                    };
                    return u({}, i, {
                        setParams: p
                    })
                }
        }
    }
]);
//# sourceMappingURL=f4c7ee619aaa7ecd778759700e245f307aa0260d.5cce6a9eea1d07e86942.js.map