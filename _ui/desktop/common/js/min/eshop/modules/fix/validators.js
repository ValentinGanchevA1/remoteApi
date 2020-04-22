define(["exports", "eshop/modules/core/validation"], function(e, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.knaNumberValidator = e.checkKnaNumber = void 0;
    var r = (0, a.check)((0, a.regex)(/^\d{9}$/));
    e.checkKnaNumber = r;
    var o = {
        knaNumber: (0, a.validator)(a.checkNotEmptyStandardMessage, r({
            level: "warn",
            message: "Nieprawidłowy numer KNA."
        }))
    };
    e.knaNumberValidator = o
});
//# sourceMappingURL=validators.js.map