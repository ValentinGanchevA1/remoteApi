import {
    validateIdNumber,
    validateResidenceCardNumber,
    validatePesel,
    validateIfAdult,
    validateNIP,
    validateREGON
} from './validationHelper';
/*
 * Combines validation checks to create a validator.
 */
export function validator(...checks) {
    return value => checks.reduce((errors, check) => {
        const error = check(value);
        if (error !== null)
            errors.push(error);
        return errors;
    }, []);
};

/*
 * Create a validation check
 * Usage:
 *   baseCheck = check(condition);
 *   checkWithMessage = baseCheck({level: "warn", message: "Message"});
 */
export const check = condition => message => value => condition(value) ? null : message;

/*
 * Simple conditions
 * Condition should be a function that takes a value and returns a boolean
 */
export const notEmpty = value => value !== "";
export const appartment = value => value && value.length > 0 ? /^[a-zżźćńółęąśA-ZŻŹĆĄŚĘŁÓŃ\d]+(((\/)|(\-))?[a-zżźćńółęąśA-ZŻŹĆĄŚĘŁÓŃ\d]+)*$/.test(value) : true;
export const spaceInText = value => value && value.length > 0 ? !/^(.*\s+.*)+$/.test(value) : true;
export const phoneNumberRegexp = value => value ? !/^000000000$/.test(value) && /^[1-9]\d{8}$/.test(value) : false;

/*
 * Condition generators
 * Functions that create conditions given some parameters
 */
export const regex = expression => value => expression.test(value);
export const minLength = length => value => !!value && value.length >= length;
export const maxLength = length => value => !!value && value.length <= length;

export const pesel = value => validatePesel(value);
export const peselAdult = value => validateIfAdult(value);
export const nip = value => validateNIP(value);
export const regon = value => validateREGON(value);

export const idNumber = value => validateIdNumber(value);
export const residenceCardNumber = value => validateResidenceCardNumber(value);

/*
 * Generic checks without messages.
 * A message can be added to those to create a validation check that can be used in a validator.
 */
export const checkNotEmpty = check(notEmpty);
export const checkOnlyLetters = check(regex(/^([a-zA-Z\u00A1-\uFFFF])+([a-zA-Z\s\-\u00A1-\uFFFF])*$/));
export const checkAtLeastTwo = check(regex(/^.{2,}$/));
export const checkIdNumber = check(idNumber);
export const checkIdentificationNumber = check(residenceCardNumber);
export const checkPostCode = check(regex(/^\d{5}$/));
//RFC 5322 compliant regex
export const checkEmail = check(regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
export const checkNonEmptyEmail = check(regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^$/));
export const checkPhoneNumber = check(phoneNumberRegexp);
export const checkPesel = check(pesel);
export const checkNIP = check(nip);
export const checkREGON = check(regon);
export const checkPeselAdult = check(peselAdult);
export const checkAppartment = check(appartment);
export const checkSpaceInText = check(spaceInText);
export const limitTo8Characters = check(regex(/^.{0,8}$/));
export const noPolishCharacters = check(regex(/^((?![żźćńółęąśŻŹĆĄŚĘŁÓŃ]+).)*$/));

/*
 * Checks with predefined messages
 * Can be used directly in validators.
 */
export const checkNotEmptyStandardMessage = check(notEmpty)({
    level: "error",
    message: "Pole nie może być puste."
});
export const checkRequiredFieldMessage = check(notEmpty)({
    level: "error",
    message: "Pole wymagane do złożenia" +
        " zamówienia."
});