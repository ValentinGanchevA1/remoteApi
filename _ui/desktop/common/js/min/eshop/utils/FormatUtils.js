define(["exports"], function(e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.formatNumber = void 0;
    e.formatNumber = function(r, e) {
        var t = 0;
        return r && e.replace(/#/g, function(e) {
            return r[t++]
        })
    }
});
//# sourceMappingURL=FormatUtils.js.map