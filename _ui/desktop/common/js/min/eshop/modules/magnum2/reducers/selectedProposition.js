define(["exports", "../actionTypes", "../../checkout/actionTypes"], function(e, o, c) {
    "use strict";

    function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, o = babelHelpers.interopRequireWildcard(o), c = babelHelpers.interopRequireWildcard(c);

    function t(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SELECT_PROPOSITION:
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, n.payload.proposition);
            case c.fetchZipCodeFromWWT.reset:
                return null;
            case o.SET_MAGNUM_STORE:
                return n.payload.magnum.selectedProposition;
            default:
                return r
        }
    }
    e.default = t
});
//# sourceMappingURL=selectedProposition.js.map