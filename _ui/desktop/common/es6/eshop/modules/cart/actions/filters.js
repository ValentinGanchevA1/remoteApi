import * as ACTIONS from "../actionTypes";

export const selectTvPackagesChoiceFilter = (selectedChoice) => (dispatch) => {
    dispatch({
        type: ACTIONS.SELECT_TV_PACKAGES_CHOICE_FILTER,
        payload: selectedChoice
    });
};

export const selectLoyaltyDurationChoiceFilter = (selectedChoice) => (dispatch) => {
    dispatch({
        type: ACTIONS.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER,
        payload: selectedChoice
    });
};