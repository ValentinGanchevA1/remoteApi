define(["exports", "./cart", "./list", "./details", "./offerFilter", "./metaData", "./comparator", "redux"], function(e, r, i, a, d, l, t, c) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), i = babelHelpers.interopRequireWildcard(i), a = babelHelpers.interopRequireWildcard(a), d = babelHelpers.interopRequireWildcard(d), l = babelHelpers.interopRequireWildcard(l), t = babelHelpers.interopRequireWildcard(t);
    var o = (0, c.combineReducers)({
        cart: (0, c.combineReducers)(r),
        details: (0, c.combineReducers)(a),
        list: (0, c.combineReducers)(i),
        offerFilter: (0, c.combineReducers)(d),
        metaData: (0, c.combineReducers)(l),
        comparator: (0, c.combineReducers)(t)
    });
    e.default = o
});
//# sourceMappingURL=root.js.map