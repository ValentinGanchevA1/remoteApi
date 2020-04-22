(window.omniJsonp = window.omniJsonp || []).push([
    [47], {
        "Ki/9": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Timeline", (function() {
                return y
            }));
            var i = n("cxan"),
                r = n("zjfJ"),
                c = n("5IAQ"),
                a = n("ERkP"),
                o = n.n(a),
                b = n("Kq2c"),
                O = n("tHt9"),
                l = n("xWEo"),
                s = n("HbGN"),
                j = n("l1C2"),
                p = (o.a.createElement, o.a.memo((function(e) {
                    var t, n = e.description,
                        a = Object(s.a)(e, ["description"]),
                        o = Object(b.useTheme)(),
                        O = o.bp,
                        l = o.colors;
                    return Object(j.b)("span", Object(i.a)({
                        dangerouslySetInnerHTML: {
                            __html: n
                        },
                        css: Object(c.a)((t = {
                            display: "block",
                            color: l.BLACK,
                            fontSize: 16,
                            lineHeight: "normal"
                        }, Object(r.a)(t, O.FROM_TABLET, {
                            fontSize: 14,
                            marginTop: 20
                        }), Object(r.a)(t, O.FROM_DESKTOP, {
                            fontSize: 18
                        }), t), "")
                    }, a))
                })));
            p.displayName = "Description";
            o.a.createElement;
            var m = function(e) {
                var t = e.children,
                    n = Object(b.useTheme)(),
                    i = n.bp,
                    a = n.colors;
                return Object(j.b)("span", {
                    css: Object(c.a)(Object(r.a)({
                        backgroundColor: a.ORANGE_DARK,
                        borderRadius: "50%",
                        display: "inline-block",
                        height: 48,
                        marginRight: 20,
                        position: "relative",
                        width: 48
                    }, i.FROM_DESKTOP, {
                        height: 56,
                        marginRight: 40,
                        width: 56
                    }), "")
                }, t)
            };
            m.displayName = "IconWrapper";
            o.a.createElement;
            var d = function() {
                var e = Object(b.useTheme)(),
                    t = e.bp,
                    n = e.colors;
                return Object(j.b)("div", {
                    css: Object(c.a)(Object(r.a)({
                        alignItems: "center",
                        display: "none",
                        flex: 1,
                        justifyContent: "center"
                    }, t.FROM_TABLET, {
                        display: "flex"
                    }), "")
                }, Object(j.b)("div", {
                    css: Object(c.a)({
                        border: "4px dotted ".concat(n.CHROME),
                        borderStyle: "none none dotted",
                        flex: 1,
                        margin: "1px 8px 0 0"
                    }, "")
                }), Object(j.b)(l.a, {
                    name: "arrow-right-2",
                    color: n.SUMMER_MADNESS,
                    height: 20
                }))
            };
            d.displayName = "TimelineArrow";
            o.a.createElement;
            var f = {
                    name: "1xhj18k",
                    styles: "display:flex;flex-direction:row;"
                },
                u = {
                    name: "1ja8l8u",
                    styles: "position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);"
                },
                h = o.a.memo((function(e) {
                    var t, n, i = e.description,
                        a = e.iconType,
                        o = e.showArrow,
                        O = void 0 === o || o,
                        s = e.title,
                        h = Object(b.useTheme)(),
                        g = h.bp,
                        T = h.colors;
                    return Object(j.b)("li", {
                        css: Object(c.a)((t = {
                            flex: 1,
                            ":last-child": {
                                marginRight: 0
                            }
                        }, Object(r.a)(t, g.FROM_TABLET, {
                            marginRight: 20
                        }), Object(r.a)(t, g.FROM_DESKTOP, {
                            marginRight: 80
                        }), t), "")
                    }, Object(j.b)("h3", {
                        css: Object(c.a)((n = {
                            color: T.ORANGE_DARK,
                            fontSize: 18,
                            lineHeight: "normal",
                            margin: "30px 0 10px"
                        }, Object(r.a)(n, g.FROM_TABLET, {
                            marginBottom: 20
                        }), Object(r.a)(n, g.FROM_DESKTOP, {
                            fontSize: 24
                        }), n), "")
                    }, s), Object(j.b)("div", {
                        css: Object(c.a)(Object(r.a)({
                            display: "flex",
                            flexDirection: "row"
                        }, g.FROM_TABLET, {
                            flexDirection: "column"
                        }), "")
                    }, Object(j.b)("div", {
                        css: f
                    }, a && Object(j.b)(m, null, Object(j.b)(l.a, {
                        name: a,
                        "aria-hidden": !0,
                        color: T.WHITE,
                        width: 24,
                        height: 24,
                        css: u
                    })), O && Object(j.b)(d, null)), i && Object(j.b)(p, {
                        description: i
                    })))
                }));
            h.displayName = "TimelineItem";
            o.a.createElement;

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = o.a.memo((function(e) {
                var t, n, a = e.elements,
                    o = e.title,
                    l = Object(b.useTheme)().bp;
                return Object(j.b)(O.a, {
                    css: Object(c.a)((t = {
                        padding: "30px 0 44px"
                    }, Object(r.a)(t, l.FROM_TABLET, {
                        paddingTop: 40
                    }), Object(r.a)(t, l.FROM_DESKTOP, {
                        padding: "60px 0 80px"
                    }), t), "")
                }, Object(j.b)("h2", {
                    css: Object(c.a)((n = {
                        fontSize: 24,
                        lineHeight: "normal"
                    }, Object(r.a)(n, l.FROM_TABLET, {
                        fontSize: 30
                    }), Object(r.a)(n, l.FROM_DESKTOP, {
                        fontSize: 40,
                        marginBottom: 20
                    }), n), "")
                }, o), Object(j.b)("ul", {
                    css: Object(c.a)(T(Object(r.a)({
                        display: "flex",
                        flexDirection: "column"
                    }, l.FROM_TABLET, {
                        flexDirection: "row"
                    }), a.length >= 5 && Object(r.a)({}, l.FROM_DESKTOP, {
                        li: {
                            marginRight: 40
                        }
                    })), "")
                }, a.map((function(e, t) {
                    return Object(j.b)(h, Object(i.a)({
                        key: t
                    }, e, {
                        showArrow: t !== a.length - 1
                    }))
                }))))
            }));
            y.displayName = "Timeline"
        }
    }
]);
//# sourceMappingURL=timeline.138c8fd21aa78140ada9.js.map