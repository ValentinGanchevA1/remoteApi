(window.omniJsonp = window.omniJsonp || []).push([
    [16], {
        lL3J: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Accordion", (function() {
                return m
            }));
            var r = n("5IAQ"),
                o = n("zjfJ"),
                c = n("ERkP"),
                i = n.n(c),
                a = n("Kq2c"),
                s = n("l1C2");
            i.a.createElement;
            var p = {
                    name: "1jsgful",
                    styles: "padding-bottom:10px;p, a{font-size:14px;margin:0;padding:0;}p{a{margin:0;}}a{margin-top:10px;font-weight:bold;display:inline-block;text-decoration:underline;}"
                },
                b = {
                    HTML: function(e) {
                        var t = e.html;
                        return Object(s.b)("div", {
                            css: p,
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })
                    }
                },
                l = n("tHt9");
            i.a.createElement;

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var O = {
                    name: "k22go4",
                    styles: "padding:30px 0;"
                },
                m = function(e) {
                    var t = e.title,
                        n = e.elements,
                        c = Object(a.useTheme)(),
                        i = c.bp,
                        p = c.colors,
                        m = n.filter((function(e) {
                            return e.type in b
                        })).map((function(e) {
                            var t = b[e.type];
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                                        Object(o.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, e, {
                                content: Object(s.b)(t, e.content)
                            })
                        }));
                    return Object(s.b)(l.a, {
                        css: O,
                        backgroundColor: "PEARL"
                    }, Object(s.b)("h2", {
                        css: Object(r.a)(Object(o.a)({
                            fontSize: 24,
                            marginBottom: 20
                        }, i.FROM_TABLET, {
                            marginBottom: 0
                        }), "")
                    }, t), Object(s.b)(a.Accordion, {
                        single: !0,
                        elements: m,
                        elementsWrapperCss: {
                            ":not(:last-of-type)": {
                                borderBottom: "1px solid ".concat(p.CHROME)
                            }
                        },
                        elementsContentCss: {
                            marginLeft: 32
                        }
                    }))
                }
        }
    }
]);
//# sourceMappingURL=accordion.6e7cb12191fc616afe15.js.map