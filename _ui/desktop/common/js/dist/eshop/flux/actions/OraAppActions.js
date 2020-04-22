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
     * Action creator for application flow actions.
     * Used by components to control application's workflow.
     **/
    var OraAppActions = function(OraActions) {
        OraActions.documentConfirmation = function(checked) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.DOCUMENT_SIGN_CONFIRMATION,
                checked: checked
            });

            OraActions._executeAfter(OraActions.documentConfirmation);
        };

        OraActions.selectFilter = function(selectedFilter, selectedFilterType) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_FILTER,
                selectedFilter: selectedFilter,
                selectedFilterType: selectedFilterType
            });

            OraActions._executeAfter(OraActions.selectFilter);
        };

        OraActions.selectLoyaltyLength = function(selectedFilter, selectedFilterType) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOYALTY_LENGTH_CHANGE,
                selectedFilter: selectedFilter,
                selectedFilterType: selectedFilterType
            });

            OraActions._executeAfter(OraActions.selectLoyaltyLength);
        };

        OraActions.selectPropositionOnFilter = function(selectedFilter, selectedFilterType) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOYALTY_LENGTH_CHANGE,
                selectedFilter: selectedFilter,
                selectedFilterType: selectedFilterType
            });

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PROPOSITION_FILTER_CHANGE,
                propositionId: selectedFilter
            });

            OraActions._executeAfter(OraActions.selectPropositionOnFilter);
        };

        OraActions.selectOffer = function(offerId) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_OFFER,
                offer: offerId
            });

            OraActions._executeAfter(OraActions.selectOffer);
        };

        OraActions.selectService = function(serviceId) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_SERVICE,
                serviceId: serviceId
            });

            OraActions._executeAfter(OraActions.selectService);
        };

        OraActions.selectSim = function(sim) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_SIM,
                sim: sim
            });
        };

        OraActions.getSimType = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_SIM_TYPE
            });
        };

        OraActions.selectMsisdn = function(msisdn) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_MSISDN,
                msisdn: msisdn
            });
        };

        OraActions.searchMsisdns = function(number, pattern) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SEARCH_MSISDNS,
                number: number,
                pattern: pattern
            });
        };

        OraActions.rerollMsisdns = function(number, pattern) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REROLL_MSISDNS,
                number: number,
                pattern: pattern
            });
        };

        OraActions.releaseMsisdns = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.RELEASE_MSISDNS
            });
        };

        OraActions.changeSimCardNumber = function(simCardNumber, msisdn, simSku, bundleNo) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_SIM_CARD_NUMBER,
                simCardNumber: simCardNumber,
                msisdn: msisdn,
                sku: simSku,
                bundleNo: bundleNo
            });
        };

        OraActions.changeTerminalSerialNumber = function(entryNo, sku, terminalSerialNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_TERMINAL_SERIAL_NUMBER,
                entryNo: entryNo,
                terminalSerialNumber: terminalSerialNumber,
                sku: sku
            });
        };

        OraActions.changeEuroSetElementSerialNumber = function(entryNo, sku, euroSetElementSerialNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_EURO_SET_ELEMENT_SERIAL_NUMBER,
                entryNo: entryNo,
                euroSetElementSerialNumber: euroSetElementSerialNumber,
                sku: sku
            });
        };

        OraActions.addToCart = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ADD_TO_CART
            });
        };

        OraActions.registerPaymentTooltipConfig = function(paymentTooltipContent, paymentTypeTooltipConfig) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_PAYMENT_TOOLTIP_CONFIG,
                paymentTooltipContent: paymentTooltipContent,
                paymentTypeTooltipConfig: paymentTypeTooltipConfig
            });
        };

        OraActions.selectManfuracturerFilter = function(value) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_MANUFACTUTER_FILTER,
                value: value
            });
        };

        OraActions.changeOffer = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_OFFER
            });
        };

        OraActions.modifyOffer = function(bundleNo, offerIndex, offerContext, msisdn, numberVerificationData, url) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PROCESS_TYPE_CHANGE,
                processType: offerContext.processType
            });

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_OFFER,
                offer: offerContext.offerId
            });

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.MODIFY_OFFER,
                bundleNo: bundleNo,
                offerIndex: offerIndex,
                msisdn: msisdn,
                offerContext: offerContext,
                numberVerificationData: numberVerificationData
            });

            if (offerContext.device.variantId) {
                _OraDispatcher.default.dispatch({
                    type: _OraActionKeys.default.SELECT_DEVICE,
                    productId: offerContext.device.productId,
                    variantId: offerContext.device.variantId
                });
            }

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: url
            });

            document.location.href = bsfContextPath + url;
        };

        OraActions.changeDevice = function(url, offerId, from, deviceId, variantId) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAGE_REDIRECT,
                page: url
            });

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_DEVICE,
                url: url,
                offerId: offerId,
                from: from,
                deviceId: deviceId,
                variantId: variantId
            });
        };

        OraActions.gotoDeviceDetailsPage = function(url, variantId, from) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GOTO_DEVICE_DETAILS_PAGE,
                url: url,
                variantId: variantId,
                from: from
            });
        };

        OraActions.selectDevice = function(productId, variantId, propositionId, stockLevel) {
            return new Promise(function(resolve) {
                _OraDispatcher.default.dispatch({
                    type: _OraActionKeys.default.SELECT_DEVICE,
                    productId: productId,
                    variantId: variantId,
                    propositionId: propositionId,
                    stockLevel: stockLevel
                });

                resolve();
            });
        };

        OraActions.selectDeviceColor = function(productId, variantId, propositionId) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_DEVICE_COLOR,
                productId: productId,
                variantId: variantId,
                propositionId: propositionId
            });
        };

        OraActions.selectDeviceColorForProposition = function(variantId, propositionId) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_DEVICE_COLOR_FOR_PROPOSITION,
                variantId: variantId,
                propositionId: propositionId
            });
        };

        OraActions.returnDeviceList = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.RETURN_DEVICE_LIST
            });
        };

        OraActions.doCheckoutStep = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.DO_CHECKOUT_STEP
            });
        };

        OraActions.checkConstent = function(code, stateCode) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECK_CONSTENT,
                code: code,
                stateCode: stateCode
            });
        };

        OraActions.checkBenefit = function(code, checked) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECK_BENEFIT,
                code: code,
                checked: checked
            });
        };

        OraActions.selectDeliveryData = function(selectedDeliveryData, bundleNumbers) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_DELIVERY_DATA,
                selectedDeliveryData: selectedDeliveryData,
                bundleNumbers: bundleNumbers
            });
        };

        OraActions.formCourierRowChanged = function(rowId, data, bundleNumbers) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.FORM_COURIER_ROW_CHANGED,
                rowId: rowId,
                data: data,
                bundleNumbers: bundleNumbers
            });
        };

        OraActions.formPhoneContactChanged = function(data, bundleNumbers) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.FORM_PHONE_CONTACT_CHANGED,
                data: data,
                bundleNumbers: bundleNumbers
            });
        };

        OraActions.changeTextAreaCourier = function(data, bundleNumbers) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_TEXT_AREA_DELIVERY_COURIER,
                data: data,
                bundleNumbers: bundleNumbers
            });
        };

        OraActions.checkAllBenefits = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECK_ALL_BENEFIT
            });
        };

        OraActions.postCodeChanged = function(postCode) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.POST_CODE_CHANGED,
                postCode: postCode
            });
        };

        OraActions.createDeliveryDataCourierForm = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CREATE_FORM_COURIER_DELIVERY_DATA
            });
        };

        OraActions.checkConsentCheckbox = function(code) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECK_CONSENT_CHECKBOX,
                code: code
            });
        };

        OraActions.checkDiscountConsentCheckbox = function(code) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECK_DISCOUNT_CONSENT_CHECKBOX,
                code: code
            });
        };

        OraActions.registerCvValidationPopup = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_CV_VALIDATION_POPUP,
                data: data
            });
        };

        OraActions.registerManualVerificationRedirectPopup = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_CV_MANUAL_VERIFICATION_REDIRECT_POPUP,
                data: data
            });
        };

        OraActions.registerManualVerificationExistsPopup = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_CV_MANUAL_VERIFICATION_EXISTS_POPUP,
                data: data
            });
        };

        OraActions.cvManualVerificationContinueButtonClicked = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CV_MANUAL_VERIFICATION_CONTINUE_BUTTON_CLICK,
                data: data
            });
        };

        OraActions.registerDeliveryDataComponent = function(name, functionName) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_DELIVERY_DATA_COMPONENT,
                name: name,
                functionName: functionName
            });
        };

        OraActions.agreeAllConsents = function(consentGroup, consentRequire, consentStateRequire, consentsWithBonus) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.AGREE_ALL_CONSENTS,
                consentGroup: consentGroup,
                consentRequire: consentRequire,
                consentStateRequire: consentStateRequire,
                consentsWithBonus: consentsWithBonus
            });
        };

        OraActions.paymentMethodSelected = function(paymentMethodKey, bundleNumbers) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAYMENT_METHOD_SELECTED,
                data: {
                    paymentMethod: paymentMethodKey,
                    bundleNumbers: bundleNumbers
                }
            });
        };

        OraActions.paymentMethodUnselect = function(bundleNo) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAYMENT_METHOD_UNSELECT,
                data: {
                    bundleNo: bundleNo
                }
            });
        };

        OraActions.deliveryMethodSelected = function(deliveryMethodKey, bundleNumbers) {
            console.log(deliveryMethodKey);

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.DELIVERY_METHOD_SELECTED,
                data: {
                    deliveryMethod: deliveryMethodKey,
                    bundleNumbers: bundleNumbers
                }
            });
        };

        OraActions.openDocument = function(documentCode, bundleNo) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.LOADED_CONSENTS_DOCUMENT,
                code: documentCode,
                bundleNo: bundleNo
            });
        };

        OraActions.getOrCreateDocument = function(documentCode, bundleNo) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_OR_CREATE_DOCUMENT,
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
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_CHECKOUT_CONDITION,
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
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_SIM_VALIDATION,
                msisdn: msisdn,
                checkoutRecovery: recovery
            });
        };

        OraActions.registerImeiValidation = function(imei) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_IMEI_VALIDATION,
                imei: imei
            });
        };

        OraActions.validateSimCardButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFY_SIM_CARDS_BUTTON_CLICK
            });
        };

        OraActions.printConsentsButtonFail = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PRINT_CONSENTS_BUTTON_FAIL
            });
        };

        OraActions.printConsentsButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PRINT_CONSENTS_BUTTON_CLICK
            });
        };

        OraActions.printReportButtonClick = function(data) {
            var downloadPath = null;

            if (data) {
                downloadPath = data;
            }

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PRINT_REPORT,
                downloadPath: downloadPath
            });
        };
        /**
         * action for removing bundle or cart if parameter is null
         * params:
         * bundleNo - bundle number of item to delete / if null whole cart deleted
         * */


        OraActions.removeFromCart = function(bundleNo, offerIndex) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REMOVE_FROM_CART,
                bundleNo: bundleNo,
                offerIndex: offerIndex
            });
        };

        OraActions.initialize = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.INITIALIZE
            });
        };

        OraActions.getDocumentFromOrder = function(documentCode, bundleNo) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_DOCUMENT_FROM_ORDER,
                documentCode: documentCode,
                bundleNo: bundleNo
            });
        };

        OraActions.getPosesForPosition = function(position, bundleNumbers, deliveryModeCode) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_POSES_FOR_POSITION,
                position: position,
                bundleNumbers: bundleNumbers,
                deliveryModeCode: deliveryModeCode
            });
        };

        OraActions.selectPosForDelivery = function(id, bundleNumbers) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_POS_FOR_DELIVERY,
                id: id,
                bundleNumbers: bundleNumbers
            });
        };

        OraActions.changeOrderComment = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_ORDER_COMMENT,
                data: data
            });
        };

        OraActions.assistModeState = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ASSIST_MODE_STATE
            });
        };

        OraActions.enterAssistMode = function(sisId) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ASSIST_MODE_ENTER,
                data: {
                    sisId: sisId
                }
            });
        };

        OraActions.leaveAssistMode = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ASSIST_MODE_LEAVE
            });
        };

        OraActions.searchEmployees = function(filters, limit) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.EMPLOYEE_LIST_SEARCH,
                filters: filters,
                limit: limit
            });
        };

        OraActions.changeTelesalesData = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_TELESALES_DATA,
                data: data
            });
        };

        OraActions.registerMiniCartComponent = function(id) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_MINI_CART_COMPONENT,
                id: id
            });
        };

        OraActions.searchDevices = function(filters) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.DEVICE_LIST_SEARCH
            });
        };

        OraActions.searchMoreDevices = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.DEVICE_LIST_SEARCH_MORE
            });
        };

        OraActions.initializeDiscountComponent = function(consentType) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.INITIALIZE_DISCOUNT_COMPONENT,
                consentType: consentType
            });
        };

        OraActions.validateAndOrderButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.VERIFY_AND_ORDER_ITEMS_BUTTON_CLICK
            });
        };

        OraActions.getSapFioriLinks = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_SAP_FIORI_LINKS
            });
        };

        OraActions.openCrossSellingInSapButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.OPEN_CROSS_SELLING_IN_SAP_BUTTON_CLICK
            });
        };

        OraActions.unlockSaleInSapButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.UNLOCK_SALE_IN_SAP_BUTTON_CLICK
            });
        };

        OraActions.checkUnlockSaleInSapStatusButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECK_UNLOCK_SALE_IN_SAP_BUTTON_CLICK
            });
        };

        OraActions.getPaymentAndFiscalizationDataFromSap = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP
            });
        };

        OraActions.checkPaymentStatusButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECK_PAYMENT_STATUS_BUTTON_CLICK
            });
        };

        OraActions.orderPaymentOverride = function(checked) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ORDER_PAYMENT_OVERRIDE,
                checked: checked
            });
        };

        OraActions.printOrderNumberButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PRINT_ORDER_NUMBER_BUTTON_CLICK
            });
        };

        OraActions.getSapFioriCorrectiveInvoiceLink = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK
            });
        };

        OraActions.orderCancel = function(orderId) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.ORDER_CANCEL,
                orderId: orderId
            });
        };

        OraActions.printOrderInvoiceButtonClick = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PRINT_ORDER_INVOICE_BUTTON_CLICK
            });
        };

        OraActions.selectOperator = function(bundleNo, operator) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_OPERATOR,
                bundleNo: bundleNo,
                operator: operator
            });
        };

        OraActions.selectOfferType = function(bundleNo, offerType) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_OFFER_TYPE,
                bundleNo: bundleNo,
                offerType: offerType
            });
        };

        OraActions.selectContactMethod = function(bundleNo, contactMethod) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_CONTACT_METHOD,
                bundleNo: bundleNo,
                contactMethod: contactMethod
            });
        };

        OraActions.changeMNPContactEmail = function(bundleNo, mnpContactEmail) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_MNP_CONTACT_EMAIL,
                bundleNo: bundleNo,
                mnpContactEmail: mnpContactEmail
            });
        };

        OraActions.selectMigrationMode = function(bundleNo, migrationMode) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_MIGRATION_MODE,
                bundleNo: bundleNo,
                migrationMode: migrationMode
            });
        };

        OraActions.changeMobileNumber = function(bundleNo, mobileNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_MOBILE_NUMBER,
                bundleNo: bundleNo,
                mobileNumber: mobileNumber
            });
        };

        OraActions.changeTemporalNumber = function(bundleNo, temporalNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_TEMPORAL_NUMBER,
                bundleNo: bundleNo,
                temporalNumber: temporalNumber
            });
        };

        OraActions.chooseAgreementType = function(bundleNo, agreementType) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHOOSE_AGREEMENT_TYPE,
                bundleNo: bundleNo,
                agreementType: agreementType
            });
        };

        OraActions.changeBusinessName = function(bundleNo, businessName) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_BUSINESS_NAME,
                bundleNo: bundleNo,
                businessName: businessName
            });
        };

        OraActions.changeNip = function(bundleNo, nip) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_NIP,
                bundleNo: bundleNo,
                nip: nip
            });
        };

        OraActions.changeRegon = function(bundleNo, regon) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_REGON,
                bundleNo: bundleNo,
                regon: regon
            });
        };

        OraActions.setIsHeadquarterAddressSame = function(bundleNo, isHeadquartersAddressSame) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.HEADQUARTERS_ADDRESS,
                bundleNo: bundleNo,
                isHeadquartersAddressSame: isHeadquartersAddressSame
            });
        };

        OraActions.changePostalCode = function(bundleNo, postalCode) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_POSTAL_CODE,
                bundleNo: bundleNo,
                postalCode: postalCode
            });
        };

        OraActions.changeCity = function(bundleNo, city) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_CITY,
                bundleNo: bundleNo,
                city: city
            });
        };

        OraActions.changeStreet = function(bundleNo, street) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_STREET,
                bundleNo: bundleNo,
                street: street
            });
        };

        OraActions.changeHouseNumber = function(bundleNo, houseNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_HOUSE_NUMBER,
                bundleNo: bundleNo,
                houseNumber: houseNumber
            });
        };

        OraActions.changeFlatNumber = function(bundleNo, flatNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_FLAT_NUMBER,
                bundleNo: bundleNo,
                flatNumber: flatNumber
            });
        };

        OraActions.changeDate = function(bundleNo, date) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_DATE,
                bundleNo: bundleNo,
                date: date
            });
        };

        OraActions.createMNPData = function(bundleNo) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CREATE_MNP_DATA,
                bundleNo: bundleNo
            });
        };

        OraActions.selectCustomerAdditionalDocument = function(selectedCustomerAdditionalDocument) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SELECT_CUSTOMER_ADDITIONAL_DOCUMENT,
                selectedCustomerAdditionalDocument: selectedCustomerAdditionalDocument
            });

            OraActions._executeAfter(OraActions.selectCustomerAdditionalDocument);
        };

        OraActions.changeCustomerWorkPhoneNumber = function(customerWorkPhoneNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHANGE_CUSTOMER_WORK_PHONE_NUMBER,
                customerWorkPhoneNumber: customerWorkPhoneNumber
            });
        };

        OraActions.cleanVerificationData = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CLEAN_VERIFICATION_DATA
            });
        };

        OraActions.createNewBillingAccount = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.OPL_CUSTOMER_ACCOUNT_NEW,
                data: data
            });
        };

        OraActions.selectedExistingBillingAccount = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.OPL_CUSTOMER_ACCOUNT_EXISTING,
                data: data
            });
        };

        OraActions.customerHasBillingAccount = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.OPL_CUSTOMER_ACCOUNT,
                data: data
            });
        };

        OraActions.formRowChanged = function(rowId, data, updateState) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.FORM_ROW_CHANGED,
                rowId: rowId,
                data: data,
                updateState: updateState
            });
        };

        OraActions.recoverSapReservation = function(sapReservationNumber) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SAP_IFS_RESERVATION_DONE,
                data: sapReservationNumber
            });
        };

        OraActions.recoverSapPayment = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.PAYMENT_STATUS_RECOVERY
            });
        };

        OraActions.recoverOrder = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CHECKOUT_SUMMARY_ORDER_RECOVERY
            });
        };

        OraActions.clearCache = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CLEAR_CACHE
            });
        };

        OraActions.isSimPos = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.IS_SIM_POS
            });
        };

        OraActions.isTerminalPos = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.IS_TERMINAL_POS
            });
        };

        OraActions.clearVerificationCache = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CLEAR_VERIFICATION_CACHE
            });
        };

        OraActions.outOfStockErrorNextStep = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.OUT_OF_STOCK_NEXT_STEP
            });
        };

        OraActions.sapReservationErrorNextStep = function() {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.SAP_RESERVATION_ERROR_NEXT_STEP
            });
        };

        OraActions.registerManualVerificationVerifyOnlinePopup = function(data) {
            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.REGISTER_CV_MANUAL_VERIFICATION_VERIFY_ONLINE_POPUP,
                data: data
            });
        };

        return OraActions;
    }(_OraMetaActions.default);

    var _default = OraAppActions;
    _exports.default = _default;
});
//# sourceMappingURL=OraAppActions.js.map