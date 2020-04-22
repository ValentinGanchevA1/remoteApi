define(["exports", "Reselect", "lodash", "../cbs/main", "../cart/selectors", "../documents/selectors", "./constants/DeliveryMethodFactoryEnum", "./constants/DeliveryMethodModeEnum", "./constants/CartEntryTypeEnum", "./utils/utils", "./constants/DeliveryMethod", "./reducers/helperObjects", "./components/delivery/deliveryMethodHelpers", "eshop/modules/fix/selectors/root", "../checkout/utils/utils", "../checkout/utils/MiniCartUtils", "./actions/app", "./utils/MiniCartUtils", "eshop/modules/core/validation", "./constants/AgreementType", "./constants/EmailWarningDescriptionEnum", "eshop/utils/OnlineUtils"], function(_exports, _Reselect, _lodash, _main, _selectors, _selectors2, _DeliveryMethodFactoryEnum, _DeliveryMethodModeEnum, _CartEntryTypeEnum, _utils, _DeliveryMethod, _helperObjects, _deliveryMethodHelpers, _root, _utils2, _MiniCartUtils, _app, _MiniCartUtils2, _validation, _AgreementType, _EmailWarningDescriptionEnum, _OnlineUtils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getAddressMappings = _exports.getAddressDelivery = _exports.getAddressCorrespondence = _exports.getAddressMain = _exports.createGetAddressSelector = _exports.getMainAddress = _exports.getAddresses = _exports.getCheckoutMnpProps = _exports.getBusinessMnpAddressValidation = _exports.getStreetSuggestionsBusinessMnpAddress = _exports.getCitySuggestionsForBusinessMnpAddress = _exports.getMNPCheckoutData = _exports.getMnpData = _exports.debtRepaymentFilled = _exports.shouldShowDebtRepaymetComponent = _exports.getDebtRepayment = _exports.getDebtRepaymentState = _exports.getTelesales = _exports.getRepresentativeDataForBackend = _exports.isFixRepresentativeDataValid = _exports.isRepresentativeDataValid = _exports.isRepresentativeDataFilled = _exports.isGrantorsValid = _exports.isGrantorsDataEmpty = _exports.getGrantorsFormData = _exports.getGrantorsErrors = _exports.getGrantorsData = _exports.getGrantors = _exports.getSapReservationNumber = _exports.isRepresentativesValid = _exports.isRepresentativesDataEmpty = _exports.isRepresentativesFilled = _exports.getRepresentativeFormData = _exports.getRepresentativesFormData = _exports.getRepresentativesErrors = _exports.getRepresentativesData = _exports.getRepresentatives = _exports.getGrantingDateErrors = _exports.getGrantingDate = _exports.getRepresentationMode = _exports.getRepresentativeData = _exports.areBillingAccountContractsVisible = _exports.getShowContractButtonEnabled = _exports.getSelectedAccountContracts = _exports.isBillingComponentValid = _exports.getBillingAccountCheckoutData = _exports.isBillingAccountFormVisible = _exports.isCreateBillingAccountEnabled = _exports.getSelectedBillingAccountFix = _exports.getSelectedBillingAccountMobile = _exports.getBillingAccountFormDataErrors = _exports.getBillingAccountsData = _exports.getBillingAccountFormData = _exports.getBillingAccount = _exports.getInvestmentOffers = _exports.getInvestmentConsent = _exports.getInvestmentData = _exports.getInvestment = _exports.isForeignerCheckboxAvailable = _exports.getLegalForm = _exports.customerHasActiveContracts = _exports.getCustomerCompanyName = _exports.isDisabledIdNumber = _exports.isCustomerModified = _exports.hasFixAddress = _exports.isExistingCustomer = _exports.getCustomerEmailAddress = _exports.getCustomerNoEmail = _exports.getCustomerContact = _exports.isForeignerAvailable = _exports.isBusinessClient = _exports.getCustomerData = _exports.getCustomer = _exports.getFixAppartmentNoValidation = _exports.getFixClientExistsCheckoutErrors = _exports.getCheckoutReservationErrorsArray = _exports.getMnpNoEmailCheckoutErrors = _exports.getCimConsistentCheckoutErrors = _exports.getNeedSearchCheckoutErrors = _exports.getOutOfStockCheckoutErrors = _exports.getCheckoutErrorsArray = _exports.getCVWithDepositErrors = _exports.getManualCvCheckoutErrors = _exports.getCvMagnumCheckoutErrors = _exports.getCvCheckoutErrors = _exports.isCallbackNeeded = _exports.isAuthNeeded = _exports.getAuthCheckoutErrors = _exports.getFrontValidationMsg = _exports.getSelectedServiceInstanceId = _exports.getSelectedDesignationNumber = _exports.getFbbServices = _exports.getCheckoutErrors = _exports.getSalesOfAddonsProcess = _exports.getSalesOfGoodsProcess = _exports.isDoingCheckoutStep = _exports.checkoutConditionIsRegistered = _exports.getRegisteredCheckoutConditions = _exports.getCheckoutConditions = _exports.getCheckoutState = void 0;
    _exports.isPickupDeliveryValid = _exports.getLastPos = _exports.getSelectedPointOfSaleCity = _exports.getParcelLockerCity = _exports.getParcelLockerList = _exports.getParcelLocker = _exports.getSelectedPointOfSaleId = _exports.getPickupPointOfSaleCities = _exports.getPickupPointsOfSale = _exports.getCourierAdditionalInfo = _exports.getSelectedDeliveryMethodId = _exports.getDeliveryPhoneContact = _exports.getSelectedDeliveryMethodForDevicesForOrder = _exports.getSelectedDeliveryMethodForDevices = _exports.getSelectedDeliveryMethods = _exports.getSelectedMethodForDevices = _exports.getSelectedDeliveryMethodCode = _exports.getSelectedDeliveryMethod = _exports.getDeliveryAllProductContents = _exports.getDeliveryContents = _exports.getSalesDevices = _exports.getConvRentDevices = _exports.getRentDevices = _exports.getIsDeliveryModesEqual = _exports.getDeliveryMethodsForDevices = _exports.getDeliveryModeTypeDevices = _exports.getDeliveryModeTypeDocuments = _exports.deliveryAndCustomerDataLoaded = _exports.getEmailConfirmationModalAccepted = _exports.getEmailConfirmationModalState = _exports.getDeliveryEmailAddressErrors = _exports.getDeliveryEmailAddress = _exports.getDeliveryMethodsFetchDone = _exports.isAgreementTypeRequired = _exports.getDeliveryMethods = _exports.isPickupOnEmailAvailable = _exports.getDeliveryMethodsRaw = _exports.getDeliveryBundles = _exports.getDeliveryFixDevices = _exports.getDeliveryFixDocuments = _exports.getDeliveryFix = _exports.getDeliveryMobile = _exports.getAgreementType = _exports.getCartDeliveryMethodForDevices = _exports.getCartDeliveryMethod = _exports.getCartAgreementType = _exports.getCartDelivery = _exports.isDigitalAgreementDefault = _exports.getDelivery = _exports.getCurrentStepId = _exports.isCustomerDataReadOnly = _exports.areAllDocumentsSaved = _exports.areAllDocumentsSaving = _exports.isWWW = _exports.isOnlineCookie = _exports.getBusinessDataSource = _exports.bpgRequested = _exports.isSmsVerified = _exports.isManualVerificationModalVisible = _exports.installationAvailableTimeSlotsRequested = _exports.customerDataLoading = _exports.cartMnpDataRequested = _exports.deliveryDataRequestFinished = _exports.deliveryDataRequested = _exports.billingAccountDataRequested = _exports.representativeDataRequested = _exports.paymentDataFinished = _exports.customerDataFinished = _exports.customerDataRequested = _exports.getMetadata = _exports.getBillingAccountComponentData = _exports.getBillingAccountFormValidation = _exports.getBillingAccountFormDataWithCbsErrors = _exports.getCustomerCheckoutData = _exports.getCustomerAddressErrors = _exports.getCustomerContactErrors = _exports.getDeliveryAddressErrors = _exports.getCustomerCorrespondenceAddressErrors = _exports.getCustomerMainAddressErrors = _exports.getCustomerDataErrors = _exports.getCustomerErrors = _exports.getDeliveryAddressValidation = _exports.getStreetSuggestionsForDeliveryAddress = _exports.getCitySuggestionsForDeliveryAddress = _exports.getCorrespondenceAddressValidation = _exports.getStreetSuggestionsForCorrespondenceAddress = _exports.getCitySuggestionsForCorrespondenceAddress = _exports.getMainAddressValidation = _exports.getStreetSuggestionsForMainAddress = _exports.getCitySuggestionsForMainAddress = _exports.getBillingAccountAddressValidation = _exports.getStreetSuggestionsForBillingAccountAddress = _exports.getCitySuggestionsForBillingAccountAddress = _exports.getMappedAddressDelivery = _exports.getMappedAddressCorrespondence = _exports.getMappedAddressMain = _exports.getAddressDeliveryMapping = _exports.getAddressCorrespondenceMapping = _exports.createGetMappedAddressSelector = _exports.createGetAddressMappingSelector = void 0;
    _exports.getCustomerContactMsisdn = _exports.getCustomerContactForm = _exports.isEmailFilledAndValid = _exports.getMnpContactMethods = _exports.isEmailFormValid = _exports.isEmailRequiredByProductInCart = _exports.getCustomerCorrespondenceAddressForm = _exports.getCustomerMainAddressForm = _exports.getCustomerDataToValidation = _exports.getCustomerDataForm = _exports.getContactCustomerForm = _exports.getCustomerForm = _exports.containsConvergentEntries = _exports.containsFixEntries = _exports.isReservationButtonDisabled = _exports.getSimCardTypeForBundle = _exports.getReservationSimCardTypes = _exports.reservationData = _exports.invoiceIsPresentAndPaid = _exports.getDescriptionKey = _exports.shouldShowEmailWarning = _exports.isSelectedDeliveryMethodAvailable = _exports.getSelectedOrDefaultPaymentMethod = _exports.getSelectedOrDefaultDeliveryMethod = _exports.getAvailableDeliveryMethodCodes = _exports.getSelectedOrDefaultAgreementType = _exports.getSelectedOrDefaultMobileAgreementType = _exports.getDefaultDeliveryMethod = _exports.hasAgreementTypeChanged = _exports.isDigitalAgreementTypeWithoutPhysicalSimAndDevices = _exports.cartContainsAnyPhysicalSimCard = _exports.cartContainsReservableSim = _exports.cartContainsAnySim = _exports.cartContainsReservableItems = _exports.getModifyConsentsInCartQueue = _exports.getDocumentsConfirmationState = _exports.getCheckoutDataForDelivery = _exports.getCheckoutData = _exports.getInvoiceDataCheckoutData = _exports.isInvoiceDataValid = _exports.getInvoiceEmailForm = _exports.isContactEmailFilledAndValid = _exports.getInvoiceEmailErrors = _exports.getInvoiceEmailMapping = _exports.getInvoiceEmail = _exports.getCvDocumentsErrors = _exports.getCvDocumentsList = _exports.getCvDocumentsCheckoutData = _exports.getDocumentCustomerWorkPhoneNumber = _exports.getSelectedCvDocument = _exports.getCvDocumentsData = _exports.areConsentsWithBonusesAccepted = _exports.areBigAndZonkConsentsAccepted = _exports.getBigAndZonkConsents = _exports.getConsentsWithBonuses = _exports.getBonusesConsents = _exports.getConsentsProps = _exports.cartConsentsDataRequested = _exports.consentsDataInRequest = _exports.updatingAnyConsent = _exports.updatingConsents = _exports.isEarlierInstallation = _exports.isMainEarlierInstallationConsentPresent = _exports.areAdditionalEarlierInstallationConsentsAccepted = _exports.areMainEarlierInstallationConsentsAccepted = _exports.getConsentDocumentStatus = _exports.getConsentAcknowledgmentsReadWhileTalking = _exports.getConsentPhoneNumber = _exports.getConsentEmailAddress = _exports.getConsentsCheckoutData = _exports.getConsentsStatesData = _exports.getConsentsData = _exports.getCheckoutConsents = _exports.getDeliveryTotalCost = _exports.getFeeForSelectedPaymentMethod = _exports.getPaymentCheckoutData = _exports.isOnlinePaymentMethodSelected = _exports.getSelectedPaymentModeValueEligCode = _exports.getSelectedPaymentMethod = _exports.getAvailablePaymentMethods = _exports.getPayment = _exports.shouldSelectInstallation = _exports.getInstallationCheckoutData = _exports.getInstallationComment = _exports.getSelectedInstallationTimeSlot = _exports.getShouldRefreshSlots = _exports.getShowSelectedSlotError = _exports.getKwmSelectedSlotDescription = _exports.getKwmLoadingState = _exports.getAdditionalInstallationData = _exports.getInstallationPhoneContact = _exports.getInstallationAvailableTimeSlots = _exports.getInstallation = _exports.getFixBundleNos = _exports.getConvergentBundleNos = _exports.getFixEntries = _exports.getMyPosition = _exports.getDeliveryCheckoutData = _exports.getSelectedMethodForDocuments = _exports.getConvergentEntries = void 0;
    _exports.getPreparedSimRequestFragment = _exports.noERegulationsConsent = _exports.allFixDeliveryMethods = _exports.isFullPageLoader = _exports.getSalesChannelForSummary = _exports.getOrderFactoryForSummary = _exports.isIdVerificationRequiredAndSucceed = _exports.isIdVerificationRequiredAndNotVerified = _exports.isIdVerificationFailedOrEmpty = _exports.isIdVerificationRequired = _exports.getIdVerificationStatus = _exports.getIdVerificationSelectedBankId = _exports.getIdVerificationResult = _exports.getIdVerificationBanks = _exports.selectedDeliveryMethodIsPickupOnEmail = _exports.getFactoryCart = _exports.shouldShowModalAfterProcessChanged = _exports.getFixCartRefreshResult = _exports.getSectionForCourier = _exports.getExistingOrderOrCartValidation = _exports.getAgreementConfirmationModalVariant = _exports.getShowAgreementConfirmationModal = _exports.wasBigAndZonkAgreementConfirmationModalConfirmed = _exports.wasBonusAgreementConfirmationModalConfirmed = _exports.isRegisteredAgreementConfirmationComponent = _exports.getAllReservableCartEntries = _exports.getWarningModalDescriptionKey = _exports.isEmailWarningModal = _exports.getCourierDeliveryMethodModalState = _exports.isCourierDeliveryMethodModalMounted = _exports.isCourierDeliveryMethodModalVisible = _exports.isEarlierInstallationConsentNotAcceptedModalMounted = _exports.isEarlierInstallationConsentNotAcceptedModalIsAccepted = _exports.isEarlierInstallationConsentNotAcceptedModalVisible = _exports.getAssistModeConfirmationLeaveModalStateData = _exports.isLoadingAssistModeState = _exports.getFilterEnabled = _exports.getCurrentPage = _exports.getSelectedEmployee = _exports.isLoadingEmployeeList = _exports.getEmployeeListFilters = _exports.getEmployeeList = _exports.getAssistModeConfirmationModalStateData = _exports.getAssistModeModalStateData = _exports.getAssistModeStateData = _exports.getAssistModeStateFromStore = _exports.signableDocumentsPrinted = _exports.signableDocumentsPrintedPickup = _exports.getPickupSerialNumberErrors = _exports.getDownloadedDocumentCode = _exports.getPickupDocumentLinks = _exports.getPickupDocuments = _exports.getFirstPickupError = _exports.getPickupError = _exports.getOrderCanceled = _exports.getLastOrder = _exports.getNavigationLoading = _exports.getPickupReplanishmentRequiredErrors = _exports.getPaymentAndFiscalizationLoaded = _exports.getPaymentOverrideStatus = _exports.getGoodsOrderPaymentStatus = _exports.getReservationStatus = _exports.pickupSerialNumbers = _exports.posSimCardTypes = _exports.getPickup = _exports.isNextStepAvailable = _exports.isConsentsInAcknowledgmentState = _exports.isContactForCourierValid = _exports.isContactForDAPValid = _exports.isDuplicatedOrder = _exports.areDeliveryConditionsMet = _exports.isDeliveryPhoneContactCorrect = _exports.getDocumentsCodesToMerge = _exports.getDocumentCodesToMergeForBundle = _exports.allComplexDocumentsAreAccepted = _exports.isComplexAgreementLoadingForBundle = _exports.getAgreementIntroductionStatusForBundle = _exports.getShouldSignDocuments = _exports.getDocumentsLinks = _exports.getDocumentsItems = _exports.getDocumentsState = _exports.isPrintConsentDocumentsButtonEnabled = _exports.isWZRKConsentValid = _exports.getConsentTypeInPrintConsentsValidator = _exports.getDeliveryAndPaymentStep = _exports.getIsCartStep = _exports.getIsCustomerDataStep = _exports.getConsentDocumentsPrintState = _exports.getReturnDocumentLoader = _exports.getApuState = _exports.isMnpDataValid = _exports.isMnpDataFilled = _exports.isRetentionBonusesDataFilled = _exports.isCVPhoneFilled = _exports.isDocumentSelected = _exports.isNotNecessaryToCheckDocument = _exports.isCustomerDataValid = _exports.allConsentsValid = _exports.isDeliveryAddressValid = _exports.getDeliveryAddressForm = void 0;
    _exports.getConsentSections = _exports.simCardSerialNumberFilled = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    _DeliveryMethodFactoryEnum = babelHelpers.interopRequireDefault(_DeliveryMethodFactoryEnum);
    _DeliveryMethodModeEnum = babelHelpers.interopRequireDefault(_DeliveryMethodModeEnum);
    _CartEntryTypeEnum = babelHelpers.interopRequireDefault(_CartEntryTypeEnum);
    _DeliveryMethod = babelHelpers.interopRequireDefault(_DeliveryMethod);
    _AgreementType = babelHelpers.interopRequireDefault(_AgreementType);
    _EmailWarningDescriptionEnum = babelHelpers.interopRequireDefault(_EmailWarningDescriptionEnum);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    var getCheckoutState = function getCheckoutState(state) {
        return state["checkout"];
    };

    _exports.getCheckoutState = getCheckoutState;
    var getCheckoutConditions = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.conditions;
    });
    _exports.getCheckoutConditions = getCheckoutConditions;
    var getRegisteredCheckoutConditions = (0, _Reselect.createSelector)(getCheckoutConditions, function(checkout) {
        return checkout.registered;
    });
    _exports.getRegisteredCheckoutConditions = getRegisteredCheckoutConditions;

    var checkoutConditionIsRegistered = function checkoutConditionIsRegistered(condition) {
        return (0, _Reselect.createSelector)(getRegisteredCheckoutConditions, function(registeredConditions) {
            return registeredConditions[condition];
        });
    }; // CHECKOUT NAVIGATION


    _exports.checkoutConditionIsRegistered = checkoutConditionIsRegistered;
    var isDoingCheckoutStep = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.navigation.inProgress;
    }); // PROCESS TYPE

    _exports.isDoingCheckoutStep = isDoingCheckoutStep;
    var getSalesOfGoodsProcess = (0, _Reselect.createSelector)(_selectors.getBundlesProcessType, function(processType) {
        return processType.length !== 0 ? _countEntriesForProcess(processType, "SALE_OF_GOODS") === processType.length : false;
    });
    _exports.getSalesOfGoodsProcess = getSalesOfGoodsProcess;
    var getSalesOfAddonsProcess = (0, _Reselect.createSelector)(_selectors.getBundlesProcessType, function(processType) {
        return processType.length !== 0 ? _countEntriesForProcess(processType, "SALE_OF_ADDONS") === processType.length : false;
    });
    _exports.getSalesOfAddonsProcess = getSalesOfAddonsProcess;
    var getCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.errors;
    });
    _exports.getCheckoutErrors = getCheckoutErrors;
    var getFbbServices = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.fbbServices.fbbServices;
    });
    _exports.getFbbServices = getFbbServices;
    var getSelectedDesignationNumber = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.fbbServices.selectedDesignationNumber;
    });
    _exports.getSelectedDesignationNumber = getSelectedDesignationNumber;
    var getSelectedServiceInstanceId = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.fbbServices.selectedServiceInstanceId;
    });
    _exports.getSelectedServiceInstanceId = getSelectedServiceInstanceId;
    var getFrontValidationMsg = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.frontValidationMsg;
    });
    _exports.getFrontValidationMsg = getFrontValidationMsg;
    var getAuthCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.auth;
    });
    _exports.getAuthCheckoutErrors = getAuthCheckoutErrors;
    var isAuthNeeded = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.auth != null && errors.auth.length > 0;
    });
    _exports.isAuthNeeded = isAuthNeeded;
    var isCallbackNeeded = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.callback != null && errors.callback.length > 0;
    });
    _exports.isCallbackNeeded = isCallbackNeeded;
    var getCvCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.cv;
    });
    _exports.getCvCheckoutErrors = getCvCheckoutErrors;
    var getCvMagnumCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.cvMagnum;
    });
    _exports.getCvMagnumCheckoutErrors = getCvMagnumCheckoutErrors;
    var getManualCvCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.manual;
    });
    _exports.getManualCvCheckoutErrors = getManualCvCheckoutErrors;
    var getCVWithDepositErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.cvWithDeposit;
    });
    _exports.getCVWithDepositErrors = getCVWithDepositErrors;
    var getCheckoutErrorsArray = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.backendValidation.concat(errors.cim, errors.order, errors.data);
    });
    _exports.getCheckoutErrorsArray = getCheckoutErrorsArray;
    var getOutOfStockCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.stock;
    });
    _exports.getOutOfStockCheckoutErrors = getOutOfStockCheckoutErrors;
    var getNeedSearchCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.needsearch;
    });
    _exports.getNeedSearchCheckoutErrors = getNeedSearchCheckoutErrors;
    var getCimConsistentCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.cimconsenterror;
    });
    _exports.getCimConsistentCheckoutErrors = getCimConsistentCheckoutErrors;
    var getMnpNoEmailCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.noemailmnp;
    });
    _exports.getMnpNoEmailCheckoutErrors = getMnpNoEmailCheckoutErrors;
    var getCheckoutReservationErrorsArray = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.reservation;
    });
    _exports.getCheckoutReservationErrorsArray = getCheckoutReservationErrorsArray;
    var getFixClientExistsCheckoutErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.fixCustomerExists;
    });
    _exports.getFixClientExistsCheckoutErrors = getFixClientExistsCheckoutErrors;
    var getFixAppartmentNoValidation = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.fixAppartmentNoValidation;
    }); // CUSTOMER DATA

    _exports.getFixAppartmentNoValidation = getFixAppartmentNoValidation;
    var getCustomer = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.customer;
    });
    _exports.getCustomer = getCustomer;
    var getCustomerData = (0, _Reselect.createSelector)(getCustomer, function(customer) {
        return customer.data;
    });
    _exports.getCustomerData = getCustomerData;
    var isBusinessClient = (0, _Reselect.createSelector)(getCustomerData, function(data) {
        return data.isBusinessClient;
    });
    _exports.isBusinessClient = isBusinessClient;
    var isForeignerAvailable = (0, _Reselect.createSelector)(getCustomerData, function(data) {
        return data.foreignerAvailable;
    });
    _exports.isForeignerAvailable = isForeignerAvailable;
    var getCustomerContact = (0, _Reselect.createSelector)(getCustomer, function(customer) {
        return customer.contact;
    });
    _exports.getCustomerContact = getCustomerContact;
    var getCustomerNoEmail = (0, _Reselect.createSelector)(getCustomerContact, function(contact) {
        return contact.customerNoEmail;
    });
    _exports.getCustomerNoEmail = getCustomerNoEmail;
    var getCustomerEmailAddress = (0, _Reselect.createSelector)(getCustomerContact, function(contact) {
        return contact.emailAddress;
    });
    _exports.getCustomerEmailAddress = getCustomerEmailAddress;
    var isExistingCustomer = (0, _Reselect.createSelector)(getCustomer, function(customer) {
        return customer.existing;
    });
    _exports.isExistingCustomer = isExistingCustomer;
    var hasFixAddress = (0, _Reselect.createSelector)(getCustomer, function(customer) {
        return customer.hasFixAddress;
    });
    _exports.hasFixAddress = hasFixAddress;
    var isCustomerModified = (0, _Reselect.createSelector)(getCustomer, function(customer) {
        return customer.modified;
    });
    _exports.isCustomerModified = isCustomerModified;
    var isDisabledIdNumber = (0, _Reselect.createSelector)(getCustomerData, function(data) {
        return data.disabledIdNumber;
    });
    _exports.isDisabledIdNumber = isDisabledIdNumber;
    var getCustomerCompanyName = (0, _Reselect.createSelector)(getCustomerData, function(data) {
        return data.companyName;
    });
    _exports.getCustomerCompanyName = getCustomerCompanyName;
    var customerHasActiveContracts = (0, _Reselect.createSelector)(getCustomerData, function(data) {
        return !!data.hasActiveContracts;
    });
    _exports.customerHasActiveContracts = customerHasActiveContracts;
    var getLegalForm = (0, _Reselect.createSelector)(getCustomerData, function(data) {
        return data.legalForm;
    });
    _exports.getLegalForm = getLegalForm;
    var isForeignerCheckboxAvailable = (0, _Reselect.createSelector)([isBusinessClient, isForeignerAvailable], function(isBusinessClient, isForeignerAvailable) {
        return !isBusinessClient && isForeignerAvailable;
    }); // LEAD

    _exports.isForeignerCheckboxAvailable = isForeignerCheckboxAvailable;
    var getInvestment = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.investment;
    });
    _exports.getInvestment = getInvestment;
    var getInvestmentData = (0, _Reselect.createSelector)(getInvestment, function(investment) {
        return investment.lead;
    });
    _exports.getInvestmentData = getInvestmentData;
    var getInvestmentConsent = (0, _Reselect.createSelector)(getInvestment, function(investment) {
        return investment.consent;
    });
    _exports.getInvestmentConsent = getInvestmentConsent;
    var getInvestmentOffers = (0, _Reselect.createSelector)(getInvestment, function(investment) {
        return investment.offers.offers;
    }); // BILLING ACCOUNT

    _exports.getInvestmentOffers = getInvestmentOffers;
    var getBillingAccount = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.billingAccount;
    });
    _exports.getBillingAccount = getBillingAccount;
    var getBillingAccountFormData = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.formData;
    });
    _exports.getBillingAccountFormData = getBillingAccountFormData;
    var getBillingAccountsData = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.data;
    });
    _exports.getBillingAccountsData = getBillingAccountsData;
    var getBillingAccountFormDataErrors = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.formErrors;
    });
    _exports.getBillingAccountFormDataErrors = getBillingAccountFormDataErrors;
    var getSelectedBillingAccountMobile = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.selectedMobile;
    });
    _exports.getSelectedBillingAccountMobile = getSelectedBillingAccountMobile;
    var getSelectedBillingAccountFix = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.selectedFix;
    });
    _exports.getSelectedBillingAccountFix = getSelectedBillingAccountFix;
    var isCreateBillingAccountEnabled = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.create;
    });
    _exports.isCreateBillingAccountEnabled = isCreateBillingAccountEnabled;
    var isBillingAccountFormVisible = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.formVisible;
    });
    _exports.isBillingAccountFormVisible = isBillingAccountFormVisible;
    var getBillingAccountCheckoutData = (0, _Reselect.createSelector)([getBillingAccountFormData, isCreateBillingAccountEnabled], function(billingAccount, create) {
        return create ? billingAccount : null;
    });
    _exports.getBillingAccountCheckoutData = getBillingAccountCheckoutData;
    var isBillingComponentValid = (0, _Reselect.createSelector)([isCreateBillingAccountEnabled, getSelectedBillingAccountMobile, getSelectedBillingAccountFix], function(create, selectedMobile, selectedFix) {
        return create || selectedMobile.accountCode || selectedFix.accountCode;
    });
    _exports.isBillingComponentValid = isBillingComponentValid;
    var getSelectedAccountContracts = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.accountContracts;
    });
    _exports.getSelectedAccountContracts = getSelectedAccountContracts;
    var getShowContractButtonEnabled = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.isShowContractButtonEnabled;
    });
    _exports.getShowContractButtonEnabled = getShowContractButtonEnabled;
    var areBillingAccountContractsVisible = (0, _Reselect.createSelector)(getBillingAccount, function(billingAccount) {
        return billingAccount.accountContractsVisible;
    }); // REPRESENTATIVE DATA

    _exports.areBillingAccountContractsVisible = areBillingAccountContractsVisible;
    var getRepresentativeData = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout ? checkout.representativeData : null;
    });
    _exports.getRepresentativeData = getRepresentativeData;
    var getRepresentationMode = (0, _Reselect.createSelector)(getRepresentativeData, function(data) {
        return data ? data.representationMode : null;
    });
    _exports.getRepresentationMode = getRepresentationMode;
    var getGrantingDate = (0, _Reselect.createSelector)(getRepresentativeData, function(data) {
        return data ? data.grantingDate : null;
    });
    _exports.getGrantingDate = getGrantingDate;
    var getGrantingDateErrors = (0, _Reselect.createSelector)(getRepresentativeData, function(data) {
        return data ? data.grantingDateErrors : [];
    });
    _exports.getGrantingDateErrors = getGrantingDateErrors;
    var isGrantingDateFilled = (0, _Reselect.createSelector)([getGrantingDate, getRepresentationMode], function(date, mode) {
        return ["JR", "WR"].indexOf(mode) > -1 || !date[0];
    });
    var getRepresentatives = (0, _Reselect.createSelector)(getRepresentativeData, function(representativeData) {
        return representativeData ? representativeData.representatives : null;
    });
    _exports.getRepresentatives = getRepresentatives;
    var getRepresentativesData = (0, _Reselect.createSelector)(getRepresentatives, function(data) {
        return data ? data.data : [];
    });
    _exports.getRepresentativesData = getRepresentativesData;
    var getRepresentativesErrors = (0, _Reselect.createSelector)(getRepresentatives, function(data) {
        return data ? data.errors : [];
    }); //export const getRepresentativesErrors = createSelector(getRepresentativesErrors, errors => {}); //TODO

    _exports.getRepresentativesErrors = getRepresentativesErrors;
    var getRepresentativesFormData = (0, _Reselect.createSelector)([getRepresentativesData, getRepresentativesErrors], mergeDataAndErrors);
    _exports.getRepresentativesFormData = getRepresentativesFormData;
    var getRepresentativeFormData = (0, _Reselect.createSelector)([getRepresentativesFormData], function(formData) {
        return formData[0] || {};
    });
    _exports.getRepresentativeFormData = getRepresentativeFormData;
    var isRepresentativesFilled = (0, _Reselect.createSelector)(getRepresentativesData, function(datas) {
        return datas.map(_personalDataDataIsFilled).every(function(t) {
            return t == true;
        });
    });
    _exports.isRepresentativesFilled = isRepresentativesFilled;
    var isRepresentativesDataEmpty = (0, _Reselect.createSelector)(getRepresentativesData, function(datas) {
        return datas.map(_personalDataDataIsEmpty).every(function(t) {
            return t == true;
        });
    });
    _exports.isRepresentativesDataEmpty = isRepresentativesDataEmpty;
    var isRepresentativesValid = (0, _Reselect.createSelector)([isRepresentativesDataEmpty, isRepresentativesFilled, getRepresentativesErrors], function(isEmpty, isFilled, errors) {
        //return isEmpty || (isFilled && _hasNoErrors(errors));
        return isFilled && _hasNoErrors(errors);
    });
    _exports.isRepresentativesValid = isRepresentativesValid;
    var getSapReservationNumber = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.reservation.sapReservationNumber;
    });
    _exports.getSapReservationNumber = getSapReservationNumber;
    var getGrantors = (0, _Reselect.createSelector)(getRepresentativeData, function(representativeData) {
        return representativeData ? representativeData.grantors : null;
    });
    _exports.getGrantors = getGrantors;
    var getGrantorsData = (0, _Reselect.createSelector)(getGrantors, function(data) {
        return data ? data.data : null;
    });
    _exports.getGrantorsData = getGrantorsData;
    var getGrantorsErrors = (0, _Reselect.createSelector)(getGrantors, function(data) {
        return data ? data.errors : null;
    });
    _exports.getGrantorsErrors = getGrantorsErrors;
    var getGrantorsFormData = (0, _Reselect.createSelector)([getGrantorsData, getGrantorsErrors], mergeDataAndErrors);
    _exports.getGrantorsFormData = getGrantorsFormData;
    var isGrantorsDataEmpty = (0, _Reselect.createSelector)(getGrantorsData, function(datas) {
        return datas ? datas.map(_personalDataDataIsEmpty).every(function(t) {
            return t == true;
        }) : false;
    });
    _exports.isGrantorsDataEmpty = isGrantorsDataEmpty;
    var isGrantorsDataFilled = (0, _Reselect.createSelector)(getGrantorsData, function(datas) {
        return datas ? datas.map(_nameInPersonalDataIsFilled).every(function(t) {
            return t == true;
        }) : false;
    });
    var isGrantorsValid = (0, _Reselect.createSelector)([isGrantorsDataEmpty, isGrantorsDataFilled, getGrantorsErrors], function(isEmpty, isFilled, errors) {
        //return isEmpty || (isFilled && _hasNoErrors(errors));
        return isFilled && _hasNoErrors(errors);
    });
    _exports.isGrantorsValid = isGrantorsValid;
    var isRepresentativeDataFilled = (0, _Reselect.createSelector)([isRepresentativesFilled, isGrantorsDataFilled, isGrantingDateFilled], function(isRepresentativesFilled, isGrantorsDataFilled, isGrantingDateFilled) {
        return isRepresentativesFilled && isGrantorsDataFilled && isGrantingDateFilled;
    });
    _exports.isRepresentativeDataFilled = isRepresentativeDataFilled;
    var isRepresentativeDataValid = (0, _Reselect.createSelector)([isRepresentativesValid, isGrantorsValid, getGrantingDateErrors], function(isRepresentativesValid, isGrantorsValid, getGrantingDateErrors) {
        return isRepresentativesValid && isGrantorsValid && !getGrantingDateErrors[0];
    });
    _exports.isRepresentativeDataValid = isRepresentativeDataValid;
    var isFixRepresentativeDataValid = (0, _Reselect.createSelector)([isRepresentativesDataEmpty, isRepresentativesFilled, getRepresentativesErrors], function(isEmpty, isFilled, errors) {
        return isEmpty || isFilled && _hasNoErrors(errors);
    });
    _exports.isFixRepresentativeDataValid = isFixRepresentativeDataValid;
    var getRepresentativeDataForBackend = (0, _Reselect.createSelector)([getRepresentativesData, getGrantorsData, getRepresentationMode, getCustomerData, getGrantingDate], function(representatives, grantors, representationMethod, customerData, grantingDate) {
        if (customerData && customerData.legalForm) {
            return {
                representatives: representatives,
                grantors: grantors,
                representationMethod: representationMethod,
                grantingDate: grantingDate
            };
        } else {
            return null;
        }
    });
    _exports.getRepresentativeDataForBackend = getRepresentativeDataForBackend;

    var _isEmpty = function _isEmpty(value) {
        return !value || value === "" || value === null || typeof value === 'undefined';
    };

    var _personalDataDataIsEmpty = function _personalDataDataIsEmpty(data) {
        return _isEmpty(data.firstName) && _isEmpty(data.lastName) && _isEmpty(data.pesel) && _isEmpty(data.idNumber) && !data.foreigner && !data.foreigner && (_isEmpty(data.identificationEndDate) || _isEmpty(data.identificationRegisterDate)) && _isEmpty(data.country) && _isEmpty(data.identification) && _isEmpty(data.identificationValue);
    };

    var _personalDataDataIsFilled = function _personalDataDataIsFilled(data) {
        return !_isEmpty(data.firstName) && !_isEmpty(data.lastName) && !_isEmpty(data.pesel) && (!_isEmpty(data.idNumber) || data.foreigner) && (!data.foreigner || (!_isEmpty(data.identificationEndDate) || !_isEmpty(data.identificationRegisterDate)) && !_isEmpty(data.country) && !_isEmpty(data.identification) && !_isEmpty(data.identificationValue));
    };

    var _nameInPersonalDataIsFilled = function _nameInPersonalDataIsFilled(data) {
        return !_isEmpty(data.firstName) && !_isEmpty(data.lastName);
    };

    var _hasNoErrors = function _hasNoErrors(errors) {
        return errors.map(_isError).every(function(t) {
            return t == false;
        });
    }; // TELESALES CAMPAIGN


    var getTelesales = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.telesales;
    });
    _exports.getTelesales = getTelesales;
    var getDebtRepaymentState = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.debtRepayment;
    });
    _exports.getDebtRepaymentState = getDebtRepaymentState;
    var getDebtRepayment = (0, _Reselect.createSelector)(getDebtRepaymentState, function(debtRepayment) {
        return debtRepayment.data;
    });
    _exports.getDebtRepayment = getDebtRepayment;
    var shouldShowDebtRepaymetComponent = (0, _Reselect.createSelector)(getDebtRepaymentState, function(debtRepayment) {
        return debtRepayment.show;
    });
    _exports.shouldShowDebtRepaymetComponent = shouldShowDebtRepaymetComponent;
    var debtRepaymentFilled = (0, _Reselect.createSelector)(getDebtRepayment, function(debtRepayment) {
        return !_isEmpty(debtRepayment.receiptNumber) && !_isEmpty(debtRepayment.amount);
    }); // MNP DATA

    _exports.debtRepaymentFilled = debtRepaymentFilled;
    var getMnpData = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.mnpData.data;
    });
    _exports.getMnpData = getMnpData;
    var getMNPCheckoutData = (0, _Reselect.createSelector)([getMnpData], function(mnpData) {
        if (Object.keys(mnpData).length === 0) {
            return [];
        }

        return mnpData.filter(function(m) {
            return !_OnlineUtils.default.isMnpApplicationSecondStep(m.processType);
        }).map(function(m) {
            var fixed = _objectSpread({}, m);

            delete fixed.errors;
            delete fixed.identifier;
            return fixed;
        });
    });
    _exports.getMNPCheckoutData = getMNPCheckoutData;

    var getCitySuggestionsForBusinessMnpAddress = _main.selectors.createFilteredCitySuggestionsSelector(getMnpData);

    _exports.getCitySuggestionsForBusinessMnpAddress = getCitySuggestionsForBusinessMnpAddress;

    var getStreetSuggestionsBusinessMnpAddress = _main.selectors.createFilteredStreetSuggestionsSelector(getMnpData);

    _exports.getStreetSuggestionsBusinessMnpAddress = getStreetSuggestionsBusinessMnpAddress;

    var getBusinessMnpAddressValidation = _main.selectors.createAddressValidationSelector(getMnpData);

    _exports.getBusinessMnpAddressValidation = getBusinessMnpAddressValidation;
    var getCheckoutMnpProps = (0, _Reselect.createSelector)([getMnpData, getCitySuggestionsForBusinessMnpAddress, getStreetSuggestionsBusinessMnpAddress, getBusinessMnpAddressValidation, _selectors.getCartIsNet], function(mnpData, citySuggestions, streetSuggestions, validation, isB2B) {
        return {
            mnpData: mnpData,
            citySuggestions: citySuggestions,
            streetSuggestions: streetSuggestions,
            validation: validation,
            isB2B: isB2B
        };
    }); // Addresses

    _exports.getCheckoutMnpProps = getCheckoutMnpProps;
    var getAddresses = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.addresses;
    });
    _exports.getAddresses = getAddresses;
    var getMainAddress = (0, _Reselect.createSelector)(getAddresses, function(addresses) {
        return addresses.main;
    }); // ToDo replace usages with getAddressMain

    _exports.getMainAddress = getMainAddress;

    var createGetAddressSelector = function createGetAddressSelector(addressType) {
        return (0, _Reselect.createSelector)(getAddresses, function(addresses) {
            return addresses[addressType];
        });
    };

    _exports.createGetAddressSelector = createGetAddressSelector;
    var getAddressMain = createGetAddressSelector("main");
    _exports.getAddressMain = getAddressMain;
    var getAddressCorrespondence = createGetAddressSelector("correspondence");
    _exports.getAddressCorrespondence = getAddressCorrespondence;
    var getAddressDelivery = createGetAddressSelector("delivery");
    _exports.getAddressDelivery = getAddressDelivery;
    var getAddressMappings = (0, _Reselect.createSelector)(getAddresses, function(addresses) {
        return addresses.mappings;
    });
    _exports.getAddressMappings = getAddressMappings;

    var createGetAddressMappingSelector = function createGetAddressMappingSelector(addressType) {
        return (0, _Reselect.createSelector)(getAddressMappings, function(mappings) {
            return mappings[addressType] || addressType;
        });
    };

    _exports.createGetAddressMappingSelector = createGetAddressMappingSelector;

    var createGetMappedAddressSelector = function createGetMappedAddressSelector(addressType) {
        return (0, _Reselect.createSelector)([getAddresses, createGetAddressMappingSelector(addressType)], function(addresses, mapping) {
            return addresses[mapping];
        });
    };

    _exports.createGetMappedAddressSelector = createGetMappedAddressSelector;
    var getAddressCorrespondenceMapping = createGetAddressMappingSelector("correspondence");
    _exports.getAddressCorrespondenceMapping = getAddressCorrespondenceMapping;
    var getAddressDeliveryMapping = createGetAddressMappingSelector("delivery");
    _exports.getAddressDeliveryMapping = getAddressDeliveryMapping;
    var getMappedAddressMain = createGetMappedAddressSelector("main");
    _exports.getMappedAddressMain = getMappedAddressMain;
    var getMappedAddressCorrespondence = createGetMappedAddressSelector("correspondence");
    _exports.getMappedAddressCorrespondence = getMappedAddressCorrespondence;
    var getMappedAddressDelivery = createGetMappedAddressSelector("delivery"); // CBS suggestions

    _exports.getMappedAddressDelivery = getMappedAddressDelivery;

    var getCitySuggestionsForBillingAccountAddress = _main.selectors.createFilteredCitySuggestionsSelector(getBillingAccountFormData);

    _exports.getCitySuggestionsForBillingAccountAddress = getCitySuggestionsForBillingAccountAddress;

    var getStreetSuggestionsForBillingAccountAddress = _main.selectors.createFilteredStreetSuggestionsSelector(getBillingAccountFormData);

    _exports.getStreetSuggestionsForBillingAccountAddress = getStreetSuggestionsForBillingAccountAddress;

    var getBillingAccountAddressValidation = _main.selectors.createAddressValidationSelector(getBillingAccountFormData);

    _exports.getBillingAccountAddressValidation = getBillingAccountAddressValidation;

    var getCitySuggestionsForMainAddress = _main.selectors.createFilteredCitySuggestionsSelector(getAddressMain);

    _exports.getCitySuggestionsForMainAddress = getCitySuggestionsForMainAddress;

    var getStreetSuggestionsForMainAddress = _main.selectors.createFilteredStreetSuggestionsSelector(getAddressMain);

    _exports.getStreetSuggestionsForMainAddress = getStreetSuggestionsForMainAddress;

    var getMainAddressValidation = _main.selectors.createAddressValidationSelector(getAddressMain);

    _exports.getMainAddressValidation = getMainAddressValidation;

    var getCitySuggestionsForCorrespondenceAddress = _main.selectors.createFilteredCitySuggestionsSelector(getAddressCorrespondence);

    _exports.getCitySuggestionsForCorrespondenceAddress = getCitySuggestionsForCorrespondenceAddress;

    var getStreetSuggestionsForCorrespondenceAddress = _main.selectors.createFilteredStreetSuggestionsSelector(getAddressCorrespondence);

    _exports.getStreetSuggestionsForCorrespondenceAddress = getStreetSuggestionsForCorrespondenceAddress;

    var getCorrespondenceAddressValidation = _main.selectors.createAddressValidationSelector(getAddressCorrespondence);

    _exports.getCorrespondenceAddressValidation = getCorrespondenceAddressValidation;

    var getCitySuggestionsForDeliveryAddress = _main.selectors.createFilteredCitySuggestionsSelector(getAddressDelivery);

    _exports.getCitySuggestionsForDeliveryAddress = getCitySuggestionsForDeliveryAddress;

    var getStreetSuggestionsForDeliveryAddress = _main.selectors.createFilteredStreetSuggestionsSelector(getAddressDelivery);

    _exports.getStreetSuggestionsForDeliveryAddress = getStreetSuggestionsForDeliveryAddress;

    var getDeliveryAddressValidation = _main.selectors.createAddressValidationSelector(getAddressDelivery);

    _exports.getDeliveryAddressValidation = getDeliveryAddressValidation;

    var appendCbsValidationStateToErrors = function appendCbsValidationStateToErrors(errors, validation, messageLevel) {
        var genericErrors = JSON.parse(JSON.stringify(_objectSpread({}, errors)));

        if (validation) {
            Object.getOwnPropertyNames(validation).map(function(field) {
                if (typeof validation !== 'undefined' && validation[field] === false) {
                    genericErrors[field] && genericErrors[field] instanceof Array && genericErrors[field].length === 0 && genericErrors[field].push({
                        level: messageLevel,
                        message: 'Pole nie jest wypełnione poprawnie.'
                    });
                }
            });
        }

        return genericErrors;
    };

    var getCustomerErrors = (0, _Reselect.createSelector)(getCustomer, function(customer) {
        return customer.errors;
    });
    _exports.getCustomerErrors = getCustomerErrors;
    var getCustomerDataErrors = (0, _Reselect.createSelector)(getCustomerErrors, function(errors) {
        return errors.data;
    });
    _exports.getCustomerDataErrors = getCustomerDataErrors;
    var getCustomerMainAddressErrors = (0, _Reselect.createSelector)([getCustomerErrors, getMainAddressValidation], function(errors, validation) {
        return appendCbsValidationStateToErrors(errors.mainAddress, validation, 'warn');
    });
    _exports.getCustomerMainAddressErrors = getCustomerMainAddressErrors;
    var getCustomerCorrespondenceAddressErrors = (0, _Reselect.createSelector)([getCustomerErrors, getCorrespondenceAddressValidation], function(errors, validation) {
        return appendCbsValidationStateToErrors(errors.correspondenceAddress, validation, 'error');
    });
    _exports.getCustomerCorrespondenceAddressErrors = getCustomerCorrespondenceAddressErrors;
    var getDeliveryAddressErrors = (0, _Reselect.createSelector)([getCustomerErrors, getDeliveryAddressValidation], function(errors, validation) {
        return appendCbsValidationStateToErrors(errors.deliveryAddress, validation, 'error');
    });
    _exports.getDeliveryAddressErrors = getDeliveryAddressErrors;
    var getCustomerContactErrors = (0, _Reselect.createSelector)(getCustomerErrors, function(errors) {
        return errors.contact;
    });
    _exports.getCustomerContactErrors = getCustomerContactErrors;
    var getCustomerAddressErrors = (0, _Reselect.createSelector)(getCustomerErrors, function(errors) {
        return errors.mainAddress;
    });
    _exports.getCustomerAddressErrors = getCustomerAddressErrors;
    var getCustomerCheckoutData = (0, _Reselect.createSelector)([getCustomerData, isExistingCustomer, getCustomerContact, isCustomerModified, getMappedAddressMain, getMappedAddressCorrespondence], function(data, existing, contact, modified, mainAddress, correspondenceAddress) {
        return _objectSpread({}, data, {
            existing: existing
        }, contact, {
            modified: modified,
            mainAddress: mainAddress,
            correspondenceAddress: correspondenceAddress
        });
    }); // BILLING ACCOUNT

    _exports.getCustomerCheckoutData = getCustomerCheckoutData;
    var getBillingAccountFormDataWithCbsErrors = (0, _Reselect.createSelector)([getBillingAccountFormDataErrors, getBillingAccountAddressValidation], function(errors, validation) {
        return appendCbsValidationStateToErrors(errors, validation, 'warn');
    });
    _exports.getBillingAccountFormDataWithCbsErrors = getBillingAccountFormDataWithCbsErrors;
    var getBillingAccountFormValidation = (0, _Reselect.createSelector)([getBillingAccountAddressValidation, getBillingAccountFormDataErrors], function(addressValidation, errors) {
        return _objectSpread({}, addressValidation, {
            emailAddress: errors.emailAddress && errors.emailAddress.length === 0
        });
    });
    _exports.getBillingAccountFormValidation = getBillingAccountFormValidation;
    var getBillingAccountComponentData = (0, _Reselect.createSelector)([getBillingAccountsData, getBillingAccountFormData, getBillingAccountFormDataWithCbsErrors, isBillingAccountFormVisible, getCitySuggestionsForBillingAccountAddress, getStreetSuggestionsForBillingAccountAddress, getBillingAccountFormValidation, isCreateBillingAccountEnabled, getSelectedBillingAccountMobile, getSelectedBillingAccountFix, getSelectedAccountContracts, getShowContractButtonEnabled, areBillingAccountContractsVisible], function(data, formData, errors, visible, citySuggestions, streetSuggestions, validation, createEnabled, selectedMobile, selectedFix, accountContracts, isShowContractButtonEnabled, accountContractsVisible) {
        return {
            data: data,
            formData: formData,
            errors: errors,
            visible: visible,
            citySuggestions: citySuggestions,
            streetSuggestions: streetSuggestions,
            validation: validation,
            createEnabled: createEnabled,
            selectedMobile: selectedMobile,
            selectedFix: selectedFix,
            accountContracts: accountContracts,
            isShowContractButtonEnabled: isShowContractButtonEnabled,
            accountContractsVisible: accountContractsVisible
        };
    }); // data state

    _exports.getBillingAccountComponentData = getBillingAccountComponentData;
    var getMetadata = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.metadata;
    });
    _exports.getMetadata = getMetadata;
    var customerDataRequested = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer.requested;
    });
    _exports.customerDataRequested = customerDataRequested;
    var customerDataFinished = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer.finished;
    });
    _exports.customerDataFinished = customerDataFinished;
    var paymentDataFinished = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.payment.finished;
    });
    _exports.paymentDataFinished = paymentDataFinished;
    var representativeDataRequested = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.representative.requested;
    });
    _exports.representativeDataRequested = representativeDataRequested;
    var billingAccountDataRequested = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.billingAccount.requested;
    });
    _exports.billingAccountDataRequested = billingAccountDataRequested;
    var deliveryDataRequested = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.delivery.requested;
    });
    _exports.deliveryDataRequested = deliveryDataRequested;
    var deliveryDataRequestFinished = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.delivery.finished;
    });
    _exports.deliveryDataRequestFinished = deliveryDataRequestFinished;
    var cartMnpDataRequested = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.cartMnpData.requested;
    });
    _exports.cartMnpDataRequested = cartMnpDataRequested;
    var customerDataLoading = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer.loading;
    });
    _exports.customerDataLoading = customerDataLoading;
    var installationAvailableTimeSlotsRequested = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.installation.requested;
    });
    _exports.installationAvailableTimeSlotsRequested = installationAvailableTimeSlotsRequested;
    var isManualVerificationModalVisible = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.manualVerificationModalVisible;
    });
    _exports.isManualVerificationModalVisible = isManualVerificationModalVisible;
    var isSmsVerified = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer && metadata.customer.isSmsVerified;
    });
    _exports.isSmsVerified = isSmsVerified;
    var bpgRequested = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer && metadata.customer.bpgRequested;
    });
    _exports.bpgRequested = bpgRequested;
    var getBusinessDataSource = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer && metadata.customer.businessDataSource;
    });
    _exports.getBusinessDataSource = getBusinessDataSource;
    var isOnlineCookie = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer && metadata.customer.isOnlineCookie;
    });
    _exports.isOnlineCookie = isOnlineCookie;
    var isWWW = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer && metadata.customer.isWWW;
    });
    _exports.isWWW = isWWW;
    var areAllDocumentsSaving = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.allDocuments && metadata.allDocuments.loading;
    });
    _exports.areAllDocumentsSaving = areAllDocumentsSaving;
    var areAllDocumentsSaved = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.allDocuments && metadata.allDocuments.finished;
    });
    _exports.areAllDocumentsSaved = areAllDocumentsSaved;
    var isCustomerDataReadOnly = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.customer.readOnly;
    });
    _exports.isCustomerDataReadOnly = isCustomerDataReadOnly;
    var getCurrentStepId = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.currentStepId;
    }); // delivery

    _exports.getCurrentStepId = getCurrentStepId;
    var getDelivery = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.delivery;
    });
    _exports.getDelivery = getDelivery;
    var isDigitalAgreementDefault = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.isDigitalAgreementDefault;
    });
    _exports.isDigitalAgreementDefault = isDigitalAgreementDefault;
    var getCartDelivery = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.cartDelivery;
    });
    _exports.getCartDelivery = getCartDelivery;
    var getCartAgreementType = (0, _Reselect.createSelector)(getCartDelivery, function(cartDelivery) {
        return cartDelivery.documentsDeliveryModeName;
    });
    _exports.getCartAgreementType = getCartAgreementType;
    var getCartDeliveryMethod = (0, _Reselect.createSelector)(getCartDelivery, function(cartDelivery) {
        return cartDelivery.deliveryMethod;
    });
    _exports.getCartDeliveryMethod = getCartDeliveryMethod;
    var getCartDeliveryMethodForDevices = (0, _Reselect.createSelector)(getCartDelivery, function(cartDelivery) {
        return cartDelivery.deliveryMethodForDevices;
    });
    _exports.getCartDeliveryMethodForDevices = getCartDeliveryMethodForDevices;
    var getAgreementType = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.agreementType;
    });
    _exports.getAgreementType = getAgreementType;
    var getDeliveryMobile = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return _lodash.default.find(delivery.methods, function(item) {
            return item.factory === _DeliveryMethodFactoryEnum.default.MOBILE;
        });
    });
    _exports.getDeliveryMobile = getDeliveryMobile;
    var getDeliveryFix = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return _lodash.default.filter(delivery.methods, function(item) {
            return item.factory === _DeliveryMethodFactoryEnum.default.FIX;
        });
    });
    _exports.getDeliveryFix = getDeliveryFix;
    var getDeliveryFixDocuments = (0, _Reselect.createSelector)(getDeliveryFix, function(delivery) {
        return _lodash.default.find(delivery, function(item) {
            return item.deliveryModeType === _DeliveryMethodModeEnum.default.DOCUMENTS_PACKAGE;
        });
    });
    _exports.getDeliveryFixDocuments = getDeliveryFixDocuments;
    var getDeliveryFixDevices = (0, _Reselect.createSelector)(getDeliveryFix, function(delivery) {
        return _lodash.default.find(delivery, function(item) {
            return item.deliveryModeType === _DeliveryMethodModeEnum.default.DEVICES_PACKAGE;
        });
    });
    _exports.getDeliveryFixDevices = getDeliveryFixDevices;
    var getDeliveryBundles = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods[0] ? delivery.methods[0].bundleNumbers : [];
    });
    _exports.getDeliveryBundles = getDeliveryBundles;
    var getDeliveryMethodsRaw = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        //TODO: rozwiązanie mobile powinno być zastosowane również dla FIX - nie jest per factory
        if (delivery.methods.length > 1 && delivery.methods.every(function(method) {
                return method.factory === "MOBILE";
            })) {
            return mergeMobileDeliveryMethods(delivery);
        }

        return delivery.methods[0] ? delivery.methods[0].deliveryMethods : [];
    });
    _exports.getDeliveryMethodsRaw = getDeliveryMethodsRaw;
    var isPickupOnEmailAvailable = (0, _Reselect.createSelector)(getDeliveryMethodsRaw, function(deliveryMethods) {
        return deliveryMethods.map(function(deliveryMethod) {
            return deliveryMethod.id;
        }).some(function(deliveryMethodCode) {
            return deliveryMethodCode === _DeliveryMethod.default.PICKUP_ON_EMAIL;
        });
    });
    _exports.isPickupOnEmailAvailable = isPickupOnEmailAvailable;
    var getDeliveryMethods = (0, _Reselect.createSelector)([getDelivery, getAgreementType], function(delivery, agreementType) {
        // debugger;
        if (delivery.methods.length > 0 && delivery.methods.every(function(method) {
                return method.factory === "MOBILE";
            })) {
            if (delivery.methods.length > 1) {
                return mergeMobileDeliveryMethods(delivery);
            }

            return delivery.methods[0] ? delivery.methods[0].deliveryMethods : [];
        }

        var deliveryMethods = delivery.methods[0] ? delivery.methods[0].deliveryMethods : [];
        return deliveryMethods.filter(function(method) {
            return !agreementType || (_AgreementType.default.DIGITAL === agreementType ? _DeliveryMethod.default.isDigital(method.id) : _DeliveryMethod.default.isPaper(method.id));
        });
    });
    _exports.getDeliveryMethods = getDeliveryMethods;
    var isAgreementTypeRequired = (0, _Reselect.createSelector)(getDeliveryMethodsRaw, function(deliveryMethods) {
        return deliveryMethods && deliveryMethods.map(function(m) {
            return m.id;
        }).some(_DeliveryMethod.default.isDigital) && deliveryMethods.map(function(m) {
            return m.id;
        }).some(_DeliveryMethod.default.isPaper);
    });
    _exports.isAgreementTypeRequired = isAgreementTypeRequired;
    var getDeliveryMethodsFetchDone = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.deliveryMethodsFetchDone;
    });
    _exports.getDeliveryMethodsFetchDone = getDeliveryMethodsFetchDone;
    var getDeliveryEmailAddress = (0, _Reselect.createSelector)([getDelivery, getCustomerContact], function(delivery, customerContact) {
        return delivery.emailAddress === null ? customerContact.emailAddress : delivery.emailAddress || "";
    });
    _exports.getDeliveryEmailAddress = getDeliveryEmailAddress;
    var getDeliveryEmailAddressErrors = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.emailAddressErrors || [];
    });
    _exports.getDeliveryEmailAddressErrors = getDeliveryEmailAddressErrors;
    var getEmailConfirmationModalState = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return !!delivery.emailConfirmationModalState;
    });
    _exports.getEmailConfirmationModalState = getEmailConfirmationModalState;
    var getEmailConfirmationModalAccepted = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return !!delivery.emailConfirmationModalAccepted;
    });
    _exports.getEmailConfirmationModalAccepted = getEmailConfirmationModalAccepted;
    var deliveryAndCustomerDataLoaded = (0, _Reselect.createSelector)([deliveryDataRequestFinished, getDeliveryMethodsFetchDone, customerDataFinished, paymentDataFinished], function(cartDeliveryLoaded, deliveryMethodsLoaded, customerLoaded, paymentDataLoaded) {
        return cartDeliveryLoaded && deliveryMethodsLoaded && customerLoaded && paymentDataLoaded;
    });
    _exports.deliveryAndCustomerDataLoaded = deliveryAndCustomerDataLoaded;

    function mergeMobileDeliveryMethods(delivery) {
        var merged = [];
        var temp = [];
        var finalMerged = [];
        var deliveryMethodWithMinPrice;
        delivery.methods.forEach(function(method) {
            method.deliveryMethods.forEach(function(deliveryMethod) {
                return merged.push(deliveryMethod);
            });
        });
        var maxCountDeliveryMethods = Math.max.apply(Math, delivery.methods.map(function(o) {
            return o.deliveryMethods.length;
        }));

        for (var j = 0; j <= maxCountDeliveryMethods; j++) {
            for (var i = merged.length - 1; i >= 0; i--) {
                if (merged[0].id === merged[i].id) {
                    temp.push(merged[i]);
                    merged.splice(i, 1);
                }
            }

            if (temp.length === delivery.methods.length) {
                deliveryMethodWithMinPrice = findMinPriceDeliveryMethod(temp);
                finalMerged.push(deliveryMethodWithMinPrice);
            }

            temp = [];
            deliveryMethodWithMinPrice = null;
        }

        return finalMerged;
    }

    function findMinPriceDeliveryMethod(arr) {
        for (var i = arr.length - 1; i >= 1; i--) {
            if (parseFloat(arr[i].price) > parseFloat(arr[i - 1].price)) {
                arr.splice(i, 1);
            } else {
                arr.splice(i - 1, 1);
            }
        }

        return arr[0];
    }

    var getDeliveryModeTypeDocuments = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods[0] ? delivery.methods[0].deliveryModeType : '';
    });
    _exports.getDeliveryModeTypeDocuments = getDeliveryModeTypeDocuments;
    var getDeliveryModeTypeDevices = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods[1] ? delivery.methods[1].deliveryModeType : '';
    });
    _exports.getDeliveryModeTypeDevices = getDeliveryModeTypeDevices;
    var getDeliveryMethodsForDevices = (0, _Reselect.createSelector)([getDelivery, getDeliveryModeTypeDevices], function(delivery, modeTypeDevices) {
        return modeTypeDevices === _DeliveryMethodModeEnum.default.DEVICES_PACKAGE && delivery.methods[1] ? delivery.methods[1].deliveryMethods : [];
    });
    _exports.getDeliveryMethodsForDevices = getDeliveryMethodsForDevices;
    var getIsDeliveryModesEqual = (0, _Reselect.createSelector)(getDeliveryFix, function(deliveryMethods) {
        return deliveryMethods[0] ? deliveryMethods[0].isDeliveryModesEqual : false;
    });
    _exports.getIsDeliveryModesEqual = getIsDeliveryModesEqual;
    var getRentDevices = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods[1] ? delivery.methods[1].rentDevices : '';
    });
    _exports.getRentDevices = getRentDevices;
    var getConvRentDevices = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods[0] ? delivery.methods[0].rentDevices : '';
    });
    _exports.getConvRentDevices = getConvRentDevices;
    var getSalesDevices = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods[1] ? delivery.methods[1].salesDevices : '';
    });
    _exports.getSalesDevices = getSalesDevices;
    var getDeliveryContents = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods[0] ? delivery.methods.map(function(entry) {
            return entry.contents;
        }).reduce(function(a, b) {
            if (a && b) return a.concat(", ").concat(b);

            if (a) {
                return a;
            }

            if (b) {
                return b;
            }
        }) : '';
    });
    _exports.getDeliveryContents = getDeliveryContents;
    var getDeliveryAllProductContents = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods[0] ? delivery.methods.map(function(entry) {
            return entry.salesOfGoodsContents;
        }).reduce(function(a, b) {
            return a && b && a.concat(b) || b;
        }) : '';
    });
    _exports.getDeliveryAllProductContents = getDeliveryAllProductContents;
    var getSelectedDeliveryMethod = (0, _Reselect.createSelector)([getDelivery, getDeliveryMethods], function(delivery, deliveryMethods) {
        return deliveryMethods && deliveryMethods.find(function(deliveryMethod) {
            return deliveryMethod.id === delivery.selectedMethod;
        }) || "";
    });
    _exports.getSelectedDeliveryMethod = getSelectedDeliveryMethod;
    var getSelectedDeliveryMethodCode = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.selectedMethod;
    });
    _exports.getSelectedDeliveryMethodCode = getSelectedDeliveryMethodCode;
    var getSelectedMethodForDevices = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.selectedMethodForDevices;
    });
    _exports.getSelectedMethodForDevices = getSelectedMethodForDevices;
    var getSelectedDeliveryMethods = (0, _Reselect.createSelector)([getDelivery, getIsDeliveryModesEqual], function(delivery, isFixEqual) {
        var mobile = _lodash.default.find(delivery.methods, function(item) {
            return item.factory === _DeliveryMethodFactoryEnum.default.MOBILE;
        });

        var fixes = _lodash.default.filter(delivery.methods, function(item) {
            return item.factory === _DeliveryMethodFactoryEnum.default.FIX;
        });

        var fixDocuments = _lodash.default.find(fixes, function(item) {
            return item.deliveryModeType === _DeliveryMethodModeEnum.default.DOCUMENTS_PACKAGE;
        });

        var fixDevices = _lodash.default.find(fixes, function(item) {
            return item.deliveryModeType === _DeliveryMethodModeEnum.default.DEVICES_PACKAGE;
        });

        var result = {
            mobile: mobile ? mobile.deliveryMethods.length > 0 ? mobile.deliveryMethods.find(function(deliveryMethod) {
                return deliveryMethod.id === delivery.selectedDeliveryMethods.mobile;
            }) || '' : fixDevices && fixDevices.deliveryMethods.find(function(deliveryMethod) {
                return deliveryMethod.id === delivery.selectedDeliveryMethods.mobile;
            }) || '' : null,
            fixDocuments: fixDocuments ? fixDocuments.deliveryMethods.length > 0 ? fixDocuments.deliveryMethods.find(function(deliveryMethod) {
                return deliveryMethod.id === delivery.selectedDeliveryMethods.fixDocuments;
            }) || '' : '' : null,
            fixDevices: fixDevices ? fixDevices.deliveryMethods.length > 0 ? fixDevices.deliveryMethods.find(function(deliveryMethod) {
                return deliveryMethod.id === delivery.selectedDeliveryMethods.fixDevices;
            }) || '' : '' : null
        };

        if (!result.fixDevices && isFixEqual) {
            result.fixDevices = result.fixDocuments;
        }

        return result;
    });
    _exports.getSelectedDeliveryMethods = getSelectedDeliveryMethods;
    var getSelectedDeliveryMethodForDevices = (0, _Reselect.createSelector)([getDelivery, getDeliveryMethodsForDevices], function(delivery, deliveryMethods) {
        return deliveryMethods.find(function(deliveryMethod) {
            return deliveryMethod.id === delivery.selectedMethodForDevices;
        }) || "";
    });
    _exports.getSelectedDeliveryMethodForDevices = getSelectedDeliveryMethodForDevices;
    var getSelectedDeliveryMethodForDevicesForOrder = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.selectedMethodForDevices;
    });
    _exports.getSelectedDeliveryMethodForDevicesForOrder = getSelectedDeliveryMethodForDevicesForOrder;
    var getDeliveryPhoneContact = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.phoneContact || "";
    });
    _exports.getDeliveryPhoneContact = getDeliveryPhoneContact;
    var getSelectedDeliveryMethodId = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return !!delivery && delivery.selectedMethod;
    });
    _exports.getSelectedDeliveryMethodId = getSelectedDeliveryMethodId;
    var getCourierAdditionalInfo = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.courierMessage;
    });
    _exports.getCourierAdditionalInfo = getCourierAdditionalInfo;
    var getPickupPointsOfSale = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.pointsOfSalePickup;
    });
    _exports.getPickupPointsOfSale = getPickupPointsOfSale;
    var getPickupPointOfSaleCities = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.pointOfSalePickupCities;
    });
    _exports.getPickupPointOfSaleCities = getPickupPointOfSaleCities;
    var getSelectedPointOfSaleId = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.selectedPointOfSale;
    });
    _exports.getSelectedPointOfSaleId = getSelectedPointOfSaleId;
    var getParcelLocker = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.parcelLockerList;
    });
    _exports.getParcelLocker = getParcelLocker;
    var getParcelLockerList = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.parcelLockerCityList;
    });
    _exports.getParcelLockerList = getParcelLockerList;
    var getParcelLockerCity = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.pointOfSaleCity;
    });
    _exports.getParcelLockerCity = getParcelLockerCity;
    var getSelectedPointOfSaleCity = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.pointOfSaleCity;
    });
    _exports.getSelectedPointOfSaleCity = getSelectedPointOfSaleCity;
    var getLastPos = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.lastPos;
    });
    _exports.getLastPos = getLastPos;
    var isPickupDeliveryValid = (0, _Reselect.createSelector)([getSelectedDeliveryMethod, getSelectedPointOfSaleId], function(selectedMethod, posId) {
        return selectedMethod.id === 'pickup_from_shelf' ? !!posId : true;
    });
    _exports.isPickupDeliveryValid = isPickupDeliveryValid;
    var getConvergentEntries = (0, _Reselect.createSelector)(_selectors.getMiniCart, function(miniCart) {
        return miniCart.entries ? miniCart.entries.filter(function(cartEntry) {
            return cartEntry.entryType === _CartEntryTypeEnum.default.CONVERGENT;
        }) : [];
    });
    _exports.getConvergentEntries = getConvergentEntries;
    var getSelectedMethodForDocuments = (0, _Reselect.createSelector)([getDelivery, getSelectedDeliveryMethods, getConvergentEntries], function(delivery, selectedDeliveryMethods, convergentEntries) {
        return convergentEntries.length === 0 ? delivery.selectedMethod : selectedDeliveryMethods && getDocumentsDeliveryForConvergent(selectedDeliveryMethods) || delivery.selectedMethod;
    });
    _exports.getSelectedMethodForDocuments = getSelectedMethodForDocuments;

    function getDocumentsDeliveryForConvergent(selectedDeliveryMethods) {
        if ((0, _deliveryMethodHelpers.isDeliveryMethodRequired)(selectedDeliveryMethods.fixDocuments)) {
            return selectedDeliveryMethods.fixDocuments && selectedDeliveryMethods.fixDocuments.id;
        } else {
            return selectedDeliveryMethods.mobile && selectedDeliveryMethods.mobile.id;
        }
    }

    var getDeliveryCheckoutData = (0, _Reselect.createSelector)([getDeliveryBundles, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevicesForOrder, getDelivery, getConvergentEntries, getDeliveryFix, getCourierAdditionalInfo, getMappedAddressDelivery, getAddressDeliveryMapping, getDeliveryPhoneContact, getDeliveryEmailAddress, getIsDeliveryModesEqual, getSelectedPointOfSaleId, getAgreementType], function(deliveryBundles, method, methodForDevicesId, delivery, convergentEntries, deliveryFix, courierMessage, deliveryAddress, mappedDelivery, phoneContact, emailAddress, isDeliveryModesEqual, pos, documentDeliveryMethod) {
        var isNewAddress = mappedDelivery === 'delivery';
        var methodId = method ? method.id : "";
        var methodDevicesId = isDeliveryModesEqual ? methodId : methodForDevicesId;
        var bundles = [];

        if (convergentEntries.length > 0) {
            var mobileBundles = [];
            delivery.methods.filter(function(method) {
                return method.factory === "MOBILE";
            }).forEach(function(method) {
                return method.bundleNumbers.forEach(function(bundle) {
                    return mobileBundles.push(bundle);
                });
            });
            var distinctMobileBundles = babelHelpers.toConsumableArray(new Set(mobileBundles));

            if (distinctMobileBundles.length > 0) {
                distinctMobileBundles.forEach(function(bundle) {
                    bundles.push({
                        phoneContact: phoneContact,
                        courierAdditionalInfo: courierMessage,
                        deliveryDataForm: deliveryAddress,
                        bundleNo: bundle,
                        deliveryMethod: delivery.selectedDeliveryMethods.mobile,
                        pointOfServiceName: pos,
                        newAddress: isNewAddress,
                        documentsDeliveryModeName: documentDeliveryMethod,
                        emailAddress: emailAddress
                    });
                });
            }

            if (deliveryFix && deliveryFix.length > 0) {
                bundles.push({
                    phoneContact: phoneContact,
                    courierAdditionalInfo: courierMessage,
                    deliveryDataForm: deliveryAddress,
                    bundleNo: deliveryFix[0].bundleNumbers[0],
                    deliveryMethod: delivery.selectedDeliveryMethods.fixDocuments,
                    deliveryMethodForDevices: delivery.selectedDeliveryMethods.fixDevices,
                    pointOfServiceName: '',
                    newAddress: isNewAddress,
                    documentsDeliveryModeName: documentDeliveryMethod,
                    emailAddress: emailAddress
                });
            }

            return bundles;
        } else {
            return deliveryBundles.map(function(b) {
                return {
                    phoneContact: phoneContact,
                    courierAdditionalInfo: courierMessage,
                    deliveryDataForm: deliveryAddress,
                    bundleNo: b,
                    deliveryMethod: methodId,
                    deliveryMethodForDevices: methodDevicesId,
                    pointOfServiceName: pos,
                    newAddress: isNewAddress,
                    documentsDeliveryModeName: documentDeliveryMethod,
                    emailAddress: emailAddress
                };
            });
        }
    });
    _exports.getDeliveryCheckoutData = getDeliveryCheckoutData;
    var getMyPosition = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        var myPosition = delivery.pointsOfSale.filter(function(pos) {
            return pos.category === 'myPosition';
        });
        return myPosition.shift();
    }); //MINICART - BUNDLENO

    _exports.getMyPosition = getMyPosition;

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    var getFixEntries = (0, _Reselect.createSelector)(_selectors.getMiniCart, function(miniCart) {
        return miniCart.entries ? miniCart.entries.filter(function(cartEntry) {
            return cartEntry.entryType === _CartEntryTypeEnum.default.FIX;
        }) : [];
    });
    _exports.getFixEntries = getFixEntries;
    var getConvergentBundleNos = (0, _Reselect.createSelector)(getConvergentEntries, function(convergentEntries) {
        var convergentSubEntries = convergentEntries.map(function(cartEntry) {
            return cartEntry.entries;
        });
        var allBundleNos = [].concat.apply([], convergentSubEntries).map(function(cartEntry) {
            return cartEntry.bundleNo;
        });
        return allBundleNos.filter(onlyUnique);
    });
    _exports.getConvergentBundleNos = getConvergentBundleNos;
    var getFixBundleNos = (0, _Reselect.createSelector)(_selectors.allCartEntries, function(cartEntries) {
        return cartEntries.filter(function(cartEntry) {
            return cartEntry.entryType === _CartEntryTypeEnum.default.FIX;
        }).map(function(cartEntry) {
            return cartEntry.bundleNo;
        }).filter(onlyUnique);
    }); //INSTALLATION

    _exports.getFixBundleNos = getFixBundleNos;
    var getInstallation = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.installation;
    });
    _exports.getInstallation = getInstallation;
    var getInstallationAvailableTimeSlots = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        return installation.availableTimeSlots;
    });
    _exports.getInstallationAvailableTimeSlots = getInstallationAvailableTimeSlots;
    var getInstallationPhoneContact = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        return installation.phoneContactDAP || "";
    });
    _exports.getInstallationPhoneContact = getInstallationPhoneContact;
    var getAdditionalInstallationData = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        var additionalData = installation.availableTimeSlots.additionalData;

        if (!!additionalData) {
            return _objectSpread({}, additionalData, {
                installationAddress: _objectSpread({}, additionalData.installationAddress, {
                    streetName: additionalData.installationAddress.line1,
                    streetNumber: additionalData.installationAddress.line2
                })
            });
        }

        return additionalData;
    });
    _exports.getAdditionalInstallationData = getAdditionalInstallationData;
    var getKwmLoadingState = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        return installation.loading;
    });
    _exports.getKwmLoadingState = getKwmLoadingState;
    var getKwmSelectedSlotDescription = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        return installation.selectedSlotDisplayText;
    });
    _exports.getKwmSelectedSlotDescription = getKwmSelectedSlotDescription;
    var getShowSelectedSlotError = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        return installation.showSelectedSlotError;
    });
    _exports.getShowSelectedSlotError = getShowSelectedSlotError;
    var getShouldRefreshSlots = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        return installation.shouldRefresh;
    });
    _exports.getShouldRefreshSlots = getShouldRefreshSlots;
    var getSelectedInstallationTimeSlot = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        return installation.selectedInstallationTimeSlot;
    });
    _exports.getSelectedInstallationTimeSlot = getSelectedInstallationTimeSlot;
    var getInstallationComment = (0, _Reselect.createSelector)(getInstallation, function(installation) {
        return installation.comment;
    });
    _exports.getInstallationComment = getInstallationComment;
    var getInstallationCheckoutData = (0, _Reselect.createSelector)([getSelectedInstallationTimeSlot, getInstallationComment, getFixBundleNos, getInstallationPhoneContact], function(installationTimeSlot, installationComment, fixBundleNos, phoneNumber) {
        if (!installationTimeSlot) {
            return [];
        }

        return fixBundleNos.map(function(bundleNo) {
            return {
                bundleNo: bundleNo,
                startDate: installationTimeSlot.startDate,
                endDate: installationTimeSlot.endDate,
                comment: installationComment,
                phoneNumber: phoneNumber
            };
        });
    });
    _exports.getInstallationCheckoutData = getInstallationCheckoutData;
    var shouldSelectInstallation = (0, _Reselect.createSelector)(getInstallationAvailableTimeSlots, function(installationAvailableTimeSlots) {
        return installationAvailableTimeSlots && installationAvailableTimeSlots.slots && installationAvailableTimeSlots.slots.length > 0;
    }); // payment

    _exports.shouldSelectInstallation = shouldSelectInstallation;
    var getPayment = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.payment;
    });
    _exports.getPayment = getPayment;
    var getAvailablePaymentMethods = (0, _Reselect.createSelector)([getDeliveryMethods, getSelectedDeliveryMethod, getLastPos, getDelivery], function(deliveryMethods, selectedMethod, lastPos, delivery) {
        var selectedMethodId = selectedMethod ? selectedMethod.id : "";
        var supportedPaymentMethods = deliveryMethods.filter(function(dm) {
            return dm.id === selectedMethodId;
        }).flatMap(function(dm) {
            return dm.supportedPaymentMethods;
        }); //filter DeliveryMethods when parcelLocker is present;

        if (selectedMethodId === "parcel_locker") {
            var checkPayU = supportedPaymentMethods.some(function(t) {
                return t.code === "PayU" || t.code === "BlueMedia";
            });

            if (checkPayU === true) {
                if (lastPos.paymentByCardPossibility === true && lastPos.paymentType === true) {
                    return supportedPaymentMethods.filter(function(sPM) {
                        return ["Cash", "PayU", "BlueMedia"].includes(sPM.code);
                    });
                } else {
                    return supportedPaymentMethods.filter(function(sPM) {
                        return ["PayU", "BlueMedia"].includes(sPM.code);
                    });
                }
            } else {
                if (lastPos.paymentByCardPossibility === true && lastPos.paymentType === true) {
                    return supportedPaymentMethods.filter(function(sPM) {
                        return ["Cash"].includes(sPM.code);
                    });
                } else {
                    return [];
                }
            }
        }

        if (supportedPaymentMethods.length === 0 && !delivery.isDeliveryRequired) {
            return [{
                code: delivery.paymentWithoutDeliveryMethod
            }];
        } else {
            return supportedPaymentMethods;
        }
    });
    _exports.getAvailablePaymentMethods = getAvailablePaymentMethods;
    var getSelectedPaymentMethod = (0, _Reselect.createSelector)(getPayment, function(payment) {
        return payment.selectedMethod;
    });
    _exports.getSelectedPaymentMethod = getSelectedPaymentMethod;
    var getSelectedPaymentModeValueEligCode = (0, _Reselect.createSelector)(getPayment, function(payment) {
        return payment.selectedEligCode;
    });
    _exports.getSelectedPaymentModeValueEligCode = getSelectedPaymentModeValueEligCode;
    var isOnlinePaymentMethodSelected = (0, _Reselect.createSelector)(getPayment, function(payment) {
        return payment.selectedMethod === "PayU" || payment.selectedMethod === "BlueMedia";
    });
    _exports.isOnlinePaymentMethodSelected = isOnlinePaymentMethodSelected;
    var getPaymentCheckoutData = (0, _Reselect.createSelector)([getDeliveryBundles, getSelectedPaymentMethod, getSelectedPaymentModeValueEligCode], function(bundles, payment, eligCode) {
        var paymentMethod = payment && payment.length > 0 ? payment : "Cash";
        return bundles.map(function(b) {
            return {
                bundleNo: b,
                paymentMethod: paymentMethod,
                eligCode: eligCode
            };
        });
    });
    _exports.getPaymentCheckoutData = getPaymentCheckoutData;
    var getFeeForSelectedPaymentMethod = (0, _Reselect.createSelector)([getSelectedDeliveryMethod, getSelectedPaymentModeValueEligCode], function(selectedDeliveryMethod, selectedPaymentModeValueEligCode) {
        if (selectedDeliveryMethod.supportedPaymentMethods && selectedPaymentModeValueEligCode) {
            var selectedPaymentMethod = selectedDeliveryMethod.supportedPaymentMethods.find(function(method) {
                return selectedPaymentModeValueEligCode === method.eligCode;
            });
            return selectedPaymentMethod && selectedPaymentMethod.fee || "";
        }

        return "";
    });
    _exports.getFeeForSelectedPaymentMethod = getFeeForSelectedPaymentMethod;
    var getDeliveryTotalCost = (0, _Reselect.createSelector)([getSelectedDeliveryMethod, getFeeForSelectedPaymentMethod], function(selectedDeliveryMethod, fee) {
        if (selectedDeliveryMethod && selectedDeliveryMethod.price && fee) {
            var total = parseFloat(selectedDeliveryMethod.price) + parseFloat(fee);
            return total.toFixed(2).replace(".", ",") + " zł";
        }

        return "0,00 zł";
    }); // CONSENTS DATA

    _exports.getDeliveryTotalCost = getDeliveryTotalCost;
    var getCheckoutConsents = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.consents.consents;
    });
    _exports.getCheckoutConsents = getCheckoutConsents;
    var getConsentsData = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.consents;
    });
    _exports.getConsentsData = getConsentsData;
    var getConsentsStatesData = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.consents.consentStates;
    });
    _exports.getConsentsStatesData = getConsentsStatesData;
    var getConsentsCheckoutData = (0, _Reselect.createSelector)([getConsentsStatesData, getConsentsData], makeBundleNoNullIfNecessary);
    _exports.getConsentsCheckoutData = getConsentsCheckoutData;
    var selectedConsentsStateCodes = (0, _Reselect.createSelector)(getConsentsData, function(consentData) {
        var consentStates = consentData.consentStates || [];
        return consentStates.map(function(consentState) {
            return consentState.stateCode;
        });
    });

    var getConsentsForSubtype = function getConsentsForSubtype(subType) {
        return (0, _Reselect.createSelector)(getConsentsData, function(consentData) {
            var consents = consentData.consents || [];
            return consents.filter(function(consent) {
                return consent.subType === subType;
            });
        });
    };

    var getConsentNegativeStateCodesForSubType = function getConsentNegativeStateCodesForSubType(subType) {
        return (0, _Reselect.createSelector)(getConsentsForSubtype(subType), function(earlierInstallationConsents) {
            var consentPositiveStateCodes = earlierInstallationConsents.map(function(consent) {
                return consent.states.filter(function(consentState) {
                    return !consentState.positive;
                }).map(function(consentState) {
                    return consentState.code;
                });
            });
            return _lodash.default.flattenDeep(consentPositiveStateCodes);
        });
    };

    var getConsentEmailAddress = (0, _Reselect.createSelector)(getConsentsData, function(checkout) {
        return checkout.consentEmailAddress;
    });
    _exports.getConsentEmailAddress = getConsentEmailAddress;
    var getConsentPhoneNumber = (0, _Reselect.createSelector)(getConsentsData, function(checkout) {
        return checkout.consentPhoneNumber;
    });
    _exports.getConsentPhoneNumber = getConsentPhoneNumber;
    var getConsentAcknowledgmentsReadWhileTalking = (0, _Reselect.createSelector)(getConsentsData, function(checkout) {
        return checkout.consentAcknowledgmentsReadWhileTalking;
    });
    _exports.getConsentAcknowledgmentsReadWhileTalking = getConsentAcknowledgmentsReadWhileTalking;
    var getConsentDocumentStatus = (0, _Reselect.createSelector)(getConsentsData, function(checkout) {
        return checkout.consentDocumentStatus;
    }); // CONSENTS DATA - EARLIER INSTALLATION

    _exports.getConsentDocumentStatus = getConsentDocumentStatus;
    var areMainEarlierInstallationConsentsAccepted = (0, _Reselect.createSelector)([selectedConsentsStateCodes, getConsentNegativeStateCodesForSubType("MAIN_EARLIER_INSTALLATION")], function(selectedConsentsStateCodes, earlierInstallationConsentNegativeStateCodes) {
        return !earlierInstallationConsentNegativeStateCodes.some(function(earlierInstallationConsentPositiveStateCode) {
            return selectedConsentsStateCodes.includes(earlierInstallationConsentPositiveStateCode);
        });
    });
    _exports.areMainEarlierInstallationConsentsAccepted = areMainEarlierInstallationConsentsAccepted;
    var areAdditionalEarlierInstallationConsentsAccepted = (0, _Reselect.createSelector)([selectedConsentsStateCodes, getConsentNegativeStateCodesForSubType("ADDITIONAL_EARLIER_INSTALLATION")], function(selectedConsentsStateCodes, earlierInstallationConsentNegativeStateCodes) {
        return !earlierInstallationConsentNegativeStateCodes.some(function(earlierInstallationConsentPositiveStateCode) {
            return selectedConsentsStateCodes.includes(earlierInstallationConsentPositiveStateCode);
        });
    });
    _exports.areAdditionalEarlierInstallationConsentsAccepted = areAdditionalEarlierInstallationConsentsAccepted;
    var isMainEarlierInstallationConsentPresent = (0, _Reselect.createSelector)(getConsentsForSubtype("MAIN_EARLIER_INSTALLATION"), function(earlierInstallationConsents) {
        return earlierInstallationConsents.length > 0;
    });
    _exports.isMainEarlierInstallationConsentPresent = isMainEarlierInstallationConsentPresent;
    var isEarlierInstallation = (0, _Reselect.createSelector)([isMainEarlierInstallationConsentPresent, areMainEarlierInstallationConsentsAccepted, areAdditionalEarlierInstallationConsentsAccepted], function(isMainEarlierInstallationConsentPresent, areMainEarlierInstallationConsentsAccepted, areAdditionalEarlierInstallationConsentsAccepted) {
        if (isMainEarlierInstallationConsentPresent) {
            return areMainEarlierInstallationConsentsAccepted;
        } else {
            return areAdditionalEarlierInstallationConsentsAccepted;
        }
    });
    _exports.isEarlierInstallation = isEarlierInstallation;
    var updatingConsents = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.updatingConsents;
    });
    _exports.updatingConsents = updatingConsents;
    var updatingAnyConsent = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.consents.updating;
    });
    _exports.updatingAnyConsent = updatingAnyConsent;
    var consentsDataInRequest = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.consents.data || {};
    });
    _exports.consentsDataInRequest = consentsDataInRequest;
    var cartConsentsDataRequested = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.cartConsents.requested;
    });
    _exports.cartConsentsDataRequested = cartConsentsDataRequested;
    var getConsentsProps = (0, _Reselect.createSelector)([getConsentsData, updatingConsents, updatingAnyConsent, getConsentsCheckoutData], function(data, updatingConsents, updatingAnyConsent, consentStates) {
        return _objectSpread({}, data, {
            updatingConsents: updatingConsents,
            updatingAnyConsent: updatingAnyConsent,
            consentStates: consentStates
        });
    });
    _exports.getConsentsProps = getConsentsProps;
    var getBonusesConsents = (0, _Reselect.createSelector)(getConsentsData, function(consentsData) {
        function isRelatedWithBonusBySection(conf, consent) {
            return conf.some(function(conf) {
                return (conf.sections || []).filter(function(s) {
                    return s.withBonus;
                }).map(function(s) {
                    return s.consentsCode;
                }).some(function(cCodes) {
                    return cCodes.indexOf(consent.consentCode) > -1;
                });
            });
        }

        return consentsData.consents.filter(function(consentData) {
            return consentData.isRelatedWithBonus || isRelatedWithBonusBySection(consentsData.conf, consentData);
        });
    });
    _exports.getBonusesConsents = getBonusesConsents;
    var getConsentsWithBonuses = (0, _Reselect.createSelector)([getConsentsData, getBonusesConsents], function(consentsData, bonusConsents) {
        return bonusConsents.map(function(consent) {
            var currentState = consentsData.consentStates.find(function(state) {
                return state.consentCode === consent.consentCode;
            });
            var stateCode = currentState ? currentState.stateCode : "";
            return {
                state: consent.states.find(function(state) {
                    return state.code === stateCode;
                }),
                title: consent.title,
                bonuses: consent.bonuses
            };
        });
    });
    _exports.getConsentsWithBonuses = getConsentsWithBonuses;
    var getBigAndZonkConsents = (0, _Reselect.createSelector)(getConsentsData, function(consentsData) {
        return consentsData.consents.filter(function(consentData) {
            return consentData.consentCode === "100_CONV" || consentData.consentCode === "MSCONSENT_4";
        });
    });
    _exports.getBigAndZonkConsents = getBigAndZonkConsents;
    var areBigAndZonkConsentsAccepted = (0, _Reselect.createSelector)([getBigAndZonkConsents, getConsentsData], function(bigAndZonkConsents, consentsData) {
        return !bigAndZonkConsents.find(function(consent) {
            var currentState = consentsData.consentStates.find(function(state) {
                return state.consentCode === consent.consentCode;
            });
            return consent.states.find(function(state) {
                return state.code === (currentState ? currentState.stateCode : "") && !state.positive;
            });
        });
    });
    _exports.areBigAndZonkConsentsAccepted = areBigAndZonkConsentsAccepted;
    var areConsentsWithBonusesAccepted = (0, _Reselect.createSelector)(getConsentsWithBonuses, function(bonusConsents) {
        return !bonusConsents.find(function(bonusConsent) {
            return bonusConsent.state.positive !== true;
        });
    });
    _exports.areConsentsWithBonusesAccepted = areConsentsWithBonusesAccepted;
    var getCvDocumentsData = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.cvDocuments;
    });
    _exports.getCvDocumentsData = getCvDocumentsData;
    var getSelectedCvDocument = (0, _Reselect.createSelector)(getCvDocumentsData, function(cvDocuments) {
        return cvDocuments.selectedCustomerAdditionalDocument;
    });
    _exports.getSelectedCvDocument = getSelectedCvDocument;
    var getDocumentCustomerWorkPhoneNumber = (0, _Reselect.createSelector)(getCvDocumentsData, function(cvDocuments) {
        return cvDocuments.customerWorkPhoneNumber;
    });
    _exports.getDocumentCustomerWorkPhoneNumber = getDocumentCustomerWorkPhoneNumber;
    var getCvDocumentsCheckoutData = (0, _Reselect.createSelector)([getDeliveryBundles, getSelectedCvDocument, getDocumentCustomerWorkPhoneNumber], function(bundles, selected, phone) {
        return selected ? bundles.map(function(b) {
            return {
                bundleNo: b,
                selectedCustomerAdditionalDocument: selected,
                customerWorkPhoneNumber: phone
            };
        }) : [];
    });
    _exports.getCvDocumentsCheckoutData = getCvDocumentsCheckoutData;
    var getCvDocumentsList = (0, _Reselect.createSelector)(getCvDocumentsData, function(cvDocuments) {
        return cvDocuments.cvDocumentsList[0] ? cvDocuments.cvDocumentsList : [];
    });
    _exports.getCvDocumentsList = getCvDocumentsList;
    var getCvDocumentsErrors = (0, _Reselect.createSelector)(getCvDocumentsData, function(cvDocuments) {
        return cvDocuments.errors;
    });
    _exports.getCvDocumentsErrors = getCvDocumentsErrors;
    var getInvoiceEmail = (0, _Reselect.createSelector)(_selectors.getInvoiceData, function(data) {
        return data.invoiceEmail;
    });
    _exports.getInvoiceEmail = getInvoiceEmail;
    var getInvoiceEmailMapping = (0, _Reselect.createSelector)(_selectors.getInvoiceData, function(data) {
        return data.invoiceEmailMapping;
    });
    _exports.getInvoiceEmailMapping = getInvoiceEmailMapping;
    var getInvoiceEmailErrors = (0, _Reselect.createSelector)(_selectors.getInvoiceData, function(data) {
        return data.errors;
    });
    _exports.getInvoiceEmailErrors = getInvoiceEmailErrors;
    var isContactEmailFilledAndValid = (0, _Reselect.createSelector)([getCustomerNoEmail, getCustomerEmailAddress, getCustomerContactErrors], function(customerNoEmail, email, errors) {
        return !customerNoEmail && email && email.length > 0 && !(errors && errors.emailAddress && errors.emailAddress.length !== 0);
    });
    _exports.isContactEmailFilledAndValid = isContactEmailFilledAndValid;
    var getInvoiceEmailForm = (0, _Reselect.createSelector)([getInvoiceEmail, getInvoiceEmailMapping, getInvoiceEmailErrors, isContactEmailFilledAndValid, customerDataFinished], function(invoiceEmail, invoiceEmailMapping, errors, contactEmailFilledAndValid, customerFinished) {
        return {
            invoiceEmail: invoiceEmail,
            invoiceEmailMapping: invoiceEmailMapping,
            errors: errors,
            contactEmailFilledAndValid: contactEmailFilledAndValid,
            customerFinished: customerFinished
        };
    });
    _exports.getInvoiceEmailForm = getInvoiceEmailForm;
    var isInvoiceDataValid = (0, _Reselect.createSelector)([getInvoiceEmailErrors], function(errors) {
        return errors.length === 0;
    });
    _exports.isInvoiceDataValid = isInvoiceDataValid;
    var getInvoiceDataCheckoutData = (0, _Reselect.createSelector)([getInvoiceEmailMapping, getInvoiceEmail, getCustomerEmailAddress], function(invoiceEmailMapping, invoiceEmail, customerEmailAddress) {
        return invoiceEmail !== null ? {
            invoiceEmail: invoiceEmailMapping === 'invoiceEmail' ? invoiceEmail : customerEmailAddress
        } : null;
    });
    _exports.getInvoiceDataCheckoutData = getInvoiceDataCheckoutData;
    var getCheckoutData = (0, _Reselect.createSelector)([getCustomerCheckoutData, getRepresentativeDataForBackend, getConsentsCheckoutData, getDeliveryCheckoutData, getInstallationCheckoutData, getPaymentCheckoutData, getMNPCheckoutData, getCvDocumentsCheckoutData, getTelesales, getBillingAccountCheckoutData, getDebtRepayment, getInvoiceDataCheckoutData], function(customer, representativeData, consentStates, delivery, installation, payment, mnp, additionalDocuments, telesales, billingAccount, debtRepayment, invoiceData) {
        if (!!mnp) {
            mnp.forEach(function(m) {
                return m.email = customer.emailAddress;
            });
        }

        return {
            customer: (0, _utils2.fixCustomerCheckoutData)(customer),
            representativeData: (0, _utils2.toUpperCase)(representativeData),
            consentStates: consentStates,
            delivery: delivery,
            installation: installation,
            payment: payment,
            mnp: mnp,
            additionalDocuments: additionalDocuments,
            telesales: telesales,
            billingAccount: billingAccount,
            debtRepayment: debtRepayment,
            invoiceData: invoiceData
        };
    });
    _exports.getCheckoutData = getCheckoutData;
    var getCheckoutDataForDelivery = (0, _Reselect.createSelector)([getCustomerCheckoutData, getRepresentativeDataForBackend, getConsentsCheckoutData, getDeliveryCheckoutData, getInstallationCheckoutData, getPaymentCheckoutData, getMNPCheckoutData, getCvDocumentsCheckoutData, getTelesales, getBillingAccountCheckoutData, getDebtRepayment, _selectors.getKdrCheckoutData], function(customer, representativeData, consentStates, delivery, installation, payment, mnp, additionalDocuments, telesales, billingAccount, debtRepayment) {
        if (!!mnp) {
            mnp.forEach(function(m) {
                return m.email = customer.emailAddress;
            });
        }

        return {
            customer: (0, _utils2.fixCustomerCheckoutData)(customer),
            representativeData: (0, _utils2.toUpperCase)(representativeData),
            consentStates: consentStates,
            delivery: delivery,
            installation: installation,
            mnp: mnp,
            additionalDocuments: additionalDocuments,
            telesales: telesales,
            billingAccount: billingAccount,
            debtRepayment: debtRepayment
        };
    });
    _exports.getCheckoutDataForDelivery = getCheckoutDataForDelivery;
    var getDocumentsConfirmationState = (0, _Reselect.createSelector)(getConsentsData, function(consents) {
        return consents.documentsConfirmation;
    });
    _exports.getDocumentsConfirmationState = getDocumentsConfirmationState;
    var getModifyConsentsInCartQueue = (0, _Reselect.createSelector)(getConsentsData, function(consents) {
        return consents.modifyConsentsInCartQueue;
    });
    _exports.getModifyConsentsInCartQueue = getModifyConsentsInCartQueue;
    var canSkipNumberReservation = (0, _Reselect.createSelector)([getSelectedMethodForDevices, getSelectedDeliveryMethods, getConvergentEntries, _selectors.getMobileCartDevices], function(selectedMethodForDevices, selectedDeliveryMethods, convergentEntries, mobileDevices) {
        return convergentEntries.length === 0 ? selectedMethodForDevices && selectedMethodForDevices !== "" && selectedMethodForDevices !== _DeliveryMethod.default.POS : isSerialNumberRequirementFulfilledForMagnum(mobileDevices, selectedDeliveryMethods, convergentEntries);
    });
    var cartContainsReservableItems = (0, _Reselect.createSelector)([_selectors.allCartEntries, getSelectedDeliveryMethods, getSelectedMethodForDevices], function(cartEntries, selectedDeliveryMethods, selectedMethodForDevices) {
        var reservableCartEntries = cartEntries.filter(function(entry) {
            var selectedDeliveryMethod;

            if (entry.entryType === _CartEntryTypeEnum.default.FIX) {
                selectedDeliveryMethod = selectedDeliveryMethods.fixDevices ? selectedDeliveryMethods.fixDevices.id : selectedMethodForDevices;
            } else {
                selectedDeliveryMethod = selectedDeliveryMethods.mobile ? selectedDeliveryMethods.mobile.id : "";
            }

            return selectedDeliveryMethod === "" || selectedDeliveryMethod === _DeliveryMethod.default.POS;
        });
        return (0, _MiniCartUtils.cartEntriesContainsReservableItems)(reservableCartEntries);
    });
    _exports.cartContainsReservableItems = cartContainsReservableItems;
    var cartContainsAnySim = (0, _Reselect.createSelector)(_selectors.allCartEntries, function(cartEntries) {
        return (0, _MiniCartUtils.cartContainsEsim)(cartEntries);
    });
    _exports.cartContainsAnySim = cartContainsAnySim;
    var cartContainsReservableSim = (0, _Reselect.createSelector)([getSelectedDeliveryMethods, cartContainsAnySim], function(selectedDeliveryMethods, anySim) {
        var selectedDeliveryMethod = selectedDeliveryMethods.mobile ? selectedDeliveryMethods.mobile.id : "";
        return (selectedDeliveryMethod === "" || selectedDeliveryMethod === _DeliveryMethod.default.POS) && anySim;
    });
    _exports.cartContainsReservableSim = cartContainsReservableSim;
    var cartContainsAnyPhysicalSimCard = (0, _Reselect.createSelector)(_selectors.allCartEntries, function(cartEntries) {
        return cartEntries.filter(function(entry) {
            return (0, _MiniCartUtils.entryContainsReservableSimCard)(entry);
        }).length > 0;
    });
    _exports.cartContainsAnyPhysicalSimCard = cartContainsAnyPhysicalSimCard;
    var isDigitalAgreementTypeWithoutPhysicalSimAndDevices = (0, _Reselect.createSelector)([getAgreementType, _selectors.isCartMobile, cartContainsAnyPhysicalSimCard, _selectors.cartHasMobileDevices], function(agreementType, isCartMobile, cartContainsAnyPhysicalSimCard, cartHasMobileDevices) {
        return agreementType === _AgreementType.default.DIGITAL && isCartMobile && !cartContainsAnyPhysicalSimCard && !cartHasMobileDevices;
    });
    _exports.isDigitalAgreementTypeWithoutPhysicalSimAndDevices = isDigitalAgreementTypeWithoutPhysicalSimAndDevices;
    var hasAgreementTypeChanged = (0, _Reselect.createSelector)([getCartAgreementType, getAgreementType], function(cartAgreementType, agreementType) {
        return !cartAgreementType && agreementType === _AgreementType.default.DIGITAL || cartAgreementType === _AgreementType.default.DIGITAL && agreementType === _AgreementType.default.PAPER;
    });
    _exports.hasAgreementTypeChanged = hasAgreementTypeChanged;
    var getDefaultDeliveryMethod = (0, _Reselect.createSelector)([getDeliveryMethods, getDeliveryMethodsRaw, getDelivery], function(deliveryMethodsParam, deliveryMethodsRawParam, delivery) {
        var deliveryMethodsRaw = (deliveryMethodsRawParam || []).filter(function(dm) {
            return dm.id !== _DeliveryMethod.default.PICKUP_ON_EMAIL;
        });
        var deliveryMethods = (deliveryMethodsParam || []).filter(function(dm) {
            return dm.id !== _DeliveryMethod.default.PICKUP_ON_EMAIL;
        });

        if (delivery.isFirstMethodDefault || (deliveryMethods || []).length === 1) {
            var availableDeliveryMethodCodes = deliveryMethods.map(function(deliveryMethod) {
                return deliveryMethod.id;
            });

            if (availableDeliveryMethodCodes.length > 0) {
                console.warn("getDefaultDeliveryMethod", availableDeliveryMethodCodes[0]);
                return availableDeliveryMethodCodes[0];
            }

            var rawDeliveryMethodCodes = deliveryMethodsRaw.map(function(d) {
                return d.id;
            });
            return rawDeliveryMethodCodes[0] || null;
        } else {
            return null;
        }
    });
    _exports.getDefaultDeliveryMethod = getDefaultDeliveryMethod;
    var getSelectedOrDefaultMobileAgreementType = (0, _Reselect.createSelector)([isAgreementTypeRequired, getCustomerNoEmail, isDigitalAgreementDefault, getCartAgreementType], function(isAgreementTypeRequired, hasCustomerNoEmail, isDigitalAgreementDefault, cartAgreementType) {
        if (!isAgreementTypeRequired || hasCustomerNoEmail && cartAgreementType) {
            return _AgreementType.default.PAPER;
        }

        if (isDigitalAgreementDefault && !cartAgreementType) {
            return _AgreementType.default.DIGITAL;
        }

        return cartAgreementType;
    });
    _exports.getSelectedOrDefaultMobileAgreementType = getSelectedOrDefaultMobileAgreementType;
    var getSelectedOrDefaultAgreementType = (0, _Reselect.createSelector)([isAgreementTypeRequired, getCustomerNoEmail, isDigitalAgreementDefault, getCartAgreementType, getDeliveryMobile, getDefaultDeliveryMethod, getCartDeliveryMethod, getDeliveryMethodsRaw, getSelectedOrDefaultMobileAgreementType], function(isAgreementTypeRequired, hasCustomerNoEmail, isDigitalAgreementDefault, cartAgreementType, mobileDelivery, defaultDeliveryMethod, cartDeliveryMethod, rawDeliveryMethods, mobileAgreementType) {
        if (!mobileDelivery) {
            var digitalAvailable = rawDeliveryMethods.map(function(d) {
                return d.id;
            }).some(_DeliveryMethod.default.isDigital);
            var cartAgreementDigital = cartAgreementType === _AgreementType.default.DIGITAL && digitalAvailable;
            var digital = cartAgreementDigital || isDigitalAgreementDefault && digitalAvailable;
            return digital ? _AgreementType.default.DIGITAL : _AgreementType.default.PAPER;
        } else {
            return hasCustomerNoEmail ? _AgreementType.default.PAPER : mobileAgreementType;
        }
    });
    _exports.getSelectedOrDefaultAgreementType = getSelectedOrDefaultAgreementType;
    var getAvailableDeliveryMethodCodes = (0, _Reselect.createSelector)([getDeliveryMethods, getAgreementType, getCustomerNoEmail], function(deliveryMethods, agreementType, customerNoEmail) {
        return deliveryMethods.map(function(deliveryMethod) {
            return deliveryMethod.id;
        }).filter(function(deliveryMethodId) {
            return !(customerNoEmail && deliveryMethodId === _DeliveryMethod.default.PICKUP_FROM_SHELF);
        }).filter(function(deliveryMethodId) {
            return !(_DeliveryMethod.default.PICKUP_ON_EMAIL === deliveryMethodId && _AgreementType.default.PAPER === agreementType);
        });
    });
    _exports.getAvailableDeliveryMethodCodes = getAvailableDeliveryMethodCodes;
    var getSelectedOrDefaultDeliveryMethod = (0, _Reselect.createSelector)([getSelectedDeliveryMethodCode, getCartDeliveryMethod, getDefaultDeliveryMethod, isDigitalAgreementTypeWithoutPhysicalSimAndDevices, getAvailableDeliveryMethodCodes], function(selectedDeliveryMethodCode, cartDeliveryMethod, defaultDeliveryMethod, isDigitalAgreementTypeWithoutPhysicalSimAndDevices, availableDeliveryMethodCodes) {
        if (isDigitalAgreementTypeWithoutPhysicalSimAndDevices) {
            return _DeliveryMethod.default.PICKUP_ON_EMAIL;
        }

        var deliveryMethodCode = selectedDeliveryMethodCode || cartDeliveryMethod;

        if (deliveryMethodCode && availableDeliveryMethodCodes.includes(deliveryMethodCode)) {
            return deliveryMethodCode;
        }

        return defaultDeliveryMethod;
    });
    _exports.getSelectedOrDefaultDeliveryMethod = getSelectedOrDefaultDeliveryMethod;
    var getSelectedOrDefaultPaymentMethod = (0, _Reselect.createSelector)([getSelectedDeliveryMethodCode, getDeliveryMethodsRaw, getSelectedPaymentMethod, getAvailablePaymentMethods], function(selectedDeliveryMethodCode, deliveryMethodsRaw, selectedPaymentMethod, availablePaymentMethods) {
        var deliveryMethod = deliveryMethodsRaw.find(function(deliveryMethod) {
            return deliveryMethod.id === selectedDeliveryMethodCode;
        });
        var paymentMethodCodes = getPaymentMethodsForDelivery(deliveryMethod).map(function(paymentMethod) {
            return paymentMethod.id;
        });

        if (paymentMethodCodes.length > 0) {
            if (paymentMethodCodes.includes(selectedPaymentMethod)) {
                return selectedPaymentMethod;
            }

            return getDefaultPaymentMethodForDelivery(deliveryMethod);
        }

        if (availablePaymentMethods && availablePaymentMethods[0]) {
            return availablePaymentMethods[0];
        }

        return null;
    });
    _exports.getSelectedOrDefaultPaymentMethod = getSelectedOrDefaultPaymentMethod;

    var getDefaultPaymentMethodForDelivery = function getDefaultPaymentMethodForDelivery(deliveryMethod) {
        var defaultDeliveryMethodCode = getPaymentMethodsForDelivery(deliveryMethod).find(function(paymentMethod) {
            return paymentMethod.isDefault;
        });

        if (defaultDeliveryMethodCode) {
            return defaultDeliveryMethodCode.id;
        }

        return null;
    };

    var getPaymentMethodsForDelivery = function getPaymentMethodsForDelivery(deliveryMethod) {
        if (deliveryMethod && deliveryMethod.supportedPaymentMethods && deliveryMethod.supportedPaymentMethods.length > 0) {
            return deliveryMethod.supportedPaymentMethods;
        }

        return [];
    };

    var isSelectedDeliveryMethodAvailable = (0, _Reselect.createSelector)([getSelectedDeliveryMethodCode, getAvailableDeliveryMethodCodes], function(selectedDeliveryMethodCode, deliveryMethodCodes) {
        return selectedDeliveryMethodCode && deliveryMethodCodes.includes(selectedDeliveryMethodCode);
    });
    _exports.isSelectedDeliveryMethodAvailable = isSelectedDeliveryMethodAvailable;
    var shouldShowEmailWarning = (0, _Reselect.createSelector)([getCartDeliveryMethod, getCartAgreementType, getCustomerNoEmail], function(cartDeliveryMethod, cartAgreementType, customerNoEmail) {
        return customerNoEmail && (cartAgreementType === _AgreementType.default.DIGITAL || cartDeliveryMethod === _DeliveryMethod.default.PICKUP_FROM_SHELF);
    });
    _exports.shouldShowEmailWarning = shouldShowEmailWarning;
    var getDescriptionKey = (0, _Reselect.createSelector)(getCartDeliveryMethod, function(cartDeliveryMethod) {
        if (cartDeliveryMethod === _DeliveryMethod.default.PICKUP_FROM_SHELF) {
            return _EmailWarningDescriptionEnum.default.PICKUP;
        }

        return _EmailWarningDescriptionEnum.default.DEFAULT;
    });
    _exports.getDescriptionKey = getDescriptionKey;
    var invoiceIsPresentAndPaid = (0, _Reselect.createSelector)([getCheckoutState, canSkipNumberReservation, cartContainsReservableItems], function(checkout, skipNumberReservation, cartContainsReservableItems) {
        return checkout.reservation.paymentAndFiscalization && checkout.reservation.paymentAndFiscalization.isInvoicePresent ? checkout.reservation.paymentStatus || checkout.reservation.paymentOverride : checkout.reservation.saleUnlocked || checkout.reservation.paymentStatus || checkout.reservation.paymentOverride || !checkout.reservation.productsExists || checkout.reservation.agencyPosStatusValid || skipNumberReservation || !cartContainsReservableItems;
    }); // Cart Data

    _exports.invoiceIsPresentAndPaid = invoiceIsPresentAndPaid;
    var reservationData = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.reservation;
    });
    _exports.reservationData = reservationData;
    var getReservationSimCardTypes = (0, _Reselect.createSelector)(reservationData, function(reservation) {
        return reservation.simCardTypes;
    });
    _exports.getReservationSimCardTypes = getReservationSimCardTypes;

    var getSimCardTypeForBundle = function getSimCardTypeForBundle(bundleNo) {
        return (0, _Reselect.createSelector)(getReservationSimCardTypes, function(simCardTypes) {
            return simCardTypes[bundleNo];
        });
    };

    _exports.getSimCardTypeForBundle = getSimCardTypeForBundle;

    var serialNumbersFilled = function serialNumbersFilled(state) {
        return (0, _app.areSerialNumbersFilled)(state.checkout.reservation.serialNumbers, state);
    };

    var isReservationButtonDisabled = (0, _Reselect.createSelector)([reservationData, serialNumbersFilled, cartContainsReservableItems], function(reservation, serialNumbersFilled, cartContainsReservableItems) {
        return !cartContainsReservableItems || !serialNumbersFilled || reservation.sapReservationNumber || reservation.serialNumberVerificationInProgress || reservation.agencyPosStatusValid;
    });
    _exports.isReservationButtonDisabled = isReservationButtonDisabled;
    var containsFixEntries = (0, _Reselect.createSelector)([getFixEntries], function(fixEntries) {
        return fixEntries != null && fixEntries.length > 0;
    });
    _exports.containsFixEntries = containsFixEntries;
    var containsConvergentEntries = (0, _Reselect.createSelector)([getConvergentEntries], function(convergentEntries) {
        return convergentEntries != null && convergentEntries.length > 0;
    });
    _exports.containsConvergentEntries = containsConvergentEntries;
    var getCustomerForm = (0, _Reselect.createSelector)([getCustomerData, getCustomerDataErrors, isExistingCustomer], function(data, errors, existing, readOnly) {
        return _objectSpread({}, data, {
            errors: errors,
            existing: existing,
            readOnly: readOnly
        });
    });
    _exports.getCustomerForm = getCustomerForm;
    var getContactCustomerForm = (0, _Reselect.createSelector)([getCustomerContact, getCustomerContactErrors, isExistingCustomer], function(contact, errors, existing, readOnly) {
        return _objectSpread({}, contact, {
            errors: errors,
            existing: existing,
            readOnly: readOnly
        });
    }); // Component specific selectors - move to containers

    _exports.getContactCustomerForm = getContactCustomerForm;
    var getCustomerDataForm = (0, _Reselect.createSelector)([getCustomerData, getCustomerDataErrors, isCustomerDataReadOnly, isExistingCustomer, getSalesOfGoodsProcess, getSalesOfAddonsProcess, customerDataRequested, customerDataLoading, isSmsVerified, isOnlineCookie, isWWW, bpgRequested, containsFixEntries, _selectors.getCartIsNet, _selectors2.isNewAgreementInDocuments, _selectors.isCartFix], function(data, errors, readOnly, existing, isSalesOfGoodsOnly, isSalesOfAddonsOnly, customerDataRequested, customerDataLoading, isSmsVerified, isOnlineCookie, isWWW, bpgRequested, containsFixEntries, isB2B, isNewAgreementInDocuments, isCartFix) {
        return _objectSpread({}, data, {
            errors: errors,
            readOnly: readOnly,
            existing: existing,
            isSalesOfGoodsOnly: isSalesOfGoodsOnly,
            isSalesOfAddonsOnly: isSalesOfAddonsOnly,
            show: customerDataRequested && !customerDataLoading,
            isSmsVerified: isSmsVerified,
            isOnlineCookie: isOnlineCookie,
            isWWW: isWWW,
            bpgRequested: bpgRequested,
            containsFixEntries: containsFixEntries,
            isB2B: isB2B,
            isBzuOnlyAvailableOptionForFix: !isNewAgreementInDocuments && existing && isSalesOfAddonsOnly && isCartFix
        });
    });
    _exports.getCustomerDataForm = getCustomerDataForm;
    var getCustomerDataToValidation = (0, _Reselect.createSelector)([getCustomerDataForm, getSalesOfGoodsProcess, getSalesOfAddonsProcess], function(data, isSOG, isSOA) {
        var dataToValidate = {};
        var keysToIgnore = [];

        if (data.isBusinessClient) {
            Object.keys(_helperObjects.emptyPersonalData).forEach(function(k) {
                return keysToIgnore.push(k);
            });

            if (isSOG || isSOA) {
                keysToIgnore.push("regon");
                keysToIgnore.push("registrationDate");
                keysToIgnore.push("companyStatus");
            }
        } else {
            Object.keys(_helperObjects.emptyBusinessData).forEach(function(k) {
                return keysToIgnore.push(k);
            });

            if (isSOG || isSOA) {
                Object.keys(_helperObjects.emptyPolishPersonalData).forEach(function(k) {
                    return keysToIgnore.push(k);
                });
                Object.keys(_helperObjects.emptyForeignerPersonalData).forEach(function(k) {
                    return keysToIgnore.push(k);
                });
            } else {
                if (data.foreigner) {
                    getKeysToIgnoreForForeigner(keysToIgnore, data).forEach(function(key) {
                        return keysToIgnore.push(key);
                    });
                } else {
                    Object.keys(_helperObjects.emptyForeignerPersonalData).forEach(function(k) {
                        return keysToIgnore.push(k);
                    });
                }
            }
        }

        Object.keys(data).filter(function(k) {
            return keysToIgnore.indexOf(k) === -1;
        }).forEach(function(vk) {
            return dataToValidate[vk] = data[vk];
        });
        return dataToValidate;
    });
    _exports.getCustomerDataToValidation = getCustomerDataToValidation;

    var getKeysToIgnoreForForeigner = function getKeysToIgnoreForForeigner(keysToIgnore, customer) {
        if (!customer.noPesel) {
            return [].concat(babelHelpers.toConsumableArray(keysToIgnore), [Object.keys(_helperObjects.emptyPolishPersonalData).filter(function(key) {
                return key !== "pesel";
            })]);
        }

        return [].concat(babelHelpers.toConsumableArray(keysToIgnore), [Object.keys(_helperObjects.emptyPolishPersonalData)]);
    };

    var getCustomerMainAddressForm = (0, _Reselect.createSelector)([getAddressMain, getCustomerMainAddressErrors, getCitySuggestionsForMainAddress, getStreetSuggestionsForMainAddress, getMainAddressValidation, isCustomerDataReadOnly, customerDataRequested, customerDataLoading, isBusinessClient, isForeignerCheckboxAvailable, bpgRequested, isExistingCustomer, hasFixAddress, getSalesOfGoodsProcess, getSalesOfAddonsProcess, isWWW, _selectors2.isNewAgreementInDocuments, _selectors.isCartFix], function(address, errors, citySuggestions, streetSuggestions, validation, readOnly, customerDataRequested, customerDataLoading, isBusinessClient, isForeignerCheckboxAvailable, bpgRequested, existing, hasFixAddress, isSalesOfGoodsOnly, isSalesOfAddonsOnly, isWWW, isNewAgreementInDocuments, isCartFix) {
        return _objectSpread({}, address, {
            errors: errors,
            citySuggestions: citySuggestions,
            streetSuggestions: streetSuggestions,
            validation: validation,
            readOnly: readOnly,
            isBusinessClient: isBusinessClient,
            isForeignerCheckboxAvailable: isForeignerCheckboxAvailable,
            bpgRequested: bpgRequested,
            show: customerDataRequested && !customerDataLoading,
            existing: existing,
            hasFixAddress: hasFixAddress,
            isSalesOfGoodsOnly: isSalesOfGoodsOnly,
            isSalesOfAddonsOnly: isSalesOfAddonsOnly,
            isWWW: isWWW,
            isBzuOnlyAvailableOptionForFix: !isNewAgreementInDocuments && existing && isSalesOfAddonsOnly && isCartFix
        });
    });
    _exports.getCustomerMainAddressForm = getCustomerMainAddressForm;
    var getCustomerCorrespondenceAddressForm = (0, _Reselect.createSelector)([getAddressCorrespondence, getCustomerCorrespondenceAddressErrors, getCitySuggestionsForCorrespondenceAddress, getStreetSuggestionsForCorrespondenceAddress, getCorrespondenceAddressValidation, getAddressCorrespondenceMapping, isCustomerDataReadOnly], function(address, errors, citySuggestions, streetSuggestions, validation, addressMapping, readOnly) {
        return _objectSpread({}, address, {
            errors: errors,
            citySuggestions: citySuggestions,
            streetSuggestions: streetSuggestions,
            validation: validation,
            addressMapping: addressMapping,
            readOnly: readOnly
        });
    });
    _exports.getCustomerCorrespondenceAddressForm = getCustomerCorrespondenceAddressForm;

    function isEmailRequiredByEntries(entries) {
        var subTypeRequiringEmail = "NEOIBEZP";
        return entries.some(function(entry) {
            return (entry.vases || []).some(function(vas) {
                return vas.subType === subTypeRequiringEmail;
            });
        });
    }

    var isEmailRequiredByProductInCart = (0, _Reselect.createSelector)([getFixEntries, getConvergentEntries, containsFixEntries, containsConvergentEntries], function(fixEntries, convergentEntries, containsFixEntries, containsConvergentEntries) {
        if (containsFixEntries) {
            return isEmailRequiredByEntries(fixEntries);
        } else if (containsConvergentEntries) {
            return convergentEntries.some(function(entry) {
                return isEmailRequiredByEntries(entry.entries);
            });
        }

        return false;
    });
    _exports.isEmailRequiredByProductInCart = isEmailRequiredByProductInCart;
    var isEmailFormValid = (0, _Reselect.createSelector)([isEmailRequiredByProductInCart, getCustomerNoEmail], function(isEmailRequiredByProductInCart, customerNoEmail) {
        return isEmailRequiredByProductInCart && customerNoEmail;
    });
    _exports.isEmailFormValid = isEmailFormValid;

    var getMnpContactMethods = function getMnpContactMethods(contactMethods) {
        return (0, _Reselect.createSelector)(isEmailFilledAndValid, function(isEmailFilledAndValid) {
            if (isEmailFilledAndValid) {
                return contactMethods.sort(function(a, b) {
                    return a.priority - b.priority;
                });
            }

            return contactMethods.filter(function(contactMethod) {
                return !(0, _utils.like)(contactMethod.value, "EMAIL");
            }).sort(function(a, b) {
                return a.priority - b.priority;
            });
        });
    };

    _exports.getMnpContactMethods = getMnpContactMethods;
    var isEmailFilledAndValid = (0, _Reselect.createSelector)([getCustomerContact, getCustomerContactErrors], function(contact, contactErrors) {
        return contact.emailAddress && (!contactErrors || !contactErrors.emailAddress || contactErrors.emailAddress.length === 0);
    });
    _exports.isEmailFilledAndValid = isEmailFilledAndValid;
    var getCustomerContactForm = (0, _Reselect.createSelector)([getCustomerContact, getCustomerContactErrors, isCustomerDataReadOnly, isExistingCustomer, getFixEntries, customerDataRequested, customerDataLoading, isBusinessClient, isForeignerCheckboxAvailable, bpgRequested, getSalesOfGoodsProcess, getSalesOfAddonsProcess, isWWW, isEmailRequiredByProductInCart], function(contact, errors, readOnly, existing, fixentries, customerDataRequested, customerDataLoading, isBusinessClient, isForeignerCheckboxAvailable, bpgRequested, isSalesOfGoodsOnly, isSalesOfAddonsOnly, isWWW, isEmailRequiredByProductInCart) {
        return _objectSpread({}, contact, {
            errors: errors,
            readOnly: readOnly,
            existing: existing,
            fixentries: fixentries,
            isBusinessClient: isBusinessClient,
            isForeignerCheckboxAvailable: isForeignerCheckboxAvailable,
            bpgRequested: bpgRequested,
            show: customerDataRequested && !customerDataLoading,
            isSalesOfGoodsOnly: isSalesOfGoodsOnly,
            isSalesOfAddonsOnly: isSalesOfAddonsOnly,
            isWWW: isWWW,
            isEmailRequiredByProductInCart: isEmailRequiredByProductInCart
        });
    });
    _exports.getCustomerContactForm = getCustomerContactForm;
    var getCustomerContactMsisdn = (0, _Reselect.createSelector)(getCustomerContact, function(contact) {
        return contact.phoneNumber;
    });
    _exports.getCustomerContactMsisdn = getCustomerContactMsisdn;
    var getDeliveryAddressForm = (0, _Reselect.createSelector)([getAddressDelivery, getDeliveryAddressErrors, getCitySuggestionsForDeliveryAddress, getStreetSuggestionsForDeliveryAddress, getDeliveryAddressValidation, getAddressDeliveryMapping, isCustomerDataReadOnly, getAddressMain], function(address, errors, citySuggestions, streetSuggestions, validation, addressMapping, readOnly, addressMain) {
        return _objectSpread({}, address, {
            errors: errors,
            citySuggestions: citySuggestions,
            streetSuggestions: streetSuggestions,
            validation: validation,
            addressMapping: addressMapping,
            readOnly: readOnly,
            addressMain: addressMain
        });
    }); //usunac tego hardcode na city ale to po konsultacji z tworca tej formatki

    _exports.getDeliveryAddressForm = getDeliveryAddressForm;
    var isDeliveryAddressValid = (0, _Reselect.createSelector)([getDeliveryAddressValidation, getAddressDeliveryMapping, getAddressDelivery], function(cbsResult, addressType, deliveryAddress) {
        return addressType === "main" || addressType === "delivery" && !Object.keys(cbsResult).find(function(key) {
            return key !== "city" && !cbsResult[key];
        }) && !_isEmpty(deliveryAddress.streetNumber);
    }); //VALIDATION
    //przyklad uzycia selectora ktory pobiera propsy z komponentu jako argumenty
    //export const createTestPropsSelector = () => createSelector([getConsentsData, (_,props) => props.consentTypesList],(consentData,cmsConfig) => {return {test:consentData,cms:cmsConfig}})

    _exports.isDeliveryAddressValid = isDeliveryAddressValid;
    var allConsentsValid = (0, _Reselect.createSelector)([getCheckoutConsents, getConsentsCheckoutData], function(consents, selectedStates) {
        return !consents.find(function(consent) {
            return !(0, _utils.validateConsent)(consent, selectedStates);
        });
    });
    _exports.allConsentsValid = allConsentsValid;

    var isSerialNumberRequirementFulfilledForMagnum = function isSerialNumberRequirementFulfilledForMagnum(mobileDevices, selectedDeliveryMethods, convergentEntries) {
        return selectedDeliveryMethods && isSerialNumberRequirementFulfilledForFixPart(selectedDeliveryMethods) && isSerialNumberRequirementFulfilledForMobilePart(mobileDevices, selectedDeliveryMethods, convergentEntries);
    };

    var isSerialNumberRequirementFulfilledForFixPart = function isSerialNumberRequirementFulfilledForFixPart(selectedDeliveryMethods) {
        return !(0, _deliveryMethodHelpers.isDeliveryMethodRequired)(selectedDeliveryMethods.fixDevices) || (0, _deliveryMethodHelpers.isDeliveryMethodSelected)(selectedDeliveryMethods.fixDevices) && selectedDeliveryMethods.fixDevices.id !== _DeliveryMethod.default.POS;
    };

    var isSerialNumberRequirementFulfilledForMobilePart = function isSerialNumberRequirementFulfilledForMobilePart(mobileDevices, selectedDeliveryMethods, convergentEntries) {
        return mobileDevices && mobileDevices.length === 0 && !checkSimInConvergentEntries(convergentEntries) || !(0, _deliveryMethodHelpers.isDeliveryMethodRequired)(selectedDeliveryMethods.mobile) || (0, _deliveryMethodHelpers.isDeliveryMethodSelected)(selectedDeliveryMethods.mobile) && selectedDeliveryMethods.mobile.id !== _DeliveryMethod.default.POS;
    };

    function checkSimInConvergentEntries(convergentEntries) {
        if (convergentEntries) {
            var entries = convergentEntries[0];
            return entries.entries.some(function(convergentEntriesInEntries) {
                return convergentEntriesInEntries.isSim === true;
            });
        } else {
            return false;
        }
    }

    function _countEntriesForProcess(processEntries, process) {
        var res = 0;

        for (var i = 0; i < processEntries.length; i++) {
            if (processEntries[i] === process) {
                res++;
            }
        }

        return res;
    }

    function _isFormFilled(data, isSalesOfGoodsProcess, isSalesOfAddonsProcess) {
        var excludeValidKeys = _getExcludedFieldConfiguration(data, isSalesOfGoodsProcess, isSalesOfAddonsProcess);

        return Object.keys(data).filter(function(key) {
            return excludeValidKeys.indexOf(key) === -1;
        }).filter(function(key) {
            return typeof data[key] !== "boolean" && !data[key];
        }).length === 0;
    }

    function _getExcludedFieldConfiguration(data, isSalesOfGoodsProcess, isSalesOfAddonsProcess) {
        var excludeValidKeys = [];
        excludeValidKeys.push("foreigner");
        excludeValidKeys.push("isBusinessClient");
        excludeValidKeys.push("customerNoEmail");
        excludeValidKeys.push("noPesel");
        excludeValidKeys.push("fakePesel");
        excludeValidKeys.push("peselType");
        excludeValidKeys.push("statusAndDateFromBpg");
        excludeValidKeys.push("hasActiveContracts");

        if (data.isBusinessClient) {
            excludeValidKeys.push("pesel");
            excludeValidKeys.push("idNumber");
            excludeValidKeys.push("firstName");
            excludeValidKeys.push("lastName");
            excludeValidKeys.push("country");
            excludeValidKeys.push("identification");
            excludeValidKeys.push("identificationNumber");
            excludeValidKeys.push("identificationExpirationDate");
            excludeValidKeys.push("identificationRegistrationDate");
            excludeValidKeys.push("gender");

            if (isSalesOfGoodsProcess || isSalesOfAddonsProcess) {
                if (!data.regon) {
                    excludeValidKeys.push("regon");
                }

                excludeValidKeys.push("registrationDate");
                excludeValidKeys.push("companyStatus");
                excludeValidKeys.push("disabledIdNumber");
            }
        } else {
            Object.keys(_helperObjects.emptyBusinessData).map(function(k) {
                return excludeValidKeys.push(k);
            });

            if (isSalesOfGoodsProcess || isSalesOfAddonsProcess) {
                excludeValidKeys.push("pesel");
                excludeValidKeys.push("idNumber");
                excludeValidKeys.push("country");
                excludeValidKeys.push("identification");
                excludeValidKeys.push("identificationNumber");
                excludeValidKeys.push("identificationExpirationDate");
                excludeValidKeys.push("identificationRegistrationDate");
                excludeValidKeys.push("gender");
            } else {
                if (data.foreigner) {
                    excludeValidKeys.push("idNumber");

                    if (data.noPesel) {
                        excludeValidKeys.push("pesel");
                    } else {
                        excludeValidKeys.push("gender");
                    }

                    if ("UE_CERTIFICATE" !== data.identification) {
                        excludeValidKeys.push("identificationRegistrationDate");
                    }

                    if ("UE_CERTIFICATE" === data.identification) {
                        excludeValidKeys.push("identificationExpirationDate");
                    }
                } else {
                    excludeValidKeys.push("country");
                    excludeValidKeys.push("identification");
                    excludeValidKeys.push("identificationNumber");
                    excludeValidKeys.push("identificationExpirationDate");
                    excludeValidKeys.push("identificationRegistrationDate");
                    excludeValidKeys.push("gender");
                }
            }
        } //TODO: Ugly hardcoded... DO NOT EXTEND THIS!


        if (data.customerNoEmail) {
            excludeValidKeys.push("emailAddress");
        }

        return excludeValidKeys;
    }

    function _isStreetNumberFilled(data) {
        return data["streetNumber"] !== "";
    }

    function _isError(error) {
        return error !== undefined ? Object.keys(error).filter(function(key) {
            return error[key].length !== 0;
        }).length !== 0 : false;
    }

    function _hasErrorsIgnoreFields(error, fieldKeysToIgnore) {
        return error && Object.keys(error).filter(function(key) {
            return error[key] && error[key].length > 0 && fieldKeysToIgnore.indexOf(key) === -1;
        }).length !== 0;
    }

    function _isAdresCbsValid(address) {
        return Object.keys(address).filter(function(key) {
            return address[key] === false;
        }).length <= 1;
    }

    var isCustomerDataValid = (0, _Reselect.createSelector)([getCustomerData, getCustomerContact, getAddressMain, getAddressCorrespondence, getCustomerDataErrors, getCustomerContactErrors, getAddressCorrespondenceMapping, getMainAddressValidation, getCorrespondenceAddressValidation, getSalesOfGoodsProcess, getSalesOfAddonsProcess, getCustomerAddressErrors, isEmailFormValid], function(customerData, customerContact, addressMain, addressCorrespondence, customerDataErrors, customerContactErrors, addressCorrespondenceMapping, mainAddressValidation, correspondenceAddressValidation, isSalesOfGoodsProcess, isSalesOfAddonsProcess, customerAddressErrors, isEmailFormValid) {
        var isCorrespondenceAddress = addressCorrespondenceMapping === "correspondence";
        var isAddressCorrespondenceFilled = isCorrespondenceAddress ? _isAdresCbsValid(correspondenceAddressValidation) && _isStreetNumberFilled(addressCorrespondence) : true;
        var fieldKeysToIgnore = getCustomerFieldKeysToIgnore(customerData, isSalesOfGoodsProcess, isSalesOfAddonsProcess);
        var contactFieldKeysToIgnore = customerContact.customerNoEmail ? ["emailAddress"] : [];
        console.log("isSalesOfGoodsProcess ", isSalesOfGoodsProcess);
        console.log("isSalesOfAddonsProcess ", isSalesOfAddonsProcess);
        console.log("fieldKeysToIgnore ", fieldKeysToIgnore);
        return _isFormFilled(customerData, isSalesOfGoodsProcess, isSalesOfAddonsProcess) && _isFormFilled(customerContact) && _isAdresCbsValid(mainAddressValidation) && _isStreetNumberFilled(addressMain) && isAddressCorrespondenceFilled && !_hasErrorsIgnoreFields(customerDataErrors, fieldKeysToIgnore) && !_hasErrorsIgnoreFields(customerContactErrors, contactFieldKeysToIgnore) && !_hasErrorsIgnoreFields(customerAddressErrors, ["streetId", "townId"]) && !isEmailFormValid;
    });
    _exports.isCustomerDataValid = isCustomerDataValid;

    var getCustomerFieldKeysToIgnore = function getCustomerFieldKeysToIgnore(customer, isSogProcess, isSoaProcess) {
        var keysToIgnore = [];

        if (customer.isBusinessClient) {
            keysToIgnore = keysToIgnore.concat(["firstName", "lastName", "pesel", "identificationNumber", "identificationExpirationDate", "idNumber"]);
        } else {
            keysToIgnore = keysToIgnore.concat(["companyName", "nip", "regon"]);
        }

        if (customer.foreigner) {
            keysToIgnore = keysToIgnore.concat(["idNumber"]);

            if (customer.noPesel) {
                keysToIgnore = keysToIgnore.concat(["pesel"]);
            } else {
                keysToIgnore = keysToIgnore.concat(["gender"]);
            }

            if ("UE_CERTIFICATE" !== customer.identification) {
                keysToIgnore = keysToIgnore.concat(["identificationRegistrationDate"]);
            } else if ("UE_CERTIFICATE" === customer.identification) {
                keysToIgnore = keysToIgnore.concat(["identificationExpirationDate"]);
            }
        } else {
            keysToIgnore = keysToIgnore.concat(["country", "identification", "identificationNumber", "identificationExpirationDate", "identificationRegistrationDate", "gender"]);
        }

        if (isSogProcess || isSoaProcess) {
            keysToIgnore = keysToIgnore.concat(["pesel", "identificationNumber", "identificationExpirationDate", "identificationRegistrationDate", "idNumber"]);
        }

        return keysToIgnore;
    };

    var isNotNecessaryToCheckDocument = (0, _Reselect.createSelector)(getConvergentEntries, function(convergentEntries) {
        return convergentEntries.length > 0 && convergentEntries.every(function(entry) {
            return (0, _MiniCartUtils2.is2UCartEntry)(entry) || (0, _MiniCartUtils2.is4UCartEntry)(entry);
        });
    });
    _exports.isNotNecessaryToCheckDocument = isNotNecessaryToCheckDocument;
    var isDocumentSelected = (0, _Reselect.createSelector)([getCvDocumentsList, getSelectedCvDocument, isNotNecessaryToCheckDocument], function(cvDocumentsList, selectedCvDocument, notNecessaryToCheckDocument) {
        //selectedCvDocument is string, doc.id is int
        return notNecessaryToCheckDocument || cvDocumentsList.some(function(doc) {
            return doc.id === +selectedCvDocument;
        });
    });
    _exports.isDocumentSelected = isDocumentSelected;
    var isCVPhoneFilled = (0, _Reselect.createSelector)([getCvDocumentsList, getSelectedCvDocument, getDocumentCustomerWorkPhoneNumber, getCvDocumentsErrors, isNotNecessaryToCheckDocument], function(cvDocumentsList, selectedCvDocument, customerWorkPhoneNumber, cvDocErrors, notNecessaryToCheckDocument) {
        //selectedCvDocument is string, doc.id is int
        var selectedDoc = cvDocumentsList.find(function(doc) {
            return doc.id === +selectedCvDocument;
        });
        var phoneNeeded = !!selectedDoc && selectedDoc.isNeededTextField;
        var isPhoneCorrect = !cvDocErrors || !cvDocErrors["customerWorkPhoneNumber"] || cvDocErrors["customerWorkPhoneNumber"].length === 0;
        return notNecessaryToCheckDocument || !phoneNeeded || !!customerWorkPhoneNumber && isPhoneCorrect;
    });
    _exports.isCVPhoneFilled = isCVPhoneFilled;
    var isRetentionBonusesDataFilled = (0, _Reselect.createSelector)([_selectors.getMobileCartEntries, _selectors.getMobileVasesRaw], function(entries, mobileVas) {
        var retentionEntriesCount = 0;
        var filledRetentionBonuses = 0;
        console.log("isRetentionBonusesDataFilled ");

        if (!!mobileVas && !!mobileVas.find(function(mv) {
                return mv.process === "RETENTION";
            }) && !!mobileVas.find(function(mv) {
                return mv.process === "RETENTION";
            }).categorizedBonuses["RetentionBonuses"]) {
            var retentionBonuses = mobileVas.find(function(mv) {
                return mv.process === "RETENTION";
            }).categorizedBonuses["RetentionBonuses"].services;

            if (!retentionBonuses || retentionBonuses.length <= 0) {
                return true;
            }

            entries.filter(function(entry) {
                return entry.processType === "RETENTION";
            }).forEach(function(entry) {
                retentionEntriesCount++;

                if (!entry.vases || entry.vases.length === 0) {
                    console.log("NO RETENTION BONUS SELECTED FOR:", entry);
                    return false;
                }

                retentionBonuses.forEach(function(rb) {
                    console.log("RETENTION BONUS", rb.id);
                    console.log(entry.vases.find(function(vas) {
                        console.log(vas.productCode);
                        return vas.productCode == rb.id;
                    }));

                    if (entry.vases.find(function(vas) {
                            console.log(vas.productCode);
                            return vas.productCode == rb.id;
                        })) {
                        console.log("RETENTION BONUS FOUND ");
                        filledRetentionBonuses++;
                    }
                });
            });
            console.log("RETENTION BONUSES SELECTED? ", !!(retentionEntriesCount == filledRetentionBonuses));
            console.log("retentionEntriesCount ", retentionEntriesCount);
            console.log("filledRetentionBonuses ", filledRetentionBonuses);
            return retentionEntriesCount <= filledRetentionBonuses;
        }

        return true;
    });
    _exports.isRetentionBonusesDataFilled = isRetentionBonusesDataFilled;
    var isMnpDataFilled = (0, _Reselect.createSelector)([getMnpData, _selectors.getCartIsNet], function(mnpData, isB2B) {
        if (Object.getOwnPropertyNames(mnpData).length === 0) {
            return true;
        }

        var x = mnpData.map(function(entry) {
            if (_OnlineUtils.default.isMnpApplicationSecondStep(entry.processType)) {
                return true;
            }

            if (!entry.offerType) {
                return false;
            }

            if (!entry.agreementType) {
                return false;
            }

            if (!isB2B) {
                if (entry.agreementType === "2") {
                    if (!entry.businessName) {
                        return false;
                    }

                    if (entry.identifier === "NIP" && !entry.nip) {
                        return false;
                    }

                    if (entry.identifier === "REGON" && !entry.regon) {
                        return false;
                    }

                    if (entry.isHeadquartersAddressSame === false && (!entry.postalCode || !entry.city || !entry.houseNumber)) {
                        return false;
                    }
                }
            } else if (isB2B && entry.agreementType === "1") {
                if (!entry.firstName || !entry.lastName || !entry.pesel || !entry.idNumber) {
                    return false;
                }
            }

            return entry.migrationMode === "END" || !!entry.date;
        });
        return x[0];
    });
    _exports.isMnpDataFilled = isMnpDataFilled;
    var isMnpDataValid = (0, _Reselect.createSelector)([getMnpData, _selectors.getCartIsNet], function(mnpData, isB2B) {
        return Object.getOwnPropertyNames(mnpData).length === 0 || mnpData.map(function(entry) {
            var entryErrors = _objectSpread({}, entry.errors);

            if (isB2B) {
                if (entry.agreementType === "3" || entry.agreementType === "2") {
                    entryErrors.firstName = [];
                    entryErrors.lastName = [];
                    entryErrors.pesel = [];
                    entryErrors.idNumber = [];
                    entryErrors.businessName = [];
                    entryErrors.identifier = [];
                    entryErrors.nip = [];
                    entryErrors.regon = [];
                    entryErrors.isHeadquartersAddressSame = [];
                } else if (entry.agreementType === "1") {
                    entryErrors.businessName = [];
                    entryErrors.identifier = [];
                    entryErrors.nip = [];
                    entryErrors.regon = [];

                    if (entry.isHeadquartersAddressSame === true) {
                        entryErrors.postalCode = [];
                        entryErrors.street = [];
                        entryErrors.city = [];
                        entryErrors.houseNumber = [];
                        entryErrors.flatNumber = [];
                    }
                }
            }

            if (!isB2B) {
                entryErrors.firstName = [];
                entryErrors.pesel = [];
                entryErrors.idNumber = [];
                entryErrors.lastName = [];

                if (entry.agreementType === "1") {
                    entryErrors.businessName = [];
                    entryErrors.identifier = [];
                    entryErrors.nip = [];
                    entryErrors.regon = [];
                    entryErrors.isHeadquartersAddressSame = [];
                } else if (entry.agreementType === "2") {
                    if (entry.identifier === "NIP") {
                        entryErrors.regon = [];
                    } else if (entry.identifier === "REGON") {
                        entryErrors.nip = [];
                    }
                }

                if (entry.agreementType === "1" || entry.isHeadquartersAddressSame === true) {
                    entryErrors.postalCode = [];
                    entryErrors.street = [];
                    entryErrors.city = [];
                    entryErrors.houseNumber = [];
                    entryErrors.flatNumber = [];
                }
            }

            if (entry.migrationMode === "EOP") {
                entryErrors.date = [];
            }

            return Object.getOwnPropertyNames(entryErrors).map(function(key) {
                return entryErrors[key];
            }).reduce(function(prevErrors, nextErrors) {
                return [].concat(babelHelpers.toConsumableArray(prevErrors), babelHelpers.toConsumableArray(nextErrors));
            });
        }).reduce(function(prevErrors, nextErrors) {
            return [].concat(babelHelpers.toConsumableArray(prevErrors), babelHelpers.toConsumableArray(nextErrors));
        }, []).length === 0;
    });
    _exports.isMnpDataValid = isMnpDataValid;
    var getApuState = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.apu.isApuSelected;
    });
    _exports.getApuState = getApuState;
    var getReturnDocumentLoader = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.returnDocument.returnDocumentLoader;
    });
    _exports.getReturnDocumentLoader = getReturnDocumentLoader;
    var getConsentDocumentsPrintState = (0, _Reselect.createSelector)([getCheckoutState, getCurrentStepId], function(checkout, currentStep) {
        if ("customer-data" === currentStep) {
            return checkout.consents.consentDocumentsPrintState;
        }

        return true;
    });
    _exports.getConsentDocumentsPrintState = getConsentDocumentsPrintState;
    var getIsCustomerDataStep = (0, _Reselect.createSelector)(getCurrentStepId, function(stepId) {
        return stepId === "customer-data";
    });
    _exports.getIsCustomerDataStep = getIsCustomerDataStep;
    var getIsCartStep = (0, _Reselect.createSelector)(getCurrentStepId, function(stepId) {
        return stepId === "cart-contents";
    });
    _exports.getIsCartStep = getIsCartStep;
    var getDeliveryAndPaymentStep = (0, _Reselect.createSelector)(getCurrentStepId, function(stepId) {
        return stepId === "delivery-payment";
    });
    _exports.getDeliveryAndPaymentStep = getDeliveryAndPaymentStep;
    var getConsentTypeInPrintConsentsValidator = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.consents.consentTypeInPrintConsentsValidator;
    });
    _exports.getConsentTypeInPrintConsentsValidator = getConsentTypeInPrintConsentsValidator;
    var isWZRKConsentValid = (0, _Reselect.createSelector)([getCheckoutConsents, getConsentsCheckoutData, getConsentTypeInPrintConsentsValidator], function(consents, selectedStates, consentType) {
        return !consents.filter(function(consent) {
            return consent.type === consentType;
        }).find(function(consent) {
            return !(0, _utils.validateConsent)(consent, selectedStates);
        });
    });
    _exports.isWZRKConsentValid = isWZRKConsentValid;
    var isPrintConsentDocumentsButtonEnabled = (0, _Reselect.createSelector)([isWZRKConsentValid, isDeliveryAddressValid, isCustomerDataValid, isRepresentativeDataValid, _selectors.getCartIsNet], function(isWZRKConsentValid, isDeliveryAddressValid, isCustomerDataValid, isRepresentativeDataValid, getCartIsNet) {
        return !getCartIsNet ? isDeliveryAddressValid && isCustomerDataValid : isDeliveryAddressValid && isCustomerDataValid && isRepresentativeDataValid;
    });
    _exports.isPrintConsentDocumentsButtonEnabled = isPrintConsentDocumentsButtonEnabled;

    var getDocumentsState = function getDocumentsState(state) {
        return state["documents"];
    };

    _exports.getDocumentsState = getDocumentsState;
    var getDocumentsItems = (0, _Reselect.createSelector)(getDocumentsState, function(documents) {
        return documents.items;
    });
    _exports.getDocumentsItems = getDocumentsItems;
    var getDocumentsLinks = (0, _Reselect.createSelector)(getDocumentsState, function(documents) {
        return documents.links;
    });
    _exports.getDocumentsLinks = getDocumentsLinks;
    var getShouldSignDocuments = (0, _Reselect.createSelector)([getSelectedMethodForDocuments, getDocumentsItems], function(methodForDocuments, documentItems) {
        return _DeliveryMethod.default.POS === methodForDocuments && !!documentItems && documentItems.some(function(doc) {
            return doc.signable;
        });
    });
    _exports.getShouldSignDocuments = getShouldSignDocuments;
    var getCheckoutAgreement = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.agreement;
    });
    var getAgreementIntroductionStatuses = (0, _Reselect.createSelector)(getCheckoutAgreement, function(agreement) {
        return agreement.introductionStatuses;
    });

    var getAgreementIntroductionStatusForBundle = function getAgreementIntroductionStatusForBundle(bundleNo) {
        return (0, _Reselect.createSelector)(getCheckoutAgreement, function(agreement) {
            return agreement.introductionStatuses[bundleNo] ? agreement.introductionStatuses[bundleNo] : 'TO_INTRODUCE';
        });
    };

    _exports.getAgreementIntroductionStatusForBundle = getAgreementIntroductionStatusForBundle;

    var isComplexAgreementLoadingForBundle = function isComplexAgreementLoadingForBundle(bundleNo) {
        return (0, _Reselect.createSelector)(getCheckoutAgreement, function(agreement) {
            return !!agreement.documentLoadings[bundleNo];
        });
    };

    _exports.isComplexAgreementLoadingForBundle = isComplexAgreementLoadingForBundle;
    var allComplexDocumentsAreAccepted = (0, _Reselect.createSelector)([_selectors.getMobileCartEntries, getAgreementIntroductionStatuses], function(cartEntries, introductionStatuses) {
        return cartEntries.every(function(cartEntry) {
            return introductionStatuses[cartEntry.bundleNo] === 'ACCEPTED';
        });
    });
    _exports.allComplexDocumentsAreAccepted = allComplexDocumentsAreAccepted;

    var getDocumentCodesToMergeForBundle = function getDocumentCodesToMergeForBundle(bundleNo) {
        return (0, _Reselect.createSelector)(getCheckoutAgreement, function(agreement) {
            var documentsToMerge = agreement.documentsToMergePerBundle.find(function(bundleMergeDocuments) {
                return bundleMergeDocuments.bundleNo === bundleNo;
            });

            if (documentsToMerge) {
                return documentsToMerge.documentCodes;
            }

            return [];
        });
    };

    _exports.getDocumentCodesToMergeForBundle = getDocumentCodesToMergeForBundle;
    var getDocumentsCodesToMerge = (0, _Reselect.createSelector)(getCheckoutAgreement, function(agreement) {
        return agreement.documentsToMergePerBundle;
    });
    _exports.getDocumentsCodesToMerge = getDocumentsCodesToMerge;
    var isDeliveryPhoneContactCorrect = (0, _Reselect.createSelector)([_selectors.getCartIsNet, getDeliveryPhoneContact, getSelectedDeliveryMethodId], function(isB2B, phoneContact, selectedMethodId) {
        if (isB2B && selectedMethodId === "courier") {
            return phoneContact.length === 0 || (0, _validation.phoneNumberRegexp)(phoneContact);
        }

        if (!isB2B && selectedMethodId === "courier") {
            return (0, _validation.phoneNumberRegexp)(phoneContact);
        }

        return true;
    });
    _exports.isDeliveryPhoneContactCorrect = isDeliveryPhoneContactCorrect;
    var areDeliveryConditionsMet = (0, _Reselect.createSelector)([getSelectedDeliveryMethod, getSelectedDeliveryMethods, isDeliveryAddressValid, getConvergentEntries, isPickupDeliveryValid, isDeliveryPhoneContactCorrect, getSelectedPointOfSaleId, getAgreementType, getDeliveryEmailAddress, getDeliveryEmailAddressErrors], function(selectedDeliveryMethod, selectedDeliveryMethods, deliveryAddressValid, convergentEntries, isPickupDeliveryValid, isDeliveryPhoneContactCorrect, selectedPointOfSaleId, agreementType, deliveryEmail, deliveryEmailErrors) {
        return (convergentEntries.length === 0 ? isMobileDeliveryValid(selectedDeliveryMethod, isPickupDeliveryValid, selectedPointOfSaleId) : _lodash.default.filter(selectedDeliveryMethods, function(method) {
            return method === "";
        }).length === 0) && (agreementType !== _AgreementType.default.PAPER || deliveryAddressValid) && (agreementType !== _AgreementType.default.DIGITAL || !!deliveryEmail && deliveryEmailErrors.length === 0) && (selectedDeliveryMethod.id !== _DeliveryMethod.default.COURIER || isDeliveryPhoneContactCorrect);
    });
    _exports.areDeliveryConditionsMet = areDeliveryConditionsMet;

    var isMobileDeliveryValid = function isMobileDeliveryValid(selectedDeliveryMethod, isPickupDeliveryValid, selectedPointOfSaleId) {
        if (selectedDeliveryMethod && _DeliveryMethod.default.PARCEL_LOCKER.toLowerCase() === selectedDeliveryMethod.id) {
            return !!selectedPointOfSaleId;
        }

        return selectedDeliveryMethod && isPickupDeliveryValid;
    };

    var isDuplicatedOrder = (0, _Reselect.createSelector)([_root.isDuplicateOrder, _root.hasAccessRoleToProcessDuplicateOrder], function(isDuplicateOrder, hasAccessRoleToProcessDuplicateOrder) {
        return isDuplicateOrder && !hasAccessRoleToProcessDuplicateOrder;
    });
    _exports.isDuplicatedOrder = isDuplicatedOrder;

    function isContactValid(customerContactErrors, deliveryPhoneContact) {
        if (customerContactErrors && customerContactErrors.phoneNumber && customerContactErrors.phoneNumber.length > 0 || deliveryPhoneContact == null || deliveryPhoneContact === "") {
            return false;
        }

        return true;
    }

    var isContactForDAPValid = (0, _Reselect.createSelector)([getInstallationPhoneContact, shouldSelectInstallation, getCustomerContactErrors, getDeliveryPhoneContact, getSelectedDeliveryMethods, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevices, getCurrentStepId, getInstallationPhoneContact], function(getInstallationPhoneContact, shouldSelectInstallation, customerContactErrors, deliveryPhoneContact, getSelectedDeliveryMethods, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevices, getCurrentStepId, installationPhoneContact) {
        if (shouldSelectInstallation) {
            if (customerContactErrors && customerContactErrors.phoneNumberDAP && customerContactErrors.phoneNumberDAP.length > 0) {
                return false;
            }

            if (installationPhoneContact.length !== 9 || !/^\d+$/.test(installationPhoneContact)) {
                return false;
            }
        }

        return true;
    });
    _exports.isContactForDAPValid = isContactForDAPValid;
    var isContactForCourierValid = (0, _Reselect.createSelector)([getCustomerContactErrors, getDeliveryPhoneContact, getSelectedDeliveryMethods, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevices, getCurrentStepId], function(customerContactErrors, deliveryPhoneContact, getSelectedDeliveryMethods, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevices, getCurrentStepId) {
        var COURIER = "courier";

        if (getCurrentStepId === "delivery-payment") {
            //fix or mobile
            if (getSelectedDeliveryMethods.fixDocuments === "") {
                if (getSelectedDeliveryMethod.id === COURIER || getSelectedDeliveryMethodForDevices.id === COURIER) {
                    return isContactValid(customerContactErrors, deliveryPhoneContact);
                }
            } else {
                //magnum
                if (getSelectedDeliveryMethods.fixDocuments && getSelectedDeliveryMethods.fixDocuments.id === COURIER || getSelectedDeliveryMethods.fixDevices && getSelectedDeliveryMethods.fixDevices.id === COURIER || getSelectedDeliveryMethods.mobile && getSelectedDeliveryMethods.mobile.id === COURIER) {
                    return isContactValid(customerContactErrors, deliveryPhoneContact);
                }
            }
        }

        return true;
    });
    _exports.isContactForCourierValid = isContactForCourierValid;
    var isConsentsInAcknowledgmentState = (0, _Reselect.createSelector)([getConsentAcknowledgmentsReadWhileTalking, getConsentDocumentStatus], function(isChecked, status) {
        return isChecked || status === "COMPLETED";
    }); //wrzucic warunki do oddzielnego pliku

    _exports.isConsentsInAcknowledgmentState = isConsentsInAcknowledgmentState;
    var isNextStepAvailable = (0, _Reselect.createSelector)([allConsentsValid, getApuState, getConsentDocumentsPrintState, isDoingCheckoutStep, getRegisteredCheckoutConditions, getSelectedPaymentMethod, isCustomerDataValid, isRepresentativeDataValid, isMnpDataValid, isMnpDataFilled, isBillingComponentValid, isDuplicatedOrder, isFixRepresentativeDataValid, isEmailFormValid, getDeliveryAndPaymentStep, getSelectedDeliveryMethod, isConsentsInAcknowledgmentState], function(consentValidation, apuValidation, getConsentDocumentsPrintState, inProgress, conditions, selectedPaymentMethod, customerDataValid, representativeDataValid, isMnpDataValid, isMnpDataFilled, isBillingComponentValid, isDuplicatedOrder, isFixRepresentativeDataValid, isEmailFormValid, isDeliveryAndPaymentStep, selectedDeliverMethod, isConsentsInAcknowledgmentState) {
        return !inProgress && (isDeliveryAndPaymentStep || !conditions["consents"] || consentValidation) && (!conditions["customerData"] || customerDataValid && representativeDataValid) && (!conditions["fixRepresentativeData"] || isFixRepresentativeDataValid) && (!conditions["mnpData"] || isMnpDataValid && isMnpDataFilled) && (!conditions["apuData"] || apuValidation) && (!conditions["consentDocuments"] || getConsentDocumentsPrintState) && (!conditions["billingAccount"] || isBillingComponentValid) && !isDuplicatedOrder && !isEmailFormValid && !(isDeliveryAndPaymentStep && selectedDeliverMethod && _DeliveryMethod.default.ACCOUNT_MANAGER == selectedDeliverMethod.id) && (!conditions["consentsAcknowledgment"] || isConsentsInAcknowledgmentState);
    });
    _exports.isNextStepAvailable = isNextStepAvailable;
    var getPickup = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.pickup;
    });
    _exports.getPickup = getPickup;
    var posSimCardTypes = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.simCardTypes;
    });
    _exports.posSimCardTypes = posSimCardTypes;
    var pickupSerialNumbers = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.serialNumbers;
    });
    _exports.pickupSerialNumbers = pickupSerialNumbers;
    var getReservationStatus = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.reservationStatus;
    });
    _exports.getReservationStatus = getReservationStatus;
    var getGoodsOrderPaymentStatus = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.goodsOrderPaymentStatus;
    });
    _exports.getGoodsOrderPaymentStatus = getGoodsOrderPaymentStatus;
    var getPaymentOverrideStatus = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.paymentOverride;
    });
    _exports.getPaymentOverrideStatus = getPaymentOverrideStatus;
    var getPaymentAndFiscalizationLoaded = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.paymentAndFiscalizationLoaded;
    });
    _exports.getPaymentAndFiscalizationLoaded = getPaymentAndFiscalizationLoaded;
    var getPickupReplanishmentRequiredErrors = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.pickupReplanishmentRequired;
    });
    _exports.getPickupReplanishmentRequiredErrors = getPickupReplanishmentRequiredErrors;
    var getNavigationLoading = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.navigationLoading;
    });
    _exports.getNavigationLoading = getNavigationLoading;
    var getLastOrder = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.lastOrder;
    });
    _exports.getLastOrder = getLastOrder;
    var getOrderCanceled = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.canceled;
    });
    _exports.getOrderCanceled = getOrderCanceled;
    var getPickupError = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.generalError;
    });
    _exports.getPickupError = getPickupError;

    function firstPickupErrorWhenExists(pickup) {
        return pickup.generalError[0] ? pickup.generalError[0] : pickup.generalError;
    }

    var getFirstPickupError = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.generalError && pickup.generalError.length > 0 ? firstPickupErrorWhenExists(pickup) : "";
    });
    _exports.getFirstPickupError = getFirstPickupError;
    var getPickupDocuments = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.documents;
    });
    _exports.getPickupDocuments = getPickupDocuments;
    var getPickupDocumentLinks = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.documentlinks;
    });
    _exports.getPickupDocumentLinks = getPickupDocumentLinks;
    var getDownloadedDocumentCode = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.documentDownloaded;
    });
    _exports.getDownloadedDocumentCode = getDownloadedDocumentCode;
    var getPickupSerialNumberErrors = (0, _Reselect.createSelector)(getPickup, function(pickup) {
        return pickup.serialNumberError;
    });
    _exports.getPickupSerialNumberErrors = getPickupSerialNumberErrors;

    var documentsPrinted = function documentsPrinted(documents, links) {
        var required = Object.keys(documents).reduce(function(array, key) {
            return array.concat(documents[key]);
        }, []).filter(function(document) {
            return document.signable;
        });
        return required.every(function(document) {
            return !!links && links.hasOwnProperty(document.documentCode + "_" + document.bundleNo);
        });
    };

    var signableDocumentsPrintedPickup = (0, _Reselect.createSelector)([getPickupDocuments, getDocumentsLinks, areAllDocumentsSaved], function(documents, links, allDocumentsSaved) {
        return documentsPrinted(documents, links) || allDocumentsSaved;
    });
    _exports.signableDocumentsPrintedPickup = signableDocumentsPrintedPickup;
    var signableDocumentsPrinted = (0, _Reselect.createSelector)([getDocumentsItems, getDocumentsLinks, areAllDocumentsSaved], function(documents, links, allDocumentsSaved) {
        return documentsPrinted(documents, links) || allDocumentsSaved;
    });
    _exports.signableDocumentsPrinted = signableDocumentsPrinted;
    var getAssistModeStateFromStore = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.assistMode;
    });
    _exports.getAssistModeStateFromStore = getAssistModeStateFromStore;
    var getAssistModeStateData = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.assistModeState;
    });
    _exports.getAssistModeStateData = getAssistModeStateData;
    var getAssistModeModalStateData = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.modalAssistModeState;
    });
    _exports.getAssistModeModalStateData = getAssistModeModalStateData;
    var getAssistModeConfirmationModalStateData = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.confirmationModalState;
    });
    _exports.getAssistModeConfirmationModalStateData = getAssistModeConfirmationModalStateData;
    var getEmployeeList = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.employeeList;
    });
    _exports.getEmployeeList = getEmployeeList;
    var getEmployeeListFilters = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.filters;
    });
    _exports.getEmployeeListFilters = getEmployeeListFilters;
    var isLoadingEmployeeList = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.isLoadingEmployeeList;
    });
    _exports.isLoadingEmployeeList = isLoadingEmployeeList;
    var getSelectedEmployee = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.selectedEmployee;
    });
    _exports.getSelectedEmployee = getSelectedEmployee;
    var getCurrentPage = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.page;
    });
    _exports.getCurrentPage = getCurrentPage;
    var getFilterEnabled = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.filterEnabled;
    });
    _exports.getFilterEnabled = getFilterEnabled;
    var isLoadingAssistModeState = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.isLoadingAssistModeState;
    });
    _exports.isLoadingAssistModeState = isLoadingAssistModeState;
    var getAssistModeConfirmationLeaveModalStateData = (0, _Reselect.createSelector)(getAssistModeStateFromStore, function(assistMode) {
        return assistMode.confirmationLeaveModalState;
    });
    _exports.getAssistModeConfirmationLeaveModalStateData = getAssistModeConfirmationLeaveModalStateData;
    var isEarlierInstallationConsentNotAcceptedModalVisible = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.earlierInstallationConsentNotAcceptedModalIsVisible;
    });
    _exports.isEarlierInstallationConsentNotAcceptedModalVisible = isEarlierInstallationConsentNotAcceptedModalVisible;
    var isEarlierInstallationConsentNotAcceptedModalIsAccepted = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.earlierInstallationConsentNotAcceptedModalIsAccepted;
    });
    _exports.isEarlierInstallationConsentNotAcceptedModalIsAccepted = isEarlierInstallationConsentNotAcceptedModalIsAccepted;
    var isEarlierInstallationConsentNotAcceptedModalMounted = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.earlierInstallationConsentNotAcceptedModalDidMount;
    });
    _exports.isEarlierInstallationConsentNotAcceptedModalMounted = isEarlierInstallationConsentNotAcceptedModalMounted;
    var isCourierDeliveryMethodModalVisible = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.courierDeliveryMethodModalVisible;
    });
    _exports.isCourierDeliveryMethodModalVisible = isCourierDeliveryMethodModalVisible;
    var isCourierDeliveryMethodModalMounted = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.courierDeliveryMethodModalDidMount;
    });
    _exports.isCourierDeliveryMethodModalMounted = isCourierDeliveryMethodModalMounted;
    var getCourierDeliveryMethodModalState = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.courierDeliveryMethodModalState;
    });
    _exports.getCourierDeliveryMethodModalState = getCourierDeliveryMethodModalState;
    var getEmailWarningModalState = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.emailWarningModalState;
    });
    var isEmailWarningModal = (0, _Reselect.createSelector)(getEmailWarningModalState, function(modalState) {
        return modalState.visible;
    });
    _exports.isEmailWarningModal = isEmailWarningModal;
    var getWarningModalDescriptionKey = (0, _Reselect.createSelector)(getEmailWarningModalState, function(modalState) {
        return modalState.descriptionKey;
    });
    _exports.getWarningModalDescriptionKey = getWarningModalDescriptionKey;

    function mergeDataAndErrors(data, errors) {
        var ret = data.map(function(item, index) {
            return _objectSpread({}, item, {
                errors: errors[index]
            });
        });
        return ret;
    }

    function makeBundleNoNullIfNecessary(rawConsentStates, getConsentsData) {
        var consents = getConsentsData.consents || [];
        var consentsMap = consents.reduce(function(map, obj) {
            map[obj.consentCode] = obj;
            return map;
        }, {});
        var ret = rawConsentStates.map(function(consentState) {
            var requestedConsent = consentsMap[consentState.consentCode];

            if (requestedConsent && !requestedConsent.msisdns && !requestedConsent.bundleAssignments[0]) {
                return _objectSpread({}, consentState, {
                    bundleNo: null
                });
            } else {
                return consentState;
            }
        });
        return removeDuplicates(ret, function(obj) {
            return obj.consentCode + obj.bundleNo;
        });
    }

    function removeDuplicates(array, hash) {
        var state = {};
        var ret = array.filter(function(notUnique) {
            var hashed = hash(notUnique);

            if (state[hashed]) {
                return false;
            } else {
                state[hashed] = "dummy";
                return true;
            }
        });
        return ret;
    }

    var getAllReservableCartEntries = (0, _Reselect.createSelector)([getSelectedDeliveryMethods, getSelectedMethodForDevices, _selectors.allCartEntries], function(selectedDeliveryMethods, selectedMethodForDevices, allCartEntries) {
        return allCartEntries.filter(function(entry) {
            var selectedDeliveryMethod;

            if (entry.entryType === _CartEntryTypeEnum.default.FIX) {
                selectedDeliveryMethod = selectedDeliveryMethods.fixDevices ? selectedDeliveryMethods.fixDevices.id : selectedMethodForDevices;
            } else {
                selectedDeliveryMethod = selectedDeliveryMethods.mobile ? selectedDeliveryMethods.mobile.id : "";
            }

            return selectedDeliveryMethod === "" || selectedDeliveryMethod === _DeliveryMethod.default.POS;
        });
    });
    _exports.getAllReservableCartEntries = getAllReservableCartEntries;
    var isRegisteredAgreementConfirmationComponent = (0, _Reselect.createSelector)(getConsentsData, function(consents) {
        return consents.isRegisteredAgreementConfirmationComponent;
    });
    _exports.isRegisteredAgreementConfirmationComponent = isRegisteredAgreementConfirmationComponent;
    var wasBonusAgreementConfirmationModalConfirmed = (0, _Reselect.createSelector)(getConsentsData, function(consents) {
        return consents.wasBonusAgreementConfirmationModalConfirmed;
    });
    _exports.wasBonusAgreementConfirmationModalConfirmed = wasBonusAgreementConfirmationModalConfirmed;
    var wasBigAndZonkAgreementConfirmationModalConfirmed = (0, _Reselect.createSelector)(getConsentsData, function(consents) {
        return consents.wasBigAndZonkAgreementConfirmationModalConfirmed;
    });
    _exports.wasBigAndZonkAgreementConfirmationModalConfirmed = wasBigAndZonkAgreementConfirmationModalConfirmed;
    var getShowAgreementConfirmationModal = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.showAgreementConfirmationModal;
    });
    _exports.getShowAgreementConfirmationModal = getShowAgreementConfirmationModal;
    var getAgreementConfirmationModalVariant = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.agreementConfirmationModalVariant;
    });
    _exports.getAgreementConfirmationModalVariant = getAgreementConfirmationModalVariant;
    var getExistingOrderOrCartValidation = (0, _Reselect.createSelector)(getCheckoutErrors, function(errors) {
        return errors.existingOrderOrCartValidation;
    });
    _exports.getExistingOrderOrCartValidation = getExistingOrderOrCartValidation;
    var getSectionForCourier = (0, _Reselect.createSelector)([getSelectedDeliveryMethods, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevices], function(getSelectedDeliveryMethods, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevices) {
        var DOCUMENTS_PACKAGE = "DOCUMENTS_PACKAGE";
        var DEVICES_PACKAGE = "DEVICES_PACKAGE";
        var EMPTY = "";
        var OTHER = "OTHER";
        var COURIER = "courier"; //fix or mobile

        if (getSelectedDeliveryMethods.fixDocuments === "") {
            if (getSelectedDeliveryMethod.id === COURIER) {
                return DOCUMENTS_PACKAGE;
            }

            if (getSelectedDeliveryMethodForDevices.id === COURIER) {
                return DEVICES_PACKAGE;
            }
        } else {
            //magnum
            if (getSelectedDeliveryMethods.fixDocuments && getSelectedDeliveryMethods.fixDocuments.id === COURIER) {
                return DOCUMENTS_PACKAGE;
            }

            if (getSelectedDeliveryMethods.fixDevices && getSelectedDeliveryMethods.fixDevices.id === COURIER) {
                return DEVICES_PACKAGE;
            }

            if (getSelectedDeliveryMethods.mobile && getSelectedDeliveryMethods.mobile.id === COURIER) {
                return EMPTY;
            }
        }

        return OTHER;
    });
    _exports.getSectionForCourier = getSectionForCourier;
    var getFixCartRefreshResult = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.fixCartRefreshResult;
    });
    _exports.getFixCartRefreshResult = getFixCartRefreshResult;
    var shouldShowModalAfterProcessChanged = (0, _Reselect.createSelector)(getFixCartRefreshResult, function(result) {
        return result && result.previousProcess === "ACTIVATION" && result.currentProcess === "ACTIVATION_NNAKED";
    });
    _exports.shouldShowModalAfterProcessChanged = shouldShowModalAfterProcessChanged;
    var getFactoryCart = (0, _Reselect.createSelector)(_selectors.getMiniCart, function(miniCart) {
        return miniCart && miniCart.entries && miniCart.entries.length > 0 ? miniCart.entries[0].entryType : "";
    });
    _exports.getFactoryCart = getFactoryCart;
    var selectedDeliveryMethodIsPickupOnEmail = (0, _Reselect.createSelector)([getSelectedDeliveryMethodCode, getAgreementType, getFactoryCart], function(selectedDeliveryMethod, agreementType, factory) {
        return _DeliveryMethod.default.PICKUP_ON_EMAIL === selectedDeliveryMethod || agreementType === _AgreementType.default.DIGITAL && (factory === 'MOBILE' || !factory);
    });
    _exports.selectedDeliveryMethodIsPickupOnEmail = selectedDeliveryMethodIsPickupOnEmail;
    var isIdVerificationNeeded = (0, _Reselect.createSelector)(_selectors.getMobileCartEntries, function(entries) {
        return entries && entries.length > 0 && entries.some(function(entry) {
            return "ID_VERIFICATION_NEEDED" === entry.eagreementAvailabilityStatus;
        });
    });
    var getIdVerificationState = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.idVerification;
    });
    var getIdVerificationBanks = (0, _Reselect.createSelector)(getIdVerificationState, function(idVerification) {
        return idVerification.banks;
    });
    _exports.getIdVerificationBanks = getIdVerificationBanks;
    var getIdVerificationResult = (0, _Reselect.createSelector)(getIdVerificationState, function(idVerification) {
        return idVerification.verificationResult;
    });
    _exports.getIdVerificationResult = getIdVerificationResult;
    var getIdVerificationSelectedBankId = (0, _Reselect.createSelector)(getIdVerificationResult, function(idVerificationResult) {
        return idVerificationResult.selectedBankId;
    });
    _exports.getIdVerificationSelectedBankId = getIdVerificationSelectedBankId;
    var getIdVerificationStatus = (0, _Reselect.createSelector)(getIdVerificationResult, function(idVerificationResult) {
        return idVerificationResult.status;
    });
    _exports.getIdVerificationStatus = getIdVerificationStatus;
    var isIdVerificationRequired = (0, _Reselect.createSelector)([selectedDeliveryMethodIsPickupOnEmail, customerHasActiveContracts, isIdVerificationNeeded], function(selectedDeliveryMethodIsPickupOnEmail, customerHasActiveContracts, isIdVerificationNeeded) {
        return selectedDeliveryMethodIsPickupOnEmail && !customerHasActiveContracts || isIdVerificationNeeded;
    });
    _exports.isIdVerificationRequired = isIdVerificationRequired;
    var isIdVerificationFailedOrEmpty = (0, _Reselect.createSelector)(getIdVerificationStatus, function(status) {
        return !status || status === "FAIL";
    });
    _exports.isIdVerificationFailedOrEmpty = isIdVerificationFailedOrEmpty;
    var isIdVerificationRequiredAndNotVerified = (0, _Reselect.createSelector)([isIdVerificationRequired, getIdVerificationSelectedBankId, getIdVerificationStatus], function(isIdVerificationRequired, selectedBankId, status) {
        return isIdVerificationRequired && selectedBankId && !['SUCCESS', 'IN_PROGRESS'].includes(status);
    });
    _exports.isIdVerificationRequiredAndNotVerified = isIdVerificationRequiredAndNotVerified;
    var isIdVerificationRequiredAndSucceed = (0, _Reselect.createSelector)([isIdVerificationRequired, getIdVerificationSelectedBankId, getIdVerificationStatus], function(isIdVerificationRequired, selectedBankId, status) {
        return isIdVerificationRequired && selectedBankId && status === 'SUCCESS';
    }); // Summary

    _exports.isIdVerificationRequiredAndSucceed = isIdVerificationRequiredAndSucceed;
    var getSummary = (0, _Reselect.createSelector)(getCheckoutState, function(checkout) {
        return checkout.summary;
    });
    var getOrderFactoryForSummary = (0, _Reselect.createSelector)(getSummary, function(summary) {
        return summary && summary.orderSummary.entries && summary.orderSummary.entries.length > 0 ? summary.orderSummary.entries[0].entryType : "";
    });
    _exports.getOrderFactoryForSummary = getOrderFactoryForSummary;
    var getSalesChannelForSummary = (0, _Reselect.createSelector)(getSummary, function(summary) {
        return summary && summary.salesChannel;
    });
    _exports.getSalesChannelForSummary = getSalesChannelForSummary;
    var isFullPageLoader = (0, _Reselect.createSelector)(getMetadata, function(metadata) {
        return metadata.fullPageLoader;
    });
    _exports.isFullPageLoader = isFullPageLoader;
    var allFixDeliveryMethods = (0, _Reselect.createSelector)(getDelivery, function(delivery) {
        return delivery.methods.length > 0 && delivery.methods.every(function(method) {
            return method.factory === "FIX";
        });
    });
    _exports.allFixDeliveryMethods = allFixDeliveryMethods;
    var noERegulationsConsent = (0, _Reselect.createSelector)(getConsentsStatesData, function(consentStates) {
        var eRegulationsConsentState = consentStates.find(function(consentState) {
            return consentState.consentCode === "21_CONV";
        });
        return eRegulationsConsentState && eRegulationsConsentState.stateCode === "NO_21_CONV";
    });
    _exports.noERegulationsConsent = noERegulationsConsent;
    var getPreparedSimRequestFragment = (0, _Reselect.createSelector)([reservationData, getAllReservableCartEntries], function(reservation, entries) {
        var sims = [];
        entries.filter(function(entry) {
            return entry.isSim && entry.msisdn && entry.simCard.reservable;
        }).map(function(entry) {
            var sim = {};
            sim.bundle = entry.bundleNo;
            sim.hasSerial = true;
            console.log(reservation.simCardTypes && Object.keys(reservation.simCardTypes).length > 0);

            if (reservation.simCardTypes && Object.keys(reservation.simCardTypes).length > 0) {
                var simType = reservation.simCardTypes[entry.bundleNo] ? reservation.simCardTypes[entry.bundleNo] : "";
                var simTypeDefinition = reservation.simCardTypeDefinitions.find(function(sim) {
                    return sim.baseCode === simType;
                });
                sim.sku = simTypeDefinition ? simTypeDefinition.sku : "";
            }

            sim.serialNumber = reservation.serialNumbers[entry.productCode + "_" + entry.bundleOmniCode];
            sim.type = "SIM_CARD";
            sim.msisdn = entry.msisdn;
            sims.push(sim);
        });
        return sims;
    });
    _exports.getPreparedSimRequestFragment = getPreparedSimRequestFragment;
    var simCardSerialNumberFilled = (0, _Reselect.createSelector)([reservationData, serialNumbersFilled, cartContainsReservableItems], function(reservation, serialNumbersFilled, cartContainsReservableItems) {
        return !cartContainsReservableItems || serialNumbersFilled && reservation.verifySerialNumberError === "" && reservation.agencyPosStatusValid;
    });
    _exports.simCardSerialNumberFilled = simCardSerialNumberFilled;
    var getConsentSections = (0, _Reselect.createSelector)([getConsentsData], function(consentsData) {
        var conf = consentsData.conf || [];
        return conf.map(function(consentConfig) {
            return {
                isRequiredConsent: !!consentConfig.isRequired,
                sectionDescription: consentConfig.groupTitle,
                consentsCode: consentConfig.consentsCode
            };
        });
    });
    _exports.getConsentSections = getConsentSections;
});
//# sourceMappingURL=selectors.js.map