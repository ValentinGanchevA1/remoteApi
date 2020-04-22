define(["exports", "./template", "./filters", "./offers", "./cart", "./metaData", "redux"], function(_exports, template, filters, offers, cart, metaData, _redux) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    template = babelHelpers.interopRequireWildcard(template);
    filters = babelHelpers.interopRequireWildcard(filters);
    offers = babelHelpers.interopRequireWildcard(offers);
    cart = babelHelpers.interopRequireWildcard(cart);
    metaData = babelHelpers.interopRequireWildcard(metaData);

    var _default = (0, _redux.combineReducers)({
        template: (0, _redux.combineReducers)(template),
        filters: (0, _redux.combineReducers)(filters),
        offers: (0, _redux.combineReducers)(offers),
        cart: (0, _redux.combineReducers)(cart),
        metaData: (0, _redux.combineReducers)(metaData)
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map