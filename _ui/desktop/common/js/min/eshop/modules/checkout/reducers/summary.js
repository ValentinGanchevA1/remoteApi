define(["exports", "redux", "../actionTypes"], function(e, t, u) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.summary = void 0;
    e.summary = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case u.REGISTER_COMPONENT_PROPS_VALUE:
                return n.payload;
            default:
                return r
        }
    }
});
//# sourceMappingURL=summary.js.map