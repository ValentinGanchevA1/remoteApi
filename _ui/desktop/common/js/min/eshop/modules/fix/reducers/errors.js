define(["exports", "../actionTypes"], function(e, n) {
    "use strict";

    function i(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(r);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, o)
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.errorModalConfig = e.errorMessage = e.showErrorModal = void 0, n = babelHelpers.interopRequireWildcard(n);
    var c = {
        showIcon: !0
    };
    e.showErrorModal = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? r : void 0).type) {
            case n.OPEN_ERROR_MODAL:
                return !0;
            case n.CLOSE_ERROR_MODAL:
                return !1;
            default:
                return t
        }
    };
    e.errorMessage = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : null,
            o = 1 < arguments.length ? r : void 0;
        switch (o.type) {
            case n.OPEN_ERROR_MODAL:
                return o.payload.errorMessage;
            default:
                return t
        }
    };
    e.errorModalConfig = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : c,
            o = 1 < arguments.length ? r : void 0;
        switch (o.type) {
            case n.OPEN_ERROR_MODAL:
                return function(r) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(t), !0).forEach(function(e) {
                            babelHelpers.defineProperty(r, e, t[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
                        })
                    }
                    return r
                }({}, t, {}, o.payload.errorModalConfig);
            default:
                return t
        }
    }
});
//# sourceMappingURL=errors.js.map