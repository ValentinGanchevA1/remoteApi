define(["exports", "../actionTypes", "../enum/VoipVariant"], function(e, a, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.designationNumber = e.selectionInProgress = e.numbersFetching = e.numbersFetched = e.selectedVoipNumber = e.designationNumbers = e.voipNumbers = e.showNumbersModal = e.showVariantModal = e.variant = void 0, a = babelHelpers.interopRequireWildcard(a), i = babelHelpers.interopRequireDefault(i);
    e.variant = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e ? e : i.default.NEW_VOIP,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.VOIP_VARIANT:
                return r.payload;
            case a.DUPLICATE_ORDER_RESET:
                return i.default.NEW_VOIP;
            default:
                return n
        }
    };
    e.showVariantModal = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.VOIP_SELECTION:
            case a.SHOW_VOIP_VARIANT_MODAL:
                return r.payload;
            default:
                return n
        }
    };
    e.showNumbersModal = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.VOIP_SELECTION:
            case a.SHOW_VOIP_NUMBERS_MODAL:
                return r.payload;
            default:
                return n
        }
    };
    e.voipNumbers = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.SAVE_VOIP_NUMBERS:
                return t.payload && t.payload.voipNumbers || [];
            default:
                return e
        }
    };
    e.designationNumbers = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.SAVE_VOIP_NUMBERS:
                return t.payload && t.payload.designationNumbers || [];
            default:
                return e
        }
    };
    e.selectedVoipNumber = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.SELECT_VOIP_NUMBER:
                return t.payload;
            default:
                return e
        }
    };
    e.numbersFetched = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.VOIP_NUMBERS_FETCHED:
                return r.payload;
            default:
                return n
        }
    };
    e.numbersFetching = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.VOIP_NUMBERS_FETCHING:
                return r.payload;
            default:
                return n
        }
    };
    e.selectionInProgress = function(e, t) {
        var n = 0 < arguments.length && void 0 !== e && e,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case a.VOIP_SELECTION:
                return r.payload;
            default:
                return n
        }
    };
    e.designationNumber = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            t = 1 < arguments.length ? arguments[1] : void 0;
        switch (t.type) {
            case a.DESIGNATION_NUMBER:
                return t.payload;
            default:
                return e
        }
    }
});
//# sourceMappingURL=voip.js.map