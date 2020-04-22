define(["exports", "react", "prop-types"], function(e, n, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), t = babelHelpers.interopRequireDefault(t);

    function a(e) {
        if (!e.price || !e.price.monthlyCosts || 0 < !e.price.monthlyCosts.length || !e.price.monthlyCosts[0]) return null;
        var t = e.net ? e.price.monthlyCosts[0].net.split(",") : e.price.monthlyCosts[0].gross.split(","),
            a = t[0],
            l = t[1].split(" ")[0],
            r = !!e.price.monthlyCosts[0].monthFrom || !!e.price.monthlyCosts[0].monthTo,
            s = "".concat(e.price.monthlyCosts[0].currency).concat(r && "/mies.");
        return n.default.createElement("div", null, n.default.createElement("span", {
            className: "opl-price-v2"
        }, n.default.createElement("span", {
            className: "opl-price-v2__part u-padding-right-s"
        }, n.default.createElement("span", {
            className: "opl-price-v2__whole"
        }, a)), n.default.createElement("span", {
            className: "opl-price-v2__part"
        }, n.default.createElement("span", {
            className: "opl-price-v2__separator"
        }, ","), n.default.createElement("span", {
            className: "opl-price-v2__decimal"
        }, l), n.default.createElement("span", {
            className: "opl-price-v2__suffix"
        }, s))), n.default.createElement("div", null, e.price.oneTimeCost && n.default.createElement("div", {
            className: "u-spacing-top-s u-font-small u-font-bold"
        }, "+ ", e.net ? e.price.oneTimeCost.net : e.price.oneTimeCost.gross, " ", e.price.oneTimeCost.currency, " jednorazowa opłata")))
    }
    a.propTypes = {
        price: t.default.shape({
            oneTimeCost: t.default.shape({
                gross: t.default.string,
                net: t.default.string,
                currency: t.default.string
            }),
            monthlyCosts: t.default.arrayOf(t.default.shape({
                gross: t.default.string,
                net: t.default.string,
                currency: t.default.string,
                monthFrom: t.default.number,
                monthTo: t.default.number
            }))
        })
    };
    var l = a;
    e.default = l
});
//# sourceMappingURL=PriceBox.js.map