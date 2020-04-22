define(["exports", "react", "prop-types", "../../../../../magnum2/components/Utils"], function(e, r, t, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), t = babelHelpers.interopRequireDefault(t);

    function l(e) {
        var t = e.checkoutPrice;
        return t ? r.default.createElement("p", {
            className: "u-font-small"
        }, "+ ", (0, a.integer)(t.gross), ",", (0, a.fraction)(t.gross), " ", t.currency, " aktywacja") : null
    }
    e.default = l
});
//# sourceMappingURL=CheckoutPriceMobile.js.map