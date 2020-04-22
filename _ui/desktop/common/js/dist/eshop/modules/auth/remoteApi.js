define(["exports", "eshop/flux/utils/OraApiUtils"], function(_exports, _OraApiUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    var BASE_PATH = "/koszyk/multi";
    var DATA_PATH = BASE_PATH + "/_data";

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    }; //to trzeba do jakiegos shared folderu przerzucic


    var _default = {
        logOut: function logOut() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/customer/logout"));
        },
        getLoggedCustomerData: function getLoggedCustomerData() {
            return (0, _OraApiUtils.get)(prepareUrl("/customerSmsVerification/loggedCustomerData"));
        },
        pushAccount: function pushAccount(data) {
            return (0, _OraApiUtils.post)(prepareUrl("/customerSmsVerification/pushAccountByMsisdn"), data);
        },
        selectAccount: function selectAccount(data) {
            return (0, _OraApiUtils.post)(prepareUrl("/customerSmsVerification/selectAccount"), data);
        },
        getAccount: function getAccount(data) {
            return (0, _OraApiUtils.get)(prepareUrl("/customerSmsVerification/getAccount"), data);
        },
        getAccountByCode: function getAccountByCode(data) {
            return (0, _OraApiUtils.get)(prepareUrl("/customerSmsVerification/getAccountByCode"), data);
        },
        checkMarketCompatibility: function checkMarketCompatibility(data) {
            return (0, _OraApiUtils.get)(prepareUrl("/customerSmsVerification/checkMarketCompatibility"), data);
        },
        lightLogout: function lightLogout() {
            return (0, _OraApiUtils.get)(prepareUrl("/customerSmsVerification/lightLogout"));
        },
        requestMobileBillingAccounts: function requestMobileBillingAccounts() {
            return (0, _OraApiUtils.get)(prepareUrl("/customerSmsVerification/getMobileAccounts"), {});
        },
        setCimByMsisdn: function setCimByMsisdn(data) {
            return (0, _OraApiUtils.post)(prepareUrl("/customerSmsVerification/setCimByMsisdn"), data);
        },
        setCimByLogin: function setCimByLogin(data) {
            return (0, _OraApiUtils.post)(prepareUrl("/customerSmsVerification/setCimByLogin"), data);
        },
        pushVerifiedMsisdn: function pushVerifiedMsisdn(data) {
            return (0, _OraApiUtils.post)(prepareUrl("/customerSmsVerification/pushVerifiedMsisdn"), data);
        },
        setMsisdnOrLogin: function setMsisdnOrLogin(data) {
            return (0, _OraApiUtils.post)(prepareUrl("/customerSmsVerification/setMsisdnOrLogin"), data);
        },
        checkOfferSelector: function checkOfferSelector(data) {
            return (0, _OraApiUtils.post)(prepareUrl("/customerSmsVerification/checkOfferSelector"), data);
        },
        requestPeselAndAddressAuth: function requestPeselAndAddressAuth(data, pesel) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl("/customerAddressVerification/requestPeselAddressVerification/" + pesel), data);
        },
        isPeselAndAddressedVerified: function isPeselAndAddressedVerified() {
            var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30000;
            var url = prepareUrl("/customerAddressVerification/isVerified");
            var interval = 1000;
            var iterations = timeout / interval;
            return (0, _OraApiUtils.poll)(url, null, function(response) {
                return response !== "pending";
            }, iterations, interval);
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map