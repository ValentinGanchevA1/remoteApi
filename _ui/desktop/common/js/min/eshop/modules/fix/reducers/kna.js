define(["exports", "../actionTypes"], function(e, i) {
    "use strict";

    function c(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(r);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, n)
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.kna = void 0, i = babelHelpers.interopRequireWildcard(i);
    e.kna = function(e, r) {
        var t, n = 0 < arguments.length && void 0 !== e ? e : {},
            o = 1 < arguments.length ? r : void 0;
        switch (o.type) {
            case i.CHANGE_KNA_FORM_FIELD:
                return function(r) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(t), !0).forEach(function(e) {
                            babelHelpers.defineProperty(r, e, t[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
                        })
                    }
                    return r
                }({}, n, (t = {}, babelHelpers.defineProperty(t, o.name, o.value), babelHelpers.defineProperty(t, "errors", babelHelpers.defineProperty({}, o.name, o.errors)), t));
            default:
                return n
        }
    }
});
//# sourceMappingURL=kna.js.map