define(["exports", "../actionTypes"], function(e, a) {
    "use strict";

    function n(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function c(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? n(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.metadata = e.error = e.voucherName = e.applicableProducts = e.voucherCode = void 0;
    var o = {
        loading: !1,
        applied: !1
    };
    e.voucherCode = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.CHANGE_VOUCHER_CODE:
                return n.value;
            case a.CLEAR_VOUCHER_DATA:
                return "";
            default:
                return r
        }
    };
    e.applicableProducts = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.FIND_APPLICABLE_PRODUCTS_DONE:
                return n.value.applicableProducts;
            case a.VOUCHER_ERROR:
            case a.CLEAR_VOUCHER_DATA:
                return [];
            default:
                return r
        }
    };
    e.voucherName = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.FIND_APPLICABLE_PRODUCTS_DONE:
                return n.value.voucherName;
            case a.VOUCHER_ERROR:
            case a.CLEAR_VOUCHER_DATA:
                return "";
            default:
                return r
        }
    };
    e.error = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case a.VOUCHER_ERROR:
                return n.value;
            case a.CLEAR_VOUCHER_DATA:
            case a.CHANGE_VOUCHER_CODE:
                return "";
            default:
                return r
        }
    };
    e.metadata = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : o;
        switch ((1 < arguments.length ? t : void 0).type) {
            case a.FIND_APPLICABLE_PRODUCTS_DONE:
            case a.VOUCHER_ERROR:
                return c({}, r, {
                    loading: !1
                });
            case a.FIND_APPLICABLE_PRODUCTS_START:
            case a.APPLY_VOUCHER_START:
                return c({}, r, {
                    loading: !0
                });
            case a.APPLY_VOUCHER_DONE:
                return c({}, r, {
                    loading: !1,
                    applied: !0
                });
            case a.CLEAR_VOUCHER_DATA:
                return c({}, r, {
                    loading: !1,
                    applied: !1
                });
            default:
                return r
        }
    }
});
//# sourceMappingURL=voucher.js.map