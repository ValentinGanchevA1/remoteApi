define(["exports", "../actionTypes"], function(e, t) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.closeAgreementConfirmationModal = e.openAgreementConfirmationModal = void 0, t = babelHelpers.interopRequireWildcard(t);
    e.openAgreementConfirmationModal = function(n) {
        return function(e) {
            e({
                type: t.OPEN_AGREEMENT_VALIDATION_MODAL,
                modalVariant: n
            })
        }
    };
    e.closeAgreementConfirmationModal = function(n, o) {
        return function(e) {
            e({
                type: t.CLOSE_AGREEMENT_VALIDATION_MODAL,
                modalVariant: n,
                wasConfirmed: o
            })
        }
    }
});
//# sourceMappingURL=errors.js.map