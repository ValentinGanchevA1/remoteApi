import RemoteApi from "../remoteApi";
import * as ACTIONS from "../actionTypes";
import {
    getPaymentCheckoutData
} from "../selectors";

export const fetchCartPayment = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(fetchPaymentStarted());
        RemoteApi.getCartPayment().then(cartPayment => {
            const paymentMethod = cartPayment && cartPayment.length > 0 ? cartPayment[0].paymentMethod : null;
            const eligCode = cartPayment && cartPayment.length > 0 ? cartPayment[0].eligCode : null;
            dispatch(selectPaymentMethod(paymentMethod, eligCode));
            dispatch(fetchPaymentDone());
            resolve(cartPayment);
        }).catch(error => {
            reject(error);
        });
    });
};

export const updatePaymentMethod = (code, eligCode) => (dispatch, getState) => {
    dispatch(selectPaymentMethod(code, eligCode));
    RemoteApi.updateCartPayment(getPaymentCheckoutData(getState()));
};

export const selectPaymentMethod = (code, eligCode) => ({
    type: ACTIONS.SELECT_PAYMENT_METHOD,
    code,
    eligCode,
});

const fetchPaymentStarted = () => ({
    type: ACTIONS.GET_PAYMENT_DATA_START,
});

const fetchPaymentDone = () => ({
    type: ACTIONS.GET_PAYMENT_DATA_DONE,
});