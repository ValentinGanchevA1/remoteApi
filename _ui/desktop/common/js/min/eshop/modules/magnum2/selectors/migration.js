define(["exports", "Reselect"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getNextMigrationOfferFetching = e.getNextMigrationOfferFetched = e.getAllMigrationOffersFetching = e.getAllMigrationOffersFetched = e.getMigrationOffersFetchError = e.getMigrationOffersFetching = e.getMigrationOffersFetched = e.getMigrationOffers = e.getMigrationFtthAvailabilityDate = e.getMigrationBroadbandDescription = e.getMigrationState = void 0;

    function r(e) {
        return e.magnum.migration
    }
    e.getMigrationState = r;
    var i = (0, t.createSelector)(r, function(e) {
        return e.migrationOffers.broadbandDescription
    });
    e.getMigrationBroadbandDescription = i;
    var n = (0, t.createSelector)(r, function(e) {
        return e.migrationOffers.ftthAvailabilityDate
    });
    e.getMigrationFtthAvailabilityDate = n;
    var a = (0, t.createSelector)(r, function(e) {
        return e.migrationOffers.offers
    });
    e.getMigrationOffers = a;
    var f = (0, t.createSelector)(r, function(e) {
        return e.migrationOffersFetched
    });
    e.getMigrationOffersFetched = f;
    var o = (0, t.createSelector)(r, function(e) {
        return e.migrationOffersFetching
    });
    e.getMigrationOffersFetching = o;
    var g = (0, t.createSelector)(r, function(e) {
        return e.migrationOffersFetchError
    });
    e.getMigrationOffersFetchError = g;
    var c = (0, t.createSelector)(r, function(e) {
        return e.allMigrationOffersFetched
    });
    e.getAllMigrationOffersFetched = c;
    var l = (0, t.createSelector)(r, function(e) {
        return e.allMigrationOffersFetching
    });
    e.getAllMigrationOffersFetching = l;
    var s = (0, t.createSelector)(r, function(e) {
        return e.nextMigrationOfferFetched
    });
    e.getNextMigrationOfferFetched = s;
    var u = (0, t.createSelector)(r, function(e) {
        return e.nextMigrationOfferFetching
    });
    e.getNextMigrationOfferFetching = u
});
//# sourceMappingURL=migration.js.map