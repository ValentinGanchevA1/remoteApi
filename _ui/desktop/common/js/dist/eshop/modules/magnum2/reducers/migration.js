define(["exports", "../actionTypes", "redux"], function(_exports, ACTIONS, _redux) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.allMigrationOffersFetching = _exports.allMigrationOffersFetched = _exports.migrationOffersFetchError = _exports.migrationOffersFetching = _exports.nextMigrationOfferFetching = _exports.nextMigrationOfferFetched = _exports.migrationOffersFetched = _exports.migrationOffers = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var migrationOffers = function migrationOffers() {
        var migrationOffers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MIGRATION_OFFERS_FETCHED:
                return action.payload;

            case ACTIONS.NEXT_MIGRATION_OFFER_FETCHED:
                return action.payload;

            default:
                return migrationOffers;
        }
    };

    _exports.migrationOffers = migrationOffers;

    var migrationOffersFetched = function migrationOffersFetched() {
        var migrationOffersFetched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MIGRATION_OFFERS_FETCHED:
                return true;

            default:
                return migrationOffersFetched;
        }
    };

    _exports.migrationOffersFetched = migrationOffersFetched;

    var nextMigrationOfferFetched = function nextMigrationOfferFetched() {
        var nextMigrationOfferFetched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.NEXT_MIGRATION_OFFER_FETCHED:
                return true;

            case ACTIONS.NEXT_MIGRATION_OFFER_FETCHING:
                return false;

            default:
                return nextMigrationOfferFetched;
        }
    };

    _exports.nextMigrationOfferFetched = nextMigrationOfferFetched;

    var nextMigrationOfferFetching = function nextMigrationOfferFetching() {
        var nextMigrationOfferFetching = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.NEXT_MIGRATION_OFFER_FETCHING:
                return true;

            case ACTIONS.NEXT_MIGRATION_OFFER_FETCHED:
                return false;

            default:
                return nextMigrationOfferFetching;
        }
    };

    _exports.nextMigrationOfferFetching = nextMigrationOfferFetching;

    var migrationOffersFetching = function migrationOffersFetching() {
        var migrationOffersFetching = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.migrationOffersFetching = migrationOffersFetching;

    var migrationOffersFetchError = function migrationOffersFetchError() {
        var migrationOffersFetchError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.migrationOffersFetchError = migrationOffersFetchError;

    var allMigrationOffersFetched = function allMigrationOffersFetched() {
        var allMigrationOffersFetched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.ALL_MIGRATION_OFFERS_FETCHED:
                return true;

            default:
                return false;
        }
    };

    _exports.allMigrationOffersFetched = allMigrationOffersFetched;

    var allMigrationOffersFetching = function allMigrationOffersFetching() {
        var allMigrationOffersFetching = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.ALL_MIGRATION_OFFERS_FETCHING:
                return true;

            case ACTIONS.ALL_MIGRATION_OFFERS_FETCHED:
                return false;

            default:
                return allMigrationOffersFetching;
        }
    };

    _exports.allMigrationOffersFetching = allMigrationOffersFetching;

    var _default = (0, _redux.combineReducers)({
        migrationOffers: migrationOffers,
        migrationOffersFetched: migrationOffersFetched,
        migrationOffersFetching: migrationOffersFetching,
        migrationOffersFetchError: migrationOffersFetchError,
        nextMigrationOfferFetching: nextMigrationOfferFetching,
        nextMigrationOfferFetched: nextMigrationOfferFetched,
        allMigrationOffersFetched: allMigrationOffersFetched,
        allMigrationOffersFetching: allMigrationOffersFetching
    });

    _exports.default = _default;
});
//# sourceMappingURL=migration.js.map