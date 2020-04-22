(window.omniJsonp = window.omniJsonp || []).push([
    [30], {
        KIDJ: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "SubmenuItem", (function() {
                return ce
            }));
            var a = n("5IAQ"),
                c = n("ERkP"),
                i = n.n(c),
                o = n("nwNh"),
                r = n("t5YO"),
                s = n("Kq2c"),
                b = n("zjfJ"),
                l = n("l1C2"),
                O = (i.a.createElement, i.a.memo((function(e) {
                    var t = e.maxWidth,
                        n = e.variant,
                        c = void 0 === n ? "LEFT" : n,
                        i = e.backgroundColor,
                        o = e.children,
                        r = Object(s.useTheme)().bp;
                    return Object(l.b)("div", {
                        css: Object(a.a)(Object(b.a)({
                            backgroundColor: i,
                            margin: "LEFT" === c ? "0 auto 0 0" : "0 0 0 auto",
                            maxWidth: "calc(".concat(t, "px)")
                        }, r.FROM_LARGE_DESKTOP, {
                            maxWidth: "calc(".concat(t, "px + (100vw - 1280px)/2)")
                        }), "")
                    }, Object(l.b)("div", {
                        css: Object(a.a)({
                            margin: "LEFT" === c ? "0 0 0 auto" : "0 auto 0 0",
                            position: "relative",
                            maxWidth: t
                        }, "")
                    }, o))
                }))),
                u = n("zygG"),
                d = n("cxan");

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        Object(b.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var p = {
                    callMeBack: {
                        currentStep: null,
                        selectedOption: "IMMEDIATELY"
                    }
                },
                f = function(e, t) {
                    switch (t.type) {
                        case "setCallMeBackOption":
                            var n = j({}, e);
                            return n.callMeBack.selectedOption = t.payload, n;
                        case "setCurrentCallMeBackStep":
                            var a = j({}, e);
                            return a.callMeBack.currentStep = t.payload, a;
                        default:
                            return e
                    }
                };
            i.a.createElement;

            function h(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach((function(t) {
                        Object(b.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = i.a.createContext(null),
                v = i.a.memo((function(e) {
                    var t = Object(d.a)({}, e),
                        n = i.a.useReducer(f, g({}, p)),
                        a = Object(u.a)(n, 2),
                        c = a[0],
                        o = a[1],
                        r = i.a.useMemo((function() {
                            return g({}, c, {
                                dispatch: o
                            })
                        }), [c, o]);
                    return Object(l.b)(y.Provider, Object(d.a)({
                        value: r
                    }, t))
                })),
                T = n("fL9e"),
                E = n("xWEo");
            i.a.createElement;
            var x = {
                    name: "10l3hmu",
                    styles: "color:currentColor;width:24px;height:24px;"
                },
                A = {
                    name: "1y6e8q",
                    styles: "margin-left:30px;"
                },
                w = i.a.memo((function(e) {
                    var t, n = e.id,
                        c = e.title,
                        o = e.onClick,
                        r = e.icon,
                        O = e.isActive,
                        u = Object(s.useTheme)(),
                        d = u.colors,
                        m = u.selectors,
                        j = i.a.useCallback((function() {
                            o.setCurrentPage(n), o.slider.moveTo(1)
                        }), [n, o]),
                        p = O ? d.ORANGE_LIGHT : d.WHITE,
                        f = i.a.useCallback((function(e) {
                            "Enter" === e.key && j()
                        }), [j]);
                    return Object(l.b)("div", {
                        key: n,
                        id: n,
                        onClick: j,
                        onKeyPress: f,
                        role: "button",
                        tabIndex: 0,
                        css: Object(a.a)((t = {
                            display: "flex",
                            alignItems: "center",
                            padding: "15px 0 15px 12px",
                            cursor: "pointer",
                            color: p,
                            outline: "none"
                        }, Object(b.a)(t, m.ON_FOCUS_OR_HOVER, {
                            color: d.ORANGE_DARK
                        }), Object(b.a)(t, ":last-child", {
                            borderTop: "1px solid ".concat(d.STONE)
                        }), t), "")
                    }, r && Object(l.b)(E.a, {
                        name: r,
                        css: x
                    }), Object(l.b)("strong", {
                        css: A
                    }, c))
                })),
                z = (i.a.createElement, i.a.memo((function(e) {
                    var t, n = e.currentPage,
                        c = e.onPageChange,
                        i = e.data,
                        o = Object(s.useTheme)().bp,
                        r = null != n;
                    return Object(l.b)("div", {
                        css: Object(a.a)((t = {
                            maxWidth: 335,
                            position: "relative"
                        }, Object(b.a)(t, o.FROM_TABLET, {
                            paddingRight: 60,
                            overflowX: "hidden"
                        }), Object(b.a)(t, o.FROM_DESKTOP, {
                            marginLeft: 10
                        }), Object(b.a)(t, o.FROM_LARGE_DESKTOP, {
                            marginLeft: 30
                        }), t), "")
                    }, Object(l.b)(s.ArrowSeparator, {
                        orientation: "VERTICAL",
                        color: "DOVE",
                        backgroundColor: "BLACK",
                        css: Object(a.a)({
                            position: "absolute",
                            left: r ? "95%" : 0,
                            opacity: r ? 1 : 0,
                            transform: "translateX(".concat(r ? 0 : 150, "px)"),
                            transition: "transform .6s, opacity .6s"
                        }, "")
                    }), i.map((function(e) {
                        return Object(l.b)(w, {
                            key: e.id,
                            isActive: n === e.id,
                            id: e.id,
                            title: e.title,
                            onClick: c,
                            icon: e.iconType
                        })
                    })))
                }))),
                R = n("98v5"),
                k = n("a4CT"),
                C = n("Bit+"),
                S = (i.a.createElement, i.a.memo((function(e) {
                    var t = e.title,
                        n = Object(s.useTheme)(),
                        c = n.bp,
                        i = n.colors;
                    return Object(l.b)("p", {
                        css: Object(a.a)(Object(b.a)({
                            color: i.WHITE,
                            margin: "0 0 20px 0",
                            fontSize: 24,
                            fontWeight: "bold",
                            lineHeight: "1"
                        }, c.FROM_TABLET, {
                            fontSize: 30,
                            margin: "0 0 30px 0"
                        }), "")
                    }, t)
                })));
            i.a.createElement;
            var P = {
                    name: "uewl2b",
                    styles: "margin-bottom:20px;"
                },
                I = {
                    name: "15ulk4m",
                    styles: "font-size:16px;line-height:20px;text-decoration:none;"
                },
                D = {
                    name: "7uj3e5",
                    styles: "position:relative;top:3px;margin-left:5px;height:14px;"
                },
                L = i.a.memo((function(e) {
                    var t = e.label,
                        n = e.href;
                    return Object(l.b)("li", {
                        css: P
                    }, Object(l.b)(s.A, {
                        variant: "ON_DARK_BACKGROUND",
                        href: n,
                        css: I
                    }, t, Object(l.b)(E.a, {
                        name: "arrow-right",
                        css: D
                    })))
                }));
            L.displayName = "SingleQuestion";
            i.a.createElement;
            var F = i.a.memo((function(e) {
                var t = e.questions,
                    n = Object(s.useTheme)(),
                    c = n.bp,
                    i = n.colors;
                return Object(l.b)("ul", {
                    css: Object(a.a)(Object(b.a)({
                        color: i.WHITE,
                        marginBottom: 30
                    }, c.FROM_DESKTOP, {
                        marginBottom: 40
                    }), "")
                }, t.map((function(e) {
                    return Object(l.b)(L, {
                        key: e.id,
                        label: e.label,
                        href: e.href
                    })
                })))
            }));
            F.displayName = "Questions";
            i.a.createElement;
            var _ = {
                    name: "1h3ehkj",
                    styles: "margin:0 0 20px 0;"
                },
                N = i.a.memo((function(e) {
                    var t = e.content,
                        n = e.title,
                        c = Object(s.useTheme)().bp;
                    return Object(l.b)(i.a.Fragment, null, n && Object(l.b)(S, {
                        title: n
                    }), t.map((function(e, t) {
                        return Object(l.b)("div", {
                            key: t
                        }, Object(l.b)(F, {
                            questions: e.questions
                        }), Object(l.b)(k.a, {
                            description: e.description,
                            css: _
                        }), e.bottomAction && Object(l.b)(C.a, {
                            action: e.bottomAction,
                            css: Object(a.a)(Object(b.a)({
                                width: "100%"
                            }, c.FROM_DESKTOP, {
                                maxWidth: 190
                            }), "")
                        }))
                    })))
                }));
            N.displayName = "FAQ";
            i.a.createElement;
            var M = {
                    name: "1lt5ia9",
                    styles: "margin:0 0 30px 0;"
                },
                H = {
                    name: "10n4ejq",
                    styles: "display:block;font-size:14px;font-weight:normal;margin-top:20px;"
                },
                W = i.a.memo((function(e) {
                    var t = e.title,
                        n = e.description,
                        c = e.baseAction,
                        o = e.additionalAction,
                        r = e.titleCss,
                        O = Object(s.useTheme)(),
                        u = O.bp,
                        d = O.colors;
                    return Object(l.b)(i.a.Fragment, null, Object(l.b)("p", {
                        css: Object(a.a)([Object(b.a)({
                            color: d.WHITE,
                            fontSize: 24,
                            fontWeight: "bold",
                            margin: "0 0 20px 0",
                            lineHeight: "1"
                        }, u.FROM_TABLET, {
                            fontSize: 30
                        }), r], "")
                    }, t), Object(l.b)(k.a, {
                        description: n,
                        css: M
                    }), c && Object(l.b)(C.a, {
                        action: c,
                        css: Object(a.a)(Object(b.a)({
                            width: "100%"
                        }, u.FROM_DESKTOP, {
                            width: 190
                        }), "")
                    }), o && Object(l.b)(C.a, {
                        action: o,
                        css: H
                    }))
                }));
            W.displayName = "ActionSection";
            i.a.createElement;
            var B = {
                    name: "olpjn4",
                    styles: "margin:30px 0 20px 0;"
                },
                K = i.a.memo((function(e) {
                    var t = e.content,
                        n = e.title,
                        c = Object(s.useTheme)().bp;
                    return Object(l.b)(i.a.Fragment, null, t.map((function(e, t) {
                        return Object(l.b)(i.a.Fragment, {
                            key: t
                        }, Object(l.b)(W, {
                            title: n,
                            description: e.text,
                            baseAction: e.baseAction,
                            additionalAction: e.additionalAction
                        }), Object(l.b)(k.a, {
                            description: e.description,
                            css: B
                        }), e.bottomAction && Object(l.b)(C.a, {
                            action: e.bottomAction,
                            css: Object(a.a)(Object(b.a)({
                                width: "100%"
                            }, c.FROM_DESKTOP, {
                                minWidth: 190,
                                width: "auto"
                            }), "")
                        }))
                    })))
                }));
            K.displayName = "Action";
            i.a.createElement;
            var G = {
                    name: "1b1zfbw",
                    styles: "display:flex;flex-wrap:wrap;justify-content:space-between;"
                },
                Z = {
                    name: "olpjn4",
                    styles: "margin:30px 0 20px 0;"
                },
                V = i.a.memo((function(e) {
                    var t = e.content,
                        n = e.title,
                        c = Object(s.useTheme)().bp;
                    return Object(l.b)(i.a.Fragment, null, Object(l.b)(S, {
                        title: n
                    }), Object(l.b)("div", {
                        css: G
                    }, t.map((function(e, t) {
                        return Object(l.b)("div", {
                            key: "".concat(e.title, "-").concat(t),
                            css: Object(a.a)(Object(b.a)({
                                flexBasis: "100%"
                            }, c.FROM_DESKTOP, {
                                flexBasis: e.wide ? "100%" : "49%"
                            }), "")
                        }, Object(l.b)(W, {
                            title: e.title,
                            description: e.text,
                            baseAction: e.baseAction,
                            additionalAction: e.additionalAction,
                            titleCss: Object(b.a)({
                                fontSize: 18
                            }, c.FROM_TABLET, {
                                fontSize: 24
                            })
                        }), Object(l.b)(k.a, {
                            description: e.description,
                            css: Z
                        }), e.bottomAction && Object(l.b)(C.a, {
                            action: e.bottomAction,
                            css: Object(a.a)(Object(b.a)({
                                width: "100%"
                            }, c.FROM_DESKTOP, {
                                minWidth: 190,
                                width: "auto"
                            }), "")
                        }))
                    }))))
                }));
            V.displayName = "MultiAction";
            var q = {
                PHONE: R.a,
                ACTION: K,
                FAQ: N,
                MULTI_ACTION: V
            };
            i.a.createElement;
            var J = {
                    name: "13ad1bq",
                    styles: "display:flex;align-items:center;justify-content:center;height:50%;"
                },
                Q = {
                    name: "1faz8ao",
                    styles: "height:100%;padding-right:40px;overflow-x:hidden;"
                },
                U = i.a.memo((function(e) {
                    var t = e.data,
                        n = Object(s.useTheme)(),
                        c = n.bp,
                        o = n.colors,
                        r = Object(T.c)("HORIZONTAL"),
                        O = i.a.useState(null),
                        m = Object(u.a)(O, 2),
                        j = m[0],
                        p = m[1],
                        f = i.a.useMemo((function() {
                            var e = t.find((function(e) {
                                return e.id === j
                            }));
                            return e ? {
                                Component: q[e.tabType],
                                data: e
                            } : null
                        }), [j, t]);
                    return Object(l.b)(T.b, Object(d.a)({}, r.bind, {
                        orientation: "HORIZONTAL",
                        css: Object(a.a)(Object(b.a)({
                            paddingTop: 20
                        }, c.FROM_DESKTOP, {
                            paddingTop: 50
                        }), "")
                    }), Object(l.b)(T.a, {
                        dimension: "55%",
                        css: J
                    }, Object(l.b)("h3", {
                        css: Object(a.a)({
                            fontSize: 40,
                            lineHeight: "1.2",
                            maxWidth: 400,
                            color: o.WHITE
                        }, "")
                    }, "Jak chcia\u0142by\u015b si\u0119 skontaktowa\u0107?")), Object(l.b)(T.a, {
                        dimension: "45%",
                        css: Object(a.a)(Object(b.a)({}, c.TO_DESKTOP, {
                            marginRight: 20
                        }), "")
                    }, Object(l.b)(z, {
                        data: t,
                        currentPage: j,
                        onPageChange: {
                            setCurrentPage: p,
                            slider: r
                        }
                    })), Object(l.b)(T.a, {
                        dimension: "65%",
                        css: Object(a.a)(Object(b.a)({}, c.FROM_TABLET, {
                            paddingRight: 100
                        }), "")
                    }, Object(l.b)(s.CustomScroll, {
                        variant: "DARK",
                        css: Q
                    }, f && Object(l.b)(i.a.Fragment, null, ["TelefonicznieTabItem", "OddzwoncieTabItem"].includes(f.data.id) && Object(l.b)("p", {
                        css: Object(a.a)({
                            color: o.WHITE,
                            fontSize: 14,
                            margin: "0 0 14px 0"
                        }, "")
                    }, "W najbli\u017cszych dniach czas oczekiwania na rozmow\u0119 mo\u017ce by\u0107 d\u0142u\u017cszy ni\u017c zazwyczaj. Niestety mniejsza liczba Doradc\xf3w jest dla Was dost\u0119pna. Staramy si\u0119 sprosta\u0107 rosn\u0105cej liczbie po\u0142\u0105cze\u0144 i porozmawia\u0107 z ka\u017cdym jak najszybciej. Dzi\u0119kujemy za zrozumienie!"), Object(l.b)(f.Component, {
                        content: f.data.content,
                        title: f.data.subTitle
                    })))))
                })),
                Y = n("F6me");
            i.a.createElement;
            var X = {
                    name: "1dyaldg",
                    styles: "position:relative;padding-top:60px;padding-bottom:20px;"
                },
                $ = {
                    name: "v0jgcu",
                    styles: "position:absolute;top:0;left:0;"
                },
                ee = i.a.memo((function(e) {
                    var t = e.data,
                        n = Object(s.useTheme)().colors,
                        c = Object(T.c)("VERTICAL"),
                        o = i.a.useState(null),
                        r = Object(u.a)(o, 2),
                        b = r[0],
                        O = r[1],
                        m = i.a.useCallback((function() {
                            c.moveTo(0), O(null)
                        }), [c]),
                        j = i.a.useMemo((function() {
                            var e = t.find((function(e) {
                                return e.id === b
                            }));
                            return e ? {
                                Component: q[e.tabType],
                                data: e
                            } : null
                        }), [b, t]);
                    return Object(l.b)(T.b, Object(d.a)({}, c.bind, {
                        orientation: "VERTICAL"
                    }), Object(l.b)(T.a, null, Object(l.b)("h3", {
                        css: Object(a.a)({
                            fontSize: 24,
                            lineHeight: "1",
                            marginBottom: 15,
                            color: n.WHITE
                        }, "")
                    }, "Jak chcia\u0142by\u015b si\u0119 skontaktowa\u0107?"), Object(l.b)(z, {
                        data: t,
                        currentPage: b,
                        onPageChange: {
                            setCurrentPage: O,
                            slider: c
                        }
                    })), Object(l.b)(T.a, {
                        css: X
                    }, j && Object(l.b)(i.a.Fragment, null, Object(l.b)(Y.a, {
                        variant: "DARK",
                        isFirstStep: !1,
                        backAction: m,
                        isBorderBottom: !0,
                        isVisible: !0,
                        shouldBeAnimated: !1,
                        steps: [{
                            id: j.data.id,
                            name: j.data.title,
                            shouldBeVisible: !0,
                            isActive: !0
                        }],
                        css: $
                    }), ["TelefonicznieTabItem", "OddzwoncieTabItem"].includes(j.data.id) && Object(l.b)("p", {
                        css: Object(a.a)({
                            color: n.WHITE,
                            fontSize: 14,
                            margin: "0 0 14px 0"
                        }, "")
                    }, "W najbli\u017cszych dniach czas oczekiwania na rozmow\u0119 mo\u017ce by\u0107 d\u0142u\u017cszy ni\u017c zazwyczaj. Niestety mniejsza liczba Doradc\xf3w jest dla Was dost\u0119pna. Staramy si\u0119 sprosta\u0107 rosn\u0105cej liczbie po\u0142\u0105cze\u0144 i porozmawia\u0107 z ka\u017cdym jak najszybciej. Dzi\u0119kujemy za zrozumienie!"), j && Object(l.b)(j.Component, {
                        content: j.data.content,
                        title: j.data.subTitle
                    }))))
                })),
                te = (i.a.createElement, i.a.memo((function(e) {
                    var t = e.onClose,
                        n = Object(s.useTheme)(),
                        c = n.colors,
                        i = n.zIndex,
                        o = n.selectors,
                        r = n.bp;
                    return Object(l.b)(s.IconButton, {
                        iconName: "close-slim",
                        color: c.WHITE,
                        onClick: t,
                        title: "Zamknij kontakt",
                        css: Object(a.a)(Object(b.a)({
                            position: "absolute",
                            top: 10,
                            right: 10,
                            padding: 10,
                            zIndex: i.LAYER_4,
                            svg: Object(b.a)({}, r.FROM_TABLET, {
                                width: 20,
                                height: 20
                            })
                        }, o.ON_FOCUS_OR_HOVER, {
                            svg: {
                                color: c.ORANGE_DARK,
                                transition: "color .2s"
                            }
                        }), "")
                    })
                }))),
                ne = n("sGZ7");
            i.a.createElement;
            var ae = {
                    name: "idvfh0",
                    styles: "height:100%;position:absolute;width:100%;top:0;right:100%;"
                },
                ce = i.a.memo((function(e) {
                    var t = e.data,
                        n = Object(s.useTheme)().colors,
                        c = Object(r.a)(),
                        b = Object(ne.c)(),
                        u = b.isNavbarCollapsed,
                        d = b.dispatch,
                        m = c.width >= 768,
                        j = c.width >= 1240 ? 1025 : 892,
                        p = i.a.useCallback((function() {
                            d({
                                type: "closeSubmenu"
                            })
                        }), [d]),
                        f = i.a.useMemo((function() {
                            var e = c.height;
                            return e = u ? e - 70 : e - 130, m && (e += 20), e
                        }), [m, u, c.height]);
                    return t.elements ? Object(l.b)(v, null, Object(l.b)(o.a, {
                        enabled: !m
                    }, Object(l.b)(O, {
                        maxWidth: j,
                        variant: "RIGHT",
                        backgroundColor: n.BLACK
                    }, Object(l.b)("div", {
                        css: Object(a.a)({
                            height: f,
                            padding: 20
                        }, "")
                    }, Object(l.b)(te, {
                        onClose: p
                    }), m ? Object(l.b)(U, {
                        data: t.elements
                    }) : Object(l.b)(ee, {
                        data: t.elements
                    })), Object(l.b)("div", {
                        role: "button",
                        onClick: p,
                        "aria-label": "Zamknij kontakt",
                        css: ae
                    })))) : null
                }))
        },
        fL9e: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return l
            })), n.d(t, "a", (function() {
                return O
            })), n.d(t, "c", (function() {
                return d
            }));
            var a = n("cxan"),
                c = n("5IAQ"),
                i = n("HbGN"),
                o = n("ERkP"),
                r = n.n(o),
                s = n("l1C2");
            r.a.createElement;
            var b = {
                    name: "ogoe9v",
                    styles: "width:100%;height:100%;overflow:hidden;"
                },
                l = r.a.memo(r.a.forwardRef((function(e, t) {
                    var n = e.children,
                        o = e.setChildrenRefs,
                        l = e.orientation,
                        O = void 0 === l ? "HORIZONTAL" : l,
                        u = e.style,
                        d = Object(i.a)(e, ["children", "setChildrenRefs", "orientation", "style"]),
                        m = r.a.useRef([]);
                    return r.a.useEffect((function() {
                        o(m.current)
                    }), [o, n]), Object(s.b)("div", {
                        css: b
                    }, Object(s.b)("div", Object(a.a)({
                        ref: t,
                        style: u,
                        css: Object(c.a)({
                            width: "100%",
                            height: "100%",
                            padding: 0,
                            transition: "transform .3s",
                            display: "inline-flex",
                            flexDirection: "HORIZONTAL" === O ? "row" : "column"
                        }, "")
                    }, d), r.a.Children.map(n, (function(e, t) {
                        return e && r.a.cloneElement(e, {
                            ref: function(e) {
                                m.current[t] = e
                            }
                        })
                    }))))
                }))),
                O = (r.a.createElement, r.a.memo(r.a.forwardRef((function(e, t) {
                    var n = e.dimension,
                        o = void 0 === n ? "100%" : n,
                        r = e.children,
                        b = Object(i.a)(e, ["dimension", "children"]);
                    return Object(s.b)("section", Object(a.a)({
                        role: "region",
                        ref: t,
                        css: Object(c.a)({
                            overflow: "auto",
                            height: "auto" === o ? "auto" : "100%",
                            flexShrink: 0,
                            flexBasis: o
                        }, "")
                    }, b), r)
                })))),
                u = n("zygG"),
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "HORIZONTAL",
                        t = r.a.useRef(null),
                        n = r.a.useRef([]),
                        a = r.a.useState(0),
                        c = Object(u.a)(a, 2),
                        i = c[0],
                        o = c[1],
                        s = r.a.useState(0),
                        b = Object(u.a)(s, 2),
                        l = b[0],
                        O = b[1];
                    r.a.useEffect((function() {
                        t.current && o("HORIZONTAL" === e ? t.current.offsetWidth : t.current.offsetHeight)
                    }), [e]);
                    var d = r.a.useCallback((function(t) {
                        O("HORIZONTAL" === e ? n.current[t].offsetLeft - n.current[0].offsetLeft : n.current[t].offsetTop - n.current[0].offsetTop)
                    }), [e]);
                    return r.a.useMemo((function() {
                        return {
                            bind: {
                                ref: t,
                                setChildrenRefs: function(e) {
                                    n.current = e
                                },
                                style: {
                                    transform: "HORIZONTAL" === e ? "translateX(-".concat(l, "px)") : "translateY(-".concat(l, "px)")
                                }
                            },
                            containerDimension: i,
                            moveTo: d,
                            childrenRefs: n
                        }
                    }), [e, l, i, d])
                }
        }
    }
]);
//# sourceMappingURL=header.contact.8b5615abb8867c9f057b.js.map