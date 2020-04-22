(window.omniJsonp = window.omniJsonp || []).push([
    [33], {
        "2q8N": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "ProductCarousel", (function() {
                return fe
            }));
            var a = n("ERkP"),
                r = n.n(a),
                i = n("cxan"),
                o = n("zjfJ"),
                c = n("5IAQ"),
                s = n("VtSi"),
                l = n.n(s),
                u = n("zygG"),
                b = n("+wNj"),
                O = n("BFfR"),
                p = n("aWzz"),
                d = n.n(p),
                f = n("LaGA"),
                m = ["client", "offset", "scroll", "bounds", "margin"];

            function h(e) {
                var t = [];
                return m.forEach((function(n) {
                    e[n] && t.push(n)
                })), t
            }

            function j(e, t) {
                var n = {};
                if (t.indexOf("client") > -1 && (n.client = {
                        top: e.clientTop,
                        left: e.clientLeft,
                        width: e.clientWidth,
                        height: e.clientHeight
                    }), t.indexOf("offset") > -1 && (n.offset = {
                        top: e.offsetTop,
                        left: e.offsetLeft,
                        width: e.offsetWidth,
                        height: e.offsetHeight
                    }), t.indexOf("scroll") > -1 && (n.scroll = {
                        top: e.scrollTop,
                        left: e.scrollLeft,
                        width: e.scrollWidth,
                        height: e.scrollHeight
                    }), t.indexOf("bounds") > -1) {
                    var a = e.getBoundingClientRect();
                    n.bounds = {
                        top: a.top,
                        right: a.right,
                        bottom: a.bottom,
                        left: a.left,
                        width: a.width,
                        height: a.height
                    }
                }
                if (t.indexOf("margin") > -1) {
                    var r = getComputedStyle(e);
                    n.margin = {
                        top: r ? parseInt(r.marginTop) : 0,
                        right: r ? parseInt(r.marginRight) : 0,
                        bottom: r ? parseInt(r.marginBottom) : 0,
                        left: r ? parseInt(r.marginLeft) : 0
                    }
                }
                return n
            }
            var g, v = function(e) {
                var t, n;
                return n = t = function(t) {
                    function n() {
                        for (var e, n = arguments.length, a = new Array(n), r = 0; r < n; r++) a[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(a)) || this).state = {
                            contentRect: {
                                entry: {},
                                client: {},
                                offset: {},
                                scroll: {},
                                bounds: {},
                                margin: {}
                            }
                        }, e._animationFrameID = null, e._resizeObserver = null, e._node = null, e.measure = function(t) {
                            var n = j(e._node, g || h(e.props));
                            t && (n.entry = t[0].contentRect), e._animationFrameID = window.requestAnimationFrame((function() {
                                null !== e._resizeObserver && (e.setState({
                                    contentRect: n
                                }), "function" === typeof e.props.onResize && e.props.onResize(n))
                            }))
                        }, e._handleRef = function(t) {
                            null !== e._resizeObserver && null !== e._node && e._resizeObserver.unobserve(e._node), e._node = t, null !== e._resizeObserver && null !== e._node && e._resizeObserver.observe(e._node);
                            var n = e.props.innerRef;
                            n && ("function" === typeof n ? n(e._node) : n.current = e._node)
                        }, e
                    }
                    Object(O.a)(n, t);
                    var r = n.prototype;
                    return r.componentDidMount = function() {
                        this._resizeObserver = new f.a(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), "function" === typeof this.props.onResize && this.props.onResize(j(this._node, g || h(this.props))))
                    }, r.componentWillUnmount = function() {
                        null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), window.cancelAnimationFrame(this._animationFrameID)
                    }, r.render = function() {
                        var t = this.props,
                            n = (t.innerRef, t.onResize, Object(b.a)(t, ["innerRef", "onResize"]));
                        return Object(a.createElement)(e, Object(i.a)({}, n, {
                            measureRef: this._handleRef,
                            measure: this.measure,
                            contentRect: this.state.contentRect
                        }))
                    }, n
                }(a.Component), t.propTypes = {
                    client: d.a.bool,
                    offset: d.a.bool,
                    scroll: d.a.bool,
                    bounds: d.a.bool,
                    margin: d.a.bool,
                    innerRef: d.a.oneOfType([d.a.object, d.a.func]),
                    onResize: d.a.func
                }, n
            }((function(e) {
                var t = e.measure,
                    n = e.measureRef,
                    a = e.contentRect;
                return (0, e.children)({
                    measure: t,
                    measureRef: n,
                    contentRect: a
                })
            }));
            v.displayName = "Measure", v.propTypes.children = d.a.func;
            var y = v,
                T = n("obcW"),
                _ = n("I6rk"),
                R = n("Kq2c"),
                w = n("RN2F"),
                E = n.n(w),
                A = n("5siB"),
                S = n.n(A),
                P = n("WlOH"),
                I = n("pTb3"),
                C = n("KMQa"),
                x = n("l1C2");
            r.a.createElement;
            var N = {
                    name: "dr9i1m",
                    styles: "display:flex;padding-bottom:30px;"
                },
                L = function(e) {
                    var t, n, a, i, s, l = e.children,
                        b = e.title,
                        O = Object(I.c)(),
                        p = O.colors,
                        d = O.bp,
                        f = O.zIndex,
                        m = Object(_.a)(),
                        h = r.a.useRef(null),
                        j = r.a.useState("START"),
                        g = Object(u.a)(j, 2),
                        v = g[0],
                        y = g[1];
                    return r.a.useEffect((function() {
                        S.a.polyfill()
                    }), []), r.a.useEffect((function() {
                        if (h.current) {
                            var e = h.current.getScrollElement(),
                                t = function() {
                                    var t = e.scrollLeft,
                                        n = e.scrollWidth,
                                        a = e.getBoundingClientRect().width;
                                    y(a === n ? "FULL" : 0 === t ? "START" : t + a === n ? "END" : "MIDDLE")
                                };
                            return e.addEventListener("scroll", t, !!E.a.hasSupport && {
                                    capture: !1,
                                    passive: !0
                                }), t(),
                                function() {
                                    return e.removeEventListener("scroll", t)
                                }
                        }
                    }), [l]), Object(x.b)("div", {
                        css: Object(c.a)({
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            background: p.STARDUST
                        }, "")
                    }, Object(x.b)("h2", {
                        css: Object(c.a)((t = {
                            fontSize: 24,
                            lineHeight: "26px",
                            paddingTop: 30,
                            margin: "0 7vw"
                        }, Object(o.a)(t, d.FROM_TABLET, {
                            fontSize: 40,
                            lineHeight: "42px"
                        }), Object(o.a)(t, d.FROM_DESKTOP, {
                            fontSize: 60,
                            lineHeight: "62px",
                            paddingTop: 50
                        }), t), "")
                    }, b), Object(x.b)("div", {
                        css: Object(c.a)(Object(o.a)({
                            position: "relative",
                            marginTop: 30
                        }, d.TO_DESKTOP, {
                            marginBottom: 20
                        }), ""),
                        role: "list"
                    }, Object(x.b)(C.a, {
                        onClick: function() {
                            h.current && h.current.getScrollElement().scrollBy({
                                left: -window.innerWidth / 4,
                                behavior: "smooth"
                            })
                        },
                        color: p.WHITE,
                        title: "Poka\u017c poprzedni",
                        iconName: "arrow-left",
                        width: 30,
                        height: 30,
                        css: Object(c.a)((n = {}, Object(o.a)(n, d.ONLY_MOBILE, {
                            display: "none"
                        }), Object(o.a)(n, "zIndex", f.LAYER_1), Object(o.a)(n, "position", "absolute"), Object(o.a)(n, "top", "44%"), Object(o.a)(n, "left", "3vw"), Object(o.a)(n, "backgroundColor", p.CHROME), Object(o.a)(n, "padding", 8), Object(o.a)(n, "transition", "opacity 0.2s ease-in"), Object(o.a)(n, "opacity", "START" === v || "FULL" === v ? 0 : 1), n), "")
                    }), Object(x.b)(P.a, {
                        offset: m ? "10%" : "40%",
                        ref: h
                    }, Object(x.b)("div", {
                        css: N
                    }, Object(x.b)("div", {
                        css: Object(c.a)((a = {
                            width: "7.5vw"
                        }, Object(o.a)(a, d.FROM_TABLET, {
                            width: "7vw"
                        }), Object(o.a)(a, "flexShrink", 0), a), "")
                    }), l, Object(x.b)("div", {
                        css: Object(c.a)((i = {
                            width: "7.5vw"
                        }, Object(o.a)(i, d.FROM_TABLET, {
                            width: "7vw"
                        }), Object(o.a)(i, "flexShrink", 0), i), "")
                    }))), Object(x.b)(C.a, {
                        onClick: function() {
                            h.current && h.current.getScrollElement().scrollBy({
                                left: window.innerWidth / 3,
                                behavior: "smooth"
                            })
                        },
                        color: p.WHITE,
                        title: "Poka\u017c nast\u0119pny",
                        iconName: "arrow-right",
                        width: 30,
                        height: 30,
                        css: Object(c.a)((s = {}, Object(o.a)(s, d.ONLY_MOBILE, {
                            display: "none"
                        }), Object(o.a)(s, "position", "absolute"), Object(o.a)(s, "top", "44%"), Object(o.a)(s, "right", "3vw"), Object(o.a)(s, "backgroundColor", p.CHROME), Object(o.a)(s, "padding", 8), Object(o.a)(s, "transition", "opacity 0.2s ease-in"), Object(o.a)(s, "opacity", "END" === v || "FULL" === v ? 0 : 1), s), "")
                    })))
                },
                D = n("HbGN"),
                z = n("XTXV"),
                M = n("Zx7g"),
                k = n("LsVC"),
                F = n("/G5g"),
                H = n("kN39");

            function B(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var W = {
                    title: "",
                    pk: null,
                    providedProducts: null,
                    elementHeight: void 0,
                    isCarouselLoading: !0,
                    isDetailsLoading: !0,
                    isLayerVisible: !1,
                    wasSeen: !1,
                    carouselItems: [],
                    deviceDetails: null,
                    currentDeviceId: null,
                    showNetPrices: !1
                },
                U = function(e, t) {
                    switch (t.type) {
                        case "setElementHeight":
                            return K({}, e, {
                                elementHeight: t.payload
                            });
                        case "setIsCarouselLoading":
                            return K({}, e, {
                                isCarouselLoading: t.payload
                            });
                        case "setIsDetailsLoading":
                            return K({}, e, {
                                isDetailsLoading: t.payload
                            });
                        case "setIsLayerVisible":
                            return K({}, e, {
                                isLayerVisible: t.payload
                            });
                        case "setWasSeen":
                            return K({}, e, {
                                wasSeen: t.payload
                            });
                        case "setCarouselItems":
                            return K({}, e, {
                                carouselItems: t.payload
                            });
                        case "setCurrentDeviceId":
                            return K({}, e, {
                                currentDeviceId: t.payload
                            });
                        case "setDeviceDetails":
                            return K({}, e, {
                                deviceDetails: t.payload
                            });
                        case "setProvidedProducts":
                            return K({}, e, {
                                providedProducts: t.payload
                            });
                        default:
                            return e
                    }
                },
                G = n("y6sE");
            r.a.createElement;

            function V(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var J = r.a.createContext(null),
                X = r.a.memo((function(e) {
                    var t = e.title,
                        n = e.pk,
                        a = e.providedProducts,
                        o = void 0 === a ? null : a,
                        c = Object(D.a)(e, ["title", "pk", "providedProducts"]),
                        s = Object(G.b)().market,
                        l = r.a.useReducer(U, Y({}, W, {
                            title: t,
                            pk: n,
                            providedProducts: o,
                            showNetPrices: Object(H.a)(s)
                        })),
                        b = Object(u.a)(l, 2),
                        O = b[0],
                        p = b[1];
                    r.a.useEffect((function() {
                        o && (p({
                            type: "setCarouselItems",
                            payload: []
                        }), p({
                            type: "setProvidedProducts",
                            payload: o
                        }))
                    }), [o]);
                    var d = r.a.useMemo((function() {
                        return Y({}, O, {
                            dispatch: p
                        })
                    }), [O]);
                    return Object(x.b)(J.Provider, Object(i.a)({
                        value: d
                    }, c))
                })),
                q = function() {
                    var e = r.a.useContext(J);
                    if (null === e) throw Error("useCarouselProvider: Please provide CarouselProvider value.");
                    return e
                },
                Q = {
                    CONTRACT: ["ACTIVATION", "MNP", "RETENTION", "MIGRATION_PRE_POST", "MIGRATION_NJU_POST_TO_POST", "MNP_TWOSTEP", "MIGRATION_NJU_PRE_TO_POST", "MIGRATION_ZETAFON_POST"],
                    NO_CONTRACT: ["SALE_OF_GOODS"],
                    NO_CONTRACT_INST: ["INSTALMENT_SALES_OF_GOODS_NC"],
                    NO_CONTRACT_PROMO: ["INSTALMENT_SALES_OF_GOODS"]
                },
                Z = {
                    CONTRACT: "w abonamencie",
                    NO_CONTRACT: "bez abonamentu bez rat",
                    NO_CONTRACT_INST: "bez abonamentu na raty",
                    NO_CONTRACT_PROMO: "bez abonamentu na raty dla Klienta Orange"
                },
                $ = n("7XZX"),
                ee = n("+W4p");
            r.a.createElement;
            var te = {
                    name: "kt4av0",
                    styles: "display:block;font-size:14px;line-height:18px;margin-top:2px;"
                },
                ne = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                ae = function(e) {
                    var t, n = e.payments,
                        a = Object(R.useTheme)(),
                        r = a.bp,
                        i = a.colors,
                        s = q().showNetPrices,
                        l = Object(ee.a)(n),
                        b = Object($.a)({
                            currentPayment: l,
                            shouldShowNetPrices: s
                        });
                    if (!b) return null;
                    var O = Object.entries(Q).map((function(e) {
                            var t = Object(u.a)(e, 2),
                                n = t[0];
                            return t[1].includes(l.processType) ? n : null
                        })).filter((function(e) {
                            return !!e
                        }))[0],
                        p = Z[O],
                        d = "CONTRACT" === O,
                        f = b.followingPriceStep,
                        m = b.installmentPayment,
                        h = b.oneTimePayment,
                        j = b.propositionName;
                    return Object(x.b)("div", null, Object(x.b)("strong", {
                        css: Object(c.a)((t = {
                            color: i.ORANGE_DARK,
                            fontSize: 16,
                            lineHeight: "18px"
                        }, Object(o.a)(t, r.FROM_TABLET, {
                            fontSize: 18,
                            lineHeight: "20px"
                        }), Object(o.a)(t, r.FROM_DESKTOP, {
                            fontSize: 24,
                            lineHeight: "28px"
                        }), t), "")
                    }, h, m), Object(x.b)("span", {
                        css: te
                    }, Object(x.b)("span", {
                        css: ne
                    }, f && "".concat(f, " z\u0142 ").concat(s && "0" !== f ? " + VAT " : "", "na start ")), p, " ", j && d && j))
                },
                re = n("XsQI");
            r.a.createElement;
            var ie = {
                    name: "1m1dd9p",
                    styles: "font-size:14px;line-height:18px;height:15px;display:block;"
                },
                oe = r.a.memo((function(e) {
                    var t, n, a, s, l = e.name,
                        b = e.index,
                        O = e.payments,
                        p = (e.products, e.productId),
                        d = (e.productUrl, e.mainImageUrl),
                        f = e.propositionName,
                        m = e.action,
                        h = e.priceTeaser,
                        j = e.titleTeaser,
                        g = Object(D.a)(e, ["name", "index", "payments", "products", "productId", "productUrl", "mainImageUrl", "propositionName", "action", "priceTeaser", "titleTeaser"]),
                        v = Object(R.useTheme)(),
                        y = v.bp,
                        T = v.colors,
                        w = v.zIndex,
                        E = Object(_.a)(),
                        A = q(),
                        S = A.carouselItems,
                        P = A.dispatch,
                        I = r.a.useState(!1),
                        C = Object(u.a)(I, 2),
                        N = C[0],
                        L = C[1],
                        H = r.a.useState(!1),
                        B = Object(u.a)(H, 2),
                        K = B[0],
                        W = B[1],
                        U = r.a.useRef(null),
                        G = Object(re.a)(O),
                        V = r.a.useCallback((function() {
                            L(!0), W(!0)
                        }), []),
                        Y = r.a.useCallback((function() {
                            L(!1)
                        }), []),
                        J = r.a.useCallback((function() {
                            Object(k.e)(l, p, G, f, b);
                            var e = S.find((function(e) {
                                return e.productId === p
                            })) || null;
                            P({
                                type: "setDeviceDetails",
                                payload: e
                            })
                        }), [P, p, S, b, l, G, f]);
                    Object(M.a)(U, Y);
                    var X = r.a.useCallback((function(e) {
                            e && W(!0)
                        }), []),
                        Q = {
                            OPEN_PRODUCT_DETAILS: J
                        };
                    return Object(x.b)(z.a, {
                        onChange: X,
                        rootMargin: "300px",
                        role: "listitem",
                        css: S.length - 1 > b && (t = {
                            marginRight: 10
                        }, Object(o.a)(t, y.FROM_TABLET, {
                            marginRight: 20
                        }), Object(o.a)(t, y.FROM_LARGE_DESKTOP, {
                            marginRight: 30
                        }), t)
                    }, Object(x.b)(F.a, {
                        actionsMap: Q,
                        action: m
                    }, Object(x.b)("div", Object(i.a)({
                        role: "button",
                        onClick: E ? V : void 0,
                        onTouchEnd: V,
                        ref: U,
                        onMouseEnter: V,
                        onMouseLeave: Y,
                        id: p,
                        css: Object(c.a)((n = {
                            position: "relative",
                            width: "85vw",
                            maxWidth: 420,
                            height: "70vh",
                            maxHeight: 425,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 20
                        }, Object(o.a)(n, y.FROM_TABLET, {
                            width: "40vw",
                            height: 425
                        }), Object(o.a)(n, y.FROM_DESKTOP, {
                            width: "27vw",
                            paddingTop: 30
                        }), Object(o.a)(n, y.FROM_LARGE_DESKTOP, {
                            width: "20vw"
                        }), n), "")
                    }, g), Object(x.b)("div", {
                        css: Object(c.a)(Object(o.a)({
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: T.WHITE,
                            zIndex: w.LAYER_1,
                            borderRadius: 6
                        }, y.FROM_DESKTOP, {
                            transform: "scaleY(".concat(N ? .9 : 1, ")"),
                            transformOrigin: "bottom",
                            transition: "transform .2s",
                            willChange: "transform"
                        }), "")
                    }), Object(x.b)("div", {
                        title: l,
                        css: Object(c.a)(Object(o.a)({
                            backgroundImage: 'url("'.concat(K ? d : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", '")'),
                            flex: "1 0 auto",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            zIndex: w.LAYER_2
                        }, y.FROM_DESKTOP, {
                            transform: "translateY(".concat(N ? "-30px" : 0, ")"),
                            transition: "transform .4s",
                            willChange: "transform"
                        }), "")
                    }), Object(x.b)("strong", {
                        css: Object(c.a)((a = {
                            color: T.BLACK,
                            display: "block",
                            fontSize: 16,
                            lineHeight: "18px",
                            marginTop: 30,
                            zIndex: w.LAYER_2,
                            width: "100%",
                            minHeight: 45
                        }, Object(o.a)(a, y.FROM_TABLET, {
                            fontSize: 18,
                            lineHeight: "20px",
                            minHeight: 66
                        }), Object(o.a)(a, y.FROM_DESKTOP, {
                            fontSize: 24,
                            lineHeight: "28px",
                            minHeight: 88
                        }), a), "")
                    }, l, j && Object(x.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: j
                        },
                        css: Object(c.a)(Object(o.a)({
                            display: "none"
                        }, y.FROM_DESKTOP, {
                            display: "block",
                            color: T.BLACK
                        }), "")
                    })), Object(x.b)("div", {
                        css: Object(c.a)(Object(o.a)({
                            position: "relative",
                            zIndex: w.LAYER_2,
                            alignSelf: "flex-start",
                            maxHeight: 150,
                            overflow: "hidden",
                            width: "100%"
                        }, y.FROM_DESKTOP, {
                            maxHeight: N ? 150 : 0,
                            transition: "max-height .4s",
                            willChange: "max-height"
                        }), "")
                    }, Object(x.b)(R.Separator, {
                        css: Object(c.a)((s = {
                            marginBottom: 25
                        }, Object(o.a)(s, y.FROM_TABLET, {
                            marginBottom: 15
                        }), Object(o.a)(s, y.FROM_DESKTOP, {
                            transform: "scaleX(".concat(N ? 1 : 0, ")"),
                            transformOrigin: "left",
                            transition: "transform .5s",
                            transitionDelay: ".2s",
                            willChange: "transform"
                        }), s), "")
                    }), Object(x.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: h || ""
                        },
                        css: ie
                    }), Object(x.b)(ae, {
                        payments: O
                    })))))
                }));
            oe.displayName = "ProductCarouselItem";
            var ce = n("VfYs"),
                se = n("SHc4"),
                le = n("v2bw"),
                ue = function(e) {
                    return 1 === e.length ? e[0] : e.join(" + ")
                },
                be = n("aoUj");
            r.a.createElement;
            var Oe = {
                    name: "461vux",
                    styles: "position:absolute;top:0;right:0;left:0;"
                },
                pe = {
                    name: "1fk9qgd",
                    styles: "position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);transition:all 0.25s ease-out;pointer-events:none;"
                },
                de = r.a.memo((function() {
                    var e = Object(R.useTheme)().bp,
                        t = Object(_.a)(),
                        n = Object(le.b)().isInViewport,
                        a = q(),
                        s = a.pk,
                        b = a.providedProducts,
                        O = a.title,
                        p = a.dispatch,
                        d = a.deviceDetails,
                        f = a.carouselItems,
                        m = r.a.useState(!0),
                        h = Object(u.a)(m, 2),
                        j = h[0],
                        g = h[1],
                        v = r.a.useState(),
                        w = Object(u.a)(v, 2),
                        E = w[0],
                        A = w[1],
                        S = r.a.useState(!1),
                        P = Object(u.a)(S, 2),
                        I = P[0],
                        C = P[1];
                    r.a.useEffect((function() {
                        n && function() {
                            var e;
                            l.a.async((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(f.length > 0 || I)) {
                                            t.next = 3;
                                            break
                                        }
                                        return g(!1), t.abrupt("return");
                                    case 3:
                                        if (g(!0), e = [], !b) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 8, l.a.awrap(Object(ce.d)(b));
                                    case 8:
                                        e = t.sent, C(!0), t.next = 16;
                                        break;
                                    case 12:
                                        if (!s) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.next = 15, l.a.awrap(Object(ce.c)(s));
                                    case 15:
                                        e = t.sent;
                                    case 16:
                                        Array.isArray(e) && e.length > 0 ? (p({
                                            type: "setCarouselItems",
                                            payload: e
                                        }), Object(k.f)(e), p({
                                            type: "setWasSeen",
                                            payload: !0
                                        }), g(!1)) : (be.a.withScope((function(t) {
                                            var n = "";
                                            try {
                                                n = JSON.stringify(e).substr(0, 500)
                                            } catch (a) {}
                                            t.setTag("where", "ProductCarousel.Container.getItems"), be.a.captureEvent({
                                                message: "ProductCarousel.getItems: Invalid products type",
                                                extra: {
                                                    content: n,
                                                    payload: {
                                                        pk: s,
                                                        providedProducts: b
                                                    }
                                                }
                                            })
                                        })), g(!1));
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), null, null, null, Promise)
                        }()
                    }), [p, s, b, f, I, n]);
                    var N = r.a.useCallback((function() {
                            p({
                                type: "setDeviceDetails",
                                payload: null
                            })
                        }), [p]),
                        D = r.a.useCallback((function(e) {
                            e.bounds && A(e.bounds.height)
                        }), []),
                        z = Object(T.useTransition)(d, {
                            from: {
                                opacity: 0
                            },
                            enter: {
                                opacity: 1
                            },
                            leave: {
                                opacity: 0
                            }
                        });
                    return Object(x.b)("section", {
                        role: "region",
                        style: {
                            height: d ? E : void 0
                        },
                        css: Object(c.a)(Object(o.a)({
                            display: "flex",
                            position: "relative"
                        }, e.FROM_DESKTOP, {
                            minHeight: 700
                        }), "")
                    }, Object(x.b)("div", {
                        style: {
                            opacity: j || d ? 0 : 1
                        },
                        css: Object(c.a)(Object(o.a)({
                            width: "100%",
                            transition: "all 0.25s ease-out"
                        }, e.FROM_DESKTOP, {
                            minHeight: 700
                        }), "")
                    }, Object(x.b)(L, {
                        title: O,
                        isMobile: t,
                        itemsLength: f.length
                    }, f.map((function(e, t) {
                        return Object(x.b)(oe, Object(i.a)({
                            key: t,
                            index: t
                        }, function(e) {
                            var t = e.payments,
                                n = e.products,
                                a = e.productId,
                                r = e.productUrl,
                                i = e.mainImageUrl,
                                o = e.action,
                                c = e.priceTeaser,
                                s = e.titleTeaser,
                                l = n.map((function(e) {
                                    return e.name
                                })),
                                u = Object(ee.a)(t);
                            return {
                                mainImageUrl: i,
                                productId: a,
                                productUrl: r,
                                payments: t,
                                products: n,
                                name: ue(l),
                                propositionName: u.propositionName,
                                action: o,
                                priceTeaser: c,
                                titleTeaser: s
                            }
                        }(e)))
                    })))), z((function(e, t) {
                        return t && Object(x.b)(T.animated.div, {
                            style: e,
                            css: Oe
                        }, d && Object(x.b)(y, {
                            margin: !0,
                            bounds: !0,
                            onResize: D
                        }, (function(e) {
                            var t = e.measureRef;
                            return Object(x.b)("div", {
                                ref: t
                            }, Object(x.b)(se.ProductDetails, Object(i.a)({
                                onCloseShelf: N
                            }, d)))
                        })))
                    })), Object(x.b)("div", {
                        css: pe
                    }, Object(x.b)(R.Loader, {
                        style: {
                            opacity: j ? 1 : 0
                        }
                    })))
                }));
            de.displayName = "Container";
            r.a.createElement;
            var fe = function(e) {
                return Object(x.b)(X, e, Object(x.b)(de, null))
            }
        }
    }
]);
//# sourceMappingURL=product_carousel.be92b84b2ee3b75dbde1.js.map