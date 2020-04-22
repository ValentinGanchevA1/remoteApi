define(["exports", "redux", "./transfer"], function(_exports, _redux, transfer) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    transfer = babelHelpers.interopRequireWildcard(transfer);

    var _default = (0, _redux.combineReducers)({
        transfer: (0, _redux.combineReducers)(transfer)
    });

    _exports.default = _default;
});
//# sourceMappingURL=root.js.map