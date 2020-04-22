define(["exports", "react", "prop-types", "eshop/modules/cart/selectors", "react-redux"], function(e, t, n, s, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PresentBasedOnCartEmptiness = e.HideWhenCartContainsEmptyEntries = e.ShowWhenCartIsEmpty = e.HideWhenCartIsEmpty = e.loyaltyDuration = e.maleOrdinal = void 0, t = babelHelpers.interopRequireWildcard(t), n = babelHelpers.interopRequireDefault(n);

    function m(e) {
        return {
            numberOfEntries: (0, s.getNumberOfCartEntries)(e),
            hasMiniCart: (0, s.getHasMiniCartData)(e),
            containsEmptySaleOfAddonsEntry: (0, s.containsEmptySaleOfAddonsEntry)(e)
        }
    }
    var a = {
        1: "pierwszym",
        2: "drugim",
        3: "trzecim",
        4: "czwartym",
        5: "piątym",
        6: "szóstym",
        7: "siódmym",
        8: "ósmym",
        9: "dziewiątym",
        10: "dziesiątym",
        11: "jedenastym",
        12: "dwunastym",
        13: "trzynastym",
        14: "czternastym",
        15: "piętnastym",
        16: "szesnastym",
        17: "siedemnastym",
        18: "osiemnastym",
        19: "dziewiętnastym",
        20: "dwudziestym",
        21: "dwudziestym pierwszym",
        22: "dwudziestym drugim",
        23: "dwudziestym trzecim",
        24: "dwudziestym czwartym",
        25: "dwudziestym piątym",
        26: "dwudziestym szóstym",
        27: "dwudziestym siódmym",
        28: "dwudziestym ósmym",
        29: "dwudziestym dziewiątym",
        30: "trzydziestym",
        31: "trzydziestym pierwszym",
        32: "trzydziestym drugim",
        33: "trzydziestym trzecim",
        34: "trzydziestym czwartym",
        35: "trzydziestym piątym",
        36: "trzydziestym szóstym"
    };
    e.maleOrdinal = function(e) {
        return a[e]
    };
    e.loyaltyDuration = function(e) {
        return 0 === e ? "Umowa w promocji na czas nieokreślony" : 1 === e ? "Umowa na " + e + " miesiąc" : (e < 10 || 20 < e) && [2, 3, 4].includes(e % 10) ? "Umowa na " + e + " miesiące" : null == e ? "Umowa na dotychczasowy okres" : "Umowa na " + e + " miesięcy"
    };
    var r = (0, i.connect)(m, null)(function(e) {
        return e.hasMiniCart && 0 !== e.numberOfEntries ? t.default.createElement("div", {
            className: e.className
        }, e.children) : null
    });
    e.HideWhenCartIsEmpty = r;
    var y = (0, i.connect)(m, null)(function(e) {
        return e.hasMiniCart && 0 < e.numberOfEntries ? null : t.default.createElement("div", {
            className: e.className
        }, e.children)
    });
    e.ShowWhenCartIsEmpty = y;
    var d = (0, i.connect)(m, null)(function(e) {
        return e.containsEmptySaleOfAddonsEntry ? null : t.default.createElement("div", {
            className: e.className
        }, e.children)
    });
    e.HideWhenCartContainsEmptyEntries = d;
    var l = (0, i.connect)(m, null)(function(e) {
        return e.numberOfEntries && 0 === e.numberOfEntries ? t.default.createElement("div", {
            className: e.classNameIfEmpty
        }, e.ifEmpty) : t.default.createElement("div", {
            className: e.classNameIfNotEmpty
        }, e.ifNotEmpty)
    });
    e.PresentBasedOnCartEmptiness = l
});
//# sourceMappingURL=Utils.js.map