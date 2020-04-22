define(["exports", "./Color"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, t = babelHelpers.interopRequireDefault(t);
    var r = {
            ERROR: "ERROR",
            INFO: "INFO",
            WARN: "WARN",
            CONSOLE: "CONSOLE",
            getColor: function(e) {
                switch (e) {
                    case r.WARN:
                        return t.default.WARN;
                    case r.INFO:
                        return t.default.INFO;
                    case r.ERROR:
                        return t.default.ERROR;
                    default:
                        return t.default.CONSOLE
                }
            }
        },
        u = r;
    e.default = u
});
//# sourceMappingURL=ParagraphType.js.map