define(["exports", "../actionTypes"], function(e, o) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function c(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o);

    function t(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {
                list: [],
                loading: !1
            },
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.fetchDocumentsList.success:
                return c({}, r, {
                    list: n.payload,
                    loading: !1
                });
            case o.fetchDocumentsList.start:
                return c({}, r, {
                    loading: !0
                });
            case o.fetchDocumentsList.error:
                return c({}, r, {
                    loading: !1
                });
            case o.SET_MAGNUM_STORE:
                return n.payload.magnum.documents;
            default:
                return r
        }
    }
    e.default = t
});
//# sourceMappingURL=documents.js.map