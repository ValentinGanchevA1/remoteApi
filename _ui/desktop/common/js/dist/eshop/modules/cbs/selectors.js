define(["exports", "Reselect", "./utils"], function(_exports, _Reselect, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.createAddressValidationSelector = _exports.createFilteredStreetSuggestionsSelector = _exports.createFilteredCitySuggestionsSelector = _exports.createStreetSuggestionsSelector = _exports.createCitySuggestionsSelector = _exports.filterCitySuggestions = _exports.filterStreetSuggestions = _exports.getCountries = _exports.getAllStreetSuggestions = _exports.getAllCitySuggestions = _exports.getCbsState = void 0;

    var getCbsState = function getCbsState(state) {
        return state["cbs"];
    };

    _exports.getCbsState = getCbsState;
    var getAllCitySuggestions = (0, _Reselect.createSelector)(getCbsState, function(cbs) {
        return cbs.cities;
    });
    _exports.getAllCitySuggestions = getAllCitySuggestions;
    var getAllStreetSuggestions = (0, _Reselect.createSelector)(getCbsState, function(cbs) {
        return cbs.streets;
    });
    _exports.getAllStreetSuggestions = getAllStreetSuggestions;
    var getCountries = (0, _Reselect.createSelector)(getCbsState, function(cbs) {
        return cbs.countries;
    });
    _exports.getCountries = getCountries;

    var filterStreetsByCbsKey = function filterStreetsByCbsKey(streets, address) {
        var result = streets[(0, _utils.cbsKey)(address.postalCode, address.city || address.town)] || [];

        if (result.length === 0) {
            var townId = address.townId && '' + address.townId;
            result = streets[(0, _utils.cbsKey)('id', townId)] || [];
        }

        return result;
    };

    var filterStreetSuggestions = function filterStreetSuggestions(suggestions, address) {
        return suggestions.filter(function(suggestion) {
            return suggestion.toLowerCase().indexOf(address.streetName ? address.streetName.toLowerCase() : "") >= 0;
        });
    };

    _exports.filterStreetSuggestions = filterStreetSuggestions;

    var filterCitySuggestions = function filterCitySuggestions(suggestions, address) {
        return suggestions.filter(function(suggestion) {
            return suggestion.toLowerCase().indexOf(address.town ? address.town.toLowerCase() : "") >= 0;
        });
    };

    _exports.filterCitySuggestions = filterCitySuggestions;

    var createCitySuggestionsSelector = function createCitySuggestionsSelector(addressSelector) {
        return (0, _Reselect.createSelector)([getAllCitySuggestions, addressSelector], function(cities, address) {
            return cities[(0, _utils.cbsKey)(address.postalCode)] || [];
        });
    };

    _exports.createCitySuggestionsSelector = createCitySuggestionsSelector;

    var createStreetSuggestionsSelector = function createStreetSuggestionsSelector(addressSelector) {
        return (0, _Reselect.createSelector)([getAllStreetSuggestions, addressSelector], function(streets, address) {
            return filterStreetsByCbsKey(streets, address);
        });
    };

    _exports.createStreetSuggestionsSelector = createStreetSuggestionsSelector;

    var createFilteredCitySuggestionsSelector = function createFilteredCitySuggestionsSelector(addressSelector) {
        return (0, _Reselect.createSelector)([createCitySuggestionsSelector(addressSelector), addressSelector], filterCitySuggestions);
    };

    _exports.createFilteredCitySuggestionsSelector = createFilteredCitySuggestionsSelector;

    var createFilteredStreetSuggestionsSelector = function createFilteredStreetSuggestionsSelector(addressSelector) {
        return (0, _Reselect.createSelector)([createStreetSuggestionsSelector(addressSelector), addressSelector], filterStreetSuggestions);
    };

    _exports.createFilteredStreetSuggestionsSelector = createFilteredStreetSuggestionsSelector;

    var createAddressValidationSelector = function createAddressValidationSelector(addressSelector) {
        return (0, _Reselect.createSelector)([getAllCitySuggestions, getAllStreetSuggestions, addressSelector], function(cities, streets, _ref) {
            var postalCode = _ref.postalCode,
                city = _ref.city,
                town = _ref.town,
                streetName = _ref.streetName,
                townId = _ref.townId,
                streetId = _ref.streetId,
                zipValid = _ref.zipValid;
            var validCities = cities[(0, _utils.cbsKey)(postalCode)];
            var validStreets = filterStreetsByCbsKey(streets, {
                postalCode: postalCode,
                city: city,
                town: town,
                townId: townId
            });
            var hasValidCities = !!validCities && validCities.length > 0;
            var postalCodeValidation = (0, _utils.isValidPostalCode)(postalCode) && (hasValidCities || zipValid);
            var cityValidation = !!city && !!validCities && validCities.indexOf(city.toUpperCase()) > -1;
            var townValidation = !!town && !!validCities && validCities.indexOf(town.toUpperCase()) > -1 || !!townId;
            var mainFieldNotValid = !postalCodeValidation || !(cityValidation ^ townValidation);
            var streetValidation = mainFieldNotValid || !!validStreets && (validStreets.length === 0 || validStreets.indexOf(streetName.toUpperCase()) > -1) || !!streetId && !!townId;
            return {
                postalCode: postalCodeValidation,
                city: cityValidation,
                town: townValidation,
                streetName: postalCodeValidation && (cityValidation || townValidation) && streetValidation
            };
        });
    };

    _exports.createAddressValidationSelector = createAddressValidationSelector;
});
//# sourceMappingURL=selectors.js.map