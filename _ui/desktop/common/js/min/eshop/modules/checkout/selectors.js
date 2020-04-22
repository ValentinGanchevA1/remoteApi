define(["exports", "Reselect", "lodash", "../cbs/main", "../cart/selectors", "../documents/selectors", "./constants/DeliveryMethodFactoryEnum", "./constants/DeliveryMethodModeEnum", "./constants/CartEntryTypeEnum", "./utils/utils", "./constants/DeliveryMethod", "./reducers/helperObjects", "./components/delivery/deliveryMethodHelpers", "eshop/modules/fix/selectors/root", "../checkout/utils/utils", "../checkout/utils/MiniCartUtils", "./actions/app", "./utils/MiniCartUtils", "eshop/modules/core/validation", "./constants/AgreementType", "./constants/EmailWarningDescriptionEnum", "eshop/utils/OnlineUtils"], function(e, n, l, t, r, o, c, s, i, a, S, u, d, f, g, v, m, p, C, D, y, h) {
    "use strict";

    function A(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), r.push.apply(r, n)
        }
        return r
    }

    function M(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? A(Object(r), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, r[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getAddressMappings = e.getAddressDelivery = e.getAddressCorrespondence = e.getAddressMain = e.createGetAddressSelector = e.getMainAddress = e.getAddresses = e.getCheckoutMnpProps = e.getBusinessMnpAddressValidation = e.getStreetSuggestionsBusinessMnpAddress = e.getCitySuggestionsForBusinessMnpAddress = e.getMNPCheckoutData = e.getMnpData = e.debtRepaymentFilled = e.shouldShowDebtRepaymetComponent = e.getDebtRepayment = e.getDebtRepaymentState = e.getTelesales = e.getRepresentativeDataForBackend = e.isFixRepresentativeDataValid = e.isRepresentativeDataValid = e.isRepresentativeDataFilled = e.isGrantorsValid = e.isGrantorsDataEmpty = e.getGrantorsFormData = e.getGrantorsErrors = e.getGrantorsData = e.getGrantors = e.getSapReservationNumber = e.isRepresentativesValid = e.isRepresentativesDataEmpty = e.isRepresentativesFilled = e.getRepresentativeFormData = e.getRepresentativesFormData = e.getRepresentativesErrors = e.getRepresentativesData = e.getRepresentatives = e.getGrantingDateErrors = e.getGrantingDate = e.getRepresentationMode = e.getRepresentativeData = e.areBillingAccountContractsVisible = e.getShowContractButtonEnabled = e.getSelectedAccountContracts = e.isBillingComponentValid = e.getBillingAccountCheckoutData = e.isBillingAccountFormVisible = e.isCreateBillingAccountEnabled = e.getSelectedBillingAccountFix = e.getSelectedBillingAccountMobile = e.getBillingAccountFormDataErrors = e.getBillingAccountsData = e.getBillingAccountFormData = e.getBillingAccount = e.getInvestmentOffers = e.getInvestmentConsent = e.getInvestmentData = e.getInvestment = e.isForeignerCheckboxAvailable = e.getLegalForm = e.customerHasActiveContracts = e.getCustomerCompanyName = e.isDisabledIdNumber = e.isCustomerModified = e.hasFixAddress = e.isExistingCustomer = e.getCustomerEmailAddress = e.getCustomerNoEmail = e.getCustomerContact = e.isForeignerAvailable = e.isBusinessClient = e.getCustomerData = e.getCustomer = e.getFixAppartmentNoValidation = e.getFixClientExistsCheckoutErrors = e.getCheckoutReservationErrorsArray = e.getMnpNoEmailCheckoutErrors = e.getCimConsistentCheckoutErrors = e.getNeedSearchCheckoutErrors = e.getOutOfStockCheckoutErrors = e.getCheckoutErrorsArray = e.getCVWithDepositErrors = e.getManualCvCheckoutErrors = e.getCvMagnumCheckoutErrors = e.getCvCheckoutErrors = e.isCallbackNeeded = e.isAuthNeeded = e.getAuthCheckoutErrors = e.getFrontValidationMsg = e.getSelectedServiceInstanceId = e.getSelectedDesignationNumber = e.getFbbServices = e.getCheckoutErrors = e.getSalesOfAddonsProcess = e.getSalesOfGoodsProcess = e.isDoingCheckoutStep = e.checkoutConditionIsRegistered = e.getRegisteredCheckoutConditions = e.getCheckoutConditions = e.getCheckoutState = void 0, e.isPickupDeliveryValid = e.getLastPos = e.getSelectedPointOfSaleCity = e.getParcelLockerCity = e.getParcelLockerList = e.getParcelLocker = e.getSelectedPointOfSaleId = e.getPickupPointOfSaleCities = e.getPickupPointsOfSale = e.getCourierAdditionalInfo = e.getSelectedDeliveryMethodId = e.getDeliveryPhoneContact = e.getSelectedDeliveryMethodForDevicesForOrder = e.getSelectedDeliveryMethodForDevices = e.getSelectedDeliveryMethods = e.getSelectedMethodForDevices = e.getSelectedDeliveryMethodCode = e.getSelectedDeliveryMethod = e.getDeliveryAllProductContents = e.getDeliveryContents = e.getSalesDevices = e.getConvRentDevices = e.getRentDevices = e.getIsDeliveryModesEqual = e.getDeliveryMethodsForDevices = e.getDeliveryModeTypeDevices = e.getDeliveryModeTypeDocuments = e.deliveryAndCustomerDataLoaded = e.getEmailConfirmationModalAccepted = e.getEmailConfirmationModalState = e.getDeliveryEmailAddressErrors = e.getDeliveryEmailAddress = e.getDeliveryMethodsFetchDone = e.isAgreementTypeRequired = e.getDeliveryMethods = e.isPickupOnEmailAvailable = e.getDeliveryMethodsRaw = e.getDeliveryBundles = e.getDeliveryFixDevices = e.getDeliveryFixDocuments = e.getDeliveryFix = e.getDeliveryMobile = e.getAgreementType = e.getCartDeliveryMethodForDevices = e.getCartDeliveryMethod = e.getCartAgreementType = e.getCartDelivery = e.isDigitalAgreementDefault = e.getDelivery = e.getCurrentStepId = e.isCustomerDataReadOnly = e.areAllDocumentsSaved = e.areAllDocumentsSaving = e.isWWW = e.isOnlineCookie = e.getBusinessDataSource = e.bpgRequested = e.isSmsVerified = e.isManualVerificationModalVisible = e.installationAvailableTimeSlotsRequested = e.customerDataLoading = e.cartMnpDataRequested = e.deliveryDataRequestFinished = e.deliveryDataRequested = e.billingAccountDataRequested = e.representativeDataRequested = e.paymentDataFinished = e.customerDataFinished = e.customerDataRequested = e.getMetadata = e.getBillingAccountComponentData = e.getBillingAccountFormValidation = e.getBillingAccountFormDataWithCbsErrors = e.getCustomerCheckoutData = e.getCustomerAddressErrors = e.getCustomerContactErrors = e.getDeliveryAddressErrors = e.getCustomerCorrespondenceAddressErrors = e.getCustomerMainAddressErrors = e.getCustomerDataErrors = e.getCustomerErrors = e.getDeliveryAddressValidation = e.getStreetSuggestionsForDeliveryAddress = e.getCitySuggestionsForDeliveryAddress = e.getCorrespondenceAddressValidation = e.getStreetSuggestionsForCorrespondenceAddress = e.getCitySuggestionsForCorrespondenceAddress = e.getMainAddressValidation = e.getStreetSuggestionsForMainAddress = e.getCitySuggestionsForMainAddress = e.getBillingAccountAddressValidation = e.getStreetSuggestionsForBillingAccountAddress = e.getCitySuggestionsForBillingAccountAddress = e.getMappedAddressDelivery = e.getMappedAddressCorrespondence = e.getMappedAddressMain = e.getAddressDeliveryMapping = e.getAddressCorrespondenceMapping = e.createGetMappedAddressSelector = e.createGetAddressMappingSelector = void 0, e.isCustomerDataValid = e.allConsentsValid = e.isDeliveryAddressValid = e.getDeliveryAddressForm = e.getCustomerContactMsisdn = e.getCustomerContactForm = e.isEmailFilledAndValid = e.getMnpContactMethods = e.isEmailFormValid = e.isEmailRequiredByProductInCart = e.getCustomerCorrespondenceAddressForm = e.getCustomerMainAddressForm = e.getCustomerDataToValidation = e.getCustomerDataForm = e.getContactCustomerForm = e.getCustomerForm = e.containsConvergentEntries = e.containsFixEntries = e.isReservationButtonDisabled = e.getSimCardTypeForBundle = e.getReservationSimCardTypes = e.reservationData = e.invoiceIsPresentAndPaid = e.getDescriptionKey = e.shouldShowEmailWarning = e.isSelectedDeliveryMethodAvailable = e.getSelectedOrDefaultPaymentMethod = e.getSelectedOrDefaultDeliveryMethod = e.getAvailableDeliveryMethodCodes = e.getSelectedOrDefaultAgreementType = e.getSelectedOrDefaultMobileAgreementType = e.getDefaultDeliveryMethod = e.hasAgreementTypeChanged = e.isDigitalAgreementTypeWithoutPhysicalSimAndDevices = e.cartContainsAnyPhysicalSimCard = e.cartContainsReservableSim = e.cartContainsAnySim = e.cartContainsReservableItems = e.getModifyConsentsInCartQueue = e.getDocumentsConfirmationState = e.getCheckoutDataForDelivery = e.getCheckoutData = e.getInvoiceDataCheckoutData = e.isInvoiceDataValid = e.getInvoiceEmailForm = e.isContactEmailFilledAndValid = e.getInvoiceEmailErrors = e.getInvoiceEmailMapping = e.getInvoiceEmail = e.getCvDocumentsErrors = e.getCvDocumentsList = e.getCvDocumentsCheckoutData = e.getDocumentCustomerWorkPhoneNumber = e.getSelectedCvDocument = e.getCvDocumentsData = e.areConsentsWithBonusesAccepted = e.areBigAndZonkConsentsAccepted = e.getBigAndZonkConsents = e.getConsentsWithBonuses = e.getBonusesConsents = e.getConsentsProps = e.cartConsentsDataRequested = e.consentsDataInRequest = e.updatingAnyConsent = e.updatingConsents = e.isEarlierInstallation = e.isMainEarlierInstallationConsentPresent = e.areAdditionalEarlierInstallationConsentsAccepted = e.areMainEarlierInstallationConsentsAccepted = e.getConsentsCheckoutData = e.getConsentsStatesData = e.getConsentsData = e.getCheckoutConsents = e.getDeliveryTotalCost = e.getFeeForSelectedPaymentMethod = e.getPaymentCheckoutData = e.isOnlinePaymentMethodSelected = e.getSelectedPaymentModeValueEligCode = e.getSelectedPaymentMethod = e.getAvailablePaymentMethods = e.getPayment = e.shouldSelectInstallation = e.getInstallationCheckoutData = e.getInstallationComment = e.getSelectedInstallationTimeSlot = e.getShouldRefreshSlots = e.getShowSelectedSlotError = e.getKwmSelectedSlotDescription = e.getKwmLoadingState = e.getAdditionalInstallationData = e.getInstallationPhoneContact = e.getInstallationAvailableTimeSlots = e.getInstallation = e.getFixBundleNos = e.getConvergentBundleNos = e.getFixEntries = e.getMyPosition = e.getDeliveryCheckoutData = e.getSelectedMethodForDocuments = e.getConvergentEntries = void 0, e.simCardSerialNumberFilled = e.getPreparedSimRequestFragment = e.noERegulationsConsent = e.allFixDeliveryMethods = e.isFullPageLoader = e.getSalesChannelForSummary = e.getOrderFactoryForSummary = e.isIdVerificationRequiredAndSucceed = e.isIdVerificationRequiredAndNotVerified = e.isIdVerificationFailedOrEmpty = e.isIdVerificationRequired = e.getIdVerificationStatus = e.getIdVerificationSelectedBankId = e.getIdVerificationResult = e.getIdVerificationBanks = e.selectedDeliveryMethodIsPickupOnEmail = e.getFactoryCart = e.shouldShowModalAfterProcessChanged = e.getFixCartRefreshResult = e.getSectionForCourier = e.getExistingOrderOrCartValidation = e.getAgreementConfirmationModalVariant = e.getShowAgreementConfirmationModal = e.wasBigAndZonkAgreementConfirmationModalConfirmed = e.wasBonusAgreementConfirmationModalConfirmed = e.isRegisteredAgreementConfirmationComponent = e.getAllReservableCartEntries = e.getWarningModalDescriptionKey = e.isEmailWarningModal = e.getCourierDeliveryMethodModalState = e.isCourierDeliveryMethodModalMounted = e.isCourierDeliveryMethodModalVisible = e.isEarlierInstallationConsentNotAcceptedModalMounted = e.isEarlierInstallationConsentNotAcceptedModalIsAccepted = e.isEarlierInstallationConsentNotAcceptedModalVisible = e.getAssistModeConfirmationLeaveModalStateData = e.isLoadingAssistModeState = e.getFilterEnabled = e.getCurrentPage = e.getSelectedEmployee = e.isLoadingEmployeeList = e.getEmployeeListFilters = e.getEmployeeList = e.getAssistModeConfirmationModalStateData = e.getAssistModeModalStateData = e.getAssistModeStateData = e.getAssistModeStateFromStore = e.signableDocumentsPrinted = e.signableDocumentsPrintedPickup = e.getPickupSerialNumberErrors = e.getDownloadedDocumentCode = e.getPickupDocumentLinks = e.getPickupDocuments = e.getFirstPickupError = e.getPickupError = e.getOrderCanceled = e.getLastOrder = e.getNavigationLoading = e.getPickupReplanishmentRequiredErrors = e.getPaymentAndFiscalizationLoaded = e.getPaymentOverrideStatus = e.getGoodsOrderPaymentStatus = e.getReservationStatus = e.pickupSerialNumbers = e.posSimCardTypes = e.getPickup = e.isNextStepAvailable = e.isContactForCourierValid = e.isContactForDAPValid = e.isDuplicatedOrder = e.areDeliveryConditionsMet = e.isDeliveryPhoneContactCorrect = e.getDocumentsCodesToMerge = e.getDocumentCodesToMergeForBundle = e.allComplexDocumentsAreAccepted = e.isComplexAgreementLoadingForBundle = e.getAgreementIntroductionStatusForBundle = e.getShouldSignDocuments = e.getDocumentsLinks = e.getDocumentsItems = e.getDocumentsState = e.isPrintConsentDocumentsButtonEnabled = e.isWZRKConsentValid = e.getConsentTypeInPrintConsentsValidator = e.getDeliveryAndPaymentStep = e.getIsCartStep = e.getIsCustomerDataStep = e.getConsentDocumentsPrintState = e.getReturnDocumentLoader = e.getApuState = e.isMnpDataValid = e.isMnpDataFilled = e.isRetentionBonusesDataFilled = e.isCVPhoneFilled = e.isDocumentSelected = e.isNotNecessaryToCheckDocument = void 0, l = babelHelpers.interopRequireDefault(l), c = babelHelpers.interopRequireDefault(c), s = babelHelpers.interopRequireDefault(s), i = babelHelpers.interopRequireDefault(i), S = babelHelpers.interopRequireDefault(S), D = babelHelpers.interopRequireDefault(D), y = babelHelpers.interopRequireDefault(y), h = babelHelpers.interopRequireDefault(h);

    function b(e) {
        return e.checkout
    }
    e.getCheckoutState = b;
    var E = (0, n.createSelector)(b, function(e) {
        return e.conditions
    });
    e.getCheckoutConditions = E;
    var P = (0, n.createSelector)(E, function(e) {
        return e.registered
    });
    e.getRegisteredCheckoutConditions = P;
    e.checkoutConditionIsRegistered = function(t) {
        return (0, n.createSelector)(P, function(e) {
            return e[t]
        })
    };
    var F = (0, n.createSelector)(b, function(e) {
        return e.navigation.inProgress
    });
    e.isDoingCheckoutStep = F;
    var I = (0, n.createSelector)(r.getBundlesProcessType, function(e) {
        return 0 !== e.length && hi(e, "SALE_OF_GOODS") === e.length
    });
    e.getSalesOfGoodsProcess = I;
    var N = (0, n.createSelector)(r.getBundlesProcessType, function(e) {
        return 0 !== e.length && hi(e, "SALE_OF_ADDONS") === e.length
    });
    e.getSalesOfAddonsProcess = N;
    var O = (0, n.createSelector)(b, function(e) {
        return e.errors
    });
    e.getCheckoutErrors = O;
    var R = (0, n.createSelector)(b, function(e) {
        return e.fbbServices.fbbServices
    });
    e.getFbbServices = R;
    var k = (0, n.createSelector)(b, function(e) {
        return e.fbbServices.selectedDesignationNumber
    });
    e.getSelectedDesignationNumber = k;
    var T = (0, n.createSelector)(b, function(e) {
        return e.fbbServices.selectedServiceInstanceId
    });
    e.getSelectedServiceInstanceId = T;
    var V = (0, n.createSelector)(O, function(e) {
        return e.frontValidationMsg
    });
    e.getFrontValidationMsg = V;
    var B = (0, n.createSelector)(O, function(e) {
        return e.auth
    });
    e.getAuthCheckoutErrors = B;
    var x = (0, n.createSelector)(O, function(e) {
        return null != e.auth && 0 < e.auth.length
    });
    e.isAuthNeeded = x;
    var L = (0, n.createSelector)(O, function(e) {
        return null != e.callback && 0 < e.callback.length
    });
    e.isCallbackNeeded = L;
    var q = (0, n.createSelector)(O, function(e) {
        return e.cv
    });
    e.getCvCheckoutErrors = q;
    var w = (0, n.createSelector)(O, function(e) {
        return e.cvMagnum
    });
    e.getCvMagnumCheckoutErrors = w;
    var _ = (0, n.createSelector)(O, function(e) {
        return e.manual
    });
    e.getManualCvCheckoutErrors = _;
    var G = (0, n.createSelector)(O, function(e) {
        return e.cvWithDeposit
    });
    e.getCVWithDepositErrors = G;
    var W = (0, n.createSelector)(O, function(e) {
        return e.backendValidation.concat(e.cim, e.order, e.data)
    });
    e.getCheckoutErrorsArray = W;
    var j = (0, n.createSelector)(O, function(e) {
        return e.stock
    });
    e.getOutOfStockCheckoutErrors = j;
    var U = (0, n.createSelector)(O, function(e) {
        return e.needsearch
    });
    e.getNeedSearchCheckoutErrors = U;
    var K = (0, n.createSelector)(O, function(e) {
        return e.cimconsenterror
    });
    e.getCimConsistentCheckoutErrors = K;
    var H = (0, n.createSelector)(O, function(e) {
        return e.noemailmnp
    });
    e.getMnpNoEmailCheckoutErrors = H;
    var z = (0, n.createSelector)(O, function(e) {
        return e.reservation
    });
    e.getCheckoutReservationErrorsArray = z;
    var Z = (0, n.createSelector)(O, function(e) {
        return e.fixCustomerExists
    });
    e.getFixClientExistsCheckoutErrors = Z;
    var X = (0, n.createSelector)(O, function(e) {
        return e.fixAppartmentNoValidation
    });
    e.getFixAppartmentNoValidation = X;
    var J = (0, n.createSelector)(b, function(e) {
        return e.customer
    });
    e.getCustomer = J;
    var Q = (0, n.createSelector)(J, function(e) {
        return e.data
    });
    e.getCustomerData = Q;
    var $ = (0, n.createSelector)(Q, function(e) {
        return e.isBusinessClient
    });
    e.isBusinessClient = $;
    var Y = (0, n.createSelector)(Q, function(e) {
        return e.foreignerAvailable
    });
    e.isForeignerAvailable = Y;
    var ee = (0, n.createSelector)(J, function(e) {
        return e.contact
    });
    e.getCustomerContact = ee;
    var te = (0, n.createSelector)(ee, function(e) {
        return e.customerNoEmail
    });
    e.getCustomerNoEmail = te;
    var re = (0, n.createSelector)(ee, function(e) {
        return e.emailAddress
    });
    e.getCustomerEmailAddress = re;
    var ne = (0, n.createSelector)(J, function(e) {
        return e.existing
    });
    e.isExistingCustomer = ne;
    var oe = (0, n.createSelector)(J, function(e) {
        return e.hasFixAddress
    });
    e.hasFixAddress = oe;
    var ie = (0, n.createSelector)(J, function(e) {
        return e.modified
    });
    e.isCustomerModified = ie;
    var ae = (0, n.createSelector)(Q, function(e) {
        return e.disabledIdNumber
    });
    e.isDisabledIdNumber = ae;
    var ce = (0, n.createSelector)(Q, function(e) {
        return e.companyName
    });
    e.getCustomerCompanyName = ce;
    var se = (0, n.createSelector)(Q, function(e) {
        return !!e.hasActiveContracts
    });
    e.customerHasActiveContracts = se;
    var ue = (0, n.createSelector)(Q, function(e) {
        return e.legalForm
    });
    e.getLegalForm = ue;
    var le = (0, n.createSelector)([$, Y], function(e, t) {
        return !e && t
    });
    e.isForeignerCheckboxAvailable = le;
    var de = (0, n.createSelector)(b, function(e) {
        return e.investment
    });
    e.getInvestment = de;
    var fe = (0, n.createSelector)(de, function(e) {
        return e.lead
    });
    e.getInvestmentData = fe;
    var ge = (0, n.createSelector)(de, function(e) {
        return e.consent
    });
    e.getInvestmentConsent = ge;
    var ve = (0, n.createSelector)(de, function(e) {
        return e.offers.offers
    });
    e.getInvestmentOffers = ve;
    var me = (0, n.createSelector)(b, function(e) {
        return e.billingAccount
    });
    e.getBillingAccount = me;
    var Se = (0, n.createSelector)(me, function(e) {
        return e.formData
    });
    e.getBillingAccountFormData = Se;
    var pe = (0, n.createSelector)(me, function(e) {
        return e.data
    });
    e.getBillingAccountsData = pe;
    var Ce = (0, n.createSelector)(me, function(e) {
        return e.formErrors
    });
    e.getBillingAccountFormDataErrors = Ce;
    var De = (0, n.createSelector)(me, function(e) {
        return e.selectedMobile
    });
    e.getSelectedBillingAccountMobile = De;
    var ye = (0, n.createSelector)(me, function(e) {
        return e.selectedFix
    });
    e.getSelectedBillingAccountFix = ye;
    var he = (0, n.createSelector)(me, function(e) {
        return e.create
    });
    e.isCreateBillingAccountEnabled = he;
    var Ae = (0, n.createSelector)(me, function(e) {
        return e.formVisible
    });
    e.isBillingAccountFormVisible = Ae;
    var Me = (0, n.createSelector)([Se, he], function(e, t) {
        return t ? e : null
    });
    e.getBillingAccountCheckoutData = Me;
    var be = (0, n.createSelector)([he, De, ye], function(e, t, r) {
        return e || t.accountCode || r.accountCode
    });
    e.isBillingComponentValid = be;
    var Ee = (0, n.createSelector)(me, function(e) {
        return e.accountContracts
    });
    e.getSelectedAccountContracts = Ee;
    var Pe = (0, n.createSelector)(me, function(e) {
        return e.isShowContractButtonEnabled
    });
    e.getShowContractButtonEnabled = Pe;
    var Fe = (0, n.createSelector)(me, function(e) {
        return e.accountContractsVisible
    });
    e.areBillingAccountContractsVisible = Fe;
    var Ie = (0, n.createSelector)(b, function(e) {
        return e ? e.representativeData : null
    });
    e.getRepresentativeData = Ie;
    var Ne = (0, n.createSelector)(Ie, function(e) {
        return e ? e.representationMode : null
    });
    e.getRepresentationMode = Ne;
    var Oe = (0, n.createSelector)(Ie, function(e) {
        return e ? e.grantingDate : null
    });
    e.getGrantingDate = Oe;
    var Re = (0, n.createSelector)(Ie, function(e) {
        return e ? e.grantingDateErrors : []
    });
    e.getGrantingDateErrors = Re;
    var ke = (0, n.createSelector)([Oe, Ne], function(e, t) {
            return -1 < ["JR", "WR"].indexOf(t) || !e[0]
        }),
        Te = (0, n.createSelector)(Ie, function(e) {
            return e ? e.representatives : null
        });
    e.getRepresentatives = Te;
    var Ve = (0, n.createSelector)(Te, function(e) {
        return e ? e.data : []
    });
    e.getRepresentativesData = Ve;
    var Be = (0, n.createSelector)(Te, function(e) {
        return e ? e.errors : []
    });
    e.getRepresentativesErrors = Be;
    var xe = (0, n.createSelector)([Ve, Be], za);
    e.getRepresentativesFormData = xe;
    var Le = (0, n.createSelector)([xe], function(e) {
        return e[0] || {}
    });
    e.getRepresentativeFormData = Le;
    var qe = (0, n.createSelector)(Ve, function(e) {
        return e.map(tt).every(function(e) {
            return 1 == e
        })
    });
    e.isRepresentativesFilled = qe;
    var we = (0, n.createSelector)(Ve, function(e) {
        return e.map(et).every(function(e) {
            return 1 == e
        })
    });
    e.isRepresentativesDataEmpty = we;
    var _e = (0, n.createSelector)([we, qe, Be], function(e, t, r) {
        return t && nt(r)
    });
    e.isRepresentativesValid = _e;
    var Ge = (0, n.createSelector)(b, function(e) {
        return e.reservation.sapReservationNumber
    });
    e.getSapReservationNumber = Ge;
    var We = (0, n.createSelector)(Ie, function(e) {
        return e ? e.grantors : null
    });
    e.getGrantors = We;
    var je = (0, n.createSelector)(We, function(e) {
        return e ? e.data : null
    });
    e.getGrantorsData = je;
    var Ue = (0, n.createSelector)(We, function(e) {
        return e ? e.errors : null
    });
    e.getGrantorsErrors = Ue;
    var Ke = (0, n.createSelector)([je, Ue], za);
    e.getGrantorsFormData = Ke;
    var He = (0, n.createSelector)(je, function(e) {
        return !!e && e.map(et).every(function(e) {
            return 1 == e
        })
    });
    e.isGrantorsDataEmpty = He;
    var ze = (0, n.createSelector)(je, function(e) {
            return !!e && e.map(rt).every(function(e) {
                return 1 == e
            })
        }),
        Ze = (0, n.createSelector)([He, ze, Ue], function(e, t, r) {
            return t && nt(r)
        });
    e.isGrantorsValid = Ze;
    var Xe = (0, n.createSelector)([qe, ze, ke], function(e, t, r) {
        return e && t && r
    });
    e.isRepresentativeDataFilled = Xe;
    var Je = (0, n.createSelector)([_e, Ze, Re], function(e, t, r) {
        return e && t && !r[0]
    });
    e.isRepresentativeDataValid = Je;
    var Qe = (0, n.createSelector)([we, qe, Be], function(e, t, r) {
        return e || t && nt(r)
    });
    e.isFixRepresentativeDataValid = Qe;
    var $e = (0, n.createSelector)([Ve, je, Ne, Q, Oe], function(e, t, r, n, o) {
        return n && n.legalForm ? {
            representatives: e,
            grantors: t,
            representationMethod: r,
            grantingDate: o
        } : null
    });
    e.getRepresentativeDataForBackend = $e;

    function Ye(e) {
        return !e || "" === e || null == e
    }
    var et = function(e) {
            return Ye(e.firstName) && Ye(e.lastName) && Ye(e.pesel) && Ye(e.idNumber) && !e.foreigner && !e.foreigner && (Ye(e.identificationEndDate) || Ye(e.identificationRegisterDate)) && Ye(e.country) && Ye(e.identification) && Ye(e.identificationValue)
        },
        tt = function(e) {
            return !Ye(e.firstName) && !Ye(e.lastName) && !Ye(e.pesel) && (!Ye(e.idNumber) || e.foreigner) && (!e.foreigner || (!Ye(e.identificationEndDate) || !Ye(e.identificationRegisterDate)) && !Ye(e.country) && !Ye(e.identification) && !Ye(e.identificationValue))
        },
        rt = function(e) {
            return !Ye(e.firstName) && !Ye(e.lastName)
        },
        nt = function(e) {
            return e.map(bi).every(function(e) {
                return 0 == e
            })
        },
        ot = (0, n.createSelector)(b, function(e) {
            return e.telesales
        });
    e.getTelesales = ot;
    var it = (0, n.createSelector)(b, function(e) {
        return e.debtRepayment
    });
    e.getDebtRepaymentState = it;
    var at = (0, n.createSelector)(it, function(e) {
        return e.data
    });
    e.getDebtRepayment = at;
    var ct = (0, n.createSelector)(it, function(e) {
        return e.show
    });
    e.shouldShowDebtRepaymetComponent = ct;
    var st = (0, n.createSelector)(at, function(e) {
        return !Ye(e.receiptNumber) && !Ye(e.amount)
    });
    e.debtRepaymentFilled = st;
    var ut = (0, n.createSelector)(b, function(e) {
        return e.mnpData.data
    });
    e.getMnpData = ut;
    var lt = (0, n.createSelector)([ut], function(e) {
        return 0 === Object.keys(e).length ? [] : e.filter(function(e) {
            return !h.default.isMnpApplicationSecondStep(e.processType)
        }).map(function(e) {
            var t = M({}, e);
            return delete t.errors, delete t.identifier, t
        })
    });
    e.getMNPCheckoutData = lt;
    var dt = t.selectors.createFilteredCitySuggestionsSelector(ut);
    e.getCitySuggestionsForBusinessMnpAddress = dt;
    var ft = t.selectors.createFilteredStreetSuggestionsSelector(ut);
    e.getStreetSuggestionsBusinessMnpAddress = ft;
    var gt = t.selectors.createAddressValidationSelector(ut);
    e.getBusinessMnpAddressValidation = gt;
    var vt = (0, n.createSelector)([ut, dt, ft, gt, r.getCartIsNet], function(e, t, r, n, o) {
        return {
            mnpData: e,
            citySuggestions: t,
            streetSuggestions: r,
            validation: n,
            isB2B: o
        }
    });
    e.getCheckoutMnpProps = vt;
    var mt = (0, n.createSelector)(b, function(e) {
        return e.addresses
    });
    e.getAddresses = mt;
    var St = (0, n.createSelector)(mt, function(e) {
        return e.main
    });
    e.getMainAddress = St;

    function pt(t) {
        return (0, n.createSelector)(mt, function(e) {
            return e[t]
        })
    }
    var Ct = (e.createGetAddressSelector = pt)("main");
    e.getAddressMain = Ct;
    var Dt = pt("correspondence");
    e.getAddressCorrespondence = Dt;
    var yt = pt("delivery");
    e.getAddressDelivery = yt;
    var ht = (0, n.createSelector)(mt, function(e) {
        return e.mappings
    });
    e.getAddressMappings = ht;

    function At(t) {
        return (0, n.createSelector)(ht, function(e) {
            return e[t] || t
        })
    }
    e.createGetAddressMappingSelector = At;

    function Mt(e) {
        return (0, n.createSelector)([mt, At(e)], function(e, t) {
            return e[t]
        })
    }
    e.createGetMappedAddressSelector = Mt;
    var bt = At("correspondence");
    e.getAddressCorrespondenceMapping = bt;
    var Et = At("delivery");
    e.getAddressDeliveryMapping = Et;
    var Pt = Mt("main");
    e.getMappedAddressMain = Pt;
    var Ft = Mt("correspondence");
    e.getMappedAddressCorrespondence = Ft;
    var It = Mt("delivery");
    e.getMappedAddressDelivery = It;
    var Nt = t.selectors.createFilteredCitySuggestionsSelector(Se);
    e.getCitySuggestionsForBillingAccountAddress = Nt;
    var Ot = t.selectors.createFilteredStreetSuggestionsSelector(Se);
    e.getStreetSuggestionsForBillingAccountAddress = Ot;
    var Rt = t.selectors.createAddressValidationSelector(Se);
    e.getBillingAccountAddressValidation = Rt;
    var kt = t.selectors.createFilteredCitySuggestionsSelector(Ct);
    e.getCitySuggestionsForMainAddress = kt;
    var Tt = t.selectors.createFilteredStreetSuggestionsSelector(Ct);
    e.getStreetSuggestionsForMainAddress = Tt;
    var Vt = t.selectors.createAddressValidationSelector(Ct);
    e.getMainAddressValidation = Vt;
    var Bt = t.selectors.createFilteredCitySuggestionsSelector(Dt);
    e.getCitySuggestionsForCorrespondenceAddress = Bt;
    var xt = t.selectors.createFilteredStreetSuggestionsSelector(Dt);
    e.getStreetSuggestionsForCorrespondenceAddress = xt;
    var Lt = t.selectors.createAddressValidationSelector(Dt);
    e.getCorrespondenceAddressValidation = Lt;
    var qt = t.selectors.createFilteredCitySuggestionsSelector(yt);
    e.getCitySuggestionsForDeliveryAddress = qt;
    var wt = t.selectors.createFilteredStreetSuggestionsSelector(yt);
    e.getStreetSuggestionsForDeliveryAddress = wt;
    var _t = t.selectors.createAddressValidationSelector(yt);
    e.getDeliveryAddressValidation = _t;

    function Gt(e, t, r) {
        var n = JSON.parse(JSON.stringify(M({}, e)));
        return t && Object.getOwnPropertyNames(t).map(function(e) {
            void 0 !== t && !1 === t[e] && n[e] && n[e] instanceof Array && 0 === n[e].length && n[e].push({
                level: r,
                message: "Pole nie jest wypełnione poprawnie."
            })
        }), n
    }
    var Wt = (0, n.createSelector)(J, function(e) {
        return e.errors
    });
    e.getCustomerErrors = Wt;
    var jt = (0, n.createSelector)(Wt, function(e) {
        return e.data
    });
    e.getCustomerDataErrors = jt;
    var Ut = (0, n.createSelector)([Wt, Vt], function(e, t) {
        return Gt(e.mainAddress, t, "warn")
    });
    e.getCustomerMainAddressErrors = Ut;
    var Kt = (0, n.createSelector)([Wt, Lt], function(e, t) {
        return Gt(e.correspondenceAddress, t, "error")
    });
    e.getCustomerCorrespondenceAddressErrors = Kt;
    var Ht = (0, n.createSelector)([Wt, _t], function(e, t) {
        return Gt(e.deliveryAddress, t, "error")
    });
    e.getDeliveryAddressErrors = Ht;
    var zt = (0, n.createSelector)(Wt, function(e) {
        return e.contact
    });
    e.getCustomerContactErrors = zt;
    var Zt = (0, n.createSelector)(Wt, function(e) {
        return e.mainAddress
    });
    e.getCustomerAddressErrors = Zt;
    var Xt = (0, n.createSelector)([Q, ne, ee, ie, Pt, Ft], function(e, t, r, n, o, i) {
        return M({}, e, {
            existing: t
        }, r, {
            modified: n,
            mainAddress: o,
            correspondenceAddress: i
        })
    });
    e.getCustomerCheckoutData = Xt;
    var Jt = (0, n.createSelector)([Ce, Rt], function(e, t) {
        return Gt(e, t, "warn")
    });
    e.getBillingAccountFormDataWithCbsErrors = Jt;
    var Qt = (0, n.createSelector)([Rt, Ce], function(e, t) {
        return M({}, e, {
            emailAddress: t.emailAddress && 0 === t.emailAddress.length
        })
    });
    e.getBillingAccountFormValidation = Qt;
    var $t = (0, n.createSelector)([pe, Se, Jt, Ae, Nt, Ot, Qt, he, De, ye, Ee, Pe, Fe], function(e, t, r, n, o, i, a, c, s, u, l, d, f) {
        return {
            data: e,
            formData: t,
            errors: r,
            visible: n,
            citySuggestions: o,
            streetSuggestions: i,
            validation: a,
            createEnabled: c,
            selectedMobile: s,
            selectedFix: u,
            accountContracts: l,
            isShowContractButtonEnabled: d,
            accountContractsVisible: f
        }
    });
    e.getBillingAccountComponentData = $t;
    var Yt = (0, n.createSelector)(b, function(e) {
        return e.metadata
    });
    e.getMetadata = Yt;
    var er = (0, n.createSelector)(Yt, function(e) {
        return e.customer.requested
    });
    e.customerDataRequested = er;
    var tr = (0, n.createSelector)(Yt, function(e) {
        return e.customer.finished
    });
    e.customerDataFinished = tr;
    var rr = (0, n.createSelector)(Yt, function(e) {
        return e.payment.finished
    });
    e.paymentDataFinished = rr;
    var nr = (0, n.createSelector)(Yt, function(e) {
        return e.representative.requested
    });
    e.representativeDataRequested = nr;
    var or = (0, n.createSelector)(Yt, function(e) {
        return e.billingAccount.requested
    });
    e.billingAccountDataRequested = or;
    var ir = (0, n.createSelector)(Yt, function(e) {
        return e.delivery.requested
    });
    e.deliveryDataRequested = ir;
    var ar = (0, n.createSelector)(Yt, function(e) {
        return e.delivery.finished
    });
    e.deliveryDataRequestFinished = ar;
    var cr = (0, n.createSelector)(Yt, function(e) {
        return e.cartMnpData.requested
    });
    e.cartMnpDataRequested = cr;
    var sr = (0, n.createSelector)(Yt, function(e) {
        return e.customer.loading
    });
    e.customerDataLoading = sr;
    var ur = (0, n.createSelector)(Yt, function(e) {
        return e.installation.requested
    });
    e.installationAvailableTimeSlotsRequested = ur;
    var lr = (0, n.createSelector)(Yt, function(e) {
        return e.manualVerificationModalVisible
    });
    e.isManualVerificationModalVisible = lr;
    var dr = (0, n.createSelector)(Yt, function(e) {
        return e.customer && e.customer.isSmsVerified
    });
    e.isSmsVerified = dr;
    var fr = (0, n.createSelector)(Yt, function(e) {
        return e.customer && e.customer.bpgRequested
    });
    e.bpgRequested = fr;
    var gr = (0, n.createSelector)(Yt, function(e) {
        return e.customer && e.customer.businessDataSource
    });
    e.getBusinessDataSource = gr;
    var vr = (0, n.createSelector)(Yt, function(e) {
        return e.customer && e.customer.isOnlineCookie
    });
    e.isOnlineCookie = vr;
    var mr = (0, n.createSelector)(Yt, function(e) {
        return e.customer && e.customer.isWWW
    });
    e.isWWW = mr;
    var Sr = (0, n.createSelector)(Yt, function(e) {
        return e.allDocuments && e.allDocuments.loading
    });
    e.areAllDocumentsSaving = Sr;
    var pr = (0, n.createSelector)(Yt, function(e) {
        return e.allDocuments && e.allDocuments.finished
    });
    e.areAllDocumentsSaved = pr;
    var Cr = (0, n.createSelector)(Yt, function(e) {
        return e.customer.readOnly
    });
    e.isCustomerDataReadOnly = Cr;
    var Dr = (0, n.createSelector)(Yt, function(e) {
        return e.currentStepId
    });
    e.getCurrentStepId = Dr;
    var yr = (0, n.createSelector)(b, function(e) {
        return e.delivery
    });
    e.getDelivery = yr;
    var hr = (0, n.createSelector)(yr, function(e) {
        return e.isDigitalAgreementDefault
    });
    e.isDigitalAgreementDefault = hr;
    var Ar = (0, n.createSelector)(yr, function(e) {
        return e.cartDelivery
    });
    e.getCartDelivery = Ar;
    var Mr = (0, n.createSelector)(Ar, function(e) {
        return e.documentsDeliveryModeName
    });
    e.getCartAgreementType = Mr;
    var br = (0, n.createSelector)(Ar, function(e) {
        return e.deliveryMethod
    });
    e.getCartDeliveryMethod = br;
    var Er = (0, n.createSelector)(Ar, function(e) {
        return e.deliveryMethodForDevices
    });
    e.getCartDeliveryMethodForDevices = Er;
    var Pr = (0, n.createSelector)(yr, function(e) {
        return e.agreementType
    });
    e.getAgreementType = Pr;
    var Fr = (0, n.createSelector)(yr, function(e) {
        return l.default.find(e.methods, function(e) {
            return e.factory === c.default.MOBILE
        })
    });
    e.getDeliveryMobile = Fr;
    var Ir = (0, n.createSelector)(yr, function(e) {
        return l.default.filter(e.methods, function(e) {
            return e.factory === c.default.FIX
        })
    });
    e.getDeliveryFix = Ir;
    var Nr = (0, n.createSelector)(Ir, function(e) {
        return l.default.find(e, function(e) {
            return e.deliveryModeType === s.default.DOCUMENTS_PACKAGE
        })
    });
    e.getDeliveryFixDocuments = Nr;
    var Or = (0, n.createSelector)(Ir, function(e) {
        return l.default.find(e, function(e) {
            return e.deliveryModeType === s.default.DEVICES_PACKAGE
        })
    });
    e.getDeliveryFixDevices = Or;
    var Rr = (0, n.createSelector)(yr, function(e) {
        return e.methods[0] ? e.methods[0].bundleNumbers : []
    });
    e.getDeliveryBundles = Rr;
    var kr = (0, n.createSelector)(yr, function(e) {
        return 1 < e.methods.length && e.methods.every(function(e) {
            return "MOBILE" === e.factory
        }) ? Wr(e) : e.methods[0] ? e.methods[0].deliveryMethods : []
    });
    e.getDeliveryMethodsRaw = kr;
    var Tr = (0, n.createSelector)(kr, function(e) {
        return e.map(function(e) {
            return e.id
        }).some(function(e) {
            return e === S.default.PICKUP_ON_EMAIL
        })
    });
    e.isPickupOnEmailAvailable = Tr;
    var Vr = (0, n.createSelector)([yr, Pr], function(e, t) {
        return 0 < e.methods.length && e.methods.every(function(e) {
            return "MOBILE" === e.factory
        }) ? 1 < e.methods.length ? Wr(e) : e.methods[0] ? e.methods[0].deliveryMethods : [] : (e.methods[0] ? e.methods[0].deliveryMethods : []).filter(function(e) {
            return !t || (D.default.DIGITAL === t ? S.default.isDigital(e.id) : S.default.isPaper(e.id))
        })
    });
    e.getDeliveryMethods = Vr;
    var Br = (0, n.createSelector)(kr, function(e) {
        return e && e.map(function(e) {
            return e.id
        }).some(S.default.isDigital) && e.map(function(e) {
            return e.id
        }).some(S.default.isPaper)
    });
    e.isAgreementTypeRequired = Br;
    var xr = (0, n.createSelector)(yr, function(e) {
        return e.deliveryMethodsFetchDone
    });
    e.getDeliveryMethodsFetchDone = xr;
    var Lr = (0, n.createSelector)([yr, ee], function(e, t) {
        return null === e.emailAddress ? t.emailAddress : e.emailAddress || ""
    });
    e.getDeliveryEmailAddress = Lr;
    var qr = (0, n.createSelector)(yr, function(e) {
        return e.emailAddressErrors || []
    });
    e.getDeliveryEmailAddressErrors = qr;
    var wr = (0, n.createSelector)(yr, function(e) {
        return !!e.emailConfirmationModalState
    });
    e.getEmailConfirmationModalState = wr;
    var _r = (0, n.createSelector)(yr, function(e) {
        return !!e.emailConfirmationModalAccepted
    });
    e.getEmailConfirmationModalAccepted = _r;
    var Gr = (0, n.createSelector)([ar, xr, tr, rr], function(e, t, r, n) {
        return e && t && r && n
    });

    function Wr(e) {
        var t, r = [],
            n = [],
            o = [];
        e.methods.forEach(function(e) {
            e.deliveryMethods.forEach(function(e) {
                return r.push(e)
            })
        });
        for (var i = Math.max.apply(Math, e.methods.map(function(e) {
                return e.deliveryMethods.length
            })), a = 0; a <= i; a++) {
            for (var c = r.length - 1; 0 <= c; c--) r[0].id === r[c].id && (n.push(r[c]), r.splice(c, 1));
            n.length === e.methods.length && (t = jr(n), o.push(t)), n = [], t = null
        }
        return o
    }

    function jr(e) {
        for (var t = e.length - 1; 1 <= t; t--) parseFloat(e[t].price) > parseFloat(e[t - 1].price) ? e.splice(t, 1) : e.splice(t - 1, 1);
        return e[0]
    }
    e.deliveryAndCustomerDataLoaded = Gr;
    var Ur = (0, n.createSelector)(yr, function(e) {
        return e.methods[0] ? e.methods[0].deliveryModeType : ""
    });
    e.getDeliveryModeTypeDocuments = Ur;
    var Kr = (0, n.createSelector)(yr, function(e) {
        return e.methods[1] ? e.methods[1].deliveryModeType : ""
    });
    e.getDeliveryModeTypeDevices = Kr;
    var Hr = (0, n.createSelector)([yr, Kr], function(e, t) {
        return t === s.default.DEVICES_PACKAGE && e.methods[1] ? e.methods[1].deliveryMethods : []
    });
    e.getDeliveryMethodsForDevices = Hr;
    var zr = (0, n.createSelector)(Ir, function(e) {
        return !!e[0] && e[0].isDeliveryModesEqual
    });
    e.getIsDeliveryModesEqual = zr;
    var Zr = (0, n.createSelector)(yr, function(e) {
        return e.methods[1] ? e.methods[1].rentDevices : ""
    });
    e.getRentDevices = Zr;
    var Xr = (0, n.createSelector)(yr, function(e) {
        return e.methods[0] ? e.methods[0].rentDevices : ""
    });
    e.getConvRentDevices = Xr;
    var Jr = (0, n.createSelector)(yr, function(e) {
        return e.methods[1] ? e.methods[1].salesDevices : ""
    });
    e.getSalesDevices = Jr;
    var Qr = (0, n.createSelector)(yr, function(e) {
        return e.methods[0] ? e.methods.map(function(e) {
            return e.contents
        }).reduce(function(e, t) {
            return e && t ? e.concat(", ").concat(t) : e || (t || void 0)
        }) : ""
    });
    e.getDeliveryContents = Qr;
    var $r = (0, n.createSelector)(yr, function(e) {
        return e.methods[0] ? e.methods.map(function(e) {
            return e.salesOfGoodsContents
        }).reduce(function(e, t) {
            return e && t && e.concat(t) || t
        }) : ""
    });
    e.getDeliveryAllProductContents = $r;
    var Yr = (0, n.createSelector)([yr, Vr], function(t, e) {
        return e && e.find(function(e) {
            return e.id === t.selectedMethod
        }) || ""
    });
    e.getSelectedDeliveryMethod = Yr;
    var en = (0, n.createSelector)(yr, function(e) {
        return e.selectedMethod
    });
    e.getSelectedDeliveryMethodCode = en;
    var tn = (0, n.createSelector)(yr, function(e) {
        return e.selectedMethodForDevices
    });
    e.getSelectedMethodForDevices = tn;
    var rn = (0, n.createSelector)([yr, zr], function(t, e) {
        var r = l.default.find(t.methods, function(e) {
                return e.factory === c.default.MOBILE
            }),
            n = l.default.filter(t.methods, function(e) {
                return e.factory === c.default.FIX
            }),
            o = l.default.find(n, function(e) {
                return e.deliveryModeType === s.default.DOCUMENTS_PACKAGE
            }),
            i = l.default.find(n, function(e) {
                return e.deliveryModeType === s.default.DEVICES_PACKAGE
            }),
            a = {
                mobile: r ? 0 < r.deliveryMethods.length ? r.deliveryMethods.find(function(e) {
                    return e.id === t.selectedDeliveryMethods.mobile
                }) || "" : i && i.deliveryMethods.find(function(e) {
                    return e.id === t.selectedDeliveryMethods.mobile
                }) || "" : null,
                fixDocuments: o ? 0 < o.deliveryMethods.length && o.deliveryMethods.find(function(e) {
                    return e.id === t.selectedDeliveryMethods.fixDocuments
                }) || "" : null,
                fixDevices: i ? 0 < i.deliveryMethods.length && i.deliveryMethods.find(function(e) {
                    return e.id === t.selectedDeliveryMethods.fixDevices
                }) || "" : null
            };
        return !a.fixDevices && e && (a.fixDevices = a.fixDocuments), a
    });
    e.getSelectedDeliveryMethods = rn;
    var nn = (0, n.createSelector)([yr, Hr], function(t, e) {
        return e.find(function(e) {
            return e.id === t.selectedMethodForDevices
        }) || ""
    });
    e.getSelectedDeliveryMethodForDevices = nn;
    var on = (0, n.createSelector)(yr, function(e) {
        return e.selectedMethodForDevices
    });
    e.getSelectedDeliveryMethodForDevicesForOrder = on;
    var an = (0, n.createSelector)(yr, function(e) {
        return e.phoneContact || ""
    });
    e.getDeliveryPhoneContact = an;
    var cn = (0, n.createSelector)(yr, function(e) {
        return !!e && e.selectedMethod
    });
    e.getSelectedDeliveryMethodId = cn;
    var sn = (0, n.createSelector)(yr, function(e) {
        return e.courierMessage
    });
    e.getCourierAdditionalInfo = sn;
    var un = (0, n.createSelector)(yr, function(e) {
        return e.pointsOfSalePickup
    });
    e.getPickupPointsOfSale = un;
    var ln = (0, n.createSelector)(yr, function(e) {
        return e.pointOfSalePickupCities
    });
    e.getPickupPointOfSaleCities = ln;
    var dn = (0, n.createSelector)(yr, function(e) {
        return e.selectedPointOfSale
    });
    e.getSelectedPointOfSaleId = dn;
    var fn = (0, n.createSelector)(yr, function(e) {
        return e.parcelLockerList
    });
    e.getParcelLocker = fn;
    var gn = (0, n.createSelector)(yr, function(e) {
        return e.parcelLockerCityList
    });
    e.getParcelLockerList = gn;
    var vn = (0, n.createSelector)(yr, function(e) {
        return e.pointOfSaleCity
    });
    e.getParcelLockerCity = vn;
    var mn = (0, n.createSelector)(yr, function(e) {
        return e.pointOfSaleCity
    });
    e.getSelectedPointOfSaleCity = mn;
    var Sn = (0, n.createSelector)(yr, function(e) {
        return e.lastPos
    });
    e.getLastPos = Sn;
    var pn = (0, n.createSelector)([Yr, dn], function(e, t) {
        return "pickup_from_shelf" !== e.id || !!t
    });
    e.isPickupDeliveryValid = pn;
    var Cn = (0, n.createSelector)(r.getMiniCart, function(e) {
        return e.entries ? e.entries.filter(function(e) {
            return e.entryType === i.default.CONVERGENT
        }) : []
    });
    e.getConvergentEntries = Cn;
    var Dn = (0, n.createSelector)([yr, rn, Cn], function(e, t, r) {
        return 0 !== r.length && t && (n = t, (0, d.isDeliveryMethodRequired)(n.fixDocuments) ? n.fixDocuments && n.fixDocuments.id : n.mobile && n.mobile.id) || e.selectedMethod;
        var n
    });
    e.getSelectedMethodForDocuments = Dn;
    var yn = (0, n.createSelector)([Rr, Yr, on, yr, Cn, Ir, sn, It, Et, an, Lr, zr, dn, Pr], function(e, t, r, n, o, i, a, c, s, u, l, d, f, g) {
        var v = "delivery" === s,
            m = t ? t.id : "",
            S = d ? m : r,
            p = [];
        if (0 < o.length) {
            var C = [];
            n.methods.filter(function(e) {
                return "MOBILE" === e.factory
            }).forEach(function(e) {
                return e.bundleNumbers.forEach(function(e) {
                    return C.push(e)
                })
            });
            var D = babelHelpers.toConsumableArray(new Set(C));
            return 0 < D.length && D.forEach(function(e) {
                p.push({
                    phoneContact: u,
                    courierAdditionalInfo: a,
                    deliveryDataForm: c,
                    bundleNo: e,
                    deliveryMethod: n.selectedDeliveryMethods.mobile,
                    pointOfServiceName: f,
                    newAddress: v,
                    documentsDeliveryModeName: g,
                    emailAddress: l
                })
            }), i && 0 < i.length && p.push({
                phoneContact: u,
                courierAdditionalInfo: a,
                deliveryDataForm: c,
                bundleNo: i[0].bundleNumbers[0],
                deliveryMethod: n.selectedDeliveryMethods.fixDocuments,
                deliveryMethodForDevices: n.selectedDeliveryMethods.fixDevices,
                pointOfServiceName: "",
                newAddress: v,
                documentsDeliveryModeName: g,
                emailAddress: l
            }), p
        }
        return e.map(function(e) {
            return {
                phoneContact: u,
                courierAdditionalInfo: a,
                deliveryDataForm: c,
                bundleNo: e,
                deliveryMethod: m,
                deliveryMethodForDevices: S,
                pointOfServiceName: f,
                newAddress: v,
                documentsDeliveryModeName: g,
                emailAddress: l
            }
        })
    });
    e.getDeliveryCheckoutData = yn;
    var hn = (0, n.createSelector)(yr, function(e) {
        return e.pointsOfSale.filter(function(e) {
            return "myPosition" === e.category
        }).shift()
    });

    function An(e, t, r) {
        return r.indexOf(e) === t
    }
    e.getMyPosition = hn;
    var Mn = (0, n.createSelector)(r.getMiniCart, function(e) {
        return e.entries ? e.entries.filter(function(e) {
            return e.entryType === i.default.FIX
        }) : []
    });
    e.getFixEntries = Mn;
    var bn = (0, n.createSelector)(Cn, function(e) {
        var t = e.map(function(e) {
            return e.entries
        });
        return [].concat.apply([], t).map(function(e) {
            return e.bundleNo
        }).filter(An)
    });
    e.getConvergentBundleNos = bn;
    var En = (0, n.createSelector)(r.allCartEntries, function(e) {
        return e.filter(function(e) {
            return e.entryType === i.default.FIX
        }).map(function(e) {
            return e.bundleNo
        }).filter(An)
    });
    e.getFixBundleNos = En;
    var Pn = (0, n.createSelector)(b, function(e) {
        return e.installation
    });
    e.getInstallation = Pn;
    var Fn = (0, n.createSelector)(Pn, function(e) {
        return e.availableTimeSlots
    });
    e.getInstallationAvailableTimeSlots = Fn;
    var In = (0, n.createSelector)(Pn, function(e) {
        return e.phoneContactDAP || ""
    });
    e.getInstallationPhoneContact = In;
    var Nn = (0, n.createSelector)(Pn, function(e) {
        var t = e.availableTimeSlots.additionalData;
        return t ? M({}, t, {
            installationAddress: M({}, t.installationAddress, {
                streetName: t.installationAddress.line1,
                streetNumber: t.installationAddress.line2
            })
        }) : t
    });
    e.getAdditionalInstallationData = Nn;
    var On = (0, n.createSelector)(Pn, function(e) {
        return e.loading
    });
    e.getKwmLoadingState = On;
    var Rn = (0, n.createSelector)(Pn, function(e) {
        return e.selectedSlotDisplayText
    });
    e.getKwmSelectedSlotDescription = Rn;
    var kn = (0, n.createSelector)(Pn, function(e) {
        return e.showSelectedSlotError
    });
    e.getShowSelectedSlotError = kn;
    var Tn = (0, n.createSelector)(Pn, function(e) {
        return e.shouldRefresh
    });
    e.getShouldRefreshSlots = Tn;
    var Vn = (0, n.createSelector)(Pn, function(e) {
        return e.selectedInstallationTimeSlot
    });
    e.getSelectedInstallationTimeSlot = Vn;
    var Bn = (0, n.createSelector)(Pn, function(e) {
        return e.comment
    });
    e.getInstallationComment = Bn;
    var xn = (0, n.createSelector)([Vn, Bn, En, In], function(t, r, e, n) {
        return t ? e.map(function(e) {
            return {
                bundleNo: e,
                startDate: t.startDate,
                endDate: t.endDate,
                comment: r,
                phoneNumber: n
            }
        }) : []
    });
    e.getInstallationCheckoutData = xn;
    var Ln = (0, n.createSelector)(Fn, function(e) {
        return e && e.slots && 0 < e.slots.length
    });
    e.shouldSelectInstallation = Ln;
    var qn = (0, n.createSelector)(b, function(e) {
        return e.payment
    });
    e.getPayment = qn;
    var wn = (0, n.createSelector)([Vr, Yr, Sn, yr], function(e, t, r, n) {
        var o = t ? t.id : "",
            i = e.filter(function(e) {
                return e.id === o
            }).flatMap(function(e) {
                return e.supportedPaymentMethods
            });
        return "parcel_locker" !== o ? 0 !== i.length || n.isDeliveryRequired ? i : [{
            code: n.paymentWithoutDeliveryMethod
        }] : !0 === i.some(function(e) {
            return "PayU" === e.code || "BlueMedia" === e.code
        }) ? !0 === r.paymentByCardPossibility && !0 === r.paymentType ? i.filter(function(e) {
            return ["Cash", "PayU", "BlueMedia"].includes(e.code)
        }) : i.filter(function(e) {
            return ["PayU", "BlueMedia"].includes(e.code)
        }) : !0 === r.paymentByCardPossibility && !0 === r.paymentType ? i.filter(function(e) {
            return ["Cash"].includes(e.code)
        }) : []
    });
    e.getAvailablePaymentMethods = wn;
    var _n = (0, n.createSelector)(qn, function(e) {
        return e.selectedMethod
    });
    e.getSelectedPaymentMethod = _n;
    var Gn = (0, n.createSelector)(qn, function(e) {
        return e.selectedEligCode
    });
    e.getSelectedPaymentModeValueEligCode = Gn;
    var Wn = (0, n.createSelector)(qn, function(e) {
        return "PayU" === e.selectedMethod || "BlueMedia" === e.selectedMethod
    });
    e.isOnlinePaymentMethodSelected = Wn;
    var jn = (0, n.createSelector)([Rr, _n, Gn], function(e, t, r) {
        var n = t && 0 < t.length ? t : "Cash";
        return e.map(function(e) {
            return {
                bundleNo: e,
                paymentMethod: n,
                eligCode: r
            }
        })
    });
    e.getPaymentCheckoutData = jn;
    var Un = (0, n.createSelector)([Yr, Gn], function(e, t) {
        if (e.supportedPaymentMethods && t) {
            var r = e.supportedPaymentMethods.find(function(e) {
                return t === e.eligCode
            });
            return r && r.fee || ""
        }
        return ""
    });
    e.getFeeForSelectedPaymentMethod = Un;
    var Kn = (0, n.createSelector)([Yr, Un], function(e, t) {
        return e && e.price && t ? (parseFloat(e.price) + parseFloat(t)).toFixed(2).replace(".", ",") + " zł" : "0,00 zł"
    });
    e.getDeliveryTotalCost = Kn;
    var Hn = (0, n.createSelector)(b, function(e) {
        return e.consents.consents
    });
    e.getCheckoutConsents = Hn;
    var zn = (0, n.createSelector)(b, function(e) {
        return e.consents
    });
    e.getConsentsData = zn;
    var Zn = (0, n.createSelector)(b, function(e) {
        return e.consents.consentStates
    });
    e.getConsentsStatesData = Zn;
    var Xn = (0, n.createSelector)([Zn, zn], function(e, t) {
        var r = (t.consents || []).reduce(function(e, t) {
            return e[t.consentCode] = t, e
        }, {});
        return function(e, r) {
            var n = {};
            return e.filter(function(e) {
                var t = r(e);
                return !n[t] && (n[t] = "dummy", !0)
            })
        }(e.map(function(e) {
            var t = r[e.consentCode];
            return !t || t.msisdns || t.bundleAssignments[0] ? e : M({}, e, {
                bundleNo: null
            })
        }), function(e) {
            return e.consentCode + e.bundleNo
        })
    });
    e.getConsentsCheckoutData = Xn;

    function Jn(t) {
        return (0, n.createSelector)(zn, function(e) {
            return (e.consents || []).filter(function(e) {
                return e.subType === t
            })
        })
    }

    function Qn(e) {
        return (0, n.createSelector)(Jn(e), function(e) {
            var t = e.map(function(e) {
                return e.states.filter(function(e) {
                    return !e.positive
                }).map(function(e) {
                    return e.code
                })
            });
            return l.default.flattenDeep(t)
        })
    }
    var $n = (0, n.createSelector)(zn, function(e) {
            return (e.consentStates || []).map(function(e) {
                return e.stateCode
            })
        }),
        Yn = (0, n.createSelector)([$n, Qn("MAIN_EARLIER_INSTALLATION")], function(t, e) {
            return !e.some(function(e) {
                return t.includes(e)
            })
        });
    e.areMainEarlierInstallationConsentsAccepted = Yn;
    var eo = (0, n.createSelector)([$n, Qn("ADDITIONAL_EARLIER_INSTALLATION")], function(t, e) {
        return !e.some(function(e) {
            return t.includes(e)
        })
    });
    e.areAdditionalEarlierInstallationConsentsAccepted = eo;
    var to = (0, n.createSelector)(Jn("MAIN_EARLIER_INSTALLATION"), function(e) {
        return 0 < e.length
    });
    e.isMainEarlierInstallationConsentPresent = to;
    var ro = (0, n.createSelector)([to, Yn, eo], function(e, t, r) {
        return e ? t : r
    });
    e.isEarlierInstallation = ro;
    var no = (0, n.createSelector)(Yt, function(e) {
        return e.updatingConsents
    });
    e.updatingConsents = no;
    var oo = (0, n.createSelector)(Yt, function(e) {
        return e.consents.updating
    });
    e.updatingAnyConsent = oo;
    var io = (0, n.createSelector)(Yt, function(e) {
        return e.consents.data || {}
    });
    e.consentsDataInRequest = io;
    var ao = (0, n.createSelector)(Yt, function(e) {
        return e.cartConsents.requested
    });
    e.cartConsentsDataRequested = ao;
    var co = (0, n.createSelector)([zn, no, oo, Xn], function(e, t, r, n) {
        return M({}, e, {
            updatingConsents: t,
            updatingAnyConsent: r,
            consentStates: n
        })
    });
    e.getConsentsProps = co;
    var so = (0, n.createSelector)(zn, function(n) {
        return n.consents.filter(function(e) {
            return e.isRelatedWithBonus || (t = n.conf, r = e, t.some(function(e) {
                return (e.sections || []).filter(function(e) {
                    return e.withBonus
                }).map(function(e) {
                    return e.consentsCode
                }).some(function(e) {
                    return -1 < e.indexOf(r.consentCode)
                })
            }));
            var t, r
        })
    });
    e.getBonusesConsents = so;
    var uo = (0, n.createSelector)([zn, so], function(n, e) {
        return e.map(function(t) {
            var e = n.consentStates.find(function(e) {
                    return e.consentCode === t.consentCode
                }),
                r = e ? e.stateCode : "";
            return {
                state: t.states.find(function(e) {
                    return e.code === r
                }),
                title: t.title,
                bonuses: t.bonuses
            }
        })
    });
    e.getConsentsWithBonuses = uo;
    var lo = (0, n.createSelector)(zn, function(e) {
        return e.consents.filter(function(e) {
            return "100_CONV" === e.consentCode || "MSCONSENT_4" === e.consentCode
        })
    });
    e.getBigAndZonkConsents = lo;
    var fo = (0, n.createSelector)([lo, zn], function(e, n) {
        return !e.find(function(t) {
            var r = n.consentStates.find(function(e) {
                return e.consentCode === t.consentCode
            });
            return t.states.find(function(e) {
                return e.code === (r ? r.stateCode : "") && !e.positive
            })
        })
    });
    e.areBigAndZonkConsentsAccepted = fo;
    var go = (0, n.createSelector)(uo, function(e) {
        return !e.find(function(e) {
            return !0 !== e.state.positive
        })
    });
    e.areConsentsWithBonusesAccepted = go;
    var vo = (0, n.createSelector)(b, function(e) {
        return e.cvDocuments
    });
    e.getCvDocumentsData = vo;
    var mo = (0, n.createSelector)(vo, function(e) {
        return e.selectedCustomerAdditionalDocument
    });
    e.getSelectedCvDocument = mo;
    var So = (0, n.createSelector)(vo, function(e) {
        return e.customerWorkPhoneNumber
    });
    e.getDocumentCustomerWorkPhoneNumber = So;
    var po = (0, n.createSelector)([Rr, mo, So], function(e, t, r) {
        return t ? e.map(function(e) {
            return {
                bundleNo: e,
                selectedCustomerAdditionalDocument: t,
                customerWorkPhoneNumber: r
            }
        }) : []
    });
    e.getCvDocumentsCheckoutData = po;
    var Co = (0, n.createSelector)(vo, function(e) {
        return e.cvDocumentsList[0] ? e.cvDocumentsList : []
    });
    e.getCvDocumentsList = Co;
    var Do = (0, n.createSelector)(vo, function(e) {
        return e.errors
    });
    e.getCvDocumentsErrors = Do;
    var yo = (0, n.createSelector)(r.getInvoiceData, function(e) {
        return e.invoiceEmail
    });
    e.getInvoiceEmail = yo;
    var ho = (0, n.createSelector)(r.getInvoiceData, function(e) {
        return e.invoiceEmailMapping
    });
    e.getInvoiceEmailMapping = ho;
    var Ao = (0, n.createSelector)(r.getInvoiceData, function(e) {
        return e.errors
    });
    e.getInvoiceEmailErrors = Ao;
    var Mo = (0, n.createSelector)([te, re, zt], function(e, t, r) {
        return !e && t && 0 < t.length && !(r && r.emailAddress && 0 !== r.emailAddress.length)
    });
    e.isContactEmailFilledAndValid = Mo;
    var bo = (0, n.createSelector)([yo, ho, Ao, Mo, tr], function(e, t, r, n, o) {
        return {
            invoiceEmail: e,
            invoiceEmailMapping: t,
            errors: r,
            isContactEmailFilledAndValid: n,
            customerDataFinished: o
        }
    });
    e.getInvoiceEmailForm = bo;
    var Eo = (0, n.createSelector)([Ao], function(e) {
        return 0 === e.length
    });
    e.isInvoiceDataValid = Eo;
    var Po = (0, n.createSelector)([ho, yo, re], function(e, t, r) {
        return null !== t ? {
            invoiceEmail: "invoiceEmail" === e ? t : r
        } : null
    });
    e.getInvoiceDataCheckoutData = Po;
    var Fo = (0, n.createSelector)([Xt, $e, Xn, yn, xn, jn, lt, po, ot, Me, at, Po], function(t, e, r, n, o, i, a, c, s, u, l, d) {
        return a && a.forEach(function(e) {
            return e.email = t.emailAddress
        }), {
            customer: (0, g.fixCustomerCheckoutData)(t),
            representativeData: (0, g.toUpperCase)(e),
            consentStates: r,
            delivery: n,
            installation: o,
            payment: i,
            mnp: a,
            additionalDocuments: c,
            telesales: s,
            billingAccount: u,
            debtRepayment: l,
            invoiceData: d
        }
    });
    e.getCheckoutData = Fo;
    var Io = (0, n.createSelector)([Xt, $e, Xn, yn, xn, jn, lt, po, ot, Me, at, r.getKdrCheckoutData], function(t, e, r, n, o, i, a, c, s, u, l) {
        return a && a.forEach(function(e) {
            return e.email = t.emailAddress
        }), {
            customer: (0, g.fixCustomerCheckoutData)(t),
            representativeData: (0, g.toUpperCase)(e),
            consentStates: r,
            delivery: n,
            installation: o,
            mnp: a,
            additionalDocuments: c,
            telesales: s,
            billingAccount: u,
            debtRepayment: l
        }
    });
    e.getCheckoutDataForDelivery = Io;
    var No = (0, n.createSelector)(zn, function(e) {
        return e.documentsConfirmation
    });
    e.getDocumentsConfirmationState = No;
    var Oo = (0, n.createSelector)(zn, function(e) {
        return e.modifyConsentsInCartQueue
    });
    e.getModifyConsentsInCartQueue = Oo;
    var Ro = (0, n.createSelector)([tn, rn, Cn, r.getMobileCartDevices], function(e, t, r, n) {
            return 0 === r.length ? e && "" !== e && e !== S.default.POS : Ci(n, t, r)
        }),
        ko = (0, n.createSelector)([r.allCartEntries, rn, tn], function(e, r, n) {
            var t = e.filter(function(e) {
                var t;
                return "" === (t = e.entryType === i.default.FIX ? r.fixDevices ? r.fixDevices.id : n : r.mobile ? r.mobile.id : "") || t === S.default.POS
            });
            return (0, v.cartEntriesContainsReservableItems)(t)
        });
    e.cartContainsReservableItems = ko;
    var To = (0, n.createSelector)(r.allCartEntries, function(e) {
        return (0, v.cartContainsEsim)(e)
    });
    e.cartContainsAnySim = To;
    var Vo = (0, n.createSelector)([rn, To], function(e, t) {
        var r = e.mobile ? e.mobile.id : "";
        return ("" === r || r === S.default.POS) && t
    });
    e.cartContainsReservableSim = Vo;
    var Bo = (0, n.createSelector)(r.allCartEntries, function(e) {
        return 0 < e.filter(function(e) {
            return (0, v.entryContainsReservableSimCard)(e)
        }).length
    });
    e.cartContainsAnyPhysicalSimCard = Bo;
    var xo = (0, n.createSelector)([Pr, r.isCartMobile, Bo, r.cartHasMobileDevices], function(e, t, r, n) {
        return e === D.default.DIGITAL && t && !r && !n
    });
    e.isDigitalAgreementTypeWithoutPhysicalSimAndDevices = xo;
    var Lo = (0, n.createSelector)([Mr, Pr], function(e, t) {
        return !e && t === D.default.DIGITAL || e === D.default.DIGITAL && t === D.default.PAPER
    });
    e.hasAgreementTypeChanged = Lo;
    var qo = (0, n.createSelector)([Vr, kr, yr], function(e, t, r) {
        var n = (t || []).filter(function(e) {
                return e.id != S.default.PICKUP_ON_EMAIL
            }),
            o = (e || []).filter(function(e) {
                return e.id != S.default.PICKUP_ON_EMAIL
            });
        if (r.isFirstMethodDefault || 1 == (o || []).length) {
            var i = o.map(function(e) {
                return e.id
            });
            return 0 < i.length ? i[0] : n.map(function(e) {
                return e.id
            })[0] || null
        }
        return null
    });
    e.getDefaultDeliveryMethod = qo;
    var wo = (0, n.createSelector)([Br, te, hr, Mr], function(e, t, r, n) {
        return !e || t && n ? D.default.PAPER : r && !n ? D.default.DIGITAL : n
    });
    e.getSelectedOrDefaultMobileAgreementType = wo;
    var _o = (0, n.createSelector)([Br, te, hr, Mr, Fr, qo, br, kr, wo], function(e, t, r, n, o, i, a, c, s) {
        if (o) return t ? D.default.PAPER : s;
        var u = c.map(function(e) {
            return e.id
        }).some(S.default.isDigital);
        return n === D.default.DIGITAL && u || r && u ? D.default.DIGITAL : D.default.PAPER
    });
    e.getSelectedOrDefaultAgreementType = _o;
    var Go = (0, n.createSelector)([Vr, Pr, te], function(e, t, r) {
        return e.map(function(e) {
            return e.id
        }).filter(function(e) {
            return !(r && e === S.default.PICKUP_FROM_SHELF)
        }).filter(function(e) {
            return !(S.default.PICKUP_ON_EMAIL === e && D.default.PAPER === t)
        })
    });
    e.getAvailableDeliveryMethodCodes = Go;
    var Wo = (0, n.createSelector)([en, br, qo, xo, Go], function(e, t, r, n, o) {
        if (n) return S.default.PICKUP_ON_EMAIL;
        var i = e || t;
        return i && o.includes(i) ? i : r
    });
    e.getSelectedOrDefaultDeliveryMethod = Wo;
    var jo = (0, n.createSelector)([en, kr, _n, wn], function(t, e, r, n) {
        var o = e.find(function(e) {
                return e.id === t
            }),
            i = Ko(o).map(function(e) {
                return e.id
            });
        return 0 < i.length ? i.includes(r) ? r : Uo(o) : n && n[0] ? n[0] : null
    });
    e.getSelectedOrDefaultPaymentMethod = jo;
    var Uo = function(e) {
            var t = Ko(e).find(function(e) {
                return e.isDefault
            });
            return t ? t.id : null
        },
        Ko = function(e) {
            return e && e.supportedPaymentMethods && 0 < e.supportedPaymentMethods.length ? e.supportedPaymentMethods : []
        },
        Ho = (0, n.createSelector)([en, Go], function(e, t) {
            return e && t.includes(e)
        });
    e.isSelectedDeliveryMethodAvailable = Ho;
    var zo = (0, n.createSelector)([br, Mr, te], function(e, t, r) {
        return r && (t === D.default.DIGITAL || e === S.default.PICKUP_FROM_SHELF)
    });
    e.shouldShowEmailWarning = zo;
    var Zo = (0, n.createSelector)(br, function(e) {
        return e === S.default.PICKUP_FROM_SHELF ? y.default.PICKUP : y.default.DEFAULT
    });
    e.getDescriptionKey = Zo;
    var Xo = (0, n.createSelector)([b, Ro, ko], function(e, t, r) {
        return e.reservation.paymentAndFiscalization && e.reservation.paymentAndFiscalization.isInvoicePresent ? e.reservation.paymentStatus || e.reservation.paymentOverride : e.reservation.saleUnlocked || e.reservation.paymentStatus || e.reservation.paymentOverride || !e.reservation.productsExists || e.reservation.agencyPosStatusValid || t || !r
    });
    e.invoiceIsPresentAndPaid = Xo;
    var Jo = (0, n.createSelector)(b, function(e) {
        return e.reservation
    });
    e.reservationData = Jo;
    var Qo = (0, n.createSelector)(Jo, function(e) {
        return e.simCardTypes
    });
    e.getReservationSimCardTypes = Qo;
    e.getSimCardTypeForBundle = function(t) {
        return (0, n.createSelector)(Qo, function(e) {
            return e[t]
        })
    };

    function $o(e) {
        return (0, m.areSerialNumbersFilled)(e.checkout.reservation.serialNumbers, e)
    }
    var Yo = (0, n.createSelector)([Jo, $o, ko], function(e, t, r) {
        return !r || !t || e.sapReservationNumber || e.serialNumberVerificationInProgress || e.agencyPosStatusValid
    });
    e.isReservationButtonDisabled = Yo;
    var ei = (0, n.createSelector)([Mn], function(e) {
        return null != e && 0 < e.length
    });
    e.containsFixEntries = ei;
    var ti = (0, n.createSelector)([Cn], function(e) {
        return null != e && 0 < e.length
    });
    e.containsConvergentEntries = ti;
    var ri = (0, n.createSelector)([Q, jt, ne], function(e, t, r, n) {
        return M({}, e, {
            errors: t,
            existing: r,
            readOnly: n
        })
    });
    e.getCustomerForm = ri;
    var ni = (0, n.createSelector)([ee, zt, ne], function(e, t, r, n) {
        return M({}, e, {
            errors: t,
            existing: r,
            readOnly: n
        })
    });
    e.getContactCustomerForm = ni;
    var oi = (0, n.createSelector)([Q, jt, Cr, ne, I, N, er, sr, dr, vr, mr, fr, ei, r.getCartIsNet, o.isNewAgreementInDocuments, r.isCartFix], function(e, t, r, n, o, i, a, c, s, u, l, d, f, g, v, m) {
        return M({}, e, {
            errors: t,
            readOnly: r,
            existing: n,
            isSalesOfGoodsOnly: o,
            isSalesOfAddonsOnly: i,
            show: a && !c,
            isSmsVerified: s,
            isOnlineCookie: u,
            isWWW: l,
            bpgRequested: d,
            containsFixEntries: f,
            isB2B: g,
            isBzuOnlyAvailableOptionForFix: !v && n && i && m
        })
    });
    e.getCustomerDataForm = oi;
    var ii = (0, n.createSelector)([oi, I, N], function(t, e, r) {
        var n = {},
            o = [];
        return t.isBusinessClient ? (Object.keys(u.emptyPersonalData).forEach(function(e) {
            return o.push(e)
        }), (e || r) && (o.push("regon"), o.push("registrationDate"), o.push("companyStatus"))) : (Object.keys(u.emptyBusinessData).forEach(function(e) {
            return o.push(e)
        }), e || r ? (Object.keys(u.emptyPolishPersonalData).forEach(function(e) {
            return o.push(e)
        }), Object.keys(u.emptyForeignerPersonalData).forEach(function(e) {
            return o.push(e)
        })) : t.foreigner ? ai(o, t).forEach(function(e) {
            return o.push(e)
        }) : Object.keys(u.emptyForeignerPersonalData).forEach(function(e) {
            return o.push(e)
        })), Object.keys(t).filter(function(e) {
            return -1 === o.indexOf(e)
        }).forEach(function(e) {
            return n[e] = t[e]
        }), n
    });
    e.getCustomerDataToValidation = ii;
    var ai = function(e, t) {
            return t.noPesel ? [].concat(babelHelpers.toConsumableArray(e), [Object.keys(u.emptyPolishPersonalData)]) : [].concat(babelHelpers.toConsumableArray(e), [Object.keys(u.emptyPolishPersonalData).filter(function(e) {
                return "pesel" != e
            })])
        },
        ci = (0, n.createSelector)([Ct, Ut, kt, Tt, Vt, Cr, er, sr, $, le, fr, ne, oe, I, N, mr, o.isNewAgreementInDocuments, r.isCartFix], function(e, t, r, n, o, i, a, c, s, u, l, d, f, g, v, m, S, p) {
            return M({}, e, {
                errors: t,
                citySuggestions: r,
                streetSuggestions: n,
                validation: o,
                readOnly: i,
                isBusinessClient: s,
                isForeignerCheckboxAvailable: u,
                bpgRequested: l,
                show: a && !c,
                existing: d,
                hasFixAddress: f,
                isSalesOfGoodsOnly: g,
                isSalesOfAddonsOnly: v,
                isWWW: m,
                isBzuOnlyAvailableOptionForFix: !S && d && v && p
            })
        });
    e.getCustomerMainAddressForm = ci;
    var si = (0, n.createSelector)([Dt, Kt, Bt, xt, Lt, bt, Cr], function(e, t, r, n, o, i, a) {
        return M({}, e, {
            errors: t,
            citySuggestions: r,
            streetSuggestions: n,
            validation: o,
            addressMapping: i,
            readOnly: a
        })
    });

    function ui(e) {
        return e.some(function(e) {
            return (e.vases || []).some(function(e) {
                return "NEOIBEZP" === e.subType
            })
        })
    }
    e.getCustomerCorrespondenceAddressForm = si;
    var li = (0, n.createSelector)([Mn, Cn, ei, ti], function(e, t, r, n) {
        return r ? ui(e) : !!n && t.some(function(e) {
            return ui(e.entries)
        })
    });
    e.isEmailRequiredByProductInCart = li;
    var di = (0, n.createSelector)([li, te], function(e, t) {
        return e && t
    });
    e.isEmailFormValid = di;
    e.getMnpContactMethods = function(t) {
        return (0, n.createSelector)(fi, function(e) {
            return e ? t.sort(function(e, t) {
                return e.priority - t.priority
            }) : t.filter(function(e) {
                return !(0, a.like)(e.value, "EMAIL")
            }).sort(function(e, t) {
                return e.priority - t.priority
            })
        })
    };
    var fi = (0, n.createSelector)([ee, zt], function(e, t) {
        return e.emailAddress && (!t || !t.emailAddress || 0 === t.emailAddress.length)
    });
    e.isEmailFilledAndValid = fi;
    var gi = (0, n.createSelector)([ee, zt, Cr, ne, Mn, er, sr, $, le, fr, I, N, mr, li], function(e, t, r, n, o, i, a, c, s, u, l, d, f, g) {
        return M({}, e, {
            errors: t,
            readOnly: r,
            existing: n,
            fixentries: o,
            isBusinessClient: c,
            isForeignerCheckboxAvailable: s,
            bpgRequested: u,
            show: i && !a,
            isSalesOfGoodsOnly: l,
            isSalesOfAddonsOnly: d,
            isWWW: f,
            isEmailRequiredByProductInCart: g
        })
    });
    e.getCustomerContactForm = gi;
    var vi = (0, n.createSelector)(ee, function(e) {
        return e.phoneNumber
    });
    e.getCustomerContactMsisdn = vi;
    var mi = (0, n.createSelector)([yt, Ht, qt, wt, _t, Et, Cr, Ct], function(e, t, r, n, o, i, a, c) {
        return M({}, e, {
            errors: t,
            citySuggestions: r,
            streetSuggestions: n,
            validation: o,
            addressMapping: i,
            readOnly: a,
            addressMain: c
        })
    });
    e.getDeliveryAddressForm = mi;
    var Si = (0, n.createSelector)([_t, Et, yt], function(t, e, r) {
        return "main" === e || "delivery" === e && !Object.keys(t).find(function(e) {
            return "city" !== e && !t[e]
        }) && !Ye(r.streetNumber)
    });
    e.isDeliveryAddressValid = Si;
    var pi = (0, n.createSelector)([Hn, Xn], function(e, t) {
        return !e.find(function(e) {
            return !(0, a.validateConsent)(e, t)
        })
    });
    e.allConsentsValid = pi;
    var Ci = function(e, t, r) {
            return t && Di(t) && yi(e, t, r)
        },
        Di = function(e) {
            return !(0, d.isDeliveryMethodRequired)(e.fixDevices) || (0, d.isDeliveryMethodSelected)(e.fixDevices) && e.fixDevices.id !== S.default.POS
        },
        yi = function(e, t, r) {
            return e && 0 === e.length && ! function(e) {
                {
                    return e && e[0].entries.some(function(e) {
                        return !0 === e.isSim
                    })
                }
            }(r) || !(0, d.isDeliveryMethodRequired)(t.mobile) || (0, d.isDeliveryMethodSelected)(t.mobile) && t.mobile.id !== S.default.POS
        };

    function hi(e, t) {
        for (var r = 0, n = 0; n < e.length; n++) e[n] === t && r++;
        return r
    }

    function Ai(t, e, r) {
        var n = function(e, t, r) {
            var n = [];
            n.push("foreigner"), n.push("isBusinessClient"), n.push("customerNoEmail"), n.push("noPesel"), n.push("fakePesel"), n.push("peselType"), n.push("statusAndDateFromBpg"), n.push("hasActiveContracts"), e.isBusinessClient ? (n.push("pesel"), n.push("idNumber"), n.push("firstName"), n.push("lastName"), n.push("country"), n.push("identification"), n.push("identificationNumber"), n.push("identificationExpirationDate"), n.push("identificationRegistrationDate"), n.push("gender"), (t || r) && (e.regon || n.push("regon"), n.push("registrationDate"), n.push("companyStatus"), n.push("disabledIdNumber"))) : (Object.keys(u.emptyBusinessData).map(function(e) {
                return n.push(e)
            }), t || r ? (n.push("pesel"), n.push("idNumber"), n.push("country"), n.push("identification"), n.push("identificationNumber"), n.push("identificationExpirationDate"), n.push("identificationRegistrationDate"), n.push("gender")) : e.foreigner ? (n.push("idNumber"), e.noPesel ? n.push("pesel") : n.push("gender"), "UE_CERTIFICATE" !== e.identification && n.push("identificationRegistrationDate"), "UE_CERTIFICATE" === e.identification && n.push("identificationExpirationDate")) : (n.push("country"), n.push("identification"), n.push("identificationNumber"), n.push("identificationExpirationDate"), n.push("identificationRegistrationDate"), n.push("gender")));
            e.customerNoEmail && n.push("emailAddress");
            return n
        }(t, e, r);
        return 0 === Object.keys(t).filter(function(e) {
            return -1 === n.indexOf(e)
        }).filter(function(e) {
            return "boolean" != typeof t[e] && !t[e]
        }).length
    }

    function Mi(e) {
        return "" !== e.streetNumber
    }

    function bi(t) {
        return void 0 !== t && 0 !== Object.keys(t).filter(function(e) {
            return 0 !== t[e].length
        }).length
    }

    function Ei(t, r) {
        return t && 0 !== Object.keys(t).filter(function(e) {
            return t[e] && 0 < t[e].length && -1 === r.indexOf(e)
        }).length
    }

    function Pi(t) {
        return Object.keys(t).filter(function(e) {
            return !1 === t[e]
        }).length <= 1
    }
    var Fi = (0, n.createSelector)([Q, ee, Ct, Dt, jt, zt, bt, Vt, Lt, I, N, Zt, di], function(e, t, r, n, o, i, a, c, s, u, l, d, f) {
        var g = !("correspondence" === a) || Pi(s) && Mi(n),
            v = Ii(e, u, l),
            m = t.customerNoEmail ? ["emailAddress"] : [];
        return Ai(e, u, l) && Ai(t) && Pi(c) && Mi(r) && g && !Ei(o, v) && !Ei(i, m) && !Ei(d, ["streetId", "townId"]) && !f
    });
    e.isCustomerDataValid = Fi;
    var Ii = function(e, t, r) {
            var n = [];
            return n = e.isBusinessClient ? n.concat(["firstName", "lastName", "pesel", "identificationNumber", "identificationExpirationDate", "idNumber"]) : n.concat(["companyName", "nip", "regon"]), e.foreigner ? (n = n.concat(["idNumber"]), n = e.noPesel ? n.concat(["pesel"]) : n.concat(["gender"]), "UE_CERTIFICATE" !== e.identification ? n = n.concat(["identificationRegistrationDate"]) : "UE_CERTIFICATE" === e.identification && (n = n.concat(["identificationExpirationDate"]))) : n = n.concat(["country", "identification", "identificationNumber", "identificationExpirationDate", "identificationRegistrationDate", "gender"]), (t || r) && (n = n.concat(["pesel", "identificationNumber", "identificationExpirationDate", "identificationRegistrationDate", "idNumber"])), n
        },
        Ni = (0, n.createSelector)(Cn, function(e) {
            return 0 < e.length && e.every(function(e) {
                return (0, p.is2UCartEntry)(e) || (0, p.is4UCartEntry)(e)
            })
        });
    e.isNotNecessaryToCheckDocument = Ni;
    var Oi = (0, n.createSelector)([Co, mo, Ni], function(e, t, r) {
        return r || e.some(function(e) {
            return e.id === +t
        })
    });
    e.isDocumentSelected = Oi;
    var Ri = (0, n.createSelector)([Co, mo, So, Do, Ni], function(e, t, r, n, o) {
        var i = e.find(function(e) {
                return e.id === +t
            }),
            a = !!i && i.isNeededTextField,
            c = !n || !n.customerWorkPhoneNumber || 0 === n.customerWorkPhoneNumber.length;
        return o || !a || !!r && c
    });
    e.isCVPhoneFilled = Ri;
    var ki = (0, n.createSelector)([r.getMobileCartEntries, r.getMobileVasesRaw], function(e, t) {
        var r = 0,
            n = 0;
        if (t && t.find(function(e) {
                return "RETENTION" == e.process
            }) && t.find(function(e) {
                return "RETENTION" == e.process
            }).categorizedBonuses.RetentionBonuses) {
            var o = t.find(function(e) {
                return "RETENTION" == e.process
            }).categorizedBonuses.RetentionBonuses.services;
            return !o || o.length <= 0 ? !0 : (e.filter(function(e) {
                return "RETENTION" == e.processType
            }).forEach(function(e) {
                if (r++, !e.vases || 0 == e.vases.length) return !1;
                o.forEach(function(t) {
                    e.vases.find(function(e) {
                        return e.productCode == t.id
                    }) && n++
                })
            }), r <= n)
        }
        return !0
    });
    e.isRetentionBonusesDataFilled = ki;
    var Ti = (0, n.createSelector)([ut, r.getCartIsNet], function(e, t) {
        return 0 === Object.getOwnPropertyNames(e).length || e.map(function(e) {
            if (h.default.isMnpApplicationSecondStep(e.processType)) return !0;
            if (!e.offerType) return !1;
            if (!e.agreementType) return !1;
            if (t) {
                if (t && "1" === e.agreementType && !(e.firstName && e.lastName && e.pesel && e.idNumber)) return !1
            } else if ("2" === e.agreementType) {
                if (!e.businessName) return !1;
                if ("NIP" === e.identifier && !e.nip) return !1;
                if ("REGON" === e.identifier && !e.regon) return !1;
                if (!(!1 !== e.isHeadquartersAddressSame || e.postalCode && e.city && e.houseNumber)) return !1
            }
            return "END" === e.migrationMode || !!e.date
        })[0]
    });
    e.isMnpDataFilled = Ti;
    var Vi = (0, n.createSelector)([ut, r.getCartIsNet], function(e, r) {
        return 0 === Object.getOwnPropertyNames(e).length || 0 === e.map(function(e) {
            var t = M({}, e.errors);
            return r && ("3" === e.agreementType || "2" === e.agreementType ? (t.firstName = [], t.lastName = [], t.pesel = [], t.idNumber = [], t.businessName = [], t.identifier = [], t.nip = [], t.regon = [], t.isHeadquartersAddressSame = []) : "1" === e.agreementType && (t.businessName = [], t.identifier = [], t.nip = [], t.regon = [], !0 === e.isHeadquartersAddressSame && (t.postalCode = [], t.street = [], t.city = [], t.houseNumber = [], t.flatNumber = []))), r || (t.firstName = [], t.pesel = [], t.idNumber = [], t.lastName = [], "1" === e.agreementType ? (t.businessName = [], t.identifier = [], t.nip = [], t.regon = [], t.isHeadquartersAddressSame = []) : "2" === e.agreementType && ("NIP" === e.identifier ? t.regon = [] : "REGON" === e.identifier && (t.nip = [])), "1" !== e.agreementType && !0 !== e.isHeadquartersAddressSame || (t.postalCode = [], t.street = [], t.city = [], t.houseNumber = [], t.flatNumber = [])), "EOP" === e.migrationMode && (t.date = []), Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            }).reduce(function(e, t) {
                return [].concat(babelHelpers.toConsumableArray(e), babelHelpers.toConsumableArray(t))
            })
        }).reduce(function(e, t) {
            return [].concat(babelHelpers.toConsumableArray(e), babelHelpers.toConsumableArray(t))
        }, []).length
    });
    e.isMnpDataValid = Vi;
    var Bi = (0, n.createSelector)(b, function(e) {
        return e.apu.isApuSelected
    });
    e.getApuState = Bi;
    var xi = (0, n.createSelector)(b, function(e) {
        return e.returnDocument.returnDocumentLoader
    });
    e.getReturnDocumentLoader = xi;
    var Li = (0, n.createSelector)([b, Dr], function(e, t) {
        return "customer-data" !== t || e.consents.consentDocumentsPrintState
    });
    e.getConsentDocumentsPrintState = Li;
    var qi = (0, n.createSelector)(Dr, function(e) {
        return "customer-data" === e
    });
    e.getIsCustomerDataStep = qi;
    var wi = (0, n.createSelector)(Dr, function(e) {
        return "cart-contents" === e
    });
    e.getIsCartStep = wi;
    var _i = (0, n.createSelector)(Dr, function(e) {
        return "delivery-payment" === e
    });
    e.getDeliveryAndPaymentStep = _i;
    var Gi = (0, n.createSelector)(b, function(e) {
        return e.consents.consentTypeInPrintConsentsValidator
    });
    e.getConsentTypeInPrintConsentsValidator = Gi;
    var Wi = (0, n.createSelector)([Hn, Xn, Gi], function(e, t, r) {
        return !e.filter(function(e) {
            return e.type === r
        }).find(function(e) {
            return !(0, a.validateConsent)(e, t)
        })
    });
    e.isWZRKConsentValid = Wi;
    var ji = (0, n.createSelector)([Wi, Si, Fi, Je, r.getCartIsNet], function(e, t, r, n, o) {
        return o ? t && r && n : t && r
    });
    e.isPrintConsentDocumentsButtonEnabled = ji;

    function Ui(e) {
        return e.documents
    }
    e.getDocumentsState = Ui;
    var Ki = (0, n.createSelector)(Ui, function(e) {
        return e.items
    });
    e.getDocumentsItems = Ki;
    var Hi = (0, n.createSelector)(Ui, function(e) {
        return e.links
    });
    e.getDocumentsLinks = Hi;
    var zi = (0, n.createSelector)([Dn, Ki], function(e, t) {
        return S.default.POS === e && !!t && t.some(function(e) {
            return e.signable
        })
    });
    e.getShouldSignDocuments = zi;
    var Zi = (0, n.createSelector)(b, function(e) {
            return e.agreement
        }),
        Xi = (0, n.createSelector)(Zi, function(e) {
            return e.introductionStatuses
        });
    e.getAgreementIntroductionStatusForBundle = function(t) {
        return (0, n.createSelector)(Zi, function(e) {
            return e.introductionStatuses[t] ? e.introductionStatuses[t] : "TO_INTRODUCE"
        })
    };
    e.isComplexAgreementLoadingForBundle = function(t) {
        return (0, n.createSelector)(Zi, function(e) {
            return !!e.documentLoadings[t]
        })
    };
    var Ji = (0, n.createSelector)([r.getMobileCartEntries, Xi], function(e, t) {
        return e.every(function(e) {
            return "ACCEPTED" === t[e.bundleNo]
        })
    });
    e.allComplexDocumentsAreAccepted = Ji;
    e.getDocumentCodesToMergeForBundle = function(r) {
        return (0, n.createSelector)(Zi, function(e) {
            var t = e.documentsToMergePerBundle.find(function(e) {
                return e.bundleNo === r
            });
            return t ? t.documentCodes : []
        })
    };
    var Qi = (0, n.createSelector)(Zi, function(e) {
        return e.documentsToMergePerBundle
    });
    e.getDocumentsCodesToMerge = Qi;
    var $i = (0, n.createSelector)([r.getCartIsNet, an, cn], function(e, t, r) {
        return e && "courier" === r ? 0 === t.length || (0, C.phoneNumberRegexp)(t) : !(!e && "courier" === r) || (0, C.phoneNumberRegexp)(t)
    });
    e.isDeliveryPhoneContactCorrect = $i;
    var Yi = (0, n.createSelector)([Yr, rn, Si, Cn, pn, $i, dn, Pr, Lr, qr], function(e, t, r, n, o, i, a, c, s, u) {
        return (0 === n.length ? ea(e, o, a) : 0 === l.default.filter(t, function(e) {
            return "" === e
        }).length) && (c !== D.default.PAPER || r) && (c !== D.default.DIGITAL || !!s && 0 === u.length) && (e.id !== S.default.COURIER || i)
    });
    e.areDeliveryConditionsMet = Yi;
    var ea = function(e, t, r) {
            return e && S.default.PARCEL_LOCKER.toLowerCase() === e.id ? !!r : e && t
        },
        ta = (0, n.createSelector)([f.isDuplicateOrder, f.hasAccessRoleToProcessDuplicateOrder], function(e, t) {
            return e && !t
        });

    function ra(e, t) {
        return !(e && e.phoneNumber && 0 < e.phoneNumber.length || null == t || "" === t)
    }
    e.isDuplicatedOrder = ta;
    var na = (0, n.createSelector)([In, Ln, zt, an, rn, Yr, nn, Dr, In], function(e, t, r, n, o, i, a, c, s) {
        if (t) {
            if (r && r.phoneNumberDAP && 0 < r.phoneNumberDAP.length) return !1;
            if (9 !== s.length || !/^\d+$/.test(s)) return !1
        }
        return !0
    });
    e.isContactForDAPValid = na;
    var oa = (0, n.createSelector)([zt, an, rn, Yr, nn, Dr], function(e, t, r, n, o, i) {
        var a = "courier";
        if ("delivery-payment" === i)
            if ("" === r.fixDocuments) {
                if (n.id === a || o.id === a) return ra(e, t)
            } else if (r.fixDocuments && r.fixDocuments.id === a || r.fixDevices && r.fixDevices.id === a || r.mobile && r.mobile.id === a) return ra(e, t);
        return !0
    });
    e.isContactForCourierValid = oa;
    var ia = (0, n.createSelector)([pi, Bi, Li, F, P, _n, Fi, Je, Vi, Ti, be, ta, Qe, di, _i, Yr], function(e, t, r, n, o, i, a, c, s, u, l, d, f, g, v, m) {
        return !n && (v || !o.consents || e) && (!o.customerData || a && c) && (!o.fixRepresentativeData || f) && (!o.mnpData || s && u) && (!o.apuData || t) && (!o.consentDocuments || r) && (!o.billingAccount || l) && !d && !g && !(v && m && S.default.ACCOUNT_MANAGER == m.id)
    });
    e.isNextStepAvailable = ia;
    var aa = (0, n.createSelector)(b, function(e) {
        return e.pickup
    });
    e.getPickup = aa;
    var ca = (0, n.createSelector)(aa, function(e) {
        return e.simCardTypes
    });
    e.posSimCardTypes = ca;
    var sa = (0, n.createSelector)(aa, function(e) {
        return e.serialNumbers
    });
    e.pickupSerialNumbers = sa;
    var ua = (0, n.createSelector)(aa, function(e) {
        return e.reservationStatus
    });
    e.getReservationStatus = ua;
    var la = (0, n.createSelector)(aa, function(e) {
        return e.goodsOrderPaymentStatus
    });
    e.getGoodsOrderPaymentStatus = la;
    var da = (0, n.createSelector)(aa, function(e) {
        return e.paymentOverride
    });
    e.getPaymentOverrideStatus = da;
    var fa = (0, n.createSelector)(aa, function(e) {
        return e.paymentAndFiscalizationLoaded
    });
    e.getPaymentAndFiscalizationLoaded = fa;
    var ga = (0, n.createSelector)(O, function(e) {
        return e.pickupReplanishmentRequired
    });
    e.getPickupReplanishmentRequiredErrors = ga;
    var va = (0, n.createSelector)(aa, function(e) {
        return e.navigationLoading
    });
    e.getNavigationLoading = va;
    var ma = (0, n.createSelector)(aa, function(e) {
        return e.lastOrder
    });
    e.getLastOrder = ma;
    var Sa = (0, n.createSelector)(aa, function(e) {
        return e.canceled
    });
    e.getOrderCanceled = Sa;
    var pa = (0, n.createSelector)(aa, function(e) {
        return e.generalError
    });
    e.getPickupError = pa;
    var Ca = (0, n.createSelector)(aa, function(e) {
        return e.generalError && 0 < e.generalError.length ? (t = e).generalError[0] ? t.generalError[0] : t.generalError : "";
        var t
    });
    e.getFirstPickupError = Ca;
    var Da = (0, n.createSelector)(aa, function(e) {
        return e.documents
    });
    e.getPickupDocuments = Da;
    var ya = (0, n.createSelector)(aa, function(e) {
        return e.documentlinks
    });
    e.getPickupDocumentLinks = ya;
    var ha = (0, n.createSelector)(aa, function(e) {
        return e.documentDownloaded
    });
    e.getDownloadedDocumentCode = ha;
    var Aa = (0, n.createSelector)(aa, function(e) {
        return e.serialNumberError
    });
    e.getPickupSerialNumberErrors = Aa;

    function Ma(r, t) {
        return Object.keys(r).reduce(function(e, t) {
            return e.concat(r[t])
        }, []).filter(function(e) {
            return e.signable
        }).every(function(e) {
            return !!t && t.hasOwnProperty(e.documentCode + "_" + e.bundleNo)
        })
    }
    var ba = (0, n.createSelector)([Da, Hi, pr], function(e, t, r) {
        return Ma(e, t) || r
    });
    e.signableDocumentsPrintedPickup = ba;
    var Ea = (0, n.createSelector)([Ki, Hi, pr], function(e, t, r) {
        return Ma(e, t) || r
    });
    e.signableDocumentsPrinted = Ea;
    var Pa = (0, n.createSelector)(b, function(e) {
        return e.assistMode
    });
    e.getAssistModeStateFromStore = Pa;
    var Fa = (0, n.createSelector)(Pa, function(e) {
        return e.assistModeState
    });
    e.getAssistModeStateData = Fa;
    var Ia = (0, n.createSelector)(Pa, function(e) {
        return e.modalAssistModeState
    });
    e.getAssistModeModalStateData = Ia;
    var Na = (0, n.createSelector)(Pa, function(e) {
        return e.confirmationModalState
    });
    e.getAssistModeConfirmationModalStateData = Na;
    var Oa = (0, n.createSelector)(Pa, function(e) {
        return e.employeeList
    });
    e.getEmployeeList = Oa;
    var Ra = (0, n.createSelector)(Pa, function(e) {
        return e.filters
    });
    e.getEmployeeListFilters = Ra;
    var ka = (0, n.createSelector)(Pa, function(e) {
        return e.isLoadingEmployeeList
    });
    e.isLoadingEmployeeList = ka;
    var Ta = (0, n.createSelector)(Pa, function(e) {
        return e.selectedEmployee
    });
    e.getSelectedEmployee = Ta;
    var Va = (0, n.createSelector)(Pa, function(e) {
        return e.page
    });
    e.getCurrentPage = Va;
    var Ba = (0, n.createSelector)(Pa, function(e) {
        return e.filterEnabled
    });
    e.getFilterEnabled = Ba;
    var xa = (0, n.createSelector)(Pa, function(e) {
        return e.isLoadingAssistModeState
    });
    e.isLoadingAssistModeState = xa;
    var La = (0, n.createSelector)(Pa, function(e) {
        return e.confirmationLeaveModalState
    });
    e.getAssistModeConfirmationLeaveModalStateData = La;
    var qa = (0, n.createSelector)(Yt, function(e) {
        return e.earlierInstallationConsentNotAcceptedModalIsVisible
    });
    e.isEarlierInstallationConsentNotAcceptedModalVisible = qa;
    var wa = (0, n.createSelector)(Yt, function(e) {
        return e.earlierInstallationConsentNotAcceptedModalIsAccepted
    });
    e.isEarlierInstallationConsentNotAcceptedModalIsAccepted = wa;
    var _a = (0, n.createSelector)(Yt, function(e) {
        return e.earlierInstallationConsentNotAcceptedModalDidMount
    });
    e.isEarlierInstallationConsentNotAcceptedModalMounted = _a;
    var Ga = (0, n.createSelector)(Yt, function(e) {
        return e.courierDeliveryMethodModalVisible
    });
    e.isCourierDeliveryMethodModalVisible = Ga;
    var Wa = (0, n.createSelector)(Yt, function(e) {
        return e.courierDeliveryMethodModalDidMount
    });
    e.isCourierDeliveryMethodModalMounted = Wa;
    var ja = (0, n.createSelector)(Yt, function(e) {
        return e.courierDeliveryMethodModalState
    });
    e.getCourierDeliveryMethodModalState = ja;
    var Ua = (0, n.createSelector)(Yt, function(e) {
            return e.emailWarningModalState
        }),
        Ka = (0, n.createSelector)(Ua, function(e) {
            return e.visible
        });
    e.isEmailWarningModal = Ka;
    var Ha = (0, n.createSelector)(Ua, function(e) {
        return e.descriptionKey
    });

    function za(e, r) {
        return e.map(function(e, t) {
            return M({}, e, {
                errors: r[t]
            })
        })
    }
    e.getWarningModalDescriptionKey = Ha;
    var Za = (0, n.createSelector)([rn, tn, r.allCartEntries], function(r, n, e) {
        return e.filter(function(e) {
            var t;
            return "" === (t = e.entryType === i.default.FIX ? r.fixDevices ? r.fixDevices.id : n : r.mobile ? r.mobile.id : "") || t === S.default.POS
        })
    });
    e.getAllReservableCartEntries = Za;
    var Xa = (0, n.createSelector)(zn, function(e) {
        return e.isRegisteredAgreementConfirmationComponent
    });
    e.isRegisteredAgreementConfirmationComponent = Xa;
    var Ja = (0, n.createSelector)(zn, function(e) {
        return e.wasBonusAgreementConfirmationModalConfirmed
    });
    e.wasBonusAgreementConfirmationModalConfirmed = Ja;
    var Qa = (0, n.createSelector)(zn, function(e) {
        return e.wasBigAndZonkAgreementConfirmationModalConfirmed
    });
    e.wasBigAndZonkAgreementConfirmationModalConfirmed = Qa;
    var $a = (0, n.createSelector)(O, function(e) {
        return e.showAgreementConfirmationModal
    });
    e.getShowAgreementConfirmationModal = $a;
    var Ya = (0, n.createSelector)(O, function(e) {
        return e.agreementConfirmationModalVariant
    });
    e.getAgreementConfirmationModalVariant = Ya;
    var ec = (0, n.createSelector)(O, function(e) {
        return e.existingOrderOrCartValidation
    });
    e.getExistingOrderOrCartValidation = ec;
    var tc = (0, n.createSelector)([rn, Yr, nn], function(e, t, r) {
        var n = "DOCUMENTS_PACKAGE",
            o = "DEVICES_PACKAGE",
            i = "courier";
        if ("" === e.fixDocuments) {
            if (t.id === i) return n;
            if (r.id === i) return o
        } else {
            if (e.fixDocuments && e.fixDocuments.id === i) return n;
            if (e.fixDevices && e.fixDevices.id === i) return o;
            if (e.mobile && e.mobile.id === i) return ""
        }
        return "OTHER"
    });
    e.getSectionForCourier = tc;
    var rc = (0, n.createSelector)(Yt, function(e) {
        return e.fixCartRefreshResult
    });
    e.getFixCartRefreshResult = rc;
    var nc = (0, n.createSelector)(rc, function(e) {
        return e && "ACTIVATION" == e.previousProcess && "ACTIVATION_NNAKED" == e.currentProcess
    });
    e.shouldShowModalAfterProcessChanged = nc;
    var oc = (0, n.createSelector)(r.getMiniCart, function(e) {
        return e && e.entries && 0 < e.entries.length ? e.entries[0].entryType : ""
    });
    e.getFactoryCart = oc;
    var ic = (0, n.createSelector)([en, Pr, oc], function(e, t, r) {
        return S.default.PICKUP_ON_EMAIL === e || t === D.default.DIGITAL && ("MOBILE" === r || !r)
    });
    e.selectedDeliveryMethodIsPickupOnEmail = ic;
    var ac = (0, n.createSelector)(r.getMobileCartEntries, function(e) {
            return e && 0 < e.length && e.some(function(e) {
                return "ID_VERIFICATION_NEEDED" === e.eagreementAvailabilityStatus
            })
        }),
        cc = (0, n.createSelector)(b, function(e) {
            return e.idVerification
        }),
        sc = (0, n.createSelector)(cc, function(e) {
            return e.banks
        });
    e.getIdVerificationBanks = sc;
    var uc = (0, n.createSelector)(cc, function(e) {
        return e.verificationResult
    });
    e.getIdVerificationResult = uc;
    var lc = (0, n.createSelector)(uc, function(e) {
        return e.selectedBankId
    });
    e.getIdVerificationSelectedBankId = lc;
    var dc = (0, n.createSelector)(uc, function(e) {
        return e.status
    });
    e.getIdVerificationStatus = dc;
    var fc = (0, n.createSelector)([ic, se, ac], function(e, t, r) {
        return e && !t || r
    });
    e.isIdVerificationRequired = fc;
    var gc = (0, n.createSelector)(dc, function(e) {
        return !e || "FAIL" === e
    });
    e.isIdVerificationFailedOrEmpty = gc;
    var vc = (0, n.createSelector)([fc, lc, dc], function(e, t, r) {
        return e && t && !["SUCCESS", "IN_PROGRESS"].includes(r)
    });
    e.isIdVerificationRequiredAndNotVerified = vc;
    var mc = (0, n.createSelector)([fc, lc, dc], function(e, t, r) {
        return e && t && "SUCCESS" === r
    });
    e.isIdVerificationRequiredAndSucceed = mc;
    var Sc = (0, n.createSelector)(b, function(e) {
            return e.summary
        }),
        pc = (0, n.createSelector)(Sc, function(e) {
            return e && e.orderSummary.entries && 0 < e.orderSummary.entries.length ? e.orderSummary.entries[0].entryType : ""
        });
    e.getOrderFactoryForSummary = pc;
    var Cc = (0, n.createSelector)(Sc, function(e) {
        return e && e.salesChannel
    });
    e.getSalesChannelForSummary = Cc;
    var Dc = (0, n.createSelector)(Yt, function(e) {
        return e.fullPageLoader
    });
    e.isFullPageLoader = Dc;
    var yc = (0, n.createSelector)(yr, function(e) {
        return 0 < e.methods.length && e.methods.every(function(e) {
            return "FIX" === e.factory
        })
    });
    e.allFixDeliveryMethods = yc;
    var hc = (0, n.createSelector)(Zn, function(e) {
        var t = e.find(function(e) {
            return "21_CONV" === e.consentCode
        });
        return t && "NO_21_CONV" === t.stateCode
    });
    e.noERegulationsConsent = hc;
    var Ac = (0, n.createSelector)([Jo, Za], function(o, e) {
        var i = [];
        return e.filter(function(e) {
            return e.isSim && e.msisdn && e.simCard.reservable
        }).map(function(e) {
            var t = {};
            if (t.bundle = e.bundleNo, t.hasSerial = !0, o.simCardTypes && 0 < Object.keys(o.simCardTypes).length) {
                var r = o.simCardTypes[e.bundleNo] ? o.simCardTypes[e.bundleNo] : "",
                    n = o.simCardTypeDefinitions.find(function(e) {
                        return e.baseCode === r
                    });
                t.sku = n ? n.sku : ""
            }
            t.serialNumber = o.serialNumbers[e.productCode + "_" + e.bundleOmniCode], t.type = "SIM_CARD", t.msisdn = e.msisdn, i.push(t)
        }), i
    });
    e.getPreparedSimRequestFragment = Ac;
    var Mc = (0, n.createSelector)([Jo, $o, ko], function(e, t, r) {
        return !r || t && "" === e.verifySerialNumberError && e.agencyPosStatusValid
    });
    e.simCardSerialNumberFilled = Mc
});
//# sourceMappingURL=selectors.js.map