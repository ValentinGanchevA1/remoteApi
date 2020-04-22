define(["exports", "eshop/flux/utils/OraApiUtils"], function(t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;

    function o(t) {
        return bsfContextPath + ("undefined" != typeof prefixWWW ? prefixWWW : "") + t
    }
    var e = {
        logOut: function() {
            return (0, n.get)(o("/koszyk/multi/_data/customer/logout"))
        },
        getLoggedCustomerData: function() {
            return (0, n.get)(o("/customerSmsVerification/loggedCustomerData"))
        },
        pushAccount: function(t) {
            return (0, n.post)(o("/customerSmsVerification/pushAccountByMsisdn"), t)
        },
        selectAccount: function(t) {
            return (0, n.post)(o("/customerSmsVerification/selectAccount"), t)
        },
        getAccount: function(t) {
            return (0, n.get)(o("/customerSmsVerification/getAccount"), t)
        },
        getAccountByCode: function(t) {
            return (0, n.get)(o("/customerSmsVerification/getAccountByCode"), t)
        },
        checkMarketCompatibility: function(t) {
            return (0, n.get)(o("/customerSmsVerification/checkMarketCompatibility"), t)
        },
        lightLogout: function() {
            return (0, n.get)(o("/customerSmsVerification/lightLogout"))
        },
        requestMobileBillingAccounts: function() {
            return (0, n.get)(o("/customerSmsVerification/getMobileAccounts"), {})
        },
        setCimByMsisdn: function(t) {
            return (0, n.post)(o("/customerSmsVerification/setCimByMsisdn"), t)
        },
        setCimByLogin: function(t) {
            return (0, n.post)(o("/customerSmsVerification/setCimByLogin"), t)
        },
        pushVerifiedMsisdn: function(t) {
            return (0, n.post)(o("/customerSmsVerification/pushVerifiedMsisdn"), t)
        },
        setMsisdnOrLogin: function(t) {
            return (0, n.post)(o("/customerSmsVerification/setMsisdnOrLogin"), t)
        },
        checkOfferSelector: function(t) {
            return (0, n.post)(o("/customerSmsVerification/checkOfferSelector"), t)
        },
        requestPeselAndAddressAuth: function(t, e) {
            return (0, n.postJsonObject)(o("/customerAddressVerification/requestPeselAddressVerification/" + e), t)
        },
        isPeselAndAddressedVerified: function(t) {
            var e = o("/customerAddressVerification/isVerified"),
                i = (0 < arguments.length && void 0 !== t ? t : 3e4) / 1e3;
            return (0, n.poll)(e, null, function(t) {
                return "pending" !== t
            }, i, 1e3)
        }
    };
    t.default = e
});
//# sourceMappingURL=remoteApi.js.map