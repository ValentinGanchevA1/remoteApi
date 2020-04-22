import ORA_ACTIONS from "./OraActionKeys";
import OraDispatcher from "eshop/flux/dispatcher/OraDispatcher";
import OraMetaActions from "./OraMetaActions";

/**
 * Action creator for application flow actions.
 * Used by components to control application's workflow.
 **/
let OraAppActions = (function(OraActions) {

    OraActions.documentConfirmation = function(checked) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.DOCUMENT_SIGN_CONFIRMATION,
            checked: checked
        });
        OraActions._executeAfter(OraActions.documentConfirmation);
    };

    OraActions.selectFilter = function(selectedFilter, selectedFilterType) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_FILTER,
            selectedFilter: selectedFilter,
            selectedFilterType: selectedFilterType
        });
        OraActions._executeAfter(OraActions.selectFilter);
    };

    OraActions.selectLoyaltyLength = function(selectedFilter, selectedFilterType) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOYALTY_LENGTH_CHANGE,
            selectedFilter: selectedFilter,
            selectedFilterType: selectedFilterType
        });
        OraActions._executeAfter(OraActions.selectLoyaltyLength);
    };

    OraActions.selectPropositionOnFilter = function(selectedFilter, selectedFilterType) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOYALTY_LENGTH_CHANGE,
            selectedFilter: selectedFilter,
            selectedFilterType: selectedFilterType
        });
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PROPOSITION_FILTER_CHANGE,
            propositionId: selectedFilter
        });
        OraActions._executeAfter(OraActions.selectPropositionOnFilter);
    };

    OraActions.selectOffer = function(offerId) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_OFFER,
            offer: offerId
        });
        OraActions._executeAfter(OraActions.selectOffer);
    };

    OraActions.selectService = function(serviceId) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_SERVICE,
            serviceId: serviceId
        });
        OraActions._executeAfter(OraActions.selectService);
    };

    OraActions.selectSim = function(sim) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_SIM,
            sim: sim
        });
    };

    OraActions.getSimType = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_SIM_TYPE
        });
    };

    OraActions.selectMsisdn = function(msisdn) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_MSISDN,
            msisdn: msisdn
        });
    };

    OraActions.searchMsisdns = function(number, pattern) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SEARCH_MSISDNS,
            number: number,
            pattern: pattern
        });
    };

    OraActions.rerollMsisdns = function(number, pattern) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REROLL_MSISDNS,
            number: number,
            pattern: pattern
        });
    };

    OraActions.releaseMsisdns = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.RELEASE_MSISDNS
        });
    };

    OraActions.changeSimCardNumber = function(simCardNumber, msisdn, simSku, bundleNo) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_SIM_CARD_NUMBER,
            simCardNumber: simCardNumber,
            msisdn: msisdn,
            sku: simSku,
            bundleNo: bundleNo
        });
    };

    OraActions.changeTerminalSerialNumber = function(entryNo, sku, terminalSerialNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_TERMINAL_SERIAL_NUMBER,
            entryNo: entryNo,
            terminalSerialNumber: terminalSerialNumber,
            sku: sku
        });
    };

    OraActions.changeEuroSetElementSerialNumber = function(entryNo, sku, euroSetElementSerialNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_EURO_SET_ELEMENT_SERIAL_NUMBER,
            entryNo: entryNo,
            euroSetElementSerialNumber: euroSetElementSerialNumber,
            sku: sku
        });
    };

    OraActions.addToCart = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ADD_TO_CART
        });
    };

    OraActions.registerPaymentTooltipConfig = function(paymentTooltipContent, paymentTypeTooltipConfig) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_PAYMENT_TOOLTIP_CONFIG,
            paymentTooltipContent: paymentTooltipContent,
            paymentTypeTooltipConfig: paymentTypeTooltipConfig
        });
    };

    OraActions.selectManfuracturerFilter = function(value) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_MANUFACTUTER_FILTER,
            value: value
        })
    };

    OraActions.changeOffer = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_OFFER
        });
    };

    OraActions.modifyOffer = function(bundleNo, offerIndex, offerContext, msisdn, numberVerificationData, url) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PROCESS_TYPE_CHANGE,
            processType: offerContext.processType
        });
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_OFFER,
            offer: offerContext.offerId
        });

        OraDispatcher.dispatch({
            type: ORA_ACTIONS.MODIFY_OFFER,
            bundleNo: bundleNo,
            offerIndex: offerIndex,
            msisdn: msisdn,
            offerContext: offerContext,
            numberVerificationData: numberVerificationData
        });

        if (offerContext.device.variantId) {
            OraDispatcher.dispatch({
                type: ORA_ACTIONS.SELECT_DEVICE,
                productId: offerContext.device.productId,
                variantId: offerContext.device.variantId
            });
        }

        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: url
        });
        document.location.href = bsfContextPath + url;
    };

    OraActions.changeDevice = function(url, offerId, from, deviceId, variantId) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAGE_REDIRECT,
            page: url
        });

        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_DEVICE,
            url: url,
            offerId: offerId,
            from: from,
            deviceId: deviceId,
            variantId: variantId
        });
    };

    OraActions.gotoDeviceDetailsPage = function(url, variantId, from) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GOTO_DEVICE_DETAILS_PAGE,
            url: url,
            variantId: variantId,
            from: from
        });
    };

    OraActions.selectDevice = function(productId, variantId, propositionId, stockLevel) {
        return new Promise(function(resolve) {
            OraDispatcher.dispatch({
                type: ORA_ACTIONS.SELECT_DEVICE,
                productId: productId,
                variantId: variantId,
                propositionId: propositionId,
                stockLevel: stockLevel
            });
            resolve();
        });
    };

    OraActions.selectDeviceColor = function(productId, variantId, propositionId) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_DEVICE_COLOR,
            productId: productId,
            variantId: variantId,
            propositionId: propositionId
        });
    };

    OraActions.selectDeviceColorForProposition = function(variantId, propositionId) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_DEVICE_COLOR_FOR_PROPOSITION,
            variantId: variantId,
            propositionId: propositionId
        });
    };

    OraActions.returnDeviceList = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.RETURN_DEVICE_LIST
        });
    };

    OraActions.doCheckoutStep = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.DO_CHECKOUT_STEP
        });
    };

    OraActions.checkConstent = function(code, stateCode) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECK_CONSTENT,
            code: code,
            stateCode: stateCode
        });
    };

    OraActions.checkBenefit = function(code, checked) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECK_BENEFIT,
            code: code,
            checked: checked
        });
    };

    OraActions.selectDeliveryData = function(selectedDeliveryData, bundleNumbers) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_DELIVERY_DATA,
            selectedDeliveryData: selectedDeliveryData,
            bundleNumbers: bundleNumbers
        });
    };

    OraActions.formCourierRowChanged = function(rowId, data, bundleNumbers) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.FORM_COURIER_ROW_CHANGED,
            rowId: rowId,
            data: data,
            bundleNumbers: bundleNumbers
        });
    };

    OraActions.formPhoneContactChanged = function(data, bundleNumbers) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.FORM_PHONE_CONTACT_CHANGED,
            data: data,
            bundleNumbers: bundleNumbers
        });
    };

    OraActions.changeTextAreaCourier = function(data, bundleNumbers) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_TEXT_AREA_DELIVERY_COURIER,
            data: data,
            bundleNumbers: bundleNumbers
        });
    };


    OraActions.checkAllBenefits = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECK_ALL_BENEFIT
        });
    };

    OraActions.postCodeChanged = function(postCode) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.POST_CODE_CHANGED,
            postCode: postCode
        });
    };

    OraActions.createDeliveryDataCourierForm = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CREATE_FORM_COURIER_DELIVERY_DATA
        });
    };

    OraActions.checkConsentCheckbox = function(code) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECK_CONSENT_CHECKBOX,
            code: code
        });
    };

    OraActions.checkDiscountConsentCheckbox = function(code) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECK_DISCOUNT_CONSENT_CHECKBOX,
            code: code
        });
    };

    OraActions.registerCvValidationPopup = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_CV_VALIDATION_POPUP,
            data: data
        });
    };

    OraActions.registerManualVerificationRedirectPopup = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_CV_MANUAL_VERIFICATION_REDIRECT_POPUP,
            data: data
        });
    };

    OraActions.registerManualVerificationExistsPopup = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_CV_MANUAL_VERIFICATION_EXISTS_POPUP,
            data: data
        });
    };

    OraActions.cvManualVerificationContinueButtonClicked = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CV_MANUAL_VERIFICATION_CONTINUE_BUTTON_CLICK,
            data: data
        });
    };

    OraActions.registerDeliveryDataComponent = function(name, functionName) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_DELIVERY_DATA_COMPONENT,
            name: name,
            functionName: functionName
        });
    };

    OraActions.agreeAllConsents = function(consentGroup, consentRequire, consentStateRequire, consentsWithBonus) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.AGREE_ALL_CONSENTS,
            consentGroup: consentGroup,
            consentRequire: consentRequire,
            consentStateRequire: consentStateRequire,
            consentsWithBonus: consentsWithBonus
        });
    };

    OraActions.paymentMethodSelected = function(paymentMethodKey, bundleNumbers) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAYMENT_METHOD_SELECTED,
            data: {
                paymentMethod: paymentMethodKey,
                bundleNumbers: bundleNumbers
            }
        });
    };

    OraActions.paymentMethodUnselect = function(bundleNo) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAYMENT_METHOD_UNSELECT,
            data: {
                bundleNo: bundleNo
            }
        });
    };

    OraActions.deliveryMethodSelected = function(deliveryMethodKey, bundleNumbers) {
        console.log(deliveryMethodKey);
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.DELIVERY_METHOD_SELECTED,
            data: {
                deliveryMethod: deliveryMethodKey,
                bundleNumbers: bundleNumbers
            }
        });
    };

    OraActions.openDocument = function(documentCode, bundleNo) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.LOADED_CONSENTS_DOCUMENT,
            code: documentCode,
            bundleNo: bundleNo
        });
    };

    OraActions.getOrCreateDocument = function(documentCode, bundleNo) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_OR_CREATE_DOCUMENT,
            code: documentCode,
            bundleNo: bundleNo
        });
    };

    /**
     * action for register condition
     * params:
     * condition - condition name
     * */
    OraActions.registerCheckoutCondition = function(condition, param) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_CHECKOUT_CONDITION,
            condition: condition,
            param: param
        });
    };
    /**
     * action for register pick sim number component
     * params:
     * msisdn - msisdn number
     * */
    OraActions.registerSimValidation = function(msisdn, recovery) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_SIM_VALIDATION,
            msisdn: msisdn,
            checkoutRecovery: recovery
        });
    };

    OraActions.registerImeiValidation = function(imei) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_IMEI_VALIDATION,
            imei: imei
        });
    };


    OraActions.validateSimCardButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFY_SIM_CARDS_BUTTON_CLICK
        });
    };

    OraActions.printConsentsButtonFail = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PRINT_CONSENTS_BUTTON_FAIL
        });
    };

    OraActions.printConsentsButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PRINT_CONSENTS_BUTTON_CLICK
        });
    };

    OraActions.printReportButtonClick = function(data) {
        let downloadPath = null;

        if (data) {
            downloadPath = data;
        }

        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PRINT_REPORT,
            downloadPath: downloadPath
        });
    };

    /**
     * action for removing bundle or cart if parameter is null
     * params:
     * bundleNo - bundle number of item to delete / if null whole cart deleted
     * */
    OraActions.removeFromCart = function(bundleNo, offerIndex) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REMOVE_FROM_CART,
            bundleNo: bundleNo,
            offerIndex: offerIndex
        });
    };

    OraActions.initialize = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.INITIALIZE
        });
    };

    OraActions.getDocumentFromOrder = function(documentCode, bundleNo) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_DOCUMENT_FROM_ORDER,
            documentCode: documentCode,
            bundleNo: bundleNo
        });
    };

    OraActions.getPosesForPosition = function(position, bundleNumbers, deliveryModeCode) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_POSES_FOR_POSITION,
            position: position,
            bundleNumbers: bundleNumbers,
            deliveryModeCode: deliveryModeCode
        });
    };

    OraActions.selectPosForDelivery = function(id, bundleNumbers) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_POS_FOR_DELIVERY,
            id: id,
            bundleNumbers: bundleNumbers
        });
    };

    OraActions.changeOrderComment = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_ORDER_COMMENT,
            data: data
        });
    };

    OraActions.assistModeState = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ASSIST_MODE_STATE
        });
    };

    OraActions.enterAssistMode = function(sisId) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ASSIST_MODE_ENTER,
            data: {
                sisId: sisId
            }
        });
    };

    OraActions.leaveAssistMode = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ASSIST_MODE_LEAVE
        });
    };

    OraActions.searchEmployees = function(filters, limit) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.EMPLOYEE_LIST_SEARCH,
            filters: filters,
            limit: limit
        });
    };

    OraActions.changeTelesalesData = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_TELESALES_DATA,
            data: data
        });
    };

    OraActions.registerMiniCartComponent = function(id) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_MINI_CART_COMPONENT,
            id: id
        });
    };

    OraActions.searchDevices = function(filters) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.DEVICE_LIST_SEARCH
        });
    };

    OraActions.searchMoreDevices = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.DEVICE_LIST_SEARCH_MORE
        });
    };

    OraActions.initializeDiscountComponent = function(consentType) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.INITIALIZE_DISCOUNT_COMPONENT,
            consentType: consentType
        });
    };

    OraActions.validateAndOrderButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.VERIFY_AND_ORDER_ITEMS_BUTTON_CLICK
        });
    };

    OraActions.getSapFioriLinks = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_SAP_FIORI_LINKS
        });
    };

    OraActions.openCrossSellingInSapButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.OPEN_CROSS_SELLING_IN_SAP_BUTTON_CLICK
        });
    };

    OraActions.unlockSaleInSapButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.UNLOCK_SALE_IN_SAP_BUTTON_CLICK
        });
    };

    OraActions.checkUnlockSaleInSapStatusButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECK_UNLOCK_SALE_IN_SAP_BUTTON_CLICK
        });
    };

    OraActions.getPaymentAndFiscalizationDataFromSap = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP
        });
    };

    OraActions.checkPaymentStatusButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECK_PAYMENT_STATUS_BUTTON_CLICK
        });
    };

    OraActions.orderPaymentOverride = function(checked) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ORDER_PAYMENT_OVERRIDE,
            checked: checked
        });
    };

    OraActions.printOrderNumberButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PRINT_ORDER_NUMBER_BUTTON_CLICK
        });
    };

    OraActions.getSapFioriCorrectiveInvoiceLink = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK
        });
    };

    OraActions.orderCancel = function(orderId) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.ORDER_CANCEL,
            orderId: orderId
        });
    };

    OraActions.printOrderInvoiceButtonClick = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PRINT_ORDER_INVOICE_BUTTON_CLICK
        });
    };

    OraActions.selectOperator = function(bundleNo, operator) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_OPERATOR,
            bundleNo: bundleNo,
            operator: operator
        });
    };

    OraActions.selectOfferType = function(bundleNo, offerType) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_OFFER_TYPE,
            bundleNo: bundleNo,
            offerType: offerType
        });
    };

    OraActions.selectContactMethod = function(bundleNo, contactMethod) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_CONTACT_METHOD,
            bundleNo: bundleNo,
            contactMethod: contactMethod
        });
    };



    OraActions.changeMNPContactEmail = function(bundleNo, mnpContactEmail) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_MNP_CONTACT_EMAIL,
            bundleNo: bundleNo,
            mnpContactEmail: mnpContactEmail
        });
    };



    OraActions.selectMigrationMode = function(bundleNo, migrationMode) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_MIGRATION_MODE,
            bundleNo: bundleNo,
            migrationMode: migrationMode
        });
    };

    OraActions.changeMobileNumber = function(bundleNo, mobileNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_MOBILE_NUMBER,
            bundleNo: bundleNo,
            mobileNumber: mobileNumber
        });
    };
    OraActions.changeTemporalNumber = function(bundleNo, temporalNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_TEMPORAL_NUMBER,
            bundleNo: bundleNo,
            temporalNumber: temporalNumber
        });
    };
    OraActions.chooseAgreementType = function(bundleNo, agreementType) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHOOSE_AGREEMENT_TYPE,
            bundleNo: bundleNo,
            agreementType: agreementType
        });
    };

    OraActions.changeBusinessName = function(bundleNo, businessName) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_BUSINESS_NAME,
            bundleNo: bundleNo,
            businessName: businessName
        });
    };
    OraActions.changeNip = function(bundleNo, nip) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_NIP,
            bundleNo: bundleNo,
            nip: nip
        });
    };
    OraActions.changeRegon = function(bundleNo, regon) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_REGON,
            bundleNo: bundleNo,
            regon: regon
        });
    };
    OraActions.setIsHeadquarterAddressSame = function(bundleNo, isHeadquartersAddressSame) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.HEADQUARTERS_ADDRESS,
            bundleNo: bundleNo,
            isHeadquartersAddressSame: isHeadquartersAddressSame
        });
    };
    OraActions.changePostalCode = function(bundleNo, postalCode) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_POSTAL_CODE,
            bundleNo: bundleNo,
            postalCode: postalCode
        });
    };
    OraActions.changeCity = function(bundleNo, city) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_CITY,
            bundleNo: bundleNo,
            city: city
        });
    };
    OraActions.changeStreet = function(bundleNo, street) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_STREET,
            bundleNo: bundleNo,
            street: street
        });
    };
    OraActions.changeHouseNumber = function(bundleNo, houseNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_HOUSE_NUMBER,
            bundleNo: bundleNo,
            houseNumber: houseNumber
        });
    };
    OraActions.changeFlatNumber = function(bundleNo, flatNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_FLAT_NUMBER,
            bundleNo: bundleNo,
            flatNumber: flatNumber
        });
    };
    OraActions.changeDate = function(bundleNo, date) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_DATE,
            bundleNo: bundleNo,
            date: date
        });
    };
    OraActions.createMNPData = function(bundleNo) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CREATE_MNP_DATA,
            bundleNo: bundleNo
        });
    };

    OraActions.selectCustomerAdditionalDocument = function(selectedCustomerAdditionalDocument) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SELECT_CUSTOMER_ADDITIONAL_DOCUMENT,
            selectedCustomerAdditionalDocument: selectedCustomerAdditionalDocument
        });
        OraActions._executeAfter(OraActions.selectCustomerAdditionalDocument);
    };

    OraActions.changeCustomerWorkPhoneNumber = function(customerWorkPhoneNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHANGE_CUSTOMER_WORK_PHONE_NUMBER,
            customerWorkPhoneNumber: customerWorkPhoneNumber
        });
    };

    OraActions.cleanVerificationData = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CLEAN_VERIFICATION_DATA
        });
    };

    OraActions.createNewBillingAccount = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.OPL_CUSTOMER_ACCOUNT_NEW,
            data: data
        });
    };

    OraActions.selectedExistingBillingAccount = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.OPL_CUSTOMER_ACCOUNT_EXISTING,
            data: data
        });
    };

    OraActions.customerHasBillingAccount = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.OPL_CUSTOMER_ACCOUNT,
            data: data
        });
    };

    OraActions.formRowChanged = function(rowId, data, updateState) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.FORM_ROW_CHANGED,
            rowId: rowId,
            data: data,
            updateState: updateState
        });
    };

    OraActions.recoverSapReservation = function(sapReservationNumber) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SAP_IFS_RESERVATION_DONE,
            data: sapReservationNumber
        });
    };

    OraActions.recoverSapPayment = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.PAYMENT_STATUS_RECOVERY
        });
    };

    OraActions.recoverOrder = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CHECKOUT_SUMMARY_ORDER_RECOVERY
        });
    };

    OraActions.clearCache = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CLEAR_CACHE
        });
    };

    OraActions.isSimPos = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.IS_SIM_POS
        });
    };

    OraActions.isTerminalPos = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.IS_TERMINAL_POS
        });
    };

    OraActions.clearVerificationCache = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.CLEAR_VERIFICATION_CACHE
        });
    };

    OraActions.outOfStockErrorNextStep = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.OUT_OF_STOCK_NEXT_STEP
        });
    };

    OraActions.sapReservationErrorNextStep = function() {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.SAP_RESERVATION_ERROR_NEXT_STEP
        });
    };

    OraActions.registerManualVerificationVerifyOnlinePopup = function(data) {
        OraDispatcher.dispatch({
            type: ORA_ACTIONS.REGISTER_CV_MANUAL_VERIFICATION_VERIFY_ONLINE_POPUP,
            data: data
        });
    };

    return OraActions;
})(OraMetaActions);

export default OraAppActions;