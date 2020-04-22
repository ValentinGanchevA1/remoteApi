import * as ACTIONS from "../actionTypes";
import RemoteApi from "../remoteApi";
import {
    getSelectedOfferId,
    getWwtCityId,
    isSecondaryChoiceOfferSelected
} from "../selectors/root";
import {
    addToCart
} from "./offers";
import {
    getNumbersFetched,
    getNumbersFetching
} from "../selectors/voip";

const voipNumbersFetching = (fetching) => (dispatch) => {
    dispatch({
        type: ACTIONS.VOIP_NUMBERS_FETCHING,
        payload: fetching
    });
};

const voipNumbersFetched = (fetched) => (dispatch) => {
    dispatch({
        type: ACTIONS.VOIP_NUMBERS_FETCHED,
        payload: fetched
    });
};

export const selectVoipNumber = (number) => (dispatch) => {
    dispatch({
        type: ACTIONS.SELECT_VOIP_NUMBER,
        payload: number
    });
};

const saveVoipNumbers = (numbers) => (dispatch) => {
    dispatch({
        type: ACTIONS.SAVE_VOIP_NUMBERS,
        payload: numbers
    });
    if (numbers && numbers.voipNumbers && numbers.voipNumbers[0]) {
        dispatch(selectVoipNumber(numbers.voipNumbers[0]));
    }
};

export const fetchVoipNumbers = (cityId) => (dispatch) => {
    dispatch(voipNumbersFetching(true));
    dispatch(saveVoipNumbers());
    dispatch(voipNumbersFetched(false));
    return RemoteApi.fetchVoipNumbers(cityId)
        .then((response) => {
            dispatch(saveVoipNumbers(response));
            dispatch(voipNumbersFetched(true));
            dispatch(voipNumbersFetching(false));
            return response;
        });
};


export const voipSelection = (voipSelection) => (dispatch, getState) => {
    const voipFetching = getNumbersFetching(getState());
    const voipFetched = getNumbersFetched(getState());
    if (!voipFetching && !voipFetched) {
        dispatch(fetchVoipNumbers(getWwtCityId(getState())));
    }
    dispatch({
        type: ACTIONS.VOIP_SELECTION,
        source: "voipSelection",
        payload: voipSelection
    });
};

export const fetchingVoipNumbersWithMultiCallBlock = (cityId) => (dispatch, getState) => {
    const voipFetching = getNumbersFetching(getState());
    const voipFetched = getNumbersFetched(getState());
    if (!voipFetching && !voipFetched) {
        dispatch(fetchVoipNumbers(cityId));
    }
};

export const saveSelectedVoipNumber = (number) => (dispatch, getState) => {
    const secondaryChoiceOffer = isSecondaryChoiceOfferSelected(getState());
    const offerId = getSelectedOfferId(getState());
    RemoteApi.saveSelectedVoipNumber(number)
        .then(() => {
            dispatch({
                type: ACTIONS.VOIP_NUMBER_SELECTED
            });
            if (!!offerId) {
                dispatch(addToCart(offerId, secondaryChoiceOffer));
            }
        });
};

export const mountVoipModalComponent = () => (dispatch) => {
    dispatch({
        type: ACTIONS.MOUNT_VOIP_MODAL_COMPONENT_ACTION
    });
};

export const selectVoipVariant = (voipVariant) => (dispatch) => {
    dispatch({
        type: ACTIONS.VOIP_VARIANT,
        payload: voipVariant
    });
};

export const showVoipVariantModal = (show) => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_VOIP_VARIANT_MODAL,
        payload: show
    });
};

export const showVoipNumbersModal = (show) => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_VOIP_NUMBERS_MODAL,
        payload: show
    });
};

export const saveDesignationNumber = (designationNumber) => (dispatch) => {
    dispatch({
        type: ACTIONS.DESIGNATION_NUMBER,
        payload: designationNumber
    });
};