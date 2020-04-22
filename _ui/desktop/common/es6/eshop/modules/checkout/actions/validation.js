import {
    allConsentsValid,
    getIsCustomerDataStep,
    getConsentDocumentsPrintState,
    getRegisteredCheckoutConditions,
    isCustomerDataValid,
    isRepresentativeDataValid,
    isMnpDataValid,
    isMnpDataFilled,
    isRetentionBonusesDataFilled,
    getApuState,
    getAddressCorrespondenceMapping,
    getCustomerContactForm,
    getCustomerDataToValidation,
    getAddressMain,
    getAddressCorrespondence,
    getMnpData,
    getRepresentativesData,
    getGrantorsData,
    getGrantingDate,
    isRegisteredAgreementConfirmationComponent,
    wasBigAndZonkAgreementConfirmationModalConfirmed,
    areConsentsWithBonusesAccepted,
    isFixRepresentativeDataValid,
    areBigAndZonkConsentsAccepted,
    wasBonusAgreementConfirmationModalConfirmed,
    getBigAndZonkConsents,
    isWWW,
    getShouldSignDocuments,
    getDocumentsConfirmationState,
    invoiceIsPresentAndPaid,
    isDocumentSelected,
    isCVPhoneFilled,
    isContactForCourierValid,
    areDeliveryConditionsMet,
    allComplexDocumentsAreAccepted,
    debtRepaymentFilled,
    shouldSelectInstallation,
    getSelectedInstallationTimeSlot,
    isContactForDAPValid,
    isIdVerificationRequiredAndSucceed,
    getIdVerificationSelectedBankId,
    getAgreementType,
    getSelectedDeliveryMethod,
    getSelectedPaymentMethod,
    simCardSerialNumberFilled,
    isInvoiceDataValid,
    isConsentsInAcknowledgmentState
} from "../selectors";
import {
    getCartIsNet,
    getDeathCertificateConfirmed
} from "eshop/modules/cart/selectors";
import {
    doCheckoutStep,
    changeCustomerDataFormField,
    changeCustomerMainAddressFormField,
    changeCustomerContactFormField,
    changeCorrespondenceAddressFormField,
    changeCustomerMnpDataFormField,
    changeRepresentativeFormField,
    changeGrantorFormField,
    setGrantingDate,
    setConsentStatesToNegative
} from "./app";
import {
    FRONT_VALIDATION
} from "../actionTypes";
import {
    addressFormValidators,
    customerContactFormValidators,
    customerDataFormValidators,
    mnpFormValidators
} from "../validators";
import {
    isFieldDisabledForValidation,
    isMnpFieldInvisible,
    runValidator
} from "../utils/utils";
import {
    openErrorModal
} from "eshop/modules/fix/actions/errors";
import {
    openAgreementConfirmationModal
} from "eshop/modules/checkout/actions/errors";
import OnlineUtils from "../../../utils/OnlineUtils";
export const frontValidationErrors =
    (data) => ({
        type: FRONT_VALIDATION,
        data
    });

function validateCustomerDataFields(dispatch, getState) {
    const contact = getCustomerContactForm(getState());
    const customerData = getCustomerDataToValidation(getState());
    const addressMain = getAddressMain(getState());
    const correspondenceAddressMapping = getAddressCorrespondenceMapping(getState());

    runValidator(contact, customerContactFormValidators, changeCustomerContactFormField, isFieldDisabledForValidation, dispatch);
    runValidator(addressMain, addressFormValidators, changeCustomerMainAddressFormField, null, dispatch);
    runValidator(customerData, customerDataFormValidators, changeCustomerDataFormField, isFieldDisabledForValidation, dispatch);

    if (correspondenceAddressMapping === 'correspondence') {
        const addressCorrespondence = getAddressCorrespondence(getState());
        runValidator(addressCorrespondence, addressFormValidators, changeCorrespondenceAddressFormField, null, dispatch);
    }
}

function validateMnpDataFields(dispatch, getState) {
    const dataArray = getMnpData(getState());
    const isB2B = getCartIsNet(getState());
    dataArray.forEach(data => {
        if (!OnlineUtils.isMnpApplicationSecondStep(data.processType)) {
            runValidator(data, mnpFormValidators, changeCustomerMnpDataFormField, (data, name) => isMnpFieldInvisible(data, name, isB2B), dispatch);
        }
    });
}

const validateRepresentativeDataFields = () => (dispatch, getState) => {
    //update all representatives data with current values to execute validators

    function run(selector, updater) {
        selector(getState()).forEach((item, index) => {
            Object.keys(item).forEach((name) => {
                dispatch(updater({
                    name,
                    value: item[name],
                    index,
                    validate: true
                }));
            });
        });
    }

    run(getRepresentativesData, changeRepresentativeFormField);
    run(getGrantorsData, changeGrantorFormField);
    dispatch(setGrantingDate(getGrantingDate(getState())));
};

export const validateData = (proceedWithCheckoutStep = true) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
        if (getIsCustomerDataStep(getState())) {
            dispatch(setConsentStatesToNegative());
        }
        const consentValidation = allConsentsValid(getState());
        const consentDocumentsPrintState = getConsentDocumentsPrintState(getState());
        const conditions = getRegisteredCheckoutConditions(getState());
        const customerDataValid = isCustomerDataValid(getState());
        const representativeDataValid = isRepresentativeDataValid(getState());
        const fixRepresentativeDataValid = isFixRepresentativeDataValid(getState());
        const mnpDataValid = isMnpDataValid(getState());
        const mnpDataFilled = isMnpDataFilled(getState());
        const retentionBonusesDataFilled = isRetentionBonusesDataFilled(getState());
        const invoiceDataValid = isInvoiceDataValid(getState());
        const consentsInAcknowledgmentState = isConsentsInAcknowledgmentState(getState());

        const apuValidation = getApuState(getState());

        function checkAndFireModalValidations() {
            let modalValidationFired = false;

            if (!modalValidationFired &&
                isRegisteredAgreementConfirmationComponent(getState()) &&
                getBigAndZonkConsents(getState()).length > 0 &&
                isWWW(getState()) &&
                !areBigAndZonkConsentsAccepted(getState()) &&
                !wasBigAndZonkAgreementConfirmationModalConfirmed(getState())) {
                modalValidationFired = true;
                dispatch(openAgreementConfirmationModal("BIGZONK"));
            }

            if (!modalValidationFired &&
                isRegisteredAgreementConfirmationComponent(getState()) &&
                !areConsentsWithBonusesAccepted(getState()) &&
                !wasBonusAgreementConfirmationModalConfirmed(getState())) {
                modalValidationFired = true;
                dispatch(openAgreementConfirmationModal("BONUS"));
            }

            return modalValidationFired;
        }

        const validationMsg = [];

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

        if (conditions['documentsConfirmation'] && getShouldSignDocuments(getState()) && !getDocumentsConfirmationState(getState()) && proceedWithCheckoutStep) {
            validationMsg.push({
                type: 'signDocuments',
                message: 'Musisz dokonać wyboru aby przejść dalej.'
            });
        }
        if (conditions['invoicePaid'] && !invoiceIsPresentAndPaid(getState())) {
            validationMsg.push({
                type: 'invoicePaid',
                message: 'Musisz dokonać wyboru aby przejść dalej.'
            });
        }
        if (conditions['additionalDocuments'] && !isDocumentSelected(getState())) {
            validationMsg.push({
                type: 'documentSelected',
                message: 'Musisz wybrać rodzaj dokumentu aby przejść dalej.'
            });
        }
        if (conditions['additionalDocuments'] && isDocumentSelected(getState()) && !isCVPhoneFilled(getState())) {
            validationMsg.push({
                type: 'cvPhoneFilled',
                message: 'Musisz podać numer telefonu aby przejść dalej.'
            });
        }

        if (!isContactForCourierValid(getState())) {
            validationMsg.push({
                type: 'contactForCourier',
                message: 'Podaj numer kontaktowy.'
            });
        }
        if (conditions['delivery']) {
            if (!getSelectedDeliveryMethod(getState())) {
                validationMsg.push({
                    type: 'deliveryMethodNotSelected',
                    message: 'Wybierz metodę dostawy.'
                });
            } else if (!areDeliveryConditionsMet(getState())) {
                validationMsg.push({
                    type: 'deliveryCondition',
                    message: 'Podaj dane niezbędne do wysyłki.'
                });
            }
        }
        if (conditions['payment'] && !getSelectedPaymentMethod(getState())) {
            validationMsg.push({
                type: 'paymentMethodNotSelected',
                message: 'Wybierz metodę płatności.'
            });
        }
        if (conditions['agreementIntroduction'] && !allComplexDocumentsAreAccepted(getState())) {
            validationMsg.push({
                type: 'agreementIntroduction',
                message: 'Dokonaj wyboru aby przejść dalej.'
            });
        }
        if (conditions['idVerification'] && !isIdVerificationRequiredAndSucceed(getState())) {
            validationMsg.push({
                type: 'idVerification',
                message: 'Dokonaj wyboru aby przejść dalej.'
            });
        }
        if (conditions['debtRepayment'] && !debtRepaymentFilled(getState())) {
            validationMsg.push({
                type: 'debtRepayment',
                message: 'Podaj dane niezbędne do złożenia zamówienia.'
            });
        }
        if (conditions['installationTimeSlot'] && shouldSelectInstallation(getState()) && !(getSelectedInstallationTimeSlot(getState()) && getSelectedInstallationTimeSlot(getState()).startDate)) {
            validationMsg.push({
                type: 'installationTimeSlot',
                message: 'Musisz dokonać wyboru aby przejść dalej.'
            });
        }
        if (!isContactForDAPValid(getState())) {
            validationMsg.push({
                type: 'contactForDap',
                message: 'Podaj numer kontaktowy.'
            });
        }

        if (conditions['agreementTypeData'] && !getAgreementType(getState())) {
            validationMsg.push({
                type: 'agreementTypeData',
                message: 'Dokonaj wyboru aby przejść dalej.'
            });
        }

        if (conditions['certificateDeathConfirm'] && !getDeathCertificateConfirmed(getState())) {
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
        if (conditions["simCardSerialNumberFilled"] && !simCardSerialNumberFilled(getState())) {
            validationMsg.push({
                type: "simCardSerialNumberFilled",
                message: "Wpisz numer karty SIM i kliknij zarezerwuj",
            });
        }

        if (validationMsg.length > 0) {
            dispatch(frontValidationErrors(validationMsg));
            resolve(false);
        } else {
            if (!checkAndFireModalValidations()) {
                proceedWithCheckoutStep && dispatch(doCheckoutStep());
                resolve(true);
            } else {
                resolve(false)
            }
        }
    });
};