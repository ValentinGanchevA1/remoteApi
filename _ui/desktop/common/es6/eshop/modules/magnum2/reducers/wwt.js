import {
    RequestState
} from "../../core/constants/RequestState";
import * as actionTypes from "../../checkout/actionTypes";
import * as magnumActionTypes from "../actionTypes";

/**
 * WWT state
 */

const initialWWtState = {
    selectedAddressRequestState: RequestState.None,
    zipCodeRequestState: RequestState.None,
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

const wwtReducer = (state = initialWWtState, action) => {
    switch (action.type) {
        case actionTypes.fetchZipCodeFromWWT.start:
            return {
                ...state,
                zipCodeRequestState: RequestState.Waiting
            };
        case actionTypes.fetchZipCodeFromWWT.success:
            return {
                ...state,
                zipCodeRequestState: RequestState.Success,
                    cityName: action.payload.placeName,
                    cityId: action.payload.placeId,
                    streetName: action.payload.streetName,
                    streetId: action.payload.streetId,
                    streetNumber: action.payload.streetNumber,
                    apartmentNumber: action.payload.apartmentNumber,
                    zip: action.payload.zip,
                    availableApartments: null
            };
        case actionTypes.fetchZipCodeFromWWT.error:
            return {
                ...initialWWtState,
                zipCodeRequestState: RequestState.Error
            };
        case actionTypes.fetchZipCodeFromWWT.reset:
            return {
                ...initialWWtState,
                selectedAddressRequestState: state.selectedAddressRequestState,
                    fetchTransactions: true
            };
        case actionTypes.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.start:
        case actionTypes.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.start:
            return {
                ...state,
                selectedAddressRequestState: RequestState.Waiting
            };
        case actionTypes.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.success:
        case actionTypes.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.success:
            if (!action.payload) {
                return {
                    ...state,
                    selectedAddressRequestState: RequestState.Success,
                    fetchTransactions: true
                };
            } else {
                return {
                    ...state,
                    selectedAddressRequestState: RequestState.Success,
                    cityName: action.payload.cityName,
                    cityId: action.payload.cityCBSId,
                    streetName: action.payload.streetName,
                    streetId: action.payload.streetCBSId,
                    streetNumber: action.payload.streetNumber,
                    apartmentNumber: action.payload.apartmentNumber,
                    zip: action.payload.zip,
                    fetchTransactions: true,
                    availableApartments: null
                };
            }
            case actionTypes.GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES.error:
            case actionTypes.GET_SELECTED_WWT_ADDRESS_ACTION_TYPES.error:
                return {
                    ...initialWWtState,
                    selectedAddressRequestState: RequestState.Error
                };
            case actionTypes.SELECT_WWT_ADDRESS:
                return {
                    ...state,
                    selectedAddressRequestState: RequestState.Success,
                        cityName: action.payload.cityName,
                        cityId: action.payload.cityId,
                        streetName: action.payload.streetName,
                        streetId: action.payload.streetId,
                        streetNumber: action.payload.streetNumber,
                        apartmentNumber: action.payload.apartmentNumber,
                        zip: action.payload.zip,
                        fetchTransactions: true,
                        availableApartments: null
                };
            case magnumActionTypes.SET_MAGNUM_STORE:
                return action.payload.magnum.wwt;
            case magnumActionTypes.OPEN_WWT_ZIP_MODAL:
                return {
                    ...state,
                    showWWTZipModal: true
                };
            case magnumActionTypes.CLOSE_WWT_ZIP_MODAL:
                return {
                    ...state,
                    showWWTZipModal: false
                };
            case magnumActionTypes.SAVE_WWT_ADDRESS_NO_ZIP:
                return {
                    ...state,
                    zipCodeRequestState: RequestState.Error,
                        cityName: action.payload.placeName,
                        cityId: action.payload.placeId,
                        streetName: action.payload.streetName,
                        streetId: action.payload.streetId,
                        streetNumber: action.payload.streetNumber,
                        apartmentNumber: action.payload.apartmentNumber,
                        zip: null,
                        zips: action.payload.zips,
                        availableApartments: null
                };
            case magnumActionTypes.FILL_MISSING_ZIP_CODE:
                return {
                    ...state,
                    zipCodeRequestState: RequestState.Success,
                        zip: action.payload.zip,
                        zips: null
                };
            case magnumActionTypes.fetchPossibleTransactions.start:
                return {
                    ...state,
                    fetchTransactions: false
                };
            case magnumActionTypes.SAVE_WWT_ADDITIONAL_DATA:
                return {
                    ...state,
                    availableApartments: action.payload.availableApartments
                };
            default:
                return state;
    }
};

export default wwtReducer;