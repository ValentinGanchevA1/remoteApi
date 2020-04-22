define(["exports", "react", "react-dom"], function(e, i, r) {
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

    function n(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mount = function(e) {
        var r = e.node,
            n = e.Component,
            o = e.props,
            c = e.name,
            t = e.storePath;
        t ? UX.require(["react-redux", t], function(e, t) {
            a((0, i.createElement)(s(c || "Provider(".concat(n.displayName || n.name, ")"))(e.Provider), {
                store: t
            }, (0, i.createElement)(n, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(r), !0).forEach(function(e) {
                        babelHelpers.defineProperty(t, e, r[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }({}, o))), r)
        }) : a((0, i.createElement)(n, o), r)
    };
    var s = function(r) {
        return function(e) {
            var t = function(e) {
                babelHelpers.inherits(r, e);
                var t = n(r);

                function r() {
                    return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
                }
                return r
            }(e);
            return t.displayName = r, t
        }
    };

    function a(e, t) {
        (0, r.render)(e, t), OPL.UI.initModules(t)
    }
});
//# sourceMappingURL=ReactUtils.js.map