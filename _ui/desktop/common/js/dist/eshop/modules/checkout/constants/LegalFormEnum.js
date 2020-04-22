define(["exports", "lodash"], function(_exports, _lodash) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _lodash = babelHelpers.interopRequireDefault(_lodash);
    var LegalForm = {
        JDG: 'JDG',
        SC: 'SC',
        SZOO: 'SZOO',
        SA: 'SA',
        SK: 'SK',
        SKA: 'SKA',
        SJ: 'SJ',
        SP: 'SP',
        FUN: 'FUN',
        STOW: 'STOW',
        PAN: 'PAN',
        INNA: 'INNA',
        isSmallBusiness: function isSmallBusiness(legalForm) {
            return _lodash.default.includes(['JDG', 'SC'], legalForm);
        }
    };
    var _default = LegalForm;
    _exports.default = _default;
});
//# sourceMappingURL=LegalFormEnum.js.map