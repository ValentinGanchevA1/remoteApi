define(["exports", "../core/utils/request-actions-creator"], function(_, O) {
    "use strict";
    Object.defineProperty(_, "__esModule", {
        value: !0
    }), _.STAY_LOVE_RETENTION_MSISDN = _.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED = _.IS_PESEL_AND_ADDRESS_VERIFIED = _.MARKET_IS_COMPATIBLE = _.MARKET_IS_INCOMPATIBLE = _.incompatibleMarketCheck = _.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG = _.SET_SALES_CHANNEL = _.SET_ACCOUNT_BY_MSISDN = _.SET_SELECTED_BILLING_ACCOUNT_ID = _.SET_MOBILE_BILLING_ACCOUNTS = _.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B = _.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF = _.AUTHORIZATION_RETENTION_ALERT_MODAL_ON = _.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF = _.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON = _.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA = _.AUTHORIZATION_IS_LOADING_OFF = _.AUTHORIZATION_IS_LOADING_ON = _.CLEAR_MESSAGE = _.SHOW_MESSAGE = _.AUTHORIZATION_ADD_TO_CART_AFTER = _.AUTHORIZATION_CHOOSE_ACCOUNT_NEW = _.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING = _.AUTHORIZATION_OMMIT_ACCOUNT_AUTH = _.AUTHORIZATION_CHANGE_ACCOUNT_OFF = _.AUTHORIZATION_CHANGE_ACCOUNT_ON = _.AUTHORIZATION_CHOOSE_ACCOUNT_OFF = _.AUTHORIZATION_CHOOSE_ACCOUNT_ON = _.AUTHORIZATION_SHOW_SECTION = _.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF = _.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON = _.AUTHORIZATION_MODAL_FOR_PROCESS_OFF = _.AUTHORIZATION_MODAL_FOR_PROCESS_ON = _.AUTHORIZATION_MSISDN_OR_LOGIN = _.DO_SMS_AUTHORIZATION = void 0;
    _.DO_SMS_AUTHORIZATION = "authorization/do_sms_authorization";
    _.AUTHORIZATION_MSISDN_OR_LOGIN = "authorization/msisdnOrLogin";
    _.AUTHORIZATION_MODAL_FOR_PROCESS_ON = "authorization/sms_modal_on";
    _.AUTHORIZATION_MODAL_FOR_PROCESS_OFF = "authorization/sms_modal_off";
    _.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON = "authorization/sms_modal_account_on";
    _.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF = "authorization/sms_modal_account_off";
    _.AUTHORIZATION_SHOW_SECTION = "authorization/show_section";
    _.AUTHORIZATION_CHOOSE_ACCOUNT_ON = "authorization/choose_account_on";
    _.AUTHORIZATION_CHOOSE_ACCOUNT_OFF = "authorization/choose_account_off";
    _.AUTHORIZATION_CHANGE_ACCOUNT_ON = "authorization/choose_change_on";
    _.AUTHORIZATION_CHANGE_ACCOUNT_OFF = "authorization/choose_change_off";
    _.AUTHORIZATION_OMMIT_ACCOUNT_AUTH = "authorization/ommit_account_auth";
    _.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING = "authorization/choose_account_existing";
    _.AUTHORIZATION_CHOOSE_ACCOUNT_NEW = "authorization/choose_account_new";
    _.AUTHORIZATION_ADD_TO_CART_AFTER = "authorization/add_to_cart_after";
    _.SHOW_MESSAGE = "authorization/show_message";
    _.CLEAR_MESSAGE = "authorization/clear_message";
    _.AUTHORIZATION_IS_LOADING_ON = "authorization/loading_on";
    _.AUTHORIZATION_IS_LOADING_OFF = "authorization/loading_off";
    _.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA = "authorization/set_logged_customer_data";
    _.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON = "authorization/logout_confirmation_modal_on";
    _.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF = "authorization/logout_confirmation_modal_off";
    _.AUTHORIZATION_RETENTION_ALERT_MODAL_ON = "authorization/retention_alert_modal_on";
    _.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF = "authorization/retention_alert_modal_off";
    _.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B = "authorization/doRegisterBillingAccountPopupB2B";
    _.SET_MOBILE_BILLING_ACCOUNTS = "authorization/set_mobile_billing_accounts";
    _.SET_SELECTED_BILLING_ACCOUNT_ID = "authorization/set_selected_billing_account_id";
    _.SET_ACCOUNT_BY_MSISDN = "authorization/set_account_by_msisdn";
    _.SET_SALES_CHANNEL = "authorization/set_sales_channel";
    _.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG = "authorization/clear_cart_changed_flag";
    var A = (0, O.createRequestActionTypes)("authorization/incompatible_market_action_request");
    _.incompatibleMarketCheck = A;
    _.MARKET_IS_INCOMPATIBLE = "authorization/MARKET_IS_INCOMPATIBLE";
    _.MARKET_IS_COMPATIBLE = "authorization/MARKET_IS_COMPATIBLE";
    _.IS_PESEL_AND_ADDRESS_VERIFIED = "authorization/IS_PESEL_AND_ADDRESS_VERIFIED";
    _.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED = "authorization/IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED";
    _.STAY_LOVE_RETENTION_MSISDN = "authorization/STAY_LOVE_RETENTION_MSISDN"
});
//# sourceMappingURL=actionTypes.js.map