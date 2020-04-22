define(["exports", "prop-types"], function(e, t) {
    "use strict";

    function n(t, e) {
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
    }), e.ConvergentComponentDescriptionsType = e.ConvergentMultiCartExpandedItemDescriptionsType = void 0;
    var r = {
        convergentMultiCartLegalSAT: t.PropTypes.string,
        convergentMultiCartLegalDSL: t.PropTypes.string
    };
    e.ConvergentMultiCartExpandedItemDescriptionsType = r;
    var o = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }({
        saveVasesButton: t.PropTypes.string
    }, r);
    e.ConvergentComponentDescriptionsType = o
});
//# sourceMappingURL=typings.js.map