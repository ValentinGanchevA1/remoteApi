import {
    get,
    getPdf,
    post,
    postJson,
    postJsonObject,
    postJsonObjectNoResult,
    put,
    poll
} from "../../flux/utils/OraApiUtils";
import OnlineUtils from "eshop/utils/OnlineUtils";
import $ from "jquery";
import _ from "lodash";

const BASE_PATH = "/koszyk/multi";
const DATA_PATH = BASE_PATH + "/_data";
export const prepareUrl = (url) => bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url //to trzeba do jakiegos shared folderu przerzucic
const prepareSecureUrl = (url) => bsfContextPath + url;

const MOBILE_RESOURCE_SIM_CARD_TYPES_POS_PATH = "/simCard/getSimCardTypes";
const UPDATE_SIM_CARD = "/koszyk/updateSimCard";
const POST_FBB_SERVICE_DATA = "/fbbServices/serviceData";
const GET_FBB_SERVICE_DATA = "/fbbServices/fixAddressWithServices";
const GET_FBB_SERVICE_DATA_FILTERED_BY_WWT = "/fbbServices/fixAddressFilteredByWWTWithServices";
const REFRESH_FIX_CART_WITHOUTH_FBB_CHECK = "/fbbServices/refreshFixCartWithoutFBBCheck";
const PICKUP_UPDATE_SERIAL_NUMBERS = "/pickup/serialnumbers";
const CANCEL_GOODS_ORDER = "/pickup/cancel";

const consentsCmpId = $('#consentsComponentId').val();

const getParameters = (deliveryMethodCode, fiscalCharacterization, consentsCmpId) => {
    console.warn("fiscalCharacterization: " + fiscalCharacterization + ", component: " + consentsCmpId);
    return {
        deliveryMethodCode: deliveryMethodCode,
        fiscalCharacterization: fiscalCharacterization,
        ...OnlineUtils.getComponentKeyObject(consentsCmpId)
    };
};

const baseSetup = {
    statusCode: {
        403: function() {
            location.reload();
        }
    },
    headers: {
        'CSRFToken': $("#CSRFToken").val()
    },
    cache: false
};

export default {
    getConsentsData: (deliveryMethodCode, fiscalCharacterization) =>
        get(prepareUrl(DATA_PATH + "/consents"),
            getParameters(deliveryMethodCode, fiscalCharacterization, consentsCmpId)),
    getCartConsents: () => get(prepareUrl(DATA_PATH + "/consents/cart")),
    recalculateConsentFromStrategy: (bundleNo, offerType) => get(prepareUrl(DATA_PATH + "/recalculateStrategy/consent/" + bundleNo + "/" + offerType)),
    requestRecalculateConsentsForForeigner: (isForeigner) => get(prepareUrl(DATA_PATH + "/recalculateStrategy/foreigner/consent/" + isForeigner)),
    updateCartConsents: (data) => postJsonObject(prepareUrl(DATA_PATH + "/consents/modifyConsentsInCart/" + consentsCmpId), data),

    getCartCustomer: () => get(prepareUrl(DATA_PATH + "/customer")),

    getCustomer: () => get(prepareUrl("/customer/details")),

    getCartRepresentative: () => get(prepareUrl(DATA_PATH + "/representative")),

    getCartDelivery: () => get(prepareUrl(DATA_PATH + "/delivery/availableMethods")),
    getCartDeliveryData: () => get(prepareUrl(DATA_PATH + "/delivery")),

    getInstallationAvailableTimeSlots: (earlierInstallationConsentAccepted, documentsDeliveryMode) => {
        let data = {
            earlierInstallationConsentAccepted: earlierInstallationConsentAccepted,
            documentsDeliveryMode: documentsDeliveryMode
        };
        return get(DATA_PATH + "/installation/availableTimeSlots", data);
    },

    getCartPayment: () => get(prepareUrl(DATA_PATH + "/payment")),

    updateCartPayment: (paymentData) => postJsonObject(prepareUrl(DATA_PATH + "/payment"), paymentData),

    updateCustomerSignedDocuments: (isSigned) => get(DATA_PATH + "/customerSignedDocuments/" + isSigned),

    getCartMnpData: () => get(prepareUrl(DATA_PATH + "/mnp")),

    doCheckoutStep: (checkoutData) => postJsonObject(prepareUrl(window.location.pathname), checkoutData),

    doCheckoutAsyncStep: (checkoutData) => postJsonObject(window.location.pathname + "/async", checkoutData),

    doSaveCheckoutData: (checkoutData) => postJsonObject(prepareUrl(window.location.pathname) + "/saveData", checkoutData),

    fetchNearestPointsOfSale: (data) => get(`${contextPath}/checkout/pickup/nearest`, data),

    fetchPOSPickupCities: () => get(`${contextPath}/hapi/pickup/cities`),

    fetchPOSPickupAvailability: (town) => {
        let data = {
            town: town
        };
        return get(`${contextPath}/hapi/pickup/pointofservice`, data);
    },

    getLastSelectedPos: () => get(prepareUrl('/pickup/lastSelectedPos')),

    reloadSummaryOnCart: (data) => postJsonObject(prepareUrl(DATA_PATH + "/cart/reloadSummary"), data),

    fetchCvDocumentList: () => get(prepareUrl(DATA_PATH + "/customer/getAdditionalDocuments")),

    //TODO: real address
    getBpgData: (nip) => get(prepareUrl(DATA_PATH + "/customer/bpg?nip=" + nip)),

    getZipCodeFromWWT: (placeId, streetId, streetNumber) => {
        const data = {
            placeId,
            streetId,
            streetNumber
        };
        return $.ajax(_.extend({}, baseSetup, {
            url: bsfContextPath + "/wwt/streetZips",
            data: data,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "get"
        }));
    },

    validateZipCode: (postalCode, placeId, streetId, streetNumber) => {
        const data = {
            postalCode,
            placeId,
            streetId,
            streetNumber
        };
        return $.ajax(_.extend({}, baseSetup, {
            url: bsfContextPath + "/wwt/validateZip",
            data: data,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "get"
        }));
    },

    getSelectedWwtAddress: () => {
        return get(bsfContextPath + "/wwt/selectedAddress", {});
    },

    getFutureInvestmentAddress: () => {
        return get("/fix/lead/address", {});
    },

    getFutureInvestmentConsent: () => {
        return get("/consent/futureInvestment", {});
    },

    getFutureInvestmentOffers: () => {
        return get("/offers/futureInvestment", {});
    },

    registerLead: (data) => postJsonObject("/fix/lead", data),

    getDocumentCode: (consentCodes) => get("/documents/getDocumentForConsentFix?consentCodes=" + consentCodes),

    selectApu: (option) => {
        let data = {
            apuOption: option
        };

        return post(bsfContextPath + "/fix/apu/select", data);

    },

    updateBillingAccount: (data) => postJsonObjectNoResult(DATA_PATH + "/customerBillingAccount/update", data),
    getBillingAccountContracts: (data) => get(DATA_PATH + "/customerBillingAccount/getAccountContracts?accountId=" + data),
    setNewBillingAccount: (data) => postJsonObjectNoResult(DATA_PATH + "/customerBillingAccount/new", data),
    getBillingAccount: () => get(DATA_PATH + "/customerBillingAccount"),

    getPosSimCardsTypes: () => get(prepareUrl(MOBILE_RESOURCE_SIM_CARD_TYPES_POS_PATH)),
    updateSerialNumbers: (request) => postJsonObject(PICKUP_UPDATE_SERIAL_NUMBERS, request),
    cancleGoodsOrder: () => put(CANCEL_GOODS_ORDER),
    getSerialNumbers: () => get("/pickup/serialnumbers"),
    clearSessionData: () => get(DATA_PATH + "/customer/clearSessionData"),
    getWarehouseSerialNumbers: () => get("/pickup/warehouseserialnumbers"),
    getPickupDocuments: () => get("/pickup/documents"),

    getSimCardTypes: configurationId => {
        const simAPI = bsfContextPath + "/simCard/getSimCardTypes";
        return get(simAPI, {
            "configurationId": configurationId
        });
    },

    verifySerialNumbers: (data) => {
        var serialNumbersAPI = "/goodsOrders/serialNumbers";
        return postJsonObject(serialNumbersAPI, data);
    },

    getSapFioriLinks: (sapOrderId) => {
        var sapFioriLinksAPI = "/goodsOrders/fioriLinks/" + sapOrderId;
        return get(sapFioriLinksAPI);
    },

    getFioriCorrectiveInvoiceLink: () => {
        var fioriCorrectiveInvoiceLinkAPI = "/goodsOrders/fioriCorrectiveInvoiceLink";
        return get(fioriCorrectiveInvoiceLinkAPI);
    },

    unlockSale: (sapOrderId) => {
        var unlockSaleAPI = "/goodsOrders/unlockSale/" + sapOrderId;
        return put(unlockSaleAPI, '');
    },

    checkUnlockSaleInSapStatus: (sapOrderId) => {
        var unlockSaleAPI = "/goodsOrders/unlockSale/status/" + sapOrderId;
        return get(unlockSaleAPI, '');
    },

    paymentAndFiscalization: (sapOrderId) => {
        var paymentAndFiscalizationAPI = "/goodsOrders/paymentAndFiscalization/" + sapOrderId;
        return get(paymentAndFiscalizationAPI);
    },

    cancelOrder: (sapOrderId) => {
        var cancelOrderAPI = "/goodsOrders/cancelOrder/" + sapOrderId;
        return put(cancelOrderAPI);
    },

    checkPaymentStatus: (sapOrderId) => {
        let url = '/goodsOrders/paymentStatus/' + sapOrderId;
        return get(url);
    },

    printOrderNumber: (sapOrderId) => {
        let url = '/goodsOrders/checkoutPaymentPrintout/' + sapOrderId;
        return getPdf(url);
    },

    printInvoiceNumber: (sapOrderId, isPickup) => {
        let url = (isPickup ? '/pickup/invoicePrintout/' : '/goodsOrders/checkoutPaymentPrintout/') + sapOrderId;
        return getPdf(url);
    },

    getAssistModeState: () => {
        let url = '/assist/state';
        return get(url);
    },

    getAssistModeEmployeeList: (filters) => {
        let url = '/employee/list';
        return get(url, filters);
    },

    setAssistEmployee: (employee) => {
        let url = '/assist/enter';
        return post(url, employee);
    },

    leaveAssistMode: () => {
        let url = '/assist/leave';
        return post(url);
    },

    updateCheckoutCart: (checkoutData) => postJsonObject(prepareUrl(DATA_PATH + "/updateDeliveryMethod"), checkoutData),

    updateInstallationInfoOnCart: (checkoutData) => postJsonObject(prepareUrl(DATA_PATH + "/updateInstallationInfoMethod"), checkoutData),

    confirmReplanishment: () => put(prepareUrl('/pickup/replanishment')),

    setPickupPosId: (posId) => {
        post(`${contextPath}/view/OraPickupPosMapsComponentController/setPosId`, {
            pos: posId
        });
    },

    pickupActivation: () => put('/pickup/activation'),

    getLastOrder: () => get('/pickup/lastOrderData'),

    updateConsents: (data) => postJsonObject(DATA_PATH + "/updateConsentsStates", data),

    pickupCompletion: () => get('/pickup/pickupCompletion'),

    getPickupPaymentStatus: (override) => {
        let data = {
            forced: override
        }
        return get('/pickup/paymentStatus', data);
    },

    prepareDocumentsToZip: () => get(prepareUrl('/pickup/prepareToZip')).then(() =>
        poll(prepareUrl('/pickup/readyToZip'), null, r => r === true)
    ),

    getZipDocumentsUrl: () => '/pickup/zip',

    getParcelLockerList: (town) => {
        let data = {
            town: town
        };
        return get(`${contextPath}/hapi/parcel/get`, data);
    },

    getParcelLockerCityList: (town) => {
        let data = {
            town: town.toUpperCase()
        };
        return get(`${contextPath}/hapi/parcel/get/cities`, data)
    },

    getLastSelectedParcelLocker: () => get(`${contextPath}/hapi/parcel/lastSelectedPos`),

    setPosId: (pos) => {
        let data = {
            pos: pos,
        };
        post(`${contextPath}/view/OraParcelLockerMapsComponentController/setPosId`, data)
    },

    updateSelectedPOSAvailabilityStatus: (value) => {
        let data = {
            status: value
        };
        return get(prepareUrl('/pickup/posAvailability'), data);
    },

    updateSimCard: (bundleNo, baseSimCardCode) => {
        return postJson(prepareSecureUrl(UPDATE_SIM_CARD), {
            bundleNo: bundleNo,
            baseSimCardCode: baseSimCardCode
        });
    },
    postFbbServiceData: (designationNumber, serviceInstanceId) => {
        return post(prepareUrl(POST_FBB_SERVICE_DATA), {
            designationNumber: designationNumber,
            serviceInstanceId: serviceInstanceId
        });
    },

    getFBBServiceData: () => get(prepareUrl(GET_FBB_SERVICE_DATA)),
    getFBBServiceDataFilteredByWWT: () => get(prepareUrl(GET_FBB_SERVICE_DATA_FILTERED_BY_WWT)),
    refreshFixCartWithoutFbbCheck: () => post(prepareUrl(REFRESH_FIX_CART_WITHOUTH_FBB_CHECK)),
    getDocumentApprovements: () => get(prepareUrl(DATA_PATH + '/documentApprovement')),
    updateDocumentApprovement: (documentApprovement, bundleNo) => postJsonObject(prepareUrl(DATA_PATH + `/documentApprovement/${bundleNo}`), documentApprovement),
    getIdVerificationResult: () => get(prepareUrl(DATA_PATH + '/idVerification/result')),
    getIdVerificationBanks: () => get(prepareUrl(DATA_PATH + '/idVerification/banks')),
    updateIdVerificationBank: (bankId) => postJsonObject(prepareUrl(DATA_PATH + '/idVerification/bank'), {
        id: bankId
    }),
    requestIdVerification: () => post(prepareUrl(DATA_PATH + '/idVerification/request'), null),

    consentsGetStatus: () => get(prepareUrl("/consentDocument/status")),
    consentsCreateAndSendDocument: (mail, phone, consentSections) => {
        return postJsonObject(prepareUrl("/consentDocument/callCreateAndSendDocument"), {
            mail,
            phone,
            consentSections
        });
    }
};