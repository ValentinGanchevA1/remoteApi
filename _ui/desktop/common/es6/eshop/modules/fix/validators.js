import {
    validator,
    check,
    regex,
    checkNotEmptyStandardMessage,
    checkAtLeastTwo,
    checkPesel,
    checkNIP,
    checkREGON,
    checkIdNumber,
    checkPostCode,
    checkEmail,
    checkPhoneNumber,
    maxLength,
    checkPeselAdult,
    checkAppartment
}
from "eshop/modules/core/validation";

export const checkKnaNumber = check(regex(/^\d{9}$/));

export const knaNumberValidator = {
    knaNumber: validator(checkNotEmptyStandardMessage, checkKnaNumber({
        level: "warn",
        message: "Nieprawidłowy numer KNA."
    }))
};