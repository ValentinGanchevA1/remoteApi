define(["exports", "react-redux", "eshop/modules/simfree/actions/app", "eshop/modules/simfree/actions/filter", "../selectors", "eshop/modules/simfree/components/ProductCategoryTreeView", "../actions/filter"], function(_exports, _reactRedux, _app, _filter, _selectors, _ProductCategoryTreeView, _filter2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _ProductCategoryTreeView = babelHelpers.interopRequireDefault(_ProductCategoryTreeView);

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return {
            filterConfiguration: (0, _selectors.getFilterConfiguration)(state),
            categories: (0, _selectors.getProductsTrees)(state),
            productList: (0, _selectors.getProductListData)(state),
            selectedCategory: (0, _selectors.getSelectedCategory)(state),
            matchToData: (0, _selectors.getMatchToDataList)(state),
            initiallyFiltered: (0, _selectors.getInitiallyFiltered)(state),
            isModal: false,
            productsFilter: (0, _selectors.getProductsFilter)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            reloadTree: function reloadTree(page) {
                return dispatch((0, _filter.getFilteredProductTree)(page));
            },
            getMatchToData: function getMatchToData() {
                return dispatch((0, _filter.getMatchToData)());
            },
            reloadMatchToFilter: function reloadMatchToFilter() {
                return dispatch((0, _filter.reloadMatchToFilter)());
            },
            getCategories: function getCategories(initCategory) {
                return dispatch((0, _filter.getProductsTree)(initCategory));
            },
            changeCategory: function changeCategory(category) {
                return dispatch((0, _app.changeCategory)(category));
            },
            getFilters: function getFilters(selectedCategory) {
                return dispatch((0, _filter.getFilters)(selectedCategory));
            },
            fetchConfiguration: function fetchConfiguration(initProducer, initCategory, initFilters) {
                return dispatch((0, _filter.fetchFilterConfiguration)(initProducer, initCategory, initFilters));
            },
            getFilteredList: function getFilteredList() {
                return dispatch((0, _filter.getFilteredProductList)());
            },
            clearAttrFilters: function clearAttrFilters() {
                return dispatch((0, _filter.clearAttrsFilters)());
            },
            setSelectedProducer: function setSelectedProducer(selectedProducer) {
                return dispatch((0, _filter.setSelectedProducer)(selectedProducer));
            },
            changePriceFilter: function changePriceFilter(type, price) {
                return dispatch((0, _filter.changePriceFilter)(type, price));
            },
            changeStickerFilter: function changeStickerFilter(value) {
                return dispatch((0, _filter.changeStickerFilter)(value));
            },
            changeFilterAttribute: function changeFilterAttribute(element, parent, multiValue, operation) {
                return dispatch((0, _filter.changeFilterAttribute)(element, parent, multiValue, operation));
            },
            changeFilterNumberAttribute: function(_changeFilterNumberAttribute) {
                function changeFilterNumberAttribute(_x, _x2, _x3) {
                    return _changeFilterNumberAttribute.apply(this, arguments);
                }

                changeFilterNumberAttribute.toString = function() {
                    return _changeFilterNumberAttribute.toString();
                };

                return changeFilterNumberAttribute;
            }(function(type, value, element) {
                return dispatch(changeFilterNumberAttribute(type, value, element));
            }),
            changeCurrentPage: function changeCurrentPage(page) {
                return dispatch((0, _filter.changeCurrentPageProps)(page));
            },
            changeEsimFilterAttributeIfAvailable: function changeEsimFilterAttributeIfAvailable(valuesToCheck, initCategory) {
                return dispatch((0, _filter2.changeEsimFilterAttributeIfAvailable)(valuesToCheck, initCategory));
            },
            setProductsFilter: function setProductsFilter(products) {
                return dispatch((0, _filter.setProductsFilter)(products));
            }
        };
    };

    var ProductCategoryTreeComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ProductCategoryTreeView.default);
    var _default = ProductCategoryTreeComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ProductCategoryTreeComponent.js.map