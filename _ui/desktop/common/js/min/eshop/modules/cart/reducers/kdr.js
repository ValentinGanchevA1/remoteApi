define(["exports", "../actionTypes"], function(e, R) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.saving = e.error = e.accepted = e.kdrSource = e.kdrNumber = void 0, R = babelHelpers.interopRequireWildcard(R);
    e.kdrNumber = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? r : void 0;
        switch (n.type) {
            case R.KDR_NUMBER_CHANGE:
                return n.payload;
            case R.KDR_CART_DATA:
                return n.payload.number;
            case R.KDR_NUMBER_CLEAR:
                return "";
            default:
                return t
        }
    };
    e.kdrSource = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? r : void 0;
        switch (n.type) {
            case R.KDR_CART_DATA:
                return n.payload.source;
            case R.KDR_NUMBER_CLEAR:
                return "";
            case R.KDR_NUMBER_CHANGE:
                return "input";
            default:
                return t
        }
    };
    e.accepted = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? r : void 0;
        switch (n.type) {
            case R.KDR_CART_DATA:
                return !!n.payload && !!n.payload.number;
            case R.KDR_NUMBER_APPROVE:
                return !0;
            case R.KDR_NUMBER_CHANGE:
            case R.KDR_NUMBER_CLEAR:
            case R.KDR_ERROR:
                return !1;
            default:
                return t
        }
    };
    e.error = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? r : void 0;
        switch (n.type) {
            case R.KDR_ERROR:
                return n.value;
            case R.KDR_NUMBER_APPROVE:
            case R.KDR_NUMBER_CHANGE:
            case R.KDR_NUMBER_CLEAR:
            case R.KDR_CART_DATA:
                return {};
            default:
                return t
        }
    };
    e.saving = function(e, r) {
        var t = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? r : void 0).type) {
            case R.KDR_SAVING:
                return !0;
            case R.KDR_SAVED:
            case R.KDR_ERROR:
                return !1;
            default:
                return t
        }
    }
});
//# sourceMappingURL=kdr.js.map