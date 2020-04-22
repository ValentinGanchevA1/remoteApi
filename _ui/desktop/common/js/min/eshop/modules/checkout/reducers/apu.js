define(["exports", "../actionTypes"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isApuSelected = void 0;
    e.isApuSelected = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case n.SELECT_APU:
                return !0;
            default:
                return i
        }
    }
});
//# sourceMappingURL=apu.js.map