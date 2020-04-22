define(["exports", "../actionTypes"], function(t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.durationsList = void 0;
    t.durationsList = function(t, e) {
        var i = 0 < arguments.length && void 0 !== t ? t : [],
            n = 1 < arguments.length ? e : void 0;
        switch (n.type) {
            case o.GET_PERIOD_DONE:
                return n.data.durations;
            default:
                return i
        }
    }
});
//# sourceMappingURL=period.js.map