define(["exports", "../actionTypes", "./helperObjects"], function(_exports, _actionTypes, _helperObjects) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.mappings = _exports.delivery = _exports.correspondence = _exports.main = _exports.replaceAddressNullValues = void 0;

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

    var replaceAddressNullValues = function replaceAddressNullValues() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _helperObjects.emptyAddress;
        return {
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
            streetId: address.streetId || ""
        };
    };

    _exports.replaceAddressNullValues = replaceAddressNullValues;

    var isAddressNull = function isAddressNull() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return data.postalCode == null && data.town == null && data.streetName == null && data.streetNumber == null && data.appartmentNo == null;
    };

    var allowedField = function allowedField() {
        var actionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return actionName === "firstName" || actionName === "lastName" || actionName === "foreigner" || actionName === "companyName";
    };

    var main = function main() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helperObjects.emptyAddress;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD:
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

                var cbsId = {};

                if (action.name === 'town') {
                    cbsId['townId'] = action.cbsId;
                } else if (action.name === 'streetName') {
                    cbsId['streetId'] = action.cbsId;
                }

                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value), cbsId);

            case _actionTypes.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                if (allowedField(action.name)) return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value));
                return state;

            case _actionTypes.GET_CART_CUSTOMER_DONE:
                if (!action.data) return state;
                return _objectSpread({}, replaceAddressNullValues(action.data, action.data.mainAddress));

            case _actionTypes.REMOVE_STREET:
                return _objectSpread({}, state, {
                    streetName: ''
                });

            case _actionTypes.GET_BPG_DATA_DONE:
                if (!!state.wwtaddress) {
                    return state;
                }

                return _objectSpread({}, _helperObjects.emptyAddress);

            default:
                return state;
        }
    };

    _exports.main = main;

    var correspondence = function correspondence() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helperObjects.emptyAddress;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD:
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

                var cbsId = {};

                if (action.name === 'town') {
                    cbsId['townId'] = action.cbsId;
                } else if (action.name === 'streetName') {
                    cbsId['streetId'] = action.cbsId;
                }

                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value), cbsId);

            case _actionTypes.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                if (allowedField(action.name)) return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value));
                return state;

            case _actionTypes.GET_CART_CUSTOMER_DONE:
                if (!action.data) return state;
                return _objectSpread({}, replaceAddressNullValues(action.data, action.data.correspondenceAddress));

            default:
                return state;
        }
    };

    _exports.correspondence = correspondence;

    var delivery = function delivery() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helperObjects.emptyAddress;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_DELIVERY_ADDRESS_FORM_FIELD:
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

                var cbsId = {};

                if (action.name === 'town') {
                    cbsId['townId'] = action.cbsId;
                } else if (action.name === 'streetName') {
                    cbsId['streetId'] = action.cbsId;
                }

                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value), cbsId);

            case _actionTypes.CHANGE_CUSTOMER_DATA_FORM_FIELD:
                if (allowedField(action.name)) return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value));
                return state;

            case _actionTypes.GET_CART_CUSTOMER_DONE:
                return _objectSpread({}, replaceAddressNullValues(action.data));

            default:
                return state;
        }
    };

    _exports.delivery = delivery;

    var mappings = function mappings() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            'correspondence': 'main',
            'delivery': 'main'
        };
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_ADDRESS:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.mappedAddress, action.pickedAddress));

            case _actionTypes.GET_CART_CUSTOMER_DONE:
                var notEmptyMainAddress = replaceAddressNullValues(action.data, action.data.mainAddress);
                var notEmptyCorrAddress = replaceAddressNullValues(action.data, action.data.correspondenceAddress);
                var corrMappingVal = addressesMatches(notEmptyMainAddress, notEmptyCorrAddress) ? 'main' : 'correspondence';
                corrMappingVal = isAddressNull(action.data.correspondenceAddress) ? 'main' : corrMappingVal;
                corrMappingVal = action.data.wwtaddress ? 'main' : corrMappingVal;
                return _objectSpread({}, state, {
                    'correspondence': corrMappingVal
                });

            default:
                return state;
        }
    };

    _exports.mappings = mappings;

    var addressesMatches = function addressesMatches() {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helperObjects.emptyAddress;
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _helperObjects.emptyAddress;
        var aKeyCheck = Object.keys(a).map(function(keyA) {
            return keyA in _helperObjects.emptyAddress;
        }).reduce(function(v1, v2) {
            return v1 && v2;
        });
        var bKeyCheck = Object.keys(b).map(function(keyB) {
            return keyB in _helperObjects.emptyAddress;
        }).reduce(function(v1, v2) {
            return v1 && v2;
        });

        if (!(aKeyCheck && bKeyCheck)) {
            return false;
        }

        return Object.keys(_helperObjects.emptyAddress).map(function(key) {
            return key in a && key in b && a[key] === b[key];
        }).reduce(function(v1, v2) {
            return v1 && v2;
        });
    };
});
//# sourceMappingURL=addresses.js.map