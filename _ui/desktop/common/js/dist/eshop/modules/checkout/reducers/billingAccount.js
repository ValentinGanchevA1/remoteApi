define(["exports", "../actionTypes", "../utils/utils"], function(_exports, _actionTypes, _utils) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.create = _exports.formErrors = _exports.formVisible = _exports.formData = _exports.accountContractsVisible = _exports.accountContracts = _exports.isShowContractButtonEnabled = _exports.selectedFix = _exports.selectedMobile = _exports.data = void 0;

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

    var emptyBillingAccountForm = {
        postalCode: '',
        town: '',
        streetName: '',
        streetNumber: '',
        appartmentNo: '',
        emailAddress: ''
    };
    var emptySelectedBillingAccount = {
        accountCode: ''
    };

    var data = function data() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_BILLING_ACCOUNTS:
                return action.billingAccounts;

            default:
                return state;
        }
    };

    _exports.data = data;

    var selectedMobile = function selectedMobile() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptySelectedBillingAccount;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
                return action.billingAccount;

            case _actionTypes.SET_CREATE_NEW_BILLING_ACCOUNT:
                return emptySelectedBillingAccount;

            case _actionTypes.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return (0, _utils.requiredBillingAccountFieldExist)(action.data) ? emptySelectedBillingAccount : state;

            default:
                return state;
        }
    };

    _exports.selectedMobile = selectedMobile;

    var selectedFix = function selectedFix() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptySelectedBillingAccount;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_FIX:
                return action.billingAccount;

            case _actionTypes.SET_CREATE_NEW_BILLING_ACCOUNT:
                return emptySelectedBillingAccount;

            case _actionTypes.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return (0, _utils.requiredBillingAccountFieldExist)(action.data) ? emptySelectedBillingAccount : state;

            default:
                return state;
        }
    };

    _exports.selectedFix = selectedFix;

    var isShowContractButtonEnabled = function isShowContractButtonEnabled() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.GET_BILLING_ACCOUNT_CONTRACTS_START:
                return true;

            case _actionTypes.GET_BILLING_ACCOUNT_CONTRACTS:
                return false;

            default:
                return state;
        }
    };

    _exports.isShowContractButtonEnabled = isShowContractButtonEnabled;

    var accountContracts = function accountContracts() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
                return {};

            case _actionTypes.GET_BILLING_ACCOUNT_CONTRACTS:
                return action.accountContracts;

            default:
                return state;
        }
    };

    _exports.accountContracts = accountContracts;

    var accountContractsVisible = function accountContractsVisible() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
                return false;

            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_FIX:
                return false;

            case _actionTypes.GET_BILLING_ACCOUNT_CONTRACTS:
                return action.accountContracts.length !== 0;

            case _actionTypes.SET_BILLING_ACCOUNT_CONTRACTS_VISIBILITY:
                return action.visible;

            case _actionTypes.SET_CREATE_NEW_BILLING_ACCOUNT:
                return false;

            default:
                return state;
        }
    };

    _exports.accountContractsVisible = accountContractsVisible;

    var formData = function formData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyBillingAccountForm;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_BILLING_ACCOUNT_FORM_FIELD:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.value));

            case _actionTypes.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return action.data;

            default:
                return state;
        }
    };

    _exports.formData = formData;

    var formVisible = function formVisible() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_BILLING_ACCOUNT_FORM_VISIBILITY:
                return action.visible;

            case _actionTypes.SET_CREATE_NEW_BILLING_ACCOUNT:
                return false;

            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
                return false;

            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_FIX:
                return false;

            case _actionTypes.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return (0, _utils.requiredBillingAccountFieldExist)(action.data);

            default:
                return state;
        }
    };

    _exports.formVisible = formVisible;

    var formErrors = function formErrors() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.CHANGE_BILLING_ACCOUNT_FORM_FIELD:
                return _objectSpread({}, state, babelHelpers.defineProperty({}, action.name, action.errors));

            case _actionTypes.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return {};

            default:
                return state;
        }
    };

    _exports.formErrors = formErrors;

    var create = function create() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case _actionTypes.SET_CREATE_NEW_BILLING_ACCOUNT:
                return true;

            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_MOBILE:
                return false;

            case _actionTypes.SET_SELECTED_BILLING_ACCOUNT_FIX:
                return false;

            case _actionTypes.CHANGE_BILLING_ACCOUNT_FORM_FIELD:
                return false;

            case _actionTypes.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return (0, _utils.requiredBillingAccountFieldExist)(action.data);

            default:
                return state;
        }
    };

    _exports.create = create;
});
//# sourceMappingURL=billingAccount.js.map