(window.omniJsonp = window.omniJsonp || []).push([
    [23], {
        "0j6S": function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, "Bar", (function() {
                return x
            }));
            var n = i("cxan"),
                o = i("zjfJ"),
                a = i("5IAQ"),
                c = i("ERkP"),
                l = i.n(c),
                r = i("Kq2c"),
                s = i("tHt9"),
                O = i("xWEo"),
                b = i("Bit+"),
                p = i("l1C2");
            l.a.createElement;
            var j = {
                    name: "19t2ho9",
                    styles: "display:flex;align-items:stretch;"
                },
                m = {
                    name: "10klw3m",
                    styles: "height:100%;"
                },
                h = l.a.memo((function(e) {
                    var t, i, n, c = e.color,
                        l = e.iconType,
                        s = e.title,
                        h = e.action,
                        d = e.description,
                        f = e.titleColor,
                        g = Object(r.useTheme)(),
                        x = g.colors,
                        T = g.bp,
                        E = Object(o.a)({
                            padding: 0,
                            width: "100%",
                            marginRight: 20,
                            marginTop: 30
                        }, T.FROM_TABLET, {
                            marginTop: 20,
                            maxWidth: 170
                        });
                    return Object(p.b)("li", {
                        css: Object(a.a)((t = {
                            display: "flex",
                            flexWrap: "wrap",
                            flexBasis: "100%",
                            padding: O.a ? "15px 0" : "10px 0 15px"
                        }, Object(o.a)(t, T.FROM_TABLET, {
                            flexBasis: "50%",
                            flexWrap: "wrap"
                        }), Object(o.a)(t, T.FROM_DESKTOP, {
                            flexBasis: "auto",
                            flex: 1,
                            flexWrap: "nowrap"
                        }), t), "")
                    }, Object(p.b)("div", {
                        css: j
                    }, Object(p.b)("div", {
                        css: m
                    }, l && Object(p.b)(O.a, {
                        name: l,
                        color: x[c] || x.WHITE,
                        css: Object(a.a)(Object(o.a)({
                            width: 70,
                            height: 40,
                            marginTop: 10,
                            marginRight: 15,
                            path: {
                                transition: "all .15s"
                            }
                        }, T.FROM_TABLET, {
                            width: 70,
                            height: 50
                        }), "")
                    })), Object(p.b)("div", {
                        tabIndex: 0,
                        title: s,
                        css: Object(a.a)(Object(o.a)({
                            color: x[c] || x.WHITE,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            outline: "none"
                        }, T.FROM_TABLET, {
                            paddingRight: 20,
                            alignItems: "stretch"
                        }), "")
                    }, Object(p.b)("h3", {
                        css: Object(a.a)((i = {
                            color: x[f || c] || x.WHITE,
                            fontWeight: "bold",
                            fontSize: 14,
                            marginTop: 0
                        }, Object(o.a)(i, T.FROM_TABLET, {
                            fontSize: 18
                        }), Object(o.a)(i, T.FROM_DESKTOP, {
                            fontSize: 18,
                            marginTop: 5
                        }), i), "")
                    }, s), Object(p.b)("p", {
                        css: Object(a.a)((n = {
                            fontWeight: "normal",
                            fontSize: 12,
                            lineHeight: "16px",
                            marginTop: 10
                        }, Object(o.a)(n, T.FROM_TABLET, {
                            fontSize: 16,
                            lineHeight: "18px",
                            marginTop: 15,
                            flexGrow: 1
                        }), Object(o.a)(n, T.FROM_DESKTOP, {
                            fontSize: 14,
                            lineHeight: "18px",
                            marginTop: 12
                        }), n), "")
                    }, d), h && Object(p.b)("span", null, Object(p.b)(b.a, {
                        action: h,
                        css: "LINK" !== h.type ? E : {
                            fontSize: 14,
                            lineHeight: "50px"
                        }
                    })))))
                }));
            h.displayName = "IconTextElement";
            l.a.createElement;
            var d = {
                    name: "alftpj",
                    styles: "flex-grow:1;font-weight:bold;display:flex;align-items:center;font-size:12px;line-height:14px;padding:10px 0;width:100%;"
                },
                f = l.a.memo((function(e) {
                    var t = e.color,
                        i = e.hoverColor,
                        n = e.iconType,
                        c = e.action,
                        l = e.text,
                        s = e.id,
                        b = e.title,
                        j = e.active,
                        m = Object(r.useTheme)(),
                        h = m.colors,
                        f = m.bp,
                        g = m.selectors,
                        x = i ? h[i] : h.ORANGE_DARK;
                    return Object(p.b)("li", {
                        css: Object(a.a)(Object(o.a)({
                            minHeight: n ? 115 : 65,
                            flex: "0 0 auto",
                            padding: "0 20px",
                            maxWidth: 180,
                            borderBottom: j ? "3px solid ".concat(h.ORANGE_DARK) : void 0
                        }, f.FROM_DESKTOP, {
                            padding: "0 25px",
                            minHeight: n ? 120 : 75
                        }), "")
                    }, Object(p.b)("a", {
                        key: s,
                        tabIndex: 0,
                        title: b,
                        href: c,
                        css: Object(a.a)(Object(o.a)({
                            padding: n ? "20px 0 0" : "10px 0",
                            color: j ? h.ORANGE_DARK : h[t] || h.WHITE,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "stretch",
                            textAlign: "center",
                            transition: "color .15s",
                            outline: "none"
                        }, g.ON_FOCUS_OR_HOVER, {
                            color: x
                        }), "")
                    }, n && Object(p.b)(O.a, {
                        name: n,
                        color: h[t] || h.WHITE,
                        css: Object(a.a)({
                            flexShrink: 0,
                            width: 70,
                            height: 40,
                            path: {
                                transition: "all .15s",
                                fill: j ? x : void 0
                            }
                        }, "")
                    }), Object(p.b)("span", {
                        css: d
                    }, l)))
                }));
            f.displayName = "IconElement";
            l.a.createElement;
            var g = {
                    name: "1ojwqei",
                    styles: "-webkit-overflow-scrolling:touch;"
                },
                x = l.a.memo((function(e) {
                    var t, i, c, l, O = e.backgroundColor,
                        b = e.color,
                        j = e.hoverColor,
                        m = e.elements,
                        d = e.type,
                        x = e.title,
                        T = Object(r.useTheme)(),
                        E = T.colors,
                        u = T.bp,
                        R = O in E ? O : "BLACK",
                        y = "WITH_TEXT" === d,
                        _ = m.length;
                    return Object(p.b)(s.a, {
                        backgroundColor: R,
                        css: Object(a.a)((t = {}, Object(o.a)(t, u.TO_DESKTOP, {
                            margin: y ? "0 20px" : 0
                        }), Object(o.a)(t, "padding", y ? "20px 0 0" : 0), t), "")
                    }, x && Object(p.b)("h2", {
                        css: Object(a.a)((i = {
                            color: E[b],
                            fontSize: 24,
                            marginBottom: 15
                        }, Object(o.a)(i, u.FROM_TABLET, {
                            fontSize: 30
                        }), Object(o.a)(i, u.FROM_DESKTOP, {
                            fontSize: 40
                        }), i), "")
                    }, x), Object(p.b)(r.CustomScroll, {
                        isInvisible: !0,
                        css: g
                    }, Object(p.b)("ul", {
                        css: Object(a.a)([y ? (c = {
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            alignItem: "flex-start",
                            height: "100%"
                        }, Object(o.a)(c, u.FROM_TABLET, {
                            minHeight: 120
                        }), Object(o.a)(c, u.FROM_DESKTOP, {
                            minHeight: 160,
                            marginBottom: 15
                        }), c) : (l = {
                            display: "flex",
                            overflowY: "hidden"
                        }, Object(o.a)(l, u.FROM_TABLET, {
                            justifyContent: _ > 5 ? "flex-start" : "center"
                        }), Object(o.a)(l, u.FROM_DESKTOP, {
                            overflow: "hidden",
                            justifyContent: "center"
                        }), l)], "")
                    }, d && "SIMPLE" !== d ? m.map((function(e) {
                        return Object(p.b)(h, Object(n.a)({
                            key: e.id,
                            color: b
                        }, e))
                    })) : m.map((function(e) {
                        return Object(p.b)(f, Object(n.a)({
                            key: e.id,
                            color: b,
                            hoverColor: j
                        }, e))
                    })))))
                }));
            x.displayName = "Bar"
        }
    }
]);
//# sourceMappingURL=bar.ce7a2b8271a66412a15f.js.map