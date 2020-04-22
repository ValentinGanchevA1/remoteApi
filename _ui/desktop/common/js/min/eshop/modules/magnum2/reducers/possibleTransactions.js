define(["exports", "../../core/constants/RequestState", "../actionTypes"], function(e, n, a) {
    "use strict";

    function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            e && (s = s.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, s)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a);

    function t(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : c,
            s = 1 < arguments.length ? t : void 0;
        switch (s.type) {
            case a.fetchPossibleTransactions.start:
                return {
                    requestState: n.RequestState.Waiting, transactions: r.transactions, cimId: null
                };
            case a.fetchPossibleTransactions.success:
                return {
                    requestState: n.RequestState.Success, transactions: babelHelpers.toConsumableArray(s.payload.transactionDatas), cimId: s.payload.cimId, userSalesChannel: s.payload.userSalesChannel
                };
            case a.fetchPossibleTransactions.error:
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, r, {
                    requestState: n.RequestState.Error,
                    transactions: [],
                    cimId: null
                });
            case a.SET_MAGNUM_STORE:
                return s.payload.magnum.possibleTransactions;
            default:
                return r
        }
    }
    var c = {
        requestState: n.RequestState.None,
        transactions: [],
        cimId: null
    };
    e.default = t
});
//# sourceMappingURL=possibleTransactions.js.map