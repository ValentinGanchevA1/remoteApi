define(["exports"], function(e) {
    "use strict";

    function r(e, t, n) {
        var r = e.simfree.list.products.data;
        return r && r.forEach(function(e) {
            e.productId === n && (e.selectedVariant = t.productId)
        }), r
    }

    function c(e, t, n, r) {
        return r && r.forEach(function(e) {
            e.productId === n && (e.selectedVariant = t.productId)
        }), r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.changeSelectedVariantOnList = r, e.changeSelectedVariantOnRecommended = c, e.default = void 0;
    var t = {
        changeVariant: function(e, t, n) {
            return r(e, t, n)
        },
        changeRecommendedVariant: function(e, t, n, r) {
            return c(0, t, n, r)
        }
    };
    e.default = t
});
//# sourceMappingURL=listUtils.js.map