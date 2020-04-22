(window.omniJsonp = window.omniJsonp || []).push([
    [13], {
        "/G5g": function(t, e, a) {
            "use strict";
            a.d(e, "a", (function() {
                return f
            }));
            var c = a("cxan"),
                i = a("5IAQ"),
                n = a("HbGN"),
                o = a("ERkP"),
                r = a.n(o),
                s = a("ZsHj"),
                b = a("LTa3"),
                l = a("fQwf"),
                p = a("4OHh"),
                j = a("pMch"),
                u = a("B5/x"),
                O = a("kEwR"),
                d = a("l1C2"),
                f = (r.a.createElement, function(t) {
                    var e = t.action,
                        a = t.actionsMap,
                        o = t.wrapperCss,
                        r = t.onClick,
                        f = t.disabled,
                        m = Object(n.a)(t, ["action", "actionsMap", "wrapperCss", "onClick", "disabled"]),
                        k = {
                            display: "block",
                            cursor: "pointer"
                        },
                        v = Object(O.c)().show,
                        C = Object(s.a)(e, a, r).onClick,
                        w = function(t) {
                            return f ? void 0 : C(t)
                        };
                    if (Object(u.a)(e)) return Object(d.b)("div", Object(c.a)({
                        role: "button",
                        onClick: function(t) {
                            w(t), !f && v(e.params)
                        },
                        title: e.title,
                        css: Object(i.a)([k, o], "")
                    }, m));
                    if (Object(b.a)(e)) {
                        var h = f ? void 0 : "genesys-contact1";
                        return Object(d.b)("div", Object(c.a)({
                            role: "button",
                            onClick: w,
                            title: e.title,
                            css: Object(i.a)([k, o], "")
                        }, m, {
                            id: h
                        }))
                    }
                    if (Object(l.a)(e) && e.params) {
                        var g = f ? void 0 : "widget-popup-cmb";
                        return Object(d.b)("div", Object(c.a)({
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
                    return Object(p.a)(e) ? Object(d.b)("div", Object(c.a)({
                        role: "button",
                        title: e.title,
                        onClick: w,
                        css: Object(i.a)([k, o], "")
                    }, m)) : Object(j.a)(e) ? Object(d.b)("a", Object(c.a)({
                        onClick: w,
                        title: e.title,
                        href: e.action,
                        css: Object(i.a)([k, o], "")
                    }, m)) : null
                });
            f.displayName = "ActionWrapper"
        }
    }
]);
//# sourceMappingURL=f91c7408d35b84587463ad0bbc1bff20b00d746a.08eb3a1c68e83093065d.js.map