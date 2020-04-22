define(["exports", "Reselect"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getMetaData = e.getCart = e.getOffers = e.getFiltersState = e.getTemplateState = e.getConfiguratorState = void 0;

    function r(e) {
        return e.configurator
    }
    e.getConfiguratorState = r;
    var a = (0, t.createSelector)(r, function(e) {
        return e.template
    });
    e.getTemplateState = a;
    var n = (0, t.createSelector)(r, function(e) {
        return e.filters
    });
    e.getFiltersState = n;
    var o = (0, t.createSelector)(r, function(e) {
        return e.offers
    });
    e.getOffers = o;
    var c = (0, t.createSelector)(r, function(e) {
        return e.cart
    });
    e.getCart = c;
    var f = (0, t.createSelector)(r, function(e) {
        return e.metaData
    });
    e.getMetaData = f
});
//# sourceMappingURL=root.js.map