define(["exports", "react"], function(e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.PriceTiers = e.ButtonCell = e.LabelCell = e.FloatingBox = void 0, r = babelHelpers.interopRequireDefault(r);
    e.FloatingBox = function(e) {
        return r.default.createElement("div", {
            className: "l-full-row"
        }, r.default.createElement("div", {
            className: "l-page-row"
        }, r.default.createElement("div", {
            className: "u-padding-top-s u-padding-s"
        }, r.default.createElement("div", {
            className: "g-white1-bg u-box-shadow ".concat(e.boxClassName)
        }, e.children))))
    };
    e.LabelCell = function(e) {
        return r.default.createElement("td", {
            className: "u-padding-top-l u-padding-l u-padding-right-l"
        }, e.label)
    };
    e.ButtonCell = function(e) {
        return r.default.createElement("td", {
            className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
        }, r.default.createElement("a", {
            href: "#",
            className: "opl-product-addlink u-right u-small-right",
            onClick: e.onclick
        }))
    };
    e.PriceTiers = function e(l) {
        var t = babelHelpers.toArray(l.prices),
            a = t[0],
            n = t.slice(1);
        return r.default.createElement("div", null, r.default.createElement("p", null, r.default.createElement("span", null, a.integer, ",", a.fraction, " ", a.currency, "/mc "), a.end ? r.default.createElement("span", null, a.start, "-", a.end, " mc") : r.default.createElement("span", null, "od ", a.start, " mc")), n && 0 < n.length && r.default.createElement(e, {
            prices: n
        }))
    }
});
//# sourceMappingURL=BoxFragments.js.map