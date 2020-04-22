(window.omniJsonp = window.omniJsonp || []).push([
    [51], {
        "x/IZ": function(t, e, i) {
            "use strict";
            i.r(e), i.d(e, "VideoBanner", (function() {
                return I
            }));
            var n = i("cxan"),
                o = i("zygG"),
                a = i("ERkP"),
                c = i.n(a),
                r = i("XTXV"),
                s = i("azwC"),
                b = i("5zEb"),
                d = i("I6rk"),
                u = i("zjfJ"),
                l = i("5IAQ"),
                O = i("ysqo"),
                j = i.n(O),
                p = i("Kq2c"),
                f = i("v2bw"),
                g = i("l1C2"),
                h = (c.a.createElement, function(t) {
                    var e = t.src,
                        i = t.height,
                        n = t.isLoaded,
                        o = t.isActive,
                        a = t.onVideoLoaded,
                        r = Object(f.b)().index,
                        s = Object(p.useTheme)().bp,
                        b = c.a.useRef(null);
                    return c.a.useEffect((function() {
                        b.current && (b.current.muted = !0)
                    }), []), Object(g.b)(c.a.Fragment, null, 0 === r && e && Object(g.b)(j.a, null, Object(g.b)("link", {
                        rel: "preload",
                        href: e,
                        as: "video",
                        type: "video/mp4"
                    })), Object(g.b)("div", {
                        css: Object(l.a)(Object(u.a)({
                            height: 0,
                            paddingTop: "100%",
                            overflow: "hidden",
                            position: "relative",
                            opacity: n ? 1 : 0,
                            transition: "opacity 1s"
                        }, s.FROM_TABLET, {
                            width: "100%",
                            height: i || "80vh",
                            padding: 0
                        }), "")
                    }, Object(g.b)("video", {
                        ref: b,
                        onCanPlayThrough: a(b),
                        src: o ? e : void 0,
                        playsInline: !0,
                        autoPlay: !0,
                        loop: !0,
                        css: Object(l.a)(Object(u.a)({
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translateX(-50%) translateY(-50%)",
                            width: "auto",
                            height: "100%"
                        }, s.FROM_TABLET, {
                            minWidth: "100%",
                            minHeight: "100%",
                            width: "auto",
                            height: "auto"
                        }), "")
                    }, Object(g.b)("track", {
                        kind: "captions"
                    }), "Przepraszamy, Twoja przegl\u0105darka nie obs\u0142uguje film\xf3w.")))
                }),
                m = i("LsVC"),
                y = i("Bit+");
            c.a.createElement;

            function v(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, n)
                }
                return i
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(i), !0).forEach((function(e) {
                        Object(u.a)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : v(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            var T = {
                    name: "15poin4",
                    styles: "margin-bottom:15px;"
                },
                P = {
                    name: "tr0r3x",
                    styles: "margin-top:15px;"
                },
                w = function(t) {
                    var e, i = t.isHovered,
                        n = t.title,
                        o = t.subtitle,
                        a = t.description,
                        r = t.actions,
                        s = t.id,
                        b = t.layout,
                        d = t.children,
                        O = Object(f.b)().index,
                        j = Object(p.useTheme)(),
                        h = j.colors,
                        v = j.bp,
                        w = s || "video_banner".concat(O),
                        M = {
                            VIDEO_RIGHT: {
                                left: 0,
                                right: "50%"
                            },
                            VIDEO_LEFT: {
                                right: 0,
                                left: "50%"
                            }
                        },
                        k = M[b] || M.VIDEO_LEFT,
                        A = c.a.useCallback((function(t) {
                            Object(m.g)({
                                id: w,
                                index: O,
                                type: Object(m.a)("BANNER", t.type, "BUTTON" === t.type ? t.action : void 0),
                                name: n
                            })
                        }), [O, n, w]);
                    return Object(g.b)("div", {
                        css: Object(l.a)((e = {
                            backgroundColor: h.BLACK,
                            padding: 20
                        }, Object(u.a)(e, v.FROM_TABLET, [{
                            position: "absolute",
                            zIndex: 100,
                            top: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0,0,0, ".concat(i ? ".75" : ".25", ")"),
                            transition: "background-color .25s"
                        }, k]), Object(u.a)(e, v.FROM_LARGE_DESKTOP, {
                            paddingLeft: 80
                        }), e), "")
                    }, Object(g.b)("div", {
                        css: Object(l.a)(Object(u.a)({
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                            maxWidth: 620,
                            marginRight: "auto",
                            color: h.WHITE
                        }, v.FROM_TABLET, {
                            position: "relative"
                        }), "")
                    }, o && Object(g.b)("strong", {
                        css: Object(l.a)({
                            color: h.ORANGE_DARK,
                            marginBottom: 10
                        }, "")
                    }, o), n && Object(g.b)("h2", {
                        css: T
                    }, n), a && Object(g.b)("span", null, a), Object(g.b)("div", {
                        css: P
                    }, r.map((function(t, e) {
                        return Object(g.b)(y.a, {
                            key: e,
                            onClick: function() {
                                return A(t)
                            },
                            action: E({}, t, {
                                id: Object(m.a)(n, t.text, "VideoBanner_Button")
                            }),
                            css: "LINK" !== t.type && Object(u.a)({
                                padding: 0,
                                width: 130
                            }, v.FROM_DESKTOP, {
                                width: 190
                            })
                        })
                    }))), d))
                },
                M = i("obcW");
            c.a.createElement;
            var k = {
                    name: "1cq6gya",
                    styles: "position:absolute;top:0;"
                },
                A = {
                    name: "s16q1a",
                    styles: "position:absolute;top:0;right:0;"
                },
                L = function(t) {
                    var e = t.isMuted,
                        i = t.isPlaying,
                        o = t.onMuteClick,
                        a = t.onPlayClick,
                        c = Object(p.useTheme)(),
                        r = c.bp,
                        s = c.colors,
                        O = c.zIndex,
                        j = Object(d.a)(),
                        f = {
                            from: {
                                opacity: 0,
                                transform: "translate3d(0,100%,0)",
                                top: 0
                            },
                            enter: {
                                opacity: 1,
                                transform: "translate3d(0,0,0)"
                            },
                            leave: {
                                opacity: 0,
                                transform: "translate3d(0,-100%,0)"
                            },
                            config: M.config.stiff
                        },
                        h = Object(M.useTransition)(e, f),
                        m = Object(M.useTransition)(i, f),
                        y = Object(b.a)({
                            disabled: j
                        }),
                        v = y.bind,
                        E = y.isHovered,
                        T = Object(b.a)({
                            disabled: j
                        }),
                        P = T.bind,
                        w = T.isHovered,
                        L = function(t) {
                            return Object(u.a)({}, r.FROM_DESKTOP, {
                                transform: "scale(".concat(t ? 1.1 : 1, ")"),
                                transition: "transform .25s"
                            })
                        };
                    return Object(g.b)("div", {
                        css: Object(l.a)(Object(u.a)({
                            position: "absolute",
                            right: 20,
                            bottom: 20,
                            width: 80,
                            height: 40,
                            zIndex: O.LAYER_1
                        }, r.FROM_TABLET, {
                            right: 0,
                            bottom: 0
                        }), "")
                    }, h((function(t, e) {
                        return Object(g.b)(M.animated.div, Object(n.a)({
                            style: t,
                            css: k
                        }, v), Object(g.b)(p.IconButton, {
                            title: "Mute button",
                            iconName: e ? "mute-circular" : "unmute-circular",
                            width: 37,
                            height: 37,
                            color: s.WHITE,
                            onClick: o,
                            css: L(E)
                        }))
                    })), m((function(t, e) {
                        return Object(g.b)(M.animated.div, Object(n.a)({
                            style: t,
                            css: A
                        }, P), Object(g.b)(p.IconButton, {
                            title: "Play button",
                            iconName: e ? "pause-circular" : "play-circular",
                            width: 37,
                            height: 37,
                            color: s.WHITE,
                            onClick: a,
                            css: L(w)
                        }))
                    })))
                },
                C = i("rpJ/"),
                R = i("AsJ6"),
                V = Object(C.a)({
                    id: "videoBanner",
                    initial: "inactive",
                    context: {
                        video: null,
                        isMuted: !0,
                        isPlaying: !0
                    },
                    states: {
                        inactive: {
                            on: {
                                SEEN: "loading"
                            }
                        },
                        loading: {
                            on: {
                                LOADED: {
                                    target: "ready",
                                    actions: "setVideoRef"
                                },
                                FAILED: "failure"
                            }
                        },
                        ready: {
                            on: {
                                PLAY: {
                                    actions: "playVideo"
                                },
                                PAUSE: {
                                    actions: "pauseVideo"
                                },
                                MUTE: {
                                    actions: "muteVideo"
                                },
                                UNMUTE: {
                                    actions: "unmuteVideo"
                                }
                            }
                        },
                        failure: {
                            type: "final"
                        }
                    }
                }, {
                    actions: {
                        setVideoRef: Object(R.b)({
                            video: function(t, e) {
                                return e.video
                            }
                        }),
                        muteVideo: Object(R.b)({
                            isMuted: function(t) {
                                return t.video && (t.video.muted = !0), !0
                            }
                        }),
                        unmuteVideo: Object(R.b)({
                            isMuted: function(t) {
                                return t.video && (t.video.muted = !1), !1
                            }
                        }),
                        playVideo: Object(R.b)({
                            isPlaying: function(t) {
                                return t.video && t.video.play(), !0
                            }
                        }),
                        pauseVideo: Object(R.b)({
                            isPlaying: function(t) {
                                return t.video && t.video.pause(), !1
                            }
                        })
                    }
                });
            c.a.createElement;
            var x = {
                    name: "ohwg9z",
                    styles: "position:relative;overflow:hidden;"
                },
                I = function(t) {
                    var e = t.id,
                        i = t.media,
                        a = t.mobileMedia,
                        u = t.title,
                        l = t.subtitle,
                        O = t.description,
                        j = t.layout,
                        p = t.height,
                        f = t.actions,
                        m = Object(d.a)(),
                        y = Object(b.a)({
                            disabled: m
                        }),
                        v = y.isHovered,
                        E = y.bind,
                        T = Object(s.useMachine)(V),
                        P = Object(o.a)(T, 2),
                        M = P[0],
                        k = P[1],
                        A = M.context,
                        C = A.isMuted,
                        R = A.isPlaying,
                        I = M.matches("ready"),
                        D = "inactive" !== M.value,
                        B = m && a ? a : i,
                        _ = c.a.useCallback((function(t) {
                            t.current && k({
                                type: "LOADED",
                                video: t.current
                            })
                        }), [k]),
                        F = c.a.useCallback((function(t) {
                            t && k("SEEN")
                        }), [k]),
                        z = c.a.useCallback((function() {
                            k(C ? "UNMUTE" : "MUTE")
                        }), [C, k]),
                        N = c.a.useCallback((function() {
                            k(R ? "PAUSE" : "PLAY")
                        }), [R, k]);
                    return Object(g.b)(r.a, {
                        onChange: F,
                        rootMargin: "100px"
                    }, Object(g.b)("div", Object(n.a)({}, E, {
                        title: B.title,
                        css: x
                    }), Object(g.b)(w, {
                        isHovered: v,
                        title: u,
                        subtitle: l,
                        description: O,
                        layout: j,
                        id: e,
                        actions: f
                    }, Object(g.b)(L, {
                        isMuted: C,
                        isPlaying: R,
                        onMuteClick: z,
                        onPlayClick: N
                    })), Object(g.b)(h, {
                        src: B.src,
                        height: p,
                        isLoaded: I,
                        isActive: D,
                        onVideoLoaded: _
                    })))
                }
        }
    }
]);
//# sourceMappingURL=video_banner.8ee6549a25b6c4754e94.js.map