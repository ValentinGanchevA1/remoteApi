import * as ACTIONS from "../actionTypes";

export const openAgreementConfirmationModal = (modalVariant) => (dispatch) => {
    dispatch({
        type: ACTIONS.OPEN_AGREEMENT_VALIDATION_MODAL,
        modalVariant: modalVariant
    });
};

export const closeAgreementConfirmationModal = (modalVariant, wasConfirmed) => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_AGREEMENT_VALIDATION_MODAL,
        modalVariant: modalVariant,
        wasConfirmed: wasConfirmed
    });
};