define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var t, r = ((t = {}).getTerminalsFromMiniCart = function(e) {
        return e.entries ? e.entries.filter(function(e) {
            return "SALE_OF_GOODS" === e.processType
        }).reduce(function(e, t) {
            return e.concat(t.terminals)
        }, []) : []
    }, t.CPO = "MOB_CPO_SALES_OF_GOODS", t);
    e.default = r
});
//# sourceMappingURL=SimfreeUtils.js.map