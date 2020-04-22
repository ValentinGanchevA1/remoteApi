define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher", "./OraMetaActions"], function(t, d, u, e) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, d = babelHelpers.interopRequireDefault(d), u = babelHelpers.interopRequireDefault(u), e = babelHelpers.interopRequireDefault(e);
    var a, i = ((a = e.default).loadedOffers = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_OFFERS,
            offers: t
        })
    }, a.loadedFilters = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_FILTERS,
            filters: t
        })
    }, a.loadedServices = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_SERVICES,
            services: t.services,
            relations: t.relations,
            groups: t.groups
        })
    }, a.loadedCart = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_CART,
            cart: t
        })
    }, a.loadedCampaignData = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_CAMPAIGN_DATA,
            campaignData: t
        })
    }, a.addedToCart = function() {
        u.default.dispatch({
            type: d.default.ADDED_TO_CART,
            addToCartMessage: {
                showMessage: !1,
                message: ""
            }
        }), a._executeAfter(a.addedToCart)
    }, a.addedToCartFailed = function(t) {
        u.default.dispatch({
            type: d.default.ADDED_TO_CART,
            addToCartMessage: {
                showMessage: !0,
                message: getErrorMessage(t.responseJSON)
            }
        })
    }, a.loadedSimCards = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_SIM_CARDS,
            simCards: t
        })
    }, a.loadedSimCardTypes = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_SIM_CARD_TYPES,
            simCardTypes: t
        })
    }, a.validateResult = function(t) {
        u.default.dispatch({
            type: d.default.VERIFIED_SIM_CARDS,
            simCardsResult: t
        })
    }, a.validateItems = function(t) {
        u.default.dispatch({
            type: d.default.VERIFIED_ITEMS,
            status: t.status,
            vendor: t.vendor
        })
    }, a.validateOrderPaymentResult = function(t) {
        u.default.dispatch({
            type: d.default.VERIFIED_ORDER_PAYMENT_RESULT,
            response: t
        })
    }, a.unlockSaleInSapDone = function() {
        u.default.dispatch({
            type: d.default.UNLOCKED_SALE_IN_SAP
        }), a._executeAfter(a.unlockSaleInSapDone)
    }, a.paymentAndFiscalizationDataLoaded = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP,
            data: t
        }), a._executeAfter(a.paymentAndFiscalizationDataLoaded)
    }, a.paymentStatusVerificationSuccess = function(t) {
        u.default.dispatch({
            type: d.default.PAYMENT_STATUS_VERIFIED,
            response: t
        })
    }, a.sapFioriCorrectiveInvoiceLinkReady = function(t) {
        u.default.dispatch({
            type: d.default.SAP_FIORI_CORRECTIVE_INVOICE_LINK_READY,
            data: t
        })
    }, a.sapFioriLinksReady = function(t) {
        u.default.dispatch({
            type: d.default.SAP_FIORI_LINKS_READY,
            data: t
        })
    }, a.printOutDocumentResult = function(t) {
        u.default.dispatch({
            type: d.default.PRINTOUT_DOCUMENT_RESULT,
            data: t
        })
    }, a.orderCancelResponse = function(t) {
        u.default.dispatch({
            type: d.default.ORDER_CANCEL_RESPONSE,
            response: t
        })
    }, a.checkoutStepDone = function(t) {
        u.default.dispatch({
            type: d.default.CHECKOUT_STEP_DONE,
            code: t.code,
            description: t.description,
            callbackUrl: t.callbackUrl,
            results: t.results
        })
    }, a.checkoutStepSaved = function(t) {
        u.default.dispatch({
            type: d.default.CHECKOUT_STEP_SAVED,
            code: t.code,
            description: t.description
        })
    }, a.loadedMsisdnList = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_MSISDN_LIST,
            msisdnList: t
        })
    }, a.checkedMsisdnType = function(t) {
        u.default.dispatch({
            type: d.default.CHECKED_MSISDN_TYPE,
            data: t
        })
    }, a.verifiedNumber = function(t) {
        u.default.dispatch({
            type: d.default.VERIFIED_NUMBER,
            data: t
        })
    }, a.reservedMsisdn = function(t) {
        u.default.dispatch({
            type: d.default.RESERVED_MSISDN,
            msisdn: t.number
        })
    }, a.releasedMsisdnList = function() {
        u.default.dispatch({
            type: d.default.RELEASED_MSISDN_LIST
        })
    }, a.availablePaymentMethods = function(t) {
        u.default.dispatch({
            type: d.default.AVAILABLE_PAYMENT_METHODS,
            data: t
        })
    }, a.availableDeliveryMethods = function(t) {
        u.default.dispatch({
            type: d.default.AVAILABLE_DELIVERY_METHODS,
            data: t
        })
    }, a.validatedPostCodeCBS = function(t, e) {
        u.default.dispatch({
            type: d.default.VALIDATED_POST_CODE_CBS,
            data: t,
            bundleNumbers: e
        })
    }, a.getStreetsByPostCodeAntCityCBS = function(t, e) {
        u.default.dispatch({
            type: d.default.GET_STREETS_CBS,
            data: t,
            bundleNumbers: e
        })
    }, a.loadDeliveryData = function(t) {
        u.default.dispatch({
            type: d.default.LOAD_DELIVERY_DATA,
            data: t
        })
    }, a.loadAvailableDeliveryData = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_AVAILABLE_DELIVERY_DATA,
            data: t
        })
    }, a.loadedConsents = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_CONSENTS,
            consents: t
        })
    }, a.loadedConsentsByType = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_CONSENTS_BY_TYPE,
            consents: t
        })
    }, a.loadedCartConsents = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_CART_CONSENTS,
            consents: t
        })
    }, a.loadedOrderNumber = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_ORDER_NUMBER,
            data: t
        })
    }, a.loadedOrderData = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_ORDER_DATA,
            data: t
        })
    }, a.benefitConsentsVerified = function(t) {
        u.default.dispatch({
            type: d.default.BENEFIT_CONSENTS_VERIFIED,
            statusList: t
        })
    }, a.loadedBenefits = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_BENEFITS,
            benefits: t
        })
    }, a.loadedDocumentsList = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_DOCUMENTS_LIST,
            documents: t
        })
    }, a.loadedDocumentsForCart = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_DOCUMENTS_FOR_CART,
            documents: t
        })
    }, a.createdDocument = function(t, e) {
        u.default.dispatch({
            type: d.default.CREATED_DOCUMENT,
            code: t,
            bundleNo: e
        })
    }, a.loadedDocument = function(t, e, a) {
        u.default.dispatch({
            type: d.default.LOADED_DOCUMENT,
            code: t,
            bundleNo: e,
            path: a
        })
    }, a.loadDocumentError = function(t, e) {
        u.default.dispatch({
            type: d.default.LOAD_DOCUMENT_ERROR,
            code: t,
            bundleNo: e
        })
    }, a.loadedConsentsDocument = function(t, e) {
        u.default.dispatch({
            type: d.default.LOADED_CONSENTS_DOCUMENT,
            code: e.documentCode,
            bundleNo: t
        })
    }, a.removedFromCart = function(t) {
        u.default.dispatch({
            type: d.default.REMOVED_FROM_CART,
            cart: t
        })
    }, a.checkedReserveStatus = function(t, e) {
        u.default.dispatch({
            type: d.default.CHECKED_RESERVE_STATUS,
            status: e,
            msisdn: t
        })
    }, a.priceCalculated = function(t) {
        u.default.dispatch({
            type: d.default.OFFER_CALCULATED,
            summaryData: t
        })
    }, a.cartCalculated = function(t) {
        u.default.dispatch({
            type: d.default.CART_CALCULATED,
            summaryData: t
        })
    }, a.loadedDocumentsFromOrder = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_DOCUMENTS_FROM_ORDER,
            documents: t
        })
    }, a.getDocumentFromOrderCompleted = function(t) {
        u.default.dispatch({
            type: d.default.GET_DOCUMENT_FROM_ORDER_COMPLETED,
            documentData: t
        })
    }, a.nearestPosesLoaded = function(t, e) {
        u.default.dispatch({
            type: d.default.NEAREST_POSES_LOADED,
            poses: e,
            bundleNumbers: t
        })
    }, a.assistModeStateChanged = function(t) {
        u.default.dispatch({
            type: d.default.ASSIST_MODE_STATE_CHANGED,
            state: t
        })
    }, a.assistModeStateLoaded = function(t) {
        u.default.dispatch({
            type: d.default.ASSIST_MODE_STATE_LOADED,
            state: t
        })
    }, a.employeeListLoaded = function(t) {
        u.default.dispatch({
            type: d.default.EMPLOYEE_LIST_LOADED,
            employeeList: t
        })
    }, a.loadPhoneContactData = function(t) {
        u.default.dispatch({
            type: d.default.LOAD_PHONE_CONTACT_DATA,
            data: t
        })
    }, a.clearCustomerSession = function() {
        u.default.dispatch({
            type: d.default.CLEAR_CUSTOMER_SESSION
        })
    }, a.deviceListLoaded = function(t, e) {
        u.default.dispatch({
            type: d.default.DEVICE_LIST_LOADED,
            data: e,
            prevFilters: t
        })
    }, a.deviceListMoreLoaded = function(t, e) {
        u.default.dispatch({
            type: d.default.DEVICE_LIST_MORE_LOADED,
            data: e,
            prevFilters: t
        })
    }, a.loadedDeviceOfferFilter = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_DEVICE_OFFER_FILTER,
            data: t
        })
    }, a.loadedDeviceParameterFilter = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_DEVICE_PARAMETER_FILTER,
            data: t
        })
    }, a.validateItems = function(t) {
        u.default.dispatch({
            type: d.default.VERIFIED_ITEMS,
            status: t.status,
            vendor: t.vendor
        })
    }, a.loadedMNPData = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_MNP_DATA,
            data: t
        })
    }, a.loadedCustomerAdditionalDocuments = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_CUSTOMER_ADDITIONAL_DOCUMENTS,
            data: t
        })
    }, a.loadedChannel = function(t) {
        u.default.dispatch({
            type: d.default.LOADED_CHANNEL,
            data: t
        })
    }, a.checkMsisdnType = function(t) {
        u.default.dispatch({
            type: d.default.CHECK_MSISDN_TYPE,
            number: t
        })
    }, a.validateSerialNumbers = function(t) {
        u.default.dispatch({
            type: d.default.VERIFY_SERIAL_NUMBERS,
            data: t
        })
    }, a.verifyNumber = function(t, e) {
        u.default.dispatch({
            type: d.default.VERIFY_NUMBER,
            number: t,
            processType: e
        })
    }, a.getOffersByMsisdn = function(t) {
        u.default.dispatch({
            type: d.default.GET_OFFERS_BY_MSISDN,
            number: t
        })
    }, a.sapIfsReservationDone = function(t) {
        u.default.dispatch({
            type: d.default.SAP_IFS_RESERVATION_DONE,
            data: t
        }), a._executeAfter(a.sapIfsReservationDone)
    }, a.cvManualVerificationResult = function(t) {
        u.default.dispatch({
            type: d.default.CV_MANUAL_VERIFICATION_RESULT,
            code: t.code,
            description: t.description,
            callbackUrl: t.callbackUrl
        })
    }, a.cvManualVerificationResultError = function(t) {
        u.default.dispatch({
            type: d.default.CV_MANUAL_VERIFICATION_RESULT_ERROR,
            code: t.code,
            description: t.description,
            callbackUrl: t.callbackUrl
        })
    }, a);
    t.default = i
});
//# sourceMappingURL=OraSerwerActions.js.map