define(["exports", "../actionTypes"], function(e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.returnDocumentLoader = void 0;
    e.returnDocumentLoader = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case o.RETURN_DOCUMENT_LOADER:
                return r.data;
            default:
                return n
        }
    }
});
//# sourceMappingURL=returnDocument.js.map