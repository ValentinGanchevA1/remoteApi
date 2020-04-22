define(["exports", "../actionTypes"], function(e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.documentsDataLP = void 0, i = babelHelpers.interopRequireWildcard(i);
    e.documentsDataLP = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : {},
            a = 1 < arguments.length ? t : void 0;
        switch (a.type) {
            case i.FETCH_DOCUMENTS:
                return a.payload;
            default:
                return n
        }
    }
});
//# sourceMappingURL=documents.js.map