(window.omniJsonp = window.omniJsonp || []).push([
    [16], {
        "0e5S": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return M
            }));
            var s = a("zjfJ"),
                n = a("5IAQ"),
                r = a("VtSi"),
                c = a.n(r),
                o = a("zygG"),
                i = a("ERkP"),
                l = a.n(i),
                u = a("mpXp"),
                b = a.n(u),
                p = a("v4L6"),
                m = a("Kq2c"),
                d = a("ePoE"),
                O = a("s11k"),
                f = a("3oP0"),
                x = a("xWEo"),
                j = a("Zscy"),
                y = a("LsVC"),
                g = a("y6sE"),
                w = a("th3f"),
                h = a("l1C2");
            l.a.createElement;
            var R = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                k = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                T = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                z = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                S = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                E = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                v = {
                    name: "4331mo",
                    styles: "height:20px;margin-right:10px;min-width:20px;width:20px;"
                },
                _ = {
                    name: "w2cuf",
                    styles: "margin-top:0;font-size:14px;font-weight:bold;a{text-decoration:underline;}"
                },
                A = {
                    name: "7w1zh4",
                    styles: "text-decoration:underline;font-size:14px;margin-left:5px;"
                },
                B = {
                    name: "bo11xp",
                    styles: "display:flex;align-items:center;margin-top:6px;"
                },
                C = {
                    name: "ov7rn5",
                    styles: "font-size:14px;margin:10px 0 0 10px;"
                },
                M = l.a.memo((function(e) {
                    var t, a = e.dispatch,
                        r = e.phoneNumber,
                        i = e.authorizationToken,
                        M = Object(m.useTheme)(),
                        I = M.bp,
                        L = M.colors,
                        D = Object(j.b)(),
                        F = D.processType,
                        P = D.currentSingleOffer,
                        N = D.offerType,
                        K = D.clearCache,
                        V = D.dispatch,
                        W = D.currentStep,
                        J = D.isUserLogged,
                        U = Object(g.b)().market,
                        H = l.a.useState(!1),
                        G = Object(o.a)(H, 2),
                        Y = G[0],
                        q = G[1],
                        Q = l.a.useState(!1),
                        X = Object(o.a)(Q, 2),
                        Z = X[0],
                        $ = X[1],
                        ee = Object(w.a)().addItemToCart,
                        te = l.a.useState({
                            status: null,
                            message: null
                        }),
                        ae = Object(o.a)(te, 2),
                        se = ae[0],
                        ne = ae[1],
                        re = b()(),
                        ce = l.a.useCallback((function(e) {
                            ! function() {
                                var t, s;
                                c.a.async((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (P) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            return ne({
                                                status: null,
                                                message: null
                                            }), q(!1), $(!0), n.next = 7, c.a.awrap(Object(p.a)());
                                        case 7:
                                            return t = n.sent, n.prev = 8, n.next = 11, c.a.awrap(Object(O.h)({
                                                csrfToken: t,
                                                code: e.sms,
                                                token: i
                                            }));
                                        case 11:
                                            n.next = 18;
                                            break;
                                        case 13:
                                            return n.prev = 13, n.t0 = n.catch(8), ne({
                                                status: "ERROR",
                                                message: n.t0.message
                                            }), $(!1), n.abrupt("return");
                                        case 18:
                                            return n.prev = 18, n.next = 21, c.a.awrap(Object(O.a)(r));
                                        case 21:
                                            if (P && N && F) {
                                                n.next = 24;
                                                break
                                            }
                                            return $(!1), n.abrupt("return");
                                        case 24:
                                            return s = function() {
                                                return c.a.async((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, c.a.awrap(Object(f.c)({
                                                                msisdn: r,
                                                                processType: F,
                                                                push: !0
                                                            }));
                                                        case 2:
                                                            if (!e.sent.message) {
                                                                e.next = 8;
                                                                break
                                                            }
                                                            a({
                                                                type: "setIsVerificationError",
                                                                payload: !0
                                                            }), V({
                                                                type: "setShouldUseDiscounts",
                                                                payload: !1
                                                            }), e.next = 19;
                                                            break;
                                                        case 8:
                                                            return e.prev = 8, Object(y.c)(W, N, U, J, window.location.pathname, "ADD_TO_CART", F), e.next = 12, c.a.awrap(ee());
                                                        case 12:
                                                            K(), window.location.href = "/koszyk/multi", e.next = 19;
                                                            break;
                                                        case 16:
                                                            e.prev = 16, e.t0 = e.catch(8), ne({
                                                                status: "ERROR",
                                                                message: e.t0.message
                                                            });
                                                        case 19:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), null, null, [
                                                    [8, 16]
                                                ], Promise)
                                            }, n.next = 27, c.a.awrap(s());
                                        case 27:
                                            n.next = 32;
                                            break;
                                        case 29:
                                            n.prev = 29, n.t1 = n.catch(18), -1 !== ["B2C_IN_CART", "B2B_IN_CART", "SERVER_ERROR"].indexOf(n.t1.message) ? V({
                                                type: "setProcessError",
                                                payload: {
                                                    type: "CHECK_MARKET_ERROR",
                                                    data: {
                                                        message: n.t1.message,
                                                        backTo: "goToVerification"
                                                    }
                                                }
                                            }) : (ne({
                                                status: "ERROR",
                                                message: n.t1.message
                                            }), $(!1));
                                        case 32:
                                        case "end":
                                            return n.stop()
                                    }
                                }), null, null, [
                                    [8, 13],
                                    [18, 29]
                                ], Promise)
                            }()
                        }), [P, i, r, N, F, a, V, W, U, J, K, ee]),
                        oe = l.a.useCallback((function() {
                            a({
                                type: "setAuthorizationToken",
                                payload: null
                            })
                        }), [a]),
                        ie = l.a.useCallback((function() {
                            c.a.async((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return ne({
                                            status: null,
                                            message: null
                                        }), q(!0), e.next = 4, c.a.awrap(Object(O.g)({
                                            token: i
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), null, null, null, Promise)
                        }), [i]);
                    return l.a.useEffect((function() {
                        if (Y) {
                            var e = setTimeout((function() {
                                return q(!1)
                            }), 1e4);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [Y]), Object(h.b)("div", {
                        css: Object(n.a)((t = {
                            padding: "0 20px",
                            width: "100%"
                        }, Object(s.a)(t, I.FROM_TABLET, {
                            padding: "0 ",
                            maxWidth: 400,
                            paddingBottom: 30
                        }), Object(s.a)(t, I.FROM_DESKTOP, {
                            padding: 0
                        }), t), "")
                    }, Object(h.b)("p", {
                        css: R
                    }, "Aby potwierdzi\u0107 konto wpisz kod z otrzymanego SMSa."), Object(h.b)("p", {
                        css: k
                    }, "Je\u017celi korzystasz z internetu mobilnego, kod z SMS-em autoryzacyjnym moesz odebra\u0107 w aplikacji obs\u0142uguj\u0105cej modem/router"), Object(h.b)(u.FormContext, re, Object(h.b)("form", {
                        onSubmit: re.handleSubmit(ce)
                    }, Object(h.b)("label", {
                        css: T
                    }, Object(h.b)("span", {
                        css: z
                    }, "Wpisz kod SMS", " "), "wys\u0142any na numer", " ", Object(h.b)("span", {
                        css: S
                    }, r)), Object(h.b)("div", {
                        css: E
                    }, Object(h.b)(d.a, {
                        name: "sms",
                        ref: re.register,
                        variant: "STARDUST",
                        placeholder: "Kod SMS",
                        type: "tel"
                    }), "ERROR" === se.status && se.message && Object(h.b)("div", {
                        css: Object(n.a)({
                            color: L.DANGER,
                            display: "flex"
                        }, "")
                    }, Object(h.b)(x.a, {
                        name: "warn",
                        css: v
                    }), Object(h.b)("p", {
                        css: _,
                        dangerouslySetInnerHTML: {
                            __html: se.message
                        }
                    })), Object(h.b)("p", {
                        css: Object(n.a)({
                            fontSize: 14,
                            margin: "10px 0 0 0",
                            color: Y ? L.DOVE : "inherit"
                        }, "")
                    }, "SMS nie dotar\u0142?", Object(h.b)(m.AButton, {
                        css: A,
                        onClick: ie,
                        disabled: Y
                    }, "Wy\u015blij ponownie kod SMS")), Y && Object(h.b)("div", {
                        css: B
                    }, Object(h.b)(x.a, {
                        name: "info-icon",
                        css: Object(n.a)({
                            width: 20,
                            height: 20,
                            color: L.INFO
                        }, "")
                    }), Object(h.b)("p", {
                        css: C
                    }, "SMS zosta\u0142 wys\u0142any ponownie")), Object(h.b)("div", {
                        css: Object(n.a)(Object(s.a)({
                            display: "flex",
                            flexFlow: "wrap",
                            marginTop: 20
                        }, I.FROM_TABLET, {
                            marginTop: 40,
                            flexFlow: "nowrap"
                        }), "")
                    }, Object(h.b)(m.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: oe,
                        css: Object(n.a)(Object(s.a)({
                            flex: 1,
                            marginBottom: 20,
                            flexBasis: "100%"
                        }, I.FROM_TABLET, {
                            marginRight: 20,
                            marginBottom: 0,
                            flexBasis: "50%"
                        }), ""),
                        disabled: Z
                    }, "Wstecz"), Object(h.b)(m.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_WHITE",
                        disabled: Z,
                        css: Object(n.a)(Object(s.a)({
                            flex: 1,
                            flexBasis: "100%"
                        }, I.FROM_TABLET, {
                            flexBasis: "50%"
                        }), "")
                    }, "Dalej"))))))
                }))
        }
    }
]);
//# sourceMappingURL=4e1f92bb.eea07faeb60e41e298e9.js.map