define(["exports", "lodash"], function(e, o) {
    "use strict";

    function i(e) {
        return e.number ? e.process + e.number : e.process
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.transactionsToSelectOptions = function(e, t) {
        return e && e.map(function(e) {
            var r = t[e.factory + "_" + e.process + "_" + e.subType] || t[e.factory + "_" + e.process] || t[e.factory + "_" + e.subType] || e.processDescription,
                n = e.designationNumber ? " " + e.designationNumber : "",
                s = o.default.template(r)({
                    designationNumber: n,
                    msisdn: e.number
                });
            return {
                value: i(e),
                label: s
            }
        })
    }, e.transactionsToSelectOptionsForSimpleMobile = function(e, t) {
        return e && e.map(function(e) {
            var r = t[e.subType + "_" + e.factory + "_" + e.process] || t[e.factory + "_" + e.process] || e.processDescription,
                n = e.designationNumber ? " " + e.designationNumber : "",
                s = o.default.template(r)({
                    designationNumber: n,
                    msisdn: e.number
                });
            return {
                value: i(e),
                label: s
            }
        })
    }, e.transactionKey = i, e.findTransaction = function(e, r) {
        return e.number && "" !== e.number ? e.process === r.process && e.number === r.number : e.process === r.process
    }, o = babelHelpers.interopRequireDefault(o)
});
//# sourceMappingURL=TransactionHelper.js.map