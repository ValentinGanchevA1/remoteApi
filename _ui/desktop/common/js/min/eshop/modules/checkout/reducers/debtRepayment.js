define(["exports", "../actionTypes", "../../cart/actionTypes"], function(e, o, c) {
    "use strict";

    function i(t, e) {
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
    }), e.show = e.data = void 0;
    var a = {
        receiptNumber: "",
        amount: ""
    };
    e.data = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : a,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case o.CHANGE_DEBT_REPAYMENT_FORM_FIELD:
                return function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(r), !0).forEach(function(e) {
                            babelHelpers.defineProperty(t, e, r[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        })
                    }
                    return t
                }({}, r, babelHelpers.defineProperty({}, n.name, n.value));
            default:
                return r
        }
    };
    e.show = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case c.FETCH_MINI_CART:
                return n.payload.showDebtRepaymentForm;
            default:
                return r
        }
    }
});
//# sourceMappingURL=debtRepayment.js.map