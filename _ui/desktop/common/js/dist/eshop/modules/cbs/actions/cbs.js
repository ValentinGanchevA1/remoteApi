define(["exports", "../actionTypes", "../selectors", "../remoteApi", "../utils"], function(_exports, ACTIONS, _selectors, _remoteApi, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.getCbsCitiesAndStreets = getCbsCitiesAndStreets;
    _exports.getCbsStreets = getCbsStreets;
    _exports.getCbsData = getCbsData;
    _exports.getCbsDataThenDispatch = getCbsDataThenDispatch;
    _exports.setCountries = _exports.clearCbsStreets = _exports.fetchCbsStreetsError = _exports.fetchCbsStreetsDone = _exports.removeStreet = _exports.fetchCbsStreetsStart = _exports.clearCbsCities = _exports.fetchCbsCitiesError = _exports.fetchCbsCitiesDone = _exports.fetchCbsCitiesStart = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _remoteApi = babelHelpers.interopRequireDefault(_remoteApi);

    var fetchCbsCitiesStart = function fetchCbsCitiesStart(postalCode) {
        return {
            type: ACTIONS.FETCH_CBS_CITIES_START,
            postalCode: postalCode
        };
    };

    _exports.fetchCbsCitiesStart = fetchCbsCitiesStart;

    var fetchCbsCitiesDone = function fetchCbsCitiesDone(postalCode, cities) {
        return {
            type: ACTIONS.FETCH_CBS_CITIES_DONE,
            postalCode: postalCode,
            cities: cities
        };
    };

    _exports.fetchCbsCitiesDone = fetchCbsCitiesDone;

    var fetchCbsCitiesError = function fetchCbsCitiesError(postalCode, error) {
        return {
            type: ACTIONS.FETCH_CBS_CITIES_ERROR,
            postalCode: postalCode,
            error: error
        };
    };

    _exports.fetchCbsCitiesError = fetchCbsCitiesError;

    var clearCbsCities = function clearCbsCities(postalCode) {
        return {
            type: ACTIONS.CLEAR_CBS_CITIES,
            postalCode: postalCode
        };
    };

    _exports.clearCbsCities = clearCbsCities;

    var fetchCbsStreetsStart = function fetchCbsStreetsStart(postalCode, city) {
        return {
            type: ACTIONS.FETCH_CBS_STREETS_START,
            postalCode: postalCode,
            city: city
        };
    };

    _exports.fetchCbsStreetsStart = fetchCbsStreetsStart;

    var removeStreet = function removeStreet(streets) {
        return {
            type: ACTIONS.REMOVE_STREET,
            streets: streets
        };
    };

    _exports.removeStreet = removeStreet;

    var fetchCbsStreetsDone = function fetchCbsStreetsDone(postalCode, city, streets) {
        return {
            type: ACTIONS.FETCH_CBS_STREETS_DONE,
            postalCode: postalCode,
            city: city,
            streets: streets
        };
    };

    _exports.fetchCbsStreetsDone = fetchCbsStreetsDone;

    var fetchCbsStreetsError = function fetchCbsStreetsError(postalCode, city, error) {
        return {
            type: ACTIONS.FETCH_CBS_STREETS_ERROR,
            postalCode: postalCode,
            city: city,
            error: error
        };
    };

    _exports.fetchCbsStreetsError = fetchCbsStreetsError;

    var clearCbsStreets = function clearCbsStreets(postalCode) {
        return {
            type: ACTIONS.CLEAR_CBS_STREETS,
            postalCode: postalCode
        };
    };

    _exports.clearCbsStreets = clearCbsStreets;

    var setCountries = function setCountries(countries) {
        return {
            type: ACTIONS.SET_COUNTRIES,
            countries: countries
        };
    };

    _exports.setCountries = setCountries;

    function getCbsCitiesAndStreets(postalCode) {
        var city = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var cityId = arguments.length > 2 ? arguments[2] : undefined;
        var mainAddress = arguments.length > 3 ? arguments[3] : undefined;
        var toDispatchAfterDone = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var toDispatchAfterDoneParams = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        return function(dispatch, getState) {
            var allCitySuggestions = (0, _selectors.getAllCitySuggestions)(getState())[(0, _utils.cbsKey)(postalCode)];

            if ((0, _utils.isValidPostalCode)(postalCode) && !allCitySuggestions) {
                dispatch(fetchCbsCitiesStart(postalCode));

                _remoteApi.default.getCbsCitiesForPostCode(postalCode).then(function(cities) {
                    return dispatch(fetchCbsCitiesDone(postalCode, cities));
                }).then(function() {
                    if (city) {
                        dispatch(getCbsStreets(postalCode, city, cityId, mainAddress, toDispatchAfterDone, toDispatchAfterDoneParams));
                    }
                }).catch(function(error) {
                    dispatch(fetchCbsCitiesError(postalCode, error));

                    if (toDispatchAfterDone != null) {
                        dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                    }
                });
            } else if ((0, _utils.isValidPostalCode)(postalCode) && city) {
                dispatch(getCbsStreets(postalCode, city, cityId, mainAddress, toDispatchAfterDone, toDispatchAfterDoneParams));
            }
        };
    }

    function getCbsStreets(postalCode) {
        var city = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var cityId = arguments.length > 2 ? arguments[2] : undefined;
        var mainAddress = arguments.length > 3 ? arguments[3] : undefined;
        var toDispatchAfterDone = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var toDispatchAfterDoneParams = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
        return function(dispatch, getState) {
            var citySuggestions = (0, _selectors.getAllCitySuggestions)(getState())[(0, _utils.cbsKey)(postalCode)];
            var emptyCitySuggestions = citySuggestions && citySuggestions.length === 0;
            var streetSuggestionsForPostalCode = (0, _selectors.getAllStreetSuggestions)(getState())[(0, _utils.cbsKey)(postalCode, city)];
            var streetsFetchedForPostalCode = streetSuggestionsForPostalCode && streetSuggestionsForPostalCode.length;

            if ((0, _utils.isValidPostalCode)(postalCode) && !streetsFetchedForPostalCode && !emptyCitySuggestions) {
                dispatch(fetchCbsStreetsStart(postalCode, city));

                _remoteApi.default.getCbsStreetsForPostCodeAndCity(postalCode, city).then(function(streets) {
                    dispatch(fetchCbsStreetsDone(postalCode, city, streets));

                    if (toDispatchAfterDone != null) {
                        dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                    }

                    return streets;
                }).then(function(streets) {
                    if (streets.length === 0 && !!cityId) {
                        dispatch(fetchCbsStreetsStart('id', cityId));
                        return _remoteApi.default.getCbsStreetsForCityId(cityId).then(function(response) {
                            var streetsForId = response && response.map(function(s) {
                                return {
                                    streetName: s.name && s.name.toUpperCase(),
                                    streetId: s.id
                                };
                            }) || [];
                            dispatch(fetchCbsStreetsDone('id', cityId, streetsForId));

                            if (mainAddress && streetsForId.length === 0) {
                                dispatch(removeStreet(streets));
                            }

                            if (toDispatchAfterDone != null) {
                                dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                            }

                            return streetsForId;
                        }).catch(function(error) {
                            dispatch(fetchCbsStreetsError('id', cityId, error));

                            if (toDispatchAfterDone != null) {
                                dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                            }
                        });
                    }
                }).catch(function(error) {
                    return dispatch(fetchCbsStreetsError(postalCode, city, error));
                });
            } else if ((0, _utils.isValidPostalCode)(postalCode) && !!cityId && !streetsFetchedForPostalCode && !(0, _selectors.getAllStreetSuggestions)(getState())[(0, _utils.cbsKey)('id', cityId)]) {
                dispatch(fetchCbsStreetsStart('id', cityId));
                return _remoteApi.default.getCbsStreetsForCityId(cityId).then(function(response) {
                    var streetsForId = response && response.map(function(s) {
                        return {
                            streetName: s.name && s.name.toUpperCase(),
                            streetId: s.id
                        };
                    }) || [];
                    dispatch(fetchCbsStreetsDone('id', cityId, streetsForId));

                    if (toDispatchAfterDone != null) {
                        dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                    }

                    if (mainAddress && streetsForId.length === 0) {
                        dispatch(removeStreet(streets));
                    }

                    return streetsForId;
                }).catch(function(error) {
                    dispatch(fetchCbsStreetsError('id', cityId, error));

                    if (toDispatchAfterDone != null) {
                        dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
                    }
                });
            }
        };
    }

    function getCbsData(address) {
        var mainAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return function(dispatch) {
            var postalCode = address.postalCode;
            var city = address.city || address.town;
            if (postalCode) dispatch(getCbsCitiesAndStreets(postalCode, city, address.townId && '' + address.townId, mainAddress));
        };
    }

    function getCbsDataThenDispatch(address, mainAddress, toDispatchAfterDone, toDispatchAfterDoneParams) {
        return function(dispatch) {
            var postalCode = address.postalCode;
            var city = address.city || address.town;
            if (postalCode) dispatch(getCbsCitiesAndStreets(postalCode, city, address.townId && '' + address.townId, mainAddress, toDispatchAfterDone, toDispatchAfterDoneParams));
            else if (toDispatchAfterDone != null) {
                dispatch(toDispatchAfterDone(toDispatchAfterDoneParams));
            }
        };
    }
});
//# sourceMappingURL=cbs.js.map