define(["exports", "../actionTypes"], function(e, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireWildcard(l);

    function t(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : null,
            i = 1 < arguments.length ? t : void 0;
        switch (i.type) {
            case l.SET_PROPOSITION_COMPONENT_PK:
                return i.payload.componentPk;
            default:
                return n
        }
    }
    e.default = t
});
//# sourceMappingURL=propositionComponentPk.js.map