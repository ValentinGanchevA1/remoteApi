define(["exports", "./DeliveryMethod"], function(_exports, _DeliveryMethod) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _DeliveryMethod = babelHelpers.interopRequireDefault(_DeliveryMethod);
    var AgreementType = {
        PAPER: 'PAPER',
        DIGITAL: 'DIGITAL',
        fromDeliveryMethodId: function fromDeliveryMethodId(id) {
            return _DeliveryMethod.default.isDigital(id) ? 'DIGITAL' : 'PAPER';
        }
    };
    var _default = AgreementType;
    _exports.default = _default;
});
//# sourceMappingURL=AgreementType.js.map