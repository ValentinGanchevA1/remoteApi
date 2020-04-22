define(["exports", "react", "react-redux", "../../selectors", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/components/filter/StickerFilterView"], function(_exports, _react, _reactRedux, _selectors, _filter, _StickerFilterView) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _react = babelHelpers.interopRequireDefault(_react);
    _StickerFilterView = babelHelpers.interopRequireDefault(_StickerFilterView);

    var mapStateToProps = function mapStateToProps(state) {
        return {
            filterConfiguration: (0, _selectors.getFilterConfiguration)(state),
            filters: (0, _selectors.getActualStickerFilters)(state),
            selectedFilters: (0, _selectors.getSelectedFilter)(state),
            selectedStickerFilters: (0, _selectors.getSelectedStickerFilter)(state),
            selectedProducer: (0, _selectors.getSelectedProducer)(state),
            isModal: false
        };
    };

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            reloadTree: function reloadTree(page) {
                return dispatch((0, _filter.getFilteredProductTreeWithoutReloadStickers)(page));
            },
            setSelectedProducer: function setSelectedProducer(selectedProducer) {
                return dispatch((0, _filter.setSelectedProducer)(selectedProducer));
            },
            getFilteredList: function getFilteredList(page) {
                return dispatch((0, _filter.getFilteredProductList)(page));
            },
            changeStickerFilterAttribute: function changeStickerFilterAttribute(element, parent, multiValue, operation) {
                return dispatch((0, _filter.changeStickerFilterAttribute)(element, parent, multiValue, operation));
            },
            changeStickerFilter: function changeStickerFilter(value) {
                return dispatch((0, _filter.changeStickerFilter)(value));
            },
            clearAttrFilters: function clearAttrFilters() {
                return dispatch((0, _filter.clearAttrsFilters)());
            }
        };
    };

    var StickerFilterComponent = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_StickerFilterView.default);
    var _default = StickerFilterComponent;
    _exports.default = _default;
});
//# sourceMappingURL=StickerFilterComponent.js.map