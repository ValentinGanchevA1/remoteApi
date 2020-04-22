(window.omniJsonp = window.omniJsonp || []).push([
    [11], {
        "23aj": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "DynamicPage", (function() {
                return jt
            }));
            var a = n("VtSi"),
                c = n.n(a),
                r = n("ERkP"),
                i = n.n(r),
                o = n("AU4o"),
                l = n.n(o),
                b = n("/u09"),
                s = n("7xIC"),
                u = n("Gb8u"),
                O = n("9fIP"),
                d = n("MMYH"),
                p = n("8K1b"),
                j = n("K/z8"),
                m = n("sRHE"),
                f = n("cxan"),
                g = n("fGyu"),
                T = n("zygG"),
                h = n("LOM1"),
                y = n("zjfJ"),
                x = n("5IAQ"),
                E = n("HbGN"),
                v = n("XTXV"),
                _ = n("ysqo"),
                R = n.n(_),
                S = n("Kq2c"),
                k = n("I6rk"),
                L = n("l1C2"),
                w = (i.a.createElement, function(e) {
                    var t = e.text,
                        n = Object(S.useTheme)().bp;
                    return Object(L.b)("p", {
                        css: Object(x.a)(Object(y.a)({
                            display: "none"
                        }, n.FROM_TABLET, {
                            display: "block"
                        }), ""),
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })
                }),
                M = (i.a.createElement, function(e) {
                    var t = e.endDate,
                        n = e.variant,
                        a = Object(S.useTheme)().bp;
                    return Object(L.b)("div", {
                        css: Object(x.a)(Object(y.a)({
                            marginTop: 10
                        }, a.FROM_TABLET, {
                            marginTop: 20
                        }), "")
                    }, Object(L.b)(S.Countdown, {
                        endDate: t,
                        variant: n || "DARK"
                    }))
                }),
                C = n("xWEo"),
                P = n("Bit+"),
                F = n("LsVC"),
                A = n("v2bw");
            i.a.createElement;

            function B(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var I = {
                    name: "1xhj18k",
                    styles: "display:flex;flex-direction:row;"
                },
                H = {
                    name: "6su6fj",
                    styles: "flex-shrink:0;"
                },
                N = function(e) {
                    var t, n = e.id,
                        a = e.title,
                        c = e.text,
                        r = e.iconType,
                        o = e.link,
                        l = e.layout,
                        b = Object(S.useTheme)(),
                        s = b.bp,
                        u = b.colors,
                        O = Oe(l).fontSize,
                        d = Object(A.b)().index,
                        p = i.a.useCallback((function(e) {
                            Object(F.g)({
                                id: n,
                                index: d,
                                type: Object(F.a)("BANNER", e.type, "BUTTON" === e.type ? e.action : void 0),
                                name: a
                            })
                        }), [n, d, a]);
                    return Object(L.b)("div", {
                        css: Object(x.a)(Object(y.a)({
                            paddingTop: 20
                        }, s.ONLY_MOBILE, {
                            display: "none"
                        }), "")
                    }, Object(L.b)("div", {
                        css: I
                    }, r && Object(L.b)(C.a, {
                        name: r,
                        width: "20",
                        height: "20",
                        color: u.INFO,
                        css: H
                    }), Object(L.b)("p", {
                        css: Object(x.a)((t = {
                            margin: 0,
                            paddingLeft: 5,
                            fontSize: O.legal.mobile,
                            lineHeight: "".concat(O.legal.mobile + 2, "px")
                        }, Object(y.a)(t, s.FROM_TABLET, {
                            fontSize: O.legal.tablet,
                            lineHeight: "".concat(O.legal.tablet + 2, "px")
                        }), Object(y.a)(t, s.FROM_DESKTOP, {
                            fontSize: O.legal.desktop
                        }), Object(y.a)(t, s.FROM_LARGE_DESKTOP, {
                            lineHeight: "".concat(O.legal.desktop + 2, "px")
                        }), t), ""),
                        dangerouslySetInnerHTML: {
                            __html: c
                        }
                    })), o.map((function(e, t) {
                        return Object(L.b)(P.a, {
                            key: t,
                            onClick: function() {
                                return p(e)
                            },
                            css: Object(x.a)(Object(y.a)({
                                paddingTop: 15
                            }, s.FROM_TABLET, {
                                fontSize: "".concat(O.legal.tablet + 2, "px")
                            }), ""),
                            action: D({}, e, {
                                id: Object(F.a)(a, e.text, "GloriousLegalDetails_Button")
                            })
                        })
                    })))
                };
            i.a.createElement;
            var z = {
                    name: "1xn3edc",
                    styles: "margin-bottom:30px;"
                },
                K = {
                    name: "epvm6",
                    styles: "white-space:nowrap;"
                },
                G = function(e) {
                    var t, n, a, c = e.beforeText,
                        r = e.actualPrice,
                        i = e.afterText,
                        o = e.previousPrice,
                        l = e.layout,
                        b = Object(S.useTheme)().bp,
                        s = Oe(l).fontSize,
                        u = (t = {
                            fontSize: s.price.mobile,
                            lineHeight: "".concat(s.price.mobile + 2, "px")
                        }, Object(y.a)(t, b.FROM_TABLET, {
                            fontSize: s.price.tablet,
                            lineHeight: "".concat(s.price.tablet + 2, "px")
                        }), Object(y.a)(t, b.FROM_DESKTOP, {
                            fontSize: s.price.desktop
                        }), Object(y.a)(t, b.FROM_LARGE_DESKTOP, {
                            lineHeight: "".concat(s.price.desktop + 2, "px")
                        }), t);
                    return Object(L.b)("div", {
                        css: Object(x.a)(Object(y.a)({
                            fontWeight: "bold"
                        }, b.ONLY_MOBILE, {
                            display: "none"
                        }), "")
                    }, Object(L.b)(S.Separator, {
                        css: z
                    }), Object(L.b)("span", {
                        css: K
                    }, Object(L.b)("span", {
                        css: u,
                        dangerouslySetInnerHTML: {
                            __html: c
                        }
                    }), Object(L.b)("span", {
                        css: Object(x.a)((n = {
                            fontSize: Number("".concat(2 * s.price.mobile)),
                            lineHeight: "".concat(2 * s.price.mobile, "px")
                        }, Object(y.a)(n, b.FROM_TABLET, {
                            fontSize: Number("".concat(2 * s.price.tablet)),
                            lineHeight: "".concat(s.price.tablet + 2, "px")
                        }), Object(y.a)(n, b.FROM_DESKTOP, {
                            fontSize: Number("".concat(2 * s.price.desktop))
                        }), Object(y.a)(n, b.FROM_LARGE_DESKTOP, {
                            lineHeight: "".concat(s.price.desktop + 2, "px")
                        }), n), ""),
                        dangerouslySetInnerHTML: {
                            __html: r
                        }
                    }), Object(L.b)("span", {
                        css: u,
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    })), Object(L.b)("span", {
                        css: Object(x.a)([u, (a = {
                            textDecoration: "line-through",
                            whiteSpace: "nowrap"
                        }, Object(y.a)(a, b.FROM_TABLET, {
                            paddingLeft: 15
                        }), Object(y.a)(a, b.TO_DESKTOP, {
                            display: "block",
                            paddingLeft: 0
                        }), a)], ""),
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }))
                },
                W = (i.a.createElement, function(e) {
                    var t = e.countdown,
                        n = e.description,
                        a = e.price,
                        c = e.legal,
                        r = e.variant,
                        o = e.layout;
                    return Object(L.b)(i.a.Fragment, null, n && Object(L.b)(w, {
                        text: n
                    }), a && Object(L.b)(G, Object(f.a)({}, a, {
                        variant: r,
                        layout: o
                    })), c && Object(L.b)(N, Object(f.a)({}, c, {
                        variant: r,
                        layout: o
                    })), t && Object(L.b)(M, t))
                });
            W.displayName = "DefaultContent";
            i.a.createElement;
            var U = function(e) {
                    var t, n, a = e.element,
                        c = e.variant,
                        r = Object(S.useTheme)(),
                        i = r.bp,
                        o = r.colors,
                        l = a.id,
                        b = a.title,
                        s = a.description,
                        u = a.iconType,
                        O = a.actions,
                        d = o[(ie[c] || ie.WHITE).text],
                        p = (t = {
                            padding: 0,
                            width: 130
                        }, Object(y.a)(t, i.FROM_TABLET, {
                            width: 167
                        }), Object(y.a)(t, i.FROM_DESKTOP, {
                            width: 190
                        }), t);
                    return Object(L.b)("div", {
                        key: l,
                        css: Object(x.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 10,
                            flex: 1,
                            paddingRight: 15
                        }, i.FROM_DESKTOP, {
                            marginTop: 20,
                            padding: "0 10px"
                        }), "")
                    }, u && Object(L.b)(C.a, {
                        name: u,
                        color: o.ORANGE_DARK,
                        css: Object(x.a)(Object(y.a)({
                            display: "none"
                        }, i.FROM_LARGE_MOBILE, {
                            display: "block",
                            flexShrink: 0,
                            width: 35,
                            height: 35,
                            marginTop: 20
                        }), "")
                    }), Object(L.b)("p", {
                        css: Object(x.a)((n = {
                            flexShrink: 0,
                            color: d,
                            fontSize: 12,
                            lineHeight: "14px",
                            fontWeight: "bold"
                        }, Object(y.a)(n, i.FROM_TABLET, {
                            fontSize: 14,
                            lineHeight: "16px"
                        }), Object(y.a)(n, i.FROM_DESKTOP, {
                            fontSize: 16,
                            lineHeight: "18px"
                        }), n), "")
                    }, b), Object(L.b)("p", {
                        css: Object(x.a)(Object(y.a)({
                            display: "none"
                        }, i.FROM_DESKTOP, {
                            display: "block",
                            flexBasis: "100%",
                            color: d,
                            margin: 0,
                            paddingBottom: 10,
                            fontSize: 14,
                            lineHeight: "18px"
                        }), "")
                    }, s), O && Object(L.b)("div", {
                        css: Object(x.a)(Object(y.a)({
                            display: "none"
                        }, i.FROM_DESKTOP, {
                            flexShrink: 0,
                            display: "flex",
                            marginTop: 10,
                            alignItems: "center",
                            "*:not(:last-child)": {
                                marginRight: 20
                            },
                            fontSize: 14,
                            lineHeight: "18px"
                        }), "")
                    }, O.map((function(e, t) {
                        return Object(L.b)(P.a, {
                            key: t,
                            css: "LINK" !== e.type ? p : {},
                            action: e
                        })
                    }))))
                },
                V = (i.a.createElement, function(e) {
                    var t, n = e.elements,
                        a = e.variant,
                        c = Object(S.useTheme)().bp;
                    return n ? Object(L.b)("div", {
                        css: Object(x.a)((t = {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }, Object(y.a)(t, c.FROM_LARGE_MOBILE, {
                            paddingBottom: "20px 0"
                        }), Object(y.a)(t, c.FROM_TABLET, {
                            padding: 0
                        }), t), "")
                    }, n.map((function(e) {
                        return Object(L.b)(U, {
                            key: e.id,
                            element: e,
                            variant: a
                        })
                    }))) : null
                });
            V.displayName = "ColumnsContent";
            i.a.createElement;
            var q = {
                    name: "7w6khc",
                    styles: "padding-top:20px;"
                },
                J = {
                    name: "ss0py5",
                    styles: "display:flex;align-items:center;:not(:last-of-type){margin-bottom:20px;}"
                },
                Z = {
                    name: "3cyd2n",
                    styles: "margin-right:24px;"
                },
                Y = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                X = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Q = {
                    name: "1cev0y9",
                    styles: "margin:0;font-size:14px;"
                },
                $ = function(e) {
                    var t = e.elements,
                        n = e.variant,
                        a = Object(S.useTheme)().colors[(ie[n] || ie.WHITE).text];
                    return t ? Object(L.b)("ul", {
                        css: q
                    }, t.map((function(e, t) {
                        var n = e.description,
                            c = e.title,
                            r = e.iconType;
                        return Object(L.b)("li", {
                            key: t,
                            css: J
                        }, r && Object(L.b)(C.a, {
                            name: r,
                            css: Z,
                            fill: a,
                            height: 28,
                            width: 28
                        }), Object(L.b)("div", {
                            css: Y
                        }, c && Object(L.b)("strong", {
                            css: X
                        }, c), n && Object(L.b)("p", {
                            css: Q
                        }, n)))
                    }))) : null
                };
            $.displayName = "ListContent";
            i.a.createElement;

            function ee(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ee(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ne = function(e) {
                var t, n, a = e.actions,
                    c = e.id,
                    r = e.title,
                    o = e.layout,
                    l = Object(S.useTheme)().bp,
                    b = Oe(o).size,
                    s = Object(A.b)().index,
                    u = 30 === b,
                    O = i.a.useCallback((function(e) {
                        Object(F.g)({
                            id: c,
                            index: s,
                            type: Object(F.a)("BANNER", e.type, "BUTTON" === e.type ? e.action : void 0),
                            name: r
                        })
                    }), [c, s, r]),
                    d = (t = {
                        padding: 0,
                        width: "100%",
                        maxWidth: u ? 260 : 130
                    }, Object(y.a)(t, l.FROM_TABLET, {
                        maxWidth: u ? 260 : 167
                    }), Object(y.a)(t, l.FROM_DESKTOP, {
                        maxWidth: u ? 260 : 190
                    }), t);
                return Object(L.b)("div", {
                    css: Object(x.a)((n = {
                        marginTop: 10,
                        display: "flex",
                        flexWrap: "wrap",
                        fontSize: "0.875rem",
                        alignItems: "center"
                    }, Object(y.a)(n, l.FROM_TABLET, {
                        marginTop: 30,
                        fontSize: "1rem"
                    }), Object(y.a)(n, l.FROM_DESKTOP, {
                        marginTop: u ? 30 : 40
                    }), Object(y.a)(n, "*:not(:last-child)", {
                        marginRight: 20
                    }), Object(y.a)(n, "button, a", {
                        marginTop: 10
                    }), n), "")
                }, a.map((function(e, t) {
                    return Object(L.b)(P.a, {
                        key: t,
                        onClick: function() {
                            return O(e)
                        },
                        css: "LINK" !== e.type ? d : {},
                        action: te({}, e, {
                            id: Object(F.a)(r, e.text, "GloriousSG_Button")
                        })
                    })
                })))
            };
            i.a.createElement;
            var ae = {
                    name: "1whfniv",
                    styles: "flex-shrink:0;display:flex;margin-top:10px;align-items:center;*:not(:last-child){margin-right:20px;}"
                },
                ce = function(e) {
                    var t = e.element,
                        n = (e.variant, Object(S.useTheme)()),
                        a = n.bp,
                        c = n.colors,
                        r = t.id,
                        i = t.iconType,
                        o = t.bgColor,
                        l = t.badgeColor,
                        b = t.iconColor,
                        s = t.text,
                        u = t.actions;
                    return Object(L.b)("div", {
                        key: r,
                        css: Object(x.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            margin: 5,
                            flexBasis: 1,
                            flexGrow: 1,
                            padding: "10px 15px",
                            backgroundColor: "".concat(o ? c[o] : c.STEEL)
                        }, a.FROM_LARGE_DESKTOP, {
                            flexDirection: "column",
                            margin: "40px 10px 0 0",
                            ":last-child": {
                                marginRight: 0
                            }
                        }), "")
                    }, Object(L.b)("div", {
                        css: Object(x.a)({
                            borderRadius: "50%",
                            width: 65,
                            height: 65,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            backgroundColor: "".concat(l ? c[l] : c.ORANGE_DARK)
                        }, "")
                    }, i && Object(L.b)(C.a, {
                        name: i,
                        color: b ? c[b] : c.WHITE,
                        css: Object(x.a)(Object(y.a)({
                            width: 30,
                            height: 30,
                            flexShrink: 0,
                            flexGrow: 1
                        }, a.FROM_TABLET, {
                            width: 35,
                            height: 35
                        }), "")
                    })), Object(L.b)("p", {
                        css: Object(x.a)(Object(y.a)({
                            flexShrink: 1,
                            flexGrow: 0,
                            color: c.WHITE,
                            fontSize: 16,
                            fontWeight: "bold",
                            margin: 0,
                            paddingLeft: 10
                        }, a.FROM_LARGE_DESKTOP, {
                            paddingLeft: 0,
                            textAlign: "center",
                            marginTop: 10
                        }), "")
                    }, s), u && Object(L.b)("div", {
                        css: ae
                    }, u.map((function(e) {
                        var t;
                        return Object(L.b)(P.a, {
                            key: e.id,
                            css: "LINK" !== e.type && (t = {
                                fontSize: 14,
                                padding: 0,
                                width: 130
                            }, Object(y.a)(t, a.FROM_TABLET, {
                                width: 167
                            }), Object(y.a)(t, a.FROM_DESKTOP, {
                                width: 190
                            }), t),
                            action: e
                        })
                    }))))
                },
                re = (i.a.createElement, function(e) {
                    var t, n = e.elements,
                        a = e.variant,
                        c = Object(S.useTheme)().bp;
                    return Object(L.b)("div", {
                        css: Object(x.a)((t = {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            marginTop: 20
                        }, Object(y.a)(t, c.FROM_TABLET, {
                            paddingBottom: 20
                        }), Object(y.a)(t, c.FROM_LARGE_DESKTOP, {
                            flexDirection: "row",
                            paddingBottom: 20,
                            marginTop: 0
                        }), t), "")
                    }, n.map((function(e) {
                        return Object(L.b)(ce, {
                            key: e.id,
                            element: e,
                            variant: a
                        })
                    })))
                }),
                ie = (i.a.createElement, {
                    WHITE: {
                        text: "WHITE",
                        backgroundColor: "BLACK"
                    },
                    BLACK: {
                        text: "BLACK",
                        backgroundColor: "WHITE"
                    },
                    ORANGE_DARK: {
                        text: "WHITE",
                        backgroundColor: "ORANGE_DARK"
                    }
                }),
                oe = {
                    BLACK: "ORANGE_DARK",
                    WHITE: "ORANGE_DARK",
                    ORANGE_DARK: "BLACK"
                },
                le = {
                    PHOTO_LEFT: 100,
                    PHOTO_RIGHT: 100,
                    PHOTO_LEFT_SLIM: 80,
                    PHOTO_RIGHT_SLIM: 80,
                    PHOTO_LEFT_100: 100,
                    PHOTO_RIGHT_100: 100,
                    PHOTO_RIGHT_80: 80,
                    PHOTO_LEFT_80: 80,
                    PHOTO_LEFT_60: 60,
                    PHOTO_RIGHT_60: 60,
                    PHOTO_RIGHT_30: 30,
                    PHOTO_LEFT_30: 30
                },
                be = {
                    100: {
                        title: {
                            mobile: 24,
                            tablet: 40,
                            desktop: 60
                        },
                        subtitle: {
                            mobile: 16,
                            tablet: 16,
                            desktop: 16
                        },
                        price: {
                            mobile: 18,
                            tablet: 18,
                            desktop: 18
                        },
                        legal: {
                            mobile: 12,
                            tablet: 12,
                            desktop: 12
                        }
                    },
                    60: {
                        title: {
                            mobile: 24,
                            tablet: 24,
                            desktop: 40
                        },
                        subtitle: {
                            mobile: 16,
                            tablet: 24,
                            desktop: 40
                        },
                        price: {
                            mobile: 18,
                            tablet: 18,
                            desktop: 18
                        },
                        legal: {
                            mobile: 12,
                            tablet: 12,
                            desktop: 12
                        }
                    },
                    30: {
                        title: {
                            mobile: 24,
                            tablet: 40,
                            desktop: 40
                        },
                        subtitle: {
                            mobile: 16,
                            tablet: 40,
                            desktop: 40
                        },
                        price: {
                            mobile: 18,
                            tablet: 18,
                            desktop: 18
                        },
                        legal: {
                            mobile: 12,
                            tablet: 12,
                            desktop: 12
                        }
                    }
                },
                se = {
                    DEFAULT: W,
                    COLUMNS: V,
                    LIST: $,
                    BOXES: function(e) {
                        var t = e.id,
                            n = e.title,
                            a = e.layout,
                            c = e.variant,
                            r = (e.subtitle, e.elements),
                            o = e.price,
                            l = e.legal,
                            b = e.actions;
                        return Object(L.b)(i.a.Fragment, null, r && Object(L.b)(re, {
                            elements: r,
                            variant: c
                        }), o && Object(L.b)(G, Object(f.a)({}, o, {
                            variant: c,
                            layout: a
                        })), l && Object(L.b)(N, Object(f.a)({}, l, {
                            variant: c,
                            layout: a
                        })), b && Object(L.b)(ne, {
                            id: t,
                            title: n,
                            layout: a,
                            actions: b
                        }))
                    }
                },
                ue = function(e) {
                    return le[e] || le.PHOTO_LEFT_100
                },
                Oe = function(e) {
                    var t = function(e) {
                        return /PHOTO_LEFT/.test(e)
                    }(e);
                    return {
                        size: ue(e),
                        isPhotoLeft: t,
                        fontSize: function(e) {
                            var t = ue(e);
                            return be[t] || be[100]
                        }(e)
                    }
                },
                de = (i.a.createElement, function(e) {
                    var t, n, a = e.children,
                        c = e.backgroundColor,
                        r = e.layout,
                        i = Object(S.useTheme)(),
                        o = i.bp,
                        l = i.colors,
                        b = Oe(r),
                        s = b.isPhotoLeft,
                        u = 30 === b.size;
                    return Object(L.b)("div", {
                        css: Object(x.a)(Object(y.a)({
                            backgroundColor: c ? l[c] : void 0,
                            flex: 4,
                            display: "flex",
                            alignSelf: "stretch",
                            alignItems: "center",
                            minHeight: "50vw"
                        }, o.FROM_TABLET, {
                            justifyContent: s ? "flex-start" : "flex-end",
                            order: s ? 1 : 0,
                            minHeight: "100%"
                        }), "")
                    }, Object(L.b)("div", {
                        css: Object(x.a)([Object(y.a)({
                            padding: 20,
                            maxWidth: 620,
                            width: "100%"
                        }, o.FROM_TABLET, {
                            padding: u ? 40 : 20
                        }), s && (t = {}, Object(y.a)(t, o.FROM_TABLET, {
                            paddingLeft: "3rem"
                        }), Object(y.a)(t, o.FROM_DESKTOP, {
                            paddingLeft: "5rem"
                        }), t), !s && (n = {}, Object(y.a)(n, o.FROM_TABLET, {
                            paddingRight: "3rem"
                        }), Object(y.a)(n, o.FROM_DESKTOP, {
                            paddingLeft: 16,
                            paddingRight: "5rem",
                            marginRight: "1rem"
                        }), n)], "")
                    }, a))
                });
            de.displayName = "Content";
            i.a.createElement;
            var pe = i.a.memo((function(e) {
                var t, n = e.layout,
                    a = Object(S.useTheme)().bp,
                    c = Oe(n),
                    r = c.isPhotoLeft,
                    i = c.size;
                return Object(L.b)("div", {
                    css: Object(x.a)((t = {
                        flex: "4 0 auto"
                    }, Object(y.a)(t, a.FROM_TABLET, {
                        order: r ? 0 : 1
                    }), Object(y.a)(t, "&::before", Object(y.a)({
                        content: "''",
                        display: "block",
                        paddingBottom: "100%",
                        width: 1,
                        marginLeft: "-1px",
                        float: "left",
                        height: 0
                    }, a.FROM_TABLET, {
                        paddingBottom: "".concat(i, "%")
                    })), t), "")
                })
            }));
            pe.displayName = "Spacer";
            var je = n("tHt9"),
                me = function(e, t) {
                    return {
                        fontSize: "calc(".concat(e, "px + (").concat(t - e, ") * ((100vw - 992px) / (1280 - 992)) )"),
                        lineHeight: "calc(".concat(e, "px + (").concat(t - e, ") * ((100vw - 992px) / (1280 - 992)) + 2px)")
                    }
                };
            i.a.createElement;
            var fe = {
                    name: "cet0rr",
                    styles: "margin-bottom:0.5rem;"
                },
                ge = function(e) {
                    var t, n = e.text,
                        a = e.variant,
                        c = e.layout,
                        r = Object(S.useTheme)(),
                        i = r.bp,
                        o = r.colors,
                        l = Oe(c).fontSize,
                        b = me(l.subtitle.tablet, l.subtitle.desktop);
                    return Object(L.b)("div", {
                        css: fe
                    }, Object(L.b)("h1", {
                        css: Object(x.a)((t = {
                            color: o[oe[a]],
                            fontSize: l.subtitle.mobile,
                            lineHeight: "".concat(l.subtitle.mobile + 2, "px")
                        }, Object(y.a)(t, i.FROM_TABLET, {
                            fontSize: l.subtitle.tablet,
                            lineHeight: "".concat(l.subtitle.tablet + 2, "px")
                        }), Object(y.a)(t, i.FROM_DESKTOP, b), Object(y.a)(t, i.FROM_LARGE_DESKTOP, {
                            fontSize: l.subtitle.desktop,
                            lineHeight: "".concat(l.subtitle.desktop + 2, "px")
                        }), t), ""),
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    }))
                },
                Te = (i.a.createElement, function(e) {
                    var t, n = e.text,
                        a = e.layout,
                        c = Object(S.useTheme)().bp,
                        r = Oe(a).fontSize,
                        i = me(r.title.tablet, r.title.desktop);
                    return Object(L.b)("h2", {
                        css: Object(x.a)((t = {
                            fontSize: r.title.mobile,
                            lineHeight: "".concat(r.title.mobile + 2, "px")
                        }, Object(y.a)(t, c.FROM_TABLET, {
                            fontSize: r.title.tablet,
                            lineHeight: "".concat(r.title.tablet + 2, "px")
                        }), Object(y.a)(t, c.FROM_DESKTOP, i), Object(y.a)(t, c.FROM_LARGE_DESKTOP, {
                            fontSize: r.title.desktop,
                            lineHeight: "".concat(r.title.desktop + 2, "px")
                        }), t), ""),
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    })
                });
            i.a.createElement;
            var he = {
                    name: "i6bazn",
                    styles: "overflow:hidden;"
                },
                ye = i.a.memo((function(e) {
                    var t, n = e.content,
                        a = e.id,
                        c = e.actions,
                        r = e.layout,
                        o = e.variant,
                        l = e.backgroundColor,
                        b = e.media,
                        s = e.mobileMedia,
                        u = e.legalText,
                        O = e.type,
                        d = Object(E.a)(e, ["content", "id", "actions", "layout", "variant", "backgroundColor", "media", "mobileMedia", "legalText", "type"]),
                        p = n.subtitle,
                        j = n.title,
                        m = Object(S.useTheme)(),
                        g = m.colors,
                        h = m.bp,
                        _ = m.selectors,
                        w = Object(k.a)(),
                        M = Object(A.b)(),
                        C = M.index,
                        P = M.isInViewport,
                        B = i.a.useState(0 === C),
                        D = Object(T.a)(B, 2),
                        I = D[0],
                        H = D[1],
                        N = i.a.useState(!1),
                        z = Object(T.a)(N, 2),
                        K = z[0],
                        G = z[1],
                        W = ie[o] || ie.WHITE,
                        U = g[W.text],
                        V = g[W.backgroundColor];
                    i.a.useEffect((function() {
                        0 === C && H(!0)
                    }), [C]), i.a.useEffect((function() {
                        P && !K && (Object(F.h)({
                            id: a,
                            index: C,
                            name: j,
                            type: "BANNER"
                        }), G(!0))
                    }), [a, C, P, j, K]);
                    var q = i.a.useCallback((function(e) {
                            e && !I && H(!0)
                        }), [I]),
                        J = i.a.useMemo((function() {
                            return w && s ? s : b
                        }), [b, s, w]),
                        Z = Oe(r),
                        Y = Z.isPhotoLeft,
                        X = Z.size,
                        Q = se[n.type];
                    return Object(L.b)(v.a, {
                        onChange: q,
                        rootMargin: "300px"
                    }, 0 === C && J && Object(L.b)(R.a, null, Object(L.b)("link", {
                        rel: "preload",
                        href: J.src,
                        as: "image"
                    })), Object(L.b)("div", {
                        css: he
                    }, Object(L.b)(je.a, Object(f.a)({
                        safeSpace: !1,
                        maxWidth: "100%"
                    }, d, {
                        css: Object(x.a)((t = {
                            margin: 0,
                            marginTop: -1,
                            padding: 0,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "auto 100vw"
                        }, Object(y.a)(t, h.FROM_TABLET, {
                            backgroundSize: "auto 100%"
                        }), Object(y.a)(t, _.IE11, {
                            height: "".concat(X, "vh")
                        }), t), ""),
                        style: {
                            color: U,
                            backgroundColor: V,
                            backgroundPosition: Y ? "bottom left" : "bottom right",
                            backgroundImage: J && I ? "url(".concat(J.src, ")") : void 0
                        },
                        title: J ? J.title : ""
                    }), Object(L.b)("div", {
                        css: Object(x.a)(Object(y.a)({
                            display: "flex",
                            height: "100%",
                            flexDirection: "column"
                        }, h.FROM_TABLET, {
                            alignItems: "center",
                            flexDirection: "row"
                        }), "")
                    }, Object(L.b)(de, {
                        layout: r,
                        backgroundColor: l
                    }, Object(L.b)(i.a.Fragment, null, Object(L.b)("div", {
                        css: Object(x.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column"
                        }, h.FROM_TABLET, {
                            flexDirection: w || "SPLIT" !== O ? "column" : "column-reverse"
                        }), "")
                    }, p && Object(L.b)(ge, {
                        text: p,
                        layout: r,
                        variant: o
                    }), j && Object(L.b)(Te, {
                        text: j,
                        layout: r
                    })), Q && (!w || w && "SPLIT" !== O) && Object(L.b)(Q, Object(f.a)({
                        variant: o
                    }, n)), c && Object(L.b)(ne, {
                        actions: c,
                        id: a,
                        layout: r,
                        title: j
                    }))), Object(L.b)(pe, {
                        layout: r
                    }))), Q && w && "SPLIT" === O && Object(L.b)(de, {
                        layout: r,
                        backgroundColor: l
                    }, Object(L.b)("div", {
                        css: Object(x.a)({
                            color: U
                        }, "")
                    }, Object(L.b)(Q, Object(f.a)({
                        variant: o
                    }, n)))), !w && u && Object(L.b)("p", {
                        css: Object(x.a)({
                            backgroundColor: V,
                            color: U,
                            fontSize: 14,
                            lineHeight: "normal",
                            margin: 0,
                            padding: 30
                        }, ""),
                        dangerouslySetInnerHTML: {
                            __html: u
                        }
                    })))
                }));
            ye.displayName = "Banner";
            var xe = n("lPe2"),
                Ee = n("ZEB4"),
                ve = {
                    GRID_1_1: ["50%", "50%"],
                    GRID_1_2: ["33.33%", "66.66%"],
                    GRID_2_1: ["66.66%", "33.33%"],
                    OFF_GRID_1_1: ["50%", "50%"]
                },
                _e = {
                    GRID_1_1: ["50%", "50%"],
                    GRID_1_2: ["100%", "50%"],
                    GRID_2_1: ["50%", "100%"],
                    OFF_GRID_1_1: ["66.66%", "66.66%"]
                },
                Re = function(e) {
                    return {
                        layouts: ve[e] || ve.GRID_1_1,
                        ratios: _e[e] || _e.GRID_1_1,
                        isInGrid: !/OFF/.test(e)
                    }
                },
                Se = n("y6sE"),
                ke = n("8zA3"),
                Le = (i.a.createElement, function(e) {
                    var t = e.actions,
                        n = e.id,
                        a = e.title,
                        c = e.index,
                        r = Object(S.useTheme)().bp,
                        o = Object(A.b)().index,
                        l = i.a.useCallback((function() {
                            return Object(ke.a)({
                                id: n,
                                index: o,
                                position: "".concat(o + 1).concat(String.fromCharCode(97 + c)),
                                type: "MULTIBANNER",
                                name: a
                            })
                        }), [n, o, a, c]);
                    return Object(L.b)(i.a.Fragment, null, t && t.map((function(e, t) {
                        return Object(L.b)(P.a, {
                            onClick: l,
                            key: e.id,
                            action: e,
                            css: Object(x.a)(["LINK" !== e.type && Object(y.a)({
                                padding: 0,
                                width: 130
                            }, r.FROM_DESKTOP, {
                                width: 190
                            }), 0 !== t && {
                                marginLeft: 20
                            }], "")
                        })
                    })))
                }),
                we = (i.a.createElement, function(e) {
                    var t, n = e.wrapperCss,
                        a = Object(E.a)(e, ["wrapperCss"]),
                        c = Object(S.useTheme)().bp;
                    return Object(L.b)("div", Object(f.a)({
                        css: Object(x.a)([(t = {
                            marginTop: 20
                        }, Object(y.a)(t, c.FROM_TABLET, {
                            marginTop: "auto"
                        }), Object(y.a)(t, c.FROM_DESKTOP, {
                            display: "none"
                        }), Object(y.a)(t, "button, a", {
                            ":not(:first-of-type)": {
                                marginLeft: 15
                            }
                        }), t), n], "")
                    }, a))
                }),
                Me = function(e) {
                    var t, n = e.wrapperCss,
                        a = Object(E.a)(e, ["wrapperCss"]),
                        c = Object(S.useTheme)().bp;
                    return Object(L.b)("div", Object(f.a)({
                        css: Object(x.a)([(t = {
                            bottom: 20,
                            display: "none",
                            position: "absolute"
                        }, Object(y.a)(t, c.FROM_DESKTOP, {
                            display: "block",
                            bottom: 30
                        }), Object(y.a)(t, "button, a", {
                            transition: "opacity .2s linear"
                        }), t), n], "")
                    }, a))
                },
                Ce = (i.a.createElement, function(e) {
                    var t = e.text,
                        n = e.variant,
                        a = Object(S.useTheme)(),
                        c = a.bp,
                        r = a.colors;
                    return Object(L.b)(i.a.Fragment, null, t && Object(L.b)("h2", {
                        css: Object(x.a)(Object(y.a)({
                            fontSize: 24,
                            lineHeight: "28px",
                            color: r[ie[n].text]
                        }, c.FROM_DESKTOP, {
                            fontSize: 30,
                            lineHeight: "34px"
                        }), ""),
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                }),
                Pe = (i.a.createElement, function(e) {
                    var t, n = e.text,
                        a = e.variant,
                        c = Object(S.useTheme)(),
                        r = c.bp,
                        o = c.colors;
                    return Object(L.b)(i.a.Fragment, null, n && Object(L.b)("h1", {
                        css: Object(x.a)((t = {
                            fontSize: 16,
                            marginBottom: 10,
                            color: o[oe[a]]
                        }, Object(y.a)(t, r.FROM_TABLET, {
                            fontSize: 14,
                            lineHeight: "18px"
                        }), Object(y.a)(t, r.FROM_DESKTOP, {
                            fontSize: 16,
                            lineHeight: "20px"
                        }), t), ""),
                        dangerouslySetInnerHTML: {
                            __html: n
                        }
                    }))
                }),
                Fe = (i.a.createElement, function(e) {
                    var t = e.text,
                        n = e.variant,
                        a = Object(S.useTheme)(),
                        c = a.bp,
                        r = a.colors;
                    return Object(L.b)(i.a.Fragment, null, t && Object(L.b)("p", {
                        css: Object(x.a)(Object(y.a)({
                            display: "none",
                            color: r[ie[n].text]
                        }, c.FROM_TABLET, {
                            display: "block"
                        }), ""),
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                }),
                Ae = (i.a.createElement, function(e) {
                    var t = e.shouldPreload,
                        n = e.src;
                    return Object(L.b)(i.a.Fragment, null, t && Object(L.b)(R.a, null, Object(L.b)("link", {
                        rel: "preload",
                        href: n,
                        as: "image"
                    })))
                }),
                Be = function(e) {
                    var t = Object(S.useTheme)().colors,
                        n = Object(k.a)(),
                        a = e.backgroundColor,
                        c = e.media,
                        r = e.mobileMedia,
                        i = e.variant;
                    return {
                        mediaToDisplay: n && r ? r : c,
                        currentVariant: i in ie ? i : "WHITE",
                        bannerBackgroundColor: a ? t[a] : void 0
                    }
                },
                De = (i.a.createElement, i.a.memo((function(e) {
                    var t, n, a, c = e.id,
                        r = e.media,
                        o = e.index,
                        l = e.layout,
                        b = e.variant,
                        s = e.actions,
                        u = e.content,
                        O = e.mobileMedia,
                        d = e.backgroundColor,
                        p = e.shouldDisplayImage,
                        j = e.shouldPreloadImage,
                        m = e.wrapperCss,
                        f = Object(S.useTheme)(),
                        g = f.colors,
                        T = f.bp,
                        h = f.selectors,
                        E = Object(Se.b)().hasTouch,
                        v = Be({
                            backgroundColor: d,
                            media: r,
                            mobileMedia: O,
                            variant: b
                        }),
                        _ = v.currentVariant,
                        R = v.mediaToDisplay,
                        k = v.bannerBackgroundColor,
                        w = u.description,
                        M = u.subtitle,
                        C = u.title;
                    return Object(L.b)(i.a.Fragment, null, Object(L.b)(Ae, {
                        shouldPreload: j,
                        src: R.src
                    }), Object(L.b)("section", {
                        role: "img",
                        title: R.title,
                        "aria-label": R.title,
                        style: {
                            backgroundColor: k,
                            backgroundImage: p ? "url(".concat(R.src, ")") : void 0
                        },
                        css: Object(x.a)([(t = {
                            flex: "50%",
                            borderBottom: 0 === o ? "15px solid ".concat(g.STARDUST) : "none",
                            position: "relative",
                            backgroundSize: "auto 100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "PHOTO_LEFT" === l ? "bottom left" : "bottom right"
                        }, Object(y.a)(t, T.FROM_TABLET, {
                            border: "none",
                            height: "50vw",
                            maxHeight: 620
                        }), Object(y.a)(t, h.ON_FOCUS_OR_HOVER, {
                            "button, a": {
                                opacity: 1
                            }
                        }), t), m], "")
                    }, Object(L.b)("div", {
                        css: Object(x.a)((n = {
                            padding: "40px 20px",
                            minHeight: "50vw",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            backgroundColor: k
                        }, Object(y.a)(n, T.FROM_TABLET, {
                            minHeight: 230,
                            maxWidth: 620,
                            backgroundColor: "transparent",
                            marginLeft: 0 === o ? 20 : void 0,
                            paddingLeft: 0 === o ? 0 : void 0
                        }), Object(y.a)(n, T.FROM_DESKTOP, {
                            minHeight: 195
                        }), Object(y.a)(n, T.FROM_LARGE_DESKTOP, {
                            marginLeft: 0 === o ? "auto" : 20
                        }), n), "")
                    }, Object(L.b)(Pe, {
                        text: M,
                        variant: _
                    }), Object(L.b)(Ce, {
                        text: C,
                        variant: _
                    }), Object(L.b)(Fe, {
                        text: w,
                        variant: _
                    }), Object(L.b)(we, null, Object(L.b)(Le, {
                        id: c,
                        title: C,
                        index: o,
                        actions: s
                    }))), Object(L.b)("div", {
                        css: Object(x.a)([(a = {
                            height: "100vw"
                        }, Object(y.a)(a, T.FROM_TABLET, {
                            height: "auto",
                            paddingBottom: "100%"
                        }), Object(y.a)(a, T.FROM_DESKTOP, {
                            paddingBottom: 0
                        }), a)], "")
                    }, Object(L.b)(Me, {
                        wrapperCss: Object(y.a)({
                            position: "absolute",
                            left: 0 === o ? 50 : 30,
                            "button, a": {
                                opacity: E ? 1 : 0
                            }
                        }, T.FROM_LARGE_DESKTOP, {
                            left: 0 === o ? "calc(50vw - 620px)" : 40
                        })
                    }, Object(L.b)(Le, {
                        id: c,
                        title: C,
                        index: o,
                        actions: s
                    })))))
                }))),
                Ie = (i.a.createElement, i.a.memo((function(e) {
                    var t, n, a, c = e.id,
                        r = e.index,
                        o = e.media,
                        l = e.layout,
                        b = e.variant,
                        s = e.actions,
                        u = e.content,
                        O = e.ratio,
                        d = e.mobileMedia,
                        p = e.backgroundColor,
                        j = e.shouldDisplayImage,
                        m = e.shouldPreloadImage,
                        f = e.wrapperCss,
                        g = Object(S.useTheme)(),
                        T = g.colors,
                        h = g.bp,
                        E = g.selectors,
                        v = Object(Se.b)().hasTouch,
                        _ = Be({
                            backgroundColor: p,
                            media: o,
                            mobileMedia: d,
                            variant: b
                        }),
                        R = _.currentVariant,
                        k = _.mediaToDisplay,
                        w = _.bannerBackgroundColor,
                        M = u.description,
                        C = u.subtitle,
                        P = u.title;
                    return Object(L.b)(i.a.Fragment, null, Object(L.b)(Ae, {
                        shouldPreload: m,
                        src: k.src
                    }), Object(L.b)("section", {
                        role: "region",
                        style: {
                            backgroundColor: w
                        },
                        css: Object(x.a)([(t = {
                            flex: "50%",
                            borderBottom: 0 === r ? "15px solid ".concat(T.STARDUST) : "none"
                        }, Object(y.a)(t, h.FROM_TABLET, {
                            border: "none",
                            display: "flex",
                            flexDirection: "column",
                            maxHeight: "calc(50vw + 200px)",
                            marginLeft: 0 !== r ? 20 : 0
                        }), Object(y.a)(t, h.FROM_DESKTOP, {
                            maxHeight: "none"
                        }), Object(y.a)(t, E.ON_FOCUS_OR_HOVER, {
                            "button, a": {
                                opacity: 1
                            }
                        }), t), f], "")
                    }, Object(L.b)("div", {
                        css: Object(x.a)((n = {
                            padding: "30px 20px",
                            minHeight: "50vw",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            backgroundColor: w
                        }, Object(y.a)(n, h.FROM_TABLET, {
                            flex: 1,
                            padding: 20,
                            minHeight: 230
                        }), Object(y.a)(n, h.FROM_DESKTOP, {
                            minHeight: 195,
                            padding: 30
                        }), n), "")
                    }, Object(L.b)(Pe, {
                        text: C,
                        variant: R
                    }), Object(L.b)(Ce, {
                        text: P,
                        variant: R
                    }), Object(L.b)(Fe, {
                        text: M,
                        variant: R
                    }), Object(L.b)(we, null, Object(L.b)(Le, {
                        id: c,
                        title: P,
                        index: r,
                        actions: s
                    }))), Object(L.b)("div", {
                        role: "img",
                        title: k.title,
                        "aria-label": k.title,
                        style: {
                            backgroundImage: j ? "url(".concat(k.src, ")") : void 0
                        },
                        css: Object(x.a)((a = {
                            height: "100vw",
                            position: "relative",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "PHOTO_LEFT" === l ? "bottom left" : "bottom right"
                        }, Object(y.a)(a, h.FROM_TABLET, {
                            height: "auto",
                            paddingBottom: "100%"
                        }), Object(y.a)(a, h.FROM_DESKTOP, {
                            paddingBottom: O
                        }), a), "")
                    }, Object(L.b)(Me, {
                        wrapperCss: Object(y.a)({
                            "button, a": {
                                opacity: v ? 1 : 0
                            }
                        }, h.FROM_DESKTOP, {
                            left: 30
                        })
                    }, Object(L.b)(Le, {
                        id: c,
                        title: P,
                        index: r,
                        actions: s
                    })))))
                }))),
                He = (i.a.createElement, i.a.memo((function(e) {
                    var t, n = e.elements,
                        a = e.layout,
                        c = Object(S.useTheme)(),
                        r = c.colors,
                        o = c.bp,
                        l = Object(A.b)().index,
                        b = Re(a),
                        s = b.layouts,
                        u = b.ratios,
                        O = b.isInGrid,
                        d = i.a.useState(!1),
                        p = Object(T.a)(d, 2),
                        j = p[0],
                        m = p[1],
                        g = Object(A.b)().isInViewport;
                    i.a.useEffect((function() {
                        g && !j && (Object(F.h)(n.map((function(e, t) {
                            return {
                                id: e.id,
                                index: l,
                                position: "".concat(l + 1).concat(String.fromCharCode(97 + t)),
                                name: e.content.title,
                                type: "MULTIBANNER"
                            }
                        }))), m(!0))
                    }), [l, g, j, n]);
                    var h = i.a.useState(0 === l),
                        E = Object(T.a)(h, 2),
                        _ = E[0],
                        R = E[1];
                    i.a.useEffect((function() {
                        0 === l && R(!0)
                    }), [l]);
                    var k = i.a.useCallback((function(e) {
                            e && !_ && R(!0)
                        }), [_]),
                        w = 0 === l,
                        M = O ? Ie : De;
                    return !n || n.length > s.length ? null : Object(L.b)(v.a, {
                        onChange: k,
                        rootMargin: "500px"
                    }, Object(L.b)("section", {
                        role: "region",
                        css: Object(x.a)((t = {
                            backgroundColor: r.STARDUST
                        }, Object(y.a)(t, o.FROM_TABLET, {
                            padding: O ? "30px 0" : 0
                        }), Object(y.a)(t, o.FROM_DESKTOP, {
                            padding: O ? "60px 0" : 0
                        }), t), "")
                    }, Object(L.b)("div", {
                        title: "Multibanner",
                        css: Object(x.a)(Object(y.a)({
                            width: "100%",
                            height: "100%",
                            margin: "0 auto"
                        }, o.FROM_TABLET, {
                            display: "flex",
                            padding: O ? "0 20px" : 0,
                            maxWidth: O ? 1280 : void 0
                        }), "")
                    }, n.map((function(e, t) {
                        return Object(L.b)(M, Object(f.a)({}, e, {
                            index: t,
                            ratio: u[t],
                            shouldPreloadImage: w,
                            shouldDisplayImage: _,
                            key: "Multibanner-".concat(t, "-").concat(e.id),
                            wrapperCss: Object(y.a)({}, o.FROM_DESKTOP, {
                                flex: O ? s[t] : "50%"
                            })
                        }))
                    })))))
                }))),
                Ne = (i.a.createElement, function(e) {
                    var t = e.elements,
                        n = Object(S.useTheme)(),
                        a = n.colors,
                        c = n.bp;
                    return Object(L.b)(i.a.Fragment, null, t.map((function(e, t) {
                        return Object(L.b)(ye, Object(f.a)({}, e, {
                            key: e.id,
                            css: Object(x.a)(Object(y.a)({
                                borderBottom: 0 === t ? "15px solid ".concat(a.STARDUST) : "none"
                            }, c.FROM_TABLET, {
                                border: "none"
                            }), "")
                        }))
                    })))
                }),
                ze = (i.a.createElement, i.a.memo((function(e) {
                    var t = e.elements,
                        n = e.layout,
                        a = Object(k.a)(),
                        c = Re(n).isInGrid,
                        r = Object(Ee.a)().deviceType,
                        o = i.a.useMemo((function() {
                            return "MOBILE" !== r && "DESKTOP" !== r && !c || a
                        }), [a, c, r]);
                    return Object(L.b)(i.a.Fragment, null, o && Object(L.b)(Ne, {
                        elements: t
                    }), !o && Object(L.b)(He, {
                        elements: t,
                        layout: n
                    }))
                }))),
                Ke = n("IdR4"),
                Ge = (i.a.createElement, function(e) {
                    var t, n = e.price,
                        a = e.features,
                        c = e.badge,
                        r = Object(E.a)(e, ["price", "features", "badge"]),
                        i = Object(S.useTheme)(),
                        o = i.colors,
                        l = i.bp;
                    return Object(L.b)("li", Object(f.a)({}, r, {
                        css: Object(x.a)(Object(y.a)({
                            minWidth: 220,
                            borderRadius: 4,
                            width: "100%",
                            backgroundColor: o.RAVEN,
                            padding: 20,
                            marginLeft: 20,
                            position: "relative",
                            ":first-of-type": {
                                marginLeft: 0
                            }
                        }, l.FROM_TABLET, {
                            backgroundColor: "transparent",
                            borderRadius: 0,
                            padding: 0,
                            paddingLeft: 40,
                            minWidth: c ? 250 : 210,
                            ":not(:first-of-type)": {
                                borderLeft: "1px solid ".concat(o.STEEL)
                            },
                            ":first-of-type": {
                                marginLeft: -40
                            }
                        }), "")
                    }), Object(L.b)("div", {
                        css: Object(x.a)({
                            color: o.WHITE,
                            fontWeight: 700,
                            lineHeight: 1,
                            marginBottom: 20
                        }, "")
                    }, c && Object(L.b)("span", {
                        css: Object(x.a)((t = {
                            position: "absolute",
                            backgroundColor: o.WARNING,
                            right: 20,
                            top: -10,
                            padding: 6,
                            borderRadius: 5,
                            color: o.BLACK,
                            fontSize: 12
                        }, Object(y.a)(t, l.FROM_TABLET, {
                            top: 5,
                            right: 0
                        }), Object(y.a)(t, l.FROM_LARGE_DESKTOP, {
                            fontSize: 14,
                            right: 10
                        }), t), "")
                    }, c), Object(L.b)("span", {
                        css: Object(x.a)(Object(y.a)({
                            fontSize: 24,
                            display: "inline-block"
                        }, l.FROM_TABLET, {
                            fontSize: 40
                        }), "")
                    }, Object(Ke.a)(n, {
                        integersWithFractionDigits: !0
                    })), Object(L.b)("span", {
                        css: Object(x.a)(Object(y.a)({
                            fontSize: 14,
                            whiteSpace: "nowrap",
                            display: "block",
                            paddingTop: 5
                        }, l.FROM_TABLET, {
                            fontSize: 16
                        }), "")
                    }, "z\u0142/mies. + VAT")), a.map((function(e, t) {
                        return Object(L.b)("div", {
                            key: t
                        }, Object(L.b)("span", {
                            css: Object(x.a)({
                                color: o.WHITE,
                                fontSize: 14,
                                lineHeight: 1.57
                            }, ""),
                            dangerouslySetInnerHTML: {
                                __html: e
                            }
                        }))
                    })))
                });
            i.a.createElement;
            var We = {
                    id: "StaticB2BOffersTable",
                    backgroundColor: "BLACK",
                    title: "Plany",
                    subtitle: "Je\u017celi jeszcze si\u0119 nie&nbsp;zdecydowa\u0142e\u015b zacznij od&nbsp;planu",
                    elements: [{
                        price: 49,
                        features: ["<strong>17&nbsp;GB</strong> internetu"],
                        badge: null
                    }, {
                        price: 55,
                        features: ["<strong>1&nbsp;paczka</strong> do&nbsp;wyboru", "<strong>20&nbsp;GB</strong> internetu"],
                        badge: null
                    }, {
                        price: 75,
                        features: ["<strong>2&nbsp;paczki</strong> do&nbsp;wyboru", "<strong>20&nbsp;GB</strong> internetu"],
                        badge: "Pakiet Premium"
                    }, {
                        price: 95,
                        features: ["<strong>3&nbsp;paczki</strong> do&nbsp;wyboru", "<strong>bez&nbsp;limitu</strong> internet"],
                        badge: "Pakiet Premium"
                    }]
                },
                Ue = {
                    name: "1pmyvs2",
                    styles: "padding:40px 0;"
                },
                Ve = {
                    name: "gg4vpm",
                    styles: "display:flex;justify-content:space-between;"
                },
                qe = function() {
                    var e = Object(S.useTheme)(),
                        t = e.colors,
                        n = e.bp;
                    return Object(L.b)(je.a, {
                        backgroundColor: We.backgroundColor
                    }, Object(L.b)("div", {
                        css: Ue
                    }, Object(L.b)("h2", {
                        dangerouslySetInnerHTML: {
                            __html: We.title
                        },
                        css: Object(x.a)(Object(y.a)({
                            color: t.WHITE,
                            fontSize: 24,
                            lineHeight: 1,
                            marginBottom: 10
                        }, n.FROM_TABLET, {
                            fontSize: 40
                        }), "")
                    }), Object(L.b)("p", {
                        dangerouslySetInnerHTML: {
                            __html: We.subtitle
                        },
                        css: Object(x.a)(Object(y.a)({
                            color: t.ORANGE_LIGHT,
                            fontWeight: 700,
                            fontSize: 16,
                            lineHeight: 1,
                            margin: 0
                        }, n.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }), Object(L.b)(S.CustomScroll, {
                        variant: "DARK",
                        css: Object(x.a)(Object(y.a)({
                            padding: "20px 0",
                            width: "100%",
                            height: "auto"
                        }, n.FROM_TABLET, {
                            padding: "30px 0"
                        }), "")
                    }, Object(L.b)("ul", {
                        css: Ve
                    }, We.elements.map((function(e, t) {
                        return Object(L.b)(Ge, {
                            price: e.price,
                            features: e.features,
                            key: t,
                            badge: e.badge
                        })
                    }))))))
                },
                Je = n("aoUj");
            i.a.createElement;

            function Ze() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var Ye = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(Promise.all([n.e(0), n.e(15), n.e(13), n.e(36)]).then(n.bind(null, "2q8N")));
                            case 2:
                                return e.abrupt("return", e.sent.ProductCarousel);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["2q8N"]
                        },
                        modules: ["./ProductCarousel"]
                    }
                }),
                Xe = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(Promise.all([n.e(25), n.e(27), n.e(16), n.e(0), n.e(46)]).then(n.bind(null, "O6AW")));
                            case 2:
                                return e.abrupt("return", e.sent.Sufler);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["O6AW"]
                        },
                        modules: ["./Sufler"]
                    }
                }),
                Qe = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(23).then(n.bind(null, "0j6S")));
                            case 2:
                                return e.abrupt("return", e.sent.Bar);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["0j6S"]
                        },
                        modules: ["./Bar"]
                    }
                }),
                $e = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(21).then(n.bind(null, "2JHi")));
                            case 2:
                                return e.abrupt("return", e.sent.Article);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["2JHi"]
                        },
                        modules: ["./Article"]
                    }
                }),
                et = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(22).then(n.bind(null, "4T08")));
                            case 2:
                                return e.abrupt("return", e.sent.ArticleList);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["4T08"]
                        },
                        modules: ["./ArticleList"]
                    }
                }),
                tt = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(47).then(n.bind(null, "Ki/9")));
                            case 2:
                                return e.abrupt("return", e.sent.Timeline);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["Ki/9"]
                        },
                        modules: ["./Timeline"]
                    }
                }),
                nt = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(34).then(n.bind(null, "RsiT")));
                            case 2:
                                return e.abrupt("return", e.sent.Mosaic);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["RsiT"]
                        },
                        modules: ["./Mosaic"]
                    }
                }),
                at = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(20).then(n.bind(null, "lL3J")));
                            case 2:
                                return e.abrupt("return", e.sent.Accordion);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["lL3J"]
                        },
                        modules: ["./Accordion"]
                    }
                }),
                ct = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(26).then(n.bind(null, "bbZt")));
                            case 2:
                                return e.abrupt("return", e.sent.Comparator);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["bbZt"]
                        },
                        modules: ["./Comparator"]
                    }
                }),
                rt = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(24).then(n.bind(null, "m7tq")));
                            case 2:
                                return e.abrupt("return", e.sent.Book);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["m7tq"]
                        },
                        modules: ["./Book"]
                    }
                }),
                it = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(Promise.all([n.e(0), n.e(8), n.e(48)]).then(n.bind(null, "C1LP")));
                            case 2:
                                return e.abrupt("return", e.sent.TvBrowser);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["C1LP"]
                        },
                        modules: ["./TvBrowser"]
                    }
                }),
                ot = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(Promise.all([n.e(0), n.e(51)]).then(n.bind(null, "x/IZ")));
                            case 2:
                                return e.abrupt("return", e.sent.VideoBanner);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["x/IZ"]
                        },
                        modules: ["./VideoBanner"]
                    }
                }),
                lt = function(e, t) {
                    return e.type === t
                },
                bt = function(e) {
                    var t = e.content,
                        n = i.a.useState(t),
                        a = Object(T.a)(n, 2),
                        c = a[0],
                        r = a[1],
                        o = i.a.useCallback((function() {
                            r(Object(g.a)(t))
                        }), [r, t]);
                    return i.a.useEffect((function() {
                        r(t)
                    }), [t]), i.a.useEffect((function() {
                        window.OplContentApi ? window.OplContentApi.setContent = r : window.OplContentApi = {
                            version: "1",
                            setContent: function(e) {
                                var t = "function" === typeof e ? e(c) : e;
                                if (Array.isArray(t)) r(t);
                                else {
                                    var n = "";
                                    try {
                                        n = JSON.stringify(t).substr(0, 500)
                                    } catch (a) {}
                                    Je.a.withScope((function(e) {
                                        e.setTag("where", "Contents.OplContentApi.setContent"), Je.a.captureEvent({
                                            message: "OplContentApi.setContent: Invalid content type",
                                            extra: {
                                                content: n
                                            }
                                        })
                                    }))
                                }
                            }
                        }
                    }), [r, c]), Object(L.b)(st, {
                        onError: o
                    }, Object(L.b)(xe.a, {
                        components: c
                    }), Object(L.b)(i.a.Fragment, null, c.map((function(e, t) {
                        return lt(e, "STATIC_B2B_OFFERS_LIST") ? Object(L.b)(h.a, {
                            key: t,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(qe, null)) : lt(e, "SUFLER") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(Xe, Object(f.a)({
                            key: e.id,
                            id: e.id
                        }, e.data))) : lt(e, "BANNER") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(ye, Object(f.a)({
                            key: e.id,
                            id: e.id
                        }, e.data))) : lt(e, "PRODUCT_CAROUSEL") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(Ye, Object(f.a)({
                            key: e.id
                        }, e.data))) : lt(e, "BAR") || lt(e, "COLUMN_COMPONENT") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(Qe, Object(f.a)({
                            key: e.id,
                            id: e.id
                        }, e.data))) : lt(e, "ARTICLE") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)($e, Object(f.a)({
                            key: e.id
                        }, e.data))) : lt(e, "ARTICLE_LIST") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(et, Object(f.a)({
                            key: e.id,
                            id: e.id
                        }, e.data))) : lt(e, "MULTIBANNER") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(ze, e.data)) : lt(e, "ACCORDION") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(at, e.data)) : lt(e, "TIMELINE") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(tt, e.data)) : lt(e, "MOSAIC") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(nt, e.data)) : lt(e, "BOOK") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(rt, e.data)) : lt(e, "COMPARATOR") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(ct, e.data)) : lt(e, "TV_BROWSER") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(it, e.data)) : lt(e, "VIDEO_BANNER") ? Object(L.b)(h.a, {
                            key: e.id,
                            index: t,
                            className: e.extraClassName
                        }, Object(L.b)(ot, e.data)) : null
                    }))))
                },
                st = function(e) {
                    Object(p.a)(a, e);
                    var t, n = (t = a, function() {
                        var e, n = Object(m.a)(t);
                        if (Ze()) {
                            var a = Object(m.a)(this).constructor;
                            e = Reflect.construct(n, arguments, a)
                        } else e = n.apply(this, arguments);
                        return Object(j.a)(this, e)
                    });

                    function a() {
                        return Object(O.a)(this, a), n.apply(this, arguments)
                    }
                    return Object(d.a)(a, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            Je.a.withScope((function(n) {
                                n.setExtras(t), n.setTag("where", "Contents.ErrorBoundary.componentDidCatch"), Je.a.captureException(e)
                            }));
                            var n = this.props.onError;
                            if ("function" === typeof n) try {
                                n.call(this, e)
                            } catch (a) {}
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.children
                        }
                    }]), a
                }(i.a.Component);
            i.a.createElement;
            var ut = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(52).then(n.bind(null, "MRFK")));
                            case 2:
                                return e.abrupt("return", e.sent.Shame);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["MRFK"]
                        },
                        modules: ["../components/Shame"]
                    }
                }),
                Ot = l()((function() {
                    return c.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, c.a.awrap(n.e(14).then(n.bind(null, "0TmZ")));
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
                        modules: ["../components/Footer"]
                    }
                }),
                dt = {
                    "/": "Main_B2C"
                },
                pt = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                jt = function(e) {
                    var t = e.footer,
                        n = e.header,
                        a = e.content,
                        c = Object(s.useRouter)().pathname,
                        r = "Main_B2C" === dt[c];
                    return Object(L.b)("div", null, n && Object(L.b)(u.a, n), Object(L.b)("div", {
                        css: pt
                    }, Object(L.b)(bt, {
                        content: a
                    }), r && Object(L.b)(ut, null)), t && Object(L.b)(Ot, t))
                };
            jt.getInitialProps = function(e) {
                var t, n, a, r, i, o;
                return c.a.async((function(l) {
                    for (;;) switch (l.prev = l.next) {
                        case 0:
                            return t = e.req, n = e.res, a = e.asPath, r = (a || "").split("?")[0], i = dt[r] || r || "Main_B2C", l.next = 5, c.a.awrap(Object(b.b)({
                                page: i
                            }, {
                                req: t,
                                res: n
                            }));
                        case 5:
                            return o = l.sent, l.abrupt("return", o);
                        case 7:
                        case "end":
                            return l.stop()
                    }
                }), null, null, null, Promise)
            };
            t.default = jt
        },
        IdR4: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    integersWithFractionDigits: !1
                };
                return !t.integersWithFractionDigits && Number.isInteger(e) ? String(e) : e.toLocaleString("pl-PL", {
                    minimumFractionDigits: 2
                })
            }
        },
        ZEB4: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n("zygG"),
                c = n("ERkP"),
                r = n.n(c),
                i = n("t5YO"),
                o = n("I6rk"),
                l = function() {
                    var e = {
                            0: "MOBILE",
                            768: "TABLET",
                            992: "DESKTOP"
                        },
                        t = Object(o.a)(),
                        n = Object(i.a)().width,
                        c = r.a.useState((function() {
                            return t ? "MOBILE" : "DESKTOP"
                        })),
                        l = Object(a.a)(c, 2),
                        b = l[0],
                        s = l[1];
                    return r.a.useEffect((function() {
                        s(t ? "MOBILE" : "DESKTOP")
                    }), [t]), r.a.useEffect((function() {
                        var t = Object.entries(e).reverse().find((function(e) {
                            var t = Object(a.a)(e, 1)[0];
                            return n >= Number(t)
                        }))[1];
                        b !== t && s(t)
                    }), [n, t, e, b]), {
                        deviceType: b
                    }
                }
        }
    }
]);
//# sourceMappingURL=43e0abfb7096a5c88f2b71aeec86628767038040.361f1fb91369e440d5cc.js.map