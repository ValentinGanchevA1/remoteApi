define(["exports", "react", "prop-types", "../../../../../magnum2/components/Utils", "eshop/modules/cart/components/entriesList/shared/PriceBoxes"], function(e, a, t, s, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), t = babelHelpers.interopRequireDefault(t);

    function r(e) {
        var t = 0 < arguments.length && void 0 !== e ? e : l,
            n = t.monthlyPrices;
        if (!n || 0 == n.length) return a.default.createElement("span", {
            className: "h4 u-no-spacing"
        }, "—");
        var r = n[0];
        return a.default.createElement("div", null, a.default.createElement("span", {
            className: "u-acc-hide"
        }, "Opłaty miesięczne"), a.default.createElement("span", {
            className: "h2 u-no-spacing"
        }, (0, s.integer)(r.gross)), a.default.createElement("span", {
            className: "h4 u-no-spacing"
        }, ",", (0, s.fraction)(r.gross), " ", r.currency), t.onlyFirst ? null : o(n))
    }
    var l = {
            monthlyPrices: [],
            onlyFirst: !1
        },
        o = function(e) {
            return a.default.createElement("div", null, e.map(function(e, t) {
                if (0 == t) return null;
                e.gross.split(",");
                return a.default.createElement("span", {
                    key: e.monthFrom + "-" + e.monthTo,
                    className: "u-right u-text-nowrap"
                }, "od ", e.monthFrom, " ", e.monthTo ? "do " + e.monthTo + " " : "", "m-ca ", e.gross, " ", e.currency)
            }))
        };
    e.default = r
});
//# sourceMappingURL=MonthlyPrices.js.map