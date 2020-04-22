(window.omniJsonp = window.omniJsonp || []).push([
    [12], {
        "98v5": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var i = n("zjfJ"),
                o = n("5IAQ"),
                a = n("ERkP"),
                b = n.n(a),
                c = n("Kq2c"),
                r = n("l1C2"),
                l = (b.a.createElement, b.a.memo((function(e) {
                    var t = e.text,
                        n = Object(c.useTheme)().colors;
                    return Object(r.b)("p", {
                        css: Object(o.a)({
                            margin: 0,
                            fontSize: 12,
                            lineHeight: "1",
                            color: n.SILVER
                        }, "")
                    }, t)
                })));
            l.displayName = "Subtitle";
            b.a.createElement;
            var s = b.a.memo((function(e) {
                var t = e.title,
                    n = e.phoneNumberLabel,
                    a = e.phoneNumber,
                    s = e.phoneNumberTitle,
                    m = e.subtitle,
                    p = e.isHidden,
                    h = Object(c.useTheme)(),
                    u = h.bp,
                    O = h.colors;
                return Object(r.b)(b.a.Fragment, null, Object(r.b)("p", {
                    css: Object(o.a)(Object(i.a)({
                        fontSize: 14,
                        fontWeight: "bold",
                        margin: "20px 0 10px",
                        lineHeight: "1"
                    }, u.FROM_TABLET, {
                        margin: "30px 0 10px",
                        fontSize: 16
                    }), "")
                }, t), Object(r.b)(c.SmoothHeightResizer, null, Object(r.b)(c.PhoneNumber, {
                    phoneNumber: a,
                    phoneNumberLabel: n,
                    title: s,
                    isHidden: p,
                    css: Object(o.a)(Object(i.a)({
                        fontSize: 18,
                        lineHeight: "1",
                        color: O.ORANGE_LIGHT,
                        fontWeight: "bold"
                    }, u.FROM_TABLET, {
                        fontSize: 24
                    }), "")
                })), Object(r.b)(l, {
                    text: m
                }))
            }));
            s.displayName = "PhoneNumberSection";
            b.a.createElement;
            var m = b.a.memo((function(e) {
                var t = e.title,
                    n = e.children,
                    a = Object(c.useTheme)().bp;
                return Object(r.b)("div", {
                    css: Object(o.a)(Object(i.a)({
                        marginBottom: 30
                    }, a.FROM_TABLET, {
                        marginBottom: 40,
                        flexBasis: "40%"
                    }), "")
                }, Object(r.b)("p", {
                    css: Object(o.a)(Object(i.a)({
                        fontSize: 18,
                        fontWeight: "bold",
                        margin: 0,
                        lineHeight: "1"
                    }, a.FROM_TABLET, {
                        fontSize: 24
                    }), "")
                }, t), n)
            }));
            m.displayName = "ContactSection";
            var p = n("a4CT");
            b.a.createElement;
            var h = {
                    name: "ywh2nl",
                    styles: "margin:0 0 10px 0;font-size:12px;line-height:16px;"
                },
                u = b.a.memo((function(e) {
                    var t = e.content,
                        n = e.disableMaxMoreInfoLink,
                        a = e.disableMaxLogo,
                        l = (e.disableConsultatImage, Object(c.useTheme)()),
                        u = l.bp,
                        O = l.colors;
                    return Object(r.b)(b.a.Fragment, null, t.map((function(e, t) {
                        var b, l;
                        return Object(r.b)("section", {
                            key: t,
                            css: Object(o.a)({
                                color: O.WHITE
                            }, "")
                        }, Object(r.b)("div", {
                            css: Object(o.a)(Object(i.a)({}, u.FROM_DESKTOP, {
                                display: "flex",
                                justifyContent: "space-between"
                            }), "")
                        }, e.salesPhoneNumber && Object(r.b)(m, {
                            title: "Chc\u0119 kupi\u0107"
                        }, Object(r.b)(s, {
                            title: "Dla wszystkich klient\xf3w",
                            phoneNumberLabel: e.salesPhoneNumber.label,
                            phoneNumber: e.salesPhoneNumber.number,
                            phoneNumberTitle: e.salesPhoneNumber.title,
                            isHidden: !0,
                            subtitle: "(zgodnie z cennikiem operatora)"
                        }), Object(r.b)(p.a, {
                            description: e.salesDescription,
                            css: Object(o.a)((b = {
                                marginTop: 20,
                                fontSize: 12
                            }, Object(i.a)(b, u.FROM_TABLET, {
                                marginTop: 30
                            }), Object(i.a)(b, "p", {
                                fontSize: 12,
                                lineHeight: "16px",
                                margin: "0 0 5px"
                            }), b), "")
                        })), (e.helpB2CphoneNumber || e.helpB2BphoneNumber) && Object(r.b)(m, {
                            title: "Potrzebuj\u0119 pomocy"
                        }, e.helpB2CphoneNumber && Object(r.b)(s, {
                            title: "Klient indywidualny",
                            phoneNumberLabel: e.helpB2CphoneNumber.label,
                            phoneNumber: e.helpB2CphoneNumber.number,
                            phoneNumberTitle: e.helpB2CphoneNumber.title,
                            isHidden: !0,
                            subtitle: "(zgodnie z cennikiem operatora)"
                        }), e.helpB2BphoneNumber && Object(r.b)(s, {
                            title: "Klient biznesowy",
                            phoneNumberLabel: e.helpB2BphoneNumber.label,
                            phoneNumber: e.helpB2BphoneNumber.number,
                            phoneNumberTitle: e.helpB2BphoneNumber.title,
                            isHidden: !0,
                            subtitle: "(zgodnie z cennikiem operatora)"
                        }), Object(r.b)(p.a, {
                            description: e.helpDescription,
                            css: Object(o.a)((l = {
                                marginTop: 20,
                                fontSize: 12
                            }, Object(i.a)(l, u.FROM_TABLET, {
                                marginTop: 30
                            }), Object(i.a)(l, "p", {
                                fontSize: 12,
                                lineHeight: "16px",
                                margin: "0 0 5px"
                            }), l), "")
                        }))), Object(r.b)(c.Separator, {
                            color: O.STONE
                        }), Object(r.b)("div", {
                            css: Object(o.a)(Object(i.a)({
                                margin: "20px 0",
                                display: "flex"
                            }, u.FROM_TABLET, {
                                margin: "30px 0"
                            }), "")
                        }, !a && Object(r.b)("img", {
                            src: "/static/images/max_logo.png",
                            alt: "Max - sztuczna inteligencja",
                            css: Object(o.a)(Object(i.a)({
                                width: 40,
                                height: 40,
                                marginRight: 12,
                                flexShrink: 0
                            }, u.FROM_TABLET, {
                                width: 60,
                                height: 60,
                                marginRight: 22
                            }), "")
                        }), Object(r.b)("div", null, Object(r.b)("p", {
                            css: h
                        }, "Podczas po\u0142\u0105czenia z obs\u0142ug\u0105 klienta najpierw porozmawiasz z Maxem - g\u0142osem sztucznej inteligencji Orange, asystentem g\u0142osowym stworzonym po to, aby Ci pom\xf3c."), !n && Object(r.b)(c.A, {
                            href: "https://www.orange.pl/view/max",
                            variant: "ON_DARK_BACKGROUND",
                            css: Object(o.a)(Object(i.a)({
                                fontSize: 12
                            }, u.FROM_TABLET, {
                                fontSize: 14
                            }), "")
                        }, "Dowiedz si\u0119 wi\u0119cej"))))
                    })))
                }));
            u.displayName = "Phone"
        },
        a4CT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var i = n("cxan"),
                o = n("5IAQ"),
                a = n("HbGN"),
                b = n("ERkP"),
                c = n.n(b),
                r = n("Kq2c"),
                l = n("l1C2"),
                s = (c.a.createElement, c.a.memo((function(e) {
                    var t = e.description,
                        n = Object(a.a)(e, ["description"]),
                        b = Object(r.useTheme)().colors;
                    return Object(l.b)("span", Object(i.a)({
                        dangerouslySetInnerHTML: {
                            __html: t
                        },
                        css: Object(o.a)({
                            display: "block",
                            color: b.WHITE,
                            fontSize: 14,
                            p: {
                                marginBottom: 10,
                                lineHeight: "18px",
                                fontSize: 14
                            }
                        }, "")
                    }, n))
                })));
            s.displayName = "Description"
        }
    }
]);
//# sourceMappingURL=57f72dea692272ae151b9ccf1566ded43d112d14.e8b2b02239926b18815a.js.map