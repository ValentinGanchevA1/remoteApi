define(["exports", "lodash"], function(e, T) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, T = babelHelpers.interopRequireDefault(T);
    var t = {
        ADSL: "ADSL",
        FTTH: "FTTH",
        IPTV: "IPTV",
        RFOG: "RFOG",
        RFTV: "RFTV",
        SAT: "SAT",
        VIDSAT: "VIDSAT",
        VDSL: "VDSL",
        OTHER: "OTHER",
        isXDSL: function(e) {
            return T.default.includes(["ADSL", "VDSL"], e)
        }
    };
    e.default = t
});
//# sourceMappingURL=Technology.js.map