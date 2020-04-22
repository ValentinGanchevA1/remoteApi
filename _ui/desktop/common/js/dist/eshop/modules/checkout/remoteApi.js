define(["exports", "../../flux/utils/OraApiUtils", "eshop/utils/OnlineUtils", "jquery", "lodash"], function(_exports, _OraApiUtils, _OnlineUtils, _jquery, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.prepareUrl = void 0;
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);
    _jquery = babelHelpers.interopRequireDefault(_jquery);
    _lodash = babelHelpers.interopRequireDefault(_lodash);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var BASE_PATH = "/koszyk/multi";
    var DATA_PATH = BASE_PATH + "/_data";

    var prepareUrl = function prepareUrl(url) {
        return bsfContextPath + (typeof prefixWWW !== "undefined" ? prefixWWW : "") + url;
    }; //to trzeba do jakiegos shared folderu przerzucic


    _exports.prepareUrl = prepareUrl;

    var prepareSecureUrl = function prepareSecureUrl(url) {
        return bsfContextPath + url;
    };

    var MOBILE_RESOURCE_SIM_CARD_TYPES_POS_PATH = "/simCard/getSimCardTypes";
    var UPDATE_SIM_CARD = "/koszyk/updateSimCard";
    var POST_FBB_SERVICE_DATA = "/fbbServices/serviceData";
    var GET_FBB_SERVICE_DATA = "/fbbServices/fixAddressWithServices";
    var GET_FBB_SERVICE_DATA_FILTERED_BY_WWT = "/fbbServices/fixAddressFilteredByWWTWithServices";
    var REFRESH_FIX_CART_WITHOUTH_FBB_CHECK = "/fbbServices/refreshFixCartWithoutFBBCheck";
    var PICKUP_UPDATE_SERIAL_NUMBERS = "/pickup/serialnumbers";
    var CANCEL_GOODS_ORDER = "/pickup/cancel";
    var consentsCmpId = (0, _jquery.default)('#consentsComponentId').val();

    var getParameters = function getParameters(deliveryMethodCode, fiscalCharacterization, consentsCmpId) {
        console.warn("fiscalCharacterization: " + fiscalCharacterization + ", component: " + consentsCmpId);
        return _objectSpread({
            deliveryMethodCode: deliveryMethodCode,
            fiscalCharacterization: fiscalCharacterization
        }, _OnlineUtils.default.getComponentKeyObject(consentsCmpId));
    };

    var baseSetup = {
        statusCode: {
            403: function _() {
                location.reload();
            }
        },
        headers: {
            'CSRFToken': (0, _jquery.default)("#CSRFToken").val()
        },
        cache: false
    };
    var _default = {
        getConsentsData: function getConsentsData(deliveryMethodCode, fiscalCharacterization) {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/consents"), getParameters(deliveryMethodCode, fiscalCharacterization, consentsCmpId));
        },
        getCartConsents: function getCartConsents() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/consents/cart"));
        },
        recalculateConsentFromStrategy: function recalculateConsentFromStrategy(bundleNo, offerType) {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/recalculateStrategy/consent/" + bundleNo + "/" + offerType));
        },
        requestRecalculateConsentsForForeigner: function requestRecalculateConsentsForForeigner(isForeigner) {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/recalculateStrategy/foreigner/consent/" + isForeigner));
        },
        updateCartConsents: function updateCartConsents(data) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DATA_PATH + "/consents/modifyConsentsInCart/" + consentsCmpId), data);
        },
        getCartCustomer: function getCartCustomer() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/customer"));
        },
        getCustomer: function getCustomer() {
            return (0, _OraApiUtils.get)(prepareUrl("/customer/details"));
        },
        getCartRepresentative: function getCartRepresentative() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/representative"));
        },
        getCartDelivery: function getCartDelivery() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/delivery/availableMethods"));
        },
        getCartDeliveryData: function getCartDeliveryData() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/delivery"));
        },
        getInstallationAvailableTimeSlots: function getInstallationAvailableTimeSlots(earlierInstallationConsentAccepted, documentsDeliveryMode) {
            var data = {
                earlierInstallationConsentAccepted: earlierInstallationConsentAccepted,
                documentsDeliveryMode: documentsDeliveryMode
            };
            return (0, _OraApiUtils.get)(DATA_PATH + "/installation/availableTimeSlots", data);
        },
        getCartPayment: function getCartPayment() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/payment"));
        },
        updateCartPayment: function updateCartPayment(paymentData) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DATA_PATH + "/payment"), paymentData);
        },
        updateCustomerSignedDocuments: function updateCustomerSignedDocuments(isSigned) {
            return (0, _OraApiUtils.get)(DATA_PATH + "/customerSignedDocuments/" + isSigned);
        },
        getCartMnpData: function getCartMnpData() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/mnp"));
        },
        doCheckoutStep: function doCheckoutStep(checkoutData) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(window.location.pathname), checkoutData);
        },
        doCheckoutAsyncStep: function doCheckoutAsyncStep(checkoutData) {
            return (0, _OraApiUtils.postJsonObject)(window.location.pathname + "/async", checkoutData);
        },
        doSaveCheckoutData: function doSaveCheckoutData(checkoutData) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(window.location.pathname) + "/saveData", checkoutData);
        },
        fetchNearestPointsOfSale: function fetchNearestPointsOfSale(data) {
            return (0, _OraApiUtils.get)("".concat(contextPath, "/checkout/pickup/nearest"), data);
        },
        fetchPOSPickupCities: function fetchPOSPickupCities() {
            return (0, _OraApiUtils.get)("".concat(contextPath, "/hapi/pickup/cities"));
        },
        fetchPOSPickupAvailability: function fetchPOSPickupAvailability(town) {
            var data = {
                town: town
            };
            return (0, _OraApiUtils.get)("".concat(contextPath, "/hapi/pickup/pointofservice"), data);
        },
        getLastSelectedPos: function getLastSelectedPos() {
            return (0, _OraApiUtils.get)(prepareUrl('/pickup/lastSelectedPos'));
        },
        reloadSummaryOnCart: function reloadSummaryOnCart(data) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DATA_PATH + "/cart/reloadSummary"), data);
        },
        fetchCvDocumentList: function fetchCvDocumentList() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/customer/getAdditionalDocuments"));
        },
        //TODO: real address
        getBpgData: function getBpgData(nip) {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + "/customer/bpg?nip=" + nip));
        },
        getZipCodeFromWWT: function getZipCodeFromWWT(placeId, streetId, streetNumber) {
            var data = {
                placeId: placeId,
                streetId: streetId,
                streetNumber: streetNumber
            };
            return _jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
                url: bsfContextPath + "/wwt/streetZips",
                data: data,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "get"
            }));
        },
        validateZipCode: function validateZipCode(postalCode, placeId, streetId, streetNumber) {
            var data = {
                postalCode: postalCode,
                placeId: placeId,
                streetId: streetId,
                streetNumber: streetNumber
            };
            return _jquery.default.ajax(_lodash.default.extend({}, baseSetup, {
                url: bsfContextPath + "/wwt/validateZip",
                data: data,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                type: "get"
            }));
        },
        getSelectedWwtAddress: function getSelectedWwtAddress() {
            return (0, _OraApiUtils.get)(bsfContextPath + "/wwt/selectedAddress", {});
        },
        getFutureInvestmentAddress: function getFutureInvestmentAddress() {
            return (0, _OraApiUtils.get)("/fix/lead/address", {});
        },
        getFutureInvestmentConsent: function getFutureInvestmentConsent() {
            return (0, _OraApiUtils.get)("/consent/futureInvestment", {});
        },
        getFutureInvestmentOffers: function getFutureInvestmentOffers() {
            return (0, _OraApiUtils.get)("/offers/futureInvestment", {});
        },
        registerLead: function registerLead(data) {
            return (0, _OraApiUtils.postJsonObject)("/fix/lead", data);
        },
        getDocumentCode: function getDocumentCode(consentCodes) {
            return (0, _OraApiUtils.get)("/documents/getDocumentForConsentFix?consentCodes=" + consentCodes);
        },
        selectApu: function selectApu(option) {
            var data = {
                apuOption: option
            };
            return (0, _OraApiUtils.post)(bsfContextPath + "/fix/apu/select", data);
        },
        updateBillingAccount: function updateBillingAccount(data) {
            return (0, _OraApiUtils.postJsonObjectNoResult)(DATA_PATH + "/customerBillingAccount/update", data);
        },
        getBillingAccountContracts: function getBillingAccountContracts(data) {
            return (0, _OraApiUtils.get)(DATA_PATH + "/customerBillingAccount/getAccountContracts?accountId=" + data);
        },
        setNewBillingAccount: function setNewBillingAccount(data) {
            return (0, _OraApiUtils.postJsonObjectNoResult)(DATA_PATH + "/customerBillingAccount/new", data);
        },
        getBillingAccount: function getBillingAccount() {
            return (0, _OraApiUtils.get)(DATA_PATH + "/customerBillingAccount");
        },
        getPosSimCardsTypes: function getPosSimCardsTypes() {
            return (0, _OraApiUtils.get)(prepareUrl(MOBILE_RESOURCE_SIM_CARD_TYPES_POS_PATH));
        },
        updateSerialNumbers: function updateSerialNumbers(request) {
            return (0, _OraApiUtils.postJsonObject)(PICKUP_UPDATE_SERIAL_NUMBERS, request);
        },
        cancleGoodsOrder: function cancleGoodsOrder() {
            return (0, _OraApiUtils.put)(CANCEL_GOODS_ORDER);
        },
        getSerialNumbers: function getSerialNumbers() {
            return (0, _OraApiUtils.get)("/pickup/serialnumbers");
        },
        clearSessionData: function clearSessionData() {
            return (0, _OraApiUtils.get)(DATA_PATH + "/customer/clearSessionData");
        },
        getWarehouseSerialNumbers: function getWarehouseSerialNumbers() {
            return (0, _OraApiUtils.get)("/pickup/warehouseserialnumbers");
        },
        getPickupDocuments: function getPickupDocuments() {
            return (0, _OraApiUtils.get)("/pickup/documents");
        },
        getSimCardTypes: function getSimCardTypes(configurationId) {
            var simAPI = bsfContextPath + "/simCard/getSimCardTypes";
            return (0, _OraApiUtils.get)(simAPI, {
                "configurationId": configurationId
            });
        },
        verifySerialNumbers: function verifySerialNumbers(data) {
            var serialNumbersAPI = "/goodsOrders/serialNumbers";
            return (0, _OraApiUtils.postJsonObject)(serialNumbersAPI, data);
        },
        getSapFioriLinks: function getSapFioriLinks(sapOrderId) {
            var sapFioriLinksAPI = "/goodsOrders/fioriLinks/" + sapOrderId;
            return (0, _OraApiUtils.get)(sapFioriLinksAPI);
        },
        getFioriCorrectiveInvoiceLink: function getFioriCorrectiveInvoiceLink() {
            var fioriCorrectiveInvoiceLinkAPI = "/goodsOrders/fioriCorrectiveInvoiceLink";
            return (0, _OraApiUtils.get)(fioriCorrectiveInvoiceLinkAPI);
        },
        unlockSale: function unlockSale(sapOrderId) {
            var unlockSaleAPI = "/goodsOrders/unlockSale/" + sapOrderId;
            return (0, _OraApiUtils.put)(unlockSaleAPI, '');
        },
        checkUnlockSaleInSapStatus: function checkUnlockSaleInSapStatus(sapOrderId) {
            var unlockSaleAPI = "/goodsOrders/unlockSale/status/" + sapOrderId;
            return (0, _OraApiUtils.get)(unlockSaleAPI, '');
        },
        paymentAndFiscalization: function paymentAndFiscalization(sapOrderId) {
            var paymentAndFiscalizationAPI = "/goodsOrders/paymentAndFiscalization/" + sapOrderId;
            return (0, _OraApiUtils.get)(paymentAndFiscalizationAPI);
        },
        cancelOrder: function cancelOrder(sapOrderId) {
            var cancelOrderAPI = "/goodsOrders/cancelOrder/" + sapOrderId;
            return (0, _OraApiUtils.put)(cancelOrderAPI);
        },
        checkPaymentStatus: function checkPaymentStatus(sapOrderId) {
            var url = '/goodsOrders/paymentStatus/' + sapOrderId;
            return (0, _OraApiUtils.get)(url);
        },
        printOrderNumber: function printOrderNumber(sapOrderId) {
            var url = '/goodsOrders/checkoutPaymentPrintout/' + sapOrderId;
            return (0, _OraApiUtils.getPdf)(url);
        },
        printInvoiceNumber: function printInvoiceNumber(sapOrderId, isPickup) {
            var url = (isPickup ? '/pickup/invoicePrintout/' : '/goodsOrders/checkoutPaymentPrintout/') + sapOrderId;
            return (0, _OraApiUtils.getPdf)(url);
        },
        getAssistModeState: function getAssistModeState() {
            var url = '/assist/state';
            return (0, _OraApiUtils.get)(url);
        },
        getAssistModeEmployeeList: function getAssistModeEmployeeList(filters) {
            var url = '/employee/list';
            return (0, _OraApiUtils.get)(url, filters);
        },
        setAssistEmployee: function setAssistEmployee(employee) {
            var url = '/assist/enter';
            return (0, _OraApiUtils.post)(url, employee);
        },
        leaveAssistMode: function leaveAssistMode() {
            var url = '/assist/leave';
            return (0, _OraApiUtils.post)(url);
        },
        updateCheckoutCart: function updateCheckoutCart(checkoutData) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DATA_PATH + "/updateDeliveryMethod"), checkoutData);
        },
        updateInstallationInfoOnCart: function updateInstallationInfoOnCart(checkoutData) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DATA_PATH + "/updateInstallationInfoMethod"), checkoutData);
        },
        confirmReplanishment: function confirmReplanishment() {
            return (0, _OraApiUtils.put)(prepareUrl('/pickup/replanishment'));
        },
        setPickupPosId: function setPickupPosId(posId) {
            (0, _OraApiUtils.post)("".concat(contextPath, "/view/OraPickupPosMapsComponentController/setPosId"), {
                pos: posId
            });
        },
        pickupActivation: function pickupActivation() {
            return (0, _OraApiUtils.put)('/pickup/activation');
        },
        getLastOrder: function getLastOrder() {
            return (0, _OraApiUtils.get)('/pickup/lastOrderData');
        },
        updateConsents: function updateConsents(data) {
            return (0, _OraApiUtils.postJsonObject)(DATA_PATH + "/updateConsentsStates", data);
        },
        pickupCompletion: function pickupCompletion() {
            return (0, _OraApiUtils.get)('/pickup/pickupCompletion');
        },
        getPickupPaymentStatus: function getPickupPaymentStatus(override) {
            var data = {
                forced: override
            };
            return (0, _OraApiUtils.get)('/pickup/paymentStatus', data);
        },
        prepareDocumentsToZip: function prepareDocumentsToZip() {
            return (0, _OraApiUtils.get)(prepareUrl('/pickup/prepareToZip')).then(function() {
                return (0, _OraApiUtils.poll)(prepareUrl('/pickup/readyToZip'), null, function(r) {
                    return r === true;
                });
            });
        },
        getZipDocumentsUrl: function getZipDocumentsUrl() {
            return '/pickup/zip';
        },
        getParcelLockerList: function getParcelLockerList(town) {
            var data = {
                town: town
            };
            return (0, _OraApiUtils.get)("".concat(contextPath, "/hapi/parcel/get"), data);
        },
        getParcelLockerCityList: function getParcelLockerCityList(town) {
            var data = {
                town: town.toUpperCase()
            };
            return (0, _OraApiUtils.get)("".concat(contextPath, "/hapi/parcel/get/cities"), data);
        },
        getLastSelectedParcelLocker: function getLastSelectedParcelLocker() {
            return (0, _OraApiUtils.get)("".concat(contextPath, "/hapi/parcel/lastSelectedPos"));
        },
        setPosId: function setPosId(pos) {
            var data = {
                pos: pos
            };
            (0, _OraApiUtils.post)("".concat(contextPath, "/view/OraParcelLockerMapsComponentController/setPosId"), data);
        },
        updateSelectedPOSAvailabilityStatus: function updateSelectedPOSAvailabilityStatus(value) {
            var data = {
                status: value
            };
            return (0, _OraApiUtils.get)(prepareUrl('/pickup/posAvailability'), data);
        },
        updateSimCard: function updateSimCard(bundleNo, baseSimCardCode) {
            return (0, _OraApiUtils.postJson)(prepareSecureUrl(UPDATE_SIM_CARD), {
                bundleNo: bundleNo,
                baseSimCardCode: baseSimCardCode
            });
        },
        postFbbServiceData: function postFbbServiceData(designationNumber, serviceInstanceId) {
            return (0, _OraApiUtils.post)(prepareUrl(POST_FBB_SERVICE_DATA), {
                designationNumber: designationNumber,
                serviceInstanceId: serviceInstanceId
            });
        },
        getFBBServiceData: function getFBBServiceData() {
            return (0, _OraApiUtils.get)(prepareUrl(GET_FBB_SERVICE_DATA));
        },
        getFBBServiceDataFilteredByWWT: function getFBBServiceDataFilteredByWWT() {
            return (0, _OraApiUtils.get)(prepareUrl(GET_FBB_SERVICE_DATA_FILTERED_BY_WWT));
        },
        refreshFixCartWithoutFbbCheck: function refreshFixCartWithoutFbbCheck() {
            return (0, _OraApiUtils.post)(prepareUrl(REFRESH_FIX_CART_WITHOUTH_FBB_CHECK));
        },
        getDocumentApprovements: function getDocumentApprovements() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + '/documentApprovement'));
        },
        updateDocumentApprovement: function updateDocumentApprovement(documentApprovement, bundleNo) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DATA_PATH + "/documentApprovement/".concat(bundleNo)), documentApprovement);
        },
        getIdVerificationResult: function getIdVerificationResult() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + '/idVerification/result'));
        },
        getIdVerificationBanks: function getIdVerificationBanks() {
            return (0, _OraApiUtils.get)(prepareUrl(DATA_PATH + '/idVerification/banks'));
        },
        updateIdVerificationBank: function updateIdVerificationBank(bankId) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl(DATA_PATH + '/idVerification/bank'), {
                id: bankId
            });
        },
        requestIdVerification: function requestIdVerification() {
            return (0, _OraApiUtils.post)(prepareUrl(DATA_PATH + '/idVerification/request'), null);
        },
        consentsGetStatus: function consentsGetStatus() {
            return (0, _OraApiUtils.get)(prepareUrl("/consentDocument/status"));
        },
        consentsCreateAndSendDocument: function consentsCreateAndSendDocument(mail, phone, consentSections) {
            return (0, _OraApiUtils.postJsonObject)(prepareUrl("/consentDocument/callCreateAndSendDocument"), {
                mail: mail,
                phone: phone,
                consentSections: consentSections
            });
        }
    };
    _exports.default = _default;
});
//# sourceMappingURL=remoteApi.js.map