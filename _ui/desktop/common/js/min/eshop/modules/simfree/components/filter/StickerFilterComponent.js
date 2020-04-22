define(["exports", "react", "react-redux", "../../selectors", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/components/filter/StickerFilterView"], function(e, t, r, i, l, c) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), c = babelHelpers.interopRequireDefault(c);
    var n = (0, r.connect)(function(e) {
        return {
            filterConfiguration: (0, i.getFilterConfiguration)(e),
            filters: (0, i.getActualStickerFilters)(e),
            selectedFilters: (0, i.getSelectedFilter)(e),
            selectedStickerFilters: (0, i.getSelectedStickerFilter)(e),
            selectedProducer: (0, i.getSelectedProducer)(e),
            isModal: !1
        }
    }, function(c) {
        return {
            reloadTree: function(e) {
                return c((0, l.getFilteredProductTreeWithoutReloadStickers)(e))
            },
            setSelectedProducer: function(e) {
                return c((0, l.setSelectedProducer)(e))
            },
            getFilteredList: function(e) {
                return c((0, l.getFilteredProductList)(e))
            },
            changeStickerFilterAttribute: function(e, t, r, i) {
                return c((0, l.changeStickerFilterAttribute)(e, t, r, i))
            },
            changeStickerFilter: function(e) {
                return c((0, l.changeStickerFilter)(e))
            },
            clearAttrFilters: function() {
                return c((0, l.clearAttrsFilters)())
            }
        }
    })(c.default);
    e.default = n
});
//# sourceMappingURL=StickerFilterComponent.js.map