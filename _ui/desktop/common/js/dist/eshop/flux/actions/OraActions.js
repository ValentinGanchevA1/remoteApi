define(["exports", "./OraAppActions", "./OraSerwerActions", "./OraFailureActions", "./OraPageActions", "./OraConfigActions"], function(_exports, _OraAppActions, _OraSerwerActions, _OraFailureActions, _OraPageActions, _OraConfigActions) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _OraAppActions = babelHelpers.interopRequireDefault(_OraAppActions);
    _OraSerwerActions = babelHelpers.interopRequireDefault(_OraSerwerActions);
    _OraFailureActions = babelHelpers.interopRequireDefault(_OraFailureActions);
    _OraPageActions = babelHelpers.interopRequireDefault(_OraPageActions);
    _OraConfigActions = babelHelpers.interopRequireDefault(_OraConfigActions);
    var OraActions = {
        app: _OraAppActions.default,
        server: _OraSerwerActions.default,
        error: _OraFailureActions.default,
        goto: _OraPageActions.default,
        config: _OraConfigActions.default
    };
    var _default = OraActions;
    _exports.default = _default;
});
//# sourceMappingURL=OraActions.js.map