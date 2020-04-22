define(["exports", "../actionTypes"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.serviceDetailsFetched = e.serviceDetailsLoading = e.serviceDetails = e.customerServicesList = void 0, n = babelHelpers.interopRequireWildcard(n);
    e.customerServicesList = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case n.GET_CUSTOMER_SERVICES_LIST:
                return r.payload;
            default:
                return i
        }
    };
    e.serviceDetails = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : {},
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case n.SERVICE_DETAILS_FETCHED:
                return r.payload || {};
            default:
                return i
        }
    };
    e.serviceDetailsLoading = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case n.SERVICE_DETAILS_FETCHING:
                return !0;
            case n.SERVICE_DETAILS_FETCHED:
                return !1;
            default:
                return i
        }
    };
    e.serviceDetailsFetched = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case n.SERVICE_DETAILS_FETCHED:
                return !0;
            default:
                return i
        }
    }
});
//# sourceMappingURL=customerServices.js.map