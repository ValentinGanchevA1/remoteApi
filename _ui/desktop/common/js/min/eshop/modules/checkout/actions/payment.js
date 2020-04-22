define(["exports", "../remoteApi", "../actionTypes", "../selectors"], function(e, u, n, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.selectPaymentMethod = e.updatePaymentMethod = e.fetchCartPayment = void 0, u = babelHelpers.interopRequireDefault(u), n = babelHelpers.interopRequireWildcard(n);
    e.fetchCartPayment = function() {
        return function(a) {
            return new Promise(function(r, t) {
                a(i()), u.default.getCartPayment().then(function(e) {
                    var t = e && 0 < e.length ? e[0].paymentMethod : null,
                        n = e && 0 < e.length ? e[0].eligCode : null;
                    a(o(t, n)), a(c()), r(e)
                }).catch(function(e) {
                    t(e)
                })
            })
        }
    };
    e.updatePaymentMethod = function(n, r) {
        return function(e, t) {
            e(o(n, r)), u.default.updateCartPayment((0, a.getPaymentCheckoutData)(t()))
        }
    };
    var o = function(e, t) {
        return {
            type: n.SELECT_PAYMENT_METHOD,
            code: e,
            eligCode: t
        }
    };
    e.selectPaymentMethod = o;
    var i = function() {
            return {
                type: n.GET_PAYMENT_DATA_START
            }
        },
        c = function() {
            return {
                type: n.GET_PAYMENT_DATA_DONE
            }
        }
});
//# sourceMappingURL=payment.js.map