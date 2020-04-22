(window.omniJsonp = window.omniJsonp || []).push([
    [15], {
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
                p = a("Kq2c"),
                u = a("mpXp"),
                b = a.n(u),
                m = a("ePoE"),
                d = a("s11k"),
                O = a("VfYs"),
                f = a("3oP0"),
                j = a("xWEo"),
                y = a("Zscy"),
                x = a("yr6+"),
                g = a("LsVC"),
                h = a("y6sE"),
                w = a("l1C2");
            l.a.createElement;
            var k = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                R = {
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
                C = {
                    name: "7w1zh4",
                    styles: "text-decoration:underline;font-size:14px;margin-left:5px;"
                },
                A = {
                    name: "bo11xp",
                    styles: "display:flex;align-items:center;margin-top:6px;"
                },
                B = {
                    name: "ov7rn5",
                    styles: "font-size:14px;margin:10px 0 0 10px;"
                },
                M = l.a.memo((function(e) {
                    var t, a = e.dispatch,
                        r = e.phoneNumber,
                        i = e.authorizationToken,
                        M = Object(p.useTheme)(),
                        I = M.bp,
                        P = M.colors,
                        D = Object(y.b)(),
                        F = D.processType,
                        L = D.currentSingleOffer,
                        N = D.offerType,
                        V = D.clearCache,
                        K = D.dispatch,
                        W = D.currentStep,
                        J = D.isUserLogged,
                        U = Object(h.b)().market,
                        H = l.a.useState(!1),
                        Y = Object(o.a)(H, 2),
                        G = Y[0],
                        q = Y[1],
                        Q = l.a.useState(!1),
                        X = Object(o.a)(Q, 2),
                        Z = X[0],
                        $ = X[1],
                        ee = l.a.useState({
                            status: null,
                            message: null
                        }),
                        te = Object(o.a)(ee, 2),
                        ae = te[0],
                        se = te[1],
                        ne = b()(),
                        re = l.a.useCallback((function(e) {
                            ! function() {
                                var t, s, n, o, l;
                                c.a.async((function(p) {
                                    for (;;) switch (p.prev = p.next) {
                                        case 0:
                                            if (L) {
                                                p.next = 2;
                                                break
                                            }
                                            return p.abrupt("return");
                                        case 2:
                                            return se({
                                                status: null,
                                                message: null
                                            }), q(!1), $(!0), t = Object(x.f)(L), s = Object(x.a)(L), n = (null === t || void 0 === t ? void 0 : t.productCharacteristic.rateplanId) || (null === s || void 0 === s ? void 0 : s.productCharacteristic.rateplanId), p.next = 10, c.a.awrap(Object(O.b)());
                                        case 10:
                                            return o = p.sent, p.prev = 11, p.next = 14, c.a.awrap(Object(d.h)({
                                                csrfToken: o,
                                                code: e.sms,
                                                token: i
                                            }));
                                        case 14:
                                            p.next = 21;
                                            break;
                                        case 16:
                                            return p.prev = 16, p.t0 = p.catch(11), se({
                                                status: "ERROR",
                                                message: p.t0.message
                                            }), $(!1), p.abrupt("return");
                                        case 21:
                                            return p.prev = 21, p.next = 24, c.a.awrap(Object(d.a)({
                                                csrfToken: o,
                                                phone: r
                                            }));
                                        case 24:
                                            if (L && N && F) {
                                                p.next = 27;
                                                break
                                            }
                                            return $(!1), p.abrupt("return");
                                        case 27:
                                            return l = function() {
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
                                                            }), K({
                                                                type: "setShouldUseDiscounts",
                                                                payload: !1
                                                            }), e.next = 19;
                                                            break;
                                                        case 8:
                                                            return e.prev = 8, Object(g.c)(W, N, U, J, window.location.pathname, "ADD_TO_CART", F), e.next = 12, c.a.awrap(Object(O.a)({
                                                                ratePlanId: n,
                                                                id: L.propositionId,
                                                                offerType: N,
                                                                processType: F
                                                            }));
                                                        case 12:
                                                            V(), window.location.href = "/koszyk/multi", e.next = 19;
                                                            break;
                                                        case 16:
                                                            e.prev = 16, e.t0 = e.catch(8), se({
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
                                            }, p.next = 30, c.a.awrap(l());
                                        case 30:
                                            p.next = 35;
                                            break;
                                        case 32:
                                            p.prev = 32, p.t1 = p.catch(21), -1 !== ["B2C_IN_CART", "B2B_IN_CART", "SERVER_ERROR"].indexOf(p.t1.message) ? K({
                                                type: "setProcessError",
                                                payload: {
                                                    type: "CHECK_MARKET_ERROR",
                                                    data: {
                                                        message: p.t1.message,
                                                        backTo: "goToVerification"
                                                    }
                                                }
                                            }) : (se({
                                                status: "ERROR",
                                                message: p.t1.message
                                            }), $(!1));
                                        case 35:
                                        case "end":
                                            return p.stop()
                                    }
                                }), null, null, [
                                    [11, 16],
                                    [21, 32]
                                ], Promise)
                            }()
                        }), [L, i, r, N, F, a, K, W, U, J, V]),
                        ce = l.a.useCallback((function() {
                            a({
                                type: "setAuthorizationToken",
                                payload: null
                            })
                        }), [a]),
                        oe = l.a.useCallback((function() {
                            c.a.async((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return se({
                                            status: null,
                                            message: null
                                        }), q(!0), e.next = 4, c.a.awrap(Object(d.g)({
                                            token: i
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), null, null, null, Promise)
                        }), [i]);
                    return l.a.useEffect((function() {
                        if (G) {
                            var e = setTimeout((function() {
                                return q(!1)
                            }), 1e4);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [G]), Object(w.b)("div", {
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
                    }, Object(w.b)("p", {
                        css: k
                    }, "Aby potwierdzi\u0107 konto wpisz kod z otrzymanego SMSa."), Object(w.b)("p", {
                        css: R
                    }, "Je\u017celi korzystasz z internetu mobilnego, kod z SMS-em autoryzacyjnym moesz odebra\u0107 w aplikacji obs\u0142uguj\u0105cej modem/router"), Object(w.b)(u.FormContext, ne, Object(w.b)("form", {
                        onSubmit: ne.handleSubmit(re)
                    }, Object(w.b)("label", {
                        css: T
                    }, Object(w.b)("span", {
                        css: z
                    }, "Wpisz kod SMS", " "), "wys\u0142any na numer", " ", Object(w.b)("span", {
                        css: S
                    }, r)), Object(w.b)("div", {
                        css: E
                    }, Object(w.b)(m.a, {
                        name: "sms",
                        ref: ne.register,
                        variant: "STARDUST",
                        placeholder: "Kod SMS",
                        type: "tel"
                    }), "ERROR" === ae.status && ae.message && Object(w.b)("div", {
                        css: Object(n.a)({
                            color: P.DANGER,
                            display: "flex"
                        }, "")
                    }, Object(w.b)(j.a, {
                        name: "warn",
                        css: v
                    }), Object(w.b)("p", {
                        css: _,
                        dangerouslySetInnerHTML: {
                            __html: ae.message
                        }
                    })), Object(w.b)("p", {
                        css: Object(n.a)({
                            fontSize: 14,
                            margin: "10px 0 0 0",
                            color: G ? P.DOVE : "inherit"
                        }, "")
                    }, "SMS nie dotar\u0142?", Object(w.b)(p.AButton, {
                        css: C,
                        onClick: oe,
                        disabled: G
                    }, "Wy\u015blij ponownie kod SMS")), G && Object(w.b)("div", {
                        css: A
                    }, Object(w.b)(j.a, {
                        name: "info-icon",
                        css: Object(n.a)({
                            width: 20,
                            height: 20,
                            color: P.INFO
                        }, "")
                    }), Object(w.b)("p", {
                        css: B
                    }, "SMS zosta\u0142 wys\u0142any ponownie")), Object(w.b)("div", {
                        css: Object(n.a)(Object(s.a)({
                            display: "flex",
                            flexFlow: "wrap",
                            marginTop: 20
                        }, I.FROM_TABLET, {
                            marginTop: 40,
                            flexFlow: "nowrap"
                        }), "")
                    }, Object(w.b)(p.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: ce,
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
                    }, "Wstecz"), Object(w.b)(p.Button, {
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
//# sourceMappingURL=4e1f92bb.785885a3c725c8faf6ea.js.map