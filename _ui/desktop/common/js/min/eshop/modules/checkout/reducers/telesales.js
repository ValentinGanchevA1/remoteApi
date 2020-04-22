define(["exports", "../actionTypes", "../../cart/actionTypes"], function(e, c, o) {
    "use strict";

    function i(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(r);
            e && (a = a.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, a)
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.Telesales = void 0;
    var p = {
        campaignId: "",
        packageId: "",
        recordId: ""
    };
    e.Telesales = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : p,
            a = 1 < arguments.length ? r : void 0;
        switch (a.type) {
            case c.CHANGE_TELESALES_FORM_FIELD:
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
                }({}, t, babelHelpers.defineProperty({}, a.name, a.value));
            case o.FETCH_CART:
                if (!a.payload) return p;
                var n = a.payload.campaignData;
                return {
                    campaignId: n.campaignId, packageId: n.campaignPackageId, recordId: n.campaignRecordId
                };
            default:
                return t
        }
    }
});
//# sourceMappingURL=telesales.js.map