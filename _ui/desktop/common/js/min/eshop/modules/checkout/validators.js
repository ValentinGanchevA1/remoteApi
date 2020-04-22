define(["exports", "eshop/modules/core/validation"], function(e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.countryValidator = e.mnpFormValidators = e.customerWorkPhoneNumberValidator = e.courierPhoneContactValidator = e.wwtValidator = e.courierDeliveryMessageValidator = e.customerContactFormValidators = e.emailDeliveryValidators = e.billingAccountFormValidators = e.addressFormValidators = e.representativeDataFormValidators = e.customerDataFormValidators = void 0;
    var r = {
        firstName: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.check)((0, a.minLength)(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }), (0, a.checkOnlyLetters)({
            level: "warn",
            message: "Nieprawidłowe imię."
        })),
        lastName: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.check)((0, a.minLength)(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }), (0, a.checkOnlyLetters)({
            level: "warn",
            message: "Nieprawidłowe nazwisko."
        })),
        pesel: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkPesel)({
            level: "warn",
            message: "Nieprawidłowy pesel."
        }), (0, a.checkPeselAdult)({
            level: "warn",
            message: "Aby złożyć zamówienie musisz mieć skończone 18 lat."
        })),
        idNumber: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkIdNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dowodu."
        })),
        isBusinessClient: (0, a.validator)(a.checkRequiredFieldMessage),
        nip: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkNIP)({
            level: "warn",
            message: "Nieprawidłowy NIP"
        })),
        regon: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkREGON)({
            level: "warn",
            message: "Nieprawidłowy REGON"
        })),
        regonSog: (0, a.validator)((0, a.checkREGON)({
            level: "warn",
            message: "Nieprawidłowy REGON"
        })),
        companyName: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.check)((0, a.maxLength)(100))({
            level: "warn",
            message: "Pole za długie >100 znaków"
        })),
        identificationNumber: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkIdentificationNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dokumentu."
        })),
        identificationExpirationDate: (0, a.validator)(a.checkRequiredFieldMessage),
        identificationRegistrationDate: (0, a.validator)(a.checkRequiredFieldMessage),
        registrationDate: (0, a.validator)(a.checkRequiredFieldMessage),
        legalForm: (0, a.validator)(a.checkRequiredFieldMessage),
        companyStatus: (0, a.validator)(a.checkRequiredFieldMessage),
        gender: (0, a.validator)(a.checkRequiredFieldMessage),
        country: (0, a.validator)(a.checkRequiredFieldMessage),
        identification: (0, a.validator)(a.checkRequiredFieldMessage),
        invoiceEmail: (0, a.validator)((0, a.checkNonEmptyEmail)({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }), (0, a.noPolishCharacters)({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        }))
    };
    e.customerDataFormValidators = r;
    var i = {
        firstName: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.check)((0, a.minLength)(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }), (0, a.checkOnlyLetters)({
            level: "info",
            message: "Nieprawidłowe imię."
        })),
        lastName: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.check)((0, a.minLength)(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }), (0, a.checkOnlyLetters)({
            level: "info",
            message: "Nieprawidłowe nazwisko."
        })),
        pesel: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkPesel)({
            level: "warn",
            message: "Nieprawidłowy pesel."
        }), (0, a.checkPeselAdult)({
            level: "warn",
            message: "Aby złożyć zamówienie musisz mieć skończone 18 lat."
        })),
        idNumber: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkIdNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dowodu."
        })),
        identificationNumber: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkIdentificationNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dokumentu."
        })),
        grantingDate: (0, a.validator)(a.checkRequiredFieldMessage),
        identificationEndDate: (0, a.validator)(a.checkRequiredFieldMessage),
        identificationRegisterDate: (0, a.validator)(a.checkRequiredFieldMessage),
        country: (0, a.validator)(a.checkRequiredFieldMessage),
        identification: (0, a.validator)(a.checkRequiredFieldMessage),
        identificationValue: (0, a.validator)(a.checkRequiredFieldMessage),
        foreigner: (0, a.validator)()
    };
    e.representativeDataFormValidators = i;
    var o = {
        postalCode: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkPostCode)({
            level: "warn",
            message: "Nieprawidłowy kod pocztowy."
        })),
        town: (0, a.validator)(a.checkRequiredFieldMessage),
        streetName: (0, a.validator)(a.checkRequiredFieldMessage),
        streetNumber: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkSpaceInText)({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }), (0, a.checkAppartment)({
            level: "error",
            message: 'Dopuszczone są znaki specjalne "-" oraz "/". \nNie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. '
        }), (0, a.limitTo8Characters)({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        })),
        appartmentNo: (0, a.validator)((0, a.checkSpaceInText)({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }), (0, a.checkAppartment)({
            level: "error",
            message: 'Dopuszczone są znaki specjalne "-" oraz "/". \nNie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. '
        }), (0, a.limitTo8Characters)({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        })),
        townId: (0, a.validator)(a.checkNotEmpty),
        streetId: (0, a.validator)(a.checkNotEmpty)
    };
    e.addressFormValidators = o;
    var s = {
        postalCode: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkPostCode)({
            level: "warn",
            message: "Nieprawidłowy kod pocztowy."
        })),
        town: (0, a.validator)(a.checkRequiredFieldMessage),
        streetName: (0, a.validator)(a.checkRequiredFieldMessage),
        streetNumber: (0, a.validator)(a.checkRequiredFieldMessage),
        appartmentNo: (0, a.validator)((0, a.checkAppartment)({
            level: "warn",
            message: "Niepoprawny numer lokalu."
        })),
        emailAddress: (0, a.validator)((0, a.checkNonEmptyEmail)({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }))
    };
    e.billingAccountFormValidators = s;
    var t = {
        emailAddress: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkEmail)({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }), (0, a.noPolishCharacters)({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        }))
    };
    e.emailDeliveryValidators = t;
    var l = {
        emailAddress: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkEmail)({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }), (0, a.noPolishCharacters)({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        })),
        phoneNumber: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkPhoneNumber)({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        })),
        customerNoEmail: (0, a.validator)(a.checkRequiredFieldMessage),
        phoneNumberDAP: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkPhoneNumber)({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        }))
    };
    e.customerContactFormValidators = l;
    var d = {
        courierMessage: (0, a.validator)((0, a.check)((0, a.maxLength)(2))({
            level: "warn",
            message: "Zbyt długa wiadomość."
        }))
    };
    e.courierDeliveryMessageValidator = d;
    var c = {
        wwtAddressValidator: (0, a.validator)((0, a.checkSpaceInText)({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }), (0, a.checkAppartment)({
            level: "error",
            message: 'Dopuszczone są znaki specjalne "-" oraz "/". \nNie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. '
        }), (0, a.limitTo8Characters)({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        }))
    };
    e.wwtValidator = c;
    var n = {
        phoneContact: (0, a.validator)(a.checkRequiredFieldMessage, (0, a.checkPhoneNumber)({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        }))
    };
    e.courierPhoneContactValidator = n;
    var m = {
        customerWorkPhoneNumber: (0, a.validator)(a.checkNotEmptyStandardMessage, (0, a.checkPhoneNumber)({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        }))
    };
    e.customerWorkPhoneNumberValidator = m;
    var u = {
        migrationMode: (0, a.validator)(a.checkNotEmptyStandardMessage),
        contactMethod: (0, a.validator)(a.checkNotEmptyStandardMessage),
        operator: (0, a.validator)(a.checkNotEmptyStandardMessage),
        offerType: (0, a.validator)(a.checkNotEmptyStandardMessage),
        nip: (0, a.validator)(a.checkNotEmptyStandardMessage, (0, a.checkNIP)({
            level: "warn",
            message: "Nieprawidłowy NIP"
        })),
        date: (0, a.validator)(a.checkNotEmptyStandardMessage),
        businessName: (0, a.validator)(a.checkNotEmptyStandardMessage),
        regon: (0, a.validator)(a.checkNotEmptyStandardMessage, (0, a.checkREGON)({
            level: "warn",
            message: "Nieprawidłowy REGON"
        })),
        postalCode: (0, a.validator)(a.checkNotEmptyStandardMessage, (0, a.checkPostCode)({
            level: "warn",
            message: "Nieprawidłowy kod pocztowy."
        })),
        city: (0, a.validator)(a.checkNotEmptyStandardMessage),
        street: (0, a.validator)(a.checkNotEmptyStandardMessage),
        houseNumber: (0, a.validator)(a.checkNotEmptyStandardMessage),
        flatNumber: (0, a.validator)(a.checkNotEmptyStandardMessage),
        identifier: (0, a.validator)(a.checkNotEmptyStandardMessage),
        pesel: (0, a.validator)((0, a.checkPesel)({
            level: "warn",
            message: "Nieprawidłowy pesel."
        })),
        idNumber: (0, a.validator)((0, a.checkIdNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dowodu."
        })),
        identificationNumber: (0, a.validator)((0, a.checkIdentificationNumber)({
            level: "warn",
            message: "Nieprawidłowy numer dokumentu."
        })),
        firstName: (0, a.validator)(a.checkNotEmptyStandardMessage),
        lastName: (0, a.validator)(a.checkNotEmptyStandardMessage)
    };
    e.mnpFormValidators = u;
    e.countryValidator = function(a, e) {
        var i = r.country(a);
        return e.find(function(e) {
            return e.isocode === a
        }) || i.push({
            level: "error",
            message: "Niepoprawne obywatelstwo"
        }), i
    }
});
//# sourceMappingURL=validators.js.map