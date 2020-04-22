import ORA_ACTIONS from "./OraActionKeys";
import OraDispatcher from "eshop/flux/dispatcher/OraDispatcher";
import OraMetaActions from "./OraMetaActions";
/**
 * Action creator for server-side actions.
 * Dispatched when data is fetched from an async call.
 **/
let OraServerActions = (function(OraServerActions) {

    OraServerActions.loadedOffers = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_OFFERS,
            offers: data
        });
    };

    OraServerActions.loadedFilters = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_FILTERS,
            filters: data
        });
    };

    OraServerActions.loadedServices = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_SERVICES,
            services: data.services,
            relations: data.relations,
            groups: data.groups
        });
    };

    OraServerActions.loadedCart = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CART,
            cart: data
        });
    };

    OraServerActions.loadedCampaignData = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CAMPAIGN_DATA,
            campaignData: data
        });
    };

    OraServerActions.addedToCart = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ADDED_TO_CART,
            addToCartMessage: {
                showMessage: false,
                message: ""
            }
        });
        OraServerActions._executeAfter(OraServerActions.addedToCart);
    };

    OraServerActions.addedToCartFailed = function(xhr) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ADDED_TO_CART,
            addToCartMessage: {
                showMessage: true,
                message: getErrorMessage(xhr.responseJSON)
            }
        });
    };

    OraServerActions.loadedSimCards = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_SIM_CARDS,
            simCards: data
        });
    }; //validateResult

    OraServerActions.loadedSimCardTypes = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_SIM_CARD_TYPES,
            simCardTypes: data
        });
    };

    OraServerActions.validateResult = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFIED_SIM_CARDS,
            simCardsResult: data
        });
    };

    OraServerActions.validateItems = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFIED_ITEMS,
            status: data.status,
            vendor: data.vendor
        });
    };

    OraServerActions.validateOrderPaymentResult = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFIED_ORDER_PAYMENT_RESULT,
            response: data
        });
    };

    OraServerActions.unlockSaleInSapDone = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.UNLOCKED_SALE_IN_SAP
        });
        OraServerActions._executeAfter(OraServerActions.unlockSaleInSapDone);
    };

    OraServerActions.paymentAndFiscalizationDataLoaded = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP,
            data: data
        });
        OraServerActions._executeAfter(OraServerActions.paymentAndFiscalizationDataLoaded);
    };

    OraServerActions.paymentStatusVerificationSuccess = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAYMENT_STATUS_VERIFIED,
            response: data
        });
    };


    OraServerActions.sapFioriCorrectiveInvoiceLinkReady = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SAP_FIORI_CORRECTIVE_INVOICE_LINK_READY,
            data: data
        });
    };

    OraServerActions.sapFioriLinksReady = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SAP_FIORI_LINKS_READY,
            data: data
        });
    };

    OraServerActions.printOutDocumentResult = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PRINTOUT_DOCUMENT_RESULT,
            data: data
        });
    };

    OraServerActions.orderCancelResponse = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ORDER_CANCEL_RESPONSE,
            response: data
        });
    };

    OraServerActions.checkoutStepDone = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECKOUT_STEP_DONE,
            code: data.code,
            description: data.description,
            callbackUrl: data.callbackUrl,
            results: data.results
        });
    };

    OraServerActions.checkoutStepSaved = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECKOUT_STEP_SAVED,
            code: data.code,
            description: data.description
        });
    };

    OraServerActions.loadedMsisdnList = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_MSISDN_LIST,
            msisdnList: data
        });
    };

    OraServerActions.checkedMsisdnType = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECKED_MSISDN_TYPE,
            data: data
        });
    };

    OraServerActions.verifiedNumber = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFIED_NUMBER,
            data: data
        });
    };

    OraServerActions.reservedMsisdn = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.RESERVED_MSISDN,
            msisdn: data.number
        });
    };

    OraServerActions.releasedMsisdnList = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.RELEASED_MSISDN_LIST
        });
    };

    OraServerActions.availablePaymentMethods = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.AVAILABLE_PAYMENT_METHODS,
            data: data
        });
    };

    OraServerActions.availableDeliveryMethods = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.AVAILABLE_DELIVERY_METHODS,
            data: data
        });
    };

    OraServerActions.validatedPostCodeCBS = function(data, bundleNumbers) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VALIDATED_POST_CODE_CBS,
            data: data,
            bundleNumbers: bundleNumbers
        });
    };

    OraServerActions.getStreetsByPostCodeAntCityCBS = function(data, bundleNumbers) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_STREETS_CBS,
            data: data,
            bundleNumbers: bundleNumbers
        });
    };

    OraServerActions.loadDeliveryData = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOAD_DELIVERY_DATA,
            data: data
        });
    };

    OraServerActions.loadAvailableDeliveryData = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_AVAILABLE_DELIVERY_DATA,
            data: data
        });
    };

    OraServerActions.loadedConsents = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CONSENTS,
            consents: data
        });
    };

    OraServerActions.loadedConsentsByType = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CONSENTS_BY_TYPE,
            consents: data
        });
    };

    OraServerActions.loadedCartConsents = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CART_CONSENTS,
            consents: data
        });
    };

    OraServerActions.loadedOrderNumber = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_ORDER_NUMBER,
            data: data
        });
    };

    OraServerActions.loadedOrderData = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_ORDER_DATA,
            data: data
        });
    };

    OraServerActions.benefitConsentsVerified = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.BENEFIT_CONSENTS_VERIFIED,
            statusList: data
        })
    };

    OraServerActions.loadedBenefits = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_BENEFITS,
            benefits: data
        });
    };

    OraServerActions.loadedDocumentsList = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_DOCUMENTS_LIST,
            documents: data
        });
    };

    OraServerActions.loadedDocumentsForCart = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_DOCUMENTS_FOR_CART,
            documents: data
        });
    };

    OraServerActions.createdDocument = function(code, bundleNo) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CREATED_DOCUMENT,
            code: code,
            bundleNo: bundleNo
        });
    };

    OraServerActions.loadedDocument = function(code, bundleNo, path) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_DOCUMENT,
            code: code,
            bundleNo: bundleNo,
            path: path
        });
    };

    OraServerActions.loadDocumentError = function(code, bundleNo) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOAD_DOCUMENT_ERROR,
            code: code,
            bundleNo: bundleNo
        });
    };

    OraServerActions.loadedConsentsDocument = function(bundleNo, data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CONSENTS_DOCUMENT,
            code: data.documentCode,
            bundleNo: bundleNo
        });
    };

    OraServerActions.removedFromCart = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REMOVED_FROM_CART,
            cart: data
        });
    };

    OraServerActions.checkedReserveStatus = function(msisdn, data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECKED_RESERVE_STATUS,
            status: data,
            msisdn: msisdn
        });
    };

    OraServerActions.priceCalculated = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.OFFER_CALCULATED,
            summaryData: data
        });
    };

    OraServerActions.cartCalculated = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CART_CALCULATED,
            summaryData: data
        });
    };

    OraServerActions.loadedDocumentsFromOrder = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_DOCUMENTS_FROM_ORDER,
            documents: data
        });
    };

    OraServerActions.getDocumentFromOrderCompleted = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_DOCUMENT_FROM_ORDER_COMPLETED,
            documentData: data
        });
    };

    OraServerActions.nearestPosesLoaded = function(bundleNumbers, data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.NEAREST_POSES_LOADED,
            poses: data,
            bundleNumbers: bundleNumbers
        });
    };

    OraServerActions.assistModeStateChanged = function(response) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ASSIST_MODE_STATE_CHANGED,
            state: response
        });
    };

    OraServerActions.assistModeStateLoaded = function(response) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ASSIST_MODE_STATE_LOADED,
            state: response
        });
    };

    OraServerActions.employeeListLoaded = function(response) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.EMPLOYEE_LIST_LOADED,
            employeeList: response
        });
    };

    OraServerActions.loadPhoneContactData = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOAD_PHONE_CONTACT_DATA,
            data: data
        });
    };

    OraServerActions.clearCustomerSession = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CLEAR_CUSTOMER_SESSION,
        });
    };

    OraServerActions.deviceListLoaded = function(prevFilters, data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.DEVICE_LIST_LOADED,
            data: data,
            prevFilters: prevFilters
        });
    };

    OraServerActions.deviceListMoreLoaded = function(prevFilters, data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.DEVICE_LIST_MORE_LOADED,
            data: data,
            prevFilters: prevFilters
        });
    };

    OraServerActions.loadedDeviceOfferFilter = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_DEVICE_OFFER_FILTER,
            data: data
        });
    };

    OraServerActions.loadedDeviceParameterFilter = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_DEVICE_PARAMETER_FILTER,
            data: data
        });
    };


    OraServerActions.validateItems = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFIED_ITEMS,
            status: data.status,
            vendor: data.vendor,
        });
    };



    OraServerActions.loadedMNPData = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_MNP_DATA,
            data: data
        });
    };

    OraServerActions.loadedCustomerAdditionalDocuments = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CUSTOMER_ADDITIONAL_DOCUMENTS,
            data: data
        })
    };

    OraServerActions.loadedChannel = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CHANNEL,
            data: data
        })
    };

    OraServerActions.checkMsisdnType = function(number) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECK_MSISDN_TYPE,
            number: number
        });
    };

    OraServerActions.validateSerialNumbers = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFY_SERIAL_NUMBERS,
            data: data
        })
    };

    OraServerActions.verifyNumber = function(number, processType) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFY_NUMBER,
            number: number,
            processType: processType
        });
    };

    OraServerActions.getOffersByMsisdn = function(number) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_OFFERS_BY_MSISDN,
            number: number
        });
    };

    OraServerActions.sapIfsReservationDone = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SAP_IFS_RESERVATION_DONE,
            data: data
        });
        OraServerActions._executeAfter(OraServerActions.sapIfsReservationDone);
    };

    OraServerActions.cvManualVerificationResult = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CV_MANUAL_VERIFICATION_RESULT,
            code: data.code,
            description: data.description,
            callbackUrl: data.callbackUrl
        });
    };

    OraServerActions.cvManualVerificationResultError = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CV_MANUAL_VERIFICATION_RESULT_ERROR,
            code: data.code,
            description: data.description,
            callbackUrl: data.callbackUrl
        });
    };

    return OraServerActions;
})(OraMetaActions);
export default OraServerActions;