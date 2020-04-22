import {
    validateCensoredPesel,
    validateIdNumber
} from "../../core/validationHelper";
import {
    customerDataFormValidators
} from "../validators";
import SalesChannel from "../../core/enum/SalesChannel";
import {
    getLeadId
} from "../../cart/selectors";

const fixPhoneNumber = phoneNumber => {
    if (!phoneNumber) {
        return '';
    }
    let fixedPhoneNumber = phoneNumber.replace(/\D/g, '');
    return fixedPhoneNumber.length > 9 ? fixedPhoneNumber.slice(fixedPhoneNumber.length - 9) : fixedPhoneNumber;
};

const fixIdNumber = customer => {
    if (validateIdNumber(customer.idNumber) || customer.disabledIdNumber || customer.fixBundleInCart) {
        return customer.idNumber;
    }
    return '';
};

export const whenAvailable = (name, callback, number = 0) => {
    let interval = 10;
    window.setTimeout(() => {
        if (window[name]) {
            callback();
        } else {
            if (number % 10 === 0) {
                console.log("Still (" + number + ") waiting for " + name);
            }
            whenAvailable(name, callback);
        }
    }, interval);
};

export const fixCustomerData = customer => {
    if (customer) {
        let phoneNumber = fixPhoneNumber(customer.phoneNumber);
        let idNumber = fixIdNumber(customer);
        let gender = getEmptyStringIfFieldEmpty(customer.gender);
        let country = getEmptyStringIfFieldEmpty(customer.country);
        let fakePesel = getFakePesel(customer);
        let pesel = getPesel(customer);
        let identification = getEmptyStringIfFieldEmpty(customer.identification);
        let identificationNumber = getEmptyStringIfFieldEmpty(customer.identificationNumber);
        let identificationExpirationDate = getEmptyStringIfFieldEmpty(customer.identificationExpirationDate);
        return {
            ...customer,
            phoneNumber,
            idNumber,
            gender,
            fakePesel,
            pesel,
            identification,
            identificationNumber,
            identificationExpirationDate,
            country
        };
    }
    return {};
};

const getPesel = customer => {
    if (peselIsCensored(customer.pesel) && customer.peselType === 'VALID') {
        return customer.pesel
    }
    return ['FAKE', 'INVALID'].includes(customer.peselType) ? '' : customer.pesel
};

const peselIsCensored = pesel => {
    return validateCensoredPesel(pesel)
};

export const getCustomerDataErrors = customer => {
    return Object.assign({}, ...Object.keys(customer).map(
        key => (key && customer[key] &&
            Object.keys(customerDataFormValidators).includes(key) &&
            (!isFieldDisabledForValidation(customer, key)) &&
            {
                [key]: customerDataFormValidators[key](customer[key])
            })
    ));
};

const customUpperCase = str => {
    let mapLowerToUpper = {
        '223': 7838
    }; // 'ß'=>'ẞ'  (small sharp s to big sharp s)
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (mapLowerToUpper[charCode]) {
            result += String.fromCharCode(mapLowerToUpper[charCode]);
        } else {
            result += str.charAt(i).toUpperCase();
        }
    }
    return result;
}

export const toUpperCase = data => {
    if (!data) {
        return data;
    }
    if (typeof data === "string") {
        return customUpperCase(data);
    }
    if (typeof data === "object") {
        Object.keys(data).forEach(k => {
            data[k] = toUpperCase(data[k]);
        });
        return data;
    }
    return data;
};

export const fixCustomerCheckoutData = customer => {
    if (!customer.foreigner) {
        customer.identification = '';
        customer.identificationNumber = '';
        customer.identificationExpirationDate = '';
        customer.country = '';
        customer.gender = '';
    }
    if (customer.noPesel) {
        customer.pesel = '';
    }
    if (customer.fakePesel && customer.noPesel) {
        customer.pesel = customer.fakePesel;
    }
    return toUpperCase(customer);
};

const getFakePesel = customer => {
    if (customer.peselType === 'FAKE') {
        return customer.pesel;
    }
    return '';
};

const emptyBillingAccountForm = {
    postalCode: '',
    town: '',
    streetName: '',
    streetNumber: '',
    appartmentNo: '',
    emailAddress: ''
};
const getEmptyStringIfFieldEmpty = field => field ? field : '';

export const requiredBillingAccountFieldExist = billingAccount =>
    !!(billingAccount.postalCode &&
        billingAccount.town &&
        billingAccount.streetName &&
        billingAccount.streetNumber);

export const getBillingAccountForm = (billingAccount) => {
    if (!billingAccount) {
        return emptyBillingAccountForm;
    }
    let requiredFieldExist = requiredBillingAccountFieldExist(billingAccount);
    if (!requiredFieldExist) {
        return emptyBillingAccountForm;
    }
    billingAccount.appartmentNo = getEmptyStringIfFieldEmpty(billingAccount.appartmentNo);
    billingAccount.emailAddress = getEmptyStringIfFieldEmpty(billingAccount.emailAddress);
    return billingAccount;
};

export const validateConsent = (consent, selectedStates) => {
    if (consent.bundleAssignments && consent.bundleAssignments.length > 0) {
        return validatePerBundleConsent(consent, selectedStates);
    }
    const consentState = selectedStates.find(state => state.consentCode === consent.consentCode);
    return validateSingleConsent(consent, consentState);
};

const validatePerBundleConsent = (consent, selectedStates) => {
    let consentStates = consent.bundleAssignments.map(bundleAssignment =>
        selectedStates.find(state => state.consentCode === consent.consentCode && state.bundleNo === bundleAssignment.bundleNo)
    );
    return consentStates.every(state => validateSingleConsent(consent, state));
};

const validateSingleConsent = (consent, consentState) => {
    const selectedConsentState = consent.states && consent.states.find(state => consentState && (state.code === consentState.stateCode));
    const requiredConsentState = consent.states.find(state => state.required);
    return consent && (!consent.required || !requiredConsentState && consentState && consentState.stateCode || requiredConsentState && selectedConsentState && selectedConsentState.required);
};

export const removeElementFromArray = (array, param, value) => {
    let retVal = [];
    array.forEach(e => {
        if (e[param] !== value) {
            retVal.push(e);
        }
    });
    return retVal;
}

export const remapToPhone = (value) => {
    let tempVal = value.split(" ");
    return tempVal[tempVal.length - 1].split("-").join("").replace(/[\_]+/g, "");
}

export const hasManualVerificationErrors = (action) => {
    let results = action.results || [];
    return results.filter(result => result.category === "MANUAL").length > 0;
};

const consentIsMatrixType = consent => {
    return consent.msisdns && consent.msisdns.length > 0;
};

export const consentIsPermanentlyAgreed = (consent, consentStates) => {
    let permanentlyAgreedConsentStates = consentStates.filter(consentState => consentState.consentCode === consent.consentCode && consentState.permanentlyAgreed);
    if (permanentlyAgreedConsentStates.length === 0) {
        return false;
    }
    if (!consentIsMatrixType(consent)) {
        return true;
    }
    return consent.msisdns && consent.msisdns.length === permanentlyAgreedConsentStates.length;
};

export const isFieldDisabled = (data, name) => {
    switch (name) {
        case "nip":
            return !!data.existing;
        case "regon":
        case "legalForm":
        case "companyName":
        case "registrationDate":
        case "companyStatus":
        case "customerNoEmail":
            if (data.isBusinessClient !== undefined && data.isBusinessClient) {
                return !data.existing && !data.isSalesOfGoodsOnly && !data.bpgRequested;
            } else {
                return false;
            }
            case "lastName":
                return (!data.isWWW && data.existing) || isBzuOnlyAvailableOption(data);
            case "firstName":
                return (data.readOnly || data.existing) || isBzuOnlyAvailableOption(data);
            case "pesel":
                return ((data.readOnly || data.existing) && !data.foreigner) ||
                    (getLeadId !== null && 'VALID' === data.peselType) ||
                    ((data.readOnly || data.existing) && data.foreigner && 'VALID' === data.peselType) ||
                    (data.noPesel && data.foreigner) || isBzuOnlyAvailableOption(data);
            case "phoneNumber":
                if (data.isBusinessClient) {
                    return !data.isSalesOfGoodsOnly && !data.bpgRequested;
                } else {
                    return false;
                }
                case "country":
                    return (!!data.initialNationality && data.initialNationality !== "POL") || isBzuOnlyAvailableOption(data);
                case "emailAddress":
                    if (data.isBusinessClient) {
                        return !data.isSalesOfGoodsOnly && !data.bpgRequested || data.customerNoEmail;
                    } else {
                        return data.customerNoEmail;
                    }
                    case "postalCode":
                        return isBzuOnlyAvailableOption(data);
                    case "town":
                        return isBzuOnlyAvailableOption(data);
                    case "streetNumber":
                        return isBzuOnlyAvailableOption(data);
                    case "appartmentNo":
                        if (data.isBusinessClient !== undefined && data.isBusinessClient) {
                            return data.bpgRequested !== undefined ? !data.existing && !data.isSalesOfGoodsOnly && !data.bpgRequested : false;
                        } else {
                            return isBzuOnlyAvailableOption(data);
                        }
                        case "streetName":
                            let disabled = (!!data.streetSuggestions) && (!data.streetSuggestions.length) && (!data.streetName.length);
                            if (data.isBusinessClient !== undefined && data.isBusinessClient) {
                                return (data.bpgRequested !== undefined ? !data.existing && !data.isSalesOfGoodsOnly && !data.bpgRequested : false) || disabled;
                            } else {
                                return disabled || isBzuOnlyAvailableOption(data);
                            }
                            case "idNumber":
                                if (data.containsFixEntries && !isBzuOnlyAvailableOption(data)) {
                                    return false;
                                }
                                return (data.readOnly && data.disabledIdNumber) || isBzuOnlyAvailableOption(data);
                            case "identification":
                                return isBzuOnlyAvailableOption(data);
                            case "identificationNumber":
                                return isBzuOnlyAvailableOption(data);
                            case "identificationExpirationDate":
                                return isBzuOnlyAvailableOption(data);
                            case "identificationRegistrationDate":
                                return isBzuOnlyAvailableOption(data);
                            default:
                                return data.readOnly;
    }
};

function isBzuOnlyAvailableOption(data) {
    return data.isBzuOnlyAvailableOptionForFix && (data.channels.sales === SalesChannel.TLS || data.channels.sales === SalesChannel.IDG);
}

export const prepareForeignerIdentificationTypes = (values) => {
    if (values) {
        let tmp = [];
        Object.entries(values).forEach(([key, value]) => {
            let obj = {
                'value': key,
                'description': value
            };
            tmp.push(obj);
        });
        return tmp;
    } else {
        return []
    }
};

export const isFieldDisabledForValidation = (data, name) => {
    return !!data.isWWW && isFieldDisabled(data, name);
};

export const isMnpFieldInvisible = (data, name, isB2B) => {
    switch (name) {
        case "street":
        case "city":
        case "flatNumber":
        case "postalCode":
        case "houseNumber":
            return data.isHeadquartersAddressSame === true;
        case "businessName":
            return data.agreementType !== "2";
        case "nip":
            return data.agreementType !== "2" || data.identifier !== "NIP";
        case "regon":
            return data.agreementType !== "2" || data.identifier !== "REGON";
        case "date":
            return !data.offerType || (data.migrationMode !== "DAY" && data.migrationMode !== "EOP");
        case "pesel":
            return !isB2B || data.agreementType !== "1";
        case "idNumber":
            return !isB2B || data.agreementType !== "1";
        case "firstName":
            return !isB2B || data.agreementType !== "1";
        case "lastName":
            return !isB2B || data.agreementType !== "1";
        default:
            return false;
    }
};

export const createArrayWithValueOnIndex = (inArray, index, key, data, empty = {}) => {

    function pushUntilIndexIsValid(array, index) {
        while (!array[index]) array.push(empty)
    }

    index = index || 0
    let copy = inArray.slice()
    pushUntilIndexIsValid(copy, index)
    if (key) {
        copy[index] = {
            ...copy[index],
            [key]: (data === undefined ? "" : data)
        }
    }
    return copy
}

export const enforceArrayLengthInBounds = (array, minCount, maxCount, initValue) => {
    if (array.length < minCount) {
        let copy = array.slice()
        while (copy.length < minCount) {
            copy.push(initValue)
        }
        return copy
    } else if (array.length > maxCount) {
        return array.slice(0, maxCount)
    } else {
        return array
    }
}

function fieldValue(val) {
    return (val === null || val === undefined) ? "" : val;
}

export const runValidator = (object, validators, action, disabledFunction, dispatch) => {
    if (!!disabledFunction) {
        Object.keys(object).forEach(k => Object.keys(validators).includes(k) && (!disabledFunction(object, k) || object.fixBundleInCart) && dispatch(action({
            name: k,
            value: fieldValue(object[k]),
            entryIndex: object.bundleNo
        })));
    } else {
        Object.keys(object).forEach(k => Object.keys(validators).includes(k) && dispatch(action({
            name: k,
            value: fieldValue(object[k]),
            entryIndex: object.bundleNo
        })));
    }
}

export const createQueryParamString = params => {
    return Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');
};

export class StyleBuilder {
    constructor() {
        this.verticalAlign = 'middle';
        this.display = 'inline-block';
        this.float = 'none';
    }
    hidden(h) {
        this.display = h ? 'none' : 'inline-block';
        return this;
    }
    build() {
        return {
            verticalAlign: this.verticalAlign,
            display: this.display,
            float: this.float
        }
    }
}

export const like = (string, substing) => {
    return string.indexOf(substing) > -1;
};
export const getPropsForIdentification = (name, withMask, data, changeDataFormFiled, changeDataFormFiledNoValidation) => {
    let props = {
        ...getPropsForInput(name, data, changeDataFormFiled, changeDataFormFiledNoValidation)
    };
    if (withMask) {
        props.mask = 'aa9999999';
        props.placeholder = '______';
    }
    return props;
};
export const getPropsForInput = (name, props, changeDataFormFiled, changeDataFormFiledNoValidation) => {
    return {
        ...getCommonProps(name, props.descriptions, props.errors),
        value: props[name] || '',
        labelType: 'floating',
        validateEmpty: props[name] !== '' && props.existing,
        onChange: changeDataFormFiledNoValidation,
        onBlur: changeDataFormFiled
    };
};

const getCommonProps = (name, descriptions, errors) => {
    return {
        id: name,
        key: name,
        name: name,
        label: descriptions[name],
        errors: errors && errors[name],
    };
};
export const getPropsForSelect = (name, props, changeDataFormFiled) => {
    return {
        ...getCommonProps(name, props.descriptions, props.errors),
        selected: props[name],
        onChange: changeDataFormFiled,
        className: 'g-gray1-bg u-font-small',
        style: {
            height: '40px'
        },
        withEmptyOption: true
    };
};

export const getInputValidationParams = (name, props) => {
    const validationDisabled = isFieldDisabledForValidation(props, name);
    const disabled = isFieldDisabled(props, name);
    let params = {
        disabled
    };
    const valid = (!props.errors && props[name] !== '') || (props.errors && props.errors[name] && (props.errors[name].length === 0));
    if (!disabled || (!validationDisabled && !valid)) {
        params.valid = valid;
    }
    return params;
};

export const mapCountrySuggestion = (country) => {
    return {
        value: country.isocode,
        label: country.name
    };
};

export const getCountryName = (foreignCountries, country) => {
    if (!country) {
        country = "";
    }
    const result = foreignCountries.find(result => result.isocode === country);
    if (result) {
        return result.name;
    }
    return country
};

export const getCountrySuggestions = (foreignCountries, country) => {
    const enteredCountryName = getCountryName(foreignCountries, country).toUpperCase();
    return foreignCountries.filter(country => {
        const countryName = country.name.toUpperCase();
        return countryName.startsWith(enteredCountryName) || countryName.includes(' ' + enteredCountryName)
    });
};