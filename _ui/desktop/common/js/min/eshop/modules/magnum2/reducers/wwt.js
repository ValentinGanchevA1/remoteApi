define(["exports", "../../core/constants/RequestState", "../../checkout/actionTypes", "../actionTypes"], function(e, s, c, l) {
    "use strict";

    function r(t, e) {
        var a = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), a.push.apply(a, r)
        }
        return a
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(a), !0).forEach(function(e) {
                babelHelpers.defineProperty(t, e, a[e])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            })
        }
        return t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, c = babelHelpers.interopRequireWildcard(c), l = babelHelpers.interopRequireWildcard(l);

    function t(e, t) {
        var a = 0 < arguments.length && void 0 !== e ? e : p,
            r = 1 < arguments.length ? t : void 0;
        switch (r.type) {
            case c.fetchZipCodeFromWWT.start:
                return o({}, a, {
                    zipCodeRequestState: s.RequestState.Waiting
                });
            case c.fetchZipCodeFromWWT.success:
                return o({}, a, {
                    zipCodeRequestState: s.RequestState.Success,
                    cityName: r.payload.placeName,
                    cityId: r.payload.placeId,
                    streetName: r.payload.streetName,
                    streetId: r.payload.streetId,
                    streetNumber: r.payload.streetNumber,
                    apartmentNumber: r.payload.apartmentNumber,
                    zip: r.payload.zip,
                    availableApartments: null
                });
            case c.fetchZipCodeFromWWT.error:
                return o({}, p, {
                    zipCodeRequestState: s.RequestState.Error
                });
            case c.fetchZipCodeFromWWT.reset:
                return o({}, p, {
                    selectedAddressRequestState: a.selectedAddressRequestState,
                    fetchTransactions: !0
                });
            case c.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.start:
            case c.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.start:
                return o({}, a, {
                    selectedAddressRequestState: s.RequestState.Waiting
                });
            case c.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.success:
            case c.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.success:
                return r.payload ? o({}, a, {
                    selectedAddressRequestState: s.RequestState.Success,
                    cityName: r.payload.cityName,
                    cityId: r.payload.cityCBSId,
                    streetName: r.payload.streetName,
                    streetId: r.payload.streetCBSId,
                    streetNumber: r.payload.streetNumber,
                    apartmentNumber: r.payload.apartmentNumber,
                    zip: r.payload.zip,
                    fetchTransactions: !0,
                    availableApartments: null
                }) : o({}, a, {
                    selectedAddressRequestState: s.RequestState.Success,
                    fetchTransactions: !0
                });
            case c.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.error:
            case c.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.error:
                return o({}, p, {
                    selectedAddressRequestState: s.RequestState.Error
                });
            case c.SELECT_WWT_ADDRESS:
                return o({}, a, {
                    selectedAddressRequestState: s.RequestState.Success,
                    cityName: r.payload.cityName,
                    cityId: r.payload.cityId,
                    streetName: r.payload.streetName,
                    streetId: r.payload.streetId,
                    streetNumber: r.payload.streetNumber,
                    apartmentNumber: r.payload.apartmentNumber,
                    zip: r.payload.zip,
                    fetchTransactions: !0,
                    availableApartments: null
                });
            case l.SET_MAGNUM_STORE:
                return r.payload.magnum.wwt;
            case l.OPEN_WWT_ZIP_MODAL:
                return o({}, a, {
                    showWWTZipModal: !0
                });
            case l.CLOSE_WWT_ZIP_MODAL:
                return o({}, a, {
                    showWWTZipModal: !1
                });
            case l.SAVE_WWT_ADDRESS_NO_ZIP:
                return o({}, a, {
                    zipCodeRequestState: s.RequestState.Error,
                    cityName: r.payload.placeName,
                    cityId: r.payload.placeId,
                    streetName: r.payload.streetName,
                    streetId: r.payload.streetId,
                    streetNumber: r.payload.streetNumber,
                    apartmentNumber: r.payload.apartmentNumber,
                    zip: null,
                    zips: r.payload.zips,
                    availableApartments: null
                });
            case l.FILL_MISSING_ZIP_CODE:
                return o({}, a, {
                    zipCodeRequestState: s.RequestState.Success,
                    zip: r.payload.zip,
                    zips: null
                });
            case l.fetchPossibleTransactions.start:
                return o({}, a, {
                    fetchTransactions: !1
                });
            case l.SAVE_WWT_ADDITIONAL_DATA:
                return o({}, a, {
                    availableApartments: r.payload.availableApartments
                });
            default:
                return a
        }
    }
    var p = {
        selectedAddressRequestState: s.RequestState.None,
        zipCodeRequestState: s.RequestState.None,
        cityName: "",
        cityId: null,
        streetName: "",
        streetId: null,
        streetNumber: "",
        apartmentNumber: "",
        zip: null,
        showWWTZipModal: !1,
        zips: null,
        availableApartments: null
    };
    e.default = t
});
//# sourceMappingURL=wwt.js.map