define(["exports", "react", "eshop/components/OraCommonComponents", "eshop/modules/simfree/components/filter/OfferDeviceFilterMobileComponent"], function(e, l, t, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, l = babelHelpers.interopRequireDefault(l), a = babelHelpers.interopRequireDefault(a);

    function o(e) {
        return l.default.createElement("div", null, l.default.createElement("div", {
            className: "l-page-row u-padding-top-xl u-padding-l u-small-padding-top-l u-small-padding-l"
        }, l.default.createElement("div", {
            className: "l-row"
        }, l.default.createElement("div", {
            className: "h1 l-col l-col-small-12 l-col-medium-4 l-col-3"
        }, e.changeTerminalLbl), l.default.createElement("div", {
            className: "l-col l-col-small-12 l-col-medium-4 l-col-3"
        }, l.default.createElement(t.OraButton, {
            onClick: e.redirectToCart,
            className: "u-w-100"
        }, "Powrót do koszyka")))), l.default.createElement(a.default, {
            descriptions: e.descriptions,
            channels: e.channels
        }))
    }
    e.default = o
});
//# sourceMappingURL=ProductChangingHeaderView.js.map