import ORA_ACTIONS from "./OraActionKeys";
import OraDispatcher from "eshop/flux/dispatcher/OraDispatcher";
/**
 * Action creator for errors and failures on remote calls.
 * Dispatched when error status is returned from an async call.
 */
let OraFailureActions = (function(OraFailureActions) {
    /**
     * Creates a failure action from a response of type pl.orange.oplstorefront.data.RestErrorData
     **/
    function createFailureAction(type, xhr) {
        var errorData = xhr.responseJSON;
        return {
            type: type,
            error: errorData,
            status: errorData.status,
            message: errorData.message
        };
    }

    OraFailureActions.addToCart = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.ADD_TO_CART_ERROR, xhr));
    };

    OraFailureActions.reserveMsisdn = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.RESERVE_MSISDN_ERROR, xhr));
    };

    OraFailureActions.calculatePrice = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.OFFER_CALCULATION_ERROR, xhr));
    };

    OraFailureActions.checkoutStepError = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECKOUT_STEP_ERROR
        });
    };

    OraFailureActions.failedToLoadDocumentFromOrder = function(documentCode, bundleNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOAD_DOCUMENT_FROM_ORDER_ERROR,
            documentCode: documentCode,
            bundleNumber: bundleNumber
        });
    };

    OraFailureActions.createAssistStateError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.ASSIST_MODE_STATE_ERROR, xhr));
    };

    OraFailureActions.createAssistModeEnterError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.ASSIST_MODE_ENTER_ERROR, xhr));
    };

    OraFailureActions.createAssistModeLeaveError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.ASSIST_MODE_LEAVE_ERROR, xhr));
    };

    OraFailureActions.createEmployeeListSearchError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.EMPLOYEE_LIST_SEARCH_ERROR, xhr));
    };

    OraFailureActions.createDeviceListSearchError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.DEVICE_LIST_SEARCH_ERROR, xhr));
    };

    OraFailureActions.checkAndOrderSerialNumbersError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.CHECK_SERIAL_NUMBERS_ERROR, xhr));
    };

    OraFailureActions.sapFioriLinksError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.SAP_FIORI_LINKS_ERROR, xhr));
    };

    OraFailureActions.unlockSaleInSapError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.UNLOCK_SALE_IN_SAP_ERROR, xhr));
    };

    OraFailureActions.paymentAndFiscalizationDataError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.GET_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP_ERROR, xhr));
    };

    OraFailureActions.createOrderPaymentValidationError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.PAYMENT_STATUS_VERIFICATION_ERROR, xhr));
    };

    OraFailureActions.createOrderNumberPrintError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.PRINT_ORDER_NUMBER_DOCUMENT_ERROR, xhr));
    };

    OraFailureActions.createInvoicePrintError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.PRINT_INVOICE_DOCUMENT_ERROR, xhr));
    };

    OraFailureActions.orderCancelError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.ORDER_CANCEL_RESPONSE_ERROR, xhr));
    };

    OraFailureActions.getOffers = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.GET_OFFERS_ERROR, xhr));
    };

    OraFailureActions.getSimCardTypesError = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.GET_SIM_CARD_TYPES_ERROR, xhr));
    };

    OraFailureActions.verifyNumber = function(xhr) {
        OraDispatcher.dispatch(createFailureAction(ORA_ACTIONS.VERIFY_NUMBER_ERROR, xhr));
    };

    return OraFailureActions;
})({});
export default OraFailureActions;