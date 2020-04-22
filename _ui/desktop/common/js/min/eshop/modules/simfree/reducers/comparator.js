define(["exports", "../actionTypes"], function(e, o) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.errorCode = e.isComparatorCategory = e.selectedModel = e.selectedProducer = e.producers = e.deviceBrands = e.modelsForBrand = e.comparatorConfig = e.devices = void 0, o = babelHelpers.interopRequireWildcard(o);
    e.devices = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.UPDATE_COMPARATOR_DEVICES:
                return n.payload;
            default:
                return r
        }
    };
    e.comparatorConfig = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.FETCH_COMPARATOR_CONFIG:
                return n.payload;
            default:
                return r
        }
    };
    e.modelsForBrand = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.FETCH_MODELS_FOR_BRAND:
                return n.payload;
            case o.CLEAR_MODELS_FOR_BRAND:
                return [];
            default:
                return r
        }
    };
    e.deviceBrands = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.FETCH_DEVICE_BRANDS:
                return n.payload;
            default:
                return r
        }
    };
    e.producers = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.FETCH_PRODUCERS:
                return n.payload;
            default:
                return r
        }
    };
    e.selectedProducer = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.GET_SELECTED_PRODUCER:
                return n.payload;
            default:
                return r
        }
    };
    e.selectedModel = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.GET_SELECTED_MODEL:
                return n.payload;
            default:
                return r
        }
    };
    e.isComparatorCategory = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SET_IS_COMPARATOR_CATEGORY:
                return n.value;
            default:
                return r
        }
    };
    e.errorCode = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : 0,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.SET_COMPARATOR_ERROR_CODE:
                return n.value;
            default:
                return r
        }
    }
});
//# sourceMappingURL=comparator.js.map