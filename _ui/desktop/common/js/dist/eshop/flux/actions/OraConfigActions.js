define(["exports", "./OraActionKeys", "eshop/flux/dispatcher/OraDispatcher"], function(_exports, _OraActionKeys, _OraDispatcher) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _OraActionKeys = babelHelpers.interopRequireDefault(_OraActionKeys);
    _OraDispatcher = babelHelpers.interopRequireDefault(_OraDispatcher);

    /**
     * Actions used to configure apps behaviour
     * TODO: maybe gather configuration in one dedicated config store?
     */
    var OraConfigActions = function(OraConfigActions) {
        OraConfigActions.checkMsisdnReservation = function() {
            var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            _OraDispatcher.default.dispatch({
                type: _OraActionKeys.default.CONFIG_CHECK_MSISDN_RESERVATIONS,
                active: active
            });
        };

        return OraConfigActions;
    }({});

    var _default = OraConfigActions;
    _exports.default = _default;
});
//# sourceMappingURL=OraConfigActions.js.map