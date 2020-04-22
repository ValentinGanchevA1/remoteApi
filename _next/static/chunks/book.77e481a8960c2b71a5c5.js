(window.omniJsonp = window.omniJsonp || []).push([
    [24], {
        fL9e: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return b
            })), n.d(t, "a", (function() {
                return O
            })), n.d(t, "c", (function() {
                return d
            }));
            var a = n("cxan"),
                i = n("5IAQ"),
                o = n("HbGN"),
                c = n("ERkP"),
                r = n.n(c),
                s = n("l1C2");
            r.a.createElement;
            var l = {
                    name: "ogoe9v",
                    styles: "width:100%;height:100%;overflow:hidden;"
                },
                b = r.a.memo(r.a.forwardRef((function(e, t) {
                    var n = e.children,
                        c = e.setChildrenRefs,
                        b = e.orientation,
                        O = void 0 === b ? "HORIZONTAL" : b,
                        u = e.style,
                        d = Object(o.a)(e, ["children", "setChildrenRefs", "orientation", "style"]),
                        f = r.a.useRef([]);
                    return r.a.useEffect((function() {
                        c(f.current)
                    }), [c, n]), Object(s.b)("div", {
                        css: l
                    }, Object(s.b)("div", Object(a.a)({
                        ref: t,
                        style: u,
                        css: Object(i.a)({
                            width: "100%",
                            height: "100%",
                            padding: 0,
                            transition: "transform .3s",
                            display: "inline-flex",
                            flexDirection: "HORIZONTAL" === O ? "row" : "column"
                        }, "")
                    }, d), r.a.Children.map(n, (function(e, t) {
                        return e && r.a.cloneElement(e, {
                            ref: function(e) {
                                f.current[t] = e
                            }
                        })
                    }))))
                }))),
                O = (r.a.createElement, r.a.memo(r.a.forwardRef((function(e, t) {
                    var n = e.dimension,
                        c = void 0 === n ? "100%" : n,
                        r = e.children,
                        l = Object(o.a)(e, ["dimension", "children"]);
                    return Object(s.b)("section", Object(a.a)({
                        role: "region",
                        ref: t,
                        css: Object(i.a)({
                            overflow: "auto",
                            height: "auto" === c ? "auto" : "100%",
                            flexShrink: 0,
                            flexBasis: c
                        }, "")
                    }, l), r)
                })))),
                u = n("zygG"),
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "HORIZONTAL",
                        t = r.a.useRef(null),
                        n = r.a.useRef([]),
                        a = r.a.useState(0),
                        i = Object(u.a)(a, 2),
                        o = i[0],
                        c = i[1],
                        s = r.a.useState(0),
                        l = Object(u.a)(s, 2),
                        b = l[0],
                        O = l[1];
                    r.a.useEffect((function() {
                        t.current && c("HORIZONTAL" === e ? t.current.offsetWidth : t.current.offsetHeight)
                    }), [e]);
                    var d = r.a.useCallback((function(t) {
                        O("HORIZONTAL" === e ? n.current[t].offsetLeft - n.current[0].offsetLeft : n.current[t].offsetTop - n.current[0].offsetTop)
                    }), [e]);
                    return r.a.useMemo((function() {
                        return {
                            bind: {
                                ref: t,
                                setChildrenRefs: function(e) {
                                    n.current = e
                                },
                                style: {
                                    transform: "HORIZONTAL" === e ? "translateX(-".concat(b, "px)") : "translateY(-".concat(b, "px)")
                                }
                            },
                            containerDimension: o,
                            moveTo: d,
                            childrenRefs: n
                        }
                    }), [e, b, o, d])
                }
        },
        m7tq: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Book", (function() {
                return w
            }));
            var a = n("zjfJ"),
                i = n("5IAQ"),
                o = n("ERkP"),
                c = n.n(o),
                r = n("Kq2c"),
                s = n("I6rk"),
                l = n("tHt9"),
                b = n("cxan"),
                O = n("zygG"),
                u = n("fL9e"),
                d = n("Bit+"),
                f = {
                    WHITE: {
                        text: "BLACK",
                        backgroundColor: "WHITE",
                        arrowColor: "CHROME",
                        arrowBackground: "WHITE",
                        closeIconColor: "BLACK"
                    },
                    BLACK: {
                        text: "WHITE",
                        backgroundColor: "BLACK",
                        arrowColor: "DOVE",
                        arrowBackground: "BLACK",
                        closeIconColor: "WHITE"
                    }
                },
                m = n("l1C2"),
                j = (c.a.createElement, function(e) {
                    var t, n, o, c = e.content,
                        s = e.variant,
                        l = Object(r.useTheme)().bp,
                        b = c.title,
                        O = c.description,
                        u = c.actions,
                        j = f[s] || f.WHITE,
                        h = j.arrowColor,
                        g = j.arrowBackground,
                        p = (t = {
                            padding: 0,
                            width: "100%",
                            margin: "15px",
                            marginLeft: 0
                        }, Object(a.a)(t, l.FROM_TABLET, {
                            maxWidth: 253
                        }), Object(a.a)(t, l.FROM_DESKTOP, {
                            marginTop: 30
                        }), t);
                    return Object(m.b)("div", {
                        css: Object(i.a)((n = {
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            paddingBottom: 20
                        }, Object(a.a)(n, l.FROM_TABLET, {
                            paddingBottom: 0,
                            justifyContent: "center",
                            width: "100%"
                        }), Object(a.a)(n, l.FROM_DESKTOP, {
                            flexDirection: "row",
                            flexBasis: "50%",
                            height: "calc(100% - 50px)",
                            overflowY: "hidden",
                            overflowX: "hidden",
                            paddingTop: 10
                        }), Object(a.a)(n, l.ONLY_TABLET, {
                            justifyContent: "flex-start"
                        }), n), "")
                    }, Object(m.b)("div", {
                        css: Object(i.a)(Object(a.a)({
                            maxWidth: 780
                        }, l.FROM_DESKTOP, {
                            maxWidth: "auto",
                            padding: 0,
                            paddingRight: "12.5%"
                        }), "")
                    }, b && Object(m.b)("h3", {
                        css: Object(i.a)(Object(a.a)({
                            fontSize: 24,
                            lineHeight: "26px"
                        }, l.FROM_TABLET, {
                            fontSize: 40,
                            lineHeight: "42px",
                            marginBottom: 20
                        }), "")
                    }, b), O && Object(m.b)("p", {
                        dangerouslySetInnerHTML: {
                            __html: O
                        },
                        css: Object(i.a)((o = {
                            fontSize: 16,
                            lineHeight: "20px"
                        }, Object(a.a)(o, l.FROM_TABLET, {
                            maxWidth: 350,
                            marginBottom: 20
                        }), Object(a.a)(o, l.FROM_DESKTOP, {
                            maxWidth: 400
                        }), o), "")
                    }), u && u.map((function(e, t) {
                        return Object(m.b)(d.a, {
                            key: t,
                            action: e,
                            css: "LINK" !== e.type ? p : {}
                        })
                    }))), Object(m.b)(r.ArrowSeparator, {
                        orientation: "VERTICAL",
                        color: h,
                        backgroundColor: g,
                        css: Object(i.a)(Object(a.a)({
                            display: "none"
                        }, l.FROM_DESKTOP, {
                            margin: "0 15px",
                            display: "inline",
                            alignSelf: "center",
                            height: "80%",
                            transform: "translateY(-10px)"
                        }), "")
                    }))
                });
            c.a.createElement;
            var h = {
                    name: "16r9pk3",
                    styles: "max-width:400px;"
                },
                g = {
                    name: "8atqhb",
                    styles: "width:100%;"
                },
                p = c.a.memo((function(e) {
                    var t, n = e.onPageChange,
                        o = e.elements,
                        s = e.isMenuOnLeft,
                        l = Object(r.useTheme)().bp,
                        b = n.setCurrentPage,
                        O = n.slider,
                        u = n.setIsMenuOnLeft,
                        d = c.a.useCallback((function(e) {
                            b(e), O.moveTo(1), u(!0)
                        }), [b, u, O]);
                    return Object(m.b)("div", {
                        css: Object(i.a)((t = {
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            margin: "0 auto"
                        }, Object(a.a)(t, l.FROM_TABLET, {
                            maxWidth: 550
                        }), Object(a.a)(t, l.FROM_DESKTOP, {
                            margin: s ? "0 auto 0 0" : "0 auto",
                            flexBasis: "50%",
                            height: "100%",
                            overflowY: "auto",
                            overflowX: "hidden",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            flexDirection: "column",
                            paddingRight: "12.5%"
                        }), t), "")
                    }, Object(m.b)(r.ActionList, {
                        css: h
                    }, o.map((function(e, t) {
                        return Object(m.b)(r.ActionListItem, {
                            onClick: function() {
                                d(e.id)
                            },
                            onKeyPress: function() {
                                d(e.id)
                            },
                            id: "".concat(t),
                            key: t,
                            title: e.elementContent.title,
                            icon: e.iconType,
                            hasBadge: !1,
                            iconColoredOnHover: !0,
                            css: g
                        })
                    }))))
                }));
            c.a.createElement;
            var T = {
                    name: "1gmo2q3",
                    styles: "font-size:24px;line-height:26px;margin:20px 0;"
                },
                v = {
                    name: "b2jwd2",
                    styles: "font-size:16px;line-height:18px;max-width:400px;"
                },
                x = function(e) {
                    var t, n = e.currentPage,
                        o = e.elements,
                        c = e.variant,
                        s = o.find((function(e) {
                            return e.id === n
                        })),
                        l = Object(r.useTheme)().bp,
                        b = f[c] || f.WHITE,
                        O = b.arrowColor,
                        u = b.arrowBackground,
                        j = Object(a.a)({
                            padding: 0,
                            width: "100%",
                            marginTop: 30
                        }, l.FROM_TABLET, {
                            maxWidth: 253
                        });
                    return Object(m.b)("div", {
                        css: Object(i.a)((t = {
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            paddingTop: 40
                        }, Object(a.a)(t, l.FROM_TABLET, {
                            padding: 0,
                            width: "100%",
                            flexBasis: "50%",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            overflow: "hidden",
                            height: "100%"
                        }), Object(a.a)(t, l.ONLY_TABLET, {
                            justifyContent: "flex-start"
                        }), t), "")
                    }, Object(m.b)(r.ArrowSeparator, {
                        orientation: "VERTICAL",
                        color: O,
                        backgroundColor: u,
                        css: Object(i.a)(Object(a.a)({
                            display: "none"
                        }, l.FROM_DESKTOP, {
                            margin: "0 15px",
                            display: "inline",
                            justifySelf: "flex-start",
                            height: "80%",
                            transform: "translateY(-10px)"
                        }), "")
                    }), s && Object(m.b)("div", {
                        css: Object(i.a)(Object(a.a)({}, l.FROM_TABLET, {
                            padding: "0 12.5%"
                        }), "")
                    }, Object(m.b)("h3", {
                        css: T
                    }, s.elementContent.title), Object(m.b)("p", {
                        dangerouslySetInnerHTML: {
                            __html: s.elementContent.description
                        },
                        css: v
                    }), s.elementContent.actions.map((function(e, t) {
                        return Object(m.b)(d.a, {
                            key: t,
                            action: e,
                            css: "LINK" !== e.type ? j : {}
                        })
                    }))))
                },
                C = (c.a.createElement, c.a.memo((function(e) {
                    var t, n = e.onClose,
                        o = e.variant,
                        c = Object(r.useTheme)(),
                        s = c.colors,
                        l = c.zIndex,
                        b = c.selectors,
                        O = c.bp,
                        u = s[(f[o] || f.WHITE).closeIconColor];
                    return Object(m.b)(r.IconButton, {
                        iconName: "close-slim",
                        color: u,
                        onClick: n,
                        title: "Zamknij okno",
                        css: Object(i.a)((t = {
                            position: "absolute",
                            top: 20,
                            right: 0,
                            zIndex: l.LAYER_4
                        }, Object(a.a)(t, O.FROM_DESKTOP, {
                            top: 50
                        }), Object(a.a)(t, "svg", Object(a.a)({
                            width: 15,
                            height: 15
                        }, O.FROM_TABLET, {
                            width: 20,
                            height: 20
                        })), Object(a.a)(t, b.ON_FOCUS_OR_HOVER, {
                            svg: {
                                color: s.ORANGE_DARK,
                                transition: "color .2s"
                            }
                        }), t), "")
                    })
                }))),
                E = (c.a.createElement, function(e) {
                    var t = e.content,
                        n = e.elements,
                        o = e.variant,
                        s = Object(u.c)("HORIZONTAL"),
                        l = c.a.useState(null),
                        d = Object(O.a)(l, 2),
                        f = d[0],
                        h = d[1],
                        g = c.a.useState(!1),
                        T = Object(O.a)(g, 2),
                        v = T[0],
                        E = T[1],
                        R = n.find((function(e) {
                            return e.id === f
                        })),
                        L = Object(r.useTheme)().bp,
                        I = c.a.useCallback((function() {
                            s.moveTo(0), h(null), E(!1)
                        }), [s]);
                    return Object(m.b)(u.b, Object(b.a)({}, s.bind, {
                        orientation: "HORIZONTAL",
                        css: Object(i.a)(Object(a.a)({}, L.FROM_TABLET, {
                            display: "flex",
                            alignItems: "center",
                            minHeight: "550px"
                        }), "")
                    }), Object(m.b)(u.a, {
                        dimension: "55%"
                    }, Object(m.b)(j, {
                        content: t,
                        variant: o
                    })), Object(m.b)(u.a, {
                        dimension: "45%"
                    }, Object(m.b)(p, {
                        onPageChange: {
                            setCurrentPage: h,
                            slider: s,
                            setIsMenuOnLeft: E
                        },
                        elements: n,
                        isMenuOnLeft: v
                    })), Object(m.b)(u.a, {
                        dimension: "55%"
                    }, n && R && Object(m.b)("div", {
                        css: Object(i.a)(Object(a.a)({
                            height: "550px",
                            position: "relative",
                            width: "100%"
                        }, L.FROM_DESKTOP, {
                            height: "100%"
                        }), "")
                    }, Object(m.b)(C, {
                        onClose: I,
                        variant: o
                    }), Object(m.b)(x, {
                        currentPage: f,
                        elements: n,
                        variant: o
                    }))))
                });
            c.a.createElement;
            var R = {
                    name: "k22go4",
                    styles: "padding:30px 0;"
                },
                L = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                I = function(e) {
                    var t = e.content,
                        n = e.elements,
                        a = e.variant,
                        i = Object(u.c)("VERTICAL"),
                        o = c.a.useState(null),
                        r = Object(O.a)(o, 2),
                        s = r[0],
                        l = r[1],
                        d = n.find((function(e) {
                            return e.id === s
                        })),
                        f = c.a.useState(!1),
                        h = Object(O.a)(f, 2),
                        g = h[0],
                        T = h[1],
                        v = c.a.useCallback((function() {
                            i.moveTo(0), l(null)
                        }), [i]);
                    return Object(m.b)(u.b, Object(b.a)({}, i.bind, {
                        orientation: "VERTICAL"
                    }), Object(m.b)(u.a, {
                        dimension: "50%",
                        css: R
                    }, Object(m.b)(j, {
                        content: t,
                        variant: a
                    }), Object(m.b)(p, {
                        onPageChange: {
                            setCurrentPage: l,
                            slider: i,
                            setIsMenuOnLeft: T
                        },
                        elements: n,
                        isMenuOnLeft: g
                    })), Object(m.b)(u.a, {
                        dimension: "50%"
                    }, n && d && Object(m.b)("div", {
                        css: L
                    }, Object(m.b)(C, {
                        onClose: v,
                        variant: a
                    }), Object(m.b)(x, {
                        currentPage: s,
                        elements: n,
                        variant: a
                    }))))
                },
                w = (c.a.createElement, function(e) {
                    var t, n = e.content,
                        o = e.elements,
                        c = e.variant,
                        b = Object(r.useTheme)(),
                        O = b.colors,
                        u = b.bp,
                        d = f[c] || f.WHITE,
                        j = O[d.text],
                        h = O[d.backgroundColor],
                        g = Object(s.a)();
                    return Object(m.b)("div", {
                        css: Object(i.a)({
                            backgroundColor: h,
                            color: j
                        }, "")
                    }, Object(m.b)(l.a, {
                        css: Object(i.a)((t = {
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: "50vh"
                        }, Object(a.a)(t, u.FROM_TABLET, {
                            flexDirection: "row",
                            alignItems: "center",
                            minHeight: "50vh",
                            height: "100%"
                        }), Object(a.a)(t, u.FROM_DESKTOP, {
                            height: "80vw",
                            minHeight: "60vh",
                            maxHeight: 800
                        }), t), "")
                    }, g ? Object(m.b)(I, {
                        content: n,
                        elements: o,
                        variant: c
                    }) : Object(m.b)(E, {
                        content: n,
                        elements: o,
                        variant: c
                    })))
                });
            w.displayName = "Book"
        }
    }
]);
//# sourceMappingURL=book.77e481a8960c2b71a5c5.js.map