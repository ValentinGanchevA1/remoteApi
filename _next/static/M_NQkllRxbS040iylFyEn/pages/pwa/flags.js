(window.omniJsonp = window.omniJsonp || []).push([
    [42], {
        "59+1": function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("zygG"),
                o = n("ERkP"),
                r = n.n(o),
                i = n("ysqo"),
                c = n.n(i),
                l = n("Q1tT"),
                u = n("l1C2"),
                s = (r.a.createElement, {
                    corazoneSkipRedirect: "Pozwala zignorowa\u0107\xa0przekierowanie el Corazone w Sufler",
                    negateMaintenance: " Odwraca domy\u015bln\u0105 warto\u015b\u0107 flagi przerwy technicznej",
                    minicartEditMode: "Okre\u015bla mo\u017cliwo\u015b\u0107 usuwania produkt\xf3w z poziomu Minicart",
                    suflerTransactions: "Umozliwia pobieranie informacji o numerach mozliwych do utrzymania dla zalogowanego klienta",
                    marketSelection: "Aktywuje funkcjonalno\u015b\u0107 p\u0142achty z wyborem B2B/B2C",
                    redirectVoiceOnB2B: "Przekierowanie oferty Abonament Kom\xf3rkowy na stronie B2B",
                    loveCMB: "Wymusza CMB w ofercie LOVE",
                    configuratorInFIX: "Aktywuje mo\u017cliwo\u015b\u0107 konfiguracji pakiet\xf3w TV i urz\u0105dze\u0144 dla ofert FIX",
                    skipRedirectUrl: "Pozwala pomin\u0105\u0107 przekierowanie oferty",
                    enableCBSRedirectForWarsaw: "Pozwala w\u0142\u0105czy\u0107 przekierowanie dla ofert Warszawskich",
                    suflerSummaryB2B: "Aktywuje krok podsumowania i mo\u017cliwo\u015b\u0107 wyboru duet\xf3w w suflerze dla ofert B2B",
                    additionalPackages: "Pozwala na wy\u015bwietlenie i konfiguracj\u0119\xa0dodatkowych paczek dla oferty VOICE",
                    offline: "Aktywuje obs\u0142gu\u0119\xa0service worker",
                    disableShame: "Ukrywa komunikat UOKIK",
                    webUpsell: "Aktywuje upsell w wersji webowej poza aplikacj\u0105\xa0mobiln\u0105",
                    loggedCustomerPath: "Aktywuje \u015bcie\u017ck\u0119 zalogowanego klienta w Suflerze dla WWW"
                });
            t.default = function() {
                var e = Object(l.c)(),
                    t = r.a.useState(e),
                    n = Object(a.a)(t, 2),
                    o = n[0],
                    i = n[1],
                    b = Object.keys(o),
                    m = r.a.useCallback((function() {
                        ! function() {
                            for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
                                var n = e[t],
                                    a = n.indexOf("="),
                                    o = a > -1 ? n.substr(0, a) : n;
                                document.cookie = "".concat(o, "=0; secure; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
                            }
                        }(), i(Object(l.b)(document.cookie))
                    }), []),
                    f = function() {
                        i(Object(l.b)(document.cookie))
                    };
                return Object(u.b)(r.a.Fragment, null, Object(u.b)(c.a, null, Object(u.b)("link", {
                    href: "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css",
                    rel: "stylesheet"
                })), Object(u.b)("div", {
                    className: "m-3 md:max-w-md md:mx-auto md:m-20"
                }, Object(u.b)("div", {
                    className: "container bg-gray-200 sm:m-1 shadow-xl rounded overflow-hidden border border-gray-300"
                }, Object(u.b)("div", {
                    style: {
                        paddingBottom: "33.333333333%",
                        background: "url(https://picsum.photos/600/200)",
                        backgroundSize: "cover"
                    }
                }), Object(u.b)("div", {
                    className: "p-5"
                }, Object(u.b)("div", {
                    className: "text-2xl font-medum mb-2 border-b border-gray-400 pb-2"
                }, "Funkcje beta", Object(u.b)("a", {
                    href: "/",
                    style: {
                        backgroundColor: "#ff7900"
                    },
                    className: "float-right inline-block bg-orange-400 rounded-full px-3 py-1 text-xs font-semibold text-white uppercase"
                }, "Strona g\u0142\xf3wna")), b.map((function(e) {
                    return s[e] ? Object(u.b)(d, {
                        key: e,
                        name: e,
                        isChecked: !!o[e],
                        onToggleClick: f
                    }) : null
                })), Object(u.b)("div", {
                    className: "pb-3"
                }, Object(u.b)("button", {
                    onClick: m,
                    type: "button",
                    className: "inline-block w-full bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-3 text-xs font-semibold text-white uppercase"
                }, "zresetuj do ustawie\u0144 pocz\u0105tkowych"))), Object(u.b)("hr", null))))
            };
            var d = function(e) {
                var t = e.name,
                    n = e.isChecked,
                    a = e.onToggleClick,
                    o = r.a.useCallback((function() {
                        n ? function(e) {
                            var t = new Date;
                            t.setDate(t.getDate() + 365), document.cookie = "opl_feat_".concat(e, "=0; expires=").concat(t.toUTCString(), "; path=/")
                        }(t) : function(e) {
                            var t = new Date;
                            t.setDate(t.getDate() + 365), document.cookie = "opl_feat_".concat(e, "=1; expires=").concat(t.toUTCString(), "; path=/")
                        }(t), a()
                    }), [n, t, a]);
                return Object(u.b)("div", {
                    className: "px-5 py-3 bg-white rounded mb-5"
                }, Object(u.b)("div", {
                    className: "pb-2 flex"
                }, Object(u.b)("div", {
                    className: "flex-1 font-mono capitalize text-sm font-bold"
                }, t), Object(u.b)("div", {
                    className: "inline-flex items-center"
                }, Object(u.b)("label", {
                    className: "inline-flex items-center"
                }, Object(u.b)("span", {
                    className: "cursor-pointer font-bold text-xs uppercase text-".concat(n ? "green" : "red", "-600 mr-1")
                }, Object(u.b)("span", {
                    role: "button",
                    className: "inline-block bg-".concat(n ? "green" : "red", "-600 rounded-full px-3 py-1 text-xs font-semibold text-white"),
                    onClick: o
                }, n ? "ON" : "OFF"))))), Object(u.b)("p", {
                    className: "text-sm text-gray-800"
                }, s[t]))
            }
        },
        "6mhm": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/pwa/flags", function() {
                return n("59+1")
            }])
        },
        Q1tT: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return b
            })), n.d(t, "a", (function() {
                return f
            })), n.d(t, "c", (function() {
                return w
            }));
            var a = n("cxan"),
                o = n("HbGN"),
                r = n("ERkP"),
                i = n.n(r),
                c = n("0D0S"),
                l = n.n(c),
                u = function(e, t) {
                    if (function(e, t) {
                            try {
                                return new RegExp("opl_feat_".concat(t)).test(e)
                            } catch (n) {
                                return !1
                            }
                        }(e, t)) return e.split("".concat(t, "="))[1].split(";")[0]
                },
                s = function(e, t, n) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        o = l()();
                    switch (u(e, t)) {
                        case "0":
                            return !1;
                        case "1":
                            return !0;
                        default:
                            return o && n ? n(o.publicRuntimeConfig.OMNIFRONTEND_APP_ENV) : a
                    }
                },
                d = n("l1C2"),
                b = (i.a.createElement, function(e) {
                    return {
                        corazoneSkipRedirect: s(e, "corazoneSkipRedirect"),
                        minicartEditMode: s(e, "minicartEditMode"),
                        suflerTransactions: s(e, "suflerTransactions", (function(e) {
                            return "PROD" !== e
                        })),
                        negateMaintenance: s(e, "negateMaintenance"),
                        marketSelection: s(e, "marketSelection"),
                        redirectVoiceOnB2B: s(e, "redirectVoiceOnB2B"),
                        loveCMB: s(e, "loveCMB", (function() {
                            return !0
                        })),
                        configuratorInFIX: s(e, "configuratorInFIX", (function() {
                            return !1
                        })),
                        skipRedirectUrl: s(e, "skipRedirectUrl"),
                        enableCBSRedirectForWarsaw: s(e, "enableCBSRedirectForWarsaw", (function() {
                            return !0
                        })),
                        suflerSummaryB2B: s(e, "suflerSummaryB2B", (function() {
                            return !0
                        })),
                        additionalPackages: s(e, "additionalPackages", (function() {
                            return !0
                        })),
                        offline: s(e, "offline"),
                        disableShame: s(e, "disableShame"),
                        webUpsell: s(e, "webUpsell"),
                        loggedCustomerPath: s(e, "loggedCustomerPath", (function(e) {
                            return "PROD" !== e
                        }))
                    }
                }),
                m = i.a.createContext(b("")),
                f = function(e) {
                    var t = e.featuresMap,
                        n = Object(o.a)(e, ["featuresMap"]);
                    return Object(d.b)(m.Provider, Object(a.a)({
                        value: t
                    }, n))
                },
                w = function() {
                    var e = i.a.useContext(m);
                    return e
                }
        }
    },
    [
        ["6mhm", 1, 2, 0, 3]
    ]
]);
//# sourceMappingURL=flags.js.map