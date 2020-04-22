define(["exports", "../selectors", "eshop/modules/cart/selectors", "./app", "../actionTypes", "../validators", "../utils/utils", "eshop/modules/fix/actions/errors", "eshop/modules/checkout/actions/errors", "../../../utils/OnlineUtils"], function(e, F, j, v, t, S, V, a, k, A) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.validateData = e.frontValidationErrors = void 0, A = babelHelpers.interopRequireDefault(A);

    function M(e) {
        return {
            type: t.FRONT_VALIDATION,
            data: e
        }
    }
    e.frontValidationErrors = M;

    function w() {
        return function(o, t) {
            function e(e, n) {
                e(t()).forEach(function(t, a) {
                    Object.keys(t).forEach(function(e) {
                        o(n({
                            name: e,
                            value: t[e],
                            index: a,
                            validate: !0
                        }))
                    })
                })
            }
            e(F.getRepresentativesData, v.changeRepresentativeFormField), e(F.getGrantorsData, v.changeGrantorFormField), o((0, v.setGrantingDate)((0, F.getGrantingDate)(t())))
        }
    }
    e.validateData = function(e) {
        var b = !(0 < arguments.length && void 0 !== e) || e;
        return function(z, f) {
            return new Promise(function(e, t) {
                (0, F.getIsCustomerDataStep)(f()) && z((0, v.setConsentStatesToNegative)());
                var a = (0, F.allConsentsValid)(f()),
                    n = (0, F.getConsentDocumentsPrintState)(f()),
                    o = (0, F.getRegisteredCheckoutConditions)(f()),
                    s = (0, F.isCustomerDataValid)(f()),
                    i = (0, F.isRepresentativeDataValid)(f()),
                    r = (0, F.isFixRepresentativeDataValid)(f()),
                    d = (0, F.isMnpDataValid)(f()),
                    u = (0, F.isMnpDataFilled)(f()),
                    l = (0, F.isRetentionBonusesDataFilled)(f()),
                    p = (0, F.isInvoiceDataValid)(f()),
                    m = (0, F.getApuState)(f());
                var c, g, y, D, h, C = [];
                l || C.push({
                    type: "retentionBonuses",
                    message: "Proszę wybrać bonus do przedłużanego numeru."
                }), o.customerData && !s && (C.push({
                    type: "customerData",
                    message: "Proszę uzupełnić dane osoby zamawiającej."
                }), function(e, t) {
                    var a = (0, F.getCustomerContactForm)(t()),
                        n = (0, F.getCustomerDataToValidation)(t()),
                        o = (0, F.getAddressMain)(t()),
                        s = (0, F.getAddressCorrespondenceMapping)(t());
                    if ((0, V.runValidator)(a, S.customerContactFormValidators, v.changeCustomerContactFormField, V.isFieldDisabledForValidation, e), (0, V.runValidator)(o, S.addressFormValidators, v.changeCustomerMainAddressFormField, null, e), (0, V.runValidator)(n, S.customerDataFormValidators, v.changeCustomerDataFormField, V.isFieldDisabledForValidation, e), "correspondence" === s) {
                        var i = (0, F.getAddressCorrespondence)(t());
                        (0, V.runValidator)(i, S.addressFormValidators, v.changeCorrespondenceAddressFormField, null, e)
                    }
                }(z, f)), !o.mnpData || d && u || (C.push({
                    type: "mnpData",
                    message: "Proszę uzupełnić dane do przeniesienia numeru."
                }), c = z, g = f, y = (0, F.getMnpData)(g()), D = (0, j.getCartIsNet)(g()), y.forEach(function(e) {
                    A.default.isMnpApplicationSecondStep(e.processType) || (0, V.runValidator)(e, S.mnpFormValidators, v.changeCustomerMnpDataFormField, function(e, t) {
                        return (0, V.isMnpFieldInvisible)(e, t, D)
                    }, c)
                })), o.consents && !a && C.push({
                    type: "consents",
                    message: "Dokonaj wyboru aby przejść dalej."
                }), o.consentDocuments && !n && C.push({
                    type: "consentDocuments",
                    message: "Proszę wydrukować dokumenty dla zgód."
                }), o.apuData && !m && C.push({
                    type: "apuData",
                    message: "Proszę zaznaczyć sposób przedłużenia umowy."
                }), o.representativeData && !i && (C.push({
                    type: "representativeData",
                    message: "Proszę wypełnić dane reprezentanta."
                }), z(w())), o.fixRepresentativeData && !r && (C.push({
                    type: "fixRepresentativeData",
                    message: "Proszę wypełnić dane reprezentanta."
                }), z(w())), o.documentsConfirmation && (0, F.getShouldSignDocuments)(f()) && !(0, F.getDocumentsConfirmationState)(f()) && b && C.push({
                    type: "signDocuments",
                    message: "Musisz dokonać wyboru aby przejść dalej."
                }), o.invoicePaid && !(0, F.invoiceIsPresentAndPaid)(f()) && C.push({
                    type: "invoicePaid",
                    message: "Musisz dokonać wyboru aby przejść dalej."
                }), o.additionalDocuments && !(0, F.isDocumentSelected)(f()) && C.push({
                    type: "documentSelected",
                    message: "Musisz wybrać rodzaj dokumentu aby przejść dalej."
                }), o.additionalDocuments && (0, F.isDocumentSelected)(f()) && !(0, F.isCVPhoneFilled)(f()) && C.push({
                    type: "cvPhoneFilled",
                    message: "Musisz podać numer telefonu aby przejść dalej."
                }), (0, F.isContactForCourierValid)(f()) || C.push({
                    type: "contactForCourier",
                    message: "Podaj numer kontaktowy."
                }), o.delivery && ((0, F.getSelectedDeliveryMethod)(f()) ? (0, F.areDeliveryConditionsMet)(f()) || C.push({
                    type: "deliveryCondition",
                    message: "Podaj dane niezbędne do wysyłki."
                }) : C.push({
                    type: "deliveryMethodNotSelected",
                    message: "Wybierz metodę dostawy."
                })), o.payment && !(0, F.getSelectedPaymentMethod)(f()) && C.push({
                    type: "paymentMethodNotSelected",
                    message: "Wybierz metodę płatności."
                }), o.agreementIntroduction && !(0, F.allComplexDocumentsAreAccepted)(f()) && C.push({
                    type: "agreementIntroduction",
                    message: "Dokonaj wyboru aby przejść dalej."
                }), o.idVerification && !(0, F.isIdVerificationRequiredAndSucceed)(f()) && C.push({
                    type: "idVerification",
                    message: "Dokonaj wyboru aby przejść dalej."
                }), o.debtRepayment && !(0, F.debtRepaymentFilled)(f()) && C.push({
                    type: "debtRepayment",
                    message: "Podaj dane niezbędne do złożenia zamówienia."
                }), !o.installationTimeSlot || !(0, F.shouldSelectInstallation)(f()) || (0, F.getSelectedInstallationTimeSlot)(f()) && (0, F.getSelectedInstallationTimeSlot)(f()).startDate || C.push({
                    type: "installationTimeSlot",
                    message: "Musisz dokonać wyboru aby przejść dalej."
                }), (0, F.isContactForDAPValid)(f()) || C.push({
                    type: "contactForDap",
                    message: "Podaj numer kontaktowy."
                }), o.agreementTypeData && !(0, F.getAgreementType)(f()) && C.push({
                    type: "agreementTypeData",
                    message: "Dokonaj wyboru aby przejść dalej."
                }), o.certificateDeathConfirm && !(0, j.getDeathCertificateConfirmed)(f()) && C.push({
                    type: "certificateDeathConfirm",
                    message: "Musisz zaznaczyć aby przejść dalej."
                }), o.invoiceData && !p && C.push({
                    type: "customerData",
                    message: "Podaj poprawny adres email do e-faktury."
                }), o.simCardSerialNumberFilled && !(0, F.simCardSerialNumberFilled)(f()) && C.push({
                    type: "simCardSerialNumberFilled",
                    message: "Wpisz numer karty SIM i kliknij zarezerwuj"
                }), 0 < C.length ? (z(M(C)), e(!1)) : (!(h = !1) && (0, F.isRegisteredAgreementConfirmationComponent)(f()) && 0 < (0, F.getBigAndZonkConsents)(f()).length && (0, F.isWWW)(f()) && !(0, F.areBigAndZonkConsentsAccepted)(f()) && !(0, F.wasBigAndZonkAgreementConfirmationModalConfirmed)(f()) && (h = !0, z((0, k.openAgreementConfirmationModal)("BIGZONK"))), h || !(0, F.isRegisteredAgreementConfirmationComponent)(f()) || (0, F.areConsentsWithBonusesAccepted)(f()) || (0, F.wasBonusAgreementConfirmationModalConfirmed)(f()) || (h = !0, z((0, k.openAgreementConfirmationModal)("BONUS"))), h ? e(!1) : (b && z((0, v.doCheckoutStep)()), e(!0)))
            })
        }
    }
});
//# sourceMappingURL=validation.js.map