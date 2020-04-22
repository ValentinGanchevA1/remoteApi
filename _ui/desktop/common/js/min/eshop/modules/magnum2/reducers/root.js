define(["exports", "redux", "./propositionComponentPk", "./possibleTransactions", "./durationList", "./deviceList", "./selectedProposition", "./selectedDevice", "./documents", "./knaNumber", "./selectedTransactions", "./selectedLoyaltyPeriod", "./wwt", "./availableBundleTypes", "./searchCustomer", "./migration"], function(e, t, a, l, r, i, o, s, u, n, d, c, p, b, f, R) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), l = babelHelpers.interopRequireDefault(l), r = babelHelpers.interopRequireDefault(r), i = babelHelpers.interopRequireDefault(i), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s), u = babelHelpers.interopRequireDefault(u), n = babelHelpers.interopRequireDefault(n), c = babelHelpers.interopRequireDefault(c), p = babelHelpers.interopRequireDefault(p), b = babelHelpers.interopRequireDefault(b), R = babelHelpers.interopRequireDefault(R);
    var D = (0, t.combineReducers)({
        propositionComponentPk: a.default,
        possibleTransactions: l.default,
        durationList: r.default,
        deviceList: i.default,
        selectedProposition: o.default,
        selectedDevice: s.default,
        documents: u.default,
        knaNumber: n.default,
        selectedFixBroadbandTransaction: d.selectedFixBroadbandTransactionReducer,
        selectedFixVoipTransaction: d.selectedFixVoipTransactionReducer,
        selectedMobileTransaction: d.selectedMobileTransactionReducer,
        selectedLoyaltyPeriod: c.default,
        wwt: p.default,
        availableBundleTypes: b.default,
        searchCustomer: f.searchCustomerReducer,
        migration: R.default
    });
    e.default = D
});
//# sourceMappingURL=root.js.map