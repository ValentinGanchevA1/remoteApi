(window.omniJsonp = window.omniJsonp || []).push([
    [46, 6, 8, 13], {
        "/G5g": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var a = n("cxan"),
                r = n("5IAQ"),
                c = n("HbGN"),
                o = n("ERkP"),
                i = n.n(o),
                s = n("ZsHj"),
                l = n("LTa3"),
                u = n("fQwf"),
                b = n("4OHh"),
                p = n("pMch"),
                d = n("B5/x"),
                f = n("kEwR"),
                O = n("l1C2"),
                m = (i.a.createElement, function(e) {
                    var t = e.action,
                        n = e.actionsMap,
                        o = e.wrapperCss,
                        i = e.onClick,
                        m = e.disabled,
                        j = Object(c.a)(e, ["action", "actionsMap", "wrapperCss", "onClick", "disabled"]),
                        g = {
                            display: "block",
                            cursor: "pointer"
                        },
                        y = Object(f.c)().show,
                        h = Object(s.a)(t, n, i).onClick,
                        v = function(e) {
                            return m ? void 0 : h(e)
                        };
                    if (Object(d.a)(t)) return Object(O.b)("div", Object(a.a)({
                        role: "button",
                        onClick: function(e) {
                            v(e), !m && y(t.params)
                        },
                        title: t.title,
                        css: Object(r.a)([g, o], "")
                    }, j));
                    if (Object(l.a)(t)) {
                        var E = m ? void 0 : "genesys-contact1";
                        return Object(O.b)("div", Object(a.a)({
                            role: "button",
                            onClick: v,
                            title: t.title,
                            css: Object(r.a)([g, o], "")
                        }, j, {
                            id: E
                        }))
                    }
                    if (Object(u.a)(t) && t.params) {
                        var T = m ? void 0 : "widget-popup-cmb";
                        return Object(O.b)("div", Object(a.a)({
                            role: "button",
                            onClick: v,
                            title: t.title,
                            css: Object(r.a)([g, o], "")
                        }, j, {
                            className: T,
                            "data-queue": t.params.queue || "",
                            "data-opis": t.params.description || "",
                            "data-cmb_profile": t.params.profile || "",
                            "data-personalscenario": t.params.personalScenario || ""
                        }))
                    }
                    return Object(b.a)(t) ? Object(O.b)("div", Object(a.a)({
                        role: "button",
                        title: t.title,
                        onClick: v,
                        css: Object(r.a)([g, o], "")
                    }, j)) : Object(p.a)(t) ? Object(O.b)("a", Object(a.a)({
                        onClick: v,
                        title: t.title,
                        href: t.action,
                        css: Object(r.a)([g, o], "")
                    }, j)) : null
                });
            m.displayName = "ActionWrapper"
        },
        "0zX2": function(e, t, n) {
            "use strict";
            var a = n("P0jV");
            e.exports = a.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function r(e) {
                    var a = e;
                    return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
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
                return e = r(window.location.href),
                    function(t) {
                        var n = a.isString(t) ? r(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
            }() : function() {
                return !0
            }
        },
        "2OAT": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("sXB5"),
                r = function(e, t) {
                    return e ? Object(a.a)(t) && "DATA_LDF" !== t : "VOICE" === t
                }
        },
        "3oP0": function(e, t, n) {
            "use strict";
            n.d(t, "k", (function() {
                return f
            })), n.d(t, "e", (function() {
                return O
            })), n.d(t, "j", (function() {
                return m
            })), n.d(t, "l", (function() {
                return j
            })), n.d(t, "c", (function() {
                return g
            })), n.d(t, "d", (function() {
                return y
            })), n.d(t, "g", (function() {
                return v
            })), n.d(t, "f", (function() {
                return E
            })), n.d(t, "i", (function() {
                return T
            })), n.d(t, "h", (function() {
                return S
            })), n.d(t, "b", (function() {
                return C
            })), n.d(t, "a", (function() {
                return w
            }));
            var a = n("fGyu"),
                r = n("VtSi"),
                c = n.n(r),
                o = n("pu3o"),
                i = n.n(o),
                s = n("v4L6"),
                l = n("com9"),
                u = n("QVQ0"),
                b = n("yr6+"),
                p = n("OS0P"),
                d = ["RETENTION_NNAKED", "MIGRATION_TO_3P", "MIGRATION_TO_3P_WITH_NP_INT", "MIGRATION_MOD_TECH", "MIGRATION_MOD_TECH_NNAKED", "RETENTION"],
                f = function() {
                    var e, t;
                    return c.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, c.a.awrap(Object(s.a)());
                            case 2:
                                return e = n.sent, n.next = 5, c.a.awrap(l.a.get("/hapi/customerSmsVerification/loggedCustomerData", {
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
                                return n.next = 2, c.a.awrap(Object(s.a)());
                            case 2:
                                return e = n.sent, n.next = 5, c.a.awrap(l.a.get("/hapi/pwa/v1/transactions/getTransactions", {
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
                m = function() {
                    var e, t;
                    return c.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, c.a.awrap(Object(s.a)());
                            case 2:
                                return e = n.sent, n.next = 5, c.a.awrap(l.a.get("/hapi/customerSmsVerification/getMobileAccounts", {
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
                j = function(e) {
                    var t, n, a, r;
                    return c.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return t = e.id, n = e.accountCode, o.next = 3, c.a.awrap(Object(s.a)());
                            case 3:
                                return a = o.sent, o.next = 6, c.a.awrap(l.a.post("/hapi/customerSmsVerification/selectAccount", i.a.stringify({
                                    accountId: t,
                                    accountCode: n
                                }), {
                                    headers: {
                                        csrftoken: a
                                    }
                                }));
                            case 6:
                                return r = o.sent, o.abrupt("return", r.data);
                            case 8:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, null, Promise)
                },
                g = function(e) {
                    var t, n, a, r, o;
                    return c.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = e.msisdn, n = e.processType, a = e.push, r = Object(s.a)(), i.next = 4, c.a.awrap(l.a.get("/hapi/customerSmsVerification/getAccount", {
                                    params: {
                                        msisdn: t,
                                        processType: n,
                                        push: a
                                    },
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 4:
                                return o = i.sent, i.abrupt("return", o.data);
                            case 6:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, null, Promise)
                },
                y = function(e) {
                    var t, n, a, r, o, i, b;
                    return c.a.async((function(p) {
                        for (;;) switch (p.prev = p.next) {
                            case 0:
                                return t = Object(u.a)(e.offerType), n = "LEAD" === t, p.next = 4, c.a.awrap(Object(s.a)());
                            case 4:
                                return a = p.sent, r = {
                                    ACTIVATION: "pwaLoveActivation"
                                }, o = function(e) {
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
                                }, p.next = 9, c.a.awrap(l.a.post("/hapi/pwa/v2/api/offers", {
                                    factory: t,
                                    process: n ? r[e.processType] : e.processType,
                                    configComponentPk: n ? e.configComponentPk : e.filterPk,
                                    suflerPk: e.pk,
                                    wwtAddress: "FIX" === e.__type && !d.includes(e.processType) && o(e.leadAddressForm) || void 0,
                                    msisdn: "MOBILE" === e.__type && e.msisdn
                                }, {
                                    headers: {
                                        csrftoken: a
                                    }
                                }));
                            case 9:
                                if (i = p.sent, b = ["Error0003", "Error0005"], !("errorCode" in i.data)) {
                                    p.next = 14;
                                    break
                                }
                                if (!b.includes(i.data.errorCode)) {
                                    p.next = 14;
                                    break
                                }
                                throw new Error("NO_OFFERS_FIX");
                            case 14:
                                if (!("message" in i.data)) {
                                    p.next = 16;
                                    break
                                }
                                throw new Error(i.data.message);
                            case 16:
                                if (i) {
                                    p.next = 18;
                                    break
                                }
                                throw new Error("No response");
                            case 18:
                                return p.abrupt("return", {
                                    offers: i.data
                                });
                            case 19:
                            case "end":
                                return p.stop()
                        }
                    }), null, null, null, Promise)
                },
                h = function(e) {
                    return function(t, n) {
                        var a, r;
                        return c.a.async((function(o) {
                            for (;;) switch (o.prev = o.next) {
                                case 0:
                                    return a = JSON.stringify({
                                        filter: n,
                                        html: t
                                    }), o.next = 3, c.a.awrap(l.a.post(e, a));
                                case 3:
                                    return r = o.sent, o.abrupt("return", r.data);
                                case 5:
                                case "end":
                                    return o.stop()
                            }
                        }), null, null, null, Promise)
                    }
                },
                v = h("/hapi/cbs/streetauto"),
                E = h("/hapi/cbs/cityauto"),
                T = function(e) {
                    var t, n;
                    return c.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, c.a.awrap(Object(s.a)());
                            case 2:
                                return t = a.sent, a.next = 5, c.a.awrap(l.a.post("/wwt/cbsRedirect", e, {
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 5:
                                return n = a.sent, a.abrupt("return", n.data);
                            case 7:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                S = function(e) {
                    var t;
                    return c.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, c.a.awrap(l.a.get("/hapi/pwa/v1/offerSelector/fix/tvOffer?id=".concat(e)));
                            case 2:
                                return t = n.sent, n.abrupt("return", t.data);
                            case 4:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                },
                C = function(e) {
                    var t, n, r, o, i, u, d, f, O, m, j, g, y, h, v, E, T, S, C, w, x, k, P, I;
                    return c.a.async((function(R) {
                        for (;;) switch (R.prev = R.next) {
                            case 0:
                                return t = e.hasDevice, n = e.hasTv, r = e.currentSingleOffer, o = e.selectedOtherPackages, i = e.selectedTVPackages, u = e.doesPhoneLineExist, d = e.processType, R.next = 3, c.a.awrap(Object(s.a)());
                            case 3:
                                return f = R.sent, O = Object(b.b)(r), m = Object(b.e)(r), j = {
                                    ACTIVATION: "NEW"
                                }, g = Object(p.a)(Object(p.b)(r)).filter((function(e) {
                                    return ["sfh", "activation"].includes(e.id)
                                })) || [], y = Object(p.a)(Object(p.c)(r)) || [], h = i ? i.map((function(e) {
                                    return e.id
                                })) : [], v = o ? o.map((function(e) {
                                    return e.id
                                })) : [], E = v.filter((function(e) {
                                    return y.find((function(t) {
                                        return t.id === e
                                    }))
                                })), T = [].concat(Object(a.a)(h), Object(a.a)(E)), S = v.filter((function(e) {
                                    return g.find((function(t) {
                                        return t.id === e
                                    }))
                                })), C = [].concat(Object(a.a)(S), Object(a.a)(E)), w = v.filter((function(e) {
                                    return !C.includes(e)
                                })).concat(C.filter((function(e) {
                                    return !v.includes(e)
                                }))), x = (null === O || void 0 === O ? void 0 : O.productCharacteristic.tag) || "", k = (null === m || void 0 === m ? void 0 : m.code) || "", P = (null === O || void 0 === O ? void 0 : O.code) || "", I = (null === O || void 0 === O ? void 0 : O.productCharacteristic.isDeregulated) ? "DEG" : "REG", (null === O || void 0 === O ? void 0 : O.productCharacteristic.isLineMaintenance) && u && S.push("lineMaintenance"), R.abrupt("return", l.a.post("/love/konfigurator/wybierz", {
                                    hasDevice: t,
                                    hasTV: n,
                                    internetAdditionals: w,
                                    internetCode: P,
                                    mobileDeviceCode: "",
                                    mobileProcessType: j[d] || "NEW",
                                    offerAdditionals: S,
                                    offerType: I,
                                    processType: d,
                                    service: x,
                                    tvAdditionals: T,
                                    tvCode: k
                                }, {
                                    headers: {
                                        csrftoken: f
                                    }
                                }));
                            case 23:
                            case "end":
                                return R.stop()
                        }
                    }), null, null, null, Promise)
                },
                w = function(e) {
                    var t, n, a, r;
                    return c.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return t = e.propositionId, n = e.secondaryChoiceOffer, a = void 0 !== n && n, o.next = 3, c.a.awrap(Object(s.a)());
                            case 3:
                                return r = o.sent, o.next = 6, c.a.awrap(l.a.post("/hapi/fix/cart/add?propositionId=".concat(t, "&secondaryChoiceOffer=").concat(a, "&replaceExisting=true"), {}, {
                                    headers: {
                                        csrftoken: r
                                    }
                                }));
                            case 6:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        "48NU": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var a = n("cxan"),
                r = n("5IAQ"),
                c = n("zjfJ"),
                o = n("HbGN"),
                i = n("ERkP"),
                s = n.n(i),
                l = n("xWEo"),
                u = n("I6rk"),
                b = n("Kq2c"),
                p = n("y6sE"),
                d = n("l1C2");
            s.a.createElement;

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        Object(c.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = {
                    name: "1r2f04i",
                    styles: "margin-bottom:10px;"
                },
                j = {
                    name: "w7p5zd",
                    styles: "float:right;width:12px;height:12px;"
                },
                g = s.a.memo((function(e) {
                    var t, n = e.content,
                        i = Object(o.a)(e, ["content"]),
                        f = Object(b.useTheme)().bp,
                        g = Object(u.a)(),
                        y = Object(p.b)().hasTouch,
                        h = s.a.useCallback((function(e) {
                            var t = e.close;
                            return Object(d.b)(s.a.Fragment, null, Object(d.b)("div", {
                                css: m
                            }, Object(d.b)(l.a, {
                                name: "close",
                                role: "button",
                                onClick: t,
                                css: j
                            })), n)
                        }), [n]);
                    return Object(d.b)(b.Tooltip, Object(a.a)({
                        content: y ? h : n,
                        withPointer: !y,
                        sides: y ? ["TOP", "BOTTOM"] : void 0,
                        trigger: y ? "CLICK" : "HOVER",
                        interceptPosition: function(e) {
                            return g ? {
                                side: e.side,
                                position: O({}, e.position, {
                                    left: 20,
                                    right: 20
                                })
                            } : e
                        },
                        safeSpace: g ? {
                            top: 80,
                            bottom: 50
                        } : {
                            top: 110
                        },
                        css: Object(r.a)((t = {
                            width: "auto"
                        }, Object(c.a)(t, f.ONLY_MOBILE, {
                            left: 20,
                            right: 20
                        }), Object(c.a)(t, f.FROM_TABLET, {
                            width: 280
                        }), t), "")
                    }, i))
                }))
        },
        "4GeQ": function(e, t, n) {
            "use strict";
            var a = n("P0jV");
            e.exports = function(e, t, n) {
                return a.forEach(n, (function(n) {
                    e = n(e, t)
                })), e
            }
        },
        "4lZg": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return u
            }));
            var a = n("cxan"),
                r = n("HbGN"),
                c = n("ERkP"),
                o = n.n(c),
                i = n("l1C2"),
                s = (o.a.createElement, o.a.createContext(null)),
                l = function(e) {
                    var t = e.summaryData,
                        n = Object(r.a)(e, ["summaryData"]);
                    return Object(i.b)(s.Provider, Object(a.a)({
                        value: t
                    }, n))
                };
            l.displayName = "SummaryContextProvider";
            var u = function() {
                var e = o.a.useContext(s);
                if (null === e) throw Error("useSummary: Please provide SummaryContext value.");
                return e
            }
        },
        "5FZF": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = {
                    M: 0,
                    B: 1,
                    N: 2,
                    D: 3
                },
                r = {
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
                    return (r[e] || [])[a[t]] || ""
                }
        },
        "5s2p": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 31536e7,
                    a = "".concat(e, "=").concat(t, ";"),
                    r = "";
                if (null !== n) {
                    var c = new Date;
                    c.setTime(c.getTime() + n), r = "expires=".concat(c.toUTCString(), ";")
                }
                document.cookie = a + r
            }
        },
        "8dj6": function(e, t, n) {
            "use strict";
            var a = n("P0jV"),
                r = n("vfGT"),
                c = n("YsDt"),
                o = n("N/5i");

            function i(e) {
                var t = new c(e),
                    n = r(c.prototype.request, t);
                return a.extend(n, c.prototype, t), a.extend(n, t), n
            }
            var s = i(n("dyNj"));
            s.Axios = c, s.create = function(e) {
                return i(o(s.defaults, e))
            }, s.Cancel = n("FYay"), s.CancelToken = n("J1qw"), s.isCancel = n("WBY7"), s.all = function(e) {
                return Promise.all(e)
            }, s.spread = n("IOAS"), e.exports = s, e.exports.default = s
        },
        "9Hq1": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                return 0 === e.monthFrom && 0 === e.monthTo
            }
        },
        "9KUe": function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return i
            })), n.d(t, "c", (function() {
                return s
            })), n.d(t, "e", (function() {
                return l
            })), n.d(t, "a", (function() {
                return u
            })), n.d(t, "b", (function() {
                return b
            }));
            var a = n("VtSi"),
                r = n.n(a),
                c = n("v4L6"),
                o = n("qnbr"),
                i = function(e) {
                    var t, n, a;
                    return r.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return i.next = 2, r.a.awrap(Object(c.a)());
                            case 2:
                                return t = i.sent, i.next = 5, r.a.awrap(Object(o.a)("hapi/pwa/v1/product/getProducts", {
                                    headers: {
                                        "content-type": "application/json;charset=UTF-8",
                                        CSRFToken: t
                                    },
                                    method: "post",
                                    body: JSON.stringify(e)
                                }));
                            case 5:
                                return n = i.sent, i.next = 8, r.a.awrap(n.json());
                            case 8:
                                return a = i.sent, i.abrupt("return", a);
                            case 10:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, null, Promise)
                },
                s = function(e) {
                    var t, n;
                    return r.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, r.a.awrap(Object(o.a)("hapi/pwa/v1/product/getProducts", {
                                    params: {
                                        pk: e
                                    }
                                }));
                            case 2:
                                return t = a.sent, a.next = 5, r.a.awrap(t.json());
                            case 5:
                                return n = a.sent, a.abrupt("return", n);
                            case 7:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                l = function(e) {
                    var t, n, a, c = arguments;
                    return r.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = c.length > 1 && void 0 !== c[1] ? c[1] : {}, i.next = 3, r.a.awrap(Object(o.a)("hapi/pwa/v1/search/products", {
                                    params: {
                                        query: e.query,
                                        startRow: 1,
                                        rowNumbers: 10
                                    },
                                    headers: Object(o.c)(t.req)
                                }));
                            case 3:
                                return n = i.sent, i.next = 6, r.a.awrap(n.json());
                            case 6:
                                return a = i.sent, i.abrupt("return", a);
                            case 8:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, null, Promise)
                },
                u = function(e) {
                    var t, n, a, i, s, l;
                    return r.a.async((function(u) {
                        for (;;) switch (u.prev = u.next) {
                            case 0:
                                return t = e.baseId, n = e.paymentFilters, a = e.withPayments, u.next = 3, r.a.awrap(Object(c.a)());
                            case 3:
                                return i = u.sent, u.next = 6, r.a.awrap(Object(o.a)("hapi/pwa/v2/product/getProduct", {
                                    headers: {
                                        "content-type": "application/json;charset=UTF-8",
                                        CSRFToken: i
                                    },
                                    method: "post",
                                    body: JSON.stringify({
                                        code: t,
                                        filters: {
                                            paymentFilters: n,
                                            withPayments: a
                                        }
                                    })
                                }));
                            case 6:
                                return s = u.sent, u.next = 9, r.a.awrap(s.json());
                            case 9:
                                if (l = u.sent, s.ok) {
                                    u.next = 12;
                                    break
                                }
                                throw new Error(l.message);
                            case 12:
                                return u.abrupt("return", l);
                            case 13:
                            case "end":
                                return u.stop()
                        }
                    }), null, null, null, Promise)
                },
                b = function(e) {
                    var t, n, a, c = arguments;
                    return r.a.async((function(i) {
                        for (;;) switch (i.prev = i.next) {
                            case 0:
                                return t = c.length > 1 && void 0 !== c[1] ? c[1] : {}, i.next = 3, r.a.awrap(Object(o.a)("hapi/pwa/v2/product/getProducts", {
                                    params: {
                                        codes: e.ids.join(",")
                                    },
                                    headers: Object(o.c)(t.req)
                                }));
                            case 3:
                                return n = i.sent, i.next = 6, r.a.awrap(n.json());
                            case 6:
                                return a = i.sent, i.abrupt("return", a);
                            case 8:
                            case "end":
                                return i.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        Ay6X: function(e, t, n) {
            "use strict";
            var a = n("P0jV"),
                r = n("Soal"),
                c = n("Q2eF"),
                o = n("qvwg"),
                i = n("eGgp"),
                s = n("0zX2"),
                l = n("pQXz");
            e.exports = function(e) {
                return new Promise((function(t, u) {
                    var b = e.data,
                        p = e.headers;
                    a.isFormData(b) && delete p["Content-Type"];
                    var d = new XMLHttpRequest;
                    if (e.auth) {
                        var f = e.auth.username || "",
                            O = e.auth.password || "";
                        p.Authorization = "Basic " + btoa(f + ":" + O)
                    }
                    var m = o(e.baseURL, e.url);
                    if (d.open(e.method.toUpperCase(), c(m, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d.onreadystatechange = function() {
                            if (d && 4 === d.readyState && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                                var n = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null,
                                    a = {
                                        data: e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                                        status: d.status,
                                        statusText: d.statusText,
                                        headers: n,
                                        config: e,
                                        request: d
                                    };
                                r(t, u, a), d = null
                            }
                        }, d.onabort = function() {
                            d && (u(l("Request aborted", e, "ECONNABORTED", d)), d = null)
                        }, d.onerror = function() {
                            u(l("Network Error", e, null, d)), d = null
                        }, d.ontimeout = function() {
                            var t = "timeout of " + e.timeout + "ms exceeded";
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), u(l(t, e, "ECONNABORTED", d)), d = null
                        }, a.isStandardBrowserEnv()) {
                        var j = n("ym5Q"),
                            g = (e.withCredentials || s(m)) && e.xsrfCookieName ? j.read(e.xsrfCookieName) : void 0;
                        g && (p[e.xsrfHeaderName] = g)
                    }
                    if ("setRequestHeader" in d && a.forEach(p, (function(e, t) {
                            "undefined" === typeof b && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e)
                        })), a.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), e.responseType) try {
                        d.responseType = e.responseType
                    } catch (y) {
                        if ("json" !== e.responseType) throw y
                    }
                    "function" === typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" === typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                        d && (d.abort(), u(e), d = null)
                    })), void 0 === b && (b = null), d.send(b)
                }))
            }
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
                return i
            }));
            var a = n("HbGN"),
                r = n("ERkP"),
                c = n.n(r),
                o = n("7xIC"),
                i = function(e) {
                    var t = Object(o.useRouter)().query;
                    return c.a.useMemo((function() {
                        if ("string" !== typeof t.offerSelectorComponent) return null;
                        var n;
                        n = window.atob;
                        try {
                            var r = JSON.parse(n(t.offerSelectorComponent)),
                                c = r.id,
                                o = Object(a.a)(r, ["id"]);
                            return c !== e ? null : o
                        } catch (i) {
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
            var a = n("cxan"),
                r = n("5IAQ"),
                c = n("zygG"),
                o = n("HbGN"),
                i = n("ERkP"),
                s = n.n(i),
                l = null,
                u = null,
                b = null,
                p = function(e) {
                    e.preventDefault()
                },
                d = function(e) {
                    s.a.useEffect((function() {
                        e ? (l = window.getComputedStyle(document.body).overflow, u = window.getComputedStyle(document.documentElement).overflow, b = window.getComputedStyle(document.body).height, document.body.style.overflow = "hidden", document.documentElement.style.overflow = "initial", document.body.style.height = "100vh", document.body.addEventListener("touchmove", p, {
                            passive: !1
                        })) : (document.body.style.overflow = l || "", document.documentElement.style.overflow = u || "", document.body.style.height = b || "", l = null, u = null, b = null, document.body.removeEventListener("touchmove", p))
                    }), [e])
                },
                f = n("Kq2c"),
                O = n("l1C2"),
                m = (s.a.createElement, function(e) {
                    var t = e.shouldShow,
                        n = e.onClick,
                        a = Object(f.useTheme)().zIndex;
                    return d(t), Object(O.b)("div", {
                        role: "button",
                        "aria-label": "Zamknij warstw\u0119",
                        onClick: n,
                        css: Object(r.a)({
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            position: "fixed",
                            zIndex: a.LAYER_1,
                            opacity: t ? 1 : 0,
                            height: t ? "100vh" : 0,
                            backgroundColor: "rgba(0,0,0, .2)",
                            visibility: t ? "visible" : "hidden",
                            transition: "visibility 0s linear ".concat(t ? "0s" : ".15s", ", opacity .15s")
                        }, "")
                    })
                }),
                j = n("xWEo"),
                g = (s.a.createElement, s.a.createContext(null)),
                y = function(e) {
                    var t = e.isExpandable,
                        n = e.isExpanded,
                        r = Object(o.a)(e, ["isExpandable", "isExpanded"]);
                    return Object(O.b)(g.Provider, Object(a.a)({
                        value: {
                            isExpandable: t,
                            isExpanded: n
                        }
                    }, r))
                },
                h = function() {
                    var e = s.a.useContext(g);
                    if (null === e) throw Error("useFloaterContext: Please provide FloaterContextProvider value.");
                    return e
                };
            s.a.createElement;
            var v = {
                    name: "u111ks",
                    styles: "display:flex;align-items:center;font-weight:bold;justify-content:space-between;"
                },
                E = n("BNVM"),
                T = (s.a.createElement, s.a.createElement, {
                    Wrapper: function(e) {
                        var t = e.isExpandable,
                            n = void 0 !== t && t,
                            i = e.shouldBeVisible,
                            l = void 0 === i || i,
                            u = e.defaultExpanded,
                            b = void 0 !== u && u,
                            p = e.position,
                            d = void 0 === p ? "fixed" : p,
                            j = e.top,
                            g = e.innerCss,
                            h = e.children,
                            v = Object(o.a)(e, ["isExpandable", "shouldBeVisible", "defaultExpanded", "position", "top", "innerCss", "children"]),
                            E = Object(f.useTheme)(),
                            T = E.colors,
                            S = E.zIndex,
                            C = s.a.useState(b),
                            w = Object(c.a)(C, 2),
                            x = w[0],
                            k = w[1],
                            P = "sticky" === d,
                            I = "fixed" === d;
                        return Object(O.b)(y, {
                            top: j,
                            isExpandable: n,
                            isExpanded: x
                        }, n && Object(O.b)(m, {
                            shouldShow: x,
                            onClick: function() {
                                k(!1)
                            }
                        }), Object(O.b)("div", Object(a.a)({
                            style: {
                                position: P ? "sticky" : "absolute"
                            },
                            css: Object(r.a)([P && {
                                top: j,
                                willChange: "top",
                                transition: "top .15s",
                                zIndex: S.LAYER_3
                            }], "")
                        }, v), Object(O.b)("div", {
                            role: "button",
                            "aria-expanded": x,
                            onClick: n ? function() {
                                k(!x)
                            } : void 0,
                            style: {
                                opacity: l ? 1 : 0,
                                top: I ? j : void 0,
                                position: I ? "fixed" : "static",
                                visibility: l ? "visible" : "hidden"
                            },
                            css: Object(r.a)([{
                                left: 10,
                                right: 10,
                                padding: 10,
                                borderRadius: 4,
                                zIndex: S.LAYER_3,
                                backgroundColor: T.WHITE,
                                boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.2)",
                                transition: "visibility 0s linear ".concat(l ? "0s" : ".15s", ", opacity .15s, top .15s")
                            }, g], "")
                        }, h)))
                    },
                    Header: function(e) {
                        var t = e.children,
                            n = Object(o.a)(e, ["children"]),
                            c = h(),
                            i = c.isExpandable,
                            s = c.isExpanded;
                        return Object(O.b)("div", Object(a.a)({
                            css: v
                        }, n), t, i && Object(O.b)(j.a, {
                            name: "arrow-down",
                            css: Object(r.a)({
                                transition: "transform .1s",
                                transform: "rotate(".concat(s ? "180" : "0", "deg)")
                            }, "")
                        }))
                    },
                    Content: function(e) {
                        var t = h().isExpanded,
                            n = Object(E.a)().bind,
                            c = n.ref.current,
                            o = t && c ? c.scrollHeight : 0;
                        return Object(O.b)("div", Object(a.a)({}, n, {
                            css: Object(r.a)({
                                maxHeight: o,
                                overflow: "hidden",
                                transition: "max-height .15s",
                                visibility: t ? "visible" : "hidden"
                            }, "")
                        }, e))
                    }
                })
        },
        BtTt: function(e, t, n) {
            "use strict";
            var a = n("P0jV"),
                r = n("4GeQ"),
                c = n("WBY7"),
                o = n("dyNj");

            function i(e) {
                e.cancelToken && e.cancelToken.throwIfRequested()
            }
            e.exports = function(e) {
                return i(e), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                })), (e.adapter || o.adapter)(e).then((function(t) {
                    return i(e), t.data = r(t.data, t.headers, e.transformResponse), t
                }), (function(t) {
                    return c(t) || (i(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                }))
            }
        },
        "D2/y": function(e, t, n) {
            "use strict";

            function a(e) {
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (e = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
                        }(e))) {
                        var t = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return t >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[t++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, c, o = !0,
                    i = !1;
                return {
                    s: function() {
                        a = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = a.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        i = !0, c = e
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (i) throw c
                        }
                    }
                }
            }

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }
            n.d(t, "a", (function() {
                return c
            }));
            var c = function(e, t) {
                var n, r = [],
                    c = new Map,
                    o = a(e);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var i = n.value;
                        c.has(i[t]) || (c.set(i[t], !0), r.push(i))
                    }
                } catch (s) {
                    o.e(s)
                } finally {
                    o.f()
                }
                return r
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
                return r
            })), n.d(t, "b", (function() {
                return c
            }));
            var a = n("o5YE"),
                r = Object(a.storageFactory)((function() {
                    return window.localStorage
                })),
                c = Object(a.storageFactory)((function() {
                    return window.sessionStorage
                }))
        },
        EUF5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var a = n("zjfJ"),
                r = n("ERkP"),
                c = n.n(r),
                o = n("IdR4"),
                i = n("Bc8N"),
                s = n("KcfE");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var u = function(e) {
                var t = e.currentPayment,
                    n = e.shouldShowNetPrices,
                    r = "ONETIME" === t.paymentType,
                    u = c.a.useMemo((function() {
                        var e = [];
                        r ? e.push({
                            price: n ? t.netPrice : t.priceGross,
                            monthFrom: 0,
                            monthTo: 0,
                            currency: "z\u0142"
                        }) : (t.monthlyPayments ? t.monthlyPayments : []).forEach((function(t) {
                            return e.push(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                                        Object(a.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, t, {
                                price: n ? t.netPrice : t.price
                            }))
                        }));
                        return Object(i.a)(e)
                    }), [r, t, n]);
                if (!t || !u) return null;
                var b = r ? "za ".concat(Object(o.a)(u.first.price), " z\u0142 ").concat(n ? "+ VAT" : "") : null,
                    p = r ? null : u.tail.map((function(e) {
                        return {
                            price: Object(o.a)(e.price, {
                                integersWithFractionDigits: !0
                            }),
                            currency: "z\u0142".concat(n ? " + VAT" : ""),
                            months: "".concat(e.monthTo, " ").concat(Object(s.a)(["rata", "raty", "rat"], e.monthTo))
                        }
                    })),
                    d = u.tail.length > 0 ? Object(o.a)(u.first.price) : null;
                return {
                    propositionName: t.propositionName,
                    oneTimePayment: b,
                    installmentPayment: p,
                    followingPriceStep: d
                }
            }
        },
        F6me: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            }));
            var a = n("cxan"),
                r = n("zjfJ"),
                c = n("5IAQ"),
                o = n("HbGN"),
                i = n("ERkP"),
                s = n.n(i),
                l = n("Kq2c"),
                u = n("obcW"),
                b = n("xWEo"),
                p = n("l1C2"),
                d = (s.a.createElement, s.a.memo((function(e) {
                    var t = e.name,
                        n = e.isActive,
                        a = e.isFirst,
                        o = e.action,
                        i = e.wrapperCss,
                        s = e.isFirstStep,
                        u = Object(l.useTheme)(),
                        d = u.bp,
                        f = u.colors;
                    return Object(p.b)("span", {
                        role: "button",
                        "aria-disabled": !n,
                        onClick: o,
                        css: Object(c.a)(Object(r.a)({
                            marginLeft: a ? 15 : 5,
                            display: s ? "none" : "inline-flex",
                            alignItems: "center"
                        }, d.FROM_TABLET, {
                            marginLeft: a ? 15 : 10
                        }), "")
                    }, !a && Object(p.b)(b.a, {
                        name: "arrow-right",
                        color: f.CHROME,
                        css: Object(c.a)(Object(r.a)({
                            marginRight: 5
                        }, d.FROM_TABLET, {
                            marginRight: 10
                        }), "")
                    }), n ? Object(p.b)("strong", {
                        css: Object(c.a)([{
                            whiteSpace: "nowrap",
                            cursor: "default"
                        }, i], "")
                    }, t) : Object(p.b)("span", {
                        css: Object(c.a)([{
                            whiteSpace: "nowrap",
                            cursor: o ? "pointer" : "default"
                        }, i], "")
                    }, t))
                })));
            d.displayName = "Step";
            s.a.createElement;
            var f = {
                    name: "jjwdxf",
                    styles: "display:inline-block;overflow:hidden;flex-shrink:0;"
                },
                O = {
                    name: "lvyu5j",
                    styles: "margin-right:10px;"
                },
                m = s.a.memo((function(e) {
                    var t = e.isVisible,
                        n = e.onClick,
                        a = e.wrapperCss,
                        o = e.stylesRef,
                        i = Object(l.useTheme)(),
                        d = i.colors,
                        m = i.bp,
                        j = Object(u.useTransition)(t, {
                            initial: {
                                maxWidth: t ? 90 : 70,
                                opacity: t ? 1 : 0
                            },
                            from: {
                                maxWidth: 50,
                                opacity: 0
                            },
                            enter: {
                                maxWidth: 90,
                                opacity: 1
                            },
                            leave: {
                                maxWidth: 70,
                                opacity: 0
                            },
                            ref: o
                        });
                    return Object(p.b)(s.a.Fragment, null, j((function(e, t) {
                        return t ? Object(p.b)(u.animated.span, {
                            style: e,
                            css: f
                        }, Object(p.b)("button", {
                            type: "button",
                            title: "Powr\xf3t",
                            onClick: n,
                            css: Object(c.a)([Object(r.a)({
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "none",
                                color: d.WHITE,
                                padding: "5px 10px 5px 10px",
                                borderRadius: 4,
                                overflow: "hidden",
                                width: "100%",
                                cursor: "pointer"
                            }, m.FROM_TABLET, {
                                fontSize: 14
                            }), a], "")
                        }, Object(p.b)(b.a, {
                            name: "arrow-left",
                            width: 12,
                            height: 12,
                            color: d.WHITE,
                            css: O
                        }), " ", Object(p.b)("strong", null, "Powr\xf3t"))) : null
                    })))
                }));
            m.displayName = "BackButton";
            var j = {
                    LIGHT: {
                        text: "BLACK",
                        buttonBackgroundColor: "BLACK",
                        backgroundColor: "WHITE",
                        backgroundColorMobile: "WHITE"
                    },
                    DARK: {
                        text: "WHITE",
                        buttonBackgroundColor: "STONE",
                        backgroundColor: "BLACK",
                        backgroundColorMobile: "BLACK"
                    }
                },
                g = (s.a.createElement, s.a.memo((function(e) {
                    var t = e.isFirstStep,
                        n = e.steps,
                        i = e.backAction,
                        b = e.variant,
                        f = void 0 === b ? "LIGHT" : b,
                        O = e.isBorderBottom,
                        g = e.isVisible,
                        y = e.shouldBeAnimated,
                        h = Object(o.a)(e, ["isFirstStep", "steps", "backAction", "variant", "isBorderBottom", "isVisible", "shouldBeAnimated"]),
                        v = Object(l.useTheme)(),
                        E = v.bp,
                        T = v.colors,
                        S = j[f],
                        C = T[S.text],
                        w = T[S.backgroundColor],
                        x = T[S.backgroundColorMobile],
                        k = T[S.buttonBackgroundColor],
                        P = s.a.useRef(null);
                    s.a.useEffect((function() {
                        P.current && (P.current.scrollLeft = 1e4)
                    }), [n]);
                    var I = s.a.useRef(null),
                        R = Object(u.useSpring)({
                            ref: I,
                            from: {
                                height: g ? 30 : 0
                            },
                            to: {
                                height: y ? g ? 45 : 0 : 30,
                                padding: y ? g ? "10px 20px" : "0px 0px" : "auto"
                            }
                        }),
                        A = s.a.useRef(null),
                        N = s.a.useRef(null),
                        z = Object(u.useSpring)({
                            ref: N,
                            from: {
                                width: y ? "80%" : "100%",
                                opacity: y ? 0 : 1
                            },
                            to: {
                                width: y ? g ? "100%" : "80%" : "100%",
                                opacity: y ? g ? 1 : 0 : 1
                            }
                        });
                    return Object(u.useChain)(g ? [I, A, N] : [N, A, I], g ? [0, .2, .2] : [0, 0, .1]), Object(p.b)(s.a.Fragment, null, Object(p.b)(u.animated.div, Object(a.a)({
                        style: R,
                        css: Object(c.a)(Object(r.a)({
                            overflow: "hidden",
                            backgroundColor: w
                        }, E.FROM_TABLET, {
                            width: "100%",
                            borderBottom: O ? "1px solid ".concat(T.CHROME) : "none"
                        }), "")
                    }, h), Object(p.b)("div", {
                        css: Object(c.a)(Object(r.a)({
                            display: "flex",
                            alignItems: "center",
                            overflow: "hidden"
                        }, E.FROM_DESKTOP, {
                            maxWidth: 1240,
                            width: "100%",
                            margin: "0 auto"
                        }), "")
                    }, Object(p.b)(m, {
                        wrapperCss: {
                            backgroundColor: k
                        },
                        isVisible: g,
                        onClick: i,
                        stylesRef: A
                    }), Object(p.b)(u.animated.div, {
                        ref: P,
                        style: z,
                        css: Object(c.a)(Object(r.a)({
                            fontSize: 12,
                            display: "flex",
                            overflowX: "auto",
                            alignItems: "center",
                            height: "100%",
                            "&:before": {
                                content: "''",
                                display: "block",
                                width: 15,
                                height: 25,
                                position: "absolute",
                                boxShadow: "inset 10px 0px 5px 0px ".concat(x)
                            }
                        }, E.FROM_TABLET, {
                            fontSize: 14,
                            width: "100%"
                        }), "")
                    }, n.map((function(e, n) {
                        return Object(p.b)(d, Object(a.a)({
                            key: n
                        }, e, {
                            isFirstStep: t,
                            isFirst: 0 === n,
                            isActive: e.isActive,
                            wrapperCss: {
                                color: C
                            }
                        }))
                    }))))))
                })));
            g.displayName = "BreadcrumbsNavigation"
        },
        FYay: function(e, t, n) {
            "use strict";

            function a(e) {
                this.message = e
            }
            a.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, a.prototype.__CANCEL__ = !0, e.exports = a
        },
        HKDS: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e, t) {
                var n;
                return null === (n = e.find((function(e) {
                    return e.offerId === t.propositionId
                }))) || void 0 === n ? void 0 : n.packages
            }
        },
        IBuz: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return N
            })), n.d(t, "b", (function() {
                return z
            }));
            var a = n("cxan"),
                r = n("zygG"),
                c = n("HbGN"),
                o = n("ERkP"),
                i = n.n(o),
                s = n("azwC"),
                l = n("kN39"),
                u = n("y6sE"),
                b = n("rpJ/"),
                p = n("zjfJ"),
                d = n("AsJ6"),
                f = n("YlAD");

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        Object(p.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = Object(d.b)({
                    currentPayment: function(e) {
                        var t = e.details,
                            n = e.currentPayment,
                            a = e.propositionId;
                        return t && a && Object(f.c)(t.payments, a) || n
                    }
                }),
                g = Object(d.b)({
                    currentPayment: function(e) {
                        var t = e.currentPayment,
                            n = e.details,
                            a = e.propositionId;
                        return n && Object(f.a)(n.payments, a) || t
                    }
                }),
                y = Object(d.b)({
                    selectedVariants: function(e, t) {
                        var n = e.variantId,
                            a = t.data.product,
                            r = (n && a.variantsSet.find((function(e) {
                                return e.code === n
                            })) || a.variantsSet[0]).colorVariants.map((function(e) {
                                return e.code
                            }));
                        return a.items.reduce((function(e, t) {
                            var n = t.code,
                                a = t.variants;
                            return e[n] = a.find((function(e) {
                                return r.includes(e.code)
                            })) || a[0], e
                        }), {})
                    }
                }),
                h = Object(d.b)({
                    details: function(e, t) {
                        var n = t.data;
                        return e.payments ? m({}, n, {
                            payments: e.payments
                        }) : n
                    }
                }),
                v = Object(d.b)({
                    propositionId: function(e, t) {
                        return t.propositionId
                    }
                }),
                E = Object(d.b)({
                    selectedItemIndex: function(e, t) {
                        return t.selectedItemIndex
                    }
                }),
                T = Object(d.b)({
                    selectedVariants: function(e, t) {
                        var n = t.selectedVariants;
                        return m({}, e.selectedVariants, {}, n)
                    }
                }),
                S = Object(d.b)({
                    selectedVariantSet: function(e) {
                        var t = e.details,
                            n = e.selectedVariants,
                            a = e.selectedVariantSet;
                        return (null === t || void 0 === t ? void 0 : t.product) && Object(f.b)(t.product.variantsSet, n) || a
                    }
                }),
                C = n("VtSi"),
                w = n.n(C),
                x = n("9KUe");

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        Object(p.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var I = Object(b.a)({
                    context: {
                        baseId: "",
                        selectedItemIndex: 0,
                        selectedVariants: {},
                        showNetPrices: !1,
                        withPayments: !0
                    },
                    initial: "loading",
                    states: {
                        loading: {
                            invoke: {
                                src: "getProductDetails",
                                onDone: {
                                    target: "success",
                                    actions: ["setProductDetails", "setDefaultCurrentPayment", "setDefaultSelectedVariants", "setSelectedVariantSet"]
                                },
                                onError: {
                                    target: "failure"
                                }
                            }
                        },
                        success: {
                            on: {
                                SET_PROPOSITION_ID: {
                                    actions: ["setPropositionId", "setCurrentPayment"]
                                },
                                SET_SELECTED_ITEM_INDEX: {
                                    actions: ["setSelectedItemIndex"]
                                },
                                SET_SELECTED_VARIANTS: {
                                    actions: ["setSelectedVariants", "setSelectedVariantSet"]
                                }
                            }
                        },
                        failure: {
                            on: {
                                RETRY: "loading"
                            }
                        }
                    }
                }, {
                    actions: {
                        setCurrentPayment: j,
                        setDefaultCurrentPayment: g,
                        setDefaultSelectedVariants: y,
                        setProductDetails: h,
                        setPropositionId: v,
                        setSelectedItemIndex: E,
                        setSelectedVariants: T,
                        setSelectedVariantSet: S
                    },
                    services: {
                        getProductDetails: function(e) {
                            var t, n, a, c, o, i;
                            return w.a.async((function(s) {
                                for (;;) switch (s.prev = s.next) {
                                    case 0:
                                        return t = e.baseId, n = e.selectedPayments, a = e.withPayments, s.next = 3, w.a.awrap(Object(x.a)({
                                            baseId: t,
                                            paymentFilters: n,
                                            withPayments: a
                                        }));
                                    case 3:
                                        if (c = s.sent, o = c.payments ? Object.entries(c.payments).flatMap((function(e) {
                                                var t = Object(r.a)(e, 2);
                                                t[0];
                                                return t[1]
                                            })) : [], "SINGLE_PRODUCT" !== (null === c || void 0 === c ? void 0 : c.type)) {
                                            s.next = 8;
                                            break
                                        }
                                        return i = c.product.item, s.abrupt("return", P({}, c, {
                                            payments: o,
                                            product: {
                                                items: [i],
                                                variantsSet: Object(f.e)(i.variants)
                                            }
                                        }));
                                    case 8:
                                        return s.abrupt("return", P({}, c, {
                                            payments: o
                                        }));
                                    case 9:
                                    case "end":
                                        return s.stop()
                                }
                            }), null, null, null, Promise)
                        }
                    }
                }),
                R = n("l1C2"),
                A = (i.a.createElement, i.a.createContext(null)),
                N = i.a.memo((function(e) {
                    var t = e.actions,
                        n = e.baseId,
                        o = e.payments,
                        b = e.propositionId,
                        p = e.selectedCharacteristics,
                        d = e.selectedPayments,
                        f = e.variantId,
                        O = e.withPayments,
                        m = e.onCloseShelf,
                        j = Object(c.a)(e, ["actions", "baseId", "payments", "propositionId", "selectedCharacteristics", "selectedPayments", "variantId", "withPayments", "onCloseShelf"]),
                        g = Object(u.b)().market,
                        y = Object(s.useMachine)(I, {
                            context: {
                                actions: t,
                                baseId: n,
                                payments: o,
                                propositionId: b,
                                selectedCharacteristics: p,
                                selectedPayments: d,
                                showNetPrices: Object(l.a)(g),
                                variantId: f,
                                withPayments: O || !o,
                                onCloseShelf: m
                            }
                        }),
                        h = Object(r.a)(y, 2),
                        v = h[0],
                        E = h[1];
                    return i.a.useEffect((function() {
                        E({
                            type: "SET_PROPOSITION_ID",
                            propositionId: b
                        })
                    }), [b, E]), Object(R.b)(A.Provider, Object(a.a)({
                        value: {
                            current: v,
                            send: E
                        }
                    }, j))
                })),
                z = function() {
                    var e = i.a.useContext(A);
                    if (null === e) throw Error("useProductDetailsContext: Please provide ProductDetailsProvider value.");
                    return e
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
                return a
            }));
            var a = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    integersWithFractionDigits: !1
                };
                return !t.integersWithFractionDigits && Number.isInteger(e) ? String(e) : e.toLocaleString("pl-PL", {
                    minimumFractionDigits: 2
                })
            }
        },
        J1qw: function(e, t, n) {
            "use strict";
            var a = n("FYay");

            function r(e) {
                if ("function" !== typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }));
                var n = this;
                e((function(e) {
                    n.reason || (n.reason = new a(e), t(n.reason))
                }))
            }
            r.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, r.source = function() {
                var e;
                return {
                    token: new r((function(t) {
                        e = t
                    })),
                    cancel: e
                }
            }, e.exports = r
        },
        Lksv: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return y
            }));
            var a = n("zjfJ"),
                r = n("5IAQ"),
                c = n("ERkP"),
                o = n.n(c),
                i = n("cxan"),
                s = n("l1C2"),
                l = (c.createElement, c.memo((function(e) {
                    return Object(s.b)("svg", Object(i.a)({
                        viewBox: "0 0 20 20",
                        width: "1em",
                        height: "1em"
                    }, e), Object(s.b)("path", {
                        d: "M10 0a10 10 0 1010 10A10 10 0 0010 0zm0 2.35a1.765 1.765 0 11-1.765 1.77A1.766 1.766 0 0110 2.35zm2.941 14.12H7.647v-.6l.125-.01a1.048 1.048 0 00.809-.31 2 2 0 00.164-1.11V9.1a2 2 0 00-.2-1.16 1.089 1.089 0 00-.78-.26l-.121-.01v-.61h4.118v7.38a1.709 1.709 0 00.288 1.16 1.04 1.04 0 00.768.26l.121.01v.6z",
                        fillRule: "evenodd"
                    }))
                })));
            l.displayName = "InformationIcon";
            var u = n("Kq2c"),
                b = n("EUF5"),
                p = n("IBuz");
            o.a.createElement;
            var d = {
                    name: "scavcu",
                    styles: "margin:10px 0 20px;"
                },
                f = {
                    name: "4t9mca",
                    styles: "font-size:14px;font-weight:bold;margin:0 0 10px;line-height:1;"
                },
                O = {
                    name: "tkcdss",
                    styles: "display:block;font-size:12px;margin-bottom:20px;margin-top:2px;"
                },
                m = {
                    name: "1wcba0h",
                    styles: "display:flex;margin-top:20px;"
                },
                j = {
                    name: "1v994a0",
                    styles: "margin-right:6px;"
                },
                g = {
                    name: "1qslypz",
                    styles: "font-size:12px;line-height:normal;margin:0;"
                },
                y = function(e) {
                    var t = e.withDescriptions,
                        n = void 0 === t || t,
                        c = Object(u.useTheme)(),
                        i = c.bp,
                        y = c.colors,
                        h = Object(p.b)().current.context,
                        v = h.currentPayment,
                        E = h.showNetPrices,
                        T = Object(b.a)({
                            currentPayment: v,
                            shouldShowNetPrices: E
                        });
                    if (!T) return null;
                    var S = T.propositionName,
                        C = T.oneTimePayment,
                        w = T.installmentPayment,
                        x = T.followingPriceStep;
                    return Object(s.b)("div", {
                        css: d
                    }, Object(s.b)(u.SmoothHeightResizer, null, n && S && Object(s.b)("p", {
                        css: f
                    }, S), Object(s.b)("strong", {
                        css: Object(r.a)(Object(a.a)({
                            fontSize: 30
                        }, i.FROM_TABLET, {
                            fontSize: 40
                        }), "")
                    }, C), null === w || void 0 === w ? void 0 : w.map((function(e, t) {
                        var n = e.currency,
                            c = e.months,
                            o = e.price;
                        return Object(s.b)("span", {
                            key: t
                        }, Object(s.b)(u.Swapper, {
                            css: Object(r.a)(Object(a.a)({
                                display: "inline-block",
                                fontSize: 30,
                                fontWeight: "bold"
                            }, i.FROM_TABLET, {
                                fontSize: 40
                            }), "")
                        }, o), Object(s.b)("strong", {
                            css: Object(r.a)(Object(a.a)({
                                fontSize: 18
                            }, i.FROM_TABLET, {
                                fontSize: 24
                            }), "")
                        }, "\xa0", n, " x ", c))
                    })), x && Object(s.b)("span", {
                        css: O
                    }, "+ ", x, " z\u0142", E && "0" !== x ? " + VAT" : "", " na start"), n && S && Object(s.b)(o.a.Fragment, null, Object(s.b)(u.Separator, null), Object(s.b)("div", {
                        css: m
                    }, Object(s.b)(l, {
                        css: j,
                        fill: y.INFO,
                        height: 16,
                        width: 16
                    }), Object(s.b)("p", {
                        css: g
                    }, "Op\u0142ata za abonament kom\xf3rkowy b\u0119dzie widoczna na kolejnym kroku")))))
                }
        },
        M44J: function(e, t, n) {
            "use strict";
            e.exports = function(e, t, n, a, r) {
                return e.config = t, n && (e.code = n), e.request = a, e.response = r, e.isAxiosError = !0, e.toJSON = function() {
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
            var a = n("P0jV");
            e.exports = function(e, t) {
                t = t || {};
                var n = {},
                    r = ["url", "method", "params", "data"],
                    c = ["headers", "auth", "proxy"],
                    o = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
                a.forEach(r, (function(e) {
                    "undefined" !== typeof t[e] && (n[e] = t[e])
                })), a.forEach(c, (function(r) {
                    a.isObject(t[r]) ? n[r] = a.deepMerge(e[r], t[r]) : "undefined" !== typeof t[r] ? n[r] = t[r] : a.isObject(e[r]) ? n[r] = a.deepMerge(e[r]) : "undefined" !== typeof e[r] && (n[r] = e[r])
                })), a.forEach(o, (function(a) {
                    "undefined" !== typeof t[a] ? n[a] = t[a] : "undefined" !== typeof e[a] && (n[a] = e[a])
                }));
                var i = r.concat(c).concat(o),
                    s = Object.keys(t).filter((function(e) {
                        return -1 === i.indexOf(e)
                    }));
                return a.forEach(s, (function(a) {
                    "undefined" !== typeof t[a] ? n[a] = t[a] : "undefined" !== typeof e[a] && (n[a] = e[a])
                })), n
            }
        },
        O3AJ: function(e, t, n) {
            "use strict";
            var a = n("P0jV");

            function r() {
                this.handlers = []
            }
            r.prototype.use = function(e, t) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t
                }), this.handlers.length - 1
            }, r.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, r.prototype.forEach = function(e) {
                a.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }, e.exports = r
        },
        O6AW: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "Sufler", (function() {
                return Qs
            }));
            var a = {};
            n.r(a), n.d(a, "Description", (function() {
                return H
            })), n.d(a, "Main", (function() {
                return Q
            })), n.d(a, "Container", (function() {
                return ne
            }));
            var r = {};
            n.r(r), n.d(r, "Main", (function() {
                return se
            })), n.d(r, "Description", (function() {
                return je
            }));
            var c = {};
            n.r(c), n.d(c, "Description", (function() {
                return ge
            })), n.d(c, "Main", (function() {
                return De
            }));
            var o = {};
            n.r(o), n.d(o, "Main", (function() {
                return Pt
            })), n.d(o, "Description", (function() {
                return _t
            })), n.d(o, "Container", (function() {
                return Mt
            }));
            var i = {};
            n.r(i), n.d(i, "Main", (function() {
                return Kc
            })), n.d(i, "Description", (function() {
                return no
            })), n.d(i, "Container", (function() {
                return ao
            }));
            var s = {};
            n.r(s), n.d(s, "Main", (function() {
                return ho
            })), n.d(s, "Description", (function() {
                return Eo
            }));
            var l = {};
            n.r(l), n.d(l, "Main", (function() {
                return Io
            })), n.d(l, "Description", (function() {
                return Eo
            }));
            var u = {};
            n.r(u), n.d(u, "Description", (function() {
                return Jo
            })), n.d(u, "Main", (function() {
                return Qo
            }));
            var b = {};
            n.r(b), n.d(b, "Description", (function() {
                return $o
            })), n.d(b, "Main", (function() {
                return bi
            }));
            var p = {};
            n.r(p), n.d(p, "Description", (function() {
                return ji
            })), n.d(p, "Main", (function() {
                return gi
            })), n.d(p, "Container", (function() {
                return yi
            }));
            var d = {};
            n.r(d), n.d(d, "Main", (function() {
                return hi
            })), n.d(d, "Description", (function() {
                return vi
            }));
            var f = {};
            n.r(f), n.d(f, "Main", (function() {
                return Ii
            })), n.d(f, "Description", (function() {
                return Ai
            })), n.d(f, "Container", (function() {
                return Mi
            }));
            var O = {};
            n.r(O), n.d(O, "Main", (function() {
                return Fi
            })), n.d(O, "Description", (function() {
                return Ui
            }));
            var m = {};
            n.r(m), n.d(m, "Main", (function() {
                return ds
            })), n.d(m, "Description", (function() {
                return fs
            })), n.d(m, "Container", (function() {
                return Os
            }));
            var j = {};
            n.r(j), n.d(j, "Main", (function() {
                return ks
            })), n.d(j, "Description", (function() {
                return Ns
            }));
            var g = {};
            n.r(g), n.d(g, "Description", (function() {
                return zs.a
            })), n.d(g, "Main", (function() {
                return Fs
            })), n.d(g, "Container", (function() {
                return Vs
            }));
            var y = n("zjfJ"),
                h = n("5IAQ"),
                v = n("ERkP"),
                E = n.n(v),
                T = n("Kq2c"),
                S = n("Zscy"),
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
                I = n("EJk9"),
                R = n("y6sE"),
                A = n("cxan"),
                N = n("l1C2");
            E.a.createElement;
            var z = {
                    name: "1kc3nqq",
                    styles: "margin:0;padding:0;font-size:14px;margin-right:20px;"
                },
                L = function(e) {
                    var t = Object(T.useTheme)(),
                        n = t.colors,
                        a = t.bp,
                        r = Object(S.b)(),
                        c = r.selectedAccount,
                        o = r.currentStep,
                        i = r.dispatch;
                    if (!c) return null;
                    var s = c.code;
                    return Object(N.b)("div", Object(A.a)({
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            alignItems: "flex-end"
                        }, a.FROM_TABLET, {
                            alignItems: "baseline"
                        }), "")
                    }, e), Object(N.b)("p", {
                        css: z
                    }, Object(N.b)("span", {
                        css: Object(h.a)(Object(y.a)({}, a.ONLY_MOBILE, {
                            display: "block"
                        }), "")
                    }, "Twoje konto:", " "), Object(N.b)("strong", null, "Us\u0142ugi kom\xf3rkowe"), Object(N.b)("span", {
                        css: Object(h.a)(Object(y.a)({
                            color: n.SILVER,
                            fontSize: 12,
                            marginLeft: 5
                        }, a.FROM_TABLET, {
                            marginLeft: 10
                        }), "")
                    }, s || "Nowe konto")), Object(N.b)(T.AButton, {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14
                        }, a.ONLY_MOBILE, {
                            marginBottom: 4
                        }), ""),
                        onClick: function() {
                            "PROCESSES" === o && (i({
                                type: "resetSelectedProcess"
                            }), i({
                                type: "setCurrentSingleOffer",
                                payload: null
                            })), "OFFERS" === o && (i({
                                type: "resetSelectedOffer"
                            }), i({
                                type: "resetSelectedProcess"
                            }), i({
                                type: "setCurrentSingleOffer",
                                payload: null
                            })), i({
                                type: "goToChangeAccount"
                            })
                        }
                    }, "Zmie\u0144"))
                },
                _ = n("HbGN");
            E.a.createElement;
            var M = {
                    name: "70qvj9",
                    styles: "display:flex;align-items:center;"
                },
                D = {
                    name: "ece9u5",
                    styles: "min-width:120px;"
                },
                F = {
                    name: "pkt9zc",
                    styles: "margin:0;padding:0;font-size:14px;margin-left:15px;"
                },
                B = function(e) {
                    var t = e.variant,
                        n = Object(_.a)(e, ["variant"]),
                        a = Object(S.b)(),
                        r = a.dispatch,
                        c = a.currentStep;
                    return Object(N.b)("div", Object(A.a)({
                        css: M
                    }, n), Object(N.b)(T.Button, {
                        style: {
                            height: 30
                        },
                        onClick: function() {
                            "PROCESSES" === c && (r({
                                type: "resetSelectedProcess"
                            }), r({
                                type: "setCurrentSingleOffer",
                                payload: null
                            })), "OFFERS" === c && (r({
                                type: "resetSelectedOffer"
                            }), r({
                                type: "resetSelectedProcess"
                            }), r({
                                type: "setCurrentSingleOffer",
                                payload: null
                            })), r({
                                type: "setAuhtorizationType",
                                payload: "EMAIL"
                            }), r({
                                type: "goToLogin"
                            })
                        },
                        size: "SMALL",
                        variant: t,
                        css: D
                    }, "Zaloguj si\u0119"), Object(N.b)("p", {
                        css: F
                    }, Object(N.b)("strong", null, "aby zobaczy\u0107 co mo\u017cesz otrzymywa\u0107")))
                },
                V = n("Q1tT"),
                U = (E.a.createElement, function(e) {
                    var t = Object(R.b)().isInApp,
                        n = Object(S.b)(),
                        a = n.isUserLogged,
                        r = n.isB2B,
                        c = Object(V.c)().loggedCustomerPath;
                    return t || !t && c && !r ? a ? Object(N.b)(L, e) : Object(N.b)(B, e) : null
                }),
                H = (E.a.createElement, E.a.memo((function() {
                    var e, t, n = Object(T.useTheme)().bp,
                        a = Object(S.b)().isB2B,
                        r = Object(T.useLayer)().level > 0;
                    return Object(N.b)("div", null, Object(N.b)("h2", {
                        css: Object(h.a)((e = {}, Object(y.a)(e, n.ONLY_MOBILE, {
                            padding: 20,
                            paddingTop: 10
                        }), Object(y.a)(e, n.FROM_TABLET, {
                            padding: 20
                        }), Object(y.a)(e, n.FROM_DESKTOP, {
                            display: a || r ? void 0 : "none"
                        }), Object(y.a)(e, "@media (min-width: 1240px)", {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), ""),
                        dangerouslySetInnerHTML: {
                            __html: "Wybierz, co <br /> Ci\u0119 interesuje"
                        }
                    }), Object(N.b)(U, {
                        css: Object(h.a)((t = {
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
            var G = n("LsVC"),
                W = (E.a.createElement, E.a.createContext(null)),
                K = function(e) {
                    var t = E.a.useState(null),
                        n = Object(C.a)(t, 2),
                        a = n[0],
                        r = n[1];
                    return Object(N.b)(W.Provider, Object(A.a)({
                        value: {
                            hoveredOfferType: a,
                            setHovered: r
                        }
                    }, e))
                },
                q = function() {
                    var e = E.a.useContext(W);
                    if (null === e) throw Error("useOffersStepContext: Please provide OffersStepProvider value.");
                    return e
                },
                Y = n("XWgT"),
                X = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.currentUpsellOffer,
                        n = Object(T.useTheme)(),
                        a = n.colors,
                        r = n.bp,
                        c = Object(S.b)().dispatch,
                        o = t.offer.iconList,
                        i = E.a.useCallback((function() {
                            t && (c({
                                type: "setCurrentUpsellOffer",
                                payload: t
                            }), c({
                                type: "goToUpsell"
                            }))
                        }), [c, t]),
                        s = E.a.useCallback((function(e) {
                            "Enter" === e.key && i()
                        }), [i]);
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)("div", {
                        css: Object(h.a)({
                            backgroundColor: a.BLACK,
                            border: "thin solid ".concat(a.BLACK),
                            width: 20,
                            height: 20,
                            position: "absolute",
                            left: "50%",
                            transform: "rotate(45deg) translateX(-50%)"
                        }, "")
                    }), Object(N.b)(T.ActionListItem, {
                        title: t.offer.title,
                        description: t.offer.description,
                        iconList: o,
                        hasBadge: !1,
                        badgeText: "Oferta dla Ciebie",
                        id: Object(G.a)(t.offer.type, "sufler_button_enhance"),
                        onClick: i,
                        onKeyPress: s,
                        titleCss: {
                            color: a.ORANGE_DARK
                        },
                        css: Object(h.a)(Object(y.a)({
                            backgroundColor: a.BLACK,
                            color: a.WHITE,
                            margin: "0 -20px",
                            padding: "20px",
                            position: "relative",
                            top: "-1px"
                        }, r.ONLY_SMALL_MOBILE, {
                            paddingLeft: 20
                        }), "")
                    }))
                }))),
                Z = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.offer,
                        n = Object(T.useTheme)().colors,
                        a = Object(S.b)(),
                        r = a.dispatch,
                        c = a.contracts,
                        o = a.enhance,
                        i = Object(R.b)(),
                        s = i.market,
                        l = i.isMaintenance,
                        u = Object(V.c)().skipRedirectUrl,
                        b = {
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
                        p = null === o || void 0 === o ? void 0 : o.config.find((function(e) {
                            return e.offer.type === t.type
                        })),
                        d = E.a.useMemo((function() {
                            return c && c.find((function(e) {
                                return e.offerType === t.type
                            }))
                        }), [c, t.type]),
                        f = q().setHovered,
                        O = E.a.useCallback((function() {
                            if (Object(Y.a)(t.type)) r({
                                type: "selectOffersGroup",
                                payload: t.id
                            });
                            else {
                                if (t.redirectUrl) return u ? void r({
                                    type: "selectOffer",
                                    payload: t.type
                                }) : void window.location.assign(t.redirectUrl);
                                var e = s in b && b[s][t.type] || null;
                                e ? window.location.href = e : r(l ? {
                                    type: "goToMaintenance"
                                } : {
                                    type: "selectOffer",
                                    payload: t.type
                                })
                            }
                        }), [t.type, t.redirectUrl, t.id, s, b, l, r, u]),
                        m = E.a.useCallback((function(e) {
                            "Enter" === e.key && O()
                        }), [O]),
                        j = t.iconType;
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)(T.ActionListItem, {
                        title: t.name,
                        description: t.description,
                        icon: j || "sim-1",
                        hasBadge: !!d,
                        badgeText: "Oferta dla Ciebie",
                        id: Object(G.a)(t.type, "sufler_button"),
                        onClick: O,
                        onMouseEnter: function() {
                            f(t.type)
                        },
                        onMouseLeave: function() {
                            f(null)
                        },
                        onKeyPress: m,
                        titleCss: {
                            color: n.ORANGE_DARK
                        }
                    }), p && p.offer.showBanner && Object(N.b)(X, {
                        currentUpsellOffer: p
                    }))
                })));
            Z.displayName = "Offer";
            E.a.createElement;
            var J = {
                    name: "14ouvi7",
                    styles: "width:100%;max-width:400px;display:flex;flex-direction:column;"
                },
                Q = E.a.memo((function() {
                    var e, t, n = Object(S.b)(),
                        a = n.offers,
                        r = n.isB2B,
                        c = Object(T.useLayer)().level > 0,
                        o = Object(T.useTheme)().bp;
                    return Object(N.b)("div", {
                        css: J
                    }, Object(N.b)("h2", {
                        css: Object(h.a)((e = {}, Object(y.a)(e, o.TO_DESKTOP, {
                            display: "none"
                        }), Object(y.a)(e, o.FROM_DESKTOP, {
                            display: r || c ? "none" : void 0,
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
                    }), Object(N.b)(U, {
                        css: Object(h.a)(Object(y.a)({
                            margin: "2px 0"
                        }, o.TO_DESKTOP, {
                            display: "none"
                        }), "")
                    }), Object(N.b)("ul", {
                        css: Object(h.a)((t = {
                            width: "100%",
                            padding: "0 20px"
                        }, Object(y.a)(t, o.FROM_TABLET, {
                            padding: "0 0 20px 20px",
                            maxWidth: 400
                        }), Object(y.a)(t, o.FROM_DESKTOP, {
                            padding: 0
                        }), t), "")
                    }, a.map((function(e) {
                        return Object(N.b)(Z, {
                            key: e.id,
                            offer: e
                        })
                    }))))
                }));
            Q.displayName = "Main";
            E.a.createElement;
            var $ = function(e) {
                    var t = e.hoveredOfferType,
                        n = Object(_.a)(e, ["hoveredOfferType"]),
                        a = Object(T.useTheme)().colors;
                    return Object(N.b)("svg", Object(A.a)({
                        viewBox: "0 0 686 1024",
                        xmlSpace: "preserve"
                    }, n, {
                        css: Object(h.a)([{
                            height: "100%",
                            path: {
                                transition: "fill 0.25s"
                            }
                        }, t && Object(y.a)({}, ".".concat(t), {
                            ".front": {
                                fill: a.ORANGE_LIGHT
                            },
                            ".back": {
                                fill: a.BLACK
                            },
                            ".icon": {
                                fill: a.WHITE
                            }
                        })], "")
                    }), Object(N.b)("path", {
                        fill: "#44BBE6",
                        d: "M680.1,162.6c-0.2-1.8-5.2-4.2-10-4.6c-4.9-0.4-10,6.1-12.4,5.8s-10-7.2-15.6-8.7c-5.6-1.4-15.1,1.4-16,1.4 s-7.7-10.3-11.5-13.2c-3.9-2.9-9-7.5-22.4-7.6c-16.6-0.1-28.3,16.1-29.5,16.1s-14.1-2.9-20.2-2.2s-14.6,8.7-15.6,9 c-1,0.4-13.1-3.3-17.5-3.6c-4.4-0.4-14.3,2.5-16.8,2.5c-2.4,0-4.9-2.2-4.9-2.2c0-7.6,12.6-14.5,20.4-14.5s14.6,1.1,14.6,1.1 s6.1-10.8,14.1-14.8s18-4,18-4s6.3-24.6,28-24.9c15.3-0.3,26,12.9,30.9,20.6c31-35.5,61.7-69.9,61.7-119h-334h-6H1.4 c0,69,60.6,109,97.7,164c8.5,6.5,11.1,16.2,12.4,18.5c1.5,2.8,9.8-2.8,22.8,6.5c12.9,9.2,11.4,14.5,11.4,14.5s8.6-1.5,13.5,0 s9.2,6.5,9.2,6.5s21.5,0.3,22.5,8.6v1.2c0-0.1,0-0.1,0-0.2c-1.3-0.3-2.7-0.4-4-0.4c-5.2,0-12,4.3-13.2,4s-13.8-7.1-21.2-7.1 s-14.1,4-16.3,3.7s-8.9-14.5-36.3-15.4C84,203.7,69,217.1,69,217.1s-27.2-4.5-27.2,9c0,6.4,24.1,7.4,24.1,7.4s14.2,1.1,33.2,2.8 c8.4,0.8,18.7-0.3,28.2-1.8c7.9,49.4-7.6,78.2,32.9,141c30.7,47.6,61.5,51.5,89,88.8c30.8,41.8,58.2,78.7,87.1,78.7h4.3 c28.9,0,56.2-36.9,87.1-78.7c27.5-37.3,58.3-41.1,89-88.8c2-3.1,3.9-6.2,5.6-9.1c6.3-1.1,12.4-2.8,14.2-2.8c2.5,0,8.6-0.6,11.3-1.1 s17.7-1.9,17.4-8.6c-4-0.3-6.1,3.2-7,3.2c-0.8,0-1.7-0.6-3.7-1c-2.1-0.4-6,1.2-6.8,1.2s-3.3-1.9-6.6-1.9s-7.3,3.1-9.1,3.1 c-1.9,0-4.4-6.6-19.5-6.6s-24.9,7-26.5,7.5c-1.7,0.4-7.5-1.7-11.2-1.7s-12,3.3-14.5,3.5s-6.4-2.5-8.5-2.7c-0.2,0-0.4,0-0.6,0 c1-1.8,3-3,8.6-5.5c6.9-3,13-1.9,13-1.9s3.9-5.3,11.6-8.6s13,0,15.5-2.2s9.4-5.2,19.6-5.2c6.2,0,11.8,3.4,15.6,6.1 c20.1-48.6,4.3-76.5,19.9-130.2c4-13.9,10.1-26.6,17.4-38.6c2.7,0.3,5.2,0.5,7.3,0.5c9.2,0,27.7-4.7,35.7-4.7s26.3,5.1,41.3,4.3 c12.6-0.6,21-5.3,23.5-9.3C680.1,162.9,680.1,162.7,680.1,162.6L680.1,162.6z M450.8,359.1c0.1-0.2,0.2-0.4,0.3-0.6 C451,358.7,450.9,358.9,450.8,359.1z M450.5,359.9c0.1-0.2,0.1-0.4,0.2-0.6C450.7,359.4,450.6,359.6,450.5,359.9z"
                    }), Object(N.b)("g", {
                        className: "SIMFREE_INST"
                    }, Object(N.b)("path", {
                        fill: "#FEFEFE",
                        className: "front",
                        d: "M318.1,212.6c5.5,0.8,9,6,7.9,11.7l-15.4,81.9c-1.1,5.7-6.4,9.7-11.8,8.9l-78.6-11c-5.5-0.8-9-6-7.9-11.7 l15.4-81.9c1.1-5.7,6.4-9.6,11.8-8.9L318.1,212.6z"
                    }), Object(N.b)("path", {
                        className: "icon",
                        d: "M292.2,255.4c-8-1.1-16.1-2.2-24.1-3.3c-1.3-0.2-2.2,0.4-2.6,1.9c-1.1,6-2.2,11.9-3.3,18c0,0.1,0,0.2-0.1,0.4 c9.5,1.3,18.9,2.7,28.3,4c0-0.1,0-0.2,0.1-0.4c1.1-6,2.2-12,3.3-18.1C294.1,256.5,293.4,255.6,292.2,255.4z M288.8,274 c-8.1-1.1-16.3-2.3-24.4-3.5c1-5.6,2.1-11,3.1-16.6c8.1,1.1,16.3,2.3,24.4,3.5C290.9,262.9,289.8,268.4,288.8,274z M292.1,277.6 c-0.1,0.8-0.2,1.5-0.4,2.1c-0.1,0.4-0.6,0.7-1,0.7c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0c-9.8-1.3-19.7-2.8-29.6-4.1 c-1-0.1-1.2-0.4-1-1.5c0.1-0.6,0.2-1,0.3-1.6l13.2,1.9c0,0.8,0.4,1,1.1,1.1h0.1c0.4,0,0.9,0.1,1.3,0.2c0.6,0.1,1.1,0.2,1.8,0.2 c0.8,0.1,1,0,1.5-0.8L292.1,277.6z M246.9,236.2c-1.6,8.4-3.1,16.7-4.7,25c1.8,0.2,3.5,0.4,5.2,0.8c-0.2,1-0.3,1.9-0.6,2.8 c-0.1,0.3,0,0.4,0.3,0.6c1.6,0.2,3.1,0.4,4.7,0.7c3.1,0.4,6.1,0.9,9.3,1.3h0.3c0.3-1.9,0.7-3.7,1-5.5c-5.9-0.8-11.8-1.7-17.7-2.5 c1.3-6.9,2.6-13.7,3.9-20.6c10.5,1.5,21,2.9,31.3,4.5c-0.6,2.9-1.1,5.8-1.7,8.7l2,0.3c0.7-3.6,1.3-7.3,2-10.8 C270.5,239.5,258.7,237.8,246.9,236.2L246.9,236.2z M260,263.2c0.6,0.1,0.9,0.7,0.8,1.2s-0.7,1-1.2,0.9c-0.6-0.1-0.9-0.7-0.8-1.2 S259.5,263.2,260,263.2z M266,269c-0.3-0.1-0.3-0.3-0.2-0.6c0-0.1,0.1-0.3,0.1-0.4h0.2c0.8,0.1,1.5,1.1,1.2,2.1c-0.1,0-0.2,0-0.3,0 h-0.1h-0.1c-0.2,0-0.3-0.1-0.3-0.4C266.3,269.3,266.2,269,266,269L266,269z M267,266.1c1.6,0.6,2.6,2.3,2.2,4.2 c-0.3,0-0.6-0.1-0.9-0.1c0.1-1.8-0.7-2.9-2.3-3.3v-0.1c0.1-0.6,0.1-0.8,0.3-0.8C266.5,265.8,266.7,266,267,266.1L267,266.1z M270.2,270.4c-0.1-3.3-1-4.7-3.8-5.6c0-0.2,0.1-0.6,0.1-0.9h0.3c2.6,0.3,4.9,3.3,4.1,6.6C270.8,270.4,270.5,270.4,270.2,270.4z"
                    }), Object(N.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M316.2,210.8c-1-0.7-2.2-1.1-3.6-1.2l-78.6-11c-5.5-0.8-10.7,3.2-11.8,8.9l-15.4,81.9c-0.8,4.4,1,8.4,4.4,10.4 l5.4,3.2c-3.3-2-5.2-6.1-4.4-10.4l15.4-81.9c1.1-5.7,6.4-9.6,11.8-8.9l78.6,11c1.3,0.2,2.5,0.7,3.6,1.2L316.2,210.8z"
                    })), Object(N.b)("g", {
                        className: "FIX1P DATA INTERNET_GROUP"
                    }, Object(N.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M471.3,46c4.9,1.1,7.8,6,6.3,11l-20.8,72.6c-1.4,5-6.6,8.3-11.5,7.2l-71.2-15.1c-4.9-1-7.8-6-6.3-11l20.8-72.6 c1.4-5,6.6-8.3,11.5-7.2L471.3,46z"
                    })), Object(N.b)("g", {
                        className: "CONVERGENT4U"
                    }, Object(N.b)("path", {
                        className: "front",
                        fill: "#F9F9F9",
                        d: "M442.7,166.2c5.7-1.4,11.3,2.2,12.7,8.1l19.1,84.3c1.3,5.9-2.2,11.7-7.9,13.2L385,292.1 c-5.7,1.4-11.3-2.2-12.7-8.1l-19.1-84.3c-1.3-5.9,2.2-11.7,7.9-13.2L442.7,166.2z"
                    }), Object(N.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M480.5,258.9l-19.1-84.3c-0.1-0.5-1.3-3.7-2.8-5.1c-2.7-2.5-6-3-6.4-3.1l-6-0.4c0.4,0,0.7,0.1,1.1,0.2 c0.1,0,0.2,0,0.3,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.3,0.1,0.7,0.3,1,0.4c0.1,0,0.2,0.1,0.3,0.1c0.3,0.2,0.6,0.3,0.9,0.5 c0.3,0.2,0.6,0.4,0.9,0.6c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.2,0.5,0.5,0.8,0.7c0,0,0,0,0.1,0.1c0.3,0.3,0.6,0.7,0.9,1 c0,0.1,0.1,0.1,0.1,0.2c0.3,0.4,0.5,0.7,0.7,1.1c0,0.1,0.1,0.1,0.1,0.2c0.2,0.4,0.4,0.8,0.6,1.2c0,0.1,0,0.1,0.1,0.2 c0.2,0.5,0.3,0.9,0.4,1.3l19.1,84.3c1.3,5.9-2.2,11.7-7.9,13.2L385,292c-1.2,0.3-2.4,0.4-3.6,0.3l6,0.4c1.2,0.1,2.3,0,3.6-0.3 l81.6-20.4C478.3,270.7,481.8,264.8,480.5,258.9L480.5,258.9z"
                    }), Object(N.b)("path", {
                        className: "icon",
                        d: "M412.1,220.3l-12.4,3.1l2.9,12.8l12.4-3.1L412.1,220.3z M405.1,232.1l-1.4-6.2l6-1.5l1.4,6.2L405.1,232.1z M388.5,221.1 l3.3,14.4l8.4-2.1l0.7,3.3l-12.1,3l-3.9-17.7L388.5,221.1z M412.9,243.3l-1.1-4.7l-1.5-1l-2.2,0.6c-0.2,0.1-0.3,0.3-0.3,0.5l1.2,5.7 c0,0.2,0.3,0.3,0.5,0.3l3.1-0.8C412.8,243.7,412.9,243.5,412.9,243.3z M412.2,242.3l-1,0.2l-0.2-1l1-0.2L412.2,242.3z M411.6,240.3 c0.1,0,0.2,0,0.2,0.1l0.2,0.8l-1,0.2l-0.2-1L411.6,240.3z M408.7,241.2c0-0.1,0-0.2,0.1-0.2l0.8-0.2l0.2,1l-1,0.2L408.7,241.2z M408.9,242.1l1.1-0.3l-0.3-1.2l1-0.2l0.5,2.1l-2,0.5L408.9,242.1z M409.6,244.1c-0.1,0-0.2,0-0.2-0.1l-0.2-0.8l0.9-0.2l0.2,1 L409.6,244.1z M410.5,243.9l-0.2-1l1-0.2l0.2,1L410.5,243.9z M412.5,243.2c0,0.1,0,0.2-0.1,0.2l-0.7,0.2l-0.2-1l1-0.2L412.5,243.2z M425.8,216.8l-1.2,13.8l-3.8,1l-7.1-11.7l3.6-0.9l4.6,8.1l0.7-9.4L425.8,216.8z M424.1,234.3c0.6-0.2,0.6-0.1,0.7,0.7 c0.1,0.9,0.1,1-0.5,1.1c-0.1,0.1-0.2,0.1-0.3,0.1c-0.4,0-0.3,0.9-0.1,1.5c0.2,0.7,0.5,1.4,0.8,1.3c0.1-0.1,0.2-0.1,0.3-0.1 c0.6-0.1,0.6,0,0.9,0.8c0.3,0.9,0.2,0.8-0.9,1.1c-0.5,0.1-1.4-1-1.9-2.9s-0.1-3.3,0.5-3.5C423.7,234.3,423.9,234.2,424.1,234.3z M436.7,223.6c0,0.5-0.3,1-0.8,1.4s-1,0.8-1.6,0.9c-1.1,0.3-1.8,0.2-2.4-0.3c-0.6-0.5-1.1-1.2-1.3-2.2l8.9-2.2 c0-0.3-0.1-0.5-0.1-0.7c-0.3-1.4-0.9-2.6-1.6-3.5c-0.8-1-1.6-1.5-2.7-1.9c-1.1-0.3-2.1-0.4-3.4-0.1c-1.2,0.3-2.1,0.8-2.9,1.6 c-0.9,0.8-1.4,1.7-1.8,3c-0.3,1.2-0.4,2.5-0.1,3.7c0.3,1.4,0.9,2.5,1.7,3.5c0.8,0.9,1.7,1.5,2.8,1.7c1.1,0.3,2.2,0.2,3.4,0 c3-0.8,4.6-2.7,4.8-5.8L436.7,223.6z M430.4,219c0.4-0.6,1-1.1,1.8-1.2c0.8-0.2,1.4-0.1,2,0.2c0.6,0.3,1,1,1.3,1.8l-5.6,1.3 C430,220.3,430.1,219.5,430.4,219L430.4,219z M441,235.9l-1.2-5.6l-8.7,2.2l1.2,5.6l1.5-0.4l0.2,0.9l5.7-1.4l-0.2-0.9L441,235.9z M432.7,237.2l-1-4.2l7.5-1.9l1,4.2L432.7,237.2z M436.7,237.3c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.1-0.4,0.3-0.4s0.4,0.1,0.4,0.3 C437,237.1,436.9,237.3,436.7,237.3z M400.2,245l-0.9-4c-0.1-0.3-0.3-0.5-0.6-0.4l-6.4,1.6c-0.3,0.1-0.5,0.4-0.4,0.7l1,4.1l0.2,0.8 l7.4-1.8L400.2,245z M393.4,247l-1-4.3l6.4-1.6l1,4.3L393.4,247z M397.5,246.8l3.5-0.9c0,0,0.1,0.4,0.1,0.5s-0.1,0.3-0.2,0.3l-7.9,2 c-0.1,0-0.3-0.1-0.3-0.2s-0.1-0.5-0.1-0.5l3.5-0.9c0,0.1,0.2,0.2,0.3,0.2l1-0.3C397.4,247,397.5,246.9,397.5,246.8L397.5,246.8z M393.3,245.6c0.6-0.1,1.2,0.2,1.2,0.8l-0.3,0.1c-0.1-0.4-0.5-0.7-1-0.6V245.6z M394.8,246.3c-0.2-0.7-0.9-1.2-1.5-1l-0.1-0.3 c0.9-0.2,1.6,0.3,1.8,1.2L394.8,246.3z M393.5,246.4l-0.1-0.3c0.3-0.1,0.6,0.1,0.6,0.4l-0.3,0.1 C393.8,246.4,393.7,246.4,393.5,246.4z"
                    })), Object(N.b)("g", {
                        className: "FIX1P FIX3P DATA INTERNET_GROUP"
                    }, Object(N.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M480,52.8l-4.4-4.4c2.1,2.1,3,5.4,2.1,8.7l-20.8,72.6c-1.4,5-6.6,8.3-11.5,7.2l-71.2-15.1 c-1.7-0.4-3.1-1.2-4.2-2.3l4.4,4.4c1.1,1.1,2.6,1.9,4.2,2.3l71.2,15.1c4.9,1.1,10.1-2.2,11.5-7.2l20.8-72.6c0.6-2.1,0.5-4.1-0.3-5.9 C481.5,54.8,480.8,53.6,480,52.8z"
                    }), Object(N.b)("path", {
                        className: "icon",
                        d: "M444.4,71.5l-34.1-7.2c-1.4-0.3-3,0.6-3.4,2.1l-6.1,21.4l-1.1,4l39.3,8.4l1.2-4.1l6.1-21.3 C446.6,73.2,445.8,71.8,444.4,71.5z M437.1,96.8L403,89.6l6.5-22.7l34.1,7.2L437.1,96.8z M422.9,98.1l18.3,3.9c0,0.1-0.6,2-0.8,2.7 s-1,1.2-1.7,1.1l-41.9-9c-0.7-0.2-1.1-0.9-0.9-1.6c0.2-0.6,0.7-2.6,0.8-2.7l18.3,3.9c-0.2,0.7,0.2,1.5,0.9,1.6l5.2,1.1 C421.9,99.3,422.7,98.8,422.9,98.1L422.9,98.1z M406,88.8c0.2-0.8-0.2-1.5-0.9-1.6l0.4-1.3c1.4,0.3,2.3,1.8,1.9,3.2L406,88.8z M408.7,89.4c0.6-2.1-0.3-4.3-2.8-4.9l0.4-1.3c2.9,0.6,4.6,3.5,3.7,6.5L408.7,89.4z M411.3,89.9c1-3.5-1.2-7.4-4.7-8.1l0.4-1.3 c4.3,0.9,6.8,5.3,5.6,9.7L411.3,89.9z"
                    })), Object(N.b)("g", {
                        className: "VOICE"
                    }, Object(N.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M254.7,39.3c5.6-1.2,12.3,2.4,15.1,8.2l39.2,83.7c2.7,5.8,0.4,11.6-5.2,12.8l-80.5,18.6 c-5.6,1.2-12.3-2.4-15.1-8.2L169,70.6c-2.7-5.8-0.4-11.6,5.2-12.8L254.7,39.3z"
                    }), Object(N.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M303.9,143.9l-80.6,18.6c-5.6,1.2-12.3-2.4-15.1-8.2l-39.3-83.8c-1.8-3.8-1.3-7.6,0.7-10.1l-5.1,6.1 c-2.1,2.5-2.5,6.3-0.7,10.1l39.3,83.8c2.7,5.8,9.5,9.5,15.1,8.2l80.6-18.6c1.9-0.4,3.4-1.3,4.5-2.7l5.1-6.1 C307.3,142.6,305.8,143.5,303.9,143.9z"
                    }), Object(N.b)("path", {
                        className: "icon",
                        fill: "#231F20",
                        d: "M233.8,75.9l14,7.6l16.4,35.1c0.7,1.6,0.1,3-1.4,3.5l-23,5.3c-1.5,0.3-3.2-0.6-4-2.2l-19.8-42.1 c-0.7-1.6-0.1-3.1,1.4-3.5L233.8,75.9z M249.5,112.7l-7.2-15.5l-6.8,1.6l4,8.5l-8.2,1.9l3.2,7L249.5,112.7z M253.7,102.5l-2.6-5.6 c-0.3-0.7-1.3-1.3-2-1l-5.4,1.3l3.2,7L253.7,102.5z M228.1,102.2l2.6,5.6l6.8-1.6l-3.2-7l-5.4,1.2 C228.1,100.6,227.8,101.3,228.1,102.2 M260.9,117.8l-2.6-5.6l-6.8,1.6l3.2,7l5.4-1.3C261,119.4,261.4,118.7,260.9,117.8 M245.3,123.1l-3.2-7l-6.8,1.6l2.6,5.6c0.3,0.7,1.3,1.3,2,1L245.3,123.1z M257.7,110.8l-3.2-7l-6.8,1.6l3.2,7L257.7,110.8z M253.5,121.2l-3.2-7l-6.8,1.6l3.2,7L253.5,121.2z"
                    })), Object(N.b)("path", {
                        d: "M432,497.8c-9.3-13.4-24.5-17.8-31.2-30.8c-4.4-8.4-4.8-32-4.6-47.6c3.6-8,5.6-16.8,5.6-26.1c0-35-28.4-63.3-63.3-63.3 c-35,0-63.3,28.4-63.3,63.3c0,2.8,0.2,5.6,0.6,8.3l-0.1,0.1c0,0,3.8,26.8-5.8,45.2c-12.3,23.4-28.7,25.6-34.2,40.7 c-3.5,9.5-2.4,34.1,15.5,48.8s33.3,9.5,56,6.7c22.6-2.8,38.5-1.6,50.8,3.2s24,17.9,36.1,17.9c11.9,0,26.6,1.2,37.3-12.2 C447,532.1,441.1,510.9,432,497.8L432,497.8z"
                    }), Object(N.b)("path", {
                        fill: "#F4CFB2",
                        d: "M422.8,815.6l-18.4-7.3l35.3-120.9L421,599.6l35.3-6.6l21.9,89.9c0.4,2.1,0.5,4.2,0,6.3 c-0.2,1.1-0.6,2.2-1.1,3.3L422.8,815.6z"
                    }), Object(N.b)("path", {
                        fill: "#F4CFB2",
                        d: "M254.3,815.6l18.4-7.3l-35.3-120.9l18.7-87.8l-35.3-6.6L199,682.9c-0.4,2.1-0.5,4.2,0,6.3 c0.2,1.1,0.6,2.2,1.1,3.3L254.3,815.6z"
                    }), Object(N.b)("path", {
                        fill: "#F16E00",
                        d: "M475.4,649l-7.5-26.9c0,0-3.4-13.1-8-28.2c-5-16.6-11.5-35.8-21.2-43c-16.4-12.2-62.8-18.6-100.1-19.1 c-37.4,0.5-83.7,6.9-100.1,19.1c-9.7,7.2-16.2,26.4-21.2,43c-4.6,15.2-8,28.2-8,28.2l-7.5,26.9l45.8,13.7l7.1-29.7l11.4,98.2h144.7 l12.1-96.4l6.7,27.9L475.4,649z"
                    }), Object(N.b)("path", {
                        fill: "#0A5EBD",
                        d: "M410.7,731.2H266.1c0,0-21.3,47.7-21.3,83.7c0,50.5,16.4,210.5,16.4,210.5h53.6L339,832.3l21.3,193.2h55.4 c0,0,16.4-159.9,16.4-210.5C432.1,778.9,410.7,731.2,410.7,731.2z"
                    }), Object(N.b)("path", {
                        fill: "#F4CFB2",
                        d: "M367.5,533.2l-5.4-47.3h-47.3l-5.4,47.3l-10,1c0,0,21.8,56.9,39,56.9c17.3,0,39.1-56.9,39.1-56.9L367.5,533.2z"
                    }), Object(N.b)("path", {
                        fill: "#C19372",
                        d: "M309.4,533.2l5.4-47.3h47.3l1,13.2L309.4,533.2z"
                    }), Object(N.b)("path", {
                        fill: "#F4CFB2",
                        d: "M412.5,434.7c0,7.9-6.4,14.3-14.3,14.3c-0.7,0-1.3-0.1-1.9-0.1c-6.3,37.5-29.8,55.6-57.8,55.6 c-27.9,0-51.2-18.8-57.7-55.5h-0.1c-7.9,0-14.3-6.4-14.3-14.3c0-7.4,5.6-13.5,12.9-14.2c2.2-39,22.5-69.5,59.2-69.5 c35.7,0,56.9,30.5,59.2,69.4h0.5C406.1,420.5,412.5,426.9,412.5,434.7L412.5,434.7z"
                    }), Object(N.b)("path", {
                        fill: "#C19372",
                        d: "M349.3,430.2c0,0-3,7.9-10.9,7.9c-8.1,0-10.9-7.9-10.9-7.9s3.5,4.2,10.9,4.2 C345.5,434.4,349.3,430.2,349.3,430.2z"
                    }), Object(N.b)("path", {
                        fill: "#FF7902",
                        d: "M400.1,444.3l6.1,6.1l-6.1,6.1l-6.1-6.1L400.1,444.3z"
                    }), Object(N.b)("path", {
                        fill: "#FF7902",
                        d: "M277.6,444.3l6.1,6.1l-6.1,6.1l-6.1-6.1L277.6,444.3z"
                    }), Object(N.b)("path", {
                        d: "M368.1,406.5c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6S368.1,403.2,368.1,406.5z M314.8,400.5c-3.3,0-6,2.7-6,6s2.7,6,6,6 s6-2.7,6-6S318.1,400.5,314.8,400.5z M338.5,451.1c-13.8,0-25.6-6.2-25.6-6.2s2.4,6.6,9.1,11.9c4.1,3.2,9.5,5.9,16.5,5.9 c6,0,11.3-2.7,15.5-6c6.8-5.3,10-11.6,10-11.6S353,451.1,338.5,451.1L338.5,451.1z M319.2,391.1c-0.2,0-4.5-0.2-10.1,2.2 c-6.2,2.7-8.6,5.9-8.7,6.1c-0.5,0.7-0.4,1.6,0.3,2.1c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6c0,0,2.2-2.8,7.5-5.1 c4.9-2.1,8.7-2,8.8-2c0.8,0,1.5-0.6,1.6-1.4C320.6,391.9,320,391.2,319.2,391.1L319.2,391.1z M397.5,417.3c0,0-3.1-8.2-6.1-10.6 c-4.8-3.8-9.4-6-14.4-7.9c0.3,0.3,0.4,0.5,0.4,0.5c0.5,0.7,0.4,1.6-0.3,2.1c-0.3,0.2-0.6,0.3-0.9,0.3c-0.5,0-0.9-0.2-1.2-0.6 c0,0-2.1-2.8-7.5-5.1c-5-2.2-8.7-2-8.8-2c-0.8,0-1.5-0.6-1.6-1.4c0-0.4,0.1-0.7,0.3-1c-1.4-0.6-2.9-1.3-4.4-2 c-17-8.1-24.1-27.6-24.1-27.6s0,10.4-12.8,19s-19.5,7-26.8,14.3c-7.7,7.7-9.8,21.9-9.8,21.9s-5.7-76.9,59-76.9 S397.5,417.3,397.5,417.3L397.5,417.3z"
                    }), Object(N.b)("path", {
                        fill: "#FFFFFF",
                        d: "M312.3,444.4c0.4,1,3.4,7.3,9.4,12.3c0.8,0.6,7.9,1.8,16.8,1.8c8.5,0,14.8-1.2,15.6-1.8 c6.7-5.3,10.7-12.2,10.7-12.2s-11.8,5.8-26.4,5.8C325.2,450.2,313.2,444.7,312.3,444.4L312.3,444.4z"
                    }))
                },
                ee = (E.a.createElement, function(e) {
                    var t = e.hoveredOfferType,
                        n = Object(_.a)(e, ["hoveredOfferType"]),
                        a = Object(T.useTheme)().colors;
                    return Object(N.b)("svg", Object(A.a)({
                        viewBox: "0 0 686 698",
                        xmlSpace: "preserve"
                    }, n, {
                        css: Object(h.a)([{
                            height: "100%",
                            position: "relative",
                            path: {
                                transition: "fill 0.25s"
                            }
                        }, t && Object(y.a)({}, ".".concat(t), {
                            ".front": {
                                fill: a.ORANGE_LIGHT
                            },
                            ".back": {
                                fill: a.BLACK
                            },
                            ".icon": {
                                fill: a.WHITE
                            }
                        })], "")
                    }), Object(N.b)("path", {
                        fill: "#44BBE6",
                        d: "M681.8,162.8c-0.2-1.8-5.2-4.2-10-4.6c-4.9-0.4-10,6.1-12.4,5.8s-10-7.2-15.6-8.7c-5.6-1.4-15.1,1.4-16,1.4 s-7.7-10.3-11.5-13.2c-3.9-2.9-9-7.5-22.4-7.6c-16.6-0.1-28.3,16.1-29.5,16.1s-14.1-2.9-20.2-2.2s-14.6,8.7-15.6,9 c-1,0.4-13.1-3.3-17.5-3.6c-4.4-0.4-14.3,2.5-16.8,2.5c-2.4,0-4.9-2.2-4.9-2.2c0-7.6,12.6-14.5,20.4-14.5s14.6,1.1,14.6,1.1 s6.1-10.8,14.1-14.8s18-4,18-4s6.3-24.6,28-24.9c15.3-0.3,26,12.9,30.9,20.6c31-35.5,61.7-69.9,61.7-119h-334h-6H3.1 c0,69,60.6,109,97.7,164c8.5,6.5,11.1,16.2,12.4,18.5c1.5,2.8,9.8-2.8,22.8,6.5c12.9,9.2,11.4,14.5,11.4,14.5s8.6-1.5,13.5,0 s9.2,6.5,9.2,6.5s21.5,0.3,22.5,8.6v1.2c0-0.1,0-0.1,0-0.2c-1.3-0.3-2.7-0.4-4-0.4c-5.2,0-12,4.3-13.2,4s-13.8-7.1-21.2-7.1 s-14.1,4-16.3,3.7s-8.9-14.5-36.3-15.4c-15.9-0.5-30.9,12.9-30.9,12.9s-27.2-4.5-27.2,9c0,6.4,24.1,7.4,24.1,7.4s14.2,1.1,33.2,2.8 c8.4,0.8,18.7-0.3,28.2-1.8c7.9,49.4-7.6,78.2,32.9,141c30.7,47.6,61.5,51.5,89,88.8c30.8,41.8,58.2,78.7,87.1,78.7h4.3 c28.9,0,56.2-36.9,87.1-78.7c27.5-37.3,58.3-41.1,89-88.8c2-3.1,3.9-6.2,5.6-9.1c6.3-1.1,12.4-2.8,14.2-2.8c2.5,0,8.6-0.6,11.3-1.1 s17.7-1.9,17.4-8.6c-4-0.3-6.1,3.2-7,3.2c-0.8,0-1.7-0.6-3.7-1c-2.1-0.4-6,1.2-6.8,1.2s-3.3-1.9-6.6-1.9s-7.3,3.1-9.1,3.1 c-1.9,0-4.4-6.6-19.5-6.6s-24.9,7-26.5,7.5c-1.7,0.4-7.5-1.7-11.2-1.7s-12,3.3-14.5,3.5s-6.4-2.5-8.5-2.7c-0.2,0-0.4,0-0.6,0 c1-1.8,3-3,8.6-5.5c6.9-3,13-1.9,13-1.9s3.9-5.3,11.6-8.6c7.7-3.3,13,0,15.5-2.2s9.4-5.2,19.6-5.2c6.2,0,11.8,3.4,15.6,6.1 c20.1-48.6,4.3-76.5,19.9-130.2c4-13.9,10.1-26.6,17.4-38.6c2.7,0.3,5.2,0.5,7.3,0.5c9.2,0,27.7-4.7,35.7-4.7s26.3,5.1,41.3,4.3 c12.6-0.6,21-5.3,23.5-9.3C681.8,163.1,681.8,162.9,681.8,162.8L681.8,162.8z M452.5,359.3c0.1-0.2,0.2-0.4,0.3-0.6 C452.7,358.9,452.6,359.1,452.5,359.3z M452.2,360.1c0.1-0.2,0.1-0.4,0.2-0.6C452.4,359.6,452.3,359.8,452.2,360.1z"
                    }), Object(N.b)("g", {
                        className: "SIMFREE_INST"
                    }, Object(N.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M319.8,212.8c5.5,0.8,9,6,7.9,11.7l-15.4,81.9c-1.1,5.7-6.4,9.7-11.8,8.9l-78.6-11c-5.5-0.8-9-6-7.9-11.7 l15.4-81.9c1.1-5.7,6.4-9.6,11.8-8.9L319.8,212.8z"
                    }), Object(N.b)("path", {
                        className: "icon",
                        d: "M293.9,255.6c-8-1.1-16.1-2.2-24.1-3.3c-1.3-0.2-2.2,0.4-2.6,1.9c-1.1,6-2.2,11.9-3.3,18c0,0.1,0,0.2-0.1,0.4 c9.5,1.3,18.9,2.7,28.3,4c0-0.1,0-0.2,0.1-0.4c1.1-6,2.2-12,3.3-18.1C295.8,256.7,295.1,255.8,293.9,255.6z M290.5,274.2 c-8.1-1.1-16.3-2.3-24.4-3.5c1-5.6,2.1-11,3.1-16.6c8.1,1.1,16.3,2.3,24.4,3.5C292.6,263.1,291.5,268.6,290.5,274.2z M293.8,277.8 c-0.1,0.8-0.2,1.5-0.4,2.1c-0.1,0.4-0.6,0.7-1,0.7c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0c-9.8-1.3-19.7-2.8-29.6-4.1 c-1-0.1-1.2-0.4-1-1.5c0.1-0.6,0.2-1,0.3-1.6l13.2,1.9c0,0.8,0.4,1,1.1,1.1h0.1c0.4,0,0.9,0.1,1.3,0.2c0.6,0.1,1.1,0.2,1.8,0.2 c0.8,0.1,1,0,1.5-0.8L293.8,277.8z M248.6,236.4c-1.6,8.4-3.1,16.7-4.7,25c1.8,0.2,3.5,0.4,5.2,0.8c-0.2,1-0.3,1.9-0.6,2.8 c-0.1,0.3,0,0.4,0.3,0.6c1.6,0.2,3.1,0.4,4.7,0.7c3.1,0.4,6.1,0.9,9.3,1.3h0.3c0.3-1.9,0.7-3.7,1-5.5c-5.9-0.8-11.8-1.7-17.7-2.5 c1.3-6.9,2.6-13.7,3.9-20.6c10.5,1.5,21,2.9,31.3,4.5c-0.6,2.9-1.1,5.8-1.7,8.7l2,0.3c0.7-3.6,1.3-7.3,2-10.8 C272.2,239.7,260.4,238,248.6,236.4L248.6,236.4z M261.7,263.4c0.6,0.1,0.9,0.7,0.8,1.2s-0.7,1-1.2,0.9s-0.9-0.7-0.8-1.2 S261.2,263.4,261.7,263.4z M267.7,269.2c-0.3-0.1-0.3-0.3-0.2-0.6c0-0.1,0.1-0.3,0.1-0.4h0.2c0.8,0.1,1.5,1.1,1.2,2.1 c-0.1,0-0.2,0-0.3,0h-0.1h-0.1c-0.2,0-0.3-0.1-0.3-0.4C268,269.5,267.9,269.2,267.7,269.2L267.7,269.2z M268.7,266.3 c1.6,0.6,2.6,2.3,2.2,4.2c-0.3,0-0.6-0.1-0.9-0.1c0.1-1.8-0.7-2.9-2.3-3.3v-0.1c0.1-0.6,0.1-0.8,0.3-0.8 C268.2,266,268.4,266.2,268.7,266.3L268.7,266.3z M271.9,270.6c-0.1-3.3-1-4.7-3.8-5.6c0-0.2,0.1-0.6,0.1-0.9h0.3 c2.6,0.3,4.9,3.3,4.1,6.6C272.5,270.6,272.2,270.6,271.9,270.6z"
                    }), Object(N.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M317.9,211c-1-0.7-2.2-1.1-3.6-1.2l-78.6-11c-5.5-0.8-10.7,3.2-11.8,8.9l-15.4,81.9c-0.8,4.4,1,8.4,4.4,10.4 l5.4,3.2c-3.3-2-5.2-6.1-4.4-10.4l15.4-81.9c1.1-5.7,6.4-9.6,11.8-8.9l78.6,11c1.3,0.2,2.5,0.7,3.6,1.2L317.9,211z"
                    })), Object(N.b)("g", {
                        className: "FIX1P FIX3P DATA INTERNET_GROUP"
                    }, Object(N.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M473,46.2c4.9,1.1,7.8,6,6.3,11l-20.8,72.6c-1.4,5-6.6,8.3-11.5,7.2l-71.2-15.1c-4.9-1-7.8-6-6.3-11l20.8-72.6 c1.4-5,6.6-8.3,11.5-7.2L473,46.2z"
                    })), Object(N.b)("g", {
                        className: "CONVERGENT4U"
                    }, Object(N.b)("path", {
                        className: "front",
                        fill: "#F9F9F9",
                        d: "M444.4,166.4c5.7-1.4,11.3,2.2,12.7,8.1l19.1,84.3c1.3,5.9-2.2,11.7-7.9,13.2l-81.6,20.4 c-5.7,1.4-11.3-2.2-12.7-8.1l-19.1-84.3c-1.3-5.9,2.2-11.7,7.9-13.2L444.4,166.4z"
                    }), Object(N.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M482.2,259.1l-19.1-84.3c-0.1-0.5-1.3-3.7-2.8-5.1c-2.7-2.5-6-3-6.4-3.1l-6-0.4c0.4,0,0.7,0.1,1.1,0.2 c0.1,0,0.2,0,0.3,0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.3,0.1,0.7,0.3,1,0.4c0.1,0,0.2,0.1,0.3,0.1c0.3,0.2,0.6,0.3,0.9,0.5 c0.3,0.2,0.6,0.4,0.9,0.6c0.1,0.1,0.1,0.1,0.2,0.2c0.3,0.2,0.5,0.5,0.8,0.7c0,0,0,0,0.1,0.1c0.3,0.3,0.6,0.7,0.9,1 c0,0.1,0.1,0.1,0.1,0.2c0.3,0.4,0.5,0.7,0.7,1.1c0,0.1,0.1,0.1,0.1,0.2c0.2,0.4,0.4,0.8,0.6,1.2c0,0.1,0,0.1,0.1,0.2 c0.2,0.5,0.3,0.9,0.4,1.3l19.1,84.3c1.3,5.9-2.2,11.7-7.9,13.2l-81.6,20.4c-1.2,0.3-2.4,0.4-3.6,0.3l6,0.4c1.2,0.1,2.3,0,3.6-0.3 l81.6-20.4C480,270.9,483.5,265,482.2,259.1L482.2,259.1z"
                    }), Object(N.b)("path", {
                        className: "icon",
                        d: "M413.8,220.5l-12.4,3.1l2.9,12.8l12.4-3.1L413.8,220.5z M406.8,232.3l-1.4-6.2l6-1.5l1.4,6.2L406.8,232.3z M390.2,221.3 l3.3,14.4l8.4-2.1l0.7,3.3l-12.1,3l-3.9-17.7L390.2,221.3z M414.6,243.5l-1.1-4.7l-1.5-1l-2.2,0.6c-0.2,0.1-0.3,0.3-0.3,0.5l1.2,5.7 c0,0.2,0.3,0.3,0.5,0.3l3.1-0.8C414.5,243.9,414.6,243.7,414.6,243.5z M413.9,242.5l-1,0.2l-0.2-1l1-0.2L413.9,242.5z M413.3,240.5 c0.1,0,0.2,0,0.2,0.1l0.2,0.8l-1,0.2l-0.2-1L413.3,240.5z M410.4,241.4c0-0.1,0-0.2,0.1-0.2l0.8-0.2l0.2,1l-1,0.2L410.4,241.4z M410.6,242.3l1.1-0.3l-0.3-1.2l1-0.2l0.5,2.1l-2,0.5L410.6,242.3z M411.3,244.3c-0.1,0-0.2,0-0.2-0.1l-0.2-0.8l0.9-0.2l0.2,1 L411.3,244.3z M412.2,244.1l-0.2-1l1-0.2l0.2,1L412.2,244.1z M414.2,243.4c0,0.1,0,0.2-0.1,0.2l-0.7,0.2l-0.2-1l1-0.2L414.2,243.4z M427.5,217l-1.2,13.8l-3.8,1l-7.1-11.7l3.6-0.9l4.6,8.1l0.7-9.4L427.5,217z M425.8,234.5c0.6-0.2,0.6-0.1,0.7,0.7 c0.1,0.9,0.1,1-0.5,1.1c-0.1,0.1-0.2,0.1-0.3,0.1c-0.4,0-0.3,0.9-0.1,1.5c0.2,0.7,0.5,1.4,0.8,1.3c0.1-0.1,0.2-0.1,0.3-0.1 c0.6-0.1,0.6,0,0.9,0.8c0.3,0.9,0.2,0.8-0.9,1.1c-0.5,0.1-1.4-1-1.9-2.9s-0.1-3.3,0.5-3.5C425.4,234.5,425.6,234.4,425.8,234.5z M438.4,223.8c0,0.5-0.3,1-0.8,1.4s-1,0.8-1.6,0.9c-1.1,0.3-1.8,0.2-2.4-0.3c-0.6-0.5-1.1-1.2-1.3-2.2l8.9-2.2 c0-0.3-0.1-0.5-0.1-0.7c-0.3-1.4-0.9-2.6-1.6-3.5c-0.8-1-1.6-1.5-2.7-1.9c-1.1-0.3-2.1-0.4-3.4-0.1c-1.2,0.3-2.1,0.8-2.9,1.6 c-0.9,0.8-1.4,1.7-1.8,3c-0.3,1.2-0.4,2.5-0.1,3.7c0.3,1.4,0.9,2.5,1.7,3.5c0.8,0.9,1.7,1.5,2.8,1.7c1.1,0.3,2.2,0.2,3.4,0 c3-0.8,4.6-2.7,4.8-5.8L438.4,223.8z M432.1,219.2c0.4-0.6,1-1.1,1.8-1.2c0.8-0.2,1.4-0.1,2,0.2c0.6,0.3,1,1,1.3,1.8l-5.6,1.3 C431.7,220.5,431.8,219.7,432.1,219.2L432.1,219.2z M442.7,236.1l-1.2-5.6l-8.7,2.2l1.2,5.6l1.5-0.4l0.2,0.9l5.7-1.4l-0.2-0.9 L442.7,236.1z M434.4,237.4l-1-4.2l7.5-1.9l1,4.2L434.4,237.4z M438.4,237.5c-0.2,0-0.4-0.1-0.4-0.3c0-0.2,0.1-0.4,0.3-0.4 s0.4,0.1,0.4,0.3C438.7,237.3,438.6,237.5,438.4,237.5z M401.9,245.2l-0.9-4c-0.1-0.3-0.3-0.5-0.6-0.4l-6.4,1.6 c-0.3,0.1-0.5,0.4-0.4,0.7l1,4.1l0.2,0.8l7.4-1.8L401.9,245.2z M395.1,247.2l-1-4.3l6.4-1.6l1,4.3L395.1,247.2z M399.2,247l3.5-0.9 c0,0,0.1,0.4,0.1,0.5s-0.1,0.3-0.2,0.3l-7.9,2c-0.1,0-0.3-0.1-0.3-0.2s-0.1-0.5-0.1-0.5l3.5-0.9c0,0.1,0.2,0.2,0.3,0.2l1-0.3 C399.1,247.2,399.2,247.1,399.2,247L399.2,247z M395,245.8c0.6-0.1,1.2,0.2,1.2,0.8l-0.3,0.1c-0.1-0.4-0.5-0.7-1-0.6V245.8z M396.5,246.5c-0.2-0.7-0.9-1.2-1.5-1l-0.1-0.3c0.9-0.2,1.6,0.3,1.8,1.2L396.5,246.5z M395.2,246.6l-0.1-0.3 c0.3-0.1,0.6,0.1,0.6,0.4l-0.3,0.1C395.5,246.6,395.4,246.6,395.2,246.6z"
                    })), Object(N.b)("g", {
                        className: "FIX1P FIX3P DATA INTERNET_GROUP"
                    }, Object(N.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M481.7,53l-4.4-4.4c2.1,2.1,3,5.4,2.1,8.7l-20.8,72.6c-1.4,5-6.6,8.3-11.5,7.2L375.9,122 c-1.7-0.4-3.1-1.2-4.2-2.3l4.4,4.4c1.1,1.1,2.6,1.9,4.2,2.3l71.2,15.1c4.9,1.1,10.1-2.2,11.5-7.2l20.8-72.6c0.6-2.1,0.5-4.1-0.3-5.9 C483.2,55,482.5,53.8,481.7,53z"
                    }), Object(N.b)("path", {
                        className: "icon",
                        d: "M446.1,71.7L412,64.5c-1.4-0.3-3,0.6-3.4,2.1L402.5,88l-1.1,4l39.3,8.4l1.2-4.1L448,75C448.3,73.4,447.5,72,446.1,71.7z M438.8,97l-34.1-7.2l6.5-22.7l34.1,7.2L438.8,97z M424.6,98.3l18.3,3.9c0,0.1-0.6,2-0.8,2.7s-1,1.2-1.7,1.1l-41.9-9 c-0.7-0.2-1.1-0.9-0.9-1.6c0.2-0.6,0.7-2.6,0.8-2.7l18.3,3.9c-0.2,0.7,0.2,1.5,0.9,1.6l5.2,1.1C423.6,99.5,424.4,99,424.6,98.3 L424.6,98.3z M407.7,89c0.2-0.8-0.2-1.5-0.9-1.6l0.4-1.3c1.4,0.3,2.3,1.8,1.9,3.2L407.7,89z M410.4,89.6c0.6-2.1-0.3-4.3-2.8-4.9 l0.4-1.3c2.9,0.6,4.6,3.5,3.7,6.5L410.4,89.6z M413,90.1c1-3.5-1.2-7.4-4.7-8.1l0.4-1.3c4.3,0.9,6.8,5.3,5.6,9.7L413,90.1z"
                    })), Object(N.b)("g", {
                        className: "VOICE"
                    }, Object(N.b)("path", {
                        className: "front",
                        fill: "#FEFEFE",
                        d: "M256.4,39.5c5.6-1.2,12.3,2.4,15.1,8.2l39.2,83.7c2.7,5.8,0.4,11.6-5.2,12.8L225,162.7 c-5.6,1.2-12.3-2.4-15.1-8.2l-39.2-83.7c-2.7-5.8-0.4-11.6,5.2-12.8L256.4,39.5z"
                    }), Object(N.b)("path", {
                        className: "back",
                        fill: "#CECECE",
                        d: "M305.6,144.1L225,162.7c-5.6,1.2-12.3-2.4-15.1-8.2l-39.3-83.8c-1.8-3.8-1.3-7.6,0.7-10.1l-5.1,6.1 c-2.1,2.5-2.5,6.3-0.7,10.1l39.3,83.8c2.7,5.8,9.5,9.5,15.1,8.2l80.6-18.6c1.9-0.4,3.4-1.3,4.5-2.7l5.1-6.1 C309,142.8,307.5,143.7,305.6,144.1z"
                    }), Object(N.b)("path", {
                        className: "icon",
                        fill: "#231F20",
                        d: "M235.5,76.1l14,7.6l16.4,35.1c0.7,1.6,0.1,3-1.4,3.5l-23,5.3c-1.5,0.3-3.2-0.6-4-2.2l-19.8-42.1 c-0.7-1.6-0.1-3.1,1.4-3.5L235.5,76.1z M251.2,112.9L244,97.4l-6.8,1.6l4,8.5l-8.2,1.9l3.2,7L251.2,112.9z M255.4,102.7l-2.6-5.6 c-0.3-0.7-1.3-1.3-2-1l-5.4,1.3l3.2,7L255.4,102.7z M229.8,102.4l2.6,5.6l6.8-1.6l-3.2-7l-5.4,1.2 C229.8,100.8,229.5,101.5,229.8,102.4 M262.6,118l-2.6-5.6l-6.8,1.6l3.2,7l5.4-1.3C262.7,119.6,263.1,118.9,262.6,118 M247,123.3 l-3.2-7l-6.8,1.6l2.6,5.6c0.3,0.7,1.3,1.3,2,1L247,123.3z M259.4,111l-3.2-7l-6.8,1.6l3.2,7L259.4,111z M255.2,121.4l-3.2-7 l-6.8,1.6l3.2,7L255.2,121.4z"
                    })), Object(N.b)("path", {
                        d: "M433.7,498c-9.3-13.4-24.5-17.8-31.2-30.8c-4.4-8.4-4.8-32-4.6-47.6c3.6-8,5.6-16.8,5.6-26.1c0-35-28.4-63.3-63.3-63.3 c-35,0-63.3,28.4-63.3,63.3c0,2.8,0.2,5.6,0.6,8.3l-0.1,0.1c0,0,3.8,26.8-5.8,45.2c-12.3,23.4-28.7,25.6-34.2,40.7 c-3.5,9.5-2.4,34.1,15.5,48.8s33.3,9.5,56,6.7c22.6-2.8,38.5-1.6,50.8,3.2s24,17.9,36.1,17.9c11.9,0,26.6,1.2,37.3-12.2 C448.7,532.3,442.8,511.1,433.7,498L433.7,498z"
                    }), Object(N.b)("path", {
                        fill: "#F4CFB2",
                        d: "M424.5,815.8l-18.4-7.3l35.3-120.9l-18.7-87.8l35.3-6.6l21.9,89.9c0.4,2.1,0.5,4.2,0,6.3 c-0.2,1.1-0.6,2.2-1.1,3.3L424.5,815.8z"
                    }), Object(N.b)("path", {
                        fill: "#F4CFB2",
                        d: "M256,815.8l18.4-7.3l-35.3-120.9l18.7-87.8l-35.3-6.6l-21.8,89.9c-0.4,2.1-0.5,4.2,0,6.3 c0.2,1.1,0.6,2.2,1.1,3.3L256,815.8z"
                    }), Object(N.b)("path", {
                        fill: "#F16E00",
                        d: "M477.1,649.2l-7.5-26.9c0,0-3.4-13.1-8-28.2c-5-16.6-11.5-35.8-21.2-43c-16.4-12.2-62.8-18.6-100.1-19.1 c-37.4,0.5-83.7,6.9-100.1,19.1c-9.7,7.2-16.2,26.4-21.2,43c-4.6,15.2-8,28.2-8,28.2l-7.5,26.9l45.8,13.7l7.1-29.7l11.4,98.2h144.7 l12.1-96.4l6.7,27.9L477.1,649.2z"
                    }), Object(N.b)("path", {
                        fill: "#F4CFB2",
                        d: "M369.2,533.4l-5.4-47.3h-47.3l-5.4,47.3l-10,1c0,0,21.8,56.9,39,56.9c17.3,0,39.1-56.9,39.1-56.9L369.2,533.4z"
                    }), Object(N.b)("path", {
                        fill: "#C19372",
                        d: "M311.1,533.4l5.4-47.3h47.3l1,13.2L311.1,533.4z"
                    }), Object(N.b)("path", {
                        fill: "#F4CFB2",
                        d: "M414.2,434.9c0,7.9-6.4,14.3-14.3,14.3c-0.7,0-1.3-0.1-1.9-0.1c-6.3,37.5-29.8,55.6-57.8,55.6 c-27.9,0-51.2-18.8-57.7-55.5h-0.1c-7.9,0-14.3-6.4-14.3-14.3c0-7.4,5.6-13.5,12.9-14.2c2.2-39,22.5-69.5,59.2-69.5 c35.7,0,56.9,30.5,59.2,69.4h0.5C407.8,420.7,414.2,427.1,414.2,434.9L414.2,434.9z"
                    }), Object(N.b)("path", {
                        fill: "#C19372",
                        d: "M351,430.4c0,0-3,7.9-10.9,7.9c-8.1,0-10.9-7.9-10.9-7.9s3.5,4.2,10.9,4.2C347.2,434.6,351,430.4,351,430.4z"
                    }), Object(N.b)("path", {
                        fill: "#FF7902",
                        d: "M401.8,444.5l6.1,6.1l-6.1,6.1l-6.1-6.1L401.8,444.5z"
                    }), Object(N.b)("path", {
                        fill: "#FF7902",
                        d: "M279.3,444.5l6.1,6.1l-6.1,6.1l-6.1-6.1L279.3,444.5z"
                    }), Object(N.b)("path", {
                        d: "M369.8,406.7c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6S369.8,403.4,369.8,406.7z M316.5,400.7c-3.3,0-6,2.7-6,6s2.7,6,6,6 s6-2.7,6-6S319.8,400.7,316.5,400.7z M340.2,451.3c-13.8,0-25.6-6.2-25.6-6.2s2.4,6.6,9.1,11.9c4.1,3.2,9.5,5.9,16.5,5.9 c6,0,11.3-2.7,15.5-6c6.8-5.3,10-11.6,10-11.6S354.7,451.3,340.2,451.3L340.2,451.3z M320.9,391.3c-0.2,0-4.5-0.2-10.1,2.2 c-6.2,2.7-8.6,5.9-8.7,6.1c-0.5,0.7-0.4,1.6,0.3,2.1c0.3,0.2,0.6,0.3,0.9,0.3c0.5,0,0.9-0.2,1.2-0.6c0,0,2.2-2.8,7.5-5.1 c4.9-2.1,8.7-2,8.8-2c0.8,0,1.5-0.6,1.6-1.4C322.3,392.1,321.7,391.4,320.9,391.3L320.9,391.3z M399.2,417.5c0,0-3.1-8.2-6.1-10.6 c-4.8-3.8-9.4-6-14.4-7.9c0.3,0.3,0.4,0.5,0.4,0.5c0.5,0.7,0.4,1.6-0.3,2.1c-0.3,0.2-0.6,0.3-0.9,0.3c-0.5,0-0.9-0.2-1.2-0.6 c0,0-2.1-2.8-7.5-5.1c-5-2.2-8.7-2-8.8-2c-0.8,0-1.5-0.6-1.6-1.4c0-0.4,0.1-0.7,0.3-1c-1.4-0.6-2.9-1.3-4.4-2 c-17-8.1-24.1-27.6-24.1-27.6s0,10.4-12.8,19c-12.8,8.6-19.5,7-26.8,14.3c-7.7,7.7-9.8,21.9-9.8,21.9s-5.7-76.9,59-76.9 S399.2,417.5,399.2,417.5L399.2,417.5z"
                    }), Object(N.b)("path", {
                        fill: "#FFFFFF",
                        d: "M314,444.6c0.4,1,3.4,7.3,9.4,12.3c0.8,0.6,7.9,1.8,16.8,1.8c8.5,0,14.8-1.2,15.6-1.8 c6.7-5.3,10.7-12.2,10.7-12.2s-11.8,5.8-26.4,5.8C326.9,450.4,314.9,444.9,314,444.6L314,444.6z"
                    }))
                }),
                te = (E.a.createElement, function(e) {
                    var t, n = e.children,
                        a = Object(T.useTheme)().bp,
                        r = q().hoveredOfferType,
                        c = Object(S.b)().isB2B,
                        o = Object(T.useLayer)().level > 0;
                    return Object(N.b)(E.a.Fragment, null, !c && !o && Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({}, a.FROM_DESKTOP, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: "50%",
                            bottom: 0,
                            textAlign: "right"
                        }), "")
                    }, Object(N.b)(T.DynamicContent, null, Object(N.b)(ee, {
                        hoveredOfferType: r,
                        css: Object(h.a)(Object(y.a)({
                            display: "none"
                        }, a.FROM_LARGE_DESKTOP, {
                            display: "inline-block"
                        }), "")
                    }), Object(N.b)($, {
                        hoveredOfferType: r,
                        css: Object(h.a)((t = {
                            display: "none"
                        }, Object(y.a)(t, a.FROM_DESKTOP, {
                            display: "inline-block"
                        }), Object(y.a)(t, a.FROM_LARGE_DESKTOP, {
                            display: "none"
                        }), t), "")
                    }))), E.a.cloneElement(n, {
                        separatorCSS: Object(y.a)({}, a.FROM_DESKTOP, {
                            display: c || o ? void 0 : "none"
                        })
                    }))
                }),
                ne = function(e) {
                    return Object(N.b)(K, null, Object(N.b)(te, e))
                },
                ae = function(e, t) {
                    var n = Object(S.b)().contracts,
                        a = n && n.filter((function(n) {
                            return e && t ? n.processType === t && n.offerType === e : null
                        }));
                    return {
                        currentContracts: a,
                        numberOfContracts: a ? a.length : 0
                    }
                },
                re = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.offerProcess,
                        n = Object(S.b)(),
                        a = n.dispatch,
                        r = n.offerType,
                        c = ae(r, t.type).numberOfContracts,
                        o = E.a.useCallback((function() {
                            t.redirectUrl ? window.location.assign(t.redirectUrl) : a({
                                type: "selectProcess",
                                payload: t.type
                            })
                        }), [a, t.redirectUrl, t.type]),
                        i = E.a.useCallback((function(e) {
                            "Enter" === e.key && o()
                        }), [o]);
                    return Object(N.b)(T.ActionListItem, {
                        title: t.name,
                        icon: t.iconType,
                        hasBadge: c > 0,
                        badgeText: 1 === c ? "Dost\u0119pne dla 1 numeru" : "Dost\u0119pne dla ".concat(c, " numer\xf3w"),
                        onClick: o,
                        onKeyPress: i
                    })
                })));
            re.displayName = "Process";
            var ce = n("QVQ0");
            E.a.createElement;
            var oe = {
                    name: "131yq1t",
                    styles: "padding-left:0;"
                },
                ie = E.a.memo((function(e) {
                    var t = e.upsellProcess,
                        n = e.currentUpsellOffer,
                        a = Object(S.b)().dispatch,
                        r = E.a.useCallback((function() {
                            n && (a({
                                type: "setCurrentUpsellOffer",
                                payload: n
                            }), a({
                                type: "goToUpsell"
                            }))
                        }), [n, a]),
                        c = E.a.useCallback((function(e) {
                            "Enter" === e.key && r()
                        }), [r]);
                    return Object(N.b)(T.ActionListItem, {
                        title: t.description,
                        iconList: t.iconList,
                        hasBadge: !1,
                        onClick: r,
                        onKeyPress: c,
                        css: oe
                    })
                })),
                se = (E.a.createElement, E.a.memo((function() {
                    var e, t = Object(S.b)(),
                        n = t.currentOffer,
                        a = t.offerType,
                        r = t.isUserLogged,
                        c = t.dispatch,
                        o = t.enhance,
                        i = Object(T.useTheme)().bp,
                        s = a && "FIX" === Object(ce.a)(a) && r;
                    if (E.a.useEffect((function() {
                            s && c({
                                type: "selectProcess",
                                payload: "FIX_EXISTING_SERVICE"
                            })
                        }), [c, s]), !n || !a) return null;
                    var l = null === o || void 0 === o ? void 0 : o.config.find((function(e) {
                            return e.offer.type === a
                        })),
                        u = null === l || void 0 === l ? void 0 : l.processes;
                    if (!n || !a) return null;
                    var b = n.processes;
                    return s ? null : Object(N.b)("ul", {
                        css: Object(h.a)((e = {
                            width: "100%",
                            maxWidth: 400,
                            padding: 20
                        }, Object(y.a)(e, i.FROM_TABLET, {
                            padding: "0 0 30px 20px"
                        }), Object(y.a)(e, i.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, b.map((function(e) {
                        return Object(N.b)(re, {
                            key: e.type,
                            offerProcess: e
                        })
                    })), null === u || void 0 === u ? void 0 : u.map((function(e) {
                        return Object(N.b)(ie, {
                            key: e.type,
                            upsellProcess: e,
                            currentUpsellOffer: l || null
                        })
                    })))
                })));
            se.displayName = "Main";
            var le = n("xWEo");
            E.a.createElement;
            var ue = {
                    name: "1wcba0h",
                    styles: "display:flex;margin-top:20px;"
                },
                be = {
                    name: "62c68f",
                    styles: "font-size:14px;line-height:18px;flex-shrink:1;margin:0;span{margin-top:10px;display:inline-block;}"
                },
                pe = function(e) {
                    var t = e.description,
                        n = e.icon,
                        a = Object(T.useTheme)().bp;
                    return Object(N.b)("div", {
                        css: ue
                    }, n && Object(N.b)(le.a, {
                        name: n,
                        css: Object(h.a)(Object(y.a)({
                            display: "none"
                        }, a.FROM_DESKTOP, {
                            display: "block",
                            width: 35,
                            height: 35,
                            marginRight: 20,
                            flexShrink: 0
                        }), "")
                    }), t && Object(N.b)("p", {
                        css: be,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                },
                de = n("sXB5");
            E.a.createElement;
            var fe = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                Oe = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                me = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                je = E.a.memo((function() {
                    var e, t = Object(k.a)(),
                        n = Object(T.useTheme)(),
                        a = n.bp,
                        r = n.colors,
                        c = Object(S.b)(),
                        o = c.currentOffer,
                        i = c.offerType,
                        s = c.isUserLogged,
                        l = c.isB2B,
                        u = Object(de.a)(i),
                        b = i && "FIX" === Object(ce.a)(i);
                    if (!o || b && s) return null;
                    var p = o.mainDescription,
                        d = o.mainIconType,
                        f = l || !b ? "Wybierz, co <br /> chcesz zrobi\u0107" : "Czy masz ju\u017c internet w Orange?";
                    return t ? Object(N.b)("div", {
                        css: fe
                    }, Object(N.b)("strong", {
                        css: Object(h.a)({
                            color: r.ORANGE_DARK,
                            display: "inline-block",
                            marginBottom: 10
                        }, "")
                    }, o.name), Object(N.b)("h2", {
                        dangerouslySetInnerHTML: {
                            __html: f
                        }
                    }), u && Object(N.b)(U, {
                        css: Oe
                    }), p && Object(N.b)(pe, {
                        description: p,
                        icon: d
                    })) : Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            padding: 20
                        }, a.FROM_DESKTOP, {
                            padding: 0,
                            maxWidth: 400
                        }), "")
                    }, Object(N.b)("h2", {
                        css: Object(h.a)((e = {}, Object(y.a)(e, a.FROM_DESKTOP, {
                            fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                            lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                        }), Object(y.a)(e, "@media (min-width: 1240px)", {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), ""),
                        dangerouslySetInnerHTML: {
                            __html: f
                        }
                    }), u && Object(N.b)(U, {
                        css: me
                    }), p && Object(N.b)(pe, {
                        description: p,
                        icon: d
                    }))
                }));
            je.displayName = "Description";
            E.a.createElement;
            var ge = E.a.memo((function() {
                var e, t = Object(T.useTheme)().bp,
                    n = Object(S.b)(),
                    a = n.isB2B,
                    r = n.offerType,
                    c = r && "FIX" === Object(ce.a)(r),
                    o = a || !c ? "Wpisz gdzie chcesz korzysta\u0107 z us\u0142ugi" : "Gdzie chcesz korzysta\u0107 z internetu?";
                return Object(N.b)("h2", {
                    css: Object(h.a)((e = {
                        padding: "20px 20px 0 20px"
                    }, Object(y.a)(e, t.FROM_TABLET, {
                        width: "100%"
                    }), Object(y.a)(e, t.FROM_DESKTOP, {
                        maxWidth: 400
                    }), e), "")
                }, o)
            }));
            ge.displayName = "Description";
            var ye = n("VtSi"),
                he = n.n(ye);

            function ve(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Te = {
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
                Se = function(e, t) {
                    switch (t.type) {
                        case "setClearForm":
                            return Ee({}, Te);
                        case "setConfigValue":
                            return Ee({}, e, Object(y.a)({}, t.payload.key, t.payload.value));
                        case "setClearStreet":
                            return Ee({}, e, {
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

            function Ce(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function we(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ce(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var xe = E.a.createContext(null),
                ke = E.a.memo((function(e) {
                    var t = e.isLocalRequired,
                        n = Object(_.a)(e, ["isLocalRequired"]),
                        a = E.a.useReducer(Se, Te),
                        r = Object(C.a)(a, 2),
                        c = r[0],
                        o = r[1];
                    return E.a.useEffect((function() {
                        o({
                            type: "setConfigValue",
                            payload: {
                                key: "isLocalRequired",
                                value: t
                            }
                        })
                    }), [t]), Object(N.b)(xe.Provider, Object(A.a)({
                        value: we({}, c, {
                            dispatch: o
                        })
                    }, n))
                }));
            ke.displayName = "WWTFormProvider";
            var Pe = function() {
                    var e = E.a.useContext(xe);
                    if (null === e) throw Error("useWWTFormContext: Please provide WWTFormProvider value.");
                    return e
                },
                Ie = n("ePoE"),
                Re = n("mpXp"),
                Ae = n.n(Re),
                Ne = n("3oP0");
            E.a.createElement;
            var ze = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                Le = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                _e = E.a.memo((function(e) {
                    var t = e.onBack,
                        n = e.onSuccess,
                        a = e.isPending,
                        r = Pe(),
                        c = r.isStreetRequired,
                        o = r.city,
                        i = r.isLocalRequired,
                        s = function() {
                            var e = Pe(),
                                t = e.dispatch,
                                n = e.city,
                                a = e.street,
                                r = e.isStreetRequired,
                                c = e.isLocalRequired,
                                o = e.houseNumber,
                                i = e.localNumber,
                                s = Ae()({
                                    mode: "onChange"
                                }),
                                l = s.register,
                                u = s.handleSubmit,
                                b = s.errors,
                                p = s.clearError,
                                d = s.setValue,
                                f = s.formState,
                                O = s.reset;
                            E.a.useEffect((function() {
                                c && s.setError("localNumber", "error", "To pole jest wymagane")
                            }), [s, c]);
                            var m = E.a.useState([]),
                                j = Object(C.a)(m, 2),
                                g = j[0],
                                y = j[1],
                                h = E.a.useState([]),
                                v = Object(C.a)(h, 2),
                                T = v[0],
                                S = v[1],
                                w = E.a.useCallback((function() {
                                    return !n.cbsIdCity || !r
                                }), [n.cbsIdCity, r]),
                                x = E.a.useCallback((function() {
                                    return !a.cbsIdStreet && r || !r && !n.cbsIdCity
                                }), [a.cbsIdStreet, r, n.cbsIdCity]),
                                k = E.a.useCallback((function() {
                                    S([]), t({
                                        type: "setClearForm"
                                    })
                                }), [t, S]),
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
                                    }), d("localNumber", ""), d("houseNumber", ""), p(["localNumber", "houseNumber"])
                                }), [t, p, d]),
                                I = E.a.useCallback((function(e, n) {
                                    if (e) return "CITY" === n ? (k(), O({
                                        street: "",
                                        houseNumber: "",
                                        localNumber: ""
                                    }), d("city", e.name), void t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "city",
                                            value: {
                                                name: e.name,
                                                cbsIdCity: e.id
                                            }
                                        }
                                    })) : void("STREET" === n && (P(), d("street", e.name), t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "street",
                                            value: {
                                                name: e.name,
                                                cbsIdStreet: e.id
                                            }
                                        }
                                    })))
                                }), [k, O, d, t, P]),
                                R = E.a.useCallback((function(e) {
                                    var t, n;
                                    return he.a.async((function(a) {
                                        for (;;) switch (a.prev = a.next) {
                                            case 0:
                                                if (!((t = e.target.value).length > 2)) {
                                                    a.next = 8;
                                                    break
                                                }
                                                return a.next = 4, he.a.awrap(Object(Ne.f)(t, ""));
                                            case 4:
                                                n = a.sent, y(n), a.next = 9;
                                                break;
                                            case 8:
                                                y([]);
                                            case 9:
                                            case "end":
                                                return a.stop()
                                        }
                                    }), null, null, null, Promise)
                                }), []),
                                A = E.a.useCallback((function(e) {
                                    var t, a;
                                    return he.a.async((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (t = e.target.value, n.cbsIdCity) {
                                                    r.next = 3;
                                                    break
                                                }
                                                return r.abrupt("return");
                                            case 3:
                                                if (!(t.length > 2)) {
                                                    r.next = 8;
                                                    break
                                                }
                                                return r.next = 6, he.a.awrap(Object(Ne.g)(t, {
                                                    city_id: n.cbsIdCity
                                                }));
                                            case 6:
                                                a = r.sent, S(a);
                                            case 8:
                                                (!t || t.length <= 2) && S([]);
                                            case 9:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), null, null, null, Promise)
                                }), [n]),
                                N = E.a.useCallback((function(e, n) {
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
                                z = E.a.useCallback((function() {
                                    t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "isStreetRequired",
                                            value: !r
                                        }
                                    }), t({
                                        type: "setClearStreet"
                                    }), d("street", ""), t({
                                        type: "setConfigValue",
                                        payload: {
                                            key: "isLocalRequired",
                                            value: !1
                                        }
                                    }), p(["street", "localNumber", "houseNumber"])
                                }), [p, t, r, d]),
                                L = {
                                    apartmentNo: i,
                                    city: n.name,
                                    cityId: n.cbsIdCity,
                                    street: a.name,
                                    streetId: a.cbsIdStreet,
                                    houseNo: o,
                                    isStreetRequired: r
                                };
                            return {
                                form: s,
                                citySuggestion: g,
                                streetSuggestion: T,
                                onCityFieldChange: R,
                                onStreetFieldChange: A,
                                onNoStreetChange: z,
                                onSelect: I,
                                register: l,
                                handleSubmit: u,
                                errors: b,
                                formState: f,
                                isStreetDisabled: w,
                                isLocalNumberDisabled: x,
                                onChange: N,
                                formData: L
                            }
                        }(),
                        l = s.onCityFieldChange,
                        u = s.onStreetFieldChange,
                        b = s.onNoStreetChange,
                        p = s.citySuggestion,
                        d = s.streetSuggestion,
                        f = s.onSelect,
                        O = s.register,
                        m = s.handleSubmit,
                        j = s.isStreetDisabled,
                        g = s.isLocalNumberDisabled,
                        v = s.form,
                        S = s.onChange,
                        w = s.formData,
                        x = Object(T.useTheme)(),
                        k = x.bp,
                        P = x.colors,
                        I = x.zIndex;
                    return Object(N.b)("div", {
                        css: ze
                    }, a && Object(N.b)("div", {
                        css: Object(h.a)({
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: P.WHITE,
                            zIndex: I.LAYER_2,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }, "")
                    }, Object(N.b)(T.Loader, null)), Object(N.b)(Re.FormContext, v, Object(N.b)("form", {
                        autoComplete: "off",
                        onSubmit: m((function() {
                            return n(w)
                        }))
                    }, Object(N.b)(T.Autocomplete, {
                        autoComplete: "random",
                        suggestions: p,
                        onItemSelect: function(e) {
                            return f(e, "CITY")
                        },
                        onChange: l,
                        placeholder: "Miejscowo\u015b\u0107",
                        name: "city",
                        ref: O({
                            required: "To pole jest wymagane"
                        }),
                        withValidationColor: !0,
                        withValidationIcon: !0,
                        value: o.name,
                        wrapperCss: {
                            marginBottom: 20
                        }
                    }), Object(N.b)(T.Checkbox, {
                        name: "noStreet",
                        onChange: b,
                        checked: !c,
                        wrapperCss: {
                            marginBottom: 10
                        }
                    }, "W mojej miejscowo\u015bci nie ma ulicy"), Object(N.b)(T.Autocomplete, {
                        autoComplete: "random",
                        suggestions: d,
                        onItemSelect: function(e) {
                            return f(e, "STREET")
                        },
                        onChange: u,
                        placeholder: "Ulica",
                        withValidationColor: !0,
                        withValidationIcon: !0,
                        name: "street",
                        ref: O({
                            required: !!c && "To pole jest wymagane"
                        }),
                        disabled: j(),
                        wrapperCss: {
                            marginBottom: 20
                        }
                    }), Object(N.b)("div", {
                        css: Le
                    }, Object(N.b)(Ie.a, {
                        placeholder: "Nr domu",
                        name: "houseNumber",
                        disabled: g(),
                        ref: O({
                            required: "To pole jest wymagane"
                        }),
                        withValidationColor: !0,
                        withValidationIcon: !0,
                        onChange: function(e) {
                            return S(e, "HOUSE")
                        },
                        wrapperCss: {
                            marginRight: 20,
                            flexBasis: "50%"
                        }
                    }), Object(N.b)(Ie.a, {
                        placeholder: "Nr lokalu",
                        name: "localNumber",
                        disabled: g(),
                        withValidationColor: !0,
                        withValidationIcon: !0,
                        ref: O({
                            required: !!i && "To pole jest wymagane"
                        }),
                        onChange: function(e) {
                            return S(e, "LOCAL")
                        },
                        wrapperCss: {
                            flexBasis: "50%"
                        }
                    })), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            flexFlow: "wrap",
                            marginTop: 40
                        }, k.FROM_TABLET, {
                            flexFlow: "nowrap"
                        }), "")
                    }, t && Object(N.b)(T.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: t,
                        css: Object(h.a)(Object(y.a)({
                            flexBasis: "100%",
                            marginBottom: 20
                        }, k.FROM_TABLET, {
                            flexBasis: "50%",
                            marginRight: 20,
                            marginBottom: 0
                        }), "")
                    }, "Wstecz"), Object(N.b)(T.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_WHITE",
                        css: Object(h.a)(Object(y.a)({
                            flexBasis: "100%"
                        }, k.FROM_TABLET, {
                            flexBasis: "50%",
                            maxWidth: 190
                        }), "")
                    }, "Dalej")))))
                })),
                Me = (E.a.createElement, E.a.memo((function(e) {
                    return Object(N.b)(ke, {
                        isLocalRequired: e.isLocalRequired
                    }, Object(N.b)(_e, e))
                }))),
                De = (E.a.createElement, E.a.memo((function() {
                    var e, t = Object(T.useTheme)().bp,
                        n = E.a.useState(!1),
                        a = Object(C.a)(n, 2),
                        r = a[0],
                        c = a[1],
                        o = E.a.useState(!1),
                        i = Object(C.a)(o, 2),
                        s = i[0],
                        l = i[1],
                        u = Object(S.b)(),
                        b = u.dispatch,
                        p = u.currentOffer,
                        d = u.currentStep,
                        f = u.offerType,
                        O = u.isUserLogged,
                        m = u.processType,
                        j = Object(R.b)().market,
                        g = Object(V.c)(),
                        v = g.corazoneSkipRedirect,
                        w = g.enableCBSRedirectForWarsaw,
                        x = function(e) {
                            return e.replace(/ /g, "+")
                        },
                        k = E.a.useCallback((function(e, t, n, a, r, c) {
                            var o = x(e),
                                i = x(t);
                            return "city=".concat(o, "&street=").concat(i, "&roadNo=").concat(n, "&apartmentNo=").concat(a, "&cbsIdCity=").concat(r, "&cbsIdStreet=").concat(c, "&formInitialized=true")
                        }), []),
                        P = E.a.useCallback((function(e) {
                            var t;
                            return he.a.async((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return c(!0), l(!1), b({
                                            type: "setIsSuflerProcessing",
                                            payload: !0
                                        }), n.next = 5, he.a.awrap(Object(Ne.i)(e));
                                    case 5:
                                        if (!(t = n.sent).wwtCheckStatus || 454 !== t.wwtCheckStatus.errorCode) {
                                            n.next = 11;
                                            break
                                        }
                                        return l(!0), b({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        }), c(!1), n.abrupt("return");
                                    case 11:
                                        t.doRedirect && t.redirectUrl && ("LEAD" === Object(ce.a)(null === p || void 0 === p ? void 0 : p.type) || 91189 === e.leadAddressForm.cbsIdCity) && !v && w ? (Object(G.c)(d, f, j, O, window.location.pathname, "WARSAW_PROCESS", m), window.location.href = t.redirectUrl) : (c(!1), b({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        }), b({
                                            type: "setLocalizationData",
                                            payload: e.leadAddressForm
                                        }));
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), null, null, null, Promise)
                        }), [b, p, v, w, d, f, j, O, m]);
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            padding: 20,
                            width: "100%"
                        }, Object(y.a)(e, t.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, t.ONLY_TABLET, {
                            marginBottom: 30
                        }), e), "")
                    }, Object(N.b)(Me, {
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
                            }), I.a.setItem("OPL-prompterWWT_address", JSON.stringify({
                                formType: "DETAILED",
                                leadAddressForm: k(e.city, e.street, e.houseNo, e.apartmentNo, e.cityId, e.streetId)
                            })))
                        },
                        isPending: r,
                        isLocalRequired: s
                    }))
                })));
            De.displayName = "Location";
            var Fe = function(e) {
                    return e.replace(/-/g, "")
                },
                Be = n("aant"),
                Ve = function(e) {
                    if (!1 === /^[0-9]{11}$/.test(e)) return !1;
                    var t = "".concat(e).split("");
                    if (parseInt(e.substring(4, 6), 10) > 31 || parseInt(e.substring(2, 4), 10) > 12) return !1;
                    var n = (1 * parseInt(t[0], 10) + 3 * parseInt(t[1], 10) + 7 * parseInt(t[2], 10) + 9 * parseInt(t[3], 10) + 1 * parseInt(t[4], 10) + 3 * parseInt(t[5], 10) + 7 * parseInt(t[6], 10) + 9 * parseInt(t[7], 10) + 1 * parseInt(t[8], 10) + 3 * parseInt(t[9], 10)) % 10;
                    return 0 === n && (n = 10), n = 10 - n, parseInt(t[10], 10) === n
                },
                Ue = function(e) {
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
                },
                He = function(e) {
                    var t = Object(Be.a)()(e).length > 0;
                    return /^\d{9}$/.test(e) && !t
                },
                Ge = n("s11k");

            function We(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var Ke = {
                    isUserAuthenticated: !1,
                    formType: "COMMON",
                    authorizationData: {
                        type: null,
                        currentStep: "COMMON_FORM"
                    }
                },
                qe = function(e, t) {
                    switch (t.type) {
                        case "setConfigValue":
                            return function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? We(Object(n), !0).forEach((function(t) {
                                        Object(y.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : We(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, e, Object(y.a)({}, t.payload.key, t.payload.value));
                        default:
                            return e
                    }
                },
                Ye = {
                    PHONE_NUMBER: ["VOICE", "DATA", "DATA_LDF"],
                    COMMON: [],
                    EMAIL: []
                };
            E.a.createElement;

            function Xe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Ze(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Xe(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Je = E.a.createContext(null),
                Qe = E.a.memo((function(e) {
                    var t = e.value,
                        n = Object(_.a)(e, ["value"]),
                        a = Object(S.b)(),
                        r = a.offerType,
                        c = a.currentStep,
                        o = a.authorizationType,
                        i = "LOGIN" === c && o ? o : function(e) {
                            return e && Object.entries(Ye).map((function(t) {
                                var n = Object(C.a)(t, 2),
                                    a = n[0];
                                return n[1].includes(e) ? a : null
                            })).find((function(e) {
                                return !!e
                            })) || "COMMON"
                        }(r),
                        s = E.a.useReducer(qe, Ze({}, Ke, {
                            formType: i
                        })),
                        l = Object(C.a)(s, 2),
                        u = l[0],
                        b = l[1];
                    return Object(N.b)(Je.Provider, Object(A.a)({
                        value: Ze({}, u, {}, t, {
                            dispatch: b
                        })
                    }, n))
                })),
                $e = function() {
                    var e = E.a.useContext(Je);
                    if (null === e) throw Error("useAuthContext: Please provide AuthProvider value.");
                    return e
                },
                et = function() {
                    var e = Object(S.b)().processType,
                        t = $e().dispatch,
                        n = E.a.useState({
                            status: null,
                            message: null
                        }),
                        a = Object(C.a)(n, 2),
                        r = a[0],
                        c = a[1],
                        o = E.a.useState(!1),
                        i = Object(C.a)(o, 2),
                        s = i[0],
                        l = i[1],
                        u = E.a.useCallback((function(n) {
                            var a, r;
                            return he.a.async((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (e) {
                                            o.next = 2;
                                            break
                                        }
                                        return o.abrupt("return");
                                    case 2:
                                        return c({
                                            status: null,
                                            message: null
                                        }), l(!0), o.prev = 4, o.next = 7, he.a.awrap(Object(Ge.e)({
                                            phone: n,
                                            processType: e
                                        }));
                                    case 7:
                                        a = o.sent, r = a.requestToken, l(!1), t({
                                            type: "setConfigValue",
                                            payload: {
                                                key: "authorizationData",
                                                value: {
                                                    type: "PHONE_NUMBER",
                                                    currentStep: "VERIFICATION",
                                                    authorizationToken: r,
                                                    phoneNumber: n
                                                }
                                            }
                                        }), o.next = 17;
                                        break;
                                    case 13:
                                        o.prev = 13, o.t0 = o.catch(4), l(!1), c({
                                            status: "ERROR",
                                            message: o.t0.message
                                        });
                                    case 17:
                                    case "end":
                                        return o.stop()
                                }
                            }), null, null, [
                                [4, 13]
                            ], Promise)
                        }), [t, e]),
                        b = E.a.useCallback((function(n) {
                            return he.a.async((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return a.prev = 0, a.next = 3, he.a.awrap(Object(Ge.c)({
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
                                        }), a.next = 9;
                                        break;
                                    case 6:
                                        a.prev = 6, a.t0 = a.catch(0), c({
                                            status: "ERROR",
                                            message: a.t0.message
                                        });
                                    case 9:
                                    case "end":
                                        return a.stop()
                                }
                            }), null, null, [
                                [0, 6]
                            ], Promise)
                        }), [e, t]),
                        p = E.a.useCallback((function(e) {
                            return he.a.async((function(n) {
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
                                return Ue(e) ? "EMAIL" : Ve(e) ? "PESEL" : He(e) ? "PHONE_NUMBER" : null
                            }(e);
                            "PHONE_NUMBER" !== t ? "EMAIL" !== t ? "PESEL" === t && p(e) : b(e) : u(e)
                        }), [u, b, p]),
                        formStatus: r,
                        isLoading: s
                    }
                };
            E.a.createElement;
            var tt = {
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
                nt = {
                    name: "dccdhy",
                    styles: "font-weight:bold;font-size:16px;"
                },
                at = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                rt = E.a.memo((function() {
                    var e, t = Object(T.useTheme)(),
                        n = t.bp,
                        a = t.colors,
                        r = Object(S.b)(),
                        c = r.isB2B,
                        o = r.offerType,
                        i = Object(k.a)(),
                        s = et(),
                        l = s.authenticate,
                        u = s.formStatus,
                        b = s.isLoading,
                        p = $e().formType,
                        d = Ae()({
                            mode: "onChange"
                        }),
                        f = o && "FIX" === Object(ce.a)(o),
                        O = c || !f ? tt.DEFAULT[p] : tt.FIX[p],
                        m = O.label,
                        j = O.placeholder;
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            width: "100%",
                            padding: "0 20px"
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, n.ONLY_TABLET, {
                            marginBottom: 20
                        }), e), "")
                    }, Object(N.b)(Re.FormContext, d, Object(N.b)("form", {
                        onSubmit: d.handleSubmit((function(e) {
                            "PHONE_NUMBER" === p && (He(Fe(e.phone)) ? l(Fe(e.phone)) : d.setError("phone", "error", "Podaj poprawny numer telefonu"));
                            "EMAIL" === p && (Ue(e.email) ? l(e.email) : d.setError("email", "error", "Podaj poprawny adres email"));
                            "COMMON" === p && l(e.input)
                        }))
                    }, !i && Object(N.b)("label", {
                        css: nt
                    }, m), Object(N.b)("div", {
                        css: at
                    }, "PHONE_NUMBER" === p && Object(N.b)(Ie.c, {
                        prefix: "(+48)",
                        name: "phone",
                        placeholder: j,
                        ref: d.register,
                        withValidationIcon: !0,
                        withValidationColor: !0
                    }), "EMAIL" === p && Object(N.b)(Ie.a, {
                        name: "email",
                        ref: d.register({
                            validate: function(e) {
                                return Ue(e) || "Wprowad\u017a poprawny adres email"
                            }
                        }),
                        withValidationIcon: !0,
                        withValidationColor: !0,
                        variant: "STARDUST",
                        placeholder: j,
                        type: "email"
                    }), "COMMON" === p && Object(N.b)(Ie.a, {
                        name: "input",
                        ref: d.register({
                            validate: function(e) {
                                return function(e) {
                                    return Ve(e) || Ue(e) || He(e)
                                }(e) || "Wprowad\u017a poprawny PESEL, numer telefonu lub login do M\xf3j Orange."
                            }
                        }),
                        withValidationIcon: !0,
                        withValidationColor: !0,
                        variant: "STARDUST",
                        placeholder: j,
                        type: "text"
                    })), "ERROR" === u.status && Object(N.b)("span", {
                        css: Object(h.a)({
                            marginTop: 0,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: a.DANGER
                        }, "")
                    }, u.message, Object(N.b)("br", null)), Object(N.b)(T.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_BLACK",
                        disabled: b,
                        css: Object(h.a)(Object(y.a)({
                            width: "100%",
                            marginTop: 20
                        }, n.FROM_TABLET, {
                            width: 170,
                            marginTop: 40
                        }), "")
                    }, "Dalej"))))
                }));
            rt.displayName = "CommonForm";
            var ct = n("bVfH"),
                ot = n("sGZ7");
            E.a.createElement;
            var it = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                st = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                lt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                ut = {
                    name: "q12xye",
                    styles: "display:flex;margin-top:40px;"
                },
                bt = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                pt = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                dt = E.a.memo((function() {
                    var e, t = Object(T.useTheme)(),
                        n = t.bp,
                        a = t.colors,
                        r = function() {
                            var e = $e(),
                                t = e.dispatch,
                                n = e.authorizationData,
                                a = Object(R.b)().setIsUserLogged,
                                r = Object(ot.c)().dispatch,
                                c = Object(S.b)(),
                                o = c.dispatch,
                                i = c.currentStep,
                                s = E.a.useCallback((function() {
                                    var e, t, n, a, c, s;
                                    return he.a.async((function(l) {
                                        for (;;) switch (l.prev = l.next) {
                                            case 0:
                                                if ("LOGIN" !== i) {
                                                    l.next = 10;
                                                    break
                                                }
                                                return l.next = 3, he.a.awrap(Promise.all([Object(Ne.k)(), Object(Ne.e)(), Object(ct.b)(), Object(Ge.a)()]));
                                            case 3:
                                                e = l.sent, t = Object(C.a)(e, 2), n = t[0], a = t[1], n && (c = n.accountCode, s = n.accountId, c && s && o({
                                                    type: "sendSelectedAccount",
                                                    payload: {
                                                        id: s,
                                                        code: c
                                                    }
                                                })), a && o({
                                                    type: "setContracts",
                                                    payload: a
                                                }), r({
                                                    type: "setCartItemsCount",
                                                    payload: 0
                                                });
                                            case 10:
                                            case "end":
                                                return l.stop()
                                        }
                                    }), null, null, null, Promise)
                                }), [o, r, i]),
                                l = Ae()({
                                    mode: "onChange"
                                }),
                                u = E.a.useState({
                                    status: null,
                                    message: null
                                }),
                                b = Object(C.a)(u, 2),
                                p = b[0],
                                d = b[1],
                                f = E.a.useState(!1),
                                O = Object(C.a)(f, 2),
                                m = O[0],
                                j = O[1];
                            return {
                                onSubmit: E.a.useCallback((function(e) {
                                    if (n.login) {
                                        he.a.async((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    return d({
                                                        status: null,
                                                        message: null
                                                    }), j(!0), r.prev = 2, r.next = 5, he.a.awrap(Object(Ge.f)({
                                                        password: e.password,
                                                        login: n.login || ""
                                                    }));
                                                case 5:
                                                    return r.next = 7, he.a.awrap(s());
                                                case 7:
                                                    a(!0), j(!1), t({
                                                        type: "setConfigValue",
                                                        payload: {
                                                            key: "isUserAuthenticated",
                                                            value: !0
                                                        }
                                                    }), r.next = 25;
                                                    break;
                                                case 12:
                                                    r.prev = 12, r.t0 = r.catch(2), r.t1 = r.t0.message, r.next = "B2B_IN_CART" === r.t1 ? 17 : "B2C_IN_CART" === r.t1 ? 20 : 23;
                                                    break;
                                                case 17:
                                                    return j(!1), o({
                                                        type: "setProcessError",
                                                        payload: {
                                                            type: "B2C_CLIENT"
                                                        }
                                                    }), r.abrupt("break", 25);
                                                case 20:
                                                    return j(!1), o({
                                                        type: "setProcessError",
                                                        payload: {
                                                            type: "B2B_CLIENT"
                                                        }
                                                    }), r.abrupt("break", 25);
                                                case 23:
                                                    j(!1), d({
                                                        status: "ERROR",
                                                        message: r.t0.message
                                                    });
                                                case 25:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), null, null, [
                                            [2, 12]
                                        ], Promise)
                                    }
                                }), [n.login, s, a, t, o]),
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
                                register: l.register,
                                form: l,
                                isLoading: m
                            }
                        }(),
                        c = r.onSubmit,
                        o = r.verificationStatus,
                        i = r.onClickBack,
                        s = r.register,
                        l = r.form,
                        u = r.isLoading;
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            padding: "0 20px",
                            width: "100%"
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, n.ONLY_TABLET, {
                            marginBottom: 30
                        }), e), "")
                    }, Object(N.b)(Re.FormContext, l, Object(N.b)("form", {
                        onSubmit: l.handleSubmit(c)
                    }, Object(N.b)("label", {
                        css: it
                    }, Object(N.b)("span", {
                        css: Object(h.a)(Object(y.a)({
                            fontWeight: "bold",
                            fontSize: 14,
                            display: "inline"
                        }, n.FROM_TABLET, {
                            fontSize: 18,
                            display: "block"
                        }), "")
                    }, "Wpisz has\u0142o")), Object(N.b)("div", {
                        css: st
                    }, Object(N.b)(Ie.a, {
                        name: "password",
                        ref: s,
                        type: "password",
                        placeholder: "Has\u0142o"
                    }), "ERROR" === o.status && Object(N.b)("p", {
                        css: Object(h.a)({
                            marginTop: 0,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: a.DANGER
                        }, "")
                    }, o.message), Object(N.b)("p", {
                        css: lt
                    }, "Zapomnia\u0142e\u015b has\u0142a?", " ", Object(N.b)(T.A, {
                        href: "/twojekonto/odzyskaj_haslo"
                    }, "Zresetuj je tutaj"))), Object(N.b)("div", {
                        css: ut
                    }, Object(N.b)(T.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: i,
                        css: bt,
                        disabled: u
                    }, "Wstecz"), Object(N.b)(T.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_WHITE",
                        disabled: u,
                        css: pt
                    }, "Dalej")))))
                }));
            dt.displayName = "EmailVerification";
            var ft = n("v4L6");
            E.a.createElement;
            var Ot = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                mt = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                jt = {
                    name: "4331mo",
                    styles: "height:20px;margin-right:10px;min-width:20px;width:20px;"
                },
                gt = {
                    name: "w2cuf",
                    styles: "margin-top:0;font-size:14px;font-weight:bold;a{text-decoration:underline;}"
                },
                yt = {
                    name: "7w1zh4",
                    styles: "text-decoration:underline;font-size:14px;margin-left:5px;"
                },
                ht = {
                    name: "bo11xp",
                    styles: "display:flex;align-items:center;margin-top:6px;"
                },
                vt = {
                    name: "ov7rn5",
                    styles: "font-size:14px;margin:10px 0 0 10px;"
                },
                Et = E.a.memo((function() {
                    var e, t = Object(T.useTheme)(),
                        n = t.bp,
                        a = t.colors,
                        r = $e().authorizationData,
                        c = function() {
                            var e = $e(),
                                t = e.authorizationData,
                                n = e.dispatch,
                                a = Object(S.b)(),
                                r = a.dispatch,
                                c = "RETENTION" === a.processType ? t.phoneNumber || "" : void 0,
                                o = Ae()({
                                    mode: "onChange"
                                }),
                                i = E.a.useState(!1),
                                s = Object(C.a)(i, 2),
                                l = s[0],
                                u = s[1],
                                b = E.a.useState(!1),
                                p = Object(C.a)(b, 2),
                                d = p[0],
                                f = p[1],
                                O = E.a.useState({
                                    status: null,
                                    message: null
                                }),
                                m = Object(C.a)(O, 2),
                                j = m[0],
                                g = m[1],
                                y = E.a.useCallback((function(e) {
                                    if (t.phoneNumber && t.authorizationToken) {
                                        ! function() {
                                            var a;
                                            he.a.async((function(o) {
                                                for (;;) switch (o.prev = o.next) {
                                                    case 0:
                                                        return g({
                                                            status: null,
                                                            message: null
                                                        }), u(!1), o.next = 4, he.a.awrap(Object(ft.a)());
                                                    case 4:
                                                        return a = o.sent, f(!0), o.prev = 6, o.next = 9, he.a.awrap(Object(Ge.h)({
                                                            csrfToken: a,
                                                            code: e.sms,
                                                            token: t.authorizationToken || ""
                                                        }));
                                                    case 9:
                                                        o.next = 16;
                                                        break;
                                                    case 11:
                                                        return o.prev = 11, o.t0 = o.catch(6), f(!1), g({
                                                            status: "ERROR",
                                                            message: o.t0.message
                                                        }), o.abrupt("return");
                                                    case 16:
                                                        return o.prev = 16, o.next = 19, he.a.awrap(Object(Ge.a)(c));
                                                    case 19:
                                                        n({
                                                            type: "setConfigValue",
                                                            payload: {
                                                                key: "isUserAuthenticated",
                                                                value: !0
                                                            }
                                                        }), o.next = 25;
                                                        break;
                                                    case 22:
                                                        o.prev = 22, o.t1 = o.catch(16), -1 !== ["B2C_IN_CART", "B2B_IN_CART", "SERVER_ERROR"].indexOf(o.t1.message) ? (f(!1), r({
                                                            type: "setProcessError",
                                                            payload: {
                                                                type: "CHECK_MARKET_ERROR",
                                                                data: {
                                                                    message: o.t1.message,
                                                                    backTo: "goToAuthorization"
                                                                }
                                                            }
                                                        })) : (f(!1), g({
                                                            status: "ERROR",
                                                            message: o.t1.message
                                                        }));
                                                    case 25:
                                                    case "end":
                                                        return o.stop()
                                                }
                                            }), null, null, [
                                                [6, 11],
                                                [16, 22]
                                            ], Promise)
                                        }()
                                    }
                                }), [t.phoneNumber, t.authorizationToken, c, n, r]),
                                h = E.a.useCallback((function() {
                                    if (t.authorizationToken) {
                                        he.a.async((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return g({
                                                        status: null,
                                                        message: null
                                                    }), u(!0), e.next = 4, he.a.awrap(Object(Ge.g)({
                                                        token: t.authorizationToken || ""
                                                    }));
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), null, null, null, Promise)
                                    }
                                }), [t.authorizationToken]),
                                v = E.a.useCallback((function() {
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
                                register: o.register,
                                onSubmit: y,
                                onClickBack: v,
                                onClickResendSms: h,
                                wasSmsResent: l,
                                isSmsVerificationCodeResponsePending: d,
                                setWasSmsResent: u,
                                verificationStatus: j,
                                form: o
                            }
                        }(),
                        o = c.register,
                        i = c.wasSmsResent,
                        s = c.setWasSmsResent,
                        l = c.onSubmit,
                        u = c.verificationStatus,
                        b = c.onClickBack,
                        p = c.onClickResendSms,
                        d = c.isSmsVerificationCodeResponsePending,
                        f = c.form;
                    return E.a.useEffect((function() {
                        if (i) {
                            var e = setTimeout((function() {
                                return s(!1)
                            }), 1e4);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                    }), [s, i]), Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            padding: "0 20px",
                            width: "100%"
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, n.ONLY_TABLET, {
                            marginBottom: 30
                        }), e), "")
                    }, Object(N.b)(Re.FormContext, f, Object(N.b)("form", {
                        onSubmit: f.handleSubmit(l)
                    }, Object(N.b)("label", {
                        css: Ot
                    }, Object(N.b)("span", {
                        css: Object(h.a)(Object(y.a)({
                            fontWeight: "bold",
                            fontSize: 14,
                            display: "inline"
                        }, n.FROM_TABLET, {
                            fontSize: 18,
                            display: "block"
                        }), "")
                    }, "Wpisz kod SMS", " "), "wys\u0142any na numer", " ", Object(N.b)("span", {
                        css: mt
                    }, r.phoneNumber)), Object(N.b)(Ie.a, {
                        name: "sms",
                        ref: o,
                        variant: "STARDUST",
                        placeholder: "Kod SMS",
                        type: "tel",
                        wrapperCss: {
                            marginTop: 20
                        }
                    }), "ERROR" === u.status && u.message && Object(N.b)("div", {
                        css: Object(h.a)({
                            color: a.DANGER,
                            display: "flex",
                            marginTop: 10
                        }, "")
                    }, Object(N.b)(le.a, {
                        name: "warn",
                        css: jt
                    }), Object(N.b)("p", {
                        css: gt,
                        dangerouslySetInnerHTML: {
                            __html: u.message
                        }
                    })), Object(N.b)("p", {
                        css: Object(h.a)({
                            fontSize: 14,
                            margin: "10px 0 0 0",
                            color: i ? a.DOVE : "inherit"
                        }, "")
                    }, "SMS nie dotar\u0142?", Object(N.b)(T.AButton, {
                        css: yt,
                        onClick: p,
                        disabled: i
                    }, "Wy\u015blij ponownie kod SMS")), i && Object(N.b)("div", {
                        css: ht
                    }, Object(N.b)(le.a, {
                        name: "info-icon",
                        css: Object(h.a)({
                            width: 20,
                            height: 20,
                            color: a.INFO
                        }, "")
                    }), Object(N.b)("p", {
                        css: vt
                    }, "SMS zosta\u0142 wys\u0142any ponownie")), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            flexFlow: "wrap",
                            marginTop: 40
                        }, n.FROM_TABLET, {
                            flexFlow: "nowrap"
                        }), "")
                    }, Object(N.b)(T.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: b,
                        css: Object(h.a)(Object(y.a)({
                            flex: 1,
                            marginBottom: 20,
                            flexBasis: "100%"
                        }, n.FROM_TABLET, {
                            marginRight: 20,
                            marginBottom: 0,
                            flexBasis: "50%"
                        }), ""),
                        disabled: d
                    }, "Wstecz"), Object(N.b)(T.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_WHITE",
                        disabled: d,
                        css: Object(h.a)(Object(y.a)({
                            flex: 1,
                            flexBasis: "100%"
                        }, n.FROM_TABLET, {
                            flexBasis: "50%"
                        }), "")
                    }, "Dalej")))))
                }));
            Et.displayName = "PhoneNumberVerification";
            var Tt = n("NYeV");
            E.a.createElement;
            var St = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                Ct = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                wt = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                xt = E.a.memo((function() {
                    var e, t = Object(T.useTheme)().bp,
                        n = function() {
                            var e = $e(),
                                t = e.dispatch,
                                n = e.authorizationData,
                                a = Object(S.b)().dispatch,
                                r = Object(Tt.a)(),
                                c = E.a.useState(!1),
                                o = Object(C.a)(c, 2),
                                i = o[0],
                                s = o[1],
                                l = E.a.useRef();
                            return {
                                onSuccessEvent: E.a.useCallback((function(e) {
                                    var c;
                                    return he.a.async((function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                if (n.pesel && e.cityId) {
                                                    o.next = 2;
                                                    break
                                                }
                                                return o.abrupt("return");
                                            case 2:
                                                return o.prev = 2, o.next = 5, he.a.awrap(Object(Ge.d)({
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
                                                        return he.a.async((function(o) {
                                                            for (;;) switch (o.prev = o.next) {
                                                                case 0:
                                                                    if (i = 1e13, n = Math.floor(Math.random() * i), r.current) {
                                                                        o.next = 3;
                                                                        break
                                                                    }
                                                                    return o.abrupt("return");
                                                                case 3:
                                                                    return o.prev = 3, o.next = 6, he.a.awrap(Object(Ge.b)(n).then((function(n) {
                                                                        s(!0);
                                                                        var a = (new Date).getTime() - c > 6e4;
                                                                        if ("pending" !== n && l.current && (clearTimeout(l.current), s(!1), t({
                                                                                type: "setConfigValue",
                                                                                payload: {
                                                                                    key: "isUserAuthenticated",
                                                                                    value: !0
                                                                                }
                                                                            })), "pending" !== n || a || (l.current = window.setTimeout(e, 1e3)), a && l.current) throw clearTimeout(l.current), s(!1), new Error
                                                                    })));
                                                                case 6:
                                                                    o.next = 12;
                                                                    break;
                                                                case 8:
                                                                    o.prev = 8, o.t0 = o.catch(3), s(!1), a({
                                                                        type: "setProcessError",
                                                                        payload: {
                                                                            type: "MNP_UNABLE_TO_PROCESS"
                                                                        }
                                                                    });
                                                                case 12:
                                                                case "end":
                                                                    return o.stop()
                                                            }
                                                            var i
                                                        }), null, null, [
                                                            [3, 8]
                                                        ], Promise)
                                                    }(), o.next = 14;
                                                break;
                                            case 10:
                                                o.prev = 10, o.t0 = o.catch(2), s(!1), a({
                                                    type: "setProcessError",
                                                    payload: {
                                                        type: "MNP_UNABLE_TO_PROCESS"
                                                    }
                                                });
                                            case 14:
                                            case "end":
                                                return o.stop()
                                        }
                                    }), null, null, [
                                        [2, 10]
                                    ], Promise)
                                }), [t, n.pesel, a, r]),
                                onBackEvent: E.a.useCallback((function() {
                                    l.current && clearTimeout(l.current), t({
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
                                isPending: i,
                                pesel: n.pesel
                            }
                        }(),
                        a = n.onSuccessEvent,
                        r = n.onBackEvent,
                        c = n.isPending,
                        o = n.pesel;
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            padding: "0 20px",
                            width: "100%"
                        }, Object(y.a)(e, t.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), Object(y.a)(e, t.ONLY_TABLET, {
                            marginBottom: 30
                        }), e), "")
                    }, !c && Object(N.b)(E.a.Fragment, null, Object(N.b)("p", {
                        css: St
                    }, "Wpisz adres"), Object(N.b)("p", {
                        css: Ct
                    }, "Tw\xf3j numer PESEL", " ", Object(N.b)("strong", null, o && function(e) {
                        var t = e.substring(0, 2),
                            n = e.substring(9);
                        return "".concat(t, "*******").concat(n)
                    }(o), " ", Object(N.b)(T.AButton, {
                        variant: "ON_LIGHT_BACKGROUND",
                        onClick: r,
                        css: wt
                    }, "zmie\u0144")))), Object(N.b)(Me, {
                        onSuccess: a,
                        onBack: r,
                        isPending: c,
                        isLocalRequired: !1
                    }))
                }));
            xt.displayName = "PeselVerification";
            E.a.createElement;
            var kt = function() {
                    var e = $e().authorizationData;
                    return Object(N.b)(E.a.Fragment, null, "EMAIL" === e.type && Object(N.b)(dt, null), "PHONE_NUMBER" === e.type && Object(N.b)(Et, null), "PESEL" === e.type && Object(N.b)(xt, null))
                },
                Pt = (E.a.createElement, E.a.memo((function() {
                    var e = Object(S.b)().dispatch,
                        t = $e(),
                        n = t.authorizationData,
                        a = t.isUserAuthenticated;
                    return E.a.useEffect((function() {
                        a && e({
                            type: "setAutorizationData",
                            payload: {
                                phoneNumber: n.phoneNumber || "",
                                isUserAuthenticated: a
                            }
                        })
                    }), [e, a, n.phoneNumber]), "COMMON_FORM" === n.currentStep ? Object(N.b)(rt, null) : "VERIFICATION" === n.currentStep ? Object(N.b)(kt, null) : null
                })));
            Pt.displayName = "Main";
            E.a.createElement;
            var It = {
                    title: "Logowanie",
                    subtitle: "Zaloguj si\u0119, \u017ceby zobaczy\u0107 jakie oferty dla Ciebie przygotowali\u015bmy",
                    description: ""
                },
                Rt = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                At = {
                    name: "8kn4zf",
                    styles: "margin-top:0;"
                },
                Nt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                zt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Lt = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                _t = E.a.memo((function() {
                    var e, t, n, a = Object(T.useTheme)(),
                        r = a.colors,
                        c = a.bp,
                        o = Object(k.a)(),
                        i = $e().authorizationData,
                        s = Object(S.b)(),
                        l = s.currentProcess,
                        u = s.currentOffer,
                        b = It;
                    return l && l.authorizationInfo && (b = "COMMON_FORM" === i.currentStep ? l.authorizationInfo.start : l.authorizationInfo.token), b ? o ? Object(N.b)("div", null, u && Object(N.b)("strong", {
                        css: Object(h.a)({
                            color: r.ORANGE_DARK,
                            display: "inline-block",
                            padding: "0 20px",
                            marginBottom: 10
                        }, "")
                    }, u.name), Object(N.b)("section", {
                        role: "region",
                        css: Rt
                    }, Object(N.b)("h2", {
                        css: At
                    }, b.title), Object(N.b)("p", {
                        css: Nt
                    }, b.subtitle), Object(N.b)("p", {
                        css: zt
                    }, b.description))) : Object(N.b)("section", {
                        role: "region",
                        css: Object(h.a)((e = {
                            padding: 20,
                            width: 400
                        }, Object(y.a)(e, c.FROM_TABLET, {
                            padding: 0
                        }), Object(y.a)(e, c.ONLY_TABLET, {
                            maxWidth: 400,
                            marginTop: 10
                        }), e), "")
                    }, Object(N.b)("h2", {
                        css: Object(h.a)((t = {
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
                    }, b.title), Object(N.b)("p", {
                        css: Object(h.a)((n = {
                            fontSize: 14
                        }, Object(y.a)(n, c.FROM_TABLET, {
                            fontSize: 16
                        }), Object(y.a)(n, c.FROM_DESKTOP, {
                            fontSize: 18
                        }), n), "")
                    }, b.subtitle), Object(N.b)("p", {
                        css: Lt
                    }, b.description)) : null
                })),
                Mt = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children;
                    return Object(N.b)(Qe, null, t)
                }))),
                Dt = n("XTXV");

            function Ft(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Bt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ft(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ft(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Vt = n("KcfE");
            E.a.createElement;
            var Ut = {
                    name: "hebtfk",
                    styles: "display:flex;margin:10px 0;padding:0 1px;width:100%;"
                },
                Ht = {
                    name: "epvm6",
                    styles: "white-space:nowrap;"
                },
                Gt = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        a = e.currentOffer,
                        r = function(e) {
                            return e ? e.loyaltyLength : null
                        },
                        c = Object(S.b)().internalID,
                        o = E.a.useMemo((function() {
                            return Array.from(new Set(t.map(r)))
                        }), [t]),
                        i = E.a.useCallback((function(e) {
                            n("length", r, e)
                        }), [n]);
                    E.a.useEffect((function() {
                        i(r(a || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [a, t, i]);
                    var s = E.a.useCallback((function(e) {
                        i(parseInt(e.target.value, 10))
                    }), [i]);
                    return Object(N.b)("div", null, Object(N.b)("h5", null, Object(N.b)("strong", null, "Umowa")), Object(N.b)("div", {
                        css: Ut
                    }, o.map((function(e, t) {
                        return Object(N.b)(T.Toggle, {
                            checked: !!a && a.loyaltyLength === e,
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
                        }, null !== e && Object(N.b)("span", {
                            css: Ht
                        }, function(e) {
                            return 0 === e || e >= 9999 ? "Bezterminowa" : "".concat(e, " ").concat(Object(Vt.a)(["miesi\u0105c", "miesi\u0105ce", "miesi\u0119cy"], e))
                        }(e)))
                    }))))
                })),
                Wt = n("obcW"),
                Kt = n("IdR4"),
                qt = n("D2/y"),
                Yt = n("yr6+"),
                Xt = function() {
                    var e = Object(S.b)(),
                        t = e.currentSingleOffer,
                        n = e.shouldUseDiscounts,
                        a = e.singleOffers,
                        r = E.a.useState(n),
                        c = Object(C.a)(r, 2),
                        o = c[0],
                        i = c[1];
                    if (E.a.useEffect((function() {
                            i(!!a.find((function(e) {
                                var t = Object(Yt.f)(e),
                                    n = Object(Yt.a)(e);
                                return !((null === t || void 0 === t ? void 0 : t.productCharacteristic.showDiscountSwitch) || (null === n || void 0 === n ? void 0 : n.productCharacteristic.showDiscountSwitch)) && ((null === t || void 0 === t ? void 0 : t.productCharacteristic.hasDiscount) || (null === n || void 0 === n ? void 0 : n.productCharacteristic.hasDiscount))
                            })) || n)
                        }), [n, a]), !t) return {
                        showDiscountSwitch: !0,
                        hasDiscount: !1,
                        hasAnyOfferDiscount: !1,
                        isSelectedOfferWithDiscount: !1
                    };
                    var s = Object(de.a)(t.offerType),
                        l = Object(Yt.f)(t),
                        u = Object(Yt.a)(t),
                        b = s && ((null === l || void 0 === l ? void 0 : l.productCharacteristic.showDiscountSwitch) || (null === u || void 0 === u ? void 0 : u.productCharacteristic.showDiscountSwitch) || !1),
                        p = s && ((null === l || void 0 === l ? void 0 : l.productCharacteristic.hasDiscount) || (null === u || void 0 === u ? void 0 : u.productCharacteristic.hasDiscount) || !1);
                    return {
                        showDiscountSwitch: b,
                        hasDiscount: p,
                        hasAnyOfferDiscount: o,
                        isSelectedOfferWithDiscount: !b && p || n && b
                    }
                },
                Zt = (E.a.createElement, function(e) {
                    var t = e.distinction,
                        n = e.children,
                        a = e.wrapperCss,
                        r = Object(_.a)(e, ["distinction", "children", "wrapperCss"]),
                        c = r.checked,
                        o = Object(T.useTheme)(),
                        i = o.colors,
                        s = o.zIndex;
                    return Object(N.b)("div", {
                        css: Object(h.a)([{
                            position: "relative"
                        }, a], "")
                    }, t && Object(N.b)(Jt, Object(A.a)({}, t, {
                        isChecked: c
                    })), Object(N.b)(T.Toggle, Object(A.a)({}, r, {
                        contentCss: {
                            backgroundColor: i.WHITE,
                            zIndex: s.LAYER_2
                        }
                    }), n))
                }),
                Jt = function(e) {
                    var t = e.iconType,
                        n = e.textColor,
                        a = e.isChecked,
                        r = e.backgroundColor,
                        c = e.backgroundHoverColor,
                        o = e.textHoverColor,
                        i = Object(T.useTheme)(),
                        s = i.colors,
                        l = i.zIndex,
                        u = i.bp;
                    return Object(N.b)("div", {
                        style: {
                            backgroundColor: a ? s[c] : s[r]
                        },
                        css: Object(h.a)(Object(y.a)({
                            width: 24,
                            height: 28,
                            top: -24,
                            right: 0,
                            padding: 5,
                            zIndex: l.LAYER_1,
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
                        }, u.FROM_TABLET, {
                            right: 1
                        }), "")
                    }, t && Object(N.b)(le.a, {
                        name: t,
                        color: a ? s[o] : s[n]
                    }))
                },
                Qt = function(e) {
                    return function(t) {
                        return t && (Object(Yt.d)(t).features.config[0].value.distinctedVariants || []).find((function(t) {
                            return t.type === e
                        })) || null
                    }
                },
                $t = function(e) {
                    var t = e.length < 1,
                        n = 1 === e.length,
                        a = e.length > 2,
                        r = n ? 1 : Math.floor(e.length / 2),
                        c = e.findIndex((function(e) {
                            return Boolean(e.distinction)
                        }));
                    return !(t || n || c < 0) && (a ? c < 1 ? r - c > 0 : c < 2 ? r - c - 1 >= 0 : r - c - 1 > 0 : c < r)
                };
            E.a.createElement;
            var en = {
                    name: "h9yv4t",
                    styles: "display:flex;justify-content:space-between;align-items:baseline;"
                },
                tn = {
                    name: "7sn97l",
                    styles: "margin-top:10px;margin-bottom:0;"
                },
                nn = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                an = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        a = e.currentOffer,
                        r = Object(S.b)(),
                        c = r.isB2B,
                        o = r.internalID,
                        i = r.offerType,
                        s = r.showNetPrices,
                        l = r.shouldUseDiscounts,
                        u = Xt().showDiscountSwitch,
                        b = E.a.useCallback((function(e) {
                            if (e) {
                                var t = e.tieredPriceList[0];
                                return s ? t.baseNetPrice : t.basePrice
                            }
                            return null
                        }), [s]),
                        p = E.a.useCallback((function(e) {
                            if (!e) return null;
                            var t = e.tieredPriceList[0];
                            if (u) return l ? s ? t.finalNetPrice : t.finalPrice : null;
                            var n = s ? t.finalNetPrice : t.finalPrice;
                            return n !== (s ? t.baseNetPrice : t.basePrice) ? n : null
                        }), [l, u, s]),
                        d = Qt("PRICE"),
                        f = E.a.useCallback((function(e) {
                            return {
                                price: b(e),
                                discount: p(e),
                                distinction: d(e)
                            }
                        }), [b, p, d]),
                        O = E.a.useMemo((function() {
                            var e = t.map(f).filter((function(e) {
                                return Boolean(e.price)
                            }));
                            return Object(qt.a)(e, "price")
                        }), [t, f]),
                        m = E.a.useCallback((function(e) {
                            n("price", b, e)
                        }), [n, b]);
                    E.a.useEffect((function() {
                        m(b(a || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [a, t, m, b]);
                    var j = E.a.useCallback((function(e) {
                            m(e.target.value)
                        }), [m]),
                        g = $t(O) || c;
                    return Object(N.b)("div", null, Object(N.b)("div", {
                        css: en
                    }, Object(N.b)("h5", {
                        css: tn
                    }, Object(N.b)("strong", null, "DATA" === i ? "Internet mobilny: " : "VOICE" === i ? "Abonament kom\xf3rkowy: " : "Abonament: ")), s && Object(N.b)("span", {
                        css: nn
                    }, " Ceny nie zawieraj\u0105 VAT")), Object(N.b)("div", {
                        css: Object(h.a)({
                            display: "flex",
                            margin: "10px 0",
                            padding: "0 1px",
                            width: "100%",
                            marginTop: g ? 30 : void 0
                        }, "")
                    }, O.map((function(e, t) {
                        return Object(N.b)(Zt, {
                            distinction: e.distinction,
                            checked: b(a) === e.price || !1,
                            key: "PriceToggle_".concat(e.price, "-").concat(t),
                            value: e.price || void 0,
                            onChange: j,
                            name: "priceValue-".concat(o),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, Object(N.b)("div", null, Object(N.b)(rn, {
                            discount: e.discount
                        }), Object(N.b)("span", {
                            css: Object(h.a)({
                                whiteSpace: "nowrap",
                                textDecoration: e.discount ? "line-through" : void 0
                            }, "")
                        }, Object(Kt.a)(e.price, {
                            integersWithFractionDigits: !0
                        }), " ", "z\u0142")))
                    }))))
                })),
                rn = E.a.memo((function(e) {
                    var t = e.discount,
                        n = Object(T.useTheme)().colors,
                        a = P(t),
                        r = Boolean(t),
                        c = t || a || 0,
                        o = Object(Wt.useTransition)(r, {
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
                    return Object(N.b)(E.a.Fragment, null, o((function(e, t) {
                        return Object(N.b)(E.a.Fragment, null, t && Object(N.b)(Wt.animated.div, {
                            style: e,
                            css: Object(h.a)({
                                color: n.ORANGE_DARK
                            }, "")
                        }, Object(Kt.a)(c, {
                            integersWithFractionDigits: !0
                        }), " ", "z\u0142"))
                    })))
                }));
            E.a.createElement;
            var cn = {
                    name: "epvm6",
                    styles: "white-space:nowrap;"
                },
                on = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        a = e.currentOffer,
                        r = Object(S.b)().internalID,
                        c = Qt("INTERNET_SPEED"),
                        o = E.a.useCallback((function(e) {
                            if (e) {
                                var t = Object(Yt.c)(e),
                                    n = Object(Yt.b)(e);
                                return (null === t || void 0 === t ? void 0 : t.features.config[0].value.downloadSpeed) || (null === t || void 0 === t ? void 0 : t.productCharacteristic.bitrate) || (null === n || void 0 === n ? void 0 : n.productCharacteristic.downloadSpeed) || null
                            }
                            return null
                        }), []),
                        i = E.a.useCallback((function(e) {
                            return e ? {
                                value: o(e),
                                distinction: c(e)
                            } : {
                                value: null,
                                distinction: null
                            }
                        }), [o, c]),
                        s = E.a.useMemo((function() {
                            return Object(qt.a)(t.map(i).filter((function(e) {
                                return !!e
                            })), "value")
                        }), [i, t]),
                        l = E.a.useCallback((function(e) {
                            n("internetSpeed", o, e)
                        }), [o, n]);
                    E.a.useEffect((function() {
                        l(o(a || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [t, a, l, o]);
                    var u = E.a.useCallback((function(e) {
                            l(e.target.value)
                        }), [l]),
                        b = $t(s);
                    return Object(N.b)("div", null, Object(N.b)("h5", null, Object(N.b)("strong", null, "Internet domowy")), Object(N.b)("div", {
                        css: Object(h.a)({
                            display: "flex",
                            margin: "10px 0",
                            padding: "0 1px",
                            width: "100%",
                            marginTop: b ? 30 : void 0
                        }, "")
                    }, s.map((function(e, t) {
                        return Object(N.b)(Zt, {
                            distinction: e.distinction,
                            checked: o(a) === e.value || !1,
                            key: e.value || t,
                            value: e.value || void 0,
                            onChange: u,
                            name: "internetSpeedValue-".concat(r),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, Object(N.b)("div", null, Object(N.b)("span", {
                            css: cn
                        }, e.value && ("string" === typeof(n = e.value) ? n : n / 1024 < 1024 ? "".concat(n / 1024, " Mb/s") : "".concat(n / 1024 / 1024, " Gb/s")))));
                        var n
                    }))))
                }));
            E.a.createElement;
            var sn = {
                    name: "kr6vjg",
                    styles: "font-weight:normal;text-align:center;"
                },
                ln = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        a = e.currentOffer,
                        r = Object(S.b)(),
                        c = r.internalID,
                        o = r.isB2B,
                        i = Object(T.useTheme)().bp,
                        s = Qt("PACKET"),
                        l = E.a.useCallback((function(e) {
                            if (e) {
                                var t = e.tieredPriceList[0].basePrice;
                                return {
                                    Name: Object(Yt.d)(e).features.config[0].value.Name || "",
                                    price: t,
                                    distinction: s(e)
                                }
                            }
                            return null
                        }), [s]),
                        u = E.a.useCallback((function(e) {
                            var t = l(e);
                            return t ? t.Name : null
                        }), [l]),
                        b = E.a.useMemo((function() {
                            return Object(qt.a)(t.map(l).filter((function(e) {
                                return !!e
                            })), "Name")
                        }), [l, t]),
                        p = E.a.useCallback((function(e) {
                            n("packet", u, e)
                        }), [u, n]);
                    E.a.useEffect((function() {
                        p(u(a || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [t, a, p, u]);
                    var d = E.a.useCallback((function(e) {
                            p(e.target.value)
                        }), [p]),
                        f = $t(b);
                    return Object(N.b)("div", null, Object(N.b)("h5", null, Object(N.b)("strong", null, "Pakiety Orange Love")), Object(N.b)("div", {
                        css: Object(h.a)({
                            display: "flex",
                            margin: "10px 0",
                            padding: "0 1px",
                            width: "100%",
                            marginTop: f ? 30 : void 0
                        }, "")
                    }, b.map((function(e, t) {
                        return Object(N.b)(Zt, {
                            distinction: e.distinction,
                            checked: u(a) === e.Name || !1,
                            key: e.Name || t,
                            value: e.Name || void 0,
                            onChange: d,
                            name: "packet-".concat(c),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, Object(N.b)("div", {
                            css: Object(h.a)({
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                p: Object(y.a)({
                                    fontSize: 12,
                                    lineHeight: "14px",
                                    margin: 0
                                }, i.FROM_TABLET, {
                                    fontSize: 14,
                                    lineHeight: "16px"
                                })
                            }, "")
                        }, Object(N.b)("p", null, e.Name), !o && Object(N.b)("p", {
                            css: sn
                        }, e.price, " z\u0142")))
                    }))))
                })),
                un = function(e) {
                    return e.offerType
                };
            E.a.createElement;
            var bn = {
                    FIX1P: "Internet",
                    FIX3P: "Internet z TV"
                },
                pn = {
                    name: "hebtfk",
                    styles: "display:flex;margin:10px 0;padding:0 1px;width:100%;"
                },
                dn = {
                    name: "epvm6",
                    styles: "white-space:nowrap;"
                },
                fn = E.a.memo((function(e) {
                    var t = e.offers,
                        n = e.setValue,
                        a = e.currentOffer,
                        r = Object(S.b)().internalID,
                        c = E.a.useMemo((function() {
                            return Array.from(new Set(t.map(un)))
                        }), [t]),
                        o = E.a.useCallback((function(e) {
                            n("offerType", un, e)
                        }), [n]);
                    E.a.useEffect((function() {
                        a && o(un(a || t.find((function(e) {
                            return e.isDefault
                        })) || t[0]))
                    }), [a, t, o]);
                    var i = E.a.useCallback((function(e) {
                        o(e.target.value)
                    }), [o]);
                    return a ? Object(N.b)("div", null, Object(N.b)("h5", null, Object(N.b)("strong", null, "Oferta")), Object(N.b)("div", {
                        css: pn
                    }, c.map((function(e, t) {
                        return Object(N.b)(T.Toggle, {
                            checked: a.offerType === e,
                            key: t,
                            value: e,
                            onChange: i,
                            name: "offerType-".concat(r),
                            wrapperCss: {
                                flex: 1,
                                "&:not(:last-of-type)": {
                                    marginRight: 10
                                }
                            }
                        }, e && Object(N.b)("span", {
                            css: dn
                        }, bn[e]))
                    })))) : null
                }));
            E.a.createElement;
            var On = {
                    MOBILE: {
                        elements: [{
                            Component: Gt,
                            type: "filter"
                        }, {
                            Component: an,
                            type: "variant"
                        }]
                    },
                    CONVERGENT: {
                        elements: [{
                            Component: Gt,
                            type: "filter"
                        }, {
                            Component: on,
                            type: "filter"
                        }, {
                            Component: ln,
                            type: "variant"
                        }]
                    },
                    FIX: {
                        elements: [{
                            Component: fn,
                            type: "filter"
                        }, {
                            Component: Gt,
                            type: "filter"
                        }, {
                            Component: on,
                            type: "variant"
                        }]
                    }
                },
                mn = {
                    name: "squb4n",
                    styles: "margin-botom:20px;:last-of-type{margin-bottom:10px;}"
                },
                jn = E.a.memo((function() {
                    var e = Object(S.b)(),
                        t = e.singleOffers,
                        n = e.currentSingleOffer,
                        a = e.dispatch,
                        r = e.offerType,
                        c = function(e, t) {
                            var n = E.a.useState({}),
                                a = Object(C.a)(n, 2),
                                r = a[0],
                                c = a[1],
                                o = E.a.useState({}),
                                i = Object(C.a)(o, 2),
                                s = i[0],
                                l = i[1],
                                u = E.a.useCallback((function(e, t, n) {
                                    c((function(a) {
                                        return Bt({}, a, Object(y.a)({}, e, {
                                            getter: t,
                                            value: n
                                        }))
                                    }))
                                }), []),
                                b = E.a.useCallback((function(e, t, n) {
                                    l((function(a) {
                                        return Bt({}, a, Object(y.a)({}, e, {
                                            getter: t,
                                            value: n
                                        }))
                                    }))
                                }), []),
                                p = E.a.useMemo((function() {
                                    return Object.values(r).reduce((function(e, t) {
                                        return e.filter((function(e) {
                                            return t.getter(e) === t.value
                                        }))
                                    }), e)
                                }), [e, r]),
                                d = E.a.useMemo((function() {
                                    return 0 === Object.values(s).length ? t || p.find((function(e) {
                                        return e.isDefault
                                    })) || p[0] || null : Object.values(s).reduce((function(e, t) {
                                        return e.filter((function(e) {
                                            return String(t.getter(e)) === String(t.value)
                                        }))
                                    }), p)[0] || p[0]
                                }), [p, t, s]);
                            return {
                                setFilter: u,
                                filters: r,
                                offers: p,
                                currentOffer: d,
                                variants: s,
                                setVariant: b
                            }
                        }(t, n);
                    E.a.useEffect((function() {
                        !c.currentOffer || !c.currentOffer.propositionId || n && n.propositionId === c.currentOffer.propositionId || a({
                            type: "setCurrentSingleOffer",
                            payload: c.currentOffer
                        })
                    }), [c.currentOffer, a]);
                    var o = function(e) {
                            return Object.entries({
                                MOBILE: ["DATA", "DATA_LDF", "VOICE"],
                                CONVERGENT: ["CONVERGENT4U"],
                                FIX: ["FIX1P", "FIX3P"]
                            }).map((function(t) {
                                var n = Object(C.a)(t, 2),
                                    a = n[0],
                                    r = n[1];
                                return (null === r || void 0 === r ? void 0 : r.includes(e)) ? a : void 0
                            })).find(Boolean) || "MOBILE"
                        }(r),
                        i = On[o];
                    return i ? Object(N.b)(E.a.Fragment, null, i.elements.map((function(e, a) {
                        var r = e.Component,
                            o = e.type;
                        return Object(N.b)("div", {
                            key: a,
                            css: mn
                        }, Object(N.b)(r, {
                            offers: "filter" === o ? t : c.offers,
                            setValue: "filter" === o ? c.setFilter : c.setVariant,
                            currentOffer: n
                        }))
                    }))) : null
                })),
                gn = n("48NU");
            E.a.createElement;
            var yn = {
                    name: "o5uqvq",
                    styles: "margin-left:5px;"
                },
                hn = E.a.memo((function() {
                    var e = Object(T.useTheme)().colors,
                        t = Object(S.b)(),
                        n = t.dispatch,
                        a = t.isB2B,
                        r = t.shouldUseDiscounts,
                        c = Xt().showDiscountSwitch,
                        o = E.a.useCallback((function(e) {
                            n({
                                type: "setShouldUseDiscounts",
                                payload: e.target.checked
                            })
                        }), [n]);
                    return c ? Object(N.b)("div", {
                        css: Object(h.a)({
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
                    }, a && Object(N.b)("div", null, Object(N.b)("strong", null, "Poka\u017c rabaty ", Object(N.b)(T.Break, {
                        mobile: !0,
                        tablet: !1,
                        desktop: !1
                    }), "na kolejne karty SIM"), Object(N.b)(gn.a, {
                        content: "Zaznacz je\u017celi posiadasz ju\u017c przynajmniej jedn\u0105 us\u0142ug\u0119 mobiln\u0105 w Orange i pragniesz kupi\u0107 lub przed\u0142u\u017cy\u0107 umow\u0119 dla kolejnej us\u0142ugi"
                    }, Object(N.b)("span", {
                        css: yn
                    }, Object(N.b)(le.a, {
                        name: "question-mark",
                        css: Object(h.a)({
                            width: 16,
                            height: 16,
                            verticalAlign: -3
                        }, "")
                    })))), !a && Object(N.b)("div", null, Object(N.b)("strong", null, "Poka\u017c rabaty ", Object(N.b)(T.Break, {
                        mobile: !0,
                        tablet: !1,
                        desktop: !1
                    }), "na kolejne karty SIM (20 z\u0142/mies.)")), Object(N.b)(T.Switch, {
                        title: r ? "Ukryj zni\u017cki" : "Poka\u017c zni\u017cki",
                        name: "client_discounts",
                        onChange: o,
                        defaultChecked: r
                    })) : null
                }));
            E.a.createElement;
            var vn = {
                    name: "1xzc8zn",
                    styles: "margin-bottom:20px;display:flex;align-items:flex-end;"
                },
                En = {
                    name: "1gtey1t",
                    styles: "font-size:14px;margin:0;"
                },
                Tn = {
                    name: "m75dnw",
                    styles: "margin-left:6px;"
                },
                Sn = E.a.memo((function() {
                    var e = Object(S.b)(),
                        t = e.currentSingleOffer,
                        n = e.doesPhoneLineExist,
                        a = e.dispatch;
                    E.a.useEffect((function() {
                        a({
                            type: "setDoesPhoneLineExist",
                            payload: !!n
                        })
                    }), [a, n]);
                    var r = E.a.useCallback((function(e) {
                        a({
                            type: "setDoesPhoneLineExist",
                            payload: e.target.checked
                        })
                    }), [a]);
                    if (!t) return null;
                    var c = Object(Yt.b)(t);
                    return (null === c || void 0 === c ? void 0 : c.productCharacteristic.isLineMaintenance) ? Object(N.b)("div", {
                        css: vn
                    }, Object(N.b)(T.Checkbox, {
                        name: "phone-line",
                        defaultChecked: !!n,
                        onChange: r
                    }, "Posiadam lini\u0119 telefoniczn\u0105. ", Object(N.b)("br", null), " Zap\u0142acisz mniej o", Object(N.b)("strong", null, " 10,00 z\u0142/mies.")), Object(N.b)(gn.a, {
                        content: Object(N.b)("p", {
                            css: En
                        }, "Je\u015bli pod wskazanym adresem masz telefon domowy od Orange, obni\u017cymy Tw\xf3j abonament za Orange Love o 10 z\u0142/mies.")
                    }, Object(N.b)("span", {
                        css: Tn
                    }, Object(N.b)(le.a, {
                        name: "question-mark",
                        css: Object(h.a)({
                            width: 16,
                            height: 16,
                            verticalAlign: -3
                        }, "")
                    })))) : null
                })),
                Cn = n("fGyu");
            E.a.createElement, E.a.createElement;
            var wn = {
                name: "1cev0y9",
                styles: "margin:0;font-size:14px;"
            };
            E.a.createElement;
            var xn = {
                    name: "o5uqvq",
                    styles: "margin-left:5px;"
                },
                kn = {
                    name: "1h2nb6m",
                    styles: "font-size:12px;font-weight:normal;margin-top:3px;"
                },
                Pn = function(e) {
                    var t = e.legalText,
                        n = e.name,
                        a = e.description,
                        r = e.isDistinct,
                        c = e.shortDescription,
                        o = e.value,
                        i = Object(T.useTheme)().colors,
                        s = Object(S.b)(),
                        l = s.offerType,
                        u = s.currentSingleOffer,
                        b = Object(de.a)(l);
                    return E.a.useMemo((function() {
                        return !!u && "Mini" === Object(Yt.d)(u).features.config[0].value.Name
                    }), [u]) && ("Telefon domowy" === n || "Telefon domowy" === o) ? null : Object(N.b)("li", {
                        css: Object(h.a)({
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: 15,
                            "&:not(:last-of-type)": {
                                borderBottom: "1px solid ".concat(i.CHROME),
                                padding: "15px 0"
                            },
                            "&:first-of-type": {
                                paddingTop: 0
                            }
                        }, "")
                    }, Object(N.b)("span", {
                        css: Object(h.a)({
                            fontSize: 12,
                            marginBottom: b ? 0 : 5,
                            fontWeight: b ? "normal" : "bold"
                        }, "")
                    }, n), Object(N.b)("div", null, Object(N.b)("strong", {
                        css: Object(h.a)({
                            color: r ? i.ORANGE_DARK : ""
                        }, "")
                    }, o), a && Object(N.b)(gn.a, {
                        content: a
                    }, Object(N.b)("span", {
                        css: xn
                    }, Object(N.b)(le.a, {
                        name: "question-mark",
                        css: Object(h.a)({
                            width: 16,
                            height: 16,
                            verticalAlign: -2
                        }, "")
                    })))), c && Object(N.b)("span", {
                        css: kn
                    }, c), t && Object(N.b)("span", {
                        css: Object(h.a)({
                            fontSize: 12,
                            fontWeight: "normal",
                            marginTop: 3,
                            color: i.DOVE
                        }, "")
                    }, t))
                },
                In = (E.a.createElement, n("/G5g")),
                Rn = (E.a.createElement, function(e) {
                    var t = e.action,
                        n = e.children,
                        a = Object(_.a)(e, ["action", "children"]),
                        r = Object(S.b)().dispatch,
                        c = {
                            OPEN_SUFLER_SUMMARY: function(e) {
                                r({
                                    type: "setSummaryData",
                                    payload: e.content
                                }), r({
                                    type: "showOfferDetails",
                                    payload: !0
                                })
                            }
                        };
                    return Object(N.b)(E.a.Fragment, null, !t && Object(N.b)("div", a, n), t && Object(N.b)(In.a, Object(A.a)({}, a, {
                        action: t,
                        actionsMap: c
                    }), n))
                }),
                An = (E.a.createElement, {
                    BLACK: {
                        textColor: "WHITE",
                        backgroundColor: "BLACK",
                        distinctColor: "ORANGE_DARK"
                    }
                }),
                Nn = E.a.memo((function(e) {
                    var t = e.variant,
                        n = e.type,
                        a = e.header,
                        r = e.content,
                        c = e.action,
                        o = Object(T.useTheme)().colors,
                        i = An[t] || "BLACK",
                        s = o[i.textColor],
                        l = o[i.backgroundColor],
                        u = o[i.distinctColor],
                        b = {
                            width: 14,
                            height: 14,
                            verticalAlign: -3,
                            marginLeft: 6,
                            color: s
                        };
                    return Object(N.b)(Rn, {
                        action: c,
                        css: Object(h.a)({
                            padding: "10px 15px",
                            marginTop: 20,
                            backgroundColor: l,
                            borderRadius: 6,
                            strong: {
                                color: u
                            }
                        }, "")
                    }, Object(N.b)("h4", {
                        css: Object(h.a)({
                            fontSize: 14,
                            marginBottom: 2,
                            color: s
                        }, "")
                    }, Object(N.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: a.text
                        }
                    }), a.tooltip && Object(N.b)(gn.a, {
                        content: a.tooltip
                    }, Object(N.b)("span", null, Object(N.b)(le.a, {
                        name: "question-mark",
                        css: b
                    })))), Object(N.b)("ul", {
                        css: Object(h.a)(["LIST" === n && {
                            listStyle: "disc",
                            marginLeft: 15
                        }], "")
                    }, r.map((function(e, t) {
                        var n = e.text,
                            a = e.tooltip;
                        return Object(N.b)("li", {
                            key: t,
                            css: Object(h.a)({
                                padding: "2px 0",
                                fontSize: 12,
                                color: u
                            }, "")
                        }, Object(N.b)("span", {
                            css: Object(h.a)({
                                color: s
                            }, ""),
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        }), a && Object(N.b)(gn.a, {
                            content: a
                        }, Object(N.b)("span", null, Object(N.b)(le.a, {
                            name: "question-mark",
                            css: b
                        }))))
                    }))))
                })),
                zn = {
                    HTML: function(e) {
                        var t = e.value,
                            n = Object(_.a)(e, ["value"]);
                        return Object(N.b)("div", Object(A.a)({
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        }, n))
                    },
                    PRICE_DESCRIPTION: function(e) {
                        var t = e.priceDescription,
                            n = e.process;
                        return Object(S.b)().processType !== n ? null : Object(N.b)("p", {
                            css: wn,
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })
                    },
                    FEATURE_LIST: function(e) {
                        var t = e.value;
                        return Object(N.b)(E.a.Fragment, null, t.map((function(e, t) {
                            return Object(N.b)(Pn, Object(A.a)({}, e, {
                                key: t
                            }))
                        })))
                    },
                    FEATURE: Pn,
                    BANNER: Nn
                },
                Ln = n("OS0P");
            E.a.createElement;
            var _n = {
                    name: "17kn5dq",
                    styles: "margin-top:20px;width:100%;"
                },
                Mn = E.a.memo((function() {
                    var e = Object(S.b)().currentSingleOffer,
                        t = E.a.useMemo((function() {
                            if (!e) return [];
                            var t = Object(Yt.d)(e).features.boxFeatures || [],
                                n = Object(Cn.a)(t),
                                a = Object(Ln.a)(Object(Ln.b)(e));
                            return Boolean(a.find((function(e) {
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
                    return Object(N.b)("ul", {
                        css: _n
                    }, t.map((function(e, t) {
                        var n = zn[e.type];
                        return n && Object(N.b)(n, Object(A.a)({}, e.value, {
                            key: t
                        }))
                    })))
                }));
            E.a.createElement;
            var Dn = {
                    name: "1al9uig",
                    styles: "width:16px;height:16px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);"
                },
                Fn = E.a.memo((function(e) {
                    var t = e.children,
                        n = e.onClick,
                        a = Object(T.useTheme)(),
                        r = a.colors,
                        c = a.bp;
                    return Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            borderTop: "1px solid ".concat(r.CHROME),
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
                    }, Object(N.b)("button", {
                        type: "button",
                        css: Object(h.a)({
                            background: "none",
                            position: "relative",
                            border: "1px solid ".concat(r.CHROME),
                            borderRadius: "50%",
                            cursor: "pointer",
                            width: 40,
                            height: 40
                        }, ""),
                        onClick: n
                    }, Object(N.b)(le.a, {
                        name: "plus-1",
                        css: Dn
                    })), Object(N.b)(T.AButton, {
                        css: Object(h.a)(Object(y.a)({
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
            var Bn = {
                    name: "in3yi3",
                    styles: "font-weight:bold;"
                },
                Vn = E.a.memo((function(e) {
                    var t = e.children,
                        n = e.buttonText,
                        a = void 0 === n ? "Dodaj" : n,
                        r = e.linkText,
                        c = e.onClick,
                        o = Object(T.useTheme)(),
                        i = o.bp,
                        s = o.colors;
                    return Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            fontWeight: "bold",
                            display: "flex",
                            flexDirection: "column",
                            padding: "15px 20px",
                            marginTop: 20,
                            borderRadius: 4,
                            border: "1px dashed ".concat(s.CHROME)
                        }, i.FROM_TABLET, {
                            flexDirection: "row"
                        }), "")
                    }, Object(N.b)("div", {
                        css: Object(h.a)({
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            strong: {
                                color: s.ORANGE_DARK
                            }
                        }, "")
                    }, t, Object(N.b)(T.AButton, {
                        css: Bn,
                        onClick: c
                    }, r)), Object(N.b)(Fn, {
                        onClick: c
                    }, a))
                }));
            Vn.displayName = "Extras";
            E.a.createElement;
            var Un = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                Hn = {
                    name: "p8la30",
                    styles: "margin:0;font-size:18px;padding:5px 0 15px 0;"
                },
                Gn = E.a.memo((function() {
                    var e = Object(S.b)(),
                        t = e.dispatch,
                        n = e.currentSingleOffer,
                        a = e.selectedOtherPackages,
                        r = E.a.useCallback((function() {
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
                            var e = Object(Ln.a)(Object(Ln.b)(n)).filter((function(e) {
                                return !["sfh", "activation"].includes(e.id)
                            }));
                            return e.length > 0 ? e : []
                        }), [n]),
                        o = a ? a.filter((function(e) {
                            return !["sfh", "activation"].includes(e.id)
                        })) : c.filter((function(e) {
                            return e.defaultSelected
                        })),
                        i = E.a.useMemo((function() {
                            var e = (o ? Object(Cn.a)(o) : c.filter((function(e) {
                                return e.defaultSelected
                            }))).map((function(e) {
                                return e.name
                            })).join(", ");
                            return e.length > 45 && (e = e.slice(0, 45).concat("...")), e
                        }), [o, c]),
                        s = o ? o.length : c.filter((function(e) {
                            return e.defaultSelected
                        })).length;
                    return c.length < 1 ? null : Object(N.b)(Vn, {
                        linkText: "Lista us\u0142ug i urz\u0105dze\u0144",
                        onClick: r
                    }, Object(N.b)("h4", {
                        css: Un
                    }, "Us\u0142ugi i urz\u0105dzenia ", Object(N.b)("strong", null, s), " z", " ", c.length), Object(N.b)("p", {
                        css: Hn
                    }, i && i))
                }));
            E.a.createElement;
            var Wn = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                Kn = {
                    name: "p8la30",
                    styles: "margin:0;font-size:18px;padding:5px 0 15px 0;"
                },
                qn = E.a.memo((function() {
                    var e = Object(S.b)(),
                        t = e.dispatch,
                        n = e.currentSingleOffer,
                        a = e.selectedTVPackages,
                        r = E.a.useCallback((function() {
                            t({
                                type: "setPackageConfiguratorType",
                                payload: "CHANNELS"
                            }), t({
                                type: "showTVConfigurator",
                                payload: !0
                            })
                        }), [t]);
                    if (!n) return null;
                    var c = Object(Yt.e)(n);
                    if (!c) return null;
                    var o = c.productCharacteristic,
                        i = o.channelsHDQuantity,
                        s = o.channelsSDQuantity;
                    return Object(N.b)(Vn, {
                        linkText: "Lista pakiet\xf3w TV",
                        onClick: r
                    }, Object(N.b)("h4", {
                        css: Wn
                    }, "Pakiety telewizyjne ", Object(N.b)("strong", null, null === a || void 0 === a ? void 0 : a.length)), Object(N.b)("p", {
                        css: Kn
                    }, Object(N.b)("strong", null, i + s), " ", Object(Vt.a)(["kana\u0142", "kana\u0142y", "kana\u0142\xf3w"], i + s), " ", "(w tym ", Object(N.b)("strong", null, i), " HD)"))
                }));
            qn.displayName = "TVExtras";
            E.a.createElement;
            var Yn = E.a.memo((function() {
                    var e = Object(V.c)().configuratorInFIX,
                        t = Object(S.b)(),
                        n = t.currentSingleOffer,
                        a = t.offerType,
                        r = ("FIX1P" === a || "FIX3P" === a) && !e,
                        c = n && "CONVERGENT4U" === a && 9999 === n.loyaltyLength;
                    return !n || c || r ? null : Object(N.b)(E.a.Fragment, null, Object(N.b)(qn, null), Object(N.b)(Gn, null))
                })),
                Xn = n("2OAT"),
                Zn = n("Bit+"),
                Jn = n("pu3o"),
                Qn = n.n(Jn),
                $n = n("th3f"),
                ea = n("Bc8N"),
                ta = function() {
                    var e = Object(S.b)(),
                        t = e.currentSingleOffer,
                        n = e.doesPhoneLineExist,
                        a = e.selectedOtherPackages,
                        r = e.selectedTVPackages,
                        c = e.showNetPrices,
                        o = e.offerPackages,
                        i = Xt().isSelectedOfferWithDiscount;
                    return {
                        priceSteps: E.a.useMemo((function() {
                            if (!t) return null;
                            var e = t.tieredPriceList.map((function(e) {
                                var n, a = t.offerType,
                                    r = e.finalNetPrice,
                                    o = e.finalPrice,
                                    s = e.baseNetPrice,
                                    l = e.basePrice,
                                    u = e.endCycle,
                                    b = e.startCycle,
                                    p = c ? r : o,
                                    d = c ? i ? r : s : i ? o : l;
                                return {
                                    price: null !== (n = "FIX" === Object(ce.a)(a) ? p : d) && void 0 !== n ? n : l,
                                    monthTo: u,
                                    monthFrom: b,
                                    currency: "z\u0142"
                                }
                            }));
                            if (a) {
                                var s = a.map((function(e) {
                                    return e.payments
                                })).flat();
                                e = [].concat(Object(Cn.a)(e), Object(Cn.a)(s))
                            }
                            if (r) {
                                var l = r.map((function(e) {
                                    return e.payments
                                })).flat();
                                e = [].concat(Object(Cn.a)(e), Object(Cn.a)(l))
                            }
                            if (n && e.push({
                                    price: -10,
                                    monthTo: null,
                                    monthFrom: 1,
                                    currency: "z\u0142"
                                }), !(null === a || void 0 === a ? void 0 : a.some((function(e) {
                                    return "activation" === e.id
                                })))) {
                                var u = o.find((function(e) {
                                    return "activation" === e.id
                                }));
                                if (u && u.prices) {
                                    var b = u.prices[0];
                                    e.push({
                                        price: b.price,
                                        monthFrom: b.monthFrom,
                                        monthTo: b.monthTo,
                                        currency: b.currency
                                    })
                                }
                            }
                            return Object(ea.a)(e)
                        }), [t, a, r, n, c, i, o]),
                        pricePlan: E.a.useMemo((function() {
                            if (!t) return "0";
                            var e = t.tieredPriceList[0],
                                n = e.basePrice,
                                a = e.finalPrice;
                            return (i && a ? a : n).toString()
                        }), [t, i])
                    }
                },
                na = n("mNrh"),
                aa = {
                    ERROR_1: "Nie wybra\u0142e\u015b paczki z us\u0142ug\u0105. Dodaj 1 paczk\u0119 i zatwierd\u017a wyb\xf3r, by przej\u015b\u0107 dalej.",
                    ERROR_2: "Nie masz wybranych paczek us\u0142ug. Dodaj 2 paczki i zatwierd\u017a wyb\xf3r, by przej\u015b\u0107 dalej.",
                    ERROR_3: "Nie masz wybranych paczek us\u0142ug. Dodaj 3 paczki i zatwierd\u017a wyb\xf3r, by przej\u015b\u0107 dalej."
                },
                ra = function() {
                    var e = Object(S.b)(),
                        t = e.dispatch,
                        n = e.offerType,
                        a = e.processType,
                        r = e.isUserLoggedWithCAAP,
                        c = e.localizationData,
                        o = e.currentSingleOffer,
                        i = e.shouldUseDiscounts,
                        s = e.selectedTVPackages,
                        l = e.selectedOtherPackages,
                        u = e.selectedPackages,
                        b = e.doesPhoneLineExist,
                        p = e.isB2B,
                        d = e.hasSelectedAccount,
                        f = e.currentStep,
                        O = e.isUserLogged,
                        m = Object(R.b)().market,
                        j = Object(ot.c)().dispatch,
                        g = ta().pricePlan,
                        y = Object($n.a)(),
                        h = y.addItemToCart,
                        v = y.isPending,
                        T = function() {
                            var e = Object(S.b)(),
                                t = e.offerType,
                                n = e.processType,
                                a = e.localizationData,
                                r = e.authorizationData,
                                c = e.currentSingleOffer,
                                o = e.id,
                                i = Xt().hasAnyOfferDiscount,
                                s = Object(R.b)().market,
                                l = E.a.useCallback((function() {
                                    if (c) {
                                        var e = Object(Yt.f)(c),
                                            a = Object(Yt.a)(c),
                                            o = e || a;
                                        if (!o) return null;
                                        I.b.setItem("offerType", t), I.b.setItem("selectedLoyaltyDuration", String(c.loyaltyLength)), I.b.setItem("processType", n), I.b.setItem("rateplanId", o.productCharacteristic.rateplanId), I.b.setItem("selectedPropositionId", c.propositionId), I.b.setItem("LastViewedOfferPage", window.location.pathname), I.b.setItem("convergence", String(i)), I.b.setItem("serviceplan", o.productCharacteristic.rateplanBaseProductId), I.b.setItem("verifiedMsisdn", JSON.stringify({
                                            context: {
                                                market: s,
                                                offer: t,
                                                process: n
                                            },
                                            value: r ? r.phoneNumber : ""
                                        }))
                                    }
                                }), [r, c, s, t, n, i]),
                                u = E.a.useCallback((function() {
                                    var e = {
                                            id: o,
                                            offerType: t,
                                            currentStep: "SUMMARY"
                                        },
                                        n = "".concat(window.location.pathname, "?offerSelectorComponent=").concat(btoa(JSON.stringify(e)));
                                    I.a.setItem("suflerRedirectUrl", n)
                                }), [o, t]);
                            return {
                                setSessionStorageData: l,
                                setLocalStorageParams: E.a.useCallback((function() {
                                    var e = Qn.a.stringify(a);
                                    I.a.setItem("OPL-prompterWWT_address", '{"componentUid":"WWT_NewLove","boxID":"love-offer","formType":"DETAILED","leadAddressForm":"'.concat(e, '"}'))
                                }), [a]),
                                setSuflerRedirectUrl: u
                            }
                        }(),
                        w = T.setSessionStorageData,
                        x = T.setLocalStorageParams,
                        k = T.setSuflerRedirectUrl,
                        P = E.a.useState(!1),
                        A = Object(C.a)(P, 2),
                        N = A[0],
                        z = A[1],
                        L = Object(V.c)().suflerSummaryB2B,
                        _ = E.a.useState(null),
                        M = Object(C.a)(_, 2),
                        D = M[0],
                        F = M[1],
                        B = Object(na.a)(o),
                        U = B.allowedPackagesCount,
                        H = B.selectedPackagesWeight,
                        W = E.a.useCallback((function() {
                            return !(p && !L) && (n && Object(Xn.a)(p, n))
                        }), [p, L, n]);
                    E.a.useEffect((function() {
                        F(null)
                    }), [o, u]);
                    var K = E.a.useCallback((function() {
                            return !(!p || "VOICE" !== n || U === H) && (F(aa["ERROR_".concat(U)]), !0)
                        }), [U, p, n, H, F]),
                        q = E.a.useCallback((function() {
                            if (o && n && a && !K()) {
                                var e = Object(Yt.d)(o);
                                z(v), t({
                                    type: "setShouldVerifyDiscount",
                                    payload: !1
                                }), t({
                                    type: "setIsSuflerProcessing",
                                    payload: !0
                                }), Object(G.b)(e.features.config[0].value.Name, o.propositionId, g, a, n, m), Object(G.c)(f, n, m, O, window.location.pathname, "ADD_TO_CART", a), "RETENTION" !== a && (r || i) ? r || !i ? !r || d || p ? r ? h() : (t({
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
                                }) : h()
                            }
                        }), [o, n, a, v, t, g, m, f, O, r, i, d, p, h, K]),
                        Y = E.a.useCallback((function() {
                            if (o && n && a && !K()) {
                                var e = Object(Yt.f)(o),
                                    r = Object(Yt.a)(o),
                                    c = (null === e || void 0 === e ? void 0 : e.productCharacteristic.rateplanBaseProductId) || (null === r || void 0 === r ? void 0 : r.productCharacteristic.rateplanBaseProductId);
                                t({
                                    type: "setIsSuflerProcessing",
                                    payload: !0
                                }), w(), W() && k();
                                var i = "".concat("B2C" === m ? "/sklep" : "/male-firmy/sklep", "?").concat(Qn.a.stringify({
                                        offerType: n,
                                        loyalty: o.loyaltyLength,
                                        processType: a,
                                        selectedPropositionId: o.propositionId,
                                        serviceplan: c,
                                        isDuet: W()
                                    })),
                                    s = null === u || void 0 === u ? void 0 : u.map((function(e) {
                                        return {
                                            propositionId: e.offerId,
                                            vases: e.packages.map((function(e) {
                                                return e.code
                                            }))
                                        }
                                    }));
                                Array.isArray(s) && s.length && (i += "&selectedVases=".concat(JSON.stringify(s))), window.location.href = i, Object(G.c)(f, n, m, O, window.location.pathname, "ADD_DEVICE", a)
                            }
                        }), [o, n, a, t, w, m, W, f, O, K, u, k]),
                        X = E.a.useCallback((function(e) {
                            var t, n, r;
                            return he.a.async((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        if (t = e.hasDevice, c && a && o) {
                                            i.next = 3;
                                            break
                                        }
                                        return i.abrupt("return");
                                    case 3:
                                        if ("ACTIVATION" === a || "RETENTION" === a) {
                                            i.next = 5;
                                            break
                                        }
                                        return i.abrupt("return");
                                    case 5:
                                        return z(!0), x(), n = Object(Yt.e)(o), r = !!n, i.abrupt("return", Object(Ne.b)({
                                            hasDevice: t,
                                            hasTv: r,
                                            selectedTVPackages: s,
                                            selectedOtherPackages: l,
                                            currentSingleOffer: o,
                                            processType: a,
                                            doesPhoneLineExist: b
                                        }));
                                    case 10:
                                    case "end":
                                        return i.stop()
                                }
                            }), null, null, null, Promise)
                        }), [c, a, o, x, s, l, b]),
                        Z = E.a.useCallback((function() {
                            var e;
                            return he.a.async((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return t({
                                            type: "setIsSuflerProcessing",
                                            payload: !0
                                        }), r.next = 3, he.a.awrap(X({
                                            hasDevice: !1
                                        }));
                                    case 3:
                                        e = r.sent, Object(G.c)(f, n, m, O, window.location.pathname, "ADD_TO_CART", a), e && (window.location.href = e.data ? e.data.nextPageUrl : "/love/danedoumowy"), t({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        });
                                    case 7:
                                    case "end":
                                        return r.stop()
                                }
                            }), null, null, null, Promise)
                        }), [t, X, f, n, m, O, a]),
                        J = E.a.useCallback((function() {
                            var e;
                            return he.a.async((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!K()) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 2:
                                        return t({
                                            type: "setIsSuflerProcessing",
                                            payload: !0
                                        }), r.next = 5, he.a.awrap(X({
                                            hasDevice: !0
                                        }));
                                    case 5:
                                        (e = r.sent) && (window.location.href = e.data ? e.data.nextPageUrl : "/love/konfigurator"), t({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        }), Object(G.c)(f, n, m, O, window.location.pathname, "ADD_DEVICE", a);
                                    case 9:
                                    case "end":
                                        return r.stop()
                                }
                            }), null, null, null, Promise)
                        }), [K, t, X, f, n, m, O, a]);
                    return {
                        errorMessage: D,
                        isResponsePending: N,
                        addToCartFix: E.a.useCallback((function() {
                            var e;
                            return he.a.async((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (o) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 2:
                                        return e = o.propositionId, r.prev = 3, Object(G.c)(f, n, m, O, window.location.pathname, "ADD_TO_CART", a), t({
                                            type: "setIsSuflerProcessing",
                                            payload: !0
                                        }), r.next = 8, he.a.awrap(Object(Ne.a)({
                                            propositionId: e
                                        }));
                                    case 8:
                                        j({
                                            type: "setCartItemsCount",
                                            payload: 0
                                        }), j({
                                            type: "setCartItemsCount",
                                            payload: 1
                                        }), I.b.setItem("LastViewedOfferPage", window.location.href), window.location.href = "/koszyk/multi", r.next = 18;
                                        break;
                                    case 14:
                                        r.prev = 14, r.t0 = r.catch(3), t({
                                            type: "setIsSuflerProcessing",
                                            payload: !1
                                        }), t({
                                            type: "setProcessError",
                                            payload: {
                                                type: "ADD_TO_CART_ERROR",
                                                data: r.t0
                                            }
                                        });
                                    case 18:
                                    case "end":
                                        return r.stop()
                                }
                            }), null, null, [
                                [3, 14]
                            ], Promise)
                        }), [o, f, t, j, O, m, n, a]),
                        addToCartLead: Z,
                        addToCartMobile: q,
                        addDeviceLead: J,
                        addDeviceMobile: Y
                    }
                };
            E.a.createElement;
            var ca = {
                    name: "1hprwxc",
                    styles: "display:flex;margin-top:10px;"
                },
                oa = {
                    name: "f41v6m",
                    styles: "margin-top:0;font-size:14px;font-weight:bold;"
                },
                ia = E.a.memo((function() {
                    var e = Object(T.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        a = Object(V.c)().loveCMB,
                        r = Object(S.b)(),
                        c = r.offerType,
                        o = r.processType,
                        i = r.currentSingleOffer,
                        s = r.isB2B,
                        l = r.isUserLogged,
                        u = r.currentStep,
                        b = r.deviceVariantId,
                        p = Object(R.b)().market,
                        d = ra(),
                        f = d.errorMessage,
                        O = d.isResponsePending,
                        m = d.addDeviceLead,
                        j = d.addDeviceMobile,
                        g = d.addToCartFix,
                        v = d.addToCartLead,
                        C = d.addToCartMobile,
                        w = Object(V.c)().suflerSummaryB2B;
                    if (!i || !c) return null;
                    var x = Object(de.a)(c),
                        k = Object(ce.a)(c),
                        P = "LEAD" === k,
                        I = "MOBILE" === k,
                        A = P && a,
                        z = !A && P || I,
                        L = I ? C : P ? v : g,
                        _ = I ? j : m,
                        M = s && !w || !c || !Object(Xn.a)(s, c) ? "Dodaj do koszyka" : "Dalej",
                        D = {
                            id: x ? "".concat(o, "_dodaj_do_koszyka_button") : "".concat(c, "_zamow_bez_telefonu_button"),
                            action: "",
                            type: "BUTTON",
                            text: M,
                            title: M,
                            variant: "PRIMARY_ON_WHITE"
                        },
                        F = b ? "Zmie\u0144 urz\u0105dzenie" : "Dobierz urz\u0105dzenie",
                        B = {
                            id: "".concat(o, "_dobierz_").concat(x ? "urzadzenie" : "telefon", "_button"),
                            action: "",
                            type: "BUTTON",
                            text: F,
                            title: F,
                            variant: "SECONDARY_BLACK_OUTLINE"
                        };
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 20
                        }, t.FROM_TABLET, {
                            flexDirection: "row"
                        }), "")
                    }, !A && Object(N.b)(Zn.a, {
                        action: D,
                        disabled: O,
                        onClick: L,
                        css: Object(h.a)(Object(y.a)({
                            flexGrow: 1
                        }, t.FROM_TABLET, {
                            flexBasis: "50%"
                        }), "")
                    }), A && Object(N.b)(Zn.a, {
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
                            Object(G.c)(u, c, p, l, window.location.pathname, "SEND_CMB", o)
                        }
                    }), z && Object(N.b)(Zn.a, {
                        action: B,
                        disabled: O,
                        onClick: _,
                        css: Object(h.a)(Object(y.a)({
                            flexGrow: 1,
                            marginTop: 10
                        }, t.FROM_TABLET, {
                            margin: "0 0 0 10px",
                            flexBasis: "51%"
                        }), "")
                    })), f && Object(N.b)("div", {
                        css: ca
                    }, Object(N.b)(le.a, {
                        name: "warn",
                        css: Object(h.a)({
                            color: n.DANGER,
                            height: 20,
                            marginRight: 10,
                            minWidth: 20,
                            width: 20
                        }, "")
                    }), Object(N.b)("p", {
                        css: oa
                    }, f)))
                })),
                sa = n("BVF/"),
                la = n("5FZF");
            E.a.createElement;
            var ua = {
                    name: "1q7njkh",
                    styles: "margin-top:10px;"
                },
                ba = {
                    name: "h8laae",
                    styles: "font-size:14px;font-weight:bold;"
                },
                pa = E.a.memo((function(e) {
                    var t = e.steps,
                        n = Object(T.useTheme)().colors,
                        a = Object(S.b)().showNetPrices;
                    return Object(N.b)("div", {
                        css: ua
                    }, t.map((function(e, t) {
                        return Object(N.b)("div", {
                            key: t
                        }, Object(N.b)("div", {
                            css: Object(h.a)({
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
                        }, e.monthTo === e.monthFrom && 0 === e.monthTo && Object(N.b)("p", null, "Op\u0142aty jednorazowe"), e.monthTo === e.monthFrom && 0 !== e.monthTo && Object(N.b)("p", null, "W ", Object(la.a)(e.monthTo, "N"), " miesi\u0105cu"), e.monthTo !== e.monthFrom && Object(N.b)("p", null, "Od ", e.monthFrom, " do ", e.monthTo, " miesi\u0105ca"), Object(N.b)("p", {
                            css: ba
                        }, Object(N.b)("span", null, Object(Kt.a)(e.price), " z\u0142", a && 0 !== e.price && "+ VAT"))))
                    })))
                }));
            E.a.createElement;
            var da = {
                    name: "1qfe2y1",
                    styles: "margin:0;font-size:12px;margin-right:auto;"
                },
                fa = E.a.memo((function() {
                    var e = Object(T.useTheme)().colors,
                        t = Object(ot.c)().isNavbarCollapsed,
                        n = Object(S.b)(),
                        a = n.showNetPrices,
                        r = n.isSuflerMainInView,
                        c = n.isSuflerDescriptionInView,
                        o = n.shouldShowTVConfigurator,
                        i = n.isInApp,
                        s = ta().priceSteps,
                        l = Object(T.useLayer)().level > 0,
                        u = !c && r || o,
                        b = s && s.all.length > 1 || !1;
                    return Object(N.b)(sa.a.Wrapper, {
                        shouldBeVisible: u,
                        top: i ? 20 : l ? 60 : t ? 60 : 90,
                        isExpandable: b
                    }, Object(N.b)(sa.a.Header, null, Object(N.b)("p", {
                        css: da
                    }, "Aktualna cena:"), s && Object(N.b)("p", {
                        css: Object(h.a)({
                            margin: 0,
                            fontSize: 14,
                            marginRight: 10,
                            color: e.ORANGE_DARK
                        }, "")
                    }, s.last.price && Object(Kt.a)(s.last.price), " ", "z\u0142/mies.", a && " + VAT")), s && Object(N.b)(sa.a.Content, null, Object(N.b)(pa, {
                        steps: s.all
                    })))
                }));
            E.a.createElement;
            var Oa = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                ma = {
                    name: "1ww6zew",
                    styles: "width:18px;height:18px;flex-shrink:0;"
                },
                ja = {
                    name: "10va27z",
                    styles: "font-size:12px;line-height:16px;padding:0 10px;margin:0;"
                },
                ga = E.a.memo((function(e) {
                    var t = e.text,
                        n = Object(T.useTheme)().colors;
                    return Object(N.b)("div", {
                        css: Oa
                    }, Object(N.b)(le.a, {
                        name: "info-icon",
                        color: n.INFO,
                        css: ma
                    }), Object(N.b)("p", {
                        css: ja,
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                }));
            ga.displayName = "DiscountTextWrapper";
            E.a.createElement;
            var ya = {
                    name: "1s70fdt",
                    styles: "font-size:12px;line-height:16px;padding:0px 10px 10px;margin:0;"
                },
                ha = E.a.memo((function() {
                    var e = Object(T.useTheme)(),
                        t = e.colors,
                        n = e.bp,
                        a = Object(S.b)(),
                        r = a.currentSingleOffer,
                        c = a.shouldUseDiscounts,
                        o = Xt(),
                        i = o.showDiscountSwitch,
                        s = o.hasDiscount;
                    if (!r) return null;
                    var l = Object(Yt.d)(r).features.discountFeatures || [],
                        u = null === l || void 0 === l ? void 0 : l.find((function(e) {
                            return "DISCOUNT_DESCRIPTION" === e.type
                        }));
                    if (!u) return null;
                    var b = u.value,
                        p = !!s && (!i || i && c),
                        d = p && b.discountTitle ? b.discountTitle : b.title,
                        f = p && b.discountDescription ? b.discountDescription : b.description;
                    return f ? Object(N.b)(T.Expander, {
                        headerCss: {
                            display: "flex",
                            flexDirection: "row-reverse"
                        },
                        title: Object(N.b)(ga, {
                            text: d
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
                    }, Object(N.b)("p", {
                        dangerouslySetInnerHTML: {
                            __html: f
                        }
                    })) : Object(N.b)("div", {
                        css: Object(h.a)({
                            display: "flex",
                            paddingTop: 5,
                            marginBottom: 10,
                            borderBottom: "1px solid ".concat(t.CHROME)
                        }, "")
                    }, Object(N.b)(le.a, {
                        name: "info-icon",
                        color: t.INFO,
                        css: Object(h.a)(Object(y.a)({
                            width: 16,
                            height: 16,
                            flexShrink: 0
                        }, n.FROM_TABLET, {
                            width: 18,
                            height: 18
                        }), "")
                    }), Object(N.b)("p", {
                        css: ya,
                        dangerouslySetInnerHTML: {
                            __html: d
                        }
                    }))
                }));
            ha.displayName = "DiscountFeature";
            var va = n("PdAJ"),
                Ea = function() {
                    var e = Object(S.b)().dispatch;
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
            var Ta = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                Sa = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Ca = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                wa = {
                    name: "p8la30",
                    styles: "margin:0;font-size:18px;padding:5px 0 15px 0;"
                },
                xa = E.a.memo((function() {
                    var e = Object(T.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        a = Object(S.b)(),
                        r = a.currentSingleOffer,
                        c = a.isB2B,
                        o = a.offerType,
                        i = Ea().show,
                        s = Object(V.c)().additionalPackages,
                        l = Object(na.a)(r),
                        u = l.allowedPackagesCount,
                        b = l.selectedPackages,
                        p = l.selectedPackagesWeight,
                        d = "VOICE" === o || "VOICE_LDF" === o,
                        f = E.a.useCallback((function() {
                            i("ADDITIONAL_PACKAGES_GROUP")
                        }), [i]);
                    if (!c || !r || !d || !s || !u) return null;
                    var O = Object(va.b)(r, "ADDITIONAL_PACKAGES_GROUP"),
                        m = (null === b || void 0 === b ? void 0 : b.filter((function(e) {
                            return e.groupCode === (null === O || void 0 === O ? void 0 : O.code)
                        })).map((function(e) {
                            return null === O || void 0 === O ? void 0 : O.additionals.find((function(t) {
                                return t.code === e.code
                            }))
                        }))).map((function(e) {
                            var t, n;
                            return null === e || void 0 === e ? void 0 : null === (t = e.features.packageFeatures[0]) || void 0 === t ? void 0 : null === (n = t.value) || void 0 === n ? void 0 : n.title
                        })),
                        j = u === p ? "Zmie\u0144" : "Dodaj";
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)("div", {
                        css: Object(h.a)({
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                            strong: {
                                color: n.ORANGE_DARK
                            }
                        }, "")
                    }, Object(N.b)("strong", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 36,
                            lineHeight: "38px",
                            marginRight: 10,
                            display: "none"
                        }, t.FROM_TABLET, {
                            display: "block"
                        }), "")
                    }, u), Object(N.b)("div", {
                        css: Ta
                    }, Object(N.b)("strong", {
                        css: Object(h.a)(Object(y.a)({}, t.FROM_TABLET, {
                            fontSize: 14
                        }), "")
                    }, Object(N.b)("span", {
                        css: Object(h.a)(Object(y.a)({}, t.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }, u, "\xa0"), Object(Vt.a)(["paczka", "paczki", "paczki"], u), " do wyboru w ramach abonamentu"), Object(N.b)("span", {
                        css: Sa
                    }, "Mo\u017cesz ", Object(Vt.a)(["j\u0105", "je", "je"], u), " zmieni\u0107 za darmo co miesi\u0105c."))), Object(N.b)(Vn, {
                        buttonText: j,
                        linkText: "Lista paczek",
                        onClick: f
                    }, Object(N.b)("h4", {
                        css: Ca
                    }, Object(Vt.a)(["Paczka", "Paczki", "Paczki"], p), " ", Object(N.b)("strong", null, p), " z ", u), Object(N.b)("p", {
                        css: wa
                    }, p ? m.join(", ") : "Wybierz ".concat(Object(Vt.a)(["paczk\u0119", "paczki", "paczki"], u)))))
                }));
            xa.displayName = "AdditionalPackages";
            var ka = n("IBuz"),
                Pa = n("VGOs");
            E.a.createElement;
            var Ia = {
                    name: "1kizcr5",
                    styles: "display:flex;height:100%;justify-content:center;"
                },
                Ra = function() {
                    var e = Object(T.useTheme)().bp,
                        t = Object(ka.b)().current.context,
                        n = t.details,
                        a = t.selectedVariantSet;
                    if (!n) return null;
                    var r = (null === a || void 0 === a ? void 0 : a.imageUrl) || "";
                    return Object(N.b)("div", {
                        css: Ia
                    }, Object(N.b)("img", {
                        css: Object(h.a)(Object(y.a)({
                            maxWidth: 100
                        }, e.FROM_DESKTOP, {
                            maxWidth: 130
                        }), ""),
                        src: r,
                        alt: n.name
                    }))
                };
            Ra.displatName = "Gallery";
            E.a.createElement;
            var Aa = {
                    name: "b7r3gq",
                    styles: "font-size:12px;font-weight:bold;line-height:1;margin:5px 0 10px;"
                },
                Na = {
                    name: "1nvf5u9",
                    styles: "text-transform:lowercase;"
                },
                za = function() {
                    var e = Object(T.useTheme)().colors,
                        t = Object(ka.b)().current.context,
                        n = t.details,
                        a = t.selectedVariants;
                    return n ? Object(N.b)(E.a.Fragment, null, n.product.items.map((function(t, n) {
                        var r = t.code,
                            c = t.name;
                        return Object(N.b)(E.a.Fragment, {
                            key: n
                        }, Object(N.b)("strong", {
                            css: Object(h.a)({
                                color: e.ORANGE_DARK,
                                fontSize: 18
                            }, "")
                        }, c), Object(N.b)("p", {
                            css: Aa
                        }, "Kolor:", " ", Object(N.b)("span", {
                            css: Na
                        }, a[r].colorName)))
                    }))) : null
                };
            za.displayName = "Details";
            var La = n("Lksv");
            E.a.createElement;
            var _a = {
                    name: "1ylu0bo",
                    styles: "display:flex;flex-direction:column;flex-grow:1;"
                },
                Ma = function() {
                    var e = Object(k.a)(),
                        t = Object(T.useTheme)().bp,
                        n = Object(ka.b)().current.context.details;
                    if (!n) return null;
                    var a = n.product.items.length > 1,
                        r = e ? a ? "column" : "row" : "row-reverse";
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)(T.Separator, null), Object(N.b)("div", {
                        css: Object(h.a)({
                            display: "flex",
                            flexDirection: r,
                            margin: "20px 0"
                        }, "")
                    }, Object(N.b)(Ra, null), a && Object(N.b)(T.ArrowSeparator, {
                        css: Object(h.a)(Object(y.a)({
                            margin: "20px 0 25px"
                        }, t.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }), Object(N.b)("div", {
                        css: _a
                    }, Object(N.b)(za, null), !a && Object(N.b)(La.a, {
                        withDescriptions: !1
                    }))), a && Object(N.b)(E.a.Fragment, null, Object(N.b)(T.ArrowSeparator, {
                        css: Object(h.a)(Object(y.a)({
                            margin: "20px 0 25px"
                        }, t.ONLY_MOBILE, {
                            display: "none"
                        }), "")
                    }), Object(N.b)(La.a, {
                        withDescriptions: !1
                    })))
                };
            Ma.displayName = "Summary";
            E.a.createElement;
            var Da = {
                    name: "64c21g",
                    styles: "min-height:100px;position:relative;"
                },
                Fa = function() {
                    var e = Object(ka.b)().current;
                    return Object(N.b)("div", {
                        css: Da
                    }, e.matches("loading") && Object(N.b)(Pa.a, {
                        width: 30,
                        height: 30
                    }), e.matches("success") && Object(N.b)(Ma, null))
                };
            Fa.displayName = "Content";
            E.a.createElement;
            var Ba = E.a.memo((function(e) {
                return Object(N.b)(ka.a, e, Object(N.b)(Fa, null))
            }));
            Ba.displayName = "SummarySection";
            E.a.createElement;
            var Va = function() {
                var e = Object(S.b)(),
                    t = e.currentSingleOffer,
                    n = e.deviceBaseId,
                    a = e.deviceVariantId;
                return n ? Object(N.b)(Ba, {
                    baseId: n,
                    variantId: a,
                    propositionId: null === t || void 0 === t ? void 0 : t.propositionId
                }) : null
            };
            Va.displayName = "ChosenDevice";
            E.a.createElement;
            var Ua = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                Ha = function() {
                    var e = Object(S.b)().dispatch,
                        t = E.a.useCallback((function(t) {
                            e({
                                type: "isSuflerMainInView",
                                payload: !!t
                            })
                        }), [e]);
                    return Object(N.b)(Dt.a, {
                        onChange: t,
                        rootMargin: "-160px"
                    }, Object(N.b)("div", {
                        css: Ua
                    }, Object(N.b)(fa, null), Object(N.b)(Va, null), Object(N.b)(hn, null), Object(N.b)(jn, null), Object(N.b)(ha, null), Object(N.b)(xa, null), Object(N.b)(Sn, null), Object(N.b)(Mn, null), Object(N.b)(Yn, null), Object(N.b)(ia, null)))
                };
            E.a.createElement;
            var Ga = {
                    name: "y99kjm",
                    styles: "height:65vh;"
                },
                Wa = {
                    name: "11n5lnj",
                    styles: "margin:50px auto;top:50%;transform:translateY(-50%);"
                },
                Ka = function() {
                    return Object(N.b)("div", {
                        css: Ga
                    }, Object(N.b)(T.Loader, {
                        css: Wa
                    }))
                },
                qa = (E.a.createElement, E.a.memo((function() {
                    var e = Object(S.b)(),
                        t = function(e, t, n, a) {
                            return e || t && !a && !n ? Ka : Ha
                        }(e.isLoadingSingleOffersList, e.isSuflerProcessing, e.shouldShowPackagesConfigurator, e.shouldShowTVConfigurator);
                    return Object(N.b)(t, null)
                })));
            qa.displayName = "Main";
            E.a.createElement;
            var Ya = {
                    name: "b5jhqk",
                    styles: "margin-right:10px;display:inline-block;"
                },
                Xa = {
                    name: "hp7eun",
                    styles: "display:inline;font-weight:bold;"
                },
                Za = E.a.memo((function(e) {
                    var t = e.content,
                        n = Object(T.useTheme)(),
                        a = n.bp,
                        r = n.colors,
                        c = Object(S.b)(),
                        o = c.dispatch,
                        i = c.offerType,
                        s = c.processType,
                        l = ae(i, s).numberOfContracts,
                        u = E.a.useCallback((function() {
                            o(l > 1 ? {
                                type: "goToSelectNumber"
                            } : {
                                type: "goToAuthorization"
                            })
                        }), [o, l]),
                        b = E.a.useCallback((function() {
                            o("FIX_EXISTING_SERVICE" === s ? {
                                type: "goToServices"
                            } : {
                                type: "goToLocation"
                            })
                        }), [o, s]),
                        p = Object(de.a)(i),
                        d = p ? u : b,
                        f = "MIGRATION_PRE_POST" !== s && 1 !== l || "MIGRATION_PRE_POST" === s && 0 !== l;
                    return Object(N.b)(E.a.Fragment, null, p && Object(N.b)(E.a.Fragment, null, Object(N.b)("span", {
                        css: Ya
                    }, t), f && Object(N.b)(E.a.Fragment, null, Object(N.b)(T.AButton, {
                        variant: "ON_LIGHT_BACKGROUND",
                        onClick: d,
                        css: Xa
                    }, "Zmie\u0144"))), !p && Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            paddingBottom: 10,
                            display: "flex",
                            alignItems: "flex-end",
                            borderBottom: "1px solid ".concat(r.CHROME)
                        }, a.FROM_TABLET, {
                            border: "none",
                            paddingBottom: 0
                        }), "")
                    }, Object(N.b)("span", {
                        css: Object(h.a)(Object(y.a)({
                            marginRight: 10
                        }, a.ONLY_MOBILE, {
                            maxWidth: 175
                        }), "")
                    }, t), Object(N.b)(T.AButton, {
                        variant: "ON_LIGHT_BACKGROUND",
                        onClick: d,
                        css: Object(h.a)(Object(y.a)({
                            display: "inline",
                            marginLeft: "auto",
                            fontWeight: "bold"
                        }, a.FROM_TABLET, {
                            marginLeft: 0
                        }), "")
                    }, "Zmie\u0144")))
                }));
            E.a.createElement;
            var Ja = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                Qa = {
                    name: "1vryd59",
                    styles: "font-size:14px;margin-top:2px;"
                },
                $a = E.a.memo((function() {
                    var e, t = Object(S.b)(),
                        n = t.authorizationData,
                        a = t.localizationData,
                        r = t.currentSingleOffer,
                        c = t.currentOffer,
                        o = t.offerType,
                        i = Object(T.useTheme)(),
                        s = i.bp,
                        l = i.colors,
                        u = Object(k.a)(),
                        b = Object(S.b)().isB2B;
                    if (!r || !o) return null;
                    var p = Object(de.a)(o),
                        d = Object(Yt.d)(r),
                        f = d.features.config[0].value.Name,
                        O = ["FIX1P", "FIX3P"].includes(o),
                        m = d.features.config[0].value.sticker,
                        j = Object(de.a)(o);
                    return Object(N.b)("div", null, Object(N.b)("h2", {
                        css: Object(h.a)((e = {
                            display: "none",
                            fontSize: 40,
                            lineHeight: 1
                        }, Object(y.a)(e, s.FROM_TABLET, {
                            display: "block"
                        }), Object(y.a)(e, s.ONLY_TABLET, {
                            fontSize: 30,
                            lineHeight: 1
                        }), e), "")
                    }, b ? "Oferta dla Twojej Firmy" : "Oferta dla Ciebie"), j && Object(N.b)(U, {
                        css: Object(h.a)(Object(y.a)({
                            marginTop: 12,
                            marginBottom: 20,
                            paddingBottom: 20,
                            borderBottom: "1px solid ".concat(l.CHROME)
                        }, s.FROM_TABLET, {
                            marginBottom: 30,
                            paddingBottom: 30
                        }), "")
                    }), p && Object(N.b)("div", {
                        css: Ja
                    }, Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            height: 30,
                            marginTop: 4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }, s.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }, Object(N.b)("h3", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 18,
                            lineHeight: "16px",
                            color: l.ORANGE_DARK,
                            fontWeight: "bold",
                            marginRight: 10
                        }, s.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }, f), m && Object(N.b)(T.Badge, {
                        backgroundColor: m.backgroundColor,
                        textColor: m.textColor
                    }, Object(N.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: m.text
                        }
                    }))), n && n.phoneNumber && Object(N.b)(Za, {
                        content: n.phoneNumber
                    })), !p && Object(N.b)("div", {
                        css: Qa
                    }, a && Object(N.b)(Za, {
                        content: "".concat(a.street, " ").concat(a.roadNo).concat(a.apartmentNo ? "/".concat(a.apartmentNo) : "", ", ").concat(a.city)
                    }), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            marginTop: 15
                        }, s.FROM_TABLET, {
                            marginTop: 0,
                            paddingBottom: 20,
                            borderBottom: "1px solid ".concat(l.CHROME)
                        }), "")
                    }, u && c && Object(N.b)("strong", {
                        css: Object(h.a)({
                            display: O ? "none" : "block",
                            color: l.ORANGE_DARK,
                            fontSize: 16
                        }, "")
                    }, c.name), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            height: 30,
                            marginTop: 4,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }, s.FROM_TABLET, {
                            display: "none"
                        }), "")
                    }, Object(N.b)("h3", {
                        css: Object(h.a)({
                            fontSize: 18,
                            lineHeight: "16px",
                            color: l.ORANGE_DARK,
                            fontWeight: "bold",
                            marginRight: 10
                        }, "")
                    }, f), m && Object(N.b)(T.Badge, {
                        backgroundColor: m.backgroundColor,
                        textColor: m.textColor
                    }, Object(N.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: m.text
                        }
                    }))))))
                })),
                er = n("YYwr");
            E.a.createElement;
            var tr = {
                    name: "npkaou",
                    styles: "padding:15px 0 5px 0;"
                },
                nr = {
                    name: "1xtb4ow",
                    styles: "margin:0;font-size:14px;line-height:16px;&:last-of-type{margin-bottom:5px;}"
                },
                ar = function() {
                    var e = ta().priceSteps,
                        t = Object(S.b)().offerType,
                        n = Object(de.a)(t),
                        a = E.a.useMemo((function() {
                            return !e || e.all.length < 2 ? [] : e.head.map(er.a)
                        }), [e]);
                    return n || a.length < 1 ? null : Object(N.b)("div", {
                        css: tr
                    }, a.map((function(e, t) {
                        return Object(N.b)("p", {
                            key: t,
                            css: nr
                        }, Object(N.b)("strong", null, Object(Kt.a)(e.price), " z\u0142"), " ", e.text)
                    })))
                };
            E.a.createElement;
            var rr = {
                    name: "1thr8qj",
                    styles: "display:flex;align-items:baseline;font-weight:bold;"
                },
                cr = {
                    name: "133jgfd",
                    styles: "width:19px;height:19px;"
                },
                or = {
                    name: "wicuot",
                    styles: "display:flex;justify-content:space-between;padding-top:10px;"
                },
                ir = {
                    name: "1fr0plv",
                    styles: "font-weight:bold;margin-bottom:0;"
                },
                sr = E.a.memo((function() {
                    var e, t, n = Object(T.useTheme)(),
                        a = n.bp,
                        r = n.colors,
                        c = Object(S.b)(),
                        o = c.dispatch,
                        i = c.shouldShowOfferDetails,
                        s = c.currentSingleOffer,
                        l = c.offerType,
                        u = c.showNetPrices,
                        b = c.isB2B,
                        p = Xt().isSelectedOfferWithDiscount,
                        d = ta().priceSteps,
                        f = Object(de.a)(l),
                        O = E.a.useCallback((function() {
                            o({
                                type: "showOfferDetails",
                                payload: !i
                            })
                        }), [i, o]);
                    if (!s) return null;
                    var m = Object(Yt.d)(s),
                        j = m.features.priceFeatures || [],
                        g = null === d || void 0 === d ? void 0 : d.last.price,
                        v = l && ["DATA", "DATA_LDF"].includes(l),
                        C = p ? "Kwota abonamentu uwzgl\u0119dnia rabat za zgod\u0119 na e-faktur\u0119 i terminowe p\u0142atno\u015bci - 5 z\u0142, zgody marketingowe - 5 z\u0142 oraz rabat za \u0142\u0105czenie us\u0142ug w Orange - ".concat(b && v ? "15" : "20", " z\u0142.") : "Kwota abonamentu uwzgl\u0119dnia rabat za zgod\u0119 na e-faktur\u0119 i terminowe p\u0142atno\u015bci - 5 z\u0142 oraz zgody marketingowe - 5 z\u0142.",
                        w = m.features.config[0].value.sticker,
                        x = m.features.config[0].value.Name;
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            marginTop: 5,
                            marginBottom: 20
                        }, Object(y.a)(e, a.FROM_TABLET, {
                            marginTop: 20
                        }), Object(y.a)(e, a.FROM_DESKTOP, {
                            marginBottom: 40
                        }), e), "")
                    }, Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "none"
                        }, a.FROM_TABLET, {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: 30
                        }), "")
                    }, Object(N.b)("h3", {
                        css: Object(h.a)(Object(y.a)({}, a.FROM_TABLET, {
                            lineHeight: "22px",
                            margin: 0,
                            fontSize: 18,
                            color: r.ORANGE_DARK
                        }), "")
                    }, x), w && Object(N.b)(T.Badge, {
                        backgroundColor: w.backgroundColor,
                        textColor: w.textColor
                    }, Object(N.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: w.text
                        }
                    }))), Object(N.b)(ar, null), Object(N.b)("div", {
                        css: rr
                    }, Object(N.b)("span", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 40,
                            position: "relative"
                        }, a.FROM_DESKTOP, {
                            fontSize: 60
                        }), "")
                    }, Object(N.b)(T.Swapper, null, g && Object(Kt.a)(g, {
                        integersWithFractionDigits: !0
                    }))), Object(N.b)("span", {
                        css: Object(h.a)((t = {
                            margin: "0 5px",
                            fontSize: 16
                        }, Object(y.a)(t, a.FROM_TABLET, {
                            fontSize: 24
                        }), Object(y.a)(t, a.FROM_DESKTOP, {
                            fontSize: 28
                        }), t), "")
                    }, "z\u0142/mies.", u && " + VAT"), b && !i && f && Object(N.b)(E.a.Fragment, null, Object(N.b)(gn.a, {
                        content: C
                    }, Object(N.b)("span", null, Object(N.b)(le.a, {
                        name: "question-mark",
                        css: cr
                    }))))), Object(N.b)("div", {
                        css: or
                    }, b && j.map((function(e, t) {
                        var n = zn[e.type];
                        return n && Object(N.b)(n, Object(A.a)({}, e.value, {
                            key: t
                        }))
                    })), !b && Object(N.b)("h5", {
                        css: ir
                    }, "z rabatami"), !i && Object(N.b)(Zn.a, {
                        action: {
                            id: "",
                            action: "",
                            type: "LINK_BUTTON",
                            text: "Szczeg\xf3\u0142y",
                            title: "Szczeg\xf3\u0142y",
                            variant: "ON_LIGHT_BACKGROUND"
                        },
                        onClick: O,
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            fontWeight: "bold"
                        }, a.FROM_TABLET, {
                            display: "inline"
                        }), "")
                    })), !b && j.map((function(e, t) {
                        var n = zn[e.type];
                        return n && Object(N.b)(n, Object(A.a)({}, e.value, {
                            key: t
                        }))
                    })))
                }));
            sr.displayName = "PriceInfo";
            E.a.createElement;
            var lr = function() {
                    var e, t = Object(T.useTheme)().bp;
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            width: "100%"
                        }, Object(y.a)(e, t.ONLY_TABLET, {
                            width: "53%",
                            margin: "auto",
                            marginTop: 30
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            maxWidth: 400
                        }), e), "")
                    }, Object(N.b)($a, null), Object(N.b)(sr, null), Object(N.b)(Va, null), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({}, t.ONLY_TABLET, {
                            display: "none"
                        }), "")
                    }, Object(N.b)(ia, null)))
                },
                ur = n("nwNh");
            E.a.createElement;
            var br = {
                    name: "1d8amz7",
                    styles: "display:block;font-weight:bold;"
                },
                pr = {
                    name: "1d8amz7",
                    styles: "display:block;font-weight:bold;"
                },
                dr = {
                    name: "13o7eu2",
                    styles: "display:block;"
                },
                fr = function(e) {
                    var t = e.prices,
                        n = Object(ea.a)(t);
                    return n ? 1 === n.all.length ? Object(N.b)("span", {
                        css: br
                    }, n.first.price, " z\u0142", n.first.monthFrom === n.first.monthTo && 0 === n.first.monthTo ? "" : "/mies", ".") : Object(N.b)(E.a.Fragment, null, Object(N.b)("span", {
                        css: pr
                    }, n.first.price, " z\u0142", n.first.monthFrom === n.first.monthTo && 0 === n.first.monthTo ? " op\u0142ata jednorazowa" : "/ ".concat(n.first.monthTo, "mies.")), n.tail.map((function(e, t) {
                        return Object(N.b)("span", {
                            key: t,
                            css: dr
                        }, e.price, " z\u0142/ od ", e.monthFrom, " mies.")
                    }))) : null
                };
            E.a.createElement;
            var Or = {
                    name: "153m82c",
                    styles: "font-size:12px;margin-bottom:15px;"
                },
                mr = {
                    name: "1jruelq",
                    styles: "font-size:12px;display:flex;margin-bottom:2px;"
                },
                jr = {
                    name: "f4yhq6",
                    styles: "flex-basis:50%;margin-right:10px;"
                },
                gr = {
                    name: "1spvj5p",
                    styles: "flex-basis:50%;"
                },
                yr = function(e) {
                    var t = e.data,
                        n = Object(T.useTheme)().colors;
                    return Object(N.b)("div", {
                        css: Object(h.a)({
                            marginBottom: 20,
                            borderBottom: "1px solid ".concat(n.CHROME),
                            paddingBottom: 15
                        }, "")
                    }, Object(N.b)("h2", {
                        css: Object(h.a)({
                            fontSize: 16,
                            borderBottom: "1px solid ".concat(n.CHROME),
                            paddingBottom: 15,
                            marginBottom: 15,
                            lineHeight: "normal"
                        }, "")
                    }, "Szczeg\xf3\u0142y op\u0142at"), Object(N.b)("h4", {
                        css: Or
                    }, "Op\u0142aty miesi\u0119czne za us\u0142ugi i pakiety wybrane przez Ciebie"), t.map((function(e, t) {
                        return Object(N.b)("div", {
                            key: t,
                            css: mr
                        }, Object(N.b)("span", {
                            css: jr
                        }, e.name), Object(N.b)("div", {
                            css: gr
                        }, Object(N.b)(fr, {
                            prices: e.prices
                        })))
                    })))
                };
            E.a.createElement;
            var hr = {
                    name: "xdq0ry",
                    styles: "display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:center;margin-bottom:20px;"
                },
                vr = E.a.memo((function() {
                    var e, t, n = Object(T.useTheme)(),
                        a = n.colors,
                        r = n.bp,
                        c = n.selectors,
                        o = Object(k.a)(),
                        i = Object(S.b)(),
                        s = i.dispatch,
                        l = i.currentSingleOffer,
                        u = i.shouldUseDiscounts,
                        b = i.summaryData,
                        p = i.selectedTVPackages,
                        d = i.selectedOtherPackages,
                        f = i.offerPackages,
                        O = Object(T.useLayer)().level > 0,
                        m = Object(ot.c)().isNavbarCollapsed,
                        j = E.a.useCallback((function() {
                            s({
                                type: "showOfferDetails",
                                payload: !1
                            }), s({
                                type: "setSummaryData",
                                payload: null
                            })
                        }), [s]);
                    if (!l) return null;
                    var g = Object(Yt.d)(l),
                        v = g.features.detailsFeatures || [],
                        C = b ? [{
                            type: "HTML",
                            value: {
                                value: b
                            }
                        }] : v,
                        w = [].concat(Object(Cn.a)(p || []), Object(Cn.a)(d || [])).map((function(e) {
                            return e.id
                        })),
                        x = f.filter((function(e) {
                            return !["sfh", "activation"].includes(e.id) && w.includes(e.id) && !e.defaultSelected
                        }));
                    return Object(N.b)(ur.a, {
                        enabled: o,
                        css: Object(h.a)((e = {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            height: "calc(100% - 20px)",
                            position: "relative"
                        }, Object(y.a)(e, r.FROM_TABLET, {
                            margin: "30px 0",
                            justifyContent: "center"
                        }), Object(y.a)(e, r.FROM_DESKTOP, {
                            margin: 0,
                            height: "100%"
                        }), e), "")
                    }, Object(N.b)("div", {
                        css: hr
                    }, Object(N.b)("h2", {
                        css: Object(h.a)(Object(y.a)({
                            position: "relative",
                            fontSize: 18,
                            lineHeight: 1,
                            color: a.ORANGE_DARK
                        }, r.FROM_TABLET, {
                            fontSize: 24,
                            lineHeight: 1
                        }), "")
                    }, g.features.config[0].value.Name), O ? Object(N.b)(T.AButton, {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            marginLeft: 5
                        }, c.ON_FOCUS_OR_HOVER, {
                            color: a.ORANGE_DARK,
                            transition: "color .15s"
                        }), ""),
                        onClick: j
                    }, "Zwi\u0144") : Object(N.b)(T.IconButton, {
                        iconName: "close-slim",
                        title: "Zamknij szczeg\xf3\u0142y oferty",
                        onClick: j,
                        css: Object(h.a)({
                            svg: (t = {}, Object(y.a)(t, r.FROM_TABLET, {
                                width: 20,
                                height: 20
                            }), Object(y.a)(t, c.ON_FOCUS_OR_HOVER, {
                                color: a.ORANGE_DARK,
                                transition: "color .15s"
                            }), t)
                        }, "")
                    })), C.length > 0 && Object(N.b)(T.CustomScroll, {
                        css: Object(h.a)(Object(y.a)({
                            paddingRight: 20,
                            height: O ? m ? "calc(100vh - 200px)" : "calc(100vh - 230px)" : "calc(100% - 38px)"
                        }, r.FROM_TABLET, {
                            height: "70%"
                        }), "")
                    }, !b && x[0] && Object(N.b)(yr, {
                        data: x
                    }), C.map((function(e, t) {
                        var n = zn[e.type];
                        return n && Object(N.b)(n, Object(A.a)({
                            key: t
                        }, e.value, {
                            css: "HTML" === e.type && {
                                table: {
                                    width: "100%",
                                    padding: "15px 0",
                                    borderTop: "1px solid ".concat(a.CHROME)
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
                                    color: a.CHROME,
                                    fontSize: 12
                                },
                                section: {
                                    padding: "15px 0",
                                    borderTop: "1px solid ".concat(a.CHROME)
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
                                    color: a.ORANGE_DARK,
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
                                    display: u ? void 0 : "none"
                                },
                                "[data-hideondiscount]": {
                                    display: u ? "none" : void 0
                                }
                            }
                        }))
                    }))))
                })),
                Er = (E.a.createElement, function(e) {
                    var t, n = Object(T.useTheme)().bp,
                        a = Object(S.b)().isSuflerProcessing;
                    return Object(N.b)("div", Object(A.a)({
                        css: Object(h.a)((t = {
                            height: "100%"
                        }, Object(y.a)(t, n.FROM_TABLET, {
                            width: "53%",
                            margin: "auto"
                        }), Object(y.a)(t, n.FROM_DESKTOP, {
                            width: 400
                        }), Object(y.a)(t, n.ONLY_TABLET, {
                            display: a ? "none" : "block"
                        }), t), "")
                    }, e), Object(N.b)(vr, null))
                }),
                Tr = (E.a.createElement, function() {
                    var e = Object(T.useTheme)().bp;
                    return Object(N.b)(T.Loader, {
                        css: Object(h.a)(Object(y.a)({}, e.ONLY_TABLET, {
                            margin: "0 auto"
                        }), "")
                    })
                });

            function Sr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Cr(e) {
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
            var wr = {
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
                xr = function(e, t) {
                    switch (t.type) {
                        case "setGetDataStatus":
                            return Cr({}, e, {
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
                            return Cr({}, e, {
                                packageGroups: n
                            });
                        case "setBasePackage":
                            var a = {
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
                                var r = t.payload.hdChannelsNumber + t.payload.sdChannelsNumber,
                                    c = "<strong>".concat(r, "</strong> ").concat(Object(Vt.a)(["kana\u0142", "kana\u0142y", "kana\u0142\xf3w"], r), " (w tym <strong>").concat(t.payload.hdChannelsNumber, "</strong> HD)");
                                a.content.title = c, a.content.channels = t.payload.channels
                            }
                            return Cr({}, e, {
                                basePackage: a
                            });
                        case "setPackageConfiguratorType":
                            return Cr({}, e, {
                                packageConfiguratorType: t.payload
                            });
                        case "setPackagesConfiguration":
                            var o = t.payload.packages,
                                i = t.payload.inactivePackages,
                                s = [],
                                l = {};
                            Array.from(new Set(o.map((function(e) {
                                return e.group
                            })))).filter((function(e) {
                                return null !== e
                            })).forEach((function(e) {
                                null !== e && (l[e] = o.filter((function(t) {
                                    return t.group === e
                                })).map((function(e) {
                                    return e.id
                                })))
                            }));
                            var u = {},
                                b = Array.from(new Set(o.map((function(e) {
                                    return e.dependentFrom
                                })))).filter((function(e) {
                                    return e
                                }));
                            return b.forEach((function(e) {
                                u[e] = o.filter((function(t) {
                                    return t.dependentFrom === e
                                })).map((function(e) {
                                    return e.id
                                }))
                            })), o.forEach((function(e) {
                                var t = {
                                    id: e.id,
                                    group: e.group,
                                    tag: e.tag,
                                    isBase: !1,
                                    isActive: !i.find((function(t) {
                                        return t.id === e.id
                                    })),
                                    isDumbChecked: !!i.find((function(t) {
                                        return t.id === e.id && !0 === t.isChecked
                                    })),
                                    isInObligatoryGroup: !!e.isGroupObligatory,
                                    exclusivePackages: e.group ? l[e.group].filter((function(t) {
                                        return t !== e.id
                                    })) : [],
                                    isDependent: !!e.dependentFrom,
                                    masterPackage: e.dependentFrom,
                                    dependentPackages: b.includes(e.id) ? u[e.id] : [],
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
                            })), "CHANNELS" === e.packageConfiguratorType && s.unshift(e.basePackage), Cr({}, e, {
                                packagesConfiguration: s
                            });
                        case "setDefaultCheckedPackages":
                            var p = [];
                            e.packagesConfiguration.forEach((function(t) {
                                t.isDefaultChecked && !e.checkedPackages.some((function(e) {
                                    return t.exclusivePackages.includes(e)
                                })) && p.push(t.id)
                            }));
                            var d = Array.from(new Set(e.checkedPackages.concat(p)));
                            return Cr({}, e, {
                                checkedPackages: d
                            });
                        case "togglePackageDetails":
                            return Cr({}, e, {
                                expandedPackageId: t.payload === e.expandedPackageId ? null : t.payload
                            });
                        case "togglePackageCheck":
                            if (!e.packagesConfiguration) return Cr({}, e);
                            if (e.packagesConfiguration.find((function(e) {
                                    return e.id === t.payload.id && !0 === e.isDumbChecked
                                }))) return Cr({}, e);
                            var f = e.checkedPackages,
                                O = e.packagesConfiguration.find((function(e) {
                                    return e.id === t.payload.id
                                })),
                                m = function(t) {
                                    f = [].concat(Object(Cn.a)(e.checkedPackages), [t])
                                },
                                j = function(e) {
                                    f = f.filter((function(t) {
                                        return t !== e
                                    }))
                                };
                            if (!O) return Cr({}, e);
                            var g = null !== O.group,
                                y = e.packagesConfiguration.filter((function(e) {
                                    return e.group === O.group && null !== e.group
                                })).some((function(e) {
                                    return e.isInObligatoryGroup
                                })),
                                h = 0 !== O.exclusivePackages.length,
                                v = f.includes(O.id),
                                E = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        n = e.packagesConfiguration.find((function(e) {
                                            return e.id === t
                                        }));
                                    n && n.dependentPackages.forEach((function(e) {
                                        j(e)
                                    }))
                                },
                                T = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                        n = e.packagesConfiguration.find((function(e) {
                                            return e.id === t
                                        }));
                                    if (void 0 !== n && n.dependentPackages[0]) {
                                        var a = e.packagesConfiguration.find((function(e) {
                                            return e.id === n.dependentPackages[0]
                                        }));
                                        a && (a.isInObligatoryGroup || a.isDefaultChecked) && f.push(a.id)
                                    }
                                },
                                S = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                                    t.forEach((function(e) {
                                        m(e), T(e)
                                    })), e.forEach((function(e) {
                                        j(e), E(e)
                                    }))
                                };
                            return g && y ? h && (v ? S([O.id], [O.exclusivePackages[0]]) : S(O.exclusivePackages, [O.id])) : v ? S([O.id]) : S(O.exclusivePackages, [O.id]), Cr({}, e, {
                                checkedPackages: f
                            });
                        case "setCheckedPackages":
                            return Cr({}, e, {
                                checkedPackages: t.payload
                            });
                        default:
                            return e
                    }
                };
            E.a.createElement;

            function kr(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function Pr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? kr(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : kr(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ir = E.a.createContext(null),
                Rr = E.a.memo((function(e) {
                    var t = Object(A.a)({}, e),
                        n = E.a.useReducer(xr, Pr({}, wr)),
                        a = Object(C.a)(n, 2),
                        r = a[0],
                        c = a[1],
                        o = E.a.useMemo((function() {
                            return Pr({}, r, {
                                dispatch: c
                            })
                        }), [r]);
                    return Object(N.b)(Ir.Provider, Object(A.a)({
                        value: o
                    }, t))
                })),
                Ar = function() {
                    var e = E.a.useContext(Ir);
                    if (null === e) throw Error("useTVConfiguratorContext: Please provide TVConfiguratorProvider value.");
                    return e
                },
                Nr = n("9Hq1"),
                zr = (E.a.createElement, function(e) {
                    var t = e.name,
                        n = e.imageUrl,
                        a = Object(T.useTheme)().colors,
                        r = E.a.useState(!1),
                        c = Object(C.a)(r, 2),
                        o = c[0],
                        i = c[1],
                        s = E.a.useCallback((function(e) {
                            e && i(e)
                        }), []);
                    return Object(N.b)(Dt.a, {
                        key: n,
                        onChange: s
                    }, Object(N.b)("div", {
                        style: {
                            background: o ? "url(".concat(n, ") center / contain no-repeat") : void 0
                        },
                        title: t,
                        css: Object(h.a)({
                            width: 48,
                            height: 48,
                            border: "1px solid ".concat(a.ASH),
                            backgroundColor: a.WHITE,
                            margin: "8px 8px 0 0"
                        }, "")
                    }))
                });
            E.a.createElement;
            var Lr = {
                    name: "2imjyh",
                    styles: "display:flex;flex-wrap:wrap;"
                },
                _r = E.a.memo((function(e) {
                    var t = e.channels;
                    return t ? Object(N.b)("div", {
                        css: Lr
                    }, t.map((function(e) {
                        return Object(N.b)(zr, {
                            key: e.id,
                            name: e.name,
                            imageUrl: e.imageUrl
                        })
                    }))) : null
                }));
            E.a.createElement;
            var Mr = {
                    name: "v56cvm",
                    styles: "padding:0 20px 20px 20px;"
                },
                Dr = {
                    name: "1ot530t",
                    styles: "font-size:12px;display:block;width:100%;padding-bottom:5px;"
                },
                Fr = {
                    name: "1msyvyi",
                    styles: "font-size:24px;font-weight:bold;margin:0;"
                },
                Br = {
                    name: "ovn284",
                    styles: "font-size:16px;margin-left:4px;"
                },
                Vr = {
                    name: "16hqsjo",
                    styles: "font-size:14px;margin:6px 0 0 0;line-height:1;"
                },
                Ur = E.a.memo((function(e) {
                    var t = e.packageId,
                        n = e.isExpanded,
                        a = e.isChecked,
                        r = e.isBase,
                        c = e.data,
                        o = e.onDetailsCheckClick,
                        i = e.isButtonHidden,
                        s = Object(T.useTheme)(),
                        l = s.bp,
                        u = s.colors,
                        b = E.a.useState(n ? "none" : 0),
                        p = Object(C.a)(b, 2),
                        d = p[0],
                        f = p[1],
                        O = E.a.useRef(null),
                        m = c.prices ? Object(ea.a)(c.prices) : null;
                    return E.a.useEffect((function() {
                        O.current && f(n ? O.current.scrollHeight : 0)
                    }), [n]), Object(N.b)("div", {
                        ref: O,
                        css: Object(h.a)({
                            overflow: "hidden",
                            maxHeight: d,
                            transition: "max-height .2s ease",
                            visibility: n ? "visible" : "hidden"
                        }, "")
                    }, Object(N.b)("div", {
                        css: Mr
                    }, !r && Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: 20
                        }, l.FROM_TABLET, {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "flex-end"
                        }), "")
                    }, m && Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            marginBottom: 20
                        }, l.FROM_TABLET, {
                            margin: 0
                        }), "")
                    }, m.first && Object(Nr.a)(m.first) && Object(N.b)("span", {
                        css: Dr
                    }, "op\u0142ata jednorazowa ", m.first.price, " z\u0142"), m.all.filter((function(e) {
                        return !Object(Nr.a)(e)
                    })).slice(0, 1).map((function(e, n) {
                        return Object(N.b)("p", {
                            key: "PriceStep_".concat(e.price, "-").concat(n),
                            css: Fr
                        }, e.price, Object(N.b)("span", {
                            css: Br
                        }, ["orange_tv_go", "multiroom", "orange_smart_wifi_box"].includes(t) ? "".concat(e.currency, " / mies.") : "".concat(e.currency, " / ").concat(e.monthTo, " mies.")))
                    })), m.tail.slice(Object(Nr.a)(m.first) ? 1 : 0).map((function(e, t) {
                        return Object(N.b)("p", {
                            key: "PriceStep_".concat(e.price, "-").concat(t),
                            css: Vr
                        }, "".concat(e.price, " ").concat(e.currency, "/mies. od ").concat(e.monthFrom, " miesi\u0105ca"))
                    }))), !i && Object(N.b)(T.Button, {
                        onClick: o,
                        variant: a ? "SECONDARY_BLACK_OUTLINE" : void 0,
                        css: Object(h.a)(Object(y.a)({}, l.FROM_TABLET, {
                            height: 40
                        }), "")
                    }, a ? "Usu\u0144" : "Dodaj")), c.longDescription && Object(N.b)("div", {
                        css: Object(h.a)({
                            fontSize: 14,
                            lineHeight: "18px",
                            margin: 0,
                            marginBottom: 2,
                            color: u.SILVER,
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
                    }), n && Object(N.b)(_r, {
                        channels: c.channels
                    })))
                })),
                Hr = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.isExpanded,
                        n = e.data,
                        a = Object(T.useTheme)(),
                        r = a.bp,
                        c = a.colors;
                    return n.media ? Object(N.b)("div", {
                        role: "img",
                        "aria-label": n.media.title,
                        title: n.media.title,
                        style: {
                            background: "url(".concat(n.media.src, ") center / cover no-repeat")
                        },
                        css: Object(h.a)(Object(y.a)({
                            position: "relative",
                            maxHeight: t ? 135 : 0,
                            height: 120,
                            overflow: "hidden",
                            transition: "max-height .2s ease"
                        }, r.FROM_TABLET, {
                            height: 135
                        }), "")
                    }, n.teaser && Object(N.b)("p", {
                        css: Object(h.a)({
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
                Gr = n("BjmB"),
                Wr = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.data,
                        n = Object(T.useTheme)().colors,
                        a = E.a.useState(!1),
                        r = Object(C.a)(a, 2),
                        c = r[0],
                        o = r[1],
                        i = E.a.useState(!1),
                        s = Object(C.a)(i, 2),
                        l = s[0],
                        u = s[1],
                        b = Ar(),
                        p = b.expandedPackageId,
                        d = b.checkedPackages,
                        f = b.packagesConfiguration,
                        O = b.dispatch,
                        m = Object(S.b)().dispatch;
                    E.a.useEffect((function() {
                        o(p === t.id)
                    }), [t.id, p]), E.a.useEffect((function() {
                        u(!!t.isDumbChecked || d.includes(t.code || t.id))
                    }), [d, t.id, t.isDumbChecked, t.code]);
                    var j = E.a.useCallback((function() {
                            t.isActive && O({
                                type: "togglePackageDetails",
                                payload: t.id
                            })
                        }), [t.id, t.isActive, O]),
                        g = E.a.useCallback((function() {
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
                        var e = d.reduce((function(e, t) {
                            var n = f.find((function(e) {
                                return e.id === t
                            }));
                            return n ? e.concat({
                                id: n.id,
                                payments: n.content.prices,
                                name: n.content.title
                            }) : e
                        }), []);
                        m({
                            type: "setCheckedPackages",
                            payload: e
                        })
                    }), [m, d, f]), Object(N.b)("section", {
                        role: "region",
                        css: Object(h.a)({
                            marginBottom: 10,
                            borderRadius: 4,
                            backgroundColor: n.STARDUST,
                            overflow: "hidden"
                        }, "")
                    }, Object(N.b)(Hr, {
                        isExpanded: c,
                        data: t.content
                    }), Object(N.b)(Gr.a, {
                        onExpanderClick: j,
                        onCheckClick: g,
                        data: t.content,
                        isExpanded: c,
                        isChecked: l,
                        isBase: t.isBase,
                        isActive: t.isActive
                    }), Object(N.b)(Ur, {
                        packageId: t.id,
                        isExpanded: c,
                        isChecked: l,
                        isBase: t.isBase,
                        isButtonHidden: 0 === t.exclusivePackages.length && t.isInObligatoryGroup,
                        data: t.content,
                        onDetailsCheckClick: y
                    }))
                })));
            E.a.createElement;
            var Kr = {
                    name: "uewl2b",
                    styles: "margin-bottom:20px;"
                },
                qr = function(e) {
                    var t = e.title,
                        n = e.packages,
                        a = Object(T.useTheme)(),
                        r = a.colors,
                        c = a.bp,
                        o = Ar().checkedPackages,
                        i = E.a.useMemo((function() {
                            return n.filter((function(e) {
                                return !["activation", "sfh"].includes(e.id) && (!e.isDependent || o.includes(e.masterPackage ? e.masterPackage : ""))
                            }))
                        }), [o, n]);
                    return 0 === i.length ? null : Object(N.b)("div", {
                        css: Kr
                    }, Object(N.b)("h2", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 18,
                            lineHeight: "normal",
                            paddingBottom: 10,
                            marginBottom: 15,
                            borderBottom: "1px solid ".concat(r.CHROME)
                        }, c.FROM_DESKTOP, {
                            fontSize: 30
                        }), "")
                    }, t), i.map((function(e, t) {
                        return Object(N.b)(Wr, {
                            key: t,
                            data: e
                        })
                    })))
                };
            E.a.createElement;
            var Yr = {
                    BASE: "Telewizja",
                    MAIN: "Dodaj pakiety TV",
                    ADDITIONAL: "Dodatkowe bloki kana\u0142\xf3w",
                    SERVICE: "Us\u0142ugi",
                    DEVICE: "Urz\u0105dzenia",
                    discount: "",
                    SERVICES: "Us\u0142ugi i urz\u0105dzenia"
                },
                Xr = {
                    name: "10klw3m",
                    styles: "height:100%;"
                },
                Zr = {
                    name: "1p2jtab",
                    styles: "padding-right:10px;"
                },
                Jr = {
                    name: "hg15jl",
                    styles: "position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:100%;"
                },
                Qr = E.a.memo((function() {
                    var e = Object(k.a)(),
                        t = Object(T.useTheme)(),
                        n = t.bp,
                        a = t.colors,
                        r = Ar(),
                        c = r.getDataStatus,
                        o = r.packageGroups,
                        i = r.packagesConfiguration,
                        s = Object(S.b)().dispatch,
                        l = E.a.useCallback((function() {
                            s({
                                type: "showTVConfigurator",
                                payload: !1
                            })
                        }), [s]),
                        u = E.a.useMemo((function() {
                            return o.map((function(e, t) {
                                return {
                                    title: Yr[e.tag],
                                    packages: e.packages.map((function(e) {
                                        return i.find((function(t) {
                                            return t.id === e
                                        }))
                                    })).filter((function(e) {
                                        return e
                                    }))
                                }
                            }))
                        }), [o, i]);
                    return Object(N.b)(ur.a, {
                        css: Xr,
                        enabled: e
                    }, Object(N.b)(T.IconButton, {
                        iconName: "close-slim",
                        title: "Zamknij konfigurator",
                        onClick: l,
                        width: 15,
                        height: 15,
                        css: Object(h.a)({
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
                    }), "SUCCESS" === c.status ? Object(N.b)(T.CustomScroll, {
                        css: Object(h.a)(Object(y.a)({
                            maxHeight: "75%",
                            WebkitOverflowScrolling: "touch"
                        }, n.FROM_TABLET, {
                            maxHeight: "80%"
                        }), "")
                    }, Object(N.b)("div", {
                        css: Zr
                    }, u.map((function(e, t) {
                        return Object(N.b)(qr, Object(A.a)({
                            key: t
                        }, e))
                    })))) : Object(N.b)("h3", {
                        css: Jr
                    }, c.message), Object(N.b)("div", {
                        css: Object(h.a)({
                            paddingTop: 20,
                            marginRight: 10,
                            backgroundColor: a.WHITE,
                            borderTop: "1px solid ".concat(a.CHROME)
                        }, "")
                    }, Object(N.b)(T.Button, {
                        onClick: l,
                        size: "SMALL",
                        css: Object(h.a)(Object(y.a)({
                            width: "100%"
                        }, n.FROM_TABLET, {
                            maxWidth: 190
                        }), "")
                    }, "Dalej")))
                })),
                $r = (E.a.createElement, E.a.memo((function() {
                    var e = Ar(),
                        t = e.dispatch,
                        n = e.packagesConfiguration,
                        a = Object(S.b)(),
                        r = a.currentSingleOffer,
                        c = a.packageConfiguratorType,
                        o = a.selectedOtherPackages,
                        i = a.selectedTVPackages,
                        s = a.dispatch,
                        l = E.a.useState(!1),
                        u = Object(C.a)(l, 2),
                        b = u[0],
                        p = u[1];
                    return E.a.useEffect((function() {
                        t({
                            type: "setPackageConfiguratorType",
                            payload: c
                        });
                        ! function() {
                            var e, n, a, o, i, l, u, b;
                            he.a.async((function(d) {
                                for (;;) switch (d.prev = d.next) {
                                    case 0:
                                        if (null !== r && c) {
                                            d.next = 2;
                                            break
                                        }
                                        return d.abrupt("return");
                                    case 2:
                                        if (p(!0), d.prev = 3, e = [], "CHANNELS" !== c) {
                                            d.next = 15;
                                            break
                                        }
                                        if (n = Object(Yt.e)(r)) {
                                            d.next = 9;
                                            break
                                        }
                                        return d.abrupt("return");
                                    case 9:
                                        return d.next = 11, he.a.awrap(Object(Ne.h)(n.code));
                                    case 11:
                                        e = d.sent, a = n.productCharacteristic, o = a.channelsHDQuantity, i = a.channelsSDQuantity, l = a.channelsList, u = l.map((function(e) {
                                            return {
                                                id: e.name,
                                                imageUrl: e.image,
                                                name: e.name,
                                                description: e.name
                                            }
                                        })), t({
                                            type: "setBasePackage",
                                            payload: {
                                                channels: u,
                                                hdChannelsNumber: o,
                                                sdChannelsNumber: i
                                            }
                                        });
                                    case 15:
                                        "OTHER" === c && (b = Object(Ln.a)(Object(Ln.b)(r)), e = b, t({
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
                                        }), p(!1), d.next = 26;
                                        break;
                                    case 22:
                                        d.prev = 22, d.t0 = d.catch(3), t({
                                            type: "setGetDataStatus",
                                            payload: {
                                                status: "ERROR",
                                                message: "Oj, co\u015b posz\u0142o nie tak"
                                            }
                                        }), p(!1);
                                    case 26:
                                    case "end":
                                        return d.stop()
                                }
                            }), null, null, [
                                [3, 22]
                            ], Promise)
                        }()
                    }), [r, t, c, s]), E.a.useEffect((function() {
                        t({
                            type: "setPackageGroups",
                            payload: n
                        });
                        var e = "CHANNELS" === c ? i : o,
                            a = r && Object(Yt.e)(r),
                            s = a && a.additionals.filter((function(e) {
                                return "TV_GROUP" === e.type
                            })),
                            l = s && s.flatMap((function(e) {
                                return e.additionals
                            })),
                            u = l ? l.filter((function(e) {
                                return e.features.config[0].value.defaultSelected
                            })) : [],
                            b = e ? e.map((function(e) {
                                return e.id
                            })).concat(u.map((function(e) {
                                return e.code
                            }))) : [];
                        t({
                            type: "setCheckedPackages",
                            payload: b
                        }), t({
                            type: "setDefaultCheckedPackages",
                            payload: null
                        })
                    }), [r, t, c, n]), Object(N.b)("div", {
                        css: Object(h.a)({
                            position: "relative",
                            display: b ? "flex" : void 0,
                            height: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: b ? 0 : 40,
                            overflow: "hidden"
                        }, "")
                    }, b ? Object(N.b)(T.Loader, null) : Object(N.b)(Qr, null))
                }))),
                ec = (E.a.createElement, E.a.memo((function() {
                    return Object(N.b)(Rr, null, Object(N.b)($r, null))
                }))),
                tc = (E.a.createElement, function() {
                    var e, t = Object(T.useTheme)().bp;
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            width: "100%",
                            height: "95%"
                        }, Object(y.a)(e, t.ONLY_TABLET, {
                            width: "53%",
                            margin: "auto",
                            marginTop: 30
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            maxWidth: 400
                        }), e), "")
                    }, Object(N.b)(ec, null))
                });
            E.a.createElement;
            var nc = {
                    name: "1t9wg36",
                    styles: "position:relative;height:100%;align-items:center;justify-content:center;padding-top:40px;overflow:hidden;"
                },
                ac = {
                    name: "10klw3m",
                    styles: "height:100%;"
                },
                rc = {
                    name: "12ak9cx",
                    styles: "margin-bottom:20px;padding-right:10px;"
                },
                cc = {
                    name: "clnfrv",
                    styles: "min-width:135px;width:100%;"
                },
                oc = {
                    name: "1jsjw0q",
                    styles: "margin-left:10px;min-width:135px;width:100%;"
                },
                ic = E.a.memo((function(e) {
                    var t = e.children,
                        n = e.description,
                        a = e.title,
                        r = e.onAccept,
                        c = e.onCancel,
                        o = Object(T.useTheme)(),
                        i = o.bp,
                        s = o.colors,
                        l = Object(k.a)();
                    return Object(N.b)("div", {
                        css: nc
                    }, Object(N.b)(ur.a, {
                        css: ac,
                        enabled: l
                    }, Object(N.b)("div", {
                        css: Object(h.a)({
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: n ? 0 : 15
                        }, "")
                    }, Object(N.b)("h2", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 18,
                            lineHeight: "normal"
                        }, i.FROM_DESKTOP, {
                            fontSize: 30
                        }), "")
                    }, a), Object(N.b)(T.IconButton, {
                        iconName: "close-slim",
                        title: "Zamknij konfigurator",
                        onClick: c,
                        width: 15,
                        height: 15,
                        css: Object(h.a)({
                            position: "relative",
                            display: "block",
                            padding: 10,
                            svg: Object(y.a)({
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)"
                            }, i.FROM_DESKTOP, {
                                width: 20,
                                height: 20
                            })
                        }, "")
                    })), n && n, Object(N.b)(T.CustomScroll, {
                        css: Object(h.a)(Object(y.a)({
                            maxHeight: "70%",
                            WebkitOverflowScrolling: "touch"
                        }, i.ONLY_SMALL_MOBILE, {
                            maxHeight: "45%"
                        }), "")
                    }, Object(N.b)("div", {
                        css: rc
                    }, t)), Object(N.b)("div", {
                        css: Object(h.a)({
                            backgroundColor: s.WHITE,
                            borderTop: "1px solid ".concat(s.CHROME),
                            marginRight: 10,
                            paddingTop: 20,
                            display: "flex"
                        }, "")
                    }, Object(N.b)(T.Button, {
                        onClick: r,
                        size: "SMALL",
                        css: cc
                    }, "Zatwierd\u017a wyb\xf3r"), Object(N.b)(T.Button, {
                        onClick: c,
                        size: "SMALL",
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: oc
                    }, "Anuluj i wr\xf3\u0107"))))
                }));
            E.a.createElement;

            function sc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function lc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? sc(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var uc = E.a.createContext(null),
                bc = function(e) {
                    var t = e.isExpanded,
                        n = e.isChecked,
                        a = e.isBase,
                        r = e.isActive,
                        c = e.bannerSrc,
                        o = Object(_.a)(e, ["isExpanded", "isChecked", "isBase", "isActive", "bannerSrc"]),
                        i = E.a.useState({
                            isExpanded: t,
                            isChecked: n,
                            isBase: a,
                            bannerSrc: c
                        }),
                        s = Object(C.a)(i, 2),
                        l = s[0],
                        u = s[1];
                    return Object(N.b)(uc.Provider, Object(A.a)({
                        value: {
                            state: lc({}, l, {
                                isActive: r
                            }),
                            setState: u
                        }
                    }, o))
                },
                pc = n("BNVM");

            function dc(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function fc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? dc(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dc(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Oc = {
                    mass: .6,
                    tension: 200,
                    friction: 23
                },
                mc = function() {
                    var e = E.a.useContext(uc);
                    if (null === e) throw Error("usePackageContext: Please provide PackageProvider value.");
                    var t = e.state,
                        n = e.setState,
                        a = t.isExpanded,
                        r = t.isChecked,
                        c = t.isActive,
                        o = t.isBase,
                        i = t.bannerSrc,
                        s = c && !o,
                        l = E.a.useCallback((function() {
                            s && n((function(e) {
                                return fc({}, e, {
                                    isChecked: !e.isChecked
                                })
                            }))
                        }), [s, n]),
                        u = E.a.useCallback((function() {
                            n((function(e) {
                                return fc({}, e, {
                                    isExpanded: !e.isExpanded
                                })
                            }))
                        }), [n]),
                        b = Object(pc.a)({}),
                        p = b.bind,
                        d = b.bounds.height;
                    return {
                        isExpanded: a,
                        isChecked: r,
                        isBase: o,
                        isCheckable: s,
                        toggleCheck: l,
                        toggleExpansion: u,
                        bannerSrc: i,
                        animationConfig: Oc,
                        detailsBind: p,
                        detailsHeight: d
                    }
                };
            E.a.createElement;
            var jc = {
                    name: "1l7naow",
                    styles: "overflow:hidden;will-change:opacity, height;"
                },
                gc = {
                    name: "3g969b",
                    styles: "padding:15px 20px 20px 15px;"
                },
                yc = function(e) {
                    var t = e.children,
                        n = Object(T.useTheme)().colors,
                        a = mc(),
                        r = a.isExpanded,
                        c = a.toggleExpansion,
                        o = a.animationConfig,
                        i = a.detailsBind,
                        s = a.detailsHeight,
                        l = Object(Wt.useSpring)({
                            height: r ? s : 0,
                            opacity: r ? 1 : 0,
                            config: o
                        });
                    return Object(N.b)(Wt.animated.div, {
                        role: "button",
                        onClick: c,
                        style: l,
                        css: jc
                    }, Object(N.b)(le.a, {
                        name: "arrow-up-slim",
                        css: Object(h.a)({
                            position: "absolute",
                            top: 10,
                            right: 10,
                            width: 16,
                            height: 16,
                            fill: n.CHROME
                        }, "")
                    }), Object(N.b)("div", i, Object(N.b)("div", {
                        css: gc
                    }, t)))
                },
                hc = (E.a.createElement, function() {
                    var e = mc(),
                        t = e.isExpanded,
                        n = e.bannerSrc,
                        a = e.animationConfig,
                        r = Object(Wt.useSpring)({
                            opacity: t ? 1 : 0,
                            config: a
                        });
                    return n ? Object(N.b)(Wt.animated.div, {
                        style: r,
                        css: Object(h.a)({
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
                });
            E.a.createElement;
            var vc = {
                    name: "snkqna",
                    styles: "width:50px;overflow:hidden;position:relative;flex-shrink:0;border-radius:4px 0 0 0;"
                },
                Ec = {
                    name: "11utai8",
                    styles: "position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);will-change:opacity;"
                },
                Tc = {
                    name: "1lyfijc",
                    styles: "transition:fill .2s;"
                },
                Sc = {
                    name: "11utai8",
                    styles: "position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);will-change:opacity;"
                },
                Cc = function(e) {
                    var t = e.onClick,
                        n = Object(T.useTheme)().colors,
                        a = mc(),
                        r = a.isChecked,
                        c = a.toggleCheck,
                        o = a.isCheckable,
                        i = a.isBase,
                        s = a.animationConfig,
                        l = Object(Wt.useSpring)({
                            borderWidth: r ? 60 : 1,
                            borderColor: r ? i ? n.BLACK : n.ORANGE_DARK : n.CHROME,
                            config: s
                        }),
                        u = Object(Wt.useSpring)({
                            opacity: r ? 0 : 1,
                            config: s
                        }),
                        b = Object(Wt.useSpring)({
                            opacity: r ? 1 : 0,
                            delay: r ? 250 : 0,
                            duration: r ? .1 : 100,
                            config: s
                        }),
                        p = E.a.useCallback((function() {
                            c(), o && t && t()
                        }), [o, t, c]);
                    return Object(N.b)("div", {
                        role: "button",
                        onClick: p,
                        style: {
                            cursor: o ? "pointer" : "not-allowed"
                        },
                        css: vc
                    }, Object(N.b)(Wt.animated.div, {
                        style: l,
                        css: Object(h.a)({
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
                    }), Object(N.b)(Wt.animated.div, {
                        style: u,
                        css: Ec
                    }, Object(N.b)(le.a, {
                        name: "plus-1",
                        width: 12,
                        height: 12,
                        style: {
                            fill: o ? n.BLACK : n.CHROME
                        },
                        css: Tc
                    })), Object(N.b)(Wt.animated.div, {
                        style: b,
                        css: Sc
                    }, Object(N.b)(le.a, {
                        name: "check-mark",
                        color: n.WHITE,
                        width: 25,
                        height: 25
                    })))
                };
            E.a.createElement;
            var wc = {
                    name: "10tg25l",
                    styles: "position:relative;will-change:height;overflow:hidden;"
                },
                xc = {
                    name: "uinsfl",
                    styles: "height:100%;display:flex;"
                },
                kc = {
                    name: "st3g97",
                    styles: "margin:10px 10px 10px 0;padding-left:10px;display:flex;flex-direction:column;width:100%;align-items:flex-start;position:relative;"
                },
                Pc = {
                    name: "15db0zh",
                    styles: "position:absolute;width:1px;left:0;"
                },
                Ic = function(e) {
                    var t = e.children,
                        n = e.height,
                        a = e.onSelect,
                        r = Object(T.useTheme)().colors,
                        c = mc(),
                        o = c.isExpanded,
                        i = c.isChecked,
                        s = c.isBase,
                        l = c.toggleExpansion,
                        u = c.bannerSrc,
                        b = c.animationConfig,
                        p = Object(Wt.useSpring)({
                            height: o ? u ? 120 : 0 : n,
                            opacity: o ? 0 : 1,
                            borderLeft: o ? "0px solid ".concat(r.CHROME) : "1px solid ".concat(r.CHROME),
                            config: b
                        }),
                        d = p.height,
                        f = p.opacity,
                        O = Object(Wt.useSpring)({
                            top: i ? -15 : 0,
                            bottom: i ? -15 : 0,
                            backgroundColor: i ? s ? r.BLACK : r.ORANGE_DARK : r.CHROME,
                            config: b
                        });
                    return Object(N.b)(Wt.animated.div, {
                        style: {
                            height: d
                        },
                        css: wc
                    }, Object(N.b)(le.a, {
                        name: "arrow-down-slim",
                        css: Object(h.a)({
                            position: "absolute",
                            top: 10,
                            right: 10,
                            width: 16,
                            height: 16,
                            fill: r.CHROME
                        }, "")
                    }), Object(N.b)(hc, null), Object(N.b)(Wt.animated.div, {
                        style: {
                            opacity: f
                        },
                        css: Object(h.a)({
                            height: n,
                            overflow: "hidden",
                            willChange: "opacity"
                        }, "")
                    }, Object(N.b)("div", {
                        css: xc
                    }, Object(N.b)(Cc, {
                        onClick: a
                    }), Object(N.b)("div", {
                        role: "button",
                        onClick: l,
                        css: kc
                    }, Object(N.b)(Wt.animated.div, {
                        style: O,
                        css: Pc
                    }), t))))
                },
                Rc = (E.a.createElement, function(e) {
                    var t = e.text,
                        n = Object(T.useTheme)().colors,
                        a = mc().isExpanded,
                        r = Object(Wt.useSpring)({
                            borderTopLeftRadius: a ? 4 : 0,
                            borderTopRightRadius: a ? 4 : 0
                        });
                    return Object(N.b)(Wt.animated.div, {
                        style: r,
                        css: Object(h.a)({
                            minHeight: 24,
                            backgroundColor: n.BLACK,
                            padding: "5px 10px",
                            margin: "auto 0"
                        }, "")
                    }, Object(N.b)("strong", {
                        css: Object(h.a)({
                            color: n.WHITE,
                            fontSize: 12,
                            display: "block"
                        }, "")
                    }, t))
                });
            E.a.createElement;
            var Ac = {
                    name: "qtiegx",
                    styles: "display:flex;height:100%;flex-direction:column;justify-content:center;"
                },
                Nc = {
                    name: "15tr7kj",
                    styles: "font-size:14px;line-height:normal;margin-bottom:6px;"
                },
                zc = {
                    name: "128nlh6",
                    styles: "font-size:13px;"
                },
                Lc = function(e) {
                    var t = e.description,
                        n = e.title,
                        a = Object(_.a)(e, ["description", "title"]);
                    return Object(N.b)(Ic, a, Object(N.b)("div", {
                        css: Ac
                    }, Object(N.b)("h3", {
                        css: Nc
                    }, n), Object(N.b)("div", {
                        css: zc
                    }, t)))
                };
            E.a.createElement;
            var _c = {
                    name: "lapthm",
                    styles: "font-size:14px;line-height:normal;"
                },
                Mc = {
                    name: "jnjom5",
                    styles: "width:100%;margin-top:18px;"
                },
                Dc = function(e) {
                    var t = e.description,
                        n = e.title,
                        a = e.onSelect,
                        r = Object(T.useTheme)().colors,
                        c = mc(),
                        o = c.isCheckable,
                        i = c.isChecked,
                        s = c.toggleCheck,
                        l = E.a.useCallback((function() {
                            s(), o && a && a()
                        }), [o, a, s]);
                    return Object(N.b)(yc, null, Object(N.b)("h3", {
                        css: _c
                    }, n), o && Object(N.b)(T.Button, {
                        variant: i ? "SECONDARY_BLACK_OUTLINE" : "PRIMARY_ON_WHITE",
                        onClick: l,
                        css: Mc
                    }, i ? "Usu\u0144 paczk\u0119" : "Dodaj paczk\u0119"), Object(N.b)("p", {
                        css: Object(h.a)({
                            fontSize: 14,
                            lineHeight: "18px",
                            p: {
                                lineHeight: "18px",
                                fontSize: 14
                            },
                            span: {
                                color: r.ORANGE_DARK
                            }
                        }, ""),
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    }))
                },
                Fc = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.content,
                        n = e.isActive,
                        a = e.isChecked,
                        r = e.onSelect,
                        c = Object(T.useTheme)().colors,
                        o = Object(k.a)(),
                        i = t.description,
                        s = t.longDescription,
                        l = t.teaser,
                        u = t.title;
                    return Object(N.b)(bc, {
                        isActive: n,
                        isChecked: a
                    }, Object(N.b)("div", {
                        css: Object(h.a)({
                            backgroundColor: c.STARDUST,
                            borderRadius: 4,
                            marginBottom: 10,
                            overflow: "hidden",
                            position: "relative",
                            zIndex: 0
                        }, "")
                    }, Object(N.b)(Lc, {
                        description: i,
                        height: o ? 90 : 78,
                        title: u,
                        onSelect: r
                    }), Object(N.b)(Dc, {
                        description: s,
                        title: u,
                        onSelect: r
                    }), l && Object(N.b)(Rc, {
                        text: l
                    })))
                })));
            Fc.displayName = "AdditionalPackage";
            var Bc = n("rs9p");
            E.a.createElement;
            var Vc = {
                    name: "1r8daop",
                    styles: "display:flex;flex-direction:column;font-size:14px;line-height:normal;"
                },
                Uc = function() {
                    var e = Object(S.b)().currentSingleOffer,
                        t = Ea().hide,
                        n = Object(na.a)(e),
                        a = n.allowedPackagesCount,
                        r = n.setSelectedPackages,
                        c = Object(Bc.a)(e),
                        o = c.getPackages,
                        i = c.selectedPackages,
                        s = c.togglePackage,
                        l = E.a.useCallback((function() {
                            r(i), t()
                        }), [t, i, r]);
                    if (!e) return null;
                    var u = o(),
                        b = Object(N.b)("p", {
                            css: Vc
                        }, Object(N.b)("strong", null, "Wybierz ", a, " ", Object(Vt.a)(["paczk\u0119, na kt\xf3rej", "paczki, na kt\xf3rych", "paczki, na kt\xf3rych"], a), " ", "Ci zale\u017cy"), Object(N.b)("span", null, "Paczki mo\u017cesz zmienia\u0107 co miesi\u0105c za darmo"));
                    return Object(N.b)(ic, {
                        description: b,
                        title: "Paczki us\u0142ug",
                        onAccept: l,
                        onCancel: t
                    }, u.map((function(e, t) {
                        return Object(N.b)(Fc, Object(A.a)({}, e, {
                            key: t,
                            onSelect: function() {
                                s(e)
                            }
                        }))
                    })))
                };
            Uc.displayName = "AdditionalPackages";
            E.a.createElement;
            var Hc = function() {
                var e = Object(S.b)().packageConfiguratorType;
                return e && "ADDITIONAL_PACKAGES_GROUP" === e ? Object(N.b)(Uc, null) : null
            };
            Hc.displayName = "PackagesConfigurator";
            E.a.createElement;
            var Gc = function() {
                var e, t = Object(T.useTheme)().bp;
                return Object(N.b)("div", {
                    css: Object(h.a)((e = {
                        width: "100%",
                        height: "95%"
                    }, Object(y.a)(e, t.ONLY_TABLET, {
                        width: "53%",
                        margin: "auto",
                        marginTop: 30
                    }), Object(y.a)(e, t.FROM_DESKTOP, {
                        maxWidth: 400
                    }), e), "")
                }, Object(N.b)(Hc, null))
            };
            Gc.displayName = "PackagesConfiguratorLayout";
            E.a.createElement;
            var Wc = E.a.memo((function() {
                var e = Object(S.b)(),
                    t = function(e, t, n, a, r) {
                        return e || t && (a || r) ? Tr : n ? Er : r ? tc : a ? Gc : lr
                    }(e.isLoadingSingleOffersList, e.isSuflerProcessing, e.shouldShowOfferDetails, e.shouldShowPackagesConfigurator, e.shouldShowTVConfigurator);
                return Object(N.b)(t, null)
            }));
            Wc.displayName = "Main";
            E.a.createElement;
            var Kc = E.a.memo((function() {
                var e = Object(k.a)(),
                    t = Object(S.b)(),
                    n = t.localizationData,
                    a = t.singleOffers,
                    r = t.offerType,
                    c = t.processType,
                    o = Object(R.b)(),
                    i = o.user,
                    s = o.market,
                    l = E.a.useMemo((function() {
                        return a.filter((function(e) {
                            return !!Object(Yt.b)(e) || !!Object(Yt.c)(e)
                        })).map((function(e) {
                            var t, n;
                            return (null === (t = Object(Yt.b)(e)) || void 0 === t ? void 0 : t.code) || (null === (n = Object(Yt.c)(e)) || void 0 === n ? void 0 : n.code)
                        })).join(" | ")
                    }), [a]),
                    u = r && Object(ce.a)(r);
                return E.a.useEffect((function() {
                    "MOBILE" !== u && l && Object(G.d)(n, l, i.isLogged, s, window.location.pathname, r, c)
                }), [n, l, i.isLogged, s, u, r, c]), e ? Object(N.b)(qa, null) : Object(N.b)(Wc, null)
            }));
            Kc.displayName = "Main";
            E.a.createElement;
            var qc = function() {
                    var e, t, n = Object(T.useTheme)(),
                        a = n.bp,
                        r = n.selectors;
                    return Object(N.b)(T.CustomScroll, {
                        css: Object(h.a)((e = {
                            width: "100%"
                        }, Object(y.a)(e, a.FROM_DESKTOP, {
                            maxWidth: 350,
                            maxHeight: "90%"
                        }), Object(y.a)(e, r.IE11, {
                            maxHeight: void 0
                        }), e), "")
                    }, Object(N.b)("div", {
                        css: Object(h.a)((t = {
                            width: "100%"
                        }, Object(y.a)(t, a.ONLY_TABLET, {
                            width: "53%",
                            margin: "auto",
                            marginBottom: 30
                        }), Object(y.a)(t, a.FROM_DESKTOP, {
                            maxWidth: 335
                        }), t), "")
                    }, Object(N.b)(hn, null), Object(N.b)(jn, null), Object(N.b)(ha, null), Object(N.b)(xa, null), Object(N.b)(Sn, null), Object(N.b)(Mn, null), Object(N.b)(Yn, null), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({}, a.FROM_DESKTOP, {
                            display: "none"
                        }), "")
                    }, Object(N.b)(ia, null))))
                },
                Yc = (E.a.createElement, function() {
                    var e, t = Object(T.useTheme)().bp;
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            width: "100%"
                        }, Object(y.a)(e, t.FROM_TABLET, {
                            width: "53%"
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            width: 400
                        }), Object(y.a)(e, t.ONLY_TABLET, {
                            margin: "30px auto"
                        }), e), "")
                    }, Object(N.b)($a, null), Object(N.b)(sr, null), Object(N.b)(ia, null))
                }),
                Xc = (E.a.createElement, function() {
                    var e = Object(T.useTheme)().bp;
                    return Object(N.b)("h3", {
                        css: Object(h.a)(Object(y.a)({}, e.ONLY_TABLET, {
                            display: "none"
                        }), "")
                    }, "Chwileczk\u0119...")
                }),
                Zc = (E.a.createElement, function() {
                    var e = Object(T.useTheme)().bp;
                    return Object(N.b)(T.Loader, {
                        css: Object(h.a)(Object(y.a)({}, e.ONLY_TABLET, {
                            margin: "0 auto"
                        }), "")
                    })
                }),
                Jc = (E.a.createElement, E.a.memo((function() {
                    var e = Object(S.b)(),
                        t = function(e, t, n, a, r) {
                            return !t || r || a ? e ? Xc : n || r || a ? Yc : qc : Zc
                        }(e.isLoadingSingleOffersList, e.isSuflerProcessing, e.shouldShowOfferDetails, e.shouldShowPackagesConfigurator, e.shouldShowTVConfigurator);
                    return Object(N.b)(t, null)
                })));
            Jc.displayName = "Description";
            E.a.createElement;
            var Qc = E.a.memo((function(e) {
                var t = e.isVisible,
                    n = e.children,
                    a = Object(T.useTheme)(),
                    r = a.zIndex,
                    c = a.colors,
                    o = Object(ot.c)().isNavbarCollapsed,
                    i = Object(T.useLayer)().level > 0,
                    s = Object(Wt.useTransition)(t, {
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
                return Object(N.b)(E.a.Fragment, null, s((function(e, t) {
                    return t && Object(N.b)(Wt.animated.div, {
                        css: Object(h.a)({
                            position: "fixed",
                            bottom: i ? 0 : 50,
                            top: i ? 20 : o ? 50 : 80,
                            transition: "top 0.1s ease-in",
                            backgroundColor: c.WHITE,
                            zIndex: r.LAYER_3_5,
                            padding: "20px 20px 0 20px",
                            width: "100%"
                        }, ""),
                        style: e
                    }, n)
                })))
            }));
            Qc.displayName = "AnimationWrapper";
            E.a.createElement;
            var $c = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                eo = function() {
                    var e = Object(S.b)().dispatch,
                        t = E.a.useCallback((function(t) {
                            e({
                                type: "isSuflerDescriptionInView",
                                payload: t
                            })
                        }), [e]);
                    return Object(N.b)(Dt.a, {
                        onChange: t,
                        rootMargin: "-60px"
                    }, Object(N.b)("div", {
                        css: $c
                    }, Object(N.b)($a, null), Object(N.b)(sr, null)))
                },
                to = (E.a.createElement, E.a.memo((function() {
                    var e = Object(S.b)(),
                        t = e.shouldShowOfferDetails,
                        n = e.shouldShowPackagesConfigurator,
                        a = e.shouldShowTVConfigurator,
                        r = t || n || a;
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)(Qc, {
                        isVisible: r
                    }, Object(N.b)(E.a.Fragment, null, t && Object(N.b)(vr, null), n && Object(N.b)(Hc, null), a && Object(N.b)(ec, null))), Object(N.b)(eo, null))
                })));
            to.displayName = "Description";
            E.a.createElement;
            var no = E.a.memo((function() {
                return Object(k.a)() ? Object(N.b)(to, null) : Object(N.b)(Jc, null)
            }));
            no.displayName = "Description";
            E.a.createElement;
            var ao = E.a.memo((function(e) {
                var t = e.children,
                    n = Object(S.b)(),
                    a = n.pk,
                    r = n.processType,
                    c = n.offerType,
                    o = n.dispatch,
                    i = n.shouldShowOfferDetails,
                    s = n.authorizationData,
                    l = n.currentOffer,
                    u = n.localizationData,
                    b = n.currentSingleOffer,
                    p = n.currentProcess,
                    d = n.currentFixMigrationProcessType,
                    f = n.isUserLogged,
                    O = Object(T.useTheme)().bp,
                    m = Object(R.b)().market;
                return E.a.useEffect((function() {
                    b || function() {
                        var e, t, n, i;
                        he.a.async((function(b) {
                            for (;;) switch (b.prev = b.next) {
                                case 0:
                                    if (r && c && l) {
                                        b.next = 2;
                                        break
                                    }
                                    return b.abrupt("return");
                                case 2:
                                    return o({
                                        type: "setIsLoadingSingleOffersList",
                                        payload: !0
                                    }), b.prev = 3, b.next = 6, he.a.awrap(Object(Ne.k)());
                                case 6:
                                    return e = b.sent, t = e.isOnlineCookie, n = e.isSmsVerified, o({
                                        type: "setHasSelectedAccount",
                                        payload: !!e.accountCode
                                    }), t && o({
                                        type: "setIsUserLoggedWithCAAP",
                                        payload: !0
                                    }), n && o({
                                        type: "setIsUserLoggedWithSms",
                                        payload: !0
                                    }), b.next = 14, he.a.awrap(Object(Ne.d)(Object(de.a)(c) ? {
                                        __type: "MOBILE",
                                        msisdn: s ? s.phoneNumber : "",
                                        configComponentPk: l.configComponentPk,
                                        processType: r,
                                        offerType: c,
                                        filterPk: l.filterConfigPk || "unknown",
                                        pk: a
                                    } : {
                                        __type: "FIX",
                                        boxId: p && p.boxId ? p.boxId : null,
                                        offerType: c,
                                        leadAddressForm: u,
                                        processType: d || "ACTIVATION",
                                        configComponentPk: l.configComponentPk,
                                        filterPk: l.filterConfigPk || "unknown",
                                        pk: a
                                    }));
                                case 14:
                                    i = b.sent, o({
                                        type: "setSingleOffers",
                                        payload: i.offers
                                    }), o({
                                        type: "setIsLoadingSingleOffersList",
                                        payload: !1
                                    }), b.next = 23;
                                    break;
                                case 19:
                                    b.prev = 19, b.t0 = b.catch(3), o({
                                        type: "setIsLoadingSingleOffersList",
                                        payload: !1
                                    }), "NO_OFFERS_FIX" === b.t0.message ? (Object(G.d)(u, "LTE", f, m, window.location.pathname, c, r), o({
                                        type: "setProcessError",
                                        payload: {
                                            type: "NO_OFFERS_FIX"
                                        }
                                    })) : o({
                                        type: "setProcessError",
                                        payload: {
                                            type: "DEFAULT_ERROR"
                                        }
                                    });
                                case 23:
                                case "end":
                                    return b.stop()
                            }
                        }), null, null, [
                            [3, 19]
                        ], Promise)
                    }()
                }), [s, l, b, o, u, c, r, m, p, a, d, f]), Object(N.b)(E.a.Fragment, null, E.a.cloneElement(t, {
                    wrapperCss: Object(y.a)({}, O.TO_DESKTOP, {
                        flexDirection: i ? "column" : "column-reverse",
                        alignItems: "stretch",
                        width: "100%"
                    }),
                    separatorCSS: Object(y.a)({}, O.ONLY_TABLET, {
                        display: "none"
                    })
                }))
            }));
            ao.displayName = "Container";
            E.a.createElement;
            var ro = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                co = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                oo = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                io = {
                    name: "1yitbw3",
                    styles: "width:50%;margin-top:20px;"
                },
                so = E.a.memo((function(e) {
                    var t = e.dispatch,
                        n = Object(S.b)().processType,
                        a = Object(T.useTheme)(),
                        r = a.bp,
                        c = a.colors,
                        o = E.a.useState({
                            status: null,
                            message: null
                        }),
                        i = Object(C.a)(o, 2),
                        s = i[0],
                        l = i[1],
                        u = E.a.useState(!1),
                        b = Object(C.a)(u, 2),
                        p = b[0],
                        d = b[1],
                        f = Ae()(),
                        O = E.a.useCallback((function(e) {
                            if (n) {
                                ! function() {
                                    var a, r;
                                    he.a.async((function(c) {
                                        for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                return d(!0), l({
                                                    status: null,
                                                    message: null
                                                }), c.prev = 2, c.next = 5, he.a.awrap(Object(Ge.e)({
                                                    phone: Fe(e.phone),
                                                    processType: n
                                                }));
                                            case 5:
                                                a = c.sent, r = a.requestToken, d(!1), t({
                                                    type: "setAuthorizationToken",
                                                    payload: r
                                                }), t({
                                                    type: "setPhoneNumber",
                                                    payload: Fe(e.phone)
                                                }), c.next = 16;
                                                break;
                                            case 12:
                                                c.prev = 12, c.t0 = c.catch(2), d(!1), l({
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
                    return Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            padding: "0 20px"
                        }, r.FROM_TABLET, {
                            padding: 0,
                            paddingBottom: 30,
                            maxWidth: 400
                        }), "")
                    }, Object(N.b)("p", {
                        css: ro
                    }, "Wpisz sw\xf3j numer telefonu w Orange, z kt\xf3rego korzystasz (w ofercie na abonament) lub zaloguj si\u0119 do M\xf3j Orange."), Object(N.b)("p", {
                        css: co
                    }, "Je\u017celi korzystasz z internetu mobilnego, kod z SMS-em autoryzacyjnym mo\u017cesz odebra\u0107 w aplikacji obs\u0142uguj\u0105cej modem/router."), Object(N.b)(Re.FormContext, f, Object(N.b)("form", {
                        onSubmit: f.handleSubmit(O)
                    }, Object(N.b)("div", {
                        css: oo
                    }, Object(N.b)(Ie.c, {
                        name: "phone",
                        ref: f.register,
                        variant: "STARDUST",
                        prefix: "(+48)",
                        placeholder: "Numer telefonu",
                        type: "tel"
                    })), "ERROR" === s.status && Object(N.b)("p", {
                        css: Object(h.a)({
                            marginTop: 0,
                            fontSize: 14,
                            fontWeight: "bold",
                            color: c.DANGER
                        }, "")
                    }, s.message), Object(N.b)(T.Button, {
                        type: "submit",
                        variant: "PRIMARY_ON_BLACK",
                        disabled: p,
                        css: io
                    }, "Dalej"))))
                }));
            so.displayName = "NumberVerification";
            var lo = n("0e5S");
            E.a.createElement;
            var uo = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                bo = {
                    name: "1b2e6uh",
                    styles: "width:100%;display:flex;justify-content:space-between;margin-top:40px;"
                },
                po = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                fo = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                Oo = E.a.memo((function() {
                    var e, t = Object(S.b)(),
                        n = t.dispatch,
                        a = t.currentSingleOffer,
                        r = t.offerType,
                        c = t.processType,
                        o = t.clearCache,
                        i = Object(T.useTheme)().bp,
                        s = E.a.useCallback((function() {
                            n({
                                type: "goToSingleOffer"
                            })
                        }), [n]),
                        l = E.a.useState(!1),
                        u = Object(C.a)(l, 2),
                        b = u[0],
                        p = u[1],
                        d = E.a.useCallback((function() {
                            if (a && r && c) {
                                var e = Object(Yt.f)(a),
                                    t = Object(Yt.a)(a),
                                    n = (null === e || void 0 === e ? void 0 : e.productCharacteristic.rateplanId) || (null === t || void 0 === t ? void 0 : t.productCharacteristic.rateplanId);
                                p(!0);
                                he.a.async((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, he.a.awrap(Object(ct.a)({
                                                ratePlanId: n,
                                                id: a.propositionId,
                                                offerType: r,
                                                processType: c
                                            }));
                                        case 2:
                                            o(), window.location.href = "/koszyk/multi", p(!1);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), null, null, null, Promise)
                            }
                        }), [o, a, r, c]);
                    return Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            padding: "0 20px"
                        }, Object(y.a)(e, i.FROM_TABLET, {
                            padding: 0
                        }), Object(y.a)(e, i.FROM_DESKTOP, {
                            maxWidth: 400
                        }), e), "")
                    }, Object(N.b)("p", {
                        css: uo
                    }, "Przepraszamy, ale niestety nie mo\u017cesz skorzysta\u0107 z widocznego rabatu. Wr\xf3\u0107 do konfiguratora i wybierz ofert\u0119 dla siebie lub dodaj do koszyka widoczn\u0105 ofert\u0119."), Object(N.b)("div", {
                        css: bo
                    }, Object(N.b)(T.Button, {
                        onClick: s,
                        disabled: b,
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: po
                    }, "Wstecz"), Object(N.b)(T.Button, {
                        disabled: b,
                        onClick: d,
                        css: fo
                    }, "Dalej")))
                }));

            function mo(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function jo(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? mo(Object(n), !0).forEach((function(t) {
                        Object(y.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mo(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var go = {
                phoneNumber: null,
                authorizationToken: null,
                isVerificationError: !1
            };

            function yo(e, t) {
                switch (t.type) {
                    case "setAuthorizationToken":
                        return jo({}, e, {
                            authorizationToken: t.payload
                        });
                    case "setPhoneNumber":
                        return jo({}, e, {
                            phoneNumber: t.payload
                        });
                    case "setIsVerificationError":
                        return jo({}, e, {
                            isVerificationError: t.payload
                        });
                    default:
                        return e
                }
            }
            E.a.createElement;
            var ho = E.a.memo((function() {
                var e = E.a.useReducer(yo, go),
                    t = Object(C.a)(e, 2),
                    n = t[0],
                    a = t[1];
                return n.isVerificationError ? Object(N.b)(Oo, null) : n.authorizationToken ? Object(N.b)(lo.a, {
                    dispatch: a,
                    phoneNumber: n.phoneNumber,
                    authorizationToken: n.authorizationToken
                }) : Object(N.b)(so, {
                    dispatch: a
                })
            }));
            ho.displayName = "Main";
            E.a.createElement;
            var vo = {
                    name: "xdh5lg",
                    styles: "margin-bottom:20px;width:auto;height:auto;"
                },
                Eo = E.a.memo((function() {
                    var e, t = Object(S.b)(),
                        n = t.shouldShowOfferDetails,
                        a = t.currentOffer,
                        r = Object(k.a)(),
                        c = Object(T.useTheme)().bp;
                    return a ? !r && n ? Object(N.b)(Er, {
                        css: Object(h.a)(Object(y.a)({}, c.ONLY_TABLET, {
                            width: "100%"
                        }), "")
                    }) : Object(N.b)(E.a.Fragment, null, Object(N.b)(Qc, {
                        isVisible: n
                    }, Object(N.b)(vr, null)), Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            width: "100%",
                            padding: "0 20px"
                        }, Object(y.a)(e, c.ONLY_TABLET, {
                            marginTop: 30,
                            padding: 0
                        }), Object(y.a)(e, c.FROM_DESKTOP, {
                            width: 400
                        }), e), "")
                    }, Object(N.b)($a, null), Object(N.b)(sr, null), r && Object(N.b)(T.ArrowSeparator, {
                        orientation: "HORIZONTAL",
                        css: vo
                    }))) : null
                }));
            Eo.displayName = "Description";
            E.a.createElement;
            var To = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                So = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                Co = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                wo = {
                    name: "k008qs",
                    styles: "display:flex;"
                },
                xo = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                ko = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                Po = E.a.memo((function() {
                    var e, t = E.a.useState([]),
                        n = Object(C.a)(t, 2),
                        a = n[0],
                        r = n[1],
                        c = E.a.useState(""),
                        o = Object(C.a)(c, 2),
                        i = o[0],
                        s = o[1],
                        l = E.a.useState(),
                        u = Object(C.a)(l, 2),
                        b = u[0],
                        p = u[1],
                        d = E.a.useState(!0),
                        f = Object(C.a)(d, 2),
                        O = f[0],
                        m = f[1],
                        j = E.a.useState({
                            isError: !1,
                            message: ""
                        }),
                        g = Object(C.a)(j, 2),
                        v = g[0],
                        w = g[1],
                        x = Object(S.b)(),
                        k = x.dispatch,
                        P = x.currentSingleOffer,
                        I = x.offerType,
                        A = x.processType,
                        z = Object(R.b)().market,
                        L = Object(T.useTheme)(),
                        _ = L.bp,
                        M = L.colors,
                        D = ta().pricePlan;
                    E.a.useEffect((function() {
                        ! function() {
                            var e;
                            he.a.async((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return m(!0), t.next = 3, he.a.awrap(Object(Ne.j)());
                                    case 3:
                                        e = t.sent, r(e), m(!1);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), null, null, null, Promise)
                        }()
                    }), []);
                    var F = E.a.useState(!1),
                        B = Object(C.a)(F, 2),
                        V = B[0],
                        U = B[1],
                        H = Object($n.a)().addItemToCart,
                        W = E.a.useCallback((function() {
                            k(P ? {
                                type: "goToSingleOffer"
                            } : {
                                type: "goToOffers"
                            })
                        }), [k, P]),
                        K = E.a.useCallback((function() {
                            if (P && I && A) {
                                var e = Object(Yt.d)(P);
                                he.a.async((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return U(!0), v.isError && w({
                                                isError: !1,
                                                message: ""
                                            }), Object(G.b)(e.features.config[0].value.Name, P.propositionId, D, A, I, z), t.prev = 3, t.next = 6, he.a.awrap(Object(Ne.l)({
                                                id: i,
                                                accountCode: (null === b || void 0 === b ? void 0 : b.accountCode) || ""
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
                        }), [H, b, P, v.isError, z, I, D, A, i]),
                        q = E.a.useCallback((function(e) {
                            var t = a.find((function(t) {
                                return t.accountId === e.target.value
                            }));
                            p(t || void 0), s(t ? t.accountId : "")
                        }), [a]);
                    return O ? Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({}, _.TO_DESKTOP, {
                            maxWidth: 80,
                            margin: "0 auto",
                            marginTop: "25%"
                        }), "")
                    }, Object(N.b)(T.Loader, null)) : Object(N.b)("div", {
                        css: Object(h.a)((e = {
                            padding: "0 20px"
                        }, Object(y.a)(e, _.FROM_TABLET, {
                            padding: 0,
                            paddingBottom: 30
                        }), Object(y.a)(e, _.FROM_DESKTOP, {
                            maxWidth: 400
                        }), e), "")
                    }, Object(N.b)("p", {
                        css: To
                    }, "Zdecyduj czy zam\xf3wienie ma by\u0107 rozliczane w ramach faktury dla posiadanego juz konta czy nowego."), Object(N.b)("form", {
                        css: So
                    }, Object(N.b)(T.RadioGroup, {
                        name: "select_account",
                        onChange: function(e) {
                            q(e)
                        }
                    }, a.map((function(e) {
                        return Object(N.b)(T.RadioOption, {
                            key: e.accountId,
                            name: "konto",
                            value: e.accountId,
                            wrapperCss: {
                                marginBottom: 20,
                                fontSize: 14
                            },
                            isChecked: i === e.accountId
                        }, Object(N.b)("span", null, e.accountCode, Object(N.b)("br", null), e.accountContracts.map((function(t, n) {
                            return Object(N.b)("span", {
                                key: n,
                                css: Co
                            }, " ", t.serviceNumber.split(/(\d{3})/).join(" ").trim(), n === e.accountContracts.length - 1 ? "" : ",")
                        }))))
                    })), Object(N.b)(T.RadioOption, {
                        name: "konto",
                        value: "",
                        wrapperCss: {
                            marginBottom: 20,
                            fontSize: 14
                        },
                        isChecked: "" === i
                    }, "Stw\xf3rz nowe konto"))), Object(N.b)("div", {
                        css: wo
                    }, Object(N.b)(T.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: W,
                        css: xo
                    }, "Wstecz"), Object(N.b)(T.Button, {
                        disabled: V,
                        variant: "PRIMARY_ON_BLACK",
                        onClick: K,
                        css: ko
                    }, "Dalej")), v.isError && Object(N.b)("div", {
                        css: Object(h.a)({
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 20,
                            height: 16,
                            color: M.DANGER
                        }, "")
                    }, v.message))
                }));
            Po.displayName = "Accounts";
            E.a.createElement;
            var Io = E.a.memo((function() {
                return Object(N.b)(Po, null)
            }));
            Io.displayName = "Main";
            E.a.createElement;
            var Ro = E.a.memo((function(e) {
                var t, n = e.text,
                    a = Object(T.useTheme)().bp;
                return Object(N.b)("div", {
                    css: Object(h.a)(Object(y.a)({
                        padding: 20
                    }, a.FROM_TABLET, {
                        padding: 0,
                        maxWidth: 400
                    }), "")
                }, Object(N.b)("h2", {
                    css: Object(h.a)((t = {}, Object(y.a)(t, a.FROM_DESKTOP, {
                        fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                        lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                    }), Object(y.a)(t, "@media (min-width: 1240px)", {
                        fontSize: 60,
                        lineHeight: "62px"
                    }), t), "")
                }, n))
            }));
            Ro.displayName = "DescriptionContent";
            E.a.createElement;
            var Ao = {
                    name: "1and29",
                    styles: "min-width:150px;"
                },
                No = function(e) {
                    var t = e.type,
                        n = Object(T.useTheme)().bp,
                        a = Object(S.b)().dispatch,
                        r = E.a.useCallback((function() {
                            if ("NO_OFFERS_FIX" === t) return a({
                                type: "selectOffer",
                                payload: "DATA"
                            }), void a({
                                type: "selectProcess",
                                payload: "ACTIVATION"
                            });
                            a({
                                type: "goToOffers"
                            })
                        }), [a, t]);
                    return Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            padding: "0 20px"
                        }, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), "")
                    }, Object(N.b)("p", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 20
                        }, n.FROM_TABLET, {
                            fontSize: 18,
                            marginBottom: 40
                        }), "")
                    }, Go[t].description), Object(N.b)(T.Button, {
                        type: "button",
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: r,
                        css: Ao
                    }, Go[t].buttonText || "Wstecz"))
                };
            E.a.createElement;
            var zo = {
                name: "1nbic85",
                styles: "width:150px;"
            };
            E.a.createElement;
            var Lo = {
                    name: "q12xye",
                    styles: "display:flex;margin-top:40px;"
                },
                _o = {
                    name: "1ymgjr1",
                    styles: "flex:1;margin-right:20px;"
                },
                Mo = {
                    name: "1rr4qq7",
                    styles: "flex:1;"
                },
                Do = (E.a.createElement, E.a.memo((function() {
                    var e = Object(T.useTheme)().bp,
                        t = Object(S.b)().clearCache;
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)("p", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 20
                        }, e.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, "Jeste\u015b klientem biznesowym, a wybra\u0142e\u015b ofert\u0119 indywidualn\u0105. Przejd\u017a na stron\u0119 dla firm i wybierz najlepsz\u0105 ofert\u0119 dla Twojej firmy."), Object(N.b)(T.Button, {
                        type: "button",
                        variant: "PRIMARY_ON_WHITE",
                        onClick: function() {
                            t(), window.location.assign("/male-srednie-firmy")
                        },
                        css: Object(h.a)(Object(y.a)({
                            width: "100%"
                        }, e.FROM_TABLET, {
                            width: 260
                        }), "")
                    }, "Wybierz ofert\u0119 dla firm"), Object(N.b)("p", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 20
                        }, e.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, 'Pomy\u0142ka? Nie szkodzi - kliknij "Wstecz" i wpisz sw\xf3j numer prywatny.'))
                })));
            Do.displayName = "B2BMarketError";
            E.a.createElement;
            var Fo = E.a.memo((function() {
                var e = Object(T.useTheme)().bp,
                    t = Object(S.b)().clearCache;
                return Object(N.b)(E.a.Fragment, null, Object(N.b)("p", {
                    css: Object(h.a)(Object(y.a)({
                        fontSize: 14,
                        marginBottom: 20
                    }, e.FROM_TABLET, {
                        fontSize: 18
                    }), "")
                }, "Jeste\u015b klientem indywidualnym, a wybra\u0142e\u015b ofert\u0119 biznesow\u0105. Przejd\u017a na stron\u0119 dla klient\xf3w indywidualnych i wybierz najlepsz\u0105 ofert\u0119 dla Ciebie."), Object(N.b)(T.Button, {
                    type: "button",
                    variant: "PRIMARY_ON_WHITE",
                    onClick: function() {
                        t(), window.location.assign("/")
                    },
                    css: Object(h.a)(Object(y.a)({
                        width: "100%"
                    }, e.FROM_TABLET, {
                        width: 260
                    }), "")
                }, "Wybierz ofert\u0119 indywidualn\u0105"), Object(N.b)("p", {
                    css: Object(h.a)(Object(y.a)({
                        fontSize: 14,
                        marginBottom: 20
                    }, e.FROM_TABLET, {
                        fontSize: 18
                    }), "")
                }, 'Pomy\u0142ka? Nie szkodzi - kliknij "Wstecz" i wpisz sw\xf3j numer biznesowy.'))
            }));
            Fo.displayName = "B2CMarketError";
            E.a.createElement;
            var Bo = E.a.memo((function() {
                var e = Object(T.useTheme)().bp;
                return Object(N.b)("p", {
                    css: Object(h.a)(Object(y.a)({
                        fontSize: 14,
                        marginBottom: 20
                    }, e.FROM_TABLET, {
                        fontSize: 18
                    }), "")
                }, "Przepraszamy, autoryzacja zako\u0144czy\u0142a si\u0119 nieoczekiwanym b\u0142\u0119dem. Prosimy, zautoryzuj si\u0119 ponownie lub spr\xf3buj za chwil\u0119.")
            }));
            Bo.displayName = "ServerError";
            E.a.createElement;
            var Vo = {
                    B2C_IN_CART: Do,
                    B2B_IN_CART: Fo,
                    SERVER_ERROR: Bo
                },
                Uo = (E.a.createElement, function(e) {
                    var t = e.type,
                        n = Object(T.useTheme)().bp,
                        a = Object(S.b)().clearCache,
                        r = "B2C_CLIENT" === t ? "/" : "/male-srednie-firmy";
                    return Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            padding: "0 20px"
                        }, n.FROM_TABLET, {
                            padding: 0,
                            maxWidth: 400
                        }), "")
                    }, Object(N.b)("p", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 20
                        }, n.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, Go[t].description), Object(N.b)(T.Button, {
                        type: "button",
                        variant: "PRIMARY_ON_WHITE",
                        onClick: function() {
                            a(), window.location.assign(r)
                        },
                        css: Object(h.a)(Object(y.a)({
                            width: "100%"
                        }, n.FROM_TABLET, {
                            width: 260
                        }), "")
                    }, Go[t].buttonText))
                }),
                Ho = {
                    DEFAULT_ERROR: No,
                    ADD_TO_CART_ERROR: function(e) {
                        var t = e.message,
                            n = e.type,
                            a = Object(T.useTheme)().bp,
                            r = Object(S.b)().dispatch,
                            c = E.a.useCallback((function() {
                                r({
                                    type: "goToOffers"
                                })
                            }), [r]);
                        return Object(N.b)("div", {
                            css: Object(h.a)(Object(y.a)({
                                padding: "0 20px"
                            }, a.FROM_TABLET, {
                                padding: 0,
                                maxWidth: 400
                            }), "")
                        }, Object(N.b)("p", {
                            css: Object(h.a)(Object(y.a)({
                                fontSize: 14,
                                marginBottom: 20
                            }, a.FROM_TABLET, {
                                fontSize: 18,
                                marginBottom: 40
                            }), "")
                        }, t || Go[n].description), Object(N.b)("div", {
                            css: Lo
                        }, Object(N.b)(T.Button, {
                            type: "button",
                            variant: "SECONDARY_BLACK_OUTLINE",
                            onClick: c,
                            css: _o
                        }, "Wstecz"), Object(N.b)(T.Button, {
                            type: "button",
                            variant: "PRIMARY_ON_WHITE",
                            onClick: function() {
                                window.location.assign("/koszyk/multi")
                            },
                            css: Mo
                        }, "Koszyk")))
                    },
                    CHECK_MARKET_ERROR: function(e) {
                        var t = e.backTo,
                            n = e.message,
                            a = Object(T.useTheme)().bp,
                            r = Object(S.b)().dispatch,
                            c = E.a.useCallback((function() {
                                r({
                                    type: t
                                })
                            }), [r, t]),
                            o = Vo[n];
                        return Object(N.b)("div", {
                            css: Object(h.a)(Object(y.a)({
                                padding: "0 20px"
                            }, a.FROM_TABLET, {
                                padding: 0,
                                maxWidth: 400
                            }), "")
                        }, o && Object(N.b)(o, null), Object(N.b)(T.Button, {
                            type: "button",
                            variant: "SECONDARY_BLACK_OUTLINE",
                            onClick: c,
                            css: Object(h.a)(Object(y.a)({
                                width: "100%"
                            }, a.FROM_TABLET, {
                                width: 260
                            }), "")
                        }, "Wstecz"))
                    },
                    MNP_UNABLE_TO_PROCESS: function() {
                        var e = Object(S.b)(),
                            t = e.dispatch,
                            n = e.currentProcess,
                            a = e.offerType,
                            r = e.processType,
                            c = ae(a, r).numberOfContracts,
                            o = Object(T.useTheme)().bp,
                            i = E.a.useCallback((function() {
                                if (a) {
                                    var e = Object(ce.a)(a);
                                    t("MOBILE" === e ? c >= 1 ? {
                                        type: "goToOffers"
                                    } : {
                                        type: "goToAuthorization"
                                    } : {
                                        type: "goToOffers"
                                    })
                                }
                            }), [a, t, c]);
                        return n && n.authorizationInfo ? Object(N.b)("div", {
                            css: Object(h.a)(Object(y.a)({
                                padding: "0 20px"
                            }, o.FROM_TABLET, {
                                padding: 0,
                                maxWidth: 400
                            }), "")
                        }, Object(N.b)("p", {
                            css: Object(h.a)(Object(y.a)({
                                fontSize: 14,
                                marginBottom: 20
                            }, o.FROM_TABLET, {
                                fontSize: 18,
                                marginBottom: 40
                            }), "")
                        }, n.authorizationInfo.error.subtitle, " ", n.authorizationInfo.error.description), Object(N.b)("p", null, Object(N.b)(T.Button, {
                            type: "button",
                            variant: "SECONDARY_BLACK_OUTLINE",
                            onClick: i,
                            css: zo
                        }, "Wstecz"))) : null
                    },
                    NO_OFFERS_FIX: No,
                    NO_SERVICES: No,
                    B2B_CLIENT: Uo,
                    B2C_CLIENT: Uo
                },
                Go = {
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
                Wo = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.type;
                    return Object(N.b)(Ro, {
                        text: Go[t].title
                    })
                })));
            Wo.displayName = "AddToCart";
            E.a.createElement;
            var Ko = E.a.memo((function() {
                    var e = Object(S.b)().currentProcess;
                    return e && e.authorizationInfo ? Object(N.b)(Ro, {
                        text: e.authorizationInfo.error.title
                    }) : null
                })),
                qo = (E.a.createElement, {
                    B2C_IN_CART: "Masz firm\u0119?",
                    B2B_IN_CART: "Jeste\u015b klientem indywidualnym?",
                    SERVER_ERROR: "Wyst\u0105pi\u0142 b\u0142\u0105d"
                }),
                Yo = E.a.memo((function(e) {
                    var t = e.message;
                    return Object(N.b)(Ro, {
                        text: qo[t]
                    })
                }));
            Yo.displayName = "CheckMarket";
            E.a.createElement;
            var Xo = function(e) {
                    var t = e.type;
                    return Object(N.b)(Ro, {
                        text: Go[t].title
                    })
                },
                Zo = (E.a.createElement, {
                    ADD_TO_CART_ERROR: Wo,
                    CHECK_MARKET_ERROR: Yo,
                    MNP_UNABLE_TO_PROCESS: Ko,
                    DEFAULT_ERROR: Xo,
                    NO_OFFERS_FIX: Xo,
                    NO_SERVICES: Xo,
                    B2B_CLIENT: Xo,
                    B2C_CLIENT: Xo
                }),
                Jo = E.a.memo((function() {
                    var e = Object(S.b)().processError;
                    if (!e || !Zo[e.type]) return null;
                    var t = e.type,
                        n = e.data,
                        a = Zo[t];
                    return Object(N.b)(a, Object(A.a)({}, n, {
                        type: t
                    }))
                }));
            Jo.displayName = "Description";
            E.a.createElement;
            var Qo = E.a.memo((function() {
                var e = Object(S.b)().processError;
                if (!e || !Ho[e.type]) return null;
                var t = e.type,
                    n = e.data,
                    a = Ho[t];
                return Object(N.b)(a, Object(A.a)({}, n, {
                    type: t
                }))
            }));
            Qo.displayName = "Main";
            E.a.createElement;
            var $o = E.a.memo((function() {
                var e, t = Object(k.a)(),
                    n = Object(T.useTheme)(),
                    a = n.colors,
                    r = n.bp,
                    c = Object(S.b)(),
                    o = c.currentProcess,
                    i = c.currentOffer,
                    s = c.offerType,
                    l = c.processType,
                    u = (null === o || void 0 === o ? void 0 : o.badgeText) || (t ? "Chc\u0119 przed\u0142u\u017cy\u0107 <br /> umow\u0119 dla numeru:" : "Chc\u0119 przed\u0142u\u017cy\u0107 <br /> umow\u0119 <br /> dla numeru:");
                return 1 === ae(s, l).numberOfContracts && "RETENTION" === l ? null : Object(N.b)("div", null, t && Object(N.b)("strong", {
                    css: Object(h.a)({
                        color: a.ORANGE_DARK,
                        display: "inline-block",
                        padding: "0 20px",
                        marginBottom: 10
                    }, "")
                }, i && i.name), Object(N.b)("h2", {
                    css: Object(h.a)((e = {
                        padding: "0 20px 30px 20px"
                    }, Object(y.a)(e, r.FROM_TABLET, {
                        padding: "40px 20px"
                    }), Object(y.a)(e, r.FROM_DESKTOP, {
                        padding: 0,
                        fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                        lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                    }), Object(y.a)(e, "@media (min-width: 1240px)", {
                        fontSize: 60,
                        lineHeight: "62px"
                    }), e), ""),
                    dangerouslySetInnerHTML: {
                        __html: u
                    }
                }))
            }));
            $o.displayName = "Description";
            var ei = n("cFFy");
            E.a.createElement;
            var ti = {
                    name: "5sysfs",
                    styles: "margin:0 40px 0 20px;flex-basis:100%;"
                },
                ni = {
                    name: "1i2veut",
                    styles: "flex-shrink:0;transition:color .15s;"
                },
                ai = E.a.memo((function(e) {
                    var t, n = e.phoneNumber,
                        a = Object(T.useTheme)(),
                        r = a.colors,
                        c = a.selectors,
                        o = a.bp,
                        i = Object(S.b)().dispatch,
                        s = E.a.useCallback((function() {
                            i({
                                type: "setAutorizationData",
                                payload: {
                                    phoneNumber: n,
                                    isUserAuthenticated: !0
                                }
                            })
                        }), [i, n]),
                        l = E.a.useCallback((function(e) {
                            "Enter" === e.key && s()
                        }), [s]);
                    return Object(N.b)("li", {
                        role: "button",
                        tabIndex: 0,
                        onClick: s,
                        onKeyPress: l,
                        css: Object(h.a)((t = {
                            fontSize: 14,
                            fontWeight: "bolder",
                            borderBottom: "1px solid ".concat(r.CHROME),
                            display: "flex",
                            alignItems: "center",
                            outline: "none",
                            padding: "20px 0 20px 10px",
                            cursor: "pointer"
                        }, Object(y.a)(t, c.ON_FOCUS_OR_HOVER, {
                            p: {
                                color: r.ORANGE_DARK
                            },
                            svg: {
                                color: r.ORANGE_DARK
                            }
                        }), Object(y.a)(t, o.ONLY_MOBILE, {
                            padding: "10px 0 10px 10px"
                        }), t), "")
                    }, Object(N.b)(le.a, {
                        name: "phone-6",
                        width: 24,
                        height: 40
                    }), Object(N.b)("p", {
                        css: ti
                    }, Object(ei.a)(n)), Object(N.b)(le.a, {
                        name: "arrow-right",
                        width: 16,
                        height: 16,
                        color: r.CHROME,
                        css: ni
                    }))
                }));
            ai.displayName = "Contract";
            var ri = n("iInn");
            E.a.createElement;
            var ci = {
                    name: "7ry9k1",
                    styles: "padding:0;width:100%;"
                },
                oi = {
                    name: "8jm638",
                    styles: "flex-basis:100%;"
                },
                ii = {
                    name: "1i2veut",
                    styles: "flex-shrink:0;transition:color .15s;"
                },
                si = function() {
                    var e, t = Object(T.useTheme)(),
                        n = t.bp,
                        a = t.colors,
                        r = t.selectors,
                        c = Object(S.b)().dispatch,
                        o = E.a.useCallback((function() {
                            c({
                                type: "goToAuthorization"
                            })
                        }), [c]),
                        i = E.a.useCallback((function(e) {
                            "Enter" === e.key && o()
                        }), [o]);
                    return Object(N.b)("ul", {
                        css: ci
                    }, Object(N.b)("li", {
                        role: "button",
                        tabIndex: 0,
                        onClick: o,
                        onKeyPress: i,
                        css: Object(h.a)((e = {
                            fontSize: 14,
                            fontWeight: "bolder",
                            display: "flex",
                            alignItems: "center",
                            outline: "none",
                            padding: "0 10px",
                            cursor: "pointer"
                        }, Object(y.a)(e, r.ON_FOCUS_OR_HOVER, {
                            p: {
                                color: a.ORANGE_DARK
                            },
                            svg: {
                                color: a.ORANGE_DARK
                            }
                        }), Object(y.a)(e, n.ONLY_MOBILE, {
                            padding: "10px 0 10px 10px"
                        }), e), "")
                    }, Object(N.b)("span", {
                        css: oi
                    }, "Chc\u0119 przej\u015b\u0107 z karty na abonament", Object(N.b)("br", null), " na innym numerze"), Object(N.b)(ri.a, {
                        width: 16,
                        height: 16,
                        color: a.CHROME,
                        css: ii
                    })))
                };
            E.a.createElement;
            var li = {
                    name: "1macxe8",
                    styles: "width:100%;max-width:450px;padding:0 20px;"
                },
                ui = {
                    name: "1nbic85",
                    styles: "width:150px;"
                },
                bi = E.a.memo((function() {
                    var e = Object(T.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        a = Object(S.b)(),
                        r = a.contracts,
                        c = a.dispatch,
                        o = a.offerType,
                        i = a.processType,
                        s = ae(o, i),
                        l = s.currentContracts,
                        u = s.numberOfContracts,
                        b = l && 1 === u && "RETENTION" === i;
                    E.a.useEffect((function() {
                        l && b && c({
                            type: "setAutorizationData",
                            payload: {
                                phoneNumber: l[0].number,
                                isUserAuthenticated: !0
                            }
                        })
                    }), [r, c, l, u, i, b]);
                    var p = E.a.useMemo((function() {
                            return Array.from(new Set(r && r.filter((function(e) {
                                return e.offerType === o && e.processType === i
                            })).map((function(e) {
                                return e.accountCode
                            }))))
                        }), [r, o, i]),
                        d = E.a.useCallback((function() {
                            c({
                                type: "goToProcesses"
                            })
                        }), [c]);
                    return 1 === u && "RETENTION" === i ? null : u < 1 && "RETENTION" === i ? Object(N.b)("div", {
                        css: li
                    }, Object(N.b)("p", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            marginBottom: 40
                        }, t.FROM_TABLET, {
                            fontSize: 18
                        }), "")
                    }, "Aktualnie nie posiadasz numer\xf3w, dla kt\xf3rych mo\u017cesz przed\u0142u\u017cy\u0107 umow\u0119."), Object(N.b)("p", null, Object(N.b)(T.Button, {
                        type: "button",
                        variant: "SECONDARY_BLACK_OUTLINE",
                        onClick: d,
                        css: ui
                    }, "Wstecz"))) : Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            width: "100%",
                            maxWidth: 450
                        }, t.ONLY_TABLET, {
                            paddingTop: 40
                        }), "")
                    }, Object(N.b)(T.CustomScroll, {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            maxHeight: 450
                        }, t.FROM_DESKTOP, {
                            paddingRight: 50
                        }), "")
                    }, p.map((function(e, a) {
                        return Object(N.b)("div", {
                            key: a,
                            css: Object(h.a)(Object(y.a)({
                                padding: "0 20px"
                            }, t.FROM_TABLET, {
                                padding: "0 10px"
                            }), "")
                        }, e && Object(N.b)("strong", {
                            css: Object(h.a)({
                                display: "inline-block",
                                paddingBottom: 20,
                                width: "100%",
                                borderBottom: "1px solid ".concat(n.CHROME),
                                fontSize: 18,
                                lineHeight: "22px"
                            }, "")
                        }, "Konto mobilne nr ", e), Object(N.b)("ul", {
                            css: Object(h.a)(Object(y.a)({
                                padding: "15px 0 30px 0"
                            }, t.FROM_TABLET, {
                                paddingTop: 0
                            }), "")
                        }, r && r.filter((function(t) {
                            return t.accountCode === e && t.offerType === o
                        })).map((function(e) {
                            return Object(N.b)(ai, {
                                key: e.number,
                                phoneNumber: e.number
                            })
                        }))))
                    })), "MIGRATION_PRE_POST" === i && Object(N.b)(si, null)))
                }));
            bi.displayName = "Main";
            E.a.createElement;
            var pi = function(e) {
                    return Object(N.b)("svg", Object(A.a)({}, e, {
                        viewBox: "0 0 392.3 391.2"
                    }), Object(N.b)("path", {
                        fill: "#FFD200",
                        d: "M196.2,0c108.3,0,196.2,87.6,196.2,195.6s-87.8,195.6-196.2,195.6S0,303.6,0,195.6S87.8,0,196.2,0z"
                    }), Object(N.b)("path", {
                        fill: "#FFB400",
                        className: "st1",
                        d: "M188.3,286.2c1.1-1.4,0.4-3.4-1.4-3.4h-10H167c-1.8,0-2.5,1.8-1.4,3.4l7.4,10.7v5.7c0,2.2,1.8,4,4,4 c2.2,0,4,1.8,4,4c0,2.2-1.8,4-4,4s-4-1.8-4-4c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,4.4,3.5,7.9,7.9,7.9c4.4,0,7.9-3.5,7.9-7.9 c0-2.9-1.6-5.5-4-6.9v-6.8L188.3,286.2z"
                    }), Object(N.b)("path", {
                        fill: "#FFB400",
                        d: "M184.9,193h-1.1l-75.5-27.6l0,0c-0.2-0.1-0.4-0.1-0.7-0.1h-2h-4H85.8h-4h-2c-0.5,0-1,0.2-1.4,0.6l-27.7,27.7 c-0.4,0.4-0.6,0.9-0.6,1.4v11.9c0,1.1,0.9,2,2,2h25.8v137h0v5.9c4.8,3.6,9.7,7,14.7,10.1l9-7.5v11.4h-2.6c3.4,2,7,3.8,10.5,5.6 v-32.6h0V208.8H169v70h4v-70h7.9v70h4v-70c4.4,0,7.9-3.5,7.9-7.9C192.8,196.5,189.3,193,184.9,193z M77.9,193h-21l21-21V193z M85.8,173.2h13.6l-13.6,11.4V173.2z M85.8,208.8h13.6l-13.6,11.4V208.8z M85.8,236.5h13.6l-13.6,11.4V236.5z M85.8,264.3h13.6 l-13.6,11.4V264.3z M85.8,291.7h13.6l-13.6,11.4V291.7z M85.8,318.8h13.6l-13.6,11.4V318.8z M85.8,357.2v-11.4h13.6L85.8,357.2z M101.7,338.6H88.1l13.6-11.4V338.6z M101.7,311.5H88.1l13.6-11.4V311.5z M101.7,284.1H88.1l13.6-11.4V284.1z M101.7,256.4H88.1 l13.6-11.4V256.4z M101.7,228.6H88.1l13.6-11.4V228.6z M101.7,193H88.1l13.6-11.4V193z M109.6,193V170l62.6,22.9H109.6z"
                    }), Object(N.b)("path", {
                        d: "M270.6,66.9c-0.6-0.6-1.4-0.9-2.2-0.9h-3.2h-6.3h-25.3h-6.3h-3.2c-0.4,0-0.7,0.1-1.1,0.2l0,0l-120.3,44H101 c-7,0-12.6,5.7-12.6,12.6c0,7,5.7,12.6,12.6,12.6V247h6.3V135.4H120V247h6.3V135.4H221v206.8h0v47.4c7.8-1,15.5-2.4,23-4.3h-10.3 v-18.1l18.9,15.7c6.5-1.9,12.8-4.2,19-6.8v-22.5h0V135.4h41c1.7,0,3.2-1.4,3.2-3.2v-18.9c0-0.9-0.4-1.7-0.9-2.2L270.6,66.9z M221,110.2h-99.8L221,73.7V110.2z M233.6,92.1l21.7,18.1h-21.7V92.1z M233.6,148.9l21.7,18.1h-21.7V148.9z M233.6,193.1l21.7,18.1 h-21.7V193.1z M233.6,237.3l21.7,18.1h-21.7V237.3z M233.6,281.1l21.7,18.1h-21.7V281.1z M233.6,324.2l21.7,18.1h-21.7V324.2z M258.9,371.9l-21.7-18.1h21.7V371.9z M258.9,328.8l-21.7-18.1h21.7V328.8z M258.9,285.7l-21.7-18.1h21.7V285.7z M258.9,241.9 l-21.7-18.1h21.7V241.9z M258.9,197.7l-21.7-18.1h21.7V197.7z M258.9,153.5l-21.7-18.1h21.7V153.5z M258.9,96.7l-21.7-18.1h21.7 V96.7z M271.5,110.2V76.8l33.4,33.4H271.5z"
                    }), Object(N.b)("path", {
                        d: "M129.5,253.3h-15.9H97.8c-2.8,0-4,3.2-2.3,5.4l11.8,17v10.8c-3.8,2.2-6.3,6.3-6.3,10.9c0,7,5.7,12.6,12.6,12.6 s12.6-5.7,12.6-12.6c0-1.7-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2c0,3.5-2.8,6.3-6.3,6.3s-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3 c3.5,0,6.3-2.8,6.3-6.3v-9.1l11.8-17.1C133.5,256.2,132.4,253.3,129.5,253.3z"
                    }))
                },
                di = (E.a.createElement, function() {
                    var e, t = Object(T.useTheme)().bp;
                    return Object(N.b)(pi, {
                        css: Object(h.a)((e = {
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
                fi = function(e) {
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
            var Oi = {
                    name: "x74n1h",
                    styles: "margin-top:60px;display:inline;"
                },
                mi = E.a.memo((function() {
                    var e = Object(R.b)().market,
                        t = Object(T.useTheme)().bp;
                    return Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({}, t.ONLY_MOBILE, {
                            padding: 20,
                            marginTop: 10
                        }), "")
                    }, Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 24,
                            fontWeight: "bold"
                        }, t.FROM_DESKTOP, {
                            fontSize: 60
                        }), "")
                    }, "Przepraszamy", Object(N.b)("br", null), " za utrudnienia"), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            marginTop: 10
                        }, t.FROM_DESKTOP, {
                            fontSize: 18
                        }), "")
                    }, "Pracujemy nad ulepszeniem", Object(N.b)("br", null), " naszego serwisu"), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            marginTop: 20
                        }, t.FROM_DESKTOP, {
                            marginTop: 60
                        }), "")
                    }, Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            fontWeight: "bold",
                            marginBottom: 10
                        }, t.FROM_DESKTOP, {
                            fontSize: 16,
                            display: "inline",
                            marginRight: 10
                        }), "")
                    }, "Chcesz porozmawia\u0107 o ofercie?"), Object(N.b)("div", {
                        css: Oi
                    }, Object(N.b)(Zn.a, {
                        wrapperCss: Object(y.a)({}, t.ONLY_MOBILE, {
                            width: "100%"
                        }),
                        action: fi(e)
                    }))))
                })),
                ji = (E.a.createElement, E.a.memo((function() {
                    return Object(k.a)() ? Object(N.b)(di, null) : Object(N.b)(mi, null)
                }))),
                gi = (E.a.createElement, E.a.memo((function() {
                    return Object(k.a)() ? Object(N.b)(mi, null) : Object(N.b)(di, null)
                }))),
                yi = (E.a.createElement, function(e) {
                    var t = e.children,
                        n = Object(T.useTheme)().bp;
                    return Object(N.b)(E.a.Fragment, null, E.a.cloneElement(t, {
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
                hi = (E.a.createElement, E.a.memo((function() {
                    var e, t = Object(S.b)().currentOffersGroup,
                        n = Object(T.useTheme)().bp,
                        a = t && t.offers || [];
                    return Object(N.b)(K, null, Object(N.b)("ul", {
                        css: Object(h.a)((e = {
                            width: "100%",
                            padding: "0 20px"
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: "0 0 20px 20px",
                            maxWidth: 400
                        }), Object(y.a)(e, n.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, a.map((function(e) {
                        return Object(N.b)(Z, {
                            key: e.id,
                            offer: e
                        })
                    }))))
                })));
            hi.displayName = "Main";
            E.a.createElement;
            var vi = E.a.memo((function() {
                var e, t = Object(T.useTheme)().bp,
                    n = Object(S.b)().isB2B ? "Wybierz <br /> typ oferty" : "Stacjonarnie czy <br /> mobilnie?";
                return Object(N.b)("div", {
                    css: Object(h.a)(Object(y.a)({
                        padding: 20
                    }, t.FROM_DESKTOP, {
                        padding: 0
                    }), "")
                }, Object(N.b)("h2", {
                    css: Object(h.a)((e = {}, Object(y.a)(e, t.FROM_DESKTOP, {
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
            vi.displayName = "Description";
            var Ei = function(e) {
                    return e.toLowerCase().replace(/(?:^|\s|-)\S/g, (function(e) {
                        return e.toUpperCase()
                    }))
                },
                Ti = {
                    NEOI0000: "internet-lte",
                    TRPL0000: "internet-tv"
                },
                Si = {
                    NEOI0000: "Internet domowy",
                    TRPL0000: "Internet domowy z telewizj\u0105"
                },
                Ci = (E.a.createElement, function(e) {
                    var t = e.addressData,
                        n = e.mainService,
                        a = e.onSelect,
                        r = E.a.useCallback((function(e) {
                            "Enter" === e.key && a()
                        }), [a]),
                        c = Ei(t.line1),
                        o = Ei(t.town),
                        i = t.line2,
                        s = t.appartmentNo,
                        l = "".concat(t.preZipCode, "-").concat(t.postalCode),
                        u = "".concat(c, " ").concat(i).concat(s ? "/".concat(s) : "", "\n  ").concat(l, " ").concat(o),
                        b = Ti[n.serviceId];
                    return Object(N.b)(T.ActionListItem, {
                        title: u,
                        description: Si[n.serviceId],
                        icon: b,
                        hasBadge: !1,
                        onClick: a,
                        onKeyPress: r
                    })
                }),
                wi = (E.a.createElement, E.a.createContext(null)),
                xi = function(e) {
                    var t = e.servicesStepData,
                        n = Object(_.a)(e, ["servicesStepData"]);
                    return Object(N.b)(wi.Provider, Object(A.a)({
                        value: t
                    }, n))
                };
            xi.displayName = "ServicesStepContextProvider";
            var ki = function() {
                var e = E.a.useContext(wi);
                if (null === e) throw Error("useServicesStepContext: Please provide ServicesStepContext value.");
                return e
            };
            E.a.createElement;
            var Pi = {
                    name: "qx31uo",
                    styles: "margin:50px auto;"
                },
                Ii = E.a.memo((function() {
                    var e, t = Object(T.useTheme)().bp,
                        n = ki(),
                        a = n.services,
                        r = n.isLoading,
                        c = n.setNewAddress,
                        o = n.onSelect,
                        i = Object(S.b)(),
                        s = i.currentProcess,
                        l = i.isB2B,
                        u = E.a.useCallback((function(e) {
                            "Enter" === e.key && c()
                        }), [c]);
                    return r ? Object(N.b)(T.Loader, {
                        css: Pi
                    }) : Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            width: "100%",
                            maxWidth: 450
                        }, t.ONLY_TABLET, {
                            padding: "40px 0"
                        }), "")
                    }, Object(N.b)(T.CustomScroll, {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            maxHeight: 450
                        }, t.FROM_DESKTOP, {
                            paddingRight: 50
                        }), "")
                    }, Object(N.b)(T.ActionList, {
                        css: Object(h.a)((e = {
                            maxWidth: 400,
                            padding: 20
                        }, Object(y.a)(e, t.FROM_TABLET, {
                            padding: "0 0 30px 20px"
                        }), Object(y.a)(e, t.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, a && a.map((function(e, t) {
                        return Object(N.b)(Ci, {
                            key: t,
                            addressData: e.addressData,
                            mainService: e.mainService,
                            onSelect: function() {
                                return o(s, e.mainService, e.addressData)
                            }
                        })
                    })), Object(N.b)(T.ActionListItem, {
                        title: l ? "Chc\u0119 mie\u0107 internet w nowym miejscu" : "W nowym miejscu",
                        icon: "home-3",
                        hasBadge: !1,
                        onClick: c,
                        onKeyPress: u
                    }))))
                }));
            E.a.createElement;
            var Ri = {
                    name: "1ruxp1v",
                    styles: "padding:20px;"
                },
                Ai = E.a.memo((function() {
                    var e, t = Object(T.useTheme)().bp,
                        n = ki().isLoading,
                        a = Object(S.b)().isB2B;
                    return n ? Object(N.b)("h2", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 32,
                            lineHeight: "34px",
                            padding: 20
                        }, t.ONLY_TABLET, {
                            display: "none"
                        }), "")
                    }, "Chwileczk\u0119...") : Object(N.b)("div", {
                        css: Ri
                    }, Object(N.b)("h2", {
                        css: Object(h.a)((e = {}, Object(y.a)(e, t.FROM_DESKTOP, {
                            fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                            lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                        }), Object(y.a)(e, t.FROM_LARGE_DESKTOP, {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), "")
                    }, a ? "Wybierz lokalizacj\u0119, dla kt\xf3rej chcesz otrzyma\u0107 ofert\u0119" : "Gdzie chcesz korzysta\u0107 z nowej oferty internetu?"))
                })),
                Ni = n("com9"),
                zi = function() {
                    var e, t;
                    return he.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, he.a.awrap(Object(ft.a)());
                            case 2:
                                return e = n.sent, n.next = 5, he.a.awrap(Ni.a.get("/hapi/fbbServices/fixAddressWithServices", {
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
                Li = function(e) {
                    var t, n, a, r;
                    return he.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.designationNumber, n = e.serviceInstanceId, c.next = 3, he.a.awrap(Object(ft.a)());
                            case 3:
                                return a = c.sent, c.next = 6, he.a.awrap(Ni.a.post("hapi/fbbServices/serviceData", Qn.a.stringify({
                                    designationNumber: t,
                                    serviceInstanceId: n
                                }), {
                                    headers: {
                                        csrftoken: a
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
                _i = function(e) {
                    var t, n, a, r;
                    return he.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.componentPk, n = e.serviceInstanceId, c.next = 3, he.a.awrap(Object(ft.a)());
                            case 3:
                                return a = c.sent, c.next = 6, he.a.awrap(Ni.a.get("/hapi/pwa/v2/api/fix/migration/processes", {
                                    params: {
                                        componentPk: t,
                                        serviceInstanceId: n
                                    },
                                    headers: {
                                        csrftoken: a
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
                Mi = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children,
                        n = Object(T.useTheme)().bp,
                        a = function() {
                            var e = E.a.useState(null),
                                t = Object(C.a)(e, 2),
                                n = t[0],
                                a = t[1],
                                r = E.a.useState(!1),
                                c = Object(C.a)(r, 2),
                                o = c[0],
                                i = c[1],
                                s = Object(S.b)(),
                                l = s.dispatch,
                                u = s.currentOffer,
                                b = s.currentStep,
                                p = s.isUserLogged,
                                d = s.offerType,
                                f = s.processType,
                                O = Object(V.c)().enableCBSRedirectForWarsaw,
                                m = Object(R.b)().market,
                                j = Object(V.c)().corazoneSkipRedirect,
                                g = E.a.useCallback((function() {
                                    l({
                                        type: "goToLocation"
                                    })
                                }), [l]);
                            return E.a.useEffect((function() {
                                ! function() {
                                    var e, t;
                                    he.a.async((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return i(!0), n.prev = 1, n.next = 4, he.a.awrap(zi());
                                            case 4:
                                                if ((e = n.sent).fixAddressWithServices) {
                                                    n.next = 9;
                                                    break
                                                }
                                                return i(!1), g(), n.abrupt("return");
                                            case 9:
                                                t = e.fixAddressWithServices.map((function(e) {
                                                    return e.serviceBundles.map((function(t) {
                                                        return {
                                                            addressData: e.addressData,
                                                            mainService: t.mainService
                                                        }
                                                    }))
                                                })).flat(), a(t), i(!1), n.next = 17;
                                                break;
                                            case 14:
                                                n.prev = 14, n.t0 = n.catch(1), l({
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
                            }), [l, g]), {
                                onSelect: E.a.useCallback((function(e, t, n) {
                                    var a, r;
                                    return he.a.async((function(c) {
                                        for (;;) switch (c.prev = c.next) {
                                            case 0:
                                                if (e && e.processGroupId && u) {
                                                    c.next = 2;
                                                    break
                                                }
                                                return c.abrupt("return");
                                            case 2:
                                                if (i(!0), !O || j) {
                                                    c.next = 11;
                                                    break
                                                }
                                                return c.next = 6, he.a.awrap(Object(Ne.i)({
                                                    componentUid: u.configComponentPk,
                                                    processType: u.type,
                                                    leadAddressForm: {
                                                        apartmentNo: n.appartmentNo || "",
                                                        cbsIdCity: parseInt(n.cityId, 10),
                                                        cbsIdStreet: parseInt(n.streetId, 10),
                                                        city: Ei(n.town),
                                                        roadNo: Ei(n.line2),
                                                        street: Ei(n.line1)
                                                    }
                                                }));
                                            case 6:
                                                if (!(a = c.sent).doRedirect || !a.redirectUrl || "91189" !== n.cityId || j) {
                                                    c.next = 11;
                                                    break
                                                }
                                                return Object(G.c)(b, d, m, p, window.location.pathname, "WARSAW_PROCESS", f), window.location.href = a.redirectUrl, c.abrupt("return");
                                            case 11:
                                                return c.next = 13, he.a.awrap(Li({
                                                    serviceInstanceId: t.cfServiceInstanceId,
                                                    designationNumber: t.designationNumber
                                                }));
                                            case 13:
                                                return c.prev = 13, c.next = 16, he.a.awrap(_i({
                                                    componentPk: e.processGroupId,
                                                    serviceInstanceId: t.cfServiceInstanceId
                                                }));
                                            case 16:
                                                r = c.sent, l({
                                                    type: "setLocalizationData",
                                                    payload: {
                                                        apartmentNo: n.appartmentNo || "",
                                                        cbsIdCity: parseInt(n.cityId, 10),
                                                        cbsIdStreet: parseInt(n.streetId, 10),
                                                        city: Ei(n.town),
                                                        roadNo: Ei(n.line2),
                                                        street: Ei(n.line1)
                                                    }
                                                }), l({
                                                    type: "setCurrentServiceName",
                                                    payload: Si[t.serviceId]
                                                }), l({
                                                    type: "setFixMigrationProcesses",
                                                    payload: r
                                                }), l({
                                                    type: "goToFixProcesses"
                                                }), c.next = 26;
                                                break;
                                            case 23:
                                                c.prev = 23, c.t0 = c.catch(13), l({
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
                                }), [j, u, b, l, O, p, m, d, f]),
                                services: n,
                                isLoading: o,
                                setNewAddress: g
                            }
                        }();
                    return Object(N.b)(xi, {
                        servicesStepData: a
                    }, E.a.cloneElement(t, {
                        separatorCSS: Object(y.a)({}, n.ONLY_TABLET, {
                            display: "none"
                        })
                    }))
                })));
            Mi.displayName = "Container";
            E.a.createElement;
            var Di = E.a.memo((function(e) {
                    var t = Object(S.b)().dispatch,
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
                        a = E.a.useCallback((function(e) {
                            "Enter" === e.key && n()
                        }), [n]);
                    return Object(N.b)(T.ActionListItem, {
                        id: e.type,
                        key: e.type,
                        title: e.name || "",
                        icon: e.iconType,
                        onClick: n,
                        onKeyPress: a,
                        hasBadge: !1
                    })
                })),
                Fi = (E.a.createElement, function() {
                    var e, t = Object(S.b)().fixMigrationProcesses,
                        n = Object(T.useTheme)().bp;
                    return t ? Object(N.b)(T.ActionList, {
                        css: Object(h.a)((e = {
                            maxWidth: 400,
                            padding: 20
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            padding: "0 0 30px 20px"
                        }), Object(y.a)(e, n.FROM_DESKTOP, {
                            padding: 0
                        }), e), "")
                    }, t.map((function(e, t) {
                        return Object(N.b)(Di, Object(A.a)({
                            key: "".concat(e.name, "-").concat(t)
                        }, e))
                    }))) : null
                });
            E.a.createElement;
            var Bi = {
                    name: "13o7eu2",
                    styles: "display:block;"
                },
                Vi = {
                    name: "1692iwy",
                    styles: "font-weight:bold;font-size:14px;"
                },
                Ui = function() {
                    var e, t, n = Object(T.useTheme)().bp,
                        a = Object(S.b)(),
                        r = a.dispatch,
                        c = a.localizationData,
                        o = a.currentServiceName,
                        i = a.isB2B,
                        s = function() {
                            var e = Object(S.b)().localizationData;
                            if (!e) return {
                                address: ""
                            };
                            var t = Ei(e.street),
                                n = Ei(e.city);
                            return {
                                address: "".concat(t, " ").concat(e.roadNo).concat(e.apartmentNo ? "/".concat(e.apartmentNo) : "", ", ").concat(n)
                            }
                        }().address;
                    return Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            padding: 20
                        }, n.FROM_DESKTOP, {
                            padding: 0,
                            maxWidth: 400
                        }), "")
                    }, Object(N.b)("h2", {
                        css: Object(h.a)((e = {}, Object(y.a)(e, n.FROM_DESKTOP, {
                            fontSize: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) )",
                            lineHeight: "calc(40px + (60 - 40) * ((100vw - 992px) / (1280 - 992)) + 2px)"
                        }), Object(y.a)(e, n.FROM_LARGE_DESKTOP, {
                            fontSize: 60,
                            lineHeight: "62px"
                        }), e), "")
                    }, i ? "Co chcesz zrobi\u0107?" : "Czy chcesz zmieni\u0107 internet pod tym adresem?"), c && Object(N.b)(E.a.Fragment, null, Object(N.b)("p", {
                        css: Object(h.a)((t = {
                            fontSize: 14,
                            lineHeight: "20px",
                            margin: "10px 0 15px"
                        }, Object(y.a)(t, n.FROM_TABLET, {
                            margin: "5px 0 20px"
                        }), Object(y.a)(t, n.FROM_DESKTOP, {
                            margin: "10px 0 20px"
                        }), t), "")
                    }, Object(N.b)("strong", {
                        css: Bi
                    }, o), Object(N.b)("span", null, s)), Object(N.b)(T.AButton, {
                        variant: "ON_LIGHT_BACKGROUND",
                        onClick: function() {
                            r({
                                type: "goToServices"
                            })
                        },
                        css: Vi
                    }, "Zmie\u0144")))
                };
            E.a.createElement;
            var Hi = {
                    name: "sqsoaj",
                    styles: "font-size:12px;font-weight:bold;text-align:center;margin-top:0;"
                },
                Gi = {
                    name: "1xaekgw",
                    styles: "margin-top:20px;"
                },
                Wi = {
                    name: "4jmhch",
                    styles: "font-size:14px;font-weight:bold;text-decoration:line-through;padding:0 5px;"
                },
                Ki = {
                    name: "ar8f5p",
                    styles: "width:14px;height:14px;position:relative;top:2px;"
                },
                qi = function(e) {
                    var t = e.title,
                        n = e.description,
                        a = e.currentInternet,
                        r = e.tooltip,
                        c = e.type,
                        o = void 0 === c ? "TEXT" : c,
                        i = e.icon,
                        s = Object(T.useTheme)(),
                        l = s.bp,
                        u = s.colors;
                    return Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "0 10px",
                            flex: " 0 1 40%",
                            justifyContent: "space-between"
                        }, l.ONLY_SMALL_MOBILE, {
                            padding: 0,
                            maxWidth: "40vw"
                        }), "")
                    }, Object(N.b)("p", {
                        css: Hi
                    }, t), Object(N.b)(le.a, {
                        name: i,
                        width: 38,
                        height: 38
                    }), Object(N.b)("div", {
                        css: Gi
                    }, Object(N.b)("span", {
                        css: Object(h.a)({
                            color: u.ORANGE_LIGHT,
                            fontSize: 14,
                            fontWeight: "bold",
                            display: "inline-block",
                            minWidth: 40,
                            whiteSpace: "nowrap"
                        }, "")
                    }, "INTERNET" === o ? Object(N.b)(T.Swapper, null, n, " ") : n), a && Object(N.b)(E.a.Fragment, null, Object(N.b)("span", {
                        css: Wi
                    }, a !== n && a), Object(N.b)(gn.a, {
                        content: r
                    }, Object(N.b)("span", null, Object(N.b)(le.a, {
                        name: "question-mark",
                        css: Ki
                    }))))))
                };
            E.a.createElement;
            var Yi = {
                    name: "1ti0hun",
                    styles: "font-size:18px;margin-top:20px;line-height:normal;"
                },
                Xi = function(e) {
                    var t = e.children;
                    return Object(N.b)("h2", {
                        css: Yi
                    }, t)
                };
            E.a.createElement;
            var Zi = {
                    name: "1scpiqd",
                    styles: "display:flex;align-items:flex-end;flex-direction:row;max-width:400px;margin:20px auto;"
                },
                Ji = {
                    name: "hoe9xz",
                    styles: "align-self:center;"
                },
                Qi = E.a.memo((function(e) {
                    var t = e.currentVariant,
                        n = e.currentInternet,
                        a = e.internetName,
                        r = e.internetLimit,
                        c = Object(T.useTheme)().colors;
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)(Xi, null, Object(N.b)("span", {
                        dangerouslySetInnerHTML: {
                            __html: t.title
                        },
                        css: Object(h.a)({
                            strong: {
                                color: c.ORANGE_DARK
                            }
                        }, "")
                    })), Object(N.b)("div", {
                        css: Zi
                    }, Object(N.b)(qi, {
                        title: "Tw\xf3j obecny abonament",
                        description: t.internet,
                        currentInternet: n,
                        tooltip: t.tooltip,
                        type: "INTERNET",
                        icon: "sim-1"
                    }), Object(N.b)(le.a, {
                        name: "plus-1",
                        color: c.ORANGE_LIGHT,
                        width: 16,
                        height: 16,
                        css: Ji
                    }), Object(N.b)(qi, {
                        title: a,
                        description: r,
                        icon: "internet-lte"
                    })))
                })),
                $i = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children;
                    return Object(N.b)(E.a.Fragment, null, t)
                })));
            E.a.createElement;
            var es = {
                    name: "f07i4q",
                    styles: "display:flex;margin:10px 0 20px;"
                },
                ts = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                ns = {
                    name: "1l7mgse",
                    styles: "font-weight:normal;"
                },
                as = E.a.memo((function(e) {
                    var t = e.currentVariant,
                        n = e.onChange;
                    return Object(N.b)("div", {
                        css: es
                    }, t.elements.map((function(e) {
                        return Object(N.b)(T.Toggle, {
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
                        }, Object(N.b)("div", {
                            css: ts
                        }, Object(N.b)("span", null, e.internet), Object(N.b)("span", {
                            css: ns
                        }, e.price)))
                    })))
                }));
            E.a.createElement;
            var rs = {
                    name: "1gtey1t",
                    styles: "font-size:14px;margin:0;"
                },
                cs = {
                    name: "1baulvz",
                    styles: "display:inline-block;"
                },
                os = {
                    name: "6xix1i",
                    styles: "font-size:16px;"
                },
                is = function(e) {
                    var t = e.promotion,
                        n = e.totalPrice,
                        a = Object(T.useTheme)().colors;
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)("p", {
                        dangerouslySetInnerHTML: {
                            __html: t
                        },
                        css: rs
                    }), Object(N.b)("div", {
                        css: Object(h.a)({
                            fontSize: 30,
                            fontWeight: "bold",
                            color: a.ORANGE_DARK,
                            margin: "10px 0 20px"
                        }, "")
                    }, Object(N.b)("span", {
                        css: cs
                    }, Object(N.b)(T.Swapper, null, n)), Object(N.b)("span", {
                        css: os
                    }, " z\u0142/mies.")))
                };
            E.a.createElement;
            var ss = {
                    name: "1wcba0h",
                    styles: "display:flex;margin-top:20px;"
                },
                ls = {
                    name: "6su6fj",
                    styles: "flex-shrink:0;"
                },
                us = {
                    name: "15ykpn6",
                    styles: "font-size:12px;margin:0 0 0 5px;"
                },
                bs = E.a.memo((function(e) {
                    var t = e.legal,
                        n = Object(T.useTheme)().colors,
                        a = Object(S.b)(),
                        r = a.currentStep,
                        c = a.isUserLogged,
                        o = a.offerType,
                        i = a.processType,
                        s = Object(R.b)().market;
                    return Object(N.b)(E.a.Fragment, null, Object(N.b)("div", {
                        css: ss
                    }, Object(N.b)(le.a, {
                        name: "info-icon",
                        width: 16,
                        height: 16,
                        color: n.INFO,
                        css: ls
                    }), Object(N.b)("p", {
                        css: us
                    }, t)), Object(N.b)(Zn.a, {
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
                                queue: "LOVE_MO_INNE_B2C_CALLBACK",
                                description: "Klient w aplikacji MO przegl\u0105da\u0142 ofert\u0119 Love 2U",
                                personalScenario: "Ghosty_Love_2U",
                                profile: ""
                            }
                        },
                        onClick: function() {
                            Object(G.c)(r, o, s, c, window.location.pathname, "SEND_CMB", i)
                        }
                    }))
                }));
            E.a.createElement;
            var ps = {
                    name: "g9qnka",
                    styles: "padding:0 20px;"
                },
                ds = E.a.memo((function() {
                    var e, t, n, a, r = Object(S.b)(),
                        c = r.currentUpsellOffer,
                        o = r.enhance,
                        i = r.offerType,
                        s = E.a.useCallback((function() {
                            return c ? c.view : o ? null === (e = o.config.find((function(e) {
                                return e.offer.type === i
                            }))) || void 0 === e ? void 0 : e.view : void 0;
                            var e
                        }), [c, o, i]),
                        l = null === (e = s()) || void 0 === e ? void 0 : e.variants.find((function(e) {
                            return e.isSelected
                        })),
                        u = E.a.useState(l),
                        b = Object(C.a)(u, 2),
                        p = b[0],
                        d = b[1],
                        f = E.a.useCallback((function(e) {
                            var t, n = null === (t = s()) || void 0 === t ? void 0 : t.variants.find((function(t) {
                                return t.id === e.target.value
                            }));
                            d(n)
                        }), [s]);
                    return p ? Object(N.b)("div", {
                        css: ps
                    }, Object(N.b)(Qi, {
                        currentVariant: p,
                        currentInternet: null === (t = s()) || void 0 === t ? void 0 : t.currentInternet,
                        internetName: (null === (n = s()) || void 0 === n ? void 0 : n.internetName) || "",
                        internetLimit: (null === (a = s()) || void 0 === a ? void 0 : a.internetLimit) || "Bez limitu"
                    }), Object(N.b)(T.Separator, null), Object(N.b)($i, null, Object(N.b)(Xi, null, "Wybierz liczb\u0119 GB w abonamencie kom\xf3rkowym"), Object(N.b)(as, {
                        onChange: f,
                        currentVariant: p
                    }), Object(N.b)(Xi, null, "Tw\xf3j pakiet Love za jedyne"), Object(N.b)(is, {
                        promotion: p.promotion,
                        totalPrice: p.totalPrice
                    })), Object(N.b)(T.Separator, null), Object(N.b)(bs, {
                        legal: (null === c || void 0 === c ? void 0 : c.view.legal) || ""
                    })) : null
                })),
                fs = E.a.memo((function() {
                    return null
                })),
                Os = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children,
                        n = Object(T.useTheme)().bp,
                        a = Object(S.b)(),
                        r = a.enhance,
                        c = a.dispatch;
                    return r || c({
                        type: "goToOffers"
                    }), Object(N.b)(E.a.Fragment, null, E.a.cloneElement(t, {
                        separatorCSS: Object(y.a)({}, n.ONLY_TABLET, {
                            display: "none"
                        })
                    }))
                }))),
                ms = n("KD1n"),
                js = n("azwC"),
                gs = n("rpJ/"),
                ys = n("AsJ6"),
                hs = Object(gs.a)({
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
                                src: Ne.j,
                                onDone: {
                                    target: "selecting",
                                    actions: Object(ys.b)({
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
                                    actions: Object(ys.b)({
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
                                    actions: Object(ys.q)((function(e, t) {
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
                                    actions: Object(ys.q)((function(e, t) {
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

            function vs() {
                var e = Object(ms.a)(["\n0% {\n  opacity: 0;\n}\n20% {\n  opacity: 1;\n}\n100% {\n  opacity: 0;\n}\n"]);
                return vs = function() {
                    return e
                }, e
            }
            var Es = Object(N.c)(vs()),
                Ts = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                Ss = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                Cs = {
                    name: "gg4vpm",
                    styles: "display:flex;justify-content:space-between;"
                },
                ws = {
                    name: "1tdtlof",
                    styles: "flex-basis:48%;"
                },
                xs = {
                    name: "1tdtlof",
                    styles: "flex-basis:48%;"
                },
                ks = E.a.memo((function() {
                    var e = Object(T.useTheme)(),
                        t = e.bp,
                        n = e.colors,
                        a = Object(ot.c)().dispatch,
                        r = Object(S.b)(),
                        c = r.dispatch,
                        o = r.previousStep,
                        i = r.selectedAccount,
                        s = i ? {
                            accountCode: null === i || void 0 === i ? void 0 : i.code,
                            accountId: null === i || void 0 === i ? void 0 : i.id,
                            accountContracts: []
                        } : void 0,
                        l = Object(js.useMachine)(hs, {
                            context: {
                                defaultAccount: s,
                                currentAccount: s
                            },
                            services: {
                                accountsService: function(e) {
                                    var t, n, r, o;
                                    return he.a.async((function(i) {
                                        for (;;) switch (i.prev = i.next) {
                                            case 0:
                                                if (!e.currentAccount) {
                                                    i.next = 12;
                                                    break
                                                }
                                                return t = e.currentAccount, n = t.accountId, r = t.accountCode, i.next = 4, he.a.awrap(Object(ct.b)());
                                            case 4:
                                                return i.next = 6, he.a.awrap(Object(Ne.l)({
                                                    id: n,
                                                    accountCode: r
                                                }));
                                            case 6:
                                                return i.next = 8, he.a.awrap(Object(Ne.e)());
                                            case 8:
                                                o = i.sent, c({
                                                    type: "sendSelectedAccount",
                                                    payload: {
                                                        id: n,
                                                        code: r
                                                    }
                                                }), c({
                                                    type: "setContracts",
                                                    payload: o
                                                }), a({
                                                    type: "setCartItemsCount",
                                                    payload: 0
                                                });
                                            case 12:
                                            case "end":
                                                return i.stop()
                                        }
                                    }), null, null, null, Promise)
                                }
                            }
                        }),
                        u = Object(C.a)(l, 2),
                        b = u[0],
                        p = u[1],
                        d = b.context,
                        f = d.accounts,
                        O = d.currentAccount,
                        m = d.defaultAccount,
                        j = b.matches("done"),
                        g = b.matches("error"),
                        v = b.matches("fetching"),
                        w = b.matches("sending"),
                        x = b.matches("confirm"),
                        k = (null === m || void 0 === m ? void 0 : m.accountId) !== (null === O || void 0 === O ? void 0 : O.accountId) && !j,
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
                        if (j && O) {
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
                    }), [j, c, O]);
                    var I = E.a.useCallback((function() {
                            if (o) {
                                var e = P[o];
                                e && e()
                            }
                        }), [o, P]),
                        R = E.a.useCallback((function() {
                            p({
                                type: "SEND_ACCOUNT"
                            })
                        }), [p]),
                        A = E.a.useCallback((function(e) {
                            var t = e.target.value,
                                n = f.find((function(e) {
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
                        }), [f, p]);
                    return v ? Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({}, t.TO_DESKTOP, {
                            maxWidth: 80,
                            margin: "0 auto",
                            marginTop: "25%"
                        }), "")
                    }, Object(N.b)(T.Loader, null)) : Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            width: "100%",
                            padding: "0 20px"
                        }, t.FROM_DESKTOP, {
                            padding: 0,
                            paddingBottom: 30,
                            maxWidth: 400,
                            marginTop: 60
                        }), "")
                    }, Object(N.b)("p", null, Object(N.b)("strong", null, "Lista Twoich kont:")), Object(N.b)("form", {
                        css: Ts
                    }, Object(N.b)(T.RadioGroup, {
                        name: "select_account",
                        onChange: A,
                        defaultValue: null === m || void 0 === m ? void 0 : m.accountId
                    }, f.map((function(e) {
                        return Object(N.b)(T.RadioOption, {
                            name: "konto",
                            key: e.accountId,
                            value: e.accountId,
                            wrapperCss: {
                                marginBottom: 20,
                                fontSize: 14
                            }
                        }, Object(N.b)("span", null, e.accountCode, Object(N.b)("br", null), Object(N.b)("span", {
                            css: Ss
                        }, Ps(e.accountContracts))))
                    })), Object(N.b)(T.RadioOption, {
                        value: "",
                        name: "konto",
                        wrapperCss: {
                            marginBottom: 20,
                            fontSize: 14
                        }
                    }, "Stw\xf3rz nowe konto"))), x && Object(N.b)("p", {
                        css: Object(h.a)({
                            margin: 0,
                            padding: 0,
                            fontSize: 14,
                            marginBottom: 20,
                            color: n.DANGER
                        }, "")
                    }, Object(N.b)("strong", null, "Czy na pewno chcesz kontynuowa\u0107?")), w && Object(N.b)("strong", {
                        css: Object(h.a)(Object(y.a)({
                            fontSize: 14,
                            display: "block",
                            opacity: 1,
                            maxHeight: 20,
                            transition: "opacity .2s ease 1s, max-height .2s",
                            span: {
                                animation: "".concat(Es, " 1.2s ease infinite"),
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
                    }, "Trwa zmiana konta", Object(N.b)("span", null, "."), Object(N.b)("span", null, "."), Object(N.b)("span", null, ".")), Object(N.b)("div", {
                        css: Cs
                    }, Object(N.b)(T.Button, {
                        onClick: I,
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: ws
                    }, "Wstecz"), k && Object(N.b)(T.Button, {
                        variant: "PRIMARY_ON_BLACK",
                        onClick: R,
                        disabled: w,
                        css: xs
                    }, "Dalej")), g && Object(N.b)("div", {
                        css: Object(h.a)({
                            fontSize: 12,
                            fontWeight: "bold",
                            marginTop: 20,
                            height: 16,
                            color: n.DANGER
                        }, "")
                    }, Object(N.b)("span", null, "Wystapi\u0142 b\u0142\u0105d podczas wyboru konta. Spr\xf3buj ponownie.")))
                })),
                Ps = function(e) {
                    return e.map((function(e) {
                        return e.serviceNumber.split(/(\d{3})/).join(" ").trim()
                    })).join(", ")
                };
            E.a.createElement;
            var Is = {
                    name: "x9c4to",
                    styles: "padding:10px 20px 0 20px;"
                },
                Rs = {
                    name: "yy7678",
                    styles: "@media (min-width: 1240px){font-size:60px;line-height:62px;}"
                },
                As = {
                    name: "vprdb1",
                    styles: "display:flex;align-items:center;margin-top:10px;"
                },
                Ns = function() {
                    var e, t = Object(T.useTheme)(),
                        n = t.bp,
                        a = t.colors;
                    return Object(N.b)("div", {
                        css: Is
                    }, Object(N.b)("h2", {
                        css: Rs
                    }, "Wybierz konto do kt\xf3rergo chcesz przypisa\u0107 nowy numer"), Object(N.b)("div", {
                        css: As
                    }, Object(N.b)(le.a, {
                        name: "warn",
                        color: a.ORANGE_LIGHT,
                        css: Object(h.a)(Object(y.a)({
                            width: 60,
                            height: 60,
                            marginRight: 15
                        }, n.ONLY_MOBILE, {
                            display: "none"
                        }), "")
                    }), Object(N.b)("p", {
                        css: Object(h.a)((e = {
                            margin: 0,
                            fontSize: 14
                        }, Object(y.a)(e, n.FROM_TABLET, {
                            fontSize: 16
                        }), Object(y.a)(e, n.FROM_DESKTOP, {
                            fontSize: 18
                        }), e), "")
                    }, "Zmiana konta spowoduje wyrzucenie z koszyka dokonanych zakup\xf3w przypisanych do obecnego konta.")))
                },
                zs = n("kyr1"),
                Ls = n("4lZg");
            E.a.createElement;
            var _s = {
                    name: "6su6fj",
                    styles: "flex-shrink:0;"
                },
                Ms = {
                    name: "33o2tb",
                    styles: "font-size:14px;flex-shrink:1;margin:0;"
                },
                Ds = {
                    name: "33o2tb",
                    styles: "font-size:14px;flex-shrink:1;margin:0;"
                },
                Fs = E.a.memo((function() {
                    var e, t = Object(T.useTheme)().bp,
                        n = Object(S.b)(),
                        a = n.dispatch,
                        r = n.clearCache,
                        c = n.shouldShowOfferDetails,
                        o = n.currentStep,
                        i = n.offerType,
                        s = n.isUserLogged,
                        l = n.processType,
                        u = n.isB2B,
                        b = Object(Ls.b)().isPending,
                        p = Object(R.b)().market,
                        d = Object(k.a)();
                    return c && !d ? Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            width: "100%",
                            maxWidth: 400,
                            height: "100%"
                        }, t.ONLY_TABLET, {
                            padding: "0 20px"
                        }), "")
                    }, Object(N.b)(vr, null)) : Object(N.b)(E.a.Fragment, null, Object(N.b)(Qc, {
                        isVisible: c
                    }, Object(N.b)(vr, null)), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            width: "100%",
                            maxWidth: 430,
                            padding: 20
                        }, t.FROM_TABLET, {
                            paddingTop: 0
                        }), "")
                    }, Object(N.b)("h2", {
                        css: Object(h.a)((e = {
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
                    }, "Dodaj kolejn\u0105 kart\u0119 SIM"), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            marginBottom: 30
                        }, t.FROM_DESKTOP, {
                            marginBottom: 60
                        }), "")
                    }, Object(N.b)(le.a, {
                        name: "sim-multi",
                        width: 48,
                        height: 48,
                        css: _s
                    }), u ? Object(N.b)("p", {
                        css: Ms
                    }, "Kolejna karta ", Object(N.b)("strong", null, "ju\u017c od 25 z\u0142 + VAT/mies."), " oraz dodatkowe ", Object(N.b)("strong", null, "5 GB"), " za zakup na stronie orange.pl") : Object(N.b)("p", {
                        css: Ds
                    }, "Ka\u017cda kolejna karta SIM ", Object(N.b)("strong", null, "tanej o 20 z\u0142/mies."), " oraz Pakiet danych ", Object(N.b)("strong", null, "3 GB "), " do wsp\xf3\u0142dzielenia na koncie.")), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "flex",
                            flexDirection: "column"
                        }, t.FROM_DESKTOP, {
                            flexDirection: "row"
                        }), "")
                    }, Object(N.b)(T.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: Object(h.a)(Object(y.a)({
                            whiteSpace: "nowrap",
                            marginBottom: 20
                        }, t.FROM_DESKTOP, {
                            flexGrow: 1,
                            flexShrink: 0,
                            flexBasis: "50%"
                        }), ""),
                        onClick: function() {
                            a({
                                type: "goToProcesses"
                            }), Object(G.c)(o, i, p, s, window.location.pathname, "ADD_NEW_SIM", l)
                        },
                        disabled: b
                    }, "Dodaj kolejn\u0105 kart\u0119"), Object(N.b)("div", {
                        css: Object(h.a)(Object(y.a)({
                            display: "none"
                        }, t.FROM_DESKTOP, {
                            display: "block",
                            flexBasis: "20px",
                            flexShrink: 0
                        }), "")
                    }), Object(N.b)(T.Button, {
                        variant: "SECONDARY_BLACK_OUTLINE",
                        css: Object(h.a)(Object(y.a)({}, t.FROM_DESKTOP, {
                            flexGrow: 1,
                            flexShrink: 0,
                            flexBasis: "50%"
                        }), ""),
                        onClick: function() {
                            r(), window.location.assign("/koszyk/multi")
                        },
                        disabled: b
                    }, "Do Koszyka"))))
                }));
            Fs.displayName = "Main";
            var Bs = n("PImS"),
                Vs = (E.a.createElement, E.a.memo((function(e) {
                    var t = e.children,
                        n = Object(T.useTheme)().bp,
                        a = function() {
                            var e, t, n = E.a.useState(),
                                a = Object(C.a)(n, 2),
                                r = a[0],
                                c = a[1],
                                o = E.a.useState(),
                                i = Object(C.a)(o, 2),
                                s = i[0],
                                l = i[1],
                                u = E.a.useState(!1),
                                b = Object(C.a)(u, 2),
                                p = b[0],
                                d = b[1],
                                f = Object(S.b)(),
                                O = f.showNetPrices,
                                m = f.dispatch,
                                j = f.isUserLogged,
                                g = E.a.useCallback((function() {
                                    var e;
                                    return he.a.async((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!j) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.next = 3, he.a.awrap(Object(Ne.e)());
                                            case 3:
                                                return e = t.sent, t.abrupt("return", e);
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), null, null, null, Promise)
                                }), [j]);
                            E.a.useEffect((function() {
                                var e = !0;
                                return function() {
                                        var t, n, a, r, o, i;
                                        he.a.async((function(s) {
                                            for (;;) switch (s.prev = s.next) {
                                                case 0:
                                                    return d(!0), s.prev = 1, s.next = 4, he.a.awrap(Promise.all([Object(ct.f)(), g()]));
                                                case 4:
                                                    if (t = s.sent, n = Object(C.a)(t, 2), a = n[0], r = n[1], e) {
                                                        s.next = 10;
                                                        break
                                                    }
                                                    return s.abrupt("return");
                                                case 10:
                                                    d(!1), a && a.entries && (o = a.entries.length - 1, l(a.entries[o]), i = Object(Bs.g)(a.entries[o], 0), c(i.devices[0])), r && m({
                                                        type: "setContracts",
                                                        payload: r
                                                    }), s.next = 20;
                                                    break;
                                                case 15:
                                                    if (s.prev = 15, s.t0 = s.catch(1), e) {
                                                        s.next = 19;
                                                        break
                                                    }
                                                    return s.abrupt("return");
                                                case 19:
                                                    d(!1);
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
                            }), [m, g]);
                            var y = null === s || void 0 === s ? void 0 : null === (e = s.monthlyPrices) || void 0 === e ? void 0 : e.map((function(e) {
                                    return {
                                        price: O ? e.netPrice : e.price,
                                        monthFrom: e.monthFrom,
                                        monthTo: e.monthTo,
                                        currency: e.currency
                                    }
                                })),
                                h = null === s || void 0 === s ? void 0 : s.checkoutPrice,
                                v = null === r || void 0 === r ? void 0 : r.checkoutPrice,
                                T = null === r || void 0 === r ? void 0 : null === (t = r.monthlyPrices) || void 0 === t ? void 0 : t.map((function(e) {
                                    return {
                                        price: O ? e.netPrice : e.price,
                                        monthFrom: e.monthFrom,
                                        monthTo: e.monthTo,
                                        currency: e.currency
                                    }
                                })),
                                w = T ? Object(ea.a)(T) : null,
                                x = y ? Object(ea.a)(y) : null,
                                k = x ? Object(Kt.a)(x.last.price, {
                                    integersWithFractionDigits: !0
                                }) : "",
                                P = h ? Object(Kt.a)(O ? h.netPrice : h.price, {
                                    integersWithFractionDigits: !0
                                }) : "";
                            return {
                                entry: s,
                                device: r,
                                entryMonthlyPrice: k,
                                devicePriceSteps: w,
                                entryPriceSteps: x,
                                deviceMonthlyPrice: w ? Object(Kt.a)(w.last.price, {
                                    integersWithFractionDigits: !0
                                }) : "",
                                isPending: p,
                                entryActivationPrice: P,
                                deviceActivationPrice: v ? Object(Kt.a)(O ? v.netPrice : v.price, {
                                    integersWithFractionDigits: !0
                                }) : ""
                            }
                        }();
                    return Object(N.b)(Ls.a, {
                        summaryData: a
                    }, E.a.cloneElement(t, {
                        separatorCSS: Object(y.a)({}, n.ONLY_TABLET, {
                            display: "none"
                        })
                    }))
                })));
            Vs.displayName = "Container";
            var Us = n("F6me");
            E.a.createElement;
            var Hs = E.a.memo((function() {
                var e = Object(T.useTheme)(),
                    t = e.bp,
                    n = e.zIndex,
                    a = Object(S.b)(),
                    r = a.currentStep,
                    c = a.currentOffer,
                    o = a.currentProcess,
                    i = a.currentSingleOffer,
                    s = a.shouldShowAccounts,
                    l = a.currentOffersGroup,
                    u = a.offerType,
                    b = a.processType,
                    p = a.fixMigrationProcesses,
                    d = a.currentFixMigrationProcessType,
                    f = ae(u, b).numberOfContracts,
                    O = function() {
                        var e = Object(S.b)().dispatch;
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
                    m = function() {
                        var e = Object(S.b)().dispatch;
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
                    j = {
                        VOICE: "Abonament kom\xf3rkowy",
                        DATA: "Internet mobilny",
                        FIX1P: "Internet domowy",
                        FIX3P: "Internet z TV",
                        CONVERGENT4U: "Orange Love",
                        DATA_LDF: "Internet Biurowy LTE",
                        INTERNET_GROUP: "Internet"
                    },
                    g = {
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
                    v = E.a.useCallback((function(e) {
                        return e && j[e] || "Oferta"
                    }), [j]),
                    C = E.a.useCallback((function(e) {
                        return e && g[e] || "Wyb\xf3r procesu"
                    }), [g]),
                    w = E.a.useMemo((function() {
                        if ("MAINTENANCE" === r) return [{
                            id: "OFFERS",
                            name: "Oferta",
                            shouldBeVisible: !0,
                            action: O.offersStep,
                            isActive: !1,
                            backAction: m.goToOffers
                        }, {
                            id: "MAINTENANCE",
                            name: "Informacja",
                            shouldBeVisible: !0,
                            isActive: !0
                        }];
                        if ("UPSELL" === r) return [{
                            id: "UPPSELL",
                            name: "Oferta dla Ciebie",
                            shouldBeVisible: "UPSELL" === r,
                            isActive: "UPSELL" === r,
                            backAction: m.goToOffers
                        }];
                        if (!l && (!c || !u) && "CHANGE_ACCOUNT" !== r && "LOGIN" !== r) return [{
                            id: "OFFERS",
                            name: "Oferta",
                            shouldBeVisible: !0,
                            action: O.offersStep,
                            isActive: "OFFERS" === r,
                            backAction: m.goToOffers
                        }];
                        var e = "SELECT_NUMBER" === r && f > 1 || f > 1 && "RETENTION" === b || f > 0 && "MIGRATION_PRE_POST" === b,
                            t = "SELECT_NUMBER" === r && f > 1 || "SELECT_NUMBER" === r && f > 0 && "MIGRATION_PRE_POST" === b;
                        return [{
                            id: "GROUPS",
                            name: v((null === l || void 0 === l ? void 0 : l.type) || null),
                            shouldBeVisible: !!l || Object(Y.a)(r),
                            action: O.offersStep,
                            isActive: !!l && "OFFERS" === r,
                            backAction: m.goToOffers
                        }, {
                            id: "OFFERS",
                            name: c ? v(u) : "Typ oferty",
                            shouldBeVisible: !(!c && !l && "OFFERS" !== r),
                            action: l ? O.selectOffersGroup : O.offersStep,
                            isActive: Object(Y.a)(r) || "OFFERS" === r && !l,
                            backAction: l ? m.goToOffersGroup : m.goToOffers
                        }, {
                            id: "PROCESSES",
                            name: C(b),
                            shouldBeVisible: ("FIX1P" !== (null === c || void 0 === c ? void 0 : c.type) && "FIX3P" !== (null === c || void 0 === c ? void 0 : c.type) || "ACTIVATION" === b) && !!o || "PROCESSES" === r,
                            action: O.processStep,
                            isActive: "PROCESSES" === r,
                            backAction: m.goToProcesses
                        }, {
                            id: "SELECT_NUMBER",
                            name: "Wyb\xf3r numeru",
                            isActive: t,
                            shouldBeVisible: e,
                            action: O.selectNumberStep,
                            backAction: m.goToSelectNumberStep
                        }, {
                            id: "AUTHORIZATION",
                            name: "Autoryzacja",
                            shouldBeVisible: "AUTHORIZATION" === r,
                            action: O.authorizationStep,
                            isActive: "AUTHORIZATION" === r,
                            backAction: m.goToAuthorization
                        }, {
                            id: "LOCATION",
                            name: "Lokalizacja",
                            shouldBeVisible: "LOCATION" === r,
                            action: O.locationStep,
                            isActive: "LOCATION" === r,
                            backAction: m.goToLocation
                        }, {
                            id: "SERVICES",
                            name: "Wyb\xf3r us\u0142ugi",
                            isActive: "SERVICES" === r,
                            shouldBeVisible: "SERVICES" === r || !!p,
                            action: O.selectServicesStep,
                            backAction: m.goToServices
                        }, {
                            id: "FIX_PROCESSES",
                            name: C(d),
                            isActive: "FIX_PROCESSES" === r,
                            shouldBeVisible: "FIX_PROCESSES" === r || !!d,
                            action: O.selectFixMigrationStep,
                            backAction: m.goToFixProcesses
                        }, {
                            id: "SINGLE_OFFER",
                            name: "Konfigurator",
                            shouldBeVisible: !!i || "SINGLE_OFFER" === r,
                            action: O.singleOfferStep,
                            isActive: "SINGLE_OFFER" === r,
                            backAction: m.goToSingleOffer
                        }, {
                            id: "ACCOUNTS",
                            name: "Wyb\xf3r konta",
                            shouldBeVisible: s || "ACCOUNTS" === r,
                            action: O.accountsStep,
                            isActive: s || "ACCOUNTS" === r,
                            backAction: m.goToAccounts
                        }, {
                            id: "VERIFICATION",
                            name: "Weryfikacja",
                            shouldBeVisible: "VERIFICATION" === r,
                            action: O.verificationStep,
                            isActive: "VERIFICATION" === r,
                            backAction: m.goToVerification
                        }, {
                            id: "SUMMARY",
                            name: "Podsumowanie",
                            shouldBeVisible: "SUMMARY" === r,
                            isActive: "SUMMARY" === r
                        }, {
                            id: "CHANGE_ACCOUNT",
                            name: "Zmie\u0144 konto",
                            shouldBeVisible: "CHANGE_ACCOUNT" === r,
                            isActive: "CHANGE_ACCOUNT" === r,
                            backAction: o && m.goToSingleOffer || c && m.goToProcesses || m.goToOffers
                        }, {
                            id: "LOGIN",
                            name: "Logowanie",
                            shouldBeVisible: "LOGIN" === r,
                            isActive: "LOGIN" === r,
                            backAction: o && m.goToSingleOffer || c && m.goToProcesses || m.goToOffers
                        }].filter((function(e) {
                            return e.shouldBeVisible
                        }))
                    }), [r, c, u, l, b, v, O.offersStep, O.selectOffersGroup, O.processStep, O.authorizationStep, O.locationStep, O.selectNumberStep, O.selectServicesStep, O.selectFixMigrationStep, O.singleOfferStep, O.accountsStep, O.verificationStep, m.goToOffers, m.goToOffersGroup, m.goToProcesses, m.goToAuthorization, m.goToLocation, m.goToSelectNumberStep, m.goToServices, m.goToFixProcesses, m.goToSingleOffer, m.goToAccounts, m.goToVerification, C, o, f, p, d, i, s]),
                    x = "MAINTENANCE" !== r && "UPSELL" !== r && !(l && Object(Y.a)(r)) && (!c || "OFFERS" === r && !o) && !((!c || !o) && "CHANGE_ACCOUNT" === r) && !((!c || !o) && "LOGIN" === r),
                    k = w.length > 1 ? w[w.length - 2].backAction : w[0].backAction,
                    P = !x && "SUMMARY" !== r;
                return Object(N.b)(Us.a, {
                    isFirstStep: x,
                    backAction: k,
                    steps: w,
                    isVisible: P,
                    shouldBeAnimated: !0,
                    css: Object(h.a)(Object(y.a)({}, t.FROM_DESKTOP, {
                        position: "absolute",
                        zIndex: n.LAYER_1
                    }), "")
                })
            }));
            Hs.displayName = "Navigation";
            var Gs = n("tHt9"),
                Ws = (E.a.createElement, E.a.memo((function(e) {
                    var t, n, a, r = e.main,
                        c = e.description,
                        o = e.wrapperCss,
                        i = e.separatorCSS,
                        s = Object(T.useTheme)(),
                        l = s.bp,
                        u = s.colors,
                        b = Object(S.b)().currentStep;
                    return Object(N.b)("div", {
                        css: Object(h.a)({
                            backgroundColor: u.WHITE
                        }, "")
                    }, Object(N.b)(Gs.a, {
                        css: Object(h.a)([(t = {
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            minHeight: "50vh"
                        }, Object(y.a)(t, l.ONLY_TABLET, {
                            alignItems: "center",
                            width: "53%",
                            margin: "auto"
                        }), Object(y.a)(t, l.FROM_DESKTOP, {
                            height: "80vw",
                            alignItems: "center",
                            flexDirection: "row",
                            minHeight: "60vh",
                            maxHeight: 850
                        }), t), o], "")
                    }, Object(N.b)("div", {
                        css: Object(h.a)((n = {
                            height: "100%",
                            display: "flex",
                            alignItems: "center"
                        }, Object(y.a)(n, l.FROM_TABLET, {
                            justifyContent: "center",
                            width: "100%"
                        }), Object(y.a)(n, l.FROM_DESKTOP, {
                            flexBasis: "50%",
                            height: "calc(100% - 70px)",
                            overflowY: "hidden",
                            overflowX: "hidden",
                            paddingTop: 10
                        }), Object(y.a)(n, l.ONLY_TABLET, {
                            justifyContent: "flex-start"
                        }), n), "")
                    }, c), Object(N.b)(T.ArrowSeparator, {
                        orientation: "HORIZONTAL",
                        css: Object(h.a)([Object(y.a)({
                            marginTop: 20,
                            height: 20,
                            display: "ERROR" === b ? "none" : "block"
                        }, l.FROM_DESKTOP, {
                            display: "none"
                        }), i], "")
                    }), Object(N.b)(T.ArrowSeparator, {
                        orientation: "VERTICAL",
                        css: Object(h.a)([Object(y.a)({
                            display: "none"
                        }, l.FROM_DESKTOP, {
                            margin: "0 15px",
                            display: "block",
                            alignSelf: "center",
                            height: "calc(100%  - 200px)"
                        }), i], "")
                    }), Object(N.b)("div", {
                        css: Object(h.a)((a = {
                            height: "100%",
                            display: "flex",
                            alignItems: "center"
                        }, Object(y.a)(a, l.FROM_TABLET, {
                            width: "100%"
                        }), Object(y.a)(a, l.FROM_DESKTOP, {
                            flexBasis: "50%",
                            height: "100%",
                            overflowY: "auto",
                            overflowX: "hidden",
                            justifyContent: "center"
                        }), a), "")
                    }, r)))
                })));
            Ws.displayName = "TabletDesktopContainer";
            E.a.createElement;
            var Ks = E.a.memo((function(e) {
                var t = e.main,
                    n = e.description,
                    a = e.wrapperCss,
                    r = Object(T.useTheme)().colors;
                return Object(N.b)("div", {
                    css: Object(h.a)([{
                        backgroundColor: r.WHITE,
                        minHeight: "60vh",
                        paddingBottom: 20
                    }, a], "")
                }, n, t)
            }));
            Ks.displayName = "MobileContainer";
            var qs = n("BPef");
            E.a.createElement;
            var Ys = {
                    OFFERS: a,
                    AUTHORIZATION: o,
                    LOCATION: c,
                    PROCESSES: r,
                    SINGLE_OFFER: i,
                    VERIFICATION: s,
                    ACCOUNTS: l,
                    ERROR: u,
                    SELECT_NUMBER: b,
                    MAINTENANCE: p,
                    INTERNET_GROUP: d,
                    SUMMARY: g,
                    SERVICES: f,
                    FIX_PROCESSES: O,
                    UPSELL: m,
                    CHANGE_ACCOUNT: j,
                    LOGIN: o
                },
                Xs = {
                    name: "1d6mts7",
                    styles: "min-height:800px;display:flex;justify-content:center;align-items:center;"
                },
                Zs = {
                    name: "79elbk",
                    styles: "position:relative;"
                },
                Js = E.a.memo((function() {
                    var e = Object(k.a)(),
                        t = Object(R.b)(),
                        n = t.user,
                        a = t.market,
                        r = Object(T.useTheme)().bp,
                        c = Object(S.b)(),
                        o = c.currentStep,
                        i = c.offerType,
                        s = c.id,
                        l = c.clearCache,
                        u = c.isInitializing,
                        b = c.processType,
                        p = c.dispatch,
                        d = Object(T.useLayer)().level,
                        f = E.a.useRef(null),
                        O = Object(w.useRouter)(),
                        m = d > 0,
                        j = P(o),
                        g = Ys[o],
                        v = E.a.useRef(null),
                        A = E.a.useRef(!1),
                        z = P(n.isLogged),
                        L = Object(qs.a)(s);
                    E.a.useEffect((function() {
                        j && j !== o && p({
                            type: "setPreviousStep",
                            payload: j
                        })
                    }), [j, o, p]), E.a.useEffect((function() {
                        Object(G.c)(o, i, a, n.isLogged, window.location.pathname, "", b)
                    }), [o, i, a, n.isLogged, b]), E.a.useEffect((function() {
                        void 0 !== z && z !== n.isLogged && l()
                    }), [z, n.isLogged, l]), E.a.useEffect((function() {
                        v.current && A.current && null !== f.current && o !== f.current && !m && Object(x.a)(v.current, {
                            block: "start"
                        }), A.current ? f.current = o : (A.current = !0, I.a.getItem("sufler-".concat(s)) || (f.current = o))
                    }), [o, s, m]);
                    var _ = E.a.useCallback((function(e) {
                            if (e && (v.current = e, L)) {
                                var t = (O.asPath || "").split("?"),
                                    n = Object(C.a)(t, 2),
                                    a = n[0],
                                    r = n[1];
                                r && r.length && ("SUMMARY" === o && O.replace("/" === a ? "/" : "/[...path]", a, {
                                    shallow: !0
                                }), m || Object(x.a)(e, {
                                    block: "start"
                                }))
                            }
                        }), [o, m, O, L]),
                        M = e ? Object(N.b)(Ks, {
                            main: Object(N.b)(g.Main, null),
                            description: Object(N.b)(g.Description, null)
                        }) : Object(N.b)(Ws, {
                            main: Object(N.b)(g.Main, null),
                            description: Object(N.b)(g.Description, null)
                        });
                    return u ? Object(N.b)("div", {
                        css: Xs
                    }, Object(N.b)(T.Loader, null)) : Object(N.b)("div", {
                        css: Zs
                    }, Object(N.b)("div", {
                        ref: _,
                        css: Object(h.a)(Object(y.a)({
                            position: "absolute",
                            top: -80
                        }, r.FROM_TABLET, {
                            top: -110
                        }), "")
                    }), Object(N.b)(Hs, null), Object(N.b)("div", null, g.Container ? Object(N.b)(g.Container, null, M) : M))
                }));
            Js.displayName = "Container";
            E.a.createElement;
            var Qs = E.a.memo((function(e) {
                var t = e.offers,
                    n = e.id,
                    a = e.configParams,
                    r = e.pk,
                    c = Object(T.useTheme)().bp,
                    o = Object(R.b)(),
                    i = o.market,
                    s = o.isInApp,
                    l = o.user;
                return Object(N.b)("div", {
                    css: Object(h.a)(Object(y.a)({
                        minHeight: 500
                    }, c.FROM_TABLET, {
                        minHeight: 800
                    }), "")
                }, Object(N.b)(T.DynamicContent, null, Object(N.b)(S.a, {
                    offers: t,
                    id: n,
                    configParams: a,
                    market: i,
                    isInApp: s,
                    pk: r,
                    isUserLogged: l.isLogged
                }, Object(N.b)(Js, null))))
            }));
            Qs.displayName = "Sufler"
        },
        OS0P: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return s
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "a", (function() {
                return u
            }));
            var a = n("zjfJ"),
                r = n("fGyu"),
                c = n("yr6+");

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var i = function(e, t) {
                    return e && e.additionals ? e.additionals.filter((function(e) {
                        return e.type === t
                    })) : []
                },
                s = function(e) {
                    var t = Object(c.e)(e),
                        n = i(t, "DEVICE_GROUP"),
                        a = i(t, "SERVICE_GROUP");
                    return [].concat(Object(r.a)(n), Object(r.a)(a))
                },
                l = function(e) {
                    var t = s(e),
                        n = function(e) {
                            var t = Object(c.b)(e),
                                n = i(t, "DEVICE_GROUP"),
                                a = i(t, "SERVICE_GROUP");
                            return [].concat(Object(r.a)(n), Object(r.a)(a))
                        }(e),
                        a = function(e) {
                            var t = Object(c.g)(e),
                                n = i(t, "DEVICE_GROUP"),
                                a = i(t, "SERVICE_GROUP");
                            return [].concat(Object(r.a)(n), Object(r.a)(a))
                        }(e);
                    return [].concat(Object(r.a)(t), Object(r.a)(n), Object(r.a)(a))
                },
                u = function(e) {
                    return e.map((function(e) {
                        return e.additionals
                    })).flat().map((function(e) {
                        var t, n = e.features.config[0].value,
                            r = null === (t = e.tieredPriceList) || void 0 === t ? void 0 : t.map((function(e) {
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
                                t % 2 ? o(Object(n), !0).forEach((function(t) {
                                    Object(a.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, n, {
                            prices: r,
                            id: e.code,
                            media: c
                        })
                    }))
                }
        },
        P0jV: function(e, t, n) {
            "use strict";
            var a = n("vfGT"),
                r = Object.prototype.toString;

            function c(e) {
                return "[object Array]" === r.call(e)
            }

            function o(e) {
                return "undefined" === typeof e
            }

            function i(e) {
                return null !== e && "object" === typeof e
            }

            function s(e) {
                return "[object Function]" === r.call(e)
            }

            function l(e, t) {
                if (null !== e && "undefined" !== typeof e)
                    if ("object" !== typeof e && (e = [e]), c(e))
                        for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e);
                    else
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
            }
            e.exports = {
                isArray: c,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === r.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
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
                isObject: i,
                isUndefined: o,
                isDate: function(e) {
                    return "[object Date]" === r.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === r.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === r.call(e)
                },
                isFunction: s,
                isStream: function(e) {
                    return i(e) && s(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" !== typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
                },
                forEach: l,
                merge: function e() {
                    var t = {};

                    function n(n, a) {
                        "object" === typeof t[a] && "object" === typeof n ? t[a] = e(t[a], n) : t[a] = n
                    }
                    for (var a = 0, r = arguments.length; a < r; a++) l(arguments[a], n);
                    return t
                },
                deepMerge: function e() {
                    var t = {};

                    function n(n, a) {
                        "object" === typeof t[a] && "object" === typeof n ? t[a] = e(t[a], n) : t[a] = "object" === typeof n ? e({}, n) : n
                    }
                    for (var a = 0, r = arguments.length; a < r; a++) l(arguments[a], n);
                    return t
                },
                extend: function(e, t, n) {
                    return l(t, (function(t, r) {
                        e[r] = n && "function" === typeof t ? a(t, n) : t
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
                return d
            })), n.d(t, "h", (function() {
                return v
            })), n.d(t, "i", (function() {
                return E
            })), n.d(t, "g", (function() {
                return S
            })), n.d(t, "f", (function() {
                return C
            })), n.d(t, "a", (function() {
                return k
            })), n.d(t, "b", (function() {
                return P
            })), n.d(t, "e", (function() {
                return I
            })), n.d(t, "d", (function() {
                return R
            })), n.d(t, "k", (function() {
                return A
            })), n.d(t, "c", (function() {
                return N
            }));
            var a = n("zygG"),
                r = n("VtSi"),
                c = n.n(r),
                o = n("fGyu"),
                i = n("HbGN"),
                s = n("zjfJ"),
                l = n("cVGl"),
                u = n("Bc8N"),
                b = n("bVfH");

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var d = function(e, t) {
                    return e.map((function(e) {
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? p(Object(n), !0).forEach((function(t) {
                                    Object(s.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
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
                O = function(e) {
                    return {
                        price: e.price,
                        monthFrom: e.monthFrom,
                        monthTo: e.monthTo,
                        currency: e.currency,
                        netPrice: e.netPrice,
                        net: e.net
                    }
                },
                m = function(e) {
                    var t = e.colorDefinition,
                        n = e.setElements,
                        a = Object(i.a)(e, ["colorDefinition", "setElements"]);
                    return t ? [{
                        color: t.name,
                        name: a.name
                    }] : n ? n.map((function(e) {
                        return {
                            color: e.color,
                            name: e.name
                        }
                    })) : null
                },
                j = function(e) {
                    return function(t, n) {
                        var a = "euroSet" === e ? t.euroSets : t.terminals;
                        return a ? a.map((function(e, a) {
                            return {
                                cartId: "device-".concat(n, "-").concat(a),
                                entryCartId: "entry-".concat(n),
                                productEntryNumber: e.entryNo,
                                productBundleNumber: e.bundleNo,
                                offerBundleNumber: t.bundleNo,
                                offerBundleCode: t.bundleCode,
                                productCode: e.productCode,
                                planName: T(t),
                                type: "DEVICE",
                                imageUrl: e.imageUrl,
                                name: e.name,
                                monthlyPrices: e.monthlyPrices.map(O),
                                checkoutPrice: O(e.checkoutPrice),
                                elements: m(e)
                            }
                        })) : []
                    }
                },
                g = j("euroSet"),
                y = j("terminal"),
                h = function(e) {
                    return function(t) {
                        var n = [];
                        if (t.monthlyCosts) {
                            var a = t.monthlyCosts.map((function(t) {
                                return {
                                    price: t[e],
                                    monthTo: t.monthTo,
                                    monthFrom: t.monthFrom,
                                    currency: t.currency
                                }
                            }));
                            n = n.concat(a)
                        }
                        if (t.oneTimeCost) {
                            var r = {
                                price: t.oneTimeCost[e],
                                monthFrom: 1,
                                monthTo: 1,
                                currency: "z\u0142"
                            };
                            n.push(r)
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
                v = h("price"),
                E = h("netPrice"),
                T = function(e) {
                    var t = [],
                        n = e.entries || [];
                    if (e.voipFixProduct && t.push(e.voipFixProduct.name), e.broadbandFixProduct && t.push(e.broadbandFixProduct.name), e.tvFixProduct && t.push(e.tvFixProduct.name), n.forEach((function(e) {
                            "FTTH" === e.technology ? t.push(e.descriptionShort) : t.push(e.planName)
                        })), "HARDBUNDLE" === e.bundleType) {
                        var a = t.join(", ");
                        return a.length > 45 ? a.substring(0, 45).concat("...") : a
                    }
                    var r = t.join(" + ");
                    return e.planName && t.length > 0 ? "".concat(e.planName, " - ").concat(r) : !e.planName && t.length > 0 ? r : "SIMFREE_INST" === e.bundleType ? null : e.planName
                },
                S = function e(t, n) {
                    var a = t.bundleCode,
                        r = t.productCode,
                        c = t.processType,
                        i = t.bundleNo,
                        s = t.loyaltyLength,
                        l = t.descriptionShort,
                        u = t.loyaltyLengthDescription,
                        b = t.entries,
                        p = y(t, n),
                        d = g(t, n),
                        O = function(e) {
                            return e.vases ? e.vases.map(f) : []
                        }(t),
                        m = function(e) {
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
                        j = [].concat(Object(o.a)(p), Object(o.a)(d)),
                        h = b ? b.map(e) : null,
                        v = T(t);
                    return {
                        cartId: "entry-".concat(n),
                        services: O,
                        devices: j,
                        planName: v,
                        processType: c,
                        offerType: m,
                        entries: h,
                        offerCode: r,
                        offerBundleNumber: i,
                        offerBundleCode: a,
                        loyaltyLength: s,
                        loyaltyLengthDescription: u,
                        shortDescription: l
                    }
                },
                C = function(e) {
                    if (!e || !e.entries || !e.offerCount) return {
                        offerCount: 0,
                        entries: [],
                        grossPayments: null,
                        netPayments: null,
                        bonusesInfo: []
                    };
                    var t = v(e),
                        n = E(e),
                        a = e.entries.map(S),
                        r = x(a),
                        c = w(e);
                    return {
                        offerCount: e.offerCount,
                        entries: r,
                        grossPayments: t,
                        netPayments: n,
                        bonusesInfo: c
                    }
                },
                w = function(e) {
                    var t = e.bonuses ? e.bonuses.map((function(e) {
                        return e.description
                    })) : [];
                    return Array.from(new Set(t))
                },
                x = function(e) {
                    var t = e.filter((function(e) {
                            return "VK_SIMFREE" === e.offerType
                        })),
                        n = e.filter((function(e) {
                            return "VK_SIMFREE" !== e.offerType
                        }));
                    return [].concat(Object(o.a)(n), Object(o.a)(t))
                },
                k = function(e, t, n, a) {
                    return c.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                if (r.prev = 0, e({
                                        type: "setIsDeletingEnabled",
                                        payload: !1
                                    }), e({
                                        type: "addToDeletedItems",
                                        payload: t
                                    }), "CONVERGENT4U" !== a && "CONVERGENT2U" !== a) {
                                    r.next = 8;
                                    break
                                }
                                return r.next = 6, c.a.awrap(Promise.all([Object(l.a)(1e3), Object(b.b)()]));
                            case 6:
                                r.next = 10;
                                break;
                            case 8:
                                return r.next = 10, c.a.awrap(Promise.all([Object(l.a)(1e3), Object(b.d)(n)]));
                            case 10:
                                e({
                                    type: "deleteBundle",
                                    payload: t
                                }), e({
                                    type: "setShouldRefetchPrice",
                                    payload: !0
                                }), r.next = 17;
                                break;
                            case 14:
                                r.prev = 14, r.t0 = r.catch(0), e({
                                    type: "setIsError",
                                    payload: !0
                                });
                            case 17:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, [
                        [0, 14]
                    ], Promise)
                },
                P = function(e, t, n, a, r) {
                    return c.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return o.prev = 0, e({
                                    type: "setIsDeletingEnabled",
                                    payload: !1
                                }), e({
                                    type: "addToDeletedItems",
                                    payload: t
                                }), o.next = 5, c.a.awrap(Promise.all([Object(l.a)(1e3), Object(b.c)(n, a, r)]));
                            case 5:
                                e({
                                    type: "deleteDevice",
                                    payload: t
                                }), e({
                                    type: "setShouldRefetchPrice",
                                    payload: !0
                                }), o.next = 12;
                                break;
                            case 9:
                                o.prev = 9, o.t0 = o.catch(0), e({
                                    type: "setIsError",
                                    payload: !0
                                });
                            case 12:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, [
                        [0, 9]
                    ], Promise)
                },
                I = function() {
                    var e, t, n;
                    return c.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, c.a.awrap(Promise.all([Object(b.g)(), Object(l.a)(750)]));
                            case 2:
                                return e = r.sent, t = Object(a.a)(e, 1), n = t[0], r.abrupt("return", n);
                            case 6:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                R = function() {
                    var e, t, n;
                    return c.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, c.a.awrap(Promise.all([Object(b.e)(), Object(l.a)(750)]));
                            case 2:
                                return e = r.sent, t = Object(a.a)(e, 1), n = t[0], r.abrupt("return", n);
                            case 6:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                A = function(e, t) {
                    return !("SIMFREE_INST" === t && "czas nieokre\u015blony" === e)
                },
                N = function(e) {
                    return e.replace(/Rabat /g, " -")
                }
        },
        PdAJ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "c", (function() {
                return o
            })), n.d(t, "d", (function() {
                return i
            })), n.d(t, "e", (function() {
                return s
            }));
            var a = n("yr6+"),
                r = function(e, t) {
                    return t.some((function(t) {
                        return t.code === e.code
                    }))
                },
                c = function(e, t) {
                    var n, r;
                    return "VOICE" !== e.offerType ? null : null === (n = Object(a.f)(e)) || void 0 === n ? void 0 : null === (r = n.additionals) || void 0 === r ? void 0 : r.find((function(e) {
                        return e.type === t
                    }))
                },
                o = function(e) {
                    return e.code
                },
                i = function(e) {
                    return {
                        code: e.code,
                        groupCode: e.groupCode,
                        type: e.type
                    }
                },
                s = function(e, t) {
                    return e.additionals.reduce((function(e, n) {
                        return t.some((function(e) {
                            return e.code === n.code
                        })) ? e += n.productCharacteristic.weight : e
                    }), 0)
                }
        },
        Q1tT: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return p
            })), n.d(t, "a", (function() {
                return f
            })), n.d(t, "c", (function() {
                return O
            }));
            var a = n("cxan"),
                r = n("HbGN"),
                c = n("ERkP"),
                o = n.n(c),
                i = n("0D0S"),
                s = n.n(i),
                l = function(e, t) {
                    if (function(e, t) {
                            try {
                                return new RegExp("opl_feat_".concat(t)).test(e)
                            } catch (n) {
                                return !1
                            }
                        }(e, t)) return e.split("".concat(t, "="))[1].split(";")[0]
                },
                u = function(e, t, n) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = s()();
                    switch (l(e, t)) {
                        case "0":
                            return !1;
                        case "1":
                            return !0;
                        default:
                            return r && n ? n(r.publicRuntimeConfig.OMNIFRONTEND_APP_ENV) : a
                    }
                },
                b = n("l1C2"),
                p = (o.a.createElement, function(e) {
                    return {
                        corazoneSkipRedirect: u(e, "corazoneSkipRedirect"),
                        minicartEditMode: u(e, "minicartEditMode"),
                        suflerTransactions: u(e, "suflerTransactions", (function(e) {
                            return "PROD" !== e
                        })),
                        negateMaintenance: u(e, "negateMaintenance"),
                        marketSelection: u(e, "marketSelection"),
                        redirectVoiceOnB2B: u(e, "redirectVoiceOnB2B"),
                        loveCMB: u(e, "loveCMB", (function() {
                            return !0
                        })),
                        configuratorInFIX: u(e, "configuratorInFIX", (function() {
                            return !1
                        })),
                        skipRedirectUrl: u(e, "skipRedirectUrl"),
                        enableCBSRedirectForWarsaw: u(e, "enableCBSRedirectForWarsaw", (function() {
                            return !0
                        })),
                        suflerSummaryB2B: u(e, "suflerSummaryB2B", (function() {
                            return !0
                        })),
                        additionalPackages: u(e, "additionalPackages", (function() {
                            return !0
                        })),
                        offline: u(e, "offline"),
                        disableShame: u(e, "disableShame"),
                        webUpsell: u(e, "webUpsell"),
                        loggedCustomerPath: u(e, "loggedCustomerPath", (function(e) {
                            return "PROD" !== e
                        }))
                    }
                }),
                d = o.a.createContext(p("")),
                f = function(e) {
                    var t = e.featuresMap,
                        n = Object(r.a)(e, ["featuresMap"]);
                    return Object(b.b)(d.Provider, Object(a.a)({
                        value: t
                    }, n))
                },
                O = function() {
                    var e = o.a.useContext(d);
                    return e
                }
        },
        Q2eF: function(e, t, n) {
            "use strict";
            var a = n("P0jV");

            function r(e) {
                return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, n) {
                if (!t) return e;
                var c;
                if (n) c = n(t);
                else if (a.isURLSearchParams(t)) c = t.toString();
                else {
                    var o = [];
                    a.forEach(t, (function(e, t) {
                        null !== e && "undefined" !== typeof e && (a.isArray(e) ? t += "[]" : e = [e], a.forEach(e, (function(e) {
                            a.isDate(e) ? e = e.toISOString() : a.isObject(e) && (e = JSON.stringify(e)), o.push(r(t) + "=" + r(e))
                        })))
                    })), c = o.join("&")
                }
                if (c) {
                    var i = e.indexOf("#"); - 1 !== i && (e = e.slice(0, i)), e += (-1 === e.indexOf("?") ? "?" : "&") + c
                }
                return e
            }
        },
        QVQ0: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("zygG"),
                r = function(e) {
                    return Object.entries({
                        MOBILE: ["VOICE", "DATA", "DATA_LDF", "VOICE_LDF"],
                        FIX: ["FIX1P", "FIX3P"],
                        LEAD: ["CONVERGENT2U", "CONVERGENT4U"]
                    }).map((function(t) {
                        var n = Object(a.a)(t, 2),
                            r = n[0],
                            c = n[1];
                        return (null === c || void 0 === c ? void 0 : c.includes(e)) ? r : void 0
                    })).find(Boolean)
                }
        },
        Soal: function(e, t, n) {
            "use strict";
            var a = n("pQXz");
            e.exports = function(e, t, n) {
                var r = n.config.validateStatus;
                !r || r(n.status) ? e(n) : t(a("Request failed with status code " + n.status, n.config, null, n.request, n))
            }
        },
        UtMv: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return p
            }));
            var a = n("zjfJ"),
                r = n("5IAQ"),
                c = n("ERkP"),
                o = n.n(c),
                i = n("Kq2c"),
                s = n("4lZg"),
                l = n("Zscy"),
                u = n("l1C2");
            o.a.createElement;
            var b = {
                    name: "5e7ve0",
                    styles: "font-weight:bold;white-space:nowrap;"
                },
                p = function() {
                    var e = Object(i.useTheme)().bp,
                        t = Object(l.b)().showNetPrices,
                        n = Object(s.b)(),
                        c = n.devicePriceSteps,
                        p = n.deviceMonthlyPrice;
                    return c ? Object(u.b)(o.a.Fragment, null, Object(u.b)("div", {
                        css: b
                    }, Object(u.b)("p", {
                        css: Object(r.a)(Object(a.a)({
                            fontSize: 30,
                            margin: "15px 0 10px",
                            display: "inline-block"
                        }, e.FROM_DESKTOP, {
                            fontSize: 40,
                            margin: "20px 0 0 "
                        }), "")
                    }, p), Object(u.b)("span", {
                        css: Object(r.a)(Object(a.a)({
                            fontSize: 16
                        }, e.FROM_DESKTOP, {
                            fontSize: 24
                        }), "")
                    }, t && " + VAT", " z\u0142/mies.")), Object(u.b)("span", {
                        css: Object(r.a)(Object(a.a)({
                            fontSize: 16,
                            fontWeight: "bold"
                        }, e.FROM_DESKTOP, {
                            fontSize: 24
                        }), "")
                    }, "x ", c.last.monthTo, " raty")) : null
                }
        },
        VGOs: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var a = n("zygG"),
                r = n("HbGN"),
                c = n("ERkP"),
                o = n.n(c),
                i = n("Kq2c"),
                s = n("l1C2");
            o.a.createElement;
            var l = {
                    name: "cll86h",
                    styles: "top:50%;left:50%;position:absolute;transform:translate(-50%, -75%);"
                },
                u = function(e) {
                    var t = e.timeout,
                        n = void 0 === t ? 250 : t,
                        c = Object(r.a)(e, ["timeout"]),
                        u = o.a.useState(!1),
                        b = Object(a.a)(u, 2),
                        p = b[0],
                        d = b[1];
                    return o.a.useEffect((function() {
                        if (0 !== n) {
                            var e = setTimeout((function() {
                                d(!0)
                            }), n);
                            return function() {
                                return clearTimeout(e)
                            }
                        }
                        d(!0)
                    }), [n]), p ? Object(s.b)("div", {
                        title: "Prosz\u0119 czeka\u0107",
                        css: l
                    }, Object(s.b)(i.Loader, c)) : null
                }
        },
        WBY7: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        XWgT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                return ["INTERNET_GROUP"].includes(e)
            }
        },
        YYwr: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("5FZF"),
                r = function(e) {
                    return e.monthFrom === e.monthTo ? 0 === e.monthFrom ? {
                        price: e.price,
                        text: "op\u0142ata na start"
                    } : {
                        price: e.price,
                        text: "w ".concat(Object(a.a)(e.monthFrom, "N"), " miesi\u0105cu")
                    } : e.monthTo ? {
                        price: e.price,
                        text: "do ".concat(Object(a.a)(e.monthTo, "D"), " miesi\u0105ca")
                    } : {
                        price: e.price,
                        text: ""
                    }
                }
        },
        YlAD: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            })), n.d(t, "c", (function() {
                return a
            })), n.d(t, "d", (function() {
                return s
            })), n.d(t, "e", (function() {
                return l
            }));
            var a = function(e, t) {
                    return e.find((function(e) {
                        return e.propositionId === t
                    }))
                },
                r = function(e, t) {
                    return t && a(e, t) || function(e) {
                        return e.find((function(e) {
                            return e.primary
                        }))
                    }(e) || e[0]
                },
                c = n("zygG"),
                o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_";
                    return "".concat(e.code).concat(t).concat(e.color)
                },
                i = function(e, t) {
                    var n = Object.entries(t).map((function(e) {
                        var t = Object(c.a)(e, 2),
                            n = (t[0], t[1]);
                        return o(n)
                    }));
                    return e.find((function(e) {
                        var t = e.colorVariants.map((function(e) {
                            return o(e)
                        }));
                        return n.every((function(e) {
                            return t.includes(e)
                        }))
                    }))
                },
                s = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t.groupId,
                            a = t.id;
                        return e[n] || (e[n] = []), e[n].push(a), e
                    }), {})
                },
                l = function(e) {
                    return e.map((function(e) {
                        var t = e.code,
                            n = e.color,
                            a = e.images,
                            r = e.url;
                        return {
                            code: t,
                            colorVariants: [{
                                code: t,
                                color: n
                            }],
                            imageUrl: a && a[0].source || "",
                            url: r
                        }
                    }))
                }
        },
        YsDt: function(e, t, n) {
            "use strict";
            var a = n("P0jV"),
                r = n("Q2eF"),
                c = n("O3AJ"),
                o = n("BtTt"),
                i = n("N/5i");

            function s(e) {
                this.defaults = e, this.interceptors = {
                    request: new c,
                    response: new c
                }
            }
            s.prototype.request = function(e) {
                "string" === typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = i(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = [o, void 0],
                    n = Promise.resolve(e);
                for (this.interceptors.request.forEach((function(e) {
                        t.unshift(e.fulfilled, e.rejected)
                    })), this.interceptors.response.forEach((function(e) {
                        t.push(e.fulfilled, e.rejected)
                    })); t.length;) n = n.then(t.shift(), t.shift());
                return n
            }, s.prototype.getUri = function(e) {
                return e = i(this.defaults, e), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, a.forEach(["delete", "get", "head", "options"], (function(e) {
                s.prototype[e] = function(t, n) {
                    return this.request(a.merge(n || {}, {
                        method: e,
                        url: t
                    }))
                }
            })), a.forEach(["post", "put", "patch"], (function(e) {
                s.prototype[e] = function(t, n, r) {
                    return this.request(a.merge(r || {}, {
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
                return H
            })), n.d(t, "b", (function() {
                return G
            }));
            var a = n("cxan"),
                r = n("VtSi"),
                c = n.n(r),
                o = n("zjfJ"),
                i = n("zygG"),
                s = n("HbGN"),
                l = n("ERkP"),
                u = n.n(l),
                b = n("kN39"),
                p = n("EJk9"),
                d = n("5s2p"),
                f = n("azwC"),
                O = n("fGyu"),
                m = n("OS0P");

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
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

            function h(e) {
                if (e.processError) return g({}, e, {
                    currentStep: "ERROR"
                });
                if ("FIX1P" === e.offerType || "FIX3P" === e.offerType) {
                    if ("LOCATION" === e.currentStep) return g({}, e, {
                        currentStep: "SINGLE_OFFER"
                    });
                    if ("PROCESSES" === e.currentStep) {
                        var t;
                        if ("FIX_EXISTING_SERVICE" !== e.processType) return g({}, e, {
                            currentStep: "LOCATION"
                        });
                        if (e.isUserLogged) return g({}, e, {
                            currentStep: "SERVICES"
                        });
                        if (null === (t = e.currentProcess) || void 0 === t ? void 0 : t.isAuthorizationRequired) return g({}, e, {
                            currentStep: "AUTHORIZATION"
                        })
                    }
                    if ("AUTHORIZATION" === e.currentStep) return g({}, e, {
                        currentStep: "SERVICES"
                    })
                }
                if ("OFFERS" === e.currentStep) return g({}, e, {
                    currentStep: "PROCESSES"
                });
                if ("INTERNET_GROUP" === e.currentStep) return e.currentOffersGroup ? e : g({}, e, {
                    currentStep: "OFFERS"
                });
                if ("PROCESSES" === e.currentStep) {
                    var n, a;
                    if (null === (n = e.currentOffer) || void 0 === n ? void 0 : n.isLocationRequired) return g({}, e, {
                        currentStep: "LOCATION"
                    });
                    var r = function(e) {
                        return e.contracts ? e.contracts.filter((function(t) {
                            return t.processType === e.processType && t.offerType === e.offerType
                        })) : null
                    }(e);
                    return "RETENTION" === e.processType && r ? g({}, e, {
                        currentStep: "SELECT_NUMBER"
                    }) : "MIGRATION_PRE_POST" === e.processType && r ? g({}, e, {
                        currentStep: "SELECT_NUMBER"
                    }) : (null === (a = e.currentProcess) || void 0 === a ? void 0 : a.isAuthorizationRequired) ? g({}, e, {
                        currentStep: "AUTHORIZATION"
                    }) : g({}, e, {
                        currentStep: "SINGLE_OFFER"
                    })
                }
                if ("SELECT_NUMBER" === e.currentStep && e.authorizationData) return g({}, e, {
                    currentStep: "SINGLE_OFFER"
                });
                if ("AUTHORIZATION" === e.currentStep) return g({}, e, {
                    currentStep: "SINGLE_OFFER"
                });
                if ("LOGIN" === e.currentStep) return g({}, e, {
                    currentStep: "OFFERS",
                    currentOffer: null,
                    currentProcess: null,
                    currentSingleOffer: null
                });
                if ("LOCATION" === e.currentStep) return g({}, e, {
                    currentStep: "SINGLE_OFFER"
                });
                if ("SINGLE_OFFER" === e.currentStep) {
                    if (e.userNeedsVerification) return g({}, e, {
                        currentStep: "VERIFICATION"
                    });
                    if (e.shouldShowAccounts) return g({}, e, {
                        currentStep: "ACCOUNTS"
                    })
                }
                return g({}, e, {
                    currentStep: "OFFERS"
                })
            }
            var v = {
                    GLOBAL: function() {
                        return ["id", "pk", "currentStep", "isUserLogged", "selectedAccount", "shouldUseDiscounts"]
                    },
                    OFFERS: function() {
                        return [].concat(Object(O.a)(v.GLOBAL()), ["offers", "isUserLoggedWithCAAP", "contracts", "currentUpsellOffer"])
                    },
                    INTERNET_GROUP: function() {
                        return [].concat(Object(O.a)(v.OFFERS()), ["currentOffersGroup"])
                    },
                    PROCESSES: function() {
                        return [].concat(Object(O.a)(v.INTERNET_GROUP()), ["currentOffer", "offerType"])
                    },
                    UPSELL: function() {
                        return Object(O.a)(v.PROCESSES())
                    },
                    AUTHORIZATION: function() {
                        return [].concat(Object(O.a)(v.PROCESSES()), ["currentProcess", "processType", "authorizationData", "authorizationType"])
                    },
                    LOCATION: function() {
                        return [].concat(Object(O.a)(v.AUTHORIZATION()), ["localizationData", "currentOffer", "offerType"])
                    },
                    SERVICES: function() {
                        return [].concat(Object(O.a)(v.LOCATION()), ["fixMigrationProcesses", "currentServiceName"])
                    },
                    FIX_PROCESSES: function() {
                        return [].concat(Object(O.a)(v.SERVICES()), ["currentFixMigrationProcessType"])
                    },
                    SELECT_NUMBER: function() {
                        return Object(O.a)(v.AUTHORIZATION())
                    },
                    SINGLE_OFFER: function() {
                        return [].concat(Object(O.a)(v.AUTHORIZATION()), Object(O.a)(v.LOCATION()), Object(O.a)(v.SELECT_NUMBER()), Object(O.a)(v.FIX_PROCESSES()), ["currentSingleOffer", "shouldUseDiscounts", "shouldShowOfferDetails", "singleOffers", "selectedTVPackages", "selectedOtherPackages", "selectedPackages", "packageConfiguratorType", "hasSelectedAccount"])
                    },
                    VERIFICATION: function() {
                        return [].concat(Object(O.a)(v.SINGLE_OFFER()), ["verificationError", "userNeedsVerification"])
                    },
                    ACCOUNTS: function() {
                        return [].concat(Object(O.a)(v.VERIFICATION()), ["shouldShowAccounts"])
                    },
                    MAINTENANCE: function() {
                        return Object(O.a)(v.GLOBAL())
                    },
                    ERROR: function() {
                        return [].concat(Object(O.a)(v.SINGLE_OFFER()), ["processError"])
                    },
                    SUMMARY: function() {
                        return [].concat(Object(O.a)(v.VERIFICATION()), ["shouldShowAccounts", "deviceBaseId", "deviceVariantId"])
                    },
                    CHANGE_ACCOUNT: function() {
                        return Object(O.a)(v.SINGLE_OFFER())
                    },
                    LOGIN: function() {
                        return Object(O.a)(v.SINGLE_OFFER())
                    }
                },
                E = function(e, t) {
                    return t.reduce((function(t, n) {
                        return t[n] = e[n], t
                    }), {})
                };

            function T(e, t) {
                var n;
                switch (t.type) {
                    case "selectOffer":
                        var a = function(e, t) {
                                return e && e.find((function(e) {
                                    return e.type === t
                                })) || void 0
                            },
                            r = "OFFERS" === e.currentStep ? E(e, v.OFFERS()) : E(e, v.INTERNET_GROUP()),
                            c = r.offers,
                            o = r.currentOffersGroup,
                            i = a(o ? o.offers : c, t.payload);
                        if (!i) throw new Error('Unknown offer type: "'.concat(t.payload, '"'));
                        if ("INTERNET_GROUP" === i.type) throw new Error('Cannot select offer group as offer: "'.concat(t.payload, '"'));
                        return h(g({}, y, {}, r, {
                            currentOffer: i,
                            currentStep: "OFFERS",
                            offerType: t.payload
                        }));
                    case "selectProcess":
                        var s = e.currentOffer;
                        if (!s) throw new Error('Missing "currentOffer" in "selectProcess" action');
                        var l = s.processes.find((function(e) {
                            return e.type === t.payload
                        }));
                        if (!l) throw new Error('Unknown process type "'.concat(t.payload, '" for currentOffer "').concat(s.type, '"'));
                        var u = E(e, v.PROCESSES());
                        return h(g({}, y, {}, u, {
                            currentStep: "PROCESSES",
                            processType: t.payload,
                            currentProcess: l
                        }));
                    case "selectOffersGroup":
                        var b = e.offers.find((function(e) {
                            return e.id === t.payload
                        }));
                        if (!b) throw new Error('Not found offer group: "'.concat(t.payload, '"'));
                        if ("INTERNET_GROUP" !== b.type) throw new Error('Cannot select offer as offer group: "'.concat(t.payload, '"'));
                        var p = E(e, v.INTERNET_GROUP());
                        return h(g({}, y, {}, p, {
                            currentOffersGroup: b,
                            offerType: null,
                            currentStep: "INTERNET_GROUP"
                        }));
                    case "setIsUserLogged":
                        return g({}, e, {
                            isUserLogged: t.payload
                        });
                    case "goToOffers":
                        var d = E(e, v.OFFERS());
                        return g({}, y, {}, d, {
                            currentStep: "OFFERS"
                        });
                    case "goToProcesses":
                        var f = E(e, v.PROCESSES());
                        return g({}, y, {}, f, {
                            currentStep: "PROCESSES"
                        });
                    case "goToLocation":
                        var j = E(e, v.LOCATION());
                        return g({}, y, {}, j, {
                            currentStep: "LOCATION"
                        });
                    case "goToSingleOffer":
                        var T = E(e, v.SINGLE_OFFER());
                        return g({}, y, {}, T, {
                            currentStep: "SINGLE_OFFER"
                        });
                    case "goToAuthorization":
                        var S = E(e, v.AUTHORIZATION());
                        return g({}, y, {}, S, {
                            currentStep: "AUTHORIZATION"
                        });
                    case "goToVerification":
                        var C = E(e, v.VERIFICATION());
                        return g({}, y, {}, C, {
                            currentStep: "VERIFICATION",
                            userNeedsVerification: !0
                        });
                    case "goToAccounts":
                        var w = E(e, v.ACCOUNTS());
                        return g({}, y, {}, w, {
                            currentStep: "ACCOUNTS"
                        });
                    case "goToChangeAccount":
                        var x = E(e, v.CHANGE_ACCOUNT());
                        return g({}, y, {}, x, {
                            currentStep: "CHANGE_ACCOUNT"
                        });
                    case "goToLogin":
                        var k = E(e, v.LOGIN());
                        return g({}, y, {}, k, {
                            currentStep: "LOGIN"
                        });
                    case "goToSelectNumber":
                        var P = E(e, v.SELECT_NUMBER());
                        return g({}, y, {}, P, {
                            currentStep: "SELECT_NUMBER"
                        });
                    case "goToMaintenance":
                        return g({}, e, {
                            currentStep: "MAINTENANCE"
                        });
                    case "goToOffersGroup":
                        var I = E(e, v.INTERNET_GROUP());
                        return g({}, y, {}, I, {
                            currentStep: "INTERNET_GROUP"
                        });
                    case "goToSummary":
                        var R = E(e, v.SUMMARY());
                        return g({}, y, {}, R, {
                            currentStep: "SUMMARY"
                        });
                    case "goToServices":
                        var A = E(e, v.SERVICES());
                        return g({}, y, {}, A, {
                            currentStep: "SERVICES"
                        });
                    case "goToFixProcesses":
                        var N = E(e, v.FIX_PROCESSES());
                        return g({}, y, {}, N, {
                            currentStep: "FIX_PROCESSES"
                        });
                    case "goToUpsell":
                        var z = E(e, v.UPSELL());
                        return g({}, y, {}, z, {
                            currentStep: "UPSELL"
                        });
                    case "setProcessError":
                        var L = E(e, v.ERROR());
                        return h(g({}, y, {}, L, {
                            processError: t.payload
                        }));
                    case "showOfferDetails":
                        return g({}, e, {
                            shouldShowOfferDetails: t.payload
                        });
                    case "setAutorizationData":
                        return h(g({}, e, {
                            authorizationData: t.payload,
                            currentSingleOffer: null
                        }));
                    case "setShouldVerifyDiscount":
                        return g({}, e, {
                            shouldVerifyDiscounts: t.payload
                        });
                    case "setIsSuflerProcessing":
                        return g({}, e, {
                            isSuflerProcessing: t.payload
                        });
                    case "setCurrentSingleOffer":
                        return g({}, e, {
                            offerPackages: (null === (n = t.payload) || void 0 === n ? void 0 : n.mainServices) ? Object(m.a)(Object(m.b)(t.payload)) : [],
                            currentSingleOffer: t.payload,
                            selectedTVPackages: null,
                            selectedOtherPackages: null
                        });
                    case "setShouldUseDiscounts":
                        return g({}, e, {
                            shouldUseDiscounts: t.payload
                        });
                    case "setSingleOffers":
                        return g({}, e, {
                            singleOffers: t.payload
                        });
                    case "setIsLoadingSingleOffersList":
                        return g({}, e, {
                            isLoadingSingleOffersList: t.payload
                        });
                    case "setIsUserLoggedWithCAAP":
                        return g({}, e, {
                            isUserLoggedWithCAAP: t.payload
                        });
                    case "setIsUserLoggedWithSms":
                        return g({}, e, {
                            isUserLoggedWithSms: t.payload
                        });
                    case "setShouldShowAccounts":
                        return h(g({}, e, {
                            shouldShowAccounts: t.payload
                        }));
                    case "setVerificationError":
                        return g({}, e, {
                            verificationError: t.payload
                        });
                    case "setLocalizationData":
                        return h(g({}, e, {
                            localizationData: g({}, t.payload)
                        }));
                    case "showTVConfigurator":
                        return g({}, e, {
                            shouldShowTVConfigurator: t.payload
                        });
                    case "isSuflerDescriptionInView":
                        return g({}, e, {
                            isSuflerDescriptionInView: t.payload
                        });
                    case "isSuflerMainInView":
                        return g({}, e, {
                            isSuflerMainInView: t.payload
                        });
                    case "setPackageConfiguratorType":
                        return g({}, e, {
                            packageConfiguratorType: t.payload
                        });
                    case "replaceState":
                        return t.payload;
                    case "setUserNeedsVerification":
                        return g({}, e, {
                            userNeedsVerification: t.payload
                        });
                    case "setDoesPhoneLineExist":
                        return g({}, e, {
                            doesPhoneLineExist: t.payload
                        });
                    case "setCheckedPackages":
                        return "CHANNELS" === e.packageConfiguratorType ? g({}, e, {
                            selectedTVPackages: t.payload
                        }) : g({}, e, {
                            selectedOtherPackages: t.payload
                        });
                    case "setSelectedPackages":
                        return g({}, e, {
                            selectedPackages: t.payload
                        });
                    case "setCurrentStep":
                        return g({}, e, {
                            currentStep: t.payload
                        });
                    case "setContracts":
                        return g({}, e, {
                            contracts: t.payload
                        });
                    case "setSummaryData":
                        return g({}, e, {
                            summaryData: t.payload
                        });
                    case "appendOfferPackages":
                        var _ = e.offerPackages.map((function(e) {
                            return e.id
                        }));
                        return g({}, e, {
                            offerPackages: [].concat(Object(O.a)(e.offerPackages), Object(O.a)(t.payload.filter((function(e) {
                                return !_.includes(e.id)
                            }))))
                        });
                    case "setFixMigrationProcesses":
                        return g({}, e, {
                            fixMigrationProcesses: t.payload
                        });
                    case "setCurrentFixMigrationProcessType":
                        return g({}, e, {
                            currentSingleOffer: null,
                            currentFixMigrationProcessType: t.payload
                        });
                    case "setHasSelectedAccount":
                        return g({}, e, {
                            hasSelectedAccount: t.payload
                        });
                    case "showPackageConfigurator":
                        return g({}, e, {
                            shouldShowPackagesConfigurator: t.payload
                        });
                    case "setCurrentServiceName":
                        return g({}, e, {
                            currentServiceName: t.payload
                        });
                    case "setCurrentUpsellOffer":
                        return g({}, e, {
                            currentUpsellOffer: t.payload
                        });
                    case "setCurrentUpselVariant":
                        return g({}, e, {
                            currentUpsellVariant: t.payload
                        });
                    case "sendSelectedAccount":
                        return g({}, e, {
                            selectedAccount: t.payload
                        });
                    case "setPreviousStep":
                        return g({}, e, {
                            previousStep: t.payload
                        });
                    case "resetSelectedOffer":
                        return g({}, e, {
                            currentOffer: null
                        });
                    case "resetSelectedProcess":
                        return g({}, e, {
                            currentProcess: null
                        });
                    case "setAuhtorizationType":
                        return g({}, e, {
                            authorizationType: t.payload
                        });
                    default:
                        return e
                }
            }
            var S = n("XWgT");

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var w = function(e, t) {
                if (!t) return e;
                var n, a = t.currentOfferId,
                    r = t.offerType,
                    c = void 0 === r ? null : r,
                    i = t.phoneNumber,
                    s = t.processType,
                    l = t.groupType,
                    u = t.selectedPackages,
                    b = void 0 === u ? null : u,
                    p = t.deviceBaseId,
                    d = t.deviceVariantId,
                    f = t.currentOfferIds,
                    O = t.shouldUseDiscounts,
                    m = void 0 !== O && O,
                    j = t.currentStep || e.currentStep,
                    g = function(e, t) {
                        return e && e.find((function(e) {
                            return e.type === t
                        })) || null
                    }((n = e.offers) ? n.map((function(e) {
                        return Object(S.a)(e.type) ? e.offers : e
                    })).flat() : null, c),
                    y = e.offers.find((function(e) {
                        return e.type === l
                    })) || void 0,
                    h = g && g.processes.find((function(e) {
                        return e.type === s
                    })) || null,
                    v = f && f.split(",") || [];
                a && v.unshift(a);
                var E = "AUTHORIZATION" === j && "SINGLE_OFFER" === e.currentStep,
                    T = v.length > 0 || !!b;
                j = E && T ? "SINGLE_OFFER" : j;
                var w = e.singleOffers.map((function(e) {
                        return e.propositionId
                    })) || [],
                    x = v.find((function(e) {
                        return w.includes(e)
                    })),
                    k = "SINGLE_OFFER" === j && e.singleOffers.find((function(e) {
                        return e.propositionId === x
                    })) || e.singleOffers.find((function(e) {
                        return e.isDefault
                    })) || e.singleOffers[0];
                return function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? C(Object(n), !0).forEach((function(t) {
                            Object(o.a)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e, {
                    offerType: c,
                    currentStep: j,
                    currentOffer: g,
                    currentProcess: h,
                    authorizationData: i ? {
                        phoneNumber: i,
                        isUserAuthenticated: !0
                    } : e.authorizationData,
                    currentOffersGroup: y,
                    isLoadingSingleOffersList: !1,
                    processType: s || null,
                    currentSingleOffer: k || null,
                    selectedPackages: b,
                    deviceBaseId: p,
                    deviceVariantId: d,
                    shouldUseDiscounts: m
                })
            };

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var k = function(e) {
                    var t = e.state,
                        n = e.cachedState,
                        a = e.configState,
                        r = e.queryState,
                        c = "SINGLE_OFFER" === (null === a || void 0 === a ? void 0 : a.currentStep) || "SINGLE_OFFER" === (null === r || void 0 === r ? void 0 : r.currentStep) || "AUTHORIZATION" === (null === a || void 0 === a ? void 0 : a.currentStep) || "AUTHORIZATION" === (null === r || void 0 === r ? void 0 : r.currentStep),
                        i = u.a.useRef(!c);
                    return u.a.useEffect((function() {
                        t.singleOffers.length > 0 && !1 === i.current && (i.current = !0)
                    }), [t.singleOffers.length]), u.a.useMemo((function() {
                        var e;
                        switch ((e = {
                            cachedState: n,
                            configState: a,
                            queryState: r
                        }).queryState ? "URL" : e.cachedState ? "CACHE" : e.configState ? "API" : null) {
                            case "CACHE":
                                return n;
                            case "URL":
                                return n && "SUMMARY" === (null === r || void 0 === r ? void 0 : r.currentStep) ? function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? x(Object(n), !0).forEach((function(t) {
                                            Object(o.a)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, n, {
                                    currentStep: r.currentStep
                                }) : w(t, r);
                            case "API":
                                return w(t, a);
                            default:
                                return t
                        }
                    }), [i.current])
                },
                P = n("v2bw"),
                I = n("BPef"),
                R = n("ptpn"),
                A = n("y6sE"),
                N = n("s11k"),
                z = n("rpJ/"),
                L = n("AsJ6"),
                _ = Object(z.a)({
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
                M = n("3oP0"),
                D = n("Q1tT"),
                F = n("l1C2");
            u.a.createElement;

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

            function V(e) {
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
            var U = u.a.createContext(null),
                H = u.a.memo((function(e) {
                    var t = e.offers,
                        n = e.id,
                        r = e.pk,
                        o = e.configParams,
                        l = e.market,
                        O = e.isUserLogged,
                        m = e.isInApp,
                        j = Object(s.a)(e, ["offers", "id", "pk", "configParams", "market", "isUserLogged", "isInApp"]),
                        g = Object(A.b)().appSelectedAccount,
                        h = Object(P.b)().index,
                        v = Object(I.a)(n),
                        E = Object(D.c)(),
                        S = E.suflerTransactions,
                        C = E.webUpsell,
                        w = function(e) {
                            var t = Object(A.b)().isMaintenance,
                                n = u.a.useCallback((function() {
                                    Object(R.a)({
                                        key: "sufler-".concat(e)
                                    })
                                }), [e]),
                                a = u.a.useMemo((function() {
                                    try {
                                        var a = p.b.getItem("sufler-".concat(e));
                                        if (null === a) return null;
                                        var r = JSON.parse(a),
                                            c = Date.now() - r.createTime > 18e5,
                                            o = !t && "MAINTENANCE" === r.state.currentStep;
                                        return c || o || t ? (n(), null) : r.state
                                    } catch (i) {
                                        return null
                                    }
                                }), [n, e, t]);
                            return {
                                clearCache: n,
                                cachedState: a
                            }
                        }(n),
                        x = w.cachedState,
                        z = w.clearCache,
                        L = u.a.useState(null),
                        B = Object(i.a)(L, 2),
                        H = B[0],
                        G = B[1],
                        W = {
                            cachedState: x,
                            queryState: v,
                            configState: o || null
                        },
                        K = k(V({
                            state: V({}, y, {
                                pk: r,
                                id: n,
                                offers: t,
                                isUserLogged: O
                            })
                        }, W)),
                        q = u.a.useReducer(T, V({}, K, {
                            shouldUseDiscounts: K.shouldUseDiscounts || m
                        })),
                        Y = Object(i.a)(q, 2),
                        X = Y[0],
                        Z = Y[1],
                        J = Object(f.useMachine)(_, {
                            context: {
                                isLoggedIn: O,
                                isUpsellEnabled: m || C,
                                isEnhanced: !!H,
                                appSelectedAccount: g,
                                areTransactionsEnabled: O && (S || m)
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
                                                return t.next = 2, c.a.awrap(Object(M.e)());
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
                                    return Object(N.a)()
                                },
                                sendAccount: function(e) {
                                    var t, n;
                                    return Object(M.l)({
                                        id: (null === (t = e.appSelectedAccount) || void 0 === t ? void 0 : t.id) || "",
                                        accountCode: (null === (n = e.appSelectedAccount) || void 0 === n ? void 0 : n.code) || ""
                                    }).then((function(t) {
                                        t && (Z({
                                            type: "sendSelectedAccount",
                                            payload: e.appSelectedAccount || null
                                        }), e.appSelectedAccount && (Object(d.a)("accountCode", "", 0), Object(d.a)("accountId", "", 0)))
                                    }))
                                },
                                fetchLoggedCustomerData: function() {
                                    return Object(M.k)().then((function(e) {
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
                        Q = Object(i.a)(J, 2),
                        $ = Q[0],
                        ee = Q[1],
                        te = k(V({
                            state: X
                        }, W)),
                        ne = u.a.useCallback((function(e) {
                            $.matches("ready") || (null === e || void 0 === e ? void 0 : e.id) === n && (ee({
                                type: "SET_ENHANCED",
                                value: !!e
                            }), G(e))
                        }), [$, ee, n]);
                    u.a.useEffect((function() {
                        window.OplContentApi ? window.OplContentApi.enhance = ne : window.OplContentApi = {
                            version: "1",
                            enhance: ne
                        }
                    }), [ne]), u.a.useEffect((function() {
                        (function(e, t) {
                            try {
                                return JSON.stringify(e) === JSON.stringify(t)
                            } catch (n) {
                                return !1
                            }
                        })(K, te) || Z({
                            type: "replaceState",
                            payload: te
                        })
                    }), [te, K]), u.a.useEffect((function() {
                        var e = V({}, X, {
                                isSuflerProcessing: !1
                            }),
                            t = JSON.stringify({
                                state: e,
                                createTime: Date.now()
                            });
                        p.b.setItem("sufler-".concat(n), t)
                    }), [n, X]), u.a.useEffect((function() {
                        Z({
                            type: "setIsUserLogged",
                            payload: O
                        })
                    }), [O]);
                    var ae = $.matches("ready"),
                        re = u.a.useMemo((function() {
                            return V({}, X, {
                                id: n,
                                dispatch: Z,
                                clearCache: z,
                                internalID: h,
                                showNetPrices: Object(b.a)(l),
                                isB2B: Object(b.a)(l),
                                pk: r,
                                isUserLogged: O,
                                isInitializing: !ae,
                                enhance: H,
                                isInApp: m
                            })
                        }), [X, n, z, h, l, r, O, ae, H, m]);
                    return Object(F.b)(U.Provider, Object(a.a)({
                        value: re
                    }, j))
                }));
            H.displayName = "SuflerProvider";
            var G = function() {
                var e = u.a.useContext(U);
                if (null === e) throw Error("useSuflerContext: Please provide SuflerProvider value.");
                return e
            }
        },
        bVfH: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return O
            })), n.d(t, "e", (function() {
                return m
            })), n.d(t, "g", (function() {
                return j
            })), n.d(t, "d", (function() {
                return g
            })), n.d(t, "c", (function() {
                return y
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "a", (function() {
                return v
            }));
            var a = n("zjfJ"),
                r = n("zygG"),
                c = n("VtSi"),
                o = n.n(c),
                i = n("pu3o"),
                s = n.n(i),
                l = n("v4L6"),
                u = n("com9");

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                    var t, n;
                    return o.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return t = e.shouldGetLastItem, a.next = 3, o.a.awrap(u.a.get("/hapi/koszyk/minikoszyk", {
                                    params: {
                                        lastBundleMode: t
                                    }
                                }));
                            case 3:
                                return n = a.sent, a.abrupt("return", n.data);
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                f = function() {
                    var e;
                    return o.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, o.a.awrap(d({
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
                    return o.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, o.a.awrap(d({
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
                m = function() {
                    var e, t, n, a, r, c, i;
                    return o.a.async((function(s) {
                        for (;;) switch (s.prev = s.next) {
                            case 0:
                                return s.next = 2, o.a.awrap(u.a.get("/hapi/koszyk/multi/_data/cart"));
                            case 2:
                                return e = s.sent, t = e.data, n = t.monthlyCosts, a = t.oneTimeCost, r = t.checkoutCost, c = t.bonuses, i = t.net, s.abrupt("return", {
                                    monthlyCosts: n,
                                    oneTimeCost: a,
                                    checkoutCost: r,
                                    bonuses: c,
                                    net: i
                                });
                            case 5:
                            case "end":
                                return s.stop()
                        }
                    }), null, null, null, Promise)
                },
                j = function() {
                    var e, t, n, a, c, i, s, l, u, b;
                    return o.a.async((function(d) {
                        for (;;) switch (d.prev = d.next) {
                            case 0:
                                return d.next = 2, o.a.awrap(Promise.all([f(), m()]));
                            case 2:
                                return e = d.sent, t = Object(r.a)(e, 2), n = t[0], a = t[1], c = a.monthlyCosts, i = a.oneTimeCost, s = a.checkoutCost, l = a.bonuses, u = a.net, b = p({}, n, {
                                    monthlyCosts: c,
                                    oneTimeCost: i,
                                    checkoutCost: s,
                                    bonuses: l,
                                    net: u
                                }), d.abrupt("return", b);
                            case 9:
                            case "end":
                                return d.stop()
                        }
                    }), null, null, null, Promise)
                },
                g = function(e) {
                    var t;
                    return o.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, o.a.awrap(Object(l.a)());
                            case 2:
                                return t = n.sent, n.next = 5, o.a.awrap(u.a.post("/koszyk/usun/".concat(e), null, {
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
                    var a;
                    return o.a.async((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, o.a.awrap(Object(l.a)());
                            case 2:
                                return a = r.sent, r.next = 5, o.a.awrap(u.a.post("/hapi/koszyk/removeDeviceFromSimFreeBundle", s.a.stringify({
                                    bundleNo: e,
                                    entryNumber: t,
                                    lastOne: n
                                }), {
                                    headers: {
                                        csrftoken: a
                                    }
                                }));
                            case 5:
                            case "end":
                                return r.stop()
                        }
                    }), null, null, null, Promise)
                },
                h = function() {
                    var e;
                    return o.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, o.a.awrap(Object(l.a)());
                            case 2:
                                return e = t.sent, t.next = 5, o.a.awrap(u.a.post("/koszyk/usun/", null, {
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
                v = function(e) {
                    var t, n, a, r, c, i, b, p, d, f, O, m, j;
                    return o.a.async((function(g) {
                        for (;;) switch (g.prev = g.next) {
                            case 0:
                                return t = e.ratePlanId, n = e.id, a = e.processType, r = e.offerType, c = e.deviceVariant, i = e.market, b = e.availableProductsKey, p = e.bonusesToAdd, d = e.defaultBonusesToIgnore, g.next = 3, o.a.awrap(Object(l.a)());
                            case 3:
                                if (f = g.sent, O = function(e) {
                                        return 400 === e.code || !1 === e.success || !e.success
                                    }, "SALE_OF_GOODS" !== a) {
                                    g.next = 13;
                                    break
                                }
                                return g.next = 8, o.a.awrap(u.a.post("/hapi/sklep/dodaj", s.a.stringify({
                                    productCodePost: c,
                                    bundleTemplateId: n,
                                    bundleNo: 0
                                }), {
                                    headers: {
                                        CSRFToken: f
                                    }
                                }));
                            case 8:
                                if (m = g.sent, !O(m.data) || 400 !== m.data.code) {
                                    g.next = 11;
                                    break
                                }
                                throw new Error(m.data.message);
                            case 11:
                                g.next = 18;
                                break;
                            case 13:
                                return g.next = 15, o.a.awrap(u.a.post("/hapi/koszyk/oovdodaj", s.a.stringify({
                                    rateplanId: t,
                                    propositionId: n,
                                    process: a,
                                    offerType: r,
                                    market: i,
                                    deviceVariant: c,
                                    availableProductsKey: b,
                                    bonusesToAdd: p,
                                    defaultBonusesToIgnore: d
                                }, {
                                    arrayFormat: "brackets"
                                }), {
                                    headers: {
                                        CSRFToken: f
                                    }
                                }));
                            case 15:
                                if (j = g.sent, !O(j.data)) {
                                    g.next = 18;
                                    break
                                }
                                throw new Error(j.data.message);
                            case 18:
                            case "end":
                                return g.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        cFFy: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                return e.split(/(\d{3})/).join(" ").trim()
            }
        },
        cVGl: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }
        },
        com9: function(e, t, n) {
            "use strict";
            var a;
            n.d(t, "a", (function() {
                return r
            })), (a = n("jmmm").instance).interceptors.response.use((function(e) {
                if ("Page not found" === e.data.status) {
                    var t = new Error("Page not found: ".concat(e.config.url));
                    throw t.status = 404, t
                }
                return e
            }));
            var r = a
        },
        dyNj: function(e, t, n) {
            "use strict";
            (function(t) {
                var a = n("P0jV"),
                    r = n("rFSu"),
                    c = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function o(e, t) {
                    !a.isUndefined(e) && a.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var i = {
                    adapter: function() {
                        var e;
                        return "undefined" !== typeof XMLHttpRequest ? e = n("Ay6X") : "undefined" !== typeof t && "[object process]" === Object.prototype.toString.call(t) && (e = n("Ay6X")), e
                    }(),
                    transformRequest: [function(e, t) {
                        return r(t, "Accept"), r(t, "Content-Type"), a.isFormData(e) || a.isArrayBuffer(e) || a.isBuffer(e) || a.isStream(e) || a.isFile(e) || a.isBlob(e) ? e : a.isArrayBufferView(e) ? e.buffer : a.isURLSearchParams(e) ? (o(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : a.isObject(e) ? (o(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
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
                a.forEach(["delete", "get", "head"], (function(e) {
                    i.headers[e] = {}
                })), a.forEach(["post", "put", "patch"], (function(e) {
                    i.headers[e] = a.merge(c)
                })), e.exports = i
            }).call(this, n("F63i"))
        },
        eGgp: function(e, t, n) {
            "use strict";
            var a = n("P0jV"),
                r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, c, o = {};
                return e ? (a.forEach(e.split("\n"), (function(e) {
                    if (c = e.indexOf(":"), t = a.trim(e.substr(0, c)).toLowerCase(), n = a.trim(e.substr(c + 1)), t) {
                        if (o[t] && r.indexOf(t) >= 0) return;
                        o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
                    }
                })), o) : o
            }
        },
        fGyu: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n("lEbO");
            var r = n("HO86");

            function c(e) {
                return function(e) {
                    if (Array.isArray(e)) return Object(a.a)(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || Object(r.a)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        ggb3: function(e, t, n) {
            e.exports = n("8dj6")
        },
        jmmm: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "instance", (function() {
                return i
            }));
            var a = n("ggb3"),
                r = n.n(a),
                c = n("0D0S"),
                o = n.n(c)()().publicRuntimeConfig,
                i = r.a.create({
                    baseURL: o.OMNIFRONTEND_HOST
                })
        },
        kN39: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                return "B2C" !== e
            }
        },
        mNrh: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            }));
            var a = n("ERkP"),
                r = n.n(a),
                c = n("Zscy"),
                o = n("rs9p"),
                i = n("HKDS"),
                s = n("PdAJ"),
                l = function(e) {
                    var t, n = Object(c.b)(),
                        a = n.dispatch,
                        l = n.selectedPackages,
                        u = Object(o.a)(e),
                        b = u.capacity,
                        p = u.defaultSelected,
                        d = u.packagesGroup,
                        f = null !== (t = e && l && Object(i.a)(l, e)) && void 0 !== t ? t : [],
                        O = r.a.useCallback((function(t) {
                            var n, r = null === e || void 0 === e ? void 0 : e.propositionId;
                            if (r) {
                                var c = null !== (n = null === l || void 0 === l ? void 0 : l.filter((function(e) {
                                    return e.offerId !== r
                                }))) && void 0 !== n ? n : [];
                                c.push({
                                    offerId: r,
                                    packages: t.map(s.d)
                                }), a({
                                    type: "setSelectedPackages",
                                    payload: c
                                })
                            }
                        }), [a, l, e]),
                        m = r.a.useCallback((function() {
                            return f.map(s.c)
                        }), [f]),
                        j = r.a.useCallback((function() {
                            var e = m();
                            return p.filter((function(t) {
                                return !e.includes(t.code)
                            })).map(s.c)
                        }), [p, m]),
                        g = r.a.useMemo((function() {
                            return d ? Object(s.e)(d, f) : 0
                        }), [d, f]);
                    return {
                        allowedPackagesCount: b,
                        defaultSelected: p,
                        getPackagesToAdd: m,
                        getPackagesToIgnore: j,
                        selectedPackages: f,
                        selectedPackagesWeight: g,
                        setSelectedPackages: O
                    }
                }
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
                    getItem: function(a) {
                        return n() ? e().getItem(a) : t.hasOwnProperty(a) ? t[a] : null
                    },
                    setItem: function(a, r) {
                        n() ? e().setItem(a, r) : t[a] = String(r)
                    },
                    removeItem: function(a) {
                        n() ? e().removeItem(a) : delete t[a]
                    },
                    clear: function() {
                        n() ? e().clear() : t = {}
                    },
                    key: function(a) {
                        return n() ? e().key(a) : Object.keys(t)[a] || null
                    },
                    get length() {
                        return n() ? e().length : Object.keys(t).length
                    }
                }
            }
        },
        pQXz: function(e, t, n) {
            "use strict";
            var a = n("M44J");
            e.exports = function(e, t, n, r, c) {
                var o = new Error(e);
                return a(o, t, n, r, c)
            }
        },
        ptpn: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var a = n("EJk9"),
                r = function(e) {
                    var t = e.key,
                        n = e.prefix;
                    if (t) a.b.removeItem(t);
                    else if (n) try {
                        Object.keys(window.sessionStorage).filter((function(e) {
                            return e.match("^".concat(n))
                        })).forEach((function(e) {
                            return a.b.removeItem(e)
                        }))
                    } catch (r) {}
                }
        },
        qvwg: function(e, t, n) {
            "use strict";
            var a = n("BP9p"),
                r = n("E7j9");
            e.exports = function(e, t) {
                return e && !a(t) ? r(e, t) : t
            }
        },
        rFSu: function(e, t, n) {
            "use strict";
            var a = n("P0jV");
            e.exports = function(e, t) {
                a.forEach(e, (function(n, a) {
                    a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a])
                }))
            }
        },
        rs9p: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return d
            }));
            var a = n("zjfJ"),
                r = n("fGyu"),
                c = n("zygG"),
                o = n("ERkP"),
                i = n.n(o),
                s = n("Zscy"),
                l = n("HKDS"),
                u = n("PdAJ");

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach((function(t) {
                        Object(a.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = function(e) {
                var t = Object(s.b)().selectedPackages,
                    n = e && Object(u.b)(e, "ADDITIONAL_PACKAGES_GROUP"),
                    a = (null === n || void 0 === n ? void 0 : n.additionals.filter((function(e) {
                        return e.productCharacteristic.defaultSelected
                    })).map((function(e) {
                        var t = e.code,
                            a = e.type;
                        return {
                            code: t,
                            groupCode: n.code,
                            type: a
                        }
                    }))) || [],
                    o = e && t && Object(l.a)(t, e),
                    b = i.a.useState(o || []),
                    d = Object(c.a)(b, 2),
                    f = d[0],
                    O = d[1],
                    m = (null === n || void 0 === n ? void 0 : n.productCharacteristic.capacity) || 0,
                    j = i.a.useMemo((function() {
                        return n ? Object(u.e)(n, f) : 0
                    }), [n, f]),
                    g = m - j,
                    y = m === j;
                return {
                    capacity: m,
                    defaultSelected: a,
                    getPackages: i.a.useCallback((function() {
                        return n ? n.additionals.map((function(e) {
                            var t, a = e.productCharacteristic.weight,
                                r = Object(u.a)(e, f);
                            return {
                                isActive: r || !y && !(a > g),
                                isChecked: r,
                                characteristic: p({}, e.productCharacteristic),
                                content: p({}, null === (t = e.features.packageFeatures[0]) || void 0 === t ? void 0 : t.value),
                                code: e.code,
                                groupCode: n.code,
                                type: e.type
                            }
                        })) : []
                    }), [g, y, n, f]),
                    packagesGroup: n,
                    selectedPackages: f,
                    togglePackage: function(e) {
                        var t = Object(u.a)(e, f) ? f.filter((function(t) {
                            return t.code !== e.code
                        })) : [].concat(Object(r.a)(f), [e]);
                        O(t)
                    }
                }
            }
        },
        s11k: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return u
            })), n.d(t, "c", (function() {
                return b
            })), n.d(t, "g", (function() {
                return p
            })), n.d(t, "f", (function() {
                return d
            })), n.d(t, "d", (function() {
                return m
            })), n.d(t, "b", (function() {
                return j
            })), n.d(t, "a", (function() {
                return g
            })), n.d(t, "h", (function() {
                return y
            }));
            var a = n("VtSi"),
                r = n.n(a),
                c = n("pu3o"),
                o = n.n(c),
                i = n("v4L6"),
                s = n("com9"),
                l = function(e) {
                    var t, n, a;
                    return r.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.phone, n = e.processType, c.next = 3, r.a.awrap(Object(i.a)());
                            case 3:
                                return a = c.sent, c.next = 6, r.a.awrap(s.a.post("/hapi/customerSmsVerification/setMsisdnOrLogin", o.a.stringify({
                                    msisdn: t,
                                    processType: n || ""
                                }), {
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        csrftoken: a
                                    }
                                }));
                            case 6:
                            case "end":
                                return c.stop()
                        }
                    }), null, null, null, Promise)
                },
                u = function(e) {
                    var t, n, a, c;
                    return r.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return t = e.phone, n = e.processType, o.next = 3, r.a.awrap(Object(i.a)());
                            case 3:
                                return a = o.sent, o.next = 6, r.a.awrap(l({
                                    phone: t,
                                    processType: n
                                }));
                            case 6:
                                return o.next = 8, r.a.awrap(s.a.post("/verifyMSISDN/sendOtp", {
                                    pageVariant: "VERIFICATION_OTP_VARIANT_7_SMS_CODE"
                                }, {
                                    headers: {
                                        csrftoken: a
                                    }
                                }));
                            case 8:
                                if ("OK" !== (c = o.sent).data.status) {
                                    o.next = 11;
                                    break
                                }
                                return o.abrupt("return", c.data);
                            case 11:
                                throw new Error(c.data.statusMessage);
                            case 12:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, null, Promise)
                },
                b = function(e) {
                    var t, n;
                    return r.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return t = e.phone, n = e.processType, a.next = 3, r.a.awrap(l({
                                    phone: t,
                                    processType: n
                                }));
                            case 3:
                                return a.next = 5, r.a.awrap(O());
                            case 5:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                p = function(e) {
                    var t, n, a;
                    return r.a.async((function(c) {
                        for (;;) switch (c.prev = c.next) {
                            case 0:
                                return t = e.token, c.next = 3, r.a.awrap(Object(i.a)());
                            case 3:
                                return n = c.sent, c.next = 6, r.a.awrap(s.a.post("/resendOtp", {
                                    pageVariant: "VERIFICATION_OTP_VARIANT_7_SMS_CODE",
                                    requestToken: t
                                }, {
                                    headers: {
                                        csrftoken: n
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
                d = function(e) {
                    var t, n, a, c, o;
                    return r.a.async((function(l) {
                        for (;;) switch (l.prev = l.next) {
                            case 0:
                                return t = e.password, n = e.login, l.next = 3, r.a.awrap(Object(i.a)());
                            case 3:
                                return a = l.sent, l.next = 6, r.a.awrap(s.a.post("/hapi/verifyPortalLogin/login", {
                                    password: t
                                }, {
                                    headers: {
                                        csrftoken: a
                                    }
                                }));
                            case 6:
                                if ("OK" === (c = l.sent).data.status) {
                                    l.next = 9;
                                    break
                                }
                                throw new Error(c.data.statusMessage);
                            case 9:
                                return l.next = 11, r.a.awrap(f(n));
                            case 11:
                                if (!(o = l.sent).message) {
                                    l.next = 14;
                                    break
                                }
                                throw new Error(o.message);
                            case 14:
                                return l.abrupt("return", c.data);
                            case 15:
                            case "end":
                                return l.stop()
                        }
                    }), null, null, null, Promise)
                },
                f = function(e) {
                    var t, n;
                    return r.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, r.a.awrap(Object(i.a)());
                            case 2:
                                return t = a.sent, a.next = 5, r.a.awrap(s.a.post("/hapi/customerSmsVerification/setCimByLogin", o.a.stringify({
                                    login: e
                                }), {
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 5:
                                return n = a.sent, a.abrupt("return", n.data);
                            case 7:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                O = function() {
                    var e;
                    return r.a.async((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, r.a.awrap(Object(i.a)());
                            case 2:
                                return e = t.sent, t.next = 5, r.a.awrap(s.a.post("/hapi/verifyPortalLogin/sendPasswordVerificationTemplate", {
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
                m = function(e) {
                    var t, n, a, c, o, l, u, b;
                    return r.a.async((function(p) {
                        for (;;) switch (p.prev = p.next) {
                            case 0:
                                return t = e.pesel, n = e.apartmentNo, a = e.cbsIdCity, c = e.cbsIdStreet, o = e.city, l = e.roadNo, u = e.street, p.next = 3, r.a.awrap(Object(i.a)());
                            case 3:
                                return b = p.sent, p.next = 6, r.a.awrap(s.a.post("/hapi/customerAddressVerification/requestPeselAddressVerification/".concat(t), {
                                    townId: a,
                                    streetId: c,
                                    streetName: u,
                                    streetNumber: l,
                                    town: o,
                                    appartmentNo: n
                                }, {
                                    headers: {
                                        csrftoken: b
                                    }
                                }));
                            case 6:
                            case "end":
                                return p.stop()
                        }
                    }), null, null, null, Promise)
                },
                j = function(e) {
                    var t;
                    return r.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, r.a.awrap(s.a.get("/hapi/customerAddressVerification/isVerified?_=".concat(e)));
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
                g = function(e) {
                    var t, n;
                    return r.a.async((function(a) {
                        for (;;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, r.a.awrap(Object(i.a)());
                            case 2:
                                return t = a.sent, a.next = 5, r.a.awrap(s.a.get("/hapi/pwa/v1/offerSelector/checkMarket", {
                                    params: {
                                        msisdn: e
                                    },
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 5:
                                if (0 === (n = a.sent).data.status) {
                                    a.next = 8;
                                    break
                                }
                                throw new Error(n.data.message);
                            case 8:
                                return a.abrupt("return", n.data);
                            case 9:
                            case "end":
                                return a.stop()
                        }
                    }), null, null, null, Promise)
                },
                y = function(e) {
                    var t, n, a, c;
                    return r.a.async((function(o) {
                        for (;;) switch (o.prev = o.next) {
                            case 0:
                                return t = e.csrfToken, n = e.code, a = e.token, o.next = 3, r.a.awrap(s.a.post("/verifyMSISDN/verify", {
                                    verificationParameters: {
                                        OTP_CODE: n
                                    },
                                    verificationToken: a
                                }, {
                                    headers: {
                                        csrftoken: t
                                    }
                                }));
                            case 3:
                                if ("OK" === (c = o.sent).data.status) {
                                    o.next = 6;
                                    break
                                }
                                throw new Error(c.data.statusMessage);
                            case 6:
                                return o.abrupt("return", c.data);
                            case 7:
                            case "end":
                                return o.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        sXB5: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = function(e) {
                return "DATA" === e || "VOICE" === e || "DATA_LDF" === e || "VOICE_LDF" === e
            }
        },
        th3f: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return m
            }));
            var a = n("VtSi"),
                r = n.n(a),
                c = n("zygG"),
                o = n("ERkP"),
                i = n.n(o),
                s = n("Zscy"),
                l = n("y6sE"),
                u = n("sGZ7"),
                b = n("yr6+"),
                p = n("bVfH"),
                d = n("2OAT"),
                f = n("Q1tT"),
                O = n("mNrh"),
                m = function() {
                    var e = Object(s.b)(),
                        t = e.isB2B,
                        n = e.dispatch,
                        a = e.clearCache,
                        o = e.offerType,
                        m = e.currentSingleOffer,
                        j = e.deviceVariantId,
                        g = Object(l.b)().market,
                        y = Object(u.c)(),
                        h = y.dispatch,
                        v = y.cartItemsCount,
                        E = i.a.useState(!1),
                        T = Object(c.a)(E, 2),
                        S = T[0],
                        C = T[1],
                        w = Object(f.c)().suflerSummaryB2B,
                        x = Object(O.a)(m),
                        k = x.getPackagesToAdd,
                        P = x.getPackagesToIgnore,
                        I = m ? Object(b.f)(m) : void 0,
                        R = m ? Object(b.a)(m) : void 0,
                        A = (null === I || void 0 === I ? void 0 : I.productCharacteristic.rateplanId) || (null === R || void 0 === R ? void 0 : R.productCharacteristic.rateplanId),
                        N = (null === I || void 0 === I ? void 0 : I.productCharacteristic.availableProductsKey) || (null === R || void 0 === R ? void 0 : R.productCharacteristic.availableProductsKey),
                        z = k(),
                        L = P();
                    return {
                        addItemToCart: function() {
                            return r.a.async((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, C(!0), e.next = 4, r.a.awrap(Object(p.a)({
                                            ratePlanId: A,
                                            id: null === m || void 0 === m ? void 0 : m.propositionId,
                                            offerType: o || void 0,
                                            market: g,
                                            availableProductsKey: N,
                                            bonusesToAdd: z,
                                            defaultBonusesToIgnore: L,
                                            deviceVariant: j
                                        }));
                                    case 4:
                                        if (t && !w || !o || !Object(d.a)(t, o)) {
                                            e.next = 9;
                                            break
                                        }
                                        return C(!1), n({
                                            type: "goToSummary"
                                        }), h({
                                            type: "setCartItemsCount",
                                            payload: (v || 0) + 1
                                        }), e.abrupt("return");
                                    case 9:
                                        C(!1), a(), window.location.href = "/koszyk/multi", e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(0), C(!1), n({
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
                        isPending: S
                    }
                }
        },
        v2bw: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return u
            }));
            var a = n("cxan"),
                r = n("HbGN"),
                c = n("ERkP"),
                o = n.n(c),
                i = n("l1C2"),
                s = (o.a.createElement, o.a.createContext({
                    index: 0,
                    isInViewport: !1
                })),
                l = o.a.memo((function(e) {
                    var t = e.index,
                        n = e.isInViewport,
                        c = Object(r.a)(e, ["index", "isInViewport"]),
                        l = o.a.useMemo((function() {
                            return {
                                index: t,
                                isInViewport: n
                            }
                        }), [t, n]);
                    return Object(i.b)(s.Provider, Object(a.a)({
                        value: l
                    }, c))
                }));
            l.displayName = "ContentComponentProvider";
            var u = function() {
                var e = o.a.useContext(s);
                return e
            }
        },
        v4L6: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("VtSi"),
                r = n.n(a),
                c = n("qnbr"),
                o = function() {
                    var e, t;
                    return r.a.async((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, r.a.awrap(Object(c.a)("hapi/pwa/v1/offerSelector/getToken"));
                            case 2:
                                return e = n.sent, n.next = 5, r.a.awrap(e.json());
                            case 5:
                                return t = n.sent, n.abrupt("return", t);
                            case 7:
                            case "end":
                                return n.stop()
                        }
                    }), null, null, null, Promise)
                }
        },
        vHnm: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var a = n("5IAQ"),
                r = n("ERkP"),
                c = n.n(r),
                o = n("Kq2c"),
                i = n("4lZg"),
                s = n("l1C2");
            c.a.createElement;
            var l = {
                    name: "b7r3gq",
                    styles: "font-size:12px;font-weight:bold;line-height:1;margin:5px 0 10px;"
                },
                u = {
                    name: "1nvf5u9",
                    styles: "text-transform:lowercase;"
                },
                b = function() {
                    var e = Object(o.useTheme)().colors,
                        t = Object(i.b)().device;
                    return t && t.elements ? Object(s.b)(c.a.Fragment, null, null === t || void 0 === t ? void 0 : t.elements.map((function(t, n) {
                        var r = t.color,
                            o = t.name;
                        return Object(s.b)(c.a.Fragment, {
                            key: n
                        }, Object(s.b)("strong", {
                            css: Object(a.a)({
                                color: e.ORANGE_DARK,
                                fontSize: 18
                            }, "")
                        }, o), Object(s.b)("p", {
                            css: l
                        }, "Kolor: ", Object(s.b)("span", {
                            css: u
                        }, r)))
                    }))) : null
                };
            b.displayName = "Details"
        },
        vfGT: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var n = new Array(arguments.length), a = 0; a < n.length; a++) n[a] = arguments[a];
                    return e.apply(t, n)
                }
            }
        },
        ym5Q: function(e, t, n) {
            "use strict";
            var a = n("P0jV");
            e.exports = a.isStandardBrowserEnv() ? {
                write: function(e, t, n, r, c, o) {
                    var i = [];
                    i.push(e + "=" + encodeURIComponent(t)), a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(c) && i.push("domain=" + c), !0 === o && i.push("secure"), document.cookie = i.join("; ")
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
                return r
            })), n.d(t, "g", (function() {
                return o
            })), n.d(t, "f", (function() {
                return s
            })), n.d(t, "a", (function() {
                return u
            })), n.d(t, "c", (function() {
                return p
            })), n.d(t, "b", (function() {
                return f
            })), n.d(t, "e", (function() {
                return m
            }));
            var a = function(e) {
                    return e.isPrimary
                },
                r = function(e) {
                    return e.mainServices.find(a)
                },
                c = function(e) {
                    return "VOICE" === e.type
                },
                o = function(e) {
                    return e.mainServices.find(c)
                },
                i = function(e) {
                    return "VOICE" === e.type && !!e.productCharacteristic
                },
                s = function(e) {
                    return e.mainServices.find(i)
                },
                l = function(e) {
                    return "DATA" === e.type
                },
                u = function(e) {
                    return e.mainServices.find(l)
                },
                b = function(e) {
                    return "NEO" === e.type
                },
                p = function(e) {
                    return e.mainServices.find(b)
                },
                d = function(e) {
                    return "FBB" === e.type
                },
                f = function(e) {
                    return e.mainServices.find(d)
                },
                O = function(e) {
                    return "TV" === e.type
                },
                m = function(e) {
                    return e.mainServices.find(O)
                }
        }
    }
]);
//# sourceMappingURL=sufler.351884ddb4e14c684a1c.js.map