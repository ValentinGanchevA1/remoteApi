import {
    CHANGE_ADDRESS,
    CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD,
    CHANGE_CUSTOMER_DATA_FORM_FIELD,
    CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD,
    CHANGE_DELIVERY_ADDRESS_FORM_FIELD,
    GET_CART_CUSTOMER_DONE,
    GET_BPG_DATA_DONE,
    REMOVE_STREET
} from "../actionTypes";
import {
    emptyAddress
} from "./helperObjects";

export const replaceAddressNullValues = (data = {}, address = emptyAddress) => {
    return ({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        companyName: data.companyName || "",
        postalCode: address.postalCode || "",
        town: address.town || "",
        streetName: address.streetName || "",
        streetNumber: address.streetNumber || "",
        appartmentNo: address.appartmentNo || "",
        wwtaddress: data.wwtaddress || false,
        foreigner: data.foreigner || false,
        townId: address.townId || "",
        streetId: address.streetId || "",
    });
};

const isAddressNull = (data = {}) => {
    return data.postalCode == null &&
        data.town == null &&
        data.streetName == null &&
        data.streetNumber == null &&
        data.appartmentNo == null;
};

const allowedField = (actionName = "") => {
    return actionName === "firstName" || actionName === "lastName" || actionName === "foreigner" || actionName === "companyName";
};

export const main = (state = emptyAddress, action) => {
    switch (action.type) {
        case CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
            if (action.name === 'postalCode' && action.value.toUpperCase() !== state.postalCode.toUpperCase()) {
                state.town = '';
                state.townId = '';
                state.streetName = '';
                state.streetId = '';
                state.zipValid = true;
            } else if (action.name === 'town' && action.value.toUpperCase() !== state.town.toUpperCase()) {
                state.streetName = '';
                state.streetId = '';
                state.zipValid = true;
            }
            const cbsId = {};
            if (action.name === 'town') {
                cbsId['townId'] = action.cbsId;
            } else if (action.name === 'streetName') {
                cbsId['streetId'] = action.cbsId;
            }
            return {
                ...state, [action.name]: action.value, ...cbsId
            };
        case CHANGE_CUSTOMER_DATA_FORM_FIELD:
            if (allowedField(action.name))
                return {
                    ...state,
                    [action.name]: action.value
                };
            return state;
        case GET_CART_CUSTOMER_DONE:
            if (!action.data)
                return state;
            return {
                ...replaceAddressNullValues(action.data, action.data.mainAddress)
            };
        case REMOVE_STREET:
            return {
                ...state, streetName: ''
            };
        case GET_BPG_DATA_DONE:
            if (!!state.wwtaddress) {
                return state;
            }
            return {
                ...emptyAddress
            };
        default:
            return state;
    }
};

export const correspondence = (state = emptyAddress, action) => {
    switch (action.type) {
        case CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
            if (action.name === 'postalCode' && action.value.toUpperCase() !== state.postalCode.toUpperCase()) {
                state.town = '';
                state.townId = '';
                state.streetName = '';
                state.streetId = '';
                state.zipValid = true;
            } else if (action.name === 'town' && action.value.toUpperCase() !== state.town.toUpperCase()) {
                state.streetName = '';
                state.streetId = '';
                state.zipValid = true;
            }
            const cbsId = {};
            if (action.name === 'town') {
                cbsId['townId'] = action.cbsId;
            } else if (action.name === 'streetName') {
                cbsId['streetId'] = action.cbsId;
            }
            return {
                ...state, [action.name]: action.value, ...cbsId
            };
        case CHANGE_CUSTOMER_DATA_FORM_FIELD:
            if (allowedField(action.name))
                return {
                    ...state,
                    [action.name]: action.value
                };
            return state;
        case GET_CART_CUSTOMER_DONE:
            if (!action.data)
                return state;
            return {
                ...replaceAddressNullValues(action.data, action.data.correspondenceAddress)
            };
        default:
            return state;
    }
};

export const delivery = (state = emptyAddress, action) => {
    switch (action.type) {
        case CHANGE_DELIVERY_ADDRESS_FORM_FIELD:
            if (action.name === 'postalCode' && action.value.toUpperCase() !== state.postalCode.toUpperCase()) {
                state.town = '';
                state.townId = '';
                state.streetName = '';
                state.streetId = '';
                state.zipValid = true;
            } else if (action.name === 'town' && action.value.toUpperCase() !== state.town.toUpperCase()) {
                state.streetName = '';
                state.streetId = '';
                state.zipValid = true;
            }
            const cbsId = {};
            if (action.name === 'town') {
                cbsId['townId'] = action.cbsId;
            } else if (action.name === 'streetName') {
                cbsId['streetId'] = action.cbsId;
            }
            return {
                ...state, [action.name]: action.value, ...cbsId
            };
        case CHANGE_CUSTOMER_DATA_FORM_FIELD:
            if (allowedField(action.name))
                return {
                    ...state,
                    [action.name]: action.value
                };
            return state;
        case GET_CART_CUSTOMER_DONE:
            return {
                ...replaceAddressNullValues(action.data)
            };
        default:
            return state;
    }
};

export const mappings = (state = {
    'correspondence': 'main',
    'delivery': 'main'
}, action) => {
    switch (action.type) {
        case CHANGE_ADDRESS:
            return {
                ...state, [action.mappedAddress]: action.pickedAddress
            };
        case GET_CART_CUSTOMER_DONE:
            let notEmptyMainAddress = replaceAddressNullValues(action.data, action.data.mainAddress);
            let notEmptyCorrAddress = replaceAddressNullValues(action.data, action.data.correspondenceAddress);
            let corrMappingVal = addressesMatches(notEmptyMainAddress, notEmptyCorrAddress) ? 'main' : 'correspondence';
            corrMappingVal = isAddressNull(action.data.correspondenceAddress) ? 'main' : corrMappingVal;
            corrMappingVal = action.data.wwtaddress ? 'main' : corrMappingVal;
            return {
                ...state, 'correspondence': corrMappingVal
            };
        default:
            return state;
    }
};

const addressesMatches = (a = emptyAddress, b = emptyAddress) => {
    let aKeyCheck = Object.keys(a).map(keyA => (keyA in emptyAddress)).reduce((v1, v2) => v1 && v2);
    let bKeyCheck = Object.keys(b).map(keyB => (keyB in emptyAddress)).reduce((v1, v2) => v1 && v2);
    if (!(aKeyCheck && bKeyCheck)) {
        return false;
    }
    return Object.keys(emptyAddress).map(key => (key in a) && (key in b) && (a[key] === b[key])).reduce((v1, v2) => v1 && v2);
}