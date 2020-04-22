define(["exports", "../actionTypes", "../constants/AgreementType", "../validators"], function(e, r, a, l) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isDigitalAgreementDefault = e.cartDelivery = e.emailConfirmationModalAccepted = e.emailConfirmationModalState = e.emailAddressErrors = e.emailAddress = e.parcelLockerCityList = e.parcelLockerList = e.lastPos = e.pointsOfSalePickup = e.pointOfSalePickupCities = e.pointOfSaleCity = e.phoneContact = e.courierMessage = e.selectedPointOfSale = e.pointsOfSale = e.agreementType = e.selectedDeliveryMethods = e.selectedMethodForDevices = e.selectedMethod = e.deliveryMethodsFetchDone = e.paymentWithoutDeliveryMethod = e.isFirstMethodDefault = e.isDeliveryRequired = e.methods = void 0, r = babelHelpers.interopRequireWildcard(r), a = babelHelpers.interopRequireDefault(a);
    e.methods = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_DELIVERY_METHODS_DONE:
            case r.FILTER_DELIVERY_METHODS:
                return n.methods;
            default:
                return i
        }
    };
    e.isDeliveryRequired = function(e, t) {
        var i = !(0 < arguments.length && void 0 !== e) || e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_DELIVERY_METHODS_DONE:
                return n.isDeliveryRequired;
            default:
                return i
        }
    };
    e.isFirstMethodDefault = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_DELIVERY_METHODS_DONE:
                return n.isFirstMethodDefault;
            default:
                return i
        }
    };
    e.paymentWithoutDeliveryMethod = function(e, t) {
        var i = !(0 < arguments.length && void 0 !== e) || e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_DELIVERY_METHODS_DONE:
                return n.paymentWithoutDeliveryMethod;
            default:
                return i
        }
    };
    e.deliveryMethodsFetchDone = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e;
        switch ((1 < arguments.length ? t : void 0).type) {
            case r.FETCH_DELIVERY_METHODS_DONE:
                return !0;
            default:
                return i
        }
    };
    e.selectedMethod = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SELECT_DELIVERY_METHOD:
            case r.SELECT_DELIVERY_METHOD_WITHOUT_CHANGING_PAYMENT_METHOD:
                return n.id;
            default:
                return i
        }
    };
    e.selectedMethodForDevices = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SELECT_DELIVERY_METHOD_FOR_DEVICES:
                return n.id;
            default:
                return i
        }
    };
    var o = {
        mobile: "",
        fixDocuments: "",
        fixDevices: ""
    };
    e.selectedDeliveryMethods = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : o,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SELECT_DELIVERY_METHODS:
                return {
                    mobile: n.mobile || i.mobile, fixDocuments: n.fixDocuments || i.fixDocuments, fixDevices: n.fixDevices || i.fixDevices
                };
            default:
                return i
        }
    };
    e.agreementType = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : a.default.PAPER,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SELECT_AGREEMENT_TYPE:
                return n.id;
            default:
                return i
        }
    };
    e.pointsOfSale = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_NEAREST_POINTS_OF_SALE_DONE:
                return n.pointsOfSale;
            default:
                return i
        }
    };
    e.selectedPointOfSale = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_POS_PICKUP_AVAILABILITY_DONE:
                return n.pointsOfSale && 1 === n.pointsOfSale.length ? n.pointsOfSale[0].uniqueName : i;
            case r.GET_CART_DELIVERY_DATA_DONE:
                return n.data.pointOfServiceName;
            case r.SELECT_POINT_OF_SALE:
                return n.posId;
            case r.SELECT_PARCEL_LOCKER:
                return n.uniqueName;
            case r.FETCH_PARCEL_LOCKER_LIST:
                return n.data && 1 === n.data.length ? n.data[0].uniqueName : i;
            default:
                return i
        }
    };
    e.courierMessage = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.CHANGE_DELIVERY_COURIER_MESSAGE:
                return n.value;
            default:
                return i
        }
    };
    e.phoneContact = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.UPDATE_DELIVERY_PHONE_NUMBER:
                return n.data.phoneContact;
            case r.CHANGE_COURIER_PHONE_CONTACT:
                return n.value;
            case r.GET_CART_CUSTOMER_DONE:
                return n.data.phoneNumber;
            default:
                return i
        }
    };
    e.pointOfSaleCity = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : "",
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.CHANGE_POINT_OF_SALE_CITY:
            case r.CHANGE_PARCEL_LOCKER_CITY:
                return n.value;
            default:
                return i
        }
    };
    e.pointOfSalePickupCities = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_POS_PICKUP_CITIES_DONE:
                return n.data.cityList;
            default:
                return i
        }
    };
    e.pointsOfSalePickup = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_POS_PICKUP_AVAILABILITY_DONE:
                return n.pointsOfSale;
            default:
                return i
        }
    };
    e.lastPos = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : {},
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.GET_LAST_PICKUP_POS:
            case r.GET_LAST_PARCEL_LOCKER_POS:
            case r.SET_LAST_PARCEL_LOCKER_POS:
                return n.data;
            default:
                return i
        }
    };
    e.parcelLockerList = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_PARCEL_LOCKER_LIST:
                return n.data;
            default:
                return i
        }
    };
    e.parcelLockerCityList = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.FETCH_PARCEL_LOCKER_CITY_LIST:
                return n.data;
            default:
                return i
        }
    };
    e.emailAddress = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SET_DELIVERY_EMAIL:
                return n.payload;
            default:
                return i
        }
    };
    e.emailAddressErrors = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : [],
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SET_DELIVERY_EMAIL:
                return l.emailDeliveryValidators.emailAddress(n.payload);
            default:
                return i
        }
    };
    e.emailConfirmationModalState = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SET_EMAIL_CONFIRMATION_MODAL_STATE:
                return n.payload;
            default:
                return i
        }
    };
    e.emailConfirmationModalAccepted = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SET_EMAIL_CONFIRMATION_MODAL_ACCEPTED:
                return n.payload;
            case r.SET_DELIVERY_EMAIL:
                return !1;
            default:
                return i
        }
    };
    e.cartDelivery = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e ? e : null,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.GET_CART_DELIVERY_DATA_DONE:
                return n.data;
            default:
                return i
        }
    };
    e.isDigitalAgreementDefault = function(e, t) {
        var i = 0 < arguments.length && void 0 !== e && e,
            n = 1 < arguments.length ? t : void 0;
        switch (n.type) {
            case r.SET_IS_DIGITAL_AGREEMENT_DEFAULT:
                return n.isDigitalAgreementDefault;
            default:
                return i
        }
    }
});
//# sourceMappingURL=delivery.js.map