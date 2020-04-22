import {
    get,
    post,
    postJsonObject,
    poll
} from "eshop/flux/utils/OraApiUtils";

const BASE_PATH = "/koszyk/multi";
const DATA_PATH = BASE_PATH + "/_data";
const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url //to trzeba do jakiegos shared folderu przerzucic



export default {
    logOut: () => get(prepareUrl(DATA_PATH + "/customer/logout")),
    getLoggedCustomerData: () => get(prepareUrl("/customerSmsVerification/loggedCustomerData")),
    pushAccount: (data) => post(prepareUrl("/customerSmsVerification/pushAccountByMsisdn"), data),
    selectAccount: (data) => post(prepareUrl("/customerSmsVerification/selectAccount"), data),
    getAccount: (data) => get(prepareUrl("/customerSmsVerification/getAccount"), data),
    getAccountByCode: (data) => get(prepareUrl("/customerSmsVerification/getAccountByCode"), data),
    checkMarketCompatibility: (data) => get(prepareUrl("/customerSmsVerification/checkMarketCompatibility"), data),
    lightLogout: () => get(prepareUrl("/customerSmsVerification/lightLogout")),
    requestMobileBillingAccounts: () => get(prepareUrl("/customerSmsVerification/getMobileAccounts"), {}),
    setCimByMsisdn: (data) => post(prepareUrl("/customerSmsVerification/setCimByMsisdn"), data),
    setCimByLogin: (data) => post(prepareUrl("/customerSmsVerification/setCimByLogin"), data),
    pushVerifiedMsisdn: (data) => post(prepareUrl("/customerSmsVerification/pushVerifiedMsisdn"), data),
    setMsisdnOrLogin: (data) => post(prepareUrl("/customerSmsVerification/setMsisdnOrLogin"), data),
    checkOfferSelector: (data) => post(prepareUrl("/customerSmsVerification/checkOfferSelector"), data),
    requestPeselAndAddressAuth: (data, pesel) => postJsonObject(prepareUrl("/customerAddressVerification/requestPeselAddressVerification/" + pesel), data),
    isPeselAndAddressedVerified: (timeout = 30000) => {
        var url = prepareUrl("/customerAddressVerification/isVerified");
        var interval = 1000;
        var iterations = timeout / interval;
        return poll(url, null, response => response !== "pending", iterations, interval);

    }



}