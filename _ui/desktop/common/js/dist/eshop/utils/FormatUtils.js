define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.formatNumber = void 0;

    var formatNumber = function formatNumber(value, pattern) {
        var i = 0;
        return value && pattern.replace(/#/g, function(_) {
            return value[i++];
        });
    };

    _exports.formatNumber = formatNumber;
});
//# sourceMappingURL=FormatUtils.js.map