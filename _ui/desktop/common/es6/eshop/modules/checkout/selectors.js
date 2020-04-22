import {
    createSelector
} from "Reselect";
import _ from "lodash";

import {
    selectors as cbs
} from "../cbs/main";
import {
    allCartEntries,
    cartHasMobileDevices,
    getBundlesProcessType,
    getCartIsNet,
    getInvoiceData,
    getKdrCheckoutData,
    getMiniCart,
    getMobileCartDevices,
    getMobileCartEntries,
    getMobileVasesRaw,
    isCartFix,
    isCartMobile
} from "../cart/selectors";
import {
    isNewAgreementInDocuments
} from "../documents/selectors"
import DeliveryMethodFactory from "./constants/DeliveryMethodFactoryEnum";
import DeliveryMethodMode from "./constants/DeliveryMethodModeEnum";
import CartEntryType from "./constants/CartEntryTypeEnum";
import {
    like,
    validateConsent
} from "./utils/utils";
import DeliveryMethod from "./constants/DeliveryMethod";
import {
    emptyBusinessData,
    emptyForeignerPersonalData,
    emptyPersonalData,
    emptyPolishPersonalData,
} from "./reducers/helperObjects";
import {
    isDeliveryMethodRequired,
    isDeliveryMethodSelected
} from "./components/delivery/deliveryMethodHelpers";
import {
    hasAccessRoleToProcessDuplicateOrder,
    isDuplicateOrder
} from "eshop/modules/fix/selectors/root";
import {
    fixCustomerCheckoutData,
    toUpperCase
} from "../checkout/utils/utils";
import {
    cartContainsEsim,
    cartEntriesContainsReservableItems,
    entryContainsReservableSimCard,
} from "../checkout/utils/MiniCartUtils"
import {
    areSerialNumbersFilled
} from "./actions/app"
import {
    is2UCartEntry,
    is4UCartEntry
} from "./utils/MiniCartUtils";
import {
    phoneNumberRegexp
} from "eshop/modules/core/validation";
import AgreementType from "./constants/AgreementType";
import EmailWarningDescriptionEnum from "./constants/EmailWarningDescriptionEnum";
import OnlineUtils from 'eshop/utils/OnlineUtils';

export const getCheckoutState = state => state["checkout"];

export const getCheckoutConditions = createSelector(getCheckoutState, checkout => checkout.conditions);
export const getRegisteredCheckoutConditions = createSelector(getCheckoutConditions, checkout => checkout.registered);
export const checkoutConditionIsRegistered = condition => createSelector(getRegisteredCheckoutConditions, registeredConditions => registeredConditions[condition]);

// CHECKOUT NAVIGATION
export const isDoingCheckoutStep = createSelector(getCheckoutState, checkout => checkout.navigation.inProgress);

// PROCESS TYPE
export const getSalesOfGoodsProcess = createSelector(getBundlesProcessType, processType => {
    return processType.length !== 0 ? _countEntriesForProcess(processType, "SALE_OF_GOODS") === processType.length : false;
});

export const getSalesOfAddonsProcess = createSelector(getBundlesProcessType, processType => {
    return processType.length !== 0 ? _countEntriesForProcess(processType, "SALE_OF_ADDONS") === processType.length : false;
});

export const getCheckoutErrors = createSelector(getCheckoutState, checkout => checkout.errors);
export const getFbbServices = createSelector(getCheckoutState, checkout => checkout.fbbServices.fbbServices);
export const getSelectedDesignationNumber = createSelector(getCheckoutState, checkout => checkout.fbbServices.selectedDesignationNumber);
export const getSelectedServiceInstanceId = createSelector(getCheckoutState, checkout => checkout.fbbServices.selectedServiceInstanceId);
export const getFrontValidationMsg = createSelector(getCheckoutErrors, errors => errors.frontValidationMsg);
export const getAuthCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.auth);
export const isAuthNeeded = createSelector(getCheckoutErrors, errors => (errors.auth != null && errors.auth.length > 0));
export const isCallbackNeeded = createSelector(getCheckoutErrors, errors => (errors.callback != null && errors.callback.length > 0));
export const getCvCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.cv);
export const getCvMagnumCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.cvMagnum);
export const getManualCvCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.manual);
export const getCVWithDepositErrors = createSelector(getCheckoutErrors, errors => errors.cvWithDeposit);
export const getCheckoutErrorsArray = createSelector(getCheckoutErrors, errors => errors.backendValidation.concat(errors.cim, errors.order, errors.data));
export const getOutOfStockCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.stock);
export const getNeedSearchCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.needsearch);
export const getCimConsistentCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.cimconsenterror);
export const getMnpNoEmailCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.noemailmnp);
export const getCheckoutReservationErrorsArray = createSelector(getCheckoutErrors, errors => errors.reservation);
export const getFixClientExistsCheckoutErrors = createSelector(getCheckoutErrors, errors => errors.fixCustomerExists);
export const getFixAppartmentNoValidation = createSelector(getCheckoutErrors, errors => errors.fixAppartmentNoValidation);

// CUSTOMER DATA
export const getCustomer = createSelector(getCheckoutState, checkout => checkout.customer);
export const getCustomerData = createSelector(getCustomer, customer => customer.data);
export const isBusinessClient = createSelector(getCustomerData, data => data.isBusinessClient);
export const isForeignerAvailable = createSelector(getCustomerData, data => data.foreignerAvailable);
export const getCustomerContact = createSelector(getCustomer, customer => customer.contact);
export const getCustomerNoEmail = createSelector(getCustomerContact, contact => contact.customerNoEmail);
export const getCustomerEmailAddress = createSelector(getCustomerContact, contact => contact.emailAddress);
export const isExistingCustomer = createSelector(getCustomer, customer => customer.existing);
export const hasFixAddress = createSelector(getCustomer, customer => customer.hasFixAddress);
export const isCustomerModified = createSelector(getCustomer, customer => customer.modified);
export const isDisabledIdNumber = createSelector(getCustomerData, data => data.disabledIdNumber);
export const getCustomerCompanyName = createSelector(getCustomerData, data => data.companyName);
export const customerHasActiveContracts = createSelector(getCustomerData, data => !!data.hasActiveContracts);

export const getLegalForm = createSelector(getCustomerData, data => data.legalForm);

export const isForeignerCheckboxAvailable = createSelector([isBusinessClient, isForeignerAvailable], (isBusinessClient, isForeignerAvailable) => {
    return !isBusinessClient && isForeignerAvailable;
});

// LEAD
export const getInvestment = createSelector(getCheckoutState, checkout => checkout.investment);
export const getInvestmentData = createSelector(getInvestment, investment => investment.lead);
export const getInvestmentConsent = createSelector(getInvestment, investment => investment.consent);
export const getInvestmentOffers = createSelector(getInvestment, investment => investment.offers.offers);

// BILLING ACCOUNT
export const getBillingAccount = createSelector(getCheckoutState, checkout => checkout.billingAccount);
export const getBillingAccountFormData = createSelector(getBillingAccount, billingAccount => billingAccount.formData);
export const getBillingAccountsData = createSelector(getBillingAccount, billingAccount => billingAccount.data);
export const getBillingAccountFormDataErrors = createSelector(getBillingAccount, billingAccount => billingAccount.formErrors);
export const getSelectedBillingAccountMobile = createSelector(getBillingAccount, billingAccount => billingAccount.selectedMobile);
export const getSelectedBillingAccountFix = createSelector(getBillingAccount, billingAccount => billingAccount.selectedFix);
export const isCreateBillingAccountEnabled = createSelector(getBillingAccount, billingAccount => billingAccount.create);
export const isBillingAccountFormVisible = createSelector(getBillingAccount, billingAccount => billingAccount.formVisible);
export const getBillingAccountCheckoutData = createSelector([getBillingAccountFormData, isCreateBillingAccountEnabled], (billingAccount, create) => create ? billingAccount : null);
export const isBillingComponentValid = createSelector([isCreateBillingAccountEnabled, getSelectedBillingAccountMobile, getSelectedBillingAccountFix], (create, selectedMobile, selectedFix) => create || selectedMobile.accountCode || selectedFix.accountCode);
export const getSelectedAccountContracts = createSelector(getBillingAccount, billingAccount => billingAccount.accountContracts);
export const getShowContractButtonEnabled = createSelector(getBillingAccount, billingAccount => billingAccount.isShowContractButtonEnabled);
export const areBillingAccountContractsVisible = createSelector(getBillingAccount, billingAccount => billingAccount.accountContractsVisible);

// REPRESENTATIVE DATA
export const getRepresentativeData = createSelector(getCheckoutState, checkout => checkout ? checkout.representativeData : null);
export const getRepresentationMode = createSelector(getRepresentativeData, data => data ? data.representationMode : null);
export const getGrantingDate = createSelector(getRepresentativeData, data => data ? data.grantingDate : null);
export const getGrantingDateErrors = createSelector(getRepresentativeData, data => data ? data.grantingDateErrors : []);
const isGrantingDateFilled = createSelector([getGrantingDate, getRepresentationMode], (date, mode) => ["JR", "WR"].indexOf(mode) > -1 || !date[0]);

export const getRepresentatives = createSelector(getRepresentativeData, representativeData => representativeData ? representativeData.representatives : null);
export const getRepresentativesData = createSelector(getRepresentatives, data => data ? data.data : []);
export const getRepresentativesErrors = createSelector(getRepresentatives, data => data ? data.errors : []);
//export const getRepresentativesErrors = createSelector(getRepresentativesErrors, errors => {}); //TODO
export const getRepresentativesFormData = createSelector([getRepresentativesData, getRepresentativesErrors], mergeDataAndErrors);
export const getRepresentativeFormData = createSelector([getRepresentativesFormData], formData => formData[0] || {});

export const isRepresentativesFilled = createSelector(getRepresentativesData, datas => datas.map(_personalDataDataIsFilled).every(t => t == true));
export const isRepresentativesDataEmpty = createSelector(getRepresentativesData, datas => datas.map(_personalDataDataIsEmpty).every(t => t == true));
export const isRepresentativesValid = createSelector([isRepresentativesDataEmpty, isRepresentativesFilled, getRepresentativesErrors], (isEmpty, isFilled, errors) => {
    //return isEmpty || (isFilled && _hasNoErrors(errors));
    return isFilled && _hasNoErrors(errors);
});

export const getSapReservationNumber = createSelector(getCheckoutState, checkout => checkout.reservation.sapReservationNumber);

export const getGrantors = createSelector(getRepresentativeData, representativeData => representativeData ? representativeData.grantors : null);
export const getGrantorsData = createSelector(getGrantors, data => data ? data.data : null);
export const getGrantorsErrors = createSelector(getGrantors, data => data ? data.errors : null);
export const getGrantorsFormData = createSelector([getGrantorsData, getGrantorsErrors], mergeDataAndErrors);
export const isGrantorsDataEmpty = createSelector(getGrantorsData, (datas) => datas ? datas.map(_personalDataDataIsEmpty).every(t => t == true) : false);
const isGrantorsDataFilled = createSelector(getGrantorsData, (datas) => datas ? datas.map(_nameInPersonalDataIsFilled).every(t => t == true) : false);
export const isGrantorsValid = createSelector([isGrantorsDataEmpty, isGrantorsDataFilled, getGrantorsErrors], (isEmpty, isFilled, errors) => {
    //return isEmpty || (isFilled && _hasNoErrors(errors));
    return isFilled && _hasNoErrors(errors);
});

export const isRepresentativeDataFilled = createSelector([isRepresentativesFilled, isGrantorsDataFilled, isGrantingDateFilled], (isRepresentativesFilled, isGrantorsDataFilled, isGrantingDateFilled) => {
    return isRepresentativesFilled && isGrantorsDataFilled && isGrantingDateFilled
});

export const isRepresentativeDataValid = createSelector([isRepresentativesValid, isGrantorsValid, getGrantingDateErrors], (isRepresentativesValid, isGrantorsValid, getGrantingDateErrors) => {
    return isRepresentativesValid && isGrantorsValid && !getGrantingDateErrors[0]
});

export const isFixRepresentativeDataValid = createSelector([isRepresentativesDataEmpty, isRepresentativesFilled, getRepresentativesErrors], (isEmpty, isFilled, errors) => {
    return isEmpty || (isFilled && _hasNoErrors(errors));
});

export const getRepresentativeDataForBackend = createSelector([getRepresentativesData, getGrantorsData, getRepresentationMode, getCustomerData, getGrantingDate], (representatives, grantors, representationMethod, customerData, grantingDate) => {
    if (customerData && customerData.legalForm) {
        return {
            representatives,
            grantors,
            representationMethod,
            grantingDate
        }
    } else {
        return null
    }
});

const _isEmpty = (value) => !value || value === "" || value === null || typeof value === 'undefined';
const _personalDataDataIsEmpty = (data) => _isEmpty(data.firstName) && _isEmpty(data.lastName) && _isEmpty(data.pesel) && (_isEmpty(data.idNumber) && !data.foreigner) &&
    (!data.foreigner && ((_isEmpty(data.identificationEndDate) || _isEmpty(data.identificationRegisterDate)) && _isEmpty(data.country) && _isEmpty(data.identification) && _isEmpty(data.identificationValue)));
const _personalDataDataIsFilled = (data) => !_isEmpty(data.firstName) && !_isEmpty(data.lastName) && !_isEmpty(data.pesel) && (!_isEmpty(data.idNumber) || data.foreigner) &&
    (!data.foreigner || ((!_isEmpty(data.identificationEndDate) || !_isEmpty(data.identificationRegisterDate)) && !_isEmpty(data.country) && !_isEmpty(data.identification) && !_isEmpty(data.identificationValue)));
const _nameInPersonalDataIsFilled = (data) => !_isEmpty(data.firstName) && !_isEmpty(data.lastName)
const _hasNoErrors = (errors) => errors.map(_isError).every(t => t == false)

// TELESALES CAMPAIGN
export const getTelesales = createSelector(getCheckoutState, checkout => checkout.telesales);

export const getDebtRepaymentState = createSelector(getCheckoutState, checkout => checkout.debtRepayment);
export const getDebtRepayment = createSelector(getDebtRepaymentState, debtRepayment => debtRepayment.data);
export const shouldShowDebtRepaymetComponent = createSelector(getDebtRepaymentState, debtRepayment => debtRepayment.show);
export const debtRepaymentFilled = createSelector(getDebtRepayment, debtRepayment => !_isEmpty(debtRepayment.receiptNumber) && !_isEmpty(debtRepayment.amount));

// MNP DATA

export const getMnpData = createSelector(getCheckoutState, checkout => checkout.mnpData.data);
export const getMNPCheckoutData = createSelector(
    [getMnpData], (mnpData) => {
        if (Object.keys(mnpData).length === 0) {
            return [];
        }
        return mnpData.filter(m => !OnlineUtils.isMnpApplicationSecondStep(m.processType)).map(m => {
            let fixed = {
                ...m
            };
            delete fixed.errors;
            delete fixed.identifier;
            return fixed;
        });
    }
);
export const getCitySuggestionsForBusinessMnpAddress = cbs.createFilteredCitySuggestionsSelector(getMnpData);
export const getStreetSuggestionsBusinessMnpAddress = cbs.createFilteredStreetSuggestionsSelector(getMnpData);
export const getBusinessMnpAddressValidation = cbs.createAddressValidationSelector(getMnpData);
export const getCheckoutMnpProps = createSelector(
    [getMnpData, getCitySuggestionsForBusinessMnpAddress, getStreetSuggestionsBusinessMnpAddress, getBusinessMnpAddressValidation, getCartIsNet],
    (mnpData, citySuggestions, streetSuggestions, validation, isB2B) => ({
        mnpData,
        citySuggestions,
        streetSuggestions,
        validation,
        isB2B
    })
);

// Addresses
export const getAddresses = createSelector(getCheckoutState, checkout => checkout.addresses);
export const getMainAddress = createSelector(getAddresses, addresses => addresses.main); // ToDo replace usages with getAddressMain
export const createGetAddressSelector = (addressType) => createSelector(getAddresses, addresses => addresses[addressType]);
export const getAddressMain = createGetAddressSelector("main");
export const getAddressCorrespondence = createGetAddressSelector("correspondence");
export const getAddressDelivery = createGetAddressSelector("delivery");
export const getAddressMappings = createSelector(getAddresses, addresses => addresses.mappings);
export const createGetAddressMappingSelector = (addressType) =>
    createSelector(getAddressMappings, mappings => mappings[addressType] || addressType);
export const createGetMappedAddressSelector = (addressType) =>
    createSelector(
        [getAddresses, createGetAddressMappingSelector(addressType)],
        (addresses, mapping) => addresses[mapping]
    );
export const getAddressCorrespondenceMapping = createGetAddressMappingSelector("correspondence");
export const getAddressDeliveryMapping = createGetAddressMappingSelector("delivery");
export const getMappedAddressMain = createGetMappedAddressSelector("main");
export const getMappedAddressCorrespondence = createGetMappedAddressSelector("correspondence");
export const getMappedAddressDelivery = createGetMappedAddressSelector("delivery");

// CBS suggestions
export const getCitySuggestionsForBillingAccountAddress = cbs.createFilteredCitySuggestionsSelector(getBillingAccountFormData);
export const getStreetSuggestionsForBillingAccountAddress = cbs.createFilteredStreetSuggestionsSelector(getBillingAccountFormData);
export const getBillingAccountAddressValidation = cbs.createAddressValidationSelector(getBillingAccountFormData);
export const getCitySuggestionsForMainAddress = cbs.createFilteredCitySuggestionsSelector(getAddressMain);
export const getStreetSuggestionsForMainAddress = cbs.createFilteredStreetSuggestionsSelector(getAddressMain);
export const getMainAddressValidation = cbs.createAddressValidationSelector(getAddressMain);
export const getCitySuggestionsForCorrespondenceAddress = cbs.createFilteredCitySuggestionsSelector(getAddressCorrespondence);
export const getStreetSuggestionsForCorrespondenceAddress = cbs.createFilteredStreetSuggestionsSelector(getAddressCorrespondence);
export const getCorrespondenceAddressValidation = cbs.createAddressValidationSelector(getAddressCorrespondence);
export const getCitySuggestionsForDeliveryAddress = cbs.createFilteredCitySuggestionsSelector(getAddressDelivery);
export const getStreetSuggestionsForDeliveryAddress = cbs.createFilteredStreetSuggestionsSelector(getAddressDelivery);
export const getDeliveryAddressValidation = cbs.createAddressValidationSelector(getAddressDelivery);

const appendCbsValidationStateToErrors = (errors, validation, messageLevel) => {
    const genericErrors = JSON.parse(JSON.stringify({
        ...errors
    }));
    if (validation) {
        Object.getOwnPropertyNames(validation).map(field => {
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

export const getCustomerErrors = createSelector(getCustomer, customer => customer.errors);
export const getCustomerDataErrors = createSelector(getCustomerErrors, errors => errors.data);

export const getCustomerMainAddressErrors = createSelector([getCustomerErrors, getMainAddressValidation],
    (errors, validation) => appendCbsValidationStateToErrors(errors.mainAddress, validation, 'warn'));

export const getCustomerCorrespondenceAddressErrors = createSelector([getCustomerErrors, getCorrespondenceAddressValidation],
    (errors, validation) => appendCbsValidationStateToErrors(errors.correspondenceAddress, validation, 'error'));

export const getDeliveryAddressErrors = createSelector([getCustomerErrors, getDeliveryAddressValidation],
    (errors, validation) => appendCbsValidationStateToErrors(errors.deliveryAddress, validation, 'error'));

export const getCustomerContactErrors = createSelector(getCustomerErrors, errors => errors.contact);

export const getCustomerAddressErrors = createSelector(getCustomerErrors, errors => errors.mainAddress);

export const getCustomerCheckoutData = createSelector(
    [getCustomerData, isExistingCustomer, getCustomerContact, isCustomerModified, getMappedAddressMain, getMappedAddressCorrespondence],
    (data, existing, contact, modified, mainAddress, correspondenceAddress) => ({
        ...data,
        existing,
        ...contact,
        modified,
        mainAddress,
        correspondenceAddress
    })
);

// BILLING ACCOUNT
export const getBillingAccountFormDataWithCbsErrors = createSelector([getBillingAccountFormDataErrors, getBillingAccountAddressValidation],
    (errors, validation) => appendCbsValidationStateToErrors(errors, validation, 'warn'));
export const getBillingAccountFormValidation = createSelector([getBillingAccountAddressValidation, getBillingAccountFormDataErrors], (addressValidation, errors) => ({
    ...addressValidation,
    emailAddress: errors.emailAddress && errors.emailAddress.length === 0
}));
export const getBillingAccountComponentData = createSelector(
    [getBillingAccountsData, getBillingAccountFormData, getBillingAccountFormDataWithCbsErrors, isBillingAccountFormVisible, getCitySuggestionsForBillingAccountAddress, getStreetSuggestionsForBillingAccountAddress, getBillingAccountFormValidation, isCreateBillingAccountEnabled, getSelectedBillingAccountMobile, getSelectedBillingAccountFix, getSelectedAccountContracts, getShowContractButtonEnabled, areBillingAccountContractsVisible],
    (data, formData, errors, visible, citySuggestions, streetSuggestions, validation, createEnabled, selectedMobile, selectedFix, accountContracts, isShowContractButtonEnabled, accountContractsVisible) => ({
        data,
        formData,
        errors,
        visible,
        citySuggestions,
        streetSuggestions,
        validation,
        createEnabled,
        selectedMobile,
        selectedFix,
        accountContracts,
        isShowContractButtonEnabled,
        accountContractsVisible
    })
);

// data state
export const getMetadata = createSelector(getCheckoutState, checkout => checkout.metadata);
export const customerDataRequested = createSelector(getMetadata, metadata => metadata.customer.requested);
export const customerDataFinished = createSelector(getMetadata, metadata => metadata.customer.finished);
export const paymentDataFinished = createSelector(getMetadata, metadata => metadata.payment.finished);
export const representativeDataRequested = createSelector(getMetadata, metadata => metadata.representative.requested);
export const billingAccountDataRequested = createSelector(getMetadata, metadata => metadata.billingAccount.requested);
export const deliveryDataRequested = createSelector(getMetadata, metadata => metadata.delivery.requested);
export const deliveryDataRequestFinished = createSelector(getMetadata, metadata => metadata.delivery.finished);
export const cartMnpDataRequested = createSelector(getMetadata, (metadata) => metadata.cartMnpData.requested);
export const customerDataLoading = createSelector(getMetadata, metadata => metadata.customer.loading);
export const installationAvailableTimeSlotsRequested = createSelector(getMetadata, metadata => metadata.installation.requested);
export const isManualVerificationModalVisible = createSelector(getMetadata, metadata => metadata.manualVerificationModalVisible);
export const isSmsVerified = createSelector(getMetadata, metadata => metadata.customer && metadata.customer.isSmsVerified);
export const bpgRequested = createSelector(getMetadata, metadata => metadata.customer && metadata.customer.bpgRequested);
export const getBusinessDataSource = createSelector(getMetadata, metadata => metadata.customer && metadata.customer.businessDataSource);
export const isOnlineCookie = createSelector(getMetadata, metadata => metadata.customer && metadata.customer.isOnlineCookie);
export const isWWW = createSelector(getMetadata, metadata => metadata.customer && metadata.customer.isWWW);
export const areAllDocumentsSaving = createSelector(getMetadata, metadata => metadata.allDocuments && metadata.allDocuments.loading);
export const areAllDocumentsSaved = createSelector(getMetadata, metadata => metadata.allDocuments && metadata.allDocuments.finished);

export const isCustomerDataReadOnly = createSelector(getMetadata, metadata => metadata.customer.readOnly);

export const getCurrentStepId = createSelector(getMetadata, metadata => metadata.currentStepId);
// delivery
export const getDelivery = createSelector(getCheckoutState, checkout => checkout.delivery);
export const isDigitalAgreementDefault = createSelector(getDelivery, delivery => delivery.isDigitalAgreementDefault);
export const getCartDelivery = createSelector(getDelivery, delivery => delivery.cartDelivery);
export const getCartAgreementType = createSelector(getCartDelivery, cartDelivery => cartDelivery.documentsDeliveryModeName);
export const getCartDeliveryMethod = createSelector(getCartDelivery, cartDelivery => cartDelivery.deliveryMethod);
export const getCartDeliveryMethodForDevices = createSelector(getCartDelivery, cartDelivery => cartDelivery.deliveryMethodForDevices);
export const getAgreementType = createSelector(getDelivery, delivery => delivery.agreementType);
export const getDeliveryMobile = createSelector(getDelivery, delivery => _.find(delivery.methods, item => item.factory === DeliveryMethodFactory.MOBILE));
export const getDeliveryFix = createSelector(getDelivery, delivery => _.filter(delivery.methods, item => item.factory === DeliveryMethodFactory.FIX));
export const getDeliveryFixDocuments = createSelector(getDeliveryFix, delivery => _.find(delivery, item => item.deliveryModeType === DeliveryMethodMode.DOCUMENTS_PACKAGE));
export const getDeliveryFixDevices = createSelector(getDeliveryFix, delivery => _.find(delivery, item => item.deliveryModeType === DeliveryMethodMode.DEVICES_PACKAGE));
export const getDeliveryBundles = createSelector(getDelivery, delivery => {
    return (delivery.methods[0]) ? delivery.methods[0].bundleNumbers : [];
});

export const getDeliveryMethodsRaw = createSelector(getDelivery, delivery => {
    //TODO: rozwiązanie mobile powinno być zastosowane również dla FIX - nie jest per factory
    if (delivery.methods.length > 1 && delivery.methods.every(method => method.factory === "MOBILE")) {
        return mergeMobileDeliveryMethods(delivery);
    }
    return (delivery.methods[0]) ? delivery.methods[0].deliveryMethods : [];
});

export const isPickupOnEmailAvailable = createSelector(getDeliveryMethodsRaw, deliveryMethods => deliveryMethods
    .map(deliveryMethod => deliveryMethod.id)
    .some(deliveryMethodCode => deliveryMethodCode === DeliveryMethod.PICKUP_ON_EMAIL));

export const getDeliveryMethods = createSelector([getDelivery, getAgreementType], (delivery, agreementType) => {
    // debugger;
    if (delivery.methods.length > 0 && delivery.methods.every(method => method.factory === "MOBILE")) {
        if (delivery.methods.length > 1) {
            return mergeMobileDeliveryMethods(delivery);
        }
        return delivery.methods[0] ? delivery.methods[0].deliveryMethods : [];
    }
    const deliveryMethods = delivery.methods[0] ? delivery.methods[0].deliveryMethods : [];
    return deliveryMethods
        .filter(method => !agreementType || (AgreementType.DIGITAL === agreementType ? DeliveryMethod.isDigital(method.id) : DeliveryMethod.isPaper(method.id)));
});

export const isAgreementTypeRequired = createSelector(getDeliveryMethodsRaw, deliveryMethods => {
    return deliveryMethods && deliveryMethods.map(m => m.id).some(DeliveryMethod.isDigital) &&
        deliveryMethods.map(m => m.id).some(DeliveryMethod.isPaper);
});

export const getDeliveryMethodsFetchDone = createSelector(getDelivery, delivery => delivery.deliveryMethodsFetchDone);
export const getDeliveryEmailAddress = createSelector([getDelivery, getCustomerContact], (delivery, customerContact) => delivery.emailAddress === null ? customerContact.emailAddress : delivery.emailAddress || "");
export const getDeliveryEmailAddressErrors = createSelector(getDelivery, delivery => delivery.emailAddressErrors || []);
export const getEmailConfirmationModalState = createSelector(getDelivery, delivery => !!delivery.emailConfirmationModalState);
export const getEmailConfirmationModalAccepted = createSelector(getDelivery, delivery => !!delivery.emailConfirmationModalAccepted);
export const deliveryAndCustomerDataLoaded = createSelector([deliveryDataRequestFinished, getDeliveryMethodsFetchDone, customerDataFinished, paymentDataFinished], (cartDeliveryLoaded, deliveryMethodsLoaded, customerLoaded, paymentDataLoaded) => cartDeliveryLoaded && deliveryMethodsLoaded && customerLoaded && paymentDataLoaded);

function mergeMobileDeliveryMethods(delivery) {
    let merged = [];
    let temp = [];
    let finalMerged = [];
    let deliveryMethodWithMinPrice;
    delivery.methods.forEach(method => {
        method.deliveryMethods.forEach(deliveryMethod => merged.push(deliveryMethod))
    })
    let maxCountDeliveryMethods = Math.max.apply(Math, delivery.methods.map(o => o.deliveryMethods.length))

    for (let j = 0; j <= maxCountDeliveryMethods; j++) {
        for (let i = merged.length - 1; i >= 0; i--) {
            if (merged[0].id === merged[i].id) {
                temp.push(merged[i]);
                merged.splice(i, 1);
            }
        }

        if (temp.length === delivery.methods.length) {
            deliveryMethodWithMinPrice = findMinPriceDeliveryMethod(temp)
            finalMerged.push(deliveryMethodWithMinPrice)
        }
        temp = [];
        deliveryMethodWithMinPrice = null;
    }
    return finalMerged;
}

function findMinPriceDeliveryMethod(arr) {
    for (let i = arr.length - 1; i >= 1; i--) {
        if (parseFloat(arr[i].price) > (parseFloat(arr[i - 1].price))) {
            arr.splice(i, 1)
        } else {
            arr.splice(i - 1, 1)
        }
    }
    return arr[0];
}

export const getDeliveryModeTypeDocuments = createSelector(getDelivery, delivery => {
    return (delivery.methods[0]) ? delivery.methods[0].deliveryModeType : '';
});

export const getDeliveryModeTypeDevices = createSelector(getDelivery, delivery => {
    return (delivery.methods[1]) ? delivery.methods[1].deliveryModeType : '';
});

export const getDeliveryMethodsForDevices = createSelector(
    [getDelivery, getDeliveryModeTypeDevices],
    (delivery, modeTypeDevices) => {
        return (modeTypeDevices === DeliveryMethodMode.DEVICES_PACKAGE && delivery.methods[1]) ? delivery.methods[1].deliveryMethods : [];
    }
);

export const getIsDeliveryModesEqual = createSelector(getDeliveryFix, deliveryMethods => {
    return (deliveryMethods[0]) ? deliveryMethods[0].isDeliveryModesEqual : false;
});

export const getRentDevices = createSelector(getDelivery, delivery => {
    return (delivery.methods[1]) ? delivery.methods[1].rentDevices : '';
});
export const getConvRentDevices = createSelector(getDelivery, delivery => {
    return (delivery.methods[0]) ? delivery.methods[0].rentDevices : '';
});

export const getSalesDevices = createSelector(getDelivery, delivery => {
    return (delivery.methods[1]) ? delivery.methods[1].salesDevices : '';
});

export const getDeliveryContents = createSelector(getDelivery, delivery => {
    return delivery.methods[0] ? delivery.methods.map(entry => entry.contents).reduce((a, b) => {
        if (a && b)
            return a.concat(", ").concat(b);
        if (a) {
            return a;
        }
        if (b) {
            return b;
        }
    }) : '';
});

export const getDeliveryAllProductContents = createSelector(getDelivery, delivery => {
    return delivery.methods[0] ? delivery.methods.map(entry => entry.salesOfGoodsContents)
        .reduce((a, b) => (a && b && a.concat(b)) || (b)) : '';
});

export const getSelectedDeliveryMethod = createSelector(
    [getDelivery, getDeliveryMethods],
    (delivery, deliveryMethods) => {
        return deliveryMethods && deliveryMethods.find(deliveryMethod => deliveryMethod.id === delivery.selectedMethod) || "";
    }
);

export const getSelectedDeliveryMethodCode = createSelector(getDelivery, (delivery) => delivery.selectedMethod);

export const getSelectedMethodForDevices = createSelector(getDelivery, (delivery) => delivery.selectedMethodForDevices);

export const getSelectedDeliveryMethods = createSelector(
    [getDelivery, getIsDeliveryModesEqual],
    (delivery, isFixEqual) => {
        const mobile = _.find(delivery.methods, item => item.factory === DeliveryMethodFactory.MOBILE);
        const fixes = _.filter(delivery.methods, item => item.factory === DeliveryMethodFactory.FIX);
        const fixDocuments = _.find(fixes, item => item.deliveryModeType === DeliveryMethodMode.DOCUMENTS_PACKAGE);
        const fixDevices = _.find(fixes, item => item.deliveryModeType === DeliveryMethodMode.DEVICES_PACKAGE);
        const result = {
            mobile: mobile ? (
                mobile.deliveryMethods.length > 0 ?
                mobile.deliveryMethods.find(deliveryMethod => deliveryMethod.id === delivery.selectedDeliveryMethods.mobile) || '' :
                fixDevices && fixDevices.deliveryMethods.find(deliveryMethod => deliveryMethod.id === delivery.selectedDeliveryMethods.mobile) || ''
            ) : null,
            fixDocuments: fixDocuments ? (
                fixDocuments.deliveryMethods.length > 0 ?
                fixDocuments.deliveryMethods.find(deliveryMethod => deliveryMethod.id === delivery.selectedDeliveryMethods.fixDocuments) || '' :
                ''
            ) : null,
            fixDevices: fixDevices ? (
                fixDevices.deliveryMethods.length > 0 ?
                fixDevices.deliveryMethods.find(deliveryMethod => deliveryMethod.id === delivery.selectedDeliveryMethods.fixDevices) || '' :
                ''
            ) : null
        };

        if (!result.fixDevices && isFixEqual) {
            result.fixDevices = result.fixDocuments;
        }
        return result;
    }
);

export const getSelectedDeliveryMethodForDevices = createSelector(
    [getDelivery, getDeliveryMethodsForDevices],
    (delivery, deliveryMethods) => {
        return deliveryMethods.find(deliveryMethod => deliveryMethod.id === delivery.selectedMethodForDevices) || "";
    }
);

export const getSelectedDeliveryMethodForDevicesForOrder = createSelector(getDelivery, (delivery) => delivery.selectedMethodForDevices);

export const getDeliveryPhoneContact = createSelector(getDelivery, (delivery) => delivery.phoneContact || "");
export const getSelectedDeliveryMethodId = createSelector(getDelivery, (delivery) => !!delivery && delivery.selectedMethod);

export const getCourierAdditionalInfo = createSelector(getDelivery, delivery => delivery.courierMessage);


export const getPickupPointsOfSale = createSelector(getDelivery, delivery => delivery.pointsOfSalePickup);
export const getPickupPointOfSaleCities = createSelector(getDelivery, delivery => delivery.pointOfSalePickupCities);
export const getSelectedPointOfSaleId = createSelector(getDelivery, (delivery) => delivery.selectedPointOfSale);

export const getParcelLocker = createSelector(getDelivery, delivery => delivery.parcelLockerList);
export const getParcelLockerList = createSelector(getDelivery, delivery => delivery.parcelLockerCityList);
export const getParcelLockerCity = createSelector(getDelivery, delivery => delivery.pointOfSaleCity);

export const getSelectedPointOfSaleCity = createSelector(getDelivery, delivery => delivery.pointOfSaleCity);
export const getLastPos = createSelector(getDelivery, delivery => delivery.lastPos);

export const isPickupDeliveryValid = createSelector([getSelectedDeliveryMethod, getSelectedPointOfSaleId], (selectedMethod, posId) => {
    return selectedMethod.id === 'pickup_from_shelf' ? !!posId : true;
});

export const getConvergentEntries = createSelector(getMiniCart, miniCart => {
    return miniCart.entries ? miniCart.entries.filter(cartEntry => cartEntry.entryType === CartEntryType.CONVERGENT) : [];
});

export const getSelectedMethodForDocuments = createSelector(
    [getDelivery, getSelectedDeliveryMethods, getConvergentEntries],
    (delivery, selectedDeliveryMethods, convergentEntries) =>
    convergentEntries.length === 0 ?
    delivery.selectedMethod :
    ((selectedDeliveryMethods && getDocumentsDeliveryForConvergent(selectedDeliveryMethods)) || delivery.selectedMethod)
);

function getDocumentsDeliveryForConvergent(selectedDeliveryMethods) {
    if (isDeliveryMethodRequired(selectedDeliveryMethods.fixDocuments)) {
        return selectedDeliveryMethods.fixDocuments && selectedDeliveryMethods.fixDocuments.id;
    } else {
        return selectedDeliveryMethods.mobile && selectedDeliveryMethods.mobile.id;
    }
}

export const getDeliveryCheckoutData = createSelector(
    [
        getDeliveryBundles,
        getSelectedDeliveryMethod,
        getSelectedDeliveryMethodForDevicesForOrder,
        getDelivery,
        getConvergentEntries,
        getDeliveryFix,
        getCourierAdditionalInfo,
        getMappedAddressDelivery,
        getAddressDeliveryMapping,
        getDeliveryPhoneContact,
        getDeliveryEmailAddress,
        getIsDeliveryModesEqual,
        getSelectedPointOfSaleId,
        getAgreementType,
    ], (deliveryBundles, method, methodForDevicesId, delivery, convergentEntries, deliveryFix, courierMessage, deliveryAddress, mappedDelivery, phoneContact, emailAddress, isDeliveryModesEqual, pos, documentDeliveryMethod) => {
        const isNewAddress = mappedDelivery === 'delivery';
        const methodId = method ? method.id : "";
        const methodDevicesId = (isDeliveryModesEqual) ? methodId : methodForDevicesId;
        const bundles = [];
        if (convergentEntries.length > 0) {
            const mobileBundles = [];
            delivery.methods
                .filter(method => method.factory === "MOBILE")
                .forEach(method => method.bundleNumbers.forEach(bundle => mobileBundles.push(bundle)));
            const distinctMobileBundles = [...new Set(mobileBundles)];
            if (distinctMobileBundles.length > 0) {
                distinctMobileBundles.forEach(bundle => {
                    bundles.push({
                        phoneContact: phoneContact,
                        courierAdditionalInfo: courierMessage,
                        deliveryDataForm: deliveryAddress,
                        bundleNo: bundle,
                        deliveryMethod: delivery.selectedDeliveryMethods.mobile,
                        pointOfServiceName: pos,
                        newAddress: isNewAddress,
                        documentsDeliveryModeName: documentDeliveryMethod,
                        emailAddress
                    })
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
                    emailAddress
                });
            }
            return bundles;
        } else {
            return deliveryBundles.map(b => ({
                phoneContact: phoneContact,
                courierAdditionalInfo: courierMessage,
                deliveryDataForm: deliveryAddress,
                bundleNo: b,
                deliveryMethod: methodId,
                deliveryMethodForDevices: methodDevicesId,
                pointOfServiceName: pos,
                newAddress: isNewAddress,
                documentsDeliveryModeName: documentDeliveryMethod,
                emailAddress
            }));
        }
    }
);

export const getMyPosition = createSelector(getDelivery, delivery => {
    const myPosition = delivery.pointsOfSale.filter(pos => pos.category === 'myPosition');

    return myPosition.shift();
});

//MINICART - BUNDLENO
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

export const getFixEntries = createSelector(getMiniCart, miniCart => {
    return miniCart.entries ? miniCart.entries.filter(cartEntry => cartEntry.entryType === CartEntryType.FIX) : [];
});

export const getConvergentBundleNos = createSelector(getConvergentEntries, convergentEntries => {
    const convergentSubEntries = convergentEntries.map(cartEntry => cartEntry.entries);
    const allBundleNos = [].concat.apply([], convergentSubEntries).map(cartEntry => cartEntry.bundleNo);
    return allBundleNos.filter(onlyUnique);
});

export const getFixBundleNos = createSelector(allCartEntries, cartEntries => {
    return cartEntries
        .filter(cartEntry => cartEntry.entryType === CartEntryType.FIX)
        .map(cartEntry => cartEntry.bundleNo)
        .filter(onlyUnique);
});

//INSTALLATION
export const getInstallation = createSelector(getCheckoutState, checkout => checkout.installation);
export const getInstallationAvailableTimeSlots = createSelector(getInstallation, installation => installation.availableTimeSlots);
export const getInstallationPhoneContact = createSelector(getInstallation, installation => installation.phoneContactDAP || "");
export const getAdditionalInstallationData = createSelector(getInstallation, installation => {
    const additionalData = installation.availableTimeSlots.additionalData;
    if (!!additionalData) {
        return {
            ...additionalData,
            installationAddress: {
                ...additionalData.installationAddress,
                streetName: additionalData.installationAddress.line1,
                streetNumber: additionalData.installationAddress.line2,
            }
        };
    }
    return additionalData;
});
export const getKwmLoadingState = createSelector(getInstallation, installation => installation.loading);
export const getKwmSelectedSlotDescription = createSelector(getInstallation, installation => installation.selectedSlotDisplayText);
export const getShowSelectedSlotError = createSelector(getInstallation, installation => installation.showSelectedSlotError);
export const getShouldRefreshSlots = createSelector(getInstallation, installation => installation.shouldRefresh);

export const getSelectedInstallationTimeSlot = createSelector(getInstallation, installation => installation.selectedInstallationTimeSlot);
export const getInstallationComment = createSelector(getInstallation, installation => installation.comment);
export const getInstallationCheckoutData = createSelector([getSelectedInstallationTimeSlot, getInstallationComment, getFixBundleNos, getInstallationPhoneContact], (installationTimeSlot, installationComment, fixBundleNos, phoneNumber) => {
    if (!installationTimeSlot) {
        return [];
    }
    return fixBundleNos.map(bundleNo => ({
        bundleNo: bundleNo,
        startDate: installationTimeSlot.startDate,
        endDate: installationTimeSlot.endDate,
        comment: installationComment,
        phoneNumber: phoneNumber
    }));
});
export const shouldSelectInstallation = createSelector(getInstallationAvailableTimeSlots, installationAvailableTimeSlots => {
    return installationAvailableTimeSlots && installationAvailableTimeSlots.slots && installationAvailableTimeSlots.slots.length > 0;
});

// payment
export const getPayment = createSelector(getCheckoutState, checkout => checkout.payment);
export const getAvailablePaymentMethods = createSelector([getDeliveryMethods, getSelectedDeliveryMethod, getLastPos, getDelivery], (deliveryMethods, selectedMethod, lastPos, delivery) => {
    const selectedMethodId = selectedMethod ? selectedMethod.id : "";
    const supportedPaymentMethods = deliveryMethods.filter(dm => dm.id === selectedMethodId).flatMap(dm => dm.supportedPaymentMethods);
    //filter DeliveryMethods when parcelLocker is present;
    if (selectedMethodId === "parcel_locker") {
        let checkPayU = supportedPaymentMethods.some(t => t.code === "PayU" || t.code === "BlueMedia");
        if (checkPayU === true) {
            if (lastPos.paymentByCardPossibility === true && lastPos.paymentType === true) {
                return supportedPaymentMethods.filter(sPM => ["Cash", "PayU", "BlueMedia"].includes(sPM.code));
            } else {
                return supportedPaymentMethods.filter(sPM => ["PayU", "BlueMedia"].includes(sPM.code));
            }
        } else {
            if (lastPos.paymentByCardPossibility === true && lastPos.paymentType === true) {
                return supportedPaymentMethods.filter(sPM => ["Cash"].includes(sPM.code));
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

export const getSelectedPaymentMethod = createSelector(getPayment, payment => payment.selectedMethod);
export const getSelectedPaymentModeValueEligCode = createSelector(getPayment, payment => payment.selectedEligCode);

export const isOnlinePaymentMethodSelected = createSelector(getPayment, payment => payment.selectedMethod === "PayU" || payment.selectedMethod === "BlueMedia");

export const getPaymentCheckoutData = createSelector([getDeliveryBundles, getSelectedPaymentMethod, getSelectedPaymentModeValueEligCode], (bundles, payment, eligCode) => {
    const paymentMethod = payment && payment.length > 0 ? payment : "Cash";
    return bundles.map(b => ({
        bundleNo: b,
        paymentMethod,
        eligCode
    }));
});
export const getFeeForSelectedPaymentMethod = createSelector([getSelectedDeliveryMethod, getSelectedPaymentModeValueEligCode], (selectedDeliveryMethod, selectedPaymentModeValueEligCode) => {
    if (selectedDeliveryMethod.supportedPaymentMethods && selectedPaymentModeValueEligCode) {
        const selectedPaymentMethod = selectedDeliveryMethod.supportedPaymentMethods.find(method => selectedPaymentModeValueEligCode === method.eligCode);
        return selectedPaymentMethod && selectedPaymentMethod.fee || "";
    }
    return "";
});
export const getDeliveryTotalCost = createSelector([getSelectedDeliveryMethod, getFeeForSelectedPaymentMethod], (selectedDeliveryMethod, fee) => {
    if (selectedDeliveryMethod && selectedDeliveryMethod.price && fee) {
        const total = parseFloat(selectedDeliveryMethod.price) + parseFloat(fee);
        return total.toFixed(2).replace(".", ",") + " zł";
    }
    return "0,00 zł";
});
// CONSENTS DATA
export const getCheckoutConsents = createSelector(getCheckoutState, checkout => checkout.consents.consents);

export const getConsentsData = createSelector(getCheckoutState, checkout => checkout.consents);
export const getConsentsStatesData = createSelector(getCheckoutState, checkout => checkout.consents.consentStates);
export const getConsentsCheckoutData = createSelector([getConsentsStatesData, getConsentsData], makeBundleNoNullIfNecessary);

const selectedConsentsStateCodes = createSelector(getConsentsData, consentData => {
    let consentStates = consentData.consentStates || [];
    return consentStates.map(consentState => consentState.stateCode);
});
const getConsentsForSubtype = subType => createSelector(getConsentsData, consentData => {
    let consents = consentData.consents || [];
    return consents.filter(consent => consent.subType === subType);
});
const getConsentNegativeStateCodesForSubType = subType => createSelector(getConsentsForSubtype(subType), earlierInstallationConsents => {
    let consentPositiveStateCodes = earlierInstallationConsents.map(consent => consent.states.filter(consentState => !consentState.positive).map(consentState => consentState.code));
    return _.flattenDeep(consentPositiveStateCodes);
});

export const getConsentEmailAddress = createSelector(getConsentsData, checkout => checkout.consentEmailAddress);
export const getConsentPhoneNumber = createSelector(getConsentsData, checkout => checkout.consentPhoneNumber);
export const getConsentAcknowledgmentsReadWhileTalking = createSelector(getConsentsData, checkout => checkout.consentAcknowledgmentsReadWhileTalking);
export const getConsentDocumentStatus = createSelector(getConsentsData, checkout => checkout.consentDocumentStatus);


// CONSENTS DATA - EARLIER INSTALLATION
export const areMainEarlierInstallationConsentsAccepted = createSelector([selectedConsentsStateCodes, getConsentNegativeStateCodesForSubType("MAIN_EARLIER_INSTALLATION")], (selectedConsentsStateCodes, earlierInstallationConsentNegativeStateCodes) =>
    !earlierInstallationConsentNegativeStateCodes.some(earlierInstallationConsentPositiveStateCode => selectedConsentsStateCodes.includes(earlierInstallationConsentPositiveStateCode))
);
export const areAdditionalEarlierInstallationConsentsAccepted = createSelector([selectedConsentsStateCodes, getConsentNegativeStateCodesForSubType("ADDITIONAL_EARLIER_INSTALLATION")], (selectedConsentsStateCodes, earlierInstallationConsentNegativeStateCodes) =>
    !earlierInstallationConsentNegativeStateCodes.some(earlierInstallationConsentPositiveStateCode => selectedConsentsStateCodes.includes(earlierInstallationConsentPositiveStateCode))
);
export const isMainEarlierInstallationConsentPresent = createSelector(getConsentsForSubtype("MAIN_EARLIER_INSTALLATION"), earlierInstallationConsents => earlierInstallationConsents.length > 0);

export const isEarlierInstallation = createSelector([isMainEarlierInstallationConsentPresent, areMainEarlierInstallationConsentsAccepted, areAdditionalEarlierInstallationConsentsAccepted], (isMainEarlierInstallationConsentPresent, areMainEarlierInstallationConsentsAccepted, areAdditionalEarlierInstallationConsentsAccepted) => {
    if (isMainEarlierInstallationConsentPresent) {
        return areMainEarlierInstallationConsentsAccepted;
    } else {
        return areAdditionalEarlierInstallationConsentsAccepted;
    }
});

export const updatingConsents = createSelector(getMetadata, metadata => metadata.updatingConsents);
export const updatingAnyConsent = createSelector(getMetadata, metadata => metadata.consents.updating);
export const consentsDataInRequest = createSelector(getMetadata, metadata => metadata.consents.data || {});
export const cartConsentsDataRequested = createSelector(getMetadata, metadata => metadata.cartConsents.requested);
export const getConsentsProps = createSelector(
    [getConsentsData, updatingConsents, updatingAnyConsent, getConsentsCheckoutData],
    (data, updatingConsents, updatingAnyConsent, consentStates) => ({
        ...data,
        updatingConsents,
        updatingAnyConsent,
        consentStates
    })
);
export const getBonusesConsents = createSelector(getConsentsData, consentsData => {
    function isRelatedWithBonusBySection(conf, consent) {
        return conf.some(conf => {
            return (conf.sections || [])
                .filter(s => s.withBonus)
                .map(s => s.consentsCode)
                .some(
                    cCodes => cCodes.indexOf(consent.consentCode) > -1
                )
        })
    }

    return consentsData.consents.filter((consentData) => consentData.isRelatedWithBonus || isRelatedWithBonusBySection(consentsData.conf, consentData));
});

export const getConsentsWithBonuses = createSelector([getConsentsData, getBonusesConsents], (consentsData, bonusConsents) => {

    return bonusConsents.map((consent) => {
        const currentState = consentsData.consentStates.find((state) => state.consentCode === consent.consentCode);
        const stateCode = currentState ? currentState.stateCode : "";
        return ({
            state: consent.states.find((state) => state.code === stateCode),
            title: consent.title,
            bonuses: consent.bonuses
        });
    });
});
export const getBigAndZonkConsents = createSelector(getConsentsData, consentsData => {
    return consentsData.consents.filter((consentData) => consentData.consentCode === "100_CONV" || consentData.consentCode === "MSCONSENT_4")
});
export const areBigAndZonkConsentsAccepted = createSelector([getBigAndZonkConsents, getConsentsData], (bigAndZonkConsents, consentsData) => {
    return !bigAndZonkConsents.find((consent) => {
        const currentState = consentsData.consentStates.find((state) => state.consentCode === consent.consentCode);
        return consent.states.find((state) => (state.code === (currentState ? currentState.stateCode : "")) && !state.positive)
    });
});

export const areConsentsWithBonusesAccepted = createSelector(getConsentsWithBonuses, bonusConsents => {
    return !bonusConsents.find(bonusConsent => bonusConsent.state.positive !== true);
});

export const getCvDocumentsData = createSelector(getCheckoutState, checkout => checkout.cvDocuments);
export const getSelectedCvDocument = createSelector(getCvDocumentsData, cvDocuments => cvDocuments.selectedCustomerAdditionalDocument);
export const getDocumentCustomerWorkPhoneNumber = createSelector(getCvDocumentsData, cvDocuments => cvDocuments.customerWorkPhoneNumber);
export const getCvDocumentsCheckoutData = createSelector([getDeliveryBundles, getSelectedCvDocument, getDocumentCustomerWorkPhoneNumber],
    (bundles, selected, phone) => {
        return selected ? bundles.map(b => ({
            bundleNo: b,
            selectedCustomerAdditionalDocument: selected,
            customerWorkPhoneNumber: phone
        })) : [];
    }
);
export const getCvDocumentsList = createSelector(getCvDocumentsData, cvDocuments => {
    return (cvDocuments.cvDocumentsList[0]) ? cvDocuments.cvDocumentsList : [];
});
export const getCvDocumentsErrors = createSelector(getCvDocumentsData, cvDocuments => cvDocuments.errors);


export const getInvoiceEmail = createSelector(getInvoiceData, data => data.invoiceEmail);
export const getInvoiceEmailMapping = createSelector(getInvoiceData, data => data.invoiceEmailMapping);
export const getInvoiceEmailErrors = createSelector(getInvoiceData, data => data.errors);
export const isContactEmailFilledAndValid = createSelector([getCustomerNoEmail, getCustomerEmailAddress, getCustomerContactErrors],
    (customerNoEmail, email, errors) => {
        return !customerNoEmail && (email && email.length > 0) && !(errors && errors.emailAddress && errors.emailAddress.length !== 0);
    });
export const getInvoiceEmailForm = createSelector([getInvoiceEmail, getInvoiceEmailMapping, getInvoiceEmailErrors, isContactEmailFilledAndValid, customerDataFinished],
    (invoiceEmail, invoiceEmailMapping, errors, contactEmailFilledAndValid, customerFinished) => ({
        invoiceEmail,
        invoiceEmailMapping,
        errors,
        contactEmailFilledAndValid,
        customerFinished
    })
);
export const isInvoiceDataValid = createSelector(
    [getInvoiceEmailErrors], (errors) => {
        return errors.length === 0;
    });

export const getInvoiceDataCheckoutData = createSelector([getInvoiceEmailMapping, getInvoiceEmail, getCustomerEmailAddress], (invoiceEmailMapping, invoiceEmail, customerEmailAddress) => {
    return invoiceEmail !== null ? {
        invoiceEmail: (invoiceEmailMapping === 'invoiceEmail' ? invoiceEmail : customerEmailAddress)
    } : null;
});

export const getCheckoutData = createSelector(
    [getCustomerCheckoutData, getRepresentativeDataForBackend, getConsentsCheckoutData, getDeliveryCheckoutData, getInstallationCheckoutData, getPaymentCheckoutData, getMNPCheckoutData, getCvDocumentsCheckoutData, getTelesales, getBillingAccountCheckoutData, getDebtRepayment, getInvoiceDataCheckoutData],
    (customer, representativeData, consentStates, delivery, installation, payment, mnp, additionalDocuments, telesales, billingAccount, debtRepayment, invoiceData) => {
        if (!!mnp) {
            mnp.forEach(m => m.email = customer.emailAddress);
        }
        return {
            customer: fixCustomerCheckoutData(customer),
            representativeData: toUpperCase(representativeData),
            consentStates,
            delivery,
            installation,
            payment,
            mnp,
            additionalDocuments,
            telesales,
            billingAccount,
            debtRepayment,
            invoiceData
        }
    }
);

export const getCheckoutDataForDelivery = createSelector(
    [getCustomerCheckoutData, getRepresentativeDataForBackend, getConsentsCheckoutData, getDeliveryCheckoutData, getInstallationCheckoutData, getPaymentCheckoutData, getMNPCheckoutData, getCvDocumentsCheckoutData, getTelesales, getBillingAccountCheckoutData, getDebtRepayment, getKdrCheckoutData],
    (customer, representativeData, consentStates, delivery, installation, payment, mnp, additionalDocuments, telesales, billingAccount, debtRepayment) => {
        if (!!mnp) {
            mnp.forEach(m => m.email = customer.emailAddress);
        }
        return {
            customer: fixCustomerCheckoutData(customer),
            representativeData: toUpperCase(representativeData),
            consentStates,
            delivery,
            installation,
            mnp,
            additionalDocuments,
            telesales,
            billingAccount,
            debtRepayment
        }
    }
);
export const getDocumentsConfirmationState = createSelector(getConsentsData, consents => consents.documentsConfirmation);
export const getModifyConsentsInCartQueue = createSelector(getConsentsData, consents => consents.modifyConsentsInCartQueue);

const canSkipNumberReservation = createSelector(
    [getSelectedMethodForDevices, getSelectedDeliveryMethods, getConvergentEntries, getMobileCartDevices],
    (selectedMethodForDevices, selectedDeliveryMethods, convergentEntries, mobileDevices) =>
    convergentEntries.length === 0 ?
    (selectedMethodForDevices && selectedMethodForDevices !== "" && selectedMethodForDevices !== DeliveryMethod.POS) :
    isSerialNumberRequirementFulfilledForMagnum(mobileDevices, selectedDeliveryMethods, convergentEntries)
);

export const cartContainsReservableItems = createSelector([allCartEntries, getSelectedDeliveryMethods, getSelectedMethodForDevices], (cartEntries, selectedDeliveryMethods, selectedMethodForDevices) => {
    let reservableCartEntries = cartEntries.filter(entry => {
        let selectedDeliveryMethod;
        if (entry.entryType === CartEntryType.FIX) {
            selectedDeliveryMethod = selectedDeliveryMethods.fixDevices ? selectedDeliveryMethods.fixDevices.id : selectedMethodForDevices;
        } else {
            selectedDeliveryMethod = selectedDeliveryMethods.mobile ? selectedDeliveryMethods.mobile.id : "";
        }
        return selectedDeliveryMethod === "" || selectedDeliveryMethod === DeliveryMethod.POS;
    });
    return cartEntriesContainsReservableItems(reservableCartEntries);
});

export const cartContainsAnySim = createSelector(allCartEntries, cartEntries => {
    return cartContainsEsim(cartEntries);
});

export const cartContainsReservableSim = createSelector([getSelectedDeliveryMethods, cartContainsAnySim], (selectedDeliveryMethods, anySim) => {
    let selectedDeliveryMethod = selectedDeliveryMethods.mobile ? selectedDeliveryMethods.mobile.id : "";
    return (selectedDeliveryMethod === "" || selectedDeliveryMethod === DeliveryMethod.POS) && anySim;
});

export const cartContainsAnyPhysicalSimCard = createSelector(allCartEntries, cartEntries => {
    return cartEntries.filter(entry => entryContainsReservableSimCard(entry)).length > 0;
});

export const isDigitalAgreementTypeWithoutPhysicalSimAndDevices = createSelector([getAgreementType, isCartMobile, cartContainsAnyPhysicalSimCard, cartHasMobileDevices], (agreementType, isCartMobile, cartContainsAnyPhysicalSimCard, cartHasMobileDevices) => agreementType === AgreementType.DIGITAL && isCartMobile && !cartContainsAnyPhysicalSimCard && !cartHasMobileDevices);

export const hasAgreementTypeChanged = createSelector([getCartAgreementType, getAgreementType], (cartAgreementType, agreementType) => {
    return (!cartAgreementType && agreementType === AgreementType.DIGITAL) ||
        (cartAgreementType === AgreementType.DIGITAL && agreementType === AgreementType.PAPER);
});

export const getDefaultDeliveryMethod = createSelector([getDeliveryMethods, getDeliveryMethodsRaw, getDelivery], (deliveryMethodsParam, deliveryMethodsRawParam, delivery) => {
    const deliveryMethodsRaw = (deliveryMethodsRawParam || []).filter(dm => dm.id !== DeliveryMethod.PICKUP_ON_EMAIL);
    const deliveryMethods = (deliveryMethodsParam || []).filter(dm => dm.id !== DeliveryMethod.PICKUP_ON_EMAIL);
    if (delivery.isFirstMethodDefault || (deliveryMethods || []).length === 1) {
        const availableDeliveryMethodCodes = deliveryMethods.map(deliveryMethod => deliveryMethod.id);
        if (availableDeliveryMethodCodes.length > 0) {
            console.warn("getDefaultDeliveryMethod", availableDeliveryMethodCodes[0]);
            return availableDeliveryMethodCodes[0];
        }
        const rawDeliveryMethodCodes = deliveryMethodsRaw.map(d => d.id);
        return rawDeliveryMethodCodes[0] || null;
    } else {
        return null;
    }
});

export const getSelectedOrDefaultMobileAgreementType = createSelector([isAgreementTypeRequired, getCustomerNoEmail, isDigitalAgreementDefault, getCartAgreementType], (isAgreementTypeRequired, hasCustomerNoEmail, isDigitalAgreementDefault, cartAgreementType) => {
    if (!isAgreementTypeRequired || (hasCustomerNoEmail && cartAgreementType)) {
        return AgreementType.PAPER;
    }
    if (isDigitalAgreementDefault && !cartAgreementType) {
        return AgreementType.DIGITAL;
    }
    return cartAgreementType;
});

export const getSelectedOrDefaultAgreementType = createSelector(
    [isAgreementTypeRequired, getCustomerNoEmail, isDigitalAgreementDefault, getCartAgreementType, getDeliveryMobile, getDefaultDeliveryMethod, getCartDeliveryMethod, getDeliveryMethodsRaw, getSelectedOrDefaultMobileAgreementType],
    (isAgreementTypeRequired, hasCustomerNoEmail, isDigitalAgreementDefault, cartAgreementType, mobileDelivery, defaultDeliveryMethod, cartDeliveryMethod, rawDeliveryMethods, mobileAgreementType) => {
        if (!mobileDelivery) {
            const digitalAvailable = rawDeliveryMethods.map(d => d.id).some(DeliveryMethod.isDigital);
            const cartAgreementDigital = cartAgreementType === AgreementType.DIGITAL && digitalAvailable;
            const digital = cartAgreementDigital || (isDigitalAgreementDefault && digitalAvailable);
            return digital ? AgreementType.DIGITAL : AgreementType.PAPER;
        } else {
            return hasCustomerNoEmail ? AgreementType.PAPER : mobileAgreementType;
        }
    });

export const getAvailableDeliveryMethodCodes = createSelector([getDeliveryMethods, getAgreementType, getCustomerNoEmail], (deliveryMethods, agreementType, customerNoEmail) => {
    return deliveryMethods
        .map(deliveryMethod => deliveryMethod.id)
        .filter(deliveryMethodId => !(customerNoEmail && deliveryMethodId === DeliveryMethod.PICKUP_FROM_SHELF))
        .filter(deliveryMethodId => !(DeliveryMethod.PICKUP_ON_EMAIL === deliveryMethodId && AgreementType.PAPER === agreementType));
});

export const getSelectedOrDefaultDeliveryMethod = createSelector(
    [getSelectedDeliveryMethodCode, getCartDeliveryMethod, getDefaultDeliveryMethod, isDigitalAgreementTypeWithoutPhysicalSimAndDevices, getAvailableDeliveryMethodCodes],
    (selectedDeliveryMethodCode, cartDeliveryMethod, defaultDeliveryMethod, isDigitalAgreementTypeWithoutPhysicalSimAndDevices, availableDeliveryMethodCodes) => {
        if (isDigitalAgreementTypeWithoutPhysicalSimAndDevices) {
            return DeliveryMethod.PICKUP_ON_EMAIL;
        }
        const deliveryMethodCode = selectedDeliveryMethodCode || cartDeliveryMethod;
        if (deliveryMethodCode && availableDeliveryMethodCodes.includes(deliveryMethodCode)) {
            return deliveryMethodCode;
        }
        return defaultDeliveryMethod;
    });

export const getSelectedOrDefaultPaymentMethod = createSelector([getSelectedDeliveryMethodCode, getDeliveryMethodsRaw, getSelectedPaymentMethod, getAvailablePaymentMethods], (selectedDeliveryMethodCode, deliveryMethodsRaw, selectedPaymentMethod, availablePaymentMethods) => {
    const deliveryMethod = deliveryMethodsRaw.find(deliveryMethod => deliveryMethod.id === selectedDeliveryMethodCode);
    const paymentMethodCodes = getPaymentMethodsForDelivery(deliveryMethod).map(paymentMethod => paymentMethod.id);
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

const getDefaultPaymentMethodForDelivery = deliveryMethod => {
    const defaultDeliveryMethodCode = getPaymentMethodsForDelivery(deliveryMethod).find(paymentMethod => paymentMethod.isDefault);
    if (defaultDeliveryMethodCode) {
        return defaultDeliveryMethodCode.id;
    }
    return null;
};

const getPaymentMethodsForDelivery = deliveryMethod => {
    if (deliveryMethod && deliveryMethod.supportedPaymentMethods && deliveryMethod.supportedPaymentMethods.length > 0) {
        return deliveryMethod.supportedPaymentMethods;
    }
    return [];
};

export const isSelectedDeliveryMethodAvailable = createSelector([getSelectedDeliveryMethodCode, getAvailableDeliveryMethodCodes], (selectedDeliveryMethodCode, deliveryMethodCodes) => {
    return selectedDeliveryMethodCode && deliveryMethodCodes.includes(selectedDeliveryMethodCode);
});

export const shouldShowEmailWarning = createSelector([getCartDeliveryMethod, getCartAgreementType, getCustomerNoEmail], (cartDeliveryMethod, cartAgreementType, customerNoEmail) => {
    return customerNoEmail && (cartAgreementType === AgreementType.DIGITAL || cartDeliveryMethod === DeliveryMethod.PICKUP_FROM_SHELF);
});

export const getDescriptionKey = createSelector(getCartDeliveryMethod, cartDeliveryMethod => {
    if (cartDeliveryMethod === DeliveryMethod.PICKUP_FROM_SHELF) {
        return EmailWarningDescriptionEnum.PICKUP;
    }
    return EmailWarningDescriptionEnum.DEFAULT;
});

export const invoiceIsPresentAndPaid = createSelector(
    [getCheckoutState, canSkipNumberReservation, cartContainsReservableItems],
    (checkout, skipNumberReservation, cartContainsReservableItems) => (
        (checkout.reservation.paymentAndFiscalization && checkout.reservation.paymentAndFiscalization.isInvoicePresent) ?
        (checkout.reservation.paymentStatus || checkout.reservation.paymentOverride) :
        (checkout.reservation.saleUnlocked ||
            checkout.reservation.paymentStatus ||
            checkout.reservation.paymentOverride ||
            !checkout.reservation.productsExists ||
            checkout.reservation.agencyPosStatusValid ||
            skipNumberReservation ||
            !cartContainsReservableItems
        )
    )
);


// Cart Data
export const reservationData = createSelector(getCheckoutState, checkout => checkout.reservation);
export const getReservationSimCardTypes = createSelector(reservationData, reservation => reservation.simCardTypes);
export const getSimCardTypeForBundle = bundleNo => createSelector(getReservationSimCardTypes, simCardTypes => simCardTypes[bundleNo]);
const serialNumbersFilled = state => areSerialNumbersFilled(state.checkout.reservation.serialNumbers, state);
export const isReservationButtonDisabled = createSelector([reservationData, serialNumbersFilled, cartContainsReservableItems], (reservation, serialNumbersFilled, cartContainsReservableItems) => {
    return !cartContainsReservableItems ||
        !serialNumbersFilled ||
        reservation.sapReservationNumber ||
        reservation.serialNumberVerificationInProgress ||
        reservation.agencyPosStatusValid;
});

export const containsFixEntries = createSelector([getFixEntries], fixEntries => {
    return (fixEntries != null && fixEntries.length > 0);
});

export const containsConvergentEntries = createSelector([getConvergentEntries], convergentEntries => {
    return (convergentEntries != null && convergentEntries.length > 0);
});

export const getCustomerForm = createSelector(
    [
        getCustomerData,
        getCustomerDataErrors,
        isExistingCustomer,
    ], (
        data,
        errors,
        existing,
        readOnly
    ) => ({
        ...data,
        errors,
        existing,
        readOnly,
    })
);

export const getContactCustomerForm = createSelector(
    [
        getCustomerContact,
        getCustomerContactErrors,
        isExistingCustomer,
    ], (
        contact,
        errors,
        existing,
        readOnly
    ) => ({
        ...contact,
        errors,
        existing,
        readOnly,
    })
);

// Component specific selectors - move to containers
export const getCustomerDataForm = createSelector(
    [
        getCustomerData,
        getCustomerDataErrors,
        isCustomerDataReadOnly,
        isExistingCustomer,
        getSalesOfGoodsProcess,
        getSalesOfAddonsProcess,
        customerDataRequested,
        customerDataLoading,
        isSmsVerified,
        isOnlineCookie,
        isWWW,
        bpgRequested,
        containsFixEntries,
        getCartIsNet,
        isNewAgreementInDocuments,
        isCartFix,
    ], (
        data,
        errors,
        readOnly,
        existing,
        isSalesOfGoodsOnly,
        isSalesOfAddonsOnly,
        customerDataRequested,
        customerDataLoading,
        isSmsVerified,
        isOnlineCookie,
        isWWW,
        bpgRequested,
        containsFixEntries,
        isB2B,
        isNewAgreementInDocuments,
        isCartFix
    ) => ({
        ...data,
        errors,
        readOnly,
        existing,
        isSalesOfGoodsOnly,
        isSalesOfAddonsOnly,
        show: customerDataRequested && !customerDataLoading,
        isSmsVerified,
        isOnlineCookie,
        isWWW,
        bpgRequested,
        containsFixEntries,
        isB2B,
        isBzuOnlyAvailableOptionForFix: !isNewAgreementInDocuments && existing && isSalesOfAddonsOnly && isCartFix,
    })
);

export const getCustomerDataToValidation = createSelector(
    [getCustomerDataForm, getSalesOfGoodsProcess, getSalesOfAddonsProcess], (data, isSOG, isSOA) => {
        const dataToValidate = {};
        const keysToIgnore = [];
        if (data.isBusinessClient) {
            Object.keys(emptyPersonalData).forEach(k => keysToIgnore.push(k));
            if (isSOG || isSOA) {
                keysToIgnore.push("regon");
                keysToIgnore.push("registrationDate");
                keysToIgnore.push("companyStatus");
            }
        } else {
            Object.keys(emptyBusinessData).forEach(k => keysToIgnore.push(k));
            if (isSOG || isSOA) {
                Object.keys(emptyPolishPersonalData).forEach(k => keysToIgnore.push(k));
                Object.keys(emptyForeignerPersonalData).forEach(k => keysToIgnore.push(k));
            } else {
                if (data.foreigner) {
                    getKeysToIgnoreForForeigner(keysToIgnore, data).forEach(key => keysToIgnore.push(key));
                } else {
                    Object.keys(emptyForeignerPersonalData).forEach(k => keysToIgnore.push(k));
                }
            }
        }
        Object.keys(data).filter(k => keysToIgnore.indexOf(k) === -1).forEach(vk => dataToValidate[vk] = data[vk]);
        return dataToValidate;
    }
);

const getKeysToIgnoreForForeigner = (keysToIgnore, customer) => {
    if (!customer.noPesel) {
        return [...keysToIgnore, Object.keys(emptyPolishPersonalData).filter(key => key !== "pesel")];
    }
    return [...keysToIgnore, Object.keys(emptyPolishPersonalData)];
};

export const getCustomerMainAddressForm = createSelector(
    [
        getAddressMain,
        getCustomerMainAddressErrors,
        getCitySuggestionsForMainAddress,
        getStreetSuggestionsForMainAddress,
        getMainAddressValidation,
        isCustomerDataReadOnly,
        customerDataRequested,
        customerDataLoading,
        isBusinessClient,
        isForeignerCheckboxAvailable,
        bpgRequested,
        isExistingCustomer,
        hasFixAddress,
        getSalesOfGoodsProcess,
        getSalesOfAddonsProcess,
        isWWW,
        isNewAgreementInDocuments,
        isCartFix,
    ],
    (
        address,
        errors,
        citySuggestions,
        streetSuggestions,
        validation,
        readOnly,
        customerDataRequested,
        customerDataLoading,
        isBusinessClient,
        isForeignerCheckboxAvailable,
        bpgRequested,
        existing,
        hasFixAddress,
        isSalesOfGoodsOnly,
        isSalesOfAddonsOnly,
        isWWW,
        isNewAgreementInDocuments,
        isCartFix
    ) => ({
        ...address,
        errors,
        citySuggestions,
        streetSuggestions,
        validation,
        readOnly,
        isBusinessClient,
        isForeignerCheckboxAvailable,
        bpgRequested,
        show: customerDataRequested && !customerDataLoading,
        existing,
        hasFixAddress,
        isSalesOfGoodsOnly,
        isSalesOfAddonsOnly,
        isWWW,
        isBzuOnlyAvailableOptionForFix: !isNewAgreementInDocuments && existing && isSalesOfAddonsOnly && isCartFix,
    })
);

export const getCustomerCorrespondenceAddressForm = createSelector(
    [getAddressCorrespondence, getCustomerCorrespondenceAddressErrors, getCitySuggestionsForCorrespondenceAddress, getStreetSuggestionsForCorrespondenceAddress, getCorrespondenceAddressValidation, getAddressCorrespondenceMapping, isCustomerDataReadOnly],
    (address, errors, citySuggestions, streetSuggestions, validation, addressMapping, readOnly) => ({
        ...address,
        errors,
        citySuggestions,
        streetSuggestions,
        validation,
        addressMapping,
        readOnly
    })
);

function isEmailRequiredByEntries(entries) {
    const subTypeRequiringEmail = "NEOIBEZP";
    return entries.some(entry => (entry.vases || []).some(vas => vas.subType === subTypeRequiringEmail));
}

export const isEmailRequiredByProductInCart = createSelector([getFixEntries, getConvergentEntries, containsFixEntries, containsConvergentEntries], (fixEntries, convergentEntries, containsFixEntries, containsConvergentEntries) => {
    if (containsFixEntries) {
        return isEmailRequiredByEntries(fixEntries);
    } else if (containsConvergentEntries) {
        return convergentEntries.some(entry => isEmailRequiredByEntries(entry.entries));
    }
    return false;
});

export const isEmailFormValid = createSelector([isEmailRequiredByProductInCart, getCustomerNoEmail], (isEmailRequiredByProductInCart, customerNoEmail) => {
    return isEmailRequiredByProductInCart && customerNoEmail;
});

export const getMnpContactMethods = contactMethods => createSelector(isEmailFilledAndValid, (isEmailFilledAndValid) => {
    if (isEmailFilledAndValid) {
        return contactMethods.sort((a, b) => a.priority - b.priority);
    }
    return contactMethods.filter(contactMethod => !like(contactMethod.value, "EMAIL"))
        .sort((a, b) => a.priority - b.priority);
});

export const isEmailFilledAndValid = createSelector([getCustomerContact, getCustomerContactErrors], (contact, contactErrors) => {
    return contact.emailAddress && (!contactErrors || !contactErrors.emailAddress || contactErrors.emailAddress.length === 0);
});

export const getCustomerContactForm = createSelector(
    [
        getCustomerContact,
        getCustomerContactErrors,
        isCustomerDataReadOnly,
        isExistingCustomer,
        getFixEntries,
        customerDataRequested,
        customerDataLoading,
        isBusinessClient,
        isForeignerCheckboxAvailable,
        bpgRequested,
        getSalesOfGoodsProcess,
        getSalesOfAddonsProcess,
        isWWW,
        isEmailRequiredByProductInCart,
    ],
    (
        contact,
        errors,
        readOnly,
        existing,
        fixentries,
        customerDataRequested,
        customerDataLoading,
        isBusinessClient,
        isForeignerCheckboxAvailable,
        bpgRequested,
        isSalesOfGoodsOnly,
        isSalesOfAddonsOnly,
        isWWW,
        isEmailRequiredByProductInCart
    ) => ({
        ...contact,
        errors,
        readOnly,
        existing,
        fixentries,
        isBusinessClient,
        isForeignerCheckboxAvailable,
        bpgRequested,
        show: customerDataRequested && !customerDataLoading,
        isSalesOfGoodsOnly,
        isSalesOfAddonsOnly,
        isWWW,
        isEmailRequiredByProductInCart,
    })
);
export const getCustomerContactMsisdn = createSelector(getCustomerContact, contact => contact.phoneNumber);
export const getDeliveryAddressForm = createSelector(
    [
        getAddressDelivery,
        getDeliveryAddressErrors,
        getCitySuggestionsForDeliveryAddress,
        getStreetSuggestionsForDeliveryAddress,
        getDeliveryAddressValidation,
        getAddressDeliveryMapping,
        isCustomerDataReadOnly,
        getAddressMain,
    ], (address, errors, citySuggestions, streetSuggestions, validation, addressMapping, readOnly, addressMain) => ({
        ...address,
        errors,
        citySuggestions,
        streetSuggestions,
        validation,
        addressMapping,
        readOnly,
        addressMain
    })
);

//usunac tego hardcode na city ale to po konsultacji z tworca tej formatki
export const isDeliveryAddressValid = createSelector([getDeliveryAddressValidation, getAddressDeliveryMapping, getAddressDelivery], (cbsResult, addressType, deliveryAddress) => {
    return addressType === "main" || (addressType === "delivery" && !Object.keys(cbsResult).find(key => key !== "city" && !cbsResult[key]) && !_isEmpty(deliveryAddress.streetNumber))
});

//VALIDATION
//przyklad uzycia selectora ktory pobiera propsy z komponentu jako argumenty
//export const createTestPropsSelector = () => createSelector([getConsentsData, (_,props) => props.consentTypesList],(consentData,cmsConfig) => {return {test:consentData,cms:cmsConfig}})

export const allConsentsValid = createSelector([getCheckoutConsents, getConsentsCheckoutData], (consents, selectedStates) => {
    return !consents.find(consent => !validateConsent(consent, selectedStates));
});

const isSerialNumberRequirementFulfilledForMagnum = (mobileDevices, selectedDeliveryMethods, convergentEntries) => selectedDeliveryMethods && isSerialNumberRequirementFulfilledForFixPart(selectedDeliveryMethods) && isSerialNumberRequirementFulfilledForMobilePart(mobileDevices, selectedDeliveryMethods, convergentEntries);

const isSerialNumberRequirementFulfilledForFixPart = selectedDeliveryMethods => !isDeliveryMethodRequired(selectedDeliveryMethods.fixDevices) || (isDeliveryMethodSelected(selectedDeliveryMethods.fixDevices) && selectedDeliveryMethods.fixDevices.id !== DeliveryMethod.POS);

const isSerialNumberRequirementFulfilledForMobilePart = (mobileDevices, selectedDeliveryMethods, convergentEntries) => (mobileDevices && mobileDevices.length === 0 && !checkSimInConvergentEntries(convergentEntries)) || !isDeliveryMethodRequired(selectedDeliveryMethods.mobile) || (isDeliveryMethodSelected(selectedDeliveryMethods.mobile) && selectedDeliveryMethods.mobile.id !== DeliveryMethod.POS);

function checkSimInConvergentEntries(convergentEntries) {
    if (convergentEntries) {
        let entries = convergentEntries[0];
        return entries.entries.some(convergentEntriesInEntries => convergentEntriesInEntries.isSim === true);
    } else {
        return false;
    }

}

function _countEntriesForProcess(processEntries, process) {
    let res = 0;
    for (let i = 0; i < processEntries.length; i++) {
        if (processEntries[i] === process) {
            res++;
        }
    }
    return res;
}

function _isFormFilled(data, isSalesOfGoodsProcess, isSalesOfAddonsProcess) {
    const excludeValidKeys = _getExcludedFieldConfiguration(data, isSalesOfGoodsProcess, isSalesOfAddonsProcess);
    return Object.keys(data)
        .filter(key => excludeValidKeys.indexOf(key) === -1)
        .filter(key => typeof(data[key]) !== "boolean" && !data[key]).length === 0;
}

function _getExcludedFieldConfiguration(data, isSalesOfGoodsProcess, isSalesOfAddonsProcess) {
    const excludeValidKeys = [];

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
        Object.keys(emptyBusinessData).map(k => excludeValidKeys.push(k));
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
    }

    //TODO: Ugly hardcoded... DO NOT EXTEND THIS!
    if (data.customerNoEmail) {
        excludeValidKeys.push("emailAddress");
    }

    return excludeValidKeys;
}

function _isStreetNumberFilled(data) {
    return data["streetNumber"] !== "";
}

function _isError(error) {
    return error !== undefined ? Object.keys(error).filter(key => error[key].length !== 0).length !== 0 : false;
}

function _hasErrorsIgnoreFields(error, fieldKeysToIgnore) {
    return error && Object.keys(error).filter(key => (error[key] && error[key].length > 0 && fieldKeysToIgnore.indexOf(key) === -1)).length !== 0;
}

function _isAdresCbsValid(address) {
    return Object.keys(address).filter(key => address[key] === false).length <= 1;
}

export const isCustomerDataValid = createSelector(
    [
        getCustomerData,
        getCustomerContact,
        getAddressMain,
        getAddressCorrespondence,
        getCustomerDataErrors,
        getCustomerContactErrors,
        getAddressCorrespondenceMapping,
        getMainAddressValidation,
        getCorrespondenceAddressValidation,
        getSalesOfGoodsProcess,
        getSalesOfAddonsProcess,
        getCustomerAddressErrors,
        isEmailFormValid,
    ],
    (customerData, customerContact, addressMain, addressCorrespondence, customerDataErrors, customerContactErrors,
        addressCorrespondenceMapping, mainAddressValidation, correspondenceAddressValidation, isSalesOfGoodsProcess, isSalesOfAddonsProcess, customerAddressErrors, isEmailFormValid) => {
        const isCorrespondenceAddress = addressCorrespondenceMapping === "correspondence";
        const isAddressCorrespondenceFilled = isCorrespondenceAddress ? _isAdresCbsValid(correspondenceAddressValidation) && _isStreetNumberFilled(addressCorrespondence) : true;
        const fieldKeysToIgnore = getCustomerFieldKeysToIgnore(customerData, isSalesOfGoodsProcess, isSalesOfAddonsProcess);
        const contactFieldKeysToIgnore = customerContact.customerNoEmail ? ["emailAddress"] : [];
        console.log("isSalesOfGoodsProcess ", isSalesOfGoodsProcess);
        console.log("isSalesOfAddonsProcess ", isSalesOfAddonsProcess);
        console.log("fieldKeysToIgnore ", fieldKeysToIgnore);
        return _isFormFilled(customerData, isSalesOfGoodsProcess, isSalesOfAddonsProcess) &&
            _isFormFilled(customerContact) &&
            _isAdresCbsValid(mainAddressValidation) &&
            _isStreetNumberFilled(addressMain) &&
            isAddressCorrespondenceFilled &&
            !_hasErrorsIgnoreFields(customerDataErrors, fieldKeysToIgnore) &&
            !_hasErrorsIgnoreFields(customerContactErrors, contactFieldKeysToIgnore) &&
            !_hasErrorsIgnoreFields(customerAddressErrors, ["streetId", "townId"]) &&
            !isEmailFormValid;
    });

const getCustomerFieldKeysToIgnore = (customer, isSogProcess, isSoaProcess) => {
    let keysToIgnore = [];
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

export const isNotNecessaryToCheckDocument = createSelector(getConvergentEntries, convergentEntries => {
    return convergentEntries.length > 0 && convergentEntries.every(entry => is2UCartEntry(entry) || is4UCartEntry(entry));
});

export const isDocumentSelected = createSelector([getCvDocumentsList, getSelectedCvDocument, isNotNecessaryToCheckDocument],
    (cvDocumentsList, selectedCvDocument, notNecessaryToCheckDocument) => {
        //selectedCvDocument is string, doc.id is int
        return notNecessaryToCheckDocument || cvDocumentsList.some(doc => doc.id === +selectedCvDocument);
    });

export const isCVPhoneFilled = createSelector([getCvDocumentsList, getSelectedCvDocument, getDocumentCustomerWorkPhoneNumber, getCvDocumentsErrors, isNotNecessaryToCheckDocument],
    (cvDocumentsList, selectedCvDocument, customerWorkPhoneNumber, cvDocErrors, notNecessaryToCheckDocument) => {
        //selectedCvDocument is string, doc.id is int
        const selectedDoc = cvDocumentsList.find(doc => doc.id === +selectedCvDocument);
        const phoneNeeded = !!selectedDoc && selectedDoc.isNeededTextField;
        const isPhoneCorrect = !cvDocErrors || !cvDocErrors["customerWorkPhoneNumber"] || cvDocErrors["customerWorkPhoneNumber"].length === 0;
        return notNecessaryToCheckDocument || (!phoneNeeded || (!!customerWorkPhoneNumber && isPhoneCorrect));
    });
export const isRetentionBonusesDataFilled = createSelector(
    [getMobileCartEntries, getMobileVasesRaw],
    (entries, mobileVas) => {

        let retentionEntriesCount = 0;
        let filledRetentionBonuses = 0;
        console.log("isRetentionBonusesDataFilled ");
        if (!!mobileVas && !!mobileVas.find(mv => mv.process === "RETENTION") && !!mobileVas.find(mv => mv.process === "RETENTION").categorizedBonuses["RetentionBonuses"]) {
            let retentionBonuses = mobileVas.find(mv => mv.process === "RETENTION").categorizedBonuses["RetentionBonuses"].services;
            if (!retentionBonuses || retentionBonuses.length <= 0) {
                return true;
            }
            entries.filter(entry => entry.processType === "RETENTION")
                .forEach(entry => {
                    retentionEntriesCount++;
                    if (!entry.vases || entry.vases.length === 0) {
                        console.log("NO RETENTION BONUS SELECTED FOR:", entry);
                        return false;
                    }
                    retentionBonuses.forEach(rb => {
                        console.log("RETENTION BONUS", rb.id);
                        console.log(entry.vases.find(vas => {
                            console.log(vas.productCode);
                            return vas.productCode == rb.id
                        }));
                        if (entry.vases.find(vas => {
                                console.log(vas.productCode);
                                return vas.productCode == rb.id
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


export const isMnpDataFilled = createSelector(
    [getMnpData, getCartIsNet],
    (mnpData, isB2B) => {

        if (Object.getOwnPropertyNames(mnpData).length === 0) {
            return true;
        }

        const x = mnpData.map(entry => {
            if (OnlineUtils.isMnpApplicationSecondStep(entry.processType)) {
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

export const isMnpDataValid = createSelector([getMnpData, getCartIsNet], (mnpData, isB2B) => {
    return Object.getOwnPropertyNames(mnpData).length === 0 ||
        mnpData.map(entry => {
            const entryErrors = {
                ...entry.errors
            };
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


            return Object.getOwnPropertyNames(entryErrors)
                .map(key => entryErrors[key]).reduce((prevErrors, nextErrors) => [...prevErrors, ...nextErrors]);
        })
        .reduce((prevErrors, nextErrors) => [...prevErrors, ...nextErrors], [])
        .length === 0;
});

export const getApuState = createSelector(getCheckoutState, checkout => checkout.apu.isApuSelected);

export const getReturnDocumentLoader = createSelector(getCheckoutState, checkout => checkout.returnDocument.returnDocumentLoader);

export const getConsentDocumentsPrintState = createSelector([getCheckoutState, getCurrentStepId], (checkout, currentStep) => {
    if ("customer-data" === currentStep) {
        return checkout.consents.consentDocumentsPrintState;
    }
    return true;
});

export const getIsCustomerDataStep = createSelector(getCurrentStepId, stepId => stepId === "customer-data");
export const getIsCartStep = createSelector(getCurrentStepId, stepId => stepId === "cart-contents");
export const getDeliveryAndPaymentStep = createSelector(getCurrentStepId, stepId => stepId === "delivery-payment");

export const getConsentTypeInPrintConsentsValidator = createSelector(getCheckoutState, checkout => checkout.consents.consentTypeInPrintConsentsValidator);

export const isWZRKConsentValid = createSelector([getCheckoutConsents, getConsentsCheckoutData, getConsentTypeInPrintConsentsValidator], (consents, selectedStates, consentType) => {
    return !consents.filter(consent => consent.type === consentType)
        .find(consent => !validateConsent(consent, selectedStates));
});

export const isPrintConsentDocumentsButtonEnabled = createSelector([isWZRKConsentValid, isDeliveryAddressValid, isCustomerDataValid, isRepresentativeDataValid, getCartIsNet], (isWZRKConsentValid, isDeliveryAddressValid, isCustomerDataValid, isRepresentativeDataValid, getCartIsNet) => {
    return !getCartIsNet ? isDeliveryAddressValid && isCustomerDataValid : isDeliveryAddressValid && isCustomerDataValid && isRepresentativeDataValid;
});

export const getDocumentsState = state => state["documents"];
export const getDocumentsItems = createSelector(getDocumentsState, documents => documents.items);
export const getDocumentsLinks = createSelector(getDocumentsState, documents => documents.links);

export const getShouldSignDocuments = createSelector([getSelectedMethodForDocuments, getDocumentsItems],
    (methodForDocuments, documentItems) => {
        return DeliveryMethod.POS === methodForDocuments && !!documentItems && documentItems.some(doc => doc.signable);
    }
);

const getCheckoutAgreement = createSelector(getCheckoutState, checkout => checkout.agreement);
const getAgreementIntroductionStatuses = createSelector(getCheckoutAgreement, agreement => agreement.introductionStatuses);
export const getAgreementIntroductionStatusForBundle = bundleNo => createSelector(getCheckoutAgreement, agreement => agreement.introductionStatuses[bundleNo] ? agreement.introductionStatuses[bundleNo] : 'TO_INTRODUCE');
export const isComplexAgreementLoadingForBundle = bundleNo => createSelector(getCheckoutAgreement, agreement => !!agreement.documentLoadings[bundleNo]);
export const allComplexDocumentsAreAccepted = createSelector([getMobileCartEntries, getAgreementIntroductionStatuses], (cartEntries, introductionStatuses) => cartEntries.every(cartEntry => introductionStatuses[cartEntry.bundleNo] === 'ACCEPTED'));
export const getDocumentCodesToMergeForBundle = bundleNo => createSelector(getCheckoutAgreement, agreement => {
    let documentsToMerge = agreement.documentsToMergePerBundle.find(bundleMergeDocuments => bundleMergeDocuments.bundleNo === bundleNo);
    if (documentsToMerge) {
        return documentsToMerge.documentCodes
    }
    return [];
});

export const getDocumentsCodesToMerge = createSelector(getCheckoutAgreement, agreement => agreement.documentsToMergePerBundle)

export const isDeliveryPhoneContactCorrect = createSelector([getCartIsNet, getDeliveryPhoneContact, getSelectedDeliveryMethodId], (isB2B, phoneContact, selectedMethodId) => {
    if (isB2B && selectedMethodId === "courier") {
        return phoneContact.length === 0 || phoneNumberRegexp(phoneContact);
    }
    if (!isB2B && selectedMethodId === "courier") {
        return phoneNumberRegexp(phoneContact);
    }
    return true;
});

export const areDeliveryConditionsMet = createSelector(
    [
        getSelectedDeliveryMethod,
        getSelectedDeliveryMethods,
        isDeliveryAddressValid,
        getConvergentEntries,
        isPickupDeliveryValid,
        isDeliveryPhoneContactCorrect,
        getSelectedPointOfSaleId,
        getAgreementType,
        getDeliveryEmailAddress,
        getDeliveryEmailAddressErrors,
    ],
    (
        selectedDeliveryMethod,
        selectedDeliveryMethods,
        deliveryAddressValid,
        convergentEntries,
        isPickupDeliveryValid,
        isDeliveryPhoneContactCorrect,
        selectedPointOfSaleId,
        agreementType,
        deliveryEmail,
        deliveryEmailErrors
    ) => {
        return (
                convergentEntries.length === 0 ?
                isMobileDeliveryValid(selectedDeliveryMethod, isPickupDeliveryValid, selectedPointOfSaleId) :
                _.filter(selectedDeliveryMethods, method => method === "").length === 0
            ) && (agreementType !== AgreementType.PAPER || deliveryAddressValid) &&
            (agreementType !== AgreementType.DIGITAL || (!!deliveryEmail && deliveryEmailErrors.length === 0)) &&
            (selectedDeliveryMethod.id !== DeliveryMethod.COURIER || isDeliveryPhoneContactCorrect);
    }
);

const isMobileDeliveryValid = (selectedDeliveryMethod, isPickupDeliveryValid, selectedPointOfSaleId) => {
    if (selectedDeliveryMethod && DeliveryMethod.PARCEL_LOCKER.toLowerCase() === selectedDeliveryMethod.id) {
        return !!selectedPointOfSaleId;
    }
    return selectedDeliveryMethod && isPickupDeliveryValid;
};

export const isDuplicatedOrder = createSelector([isDuplicateOrder, hasAccessRoleToProcessDuplicateOrder], (isDuplicateOrder, hasAccessRoleToProcessDuplicateOrder) => {
    return isDuplicateOrder && !hasAccessRoleToProcessDuplicateOrder;
});


function isContactValid(customerContactErrors, deliveryPhoneContact) {
    if ((customerContactErrors && customerContactErrors.phoneNumber && customerContactErrors.phoneNumber.length > 0) || deliveryPhoneContact == null || deliveryPhoneContact === "") {
        return false;
    }
    return true;
}

export const isContactForDAPValid = createSelector(
    [
        getInstallationPhoneContact,
        shouldSelectInstallation,
        getCustomerContactErrors,
        getDeliveryPhoneContact,
        getSelectedDeliveryMethods,
        getSelectedDeliveryMethod,
        getSelectedDeliveryMethodForDevices,
        getCurrentStepId,
        getInstallationPhoneContact
    ],
    (
        getInstallationPhoneContact,
        shouldSelectInstallation,
        customerContactErrors,
        deliveryPhoneContact,
        getSelectedDeliveryMethods,
        getSelectedDeliveryMethod,
        getSelectedDeliveryMethodForDevices,
        getCurrentStepId,
        installationPhoneContact
    ) => {
        if (shouldSelectInstallation) {
            if ((customerContactErrors && customerContactErrors.phoneNumberDAP && customerContactErrors.phoneNumberDAP.length > 0)) {
                return false;
            }
            if (installationPhoneContact.length !== 9 || !(/^\d+$/.test(installationPhoneContact))) {
                return false;
            }
        }
        return true;
    });

export const isContactForCourierValid = createSelector(
    [
        getCustomerContactErrors,
        getDeliveryPhoneContact,
        getSelectedDeliveryMethods,
        getSelectedDeliveryMethod,
        getSelectedDeliveryMethodForDevices,
        getCurrentStepId
    ],
    (
        customerContactErrors,
        deliveryPhoneContact,
        getSelectedDeliveryMethods,
        getSelectedDeliveryMethod,
        getSelectedDeliveryMethodForDevices,
        getCurrentStepId
    ) => {
        const COURIER = "courier";
        if (getCurrentStepId === "delivery-payment") {
            //fix or mobile
            if (getSelectedDeliveryMethods.fixDocuments === "") {
                if (getSelectedDeliveryMethod.id === COURIER || getSelectedDeliveryMethodForDevices.id === COURIER) {
                    return isContactValid(customerContactErrors, deliveryPhoneContact);
                }
            } else {
                //magnum
                if (getSelectedDeliveryMethods.fixDocuments && getSelectedDeliveryMethods.fixDocuments.id === COURIER ||
                    getSelectedDeliveryMethods.fixDevices && getSelectedDeliveryMethods.fixDevices.id === COURIER ||
                    getSelectedDeliveryMethods.mobile && getSelectedDeliveryMethods.mobile.id === COURIER) {
                    return isContactValid(customerContactErrors, deliveryPhoneContact);
                }
            }
        }
        return true;
    });

export const isConsentsInAcknowledgmentState = createSelector([getConsentAcknowledgmentsReadWhileTalking, getConsentDocumentStatus], (isChecked, status) => {
    return isChecked || status === "COMPLETED";
});

//wrzucic warunki do oddzielnego pliku
export const isNextStepAvailable = createSelector(
    [
        allConsentsValid,
        getApuState,
        getConsentDocumentsPrintState,
        isDoingCheckoutStep,
        getRegisteredCheckoutConditions,
        getSelectedPaymentMethod,
        isCustomerDataValid,
        isRepresentativeDataValid,
        isMnpDataValid,
        isMnpDataFilled,
        isBillingComponentValid,
        isDuplicatedOrder,
        isFixRepresentativeDataValid,
        isEmailFormValid,
        getDeliveryAndPaymentStep,
        getSelectedDeliveryMethod,
        isConsentsInAcknowledgmentState
    ],
    (
        consentValidation,
        apuValidation,
        getConsentDocumentsPrintState,
        inProgress,
        conditions,
        selectedPaymentMethod,
        customerDataValid,
        representativeDataValid,
        isMnpDataValid,
        isMnpDataFilled,
        isBillingComponentValid,
        isDuplicatedOrder,
        isFixRepresentativeDataValid,
        isEmailFormValid,
        isDeliveryAndPaymentStep,
        selectedDeliverMethod,
        isConsentsInAcknowledgmentState
    ) => !inProgress &&
    (isDeliveryAndPaymentStep || (!conditions["consents"] || consentValidation)) &&
    (!conditions["customerData"] || customerDataValid && representativeDataValid) &&
    (!conditions["fixRepresentativeData"] || isFixRepresentativeDataValid) &&
    (!conditions["mnpData"] || isMnpDataValid && isMnpDataFilled) &&
    (!conditions["apuData"] || apuValidation) &&
    (!conditions["consentDocuments"] || getConsentDocumentsPrintState) &&
    (!conditions["billingAccount"] || isBillingComponentValid) &&
    (!isDuplicatedOrder) &&
    (!isEmailFormValid) &&
    !(isDeliveryAndPaymentStep && selectedDeliverMethod && DeliveryMethod.ACCOUNT_MANAGER == selectedDeliverMethod.id) &&
    (!conditions["consentsAcknowledgment"] || isConsentsInAcknowledgmentState)
);


export const getPickup = createSelector(getCheckoutState, checkout => checkout.pickup);
export const posSimCardTypes = createSelector(getPickup, pickup => pickup.simCardTypes);
export const pickupSerialNumbers = createSelector(getPickup, pickup => pickup.serialNumbers);
export const getReservationStatus = createSelector(getPickup, pickup => pickup.reservationStatus);
export const getGoodsOrderPaymentStatus = createSelector(getPickup, pickup => pickup.goodsOrderPaymentStatus);
export const getPaymentOverrideStatus = createSelector(getPickup, pickup => pickup.paymentOverride);
export const getPaymentAndFiscalizationLoaded = createSelector(getPickup, pickup => pickup.paymentAndFiscalizationLoaded);
export const getPickupReplanishmentRequiredErrors = createSelector(getCheckoutErrors, errors => errors.pickupReplanishmentRequired);
export const getNavigationLoading = createSelector(getPickup, pickup => pickup.navigationLoading);
export const getLastOrder = createSelector(getPickup, pickup => pickup.lastOrder);
export const getOrderCanceled = createSelector(getPickup, pickup => pickup.canceled);
export const getPickupError = createSelector(getPickup, pickup => pickup.generalError);

function firstPickupErrorWhenExists(pickup) {
    return (pickup.generalError[0] ? pickup.generalError[0] : pickup.generalError);
}

export const getFirstPickupError = createSelector(getPickup, pickup => pickup.generalError && pickup.generalError.length > 0 ? firstPickupErrorWhenExists(pickup) : "");
export const getPickupDocuments = createSelector(getPickup, pickup => pickup.documents);
export const getPickupDocumentLinks = createSelector(getPickup, pickup => pickup.documentlinks);
export const getDownloadedDocumentCode = createSelector(getPickup, pickup => pickup.documentDownloaded);
export const getPickupSerialNumberErrors = createSelector(getPickup, pickup => pickup.serialNumberError);
const documentsPrinted = (documents, links) => {
    let required = Object.keys(documents).reduce((array, key) => array.concat(documents[key]), []).filter(document => document.signable);
    return required.every((document => {
        return !!links && links.hasOwnProperty(document.documentCode + "_" + document.bundleNo);
    }));
};
export const signableDocumentsPrintedPickup = createSelector([getPickupDocuments, getDocumentsLinks, areAllDocumentsSaved], (documents, links, allDocumentsSaved) => {
    return documentsPrinted(documents, links) || allDocumentsSaved;
});
export const signableDocumentsPrinted = createSelector([getDocumentsItems, getDocumentsLinks, areAllDocumentsSaved], (documents, links, allDocumentsSaved) => {
    return documentsPrinted(documents, links) || allDocumentsSaved;
})
export const getAssistModeStateFromStore = createSelector(getCheckoutState, checkout => checkout.assistMode);
export const getAssistModeStateData = createSelector(getAssistModeStateFromStore, assistMode => assistMode.assistModeState);
export const getAssistModeModalStateData = createSelector(getAssistModeStateFromStore, assistMode => assistMode.modalAssistModeState);
export const getAssistModeConfirmationModalStateData = createSelector(getAssistModeStateFromStore, assistMode => assistMode.confirmationModalState);
export const getEmployeeList = createSelector(getAssistModeStateFromStore, assistMode => assistMode.employeeList);
export const getEmployeeListFilters = createSelector(getAssistModeStateFromStore, assistMode => assistMode.filters);
export const isLoadingEmployeeList = createSelector(getAssistModeStateFromStore, assistMode => assistMode.isLoadingEmployeeList);
export const getSelectedEmployee = createSelector(getAssistModeStateFromStore, assistMode => assistMode.selectedEmployee);
export const getCurrentPage = createSelector(getAssistModeStateFromStore, assistMode => assistMode.page);
export const getFilterEnabled = createSelector(getAssistModeStateFromStore, assistMode => assistMode.filterEnabled);
export const isLoadingAssistModeState = createSelector(getAssistModeStateFromStore, assistMode => assistMode.isLoadingAssistModeState);
export const getAssistModeConfirmationLeaveModalStateData = createSelector(getAssistModeStateFromStore, assistMode => assistMode.confirmationLeaveModalState);

export const isEarlierInstallationConsentNotAcceptedModalVisible = createSelector(getMetadata, metadata => metadata.earlierInstallationConsentNotAcceptedModalIsVisible);
export const isEarlierInstallationConsentNotAcceptedModalIsAccepted = createSelector(getMetadata, metadata => metadata.earlierInstallationConsentNotAcceptedModalIsAccepted);
export const isEarlierInstallationConsentNotAcceptedModalMounted = createSelector(getMetadata, metadata => metadata.earlierInstallationConsentNotAcceptedModalDidMount);

export const isCourierDeliveryMethodModalVisible = createSelector(getMetadata, metadata => metadata.courierDeliveryMethodModalVisible);
export const isCourierDeliveryMethodModalMounted = createSelector(getMetadata, metadata => metadata.courierDeliveryMethodModalDidMount);
export const getCourierDeliveryMethodModalState = createSelector(getMetadata, metadata => metadata.courierDeliveryMethodModalState);


const getEmailWarningModalState = createSelector(getMetadata, metadata => metadata.emailWarningModalState);
export const isEmailWarningModal = createSelector(getEmailWarningModalState, modalState => modalState.visible);
export const getWarningModalDescriptionKey = createSelector(getEmailWarningModalState, modalState => modalState.descriptionKey);

function mergeDataAndErrors(data, errors) {
    let ret = data.map((item, index) => {
        return {
            ...item,
            errors: errors[index]
        };
    });
    return ret;
}

function makeBundleNoNullIfNecessary(rawConsentStates, getConsentsData) {
    let consents = getConsentsData.consents || [];
    let consentsMap = consents.reduce((map, obj) => {
        map[obj.consentCode] = obj;
        return map
    }, {});

    let ret = rawConsentStates.map(consentState => {
        let requestedConsent = consentsMap[consentState.consentCode];
        if (requestedConsent && !requestedConsent.msisdns && !requestedConsent.bundleAssignments[0]) {
            return {
                ...consentState,
                bundleNo: null
            }
        } else {
            return consentState
        }
    });
    return removeDuplicates(ret, obj => obj.consentCode + obj.bundleNo);
}

function removeDuplicates(array, hash) {
    let state = {};
    let ret = array.filter(notUnique => {
        let hashed = hash(notUnique);
        if (state[hashed]) {
            return false;
        } else {
            state[hashed] = "dummy";
            return true;
        }
    });
    return ret;
}

export const getAllReservableCartEntries = createSelector(
    [getSelectedDeliveryMethods, getSelectedMethodForDevices, allCartEntries], (selectedDeliveryMethods, selectedMethodForDevices, allCartEntries) => {
        return allCartEntries.filter(entry => {
            let selectedDeliveryMethod;
            if (entry.entryType === CartEntryType.FIX) {
                selectedDeliveryMethod = selectedDeliveryMethods.fixDevices ? selectedDeliveryMethods.fixDevices.id : selectedMethodForDevices;
            } else {
                selectedDeliveryMethod = selectedDeliveryMethods.mobile ? selectedDeliveryMethods.mobile.id : "";
            }
            return selectedDeliveryMethod === "" || selectedDeliveryMethod === DeliveryMethod.POS;
        });
    });


export const isRegisteredAgreementConfirmationComponent = createSelector(getConsentsData, consents => consents.isRegisteredAgreementConfirmationComponent);
export const wasBonusAgreementConfirmationModalConfirmed = createSelector(getConsentsData, consents => consents.wasBonusAgreementConfirmationModalConfirmed);
export const wasBigAndZonkAgreementConfirmationModalConfirmed = createSelector(getConsentsData, consents => consents.wasBigAndZonkAgreementConfirmationModalConfirmed);
export const getShowAgreementConfirmationModal = createSelector(getCheckoutErrors, errors => errors.showAgreementConfirmationModal);
export const getAgreementConfirmationModalVariant = createSelector(getCheckoutErrors, errors => errors.agreementConfirmationModalVariant);
export const getExistingOrderOrCartValidation = createSelector(getCheckoutErrors, errors => errors.existingOrderOrCartValidation);

export const getSectionForCourier = createSelector([getSelectedDeliveryMethods, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevices],
    (getSelectedDeliveryMethods, getSelectedDeliveryMethod, getSelectedDeliveryMethodForDevices) => {

        const DOCUMENTS_PACKAGE = "DOCUMENTS_PACKAGE";
        const DEVICES_PACKAGE = "DEVICES_PACKAGE";
        const EMPTY = "";
        const OTHER = "OTHER";
        const COURIER = "courier";

        //fix or mobile
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

export const getFixCartRefreshResult = createSelector(getMetadata, metadata => metadata.fixCartRefreshResult);
export const shouldShowModalAfterProcessChanged = createSelector(getFixCartRefreshResult,
    result => result && result.previousProcess === "ACTIVATION" && result.currentProcess === "ACTIVATION_NNAKED"
);

export const getFactoryCart = createSelector(getMiniCart, miniCart => {
    return miniCart && miniCart.entries && miniCart.entries.length > 0 ? miniCart.entries[0].entryType : "";
});

export const selectedDeliveryMethodIsPickupOnEmail = createSelector([getSelectedDeliveryMethodCode, getAgreementType, getFactoryCart], (selectedDeliveryMethod, agreementType, factory) => ((DeliveryMethod.PICKUP_ON_EMAIL === selectedDeliveryMethod) || (agreementType === AgreementType.DIGITAL && (factory === 'MOBILE' || !factory))));

const isIdVerificationNeeded = createSelector(getMobileCartEntries, entries => entries && entries.length > 0 && entries.some(entry => "ID_VERIFICATION_NEEDED" === entry.eagreementAvailabilityStatus));

const getIdVerificationState = createSelector(getCheckoutState, checkout => checkout.idVerification);
export const getIdVerificationBanks = createSelector(getIdVerificationState, idVerification => idVerification.banks);
export const getIdVerificationResult = createSelector(getIdVerificationState, idVerification => idVerification.verificationResult);
export const getIdVerificationSelectedBankId = createSelector(getIdVerificationResult, idVerificationResult => idVerificationResult.selectedBankId);
export const getIdVerificationStatus = createSelector(getIdVerificationResult, idVerificationResult => idVerificationResult.status);
export const isIdVerificationRequired = createSelector([selectedDeliveryMethodIsPickupOnEmail, customerHasActiveContracts, isIdVerificationNeeded], (selectedDeliveryMethodIsPickupOnEmail, customerHasActiveContracts, isIdVerificationNeeded) => ((selectedDeliveryMethodIsPickupOnEmail && !customerHasActiveContracts) || isIdVerificationNeeded));
export const isIdVerificationFailedOrEmpty = createSelector(getIdVerificationStatus, status => !status || status === "FAIL");
export const isIdVerificationRequiredAndNotVerified = createSelector([isIdVerificationRequired, getIdVerificationSelectedBankId, getIdVerificationStatus], (isIdVerificationRequired, selectedBankId, status) => isIdVerificationRequired && selectedBankId && !['SUCCESS', 'IN_PROGRESS'].includes(status));
export const isIdVerificationRequiredAndSucceed = createSelector([isIdVerificationRequired, getIdVerificationSelectedBankId, getIdVerificationStatus], (isIdVerificationRequired, selectedBankId, status) => isIdVerificationRequired && selectedBankId && status === 'SUCCESS');

// Summary
const getSummary = createSelector(getCheckoutState, checkout => checkout.summary);
export const getOrderFactoryForSummary = createSelector(getSummary, summary => {
    return summary && summary.orderSummary.entries && summary.orderSummary.entries.length > 0 ? summary.orderSummary.entries[0].entryType : "";
});

export const getSalesChannelForSummary = createSelector(getSummary, summary => summary && summary.salesChannel);

export const isFullPageLoader = createSelector(getMetadata, metadata => metadata.fullPageLoader);
export const allFixDeliveryMethods = createSelector(getDelivery, delivery => {
    return delivery.methods.length > 0 && delivery.methods.every(method => method.factory === "FIX");
});
export const noERegulationsConsent = createSelector(getConsentsStatesData, consentStates => {
    const eRegulationsConsentState = consentStates.find(consentState => consentState.consentCode === "21_CONV");
    return eRegulationsConsentState && eRegulationsConsentState.stateCode === "NO_21_CONV";
});
export const getPreparedSimRequestFragment = createSelector(
    [reservationData, getAllReservableCartEntries], (reservation, entries) => {
        const sims = [];
        entries.filter(entry => entry.isSim && entry.msisdn &&
            entry.simCard.reservable).map(entry => {
            const sim = {};
            sim.bundle = entry.bundleNo;
            sim.hasSerial = true;
            console.log(reservation.simCardTypes &&
                Object.keys(reservation.simCardTypes).length > 0);
            if (reservation.simCardTypes &&
                Object.keys(reservation.simCardTypes).length > 0) {
                const simType = reservation.simCardTypes[entry.bundleNo] ?
                    reservation.simCardTypes[entry.bundleNo] : "";
                const simTypeDefinition = reservation.simCardTypeDefinitions
                    .find(sim => sim.baseCode === simType);
                sim.sku = simTypeDefinition ? simTypeDefinition.sku : "";
            }
            sim.serialNumber = reservation.serialNumbers[entry.productCode + "_" + entry.bundleOmniCode];
            sim.type = "SIM_CARD";
            sim.msisdn = entry.msisdn;
            sims.push(sim);
        });
        return sims;
    });

export const simCardSerialNumberFilled =
    createSelector([reservationData, serialNumbersFilled, cartContainsReservableItems],
        (reservation, serialNumbersFilled, cartContainsReservableItems) =>
        !cartContainsReservableItems ||
        serialNumbersFilled &&
        reservation.verifySerialNumberError === "" &&
        reservation.agencyPosStatusValid
    );

export const getConsentSections = createSelector([getConsentsData], (consentsData) => {
    let conf = consentsData.conf || [];

    return conf.map((consentConfig) => {
        return ({
            isRequiredConsent: !!consentConfig.isRequired,
            sectionDescription: consentConfig.groupTitle,
            consentsCode: consentConfig.consentsCode
        });
    });

});