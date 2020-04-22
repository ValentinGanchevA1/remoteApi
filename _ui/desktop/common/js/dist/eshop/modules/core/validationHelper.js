define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.validateIdNumber = validateIdNumber;
    _exports.validateResidenceCardNumber = validateResidenceCardNumber;
    _exports.validatePesel = validatePesel;
    _exports.validateForeignerPesel = validateForeignerPesel;
    _exports.validateCensoredPesel = validateCensoredPesel;
    _exports.validateIfAdult = validateIfAdult;
    _exports.validateNIP = validateNIP;
    _exports.validateREGON = validateREGON;
    _exports.validatePrice = void 0;

    /*
     * Validations for ID number, identification number and PESEL number
     */

    /*
     * Validation for ID number
     */
    var letterValues = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function validateIdNumber(number) {
        var reg = /^[A-Za-z]{3}\d{6}$/;
        return reg.test(number) === true && checkIdNumberSum(number.toUpperCase());
    }

    function getLetterValue(letter) {
        return letterValues.indexOf(letter);
    }

    function checkIdNumberSum(number) {
        var sum = 7 * getLetterValue(number[0]) + 3 * getLetterValue(number[1]) + 1 * getLetterValue(number[2]) + 7 * getLetterValue(number[4]) + 3 * getLetterValue(number[5]) + 1 * getLetterValue(number[6]) + 7 * getLetterValue(number[7]) + 3 * getLetterValue(number[8]);
        sum %= 10;

        if (sum !== getLetterValue(number[3])) {
            return false;
        }

        return true;
    }
    /*
     * Validation for identification number
     */


    function validateResidenceCardNumber(number) {
        var reg = /^[A-Za-z]{2}\d{7}$/;
        return reg.test(number) === true && checkDigitDistinction(number.slice(2, 10));
    }

    function checkDigitDistinction(number) {
        for (var i = 1; i < number.length; i++) {
            if (number[0] !== number[i]) {
                return true;
            }
        }

        return false;
    }
    /*
     * Validation for PESEL number
     */


    function validatePesel(pesel) {
        var checkIfFakePesel = function checkIfFakePesel(pesel) {
            var month = pesel.substring(2, 4);
            var forbiddenPesels = ['50210100009', '50210100092'];

            if (month > 80 && month < 93 || forbiddenPesels.includes(pesel)) {
                return true;
            }

            return false;
        };

        var reg = /^[0-9]{11}$/;

        if (reg.test(pesel) === false) {
            return false;
        } else if (checkIfFakePesel(pesel)) {
            return false;
        } else {
            var digits = ("" + pesel).split("");

            if (parseInt(pesel.substring(4, 6)) > 31 || parseInt(pesel.substring(4, 6)) === 0 || parseInt(pesel.substring(2, 4) % 20) > 12) {
                return false;
            }

            var checksum = (1 * parseInt(digits[0]) + 3 * parseInt(digits[1]) + 7 * parseInt(digits[2]) + 9 * parseInt(digits[3]) + 1 * parseInt(digits[4]) + 3 * parseInt(digits[5]) + 7 * parseInt(digits[6]) + 9 * parseInt(digits[7]) + 1 * parseInt(digits[8]) + 3 * parseInt(digits[9])) % 10;

            if (checksum === 0) {
                checksum = 10;
            }

            checksum = 10 - checksum;
            return parseInt(digits[10]) === checksum;
        }
    }
    /*
     * Validation for foreigner PESEL number
     */


    function validateForeignerPesel(pesel) {
        return validatePesel(pesel) && ['8', '9'].includes(pesel[2]);
    }

    function validateCensoredPesel(pesel) {
        var reg = /^XXXXXXXXXX[0-9]{1}$/;
        return reg.test(pesel);
    }
    /*
     * Validation for majority (18+) by PESEL number
     */


    function validateIfAdult(pesel) {
        var current = new Date();
        var year = pesel.substring(0, 2);
        var month = pesel.substring(2, 4);

        if (month > 20 && month < 33) {
            year = 20 + year;
        }

        var birthDate = new Date(year, month % 20 - 1, pesel.substring(4, 6));
        current.setFullYear(current.getFullYear() - 18);
        current.setHours(0);
        current.setMinutes(0);
        current.setSeconds(0);
        current.setMilliseconds(0);
        return birthDate <= current;
    }
    /*
     * Validation NIP input value
     */


    function validateNIP(nip) {
        var checkDifferentValues = function checkDifferentValues(s) {
            var firstCharacter = s.charAt(0);

            for (var i = 1; i < s.length; i++) {
                if (firstCharacter !== s.charAt(i)) {
                    return true;
                }
            }

            return false;
        };

        var checkControlValue = function checkControlValue(s) {
            var sum = 0;
            var weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];

            if (s.length - 1 !== weights.length) {
                return false;
            }

            for (var i = 0; i < s.length - 1; i++) {
                var number = parseInt(s.charAt(i)) * weights[i];
                sum += number;
            }

            var result = sum % 11;
            var lastDigit = parseInt(s.charAt(s.length - 1));

            if (lastDigit === result) {
                return true;
            }

            return false;
        };

        var re = /\d{10}/;

        if (re.test(nip)) {
            var differentValues = checkDifferentValues(nip);
            var controlValue = checkControlValue(nip);

            if (differentValues && controlValue) {
                return true;
            }
        }

        return false;
    }

    function validateREGON(regon) {
        var getSum = function getSum(regon, weights) {
            var sum = 0;

            for (var i = 0; i < regon.length - 1; i++) {
                var number = parseInt(regon.charAt(i)) * weights[i];
                sum += number;
            }

            return sum;
        };

        var checkControlValue = function checkControlValue(s) {
            var weights_14v = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
            var weights_9v = [8, 9, 2, 3, 4, 5, 6, 7];
            var sum = 0;

            if (s.length === 14) {
                sum = getSum(s, weights_14v);
            } else if (s.length === 9) {
                sum = getSum(s, weights_9v);
            } else {
                return false;
            }

            var result = sum % 11;

            if (result === 10) {
                result = 0;
            }

            var lastDigit = parseInt(s.charAt(s.length - 1));

            if (lastDigit === result) {
                return true;
            }

            return false;
        };

        var checkDifferentValues = function checkDifferentValues(s) {
            var firstCharacter = s.charAt(0);

            for (var i = 1; i < s.length; i++) {
                if (firstCharacter !== s.charAt(i)) {
                    return true;
                }
            }

            return false;
        };

        var re = /(\d{0})|(\d{9})|(\d{14})/;

        if (re.test(regon)) {
            if (regon.length === 0) {
                return true;
            }

            var differentValues = checkDifferentValues(regon);
            var controlValue = checkControlValue(regon);

            if (differentValues && controlValue) {
                return true;
            }
        }

        return false;
    }

    var validatePrice = function validatePrice(price) {
        var priceRegex = /^\d*((\,\d{0,2})?)$/;
        return priceRegex.test(price);
    };

    _exports.validatePrice = validatePrice;
});
//# sourceMappingURL=validationHelper.js.map