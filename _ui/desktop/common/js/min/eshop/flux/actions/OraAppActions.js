define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher", "./OraMetaActions"], function(e, i, c, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i), c = babelHelpers.interopRequireDefault(c), t = babelHelpers.interopRequireDefault(t);
    var a, d = ((a = t.default).documentConfirmation = function(e) {
        c.default.dispatch({
            type: i.default.DOCUMENT_SIGN_CONFIRMATION,
            checked: e
        }), a._executeAfter(a.documentConfirmation)
    }, a.selectFilter = function(e, t) {
        c.default.dispatch({
            type: i.default.SELECT_FILTER,
            selectedFilter: e,
            selectedFilterType: t
        }), a._executeAfter(a.selectFilter)
    }, a.selectLoyaltyLength = function(e, t) {
        c.default.dispatch({
            type: i.default.LOYALTY_LENGTH_CHANGE,
            selectedFilter: e,
            selectedFilterType: t
        }), a._executeAfter(a.selectLoyaltyLength)
    }, a.selectPropositionOnFilter = function(e, t) {
        c.default.dispatch({
            type: i.default.LOYALTY_LENGTH_CHANGE,
            selectedFilter: e,
            selectedFilterType: t
        }), c.default.dispatch({
            type: i.default.PROPOSITION_FILTER_CHANGE,
            propositionId: e
        }), a._executeAfter(a.selectPropositionOnFilter)
    }, a.selectOffer = function(e) {
        c.default.dispatch({
            type: i.default.SELECT_OFFER,
            offer: e
        }), a._executeAfter(a.selectOffer)
    }, a.selectService = function(e) {
        c.default.dispatch({
            type: i.default.SELECT_SERVICE,
            serviceId: e
        }), a._executeAfter(a.selectService)
    }, a.selectSim = function(e) {
        c.default.dispatch({
            type: i.default.SELECT_SIM,
            sim: e
        })
    }, a.getSimType = function() {
        c.default.dispatch({
            type: i.default.GET_SIM_TYPE
        })
    }, a.selectMsisdn = function(e) {
        c.default.dispatch({
            type: i.default.SELECT_MSISDN,
            msisdn: e
        })
    }, a.searchMsisdns = function(e, t) {
        c.default.dispatch({
            type: i.default.SEARCH_MSISDNS,
            number: e,
            pattern: t
        })
    }, a.rerollMsisdns = function(e, t) {
        c.default.dispatch({
            type: i.default.REROLL_MSISDNS,
            number: e,
            pattern: t
        })
    }, a.releaseMsisdns = function() {
        c.default.dispatch({
            type: i.default.RELEASE_MSISDNS
        })
    }, a.changeSimCardNumber = function(e, t, a, d) {
        c.default.dispatch({
            type: i.default.CHANGE_SIM_CARD_NUMBER,
            simCardNumber: e,
            msisdn: t,
            sku: a,
            bundleNo: d
        })
    }, a.changeTerminalSerialNumber = function(e, t, a) {
        c.default.dispatch({
            type: i.default.CHANGE_TERMINAL_SERIAL_NUMBER,
            entryNo: e,
            terminalSerialNumber: a,
            sku: t
        })
    }, a.changeEuroSetElementSerialNumber = function(e, t, a) {
        c.default.dispatch({
            type: i.default.CHANGE_EURO_SET_ELEMENT_SERIAL_NUMBER,
            entryNo: e,
            euroSetElementSerialNumber: a,
            sku: t
        })
    }, a.addToCart = function() {
        c.default.dispatch({
            type: i.default.ADD_TO_CART
        })
    }, a.registerPaymentTooltipConfig = function(e, t) {
        c.default.dispatch({
            type: i.default.REGISTER_PAYMENT_TOOLTIP_CONFIG,
            paymentTooltipContent: e,
            paymentTypeTooltipConfig: t
        })
    }, a.selectManfuracturerFilter = function(e) {
        c.default.dispatch({
            type: i.default.SELECT_MANUFACTUTER_FILTER,
            value: e
        })
    }, a.changeOffer = function() {
        c.default.dispatch({
            type: i.default.CHANGE_OFFER
        })
    }, a.modifyOffer = function(e, t, a, d, u, n) {
        c.default.dispatch({
            type: i.default.PROCESS_TYPE_CHANGE,
            processType: a.processType
        }), c.default.dispatch({
            type: i.default.SELECT_OFFER,
            offer: a.offerId
        }), c.default.dispatch({
            type: i.default.MODIFY_OFFER,
            bundleNo: e,
            offerIndex: t,
            msisdn: d,
            offerContext: a,
            numberVerificationData: u
        }), a.device.variantId && c.default.dispatch({
            type: i.default.SELECT_DEVICE,
            productId: a.device.productId,
            variantId: a.device.variantId
        }), c.default.dispatch({
            type: i.default.PAGE_REDIRECT,
            page: n
        }), document.location.href = bsfContextPath + n
    }, a.changeDevice = function(e, t, a, d, u) {
        c.default.dispatch({
            type: i.default.PAGE_REDIRECT,
            page: e
        }), c.default.dispatch({
            type: i.default.CHANGE_DEVICE,
            url: e,
            offerId: t,
            from: a,
            deviceId: d,
            variantId: u
        })
    }, a.gotoDeviceDetailsPage = function(e, t, a) {
        c.default.dispatch({
            type: i.default.GOTO_DEVICE_DETAILS_PAGE,
            url: e,
            variantId: t,
            from: a
        })
    }, a.selectDevice = function(t, a, d, u) {
        return new Promise(function(e) {
            c.default.dispatch({
                type: i.default.SELECT_DEVICE,
                productId: t,
                variantId: a,
                propositionId: d,
                stockLevel: u
            }), e()
        })
    }, a.selectDeviceColor = function(e, t, a) {
        c.default.dispatch({
            type: i.default.SELECT_DEVICE_COLOR,
            productId: e,
            variantId: t,
            propositionId: a
        })
    }, a.selectDeviceColorForProposition = function(e, t) {
        c.default.dispatch({
            type: i.default.SELECT_DEVICE_COLOR_FOR_PROPOSITION,
            variantId: e,
            propositionId: t
        })
    }, a.returnDeviceList = function() {
        c.default.dispatch({
            type: i.default.RETURN_DEVICE_LIST
        })
    }, a.doCheckoutStep = function() {
        c.default.dispatch({
            type: i.default.DO_CHECKOUT_STEP
        })
    }, a.checkConstent = function(e, t) {
        c.default.dispatch({
            type: i.default.CHECK_CONSTENT,
            code: e,
            stateCode: t
        })
    }, a.checkBenefit = function(e, t) {
        c.default.dispatch({
            type: i.default.CHECK_BENEFIT,
            code: e,
            checked: t
        })
    }, a.selectDeliveryData = function(e, t) {
        c.default.dispatch({
            type: i.default.SELECT_DELIVERY_DATA,
            selectedDeliveryData: e,
            bundleNumbers: t
        })
    }, a.formCourierRowChanged = function(e, t, a) {
        c.default.dispatch({
            type: i.default.FORM_COURIER_ROW_CHANGED,
            rowId: e,
            data: t,
            bundleNumbers: a
        })
    }, a.formPhoneContactChanged = function(e, t) {
        c.default.dispatch({
            type: i.default.FORM_PHONE_CONTACT_CHANGED,
            data: e,
            bundleNumbers: t
        })
    }, a.changeTextAreaCourier = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_TEXT_AREA_DELIVERY_COURIER,
            data: e,
            bundleNumbers: t
        })
    }, a.checkAllBenefits = function() {
        c.default.dispatch({
            type: i.default.CHECK_ALL_BENEFIT
        })
    }, a.postCodeChanged = function(e) {
        c.default.dispatch({
            type: i.default.POST_CODE_CHANGED,
            postCode: e
        })
    }, a.createDeliveryDataCourierForm = function() {
        c.default.dispatch({
            type: i.default.CREATE_FORM_COURIER_DELIVERY_DATA
        })
    }, a.checkConsentCheckbox = function(e) {
        c.default.dispatch({
            type: i.default.CHECK_CONSENT_CHECKBOX,
            code: e
        })
    }, a.checkDiscountConsentCheckbox = function(e) {
        c.default.dispatch({
            type: i.default.CHECK_DISCOUNT_CONSENT_CHECKBOX,
            code: e
        })
    }, a.registerCvValidationPopup = function(e) {
        c.default.dispatch({
            type: i.default.REGISTER_CV_VALIDATION_POPUP,
            data: e
        })
    }, a.registerManualVerificationRedirectPopup = function(e) {
        c.default.dispatch({
            type: i.default.REGISTER_CV_MANUAL_VERIFICATION_REDIRECT_POPUP,
            data: e
        })
    }, a.registerManualVerificationExistsPopup = function(e) {
        c.default.dispatch({
            type: i.default.REGISTER_CV_MANUAL_VERIFICATION_EXISTS_POPUP,
            data: e
        })
    }, a.cvManualVerificationContinueButtonClicked = function(e) {
        c.default.dispatch({
            type: i.default.CV_MANUAL_VERIFICATION_CONTINUE_BUTTON_CLICK,
            data: e
        })
    }, a.registerDeliveryDataComponent = function(e, t) {
        c.default.dispatch({
            type: i.default.REGISTER_DELIVERY_DATA_COMPONENT,
            name: e,
            functionName: t
        })
    }, a.agreeAllConsents = function(e, t, a, d) {
        c.default.dispatch({
            type: i.default.AGREE_ALL_CONSENTS,
            consentGroup: e,
            consentRequire: t,
            consentStateRequire: a,
            consentsWithBonus: d
        })
    }, a.paymentMethodSelected = function(e, t) {
        c.default.dispatch({
            type: i.default.PAYMENT_METHOD_SELECTED,
            data: {
                paymentMethod: e,
                bundleNumbers: t
            }
        })
    }, a.paymentMethodUnselect = function(e) {
        c.default.dispatch({
            type: i.default.PAYMENT_METHOD_UNSELECT,
            data: {
                bundleNo: e
            }
        })
    }, a.deliveryMethodSelected = function(e, t) {
        c.default.dispatch({
            type: i.default.DELIVERY_METHOD_SELECTED,
            data: {
                deliveryMethod: e,
                bundleNumbers: t
            }
        })
    }, a.openDocument = function(e, t) {
        c.default.dispatch({
            type: i.default.LOADED_CONSENTS_DOCUMENT,
            code: e,
            bundleNo: t
        })
    }, a.getOrCreateDocument = function(e, t) {
        c.default.dispatch({
            type: i.default.GET_OR_CREATE_DOCUMENT,
            code: e,
            bundleNo: t
        })
    }, a.registerCheckoutCondition = function(e, t) {
        c.default.dispatch({
            type: i.default.REGISTER_CHECKOUT_CONDITION,
            condition: e,
            param: t
        })
    }, a.registerSimValidation = function(e, t) {
        c.default.dispatch({
            type: i.default.REGISTER_SIM_VALIDATION,
            msisdn: e,
            checkoutRecovery: t
        })
    }, a.registerImeiValidation = function(e) {
        c.default.dispatch({
            type: i.default.REGISTER_IMEI_VALIDATION,
            imei: e
        })
    }, a.validateSimCardButtonClick = function() {
        c.default.dispatch({
            type: i.default.VERIFY_SIM_CARDS_BUTTON_CLICK
        })
    }, a.printConsentsButtonFail = function() {
        c.default.dispatch({
            type: i.default.PRINT_CONSENTS_BUTTON_FAIL
        })
    }, a.printConsentsButtonClick = function() {
        c.default.dispatch({
            type: i.default.PRINT_CONSENTS_BUTTON_CLICK
        })
    }, a.printReportButtonClick = function(e) {
        var t = null;
        e && (t = e), c.default.dispatch({
            type: i.default.PRINT_REPORT,
            downloadPath: t
        })
    }, a.removeFromCart = function(e, t) {
        c.default.dispatch({
            type: i.default.REMOVE_FROM_CART,
            bundleNo: e,
            offerIndex: t
        })
    }, a.initialize = function() {
        c.default.dispatch({
            type: i.default.INITIALIZE
        })
    }, a.getDocumentFromOrder = function(e, t) {
        c.default.dispatch({
            type: i.default.GET_DOCUMENT_FROM_ORDER,
            documentCode: e,
            bundleNo: t
        })
    }, a.getPosesForPosition = function(e, t, a) {
        c.default.dispatch({
            type: i.default.GET_POSES_FOR_POSITION,
            position: e,
            bundleNumbers: t,
            deliveryModeCode: a
        })
    }, a.selectPosForDelivery = function(e, t) {
        c.default.dispatch({
            type: i.default.SELECT_POS_FOR_DELIVERY,
            id: e,
            bundleNumbers: t
        })
    }, a.changeOrderComment = function(e) {
        c.default.dispatch({
            type: i.default.CHANGE_ORDER_COMMENT,
            data: e
        })
    }, a.assistModeState = function() {
        c.default.dispatch({
            type: i.default.ASSIST_MODE_STATE
        })
    }, a.enterAssistMode = function(e) {
        c.default.dispatch({
            type: i.default.ASSIST_MODE_ENTER,
            data: {
                sisId: e
            }
        })
    }, a.leaveAssistMode = function() {
        c.default.dispatch({
            type: i.default.ASSIST_MODE_LEAVE
        })
    }, a.searchEmployees = function(e, t) {
        c.default.dispatch({
            type: i.default.EMPLOYEE_LIST_SEARCH,
            filters: e,
            limit: t
        })
    }, a.changeTelesalesData = function(e) {
        c.default.dispatch({
            type: i.default.CHANGE_TELESALES_DATA,
            data: e
        })
    }, a.registerMiniCartComponent = function(e) {
        c.default.dispatch({
            type: i.default.REGISTER_MINI_CART_COMPONENT,
            id: e
        })
    }, a.searchDevices = function(e) {
        c.default.dispatch({
            type: i.default.DEVICE_LIST_SEARCH
        })
    }, a.searchMoreDevices = function() {
        c.default.dispatch({
            type: i.default.DEVICE_LIST_SEARCH_MORE
        })
    }, a.initializeDiscountComponent = function(e) {
        c.default.dispatch({
            type: i.default.INITIALIZE_DISCOUNT_COMPONENT,
            consentType: e
        })
    }, a.validateAndOrderButtonClick = function() {
        c.default.dispatch({
            type: i.default.VERIFY_AND_ORDER_ITEMS_BUTTON_CLICK
        })
    }, a.getSapFioriLinks = function() {
        c.default.dispatch({
            type: i.default.GET_SAP_FIORI_LINKS
        })
    }, a.openCrossSellingInSapButtonClick = function() {
        c.default.dispatch({
            type: i.default.OPEN_CROSS_SELLING_IN_SAP_BUTTON_CLICK
        })
    }, a.unlockSaleInSapButtonClick = function() {
        c.default.dispatch({
            type: i.default.UNLOCK_SALE_IN_SAP_BUTTON_CLICK
        })
    }, a.checkUnlockSaleInSapStatusButtonClick = function() {
        c.default.dispatch({
            type: i.default.CHECK_UNLOCK_SALE_IN_SAP_BUTTON_CLICK
        })
    }, a.getPaymentAndFiscalizationDataFromSap = function() {
        c.default.dispatch({
            type: i.default.GET_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP
        })
    }, a.checkPaymentStatusButtonClick = function() {
        c.default.dispatch({
            type: i.default.CHECK_PAYMENT_STATUS_BUTTON_CLICK
        })
    }, a.orderPaymentOverride = function(e) {
        c.default.dispatch({
            type: i.default.ORDER_PAYMENT_OVERRIDE,
            checked: e
        })
    }, a.printOrderNumberButtonClick = function() {
        c.default.dispatch({
            type: i.default.PRINT_ORDER_NUMBER_BUTTON_CLICK
        })
    }, a.getSapFioriCorrectiveInvoiceLink = function() {
        c.default.dispatch({
            type: i.default.GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK
        })
    }, a.orderCancel = function(e) {
        c.default.dispatch({
            type: i.default.ORDER_CANCEL,
            orderId: e
        })
    }, a.printOrderInvoiceButtonClick = function() {
        c.default.dispatch({
            type: i.default.PRINT_ORDER_INVOICE_BUTTON_CLICK
        })
    }, a.selectOperator = function(e, t) {
        c.default.dispatch({
            type: i.default.SELECT_OPERATOR,
            bundleNo: e,
            operator: t
        })
    }, a.selectOfferType = function(e, t) {
        c.default.dispatch({
            type: i.default.SELECT_OFFER_TYPE,
            bundleNo: e,
            offerType: t
        })
    }, a.selectContactMethod = function(e, t) {
        c.default.dispatch({
            type: i.default.SELECT_CONTACT_METHOD,
            bundleNo: e,
            contactMethod: t
        })
    }, a.changeMNPContactEmail = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_MNP_CONTACT_EMAIL,
            bundleNo: e,
            mnpContactEmail: t
        })
    }, a.selectMigrationMode = function(e, t) {
        c.default.dispatch({
            type: i.default.SELECT_MIGRATION_MODE,
            bundleNo: e,
            migrationMode: t
        })
    }, a.changeMobileNumber = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_MOBILE_NUMBER,
            bundleNo: e,
            mobileNumber: t
        })
    }, a.changeTemporalNumber = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_TEMPORAL_NUMBER,
            bundleNo: e,
            temporalNumber: t
        })
    }, a.chooseAgreementType = function(e, t) {
        c.default.dispatch({
            type: i.default.CHOOSE_AGREEMENT_TYPE,
            bundleNo: e,
            agreementType: t
        })
    }, a.changeBusinessName = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_BUSINESS_NAME,
            bundleNo: e,
            businessName: t
        })
    }, a.changeNip = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_NIP,
            bundleNo: e,
            nip: t
        })
    }, a.changeRegon = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_REGON,
            bundleNo: e,
            regon: t
        })
    }, a.setIsHeadquarterAddressSame = function(e, t) {
        c.default.dispatch({
            type: i.default.HEADQUARTERS_ADDRESS,
            bundleNo: e,
            isHeadquartersAddressSame: t
        })
    }, a.changePostalCode = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_POSTAL_CODE,
            bundleNo: e,
            postalCode: t
        })
    }, a.changeCity = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_CITY,
            bundleNo: e,
            city: t
        })
    }, a.changeStreet = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_STREET,
            bundleNo: e,
            street: t
        })
    }, a.changeHouseNumber = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_HOUSE_NUMBER,
            bundleNo: e,
            houseNumber: t
        })
    }, a.changeFlatNumber = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_FLAT_NUMBER,
            bundleNo: e,
            flatNumber: t
        })
    }, a.changeDate = function(e, t) {
        c.default.dispatch({
            type: i.default.CHANGE_DATE,
            bundleNo: e,
            date: t
        })
    }, a.createMNPData = function(e) {
        c.default.dispatch({
            type: i.default.CREATE_MNP_DATA,
            bundleNo: e
        })
    }, a.selectCustomerAdditionalDocument = function(e) {
        c.default.dispatch({
            type: i.default.SELECT_CUSTOMER_ADDITIONAL_DOCUMENT,
            selectedCustomerAdditionalDocument: e
        }), a._executeAfter(a.selectCustomerAdditionalDocument)
    }, a.changeCustomerWorkPhoneNumber = function(e) {
        c.default.dispatch({
            type: i.default.CHANGE_CUSTOMER_WORK_PHONE_NUMBER,
            customerWorkPhoneNumber: e
        })
    }, a.cleanVerificationData = function() {
        c.default.dispatch({
            type: i.default.CLEAN_VERIFICATION_DATA
        })
    }, a.createNewBillingAccount = function(e) {
        c.default.dispatch({
            type: i.default.OPL_CUSTOMER_ACCOUNT_NEW,
            data: e
        })
    }, a.selectedExistingBillingAccount = function(e) {
        c.default.dispatch({
            type: i.default.OPL_CUSTOMER_ACCOUNT_EXISTING,
            data: e
        })
    }, a.customerHasBillingAccount = function(e) {
        c.default.dispatch({
            type: i.default.OPL_CUSTOMER_ACCOUNT,
            data: e
        })
    }, a.formRowChanged = function(e, t, a) {
        c.default.dispatch({
            type: i.default.FORM_ROW_CHANGED,
            rowId: e,
            data: t,
            updateState: a
        })
    }, a.recoverSapReservation = function(e) {
        c.default.dispatch({
            type: i.default.SAP_IFS_RESERVATION_DONE,
            data: e
        })
    }, a.recoverSapPayment = function() {
        c.default.dispatch({
            type: i.default.PAYMENT_STATUS_RECOVERY
        })
    }, a.recoverOrder = function() {
        c.default.dispatch({
            type: i.default.CHECKOUT_SUMMARY_ORDER_RECOVERY
        })
    }, a.clearCache = function() {
        c.default.dispatch({
            type: i.default.CLEAR_CACHE
        })
    }, a.isSimPos = function() {
        c.default.dispatch({
            type: i.default.IS_SIM_POS
        })
    }, a.isTerminalPos = function() {
        c.default.dispatch({
            type: i.default.IS_TERMINAL_POS
        })
    }, a.clearVerificationCache = function() {
        c.default.dispatch({
            type: i.default.CLEAR_VERIFICATION_CACHE
        })
    }, a.outOfStockErrorNextStep = function() {
        c.default.dispatch({
            type: i.default.OUT_OF_STOCK_NEXT_STEP
        })
    }, a.sapReservationErrorNextStep = function() {
        c.default.dispatch({
            type: i.default.SAP_RESERVATION_ERROR_NEXT_STEP
        })
    }, a.registerManualVerificationVerifyOnlinePopup = function(e) {
        c.default.dispatch({
            type: i.default.REGISTER_CV_MANUAL_VERIFICATION_VERIFY_ONLINE_POPUP,
            data: e
        })
    }, a);
    e.default = d
});
//# sourceMappingURL=OraAppActions.js.map