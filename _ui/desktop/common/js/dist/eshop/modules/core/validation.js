define(["exports", "./validationHelper"], function(_exports, _validationHelper) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.validator = validator;
    _exports.checkRequiredFieldMessage = _exports.checkNotEmptyStandardMessage = _exports.noPolishCharacters = _exports.limitTo8Characters = _exports.checkSpaceInText = _exports.checkAppartment = _exports.checkPeselAdult = _exports.checkREGON = _exports.checkNIP = _exports.checkPesel = _exports.checkPhoneNumber = _exports.checkNonEmptyEmail = _exports.checkEmail = _exports.checkPostCode = _exports.checkIdentificationNumber = _exports.checkIdNumber = _exports.checkAtLeastTwo = _exports.checkOnlyLetters = _exports.checkNotEmpty = _exports.residenceCardNumber = _exports.idNumber = _exports.regon = _exports.nip = _exports.peselAdult = _exports.pesel = _exports.maxLength = _exports.minLength = _exports.regex = _exports.phoneNumberRegexp = _exports.spaceInText = _exports.appartment = _exports.notEmpty = _exports.check = void 0;

    /*
     * Combines validation checks to create a validator.
     */
    function validator() {
        for (var _len = arguments.length, checks = new Array(_len), _key = 0; _key < _len; _key++) {
            checks[_key] = arguments[_key];
        }

        return function(value) {
            return checks.reduce(function(errors, check) {
                var error = check(value);
                if (error !== null) errors.push(error);
                return errors;
            }, []);
        };
    }

    ;
    /*
     * Create a validation check
     * Usage:
     *   baseCheck = check(condition);
     *   checkWithMessage = baseCheck({level: "warn", message: "Message"});
     */

    var check = function check(condition) {
        return function(message) {
            return function(value) {
                return condition(value) ? null : message;
            };
        };
    };
    /*
     * Simple conditions
     * Condition should be a function that takes a value and returns a boolean
     */


    _exports.check = check;

    var notEmpty = function notEmpty(value) {
        return value !== "";
    };

    _exports.notEmpty = notEmpty;

    var appartment = function appartment(value) {
        return value && value.length > 0 ? /^[a-zżźćńółęąśA-ZŻŹĆĄŚĘŁÓŃ\d]+(((\/)|(\-))?[a-zżźćńółęąśA-ZŻŹĆĄŚĘŁÓŃ\d]+)*$/.test(value) : true;
    };

    _exports.appartment = appartment;

    var spaceInText = function spaceInText(value) {
        return value && value.length > 0 ? !/^(.*\s+.*)+$/.test(value) : true;
    };

    _exports.spaceInText = spaceInText;

    var phoneNumberRegexp = function phoneNumberRegexp(value) {
        return value ? !/^000000000$/.test(value) && /^[1-9]\d{8}$/.test(value) : false;
    };
    /*
     * Condition generators
     * Functions that create conditions given some parameters
     */


    _exports.phoneNumberRegexp = phoneNumberRegexp;

    var regex = function regex(expression) {
        return function(value) {
            return expression.test(value);
        };
    };

    _exports.regex = regex;

    var minLength = function minLength(length) {
        return function(value) {
            return !!value && value.length >= length;
        };
    };

    _exports.minLength = minLength;

    var maxLength = function maxLength(length) {
        return function(value) {
            return !!value && value.length <= length;
        };
    };

    _exports.maxLength = maxLength;

    var pesel = function pesel(value) {
        return (0, _validationHelper.validatePesel)(value);
    };

    _exports.pesel = pesel;

    var peselAdult = function peselAdult(value) {
        return (0, _validationHelper.validateIfAdult)(value);
    };

    _exports.peselAdult = peselAdult;

    var nip = function nip(value) {
        return (0, _validationHelper.validateNIP)(value);
    };

    _exports.nip = nip;

    var regon = function regon(value) {
        return (0, _validationHelper.validateREGON)(value);
    };

    _exports.regon = regon;

    var idNumber = function idNumber(value) {
        return (0, _validationHelper.validateIdNumber)(value);
    };

    _exports.idNumber = idNumber;

    var residenceCardNumber = function residenceCardNumber(value) {
        return (0, _validationHelper.validateResidenceCardNumber)(value);
    };
    /*
     * Generic checks without messages.
     * A message can be added to those to create a validation check that can be used in a validator.
     */


    _exports.residenceCardNumber = residenceCardNumber;
    var checkNotEmpty = check(notEmpty);
    _exports.checkNotEmpty = checkNotEmpty;
    var checkOnlyLetters = check(regex(/^([a-zA-Z\u00A1-\uFFFF])+([a-zA-Z\s\-\u00A1-\uFFFF])*$/));
    _exports.checkOnlyLetters = checkOnlyLetters;
    var checkAtLeastTwo = check(regex(/^.{2,}$/));
    _exports.checkAtLeastTwo = checkAtLeastTwo;
    var checkIdNumber = check(idNumber);
    _exports.checkIdNumber = checkIdNumber;
    var checkIdentificationNumber = check(residenceCardNumber);
    _exports.checkIdentificationNumber = checkIdentificationNumber;
    var checkPostCode = check(regex(/^\d{5}$/)); //RFC 5322 compliant regex

    _exports.checkPostCode = checkPostCode;
    var checkEmail = check(regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
    _exports.checkEmail = checkEmail;
    var checkNonEmptyEmail = check(regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$|^$/));
    _exports.checkNonEmptyEmail = checkNonEmptyEmail;
    var checkPhoneNumber = check(phoneNumberRegexp);
    _exports.checkPhoneNumber = checkPhoneNumber;
    var checkPesel = check(pesel);
    _exports.checkPesel = checkPesel;
    var checkNIP = check(nip);
    _exports.checkNIP = checkNIP;
    var checkREGON = check(regon);
    _exports.checkREGON = checkREGON;
    var checkPeselAdult = check(peselAdult);
    _exports.checkPeselAdult = checkPeselAdult;
    var checkAppartment = check(appartment);
    _exports.checkAppartment = checkAppartment;
    var checkSpaceInText = check(spaceInText);
    _exports.checkSpaceInText = checkSpaceInText;
    var limitTo8Characters = check(regex(/^.{0,8}$/));
    _exports.limitTo8Characters = limitTo8Characters;
    var noPolishCharacters = check(regex(/^((?![żźćńółęąśŻŹĆĄŚĘŁÓŃ]+).)*$/));
    /*
     * Checks with predefined messages
     * Can be used directly in validators.
     */

    _exports.noPolishCharacters = noPolishCharacters;
    var checkNotEmptyStandardMessage = check(notEmpty)({
        level: "error",
        message: "Pole nie może być puste."
    });
    _exports.checkNotEmptyStandardMessage = checkNotEmptyStandardMessage;
    var checkRequiredFieldMessage = check(notEmpty)({
        level: "error",
        message: "Pole wymagane do złożenia" + " zamówienia."
    });
    _exports.checkRequiredFieldMessage = checkRequiredFieldMessage;
});
//# sourceMappingURL=validation.js.map