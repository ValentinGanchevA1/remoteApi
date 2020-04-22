define(["exports", "./middleware/analyticsCustomEvents", "./middleware/analyticsCustomEventsB2BMobile", "../fix/actionTypes", "../checkout/actionTypes"], function(e, t, r, n, o) {
    "use strict";
    var i;

    function c(t, e) {
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
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), r = babelHelpers.interopRequireDefault(r);
    var l = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }({}, (i = {}, babelHelpers.defineProperty(i, n.AFTER_WWT, function(e, t, r) {}), babelHelpers.defineProperty(i, n.BEFORE_WWT, function(e, t, r) {}), babelHelpers.defineProperty(i, o.GET_CART_CUSTOMER_DONE, function(e, t, r) {}), babelHelpers.defineProperty(i, n.FORCE_AFTER_WWT, function(e, t, r) {}), i), {}, t.default, {}, r.default);
    e.default = l
});
//# sourceMappingURL=actionsToTrack.js.map