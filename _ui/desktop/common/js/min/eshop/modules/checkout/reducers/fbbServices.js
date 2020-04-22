define(["exports", "../actionTypes", "lodash"], function(e, s, c) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.selectedServiceInstanceId = e.selectedDesignationNumber = e.fbbServices = void 0, c = babelHelpers.interopRequireDefault(c);
    e.fbbServices = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case s.DO_CHECKOUT_STEP_START:
            case s.DO_CHECKOUT_STEP_DONE:
                return [];
            case s.DO_CHECKOUT_STEP_ERROR:
                var i = (n.results || []).filter(function(e) {
                    return "FBB_SERVICES" === e.category
                }).map(function(e) {
                    return e.details
                });
                return c.default.flatMap(i, function(e) {
                    return e.fixAddressWithServices
                });
            case s.CHECKOUT_FBB_SERVICES_DISMISS:
                return [];
            case s.SET_FBB_SERVICE_DATA:
                return n.payload.fixAddressWithServices || [];
            default:
                return r
        }
    };
    e.selectedDesignationNumber = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case s.SET_SELECTED_DESIGNATION_NUMBER:
                return n.designationNumber;
            default:
                return r
        }
    };
    e.selectedServiceInstanceId = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case s.SET_SELECTED_SERVICE_INSTANCE_ID:
                return n.serviceInstanceId;
            default:
                return r
        }
    }
});
//# sourceMappingURL=fbbServices.js.map