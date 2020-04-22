define(["exports", "Reselect"], function(_exports, _Reselect) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getMetaData = _exports.getCart = _exports.getOffers = _exports.getFiltersState = _exports.getTemplateState = _exports.getConfiguratorState = void 0;

    var getConfiguratorState = function getConfiguratorState(state) {
        return state["configurator"];
    };

    _exports.getConfiguratorState = getConfiguratorState;
    var getTemplateState = (0, _Reselect.createSelector)(getConfiguratorState, function(configurator) {
        return configurator.template;
    });
    _exports.getTemplateState = getTemplateState;
    var getFiltersState = (0, _Reselect.createSelector)(getConfiguratorState, function(configurator) {
        return configurator.filters;
    });
    _exports.getFiltersState = getFiltersState;
    var getOffers = (0, _Reselect.createSelector)(getConfiguratorState, function(configurator) {
        return configurator.offers;
    });
    _exports.getOffers = getOffers;
    var getCart = (0, _Reselect.createSelector)(getConfiguratorState, function(configurator) {
        return configurator.cart;
    });
    _exports.getCart = getCart;
    var getMetaData = (0, _Reselect.createSelector)(getConfiguratorState, function(configurator) {
        return configurator.metaData;
    });
    _exports.getMetaData = getMetaData;
});
//# sourceMappingURL=root.js.map