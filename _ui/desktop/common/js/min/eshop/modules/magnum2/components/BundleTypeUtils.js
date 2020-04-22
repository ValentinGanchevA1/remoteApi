define(["exports", "../../cart/components/entriesList/BundleTypeEnum"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isLTE = function(e) {
        return e && e.some(function(e) {
            return -1 < [n.default._2ULTE, n.default._3ULTE].indexOf(e)
        })
    }, e.is2ULTE = function(e) {
        return e && e.some(function(e) {
            return -1 < [n.default._2ULTE].indexOf(e)
        })
    }, e.is2U = function(e) {
        return e && e.some(function(e) {
            return -1 < [n.default._2U].indexOf(e)
        })
    }, e.is4U = function(e) {
        return e && e.some(function(e) {
            return -1 < [n.default._4U].indexOf(e)
        })
    }, n = babelHelpers.interopRequireDefault(n)
});
//# sourceMappingURL=BundleTypeUtils.js.map