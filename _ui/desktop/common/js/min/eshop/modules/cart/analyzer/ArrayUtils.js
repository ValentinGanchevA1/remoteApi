define(["exports"], function(r) {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.commonPartOfArrays = r.removeAllFromArray = r.sumArraysWithoutDupes = void 0;
    r.sumArraysWithoutDupes = function(e, r) {
        return e.concat(r.filter(function(r) {
            return !e.includes(r)
        }))
    };
    r.removeAllFromArray = function(r, e) {
        return r.filter(function(r) {
            return !e.includes(r)
        })
    };
    r.commonPartOfArrays = function(r, e) {
        return r.filter(function(r) {
            return e.includes(r)
        })
    }
});
//# sourceMappingURL=ArrayUtils.js.map