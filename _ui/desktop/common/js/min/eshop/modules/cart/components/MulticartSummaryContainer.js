define(["exports", "react-redux", "eshop/modules/cart/actions/cart", "eshop/modules/cart/components/MulticartSummaryComponent", "../selectors", "eshop/modules/checkout/selectors"], function(e, t, n, r, a, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireDefault(r);
    var u = (0, t.connect)(function(e) {
        return {
            updating: 0 < (0, o.getModifyConsentsInCartQueue)(e).length || (0, o.updatingAnyConsent)(e),
            entryType: (0, a.getEntryType)(e),
            hasCartData: (0, a.getHasCartData)(e)
        }
    }, function(e) {
        return {
            fetchCart: function() {
                return e((0, n.fetchCart)())
            },
            fetchMiniCart: function() {
                return e((0, n.fetchMiniCart)())
            }
        }
    })(r.default);
    e.default = u
});
//# sourceMappingURL=MulticartSummaryContainer.js.map