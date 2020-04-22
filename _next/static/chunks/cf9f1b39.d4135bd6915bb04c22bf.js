(window.omniJsonp = window.omniJsonp || []).push([
    [21], {
        kyr1: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return h
            }));
            var i = n("zjfJ"),
                c = n("5IAQ"),
                a = n("ERkP"),
                s = n.n(a),
                o = n("Kq2c"),
                b = n("4lZg"),
                O = n("Zscy"),
                r = n("yr6+"),
                l = n("cFFy"),
                d = n("l1C2");
            s.a.createElement;
            var p = {
                    name: "1npjj8s",
                    styles: "font-size:14px;display:inline-block;margin-bottom:20px;"
                },
                j = {
                    name: "n2r6ja",
                    styles: "font-size:14px;margin-top:5px;"
                },
                f = {
                    name: "13o7eu2",
                    styles: "display:block;"
                },
                m = {
                    name: "d1fxl2",
                    styles: "display:flex;justify-content:space-between;margin:10px 0 20px;font-size:14px;"
                },
                g = {
                    name: "noy1t9",
                    styles: "display:flex;padding:20px 0;"
                },
                y = {
                    name: "5e7ve0",
                    styles: "font-weight:bold;white-space:nowrap;"
                },
                h = s.a.memo((function() {
                    var e, t, n = Object(o.useTheme)(),
                        a = n.colors,
                        h = n.bp,
                        u = Object(b.b)(),
                        S = u.entry,
                        x = u.device,
                        T = u.entryMonthlyPrice,
                        v = u.devicePriceSteps,
                        z = u.deviceMonthlyPrice,
                        w = u.isPending,
                        E = Object(O.b)(),
                        M = E.dispatch,
                        R = E.singleOffers,
                        _ = E.showNetPrices,
                        F = E.currentSingleOffer;
                    if (s.a.useEffect((function() {
                            if (S) {
                                var e = R.find((function(e) {
                                    var t = Object(r.f)(e);
                                    return (null === t || void 0 === t ? void 0 : t.productCharacteristic.rateplanId) === S.productCode
                                }));
                                e && M({
                                    type: "setCurrentSingleOffer",
                                    payload: e
                                })
                            }
                        }), [M, S, R]), !F) return null;
                    var L = Object(r.d)(F).features.config[0].value.sticker;
                    return Object(d.b)("div", {
                        css: Object(c.a)((e = {
                            padding: "20px 20px 0 20px",
                            width: "100%",
                            minHeight: 200,
                            position: "relative"
                        }, Object(i.a)(e, h.FROM_TABLET, {
                            maxWidth: 400
                        }), Object(i.a)(e, h.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, Object(d.b)("div", {
                        css: Object(c.a)({
                            display: w ? "block" : "none",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)"
                        }, "")
                    }, Object(d.b)(o.Loader, {
                        css: Object(c.a)(Object(i.a)({
                            width: 50,
                            height: 50
                        }, h.FROM_TABLET, {
                            width: 80,
                            height: 80
                        }), "")
                    })), S && !w && Object(d.b)(s.a.Fragment, null, Object(d.b)("h2", {
                        css: Object(c.a)((t = {
                            fontSize: 24,
                            fontWeight: "bold",
                            marginBottom: 10,
                            lineHeight: "normal"
                        }, Object(i.a)(t, h.FROM_TABLET, {
                            marginBottom: 0
                        }), Object(i.a)(t, h.FROM_DESKTOP, {
                            fontSize: 40
                        }), t), "")
                    }, "Tw\xf3j wyb\xf3r"), Object(d.b)("span", {
                        css: p
                    }, S.msisdn && Object(l.a)(S.msisdn)), Object(d.b)("div", {
                        css: Object(c.a)({
                            borderBottom: "1px solid ".concat(a.CHROME, " ")
                        }, "")
                    }), Object(d.b)("div", {
                        css: Object(c.a)(Object(i.a)({
                            margin: "20px 0",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }, h.FROM_TABLET, {
                            marginBottom: 0
                        }), "")
                    }, Object(d.b)("p", {
                        css: Object(c.a)({
                            color: a.ORANGE_LIGHT,
                            fontWeight: "bold",
                            fontSize: 18,
                            margin: 0
                        }, "")
                    }, S.planName), L && Object(d.b)(o.Badge, {
                        backgroundColor: L.backgroundColor,
                        textColor: L.textColor
                    }, Object(d.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: L.text
                        }
                    }))), Object(d.b)("p", {
                        css: j
                    }, Object(d.b)("span", {
                        css: f
                    }, S.loyaltyLengthDescription)), Object(d.b)("p", {
                        css: Object(c.a)(Object(i.a)({
                            fontSize: 40,
                            fontWeight: "bold",
                            display: "inline-block",
                            paddingRight: 5,
                            margin: 0
                        }, h.FROM_DESKTOP, {
                            fontSize: 60,
                            margin: "15px 0"
                        }), "")
                    }, T), Object(d.b)("span", {
                        css: Object(c.a)(Object(i.a)({
                            fontSize: 16,
                            whiteSpace: "nowrap",
                            fontWeight: "bold",
                            display: "inline-block"
                        }, h.FROM_DESKTOP, {
                            fontSize: 30
                        }), "")
                    }, "z\u0142/mies. ", _ && " + VAT"), Object(d.b)("div", {
                        css: m
                    }, Object(d.b)("strong", null, "z rabatami"), Object(d.b)(o.A, {
                        onClick: function(e) {
                            e.preventDefault(), M({
                                type: "showOfferDetails",
                                payload: !0
                            })
                        }
                    }, "Szczeg\xf3\u0142y")), Object(d.b)("div", {
                        css: Object(c.a)({
                            borderBottom: "1px solid ".concat(a.CHROME, " ")
                        }, "")
                    })), x && !w && Object(d.b)(s.a.Fragment, null, Object(d.b)("div", {
                        css: g
                    }, Object(d.b)("img", {
                        css: Object(c.a)(Object(i.a)({
                            height: 80,
                            width: 80
                        }, h.FROM_TABLET, {
                            height: 100,
                            width: 100
                        }), ""),
                        src: x.imageUrl,
                        alt: x.name
                    }), Object(d.b)("div", {
                        css: Object(c.a)(Object(i.a)({
                            display: "flex",
                            flexDirection: "column",
                            paddingLeft: 10
                        }, h.ONLY_SMALL_MOBILE, {
                            paddingLeft: 5
                        }), "")
                    }, Object(d.b)("p", {
                        css: Object(c.a)({
                            fontWeight: "bold",
                            color: a.ORANGE_LIGHT,
                            margin: 0,
                            fontSize: 18
                        }, "")
                    }, x.name), v && Object(d.b)(s.a.Fragment, null, Object(d.b)("div", {
                        css: y
                    }, Object(d.b)("p", {
                        css: Object(c.a)(Object(i.a)({
                            fontSize: 30,
                            margin: "15px 0 10px",
                            display: "inline-block"
                        }, h.FROM_DESKTOP, {
                            fontSize: 40,
                            margin: "20px 0 0 "
                        }), "")
                    }, z), Object(d.b)("span", {
                        css: Object(c.a)(Object(i.a)({
                            fontSize: 16
                        }, h.FROM_DESKTOP, {
                            fontSize: 24
                        }), "")
                    }, _ && " + VAT", " z\u0142/mies.")), Object(d.b)("span", {
                        css: Object(c.a)(Object(i.a)({
                            fontSize: 16,
                            fontWeight: "bold"
                        }, h.FROM_DESKTOP, {
                            fontSize: 24
                        }), "")
                    }, "x ", v.last.monthTo, " raty")))), Object(d.b)(o.ArrowSeparator, {
                        css: Object(c.a)(Object(i.a)({}, h.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    })))
                }));
            h.displayName = "Description"
        }
    }
]);
//# sourceMappingURL=cf9f1b39.d4135bd6915bb04c22bf.js.map