(window.omniJsonp = window.omniJsonp || []).push([
    [37], {
        "1hNG": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "GalleryWrapper", (function() {
                return E
            }));
            var c = n("ERkP"),
                a = n.n(c),
                i = n("zjfJ"),
                r = n("5IAQ"),
                o = n("zygG"),
                s = n("lZ7I"),
                l = n("I6rk"),
                u = n("Kq2c"),
                b = n("obcW"),
                m = n("l1C2");
            a.a.createElement;
            var d = {
                    name: "kjafn5",
                    styles: "display:flex;position:relative;"
                },
                p = {
                    name: "1l55st",
                    styles: "display:flex;padding:20px 15px 20px 0;width:50%;cursor:pointer;"
                },
                f = {
                    name: "1wzypky",
                    styles: "width:40px;height:40px;display:block;"
                },
                O = {
                    name: "sy1yag",
                    styles: "font-size:12px;align-self:center;"
                },
                j = a.a.memo((function(e) {
                    var t = e.elements,
                        n = e.currentDeviceIndex,
                        c = e.handleDeviceClick,
                        i = Object(u.useTheme)().colors,
                        o = a.a.useMemo((function() {
                            if (3 === t.length) {
                                if (2 === n) return "66.66%";
                                if (1 === n) return "33.33%";
                                if (0 === n) return "0%"
                            } else {
                                if (1 === n) return "50%";
                                if (0 === n) return "0%"
                            }
                        }), [t.length, n]),
                        s = Object(b.useSpring)({
                            left: o,
                            config: {
                                tension: 300
                            }
                        });
                    return Object(m.b)("div", {
                        css: Object(r.a)({
                            position: "sticky",
                            bottom: 0,
                            backgroundColor: i.WHITE
                        }, "")
                    }, Object(m.b)("div", {
                        css: d
                    }, Object(m.b)(b.animated.div, {
                        style: s,
                        css: Object(r.a)({
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            width: 3 === t.length ? "33.33%" : "50%",
                            border: "2px solid ".concat(i.ORANGE_DARK),
                            pointerEvents: "none"
                        }, "")
                    }), t.map((function(e, t) {
                        return Object(m.b)("div", {
                            key: e.name,
                            role: "button",
                            css: p,
                            onClick: function() {
                                return c(t)
                            }
                        }, Object(m.b)("img", {
                            src: e.images[0].url,
                            alt: e.images[0].alt || "",
                            css: f
                        }), Object(m.b)("strong", {
                            css: O
                        }, e.name))
                    }))))
                }));
            a.a.createElement;
            var v = {
                    name: "1lkgvsc",
                    styles: "font-size:30px;font-weight:bold;margin-top:30px;"
                },
                g = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                x = a.a.memo((function(e) {
                    var t = e.elements,
                        n = e.currentDeviceIndex,
                        c = e.handleDeviceClick,
                        i = Object(u.useTheme)().colors;
                    return Object(m.b)(a.a.Fragment, null, Object(m.b)("div", null, Object(m.b)("p", {
                        css: v
                    }, t[n].name)), Object(m.b)("div", {
                        css: g
                    }, t.map((function(e, t) {
                        return Object(m.b)("div", {
                            key: e.name,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return c(t)
                            },
                            css: Object(r.a)({
                                cursor: "pointer",
                                fontWeight: "bold",
                                color: n === t ? i.ORANGE_DARK : i.BLACK,
                                borderBottom: n === t ? "2px solid ".concat(i.ORANGE_DARK) : "none",
                                marginRight: 20,
                                paddingBottom: 5
                            }, "")
                        }, e.name)
                    }))))
                })),
                h = (a.a.createElement, a.a.memo((function(e) {
                    var t = e.elements,
                        n = e.currentDeviceIndex,
                        c = e.handleDeviceClick;
                    return Object(l.a)() ? Object(m.b)(j, {
                        elements: t,
                        currentDeviceIndex: n,
                        handleDeviceClick: c
                    }) : Object(m.b)(x, {
                        elements: t,
                        currentDeviceIndex: n,
                        handleDeviceClick: c
                    })
                })));
            a.a.createElement;
            var y = {
                    name: "1v7y4u1",
                    styles: "display:inline-block;padding:0 5px 10px 0;"
                },
                k = function(e) {
                    var t = e.features,
                        n = Object(u.useTheme)().bp;
                    return Object(m.b)("ul", {
                        css: Object(r.a)(Object(i.a)({
                            padding: "10px 20px 0px",
                            flexGrow: 1
                        }, n.FROM_TABLET, {
                            padding: "10px 0"
                        }), "")
                    }, t.map((function(e, t) {
                        return e && Object(m.b)("li", {
                            key: "".concat(e.name, "-").concat(t),
                            css: Object(r.a)(Object(i.a)({
                                fontSize: 14
                            }, n.FROM_TABLET, {
                                fontSize: 16
                            }), "")
                        }, Object(m.b)("strong", null, e.name), Object(m.b)("span", null, ": "), e.featureValues.map((function(t, n) {
                            var c, a = t.value;
                            return Object(m.b)("span", {
                                key: "".concat(a, "-").concat(n),
                                css: y
                            }, a, " ", null === (c = e.featureUnit) || void 0 === c ? void 0 : c.symbol)
                        })))
                    })))
                },
                D = (a.a.createElement, a.a.memo((function(e) {
                    var t, n, c = e.elements,
                        b = e.activeElementIndex,
                        d = Object(u.useTheme)().bp,
                        p = Object(l.a)(),
                        f = a.a.useState(b),
                        O = Object(o.a)(f, 2),
                        j = O[0],
                        v = O[1],
                        g = a.a.useState([]),
                        x = Object(o.a)(g, 2),
                        y = x[0],
                        D = x[1],
                        E = a.a.useCallback((function(e) {
                            D(e.descriptions)
                        }), []),
                        T = c.map((function(e) {
                            return e.images
                        }));
                    return Object(m.b)("div", {
                        css: Object(r.a)(Object(i.a)({
                            display: "flex",
                            flexDirection: "column",
                            height: "100vh",
                            justifyContent: "space-between"
                        }, d.FROM_DESKTOP, {
                            flexDirection: "row",
                            justifyContent: "flex-start"
                        }), "")
                    }, Object(m.b)("strong", {
                        css: Object(r.a)(Object(i.a)({
                            position: "absolute",
                            padding: "20px 15px"
                        }, d.FROM_DESKTOP, {
                            fontSize: 24
                        }), "")
                    }, "Zdj\u0119cia"), Object(m.b)(s.a, {
                        onImageChange: E,
                        images: T[j],
                        isMobile: p,
                        containerCss: (t = {
                            paddingTop: 40,
                            flexGrow: 0,
                            alignSelf: "center",
                            width: "75%"
                        }, Object(i.a)(t, d.FROM_TABLET, {
                            alignSelf: "center",
                            width: 400
                        }), Object(i.a)(t, d.FROM_DESKTOP, {
                            flexGrow: 1
                        }), t)
                    }), Object(m.b)("div", {
                        css: Object(r.a)((n = {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column"
                        }, Object(i.a)(n, d.FROM_TABLET, {
                            marginTop: 40,
                            minHeight: 400,
                            display: "flex",
                            alignSelf: "center",
                            flexDirection: "column-reverse"
                        }), Object(i.a)(n, d.FROM_DESKTOP, {
                            marginTop: 0
                        }), n), "")
                    }, Object(m.b)(k, {
                        features: y
                    }), Object(m.b)(h, {
                        elements: c,
                        currentDeviceIndex: j,
                        handleDeviceClick: v
                    })))
                }))),
                E = (a.a.createElement, a.a.memo((function(e) {
                    var t = e.devices,
                        n = e.activeElementId,
                        c = a.a.useRef(0),
                        i = a.a.useMemo((function() {
                            return t.map((function(e, t) {
                                var a = e.id,
                                    i = e.name,
                                    r = e.images.map((function(t) {
                                        var n = function(e, t) {
                                            return e.featurePointers.map((function(e) {
                                                var n, c = null === (n = t.characteristics[e.groupId]) || void 0 === n ? void 0 : n.features;
                                                return c && e.id ? c[e.id.toLowerCase()] : null
                                            }))
                                        }(t, e);
                                        return {
                                            url: t.source,
                                            alt: t.alt || "",
                                            descriptions: n
                                        }
                                    }));
                                return c.current = n === a ? t : 0, {
                                    id: a,
                                    name: i,
                                    images: r
                                }
                            }))
                        }), [t, n]);
                    return Object(m.b)(D, {
                        elements: i,
                        activeElementIndex: c.current
                    })
                })))
        }
    }
]);
//# sourceMappingURL=products-comparator-gallery.ac456ddd760e6014a138.js.map