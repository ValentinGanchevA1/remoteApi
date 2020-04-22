define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher"], function(e, a, r) {
    "use strict";
    var t;

    function R(e, t) {
        var a = t.responseJSON;
        return {
            type: e,
            error: a,
            status: a.status,
            message: a.message
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, a = babelHelpers.interopRequireDefault(a), r = babelHelpers.interopRequireDefault(r);
    var d = ((t = {}).addToCart = function(e) {
        r.default.dispatch(R(a.default.ADD_TO_CART_ERROR, e))
    }, t.reserveMsisdn = function(e) {
        r.default.dispatch(R(a.default.RESERVE_MSISDN_ERROR, e))
    }, t.calculatePrice = function(e) {
        r.default.dispatch(R(a.default.OFFER_CALCULATION_ERROR, e))
    }, t.checkoutStepError = function() {
        r.default.dispatch({
            type: a.default.CHECKOUT_STEP_ERROR
        })
    }, t.failedToLoadDocumentFromOrder = function(e, t) {
        r.default.dispatch({
            type: a.default.LOAD_DOCUMENT_FROM_ORDER_ERROR,
            documentCode: e,
            bundleNumber: t
        })
    }, t.createAssistStateError = function(e) {
        r.default.dispatch(R(a.default.ASSIST_MODE_STATE_ERROR, e))
    }, t.createAssistModeEnterError = function(e) {
        r.default.dispatch(R(a.default.ASSIST_MODE_ENTER_ERROR, e))
    }, t.createAssistModeLeaveError = function(e) {
        r.default.dispatch(R(a.default.ASSIST_MODE_LEAVE_ERROR, e))
    }, t.createEmployeeListSearchError = function(e) {
        r.default.dispatch(R(a.default.EMPLOYEE_LIST_SEARCH_ERROR, e))
    }, t.createDeviceListSearchError = function(e) {
        r.default.dispatch(R(a.default.DEVICE_LIST_SEARCH_ERROR, e))
    }, t.checkAndOrderSerialNumbersError = function(e) {
        r.default.dispatch(R(a.default.CHECK_SERIAL_NUMBERS_ERROR, e))
    }, t.sapFioriLinksError = function(e) {
        r.default.dispatch(R(a.default.SAP_FIORI_LINKS_ERROR, e))
    }, t.unlockSaleInSapError = function(e) {
        r.default.dispatch(R(a.default.UNLOCK_SALE_IN_SAP_ERROR, e))
    }, t.paymentAndFiscalizationDataError = function(e) {
        r.default.dispatch(R(a.default.GET_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP_ERROR, e))
    }, t.createOrderPaymentValidationError = function(e) {
        r.default.dispatch(R(a.default.PAYMENT_STATUS_VERIFICATION_ERROR, e))
    }, t.createOrderNumberPrintError = function(e) {
        r.default.dispatch(R(a.default.PRINT_ORDER_NUMBER_DOCUMENT_ERROR, e))
    }, t.createInvoicePrintError = function(e) {
        r.default.dispatch(R(a.default.PRINT_INVOICE_DOCUMENT_ERROR, e))
    }, t.orderCancelError = function(e) {
        r.default.dispatch(R(a.default.ORDER_CANCEL_RESPONSE_ERROR, e))
    }, t.getOffers = function(e) {
        r.default.dispatch(R(a.default.GET_OFFERS_ERROR, e))
    }, t.getSimCardTypesError = function(e) {
        r.default.dispatch(R(a.default.GET_SIM_CARD_TYPES_ERROR, e))
    }, t.verifyNumber = function(e) {
        r.default.dispatch(R(a.default.VERIFY_NUMBER_ERROR, e))
    }, t);
    e.default = d
});
//# sourceMappingURL=OraFailureActions.js.map