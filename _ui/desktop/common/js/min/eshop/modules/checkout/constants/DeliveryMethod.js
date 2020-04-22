define(["exports", "lodash"], function(e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, i = babelHelpers.interopRequireDefault(i);
    var a = {
        COURIER: "courier",
        PICKUP_ORANGE: "pickup_orange",
        PICKUP_FROM_SHELF: "pickup_from_shelf",
        TECHNICAL_ASSISTANT: "technical_assistant",
        POS: "POS",
        PARCEL_LOCKER: "parcel_locker",
        PICKUP_ON_EMAIL: "pickup_on_email",
        PAPER: "paper",
        BZU: "BZU",
        ACCOUNT_MANAGER: "account_manager",
        isDigital: function(e) {
            return i.default.includes(["pickup_on_email", "BZU"], e)
        },
        isPaper: function(e) {
            return !i.default.includes(["pickup_on_email", "BZU"], e)
        }
    };
    e.default = a
});
//# sourceMappingURL=DeliveryMethod.js.map