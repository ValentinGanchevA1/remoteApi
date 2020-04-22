import {
    createRequestActionTypes
} from "../core/utils/request-actions-creator";

export const DO_CHECKOUT_STEP_START = "checkout/doCheckoutStep/Start";
export const DO_CHECKOUT_STEP_DONE = "checkout/doCheckoutStep/Done";
export const DO_CHECKOUT_STEP_ERROR = "checkout/doCheckoutStep/Error";

export const REGISTER_NEXT_STEP_CONDITION = "checkout/condition/register";
export const UNREGISTER_NEXT_STEP_CONDITION = "checkout/condition/unregister";

export const CHECKOUT_ERROR_CALLBACK_DISMISS = "checkout/dismissError/callback";
export const CHECKOUT_ERROR_AUTH_DISMISS = "checkout/dismissError/auth";
export const CHECKOUT_ERROR_CV_DISMISS = "checkout/dismissError/cv";
export const CHECKOUT_ERROR_BACKEND_DISMISS = "checkout/dismissError/backendValidation";
export const CHECKOUT_ERROR_MANUAL_DISMISS = "checkout/dismissError/manual";

export const CHECKOUT_FBB_SERVICES_DISMISS = "checkout/dismiss/fbbServices";
export const SET_SELECTED_DESIGNATION_NUMBER = "checkout/selected/designationNumber";
export const SET_SELECTED_SERVICE_INSTANCE_ID = "checkout/selected/serviceInstanceId";

export const SET_FBB_SERVICE_DATA = "checkout/set/fbbServiceData";

export const GOTO_CHECKOUT_NEXT = "checkout/goto/next";
export const GOTO_CHECKOUT_PREVIOUS = "checkout/goto/previous";
export const GOTO_CHECKOUT_CART = "checkout/goto/cart";
export const GOTO_FIX_DISPATCHER = "checkout/goto/fix/dispatcher";
export const GOTO_MAGNUM_DEVICE_LIST = "magnum/goto/deviceList";

export const CHANGE_CUSTOMER_DATA_FORM_FIELD = "checkout/customer/data/change";
export const CHANGE_INVOICE_EMAIL_MAPPING = "checkout/customer/data/invoiceEmailMapping/change";
export const CHANGE_CUSTOMER_CONTACT_FORM_FIELD = "checkout/customer/contact/change";
export const CHANGE_DELIVERY_CONTACT_FORM_FIELD = "checkout/delivery/form/contact/change";
export const CHANGE_COURIER_PHONE_CONTACT = "checkout/delivery/contact/change";
export const SWITCH_CUSTOMER_EDIT_MODE = "checkout/customer/editMode/switch";
export const CLEAR_CART_CUSTOMER_REQUESTED = "checkout/customer/clear/requested";
export const SWITCH_EDIT_ID_NUMBER_MODE = "checkout/customer/idNumberEditMode/switch";
export const GET_BPG_DATA_DONE = "checkout/customer/getBpgData/done";
export const GET_BPG_DATA_START = "checkout/customer/getBpgData/start";


export const CHANGE_CUSTOMER_MAINADDRESS_FORM_FIELD = "checkout/customer/address/main/change";
export const CHANGE_CUSTOMER_CORRESPONDENCEADDRESS_FORM_FIELD = "checkout/customer/address/correspondence/change";
export const CHANGE_DELIVERY_ADDRESS_FORM_FIELD = "checkout/delivery/address/change";
export const CHANGE_DELIVERY_COURIER_MESSAGE = "checkout/delivery/courier/message/change";
export const CHANGE_ADDRESS = "checkout/address/change";

export const GET_CART_MNP_DATA_START = "checkout/get/mnp/cart/start";
export const GET_CART_MNP_DATA_DONE = "checkout/get/mnp/cart/done";
export const CHANGE_CUSTOMER_MNP_DATA_FORM_FIELD = "checkout/customer/mnpData/change";
export const CHANGE_BUSINESS_MNP_ADDRESS_FORM_FIELD = "checkout/customer/mnpData/businessAddress/change";
export const CHANGE_CUSTOMER_MNP_DATA_CONTACT_METHOD = "checkout/customer/mnpData/contactMethod/change";
export const CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_MODE = "checkout/customer/mnpData/movementMode/change";
export const CHANGE_CUSTOMER_MNP_DATA_MOVEMENT_TIME = "checkout/customer/mnpData/movementTime/change";
export const SWITCH_SAME_MNP_DATA = "checkout/customer/mnpData/same/switch";

export const GET_CART_CUSTOMER_START = "checkout/get/customer/start";
export const GET_CART_CUSTOMER_DONE = "checkout/get/customer/done";

export const GET_CUSTOMER_START = "get/customer/start";
export const GET_CUSTOMER_DONE = "get/customer/done";

export const GET_CART_REPRESENTATIVE_DATA_START = "checkout/get/representative/start";
export const GET_CART_REPRESENTATIVE_DATA_DONE = "checkout/get/representative/done";

export const GET_CART_DELIVERY_DATA_START = "checkout/get/delivery/start";
export const GET_CART_DELIVERY_DATA_DONE = "checkout/get/delivery/done";

export const GET_PAYMENT_DATA_START = "checkout/get/payment/start";
export const GET_PAYMENT_DATA_DONE = "checkout/get/payment/done";

export const GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_START = "checkout/get/installation/availableTimeSlots/start";
export const GET_CART_INSTALLATION_AVAILABLE_TIME_SLOTS_DATA_DONE = "checkout/get/installation/availableTimeSlots/done";
export const SELECT_INSTALLATION_TIME_SLOT = "checkout/installation/availableTimeSlots/select";
export const CHANGE_INSTALLATION_COMMENT = "checkout/installation/comment/change";
export const SELECT_INSTALLATION_SLOT_DESCRIPTION = "SELECTED_INSTALLATION_SLOT_DESCRIPTION";
export const SHOW_INSTALLATION_SLOT_ERROR = "SHOW_INSTALLATION_SLOT_ERROR";
export const INSTALLATION_SLOT_FORCE_REFRESH = "INSTALLATION_SLOT_FORCE_REFRESH";

export const GET_CART_CONSENTS_START = "checkout/get/consents/cart/start";
export const GET_CART_CONSENTS_DONE = "checkout/get/consents/cart/done";
export const GET_CONSENTS_START = "checkout/get/consents/start";
export const GET_CONSENTS_DONE = "checkout/get/consents/done";
export const CHANGE_CONSENTS_CONTACT_DATA = "checkout/consents/contact/change";
export const CHANGE_CONSENT_STATE = "checkout/consents/state/change";
export const MAKE_CONSENT_READONLY = "checkout/consents/readonly";
export const UPDATE_CONSENT_STATE_START = "checkout/consents/state/update/start";
export const UPDATE_CONSENT_STATE_DONE = "checkout/consents/state/update/done";
export const REGISTER_CMS_CONFIGURATION = "checkout/consents/cms/config";
export const REGISTER_VERIFICATION_CONSENT_TYPE = "checkout/consents/verificationConsentType";
export const PUSH_TO_MODIFY_CONSENTS_IN_CART_QUEUE = "checkout/consents/pushToModifyConsentsInCartQueue";
export const SET_MODIFY_CONSENTS_IN_CART_QUEUE = "checkout/consents/setModifyConsentsInCartQueue";
export const CUSTOMER_SELECTED = "checkout/customer/selected";

export const PROCESS_CHANGED = "checkout/customer/process/changed";

export const FETCH_DELIVERY_METHODS_DONE = "checkout/deliveryMethods/fetch/done";
export const FETCH_DOCUMENT_DELIVERY_METHODS_DONE = "checkout/document/deliveryMethods/fetch/done";
export const FILTER_DELIVERY_METHODS = "checkout/deliveryMethods/filter";

export const SELECT_DELIVERY_METHOD_WITHOUT_CHANGING_PAYMENT_METHOD = "checkout/deliveryMethodsWithoutChangingPaymentMethod/select";
export const SELECT_DELIVERY_METHOD = "checkout/deliveryMethods/select";
export const SELECT_DELIVERY_METHOD_FOR_DEVICES = "checkout/deliveryMethodsForDevices/select";
export const SELECT_DELIVERY_METHODS = "checkout/deliveryMethods/selectMethod";
export const SELECT_DOCUMENTS_DELIVERY_METHOD = "checkout/documents/deliveryMethods/selectMethod";
export const SELECT_AGREEMENT_TYPE = "checkout/deliveryMethods/agreementType";
export const SET_IS_DIGITAL_AGREEMENT_DEFAULT = "checkout/isDigitalAgreementDefault/set";
export const SET_DELIVERY_EMAIL = "checkout/delivery/emailAddress";
export const SET_EMAIL_CONFIRMATION_MODAL_STATE = "checkout/delivery/emailAddress/modal/state";
export const SET_EMAIL_CONFIRMATION_MODAL_ACCEPTED = "checkout/delivery/emailAddress/modal/accepted";
export const FETCH_NEAREST_POINTS_OF_SALE_DONE = "checkout/deliveryMethods/fetch/nearestPoses/done";
export const FETCH_NEAREST_POINTS_OF_SALE_ERROR = "checkout/deliveryMethods/fetch/nearestPoses/error";
export const SELECT_POINT_OF_SALE = "checkout/deliveryMethods/select/pointOfSale";
export const CHANGE_POINT_OF_SALE_CITY = "checkout/deliveryMethods/change/pointOfSale/city";
export const SET_POINT_OF_SALE = "checkout/deliveryMethods/set/pointOfSale";

export const SELECT_PAYMENT_METHOD = "checkout/payment/methods/select";

export const SELECT_CV_DOCUMENTS_LIST = "checkout/cvDocuments/methods/selectList";
export const SELECT_CV_DOCUMENT = "checkout/cvDocuments/select/selectedDocument";
export const SELECT_CUSTOMER_WORK_PHONE_NUMBER = "checkout/cvDocuments/select/selectedCustomerWorkPhoneNumber";

export const GET_PERIOD_START = "checkout/period/start";
export const GET_PERIOD_DONE = "checkout/period/done";

const FETCH_ZIP_CODE_FROM_WWT_PREFIX = "checkout/FETCH_ZIP_CODE_FROM_WWT";
export const fetchZipCodeFromWWT = createRequestActionTypes(FETCH_ZIP_CODE_FROM_WWT_PREFIX);


const GET_SELECTED_WWT_ADDRESS_PREFIX = "wwt/selectedAddress/";
export const GET_SELECTED_WWT_ADDRESS_ACTION_TYPES = createRequestActionTypes(GET_SELECTED_WWT_ADDRESS_PREFIX);

const GET_FUTURE_INVESTMENT_ADDRESS_PREFIX = "futureInvestment/wwt/selectedAddress/";
export const GET_FUTURE_INVESTMENT_ADDRESS_ACTION_TYPES = createRequestActionTypes(GET_FUTURE_INVESTMENT_ADDRESS_PREFIX);

const GET_FUTURE_INVESTMENT_CONSENT_PREFIX = "consent/";
export const GET_FUTURE_INVESTMENT_CONSENT_ACTION_TYPES = createRequestActionTypes(GET_FUTURE_INVESTMENT_CONSENT_PREFIX);

const GET_FUTURE_INVESTMENT_OFFER_PREFIX = "offer/";
export const GET_FUTURE_INVESTMENT_OFFER_ACTION_TYPES = createRequestActionTypes(GET_FUTURE_INVESTMENT_OFFER_PREFIX);

const REGISTER_LEAD_PREFIX = "lead/register/";
export const REGISTER_LEAD_ACTION_TYPES = createRequestActionTypes(REGISTER_LEAD_PREFIX);

export const SELECT_WWT_ADDRESS = "wwt/selectedAddress/";

export const REGISTER_CURRENT_STEP_ID = "checkout/step/register/id";

export const SELECT_APU = "checkout/apu/select";
export const START_LOAD_APU = "checkout/apu/loader/start";
export const STOP_LOAD_APU = "checkout/apu/loader/stop";

export const CONSENT_DOCUMENTS_LOADER = "checkout/consents/consentDocumentsLoader";
export const CONSENT_PRINT_DOCUMENTS = "checkout/consents/printDocuments";
export const REQUIRED_CONSENT_CHANGED = "checkout/consents/required/changed";

export const CHANGE_REPRESENTATIVE_FORM_FIELD = "checkout/representative/data/change";
export const CLEAR_REPRESENTATIVE_FORM_FIELD_ERRORS = "checkout/representative/errors/sclear";
export const REMOVE_REPRESENTATIVE = "checkout/representative/remove";

export const CHANGE_GRANTOR_FORM_FIELD = "checkout/grantor/data/change";
export const REMOVE_GRANTOR = "checkout/grantor/remove";

export const SET_REPRESENTATION_MODE = "checkout/representationMode/set";
export const SET_GRANTING_DATE = "checkout/grantingDate/set";

export const CONSENT_TYPE_IN_PRINT_CONSENTS_VALIDATOR = "checkout/consents/print/validator/consentType";

export const CHANGE_TELESALES_FORM_FIELD = "checkout/telesales/change";
export const CHANGE_DEBT_REPAYMENT_FORM_FIELD = "checkout/debtRepayment/change";

export const CHANGE_DOCUMENTS_CONFIRMATION = "checkout/consents/documentsConfirmation/change";
export const SET_PERMANENTLY_AGREED_CONSENTS_VISIBLE_FOR_GROUP = "checkout/consents/permanentlyAgreed/group/visible";

export const FETCH_POS_PICKUP_CITIES_DONE = "checkout/delivery/pickup/pos/cities/done";
export const FETCH_POS_PICKUP_AVAILABILITY_DONE = "checkout/delivery/pickup/pos/availabilty/done";
export const GET_LAST_PICKUP_POS = "checkout/delivery/pickup/pos/last";
export const FETCH_POS_SIM_CARD_TYPES_DONE = "checkout/simcard/type/fetch/done";
export const CHANGE_PICKUP_SERIAL_NUMBER_VALUE = "checkout/pickup/serialNumber/change";
export const CHANGE_PICKUP_SIM_CARD_TYPE = "checkout/pickup/simcard/type/change";
export const FETCH_PICKUP_SERIAL_NUMBERS_DONE = "checkout/pickup/serialNumber/fetch/done";
export const UPDATE_SERIAL_NUMBERS_START = "checkout/pickup/serialNumbers/order/update/start";
export const UPDATE_SERIAL_NUMBERS_DONE = "checkout/pickup/serialNumbers/order/update/done";
export const PICKUP_NAVIGATION_NEXT_START = "checkout/pickup/navigation/next/start";
export const PICKUP_NAVIGATION_NEXT_DONE = "checkout/pickup/navigation/next/done";
export const PICKUP_ORDER_ACTIVATION_START = "checkout/pickup/activation/start";
export const PICKUP_ORDER_ACTIVATION_DONE = "checkout/pickup/activation/done";
export const PICKUP_GENERAL_ERROR = "checkout/pickup/error";
export const PICKUP_GENERAL_ERROR_DISMISS = "checkout/pickup/error/dismiss";
export const PICKUP_LAST_ORDER_DATA = "checkout/pickup/order/last";
export const PICKUP_ORDER_PAYMENT_STATUS_ERROR = "checkout/goodsOrders/payment/status/error";
export const PICKUP_DOCUMENTS_DONE = "checkout/pickup/documents/done";
export const PICKUP_SERIAL_NUMBERS_VALIDATION = "checkout/pickup/serialNumbers/validation/check";
export const PICKUP_DOCUMENT_DOWNLOAD_DONE = "checkout/pickup/document/download/done";
export const PICKUP_DOCUMENT_DOWNLOAD_START = "checkout/pickup/document/download/start";
export const PICKUP_DOCUMENT_DOWNLOAD_ERROR = "checkout/pickup/document/download/error";
export const PICKUP_SERIAL_NUMBERS_ERROR = "checkout/pickup/serialNumber/error";
export const PICKUP_SERIAL_NUMBERS_ERROR_DISMISS = "checkout/pickup/serialNumber/error/dismiss";


export const FETCH_PARCEL_LOCKER_LIST = "FETCH_PARCEL_LOCKER_LIST";
export const FETCH_PARCEL_LOCKER_CITY_LIST = "FETCH_PARCEL_LOCKER_CITY_LIST";
export const CHANGE_PARCEL_LOCKER_CITY = "CHANGE_PARCEL_LOCKER_CITY";
export const SELECT_PARCEL_LOCKER = "SELECT_PARCEL_LOCKER";
export const SET_LAST_PARCEL_LOCKER_POS = "SET_LAST_PARCEL_LOCKER_POS";
export const GET_LAST_PARCEL_LOCKER_POS = "checkout/delivery/pickup/pos/last";

export const CHECK_GOODS_ORDERS_PAYMENT_STATUS_DONE = "checkout/goodsOrders/payment/status/done";
export const CANCEL_GOODS_ORDER_DONE = "checkout/goodsOrder/order/cancel";
export const CHANGE_PAYMENT_OVERRIDE = "checkout/goodsOder/payment/override";
export const PRINT_REQUIRED_DOCUMENTS_DONE = "checkout/goodsOrder/documents/print/required/done";

export const FETCH_MINI_CART = "cart/mini/fetch";
export const FETCH_SIM_CARD_TYPES_DONE = "checkout/sim/simCardType/fetch/done";
export const CHANGE_SERIAL_NUMBER_FIELD = "checkout/change/serialNumber";
export const CHANGE_SIM_CARD_TYPE = "checkout/change/simCardType";
export const SIM_CARD_TYPE_CHANGING = "checkout/simCardType/changing";
export const CHANGE_WAREHOUSE_TYPE = "checkout/change/warehouse";
export const SERIAL_NUMBER_VERIFICATION_ERROR = "checkout/verify/error";
export const VERIFY_SERIAL_NUMBERS_STARTED = "checkout/verify/serialNumbers/started";
export const VERIFY_SERIAL_NUMBERS = "checkout/verify/serialNumbers";
export const VERIFY_SERIAL_NUMBERS_ERROR = "checkout/verify/serialNumbers/error";
export const VERIFY_DUPLICATE_SERIAL_NUMBERS = "checkout/verify/serialNumbers/duplicate";
export const GET_SAP_FIORI_LINKS_DONE = "checkout/verify/getSapFioriLinks/done";
export const GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK_DONE = "checkout/verify/getSapFioriCorrectiveInvoiceLink/done";
export const CANCEL_ORDER_DONE = "checkout/verify/cancelOrder/done";
export const CANCEL_ORDER_ERROR = "checkout/verify/cancelOrder/error";
export const UNLOCK_SALE_STARTED = "checkout/verify/unlockSale/started";
export const UNLOCK_SALE_DONE = "checkout/verify/unlockSale/done";
export const UNLOCK_SALE_STATUS_CHECK_DONE = "checkout/verify/unlockSale/statusCheck/done";
export const OPEN_ORDER_CANCEL_POPUP = "checkout/verify/cancelOrder/popup";
export const OPEN_ORDER_CANCEL_POPUP_FROM_NAV_COMPONENT = "checkout/verify/cancelOrder/popup/navComponent";
export const CLOSE_ORDER_CANCEL_ERROR_POPUP = "checkout/verify/cancelOrder/error/popup/close";
export const PAYMENT_AND_FISCALIZATION = "checkout/verify/paymentAndFiscalization/done";
export const CHECK_PAYMENT_STATUS_START = "checkout/verify/paymentStatusCheck/start";
export const PAYMENT_STATUS_CHECK_DONE = "checkout/verify/paymentStatusCheck/done";
export const PAYMENT_OVERRIDE_DONE = "checkout/verify/paymentOverride/done";
export const INITIAL_CONFIGURATION_SET_DONE = "checkout/verify/initialConfiguration/done";
export const PRINT_ORDER_NUMBER_DONE = "checkout/print/sapOrderNumber/done";
export const PRINT_INVOICE_NUMBER_DONE = "checkout/print/sapInvoiceNumber/done";
export const CHANGE_COMMENT_DONE = "checkout/changeComment/done";
export const CHANGE_SHOW_COMMENT_DONE = "checkout/show/changeComment/done";
export const SET_SERIAL_NUMBER_INITIAL_STATE = "checkout/verify/initial/state";
export const CLEAR_SAP_ERROR_MESSAGES = "checkout/clearSapErrorMessages";

export const CHANGE_BILLING_ACCOUNT_FORM_FIELD = "checkout/billingAccount/form/change";
export const SET_BILLING_ACCOUNT_FORM_VISIBILITY = "checkout/billingAccount/form/visible/set";
export const SET_CREATE_NEW_BILLING_ACCOUNT = "checkout/billingAccount/create/set";
export const SET_SELECTED_BILLING_ACCOUNT_MOBILE = "checkout/billingAccount/set/mobile";
export const SET_SELECTED_BILLING_ACCOUNT_FIX = "checkout/billingAccount/set/fix";
export const GET_BILLING_ACCOUNT_FORM_DATA_START = "checkout/billingAccount/form/get/start";
export const GET_BILLING_ACCOUNT_FORM_DATA_DONE = "checkout/billingAccount/form/get/done";
export const SET_BILLING_ACCOUNTS = "checkout/billingAccounts/set";
export const GET_BILLING_ACCOUNT_CONTRACTS = "checkout/billingAccounts/contract/set";
export const GET_BILLING_ACCOUNT_CONTRACTS_START = "checkout/billingAccounts/contract/start";
export const SET_BILLING_ACCOUNT_CONTRACTS_VISIBILITY = "checkout/billingAccounts/contract/visible";
// assist mode

export const ASSIST_MODE_GET = "checkout/assistmode/get";
export const ASSIST_MODE_DISMISS = "checkout/assistmode/dismiss";
export const OPEN_ASSIST_MODE_MODAL = "checkout/assistmode/modal/open";
export const CLOSE_ASSIST_MODE_MODAL = "checkout/assistmode/modal/close";
export const OPEN_CONFIRMATION_MODE_MODAL = "checkout/assistmode/confirmation/modal/open";
export const CLOSE_CONFIRMATION_MODE_MODAL = "checkout/assistmode/confirmation/modal/close";
export const EMPLOYEE_LIST_GET = "checkout/assistmode/employees/get";
export const UPDATE_FILTERS = "checkout/assistmode/employees/filter/get";
export const EMPLOYEE_LIST_START = "checkout/assistmode/employees/get/start";
export const EMPLOYEE_LIST_DONE = "checkout/assistmode/employees/get/done";
export const SELECTED_EMPLOYEE_SET = "checkout/assistmode/employees/selected/set";
export const EMPLOYEE_LIST_SIZE_SET = "checkout/assistmode/employees/page/set";
export const EMPLOYEE_LIST_SEARCH_BUTTON_ENABLED = "checkout/assistmode/employees/search/button/set";
export const ASSIST_MODE_STATE_START = "checkout/assistmode/get/start";
export const ASSIST_MODE_STATE_DONE = "checkout/assistmode/get/done";
export const OPEN_CONFIRMATION_LEAVE_MODE_MODAL = "checkout/assistmode/confirmation/leave/modal/open";
export const CLOSE_CONFIRMATION_LEAVE_MODE_MODAL = "checkout/assistmode/confirmation/leave/modal/close";

export const SET_MANUAL_VERIFICATION_MODAL_VISIBILITY = "checkout/manualVerification/modal/visible";

export const SHOW_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION = "SHOW_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION";
export const CLOSE_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION = "CLOSE_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION";
export const ACCEPT_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION = "ACCEPT_EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_ACTION";
export const EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_MOUNTED_ACTION = "EARLIER_INSTALLATION_CONSENT_NOT_ACCEPTED_MODAL_MOUNTED_ACTION";

export const COURIER_DELIVERY_METHOD_MODAL_MOUNTED = "COURIER_DELIVERY_METHOD_MODAL_MOUNTED";
export const SHOW_COURIER_DELIVERY_METHOD_MODAL = "SHOW_COURIER_DELIVERY_METHOD_MODAL";
export const HIDE_COURIER_DELIVERY_METHOD_MODAL = "HIDE_COURIER_DELIVERY_METHOD_MODAL";
export const SET_COURIER_DELIVERY_METHOD_MODAL_STATE = "SET_COURIER_DELIVERY_METHOD_MODAL_STATE";
export const SHOW_EMAIL_WARNING_MODAL = "SHOW_EMAIL_WARNING_MODAL";
export const HIDE_EMAIL_WARNING_MODAL = "HIDE_EMAIL_WARNING_MODAL";

export const RETURN_DOCUMENT_LOADER = "RETURN_DOCUMENT_LOADER";

export const FRONT_VALIDATION = "checkout/frontend/validation";
export const REMOVE_STREET = "checkout/streetName/remove";
export const CONSENT_GROUP_EXPANDED = "checkout/consentGroup/expanded";

export const CLOSE_ERROR_MODAL = "CLOSE_ERROR_MODAL";
export const REGISTER_AGREEMENT_VALIDATION_COMPONENT = "REGISTER_AGREEMENT_VALIDATION_COMPONENT";
export const CLOSE_AGREEMENT_VALIDATION_MODAL = "CLOSE_AGREEMENT_VALIDATION_MODAL";
export const OPEN_AGREEMENT_VALIDATION_MODAL = "OPEN_AGREEMENT_VALIDATION_MODAL";


export const UPDATE_DELIVERY_PHONE_NUMBER = "UPDATE_DELIVERY_PHONE_NUMBER";
export const UPDATE_DAP_PHONE_NUMBER = "UPDATE_DAP_PHONE_NUMBER";

export const SET_AGREEMENT_INTRODUCTION_STATUS = "checkout/agreement/introduction/status/set";
export const SET_AGREEMENT_INTRODUCTION_STATUSES = "checkout/agreement/introduction/statuses/set";
export const SET_AGREEMENT_INTRODUCTION_DOCUMENT_LOADING = "checkout/agreement/introduction/document/loading/set";
export const SET_DOCUMENTS_TO_MERGE_PER_BUNDLE = "checkout/agreement/introduction/documentsToMergePerBundle/set";

export const SET_FIX_CART_REFRESH_RESULT = "checkout/fix/cartRefreshResult";

export const SET_ID_VERIFICATION_BANKS = "checkout/idVerification/banks/set";
export const SET_ID_VERIFICATION_SELECTED_BANK_ID = "checkout/idVerification/selectedBankId/set";
export const SET_ID_VERIFICATION_RESULT = "checkout/idVerification/verificationResult/set";

export const REGISTER_COMPONENT_PROPS_VALUE = "checkout/componentPropsValue/register";

export const SET_INITIAL_NATIONALITY = "checkout/customerData/initialNationality";

export const SET_FOREIGNER = "checkout/customerData/setForeigner";

export const SAVE_ALL_DOCUMENTS_STARTED = "checkout/documents/save/all/started";
export const SAVE_ALL_DOCUMENTS_FINISHED = "checkout/documents/save/all/finished";

export const CONSENTS_GET_STATUS = "CONSENTS_GET_STATUS";
export const CONSENTS_CREATE_AND_SEND_DOCUMENT = "CONSENTS_CREATE_AND_SEND_DOCUMENT";
export const ENTER_CONSENTS_EMAIL_ADDRESS = "ENTER_CONSENTS_EMAIL_ADDRESS";
export const ENTER_CONSENTS_PHONE_NUMBER = "ENTER_CONSENTS_PHONE_NUMBER";
export const ENTER_CONSENTS_ACCEPTED_ACKNOWLEDGMENTS = "ENTER_CONSENTS_ACCEPTED_ACKNOWLEDGMENTS";