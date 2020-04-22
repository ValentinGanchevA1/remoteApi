define(["exports", "eshop/modules/core/validation"], function(_exports, _validation) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.countryValidator = _exports.mnpFormValidators = _exports.customerWorkPhoneNumberValidator = _exports.courierPhoneContactValidator = _exports.wwtValidator = _exports.courierDeliveryMessageValidator = _exports.customerContactFormValidators = _exports.emailDeliveryValidators = _exports.billingAccountFormValidators = _exports.addressFormValidators = _exports.representativeDataFormValidators = _exports.customerDataFormValidators = void 0;
    var customerDataFormValidators = {
        "firstName": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.check)((0, _validation.minLength)(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }), (0, _validation.checkOnlyLetters)({
            level: "warn",
            message: "Nieprawidłowe imię."
        })),
        "lastName": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.check)((0, _validation.minLength)(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }), (0, _validation.checkOnlyLetters)({
            level: "warn",
            message: "Nieprawidłowe nazwisko."
        })),
        "pesel": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkPesel)({
            level: "warn",
            message: "Nieprawidłowy pesel."
        }), (0, _validation.checkPeselAdult)({
            level: "warn",
            message: "Aby złożyć zamówienie musisz mieć skończone 18 lat."
        })),
        "idNumber": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkIdNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dowodu."
        })),
        "isBusinessClient": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "nip": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkNIP)({
            level: "warn",
            message: "Nieprawidłowy NIP"
        })),
        "regon": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkREGON)({
            level: "warn",
            message: "Nieprawidłowy REGON"
        })),
        "regonSog": (0, _validation.validator)((0, _validation.checkREGON)({
            level: "warn",
            message: "Nieprawidłowy REGON"
        })),
        "companyName": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.check)((0, _validation.maxLength)(100))({
            level: "warn",
            message: "Pole za długie >100 znaków"
        })),
        "identificationNumber": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkIdentificationNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dokumentu."
        })),
        "identificationExpirationDate": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "identificationRegistrationDate": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "registrationDate": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "legalForm": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "companyStatus": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "gender": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "country": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "identification": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "invoiceEmail": (0, _validation.validator)((0, _validation.checkNonEmptyEmail)({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }), (0, _validation.noPolishCharacters)({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        }))
    };
    _exports.customerDataFormValidators = customerDataFormValidators;
    var representativeDataFormValidators = {
        "firstName": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.check)((0, _validation.minLength)(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }), (0, _validation.checkOnlyLetters)({
            level: "info",
            message: "Nieprawidłowe imię."
        })),
        "lastName": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.check)((0, _validation.minLength)(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }), (0, _validation.checkOnlyLetters)({
            level: "info",
            message: "Nieprawidłowe nazwisko."
        })),
        "pesel": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkPesel)({
            level: "warn",
            message: "Nieprawidłowy pesel."
        }), (0, _validation.checkPeselAdult)({
            level: "warn",
            message: "Aby złożyć zamówienie musisz mieć skończone 18 lat."
        })),
        "idNumber": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkIdNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dowodu."
        })),
        "identificationNumber": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkIdentificationNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dokumentu."
        })),
        "grantingDate": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "identificationEndDate": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "identificationRegisterDate": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "country": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "identification": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "identificationValue": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "foreigner": (0, _validation.validator)()
    };
    _exports.representativeDataFormValidators = representativeDataFormValidators;
    var addressFormValidators = {
        "postalCode": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkPostCode)({
            level: "warn",
            message: "Nieprawidłowy kod pocztowy."
        })),
        "town": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "streetName": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "streetNumber": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkSpaceInText)({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }), (0, _validation.checkAppartment)({
            level: "error",
            message: "Dopuszczone są znaki specjalne \"-\" oraz \"/\". \n" + "Nie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. "
        }), (0, _validation.limitTo8Characters)({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        })),
        "appartmentNo": (0, _validation.validator)((0, _validation.checkSpaceInText)({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }), (0, _validation.checkAppartment)({
            level: "error",
            message: "Dopuszczone są znaki specjalne \"-\" oraz \"/\". \n" + "Nie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. "
        }), (0, _validation.limitTo8Characters)({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        })),
        "townId": (0, _validation.validator)(_validation.checkNotEmpty),
        "streetId": (0, _validation.validator)(_validation.checkNotEmpty)
    };
    _exports.addressFormValidators = addressFormValidators;
    var billingAccountFormValidators = {
        "postalCode": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkPostCode)({
            level: "warn",
            message: "Nieprawidłowy kod pocztowy."
        })),
        "town": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "streetName": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "streetNumber": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "appartmentNo": (0, _validation.validator)((0, _validation.checkAppartment)({
            level: "warn",
            message: "Niepoprawny numer lokalu."
        })),
        "emailAddress": (0, _validation.validator)((0, _validation.checkNonEmptyEmail)({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }))
    };
    _exports.billingAccountFormValidators = billingAccountFormValidators;
    var emailDeliveryValidators = {
        "emailAddress": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkEmail)({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }), (0, _validation.noPolishCharacters)({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        }))
    };
    _exports.emailDeliveryValidators = emailDeliveryValidators;
    var customerContactFormValidators = {
        "emailAddress": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkEmail)({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }), (0, _validation.noPolishCharacters)({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        })),
        "phoneNumber": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkPhoneNumber)({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        })),
        "customerNoEmail": (0, _validation.validator)(_validation.checkRequiredFieldMessage),
        "phoneNumberDAP": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkPhoneNumber)({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        }))
    };
    _exports.customerContactFormValidators = customerContactFormValidators;
    var courierDeliveryMessageValidator = {
        courierMessage: (0, _validation.validator)((0, _validation.check)((0, _validation.maxLength)(2))({
            level: "warn",
            message: "Zbyt długa wiadomość."
        }))
    };
    _exports.courierDeliveryMessageValidator = courierDeliveryMessageValidator;
    var wwtValidator = {
        "wwtAddressValidator": (0, _validation.validator)((0, _validation.checkSpaceInText)({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }), (0, _validation.checkAppartment)({
            level: "error",
            message: "Dopuszczone są znaki specjalne \"-\" oraz \"/\". \n" + "Nie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. "
        }), (0, _validation.limitTo8Characters)({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        }))
    };
    _exports.wwtValidator = wwtValidator;
    var courierPhoneContactValidator = {
        "phoneContact": (0, _validation.validator)(_validation.checkRequiredFieldMessage, (0, _validation.checkPhoneNumber)({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        }))
    };
    _exports.courierPhoneContactValidator = courierPhoneContactValidator;
    var customerWorkPhoneNumberValidator = {
        customerWorkPhoneNumber: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage, (0, _validation.checkPhoneNumber)({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        }))
    };
    _exports.customerWorkPhoneNumberValidator = customerWorkPhoneNumberValidator;
    var mnpFormValidators = {
        migrationMode: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        contactMethod: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        operator: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        offerType: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        nip: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage, (0, _validation.checkNIP)({
            level: "warn",
            message: "Nieprawidłowy NIP"
        })),
        date: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        businessName: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        regon: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage, (0, _validation.checkREGON)({
            level: "warn",
            message: "Nieprawidłowy REGON"
        })),
        postalCode: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage, (0, _validation.checkPostCode)({
            level: "warn",
            message: "Nieprawidłowy kod pocztowy."
        })),
        city: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        street: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        houseNumber: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        flatNumber: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        identifier: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        pesel: (0, _validation.validator)((0, _validation.checkPesel)({
            level: "warn",
            message: "Nieprawidłowy pesel."
        })),
        idNumber: (0, _validation.validator)((0, _validation.checkIdNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dowodu."
        })),
        identificationNumber: (0, _validation.validator)((0, _validation.checkIdentificationNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dokumentu."
        })),
        firstName: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage),
        lastName: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage)
    };
    _exports.mnpFormValidators = mnpFormValidators;

    var countryValidator = function countryValidator(countryNameOrIsocode, countries) {
        var errors = customerDataFormValidators['country'](countryNameOrIsocode);
        var country = countries.find(function(country) {
            return country.isocode === countryNameOrIsocode;
        });

        if (!country) {
            errors.push({
                level: "error",
                message: "Niepoprawne obywatelstwo"
            });
        }

        return errors;
    };

    _exports.countryValidator = countryValidator;
});
//# sourceMappingURL=validators.js.map