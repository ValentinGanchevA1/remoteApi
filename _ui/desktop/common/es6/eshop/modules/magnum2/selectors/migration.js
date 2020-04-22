import {
    createSelector
} from "Reselect";
export const getMigrationState = state => state.magnum.migration;

export const getMigrationBroadbandDescription = createSelector(getMigrationState, migration => migration.migrationOffers.broadbandDescription);
export const getMigrationFtthAvailabilityDate = createSelector(getMigrationState, migration => migration.migrationOffers.ftthAvailabilityDate);
export const getMigrationOffers = createSelector(getMigrationState, migration => migration.migrationOffers.offers);
export const getMigrationOffersFetched = createSelector(getMigrationState, migration => migration.migrationOffersFetched);
export const getMigrationOffersFetching = createSelector(getMigrationState, migration => migration.migrationOffersFetching);
export const getMigrationOffersFetchError = createSelector(getMigrationState, migration => migration.migrationOffersFetchError);

export const getAllMigrationOffersFetched = createSelector(getMigrationState, migration => migration.allMigrationOffersFetched);
export const getAllMigrationOffersFetching = createSelector(getMigrationState, migration => migration.allMigrationOffersFetching);
export const getNextMigrationOfferFetched = createSelector(getMigrationState, migration => migration.nextMigrationOfferFetched);
export const getNextMigrationOfferFetching = createSelector(getMigrationState, migration => migration.nextMigrationOfferFetching);