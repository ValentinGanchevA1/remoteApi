(window.omniJsonp = window.omniJsonp || []).push([
    [22], {
        "4T08": function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "ArticleList", (function() {
                return x
            }));
            var i = o("cxan"),
                n = o("zjfJ"),
                r = o("5IAQ"),
                c = o("ERkP"),
                a = o.n(c),
                l = o("Kq2c"),
                b = o("tHt9"),
                s = o("Bit+"),
                d = o("l1C2");
            a.a.createElement;
            var O = {
                    name: "12veu68",
                    styles: "padding:0 20px;display:flex;flex-direction:column;justify-content:space-between;"
                },
                p = {
                    name: "72ydwr",
                    styles: "font-size:25px;margin-top:10px;font-weight:bold;"
                },
                g = a.a.memo((function(e) {
                    var t, o = e.title,
                        i = e.subtitle,
                        c = e.description,
                        a = e.action,
                        b = e.media,
                        g = e.containerTextColor,
                        u = e.containerColor,
                        m = e.textColor,
                        h = (e.hoverColor, Object(l.useTheme)()),
                        j = h.colors,
                        x = h.bp,
                        T = "LINK" === (null === a || void 0 === a ? void 0 : a.type),
                        v = "BUTTON_LINK" === (null === a || void 0 === a ? void 0 : a.type);
                    return Object(d.b)("li", {
                        css: Object(r.a)(Object(n.a)({
                            "&:not(:last-of-type)": {
                                marginRight: 15
                            }
                        }, x.FROM_TABLET, {
                            width: 400,
                            "&:not(:last-of-type)": {
                                marginRight: 20
                            }
                        }), "")
                    }, Object(d.b)("div", {
                        css: Object(r.a)((t = {
                            display: "flex",
                            flexDirection: "column",
                            width: 260,
                            height: "100%",
                            borderRadius: 4,
                            backgroundColor: j[u],
                            color: j[m]
                        }, Object(n.a)(t, x.FROM_TABLET, {
                            width: 334
                        }), Object(n.a)(t, x.FROM_DESKTOP, {
                            width: 400
                        }), t), "")
                    }, b && Object(d.b)("div", {
                        title: b.title,
                        role: "img",
                        "aria-label": b.title,
                        css: Object(r.a)(Object(n.a)({
                            width: "100%",
                            height: 150,
                            borderRadius: "4px 4px 0 0",
                            backgroundImage: "url(".concat(b.src, ")"),
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            borderBottom: "4px solid ".concat(j.ORANGE_DARK)
                        }, x.FROM_TABLET, {
                            height: 230
                        }), "")
                    }), Object(d.b)("div", {
                        tabIndex: 0,
                        title: o,
                        css: O
                    }, Object(d.b)("div", null, i && Object(d.b)("div", {
                        css: Object(r.a)({
                            color: j[g],
                            fontSize: 12,
                            marginTop: 20,
                            fontWeight: "bold"
                        }, "")
                    }, i), Object(d.b)("div", {
                        css: p
                    }, o), Object(d.b)("div", {
                        css: Object(r.a)({
                            color: j[g],
                            fontSize: 14,
                            marginTop: 15,
                            marginBottom: 15
                        }, "")
                    }, c)), a && Object(d.b)(s.a, {
                        action: a,
                        wrapperCss: Object(n.a)({
                            margin: "20px 0",
                            width: "100%",
                            lineHeight: "30px",
                            height: 30
                        }, x.FROM_TABLET, {
                            fontSize: 14,
                            margin: "30px 0",
                            width: 170,
                            lineHeight: "30px",
                            height: 30,
                            textAlign: T || v ? void 0 : "left"
                        })
                    }))))
                }));
            g.displayName = "ArticleItem";
            var u = {
                DARK: {
                    backgroundColor: "BLACK",
                    color: "WHITE",
                    hoverColor: "ORANGE_DARK",
                    containerBackgroundColor: "RAVEN",
                    containerTextColor: "DOVE"
                },
                LIGHT: {
                    backgroundColor: "PEARL",
                    color: "BLACK",
                    hoverColor: "ORANGE_DARK",
                    containerBackgroundColor: "WHITE",
                    containerTextColor: "DOVE"
                }
            };
            a.a.createElement;
            var m = {
                    name: "k22go4",
                    styles: "padding:30px 0;"
                },
                h = {
                    name: "1fuolr6",
                    styles: "display:flex;flex-direction:row;flex-wrap:nowrap;"
                },
                j = {
                    name: "1n43yqx",
                    styles: "margin:40px 0;"
                },
                x = a.a.memo((function(e) {
                    var t, o = e.title,
                        c = e.elements,
                        a = e.variant,
                        s = Object(l.useTheme)(),
                        O = s.colors,
                        p = s.bp,
                        x = a in u ? u[a] : u.LIGHT,
                        T = x.color,
                        v = x.backgroundColor,
                        f = x.containerBackgroundColor,
                        C = x.hoverColor,
                        R = x.containerTextColor;
                    return Object(d.b)("div", {
                        css: Object(r.a)({
                            width: "100%",
                            background: O[v]
                        }, "")
                    }, Object(d.b)(b.a, {
                        css: m
                    }, Object(d.b)("h2", {
                        css: Object(r.a)((t = {
                            color: O[T],
                            fontSize: 24
                        }, Object(n.a)(t, p.FROM_TABLET, {
                            fontSize: 30
                        }), Object(n.a)(t, p.FROM_DESKTOP, {
                            fontSize: 40
                        }), t), "")
                    }, o), Object(d.b)(l.CustomScroll, {
                        variant: a,
                        css: Object(r.a)(Object(n.a)({
                            padding: "20px 0",
                            width: "100%",
                            height: "auto"
                        }, p.FROM_TABLET, {
                            padding: "40px 0"
                        }), "")
                    }, Object(d.b)("ul", {
                        css: h
                    }, c.map((function(e, t) {
                        return Object(d.b)(g, Object(i.a)({
                            key: t,
                            textColor: T,
                            containerTextColor: R,
                            hoverColor: C,
                            containerColor: f,
                            css: j
                        }, e))
                    }))))))
                }));
            x.displayName = "Article"
        }
    }
]);
//# sourceMappingURL=article_list.0bfaa7839606cf9dceab.js.map