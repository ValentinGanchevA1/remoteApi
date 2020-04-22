define(["exports", "lodash"], function(e, S) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, S = babelHelpers.interopRequireDefault(S);
    var t = {
        JDG: "JDG",
        SC: "SC",
        SZOO: "SZOO",
        SA: "SA",
        SK: "SK",
        SKA: "SKA",
        SJ: "SJ",
        SP: "SP",
        FUN: "FUN",
        STOW: "STOW",
        PAN: "PAN",
        INNA: "INNA",
        isSmallBusiness: function(e) {
            return S.default.includes(["JDG", "SC"], e)
        }
    };
    e.default = t
});
//# sourceMappingURL=LegalFormEnum.js.map