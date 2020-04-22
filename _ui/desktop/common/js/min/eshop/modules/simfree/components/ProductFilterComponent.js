define(["exports", "react", "react-redux", "../selectors", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/components/ProductFilterView"], function(e, t, r, c, n, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), i = babelHelpers.interopRequireDefault(i);
    var l = (0, r.connect)(function(e, t) {
        return {
            selectedCategory: (0, c.getSelectedCategory)(e),
            filters: (0, c.getActualFilters)(e),
            selectedPrice: (0, c.getSelectedPrice)(e),
            selectedFilters: (0, c.getSelectedFilter)(e),
            matchToData: (0, c.getMatchToDataList)(e),
            products: (0, c.getProductListWrapper)(e),
            selectedNumberFilters: (0, c.getSelectedNumberFilter)(e),
            isSalesOfGoodsPage: (0, c.getIsSalesOfGoodsPage)(e),
            queryParams: t.queryParams,
            isModal: !1
        }
    }, function(i) {
        return {
            reloadTree: function(e) {
                return i((0, n.getFilteredProductTree)(e))
            },
            getFilters: function(e) {
                return i((0, n.getFilters)(e))
            },
            changeFilterAttribute: function(e, t, r, c) {
                return i((0, n.changeFilterAttribute)(e, t, r, c))
            },
            changeFilterNumberAttribute: function(e, t, r) {
                return i((0, n.changeFilterNumberAttribute)(e, t, r))
            },
            changePriceFilter: function(e, t) {
                return i((0, n.changePriceFilter)(e, t))
            },
            changeStickerFilter: function(e) {
                return i((0, n.changeStickerFilter)(e))
            },
            getMatchToData: function() {
                return i((0, n.getMatchToData)())
            },
            setSelectedModel: function(e, t) {
                return i((0, n.setSelectedModel)(e, t))
            },
            setSelectedRecomendedProducer: function(e, t) {
                return i((0, n.setSelectedRecomendedProducer)(e, t))
            },
            getFilteredList: function(e) {
                return i((0, n.getFilteredProductList)(e))
            },
            clearMatchToFilters: function() {
                return i((0, n.clearMatchToFilters)())
            },
            reloadMatchToFilter: function() {
                return i((0, n.reloadMatchToFilter)())
            }
        }
    })(i.default);
    e.default = l
});
//# sourceMappingURL=ProductFilterComponent.js.map