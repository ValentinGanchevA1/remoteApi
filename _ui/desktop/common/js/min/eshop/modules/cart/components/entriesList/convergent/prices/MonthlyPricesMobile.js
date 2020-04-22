define(["exports", "react", "prop-types", "../../../../../magnum2/components/Utils"], function(e, r, a, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, r = babelHelpers.interopRequireWildcard(r), a = babelHelpers.interopRequireDefault(a);

    function t(e) {
        var a = e.monthlyPrices;
        if (!a || 0 == a.length) return null;
        var t = a[0];
        return r.default.createElement("span", {
            className: "opl-price-v2",
            "data-price": "{firstMonthPrice.gross}"
        }, r.default.createElement("span", {
            className: "opl-price-v2__part"
        }, r.default.createElement("span", {
            className: "opl-price-v2__whole"
        }, (0, l.integer)(t.gross))), r.default.createElement("span", {
            className: "opl-price-v2__part"
        }, r.default.createElement("span", {
            className: "opl-price-v2__separator"
        }, ","), r.default.createElement("span", {
            className: "opl-price-v2__decimal"
        }, (0, l.fraction)(t.gross)), r.default.createElement("span", {
            className: "opl-price-v2__suffix"
        }, t.currency, "/mies.")))
    }
    e.default = t
});
//# sourceMappingURL=MonthlyPricesMobile.js.map