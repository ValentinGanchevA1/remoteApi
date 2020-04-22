define(["exports", "react-redux", "eshop/modules/cart/actions/cart", "eshop/modules/cart/components/MulticartSummaryComponent", "../selectors", "eshop/modules/checkout/selectors"], function(_exports, _reactRedux, _cart, _MulticartSummaryComponent, _selectors, _selectors2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _MulticartSummaryComponent = babelHelpers.interopRequireDefault(_MulticartSummaryComponent);

    var mapDispatchToProps = function mapDispatchToProps(dispatch) {
        return {
            fetchCart: function fetchCart() {
                return dispatch((0, _cart.fetchCart)());
            },
            fetchMiniCart: function fetchMiniCart() {
                return dispatch((0, _cart.fetchMiniCart)());
            }
        };
    };

    var mapStateToProps = function mapStateToProps(state) {
        return {
            updating: (0, _selectors2.getModifyConsentsInCartQueue)(state).length > 0 || (0, _selectors2.updatingAnyConsent)(state),
            entryType: (0, _selectors.getEntryType)(state),
            hasCartData: (0, _selectors.getHasCartData)(state)
        };
    };

    var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_MulticartSummaryComponent.default);

    _exports.default = _default;
});
//# sourceMappingURL=MulticartSummaryContainer.js.map