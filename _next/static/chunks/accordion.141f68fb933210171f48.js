(window.omniJsonp = window.omniJsonp || []).push([
    [20], {
        lL3J: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Accordion", (function() {
                return f
            }));
            var r = n("5IAQ"),
                o = n("zjfJ"),
                c = n("ERkP"),
                i = n.n(c),
                s = n("Kq2c"),
                a = n("l1C2");
            i.a.createElement;
            var l = {
                    name: "1jsgful",
                    styles: "padding-bottom:10px;p, a{font-size:14px;margin:0;padding:0;}p{a{margin:0;}}a{margin-top:10px;font-weight:bold;display:inline-block;text-decoration:underline;}"
                },
                p = {
                    HTML: function(e) {
                        var t = e.html;
                        return Object(a.b)("div", {
                            css: l,
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })
                    }
                },
                b = n("tHt9");
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
            var m = function e(t) {
                    return t.filter((function(e) {
                        return e.type in p
                    })).map((function(t) {
                        var n = p[t.type];
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
                        }({}, t, {
                            content: Object(a.b)(n, t.content),
                            child: t.child ? {
                                single: !0,
                                elements: e(t.child.elements)
                            } : void 0
                        })
                    }))
                },
                O = {
                    name: "k22go4",
                    styles: "padding:30px 0;"
                },
                f = function(e) {
                    var t = e.title,
                        n = e.elements,
                        c = Object(s.useTheme)(),
                        i = c.bp,
                        l = c.colors,
                        p = m(n);
                    return Object(a.b)(b.a, {
                        css: O,
                        backgroundColor: "PEARL"
                    }, Object(a.b)("h2", {
                        css: Object(r.a)(Object(o.a)({
                            fontSize: 24,
                            marginBottom: 20
                        }, i.FROM_TABLET, {
                            marginBottom: 0
                        }), "")
                    }, t), Object(a.b)(s.Accordion, {
                        single: !0,
                        elements: p,
                        elementsWrapperCss: {
                            ":not(:last-of-type)": {
                                borderBottom: "1px solid ".concat(l.CHROME)
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
//# sourceMappingURL=accordion.141f68fb933210171f48.js.map