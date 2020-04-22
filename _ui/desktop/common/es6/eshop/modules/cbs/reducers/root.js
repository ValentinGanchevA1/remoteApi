import {
    combineReducers
} from "redux";
import {
    FETCH_CBS_CITIES_DONE,
    FETCH_CBS_STREETS_DONE,
    CLEAR_CBS_CITIES,
    CLEAR_CBS_STREETS,
    FETCH_CBS_CITIES_START,
    FETCH_CBS_CITIES_ERROR,
    FETCH_CBS_STREETS_START,
    FETCH_CBS_STREETS_ERROR,
    SET_COUNTRIES
} from "../actionTypes";
import {
    cbsKey
} from "../utils";

const cities = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CBS_CITIES_DONE:
            // action.data = ["a"...]
            // action.postalCode = "12332"
            return action.postalCode ? {
                ...state,
                [cbsKey(action.postalCode)]: action.cities
            } : state;
        case CLEAR_CBS_CITIES:
            return {
                ...state, [cbsKey(action.postalCode)]: []
            };
        case FETCH_CBS_CITIES_START:
            return {
                ...state, [cbsKey(action.postalCode)]: []
            };
        case FETCH_CBS_CITIES_ERROR:
            return {
                ...state, [cbsKey(action.postalCode)]: []
            };

        default:
            return state;
    }
};


const streets = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CBS_STREETS_DONE:
            return {
                ...state, [cbsKey(action.postalCode, action.city)]: action.streets.map(street => street.streetName)
            };
        case CLEAR_CBS_STREETS:
            return {
                ...state, [cbsKey(action.postalCode, action.city)]: []
            };
        case FETCH_CBS_STREETS_START:
            return {
                ...state, [cbsKey(action.postalCode, action.city)]: []
            };
        case FETCH_CBS_STREETS_ERROR:
            return {
                ...state, [cbsKey(action.postalCode, action.city)]: []
            };

        default:
            return state;
    }
};

const countries = (state = [], action) => {
    switch (action.type) {
        case SET_COUNTRIES:
            return action.countries;
        default:
            return state;
    }
};

export default combineReducers({
    cities,
    streets,
    countries
});