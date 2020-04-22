define(["exports", "eshop/modules/auth/components/MulticartCustomerSmsVerificationComponent", "eshop/modules/auth/components/MulticartMessageComponentView", "eshop/modules/auth/components/NewCustomerBanner", "eshop/modules/auth/actions/authorization", "eshop/modules/auth/selectors/authorization", "./../main"], function(_exports, _MulticartCustomerSmsVerificationComponent, _MulticartMessageComponentView, _NewCustomerBanner, actions, selectors, _main) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _MulticartCustomerSmsVerificationComponent = babelHelpers.interopRequireDefault(_MulticartCustomerSmsVerificationComponent);
    _MulticartMessageComponentView = babelHelpers.interopRequireDefault(_MulticartMessageComponentView);
    _NewCustomerBanner = babelHelpers.interopRequireDefault(_NewCustomerBanner);
    actions = babelHelpers.interopRequireWildcard(actions);
    selectors = babelHelpers.interopRequireWildcard(selectors);
    _main = babelHelpers.interopRequireDefault(_main);
    var _default = {
        MulticartCustomerSmsVerificationComponent: _MulticartCustomerSmsVerificationComponent.default,
        MulticartMessageComponentView: _MulticartMessageComponentView.default,
        NewCustomerBanner: _NewCustomerBanner.default,
        actions: actions,
        selectors: selectors
    };
    _exports.default = _default;
});
//# sourceMappingURL=WebPackIndex.js.map