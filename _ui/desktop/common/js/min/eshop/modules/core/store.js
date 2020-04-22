define(["exports", "redux", "redux-thunk", "../auth/reducers/authorization", "../checkout/reducers/root", "../cart/reducers/root", "../cbs/reducers/root", "../configurator/reducers/root", "../documents/reducers/root", "../simfree/reducers/root", "../fix/reducers/root", "../magnum2/reducers/root", "../servicetransfer/reducers/root", "../dataLayer/reducers/root", "../dataLayer/middleware/dataLayerMiddleware", "../dataLayer/actionsToTrack"], function(e, r, t, a, u, l, o, d, i, f, s, n, p, b, c, D) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.store = void 0, t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a), u = babelHelpers.interopRequireDefault(u), l = babelHelpers.interopRequireDefault(l), o = babelHelpers.interopRequireDefault(o), d = babelHelpers.interopRequireDefault(d), i = babelHelpers.interopRequireDefault(i), f = babelHelpers.interopRequireDefault(f), s = babelHelpers.interopRequireDefault(s), n = babelHelpers.interopRequireDefault(n), p = babelHelpers.interopRequireDefault(p), b = babelHelpers.interopRequireDefault(b), c = babelHelpers.interopRequireDefault(c), D = babelHelpers.interopRequireDefault(D);
    var R = (0, r.combineReducers)({
            auth: a.default,
            checkout: u.default,
            cart: l.default,
            cbs: o.default,
            configurator: d.default,
            documents: i.default,
            simfree: f.default,
            fix: s.default,
            magnum: n.default,
            serviceTransfer: p.default,
            dataLayer: b.default
        }),
        _ = "object" === ("undefined" == typeof window ? "undefined" : babelHelpers.typeof(window)) && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : r.compose,
        H = (0, c.default)(window.dataLayer, D.default),
        q = (0, r.createStore)(R, _((0, r.applyMiddleware)(t.default, H))),
        w = e.store = q;
    e.default = w
});
//# sourceMappingURL=store.js.map