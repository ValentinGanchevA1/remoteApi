define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    var DeliveryMethod = {
        COURIER: 'courier',
        PICKUP_ORANGE: 'pickup_orange',
        PICKUP_FROM_SHELF: 'pickup_from_shelf',
        TECHNICAL_ASSISTANT: 'technical_assistant',
        POS: 'POS',
        PARCEL_LOCKER: 'parcel_locker',
        PICKUP_ON_EMAIL: 'pickup_on_email',
        PAPER: 'paper',
        BZU: 'BZU',
        ACCOUNT_MANAGER: 'account_manager',
        isDigital: function isDigital(deliveryMethod) {
            return _lodash.default.includes(['pickup_on_email', 'BZU'], deliveryMethod);
        },
        isPaper: function isPaper(deliveryMethod) {
            return !_lodash.default.includes(['pickup_on_email', 'BZU'], deliveryMethod);
        }
    };
    var _default = DeliveryMethod;
    _exports.default = _default;
});
//# sourceMappingURL=DeliveryMethod.js.map