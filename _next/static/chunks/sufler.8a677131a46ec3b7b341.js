(window.omniJsonp = window.omniJsonp || []).push([
    [43, 6, 9, 10], {
        "/G5g": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return O
            }));
            var r = n("cxan"),
                a = n("5IAQ"),
                c = n("HbGN"),
                i = n("ERkP"),
                o = n("ZsHj"),
                s = n("LTa3"),
                u = n("fQwf"),
                l = n("4OHh"),
                d = n("pMch"),
                p = n("B5/x"),
                f = n("kEwR"),
                b = n("l1C2"),
                O = (i.createElement, function(e) {
                    var t = e.action,
                        n = e.actionsMap,
                        i = e.wrapperCss,
                        O = e.onClick,
                        h = e.disabled,
                        m = Object(c.a)(e, ["action", "actionsMap", "wrapperCss", "onClick", "disabled"]),
                        v = {
                            display: "block",
                            cursor: "pointer"
                        },
                        y = Object(f.c)().show,
                        j = Object(o.a)(t, n, O).onClick,
                        g = function(e) {
                            return h ? void 0 : j(e)
                        };
                    if (Object(p.a)(t)) return Object(b.b)("div", Object(r.a)({
                        role: "button",
                        onClick: function(e) {
                            g(e), !h && y(t.params)
                        },
                        title: t.title,
                        css: Object(a.a)([v, i], "")
                    }, m));
                    if (Object(s.a)(t)) {
                        var E = h ? void 0 : "genesys-contact1";
                        return Object(b.b)("div", Object(r.a)({
                            role: "button",
                            onClick: g,
                            title: t.title,
                            css: Object(a.a)([v, i], "")
                        }, m, {
                            id: E
                        }))
                    }
                    if (Object(u.a)(t) && t.params) {
                        var S = h ? void 0 : "widget-popup-cmb";
                        return Object(b.b)("div", Object(r.a)({
                            role: "button",
                            onClick: g,
                            title: t.title,
                            css: Object(a.a)([v, i], "")
                        }, m, {
                            className: S,
                            "data-queue": t.params.queue || "",
                            "data-opis": t.params.description || "",
                            "data-cmb_profile": t.params.profile || "",
                            "data-personalscenario": t.params.personalScenario || ""
                        }))
                    }
                    return Object(l.a)(t) ? Object(b.b)("div", Object(r.a)({
                        role: "button",
                        title: t.title,
                        onClick: g,
                        css: Object(a.a)([v, i], "")
                    }, m)) : Object(d.a)(t) ? Object(b.b)("a", Object(r.a)({
                        onClick: g,
                        title: t.title,
                        href: t.action,
                        css: Object(a.a)([v, i], "")
                    }, m)) : null
                });
            O.displayName = "ActionWrapper"
        },
        "0V9e": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 20 20",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.5 16l-5-5 2-2 3 3 8-8 2 2z"
                    }))
                })));
            i.displayName = "CheckMarkIcon"
        },
        "0eZi": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        viewBox: "0 0 53 38",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fillRule: "evenodd",
                        d: "M51.44 38H1.56C.7 38 0 37.32 0 36.48v-3.04h21.82c0 .84.7 1.52 1.56 1.52h6.24c.86 0 1.56-.68 1.56-1.52H53v3.04c0 .84-.7 1.52-1.56 1.52zM3.12 27.36v-.06V3.04C3.12 1.36 4.51 0 6.24 0h40.52c1.73 0 3.12 1.36 3.12 3.04v28.88H3.12v-4.56zm3.12 1.52h40.52V3.04H6.24v25.84zm1.56-9.16v-1.48c5.16 0 9.35 4.08 9.35 9.12h-1.53c0-4.03-3.69-7.63-7.82-7.64zm6.23 7.64h-1.51c0-2.34-1.71-4.5-4.72-4.61l-.01-1.47c3.44 0 6.24 2.73 6.24 6.08zm-3.12 0H9.35c0-.86-.68-1.52-1.56-1.52v-1.52c1.72 0 3.1 1.38 3.12 3.04z",
                        fill: "currentColor"
                    }))
                })));
            i.displayName = "InternetLteIcon"
        },
        "0zX2": function(e, t, n) {
            "use strict";
            var r = n("P0jV");
            e.exports = r.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function a(e) {
                    var r = e;
                    return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = a(window.location.href),
                    function(t) {
                        var n = r.isString(t) ? a(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
            }() : function() {
                return !0
            }
        },
        "3oP0": function(e, t, n) {
            "use strict";
            n.d(t, "k", (function() {
                return b
            })), n.d(t, "e", (function() {
                return O
            })), n.d(t, "j", (function() {
                return h
            })), n.d(t, "l", (function() {
                return m
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "d", (function() {
                return y
            })), n.d(t, "g", (function() {
                return g
            })), n.d(t, "f", (function() {
                return E
            })), n.d(t, "i", (function() {
                return S
            })), n.d(t, "h", (function() {
                return T
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "a", (function() {
                return w
            }));
            var r = n("fGyu"),
                a = n("VtSi"),
                c = n.n(a),
                i = n("pu3o"),
                o = n.n(i),
                s = n("com9"),
                u = n("VfYs"),
                l = n("QVQ0"),
                d = n("yr6+"),
                p = n("OS0P"),
                f = ["RETENTION_NNAKED", "MIGRATION_TO_3P", "MIGRATION_TO_3P_WITH_NP_INT", "MIGRATION_MOD_TECH", "MIGRATION_MOD_TECH_NNAKED", "RETENTION"],
                b = function() {
                    var e, t;
                    return c.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, c.a.awrap(Object(u.b)());
                            case 2:
                                return e = n.sent, n.next = 5, c.a.awrap(s.a.get("/hapi/customerSmsVerification/loggedCustomerData", {
                                    headers: {
                                        csrftoken: e
                                    }
                                }));
                            case 5:
                                return t = n.sent, n.abrupt("return", t.data);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                O = function() {
                    var e, t;
                    return c.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, c.a.awrap(Object(u.b)());
                            case 2:
                                return e = n.sent, n.next = 5, c.a.awrap(s.a.get("/hapi/pwa/v1/transactions/getTransactions", {
                                    headers: {
                                        csrftoken: e
                                    }
                                }));
                            case 5:
                                return t = n.sent, n.abrupt("return", t.data);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                h = function() {
                    var e, t;
                    return c.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, c.a.awrap(Object(u.b)());
                            case 2:
                                return e = n.sent, n.next = 5, c.a.awrap(s.a.get("/hapi/customerSmsVerification/getMobileAccounts", {
                                    headers: {
                                        csrftoken: e
                                    }
                                }));
                            case 5:
                                return t = n.sent, n.abrupt("return", t.data);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                m = function(e) {
                    var t, n, r, a;
                    return c.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.id, n = e.accountCode, i.next = 3, c.a.awrap(Object(u.b)());
                            case 3:
                                return r = i.sent, i.next = 6, c.a.awrap(s.a.post("/hapi/customerSmsVerification/selectAccount", o.a.stringify({
                                    accountId: t,
                                    accountCode: n
                                }), {
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 6:
                                return a = i.sent, i.abrupt("return", a.data);
                            case 8:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, null, Promise)
                },
                v = function(e) {
                    var t, n, r, a, i;
                    return c.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return t = e.msisdn, n = e.processType, r = e.push, a = Object(u.b)(), o.next = 4, c.a.awrap(s.a.get("/hapi/customerSmsVerification/getAccount", {
                                    params: {
                                        msisdn: t,
                                        processType: n,
                                        push: r
                                    },
                                    headers: {
                                        csrftoken: a
                                    }
                                }));
                            case 4:
                                return i = o.sent, o.abrupt("return", i.data);
                            case 6:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, null, Promise)
                },
                y = function(e) {
                    var t, n, r, a, i, o, d;
                    return c.a.async((function(p) {
                        for (;;) switch (p.prev = p.next) {
                            case 0:
                                return t = Object(l.a)(e.offerType), n = "LEAD" === t, p.next = 4, c.a.awrap(Object(u.b)());
                            case 4:
                                return r = p.sent, a = {
                                    ACTIVATION: "pwaLoveActivation"
                                }, i = function(e) {
                                    return {
                                        preZipCode: "",
                                        postalCode: "",
                                        town: e.city,
                                        line1: e.street,
                                        line2: e.roadNo,
                                        appartmentNo: e.apartmentNo,
                                        streetId: e.cbsIdStreet,
                                        cityId: e.cbsIdCity,
                                        streetNumber: e.roadNo
                                    }
                                }, p.next = 9, c.a.awrap(s.a.post("/hapi/pwa/v2/api/offers", {
                                    factory: t,
                                    process: n ? a[e.processType] : e.processType,
                                    configComponentPk: n ? e.configComponentPk : e.filterPk,
                                    suflerPk: e.pk,
                                    wwtAddress: "FIX" === e.__type && !f.includes(e.processType) && i(e.leadAddressForm) || void 0,
                                    msisdn: "MOBILE" === e.__type && e.msisdn
                                }, {
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 9:
                                if (o = p.sent, d = ["Error0003", "Error0005"], !("errorCode" in o.data)) {
                                    p.next = 14;
                                    break
                                }
                                if (!d.includes(o.data.errorCode)) {
                                    p.next = 14;
                                    break
                                }
                                throw new Error("NO_OFFERS_FIX");
                            case 14:
                                if (!("message" in o.data)) {
                                    p.next = 16;
                                    break
                                }
                                throw new Error(o.data.message);
                            case 16:
                                if (o) {
                                    p.next = 18;
                                    break
                                }
                                throw new Error("No response");
                            case 18:
                                return p.abrupt("return", {
                                    offers: o.data
                                });
                            case 19:
                            case "end":
                                return p.stop()
                        }
                    }), null, null, null, Promise)
                },
                j = function(e) {
                    return function(t, n) {
                        var r, a;
                        return c.a.async((function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return r = JSON.stringify({
                                        filter: n,
                                        html: t
                                    }), i.next = 3, c.a.awrap(s.a.post(e, r));
                                case 3:
                                    return a = i.sent, i.abrupt("return", a.data);
                                case 5:
                                case "end":
                                    return i.stop()
                            }
                        }), null, null, null, Promise)
                    }
                },
                g = j("/hapi/cbs/streetauto"),
                E = j("/hapi/cbs/cityauto"),
                S = function(e) {
                    var t, n;
                    return c.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, c.a.awrap(Object(u.b)());
                            case 2:
                                return t = r.sent, r.next = 5, c.a.awrap(s.a.post("/wwt/cbsRedirect", e, {
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 5:
                                return n = r.sent, r.abrupt("return", n.data);
                            case 7:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                T = function(e) {
                    var t;
                    return c.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, c.a.awrap(s.a.get("/hapi/pwa/v1/offerSelector/fix/tvOffer?id=".concat(e)));
                            case 2:
                                return t = n.sent, n.abrupt("return", t.data);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                C = function(e) {
                    var t, n, a, i, o, l, f, b, O, h, m, v, y, j, g, E, S, T, C, w, x, k, P, z;
                    return c.a.async((function(N) {
                        for (;;) switch (N.prev = N.next) {
                            case 0:
                                return t = e.hasDevice, n = e.hasTv, a = e.currentSingleOffer, i = e.selectedOtherPackages, o = e.selectedTVPackages, l = e.doesPhoneLineExist, f = e.processType, N.next = 3, c.a.awrap(Object(u.b)());
                            case 3:
                                return b = N.sent, O = Object(d.b)(a), h = Object(d.e)(a), m = {
                                    ACTIVATION: "NEW"
                                }, v = Object(p.a)(Object(p.b)(a)).filter((function(e) {
                                    return ["sfh", "activation"].includes(e.id)
                                })) || [], y = Object(p.a)(Object(p.c)(a)) || [], j = o ? o.map((function(e) {
                                    return e.id
                                })) : [], g = i ? i.map((function(e) {
                                    return e.id
                                })) : [], E = g.filter((function(e) {
                                    return y.find((function(t) {
                                        return t.id === e
                                    }))
                                })), S = [].concat(Object(r.a)(j), Object(r.a)(E)), T = g.filter((function(e) {
                                    return v.find((function(t) {
                                        return t.id === e
                                    }))
                                })), C = [].concat(Object(r.a)(T), Object(r.a)(E)), w = g.filter((function(e) {
                                    return !C.includes(e)
                                })).concat(C.filter((function(e) {
                                    return !g.includes(e)
                                }))), x = (null === O || void 0 === O ? void 0 : O.productCharacteristic.tag) || "", k = (null === h || void 0 === h ? void 0 : h.code) || "", P = (null === O || void 0 === O ? void 0 : O.code) || "", z = (null === O || void 0 === O ? void 0 : O.productCharacteristic.isDeregulated) ? "DEG" : "REG", (null === O || void 0 === O ? void 0 : O.productCharacteristic.isLineMaintenance) && l && T.push("lineMaintenance"), N.abrupt("return", s.a.post("/love/konfigurator/wybierz", {
                                    hasDevice: t,
                                    hasTV: n,
                                    internetAdditionals: w,
                                    internetCode: P,
                                    mobileDeviceCode: "",
                                    mobileProcessType: m[f] || "NEW",
                                    offerAdditionals: T,
                                    offerType: z,
                                    processType: f,
                                    service: x,
                                    tvAdditionals: S,
                                    tvCode: k
                                }, {
                                    headers: {
                                        csrftoken: b
                                    }
                                }));
                            case 23:
                            case "end":
                                return N.stop()
                        }
                    }), null, null, null, Promise)
                },
                w = function(e) {
                    var t, n, r, a;
                    return c.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.propositionId, n = e.secondaryChoiceOffer, r = void 0 !== n && n, i.next = 3, c.a.awrap(Object(u.b)());
                            case 3:
                                return a = i.sent, i.next = 6, c.a.awrap(s.a.get("/hapi/fix/cart/remove?_=".concat(Date.now()), {
                                    headers: {
                                        csrftoken: a
                                    }
                                }));
                            case 6:
                                return i.next = 8, c.a.awrap(s.a.post("/hapi/fix/cart/add?propositionId=".concat(t, "&secondaryChoiceOffer=").concat(r), {}, {
                                    headers: {
                                        csrftoken: a
                                    }
                                }));
                            case 8:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        "48NU": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            var r = n("cxan"),
                a = n("5IAQ"),
                c = n("zjfJ"),
                i = n("HbGN"),
                o = n("ERkP"),
                s = n.n(o),
                u = n("I6rk"),
                l = n("Kq2c"),
                d = n("h8xc"),
                p = n("y6sE"),
                f = n("l1C2");
            s.a.createElement;

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        Object(c.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = {
                    name: "1r2f04i",
                    styles: "margin-bottom:10px;"
                },
                m = {
                    name: "w7p5zd",
                    styles: "float:right;width:12px;height:12px;"
                },
                v = s.a.memo((function(e) {
                    var t, n = e.content,
                        o = Object(i.a)(e, ["content"]),
                        b = Object(l.useTheme)().bp,
                        v = Object(u.a)(),
                        y = Object(p.b)().hasTouch,
                        j = s.a.useCallback((function(e) {
                            var t = e.close;
                            return Object(f.b)(s.a.Fragment, null, Object(f.b)("div", {
                                css: h
                            }, Object(f.b)(d.a, {
                                role: "button",
                                onClick: t,
                                css: m
                            })), n)
                        }), [n]);
                    return Object(f.b)(l.Tooltip, Object(r.a)({
                        content: y ? j : n,
                        withPointer: !y,
                        sides: y ? ["TOP", "BOTTOM"] : void 0,
                        trigger: y ? "CLICK" : "HOVER",
                        interceptPosition: function(e) {
                            return v ? {
                                side: e.side,
                                position: O({}, e.position, {
                                    left: 20,
                                    right: 20
                                })
                            } : e
                        },
                        safeSpace: v ? {
                            top: 80,
                            bottom: 50
                        } : {
                            top: 110
                        },
                        css: Object(a.a)((t = {
                            width: "auto"
                        }, Object(c.a)(t, b.ONLY_MOBILE, {
                            left: 20,
                            right: 20
                        }), Object(c.a)(t, b.FROM_TABLET, {
                            width: 280
                        }), t), "")
                    }, o))
                }))
        },
        "4GeQ": function(e, t, n) {
            "use strict";
            var r = n("P0jV");
            e.exports = function(e, t, n) {
                return r.forEach(n, (function(n) {
                    e = n(e, t)
                })), e
            }
        },
        "4lZg": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return l
            }));
            var r = n("cxan"),
                a = n("HbGN"),
                c = n("ERkP"),
                i = n.n(c),
                o = n("l1C2"),
                s = (i.a.createElement, i.a.createContext(null)),
                u = function(e) {
                    var t = e.summaryData,
                        n = Object(a.a)(e, ["summaryData"]);
                    return Object(o.b)(s.Provider, Object(r.a)({
                        value: t
                    }, n))
                };
            u.displayName = "SummaryContextProvider";
            var l = function() {
                var e = i.a.useContext(s);
                if (null === e) throw Error("useSummary: Please provide SummaryContext value.");
                return e
            }
        },
        "4oY/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 2461 3542",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M274.2 2902.7h208.7c.2 4.3.4 8.5.4 12.6v240c0 22-.4 44 .2 66 .3 11.3 1.2 22.7 3.8 33.7 9.9 42 41.1 70.2 83.9 76.5 9.2 1.4 18.6 2.1 27.9 2.1 130.7.1 261.3.1 392 .1h9.2c.9-.9 1.2-1.1 1.4-1.3.2-.2.4-.5.5-.8.2-.6.3-1.3.4-2 .1-.7.1-1.3.1-2 .1-103 .1-206 .2-309 0-.3.2-.6.6-2.3 33.8-30.1 68.6-61 105-93.3v408.3c7.8 2.4 504.1 3.1 517.7.9v-516.5h-394c4.6-7.8 82.9-78.9 118.8-108.2h273.5c1.4-1 1.8-1.2 2-1.4.2-.2.3-.6.4-.9.2-1.3.6-2.6.6-3.9v-1131c0-1.3-.3-2.6-.5-3.8-7.3-2.2-507.2-2.8-519.5-.5v487.8c-7.5-3.6-91.2-77-104.2-91.1v-399.4c-4.8-.1-9-.3-13.2-.3h-396c-13.4 0-26.7 1.1-39.4 5.4-40.7 13.7-63 42.9-69.9 84.5-1.4 8.5-1.8 17.3-1.8 25.9-.1 126.7-.1 253.3-.1 380v16.8c-7.5 2.1-189.1 2.8-208 .9-.1-3.6-.4-7.5-.4-11.3 0-61 .1-122 .1-183v-1669c0-45.2 11.5-87.1 37.5-124.3 32.5-46.6 77.8-73.9 133-85 13-2.6 26.4-3.8 39.7-3.8 298.3-.1 597-.1 895.7-.1 108 0 216 .3 324 .1 19.1 0 34.3 6.1 48 19.9 82.2 82.8 165 165 247.5 247.4 67 66.9 134 133.7 200.9 200.7 81.5 81.6 162.8 163.4 244.3 245 10.2 10.3 15.9 21.9 15.3 36.5-.2 4.3 0 8.7 0 13v645c0 639 .1 1278 .3 1917 0 32.5-4.1 63.8-17.2 93.6-29.2 65.9-80.1 105-150.2 119.2-15.6 3.1-31.7 4.4-47.6 4.4-585 .2-1170 .2-1755 .2-51.2 0-98.2-13.3-138.9-45.3-40.6-31.9-64.3-74.2-73.6-124.5-3-16-4.3-32.4-4.4-48.7-.3-136.3-.1-272.7 0-409 .3-3.5.3-7.1.3-11.8zm1461-712.2v516.6c16.7 2.1 510.1 1.2 516.8-.7v-515.9h-516.8zm518.6-107.3v-11.1c0-131.3.1-262.6-.2-393.9 0-11.2-1.2-22.7-3.6-33.7-8.7-39.6-32.8-65.6-72.2-76.1-11.8-3.1-24.3-4.7-36.5-4.7-132.3-.3-264.6-.2-396.9-.2-2.9 0-5.7.4-8.5.7-.4 1.7-.8 2.6-.8 3.6 0 170-.1 339.9-.1 509.9 0 1.3.3 2.6.5 3.9 0 .3.4.5.6.8.2.2.5.4.8.8h516.9zM1734.4 2816c-2.1 14-1.4 509.8.8 517.8h10.6c131.3 0 262.6 0 393.8-.1 9.3 0 18.7-.6 27.8-2.3 43.1-8 71.4-32.7 82-75.8 2.8-11.2 4.1-23.1 4.1-34.6.3-131.6.2-263.2.2-394.8 0-3.2-.3-6.5-.5-10.2h-518.8zm-1002 295.9c5.8-4.9 11.7-9.6 17.3-14.6 136.3-121.1 272.6-242.2 408.8-363.4 48.3-43 97-85.5 144.8-129.1 42.6-38.9 59.5-87.5 48.9-144.5-6.6-35.3-25.3-64-52-87.8-184.4-163.8-368.7-327.8-553-491.6-3.7-3.3-7.7-6.3-11.8-9.2-1.7-1.2-3.9-1.7-7-3v308.8h-10.6c-184.7 0-369.3 0-554 .1-11 0-22.1.6-32.8 2.5-56.7 10.1-97.6 40.6-119.3 94.9-8.4 21-11.7 42.9-11.7 65.5.1 99.7 0 199.3.1 299 0 10.3.6 20.7 2.4 30.8 10.5 60.1 43.4 102 101.5 122.8 19.3 6.9 39.4 9.5 59.9 9.4 36-.1 72 0 108 0h445c4.2 0 8.4.2 13.2.4v307.9c.8.2 1.5.6 2.3 1.1z"
                    }))
                })));
            i.displayName = "SimMnpIcon"
        },
        "5FZF": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var r = {
                    M: 0,
                    B: 1,
                    N: 2,
                    D: 3
                },
                a = {
                    0: ["zero", "zerowy", "zerowym", "zerowego"],
                    1: ["jeden", "pierwszy", "pierwszym", "pierwszego"],
                    2: ["dwa", "drugi", "drugim", "drugiego"],
                    3: ["trzy", "trzeci", "trzecim", "trzeciego"],
                    4: ["cztery", "czwarty", "czwartym", "czwartego"],
                    5: ["pi\u0119\u0107", "pi\u0105ty", "pi\u0105tym", "pi\u0105tego"],
                    6: ["sze\u015b\u0107", "sz\xf3sty", "sz\xf3stym", "sz\xf3stego"],
                    7: ["siedem", "si\xf3dmy", "si\xf3dmym", "si\xf3dmego"],
                    8: ["osiem", "\xf3smy", "\xf3smym", "\xf3smego"],
                    9: ["dziewi\u0119\u0107", "dziewi\u0105ty", "dziewi\u0105tym", "dziewi\u0105tego"],
                    10: ["dziesi\u0119\u0107", "dziesi\u0105ty", "dziesi\u0105tym", "dziesi\u0105tego"],
                    11: ["jedena\u015bcie", "jedenasty", "jedenastym", "jedenastego"],
                    12: ["dwana\u015bcie", "dwunasty", "dwunastym", "dwunastego"],
                    24: ["dwadzie\u015bcia cztery", "dwudziesty czwarty", "dwudziestym czwartym", "dwudziestego czwartego"]
                },
                c = function(e, t) {
                    return (a[e] || [])[r[t]] || ""
                }
        },
        "5s2p": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 31536e7,
                    r = new Date;
                r.setTime(r.getTime() + n), document.cookie = "".concat(e, "=").concat(t, ";expires=").concat(r.toUTCString(), ";")
            }
        },
        "6LC/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        x: 0,
                        y: 0,
                        viewBox: "453.5 -290.7 525 850",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M803.5-290.7h-300c-27.6 0-50 22.4-50 50v750c0 27.6 22.4 50 50 50h425c27.6 0 50-22.4 50-50v-625l-175-175zm-300 400c0-13.8 11.2-25 25-25h100v125h-125v-100zm0 125h150v-150h125v275h-275v-125zm25 275c-13.8 0-25-11.2-25-25v-100h125v125h-100zm125 0v-125h125v125h-125zm275-25c0 13.8-11.2 25-25 25h-100v-125h125v100zm0-125h-125v-125h125v125zm0-150h-125v-125h100c13.8 0 25 11.2 25 25v100z"
                    }))
                })));
            i.displayName = "Sim1Icon"
        },
        "8dj6": function(e, t, n) {
            "use strict";
            var r = n("P0jV"),
                a = n("vfGT"),
                c = n("YsDt"),
                i = n("N/5i");

            function o(e) {
                var t = new c(e),
                    n = a(c.prototype.request, t);
                return r.extend(n, c.prototype, t), r.extend(n, t), n
            }
            var s = o(n("dyNj"));
            s.Axios = c, s.create = function(e) {
                return o(i(s.defaults, e))
            }, s.Cancel = n("FYay"), s.CancelToken = n("J1qw"), s.isCancel = n("WBY7"), s.all = function(e) {
                return Promise.all(e)
            }, s.spread = n("IOAS"), e.exports = s, e.exports.default = s
        },
        "9Hq1": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return 0 === e.monthFrom && 0 === e.monthTo
            }
        },
        AknM: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = !0
        },
        AsJ6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return w
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "c", (function() {
                return E
            })), n.d(t, "d", (function() {
                return x
            })), n.d(t, "e", (function() {
                return k
            })), n.d(t, "f", (function() {
                return P
            })), n.d(t, "g", (function() {
                return N
            })), n.d(t, "h", (function() {
                return z
            })), n.d(t, "i", (function() {
                return s
            })), n.d(t, "j", (function() {
                return o
            })), n.d(t, "k", (function() {
                return j
            })), n.d(t, "l", (function() {
                return p
            })), n.d(t, "m", (function() {
                return g
            })), n.d(t, "n", (function() {
                return f
            })), n.d(t, "o", (function() {
                return O
            })), n.d(t, "p", (function() {
                return v
            })), n.d(t, "q", (function() {
                return b
            })), n.d(t, "r", (function() {
                return h
            })), n.d(t, "s", (function() {
                return m
            })), n.d(t, "t", (function() {
                return S
            })), n.d(t, "u", (function() {
                return T
            })), n.d(t, "v", (function() {
                return u
            })), n.d(t, "w", (function() {
                return l
            })), n.d(t, "x", (function() {
                return d
            }));
            var r = n("WDwj"),
                a = n("Hhoo"),
                c = n("C1IE"),
                i = n("mq7k"),
                o = Object(a.y)({
                    type: i.e
                });

            function s(e, t) {
                return t && t[e] || void 0
            }

            function u(e, t) {
                var n;
                if (Object(a.i)(e) || "number" === typeof e) {
                    var c = s(e, t);
                    n = Object(a.e)(c) ? {
                        type: e,
                        exec: c
                    } : c || {
                        type: e,
                        exec: void 0
                    }
                } else if (Object(a.e)(e)) n = {
                    type: e.name || e.toString(),
                    exec: e
                };
                else {
                    c = s(e.type, t);
                    if (Object(a.e)(c)) n = Object(r.a)(Object(r.a)({}, e), {
                        exec: c
                    });
                    else if (c) {
                        var i = e.type,
                            o = Object(r.c)(e, ["type"]);
                        n = Object(r.a)(Object(r.a)({
                            type: i
                        }, c), o)
                    } else n = e
                }
                return Object.defineProperty(n, "toString", {
                    value: function() {
                        return n.type
                    },
                    enumerable: !1,
                    configurable: !0
                }), n
            }
            var l = function(e, t) {
                return e ? (Object(a.c)(e) ? e : [e]).map((function(e) {
                    return u(e, t)
                })) : []
            };

            function d(e) {
                var t = u(e);
                return Object(r.a)(Object(r.a)({
                    id: Object(a.i)(e) ? e : t.id
                }, t), {
                    type: t.type
                })
            }

            function p(e) {
                return Object(a.i)(e) ? {
                    type: i.j,
                    event: e
                } : b(e, {
                    to: c.b.Internal
                })
            }

            function f(e) {
                return {
                    type: i.j,
                    _event: Object(a.y)(e.event)
                }
            }

            function b(e, t) {
                return {
                    to: t ? t.to : void 0,
                    type: i.k,
                    event: Object(a.e)(e) ? e : Object(a.w)(e),
                    delay: t ? t.delay : void 0,
                    id: t && void 0 !== t.id ? t.id : Object(a.e)(e) ? e.name : Object(a.b)(e)
                }
            }

            function O(e, t, n, c) {
                var i, o = {
                        _event: n
                    },
                    s = Object(a.y)(Object(a.e)(e.event) ? e.event(t, n.data, o) : e.event);
                if (Object(a.i)(e.delay)) {
                    var u = c && c[e.delay];
                    i = Object(a.e)(u) ? u(t, n.data, o) : u
                } else i = Object(a.e)(e.delay) ? e.delay(t, n.data, o) : e.delay;
                var l = Object(a.e)(e.to) ? e.to(t, n.data, o) : e.to;
                return Object(r.a)(Object(r.a)({}, e), {
                    to: l,
                    _event: s,
                    event: s.data,
                    delay: i
                })
            }

            function h(e, t) {
                return b(e, Object(r.a)(Object(r.a)({}, t), {
                    to: c.b.Parent
                }))
            }

            function m() {
                return h(i.n)
            }

            function v(e, t) {
                return b(e, Object(r.a)(Object(r.a)({}, t), {
                    to: function(e, t, n) {
                        return n._event.origin
                    }
                }))
            }
            var y = function(e, t) {
                return {
                    context: e,
                    event: t
                }
            };

            function j(e, t) {
                return void 0 === e && (e = y), {
                    type: i.g,
                    label: t,
                    expr: e
                }
            }
            var g = function(e, t, n) {
                    return Object(r.a)(Object(r.a)({}, e), {
                        value: Object(a.i)(e.expr) ? e.expr : e.expr(t, n.data, {
                            _event: n
                        })
                    })
                },
                E = function(e) {
                    return {
                        type: i.b,
                        sendId: e
                    }
                };

            function S(e) {
                var t = d(e);
                return {
                    type: c.a.Start,
                    activity: t,
                    exec: void 0
                }
            }

            function T(e) {
                var t = d(e);
                return {
                    type: c.a.Stop,
                    activity: t,
                    exec: void 0
                }
            }
            var C = function(e) {
                return {
                    type: i.a,
                    assignment: e
                }
            };

            function w(e, t) {
                var n = t ? "#" + t : "";
                return c.a.After + "(" + e + ")" + n
            }

            function x(e, t) {
                var n = c.a.DoneState + "." + e,
                    r = {
                        type: n,
                        data: t,
                        toString: function() {
                            return n
                        }
                    };
                return r
            }

            function k(e, t) {
                var n = c.a.DoneInvoke + "." + e,
                    r = {
                        type: n,
                        data: t,
                        toString: function() {
                            return n
                        }
                    };
                return r
            }

            function P(e, t) {
                var n = c.a.ErrorPlatform + "." + e,
                    r = {
                        type: n,
                        data: t,
                        toString: function() {
                            return n
                        }
                    };
                return r
            }

            function z(e, t) {
                return b((function(e, t) {
                    return t
                }), Object(r.a)(Object(r.a)({}, t), {
                    to: e
                }))
            }

            function N(e, t) {
                return h((function(t, n, r) {
                    return {
                        type: i.c,
                        data: Object(a.e)(e) ? e(t, n, r) : e
                    }
                }), Object(r.a)(Object(r.a)({}, t), {
                    to: c.b.Parent
                }))
            }
        },
        Ay6X: function(e, t, n) {
            "use strict";
            var r = n("P0jV"),
                a = n("Soal"),
                c = n("Q2eF"),
                i = n("qvwg"),
                o = n("eGgp"),
                s = n("0zX2"),
                u = n("pQXz");
            e.exports = function(e) {
                return new Promise((function(t, l) {
                    var d = e.data,
                        p = e.headers;
                    r.isFormData(d) && delete p["Content-Type"];
                    var f = new XMLHttpRequest;
                    if (e.auth) {
                        var b = e.auth.username || "",
                            O = e.auth.password || "";
                        p.Authorization = "Basic " + btoa(b + ":" + O)
                    }
                    var h = i(e.baseURL, e.url);
                    if (f.open(e.method.toUpperCase(), c(h, e.params, e.paramsSerializer), !0), f.timeout = e.timeout, f.onreadystatechange = function() {
                            if (f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:"))) {
                                var n = "getAllResponseHeaders" in f ? o(f.getAllResponseHeaders()) : null,
                                    r = {
                                        data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                                        status: f.status,
                                        statusText: f.statusText,
                                        headers: n,
                                        config: e,
                                        request: f
                                    };
                                a(t, l, r), f = null
                            }
                        }, f.onabort = function() {
                            f && (l(u("Request aborted", e, "ECONNABORTED", f)), f = null)
                        }, f.onerror = function() {
                            l(u("Network Error", e, null, f)), f = null
                        }, f.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), l(u(t, e, "ECONNABORTED", f)), f = null
                        }, r.isStandardBrowserEnv()) {
                        var m = n("ym5Q"),
                            v = (e.withCredentials || s(h)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
                        v && (p[e.xsrfHeaderName] = v)
                    }
                    if ("setRequestHeader" in f && r.forEach(p, (function(e, t) {
                            "undefined" === typeof d && "content-type" === t.toLowerCase() ? delete p[t] : f.setRequestHeader(t, e)
                        })), r.isUndefined(e.withCredentials) || (f.withCredentials = !!e.withCredentials), e.responseType) try {
                        f.responseType = e.responseType
                    } catch (y) {
                        if ("json" !== e.responseType) throw y
                    }
                    "function" === typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                        f && (f.abort(), l(e), f = null)
                    })), void 0 === d && (d = null), f.send(d)
                }))
            }
        },
        "B4/D": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var r = n("WDwj"),
                a = n("UVQZ"),
                c = n("AknM"),
                i = n("Hhoo"),
                o = n("C1IE"),
                s = n("CWip"),
                u = n("mq7k"),
                l = n("AsJ6"),
                d = n("C+hi"),
                p = n("zcQ/"),
                f = "",
                b = {},
                O = function(e) {
                    return "#" === e[0]
                },
                h = function() {
                    return {
                        actions: {},
                        guards: {},
                        services: {},
                        activities: {},
                        delays: {}
                    }
                },
                m = function() {
                    function e(t, n, o) {
                        var d = this;
                        this.config = t, this.context = o, this.order = -1, this.__xstatenode = !0, this.__cache = {
                            events: void 0,
                            relativeValue: new Map,
                            initialStateValue: void 0,
                            initialState: void 0,
                            on: void 0,
                            transitions: void 0,
                            candidates: {},
                            delayedTransitions: void 0
                        }, this.idMap = {}, this.options = Object.assign(h(), n), this.parent = this.options._parent, this.key = this.config.key || this.options._key || this.config.id || "(machine)", this.machine = this.parent ? this.parent.machine : this, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : a.c), this.id = this.config.id || Object(r.d)([this.machine.key], this.path).join(this.delimiter), this.version = this.parent ? this.parent.version : this.config.version, this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object(i.j)(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), c.a || Object(i.G)(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. ' + (this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '" + this.type + "'`") + " in the config for state node '" + this.id + "' instead."), this.initial = this.config.initial, this.states = this.config.states ? Object(i.m)(this.config.states, (function(t, n) {
                            var a, c = new e(t, {
                                _parent: d,
                                _key: n
                            });
                            return Object.assign(d.idMap, Object(r.a)(((a = {})[c.id] = c, a), c.idMap)), c
                        })) : b;
                        var p = 0;
                        ! function e(t) {
                            var n, a;
                            t.order = p++;
                            try {
                                for (var c = Object(r.e)(Object(s.b)(t)), i = c.next(); !i.done; i = c.next()) {
                                    e(i.value)
                                }
                            } catch (o) {
                                n = {
                                    error: o
                                }
                            } finally {
                                try {
                                    i && !i.done && (a = c.return) && a.call(c)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }(this), this.history = !0 === this.config.history ? "shallow" : this.config.history || !1, this._transient = !!this.config.on && (Array.isArray(this.config.on) ? this.config.on.some((function(e) {
                            return e.event === f
                        })) : f in this.config.on), this.strict = !!this.config.strict, this.onEntry = Object(i.v)(this.config.entry || this.config.onEntry).map((function(e) {
                            return Object(l.v)(e)
                        })), this.onExit = Object(i.v)(this.config.exit || this.config.onExit).map((function(e) {
                            return Object(l.v)(e)
                        })), this.meta = this.config.meta, this.data = "final" === this.type ? this.config.data : void 0, this.invoke = Object(i.v)(this.config.invoke).map((function(e, t) {
                            var n, a;
                            if (Object(i.f)(e)) return d.machine.options.services = Object(r.a)(((n = {})[e.id] = e, n), d.machine.options.services), {
                                type: u.f,
                                src: e.id,
                                id: e.id
                            };
                            if ("string" !== typeof e.src) {
                                var c = d.id + ":invocation[" + t + "]";
                                return d.machine.options.services = Object(r.a)(((a = {})[c] = e.src, a), d.machine.options.services), Object(r.a)(Object(r.a)({
                                    type: u.f,
                                    id: c
                                }, e), {
                                    src: c
                                })
                            }
                            return Object(r.a)(Object(r.a)({}, e), {
                                type: u.f,
                                id: e.id || e.src,
                                src: e.src
                            })
                        })), this.activities = Object(i.v)(this.config.activities).concat(this.invoke).map((function(e) {
                            return Object(l.x)(e)
                        })), this.transition = this.transition.bind(this)
                    }
                    return e.prototype._init = function() {
                        this.__cache.transitions || Object(s.a)(this).forEach((function(e) {
                            return e.on
                        }))
                    }, e.prototype.withConfig = function(t, n) {
                        void 0 === n && (n = this.context);
                        var a = this.options,
                            c = a.actions,
                            i = a.activities,
                            o = a.guards,
                            s = a.services,
                            u = a.delays;
                        return new e(this.config, {
                            actions: Object(r.a)(Object(r.a)({}, c), t.actions),
                            activities: Object(r.a)(Object(r.a)({}, i), t.activities),
                            guards: Object(r.a)(Object(r.a)({}, o), t.guards),
                            services: Object(r.a)(Object(r.a)({}, s), t.services),
                            delays: Object(r.a)(Object(r.a)({}, u), t.delays)
                        }, n)
                    }, e.prototype.withContext = function(t) {
                        return new e(this.config, this.options, t)
                    }, Object.defineProperty(e.prototype, "definition", {
                        get: function() {
                            return {
                                id: this.id,
                                key: this.key,
                                version: this.version,
                                context: this.context,
                                type: this.type,
                                initial: this.initial,
                                history: this.history,
                                states: Object(i.m)(this.states, (function(e) {
                                    return e.definition
                                })),
                                on: this.on,
                                transitions: this.transitions,
                                entry: this.onEntry,
                                exit: this.onExit,
                                activities: this.activities || [],
                                meta: this.meta,
                                order: this.order || -1,
                                data: this.data,
                                invoke: this.invoke
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.toJSON = function() {
                        return this.definition
                    }, Object.defineProperty(e.prototype, "on", {
                        get: function() {
                            if (this.__cache.on) return this.__cache.on;
                            var e = this.transitions;
                            return this.__cache.on = e.reduce((function(e, t) {
                                return e[t.eventType] = e[t.eventType] || [], e[t.eventType].push(t), e
                            }), {})
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "after", {
                        get: function() {
                            return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "transitions", {
                        get: function() {
                            return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.getCandidates = function(e) {
                        if (this.__cache.candidates[e]) return this.__cache.candidates[e];
                        var t = e === f,
                            n = this.transitions.filter((function(n) {
                                var r = n.eventType === e;
                                return t ? r : r || "*" === n.eventType
                            }));
                        return this.__cache.candidates[e] = n, n
                    }, e.prototype.getDelayedTransitions = function() {
                        var e = this,
                            t = this.config.after;
                        if (!t) return [];
                        var n = function(t, n) {
                            var r = Object(i.e)(t) ? e.id + ":delay[" + n + "]" : t,
                                a = Object(l.a)(r, e.id);
                            return e.onEntry.push(Object(l.q)(a, {
                                delay: t
                            })), e.onExit.push(Object(l.c)(a)), a
                        };
                        return (Object(i.c)(t) ? t.map((function(e, t) {
                            var a = n(e.delay, t);
                            return Object(r.a)(Object(r.a)({}, e), {
                                event: a
                            })
                        })) : Object(i.a)(Object(i.j)(t).map((function(e, a) {
                            var c = t[e],
                                o = Object(i.i)(c) ? {
                                    target: c
                                } : c,
                                s = isNaN(+e) ? e : +e,
                                u = n(s, a);
                            return Object(i.v)(o).map((function(e) {
                                return Object(r.a)(Object(r.a)({}, e), {
                                    event: u,
                                    delay: s
                                })
                            }))
                        })))).map((function(t) {
                            var n = t.delay;
                            return Object(r.a)(Object(r.a)({}, e.formatTransition(t)), {
                                delay: n
                            })
                        }))
                    }, e.prototype.getStateNodes = function(e) {
                        var t, n = this;
                        if (!e) return [];
                        var r = e instanceof d.a ? e.value : Object(i.B)(e, this.delimiter);
                        if (Object(i.i)(r)) {
                            var a = this.getStateNode(r).initial;
                            return void 0 !== a ? this.getStateNodes(((t = {})[r] = a, t)) : [this.states[r]]
                        }
                        var c = Object(i.j)(r);
                        return c.map((function(e) {
                            return n.getStateNode(e)
                        })).concat(c.reduce((function(e, t) {
                            var a = n.getStateNode(t).getStateNodes(r[t]);
                            return e.concat(a)
                        }), []))
                    }, e.prototype.handles = function(e) {
                        var t = Object(i.b)(e);
                        return this.events.includes(t)
                    }, e.prototype.resolveState = function(e) {
                        var t = Array.from(Object(s.c)([], this.getStateNodes(e.value)));
                        return new d.a(Object(r.a)(Object(r.a)({}, e), {
                            value: this.resolve(e.value),
                            configuration: t
                        }))
                    }, e.prototype.transitionLeafNode = function(e, t, n) {
                        var r = this.getStateNode(e).next(t, n);
                        return r && r.transitions.length ? r : this.next(t, n)
                    }, e.prototype.transitionCompoundNode = function(e, t, n) {
                        var r = Object(i.j)(e),
                            a = this.getStateNode(r[0])._transition(e[r[0]], t, n);
                        return a && a.transitions.length ? a : this.next(t, n)
                    }, e.prototype.transitionParallelNode = function(e, t, n) {
                        var a, c, o = {};
                        try {
                            for (var s = Object(r.e)(Object(i.j)(e)), u = s.next(); !u.done; u = s.next()) {
                                var l = u.value,
                                    d = e[l];
                                if (d) {
                                    var p = this.getStateNode(l)._transition(d, t, n);
                                    p && (o[l] = p)
                                }
                            }
                        } catch (m) {
                            a = {
                                error: m
                            }
                        } finally {
                            try {
                                u && !u.done && (c = s.return) && c.call(s)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                        var f = Object(i.j)(o).map((function(e) {
                                return o[e]
                            })),
                            b = Object(i.a)(f.map((function(e) {
                                return e.transitions
                            })));
                        if (!f.some((function(e) {
                                return e.transitions.length > 0
                            }))) return this.next(t, n);
                        var O = Object(i.a)(f.map((function(e) {
                                return e.entrySet
                            }))),
                            h = Object(i.a)(Object(i.j)(o).map((function(e) {
                                return o[e].configuration
                            })));
                        return {
                            transitions: b,
                            entrySet: O,
                            exitSet: Object(i.a)(f.map((function(e) {
                                return e.exitSet
                            }))),
                            configuration: h,
                            source: t,
                            actions: Object(i.a)(Object(i.j)(o).map((function(e) {
                                return o[e].actions
                            })))
                        }
                    }, e.prototype._transition = function(e, t, n) {
                        return Object(i.i)(e) ? this.transitionLeafNode(e, t, n) : 1 === Object(i.j)(e).length ? this.transitionCompoundNode(e, t, n) : this.transitionParallelNode(e, t, n)
                    }, e.prototype.next = function(e, t) {
                        var n, a, c, o = this,
                            s = t.name,
                            u = [],
                            l = [];
                        try {
                            for (var d = Object(r.e)(this.getCandidates(s)), p = d.next(); !p.done; p = d.next()) {
                                var f = p.value,
                                    b = f.cond,
                                    h = f.in,
                                    m = e.context,
                                    v = !h || (Object(i.i)(h) && O(h) ? e.matches(Object(i.B)(this.getStateNodeById(h).path, this.delimiter)) : Object(i.n)(Object(i.B)(h, this.delimiter), Object(i.r)(this.path.slice(0, -2))(e.value))),
                                    y = !1;
                                try {
                                    y = !b || this.evaluateGuard(b, m, t, e)
                                } catch (E) {
                                    throw new Error("Unable to evaluate guard '" + (b.name || b.type) + "' in transition for event '" + s + "' in state node '" + this.id + "':\n" + E.message)
                                }
                                if (y && v) {
                                    void 0 !== f.target && (l = f.target), u.push.apply(u, Object(r.d)(f.actions)), c = f;
                                    break
                                }
                            }
                        } catch (S) {
                            n = {
                                error: S
                            }
                        } finally {
                            try {
                                p && !p.done && (a = d.return) && a.call(d)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        if (c) {
                            if (!l.length) return {
                                transitions: [c],
                                entrySet: [],
                                exitSet: [],
                                configuration: e.value ? [this] : [],
                                source: e,
                                actions: u
                            };
                            var j = Object(i.a)(l.map((function(t) {
                                    return o.getRelativeStateNodes(t, e.historyValue)
                                }))),
                                g = !!c.internal;
                            return {
                                transitions: [c],
                                entrySet: g ? [] : Object(i.a)(j.map((function(e) {
                                    return o.nodesFromChild(e)
                                }))),
                                exitSet: g ? [] : [this],
                                configuration: j,
                                source: e,
                                actions: u
                            }
                        }
                    }, e.prototype.nodesFromChild = function(e) {
                        if (e.escapes(this)) return [];
                        for (var t = [], n = e; n && n !== this;) t.push(n), n = n.parent;
                        return t.push(this), t
                    }, e.prototype.escapes = function(e) {
                        if (this === e) return !1;
                        for (var t = this.parent; t;) {
                            if (t === e) return !1;
                            t = t.parent
                        }
                        return !0
                    }, e.prototype.evaluateGuard = function(e, t, n, r) {
                        var c = this.machine.options.guards,
                            i = {
                                state: r,
                                cond: e,
                                _event: n
                            };
                        if (e.type === a.a) return e.predicate(t, n.data, i);
                        var o = c[e.type];
                        if (!o) throw new Error("Guard '" + e.type + "' is not implemented on machine '" + this.machine.id + "'.");
                        return o(t, n.data, i)
                    }, e.prototype.getActions = function(e, t, n, a) {
                        var c, o, u, d, p = Object(s.c)([], a ? this.getStateNodes(a.value) : [this]),
                            f = e.configuration.length ? Object(s.c)(p, e.configuration) : p;
                        try {
                            for (var b = Object(r.e)(f), O = b.next(); !O.done; O = b.next()) {
                                var h = O.value;
                                Object(s.e)(p, h) || e.entrySet.push(h)
                            }
                        } catch (C) {
                            c = {
                                error: C
                            }
                        } finally {
                            try {
                                O && !O.done && (o = b.return) && o.call(b)
                            } finally {
                                if (c) throw c.error
                            }
                        }
                        try {
                            for (var m = Object(r.e)(p), v = m.next(); !v.done; v = m.next()) {
                                h = v.value;
                                Object(s.e)(f, h) && !Object(s.e)(e.exitSet, h.parent) || e.exitSet.push(h)
                            }
                        } catch (w) {
                            u = {
                                error: w
                            }
                        } finally {
                            try {
                                v && !v.done && (d = m.return) && d.call(m)
                            } finally {
                                if (u) throw u.error
                            }
                        }
                        e.source || (e.exitSet = [], e.entrySet.push(this));
                        var y = Object(i.a)(e.entrySet.map((function(r) {
                            var a = [];
                            if ("final" !== r.type) return a;
                            var c = r.parent;
                            if (a.push(Object(l.d)(r.id, r.data), Object(l.d)(c.id, r.data ? Object(i.k)(r.data, t, n) : void 0)), c.parent) {
                                var o = c.parent;
                                "parallel" === o.type && Object(s.b)(o).every((function(t) {
                                    return Object(s.f)(e.configuration, t)
                                })) && a.push(Object(l.d)(o.id, o.data))
                            }
                            return a
                        })));
                        e.exitSet.sort((function(e, t) {
                            return t.order - e.order
                        })), e.entrySet.sort((function(e, t) {
                            return e.order - t.order
                        }));
                        var j = new Set(e.entrySet),
                            g = new Set(e.exitSet),
                            E = Object(r.b)([Object(i.a)(Array.from(j).map((function(e) {
                                return Object(r.d)(e.activities.map((function(e) {
                                    return Object(l.t)(e)
                                })), e.onEntry)
                            }))).concat(y.map(l.l)), Object(i.a)(Array.from(g).map((function(e) {
                                return Object(r.d)(e.onExit, e.activities.map((function(e) {
                                    return Object(l.u)(e)
                                })))
                            })))], 2),
                            S = E[0],
                            T = E[1];
                        return Object(l.w)(T.concat(e.actions).concat(S), this.machine.options.actions)
                    }, e.prototype.transition = function(e, t, n) {
                        void 0 === e && (e = this.initialState);
                        var a, o = Object(i.y)(t);
                        if (e instanceof d.a) a = void 0 === n ? e : this.resolveState(d.a.from(e, n));
                        else {
                            var u = Object(i.i)(e) ? this.resolve(Object(i.s)(this.getResolvedPath(e))) : this.resolve(e),
                                l = n || this.machine.context;
                            a = this.resolveState(d.a.from(u, l))
                        }
                        if (!c.a && "*" === o.name) throw new Error("An event cannot have the wildcard type ('*')");
                        if (this.strict && !this.events.includes(o.name) && !Object(i.d)(o.name)) throw new Error("Machine '" + this.id + "' does not accept event '" + o.name + "'");
                        var p = this._transition(a.value, a, o) || {
                                transitions: [],
                                configuration: [],
                                entrySet: [],
                                exitSet: [],
                                source: a,
                                actions: []
                            },
                            f = Object(s.c)([], this.getStateNodes(a.value)),
                            b = p.configuration.length ? Object(s.c)(f, p.configuration) : f;
                        return p.configuration = Object(r.d)(b), this.resolveTransition(p, a, o)
                    }, e.prototype.resolveRaisedTransition = function(e, t, n) {
                        var a, c = e.actions;
                        return (e = this.transition(e, t))._event = n, e.event = n.data, (a = e.actions).unshift.apply(a, Object(r.d)(c)), e
                    }, e.prototype.resolveTransition = function(e, t, n, a) {
                        var f, b, O = this;
                        void 0 === n && (n = l.j), void 0 === a && (a = this.machine.context);
                        var h = e.configuration,
                            m = !t || e.transitions.length > 0 ? Object(s.d)(this.machine, h) : void 0,
                            v = t ? t.historyValue ? t.historyValue : e.source ? this.machine.historyValue(t.value) : void 0 : void 0,
                            y = t ? t.context : a,
                            j = this.getActions(e, y, n, t),
                            g = t ? Object(r.a)({}, t.activities) : {};
                        try {
                            for (var E = Object(r.e)(j), S = E.next(); !S.done; S = E.next()) {
                                var T = S.value;
                                T.type === u.l ? g[T.activity.type] = T : T.type === u.m && (g[T.activity.type] = !1)
                            }
                        } catch (U) {
                            f = {
                                error: U
                            }
                        } finally {
                            try {
                                S && !S.done && (b = E.return) && b.call(E)
                            } finally {
                                if (f) throw f.error
                            }
                        }
                        var C = Object(r.b)(Object(i.q)(j, (function(e) {
                                return e.type === u.a
                            })), 2),
                            w = C[0],
                            x = C[1],
                            k = w.length ? Object(i.E)(y, n, w, t) : y,
                            P = Object(i.a)(x.map((function(e) {
                                switch (e.type) {
                                    case u.j:
                                        return Object(l.n)(e);
                                    case u.k:
                                        var t = Object(l.o)(e, k, n, O.machine.options.delays);
                                        return c.a || Object(i.G)(!Object(i.i)(e.delay) || "number" === typeof t.delay, "No delay reference for delay expression '" + e.delay + "' was found on machine '" + O.machine.id + "'"), t;
                                    case u.g:
                                        return Object(l.m)(e, k, n);
                                    case u.i:
                                        return e.get(k, n.data) || [];
                                    default:
                                        return Object(l.v)(e, O.options.actions)
                                }
                            }))),
                            z = Object(r.b)(Object(i.q)(P, (function(e) {
                                return e.type === u.j || e.type === u.k && e.to === o.b.Internal
                            })), 2),
                            N = z[0],
                            R = z[1],
                            I = P.filter((function(e) {
                                return e.type === u.l && e.activity.type === u.f
                            })).reduce((function(e, t) {
                                return e[t.activity.id] = Object(p.a)(t.activity), e
                            }), t ? Object(r.a)({}, t.children) : {}),
                            A = m ? e.configuration : t ? t.configuration : [],
                            _ = A.reduce((function(e, t) {
                                return void 0 !== t.meta && (e[t.id] = t.meta), e
                            }), {}),
                            L = Object(s.f)(A, this),
                            M = new d.a({
                                value: m || t.value,
                                context: k,
                                _event: n,
                                _sessionid: t ? t._sessionid : null,
                                historyValue: m ? v ? Object(i.F)(v, m) : void 0 : t ? t.historyValue : void 0,
                                history: !m || e.source ? t : void 0,
                                actions: m ? R : [],
                                activities: m ? g : t ? t.activities : {},
                                meta: m ? _ : t ? t.meta : void 0,
                                events: [],
                                configuration: A,
                                transitions: e.transitions,
                                children: I,
                                done: L
                            });
                        M.changed = n.name === u.n || !!w.length;
                        var D = M.history;
                        if (D && delete D.history, !m) return M;
                        var B = M;
                        if (!L)
                            for ((this._transient || h.some((function(e) {
                                    return e._transient
                                }))) && (B = this.resolveRaisedTransition(B, {
                                    type: u.h
                                }, n)); N.length;) {
                                var F = N.shift();
                                B = this.resolveRaisedTransition(B, F._event, n)
                            }
                        var V = B.changed || (D ? !!B.actions.length || !!w.length || typeof D.value !== typeof B.value || !Object(d.d)(B.value, D.value) : void 0);
                        return B.changed = V, B.historyValue = M.historyValue, B.history = D, B
                    }, e.prototype.getStateNode = function(e) {
                        if (O(e)) return this.machine.getStateNodeById(e);
                        if (!this.states) throw new Error("Unable to retrieve child state '" + e + "' from '" + this.id + "'; no child states exist.");
                        var t = this.states[e];
                        if (!t) throw new Error("Child state '" + e + "' does not exist on '" + this.id + "'");
                        return t
                    }, e.prototype.getStateNodeById = function(e) {
                        var t = O(e) ? e.slice("#".length) : e;
                        if (t === this.id) return this;
                        var n = this.machine.idMap[t];
                        if (!n) throw new Error("Child state node '#" + t + "' does not exist on machine '" + this.id + "'");
                        return n
                    }, e.prototype.getStateNodeByPath = function(e) {
                        if ("string" === typeof e && O(e)) try {
                            return this.getStateNodeById(e.slice(1))
                        } catch (a) {}
                        for (var t = Object(i.z)(e, this.delimiter).slice(), n = this; t.length;) {
                            var r = t.shift();
                            if (!r.length) break;
                            n = n.getStateNode(r)
                        }
                        return n
                    }, e.prototype.resolve = function(e) {
                        var t, n = this;
                        if (!e) return this.initialStateValue || b;
                        switch (this.type) {
                            case "parallel":
                                return Object(i.m)(this.initialStateValue, (function(t, r) {
                                    return t ? n.getStateNode(r).resolve(e[r] || t) : b
                                }));
                            case "compound":
                                if (Object(i.i)(e)) {
                                    var r = this.getStateNode(e);
                                    return "parallel" === r.type || "compound" === r.type ? ((t = {})[e] = r.initialStateValue, t) : e
                                }
                                return Object(i.j)(e).length ? Object(i.m)(e, (function(e, t) {
                                    return e ? n.getStateNode(t).resolve(e) : b
                                })) : this.initialStateValue || {};
                            default:
                                return e || b
                        }
                    }, e.prototype.getResolvedPath = function(e) {
                        if (O(e)) {
                            var t = this.machine.idMap[e.slice("#".length)];
                            if (!t) throw new Error("Unable to find state node '" + e + "'");
                            return t.path
                        }
                        return Object(i.z)(e, this.delimiter)
                    }, Object.defineProperty(e.prototype, "initialStateValue", {
                        get: function() {
                            var e, t;
                            if (this.__cache.initialStateValue) return this.__cache.initialStateValue;
                            if ("parallel" === this.type) t = Object(i.l)(this.states, (function(e) {
                                return e.initialStateValue || b
                            }), (function(e) {
                                return !("history" === e.type)
                            }));
                            else if (void 0 !== this.initial) {
                                if (!this.states[this.initial]) throw new Error("Initial state '" + this.initial + "' not found on '" + this.key + "'");
                                t = Object(s.g)(this.states[this.initial]) ? this.initial : ((e = {})[this.initial] = this.states[this.initial].initialStateValue, e)
                            }
                            return this.__cache.initialStateValue = t, this.__cache.initialStateValue
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.getInitialState = function(e, t) {
                        var n = this.getStateNodes(e);
                        return this.resolveTransition({
                            configuration: n,
                            entrySet: n,
                            exitSet: [],
                            transitions: [],
                            source: void 0,
                            actions: []
                        }, void 0, void 0, t)
                    }, Object.defineProperty(e.prototype, "initialState", {
                        get: function() {
                            this._init();
                            var e = this.initialStateValue;
                            if (!e) throw new Error("Cannot retrieve initial state from simple state '" + this.id + "'.");
                            return this.getInitialState(e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "target", {
                        get: function() {
                            var e;
                            if ("history" === this.type) {
                                var t = this.config;
                                e = Object(i.i)(t.target) && O(t.target) ? Object(i.s)(this.machine.getStateNodeById(t.target).path.slice(this.path.length - 1)) : t.target
                            }
                            return e
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.getRelativeStateNodes = function(e, t, n) {
                        return void 0 === n && (n = !0), n ? "history" === e.type ? e.resolveHistory(t) : e.initialStateNodes : [e]
                    }, Object.defineProperty(e.prototype, "initialStateNodes", {
                        get: function() {
                            var e = this;
                            if (Object(s.g)(this)) return [this];
                            if ("compound" === this.type && !this.initial) return c.a || Object(i.G)(!1, "Compound state node '" + this.id + "' has no initial state."), [this];
                            var t = Object(i.A)(this.initialStateValue);
                            return Object(i.a)(t.map((function(t) {
                                return e.getFromRelativePath(t)
                            })))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.getFromRelativePath = function(e) {
                        if (!e.length) return [this];
                        var t = Object(r.b)(e),
                            n = t[0],
                            a = t.slice(1);
                        if (!this.states) throw new Error("Cannot retrieve subPath '" + n + "' from node with no states");
                        var c = this.getStateNode(n);
                        if ("history" === c.type) return c.resolveHistory();
                        if (!this.states[n]) throw new Error("Child state '" + n + "' does not exist on '" + this.id + "'");
                        return this.states[n].getFromRelativePath(a)
                    }, e.prototype.historyValue = function(e) {
                        if (Object(i.j)(this.states).length) return {
                            current: e || this.initialStateValue,
                            states: Object(i.l)(this.states, (function(t, n) {
                                if (!e) return t.historyValue();
                                var r = Object(i.i)(e) ? void 0 : e[n];
                                return t.historyValue(r || t.initialStateValue)
                            }), (function(e) {
                                return !e.history
                            }))
                        }
                    }, e.prototype.resolveHistory = function(e) {
                        var t = this;
                        if ("history" !== this.type) return [this];
                        var n = this.parent;
                        if (!e) {
                            var r = this.target;
                            return r ? Object(i.a)(Object(i.A)(r).map((function(e) {
                                return n.getFromRelativePath(e)
                            }))) : n.initialStateNodes
                        }
                        var a = Object(i.o)(n.path, "states")(e).current;
                        return Object(i.i)(a) ? [n.getStateNode(a)] : Object(i.a)(Object(i.A)(a).map((function(e) {
                            return "deep" === t.history ? n.getFromRelativePath(e) : [n.states[e[0]]]
                        })))
                    }, Object.defineProperty(e.prototype, "stateIds", {
                        get: function() {
                            var e = this,
                                t = Object(i.a)(Object(i.j)(this.states).map((function(t) {
                                    return e.states[t].stateIds
                                })));
                            return [this.id].concat(t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "events", {
                        get: function() {
                            var e, t, n, a;
                            if (this.__cache.events) return this.__cache.events;
                            var c = this.states,
                                o = new Set(this.ownEvents);
                            if (c) try {
                                for (var s = Object(r.e)(Object(i.j)(c)), u = s.next(); !u.done; u = s.next()) {
                                    var l = c[u.value];
                                    if (l.states) try {
                                        for (var d = (n = void 0, Object(r.e)(l.events)), p = d.next(); !p.done; p = d.next()) {
                                            var f = p.value;
                                            o.add("" + f)
                                        }
                                    } catch (b) {
                                        n = {
                                            error: b
                                        }
                                    } finally {
                                        try {
                                            p && !p.done && (a = d.return) && a.call(d)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                }
                            } catch (O) {
                                e = {
                                    error: O
                                }
                            } finally {
                                try {
                                    u && !u.done && (t = s.return) && t.call(s)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return this.__cache.events = Array.from(o)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "ownEvents", {
                        get: function() {
                            var e = new Set(this.transitions.filter((function(e) {
                                return !(!e.target && !e.actions.length && e.internal)
                            })).map((function(e) {
                                return e.eventType
                            })));
                            return Array.from(e)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.resolveTarget = function(e) {
                        var t = this;
                        if (void 0 !== e) return e.map((function(e) {
                            if (!Object(i.i)(e)) return e;
                            var n = e[0] === t.delimiter;
                            if (n && !t.parent) return t.getStateNodeByPath(e.slice(1));
                            var r = n ? t.key + e : e;
                            if (!t.parent) return t.getStateNodeByPath(r);
                            try {
                                return t.parent.getStateNodeByPath(r)
                            } catch (a) {
                                throw new Error("Invalid transition definition for state node '" + t.id + "':\n" + a.message)
                            }
                        }))
                    }, e.prototype.formatTransition = function(e) {
                        var t = this,
                            n = Object(i.p)(e.target),
                            a = "internal" in e ? e.internal : !n || n.some((function(e) {
                                return Object(i.i)(e) && e[0] === t.delimiter
                            })),
                            c = this.machine.options.guards,
                            o = this.resolveTarget(n),
                            s = Object(r.a)(Object(r.a)({}, e), {
                                actions: Object(l.w)(Object(i.v)(e.actions)),
                                cond: Object(i.x)(e.cond, c),
                                target: o,
                                source: this,
                                internal: a,
                                eventType: e.event
                            });
                        return Object.defineProperty(s, "toJSON", {
                            value: function() {
                                return Object(r.a)(Object(r.a)({}, s), {
                                    target: s.target ? s.target.map((function(e) {
                                        return "#" + e.id
                                    })) : void 0,
                                    source: "#{this.id}"
                                })
                            }
                        }), s
                    }, e.prototype.formatTransitions = function() {
                        var e, t, n, a = this;
                        if (this.config.on)
                            if (Array.isArray(this.config.on)) n = this.config.on;
                            else {
                                var o = this.config.on,
                                    s = o["*"],
                                    u = void 0 === s ? [] : s,
                                    d = Object(r.c)(o, ["*"]);
                                n = Object(i.a)(Object(i.j)(d).map((function(e) {
                                    var t = Object(i.C)(e, d[e]);
                                    return c.a || function(e, t, n) {
                                        var r = n.slice(0, -1).some((function(e) {
                                                return !("cond" in e) && !("in" in e) && (Object(i.i)(e.target) || Object(i.f)(e.target))
                                            })),
                                            a = t === f ? "the transient event" : "event '" + t + "'";
                                        Object(i.G)(!r, "One or more transitions for " + a + " on state '" + e.id + "' are unreachable. Make sure that the default transition is the last one defined.")
                                    }(a, e, t), t
                                })).concat(Object(i.C)("*", u)))
                            }
                        else n = [];
                        var p = this.config.onDone ? Object(i.C)(String(Object(l.d)(this.id)), this.config.onDone) : [],
                            b = Object(i.a)(this.invoke.map((function(e) {
                                var t = [];
                                return e.onDone && t.push.apply(t, Object(r.d)(Object(i.C)(String(Object(l.e)(e.id)), e.onDone))), e.onError && t.push.apply(t, Object(r.d)(Object(i.C)(String(Object(l.f)(e.id)), e.onError))), t
                            }))),
                            O = this.after,
                            h = Object(i.a)(Object(r.d)(p, b, n).map((function(e) {
                                return Object(i.v)(e).map((function(e) {
                                    return a.formatTransition(e)
                                }))
                            })));
                        try {
                            for (var m = Object(r.e)(O), v = m.next(); !v.done; v = m.next()) {
                                var y = v.value;
                                h.push(y)
                            }
                        } catch (j) {
                            e = {
                                error: j
                            }
                        } finally {
                            try {
                                v && !v.done && (t = m.return) && t.call(m)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return h
                    }, e
                }()
        },
        BP9p: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        },
        BPef: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("HbGN"),
                a = n("ERkP"),
                c = n.n(a),
                i = n("7xIC"),
                o = function(e) {
                    var t = Object(i.useRouter)().query;
                    return c.a.useMemo((function() {
                        if ("string" !== typeof t.offerSelectorComponent) return null;
                        var n;
                        n = window.atob;
                        try {
                            var a = JSON.parse(n(t.offerSelectorComponent)),
                                c = a.id,
                                i = Object(r.a)(a, ["id"]);
                            return c !== e ? null : i
                        } catch (o) {
                            return null
                        }
                    }), [t.offerSelectorComponent])
                }
        },
        "BVF/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return T
            }));
            var r = n("cxan"),
                a = n("5IAQ"),
                c = n("zygG"),
                i = n("HbGN"),
                o = n("ERkP"),
                s = n.n(o),
                u = null,
                l = null,
                d = null,
                p = function(e) {
                    e.preventDefault()
                },
                f = function(e) {
                    s.a.useEffect((function() {
                        e ? (u = window.getComputedStyle(document.body).overflow, l = window.getComputedStyle(document.documentElement).overflow, d = window.getComputedStyle(document.body).height, document.body.style.overflow = "hidden", document.documentElement.style.overflow = "initial", document.body.style.height = "100vh", document.body.addEventListener("touchmove", p, {
                            passive: !1
                        })) : (document.body.style.overflow = u || "", document.documentElement.style.overflow = l || "", document.body.style.height = d || "", u = null, l = null, d = null, document.body.removeEventListener("touchmove", p))
                    }), [e])
                },
                b = n("Kq2c"),
                O = n("l1C2"),
                h = (s.a.createElement, function(e) {
                    var t = e.shouldShow,
                        n = e.onClick,
                        r = Object(b.useTheme)().zIndex;
                    return f(t), Object(O.b)("div", {
                        role: "button",
                        "aria-label": "Zamknij warstw\u0119",
                        onClick: n,
                        css: Object(a.a)({
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            position: "fixed",
                            zIndex: r.LAYER_1,
                            opacity: t ? 1 : 0,
                            height: t ? "100vh" : 0,
                            backgroundColor: "rgba(0,0,0, .2)",
                            visibility: t ? "visible" : "hidden",
                            transition: "visibility 0s linear ".concat(t ? "0s" : ".15s", ", opacity .15s")
                        }, "")
                    })
                }),
                m = n("cAUT"),
                v = (s.a.createElement, s.a.createContext(null)),
                y = function(e) {
                    var t = e.isExpandable,
                        n = e.isExpanded,
                        a = Object(i.a)(e, ["isExpandable", "isExpanded"]);
                    return Object(O.b)(v.Provider, Object(r.a)({
                        value: {
                            isExpandable: t,
                            isExpanded: n
                        }
                    }, a))
                },
                j = function() {
                    var e = s.a.useContext(v);
                    if (null === e) throw Error("useFloaterContext: Please provide FloaterContextProvider value.");
                    return e
                };
            s.a.createElement;
            var g = {
                    name: "u111ks",
                    styles: "display:flex;align-items:center;font-weight:bold;justify-content:space-between;"
                },
                E = n("BNVM");
            s.a.createElement, s.a.createElement;
            var S = {
                    name: "12efcmn",
                    styles: "position:absolute;"
                },
                T = {
                    Wrapper: function(e) {
                        var t = e.isExpandable,
                            n = void 0 !== t && t,
                            o = e.shouldBeVisible,
                            u = void 0 === o || o,
                            l = e.defaultExpanded,
                            d = void 0 !== l && l,
                            p = e.isNavbarCollapsed,
                            f = void 0 !== p && p,
                            m = e.innerCss,
                            v = e.children,
                            j = Object(i.a)(e, ["isExpandable", "shouldBeVisible", "defaultExpanded", "isNavbarCollapsed", "innerCss", "children"]),
                            g = Object(b.useTheme)(),
                            E = g.colors,
                            T = g.zIndex,
                            C = s.a.useState(d),
                            w = Object(c.a)(C, 2),
                            x = w[0],
                            k = w[1];
                        return Object(O.b)(y, {
                            isExpandable: n,
                            isExpanded: x
                        }, n && Object(O.b)(h, {
                            shouldShow: x,
                            onClick: function() {
                                k(!1)
                            }
                        }), Object(O.b)("div", Object(r.a)({
                            css: S
                        }, j), Object(O.b)("div", {
                            role: "button",
                            "aria-expanded": x,
                            onClick: n ? function() {
                                k(!x)
                            } : void 0,
                            css: Object(a.a)([{
                                left: 10,
                                right: 10,
                                padding: 10,
                                borderRadius: 4,
                                position: "fixed",
                                zIndex: T.LAYER_3,
                                backgroundColor: E.WHITE,
                                top: f ? 60 : 90,
                                opacity: u ? 1 : 0,
                                visibility: u ? "visible" : "hidden",
                                boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.2)",
                                transition: "visibility 0s linear ".concat(u ? "0s" : ".15s", ", opacity .15s, top .15s")
                            }, m], "")
                        }, v)))
                    },
                    Header: function(e) {
                        var t = e.children,
                            n = Object(i.a)(e, ["children"]),
                            c = j(),
                            o = c.isExpandable,
                            s = c.isExpanded;
                        return Object(O.b)("div", Object(r.a)({
                            css: g
                        }, n), t, o && Object(O.b)(m.a, {
                            css: Object(a.a)({
                                transition: "transform .1s",
                                transform: "rotate(".concat(s ? "180" : "0", "deg)")
                            }, "")
                        }))
                    },
                    Content: function(e) {
                        var t = j().isExpanded,
                            n = Object(E.a)().bind,
                            c = n.ref.current,
                            i = t && c ? c.scrollHeight : 0;
                        return Object(O.b)("div", Object(r.a)({}, n, {
                            css: Object(a.a)({
                                maxHeight: i,
                                overflow: "hidden",
                                transition: "max-height .15s",
                                visibility: t ? "visible" : "hidden"
                            }, "")
                        }, e))
                    }
                }
        },
        BtTt: function(e, t, n) {
            "use strict";
            var r = n("P0jV"),
                a = n("4GeQ"),
                c = n("WBY7"),
                i = n("dyNj");

            function o(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return o(e), e.headers = e.headers || {}, e.data = a(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                })), (e.adapter || i.adapter)(e).then((function(t) {
                    return o(e), t.data = a(t.data, t.headers, e.transformResponse), t
                }), (function(t) {
                    return c(t) || (o(e), t && t.response && (t.response.data = a(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                }))
            }
        },
        "C+hi": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "c", (function() {
                return u
            })), n.d(t, "d", (function() {
                return s
            }));
            var r = n("WDwj"),
                a = n("UVQZ"),
                c = n("Hhoo"),
                i = n("CWip"),
                o = n("AsJ6");

            function s(e, t) {
                if (e === t) return !0;
                if (void 0 === e || void 0 === t) return !1;
                if (Object(c.i)(e) || Object(c.i)(t)) return e === t;
                var n = Object(c.j)(e),
                    r = Object(c.j)(t);
                return n.length === r.length && n.every((function(n) {
                    return s(e[n], t[n])
                }))
            }

            function u(e) {
                return !Object(c.i)(e) && ("value" in e && "history" in e)
            }

            function l(e, t) {
                var n = e.exec;
                return Object(r.a)(Object(r.a)({}, e), {
                    exec: void 0 !== n ? function() {
                        return n(t.context, t.event, {
                            action: e,
                            state: t,
                            _event: t._event
                        })
                    } : void 0
                })
            }
            var d = function() {
                function e(e) {
                    var t = this;
                    this.actions = [], this.activities = a.b, this.meta = {}, this.events = [], this.value = e.value, this.context = e.context, this._event = e._event, this._sessionid = e._sessionid, this.event = this._event.data, this.historyValue = e.historyValue, this.history = e.history, this.actions = e.actions || [], this.activities = e.activities || a.b, this.meta = e.meta || {}, this.events = e.events || [], this.matches = this.matches.bind(this), this.toStrings = this.toStrings.bind(this), this.configuration = e.configuration, this.transitions = e.transitions, this.children = e.children, this.done = !!e.done, Object.defineProperty(this, "nextEvents", {
                        get: function() {
                            return Object(i.h)(t.configuration)
                        }
                    })
                }
                return e.from = function(t, n) {
                    return t instanceof e ? t.context !== n ? new e({
                        value: t.value,
                        context: n,
                        _event: t._event,
                        _sessionid: null,
                        historyValue: t.historyValue,
                        history: t.history,
                        actions: [],
                        activities: t.activities,
                        meta: {},
                        events: [],
                        configuration: [],
                        transitions: [],
                        children: {}
                    }) : t : new e({
                        value: t,
                        context: n,
                        _event: o.j,
                        _sessionid: null,
                        historyValue: void 0,
                        history: void 0,
                        actions: [],
                        activities: void 0,
                        meta: void 0,
                        events: [],
                        configuration: [],
                        transitions: [],
                        children: {}
                    })
                }, e.create = function(t) {
                    return new e(t)
                }, e.inert = function(t, n) {
                    if (t instanceof e) {
                        if (!t.actions.length) return t;
                        var r = o.j;
                        return new e({
                            value: t.value,
                            context: n,
                            _event: r,
                            _sessionid: null,
                            historyValue: t.historyValue,
                            history: t.history,
                            activities: t.activities,
                            configuration: t.configuration,
                            transitions: [],
                            children: {}
                        })
                    }
                    return e.from(t, n)
                }, e.prototype.toStrings = function(e, t) {
                    var n = this;
                    if (void 0 === e && (e = this.value), void 0 === t && (t = "."), Object(c.i)(e)) return [e];
                    var a = Object(c.j)(e);
                    return a.concat.apply(a, Object(r.d)(a.map((function(r) {
                        return n.toStrings(e[r], t).map((function(e) {
                            return r + t + e
                        }))
                    }))))
                }, e.prototype.toJSON = function() {
                    this.configuration, this.transitions;
                    return Object(r.c)(this, ["configuration", "transitions"])
                }, e.prototype.matches = function(e) {
                    return Object(c.n)(e, this.value)
                }, e
            }()
        },
        C1IE: function(e, t, n) {
            "use strict";
            var r, a;
            n.d(t, "a", (function() {
                    return r
                })), n.d(t, "b", (function() {
                    return a
                })),
                function(e) {
                    e.Start = "xstate.start", e.Stop = "xstate.stop", e.Raise = "xstate.raise", e.Send = "xstate.send", e.Cancel = "xstate.cancel", e.NullEvent = "", e.Assign = "xstate.assign", e.After = "xstate.after", e.DoneState = "done.state", e.DoneInvoke = "done.invoke", e.Log = "xstate.log", e.Init = "xstate.init", e.Invoke = "xstate.invoke", e.ErrorExecution = "error.execution", e.ErrorCommunication = "error.communication", e.ErrorPlatform = "error.platform", e.ErrorCustom = "xstate.error", e.Update = "xstate.update", e.Pure = "xstate.pure"
                }(r || (r = {})),
                function(e) {
                    e.Parent = "#_parent", e.Internal = "#_internal"
                }(a || (a = {}))
        },
        CWip: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "d", (function() {
                return l
            })), n.d(t, "e", (function() {
                return d
            })), n.d(t, "f", (function() {
                return f
            })), n.d(t, "g", (function() {
                return c
            })), n.d(t, "h", (function() {
                return p
            }));
            var r = n("WDwj"),
                a = n("Hhoo"),
                c = function(e) {
                    return "atomic" === e.type || "final" === e.type
                };

            function i(e) {
                return Object(a.j)(e.states).map((function(t) {
                    return e.states[t]
                }))
            }

            function o(e) {
                var t = [e];
                return c(e) ? t : t.concat(Object(a.a)(i(e).map(o)))
            }

            function s(e, t) {
                var n, a, c, o, s, l, d, p, f = u(new Set(e)),
                    b = new Set(t);
                try {
                    for (var O = Object(r.e)(b), h = O.next(); !h.done; h = O.next())
                        for (var m = (w = h.value).parent; m && !b.has(m);) b.add(m), m = m.parent
                } catch (x) {
                    n = {
                        error: x
                    }
                } finally {
                    try {
                        h && !h.done && (a = O.return) && a.call(O)
                    } finally {
                        if (n) throw n.error
                    }
                }
                var v = u(b);
                try {
                    for (var y = Object(r.e)(b), j = y.next(); !j.done; j = y.next()) {
                        if ("compound" !== (w = j.value).type || v.get(w) && v.get(w).length) {
                            if ("parallel" === w.type) try {
                                for (var g = (s = void 0, Object(r.e)(i(w))), E = g.next(); !E.done; E = g.next()) {
                                    var S = E.value;
                                    "history" !== S.type && (b.has(S) || (b.add(S), f.get(S) ? f.get(S).forEach((function(e) {
                                        return b.add(e)
                                    })) : S.initialStateNodes.forEach((function(e) {
                                        return b.add(e)
                                    }))))
                                }
                            } catch (k) {
                                s = {
                                    error: k
                                }
                            } finally {
                                try {
                                    E && !E.done && (l = g.return) && l.call(g)
                                } finally {
                                    if (s) throw s.error
                                }
                            }
                        } else f.get(w) ? f.get(w).forEach((function(e) {
                            return b.add(e)
                        })) : w.initialStateNodes.forEach((function(e) {
                            return b.add(e)
                        }))
                    }
                } catch (P) {
                    c = {
                        error: P
                    }
                } finally {
                    try {
                        j && !j.done && (o = y.return) && o.call(y)
                    } finally {
                        if (c) throw c.error
                    }
                }
                try {
                    for (var T = Object(r.e)(b), C = T.next(); !C.done; C = T.next()) {
                        var w;
                        for (m = (w = C.value).parent; m && !b.has(m);) b.add(m), m = m.parent
                    }
                } catch (z) {
                    d = {
                        error: z
                    }
                } finally {
                    try {
                        C && !C.done && (p = T.return) && p.call(T)
                    } finally {
                        if (d) throw d.error
                    }
                }
                return b
            }

            function u(e) {
                var t, n, a = new Map;
                try {
                    for (var c = Object(r.e)(e), i = c.next(); !i.done; i = c.next()) {
                        var o = i.value;
                        a.has(o) || a.set(o, []), o.parent && (a.has(o.parent) || a.set(o.parent, []), a.get(o.parent).push(o))
                    }
                } catch (s) {
                    t = {
                        error: s
                    }
                } finally {
                    try {
                        i && !i.done && (n = c.return) && n.call(c)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return a
            }

            function l(e, t) {
                return function e(t, n) {
                    var r = n.get(t);
                    if (!r) return {};
                    if ("compound" === t.type) {
                        var a = r[0];
                        if (!a) return {};
                        if (c(a)) return a.key
                    }
                    var i = {};
                    return r.forEach((function(t) {
                        i[t.key] = e(t, n)
                    })), i
                }(e, u(s([e], t)))
            }

            function d(e, t) {
                return Array.isArray(e) ? e.some((function(e) {
                    return e === t
                })) : e instanceof Set && e.has(t)
            }

            function p(e) {
                return Object(a.a)(Object(r.d)(new Set(e.map((function(e) {
                    return e.ownEvents
                })))))
            }

            function f(e, t) {
                return "compound" === t.type ? i(t).some((function(t) {
                    return "final" === t.type && d(e, t)
                })) : "parallel" === t.type && i(t).every((function(t) {
                    return f(e, t)
                }))
            }
        },
        "D2/y": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e, t) {
                var n = [],
                    r = new Map,
                    a = !0,
                    c = !1,
                    i = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done); a = !0) {
                        var u = o.value;
                        r.has(u[t]) || (r.set(u[t], !0), n.push(u))
                    }
                } catch (l) {
                    c = !0, i = l
                } finally {
                    try {
                        a || null == s.return || s.return()
                    } finally {
                        if (c) throw i
                    }
                }
                return n
            }
        },
        Du1H: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var r = new Map,
                a = 0,
                c = {
                    bookId: function() {
                        return "x:" + a++
                    },
                    register: function(e, t) {
                        return r.set(e, t), e
                    },
                    get: function(e) {
                        return r.get(e)
                    },
                    free: function(e) {
                        r.delete(e)
                    }
                }
        },
        E7j9: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        EJk9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return c
            }));
            var r = n("o5YE"),
                a = Object(r.storageFactory)((function() {
                    return window.localStorage
                })),
                c = Object(r.storageFactory)((function() {
                    return window.sessionStorage
                }))
        },
        FYay: function(e, t, n) {
            "use strict";

            function r(e) {
                this.message = e
            }
            r.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, r.prototype.__CANCEL__ = !0, e.exports = r
        },
        GpBo: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        viewBox: "0 0 39 39",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M24.8 18.7l-2.4 2.1s-1.1.9-1.3 2.6c0 1.1-.9 2-2 2s-2-.9-2-2c0 0-.3-2.8 2.1-5 2.2-2 4.4-3.5 3.8-5.4-.7-2.5-3.8-3-5.6-1.8-.7.5-1.1 1.1-1.4 1.8-.1.3-.2.5-.3.7s-.1.4-.1.5c-.2 1-1.1 1.8-2.1 1.8-1.2 0-2.1-1-2.1-2.1v-.3c.1-1 .8-4.4 5.2-6 0 0 6.3-2 9.8 2.6 3.6 4.7-1.6 8.5-1.6 8.5zm-5.5 13.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM19.5 0C8.7 0 0 8.7 0 19.5S8.7 39 19.5 39 39 30.3 39 19.5 30.3 0 19.5 0z"
                    }))
                })));
            i.displayName = "QuestionMarkIcon"
        },
        Gtiz: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "matchesState", (function() {
                return r.n
            })), n.d(t, "mapState", (function() {
                return c
            })), n.d(t, "ActionTypes", (function() {
                return i.a
            })), n.d(t, "SpecialTargets", (function() {
                return i.b
            })), n.d(t, "assign", (function() {
                return o.b
            })), n.d(t, "doneInvoke", (function() {
                return o.e
            })), n.d(t, "forwardTo", (function() {
                return o.h
            })), n.d(t, "send", (function() {
                return o.q
            })), n.d(t, "sendParent", (function() {
                return o.r
            })), n.d(t, "sendUpdate", (function() {
                return o.s
            })), n.d(t, "State", (function() {
                return s.a
            })), n.d(t, "StateNode", (function() {
                return u.a
            })), n.d(t, "Machine", (function() {
                return l.a
            })), n.d(t, "createMachine", (function() {
                return l.b
            })), n.d(t, "Interpreter", (function() {
                return d.a
            })), n.d(t, "interpret", (function() {
                return d.b
            })), n.d(t, "spawn", (function() {
                return d.c
            })), n.d(t, "matchState", (function() {
                return p
            })), n.d(t, "actions", (function() {
                return f
            }));
            var r = n("Hhoo"),
                a = n("WDwj");

            function c(e, t) {
                var n, c, i;
                try {
                    for (var o = Object(a.e)(Object(r.j)(e)), s = o.next(); !s.done; s = o.next()) {
                        var u = s.value;
                        Object(r.n)(u, t) && (!i || t.length > i.length) && (i = u)
                    }
                } catch (l) {
                    n = {
                        error: l
                    }
                } finally {
                    try {
                        s && !s.done && (c = o.return) && c.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return e[i]
            }
            var i = n("C1IE"),
                o = n("AsJ6"),
                s = n("C+hi"),
                u = n("B4/D"),
                l = n("rpJ/"),
                d = n("wMhT");

            function p(e, t, n) {
                var r, c, i = s.a.from(e, e instanceof s.a ? e.context : void 0);
                try {
                    for (var o = Object(a.e)(t), u = o.next(); !u.done; u = o.next()) {
                        var l = Object(a.b)(u.value, 2),
                            d = l[0],
                            p = l[1];
                        if (i.matches(d)) return p(i)
                    }
                } catch (f) {
                    r = {
                        error: f
                    }
                } finally {
                    try {
                        u && !u.done && (c = o.return) && c.call(o)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return n(i)
            }
            var f = {
                raise: o.l,
                send: o.q,
                sendParent: o.r,
                sendUpdate: o.s,
                log: o.k,
                cancel: o.c,
                start: o.t,
                stop: o.u,
                assign: o.b,
                after: o.a,
                done: o.d,
                respond: o.p,
                forwardTo: o.h,
                escalate: o.g
            }
        },
        Hhoo: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "c", (function() {
                return k
            })), n.d(t, "d", (function() {
                return g
            })), n.d(t, "e", (function() {
                return P
            })), n.d(t, "f", (function() {
                return A
            })), n.d(t, "g", (function() {
                return R
            })), n.d(t, "h", (function() {
                return E
            })), n.d(t, "i", (function() {
                return z
            })), n.d(t, "j", (function() {
                return i
            })), n.d(t, "k", (function() {
                return j
            })), n.d(t, "l", (function() {
                return f
            })), n.d(t, "m", (function() {
                return p
            })), n.d(t, "n", (function() {
                return o
            })), n.d(t, "o", (function() {
                return O
            })), n.d(t, "p", (function() {
                return B
            })), n.d(t, "q", (function() {
                return S
            })), n.d(t, "r", (function() {
                return b
            })), n.d(t, "s", (function() {
                return d
            })), n.d(t, "t", (function() {
                return F
            })), n.d(t, "u", (function() {
                return I
            })), n.d(t, "v", (function() {
                return y
            })), n.d(t, "w", (function() {
                return L
            })), n.d(t, "x", (function() {
                return N
            })), n.d(t, "y", (function() {
                return M
            })), n.d(t, "z", (function() {
                return u
            })), n.d(t, "A", (function() {
                return h
            })), n.d(t, "B", (function() {
                return l
            })), n.d(t, "C", (function() {
                return D
            })), n.d(t, "D", (function() {
                return _
            })), n.d(t, "E", (function() {
                return w
            })), n.d(t, "F", (function() {
                return C
            })), n.d(t, "G", (function() {
                return x
            }));
            var r = n("WDwj"),
                a = n("UVQZ"),
                c = n("AknM");

            function i(e) {
                return Object.keys(e)
            }

            function o(e, t, n) {
                void 0 === n && (n = a.c);
                var r = l(e, n),
                    c = l(t, n);
                return z(c) ? !!z(r) && c === r : z(r) ? r in c : i(r).every((function(e) {
                    return e in c && o(r[e], c[e])
                }))
            }

            function s(e) {
                try {
                    return z(e) || "number" === typeof e ? "" + e : e.type
                } catch (t) {
                    throw new Error("Events must be strings or objects with a string event.type property.")
                }
            }

            function u(e, t) {
                try {
                    return k(e) ? e : e.toString().split(t)
                } catch (n) {
                    throw new Error("'" + e + "' is not a valid state path.")
                }
            }

            function l(e, t) {
                return "object" === typeof(n = e) && "value" in n && "context" in n && "event" in n && "_event" in n ? e.value : k(e) ? d(e) : "string" !== typeof e ? e : d(u(e, t));
                var n
            }

            function d(e) {
                if (1 === e.length) return e[0];
                for (var t = {}, n = t, r = 0; r < e.length - 1; r++) r === e.length - 2 ? n[e[r]] = e[r + 1] : (n[e[r]] = {}, n = n[e[r]]);
                return t
            }

            function p(e, t) {
                for (var n = {}, r = i(e), a = 0; a < r.length; a++) {
                    var c = r[a];
                    n[c] = t(e[c], c, e, a)
                }
                return n
            }

            function f(e, t, n) {
                var a, c, o = {};
                try {
                    for (var s = Object(r.e)(i(e)), u = s.next(); !u.done; u = s.next()) {
                        var l = u.value,
                            d = e[l];
                        n(d) && (o[l] = t(d, l, e))
                    }
                } catch (p) {
                    a = {
                        error: p
                    }
                } finally {
                    try {
                        u && !u.done && (c = s.return) && c.call(s)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return o
            }
            var b = function(e) {
                return function(t) {
                    var n, a, c = t;
                    try {
                        for (var i = Object(r.e)(e), o = i.next(); !o.done; o = i.next()) {
                            c = c[o.value]
                        }
                    } catch (s) {
                        n = {
                            error: s
                        }
                    } finally {
                        try {
                            o && !o.done && (a = i.return) && a.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return c
                }
            };

            function O(e, t) {
                return function(n) {
                    var a, c, i = n;
                    try {
                        for (var o = Object(r.e)(e), s = o.next(); !s.done; s = o.next()) {
                            var u = s.value;
                            i = i[t][u]
                        }
                    } catch (l) {
                        a = {
                            error: l
                        }
                    } finally {
                        try {
                            s && !s.done && (c = o.return) && c.call(o)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    return i
                }
            }

            function h(e) {
                return e ? z(e) ? [
                    [e]
                ] : m(i(e).map((function(t) {
                    var n = e[t];
                    return "string" === typeof n || n && Object.keys(n).length ? h(e[t]).map((function(e) {
                        return [t].concat(e)
                    })) : [
                        [t]
                    ]
                }))) : [
                    []
                ]
            }

            function m(e) {
                var t;
                return (t = []).concat.apply(t, Object(r.d)(e))
            }

            function v(e) {
                return k(e) ? e : [e]
            }

            function y(e) {
                return void 0 === e ? [] : v(e)
            }

            function j(e, t, n) {
                var a, c;
                if (P(e)) return e(t, n.data);
                var o = {};
                try {
                    for (var s = Object(r.e)(i(e)), u = s.next(); !u.done; u = s.next()) {
                        var l = u.value,
                            d = e[l];
                        P(d) ? o[l] = d(t, n.data) : o[l] = d
                    }
                } catch (p) {
                    a = {
                        error: p
                    }
                } finally {
                    try {
                        u && !u.done && (c = s.return) && c.call(s)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return o
            }

            function g(e) {
                return /^(done|error)\./.test(e)
            }

            function E(e) {
                return e instanceof Promise || !(null === e || !P(e) && "object" !== typeof e || !P(e.then))
            }

            function S(e, t) {
                var n, a, c = Object(r.b)([
                        [],
                        []
                    ], 2),
                    i = c[0],
                    o = c[1];
                try {
                    for (var s = Object(r.e)(e), u = s.next(); !u.done; u = s.next()) {
                        var l = u.value;
                        t(l) ? i.push(l) : o.push(l)
                    }
                } catch (d) {
                    n = {
                        error: d
                    }
                } finally {
                    try {
                        u && !u.done && (a = s.return) && a.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return [i, o]
            }

            function T(e, t) {
                return p(e.states, (function(e, n) {
                    if (e) {
                        var r = (z(t) ? void 0 : t[n]) || (e ? e.current : void 0);
                        if (r) return {
                            current: r,
                            states: T(e, r)
                        }
                    }
                }))
            }

            function C(e, t) {
                return {
                    current: t,
                    states: T(e, t)
                }
            }

            function w(e, t, n, a) {
                return c.a || x(!!e, "Attempting to update undefined context"), e ? n.reduce((function(e, n) {
                    var c, o, s = n.assignment,
                        u = {
                            state: a,
                            action: n,
                            _event: t
                        },
                        l = {};
                    if (P(s)) l = s(e, t.data, u);
                    else try {
                        for (var d = Object(r.e)(i(s)), p = d.next(); !p.done; p = d.next()) {
                            var f = p.value,
                                b = s[f];
                            l[f] = P(b) ? b(e, t.data, u) : b
                        }
                    } catch (O) {
                        c = {
                            error: O
                        }
                    } finally {
                        try {
                            p && !p.done && (o = d.return) && o.call(d)
                        } finally {
                            if (c) throw c.error
                        }
                    }
                    return Object.assign({}, e, l)
                }), e) : e
            }
            var x = function() {};

            function k(e) {
                return Array.isArray(e)
            }

            function P(e) {
                return "function" === typeof e
            }

            function z(e) {
                return "string" === typeof e
            }

            function N(e, t) {
                if (e) return z(e) ? {
                    type: a.a,
                    name: e,
                    predicate: t ? t[e] : void 0
                } : P(e) ? {
                    type: a.a,
                    name: e.name,
                    predicate: e
                } : e
            }

            function R(e) {
                try {
                    return "subscribe" in e && P(e.subscribe)
                } catch (t) {
                    return !1
                }
            }
            c.a || (x = function(e, t) {
                var n = e instanceof Error ? e : void 0;
                if ((n || !e) && void 0 !== console) {
                    var r = ["Warning: " + t];
                    n && r.push(n), console.warn.apply(console, r)
                }
            });
            var I = function() {
                return "function" === typeof Symbol && Symbol.observable || "@@observable"
            }();

            function A(e) {
                try {
                    return "__xstatenode" in e
                } catch (t) {
                    return !1
                }
            }
            var _ = function() {
                var e = 0;
                return function() {
                    return (++e).toString(16)
                }
            }();

            function L(e, t) {
                return z(e) || "number" === typeof e ? Object(r.a)({
                    type: e
                }, t) : e
            }

            function M(e, t) {
                if (!z(e) && "$$type" in e && "scxml" === e.$$type) return e;
                var n = L(e);
                return Object(r.a)({
                    name: n.type,
                    data: n,
                    $$type: "scxml",
                    type: "external"
                }, t)
            }

            function D(e, t) {
                return v(t).map((function(t) {
                    return "undefined" === typeof t || "string" === typeof t || A(t) ? {
                        target: t,
                        event: e
                    } : Object(r.a)(Object(r.a)({}, t), {
                        event: e
                    })
                }))
            }

            function B(e) {
                if (void 0 !== e && e !== a.d) return y(e)
            }

            function F(e, t, n) {
                if (!c.a) {
                    var r = e.stack ? " Stacktrace was '" + e.stack + "'" : "";
                    if (e === t) console.error("Missing onError handler for invocation '" + n + "', error was '" + e + "'." + r);
                    else {
                        var a = t.stack ? " Stacktrace was '" + t.stack + "'" : "";
                        console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '" + n + "'. Original error: '" + e + "'. " + r + " Current error is '" + t + "'." + a)
                    }
                }
            }
        },
        IOAS: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        },
        IdR4: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    integersWithFractionDigits: !1
                };
                return !t.integersWithFractionDigits && Number.isInteger(e) ? String(e) : e.toLocaleString("pl-PL", {
                    minimumFractionDigits: 2
                })
            }
        },
        IyoU: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        x: 0,
                        y: 0,
                        viewBox: "391 -290.7 650 850",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M466 358.4v-24.1c55.2 0 100 44.8 100 100h-24.1c-.1-38.5-27.6-74.1-75.9-75.9zm125.6 75.9H616c0-82.8-67.2-150-150-150v24.4c66.3.1 125.5 59.3 125.6 125.6zm449.4-675v750c0 27.6-22.4 50-50 50H441c-27.6 0-50-22.4-50-50v-750c0-27.6 22.4-50 50-50h550c27.6 0 50 22.4 50 50zm-300 750c0-13.8-11.2-25-25-25s-25 11.2-25 25 11.2 25 25 25 25-11.2 25-25zm250-750H441v700h550v-700zm-500 675h25c-.3-27.4-22.6-50-50-50v25c14.1 0 25 10.9 25 25z"
                    }))
                })));
            i.displayName = "DeviceTabletConnectedIcon"
        },
        J1qw: function(e, t, n) {
            "use strict";
            var r = n("FYay");

            function a(e) {
                if ("function" !== typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }));
                var n = this;
                e((function(e) {
                    n.reason || (n.reason = new r(e), t(n.reason))
                }))
            }
            a.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, a.source = function() {
                var e;
                return {
                    token: new a((function(t) {
                        e = t
                    })),
                    cancel: e
                }
            }, e.exports = a
        },
        LhRf: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 16 18",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M3.1 6.4H10.4c.2 0 .4.1.5.3.1.3 0 .6-.3.7H3.1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5zm7.3 3.1H3.1c-.3 0-.5-.2-.5-.5v-.1c0-.3.2-.5.5-.5h7.2c.3 0 .5.2.5.5.1.4-.1.6-.4.6zm-7.7 1.3c.1-.1.3-.2.4-.2h7.2c.1 0 .2 0 .3.1l-1 1H3.1c-.2 0-.4-.1-.5-.3 0-.2 0-.4.1-.6zm2.5 2.9h-2c-.3 0-.5-.2-.6-.5 0-.3.2-.5.5-.6h2c.3 0 .5.2.6.5 0 .4-.2.6-.5.6zm5.1-9.5h3.2L9.4 0v3.2c-.1.5.3 1 .9 1zM16 9.3c0-.2-.1-.4-.2-.5l-.9-.9-.4-.4-.4.4-.6.6V5.3h-3.1c-1.2 0-2.1-1-2.1-2.1V0H0v16.9c0 .6.5 1.1 1 1.1h12.5v-5.8l2.2-2.3c.2-.2.3-.4.3-.6zm-1.7 1.4c-.1 0-.1 0 0 0-1.4 1.5-4.4 4.5-5.4 5.5l-2.3 1.2 1.2-2.3 5.5-5.6.9.9s.1.1.1.2v.1zm1.1-1.2l-.6.7-1.1-1.1.8-.8.9.9c.1.1.1.2 0 .3z"
                    }))
                })));
            i.displayName = "DocumentEditableIcon"
        },
        M44J: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, r, a) {
                return e.config = t, n && (e.code = n), e.request = r, e.response = a, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, e
            }
        },
        "N/5i": function(e, t, n) {
            "use strict";
            var r = n("P0jV");
            e.exports = function(e, t) {
                t = t || {};
                var n = {},
                    a = ["url", "method", "params", "data"],
                    c = ["headers", "auth", "proxy"],
                    i = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
                r.forEach(a, (function(e) {
                    "undefined" !== typeof t[e] && (n[e] = t[e])
                })), r.forEach(c, (function(a) {
                    r.isObject(t[a]) ? n[a] = r.deepMerge(e[a], t[a]) : "undefined" !== typeof t[a] ? n[a] = t[a] : r.isObject(e[a]) ? n[a] = r.deepMerge(e[a]) : "undefined" !== typeof e[a] && (n[a] = e[a])
                })), r.forEach(i, (function(r) {
                    "undefined" !== typeof t[r] ? n[r] = t[r] : "undefined" !== typeof e[r] && (n[r] = e[r])
                }));
                var o = a.concat(c).concat(i),
                    s = Object.keys(t).filter((function(e) {
                        return -1 === o.indexOf(e)
                    }));
                return r.forEach(s, (function(r) {
                    "undefined" !== typeof t[r] ? n[r] = t[r] : "undefined" !== typeof e[r] && (n[r] = e[r])
                })), n
            }
        },
        O3AJ: function(e, t, n) {
            "use strict";
            var r = n("P0jV");

            function a() {
                this.handlers = []
            }
            a.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }), this.handlers.length - 1
            }, a.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, a.prototype.forEach = function(e) {
                r.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }, e.exports = a
        },
        O6AW: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Sufler", (function() {
                return lu
            }));
            var r = {};
            n.r(r), n.d(r, "Description", (function() {
                return H
            })), n.d(r, "Main", (function() {
                return de
            })), n.d(r, "Container", (function() {
                return Oe
            }));
            var a = {};
            n.r(a), n.d(a, "Main", (function() {
                return ge
            })), n.d(a, "Description", (function() {
                return Pe
            }));
            var c = {};
            n.r(c), n.d(c, "Description", (function() {
                return ze
            })), n.d(c, "Main", (function() {
                return Je
            }));
            var i = {};
            n.r(i), n.d(i, "Main", (function() {
                return Ht
            })), n.d(i, "Description", (function() {
                return Jt
            })), n.d(i, "Container", (function() {
                return Zt
            }));
            var o = {};
            n.r(o), n.d(o, "Main", (function() {
                return oi
            })), n.d(o, "Description", (function() {
                return mi
            })), n.d(o, "Container", (function() {
                return vi
            }));
            var s = {};
            n.r(s), n.d(s, "Main", (function() {
                return Ai
            })), n.d(s, "Description", (function() {
                return Li
            }));
            var u = {};
            n.r(u), n.d(u, "Main", (function() {
                return Gi
            })), n.d(u, "Description", (function() {
                return Li
            }));
            var l = {};
            n.r(l), n.d(l, "Description", (function() {
                return po
            })), n.d(l, "Main", (function() {
                return fo
            }));
            var d = {};
            n.r(d), n.d(d, "Description", (function() {
                return bo
            })), n.d(d, "Main", (function() {
                return So
            }));
            var p = {};
            n.r(p), n.d(p, "Description", (function() {
                return Po
            })), n.d(p, "Main", (function() {
                return zo
            })), n.d(p, "Container", (function() {
                return No
            }));
            var f = {};
            n.r(f), n.d(f, "Main", (function() {
                return Ro
            })), n.d(f, "Description", (function() {
                return Io
            }));
            var b = {};
            n.r(b), n.d(b, "Main", (function() {
                return Ho
            })), n.d(b, "Description", (function() {
                return Wo
            })), n.d(b, "Container", (function() {
                return Jo
            }));
            var O = {};
            n.r(O), n.d(O, "Main", (function() {
                return Qo
            })), n.d(O, "Description", (function() {
                return ts
            }));
            var h = {};
            n.r(h), n.d(h, "Main", (function() {
                return Ts
            })), n.d(h, "Description", (function() {
                return Cs
            })), n.d(h, "Container", (function() {
                return ws
            }));
            var m = {};
            n.r(m), n.d(m, "Main", (function() {
                return Bs
            })), n.d(m, "Description", (function() {
                return Gs
            }));
            var v = {};
            n.r(v), n.d(v, "Description", (function() {
                return Ws.a
            })), n.d(v, "Main", (function() {
                return Zs
            })), n.d(v, "Container", (function() {
                return $s
            }));
            var y = n("zjfJ"),
                j = n("5IAQ"),
                g = n("ERkP"),
                E = n.n(g),
                S = n("Kq2c"),
                T = n("Zscy"),
                C = n("zygG"),
                w = n("7xIC"),
                x = n("+SGW"),
                k = n("I6rk"),
                P = function(e) {
                    var t = E.a.useRef();
                    return E.a.useEffect((function() {
                        t.current = e
                    })), t.current
                },
                z = n("EJk9"),
                N = n("y6sE"),
                R = n("cxan"),
                I = n("l1C2");
            E.a.createElement;
            var A = {
                    name: "1kc3nqq",
                    styles: "margin:0;padding:0;font-size:14px;margin-right:20px;"
                },
                _ = function(e) {
                    var t = Object(S.useTheme)(),
                        n = t.colors,
                        r = t.bp,
                        a = Object(T.b)(),
                        c = a.selectedAccount,
                        i = a.currentStep,
                        o = a.dispatch;
                    if (!c) return null;
                    var s = c.code;
                    return Object(I.b)("div", Object(R.a)({
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            alignItems: "flex-end"
                        }, r.FROM_TABLET, {
                            alignItems: "baseline"
                        }), "")
                    }, e), Object(I.b)("p", {
                        css: A
                    }, Object(I.b)("span", {
                        css: Object(j.a)(Object(y.a)({}, r.ONLY_MOBILE, {
                            display: "block"
                        }), "")
                    }, "Twoje konto:", " "), Object(I.b)("strong", null, "Us\u0142ugi kom\xf3rkowe"), Object(I.b)("span", {
                        css: Object(j.a)(Object(y.a)({
                            color: n.SILVER,
                            fontSize: 12,
                            marginLeft: 5
                        }, r.FROM_TABLET, {
                            marginLeft: 10
                        }), "")
                    }, s || "Nowe konto")), Object(I.b)(S.AButton, {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14
                        }, r.ONLY_MOBILE, {
                            marginBottom: 4
                        }), ""),
                        onClick: function() {
                            "PROCESSES" === i && (o({
                                type: "resetSelectedProcess"
                            }), o({
                                type: "setCurrentSingleOffer",
                                payload: null
                            })), "OFFERS" === i && (o({
                                type: "resetSelectedOffer"
                            }), o({
                                type: "resetSelectedProcess"
                            }), o({
                                type: "setCurrentSingleOffer",
                                payload: null
                            })), o({
                                type: "goToChangeAccount"
                            })
                        }
                    }, "Zmie\u0144"))
                },
                L = n("HbGN");
            E.a.createElement;
            var M = {
                    name: "70qvj9",
                    styles: "display:flex;align-items:center;"
                },
                D = {
                    name: "ece9u5",
                    styles: "min-width:120px;"
                },
                B = {
                    name: "pkt9zc",
                    styles: "margin:0;padding:0;font-size:14px;margin-left:15px;"
                },
                F = function(e) {
                    var t = e.variant,
                        n = Object(L.a)(e, ["variant"]),
                        r = Object(T.b)(),
                        a = r.dispatch,
                        c = r.currentStep;
                    return Object(I.b)("div", Object(R.a)({
                        css: M
                    }, n), Object(I.b)(S.Button, {
                        style: {
                            height: 30
                        },
                        onClick: function() {
                            "PROCESSES" === c && (a({
                                type: "resetSelectedProcess"
                            }), a({
                                type: "setCurrentSingleOffer",
                                payload: null
                            })), "OFFERS" === c && (a({
                                type: "resetSelectedOffer"
                            }), a({
                                type: "resetSelectedProcess"
                            }), a({
                                type: "setCurrentSingleOffer",
                                payload: null
                            })), a({
                                type: "setAuhtorizationType",
                                payload: "EMAIL"
                            }), a({
                                type: "goToLogin"
                            })
                        },
                        size: "SMALL",
                        variant: t,
                        css: D
                    }, "Zaloguj si\u0119"), Object(I.b)("p", {
                        css: B
                    }, Object(I.b)("strong", null, "aby zobaczy\u0107 co mo\u017cesz otrzymywa\u0107")))
                },
                V = n("Q1tT"),
                U = (E.a.createElement, function(e) {
                    var t = Object(N.b)().isInApp,
                        n = Object(T.b)(),
                        r = n.isUserLogged,
                        a = n.isB2B,
                        c = Object(V.c)().loggedCustomerPath;
                    return t || !t && c && !a ? r ? Object(I.b)(_, e) : Object(I.b)(F, e) : null
                }),
                H = (E.a.createElement, E.a.memo((function() {
                    var e, t, n = Object(S.useTheme)().bp,
                        r = Object(T.b)().isB2B,
                        a = Object(S.useLayer)().level > 0;
                    return Object(I.b)("div", null, Object(I.b)("h2", {
                        css: Object(j.a)((e = {}, Object(y.a)(e, n.ONLY_MOBILE, {
                            padding: 20,
                            paddingTop: 10
                        }), Object(y.a)(e, n.FROM_TABLET, {
                            padding: 20
                        }), Object(y.a)(e, n.FROM_DESKTOP, {
                            display: r || a ? void 0 : "none"
                        }), Object(y.a)(e, "@media (min-width: 1240px)", {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), ""),
                        dangerouslySetInnerHTML: {
                            __html: "Wybierz, co <br /> Ci\u0119 interesuje"
                        }
                    }), Object(I.b)(U, {
                        css: Object(j.a)((t = {
                            paddingLeft: 20,
                            paddingRight: 20
                        }, Object(y.a)(t, n.FROM_TABLET, {
                            marginBottom: 30
                        }), Object(y.a)(t, n.FROM_DESKTOP, {
                            display: "none"
                        }), t), "")
                    }))
                })));
            H.displayName = "Description";
            var G = n("6LC/"),
                W = n("SNEr"),
                K = n("0eZi"),
                q = n("tkdL"),
                Y = n("LhRf"),
                X = n("4oY/"),
                J = n("XkRH"),
                Z = n("nhRS"),
                Q = n("IyoU"),
                $ = n("wS+0"),
                ee = (g.createElement, g.memo((function(e) {
                    return Object(I.b)("svg", Object(R.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 850 850",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(I.b)("g", {
                        fill: "currentColor"
                    }, Object(I.b)("path", {
                        d: "M63.7 134.6v226.1h135.2V412H2.7V134.6zM512.3 211.1l42.3 137.1h.8l42.3-137.1h54.8l-68 200.9h-61.3l-68.8-200.9zM749.4 205.7c18.9 0 35.7 4.4 50.5 13.2 14.7 8.8 26.3 21.6 34.7 38.3 8.4 16.7 12.6 35.9 12.6 57.7 0 2.1-.1 5.5-.4 10.1H702c.5 16.1 4.7 28.6 12.6 37.5 7.9 8.9 20 13.4 36.3 13.4 10.1 0 19.3-2.5 27.7-7.6 8.4-5.1 13.8-11.2 16.1-18.5h48.6c-14.2 45.1-45.6 67.6-94 67.6-18.4-.3-35.4-4.2-51.1-12-15.7-7.8-28.2-19.9-37.5-36.3s-14-35.5-14-57.3c0-20.4 4.7-39.1 14.2-55.9 9.5-16.8 22-29.4 37.7-37.7 15.8-8.4 32.7-12.5 50.8-12.5m42.3 84.3c-2.6-15-7.4-25.9-14.3-32.6-7-6.7-17-10.1-29.9-10.1-13.5 0-24.1 3.8-31.9 11.5-7.7 7.6-12.3 18-13.6 31.3h89.7zM228.5 412h201V211h-201v201zm149.8-51.3h-98.5v-98.4h98.5v98.4zM293.1 534.4h3.9c0-8.9-7.2-16-16-16v3.8c7.7.4 12.1 6 12.1 12.2m8 0h3.9c0-13.3-10.8-24.1-24.1-24.1v3.9c10.6.1 20.1 9.6 20.2 20.2m88.1 0v-64.3c0-4.4-3.6-8-8-8H276.9c-4.4 0-8 3.6-8 8V546.5h120.4l-.1-12.1zm-8 4H276.9v-68.2h104.3v68.2zm-40.1 12.1c0 2.2-1.8 4-4 4H321c-2.2 0-4-1.8-4-4h-56.2v8c0 2.2 1.8 4 4 4h128.4c2.2 0 4-1.8 4-4v-8h-56.1zm-56.2-16.1h4c0-4.4-3.6-8-8-8v4c2.3 0 4 1.8 4 4M527.3 462.2h-35.4c-3.3 0-5.9 2.6-5.9 5.9v88.5c0 3.2 2.6 5.9 5.9 5.9h50.2c3.2 0 5.9-2.7 5.9-5.9v-73.7l-20.7-20.7zm-35.4 47.2c0-1.6 1.3-2.9 3-2.9h11.8v14.7h-14.8v-11.8zm14.7 47.2h-11.8c-1.6 0-3-1.3-3-2.9v-11.8h14.8v14.7zm17.8 0h-14.8v-14.7h14.8v14.7zm0-17.7h-32.5v-14.8h17.7v-17.7h14.8v32.5zm17.7 14.8c0 1.6-1.4 2.9-3 2.9h-11.8v-14.7h14.8v11.8zm0-14.8h-14.8v-14.8h14.8v14.8zm0-17.7h-14.8v-14.7h11.8c1.6 0 3 1.3 3 2.9v11.8zM604 462.2h-35.4c-3.3 0-5.9 2.6-5.9 5.9v88.5c0 3.2 2.6 5.9 5.9 5.9h50.1c3.3 0 5.9-2.7 5.9-5.9v-73.7L604 462.2zm-35.4 47.2c0-1.6 1.3-2.9 3-2.9h11.8v14.7h-14.7v-11.8zm14.7 47.2h-11.8c-1.6 0-3-1.3-3-2.9v-11.8h14.7v14.7zm17.8 0h-14.8v-14.7h14.8v14.7zm0-17.7h-32.4v-14.8h17.7v-17.7h14.8c-.1.1-.1 32.5-.1 32.5zm17.6 14.8c0 1.6-1.3 2.9-3 2.9H604v-14.7h14.7v11.8zm0-14.8H604v-14.8h14.7v14.8zm0-17.7H604v-14.7h11.7c1.7 0 3 1.3 3 2.9v11.8zM238 612.8v100.6h-19v-9.3h-.3c-4.3 7.5-11.7 11.3-22.1 11.3-10.1 0-18-3.6-23.9-11-5.9-7.3-8.8-16.6-8.8-28 0-11.1 3-20.2 8.9-27.2 6-7 13.7-10.6 23.3-10.6 4.4 0 8.6.9 12.5 2.8 3.9 1.8 6.9 4.5 9.1 8.1h.3v-36.6c0-.1 20-.1 20-.1zm-54.1 64.1c0 6.7 1.6 12.2 4.7 16.7 3.2 4.5 7.4 6.7 12.9 6.7 5.7 0 10-2.1 12.9-6.3 2.9-4.2 4.3-9.9 4.3-17.3 0-7.3-1.5-13-4.5-17.1-3-4-7.3-6-12.8-6-5.7 0-10.1 2.1-13 6.3-3 4.3-4.5 10-4.5 17M250.9 612.8h20v100.6h-20zM317.4 638.5c21.2.1 31.9 7 31.9 20.7v38.6c0 7.1.8 12.3 2.5 15.5h-20.3c-.7-2.3-1.2-4.6-1.4-7.1-5.9 6-14.1 9-24.5 9-7.6 0-13.7-1.9-18.1-5.8-4.5-3.9-6.7-9.2-6.7-16.1 0-6.7 2.1-11.8 6.4-15.5 4.3-3.8 12.2-6.3 23.5-7.3 8.1-.8 13.2-1.9 15.4-3.2 2.1-1.3 3.2-3.2 3.2-5.8 0-3.3-1-5.8-3-7.3-2-1.6-5.3-2.4-9.9-2.4-4.2 0-7.4.9-9.6 2.6-2.2 1.8-3.4 4.6-3.8 8.4h-20c.5-8 3.8-14 9.9-18.2 6.1-3.9 14.2-6.1 24.5-6.1m-16.7 54.2c0 6.2 4.1 9.3 12.3 9.3 10.7-.1 16.1-5.6 16.2-16.5v-7.8c-1.6 1.6-5.6 2.8-12.1 3.5-5.6.7-9.8 1.8-12.4 3.5-2.6 1.7-4 4.3-4 8M471.1 612.8v18.6h-48.6v23.2h42.2v17.2h-42.2v41.6h-22.1V612.8zM499.6 629.3h-20v-16.5h20v16.5zm0 84.1h-20v-72.9h20v72.9zM555.1 638.5c1.7 0 3.2.2 4.4.7v18.6c-2.2-.5-4.6-.7-7.2-.7-13.2 0-19.7 7.8-19.7 23.4v32.8h-20v-72.9h19v13.5h.3c1.9-4.7 5-8.5 9.3-11.3 4.3-2.6 9-4.1 13.9-4.1M606.6 638.5c10.6 0 17.7 4.1 21.3 12.1 5.6-8.1 13-12.1 22.2-12.1 9.1 0 15.8 2.3 20.1 6.9 4.3 4.6 6.4 11 6.4 19v48.9h-20.1v-42.1c0-6.4-1-10.8-2.9-13.3-1.9-2.4-5-3.7-9.4-3.7-8.9 0-13.4 6.1-13.4 18.3v40.7h-20v-43c0-6.2-1-10.4-3-12.7-2-2.3-5-3.4-9.2-3.4-3.8 0-7.1 1.5-9.7 4.5-2.6 3.1-3.9 7.1-3.9 12.1v42.4h-20v-72.9h19v9.9h.3c5.5-7.6 13-11.6 22.3-11.6"
                    })))
                })));
            ee.displayName = "Love3Icon";
            g.createElement;
            var te = g.memo((function(e) {
                return Object(I.b)("svg", Object(R.a)({
                    viewBox: "0 0 100 76",
                    width: "1em",
                    height: "1em"
                }, e), Object(I.b)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M93.49 6.1H79v11.6h14.5v2.9H79v2.9h14.5v2.9H79v29c0 4.805-3.939 8.7-8.752 8.7H67.4v5.8a5.805 5.805 0 005.81 5.8h20.28a5.805 5.805 0 005.81-5.8v-58a5.805 5.805 0 00-5.81-5.8zm-2.906 63.8a2.9 2.9 0 11.01-5.8 2.9 2.9 0 01-.01 5.8zM58.7 75.7H15.2v-2.9a2.9 2.9 0 012.9-2.9h11.6v-5.8h17.4v5.8h11.6a2.9 2.9 0 012.9 2.9v2.9zM75.984 5.984v49.3a5.8 5.8 0 01-5.8 5.8H6.5a5.8 5.8 0 01-5.8-5.8v-49.3a5.8 5.8 0 015.8-5.8h63.684a5.8 5.8 0 015.8 5.8zM6.5 49.6V6.1h63.8v43.5zm31.784 2.784a2.9 2.9 0 110 5.8 2.9 2.9 0 010-5.8z"
                }))
            }));
            te.displayName = "PcIcon";
            var ne = {
                    "internet-tv": q.a,
                    "internet-lte": K.a,
                    "love-1": W.a,
                    "sim-1": G.a,
                    "document-editable": Y.a,
                    "sim-mnp": X.a,
                    "document-check": J.a,
                    "sim-activation": Z.a,
                    "device-tablet-connected": Q.a,
                    "device-smartphone-1": $.a,
                    "love-3": ee,
                    pc: te
                },
                re = n("LsVC"),
                ae = (E.a.createElement, E.a.createContext(null)),
                ce = function(e) {
                    var t = E.a.useState(null),
                        n = Object(C.a)(t, 2),
                        r = n[0],
                        a = n[1];
                    return Object(I.b)(ae.Provider, Object(R.a)({
                        value: {
                            hoveredOfferType: r,
                            setHovered: a
                        }
                    }, e))
                },
                ie = function() {
                    var e = E.a.useContext(ae);
                    if (null === e) throw Error("useOffersStepContext: Please provide OffersStepProvider value.");
                    return e
                },
                oe = n("XWgT"),
                se = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.currentUpsellOffer,
                        n = Object(S.useTheme)(),
                        r = n.colors,
                        a = n.bp,
                        c = Object(T.b)().dispatch,
                        i = t.offer.iconList.map((function(e) {
                            return ne[e] || G.a
                        })),
                        o = E.a.useCallback((function() {
                            t && (c({
                                type: "setCurrentUpsellOffer",
                                payload: t
                            }), c({
                                type: "goToUpsell"
                            }))
                        }), [c, t]),
                        s = E.a.useCallback((function(e) {
                            "Enter" === e.key && o()
                        }), [o]);
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)("div", {
                        css: Object(j.a)({
                            backgroundColor: r.BLACK,
                            border: "thin solid ".concat(r.BLACK),
                            width: 20,
                            height: 20,
                            position: "absolute",
                            left: "50%",
                            transform: "rotate(45deg) translateX(-50%)"
                        }, "")
                    }), Object(I.b)(S.ActionListItem, {
                        title: t.offer.title,
                        description: t.offer.description,
                        iconList: i,
                        hasBadge: !1,
                        badgeText: "Oferta dla Ciebie",
                        id: Object(re.a)(t.offer.type, "sufler_button_enhance"),
                        onClick: o,
                        onKeyPress: s,
                        titleCss: {
                            color: r.ORANGE_DARK
                        },
                        css: Object(j.a)(Object(y.a)({
                            backgroundColor: r.BLACK,
                            color: r.WHITE,
                            margin: "0 -20px",
                            padding: "20px",
                            position: "relative",
                            top: "-1px"
                        }, a.ONLY_SMALL_MOBILE, {
                            paddingLeft: 20
                        }), "")
                    }))
                }))),
                ue = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.offer,
                        n = Object(S.useTheme)().colors,
                        r = Object(T.b)(),
                        a = r.dispatch,
                        c = r.contracts,
                        i = r.enhance,
                        o = Object(N.b)(),
                        s = o.market,
                        u = o.isMaintenance,
                        l = Object(V.c)().skipRedirectUrl,
                        d = {
                            offerTypeToUrlMap: {
                                B2B_CORPO: {
                                    VOICE: "/abonament-komorkowy-dla-firm?offerType=VOICE&loyalty=24&processType=ACTIVATION&serviceplan=MOB_PO_5712_6830_7064_6704_7456",
                                    SIMFREE_INST: "/male-firmy/sklep?offerType=SIMFREE_INST&loyalty=0&processType=INSTALMENT_SALES_OF_GOODS_NC&serviceplan=MOB_PO_5712_6830_7064",
                                    FIX1P: "/zamawiam-swiatlowod-biznes",
                                    CONVERGENT4U: "https://lovedlafirm.pl"
                                },
                                B2B_SOHO: {
                                    VOICE: Object(V.c)().redirectVoiceOnB2B ? "/abonament-komorkowy-dla-firm?offerType=VOICE&loyalty=24&processType=ACTIVATION&serviceplan=MOB_PO_5712_6830_7064_6704_7456" : void 0,
                                    SIMFREE_INST: "/male-firmy/sklep?offerType=SIMFREE_INST&loyalty=0&processType=INSTALMENT_SALES_OF_GOODS_NC&serviceplan=MOB_PO_5712_6830_7064",
                                    FIX1P: "/zamawiam-swiatlowod-biznes",
                                    CONVERGENT4U: "https://lovedlafirm.pl"
                                },
                                B2C: {
                                    SIMFREE_INST: "/sklep?offerType=SIMFREE_INST&loyalty=0&processType=INSTALMENT_SALES_OF_GOODS_NC&serviceplan=MOB_PO_5720_6061_7294"
                                }
                            }
                        }.offerTypeToUrlMap,
                        p = null === i || void 0 === i ? void 0 : i.config.find((function(e) {
                            return e.offer.type === t.type
                        })),
                        f = E.a.useMemo((function() {
                            return c && c.find((function(e) {
                                return e.offerType === t.type
                            }))
                        }), [c, t.type]),
                        b = ie().setHovered,
                        O = E.a.useCallback((function() {
                            if (Object(oe.a)(t.type)) a({
                                type: "selectOffersGroup",
                                payload: t.id
                            });
                            else {
                                if (t.redirectUrl) return l ? void a({
                                    type: "selectOffer",
                                    payload: t.type
                                }) : void window.location.assign(t.redirectUrl);
                                var e = s in d && d[s][t.type] || null;
                                e ? window.location.href = e : a(u ? {
                                    type: "goToMaintenance"
                                } : {
                                    type: "selectOffer",
                                    payload: t.type
                                })
                            }
                        }), [t.type, t.redirectUrl, t.id, s, d, u, a, l]),
                        h = E.a.useCallback((function(e) {
                            "Enter" === e.key && O()
                        }), [O]),
                        m = ne[t.iconType];
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)(S.ActionListItem, {
                        title: t.name,
                        description: t.description,
                        icon: m || G.a,
                        hasBadge: !!f,
                        badgeText: "Oferta dla Ciebie",
                        id: Object(re.a)(t.type, "sufler_button"),
                        onClick: O,
                        onMouseEnter: function() {
                            b(t.type)
                        },
                        onMouseLeave: function() {
                            b(null)
                        },
                        onKeyPress: h,
                        titleCss: {
                            color: n.ORANGE_DARK
                        }
                    }), p && p.offer.showBanner && Object(I.b)(se, {
                        currentUpsellOffer: p
                    }))
                })));
            ue.displayName = "Offer";
            E.a.createElement;
            var le = {
                    name: "14ouvi7",
                    styles: "width:100%;max-width:400px;display:flex;flex-direction:column;"
                },
                de = E.a.memo((function() {
                    var e, t, n = Object(T.b)(),
                        r = n.offers,
                        a = n.isB2B,
                        c = Object(S.useLayer)().level > 0,
                        i = Object(S.useTheme)().bp;
                    return Object(I.b)("div", {
                        css: le
                    }, Object(I.b)("h2", {
                        css: Object(j.a)((e = {}, Object(y.a)(e, i.TO_DESKTOP, {
                            display: "none"
                        }), Object(y.a)(e, i.FROM_DESKTOP, {
                            display: a || c ? "none" : void 0,
                            padding: 0,
                            marginBottom: 20,
                            fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                            lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                        }), Object(y.a)(e, "@media (min-width: 1240px)", {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), ""),
                        dangerouslySetInnerHTML: {
                            __html: "Wybierz, co <br /> Ci\u0119 interesuje"
                        }
                    }), Object(I.b)(U, {
                        css: Object(j.a)(Object(y.a)({
                            margin: "2px 0"
                        }, i.TO_DESKTOP, {
                            display: "none"
                        }), "")
                    }), Object(I.b)("ul", {
                        css: Object(j.a)((t = {
                            width: "100%",
                            padding: "0 20px"
                        }, Object(y.a)(t, i.FROM_TABLET, {
                            padding: "0 0 20px 20px",
                            maxWidth: 400
                        }), Object(y.a)(t, i.FROM_DESKTOP, {
                            padding: 0
                        }), t), "")
                    }, r.map((function(e) {
                        return Object(I.b)(ue, {
                            key: e.id,
                            offer: e
                        })
                    }))))
                }));
            de.displayName = "Main";
            E.a.createElement;
            var pe = function(e) {
                    var t = e.hoveredOfferType,
                        n = Object(L.a)(e, ["hoveredOfferType"]),
                        r = Object(S.useTheme)().colors;
                    return Object(I.b)("svg", Object(R.a)({
                        viewBox: "0 0 686 1024",
                        xmlSpace: "preserve"
                    }, n, {
                        css: Object(j.a)([{
                            height: "100%",
                            path: {
                                transition: "fill 0.25s"
                            }
                        }, t && Object(y.a)({}, ".".concat(t), {
                            ".front": {
                                fill: r.ORANGE_LIGHT
                            },
                            ".back": {
                                fill: r.BLACK
                            },
                            ".icon": {
                                fill: r.WHITE
                            }
                        })], "")
                    }), Object(I.b)("path", {
                        fill: "#44BBE6",
                        d: "M680.1,162.6c-0.2-1.8-5.2-4.2-10-4.6c-4.9-0.4-10,6.1-12.4,5.8s-10-7.2-15.6-8.7c-5.6-1.4-15.1,1.4-16,1.4 s-7.7-10.3-11.5-13.2c-3.9-2.9-9-7.5-22.4-7.6c-16.6-0.1-28.3,16.1-29.5,16.1s-14.1-2.9-20.2-2.2s-14.6,8.7-15.6,9 c-1,0.4-13.1-3.3-17.5-3.6c-4.4-0.4-14.3,2.5-16.8,2.5c-2.4,0-4.9-2.2-4.9-2.2c0-7.6,12.6-14.5,20.4-14.5s14.6,1.1,14.6,1.1 s6.1-10.8,14.1-14.8s18-4,18-4s6.3-24.6,28-24.9c15.3-0.3,26,12.9,30.9,20.6c31-35.5,61.7-69.9,61.7-119h-334h-6H1.4 c0,69,60.6,109,97.7,164c8.5,6.5,11.1,16.2,12.4,18.5c1.5,2.8,9.8-2.8,22.8,6.5c12.9,9.2,11.4,14.5,11.4,14.5s8.6-1.5,13.5,0 s9.2,6.5,9.2,6.5s21.5,0.3,22.5,8.6v1.2c0-0.1,0-0.1,0-0.2c-1.3-0.3-2.7-0.4-4-0.4c-5.2,0-12,4.3-13.2,4s-13.8-7.1-21.2-7.1 s-14.1,4-16.3,3.7s-8.9-14.5-36.3-15.4C84,203.7,69,217.1,69,217.1s-27.2-4.5-27.2,9c0,6.4,24.1,7.4,24.1,7.4s14.2,1.1,33.2,2.8 c8.4,0.8,18.7-0.3,28.2-1.8c7.9,49.4-7.6,78.2,32.9,141c30.7,47.6,61.5,51.5,89,88.8c30.8,41.8,58.2,78.7,87.1,78.7h4.3 c28.9,0,56.2-36.9,87.1-78.7c27.5-37.3,58.3-41.1,89-88.8c2-3.1,3.9-6.2,5.6-9.1c6.3-1.1,12.4-2.8,14.2-2.8c2.5,0,8.6-0.6,11.3-1.1 s17.7-1.9,17.4-8.6c-4-0.3-6.1,3.2-7,3.2c-0.8,0-1.7-0.6-3.7-1c-2.1-0.4-6,1.2-6.8,1.2s-3.3-1.9-6.6-1.9s-7.3,3.1-9.1,3.1 c-1.9,0-4.4-6.6-19.5-6.6s-24.9,7-26.5,7.5c-1.7,0.4-7.5-1.7-11.2-1.7s-12,3.3-14.5,3.5s-6.4-2.5-8.5-2.7c-0.2,0-0.4,0-0.6,0 c1-1.8,3-3,8.6-5.5c6.9-3,13-1.9,13-1.9s3.9-5.3,11.6-8.6s13,0,15.5-2.2s9.4-5.2,19.6-5.2c6.2,0,11.8,3.4,15.6,6.1 c20.1-48.6,4.3-76.5,19.9-130.2c4-13.9,10.1-26.6,17.4-38.6c2.7,0.3,5.2,0.5,7.3,0.5c9.2,0,27.7-4.7,35.7-4.7s26.3,5.1,41.3,4.3 c12.6-0.6,21-5.3,23.5-9.3C680.1,162.9,680.1,162.7,680.1,162.6L680.1,162.6z M450.8,359.1c0.1-0.2,0.2-0.4,0.3-0.6 C451,358.7,450.9,358.9,450.8,359.1z M450.5,359.9c0.1-0.2,0.1-0.4,0.2-0.6C450.7,359.4,450.6,359.6,450.5,359.9z"
                    }), Object(I.b)("g", {
                        className: "SIMFREE_INST"
                    }, Object(I.b)("path", {
                        fill: "#FEFEFE",
                        className: "front",
                        d: "M318.1,212.6c5.5,0.8,9,6,7.9,11.7l-15.4,81.9c-1.1,5.7-6.4,9.7-11.8,8.9l-78.6-11c-5.5-0.8-9-6-7.9-11.7 l15.4-81.9c1.1-5.7,6.4-9.6,11.8-8.9L318.1,212.6z"
                    }), Object(I.b)("path", {
                        className: "icon",
                        d: "M292.2,255.4c-8-1.1-16.1-2.2-24.1-3.3c-1.3-0.2-2.2,0.4-2.6,1.9c-1.1,6-2.2,11.9-3.3,18c0,0.1,0,0.2-0.1,0.4 c9.5,1.3,18.9,2.7,28.3,4c0-0.1,0-0.2,0.1-0.4c1.1-6,2.2-12,3.3-18.1C294.1,256.5,293.4,255.6,292.2,255.4z M288.8,274 c-8.1-1.1-16.3-2.3-24.4-3.5c1-5.6,2.1-11,3.1-16.6c8.1,1.1,16.3,2.3,24.4,3.5C290.9,262.9,289.8,268.4,288.8,274z M292.1,277.6 c-0.1,0.8-0.2,1.5-0.4,2.1c-0.1,0.4-0.6,0.7-1,0.7c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0c-9.8-1.3-19.7-2.8-29.6-4.1 c-1-0.1-1.2-0.4-1-1.5c0.1-0.6,0.2-1,0.3-1.6l13.2,1.9c0,0.8,0.4,1,1.1,1.1h0.1c0.4,0,0.9,0.1,1.3,0.2c0.6,0.1,1.1,0.2,1.8,0.2 c0.8,0.1,1,0,1.5-0.8L292.1,277.6z M246.9,236.2c-1.6,8.4-3.1,16.7-4.7,25c1.8,0.2,3.5,0.4,5.2,0.8c-0.2,1-0.3,1.9-0.6,2.8 c-0.1,0.3,0,0.4,0.3,0.6c1.6,0.2,3.1,0.4,4.7,0.7c3.1,0.4,6.1,0.9,9.3,1.3h0.3c0.3-1.9,0.7-3.7,1-5.5c-5.9-0.8-11.8-1.7-17.7-2.5 c1.3-6.9,2.6-13.7,3.9-20.6c10.5,1.5,21,2.9,31.3,4.5c-0.6,2.9-1.1,5.8-1.7,8.7l2,0.3c0.7-3.6,1.3-7.3,2-10.8 C270.5,239.5,258.7,237.8,246.9,236.2L246.9,236.2z M260,263.2c0.6,0.1,0.9,0.7,0.8,1.2s-0.7,1-1.2,0.9c-0.6-0.1-0.9-0.7-0.8-1.2 S259.5,263.2,260,263.2z M266,269c-0.3-0.1-0.3-0.3-0.2-0.6c0-0.1,0.1-0.3,0.1-0.4h0.2c0.8,0.1,1.5,1.1,1.2,2.1c-0.1,0-0.2,0-0.3,0 h-0.1h-0.1c-0.2,0-0.3-0.1-0.3-0.4C266.3,269.3,266.2,269,266,269L266,269z M267,266.1c1.6,0.6,2.6,2.3,2.2,4.2 c-0.3,0-0.6-0.1-0.9-0.1c0.1-1.8-0.7-2.9-2.3-3.3v-0.1c0.1-0.6,0.1-0.8,0.3-0.8C266.5,265.8,266.7,266,267,266.1L267,266.1z M270.2,270.4c-0.1-3.3-1-4.7-3.8-5.6c0-0.2,0.1-0.6,0.1-0.9h0.3c2.6,0.3,4.9,3.3,4.1,6.6C270.8,270.4,270.5,270.4,270.2,270.4z"
                    }), Object(I.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M316.2,210.8c-1-0.7-2.2-1.1-3.6-1.2l-78.6-11c-5.5-0.8-10.7,3.2-11.8,8.9l-15.4,81.9c-0.8,4.4,1,8.4,4.4,10.4 l5.4,3.2c-3.3-2-5.2-6.1-4.4-10.4l15.4-81.9c1.1-5.7,6.4-9.6,11.8-8.9l78.6,11c1.3,0.2,2.5,0.7,3.6,1.2L316.2,210.8z"
                    })), Object(I.b)("g", {
                        className: "FIX1P DATA INTERNET_GROUP"
                    }, Object(I.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M471.3,46c4.9,1.1,7.8,6,6.3,11l-20.8,72.6c-1.4,5-6.6,8.3-11.5,7.2l-71.2-15.1c-4.9-1-7.8-6-6.3-11l20.8-72.6 c1.4-5,6.6-8.3,11.5-7.2L471.3,46z"
                    })), Object(I.b)("g", {
                        className: "CONVERGENT4U"
                    }, Object(I.b)("path", {
                        className: "front",
                        fill: "#F9F9F9",
                        d: "M442.7,166.2c5.7-1.4,11.3,2.2,12.7,8.1l19.1,84.3c1.3,5.9-2.2,11.7-7.9,13.2L385,292.1 c-5.7,1.4-11.3-2.2-12.7-8.1l-19.1-84.3c-1.3-5.9,2.2-11.7,7.9-13.2L442.7,166.2z"
                    }), Object(I.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M480.5,258.9l-19.1-84.3c-0.1-0.5-1.3-3.7-2.8-5.1c-2.7-2.5-6-3-6.4-3.1l-6-0.4c0.4,0,0.7,0.1,1.1,0.2 c0.1,0,0.2,0,0.3,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.3,0.1,0.7,0.3,1,0.4c0.1,0,0.2,0.1,0.3,0.1c0.3,0.2,0.6,0.3,0.9,0.5 c0.3,0.2,0.6,0.4,0.9,0.6c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.2,0.5,0.5,0.8,0.7c0,0,0,0,0.1,0.1c0.3,0.3,0.6,0.7,0.9,1 c0,0.1,0.1,0.1,0.1,0.2c0.3,0.4,0.5,0.7,0.7,1.1c0,0.1,0.1,0.1,0.1,0.2c0.2,0.4,0.4,0.8,0.6,1.2c0,0.1,0,0.1,0.1,0.2 c0.2,0.5,0.3,0.9,0.4,1.3l19.1,84.3c1.3,5.9-2.2,11.7-7.9,13.2L385,292c-1.2,0.3-2.4,0.4-3.6,0.3l6,0.4c1.2,0.1,2.3,0,3.6-0.3 l81.6-20.4C478.3,270.7,481.8,264.8,480.5,258.9L480.5,258.9z"
                    }), Object(I.b)("path", {
                        className: "icon",
                        d: "M412.1,220.3l-12.4,3.1l2.9,12.8l12.4-3.1L412.1,220.3z M405.1,232.1l-1.4-6.2l6-1.5l1.4,6.2L405.1,232.1z M388.5,221.1 l3.3,14.4l8.4-2.1l0.7,3.3l-12.1,3l-3.9-17.7L388.5,221.1z M412.9,243.3l-1.1-4.7l-1.5-1l-2.2,0.6c-0.2,0.1-0.3,0.3-0.3,0.5l1.2,5.7 c0,0.2,0.3,0.3,0.5,0.3l3.1-0.8C412.8,243.7,412.9,243.5,412.9,243.3z M412.2,242.3l-1,0.2l-0.2-1l1-0.2L412.2,242.3z M411.6,240.3 c0.1,0,0.2,0,0.2,0.1l0.2,0.8l-1,0.2l-0.2-1L411.6,240.3z M408.7,241.2c0-0.1,0-0.2,0.1-0.2l0.8-0.2l0.2,1l-1,0.2L408.7,241.2z M408.9,242.1l1.1-0.3l-0.3-1.2l1-0.2l0.5,2.1l-2,0.5L408.9,242.1z M409.6,244.1c-0.1,0-0.2,0-0.2-0.1l-0.2-0.8l0.9-0.2l0.2,1 L409.6,244.1z M410.5,243.9l-0.2-1l1-0.2l0.2,1L410.5,243.9z M412.5,243.2c0,0.1,0,0.2-0.1,0.2l-0.7,0.2l-0.2-1l1-0.2L412.5,243.2z M425.8,216.8l-1.2,13.8l-3.8,1l-7.1-11.7l3.6-0.9l4.6,8.1l0.7-9.4L425.8,216.8z M424.1,234.3c0.6-0.2,0.6-0.1,0.7,0.7 c0.1,0.9,0.1,1-0.5,1.1c-0.1,0.1-0.2,0.1-0.3,0.1c-0.4,0-0.3,0.9-0.1,1.5c0.2,0.7,0.5,1.4,0.8,1.3c0.1-0.1,0.2-0.1,0.3-0.1 c0.6-0.1,0.6,0,0.9,0.8c0.3,0.9,0.2,0.8-0.9,1.1c-0.5,0.1-1.4-1-1.9-2.9s-0.1-3.3,0.5-3.5C423.7,234.3,423.9,234.2,424.1,234.3z M436.7,223.6c0,0.5-0.3,1-0.8,1.4s-1,0.8-1.6,0.9c-1.1,0.3-1.8,0.2-2.4-0.3c-0.6-0.5-1.1-1.2-1.3-2.2l8.9-2.2 c0-0.3-0.1-0.5-0.1-0.7c-0.3-1.4-0.9-2.6-1.6-3.5c-0.8-1-1.6-1.5-2.7-1.9c-1.1-0.3-2.1-0.4-3.4-0.1c-1.2,0.3-2.1,0.8-2.9,1.6 c-0.9,0.8-1.4,1.7-1.8,3c-0.3,1.2-0.4,2.5-0.1,3.7c0.3,1.4,0.9,2.5,1.7,3.5c0.8,0.9,1.7,1.5,2.8,1.7c1.1,0.3,2.2,0.2,3.4,0 c3-0.8,4.6-2.7,4.8-5.8L436.7,223.6z M430.4,219c0.4-0.6,1-1.1,1.8-1.2c0.8-0.2,1.4-0.1,2,0.2c0.6,0.3,1,1,1.3,1.8l-5.6,1.3 C430,220.3,430.1,219.5,430.4,219L430.4,219z M441,235.9l-1.2-5.6l-8.7,2.2l1.2,5.6l1.5-0.4l0.2,0.9l5.7-1.4l-0.2-0.9L441,235.9z M432.7,237.2l-1-4.2l7.5-1.9l1,4.2L432.7,237.2z M436.7,237.3c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.1-0.4,0.3-0.4s0.4,0.1,0.4,0.3 C437,237.1,436.9,237.3,436.7,237.3z M400.2,245l-0.9-4c-0.1-0.3-0.3-0.5-0.6-0.4l-6.4,1.6c-0.3,0.1-0.5,0.4-0.4,0.7l1,4.1l0.2,0.8 l7.4-1.8L400.2,245z M393.4,247l-1-4.3l6.4-1.6l1,4.3L393.4,247z M397.5,246.8l3.5-0.9c0,0,0.1,0.4,0.1,0.5s-0.1,0.3-0.2,0.3l-7.9,2 c-0.1,0-0.3-0.1-0.3-0.2s-0.1-0.5-0.1-0.5l3.5-0.9c0,0.1,0.2,0.2,0.3,0.2l1-0.3C397.4,247,397.5,246.9,397.5,246.8L397.5,246.8z M393.3,245.6c0.6-0.1,1.2,0.2,1.2,0.8l-0.3,0.1c-0.1-0.4-0.5-0.7-1-0.6V245.6z M394.8,246.3c-0.2-0.7-0.9-1.2-1.5-1l-0.1-0.3 c0.9-0.2,1.6,0.3,1.8,1.2L394.8,246.3z M393.5,246.4l-0.1-0.3c0.3-0.1,0.6,0.1,0.6,0.4l-0.3,0.1 C393.8,246.4,393.7,246.4,393.5,246.4z"
                    })), Object(I.b)("g", {
                        className: "FIX1P FIX3P DATA INTERNET_GROUP"
                    }, Object(I.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M480,52.8l-4.4-4.4c2.1,2.1,3,5.4,2.1,8.7l-20.8,72.6c-1.4,5-6.6,8.3-11.5,7.2l-71.2-15.1 c-1.7-0.4-3.1-1.2-4.2-2.3l4.4,4.4c1.1,1.1,2.6,1.9,4.2,2.3l71.2,15.1c4.9,1.1,10.1-2.2,11.5-7.2l20.8-72.6c0.6-2.1,0.5-4.1-0.3-5.9 C481.5,54.8,480.8,53.6,480,52.8z"
                    }), Object(I.b)("path", {
                        className: "icon",
                        d: "M444.4,71.5l-34.1-7.2c-1.4-0.3-3,0.6-3.4,2.1l-6.1,21.4l-1.1,4l39.3,8.4l1.2-4.1l6.1-21.3 C446.6,73.2,445.8,71.8,444.4,71.5z M437.1,96.8L403,89.6l6.5-22.7l34.1,7.2L437.1,96.8z M422.9,98.1l18.3,3.9c0,0.1-0.6,2-0.8,2.7 s-1,1.2-1.7,1.1l-41.9-9c-0.7-0.2-1.1-0.9-0.9-1.6c0.2-0.6,0.7-2.6,0.8-2.7l18.3,3.9c-0.2,0.7,0.2,1.5,0.9,1.6l5.2,1.1 C421.9,99.3,422.7,98.8,422.9,98.1L422.9,98.1z M406,88.8c0.2-0.8-0.2-1.5-0.9-1.6l0.4-1.3c1.4,0.3,2.3,1.8,1.9,3.2L406,88.8z M408.7,89.4c0.6-2.1-0.3-4.3-2.8-4.9l0.4-1.3c2.9,0.6,4.6,3.5,3.7,6.5L408.7,89.4z M411.3,89.9c1-3.5-1.2-7.4-4.7-8.1l0.4-1.3 c4.3,0.9,6.8,5.3,5.6,9.7L411.3,89.9z"
                    })), Object(I.b)("g", {
                        className: "VOICE"
                    }, Object(I.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M254.7,39.3c5.6-1.2,12.3,2.4,15.1,8.2l39.2,83.7c2.7,5.8,0.4,11.6-5.2,12.8l-80.5,18.6 c-5.6,1.2-12.3-2.4-15.1-8.2L169,70.6c-2.7-5.8-0.4-11.6,5.2-12.8L254.7,39.3z"
                    }), Object(I.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M303.9,143.9l-80.6,18.6c-5.6,1.2-12.3-2.4-15.1-8.2l-39.3-83.8c-1.8-3.8-1.3-7.6,0.7-10.1l-5.1,6.1 c-2.1,2.5-2.5,6.3-0.7,10.1l39.3,83.8c2.7,5.8,9.5,9.5,15.1,8.2l80.6-18.6c1.9-0.4,3.4-1.3,4.5-2.7l5.1-6.1 C307.3,142.6,305.8,143.5,303.9,143.9z"
                    }), Object(I.b)("path", {
                        className: "icon",
                        fill: "#231F20",
                        d: "M233.8,75.9l14,7.6l16.4,35.1c0.7,1.6,0.1,3-1.4,3.5l-23,5.3c-1.5,0.3-3.2-0.6-4-2.2l-19.8-42.1 c-0.7-1.6-0.1-3.1,1.4-3.5L233.8,75.9z M249.5,112.7l-7.2-15.5l-6.8,1.6l4,8.5l-8.2,1.9l3.2,7L249.5,112.7z M253.7,102.5l-2.6-5.6 c-0.3-0.7-1.3-1.3-2-1l-5.4,1.3l3.2,7L253.7,102.5z M228.1,102.2l2.6,5.6l6.8-1.6l-3.2-7l-5.4,1.2 C228.1,100.6,227.8,101.3,228.1,102.2 M260.9,117.8l-2.6-5.6l-6.8,1.6l3.2,7l5.4-1.3C261,119.4,261.4,118.7,260.9,117.8 M245.3,123.1l-3.2-7l-6.8,1.6l2.6,5.6c0.3,0.7,1.3,1.3,2,1L245.3,123.1z M257.7,110.8l-3.2-7l-6.8,1.6l3.2,7L257.7,110.8z M253.5,121.2l-3.2-7l-6.8,1.6l3.2,7L253.5,121.2z"
                    })), Object(I.b)("path", {
                        d: "M432,497.8c-9.3-13.4-24.5-17.8-31.2-30.8c-4.4-8.4-4.8-32-4.6-47.6c3.6-8,5.6-16.8,5.6-26.1c0-35-28.4-63.3-63.3-63.3 c-35,0-63.3,28.4-63.3,63.3c0,2.8,0.2,5.6,0.6,8.3l-0.1,0.1c0,0,3.8,26.8-5.8,45.2c-12.3,23.4-28.7,25.6-34.2,40.7 c-3.5,9.5-2.4,34.1,15.5,48.8s33.3,9.5,56,6.7c22.6-2.8,38.5-1.6,50.8,3.2s24,17.9,36.1,17.9c11.9,0,26.6,1.2,37.3-12.2 C447,532.1,441.1,510.9,432,497.8L432,497.8z"
                    }), Object(I.b)("path", {
                        fill: "#F4CFB2",
                        d: "M422.8,815.6l-18.4-7.3l35.3-120.9L421,599.6l35.3-6.6l21.9,89.9c0.4,2.1,0.5,4.2,0,6.3 c-0.2,1.1-0.6,2.2-1.1,3.3L422.8,815.6z"
                    }), Object(I.b)("path", {
                        fill: "#F4CFB2",
                        d: "M254.3,815.6l18.4-7.3l-35.3-120.9l18.7-87.8l-35.3-6.6L199,682.9c-0.4,2.1-0.5,4.2,0,6.3 c0.2,1.1,0.6,2.2,1.1,3.3L254.3,815.6z"
                    }), Object(I.b)("path", {
                        fill: "#F16E00",
                        d: "M475.4,649l-7.5-26.9c0,0-3.4-13.1-8-28.2c-5-16.6-11.5-35.8-21.2-43c-16.4-12.2-62.8-18.6-100.1-19.1 c-37.4,0.5-83.7,6.9-100.1,19.1c-9.7,7.2-16.2,26.4-21.2,43c-4.6,15.2-8,28.2-8,28.2l-7.5,26.9l45.8,13.7l7.1-29.7l11.4,98.2h144.7 l12.1-96.4l6.7,27.9L475.4,649z"
                    }), Object(I.b)("path", {
                        fill: "#0A5EBD",
                        d: "M410.7,731.2H266.1c0,0-21.3,47.7-21.3,83.7c0,50.5,16.4,210.5,16.4,210.5h53.6L339,832.3l21.3,193.2h55.4 c0,0,16.4-159.9,16.4-210.5C432.1,778.9,410.7,731.2,410.7,731.2z"
                    }), Object(I.b)("path", {
                        fill: "#F4CFB2",
                        d: "M367.5,533.2l-5.4-47.3h-47.3l-5.4,47.3l-10,1c0,0,21.8,56.9,39,56.9c17.3,0,39.1-56.9,39.1-56.9L367.5,533.2z"
                    }), Object(I.b)("path", {
                        fill: "#C19372",
                        d: "M309.4,533.2l5.4-47.3h47.3l1,13.2L309.4,533.2z"
                    }), Object(I.b)("path", {
                        fill: "#F4CFB2",
                        d: "M412.5,434.7c0,7.9-6.4,14.3-14.3,14.3c-0.7,0-1.3-0.1-1.9-0.1c-6.3,37.5-29.8,55.6-57.8,55.6 c-27.9,0-51.2-18.8-57.7-55.5h-0.1c-7.9,0-14.3-6.4-14.3-14.3c0-7.4,5.6-13.5,12.9-14.2c2.2-39,22.5-69.5,59.2-69.5 c35.7,0,56.9,30.5,59.2,69.4h0.5C406.1,420.5,412.5,426.9,412.5,434.7L412.5,434.7z"
                    }), Object(I.b)("path", {
                        fill: "#C19372",
                        d: "M349.3,430.2c0,0-3,7.9-10.9,7.9c-8.1,0-10.9-7.9-10.9-7.9s3.5,4.2,10.9,4.2 C345.5,434.4,349.3,430.2,349.3,430.2z"
                    }), Object(I.b)("path", {
                        fill: "#FF7902",
                        d: "M400.1,444.3l6.1,6.1l-6.1,6.1l-6.1-6.1L400.1,444.3z"
                    }), Object(I.b)("path", {
                        fill: "#FF7902",
                        d: "M277.6,444.3l6.1,6.1l-6.1,6.1l-6.1-6.1L277.6,444.3z"
                    }), Object(I.b)("path", {
                        d: "M368.1,406.5c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6S368.1,403.2,368.1,406.5z M314.8,400.5c-3.3,0-6,2.7-6,6s2.7,6,6,6 s6-2.7,6-6S318.1,400.5,314.8,400.5z M338.5,451.1c-13.8,0-25.6-6.2-25.6-6.2s2.4,6.6,9.1,11.9c4.1,3.2,9.5,5.9,16.5,5.9 c6,0,11.3-2.7,15.5-6c6.8-5.3,10-11.6,10-11.6S353,451.1,338.5,451.1L338.5,451.1z M319.2,391.1c-0.2,0-4.5-0.2-10.1,2.2 c-6.2,2.7-8.6,5.9-8.7,6.1c-0.5,0.7-0.4,1.6,0.3,2.1c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6c0,0,2.2-2.8,7.5-5.1 c4.9-2.1,8.7-2,8.8-2c0.8,0,1.5-0.6,1.6-1.4C320.6,391.9,320,391.2,319.2,391.1L319.2,391.1z M397.5,417.3c0,0-3.1-8.2-6.1-10.6 c-4.8-3.8-9.4-6-14.4-7.9c0.3,0.3,0.4,0.5,0.4,0.5c0.5,0.7,0.4,1.6-0.3,2.1c-0.3,0.2-0.6,0.3-0.9,0.3c-0.5,0-0.9-0.2-1.2-0.6 c0,0-2.1-2.8-7.5-5.1c-5-2.2-8.7-2-8.8-2c-0.8,0-1.5-0.6-1.6-1.4c0-0.4,0.1-0.7,0.3-1c-1.4-0.6-2.9-1.3-4.4-2 c-17-8.1-24.1-27.6-24.1-27.6s0,10.4-12.8,19s-19.5,7-26.8,14.3c-7.7,7.7-9.8,21.9-9.8,21.9s-5.7-76.9,59-76.9 S397.5,417.3,397.5,417.3L397.5,417.3z"
                    }), Object(I.b)("path", {
                        fill: "#FFFFFF",
                        d: "M312.3,444.4c0.4,1,3.4,7.3,9.4,12.3c0.8,0.6,7.9,1.8,16.8,1.8c8.5,0,14.8-1.2,15.6-1.8 c6.7-5.3,10.7-12.2,10.7-12.2s-11.8,5.8-26.4,5.8C325.2,450.2,313.2,444.7,312.3,444.4L312.3,444.4z"
                    }))
                },
                fe = (E.a.createElement, function(e) {
                    var t = e.hoveredOfferType,
                        n = Object(L.a)(e, ["hoveredOfferType"]),
                        r = Object(S.useTheme)().colors;
                    return Object(I.b)("svg", Object(R.a)({
                        viewBox: "0 0 686 698",
                        xmlSpace: "preserve"
                    }, n, {
                        css: Object(j.a)([{
                            height: "100%",
                            position: "relative",
                            path: {
                                transition: "fill 0.25s"
                            }
                        }, t && Object(y.a)({}, ".".concat(t), {
                            ".front": {
                                fill: r.ORANGE_LIGHT
                            },
                            ".back": {
                                fill: r.BLACK
                            },
                            ".icon": {
                                fill: r.WHITE
                            }
                        })], "")
                    }), Object(I.b)("path", {
                        fill: "#44BBE6",
                        d: "M681.8,162.8c-0.2-1.8-5.2-4.2-10-4.6c-4.9-0.4-10,6.1-12.4,5.8s-10-7.2-15.6-8.7c-5.6-1.4-15.1,1.4-16,1.4 s-7.7-10.3-11.5-13.2c-3.9-2.9-9-7.5-22.4-7.6c-16.6-0.1-28.3,16.1-29.5,16.1s-14.1-2.9-20.2-2.2s-14.6,8.7-15.6,9 c-1,0.4-13.1-3.3-17.5-3.6c-4.4-0.4-14.3,2.5-16.8,2.5c-2.4,0-4.9-2.2-4.9-2.2c0-7.6,12.6-14.5,20.4-14.5s14.6,1.1,14.6,1.1 s6.1-10.8,14.1-14.8s18-4,18-4s6.3-24.6,28-24.9c15.3-0.3,26,12.9,30.9,20.6c31-35.5,61.7-69.9,61.7-119h-334h-6H3.1 c0,69,60.6,109,97.7,164c8.5,6.5,11.1,16.2,12.4,18.5c1.5,2.8,9.8-2.8,22.8,6.5c12.9,9.2,11.4,14.5,11.4,14.5s8.6-1.5,13.5,0 s9.2,6.5,9.2,6.5s21.5,0.3,22.5,8.6v1.2c0-0.1,0-0.1,0-0.2c-1.3-0.3-2.7-0.4-4-0.4c-5.2,0-12,4.3-13.2,4s-13.8-7.1-21.2-7.1 s-14.1,4-16.3,3.7s-8.9-14.5-36.3-15.4c-15.9-0.5-30.9,12.9-30.9,12.9s-27.2-4.5-27.2,9c0,6.4,24.1,7.4,24.1,7.4s14.2,1.1,33.2,2.8 c8.4,0.8,18.7-0.3,28.2-1.8c7.9,49.4-7.6,78.2,32.9,141c30.7,47.6,61.5,51.5,89,88.8c30.8,41.8,58.2,78.7,87.1,78.7h4.3 c28.9,0,56.2-36.9,87.1-78.7c27.5-37.3,58.3-41.1,89-88.8c2-3.1,3.9-6.2,5.6-9.1c6.3-1.1,12.4-2.8,14.2-2.8c2.5,0,8.6-0.6,11.3-1.1 s17.7-1.9,17.4-8.6c-4-0.3-6.1,3.2-7,3.2c-0.8,0-1.7-0.6-3.7-1c-2.1-0.4-6,1.2-6.8,1.2s-3.3-1.9-6.6-1.9s-7.3,3.1-9.1,3.1 c-1.9,0-4.4-6.6-19.5-6.6s-24.9,7-26.5,7.5c-1.7,0.4-7.5-1.7-11.2-1.7s-12,3.3-14.5,3.5s-6.4-2.5-8.5-2.7c-0.2,0-0.4,0-0.6,0 c1-1.8,3-3,8.6-5.5c6.9-3,13-1.9,13-1.9s3.9-5.3,11.6-8.6c7.7-3.3,13,0,15.5-2.2s9.4-5.2,19.6-5.2c6.2,0,11.8,3.4,15.6,6.1 c20.1-48.6,4.3-76.5,19.9-130.2c4-13.9,10.1-26.6,17.4-38.6c2.7,0.3,5.2,0.5,7.3,0.5c9.2,0,27.7-4.7,35.7-4.7s26.3,5.1,41.3,4.3 c12.6-0.6,21-5.3,23.5-9.3C681.8,163.1,681.8,162.9,681.8,162.8L681.8,162.8z M452.5,359.3c0.1-0.2,0.2-0.4,0.3-0.6 C452.7,358.9,452.6,359.1,452.5,359.3z M452.2,360.1c0.1-0.2,0.1-0.4,0.2-0.6C452.4,359.6,452.3,359.8,452.2,360.1z"
                    }), Object(I.b)("g", {
                        className: "SIMFREE_INST"
                    }, Object(I.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M319.8,212.8c5.5,0.8,9,6,7.9,11.7l-15.4,81.9c-1.1,5.7-6.4,9.7-11.8,8.9l-78.6-11c-5.5-0.8-9-6-7.9-11.7 l15.4-81.9c1.1-5.7,6.4-9.6,11.8-8.9L319.8,212.8z"
                    }), Object(I.b)("path", {
                        className: "icon",
                        d: "M293.9,255.6c-8-1.1-16.1-2.2-24.1-3.3c-1.3-0.2-2.2,0.4-2.6,1.9c-1.1,6-2.2,11.9-3.3,18c0,0.1,0,0.2-0.1,0.4 c9.5,1.3,18.9,2.7,28.3,4c0-0.1,0-0.2,0.1-0.4c1.1-6,2.2-12,3.3-18.1C295.8,256.7,295.1,255.8,293.9,255.6z M290.5,274.2 c-8.1-1.1-16.3-2.3-24.4-3.5c1-5.6,2.1-11,3.1-16.6c8.1,1.1,16.3,2.3,24.4,3.5C292.6,263.1,291.5,268.6,290.5,274.2z M293.8,277.8 c-0.1,0.8-0.2,1.5-0.4,2.1c-0.1,0.4-0.6,0.7-1,0.7c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0c-9.8-1.3-19.7-2.8-29.6-4.1 c-1-0.1-1.2-0.4-1-1.5c0.1-0.6,0.2-1,0.3-1.6l13.2,1.9c0,0.8,0.4,1,1.1,1.1h0.1c0.4,0,0.9,0.1,1.3,0.2c0.6,0.1,1.1,0.2,1.8,0.2 c0.8,0.1,1,0,1.5-0.8L293.8,277.8z M248.6,236.4c-1.6,8.4-3.1,16.7-4.7,25c1.8,0.2,3.5,0.4,5.2,0.8c-0.2,1-0.3,1.9-0.6,2.8 c-0.1,0.3,0,0.4,0.3,0.6c1.6,0.2,3.1,0.4,4.7,0.7c3.1,0.4,6.1,0.9,9.3,1.3h0.3c0.3-1.9,0.7-3.7,1-5.5c-5.9-0.8-11.8-1.7-17.7-2.5 c1.3-6.9,2.6-13.7,3.9-20.6c10.5,1.5,21,2.9,31.3,4.5c-0.6,2.9-1.1,5.8-1.7,8.7l2,0.3c0.7-3.6,1.3-7.3,2-10.8 C272.2,239.7,260.4,238,248.6,236.4L248.6,236.4z M261.7,263.4c0.6,0.1,0.9,0.7,0.8,1.2s-0.7,1-1.2,0.9s-0.9-0.7-0.8-1.2 S261.2,263.4,261.7,263.4z M267.7,269.2c-0.3-0.1-0.3-0.3-0.2-0.6c0-0.1,0.1-0.3,0.1-0.4h0.2c0.8,0.1,1.5,1.1,1.2,2.1 c-0.1,0-0.2,0-0.3,0h-0.1h-0.1c-0.2,0-0.3-0.1-0.3-0.4C268,269.5,267.9,269.2,267.7,269.2L267.7,269.2z M268.7,266.3 c1.6,0.6,2.6,2.3,2.2,4.2c-0.3,0-0.6-0.1-0.9-0.1c0.1-1.8-0.7-2.9-2.3-3.3v-0.1c0.1-0.6,0.1-0.8,0.3-0.8 C268.2,266,268.4,266.2,268.7,266.3L268.7,266.3z M271.9,270.6c-0.1-3.3-1-4.7-3.8-5.6c0-0.2,0.1-0.6,0.1-0.9h0.3 c2.6,0.3,4.9,3.3,4.1,6.6C272.5,270.6,272.2,270.6,271.9,270.6z"
                    }), Object(I.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M317.9,211c-1-0.7-2.2-1.1-3.6-1.2l-78.6-11c-5.5-0.8-10.7,3.2-11.8,8.9l-15.4,81.9c-0.8,4.4,1,8.4,4.4,10.4 l5.4,3.2c-3.3-2-5.2-6.1-4.4-10.4l15.4-81.9c1.1-5.7,6.4-9.6,11.8-8.9l78.6,11c1.3,0.2,2.5,0.7,3.6,1.2L317.9,211z"
                    })), Object(I.b)("g", {
                        className: "FIX1P FIX3P DATA INTERNET_GROUP"
                    }, Object(I.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M473,46.2c4.9,1.1,7.8,6,6.3,11l-20.8,72.6c-1.4,5-6.6,8.3-11.5,7.2l-71.2-15.1c-4.9-1-7.8-6-6.3-11l20.8-72.6 c1.4-5,6.6-8.3,11.5-7.2L473,46.2z"
                    })), Object(I.b)("g", {
                        className: "CONVERGENT4U"
                    }, Object(I.b)("path", {
                        className: "front",
                        fill: "#F9F9F9",
                        d: "M444.4,166.4c5.7-1.4,11.3,2.2,12.7,8.1l19.1,84.3c1.3,5.9-2.2,11.7-7.9,13.2l-81.6,20.4 c-5.7,1.4-11.3-2.2-12.7-8.1l-19.1-84.3c-1.3-5.9,2.2-11.7,7.9-13.2L444.4,166.4z"
                    }), Object(I.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M482.2,259.1l-19.1-84.3c-0.1-0.5-1.3-3.7-2.8-5.1c-2.7-2.5-6-3-6.4-3.1l-6-0.4c0.4,0,0.7,0.1,1.1,0.2 c0.1,0,0.2,0,0.3,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.3,0.1,0.7,0.3,1,0.4c0.1,0,0.2,0.1,0.3,0.1c0.3,0.2,0.6,0.3,0.9,0.5 c0.3,0.2,0.6,0.4,0.9,0.6c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.2,0.5,0.5,0.8,0.7c0,0,0,0,0.1,0.1c0.3,0.3,0.6,0.7,0.9,1 c0,0.1,0.1,0.1,0.1,0.2c0.3,0.4,0.5,0.7,0.7,1.1c0,0.1,0.1,0.1,0.1,0.2c0.2,0.4,0.4,0.8,0.6,1.2c0,0.1,0,0.1,0.1,0.2 c0.2,0.5,0.3,0.9,0.4,1.3l19.1,84.3c1.3,5.9-2.2,11.7-7.9,13.2l-81.6,20.4c-1.2,0.3-2.4,0.4-3.6,0.3l6,0.4c1.2,0.1,2.3,0,3.6-0.3 l81.6-20.4C480,270.9,483.5,265,482.2,259.1L482.2,259.1z"
                    }), Object(I.b)("path", {
                        className: "icon",
                        d: "M413.8,220.5l-12.4,3.1l2.9,12.8l12.4-3.1L413.8,220.5z M406.8,232.3l-1.4-6.2l6-1.5l1.4,6.2L406.8,232.3z M390.2,221.3 l3.3,14.4l8.4-2.1l0.7,3.3l-12.1,3l-3.9-17.7L390.2,221.3z M414.6,243.5l-1.1-4.7l-1.5-1l-2.2,0.6c-0.2,0.1-0.3,0.3-0.3,0.5l1.2,5.7 c0,0.2,0.3,0.3,0.5,0.3l3.1-0.8C414.5,243.9,414.6,243.7,414.6,243.5z M413.9,242.5l-1,0.2l-0.2-1l1-0.2L413.9,242.5z M413.3,240.5 c0.1,0,0.2,0,0.2,0.1l0.2,0.8l-1,0.2l-0.2-1L413.3,240.5z M410.4,241.4c0-0.1,0-0.2,0.1-0.2l0.8-0.2l0.2,1l-1,0.2L410.4,241.4z M410.6,242.3l1.1-0.3l-0.3-1.2l1-0.2l0.5,2.1l-2,0.5L410.6,242.3z M411.3,244.3c-0.1,0-0.2,0-0.2-0.1l-0.2-0.8l0.9-0.2l0.2,1 L411.3,244.3z M412.2,244.1l-0.2-1l1-0.2l0.2,1L412.2,244.1z M414.2,243.4c0,0.1,0,0.2-0.1,0.2l-0.7,0.2l-0.2-1l1-0.2L414.2,243.4z M427.5,217l-1.2,13.8l-3.8,1l-7.1-11.7l3.6-0.9l4.6,8.1l0.7-9.4L427.5,217z M425.8,234.5c0.6-0.2,0.6-0.1,0.7,0.7 c0.1,0.9,0.1,1-0.5,1.1c-0.1,0.1-0.2,0.1-0.3,0.1c-0.4,0-0.3,0.9-0.1,1.5c0.2,0.7,0.5,1.4,0.8,1.3c0.1-0.1,0.2-0.1,0.3-0.1 c0.6-0.1,0.6,0,0.9,0.8c0.3,0.9,0.2,0.8-0.9,1.1c-0.5,0.1-1.4-1-1.9-2.9s-0.1-3.3,0.5-3.5C425.4,234.5,425.6,234.4,425.8,234.5z M438.4,223.8c0,0.5-0.3,1-0.8,1.4s-1,0.8-1.6,0.9c-1.1,0.3-1.8,0.2-2.4-0.3c-0.6-0.5-1.1-1.2-1.3-2.2l8.9-2.2 c0-0.3-0.1-0.5-0.1-0.7c-0.3-1.4-0.9-2.6-1.6-3.5c-0.8-1-1.6-1.5-2.7-1.9c-1.1-0.3-2.1-0.4-3.4-0.1c-1.2,0.3-2.1,0.8-2.9,1.6 c-0.9,0.8-1.4,1.7-1.8,3c-0.3,1.2-0.4,2.5-0.1,3.7c0.3,1.4,0.9,2.5,1.7,3.5c0.8,0.9,1.7,1.5,2.8,1.7c1.1,0.3,2.2,0.2,3.4,0 c3-0.8,4.6-2.7,4.8-5.8L438.4,223.8z M432.1,219.2c0.4-0.6,1-1.1,1.8-1.2c0.8-0.2,1.4-0.1,2,0.2c0.6,0.3,1,1,1.3,1.8l-5.6,1.3 C431.7,220.5,431.8,219.7,432.1,219.2L432.1,219.2z M442.7,236.1l-1.2-5.6l-8.7,2.2l1.2,5.6l1.5-0.4l0.2,0.9l5.7-1.4l-0.2-0.9 L442.7,236.1z M434.4,237.4l-1-4.2l7.5-1.9l1,4.2L434.4,237.4z M438.4,237.5c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.1-0.4,0.3-0.4 s0.4,0.1,0.4,0.3C438.7,237.3,438.6,237.5,438.4,237.5z M401.9,245.2l-0.9-4c-0.1-0.3-0.3-0.5-0.6-0.4l-6.4,1.6 c-0.3,0.1-0.5,0.4-0.4,0.7l1,4.1l0.2,0.8l7.4-1.8L401.9,245.2z M395.1,247.2l-1-4.3l6.4-1.6l1,4.3L395.1,247.2z M399.2,247l3.5-0.9 c0,0,0.1,0.4,0.1,0.5s-0.1,0.3-0.2,0.3l-7.9,2c-0.1,0-0.3-0.1-0.3-0.2s-0.1-0.5-0.1-0.5l3.5-0.9c0,0.1,0.2,0.2,0.3,0.2l1-0.3 C399.1,247.2,399.2,247.1,399.2,247L399.2,247z M395,245.8c0.6-0.1,1.2,0.2,1.2,0.8l-0.3,0.1c-0.1-0.4-0.5-0.7-1-0.6V245.8z M396.5,246.5c-0.2-0.7-0.9-1.2-1.5-1l-0.1-0.3c0.9-0.2,1.6,0.3,1.8,1.2L396.5,246.5z M395.2,246.6l-0.1-0.3 c0.3-0.1,0.6,0.1,0.6,0.4l-0.3,0.1C395.5,246.6,395.4,246.6,395.2,246.6z"
                    })), Object(I.b)("g", {
                        className: "FIX1P FIX3P DATA INTERNET_GROUP"
                    }, Object(I.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M481.7,53l-4.4-4.4c2.1,2.1,3,5.4,2.1,8.7l-20.8,72.6c-1.4,5-6.6,8.3-11.5,7.2L375.9,122 c-1.7-0.4-3.1-1.2-4.2-2.3l4.4,4.4c1.1,1.1,2.6,1.9,4.2,2.3l71.2,15.1c4.9,1.1,10.1-2.2,11.5-7.2l20.8-72.6c0.6-2.1,0.5-4.1-0.3-5.9 C483.2,55,482.5,53.8,481.7,53z"
                    }), Object(I.b)("path", {
                        className: "icon",
                        d: "M446.1,71.7L412,64.5c-1.4-0.3-3,0.6-3.4,2.1L402.5,88l-1.1,4l39.3,8.4l1.2-4.1L448,75C448.3,73.4,447.5,72,446.1,71.7z M438.8,97l-34.1-7.2l6.5-22.7l34.1,7.2L438.8,97z M424.6,98.3l18.3,3.9c0,0.1-0.6,2-0.8,2.7s-1,1.2-1.7,1.1l-41.9-9 c-0.7-0.2-1.1-0.9-0.9-1.6c0.2-0.6,0.7-2.6,0.8-2.7l18.3,3.9c-0.2,0.7,0.2,1.5,0.9,1.6l5.2,1.1C423.6,99.5,424.4,99,424.6,98.3 L424.6,98.3z M407.7,89c0.2-0.8-0.2-1.5-0.9-1.6l0.4-1.3c1.4,0.3,2.3,1.8,1.9,3.2L407.7,89z M410.4,89.6c0.6-2.1-0.3-4.3-2.8-4.9 l0.4-1.3c2.9,0.6,4.6,3.5,3.7,6.5L410.4,89.6z M413,90.1c1-3.5-1.2-7.4-4.7-8.1l0.4-1.3c4.3,0.9,6.8,5.3,5.6,9.7L413,90.1z"
                    })), Object(I.b)("g", {
                        className: "VOICE"
                    }, Object(I.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M256.4,39.5c5.6-1.2,12.3,2.4,15.1,8.2l39.2,83.7c2.7,5.8,0.4,11.6-5.2,12.8L225,162.7 c-5.6,1.2-12.3-2.4-15.1-8.2l-39.2-83.7c-2.7-5.8-0.4-11.6,5.2-12.8L256.4,39.5z"
                    }), Object(I.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M305.6,144.1L225,162.7c-5.6,1.2-12.3-2.4-15.1-8.2l-39.3-83.8c-1.8-3.8-1.3-7.6,0.7-10.1l-5.1,6.1 c-2.1,2.5-2.5,6.3-0.7,10.1l39.3,83.8c2.7,5.8,9.5,9.5,15.1,8.2l80.6-18.6c1.9-0.4,3.4-1.3,4.5-2.7l5.1-6.1 C309,142.8,307.5,143.7,305.6,144.1z"
                    }), Object(I.b)("path", {
                        className: "icon",
                        fill: "#231F20",
                        d: "M235.5,76.1l14,7.6l16.4,35.1c0.7,1.6,0.1,3-1.4,3.5l-23,5.3c-1.5,0.3-3.2-0.6-4-2.2l-19.8-42.1 c-0.7-1.6-0.1-3.1,1.4-3.5L235.5,76.1z M251.2,112.9L244,97.4l-6.8,1.6l4,8.5l-8.2,1.9l3.2,7L251.2,112.9z M255.4,102.7l-2.6-5.6 c-0.3-0.7-1.3-1.3-2-1l-5.4,1.3l3.2,7L255.4,102.7z M229.8,102.4l2.6,5.6l6.8-1.6l-3.2-7l-5.4,1.2 C229.8,100.8,229.5,101.5,229.8,102.4 M262.6,118l-2.6-5.6l-6.8,1.6l3.2,7l5.4-1.3C262.7,119.6,263.1,118.9,262.6,118 M247,123.3 l-3.2-7l-6.8,1.6l2.6,5.6c0.3,0.7,1.3,1.3,2,1L247,123.3z M259.4,111l-3.2-7l-6.8,1.6l3.2,7L259.4,111z M255.2,121.4l-3.2-7 l-6.8,1.6l3.2,7L255.2,121.4z"
                    })), Object(I.b)("path", {
                        d: "M433.7,498c-9.3-13.4-24.5-17.8-31.2-30.8c-4.4-8.4-4.8-32-4.6-47.6c3.6-8,5.6-16.8,5.6-26.1c0-35-28.4-63.3-63.3-63.3 c-35,0-63.3,28.4-63.3,63.3c0,2.8,0.2,5.6,0.6,8.3l-0.1,0.1c0,0,3.8,26.8-5.8,45.2c-12.3,23.4-28.7,25.6-34.2,40.7 c-3.5,9.5-2.4,34.1,15.5,48.8s33.3,9.5,56,6.7c22.6-2.8,38.5-1.6,50.8,3.2s24,17.9,36.1,17.9c11.9,0,26.6,1.2,37.3-12.2 C448.7,532.3,442.8,511.1,433.7,498L433.7,498z"
                    }), Object(I.b)("path", {
                        fill: "#F4CFB2",
                        d: "M424.5,815.8l-18.4-7.3l35.3-120.9l-18.7-87.8l35.3-6.6l21.9,89.9c0.4,2.1,0.5,4.2,0,6.3 c-0.2,1.1-0.6,2.2-1.1,3.3L424.5,815.8z"
                    }), Object(I.b)("path", {
                        fill: "#F4CFB2",
                        d: "M256,815.8l18.4-7.3l-35.3-120.9l18.7-87.8l-35.3-6.6l-21.8,89.9c-0.4,2.1-0.5,4.2,0,6.3 c0.2,1.1,0.6,2.2,1.1,3.3L256,815.8z"
                    }), Object(I.b)("path", {
                        fill: "#F16E00",
                        d: "M477.1,649.2l-7.5-26.9c0,0-3.4-13.1-8-28.2c-5-16.6-11.5-35.8-21.2-43c-16.4-12.2-62.8-18.6-100.1-19.1 c-37.4,0.5-83.7,6.9-100.1,19.1c-9.7,7.2-16.2,26.4-21.2,43c-4.6,15.2-8,28.2-8,28.2l-7.5,26.9l45.8,13.7l7.1-29.7l11.4,98.2h144.7 l12.1-96.4l6.7,27.9L477.1,649.2z"
                    }), Object(I.b)("path", {
                        fill: "#F4CFB2",
                        d: "M369.2,533.4l-5.4-47.3h-47.3l-5.4,47.3l-10,1c0,0,21.8,56.9,39,56.9c17.3,0,39.1-56.9,39.1-56.9L369.2,533.4z"
                    }), Object(I.b)("path", {
                        fill: "#C19372",
                        d: "M311.1,533.4l5.4-47.3h47.3l1,13.2L311.1,533.4z"
                    }), Object(I.b)("path", {
                        fill: "#F4CFB2",
                        d: "M414.2,434.9c0,7.9-6.4,14.3-14.3,14.3c-0.7,0-1.3-0.1-1.9-0.1c-6.3,37.5-29.8,55.6-57.8,55.6 c-27.9,0-51.2-18.8-57.7-55.5h-0.1c-7.9,0-14.3-6.4-14.3-14.3c0-7.4,5.6-13.5,12.9-14.2c2.2-39,22.5-69.5,59.2-69.5 c35.7,0,56.9,30.5,59.2,69.4h0.5C407.8,420.7,414.2,427.1,414.2,434.9L414.2,434.9z"
                    }), Object(I.b)("path", {
                        fill: "#C19372",
                        d: "M351,430.4c0,0-3,7.9-10.9,7.9c-8.1,0-10.9-7.9-10.9-7.9s3.5,4.2,10.9,4.2C347.2,434.6,351,430.4,351,430.4z"
                    }), Object(I.b)("path", {
                        fill: "#FF7902",
                        d: "M401.8,444.5l6.1,6.1l-6.1,6.1l-6.1-6.1L401.8,444.5z"
                    }), Object(I.b)("path", {
                        fill: "#FF7902",
                        d: "M279.3,444.5l6.1,6.1l-6.1,6.1l-6.1-6.1L279.3,444.5z"
                    }), Object(I.b)("path", {
                        d: "M369.8,406.7c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6S369.8,403.4,369.8,406.7z M316.5,400.7c-3.3,0-6,2.7-6,6s2.7,6,6,6 s6-2.7,6-6S319.8,400.7,316.5,400.7z M340.2,451.3c-13.8,0-25.6-6.2-25.6-6.2s2.4,6.6,9.1,11.9c4.1,3.2,9.5,5.9,16.5,5.9 c6,0,11.3-2.7,15.5-6c6.8-5.3,10-11.6,10-11.6S354.7,451.3,340.2,451.3L340.2,451.3z M320.9,391.3c-0.2,0-4.5-0.2-10.1,2.2 c-6.2,2.7-8.6,5.9-8.7,6.1c-0.5,0.7-0.4,1.6,0.3,2.1c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6c0,0,2.2-2.8,7.5-5.1 c4.9-2.1,8.7-2,8.8-2c0.8,0,1.5-0.6,1.6-1.4C322.3,392.1,321.7,391.4,320.9,391.3L320.9,391.3z M399.2,417.5c0,0-3.1-8.2-6.1-10.6 c-4.8-3.8-9.4-6-14.4-7.9c0.3,0.3,0.4,0.5,0.4,0.5c0.5,0.7,0.4,1.6-0.3,2.1c-0.3,0.2-0.6,0.3-0.9,0.3c-0.5,0-0.9-0.2-1.2-0.6 c0,0-2.1-2.8-7.5-5.1c-5-2.2-8.7-2-8.8-2c-0.8,0-1.5-0.6-1.6-1.4c0-0.4,0.1-0.7,0.3-1c-1.4-0.6-2.9-1.3-4.4-2 c-17-8.1-24.1-27.6-24.1-27.6s0,10.4-12.8,19c-12.8,8.6-19.5,7-26.8,14.3c-7.7,7.7-9.8,21.9-9.8,21.9s-5.7-76.9,59-76.9 S399.2,417.5,399.2,417.5L399.2,417.5z"
                    }), Object(I.b)("path", {
                        fill: "#FFFFFF",
                        d: "M314,444.6c0.4,1,3.4,7.3,9.4,12.3c0.8,0.6,7.9,1.8,16.8,1.8c8.5,0,14.8-1.2,15.6-1.8 c6.7-5.3,10.7-12.2,10.7-12.2s-11.8,5.8-26.4,5.8C326.9,450.4,314.9,444.9,314,444.6L314,444.6z"
                    }))
                }),
                be = (E.a.createElement, function(e) {
                    var t, n = e.children,
                        r = Object(S.useTheme)().bp,
                        a = ie().hoveredOfferType,
                        c = Object(T.b)().isB2B,
                        i = Object(S.useLayer)().level > 0;
                    return Object(I.b)(E.a.Fragment, null, !c && !i && Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({}, r.FROM_DESKTOP, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: "50%",
                            bottom: 0,
                            textAlign: "right"
                        }), "")
                    }, Object(I.b)(S.DynamicContent, null, Object(I.b)(fe, {
                        hoveredOfferType: a,
                        css: Object(j.a)(Object(y.a)({
                            display: "none"
                        }, r.FROM_LARGE_DESKTOP, {
                            display: "inline-block"
                        }), "")
                    }), Object(I.b)(pe, {
                        hoveredOfferType: a,
                        css: Object(j.a)((t = {
                            display: "none"
                        }, Object(y.a)(t, r.FROM_DESKTOP, {
                            display: "inline-block"
                        }), Object(y.a)(t, r.FROM_LARGE_DESKTOP, {
                            display: "none"
                        }), t), "")
                    }))), E.a.cloneElement(n, {
                        separatorCSS: Object(y.a)({}, r.FROM_DESKTOP, {
                            display: c || i ? void 0 : "none"
                        })
                    }))
                }),
                Oe = function(e) {
                    return Object(I.b)(ce, null, Object(I.b)(be, e))
                },
                he = function(e, t) {
                    var n = Object(T.b)().contracts,
                        r = n && n.filter((function(n) {
                            return e && t ? n.processType === t && n.offerType === e : null
                        }));
                    return {
                        currentContracts: r,
                        numberOfContracts: r ? r.length : 0
                    }
                },
                me = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.offerProcess,
                        n = Object(T.b)(),
                        r = n.dispatch,
                        a = n.offerType,
                        c = he(a, t.type).numberOfContracts,
                        i = ne[t.iconType],
                        o = E.a.useCallback((function() {
                            t.redirectUrl ? window.location.assign(t.redirectUrl) : r({
                                type: "selectProcess",
                                payload: t.type
                            })
                        }), [r, t.redirectUrl, t.type]),
                        s = E.a.useCallback((function(e) {
                            "Enter" === e.key && o()
                        }), [o]);
                    return Object(I.b)(S.ActionListItem, {
                        title: t.name,
                        icon: i || Y.a,
                        hasBadge: c > 0,
                        badgeText: 1 === c ? "Dost\u0119pne dla 1 numeru" : "Dost\u0119pne dla ".concat(c, " numer\xf3w"),
                        onClick: o,
                        onKeyPress: s
                    })
                })));
            me.displayName = "Process";
            var ve = n("QVQ0");
            E.a.createElement;
            var ye = {
                    name: "131yq1t",
                    styles: "padding-left:0;"
                },
                je = E.a.memo((function(e) {
                    var t = e.upsellProcess,
                        n = e.currentUpsellOffer,
                        r = Object(T.b)().dispatch,
                        a = t.iconList.map((function(e) {
                            return ne[e] || G.a
                        })),
                        c = E.a.useCallback((function() {
                            n && (r({
                                type: "setCurrentUpsellOffer",
                                payload: n
                            }), r({
                                type: "goToUpsell"
                            }))
                        }), [n, r]),
                        i = E.a.useCallback((function(e) {
                            "Enter" === e.key && c()
                        }), [c]);
                    return Object(I.b)(S.ActionListItem, {
                        title: t.description,
                        iconList: a,
                        hasBadge: !1,
                        onClick: c,
                        onKeyPress: i,
                        css: ye
                    })
                })),
                ge = (E.a.createElement, E.a.memo((function() {
                    var e, t = Object(T.b)(),
                        n = t.currentOffer,
                        r = t.offerType,
                        a = t.isUserLogged,
                        c = t.dispatch,
                        i = t.enhance,
                        o = Object(S.useTheme)().bp,
                        s = r && "FIX" === Object(ve.a)(r) && a;
                    if (E.a.useEffect((function() {
                            s && c({
                                type: "selectProcess",
                                payload: "FIX_EXISTING_SERVICE"
                            })
                        }), [c, s]), !n || !r) return null;
                    var u = null === i || void 0 === i ? void 0 : i.config.find((function(e) {
                            return e.offer.type === r
                        })),
                        l = null === u || void 0 === u ? void 0 : u.processes;
                    if (!n || !r) return null;
                    var d = n.processes;
                    return s ? null : Object(I.b)("ul", {
                        css: Object(j.a)((e = {
                            width: "100%",
                            maxWidth: 400,
                            padding: 20
                        }, Object(y.a)(e, o.FROM_TABLET, {
                            padding: "0 0 30px 20px"
                        }), Object(y.a)(e, o.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, d.map((function(e) {
                        return Object(I.b)(me, {
                            key: e.type,
                            offerProcess: e
                        })
                    })), null === l || void 0 === l ? void 0 : l.map((function(e) {
                        return Object(I.b)(je, {
                            key: e.type,
                            upsellProcess: e,
                            currentUpsellOffer: u || null
                        })
                    })))
                })));
            ge.displayName = "Main";
            E.a.createElement;
            var Ee = {
                    name: "1wcba0h",
                    styles: "display:flex;margin-top:20px;"
                },
                Se = {
                    name: "62c68f",
                    styles: "font-size:14px;line-height:18px;flex-shrink:1;margin:0;span{margin-top:10px;display:inline-block;}"
                },
                Te = function(e) {
                    var t = e.description,
                        n = e.icon,
                        r = Object(S.useTheme)().bp,
                        a = ne[n];
                    return Object(I.b)("div", {
                        css: Ee
                    }, a && Object(I.b)(a, {
                        css: Object(j.a)(Object(y.a)({
                            display: "none"
                        }, r.FROM_DESKTOP, {
                            display: "block",
                            width: 35,
                            height: 35,
                            marginRight: 20,
                            flexShrink: 0
                        }), "")
                    }), t && Object(I.b)("p", {
                        css: Se,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                },
                Ce = function(e) {
                    return "DATA" === e || "VOICE" === e || "DATA_LDF" === e || "VOICE_LDF" === e
                };
            E.a.createElement;
            var we = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                xe = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                ke = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                Pe = E.a.memo((function() {
                    var e, t = Object(k.a)(),
                        n = Object(S.useTheme)(),
                        r = n.bp,
                        a = n.colors,
                        c = Object(T.b)(),
                        i = c.currentOffer,
                        o = c.offerType,
                        s = c.isUserLogged,
                        u = c.isB2B,
                        l = Ce(o),
                        d = o && "FIX" === Object(ve.a)(o);
                    if (!i || d && s) return null;
                    var p = i.mainDescription,
                        f = i.mainIconType,
                        b = u || !d ? "Wybierz, co <br /> chcesz zrobi\u0107" : "Czy masz ju\u017c internet w Orange?";
                    return t ? Object(I.b)("div", {
                        css: we
                    }, Object(I.b)("strong", {
                        css: Object(j.a)({
                            color: a.ORANGE_DARK,
                            display: "inline-block",
                            marginBottom: 10
                        }, "")
                    }, i.name), Object(I.b)("h2", {
                        dangerouslySetInnerHTML: {
                            __html: b
                        }
                    }), l && Object(I.b)(U, {
                        css: xe
                    }), p && Object(I.b)(Te, {
                        description: p,
                        icon: f
                    })) : Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            padding: 20
                        }, r.FROM_DESKTOP, {
                            padding: 0,
                            maxWidth: 400
                        }), "")
                    }, Object(I.b)("h2", {
                        css: Object(j.a)((e = {}, Object(y.a)(e, r.FROM_DESKTOP, {
                            fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                            lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                        }), Object(y.a)(e, "@media (min-width: 1240px)", {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), ""),
                        dangerouslySetInnerHTML: {
                            __html: b
                        }
                    }), l && Object(I.b)(U, {
                        css: ke
                    }), p && Object(I.b)(Te, {
                        description: p,
                        icon: f
                    }))
                }));
            Pe.displayName = "Description";
            E.a.createElement;
            var ze = E.a.memo((function() {
                var e, t = Object(S.useTheme)().bp,
                    n = Object(T.b)(),
                    r = n.isB2B,
                    a = n.offerType,
                    c = a && "FIX" === Object(ve.a)(a),
                    i = r || !c ? "Wpisz gdzie chcesz korzysta\u0107 z us\u0142ugi" : "Gdzie chcesz korzysta\u0107 z internetu?";
                return Object(I.b)("h2", {
                    css: Object(j.a)((e = {
                        padding: "20px 20px 0 20px"
                    }, Object(y.a)(e, t.FROM_TABLET, {
                        width: "100%"
                    }), Object(y.a)(e, t.FROM_DESKTOP, {
                        maxWidth: 400
                    }), e), "")
                }, i)
            }));
            ze.displayName = "Description";
            var Ne = n("VtSi"),
                Re = n.n(Ne);

            function Ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ae(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ie(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _e = {
                    city: {
                        name: "",
                        cbsIdCity: null
                    },
                    street: {
                        name: "",
                        cbsIdStreet: null
                    },
                    isStreetRequired: !0,
                    isApartmentNumberRequired: !1,
                    isLocalRequired: !1,
                    houseNumber: "",
                    localNumber: ""
                },
                Le = function(e, t) {
                    switch (t.type) {
                        case "setClearForm":
                            return Ae({}, _e);
                        case "setConfigValue":
                            return Ae({}, e, Object(y.a)({}, t.payload.key, t.payload.value));
                        case "setClearStreet":
                            return Ae({}, e, {
                                street: {
                                    name: "",
                                    cbsIdStreet: null
                                }
                            });
                        default:
                            return e
                    }
                };
            E.a.createElement;

            function Me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function De(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Me(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Be = E.a.createContext(null),
                Fe = E.a.memo((function(e) {
                    var t = e.isLocalRequired,
                        n = Object(L.a)(e, ["isLocalRequired"]),
                        r = E.a.useReducer(Le, _e),
                        a = Object(C.a)(r, 2),
                        c = a[0],
                        i = a[1];
                    return E.a.useEffect((function() {
                        i({
                            type: "setConfigValue",
                            payload: {
                                key: "isLocalRequired",
                                value: t
                            }
                        })
                    }), [t]), Object(I.b)(Be.Provider, Object(R.a)({
                        value: De({}, c, {
                            dispatch: i
                        })
                    }, n))
                }));
            Fe.displayName = "WWTFormProvider";
            var Ve = function() {
                    var e = E.a.useContext(Be);
                    if (null === e) throw Error("useWWTFormContext: Please provide WWTFormProvider value.");
                    return e
                },
                Ue = n("ePoE"),
                He = n("mpXp"),
                Ge = n.n(He),
                We = n("3oP0");
            E.a.createElement;
            var Ke = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                qe = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                Ye = E.a.memo((function(e) {
                    var t = e.onBack,
                        n = e.onSuccess,
                        r = e.isPending,
                        a = Ve(),
                        c = a.isStreetRequired,
                        i = a.city,
                        o = a.isLocalRequired,
                        s = function() {
                            var e = Ve(),
                                t = e.dispatch,
                                n = e.city,
                                r = e.street,
                                a = e.isStreetRequired,
                                c = e.isLocalRequired,
                                i = e.houseNumber,
                                o = e.localNumber,
                                s = Ge()({
                                    mode: "onChange"
                                }),
                                u = s.register,
                                l = s.handleSubmit,
                                d = s.errors,
                                p = s.clearError,
                                f = s.setValue,
                                b = s.formState,
                                O = s.reset;
                            E.a.useEffect((function() {
                                c && s.setError("localNumber", "error", "To pole jest wymagane")
                            }), [s, c]);
                            var h = E.a.useState([]),
                                m = Object(C.a)(h, 2),
                                v = m[0],
                                y = m[1],
                                j = E.a.useState([]),
                                g = Object(C.a)(j, 2),
                                S = g[0],
                                T = g[1],
                                w = E.a.useCallback((function() {
                                    return !n.cbsIdCity || !a
                                }), [n.cbsIdCity, a]),
                                x = E.a.useCallback((function() {
                                    return !r.cbsIdStreet && a || !a && !n.cbsIdCity
                                }), [r.cbsIdStreet, a, n.cbsIdCity]),
                                k = E.a.useCallback((function() {
                                    T([]), t({
                                        type: "setClearForm"
                                    })
                                }), [t, T]),
                                P = E.a.useCallback((function() {
                                    t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "isLocalRequired",
                                            value: !1
                                        }
                                    }), t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "houseNumber",
                                            value: ""
                                        }
                                    }), t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "localNumber",
                                            value: ""
                                        }
                                    }), f("localNumber", ""), f("houseNumber", ""), p(["localNumber", "houseNumber"])
                                }), [t, p, f]),
                                z = E.a.useCallback((function(e, n) {
                                    if (e) return "CITY" === n ? (k(), O({
                                        street: "",
                                        houseNumber: "",
                                        localNumber: ""
                                    }), f("city", e.name), void t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "city",
                                            value: {
                                                name: e.name,
                                                cbsIdCity: e.id
                                            }
                                        }
                                    })) : void("STREET" === n && (P(), f("street", e.name), t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "street",
                                            value: {
                                                name: e.name,
                                                cbsIdStreet: e.id
                                            }
                                        }
                                    })))
                                }), [k, O, f, t, P]),
                                N = E.a.useCallback((function(e) {
                                    var t, n;
                                    return Re.a.async((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (!((t = e.target.value).length > 2)) {
                                                    r.next = 8;
                                                    break
                                                }
                                                return r.next = 4, Re.a.awrap(Object(We.f)(t, ""));
                                            case 4:
                                                n = r.sent, y(n), r.next = 9;
                                                break;
                                            case 8:
                                                y([]);
                                            case 9:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), null, null, null, Promise)
                                }), []),
                                R = E.a.useCallback((function(e) {
                                    var t, r;
                                    return Re.a.async((function(a) {
                                        for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                if (t = e.target.value, n.cbsIdCity) {
                                                    a.next = 3;
                                                    break
                                                }
                                                return a.abrupt("return");
                                            case 3:
                                                if (!(t.length > 2)) {
                                                    a.next = 8;
                                                    break
                                                }
                                                return a.next = 6, Re.a.awrap(Object(We.g)(t, {
                                                    city_id: n.cbsIdCity
                                                }));
                                            case 6:
                                                r = a.sent, T(r);
                                            case 8:
                                                (!t || t.length <= 2) && T([]);
                                            case 9:
                                            case "end":
                                                return a.stop()
                                        }
                                    }), null, null, null, Promise)
                                }), [n]),
                                I = E.a.useCallback((function(e, n) {
                                    if ("HOUSE" === n) return t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "isLocalRequired",
                                            value: !1
                                        }
                                    }), p(["localNumber"]), void t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "houseNumber",
                                            value: e.target.value
                                        }
                                    });
                                    "LOCAL" === n && t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "localNumber",
                                            value: e.target.value
                                        }
                                    })
                                }), [t, p]),
                                A = E.a.useCallback((function() {
                                    t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "isStreetRequired",
                                            value: !a
                                        }
                                    }), t({
                                        type: "setClearStreet"
                                    }), f("street", ""), t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "isLocalRequired",
                                            value: !1
                                        }
                                    }), p(["street", "localNumber", "houseNumber"])
                                }), [p, t, a, f]),
                                _ = {
                                    apartmentNo: o,
                                    city: n.name,
                                    cityId: n.cbsIdCity,
                                    street: r.name,
                                    streetId: r.cbsIdStreet,
                                    houseNo: i,
                                    isStreetRequired: a
                                };
                            return {
                                form: s,
                                citySuggestion: v,
                                streetSuggestion: S,
                                onCityFieldChange: N,
                                onStreetFieldChange: R,
                                onNoStreetChange: A,
                                onSelect: z,
                                register: u,
                                handleSubmit: l,
                                errors: d,
                                formState: b,
                                isStreetDisabled: w,
                                isLocalNumberDisabled: x,
                                onChange: I,
                                formData: _
                            }
                        }(),
                        u = s.onCityFieldChange,
                        l = s.onStreetFieldChange,
                        d = s.onNoStreetChange,
                        p = s.citySuggestion,
                        f = s.streetSuggestion,
                        b = s.onSelect,
                        O = s.register,
                        h = s.handleSubmit,
                        m = s.isStreetDisabled,
                        v = s.isLocalNumberDisabled,
                        g = s.form,
                        T = s.onChange,
                        w = s.formData,
                        x = Object(S.useTheme)(),
                        k = x.bp,
                        P = x.colors,
                        z = x.zIndex;
                    return Object(I.b)("div", {
                        css: Ke
                    }, r && Object(I.b)("div", {
                        css: Object(j.a)({
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: P.WHITE,
                            zIndex: z.LAYER_2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }, "")
                    }, Object(I.b)(S.Loader, null)), Object(I.b)(He.FormContext, g, Object(I.b)("form", {
                        autoComplete: "off",
                        onSubmit: h((function() {
                            return n(w)
                        }))
                    }, Object(I.b)(S.Autocomplete, {
                        autoComplete: "random",
                        suggestions: p,
                        onItemSelect: function(e) {
                            return b(e, "CITY")
                        },
                        onChange: u,
                        placeholder: "Miejscowo\u015b\u0107",
                        name: "city",
                        ref: O({
                            required: "To pole jest wymagane"
                        }),
                        withValidationColor: !0,
                        withValidationIcon: !0,
                        value: i.name,
                        wrapperCss: {
                            marginBottom: 20
                        }
                    }), Object(I.b)(S.Checkbox, {
                        name: "noStreet",
                        onChange: d,
                        checked: !c,
                        wrapperCss: {
                            marginBottom: 10
                        }
                    }, "W mojej miejscowo\u015bci nie ma ulicy"), Object(I.b)(S.Autocomplete, {
                        autoComplete: "random",
                        suggestions: f,
                        onItemSelect: function(e) {
                            return b(e, "STREET")
                        },
                        onChange: l,
                        placeholder: "Ulica",
                        withValidationColor: !0,
                        withValidationIcon: !0,
                        name: "street",
                        ref: O({
                            required: !!c && "To pole jest wymagane"
                        }),
                        disabled: m(),
                        wrapperCss: {
                            marginBottom: 20
                        }
                    }), Object(I.b)("div", {
                        css: qe
                    }, Object(I.b)(Ue.a, {
                        placeholder: "Nr domu",
                        name: "houseNumber",
                        disabled: v(),
                        ref: O({
                            required: "To pole jest wymagane"
                        }),
                        withValidationColor: !0,
                        withValidationIcon: !0,
                        onChange: function(e) {
                            return T(e, "HOUSE")
                        },
                        wrapperCss: {
                            marginRight: 20,
                            flexBasis: "50%"
                        }
                    }), Object(I.b)(Ue.a, {
                        placeholder: "Nr lokalu",
                        name: "localNumber",
                        disabled: v(),
                        withValidationColor: !0,
                        withValidationIcon: !0,
                        ref: O({
                            required: !!o && "To pole jest wymagane"
                        }),
                        onChange: function(e) {
                            return T(e, "LOCAL")
                        },
                        wrapperCss: {
                            flexBasis: "50%"
                        }
                    })), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            flexFlow: "wrap",
                            marginTop: 40
                        }, k.FROM_TABLET, {
                            flexFlow: "nowrap"
                        }), "")
                    }, t && Object(I.b)(S.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: t,
                        css: Object(j.a)(Object(y.a)({
                            flexBasis: "100%",
                            marginBottom: 20
                        }, k.FROM_TABLET, {
                            flexBasis: "50%",
                            marginRight: 20,
                            marginBottom: 0
                        }), "")
                    }, "Wstecz"), Object(I.b)(S.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_WHITE",
                        css: Object(j.a)(Object(y.a)({
                            flexBasis: "100%"
                        }, k.FROM_TABLET, {
                            flexBasis: "50%",
                            maxWidth: 190
                        }), "")
                    }, "Dalej")))))
                })),
                Xe = (E.a.createElement, E.a.memo((function(e) {
                    return Object(I.b)(Fe, {
                        isLocalRequired: e.isLocalRequired
                    }, Object(I.b)(Ye, e))
                }))),
                Je = (E.a.createElement, E.a.memo((function() {
                    var e, t = Object(S.useTheme)().bp,
                        n = E.a.useState(!1),
                        r = Object(C.a)(n, 2),
                        a = r[0],
                        c = r[1],
                        i = E.a.useState(!1),
                        o = Object(C.a)(i, 2),
                        s = o[0],
                        u = o[1],
                        l = Object(T.b)(),
                        d = l.dispatch,
                        p = l.currentOffer,
                        f = l.currentStep,
                        b = l.offerType,
                        O = l.isUserLogged,
                        h = l.processType,
                        m = Object(N.b)().market,
                        v = Object(V.c)(),
                        g = v.corazoneSkipRedirect,
                        w = v.enableCBSRedirectForWarsaw,
                        x = function(e) {
                            return e.replace(/ /g, "+")
                        },
                        k = E.a.useCallback((function(e, t, n, r, a, c) {
                            var i = x(e),
                                o = x(t);
                            return "city=".concat(i, "&street=").concat(o, "&roadNo=").concat(n, "&apartmentNo=").concat(r, "&cbsIdCity=").concat(a, "&cbsIdStreet=").concat(c, "&formInitialized=true")
                        }), []),
                        P = E.a.useCallback((function(e) {
                            var t;
                            return Re.a.async((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return c(!0), u(!1), d({
                                            type: "setIsSuflerProcessing",
                                            payload: !0
                                        }), n.next = 5, Re.a.awrap(Object(We.i)(e));
                                    case 5:
                                        if (!(t = n.sent).wwtCheckStatus || 454 !== t.wwtCheckStatus.errorCode) {
                                            n.next = 11;
                                            break
                                        }
                                        return u(!0), d({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        }), c(!1), n.abrupt("return");
                                    case 11:
                                        t.doRedirect && t.redirectUrl && ("LEAD" === Object(ve.a)(null === p || void 0 === p ? void 0 : p.type) || 91189 === e.leadAddressForm.cbsIdCity) && !g && w ? (Object(re.c)(f, b, m, O, window.location.pathname, "WARSAW_PROCESS", h), window.location.href = t.redirectUrl) : (c(!1), d({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        }), d({
                                            type: "setLocalizationData",
                                            payload: e.leadAddressForm
                                        }));
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), null, null, null, Promise)
                        }), [d, p, g, w, f, b, m, O, h]);
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            padding: 20,
                            width: "100%"
                        }, Object(y.a)(e, t.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, t.ONLY_TABLET, {
                            marginBottom: 30
                        }), e), "")
                    }, Object(I.b)(Xe, {
                        onSuccess: function(e) {
                            e.cityId && (e.streetId || !e.isStreetRequired) && e.houseNo && (P({
                                componentUid: p ? p.configComponentPk : "",
                                processType: p ? p.type : "",
                                leadAddressForm: {
                                    apartmentNo: e.apartmentNo,
                                    cbsIdCity: e.cityId,
                                    cbsIdStreet: e.streetId,
                                    city: e.city,
                                    roadNo: e.houseNo,
                                    street: e.street
                                }
                            }), z.a.setItem("OPL-prompterWWT_address", JSON.stringify({
                                formType: "DETAILED",
                                leadAddressForm: k(e.city, e.street, e.houseNo, e.apartmentNo, e.cityId, e.streetId)
                            })))
                        },
                        isPending: a,
                        isLocalRequired: s
                    }))
                })));
            Je.displayName = "Location";
            var Ze = function(e) {
                    return e.replace(/-/g, "")
                },
                Qe = n("aant"),
                $e = function(e) {
                    if (!1 === /^[0-9]{11}$/.test(e)) return !1;
                    var t = "".concat(e).split("");
                    if (parseInt(e.substring(4, 6), 10) > 31 || parseInt(e.substring(2, 4), 10) > 12) return !1;
                    var n = (1 * parseInt(t[0], 10) + 3 * parseInt(t[1], 10) + 7 * parseInt(t[2], 10) + 9 * parseInt(t[3], 10) + 1 * parseInt(t[4], 10) + 3 * parseInt(t[5], 10) + 7 * parseInt(t[6], 10) + 9 * parseInt(t[7], 10) + 1 * parseInt(t[8], 10) + 3 * parseInt(t[9], 10)) % 10;
                    return 0 === n && (n = 10), n = 10 - n, parseInt(t[10], 10) === n
                },
                et = function(e) {
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
                },
                tt = function(e) {
                    var t = Object(Qe.a)()(e).length > 0;
                    return /^\d{9}$/.test(e) && !t
                },
                nt = n("s11k");

            function rt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var at = {
                    isUserAuthenticated: !1,
                    formType: "COMMON",
                    authorizationData: {
                        type: null,
                        currentStep: "COMMON_FORM"
                    }
                },
                ct = function(e, t) {
                    switch (t.type) {
                        case "setConfigValue":
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? rt(Object(n), !0).forEach((function(t) {
                                        Object(y.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, e, Object(y.a)({}, t.payload.key, t.payload.value));
                        default:
                            return e
                    }
                },
                it = {
                    PHONE_NUMBER: ["VOICE", "DATA", "DATA_LDF"],
                    COMMON: [],
                    EMAIL: []
                };
            E.a.createElement;

            function ot(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function st(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ot(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ut = E.a.createContext(null),
                lt = E.a.memo((function(e) {
                    var t = e.value,
                        n = Object(L.a)(e, ["value"]),
                        r = Object(T.b)(),
                        a = r.offerType,
                        c = r.currentStep,
                        i = r.authorizationType,
                        o = "LOGIN" === c && i ? i : function(e) {
                            return e && Object.entries(it).map((function(t) {
                                var n = Object(C.a)(t, 2),
                                    r = n[0];
                                return n[1].includes(e) ? r : null
                            })).find((function(e) {
                                return !!e
                            })) || "COMMON"
                        }(a),
                        s = E.a.useReducer(ct, st({}, at, {
                            formType: o
                        })),
                        u = Object(C.a)(s, 2),
                        l = u[0],
                        d = u[1];
                    return Object(I.b)(ut.Provider, Object(R.a)({
                        value: st({}, l, {}, t, {
                            dispatch: d
                        })
                    }, n))
                })),
                dt = function() {
                    var e = E.a.useContext(ut);
                    if (null === e) throw Error("useAuthContext: Please provide AuthProvider value.");
                    return e
                },
                pt = function() {
                    var e = Object(T.b)().processType,
                        t = dt().dispatch,
                        n = E.a.useState({
                            status: null,
                            message: null
                        }),
                        r = Object(C.a)(n, 2),
                        a = r[0],
                        c = r[1],
                        i = E.a.useState(!1),
                        o = Object(C.a)(i, 2),
                        s = o[0],
                        u = o[1],
                        l = E.a.useCallback((function(n) {
                            var r, a;
                            return Re.a.async((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        if (e) {
                                            i.next = 2;
                                            break
                                        }
                                        return i.abrupt("return");
                                    case 2:
                                        return c({
                                            status: null,
                                            message: null
                                        }), u(!0), i.prev = 4, i.next = 7, Re.a.awrap(Object(nt.e)({
                                            phone: n,
                                            processType: e
                                        }));
                                    case 7:
                                        r = i.sent, a = r.requestToken, u(!1), t({
                                            type: "setConfigValue",
                                            payload: {
                                                key: "authorizationData",
                                                value: {
                                                    type: "PHONE_NUMBER",
                                                    currentStep: "VERIFICATION",
                                                    authorizationToken: a,
                                                    phoneNumber: n
                                                }
                                            }
                                        }), i.next = 17;
                                        break;
                                    case 13:
                                        i.prev = 13, i.t0 = i.catch(4), u(!1), c({
                                            status: "ERROR",
                                            message: i.t0.message
                                        });
                                    case 17:
                                    case "end":
                                        return i.stop()
                                }
                            }), null, null, [
                                [4, 13]
                            ], Promise)
                        }), [t, e]),
                        d = E.a.useCallback((function(n) {
                            return Re.a.async((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, Re.a.awrap(Object(nt.c)({
                                            phone: n,
                                            processType: e || void 0
                                        }));
                                    case 3:
                                        t({
                                            type: "setConfigValue",
                                            payload: {
                                                key: "authorizationData",
                                                value: {
                                                    currentStep: "VERIFICATION",
                                                    type: "EMAIL",
                                                    login: n
                                                }
                                            }
                                        }), r.next = 9;
                                        break;
                                    case 6:
                                        r.prev = 6, r.t0 = r.catch(0), c({
                                            status: "ERROR",
                                            message: r.t0.message
                                        });
                                    case 9:
                                    case "end":
                                        return r.stop()
                                }
                            }), null, null, [
                                [0, 6]
                            ], Promise)
                        }), [e, t]),
                        p = E.a.useCallback((function(e) {
                            return Re.a.async((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        t({
                                            type: "setConfigValue",
                                            payload: {
                                                key: "authorizationData",
                                                value: {
                                                    currentStep: "VERIFICATION",
                                                    pesel: e,
                                                    type: "PESEL"
                                                }
                                            }
                                        });
                                    case 1:
                                    case "end":
                                        return n.stop()
                                }
                            }), null, null, null, Promise)
                        }), [t]);
                    return {
                        authenticate: E.a.useCallback((function(e) {
                            var t = function(e) {
                                return et(e) ? "EMAIL" : $e(e) ? "PESEL" : tt(e) ? "PHONE_NUMBER" : null
                            }(e);
                            "PHONE_NUMBER" !== t ? "EMAIL" !== t ? "PESEL" === t && p(e) : d(e) : l(e)
                        }), [l, d, p]),
                        formStatus: a,
                        isLoading: s
                    }
                };
            E.a.createElement;
            var ft = {
                    FIX: {
                        COMMON: {
                            label: "Wpisz sw\xf3j numer kom\xf3rkowy w Orange, PESEL lub login do M\xf3j Orange",
                            placeholder: "Numer kom\xf3rkowy, PESEL lub login"
                        },
                        PHONE_NUMBER: {
                            label: "Wpisz sw\xf3j numer kom\xf3rkowy w Orange",
                            placeholder: "Numer kom\xf3rkowy"
                        },
                        EMAIL: {
                            label: "Wpisz poni\u017cej e-mail, kt\xf3rego u\u017cywasz do logowania do konta M\xf3j Orange",
                            placeholder: "Adres email"
                        }
                    },
                    DEFAULT: {
                        COMMON: {
                            label: "Wpisz numer telefonu, PESEL lub login do M\xf3j Orange",
                            placeholder: "Wpisz numer telefonu, PESEL lub login"
                        },
                        PHONE_NUMBER: {
                            label: "Wpisz numer telefonu kom\xf3rkowego",
                            placeholder: "Wpisz numer telefonu"
                        },
                        EMAIL: {
                            label: "Wpisz poni\u017cej e-mail, kt\xf3rego u\u017cywasz do logowania do konta M\xf3j Orange",
                            placeholder: "Adres email"
                        }
                    }
                },
                bt = {
                    name: "dccdhy",
                    styles: "font-weight:bold;font-size:16px;"
                },
                Ot = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                ht = E.a.memo((function() {
                    var e, t = Object(S.useTheme)(),
                        n = t.bp,
                        r = t.colors,
                        a = Object(T.b)(),
                        c = a.isB2B,
                        i = a.offerType,
                        o = Object(k.a)(),
                        s = pt(),
                        u = s.authenticate,
                        l = s.formStatus,
                        d = s.isLoading,
                        p = dt().formType,
                        f = Ge()({
                            mode: "onChange"
                        }),
                        b = i && "FIX" === Object(ve.a)(i),
                        O = c || !b ? ft.DEFAULT[p] : ft.FIX[p],
                        h = O.label,
                        m = O.placeholder;
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            width: "100%",
                            padding: "0 20px"
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, n.ONLY_TABLET, {
                            marginBottom: 20
                        }), e), "")
                    }, Object(I.b)(He.FormContext, f, Object(I.b)("form", {
                        onSubmit: f.handleSubmit((function(e) {
                            "PHONE_NUMBER" === p && (tt(Ze(e.phone)) ? u(Ze(e.phone)) : f.setError("phone", "error", "Podaj poprawny numer telefonu"));
                            "EMAIL" === p && (et(e.email) ? u(e.email) : f.setError("email", "error", "Podaj poprawny adres email"));
                            "COMMON" === p && u(e.input)
                        }))
                    }, !o && Object(I.b)("label", {
                        css: bt
                    }, h), Object(I.b)("div", {
                        css: Ot
                    }, "PHONE_NUMBER" === p && Object(I.b)(Ue.c, {
                        prefix: "(+48)",
                        name: "phone",
                        placeholder: m,
                        ref: f.register,
                        withValidationIcon: !0,
                        withValidationColor: !0
                    }), "EMAIL" === p && Object(I.b)(Ue.a, {
                        name: "email",
                        ref: f.register({
                            validate: function(e) {
                                return et(e) || "Wprowad\u017a poprawny adres email"
                            }
                        }),
                        withValidationIcon: !0,
                        withValidationColor: !0,
                        variant: "STARDUST",
                        placeholder: m,
                        type: "email"
                    }), "COMMON" === p && Object(I.b)(Ue.a, {
                        name: "input",
                        ref: f.register({
                            validate: function(e) {
                                return function(e) {
                                    return $e(e) || et(e) || tt(e)
                                }(e) || "Wprowad\u017a poprawny PESEL, numer telefonu lub login do M\xf3j Orange."
                            }
                        }),
                        withValidationIcon: !0,
                        withValidationColor: !0,
                        variant: "STARDUST",
                        placeholder: m,
                        type: "text"
                    })), "ERROR" === l.status && Object(I.b)("span", {
                        css: Object(j.a)({
                            marginTop: 0,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: r.DANGER
                        }, "")
                    }, l.message, Object(I.b)("br", null)), Object(I.b)(S.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_BLACK",
                        disabled: d,
                        css: Object(j.a)(Object(y.a)({
                            width: "100%",
                            marginTop: 20
                        }, n.FROM_TABLET, {
                            width: 170,
                            marginTop: 40
                        }), "")
                    }, "Dalej"))))
                }));
            ht.displayName = "CommonForm";
            var mt = n("bVfH"),
                vt = n("sGZ7");
            E.a.createElement;
            var yt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                jt = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                gt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Et = {
                    name: "q12xye",
                    styles: "display:flex;margin-top:40px;"
                },
                St = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                Tt = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                Ct = E.a.memo((function() {
                    var e, t = Object(S.useTheme)(),
                        n = t.bp,
                        r = t.colors,
                        a = function() {
                            var e = dt(),
                                t = e.dispatch,
                                n = e.authorizationData,
                                r = Object(N.b)().setIsUserLogged,
                                a = Object(vt.c)().dispatch,
                                c = Object(T.b)(),
                                i = c.dispatch,
                                o = c.currentStep,
                                s = E.a.useCallback((function() {
                                    var e, t, n, r, c, s;
                                    return Re.a.async((function(u) {
                                        for (;;) switch (u.prev = u.next) {
                                            case 0:
                                                if ("LOGIN" !== o) {
                                                    u.next = 10;
                                                    break
                                                }
                                                return u.next = 3, Re.a.awrap(Promise.all([Object(We.k)(), Object(We.e)(), Object(mt.a)()]));
                                            case 3:
                                                e = u.sent, t = Object(C.a)(e, 2), n = t[0], r = t[1], n && (c = n.accountCode, s = n.accountId, c && s && i({
                                                    type: "sendSelectedAccount",
                                                    payload: {
                                                        id: s,
                                                        code: c
                                                    }
                                                })), r && i({
                                                    type: "setContracts",
                                                    payload: r
                                                }), a({
                                                    type: "setCartItemsCount",
                                                    payload: 0
                                                });
                                            case 10:
                                            case "end":
                                                return u.stop()
                                        }
                                    }), null, null, null, Promise)
                                }), [i, a, o]),
                                u = Ge()({
                                    mode: "onChange"
                                }),
                                l = E.a.useState({
                                    status: null,
                                    message: null
                                }),
                                d = Object(C.a)(l, 2),
                                p = d[0],
                                f = d[1],
                                b = E.a.useState(!1),
                                O = Object(C.a)(b, 2),
                                h = O[0],
                                m = O[1];
                            return {
                                onSubmit: E.a.useCallback((function(e) {
                                    if (n.login) {
                                        Re.a.async((function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    return f({
                                                        status: null,
                                                        message: null
                                                    }), m(!0), a.prev = 2, a.next = 5, Re.a.awrap(Object(nt.f)({
                                                        password: e.password,
                                                        login: n.login || ""
                                                    }));
                                                case 5:
                                                    return a.next = 7, Re.a.awrap(s());
                                                case 7:
                                                    r(!0), m(!1), t({
                                                        type: "setConfigValue",
                                                        payload: {
                                                            key: "isUserAuthenticated",
                                                            value: !0
                                                        }
                                                    }), a.next = 16;
                                                    break;
                                                case 12:
                                                    a.prev = 12, a.t0 = a.catch(2), m(!1), f({
                                                        status: "ERROR",
                                                        message: a.t0.message
                                                    });
                                                case 16:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }), null, null, [
                                            [2, 12]
                                        ], Promise)
                                    }
                                }), [n.login, r, s, t]),
                                verificationStatus: p,
                                onClickBack: E.a.useCallback((function() {
                                    t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "authorizationData",
                                            value: {
                                                currentStep: "COMMON_FORM",
                                                type: null,
                                                login: null
                                            }
                                        }
                                    })
                                }), [t]),
                                register: u.register,
                                form: u,
                                isLoading: h
                            }
                        }(),
                        c = a.onSubmit,
                        i = a.verificationStatus,
                        o = a.onClickBack,
                        s = a.register,
                        u = a.form,
                        l = a.isLoading;
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            padding: "0 20px",
                            width: "100%"
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, n.ONLY_TABLET, {
                            marginBottom: 30
                        }), e), "")
                    }, Object(I.b)(He.FormContext, u, Object(I.b)("form", {
                        onSubmit: u.handleSubmit(c)
                    }, Object(I.b)("label", {
                        css: yt
                    }, Object(I.b)("span", {
                        css: Object(j.a)(Object(y.a)({
                            fontWeight: "bold",
                            fontSize: 14,
                            display: "inline"
                        }, n.FROM_TABLET, {
                            fontSize: 18,
                            display: "block"
                        }), "")
                    }, "Wpisz has\u0142o")), Object(I.b)("div", {
                        css: jt
                    }, Object(I.b)(Ue.a, {
                        name: "password",
                        ref: s,
                        type: "password",
                        placeholder: "Has\u0142o"
                    }), "ERROR" === i.status && Object(I.b)("p", {
                        css: Object(j.a)({
                            marginTop: 0,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: r.DANGER
                        }, "")
                    }, i.message), Object(I.b)("p", {
                        css: gt
                    }, "Zapomnia\u0142e\u015b has\u0142a?", " ", Object(I.b)(S.A, {
                        href: "/twojekonto/odzyskaj_haslo"
                    }, "Zresetuj je tutaj"))), Object(I.b)("div", {
                        css: Et
                    }, Object(I.b)(S.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: o,
                        css: St,
                        disabled: l
                    }, "Wstecz"), Object(I.b)(S.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_WHITE",
                        disabled: l,
                        css: Tt
                    }, "Dalej")))))
                }));
            Ct.displayName = "EmailVerification";
            var wt = n("Co0+"),
                xt = n("sXW5"),
                kt = n("VfYs");
            E.a.createElement;
            var Pt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                zt = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                Nt = {
                    name: "4331mo",
                    styles: "height:20px;margin-right:10px;min-width:20px;width:20px;"
                },
                Rt = {
                    name: "w2cuf",
                    styles: "margin-top:0;font-size:14px;font-weight:bold;a{text-decoration:underline;}"
                },
                It = {
                    name: "7w1zh4",
                    styles: "text-decoration:underline;font-size:14px;margin-left:5px;"
                },
                At = {
                    name: "bo11xp",
                    styles: "display:flex;align-items:center;margin-top:6px;"
                },
                _t = {
                    name: "ov7rn5",
                    styles: "font-size:14px;margin:10px 0 0 10px;"
                },
                Lt = E.a.memo((function() {
                    var e, t = Object(S.useTheme)(),
                        n = t.bp,
                        r = t.colors,
                        a = dt().authorizationData,
                        c = function() {
                            var e = dt(),
                                t = e.authorizationData,
                                n = e.dispatch,
                                r = Object(T.b)(),
                                a = r.dispatch,
                                c = r.processType,
                                i = Ge()({
                                    mode: "onChange"
                                }),
                                o = E.a.useState(!1),
                                s = Object(C.a)(o, 2),
                                u = s[0],
                                l = s[1],
                                d = E.a.useState(!1),
                                p = Object(C.a)(d, 2),
                                f = p[0],
                                b = p[1],
                                O = E.a.useState({
                                    status: null,
                                    message: null
                                }),
                                h = Object(C.a)(O, 2),
                                m = h[0],
                                v = h[1],
                                y = E.a.useCallback((function(e) {
                                    if (t.phoneNumber && t.authorizationToken) {
                                        ! function() {
                                            var r;
                                            Re.a.async((function(i) {
                                                for (;;) switch (i.prev = i.next) {
                                                    case 0:
                                                        return v({
                                                            status: null,
                                                            message: null
                                                        }), l(!1), i.next = 4, Re.a.awrap(Object(kt.b)());
                                                    case 4:
                                                        return r = i.sent, b(!0), i.prev = 6, i.next = 9, Re.a.awrap(Object(nt.h)({
                                                            csrfToken: r,
                                                            code: e.sms,
                                                            token: t.authorizationToken || ""
                                                        }));
                                                    case 9:
                                                        i.next = 16;
                                                        break;
                                                    case 11:
                                                        return i.prev = 11, i.t0 = i.catch(6), b(!1), v({
                                                            status: "ERROR",
                                                            message: i.t0.message
                                                        }), i.abrupt("return");
                                                    case 16:
                                                        return i.prev = 16, i.next = 19, Re.a.awrap(Object(nt.a)({
                                                            csrfToken: r,
                                                            phone: "RETENTION" === c ? t.phoneNumber || "" : void 0
                                                        }));
                                                    case 19:
                                                        n({
                                                            type: "setConfigValue",
                                                            payload: {
                                                                key: "isUserAuthenticated",
                                                                value: !0
                                                            }
                                                        }), i.next = 25;
                                                        break;
                                                    case 22:
                                                        i.prev = 22, i.t1 = i.catch(16), -1 !== ["B2C_IN_CART", "B2B_IN_CART", "SERVER_ERROR"].indexOf(i.t1.message) ? (b(!1), a({
                                                            type: "setProcessError",
                                                            payload: {
                                                                type: "CHECK_MARKET_ERROR",
                                                                data: {
                                                                    message: i.t1.message,
                                                                    backTo: "goToAuthorization"
                                                                }
                                                            }
                                                        })) : (b(!1), v({
                                                            status: "ERROR",
                                                            message: i.t1.message
                                                        }));
                                                    case 25:
                                                    case "end":
                                                        return i.stop()
                                                }
                                            }), null, null, [
                                                [6, 11],
                                                [16, 22]
                                            ], Promise)
                                        }()
                                    }
                                }), [t.phoneNumber, t.authorizationToken, c, n, a]),
                                j = E.a.useCallback((function() {
                                    if (t.authorizationToken) {
                                        Re.a.async((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return v({
                                                        status: null,
                                                        message: null
                                                    }), l(!0), e.next = 4, Re.a.awrap(Object(nt.g)({
                                                        token: t.authorizationToken || ""
                                                    }));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), null, null, null, Promise)
                                    }
                                }), [t.authorizationToken]),
                                g = E.a.useCallback((function() {
                                    n({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "authorizationData",
                                            value: {
                                                currentStep: "COMMON_FORM",
                                                authorizationToken: null,
                                                type: null,
                                                phoneNumber: null
                                            }
                                        }
                                    })
                                }), [n]);
                            return {
                                register: i.register,
                                onSubmit: y,
                                onClickBack: g,
                                onClickResendSms: j,
                                wasSmsResent: u,
                                isSmsVerificationCodeResponsePending: f,
                                setWasSmsResent: l,
                                verificationStatus: m,
                                form: i
                            }
                        }(),
                        i = c.register,
                        o = c.wasSmsResent,
                        s = c.setWasSmsResent,
                        u = c.onSubmit,
                        l = c.verificationStatus,
                        d = c.onClickBack,
                        p = c.onClickResendSms,
                        f = c.isSmsVerificationCodeResponsePending,
                        b = c.form;
                    return E.a.useEffect((function() {
                        if (o) {
                            var e = setTimeout((function() {
                                return s(!1)
                            }), 1e4);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [s, o]), Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            padding: "0 20px",
                            width: "100%"
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, n.ONLY_TABLET, {
                            marginBottom: 30
                        }), e), "")
                    }, Object(I.b)(He.FormContext, b, Object(I.b)("form", {
                        onSubmit: b.handleSubmit(u)
                    }, Object(I.b)("label", {
                        css: Pt
                    }, Object(I.b)("span", {
                        css: Object(j.a)(Object(y.a)({
                            fontWeight: "bold",
                            fontSize: 14,
                            display: "inline"
                        }, n.FROM_TABLET, {
                            fontSize: 18,
                            display: "block"
                        }), "")
                    }, "Wpisz kod SMS", " "), "wys\u0142any na numer", " ", Object(I.b)("span", {
                        css: zt
                    }, a.phoneNumber)), Object(I.b)(Ue.a, {
                        name: "sms",
                        ref: i,
                        variant: "STARDUST",
                        placeholder: "Kod SMS",
                        type: "tel",
                        wrapperCss: {
                            marginTop: 20
                        }
                    }), "ERROR" === l.status && l.message && Object(I.b)("div", {
                        css: Object(j.a)({
                            color: r.DANGER,
                            display: "flex",
                            marginTop: 10
                        }, "")
                    }, Object(I.b)(xt.a, {
                        css: Nt
                    }), Object(I.b)("p", {
                        css: Rt,
                        dangerouslySetInnerHTML: {
                            __html: l.message
                        }
                    })), Object(I.b)("p", {
                        css: Object(j.a)({
                            fontSize: 14,
                            margin: "10px 0 0 0",
                            color: o ? r.DOVE : "inherit"
                        }, "")
                    }, "SMS nie dotar\u0142?", Object(I.b)(S.AButton, {
                        css: It,
                        onClick: p,
                        disabled: o
                    }, "Wy\u015blij ponownie kod SMS")), o && Object(I.b)("div", {
                        css: At
                    }, Object(I.b)(wt.a, {
                        css: Object(j.a)({
                            width: 20,
                            height: 20,
                            color: r.INFO
                        }, "")
                    }), Object(I.b)("p", {
                        css: _t
                    }, "SMS zosta\u0142 wys\u0142any ponownie")), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            flexFlow: "wrap",
                            marginTop: 40
                        }, n.FROM_TABLET, {
                            flexFlow: "nowrap"
                        }), "")
                    }, Object(I.b)(S.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: d,
                        css: Object(j.a)(Object(y.a)({
                            flex: 1,
                            marginBottom: 20,
                            flexBasis: "100%"
                        }, n.FROM_TABLET, {
                            marginRight: 20,
                            marginBottom: 0,
                            flexBasis: "50%"
                        }), ""),
                        disabled: f
                    }, "Wstecz"), Object(I.b)(S.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_WHITE",
                        disabled: f,
                        css: Object(j.a)(Object(y.a)({
                            flex: 1,
                            flexBasis: "100%"
                        }, n.FROM_TABLET, {
                            flexBasis: "50%"
                        }), "")
                    }, "Dalej")))))
                }));
            Lt.displayName = "PhoneNumberVerification";
            var Mt = n("NYeV");
            E.a.createElement;
            var Dt = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                Bt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Ft = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                Vt = E.a.memo((function() {
                    var e, t = Object(S.useTheme)().bp,
                        n = function() {
                            var e = dt(),
                                t = e.dispatch,
                                n = e.authorizationData,
                                r = Object(T.b)().dispatch,
                                a = Object(Mt.a)(),
                                c = E.a.useState(!1),
                                i = Object(C.a)(c, 2),
                                o = i[0],
                                s = i[1],
                                u = E.a.useRef();
                            return {
                                onSuccessEvent: E.a.useCallback((function(e) {
                                    var c;
                                    return Re.a.async((function(i) {
                                        for (;;) switch (i.prev = i.next) {
                                            case 0:
                                                if (n.pesel && e.cityId) {
                                                    i.next = 2;
                                                    break
                                                }
                                                return i.abrupt("return");
                                            case 2:
                                                return i.prev = 2, i.next = 5, Re.a.awrap(Object(nt.d)({
                                                    pesel: n.pesel,
                                                    city: e.city,
                                                    cbsIdCity: e.cityId,
                                                    street: e.street,
                                                    cbsIdStreet: e.streetId,
                                                    apartmentNo: e.apartmentNo,
                                                    roadNo: e.houseNo
                                                }));
                                            case 5:
                                                c = (new Date).getTime(),
                                                    function e() {
                                                        var n;
                                                        return Re.a.async((function(i) {
                                                            for (;;) switch (i.prev = i.next) {
                                                                case 0:
                                                                    if (o = 1e13, n = Math.floor(Math.random() * o), a.current) {
                                                                        i.next = 3;
                                                                        break
                                                                    }
                                                                    return i.abrupt("return");
                                                                case 3:
                                                                    return i.prev = 3, i.next = 6, Re.a.awrap(Object(nt.b)(n).then((function(n) {
                                                                        s(!0);
                                                                        var r = (new Date).getTime() - c > 6e4;
                                                                        if ("pending" !== n && u.current && (clearTimeout(u.current), s(!1), t({
                                                                                type: "setConfigValue",
                                                                                payload: {
                                                                                    key: "isUserAuthenticated",
                                                                                    value: !0
                                                                                }
                                                                            })), "pending" !== n || r || (u.current = window.setTimeout(e, 1e3)), r && u.current) throw clearTimeout(u.current), s(!1), new Error
                                                                    })));
                                                                case 6:
                                                                    i.next = 12;
                                                                    break;
                                                                case 8:
                                                                    i.prev = 8, i.t0 = i.catch(3), s(!1), r({
                                                                        type: "setProcessError",
                                                                        payload: {
                                                                            type: "MNP_UNABLE_TO_PROCESS"
                                                                        }
                                                                    });
                                                                case 12:
                                                                case "end":
                                                                    return i.stop()
                                                            }
                                                            var o
                                                        }), null, null, [
                                                            [3, 8]
                                                        ], Promise)
                                                    }(), i.next = 14;
                                                break;
                                            case 10:
                                                i.prev = 10, i.t0 = i.catch(2), s(!1), r({
                                                    type: "setProcessError",
                                                    payload: {
                                                        type: "MNP_UNABLE_TO_PROCESS"
                                                    }
                                                });
                                            case 14:
                                            case "end":
                                                return i.stop()
                                        }
                                    }), null, null, [
                                        [2, 10]
                                    ], Promise)
                                }), [t, n.pesel, r, a]),
                                onBackEvent: E.a.useCallback((function() {
                                    u.current && clearTimeout(u.current), t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "authorizationData",
                                            value: {
                                                currentStep: "COMMON_FORM",
                                                type: null,
                                                pesel: null
                                            }
                                        }
                                    })
                                }), [t]),
                                isPending: o,
                                pesel: n.pesel
                            }
                        }(),
                        r = n.onSuccessEvent,
                        a = n.onBackEvent,
                        c = n.isPending,
                        i = n.pesel;
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            padding: "0 20px",
                            width: "100%"
                        }, Object(y.a)(e, t.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, t.ONLY_TABLET, {
                            marginBottom: 30
                        }), e), "")
                    }, !c && Object(I.b)(E.a.Fragment, null, Object(I.b)("p", {
                        css: Dt
                    }, "Wpisz adres"), Object(I.b)("p", {
                        css: Bt
                    }, "Tw\xf3j numer PESEL", " ", Object(I.b)("strong", null, i && function(e) {
                        var t = e.substring(0, 2),
                            n = e.substring(9);
                        return "".concat(t, "*******").concat(n)
                    }(i), " ", Object(I.b)(S.AButton, {
                        variant: "ON_LIGHT_BACKGROUND",
                        onClick: a,
                        css: Ft
                    }, "zmie\u0144")))), Object(I.b)(Xe, {
                        onSuccess: r,
                        onBack: a,
                        isPending: c,
                        isLocalRequired: !1
                    }))
                }));
            Vt.displayName = "PeselVerification";
            E.a.createElement;
            var Ut = function() {
                    var e = dt().authorizationData;
                    return Object(I.b)(E.a.Fragment, null, "EMAIL" === e.type && Object(I.b)(Ct, null), "PHONE_NUMBER" === e.type && Object(I.b)(Lt, null), "PESEL" === e.type && Object(I.b)(Vt, null))
                },
                Ht = (E.a.createElement, E.a.memo((function() {
                    var e = Object(T.b)().dispatch,
                        t = dt(),
                        n = t.authorizationData,
                        r = t.isUserAuthenticated;
                    return E.a.useEffect((function() {
                        r && e({
                            type: "setAutorizationData",
                            payload: {
                                phoneNumber: n.phoneNumber || "",
                                isUserAuthenticated: r
                            }
                        })
                    }), [e, r, n.phoneNumber]), "COMMON_FORM" === n.currentStep ? Object(I.b)(ht, null) : "VERIFICATION" === n.currentStep ? Object(I.b)(Ut, null) : null
                })));
            Ht.displayName = "Main";
            E.a.createElement;
            var Gt = {
                    title: "Logowanie",
                    subtitle: "Zaloguj si\u0119, \u017ceby zobaczy\u0107 jakie oferty dla Ciebie przygotowali\u015bmy",
                    description: ""
                },
                Wt = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                Kt = {
                    name: "8kn4zf",
                    styles: "margin-top:0;"
                },
                qt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Yt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Xt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Jt = E.a.memo((function() {
                    var e, t, n, r = Object(S.useTheme)(),
                        a = r.colors,
                        c = r.bp,
                        i = Object(k.a)(),
                        o = dt().authorizationData,
                        s = Object(T.b)(),
                        u = s.currentProcess,
                        l = s.currentOffer,
                        d = Gt;
                    return u && u.authorizationInfo && (d = "COMMON_FORM" === o.currentStep ? u.authorizationInfo.start : u.authorizationInfo.token), d ? i ? Object(I.b)("div", null, l && Object(I.b)("strong", {
                        css: Object(j.a)({
                            color: a.ORANGE_DARK,
                            display: "inline-block",
                            padding: "0 20px",
                            marginBottom: 10
                        }, "")
                    }, l.name), Object(I.b)("section", {
                        role: "region",
                        css: Wt
                    }, Object(I.b)("h2", {
                        css: Kt
                    }, d.title), Object(I.b)("p", {
                        css: qt
                    }, d.subtitle), Object(I.b)("p", {
                        css: Yt
                    }, d.description))) : Object(I.b)("section", {
                        role: "region",
                        css: Object(j.a)((e = {
                            padding: 20,
                            width: 400
                        }, Object(y.a)(e, c.FROM_TABLET, {
                            padding: 0
                        }), Object(y.a)(e, c.ONLY_TABLET, {
                            maxWidth: 400,
                            marginTop: 10
                        }), e), "")
                    }, Object(I.b)("h2", {
                        css: Object(j.a)((t = {
                            marginTop: 20
                        }, Object(y.a)(t, c.FROM_TABLET, {
                            marginTop: 0
                        }), Object(y.a)(t, c.FROM_DESKTOP, {
                            fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                            lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                        }), Object(y.a)(t, "@media (min-width: 1240px)", {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), t), "")
                    }, d.title), Object(I.b)("p", {
                        css: Object(j.a)((n = {
                            fontSize: 14
                        }, Object(y.a)(n, c.FROM_TABLET, {
                            fontSize: 16
                        }), Object(y.a)(n, c.FROM_DESKTOP, {
                            fontSize: 18
                        }), n), "")
                    }, d.subtitle), Object(I.b)("p", {
                        css: Xt
                    }, d.description)) : null
                })),
                Zt = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children;
                    return Object(I.b)(lt, null, t)
                }))),
                Qt = n("XTXV");

            function $t(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function en(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $t(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $t(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var tn = n("KcfE");
            E.a.createElement;
            var nn = {
                    name: "hebtfk",
                    styles: "display:flex;margin:10px 0;padding:0 1px;width:100%;"
                },
                rn = {
                    name: "epvm6",
                    styles: "white-space:nowrap;"
                },
                an = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        r = e.currentOffer,
                        a = function(e) {
                            return e ? e.loyaltyLength : null
                        },
                        c = Object(T.b)().internalID,
                        i = E.a.useMemo((function() {
                            return Array.from(new Set(t.map(a)))
                        }), [t]),
                        o = E.a.useCallback((function(e) {
                            n("length", a, e)
                        }), [n]);
                    E.a.useEffect((function() {
                        o(a(r || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [r, t, o]);
                    var s = E.a.useCallback((function(e) {
                        o(parseInt(e.target.value, 10))
                    }), [o]);
                    return Object(I.b)("div", null, Object(I.b)("h5", null, Object(I.b)("strong", null, "Umowa")), Object(I.b)("div", {
                        css: nn
                    }, i.map((function(e, t) {
                        return Object(I.b)(S.Toggle, {
                            checked: !!r && r.loyaltyLength === e,
                            key: t,
                            value: null !== e && void 0 !== e ? e : void 0,
                            onChange: s,
                            name: "lengthValue-".concat(c),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, null !== e && Object(I.b)("span", {
                            css: rn
                        }, function(e) {
                            return 0 === e || e >= 9999 ? "Bezterminowa" : "".concat(e, " ").concat(Object(tn.a)(["miesi\u0105c", "miesi\u0105ce", "miesi\u0119cy"], e))
                        }(e)))
                    }))))
                })),
                cn = n("obcW"),
                on = n("IdR4"),
                sn = n("D2/y"),
                un = n("yr6+"),
                ln = function() {
                    var e = Object(T.b)(),
                        t = e.currentSingleOffer,
                        n = e.shouldUseDiscounts,
                        r = e.singleOffers,
                        a = E.a.useState(n),
                        c = Object(C.a)(a, 2),
                        i = c[0],
                        o = c[1];
                    if (E.a.useEffect((function() {
                            o(!!r.find((function(e) {
                                var t = Object(un.f)(e),
                                    n = Object(un.a)(e);
                                return !((null === t || void 0 === t ? void 0 : t.productCharacteristic.showDiscountSwitch) || (null === n || void 0 === n ? void 0 : n.productCharacteristic.showDiscountSwitch)) && ((null === t || void 0 === t ? void 0 : t.productCharacteristic.hasDiscount) || (null === n || void 0 === n ? void 0 : n.productCharacteristic.hasDiscount))
                            })) || n)
                        }), [n, r]), !t) return {
                        showDiscountSwitch: !0,
                        hasDiscount: !1,
                        hasAnyOfferDiscount: !1,
                        isSelectedOfferWithDiscount: !1
                    };
                    var s = Ce(t.offerType),
                        u = Object(un.f)(t),
                        l = Object(un.a)(t),
                        d = s && ((null === u || void 0 === u ? void 0 : u.productCharacteristic.showDiscountSwitch) || (null === l || void 0 === l ? void 0 : l.productCharacteristic.showDiscountSwitch) || !1),
                        p = s && ((null === u || void 0 === u ? void 0 : u.productCharacteristic.hasDiscount) || (null === l || void 0 === l ? void 0 : l.productCharacteristic.hasDiscount) || !1);
                    return {
                        showDiscountSwitch: d,
                        hasDiscount: p,
                        hasAnyOfferDiscount: i,
                        isSelectedOfferWithDiscount: !d && p || n && d
                    }
                },
                dn = (g.createElement, g.memo((function(e) {
                    return Object(I.b)("svg", Object(R.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 450 450",
                        fill: "currentColor",
                        width: "1em",
                        height: "1em"
                    }, e), Object(I.b)("path", {
                        d: "M448.941 168.353H287.603L224.471 0l-63.132 168.353H0l121.478 106.293-65.36 174.295 168.353-84.176 168.353 84.176-65.361-174.296z"
                    }))
                })));
            dn.displayName = "StarIcon";
            var pn = {
                    star: dn
                },
                fn = (E.a.createElement, function(e) {
                    var t = e.distinction,
                        n = e.children,
                        r = e.wrapperCss,
                        a = Object(L.a)(e, ["distinction", "children", "wrapperCss"]),
                        c = a.checked,
                        i = Object(S.useTheme)(),
                        o = i.colors,
                        s = i.zIndex;
                    return Object(I.b)("div", {
                        css: Object(j.a)([{
                            position: "relative"
                        }, r], "")
                    }, t && Object(I.b)(bn, Object(R.a)({}, t, {
                        isChecked: c
                    })), Object(I.b)(S.Toggle, Object(R.a)({}, a, {
                        contentCss: {
                            backgroundColor: o.WHITE,
                            zIndex: s.LAYER_2
                        }
                    }), n))
                }),
                bn = function(e) {
                    var t = e.iconType,
                        n = e.textColor,
                        r = e.isChecked,
                        a = e.backgroundColor,
                        c = e.backgroundHoverColor,
                        i = e.textHoverColor,
                        o = Object(S.useTheme)(),
                        s = o.colors,
                        u = o.zIndex,
                        l = o.bp,
                        d = t in pn ? pn[t] : pn.star;
                    return Object(I.b)("div", {
                        style: {
                            backgroundColor: r ? s[c] : s[a]
                        },
                        css: Object(j.a)(Object(y.a)({
                            width: 24,
                            height: 28,
                            top: -24,
                            right: 0,
                            padding: 5,
                            zIndex: u.LAYER_1,
                            borderRadius: 4,
                            display: "flex",
                            justifyContent: "center",
                            position: "absolute",
                            transition: "background-color .15s",
                            svg: {
                                margin: 0,
                                padding: 0,
                                transition: "color .15s"
                            }
                        }, l.FROM_TABLET, {
                            right: 1
                        }), "")
                    }, d && Object(I.b)(d, {
                        color: r ? s[i] : s[n]
                    }))
                },
                On = function(e) {
                    return function(t) {
                        return t && (Object(un.d)(t).features.config[0].value.distinctedVariants || []).find((function(t) {
                            return t.type === e
                        })) || null
                    }
                },
                hn = function(e) {
                    var t = e.length < 1,
                        n = 1 === e.length,
                        r = e.length > 2,
                        a = n ? 1 : Math.floor(e.length / 2),
                        c = e.findIndex((function(e) {
                            return Boolean(e.distinction)
                        }));
                    return !(t || n || c < 0) && (r ? c < 1 ? a - c > 0 : c < 2 ? a - c - 1 >= 0 : a - c - 1 > 0 : c < a)
                };
            E.a.createElement;
            var mn = {
                    name: "h9yv4t",
                    styles: "display:flex;justify-content:space-between;align-items:baseline;"
                },
                vn = {
                    name: "7sn97l",
                    styles: "margin-top:10px;margin-bottom:0;"
                },
                yn = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                jn = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        r = e.currentOffer,
                        a = Object(T.b)(),
                        c = a.isB2B,
                        i = a.internalID,
                        o = a.offerType,
                        s = a.showNetPrices,
                        u = a.shouldUseDiscounts,
                        l = ln().showDiscountSwitch,
                        d = E.a.useCallback((function(e) {
                            if (e) {
                                var t = e.tieredPriceList[0];
                                return s ? t.baseNetPrice : t.basePrice
                            }
                            return null
                        }), [s]),
                        p = E.a.useCallback((function(e) {
                            if (!e) return null;
                            var t = e.tieredPriceList[0];
                            if (l) return u ? s ? t.finalNetPrice : t.finalPrice : null;
                            var n = s ? t.finalNetPrice : t.finalPrice;
                            return n !== (s ? t.baseNetPrice : t.basePrice) ? n : null
                        }), [u, l, s]),
                        f = On("PRICE"),
                        b = E.a.useCallback((function(e) {
                            return {
                                price: d(e),
                                discount: p(e),
                                distinction: f(e)
                            }
                        }), [d, p, f]),
                        O = E.a.useMemo((function() {
                            var e = t.map(b).filter((function(e) {
                                return Boolean(e.price)
                            }));
                            return Object(sn.a)(e, "price")
                        }), [t, b]),
                        h = E.a.useCallback((function(e) {
                            n("price", d, e)
                        }), [n, d]);
                    E.a.useEffect((function() {
                        h(d(r || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [r, t, h, d]);
                    var m = E.a.useCallback((function(e) {
                            h(e.target.value)
                        }), [h]),
                        v = hn(O) || c;
                    return Object(I.b)("div", null, Object(I.b)("div", {
                        css: mn
                    }, Object(I.b)("h5", {
                        css: vn
                    }, Object(I.b)("strong", null, "DATA" === o ? "Internet mobilny: " : "VOICE" === o ? "Abonament kom\xf3rkowy: " : "Abonament: ")), s && Object(I.b)("span", {
                        css: yn
                    }, " Ceny nie zawieraj\u0105 VAT")), Object(I.b)("div", {
                        css: Object(j.a)({
                            display: "flex",
                            margin: "10px 0",
                            padding: "0 1px",
                            width: "100%",
                            marginTop: v ? 30 : void 0
                        }, "")
                    }, O.map((function(e, t) {
                        return Object(I.b)(fn, {
                            distinction: e.distinction,
                            checked: d(r) === e.price || !1,
                            key: "PriceToggle_".concat(e.price, "-").concat(t),
                            value: e.price || void 0,
                            onChange: m,
                            name: "priceValue-".concat(i),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, Object(I.b)("div", null, Object(I.b)(gn, {
                            discount: e.discount
                        }), Object(I.b)("span", {
                            css: Object(j.a)({
                                whiteSpace: "nowrap",
                                textDecoration: e.discount ? "line-through" : void 0
                            }, "")
                        }, Object(on.a)(e.price, {
                            integersWithFractionDigits: !0
                        }), " ", "z\u0142")))
                    }))))
                })),
                gn = E.a.memo((function(e) {
                    var t = e.discount,
                        n = Object(S.useTheme)().colors,
                        r = P(t),
                        a = Boolean(t),
                        c = t || r || 0,
                        i = Object(cn.useTransition)(a, {
                            from: {
                                opacity: 0,
                                height: 0
                            },
                            enter: {
                                opacity: 1,
                                height: 16
                            },
                            leave: {
                                opacity: 0,
                                height: 0
                            },
                            config: {
                                duration: 200
                            }
                        });
                    return Object(I.b)(E.a.Fragment, null, i((function(e, t) {
                        return Object(I.b)(E.a.Fragment, null, t && Object(I.b)(cn.animated.div, {
                            style: e,
                            css: Object(j.a)({
                                color: n.ORANGE_DARK
                            }, "")
                        }, Object(on.a)(c, {
                            integersWithFractionDigits: !0
                        }), " ", "z\u0142"))
                    })))
                }));
            E.a.createElement;
            var En = {
                    name: "epvm6",
                    styles: "white-space:nowrap;"
                },
                Sn = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        r = e.currentOffer,
                        a = Object(T.b)().internalID,
                        c = On("INTERNET_SPEED"),
                        i = E.a.useCallback((function(e) {
                            if (e) {
                                var t = Object(un.c)(e),
                                    n = Object(un.b)(e);
                                return (null === t || void 0 === t ? void 0 : t.features.config[0].value.downloadSpeed) || (null === t || void 0 === t ? void 0 : t.productCharacteristic.bitrate) || (null === n || void 0 === n ? void 0 : n.productCharacteristic.downloadSpeed) || null
                            }
                            return null
                        }), []),
                        o = E.a.useCallback((function(e) {
                            return e ? {
                                value: i(e),
                                distinction: c(e)
                            } : {
                                value: null,
                                distinction: null
                            }
                        }), [i, c]),
                        s = E.a.useMemo((function() {
                            return Object(sn.a)(t.map(o).filter((function(e) {
                                return !!e
                            })), "value")
                        }), [o, t]),
                        u = E.a.useCallback((function(e) {
                            n("internetSpeed", i, e)
                        }), [i, n]);
                    E.a.useEffect((function() {
                        u(i(r || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [t, r, u, i]);
                    var l = E.a.useCallback((function(e) {
                            u(e.target.value)
                        }), [u]),
                        d = hn(s);
                    return Object(I.b)("div", null, Object(I.b)("h5", null, Object(I.b)("strong", null, "Internet domowy")), Object(I.b)("div", {
                        css: Object(j.a)({
                            display: "flex",
                            margin: "10px 0",
                            padding: "0 1px",
                            width: "100%",
                            marginTop: d ? 30 : void 0
                        }, "")
                    }, s.map((function(e, t) {
                        return Object(I.b)(fn, {
                            distinction: e.distinction,
                            checked: i(r) === e.value || !1,
                            key: e.value || t,
                            value: e.value || void 0,
                            onChange: l,
                            name: "internetSpeedValue-".concat(a),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, Object(I.b)("div", null, Object(I.b)("span", {
                            css: En
                        }, e.value && ("string" === typeof(n = e.value) ? n : n / 1024 < 1024 ? "".concat(n / 1024, " Mb/s") : "".concat(n / 1024 / 1024, " Gb/s")))));
                        var n
                    }))))
                }));
            E.a.createElement;
            var Tn = {
                    name: "kr6vjg",
                    styles: "font-weight:normal;text-align:center;"
                },
                Cn = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        r = e.currentOffer,
                        a = Object(T.b)(),
                        c = a.internalID,
                        i = a.isB2B,
                        o = Object(S.useTheme)().bp,
                        s = On("PACKET"),
                        u = E.a.useCallback((function(e) {
                            if (e) {
                                var t = e.tieredPriceList[0].basePrice;
                                return {
                                    Name: Object(un.d)(e).features.config[0].value.Name || "",
                                    price: t,
                                    distinction: s(e)
                                }
                            }
                            return null
                        }), [s]),
                        l = E.a.useCallback((function(e) {
                            var t = u(e);
                            return t ? t.Name : null
                        }), [u]),
                        d = E.a.useMemo((function() {
                            return Object(sn.a)(t.map(u).filter((function(e) {
                                return !!e
                            })), "Name")
                        }), [u, t]),
                        p = E.a.useCallback((function(e) {
                            n("packet", l, e)
                        }), [l, n]);
                    E.a.useEffect((function() {
                        p(l(r || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [t, r, p, l]);
                    var f = E.a.useCallback((function(e) {
                            p(e.target.value)
                        }), [p]),
                        b = hn(d);
                    return Object(I.b)("div", null, Object(I.b)("h5", null, Object(I.b)("strong", null, "Pakiety Orange Love")), Object(I.b)("div", {
                        css: Object(j.a)({
                            display: "flex",
                            margin: "10px 0",
                            padding: "0 1px",
                            width: "100%",
                            marginTop: b ? 30 : void 0
                        }, "")
                    }, d.map((function(e, t) {
                        return Object(I.b)(fn, {
                            distinction: e.distinction,
                            checked: l(r) === e.Name || !1,
                            key: e.Name || t,
                            value: e.Name || void 0,
                            onChange: f,
                            name: "packet-".concat(c),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, Object(I.b)("div", {
                            css: Object(j.a)({
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                p: Object(y.a)({
                                    fontSize: 12,
                                    lineHeight: "14px",
                                    margin: 0
                                }, o.FROM_TABLET, {
                                    fontSize: 14,
                                    lineHeight: "16px"
                                })
                            }, "")
                        }, Object(I.b)("p", null, e.Name), !i && Object(I.b)("p", {
                            css: Tn
                        }, e.price, " z\u0142")))
                    }))))
                })),
                wn = function(e) {
                    return e.offerType
                };
            E.a.createElement;
            var xn = {
                    FIX1P: "Internet",
                    FIX3P: "Internet z TV"
                },
                kn = {
                    name: "hebtfk",
                    styles: "display:flex;margin:10px 0;padding:0 1px;width:100%;"
                },
                Pn = {
                    name: "epvm6",
                    styles: "white-space:nowrap;"
                },
                zn = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        r = e.currentOffer,
                        a = Object(T.b)().internalID,
                        c = E.a.useMemo((function() {
                            return Array.from(new Set(t.map(wn)))
                        }), [t]),
                        i = E.a.useCallback((function(e) {
                            n("offerType", wn, e)
                        }), [n]);
                    E.a.useEffect((function() {
                        r && i(wn(r || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [r, t, i]);
                    var o = E.a.useCallback((function(e) {
                        i(e.target.value)
                    }), [i]);
                    return r ? Object(I.b)("div", null, Object(I.b)("h5", null, Object(I.b)("strong", null, "Oferta")), Object(I.b)("div", {
                        css: kn
                    }, c.map((function(e, t) {
                        return Object(I.b)(S.Toggle, {
                            checked: r.offerType === e,
                            key: t,
                            value: e,
                            onChange: o,
                            name: "offerType-".concat(a),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, e && Object(I.b)("span", {
                            css: Pn
                        }, xn[e]))
                    })))) : null
                }));
            E.a.createElement;
            var Nn = {
                    MOBILE: {
                        elements: [{
                            Component: an,
                            type: "filter"
                        }, {
                            Component: jn,
                            type: "variant"
                        }]
                    },
                    CONVERGENT: {
                        elements: [{
                            Component: an,
                            type: "filter"
                        }, {
                            Component: Sn,
                            type: "filter"
                        }, {
                            Component: Cn,
                            type: "variant"
                        }]
                    },
                    FIX: {
                        elements: [{
                            Component: zn,
                            type: "filter"
                        }, {
                            Component: an,
                            type: "filter"
                        }, {
                            Component: Sn,
                            type: "variant"
                        }]
                    }
                },
                Rn = {
                    name: "squb4n",
                    styles: "margin-botom:20px;:last-of-type{margin-bottom:10px;}"
                },
                In = E.a.memo((function() {
                    var e = Object(T.b)(),
                        t = e.singleOffers,
                        n = e.currentSingleOffer,
                        r = e.dispatch,
                        a = e.offerType,
                        c = function(e, t) {
                            var n = E.a.useState({}),
                                r = Object(C.a)(n, 2),
                                a = r[0],
                                c = r[1],
                                i = E.a.useState({}),
                                o = Object(C.a)(i, 2),
                                s = o[0],
                                u = o[1],
                                l = E.a.useCallback((function(e, t, n) {
                                    c((function(r) {
                                        return en({}, r, Object(y.a)({}, e, {
                                            getter: t,
                                            value: n
                                        }))
                                    }))
                                }), []),
                                d = E.a.useCallback((function(e, t, n) {
                                    u((function(r) {
                                        return en({}, r, Object(y.a)({}, e, {
                                            getter: t,
                                            value: n
                                        }))
                                    }))
                                }), []),
                                p = E.a.useMemo((function() {
                                    return Object.values(a).reduce((function(e, t) {
                                        return e.filter((function(e) {
                                            return t.getter(e) === t.value
                                        }))
                                    }), e)
                                }), [e, a]),
                                f = E.a.useMemo((function() {
                                    return 0 === Object.values(s).length ? t || p.find((function(e) {
                                        return e.isDefault
                                    })) || p[0] || null : Object.values(s).reduce((function(e, t) {
                                        return e.filter((function(e) {
                                            return String(t.getter(e)) === String(t.value)
                                        }))
                                    }), p)[0] || p[0]
                                }), [p, t, s]);
                            return {
                                setFilter: l,
                                filters: a,
                                offers: p,
                                currentOffer: f,
                                variants: s,
                                setVariant: d
                            }
                        }(t, n);
                    E.a.useEffect((function() {
                        !c.currentOffer || !c.currentOffer.propositionId || n && n.propositionId === c.currentOffer.propositionId || r({
                            type: "setCurrentSingleOffer",
                            payload: c.currentOffer
                        })
                    }), [c.currentOffer, r]);
                    var i = function(e) {
                            return Object.entries({
                                MOBILE: ["DATA", "DATA_LDF", "VOICE"],
                                CONVERGENT: ["CONVERGENT4U"],
                                FIX: ["FIX1P", "FIX3P"]
                            }).map((function(t) {
                                var n = Object(C.a)(t, 2),
                                    r = n[0],
                                    a = n[1];
                                return (null === a || void 0 === a ? void 0 : a.includes(e)) ? r : void 0
                            })).find(Boolean) || "MOBILE"
                        }(a),
                        o = Nn[i];
                    return o ? Object(I.b)(E.a.Fragment, null, o.elements.map((function(e, r) {
                        var a = e.Component,
                            i = e.type;
                        return Object(I.b)("div", {
                            key: r,
                            css: Rn
                        }, Object(I.b)(a, {
                            offers: "filter" === i ? t : c.offers,
                            setValue: "filter" === i ? c.setFilter : c.setVariant,
                            currentOffer: n
                        }))
                    }))) : null
                })),
                An = n("GpBo"),
                _n = n("48NU");
            E.a.createElement;
            var Ln = {
                    name: "o5uqvq",
                    styles: "margin-left:5px;"
                },
                Mn = E.a.memo((function() {
                    var e = Object(S.useTheme)().colors,
                        t = Object(T.b)(),
                        n = t.dispatch,
                        r = t.isB2B,
                        a = t.shouldUseDiscounts,
                        c = ln().showDiscountSwitch,
                        i = E.a.useCallback((function(e) {
                            n({
                                type: "setShouldUseDiscounts",
                                payload: e.target.checked
                            })
                        }), [n]);
                    return c ? Object(I.b)("div", {
                        css: Object(j.a)({
                            backgroundColor: e.STARDUST,
                            marginBottom: 20,
                            height: 45,
                            padding: "0 10px",
                            width: "100%",
                            fontSize: 12,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderRadius: 6
                        }, "")
                    }, r && Object(I.b)("div", null, Object(I.b)("strong", null, "Poka\u017c rabaty ", Object(I.b)(S.Break, {
                        mobile: !0,
                        tablet: !1,
                        desktop: !1
                    }), "na kolejne karty SIM"), Object(I.b)(_n.a, {
                        content: "Zaznacz je\u017celi posiadasz ju\u017c przynajmniej jedn\u0105 us\u0142ug\u0119 mobiln\u0105 w Orange i pragniesz kupi\u0107 lub przed\u0142u\u017cy\u0107 umow\u0119 dla kolejnej us\u0142ugi"
                    }, Object(I.b)("span", {
                        css: Ln
                    }, Object(I.b)(An.a, {
                        css: Object(j.a)({
                            width: 16,
                            height: 16,
                            verticalAlign: -3
                        }, "")
                    })))), !r && Object(I.b)("div", null, Object(I.b)("strong", null, "Poka\u017c rabaty ", Object(I.b)(S.Break, {
                        mobile: !0,
                        tablet: !1,
                        desktop: !1
                    }), "na kolejne karty SIM (20 z\u0142/mies.)")), Object(I.b)(S.Switch, {
                        title: a ? "Ukryj zni\u017cki" : "Poka\u017c zni\u017cki",
                        name: "client_discounts",
                        onChange: i,
                        defaultChecked: a
                    })) : null
                }));
            E.a.createElement;
            var Dn = {
                    name: "1xzc8zn",
                    styles: "margin-bottom:20px;display:flex;align-items:flex-end;"
                },
                Bn = {
                    name: "1gtey1t",
                    styles: "font-size:14px;margin:0;"
                },
                Fn = {
                    name: "m75dnw",
                    styles: "margin-left:6px;"
                },
                Vn = E.a.memo((function() {
                    var e = Object(T.b)(),
                        t = e.currentSingleOffer,
                        n = e.doesPhoneLineExist,
                        r = e.dispatch;
                    E.a.useEffect((function() {
                        r({
                            type: "setDoesPhoneLineExist",
                            payload: !!n
                        })
                    }), [r, n]);
                    var a = E.a.useCallback((function(e) {
                        r({
                            type: "setDoesPhoneLineExist",
                            payload: e.target.checked
                        })
                    }), [r]);
                    if (!t) return null;
                    var c = Object(un.b)(t);
                    return (null === c || void 0 === c ? void 0 : c.productCharacteristic.isLineMaintenance) ? Object(I.b)("div", {
                        css: Dn
                    }, Object(I.b)(S.Checkbox, {
                        name: "phone-line",
                        defaultChecked: !!n,
                        onChange: a
                    }, "Posiadam lini\u0119 telefoniczn\u0105. ", Object(I.b)("br", null), " Zap\u0142acisz mniej o", Object(I.b)("strong", null, " 10,00 z\u0142/mies.")), Object(I.b)(_n.a, {
                        content: Object(I.b)("p", {
                            css: Bn
                        }, "Je\u015bli pod wskazanym adresem masz telefon domowy od Orange, obni\u017cymy Tw\xf3j abonament za Orange Love o 10 z\u0142/mies.")
                    }, Object(I.b)("span", {
                        css: Fn
                    }, Object(I.b)(An.a, {
                        css: Object(j.a)({
                            width: 16,
                            height: 16,
                            verticalAlign: -3
                        }, "")
                    })))) : null
                })),
                Un = n("fGyu");
            E.a.createElement, E.a.createElement;
            var Hn = {
                name: "1cev0y9",
                styles: "margin:0;font-size:14px;"
            };
            E.a.createElement;
            var Gn = {
                    name: "o5uqvq",
                    styles: "margin-left:5px;"
                },
                Wn = {
                    name: "1h2nb6m",
                    styles: "font-size:12px;font-weight:normal;margin-top:3px;"
                },
                Kn = function(e) {
                    var t = e.legalText,
                        n = e.name,
                        r = e.description,
                        a = e.isDistinct,
                        c = e.shortDescription,
                        i = e.value,
                        o = Object(S.useTheme)().colors,
                        s = Object(T.b)(),
                        u = s.offerType,
                        l = s.currentSingleOffer,
                        d = Ce(u);
                    return E.a.useMemo((function() {
                        return !!l && "Mini" === Object(un.d)(l).features.config[0].value.Name
                    }), [l]) && ("Telefon domowy" === n || "Telefon domowy" === i) ? null : Object(I.b)("li", {
                        css: Object(j.a)({
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: 15,
                            "&:not(:last-of-type)": {
                                borderBottom: "1px solid ".concat(o.CHROME),
                                padding: "15px 0"
                            },
                            "&:first-of-type": {
                                paddingTop: 0
                            }
                        }, "")
                    }, Object(I.b)("span", {
                        css: Object(j.a)({
                            fontSize: 12,
                            marginBottom: d ? 0 : 5,
                            fontWeight: d ? "normal" : "bold"
                        }, "")
                    }, n), Object(I.b)("div", null, Object(I.b)("strong", {
                        css: Object(j.a)({
                            color: a ? o.ORANGE_DARK : ""
                        }, "")
                    }, i), r && Object(I.b)(_n.a, {
                        content: r
                    }, Object(I.b)("span", {
                        css: Gn
                    }, Object(I.b)(An.a, {
                        css: Object(j.a)({
                            width: 16,
                            height: 16,
                            verticalAlign: -2
                        }, "")
                    })))), c && Object(I.b)("span", {
                        css: Wn
                    }, c), t && Object(I.b)("span", {
                        css: Object(j.a)({
                            fontSize: 12,
                            fontWeight: "normal",
                            marginTop: 3,
                            color: o.DOVE
                        }, "")
                    }, t))
                },
                qn = (E.a.createElement, n("/G5g")),
                Yn = (E.a.createElement, function(e) {
                    var t = e.action,
                        n = e.children,
                        r = Object(L.a)(e, ["action", "children"]),
                        a = Object(T.b)().dispatch,
                        c = {
                            OPEN_SUFLER_SUMMARY: function(e) {
                                a({
                                    type: "setSummaryData",
                                    payload: e.content
                                }), a({
                                    type: "showOfferDetails",
                                    payload: !0
                                })
                            }
                        };
                    return Object(I.b)(E.a.Fragment, null, !t && Object(I.b)("div", r, n), t && Object(I.b)(qn.a, Object(R.a)({}, r, {
                        action: t,
                        actionsMap: c
                    }), n))
                }),
                Xn = (E.a.createElement, {
                    BLACK: {
                        textColor: "WHITE",
                        backgroundColor: "BLACK",
                        distinctColor: "ORANGE_DARK"
                    }
                }),
                Jn = E.a.memo((function(e) {
                    var t = e.variant,
                        n = e.type,
                        r = e.header,
                        a = e.content,
                        c = e.action,
                        i = Object(S.useTheme)().colors,
                        o = Xn[t] || "BLACK",
                        s = i[o.textColor],
                        u = i[o.backgroundColor],
                        l = i[o.distinctColor],
                        d = {
                            width: 14,
                            height: 14,
                            verticalAlign: -3,
                            marginLeft: 6,
                            color: s
                        };
                    return Object(I.b)(Yn, {
                        action: c,
                        css: Object(j.a)({
                            padding: "10px 15px",
                            marginTop: 20,
                            backgroundColor: u,
                            borderRadius: 6,
                            strong: {
                                color: l
                            }
                        }, "")
                    }, Object(I.b)("h4", {
                        css: Object(j.a)({
                            fontSize: 14,
                            marginBottom: 2,
                            color: s
                        }, "")
                    }, Object(I.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: r.text
                        }
                    }), r.tooltip && Object(I.b)(_n.a, {
                        content: r.tooltip
                    }, Object(I.b)("span", null, Object(I.b)(An.a, {
                        css: d
                    })))), Object(I.b)("ul", {
                        css: Object(j.a)(["LIST" === n && {
                            listStyle: "disc",
                            marginLeft: 15
                        }], "")
                    }, a.map((function(e, t) {
                        var n = e.text,
                            r = e.tooltip;
                        return Object(I.b)("li", {
                            key: t,
                            css: Object(j.a)({
                                padding: "2px 0",
                                fontSize: 12,
                                color: l
                            }, "")
                        }, Object(I.b)("span", {
                            css: Object(j.a)({
                                color: s
                            }, ""),
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        }), r && Object(I.b)(_n.a, {
                            content: r
                        }, Object(I.b)("span", null, Object(I.b)(An.a, {
                            css: d
                        }))))
                    }))))
                })),
                Zn = {
                    HTML: function(e) {
                        var t = e.value,
                            n = Object(L.a)(e, ["value"]);
                        return Object(I.b)("div", Object(R.a)({
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        }, n))
                    },
                    PRICE_DESCRIPTION: function(e) {
                        var t = e.priceDescription,
                            n = e.process;
                        return Object(T.b)().processType !== n ? null : Object(I.b)("p", {
                            css: Hn,
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })
                    },
                    FEATURE_LIST: function(e) {
                        var t = e.value;
                        return Object(I.b)(E.a.Fragment, null, t.map((function(e, t) {
                            return Object(I.b)(Kn, Object(R.a)({}, e, {
                                key: t
                            }))
                        })))
                    },
                    FEATURE: Kn,
                    BANNER: Jn
                },
                Qn = n("OS0P");
            E.a.createElement;
            var $n = {
                    name: "17kn5dq",
                    styles: "margin-top:20px;width:100%;"
                },
                er = E.a.memo((function() {
                    var e = Object(T.b)().currentSingleOffer,
                        t = E.a.useMemo((function() {
                            if (!e) return [];
                            var t = Object(un.d)(e).features.boxFeatures || [],
                                n = Object(Un.a)(t),
                                r = Object(Qn.a)(Object(Qn.b)(e));
                            return Boolean(r.find((function(e) {
                                return "sfh" === e.id
                            }))) && n.unshift({
                                type: "FEATURE",
                                value: {
                                    name: "dop\u0142ata za internet w budynku jednorodzinnym",
                                    value: "+ 14,99 z\u0142/mies.",
                                    isDistinct: !1,
                                    description: null,
                                    legalText: null,
                                    shortDescription: null
                                }
                            }), n
                        }), [e]);
                    return Object(I.b)("ul", {
                        css: $n
                    }, t.map((function(e, t) {
                        var n = Zn[e.type];
                        return n && Object(I.b)(n, Object(R.a)({}, e.value, {
                            key: t
                        }))
                    })))
                })),
                tr = n("6Ks6");
            E.a.createElement;
            var nr = {
                    name: "1al9uig",
                    styles: "width:16px;height:16px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);"
                },
                rr = E.a.memo((function(e) {
                    var t = e.children,
                        n = e.onClick,
                        r = Object(S.useTheme)(),
                        a = r.colors,
                        c = r.bp;
                    return Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            borderTop: "1px solid ".concat(a.CHROME),
                            paddingTop: 15,
                            marginTop: 15,
                            alignItems: "center"
                        }, c.FROM_TABLET, {
                            flexDirection: "column",
                            alignSelf: "flex-end",
                            border: "none",
                            padding: 0,
                            margin: 0
                        }), "")
                    }, Object(I.b)("button", {
                        type: "button",
                        css: Object(j.a)({
                            background: "none",
                            position: "relative",
                            border: "1px solid ".concat(a.CHROME),
                            borderRadius: "50%",
                            cursor: "pointer",
                            width: 40,
                            height: 40
                        }, ""),
                        onClick: n
                    }, Object(I.b)(tr.a, {
                        css: nr
                    })), Object(I.b)(S.AButton, {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            fontWeight: "bold",
                            marginLeft: 15
                        }, c.FROM_TABLET, {
                            marginLeft: 0,
                            marginTop: 15
                        }), ""),
                        onClick: n
                    }, t))
                }));
            E.a.createElement;
            var ar = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                cr = E.a.memo((function(e) {
                    var t = e.children,
                        n = e.buttonText,
                        r = void 0 === n ? "Dodaj" : n,
                        a = e.linkText,
                        c = e.onClick,
                        i = Object(S.useTheme)(),
                        o = i.bp,
                        s = i.colors;
                    return Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            fontWeight: "bold",
                            display: "flex",
                            flexDirection: "column",
                            padding: "15px 20px",
                            marginTop: 20,
                            borderRadius: 4,
                            border: "1px dashed ".concat(s.CHROME)
                        }, o.FROM_TABLET, {
                            flexDirection: "row"
                        }), "")
                    }, Object(I.b)("div", {
                        css: Object(j.a)({
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            strong: {
                                color: s.ORANGE_DARK
                            }
                        }, "")
                    }, t, Object(I.b)(S.AButton, {
                        css: ar,
                        onClick: c
                    }, a)), Object(I.b)(rr, {
                        onClick: c
                    }, r))
                }));
            cr.displayName = "Extras";
            E.a.createElement;
            var ir = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                or = {
                    name: "p8la30",
                    styles: "margin:0;font-size:18px;padding:5px 0 15px 0;"
                },
                sr = E.a.memo((function() {
                    var e = Object(T.b)(),
                        t = e.dispatch,
                        n = e.currentSingleOffer,
                        r = e.selectedOtherPackages,
                        a = E.a.useCallback((function() {
                            t({
                                type: "setPackageConfiguratorType",
                                payload: "OTHER"
                            }), t({
                                type: "showTVConfigurator",
                                payload: !0
                            })
                        }), [t]),
                        c = E.a.useMemo((function() {
                            if (!n) return [];
                            var e = Object(Qn.a)(Object(Qn.b)(n)).filter((function(e) {
                                return !["sfh", "activation"].includes(e.id)
                            }));
                            return e.length > 0 ? e : []
                        }), [n]),
                        i = r ? r.filter((function(e) {
                            return !["sfh", "activation"].includes(e.id)
                        })) : c.filter((function(e) {
                            return e.defaultSelected
                        })),
                        o = E.a.useMemo((function() {
                            var e = (i ? Object(Un.a)(i) : c.filter((function(e) {
                                return e.defaultSelected
                            }))).map((function(e) {
                                return e.name
                            })).join(", ");
                            return e.length > 45 && (e = e.slice(0, 45).concat("...")), e
                        }), [i, c]),
                        s = i ? i.length : c.filter((function(e) {
                            return e.defaultSelected
                        })).length;
                    return c.length < 1 ? null : Object(I.b)(cr, {
                        linkText: "Lista us\u0142ug i urz\u0105dze\u0144",
                        onClick: a
                    }, Object(I.b)("h4", {
                        css: ir
                    }, "Us\u0142ugi i urz\u0105dzenia ", Object(I.b)("strong", null, s), " z", " ", c.length), Object(I.b)("p", {
                        css: or
                    }, o && o))
                }));
            E.a.createElement;
            var ur = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                lr = {
                    name: "p8la30",
                    styles: "margin:0;font-size:18px;padding:5px 0 15px 0;"
                },
                dr = E.a.memo((function() {
                    var e = Object(T.b)(),
                        t = e.dispatch,
                        n = e.currentSingleOffer,
                        r = e.selectedTVPackages,
                        a = E.a.useCallback((function() {
                            t({
                                type: "setPackageConfiguratorType",
                                payload: "CHANNELS"
                            }), t({
                                type: "showTVConfigurator",
                                payload: !0
                            })
                        }), [t]);
                    if (!n) return null;
                    var c = Object(un.e)(n);
                    if (!c) return null;
                    var i = c.productCharacteristic,
                        o = i.channelsHDQuantity,
                        s = i.channelsSDQuantity;
                    return Object(I.b)(cr, {
                        linkText: "Lista pakiet\xf3w TV",
                        onClick: a
                    }, Object(I.b)("h4", {
                        css: ur
                    }, "Pakiety telewizyjne ", Object(I.b)("strong", null, null === r || void 0 === r ? void 0 : r.length)), Object(I.b)("p", {
                        css: lr
                    }, Object(I.b)("strong", null, o + s), " ", Object(tn.a)(["kana\u0142", "kana\u0142y", "kana\u0142\xf3w"], o + s), " ", "(w tym ", Object(I.b)("strong", null, o), " HD)"))
                }));
            dr.displayName = "TVExtras";
            E.a.createElement;
            var pr = E.a.memo((function() {
                    var e = Object(V.c)().configuratorInFIX,
                        t = Object(T.b)(),
                        n = t.currentSingleOffer,
                        r = t.offerType,
                        a = ("FIX1P" === r || "FIX3P" === r) && !e,
                        c = n && "CONVERGENT4U" === r && 9999 === n.loyaltyLength;
                    return !n || c || a ? null : Object(I.b)(E.a.Fragment, null, Object(I.b)(dr, null), Object(I.b)(sr, null))
                })),
                fr = function(e, t) {
                    return e ? Ce(t) && "DATA_LDF" !== t : "VOICE" === t
                },
                br = n("Bit+"),
                Or = n("pu3o"),
                hr = n.n(Or),
                mr = function(e, t) {
                    var n;
                    return null === (n = e.find((function(e) {
                        return e.offerId === t.propositionId
                    }))) || void 0 === n ? void 0 : n.packages
                },
                vr = function(e, t) {
                    return t.some((function(t) {
                        return t.code === e.code
                    }))
                },
                yr = function(e, t) {
                    var n, r;
                    return "VOICE" !== e.offerType ? null : null === (n = Object(un.f)(e)) || void 0 === n ? void 0 : null === (r = n.additionals) || void 0 === r ? void 0 : r.find((function(e) {
                        return e.type === t
                    }))
                },
                jr = function(e) {
                    return e.code
                },
                gr = function(e) {
                    return {
                        code: e.code,
                        groupCode: e.groupCode,
                        type: e.type
                    }
                },
                Er = function(e, t) {
                    return e.additionals.reduce((function(e, n) {
                        return t.some((function(e) {
                            return e.code === n.code
                        })) ? e += n.productCharacteristic.weight : e
                    }), 0)
                };

            function Sr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Tr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Sr(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Cr = function(e) {
                    var t = Object(T.b)().selectedPackages,
                        n = e && yr(e, "ADDITIONAL_PACKAGES_GROUP"),
                        r = (null === n || void 0 === n ? void 0 : n.additionals.filter((function(e) {
                            return e.productCharacteristic.defaultSelected
                        })).map((function(e) {
                            var t = e.code,
                                r = e.type;
                            return {
                                code: t,
                                groupCode: n.code,
                                type: r
                            }
                        }))) || [],
                        a = e && t && mr(t, e),
                        c = E.a.useState(a || []),
                        i = Object(C.a)(c, 2),
                        o = i[0],
                        s = i[1],
                        u = (null === n || void 0 === n ? void 0 : n.productCharacteristic.capacity) || 0,
                        l = E.a.useMemo((function() {
                            return n ? Er(n, o) : 0
                        }), [n, o]),
                        d = u - l,
                        p = u === l;
                    return {
                        capacity: u,
                        defaultSelected: r,
                        getPackages: E.a.useCallback((function() {
                            return n ? n.additionals.map((function(e) {
                                var t, r = e.productCharacteristic.weight,
                                    a = vr(e, o);
                                return {
                                    isActive: a || !p && !(r > d),
                                    isChecked: a,
                                    characteristic: Tr({}, e.productCharacteristic),
                                    content: Tr({}, null === (t = e.features.packageFeatures[0]) || void 0 === t ? void 0 : t.value),
                                    code: e.code,
                                    groupCode: n.code,
                                    type: e.type
                                }
                            })) : []
                        }), [d, p, n, o]),
                        packagesGroup: n,
                        selectedPackages: o,
                        togglePackage: function(e) {
                            var t = vr(e, o) ? o.filter((function(t) {
                                return t.code !== e.code
                            })) : [].concat(Object(Un.a)(o), [e]);
                            s(t)
                        }
                    }
                },
                wr = function(e) {
                    var t, n = Object(T.b)(),
                        r = n.dispatch,
                        a = n.selectedPackages,
                        c = Cr(e),
                        i = c.capacity,
                        o = c.defaultSelected,
                        s = c.packagesGroup,
                        u = null !== (t = e && a && mr(a, e)) && void 0 !== t ? t : [],
                        l = E.a.useCallback((function(t) {
                            var n, c = null === e || void 0 === e ? void 0 : e.propositionId;
                            if (c) {
                                var i = null !== (n = null === a || void 0 === a ? void 0 : a.filter((function(e) {
                                    return e.offerId !== c
                                }))) && void 0 !== n ? n : [];
                                i.push({
                                    offerId: c,
                                    packages: t.map(gr)
                                }), r({
                                    type: "setSelectedPackages",
                                    payload: i
                                })
                            }
                        }), [r, a, e]),
                        d = E.a.useCallback((function() {
                            return u.map(jr)
                        }), [u]),
                        p = E.a.useCallback((function() {
                            var e = d();
                            return o.filter((function(t) {
                                return !e.includes(t.code)
                            })).map(jr)
                        }), [o, d]),
                        f = E.a.useMemo((function() {
                            return s ? Er(s, u) : 0
                        }), [s, u]);
                    return {
                        allowedPackagesCount: i,
                        defaultSelected: o,
                        getPackagesToAdd: d,
                        getPackagesToIgnore: p,
                        selectedPackages: u,
                        selectedPackagesWeight: f,
                        setSelectedPackages: l
                    }
                },
                xr = function() {
                    var e = Object(T.b)(),
                        t = e.isB2B,
                        n = e.dispatch,
                        r = e.clearCache,
                        a = e.offerType,
                        c = e.currentSingleOffer,
                        i = Object(N.b)().market,
                        o = Object(vt.c)(),
                        s = o.dispatch,
                        u = o.cartItemsCount,
                        l = E.a.useState(!1),
                        d = Object(C.a)(l, 2),
                        p = d[0],
                        f = d[1],
                        b = Object(V.c)().suflerSummaryB2B,
                        O = wr(c),
                        h = O.getPackagesToAdd,
                        m = O.getPackagesToIgnore,
                        v = c ? Object(un.f)(c) : void 0,
                        y = c ? Object(un.a)(c) : void 0,
                        j = (null === v || void 0 === v ? void 0 : v.productCharacteristic.rateplanId) || (null === y || void 0 === y ? void 0 : y.productCharacteristic.rateplanId),
                        g = (null === v || void 0 === v ? void 0 : v.productCharacteristic.availableProductsKey) || (null === y || void 0 === y ? void 0 : y.productCharacteristic.availableProductsKey),
                        S = h(),
                        w = m();
                    return {
                        addItemToCart: function() {
                            return Re.a.async((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, f(!0), e.next = 4, Re.a.awrap(Object(kt.a)({
                                            ratePlanId: j,
                                            id: null === c || void 0 === c ? void 0 : c.propositionId,
                                            offerType: a || void 0,
                                            market: i,
                                            availableProductsKey: g,
                                            bonusesToAdd: S,
                                            defaultBonusesToIgnore: w
                                        }));
                                    case 4:
                                        if (t && !b || !a || !fr(t, a)) {
                                            e.next = 9;
                                            break
                                        }
                                        return f(!1), n({
                                            type: "goToSummary"
                                        }), s({
                                            type: "setCartItemsCount",
                                            payload: (u || 0) + 1
                                        }), e.abrupt("return");
                                    case 9:
                                        f(!1), r(), window.location.href = "/koszyk/multi", e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(0), f(!1), n({
                                            type: "setProcessError",
                                            payload: {
                                                type: "ADD_TO_CART_ERROR",
                                                data: e.t0
                                            }
                                        });
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), null, null, [
                                [0, 14]
                            ], Promise)
                        },
                        isPending: p
                    }
                },
                kr = n("Bc8N"),
                Pr = function() {
                    var e = Object(T.b)(),
                        t = e.currentSingleOffer,
                        n = e.doesPhoneLineExist,
                        r = e.selectedOtherPackages,
                        a = e.selectedTVPackages,
                        c = e.showNetPrices,
                        i = e.offerPackages,
                        o = ln().isSelectedOfferWithDiscount;
                    return {
                        priceSteps: E.a.useMemo((function() {
                            if (!t) return null;
                            var e = t.tieredPriceList.map((function(e) {
                                var n, r = t.offerType,
                                    a = e.finalNetPrice,
                                    i = e.finalPrice,
                                    s = e.baseNetPrice,
                                    u = e.basePrice,
                                    l = e.endCycle,
                                    d = e.startCycle,
                                    p = c ? a : i,
                                    f = c ? o ? a : s : o ? i : u;
                                return {
                                    price: null !== (n = "FIX" === Object(ve.a)(r) ? p : f) && void 0 !== n ? n : u,
                                    monthTo: l,
                                    monthFrom: d,
                                    currency: "z\u0142"
                                }
                            }));
                            if (r) {
                                var s = r.map((function(e) {
                                    return e.payments
                                })).flat();
                                e = [].concat(Object(Un.a)(e), Object(Un.a)(s))
                            }
                            if (a) {
                                var u = a.map((function(e) {
                                    return e.payments
                                })).flat();
                                e = [].concat(Object(Un.a)(e), Object(Un.a)(u))
                            }
                            if (n && e.push({
                                    price: -10,
                                    monthTo: null,
                                    monthFrom: 1,
                                    currency: "z\u0142"
                                }), !(null === r || void 0 === r ? void 0 : r.some((function(e) {
                                    return "activation" === e.id
                                })))) {
                                var l = i.find((function(e) {
                                    return "activation" === e.id
                                }));
                                if (l && l.prices) {
                                    var d = l.prices[0];
                                    e.push({
                                        price: d.price,
                                        monthFrom: d.monthFrom,
                                        monthTo: d.monthTo,
                                        currency: d.currency
                                    })
                                }
                            }
                            return Object(kr.a)(e)
                        }), [t, r, a, n, c, o, i]),
                        pricePlan: E.a.useMemo((function() {
                            if (!t) return "0";
                            var e = t.tieredPriceList[0],
                                n = e.basePrice,
                                r = e.finalPrice;
                            return (o && r ? r : n).toString()
                        }), [t, o])
                    }
                },
                zr = {
                    ERROR_1: "Nie wybra\u0142e\u015b paczki z us\u0142ug\u0105. Dodaj 1 paczk\u0119 i zatwierd\u017a wyb\xf3r, by przej\u015b\u0107 dalej.",
                    ERROR_2: "Nie masz wybranych paczek us\u0142ug. Dodaj 2 paczki i zatwierd\u017a wyb\xf3r, by przej\u015b\u0107 dalej.",
                    ERROR_3: "Nie masz wybranych paczek us\u0142ug. Dodaj 3 paczki i zatwierd\u017a wyb\xf3r, by przej\u015b\u0107 dalej."
                },
                Nr = function() {
                    var e = Object(T.b)(),
                        t = e.dispatch,
                        n = e.offerType,
                        r = e.processType,
                        a = e.isUserLoggedWithCAAP,
                        c = e.localizationData,
                        i = e.currentSingleOffer,
                        o = e.shouldUseDiscounts,
                        s = e.selectedTVPackages,
                        u = e.selectedOtherPackages,
                        l = e.selectedPackages,
                        d = e.doesPhoneLineExist,
                        p = e.isB2B,
                        f = e.hasSelectedAccount,
                        b = e.currentStep,
                        O = e.isUserLogged,
                        h = Object(N.b)().market,
                        m = Object(vt.c)().dispatch,
                        v = Pr().pricePlan,
                        y = xr(),
                        j = y.addItemToCart,
                        g = y.isPending,
                        S = function() {
                            var e = Object(T.b)(),
                                t = e.offerType,
                                n = e.processType,
                                r = e.localizationData,
                                a = e.authorizationData,
                                c = e.currentSingleOffer,
                                i = e.id,
                                o = ln().hasAnyOfferDiscount,
                                s = Object(N.b)().market,
                                u = E.a.useCallback((function() {
                                    if (c) {
                                        var e = Object(un.f)(c),
                                            r = Object(un.a)(c),
                                            i = e || r;
                                        if (!i) return null;
                                        z.b.setItem("offerType", t), z.b.setItem("selectedLoyaltyDuration", String(c.loyaltyLength)), z.b.setItem("processType", n), z.b.setItem("rateplanId", i.productCharacteristic.rateplanId), z.b.setItem("selectedPropositionId", c.propositionId), z.b.setItem("LastViewedOfferPage", window.location.pathname), z.b.setItem("convergence", String(o)), z.b.setItem("serviceplan", i.productCharacteristic.rateplanBaseProductId), z.b.setItem("verifiedMsisdn", JSON.stringify({
                                            context: {
                                                market: s,
                                                offer: t,
                                                process: n
                                            },
                                            value: a ? a.phoneNumber : ""
                                        }))
                                    }
                                }), [a, c, s, t, n, o]),
                                l = E.a.useCallback((function() {
                                    var e = {
                                            id: i,
                                            offerType: t,
                                            currentStep: "SUMMARY"
                                        },
                                        n = "".concat(window.location.pathname, "?offerSelectorComponent=").concat(btoa(JSON.stringify(e)));
                                    z.a.setItem("suflerRedirectUrl", n)
                                }), [i, t]);
                            return {
                                setSessionStorageData: u,
                                setLocalStorageParams: E.a.useCallback((function() {
                                    var e = hr.a.stringify(r);
                                    z.a.setItem("OPL-prompterWWT_address", '{"componentUid":"WWT_NewLove","boxID":"love-offer","formType":"DETAILED","leadAddressForm":"'.concat(e, '"}'))
                                }), [r]),
                                setSuflerRedirectUrl: l
                            }
                        }(),
                        w = S.setSessionStorageData,
                        x = S.setLocalStorageParams,
                        k = S.setSuflerRedirectUrl,
                        P = E.a.useState(!1),
                        R = Object(C.a)(P, 2),
                        I = R[0],
                        A = R[1],
                        _ = Object(V.c)().suflerSummaryB2B,
                        L = E.a.useState(null),
                        M = Object(C.a)(L, 2),
                        D = M[0],
                        B = M[1],
                        F = wr(i),
                        U = F.allowedPackagesCount,
                        H = F.selectedPackagesWeight,
                        G = E.a.useCallback((function() {
                            return !(p && !_) && (n && fr(p, n))
                        }), [p, _, n]);
                    E.a.useEffect((function() {
                        B(null)
                    }), [i, l]);
                    var W = E.a.useCallback((function() {
                            return !(!p || "VOICE" !== n || U === H) && (B(zr["ERROR_".concat(U)]), !0)
                        }), [U, p, n, H, B]),
                        K = E.a.useCallback((function() {
                            if (i && n && r && !W()) {
                                var e = Object(un.d)(i);
                                A(g), t({
                                    type: "setShouldVerifyDiscount",
                                    payload: !1
                                }), t({
                                    type: "setIsSuflerProcessing",
                                    payload: !0
                                }), Object(re.b)(e.features.config[0].value.Name, i.propositionId, v, r, n, h), Object(re.c)(b, n, h, O, window.location.pathname, "ADD_TO_CART", r), "RETENTION" !== r && (a || o) ? a || !o ? !a || f || p ? a ? j() : (t({
                                    type: "setShouldVerifyDiscount",
                                    payload: !1
                                }), t({
                                    type: "setIsSuflerProcessing",
                                    payload: !1
                                })) : t({
                                    type: "setShouldShowAccounts",
                                    payload: !0
                                }) : t({
                                    type: "goToVerification"
                                }) : j()
                            }
                        }), [i, n, r, g, t, v, h, b, O, a, o, f, p, j, W]),
                        q = E.a.useCallback((function() {
                            if (i && n && r && !W()) {
                                var e = Object(un.f)(i),
                                    a = Object(un.a)(i),
                                    c = (null === e || void 0 === e ? void 0 : e.productCharacteristic.rateplanBaseProductId) || (null === a || void 0 === a ? void 0 : a.productCharacteristic.rateplanBaseProductId);
                                t({
                                    type: "setIsSuflerProcessing",
                                    payload: !0
                                }), w(), G() && k();
                                var o = "".concat("B2C" === h ? "/sklep" : "/male-firmy/sklep", "?").concat(hr.a.stringify({
                                        offerType: n,
                                        loyalty: i.loyaltyLength,
                                        processType: r,
                                        selectedPropositionId: i.propositionId,
                                        serviceplan: c,
                                        isDuet: G()
                                    })),
                                    s = null === l || void 0 === l ? void 0 : l.map((function(e) {
                                        return {
                                            propositionId: e.offerId,
                                            vases: e.packages.map((function(e) {
                                                return e.code
                                            }))
                                        }
                                    }));
                                Array.isArray(s) && s.length && (o += "&selectedVases=".concat(JSON.stringify(s))), window.location.href = o, Object(re.c)(b, n, h, O, window.location.pathname, "ADD_DEVICE", r)
                            }
                        }), [i, n, r, t, w, h, G, b, O, W, l, k]),
                        Y = E.a.useCallback((function(e) {
                            var t, n, a;
                            return Re.a.async((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (t = e.hasDevice, c && r && i) {
                                            o.next = 3;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 3:
                                        if ("ACTIVATION" === r || "RETENTION" === r) {
                                            o.next = 5;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 5:
                                        return A(!0), x(), n = Object(un.e)(i), a = !!n, o.abrupt("return", Object(We.b)({
                                            hasDevice: t,
                                            hasTv: a,
                                            selectedTVPackages: s,
                                            selectedOtherPackages: u,
                                            currentSingleOffer: i,
                                            processType: r,
                                            doesPhoneLineExist: d
                                        }));
                                    case 10:
                                    case "end":
                                        return o.stop()
                                }
                            }), null, null, null, Promise)
                        }), [c, r, i, x, s, u, d]),
                        X = E.a.useCallback((function() {
                            var e;
                            return Re.a.async((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return t({
                                            type: "setIsSuflerProcessing",
                                            payload: !0
                                        }), a.next = 3, Re.a.awrap(Y({
                                            hasDevice: !1
                                        }));
                                    case 3:
                                        e = a.sent, Object(re.c)(b, n, h, O, window.location.pathname, "ADD_TO_CART", r), e && (window.location.href = e.data ? e.data.nextPageUrl : "/love/danedoumowy"), t({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        });
                                    case 7:
                                    case "end":
                                        return a.stop()
                                }
                            }), null, null, null, Promise)
                        }), [t, Y, b, n, h, O, r]),
                        J = E.a.useCallback((function() {
                            var e;
                            return Re.a.async((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (!W()) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 2:
                                        return t({
                                            type: "setIsSuflerProcessing",
                                            payload: !0
                                        }), a.next = 5, Re.a.awrap(Y({
                                            hasDevice: !0
                                        }));
                                    case 5:
                                        (e = a.sent) && (window.location.href = e.data ? e.data.nextPageUrl : "/love/konfigurator"), t({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        }), Object(re.c)(b, n, h, O, window.location.pathname, "ADD_DEVICE", r);
                                    case 9:
                                    case "end":
                                        return a.stop()
                                }
                            }), null, null, null, Promise)
                        }), [W, t, Y, b, n, h, O, r]);
                    return {
                        errorMessage: D,
                        isResponsePending: I,
                        addToCartFix: E.a.useCallback((function() {
                            var e;
                            return Re.a.async((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (i) {
                                            a.next = 2;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 2:
                                        return e = i.propositionId, a.prev = 3, Object(re.c)(b, n, h, O, window.location.pathname, "ADD_TO_CART", r), t({
                                            type: "setIsSuflerProcessing",
                                            payload: !0
                                        }), a.next = 8, Re.a.awrap(Object(We.a)({
                                            propositionId: e
                                        }));
                                    case 8:
                                        m({
                                            type: "setCartItemsCount",
                                            payload: 0
                                        }), m({
                                            type: "setCartItemsCount",
                                            payload: 1
                                        }), z.b.setItem("LastViewedOfferPage", window.location.href), window.location.href = "/koszyk/multi", a.next = 18;
                                        break;
                                    case 14:
                                        a.prev = 14, a.t0 = a.catch(3), t({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        }), t({
                                            type: "setProcessError",
                                            payload: {
                                                type: "ADD_TO_CART_ERROR",
                                                data: a.t0
                                            }
                                        });
                                    case 18:
                                    case "end":
                                        return a.stop()
                                }
                            }), null, null, [
                                [3, 14]
                            ], Promise)
                        }), [i, b, t, m, O, h, n, r]),
                        addToCartLead: X,
                        addToCartMobile: K,
                        addDeviceLead: J,
                        addDeviceMobile: q
                    }
                };
            E.a.createElement;
            var Rr = {
                    name: "1hprwxc",
                    styles: "display:flex;margin-top:10px;"
                },
                Ir = {
                    name: "f41v6m",
                    styles: "margin-top:0;font-size:14px;font-weight:bold;"
                },
                Ar = E.a.memo((function() {
                    var e = Object(S.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        r = Object(V.c)().loveCMB,
                        a = Object(T.b)(),
                        c = a.offerType,
                        i = a.processType,
                        o = a.currentSingleOffer,
                        s = a.isB2B,
                        u = a.isUserLogged,
                        l = a.currentStep,
                        d = Object(N.b)().market,
                        p = Nr(),
                        f = p.errorMessage,
                        b = p.isResponsePending,
                        O = p.addDeviceLead,
                        h = p.addDeviceMobile,
                        m = p.addToCartFix,
                        v = p.addToCartLead,
                        g = p.addToCartMobile,
                        C = Object(V.c)().suflerSummaryB2B;
                    if (!o || !c) return null;
                    var w = Ce(c),
                        x = Object(ve.a)(c),
                        k = "LEAD" === x,
                        P = "MOBILE" === x,
                        z = k && r,
                        R = !z && k || P,
                        A = P ? g : k ? v : m,
                        _ = P ? h : O,
                        L = s && !C || !c || !fr(s, c) ? "Dodaj do koszyka" : "Dalej",
                        M = {
                            id: w ? "".concat(i, "_dodaj_do_koszyka_button") : "".concat(c, "_zamow_bez_telefonu_button"),
                            action: "",
                            type: "BUTTON",
                            text: L,
                            title: L,
                            variant: "PRIMARY_ON_WHITE"
                        },
                        D = {
                            id: "".concat(i, "_dobierz_").concat(w ? "urzadzenie" : "telefon", "_button"),
                            action: "",
                            type: "BUTTON",
                            text: "Dobierz urz\u0105dzenie",
                            title: "Dobierz urz\u0105dzenie",
                            variant: "SECONDARY_BLACK_OUTLINE"
                        };
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 20
                        }, t.FROM_TABLET, {
                            flexDirection: "row"
                        }), "")
                    }, !z && Object(I.b)(br.a, {
                        action: M,
                        disabled: b,
                        onClick: A,
                        css: Object(j.a)(Object(y.a)({
                            flexGrow: 1
                        }, t.FROM_TABLET, {
                            flexBasis: "50%"
                        }), "")
                    }), z && Object(I.b)(br.a, {
                        action: {
                            action: "CALL_ME_BACK",
                            text: "Zam\xf3w rozmow\u0119",
                            title: "Zam\xf3w rozmow\u0119",
                            type: "BUTTON",
                            variant: "PRIMARY_ON_WHITE",
                            id: "cmb",
                            params: {
                                queue: "SALES_C_LOVE_CP_B2C_CALLBACK",
                                description: "",
                                personalScenario: "kalkulator_love",
                                profile: ""
                            }
                        },
                        onClick: function() {
                            Object(re.c)(l, c, d, u, window.location.pathname, "SEND_CMB", i)
                        }
                    }), R && Object(I.b)(br.a, {
                        action: D,
                        disabled: b,
                        onClick: _,
                        css: Object(j.a)(Object(y.a)({
                            flexGrow: 1,
                            marginTop: 10
                        }, t.FROM_TABLET, {
                            margin: "0 0 0 10px",
                            flexBasis: "51%"
                        }), "")
                    })), f && Object(I.b)("div", {
                        css: Rr
                    }, Object(I.b)(xt.a, {
                        css: Object(j.a)({
                            color: n.DANGER,
                            height: 20,
                            marginRight: 10,
                            minWidth: 20,
                            width: 20
                        }, "")
                    }), Object(I.b)("p", {
                        css: Ir
                    }, f)))
                })),
                _r = n("BVF/"),
                Lr = n("5FZF");
            E.a.createElement;
            var Mr = {
                    name: "1q7njkh",
                    styles: "margin-top:10px;"
                },
                Dr = {
                    name: "h8laae",
                    styles: "font-size:14px;font-weight:bold;"
                },
                Br = E.a.memo((function(e) {
                    var t = e.steps,
                        n = Object(S.useTheme)().colors,
                        r = Object(T.b)().showNetPrices;
                    return Object(I.b)("div", {
                        css: Mr
                    }, t.map((function(e, t) {
                        return Object(I.b)("div", {
                            key: t
                        }, Object(I.b)("div", {
                            css: Object(j.a)({
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "1px 0",
                                p: {
                                    margin: 0,
                                    fontSize: 12
                                },
                                ":last-of-type": {
                                    span: {
                                        color: n.ORANGE_DARK
                                    }
                                }
                            }, "")
                        }, e.monthTo === e.monthFrom && 0 === e.monthTo && Object(I.b)("p", null, "Op\u0142aty jednorazowe"), e.monthTo === e.monthFrom && 0 !== e.monthTo && Object(I.b)("p", null, "W ", Object(Lr.a)(e.monthTo, "N"), " miesi\u0105cu"), e.monthTo !== e.monthFrom && Object(I.b)("p", null, "Od ", e.monthFrom, " do ", e.monthTo, " miesi\u0105ca"), Object(I.b)("p", {
                            css: Dr
                        }, Object(I.b)("span", null, Object(on.a)(e.price), " z\u0142", r && 0 !== e.price && "+ VAT"))))
                    })))
                }));
            E.a.createElement;
            var Fr = {
                    name: "1qfe2y1",
                    styles: "margin:0;font-size:12px;margin-right:auto;"
                },
                Vr = E.a.memo((function() {
                    var e = Object(S.useTheme)().colors,
                        t = Object(vt.c)().isNavbarCollapsed,
                        n = Object(T.b)(),
                        r = n.showNetPrices,
                        a = n.isSuflerMainInView,
                        c = n.isSuflerDescriptionInView,
                        i = n.shouldShowTVConfigurator,
                        o = Pr().priceSteps,
                        s = Object(S.useLayer)().level > 0,
                        u = !c && a || i,
                        l = o && o.all.length > 1 || !1;
                    return Object(I.b)(_r.a.Wrapper, {
                        shouldBeVisible: u,
                        isNavbarCollapsed: t,
                        isExpandable: l,
                        innerCss: {
                            top: s ? 60 : void 0
                        }
                    }, Object(I.b)(_r.a.Header, null, Object(I.b)("p", {
                        css: Fr
                    }, "Aktualna cena:"), o && Object(I.b)("p", {
                        css: Object(j.a)({
                            margin: 0,
                            fontSize: 14,
                            marginRight: 10,
                            color: e.ORANGE_DARK
                        }, "")
                    }, o.last.price && Object(on.a)(o.last.price), " ", "z\u0142/mies.", r && " + VAT")), o && Object(I.b)(_r.a.Content, null, Object(I.b)(Br, {
                        steps: o.all
                    })))
                }));
            E.a.createElement;
            var Ur = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                Hr = {
                    name: "1ww6zew",
                    styles: "width:18px;height:18px;flex-shrink:0;"
                },
                Gr = {
                    name: "10va27z",
                    styles: "font-size:12px;line-height:16px;padding:0 10px;margin:0;"
                },
                Wr = E.a.memo((function(e) {
                    var t = e.text,
                        n = Object(S.useTheme)().colors;
                    return Object(I.b)("div", {
                        css: Ur
                    }, Object(I.b)(wt.a, {
                        color: n.INFO,
                        css: Hr
                    }), Object(I.b)("p", {
                        css: Gr,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                }));
            Wr.displayName = "DiscountTextWrapper";
            E.a.createElement;
            var Kr = {
                    name: "1s70fdt",
                    styles: "font-size:12px;line-height:16px;padding:0px 10px 10px;margin:0;"
                },
                qr = E.a.memo((function() {
                    var e = Object(S.useTheme)(),
                        t = e.colors,
                        n = e.bp,
                        r = Object(T.b)(),
                        a = r.currentSingleOffer,
                        c = r.shouldUseDiscounts,
                        i = ln(),
                        o = i.showDiscountSwitch,
                        s = i.hasDiscount;
                    if (!a) return null;
                    var u = Object(un.d)(a).features.discountFeatures || [],
                        l = null === u || void 0 === u ? void 0 : u.find((function(e) {
                            return "DISCOUNT_DESCRIPTION" === e.type
                        }));
                    if (!l) return null;
                    var d = l.value,
                        p = !!s && (!o || o && c),
                        f = p && d.discountTitle ? d.discountTitle : d.title,
                        b = p && d.discountDescription ? d.discountDescription : d.description;
                    return b ? Object(I.b)(S.Expander, {
                        headerCss: {
                            display: "flex",
                            flexDirection: "row-reverse"
                        },
                        title: Object(I.b)(Wr, {
                            text: f
                        }),
                        wrapperCss: {
                            padding: 0,
                            marginBottom: 15,
                            borderBottom: "1px solid ".concat(t.CHROME)
                        },
                        contentCss: {
                            fontSize: 12,
                            lineHeight: "16px",
                            padding: "0 20px 10px 25px",
                            marginBottom: 10,
                            marginRight: 20,
                            p: {
                                fontSize: 12,
                                lineHeight: "16px",
                                margin: 0,
                                padding: "10px 10px 0 0",
                                ":last-child": {
                                    paddingBottom: 10
                                }
                            }
                        }
                    }, Object(I.b)("p", {
                        dangerouslySetInnerHTML: {
                            __html: b
                        }
                    })) : Object(I.b)("div", {
                        css: Object(j.a)({
                            display: "flex",
                            paddingTop: 5,
                            marginBottom: 10,
                            borderBottom: "1px solid ".concat(t.CHROME)
                        }, "")
                    }, Object(I.b)(wt.a, {
                        color: t.INFO,
                        css: Object(j.a)(Object(y.a)({
                            width: 16,
                            height: 16,
                            flexShrink: 0
                        }, n.FROM_TABLET, {
                            width: 18,
                            height: 18
                        }), "")
                    }), Object(I.b)("p", {
                        css: Kr,
                        dangerouslySetInnerHTML: {
                            __html: f
                        }
                    }))
                }));
            qr.displayName = "DiscountFeature";
            var Yr = function() {
                var e = Object(T.b)().dispatch;
                return {
                    hide: E.a.useCallback((function() {
                        e({
                            type: "showPackageConfigurator",
                            payload: !1
                        })
                    }), [e]),
                    show: E.a.useCallback((function(t) {
                        e({
                            type: "showPackageConfigurator",
                            payload: !0
                        }), e({
                            type: "setPackageConfiguratorType",
                            payload: t
                        })
                    }), [e])
                }
            };
            E.a.createElement;
            var Xr = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                Jr = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Zr = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                Qr = {
                    name: "p8la30",
                    styles: "margin:0;font-size:18px;padding:5px 0 15px 0;"
                },
                $r = E.a.memo((function() {
                    var e = Object(S.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        r = Object(T.b)(),
                        a = r.currentSingleOffer,
                        c = r.isB2B,
                        i = r.offerType,
                        o = Yr().show,
                        s = Object(V.c)().additionalPackages,
                        u = wr(a),
                        l = u.allowedPackagesCount,
                        d = u.selectedPackages,
                        p = u.selectedPackagesWeight,
                        f = "VOICE" === i || "VOICE_LDF" === i,
                        b = E.a.useCallback((function() {
                            o("ADDITIONAL_PACKAGES_GROUP")
                        }), [o]);
                    if (!c || !a || !f || !s || !l) return null;
                    var O = yr(a, "ADDITIONAL_PACKAGES_GROUP"),
                        h = (null === d || void 0 === d ? void 0 : d.filter((function(e) {
                            return e.groupCode === (null === O || void 0 === O ? void 0 : O.code)
                        })).map((function(e) {
                            return null === O || void 0 === O ? void 0 : O.additionals.find((function(t) {
                                return t.code === e.code
                            }))
                        }))).map((function(e) {
                            var t, n;
                            return null === e || void 0 === e ? void 0 : null === (t = e.features.packageFeatures[0]) || void 0 === t ? void 0 : null === (n = t.value) || void 0 === n ? void 0 : n.title
                        })),
                        m = l === p ? "Zmie\u0144" : "Dodaj";
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)("div", {
                        css: Object(j.a)({
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                            strong: {
                                color: n.ORANGE_DARK
                            }
                        }, "")
                    }, Object(I.b)("strong", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 36,
                            lineHeight: "38px",
                            marginRight: 10,
                            display: "none"
                        }, t.FROM_TABLET, {
                            display: "block"
                        }), "")
                    }, l), Object(I.b)("div", {
                        css: Xr
                    }, Object(I.b)("strong", {
                        css: Object(j.a)(Object(y.a)({}, t.FROM_TABLET, {
                            fontSize: 14
                        }), "")
                    }, Object(I.b)("span", {
                        css: Object(j.a)(Object(y.a)({}, t.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }, l, "\xa0"), Object(tn.a)(["paczka", "paczki", "paczki"], l), " do wyboru w ramach abonamentu"), Object(I.b)("span", {
                        css: Jr
                    }, "Mo\u017cesz ", Object(tn.a)(["j\u0105", "je", "je"], l), " zmieni\u0107 za darmo co miesi\u0105c."))), Object(I.b)(cr, {
                        buttonText: m,
                        linkText: "Lista paczek",
                        onClick: b
                    }, Object(I.b)("h4", {
                        css: Zr
                    }, Object(tn.a)(["Paczka", "Paczki", "Paczki"], p), " ", Object(I.b)("strong", null, p), " z ", l), Object(I.b)("p", {
                        css: Qr
                    }, p ? h.join(", ") : "Wybierz ".concat(Object(tn.a)(["paczk\u0119", "paczki", "paczki"], l)))))
                }));
            $r.displayName = "AdditionalPackages";
            E.a.createElement;
            var ea = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                ta = function() {
                    var e = Object(T.b)().dispatch,
                        t = E.a.useCallback((function(t) {
                            e({
                                type: "isSuflerMainInView",
                                payload: !!t
                            })
                        }), [e]);
                    return Object(I.b)(Qt.a, {
                        onChange: t,
                        rootMargin: "-160px"
                    }, Object(I.b)("div", {
                        css: ea
                    }, Object(I.b)(Vr, null), Object(I.b)(Mn, null), Object(I.b)(In, null), Object(I.b)(qr, null), Object(I.b)($r, null), Object(I.b)(Vn, null), Object(I.b)(er, null), Object(I.b)(pr, null), Object(I.b)(Ar, null)))
                };
            E.a.createElement;
            var na = {
                    name: "y99kjm",
                    styles: "height:65vh;"
                },
                ra = {
                    name: "11n5lnj",
                    styles: "margin:50px auto;top:50%;transform:translateY(-50%);"
                },
                aa = function() {
                    return Object(I.b)("div", {
                        css: na
                    }, Object(I.b)(S.Loader, {
                        css: ra
                    }))
                },
                ca = (E.a.createElement, E.a.memo((function() {
                    var e = Object(T.b)(),
                        t = function(e, t, n, r) {
                            return e || t && !r && !n ? aa : ta
                        }(e.isLoadingSingleOffersList, e.isSuflerProcessing, e.shouldShowPackagesConfigurator, e.shouldShowTVConfigurator);
                    return Object(I.b)(t, null)
                })));
            ca.displayName = "Main";
            E.a.createElement;
            var ia = {
                    name: "b5jhqk",
                    styles: "margin-right:10px;display:inline-block;"
                },
                oa = {
                    name: "hp7eun",
                    styles: "display:inline;font-weight:bold;"
                },
                sa = E.a.memo((function(e) {
                    var t = e.content,
                        n = Object(S.useTheme)(),
                        r = n.bp,
                        a = n.colors,
                        c = Object(T.b)(),
                        i = c.dispatch,
                        o = c.offerType,
                        s = c.processType,
                        u = he(o, s).numberOfContracts,
                        l = E.a.useCallback((function() {
                            i(u > 1 ? {
                                type: "goToSelectNumber"
                            } : {
                                type: "goToAuthorization"
                            })
                        }), [i, u]),
                        d = E.a.useCallback((function() {
                            i("FIX_EXISTING_SERVICE" === s ? {
                                type: "goToServices"
                            } : {
                                type: "goToLocation"
                            })
                        }), [i, s]),
                        p = Ce(o),
                        f = p ? l : d;
                    return Object(I.b)(E.a.Fragment, null, p && Object(I.b)(E.a.Fragment, null, Object(I.b)("span", {
                        css: ia
                    }, t), (u > 1 || 0 === u) && Object(I.b)(E.a.Fragment, null, Object(I.b)(S.AButton, {
                        variant: "ON_LIGHT_BACKGROUND",
                        onClick: f,
                        css: oa
                    }, "Zmie\u0144"))), !p && Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            paddingBottom: 10,
                            display: "flex",
                            alignItems: "flex-end",
                            borderBottom: "1px solid ".concat(a.CHROME)
                        }, r.FROM_TABLET, {
                            border: "none",
                            paddingBottom: 0
                        }), "")
                    }, Object(I.b)("span", {
                        css: Object(j.a)(Object(y.a)({
                            marginRight: 10
                        }, r.ONLY_MOBILE, {
                            maxWidth: 175
                        }), "")
                    }, t), Object(I.b)(S.AButton, {
                        variant: "ON_LIGHT_BACKGROUND",
                        onClick: f,
                        css: Object(j.a)(Object(y.a)({
                            display: "inline",
                            marginLeft: "auto",
                            fontWeight: "bold"
                        }, r.FROM_TABLET, {
                            marginLeft: 0
                        }), "")
                    }, "Zmie\u0144")))
                }));
            E.a.createElement;
            var ua = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                la = {
                    name: "1vryd59",
                    styles: "font-size:14px;margin-top:2px;"
                },
                da = E.a.memo((function() {
                    var e, t = Object(T.b)(),
                        n = t.authorizationData,
                        r = t.localizationData,
                        a = t.currentSingleOffer,
                        c = t.currentOffer,
                        i = t.offerType,
                        o = Object(S.useTheme)(),
                        s = o.bp,
                        u = o.colors,
                        l = Object(k.a)(),
                        d = Object(T.b)().isB2B;
                    if (!a || !i) return null;
                    var p = Ce(i),
                        f = Object(un.d)(a),
                        b = f.features.config[0].value.Name,
                        O = ["FIX1P", "FIX3P"].includes(i),
                        h = f.features.config[0].value.sticker,
                        m = Ce(i);
                    return Object(I.b)("div", null, Object(I.b)("h2", {
                        css: Object(j.a)((e = {
                            display: "none",
                            fontSize: 40,
                            lineHeight: 1
                        }, Object(y.a)(e, s.FROM_TABLET, {
                            display: "block"
                        }), Object(y.a)(e, s.ONLY_TABLET, {
                            fontSize: 30,
                            lineHeight: 1
                        }), e), "")
                    }, d ? "Oferta dla Twojej Firmy" : "Oferta dla Ciebie"), m && Object(I.b)(U, {
                        css: Object(j.a)(Object(y.a)({
                            marginTop: 12,
                            marginBottom: 20,
                            paddingBottom: 20,
                            borderBottom: "1px solid ".concat(u.CHROME)
                        }, s.FROM_TABLET, {
                            marginBottom: 30,
                            paddingBottom: 30
                        }), "")
                    }), p && Object(I.b)("div", {
                        css: ua
                    }, Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            height: 30,
                            marginTop: 4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }, s.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }, Object(I.b)("h3", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 18,
                            lineHeight: "16px",
                            color: u.ORANGE_DARK,
                            fontWeight: "bold",
                            marginRight: 10
                        }, s.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }, b), h && Object(I.b)(S.Badge, {
                        backgroundColor: h.backgroundColor,
                        textColor: h.textColor
                    }, Object(I.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: h.text
                        }
                    }))), n && n.phoneNumber && Object(I.b)(sa, {
                        content: n.phoneNumber
                    })), !p && Object(I.b)("div", {
                        css: la
                    }, r && Object(I.b)(sa, {
                        content: "".concat(r.street, " ").concat(r.roadNo).concat(r.apartmentNo ? "/".concat(r.apartmentNo) : "", ", ").concat(r.city)
                    }), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            marginTop: 15
                        }, s.FROM_TABLET, {
                            marginTop: 0,
                            paddingBottom: 20,
                            borderBottom: "1px solid ".concat(u.CHROME)
                        }), "")
                    }, l && c && Object(I.b)("strong", {
                        css: Object(j.a)({
                            display: O ? "none" : "block",
                            color: u.ORANGE_DARK,
                            fontSize: 16
                        }, "")
                    }, c.name), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            height: 30,
                            marginTop: 4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }, s.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }, Object(I.b)("h3", {
                        css: Object(j.a)({
                            fontSize: 18,
                            lineHeight: "16px",
                            color: u.ORANGE_DARK,
                            fontWeight: "bold",
                            marginRight: 10
                        }, "")
                    }, b), h && Object(I.b)(S.Badge, {
                        backgroundColor: h.backgroundColor,
                        textColor: h.textColor
                    }, Object(I.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: h.text
                        }
                    }))))))
                })),
                pa = n("YYwr");
            E.a.createElement;
            var fa = {
                    name: "npkaou",
                    styles: "padding:15px 0 5px 0;"
                },
                ba = {
                    name: "1xtb4ow",
                    styles: "margin:0;font-size:14px;line-height:16px;&:last-of-type{margin-bottom:5px;}"
                },
                Oa = function() {
                    var e = Pr().priceSteps,
                        t = Object(T.b)().offerType,
                        n = Ce(t),
                        r = E.a.useMemo((function() {
                            return !e || e.all.length < 2 ? [] : e.head.map(pa.a)
                        }), [e]);
                    return n || r.length < 1 ? null : Object(I.b)("div", {
                        css: fa
                    }, r.map((function(e, t) {
                        return Object(I.b)("p", {
                            key: t,
                            css: ba
                        }, Object(I.b)("strong", null, Object(on.a)(e.price), " z\u0142"), " ", e.text)
                    })))
                };
            E.a.createElement;
            var ha = {
                    name: "1thr8qj",
                    styles: "display:flex;align-items:baseline;font-weight:bold;"
                },
                ma = {
                    name: "133jgfd",
                    styles: "width:19px;height:19px;"
                },
                va = {
                    name: "wicuot",
                    styles: "display:flex;justify-content:space-between;padding-top:10px;"
                },
                ya = {
                    name: "1fr0plv",
                    styles: "font-weight:bold;margin-bottom:0;"
                },
                ja = E.a.memo((function() {
                    var e, t, n = Object(S.useTheme)(),
                        r = n.bp,
                        a = n.colors,
                        c = Object(T.b)(),
                        i = c.dispatch,
                        o = c.shouldShowOfferDetails,
                        s = c.currentSingleOffer,
                        u = c.offerType,
                        l = c.showNetPrices,
                        d = c.isB2B,
                        p = ln().isSelectedOfferWithDiscount,
                        f = Pr().priceSteps,
                        b = Ce(u),
                        O = E.a.useCallback((function() {
                            i({
                                type: "showOfferDetails",
                                payload: !o
                            })
                        }), [o, i]);
                    if (!s) return null;
                    var h = Object(un.d)(s),
                        m = h.features.priceFeatures || [],
                        v = null === f || void 0 === f ? void 0 : f.last.price,
                        g = u && ["DATA", "DATA_LDF"].includes(u),
                        C = p ? "Kwota abonamentu uwzgl\u0119dnia rabat za zgod\u0119 na e-faktur\u0119 i terminowe p\u0142atno\u015bci - 5 z\u0142, zgody marketingowe - 5 z\u0142 oraz rabat za \u0142\u0105czenie us\u0142ug w Orange - ".concat(d && g ? "15" : "20", " z\u0142.") : "Kwota abonamentu uwzgl\u0119dnia rabat za zgod\u0119 na e-faktur\u0119 i terminowe p\u0142atno\u015bci - 5 z\u0142 oraz zgody marketingowe - 5 z\u0142.",
                        w = h.features.config[0].value.sticker,
                        x = h.features.config[0].value.Name;
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            marginTop: 5,
                            marginBottom: 20
                        }, Object(y.a)(e, r.FROM_TABLET, {
                            marginTop: 20
                        }), Object(y.a)(e, r.FROM_DESKTOP, {
                            marginBottom: 40
                        }), e), "")
                    }, Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "none"
                        }, r.FROM_TABLET, {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: 30
                        }), "")
                    }, Object(I.b)("h3", {
                        css: Object(j.a)(Object(y.a)({}, r.FROM_TABLET, {
                            lineHeight: "22px",
                            margin: 0,
                            fontSize: 18,
                            color: a.ORANGE_DARK
                        }), "")
                    }, x), w && Object(I.b)(S.Badge, {
                        backgroundColor: w.backgroundColor,
                        textColor: w.textColor
                    }, Object(I.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: w.text
                        }
                    }))), Object(I.b)(Oa, null), Object(I.b)("div", {
                        css: ha
                    }, Object(I.b)("span", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 40,
                            position: "relative"
                        }, r.FROM_DESKTOP, {
                            fontSize: 60
                        }), "")
                    }, Object(I.b)(S.Swapper, null, v && Object(on.a)(v, {
                        integersWithFractionDigits: !0
                    }))), Object(I.b)("span", {
                        css: Object(j.a)((t = {
                            margin: "0 5px",
                            fontSize: 16
                        }, Object(y.a)(t, r.FROM_TABLET, {
                            fontSize: 24
                        }), Object(y.a)(t, r.FROM_DESKTOP, {
                            fontSize: 28
                        }), t), "")
                    }, "z\u0142/mies.", l && " + VAT"), d && !o && b && Object(I.b)(E.a.Fragment, null, Object(I.b)(_n.a, {
                        content: C
                    }, Object(I.b)("span", null, Object(I.b)(An.a, {
                        css: ma
                    }))))), Object(I.b)("div", {
                        css: va
                    }, d && m.map((function(e, t) {
                        var n = Zn[e.type];
                        return n && Object(I.b)(n, Object(R.a)({}, e.value, {
                            key: t
                        }))
                    })), !d && Object(I.b)("h5", {
                        css: ya
                    }, "z rabatami"), !o && Object(I.b)(br.a, {
                        action: {
                            id: "",
                            action: "",
                            type: "LINK_BUTTON",
                            text: "Szczeg\xf3\u0142y",
                            title: "Szczeg\xf3\u0142y",
                            variant: "ON_LIGHT_BACKGROUND"
                        },
                        onClick: O,
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            fontWeight: "bold"
                        }, r.FROM_TABLET, {
                            display: "inline"
                        }), "")
                    })), !d && m.map((function(e, t) {
                        var n = Zn[e.type];
                        return n && Object(I.b)(n, Object(R.a)({}, e.value, {
                            key: t
                        }))
                    })))
                }));
            ja.displayName = "PriceInfo";
            E.a.createElement;
            var ga = function() {
                    var e, t = Object(S.useTheme)().bp;
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            width: "100%"
                        }, Object(y.a)(e, t.ONLY_TABLET, {
                            width: "53%",
                            margin: "auto",
                            marginTop: 30
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            maxWidth: 400
                        }), e), "")
                    }, Object(I.b)(da, null), Object(I.b)(ja, null), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({}, t.ONLY_TABLET, {
                            display: "none"
                        }), "")
                    }, Object(I.b)(Ar, null)))
                },
                Ea = n("nwNh"),
                Sa = n("iDB3");
            E.a.createElement;
            var Ta = {
                    name: "1d8amz7",
                    styles: "display:block;font-weight:bold;"
                },
                Ca = {
                    name: "1d8amz7",
                    styles: "display:block;font-weight:bold;"
                },
                wa = {
                    name: "13o7eu2",
                    styles: "display:block;"
                },
                xa = function(e) {
                    var t = e.prices,
                        n = Object(kr.a)(t);
                    return n ? 1 === n.all.length ? Object(I.b)("span", {
                        css: Ta
                    }, n.first.price, " z\u0142", n.first.monthFrom === n.first.monthTo && 0 === n.first.monthTo ? "" : "/mies", ".") : Object(I.b)(E.a.Fragment, null, Object(I.b)("span", {
                        css: Ca
                    }, n.first.price, " z\u0142", n.first.monthFrom === n.first.monthTo && 0 === n.first.monthTo ? " op\u0142ata jednorazowa" : "/ ".concat(n.first.monthTo, "mies.")), n.tail.map((function(e, t) {
                        return Object(I.b)("span", {
                            key: t,
                            css: wa
                        }, e.price, " z\u0142/ od ", e.monthFrom, " mies.")
                    }))) : null
                };
            E.a.createElement;
            var ka = {
                    name: "153m82c",
                    styles: "font-size:12px;margin-bottom:15px;"
                },
                Pa = {
                    name: "1jruelq",
                    styles: "font-size:12px;display:flex;margin-bottom:2px;"
                },
                za = {
                    name: "f4yhq6",
                    styles: "flex-basis:50%;margin-right:10px;"
                },
                Na = {
                    name: "1spvj5p",
                    styles: "flex-basis:50%;"
                },
                Ra = function(e) {
                    var t = e.data,
                        n = Object(S.useTheme)().colors;
                    return Object(I.b)("div", {
                        css: Object(j.a)({
                            marginBottom: 20,
                            borderBottom: "1px solid ".concat(n.CHROME),
                            paddingBottom: 15
                        }, "")
                    }, Object(I.b)("h2", {
                        css: Object(j.a)({
                            fontSize: 16,
                            borderBottom: "1px solid ".concat(n.CHROME),
                            paddingBottom: 15,
                            marginBottom: 15,
                            lineHeight: "normal"
                        }, "")
                    }, "Szczeg\xf3\u0142y op\u0142at"), Object(I.b)("h4", {
                        css: ka
                    }, "Op\u0142aty miesi\u0119czne za us\u0142ugi i pakiety wybrane przez Ciebie"), t.map((function(e, t) {
                        return Object(I.b)("div", {
                            key: t,
                            css: Pa
                        }, Object(I.b)("span", {
                            css: za
                        }, e.name), Object(I.b)("div", {
                            css: Na
                        }, Object(I.b)(xa, {
                            prices: e.prices
                        })))
                    })))
                };
            E.a.createElement;
            var Ia = {
                    name: "xdq0ry",
                    styles: "display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;margin-bottom:20px;"
                },
                Aa = E.a.memo((function() {
                    var e, t, n = Object(S.useTheme)(),
                        r = n.colors,
                        a = n.bp,
                        c = n.selectors,
                        i = Object(k.a)(),
                        o = Object(T.b)(),
                        s = o.dispatch,
                        u = o.currentSingleOffer,
                        l = o.shouldUseDiscounts,
                        d = o.summaryData,
                        p = o.selectedTVPackages,
                        f = o.selectedOtherPackages,
                        b = o.offerPackages,
                        O = Object(S.useLayer)().level > 0,
                        h = Object(vt.c)().isNavbarCollapsed,
                        m = E.a.useCallback((function() {
                            s({
                                type: "showOfferDetails",
                                payload: !1
                            }), s({
                                type: "setSummaryData",
                                payload: null
                            })
                        }), [s]);
                    if (!u) return null;
                    var v = Object(un.d)(u),
                        g = v.features.detailsFeatures || [],
                        C = d ? [{
                            type: "HTML",
                            value: {
                                value: d
                            }
                        }] : g,
                        w = [].concat(Object(Un.a)(p || []), Object(Un.a)(f || [])).map((function(e) {
                            return e.id
                        })),
                        x = b.filter((function(e) {
                            return !["sfh", "activation"].includes(e.id) && w.includes(e.id) && !e.defaultSelected
                        }));
                    return Object(I.b)(Ea.a, {
                        enabled: i,
                        css: Object(j.a)((e = {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            height: "calc(100% - 20px)",
                            position: "relative"
                        }, Object(y.a)(e, a.FROM_TABLET, {
                            margin: "30px 0",
                            justifyContent: "center"
                        }), Object(y.a)(e, a.FROM_DESKTOP, {
                            margin: 0,
                            height: "100%"
                        }), e), "")
                    }, Object(I.b)("div", {
                        css: Ia
                    }, Object(I.b)("h2", {
                        css: Object(j.a)(Object(y.a)({
                            position: "relative",
                            fontSize: 18,
                            lineHeight: 1,
                            color: r.ORANGE_DARK
                        }, a.FROM_TABLET, {
                            fontSize: 24,
                            lineHeight: 1
                        }), "")
                    }, v.features.config[0].value.Name), O ? Object(I.b)(S.AButton, {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            marginLeft: 5
                        }, c.ON_FOCUS_OR_HOVER, {
                            color: r.ORANGE_DARK,
                            transition: "color .15s"
                        }), ""),
                        onClick: m
                    }, "Zwi\u0144") : Object(I.b)(S.IconButton, {
                        Icon: Sa.a,
                        title: "Zamknij szczeg\xf3\u0142y oferty",
                        onClick: m,
                        css: Object(j.a)({
                            svg: (t = {}, Object(y.a)(t, a.FROM_TABLET, {
                                width: 20,
                                height: 20
                            }), Object(y.a)(t, c.ON_FOCUS_OR_HOVER, {
                                color: r.ORANGE_DARK,
                                transition: "color .15s"
                            }), t)
                        }, "")
                    })), C.length > 0 && Object(I.b)(S.CustomScroll, {
                        css: Object(j.a)(Object(y.a)({
                            paddingRight: 20,
                            height: O ? h ? "calc(100vh - 200px)" : "calc(100vh - 230px)" : "calc(100% - 38px)"
                        }, a.FROM_TABLET, {
                            height: "70%"
                        }), "")
                    }, !d && x[0] && Object(I.b)(Ra, {
                        data: x
                    }), C.map((function(e, t) {
                        var n = Zn[e.type];
                        return n && Object(I.b)(n, Object(R.a)({
                            key: t
                        }, e.value, {
                            css: "HTML" === e.type && {
                                table: {
                                    width: "100%",
                                    padding: "15px 0",
                                    borderTop: "1px solid ".concat(r.CHROME)
                                },
                                tr: {
                                    "&:not(:last-of-type)": {
                                        marginBottom: 10
                                    }
                                },
                                "th, td": {
                                    width: "50%",
                                    fontWeight: "normal",
                                    textAlign: "left",
                                    fontSize: 12,
                                    span: {
                                        display: "block"
                                    },
                                    strong: {
                                        display: "block"
                                    }
                                },
                                td: {
                                    marginLeft: 20,
                                    lineHeight: 1.2
                                },
                                "p, span": {
                                    fontSize: 12,
                                    lineHeight: 1.2
                                },
                                p: {
                                    marginTop: 15
                                },
                                span: {
                                    marginTop: 10,
                                    display: "block"
                                },
                                h2: {
                                    fontSize: 16,
                                    lineHeight: "48px"
                                },
                                h3: {
                                    fontSize: 14
                                },
                                h4: {
                                    color: r.CHROME,
                                    fontSize: 12
                                },
                                section: {
                                    padding: "15px 0",
                                    borderTop: "1px solid ".concat(r.CHROME)
                                },
                                div: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    "strong, span, em": {
                                        display: "block",
                                        width: "100%",
                                        fontSize: 12,
                                        margin: 0
                                    }
                                },
                                em: {
                                    color: r.ORANGE_DARK,
                                    fontStyle: "normal",
                                    fontWeight: "bold"
                                },
                                img: {
                                    width: "100%",
                                    marginTop: 5
                                },
                                a: {
                                    textDecoration: "underline",
                                    fontWeight: "bold"
                                },
                                "[data-showondiscount]": {
                                    display: l ? void 0 : "none"
                                },
                                "[data-hideondiscount]": {
                                    display: l ? "none" : void 0
                                }
                            }
                        }))
                    }))))
                })),
                _a = (E.a.createElement, function(e) {
                    var t, n = Object(S.useTheme)().bp,
                        r = Object(T.b)().isSuflerProcessing;
                    return Object(I.b)("div", Object(R.a)({
                        css: Object(j.a)((t = {
                            height: "100%"
                        }, Object(y.a)(t, n.FROM_TABLET, {
                            width: "53%",
                            margin: "auto"
                        }), Object(y.a)(t, n.FROM_DESKTOP, {
                            width: 400
                        }), Object(y.a)(t, n.ONLY_TABLET, {
                            display: r ? "none" : "block"
                        }), t), "")
                    }, e), Object(I.b)(Aa, null))
                }),
                La = (E.a.createElement, function() {
                    var e = Object(S.useTheme)().bp;
                    return Object(I.b)(S.Loader, {
                        css: Object(j.a)(Object(y.a)({}, e.ONLY_TABLET, {
                            margin: "0 auto"
                        }), "")
                    })
                });

            function Ma(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Da(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ma(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ma(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ba = {
                    expandedPackageId: null,
                    basePackage: {
                        id: "",
                        group: null,
                        tag: "BASE",
                        isBase: !0,
                        isActive: !0,
                        isDumbChecked: !0,
                        isInObligatoryGroup: !1,
                        exclusivePackages: [],
                        isDependent: !1,
                        masterPackage: null,
                        dependentPackages: [],
                        isDefaultChecked: !1,
                        content: {
                            title: null,
                            subtitle: "Kana\u0142y w cenie pakietu Love",
                            description: null,
                            longDescription: null,
                            teaser: null,
                            prices: null,
                            media: null,
                            channels: null
                        }
                    },
                    checkedPackages: [],
                    packagesConfiguration: [],
                    packageGroups: [],
                    getDataStatus: {
                        status: null,
                        message: null
                    },
                    packageConfiguratorType: null
                },
                Fa = function(e, t) {
                    switch (t.type) {
                        case "setGetDataStatus":
                            return Da({}, e, {
                                getDataStatus: t.payload
                            });
                        case "setPackageGroups":
                            var n = Array.from(new Set(t.payload.map((function(e) {
                                return e.tag
                            })))).map((function(e) {
                                var n = t.payload.filter((function(t) {
                                    return t.tag === e
                                })).map((function(e) {
                                    return e.id
                                }));
                                return {
                                    tag: e,
                                    packages: n
                                }
                            })).filter((function(e) {
                                return "discount" !== e.tag
                            }));
                            return Da({}, e, {
                                packageGroups: n
                            });
                        case "setBasePackage":
                            var r = {
                                id: "",
                                group: null,
                                tag: "BASE",
                                isBase: !0,
                                isActive: !0,
                                isDumbChecked: !0,
                                isInObligatoryGroup: !1,
                                exclusivePackages: [],
                                isDependent: !1,
                                masterPackage: null,
                                dependentPackages: [],
                                isDefaultChecked: !1,
                                content: {
                                    title: null,
                                    subtitle: "Kana\u0142y w cenie pakietu Love",
                                    description: null,
                                    longDescription: null,
                                    teaser: null,
                                    prices: null,
                                    media: null,
                                    channels: null
                                }
                            };
                            if (t.payload) {
                                var a = t.payload.hdChannelsNumber + t.payload.sdChannelsNumber,
                                    c = "<strong>".concat(a, "</strong> ").concat(Object(tn.a)(["kana\u0142", "kana\u0142y", "kana\u0142\xf3w"], a), " (w tym <strong>").concat(t.payload.hdChannelsNumber, "</strong> HD)");
                                r.content.title = c, r.content.channels = t.payload.channels
                            }
                            return Da({}, e, {
                                basePackage: r
                            });
                        case "setPackageConfiguratorType":
                            return Da({}, e, {
                                packageConfiguratorType: t.payload
                            });
                        case "setPackagesConfiguration":
                            var i = t.payload.packages,
                                o = t.payload.inactivePackages,
                                s = [],
                                u = {};
                            Array.from(new Set(i.map((function(e) {
                                return e.group
                            })))).filter((function(e) {
                                return null !== e
                            })).forEach((function(e) {
                                null !== e && (u[e] = i.filter((function(t) {
                                    return t.group === e
                                })).map((function(e) {
                                    return e.id
                                })))
                            }));
                            var l = {},
                                d = Array.from(new Set(i.map((function(e) {
                                    return e.dependentFrom
                                })))).filter((function(e) {
                                    return e
                                }));
                            return d.forEach((function(e) {
                                l[e] = i.filter((function(t) {
                                    return t.dependentFrom === e
                                })).map((function(e) {
                                    return e.id
                                }))
                            })), i.forEach((function(e) {
                                var t = {
                                    id: e.id,
                                    group: e.group,
                                    tag: e.tag,
                                    isBase: !1,
                                    isActive: !o.find((function(t) {
                                        return t.id === e.id
                                    })),
                                    isDumbChecked: !!o.find((function(t) {
                                        return t.id === e.id && !0 === t.isChecked
                                    })),
                                    isInObligatoryGroup: !!e.isGroupObligatory,
                                    exclusivePackages: e.group ? u[e.group].filter((function(t) {
                                        return t !== e.id
                                    })) : [],
                                    isDependent: !!e.dependentFrom,
                                    masterPackage: e.dependentFrom,
                                    dependentPackages: d.includes(e.id) ? l[e.id] : [],
                                    isDefaultChecked: e.defaultSelected,
                                    content: {
                                        title: e.name,
                                        subtitle: e.subtitle,
                                        description: e.description,
                                        longDescription: e.longDescription,
                                        teaser: e.teaser,
                                        prices: e.prices,
                                        media: e.media,
                                        channels: e.channels
                                    }
                                };
                                s.push(t)
                            })), "CHANNELS" === e.packageConfiguratorType && s.unshift(e.basePackage), Da({}, e, {
                                packagesConfiguration: s
                            });
                        case "setDefaultCheckedPackages":
                            var p = [];
                            e.packagesConfiguration.forEach((function(t) {
                                t.isDefaultChecked && !e.checkedPackages.some((function(e) {
                                    return t.exclusivePackages.includes(e)
                                })) && p.push(t.id)
                            }));
                            var f = Array.from(new Set(e.checkedPackages.concat(p)));
                            return Da({}, e, {
                                checkedPackages: f
                            });
                        case "togglePackageDetails":
                            return Da({}, e, {
                                expandedPackageId: t.payload === e.expandedPackageId ? null : t.payload
                            });
                        case "togglePackageCheck":
                            if (!e.packagesConfiguration) return Da({}, e);
                            if (e.packagesConfiguration.find((function(e) {
                                    return e.id === t.payload.id && !0 === e.isDumbChecked
                                }))) return Da({}, e);
                            var b = e.checkedPackages,
                                O = e.packagesConfiguration.find((function(e) {
                                    return e.id === t.payload.id
                                })),
                                h = function(t) {
                                    b = [].concat(Object(Un.a)(e.checkedPackages), [t])
                                },
                                m = function(e) {
                                    b = b.filter((function(t) {
                                        return t !== e
                                    }))
                                };
                            if (!O) return Da({}, e);
                            var v = null !== O.group,
                                y = e.packagesConfiguration.filter((function(e) {
                                    return e.group === O.group && null !== e.group
                                })).some((function(e) {
                                    return e.isInObligatoryGroup
                                })),
                                j = 0 !== O.exclusivePackages.length,
                                g = b.includes(O.id),
                                E = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        n = e.packagesConfiguration.find((function(e) {
                                            return e.id === t
                                        }));
                                    n && n.dependentPackages.forEach((function(e) {
                                        m(e)
                                    }))
                                },
                                S = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        n = e.packagesConfiguration.find((function(e) {
                                            return e.id === t
                                        }));
                                    if (void 0 !== n && n.dependentPackages[0]) {
                                        var r = e.packagesConfiguration.find((function(e) {
                                            return e.id === n.dependentPackages[0]
                                        }));
                                        r && (r.isInObligatoryGroup || r.isDefaultChecked) && b.push(r.id)
                                    }
                                },
                                T = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                                    t.forEach((function(e) {
                                        h(e), S(e)
                                    })), e.forEach((function(e) {
                                        m(e), E(e)
                                    }))
                                };
                            return v && y ? j && (g ? T([O.id], [O.exclusivePackages[0]]) : T(O.exclusivePackages, [O.id])) : g ? T([O.id]) : T(O.exclusivePackages, [O.id]), Da({}, e, {
                                checkedPackages: b
                            });
                        case "setCheckedPackages":
                            return Da({}, e, {
                                checkedPackages: t.payload
                            });
                        default:
                            return e
                    }
                };
            E.a.createElement;

            function Va(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ua(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Va(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Va(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ha = E.a.createContext(null),
                Ga = E.a.memo((function(e) {
                    var t = Object(R.a)({}, e),
                        n = E.a.useReducer(Fa, Ua({}, Ba)),
                        r = Object(C.a)(n, 2),
                        a = r[0],
                        c = r[1],
                        i = E.a.useMemo((function() {
                            return Ua({}, a, {
                                dispatch: c
                            })
                        }), [a]);
                    return Object(I.b)(Ha.Provider, Object(R.a)({
                        value: i
                    }, t))
                })),
                Wa = function() {
                    var e = E.a.useContext(Ha);
                    if (null === e) throw Error("useTVConfiguratorContext: Please provide TVConfiguratorProvider value.");
                    return e
                },
                Ka = n("9Hq1"),
                qa = (E.a.createElement, function(e) {
                    var t = e.name,
                        n = e.imageUrl,
                        r = Object(S.useTheme)().colors,
                        a = E.a.useState(!1),
                        c = Object(C.a)(a, 2),
                        i = c[0],
                        o = c[1],
                        s = E.a.useCallback((function(e) {
                            e && o(e)
                        }), []);
                    return Object(I.b)(Qt.a, {
                        key: n,
                        onChange: s
                    }, Object(I.b)("div", {
                        style: {
                            background: i ? "url(".concat(n, ") center / contain no-repeat") : void 0
                        },
                        title: t,
                        css: Object(j.a)({
                            width: 48,
                            height: 48,
                            border: "1px solid ".concat(r.ASH),
                            backgroundColor: r.WHITE,
                            margin: "8px 8px 0 0"
                        }, "")
                    }))
                });
            E.a.createElement;
            var Ya = {
                    name: "2imjyh",
                    styles: "display:flex;flex-wrap:wrap;"
                },
                Xa = E.a.memo((function(e) {
                    var t = e.channels;
                    return t ? Object(I.b)("div", {
                        css: Ya
                    }, t.map((function(e) {
                        return Object(I.b)(qa, {
                            key: e.id,
                            name: e.name,
                            imageUrl: e.imageUrl
                        })
                    }))) : null
                }));
            E.a.createElement;
            var Ja = {
                    name: "v56cvm",
                    styles: "padding:0 20px 20px 20px;"
                },
                Za = {
                    name: "1ot530t",
                    styles: "font-size:12px;display:block;width:100%;padding-bottom:5px;"
                },
                Qa = {
                    name: "1msyvyi",
                    styles: "font-size:24px;font-weight:bold;margin:0;"
                },
                $a = {
                    name: "ovn284",
                    styles: "font-size:16px;margin-left:4px;"
                },
                ec = {
                    name: "16hqsjo",
                    styles: "font-size:14px;margin:6px 0 0 0;line-height:1;"
                },
                tc = E.a.memo((function(e) {
                    var t = e.packageId,
                        n = e.isExpanded,
                        r = e.isChecked,
                        a = e.isBase,
                        c = e.data,
                        i = e.onDetailsCheckClick,
                        o = e.isButtonHidden,
                        s = Object(S.useTheme)(),
                        u = s.bp,
                        l = s.colors,
                        d = E.a.useState(n ? "none" : 0),
                        p = Object(C.a)(d, 2),
                        f = p[0],
                        b = p[1],
                        O = E.a.useRef(null),
                        h = c.prices ? Object(kr.a)(c.prices) : null;
                    return E.a.useEffect((function() {
                        O.current && b(n ? O.current.scrollHeight : 0)
                    }), [n]), Object(I.b)("div", {
                        ref: O,
                        css: Object(j.a)({
                            overflow: "hidden",
                            maxHeight: f,
                            transition: "max-height .2s ease",
                            visibility: n ? "visible" : "hidden"
                        }, "")
                    }, Object(I.b)("div", {
                        css: Ja
                    }, !a && Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: 20
                        }, u.FROM_TABLET, {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-end"
                        }), "")
                    }, h && Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            marginBottom: 20
                        }, u.FROM_TABLET, {
                            margin: 0
                        }), "")
                    }, h.first && Object(Ka.a)(h.first) && Object(I.b)("span", {
                        css: Za
                    }, "op\u0142ata jednorazowa ", h.first.price, " z\u0142"), h.all.filter((function(e) {
                        return !Object(Ka.a)(e)
                    })).slice(0, 1).map((function(e, n) {
                        return Object(I.b)("p", {
                            key: "PriceStep_".concat(e.price, "-").concat(n),
                            css: Qa
                        }, e.price, Object(I.b)("span", {
                            css: $a
                        }, ["orange_tv_go", "multiroom", "orange_smart_wifi_box"].includes(t) ? "".concat(e.currency, " / mies.") : "".concat(e.currency, " / ").concat(e.monthTo, " mies.")))
                    })), h.tail.slice(Object(Ka.a)(h.first) ? 1 : 0).map((function(e, t) {
                        return Object(I.b)("p", {
                            key: "PriceStep_".concat(e.price, "-").concat(t),
                            css: ec
                        }, "".concat(e.price, " ").concat(e.currency, "/mies. od ").concat(e.monthFrom, " miesi\u0105ca"))
                    }))), !o && Object(I.b)(S.Button, {
                        onClick: i,
                        variant: r ? "SECONDARY_BLACK_OUTLINE" : void 0,
                        css: Object(j.a)(Object(y.a)({}, u.FROM_TABLET, {
                            height: 40
                        }), "")
                    }, r ? "Usu\u0144" : "Dodaj")), c.longDescription && Object(I.b)("div", {
                        css: Object(j.a)({
                            fontSize: 14,
                            lineHeight: "18px",
                            margin: 0,
                            marginBottom: 2,
                            color: l.SILVER,
                            p: {
                                fontSize: 14,
                                lineHeight: "18px"
                            },
                            ul: {
                                listStyleType: "initial",
                                paddingLeft: 15
                            }
                        }, ""),
                        dangerouslySetInnerHTML: {
                            __html: c.longDescription
                        }
                    }), n && Object(I.b)(Xa, {
                        channels: c.channels
                    })))
                })),
                nc = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.isExpanded,
                        n = e.data,
                        r = Object(S.useTheme)(),
                        a = r.bp,
                        c = r.colors;
                    return n.media ? Object(I.b)("div", {
                        role: "img",
                        "aria-label": n.media.title,
                        title: n.media.title,
                        style: {
                            background: "url(".concat(n.media.src, ") center / cover no-repeat")
                        },
                        css: Object(j.a)(Object(y.a)({
                            position: "relative",
                            maxHeight: t ? 135 : 0,
                            height: 120,
                            overflow: "hidden",
                            transition: "max-height .2s ease"
                        }, a.FROM_TABLET, {
                            height: 135
                        }), "")
                    }, n.teaser && Object(I.b)("p", {
                        css: Object(j.a)({
                            position: "absolute",
                            margin: 0,
                            width: "100%",
                            bottom: 0,
                            backgroundColor: c.BLACK,
                            color: c.WHITE,
                            fontSize: 12,
                            padding: "0 10px",
                            height: 24,
                            lineHeight: "24px",
                            maxHeight: t ? 24 : 0,
                            opacity: t ? 1 : 0,
                            transition: "max-height .2s ease .3s, opacity .5s ease"
                        }, "")
                    }, n.teaser)) : null
                }))),
                rc = n("BjmB"),
                ac = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.data,
                        n = Object(S.useTheme)().colors,
                        r = E.a.useState(!1),
                        a = Object(C.a)(r, 2),
                        c = a[0],
                        i = a[1],
                        o = E.a.useState(!1),
                        s = Object(C.a)(o, 2),
                        u = s[0],
                        l = s[1],
                        d = Wa(),
                        p = d.expandedPackageId,
                        f = d.checkedPackages,
                        b = d.packagesConfiguration,
                        O = d.dispatch,
                        h = Object(T.b)().dispatch;
                    E.a.useEffect((function() {
                        i(p === t.id)
                    }), [t.id, p]), E.a.useEffect((function() {
                        l(!!t.isDumbChecked || f.includes(t.code || t.id))
                    }), [f, t.id, t.isDumbChecked, t.code]);
                    var m = E.a.useCallback((function() {
                            t.isActive && O({
                                type: "togglePackageDetails",
                                payload: t.id
                            })
                        }), [t.id, t.isActive, O]),
                        v = E.a.useCallback((function() {
                            !t.isBase && t.isActive && O({
                                type: "togglePackageCheck",
                                payload: {
                                    id: t.id,
                                    group: t.group
                                }
                            })
                        }), [t.isBase, t.isActive, t.id, t.group, O]),
                        y = E.a.useCallback((function() {
                            O({
                                type: "togglePackageCheck",
                                payload: {
                                    id: t.id,
                                    group: t.group
                                }
                            }), O({
                                type: "togglePackageDetails",
                                payload: t.id
                            })
                        }), [t.group, t.id, O]);
                    return E.a.useEffect((function() {
                        var e = f.reduce((function(e, t) {
                            var n = b.find((function(e) {
                                return e.id === t
                            }));
                            return n ? e.concat({
                                id: n.id,
                                payments: n.content.prices,
                                name: n.content.title
                            }) : e
                        }), []);
                        h({
                            type: "setCheckedPackages",
                            payload: e
                        })
                    }), [h, f, b]), Object(I.b)("section", {
                        role: "region",
                        css: Object(j.a)({
                            marginBottom: 10,
                            borderRadius: 4,
                            backgroundColor: n.STARDUST,
                            overflow: "hidden"
                        }, "")
                    }, Object(I.b)(nc, {
                        isExpanded: c,
                        data: t.content
                    }), Object(I.b)(rc.a, {
                        onExpanderClick: m,
                        onCheckClick: v,
                        data: t.content,
                        isExpanded: c,
                        isChecked: u,
                        isBase: t.isBase,
                        isActive: t.isActive
                    }), Object(I.b)(tc, {
                        packageId: t.id,
                        isExpanded: c,
                        isChecked: u,
                        isBase: t.isBase,
                        isButtonHidden: 0 === t.exclusivePackages.length && t.isInObligatoryGroup,
                        data: t.content,
                        onDetailsCheckClick: y
                    }))
                })));
            E.a.createElement;
            var cc = {
                    name: "uewl2b",
                    styles: "margin-bottom:20px;"
                },
                ic = function(e) {
                    var t = e.title,
                        n = e.packages,
                        r = Object(S.useTheme)(),
                        a = r.colors,
                        c = r.bp,
                        i = Wa().checkedPackages,
                        o = E.a.useMemo((function() {
                            return n.filter((function(e) {
                                return !["activation", "sfh"].includes(e.id) && (!e.isDependent || i.includes(e.masterPackage ? e.masterPackage : ""))
                            }))
                        }), [i, n]);
                    return 0 === o.length ? null : Object(I.b)("div", {
                        css: cc
                    }, Object(I.b)("h2", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 18,
                            lineHeight: "normal",
                            paddingBottom: 10,
                            marginBottom: 15,
                            borderBottom: "1px solid ".concat(a.CHROME)
                        }, c.FROM_DESKTOP, {
                            fontSize: 30
                        }), "")
                    }, t), o.map((function(e, t) {
                        return Object(I.b)(ac, {
                            key: t,
                            data: e
                        })
                    })))
                };
            E.a.createElement;
            var oc = {
                    BASE: "Telewizja",
                    MAIN: "Dodaj pakiety TV",
                    ADDITIONAL: "Dodatkowe bloki kana\u0142\xf3w",
                    SERVICE: "Us\u0142ugi",
                    DEVICE: "Urz\u0105dzenia",
                    discount: "",
                    SERVICES: "Us\u0142ugi i urz\u0105dzenia"
                },
                sc = {
                    name: "10klw3m",
                    styles: "height:100%;"
                },
                uc = {
                    name: "1p2jtab",
                    styles: "padding-right:10px;"
                },
                lc = {
                    name: "hg15jl",
                    styles: "position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;"
                },
                dc = E.a.memo((function() {
                    var e = Object(k.a)(),
                        t = Object(S.useTheme)(),
                        n = t.bp,
                        r = t.colors,
                        a = Wa(),
                        c = a.getDataStatus,
                        i = a.packageGroups,
                        o = a.packagesConfiguration,
                        s = Object(T.b)().dispatch,
                        u = E.a.useCallback((function() {
                            s({
                                type: "showTVConfigurator",
                                payload: !1
                            })
                        }), [s]),
                        l = E.a.useMemo((function() {
                            return i.map((function(e, t) {
                                return {
                                    title: oc[e.tag],
                                    packages: e.packages.map((function(e) {
                                        return o.find((function(t) {
                                            return t.id === e
                                        }))
                                    })).filter((function(e) {
                                        return e
                                    }))
                                }
                            }))
                        }), [i, o]);
                    return Object(I.b)(Ea.a, {
                        css: sc,
                        enabled: e
                    }, Object(I.b)(S.IconButton, {
                        Icon: Sa.a,
                        title: "Zamknij konfigurator",
                        onClick: u,
                        width: 15,
                        height: 15,
                        css: Object(j.a)({
                            position: "relative",
                            marginLeft: "auto",
                            display: "block",
                            padding: 15,
                            svg: Object(y.a)({
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }, n.FROM_DESKTOP, {
                                width: 20,
                                height: 20
                            })
                        }, "")
                    }), "SUCCESS" === c.status ? Object(I.b)(S.CustomScroll, {
                        css: Object(j.a)(Object(y.a)({
                            maxHeight: "75%",
                            WebkitOverflowScrolling: "touch"
                        }, n.FROM_TABLET, {
                            maxHeight: "80%"
                        }), "")
                    }, Object(I.b)("div", {
                        css: uc
                    }, l.map((function(e, t) {
                        return Object(I.b)(ic, Object(R.a)({
                            key: t
                        }, e))
                    })))) : Object(I.b)("h3", {
                        css: lc
                    }, c.message), Object(I.b)("div", {
                        css: Object(j.a)({
                            paddingTop: 20,
                            marginRight: 10,
                            backgroundColor: r.WHITE,
                            borderTop: "1px solid ".concat(r.CHROME)
                        }, "")
                    }, Object(I.b)(S.Button, {
                        onClick: u,
                        size: "SMALL",
                        css: Object(j.a)(Object(y.a)({
                            width: "100%"
                        }, n.FROM_TABLET, {
                            maxWidth: 190
                        }), "")
                    }, "Dalej")))
                })),
                pc = (E.a.createElement, E.a.memo((function() {
                    var e = Wa(),
                        t = e.dispatch,
                        n = e.packagesConfiguration,
                        r = Object(T.b)(),
                        a = r.currentSingleOffer,
                        c = r.packageConfiguratorType,
                        i = r.selectedOtherPackages,
                        o = r.selectedTVPackages,
                        s = r.dispatch,
                        u = E.a.useState(!1),
                        l = Object(C.a)(u, 2),
                        d = l[0],
                        p = l[1];
                    return E.a.useEffect((function() {
                        t({
                            type: "setPackageConfiguratorType",
                            payload: c
                        });
                        ! function() {
                            var e, n, r, i, o, u, l, d;
                            Re.a.async((function(f) {
                                for (;;) switch (f.prev = f.next) {
                                    case 0:
                                        if (null !== a && c) {
                                            f.next = 2;
                                            break
                                        }
                                        return f.abrupt("return");
                                    case 2:
                                        if (p(!0), f.prev = 3, e = [], "CHANNELS" !== c) {
                                            f.next = 15;
                                            break
                                        }
                                        if (n = Object(un.e)(a)) {
                                            f.next = 9;
                                            break
                                        }
                                        return f.abrupt("return");
                                    case 9:
                                        return f.next = 11, Re.a.awrap(Object(We.h)(n.code));
                                    case 11:
                                        e = f.sent, r = n.productCharacteristic, i = r.channelsHDQuantity, o = r.channelsSDQuantity, u = r.channelsList, l = u.map((function(e) {
                                            return {
                                                id: e.name,
                                                imageUrl: e.image,
                                                name: e.name,
                                                description: e.name
                                            }
                                        })), t({
                                            type: "setBasePackage",
                                            payload: {
                                                channels: l,
                                                hdChannelsNumber: i,
                                                sdChannelsNumber: o
                                            }
                                        });
                                    case 15:
                                        "OTHER" === c && (d = Object(Qn.a)(Object(Qn.b)(a)), e = d, t({
                                            type: "setBasePackage",
                                            payload: null
                                        })), t({
                                            type: "setPackagesConfiguration",
                                            payload: {
                                                packages: e,
                                                inactivePackages: []
                                            }
                                        }), t({
                                            type: "setGetDataStatus",
                                            payload: {
                                                status: "SUCCESS",
                                                message: null
                                            }
                                        }), s({
                                            type: "appendOfferPackages",
                                            payload: e
                                        }), p(!1), f.next = 26;
                                        break;
                                    case 22:
                                        f.prev = 22, f.t0 = f.catch(3), t({
                                            type: "setGetDataStatus",
                                            payload: {
                                                status: "ERROR",
                                                message: "Oj, co\u015b posz\u0142o nie tak"
                                            }
                                        }), p(!1);
                                    case 26:
                                    case "end":
                                        return f.stop()
                                }
                            }), null, null, [
                                [3, 22]
                            ], Promise)
                        }()
                    }), [a, t, c, s]), E.a.useEffect((function() {
                        t({
                            type: "setPackageGroups",
                            payload: n
                        });
                        var e = "CHANNELS" === c ? o : i,
                            r = a && Object(un.e)(a),
                            s = r && r.additionals.filter((function(e) {
                                return "TV_GROUP" === e.type
                            })),
                            u = s && s.flatMap((function(e) {
                                return e.additionals
                            })),
                            l = u ? u.filter((function(e) {
                                return e.features.config[0].value.defaultSelected
                            })) : [],
                            d = e ? e.map((function(e) {
                                return e.id
                            })).concat(l.map((function(e) {
                                return e.code
                            }))) : [];
                        t({
                            type: "setCheckedPackages",
                            payload: d
                        }), t({
                            type: "setDefaultCheckedPackages",
                            payload: null
                        })
                    }), [a, t, c, n]), Object(I.b)("div", {
                        css: Object(j.a)({
                            position: "relative",
                            display: d ? "flex" : void 0,
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: d ? 0 : 40,
                            overflow: "hidden"
                        }, "")
                    }, d ? Object(I.b)(S.Loader, null) : Object(I.b)(dc, null))
                }))),
                fc = (E.a.createElement, E.a.memo((function() {
                    return Object(I.b)(Ga, null, Object(I.b)(pc, null))
                }))),
                bc = (E.a.createElement, function() {
                    var e, t = Object(S.useTheme)().bp;
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            width: "100%",
                            height: "95%"
                        }, Object(y.a)(e, t.ONLY_TABLET, {
                            width: "53%",
                            margin: "auto",
                            marginTop: 30
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            maxWidth: 400
                        }), e), "")
                    }, Object(I.b)(fc, null))
                });
            E.a.createElement;
            var Oc = {
                    name: "1t9wg36",
                    styles: "position:relative;height:100%;align-items:center;justify-content:center;padding-top:40px;overflow:hidden;"
                },
                hc = {
                    name: "10klw3m",
                    styles: "height:100%;"
                },
                mc = {
                    name: "12ak9cx",
                    styles: "margin-bottom:20px;padding-right:10px;"
                },
                vc = {
                    name: "clnfrv",
                    styles: "min-width:135px;width:100%;"
                },
                yc = {
                    name: "1jsjw0q",
                    styles: "margin-left:10px;min-width:135px;width:100%;"
                },
                jc = E.a.memo((function(e) {
                    var t = e.children,
                        n = e.description,
                        r = e.title,
                        a = e.onAccept,
                        c = e.onCancel,
                        i = Object(S.useTheme)(),
                        o = i.bp,
                        s = i.colors,
                        u = Object(k.a)();
                    return Object(I.b)("div", {
                        css: Oc
                    }, Object(I.b)(Ea.a, {
                        css: hc,
                        enabled: u
                    }, Object(I.b)("div", {
                        css: Object(j.a)({
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: n ? 0 : 15
                        }, "")
                    }, Object(I.b)("h2", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 18,
                            lineHeight: "normal"
                        }, o.FROM_DESKTOP, {
                            fontSize: 30
                        }), "")
                    }, r), Object(I.b)(S.IconButton, {
                        Icon: Sa.a,
                        title: "Zamknij konfigurator",
                        onClick: c,
                        width: 15,
                        height: 15,
                        css: Object(j.a)({
                            position: "relative",
                            display: "block",
                            padding: 10,
                            svg: Object(y.a)({
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }, o.FROM_DESKTOP, {
                                width: 20,
                                height: 20
                            })
                        }, "")
                    })), n && n, Object(I.b)(S.CustomScroll, {
                        css: Object(j.a)(Object(y.a)({
                            maxHeight: "70%",
                            WebkitOverflowScrolling: "touch"
                        }, o.ONLY_SMALL_MOBILE, {
                            maxHeight: "45%"
                        }), "")
                    }, Object(I.b)("div", {
                        css: mc
                    }, t)), Object(I.b)("div", {
                        css: Object(j.a)({
                            backgroundColor: s.WHITE,
                            borderTop: "1px solid ".concat(s.CHROME),
                            marginRight: 10,
                            paddingTop: 20,
                            display: "flex"
                        }, "")
                    }, Object(I.b)(S.Button, {
                        onClick: a,
                        size: "SMALL",
                        css: vc
                    }, "Zatwierd\u017a wyb\xf3r"), Object(I.b)(S.Button, {
                        onClick: c,
                        size: "SMALL",
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: yc
                    }, "Anuluj i wr\xf3\u0107"))))
                }));
            E.a.createElement;

            function gc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ec(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? gc(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Sc = E.a.createContext(null),
                Tc = function(e) {
                    var t = e.isExpanded,
                        n = e.isChecked,
                        r = e.isBase,
                        a = e.isActive,
                        c = e.bannerSrc,
                        i = Object(L.a)(e, ["isExpanded", "isChecked", "isBase", "isActive", "bannerSrc"]),
                        o = E.a.useState({
                            isExpanded: t,
                            isChecked: n,
                            isBase: r,
                            bannerSrc: c
                        }),
                        s = Object(C.a)(o, 2),
                        u = s[0],
                        l = s[1];
                    return Object(I.b)(Sc.Provider, Object(R.a)({
                        value: {
                            state: Ec({}, u, {
                                isActive: a
                            }),
                            setState: l
                        }
                    }, i))
                },
                Cc = (g.createElement, g.memo((function(e) {
                    return Object(I.b)("svg", Object(R.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 279.2 164.2",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(I.b)("path", {
                        d: "M263.9 164.2h-.2v-.2c-.4-.1-.4.2-.5.2h-3.1c-1.5-.3-3-.6-4.6-1v-.2c-.3-.1-.6-.2-1-.2v-.2c-.4-.1-.8-.2-1.2-.2-.1-.2-.2-.3-.2-.5h-.7c-.1-.2-.2-.3-.2-.5h-.5c-.2-.2-.3-.5-.5-.7h-.5c-.6-.6-1.1-1.3-1.7-1.9-.5-.4-1-.8-1.4-1.2-1.4-1.4-2.7-2.9-4.1-4.3-2-1.9-4-3.8-6-5.8-4.1-4.2-8.2-8.3-12.2-12.5-19.1-19-38.2-38.1-57.4-57.1-4.6-4.7-9.3-9.4-13.9-14.2-2.2-2.1-4.3-4.2-6.5-6.2-1.4-1.5-2.9-3-4.3-4.6-.4-.3-.8-.6-1.2-1-.8-.8-1.4-2.1-2.6-2.4-32.5 32.6-65 65.1-97.4 97.7-2.9 2.8-5.8 5.6-8.6 8.4-2.4 2.4-4.5 4.9-7.4 6.7h-.5v.2H25v.2h-.7v.2h-.5v.2c-.6.1-1.1.2-1.7.2v.2c-.9.2-1.8.3-2.6.5v-.2h-.2v.2h-3.1v-.2c-.2.1-.3.2-.5.2v-.2c-.8-.1-1.6-.2-2.4-.2v-.2h-1v-.2c-.4-.1-.8-.2-1.2-.2v-.2h-.5v-.2c-.4-.1-.8-.2-1.2-.2-.1-.2-.2-.3-.2-.5-.5-.2-1-.3-1.4-.5-.2-.3-.5-.6-.7-1h-.5c-.6-.6-1.1-1.3-1.7-1.9-.3-.2-.6-.5-1-.7-2.2-3-4.9-8.9-3.4-13.9v-1.4h.2v-.7h.2v-.7h.2v-.7h.2v-.5h.2v-.5h.2v-.5h.2v-.5h.2v-.5h.2v-.5c.2-.1.3-.2.5-.2v-.5c.2-.2.5-.3.7-.5 1.7-2.4 3.9-4.2 6-6.2 4.6-4.7 9.3-9.4 13.9-14.2 28.1-28 56.2-56 84.2-84 5.4-5.4 10.7-10.9 16.1-16.3 2.3-2.2 4.6-4.5 7-6.7 1.8-1.8 3.5-3.7 5.3-5.5.2-.2.5-.3.7-.5.8-.8 1.7-2.3 2.9-2.6 35.6 35.7 71.2 71.4 106.8 107 4.6 4.5 9.1 9 13.7 13.4 2 2.1 4 4.2 6 6.2 3 2.9 5.9 5.8 8.9 8.6v.5c.2.2.5.3.7.5v.5c.2.1.3.2.5.2.1.3.2.6.2 1 .2.1.3.2.5.2v.5h.2v.5h.2v.7h.2v.5h.2v.7h.2v.7h.2v1h.2v1.2h.2c.4 1.4-.1 6.5-.5 7.4h-.2v.7h-.2v.7h-.2v.5h-.2v.7h-.2v.5h-.2v.5c-.2.1-.3.2-.5.2-.1.3-.2.6-.2 1-.2.1-.3.2-.5.2v.5c-.2.2-.5.3-.7.5v.5c-.3.2-.6.5-1 .7-.4.5-.8 1-1.2 1.4h-.5c-.2.2-.3.5-.5.7h-.5c-.1.2-.2.3-.2.5h-.5c-.1.2-.2.3-.2.5h-.5v.2h-.5v.2h-.5v.2h-.5v.2c-1.2.6-2.8 1.1-4.4 1.6z"
                    }))
                })));
            Cc.displayName = "ArrowUpSlimIcon";
            var wc = n("BNVM");

            function xc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function kc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? xc(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Pc = {
                    mass: .6,
                    tension: 200,
                    friction: 23
                },
                zc = function() {
                    var e = E.a.useContext(Sc);
                    if (null === e) throw Error("usePackageContext: Please provide PackageProvider value.");
                    var t = e.state,
                        n = e.setState,
                        r = t.isExpanded,
                        a = t.isChecked,
                        c = t.isActive,
                        i = t.isBase,
                        o = t.bannerSrc,
                        s = c && !i,
                        u = E.a.useCallback((function() {
                            s && n((function(e) {
                                return kc({}, e, {
                                    isChecked: !e.isChecked
                                })
                            }))
                        }), [s, n]),
                        l = E.a.useCallback((function() {
                            n((function(e) {
                                return kc({}, e, {
                                    isExpanded: !e.isExpanded
                                })
                            }))
                        }), [n]),
                        d = Object(wc.a)({}),
                        p = d.bind,
                        f = d.bounds.height;
                    return {
                        isExpanded: r,
                        isChecked: a,
                        isBase: i,
                        isCheckable: s,
                        toggleCheck: u,
                        toggleExpansion: l,
                        bannerSrc: o,
                        animationConfig: Pc,
                        detailsBind: p,
                        detailsHeight: f
                    }
                };
            E.a.createElement;
            var Nc = {
                    name: "1l7naow",
                    styles: "overflow:hidden;will-change:opacity, height;"
                },
                Rc = {
                    name: "3g969b",
                    styles: "padding:15px 20px 20px 15px;"
                },
                Ic = function(e) {
                    var t = e.children,
                        n = Object(S.useTheme)().colors,
                        r = zc(),
                        a = r.isExpanded,
                        c = r.toggleExpansion,
                        i = r.animationConfig,
                        o = r.detailsBind,
                        s = r.detailsHeight,
                        u = Object(cn.useSpring)({
                            height: a ? s : 0,
                            opacity: a ? 1 : 0,
                            config: i
                        });
                    return Object(I.b)(cn.animated.div, {
                        role: "button",
                        onClick: c,
                        style: u,
                        css: Nc
                    }, Object(I.b)(Cc, {
                        css: Object(j.a)({
                            position: "absolute",
                            top: 10,
                            right: 10,
                            width: 16,
                            height: 16,
                            fill: n.CHROME
                        }, "")
                    }), Object(I.b)("div", o, Object(I.b)("div", {
                        css: Rc
                    }, t)))
                },
                Ac = n("61+9"),
                _c = (E.a.createElement, function() {
                    var e = zc(),
                        t = e.isExpanded,
                        n = e.bannerSrc,
                        r = e.animationConfig,
                        a = Object(cn.useSpring)({
                            opacity: t ? 1 : 0,
                            config: r
                        });
                    return n ? Object(I.b)(cn.animated.div, {
                        style: a,
                        css: Object(j.a)({
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            backgroundImage: "url(".concat(n, ")"),
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            willChange: "opacity"
                        }, "")
                    }) : null
                }),
                Lc = n("0V9e");
            E.a.createElement;
            var Mc = {
                    name: "snkqna",
                    styles: "width:50px;overflow:hidden;position:relative;flex-shrink:0;border-radius:4px 0 0 0;"
                },
                Dc = {
                    name: "11utai8",
                    styles: "position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);will-change:opacity;"
                },
                Bc = {
                    name: "1lyfijc",
                    styles: "transition:fill .2s;"
                },
                Fc = {
                    name: "11utai8",
                    styles: "position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);will-change:opacity;"
                },
                Vc = function(e) {
                    var t = e.onClick,
                        n = Object(S.useTheme)().colors,
                        r = zc(),
                        a = r.isChecked,
                        c = r.toggleCheck,
                        i = r.isCheckable,
                        o = r.isBase,
                        s = r.animationConfig,
                        u = Object(cn.useSpring)({
                            borderWidth: a ? 60 : 1,
                            borderColor: a ? o ? n.BLACK : n.ORANGE_DARK : n.CHROME,
                            config: s
                        }),
                        l = Object(cn.useSpring)({
                            opacity: a ? 0 : 1,
                            config: s
                        }),
                        d = Object(cn.useSpring)({
                            opacity: a ? 1 : 0,
                            delay: a ? 250 : 0,
                            duration: a ? .1 : 100,
                            config: s
                        }),
                        p = E.a.useCallback((function() {
                            c(), i && t && t()
                        }), [i, t, c]);
                    return Object(I.b)("div", {
                        role: "button",
                        onClick: p,
                        style: {
                            cursor: i ? "pointer" : "not-allowed"
                        },
                        css: Mc
                    }, Object(I.b)(cn.animated.div, {
                        style: u,
                        css: Object(j.a)({
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            border: "1px solid ".concat(n.CHROME),
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translateX(-50%) translateY(-50%)",
                            willChange: "border-width, border-color"
                        }, "")
                    }), Object(I.b)(cn.animated.div, {
                        style: l,
                        css: Dc
                    }, Object(I.b)(tr.a, {
                        width: 12,
                        height: 12,
                        style: {
                            fill: i ? n.BLACK : n.CHROME
                        },
                        css: Bc
                    })), Object(I.b)(cn.animated.div, {
                        style: d,
                        css: Fc
                    }, Object(I.b)(Lc.a, {
                        color: n.WHITE,
                        width: 25,
                        height: 25
                    })))
                };
            E.a.createElement;
            var Uc = {
                    name: "10tg25l",
                    styles: "position:relative;will-change:height;overflow:hidden;"
                },
                Hc = {
                    name: "uinsfl",
                    styles: "height:100%;display:flex;"
                },
                Gc = {
                    name: "st3g97",
                    styles: "margin:10px 10px 10px 0;padding-left:10px;display:flex;flex-direction:column;width:100%;align-items:flex-start;position:relative;"
                },
                Wc = {
                    name: "15db0zh",
                    styles: "position:absolute;width:1px;left:0;"
                },
                Kc = function(e) {
                    var t = e.children,
                        n = e.height,
                        r = e.onSelect,
                        a = Object(S.useTheme)().colors,
                        c = zc(),
                        i = c.isExpanded,
                        o = c.isChecked,
                        s = c.isBase,
                        u = c.toggleExpansion,
                        l = c.bannerSrc,
                        d = c.animationConfig,
                        p = Object(cn.useSpring)({
                            height: i ? l ? 120 : 0 : n,
                            opacity: i ? 0 : 1,
                            borderLeft: i ? "0px solid ".concat(a.CHROME) : "1px solid ".concat(a.CHROME),
                            config: d
                        }),
                        f = p.height,
                        b = p.opacity,
                        O = Object(cn.useSpring)({
                            top: o ? -15 : 0,
                            bottom: o ? -15 : 0,
                            backgroundColor: o ? s ? a.BLACK : a.ORANGE_DARK : a.CHROME,
                            config: d
                        });
                    return Object(I.b)(cn.animated.div, {
                        style: {
                            height: f
                        },
                        css: Uc
                    }, Object(I.b)(Ac.a, {
                        css: Object(j.a)({
                            position: "absolute",
                            top: 10,
                            right: 10,
                            width: 16,
                            height: 16,
                            fill: a.CHROME
                        }, "")
                    }), Object(I.b)(_c, null), Object(I.b)(cn.animated.div, {
                        style: {
                            opacity: b
                        },
                        css: Object(j.a)({
                            height: n,
                            overflow: "hidden",
                            willChange: "opacity"
                        }, "")
                    }, Object(I.b)("div", {
                        css: Hc
                    }, Object(I.b)(Vc, {
                        onClick: r
                    }), Object(I.b)("div", {
                        role: "button",
                        onClick: u,
                        css: Gc
                    }, Object(I.b)(cn.animated.div, {
                        style: O,
                        css: Wc
                    }), t))))
                },
                qc = (E.a.createElement, function(e) {
                    var t = e.text,
                        n = Object(S.useTheme)().colors,
                        r = zc().isExpanded,
                        a = Object(cn.useSpring)({
                            borderTopLeftRadius: r ? 4 : 0,
                            borderTopRightRadius: r ? 4 : 0
                        });
                    return Object(I.b)(cn.animated.div, {
                        style: a,
                        css: Object(j.a)({
                            minHeight: 24,
                            backgroundColor: n.BLACK,
                            padding: "5px 10px",
                            margin: "auto 0"
                        }, "")
                    }, Object(I.b)("strong", {
                        css: Object(j.a)({
                            color: n.WHITE,
                            fontSize: 12,
                            display: "block"
                        }, "")
                    }, t))
                });
            E.a.createElement;
            var Yc = {
                    name: "qtiegx",
                    styles: "display:flex;height:100%;flex-direction:column;justify-content:center;"
                },
                Xc = {
                    name: "15tr7kj",
                    styles: "font-size:14px;line-height:normal;margin-bottom:6px;"
                },
                Jc = {
                    name: "128nlh6",
                    styles: "font-size:13px;"
                },
                Zc = function(e) {
                    var t = e.description,
                        n = e.title,
                        r = Object(L.a)(e, ["description", "title"]);
                    return Object(I.b)(Kc, r, Object(I.b)("div", {
                        css: Yc
                    }, Object(I.b)("h3", {
                        css: Xc
                    }, n), Object(I.b)("div", {
                        css: Jc
                    }, t)))
                };
            E.a.createElement;
            var Qc = {
                    name: "lapthm",
                    styles: "font-size:14px;line-height:normal;"
                },
                $c = {
                    name: "jnjom5",
                    styles: "width:100%;margin-top:18px;"
                },
                ei = function(e) {
                    var t = e.description,
                        n = e.title,
                        r = e.onSelect,
                        a = Object(S.useTheme)().colors,
                        c = zc(),
                        i = c.isCheckable,
                        o = c.isChecked,
                        s = c.toggleCheck,
                        u = E.a.useCallback((function() {
                            s(), i && r && r()
                        }), [i, r, s]);
                    return Object(I.b)(Ic, null, Object(I.b)("h3", {
                        css: Qc
                    }, n), i && Object(I.b)(S.Button, {
                        variant: o ? "SECONDARY_BLACK_OUTLINE" : "PRIMARY_ON_WHITE",
                        onClick: u,
                        css: $c
                    }, o ? "Usu\u0144 paczk\u0119" : "Dodaj paczk\u0119"), Object(I.b)("p", {
                        css: Object(j.a)({
                            fontSize: 14,
                            lineHeight: "18px",
                            p: {
                                lineHeight: "18px",
                                fontSize: 14
                            },
                            span: {
                                color: a.ORANGE_DARK
                            }
                        }, ""),
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                },
                ti = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.content,
                        n = e.isActive,
                        r = e.isChecked,
                        a = e.onSelect,
                        c = Object(S.useTheme)().colors,
                        i = Object(k.a)(),
                        o = t.description,
                        s = t.longDescription,
                        u = t.teaser,
                        l = t.title;
                    return Object(I.b)(Tc, {
                        isActive: n,
                        isChecked: r
                    }, Object(I.b)("div", {
                        css: Object(j.a)({
                            backgroundColor: c.STARDUST,
                            borderRadius: 4,
                            marginBottom: 10,
                            overflow: "hidden",
                            position: "relative",
                            zIndex: 0
                        }, "")
                    }, Object(I.b)(Zc, {
                        description: o,
                        height: i ? 90 : 78,
                        title: l,
                        onSelect: a
                    }), Object(I.b)(ei, {
                        description: s,
                        title: l,
                        onSelect: a
                    }), u && Object(I.b)(qc, {
                        text: u
                    })))
                })));
            ti.displayName = "AdditionalPackage";
            E.a.createElement;
            var ni = {
                    name: "1r8daop",
                    styles: "display:flex;flex-direction:column;font-size:14px;line-height:normal;"
                },
                ri = function() {
                    var e = Object(T.b)().currentSingleOffer,
                        t = Yr().hide,
                        n = wr(e),
                        r = n.allowedPackagesCount,
                        a = n.setSelectedPackages,
                        c = Cr(e),
                        i = c.getPackages,
                        o = c.selectedPackages,
                        s = c.togglePackage,
                        u = E.a.useCallback((function() {
                            a(o), t()
                        }), [t, o, a]);
                    if (!e) return null;
                    var l = i(),
                        d = Object(I.b)("p", {
                            css: ni
                        }, Object(I.b)("strong", null, "Wybierz ", r, " ", Object(tn.a)(["paczk\u0119, na kt\xf3rej", "paczki, na kt\xf3rych", "paczki, na kt\xf3rych"], r), " ", "Ci zale\u017cy"), Object(I.b)("span", null, "Paczki mo\u017cesz zmienia\u0107 co miesi\u0105c za darmo"));
                    return Object(I.b)(jc, {
                        description: d,
                        title: "Paczki us\u0142ug",
                        onAccept: u,
                        onCancel: t
                    }, l.map((function(e, t) {
                        return Object(I.b)(ti, Object(R.a)({}, e, {
                            key: t,
                            onSelect: function() {
                                s(e)
                            }
                        }))
                    })))
                };
            ri.displayName = "AdditionalPackages";
            E.a.createElement;
            var ai = function() {
                var e = Object(T.b)().packageConfiguratorType;
                return e && "ADDITIONAL_PACKAGES_GROUP" === e ? Object(I.b)(ri, null) : null
            };
            ai.displayName = "PackagesConfigurator";
            E.a.createElement;
            var ci = function() {
                var e, t = Object(S.useTheme)().bp;
                return Object(I.b)("div", {
                    css: Object(j.a)((e = {
                        width: "100%",
                        height: "95%"
                    }, Object(y.a)(e, t.ONLY_TABLET, {
                        width: "53%",
                        margin: "auto",
                        marginTop: 30
                    }), Object(y.a)(e, t.FROM_DESKTOP, {
                        maxWidth: 400
                    }), e), "")
                }, Object(I.b)(ai, null))
            };
            ci.displayName = "PackagesConfiguratorLayout";
            E.a.createElement;
            var ii = E.a.memo((function() {
                var e = Object(T.b)(),
                    t = function(e, t, n, r, a) {
                        return e || t && (r || a) ? La : n ? _a : a ? bc : r ? ci : ga
                    }(e.isLoadingSingleOffersList, e.isSuflerProcessing, e.shouldShowOfferDetails, e.shouldShowPackagesConfigurator, e.shouldShowTVConfigurator);
                return Object(I.b)(t, null)
            }));
            ii.displayName = "Main";
            E.a.createElement;
            var oi = E.a.memo((function() {
                var e = Object(k.a)(),
                    t = Object(T.b)(),
                    n = t.localizationData,
                    r = t.singleOffers,
                    a = t.offerType,
                    c = t.processType,
                    i = Object(N.b)(),
                    o = i.user,
                    s = i.market,
                    u = E.a.useMemo((function() {
                        return r.filter((function(e) {
                            return !!Object(un.b)(e) || !!Object(un.c)(e)
                        })).map((function(e) {
                            var t, n;
                            return (null === (t = Object(un.b)(e)) || void 0 === t ? void 0 : t.code) || (null === (n = Object(un.c)(e)) || void 0 === n ? void 0 : n.code)
                        })).join(" | ")
                    }), [r]),
                    l = a && Object(ve.a)(a);
                return E.a.useEffect((function() {
                    "MOBILE" !== l && u && Object(re.d)(n, u, o.isLogged, s, window.location.pathname, a, c)
                }), [n, u, o.isLogged, s, l, a, c]), e ? Object(I.b)(ca, null) : Object(I.b)(ii, null)
            }));
            oi.displayName = "Main";
            E.a.createElement;
            var si = function() {
                    var e, t, n = Object(S.useTheme)(),
                        r = n.bp,
                        a = n.selectors;
                    return Object(I.b)(S.CustomScroll, {
                        css: Object(j.a)((e = {
                            width: "100%"
                        }, Object(y.a)(e, r.FROM_DESKTOP, {
                            maxWidth: 350,
                            maxHeight: "90%"
                        }), Object(y.a)(e, a.IE11, {
                            maxHeight: void 0
                        }), e), "")
                    }, Object(I.b)("div", {
                        css: Object(j.a)((t = {
                            width: "100%"
                        }, Object(y.a)(t, r.ONLY_TABLET, {
                            width: "53%",
                            margin: "auto",
                            marginBottom: 30
                        }), Object(y.a)(t, r.FROM_DESKTOP, {
                            maxWidth: 335
                        }), t), "")
                    }, Object(I.b)(Mn, null), Object(I.b)(In, null), Object(I.b)(qr, null), Object(I.b)($r, null), Object(I.b)(Vn, null), Object(I.b)(er, null), Object(I.b)(pr, null), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({}, r.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    }, Object(I.b)(Ar, null))))
                },
                ui = (E.a.createElement, function() {
                    var e, t = Object(S.useTheme)().bp;
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            width: "100%"
                        }, Object(y.a)(e, t.FROM_TABLET, {
                            width: "53%"
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            width: 400
                        }), Object(y.a)(e, t.ONLY_TABLET, {
                            margin: "30px auto"
                        }), e), "")
                    }, Object(I.b)(da, null), Object(I.b)(ja, null), Object(I.b)(Ar, null))
                }),
                li = (E.a.createElement, function() {
                    var e = Object(S.useTheme)().bp;
                    return Object(I.b)("h3", {
                        css: Object(j.a)(Object(y.a)({}, e.ONLY_TABLET, {
                            display: "none"
                        }), "")
                    }, "Chwileczk\u0119...")
                }),
                di = (E.a.createElement, function() {
                    var e = Object(S.useTheme)().bp;
                    return Object(I.b)(S.Loader, {
                        css: Object(j.a)(Object(y.a)({}, e.ONLY_TABLET, {
                            margin: "0 auto"
                        }), "")
                    })
                }),
                pi = (E.a.createElement, E.a.memo((function() {
                    var e = Object(T.b)(),
                        t = function(e, t, n, r, a) {
                            return !t || a || r ? e ? li : n || a || r ? ui : si : di
                        }(e.isLoadingSingleOffersList, e.isSuflerProcessing, e.shouldShowOfferDetails, e.shouldShowPackagesConfigurator, e.shouldShowTVConfigurator);
                    return Object(I.b)(t, null)
                })));
            pi.displayName = "Description";
            E.a.createElement;
            var fi = E.a.memo((function(e) {
                var t = e.isVisible,
                    n = e.children,
                    r = Object(S.useTheme)(),
                    a = r.zIndex,
                    c = r.colors,
                    i = Object(vt.c)().isNavbarCollapsed,
                    o = Object(S.useLayer)().level > 0,
                    s = Object(cn.useTransition)(t, {
                        from: {
                            transform: "translateX(-100vw)"
                        },
                        enter: {
                            transform: "translateX(0vw)"
                        },
                        leave: {
                            transform: "translateX(-100vw)"
                        },
                        config: {
                            duration: 250
                        }
                    });
                return Object(I.b)(E.a.Fragment, null, s((function(e, t) {
                    return t && Object(I.b)(cn.animated.div, {
                        css: Object(j.a)({
                            position: "fixed",
                            bottom: o ? 0 : 50,
                            top: o ? 20 : i ? 50 : 80,
                            transition: "top 0.1s ease-in",
                            backgroundColor: c.WHITE,
                            zIndex: a.LAYER_3_5,
                            padding: "20px 20px 0 20px",
                            width: "100%"
                        }, ""),
                        style: e
                    }, n)
                })))
            }));
            fi.displayName = "AnimationWrapper";
            E.a.createElement;
            var bi = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                Oi = function() {
                    var e = Object(T.b)().dispatch,
                        t = E.a.useCallback((function(t) {
                            e({
                                type: "isSuflerDescriptionInView",
                                payload: t
                            })
                        }), [e]);
                    return Object(I.b)(Qt.a, {
                        onChange: t,
                        rootMargin: "-60px"
                    }, Object(I.b)("div", {
                        css: bi
                    }, Object(I.b)(da, null), Object(I.b)(ja, null)))
                },
                hi = (E.a.createElement, E.a.memo((function() {
                    var e = Object(T.b)(),
                        t = e.shouldShowOfferDetails,
                        n = e.shouldShowPackagesConfigurator,
                        r = e.shouldShowTVConfigurator,
                        a = t || n || r;
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)(fi, {
                        isVisible: a
                    }, Object(I.b)(E.a.Fragment, null, t && Object(I.b)(Aa, null), n && Object(I.b)(ai, null), r && Object(I.b)(fc, null))), Object(I.b)(Oi, null))
                })));
            hi.displayName = "Description";
            E.a.createElement;
            var mi = E.a.memo((function() {
                return Object(k.a)() ? Object(I.b)(hi, null) : Object(I.b)(pi, null)
            }));
            mi.displayName = "Description";
            E.a.createElement;
            var vi = E.a.memo((function(e) {
                var t = e.children,
                    n = Object(T.b)(),
                    r = n.pk,
                    a = n.processType,
                    c = n.offerType,
                    i = n.dispatch,
                    o = n.shouldShowOfferDetails,
                    s = n.authorizationData,
                    u = n.currentOffer,
                    l = n.localizationData,
                    d = n.currentSingleOffer,
                    p = n.currentProcess,
                    f = n.currentFixMigrationProcessType,
                    b = n.isUserLogged,
                    O = Object(S.useTheme)().bp,
                    h = Object(N.b)().market;
                return E.a.useEffect((function() {
                    d || function() {
                        var e, t, n, o;
                        Re.a.async((function(d) {
                            for (;;) switch (d.prev = d.next) {
                                case 0:
                                    if (a && c && u) {
                                        d.next = 2;
                                        break
                                    }
                                    return d.abrupt("return");
                                case 2:
                                    return i({
                                        type: "setIsLoadingSingleOffersList",
                                        payload: !0
                                    }), d.prev = 3, d.next = 6, Re.a.awrap(Object(We.k)());
                                case 6:
                                    return e = d.sent, t = e.isOnlineCookie, n = e.isSmsVerified, i({
                                        type: "setHasSelectedAccount",
                                        payload: !!e.accountCode
                                    }), t && i({
                                        type: "setIsUserLoggedWithCAAP",
                                        payload: !0
                                    }), n && i({
                                        type: "setIsUserLoggedWithSms",
                                        payload: !0
                                    }), d.next = 14, Re.a.awrap(Object(We.d)(Ce(c) ? {
                                        __type: "MOBILE",
                                        msisdn: s ? s.phoneNumber : "",
                                        configComponentPk: u.configComponentPk,
                                        processType: a,
                                        offerType: c,
                                        filterPk: u.filterConfigPk || "unknown",
                                        pk: r
                                    } : {
                                        __type: "FIX",
                                        boxId: p && p.boxId ? p.boxId : null,
                                        offerType: c,
                                        leadAddressForm: l,
                                        processType: f || "ACTIVATION",
                                        configComponentPk: u.configComponentPk,
                                        filterPk: u.filterConfigPk || "unknown",
                                        pk: r
                                    }));
                                case 14:
                                    o = d.sent, i({
                                        type: "setSingleOffers",
                                        payload: o.offers
                                    }), i({
                                        type: "setIsLoadingSingleOffersList",
                                        payload: !1
                                    }), d.next = 23;
                                    break;
                                case 19:
                                    d.prev = 19, d.t0 = d.catch(3), i({
                                        type: "setIsLoadingSingleOffersList",
                                        payload: !1
                                    }), "NO_OFFERS_FIX" === d.t0.message ? (Object(re.d)(l, "LTE", b, h, window.location.pathname, c, a), i({
                                        type: "setProcessError",
                                        payload: {
                                            type: "NO_OFFERS_FIX"
                                        }
                                    })) : i({
                                        type: "setProcessError",
                                        payload: {
                                            type: "DEFAULT_ERROR"
                                        }
                                    });
                                case 23:
                                case "end":
                                    return d.stop()
                            }
                        }), null, null, [
                            [3, 19]
                        ], Promise)
                    }()
                }), [s, u, d, i, l, c, a, h, p, r, f, b]), Object(I.b)(E.a.Fragment, null, E.a.cloneElement(t, {
                    wrapperCss: Object(y.a)({}, O.TO_DESKTOP, {
                        flexDirection: o ? "column" : "column-reverse",
                        alignItems: "stretch",
                        width: "100%"
                    }),
                    separatorCSS: Object(y.a)({}, O.ONLY_TABLET, {
                        display: "none"
                    })
                }))
            }));
            vi.displayName = "Container";
            E.a.createElement;
            var yi = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                ji = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                gi = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                Ei = {
                    name: "1yitbw3",
                    styles: "width:50%;margin-top:20px;"
                },
                Si = E.a.memo((function(e) {
                    var t = e.dispatch,
                        n = Object(T.b)().processType,
                        r = Object(S.useTheme)(),
                        a = r.bp,
                        c = r.colors,
                        i = E.a.useState({
                            status: null,
                            message: null
                        }),
                        o = Object(C.a)(i, 2),
                        s = o[0],
                        u = o[1],
                        l = E.a.useState(!1),
                        d = Object(C.a)(l, 2),
                        p = d[0],
                        f = d[1],
                        b = Ge()(),
                        O = E.a.useCallback((function(e) {
                            if (n) {
                                ! function() {
                                    var r, a;
                                    Re.a.async((function(c) {
                                        for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                return f(!0), u({
                                                    status: null,
                                                    message: null
                                                }), c.prev = 2, c.next = 5, Re.a.awrap(Object(nt.e)({
                                                    phone: Ze(e.phone),
                                                    processType: n
                                                }));
                                            case 5:
                                                r = c.sent, a = r.requestToken, f(!1), t({
                                                    type: "setAuthorizationToken",
                                                    payload: a
                                                }), t({
                                                    type: "setPhoneNumber",
                                                    payload: Ze(e.phone)
                                                }), c.next = 16;
                                                break;
                                            case 12:
                                                c.prev = 12, c.t0 = c.catch(2), f(!1), u({
                                                    status: "ERROR",
                                                    message: c.t0.message
                                                });
                                            case 16:
                                            case "end":
                                                return c.stop()
                                        }
                                    }), null, null, [
                                        [2, 12]
                                    ], Promise)
                                }()
                            }
                        }), [t, n]);
                    return Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            padding: "0 20px"
                        }, a.FROM_TABLET, {
                            padding: 0,
                            paddingBottom: 30,
                            maxWidth: 400
                        }), "")
                    }, Object(I.b)("p", {
                        css: yi
                    }, "Wpisz sw\xf3j numer telefonu w Orange, z kt\xf3rego korzystasz (w ofercie na abonament) lub zaloguj si\u0119 do M\xf3j Orange."), Object(I.b)("p", {
                        css: ji
                    }, "Je\u017celi korzystasz z internetu mobilnego, kod z SMS-em autoryzacyjnym mo\u017cesz odebra\u0107 w aplikacji obs\u0142uguj\u0105cej modem/router."), Object(I.b)(He.FormContext, b, Object(I.b)("form", {
                        onSubmit: b.handleSubmit(O)
                    }, Object(I.b)("div", {
                        css: gi
                    }, Object(I.b)(Ue.c, {
                        name: "phone",
                        ref: b.register,
                        variant: "STARDUST",
                        prefix: "(+48)",
                        placeholder: "Numer telefonu",
                        type: "tel"
                    })), "ERROR" === s.status && Object(I.b)("p", {
                        css: Object(j.a)({
                            marginTop: 0,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: c.DANGER
                        }, "")
                    }, s.message), Object(I.b)(S.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_BLACK",
                        disabled: p,
                        css: Ei
                    }, "Dalej"))))
                }));
            Si.displayName = "NumberVerification";
            var Ti = n("0e5S");
            E.a.createElement;
            var Ci = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                wi = {
                    name: "1b2e6uh",
                    styles: "width:100%;display:flex;justify-content:space-between;margin-top:40px;"
                },
                xi = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                ki = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                Pi = E.a.memo((function() {
                    var e, t = Object(T.b)(),
                        n = t.dispatch,
                        r = t.currentSingleOffer,
                        a = t.offerType,
                        c = t.processType,
                        i = t.clearCache,
                        o = Object(S.useTheme)().bp,
                        s = E.a.useCallback((function() {
                            n({
                                type: "goToSingleOffer"
                            })
                        }), [n]),
                        u = E.a.useState(!1),
                        l = Object(C.a)(u, 2),
                        d = l[0],
                        p = l[1],
                        f = E.a.useCallback((function() {
                            if (r && a && c) {
                                var e = Object(un.f)(r),
                                    t = Object(un.a)(r),
                                    n = (null === e || void 0 === e ? void 0 : e.productCharacteristic.rateplanId) || (null === t || void 0 === t ? void 0 : t.productCharacteristic.rateplanId);
                                p(!0);
                                Re.a.async((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Re.a.awrap(Object(kt.a)({
                                                ratePlanId: n,
                                                id: r.propositionId,
                                                offerType: a,
                                                processType: c
                                            }));
                                        case 2:
                                            i(), window.location.href = "/koszyk/multi", p(!1);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), null, null, null, Promise)
                            }
                        }), [i, r, a, c]);
                    return Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            padding: "0 20px"
                        }, Object(y.a)(e, o.FROM_TABLET, {
                            padding: 0
                        }), Object(y.a)(e, o.FROM_DESKTOP, {
                            maxWidth: 400
                        }), e), "")
                    }, Object(I.b)("p", {
                        css: Ci
                    }, "Przepraszamy, ale niestety nie mo\u017cesz skorzysta\u0107 z widocznego rabatu. Wr\xf3\u0107 do konfiguratora i wybierz ofert\u0119 dla siebie lub dodaj do koszyka widoczn\u0105 ofert\u0119."), Object(I.b)("div", {
                        css: wi
                    }, Object(I.b)(S.Button, {
                        onClick: s,
                        disabled: d,
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: xi
                    }, "Wstecz"), Object(I.b)(S.Button, {
                        disabled: d,
                        onClick: f,
                        css: ki
                    }, "Dalej")))
                }));

            function zi(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Ni(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? zi(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zi(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ri = {
                phoneNumber: null,
                authorizationToken: null,
                isVerificationError: !1
            };

            function Ii(e, t) {
                switch (t.type) {
                    case "setAuthorizationToken":
                        return Ni({}, e, {
                            authorizationToken: t.payload
                        });
                    case "setPhoneNumber":
                        return Ni({}, e, {
                            phoneNumber: t.payload
                        });
                    case "setIsVerificationError":
                        return Ni({}, e, {
                            isVerificationError: t.payload
                        });
                    default:
                        return e
                }
            }
            E.a.createElement;
            var Ai = E.a.memo((function() {
                var e = E.a.useReducer(Ii, Ri),
                    t = Object(C.a)(e, 2),
                    n = t[0],
                    r = t[1];
                return n.isVerificationError ? Object(I.b)(Pi, null) : n.authorizationToken ? Object(I.b)(Ti.a, {
                    dispatch: r,
                    phoneNumber: n.phoneNumber,
                    authorizationToken: n.authorizationToken
                }) : Object(I.b)(Si, {
                    dispatch: r
                })
            }));
            Ai.displayName = "Main";
            E.a.createElement;
            var _i = {
                    name: "xdh5lg",
                    styles: "margin-bottom:20px;width:auto;height:auto;"
                },
                Li = E.a.memo((function() {
                    var e, t = Object(T.b)(),
                        n = t.shouldShowOfferDetails,
                        r = t.currentOffer,
                        a = Object(k.a)(),
                        c = Object(S.useTheme)().bp;
                    return r ? !a && n ? Object(I.b)(_a, {
                        css: Object(j.a)(Object(y.a)({}, c.ONLY_TABLET, {
                            width: "100%"
                        }), "")
                    }) : Object(I.b)(E.a.Fragment, null, Object(I.b)(fi, {
                        isVisible: n
                    }, Object(I.b)(Aa, null)), Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            width: "100%",
                            padding: "0 20px"
                        }, Object(y.a)(e, c.ONLY_TABLET, {
                            marginTop: 30,
                            padding: 0
                        }), Object(y.a)(e, c.FROM_DESKTOP, {
                            width: 400
                        }), e), "")
                    }, Object(I.b)(da, null), Object(I.b)(ja, null), a && Object(I.b)(S.ArrowSeparator, {
                        orientation: "HORIZONTAL",
                        css: _i
                    }))) : null
                }));
            Li.displayName = "Description";
            E.a.createElement;
            var Mi = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Di = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                Bi = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                Fi = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                Vi = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                Ui = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                Hi = E.a.memo((function() {
                    var e, t = E.a.useState([]),
                        n = Object(C.a)(t, 2),
                        r = n[0],
                        a = n[1],
                        c = E.a.useState(""),
                        i = Object(C.a)(c, 2),
                        o = i[0],
                        s = i[1],
                        u = E.a.useState(),
                        l = Object(C.a)(u, 2),
                        d = l[0],
                        p = l[1],
                        f = E.a.useState(!0),
                        b = Object(C.a)(f, 2),
                        O = b[0],
                        h = b[1],
                        m = E.a.useState({
                            isError: !1,
                            message: ""
                        }),
                        v = Object(C.a)(m, 2),
                        g = v[0],
                        w = v[1],
                        x = Object(T.b)(),
                        k = x.dispatch,
                        P = x.currentSingleOffer,
                        z = x.offerType,
                        R = x.processType,
                        A = Object(N.b)().market,
                        _ = Object(S.useTheme)(),
                        L = _.bp,
                        M = _.colors,
                        D = Pr().pricePlan;
                    E.a.useEffect((function() {
                        ! function() {
                            var e;
                            Re.a.async((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return h(!0), t.next = 3, Re.a.awrap(Object(We.j)());
                                    case 3:
                                        e = t.sent, a(e), h(!1);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), null, null, null, Promise)
                        }()
                    }), []);
                    var B = E.a.useState(!1),
                        F = Object(C.a)(B, 2),
                        V = F[0],
                        U = F[1],
                        H = xr().addItemToCart,
                        G = E.a.useCallback((function() {
                            k(P ? {
                                type: "goToSingleOffer"
                            } : {
                                type: "goToOffers"
                            })
                        }), [k, P]),
                        W = E.a.useCallback((function() {
                            if (P && z && R) {
                                var e = Object(un.d)(P);
                                Re.a.async((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return U(!0), g.isError && w({
                                                isError: !1,
                                                message: ""
                                            }), Object(re.b)(e.features.config[0].value.Name, P.propositionId, D, R, z, A), t.prev = 3, t.next = 6, Re.a.awrap(Object(We.l)({
                                                id: o,
                                                accountCode: (null === d || void 0 === d ? void 0 : d.accountCode) || ""
                                            }));
                                        case 6:
                                            H(), t.next = 13;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t.catch(3), w({
                                                isError: !0,
                                                message: "Wystapi\u0142 b\u0142\u0105d podczas wyboru konta. Spr\xf3buj ponownie."
                                            }), U(!1);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), null, null, [
                                    [3, 9]
                                ], Promise)
                            }
                        }), [H, d, P, g.isError, A, z, D, R, o]),
                        K = E.a.useCallback((function(e) {
                            var t = r.find((function(t) {
                                return t.accountId === e.target.value
                            }));
                            p(t || void 0), s(t ? t.accountId : "")
                        }), [r]);
                    return O ? Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({}, L.TO_DESKTOP, {
                            maxWidth: 80,
                            margin: "0 auto",
                            marginTop: "25%"
                        }), "")
                    }, Object(I.b)(S.Loader, null)) : Object(I.b)("div", {
                        css: Object(j.a)((e = {
                            padding: "0 20px"
                        }, Object(y.a)(e, L.FROM_TABLET, {
                            padding: 0,
                            paddingBottom: 30
                        }), Object(y.a)(e, L.FROM_DESKTOP, {
                            maxWidth: 400
                        }), e), "")
                    }, Object(I.b)("p", {
                        css: Mi
                    }, "Zdecyduj czy zam\xf3wienie ma by\u0107 rozliczane w ramach faktury dla posiadanego juz konta czy nowego."), Object(I.b)("form", {
                        css: Di
                    }, Object(I.b)(S.RadioGroup, {
                        name: "select_account",
                        onChange: function(e) {
                            K(e)
                        }
                    }, r.map((function(e) {
                        return Object(I.b)(S.RadioOption, {
                            key: e.accountId,
                            name: "konto",
                            value: e.accountId,
                            wrapperCss: {
                                marginBottom: 20,
                                fontSize: 14
                            },
                            isChecked: o === e.accountId
                        }, Object(I.b)("span", null, e.accountCode, Object(I.b)("br", null), e.accountContracts.map((function(t, n) {
                            return Object(I.b)("span", {
                                key: n,
                                css: Bi
                            }, " ", t.serviceNumber.split(/(\d{3})/).join(" ").trim(), n === e.accountContracts.length - 1 ? "" : ",")
                        }))))
                    })), Object(I.b)(S.RadioOption, {
                        name: "konto",
                        value: "",
                        wrapperCss: {
                            marginBottom: 20,
                            fontSize: 14
                        },
                        isChecked: "" === o
                    }, "Stw\xf3rz nowe konto"))), Object(I.b)("div", {
                        css: Fi
                    }, Object(I.b)(S.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: G,
                        css: Vi
                    }, "Wstecz"), Object(I.b)(S.Button, {
                        disabled: V,
                        variant: "PRIMARY_ON_BLACK",
                        onClick: W,
                        css: Ui
                    }, "Dalej")), g.isError && Object(I.b)("div", {
                        css: Object(j.a)({
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 20,
                            height: 16,
                            color: M.DANGER
                        }, "")
                    }, g.message))
                }));
            Hi.displayName = "Accounts";
            E.a.createElement;
            var Gi = E.a.memo((function() {
                return Object(I.b)(Hi, null)
            }));
            Gi.displayName = "Main";
            E.a.createElement;
            var Wi = E.a.memo((function(e) {
                var t, n = e.text,
                    r = Object(S.useTheme)().bp;
                return Object(I.b)("div", {
                    css: Object(j.a)(Object(y.a)({
                        padding: 20
                    }, r.FROM_TABLET, {
                        padding: 0,
                        maxWidth: 400
                    }), "")
                }, Object(I.b)("h2", {
                    css: Object(j.a)((t = {}, Object(y.a)(t, r.FROM_DESKTOP, {
                        fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                        lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                    }), Object(y.a)(t, "@media (min-width: 1240px)", {
                        fontSize: 60,
                        lineHeight: "62px"
                    }), t), "")
                }, n))
            }));
            Wi.displayName = "DescriptionContent";
            E.a.createElement;
            var Ki = {
                    name: "1and29",
                    styles: "min-width:150px;"
                },
                qi = function(e) {
                    var t = e.type,
                        n = Object(S.useTheme)().bp,
                        r = Object(T.b)().dispatch,
                        a = E.a.useCallback((function() {
                            if ("NO_OFFERS_FIX" === t) return r({
                                type: "selectOffer",
                                payload: "DATA"
                            }), void r({
                                type: "selectProcess",
                                payload: "ACTIVATION"
                            });
                            r({
                                type: "goToOffers"
                            })
                        }), [r, t]);
                    return Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            padding: "0 20px"
                        }, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), "")
                    }, Object(I.b)("p", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 20
                        }, n.FROM_TABLET, {
                            fontSize: 18,
                            marginBottom: 40
                        }), "")
                    }, ao[t].description), Object(I.b)(S.Button, {
                        type: "button",
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: a,
                        css: Ki
                    }, ao[t].buttonText || "Wstecz"))
                };
            E.a.createElement;
            var Yi = {
                name: "1nbic85",
                styles: "width:150px;"
            };
            E.a.createElement;
            var Xi = {
                    name: "q12xye",
                    styles: "display:flex;margin-top:40px;"
                },
                Ji = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                Zi = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                Qi = (E.a.createElement, E.a.memo((function() {
                    var e = Object(S.useTheme)().bp,
                        t = Object(T.b)().clearCache;
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)("p", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 20
                        }, e.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, "Jeste\u015b klientem biznesowym, a wybra\u0142e\u015b ofert\u0119 indywidualn\u0105. Przejd\u017a na stron\u0119 dla firm i wybierz najlepsz\u0105 ofert\u0119 dla Twojej firmy."), Object(I.b)(S.Button, {
                        type: "button",
                        variant: "PRIMARY_ON_WHITE",
                        onClick: function() {
                            t(), window.location.assign("/male-srednie-firmy")
                        },
                        css: Object(j.a)(Object(y.a)({
                            width: "100%"
                        }, e.FROM_TABLET, {
                            width: 260
                        }), "")
                    }, "Wybierz ofert\u0119 dla firm"), Object(I.b)("p", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 20
                        }, e.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, 'Pomy\u0142ka? Nie szkodzi - kliknij "Wstecz" i wpisz sw\xf3j numer prywatny.'))
                })));
            Qi.displayName = "B2BMarketError";
            E.a.createElement;
            var $i = E.a.memo((function() {
                var e = Object(S.useTheme)().bp,
                    t = Object(T.b)().clearCache;
                return Object(I.b)(E.a.Fragment, null, Object(I.b)("p", {
                    css: Object(j.a)(Object(y.a)({
                        fontSize: 14,
                        marginBottom: 20
                    }, e.FROM_TABLET, {
                        fontSize: 18
                    }), "")
                }, "Jeste\u015b klientem indywidualnym, a wybra\u0142e\u015b ofert\u0119 biznesow\u0105. Przejd\u017a na stron\u0119 dla klient\xf3w indywidualnych i wybierz najlepsz\u0105 ofert\u0119 dla Ciebie."), Object(I.b)(S.Button, {
                    type: "button",
                    variant: "PRIMARY_ON_WHITE",
                    onClick: function() {
                        t(), window.location.assign("/")
                    },
                    css: Object(j.a)(Object(y.a)({
                        width: "100%"
                    }, e.FROM_TABLET, {
                        width: 260
                    }), "")
                }, "Wybierz ofert\u0119 indywidualn\u0105"), Object(I.b)("p", {
                    css: Object(j.a)(Object(y.a)({
                        fontSize: 14,
                        marginBottom: 20
                    }, e.FROM_TABLET, {
                        fontSize: 18
                    }), "")
                }, 'Pomy\u0142ka? Nie szkodzi - kliknij "Wstecz" i wpisz sw\xf3j numer biznesowy.'))
            }));
            $i.displayName = "B2CMarketError";
            E.a.createElement;
            var eo = E.a.memo((function() {
                var e = Object(S.useTheme)().bp;
                return Object(I.b)("p", {
                    css: Object(j.a)(Object(y.a)({
                        fontSize: 14,
                        marginBottom: 20
                    }, e.FROM_TABLET, {
                        fontSize: 18
                    }), "")
                }, "Przepraszamy, autoryzacja zako\u0144czy\u0142a si\u0119 nieoczekiwanym b\u0142\u0119dem. Prosimy, zautoryzuj si\u0119 ponownie lub spr\xf3buj za chwil\u0119.")
            }));
            eo.displayName = "ServerError";
            E.a.createElement;
            var to = {
                    B2C_IN_CART: Qi,
                    B2B_IN_CART: $i,
                    SERVER_ERROR: eo
                },
                no = (E.a.createElement, function(e) {
                    var t = e.type,
                        n = Object(S.useTheme)().bp,
                        r = Object(T.b)().clearCache,
                        a = "B2C_CLIENT" === t ? "/" : "/male-srednie-firmy";
                    return Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            padding: "0 20px"
                        }, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), "")
                    }, Object(I.b)("p", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 20
                        }, n.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, ao[t].description), Object(I.b)(S.Button, {
                        type: "button",
                        variant: "PRIMARY_ON_WHITE",
                        onClick: function() {
                            r(), window.location.assign(a)
                        },
                        css: Object(j.a)(Object(y.a)({
                            width: "100%"
                        }, n.FROM_TABLET, {
                            width: 260
                        }), "")
                    }, ao[t].buttonText))
                }),
                ro = {
                    DEFAULT_ERROR: qi,
                    ADD_TO_CART_ERROR: function(e) {
                        var t = e.message,
                            n = e.type,
                            r = Object(S.useTheme)().bp,
                            a = Object(T.b)().dispatch,
                            c = E.a.useCallback((function() {
                                a({
                                    type: "goToOffers"
                                })
                            }), [a]);
                        return Object(I.b)("div", {
                            css: Object(j.a)(Object(y.a)({
                                padding: "0 20px"
                            }, r.FROM_TABLET, {
                                padding: 0,
                                maxWidth: 400
                            }), "")
                        }, Object(I.b)("p", {
                            css: Object(j.a)(Object(y.a)({
                                fontSize: 14,
                                marginBottom: 20
                            }, r.FROM_TABLET, {
                                fontSize: 18,
                                marginBottom: 40
                            }), "")
                        }, t || ao[n].description), Object(I.b)("div", {
                            css: Xi
                        }, Object(I.b)(S.Button, {
                            type: "button",
                            variant: "SECONDARY_BLACK_OUTLINE",
                            onClick: c,
                            css: Ji
                        }, "Wstecz"), Object(I.b)(S.Button, {
                            type: "button",
                            variant: "PRIMARY_ON_WHITE",
                            onClick: function() {
                                window.location.assign("/koszyk/multi")
                            },
                            css: Zi
                        }, "Koszyk")))
                    },
                    CHECK_MARKET_ERROR: function(e) {
                        var t = e.backTo,
                            n = e.message,
                            r = Object(S.useTheme)().bp,
                            a = Object(T.b)().dispatch,
                            c = E.a.useCallback((function() {
                                a({
                                    type: t
                                })
                            }), [a, t]),
                            i = to[n];
                        return Object(I.b)("div", {
                            css: Object(j.a)(Object(y.a)({
                                padding: "0 20px"
                            }, r.FROM_TABLET, {
                                padding: 0,
                                maxWidth: 400
                            }), "")
                        }, i && Object(I.b)(i, null), Object(I.b)(S.Button, {
                            type: "button",
                            variant: "SECONDARY_BLACK_OUTLINE",
                            onClick: c,
                            css: Object(j.a)(Object(y.a)({
                                width: "100%"
                            }, r.FROM_TABLET, {
                                width: 260
                            }), "")
                        }, "Wstecz"))
                    },
                    MNP_UNABLE_TO_PROCESS: function() {
                        var e = Object(T.b)(),
                            t = e.dispatch,
                            n = e.currentProcess,
                            r = e.offerType,
                            a = e.processType,
                            c = he(r, a).numberOfContracts,
                            i = Object(S.useTheme)().bp,
                            o = E.a.useCallback((function() {
                                if (r) {
                                    var e = Object(ve.a)(r);
                                    t("MOBILE" === e ? c >= 1 ? {
                                        type: "goToOffers"
                                    } : {
                                        type: "goToAuthorization"
                                    } : {
                                        type: "goToOffers"
                                    })
                                }
                            }), [r, t, c]);
                        return n && n.authorizationInfo ? Object(I.b)("div", {
                            css: Object(j.a)(Object(y.a)({
                                padding: "0 20px"
                            }, i.FROM_TABLET, {
                                padding: 0,
                                maxWidth: 400
                            }), "")
                        }, Object(I.b)("p", {
                            css: Object(j.a)(Object(y.a)({
                                fontSize: 14,
                                marginBottom: 20
                            }, i.FROM_TABLET, {
                                fontSize: 18,
                                marginBottom: 40
                            }), "")
                        }, n.authorizationInfo.error.subtitle, " ", n.authorizationInfo.error.description), Object(I.b)("p", null, Object(I.b)(S.Button, {
                            type: "button",
                            variant: "SECONDARY_BLACK_OUTLINE",
                            onClick: o,
                            css: Yi
                        }, "Wstecz"))) : null
                    },
                    NO_OFFERS_FIX: qi,
                    NO_SERVICES: qi,
                    B2B_CLIENT: no,
                    B2C_CLIENT: no
                },
                ao = {
                    ADD_TO_CART_ERROR: {
                        title: "Ups...",
                        description: "Podczas dodawania do koszyka wyst\u0105pi\u0142 b\u0142\u0105d. Przejd\u017a do koszyka lub wybierz inny numer."
                    },
                    CHECK_MARKET_ERROR: {
                        title: "",
                        description: ""
                    },
                    DEFAULT_ERROR: {
                        title: "Ups...",
                        description: "To nie Ty \u2013 to my! Co\u015b posz\u0142o nie tak, ale nasze ekipy ju\u017c nad tym pracuj\u0105. Spr\xf3buj jeszcze raz lub wr\xf3\u0107 na stron\u0119 g\u0142\xf3wn\u0105."
                    },
                    MNP_UNABLE_TO_PROCESS: {
                        title: "",
                        description: ""
                    },
                    NO_OFFERS_FIX: {
                        title: "Jeszcze nas tu nie ma",
                        description: "Pod Twoim adresem jeszcze nie mo\u017cemy \u015bwiadczy\u0107 Ci us\u0142ug internetu stacjonarnego. Sprawd\u017a ofert\u0119 szybkiego internetu mobilnego.",
                        buttonText: "We\u017a internet mobilny"
                    },
                    NO_SERVICES: {
                        title: "Ups...",
                        description: "Co\u015b posz\u0142o nie tak. Nie mo\u017cemy wy\u015bwietli\u0107 Ci oferty dost\u0119pnej pod Twoim adresem. Spr\xf3buj jeszcze raz."
                    },
                    B2B_CLIENT: {
                        title: "Jeste\u015b klientem biznesowym?",
                        description: "Jeste\u015b klientem biznesowym, a wybra\u0142e\u015b ofert\u0119 indywidualn\u0105. Przejd\u017a na stron\u0119 dla firm i wybierz najlepsz\u0105 ofert\u0119 dla Twojej firmy.",
                        buttonText: "Wybierz ofert\u0119 biznesow\u0105"
                    },
                    B2C_CLIENT: {
                        title: "Jeste\u015b klientem indywidualnym?",
                        description: "Jeste\u015b klientem indywidualnym, a wybra\u0142e\u015b ofert\u0119 biznesow\u0105. Przejd\u017a na stron\u0119 dla klient\xf3w indywidualnych i wybierz najlepsz\u0105 ofert\u0119 dla Ciebie.",
                        buttonText: "Wybierz ofert\u0119 indywidualn\u0105"
                    }
                },
                co = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.type;
                    return Object(I.b)(Wi, {
                        text: ao[t].title
                    })
                })));
            co.displayName = "AddToCart";
            E.a.createElement;
            var io = E.a.memo((function() {
                    var e = Object(T.b)().currentProcess;
                    return e && e.authorizationInfo ? Object(I.b)(Wi, {
                        text: e.authorizationInfo.error.title
                    }) : null
                })),
                oo = (E.a.createElement, {
                    B2C_IN_CART: "Masz firm\u0119?",
                    B2B_IN_CART: "Jeste\u015b klientem indywidualnym?",
                    SERVER_ERROR: "Wyst\u0105pi\u0142 b\u0142\u0105d"
                }),
                so = E.a.memo((function(e) {
                    var t = e.message;
                    return Object(I.b)(Wi, {
                        text: oo[t]
                    })
                }));
            so.displayName = "CheckMarket";
            E.a.createElement;
            var uo = function(e) {
                    var t = e.type;
                    return Object(I.b)(Wi, {
                        text: ao[t].title
                    })
                },
                lo = (E.a.createElement, {
                    ADD_TO_CART_ERROR: co,
                    CHECK_MARKET_ERROR: so,
                    MNP_UNABLE_TO_PROCESS: io,
                    DEFAULT_ERROR: uo,
                    NO_OFFERS_FIX: uo,
                    NO_SERVICES: uo,
                    B2B_CLIENT: uo,
                    B2C_CLIENT: uo
                }),
                po = E.a.memo((function() {
                    var e = Object(T.b)().processError;
                    if (!e || !lo[e.type]) return null;
                    var t = e.type,
                        n = e.data,
                        r = lo[t];
                    return Object(I.b)(r, Object(R.a)({}, n, {
                        type: t
                    }))
                }));
            po.displayName = "Description";
            E.a.createElement;
            var fo = E.a.memo((function() {
                var e = Object(T.b)().processError;
                if (!e || !ro[e.type]) return null;
                var t = e.type,
                    n = e.data,
                    r = ro[t];
                return Object(I.b)(r, Object(R.a)({}, n, {
                    type: t
                }))
            }));
            fo.displayName = "Main";
            E.a.createElement;
            var bo = E.a.memo((function() {
                var e, t = Object(k.a)(),
                    n = Object(S.useTheme)(),
                    r = n.colors,
                    a = n.bp,
                    c = Object(T.b)(),
                    i = c.currentProcess,
                    o = c.currentOffer,
                    s = c.offerType,
                    u = c.processType,
                    l = (null === i || void 0 === i ? void 0 : i.badgeText) || (t ? "Chc\u0119 przed\u0142u\u017cy\u0107 <br /> umow\u0119 dla numeru:" : "Chc\u0119 przed\u0142u\u017cy\u0107 <br /> umow\u0119 <br /> dla numeru:");
                return 1 === he(s, u).numberOfContracts ? null : Object(I.b)("div", null, t && Object(I.b)("strong", {
                    css: Object(j.a)({
                        color: r.ORANGE_DARK,
                        display: "inline-block",
                        padding: "0 20px",
                        marginBottom: 10
                    }, "")
                }, o && o.name), Object(I.b)("h2", {
                    css: Object(j.a)((e = {
                        padding: "0 20px 30px 20px"
                    }, Object(y.a)(e, a.FROM_TABLET, {
                        padding: "40px 20px"
                    }), Object(y.a)(e, a.FROM_DESKTOP, {
                        padding: 0,
                        fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                        lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                    }), Object(y.a)(e, "@media (min-width: 1240px)", {
                        fontSize: 60,
                        lineHeight: "62px"
                    }), e), ""),
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                }))
            }));
            bo.displayName = "Description";
            var Oo = n("iInn"),
                ho = n("hwMz"),
                mo = n("cFFy");
            E.a.createElement;
            var vo = {
                    name: "5sysfs",
                    styles: "margin:0 40px 0 20px;flex-basis:100%;"
                },
                yo = {
                    name: "1i2veut",
                    styles: "flex-shrink:0;transition:color .15s;"
                },
                jo = E.a.memo((function(e) {
                    var t, n = e.phoneNumber,
                        r = Object(S.useTheme)(),
                        a = r.colors,
                        c = r.selectors,
                        i = r.bp,
                        o = Object(T.b)().dispatch,
                        s = E.a.useCallback((function() {
                            o({
                                type: "setAutorizationData",
                                payload: {
                                    phoneNumber: n,
                                    isUserAuthenticated: !0
                                }
                            })
                        }), [o, n]),
                        u = E.a.useCallback((function(e) {
                            "Enter" === e.key && s()
                        }), [s]);
                    return Object(I.b)("li", {
                        role: "button",
                        tabIndex: 0,
                        onClick: s,
                        onKeyPress: u,
                        css: Object(j.a)((t = {
                            fontSize: 14,
                            fontWeight: "bolder",
                            borderBottom: "1px solid ".concat(a.CHROME),
                            display: "flex",
                            alignItems: "center",
                            outline: "none",
                            padding: "20px 0 20px 10px",
                            cursor: "pointer",
                            "&:first-of-type": {
                                borderTop: "1px solid ".concat(a.CHROME)
                            }
                        }, Object(y.a)(t, c.ON_FOCUS_OR_HOVER, {
                            p: {
                                color: a.ORANGE_DARK
                            },
                            svg: {
                                color: a.ORANGE_DARK
                            }
                        }), Object(y.a)(t, i.ONLY_MOBILE, {
                            padding: "10px 0 10px 10px"
                        }), t), "")
                    }, Object(I.b)(ho.a, {
                        width: 24,
                        height: 40
                    }), Object(I.b)("p", {
                        css: vo
                    }, Object(mo.a)(n)), Object(I.b)(Oo.a, {
                        width: 16,
                        height: 16,
                        color: a.CHROME,
                        css: yo
                    }))
                }));
            jo.displayName = "Contract";
            E.a.createElement;
            var go = {
                    name: "1macxe8",
                    styles: "width:100%;max-width:450px;padding:0 20px;"
                },
                Eo = {
                    name: "1nbic85",
                    styles: "width:150px;"
                },
                So = E.a.memo((function() {
                    var e = Object(S.useTheme)().bp,
                        t = Object(T.b)(),
                        n = t.contracts,
                        r = t.dispatch,
                        a = t.offerType,
                        c = t.processType,
                        i = he(a, c),
                        o = i.currentContracts,
                        s = i.numberOfContracts;
                    E.a.useEffect((function() {
                        o && 1 === s && r({
                            type: "setAutorizationData",
                            payload: {
                                phoneNumber: o[0].number,
                                isUserAuthenticated: !0
                            }
                        })
                    }), [n, r, o, s]);
                    var u = E.a.useMemo((function() {
                            return Array.from(new Set(n && n.filter((function(e) {
                                return e.offerType === a && e.processType === c
                            })).map((function(e) {
                                return e.accountCode
                            }))))
                        }), [n, a, c]),
                        l = E.a.useCallback((function() {
                            r({
                                type: "goToProcesses"
                            })
                        }), [r]);
                    return 1 === s ? null : s < 1 ? Object(I.b)("div", {
                        css: go
                    }, Object(I.b)("p", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 40
                        }, e.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, "Aktualnie nie posiadasz numer\xf3w, dla kt\xf3rych mo\u017cesz przed\u0142u\u017cy\u0107 umow\u0119."), Object(I.b)("p", null, Object(I.b)(S.Button, {
                        type: "button",
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: l,
                        css: Eo
                    }, "Wstecz"))) : Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            width: "100%",
                            maxWidth: 450
                        }, e.ONLY_TABLET, {
                            paddingTop: 40
                        }), "")
                    }, Object(I.b)(S.CustomScroll, {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            maxHeight: 450
                        }, e.FROM_DESKTOP, {
                            paddingRight: 50
                        }), "")
                    }, u.map((function(t) {
                        return Object(I.b)("div", {
                            key: t,
                            css: Object(j.a)(Object(y.a)({
                                padding: "0 20px"
                            }, e.FROM_TABLET, {
                                padding: "0 10px"
                            }), "")
                        }, Object(I.b)("strong", null, "Konto mobilne nr ", t), Object(I.b)("ul", {
                            css: Object(j.a)(Object(y.a)({
                                padding: "15px 0 30px 0"
                            }, e.FROM_TABLET, {
                                paddingTop: 20
                            }), "")
                        }, n && n.filter((function(e) {
                            return e.accountCode === t && e.offerType === a
                        })).map((function(e) {
                            return Object(I.b)(jo, {
                                key: e.number,
                                phoneNumber: e.number
                            })
                        }))))
                    }))))
                }));
            So.displayName = "Main";
            E.a.createElement;
            var To = function(e) {
                    return Object(I.b)("svg", Object(R.a)({}, e, {
                        viewBox: "0 0 392.3 391.2"
                    }), Object(I.b)("path", {
                        fill: "#FFD200",
                        d: "M196.2,0c108.3,0,196.2,87.6,196.2,195.6s-87.8,195.6-196.2,195.6S0,303.6,0,195.6S87.8,0,196.2,0z"
                    }), Object(I.b)("path", {
                        fill: "#FFB400",
                        className: "st1",
                        d: "M188.3,286.2c1.1-1.4,0.4-3.4-1.4-3.4h-10H167c-1.8,0-2.5,1.8-1.4,3.4l7.4,10.7v5.7c0,2.2,1.8,4,4,4 c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,4.4,3.5,7.9,7.9,7.9c4.4,0,7.9-3.5,7.9-7.9 c0-2.9-1.6-5.5-4-6.9v-6.8L188.3,286.2z"
                    }), Object(I.b)("path", {
                        fill: "#FFB400",
                        d: "M184.9,193h-1.1l-75.5-27.6l0,0c-0.2-0.1-0.4-0.1-0.7-0.1h-2h-4H85.8h-4h-2c-0.5,0-1,0.2-1.4,0.6l-27.7,27.7 c-0.4,0.4-0.6,0.9-0.6,1.4v11.9c0,1.1,0.9,2,2,2h25.8v137h0v5.9c4.8,3.6,9.7,7,14.7,10.1l9-7.5v11.4h-2.6c3.4,2,7,3.8,10.5,5.6 v-32.6h0V208.8H169v70h4v-70h7.9v70h4v-70c4.4,0,7.9-3.5,7.9-7.9C192.8,196.5,189.3,193,184.9,193z M77.9,193h-21l21-21V193z M85.8,173.2h13.6l-13.6,11.4V173.2z M85.8,208.8h13.6l-13.6,11.4V208.8z M85.8,236.5h13.6l-13.6,11.4V236.5z M85.8,264.3h13.6 l-13.6,11.4V264.3z M85.8,291.7h13.6l-13.6,11.4V291.7z M85.8,318.8h13.6l-13.6,11.4V318.8z M85.8,357.2v-11.4h13.6L85.8,357.2z M101.7,338.6H88.1l13.6-11.4V338.6z M101.7,311.5H88.1l13.6-11.4V311.5z M101.7,284.1H88.1l13.6-11.4V284.1z M101.7,256.4H88.1 l13.6-11.4V256.4z M101.7,228.6H88.1l13.6-11.4V228.6z M101.7,193H88.1l13.6-11.4V193z M109.6,193V170l62.6,22.9H109.6z"
                    }), Object(I.b)("path", {
                        d: "M270.6,66.9c-0.6-0.6-1.4-0.9-2.2-0.9h-3.2h-6.3h-25.3h-6.3h-3.2c-0.4,0-0.7,0.1-1.1,0.2l0,0l-120.3,44H101 c-7,0-12.6,5.7-12.6,12.6c0,7,5.7,12.6,12.6,12.6V247h6.3V135.4H120V247h6.3V135.4H221v206.8h0v47.4c7.8-1,15.5-2.4,23-4.3h-10.3 v-18.1l18.9,15.7c6.5-1.9,12.8-4.2,19-6.8v-22.5h0V135.4h41c1.7,0,3.2-1.4,3.2-3.2v-18.9c0-0.9-0.4-1.7-0.9-2.2L270.6,66.9z M221,110.2h-99.8L221,73.7V110.2z M233.6,92.1l21.7,18.1h-21.7V92.1z M233.6,148.9l21.7,18.1h-21.7V148.9z M233.6,193.1l21.7,18.1 h-21.7V193.1z M233.6,237.3l21.7,18.1h-21.7V237.3z M233.6,281.1l21.7,18.1h-21.7V281.1z M233.6,324.2l21.7,18.1h-21.7V324.2z M258.9,371.9l-21.7-18.1h21.7V371.9z M258.9,328.8l-21.7-18.1h21.7V328.8z M258.9,285.7l-21.7-18.1h21.7V285.7z M258.9,241.9 l-21.7-18.1h21.7V241.9z M258.9,197.7l-21.7-18.1h21.7V197.7z M258.9,153.5l-21.7-18.1h21.7V153.5z M258.9,96.7l-21.7-18.1h21.7 V96.7z M271.5,110.2V76.8l33.4,33.4H271.5z"
                    }), Object(I.b)("path", {
                        d: "M129.5,253.3h-15.9H97.8c-2.8,0-4,3.2-2.3,5.4l11.8,17v10.8c-3.8,2.2-6.3,6.3-6.3,10.9c0,7,5.7,12.6,12.6,12.6 s12.6-5.7,12.6-12.6c0-1.7-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2c0,3.5-2.8,6.3-6.3,6.3s-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 c3.5,0,6.3-2.8,6.3-6.3v-9.1l11.8-17.1C133.5,256.2,132.4,253.3,129.5,253.3z"
                    }))
                },
                Co = (E.a.createElement, function() {
                    var e, t = Object(S.useTheme)().bp;
                    return Object(I.b)(To, {
                        css: Object(j.a)((e = {
                            height: 140,
                            width: 140,
                            marginBottom: 30
                        }, Object(y.a)(e, t.ONLY_MOBILE, {
                            display: "flex",
                            margin: "auto",
                            marginTop: 20
                        }), Object(y.a)(e, t.FROM_TABLET, {
                            height: 269,
                            width: 269
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            height: 399,
                            width: 399
                        }), e), "")
                    })
                }),
                wo = function(e) {
                    return {
                        action: "CALL_ME_BACK",
                        id: "1",
                        title: "",
                        type: "BUTTON",
                        variant: "PRIMARY_ON_WHITE",
                        text: "Zam\xf3w rozmow\u0119",
                        params: "B2C" === e ? {
                            queue: "SALES_C_KONTAKT_B2C_CALLBACK",
                            personalScenario: "kontakt_b2c",
                            description: "Zam\xf3w rozmow\u0119 na stronie Kontakt dla klient\xf3w indywidualnych",
                            profile: ""
                        } : {
                            queue: "SALES_C_ENERGIA_B2B_KONTAKT_CALLBACK",
                            personalScenario: "kontakt_b2b",
                            description: "Zam\xf3w rozmow\u0119 na stronie Kontakt dla klient\xf3w biznesowych",
                            profile: ""
                        }
                    }
                };
            E.a.createElement;
            var xo = {
                    name: "x74n1h",
                    styles: "margin-top:60px;display:inline;"
                },
                ko = E.a.memo((function() {
                    var e = Object(N.b)().market,
                        t = Object(S.useTheme)().bp;
                    return Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({}, t.ONLY_MOBILE, {
                            padding: 20,
                            marginTop: 10
                        }), "")
                    }, Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 24,
                            fontWeight: "bold"
                        }, t.FROM_DESKTOP, {
                            fontSize: 60
                        }), "")
                    }, "Przepraszamy", Object(I.b)("br", null), " za utrudnienia"), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            marginTop: 10
                        }, t.FROM_DESKTOP, {
                            fontSize: 18
                        }), "")
                    }, "Pracujemy nad ulepszeniem", Object(I.b)("br", null), " naszego serwisu"), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            marginTop: 20
                        }, t.FROM_DESKTOP, {
                            marginTop: 60
                        }), "")
                    }, Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            fontWeight: "bold",
                            marginBottom: 10
                        }, t.FROM_DESKTOP, {
                            fontSize: 16,
                            display: "inline",
                            marginRight: 10
                        }), "")
                    }, "Chcesz porozmawia\u0107 o ofercie?"), Object(I.b)("div", {
                        css: xo
                    }, Object(I.b)(br.a, {
                        wrapperCss: Object(y.a)({}, t.ONLY_MOBILE, {
                            width: "100%"
                        }),
                        action: wo(e)
                    }))))
                })),
                Po = (E.a.createElement, E.a.memo((function() {
                    return Object(k.a)() ? Object(I.b)(Co, null) : Object(I.b)(ko, null)
                }))),
                zo = (E.a.createElement, E.a.memo((function() {
                    return Object(k.a)() ? Object(I.b)(ko, null) : Object(I.b)(Co, null)
                }))),
                No = (E.a.createElement, function(e) {
                    var t = e.children,
                        n = Object(S.useTheme)().bp;
                    return Object(I.b)(E.a.Fragment, null, E.a.cloneElement(t, {
                        separatorCSS: Object(y.a)({}, n.FROM_TABLET, {
                            display: "none"
                        }),
                        wrapperCss: Object(y.a)({}, n.ONLY_TABLET, {
                            width: "100%",
                            height: "80vw",
                            flexDirection: "row",
                            minHeight: "60vh"
                        })
                    }))
                }),
                Ro = (E.a.createElement, E.a.memo((function() {
                    var e, t = Object(T.b)().currentOffersGroup,
                        n = Object(S.useTheme)().bp,
                        r = t && t.offers || [];
                    return Object(I.b)(ce, null, Object(I.b)("ul", {
                        css: Object(j.a)((e = {
                            width: "100%",
                            padding: "0 20px"
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: "0 0 20px 20px",
                            maxWidth: 400
                        }), Object(y.a)(e, n.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, r.map((function(e) {
                        return Object(I.b)(ue, {
                            key: e.id,
                            offer: e
                        })
                    }))))
                })));
            Ro.displayName = "Main";
            E.a.createElement;
            var Io = E.a.memo((function() {
                var e, t = Object(S.useTheme)().bp,
                    n = Object(T.b)().isB2B ? "Wybierz <br /> typ oferty" : "Stacjonarnie czy <br /> mobilnie?";
                return Object(I.b)("div", {
                    css: Object(j.a)(Object(y.a)({
                        padding: 20
                    }, t.FROM_DESKTOP, {
                        padding: 0
                    }), "")
                }, Object(I.b)("h2", {
                    css: Object(j.a)((e = {}, Object(y.a)(e, t.FROM_DESKTOP, {
                        maxWidth: 400,
                        fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                        lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                    }), Object(y.a)(e, t.FROM_LARGE_DESKTOP, {
                        fontSize: 60,
                        lineHeight: "62px"
                    }), e), ""),
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                }))
            }));
            Io.displayName = "Description";
            g.createElement;
            var Ao = g.memo((function(e) {
                return Object(I.b)("svg", Object(R.a)({
                    x: 0,
                    y: 0,
                    viewBox: "0 0 850 850",
                    xmlSpace: "preserve",
                    width: "1em",
                    height: "1em"
                }, e), Object(I.b)("path", {
                    d: "M730 495.1L443.1 219.3c-9.6-9.2-24.8-9.2-34.4 0L121.9 495.1c-4.9 4.7-7.6 11.1-7.6 17.9v264.3c0 13.7 11.1 24.8 24.8 24.8H357V562.4h140.8v239.7h214.9c13.7 0 24.8-11.1 24.8-24.8V513c.1-6.8-2.7-13.2-7.5-17.9z"
                }), Object(I.b)("path", {
                    d: "M834.4 413.3l-96.8-90.6V47.9H595.7v142.2L469.5 72c-23.8-22.2-61.2-22.3-85-.2L15.7 413.3c-14.9 13.8-15.8 37-2 51.9L29 481.7c13.8 14.9 37.1 15.8 51.9 2l320.8-297c14.1-13.1 36-13 50.1.1l317.1 296.6c14.8 13.9 38.1 13.1 52-1.7l15.3-16.3c13.8-15 13-38.2-1.8-52.1z"
                }))
            }));
            Ao.displayName = "Home3Icon";
            var _o = function(e) {
                    return e.toLowerCase().replace(/(?:^|\s|-)\S/g, (function(e) {
                        return e.toUpperCase()
                    }))
                },
                Lo = {
                    NEOI0000: K.a,
                    TRPL0000: q.a
                },
                Mo = {
                    NEOI0000: "Internet domowy",
                    TRPL0000: "Internet domowy z telewizj\u0105"
                },
                Do = (E.a.createElement, function(e) {
                    var t = e.addressData,
                        n = e.mainService,
                        r = e.onSelect,
                        a = E.a.useCallback((function(e) {
                            "Enter" === e.key && r()
                        }), [r]),
                        c = _o(t.line1),
                        i = _o(t.town),
                        o = t.line2,
                        s = t.appartmentNo,
                        u = "".concat(t.preZipCode, "-").concat(t.postalCode),
                        l = "".concat(c, " ").concat(o).concat(s ? "/".concat(s) : "", "\n  ").concat(u, " ").concat(i);
                    return Object(I.b)(S.ActionListItem, {
                        title: l,
                        description: Mo[n.serviceId],
                        icon: Lo[n.serviceId],
                        hasBadge: !1,
                        onClick: r,
                        onKeyPress: a
                    })
                }),
                Bo = (E.a.createElement, E.a.createContext(null)),
                Fo = function(e) {
                    var t = e.servicesStepData,
                        n = Object(L.a)(e, ["servicesStepData"]);
                    return Object(I.b)(Bo.Provider, Object(R.a)({
                        value: t
                    }, n))
                };
            Fo.displayName = "ServicesStepContextProvider";
            var Vo = function() {
                var e = E.a.useContext(Bo);
                if (null === e) throw Error("useServicesStepContext: Please provide ServicesStepContext value.");
                return e
            };
            E.a.createElement;
            var Uo = {
                    name: "qx31uo",
                    styles: "margin:50px auto;"
                },
                Ho = E.a.memo((function() {
                    var e, t = Object(S.useTheme)().bp,
                        n = Vo(),
                        r = n.services,
                        a = n.isLoading,
                        c = n.setNewAddress,
                        i = n.onSelect,
                        o = Object(T.b)(),
                        s = o.currentProcess,
                        u = o.isB2B,
                        l = E.a.useCallback((function(e) {
                            "Enter" === e.key && c()
                        }), [c]);
                    return a ? Object(I.b)(S.Loader, {
                        css: Uo
                    }) : Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            width: "100%",
                            maxWidth: 450
                        }, t.ONLY_TABLET, {
                            padding: "40px 0"
                        }), "")
                    }, Object(I.b)(S.CustomScroll, {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            maxHeight: 450
                        }, t.FROM_DESKTOP, {
                            paddingRight: 50
                        }), "")
                    }, Object(I.b)(S.ActionList, {
                        css: Object(j.a)((e = {
                            maxWidth: 400,
                            padding: 20
                        }, Object(y.a)(e, t.FROM_TABLET, {
                            padding: "0 0 30px 20px"
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, r && r.map((function(e, t) {
                        return Object(I.b)(Do, {
                            key: t,
                            addressData: e.addressData,
                            mainService: e.mainService,
                            onSelect: function() {
                                return i(s, e.mainService, e.addressData)
                            }
                        })
                    })), Object(I.b)(S.ActionListItem, {
                        title: u ? "Chc\u0119 mie\u0107 internet w nowym miejscu" : "W nowym miejscu",
                        icon: Ao,
                        hasBadge: !1,
                        onClick: c,
                        onKeyPress: l
                    }))))
                }));
            E.a.createElement;
            var Go = {
                    name: "1ruxp1v",
                    styles: "padding:20px;"
                },
                Wo = E.a.memo((function() {
                    var e, t = Object(S.useTheme)().bp,
                        n = Vo().isLoading,
                        r = Object(T.b)().isB2B;
                    return n ? Object(I.b)("h2", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 32,
                            lineHeight: "34px",
                            padding: 20
                        }, t.ONLY_TABLET, {
                            display: "none"
                        }), "")
                    }, "Chwileczk\u0119...") : Object(I.b)("div", {
                        css: Go
                    }, Object(I.b)("h2", {
                        css: Object(j.a)((e = {}, Object(y.a)(e, t.FROM_DESKTOP, {
                            fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                            lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                        }), Object(y.a)(e, t.FROM_LARGE_DESKTOP, {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), "")
                    }, r ? "Wybierz lokalizacj\u0119, dla kt\xf3rej chcesz otrzyma\u0107 ofert\u0119" : "Gdzie chcesz korzysta\u0107 z nowej oferty internetu?"))
                })),
                Ko = n("com9"),
                qo = function() {
                    var e, t;
                    return Re.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, Re.a.awrap(Object(kt.b)());
                            case 2:
                                return e = n.sent, n.next = 5, Re.a.awrap(Ko.a.get("/hapi/fbbServices/fixAddressWithServices", {
                                    headers: {
                                        csrftoken: e
                                    }
                                }));
                            case 5:
                                return t = n.sent, n.abrupt("return", t.data);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                Yo = function(e) {
                    var t, n, r, a;
                    return Re.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.designationNumber, n = e.serviceInstanceId, c.next = 3, Re.a.awrap(Object(kt.b)());
                            case 3:
                                return r = c.sent, c.next = 6, Re.a.awrap(Ko.a.post("hapi/fbbServices/serviceData", hr.a.stringify({
                                    designationNumber: t,
                                    serviceInstanceId: n
                                }), {
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 6:
                                return a = c.sent, c.abrupt("return", a.data);
                            case 8:
                            case "end":
                                return c.stop()
                        }
                    }), null, null, null, Promise)
                },
                Xo = function(e) {
                    var t, n, r, a;
                    return Re.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.componentPk, n = e.serviceInstanceId, c.next = 3, Re.a.awrap(Object(kt.b)());
                            case 3:
                                return r = c.sent, c.next = 6, Re.a.awrap(Ko.a.get("/hapi/pwa/v2/api/fix/migration/processes", {
                                    params: {
                                        componentPk: t,
                                        serviceInstanceId: n
                                    },
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 6:
                                return a = c.sent, c.abrupt("return", a.data);
                            case 8:
                            case "end":
                                return c.stop()
                        }
                    }), null, null, null, Promise)
                },
                Jo = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children,
                        n = Object(S.useTheme)().bp,
                        r = function() {
                            var e = E.a.useState(null),
                                t = Object(C.a)(e, 2),
                                n = t[0],
                                r = t[1],
                                a = E.a.useState(!1),
                                c = Object(C.a)(a, 2),
                                i = c[0],
                                o = c[1],
                                s = Object(T.b)(),
                                u = s.dispatch,
                                l = s.currentOffer,
                                d = s.currentStep,
                                p = s.isUserLogged,
                                f = s.offerType,
                                b = s.processType,
                                O = Object(V.c)().enableCBSRedirectForWarsaw,
                                h = Object(N.b)().market,
                                m = Object(V.c)().corazoneSkipRedirect,
                                v = E.a.useCallback((function() {
                                    u({
                                        type: "goToLocation"
                                    })
                                }), [u]);
                            return E.a.useEffect((function() {
                                ! function() {
                                    var e, t;
                                    Re.a.async((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return o(!0), n.prev = 1, n.next = 4, Re.a.awrap(qo());
                                            case 4:
                                                if ((e = n.sent).fixAddressWithServices) {
                                                    n.next = 9;
                                                    break
                                                }
                                                return o(!1), v(), n.abrupt("return");
                                            case 9:
                                                t = e.fixAddressWithServices.map((function(e) {
                                                    return e.serviceBundles.map((function(t) {
                                                        return {
                                                            addressData: e.addressData,
                                                            mainService: t.mainService
                                                        }
                                                    }))
                                                })).flat(), r(t), o(!1), n.next = 17;
                                                break;
                                            case 14:
                                                n.prev = 14, n.t0 = n.catch(1), u({
                                                    type: "setProcessError",
                                                    payload: {
                                                        type: "NO_SERVICES"
                                                    }
                                                });
                                            case 17:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), null, null, [
                                        [1, 14]
                                    ], Promise)
                                }()
                            }), [u, v]), {
                                onSelect: E.a.useCallback((function(e, t, n) {
                                    var r, a;
                                    return Re.a.async((function(c) {
                                        for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                if (e && e.processGroupId && l) {
                                                    c.next = 2;
                                                    break
                                                }
                                                return c.abrupt("return");
                                            case 2:
                                                if (o(!0), !O || m) {
                                                    c.next = 11;
                                                    break
                                                }
                                                return c.next = 6, Re.a.awrap(Object(We.i)({
                                                    componentUid: l.configComponentPk,
                                                    processType: l.type,
                                                    leadAddressForm: {
                                                        apartmentNo: n.appartmentNo || "",
                                                        cbsIdCity: parseInt(n.cityId, 10),
                                                        cbsIdStreet: parseInt(n.streetId, 10),
                                                        city: _o(n.town),
                                                        roadNo: _o(n.line2),
                                                        street: _o(n.line1)
                                                    }
                                                }));
                                            case 6:
                                                if (!(r = c.sent).doRedirect || !r.redirectUrl || "91189" !== n.cityId || m) {
                                                    c.next = 11;
                                                    break
                                                }
                                                return Object(re.c)(d, f, h, p, window.location.pathname, "WARSAW_PROCESS", b), window.location.href = r.redirectUrl, c.abrupt("return");
                                            case 11:
                                                return c.next = 13, Re.a.awrap(Yo({
                                                    serviceInstanceId: t.cfServiceInstanceId,
                                                    designationNumber: t.designationNumber
                                                }));
                                            case 13:
                                                return c.prev = 13, c.next = 16, Re.a.awrap(Xo({
                                                    componentPk: e.processGroupId,
                                                    serviceInstanceId: t.cfServiceInstanceId
                                                }));
                                            case 16:
                                                a = c.sent, u({
                                                    type: "setLocalizationData",
                                                    payload: {
                                                        apartmentNo: n.appartmentNo || "",
                                                        cbsIdCity: parseInt(n.cityId, 10),
                                                        cbsIdStreet: parseInt(n.streetId, 10),
                                                        city: _o(n.town),
                                                        roadNo: _o(n.line2),
                                                        street: _o(n.line1)
                                                    }
                                                }), u({
                                                    type: "setCurrentServiceName",
                                                    payload: Mo[t.serviceId]
                                                }), u({
                                                    type: "setFixMigrationProcesses",
                                                    payload: a
                                                }), u({
                                                    type: "goToFixProcesses"
                                                }), c.next = 26;
                                                break;
                                            case 23:
                                                c.prev = 23, c.t0 = c.catch(13), u({
                                                    type: "setProcessError",
                                                    payload: {
                                                        type: "NO_SERVICES"
                                                    }
                                                });
                                            case 26:
                                            case "end":
                                                return c.stop()
                                        }
                                    }), null, null, [
                                        [13, 23]
                                    ], Promise)
                                }), [m, l, d, u, O, p, h, f, b]),
                                services: n,
                                isLoading: i,
                                setNewAddress: v
                            }
                        }();
                    return Object(I.b)(Fo, {
                        servicesStepData: r
                    }, E.a.cloneElement(t, {
                        separatorCSS: Object(y.a)({}, n.ONLY_TABLET, {
                            display: "none"
                        })
                    }))
                })));
            Jo.displayName = "Container";
            E.a.createElement;
            var Zo = E.a.memo((function(e) {
                    var t = Object(T.b)().dispatch,
                        n = E.a.useCallback((function() {
                            t({
                                type: "setCurrentSingleOffer",
                                payload: null
                            }), t({
                                type: "setSingleOffers",
                                payload: []
                            }), t({
                                type: "setCurrentFixMigrationProcessType",
                                payload: e.type
                            }), t({
                                type: "goToSingleOffer"
                            })
                        }), [t, e.type]),
                        r = E.a.useCallback((function(e) {
                            "Enter" === e.key && n()
                        }), [n]);
                    return Object(I.b)(S.ActionListItem, {
                        id: e.type,
                        key: e.type,
                        title: e.name || "",
                        icon: ne[e.iconType] || Y.a,
                        onClick: n,
                        onKeyPress: r,
                        hasBadge: !1
                    })
                })),
                Qo = (E.a.createElement, function() {
                    var e, t = Object(T.b)().fixMigrationProcesses,
                        n = Object(S.useTheme)().bp;
                    return t ? Object(I.b)(S.ActionList, {
                        css: Object(j.a)((e = {
                            maxWidth: 400,
                            padding: 20
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: "0 0 30px 20px"
                        }), Object(y.a)(e, n.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, t.map((function(e, t) {
                        return Object(I.b)(Zo, Object(R.a)({
                            key: "".concat(e.name, "-").concat(t)
                        }, e))
                    }))) : null
                });
            E.a.createElement;
            var $o = {
                    name: "13o7eu2",
                    styles: "display:block;"
                },
                es = {
                    name: "1692iwy",
                    styles: "font-weight:bold;font-size:14px;"
                },
                ts = function() {
                    var e, t, n = Object(S.useTheme)().bp,
                        r = Object(T.b)(),
                        a = r.dispatch,
                        c = r.localizationData,
                        i = r.currentServiceName,
                        o = r.isB2B,
                        s = function() {
                            var e = Object(T.b)().localizationData;
                            if (!e) return {
                                address: ""
                            };
                            var t = _o(e.street),
                                n = _o(e.city);
                            return {
                                address: "".concat(t, " ").concat(e.roadNo).concat(e.apartmentNo ? "/".concat(e.apartmentNo) : "", ", ").concat(n)
                            }
                        }().address;
                    return Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            padding: 20
                        }, n.FROM_DESKTOP, {
                            padding: 0,
                            maxWidth: 400
                        }), "")
                    }, Object(I.b)("h2", {
                        css: Object(j.a)((e = {}, Object(y.a)(e, n.FROM_DESKTOP, {
                            fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                            lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                        }), Object(y.a)(e, n.FROM_LARGE_DESKTOP, {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), "")
                    }, o ? "Co chcesz zrobi\u0107?" : "Czy chcesz zmieni\u0107 internet pod tym adresem?"), c && Object(I.b)(E.a.Fragment, null, Object(I.b)("p", {
                        css: Object(j.a)((t = {
                            fontSize: 14,
                            lineHeight: "20px",
                            margin: "10px 0 15px"
                        }, Object(y.a)(t, n.FROM_TABLET, {
                            margin: "5px 0 20px"
                        }), Object(y.a)(t, n.FROM_DESKTOP, {
                            margin: "10px 0 20px"
                        }), t), "")
                    }, Object(I.b)("strong", {
                        css: $o
                    }, i), Object(I.b)("span", null, s)), Object(I.b)(S.AButton, {
                        variant: "ON_LIGHT_BACKGROUND",
                        onClick: function() {
                            a({
                                type: "goToServices"
                            })
                        },
                        css: es
                    }, "Zmie\u0144")))
                };
            E.a.createElement;
            var ns = {
                    name: "17k2aqg",
                    styles: "font-size:12px;font-weight:bold;text-align:center;"
                },
                rs = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                as = {
                    name: "4jmhch",
                    styles: "font-size:14px;font-weight:bold;text-decoration:line-through;padding:0 5px;"
                },
                cs = {
                    name: "540lu8",
                    styles: "width:14px;height:14px;"
                },
                is = function(e) {
                    var t = e.title,
                        n = e.description,
                        r = e.currentInternet,
                        a = e.tooltip,
                        c = e.type,
                        i = void 0 === c ? "TEXT" : c,
                        o = e.icon,
                        s = Object(S.useTheme)(),
                        u = s.bp,
                        l = s.colors,
                        d = o;
                    return Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "0 10px",
                            flex: " 0 1 40%"
                        }, u.ONLY_SMALL_MOBILE, {
                            padding: 0,
                            maxWidth: "40vw"
                        }), "")
                    }, Object(I.b)("p", {
                        css: ns
                    }, t), Object(I.b)(d, {
                        width: 38,
                        height: 38
                    }), Object(I.b)("div", {
                        css: rs
                    }, Object(I.b)("span", {
                        css: Object(j.a)({
                            color: l.ORANGE_LIGHT,
                            fontSize: 14,
                            fontWeight: "bold",
                            display: "inline-block",
                            minWidth: 40,
                            whiteSpace: "nowrap"
                        }, "")
                    }, "INTERNET" === i ? Object(I.b)(S.Swapper, null, n, " ") : n), r && Object(I.b)(E.a.Fragment, null, Object(I.b)("span", {
                        css: as
                    }, r, " "), Object(I.b)(_n.a, {
                        content: a
                    }, Object(I.b)("span", null, Object(I.b)(An.a, {
                        css: cs
                    }))))))
                };
            E.a.createElement;
            var os = {
                    name: "1ti0hun",
                    styles: "font-size:18px;margin-top:20px;line-height:normal;"
                },
                ss = function(e) {
                    var t = e.children;
                    return Object(I.b)("h2", {
                        css: os
                    }, t)
                };
            E.a.createElement;
            var us = {
                    name: "1gmlwp",
                    styles: "display:flex;align-items:center;justify-content:space-around;margin:20px 0;"
                },
                ls = E.a.memo((function(e) {
                    var t = e.currentVariant,
                        n = e.currentInternet,
                        r = e.internetName,
                        a = Object(S.useTheme)().colors;
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)(ss, null, Object(I.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: t.title
                        },
                        css: Object(j.a)({
                            strong: {
                                color: a.ORANGE_DARK
                            }
                        }, "")
                    })), Object(I.b)("div", {
                        css: us
                    }, Object(I.b)(is, {
                        title: "Tw\xf3j obecny abonament",
                        description: t.internet,
                        currentInternet: n,
                        tooltip: t.tooltip,
                        type: "INTERNET",
                        icon: G.a
                    }), Object(I.b)(tr.a, {
                        color: a.ORANGE_LIGHT,
                        width: 16,
                        height: 16
                    }), Object(I.b)(is, {
                        title: r,
                        description: "Bez limitu",
                        icon: K.a
                    })))
                })),
                ds = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children;
                    return Object(I.b)(E.a.Fragment, null, t)
                })));
            E.a.createElement;
            var ps = {
                    name: "f07i4q",
                    styles: "display:flex;margin:10px 0 20px;"
                },
                fs = {
                    name: "1l7mgse",
                    styles: "font-weight:normal;"
                },
                bs = E.a.memo((function(e) {
                    var t = e.currentVariant,
                        n = e.onChange;
                    return Object(I.b)("div", {
                        css: ps
                    }, t.elements.map((function(e) {
                        return Object(I.b)(S.Toggle, {
                            key: e.id,
                            value: e.id,
                            checked: t.id === e.id,
                            onChange: n,
                            wrapperCss: {
                                textAlign: "center",
                                marginRight: 10,
                                ":last-of-type": {
                                    marginRight: 0
                                }
                            }
                        }, Object(I.b)("span", null, e.internet), Object(I.b)("span", {
                            css: fs
                        }, e.price))
                    })))
                }));
            E.a.createElement;
            var Os = {
                    name: "1gtey1t",
                    styles: "font-size:14px;margin:0;"
                },
                hs = {
                    name: "1baulvz",
                    styles: "display:inline-block;"
                },
                ms = {
                    name: "6xix1i",
                    styles: "font-size:16px;"
                },
                vs = function(e) {
                    var t = e.promotion,
                        n = e.totalPrice,
                        r = Object(S.useTheme)().colors;
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)("p", {
                        dangerouslySetInnerHTML: {
                            __html: t
                        },
                        css: Os
                    }), Object(I.b)("div", {
                        css: Object(j.a)({
                            fontSize: 30,
                            fontWeight: "bold",
                            color: r.ORANGE_DARK,
                            margin: "10px 0 20px"
                        }, "")
                    }, Object(I.b)("span", {
                        css: hs
                    }, Object(I.b)(S.Swapper, null, n)), Object(I.b)("span", {
                        css: ms
                    }, " z\u0142/mies.")))
                };
            E.a.createElement;
            var ys = {
                    name: "1wcba0h",
                    styles: "display:flex;margin-top:20px;"
                },
                js = {
                    name: "6su6fj",
                    styles: "flex-shrink:0;"
                },
                gs = {
                    name: "15ykpn6",
                    styles: "font-size:12px;margin:0 0 0 5px;"
                },
                Es = E.a.memo((function(e) {
                    var t = e.legal,
                        n = Object(S.useTheme)().colors,
                        r = Object(T.b)(),
                        a = r.currentStep,
                        c = r.isUserLogged,
                        i = r.offerType,
                        o = r.processType,
                        s = Object(N.b)().market;
                    return Object(I.b)(E.a.Fragment, null, Object(I.b)("div", {
                        css: ys
                    }, Object(I.b)(wt.a, {
                        width: 16,
                        height: 16,
                        color: n.INFO,
                        css: js
                    }), Object(I.b)("p", {
                        css: gs
                    }, t)), Object(I.b)(br.a, {
                        wrapperCss: {
                            width: "100%",
                            margin: "20px 0"
                        },
                        action: {
                            action: "CALL_ME_BACK",
                            text: "Zadzwo\u0144cie do mnie",
                            title: "Zadzwo\u0144cie do mnie",
                            type: "BUTTON",
                            variant: "PRIMARY_ON_WHITE",
                            id: "upsell_cmb",
                            params: {
                                queue: "SALES_C_MOJORANGE_CALLBACK",
                                description: "Klient w aplikacji MO przegl\u0105da\u0142 ofert\u0119 Love 2U",
                                personalScenario: "LOVE_2U_MO",
                                profile: ""
                            }
                        },
                        onClick: function() {
                            Object(re.c)(a, i, s, c, window.location.pathname, "SEND_CMB", o)
                        }
                    }))
                }));
            E.a.createElement;
            var Ss = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                Ts = E.a.memo((function() {
                    var e, t, n, r = Object(T.b)(),
                        a = r.currentUpsellOffer,
                        c = r.enhance,
                        i = r.offerType,
                        o = E.a.useCallback((function() {
                            return a ? a.view : c ? null === (e = c.config.find((function(e) {
                                return e.offer.type === i
                            }))) || void 0 === e ? void 0 : e.view : void 0;
                            var e
                        }), [a, c, i]),
                        s = null === (e = o()) || void 0 === e ? void 0 : e.variants.find((function(e) {
                            return e.isSelected
                        })),
                        u = E.a.useState(s),
                        l = Object(C.a)(u, 2),
                        d = l[0],
                        p = l[1],
                        f = E.a.useCallback((function(e) {
                            var t, n = null === (t = o()) || void 0 === t ? void 0 : t.variants.find((function(t) {
                                return t.id === e.target.value
                            }));
                            p(n)
                        }), [o]);
                    return d ? Object(I.b)("div", {
                        css: Ss
                    }, Object(I.b)(ls, {
                        currentVariant: d,
                        currentInternet: null === (t = o()) || void 0 === t ? void 0 : t.currentInternet,
                        internetName: (null === (n = o()) || void 0 === n ? void 0 : n.internetName) || ""
                    }), Object(I.b)(S.Separator, null), Object(I.b)(ds, null, Object(I.b)(ss, null, "Wybierz liczb\u0119 GB w abonamencie kom\xf3rkowym"), Object(I.b)(bs, {
                        onChange: f,
                        currentVariant: d
                    }), Object(I.b)(ss, null, "Tw\xf3j pakiet Love za jedyne"), Object(I.b)(vs, {
                        promotion: d.promotion,
                        totalPrice: d.totalPrice
                    })), Object(I.b)(S.Separator, null), Object(I.b)(Es, {
                        legal: (null === a || void 0 === a ? void 0 : a.view.legal) || ""
                    })) : null
                })),
                Cs = E.a.memo((function() {
                    return null
                })),
                ws = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children,
                        n = Object(S.useTheme)().bp,
                        r = Object(T.b)(),
                        a = r.enhance,
                        c = r.dispatch;
                    return a || c({
                        type: "goToOffers"
                    }), Object(I.b)(E.a.Fragment, null, E.a.cloneElement(t, {
                        separatorCSS: Object(y.a)({}, n.ONLY_TABLET, {
                            display: "none"
                        })
                    }))
                }))),
                xs = n("KD1n"),
                ks = n("azwC"),
                Ps = n("rpJ/"),
                zs = n("AsJ6"),
                Ns = Object(Ps.a)({
                    id: "machine",
                    initial: "fetching",
                    context: {
                        accounts: [],
                        currentAccount: null,
                        defaultAccount: null
                    },
                    states: {
                        fetching: {
                            invoke: {
                                id: "fetchingAccounts",
                                src: We.j,
                                onDone: {
                                    target: "selecting",
                                    actions: Object(zs.b)({
                                        accounts: function(e, t) {
                                            return t.data
                                        }
                                    })
                                },
                                onError: {
                                    target: "error"
                                }
                            }
                        },
                        selecting: {
                            on: {
                                SEND_ACCOUNT: {
                                    target: "confirm"
                                },
                                SELECT_ACCOUNT: {
                                    actions: Object(zs.b)({
                                        currentAccount: function(e, t) {
                                            return t.account
                                        }
                                    })
                                }
                            }
                        },
                        sending: {
                            invoke: {
                                id: "sendAccount",
                                src: "accountsService",
                                onDone: {
                                    target: "done"
                                },
                                onError: {
                                    target: "error"
                                }
                            }
                        },
                        done: {
                            type: "final"
                        },
                        confirm: {
                            on: {
                                SEND_ACCOUNT: {
                                    target: "sending"
                                },
                                SELECT_ACCOUNT: {
                                    target: "selecting",
                                    actions: Object(zs.q)((function(e, t) {
                                        return {
                                            type: "SELECT_ACCOUNT",
                                            account: t.account
                                        }
                                    }))
                                }
                            }
                        },
                        error: {
                            on: {
                                SEND_ACCOUNT: {
                                    target: "sending"
                                },
                                SELECT_ACCOUNT: {
                                    target: "selecting",
                                    actions: Object(zs.q)((function(e, t) {
                                        return {
                                            type: "SELECT_ACCOUNT",
                                            account: t.account
                                        }
                                    }))
                                }
                            }
                        }
                    }
                });
            E.a.createElement;

            function Rs() {
                var e = Object(xs.a)(["\n0% {\n  opacity: 0;\n}\n20% {\n  opacity: 1;\n}\n100% {\n  opacity: 0;\n}\n"]);
                return Rs = function() {
                    return e
                }, e
            }
            var Is = Object(I.c)(Rs()),
                As = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                _s = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                Ls = {
                    name: "gg4vpm",
                    styles: "display:flex;justify-content:space-between;"
                },
                Ms = {
                    name: "1tdtlof",
                    styles: "flex-basis:48%;"
                },
                Ds = {
                    name: "1tdtlof",
                    styles: "flex-basis:48%;"
                },
                Bs = E.a.memo((function() {
                    var e = Object(S.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        r = Object(vt.c)().dispatch,
                        a = Object(T.b)(),
                        c = a.dispatch,
                        i = a.previousStep,
                        o = a.selectedAccount,
                        s = o ? {
                            accountCode: null === o || void 0 === o ? void 0 : o.code,
                            accountId: null === o || void 0 === o ? void 0 : o.id,
                            accountContracts: []
                        } : void 0,
                        u = Object(ks.useMachine)(Ns, {
                            context: {
                                defaultAccount: s,
                                currentAccount: s
                            },
                            services: {
                                accountsService: function(e) {
                                    var t, n, a, i;
                                    return Re.a.async((function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                if (!e.currentAccount) {
                                                    o.next = 12;
                                                    break
                                                }
                                                return t = e.currentAccount, n = t.accountId, a = t.accountCode, o.next = 4, Re.a.awrap(Object(mt.a)());
                                            case 4:
                                                return o.next = 6, Re.a.awrap(Object(We.l)({
                                                    id: n,
                                                    accountCode: a
                                                }));
                                            case 6:
                                                return o.next = 8, Re.a.awrap(Object(We.e)());
                                            case 8:
                                                i = o.sent, c({
                                                    type: "sendSelectedAccount",
                                                    payload: {
                                                        id: n,
                                                        code: a
                                                    }
                                                }), c({
                                                    type: "setContracts",
                                                    payload: i
                                                }), r({
                                                    type: "setCartItemsCount",
                                                    payload: 0
                                                });
                                            case 12:
                                            case "end":
                                                return o.stop()
                                        }
                                    }), null, null, null, Promise)
                                }
                            }
                        }),
                        l = Object(C.a)(u, 2),
                        d = l[0],
                        p = l[1],
                        f = d.context,
                        b = f.accounts,
                        O = f.currentAccount,
                        h = f.defaultAccount,
                        m = d.matches("done"),
                        v = d.matches("error"),
                        g = d.matches("fetching"),
                        w = d.matches("sending"),
                        x = d.matches("confirm"),
                        k = (null === h || void 0 === h ? void 0 : h.accountId) !== (null === O || void 0 === O ? void 0 : O.accountId) && !m,
                        P = {
                            OFFERS: function() {
                                return c({
                                    type: "goToOffers"
                                })
                            },
                            PROCESSES: function() {
                                return c({
                                    type: "goToProcesses"
                                })
                            },
                            SINGLE_OFFER: function() {
                                return c({
                                    type: "goToSingleOffer"
                                })
                            }
                        };
                    E.a.useEffect((function() {
                        if (m && O) {
                            var e = {
                                id: O.accountId,
                                code: O.accountCode
                            };
                            c({
                                type: "sendSelectedAccount",
                                payload: e
                            }), c({
                                type: "resetSelectedOffer"
                            }), c({
                                type: "resetSelectedProcess"
                            }), c({
                                type: "setCurrentSingleOffer",
                                payload: null
                            }), c({
                                type: "goToOffers"
                            })
                        }
                    }), [m, c, O]);
                    var z = E.a.useCallback((function() {
                            if (i) {
                                var e = P[i];
                                e && e()
                            }
                        }), [i, P]),
                        N = E.a.useCallback((function() {
                            p({
                                type: "SEND_ACCOUNT"
                            })
                        }), [p]),
                        R = E.a.useCallback((function(e) {
                            var t = e.target.value,
                                n = b.find((function(e) {
                                    return e.accountId === t
                                }));
                            p({
                                type: "SELECT_ACCOUNT",
                                account: n || {
                                    accountId: "",
                                    accountCode: "",
                                    accountContracts: []
                                }
                            })
                        }), [b, p]);
                    return g ? Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({}, t.TO_DESKTOP, {
                            maxWidth: 80,
                            margin: "0 auto",
                            marginTop: "25%"
                        }), "")
                    }, Object(I.b)(S.Loader, null)) : Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            width: "100%",
                            padding: "0 20px"
                        }, t.FROM_DESKTOP, {
                            padding: 0,
                            paddingBottom: 30,
                            maxWidth: 400,
                            marginTop: 60
                        }), "")
                    }, Object(I.b)("p", null, Object(I.b)("strong", null, "Lista Twoich kont:")), Object(I.b)("form", {
                        css: As
                    }, Object(I.b)(S.RadioGroup, {
                        name: "select_account",
                        onChange: R,
                        defaultValue: null === h || void 0 === h ? void 0 : h.accountId
                    }, b.map((function(e) {
                        return Object(I.b)(S.RadioOption, {
                            name: "konto",
                            key: e.accountId,
                            value: e.accountId,
                            wrapperCss: {
                                marginBottom: 20,
                                fontSize: 14
                            }
                        }, Object(I.b)("span", null, e.accountCode, Object(I.b)("br", null), Object(I.b)("span", {
                            css: _s
                        }, Fs(e.accountContracts))))
                    })), Object(I.b)(S.RadioOption, {
                        value: "",
                        name: "konto",
                        wrapperCss: {
                            marginBottom: 20,
                            fontSize: 14
                        }
                    }, "Stw\xf3rz nowe konto"))), x && Object(I.b)("p", {
                        css: Object(j.a)({
                            margin: 0,
                            padding: 0,
                            fontSize: 14,
                            marginBottom: 20,
                            color: n.DANGER
                        }, "")
                    }, Object(I.b)("strong", null, "Czy na pewno chcesz kontynuowa\u0107?")), w && Object(I.b)("strong", {
                        css: Object(j.a)(Object(y.a)({
                            fontSize: 14,
                            display: "block",
                            opacity: 1,
                            maxHeight: 20,
                            transition: "opacity .2s ease 1s, max-height .2s",
                            span: {
                                animation: "".concat(Is, " 1.2s ease infinite"),
                                ":nth-of-type(2)": {
                                    animationDelay: ".2s"
                                },
                                ":nth-of-type(3)": {
                                    animationDelay: ".4s"
                                }
                            }
                        }, t.FROM_TABLET, {
                            fontSize: 16,
                            margin: "15px 0"
                        }), "")
                    }, "Trwa zmiana konta", Object(I.b)("span", null, "."), Object(I.b)("span", null, "."), Object(I.b)("span", null, ".")), Object(I.b)("div", {
                        css: Ls
                    }, Object(I.b)(S.Button, {
                        onClick: z,
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: Ms
                    }, "Wstecz"), k && Object(I.b)(S.Button, {
                        variant: "PRIMARY_ON_BLACK",
                        onClick: N,
                        disabled: w,
                        css: Ds
                    }, "Dalej")), v && Object(I.b)("div", {
                        css: Object(j.a)({
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 20,
                            height: 16,
                            color: n.DANGER
                        }, "")
                    }, Object(I.b)("span", null, "Wystapi\u0142 b\u0142\u0105d podczas wyboru konta. Spr\xf3buj ponownie.")))
                })),
                Fs = function(e) {
                    return e.map((function(e) {
                        return e.serviceNumber.split(/(\d{3})/).join(" ").trim()
                    })).join(", ")
                };
            E.a.createElement;
            var Vs = {
                    name: "x9c4to",
                    styles: "padding:10px 20px 0 20px;"
                },
                Us = {
                    name: "yy7678",
                    styles: "@media (min-width: 1240px){font-size:60px;line-height:62px;}"
                },
                Hs = {
                    name: "vprdb1",
                    styles: "display:flex;align-items:center;margin-top:10px;"
                },
                Gs = function() {
                    var e, t = Object(S.useTheme)(),
                        n = t.bp,
                        r = t.colors;
                    return Object(I.b)("div", {
                        css: Vs
                    }, Object(I.b)("h2", {
                        css: Us
                    }, "Wybierz konto do kt\xf3rergo chcesz przypisa\u0107 nowy numer"), Object(I.b)("div", {
                        css: Hs
                    }, Object(I.b)(xt.a, {
                        color: r.ORANGE_LIGHT,
                        css: Object(j.a)(Object(y.a)({
                            width: 60,
                            height: 60,
                            marginRight: 15
                        }, n.ONLY_MOBILE, {
                            display: "none"
                        }), "")
                    }), Object(I.b)("p", {
                        css: Object(j.a)((e = {
                            margin: 0,
                            fontSize: 14
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            fontSize: 16
                        }), Object(y.a)(e, n.FROM_DESKTOP, {
                            fontSize: 18
                        }), e), "")
                    }, "Zmiana konta spowoduje wyrzucenie z koszyka dokonanych zakup\xf3w przypisanych do obecnego konta.")))
                },
                Ws = n("kyr1"),
                Ks = (g.createElement, g.memo((function(e) {
                    return Object(I.b)("svg", Object(R.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 1000 1000",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(I.b)("path", {
                        d: "M362.5 562.5V240.6c0-25 15.5-40.6 40.5-40.6 84.8 0 169.6 0 254.5-.1 3.6 0 6.1 1.1 8.7 3.6 47.5 47.7 95.1 95.3 142.8 142.8 2.6 2.6 3.6 5.1 3.6 8.7-.1 176.6-.1 353.3-.1 529.9 0 24.3-15.8 40-40 40H402.6c-24.3 0-40-15.7-40-40-.1-107.4-.1-214.9-.1-322.4zm274.6 187.3V525.3h-99.7v124.9H412.7v99.6h224.4zm25.6-.1h99.4v-99.4h-99.4v99.4zm-25.5 25.7h-99.4v99.4h99.4v-99.4zm25.6-250.3v99.5h99.6c0-25.5.2-50.7-.1-75.8-.1-12.5-10.4-23.3-22.8-23.6-25.4-.5-50.9-.1-76.7-.1zm-.1 349.9h73c16.4 0 26.7-10.4 26.8-26.9v-68c0-1.6-.1-3.2-.2-4.8h-99.5c-.1 33.3-.1 66.3-.1 99.7zM512.2 525h-73.3c-16.1 0-26.5 10.5-26.5 26.7v73.1h99.8V525zm-99.7 250.1v72.8c0 16.8 10.3 27.2 27 27.2h68c1.6 0 3.2-.1 4.6-.2v-99.7c-33.2-.1-66-.1-99.6-.1zM331.6 750h-67c-16.8 0-27.2-10.3-27.2-27v-68-5.1h99.7v-25.1h-99.4v-99.9H337v-25.1h-99.6V495v-68.5c0-16.1 10.5-26.5 26.7-26.5h73.3v-6.4-153.5c0-38.2 26.9-65.1 65.1-65.1h184.2c-.7-1.1-.9-1.5-1.2-1.9-32-32.1-64.1-64.1-96.2-96.1-1.3-1.3-3.8-2-5.7-2H226.1c-22.6 0-38.6 16.3-38.6 38.9v646.5c0 23.7 15.9 39.6 39.5 39.6h110.3v-50h-5.7z"
                    }))
                })));
            Ks.displayName = "SimMultiIcon";
            var qs = n("4lZg");
            E.a.createElement;
            var Ys = {
                    name: "6su6fj",
                    styles: "flex-shrink:0;"
                },
                Xs = {
                    name: "33o2tb",
                    styles: "font-size:14px;flex-shrink:1;margin:0;"
                },
                Js = {
                    name: "33o2tb",
                    styles: "font-size:14px;flex-shrink:1;margin:0;"
                },
                Zs = E.a.memo((function() {
                    var e, t = Object(S.useTheme)().bp,
                        n = Object(T.b)(),
                        r = n.dispatch,
                        a = n.clearCache,
                        c = n.shouldShowOfferDetails,
                        i = n.currentStep,
                        o = n.offerType,
                        s = n.isUserLogged,
                        u = n.processType,
                        l = n.isB2B,
                        d = Object(qs.b)().isPending,
                        p = Object(N.b)().market,
                        f = Object(k.a)();
                    return c && !f ? Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            width: "100%",
                            maxWidth: 400,
                            height: "100%"
                        }, t.ONLY_TABLET, {
                            padding: "0 20px"
                        }), "")
                    }, Object(I.b)(Aa, null)) : Object(I.b)(E.a.Fragment, null, Object(I.b)(fi, {
                        isVisible: c
                    }, Object(I.b)(Aa, null)), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            width: "100%",
                            maxWidth: 430,
                            padding: 20
                        }, t.FROM_TABLET, {
                            paddingTop: 0
                        }), "")
                    }, Object(I.b)("h2", {
                        css: Object(j.a)((e = {
                            fontSize: 24,
                            fontWeight: "bold",
                            margin: "10px 0",
                            lineHeight: "normal"
                        }, Object(y.a)(e, t.FROM_DESKTOP, {
                            fontSize: 40,
                            margin: "10px 0"
                        }), Object(y.a)(e, t.FROM_LARGE_DESKTOP, {
                            whiteSpace: "nowrap"
                        }), e), "")
                    }, "Dodaj kolejn\u0105 kart\u0119 SIM"), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            marginBottom: 30
                        }, t.FROM_DESKTOP, {
                            marginBottom: 60
                        }), "")
                    }, Object(I.b)(Ks, {
                        width: 48,
                        height: 48,
                        css: Ys
                    }), l ? Object(I.b)("p", {
                        css: Xs
                    }, "Kolejna karta ", Object(I.b)("strong", null, "ju\u017c od 25 z\u0142 + VAT/mies."), " oraz dodatkowe ", Object(I.b)("strong", null, "5 GB"), " za zakup na stronie orange.pl") : Object(I.b)("p", {
                        css: Js
                    }, "Ka\u017cda kolejna karta SIM ", Object(I.b)("strong", null, "tanej o 20 z\u0142/mies."), " oraz Pakiet danych ", Object(I.b)("strong", null, "3 GB "), " do wsp\xf3\u0142dzielenia na koncie.")), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column"
                        }, t.FROM_DESKTOP, {
                            flexDirection: "row"
                        }), "")
                    }, Object(I.b)(S.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: Object(j.a)(Object(y.a)({
                            whiteSpace: "nowrap",
                            marginBottom: 20
                        }, t.FROM_DESKTOP, {
                            flexGrow: 1,
                            flexShrink: 0,
                            flexBasis: "50%"
                        }), ""),
                        onClick: function() {
                            r({
                                type: "goToProcesses"
                            }), Object(re.c)(i, o, p, s, window.location.pathname, "ADD_NEW_SIM", u)
                        },
                        disabled: d
                    }, "Dodaj kolejn\u0105 kart\u0119"), Object(I.b)("div", {
                        css: Object(j.a)(Object(y.a)({
                            display: "none"
                        }, t.FROM_DESKTOP, {
                            display: "block",
                            flexBasis: "20px",
                            flexShrink: 0
                        }), "")
                    }), Object(I.b)(S.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: Object(j.a)(Object(y.a)({}, t.FROM_DESKTOP, {
                            flexGrow: 1,
                            flexShrink: 0,
                            flexBasis: "50%"
                        }), ""),
                        onClick: function() {
                            a(), window.location.assign("/koszyk/multi")
                        },
                        disabled: d
                    }, "Do Koszyka"))))
                }));
            Zs.displayName = "Main";
            var Qs = n("PImS"),
                $s = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children,
                        n = Object(S.useTheme)().bp,
                        r = function() {
                            var e, t, n = E.a.useState(),
                                r = Object(C.a)(n, 2),
                                a = r[0],
                                c = r[1],
                                i = E.a.useState(),
                                o = Object(C.a)(i, 2),
                                s = o[0],
                                u = o[1],
                                l = E.a.useState(!1),
                                d = Object(C.a)(l, 2),
                                p = d[0],
                                f = d[1],
                                b = Object(T.b)(),
                                O = b.showNetPrices,
                                h = b.dispatch,
                                m = b.isUserLogged,
                                v = E.a.useCallback((function() {
                                    var e;
                                    return Re.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!m) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.next = 3, Re.a.awrap(Object(We.e)());
                                            case 3:
                                                return e = t.sent, t.abrupt("return", e);
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, null, Promise)
                                }), [m]);
                            E.a.useEffect((function() {
                                var e = !0;
                                return function() {
                                        var t, n, r, a, i, o;
                                        Re.a.async((function(s) {
                                            for (;;) switch (s.prev = s.next) {
                                                case 0:
                                                    return f(!0), s.prev = 1, s.next = 4, Re.a.awrap(Promise.all([Object(mt.e)(), v()]));
                                                case 4:
                                                    if (t = s.sent, n = Object(C.a)(t, 2), r = n[0], a = n[1], e) {
                                                        s.next = 10;
                                                        break
                                                    }
                                                    return s.abrupt("return");
                                                case 10:
                                                    f(!1), r && r.entries && (i = r.entries.length - 1, u(r.entries[i]), o = Object(Qs.g)(r.entries[i], 0), c(o.devices[0])), a && h({
                                                        type: "setContracts",
                                                        payload: a
                                                    }), s.next = 20;
                                                    break;
                                                case 15:
                                                    if (s.prev = 15, s.t0 = s.catch(1), e) {
                                                        s.next = 19;
                                                        break
                                                    }
                                                    return s.abrupt("return");
                                                case 19:
                                                    f(!1);
                                                case 20:
                                                case "end":
                                                    return s.stop()
                                            }
                                        }), null, null, [
                                            [1, 15]
                                        ], Promise)
                                    }(),
                                    function() {
                                        e = !1
                                    }
                            }), [h, v]);
                            var y = null === s || void 0 === s ? void 0 : null === (e = s.monthlyPrices) || void 0 === e ? void 0 : e.map((function(e) {
                                    return {
                                        price: O ? e.netPrice : e.price,
                                        monthFrom: e.monthFrom,
                                        monthTo: e.monthTo,
                                        currency: e.currency
                                    }
                                })),
                                j = null === s || void 0 === s ? void 0 : s.checkoutPrice,
                                g = null === a || void 0 === a ? void 0 : a.checkoutPrice,
                                S = null === a || void 0 === a ? void 0 : null === (t = a.monthlyPrices) || void 0 === t ? void 0 : t.map((function(e) {
                                    return {
                                        price: O ? e.netPrice : e.price,
                                        monthFrom: e.monthFrom,
                                        monthTo: e.monthTo,
                                        currency: e.currency
                                    }
                                })),
                                w = S ? Object(kr.a)(S) : null,
                                x = y ? Object(kr.a)(y) : null,
                                k = x ? Object(on.a)(x.last.price, {
                                    integersWithFractionDigits: !0
                                }) : "",
                                P = j ? Object(on.a)(O ? j.netPrice : j.price, {
                                    integersWithFractionDigits: !0
                                }) : "";
                            return {
                                entry: s,
                                device: a,
                                entryMonthlyPrice: k,
                                devicePriceSteps: w,
                                entryPriceSteps: x,
                                deviceMonthlyPrice: w ? Object(on.a)(w.last.price, {
                                    integersWithFractionDigits: !0
                                }) : "",
                                isPending: p,
                                entryActivationPrice: P,
                                deviceActivationPrice: g ? Object(on.a)(O ? g.netPrice : g.price, {
                                    integersWithFractionDigits: !0
                                }) : ""
                            }
                        }();
                    return Object(I.b)(qs.a, {
                        summaryData: r
                    }, E.a.cloneElement(t, {
                        separatorCSS: Object(y.a)({}, n.ONLY_TABLET, {
                            display: "none"
                        })
                    }))
                })));
            $s.displayName = "Container";
            var eu = n("F6me");
            E.a.createElement;
            var tu = E.a.memo((function() {
                var e = Object(S.useTheme)(),
                    t = e.bp,
                    n = e.zIndex,
                    r = Object(T.b)(),
                    a = r.currentStep,
                    c = r.currentOffer,
                    i = r.currentProcess,
                    o = r.currentSingleOffer,
                    s = r.shouldShowAccounts,
                    u = r.currentOffersGroup,
                    l = r.offerType,
                    d = r.processType,
                    p = r.fixMigrationProcesses,
                    f = r.currentFixMigrationProcessType,
                    b = he(l, d).numberOfContracts,
                    O = function() {
                        var e = Object(T.b)().dispatch;
                        return {
                            offersStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "OFFERS"
                                })
                            }), [e]),
                            processStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "PROCESSES"
                                })
                            }), [e]),
                            authorizationStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "AUTHORIZATION"
                                })
                            }), [e]),
                            singleOfferStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "SINGLE_OFFER"
                                })
                            }), [e]),
                            verificationStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "VERIFICATION"
                                })
                            }), [e]),
                            locationStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "LOCATION"
                                })
                            }), [e]),
                            accountsStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "ACCOUNTS"
                                })
                            }), [e]),
                            selectNumberStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "SELECT_NUMBER"
                                })
                            }), [e]),
                            selectOffersGroup: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "INTERNET_GROUP"
                                })
                            }), [e]),
                            selectServicesStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "SERVICES"
                                })
                            }), [e]),
                            selectFixMigrationStep: E.a.useCallback((function() {
                                e({
                                    type: "setCurrentStep",
                                    payload: "FIX_PROCESSES"
                                })
                            }), [e])
                        }
                    }(),
                    h = function() {
                        var e = Object(T.b)().dispatch;
                        return {
                            goToOffers: E.a.useCallback((function() {
                                e({
                                    type: "goToOffers"
                                })
                            }), [e]),
                            goToProcesses: E.a.useCallback((function() {
                                e({
                                    type: "goToProcesses"
                                })
                            }), [e]),
                            goToAuthorization: E.a.useCallback((function() {
                                e({
                                    type: "goToAuthorization"
                                })
                            }), [e]),
                            goToSingleOffer: E.a.useCallback((function() {
                                e({
                                    type: "goToSingleOffer"
                                })
                            }), [e]),
                            goToVerification: E.a.useCallback((function() {
                                e({
                                    type: "goToVerification"
                                })
                            }), [e]),
                            goToLocation: E.a.useCallback((function() {
                                e({
                                    type: "goToLocation"
                                })
                            }), [e]),
                            goToAccounts: E.a.useCallback((function() {
                                e({
                                    type: "goToAccounts"
                                })
                            }), [e]),
                            goToOffersGroup: E.a.useCallback((function() {
                                e({
                                    type: "goToOffersGroup"
                                })
                            }), [e]),
                            goToServices: E.a.useCallback((function() {
                                e({
                                    type: "goToServices"
                                })
                            }), [e]),
                            goToFixProcesses: E.a.useCallback((function() {
                                e({
                                    type: "goToFixProcesses"
                                })
                            }), [e]),
                            goToSelectNumberStep: E.a.useCallback((function() {
                                e({
                                    type: "goToSelectNumber"
                                })
                            }), [e])
                        }
                    }(),
                    m = {
                        VOICE: "Abonament kom\xf3rkowy",
                        DATA: "Internet mobilny",
                        FIX1P: "Internet domowy",
                        FIX3P: "Internet z TV",
                        CONVERGENT4U: "Orange Love",
                        DATA_LDF: "Internet Biurowy LTE",
                        INTERNET_GROUP: "Internet"
                    },
                    v = {
                        ACTIVATION: "Nowa umowa",
                        MNP: "Przeniesienie numeru",
                        RETENTION: "Przed\u0142u\u017cenie umowy",
                        MIGRATION_PRE_POST: "Z karty na abonament",
                        MIGRATION_NJU_POST_TO_POST: "Z Nju na abonament",
                        ACTIVATION_NNAKED: "Nowa umowa",
                        RETENTION_NNAKED: "Przed\u0142u\u017cam umow\u0119",
                        MIGRATION_TO_3P: "Modyfikuj\u0119 us\u0142ug\u0119",
                        MIGRATION_TO_3P_WITH_NP_INT: "Modyfikuj\u0119 us\u0142ug\u0119",
                        MIGRATION_MOD_TECH: "Modyfikuj\u0119 us\u0142ug\u0119",
                        MIGRATION_MOD_TECH_NNAKED: "Modyfikuj\u0119 us\u0142ug\u0119",
                        JUST_UNBUNDLE_1P: "Modyfikuj\u0119 us\u0142ug\u0119",
                        JUST_UNBUNDLE_1P_NNAKED: "Modyfikuj\u0119 us\u0142ug\u0119"
                    },
                    g = E.a.useCallback((function(e) {
                        return e && m[e] || "Oferta"
                    }), [m]),
                    C = E.a.useCallback((function(e) {
                        return e && v[e] || "Wyb\xf3r procesu"
                    }), [v]),
                    w = E.a.useMemo((function() {
                        return "MAINTENANCE" === a ? [{
                            id: "OFFERS",
                            name: "Oferta",
                            shouldBeVisible: !0,
                            action: O.offersStep,
                            isActive: !1,
                            backAction: h.goToOffers
                        }, {
                            id: "MAINTENANCE",
                            name: "Informacja",
                            shouldBeVisible: !0,
                            isActive: !0
                        }] : "UPSELL" === a ? [{
                            id: "UPPSELL",
                            name: "Oferta dla Ciebie",
                            shouldBeVisible: "UPSELL" === a,
                            isActive: "UPSELL" === a,
                            backAction: h.goToOffers
                        }] : u || c && l || "CHANGE_ACCOUNT" === a || "LOGIN" === a ? [{
                            id: "GROUPS",
                            name: g((null === u || void 0 === u ? void 0 : u.type) || null),
                            shouldBeVisible: !!u || Object(oe.a)(a),
                            action: O.offersStep,
                            isActive: !!u && "OFFERS" === a,
                            backAction: h.goToOffers
                        }, {
                            id: "OFFERS",
                            name: c ? g(l) : "Typ oferty",
                            shouldBeVisible: !(!c && !u && "OFFERS" !== a),
                            action: u ? O.selectOffersGroup : O.offersStep,
                            isActive: Object(oe.a)(a) || "OFFERS" === a && !u,
                            backAction: u ? h.goToOffersGroup : h.goToOffers
                        }, {
                            id: "PROCESSES",
                            name: C(d),
                            shouldBeVisible: ("FIX1P" !== (null === c || void 0 === c ? void 0 : c.type) && "FIX3P" !== (null === c || void 0 === c ? void 0 : c.type) || "ACTIVATION" === d) && !!i || "PROCESSES" === a,
                            action: O.processStep,
                            isActive: "PROCESSES" === a,
                            backAction: h.goToProcesses
                        }, {
                            id: "AUTHORIZATION",
                            name: "Autoryzacja",
                            shouldBeVisible: "AUTHORIZATION" === a,
                            action: O.authorizationStep,
                            isActive: "AUTHORIZATION" === a,
                            backAction: h.goToAuthorization
                        }, {
                            id: "LOCATION",
                            name: "Lokalizacja",
                            shouldBeVisible: "LOCATION" === a,
                            action: O.locationStep,
                            isActive: "LOCATION" === a,
                            backAction: h.goToLocation
                        }, {
                            id: "SELECT_NUMBER",
                            name: "Wyb\xf3r numeru",
                            isActive: "SELECT_NUMBER" === a && b > 1,
                            shouldBeVisible: "SELECT_NUMBER" === a && b > 1 || b > 1 && "RETENTION" === d,
                            action: O.selectNumberStep,
                            backAction: h.goToSelectNumberStep
                        }, {
                            id: "SERVICES",
                            name: "Wyb\xf3r us\u0142ugi",
                            isActive: "SERVICES" === a,
                            shouldBeVisible: "SERVICES" === a || !!p,
                            action: O.selectServicesStep,
                            backAction: h.goToServices
                        }, {
                            id: "FIX_PROCESSES",
                            name: C(f),
                            isActive: "FIX_PROCESSES" === a,
                            shouldBeVisible: "FIX_PROCESSES" === a || !!f,
                            action: O.selectFixMigrationStep,
                            backAction: h.goToFixProcesses
                        }, {
                            id: "SINGLE_OFFER",
                            name: "Konfigurator",
                            shouldBeVisible: !!o || "SINGLE_OFFER" === a,
                            action: O.singleOfferStep,
                            isActive: "SINGLE_OFFER" === a,
                            backAction: h.goToSingleOffer
                        }, {
                            id: "ACCOUNTS",
                            name: "Wyb\xf3r konta",
                            shouldBeVisible: s || "ACCOUNTS" === a,
                            action: O.accountsStep,
                            isActive: s || "ACCOUNTS" === a,
                            backAction: h.goToAccounts
                        }, {
                            id: "VERIFICATION",
                            name: "Weryfikacja",
                            shouldBeVisible: "VERIFICATION" === a,
                            action: O.verificationStep,
                            isActive: "VERIFICATION" === a,
                            backAction: h.goToVerification
                        }, {
                            id: "SUMMARY",
                            name: "Podsumowanie",
                            shouldBeVisible: "SUMMARY" === a,
                            isActive: "SUMMARY" === a
                        }, {
                            id: "CHANGE_ACCOUNT",
                            name: "Zmie\u0144 konto",
                            shouldBeVisible: "CHANGE_ACCOUNT" === a,
                            isActive: "CHANGE_ACCOUNT" === a,
                            backAction: i && h.goToSingleOffer || c && h.goToProcesses || h.goToOffers
                        }, {
                            id: "LOGIN",
                            name: "Logowanie",
                            shouldBeVisible: "LOGIN" === a,
                            isActive: "LOGIN" === a,
                            backAction: i && h.goToSingleOffer || c && h.goToProcesses || h.goToOffers
                        }].filter((function(e) {
                            return e.shouldBeVisible
                        })) : [{
                            id: "OFFERS",
                            name: "Oferta",
                            shouldBeVisible: !0,
                            action: O.offersStep,
                            isActive: "OFFERS" === a,
                            backAction: h.goToOffers
                        }]
                    }), [a, c, l, u, d, g, O.offersStep, O.selectOffersGroup, O.processStep, O.authorizationStep, O.locationStep, O.selectNumberStep, O.selectServicesStep, O.selectFixMigrationStep, O.singleOfferStep, O.accountsStep, O.verificationStep, h.goToOffers, h.goToOffersGroup, h.goToProcesses, h.goToAuthorization, h.goToLocation, h.goToSelectNumberStep, h.goToServices, h.goToFixProcesses, h.goToSingleOffer, h.goToAccounts, h.goToVerification, C, i, b, p, f, o, s]),
                    x = "MAINTENANCE" !== a && "UPSELL" !== a && !(u && Object(oe.a)(a)) && (!c || "OFFERS" === a && !i) && !((!c || !i) && "CHANGE_ACCOUNT" === a) && !((!c || !i) && "LOGIN" === a),
                    k = w.length > 1 ? w[w.length - 2].backAction : w[0].backAction,
                    P = !x && "SUMMARY" !== a;
                return Object(I.b)(eu.a, {
                    isFirstStep: x,
                    backAction: k,
                    steps: w,
                    isVisible: P,
                    shouldBeAnimated: !0,
                    css: Object(j.a)(Object(y.a)({}, t.FROM_DESKTOP, {
                        position: "absolute",
                        zIndex: n.LAYER_1
                    }), "")
                })
            }));
            tu.displayName = "Navigation";
            var nu = n("tHt9"),
                ru = (E.a.createElement, E.a.memo((function(e) {
                    var t, n, r, a = e.main,
                        c = e.description,
                        i = e.wrapperCss,
                        o = e.separatorCSS,
                        s = Object(S.useTheme)(),
                        u = s.bp,
                        l = s.colors,
                        d = Object(T.b)().currentStep;
                    return Object(I.b)("div", {
                        css: Object(j.a)({
                            backgroundColor: l.WHITE
                        }, "")
                    }, Object(I.b)(nu.a, {
                        css: Object(j.a)([(t = {
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: "50vh"
                        }, Object(y.a)(t, u.ONLY_TABLET, {
                            alignItems: "center",
                            width: "53%",
                            margin: "auto"
                        }), Object(y.a)(t, u.FROM_DESKTOP, {
                            height: "80vw",
                            alignItems: "center",
                            flexDirection: "row",
                            minHeight: "60vh",
                            maxHeight: 850
                        }), t), i], "")
                    }, Object(I.b)("div", {
                        css: Object(j.a)((n = {
                            height: "100%",
                            display: "flex",
                            alignItems: "center"
                        }, Object(y.a)(n, u.FROM_TABLET, {
                            justifyContent: "center",
                            width: "100%"
                        }), Object(y.a)(n, u.FROM_DESKTOP, {
                            flexBasis: "50%",
                            height: "calc(100% - 70px)",
                            overflowY: "hidden",
                            overflowX: "hidden",
                            paddingTop: 10
                        }), Object(y.a)(n, u.ONLY_TABLET, {
                            justifyContent: "flex-start"
                        }), n), "")
                    }, c), Object(I.b)(S.ArrowSeparator, {
                        orientation: "HORIZONTAL",
                        css: Object(j.a)([Object(y.a)({
                            marginTop: 20,
                            height: 20,
                            display: "ERROR" === d ? "none" : "block"
                        }, u.FROM_DESKTOP, {
                            display: "none"
                        }), o], "")
                    }), Object(I.b)(S.ArrowSeparator, {
                        orientation: "VERTICAL",
                        css: Object(j.a)([Object(y.a)({
                            display: "none"
                        }, u.FROM_DESKTOP, {
                            margin: "0 15px",
                            display: "block",
                            alignSelf: "center",
                            height: "calc(100%  - 200px)"
                        }), o], "")
                    }), Object(I.b)("div", {
                        css: Object(j.a)((r = {
                            height: "100%",
                            display: "flex",
                            alignItems: "center"
                        }, Object(y.a)(r, u.FROM_TABLET, {
                            width: "100%"
                        }), Object(y.a)(r, u.FROM_DESKTOP, {
                            flexBasis: "50%",
                            height: "100%",
                            overflowY: "auto",
                            overflowX: "hidden",
                            justifyContent: "center"
                        }), r), "")
                    }, a)))
                })));
            ru.displayName = "TabletDesktopContainer";
            E.a.createElement;
            var au = E.a.memo((function(e) {
                var t = e.main,
                    n = e.description,
                    r = e.wrapperCss,
                    a = Object(S.useTheme)().colors;
                return Object(I.b)("div", {
                    css: Object(j.a)([{
                        backgroundColor: a.WHITE,
                        minHeight: "60vh",
                        paddingBottom: 20
                    }, r], "")
                }, n, t)
            }));
            au.displayName = "MobileContainer";
            var cu = n("BPef");
            E.a.createElement;
            var iu = {
                    OFFERS: r,
                    AUTHORIZATION: i,
                    LOCATION: c,
                    PROCESSES: a,
                    SINGLE_OFFER: o,
                    VERIFICATION: s,
                    ACCOUNTS: u,
                    ERROR: l,
                    SELECT_NUMBER: d,
                    MAINTENANCE: p,
                    INTERNET_GROUP: f,
                    SUMMARY: v,
                    SERVICES: b,
                    FIX_PROCESSES: O,
                    UPSELL: h,
                    CHANGE_ACCOUNT: m,
                    LOGIN: i
                },
                ou = {
                    name: "1d6mts7",
                    styles: "min-height:800px;display:flex;justify-content:center;align-items:center;"
                },
                su = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                uu = E.a.memo((function() {
                    var e = Object(k.a)(),
                        t = Object(N.b)(),
                        n = t.user,
                        r = t.market,
                        a = Object(S.useTheme)().bp,
                        c = Object(T.b)(),
                        i = c.currentStep,
                        o = c.offerType,
                        s = c.id,
                        u = c.clearCache,
                        l = c.isInitializing,
                        d = c.processType,
                        p = c.dispatch,
                        f = Object(S.useLayer)().level,
                        b = E.a.useRef(null),
                        O = Object(w.useRouter)(),
                        h = f > 0,
                        m = P(i),
                        v = iu[i],
                        g = E.a.useRef(null),
                        R = E.a.useRef(!1),
                        A = P(n.isLogged),
                        _ = Object(cu.a)(s);
                    E.a.useEffect((function() {
                        m && m !== i && p({
                            type: "setPreviousStep",
                            payload: m
                        })
                    }), [m, i, p]), E.a.useEffect((function() {
                        Object(re.c)(i, o, r, n.isLogged, window.location.pathname, "", d)
                    }), [i, o, r, n.isLogged, d]), E.a.useEffect((function() {
                        void 0 !== A && A !== n.isLogged && u()
                    }), [A, n.isLogged, u]), E.a.useEffect((function() {
                        g.current && R.current && null !== b.current && i !== b.current && !h && Object(x.a)(g.current, {
                            block: "start"
                        }), R.current ? b.current = i : (R.current = !0, z.a.getItem("sufler-".concat(s)) || (b.current = i))
                    }), [i, s, h]);
                    var L = E.a.useCallback((function(e) {
                            if (e && (g.current = e, _)) {
                                var t = (O.asPath || "").split("?"),
                                    n = Object(C.a)(t, 2),
                                    r = n[0],
                                    a = n[1];
                                a && a.length && ("SUMMARY" === i && O.replace("/" === r ? "/" : "/[...path]", r, {
                                    shallow: !0
                                }), h || Object(x.a)(e, {
                                    block: "start"
                                }))
                            }
                        }), [i, h, O, _]),
                        M = e ? Object(I.b)(au, {
                            main: Object(I.b)(v.Main, null),
                            description: Object(I.b)(v.Description, null)
                        }) : Object(I.b)(ru, {
                            main: Object(I.b)(v.Main, null),
                            description: Object(I.b)(v.Description, null)
                        });
                    return l ? Object(I.b)("div", {
                        css: ou
                    }, Object(I.b)(S.Loader, null)) : Object(I.b)("div", {
                        css: su
                    }, Object(I.b)("div", {
                        ref: L,
                        css: Object(j.a)(Object(y.a)({
                            position: "absolute",
                            top: -80
                        }, a.FROM_TABLET, {
                            top: -110
                        }), "")
                    }), Object(I.b)(tu, null), Object(I.b)("div", null, v.Container ? Object(I.b)(v.Container, null, M) : M))
                }));
            uu.displayName = "Container";
            E.a.createElement;
            var lu = E.a.memo((function(e) {
                var t = e.offers,
                    n = e.id,
                    r = e.configParams,
                    a = e.pk,
                    c = Object(S.useTheme)().bp,
                    i = Object(N.b)(),
                    o = i.market,
                    s = i.isInApp,
                    u = i.user;
                return Object(I.b)("div", {
                    css: Object(j.a)(Object(y.a)({
                        minHeight: 500
                    }, c.FROM_TABLET, {
                        minHeight: 800
                    }), "")
                }, Object(I.b)(S.DynamicContent, null, Object(I.b)(T.a, {
                    offers: t,
                    id: n,
                    configParams: r,
                    market: o,
                    isInApp: s,
                    pk: a,
                    isUserLogged: u.isLogged
                }, Object(I.b)(uu, null))))
            }));
            lu.displayName = "Sufler"
        },
        OS0P: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "b", (function() {
                return u
            })), n.d(t, "a", (function() {
                return l
            }));
            var r = n("zjfJ"),
                a = n("fGyu"),
                c = n("yr6+");

            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var o = function(e, t) {
                    return e && e.additionals ? e.additionals.filter((function(e) {
                        return e.type === t
                    })) : []
                },
                s = function(e) {
                    var t = Object(c.e)(e),
                        n = o(t, "DEVICE_GROUP"),
                        r = o(t, "SERVICE_GROUP");
                    return [].concat(Object(a.a)(n), Object(a.a)(r))
                },
                u = function(e) {
                    var t = s(e),
                        n = function(e) {
                            var t = Object(c.b)(e),
                                n = o(t, "DEVICE_GROUP"),
                                r = o(t, "SERVICE_GROUP");
                            return [].concat(Object(a.a)(n), Object(a.a)(r))
                        }(e),
                        r = function(e) {
                            var t = Object(c.g)(e),
                                n = o(t, "DEVICE_GROUP"),
                                r = o(t, "SERVICE_GROUP");
                            return [].concat(Object(a.a)(n), Object(a.a)(r))
                        }(e);
                    return [].concat(Object(a.a)(t), Object(a.a)(n), Object(a.a)(r))
                },
                l = function(e) {
                    return e.map((function(e) {
                        return e.additionals
                    })).flat().map((function(e) {
                        var t, n = e.features.config[0].value,
                            a = null === (t = e.tieredPriceList) || void 0 === t ? void 0 : t.map((function(e) {
                                return {
                                    price: e.basePrice,
                                    monthFrom: e.startCycle,
                                    monthTo: e.endCycle,
                                    currency: "z\u0142",
                                    netPrice: null,
                                    oneTimePrice: null
                                }
                            })),
                            c = n.media && Object.entries(n.media).length > 0 ? n.media : null;
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? i(Object(n), !0).forEach((function(t) {
                                    Object(r.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, n, {
                            prices: a,
                            id: e.code,
                            media: c
                        })
                    }))
                }
        },
        P0jV: function(e, t, n) {
            "use strict";
            var r = n("vfGT"),
                a = Object.prototype.toString;

            function c(e) {
                return "[object Array]" === a.call(e)
            }

            function i(e) {
                return "undefined" === typeof e
            }

            function o(e) {
                return null !== e && "object" === typeof e
            }

            function s(e) {
                return "[object Function]" === a.call(e)
            }

            function u(e, t) {
                if (null !== e && "undefined" !== typeof e)
                    if ("object" !== typeof e && (e = [e]), c(e))
                        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                    else
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
            }
            e.exports = {
                isArray: c,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === a.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !i(e) && null !== e.constructor && !i(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" !== typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" === typeof e
                },
                isNumber: function(e) {
                    return "number" === typeof e
                },
                isObject: o,
                isUndefined: i,
                isDate: function(e) {
                    return "[object Date]" === a.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === a.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === a.call(e)
                },
                isFunction: s,
                isStream: function(e) {
                    return o(e) && s(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
                },
                forEach: u,
                merge: function e() {
                    var t = {};

                    function n(n, r) {
                        "object" === typeof t[r] && "object" === typeof n ? t[r] = e(t[r], n) : t[r] = n
                    }
                    for (var r = 0, a = arguments.length; r < a; r++) u(arguments[r], n);
                    return t
                },
                deepMerge: function e() {
                    var t = {};

                    function n(n, r) {
                        "object" === typeof t[r] && "object" === typeof n ? t[r] = e(t[r], n) : t[r] = "object" === typeof n ? e({}, n) : n
                    }
                    for (var r = 0, a = arguments.length; r < a; r++) u(arguments[r], n);
                    return t
                },
                extend: function(e, t, n) {
                    return u(t, (function(t, a) {
                        e[a] = n && "function" === typeof t ? r(t, n) : t
                    })), e
                },
                trim: function(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                }
            }
        },
        PImS: function(e, t, n) {
            "use strict";
            n.d(t, "j", (function() {
                return p
            })), n.d(t, "h", (function() {
                return y
            })), n.d(t, "i", (function() {
                return j
            })), n.d(t, "g", (function() {
                return E
            })), n.d(t, "f", (function() {
                return S
            })), n.d(t, "a", (function() {
                return w
            })), n.d(t, "b", (function() {
                return x
            })), n.d(t, "e", (function() {
                return k
            })), n.d(t, "d", (function() {
                return P
            })), n.d(t, "k", (function() {
                return z
            })), n.d(t, "c", (function() {
                return N
            }));
            var r = n("zygG"),
                a = n("VtSi"),
                c = n.n(a),
                i = n("fGyu"),
                o = n("zjfJ"),
                s = n("cVGl"),
                u = n("Bc8N"),
                l = n("bVfH");

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var p = function(e, t) {
                    return e.map((function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? d(Object(n), !0).forEach((function(t) {
                                    Object(o.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e, {
                            devices: e.devices.filter((function(e) {
                                return e.cartId !== t
                            }))
                        })
                    })).filter((function(e) {
                        return e.devices.length > 0 || e.services.length > 0 || e.entries || "DATA" === e.offerType
                    }))
                },
                f = function(e) {
                    return {
                        type: "SERVICE",
                        name: e.name,
                        iconType: e.thumbnailIcon
                    }
                },
                b = function(e) {
                    return {
                        price: e.price,
                        monthFrom: e.monthFrom,
                        monthTo: e.monthTo,
                        currency: e.currency,
                        netPrice: e.netPrice,
                        net: e.net
                    }
                },
                O = function(e) {
                    return function(t, n) {
                        var r = "euroSet" === e ? t.euroSets : t.terminals;
                        return r ? r.map((function(e, r) {
                            return {
                                cartId: "device-".concat(n, "-").concat(r),
                                entryCartId: "entry-".concat(n),
                                productEntryNumber: e.entryNo,
                                productBundleNumber: e.bundleNo,
                                offerBundleNumber: t.bundleNo,
                                offerBundleCode: t.bundleCode,
                                productCode: e.productCode,
                                planName: g(t),
                                type: "DEVICE",
                                imageUrl: e.imageUrl,
                                name: e.name,
                                monthlyPrices: e.monthlyPrices.map(b),
                                checkoutPrice: b(e.checkoutPrice)
                            }
                        })) : []
                    }
                },
                h = O("euroSet"),
                m = O("terminal"),
                v = function(e) {
                    return function(t) {
                        var n = [];
                        if (t.monthlyCosts) {
                            var r = t.monthlyCosts.map((function(t) {
                                return {
                                    price: t[e],
                                    monthTo: t.monthTo,
                                    monthFrom: t.monthFrom,
                                    currency: t.currency
                                }
                            }));
                            n = n.concat(r)
                        }
                        if (t.oneTimeCost) {
                            var a = {
                                price: t.oneTimeCost[e],
                                monthFrom: 1,
                                monthTo: 1,
                                currency: "z\u0142"
                            };
                            n.push(a)
                        }
                        if (t.checkoutCost) {
                            var c = {
                                price: t.checkoutCost[e],
                                monthFrom: 0,
                                monthTo: 0,
                                currency: "z\u0142"
                            };
                            n.push(c)
                        }
                        return Object(u.a)(n)
                    }
                },
                y = v("price"),
                j = v("netPrice"),
                g = function(e) {
                    var t = [],
                        n = e.entries || [];
                    if (e.voipFixProduct && t.push(e.voipFixProduct.name), e.broadbandFixProduct && t.push(e.broadbandFixProduct.name), e.tvFixProduct && t.push(e.tvFixProduct.name), n.forEach((function(e) {
                            "FTTH" === e.technology ? t.push(e.descriptionShort) : t.push(e.planName)
                        })), "HARDBUNDLE" === e.bundleType) {
                        var r = t.join(", ");
                        return r.length > 45 ? r.substring(0, 45).concat("...") : r
                    }
                    var a = t.join(" + ");
                    return e.planName && t.length > 0 ? "".concat(e.planName, " - ").concat(a) : !e.planName && t.length > 0 ? a : "SIMFREE_INST" === e.bundleType ? null : e.planName
                },
                E = function e(t, n) {
                    var r = t.bundleCode,
                        a = t.productCode,
                        c = t.processType,
                        o = t.bundleNo,
                        s = t.loyaltyLength,
                        u = t.descriptionShort,
                        l = t.loyaltyLengthDescription,
                        d = t.entries,
                        p = m(t, n),
                        b = h(t, n),
                        O = function(e) {
                            return e.vases ? e.vases.map(f) : []
                        }(t),
                        v = function(e) {
                            switch (e.bundleType) {
                                case "1P_PRE":
                                    return "FIX1P";
                                case "3P_PRE":
                                    return "FIX3P";
                                case "HARDBUNDLE":
                                    return "MINI" === e.promotionType ? "CONVERGENT2U" : "CONVERGENT4U";
                                default:
                                    return e.bundleType
                            }
                        }(t),
                        y = [].concat(Object(i.a)(p), Object(i.a)(b)),
                        j = d ? d.map(e) : null,
                        E = g(t);
                    return {
                        cartId: "entry-".concat(n),
                        services: O,
                        devices: y,
                        planName: E,
                        processType: c,
                        offerType: v,
                        entries: j,
                        offerCode: a,
                        offerBundleNumber: o,
                        offerBundleCode: r,
                        loyaltyLength: s,
                        loyaltyLengthDescription: l,
                        shortDescription: u
                    }
                },
                S = function(e) {
                    if (!e || !e.entries || !e.offerCount) return {
                        offerCount: 0,
                        entries: [],
                        grossPayments: null,
                        netPayments: null,
                        bonusesInfo: []
                    };
                    var t = y(e),
                        n = j(e),
                        r = e.entries.map(E),
                        a = C(r),
                        c = T(e);
                    return {
                        offerCount: e.offerCount,
                        entries: a,
                        grossPayments: t,
                        netPayments: n,
                        bonusesInfo: c
                    }
                },
                T = function(e) {
                    var t = e.bonuses ? e.bonuses.map((function(e) {
                        return e.description
                    })) : [];
                    return Array.from(new Set(t))
                },
                C = function(e) {
                    var t = e.filter((function(e) {
                            return "VK_SIMFREE" === e.offerType
                        })),
                        n = e.filter((function(e) {
                            return "VK_SIMFREE" !== e.offerType
                        }));
                    return [].concat(Object(i.a)(n), Object(i.a)(t))
                },
                w = function(e, t, n, r) {
                    return c.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                if (a.prev = 0, e({
                                        type: "setIsDeletingEnabled",
                                        payload: !1
                                    }), e({
                                        type: "addToDeletedItems",
                                        payload: t
                                    }), "CONVERGENT4U" !== r && "CONVERGENT2U" !== r) {
                                    a.next = 8;
                                    break
                                }
                                return a.next = 6, c.a.awrap(Promise.all([Object(s.a)(1e3), Object(l.a)()]));
                            case 6:
                                a.next = 10;
                                break;
                            case 8:
                                return a.next = 10, c.a.awrap(Promise.all([Object(s.a)(1e3), Object(l.c)(n)]));
                            case 10:
                                e({
                                    type: "deleteBundle",
                                    payload: t
                                }), e({
                                    type: "setShouldRefetchPrice",
                                    payload: !0
                                }), a.next = 17;
                                break;
                            case 14:
                                a.prev = 14, a.t0 = a.catch(0), e({
                                    type: "setIsError",
                                    payload: !0
                                });
                            case 17:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, [
                        [0, 14]
                    ], Promise)
                },
                x = function(e, t, n, r, a) {
                    return c.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return i.prev = 0, e({
                                    type: "setIsDeletingEnabled",
                                    payload: !1
                                }), e({
                                    type: "addToDeletedItems",
                                    payload: t
                                }), i.next = 5, c.a.awrap(Promise.all([Object(s.a)(1e3), Object(l.b)(n, r, a)]));
                            case 5:
                                e({
                                    type: "deleteDevice",
                                    payload: t
                                }), e({
                                    type: "setShouldRefetchPrice",
                                    payload: !0
                                }), i.next = 12;
                                break;
                            case 9:
                                i.prev = 9, i.t0 = i.catch(0), e({
                                    type: "setIsError",
                                    payload: !0
                                });
                            case 12:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, [
                        [0, 9]
                    ], Promise)
                },
                k = function() {
                    var e, t, n;
                    return c.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, c.a.awrap(Promise.all([Object(l.f)(), Object(s.a)(750)]));
                            case 2:
                                return e = a.sent, t = Object(r.a)(e, 1), n = t[0], a.abrupt("return", n);
                            case 6:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                P = function() {
                    var e, t, n;
                    return c.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, c.a.awrap(Promise.all([Object(l.d)(), Object(s.a)(750)]));
                            case 2:
                                return e = a.sent, t = Object(r.a)(e, 1), n = t[0], a.abrupt("return", n);
                            case 6:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                z = function(e, t) {
                    return !("SIMFREE_INST" === t && "czas nieokre\u015blony" === e)
                },
                N = function(e) {
                    return e.replace(/Rabat /g, " -")
                }
        },
        Q1tT: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return p
            })), n.d(t, "a", (function() {
                return b
            })), n.d(t, "c", (function() {
                return O
            }));
            var r = n("cxan"),
                a = n("HbGN"),
                c = n("ERkP"),
                i = n.n(c),
                o = n("0D0S"),
                s = n.n(o),
                u = function(e, t) {
                    if (function(e, t) {
                            try {
                                return new RegExp("opl_feat_".concat(t)).test(e)
                            } catch (n) {
                                return !1
                            }
                        }(e, t)) return e.split("".concat(t, "="))[1].split(";")[0]
                },
                l = function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = s()();
                    switch (u(e, t)) {
                        case "0":
                            return !1;
                        case "1":
                            return !0;
                        default:
                            return a && n ? n(a.publicRuntimeConfig.OMNIFRONTEND_APP_ENV) : r
                    }
                },
                d = n("l1C2"),
                p = (i.a.createElement, function(e) {
                    return {
                        corazoneSkipRedirect: l(e, "corazoneSkipRedirect"),
                        minicartEditMode: l(e, "minicartEditMode"),
                        suflerTransactions: l(e, "suflerTransactions", (function(e) {
                            return "PROD" !== e
                        })),
                        negateMaintenance: l(e, "negateMaintenance"),
                        marketSelection: l(e, "marketSelection"),
                        redirectVoiceOnB2B: l(e, "redirectVoiceOnB2B"),
                        loveCMB: l(e, "loveCMB", (function() {
                            return !0
                        })),
                        configuratorInFIX: l(e, "configuratorInFIX", (function() {
                            return !1
                        })),
                        skipRedirectUrl: l(e, "skipRedirectUrl"),
                        enableCBSRedirectForWarsaw: l(e, "enableCBSRedirectForWarsaw", (function() {
                            return !0
                        })),
                        suflerSummaryB2B: l(e, "suflerSummaryB2B", (function() {
                            return !0
                        })),
                        additionalPackages: l(e, "additionalPackages", (function() {
                            return !0
                        })),
                        offline: l(e, "offline"),
                        disableShame: l(e, "disableShame"),
                        webUpsell: l(e, "webUpsell"),
                        loggedCustomerPath: l(e, "loggedCustomerPath", (function(e) {
                            return "PROD" !== e
                        }))
                    }
                }),
                f = i.a.createContext(p("")),
                b = function(e) {
                    var t = e.featuresMap,
                        n = Object(a.a)(e, ["featuresMap"]);
                    return Object(d.b)(f.Provider, Object(r.a)({
                        value: t
                    }, n))
                },
                O = function() {
                    var e = i.a.useContext(f);
                    return e
                }
        },
        Q2eF: function(e, t, n) {
            "use strict";
            var r = n("P0jV");

            function a(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, n) {
                if (!t) return e;
                var c;
                if (n) c = n(t);
                else if (r.isURLSearchParams(t)) c = t.toString();
                else {
                    var i = [];
                    r.forEach(t, (function(e, t) {
                        null !== e && "undefined" !== typeof e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(a(t) + "=" + a(e))
                        })))
                    })), c = i.join("&")
                }
                if (c) {
                    var o = e.indexOf("#"); - 1 !== o && (e = e.slice(0, o)), e += (-1 === e.indexOf("?") ? "?" : "&") + c
                }
                return e
            }
        },
        QVQ0: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("zygG"),
                a = function(e) {
                    return Object.entries({
                        MOBILE: ["VOICE", "DATA", "DATA_LDF", "VOICE_LDF"],
                        FIX: ["FIX1P", "FIX3P"],
                        LEAD: ["CONVERGENT2U", "CONVERGENT4U"]
                    }).map((function(t) {
                        var n = Object(r.a)(t, 2),
                            a = n[0],
                            c = n[1];
                        return (null === c || void 0 === c ? void 0 : c.includes(e)) ? a : void 0
                    })).find(Boolean)
                }
        },
        SNEr: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 850 850",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M64.9 211.9V437h134.6v51.1H4.2V211.9h60.7zM511.7 288l42.1 136.5h.6L596.5 288h54.6l-67.8 200.1h-61L453.9 288h57.8zM73.9 610.2h3.9c0-13.2-10.6-24.1-24.1-24.1v3.9c10.9.2 20.2 9.6 20.2 20.2zm88 0v-63.9c0-4.5-3.5-8-8-8H49.8c-4.5 0-8 3.5-8 8V622h119.8v-11.9h.3zm-8 4.1H49.8v-68.1h104.1v68.1zm-87.7-4.1h3.9c0-8.7-7.1-16.1-16.1-16.1v3.9c7.7.3 12.2 6.1 12.2 12.2zm47.5 16c0 2.2-1.9 3.9-3.9 3.9h-16c-2.2 0-3.9-1.9-3.9-3.9H34.1v8c0 2.2 1.9 3.9 3.9 3.9h127.8c2.2 0 3.9-1.9 3.9-3.9v-8h-56zm-55.8-16h3.9c0-4.5-3.5-8-8-8v3.9c2.5.2 4.1 1.8 4.1 4.1zM570.5 625.3c-1.6-14.8-1.6-13.8-14.5-13.8-5.1 0-6.4-11.9-6.4-23.1s1.3-23.1 6.4-23.1c12.8 0 12.8 1 14.5-13.8 1.6-14.8.3-12.8-16.4-12.8-9 .3-19.9 19.3-19.9 49.8s11.2 49.8 19.9 49.8c17.7-.2 18 1.1 16.4-13zM748.1 282.9c19 0 35.7 4.5 50.4 13.2s26.3 21.5 34.7 38.2c8.4 16.7 12.5 35.7 12.5 57.5 0 1.9 0 5.5-.3 10H700.9c.6 16.1 4.8 28.6 12.5 37.3 7.7 9 19.9 13.5 36.3 13.5 10 0 19.3-2.6 27.6-7.4 8.4-5.1 13.8-11.2 16.1-18.3h48.5c-14.1 45-45.3 67.5-93.8 67.5-18.3-.3-35.3-4.2-50.8-11.9-15.7-7.7-27.9-19.9-37.3-36.3-9.3-16.4-13.8-35.3-13.8-57.2 0-20.2 4.8-38.9 14.1-55.6s21.8-29.2 37.6-37.6c15.2-9.1 31.9-12.9 50.2-12.9zm42.1 83.8c-2.6-15.1-7.4-25.7-14.5-32.4s-17-10-29.9-10c-13.5 0-24.1 3.9-31.8 11.6-7.7 7.7-12.2 18-13.5 31.2h89.6v-.4zM674.9 538.2v86.7H700v13.2h91.5v-13.2h25.1v-86.7H674.9zm70.7 92.5c-2.9 0-5.1-2.2-5.1-5.1s2.2-5.1 5.1-5.1c2.9 0 5.1 2.2 5.1 5.1 0 2.9-2.2 5.1-5.1 5.1zm61-15.7H684.9v-66.5h121.4V615h.3zM339.6 538.2h-35.3c-3.2 0-5.8 2.6-5.8 5.8v88c0 3.2 2.6 5.8 5.8 5.8h50.1c3.2 0 5.8-2.6 5.8-5.8v-73.6l-20.6-20.2zm-35.4 47.2c0-1.6 1.3-2.9 2.9-2.9H319v14.8h-14.8v-11.9zm0 14.5h17.7v-17.7h14.8v32.4h-32.4v-14.7zm50.1 29.5c0 1.6-1.3 2.9-2.9 2.9h-44c-1.6 0-2.9-1.3-2.9-2.9v-11.9h14.8v14.8h2.9v-14.8H337v14.8h2.9v-14.8h14.8v11.9h-.4zm0-14.7h-14.8v-14.8h14.8v14.8zm0-17.7h-14.8v-14.8h11.9c1.6 0 2.9 1.3 2.9 2.9V597zM229.1 288v200.1h200.1V288H229.1zm149.3 149h-98.3v-98h98v98h.3z"
                    }))
                })));
            i.displayName = "Love1Icon"
        },
        Soal: function(e, t, n) {
            "use strict";
            var r = n("pQXz");
            e.exports = function(e, t, n) {
                var a = n.config.validateStatus;
                !a || a(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
            }
        },
        UVQZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "b", (function() {
                return a
            })), n.d(t, "c", (function() {
                return r
            })), n.d(t, "d", (function() {
                return i
            }));
            var r = ".",
                a = {},
                c = "xstate.guard",
                i = ""
        },
        VfYs: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return s
            })), n.d(t, "d", (function() {
                return u
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "a", (function() {
                return d
            }));
            var r = n("VtSi"),
                a = n.n(r),
                c = n("pu3o"),
                i = n.n(c),
                o = n("com9"),
                s = function() {
                    var e;
                    return a.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, a.a.awrap(o.a.get("/hapi/pwa/v1/offerSelector/getToken"));
                            case 2:
                                return e = t.sent, t.abrupt("return", e.data);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                },
                u = function(e) {
                    var t, n;
                    return a.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, a.a.awrap(s());
                            case 2:
                                return t = r.sent, r.next = 5, a.a.awrap(o.a.post("/hapi/pwa/v1/product/getProducts", e, {
                                    headers: {
                                        CSRFToken: t
                                    }
                                }));
                            case 5:
                                return n = r.sent, r.abrupt("return", n.data);
                            case 7:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                l = function(e) {
                    var t;
                    return a.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, a.a.awrap(o.a.get("/hapi/pwa/v1/product/getProducts?pk=".concat(e)));
                            case 2:
                                return t = n.sent, n.abrupt("return", t.data);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                d = function(e) {
                    var t, n, r, c, u, l, d, p, f, b, O, h, m;
                    return a.a.async((function(v) {
                        for (;;) switch (v.prev = v.next) {
                            case 0:
                                return t = e.ratePlanId, n = e.id, r = e.processType, c = e.offerType, u = e.deviceVariant, l = e.market, d = e.availableProductsKey, p = e.bonusesToAdd, f = e.defaultBonusesToIgnore, v.next = 3, a.a.awrap(s());
                            case 3:
                                if (b = v.sent, O = function(e) {
                                        return 400 === e.code || !1 === e.success || !e.success
                                    }, "SALE_OF_GOODS" !== r) {
                                    v.next = 13;
                                    break
                                }
                                return v.next = 8, a.a.awrap(o.a.post("/hapi/sklep/dodaj", i.a.stringify({
                                    productCodePost: u,
                                    bundleTemplateId: n,
                                    bundleNo: 0
                                }), {
                                    headers: {
                                        CSRFToken: b
                                    }
                                }));
                            case 8:
                                if (h = v.sent, !O(h.data) || 400 !== h.data.code) {
                                    v.next = 11;
                                    break
                                }
                                throw new Error(h.data.message);
                            case 11:
                                v.next = 18;
                                break;
                            case 13:
                                return v.next = 15, a.a.awrap(o.a.post("/hapi/koszyk/oovdodaj", i.a.stringify({
                                    rateplanId: t,
                                    propositionId: n,
                                    process: r,
                                    offerType: c,
                                    market: l,
                                    deviceVariant: u,
                                    availableProductsKey: d,
                                    bonusesToAdd: p,
                                    defaultBonusesToIgnore: f
                                }, {
                                    arrayFormat: "brackets"
                                }), {
                                    headers: {
                                        CSRFToken: b
                                    }
                                }));
                            case 15:
                                if (m = v.sent, !O(m.data)) {
                                    v.next = 18;
                                    break
                                }
                                throw new Error(m.data.message);
                            case 18:
                            case "end":
                                return v.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        WBY7: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        WDwj: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "d", (function() {
                return o
            })), n.d(t, "e", (function() {
                return c
            }));
            var r = function() {
                return (r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                    return e
                }).apply(this, arguments)
            };

            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                }
                return n
            }

            function c(e) {
                var t = "function" === typeof Symbol && e[Symbol.iterator],
                    n = 0;
                return t ? t.call(e) : {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                }
            }

            function i(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, a, c = n.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = c.next()).done;) i.push(r.value)
                } catch (o) {
                    a = {
                        error: o
                    }
                } finally {
                    try {
                        r && !r.done && (n = c.return) && n.call(c)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return i
            }

            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
                return e
            }
        },
        XWgT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return ["INTERNET_GROUP"].includes(e)
            }
        },
        YYwr: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("5FZF"),
                a = function(e) {
                    return e.monthFrom === e.monthTo ? 0 === e.monthFrom ? {
                        price: e.price,
                        text: "op\u0142ata na start"
                    } : {
                        price: e.price,
                        text: "w ".concat(Object(r.a)(e.monthFrom, "N"), " miesi\u0105cu")
                    } : e.monthTo ? {
                        price: e.price,
                        text: "do ".concat(Object(r.a)(e.monthTo, "D"), " miesi\u0105ca")
                    } : {
                        price: e.price,
                        text: ""
                    }
                }
        },
        YsDt: function(e, t, n) {
            "use strict";
            var r = n("P0jV"),
                a = n("Q2eF"),
                c = n("O3AJ"),
                i = n("BtTt"),
                o = n("N/5i");

            function s(e) {
                this.defaults = e, this.interceptors = {
                    request: new c,
                    response: new c
                }
            }
            s.prototype.request = function(e) {
                "string" === typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = o(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = [i, void 0],
                    n = Promise.resolve(e);
                for (this.interceptors.request.forEach((function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    })), this.interceptors.response.forEach((function(e) {
                        t.push(e.fulfilled, e.rejected)
                    })); t.length;) n = n.then(t.shift(), t.shift());
                return n
            }, s.prototype.getUri = function(e) {
                return e = o(this.defaults, e), a(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, r.forEach(["delete", "get", "head", "options"], (function(e) {
                s.prototype[e] = function(t, n) {
                    return this.request(r.merge(n || {}, {
                        method: e,
                        url: t
                    }))
                }
            })), r.forEach(["post", "put", "patch"], (function(e) {
                s.prototype[e] = function(t, n, a) {
                    return this.request(r.merge(a || {}, {
                        method: e,
                        url: t,
                        data: n
                    }))
                }
            })), e.exports = s
        },
        Zscy: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return G
            })), n.d(t, "b", (function() {
                return W
            }));
            var r = n("cxan"),
                a = n("VtSi"),
                c = n.n(a),
                i = n("zjfJ"),
                o = n("zygG"),
                s = n("HbGN"),
                u = n("ERkP"),
                l = n.n(u),
                d = n("kN39"),
                p = n("EJk9"),
                f = n("5s2p"),
                b = n("azwC"),
                O = n("fGyu"),
                h = n("OS0P");

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var y = {
                id: "",
                pk: "",
                internalID: 0,
                offerType: null,
                processType: null,
                currentOffer: null,
                currentProcess: null,
                currentStep: "OFFERS",
                currentOffersGroup: void 0,
                offers: [],
                shouldShowOfferDetails: !1,
                shouldShowTVConfigurator: !1,
                authorizationData: null,
                currentSingleOffer: null,
                shouldUseDiscounts: !1,
                singleOffers: [],
                isLoadingSingleOffersList: !1,
                shouldVerifyDiscounts: !1,
                isSuflerProcessing: !1,
                isUserLoggedWithCAAP: !1,
                isUserLoggedWithSms: !1,
                processError: null,
                shouldShowAccounts: !1,
                verificationError: !1,
                localizationData: null,
                selectedTVPackages: null,
                selectedOtherPackages: null,
                isSuflerDescriptionInView: !1,
                isSuflerMainInView: !1,
                packageConfiguratorType: null,
                userNeedsVerification: !1,
                contracts: null,
                summaryData: null,
                showNetPrices: !1,
                isB2B: !1,
                offerPackages: [],
                fixMigrationProcesses: null,
                currentFixMigrationProcessType: null,
                isUserLogged: !1,
                hasSelectedAccount: !1,
                shouldShowPackagesConfigurator: !1,
                selectedPackages: null,
                currentServiceName: "",
                currentUpsellOffer: null,
                currentUpsellVariant: null,
                selectedAccount: null,
                previousStep: null,
                authorizationType: null
            };

            function j(e) {
                if (e.processError) return v({}, e, {
                    currentStep: "ERROR"
                });
                if ("FIX1P" === e.offerType || "FIX3P" === e.offerType) {
                    if ("LOCATION" === e.currentStep) return v({}, e, {
                        currentStep: "SINGLE_OFFER"
                    });
                    if ("PROCESSES" === e.currentStep) {
                        var t;
                        if ("FIX_EXISTING_SERVICE" !== e.processType) return v({}, e, {
                            currentStep: "LOCATION"
                        });
                        if (e.isUserLogged) return v({}, e, {
                            currentStep: "SERVICES"
                        });
                        if (null === (t = e.currentProcess) || void 0 === t ? void 0 : t.isAuthorizationRequired) return v({}, e, {
                            currentStep: "AUTHORIZATION"
                        })
                    }
                    if ("AUTHORIZATION" === e.currentStep) return v({}, e, {
                        currentStep: "SERVICES"
                    })
                }
                if ("OFFERS" === e.currentStep) return v({}, e, {
                    currentStep: "PROCESSES"
                });
                if ("INTERNET_GROUP" === e.currentStep) return e.currentOffersGroup ? e : v({}, e, {
                    currentStep: "OFFERS"
                });
                var n, r;
                if ("PROCESSES" === e.currentStep) return (null === (n = e.currentOffer) || void 0 === n ? void 0 : n.isLocationRequired) ? v({}, e, {
                    currentStep: "LOCATION"
                }) : "RETENTION" !== e.processType || ! function(e) {
                    return e.contracts ? e.contracts.filter((function(t) {
                        return t.processType === e.processType && t.offerType === e.offerType
                    })) : null
                }(e) || "VOICE" !== e.offerType && "DATA" !== e.offerType ? (null === (r = e.currentProcess) || void 0 === r ? void 0 : r.isAuthorizationRequired) ? v({}, e, {
                    currentStep: "AUTHORIZATION"
                }) : v({}, e, {
                    currentStep: "SINGLE_OFFER"
                }) : v({}, e, {
                    currentStep: "SELECT_NUMBER"
                });
                if ("SELECT_NUMBER" === e.currentStep && e.authorizationData) return v({}, e, {
                    currentStep: "SINGLE_OFFER"
                });
                if ("AUTHORIZATION" === e.currentStep) return v({}, e, {
                    currentStep: "SINGLE_OFFER"
                });
                if ("LOGIN" === e.currentStep) return v({}, e, {
                    currentStep: "OFFERS",
                    currentOffer: null,
                    currentProcess: null,
                    currentSingleOffer: null
                });
                if ("LOCATION" === e.currentStep) return v({}, e, {
                    currentStep: "SINGLE_OFFER"
                });
                if ("SINGLE_OFFER" === e.currentStep) {
                    if (e.userNeedsVerification) return v({}, e, {
                        currentStep: "VERIFICATION"
                    });
                    if (e.shouldShowAccounts) return v({}, e, {
                        currentStep: "ACCOUNTS"
                    })
                }
                return v({}, e, {
                    currentStep: "OFFERS"
                })
            }
            var g = {
                    GLOBAL: function() {
                        return ["id", "pk", "currentStep", "isUserLogged", "selectedAccount", "shouldUseDiscounts"]
                    },
                    OFFERS: function() {
                        return [].concat(Object(O.a)(g.GLOBAL()), ["offers", "isUserLoggedWithCAAP", "contracts", "currentUpsellOffer"])
                    },
                    INTERNET_GROUP: function() {
                        return [].concat(Object(O.a)(g.OFFERS()), ["currentOffersGroup"])
                    },
                    PROCESSES: function() {
                        return [].concat(Object(O.a)(g.INTERNET_GROUP()), ["currentOffer", "offerType"])
                    },
                    UPSELL: function() {
                        return Object(O.a)(g.PROCESSES())
                    },
                    AUTHORIZATION: function() {
                        return [].concat(Object(O.a)(g.PROCESSES()), ["currentProcess", "processType", "authorizationData", "authorizationType"])
                    },
                    LOCATION: function() {
                        return [].concat(Object(O.a)(g.AUTHORIZATION()), ["localizationData", "currentOffer", "offerType"])
                    },
                    SERVICES: function() {
                        return [].concat(Object(O.a)(g.LOCATION()), ["fixMigrationProcesses", "currentServiceName"])
                    },
                    FIX_PROCESSES: function() {
                        return [].concat(Object(O.a)(g.SERVICES()), ["currentFixMigrationProcessType"])
                    },
                    SELECT_NUMBER: function() {
                        return Object(O.a)(g.AUTHORIZATION())
                    },
                    SINGLE_OFFER: function() {
                        return [].concat(Object(O.a)(g.AUTHORIZATION()), Object(O.a)(g.LOCATION()), Object(O.a)(g.SELECT_NUMBER()), Object(O.a)(g.FIX_PROCESSES()), ["currentSingleOffer", "shouldUseDiscounts", "shouldShowOfferDetails", "singleOffers", "selectedTVPackages", "selectedOtherPackages", "selectedPackages", "packageConfiguratorType", "hasSelectedAccount"])
                    },
                    VERIFICATION: function() {
                        return [].concat(Object(O.a)(g.SINGLE_OFFER()), ["verificationError", "userNeedsVerification"])
                    },
                    ACCOUNTS: function() {
                        return [].concat(Object(O.a)(g.VERIFICATION()), ["shouldShowAccounts"])
                    },
                    MAINTENANCE: function() {
                        return Object(O.a)(g.GLOBAL())
                    },
                    ERROR: function() {
                        return [].concat(Object(O.a)(g.SINGLE_OFFER()), ["processError"])
                    },
                    SUMMARY: function() {
                        return [].concat(Object(O.a)(g.VERIFICATION()), ["shouldShowAccounts"])
                    },
                    CHANGE_ACCOUNT: function() {
                        return Object(O.a)(g.SINGLE_OFFER())
                    },
                    LOGIN: function() {
                        return Object(O.a)(g.SINGLE_OFFER())
                    }
                },
                E = function(e, t) {
                    return t.reduce((function(t, n) {
                        return t[n] = e[n], t
                    }), {})
                };

            function S(e, t) {
                var n;
                switch (t.type) {
                    case "selectOffer":
                        var r = function(e, t) {
                                return e && e.find((function(e) {
                                    return e.type === t
                                })) || void 0
                            },
                            a = "OFFERS" === e.currentStep ? E(e, g.OFFERS()) : E(e, g.INTERNET_GROUP()),
                            c = a.offers,
                            i = a.currentOffersGroup,
                            o = r(i ? i.offers : c, t.payload);
                        if (!o) throw new Error('Unknown offer type: "'.concat(t.payload, '"'));
                        if ("INTERNET_GROUP" === o.type) throw new Error('Cannot select offer group as offer: "'.concat(t.payload, '"'));
                        return j(v({}, y, {}, a, {
                            currentOffer: o,
                            currentStep: "OFFERS",
                            offerType: t.payload
                        }));
                    case "selectProcess":
                        var s = e.currentOffer;
                        if (!s) throw new Error('Missing "currentOffer" in "selectProcess" action');
                        var u = s.processes.find((function(e) {
                            return e.type === t.payload
                        }));
                        if (!u) throw new Error('Unknown process type "'.concat(t.payload, '" for currentOffer "').concat(s.type, '"'));
                        var l = E(e, g.PROCESSES());
                        return j(v({}, y, {}, l, {
                            currentStep: "PROCESSES",
                            processType: t.payload,
                            currentProcess: u
                        }));
                    case "selectOffersGroup":
                        var d = e.offers.find((function(e) {
                            return e.id === t.payload
                        }));
                        if (!d) throw new Error('Not found offer group: "'.concat(t.payload, '"'));
                        if ("INTERNET_GROUP" !== d.type) throw new Error('Cannot select offer as offer group: "'.concat(t.payload, '"'));
                        var p = E(e, g.INTERNET_GROUP());
                        return j(v({}, y, {}, p, {
                            currentOffersGroup: d,
                            offerType: null,
                            currentStep: "INTERNET_GROUP"
                        }));
                    case "setIsUserLogged":
                        return v({}, e, {
                            isUserLogged: t.payload
                        });
                    case "goToOffers":
                        var f = E(e, g.OFFERS());
                        return v({}, y, {}, f, {
                            currentStep: "OFFERS"
                        });
                    case "goToProcesses":
                        var b = E(e, g.PROCESSES());
                        return v({}, y, {}, b, {
                            currentStep: "PROCESSES"
                        });
                    case "goToLocation":
                        var m = E(e, g.LOCATION());
                        return v({}, y, {}, m, {
                            currentStep: "LOCATION"
                        });
                    case "goToSingleOffer":
                        var S = E(e, g.SINGLE_OFFER());
                        return v({}, y, {}, S, {
                            currentStep: "SINGLE_OFFER"
                        });
                    case "goToAuthorization":
                        var T = E(e, g.AUTHORIZATION());
                        return v({}, y, {}, T, {
                            currentStep: "AUTHORIZATION"
                        });
                    case "goToVerification":
                        var C = E(e, g.VERIFICATION());
                        return v({}, y, {}, C, {
                            currentStep: "VERIFICATION",
                            userNeedsVerification: !0
                        });
                    case "goToAccounts":
                        var w = E(e, g.ACCOUNTS());
                        return v({}, y, {}, w, {
                            currentStep: "ACCOUNTS"
                        });
                    case "goToChangeAccount":
                        var x = E(e, g.CHANGE_ACCOUNT());
                        return v({}, y, {}, x, {
                            currentStep: "CHANGE_ACCOUNT"
                        });
                    case "goToLogin":
                        var k = E(e, g.LOGIN());
                        return v({}, y, {}, k, {
                            currentStep: "LOGIN"
                        });
                    case "goToSelectNumber":
                        var P = E(e, g.SELECT_NUMBER());
                        return v({}, y, {}, P, {
                            currentStep: "SELECT_NUMBER"
                        });
                    case "goToMaintenance":
                        return v({}, e, {
                            currentStep: "MAINTENANCE"
                        });
                    case "goToOffersGroup":
                        var z = E(e, g.INTERNET_GROUP());
                        return v({}, y, {}, z, {
                            currentStep: "INTERNET_GROUP"
                        });
                    case "goToSummary":
                        var N = E(e, g.SUMMARY());
                        return v({}, y, {}, N, {
                            currentStep: "SUMMARY"
                        });
                    case "goToServices":
                        var R = E(e, g.SERVICES());
                        return v({}, y, {}, R, {
                            currentStep: "SERVICES"
                        });
                    case "goToFixProcesses":
                        var I = E(e, g.FIX_PROCESSES());
                        return v({}, y, {}, I, {
                            currentStep: "FIX_PROCESSES"
                        });
                    case "goToUpsell":
                        var A = E(e, g.UPSELL());
                        return v({}, y, {}, A, {
                            currentStep: "UPSELL"
                        });
                    case "setProcessError":
                        var _ = E(e, g.ERROR());
                        return j(v({}, y, {}, _, {
                            processError: t.payload
                        }));
                    case "showOfferDetails":
                        return v({}, e, {
                            shouldShowOfferDetails: t.payload
                        });
                    case "setAutorizationData":
                        return j(v({}, e, {
                            authorizationData: t.payload,
                            currentSingleOffer: null
                        }));
                    case "setShouldVerifyDiscount":
                        return v({}, e, {
                            shouldVerifyDiscounts: t.payload
                        });
                    case "setIsSuflerProcessing":
                        return v({}, e, {
                            isSuflerProcessing: t.payload
                        });
                    case "setCurrentSingleOffer":
                        return v({}, e, {
                            offerPackages: (null === (n = t.payload) || void 0 === n ? void 0 : n.mainServices) ? Object(h.a)(Object(h.b)(t.payload)) : [],
                            currentSingleOffer: t.payload,
                            selectedTVPackages: null,
                            selectedOtherPackages: null
                        });
                    case "setShouldUseDiscounts":
                        return v({}, e, {
                            shouldUseDiscounts: t.payload
                        });
                    case "setSingleOffers":
                        return v({}, e, {
                            singleOffers: t.payload
                        });
                    case "setIsLoadingSingleOffersList":
                        return v({}, e, {
                            isLoadingSingleOffersList: t.payload
                        });
                    case "setIsUserLoggedWithCAAP":
                        return v({}, e, {
                            isUserLoggedWithCAAP: t.payload
                        });
                    case "setIsUserLoggedWithSms":
                        return v({}, e, {
                            isUserLoggedWithSms: t.payload
                        });
                    case "setShouldShowAccounts":
                        return j(v({}, e, {
                            shouldShowAccounts: t.payload
                        }));
                    case "setVerificationError":
                        return v({}, e, {
                            verificationError: t.payload
                        });
                    case "setLocalizationData":
                        return j(v({}, e, {
                            localizationData: v({}, t.payload)
                        }));
                    case "showTVConfigurator":
                        return v({}, e, {
                            shouldShowTVConfigurator: t.payload
                        });
                    case "isSuflerDescriptionInView":
                        return v({}, e, {
                            isSuflerDescriptionInView: t.payload
                        });
                    case "isSuflerMainInView":
                        return v({}, e, {
                            isSuflerMainInView: t.payload
                        });
                    case "setPackageConfiguratorType":
                        return v({}, e, {
                            packageConfiguratorType: t.payload
                        });
                    case "replaceState":
                        return t.payload;
                    case "setUserNeedsVerification":
                        return v({}, e, {
                            userNeedsVerification: t.payload
                        });
                    case "setDoesPhoneLineExist":
                        return v({}, e, {
                            doesPhoneLineExist: t.payload
                        });
                    case "setCheckedPackages":
                        return "CHANNELS" === e.packageConfiguratorType ? v({}, e, {
                            selectedTVPackages: t.payload
                        }) : v({}, e, {
                            selectedOtherPackages: t.payload
                        });
                    case "setSelectedPackages":
                        return v({}, e, {
                            selectedPackages: t.payload
                        });
                    case "setCurrentStep":
                        return v({}, e, {
                            currentStep: t.payload
                        });
                    case "setContracts":
                        return v({}, e, {
                            contracts: t.payload
                        });
                    case "setSummaryData":
                        return v({}, e, {
                            summaryData: t.payload
                        });
                    case "appendOfferPackages":
                        var L = e.offerPackages.map((function(e) {
                            return e.id
                        }));
                        return v({}, e, {
                            offerPackages: [].concat(Object(O.a)(e.offerPackages), Object(O.a)(t.payload.filter((function(e) {
                                return !L.includes(e.id)
                            }))))
                        });
                    case "setFixMigrationProcesses":
                        return v({}, e, {
                            fixMigrationProcesses: t.payload
                        });
                    case "setCurrentFixMigrationProcessType":
                        return v({}, e, {
                            currentSingleOffer: null,
                            currentFixMigrationProcessType: t.payload
                        });
                    case "setHasSelectedAccount":
                        return v({}, e, {
                            hasSelectedAccount: t.payload
                        });
                    case "showPackageConfigurator":
                        return v({}, e, {
                            shouldShowPackagesConfigurator: t.payload
                        });
                    case "setCurrentServiceName":
                        return v({}, e, {
                            currentServiceName: t.payload
                        });
                    case "setCurrentUpsellOffer":
                        return v({}, e, {
                            currentUpsellOffer: t.payload
                        });
                    case "setCurrentUpselVariant":
                        return v({}, e, {
                            currentUpsellVariant: t.payload
                        });
                    case "sendSelectedAccount":
                        return v({}, e, {
                            selectedAccount: t.payload
                        });
                    case "setPreviousStep":
                        return v({}, e, {
                            previousStep: t.payload
                        });
                    case "resetSelectedOffer":
                        return v({}, e, {
                            currentOffer: null
                        });
                    case "resetSelectedProcess":
                        return v({}, e, {
                            currentProcess: null
                        });
                    case "setAuhtorizationType":
                        return v({}, e, {
                            authorizationType: t.payload
                        });
                    default:
                        return e
                }
            }
            var T = n("XWgT");

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var w = function(e, t) {
                if (!t) return e;
                var n, r = t.currentOfferId,
                    a = t.offerType,
                    c = t.phoneNumber,
                    o = t.processType,
                    s = t.groupType,
                    u = t.selectedPackages,
                    l = void 0 === u ? null : u,
                    d = t.currentOfferIds,
                    p = t.currentStep,
                    f = function(e, t) {
                        return e && e.find((function(e) {
                            return e.type === t
                        })) || null
                    }((n = e.offers) ? n.map((function(e) {
                        return Object(T.a)(e.type) ? e.offers : e
                    })).flat() : null, a),
                    b = e.offers.find((function(e) {
                        return e.type === s
                    })) || void 0,
                    O = f && f.processes.find((function(e) {
                        return e.type === o
                    })) || null,
                    h = d && d.split(",") || [];
                r && h.unshift(r);
                var m = "AUTHORIZATION" === p && "SINGLE_OFFER" === e.currentStep,
                    v = h.length > 0 || !!l;
                p = m && v ? "SINGLE_OFFER" : p;
                var y = e.singleOffers.map((function(e) {
                        return e.propositionId
                    })) || [],
                    j = h.find((function(e) {
                        return y.includes(e)
                    })),
                    g = "SINGLE_OFFER" === p && e.singleOffers.find((function(e) {
                        return e.propositionId === j
                    })) || e.singleOffers.find((function(e) {
                        return e.isDefault
                    })) || e.singleOffers[0];
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? C(Object(n), !0).forEach((function(t) {
                            Object(i.a)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e, {
                    offerType: a,
                    currentStep: p,
                    currentOffer: f,
                    currentProcess: O,
                    authorizationData: c ? {
                        phoneNumber: c,
                        isUserAuthenticated: !0
                    } : e.authorizationData,
                    currentOffersGroup: b,
                    isLoadingSingleOffersList: !1,
                    processType: o || null,
                    currentSingleOffer: g || null,
                    selectedPackages: l
                })
            };

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var k = function(e) {
                    var t = e.state,
                        n = e.cachedState,
                        r = e.configState,
                        a = e.queryState,
                        c = "SINGLE_OFFER" === (null === r || void 0 === r ? void 0 : r.currentStep) || "SINGLE_OFFER" === (null === a || void 0 === a ? void 0 : a.currentStep) || "AUTHORIZATION" === (null === r || void 0 === r ? void 0 : r.currentStep) || "AUTHORIZATION" === (null === a || void 0 === a ? void 0 : a.currentStep),
                        o = l.a.useRef(!c);
                    return l.a.useEffect((function() {
                        t.singleOffers.length > 0 && !1 === o.current && (o.current = !0)
                    }), [t.singleOffers.length]), l.a.useMemo((function() {
                        var e;
                        switch ((e = {
                            cachedState: n,
                            configState: r,
                            queryState: a
                        }).queryState ? "URL" : e.cachedState ? "CACHE" : e.configState ? "API" : null) {
                            case "CACHE":
                                return n;
                            case "URL":
                                return n && "SUMMARY" === (null === a || void 0 === a ? void 0 : a.currentStep) ? function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? x(Object(n), !0).forEach((function(t) {
                                            Object(i.a)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, n, {
                                    currentStep: a.currentStep
                                }) : w(t, a);
                            case "API":
                                return w(t, r);
                            default:
                                return t
                        }
                    }), [o.current])
                },
                P = n("v2bw"),
                z = n("BPef"),
                N = n("ptpn"),
                R = n("y6sE"),
                I = n("VfYs"),
                A = n("s11k"),
                _ = n("rpJ/"),
                L = n("AsJ6"),
                M = Object(_.a)({
                    initial: "initializing",
                    context: {
                        isLoggedIn: !0,
                        isUpsellEnabled: !1,
                        isEnhanced: !1,
                        areTransactionsEnabled: !1,
                        appSelectedAccount: null
                    },
                    states: {
                        initializing: {
                            on: {
                                "": [{
                                    target: "loading",
                                    cond: "isLoggedIn"
                                }, {
                                    target: "ready"
                                }]
                            }
                        },
                        loading: {
                            type: "parallel",
                            states: {
                                market: {
                                    initial: "loading",
                                    states: {
                                        loading: {
                                            invoke: {
                                                src: "checkMarket",
                                                onDone: {
                                                    target: "ready"
                                                },
                                                onError: {
                                                    actions: "handleMarketError",
                                                    target: "ready"
                                                }
                                            }
                                        },
                                        ready: {
                                            type: "final"
                                        }
                                    }
                                },
                                upsell: {
                                    id: "upsell",
                                    initial: "initializing",
                                    states: {
                                        initializing: {
                                            on: {
                                                "": [{
                                                    target: "#upsell.loading",
                                                    cond: "isUpsellEnabled"
                                                }, {
                                                    target: "#upsell.ready"
                                                }]
                                            }
                                        },
                                        loading: {
                                            on: {
                                                SET_ENHANCED: [{
                                                    actions: "setEnhanced",
                                                    target: "ready",
                                                    cond: function(e, t) {
                                                        return t.value
                                                    }
                                                }]
                                            },
                                            after: {
                                                upsell: {
                                                    target: "ready"
                                                }
                                            }
                                        },
                                        ready: {
                                            type: "final"
                                        }
                                    }
                                },
                                account: {
                                    initial: "initializing",
                                    states: {
                                        initializing: {
                                            on: {
                                                "": [{
                                                    target: "choosingAccount",
                                                    cond: "isAppSelectedAccount"
                                                }, {
                                                    target: "loadingCustomerData"
                                                }]
                                            }
                                        },
                                        loadingCustomerData: {
                                            invoke: {
                                                src: "fetchLoggedCustomerData",
                                                onDone: [{
                                                    target: "loadingTransactions",
                                                    cond: "transactionsAreEnabled"
                                                }, {
                                                    target: "ready"
                                                }],
                                                onError: {
                                                    target: "ready"
                                                }
                                            }
                                        },
                                        choosingAccount: {
                                            invoke: {
                                                src: "sendAccount",
                                                onDone: [{
                                                    target: "loadingTransactions",
                                                    cond: "transactionsAreEnabled"
                                                }, {
                                                    target: "ready"
                                                }],
                                                onError: {
                                                    target: "ready"
                                                }
                                            }
                                        },
                                        loadingTransactions: {
                                            invoke: {
                                                src: "fetchTransactions",
                                                onDone: {
                                                    target: "ready"
                                                },
                                                onError: {
                                                    target: "ready"
                                                }
                                            }
                                        },
                                        ready: {
                                            type: "final"
                                        }
                                    }
                                }
                            },
                            onDone: {
                                target: "ready"
                            }
                        },
                        ready: {
                            type: "final"
                        }
                    }
                }, {
                    actions: {
                        setEnhanced: Object(L.b)({
                            isEnhanced: function(e, t) {
                                return t.value
                            }
                        })
                    },
                    guards: {
                        transactionsAreEnabled: function(e) {
                            return e.areTransactionsEnabled
                        },
                        isLoggedIn: function(e) {
                            return e.isLoggedIn
                        },
                        isUpsellEnabled: function(e) {
                            return e.isUpsellEnabled
                        },
                        isEnhance: function(e) {
                            return e.isEnhanced
                        },
                        isAppSelectedAccount: function(e) {
                            var t, n;
                            return Boolean((null === (t = e.appSelectedAccount) || void 0 === t ? void 0 : t.code) && (null === (n = e.appSelectedAccount) || void 0 === n ? void 0 : n.id))
                        }
                    },
                    delays: {
                        upsell: 5e3
                    }
                }),
                D = n("3oP0"),
                B = n("Q1tT"),
                F = n("l1C2");
            l.a.createElement;

            function V(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(n), !0).forEach((function(t) {
                        Object(i.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var H = l.a.createContext(null),
                G = l.a.memo((function(e) {
                    var t = e.offers,
                        n = e.id,
                        a = e.pk,
                        i = e.configParams,
                        u = e.market,
                        O = e.isUserLogged,
                        h = e.isInApp,
                        m = Object(s.a)(e, ["offers", "id", "pk", "configParams", "market", "isUserLogged", "isInApp"]),
                        v = Object(R.b)().appSelectedAccount,
                        j = Object(P.b)().index,
                        g = Object(z.a)(n),
                        E = Object(B.c)(),
                        T = E.suflerTransactions,
                        C = E.webUpsell,
                        w = function(e) {
                            var t = Object(R.b)().isMaintenance,
                                n = l.a.useCallback((function() {
                                    Object(N.a)({
                                        key: "sufler-".concat(e)
                                    })
                                }), [e]),
                                r = l.a.useMemo((function() {
                                    try {
                                        var r = p.b.getItem("sufler-".concat(e));
                                        if (null === r) return null;
                                        var a = JSON.parse(r),
                                            c = Date.now() - a.createTime > 18e5,
                                            i = !t && "MAINTENANCE" === a.state.currentStep;
                                        return c || i || t ? (n(), null) : a.state
                                    } catch (o) {
                                        return null
                                    }
                                }), [n, e, t]);
                            return {
                                clearCache: n,
                                cachedState: r
                            }
                        }(n),
                        x = w.cachedState,
                        _ = w.clearCache,
                        L = l.a.useState(null),
                        V = Object(o.a)(L, 2),
                        G = V[0],
                        W = V[1],
                        K = {
                            cachedState: x,
                            queryState: g,
                            configState: i || null
                        },
                        q = k(U({
                            state: U({}, y, {
                                pk: a,
                                id: n,
                                offers: t,
                                isUserLogged: O
                            })
                        }, K)),
                        Y = l.a.useReducer(S, U({}, q, {
                            shouldUseDiscounts: h
                        })),
                        X = Object(o.a)(Y, 2),
                        J = X[0],
                        Z = X[1],
                        Q = Object(b.useMachine)(M, {
                            context: {
                                isLoggedIn: O,
                                isUpsellEnabled: h || C,
                                isEnhanced: !!G,
                                appSelectedAccount: v,
                                areTransactionsEnabled: O && (T || h)
                            },
                            actions: {
                                handleMarketError: function(e, t) {
                                    switch (t.data.message) {
                                        case "B2B_IN_CART":
                                            Z({
                                                type: "setProcessError",
                                                payload: {
                                                    type: "B2C_CLIENT"
                                                }
                                            });
                                            break;
                                        case "B2C_IN_CART":
                                            Z({
                                                type: "setProcessError",
                                                payload: {
                                                    type: "B2B_CLIENT"
                                                }
                                            });
                                            break;
                                        default:
                                            Z({
                                                type: "setProcessError",
                                                payload: {
                                                    type: "CHECK_MARKET_ERROR",
                                                    data: {
                                                        message: t.data.message,
                                                        backTo: "goToOffers"
                                                    }
                                                }
                                            })
                                    }
                                }
                            },
                            services: {
                                fetchTransactions: function() {
                                    var e;
                                    return c.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, c.a.awrap(Object(D.e)());
                                            case 2:
                                                e = t.sent, Z({
                                                    type: "setContracts",
                                                    payload: e
                                                });
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, null, Promise)
                                },
                                checkMarket: function() {
                                    var e;
                                    return c.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, c.a.awrap(Object(I.b)());
                                            case 2:
                                                return e = t.sent, t.abrupt("return", Object(A.a)({
                                                    csrfToken: e
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, null, Promise)
                                },
                                sendAccount: function(e) {
                                    var t, n;
                                    return Object(D.l)({
                                        id: (null === (t = e.appSelectedAccount) || void 0 === t ? void 0 : t.id) || "",
                                        accountCode: (null === (n = e.appSelectedAccount) || void 0 === n ? void 0 : n.code) || ""
                                    }).then((function(t) {
                                        t && (Z({
                                            type: "sendSelectedAccount",
                                            payload: e.appSelectedAccount || null
                                        }), e.appSelectedAccount && (Object(f.a)("accountCode", "", 0), Object(f.a)("accountId", "", 0)))
                                    }))
                                },
                                fetchLoggedCustomerData: function() {
                                    return Object(D.k)().then((function(e) {
                                        if (e) {
                                            var t = e.accountCode,
                                                n = e.accountId;
                                            Z({
                                                type: "sendSelectedAccount",
                                                payload: t && n ? {
                                                    id: n,
                                                    code: t
                                                } : null
                                            })
                                        }
                                    }))
                                }
                            }
                        }),
                        $ = Object(o.a)(Q, 2),
                        ee = $[0],
                        te = $[1],
                        ne = k(U({
                            state: J
                        }, K)),
                        re = l.a.useCallback((function(e) {
                            ee.matches("ready") || (null === e || void 0 === e ? void 0 : e.id) === n && (te({
                                type: "SET_ENHANCED",
                                value: !!e
                            }), W(e))
                        }), [ee, te, n]);
                    l.a.useEffect((function() {
                        window.OplContentApi ? window.OplContentApi.enhance = re : window.OplContentApi = {
                            version: "1",
                            enhance: re
                        }
                    }), [re]), l.a.useEffect((function() {
                        (function(e, t) {
                            try {
                                return JSON.stringify(e) === JSON.stringify(t)
                            } catch (n) {
                                return !1
                            }
                        })(q, ne) || Z({
                            type: "replaceState",
                            payload: ne
                        })
                    }), [ne, q]), l.a.useEffect((function() {
                        var e = U({}, J, {
                                isSuflerProcessing: !1
                            }),
                            t = JSON.stringify({
                                state: e,
                                createTime: Date.now()
                            });
                        p.b.setItem("sufler-".concat(n), t)
                    }), [n, J]), l.a.useEffect((function() {
                        Z({
                            type: "setIsUserLogged",
                            payload: O
                        })
                    }), [O]);
                    var ae = ee.matches("ready"),
                        ce = l.a.useMemo((function() {
                            return U({}, J, {
                                id: n,
                                dispatch: Z,
                                clearCache: _,
                                internalID: j,
                                showNetPrices: Object(d.a)(u),
                                isB2B: Object(d.a)(u),
                                pk: a,
                                isUserLogged: O,
                                isInitializing: !ae,
                                enhance: G
                            })
                        }), [J, n, _, j, u, a, O, ae, G]);
                    return Object(F.b)(H.Provider, Object(r.a)({
                        value: ce
                    }, m))
                }));
            G.displayName = "SuflerProvider";
            var W = function() {
                var e = l.a.useContext(H);
                if (null === e) throw Error("useSuflerContext: Please provide SuflerProvider value.");
                return e
            }
        },
        azwC: function(e, t, n) {
            "use strict";
            var r = this && this.__assign || function() {
                    return (r = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e
                    }).apply(this, arguments)
                },
                a = this && this.__rest || function(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                        var a = 0;
                        for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
                    }
                    return n
                },
                c = this && this.__read || function(e, t) {
                    var n = "function" === typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, a, c = n.call(e),
                        i = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = c.next()).done;) i.push(r.value)
                    } catch (o) {
                        a = {
                            error: o
                        }
                    } finally {
                        try {
                            r && !r.done && (n = c.return) && n.call(c)
                        } finally {
                            if (a) throw a.error
                        }
                    }
                    return i
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n("ERkP"),
                o = n("Gtiz"),
                s = {
                    immediate: !1
                };
            t.useMachine = function(e, t) {
                void 0 === t && (t = s);
                var n = t.context,
                    u = t.guards,
                    l = t.actions,
                    d = t.activities,
                    p = t.services,
                    f = t.delays,
                    b = t.immediate,
                    O = t.state,
                    h = a(t, ["context", "guards", "actions", "activities", "services", "delays", "immediate", "state"]),
                    m = {
                        context: n,
                        guards: u,
                        actions: l,
                        activities: d,
                        services: p,
                        delays: f
                    },
                    v = i.useRef(null);
                null === v.current && (v.current = e.withConfig(m, r(r({}, e.context), n)));
                var y = i.useRef(null);
                null === y.current && (y.current = o.interpret(v.current, h).onTransition((function(e) {
                    e.changed && T(e)
                })));
                var j = y.current;
                i.useEffect((function() {
                    Object.assign(j.machine.options.actions, l)
                }), [l]), i.useEffect((function() {
                    Object.assign(j.machine.options.services, p)
                }), [p]);
                var g = O ? o.State.create(O) : j.initialState,
                    E = c(i.useState((function() {
                        return g
                    })), 2),
                    S = E[0],
                    T = E[1];
                return b && j.start(), i.useEffect((function() {
                    return j.start(O ? g : void 0),
                        function() {
                            j.stop()
                        }
                }), []), [S, j.send, j]
            }, t.useService = function(e) {
                var t = c(i.useState(e.state), 2),
                    n = t[0],
                    r = t[1];
                return i.useEffect((function() {
                    r(e.state);
                    var t = e.subscribe((function(e) {
                        e.changed && r(e)
                    }));
                    return function() {
                        t.unsubscribe()
                    }
                }), [e]), [n, e.send, e]
            };
            var u = n("lZyh");
            t.useActor = u.useActor
        },
        bVfH: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return O
            })), n.d(t, "d", (function() {
                return h
            })), n.d(t, "f", (function() {
                return m
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "b", (function() {
                return y
            })), n.d(t, "a", (function() {
                return j
            }));
            var r = n("zjfJ"),
                a = n("zygG"),
                c = n("VtSi"),
                i = n.n(c),
                o = n("pu3o"),
                s = n.n(o),
                u = n("VfYs"),
                l = n("com9");

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f = function(e) {
                    var t, n;
                    return i.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return t = e.shouldGetLastItem, r.next = 3, i.a.awrap(l.a.get("/hapi/koszyk/minikoszyk", {
                                    params: {
                                        lastBundleMode: t
                                    }
                                }));
                            case 3:
                                return n = r.sent, r.abrupt("return", n.data);
                            case 5:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                b = function() {
                    var e;
                    return i.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, i.a.awrap(f({
                                    shouldGetLastItem: !1
                                }));
                            case 2:
                                return e = t.sent, t.abrupt("return", e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                },
                O = function() {
                    var e;
                    return i.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, i.a.awrap(f({
                                    shouldGetLastItem: !0
                                }));
                            case 2:
                                return e = t.sent, t.abrupt("return", e);
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                },
                h = function() {
                    var e, t, n, r, a, c, o;
                    return i.a.async((function(s) {
                        for (;;) switch (s.prev = s.next) {
                            case 0:
                                return s.next = 2, i.a.awrap(l.a.get("/hapi/koszyk/multi/_data/cart"));
                            case 2:
                                return e = s.sent, t = e.data, n = t.monthlyCosts, r = t.oneTimeCost, a = t.checkoutCost, c = t.bonuses, o = t.net, s.abrupt("return", {
                                    monthlyCosts: n,
                                    oneTimeCost: r,
                                    checkoutCost: a,
                                    bonuses: c,
                                    net: o
                                });
                            case 5:
                            case "end":
                                return s.stop()
                        }
                    }), null, null, null, Promise)
                },
                m = function() {
                    var e, t, n, r, c, o, s, u, l, d;
                    return i.a.async((function(f) {
                        for (;;) switch (f.prev = f.next) {
                            case 0:
                                return f.next = 2, i.a.awrap(Promise.all([b(), h()]));
                            case 2:
                                return e = f.sent, t = Object(a.a)(e, 2), n = t[0], r = t[1], c = r.monthlyCosts, o = r.oneTimeCost, s = r.checkoutCost, u = r.bonuses, l = r.net, d = p({}, n, {
                                    monthlyCosts: c,
                                    oneTimeCost: o,
                                    checkoutCost: s,
                                    bonuses: u,
                                    net: l
                                }), f.abrupt("return", d);
                            case 9:
                            case "end":
                                return f.stop()
                        }
                    }), null, null, null, Promise)
                },
                v = function(e) {
                    var t;
                    return i.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, i.a.awrap(Object(u.b)());
                            case 2:
                                return t = n.sent, n.next = 5, i.a.awrap(l.a.post("/koszyk/usun/".concat(e), null, {
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 5:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                y = function(e, t, n) {
                    var r;
                    return i.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, i.a.awrap(Object(u.b)());
                            case 2:
                                return r = a.sent, a.next = 5, i.a.awrap(l.a.post("/hapi/koszyk/removeDeviceFromSimFreeBundle", s.a.stringify({
                                    bundleNo: e,
                                    entryNumber: t,
                                    lastOne: n
                                }), {
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                j = function() {
                    var e;
                    return i.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, i.a.awrap(Object(u.b)());
                            case 2:
                                return e = t.sent, t.next = 5, i.a.awrap(l.a.post("/koszyk/usun/", null, {
                                    headers: {
                                        csrftoken: e
                                    }
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        cAUT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 999.1 1000",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M19.5 271.9c.7-3.3 1.3-6.5 2.2-9.8 11.5-43.2 65.2-58.7 97.9-28.2 1.8 1.6 3.4 3.4 5.1 5.1 123.6 123.7 372.9 373.9 374.9 376.6 2-2.8 252.9-254.7 377.2-379 19.9-19.9 48.2-24.3 71.8-11.3 34 18.7 41.3 64.6 14.7 92.9-2 2.1-4 4.1-6.1 6.1C805.8 475.9 500.9 781 500 782.1h-1c-1.1-1.3-103.6-104.2-153.7-154.4-102-102-203.9-204-305.9-305.9-9.2-9.2-15.8-19.6-18.4-32.4-.4-2-.9-4-1.4-6-.1-3.8-.1-7.7-.1-11.5z"
                    }))
                })));
            i.displayName = "ArrowDownIcon"
        },
        cFFy: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return e.split(/(\d{3})/).join(" ").trim()
            }
        },
        cVGl: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }
        },
        com9: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "a", (function() {
                return a
            })), (r = n("jmmm").instance).interceptors.response.use((function(e) {
                if ("Page not found" === e.data.status) {
                    var t = new Error("Page not found: ".concat(e.config.url));
                    throw t.status = 404, t
                }
                return e
            }));
            var a = r
        },
        dyNj: function(e, t, n) {
            "use strict";
            (function(t) {
                var r = n("P0jV"),
                    a = n("rFSu"),
                    c = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function i(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var o = {
                    adapter: function() {
                        var e;
                        return "undefined" !== typeof XMLHttpRequest ? e = n("Ay6X") : "undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t) && (e = n("Ay6X")), e
                    }(),
                    transformRequest: [function(e, t) {
                        return a(t, "Accept"), a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function(e) {
                        if ("string" === typeof e) try {
                            e = JSON.parse(e)
                        } catch (t) {}
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], (function(e) {
                    o.headers[e] = {}
                })), r.forEach(["post", "put", "patch"], (function(e) {
                    o.headers[e] = r.merge(c)
                })), e.exports = o
            }).call(this, n("F63i"))
        },
        eGgp: function(e, t, n) {
            "use strict";
            var r = n("P0jV"),
                a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, c, i = {};
                return e ? (r.forEach(e.split("\n"), (function(e) {
                    if (c = e.indexOf(":"), t = r.trim(e.substr(0, c)).toLowerCase(), n = r.trim(e.substr(c + 1)), t) {
                        if (i[t] && a.indexOf(t) >= 0) return;
                        i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
                    }
                })), i) : i
            }
        },
        fGyu: function(e, t, n) {
            "use strict";

            function r(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        ggb3: function(e, t, n) {
            e.exports = n("8dj6")
        },
        h8xc: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        id: "close_svg__Warstwa_1",
                        x: 0,
                        y: 0,
                        viewBox: "0 0 12 12",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("style", {
                        type: "text/css"
                    }), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M12 2.1L9.9 0 6 3.9 2.1 0 0 2.1 3.9 6 0 9.9 2.1 12 6 8.1 9.9 12 12 9.9 8.1 6z"
                    }))
                })));
            i.displayName = "CloseIcon"
        },
        hwMz: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        viewBox: "0 0 51 86",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fillRule: "evenodd",
                        d: "M45.9 0H5.09C2.28 0 0 2.26 0 5.06v75.89c0 2.8 2.28 5.06 5.09 5.06H45.9c2.81 0 5.09-2.26 5.09-5.06V5.06c0-2.8-2.28-5.06-5.09-5.06zM21.67 2.53h7.65c.7 0 1.27.57 1.27 1.26 0 .7-.57 1.27-1.27 1.27h-7.65c-.7 0-1.28-.57-1.28-1.27 0-.69.58-1.26 1.28-1.26zm3.82 80.95c-1.4 0-2.55-1.13-2.55-2.53 0-1.39 1.15-2.53 2.55-2.53 1.41 0 2.55 1.14 2.55 2.53 0 1.4-1.14 2.53-2.55 2.53zm20.4-7.59H5.1V7.59h40.79v68.3z",
                        fill: "currentColor"
                    }))
                })));
            i.displayName = "Phone6Icon"
        },
        iJGL: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var r = n("WDwj"),
                a = {
                    deferEvents: !1
                },
                c = function() {
                    function e(e) {
                        this.processingEvent = !1, this.queue = [], this.initialized = !1, this.options = Object(r.a)(Object(r.a)({}, a), e)
                    }
                    return e.prototype.initialize = function(e) {
                        if (this.initialized = !0, e) {
                            if (!this.options.deferEvents) return void this.schedule(e);
                            this.process(e)
                        }
                        this.flushEvents()
                    }, e.prototype.schedule = function(e) {
                        if (this.initialized && !this.processingEvent) {
                            if (0 !== this.queue.length) throw new Error("Event queue should be empty when it is not processing events");
                            this.process(e), this.flushEvents()
                        } else this.queue.push(e)
                    }, e.prototype.clear = function() {
                        this.queue = []
                    }, e.prototype.flushEvents = function() {
                        for (var e = this.queue.shift(); e;) this.process(e), e = this.queue.shift()
                    }, e.prototype.process = function(e) {
                        this.processingEvent = !0;
                        try {
                            e()
                        } catch (t) {
                            throw this.clear(), t
                        } finally {
                            this.processingEvent = !1
                        }
                    }, e
                }()
        },
        jmmm: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "instance", (function() {
                return o
            }));
            var r = n("ggb3"),
                a = n.n(r),
                c = n("0D0S"),
                i = n.n(c)()().publicRuntimeConfig,
                o = a.a.create({
                    baseURL: i.OMNIFRONTEND_HOST
                })
        },
        kN39: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function(e) {
                return "B2C" !== e
            }
        },
        lZyh: function(e, t, n) {
            "use strict";
            var r = this && this.__read || function(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, a, c = n.call(e),
                    i = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = c.next()).done;) i.push(r.value)
                } catch (o) {
                    a = {
                        error: o
                    }
                } finally {
                    try {
                        r && !r.done && (n = c.return) && n.call(c)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return i
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n("ERkP");
            t.useActor = function(e) {
                var t = r(a.useState(void 0), 2),
                    n = t[0],
                    c = t[1],
                    i = a.useRef(e);
                return a.useEffect((function() {
                    if (e) {
                        i.current = e;
                        var t = e.subscribe(c);
                        return function() {
                            t.unsubscribe()
                        }
                    }
                }), [e]), [n, i.current ? i.current.send : function() {}]
            }
        },
        mq7k: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return s
            })), n.d(t, "c", (function() {
                return O
            })), n.d(t, "d", (function() {
                return b
            })), n.d(t, "e", (function() {
                return p
            })), n.d(t, "f", (function() {
                return f
            })), n.d(t, "g", (function() {
                return d
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "i", (function() {
                return m
            })), n.d(t, "j", (function() {
                return i
            })), n.d(t, "k", (function() {
                return o
            })), n.d(t, "l", (function() {
                return a
            })), n.d(t, "m", (function() {
                return c
            })), n.d(t, "n", (function() {
                return h
            }));
            var r = n("C1IE"),
                a = r.a.Start,
                c = r.a.Stop,
                i = r.a.Raise,
                o = r.a.Send,
                s = r.a.Cancel,
                u = r.a.NullEvent,
                l = r.a.Assign,
                d = (r.a.After, r.a.DoneState, r.a.Log),
                p = r.a.Init,
                f = r.a.Invoke,
                b = (r.a.ErrorExecution, r.a.ErrorPlatform),
                O = r.a.ErrorCustom,
                h = r.a.Update,
                m = r.a.Pure
        },
        mwJI: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("AknM");

            function a(e) {
                if (!r.a && "undefined" !== typeof window) {
                    var t = function() {
                        var e = window;
                        if (e.__xstate__) return e.__xstate__
                    }();
                    t && t.register(e)
                }
            }
        },
        nhRS: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        "data-name": "Warstwa 1",
                        viewBox: "0 0 647.27 839.07",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M504.02 480.19c-8.78 0-17.22-.08-25.66 0a192.49 192.49 0 00-87.14 21.7 21.08 21.08 0 01-9 2.18c-15.17.22-30.34.1-46 .1 0 11.53-.19 22.69.09 33.83a17.88 17.88 0 01-4.46 12.53c-6.84 8.55-12.94 17.69-19.65 27V360.39H192.28v143.7h-144v120h245.61l-4.54 24h-97v119.62h121.13a194.74 194.74 0 0039.25 48.22c-2.1.16-3.43.34-4.75.34H48.85c-27.88 0-48.83-21-48.83-49V48.97c0-27.93 21-48.95 48.86-49q141.64-.07 283.29.1a10.31 10.31 0 016.6 2.7q81.46 81.21 162.62 162.68a10.31 10.31 0 012.67 6.61q.2 152.45.1 304.89c.01 1.41-.12 2.81-.14 3.24zM336.39 360.13v119.74h119.77v-4.55-89.26c0-16.07-9.94-25.91-26.11-25.92H336.4zM167.72 479.97V360.13H74.33c-16.48 0-26.3 9.8-26.31 26.22v88.78c0 1.55.13 3.1.21 4.84h119.49zM48.02 648.33v93.35c0 16.82 9.7 26.58 26.41 26.59h93.3V648.33H48.02z"
                    }), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M647.26 672.35c-1.29 93-74.25 167-167.56 166.71-93-.25-166.55-74.23-166.36-167.17s74-166.61 167.05-166.47 165.71 74.11 166.87 166.93zm-194.31 6.77c-10.77-12-20.14-22.49-29.58-32.92-6.74-7.44-16-7.74-23.26-.84-1.51 1.43-2.95 2.93-4.41 4.41-7.82 7.92-8.23 15.48-1.26 24.25q23.28 29.3 46.61 58.57c9 11.32 19.22 11.36 28.17.12q32.88-41.29 65.73-82.59c10.66-13.39 21.41-26.71 31.93-40.2 7.66-9.81 3.11-23.16-8.62-25.65-6.23-1.33-11.12 1.22-15.52 5.52q-39.81 38.91-79.7 77.73c-3.52 3.45-6.5 7.45-10.08 11.6z"
                    }))
                })));
            i.displayName = "SimActivationIcon"
        },
        o5YE: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.storageFactory = function(e) {
                var t = {};

                function n() {
                    try {
                        var t = "__some_random_key_you_are_not_going_to_use__";
                        return e().setItem(t, t), e().removeItem(t), !0
                    } catch (n) {
                        return !1
                    }
                }
                return {
                    getItem: function(r) {
                        return n() ? e().getItem(r) : t.hasOwnProperty(r) ? t[r] : null
                    },
                    setItem: function(r, a) {
                        n() ? e().setItem(r, a) : t[r] = String(a)
                    },
                    removeItem: function(r) {
                        n() ? e().removeItem(r) : delete t[r]
                    },
                    clear: function() {
                        n() ? e().clear() : t = {}
                    },
                    key: function(r) {
                        return n() ? e().key(r) : Object.keys(t)[r] || null
                    },
                    get length() {
                        return n() ? e().length : Object.keys(t).length
                    }
                }
            }
        },
        pQXz: function(e, t, n) {
            "use strict";
            var r = n("M44J");
            e.exports = function(e, t, n, a, c) {
                var i = new Error(e);
                return r(i, t, n, a, c)
            }
        },
        ptpn: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("EJk9"),
                a = function(e) {
                    var t = e.key,
                        n = e.prefix;
                    if (t) r.b.removeItem(t);
                    else if (n) try {
                        Object.keys(window.sessionStorage).filter((function(e) {
                            return e.match("^".concat(n))
                        })).forEach((function(e) {
                            return r.b.removeItem(e)
                        }))
                    } catch (a) {}
                }
        },
        qvwg: function(e, t, n) {
            "use strict";
            var r = n("BP9p"),
                a = n("E7j9");
            e.exports = function(e, t) {
                return e && !r(t) ? a(e, t) : t
            }
        },
        rFSu: function(e, t, n) {
            "use strict";
            var r = n("P0jV");
            e.exports = function(e, t) {
                r.forEach(e, (function(n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                }))
            }
        },
        "rpJ/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return c
            }));
            var r = n("B4/D");

            function a(e, t, n) {
                void 0 === n && (n = e.context);
                var a = "function" === typeof n ? n() : n;
                return new r.a(e, t, a)
            }

            function c(e, t) {
                var n = "function" === typeof e.context ? e.context() : e.context;
                return new r.a(e, t, n)
            }
        },
        s11k: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return l
            })), n.d(t, "c", (function() {
                return d
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "f", (function() {
                return f
            })), n.d(t, "d", (function() {
                return h
            })), n.d(t, "b", (function() {
                return m
            })), n.d(t, "a", (function() {
                return v
            })), n.d(t, "h", (function() {
                return y
            }));
            var r = n("VtSi"),
                a = n.n(r),
                c = n("pu3o"),
                i = n.n(c),
                o = n("com9"),
                s = n("VfYs"),
                u = function(e) {
                    var t, n, r;
                    return a.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.phone, n = e.processType, c.next = 3, a.a.awrap(Object(s.b)());
                            case 3:
                                return r = c.sent, c.next = 6, a.a.awrap(o.a.post("/hapi/customerSmsVerification/setMsisdnOrLogin", i.a.stringify({
                                    msisdn: t,
                                    processType: n || ""
                                }), {
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        csrftoken: r
                                    }
                                }));
                            case 6:
                            case "end":
                                return c.stop()
                        }
                    }), null, null, null, Promise)
                },
                l = function(e) {
                    var t, n, r, c;
                    return a.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.phone, n = e.processType, i.next = 3, a.a.awrap(Object(s.b)());
                            case 3:
                                return r = i.sent, i.next = 6, a.a.awrap(u({
                                    phone: t,
                                    processType: n
                                }));
                            case 6:
                                return i.next = 8, a.a.awrap(o.a.post("/verifyMSISDN/sendOtp", {
                                    pageVariant: "VERIFICATION_OTP_VARIANT_7_SMS_CODE"
                                }, {
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 8:
                                if ("OK" !== (c = i.sent).data.status) {
                                    i.next = 11;
                                    break
                                }
                                return i.abrupt("return", c.data);
                            case 11:
                                throw new Error(c.data.statusMessage);
                            case 12:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, null, Promise)
                },
                d = function(e) {
                    var t, n;
                    return a.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return t = e.phone, n = e.processType, r.next = 3, a.a.awrap(u({
                                    phone: t,
                                    processType: n
                                }));
                            case 3:
                                return r.next = 5, a.a.awrap(O());
                            case 5:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                p = function(e) {
                    var t, n, r;
                    return a.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.token, c.next = 3, a.a.awrap(Object(s.b)());
                            case 3:
                                return n = c.sent, c.next = 6, a.a.awrap(o.a.post("/resendOtp", {
                                    pageVariant: "VERIFICATION_OTP_VARIANT_7_SMS_CODE",
                                    requestToken: t
                                }, {
                                    headers: {
                                        csrftoken: n
                                    }
                                }));
                            case 6:
                                return r = c.sent, c.abrupt("return", r.data);
                            case 8:
                            case "end":
                                return c.stop()
                        }
                    }), null, null, null, Promise)
                },
                f = function(e) {
                    var t, n, r, c, i;
                    return a.a.async((function(u) {
                        for (;;) switch (u.prev = u.next) {
                            case 0:
                                return t = e.password, n = e.login, u.next = 3, a.a.awrap(Object(s.b)());
                            case 3:
                                return r = u.sent, u.next = 6, a.a.awrap(o.a.post("/hapi/verifyPortalLogin/login", {
                                    password: t
                                }, {
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 6:
                                if ("OK" === (c = u.sent).data.status) {
                                    u.next = 9;
                                    break
                                }
                                throw new Error(c.data.statusMessage);
                            case 9:
                                return u.next = 11, a.a.awrap(b(n));
                            case 11:
                                if (!(i = u.sent).message) {
                                    u.next = 14;
                                    break
                                }
                                throw new Error(i.message);
                            case 14:
                                return u.abrupt("return", c.data);
                            case 15:
                            case "end":
                                return u.stop()
                        }
                    }), null, null, null, Promise)
                },
                b = function(e) {
                    var t, n;
                    return a.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, a.a.awrap(Object(s.b)());
                            case 2:
                                return t = r.sent, r.next = 5, a.a.awrap(o.a.post("/hapi/customerSmsVerification/setCimByLogin", i.a.stringify({
                                    login: e
                                }), {
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 5:
                                return n = r.sent, r.abrupt("return", n.data);
                            case 7:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                O = function() {
                    var e;
                    return a.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, a.a.awrap(Object(s.b)());
                            case 2:
                                return e = t.sent, t.next = 5, a.a.awrap(o.a.post("/hapi/verifyPortalLogin/sendPasswordVerificationTemplate", {
                                    pageVariant: "VERIFICATION_PORTAL_PASSWORD"
                                }, {
                                    headers: {
                                        csrftoken: e
                                    }
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), null, null, null, Promise)
                },
                h = function(e) {
                    var t, n, r, c, i, u, l, d;
                    return a.a.async((function(p) {
                        for (;;) switch (p.prev = p.next) {
                            case 0:
                                return t = e.pesel, n = e.apartmentNo, r = e.cbsIdCity, c = e.cbsIdStreet, i = e.city, u = e.roadNo, l = e.street, p.next = 3, a.a.awrap(Object(s.b)());
                            case 3:
                                return d = p.sent, p.next = 6, a.a.awrap(o.a.post("/hapi/customerAddressVerification/requestPeselAddressVerification/".concat(t), {
                                    townId: r,
                                    streetId: c,
                                    streetName: l,
                                    streetNumber: u,
                                    town: i,
                                    appartmentNo: n
                                }, {
                                    headers: {
                                        csrftoken: d
                                    }
                                }));
                            case 6:
                            case "end":
                                return p.stop()
                        }
                    }), null, null, null, Promise)
                },
                m = function(e) {
                    var t;
                    return a.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, a.a.awrap(o.a.get("/hapi/customerAddressVerification/isVerified?_=".concat(e)));
                            case 2:
                                if ("false" !== (t = n.sent).data) {
                                    n.next = 5;
                                    break
                                }
                                throw new Error;
                            case 5:
                                return n.abrupt("return", t.data);
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                v = function(e) {
                    var t, n, r;
                    return a.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.csrfToken, n = e.phone, c.next = 3, a.a.awrap(o.a.get("/hapi/pwa/v1/offerSelector/checkMarket", {
                                    params: {
                                        msisdn: n
                                    },
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 3:
                                if (0 === (r = c.sent).data.status) {
                                    c.next = 6;
                                    break
                                }
                                throw new Error(r.data.message);
                            case 6:
                                return c.abrupt("return", r.data);
                            case 7:
                            case "end":
                                return c.stop()
                        }
                    }), null, null, null, Promise)
                },
                y = function(e) {
                    var t, n, r, c;
                    return a.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.csrfToken, n = e.code, r = e.token, i.next = 3, a.a.awrap(o.a.post("/verifyMSISDN/verify", {
                                    verificationParameters: {
                                        OTP_CODE: n
                                    },
                                    verificationToken: r
                                }, {
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 3:
                                if ("OK" === (c = i.sent).data.status) {
                                    i.next = 6;
                                    break
                                }
                                throw new Error(c.data.statusMessage);
                            case 6:
                                return i.abrupt("return", c.data);
                            case 7:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        sXW5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        x: 0,
                        y: 0,
                        viewBox: "0 0 300 300",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M295.9 235.1l-116-201.3c-6.3-9.9-17.3-16.4-29.9-16.4-12.6 0-23.6 6.6-29.9 16.4L5.9 232.2C2.2 237.4 0 243.8 0 250.7c0 17.7 14.3 32 32 32h236c17.7 0 32-14.3 32-32 0-5.7-1.5-11-4.1-15.6zM150 251.4c-9.2 0-16.7-7.5-16.7-16.7S140.8 218 150 218s16.7 7.5 16.7 16.7-7.5 16.7-16.7 16.7zm9.5-61.6c0 6.4-3.1 9.5-9.5 9.5s-9.5-3.1-9.5-9.5c0 0-7.3-87.1-7.3-87.9 0-9.2 7.5-16.7 16.7-16.7s16.7 7.5 16.7 16.7c.1.8-7.1 87.9-7.1 87.9z"
                    }))
                })));
            i.displayName = "WarnIcon"
        },
        tkdL: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        "data-name": "Warstwa 1",
                        viewBox: "0 0 776.93 534.93",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        fill: "currentColor",
                        d: "M534.9 0v157h-31V32h-472v298h267v79h-5.2c-69.7 0-139.5-.1-209.2.1-5.5 0-6.5-1.9-6.4-6.7.3-13.2.1-26.5.1-40.4H0V0zM283 369.5a15.37 15.37 0 00-15.6-15.6 15.6 15.6 0 1015.6 15.6zM747.9 478h-426V212.4c0-20.8 11.2-32.1 31.8-32.1h362.9c19.6 0 31.3 11.5 31.3 30.9V478zm-29-29V209h-368v240zm-425 67c0 14.6 4.4 18.9 19.2 18.9h444.7c2.1 0 4.1.1 6.2-.1 6.7-.7 12.1-5 12.6-11.6.6-10 .2-20.1.2-31.3H578.5c-4.2 12.4-7.4 14.7-19.6 14.7-15.3 0-30.7-.3-46 .1-10.6.3-18.6-2.4-20.5-13.8H293.9zm71-164.8v12.4c44 7.3 61.3 24.5 71.7 71.4H449c1.9-49.2-44.8-87.2-84.1-83.8zm12.2 29c-14.7-2.7-11.9-2.2-12 10.1a6.22 6.22 0 00.6 1.8c25.3 3.1 40.2 16.9 42.9 42.9h12.8c-.1-26.4-19.2-50.2-44.3-54.8zm-12.2 28c0 2.1.2 4.3 0 6.5-.4 4.2.5 6.6 5.2 8.1a13 13 0 017.3 6.9c1.7 4.9 4.2 6.4 8.9 5.7a46.84 46.84 0 016.5 0c.1-15.7-14.4-29.8-27.9-27.2z"
                    }))
                })));
            i.displayName = "InternetTvIcon"
        },
        v2bw: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return l
            }));
            var r = n("cxan"),
                a = n("HbGN"),
                c = n("ERkP"),
                i = n.n(c),
                o = n("l1C2"),
                s = (i.a.createElement, i.a.createContext({
                    index: 0,
                    isInViewport: !1
                })),
                u = i.a.memo((function(e) {
                    var t = e.index,
                        n = e.isInViewport,
                        c = Object(a.a)(e, ["index", "isInViewport"]),
                        u = i.a.useMemo((function() {
                            return {
                                index: t,
                                isInViewport: n
                            }
                        }), [t, n]);
                    return Object(o.b)(s.Provider, Object(r.a)({
                        value: u
                    }, c))
                }));
            u.displayName = "ContentComponentProvider";
            var l = function() {
                var e = i.a.useContext(s);
                return e
            }
        },
        vfGT: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return e.apply(t, n)
                }
            }
        },
        wMhT: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return v
                })), n.d(t, "b", (function() {
                    return E
                })), n.d(t, "c", (function() {
                    return g
                }));
                var r, a = n("WDwj"),
                    c = n("AknM"),
                    i = n("Hhoo"),
                    o = n("C1IE"),
                    s = n("CWip"),
                    u = n("mq7k"),
                    l = n("AsJ6"),
                    d = n("C+hi"),
                    p = n("zcQ/"),
                    f = n("iJGL"),
                    b = n("Du1H"),
                    O = n("mwJI"),
                    h = {
                        sync: !1,
                        autoForward: !1
                    },
                    m = function() {
                        var e = [];
                        return function(t, n) {
                            t && e.push(t);
                            var r = n(t || e[e.length - 1]);
                            return t && e.pop(), r
                        }
                    }();
                ! function(e) {
                    e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped"
                }(r || (r = {}));
                var v = function() {
                        function t(e, n) {
                            var s = this;
                            void 0 === n && (n = t.defaultOptions), this.machine = e, this.scheduler = new f.a, this.delayedEventsMap = {}, this.listeners = new Set, this.contextListeners = new Set, this.stopListeners = new Set, this.doneListeners = new Set, this.eventListeners = new Set, this.sendListeners = new Set, this.initialized = !1, this._status = r.NotStarted, this.children = new Map, this.forwardTo = new Set, this.init = this.start, this.send = function(e, t) {
                                if (Object(i.c)(e)) return s.batch(e), s.state;
                                var n = Object(i.y)(Object(i.w)(e, t));
                                if (s._status === r.Stopped) return c.a || Object(i.G)(!1, 'Event "' + n.name + '" was sent to stopped service "' + s.machine.id + '". This service has already reached its final state, and will not transition.\nEvent: ' + JSON.stringify(n.data)), s.state;
                                if (s._status === r.NotStarted && s.options.deferEvents) c.a || Object(i.G)(!1, 'Event "' + n.name + '" was sent to uninitialized service "' + s.machine.id + '" and is deferred. Make sure .start() is called for this service.\nEvent: ' + JSON.stringify(n.data));
                                else if (s._status !== r.Running) throw new Error('Event "' + n.name + '" was sent to uninitialized service "' + s.machine.id + '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: ' + JSON.stringify(n.data));
                                return s.scheduler.schedule((function() {
                                    s.forward(n);
                                    var e = s.nextState(n);
                                    s.update(e, n)
                                })), s._state
                            }, this.sendTo = function(e, t) {
                                var n = s.parent && (t === o.b.Parent || s.parent.id === t),
                                    r = n ? s.parent : Object(p.b)(t) ? t : s.children.get(t) || b.a.get(t);
                                if (r) "machine" in r ? r.send(Object(a.a)(Object(a.a)({}, e), {
                                    name: e.name === u.c ? "" + Object(l.f)(s.id) : e.name,
                                    origin: s.sessionId
                                })) : r.send(e.data);
                                else {
                                    if (!n) throw new Error("Unable to send event to child '" + t + "' from service '" + s.id + "'.");
                                    c.a || Object(i.G)(!1, "Service '" + s.id + "' has no parent: unable to send event " + e.type)
                                }
                            };
                            var d = Object(a.a)(Object(a.a)({}, t.defaultOptions), n),
                                O = d.clock,
                                h = d.logger,
                                m = d.parent,
                                v = d.id,
                                y = void 0 !== v ? v : e.id;
                            this.id = y, this.logger = h, this.clock = O, this.parent = m, this.options = d, this.scheduler = new f.a({
                                deferEvents: this.options.deferEvents
                            }), this.sessionId = b.a.bookId()
                        }
                        return Object.defineProperty(t.prototype, "initialState", {
                            get: function() {
                                var e = this;
                                return this._initialState ? this._initialState : m(this, (function() {
                                    return e._initialState = e.machine.initialState, e._initialState
                                }))
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "state", {
                            get: function() {
                                return c.a || Object(i.G)(this._status !== r.NotStarted, "Attempted to read state from uninitialized service '" + this.id + "'. Make sure the service is started first."), this._state
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.execute = function(e, t) {
                            var n, r;
                            try {
                                for (var c = Object(a.e)(e.actions), i = c.next(); !i.done; i = c.next()) {
                                    var o = i.value;
                                    this.exec(o, e, t)
                                }
                            } catch (s) {
                                n = {
                                    error: s
                                }
                            } finally {
                                try {
                                    i && !i.done && (r = c.return) && r.call(c)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }, t.prototype.update = function(e, t) {
                            var n, r, c, o, u, d, p, f, b = this;
                            if (e._sessionid = this.sessionId, this._state = e, this.options.execute && this.execute(this.state), this.devTools && this.devTools.send(t.data, e), e.event) try {
                                for (var O = Object(a.e)(this.eventListeners), h = O.next(); !h.done; h = O.next()) {
                                    (0, h.value)(e.event)
                                }
                            } catch (w) {
                                n = {
                                    error: w
                                }
                            } finally {
                                try {
                                    h && !h.done && (r = O.return) && r.call(O)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                            try {
                                for (var m = Object(a.e)(this.listeners), v = m.next(); !v.done; v = m.next()) {
                                    (0, v.value)(e, e.event)
                                }
                            } catch (x) {
                                c = {
                                    error: x
                                }
                            } finally {
                                try {
                                    v && !v.done && (o = m.return) && o.call(m)
                                } finally {
                                    if (c) throw c.error
                                }
                            }
                            try {
                                for (var y = Object(a.e)(this.contextListeners), j = y.next(); !j.done; j = y.next()) {
                                    (0, j.value)(this.state.context, this.state.history ? this.state.history.context : void 0)
                                }
                            } catch (k) {
                                u = {
                                    error: k
                                }
                            } finally {
                                try {
                                    j && !j.done && (d = y.return) && d.call(y)
                                } finally {
                                    if (u) throw u.error
                                }
                            }
                            var g = Object(s.f)(e.configuration || [], this.machine);
                            if (this.state.configuration && g) {
                                var E = e.configuration.find((function(e) {
                                        return "final" === e.type && e.parent === b.machine
                                    })),
                                    S = E && E.data ? Object(i.k)(E.data, e.context, t) : void 0;
                                try {
                                    for (var T = Object(a.e)(this.doneListeners), C = T.next(); !C.done; C = T.next()) {
                                        (0, C.value)(Object(l.e)(this.id, S))
                                    }
                                } catch (P) {
                                    p = {
                                        error: P
                                    }
                                } finally {
                                    try {
                                        C && !C.done && (f = T.return) && f.call(T)
                                    } finally {
                                        if (p) throw p.error
                                    }
                                }
                                this.stop()
                            }
                        }, t.prototype.onTransition = function(e) {
                            return this.listeners.add(e), this._status === r.Running && e(this.state, this.state.event), this
                        }, t.prototype.subscribe = function(e, t, n) {
                            var a, c = this;
                            if (!e) return {
                                unsubscribe: function() {}
                            };
                            var i = n;
                            return "function" === typeof e ? a = e : (a = e.next.bind(e), i = e.complete.bind(e)), this.listeners.add(a), this._status === r.Running && a(this.state), i && this.onDone(i), {
                                unsubscribe: function() {
                                    a && c.listeners.delete(a), i && c.doneListeners.delete(i)
                                }
                            }
                        }, t.prototype.onEvent = function(e) {
                            return this.eventListeners.add(e), this
                        }, t.prototype.onSend = function(e) {
                            return this.sendListeners.add(e), this
                        }, t.prototype.onChange = function(e) {
                            return this.contextListeners.add(e), this
                        }, t.prototype.onStop = function(e) {
                            return this.stopListeners.add(e), this
                        }, t.prototype.onDone = function(e) {
                            return this.doneListeners.add(e), this
                        }, t.prototype.off = function(e) {
                            return this.listeners.delete(e), this.eventListeners.delete(e), this.sendListeners.delete(e), this.stopListeners.delete(e), this.doneListeners.delete(e), this.contextListeners.delete(e), this
                        }, t.prototype.start = function(e) {
                            var t = this;
                            if (this._status === r.Running) return this;
                            b.a.register(this.sessionId, this), this.initialized = !0, this._status = r.Running;
                            var n = void 0 === e ? this.initialState : m(this, (function() {
                                return Object(d.c)(e) ? t.machine.resolveState(e) : t.machine.resolveState(d.a.from(e, t.machine.context))
                            }));
                            return this.options.devTools && this.attachDev(), this.scheduler.initialize((function() {
                                t.update(n, l.j)
                            })), this
                        }, t.prototype.stop = function() {
                            var e, t, n, c, o, s, u, l, d, p;
                            try {
                                for (var f = Object(a.e)(this.listeners), O = f.next(); !O.done; O = f.next()) {
                                    var h = O.value;
                                    this.listeners.delete(h)
                                }
                            } catch (w) {
                                e = {
                                    error: w
                                }
                            } finally {
                                try {
                                    O && !O.done && (t = f.return) && t.call(f)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            try {
                                for (var m = Object(a.e)(this.stopListeners), v = m.next(); !v.done; v = m.next()) {
                                    (h = v.value)(), this.stopListeners.delete(h)
                                }
                            } catch (x) {
                                n = {
                                    error: x
                                }
                            } finally {
                                try {
                                    v && !v.done && (c = m.return) && c.call(m)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                            try {
                                for (var y = Object(a.e)(this.contextListeners), j = y.next(); !j.done; j = y.next()) {
                                    h = j.value;
                                    this.contextListeners.delete(h)
                                }
                            } catch (k) {
                                o = {
                                    error: k
                                }
                            } finally {
                                try {
                                    j && !j.done && (s = y.return) && s.call(y)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            try {
                                for (var g = Object(a.e)(this.doneListeners), E = g.next(); !E.done; E = g.next()) {
                                    h = E.value;
                                    this.doneListeners.delete(h)
                                }
                            } catch (P) {
                                u = {
                                    error: P
                                }
                            } finally {
                                try {
                                    E && !E.done && (l = g.return) && l.call(g)
                                } finally {
                                    if (u) throw u.error
                                }
                            }
                            this.children.forEach((function(e) {
                                Object(i.e)(e.stop) && e.stop()
                            }));
                            try {
                                for (var S = Object(a.e)(Object(i.j)(this.delayedEventsMap)), T = S.next(); !T.done; T = S.next()) {
                                    var C = T.value;
                                    this.clock.clearTimeout(this.delayedEventsMap[C])
                                }
                            } catch (z) {
                                d = {
                                    error: z
                                }
                            } finally {
                                try {
                                    T && !T.done && (p = S.return) && p.call(S)
                                } finally {
                                    if (d) throw d.error
                                }
                            }
                            return this.scheduler.clear(), this.initialized = !1, this._status = r.Stopped, b.a.free(this.sessionId), this
                        }, t.prototype.batch = function(e) {
                            var t = this;
                            if (this._status === r.NotStarted && this.options.deferEvents) c.a || Object(i.G)(!1, e.length + ' event(s) were sent to uninitialized service "' + this.machine.id + '" and are deferred. Make sure .start() is called for this service.\nEvent: ' + JSON.stringify(event));
                            else if (this._status !== r.Running) throw new Error(e.length + ' event(s) were sent to uninitialized service "' + this.machine.id + '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.');
                            this.scheduler.schedule((function() {
                                var n, r, c = t.state,
                                    o = !1,
                                    s = [],
                                    u = function(e) {
                                        var n = Object(i.y)(e);
                                        t.forward(n), c = m(t, (function() {
                                            return t.machine.transition(c, n)
                                        })), s.push.apply(s, Object(a.d)(c.actions.map((function(e) {
                                            return Object(d.b)(e, c)
                                        })))), o = o || !!c.changed
                                    };
                                try {
                                    for (var l = Object(a.e)(e), p = l.next(); !p.done; p = l.next()) {
                                        u(p.value)
                                    }
                                } catch (f) {
                                    n = {
                                        error: f
                                    }
                                } finally {
                                    try {
                                        p && !p.done && (r = l.return) && r.call(l)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                c.changed = o, c.actions = s, t.update(c, Object(i.y)(e[e.length - 1]))
                            }))
                        }, t.prototype.sender = function(e) {
                            return this.send.bind(this, e)
                        }, t.prototype.nextState = function(e) {
                            var t = this,
                                n = Object(i.y)(e);
                            if (0 === n.name.indexOf(u.d) && !this.state.nextEvents.some((function(e) {
                                    return 0 === e.indexOf(u.d)
                                }))) throw n.data.data;
                            return m(this, (function() {
                                return t.machine.transition(t.state, n)
                            }))
                        }, t.prototype.forward = function(e) {
                            var t, n;
                            try {
                                for (var r = Object(a.e)(this.forwardTo), c = r.next(); !c.done; c = r.next()) {
                                    var i = c.value,
                                        o = this.children.get(i);
                                    if (!o) throw new Error("Unable to forward event '" + e + "' from interpreter '" + this.id + "' to nonexistant child '" + i + "'.");
                                    o.send(e)
                                }
                            } catch (s) {
                                t = {
                                    error: s
                                }
                            } finally {
                                try {
                                    c && !c.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        }, t.prototype.defer = function(e) {
                            var t = this;
                            this.delayedEventsMap[e.id] = this.clock.setTimeout((function() {
                                e.to ? t.sendTo(e._event, e.to) : t.send(e._event)
                            }), e.delay)
                        }, t.prototype.cancel = function(e) {
                            this.clock.clearTimeout(this.delayedEventsMap[e]), delete this.delayedEventsMap[e]
                        }, t.prototype.exec = function(e, t, n) {
                            var r = t.context,
                                a = t._event,
                                s = Object(l.i)(e.type, n) || e.exec,
                                d = Object(i.e)(s) ? s : s ? s.exec : e.exec;
                            if (d) try {
                                return d(r, a.data, {
                                    action: e,
                                    state: this.state,
                                    _event: a
                                })
                            } catch (g) {
                                throw this.parent && this.parent.send({
                                    type: "xstate.error",
                                    data: g
                                }), g
                            }
                            switch (e.type) {
                                case u.k:
                                    var p = e;
                                    if ("number" === typeof p.delay) return void this.defer(p);
                                    p.to ? this.sendTo(p._event, p.to) : this.send(p._event);
                                    break;
                                case u.b:
                                    this.cancel(e.sendId);
                                    break;
                                case u.l:
                                    var f = e.activity;
                                    if (!this.state.activities[f.type]) break;
                                    if (f.type === o.a.Invoke) {
                                        var b = this.machine.options.services ? this.machine.options.services[f.src] : void 0,
                                            O = f.id,
                                            h = f.data;
                                        c.a || Object(i.G)(!("forward" in f), "`forward` property is deprecated (found in invocation of '" + f.src + "' in in machine '" + this.machine.id + "'). Please use `autoForward` instead.");
                                        var m = "autoForward" in f ? f.autoForward : !!f.forward;
                                        if (!b) return void(c.a || Object(i.G)(!1, "No service found for invocation '" + f.src + "' in machine '" + this.machine.id + "'."));
                                        var v = Object(i.e)(b) ? b(r, a.data) : b;
                                        Object(i.h)(v) ? this.state.children[O] = this.spawnPromise(Promise.resolve(v), O) : Object(i.e)(v) ? this.state.children[O] = this.spawnCallback(v, O) : Object(i.g)(v) ? this.state.children[O] = this.spawnObservable(v, O) : Object(i.f)(v) && (this.state.children[O] = this.spawnMachine(h ? v.withContext(Object(i.k)(h, r, a)) : v, {
                                            id: O,
                                            autoForward: m
                                        }))
                                    } else this.spawnActivity(f);
                                    break;
                                case u.m:
                                    this.stopChild(e.activity.id);
                                    break;
                                case u.g:
                                    var y = e.label,
                                        j = e.value;
                                    y ? this.logger(y, j) : this.logger(j);
                                    break;
                                default:
                                    c.a || Object(i.G)(!1, "No implementation found for action type '" + e.type + "'")
                            }
                        }, t.prototype.stopChild = function(e) {
                            var t = this.children.get(e);
                            t && (this.children.delete(e), this.forwardTo.delete(e), delete this.state.children[e], Object(i.e)(t.stop) && t.stop())
                        }, t.prototype.spawn = function(e, t, n) {
                            if (Object(i.h)(e)) return this.spawnPromise(Promise.resolve(e), t);
                            if (Object(i.e)(e)) return this.spawnCallback(e, t);
                            if (Object(p.b)(e)) return this.spawnActor(e);
                            if (Object(i.g)(e)) return this.spawnObservable(e, t);
                            if (Object(i.f)(e)) return this.spawnMachine(e, Object(a.a)(Object(a.a)({}, n), {
                                id: t
                            }));
                            throw new Error('Unable to spawn entity "' + t + '" of type "' + typeof e + '".')
                        }, t.prototype.spawnMachine = function(e, n) {
                            var r = this;
                            void 0 === n && (n = {});
                            var c = new t(e, Object(a.a)(Object(a.a)({}, this.options), {
                                    parent: this,
                                    id: n.id || e.id
                                })),
                                o = Object(a.a)(Object(a.a)({}, h), n);
                            o.sync && c.onTransition((function(e) {
                                r.send(u.n, {
                                    state: e,
                                    id: c.id
                                })
                            })), c.onDone((function(e) {
                                r.send(Object(i.y)(e, {
                                    origin: c.id
                                }))
                            })).start();
                            var s = c;
                            return this.children.set(c.id, s), o.autoForward && this.forwardTo.add(c.id), s
                        }, t.prototype.spawnPromise = function(e, t) {
                            var n = this,
                                r = !1;
                            e.then((function(e) {
                                r || n.send(Object(i.y)(Object(l.e)(t, e), {
                                    origin: t
                                }))
                            }), (function(e) {
                                if (!r) {
                                    var a = Object(l.f)(t, e);
                                    try {
                                        n.send(Object(i.y)(a, {
                                            origin: t
                                        }))
                                    } catch (c) {
                                        Object(i.t)(e, c, t), n.devTools && n.devTools.send(a, n.state), n.machine.strict && n.stop()
                                    }
                                }
                            }));
                            var a = {
                                id: t,
                                send: function() {},
                                subscribe: function(t, n, r) {
                                    var a = !1;
                                    return e.then((function(e) {
                                        a || (t && t(e), a || r && r())
                                    }), (function(e) {
                                        a || n(e)
                                    })), {
                                        unsubscribe: function() {
                                            return a = !0
                                        }
                                    }
                                },
                                stop: function() {
                                    r = !0
                                },
                                toJSON: function() {
                                    return {
                                        id: t
                                    }
                                }
                            };
                            return this.children.set(t, a), a
                        }, t.prototype.spawnCallback = function(e, t) {
                            var n, r = this,
                                a = !1,
                                c = new Set,
                                o = new Set;
                            try {
                                n = e((function(e) {
                                    o.forEach((function(t) {
                                        return t(e)
                                    })), a || r.send(e)
                                }), (function(e) {
                                    c.add(e)
                                }))
                            } catch (u) {
                                this.send(Object(l.f)(t, u))
                            }
                            if (Object(i.h)(n)) return this.spawnPromise(n, t);
                            var s = {
                                id: t,
                                send: function(e) {
                                    return c.forEach((function(t) {
                                        return t(e)
                                    }))
                                },
                                subscribe: function(e) {
                                    return o.add(e), {
                                        unsubscribe: function() {
                                            o.delete(e)
                                        }
                                    }
                                },
                                stop: function() {
                                    a = !0, Object(i.e)(n) && n()
                                },
                                toJSON: function() {
                                    return {
                                        id: t
                                    }
                                }
                            };
                            return this.children.set(t, s), s
                        }, t.prototype.spawnObservable = function(e, t) {
                            var n = this,
                                r = e.subscribe((function(e) {
                                    n.send(Object(i.y)(e, {
                                        origin: t
                                    }))
                                }), (function(e) {
                                    n.send(Object(i.y)(Object(l.f)(t, e), {
                                        origin: t
                                    }))
                                }), (function() {
                                    n.send(Object(i.y)(Object(l.e)(t), {
                                        origin: t
                                    }))
                                })),
                                a = {
                                    id: t,
                                    send: function() {},
                                    subscribe: function(t, n, r) {
                                        return e.subscribe(t, n, r)
                                    },
                                    stop: function() {
                                        return r.unsubscribe()
                                    },
                                    toJSON: function() {
                                        return {
                                            id: t
                                        }
                                    }
                                };
                            return this.children.set(t, a), a
                        }, t.prototype.spawnActor = function(e) {
                            return this.children.set(e.id, e), e
                        }, t.prototype.spawnActivity = function(e) {
                            var t = this.machine.options && this.machine.options.activities ? this.machine.options.activities[e.type] : void 0;
                            if (t) {
                                var n = t(this.state.context, e);
                                this.spawnEffect(e.id, n)
                            } else c.a || Object(i.G)(!1, "No implementation found for activity '" + e.type + "'")
                        }, t.prototype.spawnEffect = function(e, t) {
                            this.children.set(e, {
                                id: e,
                                send: function() {},
                                subscribe: function() {
                                    return {
                                        unsubscribe: function() {}
                                    }
                                },
                                stop: t || void 0,
                                toJSON: function() {
                                    return {
                                        id: e
                                    }
                                }
                            })
                        }, t.prototype.attachDev = function() {
                            if (this.options.devTools && "undefined" !== typeof window) {
                                if (window.__REDUX_DEVTOOLS_EXTENSION__) {
                                    var e = "object" === typeof this.options.devTools ? this.options.devTools : void 0;
                                    this.devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect(Object(a.a)(Object(a.a)({
                                        name: this.id,
                                        autoPause: !0,
                                        stateSanitizer: function(e) {
                                            return {
                                                value: e.value,
                                                context: e.context,
                                                actions: e.actions
                                            }
                                        }
                                    }, e), {
                                        features: Object(a.a)({
                                            jump: !1,
                                            skip: !1
                                        }, e ? e.features : void 0)
                                    }), this.machine), this.devTools.init(this.state)
                                }
                                Object(O.a)(this)
                            }
                        }, t.prototype.toJSON = function() {
                            return {
                                id: this.id
                            }
                        }, t.prototype[i.u] = function() {
                            return this
                        }, t.defaultOptions = function(e) {
                            return {
                                execute: !0,
                                deferEvents: !0,
                                clock: {
                                    setTimeout: function(t, n) {
                                        return e.setTimeout.call(null, t, n)
                                    },
                                    clearTimeout: function(t) {
                                        return e.clearTimeout.call(null, t)
                                    }
                                },
                                logger: e.console.log.bind(console),
                                devTools: !1
                            }
                        }("undefined" === typeof window ? e : window), t.interpret = E, t
                    }(),
                    y = function(e) {
                        return void 0 === e && (e = "null"), {
                            id: e,
                            send: function() {},
                            subscribe: function() {
                                return {
                                    unsubscribe: function() {}
                                }
                            },
                            toJSON: function() {
                                return {
                                    id: e
                                }
                            }
                        }
                    },
                    j = function(e) {
                        return Object(i.i)(e) ? Object(a.a)(Object(a.a)({}, h), {
                            name: e
                        }) : Object(a.a)(Object(a.a)(Object(a.a)({}, h), {
                            name: Object(i.D)()
                        }), e)
                    };

                function g(e, t) {
                    var n = j(t);
                    return m(void 0, (function(t) {
                        return c.a || Object(i.G)(!!t, 'Attempted to spawn an Actor (ID: "' + (Object(i.f)(e) ? e.id : "undefined") + '") outside of a service. This will have no effect.'), t ? t.spawn(e, n.name, n) : y(n.name)
                    }))
                }

                function E(e, t) {
                    return new v(e, t)
                }
            }).call(this, n("fRV1"))
        },
        "wS+0": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n("cxan"),
                a = n("ERkP"),
                c = n("l1C2"),
                i = (a.createElement, a.memo((function(e) {
                    return Object(c.b)("svg", Object(r.a)({
                        fill: "currentColor",
                        x: 0,
                        y: 0,
                        viewBox: "291 -290.7 850 850",
                        xmlSpace: "preserve",
                        width: "1em",
                        height: "1em"
                    }, e), Object(c.b)("path", {
                        d: "M916.1-290.7H515.9c-27.6 0-49.9 22.4-49.9 50v750c0 27.6 22.4 50 49.9 50H916c27.6 0 49.9-22.4 49.9-50v-750c.1-27.6-22.3-50-49.8-50zm-237.6 25h75c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5h-75c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5zm37.5 800c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25zm200-75H516v-675h400v675z"
                    }))
                })));
            i.displayName = "DeviceSmartphone1Icon"
        },
        ym5Q: function(e, t, n) {
            "use strict";
            var r = n("P0jV");
            e.exports = r.isStandardBrowserEnv() ? {
                write: function(e, t, n, a, c, i) {
                    var o = [];
                    o.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), r.isString(a) && o.push("path=" + a), r.isString(c) && o.push("domain=" + c), !0 === i && o.push("secure"), document.cookie = o.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        "yr6+": function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return a
            })), n.d(t, "g", (function() {
                return i
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "a", (function() {
                return l
            })), n.d(t, "c", (function() {
                return p
            })), n.d(t, "b", (function() {
                return b
            })), n.d(t, "e", (function() {
                return h
            }));
            var r = function(e) {
                    return e.isPrimary
                },
                a = function(e) {
                    return e.mainServices.find(r)
                },
                c = function(e) {
                    return "VOICE" === e.type
                },
                i = function(e) {
                    return e.mainServices.find(c)
                },
                o = function(e) {
                    return "VOICE" === e.type && !!e.productCharacteristic
                },
                s = function(e) {
                    return e.mainServices.find(o)
                },
                u = function(e) {
                    return "DATA" === e.type
                },
                l = function(e) {
                    return e.mainServices.find(u)
                },
                d = function(e) {
                    return "NEO" === e.type
                },
                p = function(e) {
                    return e.mainServices.find(d)
                },
                f = function(e) {
                    return "FBB" === e.type
                },
                b = function(e) {
                    return e.mainServices.find(f)
                },
                O = function(e) {
                    return "TV" === e.type
                },
                h = function(e) {
                    return e.mainServices.find(O)
                }
        },
        "zcQ/": function(e, t, n) {
            "use strict";

            function r(e) {
                var t, n = {
                    id: t = e.id,
                    send: function() {},
                    subscribe: function() {
                        return {
                            unsubscribe: function() {}
                        }
                    },
                    toJSON: function() {
                        return {
                            id: t
                        }
                    }
                };
                return n.meta = e, n
            }

            function a(e) {
                try {
                    return "function" === typeof e.send
                } catch (t) {
                    return !1
                }
            }
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return a
            }))
        }
    }
]);
//# sourceMappingURL=sufler.8a677131a46ec3b7b341.js.map