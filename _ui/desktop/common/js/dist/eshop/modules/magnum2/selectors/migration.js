define(["exports", "Reselect"], function(_exports, _Reselect) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getNextMigrationOfferFetching = _exports.getNextMigrationOfferFetched = _exports.getAllMigrationOffersFetching = _exports.getAllMigrationOffersFetched = _exports.getMigrationOffersFetchError = _exports.getMigrationOffersFetching = _exports.getMigrationOffersFetched = _exports.getMigrationOffers = _exports.getMigrationFtthAvailabilityDate = _exports.getMigrationBroadbandDescription = _exports.getMigrationState = void 0;

    var getMigrationState = function getMigrationState(state) {
        return state.magnum.migration;
    };

    _exports.getMigrationState = getMigrationState;
    var getMigrationBroadbandDescription = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.migrationOffers.broadbandDescription;
    });
    _exports.getMigrationBroadbandDescription = getMigrationBroadbandDescription;
    var getMigrationFtthAvailabilityDate = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.migrationOffers.ftthAvailabilityDate;
    });
    _exports.getMigrationFtthAvailabilityDate = getMigrationFtthAvailabilityDate;
    var getMigrationOffers = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.migrationOffers.offers;
    });
    _exports.getMigrationOffers = getMigrationOffers;
    var getMigrationOffersFetched = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.migrationOffersFetched;
    });
    _exports.getMigrationOffersFetched = getMigrationOffersFetched;
    var getMigrationOffersFetching = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.migrationOffersFetching;
    });
    _exports.getMigrationOffersFetching = getMigrationOffersFetching;
    var getMigrationOffersFetchError = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.migrationOffersFetchError;
    });
    _exports.getMigrationOffersFetchError = getMigrationOffersFetchError;
    var getAllMigrationOffersFetched = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.allMigrationOffersFetched;
    });
    _exports.getAllMigrationOffersFetched = getAllMigrationOffersFetched;
    var getAllMigrationOffersFetching = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.allMigrationOffersFetching;
    });
    _exports.getAllMigrationOffersFetching = getAllMigrationOffersFetching;
    var getNextMigrationOfferFetched = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.nextMigrationOfferFetched;
    });
    _exports.getNextMigrationOfferFetched = getNextMigrationOfferFetched;
    var getNextMigrationOfferFetching = (0, _Reselect.createSelector)(getMigrationState, function(migration) {
        return migration.nextMigrationOfferFetching;
    });
    _exports.getNextMigrationOfferFetching = getNextMigrationOfferFetching;
});
//# sourceMappingURL=migration.js.map