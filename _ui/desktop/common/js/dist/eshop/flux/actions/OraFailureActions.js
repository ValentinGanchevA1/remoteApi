define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher"], function(_exports, _OraActionKeys, _OraDispatcher) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _OraActionKeys = babelHelpers.interopRequireDefault(_OraActionKeys);
    _OraDispatcher = babelHelpers.interopRequireDefault(_OraDispatcher);

    /**
     * Action creator for errors and failures on remote calls.
     * Dispatched when error status is returned from an async call.
     */
    var OraFailureActions = function(OraFailureActions) {
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
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.ADD_TO_CART_ERROR, xhr));
        };

        OraFailureActions.reserveMsisdn = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.RESERVE_MSISDN_ERROR, xhr));
        };

        OraFailureActions.calculatePrice = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.OFFER_CALCULATION_ERROR, xhr));
        };

        OraFailureActions.checkoutStepError = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECKOUT_STEP_ERROR
            });
        };

        OraFailureActions.failedToLoadDocumentFromOrder = function(documentCode, bundleNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOAD_DOCUMENT_FROM_ORDER_ERROR,
                documentCode: documentCode,
                bundleNumber: bundleNumber
            });
        };

        OraFailureActions.createAssistStateError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.ASSIST_MODE_STATE_ERROR, xhr));
        };

        OraFailureActions.createAssistModeEnterError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.ASSIST_MODE_ENTER_ERROR, xhr));
        };

        OraFailureActions.createAssistModeLeaveError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.ASSIST_MODE_LEAVE_ERROR, xhr));
        };

        OraFailureActions.createEmployeeListSearchError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.EMPLOYEE_LIST_SEARCH_ERROR, xhr));
        };

        OraFailureActions.createDeviceListSearchError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.DEVICE_LIST_SEARCH_ERROR, xhr));
        };

        OraFailureActions.checkAndOrderSerialNumbersError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.CHECK_SERIAL_NUMBERS_ERROR, xhr));
        };

        OraFailureActions.sapFioriLinksError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.SAP_FIORI_LINKS_ERROR, xhr));
        };

        OraFailureActions.unlockSaleInSapError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.UNLOCK_SALE_IN_SAP_ERROR, xhr));
        };

        OraFailureActions.paymentAndFiscalizationDataError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.GET_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP_ERROR, xhr));
        };

        OraFailureActions.createOrderPaymentValidationError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.PAYMENT_STATUS_VERIFICATION_ERROR, xhr));
        };

        OraFailureActions.createOrderNumberPrintError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.PRINT_ORDER_NUMBER_DOCUMENT_ERROR, xhr));
        };

        OraFailureActions.createInvoicePrintError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.PRINT_INVOICE_DOCUMENT_ERROR, xhr));
        };

        OraFailureActions.orderCancelError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.ORDER_CANCEL_RESPONSE_ERROR, xhr));
        };

        OraFailureActions.getOffers = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.GET_OFFERS_ERROR, xhr));
        };

        OraFailureActions.getSimCardTypesError = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.GET_SIM_CARD_TYPES_ERROR, xhr));
        };

        OraFailureActions.verifyNumber = function(xhr) {
            _OraDispatcher.default.dispatch(createFailureAction(_OraActionKeys.default.VERIFY_NUMBER_ERROR, xhr));
        };

        return OraFailureActions;
    }({});

    var _default = OraFailureActions;
    _exports.default = _default;
});
//# sourceMappingURL=OraFailureActions.js.map