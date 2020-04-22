define(["exports", "../actionTypes"], function(e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mode = void 0, o = babelHelpers.interopRequireWildcard(o);
    e.mode = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.MIGRATION_MODE:
                return n.payload;
            default:
                return i
        }
    }
});
//# sourceMappingURL=migration.js.map