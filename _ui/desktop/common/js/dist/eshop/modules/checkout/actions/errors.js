define(["exports", "../actionTypes"], function(_exports, ACTIONS) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.closeAgreementConfirmationModal = _exports.openAgreementConfirmationModal = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

    var openAgreementConfirmationModal = function openAgreementConfirmationModal(modalVariant) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.OPEN_AGREEMENT_VALIDATION_MODAL,
                modalVariant: modalVariant
            });
        };
    };

    _exports.openAgreementConfirmationModal = openAgreementConfirmationModal;

    var closeAgreementConfirmationModal = function closeAgreementConfirmationModal(modalVariant, wasConfirmed) {
        return function(dispatch) {
            dispatch({
                type: ACTIONS.CLOSE_AGREEMENT_VALIDATION_MODAL,
                modalVariant: modalVariant,
                wasConfirmed: wasConfirmed
            });
        };
    };

    _exports.closeAgreementConfirmationModal = closeAgreementConfirmationModal;
});
//# sourceMappingURL=errors.js.map