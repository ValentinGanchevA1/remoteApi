define(["exports", "../actionTypes"], function(e, o) {
    "use strict";

    function n(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(r);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, n)
        }
        return t
    }

    function c(r) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(t), !0).forEach(function(e) {
                babelHelpers.defineProperty(r, e, t[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
            })
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.registered = void 0;
    e.registered = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? r : void 0;
        switch (n.type) {
            case o.REGISTER_NEXT_STEP_CONDITION:
                return c({}, t, babelHelpers.defineProperty({}, n.condition, !0));
            case o.UNREGISTER_NEXT_STEP_CONDITION:
                return Object.keys(t).reduce(function(e, r) {
                    return r !== n.condition ? c({}, e, babelHelpers.defineProperty({}, r, t[r])) : e
                }, {});
            default:
                return t
        }
    }
});
//# sourceMappingURL=conditions.js.map