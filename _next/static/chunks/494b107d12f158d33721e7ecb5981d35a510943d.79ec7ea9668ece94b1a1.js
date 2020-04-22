(window.omniJsonp = window.omniJsonp || []).push([
    [10], {
        "/G5g": function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return d
            }));
            var c = a("cxan"),
                i = a("5IAQ"),
                n = a("HbGN"),
                o = a("ERkP"),
                r = a("ZsHj"),
                s = a("LTa3"),
                b = a("fQwf"),
                l = a("4OHh"),
                p = a("pMch"),
                j = a("B5/x"),
                u = a("kEwR"),
                O = a("l1C2"),
                d = (o.createElement, function(t) {
                    var e = t.action,
                        a = t.actionsMap,
                        o = t.wrapperCss,
                        d = t.onClick,
                        f = t.disabled,
                        m = Object(n.a)(t, ["action", "actionsMap", "wrapperCss", "onClick", "disabled"]),
                        k = {
                            display: "block",
                            cursor: "pointer"
                        },
                        v = Object(u.c)().show,
                        C = Object(r.a)(e, a, d).onClick,
                        w = function(t) {
                            return f ? void 0 : C(t)
                        };
                    if (Object(j.a)(e)) return Object(O.b)("div", Object(c.a)({
                        role: "button",
                        onClick: function(t) {
                            w(t), !f && v(e.params)
                        },
                        title: e.title,
                        css: Object(i.a)([k, o], "")
                    }, m));
                    if (Object(s.a)(e)) {
                        var h = f ? void 0 : "genesys-contact1";
                        return Object(O.b)("div", Object(c.a)({
                            role: "button",
                            onClick: w,
                            title: e.title,
                            css: Object(i.a)([k, o], "")
                        }, m, {
                            id: h
                        }))
                    }
                    if (Object(b.a)(e) && e.params) {
                        var g = f ? void 0 : "widget-popup-cmb";
                        return Object(O.b)("div", Object(c.a)({
                            role: "button",
                            onClick: w,
                            title: e.title,
                            css: Object(i.a)([k, o], "")
                        }, m, {
                            className: g,
                            "data-queue": e.params.queue || "",
                            "data-opis": e.params.description || "",
                            "data-cmb_profile": e.params.profile || "",
                            "data-personalscenario": e.params.personalScenario || ""
                        }))
                    }
                    return Object(l.a)(e) ? Object(O.b)("div", Object(c.a)({
                        role: "button",
                        title: e.title,
                        onClick: w,
                        css: Object(i.a)([k, o], "")
                    }, m)) : Object(p.a)(e) ? Object(O.b)("a", Object(c.a)({
                        onClick: w,
                        title: e.title,
                        href: e.action,
                        css: Object(i.a)([k, o], "")
                    }, m)) : null
                });
            d.displayName = "ActionWrapper"
        }
    }
]);
//# sourceMappingURL=494b107d12f158d33721e7ecb5981d35a510943d.79ec7ea9668ece94b1a1.js.map