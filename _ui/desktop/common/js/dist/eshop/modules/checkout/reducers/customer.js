define(["exports", "../actionTypes", "./helperObjects"], function(_exports, ACTIONS, _helperObjects) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.modified = _exports.hasFixAddress = _exports.existing = _exports.errors = _exports.contact = _exports.data = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);

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

    var emptyCustomerData = _objectSpread({}, _helperObjects.emptyBusinessData, {}, _helperObjects.emptyPersonalData, {
        isBusinessClient: false
    });

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyCustomerData;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value));

            case ACTIONS.GET_CUSTOMER_DONE:
            case ACTIONS.GET_CART_CUSTOMER_DONE:
                if (!action.data) return state;

                var result = _objectSpread({}, emptyCustomerData);

                var allowedKeys = Object.keys(result);
                Object.keys(action.data).filter(function(k) {
                    return allowedKeys.indexOf(k) !== -1;
                }).forEach(function(k) {
                    return result[k] = action.data[k];
                });

                if (!!state.initialNationality) {
                    result = _objectSpread({}, result, {
                        initialNationality: state.initialNationality
                    });
                }

                if (!!state.foreignerAvailable) {
                    result = _objectSpread({}, result, {
                        foreignerAvailable: state.foreignerAvailable
                    });
                }

                return _objectSpread({}, result);

            case ACTIONS.SWITCH_EDIT_ID_NUMBER_MODE:
                return _objectSpread({}, state, {
                    disabledIdNumber: !state.disabledIdNumber,
                    idNumber: state.disabledIdNumber ? "" : state.idNumber
                });

            case ACTIONS.GET_BPG_DATA_DONE:
                var nip = action && action.data && action.data.nip || state.nip;
                var statusAndDateFromBpg = action && action.data && action.data.statusAndDateFromBpg;
                return _objectSpread({}, state, {}, _helperObjects.emptyBusinessData, {
                    nip: nip,
                    statusAndDateFromBpg: statusAndDateFromBpg
                });

            case ACTIONS.CHANGE_INVOICE_EMAIL_MAPPING:
                return _objectSpread({}, state, {
                    invoiceEmailMapping: action.payload
                });

            case ACTIONS.SET_INITIAL_NATIONALITY:
                return _objectSpread({}, state, {
                    initialNationality: action.payload
                });

            case ACTIONS.SET_FOREIGNER:
                return _objectSpread({}, state, {
                    foreignerAvailable: action.payload
                });

            default:
                return state;
        }
    };

    _exports.data = data;

    var contact = function contact() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helperObjects.emptyCustomerContact;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value));

            case ACTIONS.GET_CUSTOMER_DONE:
            case ACTIONS.GET_CART_CUSTOMER_DONE:
                if (!action.data) return state;
                var _action$data = action.data,
                    emailAddress = _action$data.emailAddress,
                    phoneNumber = _action$data.phoneNumber,
                    customerNoEmail = _action$data.customerNoEmail;
                return {
                    emailAddress: emailAddress,
                        phoneNumber: phoneNumber,
                        customerNoEmail: customerNoEmail
                };

            case ACTIONS.GET_BPG_DATA_DONE:
                return _objectSpread({}, _helperObjects.emptyCustomerContact);

            default:
                return state;
        }
    };

    _exports.contact = contact;

    var errors = function errors() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                return _objectSpread({}, state, {
                    data: _objectSpread({}, state.data, babelHelpers.defineProperty({}, action.name, action.errors))
                });

            case ACTIONS.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
                if (action.name === 'postalCode') {
                    var _objectSpread5;

                    return _objectSpread({}, state, {
                        mainAddress: _objectSpread({}, state.mainAddress, (_objectSpread5 = {}, babelHelpers.defineProperty(_objectSpread5, action.name, action.errors), babelHelpers.defineProperty(_objectSpread5, "streetName", undefined), babelHelpers.defineProperty(_objectSpread5, "town", undefined), _objectSpread5))
                    });
                } else if (action.name === 'town') {
                    var _objectSpread6;

                    return _objectSpread({}, state, {
                        mainAddress: _objectSpread({}, state.mainAddress, (_objectSpread6 = {}, babelHelpers.defineProperty(_objectSpread6, action.name, action.errors), babelHelpers.defineProperty(_objectSpread6, "streetName", undefined), _objectSpread6))
                    });
                } else if (action.name === 'streetName') {
                    var _objectSpread7;

                    return _objectSpread({}, state, {
                        mainAddress: _objectSpread({}, state.mainAddress, (_objectSpread7 = {}, babelHelpers.defineProperty(_objectSpread7, action.name, action.errors), babelHelpers.defineProperty(_objectSpread7, "streetNo", undefined), _objectSpread7))
                    });
                } else {
                    return _objectSpread({}, state, {
                        mainAddress: _objectSpread({}, state.mainAddress, babelHelpers.defineProperty({}, action.name, action.errors))
                    });
                }

                case ACTIONS.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
                    if (action.name === 'postalCode') {
                        var _objectSpread9;

                        return _objectSpread({}, state, {
                            correspondenceAddress: _objectSpread({}, state.correspondenceAddress, (_objectSpread9 = {}, babelHelpers.defineProperty(_objectSpread9, action.name, action.errors), babelHelpers.defineProperty(_objectSpread9, "streetName", undefined), babelHelpers.defineProperty(_objectSpread9, "town", undefined), _objectSpread9))
                        });
                    } else if (action.name === 'town') {
                        var _objectSpread10;

                        return _objectSpread({}, state, {
                            correspondenceAddress: _objectSpread({}, state.correspondenceAddress, (_objectSpread10 = {}, babelHelpers.defineProperty(_objectSpread10, action.name, action.errors), babelHelpers.defineProperty(_objectSpread10, "streetName", undefined), _objectSpread10))
                        });
                    } else {
                        return _objectSpread({}, state, {
                            correspondenceAddress: _objectSpread({}, state.correspondenceAddress, babelHelpers.defineProperty({}, action.name, action.errors))
                        });
                    }

                    case ACTIONS.CHANGE_DELIVERY_ADDRESS_FORM_FIELD:
                        if (action.name === 'postalCode') {
                            var _objectSpread12;

                            return _objectSpread({}, state, {
                                deliveryAddress: _objectSpread({}, state.deliveryAddress, (_objectSpread12 = {}, babelHelpers.defineProperty(_objectSpread12, action.name, action.errors), babelHelpers.defineProperty(_objectSpread12, "streetName", undefined), babelHelpers.defineProperty(_objectSpread12, "town", undefined), _objectSpread12))
                            });
                        } else if (action.name === 'town') {
                            var _objectSpread13;

                            return _objectSpread({}, state, {
                                deliveryAddress: _objectSpread({}, state.deliveryAddress, (_objectSpread13 = {}, babelHelpers.defineProperty(_objectSpread13, action.name, action.errors), babelHelpers.defineProperty(_objectSpread13, "streetName", undefined), _objectSpread13))
                            });
                        } else {
                            return _objectSpread({}, state, {
                                deliveryAddress: _objectSpread({}, state.deliveryAddress, babelHelpers.defineProperty({}, action.name, action.errors))
                            });
                        }

                        case ACTIONS.CHANGE_CUSTOMER_CONTACT_FORM_FIELD:
                            var toReturn = _objectSpread({}, state.contact, babelHelpers.defineProperty({}, action.name, action.errors));

                            if (action.name === "customerNoEmail" && action.value === true) {
                                toReturn['emailAddress'] = [];
                            }

                            return _objectSpread({}, state, {
                                contact: toReturn
                            });

                        case ACTIONS.CHANGE_DELIVERY_CONTACT_FORM_FIELD:
                            var result = _objectSpread({}, state.contact, babelHelpers.defineProperty({}, action.name, action.errors));

                            return _objectSpread({}, state, {
                                contact: result
                            });

                        case ACTIONS.GET_CUSTOMER_DONE:
                        case ACTIONS.GET_CART_CUSTOMER_DONE:
                            return _objectSpread({}, state, {
                                data: _objectSpread({}, state.data, {}, action.errors)
                            });

                        case ACTIONS.SWITCH_FOREIGNER_MODE:
                            delete state.data.idNumber;
                            delete state.data.identificationNumber;
                            delete state.data.identificationExpirationDate;
                            return state;

                        case ACTIONS.GET_BPG_DATA_DONE:
                            return _objectSpread({}, state, {
                                mainAddress: [],
                                data: {},
                                contact: {}
                            });

                        default:
                            return state;
        }
    };

    _exports.errors = errors;

    var existing = function existing() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CUSTOMER_DONE:
            case ACTIONS.GET_CART_CUSTOMER_DONE:
                return action.data ? !!action.data.existing : state;

            default:
                return state;
        }
    };

    _exports.existing = existing;

    var hasFixAddress = function hasFixAddress() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CUSTOMER_DONE:
            case ACTIONS.GET_CART_CUSTOMER_DONE:
                return action.data ? !!action.data.hasFixAddress : state;

            default:
                return state;
        }
    };

    _exports.hasFixAddress = hasFixAddress;

    var modified = function modified() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

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

    _exports.modified = modified;
});
//# sourceMappingURL=customer.js.map