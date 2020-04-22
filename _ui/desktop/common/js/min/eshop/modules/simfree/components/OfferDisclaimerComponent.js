define(["exports", "react", "eshop/modules/core/components/ui/TooltipFromHtml"], function(e, i, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), r = babelHelpers.interopRequireDefault(r);

    function l(e) {
        var l = e.descriptions,
            t = e.processType,
            a = e.className,
            o = l[["offerDisclaimer", t].filter(Boolean).join(".")];
        return o ? i.default.createElement(r.default, {
            className: "g-black1-bg g-white1-c u-padding-all-l u-padding u-padding-top ".concat(a),
            html: o
        }) : null
    }
    e.default = l
});
//# sourceMappingURL=OfferDisclaimerComponent.js.map