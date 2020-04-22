define(["exports", "react", "prop-types", "../../../../../magnum2/components/Utils"], function(e, t, a, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireWildcard(t), a = babelHelpers.interopRequireDefault(a);

    function r(e) {
        var a = e.checkoutPrice;
        return a ? t.default.createElement("div", null, t.default.createElement("span", {
            className: "u-acc-hide"
        }, "Opłaty jednorazowe"), t.default.createElement("span", {
            className: "h2 u-no-spacing"
        }, (0, n.integer)(a.gross)), t.default.createElement("span", {
            className: "h4 u-no-spacing"
        }, ",", (0, n.fraction)(a.gross), " ", a.currency)) : t.default.createElement("span", {
            className: "h4 u-no-spacing"
        }, "—")
    }
    e.default = r
});
//# sourceMappingURL=CheckoutPrice.js.map