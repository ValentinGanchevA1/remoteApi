import * as ACTIONS from "../actionTypes";
import {
    emptyBusinessData,
    emptyCustomerContact,
    emptyPersonalData
} from "./helperObjects";

const emptyCustomerData = {
    ...emptyBusinessData,
    ...emptyPersonalData,
    isBusinessClient: false
};

export const data = (state = emptyCustomerData, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD:
            return {
                ...state, [action.name]: action.value
            };
        case ACTIONS.GET_CUSTOMER_DONE:
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            if (!action.data)
                return state;
            let result = {
                ...emptyCustomerData
            };
            const allowedKeys = Object.keys(result);
            Object.keys(action.data).filter(k => allowedKeys.indexOf(k) !== -1).forEach(k => result[k] = action.data[k]);
            if (!!state.initialNationality) {
                result = {
                    ...result,
                    initialNationality: state.initialNationality
                };
            }
            if (!!state.foreignerAvailable) {
                result = {
                    ...result,
                    foreignerAvailable: state.foreignerAvailable
                };
            }
            return {
                ...result
            };
        case ACTIONS.SWITCH_EDIT_ID_NUMBER_MODE:
            return {
                ...state, disabledIdNumber: !state.disabledIdNumber, idNumber: state.disabledIdNumber ? "" : state.idNumber
            };
        case ACTIONS.GET_BPG_DATA_DONE:
            const nip = (action && action.data && action.data.nip) || state.nip;
            const statusAndDateFromBpg = (action && action.data && action.data.statusAndDateFromBpg);
            return {
                ...state, ...emptyBusinessData, nip: nip, statusAndDateFromBpg: statusAndDateFromBpg
            };
        case ACTIONS.CHANGE_INVOICE_EMAIL_MAPPING:
            return {
                ...state, invoiceEmailMapping: action.payload
            };
        case ACTIONS.SET_INITIAL_NATIONALITY:
            return {
                ...state, initialNationality: action.payload
            };
        case ACTIONS.SET_FOREIGNER:
            return {
                ...state, foreignerAvailable: action.payload
            };
        default:
            return state;
    }
};

export const contact = (state = emptyCustomerContact, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
            return {
                ...state, [action.name]: action.value
            };
        case ACTIONS.GET_CUSTOMER_DONE:
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            if (!action.data)
                return state;
            const {
                emailAddress, phoneNumber, customerNoEmail
            } = action.data;
            return {
                emailAddress, phoneNumber, customerNoEmail
            };
        case ACTIONS.GET_BPG_DATA_DONE:
            return {
                ...emptyCustomerContact
            };
        default:
            return state;
    }
};

export const errors = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD:
            return {
                ...state, data: {
                    ...state.data,
                    [action.name]: action.errors
                }
            };
        case ACTIONS.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
            if (action.name === 'postalCode') {
                return {
                    ...state,
                    mainAddress: {
                        ...state.mainAddress,
                        [action.name]: action.errors,
                        streetName: undefined,
                        town: undefined
                    }
                };
            } else if (action.name === 'town') {
                return {
                    ...state,
                    mainAddress: {
                        ...state.mainAddress,
                        [action.name]: action.errors,
                        streetName: undefined
                    }
                };
            } else if (action.name === 'streetName') {
                return {
                    ...state,
                    mainAddress: {
                        ...state.mainAddress,
                        [action.name]: action.errors,
                        streetNo: undefined
                    }
                };
            } else {
                return {
                    ...state,
                    mainAddress: {
                        ...state.mainAddress,
                        [action.name]: action.errors
                    }
                };
            }
            case ACTIONS.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
                if (action.name === 'postalCode') {
                    return {
                        ...state,
                        correspondenceAddress: {
                            ...state.correspondenceAddress,
                            [action.name]: action.errors,
                            streetName: undefined,
                            town: undefined
                        }
                    };
                } else if (action.name === 'town') {
                    return {
                        ...state,
                        correspondenceAddress: {
                            ...state.correspondenceAddress,
                            [action.name]: action.errors,
                            streetName: undefined
                        }
                    };
                } else {
                    return {
                        ...state,
                        correspondenceAddress: {
                            ...state.correspondenceAddress,
                            [action.name]: action.errors
                        }
                    };
                }
                case ACTIONS.CHANGE_DELIVERY_ADDRESS_FORM_FIELD:
                    if (action.name === 'postalCode') {
                        return {
                            ...state,
                            deliveryAddress: {
                                ...state.deliveryAddress,
                                [action.name]: action.errors,
                                streetName: undefined,
                                town: undefined
                            }
                        };
                    } else if (action.name === 'town') {
                        return {
                            ...state,
                            deliveryAddress: {
                                ...state.deliveryAddress,
                                [action.name]: action.errors,
                                streetName: undefined
                            }
                        };
                    } else {
                        return {
                            ...state,
                            deliveryAddress: {
                                ...state.deliveryAddress,
                                [action.name]: action.errors
                            }
                        };
                    }
                    case ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
                        let toReturn = {
                            ...state.contact,
                            [action.name]: action.errors
                        };
                        if (action.name === "customerNoEmail" && action.value === true) {
                            toReturn['emailAddress'] = [];
                        }
                        return {
                            ...state, contact: toReturn
                        };
                    case ACTIONS.CHANGE_DELIVERY_CONTACT_FORM_FIELD:
                        let result = {
                            ...state.contact,
                            [action.name]: action.errors
                        };
                        return {
                            ...state, contact: result
                        };
                    case ACTIONS.GET_CUSTOMER_DONE:
                    case ACTIONS.GET_CART_CUSTOMER_DONE:
                        return {
                            ...state, data: {
                                ...state.data,
                                ...action.errors
                            }
                        };
                    case ACTIONS.SWITCH_FOREIGNER_MODE:
                        delete state.data.idNumber;
                        delete state.data.identificationNumber;
                        delete state.data.identificationExpirationDate;
                        return state;
                    case ACTIONS.GET_BPG_DATA_DONE:
                        return {
                            ...state, mainAddress: [], data: {}, contact: {}
                        };
                    default:
                        return state;
    }
};

export const existing = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.GET_CUSTOMER_DONE:
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            return action.data ? !!action.data.existing : state;
        default:
            return state;
    }
};

export const hasFixAddress = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.GET_CUSTOMER_DONE:
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            return action.data ? !!action.data.hasFixAddress : state;
        default:
            return state;
    }
};

export const modified = (state = false, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD:
        case ACTIONS.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
        case ACTIONS.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
        case ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
        case ACTIONS.SWITCH_FOREIGNER_MODE:
        case ACTIONS.CHANGE_FOREIGNER_COUNTRY:
        case ACTIONS.CHANGE_FOREIGNER_IDENTIFICATION_TYPE:
            return true;
        case ACTIONS.GET_CUSTOMER_DONE:
        case ACTIONS.GET_CART_CUSTOMER_DONE:
            return (action.data ? !!action.data.modified : false) || state;
        default:
            return state;
    }
};