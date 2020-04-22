(window.omniJsonp = window.omniJsonp || []).push([
    [25], {
        kyr1: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            var a = n("zjfJ"),
                c = n("5IAQ"),
                i = n("ERkP"),
                s = n.n(i),
                b = n("I6rk"),
                o = n("Kq2c"),
                r = n("4lZg"),
                l = n("Zscy"),
                O = n("yr6+"),
                j = n("cFFy"),
                p = n("vHnm"),
                d = n("UtMv"),
                m = n("l1C2");
            s.a.createElement;
            var f = {
                    name: "1npjj8s",
                    styles: "font-size:14px;display:inline-block;margin-bottom:20px;"
                },
                g = {
                    name: "n2r6ja",
                    styles: "font-size:14px;margin-top:5px;"
                },
                u = {
                    name: "13o7eu2",
                    styles: "display:block;"
                },
                y = {
                    name: "d1fxl2",
                    styles: "display:flex;justify-content:space-between;margin:10px 0 20px;font-size:14px;"
                },
                x = {
                    name: "1kizcr5",
                    styles: "display:flex;height:100%;justify-content:center;"
                },
                h = {
                    name: "1ylu0bo",
                    styles: "display:flex;flex-direction:column;flex-grow:1;"
                },
                v = s.a.memo((function() {
                    var e, t, n = Object(b.a)(),
                        i = Object(o.useTheme)(),
                        v = i.colors,
                        S = i.bp,
                        T = Object(r.b)(),
                        w = T.entry,
                        E = T.device,
                        z = T.entryMonthlyPrice,
                        F = T.isPending,
                        M = !(null === E || void 0 === E || !E.elements) && E.elements.length > 1,
                        R = n ? M ? "column" : "row" : "row-reverse",
                        _ = Object(l.b)(),
                        k = _.dispatch,
                        A = _.singleOffers,
                        B = _.showNetPrices,
                        C = _.currentSingleOffer;
                    if (s.a.useEffect((function() {
                            if (w) {
                                var e = A.find((function(e) {
                                    var t = Object(O.f)(e);
                                    return (null === t || void 0 === t ? void 0 : t.productCharacteristic.rateplanId) === w.productCode
                                }));
                                e && k({
                                    type: "setCurrentSingleOffer",
                                    payload: e
                                })
                            }
                        }), [k, w, A]), !C) return null;
                    var D = Object(O.d)(C).features.config[0].value.sticker;
                    return Object(m.b)("div", {
                        css: Object(c.a)((e = {
                            padding: "20px 20px 0 20px",
                            width: "100%",
                            minHeight: 200,
                            position: "relative"
                        }, Object(a.a)(e, S.FROM_TABLET, {
                            maxWidth: 400
                        }), Object(a.a)(e, S.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, Object(m.b)("div", {
                        css: Object(c.a)({
                            display: F ? "block" : "none",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }, "")
                    }, Object(m.b)(o.Loader, {
                        css: Object(c.a)(Object(a.a)({
                            width: 50,
                            height: 50
                        }, S.FROM_TABLET, {
                            width: 80,
                            height: 80
                        }), "")
                    })), w && !F && Object(m.b)(s.a.Fragment, null, Object(m.b)("h2", {
                        css: Object(c.a)((t = {
                            fontSize: 24,
                            fontWeight: "bold",
                            marginBottom: 10,
                            lineHeight: "normal"
                        }, Object(a.a)(t, S.FROM_TABLET, {
                            marginBottom: 0
                        }), Object(a.a)(t, S.FROM_DESKTOP, {
                            fontSize: 40
                        }), t), "")
                    }, "Tw\xf3j wyb\xf3r"), Object(m.b)("span", {
                        css: f
                    }, w.msisdn && Object(j.a)(w.msisdn)), Object(m.b)("div", {
                        css: Object(c.a)({
                            borderBottom: "1px solid ".concat(v.CHROME, " ")
                        }, "")
                    }), Object(m.b)("div", {
                        css: Object(c.a)(Object(a.a)({
                            margin: "20px 0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }, S.FROM_TABLET, {
                            marginBottom: 0
                        }), "")
                    }, Object(m.b)("p", {
                        css: Object(c.a)({
                            color: v.ORANGE_LIGHT,
                            fontWeight: "bold",
                            fontSize: 18,
                            margin: 0
                        }, "")
                    }, w.planName), D && Object(m.b)(o.Badge, {
                        backgroundColor: D.backgroundColor,
                        textColor: D.textColor
                    }, Object(m.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: D.text
                        }
                    }))), Object(m.b)("p", {
                        css: g
                    }, Object(m.b)("span", {
                        css: u
                    }, w.loyaltyLengthDescription)), Object(m.b)("p", {
                        css: Object(c.a)(Object(a.a)({
                            fontSize: 40,
                            fontWeight: "bold",
                            display: "inline-block",
                            paddingRight: 5,
                            margin: 0
                        }, S.FROM_DESKTOP, {
                            fontSize: 60,
                            margin: "15px 0"
                        }), "")
                    }, z), Object(m.b)("span", {
                        css: Object(c.a)(Object(a.a)({
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                            display: "inline-block"
                        }, S.FROM_DESKTOP, {
                            fontSize: 30
                        }), "")
                    }, "z\u0142/mies. ", B && " + VAT"), Object(m.b)("div", {
                        css: y
                    }, Object(m.b)("strong", null, "z rabatami"), Object(m.b)(o.A, {
                        onClick: function(e) {
                            e.preventDefault(), k({
                                type: "showOfferDetails",
                                payload: !0
                            })
                        }
                    }, "Szczeg\xf3\u0142y"))), E && !F && Object(m.b)(s.a.Fragment, null, Object(m.b)(o.Separator, null), Object(m.b)("div", {
                        css: Object(c.a)({
                            display: "flex",
                            flexDirection: R,
                            margin: "20px 0"
                        }, "")
                    }, Object(m.b)("div", {
                        css: x
                    }, Object(m.b)("img", {
                        css: Object(c.a)(Object(a.a)({
                            maxWidth: 100
                        }, S.FROM_DESKTOP, {
                            maxWidth: 130
                        }), ""),
                        src: E.imageUrl,
                        alt: E.name
                    })), M && Object(m.b)(o.ArrowSeparator, {
                        css: Object(c.a)(Object(a.a)({
                            margin: "20px 0 25px"
                        }, S.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }), Object(m.b)("div", {
                        css: h
                    }, Object(m.b)(p.a, null), !M && Object(m.b)(d.a, null))), M && Object(m.b)(s.a.Fragment, null, Object(m.b)(o.ArrowSeparator, {
                        css: Object(c.a)(Object(a.a)({
                            margin: "20px 0 25px"
                        }, S.ONLY_MOBILE, {
                            display: "none"
                        }), "")
                    }), Object(m.b)(d.a, null)), Object(m.b)(o.ArrowSeparator, {
                        css: Object(c.a)(Object(a.a)({
                            marginTop: 30
                        }, S.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    })))
                }));
            v.displayName = "Description"
        }
    }
]);
//# sourceMappingURL=cf9f1b39.bd2e413ab8d6a6804323.js.map