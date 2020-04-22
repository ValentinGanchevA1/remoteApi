export const emptyForeignerPersonalData = {
    country: "",
    identification: "",
    identificationNumber: "",
    identificationExpirationDate: "",
    identificationRegistrationDate: "",
    noPesel: false,
    gender: "",
    fakePesel: "",
    peselType: null
};
export const emptyPolishPersonalData = {
    pesel: "",
    idNumber: "",
    disabledIdNumber: false
};
export const emptyPersonalData = {
    firstName: "",
    lastName: "",
    ...emptyPolishPersonalData,
    ...emptyForeignerPersonalData,
    foreigner: false,
    hasActiveContracts: null
};
export const emptyBusinessData = {
    nip: "",
    regon: "",
    companyName: "",
    legalForm: "",
    registrationDate: "",
    companyStatus: "",
    statusAndDateFromBpg: false
};
export const emptyCustomerContact = {
    emailAddress: "",
    phoneNumber: "",
    customerNoEmail: false
};
export const emptyAddress = {
    firstName: "",
    lastName: "",
    companyName: "",
    postalCode: "",
    town: "",
    streetName: "",
    streetNumber: "",
    appartmentNo: "",
    wwtaddress: false
};