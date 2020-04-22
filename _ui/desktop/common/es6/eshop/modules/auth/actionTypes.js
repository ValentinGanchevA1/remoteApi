import {
    createRequestActionTypes
} from "../core/utils/request-actions-creator";

export const DO_SMS_AUTHORIZATION = "authorization/do_sms_authorization";

export const AUTHORIZATION_MSISDN_OR_LOGIN = "authorization/msisdnOrLogin";
export const AUTHORIZATION_MODAL_FOR_PROCESS_ON = "authorization/sms_modal_on";
export const AUTHORIZATION_MODAL_FOR_PROCESS_OFF = "authorization/sms_modal_off";
export const AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON = "authorization/sms_modal_account_on";
export const AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF = "authorization/sms_modal_account_off";
export const AUTHORIZATION_SHOW_SECTION = "authorization/show_section"

export const AUTHORIZATION_CHOOSE_ACCOUNT_ON = "authorization/choose_account_on";
export const AUTHORIZATION_CHOOSE_ACCOUNT_OFF = "authorization/choose_account_off";

export const AUTHORIZATION_CHANGE_ACCOUNT_ON = "authorization/choose_change_on";
export const AUTHORIZATION_CHANGE_ACCOUNT_OFF = "authorization/choose_change_off";


export const AUTHORIZATION_OMMIT_ACCOUNT_AUTH = "authorization/ommit_account_auth";


export const AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING = "authorization/choose_account_existing";
export const AUTHORIZATION_CHOOSE_ACCOUNT_NEW = "authorization/choose_account_new";

export const AUTHORIZATION_ADD_TO_CART_AFTER = "authorization/add_to_cart_after";

export const SHOW_MESSAGE = "authorization/show_message";
export const CLEAR_MESSAGE = "authorization/clear_message";

export const AUTHORIZATION_IS_LOADING_ON = "authorization/loading_on";
export const AUTHORIZATION_IS_LOADING_OFF = "authorization/loading_off";



export const AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA = "authorization/set_logged_customer_data";
export const AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON = "authorization/logout_confirmation_modal_on";
export const AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF = "authorization/logout_confirmation_modal_off";

export const AUTHORIZATION_RETENTION_ALERT_MODAL_ON = "authorization/retention_alert_modal_on";
export const AUTHORIZATION_RETENTION_ALERT_MODAL_OFF = "authorization/retention_alert_modal_off";

export const DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B = "authorization/doRegisterBillingAccountPopupB2B";
export const SET_MOBILE_BILLING_ACCOUNTS = "authorization/set_mobile_billing_accounts";
export const SET_SELECTED_BILLING_ACCOUNT_ID = "authorization/set_selected_billing_account_id";

export const SET_ACCOUNT_BY_MSISDN = "authorization/set_account_by_msisdn";

export const SET_SALES_CHANNEL = "authorization/set_sales_channel";

export const AUTHORIZATION_CLEAR_CART_CHANGED_FLAG = "authorization/clear_cart_changed_flag";

const INCOMPATIBLE_MARKET_ACTION = "authorization/incompatible_market_action_request";
export const incompatibleMarketCheck = createRequestActionTypes(INCOMPATIBLE_MARKET_ACTION);

export const MARKET_IS_INCOMPATIBLE = "authorization/MARKET_IS_INCOMPATIBLE";

export const MARKET_IS_COMPATIBLE = "authorization/MARKET_IS_COMPATIBLE";
export const IS_PESEL_AND_ADDRESS_VERIFIED = "authorization/IS_PESEL_AND_ADDRESS_VERIFIED";
export const IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED = "authorization/IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED";

export const STAY_LOVE_RETENTION_MSISDN = "authorization/STAY_LOVE_RETENTION_MSISDN";