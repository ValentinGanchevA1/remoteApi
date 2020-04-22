define(["exports", "../actionTypes", "eshop/modules/checkout/actionTypes", "eshop/utils/OnlineUtils"], function(e, l, u, c) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.errors = e.invoiceEmailMapping = e.invoiceEmail = void 0, l = babelHelpers.interopRequireWildcard(l), c = babelHelpers.interopRequireDefault(c);
    e.invoiceEmail = function(e, i) {
        var t = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? i : void 0;
        switch (n.type) {
            case l.INVOICE_EMAIL_CHANGE:
                return n.value;
            default:
                return t
        }
    };

    function s() {
        return "invoiceEmailMapping." + c.default.getCookie("telco-cart")
    }
    e.invoiceEmailMapping = function(e, i) {
        var t, n, o, r = 0 < arguments.length && void 0 !== e ? e : "invoiceEmail",
            a = 1 < arguments.length ? i : void 0;
        switch (a.type) {
            case l.INVOICE_EMAIL_MAPPING_CHANGE:
                return n = a.payload, o = s(), c.default.saveInSessionStorage(o, n), a.payload;
            case u.GET_CART_CUSTOMER_DONE:
                return t = s(), c.default.loadFromSessionStorage(t) || "invoiceEmail";
            default:
                return r
        }
    };
    e.errors = function(e, i) {
        var t = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? i : void 0;
        switch (n.type) {
            case l.INVOICE_EMAIL_CHANGE:
                return n.errors;
            default:
                return t
        }
    }
});
//# sourceMappingURL=invoiceData.js.map