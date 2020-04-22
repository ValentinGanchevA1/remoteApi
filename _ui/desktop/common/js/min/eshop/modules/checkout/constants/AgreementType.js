define(["exports", "./DeliveryMethod"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t);
    var i = {
        PAPER: "PAPER",
        DIGITAL: "DIGITAL",
        fromDeliveryMethodId: function(e) {
            return t.default.isDigital(e) ? "DIGITAL" : "PAPER"
        }
    };
    e.default = i
});
//# sourceMappingURL=AgreementType.js.map