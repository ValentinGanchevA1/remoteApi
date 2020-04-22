define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    var MarketSegment = {
        B2C: 'B2C',
        B2B: 'B2B',
        B2B_SOHO: 'B2B_SOHO',
        isB2B: function isB2B(marketSegment) {
            return _lodash.default.includes(['B2B', 'B2B_SOHO'], marketSegment);
        }
    };
    var _default = MarketSegment;
    _exports.default = _default;
});
//# sourceMappingURL=MarketSegment.js.map