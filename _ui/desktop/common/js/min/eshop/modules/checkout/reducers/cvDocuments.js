define(["exports", "../actionTypes"], function(e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.errors = e.customerWorkPhoneNumber = e.selectedCustomerAdditionalDocument = e.cvDocumentsList = void 0;
    e.cvDocumentsList = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            o = 1 < arguments.length ? t : void 0;
        switch (o.type) {
            case n.SELECT_CV_DOCUMENTS_LIST:
                return o.payload;
            default:
                return r
        }
    };
    e.selectedCustomerAdditionalDocument = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            o = 1 < arguments.length ? t : void 0;
        switch (o.type) {
            case n.SELECT_CV_DOCUMENT:
                return o.documentCode;
            default:
                return r
        }
    };
    e.customerWorkPhoneNumber = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : "",
            o = 1 < arguments.length ? t : void 0;
        switch (o.type) {
            case n.SELECT_CUSTOMER_WORK_PHONE_NUMBER:
                return o.phoneNumber;
            default:
                return r
        }
    };
    e.errors = function(e, t) {
        var r = 0 < arguments.length && void 0 !== e ? e : {},
            o = 1 < arguments.length ? t : void 0;
        switch (o.type) {
            case n.SELECT_CUSTOMER_WORK_PHONE_NUMBER:
                return {
                    customerWorkPhoneNumber: o.errors
                };
            default:
                return r
        }
    }
});
//# sourceMappingURL=cvDocuments.js.map