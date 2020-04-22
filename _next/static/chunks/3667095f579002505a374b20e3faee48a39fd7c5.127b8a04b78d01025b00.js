(window.omniJsonp = window.omniJsonp || []).push([
    [10], {
        nJ3U: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return z
            }));
            var r = n("zjfJ"),
                c = n("5IAQ"),
                i = n("ERkP"),
                o = n.n(i),
                a = n("I6rk"),
                s = n("Kq2c"),
                u = n("xWEo"),
                l = n("FfDH"),
                b = n("IBuz"),
                d = n("YlAD");

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var p = function() {
                    var e = Object(l.a)({
                            defaultExpanded: !1
                        }),
                        t = e.isExpanded,
                        n = e.bind,
                        c = Object(b.b)().current.context,
                        i = c.details,
                        a = c.selectedCharacteristics,
                        s = c.selectedItemIndex,
                        u = o.a.useMemo((function() {
                            return a && Object(d.d)(a)
                        }), [a]),
                        p = o.a.useMemo((function() {
                            if (i && u) return i.product.items[s].characteristics.reduce((function(e, t) {
                                var n = t.code,
                                    c = t.features,
                                    i = u[n];
                                return i ? (c.forEach((function(t) {
                                    if (i.includes(t.code)) {
                                        var n = null === a || void 0 === a ? void 0 : a.find((function(e) {
                                            return e.id === t.code
                                        }));
                                        e.push(function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? O(Object(n), !0).forEach((function(t) {
                                                    Object(r.a)(e, t, n[t])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                }))
                                            }
                                            return e
                                        }({}, t, {
                                            icon: (null === n || void 0 === n ? void 0 : n.icon) || "device-smartphone-1"
                                        }))
                                    }
                                })), e) : e
                            }), [])
                        }), [i, u, a, s]);
                    return {
                        isExpanded: t,
                        toggle: n.onClick,
                        features: p
                    }
                },
                f = n("l1C2");
            o.a.createElement;
            var j = {
                    name: "qjybbh",
                    styles: "padding:20px 0 10px;"
                },
                m = {
                    name: "1hzdqhm",
                    styles: "display:flex;align-items:center;:not(:last-of-type){margin-bottom:10px;}"
                },
                g = {
                    name: "14ak53m",
                    styles: "margin-right:24px;flex-shrink:0;"
                },
                v = {
                    name: "j7qwjs",
                    styles: "display:flex;flex-direction:column;"
                },
                y = {
                    name: "1kuy7z7",
                    styles: "font-size:14px;"
                },
                h = {
                    name: "1cev0y9",
                    styles: "margin:0;font-size:14px;"
                },
                x = function() {
                    var e = p().features;
                    return e ? Object(f.b)("ul", {
                        css: j
                    }, e.map((function(e, t) {
                        var n, r = e.icon,
                            c = e.featureUnit,
                            i = e.featureValues,
                            o = e.name,
                            a = (null === c || void 0 === c ? void 0 : c.symbol) || (null === c || void 0 === c ? void 0 : c.name) || "";
                        return Object(f.b)("li", {
                            key: t,
                            css: m
                        }, Object(f.b)(u.a, {
                            name: r || "device-smartphone-1",
                            width: 28,
                            height: 28,
                            css: g
                        }), Object(f.b)("div", {
                            css: v
                        }, o && Object(f.b)("strong", {
                            css: y
                        }, o), i && Object(f.b)("p", {
                            css: h
                        }, null === (n = i[0]) || void 0 === n ? void 0 : n.value, "\xa0", a)))
                    }))) : null
                };
            x.displayName = "Attributes";
            o.a.createElement;
            var w = {
                    name: "1qxtz39",
                    styles: "font-size:12px;"
                },
                z = o.a.memo((function(e) {
                    var t, n = e.onToggle,
                        i = Object(a.a)(),
                        u = Object(s.useTheme)(),
                        l = u.bp,
                        b = u.colors,
                        d = p(),
                        O = d.isExpanded,
                        j = d.toggle,
                        m = O ? "Zwi\u0144 szczeg\xf3\u0142y produktu" : "Rozwi\u0144 szczeg\xf3\u0142y produktu",
                        g = o.a.useCallback((function() {
                            j(), n && n(!O)
                        }), [O, n, j]);
                    return i ? Object(f.b)(o.a.Fragment, null, Object(f.b)(s.Separator, null), Object(f.b)(s.Expander, {
                        expanded: O,
                        headerCss: {
                            flexDirection: "row-reverse",
                            justifyContent: "space-between"
                        },
                        title: Object(f.b)("strong", {
                            css: w
                        }, m),
                        onClick: j
                    }, Object(f.b)(x, null)), Object(f.b)(s.Separator, null)) : Object(f.b)("div", {
                        css: Object(c.a)(Object(r.a)({}, l.FROM_DESKTOP, {
                            maxWidth: 400,
                            margin: "0 auto",
                            width: "100%"
                        }), "")
                    }, Object(f.b)(s.SmoothHeightResizer, {
                        css: Object(c.a)((t = {}, Object(r.a)(t, l.FROM_TABLET, {
                            maxHeight: O ? 270 : 0,
                            width: "100%",
                            minHeight: 0
                        }), Object(r.a)(t, l.FROM_DESKTOP, {
                            borderTop: O ? "1px solid ".concat(b.CHROME) : void 0
                        }), t), "")
                    }, Object(f.b)(x, null)), Object(f.b)(s.AButton, {
                        css: Object(c.a)(Object(r.a)({
                            fontSize: 14,
                            marginTop: 20
                        }, l.FROM_DESKTOP, {
                            marginTop: 8
                        }), ""),
                        title: "Zobacz szczeg\xf3\u0142y produktu",
                        onClick: g
                    }, m))
                }))
        }
    }
]);
//# sourceMappingURL=3667095f579002505a374b20e3faee48a39fd7c5.127b8a04b78d01025b00.js.map