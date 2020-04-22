define(["exports", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/actions/filter", "../selectors", "eshop/modules/simfree/components/ProductCategoryTreeView", "../actions/filter"], function(e, t, r, u, i, n, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireDefault(n);
    var c = (0, t.connect)(function(e) {
        return {
            filterConfiguration: (0, i.getFilterConfiguration)(e),
            categories: (0, i.getProductsTrees)(e),
            productList: (0, i.getProductListData)(e),
            selectedCategory: (0, i.getSelectedCategory)(e),
            matchToData: (0, i.getMatchToDataList)(e),
            initiallyFiltered: (0, i.getInitiallyFiltered)(e),
            isModal: !1,
            productsFilter: (0, i.getProductsFilter)(e)
        }
    }, function(n) {
        return {
            reloadTree: function(e) {
                return n((0, u.getFilteredProductTree)(e))
            },
            getMatchToData: function() {
                return n((0, u.getMatchToData)())
            },
            reloadMatchToFilter: function() {
                return n((0, u.reloadMatchToFilter)())
            },
            getCategories: function(e) {
                return n((0, u.getProductsTree)(e))
            },
            changeCategory: function(e) {
                return n((0, r.changeCategory)(e))
            },
            getFilters: function(e) {
                return n((0, u.getFilters)(e))
            },
            fetchConfiguration: function(e, t, r) {
                return n((0, u.fetchFilterConfiguration)(e, t, r))
            },
            getFilteredList: function() {
                return n((0, u.getFilteredProductList)())
            },
            clearAttrFilters: function() {
                return n((0, u.clearAttrsFilters)())
            },
            setSelectedProducer: function(e) {
                return n((0, u.setSelectedProducer)(e))
            },
            changePriceFilter: function(e, t) {
                return n((0, u.changePriceFilter)(e, t))
            },
            changeStickerFilter: function(e) {
                return n((0, u.changeStickerFilter)(e))
            },
            changeFilterAttribute: function(e, t, r, i) {
                return n((0, u.changeFilterAttribute)(e, t, r, i))
            },
            changeFilterNumberAttribute: (i = function(e, t, r) {
                return n(changeFilterNumberAttribute(e, t, r))
            }, e.toString = function() {
                return i.toString()
            }, e),
            changeCurrentPage: function(e) {
                return n((0, u.changeCurrentPageProps)(e))
            },
            changeEsimFilterAttributeIfAvailable: function(e, t) {
                return n((0, o.changeEsimFilterAttributeIfAvailable)(e, t))
            },
            setProductsFilter: function(e) {
                return n((0, u.setProductsFilter)(e))
            }
        };

        function e(e, t, r) {
            return i.apply(this, arguments)
        }
        var i
    })(n.default);
    e.default = c
});
//# sourceMappingURL=ProductCategoryTreeComponent.js.map