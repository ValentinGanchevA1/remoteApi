define(["exports", "../actionTypes"], function(e, a) {
    "use strict";

    function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.phoneContactDAP = e.shouldRefresh = e.showSelectedSlotError = e.selectedSlotDisplayText = e.loading = e.selectedInstallationTimeSlot = e.comment = e.availableTimeSlots = void 0;
    var l = {
        dates: [],
        slots: [],
        additionalData: {
            standard: {},
            installationAddress: {}
        }
    };
    e.availableTimeSlots = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : l,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
                return n.data;
            default:
                return r
        }
    };
    e.comment = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.CHANGE_INSTALLATION_COMMENT:
                return n.payload;
            default:
                return r
        }
    };
    e.selectedInstallationTimeSlot = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.SELECT_INSTALLATION_TIME_SLOT:
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, r, {
                    startDate: n.data.startDate,
                    endDate: n.data.endDate
                });
            default:
                return r
        }
    };
    e.loading = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case a.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
                return !1;
            case a.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START:
                return !0;
            default:
                return r
        }
    };
    e.selectedSlotDisplayText = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.SELECT_INSTALLATION_SLOT_DESCRIPTION:
                return n.payload;
            default:
                return r
        }
    };
    e.showSelectedSlotError = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.SHOW_INSTALLATION_SLOT_ERROR:
                return n.payload;
            default:
                return r
        }
    };
    e.shouldRefresh = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.INSTALLATION_SLOT_FORCE_REFRESH:
                return n.payload;
            default:
                return r
        }
    };
    e.phoneContactDAP = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.UPDATE_DAP_PHONE_NUMBER:
                return n.data.phoneContact;
            case a.GET_CART_CUSTOMER_DONE:
                return n.data.phoneNumber;
            default:
                return r
        }
    }
});
//# sourceMappingURL=installation.js.map