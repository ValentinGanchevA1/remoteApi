define(["exports", "redux", "./items", "./itemsUnfiltered", "./links", "./metadata"], function(e, t, i, l, r, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), l = babelHelpers.interopRequireDefault(l), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireWildcard(a);
    var u = (0, t.combineReducers)({
        items: i.default,
        itemsUnfiltered: l.default,
        links: r.default,
        metadata: (0, t.combineReducers)(a)
    });
    e.default = u
});
//# sourceMappingURL=root.js.map