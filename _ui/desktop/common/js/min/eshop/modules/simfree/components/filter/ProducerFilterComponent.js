define(["exports", "react", "react-redux", "../../selectors", "eshop/modules/simfree/actions/filter", "eshop/modules/simfree/components/filter/ProducerFilterView"], function(e, t, r, o, i, u) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), u = babelHelpers.interopRequireDefault(u);
    var n = (0, r.connect)(function(e) {
        return {
            filterConfiguration: (0, o.getFilterConfiguration)(e),
            selectedProducer: (0, o.getSelectedProducer)(e)
        }
    }, function(t) {
        return {
            reloadMatchToFilter: function() {
                return t((0, i.reloadMatchToFilter)())
            },
            reloadTree: function(e) {
                return t((0, i.getFilteredProductTree)(e))
            },
            setSelectedProducer: function(e) {
                return t((0, i.setSelectedProducer)(e))
            },
            getFilteredList: function(e) {
                return t((0, i.getFilteredProductList)(e))
            },
            clearAttrFilters: function() {
                return t((0, i.clearAttrsFilters)())
            }
        }
    })(u.default);
    e.default = n
});
//# sourceMappingURL=ProducerFilterComponent.js.map