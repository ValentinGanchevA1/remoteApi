(window.omniJsonp = window.omniJsonp || []).push([
    [26], {
        "48NU": function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return u
            }));
            var i = n("cxan"),
                o = n("5IAQ"),
                a = n("zjfJ"),
                c = n("HbGN"),
                r = n("ERkP"),
                s = n.n(r),
                l = n("xWEo"),
                p = n("I6rk"),
                d = n("Kq2c"),
                b = n("y6sE"),
                m = n("l1C2");
            s.a.createElement;

            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function x(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? y(Object(n), !0).forEach((function(e) {
                        Object(a.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var O = {
                    name: "1r2f04i",
                    styles: "margin-bottom:10px;"
                },
                w = {
                    name: "w7p5zd",
                    styles: "float:right;width:12px;height:12px;"
                },
                u = s.a.memo((function(t) {
                    var e, n = t.content,
                        r = Object(c.a)(t, ["content"]),
                        y = Object(d.useTheme)().bp,
                        u = Object(p.a)(),
                        z = Object(b.b)().hasTouch,
                        j = s.a.useCallback((function(t) {
                            var e = t.close;
                            return Object(m.b)(s.a.Fragment, null, Object(m.b)("div", {
                                css: O
                            }, Object(m.b)(l.a, {
                                name: "close",
                                role: "button",
                                onClick: e,
                                css: w
                            })), n)
                        }), [n]);
                    return Object(m.b)(d.Tooltip, Object(i.a)({
                        content: z ? j : n,
                        withPointer: !z,
                        sides: z ? ["TOP", "BOTTOM"] : void 0,
                        trigger: z ? "CLICK" : "HOVER",
                        interceptPosition: function(t) {
                            return u ? {
                                side: t.side,
                                position: x({}, t.position, {
                                    left: 20,
                                    right: 20
                                })
                            } : t
                        },
                        safeSpace: u ? {
                            top: 80,
                            bottom: 50
                        } : {
                            top: 110
                        },
                        css: Object(o.a)((e = {
                            width: "auto"
                        }, Object(a.a)(e, y.ONLY_MOBILE, {
                            left: 20,
                            right: 20
                        }), Object(a.a)(e, y.FROM_TABLET, {
                            width: 280
                        }), e), "")
                    }, r))
                }))
        },
        bbZt: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Comparator", (function() {
                return Dt
            }));
            var i = n("cxan"),
                o = n("5IAQ"),
                a = n("zjfJ"),
                c = n("fGyu"),
                r = n("ERkP"),
                s = n.n(r),
                l = n("Kq2c"),
                p = n("ZEB4"),
                d = n("XTXV"),
                b = n("+SGW"),
                m = n("J4U2"),
                y = n("tHt9"),
                x = n("zygG"),
                O = n("LaGA");

            function w(t) {
                var e = s.a.useState({
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }),
                    n = Object(x.a)(e, 2),
                    i = n[0],
                    o = n[1],
                    a = s.a.useRef(null);

                function c() {
                    a.current && a.current.disconnect()
                }
                return s.a.useEffect((function() {
                    return a.current = new O.a((function(t) {
                        var e = Object(x.a)(t, 1)[0];
                        return o(e.contentRect)
                    })), t.current && a.current.observe(t.current), c
                }), [t]), i
            }
            var u = n("obcW");

            function z(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? z(Object(n), !0).forEach((function(e) {
                        Object(a.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var h = {
                    isDetailsOpened: !1,
                    detailsSelected: 0,
                    columnNumber: 0,
                    isInViewport: !1,
                    isStaticHeaderInViewport: !1,
                    filters: {},
                    offerType: "LOVE"
                },
                k = function(t, e) {
                    switch (e.type) {
                        case "toggleDetails":
                            var n = j({}, t);
                            return n.isDetailsOpened = !n.isDetailsOpened, n;
                        case "goToNextColumn":
                            var i = j({}, t);
                            return i.detailsSelected = i.detailsSelected + 1 > i.columnNumber ? i.columnNumber : i.detailsSelected + 1, i;
                        case "goToPrevColumn":
                            var o = j({}, t);
                            return o.detailsSelected = o.detailsSelected - 1 < 0 ? 0 : o.detailsSelected - 1, o;
                        case "setConfigValue":
                            return j({}, t, Object(a.a)({}, e.payload.key, e.payload.value));
                        case "setFilter":
                            var c = j({}, t);
                            return c.filters[e.payload.key] = e.payload.value, c;
                        default:
                            return t
                    }
                },
                g = n("l1C2");
            s.a.createElement;

            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach((function(e) {
                        Object(a.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var T = s.a.createContext(null),
                M = s.a.memo((function(t) {
                    var e = Object(i.a)({}, t),
                        n = s.a.useReducer(k, C({}, h, {}, e)),
                        o = Object(x.a)(n, 2),
                        a = o[0],
                        c = o[1],
                        r = s.a.useMemo((function() {
                            return C({}, a, {
                                dispatch: c
                            })
                        }), [a, c]);
                    return Object(g.b)(T.Provider, Object(i.a)({
                        value: r
                    }, e))
                })),
                S = function() {
                    var t = s.a.useContext(T);
                    if (null === t) throw Error("useComparatorContext: Please provide ComparatorProvider value.");
                    return t
                },
                v = function(t, e, n) {
                    return t === e
                },
                _ = n("sGZ7"),
                E = (s.a.createElement, function(t) {
                    var e, n, i, c = t.title,
                        r = t.price,
                        s = t.priceDescription,
                        p = t.badge,
                        d = t.filterHeaders,
                        b = Object(l.useTheme)(),
                        m = b.colors,
                        y = b.bp;
                    return Object(g.b)("div", {
                        css: Object(o.a)((e = {
                            backgroundColor: m.WHITE,
                            padding: "20px 20px 0",
                            borderRadius: "6px 6px 0 0",
                            fontWeight: "bold",
                            minWidth: 260,
                            marginRight: 10,
                            position: "relative"
                        }, Object(a.a)(e, y.FROM_TABLET, {
                            minWidth: 354
                        }), Object(a.a)(e, y.FROM_DESKTOP, {
                            minWidth: 0,
                            flex: 1,
                            padding: "15px 10px 0",
                            marginRight: 0,
                            borderBottom: d ? "none" : "2px solid ".concat(m.CHROME)
                        }), e), "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)([Object(a.a)({
                            borderBottom: d ? "none" : "2px solid ".concat(m.CHROME),
                            paddingBottom: 25
                        }, y.FROM_DESKTOP, {
                            borderBottom: "none",
                            paddingBottom: 20
                        }), d && {
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            justifyContent: "space-between"
                        }], "")
                    }, p && Object(g.b)(l.Badge, {
                        css: Object(o.a)((n = {
                            position: "absolute",
                            top: "-15px",
                            left: 20
                        }, Object(a.a)(n, y.FROM_TABLET, {
                            fontSize: 14,
                            top: "-20px"
                        }), Object(a.a)(n, y.FROM_DESKTOP, {
                            top: "auto",
                            bottom: "100%",
                            left: 10
                        }), n), "")
                    }, p), Object(g.b)("p", {
                        css: Object(o.a)({
                            fontSize: 14,
                            color: m.BLACK,
                            marginBottom: 10,
                            marginTop: 0
                        }, "")
                    }, c), Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            display: "flex",
                            alignItems: "flex-end",
                            color: m.BLACK
                        }, y.FROM_DESKTOP, {
                            flexDirection: "column",
                            alignItems: "flex-start"
                        }), "")
                    }, Object(g.b)("span", {
                        css: Object(o.a)(Object(a.a)({
                            marginRight: 5,
                            fontSize: 40,
                            lineHeight: "35px"
                        }, y.FROM_DESKTOP, {
                            marginBottom: 5
                        }), "")
                    }, r), Object(g.b)("span", {
                        css: Object(o.a)((i = {
                            fontSize: 12,
                            lineHeight: "14px",
                            width: "40%"
                        }, Object(a.a)(i, y.FROM_TABLET, {
                            width: "auto"
                        }), Object(a.a)(i, y.FROM_DESKTOP, {
                            fontSize: 14
                        }), i), ""),
                        dangerouslySetInnerHTML: {
                            __html: s
                        }
                    }))))
                }),
                D = (s.a.createElement, function(t) {
                    var e, n = t.filterHeaders,
                        c = t.type,
                        r = t.content,
                        b = Object(l.useTheme)(),
                        m = b.colors,
                        y = b.bp,
                        x = b.zIndex,
                        O = Object(p.a)().deviceType,
                        w = S(),
                        u = w.isDetailsOpened,
                        z = w.isInViewport,
                        j = w.isStaticHeaderInViewport,
                        h = w.dispatch,
                        k = Object(_.c)().isNavbarCollapsed,
                        f = s.a.useCallback((function(t) {
                            h({
                                type: "setConfigValue",
                                payload: {
                                    key: "isStaticHeaderInViewport",
                                    value: t
                                }
                            })
                        }), [h]);
                    if (v(c, "text")) return Object(g.b)("div", {
                        css: Object(o.a)((e = {
                            fontSize: 24,
                            fontWeight: "bold",
                            paddingBottom: 20,
                            borderBottom: "2px solid ".concat(m.CHROME)
                        }, Object(a.a)(e, y.TO_DESKTOP, {
                            margin: "0 20px"
                        }), Object(a.a)(e, y.ONLY_TABLET, {
                            margin: "auto",
                            width: 464
                        }), Object(a.a)(e, y.FROM_DESKTOP, {
                            width: "100%",
                            paddingLeft: 10
                        }), e), "")
                    }, r.title);
                    if (v(c, "columns")) {
                        var C = {
                            zIndex: x.LAYER_2,
                            position: "sticky",
                            top: k ? 50 : 110,
                            opacity: z ? 1 : 0,
                            visibility: z ? "visible" : "hidden",
                            transition: "visibility 0s linear ".concat(z && !j ? "0s" : ".15s", ", opacity .15s, top .15s"),
                            width: "100%"
                        };
                        return "DESKTOP" !== O && u ? null : Object(g.b)(s.a.Fragment, null, Object(g.b)(d.a, {
                            onChange: f,
                            rootMargin: "-52px"
                        }, Object(g.b)("div", null)), Object(g.b)("div", {
                            css: Object(o.a)([{
                                display: "flex",
                                flexDirection: "row"
                            }, u && C], "")
                        }, Object(g.b)("div", {
                            css: Object(o.a)(Object(a.a)({
                                display: "none",
                                zIndex: x.LAYER_2
                            }, y.FROM_DESKTOP, {
                                backgroundColor: m.WHITE,
                                display: "block",
                                padding: "0 10px",
                                borderBottom: n ? void 0 : "2px solid ".concat(m.CHROME),
                                minWidth: 0,
                                flex: 1
                            }), "")
                        }), r.map((function(t, e) {
                            return Object(g.b)(E, Object(i.a)({
                                key: e
                            }, t, {
                                filterHeaders: n
                            }))
                        }))))
                    }
                    return null
                }),
                B = n("xWEo"),
                I = (s.a.createElement, {
                    STARDUST: {
                        backgroundColor: l.theme.colors.STARDUST,
                        color: l.theme.colors.BLACK
                    },
                    WHITE: {
                        backgroundColor: l.theme.colors.WHITE,
                        color: l.theme.colors.BLACK
                    }
                }),
                R = {
                    STARDUST: {
                        borderBottom: "1px solid ".concat(l.theme.colors.CHROME)
                    },
                    WHITE: {
                        borderBottom: "1px solid ".concat(l.theme.colors.CHROME)
                    }
                },
                P = n("Bit+");
            s.a.createElement;

            function K(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function L(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? K(Object(n), !0).forEach((function(e) {
                        Object(a.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var A = {
                    name: "1l7mgse",
                    styles: "font-weight:normal;"
                },
                F = s.a.memo((function(t) {
                    var e, n, i = t.content,
                        c = (t.isLastOne, t.title),
                        r = (t.isExpanded, t.isDetailsOpened),
                        s = t.contentWrapperCss,
                        p = t.wrapperCss,
                        d = t.titleWrapperCss,
                        b = t.variant,
                        m = t.action,
                        y = Object(l.useTheme)().bp,
                        x = [Object(a.a)({
                            fontSize: r ? 14 : 12,
                            paddingBottom: 5,
                            flex: 1,
                            fontWeight: r ? "normal" : "bold",
                            paddingRight: 20,
                            display: "block"
                        }, y.FROM_DESKTOP, {
                            display: "none"
                        }), d];
                    return Object(g.b)("div", {
                        css: Object(o.a)([L((e = {
                            padding: "15px 20px 0",
                            minWidth: 260,
                            marginRight: 10,
                            display: "flex",
                            width: "100%"
                        }, Object(a.a)(e, y.FROM_TABLET, {
                            minWidth: 354
                        }), Object(a.a)(e, y.FROM_DESKTOP, L({
                            margin: 0,
                            minWidth: 0,
                            flex: 1,
                            padding: "15px 10px"
                        }, R[b])), e), I[b]), p], "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)([L((n = {
                            minWidth: 220,
                            width: "100%",
                            paddingBottom: 15
                        }, Object(a.a)(n, y.FROM_TABLET, {
                            minWidth: 314
                        }), Object(a.a)(n, y.FROM_DESKTOP, {
                            paddingBottom: 0,
                            minWidth: 0,
                            borderBottom: 0,
                            display: "flex",
                            alignItems: "flex-start"
                        }), n), R[b]), s], "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({}, y.TO_DESKTOP, {
                            display: r ? "flex" : void 0
                        }), "")
                    }, m ? Object(g.b)("div", {
                        css: x
                    }, Object(g.b)(P.a, {
                        css: A,
                        action: m
                    })) : Object(g.b)("span", {
                        css: x,
                        dangerouslySetInnerHTML: {
                            __html: c
                        }
                    }), Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            fontSize: 14
                        }, y.TO_DESKTOP, {
                            flex: 1,
                            paddingRight: 5
                        }), "")
                    }, i.icon && function(t) {
                        var e = Object(l.useTheme)().colors;
                        return "CheckMark2" === t.icon ? Object(g.b)(B.a, {
                            name: "check-mark2",
                            css: Object(o.a)({
                                marginBottom: t.text ? 5 : 0,
                                width: 18,
                                height: 18,
                                color: e.GREEN_PARROT
                            }, "")
                        }) : "CloseSmaller" === t.icon ? Object(g.b)(B.a, {
                            name: "close-smaller",
                            css: Object(o.a)({
                                marginBottom: t.text ? 5 : 0,
                                width: 18,
                                height: 18,
                                color: e.DANGER
                            }, "")
                        }) : null
                    }(i), i.text && Object(g.b)("span", {
                        css: Object(o.a)(Object(a.a)({
                            display: "block",
                            fontSize: 14
                        }, y.TO_DESKTOP, {
                            fontWeight: r ? "bold" : "normal"
                        }), ""),
                        dangerouslySetInnerHTML: {
                            __html: i.text
                        }
                    })))))
                }));
            s.a.createElement;
            var G = {
                    name: "1hao50n",
                    styles: "padding:10px;font-size:14px;width:100px;display:flex;justify-content:center;:not(:last-of-type){margin-right:10px;}"
                },
                N = s.a.memo((function(t) {
                    var e = t.title,
                        n = t.isLastOne,
                        c = t.content,
                        r = t.wrapperCss,
                        d = t.detailsSelected,
                        b = t.isDetailsOpened,
                        m = t.action,
                        y = t.centerItems,
                        x = Object(l.useTheme)(),
                        O = x.colors,
                        w = x.bp,
                        u = Object(p.a)().deviceType,
                        z = S().filters,
                        j = s.a.useMemo((function() {
                            var t;
                            return t = {
                                borderRadius: n ? "0 0 6px 6px " : 0
                            }, Object(a.a)(t, w.TO_DESKTOP, {
                                padding: "15px 10px 0"
                            }), Object(a.a)(t, w.FROM_DESKTOP, {
                                borderBottom: y || n ? "none" : void 0
                            }), t
                        }), [w.FROM_DESKTOP, w.TO_DESKTOP, n, y]),
                        h = s.a.useMemo((function() {
                            var t;
                            return t = {
                                paddingBottom: n && !b ? 40 : 15
                            }, Object(a.a)(t, w.TO_DESKTOP, {
                                borderBottom: n ? "none" : void 0
                            }), Object(a.a)(t, w.FROM_DESKTOP, {
                                alignItems: b ? "flex-start" : void 0
                            }), t
                        }), [w.FROM_DESKTOP, w.TO_DESKTOP, b, n]);
                    return Object(g.b)("div", {
                        css: Object(o.a)([Object(a.a)({}, w.FROM_DESKTOP, {
                            backgroundColor: O.STARDUST
                        }), r], "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            display: "flex",
                            flexDirection: "row"
                        }, w.FROM_DESKTOP, {
                            alignItems: "stretch"
                        }), "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            display: "none"
                        }, w.FROM_DESKTOP, {
                            fontWeight: "bold",
                            padding: "15px 10px",
                            flex: 1,
                            display: "flex",
                            alignItems: "flex-start",
                            borderBottom: n ? "none" : "1px solid ".concat(O.CHROME),
                            justifyContent: "space-between"
                        }), "")
                    }, m ? Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({}, w.FROM_DESKTOP, {
                            fontSize: 14,
                            maxWidth: 144
                        }), "")
                    }, Object(g.b)(P.a, {
                        action: m
                    })) : Object(g.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: e
                        },
                        css: Object(o.a)(Object(a.a)({}, w.FROM_DESKTOP, {
                            fontSize: 14,
                            maxWidth: 144
                        }), "")
                    })), y && "DESKTOP" === u ? Object(g.b)("div", {
                        css: Object(o.a)({
                            borderBottom: n ? "none" : "1px solid ".concat(O.CHROME),
                            display: "flex",
                            padding: "0 10px"
                        }, "")
                    }, c.map((function(t, e) {
                        return Object(g.b)("div", {
                            key: e,
                            css: G
                        }, t.content.text)
                    }))) : c.map((function(t, o) {
                        return (t.filters && (c = t.filters, r = z, !Object.keys(c).find((function(t) {
                            return c[t.toLowerCase()] !== r[t.toLowerCase()]
                        }))) || !t.filters && ("DESKTOP" !== u && d === o || "DESKTOP" === u)) && Object(g.b)(F, Object(i.a)({
                            key: o,
                            isLastOne: n,
                            action: m,
                            title: e,
                            variant: "STARDUST",
                            wrapperCss: [j, Object(a.a)({}, w.TO_DESKTOP, {
                                padding: t.filters ? "15px 20px 0" : "15px 10px 0"
                            })],
                            contentWrapperCss: h,
                            isDetailsOpened: b
                        }, t));
                        var c, r
                    })), y && "DESKTOP" === u && Object(g.b)("div", {
                        css: Object(o.a)({
                            borderBottom: n ? "none" : "1px solid ".concat(O.CHROME),
                            flex: 1,
                            padding: 10
                        }, "")
                    })))
                }));
            s.a.createElement;
            var H = {
                    name: "1fcsmgl",
                    styles: "display:flex;margin-bottom:20px;"
                },
                W = {
                    name: "1qxy31x",
                    styles: "width:20px;height:20px;flex-shrink:0;"
                },
                U = function(t) {
                    var e = t.description,
                        n = t.action,
                        i = Object(l.useTheme)(),
                        c = i.colors,
                        r = i.bp,
                        p = Object(a.a)({
                            justifyContent: "center",
                            width: 185,
                            marginBottom: 30
                        }, r.FROM_DESKTOP, {
                            marginBottom: 40
                        });
                    return Object(g.b)(s.a.Fragment, null, Object(g.b)("div", {
                        css: H
                    }, e.icon && Object(g.b)(B.a, {
                        name: "info-icon",
                        color: c.INFO,
                        css: W
                    }), Object(g.b)("p", {
                        css: Object(o.a)({
                            fontSize: 14,
                            padding: e.icon ? "0 10px" : 0,
                            margin: 0
                        }, "")
                    }, e.text)), n && Object(g.b)(P.a, {
                        action: n,
                        css: p,
                        wrapperCss: p
                    }))
                },
                V = (s.a.createElement, function(t) {
                    var e = t.title,
                        n = t.items,
                        i = Object(l.useTheme)().bp;
                    return Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            flex: 1
                        }, i.FROM_DESKTOP, {
                            flex: "none",
                            width: "50%",
                            padding: "0 10px"
                        }), "")
                    }, e && Object(g.b)("p", {
                        css: Object(o.a)(Object(a.a)({
                            fontSize: 14,
                            fontWeight: "bold",
                            lineHeight: 18,
                            padding: 0,
                            marginTop: 15,
                            marginBottom: 20
                        }, i.FROM_DESKTOP, {
                            marginTop: 10,
                            fontSize: 18
                        }), "")
                    }, e), n.map((function(t, e) {
                        return Object(g.b)(U, {
                            key: e,
                            description: t.description,
                            action: t.action
                        })
                    })), Object(g.b)("div", null))
                }),
                Z = n("pTb3"),
                q = (s.a.createElement, function(t) {
                    var e, n = t.isChecked,
                        i = t.isActive,
                        c = void 0 === i || i,
                        r = t.onButtonClick,
                        s = t.onContentClick,
                        l = t.isDefaultChecked,
                        p = t.additionalDescription,
                        d = t.wrapperCss,
                        b = t.buttonCss,
                        m = t.iconCss,
                        y = t.contentCss,
                        x = t.children,
                        O = t.title,
                        w = Object(Z.c)(),
                        u = w.bp,
                        z = w.colors,
                        j = w.zIndex,
                        h = {
                            position: "relative",
                            "::after": {
                                position: "absolute",
                                content: "''",
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                backgroundColor: z.WHITE,
                                opacity: .5,
                                zIndex: j.LAYER_5,
                                cursor: "not-allowed"
                            }
                        };
                    return Object(g.b)("header", {
                        "aria-selected": n,
                        title: O,
                        css: Object(o.a)([{
                            borderRadius: 4
                        }, c ? void 0 : h, d], "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)({
                            display: "flex",
                            flexFlow: "row no-wrap",
                            zIndex: j.LAYER_1
                        }, "")
                    }, Object(g.b)("button", {
                        type: "button",
                        disabled: !c,
                        onClick: r,
                        css: Object(o.a)([(e = {
                            width: 50,
                            position: "relative",
                            backgroundColor: "transparent",
                            borderRadius: p ? "4px 0px 0px 0px" : "4px 0px 0px 4px",
                            margin: 0,
                            border: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            zIndex: j.LAYER_2,
                            flexShrink: 0,
                            "::before": {
                                position: "absolute",
                                content: "''",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundColor: l ? z.BLACK : z.ORANGE_DARK,
                                opacity: 1,
                                transform: "scaleX(".concat(n ? 1 : 0, ")"),
                                transition: "transform .15s, opacity .15s"
                            }
                        }, Object(a.a)(e, u.FROM_DESKTOP, {
                            width: 65
                        }), Object(a.a)(e, u.FROM_DESKTOP, {
                            cursor: l ? "not-allowed" : "pointer"
                        }), e), b], "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)([{
                            border: "1px solid ".concat(n ? "transparent" : z.CHROME),
                            borderRadius: "50%",
                            width: 30,
                            height: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: j.LAYER_3
                        }, m], "")
                    }, Object(g.b)(B.a, {
                        name: "plus-1",
                        css: Object(o.a)({
                            display: n ? "none" : void 0,
                            width: 12,
                            height: 12
                        }, "")
                    }), Object(g.b)(B.a, {
                        name: "check-mark2",
                        css: Object(o.a)(Object(a.a)({
                            display: n ? void 0 : "none",
                            color: z.WHITE,
                            width: 15,
                            height: 13
                        }, u.FROM_DESKTOP, {
                            width: 20,
                            height: 18
                        }), "")
                    }))), Object(g.b)("button", {
                        type: "button",
                        disabled: !c,
                        onClick: s,
                        css: Object(o.a)([{
                            cursor: "pointer",
                            width: "100%",
                            border: "none",
                            margin: "10px 10px 10px 0px",
                            paddingLeft: 10,
                            display: "flex",
                            backgroundColor: "transparent",
                            borderLeft: "1px solid ".concat(n ? "transparent" : z.CHROME)
                        }, y], "")
                    }, x)), p && Object(g.b)("p", {
                        css: Object(o.a)({
                            width: "100%",
                            borderRadius: "0px 0px 4px 4px",
                            margin: 0,
                            maxHeight: 40,
                            overflow: "hidden",
                            fontSize: 12,
                            lineHeight: "24px",
                            backgroundColor: z.BLACK,
                            color: z.WHITE,
                            padding: "0px 10px"
                        }, "")
                    }, p))
                }),
                Y = n("48NU");
            s.a.createElement;
            var X = {
                    name: "13brihr",
                    styles: "text-align:left;"
                },
                J = {
                    name: "omcqsq",
                    styles: "margin-bottom:7px;"
                },
                Q = {
                    name: "1aj7lqv",
                    styles: "margin:0;font-size:12px;line-height:14px;"
                },
                $ = s.a.memo((function(t) {
                    var e, n = t.value,
                        i = t.title,
                        c = t.description,
                        r = t.selected,
                        s = Object(l.useTheme)(),
                        d = s.bp,
                        b = s.colors,
                        m = S().dispatch,
                        y = Object(p.a)().deviceType,
                        x = function(t) {
                            m({
                                type: "setFilter",
                                payload: {
                                    key: "bandwidth",
                                    value: t
                                }
                            })
                        };
                    return Object(g.b)(q, {
                        onButtonClick: function() {
                            return x(n)
                        },
                        onContentClick: function() {
                            return "DESKTOP" === y && x(n)
                        },
                        wrapperCss: {
                            backgroundColor: b.WHITE,
                            marginBottom: 10
                        },
                        iconCss: Object(a.a)({}, d.FROM_DESKTOP, {
                            width: 40,
                            height: 40
                        }),
                        buttonCss: Object(a.a)({
                            height: 50,
                            width: 50
                        }, d.FROM_DESKTOP, {
                            width: 70,
                            height: "auto"
                        }),
                        isChecked: r,
                        title: "Wybierz ".concat(i)
                    }, Object(g.b)("div", {
                        css: X
                    }, Object(g.b)("div", {
                        css: J
                    }, Object(g.b)("strong", {
                        css: Object(o.a)(Object(a.a)({
                            flex: 1,
                            fontSize: 14,
                            strong: {
                                color: b.ORANGE_DARK
                            }
                        }, d.FROM_DESKTOP, {
                            fontSize: 18,
                            marginRight: "auto"
                        }), ""),
                        dangerouslySetInnerHTML: {
                            __html: i
                        }
                    }), Object(g.b)(Y.a, {
                        content: Object(g.b)("p", {
                            css: Q,
                            dangerouslySetInnerHTML: {
                                __html: c || ""
                            }
                        })
                    }, Object(g.b)("span", {
                        css: Object(o.a)(Object(a.a)({
                            marginLeft: 5
                        }, d.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    }, Object(g.b)(B.a, {
                        name: "question-mark",
                        css: Object(o.a)({
                            width: 16,
                            height: 16,
                            verticalAlign: -3
                        }, "")
                    })))), Object(g.b)("p", {
                        css: Object(o.a)((e = {
                            margin: 0,
                            fontSize: 12,
                            lineHeight: "14px",
                            color: b.SILVER
                        }, Object(a.a)(e, d.TO_DESKTOP, {
                            display: "none"
                        }), Object(a.a)(e, d.FROM_DESKTOP, {
                            marginRight: 0
                        }), e), ""),
                        dangerouslySetInnerHTML: {
                            __html: c || ""
                        }
                    })))
                }));
            s.a.createElement;
            var tt = {
                    name: "87xw0v",
                    styles: "font-weight:bold;font-size:14px;margin-bottom:20px;margin-top:10px;"
                },
                et = s.a.memo((function(t) {
                    t.name;
                    var e = t.items,
                        n = t.title,
                        c = Object(l.useTheme)().bp;
                    return Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            flex: 1
                        }, c.FROM_DESKTOP, {
                            flex: "none",
                            width: "50%",
                            padding: "0 10px 15px"
                        }), "")
                    }, Object(g.b)("div", {
                        css: tt
                    }, n), e.map((function(t, e) {
                        return Object(g.b)($, Object(i.a)({}, t, {
                            key: e
                        }))
                    })))
                })),
                nt = (s.a.createElement, s.a.memo((function(t) {
                    var e = t.content,
                        n = Object(l.useTheme)().bp,
                        c = S(),
                        r = c.detailsSelected,
                        p = c.isDetailsOpened;
                    return Object(g.b)(s.a.Fragment, null, Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({}, n.FROM_DESKTOP, {
                            display: "flex"
                        }), "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({}, n.FROM_DESKTOP, {
                            flex: 1
                        }), "")
                    }), Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column"
                        }, n.FROM_DESKTOP, {
                            flex: 4,
                            flexDirection: "row"
                        }), "")
                    }, e.map((function(t, e) {
                        return Object(g.b)(s.a.Fragment, {
                            key: e
                        }, "actions" === t.type && Object(g.b)(V, t), "filters" === t.type && Object(g.b)(et, t))
                    })))), function(t) {
                        var e = t.find((function(t) {
                            return "data" === t.type
                        }));
                        return e && e.items.map((function(e, n) {
                            return Object(g.b)(N, Object(i.a)({
                                isLastOne: n + 1 === t.length,
                                key: e.title + n,
                                detailsSelected: r,
                                isDetailsOpened: p
                            }, e))
                        }))
                    }(e))
                }))),
                it = n("FfDH"),
                ot = (s.a.createElement, function(t) {
                    var e = t.headers,
                        n = t.isLastOne,
                        o = t.isExpanded,
                        c = Object(l.useTheme)(),
                        r = c.colors,
                        p = c.bp,
                        d = S().isDetailsOpened,
                        b = o && d && !e.showWhenExpanded,
                        m = s.a.useMemo((function() {
                            return Object(a.a)({
                                paddingBottom: n ? 40 : 15,
                                borderBottom: n ? "none" : void 0,
                                visibility: b ? "hidden" : "visible"
                            }, p.FROM_DESKTOP, {
                                paddingBottom: n && !d ? 25 : 0,
                                alignItems: d ? "flex-start" : void 0
                            })
                        }), [p.FROM_DESKTOP, d, b, n]),
                        y = s.a.useMemo((function() {
                            var t;
                            return t = {
                                borderBottom: n ? "none" : void 0,
                                borderRadius: n && !d ? "0 0 6px 6px " : 0,
                                backgroundColor: d && o ? r.STARDUST : void 0
                            }, Object(a.a)(t, p.TO_DESKTOP, {
                                display: d ? "none" : void 0
                            }), Object(a.a)(t, p.FROM_DESKTOP, {
                                borderBottom: n && !d || o ? "none" : void 0
                            }), t
                        }), [p.FROM_DESKTOP, p.TO_DESKTOP, r.STARDUST, d, o, n]);
                    return Object(g.b)(s.a.Fragment, null, e.content.map((function(t, n) {
                        return Object(g.b)(F, Object(i.a)({
                            key: n,
                            title: e.title,
                            variant: "WHITE",
                            isExpanded: o,
                            isDetailsOpened: d,
                            contentWrapperCss: m,
                            wrapperCss: y
                        }, t))
                    })))
                });
            s.a.createElement;
            var at = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                ct = function(t) {
                    var e, n, i = t.onClickExpander,
                        c = t.headers,
                        r = t.isLastOne,
                        p = t.isExpanded,
                        d = Object(l.useTheme)(),
                        b = d.colors,
                        m = d.bp,
                        y = d.selectors,
                        x = S().dispatch,
                        O = S().isDetailsOpened;
                    return Object(g.b)(s.a.Fragment, null, Object(g.b)("div", {
                        role: "list",
                        css: Object(o.a)((e = {
                            backgroundColor: b.RAVEN,
                            display: "flex",
                            padding: "15px 20px",
                            maxWidth: O ? void 0 : 260
                        }, Object(a.a)(e, m.ONLY_TABLET, {
                            minWidth: O ? void 0 : 354
                        }), Object(a.a)(e, m.TO_DESKTOP, {
                            width: O ? "100%" : void 0,
                            marginRight: O ? void 0 : 10,
                            flexDirection: "column"
                        }), Object(a.a)(e, m.FROM_DESKTOP, {
                            padding: 10,
                            maxWidth: "none"
                        }), e), ""),
                        title: " ",
                        onClick: function(t) {
                            return t.stopPropagation()
                        }
                    }, Object(g.b)("div", {
                        css: !0 === r && {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        role: "button",
                        onClick: i
                    }, Object(g.b)("span", {
                        css: Object(o.a)(Object(a.a)({
                            color: b.WHITE,
                            marginBottom: O ? 20 : 10,
                            fontSize: O ? 16 : 12,
                            fontWeight: "bold"
                        }, m.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    }, c.title), Object(g.b)(B.a, {
                        name: "arrow-down-slim",
                        width: 16,
                        height: 16,
                        css: Object(o.a)(Object(a.a)({
                            marginRight: 0,
                            opacity: O ? void 0 : 0,
                            willChange: "transform, fill, opacity",
                            transition: "transform .2s, fill .15s, opacity .25s",
                            transform: "rotate(".concat(p ? "180deg" : "0deg", ")"),
                            fill: "filters" === c.type ? b.WHITE : p ? b.ORANGE_DARK : b.BLACK
                        }, m.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    })), Object(g.b)("div", {
                        css: at
                    }, c.content.map((function(t, e) {
                        var n;
                        return Object(g.b)(l.Toggle, {
                            key: e,
                            wrapperCss: {
                                ":not(:last-of-type)": Object(a.a)({
                                    marginRight: 5
                                }, m.FROM_DESKTOP, {
                                    marginRight: 10
                                })
                            },
                            onChange: function() {
                                return e = t.value, void x({
                                    type: "setFilter",
                                    payload: {
                                        key: "bandwidth",
                                        value: e
                                    }
                                });
                                var e
                            },
                            checked: t.selected,
                            contentCss: (n = {
                                minHeight: 0,
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                width: O ? 100 : 70,
                                height: 45,
                                color: b.WHITE,
                                transition: "border-color 0.2s ease-in-out",
                                borderColor: t.selected ? b.ORANGE_DARK : void 0
                            }, Object(a.a)(n, y.ON_FOCUS_OR_HOVER, {
                                borderColor: b.ORANGE_DARK
                            }), Object(a.a)(n, m.FROM_TABLET, {
                                width: 100
                            }), n)
                        }, Object(g.b)("span", {
                            dangerouslySetInnerHTML: {
                                __html: t.title
                            }
                        }))
                    })))), Object(g.b)("div", {
                        css: Object(o.a)((n = {}, Object(a.a)(n, m.TO_DESKTOP, {
                            display: "none"
                        }), Object(a.a)(n, "padding", 10), Object(a.a)(n, "flex", 1), n), "")
                    }))
                },
                rt = function(t) {
                    var e = Object(i.a)({}, t),
                        n = "DESKTOP" !== Object(p.a)().deviceType,
                        o = S().isDetailsOpened,
                        a = S().columnNumber;
                    if (n && !o) {
                        for (var c = [], r = 0; r <= a; r++) c.push(Object(g.b)(ct, Object(i.a)({}, e, {
                            key: r
                        })));
                        return Object(g.b)(s.a.Fragment, null, c)
                    }
                    return Object(g.b)(ct, e)
                },
                st = (s.a.createElement, function(t) {
                    var e = t.headers,
                        n = t.isLastOne,
                        i = t.isExpanded,
                        o = t.onClickExpander;
                    return Object(g.b)(s.a.Fragment, null, "data" === e.type ? Object(g.b)(ot, {
                        headers: e,
                        isExpanded: i,
                        isLastOne: n
                    }) : "filters" === e.type ? Object(g.b)(rt, {
                        onClickExpander: o,
                        headers: e,
                        isLastOne: n,
                        isExpanded: i
                    }) : void 0)
                }),
                lt = (s.a.createElement, s.a.memo((function(t) {
                    var e, n, i = t.headers,
                        c = t.empty,
                        r = t.isLastOne,
                        d = t.children,
                        m = t.handleOnClick,
                        y = t.isExpanded,
                        x = t.isFirstOne,
                        O = Object(l.useTheme)(),
                        z = O.colors,
                        j = O.bp,
                        h = Object(it.a)({
                            onClick: function() {
                                return m(i.title)
                            },
                            defaultExpanded: !1
                        }).bind,
                        k = h.onClick,
                        f = h.onKeyDown,
                        C = Object(p.a)().deviceType,
                        T = s.a.useRef(null),
                        M = w(T),
                        v = S().isDetailsOpened,
                        _ = s.a.useRef(null),
                        E = s.a.useRef(!1),
                        D = Object(u.useSpring)({
                            config: {
                                duration: 150
                            },
                            opacity: y ? 1 : 0,
                            height: y ? M.height : 0
                        });
                    s.a.useEffect((function() {
                        E.current && _.current && y && setTimeout((function() {
                            return _.current && Object(b.a)(_.current, {
                                block: "start",
                                scrollMode: "if-needed",
                                behavior: "smooth"
                            })
                        }), 300), E.current = !0
                    }), [y]);
                    var I = v && (!c || "DESKTOP" !== C),
                        R = function(t) {
                            return I && k(t)
                        },
                        P = z.WHITE;
                    return "filters" === i.type ? P = z.RAVEN : y && v && (P = z.STARDUST), Object(g.b)("div", {
                        css: Object(o.a)((e = {
                            position: "relative"
                        }, Object(a.a)(e, j.TO_DESKTOP, {
                            margin: "filters" !== i.type && v ? "0 20px" : void 0
                        }), Object(a.a)(e, j.FROM_DESKTOP, {
                            backgroundColor: P
                        }), e), "")
                    }, Object(g.b)("div", {
                        ref: _,
                        css: Object(o.a)({
                            position: "absolute",
                            top: -290,
                            bottom: 0
                        }, "")
                    }), Object(g.b)("div", {
                        role: "button",
                        onKeyDown: function(t) {
                            return I && f(t)
                        },
                        onClick: R,
                        "aria-expanded": y,
                        title: "Poka\u017c lub ukryj zawarto\u015b\u0107",
                        tabIndex: 0,
                        css: Object(o.a)(Object(a.a)({
                            outline: "none",
                            cursor: I ? "pointer" : "default",
                            display: "flex",
                            flexDirection: "row"
                        }, j.FROM_DESKTOP, {
                            alignItems: "stretch"
                        }), "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)((n = {
                            display: v && "filters" !== i.type ? "flex" : "none",
                            fontWeight: "bold",
                            paddingLeft: v ? void 0 : "10px",
                            flex: 1,
                            alignItems: "filters" === i.type ? "center" : "flex-start",
                            padding: y ? "15px 0 20px" : "15px 0"
                        }, Object(a.a)(n, j.TO_DESKTOP, {
                            justifyContent: "space-between",
                            borderTop: x ? "none" : "1px solid ".concat(z.CHROME)
                        }), Object(a.a)(n, j.FROM_DESKTOP, {
                            padding: "15px 10px",
                            display: "flex",
                            borderBottom: r && !v || y || "filters" === i.type ? "none" : "1px solid ".concat(z.CHROME)
                        }), n), "")
                    }, Object(g.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: i.title
                        },
                        css: Object(o.a)(Object(a.a)({
                            color: "filters" === i.type ? z.WHITE : void 0
                        }, j.FROM_DESKTOP, {
                            fontSize: 14,
                            width: 144
                        }), "")
                    }), v && Object(g.b)(B.a, {
                        name: "arrow-down-slim",
                        width: 16,
                        height: 16,
                        css: Object(o.a)(Object(a.a)({
                            display: Array.isArray(d) && 0 === d.length ? "none" : void 0,
                            marginRight: 0,
                            opacity: v ? void 0 : 0,
                            willChange: "transform, fill, opacity",
                            transition: "transform .2s, fill .15s, opacity .25s",
                            transform: "rotate(".concat(y ? "180deg" : "0deg", ")"),
                            fill: "filters" === i.type ? z.WHITE : y ? z.ORANGE_DARK : z.BLACK
                        }, j.FROM_DESKTOP, {
                            marginLeft: 36,
                            marginTop: 2
                        }), "")
                    })), Object(g.b)(st, {
                        isExpanded: y,
                        isLastOne: r,
                        headers: i,
                        onClickExpander: R
                    }), Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            minWidth: 10,
                            display: v ? "none" : void 0
                        }, j.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    })), Object(g.b)(u.animated.div, {
                        style: D,
                        css: Object(o.a)({
                            overflow: "hidden",
                            willChange: "opacity, height, transform",
                            visibility: y ? "visible" : "hidden",
                            transition: "visibility 0s linear ".concat(y ? "0s" : ".25s")
                        }, "")
                    }, Object(g.b)("div", {
                        ref: T
                    }, d)))
                }))),
                pt = (s.a.createElement, function(t) {
                    var e = t.headers,
                        n = t.isLastOne,
                        o = t.isFirstOne,
                        a = t.content,
                        c = t.type,
                        r = t.handleOnClick,
                        s = t.isExpanded,
                        l = S(),
                        d = l.detailsSelected,
                        b = l.isDetailsOpened,
                        m = "DESKTOP" !== Object(p.a)().deviceType;
                    return Object(g.b)(lt, {
                        isLastOne: n,
                        isFirstOne: o,
                        handleOnClick: r,
                        isExpanded: s,
                        headers: e,
                        empty: 0 === a.length
                    }, v("data", c) ? 0 === a.length && m && "data" === e.type ? Object(g.b)(F, {
                        isLastOne: !0,
                        title: e.content[0].content.text || "",
                        variant: "STARDUST",
                        wrapperCss: {
                            padding: "15px 10px 0"
                        },
                        contentWrapperCss: {
                            paddingBottom: 15,
                            borderBottom: "none"
                        },
                        titleWrapperCss: {
                            display: "none"
                        },
                        isDetailsOpened: b,
                        type: "text",
                        content: e.content[d].content
                    }) : a.map((function(t, n) {
                        return Object(g.b)(N, Object(i.a)({
                            isLastOne: n + 1 === a.length,
                            key: t.title + n,
                            detailsSelected: d,
                            isDetailsOpened: b,
                            centerItems: "filters" === e.type
                        }, t))
                    })) : v("multi", c) ? Object(g.b)(nt, {
                        content: a
                    }) : null)
                }),
                dt = (s.a.createElement, function(t) {
                    var e = t.header,
                        n = t.sections,
                        o = t.handleOnClick,
                        c = t.expandedId,
                        r = t.additionalTable,
                        p = Object(l.useTheme)().bp,
                        d = S().isDetailsOpened,
                        b = Object(a.a)({}, p.ONLY_TABLET, {
                            margin: "auto",
                            width: 464
                        });
                    return Object(g.b)(s.a.Fragment, null, Object(g.b)(D, e), Object(g.b)("div", {
                        css: d && b
                    }, n.map((function(t, e) {
                        return Object(g.b)(pt, Object(i.a)({
                            isFirstOne: 0 === e,
                            isExpanded: t.headers.title === c,
                            key: e,
                            additionalTable: r
                        }, t, {
                            isLastOne: n.length === e + 1,
                            handleOnClick: o,
                            headers: t.headers
                        }))
                    }))))
                }),
                bt = (s.a.createElement, function(t) {
                    var e = t.header,
                        n = t.sections,
                        i = t.handleOnClick,
                        c = t.expandedId,
                        r = S().isDetailsOpened,
                        p = Object(l.useTheme)().bp,
                        d = s.a.useRef(null),
                        b = w(d),
                        m = Object(u.useSpring)({
                            config: {
                                duration: 100
                            },
                            opacity: r ? 1 : 0,
                            height: r ? b.height : 0
                        });
                    return Object(g.b)(u.animated.div, {
                        style: m,
                        css: Object(o.a)(Object(a.a)({
                            overflow: "hidden",
                            willChange: "opacity, height, transform, visibility",
                            visibility: r ? "visible" : "hidden",
                            transition: "visibility 0s linear ".concat(r ? "0s" : ".25s")
                        }, p.FROM_DESKTOP, {
                            marginTop: r ? 60 : 0
                        }), "")
                    }, Object(g.b)("div", {
                        ref: d
                    }, Object(g.b)(dt, {
                        sections: n,
                        header: e,
                        handleOnClick: i,
                        expandedId: c,
                        additionalTable: !0
                    })))
                }),
                mt = {
                    offerType: "FIX",
                    title: "Przed\u0142u\u017c internet domowy w Orange",
                    infoSection: "Cena zawiera rabaty za e-faktur\u0119 i zgody marketingowe (po 5,01 z\u0142). Orange \u015awiat\u0142ow\xf3d dost\u0119pny w budynkach o typie zabudowy jednorodzinnej za dop\u0142at\u0105 14,99 z\u0142/mies.",
                    header: {
                        type: "columns",
                        filterHeaders: !0,
                        content: [{
                            title: "Internet domowy",
                            price: "69,98",
                            priceDescription: "z\u0142/mies. z rabatami"
                        }, {
                            title: "Internet domowy z Telewizj\u0105 Orange",
                            price: "109,98",
                            priceDescription: "z\u0142/mies. z rabatami"
                        }]
                    },
                    sections: [{
                        type: "data",
                        headers: {
                            type: "filters",
                            title: "Pr\u0119dko\u015b\u0107",
                            name: "bandwidth",
                            content: [{
                                value: "300",
                                title: "do <br /> 300 Mb/s",
                                selected: !1
                            }, {
                                value: "600",
                                title: "do <br /> 600 Mb/s",
                                selected: !0
                            }, {
                                value: "1",
                                title: "do <br /> 1 Gb/s",
                                selected: !1
                            }]
                        },
                        content: [{
                            title: "Pobieranie danych",
                            content: [{
                                type: "text",
                                content: {
                                    text: "do 300 Mb/s"
                                },
                                filters: {
                                    bandwidth: "300"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 600 Mb/s"
                                },
                                filters: {
                                    bandwidth: "600"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 1 Gb/s"
                                },
                                filters: {
                                    bandwidth: "1"
                                }
                            }]
                        }, {
                            title: "Wysy\u0142anie danych",
                            content: [{
                                type: "text",
                                content: {
                                    text: "do 50 Mb/s"
                                },
                                filters: {
                                    bandwidth: "300"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 100 Mb/s"
                                },
                                filters: {
                                    bandwidth: "600"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 300 Mb/s"
                                },
                                filters: {
                                    bandwidth: "1"
                                }
                            }]
                        }]
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Urz\u0105dzenie",
                            content: [{
                                type: "text",
                                content: {
                                    text: "Smart Wi-Fi Modem FunBox 3.0"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "Smart Wi-Fi Modem FunBox 3.0"
                                }
                            }]
                        },
                        content: []
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Telewizja",
                            showWhenExpanded: !0,
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "109 kana\u0142\xf3w w tym 63 HD"
                                }
                            }]
                        },
                        content: [{
                            title: "Liczba kana\u0142\xf3w",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "109 kana\u0142\xf3w"
                                }
                            }]
                        }, {
                            title: "Liczba kana\u0142\xf3w HD <br/>w ramach tego pakietu",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "63 kana\u0142y"
                                }
                            }]
                        }, {
                            title: "Liczba kana\u0142\xf3w 4K  <br/>w ramach tego pakietu",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "2 kana\u0142y"
                                }
                            }]
                        }, {
                            title: "Dekoder 4K",
                            action: {
                                id: "Dekoder_4K",
                                text: "Dekoder 4K",
                                title: "Dekoder 4K",
                                action: "https://www.orange.pl/view/modemy-dekodery-Orange#dekodery",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "icon",
                                content: {
                                    icon: "CheckMark2"
                                }
                            }]
                        }, {
                            title: "Multinagrywarka",
                            action: {
                                id: "Multinagrywarka",
                                text: "Multinagrywarka",
                                title: "Multinagrywarka",
                                action: " https://www.orange.pl/view/multinagrywarka",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "icon",
                                content: {
                                    icon: "CheckMark2"
                                }
                            }]
                        }, {
                            title: "Multiroom",
                            action: {
                                id: "Multiroom",
                                text: "Multiroom",
                                title: "Multiroom",
                                action: "https://www.orange.pl/omnibook/telewizja-multiroom-podlaczenie-i-konfiguracja#",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "10 z\u0142/mies. <br/>+ jednorazowo 1 z\u0142"
                                }
                            }]
                        }]
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Telefon domowy",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "Rozmowy w kraju i UE: bez limitu"
                                }
                            }]
                        },
                        content: []
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Czas trwania umowy",
                            content: [{
                                type: "text",
                                content: {
                                    text: "24 miesi\u0105ce"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "24 miesi\u0105ce"
                                }
                            }]
                        },
                        content: []
                    }],
                    toggleButton: {
                        openText: "Zobacz szczeg\xf3\u0142y pakiet\xf3w",
                        closeText: "Wr\xf3\u0107"
                    },
                    detailsActionTrigger: {
                        id: "COMPARATOR_CMB_BUTTON_DETAILS_OL_B2C",
                        action: "CALL_ME_BACK",
                        text: "Zam\xf3w rozmow\u0119",
                        title: "Zam\xf3w rozmow\u0119",
                        type: "BUTTON",
                        variant: "PRIMARY_ON_WHITE",
                        params: {
                            queue: "SALES_C_LOVE_GL_B2C_CALLBACK",
                            personalScenario: "ofertaLove",
                            description: "oferta Love",
                            profile: ""
                        }
                    },
                    filters: {
                        bandwidth: "600"
                    }
                },
                yt = {
                    offerType: "FIX",
                    title: "Przed\u0142u\u017c internet domowy w Orange",
                    infoSection: "Cena zawiera rabaty za e-faktur\u0119 i zgody marketingowe (po 5,01 z\u0142). Orange \u015awiat\u0142ow\xf3d dost\u0119pny w budynkach o typie zabudowy jednorodzinnej za dop\u0142at\u0105 14,99 z\u0142/mies.",
                    header: {
                        type: "columns",
                        filterHeaders: !0,
                        content: [{
                            title: "Internet domowy",
                            price: "59,98",
                            priceDescription: "z\u0142/mies. z rabatami"
                        }, {
                            title: "Internet domowy z Telewizj\u0105 Orange",
                            price: "99,98",
                            priceDescription: "z\u0142/mies. z rabatami"
                        }]
                    },
                    sections: [{
                        type: "data",
                        headers: {
                            type: "filters",
                            title: "Pr\u0119dko\u015b\u0107",
                            name: "bandwidth",
                            content: [{
                                value: "300",
                                title: "do <br /> 300 Mb/s",
                                selected: !0
                            }, {
                                value: "600",
                                title: "do <br /> 600 Mb/s",
                                selected: !1
                            }, {
                                value: "1",
                                title: "do <br /> 1 Gb/s",
                                selected: !1
                            }]
                        },
                        content: [{
                            title: "Pobieranie danych",
                            content: [{
                                type: "text",
                                content: {
                                    text: "do 300 Mb/s"
                                },
                                filters: {
                                    bandwidth: "300"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 600 Mb/s"
                                },
                                filters: {
                                    bandwidth: "600"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 1 Gb/s"
                                },
                                filters: {
                                    bandwidth: "1"
                                }
                            }]
                        }, {
                            title: "Wysy\u0142anie danych",
                            content: [{
                                type: "text",
                                content: {
                                    text: "do 50 Mb/s"
                                },
                                filters: {
                                    bandwidth: "300"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 100 Mb/s"
                                },
                                filters: {
                                    bandwidth: "600"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 300 Mb/s"
                                },
                                filters: {
                                    bandwidth: "1"
                                }
                            }]
                        }]
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Urz\u0105dzenie",
                            content: [{
                                type: "text",
                                content: {
                                    text: "Smart Wi-Fi Modem FunBox 3.0"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "Smart Wi-Fi Modem FunBox 3.0"
                                }
                            }]
                        },
                        content: []
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Telewizja",
                            showWhenExpanded: !0,
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "109 kana\u0142\xf3w w tym 63 HD"
                                }
                            }]
                        },
                        content: [{
                            title: "Liczba kana\u0142\xf3w",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "109 kana\u0142\xf3w"
                                }
                            }]
                        }, {
                            title: "Liczba kana\u0142\xf3w HD <br/>w ramach tego pakietu",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "63 kana\u0142y"
                                }
                            }]
                        }, {
                            title: "Liczba kana\u0142\xf3w 4K  <br/>w ramach tego pakietu",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "2 kana\u0142y"
                                }
                            }]
                        }, {
                            title: "Dekoder 4K",
                            action: {
                                id: "Dekoder_4K",
                                text: "Dekoder 4K",
                                title: "Dekoder 4K",
                                action: "https://www.orange.pl/view/modemy-dekodery-Orange#dekodery",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "icon",
                                content: {
                                    icon: "CheckMark2"
                                }
                            }]
                        }, {
                            title: "Multinagrywarka",
                            action: {
                                id: "Multinagrywarka",
                                text: "Multinagrywarka",
                                title: "Multinagrywarka",
                                action: " https://www.orange.pl/view/multinagrywarka",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "icon",
                                content: {
                                    icon: "CheckMark2"
                                }
                            }]
                        }, {
                            title: "Multiroom",
                            action: {
                                id: "Multiroom",
                                text: "Multiroom",
                                title: "Multiroom",
                                action: "https://www.orange.pl/omnibook/telewizja-multiroom-podlaczenie-i-konfiguracja#",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "10 z\u0142/mies. <br/>+ jednorazowo 1 z\u0142"
                                }
                            }]
                        }]
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Telefon domowy",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "Rozmowy w kraju i UE: bez limitu"
                                }
                            }]
                        },
                        content: []
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Czas trwania umowy",
                            content: [{
                                type: "text",
                                content: {
                                    text: "24 miesi\u0105ce"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "24 miesi\u0105ce"
                                }
                            }]
                        },
                        content: []
                    }],
                    toggleButton: {
                        openText: "Zobacz szczeg\xf3\u0142y pakiet\xf3w",
                        closeText: "Wr\xf3\u0107"
                    },
                    detailsActionTrigger: {
                        id: "COMPARATOR_CMB_BUTTON_DETAILS_OL_B2C",
                        action: "CALL_ME_BACK",
                        text: "Zam\xf3w rozmow\u0119",
                        title: "Zam\xf3w rozmow\u0119",
                        type: "BUTTON",
                        variant: "PRIMARY_ON_WHITE",
                        params: {
                            queue: "SALES_C_LOVE_GL_B2C_CALLBACK",
                            personalScenario: "ofertaLove",
                            description: "oferta Love",
                            profile: ""
                        }
                    },
                    filters: {
                        bandwidth: "300"
                    }
                },
                xt = {
                    offerType: "FIX",
                    title: "Przed\u0142u\u017c internet domowy w Orange",
                    infoSection: "Cena zawiera rabaty za e-faktur\u0119 i zgody marketingowe (po 5,01 z\u0142). Orange \u015awiat\u0142ow\xf3d dost\u0119pny w budynkach o typie zabudowy jednorodzinnej za dop\u0142at\u0105 14,99 z\u0142/mies.",
                    header: {
                        type: "columns",
                        filterHeaders: !0,
                        content: [{
                            title: "Internet domowy",
                            price: "79,98",
                            priceDescription: "z\u0142/mies. z rabatami"
                        }, {
                            title: "Internet domowy z Telewizj\u0105 Orange",
                            price: "119,98",
                            priceDescription: "z\u0142/mies. z rabatami"
                        }]
                    },
                    sections: [{
                        type: "data",
                        headers: {
                            type: "filters",
                            title: "Pr\u0119dko\u015b\u0107",
                            name: "bandwidth",
                            content: [{
                                value: "300",
                                title: "do <br /> 300 Mb/s",
                                selected: !1
                            }, {
                                value: "600",
                                title: "do <br /> 600 Mb/s",
                                selected: !1
                            }, {
                                value: "1",
                                title: "do <br /> 1 Gb/s",
                                selected: !0
                            }]
                        },
                        content: [{
                            title: "Pobieranie danych",
                            content: [{
                                type: "text",
                                content: {
                                    text: "do 300 Mb/s"
                                },
                                filters: {
                                    bandwidth: "300"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 600 Mb/s"
                                },
                                filters: {
                                    bandwidth: "600"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 1 Gb/s"
                                },
                                filters: {
                                    bandwidth: "1"
                                }
                            }]
                        }, {
                            title: "Wysy\u0142anie danych",
                            content: [{
                                type: "text",
                                content: {
                                    text: "do 50 Mb/s"
                                },
                                filters: {
                                    bandwidth: "300"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 100 Mb/s"
                                },
                                filters: {
                                    bandwidth: "600"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "do 300 Mb/s"
                                },
                                filters: {
                                    bandwidth: "1"
                                }
                            }]
                        }]
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Urz\u0105dzenie",
                            content: [{
                                type: "text",
                                content: {
                                    text: "Smart Wi-Fi Modem FunBox 3.0"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "Smart Wi-Fi Modem FunBox 3.0"
                                }
                            }]
                        },
                        content: []
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Telewizja",
                            showWhenExpanded: !0,
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "109 kana\u0142\xf3w w tym 63 HD"
                                }
                            }]
                        },
                        content: [{
                            title: "Liczba kana\u0142\xf3w",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "109 kana\u0142\xf3w"
                                }
                            }]
                        }, {
                            title: "Liczba kana\u0142\xf3w HD <br/>w ramach tego pakietu",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "63 kana\u0142y"
                                }
                            }]
                        }, {
                            title: "Liczba kana\u0142\xf3w 4K  <br/>w ramach tego pakietu",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "2 kana\u0142y"
                                }
                            }]
                        }, {
                            title: "Dekoder 4K",
                            action: {
                                id: "Dekoder_4K",
                                text: "Dekoder 4K",
                                title: "Dekoder 4K",
                                action: "https://www.orange.pl/view/modemy-dekodery-Orange#dekodery",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "icon",
                                content: {
                                    icon: "CheckMark2"
                                }
                            }]
                        }, {
                            title: "Multinagrywarka",
                            action: {
                                id: "Multinagrywarka",
                                text: "Multinagrywarka",
                                title: "Multinagrywarka",
                                action: " https://www.orange.pl/view/multinagrywarka",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "icon",
                                content: {
                                    icon: "CheckMark2"
                                }
                            }]
                        }, {
                            title: "Multiroom",
                            action: {
                                id: "Multiroom",
                                text: "Multiroom",
                                title: "Multiroom",
                                action: "https://www.orange.pl/omnibook/telewizja-multiroom-podlaczenie-i-konfiguracja#",
                                externalTab: !0,
                                type: "LINK",
                                variant: "ON_LIGHT_BACKGROUND"
                            },
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "10 z\u0142/mies. <br/>+ jednorazowo 1 z\u0142"
                                }
                            }]
                        }]
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Telefon domowy",
                            content: [{
                                type: "icon",
                                content: {
                                    icon: "CloseSmaller"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "Rozmowy w kraju i UE: bez limitu"
                                }
                            }]
                        },
                        content: []
                    }, {
                        type: "data",
                        headers: {
                            type: "data",
                            title: "Czas trwania umowy",
                            content: [{
                                type: "text",
                                content: {
                                    text: "24 miesi\u0105ce"
                                }
                            }, {
                                type: "text",
                                content: {
                                    text: "24 miesi\u0105ce"
                                }
                            }]
                        },
                        content: []
                    }],
                    toggleButton: {
                        openText: "Zobacz szczeg\xf3\u0142y pakiet\xf3w",
                        closeText: "Wr\xf3\u0107"
                    },
                    detailsActionTrigger: {
                        id: "COMPARATOR_CMB_BUTTON_DETAILS_OL_B2C",
                        action: "CALL_ME_BACK",
                        text: "Zam\xf3w rozmow\u0119",
                        title: "Zam\xf3w rozmow\u0119",
                        type: "BUTTON",
                        variant: "PRIMARY_ON_WHITE",
                        params: {
                            queue: "SALES_C_LOVE_GL_B2C_CALLBACK",
                            personalScenario: "ofertaLove",
                            description: "oferta Love",
                            profile: ""
                        }
                    },
                    filters: {
                        bandwidth: "1"
                    }
                },
                Ot = {
                    LOVE: [{
                        offerType: "LOVE",
                        title: "Pakiety Love z umow\u0105 na 24 miesi\u0105ce",
                        defaultOpened: 2,
                        infoSection: "Poni\u017csze ceny zawieraj\u0105 rabaty za e-faktur\u0119 i zgody marketingowe (po 5 z\u0142/mies.). Brak wyra\u017cenia zg\xf3d w procesie sk\u0142adania zam\xf3wienia spowoduje utrat\u0119 w/w rabat\xf3w. Ceny nie zawieraj\u0105 jednorazowej op\u0142aty aktywacyjnej 49,99 z\u0142. Orange \u015awiat\u0142ow\xf3d dost\u0119pny w budynkach o typie zabudowy jednorodzinnej za dop\u0142at\u0105 14,99 z\u0142/mies.",
                        header: {
                            type: "columns",
                            content: [{
                                title: "Mini",
                                price: "79,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami"
                            }, {
                                title: "Standard",
                                price: "109,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami"
                            }, {
                                title: "Extra",
                                price: "149,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami",
                                badge: "Wkr\xf3tce 5G"
                            }, {
                                title: "Premium",
                                price: "219,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami",
                                badge: "Wkr\xf3tce 5G"
                            }]
                        },
                        sections: [{
                            type: "multi",
                            headers: {
                                type: "data",
                                title: "Internet domowy",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 300 Mb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 300 Mb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 300 Mb/s"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 300 Mb/s"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                type: "filters",
                                name: "bandwidth",
                                title: "Dost\u0119pne pr\u0119dko\u015bci w \u015awiat\u0142ow\xf3d",
                                items: [{
                                    value: "300",
                                    title: "\u015awiat\u0142ow\xf3d do 300 Mb/s",
                                    description: "Pobieranie danych: max 300 Mb/s, min 100 Mb/s <br />Wysy\u0142anie danych: max 50 Mb/s, min 10 Mb/s",
                                    selected: !0
                                }, {
                                    value: "600",
                                    title: "\u015awiat\u0142ow\xf3d do 600 Mb/s",
                                    description: "Pobieranie danych: max 600 Mb/s, min 150 Mb/s <br />Wysy\u0142anie danych: max 100 Mb/s, min 15 Mb/s",
                                    selected: !1
                                }, {
                                    value: "1",
                                    title: "\u015awiat\u0142ow\xf3d do 1 Gb/s",
                                    description: "Pobieranie danych: max 1 Gb/s, min 200 Mb/s <br />Wysy\u0142anie danych: max 300 Mb/s, min 20 Mb/s",
                                    selected: !1
                                }]
                            }, {
                                type: "data",
                                title: "additionalData",
                                items: [{
                                    title: "Smart&nbsp;Wi&#8288;-&#8288;Fi&nbsp;Modem FunBox 3.0 ",
                                    action: {
                                        id: "Smart_Wi_Fi_Modem_FunBox_3_0",
                                        text: "Smart Wi-Fi Modem FunBox 3.0",
                                        title: "Smart Wi-Fi Modem FunBox 3.0",
                                        action: "https://www.orange.pl/view/modemy-dekodery-Orange#modemy",
                                        externalTab: !0,
                                        type: "LINK",
                                        variant: "ON_LIGHT_BACKGROUND"
                                    },
                                    content: [{
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }]
                                }, {
                                    title: "Smart Wi-Fi Box",
                                    action: {
                                        id: "Smart_Wi_Fi_Box",
                                        text: "Smart Wi-Fi Box",
                                        title: "Smart Wi-Fi Box",
                                        action: "https://www.orange.pl/view/modemy-dekodery-Orange#wifi-extender",
                                        externalTab: !0,
                                        type: "LINK",
                                        variant: "ON_LIGHT_BACKGROUND"
                                    },
                                    content: [{
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }]
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Abonament kom\xf3rkowy",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: 10 GB"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: 10 GB"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: bez limitu GB"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu<br/>Internet: bez limitu GB"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "Rozmowy do sieci\nkom\xf3rkowych i stacjonarnych w\nPolsce oraz w roamingu w UE",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "SMS/MMS w Polsce oraz w roamingu UE",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "Internet w telefonie",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "10 GB (w tym 5,83 GB w UE)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 GB (w tym 5,83 GB w UE)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu GB<br/>20 GB z pe\u0142n\u0105 pr\u0119dko\u015bci\u0105, w tym 6,88 GB w UE, p\xf3\u017aniej ograniczenie pr\u0119dko\u015bci do 1 Mb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu GB<br/>40 GB z pe\u0142n\u0105 pr\u0119dko\u015bci\u0105, w tym 9,00 GB \nw UE, p\xf3\u017aniej ograniczenie pr\u0119dko\u015bci \ndo 1 Mb/s"
                                    }
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Telewizja",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "109 kana\u0142\xf3w <br/>(w tym 64 HD i 2 w 4K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "174\xa0kana\u0142y <br/>(w\xa0tym 112\xa0HD i\xa03\xa0w\xa04K)"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "189\xa0kana\u0142\xf3w <br/>(w\xa0tym 127\xa0HD i\xa03\xa0w\xa04K)"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "Liczba kana\u0142\xf3w",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "109 kana\u0142\xf3w <br/>(w tym 64 HD i 2 w 4K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "174\xa0kana\u0142y <br/>(w\xa0tym 112\xa0HD i\xa03\xa0w\xa04K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "189\xa0kana\u0142\xf3w <br/>(w\xa0tym 127\xa0HD i\xa03\xa0w\xa04K)"
                                    }
                                }]
                            }, {
                                title: "Pakiet Komfortowy <br/>(43 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Polsat <br/>(14 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 10 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Eleven <br/>(2 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Multi+ <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 5 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet HBO <br/>(3 kana\u0142y)<br/> i HBO GO",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet CANAL+ Prestige <br/>(10 kana\u0142\xf3w)<br/> + Mistrzowska Pi\u0142ka",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 49,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 49,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet CANAL+ Select <br/>(6 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 39,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 39,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet FilmBox <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Pakiet Cinemax <br/>(2 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Pakiet Fun <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Dekoder 4K Premium ",
                                action: {
                                    id: "Dekoder_4K_Premium",
                                    text: "Dekoder 4K Premium ",
                                    title: "Dekoder 4K Premium ",
                                    action: "https://www.orange.pl/view/modemy-dekodery-Orange#dekodery",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Multinagrywarka",
                                action: {
                                    id: "Multinagrywarka",
                                    text: "Multinagrywarka",
                                    title: "Multinagrywarka",
                                    action: " https://www.orange.pl/view/multinagrywarka",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Multiroom",
                                action: {
                                    id: "Multiroom",
                                    text: "Multiroom",
                                    title: "Multiroom",
                                    action: "https://www.orange.pl/omnibook/telewizja-multiroom-podlaczenie-i-konfiguracja#",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Telefon domowy",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "rozmowy stacjonarne krajowe i mi\u0119dzynarodowe do UE, USA i Kanady ",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "rozmowy kom\xf3rkowe do USA i Kanady ",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }]
                        }],
                        toggleButton: {
                            openText: "Zobacz szczeg\xf3\u0142y pakiet\xf3w",
                            closeText: "Wr\xf3\u0107"
                        },
                        detailsActionTrigger: {
                            id: "COMPARATOR_CMB_BUTTON_DETAILS_OL_B2C",
                            action: "CALL_ME_BACK",
                            text: "Zam\xf3w rozmow\u0119",
                            title: "Zam\xf3w rozmow\u0119",
                            type: "BUTTON",
                            variant: "PRIMARY_ON_WHITE",
                            params: {
                                queue: "SALES_C_LOVE_GL_B2C_CALLBACK",
                                personalScenario: "ofertaLove",
                                description: "oferta Love",
                                profile: ""
                            }
                        },
                        filters: {
                            bandwidth: "300"
                        }
                    }, {
                        offerType: "LOVE",
                        title: "Pakiety Love z umow\u0105 na 24 miesi\u0105ce",
                        defaultOpened: 2,
                        infoSection: "Poni\u017csze ceny zawieraj\u0105 rabaty za e-faktur\u0119 i zgody marketingowe (po 5 z\u0142/mies.). Brak wyra\u017cenia zg\xf3d w procesie sk\u0142adania zam\xf3wienia spowoduje utrat\u0119 w/w rabat\xf3w. Ceny nie zawieraj\u0105 jednorazowej op\u0142aty aktywacyjnej 49,99 z\u0142. Orange \u015awiat\u0142ow\xf3d dost\u0119pny w budynkach o typie zabudowy jednorodzinnej za dop\u0142at\u0105 14,99 z\u0142/mies.",
                        header: {
                            type: "columns",
                            content: [{
                                title: "Mini",
                                price: "89,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami"
                            }, {
                                title: "Standard",
                                price: "119,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami"
                            }, {
                                title: "Extra",
                                price: "159,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami",
                                badge: "Wkr\xf3tce 5G"
                            }, {
                                title: "Premium",
                                price: "229,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami",
                                badge: "Wkr\xf3tce 5G"
                            }]
                        },
                        sections: [{
                            type: "multi",
                            headers: {
                                type: "data",
                                title: "Internet domowy",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 600 Mb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 600 Mb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 600 Mb/s"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 600 Mb/s"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                type: "filters",
                                name: "bandwidth",
                                title: "Dost\u0119pne pr\u0119dko\u015bci w \u015awiat\u0142ow\xf3d",
                                items: [{
                                    value: "300",
                                    title: "\u015awiat\u0142ow\xf3d do 300 Mb/s",
                                    description: "Pobieranie danych: max 300 Mb/s, min 100 Mb/s <br />Wysy\u0142anie danych: max 50 Mb/s, min 10 Mb/s",
                                    selected: !1
                                }, {
                                    value: "600",
                                    title: "\u015awiat\u0142ow\xf3d do 600 Mb/s",
                                    description: "Pobieranie danych: max 600 Mb/s, min 150 Mb/s <br />Wysy\u0142anie danych: max 100 Mb/s, min 15 Mb/s",
                                    selected: !0
                                }, {
                                    value: "1",
                                    title: "\u015awiat\u0142ow\xf3d do 1 Gb/s",
                                    description: "Pobieranie danych: max 1 Gb/s, min 200 Mb/s <br />Wysy\u0142anie danych: max 300 Mb/s, min 20 Mb/s",
                                    selected: !1
                                }]
                            }, {
                                type: "data",
                                title: "additionalData",
                                items: [{
                                    title: "Smart&nbsp;Wi&#8288;-&#8288;Fi&nbsp;Modem FunBox 3.0 ",
                                    action: {
                                        id: "Smart_Wi_Fi_Modem_FunBox_3_0",
                                        text: "Smart Wi-Fi Modem FunBox 3.0",
                                        title: "Smart Wi-Fi Modem FunBox 3.0",
                                        action: "https://www.orange.pl/view/modemy-dekodery-Orange#modemy",
                                        externalTab: !0,
                                        type: "LINK",
                                        variant: "ON_LIGHT_BACKGROUND"
                                    },
                                    content: [{
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }]
                                }, {
                                    title: "Smart Wi-Fi Box",
                                    action: {
                                        id: "Smart_Wi_Fi_Box",
                                        text: "Smart Wi-Fi Box",
                                        title: "Smart Wi-Fi Box",
                                        action: "https://www.orange.pl/view/modemy-dekodery-Orange#wifi-extender",
                                        externalTab: !0,
                                        type: "LINK",
                                        variant: "ON_LIGHT_BACKGROUND"
                                    },
                                    content: [{
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }]
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Abonament kom\xf3rkowy",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: 10 GB"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: 10 GB"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: bez limitu GB"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu<br/>Internet: bez limitu GB"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "Rozmowy do sieci\nkom\xf3rkowych i stacjonarnych w\nPolsce oraz w roamingu w UE",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "SMS/MMS w Polsce oraz w roamingu UE",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "Internet w telefonie",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "10 GB (w tym 5,83 GB w UE)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 GB (w tym 5,83 GB w UE)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu GB<br/>20 GB z pe\u0142n\u0105 pr\u0119dko\u015bci\u0105, w tym 6,88 GB w UE, p\xf3\u017aniej ograniczenie pr\u0119dko\u015bci do 1 Mb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu GB<br/>40 GB z pe\u0142n\u0105 pr\u0119dko\u015bci\u0105, w tym 9,00 GB \nw UE, p\xf3\u017aniej ograniczenie pr\u0119dko\u015bci \ndo 1 Mb/s"
                                    }
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Telewizja",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "109 kana\u0142\xf3w <br/>(w tym 63 HD i 2 w 4K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "174\xa0kana\u0142y <br/>(w\xa0tym 111\xa0HD i\xa03\xa0w\xa04K)"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "189\xa0kana\u0142\xf3w <br/>(w\xa0tym 126\xa0HD i\xa03\xa0w\xa04K)"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "Liczba kana\u0142\xf3w",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "109 kana\u0142\xf3w <br/>(w tym 64 HD i 2 w 4K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "174\xa0kana\u0142y <br/>(w\xa0tym 112\xa0HD i\xa03\xa0w\xa04K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "189\xa0kana\u0142\xf3w <br/>(w\xa0tym 127\xa0HD i\xa03\xa0w\xa04K)"
                                    }
                                }]
                            }, {
                                title: "Pakiet Komfortowy <br/>(43 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Polsat <br/>(14 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 10 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Eleven <br/>(2 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Multi+ <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 5 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet HBO <br/>(3 kana\u0142y)<br/> i HBO GO",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet CANAL+ Prestige <br/>(10 kana\u0142\xf3w)<br/> + Mistrzowska Pi\u0142ka",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 49,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 49,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet CANAL+ Select <br/>(6 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 39,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 39,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet FilmBox <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Pakiet Cinemax <br/>(2 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Pakiet Fun <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Dekoder 4K Premium ",
                                action: {
                                    id: "Dekoder_4K_Premium",
                                    text: "Dekoder 4K Premium ",
                                    title: "Dekoder 4K Premium ",
                                    action: "https://www.orange.pl/view/modemy-dekodery-Orange#dekodery",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Multinagrywarka",
                                action: {
                                    id: "Multinagrywarka",
                                    text: "Multinagrywarka",
                                    title: "Multinagrywarka",
                                    action: " https://www.orange.pl/view/multinagrywarka",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Multiroom",
                                action: {
                                    id: "Multiroom",
                                    text: "Multiroom",
                                    title: "Multiroom",
                                    action: "https://www.orange.pl/omnibook/telewizja-multiroom-podlaczenie-i-konfiguracja#",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Telefon domowy",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "rozmowy stacjonarne krajowe i mi\u0119dzynarodowe do UE, USA i Kanady ",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "rozmowy kom\xf3rkowe do USA i Kanady ",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }]
                        }],
                        toggleButton: {
                            openText: "Zobacz szczeg\xf3\u0142y pakiet\xf3w",
                            closeText: "Wr\xf3\u0107"
                        },
                        detailsActionTrigger: {
                            id: "COMPARATOR_CMB_BUTTON_DETAILS_OL_B2C",
                            action: "CALL_ME_BACK",
                            text: "Zam\xf3w rozmow\u0119",
                            title: "Zam\xf3w rozmow\u0119",
                            type: "BUTTON",
                            variant: "PRIMARY_ON_WHITE",
                            params: {
                                queue: "SALES_C_LOVE_GL_B2C_CALLBACK",
                                personalScenario: "ofertaLove",
                                description: "oferta Love",
                                profile: ""
                            }
                        },
                        filters: {
                            bandwidth: "600"
                        }
                    }, {
                        offerType: "LOVE",
                        title: "Pakiety Love z umow\u0105 na 24 miesi\u0105ce",
                        defaultOpened: 2,
                        infoSection: "Poni\u017csze ceny zawieraj\u0105 rabaty za e-faktur\u0119 i zgody marketingowe (po 5 z\u0142/mies.). Brak wyra\u017cenia zg\xf3d w procesie sk\u0142adania zam\xf3wienia spowoduje utrat\u0119 w/w rabat\xf3w. Ceny nie zawieraj\u0105 jednorazowej op\u0142aty aktywacyjnej 49,99 z\u0142. Orange \u015awiat\u0142ow\xf3d dost\u0119pny w budynkach o typie zabudowy jednorodzinnej za dop\u0142at\u0105 14,99 z\u0142/mies.",
                        header: {
                            type: "columns",
                            content: [{
                                title: "Mini",
                                price: "99,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami"
                            }, {
                                title: "Standard",
                                price: "129,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami"
                            }, {
                                title: "Extra",
                                price: "169,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami",
                                badge: "Wkr\xf3tce 5G"
                            }, {
                                title: "Premium",
                                price: "239,99",
                                priceDescription: "z\u0142/mies.</br> z rabatami",
                                badge: "Wkr\xf3tce 5G"
                            }]
                        },
                        sections: [{
                            type: "multi",
                            headers: {
                                type: "data",
                                title: "Internet domowy",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 1 Gb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 1 Gb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 1 Gb/s"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "\u015awiat\u0142ow\xf3d do 1 Gb/s"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                type: "filters",
                                name: "bandwidth",
                                title: "Dost\u0119pne pr\u0119dko\u015bci w \u015awiat\u0142ow\xf3d",
                                items: [{
                                    value: "300",
                                    title: "\u015awiat\u0142ow\xf3d do 300 Mb/s",
                                    description: "Pobieranie danych: max 300 Mb/s, min 100 Mb/s <br />Wysy\u0142anie danych: max 50 Mb/s, min 10 Mb/s",
                                    selected: !1
                                }, {
                                    value: "600",
                                    title: "\u015awiat\u0142ow\xf3d do 600 Mb/s",
                                    description: "Pobieranie danych: max 600 Mb/s, min 150 Mb/s <br />Wysy\u0142anie danych: max 100 Mb/s, min 15 Mb/s",
                                    selected: !1
                                }, {
                                    value: "1",
                                    title: "\u015awiat\u0142ow\xf3d do 1 Gb/s",
                                    description: "Pobieranie danych: max 1 Gb/s, min 200 Mb/s <br />Wysy\u0142anie danych: max 300 Mb/s, min 20 Mb/s",
                                    selected: !0
                                }]
                            }, {
                                type: "data",
                                title: "additionalData",
                                items: [{
                                    title: "Smart&nbsp;Wi&#8288;-&#8288;Fi&nbsp;Modem FunBox 3.0 ",
                                    action: {
                                        id: "Smart_Wi_Fi_Modem_FunBox_3_0",
                                        text: "Smart Wi-Fi Modem FunBox 3.0",
                                        title: "Smart Wi-Fi Modem FunBox 3.0",
                                        action: "https://www.orange.pl/view/modemy-dekodery-Orange#modemy",
                                        externalTab: !0,
                                        type: "LINK",
                                        variant: "ON_LIGHT_BACKGROUND"
                                    },
                                    content: [{
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }, {
                                        type: "textIcon",
                                        content: {
                                            icon: "CheckMark2",
                                            text: "w cenie"
                                        }
                                    }]
                                }, {
                                    title: "Smart Wi-Fi Box",
                                    action: {
                                        id: "Smart_Wi_Fi_Box",
                                        text: "Smart Wi-Fi Box",
                                        title: "Smart Wi-Fi Box",
                                        action: "https://www.orange.pl/view/modemy-dekodery-Orange#wifi-extender",
                                        externalTab: !0,
                                        type: "LINK",
                                        variant: "ON_LIGHT_BACKGROUND"
                                    },
                                    content: [{
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }, {
                                        type: "text",
                                        content: {
                                            text: "9,99 z\u0142/mies."
                                        }
                                    }]
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Abonament kom\xf3rkowy",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: 10 GB"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: 10 GB"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu <br/>Internet: bez limitu GB"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu<br/>Internet: bez limitu GB"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "Rozmowy do sieci\nkom\xf3rkowych i stacjonarnych w\nPolsce oraz w roamingu w UE",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "SMS/MMS w Polsce oraz w roamingu UE",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "Internet w telefonie",
                                content: [{
                                    type: "text",
                                    content: {
                                        text: "10 GB (w tym 5,83 GB w UE)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 GB (w tym 5,83 GB w UE)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu GB<br/>20 GB z pe\u0142n\u0105 pr\u0119dko\u015bci\u0105, w tym 6,88 GB w UE, p\xf3\u017aniej ograniczenie pr\u0119dko\u015bci do 1 Mb/s"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu GB<br/>40 GB z pe\u0142n\u0105 pr\u0119dko\u015bci\u0105, w tym 9,00 GB \nw UE, p\xf3\u017aniej ograniczenie pr\u0119dko\u015bci \ndo 1 Mb/s"
                                    }
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Telewizja",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "109 kana\u0142\xf3w <br/>(w tym 63 HD i 2 w 4K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "174\xa0kana\u0142y <br/>(w\xa0tym 111\xa0HD i\xa03\xa0w\xa04K)"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "189\xa0kana\u0142\xf3w <br/>(w\xa0tym 126\xa0HD i\xa03\xa0w\xa04K)"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "Liczba kana\u0142\xf3w",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "109 kana\u0142\xf3w <br/>(w tym 64 HD i 2 w 4K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "174\xa0kana\u0142y <br/>(w\xa0tym 112\xa0HD i\xa03\xa0w\xa04K)"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "189\xa0kana\u0142\xf3w <br/>(w\xa0tym 127\xa0HD i\xa03\xa0w\xa04K)"
                                    }
                                }]
                            }, {
                                title: "Pakiet Komfortowy <br/>(43 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Polsat <br/>(14 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 10 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Eleven <br/>(2 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet Multi+ <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 5 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet HBO <br/>(3 kana\u0142y)<br/> i HBO GO",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 25 z\u0142/mies."
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet CANAL+ Prestige <br/>(10 kana\u0142\xf3w)<br/> + Mistrzowska Pi\u0142ka",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 49,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 49,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet CANAL+ Select <br/>(6 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 39,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 3 mies., <br/>p\xf3\u017aniej 39,99 z\u0142/mies. + op\u0142ata jednorazowa 1 z\u0142"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Pakiet FilmBox <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Pakiet Cinemax <br/>(2 kana\u0142y)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 15 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Pakiet Fun <br/>(5 kana\u0142\xf3w)",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "0 z\u0142 przez 1 mies., <br/>p\xf3\u017aniej 20 z\u0142/mies."
                                    }
                                }]
                            }, {
                                title: "Dekoder 4K Premium ",
                                action: {
                                    id: "Dekoder_4K_Premium",
                                    text: "Dekoder 4K Premium ",
                                    title: "Dekoder 4K Premium ",
                                    action: "https://www.orange.pl/view/modemy-dekodery-Orange#dekodery",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Multinagrywarka",
                                action: {
                                    id: "Multinagrywarka",
                                    text: "Multinagrywarka",
                                    title: "Multinagrywarka",
                                    action: " https://www.orange.pl/view/multinagrywarka",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }, {
                                    type: "textIcon",
                                    content: {
                                        icon: "CheckMark2",
                                        text: "w cenie"
                                    }
                                }]
                            }, {
                                title: "Multiroom",
                                action: {
                                    id: "Multiroom",
                                    text: "Multiroom",
                                    title: "Multiroom",
                                    action: "https://www.orange.pl/omnibook/telewizja-multiroom-podlaczenie-i-konfiguracja#",
                                    externalTab: !0,
                                    type: "LINK",
                                    variant: "ON_LIGHT_BACKGROUND"
                                },
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "10 z\u0142 miesi\u0119cznie <br/>+ op\u0142ata jednorazowa 1 z\u0142  "
                                    }
                                }]
                            }]
                        }, {
                            type: "data",
                            headers: {
                                type: "data",
                                title: "Telefon domowy",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    },
                                    hasBadge: !0
                                }, {
                                    type: "text",
                                    content: {
                                        text: "Rozmowy: bez limitu"
                                    },
                                    hasBadge: !0
                                }]
                            },
                            content: [{
                                title: "rozmowy stacjonarne krajowe i mi\u0119dzynarodowe do UE, USA i Kanady ",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }, {
                                title: "rozmowy kom\xf3rkowe do USA i Kanady ",
                                content: [{
                                    type: "icon",
                                    content: {
                                        icon: "CloseSmaller"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }, {
                                    type: "text",
                                    content: {
                                        text: "bez limitu"
                                    }
                                }]
                            }]
                        }],
                        toggleButton: {
                            openText: "Zobacz szczeg\xf3\u0142y pakiet\xf3w",
                            closeText: "Wr\xf3\u0107"
                        },
                        detailsActionTrigger: {
                            id: "COMPARATOR_CMB_BUTTON_DETAILS_OL_B2C",
                            action: "CALL_ME_BACK",
                            text: "Zam\xf3w rozmow\u0119",
                            title: "Zam\xf3w rozmow\u0119",
                            type: "BUTTON",
                            variant: "PRIMARY_ON_WHITE",
                            params: {
                                queue: "SALES_C_LOVE_GL_B2C_CALLBACK",
                                personalScenario: "ofertaLove",
                                description: "oferta Love",
                                profile: ""
                            }
                        },
                        filters: {
                            bandwidth: "1"
                        }
                    }],
                    FIX: [yt, mt, xt],
                    FIX_DEMO: [yt, mt, xt]
                },
                wt = function(t, e) {
                    return Ot[e].find((function(e) {
                        return !Object.keys(t).find((function(n) {
                            return e.filters[n.toLowerCase()] !== t[n.toLowerCase()]
                        }))
                    })) || Ot[e][0]
                };
            s.a.createElement;
            var ut = {
                    name: "1qxy31x",
                    styles: "width:20px;height:20px;flex-shrink:0;"
                },
                zt = function(t) {
                    var e = t.title,
                        n = t.infoSection,
                        i = Object(l.useTheme)(),
                        c = i.colors,
                        r = i.bp,
                        s = S().isDetailsOpened;
                    return Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({}, r.TO_DESKTOP, {
                            display: s ? "none" : void 0
                        }), "")
                    }, Object(g.b)("h2", {
                        css: Object(o.a)(Object(a.a)({
                            fontSize: 30,
                            padding: "20px 0"
                        }, r.FROM_DESKTOP, {
                            fontSize: 40,
                            paddingTop: 60,
                            paddingBottom: 20,
                            lineHeight: "42px"
                        }), "")
                    }, e), Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            display: "flex",
                            marginBottom: 20
                        }, r.FROM_DESKTOP, {
                            marginBottom: 45
                        }), "")
                    }, Object(g.b)(B.a, {
                        name: "info-icon",
                        color: c.INFO,
                        css: ut
                    }), Object(g.b)("p", {
                        css: Object(o.a)(Object(a.a)({
                            fontSize: 14,
                            fontWeight: "bold",
                            padding: "0 10px",
                            margin: 0,
                            marginTop: 2
                        }, r.FROM_TABLET, {
                            lineHeight: "16px"
                        }), "")
                    }, n)))
                };
            s.a.createElement;
            var jt = {
                    name: "fufszd",
                    styles: "margin:0 20px 30px;display:flex;"
                },
                ht = {
                    name: "qzxgwt",
                    styles: "width:12px;height:12px;"
                },
                kt = {
                    name: "2a82qu",
                    styles: "margin-left:5px;font-size:14px;"
                },
                gt = {
                    name: "1w6ncbi",
                    styles: "margin-right:5px;font-size:14px;"
                },
                ft = {
                    name: "qzxgwt",
                    styles: "width:12px;height:12px;"
                },
                Ct = {
                    name: "1ay90tn",
                    styles: "display:block;font-size:40px;text-align:center;"
                },
                Tt = {
                    name: "au3ir3",
                    styles: "display:block;font-size:12px;text-align:center;"
                },
                Mt = function(t) {
                    var e = t.content,
                        n = t.type,
                        i = t.toggleDetailsHandler,
                        c = t.filterHeaders,
                        r = Object(l.useTheme)(),
                        s = r.colors,
                        p = r.zIndex,
                        d = r.bp,
                        b = S(),
                        m = b.isInViewport,
                        y = b.detailsSelected,
                        x = b.dispatch,
                        O = b.isStaticHeaderInViewport,
                        w = Object(_.c)().isNavbarCollapsed;
                    return v("columns", n) ? Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            backgroundColor: s.WHITE,
                            zIndex: p.LAYER_2,
                            position: "sticky",
                            margin: 0,
                            top: w ? 50 : 80,
                            opacity: m || O ? 1 : 0,
                            visibility: m || O ? "visible" : "hidden",
                            transition: "visibility 0s linear ".concat(m && !O ? "0s" : ".15s", ", opacity .15s, top .15s"),
                            width: "100%"
                        }, d.FROM_TABLET, {
                            top: w ? 50 : 110
                        }), "")
                    }, Object(g.b)("div", {
                        css: Object(o.a)({
                            backgroundColor: s.WHITE,
                            fontWeight: "bold",
                            padding: "20px 0"
                        }, "")
                    }, Object(g.b)("div", {
                        css: jt
                    }, Object(g.b)("div", {
                        onClick: y > 0 ? function() {
                            return x({
                                type: "goToPrevColumn"
                            })
                        } : i,
                        role: "button",
                        title: y > 0 ? "Poprzednia oferta" : "Zamknij szczeg\xf3\u0142y",
                        css: Object(o.a)({
                            width: c ? "25%" : "33%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }, "")
                    }, Object(g.b)(B.a, {
                        name: "arrow-left",
                        css: ht,
                        color: s.BLACK
                    }), Object(g.b)("span", {
                        css: kt
                    }, !c && y > 0 && e[y - 1].title || "")), Object(g.b)("span", {
                        css: Object(o.a)({
                            display: "block",
                            width: c ? "50%" : "33%",
                            color: s.ORANGE_DARK,
                            fontSize: 14,
                            textAlign: "center"
                        }, "")
                    }, e[y].title), y < e.length - 1 && Object(g.b)("div", {
                        role: "button",
                        title: "Nast\u0119pna oferta",
                        onClick: function() {
                            return x({
                                type: "goToNextColumn"
                            })
                        },
                        css: Object(o.a)({
                            width: c ? "25%" : "33%",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "flex-end"
                        }, "")
                    }, Object(g.b)("span", {
                        css: gt
                    }, !c && e[y + 1].title || ""), Object(g.b)(B.a, {
                        name: "arrow-right",
                        css: ft,
                        color: s.BLACK
                    }))), Object(g.b)("span", {
                        css: Ct
                    }, e[y].price), Object(g.b)("span", {
                        css: Tt,
                        dangerouslySetInnerHTML: {
                            __html: e[y].priceDescription
                        }
                    }))) : null
                };
            s.a.createElement;
            var St = function(t) {
                    return t ? t.map((function(t) {
                        return {
                            id: t.headers.title,
                            title: t.headers.title,
                            content: ""
                        }
                    })) : []
                },
                vt = {
                    name: "1qktqkz",
                    styles: "font-weight:bold;width:185px;"
                },
                _t = function(t) {
                    var e, n, r, x = t.title,
                        O = t.infoSection,
                        w = t.sections,
                        u = t.header,
                        z = t.toggleButton,
                        j = t.additionalTable,
                        h = t.detailsActionTrigger,
                        k = Object(l.useTheme)(),
                        f = k.colors,
                        C = k.bp,
                        T = Object(p.a)().deviceType,
                        M = S(),
                        v = M.dispatch,
                        _ = M.isDetailsOpened,
                        E = s.a.useRef(null),
                        D = s.a.useMemo((function() {
                            return [].concat(Object(c.a)(St(w)), Object(c.a)(St(j && j.sections)))
                        }), [w, j]),
                        B = Object(m.a)({
                            single: !0,
                            elements: D
                        }),
                        I = B.handleElementClick,
                        R = B.collapseAccordion,
                        K = B.elements.find((function(t) {
                            return t.isExpanded
                        })),
                        L = K ? K.id : null,
                        A = function() {
                            v({
                                type: "toggleDetails"
                            }), _ ? R() : I(w[0].headers.title), requestAnimationFrame((function() {
                                return E.current && Object(b.a)(E.current, {
                                    block: "start",
                                    scrollMode: "if-needed",
                                    behavior: "smooth"
                                })
                            }))
                        },
                        F = s.a.useCallback((function(t) {
                            v({
                                type: "setConfigValue",
                                payload: {
                                    key: "isInViewport",
                                    value: t
                                }
                            })
                        }), [v]),
                        G = "DESKTOP" !== T && _,
                        N = "DESKTOP" === T || _,
                        H = (e = {
                            margin: "0 20px",
                            width: "100%",
                            justifyContent: "center"
                        }, Object(a.a)(e, C.FROM_TABLET, {
                            width: 464
                        }), Object(a.a)(e, C.FROM_DESKTOP, {
                            width: 380
                        }), e);
                    return Object(g.b)(s.a.Fragment, null, Object(g.b)("div", {
                        ref: E,
                        css: Object(o.a)(Object(a.a)({
                            position: "absolute",
                            top: -80
                        }, C.FROM_TABLET, {
                            top: -110
                        }), "")
                    }), Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            backgroundColor: f.STARDUST
                        }, C.FROM_DESKTOP, {
                            backgroundColor: f.WHITE
                        }), "")
                    }, Object(g.b)(y.a, {
                        css: Object(o.a)(Object(a.a)({}, C.TO_DESKTOP, {
                            marginRight: 0,
                            marginLeft: _ ? 0 : void 0
                        }), "")
                    }, Object(g.b)(d.a, {
                        onChange: F
                    }, Object(g.b)(zt, {
                        title: x,
                        infoSection: O
                    }), G && Object(g.b)(Mt, Object(i.a)({
                        toggleDetailsHandler: A
                    }, u)), N ? Object(g.b)(dt, {
                        expandedId: L,
                        handleOnClick: I,
                        header: u,
                        sections: w
                    }) : Object(g.b)(l.CustomScroll, {
                        variant: "CHROME",
                        css: Object(o.a)((n = {
                            padding: "20px 0",
                            width: "100%",
                            height: "auto",
                            ".simplebar-content": {
                                right: 20
                            },
                            ".simplebar-track.simplebar-horizontal": {
                                width: 240,
                                margin: "auto",
                                height: 2
                            }
                        }, Object(a.a)(n, C.FROM_TABLET, {
                            padding: "30px 0"
                        }), Object(a.a)(n, C.FROM_DESKTOP, {
                            marginBottom: 20
                        }), n), "")
                    }, Object(g.b)(dt, {
                        expandedId: L,
                        handleOnClick: I,
                        header: u,
                        sections: w
                    })), j && Object(g.b)(bt, {
                        expandedId: L,
                        handleOnClick: I,
                        header: j.header,
                        sections: j.sections
                    })), Object(g.b)("div", {
                        css: Object(o.a)(Object(a.a)({
                            display: "flex",
                            justifyContent: "center",
                            paddingBottom: 30,
                            marginTop: _ ? 15 : 30
                        }, C.FROM_DESKTOP, {
                            marginTop: _ ? 60 : 40
                        }), "")
                    }, _ ? Object(g.b)(s.a.Fragment, null, Object(g.b)(P.a, {
                        action: h,
                        css: H,
                        wrapperCss: H
                    }), "DESKTOP" === T && Object(g.b)(l.Button, {
                        title: "Zamknij szczeg\xf3\u0142y",
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: A,
                        css: vt
                    }, z.closeText)) : Object(g.b)(l.Button, {
                        title: "Otw\xf3rz szczeg\xf3\u0142y",
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: Object(o.a)((r = {
                            justifyContent: "center",
                            width: "100%"
                        }, Object(a.a)(r, C.ONLY_MOBILE, {
                            marginLeft: -20
                        }), Object(a.a)(r, C.FROM_TABLET, {
                            width: 255
                        }), Object(a.a)(r, C.FROM_DESKTOP, {
                            width: 380
                        }), r), ""),
                        onClick: A
                    }, z.openText)))))
                },
                Et = function() {
                    var t = S(),
                        e = t.offerType,
                        n = t.filters,
                        i = wt(n, e);
                    return Object(g.b)(_t, i)
                },
                Dt = function(t) {
                    var e = t.offerType,
                        n = void 0 === e ? "FIX" : e,
                        i = {
                            bandwidth: "300"
                        },
                        o = wt(i, n),
                        a = Array.isArray(o.header.content) ? o.header.content.length - 1 : 0;
                    return Object(g.b)(M, {
                        isDetailsOpened: !1,
                        detailsSelected: o.defaultOpened || 0,
                        columnNumber: a,
                        filters: i,
                        offerType: n
                    }, Object(g.b)(Et, null))
                }
        }
    }
]);
//# sourceMappingURL=comparator.ec88a1fe2862b49cb39d.js.map