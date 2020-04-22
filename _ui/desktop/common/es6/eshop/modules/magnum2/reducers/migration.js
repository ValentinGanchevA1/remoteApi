import * as ACTIONS from '../actionTypes';
import {
    combineReducers
} from "redux";

export const migrationOffers = (migrationOffers = {}, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_OFFERS_FETCHED:
            return action.payload;
        case ACTIONS.NEXT_MIGRATION_OFFER_FETCHED:
            return action.payload;
        default:
            return migrationOffers;
    }
};

export const migrationOffersFetched = (migrationOffersFetched = false, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_OFFERS_FETCHED:
            return true;
        default:
            return migrationOffersFetched;
    }
};

export const nextMigrationOfferFetched = (nextMigrationOfferFetched = false, action) => {
    switch (action.type) {
        case ACTIONS.NEXT_MIGRATION_OFFER_FETCHED:
            return true;
        case ACTIONS.NEXT_MIGRATION_OFFER_FETCHING:
            return false;
        default:
            return nextMigrationOfferFetched;
    }
};

export const nextMigrationOfferFetching = (nextMigrationOfferFetching = false, action) => {
    switch (action.type) {
        case ACTIONS.NEXT_MIGRATION_OFFER_FETCHING:
            return true;
        case ACTIONS.NEXT_MIGRATION_OFFER_FETCHED:
            return false;
        default:
            return nextMigrationOfferFetching;
    }
}

export const migrationOffersFetching = (migrationOffersFetching = false, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_OFFERS_FETCHING:
            return true;
        case ACTIONS.MIGRATION_OFFERS_FETCHED:
            return false;
        case ACTIONS.MIGRATION_OFFERS_FETCH_ERROR:
            return false;
        default:
            return migrationOffersFetching;
    }
};

export const migrationOffersFetchError = (migrationOffersFetchError = null, action) => {
    switch (action.type) {
        case ACTIONS.MIGRATION_OFFERS_FETCHED:
            return null;
        case ACTIONS.MIGRATION_OFFERS_FETCHING:
            return null;
        case ACTIONS.MIGRATION_OFFERS_FETCH_ERROR:
            return action.payload;
        default:
            return migrationOffersFetchError;
    }
};

export const allMigrationOffersFetched = (allMigrationOffersFetched = null, action) => {
    switch (action.type) {
        case ACTIONS.ALL_MIGRATION_OFFERS_FETCHED:
            return true;
        default:
            return false;
    }
};

export const allMigrationOffersFetching = (allMigrationOffersFetching = false, action) => {
    switch (action.type) {
        case ACTIONS.ALL_MIGRATION_OFFERS_FETCHING:
            return true;
        case ACTIONS.ALL_MIGRATION_OFFERS_FETCHED:
            return false;
        default:
            return allMigrationOffersFetching;
    }
}

export default combineReducers({
    migrationOffers: migrationOffers,
    migrationOffersFetched: migrationOffersFetched,
    migrationOffersFetching: migrationOffersFetching,
    migrationOffersFetchError: migrationOffersFetchError,
    nextMigrationOfferFetching: nextMigrationOfferFetching,
    nextMigrationOfferFetched: nextMigrationOfferFetched,
    allMigrationOffersFetched: allMigrationOffersFetched,
    allMigrationOffersFetching: allMigrationOffersFetching
});