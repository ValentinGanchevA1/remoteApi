define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.emptyAddress = _exports.emptyCustomerContact = _exports.emptyBusinessData = _exports.emptyPersonalData = _exports.emptyPolishPersonalData = _exports.emptyForeignerPersonalData = void 0;

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

    var emptyForeignerPersonalData = {
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
    _exports.emptyForeignerPersonalData = emptyForeignerPersonalData;
    var emptyPolishPersonalData = {
        pesel: "",
        idNumber: "",
        disabledIdNumber: false
    };
    _exports.emptyPolishPersonalData = emptyPolishPersonalData;

    var emptyPersonalData = _objectSpread({
        firstName: "",
        lastName: ""
    }, emptyPolishPersonalData, {}, emptyForeignerPersonalData, {
        foreigner: false,
        hasActiveContracts: null
    });

    _exports.emptyPersonalData = emptyPersonalData;
    var emptyBusinessData = {
        nip: "",
        regon: "",
        companyName: "",
        legalForm: "",
        registrationDate: "",
        companyStatus: "",
        statusAndDateFromBpg: false
    };
    _exports.emptyBusinessData = emptyBusinessData;
    var emptyCustomerContact = {
        emailAddress: "",
        phoneNumber: "",
        customerNoEmail: false
    };
    _exports.emptyCustomerContact = emptyCustomerContact;
    var emptyAddress = {
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
    _exports.emptyAddress = emptyAddress;
});
//# sourceMappingURL=helperObjects.js.map