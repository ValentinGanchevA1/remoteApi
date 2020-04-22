define(["exports"], function(e) {
    "use strict";

    function u(t, e) {
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
    }), e.default = void 0;

    function t(c, e) {
        function n(e, t) {
            var r = p[e.type] || 0;
            p = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, p, babelHelpers.defineProperty({}, e.type, ++r));
            var n = t(),
                o = (0, i[e.type])(n, e, p);
            o && c.push(o)
        }
        var i = 1 < arguments.length && void 0 !== e ? e : {},
            p = {};
        return function(e) {
            e.dispatch;
            var r = e.getState;
            return function(t) {
                return function(e) {
                    t(e), Object.keys(i).includes(e.type) && n(e, r)
                }
            }
        }
    }
    e.default = t
});
//# sourceMappingURL=dataLayerMiddleware.js.map