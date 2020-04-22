define(["exports", "react", "../../checkout/selectors", "react-redux"], function(e, a, t, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a);

    function n(e) {
        var t = a.default.createElement("span", null, "—"),
            r = a.default.createElement("span", {
                className: "h5 g-brand2-c u-no-margin"
            }, e.cost);
        return e.render(r, t, e.title)
    }
    e.default = n
});
//# sourceMappingURL=DeliveryCostDetails.js.map