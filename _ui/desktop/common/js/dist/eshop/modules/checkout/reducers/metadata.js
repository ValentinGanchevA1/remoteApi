define(["exports", "../actionTypes", "../utils/utils", "../constants/EmailWarningDescriptionEnum"], function(_exports, ACTIONS, _utils, _EmailWarningDescriptionEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.allDocuments = _exports.payment = _exports.fullPageLoader = _exports.fixCartRefreshResult = _exports.emailWarningModalState = _exports.manualVerificationModalVisible = _exports.courierDeliveryMethodModalState = _exports.courierDeliveryMethodModalVisible = _exports.courierDeliveryMethodModalDidMount = _exports.earlierInstallationConsentNotAcceptedModalDidMount = _exports.earlierInstallationConsentNotAcceptedModalIsAccepted = _exports.earlierInstallationConsentNotAcceptedModalIsVisible = _exports.billingAccount = _exports.period = _exports.currentStepId = _exports.cartConsents = _exports.updatingConsents = _exports.cartMnpData = _exports.mnpData = _exports.consents = _exports.installation = _exports.delivery = _exports.representative = _exports.customer = void 0;
    ACTIONS = babelHelpers.interopRequireWildcard(ACTIONS);
    _EmailWarningDescriptionEnum = babelHelpers.interopRequireDefault(_EmailWarningDescriptionEnum);

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

    var defaultState = {
        requested: false,
        loading: false,
        updating: false,
        readOnly: false,
        finished: false
    };

    var defaultCustomerState = _objectSpread({}, defaultState, {
        locked: false,
        isOnlineCookie: false,
        isSmsVerified: false,
        bpgRequested: false,
        businessDataSource: "",
        isWWW: true
    });

    var customer = function customer() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultCustomerState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CLEAR_CART_CUSTOMER_REQUESTED:
                return _objectSpread({}, state, {
                    requested: false
                });

            case ACTIONS.GET_CUSTOMER_START:
            case ACTIONS.GET_CART_CUSTOMER_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.GET_CUSTOMER_DONE:
            case ACTIONS.GET_CART_CUSTOMER_DONE:
                var isBpgRequested = action.data.isBusinessClient ? !!action.data.existing || !!action.data.nip : true;
                return _objectSpread({}, state, {
                    loading: false,
                    readOnly: !!action.data.existing,
                    fixBundleInCart: action.data.fixBundleInCart,
                    isOnlineCookie: action.data.isOnlineCookie,
                    isSmsVerified: action.data.isSmsVerified,
                    bpgRequested: isBpgRequested,
                    businessDataSource: action.data.businessDataSource,
                    isWWW: action.data.isWWW,
                    finished: true
                });

            case ACTIONS.SWITCH_CUSTOMER_EDIT_MODE:
                return _objectSpread({}, state, {
                    readOnly: !state.readOnly
                });

            case ACTIONS.GET_BPG_DATA_DONE:
                var source = "";

                if (!!action.data && !!action.data.nip) {
                    source = 'bpg';
                }

                return _objectSpread({}, state, {
                    bpgRequested: true,
                    businessDataSource: source
                });

            default:
                return state;
        }
    };

    _exports.customer = customer;

    var representative = function representative() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CART_REPRESENTATIVE_DATA_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.GET_CART_REPRESENTATIVE_DATA_DONE:
                return _objectSpread({}, state, {
                    loading: false
                });

            default:
                return state;
        }
    };

    _exports.representative = representative;

    var delivery = function delivery() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CART_DELIVERY_DATA_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.GET_CART_DELIVERY_DATA_DONE:
                return _objectSpread({}, state, {
                    loading: false,
                    readOnly: !!action.existing,
                    finished: true
                });

            default:
                return state;
        }
    };

    _exports.delivery = delivery;

    var installation = function installation() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START:
                return _objectSpread({}, state, {
                    requested: true
                });

            case ACTIONS.GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE:
                return _objectSpread({}, state);

            default:
                return state;
        }
    };

    _exports.installation = installation;

    var consents = function consents() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CONSENTS_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true,
                    data: action.data
                });

            case ACTIONS.GET_CONSENTS_DONE:
                return _objectSpread({}, state, {
                    loading: false
                });

            case ACTIONS.UPDATE_CONSENT_STATE_START:
                return _objectSpread({}, state, {
                    updating: true
                });

            case ACTIONS.UPDATE_CONSENT_STATE_DONE:
                return _objectSpread({}, state, {
                    updating: false
                });

            default:
                return state;
        }
    };

    _exports.consents = consents;

    var mnpData = function mnpData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CUSTOMER_MNP_DATA_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.GET_CUSTOMER_MNP_DATA_DONE:
                return _objectSpread({}, state, {
                    loading: false
                });

            default:
                return state;
        }
    };

    _exports.mnpData = mnpData;

    var cartMnpData = function cartMnpData() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CART_MNP_DATA_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.GET_CART_MNP_DATA_DONE:
                return _objectSpread({}, state, {
                    loading: false
                });

            default:
                return state;
        }
    };

    _exports.cartMnpData = cartMnpData;

    var updatingConsents = function updatingConsents() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CONSENTS_DONE:
                action.data.map(function(cartConsent) {
                    return state[cartConsent.consentCode] = false;
                });
                return _objectSpread({}, state);

            case ACTIONS.UPDATE_CONSENT_STATE_START:
                action.codes.map(function(code) {
                    return state[code] = true;
                });
                return _objectSpread({}, state);

            case ACTIONS.UPDATE_CONSENT_STATE_DONE:
                action.response.map(function(consent) {
                    return state[consent.consentCode] = false;
                });
                return _objectSpread({}, state);

            default:
                return state;
        }
    };

    _exports.updatingConsents = updatingConsents;

    var cartConsents = function cartConsents() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_CART_CONSENTS_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.UPDATE_CONSENT_STATE_START:
                return _objectSpread({}, state, {
                    updating: true
                });

            case ACTIONS.UPDATE_CONSENT_STATE_DONE:
                return _objectSpread({}, state, {
                    updating: false
                });

            case ACTIONS.GET_CART_CONSENTS_DONE:
                return _objectSpread({}, state, {
                    loading: false
                });

            default:
                return state;
        }
    };

    _exports.cartConsents = cartConsents;

    var currentStepId = function currentStepId() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.getElementById("checkoutStepProgressBadId") && document.getElementById("checkoutStepProgressBadId").value || "";
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.REGISTER_CURRENT_STEP_ID:
                return action.id;

            default:
                return state;
        }
    };

    _exports.currentStepId = currentStepId;

    var period = function period() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_PERIOD_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.GET_PERIOD_DONE:
                return _objectSpread({}, state, {
                    loading: false
                });

            default:
                return state;
        }
    };

    _exports.period = period;

    var billingAccount = function billingAccount() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_BILLING_ACCOUNT_FORM_DATA_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.GET_BILLING_ACCOUNT_FORM_DATA_DONE:
                return _objectSpread({}, state, {
                    loading: false
                });

            default:
                return state;
        }
    };

    _exports.billingAccount = billingAccount;

    var earlierInstallationConsentNotAcceptedModalIsVisible = function earlierInstallationConsentNotAcceptedModalIsVisible() {
        var earlierInstallationConsentNotAcceptedModalIsVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
                return true;

            case ACTIONS.CLOSE_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
                return false;

            default:
                return earlierInstallationConsentNotAcceptedModalIsVisible;
        }
    };

    _exports.earlierInstallationConsentNotAcceptedModalIsVisible = earlierInstallationConsentNotAcceptedModalIsVisible;

    var earlierInstallationConsentNotAcceptedModalIsAccepted = function earlierInstallationConsentNotAcceptedModalIsAccepted() {
        var earlierInstallationConsentNotAcceptedModalIsAccepted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.ACCEPT_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION:
                return true;

            default:
                return earlierInstallationConsentNotAcceptedModalIsAccepted;
        }
    };

    _exports.earlierInstallationConsentNotAcceptedModalIsAccepted = earlierInstallationConsentNotAcceptedModalIsAccepted;

    var earlierInstallationConsentNotAcceptedModalDidMount = function earlierInstallationConsentNotAcceptedModalDidMount() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_MOUNTED_ACTION:
                return true;

            default:
                return state;
        }
    };

    _exports.earlierInstallationConsentNotAcceptedModalDidMount = earlierInstallationConsentNotAcceptedModalDidMount;

    var courierDeliveryMethodModalDidMount = function courierDeliveryMethodModalDidMount() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.COURIER_DELIVERY_METHOD_MODAL_MOUNTED:
                return true;

            default:
                return state;
        }
    };

    _exports.courierDeliveryMethodModalDidMount = courierDeliveryMethodModalDidMount;

    var courierDeliveryMethodModalVisible = function courierDeliveryMethodModalVisible() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_COURIER_DELIVERY_METHOD_MODAL:
                return true;

            case ACTIONS.HIDE_COURIER_DELIVERY_METHOD_MODAL:
                return false;

            default:
                return state;
        }
    };

    _exports.courierDeliveryMethodModalVisible = courierDeliveryMethodModalVisible;

    var courierDeliveryMethodModalState = function courierDeliveryMethodModalState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SET_COURIER_DELIVERY_METHOD_MODAL_STATE:
                return action.payload;

            default:
                return state;
        }
    };

    _exports.courierDeliveryMethodModalState = courierDeliveryMethodModalState;

    var manualVerificationModalVisible = function manualVerificationModalVisible() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.DO_CHECKOUT_STEP_START:
            case ACTIONS.DO_CHECKOUT_STEP_DONE:
            case ACTIONS.CHECKOUT_ERROR_MANUAL_DISMISS:
                return false;

            case ACTIONS.DO_CHECKOUT_STEP_ERROR:
                return (0, _utils.hasManualVerificationErrors)(action);

            case ACTIONS.SET_MANUAL_VERIFICATION_MODAL_VISIBILITY:
                return action.visible;

            default:
                return state;
        }
    };

    _exports.manualVerificationModalVisible = manualVerificationModalVisible;
    var warningModalDefaultState = {
        visible: false,
        descriptionKey: _EmailWarningDescriptionEnum.default.DEFAULT
    };

    var emailWarningModalState = function emailWarningModalState() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : warningModalDefaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SHOW_EMAIL_WARNING_MODAL:
                return {
                    visible: true,
                        descriptionKey: action.descriptionKey
                };

            case ACTIONS.HIDE_EMAIL_WARNING_MODAL:
                return _objectSpread({}, state, {
                    visible: false
                });

            default:
                return state;
        }
    };

    _exports.emailWarningModalState = emailWarningModalState;

    var fixCartRefreshResult = function fixCartRefreshResult() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        switch (action.type) {
            case ACTIONS.SET_FIX_CART_REFRESH_RESULT:
                return action.data;

            default:
                return state;
        }
    };

    _exports.fixCartRefreshResult = fixCartRefreshResult;

    var fullPageLoader = function fullPageLoader() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.CONSENT_DOCUMENTS_LOADER:
                return action.data;

            default:
                return state;
        }
    };

    _exports.fullPageLoader = fullPageLoader;

    var payment = function payment() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.GET_PAYMENT_DATA_START:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.GET_PAYMENT_DATA_DONE:
                return _objectSpread({}, state, {
                    loading: false,
                    finished: true
                });

            default:
                return state;
        }
    };

    _exports.payment = payment;

    var allDocuments = function allDocuments() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
        var action = arguments.length > 1 ? arguments[1] : undefined;

        switch (action.type) {
            case ACTIONS.SAVE_ALL_DOCUMENTS_STARTED:
                return _objectSpread({}, state, {
                    requested: true,
                    loading: true
                });

            case ACTIONS.SAVE_ALL_DOCUMENTS_FINISHED:
                return _objectSpread({}, state, {
                    loading: false,
                    finished: true
                });

            default:
                return state;
        }
    };

    _exports.allDocuments = allDocuments;
});
//# sourceMappingURL=metadata.js.map