(window.omniJsonp = window.omniJsonp || []).push([
    [39], {
        "+7ni": function(e, t, _) {
            "use strict";
            _.d(t, "a", (function() {
                return f
            }));
            var n = _("zjfJ"),
                r = _("5IAQ"),
                o = _("zygG"),
                a = _("ERkP"),
                i = _.n(a),
                c = _("Kq2c"),
                s = _("Co0+"),
                u = _("obcW"),
                l = _("tHt9"),
                p = _("l1C2");
            i.a.createElement;
            var d = {
                    name: "6xix1i",
                    styles: "font-size:16px;"
                },
                E = {
                    name: "12a91mx",
                    styles: "margin:6px 0 0 0;font-size:16px;"
                },
                f = i.a.memo((function() {
                    var e = Object(c.useTheme)(),
                        t = e.bp,
                        _ = e.colors,
                        a = e.selectors,
                        f = e.zIndex,
                        m = i.a.useState(!1),
                        O = Object(o.a)(m, 2),
                        P = O[0],
                        b = O[1];
                    i.a.useEffect((function() {
                        var e = new RegExp("".concat("ALLOW_COOKIES", "=").concat("cookiesaccepted")).test(document.cookie),
                            t = setTimeout((function() {
                                requestAnimationFrame((function() {
                                    b(!e)
                                }))
                            }), 3e3);
                        return function() {
                            return clearTimeout(t)
                        }
                    }), []);
                    var M = i.a.useCallback((function() {
                            var e = new Date;
                            e.setTime(e.getTime() + 31536e7), document.cookie = "".concat("ALLOW_COOKIES", "=").concat("cookiesaccepted", ";expires=").concat(e.toUTCString(), ";"), b(!1)
                        }), [31536e7]),
                        D = Object(u.useTransition)(P, {
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
                    return Object(p.b)(l.a, null, D((function(e, o) {
                        var i;
                        return !1 === o ? null : Object(p.b)(u.animated.div, {
                            css: Object(r.a)(Object(n.a)({
                                position: "fixed",
                                zIndex: f.LAYER_5,
                                backgroundColor: _.WHITE,
                                bottom: 10,
                                width: "calc(100% - 40px)",
                                maxWidth: 1240,
                                borderRadius: 4,
                                border: "1px solid ".concat(_.ASH),
                                display: "flex",
                                justifyContent: "space-between",
                                padding: 15
                            }, t.FROM_DESKTOP, {
                                alignItems: "center"
                            }), ""),
                            style: e
                        }, Object(p.b)(s.a, {
                            width: 22,
                            height: 22,
                            color: _.INFO,
                            css: Object(r.a)(Object(n.a)({
                                flexShrink: 0
                            }, t.FROM_TABLET, {
                                width: 33,
                                height: 33
                            }), "")
                        }), Object(p.b)("div", {
                            css: Object(r.a)(Object(n.a)({
                                margin: "0 15px"
                            }, t.FROM_DESKTOP, {
                                display: "flex",
                                alignItems: "center",
                                marginRight: 50
                            }), "")
                        }, Object(p.b)("div", null, Object(p.b)("strong", {
                            css: d
                        }, "Informacja o cookies"), Object(p.b)("p", {
                            css: E
                        }, "Na naszej stronie stosujemy pliki cookies. Korzystanie z orange.pl bez zmiany ustawie\u0144 przegl\u0105darki oznacza, \u017ce pliki cookies b\u0119d\u0105 zamieszczane na Twoim urz\u0105dzeniu.")), Object(p.b)(c.ButtonLink, {
                            variant: "SECONDARY_BLACK_OUTLINE",
                            href: "/view/cookies",
                            target: "_blank",
                            title: "Otwarcie w nowej karcie: informacje o cookies",
                            css: Object(r.a)((i = {
                                width: "100%",
                                marginTop: 15,
                                flexShrink: 0
                            }, Object(n.a)(i, t.FROM_TABLET, {
                                width: 220
                            }), Object(n.a)(i, t.FROM_DESKTOP, {
                                margin: "0 0 0 50px"
                            }), i), "")
                        }, "Wi\u0119cej informacji")), Object(p.b)(c.IconButton, {
                            iconName: "close-slim",
                            title: "Zamknij informacj\u0119 o cookies",
                            onClick: M,
                            css: Object(r.a)(Object(n.a)({
                                flexShrink: 0,
                                alignSelf: "flex-start"
                            }, t.FROM_TABLET, {
                                svg: Object(n.a)({
                                    width: 20,
                                    height: 20,
                                    transition: "color .15s"
                                }, a.ON_FOCUS_OR_HOVER, {
                                    color: _.ORANGE_DARK
                                })
                            }), "")
                        }))
                    })))
                }))
        },
        1: function(e, t, _) {
            _("ODB1"), e.exports = _("7xIC")
        },
        "3kVu": function(e, t, _) {
            e.exports = _("iQU9")
        },
        BqJQ: function(e, t, _) {
            var n, r;
            void 0 === (r = "function" === typeof(n = function() {
                var e = {
                        version: "0.2.0"
                    },
                    t = e.settings = {
                        minimum: .08,
                        easing: "ease",
                        positionUsing: "",
                        speed: 200,
                        trickle: !0,
                        trickleRate: .02,
                        trickleSpeed: 800,
                        showSpinner: !0,
                        barSelector: '[role="bar"]',
                        spinnerSelector: '[role="spinner"]',
                        parent: "body",
                        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                    };

                function _(e, t, _) {
                    return e < t ? t : e > _ ? _ : e
                }

                function n(e) {
                    return 100 * (-1 + e)
                }
                e.configure = function(e) {
                        var _, n;
                        for (_ in e) void 0 !== (n = e[_]) && e.hasOwnProperty(_) && (t[_] = n);
                        return this
                    }, e.status = null, e.set = function(a) {
                        var i = e.isStarted();
                        a = _(a, t.minimum, 1), e.status = 1 === a ? null : a;
                        var c = e.render(!i),
                            s = c.querySelector(t.barSelector),
                            u = t.speed,
                            l = t.easing;
                        return c.offsetWidth, r((function(_) {
                            "" === t.positionUsing && (t.positionUsing = e.getPositioningCSS()), o(s, function(e, _, r) {
                                var o;
                                return (o = "translate3d" === t.positionUsing ? {
                                    transform: "translate3d(" + n(e) + "%,0,0)"
                                } : "translate" === t.positionUsing ? {
                                    transform: "translate(" + n(e) + "%,0)"
                                } : {
                                    "margin-left": n(e) + "%"
                                }).transition = "all " + _ + "ms " + r, o
                            }(a, u, l)), 1 === a ? (o(c, {
                                transition: "none",
                                opacity: 1
                            }), c.offsetWidth, setTimeout((function() {
                                o(c, {
                                    transition: "all " + u + "ms linear",
                                    opacity: 0
                                }), setTimeout((function() {
                                    e.remove(), _()
                                }), u)
                            }), u)) : setTimeout(_, u)
                        })), this
                    }, e.isStarted = function() {
                        return "number" === typeof e.status
                    }, e.start = function() {
                        e.status || e.set(0);
                        var _ = function() {
                            setTimeout((function() {
                                e.status && (e.trickle(), _())
                            }), t.trickleSpeed)
                        };
                        return t.trickle && _(), this
                    }, e.done = function(t) {
                        return t || e.status ? e.inc(.3 + .5 * Math.random()).set(1) : this
                    }, e.inc = function(t) {
                        var n = e.status;
                        return n ? ("number" !== typeof t && (t = (1 - n) * _(Math.random() * n, .1, .95)), n = _(n + t, 0, .994), e.set(n)) : e.start()
                    }, e.trickle = function() {
                        return e.inc(Math.random() * t.trickleRate)
                    },
                    function() {
                        var t = 0,
                            _ = 0;
                        e.promise = function(n) {
                            return n && "resolved" !== n.state() ? (0 === _ && e.start(), t++, _++, n.always((function() {
                                0 === --_ ? (t = 0, e.done()) : e.set((t - _) / t)
                            })), this) : this
                        }
                    }(), e.render = function(_) {
                        if (e.isRendered()) return document.getElementById("nprogress");
                        i(document.documentElement, "nprogress-busy");
                        var r = document.createElement("div");
                        r.id = "nprogress", r.innerHTML = t.template;
                        var a, c = r.querySelector(t.barSelector),
                            s = _ ? "-100" : n(e.status || 0),
                            l = document.querySelector(t.parent);
                        return o(c, {
                            transition: "all 0 linear",
                            transform: "translate3d(" + s + "%,0,0)"
                        }), t.showSpinner || (a = r.querySelector(t.spinnerSelector)) && u(a), l != document.body && i(l, "nprogress-custom-parent"), l.appendChild(r), r
                    }, e.remove = function() {
                        c(document.documentElement, "nprogress-busy"), c(document.querySelector(t.parent), "nprogress-custom-parent");
                        var e = document.getElementById("nprogress");
                        e && u(e)
                    }, e.isRendered = function() {
                        return !!document.getElementById("nprogress")
                    }, e.getPositioningCSS = function() {
                        var e = document.body.style,
                            t = "WebkitTransform" in e ? "Webkit" : "MozTransform" in e ? "Moz" : "msTransform" in e ? "ms" : "OTransform" in e ? "O" : "";
                        return t + "Perspective" in e ? "translate3d" : t + "Transform" in e ? "translate" : "margin"
                    };
                var r = function() {
                        var e = [];

                        function t() {
                            var _ = e.shift();
                            _ && _(t)
                        }
                        return function(_) {
                            e.push(_), 1 == e.length && t()
                        }
                    }(),
                    o = function() {
                        var e = ["Webkit", "O", "Moz", "ms"],
                            t = {};

                        function _(_) {
                            return _ = _.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(e, t) {
                                return t.toUpperCase()
                            })), t[_] || (t[_] = function(t) {
                                var _ = document.body.style;
                                if (t in _) return t;
                                for (var n, r = e.length, o = t.charAt(0).toUpperCase() + t.slice(1); r--;)
                                    if ((n = e[r] + o) in _) return n;
                                return t
                            }(_))
                        }

                        function n(e, t, n) {
                            t = _(t), e.style[t] = n
                        }
                        return function(e, t) {
                            var _, r, o = arguments;
                            if (2 == o.length)
                                for (_ in t) void 0 !== (r = t[_]) && t.hasOwnProperty(_) && n(e, _, r);
                            else n(e, o[1], o[2])
                        }
                    }();

                function a(e, t) {
                    return ("string" == typeof e ? e : s(e)).indexOf(" " + t + " ") >= 0
                }

                function i(e, t) {
                    var _ = s(e),
                        n = _ + t;
                    a(_, t) || (e.className = n.substring(1))
                }

                function c(e, t) {
                    var _, n = s(e);
                    a(e, t) && (_ = n.replace(" " + t + " ", " "), e.className = _.substring(1, _.length - 1))
                }

                function s(e) {
                    return (" " + (e.className || "") + " ").replace(/\s+/gi, " ")
                }

                function u(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
                return e
            }) ? n.call(t, _, t, e) : n) || (e.exports = r)
        },
        HaU7: function(e, t, _) {
            "use strict";
            var n = _("zQIG"),
                r = _("8mBC"),
                o = _("I/kN"),
                a = _("cMav"),
                i = _("pSQP"),
                c = _("IebI");

            function s() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var u = _("Y3ZS");
            t.__esModule = !0, t.Container = function(e) {
                0;
                return e.children
            }, t.createUrl = f, t.default = void 0;
            var l = u(_("ERkP")),
                p = _("fvxO");

            function d(e) {
                var t, _, n;
                return c.async((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return t = e.Component, _ = e.ctx, r.next = 3, c.awrap((0, p.loadGetInitialProps)(t, _));
                        case 3:
                            return n = r.sent, r.abrupt("return", {
                                pageProps: n
                            });
                        case 5:
                        case "end":
                            return r.stop()
                    }
                }), null, null, null, Promise)
            }
            t.AppInitialProps = p.AppInitialProps;
            var E = function(e) {
                o(c, e);
                var t, _ = (t = c, function() {
                    var e, _ = i(t);
                    if (s()) {
                        var n = i(this).constructor;
                        e = Reflect.construct(_, arguments, n)
                    } else e = _.apply(this, arguments);
                    return a(this, e)
                });

                function c() {
                    return n(this, c), _.apply(this, arguments)
                }
                return r(c, [{
                    key: "componentDidCatch",
                    value: function(e, t) {
                        throw e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.router,
                            _ = e.Component,
                            n = e.pageProps,
                            r = e.__N_SSG,
                            o = e.__N_SSP;
                        return l.default.createElement(_, Object.assign({}, n, r || o ? {} : {
                            url: f(t)
                        }))
                    }
                }]), c
            }(l.default.Component);

            function f(e) {
                var t = e.pathname,
                    _ = e.asPath,
                    n = e.query;
                return {
                    get query() {
                        return n
                    },
                    get pathname() {
                        return t
                    },
                    get asPath() {
                        return _
                    },
                    back: function() {
                        e.back()
                    },
                    push: function(t, _) {
                        return e.push(t, _)
                    },
                    pushTo: function(t, _) {
                        var n = _ ? t : "",
                            r = _ || t;
                        return e.push(n, r)
                    },
                    replace: function(t, _) {
                        return e.replace(t, _)
                    },
                    replaceTo: function(t, _) {
                        var n = _ ? t : "",
                            r = _ || t;
                        return e.replace(n, r)
                    }
                }
            }
            t.default = E, E.origGetInitialProps = d, E.getInitialProps = d
        },
        "Khd+": function(e, t, _) {
            e.exports = _("HaU7")
        },
        ODB1: function(e, t, _) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return _("cha2")
            }])
        },
        "ON/4": function(e, t, _) {
            "use strict";
            _.d(t, "a", (function() {
                return a
            }));
            var n = _("zygG"),
                r = _("ERkP"),
                o = _.n(r),
                a = function() {
                    var e = o.a.useState("undefined" === typeof navigator || "boolean" !== typeof navigator.onLine || navigator.onLine),
                        t = Object(n.a)(e, 2),
                        _ = t[0],
                        r = t[1],
                        a = function() {
                            return r(!0)
                        },
                        i = function() {
                            return r(!1)
                        };
                    return o.a.useEffect((function() {
                        return window.addEventListener("online", a), window.addEventListener("offline", i),
                            function() {
                                window.removeEventListener("online", a), window.removeEventListener("offline", i)
                            }
                    }), []), _
                }
        },
        Q1tT: function(e, t, _) {
            "use strict";
            _.d(t, "b", (function() {
                return p
            })), _.d(t, "a", (function() {
                return E
            })), _.d(t, "c", (function() {
                return f
            }));
            var n = _("cxan"),
                r = _("HbGN"),
                o = _("ERkP"),
                a = _.n(o),
                i = _("0D0S"),
                c = _.n(i),
                s = function(e, t) {
                    if (function(e, t) {
                            try {
                                return new RegExp("opl_feat_".concat(t)).test(e)
                            } catch (_) {
                                return !1
                            }
                        }(e, t)) return e.split("".concat(t, "="))[1].split(";")[0]
                },
                u = function(e, t, _) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = c()();
                    switch (s(e, t)) {
                        case "0":
                            return !1;
                        case "1":
                            return !0;
                        default:
                            return r && _ ? _(r.publicRuntimeConfig.OMNIFRONTEND_APP_ENV) : n
                    }
                },
                l = _("l1C2"),
                p = (a.a.createElement, function(e) {
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
                d = a.a.createContext(p("")),
                E = function(e) {
                    var t = e.featuresMap,
                        _ = Object(r.a)(e, ["featuresMap"]);
                    return Object(l.b)(d.Provider, Object(n.a)({
                        value: t
                    }, _))
                },
                f = function() {
                    var e = a.a.useContext(d);
                    return e
                }
        },
        cha2: function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cxan"),
                _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zygG"),
                _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9fIP"),
                _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pWxA"),
                _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MMYH"),
                _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8K1b"),
                _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("K/z8"),
                _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("sRHE"),
                _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zjfJ"),
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("VtSi"),
                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9__),
                react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ERkP"),
                react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),
                next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("AU4o"),
                next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__),
                next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("Khd+"),
                next_app__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__),
                next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("ysqo"),
                next_head__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__),
                next_error__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("3kVu"),
                next_error__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_14__),
                _opl_api_portal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("/u09"),
                _opl_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("Kq2c"),
                _opl_utils_cookies_parseSetCookieHeaders__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("oNHT"),
                _opl_utils_cookies_getCookieValue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("yy35"),
                _components_AppContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("y6sE"),
                _components_Header_HeaderContextProvider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("sGZ7"),
                _components_SidebarNavigation__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("lPe2"),
                _components_Header_Notification_NotificationContextProvider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("GkdP"),
                _components_Footer_CookiesInfo__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("+7ni"),
                _components_PageTransitionProgress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("mNBW"),
                _components_FeaturesContext__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("Q1tT"),
                _dataLayer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("LsVC"),
                _components_OfflineSupport__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("oW+B"),
                _sentry__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("aoUj"),
                _emotion_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("l1C2"),
                __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

            function _createSuper(e) {
                return function() {
                    var t, _ = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(e);
                    if (_isNativeReflectConstruct()) {
                        var n = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(this).constructor;
                        t = Reflect.construct(_, arguments, n)
                    } else t = _.apply(this, arguments);
                    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.a)(this, t)
                }
            }

            function _isNativeReflectConstruct() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var MarketSelector = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()((function() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.awrap(__webpack_require__.e(33).then(__webpack_require__.bind(null, "F+2Q")));
                            case 2:
                                return e.abrupt("return", e.sent.MarketSelector);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["F+2Q"]
                        },
                        modules: ["../components/MarketSelector"]
                    }
                }),
                hasToken = function(e) {
                    return /SSOID_SECURE|OCID/.test(e)
                },
                isInsideApp = function(e) {
                    return /OPL_EMBEDDED_MODE=/.test(e)
                },
                getPageContext = function(e) {
                    return e.header && e.header.data && e.header.data.contextType ? e.header.data.contextType : "B2C"
                },
                getCookiesFromRequest = function(e) {
                    return "".concat(e.headers.cookie, ";").concat(e.headers["x-opl-features"])
                },
                MyApp = function(_App) {
                    Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(MyApp, _App);
                    var _super = _createSuper(MyApp);

                    function MyApp(e) {
                        var t;
                        return Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this, MyApp), t = _super.call(this, e), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__.a)(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t), "isMobile", !0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__.a)(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t), "hasTouch", !0), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__.a)(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t), "handleTabClick", (function(e) {
                            "Tab" === e.key && (document.body.classList.add("showFocus"), window.removeEventListener("keydown", t.handleTabClick), window.addEventListener("mousemove", t.handleMouseMove))
                        })), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__.a)(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t), "handleMouseMove", (function() {
                            document.body.classList.remove("showFocus"), window.removeEventListener("mousemove", t.handleMouseMove), window.addEventListener("keydown", t.handleTabClick)
                        })), t.isMobile = e.isMobile, t.hasTouch = e.hasTouch, t
                    }
                    return Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.a)(MyApp, null, [{
                        key: "getInitialProps",
                        value: function getInitialProps(_ref) {
                            var Component, ctx, cookies, features, marketCookie, showMarketSelection, isMobile, hasTouch, MobileDetect, device, isDetectedMobile, isDetectedPhone, isDetectedTablet, isUserLogged, isAppEmbedded, pageProps, maintenanceData, supportedPrefixes, accountCode, accountId, appSelectedAccount, _await$Promise$all, _await$Promise$all2, cookieSetters, formattedCookies, token;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.async((function getInitialProps$(_context2) {
                                for (;;) switch (_context2.prev = _context2.next) {
                                    case 0:
                                        if (Component = _ref.Component, ctx = _ref.ctx, cookies = ctx.req ? getCookiesFromRequest(ctx.req) : document.cookie, features = Object(_components_FeaturesContext__WEBPACK_IMPORTED_MODULE_25__.b)(cookies || ""), marketCookie = Object(_opl_utils_cookies_getCookieValue__WEBPACK_IMPORTED_MODULE_18__.a)("opl_market", cookies || ""), features.marketSelection && "/" === ctx.asPath && "B2B_SOHO" === marketCookie && ctx.res && ctx.res.writeHead(302, {
                                                Location: "/male-srednie-firmy"
                                            }).end(), showMarketSelection = !!features.marketSelection && "/" === ctx.asPath && !marketCookie, isMobile = !1, hasTouch = !1, ctx.req && (MobileDetect = eval('require("mobile-detect")'), device = new MobileDetect(ctx.req.headers["user-agent"]), isDetectedMobile = !!device.mobile(), isDetectedPhone = !!device.phone(), isDetectedTablet = !!device.tablet(), isMobile = isDetectedPhone || isDetectedMobile && !isDetectedTablet, hasTouch = isDetectedMobile), isUserLogged = !!cookies && hasToken(cookies), isAppEmbedded = !!cookies && isInsideApp(cookies), pageProps = {
                                                content: [],
                                                notifications: [],
                                                status: null,
                                                params: []
                                            }, maintenanceData = {
                                                maintenance: !1
                                            }, supportedPrefixes = [], accountCode = Object(_opl_utils_cookies_getCookieValue__WEBPACK_IMPORTED_MODULE_18__.a)("accountCode", cookies || ""), accountId = Object(_opl_utils_cookies_getCookieValue__WEBPACK_IMPORTED_MODULE_18__.a)("accountId", cookies || ""), appSelectedAccount = accountId && accountCode && {
                                                id: accountId,
                                                code: accountCode
                                            } || void 0, _context2.prev = 17, !Component.getInitialProps) {
                                            _context2.next = 26;
                                            break
                                        }
                                        return _context2.next = 21, _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default.a.awrap(Promise.all([Component.getInitialProps(ctx), Object(_opl_api_portal__WEBPACK_IMPORTED_MODULE_15__.a)({
                                            req: ctx.req,
                                            res: ctx.res
                                        }).catch((function(e) {
                                            return _sentry__WEBPACK_IMPORTED_MODULE_28__.a.withScope((function(t) {
                                                t.setTag("where", "_app.getInitialProps.fetchMaintenance"), _sentry__WEBPACK_IMPORTED_MODULE_28__.a.captureException(e)
                                            })), maintenanceData
                                        })), Object(_opl_api_portal__WEBPACK_IMPORTED_MODULE_15__.c)({
                                            req: ctx.req,
                                            res: ctx.res
                                        }).catch((function(e) {
                                            return _sentry__WEBPACK_IMPORTED_MODULE_28__.a.withScope((function(t) {
                                                t.setTag("where", "_app.getInitialProps.fetchSupportedPrefixes"), _sentry__WEBPACK_IMPORTED_MODULE_28__.a.captureException(e)
                                            })), supportedPrefixes
                                        }))]));
                                    case 21:
                                        _await$Promise$all = _context2.sent, _await$Promise$all2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_await$Promise$all, 3), pageProps = _await$Promise$all2[0], maintenanceData = _await$Promise$all2[1], supportedPrefixes = _await$Promise$all2[2];
                                    case 26:
                                        return cookieSetters = ctx.res && ctx.res.getHeader("set-cookie"), Array.isArray(cookieSetters) && (formattedCookies = Object(_opl_utils_cookies_parseSetCookieHeaders__WEBPACK_IMPORTED_MODULE_17__.a)(cookieSetters), token = formattedCookies.find((function(e) {
                                            return hasToken(e.name)
                                        })), token && token.expires && (isUserLogged = new Date(token.expires) > new Date)), _context2.abrupt("return", {
                                            pageProps: pageProps,
                                            isMobile: isMobile,
                                            hasTouch: hasTouch,
                                            isUserLogged: isUserLogged,
                                            isAppEmbedded: isAppEmbedded,
                                            isMaintenance: features.negateMaintenance ? !maintenanceData.maintenance : maintenanceData.maintenance,
                                            supportedPrefixes: supportedPrefixes,
                                            features: features,
                                            showMarketSelection: showMarketSelection,
                                            appSelectedAccount: appSelectedAccount
                                        });
                                    case 31:
                                        return _context2.prev = 31, _context2.t0 = _context2.catch(17), _sentry__WEBPACK_IMPORTED_MODULE_28__.a.withScope((function(e) {
                                            e.setTag("where", "_app.getInitialProps.catch"), _sentry__WEBPACK_IMPORTED_MODULE_28__.a.captureException(_context2.t0)
                                        })), ctx.res && (ctx.res.statusCode = _context2.t0.status || 500), _context2.abrupt("return", {
                                            error: {
                                                status: _context2.t0.status,
                                                code: _context2.t0.code
                                            },
                                            isMobile: isMobile,
                                            hasTouch: hasTouch,
                                            isUserLogged: isUserLogged,
                                            isAppEmbedded: isAppEmbedded,
                                            pageProps: pageProps,
                                            isMaintenance: features.negateMaintenance ? !maintenanceData.maintenance : maintenanceData.maintenance,
                                            features: features,
                                            supportedPrefixes: supportedPrefixes,
                                            showMarketSelection: showMarketSelection,
                                            appSelectedAccount: appSelectedAccount
                                        });
                                    case 37:
                                    case "end":
                                        return _context2.stop()
                                }
                            }), null, null, [
                                [17, 31]
                            ], Promise)
                        }
                    }]), Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.a)(MyApp, [{
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("keydown", this.handleTabClick), this.hasTouch || document.body.classList.add("showHover");
                            try {
                                window.OPLWCParent.attachButtons()
                            } catch (e) {}
                            this.props.features.marketSelection || Object(_dataLayer__WEBPACK_IMPORTED_MODULE_26__.i)({
                                event: "B2B_rozbiegowka_test_A"
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("keydown", this.handleTabClick), window.removeEventListener("mousemove", this.handleMouseMove)
                        }
                    }, {
                        key: "componentDidCatch",
                        value: function(e, t) {
                            _sentry__WEBPACK_IMPORTED_MODULE_28__.a.withScope((function(_) {
                                _.setExtras(t), _.setTag("where", "_app.getInitialProps.componentDidCatch"), _sentry__WEBPACK_IMPORTED_MODULE_28__.a.captureException(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.Component,
                                _ = e.pageProps,
                                n = e.isUserLogged,
                                r = e.error,
                                o = e.isAppEmbedded,
                                a = e.features,
                                i = e.supportedPrefixes,
                                c = e.showMarketSelection,
                                s = e.appSelectedAccount;
                            return r ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(next_error__WEBPACK_IMPORTED_MODULE_14___default.a, {
                                title: "Wyst\u0105pi\u0142 b\u0142\u0105d",
                                statusCode: r.status || r.code || 500
                            }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)("meta", {
                                name: "viewport",
                                content: "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
                            }), Array.isArray(_.head) && _.head.map((function(e, t) {
                                var _ = e.name,
                                    n = e.type,
                                    r = e.value;
                                return "meta" === n ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)("meta", {
                                    key: t,
                                    name: _,
                                    content: r
                                }) : "link" === n ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)("link", {
                                    key: t,
                                    rel: _,
                                    href: r
                                }) : "title" === n ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)("title", {
                                    key: t
                                }, r) : null
                            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_opl_ui__WEBPACK_IMPORTED_MODULE_16__.Theme, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_components_PageTransitionProgress__WEBPACK_IMPORTED_MODULE_24__.a, null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_components_AppContext__WEBPACK_IMPORTED_MODULE_19__.a, {
                                isMobile: this.isMobile,
                                hasTouch: this.hasTouch,
                                isUserLogged: n,
                                supportedPrefixes: i,
                                market: getPageContext(_),
                                isAppEmbedded: o,
                                isMaintenance: this.props.isMaintenance,
                                appSelectedAccount: s
                            }, _.header && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(MarketSelector, {
                                isVisible: c,
                                logo: _.header.data.logo
                            }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_components_FeaturesContext__WEBPACK_IMPORTED_MODULE_25__.a, {
                                featuresMap: a
                            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_components_Header_HeaderContextProvider__WEBPACK_IMPORTED_MODULE_20__.b, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_components_SidebarNavigation__WEBPACK_IMPORTED_MODULE_21__.c, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_components_Header_Notification_NotificationContextProvider__WEBPACK_IMPORTED_MODULE_22__.b, {
                                notificationsList: _.notifications
                            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_components_OfflineSupport__WEBPACK_IMPORTED_MODULE_27__.a, null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(t, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.a)({}, _, o ? {
                                header: void 0,
                                footer: void 0
                            } : {})), !o && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_29__.b)(_components_Footer_CookiesInfo__WEBPACK_IMPORTED_MODULE_23__.a, null))))))))
                        }
                    }]), MyApp
                }(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);
            __webpack_exports__.default = MyApp
        },
        iQU9: function(e, t, _) {
            "use strict";
            var n = _("zQIG"),
                r = _("8mBC"),
                o = _("I/kN"),
                a = _("cMav"),
                i = _("pSQP");

            function c() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }
            var s = _("Y3ZS");
            t.__esModule = !0, t.default = void 0;
            var u = s(_("ERkP")),
                l = s(_("ysqo")),
                p = {
                    400: "Bad Request",
                    404: "This page could not be found",
                    405: "Method Not Allowed",
                    500: "Internal Server Error"
                };

            function d(e) {
                var t = e.res,
                    _ = e.err;
                return {
                    statusCode: t && t.statusCode ? t.statusCode : _ ? _.statusCode : 404
                }
            }
            var E = function(e) {
                o(s, e);
                var t, _ = (t = s, function() {
                    var e, _ = i(t);
                    if (c()) {
                        var n = i(this).constructor;
                        e = Reflect.construct(_, arguments, n)
                    } else e = _.apply(this, arguments);
                    return a(this, e)
                });

                function s() {
                    return n(this, s), _.apply(this, arguments)
                }
                return r(s, [{
                    key: "render",
                    value: function() {
                        var e = this.props.statusCode,
                            t = this.props.title || p[e] || "An unexpected error has occurred";
                        return u.default.createElement("div", {
                            style: f.error
                        }, u.default.createElement(l.default, null, u.default.createElement("title", null, e, ": ", t)), u.default.createElement("div", null, u.default.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: "body { margin: 0 }"
                            }
                        }), e ? u.default.createElement("h1", {
                            style: f.h1
                        }, e) : null, u.default.createElement("div", {
                            style: f.desc
                        }, u.default.createElement("h2", {
                            style: f.h2
                        }, t, "."))))
                    }
                }]), s
            }(u.default.Component);
            t.default = E, E.displayName = "ErrorPage", E.getInitialProps = d, E.origGetInitialProps = d;
            var f = {
                error: {
                    color: "#000",
                    background: "#fff",
                    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                    height: "100vh",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                },
                desc: {
                    display: "inline-block",
                    textAlign: "left",
                    lineHeight: "49px",
                    height: "49px",
                    verticalAlign: "middle"
                },
                h1: {
                    display: "inline-block",
                    borderRight: "1px solid rgba(0, 0, 0,.3)",
                    margin: 0,
                    marginRight: "20px",
                    padding: "10px 23px 10px 0",
                    fontSize: "24px",
                    fontWeight: 500,
                    verticalAlign: "top"
                },
                h2: {
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0
                }
            }
        },
        mNBW: function(e, t, _) {
            "use strict";
            _.d(t, "a", (function() {
                return l
            }));
            var n = _("ERkP"),
                r = _.n(n),
                o = _("BqJQ"),
                a = _.n(o),
                i = _("7xIC"),
                c = _.n(i),
                s = _("l1C2"),
                u = _("Kq2c");
            r.a.createElement;
            a.a.configure({
                showSpinner: !1
            }), c.a.events.on("routeChangeStart", (function() {
                return a.a.start()
            })), c.a.events.on("routeChangeComplete", (function() {
                return a.a.done()
            })), c.a.events.on("routeChangeError", (function() {
                return a.a.done()
            }));
            var l = r.a.memo((function() {
                var e = Object(u.useTheme)().colors;
                return Object(s.b)(s.a, {
                    styles: "\n        #nprogress {\n          pointer-events: none;\n        }\n\n        #nprogress .bar {\n          background: ".concat(e.ORANGE_DARK, ";\n\n          position: fixed;\n          z-index: 1031;\n          top: 0;\n          left: 0;\n\n          width: 100%;\n          height: 2px;\n        }\n\n        #nprogress .peg {\n          display: block;\n          position: absolute;\n          right: 0px;\n          width: 100px;\n          height: 100%;\n          box-shadow: 0 0 10px #29d, 0 0 5px #29d;\n          opacity: 1.0;\n\n          -webkit-transform: rotate(3deg) translate(0px, -4px);\n              -ms-transform: rotate(3deg) translate(0px, -4px);\n                  transform: rotate(3deg) translate(0px, -4px);\n        }\n      ")
                })
            }));
            l.displayName = "PageTransitionProgress"
        },
        oNHT: function(e, t, _) {
            "use strict";
            _.d(t, "a", (function() {
                return a
            }));
            var n = _("zygG"),
                r = ["Domain", "Expires", "Path", "HttpOnly", "Secure", "Max-Age", "SameSite"],
                o = function(e) {
                    return e.split(";").reduce((function(e, t) {
                        var _ = t.trim().split("="),
                            o = Object(n.a)(_, 2),
                            a = o[0],
                            i = o[1],
                            c = void 0 === i ? "" : i;
                        return -1 !== r.indexOf(a) ? e[a[0].toLowerCase() + a.slice(1).replace("-", "")] = c : (e.name = a, e.value = c), e
                    }), {})
                },
                a = function(e) {
                    return e.map(o)
                }
        },
        "oW+B": function(e, t, _) {
            "use strict";
            _.d(t, "a", (function() {
                return p
            }));
            var n = _("VtSi"),
                r = _.n(n),
                o = _("ERkP"),
                a = _.n(o),
                i = _("AU4o"),
                c = _.n(i),
                s = _("ON/4"),
                u = _("l1C2"),
                l = (a.a.createElement, c()((function() {
                    return r.a.async((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, r.a.awrap(Promise.all([_.e(12), _.e(35)]).then(_.bind(null, "hrpo")));
                            case 2:
                                return e.abrupt("return", e.sent.Layer);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), null, null, null, Promise)
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["hrpo"]
                        },
                        modules: ["./Layer"]
                    }
                })),
                p = function() {
                    return Object(s.a)() ? null : Object(u.b)(l, null)
                }
        }
    },
    [
        [1, 1, 2, 0, 4, 3, 5, 7]
    ]
]);
//# sourceMappingURL=_app.js.map