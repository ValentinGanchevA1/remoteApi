import {
    CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD,
    CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD,
    GET_CART_MNP_DATA_DONE,
    SWITCH_SAME_MNP_DATA
} from "../actionTypes";

const BUSSINESS_DATA_KEYS = ['nip', 'regon', 'businessName', 'pesel', 'firstName', 'lastName', 'idNumber'];
const BUSSINESS_IDS_KEYS = ['nip', 'regon'];
const ADDRESS_KEYS = ['postalCode', 'city', 'street', 'houseNumber', 'flatNumber'];

export const data = (state = [], action) => {
    switch (action.type) {
        case CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD:
        case CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD:
            return state.map((el, idx) => {
                let newEntry = {
                    ...el
                };
                if (!newEntry.errors)
                    newEntry.errors = [];
                switch (action.name) {
                    case 'contactMethod':
                        newEntry[action.name] = action.value;
                        break;
                };

                if (action.entryIndex === idx && !!action.defaults) {
                    if (action.value !== newEntry[action.name]) {
                        switch (action.name) {
                            case 'offerType':
                                if (action.value === '') {
                                    newEntry.migrationMode = '';
                                    newEntry.offerType = '';
                                } else {
                                    switch (action.value) {
                                        case 'postpaid':
                                            newEntry.migrationMode = action.defaults.migrationModes
                                                .filter(migrationMode => migrationMode.operatorOfferTypeCode === action.value)
                                                .filter(migrationMode => migrationMode.value === 'EOP')
                                                .reduce(el => el)
                                                .value;
                                            break;
                                        default:
                                            newEntry.migrationMode = action.defaults.migrationModes
                                                .filter(migrationMode => migrationMode.operatorOfferTypeCode === action.value)[0]
                                                .value;
                                    }
                                }
                                newEntry.errors.migrationMode = [];
                                newEntry.errors.date = [];
                                break;
                            case 'migrationMode':
                                newEntry.date = '';
                                newEntry.errors.date = [];
                                break;
                            case 'identifier':
                                BUSSINESS_IDS_KEYS.forEach(k => {
                                    newEntry[k] = '';
                                    newEntry.errors[k] = [];
                                });
                                break;
                            case 'agreementType':
                                BUSSINESS_DATA_KEYS.forEach(k => {
                                    newEntry[k] = '';
                                    newEntry.errors[k] = [];
                                });
                                newEntry.identifier = 'NIP';
                                newEntry.isHeadquartersAddressSame = true;
                                break;
                            case 'isHeadquartersAddressSame':
                                ADDRESS_KEYS.forEach(k => {
                                    newEntry[k] = '';
                                    newEntry.errors[k] = [];
                                });;
                                break;
                        }
                    }
                    newEntry[action.name] = (action.name === 'isHeadquartersAddressSame' ? action.value === true : action.value);
                    if (!newEntry.errors) {
                        newEntry.errors = {};
                    }
                    newEntry.errors[action.name] = action.errors;
                } else if (action.entryIndex === el.bundleNo) {
                    //Validation only - no changes!
                    if (!newEntry.errors) {
                        newEntry.errors = {};
                    }
                    newEntry.errors[action.name] = action.errors;
                }
                return newEntry;
            });
        case GET_CART_MNP_DATA_DONE:
            if (!action.sources.response)
                return state;
            return action.sources.response.map((entry) => {
                entry.errors = {};

                Object.getOwnPropertyNames(action.sources.defaults).forEach(key => {
                    if (!entry[key]) {
                        entry[key] = action.sources.defaults[key];
                    }
                });

                return entry;
            });
        case SWITCH_SAME_MNP_DATA:
            let newState = state.slice(1).map((item, index) => ({
                ...item,
                postalCode: state[0].postalCode,
                agreementType: state[0].agreementType,
                businessName: state[0].businessName,
                contactMethod: state[0].contactMethod,
                date: state[0].date,
                email: state[0].email,
                flatNumber: state[0].flatNumber,
                houseNumber: state[0].houseNumber,
                identifier: state[0].identifier,
                isHeadquartersAddressSame: state[0].isHeadquartersAddressSame,
                migrationMode: state[0].migrationMode,
                nip: state[0].nip,
                offerType: state[0].offerType,
                operator: state[0].operator,
                regon: state[0].regon,
                city: state[0].city,
                street: state[0].street,
                firstName: state[0].firstName,
                lastName: state[0].lastName,
                pesel: state[0].pesel,
                idNumber: state[0].idNumber
            }))

            return state.slice(0, 1).concat(newState);
        default:
            return state;
    }
};