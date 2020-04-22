define(["exports", "./Color"], function(_exports, _Color) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _Color = babelHelpers.interopRequireDefault(_Color);
    var ParagraphType = {
        ERROR: 'ERROR',
        INFO: 'INFO',
        WARN: 'WARN',
        CONSOLE: 'CONSOLE',
        getColor: function getColor(c) {
            switch (c) {
                case ParagraphType.WARN:
                    return _Color.default.WARN;

                case ParagraphType.INFO:
                    return _Color.default.INFO;

                case ParagraphType.ERROR:
                    return _Color.default.ERROR;

                default:
                    return _Color.default.CONSOLE;
            }
        }
    };
    var _default = ParagraphType;
    _exports.default = _default;
});
//# sourceMappingURL=ParagraphType.js.map