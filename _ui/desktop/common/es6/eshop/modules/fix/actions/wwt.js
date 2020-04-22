import * as ACTIONS from "../actionTypes";
import * as MAGNUM_ACTIONS from "../../magnum2/actionTypes";
import {
    checkAvailablePromotions,
    fetchOffers,
    isAddressNotEmpty
} from "./offers";
import {
    saveDesignationNumber
} from "./voip";
import {
    isWWW
} from "../selectors/root";

export const updateAddress = (address, customerServicesHashCode = null, reset = false, checkApartment = false) => (dispatch, getState) => {
    const www = isWWW(getState());
    dispatch(checkAvailablePromotions(address))
        .then((response) => {
            if (!address.fromSession && !www && checkApartment && !!response && !!response.availableApartments && response.availableApartments.length > 0) {
                dispatch({
                    type: MAGNUM_ACTIONS.SAVE_WWT_ADDITIONAL_DATA,
                    payload: response
                });
            } else {
                dispatch(fetchOffers(address, customerServicesHashCode, reset));
            }
        });
};

export const saveWWTAddress = ({
    address = null,
    forceAfterWwt = false,
    designationNumber = null
}) => (dispatch) => {

    dispatch(saveDesignationNumber(designationNumber));

    dispatch({
        type: ACTIONS.SAVE_WWT_ADDRESS,
        payload: address
    });

    if (isAddressNotEmpty(address) || forceAfterWwt) {
        dispatch({
            type: ACTIONS.AFTER_WWT
        });
    } else {
        dispatch({
            type: ACTIONS.BEFORE_WWT
        });
    }
};
export const doShowWWTModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_WWT_MODAL
    });

}
export const doHideWWTModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.HIDE_WWT_MODAL
    });

}

export const setRedirectUrlAfterWWT = (url) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_REDIRECT_URL_AFTER_WWT,
        url
    })

}