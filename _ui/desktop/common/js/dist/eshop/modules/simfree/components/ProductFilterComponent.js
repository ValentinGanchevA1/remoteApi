define(["exports", "react", "react-redux", "../selectors", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/components/ProductFilterView"], function(_exports, _react, _reactRedux, _selectors, _filter, _ProductFilterView) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProductFilterView = babelHelpers.interopRequireDefault(_ProductFilterView);

    var mapStateToProps = function mapStateToProps(state, ownProps) {
        return {
            selectedCategory: (0, _selectors.getSelectedCategory)(state),
            filters: (0, _selectors.getActualFilters)(state),
            selectedPrice: (0, _selectors.getSelectedPrice)(state),
            selectedFilters: (0, _selectors.getSelectedFilter)(state),
            matchToData: (0, _selectors.getMatchToDataList)(state),
            products: (0, _selectors.getProductListWrapper)(state),
            selectedNumberFilters: (0, _selectors.getSelectedNumberFilter)(state),
            isSalesOfGoodsPage: (0, _selectors.getIsSalesOfGoodsPage)(state),
            queryParams: ownProps.queryParams,
            isModal: false
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            reloadTree: function reloadTree(page) {
                return dispatch((0, _filter.getFilteredProductTree)(page));
            },
            getFilters: function getFilters(selectedCategory) {
                return dispatch((0, _filter.getFilters)(selectedCategory));
            },
            changeFilterAttribute: function changeFilterAttribute(element, parent, multiValue, operation) {
                return dispatch((0, _filter.changeFilterAttribute)(element, parent, multiValue, operation));
            },
            changeFilterNumberAttribute: function changeFilterNumberAttribute(type, value, element) {
                return dispatch((0, _filter.changeFilterNumberAttribute)(type, value, element));
            },
            changePriceFilter: function changePriceFilter(type, price) {
                return dispatch((0, _filter.changePriceFilter)(type, price));
            },
            changeStickerFilter: function changeStickerFilter(value) {
                return dispatch((0, _filter.changeStickerFilter)(value));
            },
            getMatchToData: function getMatchToData() {
                return dispatch((0, _filter.getMatchToData)());
            },
            setSelectedModel: function setSelectedModel(selectedModel, checked) {
                return dispatch((0, _filter.setSelectedModel)(selectedModel, checked));
            },
            setSelectedRecomendedProducer: function setSelectedRecomendedProducer(selectedProducer, checked) {
                return dispatch((0, _filter.setSelectedRecomendedProducer)(selectedProducer, checked));
            },
            getFilteredList: function getFilteredList(page) {
                return dispatch((0, _filter.getFilteredProductList)(page));
            },
            clearMatchToFilters: function clearMatchToFilters() {
                return dispatch((0, _filter.clearMatchToFilters)());
            },
            reloadMatchToFilter: function reloadMatchToFilter() {
                return dispatch((0, _filter.reloadMatchToFilter)());
            }
        };
    };

    var ProductFilterComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ProductFilterView.default);
    var _default = ProductFilterComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ProductFilterComponent.js.map