define(["exports", "./template", "./filters", "./offers", "./cart", "./metaData", "redux"], function(e, r, i, t, a, d, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), i = babelHelpers.interopRequireWildcard(i), t = babelHelpers.interopRequireWildcard(t), a = babelHelpers.interopRequireWildcard(a), d = babelHelpers.interopRequireWildcard(d);
    var c = (0, l.combineReducers)({
        template: (0, l.combineReducers)(r),
        filters: (0, l.combineReducers)(i),
        offers: (0, l.combineReducers)(t),
        cart: (0, l.combineReducers)(a),
        metaData: (0, l.combineReducers)(d)
    });
    e.default = c
});
//# sourceMappingURL=root.js.map