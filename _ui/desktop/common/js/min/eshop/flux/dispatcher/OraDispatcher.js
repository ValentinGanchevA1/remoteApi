define(["exports"], function(t) {
    "use strict";
    var e, n, r, i, a, o, f;

    function u(t) {
        a[t] = !0;
        try {
            n[t](o.payload)
        } catch (t) {}
        i[t] = !0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var c = (r = !(n = {}), i = {}, a = {}, o = {}, f = 1, (e = {}).register = function(t) {
        var e = "ID_" + f++;
        return n[e] = t, e
    }, e.unregister = function(t) {
        delete n[t]
    }, e.waitFor = function(t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            a[n] || u(n)
        }
    }, e.dispatch = function(t) {
        ! function(t) {
            for (var e in n) a[e] = !1, i[e] = !1;
            o.payload = t, r = !0
        }(t);
        try {
            for (var e in n) a[e] || u(e)
        } finally {
            delete o.payload, r = !1
        }
    }, e.isDispatching = function() {
        return r
    }, e);
    t.default = c
});
//# sourceMappingURL=OraDispatcher.js.map