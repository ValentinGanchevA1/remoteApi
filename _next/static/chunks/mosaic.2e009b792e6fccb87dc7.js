(window.omniJsonp = window.omniJsonp || []).push([
    [34], {
        RsiT: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, "Mosaic", (function() {
                return k
            }));
            var n = o("cxan"),
                i = o("zjfJ"),
                c = o("5IAQ"),
                a = o("zygG"),
                r = o("ERkP"),
                l = o.n(r),
                b = o("XTXV"),
                s = o("Kq2c"),
                d = o("tHt9"),
                O = {
                    DARK: {
                        backgroundColor: "BLACK",
                        color: "WHITE"
                    },
                    LIGHT: {
                        backgroundColor: "PEARL",
                        color: "BLACK"
                    }
                },
                g = {
                    BLACK: {
                        backgroundColor: "BLACK",
                        color: "WHITE",
                        iconColor: "WHITE",
                        invertedIconColor: "WHITE"
                    },
                    RAVEN: {
                        backgroundColor: "RAVEN",
                        color: "WHITE",
                        iconColor: "WHITE",
                        invertedIconColor: "WHITE"
                    },
                    WHITE: {
                        backgroundColor: "WHITE",
                        color: "BLACK",
                        iconColor: "WHITE",
                        invertedIconColor: "BLACK"
                    }
                },
                h = o("HbGN"),
                j = o("5zEb"),
                u = o("hMZt"),
                m = o("I6rk"),
                f = o("xWEo"),
                p = o("Bit+"),
                T = o("l1C2");
            l.a.createElement;
            var E = {
                    name: "rl74ah",
                    styles: "flex-basis:100%;overflow:hidden;font-size:14px;margin:0;padding:10px 0;max-width:540px;"
                },
                x = function(t) {
                    var e, o = t.media,
                        a = t.mobileMedia,
                        r = t.iconType,
                        l = t.variant,
                        b = t.hovered,
                        d = t.frontTitle,
                        O = t.content,
                        x = t.isElementVisible,
                        v = Object(h.a)(t, ["media", "mobileMedia", "iconType", "variant", "hovered", "frontTitle", "content", "isElementVisible"]),
                        C = O.title,
                        S = O.description,
                        y = O.actions,
                        k = Object(s.useTheme)(),
                        R = k.bp,
                        w = k.colors,
                        I = Object(m.a)(),
                        K = Object(i.a)({
                            marginBottom: 20,
                            width: 240,
                            height: 40,
                            fontSize: 16
                        }, R.FROM_DESKTOP, {
                            marginBottom: 0
                        }),
                        D = I && a ? a : o,
                        H = l in g ? g[l] : g.WHITE,
                        M = H.color,
                        B = H.backgroundColor,
                        F = H.iconColor,
                        _ = H.invertedIconColor,
                        A = Object(u.a)(),
                        P = A.isFocused,
                        W = A.bind,
                        z = Object(j.a)({}),
                        L = z.isHovered,
                        V = z.bind,
                        G = P || L || b;
                    return Object(T.b)("div", Object(n.a)({}, V, {
                        onBlur: function() {
                            return W.onBlur()
                        },
                        onFocus: function(t) {
                            t.currentTarget.scrollTo(0, 0), W.onFocus()
                        },
                        css: Object(c.a)((e = {
                            display: "inline",
                            marginRight: 10,
                            width: 280
                        }, Object(i.a)(e, R.FROM_TABLET, {
                            marginRight: 20
                        }), Object(i.a)(e, R.FROM_DESKTOP, {
                            display: "block",
                            margin: 0,
                            boxShadow: "none",
                            width: "100%",
                            height: 300,
                            overflow: "hidden"
                        }), e), "")
                    }, v), Object(T.b)("div", {
                        tabIndex: 0,
                        style: {
                            backgroundImage: x && D ? "url(".concat(D.src, ")") : void 0,
                            backgroundColor: w[B]
                        },
                        css: Object(c.a)(Object(i.a)({
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: 180,
                            width: "100%",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }, R.FROM_DESKTOP, {
                            height: 300,
                            width: "100%",
                            cursor: "pointer"
                        }), ""),
                        title: D ? D.title : void 0
                    }, r && Object(T.b)(f.a, {
                        name: r,
                        color: D ? w[F] : w[_],
                        css: Object(c.a)(Object(i.a)({
                            width: 50,
                            height: 50
                        }, R.FROM_DESKTOP, {
                            width: 80,
                            height: 80
                        }), "")
                    }), d && Object(T.b)("p", {
                        style: {
                            color: D ? w[F] : w[_]
                        },
                        css: Object(c.a)(Object(i.a)({
                            fontSize: 14,
                            margin: 0,
                            padding: "10px 0",
                            fontWeight: "bold"
                        }, R.FROM_DESKTOP, {
                            fontSize: 30
                        }), "")
                    }, d)), Object(T.b)("div", {
                        style: {
                            backgroundColor: w[B],
                            color: w[M]
                        },
                        css: Object(c.a)(Object(i.a)({
                            padding: 20,
                            height: 300
                        }, R.FROM_DESKTOP, {
                            height: 300,
                            padding: 0,
                            width: "100%",
                            cursor: "pointer",
                            transform: "translateY(".concat(G ? "-100%" : 0, ")"),
                            transition: "transform .25s",
                            willChange: "transform"
                        }), "")
                    }, Object(T.b)("div", {
                        css: Object(c.a)(Object(i.a)({
                            display: "flex",
                            flexDirection: "column",
                            alignContent: "flex-start",
                            height: "100%"
                        }, R.FROM_DESKTOP, {
                            padding: 40,
                            transform: "translateY(".concat(G ? 0 : 60, "px)"),
                            transition: "transform .4s , opacity 1s",
                            opacity: G ? 1 : 0,
                            willChange: "transform, opacity"
                        }), "")
                    }, C && Object(T.b)("h5", {
                        css: Object(c.a)(Object(i.a)({
                            fontSize: 18,
                            fontWeight: "bold",
                            flexShrink: 0
                        }, R.FROM_DESKTOP, {
                            fontSize: 40,
                            lineHeight: "40px",
                            fontWeight: "bold",
                            paddingBottom: 20,
                            margin: 0
                        }), "")
                    }, C), Object(T.b)("div", {
                        css: Object(c.a)({
                            flexShrink: 0,
                            borderBottom: "5px solid ".concat(w.ORANGE_DARK),
                            width: 40
                        }, "")
                    }), S && Object(T.b)("div", {
                        css: E,
                        dangerouslySetInnerHTML: {
                            __html: S
                        }
                    }), y && Object(T.b)("div", {
                        css: Object(c.a)(Object(i.a)({
                            flexShrink: 0,
                            marginTop: 10,
                            display: "flex",
                            flexDirection: "column"
                        }, R.FROM_DESKTOP, {
                            flexDirection: "row",
                            button: {
                                marginRight: 20
                            }
                        }), "")
                    }, y.map((function(t, e) {
                        return Object(T.b)(p.a, {
                            key: e,
                            css: "LINK" !== t.type ? K : {
                                fontSize: 14,
                                padding: "15px 0"
                            },
                            action: t
                        })
                    }))))))
                },
                v = o("v2bw");
            l.a.createElement;
            var C = {
                    name: "8atqhb",
                    styles: "width:100%;"
                },
                S = {
                    name: "k22go4",
                    styles: "padding:30px 0;"
                },
                y = {
                    name: "1xhj18k",
                    styles: "display:flex;flex-direction:row;"
                },
                k = function(t) {
                    t.id;
                    var e, o = t.title,
                        r = t.variant,
                        g = t.rows,
                        h = void 0 === g ? [] : g,
                        j = Object(s.useTheme)(),
                        u = j.bp,
                        m = j.colors,
                        f = r in O ? O[r] : O.LIGHT,
                        p = Object(v.b)().index,
                        E = f.color,
                        k = f.backgroundColor,
                        R = l.a.useState(0 === p),
                        w = Object(a.a)(R, 2),
                        I = w[0],
                        K = w[1],
                        D = l.a.useCallback((function(t) {
                            t && !I && K(!0)
                        }), [I]);
                    return Object(T.b)("div", {
                        style: {
                            backgroundColor: m[k]
                        },
                        css: C
                    }, Object(T.b)(d.a, {
                        css: S
                    }, Object(T.b)("h2", {
                        style: {
                            color: m[E]
                        },
                        css: Object(c.a)((e = {
                            fontSize: 24,
                            paddingBottom: 20
                        }, Object(i.a)(e, u.FROM_TABLET, {
                            fontSize: 30
                        }), Object(i.a)(e, u.FROM_DESKTOP, {
                            fontSize: 40,
                            paddingBottom: 30
                        }), e), "")
                    }, o), Object(T.b)(b.a, {
                        onChange: D,
                        rootMargin: "300px"
                    }, Object(T.b)(s.CustomScroll, {
                        variant: r,
                        css: Object(c.a)(Object(i.a)({}, u.FROM_DESKTOP, {
                            minHeight: 300 * h.length
                        }), "")
                    }, Object(T.b)("div", {
                        css: Object(c.a)(Object(i.a)({
                            paddingBottom: 30,
                            display: "flex"
                        }, u.FROM_DESKTOP, {
                            flexDirection: "column"
                        }), "")
                    }, h.map((function(t, e) {
                        return Object(T.b)("div", {
                            key: e,
                            css: y
                        }, t.map((function(t, e) {
                            return Object(T.b)(x, Object(n.a)({
                                key: e,
                                isElementVisible: I,
                                css: Object(c.a)({
                                    boxShadow: "LIGHT" === r ? "0 2px 5px ".concat(m.DOVE) : void 0
                                }, "")
                            }, t))
                        })))
                    })))))))
                };
            e.default = k
        }
    }
]);
//# sourceMappingURL=mosaic.2e009b792e6fccb87dc7.js.map