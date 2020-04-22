define(["exports", "redux", "./items", "./itemsUnfiltered", "./links", "./metadata"], function(_exports, _redux, _items, _itemsUnfiltered, _links, metadata) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _items = babelHelpers.interopRequireDefault(_items);
    _itemsUnfiltered = babelHelpers.interopRequireDefault(_itemsUnfiltered);
    _links = babelHelpers.interopRequireDefault(_links);
    metadata = babelHelpers.interopRequireWildcard(metadata);

    var _default = (0, _redux.combineReducers)({
        items: _items.default,
        itemsUnfiltered: _itemsUnfiltered.default,
        links: _links.default,
        metadata: (0, _redux.combineReducers)(metadata)
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map