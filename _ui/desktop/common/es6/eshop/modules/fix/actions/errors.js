import * as ACTIONS from "../actionTypes";

const defaultModalConfig = {
    showIcon: true
};

export const openErrorModal = (errorMessageCode, defaultMessage, errorModalConfig = {}) => (dispatch) => {
    dispatch({
        type: ACTIONS.OPEN_ERROR_MODAL,
        payload: {
            errorMessage: {
                errorMessageCode,
                defaultMessage
            },
            errorModalConfig: {
                ...defaultModalConfig,
                ...errorModalConfig
            }
        }
    });
};

export const closeErrorModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_ERROR_MODAL
    });
};