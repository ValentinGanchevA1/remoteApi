define(["exports", "react", "eshop/modules/core/components/ui/OraSwitcher", "eshop/modules/simfree/components/PropositionForDeviceMobileView", "eshop/modules/simfree/components/PropositionForDeviceTabletDesktopView"], function(e, t, i, r, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i), r = babelHelpers.interopRequireDefault(r), a = babelHelpers.interopRequireDefault(a);

    function l(e) {
        var l = e.offer;
        return t.default.createElement(i.default, {
            key: e.index + "_switcher_mobile",
            onChangeHandler: e.onChange,
            isSelected: e.isSelected,
            className: "u-margin-l u-no-padding-r u-border",
            switcherClassName: "  opl-switcher-list__item u-cursor-pointer u-padding-all-l"
        }, t.default.createElement("div", {
            className: "u-large-hide u-medium-hide"
        }, t.default.createElement(r.default, babelHelpers.extends({
            offer: l
        }, e, {
            isSelected: e.isSelected,
            key: "mobile_" + l.id,
            index: e.index
        }))), t.default.createElement("div", {
            className: "u-small-hide"
        }, t.default.createElement(a.default, babelHelpers.extends({
            offer: l
        }, e, {
            isSelected: e.isSelected,
            key: "tablet_" + l.id,
            index: e.index
        }))))
    }
    e.default = l
});
//# sourceMappingURL=OfferProductListMobileView.js.map