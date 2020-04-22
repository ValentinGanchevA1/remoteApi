define(["exports", "../selectors", "eshop/modules/cart/selectors", "./app", "../actionTypes", "../validators", "../utils/utils", "eshop/modules/fix/actions/errors", "eshop/modules/checkout/actions/errors", "../../../utils/OnlineUtils"], function(_exports, _selectors, _selectors2, _app, _actionTypes, _validators, _utils, _errors, _errors2, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.validateData = _exports.frontValidationErrors = void 0;
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    var frontValidationErrors = function frontValidationErrors(data) {
        return {
            type: _actionTypes.FRONT_VALIDATION,
            data: data
        };
    };

    _exports.frontValidationErrors = frontValidationErrors;

    function validateCustomerDataFields(dispatch, getState) {
        var contact = (0, _selectors.getCustomerContactForm)(getState());
        var customerData = (0, _selectors.getCustomerDataToValidation)(getState());
        var addressMain = (0, _selectors.getAddressMain)(getState());
        var correspondenceAddressMapping = (0, _selectors.getAddressCorrespondenceMapping)(getState());
        (0, _utils.runValidator)(contact, _validators.customerContactFormValidators, _app.changeCustomerContactFormField, _utils.isFieldDisabledForValidation, dispatch);
        (0, _utils.runValidator)(addressMain, _validators.addressFormValidators, _app.changeCustomerMainAddressFormField, null, dispatch);
        (0, _utils.runValidator)(customerData, _validators.customerDataFormValidators, _app.changeCustomerDataFormField, _utils.isFieldDisabledForValidation, dispatch);

        if (correspondenceAddressMapping === 'correspondence') {
            var addressCorrespondence = (0, _selectors.getAddressCorrespondence)(getState());
            (0, _utils.runValidator)(addressCorrespondence, _validators.addressFormValidators, _app.changeCorrespondenceAddressFormField, null, dispatch);
        }
    }

    function validateMnpDataFields(dispatch, getState) {
        var dataArray = (0, _selectors.getMnpData)(getState());
        var isB2B = (0, _selectors2.getCartIsNet)(getState());
        dataArray.forEach(function(data) {
            if (!_OnlineUtils.default.isMnpApplicationSecondStep(data.processType)) {
                (0, _utils.runValidator)(data, _validators.mnpFormValidators, _app.changeCustomerMnpDataFormField, function(data, name) {
                    return (0, _utils.isMnpFieldInvisible)(data, name, isB2B);
                }, dispatch);
            }
        });
    }

    var validateRepresentativeDataFields = function validateRepresentativeDataFields() {
        return function(dispatch, getState) {
            //update all representatives data with current values to execute validators
            function run(selector, updater) {
                selector(getState()).forEach(function(item, index) {
                    Object.keys(item).forEach(function(name) {
                        dispatch(updater({
                            name: name,
                            value: item[name],
                            index: index,
                            validate: true
                        }));
                    });
                });
            }

            run(_selectors.getRepresentativesData, _app.changeRepresentativeFormField);
            run(_selectors.getGrantorsData, _app.changeGrantorFormField);
            dispatch((0, _app.setGrantingDate)((0, _selectors.getGrantingDate)(getState())));
        };
    };

    var validateData = function validateData() {
        var proceedWithCheckoutStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        return function(dispatch, getState) {
            return new Promise(function(resolve, reject) {
                if ((0, _selectors.getIsCustomerDataStep)(getState())) {
                    dispatch((0, _app.setConsentStatesToNegative)());
                }

                var consentValidation = (0, _selectors.allConsentsValid)(getState());
                var consentDocumentsPrintState = (0, _selectors.getConsentDocumentsPrintState)(getState());
                var conditions = (0, _selectors.getRegisteredCheckoutConditions)(getState());
                var customerDataValid = (0, _selectors.isCustomerDataValid)(getState());
                var representativeDataValid = (0, _selectors.isRepresentativeDataValid)(getState());
                var fixRepresentativeDataValid = (0, _selectors.isFixRepresentativeDataValid)(getState());
                var mnpDataValid = (0, _selectors.isMnpDataValid)(getState());
                var mnpDataFilled = (0, _selectors.isMnpDataFilled)(getState());
                var retentionBonusesDataFilled = (0, _selectors.isRetentionBonusesDataFilled)(getState());
                var invoiceDataValid = (0, _selectors.isInvoiceDataValid)(getState());
                var consentsInAcknowledgmentState = (0, _selectors.isConsentsInAcknowledgmentState)(getState());
                var apuValidation = (0, _selectors.getApuState)(getState());

                function checkAndFireModalValidations() {
                    var modalValidationFired = false;

                    if (!modalValidationFired && (0, _selectors.isRegisteredAgreementConfirmationComponent)(getState()) && (0, _selectors.getBigAndZonkConsents)(getState()).length > 0 && (0, _selectors.isWWW)(getState()) && !(0, _selectors.areBigAndZonkConsentsAccepted)(getState()) && !(0, _selectors.wasBigAndZonkAgreementConfirmationModalConfirmed)(getState())) {
                        modalValidationFired = true;
                        dispatch((0, _errors2.openAgreementConfirmationModal)("BIGZONK"));
                    }

                    if (!modalValidationFired && (0, _selectors.isRegisteredAgreementConfirmationComponent)(getState()) && !(0, _selectors.areConsentsWithBonusesAccepted)(getState()) && !(0, _selectors.wasBonusAgreementConfirmationModalConfirmed)(getState())) {
                        modalValidationFired = true;
                        dispatch((0, _errors2.openAgreementConfirmationModal)("BONUS"));
                    }

                    return modalValidationFired;
                }

                var validationMsg = [];

                if (!retentionBonusesDataFilled) {
                    validationMsg.push({
                        type: 'retentionBonuses',
                        message: 'Proszę wybrać bonus do przedłużanego numeru.'
                    });
                }

                if (conditions['customerData'] && !customerDataValid) {
                    validationMsg.push({
                        type: 'customerData',
                        message: 'Proszę uzupełnić dane osoby zamawiającej.'
                    });
                    validateCustomerDataFields(dispatch, getState);
                }

                if (conditions['mnpData'] && (!mnpDataValid || !mnpDataFilled)) {
                    validationMsg.push({
                        type: 'mnpData',
                        message: 'Proszę uzupełnić dane do przeniesienia numeru.'
                    });
                    validateMnpDataFields(dispatch, getState);
                }

                if (conditions['consents'] && !consentValidation) {
                    validationMsg.push({
                        type: 'consents',
                        message: 'Dokonaj wyboru aby przejść dalej.'
                    });
                }

                if (conditions['consentDocuments'] && !consentDocumentsPrintState) {
                    validationMsg.push({
                        type: 'consentDocuments',
                        message: 'Proszę wydrukować dokumenty dla zgód.'
                    });
                }

                if (conditions['consentsAcknowledgment'] && !consentsInAcknowledgmentState) {
                    validationMsg.push({
                        type: 'consentsAcknowledgment',
                        message: 'Proszę wysłać dokumenty do klienta albo przeczytać je w trakcie rozmowy aby przejść dalej.'
                    });
                }

                if (conditions['apuData'] && !apuValidation) {
                    validationMsg.push({
                        type: 'apuData',
                        message: 'Proszę zaznaczyć sposób przedłużenia umowy.'
                    });
                }

                if (conditions['representativeData'] && !representativeDataValid) {
                    validationMsg.push({
                        type: 'representativeData',
                        message: 'Proszę wypełnić dane reprezentanta.'
                    });
                    dispatch(validateRepresentativeDataFields());
                }

                if (conditions['fixRepresentativeData'] && !fixRepresentativeDataValid) {
                    validationMsg.push({
                        type: 'fixRepresentativeData',
                        message: 'Proszę wypełnić dane reprezentanta.'
                    });
                    dispatch(validateRepresentativeDataFields());
                }

                if (conditions['documentsConfirmation'] && (0, _selectors.getShouldSignDocuments)(getState()) && !(0, _selectors.getDocumentsConfirmationState)(getState()) && proceedWithCheckoutStep) {
                    validationMsg.push({
                        type: 'signDocuments',
                        message: 'Musisz dokonać wyboru aby przejść dalej.'
                    });
                }

                if (conditions['invoicePaid'] && !(0, _selectors.invoiceIsPresentAndPaid)(getState())) {
                    validationMsg.push({
                        type: 'invoicePaid',
                        message: 'Musisz dokonać wyboru aby przejść dalej.'
                    });
                }

                if (conditions['additionalDocuments'] && !(0, _selectors.isDocumentSelected)(getState())) {
                    validationMsg.push({
                        type: 'documentSelected',
                        message: 'Musisz wybrać rodzaj dokumentu aby przejść dalej.'
                    });
                }

                if (conditions['additionalDocuments'] && (0, _selectors.isDocumentSelected)(getState()) && !(0, _selectors.isCVPhoneFilled)(getState())) {
                    validationMsg.push({
                        type: 'cvPhoneFilled',
                        message: 'Musisz podać numer telefonu aby przejść dalej.'
                    });
                }

                if (!(0, _selectors.isContactForCourierValid)(getState())) {
                    validationMsg.push({
                        type: 'contactForCourier',
                        message: 'Podaj numer kontaktowy.'
                    });
                }

                if (conditions['delivery']) {
                    if (!(0, _selectors.getSelectedDeliveryMethod)(getState())) {
                        validationMsg.push({
                            type: 'deliveryMethodNotSelected',
                            message: 'Wybierz metodę dostawy.'
                        });
                    } else if (!(0, _selectors.areDeliveryConditionsMet)(getState())) {
                        validationMsg.push({
                            type: 'deliveryCondition',
                            message: 'Podaj dane niezbędne do wysyłki.'
                        });
                    }
                }

                if (conditions['payment'] && !(0, _selectors.getSelectedPaymentMethod)(getState())) {
                    validationMsg.push({
                        type: 'paymentMethodNotSelected',
                        message: 'Wybierz metodę płatności.'
                    });
                }

                if (conditions['agreementIntroduction'] && !(0, _selectors.allComplexDocumentsAreAccepted)(getState())) {
                    validationMsg.push({
                        type: 'agreementIntroduction',
                        message: 'Dokonaj wyboru aby przejść dalej.'
                    });
                }

                if (conditions['idVerification'] && !(0, _selectors.isIdVerificationRequiredAndSucceed)(getState())) {
                    validationMsg.push({
                        type: 'idVerification',
                        message: 'Dokonaj wyboru aby przejść dalej.'
                    });
                }

                if (conditions['debtRepayment'] && !(0, _selectors.debtRepaymentFilled)(getState())) {
                    validationMsg.push({
                        type: 'debtRepayment',
                        message: 'Podaj dane niezbędne do złożenia zamówienia.'
                    });
                }

                if (conditions['installationTimeSlot'] && (0, _selectors.shouldSelectInstallation)(getState()) && !((0, _selectors.getSelectedInstallationTimeSlot)(getState()) && (0, _selectors.getSelectedInstallationTimeSlot)(getState()).startDate)) {
                    validationMsg.push({
                        type: 'installationTimeSlot',
                        message: 'Musisz dokonać wyboru aby przejść dalej.'
                    });
                }

                if (!(0, _selectors.isContactForDAPValid)(getState())) {
                    validationMsg.push({
                        type: 'contactForDap',
                        message: 'Podaj numer kontaktowy.'
                    });
                }

                if (conditions['agreementTypeData'] && !(0, _selectors.getAgreementType)(getState())) {
                    validationMsg.push({
                        type: 'agreementTypeData',
                        message: 'Dokonaj wyboru aby przejść dalej.'
                    });
                }

                if (conditions['certificateDeathConfirm'] && !(0, _selectors2.getDeathCertificateConfirmed)(getState())) {
                    validationMsg.push({
                        type: 'certificateDeathConfirm',
                        message: 'Musisz zaznaczyć aby przejść dalej.'
                    });
                }

                if (conditions['invoiceData'] && !invoiceDataValid) {
                    validationMsg.push({
                        type: 'customerData',
                        message: 'Podaj poprawny adres email do e-faktury.'
                    });
                }

                if (conditions["simCardSerialNumberFilled"] && !(0, _selectors.simCardSerialNumberFilled)(getState())) {
                    validationMsg.push({
                        type: "simCardSerialNumberFilled",
                        message: "Wpisz numer karty SIM i kliknij zarezerwuj"
                    });
                }

                if (validationMsg.length > 0) {
                    dispatch(frontValidationErrors(validationMsg));
                    resolve(false);
                } else {
                    if (!checkAndFireModalValidations()) {
                        proceedWithCheckoutStep && dispatch((0, _app.doCheckoutStep)());
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            });
        };
    };

    _exports.validateData = validateData;
});
//# sourceMappingURL=validation.js.map