define(["exports", "../actionTypes"], function(e, o) {
    "use strict";

    function c(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(r);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, o)
        }
        return t
    }

    function n(r) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(t), !0).forEach(function(e) {
                babelHelpers.defineProperty(r, e, t[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(e) {
                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
            })
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.searchCustomerReducer = void 0, o = babelHelpers.interopRequireWildcard(o);
    e.searchCustomerReducer = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : {
            performed: !1,
            displayForceSearchModal: !1
        };
        switch ((1 < arguments.length ? r : void 0).type) {
            case o.CUSTOMER_SEARCHED:
                return n({}, t, {
                    performed: !0
                });
            case o.SHOW_FORCE_SEARCH_MODAL_ACTION:
                return n({}, t, {
                    displayForceSearchModal: !0
                });
            default:
                return t
        }
    }
});
//# sourceMappingURL=searchCustomer.js.map