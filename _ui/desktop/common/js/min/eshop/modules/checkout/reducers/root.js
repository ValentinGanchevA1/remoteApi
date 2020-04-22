define(["exports", "redux", "./navigation", "./addresses", "./customer", "./representativeData", "./mnpData", "./consents", "./metadata", "./errors", "./delivery", "./installation", "./payment", "./conditions", "./cvDocuments", "./period", "./apu", "./telesales", "./pickup", "./reservation", "./assistMode", "./billingAccount", "./returnDocument", "./agreement", "./debtRepayment", "./fbbServices", "./idVerification", "./investment", "./summary"], function(e, r, i, a, c, d, n, s, l, t, b, o, u, p, R, m, q, H, W, v, y, f, D, g, M, k, x, A, S) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), a = babelHelpers.interopRequireWildcard(a), c = babelHelpers.interopRequireWildcard(c), n = babelHelpers.interopRequireWildcard(n), s = babelHelpers.interopRequireWildcard(s), l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireWildcard(t), b = babelHelpers.interopRequireWildcard(b), o = babelHelpers.interopRequireWildcard(o), u = babelHelpers.interopRequireWildcard(u), p = babelHelpers.interopRequireWildcard(p), R = babelHelpers.interopRequireWildcard(R), m = babelHelpers.interopRequireWildcard(m), q = babelHelpers.interopRequireWildcard(q), W = babelHelpers.interopRequireWildcard(W), v = babelHelpers.interopRequireWildcard(v), y = babelHelpers.interopRequireWildcard(y), f = babelHelpers.interopRequireWildcard(f), D = babelHelpers.interopRequireWildcard(D), g = babelHelpers.interopRequireWildcard(g), M = babelHelpers.interopRequireWildcard(M), k = babelHelpers.interopRequireWildcard(k), x = babelHelpers.interopRequireWildcard(x), A = babelHelpers.interopRequireWildcard(A);
    var V = (0, r.combineReducers)({
        navigation: (0, r.combineReducers)(i),
        addresses: (0, r.combineReducers)(a),
        customer: (0, r.combineReducers)(c),
        representativeData: d.representativeData,
        mnpData: (0, r.combineReducers)(n),
        metadata: (0, r.combineReducers)(l),
        consents: (0, r.combineReducers)(s),
        errors: (0, r.combineReducers)(t),
        delivery: (0, r.combineReducers)(b),
        installation: (0, r.combineReducers)(o),
        payment: (0, r.combineReducers)(u),
        cvDocuments: (0, r.combineReducers)(R),
        conditions: (0, r.combineReducers)(p),
        period: (0, r.combineReducers)(m),
        apu: (0, r.combineReducers)(q),
        telesales: H.Telesales,
        pickup: (0, r.combineReducers)(W),
        reservation: (0, r.combineReducers)(v),
        assistMode: (0, r.combineReducers)(y),
        billingAccount: (0, r.combineReducers)(f),
        returnDocument: (0, r.combineReducers)(D),
        agreement: (0, r.combineReducers)(g),
        debtRepayment: (0, r.combineReducers)(M),
        fbbServices: (0, r.combineReducers)(k),
        idVerification: (0, r.combineReducers)(x),
        investment: (0, r.combineReducers)(A),
        summary: S.summary
    });
    e.default = V
});
//# sourceMappingURL=root.js.map