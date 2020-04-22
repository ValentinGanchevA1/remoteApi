(window.omniJsonp = window.omniJsonp || []).push([
    [14], {
        "0TmZ": function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, "Footer", (function() {
                return $
            }));
            var a = o("zjfJ"),
                n = o("5IAQ"),
                i = o("zygG"),
                r = o("ERkP"),
                c = o.n(r),
                s = o("Kq2c"),
                l = o("I6rk"),
                b = o("RN2F"),
                O = o.n(b),
                m = o("XTXV"),
                d = o("tHt9"),
                p = o("l1C2");
            c.a.createElement;
            var u = {
                    name: "1f450dj",
                    styles: "line-height:1.5rem;padding:20px 0;"
                },
                f = {
                    name: "1n35eny",
                    styles: "display:inline-block;margin-right:0.75rem;"
                },
                j = c.a.memo((function(e) {
                    var t = e.links,
                        o = Object(s.useTheme)(),
                        i = o.colors,
                        r = o.selectors;
                    return Object(p.b)(d.a, {
                        backgroundColor: "BLACK",
                        css: u
                    }, Object(p.b)("ul", null, t.map((function(e, t) {
                        var o = e.title,
                            c = e.action;
                        return Object(p.b)("li", {
                            key: t,
                            css: f
                        }, Object(p.b)("a", {
                            href: c,
                            title: o,
                            css: Object(n.a)(Object(a.a)({
                                color: i.DOVE,
                                lineHeight: 1,
                                textDecoration: "none",
                                whiteSpace: "nowrap",
                                borderRight: "1px solid ".concat(i.DOVE),
                                paddingRight: "0.75rem",
                                fontSize: "0.75rem",
                                transition: "color .15s",
                                outline: "none",
                                "&:last-of-type": {
                                    borderRight: "none"
                                }
                            }, r.ON_FOCUS_OR_HOVER, {
                                color: i.ORANGE_LIGHT
                            }), "")
                        }, o))
                    }))))
                }));
            j.displayName = "Links";
            var g = o("cxan"),
                h = o("HbGN"),
                v = o("axPk"),
                w = o("elpc"),
                x = o("CkkL"),
                E = o("qSV3"),
                y = o("c/xm"),
                R = o("EMJ/"),
                T = {
                    "social-linkedin": x.a,
                    "social-instagram": w.a,
                    "social-youtube": y.a,
                    "social-twitter": E.a,
                    "social-facebook-1": v.a,
                    "social-number-one": R.a
                };
            c.a.createElement;
            var k = {
                    "social-linkedin": "#0077b5",
                    "social-instagram": "#ffffff",
                    "social-youtube": "#ff0000",
                    "social-twitter": "#4aa1eb",
                    "social-facebook-1": "#3b5998",
                    "social-number-one": "#f16e00"
                },
                _ = {
                    name: "1baulvz",
                    styles: "display:inline-block;"
                },
                A = {
                    name: "1baulvz",
                    styles: "display:inline-block;"
                },
                C = {
                    name: "3hcm5q",
                    styles: "position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);"
                },
                L = c.a.memo((function(e) {
                    var t, o = e.socials,
                        i = Object(h.a)(e, ["socials"]),
                        r = Object(s.useTheme)(),
                        c = r.colors,
                        l = r.zIndex,
                        b = r.selectors,
                        O = r.bp;
                    return o && 0 !== o.length ? Object(p.b)("ul", Object(g.a)({
                        css: Object(n.a)((t = {}, Object(a.a)(t, O.FROM_TABLET, {
                            marginLeft: "auto"
                        }), Object(a.a)(t, "li:nth-of-type(n + 2)", {
                            marginLeft: "0.5rem"
                        }), t), "")
                    }, i), o.map((function(e) {
                        var t, o = e.iconType,
                            i = e.action,
                            r = e.title,
                            O = T[o],
                            m = k[o];
                        return O ? "social-number-one" === o ? Object(p.b)("li", {
                            css: _,
                            key: o
                        }, Object(p.b)("a", {
                            css: Object(n.a)(Object(a.a)({
                                outline: "none",
                                svg: {
                                    transition: "color .15s"
                                }
                            }, b.ON_FOCUS_OR_HOVER, {
                                svg: {
                                    color: m
                                }
                            }), ""),
                            href: i,
                            title: r
                        }, O && Object(p.b)(O, {
                            color: "white",
                            width: 38,
                            height: 38
                        }))) : Object(p.b)("li", {
                            key: o,
                            css: A
                        }, Object(p.b)("a", {
                            css: Object(n.a)((t = {
                                outline: "none",
                                cursor: "pointer",
                                border: "2px solid white",
                                borderRadius: "50%",
                                position: "relative",
                                display: "inline-block",
                                width: 39,
                                height: 39,
                                zIndex: l.LAYER_1,
                                backgroundColor: m,
                                overflow: "hidden",
                                transition: " color 0.5s ease-in-out, border-color 0.7s ease-in-out"
                            }, Object(a.a)(t, b.ON_FOCUS_OR_HOVER, {
                                borderColor: m,
                                transition: "border-color 0.2s ease-in-out",
                                "::before": {
                                    transform: "translate(-50%, -50%) scale(0)",
                                    borderColor: m
                                },
                                svg: {
                                    color: "social-instagram" === o ? c.BLACK : c.WHITE
                                }
                            }), Object(a.a)(t, "::before", {
                                content: "''",
                                zIndex: l.UNDER_LAYER_1,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                padding: 6,
                                borderRadius: "50%",
                                backgroundColor: c.RAVEN,
                                transformOrigin: "center",
                                transform: "translate(-50%, -50%) scale(3)",
                                transition: "transform 0.4s ease-in-out"
                            }), Object(a.a)(t, "svg", {
                                transition: "color 1s"
                            }), t), ""),
                            href: i,
                            title: "Zobacz nasz profil na ".concat(r)
                        }, Object(p.b)(O, {
                            "aria-hidden": !0,
                            color: "white",
                            width: 19,
                            height: 19,
                            css: C
                        }), Object(p.b)(s.VisuallyHidden, null, "Nasz profil na ", r))) : null
                    }))) : null
                }));
            L.displayName = "Social";
            var N = o("xWEo");
            c.a.createElement;
            var z = {
                    name: "10otlen",
                    styles: "transition:color .15s;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);"
                },
                I = c.a.memo((function(e) {
                    var t, o = e.action,
                        i = e.title,
                        r = e.text,
                        c = e.description,
                        l = Object(h.a)(e, ["action", "title", "text", "description"]),
                        b = Object(s.useTheme)(),
                        O = b.colors,
                        m = b.bp,
                        d = b.zIndex,
                        u = b.selectors;
                    return Object(p.b)("a", Object(g.a)({
                        css: Object(n.a)((t = {
                            display: "flex",
                            alignItems: "center",
                            outline: "none"
                        }, Object(a.a)(t, m.FROM_TABLET, {
                            maxWidth: 300
                        }), Object(a.a)(t, u.ON_FOCUS_OR_HOVER, {
                            div: {
                                borderColor: O.ORANGE_LIGHT,
                                transition: "border-color 0.2s ease-in-out"
                            },
                            "div::before": {
                                transform: "translate(-50%, -50%) scale(0)",
                                borderColor: O.ORANGE_LIGHT
                            }
                        }), t), ""),
                        href: o,
                        title: i || void 0
                    }, l), Object(p.b)("div", {
                        css: Object(n.a)({
                            width: 39,
                            height: 39,
                            position: "relative",
                            border: "2px solid #fff",
                            borderRadius: "50%",
                            zIndex: d.LAYER_1,
                            marginRight: "0.75rem",
                            backgroundColor: O.ORANGE_LIGHT,
                            overflow: "hidden",
                            transition: " color 0.5s ease-in-out, border-color 0.7s ease-in-out",
                            "::before": {
                                content: "''",
                                zIndex: d.UNDER_LAYER_1,
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                padding: 6,
                                borderRadius: "50%",
                                backgroundColor: O.RAVEN,
                                transformOrigin: "center",
                                transform: "translate(-50%, -50%) scale(3)",
                                transition: "transform 0.4s ease-in-out"
                            }
                        }, "")
                    }, Object(p.b)(N.a, {
                        name: "social-simple-mail",
                        color: O.WHITE,
                        width: 19,
                        height: 19,
                        css: z
                    })), Object(p.b)("div", null, Object(p.b)("h5", {
                        css: Object(n.a)({
                            marginBottom: 4,
                            color: O.WHITE,
                            fontWeight: 600
                        }, "")
                    }, r), Object(p.b)("p", {
                        css: Object(n.a)({
                            margin: 0,
                            color: O.DOVE,
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            transition: "color .15s"
                        }, "")
                    }, c)))
                }));
            I.displayName = "Newsletter";
            var S = o("LsVC"),
                B = o("y6sE");
            c.a.createElement;
            var D = {
                    name: "11p2lme",
                    styles: "white-space:nowrap;padding-top:0.25rem;font-size:0.75rem;"
                },
                F = c.a.memo((function(e) {
                    var t = e.nodes,
                        o = e.title,
                        i = t.length > 3,
                        r = Object(s.useTheme)(),
                        c = r.bp,
                        l = r.colors,
                        b = r.selectors,
                        O = Object(B.b)().market;
                    return Object(p.b)("div", {
                        css: Object(n.a)([Object(a.a)({
                            "&:not(:first-of-type)&:not(:nth-of-type(2))": {
                                marginTop: 30
                            }
                        }, c.FROM_TABLET, {
                            marginTop: 0,
                            "&:not(:first-of-type)&:not(:nth-of-type(2))": {
                                marginTop: 0
                            }
                        }), i ? Object(a.a)({
                            flex: "none",
                            width: "100%"
                        }, c.FROM_TABLET, {
                            flex: 2
                        }) : Object(a.a)({
                            flex: "1 0 49%"
                        }, c.FROM_TABLET, {
                            flex: "1 0 auto"
                        })], "")
                    }, Object(p.b)("h5", {
                        css: Object(n.a)({
                            color: l.WHITE,
                            whiteSpace: "nowrap",
                            height: 14,
                            fontWeight: 600
                        }, "")
                    }, o), Object(p.b)("ul", {
                        css: Object(n.a)({
                            display: "block",
                            width: "100%",
                            columnCount: Math.ceil(t.length / 3),
                            columnGap: i ? 0 : void 0
                        }, "")
                    }, t.map((function(e) {
                        return Object(p.b)("li", {
                            key: e.title,
                            css: D
                        }, Object(p.b)("a", {
                            href: e.action,
                            id: Object(S.a)("Menubottom_".concat(O), o, e.title),
                            css: Object(n.a)(Object(a.a)({
                                color: l.DOVE,
                                transition: "color .15s",
                                outline: "none"
                            }, b.ON_FOCUS_OR_HOVER, {
                                color: l.ORANGE_LIGHT
                            }), "")
                        }, e.title))
                    }))))
                }));
            F.displayName = "Section";
            c.a.createElement;
            var H = c.a.memo((function(e) {
                var t = e.sections,
                    o = Object(h.a)(e, ["sections"]),
                    i = Object(s.useTheme)().bp,
                    r = [];
                return t.forEach((function(e) {
                    for (var t = 0; t < e.nodes.length; t += 3) r.push({
                        title: 0 === t ? e.title : "",
                        nodes: e.nodes.slice(t, t + 3)
                    })
                })), Object(p.b)("div", Object(g.a)({
                    css: Object(n.a)(Object(a.a)({
                        display: "flex",
                        flexWrap: "wrap"
                    }, i.FROM_TABLET, {
                        flexWrap: "nowrap"
                    }), "")
                }, o), r.map((function(e, t) {
                    return Object(p.b)(F, {
                        key: "section_".concat(t),
                        title: e.title,
                        nodes: e.nodes
                    })
                })))
            }));
            H.displayName = "Sections";
            c.a.createElement;
            var M = c.a.memo((function() {
                var e = Object(s.useTheme)(),
                    t = e.bp,
                    o = e.colors;
                return Object(p.b)("div", {
                    css: Object(n.a)(Object(a.a)({
                        display: "flex",
                        color: o.DOVE,
                        fontSize: "0.75rem",
                        marginTop: 30
                    }, t.FROM_DESKTOP, {
                        marginTop: 0,
                        marginLeft: "auto",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        whiteSpace: "nowrap"
                    }), "")
                }, "\xa9 ", (new Date).getFullYear(), " Orange Polska S.A. Wszystkie prawa zastrze\u017cone.")
            }));
            M.displayName = "Copy";
            var V = o("VWeK"),
                G = o("4w+k");
            c.a.createElement;
            var W = function(e, t, o, a) {
                    if (e) return Object(n.a)([{
                        backgroundImage: "url(".concat(t, ");")
                    }, o && {
                        "@media(-o-min-device-pixel-ratio: 5/4), (-webkit-min-device-pixel-ratio: 1.25), (min-device-pixel-ratio: 1.25), (min-resolution: 1.25dppx)": {
                            backgroundImage: "url(".concat(o, ")")
                        }
                    }, a && {
                        "@media(-o-min-device-pixel-ratio: 9/4), (-webkit-min-device-pixel-ratio: 2.25), (min-device-pixel-ratio: 2.25), (min-resolution: 2.25dppx)": {
                            backgroundImage: "url(".concat(a, ")")
                        }
                    }], "")
                },
                K = {
                    name: "i3pbo",
                    styles: "margin-bottom:24px;"
                },
                Y = c.a.memo(c.a.forwardRef((function(e, t) {
                    var o = Object(s.useTheme)(),
                        r = o.bp,
                        l = o.colors,
                        b = o.zIndex,
                        O = c.a.useState(!1),
                        u = Object(i.a)(O, 2),
                        f = u[0],
                        j = u[1],
                        h = c.a.useCallback((function(e) {
                            e && j(!0)
                        }), []);
                    return Object(p.b)(m.a, {
                        onChange: h,
                        rootMargin: "500px"
                    }, Object(p.b)("div", Object(g.a)({
                        css: Object(n.a)({
                            position: "fixed",
                            left: 0,
                            right: 0,
                            bottom: 50,
                            zIndex: b.UNDER_LAYER_1
                        }, ""),
                        ref: t
                    }, e), Object(p.b)(d.a, {
                        backgroundColor: "WHITE",
                        css: Object(n.a)(Object(a.a)({
                            flexDirection: "column"
                        }, r.FROM_TABLET, {
                            display: "flex",
                            flexDirection: "row"
                        }), "")
                    }, Object(p.b)("div", {
                        css: Object(n.a)(Object(a.a)({
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }, r.FROM_TABLET, {
                            h2: {
                                fontSize: "2rem"
                            }
                        }), "")
                    }, Object(p.b)("h2", {
                        css: Object(n.a)({
                            color: l.ORANGE_DARK
                        }, "")
                    }, "Pobierz aplikacj\u0119", " ", Object(p.b)(s.Break, {
                        mobile: !0,
                        tablet: !0,
                        desktop: !1
                    }), "M\xf3j Orange"), Object(p.b)("h2", {
                        css: K
                    }, "i miej wszystko pod r\u0119k\u0105"), Object(p.b)("div", {
                        css: Object(n.a)(Object(a.a)({
                            display: "flex",
                            justifyContent: "space-around"
                        }, r.FROM_TABLET, {
                            justifyContent: "flex-start"
                        }), "")
                    }, Object(p.b)("a", {
                        href: "https://itunes.apple.com/pl/app/moj-orange/id588720962",
                        title: "Otwarcie w nowej karcie: Pobiera aplikacj\u0119 M\xf3j Orange z App Store",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        css: Object(n.a)({
                            outlineColor: l.ORANGE_DARK
                        }, "")
                    }, Object(p.b)(V.a, {
                        width: 120,
                        height: 40,
                        css: Object(n.a)(Object(a.a)({}, r.FROM_TABLET, {
                            marginRight: "1.5rem"
                        }), "")
                    })), Object(p.b)("a", {
                        href: "https://play.google.com/store/apps/details?id=pl.orange.mojeorange",
                        title: "Otwarcie w nowej karcie: Pobiera aplikacj\u0119 M\xf3j Orange z Google Play",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        css: Object(n.a)({
                            outlineColor: l.ORANGE_DARK
                        }, "")
                    }, Object(p.b)(G.a, {
                        width: 130,
                        height: 40
                    })))), Object(p.b)("div", {
                        css: Object(n.a)(Object(a.a)({
                            flex: "1",
                            overflow: "hidden",
                            minHeight: "12rem",
                            position: "relative",
                            "&::before": {
                                content: "''",
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translate(-50%, 50%)",
                                backgroundColor: l.ORANGE_DARK,
                                width: "16.5rem",
                                height: "16.5rem",
                                borderRadius: "100%"
                            },
                            "&::after": [{
                                content: "''",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundPosition: "center bottom",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "11rem auto"
                            }, W(f, "/static/images/native/app.png", "/static/images/native/app@2x.png", "/static/images/native/app@3x.png")]
                        }, r.FROM_TABLET, {
                            minHeight: "16rem",
                            "&::before": {
                                width: "27rem",
                                height: "27rem"
                            },
                            "&::after": {
                                backgroundSize: "19rem auto"
                            }
                        }), "")
                    }))))
                })));
            Y.displayName = "NativeApps";
            var P = o("KD1n"),
                U = o("5siB"),
                q = o.n(U);
            c.a.createElement;

            function J() {
                var e = Object(P.a)(["\n    0% {\n    opacity: 0;\n    transform: translateY(-10px) rotate(90deg);\n    }\n\n    35% {\n    opacity: 1;\n    transform: translateY(0) rotate(90deg);\n    }\n\n    50% {\n    opacity: 1;\n    transform: translateY(0) rotate(90deg);\n    }\n\n    65% {\n    opacity: 1;\n    transform: translateY(0) rotate(90deg);\n    }\n\n    100% {\n    opacity: 0;\n    transform: translateY(10px) rotate(90deg);\n    }\n  "]);
                return J = function() {
                    return e
                }, e
            }
            var X = {
                    name: "pimhqs",
                    styles: "max-width:1280px;margin:0 auto;padding-left:20px;"
                },
                Z = c.a.memo((function(e) {
                    var t = e.isVisible,
                        o = Object(s.useTheme)(),
                        i = o.colors,
                        r = o.selectors,
                        l = o.zIndex;
                    c.a.useEffect((function() {
                        q.a.polyfill()
                    }), []);
                    var b = c.a.useCallback((function() {
                            window.scrollBy({
                                top: window.innerHeight,
                                left: 0,
                                behavior: "smooth"
                            })
                        }), []),
                        O = Object(p.c)(J());
                    return Object(p.b)("div", {
                        css: X
                    }, Object(p.b)("div", {
                        role: "button",
                        onClick: b,
                        title: "Przewi\u0144 w d\xf3\u0142",
                        css: Object(n.a)(Object(a.a)({
                            position: "fixed",
                            display: "flex",
                            bottom: 0,
                            marginLeft: 20,
                            width: 40,
                            height: 40,
                            transform: "translateY(".concat(t ? "0%" : "100%", ") translateX(-50%)"),
                            transition: "transform .3s ease-out",
                            transformOrigin: "bottom",
                            zIndex: l.LAYER_5,
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            backgroundColor: i.BLACK,
                            color: i.WHITE
                        }, r.ON_FOCUS_OR_HOVER, {
                            color: i.ORANGE_LIGHT
                        }), "")
                    }, Object(p.b)(N.a, {
                        name: "arrow-right",
                        css: Object(n.a)({
                            width: 20,
                            height: 20,
                            opacity: 0,
                            transition: "height .3s ease-in-out",
                            transform: "rotate(90deg)",
                            animation: "".concat(O, " 1.4s infinite"),
                            animationDelay: "3s"
                        }, "")
                    })))
                }));
            Z.displayName = "ScrollDownArrow";
            c.a.createElement;
            var Q = {
                    name: "1ycwb8q",
                    styles: "flex:2 0 auto;"
                },
                $ = function(e) {
                    var t = e.data,
                        o = t.links,
                        r = t.newsletter,
                        b = t.socials,
                        u = t.sections,
                        f = Object(s.useTheme)().bp,
                        g = Object(l.a)(),
                        h = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = c.a.useState(!1),
                                o = Object(i.a)(t, 2),
                                a = o[0],
                                n = o[1],
                                r = c.a.useRef(void 0),
                                s = c.a.useCallback((function() {
                                    return window.setTimeout((function() {
                                        n(!0)
                                    }), e)
                                }), [e]);
                            return c.a.useEffect((function() {
                                var e = function() {
                                    window.clearTimeout(r.current), n(!1), r.current = s()
                                };
                                return r.current || (r.current = s()), window.addEventListener("scroll", e, !!O.a.hasSupport && {
                                        capture: !1,
                                        passive: !0
                                    }),
                                    function() {
                                        window.clearTimeout(r.current), window.removeEventListener("scroll", e)
                                    }
                            }), [s]), a
                        }(4e3),
                        v = Object(m.b)(),
                        w = Object(i.a)(v, 2),
                        x = w[0],
                        E = w[1];
                    return Object(p.b)("footer", {
                        ref: x,
                        css: Object(n.a)(Object(a.a)({
                            marginBottom: "27rem"
                        }, f.FROM_TABLET, {
                            marginBottom: 0
                        }), "")
                    }, Object(p.b)(d.a, {
                        backgroundColor: "BLACK",
                        css: Object(n.a)(Object(a.a)({
                            display: "flex",
                            flexDirection: "column",
                            padding: "30px 0"
                        }, f.FROM_DESKTOP, {
                            flexDirection: "row",
                            padding: "40px 0"
                        }), "")
                    }, Object(p.b)(H, {
                        sections: u,
                        css: Q
                    }), Object(p.b)(M, null)), Object(p.b)(d.a, {
                        backgroundColor: "RAVEN",
                        css: Object(n.a)(Object(a.a)({
                            display: "flex",
                            flexDirection: "column",
                            padding: "20px 0",
                            justifyContent: "space-between"
                        }, f.FROM_TABLET, {
                            flexDirection: "row",
                            alignItems: "center"
                        }), "")
                    }, r && Object(p.b)(I, {
                        action: r.action,
                        title: r.title,
                        text: r.text,
                        description: r.description,
                        css: Object(n.a)(Object(a.a)({
                            marginBottom: "1.5rem"
                        }, f.FROM_TABLET, {
                            marginBottom: 0
                        }), "")
                    }), b && Object(p.b)(L, {
                        socials: b
                    })), !g && Object(p.b)(Z, {
                        isVisible: h && !E
                    }), Object(p.b)(j, {
                        links: o
                    }), g && Object(p.b)(Y, null))
                };
            $.displayName = "Footer"
        }
    }
]);
//# sourceMappingURL=footer.200b65be1937f60f1fbb.js.map