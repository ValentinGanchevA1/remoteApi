import * as ACTIONS from "../actionTypes";
import * as remote from "./remote";
import RemoteApi from "../remoteApi";
import {
    getCartDeliveryMethodForDevices,
    getCustomerNoEmail,
    getDefaultDeliveryMethod,
    getDelivery,
    getDeliveryMethodsForDevices,
    getDeliveryMethodsRaw,
    getSelectedOrDefaultAgreementType,
    getSelectedOrDefaultDeliveryMethod,
    getSelectedOrDefaultPaymentMethod,
    hasAgreementTypeChanged,
    isSelectedDeliveryMethodAvailable,
    shouldShowEmailWarning,
    getDescriptionKey
} from "../selectors";
import {
    registerNextStepCondition,
    unregisterNextStepCondition,
    requestCartConsentsData,
    updateDelivery
} from "./data";
import {
    selectPaymentMethod
} from "./payment";
import AgreementType from "../constants/AgreementType";
import {
    showEmailWarningModal
} from "./app";
import {
    fetchDocuments
} from "../../documents/actions/documents";
import DeliveryMethod from "../constants/DeliveryMethod";
import DataLayerUtils from "eshop/utils/DataLayerUtils";

export const fetchDeliveryMethods = () => dispatch => {
    return new Promise((resolve, reject) => {
        RemoteApi.getCartDelivery().then(deliveryMethods => {
            dispatch(fetchDeliveryMethodsDone(deliveryMethods));
            resolve(deliveryMethods);
        }).catch(error => {
            reject(error);
        });
    });
};

export const fetchCartDelivery = () => dispatch => {
    return new Promise((resolve, reject) => {
        RemoteApi.getCartDeliveryData().then(cartDelivery => {
            dispatch(remote.getCartDeliveryDataDone(cartDelivery[0]));
            resolve(cartDelivery[0]);
        }).catch(error => {
            reject(error);
        })
    });
};

export const initDelivery = () => (dispatch, getState) => {
    dispatch(registerNextStepCondition('payment'));
    dispatch(registerNextStepCondition('delivery'));
    dispatch(selectAgreementType(getSelectedOrDefaultAgreementType(getState())));
    dispatch(selectDeliveryAndWithoutChangingPaymentMethod(getSelectedOrDefaultDeliveryMethod(getState())));
    const deliveryMethodForDevices = getCartDeliveryMethodForDevices(getState()) || (getDeliveryMethodsForDevices(getState())[0] && getDeliveryMethodsForDevices(getState())[0].id);
    deliveryMethodForDevices && dispatch(selectDeliveryMethodForDevices(deliveryMethodForDevices));
    dispatch(showEmailWarning());
    updateDelivery()(dispatch, getState).then(isUpdated => {
        return conditionallyFetchDeliveryMethods(hasAgreementTypeChanged)(dispatch, getState);
    }).then(isFetched => {
        return updateDefaultDeliveryMethod()(dispatch, getState);
    }).then(isUpdated => {
        dispatch(requestCartConsentsData());
        dispatch(fetchDocuments());
        DataLayerUtils.pushAgreementVisibilityEvent(
            (getDeliveryMethodsRaw(getState()).map(m => m.id).some(DeliveryMethod.isDigital)) ?
            AgreementType.DIGITAL : AgreementType.PAPER);
        DataLayerUtils.pushSelectedAgreementType(getSelectedOrDefaultAgreementType(getState()));
    });
};

export const updateAgreementType = agreementType => (dispatch, getState) => {
    const deliveryMethodsRaw = getDeliveryMethodsRaw(getState()).map(m => m.id);
    if (agreementType === AgreementType.DIGITAL && getCustomerNoEmail(getState()) && deliveryMethodsRaw.some(methodId => DeliveryMethod.PICKUP_ON_EMAIL === methodId)) {
        dispatch(showEmailWarningModal());
        return;
    }
    dispatch(selectAgreementType(agreementType));
    dispatch(selectDeliveryAndPaymentMethod(getSelectedOrDefaultDeliveryMethod(getState())));
    DataLayerUtils.pushSelectedAgreementType(agreementType);
    if (agreementType === AgreementType.DIGITAL) {
        dispatch(unregisterNextStepCondition('additionalDocuments'));
    }
    updateDelivery()(dispatch, getState).then(isUpdated => {
        return fetchDeliveryMethods()(dispatch);
    }).then(deliveryMethods => {
        return updateDefaultDeliveryMethod()(dispatch, getState);
    }).then(isUpdated => {
        dispatch(requestCartConsentsData());
        dispatch(fetchDocuments());
    });
};

export const updateDeliveryMethod = deliveryMethodCode => (dispatch, getState) => {
    dispatch(selectDeliveryAndPaymentMethod(deliveryMethodCode));
    updateDelivery()(dispatch, getState).then(isUpdated => {
        dispatch(requestCartConsentsData());
        dispatch(fetchDocuments());
    });
};

const showEmailWarning = () => (dispatch, getState) => {
    if (shouldShowEmailWarning(getState())) {
        dispatch(showEmailWarningModal(getDescriptionKey(getState())));
    }
};

const updateDefaultDeliveryMethod = () => (dispatch, getState) => {
    if (isSelectedDeliveryMethodAvailable(getState())) {
        return Promise.resolve(false);
    }
    dispatch(selectDeliveryAndPaymentMethod(getDefaultDeliveryMethod(getState())));
    return updateDelivery()(dispatch, getState);
};

const conditionallyFetchDeliveryMethods = conditionSelector => (dispatch, getState) => {
    if (conditionSelector(getState())) {
        return fetchDeliveryMethods()(dispatch);
    }
    return Promise.resolve(false);
};

const selectDeliveryAndPaymentMethod = deliveryMethodCode => (dispatch, getState) => {
    dispatch(selectPaymentMethod(getSelectedOrDefaultPaymentMethod(getState())));
    dispatch(selectDeliveryMethod(deliveryMethodCode));
};

const selectDeliveryAndWithoutChangingPaymentMethod = deliveryMethodCode => (dispatch, getState) => {
    dispatch(selectDeliveryMethodWithoutChangingPayment(deliveryMethodCode));
};

const selectDeliveryMethodWithoutChangingPayment = deliveryMethodCode => ({
    type: ACTIONS.SELECT_DELIVERY_METHOD_WITHOUT_CHANGING_PAYMENT_METHOD,
    id: deliveryMethodCode
});


const selectDeliveryMethod = deliveryMethodCode => ({
    type: ACTIONS.SELECT_DELIVERY_METHOD,
    id: deliveryMethodCode
});

export const selectDeliveryMethods = ({
    mobile,
    fixDocuments,
    fixDevices
} = {}) => ({
    type: ACTIONS.SELECT_DELIVERY_METHODS,
    mobile,
    fixDocuments,
    fixDevices
});

export const selectDeliveryMethodForDevices = (id) => ({
    type: ACTIONS.SELECT_DELIVERY_METHOD_FOR_DEVICES,
    id
});

export const selectAgreementType = id => ({
    type: ACTIONS.SELECT_AGREEMENT_TYPE,
    id
});

export const setIsDigitalAgreementDefault = isDigitalAgreementDefault => ({
    type: ACTIONS.SET_IS_DIGITAL_AGREEMENT_DEFAULT,
    isDigitalAgreementDefault
});

export const setDeliveryEmailAddress = (emailAddress) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_DELIVERY_EMAIL,
        payload: emailAddress
    });
};

export const setEmailConfirmationModalState = (open) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_EMAIL_CONFIRMATION_MODAL_STATE,
        payload: open
    });
};

export const setEmailConfirmationModalAccepted = (accepted) => (dispatch) => {
    dispatch({
        type: ACTIONS.SET_EMAIL_CONFIRMATION_MODAL_ACCEPTED,
        payload: accepted
    });
};

export const fetchDeliveryMethodsDone = (data) => ({
    type: ACTIONS.FETCH_DELIVERY_METHODS_DONE,
    methods: data.deliveryMethods,
    isDeliveryRequired: data.isDeliveryRequired,
    isFirstMethodDefault: data.isFirstMethodDefault,
    paymentWithoutDeliveryMethod: data.paymentWithoutDeliveryMethod
});

export const selectedDocumentsDeliveryMethod = (state) => {
    const delivery = getDelivery(state);
    if (delivery.selectedDeliveryMethods && delivery.selectedDeliveryMethods.fixDocuments) {
        return delivery.selectedDeliveryMethods.fixDocuments;
    } else {
        return delivery.selectedMethod;
    }
};