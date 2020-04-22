import * as ACTIONS from '../actionTypes';
import AgreementType from "../constants/AgreementType";
import {
    emailDeliveryValidators
} from "../validators";

export const methods = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
            return action.methods;
        case ACTIONS.FILTER_DELIVERY_METHODS:
            return action.methods;
        default:
            return state;
    }
};

export const isDeliveryRequired = (state = true, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
            return action.isDeliveryRequired;
        default:
            return state;
    }
};

export const isFirstMethodDefault = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
            return action.isFirstMethodDefault;
        default:
            return state;
    }
};

export const paymentWithoutDeliveryMethod = (state = true, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
            return action.paymentWithoutDeliveryMethod;
        default:
            return state;
    }
};

export const deliveryMethodsFetchDone = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
            return true;
        default:
            return state;
    }
};

export const selectedMethod = (state = "", action) => {
    switch (action.type) {
        case ACTIONS.SELECT_DELIVERY_METHOD:
            return action.id;
        case ACTIONS.SELECT_DELIVERY_METHOD_WITHOUT_CHANGING_PAYMENT_METHOD:
            return action.id;
        default:
            return state;
    }
};

export const selectedMethodForDevices = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.SELECT_DELIVERY_METHOD_FOR_DEVICES:
            return action.id;
        default:
            return state;
    }
};

const selectedDeliveryMethodsInitialState = {
    mobile: '',
    fixDocuments: '',
    fixDevices: ''
};

export const selectedDeliveryMethods = (state = selectedDeliveryMethodsInitialState, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_DELIVERY_METHODS:
            return {
                mobile: action.mobile || state.mobile,
                    fixDocuments: action.fixDocuments || state.fixDocuments,
                    fixDevices: action.fixDevices || state.fixDevices
            };
        default:
            return state;
    }
};

export const agreementType = (state = AgreementType.PAPER, action) => {
    switch (action.type) {
        case ACTIONS.SELECT_AGREEMENT_TYPE:
            return action.id;
        default:
            return state;
    }
};

export const pointsOfSale = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_NEAREST_POINTS_OF_SALE_DONE:
            return action.pointsOfSale;
        default:
            return state;
    }
};

export const selectedPointOfSale = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.FETCH_POS_PICKUP_AVAILABILITY_DONE:
            if (action.pointsOfSale && action.pointsOfSale.length === 1) {
                return action.pointsOfSale[0].uniqueName;
            }
            return state;
        case ACTIONS.GET_CART_DELIVERY_DATA_DONE:
            return action.data.pointOfServiceName;
        case ACTIONS.SELECT_POINT_OF_SALE:
            return action.posId;
        case ACTIONS.SELECT_PARCEL_LOCKER:
            return action.uniqueName;
        case ACTIONS.FETCH_PARCEL_LOCKER_LIST:
            if (action.data && action.data.length === 1) {
                return action.data[0].uniqueName;
            }
            return state;
        default:
            return state;
    }
};

export const courierMessage = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_DELIVERY_COURIER_MESSAGE:
            return action.value;
        default:
            return state;
    }
};

export const phoneContact = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_DELIVERY_PHONE_NUMBER:
            return action.data.phoneContact;
        case ACTIONS.CHANGE_COURIER_PHONE_CONTACT:
            return action.value;
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            return action.data.phoneNumber;
        default:
            return state;
    }
};

export const pointOfSaleCity = (state = '', action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_POINT_OF_SALE_CITY:
            return action.value;
        case ACTIONS.CHANGE_PARCEL_LOCKER_CITY:
            return action.value;
        default:
            return state;
    }
};

export const pointOfSalePickupCities = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_POS_PICKUP_CITIES_DONE:
            return action.data.cityList;
        default:
            return state;
    }
};


export const pointsOfSalePickup = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_POS_PICKUP_AVAILABILITY_DONE:
            return action.pointsOfSale;
        default:
            return state;
    }
};

export const lastPos = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.GET_LAST_PICKUP_POS:
            return action.data;
        case ACTIONS.GET_LAST_PARCEL_LOCKER_POS:
            return action.data;
        case ACTIONS.SET_LAST_PARCEL_LOCKER_POS:
            return action.data;
        default:
            return state;
    }
};

export const parcelLockerList = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_PARCEL_LOCKER_LIST:
            return action.data;
        default:
            return state;
    }
};

export const parcelLockerCityList = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_PARCEL_LOCKER_CITY_LIST:
            return action.data;
        default:
            return state;
    }
};

export const emailAddress = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.SET_DELIVERY_EMAIL:
            return action.payload;
        default:
            return state;
    }
};

export const emailAddressErrors = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.SET_DELIVERY_EMAIL:
            return emailDeliveryValidators["emailAddress"](action.payload);
        default:
            return state;
    }
};

export const emailConfirmationModalState = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SET_EMAIL_CONFIRMATION_MODAL_STATE:
            return action.payload;
        default:
            return state;
    }
};

export const emailConfirmationModalAccepted = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SET_EMAIL_CONFIRMATION_MODAL_ACCEPTED:
            return action.payload;
        case ACTIONS.SET_DELIVERY_EMAIL:
            return false;
        default:
            return state;
    }
};

export const cartDelivery = (state = null, action) => {
    switch (action.type) {
        case ACTIONS.GET_CART_DELIVERY_DATA_DONE:
            return action.data;
        default:
            return state;

    }
};

export const isDigitalAgreementDefault = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.SET_IS_DIGITAL_AGREEMENT_DEFAULT:
            return action.isDigitalAgreementDefault;
        default:
            return state;
    }
};