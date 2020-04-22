define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.styleVariant = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
            o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
        return n ? e + n + o : ""
    }, e.loadModule = function(t, r) {
        return new Promise(function(o, e) {
            OPL.UI.on("module.started", function e(n) {
                n.module === r.path && n.element === t && (OPL.UI.off("module.started", e), o())
            }), OPL.UI.loadModules(t, [r])
        })
    }, e.loadModules = function(r) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
            u = n;
        return new Promise(function(t, e) {
            OPL.UI.on("module.started", function e(n) {
                var o = u.find(function(e) {
                    return n.module === e.path
                });
                n.element === r && o && n.module === o.path && (u.splice(u.indexOf(o), 1), 0 === u.length && (OPL.UI.off("module.started", e), t()))
            }), OPL.UI.loadModules(r, n)
        })
    }, e.pickProps = function(n, e) {
        var o = {};
        return e.forEach(function(e) {
            n.hasOwnProperty(e) && null !== n[e] && (o[e] = n[e])
        }), o
    }, e.pickPropsBy = function(n, e) {
        var o = {};
        return Object.keys(n).filter(e).forEach(function(e) {
            o[e] = n[e]
        }), o
    }, e.excludeProps = function(e, n) {
        var o = {};
        for (var t in e) n.indexOf(t) < 0 && e.hasOwnProperty(t) && (o[t] = e[t]);
        return o
    }, e.ARIA_LIVE_OPTIONS = e.ARIA = void 0;
    var n = {
            POLITE: "polite",
            ASSERTIVE: "assertive",
            RUDE: "rude"
        },
        o = [(e.ARIA = n).POLITE, n.ASSERTIVE, n.RUDE];
    e.ARIA_LIVE_OPTIONS = o
});
//# sourceMappingURL=ui.js.map