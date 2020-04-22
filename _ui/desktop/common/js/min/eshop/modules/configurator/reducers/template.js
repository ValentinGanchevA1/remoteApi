define(["exports", "../actionTypes"], function(e, c) {
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

    function o(t) {
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
    }), e.counter = e.meta = e.data = e.fetching = void 0;
    e.fetching = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case c.TEMPLATE_ASYNC_START:
                return !0;
            case c.TEMPLATE_ASYNC_RECEIVE:
            case c.TEMPLATE_ASYNC_ERROR:
                return !1;
            default:
                return r
        }
    };
    e.data = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.TEMPLATE_ASYNC_RECEIVE:
                return n.receivedData;
            default:
                return r
        }
    };
    e.meta = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {};
        switch ((1 < arguments.length ? t : void 0).type) {
            case c.TEMPLATE_ASYNC_RECEIVE:
                return o({}, r, {
                    error: "",
                    timestamp: Date.now()
                });
            case c.TEMPLATE_ASYNC_ERROR:
                return o({}, r, {
                    error: "ERROR MESSAGE"
                });
            default:
                return r
        }
    };
    e.counter = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : 0;
        switch ((1 < arguments.length ? t : void 0).type) {
            case c.TEMPLATE_INCREMENT:
                return r + 1;
            default:
                return r
        }
    }
});
//# sourceMappingURL=template.js.map