define(["exports", "../actionTypes", "../../checkout/actionTypes"], function(e, o, c) {
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

    function i(t) {
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
    }), e.default = void 0;
    e.default = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.DOCUMENT_READY_TO_DOWNLOAD:
                return i({}, r, babelHelpers.defineProperty({}, n.code, n.link));
            case c.PICKUP_DOCUMENT_DOWNLOAD_DONE:
                return i({}, r, babelHelpers.defineProperty({}, n.code + "_" + n.bundleNo, n.link));
            case o.DOCUMENT_LINK_CLEAR:
                return {};
            default:
                return r
        }
    }
});
//# sourceMappingURL=links.js.map