import * as ACTIONS from "../actionTypes";
import {
    getAllCitySuggestions,
    getAllStreetSuggestions
} from "../selectors";
import RemoteApi from "../remoteApi";
import {
    cbsKey,
    isValidPostalCode
} from "../utils";

export const fetchCbsCitiesStart = (postalCode) => ({
    type: ACTIONS.FETCH_CBS_CITIES_START,
    postalCode
});
export const fetchCbsCitiesDone = (postalCode, cities) => ({
    type: ACTIONS.FETCH_CBS_CITIES_DONE,
    postalCode,
    cities
});
export const fetchCbsCitiesError = (postalCode, error) => ({
    type: ACTIONS.FETCH_CBS_CITIES_ERROR,
    postalCode,
    error
});
export const clearCbsCities = (postalCode) => ({
    type: ACTIONS.CLEAR_CBS_CITIES,
    postalCode
});

export const fetchCbsStreetsStart = (postalCode, city) => ({
    type: ACTIONS.FETCH_CBS_STREETS_START,
    postalCode,
    city
});
export const removeStreet = (streets) => ({
    type: ACTIONS.REMOVE_STREET,
    streets
});
export const fetchCbsStreetsDone = (postalCode, city, streets) => ({
    type: ACTIONS.FETCH_CBS_STREETS_DONE,
    postalCode,
    city,
    streets
});
export const fetchCbsStreetsError = (postalCode, city, error) => ({
    type: ACTIONS.FETCH_CBS_STREETS_ERROR,
    postalCode,
    city,
    error
});
export const clearCbsStreets = (postalCode) => ({
    type: ACTIONS.CLEAR_CBS_STREETS,
    postalCode
});

export const setCountries = countries => ({
    type: ACTIONS.SET_COUNTRIES,
    countries
});

export function getCbsCitiesAndStreets(postalCode, city = "", cityId, mainAddress, toDispatchAfterDone = null, toDispatchAfterDoneParams = null) {
    return (dispatch, getState) => {
        const allCitySuggestions = getAllCitySuggestions(getState())[cbsKey(postalCode)];
        if (isValidPostalCode(postalCode) && !allCitySuggestions) {
            dispatch(fetchCbsCitiesStart(postalCode));
            RemoteApi.getCbsCitiesForPostCode(postalCode)
                .then((cities) => dispatch(fetchCbsCitiesDone(postalCode, cities)))
                .then(() => {
                    if (city) {
                        dispatch(getCbsStreets(postalCode, city, cityId, mainAddress, toDispatchAfterDone, toDispatchAfterDoneParams));
                    }
                })
                .catch((error) => {
                    dispatch(fetchCbsCitiesError(postalCode, error));
                    if (toDispatchAfterDone != null) {
                        dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                    }
                });
        } else if (isValidPostalCode(postalCode) && city) {
            dispatch(getCbsStreets(postalCode, city, cityId, mainAddress, toDispatchAfterDone, toDispatchAfterDoneParams));
        }
    };
}

export function getCbsStreets(postalCode, city = "", cityId, mainAddress, toDispatchAfterDone = null, toDispatchAfterDoneParams = null) {
    return (dispatch, getState) => {
        const citySuggestions = getAllCitySuggestions(getState())[cbsKey(postalCode)];
        const emptyCitySuggestions = citySuggestions && citySuggestions.length === 0;
        const streetSuggestionsForPostalCode = getAllStreetSuggestions(getState())[cbsKey(postalCode, city)];
        const streetsFetchedForPostalCode = streetSuggestionsForPostalCode && streetSuggestionsForPostalCode.length;
        if (isValidPostalCode(postalCode) && !streetsFetchedForPostalCode && !emptyCitySuggestions) {
            dispatch(fetchCbsStreetsStart(postalCode, city));
            RemoteApi.getCbsStreetsForPostCodeAndCity(postalCode, city)
                .then((streets) => {
                    dispatch(fetchCbsStreetsDone(postalCode, city, streets));
                    if (toDispatchAfterDone != null) {
                        dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                    }
                    return streets;
                })
                .then((streets) => {
                    if (streets.length === 0 && !!cityId) {
                        dispatch(fetchCbsStreetsStart('id', cityId));
                        return RemoteApi.getCbsStreetsForCityId(cityId)
                            .then((response) => {
                                const streetsForId = response && response.map(s => ({
                                    streetName: s.name && s.name.toUpperCase(),
                                    streetId: s.id
                                })) || [];
                                dispatch(fetchCbsStreetsDone('id', cityId, streetsForId));
                                if (mainAddress && streetsForId.length === 0) {
                                    dispatch(removeStreet(streets));
                                }
                                if (toDispatchAfterDone != null) {
                                    dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                                }

                                return streetsForId;
                            })
                            .catch((error) => {
                                dispatch(fetchCbsStreetsError('id', cityId, error));
                                if (toDispatchAfterDone != null) {
                                    dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                                }

                            });
                    }
                })
                .catch((error) => dispatch(fetchCbsStreetsError(postalCode, city, error)));
        } else if (isValidPostalCode(postalCode) && !!cityId && !streetsFetchedForPostalCode && !getAllStreetSuggestions(getState())[cbsKey('id', cityId)]) {
            dispatch(fetchCbsStreetsStart('id', cityId));
            return RemoteApi.getCbsStreetsForCityId(cityId)
                .then((response) => {
                    const streetsForId = response && response.map(s => ({
                        streetName: s.name && s.name.toUpperCase(),
                        streetId: s.id
                    })) || [];
                    dispatch(fetchCbsStreetsDone('id', cityId, streetsForId));
                    if (toDispatchAfterDone != null) {
                        dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                    }

                    if (mainAddress && streetsForId.length === 0) {
                        dispatch(removeStreet(streets));
                    }
                    return streetsForId;
                })
                .catch((error) => {
                    dispatch(fetchCbsStreetsError('id', cityId, error))
                    if (toDispatchAfterDone != null) {
                        dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                    }

                });
        }
    };
}

export function getCbsData(address, mainAddress = false) {
    return (dispatch) => {
        var postalCode = address.postalCode;
        var city = address.city || address.town;
        if (postalCode)
            dispatch(getCbsCitiesAndStreets(postalCode, city, address.townId && ('' + address.townId), mainAddress));
    };
}


export function getCbsDataThenDispatch(address, mainAddress, toDispatchAfterDone, toDispatchAfterDoneParams) {
    return (dispatch) => {
        var postalCode = address.postalCode;
        var city = address.city || address.town;
        if (postalCode)
            dispatch(getCbsCitiesAndStreets(postalCode, city, address.townId && ('' + address.townId), mainAddress, toDispatchAfterDone, toDispatchAfterDoneParams));
        else if (toDispatchAfterDone != null) {
            dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
        }
    };
}