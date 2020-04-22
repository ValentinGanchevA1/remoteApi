define(["exports", "lodash"], function(T, N) {
    "use strict";
    Object.defineProperty(T, "__esModule", {
        value: !0
    }), T.default = void 0, N = babelHelpers.interopRequireDefault(N);
    var I = {
        UNKNOWN: "UNKNOWN",
        _2U: "2U",
        _4U: "4U",
        _2ULTE: "2ULTE",
        _3ULTE: "3ULTE",
        ACTIVATION: "ACTIVATION",
        ACTIVATION_WITH_NP_INT: "ACTIVATION_WITH_NP_INT",
        ACTIVATION_NNAKED: "ACTIVATION_NNAKED",
        TERMINATION: "TERMINATION",
        TERMINATION_DATA: "TERMINATION_DATA",
        ASSIGNMENT_B2C_JDG: "ASSIGNMENT_B2C_JDG",
        isLTE: function(T) {
            return N.default.includes(["2ULTE", "3ULTE"], T)
        }
    };
    T.default = I
});
//# sourceMappingURL=ProcessTypeEnum.js.map