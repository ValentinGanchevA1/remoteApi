define(["exports"], function(e) {
    "use strict";

    function u(r, e) {
        var t = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(r);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })), t.push.apply(t, n)
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getCommonPropsForInput = void 0;
    e.getCommonPropsForInput = function(t, n, e, r) {
        var o = t.index,
            a = e + "-" + o + "-" + n,
            i = t.errors && t.errors[n] || [],
            c = 0 == i.length;
        return function(r) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(t), !0).forEach(function(e) {
                    babelHelpers.defineProperty(r, e, t[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
                })
            }
            return r
        }({
            name: a,
            id: a,
            value: t[n] || "",
            errors: i,
            labelType: "floating",
            onBlur: function(e) {
                var r = e.value;
                t.onChange({
                    index: o,
                    name: n,
                    value: r,
                    validate: !0
                })
            },
            onChange: function(e) {
                var r = e.value;
                t.onChange({
                    index: o,
                    name: n,
                    value: r,
                    validate: !1
                })
            },
            validationMark: !0,
            valid: c
        }, r)
    }
});
//# sourceMappingURL=common.js.map