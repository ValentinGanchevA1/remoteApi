define(["exports", "../../core/validationHelper", "../validators", "../../core/enum/SalesChannel", "../../cart/selectors"], function(_exports, _validationHelper, _validators, _SalesChannel, _selectors) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getCountrySuggestions = _exports.getCountryName = _exports.mapCountrySuggestion = _exports.getInputValidationParams = _exports.getPropsForSelect = _exports.getPropsForInput = _exports.getPropsForIdentification = _exports.like = _exports.StyleBuilder = _exports.createQueryParamString = _exports.runValidator = _exports.enforceArrayLengthInBounds = _exports.createArrayWithValueOnIndex = _exports.isMnpFieldInvisible = _exports.isFieldDisabledForValidation = _exports.prepareForeignerIdentificationTypes = _exports.isFieldDisabled = _exports.consentIsPermanentlyAgreed = _exports.hasManualVerificationErrors = _exports.remapToPhone = _exports.removeElementFromArray = _exports.validateConsent = _exports.getBillingAccountForm = _exports.requiredBillingAccountFieldExist = _exports.fixCustomerCheckoutData = _exports.toUpperCase = _exports.getCustomerDataErrors = _exports.fixCustomerData = _exports.whenAvailable = void 0;
    _SalesChannel = babelHelpers.interopRequireDefault(_SalesChannel);

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

    var fixPhoneNumber = function fixPhoneNumber(phoneNumber) {
        if (!phoneNumber) {
            return '';
        }

        var fixedPhoneNumber = phoneNumber.replace(/\D/g, '');
        return fixedPhoneNumber.length > 9 ? fixedPhoneNumber.slice(fixedPhoneNumber.length - 9) : fixedPhoneNumber;
    };

    var fixIdNumber = function fixIdNumber(customer) {
        if ((0, _validationHelper.validateIdNumber)(customer.idNumber) || customer.disabledIdNumber || customer.fixBundleInCart) {
            return customer.idNumber;
        }

        return '';
    };

    var whenAvailable = function whenAvailable(name, callback) {
        var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var interval = 10;
        window.setTimeout(function() {
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

    _exports.whenAvailable = whenAvailable;

    var fixCustomerData = function fixCustomerData(customer) {
        if (customer) {
            var phoneNumber = fixPhoneNumber(customer.phoneNumber);
            var idNumber = fixIdNumber(customer);
            var gender = getEmptyStringIfFieldEmpty(customer.gender);
            var country = getEmptyStringIfFieldEmpty(customer.country);
            var fakePesel = getFakePesel(customer);
            var pesel = getPesel(customer);
            var identification = getEmptyStringIfFieldEmpty(customer.identification);
            var identificationNumber = getEmptyStringIfFieldEmpty(customer.identificationNumber);
            var identificationExpirationDate = getEmptyStringIfFieldEmpty(customer.identificationExpirationDate);
            return _objectSpread({}, customer, {
                phoneNumber: phoneNumber,
                idNumber: idNumber,
                gender: gender,
                fakePesel: fakePesel,
                pesel: pesel,
                identification: identification,
                identificationNumber: identificationNumber,
                identificationExpirationDate: identificationExpirationDate,
                country: country
            });
        }

        return {};
    };

    _exports.fixCustomerData = fixCustomerData;

    var getPesel = function getPesel(customer) {
        if (peselIsCensored(customer.pesel) && customer.peselType === 'VALID') {
            return customer.pesel;
        }

        return ['FAKE', 'INVALID'].includes(customer.peselType) ? '' : customer.pesel;
    };

    var peselIsCensored = function peselIsCensored(pesel) {
        return (0, _validationHelper.validateCensoredPesel)(pesel);
    };

    var getCustomerDataErrors = function getCustomerDataErrors(customer) {
        return Object.assign.apply(Object, [{}].concat(babelHelpers.toConsumableArray(Object.keys(customer).map(function(key) {
            return key && customer[key] && Object.keys(_validators.customerDataFormValidators).includes(key) && !isFieldDisabledForValidation(customer, key) && babelHelpers.defineProperty({}, key, _validators.customerDataFormValidators[key](customer[key]));
        }))));
    };

    _exports.getCustomerDataErrors = getCustomerDataErrors;

    var customUpperCase = function customUpperCase(str) {
        var mapLowerToUpper = {
            '223': 7838
        }; // 'ß'=>'ẞ'  (small sharp s to big sharp s)

        var result = '';

        for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i);

            if (mapLowerToUpper[charCode]) {
                result += String.fromCharCode(mapLowerToUpper[charCode]);
            } else {
                result += str.charAt(i).toUpperCase();
            }
        }

        return result;
    };

    var toUpperCase = function toUpperCase(data) {
        if (!data) {
            return data;
        }

        if (typeof data === "string") {
            return customUpperCase(data);
        }

        if (babelHelpers.typeof(data) === "object") {
            Object.keys(data).forEach(function(k) {
                data[k] = toUpperCase(data[k]);
            });
            return data;
        }

        return data;
    };

    _exports.toUpperCase = toUpperCase;

    var fixCustomerCheckoutData = function fixCustomerCheckoutData(customer) {
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

    _exports.fixCustomerCheckoutData = fixCustomerCheckoutData;

    var getFakePesel = function getFakePesel(customer) {
        if (customer.peselType === 'FAKE') {
            return customer.pesel;
        }

        return '';
    };

    var emptyBillingAccountForm = {
        postalCode: '',
        town: '',
        streetName: '',
        streetNumber: '',
        appartmentNo: '',
        emailAddress: ''
    };

    var getEmptyStringIfFieldEmpty = function getEmptyStringIfFieldEmpty(field) {
        return field ? field : '';
    };

    var requiredBillingAccountFieldExist = function requiredBillingAccountFieldExist(billingAccount) {
        return !!(billingAccount.postalCode && billingAccount.town && billingAccount.streetName && billingAccount.streetNumber);
    };

    _exports.requiredBillingAccountFieldExist = requiredBillingAccountFieldExist;

    var getBillingAccountForm = function getBillingAccountForm(billingAccount) {
        if (!billingAccount) {
            return emptyBillingAccountForm;
        }

        var requiredFieldExist = requiredBillingAccountFieldExist(billingAccount);

        if (!requiredFieldExist) {
            return emptyBillingAccountForm;
        }

        billingAccount.appartmentNo = getEmptyStringIfFieldEmpty(billingAccount.appartmentNo);
        billingAccount.emailAddress = getEmptyStringIfFieldEmpty(billingAccount.emailAddress);
        return billingAccount;
    };

    _exports.getBillingAccountForm = getBillingAccountForm;

    var validateConsent = function validateConsent(consent, selectedStates) {
        if (consent.bundleAssignments && consent.bundleAssignments.length > 0) {
            return validatePerBundleConsent(consent, selectedStates);
        }

        var consentState = selectedStates.find(function(state) {
            return state.consentCode === consent.consentCode;
        });
        return validateSingleConsent(consent, consentState);
    };

    _exports.validateConsent = validateConsent;

    var validatePerBundleConsent = function validatePerBundleConsent(consent, selectedStates) {
        var consentStates = consent.bundleAssignments.map(function(bundleAssignment) {
            return selectedStates.find(function(state) {
                return state.consentCode === consent.consentCode && state.bundleNo === bundleAssignment.bundleNo;
            });
        });
        return consentStates.every(function(state) {
            return validateSingleConsent(consent, state);
        });
    };

    var validateSingleConsent = function validateSingleConsent(consent, consentState) {
        var selectedConsentState = consent.states && consent.states.find(function(state) {
            return consentState && state.code === consentState.stateCode;
        });
        var requiredConsentState = consent.states.find(function(state) {
            return state.required;
        });
        return consent && (!consent.required || !requiredConsentState && consentState && consentState.stateCode || requiredConsentState && selectedConsentState && selectedConsentState.required);
    };

    var removeElementFromArray = function removeElementFromArray(array, param, value) {
        var retVal = [];
        array.forEach(function(e) {
            if (e[param] !== value) {
                retVal.push(e);
            }
        });
        return retVal;
    };

    _exports.removeElementFromArray = removeElementFromArray;

    var remapToPhone = function remapToPhone(value) {
        var tempVal = value.split(" ");
        return tempVal[tempVal.length - 1].split("-").join("").replace(/[\_]+/g, "");
    };

    _exports.remapToPhone = remapToPhone;

    var hasManualVerificationErrors = function hasManualVerificationErrors(action) {
        var results = action.results || [];
        return results.filter(function(result) {
            return result.category === "MANUAL";
        }).length > 0;
    };

    _exports.hasManualVerificationErrors = hasManualVerificationErrors;

    var consentIsMatrixType = function consentIsMatrixType(consent) {
        return consent.msisdns && consent.msisdns.length > 0;
    };

    var consentIsPermanentlyAgreed = function consentIsPermanentlyAgreed(consent, consentStates) {
        var permanentlyAgreedConsentStates = consentStates.filter(function(consentState) {
            return consentState.consentCode === consent.consentCode && consentState.permanentlyAgreed;
        });

        if (permanentlyAgreedConsentStates.length === 0) {
            return false;
        }

        if (!consentIsMatrixType(consent)) {
            return true;
        }

        return consent.msisdns && consent.msisdns.length === permanentlyAgreedConsentStates.length;
    };

    _exports.consentIsPermanentlyAgreed = consentIsPermanentlyAgreed;

    var isFieldDisabled = function isFieldDisabled(data, name) {
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
                    return !data.isWWW && data.existing || isBzuOnlyAvailableOption(data);

                case "firstName":
                    return data.readOnly || data.existing || isBzuOnlyAvailableOption(data);

                case "pesel":
                    return (data.readOnly || data.existing) && !data.foreigner || _selectors.getLeadId !== null && 'VALID' === data.peselType || (data.readOnly || data.existing) && data.foreigner && 'VALID' === data.peselType || data.noPesel && data.foreigner || isBzuOnlyAvailableOption(data);

                case "phoneNumber":
                    if (data.isBusinessClient) {
                        return !data.isSalesOfGoodsOnly && !data.bpgRequested;
                    } else {
                        return false;
                    }

                    case "country":
                        return !!data.initialNationality && data.initialNationality !== "POL" || isBzuOnlyAvailableOption(data);

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
                                var disabled = !!data.streetSuggestions && !data.streetSuggestions.length && !data.streetName.length;

                                if (data.isBusinessClient !== undefined && data.isBusinessClient) {
                                    return (data.bpgRequested !== undefined ? !data.existing && !data.isSalesOfGoodsOnly && !data.bpgRequested : false) || disabled;
                                } else {
                                    return disabled || isBzuOnlyAvailableOption(data);
                                }

                                case "idNumber":
                                    if (data.containsFixEntries && !isBzuOnlyAvailableOption(data)) {
                                        return false;
                                    }

                                    return data.readOnly && data.disabledIdNumber || isBzuOnlyAvailableOption(data);

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

    _exports.isFieldDisabled = isFieldDisabled;

    function isBzuOnlyAvailableOption(data) {
        return data.isBzuOnlyAvailableOptionForFix && (data.channels.sales === _SalesChannel.default.TLS || data.channels.sales === _SalesChannel.default.IDG);
    }

    var prepareForeignerIdentificationTypes = function prepareForeignerIdentificationTypes(values) {
        if (values) {
            var tmp = [];
            Object.entries(values).forEach(function(_ref2) {
                var _ref3 = babelHelpers.slicedToArray(_ref2, 2),
                    key = _ref3[0],
                    value = _ref3[1];

                var obj = {
                    'value': key,
                    'description': value
                };
                tmp.push(obj);
            });
            return tmp;
        } else {
            return [];
        }
    };

    _exports.prepareForeignerIdentificationTypes = prepareForeignerIdentificationTypes;

    var isFieldDisabledForValidation = function isFieldDisabledForValidation(data, name) {
        return !!data.isWWW && isFieldDisabled(data, name);
    };

    _exports.isFieldDisabledForValidation = isFieldDisabledForValidation;

    var isMnpFieldInvisible = function isMnpFieldInvisible(data, name, isB2B) {
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
                return !data.offerType || data.migrationMode !== "DAY" && data.migrationMode !== "EOP";

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

    _exports.isMnpFieldInvisible = isMnpFieldInvisible;

    var createArrayWithValueOnIndex = function createArrayWithValueOnIndex(inArray, index, key, data) {
        var empty = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        function pushUntilIndexIsValid(array, index) {
            while (!array[index]) {
                array.push(empty);
            }
        }

        index = index || 0;
        var copy = inArray.slice();
        pushUntilIndexIsValid(copy, index);

        if (key) {
            copy[index] = _objectSpread({}, copy[index], babelHelpers.defineProperty({}, key, data === undefined ? "" : data));
        }

        return copy;
    };

    _exports.createArrayWithValueOnIndex = createArrayWithValueOnIndex;

    var enforceArrayLengthInBounds = function enforceArrayLengthInBounds(array, minCount, maxCount, initValue) {
        if (array.length < minCount) {
            var copy = array.slice();

            while (copy.length < minCount) {
                copy.push(initValue);
            }

            return copy;
        } else if (array.length > maxCount) {
            return array.slice(0, maxCount);
        } else {
            return array;
        }
    };

    _exports.enforceArrayLengthInBounds = enforceArrayLengthInBounds;

    function fieldValue(val) {
        return val === null || val === undefined ? "" : val;
    }

    var runValidator = function runValidator(object, validators, action, disabledFunction, dispatch) {
        if (!!disabledFunction) {
            Object.keys(object).forEach(function(k) {
                return Object.keys(validators).includes(k) && (!disabledFunction(object, k) || object.fixBundleInCart) && dispatch(action({
                    name: k,
                    value: fieldValue(object[k]),
                    entryIndex: object.bundleNo
                }));
            });
        } else {
            Object.keys(object).forEach(function(k) {
                return Object.keys(validators).includes(k) && dispatch(action({
                    name: k,
                    value: fieldValue(object[k]),
                    entryIndex: object.bundleNo
                }));
            });
        }
    };

    _exports.runValidator = runValidator;

    var createQueryParamString = function createQueryParamString(params) {
        return Object.keys(params).map(function(key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
        }).join('&');
    };

    _exports.createQueryParamString = createQueryParamString;

    var StyleBuilder = /*#__PURE__*/ function() {
        function StyleBuilder() {
            babelHelpers.classCallCheck(this, StyleBuilder);
            this.verticalAlign = 'middle';
            this.display = 'inline-block';
            this.float = 'none';
        }

        babelHelpers.createClass(StyleBuilder, [{
            key: "hidden",
            value: function hidden(h) {
                this.display = h ? 'none' : 'inline-block';
                return this;
            }
        }, {
            key: "build",
            value: function build() {
                return {
                    verticalAlign: this.verticalAlign,
                    display: this.display,
                    float: this.float
                };
            }
        }]);
        return StyleBuilder;
    }();

    _exports.StyleBuilder = StyleBuilder;

    var like = function like(string, substing) {
        return string.indexOf(substing) > -1;
    };

    _exports.like = like;

    var getPropsForIdentification = function getPropsForIdentification(name, withMask, data, changeDataFormFiled, changeDataFormFiledNoValidation) {
        var props = _objectSpread({}, getPropsForInput(name, data, changeDataFormFiled, changeDataFormFiledNoValidation));

        if (withMask) {
            props.mask = 'aa9999999';
            props.placeholder = '______';
        }

        return props;
    };

    _exports.getPropsForIdentification = getPropsForIdentification;

    var getPropsForInput = function getPropsForInput(name, props, changeDataFormFiled, changeDataFormFiledNoValidation) {
        return _objectSpread({}, getCommonProps(name, props.descriptions, props.errors), {
            value: props[name] || '',
            labelType: 'floating',
            validateEmpty: props[name] !== '' && props.existing,
            onChange: changeDataFormFiledNoValidation,
            onBlur: changeDataFormFiled
        });
    };

    _exports.getPropsForInput = getPropsForInput;

    var getCommonProps = function getCommonProps(name, descriptions, errors) {
        return {
            id: name,
            key: name,
            name: name,
            label: descriptions[name],
            errors: errors && errors[name]
        };
    };

    var getPropsForSelect = function getPropsForSelect(name, props, changeDataFormFiled) {
        return _objectSpread({}, getCommonProps(name, props.descriptions, props.errors), {
            selected: props[name],
            onChange: changeDataFormFiled,
            className: 'g-gray1-bg u-font-small',
            style: {
                height: '40px'
            },
            withEmptyOption: true
        });
    };

    _exports.getPropsForSelect = getPropsForSelect;

    var getInputValidationParams = function getInputValidationParams(name, props) {
        var validationDisabled = isFieldDisabledForValidation(props, name);
        var disabled = isFieldDisabled(props, name);
        var params = {
            disabled: disabled
        };
        var valid = !props.errors && props[name] !== '' || props.errors && props.errors[name] && props.errors[name].length === 0;

        if (!disabled || !validationDisabled && !valid) {
            params.valid = valid;
        }

        return params;
    };

    _exports.getInputValidationParams = getInputValidationParams;

    var mapCountrySuggestion = function mapCountrySuggestion(country) {
        return {
            value: country.isocode,
            label: country.name
        };
    };

    _exports.mapCountrySuggestion = mapCountrySuggestion;

    var getCountryName = function getCountryName(foreignCountries, country) {
        if (!country) {
            country = "";
        }

        var result = foreignCountries.find(function(result) {
            return result.isocode === country;
        });

        if (result) {
            return result.name;
        }

        return country;
    };

    _exports.getCountryName = getCountryName;

    var getCountrySuggestions = function getCountrySuggestions(foreignCountries, country) {
        var enteredCountryName = getCountryName(foreignCountries, country).toUpperCase();
        return foreignCountries.filter(function(country) {
            var countryName = country.name.toUpperCase();
            return countryName.startsWith(enteredCountryName) || countryName.includes(' ' + enteredCountryName);
        });
    };

    _exports.getCountrySuggestions = getCountrySuggestions;
});
//# sourceMappingURL=utils.js.map