define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher", "./OraMetaActions"], function(_exports, _OraActionKeys, _OraDispatcher, _OraMetaActions) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _OraActionKeys = babelHelpers.interopRequireDefault(_OraActionKeys);
    _OraDispatcher = babelHelpers.interopRequireDefault(_OraDispatcher);
    _OraMetaActions = babelHelpers.interopRequireDefault(_OraMetaActions);

    /**
     * Action creator for server-side actions.
     * Dispatched when data is fetched from an async call.
     **/
    var OraServerActions = function(OraServerActions) {
        OraServerActions.loadedOffers = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_OFFERS,
                offers: data
            });
        };

        OraServerActions.loadedFilters = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_FILTERS,
                filters: data
            });
        };

        OraServerActions.loadedServices = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_SERVICES,
                services: data.services,
                relations: data.relations,
                groups: data.groups
            });
        };

        OraServerActions.loadedCart = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CART,
                cart: data
            });
        };

        OraServerActions.loadedCampaignData = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CAMPAIGN_DATA,
                campaignData: data
            });
        };

        OraServerActions.addedToCart = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ADDED_TO_CART,
                addToCartMessage: {
                    showMessage: false,
                    message: ""
                }
            });

            OraServerActions._executeAfter(OraServerActions.addedToCart);
        };

        OraServerActions.addedToCartFailed = function(xhr) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ADDED_TO_CART,
                addToCartMessage: {
                    showMessage: true,
                    message: getErrorMessage(xhr.responseJSON)
                }
            });
        };

        OraServerActions.loadedSimCards = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_SIM_CARDS,
                simCards: data
            });
        }; //validateResult


        OraServerActions.loadedSimCardTypes = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_SIM_CARD_TYPES,
                simCardTypes: data
            });
        };

        OraServerActions.validateResult = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFIED_SIM_CARDS,
                simCardsResult: data
            });
        };

        OraServerActions.validateItems = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFIED_ITEMS,
                status: data.status,
                vendor: data.vendor
            });
        };

        OraServerActions.validateOrderPaymentResult = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFIED_ORDER_PAYMENT_RESULT,
                response: data
            });
        };

        OraServerActions.unlockSaleInSapDone = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.UNLOCKED_SALE_IN_SAP
            });

            OraServerActions._executeAfter(OraServerActions.unlockSaleInSapDone);
        };

        OraServerActions.paymentAndFiscalizationDataLoaded = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP,
                data: data
            });

            OraServerActions._executeAfter(OraServerActions.paymentAndFiscalizationDataLoaded);
        };

        OraServerActions.paymentStatusVerificationSuccess = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAYMENT_STATUS_VERIFIED,
                response: data
            });
        };

        OraServerActions.sapFioriCorrectiveInvoiceLinkReady = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SAP_FIORI_CORRECTIVE_INVOICE_LINK_READY,
                data: data
            });
        };

        OraServerActions.sapFioriLinksReady = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SAP_FIORI_LINKS_READY,
                data: data
            });
        };

        OraServerActions.printOutDocumentResult = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PRINTOUT_DOCUMENT_RESULT,
                data: data
            });
        };

        OraServerActions.orderCancelResponse = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ORDER_CANCEL_RESPONSE,
                response: data
            });
        };

        OraServerActions.checkoutStepDone = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECKOUT_STEP_DONE,
                code: data.code,
                description: data.description,
                callbackUrl: data.callbackUrl,
                results: data.results
            });
        };

        OraServerActions.checkoutStepSaved = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECKOUT_STEP_SAVED,
                code: data.code,
                description: data.description
            });
        };

        OraServerActions.loadedMsisdnList = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_MSISDN_LIST,
                msisdnList: data
            });
        };

        OraServerActions.checkedMsisdnType = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECKED_MSISDN_TYPE,
                data: data
            });
        };

        OraServerActions.verifiedNumber = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFIED_NUMBER,
                data: data
            });
        };

        OraServerActions.reservedMsisdn = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.RESERVED_MSISDN,
                msisdn: data.number
            });
        };

        OraServerActions.releasedMsisdnList = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.RELEASED_MSISDN_LIST
            });
        };

        OraServerActions.availablePaymentMethods = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.AVAILABLE_PAYMENT_METHODS,
                data: data
            });
        };

        OraServerActions.availableDeliveryMethods = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.AVAILABLE_DELIVERY_METHODS,
                data: data
            });
        };

        OraServerActions.validatedPostCodeCBS = function(data, bundleNumbers) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VALIDATED_POST_CODE_CBS,
                data: data,
                bundleNumbers: bundleNumbers
            });
        };

        OraServerActions.getStreetsByPostCodeAntCityCBS = function(data, bundleNumbers) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_STREETS_CBS,
                data: data,
                bundleNumbers: bundleNumbers
            });
        };

        OraServerActions.loadDeliveryData = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOAD_DELIVERY_DATA,
                data: data
            });
        };

        OraServerActions.loadAvailableDeliveryData = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_AVAILABLE_DELIVERY_DATA,
                data: data
            });
        };

        OraServerActions.loadedConsents = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CONSENTS,
                consents: data
            });
        };

        OraServerActions.loadedConsentsByType = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CONSENTS_BY_TYPE,
                consents: data
            });
        };

        OraServerActions.loadedCartConsents = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CART_CONSENTS,
                consents: data
            });
        };

        OraServerActions.loadedOrderNumber = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_ORDER_NUMBER,
                data: data
            });
        };

        OraServerActions.loadedOrderData = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_ORDER_DATA,
                data: data
            });
        };

        OraServerActions.benefitConsentsVerified = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.BENEFIT_CONSENTS_VERIFIED,
                statusList: data
            });
        };

        OraServerActions.loadedBenefits = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_BENEFITS,
                benefits: data
            });
        };

        OraServerActions.loadedDocumentsList = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_DOCUMENTS_LIST,
                documents: data
            });
        };

        OraServerActions.loadedDocumentsForCart = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_DOCUMENTS_FOR_CART,
                documents: data
            });
        };

        OraServerActions.createdDocument = function(code, bundleNo) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CREATED_DOCUMENT,
                code: code,
                bundleNo: bundleNo
            });
        };

        OraServerActions.loadedDocument = function(code, bundleNo, path) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_DOCUMENT,
                code: code,
                bundleNo: bundleNo,
                path: path
            });
        };

        OraServerActions.loadDocumentError = function(code, bundleNo) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOAD_DOCUMENT_ERROR,
                code: code,
                bundleNo: bundleNo
            });
        };

        OraServerActions.loadedConsentsDocument = function(bundleNo, data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CONSENTS_DOCUMENT,
                code: data.documentCode,
                bundleNo: bundleNo
            });
        };

        OraServerActions.removedFromCart = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REMOVED_FROM_CART,
                cart: data
            });
        };

        OraServerActions.checkedReserveStatus = function(msisdn, data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECKED_RESERVE_STATUS,
                status: data,
                msisdn: msisdn
            });
        };

        OraServerActions.priceCalculated = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.OFFER_CALCULATED,
                summaryData: data
            });
        };

        OraServerActions.cartCalculated = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CART_CALCULATED,
                summaryData: data
            });
        };

        OraServerActions.loadedDocumentsFromOrder = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_DOCUMENTS_FROM_ORDER,
                documents: data
            });
        };

        OraServerActions.getDocumentFromOrderCompleted = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_DOCUMENT_FROM_ORDER_COMPLETED,
                documentData: data
            });
        };

        OraServerActions.nearestPosesLoaded = function(bundleNumbers, data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.NEAREST_POSES_LOADED,
                poses: data,
                bundleNumbers: bundleNumbers
            });
        };

        OraServerActions.assistModeStateChanged = function(response) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ASSIST_MODE_STATE_CHANGED,
                state: response
            });
        };

        OraServerActions.assistModeStateLoaded = function(response) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ASSIST_MODE_STATE_LOADED,
                state: response
            });
        };

        OraServerActions.employeeListLoaded = function(response) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.EMPLOYEE_LIST_LOADED,
                employeeList: response
            });
        };

        OraServerActions.loadPhoneContactData = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOAD_PHONE_CONTACT_DATA,
                data: data
            });
        };

        OraServerActions.clearCustomerSession = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CLEAR_CUSTOMER_SESSION
            });
        };

        OraServerActions.deviceListLoaded = function(prevFilters, data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.DEVICE_LIST_LOADED,
                data: data,
                prevFilters: prevFilters
            });
        };

        OraServerActions.deviceListMoreLoaded = function(prevFilters, data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.DEVICE_LIST_MORE_LOADED,
                data: data,
                prevFilters: prevFilters
            });
        };

        OraServerActions.loadedDeviceOfferFilter = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_DEVICE_OFFER_FILTER,
                data: data
            });
        };

        OraServerActions.loadedDeviceParameterFilter = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_DEVICE_PARAMETER_FILTER,
                data: data
            });
        };

        OraServerActions.validateItems = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFIED_ITEMS,
                status: data.status,
                vendor: data.vendor
            });
        };

        OraServerActions.loadedMNPData = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_MNP_DATA,
                data: data
            });
        };

        OraServerActions.loadedCustomerAdditionalDocuments = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CUSTOMER_ADDITIONAL_DOCUMENTS,
                data: data
            });
        };

        OraServerActions.loadedChannel = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CHANNEL,
                data: data
            });
        };

        OraServerActions.checkMsisdnType = function(number) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECK_MSISDN_TYPE,
                number: number
            });
        };

        OraServerActions.validateSerialNumbers = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFY_SERIAL_NUMBERS,
                data: data
            });
        };

        OraServerActions.verifyNumber = function(number, processType) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFY_NUMBER,
                number: number,
                processType: processType
            });
        };

        OraServerActions.getOffersByMsisdn = function(number) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_OFFERS_BY_MSISDN,
                number: number
            });
        };

        OraServerActions.sapIfsReservationDone = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SAP_IFS_RESERVATION_DONE,
                data: data
            });

            OraServerActions._executeAfter(OraServerActions.sapIfsReservationDone);
        };

        OraServerActions.cvManualVerificationResult = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CV_MANUAL_VERIFICATION_RESULT,
                code: data.code,
                description: data.description,
                callbackUrl: data.callbackUrl
            });
        };

        OraServerActions.cvManualVerificationResultError = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CV_MANUAL_VERIFICATION_RESULT_ERROR,
                code: data.code,
                description: data.description,
                callbackUrl: data.callbackUrl
            });
        };

        return OraServerActions;
    }(_OraMetaActions.default);

    var _default = OraServerActions;
    _exports.default = _default;
});
//# sourceMappingURL=OraSerwerActions.js.map