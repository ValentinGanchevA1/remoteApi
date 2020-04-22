define(["exports", "../actionTypes"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.convergentConfigurablesReducer = void 0;
    var a = {
        configurables: []
    };
    e.convergentConfigurablesReducer = function(e, r) {
        var n = 0 < arguments.length && void 0 !== e ? e : a,
            o = 1 < arguments.length ? r : void 0;
        switch (o.type) {
            case t.FETCH_CONVERGENT_CONFIGURABLES:
                return {
                    configurables: babelHelpers.toConsumableArray(o.payload.configurables)
                };
            default:
                return n
        }
    }
});
//# sourceMappingURL=convergentConfigurables.js.map