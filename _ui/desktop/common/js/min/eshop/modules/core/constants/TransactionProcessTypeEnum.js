define(["exports", "lodash"], function(_, T) {
    "use strict";
    Object.defineProperty(_, "__esModule", {
        value: !0
    }), _.default = void 0, T = babelHelpers.interopRequireDefault(T);
    var N = {
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
        isAssignment: function(_) {
            return T.default.includes(["ASSIGNMENT", "ASSIGNMENT_DEATH", "ASSIGNMENT_B2C_B2B", "ASSIGNMENT_B2C_JDG"], _)
        },
        isMigration: function(_) {
            return T.default.includes(["MIGRATION_ZETAFON_POST", "MIGRATION_NJU_POST_TO_POST", "MIGRATION_NJU_PRE_TO_POST", "MNP", "MNP_TWOSTEP"], _)
        },
        isTanto: function(_) {
            return T.default.includes(["INSTALMENT_SALES_OF_GOODS", "INSTALMENT_SALES_OF_GOODS_NC"], _)
        }
    };
    _.default = N
});
//# sourceMappingURL=TransactionProcessTypeEnum.js.map