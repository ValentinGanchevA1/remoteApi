define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.INVOICE_EMAIL_MAPPING_CHANGE = _exports.INVOICE_EMAIL_CHANGE = _exports.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER = _exports.SELECT_TV_PACKAGES_CHOICE_FILTER = _exports.LOWER_INSTALLMENTS_SUBMITED = _exports.LOWER_INSTALLMENTS_MODAL_CLOSE = _exports.LOWER_INSTALLMENTS_MODAL_OPEN = _exports.HALT_CART_ERROR = _exports.HALT_CART_SUCCESS = _exports.HALT_CART_START = _exports.KDR_SAVED = _exports.KDR_SAVING = _exports.KDR_ERROR = _exports.KDR_NUMBER_CLEAR = _exports.KDR_NUMBER_APPROVE = _exports.KDR_NUMBER_CHANGE = _exports.KDR_CART_DATA = _exports.CONFIRMATION_DEATH_CHANGE = _exports.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE = _exports.OFICES_SERVICES_MODAL_VISIBILITY = _exports.BONUS_MODAL_SHOW_CHANGE = _exports.VAS_MODAL_SHOW_CHANGE = _exports.SET_PRICE_VIEW_NET = _exports.CREATE_NEW_CART = _exports.VOUCHER_ERROR = _exports.APPLY_VOUCHER_DONE = _exports.APPLY_VOUCHER_START = _exports.FIND_APPLICABLE_PRODUCTS_START = _exports.FIND_APPLICABLE_PRODUCTS_DONE = _exports.CLEAR_VOUCHER_DATA = _exports.CHANGE_VOUCHER_CODE = _exports.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = _exports.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = _exports.SET_MANUAL_STATUS = _exports.RESOURCE_MODAL_CLOSE = _exports.RESOURCE_MODAL_OPEN = _exports.CHANGE_SIMCARD_SUCCESS = _exports.SET_SIMCARD = _exports.CHANGE_SIMCARD = _exports.FETCH_SIM_CARDS = _exports.SET_MSISDN = _exports.CHANGE_MSISDN_FAILED = _exports.CHANGE_MSISDN_SUCCESS = _exports.CHANGE_MSISDN = _exports.FETCH_MSISDNS = _exports.FETCH_BUNDLES_PROCESS_TYPE = _exports.UPDATED_CART_CONTENTS = _exports.FETCHING_CONVERGENT_CONFIGURABLES = _exports.SET_TV_PACKAGES = _exports.TV_FILTERED_MODAL_VISIBILITY = _exports.TV_MODAL_VISIBILITY = _exports.FETCHING_FIX_CONFIGURABLES = _exports.UPDATING_MOBILE_VASES = _exports.FETCHING_MOBILE_VASES = _exports.FETCHED_CART = _exports.FETCHED_MINI_CART = _exports.FETCH_CONVERGENT_CONFIGURABLES = _exports.FETCH_FIX_CONFIGURABLES = _exports.FETCH_MOBILE_VASES = _exports.REMOVE_TERMINAL_FROM_CART_BUNDLE = _exports.REMOVE_FROM_CART = _exports.FETCH_MINI_CART = _exports.FETCH_CART = void 0;
    var FETCH_CART = "cart/fetch";
    _exports.FETCH_CART = FETCH_CART;
    var FETCH_MINI_CART = "cart/mini/fetch";
    _exports.FETCH_MINI_CART = FETCH_MINI_CART;
    var REMOVE_FROM_CART = "cart/remove";
    _exports.REMOVE_FROM_CART = REMOVE_FROM_CART;
    var REMOVE_TERMINAL_FROM_CART_BUNDLE = "cart/terminal/mobile/remove";
    _exports.REMOVE_TERMINAL_FROM_CART_BUNDLE = REMOVE_TERMINAL_FROM_CART_BUNDLE;
    var FETCH_MOBILE_VASES = "cart/vas/mobile/fetch";
    _exports.FETCH_MOBILE_VASES = FETCH_MOBILE_VASES;
    var FETCH_FIX_CONFIGURABLES = "cart/vas/fix/fetch";
    _exports.FETCH_FIX_CONFIGURABLES = FETCH_FIX_CONFIGURABLES;
    var FETCH_CONVERGENT_CONFIGURABLES = "cart/vas/convergent/fetch";
    _exports.FETCH_CONVERGENT_CONFIGURABLES = FETCH_CONVERGENT_CONFIGURABLES;
    var FETCHED_MINI_CART = "cart/metadata/minicart";
    _exports.FETCHED_MINI_CART = FETCHED_MINI_CART;
    var FETCHED_CART = "cart/metadata/cart";
    _exports.FETCHED_CART = FETCHED_CART;
    var FETCHING_MOBILE_VASES = "cart/metadata/mobile/vas";
    _exports.FETCHING_MOBILE_VASES = FETCHING_MOBILE_VASES;
    var UPDATING_MOBILE_VASES = "cart/metadata/mobile/vas/update";
    _exports.UPDATING_MOBILE_VASES = UPDATING_MOBILE_VASES;
    var FETCHING_FIX_CONFIGURABLES = "cart/metadata/fix/vas";
    _exports.FETCHING_FIX_CONFIGURABLES = FETCHING_FIX_CONFIGURABLES;
    var TV_MODAL_VISIBILITY = "cart/metadata/fix/tvModal/visibility";
    _exports.TV_MODAL_VISIBILITY = TV_MODAL_VISIBILITY;
    var TV_FILTERED_MODAL_VISIBILITY = "cart/metadata/fix/tvFilteredModal/visibility";
    _exports.TV_FILTERED_MODAL_VISIBILITY = TV_FILTERED_MODAL_VISIBILITY;
    var SET_TV_PACKAGES = "cart/fix/SET_TV_PACKAGES";
    _exports.SET_TV_PACKAGES = SET_TV_PACKAGES;
    var FETCHING_CONVERGENT_CONFIGURABLES = "cart/metadata/convergent/vas";
    _exports.FETCHING_CONVERGENT_CONFIGURABLES = FETCHING_CONVERGENT_CONFIGURABLES;
    var UPDATED_CART_CONTENTS = "cart/metadata/update";
    _exports.UPDATED_CART_CONTENTS = UPDATED_CART_CONTENTS;
    var FETCH_BUNDLES_PROCESS_TYPE = "cart/metadata/fetchbundleproccesstype";
    _exports.FETCH_BUNDLES_PROCESS_TYPE = FETCH_BUNDLES_PROCESS_TYPE;
    var FETCH_MSISDNS = "cart/resource/msisdn/fetch";
    _exports.FETCH_MSISDNS = FETCH_MSISDNS;
    var CHANGE_MSISDN = "cart/resource/msisdn/change";
    _exports.CHANGE_MSISDN = CHANGE_MSISDN;
    var CHANGE_MSISDN_SUCCESS = "cart/resource/msisdn/change/success";
    _exports.CHANGE_MSISDN_SUCCESS = CHANGE_MSISDN_SUCCESS;
    var CHANGE_MSISDN_FAILED = "cart/resource/msisdn/change/failed";
    _exports.CHANGE_MSISDN_FAILED = CHANGE_MSISDN_FAILED;
    var SET_MSISDN = "cart/resource/msisdn/set";
    _exports.SET_MSISDN = SET_MSISDN;
    var FETCH_SIM_CARDS = "cart/simCard/fetch";
    _exports.FETCH_SIM_CARDS = FETCH_SIM_CARDS;
    var CHANGE_SIMCARD = "cart/resource/simcard/change";
    _exports.CHANGE_SIMCARD = CHANGE_SIMCARD;
    var SET_SIMCARD = "cart/resource/simcard/set";
    _exports.SET_SIMCARD = SET_SIMCARD;
    var CHANGE_SIMCARD_SUCCESS = "cart/resource/simcard/change/success";
    _exports.CHANGE_SIMCARD_SUCCESS = CHANGE_SIMCARD_SUCCESS;
    var RESOURCE_MODAL_OPEN = "cart/resource/resource/modal/open";
    _exports.RESOURCE_MODAL_OPEN = RESOURCE_MODAL_OPEN;
    var RESOURCE_MODAL_CLOSE = "cart/resource/resource/modal/close";
    _exports.RESOURCE_MODAL_CLOSE = RESOURCE_MODAL_CLOSE;
    var SET_MANUAL_STATUS = "cart/manual/required";
    _exports.SET_MANUAL_STATUS = SET_MANUAL_STATUS;
    var CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = "cart/add/terminal/bundleno/changed";
    _exports.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER;
    var CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = "cart/add/terminal/bundleno/cleared";
    _exports.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER;
    var CHANGE_VOUCHER_CODE = "cart/voucher/changed";
    _exports.CHANGE_VOUCHER_CODE = CHANGE_VOUCHER_CODE;
    var CLEAR_VOUCHER_DATA = "cart/voucher/clear";
    _exports.CLEAR_VOUCHER_DATA = CLEAR_VOUCHER_DATA;
    var FIND_APPLICABLE_PRODUCTS_DONE = "cart/voucher/find/done";
    _exports.FIND_APPLICABLE_PRODUCTS_DONE = FIND_APPLICABLE_PRODUCTS_DONE;
    var FIND_APPLICABLE_PRODUCTS_START = "cart/voucher/find/start";
    _exports.FIND_APPLICABLE_PRODUCTS_START = FIND_APPLICABLE_PRODUCTS_START;
    var APPLY_VOUCHER_START = "cart/voucher/apply/start";
    _exports.APPLY_VOUCHER_START = APPLY_VOUCHER_START;
    var APPLY_VOUCHER_DONE = "cart/voucher/apply/done";
    _exports.APPLY_VOUCHER_DONE = APPLY_VOUCHER_DONE;
    var VOUCHER_ERROR = "cart/voucher/error";
    _exports.VOUCHER_ERROR = VOUCHER_ERROR;
    var CREATE_NEW_CART = "cart/new";
    _exports.CREATE_NEW_CART = CREATE_NEW_CART;
    var SET_PRICE_VIEW_NET = "cart/price/view/net";
    _exports.SET_PRICE_VIEW_NET = SET_PRICE_VIEW_NET;
    var VAS_MODAL_SHOW_CHANGE = "cart/vas/modal/show/change";
    _exports.VAS_MODAL_SHOW_CHANGE = VAS_MODAL_SHOW_CHANGE;
    var BONUS_MODAL_SHOW_CHANGE = "cart/bonus/modal/show/change";
    _exports.BONUS_MODAL_SHOW_CHANGE = BONUS_MODAL_SHOW_CHANGE;
    var OFICES_SERVICES_MODAL_VISIBILITY = "cart/metadata/fix/b2bVasesModal/visibility";
    _exports.OFICES_SERVICES_MODAL_VISIBILITY = OFICES_SERVICES_MODAL_VISIBILITY;
    var PAYMENT_PLAN_ASSIGN_VALUE_CHANGE = "cart/paymentPaln/assign/value/change";
    _exports.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE = PAYMENT_PLAN_ASSIGN_VALUE_CHANGE;
    var CONFIRMATION_DEATH_CHANGE = "cart/assign/certificateDeath/confirm";
    _exports.CONFIRMATION_DEATH_CHANGE = CONFIRMATION_DEATH_CHANGE;
    var KDR_CART_DATA = "cart/kdrData/get";
    _exports.KDR_CART_DATA = KDR_CART_DATA;
    var KDR_NUMBER_CHANGE = "cart/kdrData/number/change";
    _exports.KDR_NUMBER_CHANGE = KDR_NUMBER_CHANGE;
    var KDR_NUMBER_APPROVE = "cart/kdrData/number/approve";
    _exports.KDR_NUMBER_APPROVE = KDR_NUMBER_APPROVE;
    var KDR_NUMBER_CLEAR = "cart/kdrData/number/clear";
    _exports.KDR_NUMBER_CLEAR = KDR_NUMBER_CLEAR;
    var KDR_ERROR = "cart/kdrData/error";
    _exports.KDR_ERROR = KDR_ERROR;
    var KDR_SAVING = "cart/kdrData/saving";
    _exports.KDR_SAVING = KDR_SAVING;
    var KDR_SAVED = "cart/kdrData/saved";
    _exports.KDR_SAVED = KDR_SAVED;
    var HALT_CART_START = "cart/halt/start";
    _exports.HALT_CART_START = HALT_CART_START;
    var HALT_CART_SUCCESS = "cart/halt/success";
    _exports.HALT_CART_SUCCESS = HALT_CART_SUCCESS;
    var HALT_CART_ERROR = "cart/halt/error";
    _exports.HALT_CART_ERROR = HALT_CART_ERROR;
    var LOWER_INSTALLMENTS_MODAL_OPEN = "cart/lower/installments/modal/open";
    _exports.LOWER_INSTALLMENTS_MODAL_OPEN = LOWER_INSTALLMENTS_MODAL_OPEN;
    var LOWER_INSTALLMENTS_MODAL_CLOSE = "cart/lower/installments/modal/close";
    _exports.LOWER_INSTALLMENTS_MODAL_CLOSE = LOWER_INSTALLMENTS_MODAL_CLOSE;
    var LOWER_INSTALLMENTS_SUBMITED = "cart/lower/installments/submited";
    _exports.LOWER_INSTALLMENTS_SUBMITED = LOWER_INSTALLMENTS_SUBMITED;
    var SELECT_TV_PACKAGES_CHOICE_FILTER = "cart/filters/SELECT_TV_PACKAGES_CHOICE_FILTER";
    _exports.SELECT_TV_PACKAGES_CHOICE_FILTER = SELECT_TV_PACKAGES_CHOICE_FILTER;
    var SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER = "cart/filters/SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER";
    _exports.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER = SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER;
    var INVOICE_EMAIL_CHANGE = "cart/invoiceEmail/email/change";
    _exports.INVOICE_EMAIL_CHANGE = INVOICE_EMAIL_CHANGE;
    var INVOICE_EMAIL_MAPPING_CHANGE = "cart/invoiceEmail/mappingEmail/change";
    _exports.INVOICE_EMAIL_MAPPING_CHANGE = INVOICE_EMAIL_MAPPING_CHANGE;
});
//# sourceMappingURL=actionTypes.js.map