define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    var Technology = {
        ADSL: 'ADSL',
        FTTH: 'FTTH',
        IPTV: 'IPTV',
        RFOG: 'RFOG',
        RFTV: 'RFTV',
        SAT: 'SAT',
        VIDSAT: 'VIDSAT',
        VDSL: 'VDSL',
        OTHER: 'OTHER',
        isXDSL: function isXDSL(technology) {
            return _lodash.default.includes(['ADSL', 'VDSL'], technology);
        }
    };
    var _default = Technology;
    _exports.default = _default;
});
//# sourceMappingURL=Technology.js.map