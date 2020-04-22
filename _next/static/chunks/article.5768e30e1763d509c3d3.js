(window.omniJsonp = window.omniJsonp || []).push([
    [21], {
        "2JHi": function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, "Article", (function() {
                return j
            }));
            var o = a("5IAQ"),
                n = a("HbGN"),
                c = a("ERkP"),
                i = a.n(c),
                r = a("Kq2c"),
                b = a("zjfJ"),
                O = a("tHt9"),
                d = a("Bit+"),
                l = a("l1C2"),
                g = (i.a.createElement, i.a.memo((function(t) {
                    var e, a, n, c = t.containerBackgroundColor,
                        g = t.color,
                        j = (t.title, t.content),
                        p = t.action,
                        s = t.media,
                        m = Object(r.useTheme)(),
                        u = m.colors,
                        T = m.bp;
                    return Object(l.b)(i.a.Fragment, null, s && Object(l.b)("div", {
                        title: s.title,
                        role: "img",
                        "aria-label": s.title,
                        css: Object(o.a)((e = {
                            width: "100%",
                            height: 200,
                            backgroundColor: u.STONE,
                            backgroundImage: "url(".concat(s.src, ")"),
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }, Object(b.a)(e, T.FROM_TABLET, {
                            height: 300
                        }), Object(b.a)(e, T.FROM_DESKTOP, {
                            height: 500
                        }), e), "")
                    }), Object(l.b)(O.a, {
                        css: Object(o.a)((a = {}, Object(b.a)(a, T.ONLY_MOBILE, {
                            margin: 0
                        }), Object(b.a)(a, T.ONLY_TABLET, {
                            margin: 0
                        }), a), "")
                    }, Object(l.b)("div", {
                        css: Object(o.a)((n = {
                            borderTop: s ? "4px solid ".concat(u.ORANGE_DARK) : "none",
                            backgroundColor: u[c],
                            color: u[g],
                            padding: 20
                        }, Object(b.a)(n, T.FROM_TABLET, {
                            margin: 0
                        }), Object(b.a)(n, T.FROM_DESKTOP, {
                            transform: s ? "translateY(-100px)" : "none",
                            padding: "50px 100px",
                            margin: "auto"
                        }), Object(b.a)(n, "h2", Object(b.a)({
                            fontSize: 24,
                            marginBottom: 20
                        }, T.FROM_TABLET, {
                            fontSize: 40
                        })), Object(b.a)(n, "h3", Object(b.a)({
                            fontSize: 18
                        }, T.FROM_TABLET, {
                            fontSize: 24,
                            paddingTop: 20
                        })), Object(b.a)(n, "h4", {
                            fontSize: 16,
                            fontWeight: "bold",
                            paddingTop: 20
                        }), Object(b.a)(n, "h5", Object(b.a)({
                            fontSize: 14,
                            lineHeight: "24px"
                        }, T.FROM_TABLET, {
                            fontSize: 16,
                            paddingTop: 20
                        })), Object(b.a)(n, "p", {
                            fontSize: 14,
                            paddingBottom: 20,
                            margin: 0
                        }), Object(b.a)(n, "strong", {
                            fontWeight: "bold"
                        }), Object(b.a)(n, "ul", {
                            listStyleType: "disc",
                            paddingBottom: 20
                        }), Object(b.a)(n, "li", {
                            fontSize: 14,
                            lineHeight: "20px",
                            marginLeft: 20
                        }), n), "")
                    }, Object(l.b)("div", {
                        dangerouslySetInnerHTML: {
                            __html: j
                        }
                    }), p && "BUTTON_LINK" === p.type && Object(l.b)(d.a, {
                        action: p,
                        css: Object(o.a)(Object(b.a)({
                            margin: "30px 0"
                        }, T.ONLY_MOBILE, {
                            width: "100%"
                        }), "")
                    }))))
                })));
            g.displayName = "ArticleContent";
            i.a.createElement;
            var j = i.a.memo((function(t) {
                var e = t.pageBackgroundColor,
                    a = Object(n.a)(t, ["pageBackgroundColor"]),
                    c = Object(r.useTheme)().colors;
                return Object(l.b)("div", {
                    css: Object(o.a)({
                        backgroundColor: c[e]
                    }, "")
                }, Object(l.b)(g, a))
            }));
            j.displayName = "Article"
        }
    }
]);
//# sourceMappingURL=article.5768e30e1763d509c3d3.js.map