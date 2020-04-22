(window.omniJsonp = window.omniJsonp || []).push([
    [15], {
        "0e5S": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return I
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
                m = a("Co0+"),
                d = a("sXW5"),
                O = a("ePoE"),
                f = a("s11k"),
                j = a("VfYs"),
                y = a("3oP0"),
                x = a("Zscy"),
                g = a("yr6+"),
                h = a("LsVC"),
                w = a("y6sE"),
                k = a("l1C2");
            l.a.createElement;
            var R = {
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
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                v = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                E = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                C = {
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
                M = {
                    name: "ov7rn5",
                    styles: "font-size:14px;margin:10px 0 0 10px;"
                },
                I = l.a.memo((function(e) {
                    var t, a = e.dispatch,
                        r = e.phoneNumber,
                        i = e.authorizationToken,
                        I = Object(p.useTheme)(),
                        P = I.bp,
                        D = I.colors,
                        F = Object(x.b)(),
                        L = F.processType,
                        N = F.currentSingleOffer,
                        V = F.offerType,
                        K = F.clearCache,
                        W = F.dispatch,
                        J = F.currentStep,
                        U = F.isUserLogged,
                        H = Object(w.b)().market,
                        Y = l.a.useState(!1),
                        G = Object(o.a)(Y, 2),
                        X = G[0],
                        q = G[1],
                        Q = l.a.useState(!1),
                        Z = Object(o.a)(Q, 2),
                        $ = Z[0],
                        ee = Z[1],
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
                                var t, s, n, o, l;
                                c.a.async((function(p) {
                                    for (;;) switch (p.prev = p.next) {
                                        case 0:
                                            if (N) {
                                                p.next = 2;
                                                break
                                            }
                                            return p.abrupt("return");
                                        case 2:
                                            return ne({
                                                status: null,
                                                message: null
                                            }), q(!1), ee(!0), t = Object(g.f)(N), s = Object(g.a)(N), n = (null === t || void 0 === t ? void 0 : t.productCharacteristic.rateplanId) || (null === s || void 0 === s ? void 0 : s.productCharacteristic.rateplanId), p.next = 10, c.a.awrap(Object(j.b)());
                                        case 10:
                                            return o = p.sent, p.prev = 11, p.next = 14, c.a.awrap(Object(f.h)({
                                                csrfToken: o,
                                                code: e.sms,
                                                token: i
                                            }));
                                        case 14:
                                            p.next = 21;
                                            break;
                                        case 16:
                                            return p.prev = 16, p.t0 = p.catch(11), ne({
                                                status: "ERROR",
                                                message: p.t0.message
                                            }), ee(!1), p.abrupt("return");
                                        case 21:
                                            return p.prev = 21, p.next = 24, c.a.awrap(Object(f.a)({
                                                csrfToken: o,
                                                phone: r
                                            }));
                                        case 24:
                                            if (N && V && L) {
                                                p.next = 27;
                                                break
                                            }
                                            return ee(!1), p.abrupt("return");
                                        case 27:
                                            return l = function() {
                                                return c.a.async((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, c.a.awrap(Object(y.c)({
                                                                msisdn: r,
                                                                processType: L,
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
                                                            }), W({
                                                                type: "setShouldUseDiscounts",
                                                                payload: !1
                                                            }), e.next = 19;
                                                            break;
                                                        case 8:
                                                            return e.prev = 8, Object(h.c)(J, V, H, U, window.location.pathname, "ADD_TO_CART", L), e.next = 12, c.a.awrap(Object(j.a)({
                                                                ratePlanId: n,
                                                                id: N.propositionId,
                                                                offerType: V,
                                                                processType: L
                                                            }));
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
                                            }, p.next = 30, c.a.awrap(l());
                                        case 30:
                                            p.next = 35;
                                            break;
                                        case 32:
                                            p.prev = 32, p.t1 = p.catch(21), -1 !== ["B2C_IN_CART", "B2B_IN_CART", "SERVER_ERROR"].indexOf(p.t1.message) ? W({
                                                type: "setProcessError",
                                                payload: {
                                                    type: "CHECK_MARKET_ERROR",
                                                    data: {
                                                        message: p.t1.message,
                                                        backTo: "goToVerification"
                                                    }
                                                }
                                            }) : (ne({
                                                status: "ERROR",
                                                message: p.t1.message
                                            }), ee(!1));
                                        case 35:
                                        case "end":
                                            return p.stop()
                                    }
                                }), null, null, [
                                    [11, 16],
                                    [21, 32]
                                ], Promise)
                            }()
                        }), [N, i, r, V, L, a, W, J, H, U, K]),
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
                                        }), q(!0), e.next = 4, c.a.awrap(Object(f.g)({
                                            token: i
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), null, null, null, Promise)
                        }), [i]);
                    return l.a.useEffect((function() {
                        if (X) {
                            var e = setTimeout((function() {
                                return q(!1)
                            }), 1e4);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [X]), Object(k.b)("div", {
                        css: Object(n.a)((t = {
                            padding: "0 20px",
                            width: "100%"
                        }, Object(s.a)(t, P.FROM_TABLET, {
                            padding: "0 ",
                            maxWidth: 400,
                            paddingBottom: 30
                        }), Object(s.a)(t, P.FROM_DESKTOP, {
                            padding: 0
                        }), t), "")
                    }, Object(k.b)("p", {
                        css: R
                    }, "Aby potwierdzi\u0107 konto wpisz kod z otrzymanego SMSa."), Object(k.b)("p", {
                        css: T
                    }, "Je\u017celi korzystasz z internetu mobilnego, kod z SMS-em autoryzacyjnym moesz odebra\u0107 w aplikacji obs\u0142uguj\u0105cej modem/router"), Object(k.b)(u.FormContext, re, Object(k.b)("form", {
                        onSubmit: re.handleSubmit(ce)
                    }, Object(k.b)("label", {
                        css: z
                    }, Object(k.b)("span", {
                        css: S
                    }, "Wpisz kod SMS", " "), "wys\u0142any na numer", " ", Object(k.b)("span", {
                        css: v
                    }, r)), Object(k.b)("div", {
                        css: E
                    }, Object(k.b)(O.a, {
                        name: "sms",
                        ref: re.register,
                        variant: "STARDUST",
                        placeholder: "Kod SMS",
                        type: "tel"
                    }), "ERROR" === se.status && se.message && Object(k.b)("div", {
                        css: Object(n.a)({
                            color: D.DANGER,
                            display: "flex"
                        }, "")
                    }, Object(k.b)(d.a, {
                        css: C
                    }), Object(k.b)("p", {
                        css: _,
                        dangerouslySetInnerHTML: {
                            __html: se.message
                        }
                    })), Object(k.b)("p", {
                        css: Object(n.a)({
                            fontSize: 14,
                            margin: "10px 0 0 0",
                            color: X ? D.DOVE : "inherit"
                        }, "")
                    }, "SMS nie dotar\u0142?", Object(k.b)(p.AButton, {
                        css: A,
                        onClick: ie,
                        disabled: X
                    }, "Wy\u015blij ponownie kod SMS")), X && Object(k.b)("div", {
                        css: B
                    }, Object(k.b)(m.a, {
                        css: Object(n.a)({
                            width: 20,
                            height: 20,
                            color: D.INFO
                        }, "")
                    }), Object(k.b)("p", {
                        css: M
                    }, "SMS zosta\u0142 wys\u0142any ponownie")), Object(k.b)("div", {
                        css: Object(n.a)(Object(s.a)({
                            display: "flex",
                            flexFlow: "wrap",
                            marginTop: 20
                        }, P.FROM_TABLET, {
                            marginTop: 40,
                            flexFlow: "nowrap"
                        }), "")
                    }, Object(k.b)(p.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: oe,
                        css: Object(n.a)(Object(s.a)({
                            flex: 1,
                            marginBottom: 20,
                            flexBasis: "100%"
                        }, P.FROM_TABLET, {
                            marginRight: 20,
                            marginBottom: 0,
                            flexBasis: "50%"
                        }), ""),
                        disabled: $
                    }, "Wstecz"), Object(k.b)(p.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_WHITE",
                        disabled: $,
                        css: Object(n.a)(Object(s.a)({
                            flex: 1,
                            flexBasis: "100%"
                        }, P.FROM_TABLET, {
                            flexBasis: "50%"
                        }), "")
                    }, "Dalej"))))))
                }))
        }
    }
]);
//# sourceMappingURL=4e1f92bb.084841f16097e32504a5.js.map