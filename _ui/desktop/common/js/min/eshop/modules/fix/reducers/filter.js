define(["exports", "../actionTypes"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.pageContext = e.filterLP = void 0, n = babelHelpers.interopRequireWildcard(n);
    e.filterLP = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case n.UPDATE_FILTER_ID:
                return t.payload;
            default:
                return e
        }
    };
    e.pageContext = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "1P",
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case n.UPDATE_PAGE_CONTEXT:
                return t.payload;
            default:
                return e
        }
    }
});
//# sourceMappingURL=filter.js.map