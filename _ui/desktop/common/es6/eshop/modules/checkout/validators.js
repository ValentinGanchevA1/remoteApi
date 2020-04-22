import {
    check,
    checkAppartment,
    checkEmail,
    checkIdentificationNumber,
    checkIdNumber,
    checkNIP,
    checkNonEmptyEmail,
    checkNotEmpty,
    checkNotEmptyStandardMessage,
    checkOnlyLetters,
    checkPesel,
    checkPeselAdult,
    checkPhoneNumber,
    checkPostCode,
    checkREGON,
    checkRequiredFieldMessage,
    checkSpaceInText,
    limitTo8Characters,
    maxLength,
    minLength,
    noPolishCharacters,
    validator
} from "eshop/modules/core/validation";

export const customerDataFormValidators = {
    "firstName": validator(
        checkRequiredFieldMessage,
        check(minLength(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }),
        checkOnlyLetters({
            level: "warn",
            message: "Nieprawidłowe imię."
        })
    ),
    "lastName": validator(
        checkRequiredFieldMessage,
        check(minLength(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }),
        checkOnlyLetters({
            level: "warn",
            message: "Nieprawidłowe nazwisko."
        })
    ),
    "pesel": validator(
        checkRequiredFieldMessage,
        checkPesel({
            level: "warn",
            message: "Nieprawidłowy pesel."
        }),
        checkPeselAdult({
            level: "warn",
            message: "Aby złożyć zamówienie musisz mieć skończone 18 lat."
        })
    ),
    "idNumber": validator(
        checkRequiredFieldMessage,
        checkIdNumber({
            level: "warn",
            message: "Nieprawidłowy numer dowodu."
        })
    ),
    "isBusinessClient": validator(
        checkRequiredFieldMessage
    ),
    "nip": validator(
        checkRequiredFieldMessage,
        checkNIP({
            level: "warn",
            message: "Nieprawidłowy NIP"
        })
    ),
    "regon": validator(
        checkRequiredFieldMessage,
        checkREGON({
            level: "warn",
            message: "Nieprawidłowy REGON"
        })
    ),
    "regonSog": validator(
        checkREGON({
            level: "warn",
            message: "Nieprawidłowy REGON"
        })
    ),
    "companyName": validator(
        checkRequiredFieldMessage,
        check(maxLength(100))({
            level: "warn",
            message: "Pole za długie >100 znaków"
        })
    ),
    "identificationNumber": validator(
        checkRequiredFieldMessage,
        checkIdentificationNumber({
            level: "warn",
            message: "Nieprawidłowy numer dokumentu."
        })
    ),
    "identificationExpirationDate": validator(
        checkRequiredFieldMessage
    ),
    "identificationRegistrationDate": validator(
        checkRequiredFieldMessage
    ),
    "registrationDate": validator(
        checkRequiredFieldMessage
    ),
    "legalForm": validator(
        checkRequiredFieldMessage
    ),
    "companyStatus": validator(
        checkRequiredFieldMessage
    ),
    "gender": validator(
        checkRequiredFieldMessage
    ),
    "country": validator(
        checkRequiredFieldMessage
    ),
    "identification": validator(
        checkRequiredFieldMessage
    ),
    "invoiceEmail": validator(
        checkNonEmptyEmail({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }),
        noPolishCharacters({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        })
    )
};

export const representativeDataFormValidators = {
    "firstName": validator(
        checkRequiredFieldMessage,
        check(minLength(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }),
        checkOnlyLetters({
            level: "info",
            message: "Nieprawidłowe imię."
        })
    ),
    "lastName": validator(
        checkRequiredFieldMessage,
        check(minLength(2))({
            level: "error",
            message: "Wymagane minimum 2 litery."
        }),
        checkOnlyLetters({
            level: "info",
            message: "Nieprawidłowe nazwisko."
        })
    ),
    "pesel": validator(
        checkRequiredFieldMessage,
        checkPesel({
            level: "warn",
            message: "Nieprawidłowy pesel."
        }),
        checkPeselAdult({
            level: "warn",
            message: "Aby złożyć zamówienie musisz mieć skończone 18 lat."
        })
    ),
    "idNumber": validator(
        checkRequiredFieldMessage,
        checkIdNumber({
            level: "warn",
            message: "Nieprawidłowy numer dowodu."
        })
    ),
    "identificationNumber": validator(
        checkRequiredFieldMessage,
        checkIdentificationNumber({
            level: "warn",
            message: "Nieprawidłowy numer dokumentu."
        })
    ),
    "grantingDate": validator(
        checkRequiredFieldMessage
    ),
    "identificationEndDate": validator(
        checkRequiredFieldMessage
    ),
    "identificationRegisterDate": validator(
        checkRequiredFieldMessage
    ),
    "country": validator(
        checkRequiredFieldMessage
    ),
    "identification": validator(
        checkRequiredFieldMessage
    ),
    "identificationValue": validator(
        checkRequiredFieldMessage
    ),
    "foreigner": validator()
};

export const addressFormValidators = {
    "postalCode": validator(
        checkRequiredFieldMessage,
        checkPostCode({
            level: "warn",
            message: "Nieprawidłowy kod pocztowy."
        })
    ),
    "town": validator(
        checkRequiredFieldMessage
    ),
    "streetName": validator(
        checkRequiredFieldMessage
    ),
    "streetNumber": validator(
        checkRequiredFieldMessage,
        checkSpaceInText({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }),
        checkAppartment({
            level: "error",
            message: "Dopuszczone są znaki specjalne \"-\" oraz \"/\". \n" +
                "Nie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. "
        }),
        limitTo8Characters({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        })

    ),
    "appartmentNo": validator(
        checkSpaceInText({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }),
        checkAppartment({
            level: "error",
            message: "Dopuszczone są znaki specjalne \"-\" oraz \"/\". \n" +
                "Nie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. "
        }),
        limitTo8Characters({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        })
    ),
    "townId": validator(
        checkNotEmpty
    ),
    "streetId": validator(
        checkNotEmpty
    )
};

export const billingAccountFormValidators = {
    "postalCode": validator(
        checkRequiredFieldMessage,
        checkPostCode({
            level: "warn",
            message: "Nieprawidłowy kod pocztowy."
        })
    ),
    "town": validator(
        checkRequiredFieldMessage
    ),
    "streetName": validator(
        checkRequiredFieldMessage
    ),
    "streetNumber": validator(
        checkRequiredFieldMessage
    ),
    "appartmentNo": validator(
        checkAppartment({
            level: "warn",
            message: "Niepoprawny numer lokalu."
        })
    ),
    "emailAddress": validator(
        checkNonEmptyEmail({
            level: "warn",
            message: "Nieprawidłowy adres email."
        })
    )
};

export const emailDeliveryValidators = {
    "emailAddress": validator(
        checkRequiredFieldMessage,
        checkEmail({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }),
        noPolishCharacters({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        })
    )
};

export const customerContactFormValidators = {
    "emailAddress": validator(
        checkRequiredFieldMessage,
        checkEmail({
            level: "warn",
            message: "Nieprawidłowy adres email."
        }),
        noPolishCharacters({
            level: "warn",
            message: "Adres email nie może zawierać polskich znaków. "
        })
    ),
    "phoneNumber": validator(
        checkRequiredFieldMessage,
        checkPhoneNumber({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        })
    ),
    "customerNoEmail": validator(
        checkRequiredFieldMessage
    ),
    "phoneNumberDAP": validator(
        checkRequiredFieldMessage,
        checkPhoneNumber({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        })
    )
};

export const courierDeliveryMessageValidator = {
    courierMessage: validator(check(maxLength(2))({
        level: "warn",
        message: "Zbyt długa wiadomość."
    }))
};

export const wwtValidator = {
    "wwtAddressValidator": validator(
        checkSpaceInText({
            level: "error",
            message: "Pole nie może zawierać spacji."
        }),
        checkAppartment({
            level: "error",
            message: "Dopuszczone są znaki specjalne \"-\" oraz \"/\". \n" +
                "Nie mogą wystąpić bezpośrednio po sobie, ani na  początku  lub końcu ciągu znaków. "
        }),
        limitTo8Characters({
            level: "error",
            message: "Maksymalna ilość znaków to 8."
        })

    )
};

export const courierPhoneContactValidator = {
    "phoneContact": validator(
        checkRequiredFieldMessage,
        checkPhoneNumber({
            level: "warn",
            message: "Nieprawidłowy numer telefonu."
        })
    ),
};

export const customerWorkPhoneNumberValidator = {
    customerWorkPhoneNumber: validator(checkNotEmptyStandardMessage, checkPhoneNumber({
        level: "warn",
        message: "Nieprawidłowy numer telefonu."
    }))
};

export const mnpFormValidators = {
    migrationMode: validator(checkNotEmptyStandardMessage),
    contactMethod: validator(checkNotEmptyStandardMessage),
    operator: validator(checkNotEmptyStandardMessage),
    offerType: validator(checkNotEmptyStandardMessage),
    nip: validator(checkNotEmptyStandardMessage, checkNIP({
        level: "warn",
        message: "Nieprawidłowy NIP"
    })),
    date: validator(checkNotEmptyStandardMessage),
    businessName: validator(checkNotEmptyStandardMessage),
    regon: validator(checkNotEmptyStandardMessage, checkREGON({
        level: "warn",
        message: "Nieprawidłowy REGON"
    })),
    postalCode: validator(checkNotEmptyStandardMessage, checkPostCode({
        level: "warn",
        message: "Nieprawidłowy kod pocztowy."
    })),
    city: validator(checkNotEmptyStandardMessage),
    street: validator(checkNotEmptyStandardMessage),
    houseNumber: validator(checkNotEmptyStandardMessage),
    flatNumber: validator(checkNotEmptyStandardMessage),
    identifier: validator(checkNotEmptyStandardMessage),
    pesel: validator(checkPesel({
        level: "warn",
        message: "Nieprawidłowy pesel."
    })),
    idNumber: validator(checkIdNumber({
        level: "warn",
        message: "Nieprawidłowy numer dowodu."
    })),
    identificationNumber: validator(checkIdentificationNumber({
        level: "warn",
        message: "Nieprawidłowy numer dokumentu."
    })),
    firstName: validator(checkNotEmptyStandardMessage),
    lastName: validator(checkNotEmptyStandardMessage)
};

export const countryValidator = (countryNameOrIsocode, countries) => {
    var errors = customerDataFormValidators['country'](countryNameOrIsocode);
    let country = countries.find(country => country.isocode === countryNameOrIsocode);
    if (!country) {
        errors.push({
            level: "error",
            message: "Niepoprawne obywatelstwo"
        })
    }
    return errors;
};