define(["exports", "react", "prop-types"], function(e, a, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireWildcard(a), t = babelHelpers.interopRequireDefault(t);

    function l(t) {
        return a.default.createElement("div", {
            className: "g-white1-bg u-box-shadow u-spacing"
        }, a.default.createElement("div", {
            className: "u-position-relative"
        }, a.default.createElement("div", {
            className: "u-padding-left-l u-padding-right-l"
        }, a.default.createElement("table", {
            className: "u-table-fixed"
        }, a.default.createElement("tbody", null, a.default.createElement("tr", null, a.default.createElement("td", {
            className: "opl-checkout__icon__cell"
        }, a.default.createElement("span", {
            "aria-hidden": "true",
            className: "g-icon g-icon--only g-icon--" + t.icon
        })), a.default.createElement("td", {
            className: "u-padding-top-l u-padding-l u-padding-right-l"
        }, a.default.createElement("span", {
            className: "u-font-bold"
        }, t.buyMoreLabel)), a.default.createElement("td", {
            className: "opl-checkout__button__cell u-padding-top-l u-padding-l"
        }, a.default.createElement("a", {
            href: "#",
            className: "opl-product-addlink u-right u-small-right",
            onClick: function(e) {
                e.preventDefault(), t.addButtonClicked(e)
            }
        }))))))))
    }
    l.propTypes = {
        buyMoreLabel: t.default.string,
        icon: t.default.string,
        addButtonClicked: t.default.func
    };
    var d = l;
    e.default = d
});
//# sourceMappingURL=BuyMoreProductsEntry.js.map