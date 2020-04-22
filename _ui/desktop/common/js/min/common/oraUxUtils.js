"use strict";
var UX = function(e) {
    var n = new Promise(function(e) {
        "undefined" == typeof OPL || void 0 === OPL.UI ? document.addEventListener("framework.ready", function() {
            e(OPL)
        }) : e(OPL)
    });
    return e.useModules = function(t) {
        return n.then(function(n) {
            if (n.UI.isReady.modules) t(n);
            else {
                document.addEventListener(n.UI.EVENTS.modules.ready, function e() {
                    t(n), document.removeEventListener(n.UI.EVENTS.modules.ready, e)
                })
            }
        })
    }, e.use = function(e) {
        return n.then(e)
    }, e.isReady = function() {
        return "undefined" != typeof OPL && void 0 !== OPL.UI
    }, e.require = function(e, r) {
        return n.then(function() {
            require(e, function() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                r.apply(void 0, babelHelpers.toConsumableArray(n.map(function(e) {
                    return (n = e) && n.__esModule && n.default ? n.default : n;
                    var n
                })))
            })
        })
    }, e
}(UX || {});
//# sourceMappingURL=oraUxUtils.js.map