define(["exports", "redux", "./customerServices", "./metaData", "./offers", "./kna", "./errors", "./documents", "./migration", "./voip", "./filter"], function(_exports, _redux, customerServices, metaData, offers, kna, errors, documents, migration, voip, _filter) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    customerServices = babelHelpers.interopRequireWildcard(customerServices);
    metaData = babelHelpers.interopRequireWildcard(metaData);
    offers = babelHelpers.interopRequireWildcard(offers);
    kna = babelHelpers.interopRequireWildcard(kna);
    errors = babelHelpers.interopRequireWildcard(errors);
    documents = babelHelpers.interopRequireWildcard(documents);
    migration = babelHelpers.interopRequireWildcard(migration);
    voip = babelHelpers.interopRequireWildcard(voip);

    var _default = (0, _redux.combineReducers)({
        customerServices: (0, _redux.combineReducers)(customerServices),
        offers: (0, _redux.combineReducers)(offers),
        metaData: (0, _redux.combineReducers)(metaData),
        kna: (0, _redux.combineReducers)(kna),
        errors: (0, _redux.combineReducers)(errors),
        pageContext: _filter.pageContext,
        filterLP: _filter.filterLP,
        documents: (0, _redux.combineReducers)(documents),
        migration: (0, _redux.combineReducers)(migration),
        voip: (0, _redux.combineReducers)(voip)
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map