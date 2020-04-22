define(["exports", "redux", "./customerServices", "./metaData", "./offers", "./kna", "./errors", "./documents", "./migration", "./voip", "./filter"], function(e, r, i, o, c, d, t, a, l, s, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireWildcard(i), o = babelHelpers.interopRequireWildcard(o), c = babelHelpers.interopRequireWildcard(c), d = babelHelpers.interopRequireWildcard(d), t = babelHelpers.interopRequireWildcard(t), a = babelHelpers.interopRequireWildcard(a), l = babelHelpers.interopRequireWildcard(l), s = babelHelpers.interopRequireWildcard(s);
    var u = (0, r.combineReducers)({
        customerServices: (0, r.combineReducers)(i),
        offers: (0, r.combineReducers)(c),
        metaData: (0, r.combineReducers)(o),
        kna: (0, r.combineReducers)(d),
        errors: (0, r.combineReducers)(t),
        pageContext: n.pageContext,
        filterLP: n.filterLP,
        documents: (0, r.combineReducers)(a),
        migration: (0, r.combineReducers)(l),
        voip: (0, r.combineReducers)(s)
    });
    e.default = u
});
//# sourceMappingURL=root.js.map