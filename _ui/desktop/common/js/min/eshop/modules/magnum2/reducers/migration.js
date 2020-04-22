define(["exports", "../actionTypes", "redux"], function(e, r, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.allMigrationOffersFetching = e.allMigrationOffersFetched = e.migrationOffersFetchError = e.migrationOffersFetching = e.nextMigrationOfferFetching = e.nextMigrationOfferFetched = e.migrationOffersFetched = e.migrationOffers = void 0, r = babelHelpers.interopRequireWildcard(r);

    function n() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case r.MIGRATION_OFFERS_FETCHED:
            case r.NEXT_MIGRATION_OFFER_FETCHED:
                return t.payload;
            default:
                return e
        }
    }
    e.migrationOffers = n;

    function i() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case r.MIGRATION_OFFERS_FETCHED:
                return !0;
            default:
                return e
        }
    }
    e.migrationOffersFetched = i;

    function a() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case r.NEXT_MIGRATION_OFFER_FETCHED:
                return !0;
            case r.NEXT_MIGRATION_OFFER_FETCHING:
                return !1;
            default:
                return e
        }
    }
    e.nextMigrationOfferFetched = a;

    function f() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case r.NEXT_MIGRATION_OFFER_FETCHING:
                return !0;
            case r.NEXT_MIGRATION_OFFER_FETCHED:
                return !1;
            default:
                return e
        }
    }
    e.nextMigrationOfferFetching = f;

    function F() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case r.MIGRATION_OFFERS_FETCHING:
                return !0;
            case r.MIGRATION_OFFERS_FETCHED:
            case r.MIGRATION_OFFERS_FETCH_ERROR:
                return !1;
            default:
                return e
        }
    }
    e.migrationOffersFetching = F;

    function c() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case r.MIGRATION_OFFERS_FETCHED:
            case r.MIGRATION_OFFERS_FETCHING:
                return null;
            case r.MIGRATION_OFFERS_FETCH_ERROR:
                return t.payload;
            default:
                return e
        }
    }
    e.migrationOffersFetchError = c;

    function o() {
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case r.ALL_MIGRATION_OFFERS_FETCHED:
                return !0;
            default:
                return !1
        }
    }
    e.allMigrationOffersFetched = o;

    function O() {
        var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
        switch ((1 < arguments.length ? arguments[1] : void 0).type) {
            case r.ALL_MIGRATION_OFFERS_FETCHING:
                return !0;
            case r.ALL_MIGRATION_OFFERS_FETCHED:
                return !1;
            default:
                return e
        }
    }
    e.allMigrationOffersFetching = O;
    var E = (0, t.combineReducers)({
        migrationOffers: n,
        migrationOffersFetched: i,
        migrationOffersFetching: F,
        migrationOffersFetchError: c,
        nextMigrationOfferFetching: f,
        nextMigrationOfferFetched: a,
        allMigrationOffersFetched: o,
        allMigrationOffersFetching: O
    });
    e.default = E
});
//# sourceMappingURL=migration.js.map