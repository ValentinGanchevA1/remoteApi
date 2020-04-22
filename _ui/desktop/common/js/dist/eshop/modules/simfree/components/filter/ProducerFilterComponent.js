define(["exports", "react", "react-redux", "../../selectors", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/components/filter/ProducerFilterView"], function(_exports, _react, _reactRedux, _selectors, _filter, _ProducerFilterView) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _ProducerFilterView = babelHelpers.interopRequireDefault(_ProducerFilterView);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            filterConfiguration: (0, _selectors.getFilterConfiguration)(state),
            selectedProducer: (0, _selectors.getSelectedProducer)(state)
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            reloadMatchToFilter: function reloadMatchToFilter() {
                return dispatch((0, _filter.reloadMatchToFilter)());
            },
            reloadTree: function reloadTree(page) {
                return dispatch((0, _filter.getFilteredProductTree)(page));
            },
            setSelectedProducer: function setSelectedProducer(selectedProducer) {
                return dispatch((0, _filter.setSelectedProducer)(selectedProducer));
            },
            getFilteredList: function getFilteredList(page) {
                return dispatch((0, _filter.getFilteredProductList)(page));
            },
            clearAttrFilters: function clearAttrFilters() {
                return dispatch((0, _filter.clearAttrsFilters)());
            }
        };
    };

    var ProducerFilterComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_ProducerFilterView.default);
    var _default = ProducerFilterComponent;
    _exports.default = _default;
});
//# sourceMappingURL=ProducerFilterComponent.js.map