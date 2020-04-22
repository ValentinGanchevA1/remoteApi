define(["exports", "react", "eshop/modules/core/components/ui/OraSwitcher", "eshop/modules/simfree/components/PropositionForDeviceMobileView", "eshop/utils/OnlineUtils"], function(e, a, n, o, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), n = babelHelpers.interopRequireDefault(n), o = babelHelpers.interopRequireDefault(o), s = babelHelpers.interopRequireDefault(s);

    function t(e) {
        var t = e.offer,
            r = e.offer && e.offer.bonusDescriptions && e.offer.bonusDescriptions.find(function(e) {
                return "data_desc" === e.attribute
            }),
            i = e.offer.features.getMobileRetentionDesc(),
            l = r && r.value || "";
        return i && (l = (l += i.value).replace(" ", "").replace("&nbsp;", "")), a.default.createElement(n.default, {
            key: e.index + "_switcher",
            onChangeHandler: e.onChange,
            isSelected: e.isSelected,
            className: " u-padding-all-l  u-padding-top u-padding"
        }, a.default.createElement(o.default, babelHelpers.extends({}, e, {
            key: "desktop_" + t.id
        })), e.isSelected && s.default.updateOgTag("product:retailer_part_no", t.id + "^" + e.selectedVariant))
    }
    e.default = t
});
//# sourceMappingURL=OfferProductListView.js.map