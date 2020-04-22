define(["exports", "eshop/modules/core/validation"], function(_exports, _validation) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.knaNumberValidator = _exports.checkKnaNumber = void 0;
    var checkKnaNumber = (0, _validation.check)((0, _validation.regex)(/^\d{9}$/));
    _exports.checkKnaNumber = checkKnaNumber;
    var knaNumberValidator = {
        knaNumber: (0, _validation.validator)(_validation.checkNotEmptyStandardMessage, checkKnaNumber({
            level: "warn",
            message: "Nieprawidłowy numer KNA."
        }))
    };
    _exports.knaNumberValidator = knaNumberValidator;
});
//# sourceMappingURL=validators.js.map