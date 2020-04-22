define(["exports", "redux", "../actionTypes", "eshop/utils/OnlineUtils", "eshop/modules/checkout/actionTypes"], function(_exports, _redux, ACTIONS, _OnlineUtils, _actionTypes2) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = _exports.salesChannel = _exports.accountByMsisdn = _exports.showLogoutConfirmationModal = _exports.ommitAccountAuth = _exports.selectedBillingAccountId = _exports.billingAccounts = _exports.billingAccountContractLimitExceeded = _exports.loggedCustomerData = _exports.getMessage = _exports.showSection = _exports.incompatibleMarket = _exports.isLoading = _exports.chosenExistingAccount = _exports.billingAccountChangeOn = _exports.modalForAccountSelectionOn = _exports.modalForAccountIdentifyOn = _exports.modalForProcessOn = _exports.addToCartAfterAuth = _exports.retentionAlertModalOn = _exports.msisdn = _exports.isPeselAndAddressVerified = _exports.isPeselAndAddressVerificationEnabled = _exports.stayLoveRetentionMSISDN = _exports.doRegisterBillingAccountPopupB2B = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _OnlineUtils = babelHelpers.interopRequireDefault(_OnlineUtils);

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

    var getResults = function getResults(action) {
        return action.results || [];
    };

    var doRegisterBillingAccountPopupB2B = function doRegisterBillingAccountPopupB2B() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B:
                return true;

            default:
                return state;
        }
    };

    _exports.doRegisterBillingAccountPopupB2B = doRegisterBillingAccountPopupB2B;

    var stayLoveRetentionMSISDN = function stayLoveRetentionMSISDN() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _OnlineUtils.default.loadFromSessionStorage("stayLoveRetentionMSISDN");
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.STAY_LOVE_RETENTION_MSISDN:
                _OnlineUtils.default.saveInSessionStorage("stayLoveRetentionMSISDN", action.msisdn);

                return action.msisdn;

            default:
                return state;
        }
    };

    _exports.stayLoveRetentionMSISDN = stayLoveRetentionMSISDN;

    var isPeselAndAddressVerificationEnabled = function isPeselAndAddressVerificationEnabled() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED:
                return action.isEnabled;

            default:
                return state;
        }
    };

    _exports.isPeselAndAddressVerificationEnabled = isPeselAndAddressVerificationEnabled;

    var isPeselAndAddressVerified = function isPeselAndAddressVerified() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.IS_PESEL_AND_ADDRESS_VERIFIED:
                return action.isVerified;

            default:
                return state;
        }
    };

    _exports.isPeselAndAddressVerified = isPeselAndAddressVerified;

    var msisdn = function msisdn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_MSISDN_OR_LOGIN:
                return action.msisdn;

            default:
                return state;
        }
    };

    _exports.msisdn = msisdn;

    var retentionAlertModalOn = function retentionAlertModalOn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_RETENTION_ALERT_MODAL_ON:
                return true;

            case ACTIONS.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF:
                return false;

            default:
                return state;
        }
    };

    _exports.retentionAlertModalOn = retentionAlertModalOn;

    var addToCartAfterAuth = function addToCartAfterAuth() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_ADD_TO_CART_AFTER:
                return action.value;

            default:
                return state;
        }
    };

    _exports.addToCartAfterAuth = addToCartAfterAuth;

    var modalForProcessOn = function modalForProcessOn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_ON:
                return true;

            case ACTIONS.AUTHORIZATION_MODAL_FOR_PROCESS_OFF:
                return false;

            default:
                return state;
        }
    };

    _exports.modalForProcessOn = modalForProcessOn;

    var modalForAccountIdentifyOn = function modalForAccountIdentifyOn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON:
                return true;

            case ACTIONS.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF:
                return false;

            case _actionTypes2.DO_CHECKOUT_STEP_ERROR:
                if (getResults(action).filter(function(result) {
                        return result.category === "AUTH";
                    }).length) return true;
                return state;

            default:
                return state;
        }
    };

    _exports.modalForAccountIdentifyOn = modalForAccountIdentifyOn;

    var modalForAccountSelectionOn = function modalForAccountSelectionOn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_ON:
                return true;

            case ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_OFF:
            case ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_OFF:
                return false;

            default:
                return state;
        }
    };

    _exports.modalForAccountSelectionOn = modalForAccountSelectionOn;

    var billingAccountChangeOn = function billingAccountChangeOn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_ON:
                return true;

            case ACTIONS.AUTHORIZATION_CHANGE_ACCOUNT_OFF:
                return false;

            default:
                return state;
        }
    };

    _exports.billingAccountChangeOn = billingAccountChangeOn;

    var chosenExistingAccount = function chosenExistingAccount() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING:
                return true;

            case ACTIONS.AUTHORIZATION_CHOOSE_ACCOUNT_NEW:
                return false;

            default:
                return state;
        }
    };

    _exports.chosenExistingAccount = chosenExistingAccount;

    var isLoading = function isLoading() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_IS_LOADING_ON:
                return true;

            case ACTIONS.AUTHORIZATION_IS_LOADING_OFF:
                return false;

            default:
                return state;
        }
    };

    _exports.isLoading = isLoading;

    var incompatibleMarket = function incompatibleMarket() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.MARKET_IS_INCOMPATIBLE:
                return action.payload;

            case ACTIONS.MARKET_IS_COMPATIBLE:
                return false;

            default:
                return state;
        }
    };

    _exports.incompatibleMarket = incompatibleMarket;

    var showSection = function showSection() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_SHOW_SECTION:
                return action.section;

            default:
                return state;
        }
    };

    _exports.showSection = showSection;

    var getMessage = function getMessage() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_MESSAGE:
                if (action.msg == undefined) return state;
                return action.msg;

            case ACTIONS.CLEAR_MESSAGE:
                return state;

            default:
                return state;
        }
    };

    _exports.getMessage = getMessage;

    var loggedCustomerData = function loggedCustomerData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
                if (action.payload == undefined) {
                    return state;
                }

                console.log("loggedCustomerData", action.payload);
                return _objectSpread({}, action.payload, {
                    isCartChanged: state && state.isCartChanged || action.payload.isCartChanged
                });

            case ACTIONS.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG:
                return _objectSpread({}, state, {
                    isCartChanged: false
                });

            default:
                return state;
        }
    };

    _exports.loggedCustomerData = loggedCustomerData;

    var billingAccountContractLimitExceeded = function billingAccountContractLimitExceeded() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_MOBILE_BILLING_ACCOUNTS:
                if (action.payload && action.payload.status && action.payload.status == 422) return true;
                return false;

            default:
                return state;
        }
    };

    _exports.billingAccountContractLimitExceeded = billingAccountContractLimitExceeded;

    var billingAccounts = function billingAccounts() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_MOBILE_BILLING_ACCOUNTS:
                console.log("billingAccounts reducer", action.payload);
                if (action.payload == undefined || action.payload.status) return null;
                return action.payload;

            default:
                return state;
        }
    };

    _exports.billingAccounts = billingAccounts;

    var selectedBillingAccountId = function selectedBillingAccountId() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SELECTED_BILLING_ACCOUNT_ID:
                return action.accountId;

            case ACTIONS.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA:
                if (action.payload == undefined) return state;
                return action.payload.accountId || "";

            default:
                return state;
        }
    };

    _exports.selectedBillingAccountId = selectedBillingAccountId;

    var ommitAccountAuth = function ommitAccountAuth() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_OMMIT_ACCOUNT_AUTH:
                return true;

            default:
                return state;
        }
    };

    _exports.ommitAccountAuth = ommitAccountAuth;

    var showLogoutConfirmationModal = function showLogoutConfirmationModal() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON:
                return true;

            case ACTIONS.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF:
                return false;

            default:
                return state;
        }
    };

    _exports.showLogoutConfirmationModal = showLogoutConfirmationModal;

    var accountByMsisdn = function accountByMsisdn() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_ACCOUNT_BY_MSISDN:
                return _objectSpread({}, action.account, {
                    hasMagnumProduct: false
                });

            default:
                return state;
        }
    };

    _exports.accountByMsisdn = accountByMsisdn;

    var salesChannel = function salesChannel() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_SALES_CHANNEL:
                return action.channel;

            default:
                return state;
        }
    };

    _exports.salesChannel = salesChannel;

    var _default = (0, _redux.combineReducers)({
        isLoading: isLoading,
        msisdn: msisdn,
        modalForProcessOn: modalForProcessOn,
        modalForAccountIdentifyOn: modalForAccountIdentifyOn,
        modalForAccountSelectionOn: modalForAccountSelectionOn,
        addToCartAfterAuth: addToCartAfterAuth,
        billingAccountChangeOn: billingAccountChangeOn,
        retentionAlertModalOn: retentionAlertModalOn,
        showSection: showSection,
        chosenExistingAccount: chosenExistingAccount,
        getMessage: getMessage,
        loggedCustomerData: loggedCustomerData,
        isPeselAndAddressVerificationEnabled: isPeselAndAddressVerificationEnabled,
        isPeselAndAddressVerified: isPeselAndAddressVerified,
        billingAccountContractLimitExceeded: billingAccountContractLimitExceeded,
        billingAccounts: billingAccounts,
        accountByMsisdn: accountByMsisdn,
        selectedBillingAccountId: selectedBillingAccountId,
        ommitAccountAuth: ommitAccountAuth,
        showLogoutConfirmationModal: showLogoutConfirmationModal,
        doRegisterBillingAccountPopupB2B: doRegisterBillingAccountPopupB2B,
        salesChannel: salesChannel,
        incompatibleMarket: incompatibleMarket,
        stayLoveRetentionMSISDN: stayLoveRetentionMSISDN
    });

    _exports.default = _default;
});
//# sourceMappingURL=authorization.js.map