define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher"], function(e, t, a) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t), a = babelHelpers.interopRequireDefault(a);
    var i, r = ((i = {}).checkMsisdnReservation = function() {
        var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        a.default.dispatch({
            type: t.default.CONFIG_CHECK_MSISDN_RESERVATIONS,
            active: e
        })
    }, i);
    e.default = r
});
//# sourceMappingURL=OraConfigActions.js.map