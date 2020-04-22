define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    var TransactionProcessType = {
        ACTIVATION: "ACTIVATION",
        MNP: "MNP",
        RETENTION: "RETENTION",
        MIGRATION_PRE_POST: "MIGRATION_PRE_POST",
        MNP_TWOSTEP: "MNP_TWOSTEP",
        MIGRATION_ZETAFON_POST: "MIGRATION_ZETAFON_POST",
        MIGRATION_NJU_POST_TO_POST: "MIGRATION_NJU_POST_TO_POST",
        MIGRATION_NJU_PRE_TO_POST: "MIGRATION_NJU_PRE_TO_POST",
        ASSIGNMENT: "ASSIGNMENT",
        ASSIGNMENT_DEATH: "ASSIGNMENT_DEATH",
        ASSIGNMENT_B2C_B2B: "ASSIGNMENT_B2C_B2B",
        ASSIGNMENT_B2C_JDG: "ASSIGNMENT_B2C_JDG",
        MNP_APPLICATION: "MNP_APPLICATION",
        MNP_APPLICATION_SECOND_STEP: "MNP_APPLICATION_SECOND_STEP",
        SALE_OF_GOODS: "SALE_OF_GOODS",
        INSTALMENT_SALES_OF_GOODS: "INSTALMENT_SALES_OF_GOODS",
        INSTALMENT_SALES_OF_GOODS_NC: "INSTALMENT_SALES_OF_GOODS_NC",
        isAssignment: function isAssignment(process) {
            return _lodash.default.includes(["ASSIGNMENT", "ASSIGNMENT_DEATH", "ASSIGNMENT_B2C_B2B", "ASSIGNMENT_B2C_JDG"], process);
        },
        isMigration: function isMigration(process) {
            return _lodash.default.includes(["MIGRATION_ZETAFON_POST", "MIGRATION_NJU_POST_TO_POST", "MIGRATION_NJU_PRE_TO_POST", "MNP", "MNP_TWOSTEP"], process);
        },
        isTanto: function isTanto(process) {
            return _lodash.default.includes(["INSTALMENT_SALES_OF_GOODS", "INSTALMENT_SALES_OF_GOODS_NC"], process);
        }
    };
    var _default = TransactionProcessType;
    _exports.default = _default;
});
//# sourceMappingURL=TransactionProcessTypeEnum.js.map