define(["exports", "lodash"], function(e, B) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, B = babelHelpers.interopRequireDefault(B);
    var t = {
        B2C: "B2C",
        B2B: "B2B",
        B2B_SOHO: "B2B_SOHO",
        isB2B: function(e) {
            return B.default.includes(["B2B", "B2B_SOHO"], e)
        }
    };
    e.default = t
});
//# sourceMappingURL=MarketSegment.js.map