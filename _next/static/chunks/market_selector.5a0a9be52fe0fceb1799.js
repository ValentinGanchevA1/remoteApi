(window.omniJsonp = window.omniJsonp || []).push([
    [29], {
        "5s2p": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 31536e7,
                    r = new Date;
                r.setTime(r.getTime() + n), document.cookie = "".concat(e, "=").concat(t, ";expires=").concat(r.toUTCString(), ";")
            }
        },
        "F+2Q": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "MarketSelector", (function() {
                return B
            }));
            var r = n("zjfJ"),
                o = n("5IAQ"),
                i = n("zygG"),
                a = n("ERkP"),
                c = n.n(a),
                s = n("7xIC"),
                l = n.n(s),
                f = n("Kq2c"),
                p = n("obcW"),
                u = n("yy35"),
                b = n("5s2p"),
                h = n("tHt9"),
                O = n("cxan"),
                d = n("HbGN"),
                v = n("I6rk"),
                j = n("xWEo"),
                m = n("f4ym"),
                g = n("l1C2"),
                w = (c.a.createElement, c.a.memo((function(e) {
                    var t, n, a, s = e.text,
                        l = (e.market, e.href),
                        p = void 0 === l ? "" : l,
                        u = e.icon,
                        b = Object(d.a)(e, ["text", "market", "href", "icon"]),
                        h = Object(f.useTheme)(),
                        w = h.bp,
                        y = h.colors,
                        B = h.zIndex,
                        _ = h.selectors,
                        E = Object(v.a)(),
                        x = c.a.useState(!1),
                        k = Object(i.a)(x, 2),
                        T = k[0],
                        C = k[1];
                    return c.a.useEffect((function() {
                        C(!0)
                    }), []), T ? Object(g.b)(m.a, {
                        href: p,
                        passHref: !0
                    }, Object(g.b)("div", Object(O.a)({
                        css: Object(o.a)((t = {
                            whiteSpace: "pre-line",
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            outline: "none",
                            width: "100%",
                            padding: "20px 0px 20px 20px",
                            ":not(:last-of-type)": {
                                borderBottom: "1px solid \n              ".concat(y.CHROME)
                            }
                        }, Object(r.a)(t, _.MOBILE_LANDSCAPE, {
                            padding: "10px 0px 10px 10px"
                        }), Object(r.a)(t, w.FROM_TABLET, {
                            width: 400
                        }), t), ""),
                        role: "button"
                    }, b), Object(g.b)("div", {
                        css: Object(o.a)((n = {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "auto",
                            width: "100%",
                            zIndex: B.LAYER_1
                        }, Object(r.a)(n, w.FROM_TABLET, {
                            marginTop: 0,
                            marginBottom: 16
                        }), Object(r.a)(n, w.FROM_DESKTOP, {
                            margin: 0
                        }), n), "")
                    }, u && !E && Object(g.b)(j.a, {
                        name: u,
                        color: y.BLACK,
                        css: Object(o.a)(Object(r.a)({
                            width: 45,
                            height: 45,
                            display: "block",
                            flexShrink: 0,
                            transition: "color .15s, transform 0.15s"
                        }, _.MOBILE_LANDSCAPE, {
                            display: "none"
                        }), "")
                    }), Object(g.b)("span", {
                        css: Object(o.a)((a = {
                            fontSize: 16,
                            flexBasis: 100,
                            fontWeight: "bold",
                            transition: "color .15s",
                            whiteSpace: "nowrap"
                        }, Object(r.a)(a, w.FROM_TABLET, {
                            fontSize: 18
                        }), Object(r.a)(a, w.FROM_DESKTOP, {
                            flexBasis: "auto",
                            flex: 1,
                            paddingLeft: 20
                        }), a), "")
                    }, s), Object(g.b)(j.a, {
                        name: "arrow-right",
                        width: 22,
                        height: 22,
                        css: Object(o.a)(Object(r.a)({
                            transition: "color .15s, transform 0.15s"
                        }, w.FROM_TABLET, {
                            color: y.SILVER,
                            marginRight: 15
                        }), "")
                    })))) : null
                }))),
                y = n("LsVC"),
                B = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.logo,
                        n = e.isVisible,
                        a = c.a.useState(n),
                        s = Object(i.a)(a, 2),
                        O = s[0],
                        d = s[1],
                        v = Object(f.useTheme)(),
                        j = v.bp,
                        m = v.zIndex,
                        B = v.colors,
                        _ = v.selectors;
                    c.a.useEffect((function() {
                        if (O) {
                            var e = function e() {
                                window.scrollY > 300 && O && (d(!1), Object(y.i)({
                                    event: "B2B_rozbiegowka_test_B_no_choice",
                                    visitorType: "new"
                                }), window.removeEventListener("scroll", e))
                            };
                            return window.addEventListener("scroll", e),
                                function() {
                                    return window.removeEventListener("scroll", e)
                                }
                        }
                    }), [O]);
                    var E = c.a.useCallback((function() {
                            Object(b.a)("opl_market", "B2C"), d(!1), Object(y.i)({
                                event: "B2B_rozbiegowka_test_B_wybor_B2C",
                                visitorType: "new"
                            })
                        }), [d]),
                        x = function() {
                            Object(b.a)("opl_market", "B2B_SOHO"), Object(y.i)({
                                event: "B2B_rozbiegowka_test_B_wybor_B2B",
                                visitorType: "new"
                            }), l.a.events.on("routeChangeComplete", (function() {
                                return d(!1)
                            }))
                        };
                    c.a.useEffect((function() {
                        var e = Object(u.a)("opl_market", document.cookie);
                        if (!n && e) switch (e) {
                            case "B2C":
                                Object(y.i)({
                                    event: "B2B_rozbiegowka_test_B",
                                    visitorType: "returning_B2C"
                                });
                                break;
                            case "B2B_SOHO":
                                Object(y.i)({
                                    event: "B2B_rozbiegowka_test_B",
                                    visitorType: "returning_B2B"
                                });
                                break;
                            default:
                                Object(y.i)({
                                    event: "B2B_rozbiegowka_test_B",
                                    visitorType: "returning_undefined"
                                })
                        }
                    }), [n]);
                    var k = Object(p.useTransition)(O, {
                        from: {
                            transform: "translateY(0vh)"
                        },
                        enter: {
                            transform: "translateY(0vh)"
                        },
                        leave: {
                            transform: "translateY(-100vh)"
                        }
                    });
                    return Object(g.b)(c.a.Fragment, null, k((function(e, n) {
                        var i, a, s;
                        return Object(g.b)(c.a.Fragment, null, n && Object(g.b)(p.animated.div, {
                            css: Object(o.a)({
                                left: 0,
                                top: 0,
                                height: "100%",
                                width: "100%",
                                paddingTop: 20,
                                position: "fixed",
                                zIndex: m.LAYER_5,
                                backgroundColor: B.WHITE
                            }, ""),
                            style: e
                        }, Object(g.b)(h.a, {
                            css: Object(o.a)((i = {
                                position: "relative",
                                display: "flex",
                                justifyContent: "flex-start",
                                margin: "0px 20px",
                                alignItems: "center",
                                flexDirection: "column",
                                minHeight: "60vh",
                                maxHeight: "850px"
                            }, Object(r.a)(i, _.MOBILE_LANDSCAPE, {
                                maxHeight: "calc(100vh - 20px)"
                            }), Object(r.a)(i, j.FROM_TABLET, {
                                height: "80vw"
                            }), Object(r.a)(i, j.FROM_DESKTOP, {
                                justifyContent: "center",
                                flexDirection: "row"
                            }), i), "")
                        }, Object(g.b)("div", {
                            css: Object(o.a)(Object(r.a)({
                                overflowY: "hidden",
                                overflowX: "hidden",
                                paddingTop: 10,
                                justifyContent: "flex-start",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column"
                            }, j.FROM_TABLET, {
                                height: "calc(100% - 70px)",
                                justifyContent: "center",
                                flexBasis: "50%"
                            }), "")
                        }, Object(g.b)("img", {
                            src: t.data.big,
                            css: Object(o.a)((a = {
                                height: 50,
                                width: 50,
                                marginBottom: 50
                            }, Object(r.a)(a, _.MOBILE_LANDSCAPE, {
                                marginBottom: 15
                            }), Object(r.a)(a, j.FROM_DESKTOP, {
                                height: 70,
                                width: 70,
                                position: "absolute",
                                top: 0,
                                left: 0
                            }), a), ""),
                            alt: "Orange"
                        }), Object(g.b)("h1", {
                            css: Object(o.a)(Object(r.a)({
                                color: B.ORANGE_LIGHT,
                                fontSize: 30,
                                fontWeight: "bold"
                            }, j.FROM_TABLET, {
                                fontSize: 60
                            }), "")
                        }, "Witaj w Orange"), Object(g.b)("p", {
                            css: Object(o.a)((s = {
                                color: B.BLACK,
                                fontSize: 16,
                                fontWeight: "bold",
                                marginBottom: 20
                            }, Object(r.a)(s, j.FROM_TABLET, {
                                fontSize: 24,
                                marginBottom: 39
                            }), Object(r.a)(s, _.MOBILE_LANDSCAPE, {
                                marginBottom: 15
                            }), s), "")
                        }, "Wybierz odpowiedni\u0105 kategori\u0119 dla siebie:")), Object(g.b)(f.ArrowSeparator, {
                            orientation: "VERTICAL",
                            css: Object(o.a)(Object(r.a)({
                                display: "none"
                            }, j.FROM_DESKTOP, {
                                margin: "0 15px",
                                display: "block",
                                alignSelf: "center",
                                height: "calc(100%  - 400px)"
                            }), "")
                        }), Object(g.b)("div", {
                            css: Object(o.a)(Object(r.a)({
                                overflowY: "auto",
                                overflowX: "hidden",
                                justifyContent: "center",
                                width: "100%",
                                alignItems: "center",
                                flexDirection: "column",
                                display: "flex"
                            }, j.FROM_TABLET, {
                                height: "100%",
                                flexBasis: "50%"
                            }), "")
                        }, Object(g.b)(w, {
                            market: "B2C",
                            text: "Klient indywidualny",
                            css: Object(o.a)({
                                ":hover svg": {
                                    color: B.ORANGE_DARK
                                }
                            }, ""),
                            onClick: E,
                            icon: "person"
                        }), Object(g.b)(w, {
                            market: "B2B_SOHO",
                            text: "Firma",
                            css: Object(o.a)({
                                ":hover svg": {
                                    color: B.ORANGE_DARK
                                }
                            }, ""),
                            onClick: x,
                            href: "/male-srednie-firmy",
                            icon: "person-business"
                        })))))
                    })))
                })));
            B.displayName = "MarketSelector"
        },
        KeDb: function(e, t, n) {
            "use strict";
            var r = n("zQIG"),
                o = n("8mBC"),
                i = n("cMav"),
                a = n("pSQP"),
                c = n("I/kN"),
                s = n("Y3ZS"),
                l = n("pONU");
            t.__esModule = !0, t.default = void 0;
            var f, p = l(n("ERkP")),
                u = n("cRaD"),
                b = n("fvxO"),
                h = s(n("7xIC"));

            function O(e) {
                return e && "object" === typeof e ? (0, b.formatWithValidation)(e) : e
            }
            var d = new Map,
                v = window.IntersectionObserver,
                j = {};

            function m() {
                return f || (v ? f = new v((function(e) {
                    e.forEach((function(e) {
                        if (d.has(e.target)) {
                            var t = d.get(e.target);
                            (e.isIntersecting || e.intersectionRatio > 0) && (f.unobserve(e.target), d.delete(e.target), t())
                        }
                    }))
                }), {
                    rootMargin: "200px"
                }) : void 0)
            }
            var g = function(e) {
                function t(e) {
                    var n;
                    return r(this, t), (n = i(this, a(t).call(this, e))).p = void 0, n.cleanUpListeners = function() {}, n.formatUrls = function(e) {
                        var t = null,
                            n = null,
                            r = null;
                        return function(o, i) {
                            if (r && o === t && i === n) return r;
                            var a = e(o, i);
                            return t = o, n = i, r = a, a
                        }
                    }((function(e, t) {
                        return {
                            href: O(e),
                            as: t ? O(t) : t
                        }
                    })), n.linkClicked = function(e) {
                        var t = e.currentTarget,
                            r = t.nodeName,
                            o = t.target;
                        if ("A" !== r || !(o && "_self" !== o || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && 2 === e.nativeEvent.which)) {
                            var i = n.formatUrls(n.props.href, n.props.as),
                                a = i.href,
                                c = i.as;
                            if (function(e) {
                                    var t = (0, u.parse)(e, !1, !0),
                                        n = (0, u.parse)((0, b.getLocationOrigin)(), !1, !0);
                                    return !t.host || t.protocol === n.protocol && t.host === n.host
                                }(a)) {
                                var s = window.location.pathname;
                                a = (0, u.resolve)(s, a), c = c ? (0, u.resolve)(s, c) : a, e.preventDefault();
                                var l = n.props.scroll;
                                null == l && (l = c.indexOf("#") < 0), h.default[n.props.replace ? "replace" : "push"](a, c, {
                                    shallow: n.props.shallow
                                }).then((function(e) {
                                    e && l && (window.scrollTo(0, 0), document.body.focus())
                                }))
                            }
                        }
                    }, n.p = !1 !== e.prefetch, n
                }
                return c(t, e), o(t, [{
                    key: "componentWillUnmount",
                    value: function() {
                        this.cleanUpListeners()
                    }
                }, {
                    key: "getPaths",
                    value: function() {
                        var e = window.location.pathname,
                            t = this.formatUrls(this.props.href, this.props.as),
                            n = t.href,
                            r = t.as,
                            o = (0, u.resolve)(e, n);
                        return [o, r ? (0, u.resolve)(e, r) : o]
                    }
                }, {
                    key: "handleRef",
                    value: function(e) {
                        var t = this;
                        this.p && v && e && e.tagName && (this.cleanUpListeners(), j[this.getPaths().join("%")] || (this.cleanUpListeners = function(e, t) {
                            var n = m();
                            return n ? (n.observe(e), d.set(e, t), function() {
                                try {
                                    n.unobserve(e)
                                } catch (t) {
                                    console.error(t)
                                }
                                d.delete(e)
                            }) : function() {}
                        }(e, (function() {
                            t.prefetch()
                        }))))
                    }
                }, {
                    key: "prefetch",
                    value: function(e) {
                        if (this.p) {
                            var t = this.getPaths();
                            h.default.prefetch(t[0], t[1], e).catch((function(e) {
                                0
                            })), j[t.join("%")] = !0
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.children,
                            n = this.formatUrls(this.props.href, this.props.as),
                            r = n.href,
                            o = n.as;
                        "string" === typeof t && (t = p.default.createElement("a", null, t));
                        var i = p.Children.only(t),
                            a = {
                                ref: function(t) {
                                    e.handleRef(t), i && "object" === typeof i && i.ref && ("function" === typeof i.ref ? i.ref(t) : "object" === typeof i.ref && (i.ref.current = t))
                                },
                                onMouseEnter: function(t) {
                                    i.props && "function" === typeof i.props.onMouseEnter && i.props.onMouseEnter(t), e.prefetch({
                                        priority: !0
                                    })
                                },
                                onClick: function(t) {
                                    i.props && "function" === typeof i.props.onClick && i.props.onClick(t), t.defaultPrevented || e.linkClicked(t)
                                }
                            };
                        return !this.props.passHref && ("a" !== i.type || "href" in i.props) || (a.href = o || r), p.default.cloneElement(i, a)
                    }
                }]), t
            }(p.Component);
            t.default = g
        },
        f4ym: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            var r = n("zjfJ"),
                o = n("cxan"),
                i = n("HbGN"),
                a = n("ERkP"),
                c = n.n(a),
                s = n("jvFD"),
                l = n.n(s),
                f = n("y6sE"),
                p = n("l1C2");
            c.a.createElement;

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
            var b = function(e) {
                    return "/" === e ? "/" : "/[...path]"
                },
                h = function(e) {
                    if ("/" !== e) return e
                },
                O = function(e) {
                    var t = e.href,
                        n = (e.as, e.children),
                        a = e.passHref,
                        s = e.replace,
                        O = e.scroll,
                        d = e.shallow,
                        v = Object(i.a)(e, ["href", "as", "children", "passHref", "replace", "scroll", "shallow"]),
                        j = Object(f.b)().supportedPrefixes,
                        m = t.toString();
                    if (function(e, t) {
                            return "/" === e || !!t.find((function(t) {
                                return "".concat(e, "/").match("^".concat(t, "/"))
                            }))
                        }(m, j)) {
                        var g = {
                            href: b(m),
                            as: h(m)
                        };
                        return Object(p.b)(l.a, Object(o.a)({}, g, {
                            passHref: a,
                            replace: s,
                            scroll: O,
                            shallow: d
                        }, v), n)
                    }
                    return "string" === typeof t ? c.a.cloneElement(n, function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? u(Object(n), !0).forEach((function(t) {
                                Object(r.a)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        href: t
                    }, v)) : null
                }
        },
        jvFD: function(e, t, n) {
            e.exports = n("KeDb")
        }
    }
]);
//# sourceMappingURL=market_selector.5a0a9be52fe0fceb1799.js.map