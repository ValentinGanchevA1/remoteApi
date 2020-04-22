define(["exports", "../actionTypes", "../constants/AgreementType", "../validators"], function(_exports, ACTIONS, _AgreementType, _validators) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.isDigitalAgreementDefault = _exports.cartDelivery = _exports.emailConfirmationModalAccepted = _exports.emailConfirmationModalState = _exports.emailAddressErrors = _exports.emailAddress = _exports.parcelLockerCityList = _exports.parcelLockerList = _exports.lastPos = _exports.pointsOfSalePickup = _exports.pointOfSalePickupCities = _exports.pointOfSaleCity = _exports.phoneContact = _exports.courierMessage = _exports.selectedPointOfSale = _exports.pointsOfSale = _exports.agreementType = _exports.selectedDeliveryMethods = _exports.selectedMethodForDevices = _exports.selectedMethod = _exports.deliveryMethodsFetchDone = _exports.paymentWithoutDeliveryMethod = _exports.isFirstMethodDefault = _exports.isDeliveryRequired = _exports.methods = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _AgreementType = babelHelpers.interopRequireDefault(_AgreementType);

    var methods = function methods() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
                return action.methods;

            case ACTIONS.FILTER_DELIVERY_METHODS:
                return action.methods;

            default:
                return state;
        }
    };

    _exports.methods = methods;

    var isDeliveryRequired = function isDeliveryRequired() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
                return action.isDeliveryRequired;

            default:
                return state;
        }
    };

    _exports.isDeliveryRequired = isDeliveryRequired;

    var isFirstMethodDefault = function isFirstMethodDefault() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
                return action.isFirstMethodDefault;

            default:
                return state;
        }
    };

    _exports.isFirstMethodDefault = isFirstMethodDefault;

    var paymentWithoutDeliveryMethod = function paymentWithoutDeliveryMethod() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
                return action.paymentWithoutDeliveryMethod;

            default:
                return state;
        }
    };

    _exports.paymentWithoutDeliveryMethod = paymentWithoutDeliveryMethod;

    var deliveryMethodsFetchDone = function deliveryMethodsFetchDone() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_DELIVERY_METHODS_DONE:
                return true;

            default:
                return state;
        }
    };

    _exports.deliveryMethodsFetchDone = deliveryMethodsFetchDone;

    var selectedMethod = function selectedMethod() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_DELIVERY_METHOD:
                return action.id;

            case ACTIONS.SELECT_DELIVERY_METHOD_WITHOUT_CHANGING_PAYMENT_METHOD:
                return action.id;

            default:
                return state;
        }
    };

    _exports.selectedMethod = selectedMethod;

    var selectedMethodForDevices = function selectedMethodForDevices() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_DELIVERY_METHOD_FOR_DEVICES:
                return action.id;

            default:
                return state;
        }
    };

    _exports.selectedMethodForDevices = selectedMethodForDevices;
    var selectedDeliveryMethodsInitialState = {
        mobile: '',
        fixDocuments: '',
        fixDevices: ''
    };

    var selectedDeliveryMethods = function selectedDeliveryMethods() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : selectedDeliveryMethodsInitialState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.selectedDeliveryMethods = selectedDeliveryMethods;

    var agreementType = function agreementType() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _AgreementType.default.PAPER;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SELECT_AGREEMENT_TYPE:
                return action.id;

            default:
                return state;
        }
    };

    _exports.agreementType = agreementType;

    var pointsOfSale = function pointsOfSale() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_NEAREST_POINTS_OF_SALE_DONE:
                return action.pointsOfSale;

            default:
                return state;
        }
    };

    _exports.pointsOfSale = pointsOfSale;

    var selectedPointOfSale = function selectedPointOfSale() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.selectedPointOfSale = selectedPointOfSale;

    var courierMessage = function courierMessage() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHANGE_DELIVERY_COURIER_MESSAGE:
                return action.value;

            default:
                return state;
        }
    };

    _exports.courierMessage = courierMessage;

    var phoneContact = function phoneContact() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.phoneContact = phoneContact;

    var pointOfSaleCity = function pointOfSaleCity() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHANGE_POINT_OF_SALE_CITY:
                return action.value;

            case ACTIONS.CHANGE_PARCEL_LOCKER_CITY:
                return action.value;

            default:
                return state;
        }
    };

    _exports.pointOfSaleCity = pointOfSaleCity;

    var pointOfSalePickupCities = function pointOfSalePickupCities() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_POS_PICKUP_CITIES_DONE:
                return action.data.cityList;

            default:
                return state;
        }
    };

    _exports.pointOfSalePickupCities = pointOfSalePickupCities;

    var pointsOfSalePickup = function pointsOfSalePickup() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_POS_PICKUP_AVAILABILITY_DONE:
                return action.pointsOfSale;

            default:
                return state;
        }
    };

    _exports.pointsOfSalePickup = pointsOfSalePickup;

    var lastPos = function lastPos() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.lastPos = lastPos;

    var parcelLockerList = function parcelLockerList() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_PARCEL_LOCKER_LIST:
                return action.data;

            default:
                return state;
        }
    };

    _exports.parcelLockerList = parcelLockerList;

    var parcelLockerCityList = function parcelLockerCityList() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.FETCH_PARCEL_LOCKER_CITY_LIST:
                return action.data;

            default:
                return state;
        }
    };

    _exports.parcelLockerCityList = parcelLockerCityList;

    var emailAddress = function emailAddress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_DELIVERY_EMAIL:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.emailAddress = emailAddress;

    var emailAddressErrors = function emailAddressErrors() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_DELIVERY_EMAIL:
                return _validators.emailDeliveryValidators["emailAddress"](action.payload);

            default:
                return state;
        }
    };

    _exports.emailAddressErrors = emailAddressErrors;

    var emailConfirmationModalState = function emailConfirmationModalState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_EMAIL_CONFIRMATION_MODAL_STATE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.emailConfirmationModalState = emailConfirmationModalState;

    var emailConfirmationModalAccepted = function emailConfirmationModalAccepted() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_EMAIL_CONFIRMATION_MODAL_ACCEPTED:
                return action.payload;

            case ACTIONS.SET_DELIVERY_EMAIL:
                return false;

            default:
                return state;
        }
    };

    _exports.emailConfirmationModalAccepted = emailConfirmationModalAccepted;

    var cartDelivery = function cartDelivery() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CART_DELIVERY_DATA_DONE:
                return action.data;

            default:
                return state;
        }
    };

    _exports.cartDelivery = cartDelivery;

    var isDigitalAgreementDefault = function isDigitalAgreementDefault() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_IS_DIGITAL_AGREEMENT_DEFAULT:
                return action.isDigitalAgreementDefault;

            default:
                return state;
        }
    };

    _exports.isDigitalAgreementDefault = isDigitalAgreementDefault;
});
//# sourceMappingURL=delivery.js.map