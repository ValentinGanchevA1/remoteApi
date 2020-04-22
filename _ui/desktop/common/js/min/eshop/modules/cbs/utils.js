define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.cbsKey = function(e, t) {
        return e ? e + (t ? "#" + t.toUpperCase() : "") : null
    }, e.isValidPostalCode = function(e) {
        return t.test(e)
    }, e.formatPostalCode = function(e) {
        return e.slice(0, 2) + "-" + e.slice(2)
    };
    var t = /^\d{5}$/
});
//# sourceMappingURL=utils.js.map