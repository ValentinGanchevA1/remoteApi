define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.cbsKey = cbsKey;
    _exports.isValidPostalCode = isValidPostalCode;
    _exports.formatPostalCode = formatPostalCode;

    function cbsKey(postalCode, city) {
        return !postalCode ? null : postalCode + (!city ? "" : "#" + city.toUpperCase());
    }

    var postalCodeRegex = /^\d{5}$/;

    function isValidPostalCode(postalCode) {
        return postalCodeRegex.test(postalCode);
    }

    function formatPostalCode(postalCode) {
        return postalCode.slice(0, 2) + "-" + postalCode.slice(2);
    }
});
//# sourceMappingURL=utils.js.map