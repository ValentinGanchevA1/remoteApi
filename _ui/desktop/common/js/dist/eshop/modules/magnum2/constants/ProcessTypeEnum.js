define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    var ProcessTypeEnum = {
        UNKNOWN: 'UNKNOWN',
        _2U: '2U',
        _4U: '4U',
        _2ULTE: '2ULTE',
        _3ULTE: '3ULTE',
        ACTIVATION: 'ACTIVATION',
        ACTIVATION_WITH_NP_INT: 'ACTIVATION_WITH_NP_INT',
        ACTIVATION_NNAKED: 'ACTIVATION_NNAKED',
        TERMINATION: 'TERMINATION',
        TERMINATION_DATA: 'TERMINATION_DATA',
        ASSIGNMENT_B2C_JDG: 'ASSIGNMENT_B2C_JDG',
        isLTE: function isLTE(process) {
            return _lodash.default.includes(['2ULTE', '3ULTE'], process);
        }
    };
    var _default = ProcessTypeEnum;
    _exports.default = _default;
});
//# sourceMappingURL=ProcessTypeEnum.js.map