(window.omniJsonp = window.omniJsonp || []).push([
    [32], {
        "0/yZ": function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, "SubmenuItem", (function() {
                return u
            }));
            var c = o("zjfJ"),
                n = o("5IAQ"),
                i = o("ERkP"),
                a = o.n(i),
                l = o("Kq2c"),
                s = o("ptpn"),
                r = o("tHt9"),
                b = o("sGZ7"),
                O = o("l1C2");
            a.a.createElement;
            var d = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                p = {
                    name: "ytumd6",
                    styles: "text-decoration:none;"
                },
                u = a.a.memo((function() {
                    var t, e, o = Object(l.useTheme)(),
                        i = o.bp,
                        u = o.colors,
                        j = o.selectors,
                        m = Object(b.c)(),
                        g = m.dispatch,
                        h = m.isNavbarCollapsed,
                        f = a.a.useCallback((function() {
                            g({
                                type: "closeSubmenu"
                            })
                        }), [g]),
                        v = a.a.useCallback((function() {
                            Object(s.a)({
                                prefix: "sufler-"
                            })
                        }), []);
                    return Object(O.b)(r.a, {
                        backgroundColor: "BLACK"
                    }, Object(O.b)("div", {
                        css: Object(n.a)((t = {
                            height: h ? "calc(100vh - 50px)" : "calc(100vh - 80px)",
                            padding: "15px 0 50px",
                            width: "100%"
                        }, Object(c.a)(t, i.FROM_TABLET, {
                            backgroundColor: u.BLACK,
                            padding: "15px 40px 0",
                            position: "absolute",
                            right: 0,
                            maxWidth: "50%",
                            top: 0
                        }), Object(c.a)(t, i.FROM_DESKTOP, {
                            maxWidth: "30%"
                        }), t), "")
                    }, Object(O.b)("div", {
                        css: Object(n.a)({
                            color: u.ORANGE_DARK,
                            fontSize: 32,
                            fontWeight: "bold"
                        }, "")
                    }, Object(O.b)("h3", {
                        css: d
                    }, "Twoje Konto", Object(O.b)(l.IconButton, {
                        iconName: "close-slim",
                        title: "Zamknij",
                        onClick: f,
                        color: u.WHITE,
                        css: Object(n.a)((e = {
                            marginLeft: "auto"
                        }, Object(c.a)(e, i.FROM_TABLET, {
                            display: "none"
                        }), Object(c.a)(e, j.ON_FOCUS, {
                            svg: {
                                color: u.ORANGE_DARK
                            }
                        }), e), "")
                    }))), Object(O.b)("div", {
                        css: Object(n.a)({
                            lineHeight: "60px",
                            marginTop: 8,
                            "div:last-child": {
                                borderTop: "1px solid ".concat(u.STONE),
                                lineHeight: "70px",
                                marginTop: 5
                            }
                        }, "")
                    }, [{
                        action: "/moj-orange",
                        role: "LINK",
                        title: "Otw\xf3rz M\xf3j Orange",
                        id: "login"
                    }, {
                        action: "/moj-orange/logout",
                        role: "LINK",
                        title: "Wyloguj si\u0119",
                        id: "logout"
                    }].map((function(t, e) {
                        var o = t.action,
                            c = t.title,
                            n = t.id;
                        return Object(O.b)("div", {
                            key: n
                        }, Object(O.b)(l.A, {
                            css: p,
                            href: o,
                            variant: "ON_DARK_BACKGROUND",
                            onClick: v
                        }, c))
                    })))))
                }));
            u.displayName = "SubmenuItem"
        }
    }
]);
//# sourceMappingURL=header.user.db07f8a311b6978a6f2d.js.map