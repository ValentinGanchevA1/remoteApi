import * as ACTIONS from "../actionTypes";
import RemoteApi from "../remoteApi";
import {
    knaNumberValidator
} from "../validators"
import {
    fetchOffers
} from "./offers"

export const showKnaModal = (validate = true) => (dispatch) => {
    dispatch(changeKnaFormField({
        name: "knaNumber",
        value: undefined
    }, validate))
    dispatch({
        type: ACTIONS.SHOW_KNA_MODAL_ACTION
    })
}

export const registerKnaModal = (dispatch) => {
    dispatch({
        type: ACTIONS.REGISTER_KNA_MODAL_ACTION
    });
};

export const closeKnaModal = () => (dispatch) => {
    dispatch({
        type: ACTIONS.CLOSE_KNA_MODAL_ACTION
    })
}

export const submitKnaForm = (knaNumber, address) => (dispatch) => {
    RemoteApi.declareKna(knaNumber).then(response => dispatch(fetchOffers(address, null, false, true, true)));

    dispatch({
        type: ACTIONS.CLOSE_KNA_MODAL_ACTION
    })
}

export const changeKnaFormField = (event, validate = true) => (dispatch) => {
    var errors;
    if (validate) {
        errors = knaNumberValidator.knaNumber(event.value)
    } else {
        errors = undefined;
    }

    dispatch({
        type: ACTIONS.CHANGE_KNA_FORM_FIELD,
        name: event.name,
        value: event.value,
        errors: errors
    });
};


export const hidePaymentLink = (event) => (dispatch) => {
    dispatch({
        type: ACTIONS.HIDE_PAYMENT_LINK_COMPONENT,
    });
};

export const showPaymentLink = (event) => (dispatch) => {
    dispatch({
        type: ACTIONS.SHOW_PAYMENT_LINK_COMPONENT,
    });
};