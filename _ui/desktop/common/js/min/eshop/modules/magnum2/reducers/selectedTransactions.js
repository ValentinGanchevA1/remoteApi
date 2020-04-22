define(["exports", "../actionTypes"], function(e, o) {
    "use strict";

    function a(t, e) {
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
    }), e.selectedMobileTransactionReducer = e.selectedFixVoipTransactionReducer = e.selectedFixBroadbandTransactionReducer = void 0, o = babelHelpers.interopRequireWildcard(o);
    e.selectedFixBroadbandTransactionReducer = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {
                process: null,
                number: null,
                pots: !1
            },
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SET_FIX_BROADBAND_TRANSACTION:
                return n.payload.transaction;
            case o.SET_MAGNUM_STORE:
                return n.payload.magnum.selectedFixBroadbandTransaction;
            default:
                return r
        }
    };
    e.selectedFixVoipTransactionReducer = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {
                process: null,
                number: null,
                pots: !1
            },
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SET_FIX_VOIP_TRANSACTION:
                return n.payload.transaction;
            case o.SET_MAGNUM_STORE:
                return n.payload.magnum.selectedFixVoipTransaction;
            default:
                return r
        }
    };
    e.selectedMobileTransactionReducer = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {
                process: null,
                number: null,
                pots: !1
            },
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SET_MOBILE_TRANSACTION:
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, n.payload.transaction, {
                    number: n.payload.msisdn
                });
            case o.SET_MAGNUM_STORE:
                return n.payload.magnum.selectedMobileTransaction;
            default:
                return r
        }
    }
});
//# sourceMappingURL=selectedTransactions.js.map