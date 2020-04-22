(window.omniJsonp = window.omniJsonp || []).push([
    [36], {
        "2q8N": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "ProductCarousel", (function() {
                return je
            }));
            var r = n("ERkP"),
                a = n.n(r),
                o = n("cxan"),
                i = n("zjfJ"),
                c = n("5IAQ"),
                s = n("VtSi"),
                l = n.n(s),
                u = n("zygG"),
                b = n("+wNj"),
                O = n("BFfR"),
                p = n("aWzz"),
                f = n.n(p),
                d = n("LaGA"),
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
                    var r = e.getBoundingClientRect();
                    n.bounds = {
                        top: r.top,
                        right: r.right,
                        bottom: r.bottom,
                        left: r.left,
                        width: r.width,
                        height: r.height
                    }
                }
                if (t.indexOf("margin") > -1) {
                    var a = getComputedStyle(e);
                    n.margin = {
                        top: a ? parseInt(a.marginTop) : 0,
                        right: a ? parseInt(a.marginRight) : 0,
                        bottom: a ? parseInt(a.marginBottom) : 0,
                        left: a ? parseInt(a.marginLeft) : 0
                    }
                }
                return n
            }
            var g, y = function(e) {
                var t, n;
                return n = t = function(t) {
                    function n() {
                        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(r)) || this).state = {
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
                    var a = n.prototype;
                    return a.componentDidMount = function() {
                        this._resizeObserver = new d.a(this.measure), null !== this._node && (this._resizeObserver.observe(this._node), "function" === typeof this.props.onResize && this.props.onResize(j(this._node, g || h(this.props))))
                    }, a.componentWillUnmount = function() {
                        null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), window.cancelAnimationFrame(this._animationFrameID)
                    }, a.render = function() {
                        var t = this.props,
                            n = (t.innerRef, t.onResize, Object(b.a)(t, ["innerRef", "onResize"]));
                        return Object(r.createElement)(e, Object(o.a)({}, n, {
                            measureRef: this._handleRef,
                            measure: this.measure,
                            contentRect: this.state.contentRect
                        }))
                    }, n
                }(r.Component), t.propTypes = {
                    client: f.a.bool,
                    offset: f.a.bool,
                    scroll: f.a.bool,
                    bounds: f.a.bool,
                    margin: f.a.bool,
                    innerRef: f.a.oneOfType([f.a.object, f.a.func]),
                    onResize: f.a.func
                }, n
            }((function(e) {
                var t = e.measure,
                    n = e.measureRef,
                    r = e.contentRect;
                return (0, e.children)({
                    measure: t,
                    measureRef: n,
                    contentRect: r
                })
            }));
            y.displayName = "Measure", y.propTypes.children = f.a.func;
            var v = y,
                T = n("obcW"),
                P = n("9KUe"),
                w = n("Kq2c"),
                R = n("I6rk"),
                _ = n("RN2F"),
                E = n.n(_),
                S = n("5siB"),
                A = n.n(S),
                I = n("WlOH"),
                C = n("pTb3"),
                N = n("KMQa"),
                D = n("l1C2");
            a.a.createElement;
            var x = {
                    name: "dr9i1m",
                    styles: "display:flex;padding-bottom:30px;"
                },
                L = function(e) {
                    var t, n, r, o, s = e.children,
                        l = Object(C.c)(),
                        b = l.colors,
                        O = l.bp,
                        p = l.zIndex,
                        f = Object(R.a)(),
                        d = a.a.useRef(null),
                        m = a.a.useState("START"),
                        h = Object(u.a)(m, 2),
                        j = h[0],
                        g = h[1];
                    return a.a.useEffect((function() {
                        A.a.polyfill()
                    }), []), a.a.useEffect((function() {
                        if (d.current) {
                            var e = d.current.getScrollElement(),
                                t = function() {
                                    var t = e.scrollLeft,
                                        n = e.scrollWidth,
                                        r = e.getBoundingClientRect().width;
                                    g(r === n ? "FULL" : 0 === t ? "START" : t + r === n ? "END" : "MIDDLE")
                                };
                            return e.addEventListener("scroll", t, !!E.a.hasSupport && {
                                    capture: !1,
                                    passive: !0
                                }), t(),
                                function() {
                                    return e.removeEventListener("scroll", t)
                                }
                        }
                    }), [s]), Object(D.b)("div", {
                        css: Object(c.a)(Object(i.a)({
                            position: "relative",
                            marginTop: 30
                        }, O.TO_DESKTOP, {
                            marginBottom: 20
                        }), ""),
                        role: "list"
                    }, Object(D.b)(N.a, {
                        onClick: function() {
                            d.current && d.current.getScrollElement().scrollBy({
                                left: -window.innerWidth / 4,
                                behavior: "smooth"
                            })
                        },
                        color: b.WHITE,
                        title: "Poka\u017c poprzedni",
                        iconName: "arrow-left",
                        width: 30,
                        height: 30,
                        css: Object(c.a)((t = {}, Object(i.a)(t, O.ONLY_MOBILE, {
                            display: "none"
                        }), Object(i.a)(t, "zIndex", p.LAYER_1), Object(i.a)(t, "position", "absolute"), Object(i.a)(t, "top", "44%"), Object(i.a)(t, "left", "3vw"), Object(i.a)(t, "backgroundColor", b.CHROME), Object(i.a)(t, "padding", 8), Object(i.a)(t, "transition", "opacity 0.2s ease-in"), Object(i.a)(t, "opacity", "START" === j || "FULL" === j ? 0 : 1), t), "")
                    }), Object(D.b)(I.a, {
                        offset: f ? "10%" : "40%",
                        ref: d
                    }, Object(D.b)("div", {
                        css: x
                    }, Object(D.b)("div", {
                        css: Object(c.a)((n = {
                            width: "7.5vw"
                        }, Object(i.a)(n, O.FROM_TABLET, {
                            width: "7vw"
                        }), Object(i.a)(n, "flexShrink", 0), n), "")
                    }), s, Object(D.b)("div", {
                        css: Object(c.a)((r = {
                            width: "7.5vw"
                        }, Object(i.a)(r, O.FROM_TABLET, {
                            width: "7vw"
                        }), Object(i.a)(r, "flexShrink", 0), r), "")
                    }))), Object(D.b)(N.a, {
                        onClick: function() {
                            d.current && d.current.getScrollElement().scrollBy({
                                left: window.innerWidth / 3,
                                behavior: "smooth"
                            })
                        },
                        color: b.WHITE,
                        title: "Poka\u017c nast\u0119pny",
                        iconName: "arrow-right",
                        width: 30,
                        height: 30,
                        css: Object(c.a)((o = {}, Object(i.a)(o, O.ONLY_MOBILE, {
                            display: "none"
                        }), Object(i.a)(o, "position", "absolute"), Object(i.a)(o, "top", "44%"), Object(i.a)(o, "right", "3vw"), Object(i.a)(o, "backgroundColor", b.CHROME), Object(i.a)(o, "padding", 8), Object(i.a)(o, "transition", "opacity 0.2s ease-in"), Object(i.a)(o, "opacity", "END" === j || "FULL" === j ? 0 : 1), o), "")
                    }))
                },
                z = n("HbGN"),
                k = n("XTXV"),
                M = n("Zx7g"),
                F = n("LsVC"),
                H = n("/G5g"),
                B = n("kN39");

            function K(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var G = {
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
                    showNetPrices: !1
                },
                U = function(e, t) {
                    switch (t.type) {
                        case "setElementHeight":
                            return W({}, e, {
                                elementHeight: t.payload
                            });
                        case "setIsCarouselLoading":
                            return W({}, e, {
                                isCarouselLoading: t.payload
                            });
                        case "setIsDetailsLoading":
                            return W({}, e, {
                                isDetailsLoading: t.payload
                            });
                        case "setIsLayerVisible":
                            return W({}, e, {
                                isLayerVisible: t.payload
                            });
                        case "setWasSeen":
                            return W({}, e, {
                                wasSeen: t.payload
                            });
                        case "setCarouselItems":
                            return W({}, e, {
                                carouselItems: t.payload
                            });
                        case "setDeviceDetails":
                            return W({}, e, {
                                deviceDetails: t.payload
                            });
                        case "setProvidedProducts":
                            return W({}, e, {
                                providedProducts: t.payload
                            });
                        default:
                            return e
                    }
                },
                V = n("y6sE");
            a.a.createElement;

            function Y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var q = a.a.createContext(null),
                Q = a.a.memo((function(e) {
                    var t = e.title,
                        n = e.pk,
                        r = e.providedProducts,
                        i = void 0 === r ? null : r,
                        c = Object(z.a)(e, ["title", "pk", "providedProducts"]),
                        s = Object(V.b)().market,
                        l = a.a.useReducer(U, J({}, G, {
                            title: t,
                            pk: n,
                            providedProducts: i,
                            showNetPrices: Object(B.a)(s)
                        })),
                        b = Object(u.a)(l, 2),
                        O = b[0],
                        p = b[1];
                    a.a.useEffect((function() {
                        i && (p({
                            type: "setCarouselItems",
                            payload: []
                        }), p({
                            type: "setProvidedProducts",
                            payload: i
                        }))
                    }), [i]);
                    var f = a.a.useMemo((function() {
                        return J({}, O, {
                            dispatch: p
                        })
                    }), [O]);
                    return Object(D.b)(q.Provider, Object(o.a)({
                        value: f
                    }, c))
                })),
                X = function() {
                    var e = a.a.useContext(q);
                    if (null === e) throw Error("useCarouselProvider: Please provide CarouselProvider value.");
                    return e
                },
                Z = n("EUF5"),
                $ = {
                    CONTRACT: ["ACTIVATION", "MNP", "RETENTION", "MIGRATION_PRE_POST", "MIGRATION_NJU_POST_TO_POST", "MNP_TWOSTEP", "MIGRATION_NJU_PRE_TO_POST", "MIGRATION_ZETAFON_POST"],
                    NO_CONTRACT: ["SALE_OF_GOODS"],
                    NO_CONTRACT_INST: ["INSTALMENT_SALES_OF_GOODS_NC"],
                    NO_CONTRACT_PROMO: ["INSTALMENT_SALES_OF_GOODS"]
                },
                ee = {
                    CONTRACT: "w abonamencie",
                    NO_CONTRACT: "bez abonamentu bez rat",
                    NO_CONTRACT_INST: "bez abonamentu na raty",
                    NO_CONTRACT_PROMO: "bez abonamentu na raty dla Klienta Orange"
                },
                te = n("+W4p");
            a.a.createElement;
            var ne = {
                    name: "kt4av0",
                    styles: "display:block;font-size:14px;line-height:18px;margin-top:2px;"
                },
                re = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                ae = function(e) {
                    var t, n = e.payments,
                        r = Object(w.useTheme)(),
                        a = r.bp,
                        o = r.colors,
                        s = X().showNetPrices,
                        l = Object(te.a)(n),
                        b = Object(Z.a)({
                            currentPayment: l,
                            shouldShowNetPrices: s
                        });
                    if (!b) return null;
                    var O = Object.entries($).map((function(e) {
                            var t = Object(u.a)(e, 2),
                                n = t[0];
                            return t[1].includes(l.processType) ? n : null
                        })).filter((function(e) {
                            return !!e
                        }))[0],
                        p = ee[O],
                        f = "CONTRACT" === O,
                        d = b.followingPriceStep,
                        m = b.installmentPayment,
                        h = b.oneTimePayment,
                        j = b.propositionName;
                    return Object(D.b)("div", null, Object(D.b)("strong", {
                        css: Object(c.a)((t = {
                            color: o.ORANGE_DARK,
                            fontSize: 16,
                            lineHeight: "18px"
                        }, Object(i.a)(t, a.FROM_TABLET, {
                            fontSize: 18,
                            lineHeight: "20px"
                        }), Object(i.a)(t, a.FROM_DESKTOP, {
                            fontSize: 24,
                            lineHeight: "28px"
                        }), t), "")
                    }, h, null === m || void 0 === m ? void 0 : m.map((function(e) {
                        var t = e.currency,
                            n = e.months,
                            r = e.price;
                        return ["".concat(r, " ").concat(t, " ").concat(n)]
                    }))), Object(D.b)("span", {
                        css: ne
                    }, Object(D.b)("span", {
                        css: re
                    }, d && "".concat(d, " z\u0142 ").concat(s && "0" !== d ? " + VAT " : "", "na start ")), p, " ", j && f && j))
                },
                oe = n("XsQI");
            a.a.createElement;

            function ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var ce = {
                    name: "1m1dd9p",
                    styles: "font-size:14px;line-height:18px;height:15px;display:block;"
                },
                se = a.a.memo((function(e) {
                    var t, n, r, s, l = e.name,
                        b = e.index,
                        O = e.payments,
                        p = e.productId,
                        f = e.mainImageUrl,
                        d = e.propositionName,
                        m = e.action,
                        h = e.priceTeaser,
                        j = e.titleTeaser,
                        g = Object(z.a)(e, ["name", "index", "payments", "productId", "mainImageUrl", "propositionName", "action", "priceTeaser", "titleTeaser"]),
                        y = Object(w.useTheme)(),
                        v = y.bp,
                        T = y.colors,
                        P = y.zIndex,
                        _ = Object(R.a)(),
                        E = X(),
                        S = E.carouselItems,
                        A = E.dispatch,
                        I = a.a.useState(!1),
                        C = Object(u.a)(I, 2),
                        N = C[0],
                        x = C[1],
                        L = a.a.useState(!1),
                        B = Object(u.a)(L, 2),
                        K = B[0],
                        W = B[1],
                        G = a.a.useRef(null),
                        U = Object(oe.a)(O),
                        V = a.a.useCallback((function() {
                            x(!0), W(!0)
                        }), []),
                        Y = a.a.useCallback((function() {
                            x(!1)
                        }), []),
                        J = a.a.useCallback((function() {
                            Object(F.e)(l, p, U, d, b);
                            var e = S.find((function(e) {
                                    return e.productId === p
                                })) || null,
                                t = e && e.details ? function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? ie(Object(n), !0).forEach((function(t) {
                                            Object(i.a)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, e.details, {
                                    payments: O,
                                    variantId: p,
                                    withPayments: !1
                                }) : null;
                            A({
                                type: "setDeviceDetails",
                                payload: t
                            })
                        }), [A, p, S, b, l, U, d, O]);
                    Object(M.a)(G, Y);
                    var q = a.a.useCallback((function(e) {
                            e && W(!0)
                        }), []),
                        Q = {
                            OPEN_PRODUCT_DETAILS: J
                        };
                    return Object(D.b)(k.a, {
                        onChange: q,
                        rootMargin: "300px",
                        role: "listitem",
                        css: S.length - 1 > b && (t = {
                            marginRight: 10
                        }, Object(i.a)(t, v.FROM_TABLET, {
                            marginRight: 20
                        }), Object(i.a)(t, v.FROM_LARGE_DESKTOP, {
                            marginRight: 30
                        }), t)
                    }, Object(D.b)(H.a, {
                        actionsMap: Q,
                        action: m
                    }, Object(D.b)("div", Object(o.a)({
                        role: "button",
                        onClick: _ ? V : void 0,
                        onTouchEnd: V,
                        ref: G,
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
                        }, Object(i.a)(n, v.FROM_TABLET, {
                            width: "40vw",
                            height: 425
                        }), Object(i.a)(n, v.FROM_DESKTOP, {
                            width: "27vw",
                            paddingTop: 30
                        }), Object(i.a)(n, v.FROM_LARGE_DESKTOP, {
                            width: "20vw"
                        }), n), "")
                    }, g), Object(D.b)("div", {
                        css: Object(c.a)(Object(i.a)({
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: T.WHITE,
                            zIndex: P.LAYER_1,
                            borderRadius: 6
                        }, v.FROM_DESKTOP, {
                            transform: "scaleY(".concat(N ? .9 : 1, ")"),
                            transformOrigin: "bottom",
                            transition: "transform .2s",
                            willChange: "transform"
                        }), "")
                    }), Object(D.b)("div", {
                        title: l,
                        css: Object(c.a)(Object(i.a)({
                            backgroundImage: 'url("'.concat(K ? f : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", '")'),
                            flex: "1 0 auto",
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            zIndex: P.LAYER_2
                        }, v.FROM_DESKTOP, {
                            transform: "translateY(".concat(N ? "-30px" : 0, ")"),
                            transition: "transform .4s",
                            willChange: "transform"
                        }), "")
                    }), Object(D.b)("strong", {
                        css: Object(c.a)((r = {
                            color: T.BLACK,
                            display: "block",
                            fontSize: 16,
                            lineHeight: "18px",
                            marginTop: 30,
                            zIndex: P.LAYER_2,
                            width: "100%",
                            minHeight: 45
                        }, Object(i.a)(r, v.FROM_TABLET, {
                            fontSize: 18,
                            lineHeight: "20px",
                            minHeight: 66
                        }), Object(i.a)(r, v.FROM_DESKTOP, {
                            fontSize: 24,
                            lineHeight: "28px",
                            minHeight: 88
                        }), r), "")
                    }, l, j && Object(D.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: j
                        },
                        css: Object(c.a)(Object(i.a)({
                            display: "none"
                        }, v.FROM_DESKTOP, {
                            display: "block",
                            color: T.BLACK
                        }), "")
                    })), Object(D.b)("div", {
                        css: Object(c.a)(Object(i.a)({
                            position: "relative",
                            zIndex: P.LAYER_2,
                            alignSelf: "flex-start",
                            maxHeight: 150,
                            overflow: "hidden",
                            width: "100%"
                        }, v.FROM_DESKTOP, {
                            maxHeight: N ? 150 : 0,
                            transition: "max-height .4s",
                            willChange: "max-height"
                        }), "")
                    }, Object(D.b)(w.Separator, {
                        css: Object(c.a)((s = {
                            marginBottom: 25
                        }, Object(i.a)(s, v.FROM_TABLET, {
                            marginBottom: 15
                        }), Object(i.a)(s, v.FROM_DESKTOP, {
                            transform: "scaleX(".concat(N ? 1 : 0, ")"),
                            transformOrigin: "left",
                            transition: "transform .5s",
                            transitionDelay: ".2s",
                            willChange: "transform"
                        }), s), "")
                    }), Object(D.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: h || ""
                        },
                        css: ce
                    }), Object(D.b)(ae, {
                        payments: O
                    })))))
                }));
            se.displayName = "ProductCarouselItem";
            var le = n("SHc4"),
                ue = n("v2bw");

            function be(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var Oe = function(e) {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? be(Object(n), !0).forEach((function(t) {
                                Object(i.a)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e, {
                        propositionName: Object(te.a)(e.payments).propositionName
                    })
                },
                pe = n("aoUj");
            a.a.createElement;
            var fe = {
                    name: "kjafn5",
                    styles: "display:flex;position:relative;"
                },
                de = {
                    name: "461vux",
                    styles: "position:absolute;top:0;right:0;left:0;"
                },
                me = {
                    name: "1fk9qgd",
                    styles: "position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);transition:all 0.25s ease-out;pointer-events:none;"
                },
                he = a.a.memo((function() {
                    var e, t = Object(w.useTheme)(),
                        n = t.bp,
                        r = t.colors,
                        s = Object(ue.b)().isInViewport,
                        b = X(),
                        O = b.pk,
                        p = b.providedProducts,
                        f = b.title,
                        d = b.dispatch,
                        m = b.deviceDetails,
                        h = b.carouselItems,
                        j = a.a.useState(!0),
                        g = Object(u.a)(j, 2),
                        y = g[0],
                        R = g[1],
                        _ = a.a.useState(),
                        E = Object(u.a)(_, 2),
                        S = E[0],
                        A = E[1],
                        I = a.a.useState(!1),
                        C = Object(u.a)(I, 2),
                        N = C[0],
                        x = C[1];
                    a.a.useEffect((function() {
                        s && function() {
                            var e;
                            l.a.async((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(h.length > 0 || N)) {
                                            t.next = 3;
                                            break
                                        }
                                        return R(!1), t.abrupt("return");
                                    case 3:
                                        if (R(!0), e = [], !p) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 8, l.a.awrap(Object(P.d)(p));
                                    case 8:
                                        e = t.sent, x(!0), t.next = 16;
                                        break;
                                    case 12:
                                        if (!O) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.next = 15, l.a.awrap(Object(P.c)(O));
                                    case 15:
                                        e = t.sent;
                                    case 16:
                                        Array.isArray(e) && e.length > 0 ? (d({
                                            type: "setCarouselItems",
                                            payload: e
                                        }), Object(F.f)(e), d({
                                            type: "setWasSeen",
                                            payload: !0
                                        }), R(!1)) : (pe.a.withScope((function(t) {
                                            var n = "";
                                            try {
                                                n = JSON.stringify(e).substr(0, 500)
                                            } catch (r) {}
                                            t.setTag("where", "ProductCarousel.Container.getItems"), pe.a.captureEvent({
                                                message: "ProductCarousel.getItems: Invalid products type",
                                                extra: {
                                                    content: n,
                                                    payload: {
                                                        pk: O,
                                                        providedProducts: p
                                                    }
                                                }
                                            })
                                        })), R(!1));
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), null, null, null, Promise)
                        }()
                    }), [d, O, p, h, N, s]);
                    var z = a.a.useCallback((function() {
                            d({
                                type: "setDeviceDetails",
                                payload: null
                            })
                        }), [d]),
                        k = a.a.useCallback((function(e) {
                            e.bounds && A(e.bounds.height)
                        }), []),
                        M = Object(T.useTransition)(m, {
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
                    return Object(D.b)("section", {
                        role: "region",
                        style: {
                            height: m ? S : void 0
                        },
                        css: fe
                    }, Object(D.b)("div", {
                        style: {
                            opacity: y || m ? 0 : 1
                        },
                        css: Object(c.a)(Object(i.a)({
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            background: r.STARDUST,
                            transition: "all 0.25s ease-out"
                        }, n.FROM_DESKTOP, {
                            minHeight: 700
                        }), "")
                    }, Object(D.b)("h2", {
                        css: Object(c.a)((e = {
                            fontSize: 24,
                            lineHeight: "26px",
                            paddingTop: 30,
                            margin: "0 7vw"
                        }, Object(i.a)(e, n.FROM_TABLET, {
                            fontSize: 40,
                            lineHeight: "42px"
                        }), Object(i.a)(e, n.FROM_DESKTOP, {
                            fontSize: 60,
                            lineHeight: "62px",
                            paddingTop: 50
                        }), e), "")
                    }, f), Object(D.b)(L, {
                        itemsLength: h.length
                    }, h.map((function(e, t) {
                        return Object(D.b)(se, Object(o.a)({
                            key: t,
                            index: t
                        }, Oe(e)))
                    })))), M((function(e, t) {
                        return t && Object(D.b)(T.animated.div, {
                            style: e,
                            css: de
                        }, m && Object(D.b)(v, {
                            margin: !0,
                            bounds: !0,
                            onResize: k
                        }, (function(e) {
                            var t = e.measureRef;
                            return Object(D.b)("div", {
                                ref: t
                            }, Object(D.b)(le.ProductDetails, Object(o.a)({
                                onCloseShelf: z
                            }, m)))
                        })))
                    })), Object(D.b)("div", {
                        css: me
                    }, Object(D.b)(w.Loader, {
                        style: {
                            opacity: y ? 1 : 0
                        }
                    })))
                }));
            he.displayName = "Container";
            a.a.createElement;
            var je = function(e) {
                return Object(D.b)(Q, e, Object(D.b)(he, null))
            };
            je.displayName = "ProductCarousel"
        },
        EUF5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("zjfJ"),
                a = n("ERkP"),
                o = n.n(a),
                i = n("IdR4"),
                c = n("Bc8N"),
                s = n("KcfE");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var u = function(e) {
                var t = e.currentPayment,
                    n = e.shouldShowNetPrices,
                    a = "ONETIME" === t.paymentType,
                    u = o.a.useMemo((function() {
                        var e = [];
                        a ? e.push({
                            price: n ? t.netPrice : t.priceGross,
                            monthFrom: 0,
                            monthTo: 0,
                            currency: "z\u0142"
                        }) : (t.monthlyPayments ? t.monthlyPayments : []).forEach((function(t) {
                            return e.push(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                                        Object(r.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, t, {
                                price: n ? t.netPrice : t.price
                            }))
                        }));
                        return Object(c.a)(e)
                    }), [a, t, n]);
                if (!t || !u) return null;
                var b = a ? "za ".concat(Object(i.a)(u.first.price), " z\u0142 ").concat(n ? "+ VAT" : "") : null,
                    O = a ? null : u.tail.map((function(e) {
                        return {
                            price: Object(i.a)(e.price, {
                                integersWithFractionDigits: !0
                            }),
                            currency: "z\u0142".concat(n ? " + VAT" : ""),
                            months: "".concat(e.monthTo, " ").concat(Object(s.a)(["rata", "raty", "rat"], e.monthTo))
                        }
                    })),
                    p = u.tail.length > 0 ? Object(i.a)(u.first.price) : null;
                return {
                    propositionName: t.propositionName,
                    oneTimePayment: b,
                    installmentPayment: O,
                    followingPriceStep: p
                }
            }
        }
    }
]);
//# sourceMappingURL=product_carousel.7283130604b4a57bc1d0.js.map