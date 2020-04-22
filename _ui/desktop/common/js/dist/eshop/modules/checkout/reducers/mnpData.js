define(["exports", "../actionTypes"], function(_exports, _actionTypes) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.data = void 0;

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

    var BUSSINESS_DATA_KEYS = ['nip', 'regon', 'businessName', 'pesel', 'firstName', 'lastName', 'idNumber'];
    var BUSSINESS_IDS_KEYS = ['nip', 'regon'];
    var ADDRESS_KEYS = ['postalCode', 'city', 'street', 'houseNumber', 'flatNumber'];

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD:
            case _actionTypes.CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD:
                return state.map(function(el, idx) {
                    var newEntry = _objectSpread({}, el);

                    if (!newEntry.errors) newEntry.errors = [];

                    switch (action.name) {
                        case 'contactMethod':
                            newEntry[action.name] = action.value;
                            break;
                    }

                    ;

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
                                                newEntry.migrationMode = action.defaults.migrationModes.filter(function(migrationMode) {
                                                    return migrationMode.operatorOfferTypeCode === action.value;
                                                }).filter(function(migrationMode) {
                                                    return migrationMode.value === 'EOP';
                                                }).reduce(function(el) {
                                                    return el;
                                                }).value;
                                                break;

                                            default:
                                                newEntry.migrationMode = action.defaults.migrationModes.filter(function(migrationMode) {
                                                    return migrationMode.operatorOfferTypeCode === action.value;
                                                })[0].value;
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
                                    BUSSINESS_IDS_KEYS.forEach(function(k) {
                                        newEntry[k] = '';
                                        newEntry.errors[k] = [];
                                    });
                                    break;

                                case 'agreementType':
                                    BUSSINESS_DATA_KEYS.forEach(function(k) {
                                        newEntry[k] = '';
                                        newEntry.errors[k] = [];
                                    });
                                    newEntry.identifier = 'NIP';
                                    newEntry.isHeadquartersAddressSame = true;
                                    break;

                                case 'isHeadquartersAddressSame':
                                    ADDRESS_KEYS.forEach(function(k) {
                                        newEntry[k] = '';
                                        newEntry.errors[k] = [];
                                    });;
                                    break;
                            }
                        }

                        newEntry[action.name] = action.name === 'isHeadquartersAddressSame' ? action.value === true : action.value;

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

            case _actionTypes.GET_CART_MNP_DATA_DONE:
                if (!action.sources.response) return state;
                return action.sources.response.map(function(entry) {
                    entry.errors = {};
                    Object.getOwnPropertyNames(action.sources.defaults).forEach(function(key) {
                        if (!entry[key]) {
                            entry[key] = action.sources.defaults[key];
                        }
                    });
                    return entry;
                });

            case _actionTypes.SWITCH_SAME_MNP_DATA:
                var newState = state.slice(1).map(function(item, index) {
                    return _objectSpread({}, item, {
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
                    });
                });
                return state.slice(0, 1).concat(newState);

            default:
                return state;
        }
    };

    _exports.data = data;
});
//# sourceMappingURL=mnpData.js.map