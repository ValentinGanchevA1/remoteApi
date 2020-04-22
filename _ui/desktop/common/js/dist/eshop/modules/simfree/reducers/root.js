define(["exports", "./cart", "./list", "./details", "./offerFilter", "./metaData", "./comparator", "redux"], function(_exports, cart, list, details, offerFilter, metaData, comparator, _redux) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    cart = babelHelpers.interopRequireWildcard(cart);
    list = babelHelpers.interopRequireWildcard(list);
    details = babelHelpers.interopRequireWildcard(details);
    offerFilter = babelHelpers.interopRequireWildcard(offerFilter);
    metaData = babelHelpers.interopRequireWildcard(metaData);
    comparator = babelHelpers.interopRequireWildcard(comparator);

    var _default = (0, _redux.combineReducers)({
        cart: (0, _redux.combineReducers)(cart),
        details: (0, _redux.combineReducers)(details),
        list: (0, _redux.combineReducers)(list),
        offerFilter: (0, _redux.combineReducers)(offerFilter),
        metaData: (0, _redux.combineReducers)(metaData),
        comparator: (0, _redux.combineReducers)(comparator)
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map