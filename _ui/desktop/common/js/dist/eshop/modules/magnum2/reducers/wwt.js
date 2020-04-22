define(["exports", "../../core/constants/RequestState", "../../checkout/actionTypes", "../actionTypes"], function(_exports, _RequestState, actionTypes, magnumActionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    actionTypes = babelHelpers.interopRequireWildcard(actionTypes);
    magnumActionTypes = babelHelpers.interopRequireWildcard(magnumActionTypes);

    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    babelHelpers.defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    /**
     * WWT state
     */
    var initialWWtState = {
        selectedAddressRequestState: _RequestState.RequestState.None,
        zipCodeRequestState: _RequestState.RequestState.None,
        cityName: '',
        cityId: null,
        streetName: '',
        streetId: null,
        streetNumber: '',
        apartmentNumber: '',
        zip: null,
        showWWTZipModal: false,
        zips: null,
        availableApartments: null
    };

    var wwtReducer = function wwtReducer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialWWtState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case actionTypes.fetchZipCodeFromWWT.start:
                return _objectSpread({}, state, {
                    zipCodeRequestState: _RequestState.RequestState.Waiting
                });

            case actionTypes.fetchZipCodeFromWWT.success:
                return _objectSpread({}, state, {
                    zipCodeRequestState: _RequestState.RequestState.Success,
                    cityName: action.payload.placeName,
                    cityId: action.payload.placeId,
                    streetName: action.payload.streetName,
                    streetId: action.payload.streetId,
                    streetNumber: action.payload.streetNumber,
                    apartmentNumber: action.payload.apartmentNumber,
                    zip: action.payload.zip,
                    availableApartments: null
                });

            case actionTypes.fetchZipCodeFromWWT.error:
                return _objectSpread({}, initialWWtState, {
                    zipCodeRequestState: _RequestState.RequestState.Error
                });

            case actionTypes.fetchZipCodeFromWWT.reset:
                return _objectSpread({}, initialWWtState, {
                    selectedAddressRequestState: state.selectedAddressRequestState,
                    fetchTransactions: true
                });

            case actionTypes.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.start:
            case actionTypes.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.start:
                return _objectSpread({}, state, {
                    selectedAddressRequestState: _RequestState.RequestState.Waiting
                });

            case actionTypes.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.success:
            case actionTypes.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.success:
                if (!action.payload) {
                    return _objectSpread({}, state, {
                        selectedAddressRequestState: _RequestState.RequestState.Success,
                        fetchTransactions: true
                    });
                } else {
                    return _objectSpread({}, state, {
                        selectedAddressRequestState: _RequestState.RequestState.Success,
                        cityName: action.payload.cityName,
                        cityId: action.payload.cityCBSId,
                        streetName: action.payload.streetName,
                        streetId: action.payload.streetCBSId,
                        streetNumber: action.payload.streetNumber,
                        apartmentNumber: action.payload.apartmentNumber,
                        zip: action.payload.zip,
                        fetchTransactions: true,
                        availableApartments: null
                    });
                }

                case actionTypes.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.error:
                case actionTypes.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.error:
                    return _objectSpread({}, initialWWtState, {
                        selectedAddressRequestState: _RequestState.RequestState.Error
                    });

                case actionTypes.SELECT_WWT_ADDRESS:
                    return _objectSpread({}, state, {
                        selectedAddressRequestState: _RequestState.RequestState.Success,
                        cityName: action.payload.cityName,
                        cityId: action.payload.cityId,
                        streetName: action.payload.streetName,
                        streetId: action.payload.streetId,
                        streetNumber: action.payload.streetNumber,
                        apartmentNumber: action.payload.apartmentNumber,
                        zip: action.payload.zip,
                        fetchTransactions: true,
                        availableApartments: null
                    });

                case magnumActionTypes.SET_MAGNUM_STORE:
                    return action.payload.magnum.wwt;

                case magnumActionTypes.OPEN_WWT_ZIP_MODAL:
                    return _objectSpread({}, state, {
                        showWWTZipModal: true
                    });

                case magnumActionTypes.CLOSE_WWT_ZIP_MODAL:
                    return _objectSpread({}, state, {
                        showWWTZipModal: false
                    });

                case magnumActionTypes.SAVE_WWT_ADDRESS_NO_ZIP:
                    return _objectSpread({}, state, {
                        zipCodeRequestState: _RequestState.RequestState.Error,
                        cityName: action.payload.placeName,
                        cityId: action.payload.placeId,
                        streetName: action.payload.streetName,
                        streetId: action.payload.streetId,
                        streetNumber: action.payload.streetNumber,
                        apartmentNumber: action.payload.apartmentNumber,
                        zip: null,
                        zips: action.payload.zips,
                        availableApartments: null
                    });

                case magnumActionTypes.FILL_MISSING_ZIP_CODE:
                    return _objectSpread({}, state, {
                        zipCodeRequestState: _RequestState.RequestState.Success,
                        zip: action.payload.zip,
                        zips: null
                    });

                case magnumActionTypes.fetchPossibleTransactions.start:
                    return _objectSpread({}, state, {
                        fetchTransactions: false
                    });

                case magnumActionTypes.SAVE_WWT_ADDITIONAL_DATA:
                    return _objectSpread({}, state, {
                        availableApartments: action.payload.availableApartments
                    });

                default:
                    return state;
        }
    };

    var _default = wwtReducer;
    _exports.default = _default;
});
//# sourceMappingURL=wwt.js.map