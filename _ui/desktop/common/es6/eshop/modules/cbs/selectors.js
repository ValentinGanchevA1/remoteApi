import {
    createSelector
} from "Reselect";
import {
    cbsKey,
    isValidPostalCode
} from "./utils";

export const getCbsState = state => state["cbs"];

export const getAllCitySuggestions = createSelector(getCbsState, cbs => cbs.cities);
export const getAllStreetSuggestions = createSelector(getCbsState, cbs => cbs.streets);
export const getCountries = createSelector(getCbsState, cbs => cbs.countries);

const filterStreetsByCbsKey = (streets, address) => {
    let result = streets[cbsKey(address.postalCode, address.city || address.town)] || [];
    if (result.length === 0) {
        const townId = address.townId && ('' + address.townId);
        result = streets[cbsKey('id', townId)] || [];
    }
    return result;
};

export const filterStreetSuggestions = (suggestions, address) =>
    suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(address.streetName ? address.streetName.toLowerCase() : "") >= 0);

export const filterCitySuggestions = (suggestions, address) =>
    suggestions.filter(suggestion => suggestion.toLowerCase().indexOf(address.town ? address.town.toLowerCase() : "") >= 0);

export const createCitySuggestionsSelector = (addressSelector) =>
    createSelector(
        [getAllCitySuggestions, addressSelector],
        (cities, address) => cities[cbsKey(address.postalCode)] || []
    );

export const createStreetSuggestionsSelector = (addressSelector) =>
    createSelector(
        [getAllStreetSuggestions, addressSelector],
        (streets, address) => filterStreetsByCbsKey(streets, address)
    );

export const createFilteredCitySuggestionsSelector = (addressSelector) =>
    createSelector([createCitySuggestionsSelector(addressSelector), addressSelector], filterCitySuggestions);

export const createFilteredStreetSuggestionsSelector = (addressSelector) =>
    createSelector([createStreetSuggestionsSelector(addressSelector), addressSelector], filterStreetSuggestions);

export const createAddressValidationSelector = (addressSelector) =>
    createSelector(
        [getAllCitySuggestions, getAllStreetSuggestions, addressSelector],
        (cities, streets, {
            postalCode,
            city,
            town,
            streetName,
            townId,
            streetId,
            zipValid
        }) => {
            const validCities = cities[cbsKey(postalCode)];
            const validStreets = filterStreetsByCbsKey(streets, {
                postalCode,
                city,
                town,
                townId
            });

            const hasValidCities = !!validCities && validCities.length > 0;
            const postalCodeValidation = isValidPostalCode(postalCode) && (hasValidCities || zipValid);
            const cityValidation = !!city && !!validCities && validCities.indexOf(city.toUpperCase()) > -1;
            const townValidation = (!!town && !!validCities && validCities.indexOf(town.toUpperCase()) > -1) || !!townId;
            const mainFieldNotValid = !postalCodeValidation || !(cityValidation ^ townValidation);
            const streetValidation = mainFieldNotValid || (!!validStreets && (validStreets.length === 0 || validStreets.indexOf(streetName.toUpperCase()) > -1)) || (!!streetId && !!townId);

            return {
                postalCode: postalCodeValidation,
                city: cityValidation,
                town: townValidation,
                streetName: postalCodeValidation && (cityValidation || townValidation) && streetValidation
            };
        }
    );