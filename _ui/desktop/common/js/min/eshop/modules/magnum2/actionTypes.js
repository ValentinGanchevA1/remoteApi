define(["exports", "../core/utils/request-actions-creator"], function(_, E) {
    "use strict";
    Object.defineProperty(_, "__esModule", {
        value: !0
    }), _.SAVE_WWT_ADDITIONAL_DATA = _.SHOW_ONLY_FTTH = _.ALL_MIGRATION_OFFERS_FETCHED = _.NEXT_MIGRATION_OFFER_FETCH_ERROR = _.NEXT_MIGRATION_OFFER_FETCHED = _.NEXT_MIGRATION_OFFER_FETCHING = _.ALL_MIGRATION_OFFERS_FETCHING = _.MIGRATION_OFFERS_FETCH_ERROR = _.MIGRATION_OFFERS_FETCHED = _.MIGRATION_OFFERS_FETCHING = _.CLOSE_WWT_ZIP_MODAL = _.OPEN_WWT_ZIP_MODAL = _.FILL_MISSING_ZIP_CODE = _.SAVE_WWT_ADDRESS_NO_ZIP = _.SET_AVAILABLE_BUNDLE_TYPES = _.SET_MAGNUM_STORE = _.SET_LOYALTY_PERIOD = _.SET_MOBILE_TRANSACTION = _.SET_FIX_VOIP_TRANSACTION = _.SET_FIX_BROADBAND_TRANSACTION = _.SET_PROPOSITION_COMPONENT_PK = _.SET_KNA_NUMBER = _.SELECT_DEVICE_VARIANT = _.SELECT_PROPOSITION = _.SHOW_FORCE_SEARCH_MODAL_ACTION = _.CUSTOMER_SEARCHED = _.fetchDocumentsList = _.fetchPropositionList = _.fetchPossibleTransactions = _.fetchDeviceList = void 0;
    var T = (0, E.createRequestActionTypes)("magnum/FETCH_DEVICE_LIST");
    _.fetchDeviceList = T;
    var O = (0, E.createRequestActionTypes)("magnum/fetchPossibleTransactions");
    _.fetchPossibleTransactions = O;
    var I = (0, E.createRequestActionTypes)("magnum/FETCH_PROPOSITION_LIST");
    _.fetchPropositionList = I;
    var A = (0, E.createRequestActionTypes)("magnum/FETCH_DOCUMENTS_LIST");
    _.fetchDocumentsList = A;
    _.CUSTOMER_SEARCHED = "magnum/customerSearched";
    _.SHOW_FORCE_SEARCH_MODAL_ACTION = "SHOW_FORCE_SEARCH_MODAL_ACTION";
    _.SELECT_PROPOSITION = "magnum/propositions/selectProposition";
    _.SELECT_DEVICE_VARIANT = "magnum/propositions/selectDeviceVariant";
    _.SET_KNA_NUMBER = "magnum/propositions/setKnaNumber";
    _.SET_PROPOSITION_COMPONENT_PK = "magnum/propositions/setPropositionComponentPk";
    _.SET_FIX_BROADBAND_TRANSACTION = "magnum/propositions/setFixBroadbandTransaction";
    _.SET_FIX_VOIP_TRANSACTION = "magnum/propositions/setFixVoipTransaction";
    _.SET_MOBILE_TRANSACTION = "magnum/propositions/setMobileTransaction";
    _.SET_LOYALTY_PERIOD = "magnum/propositions/setLoyaltyPeriod";
    _.SET_MAGNUM_STORE = "magnum/setStore";
    _.SET_AVAILABLE_BUNDLE_TYPES = "magnum/setAvailableBundleTypes";
    _.SAVE_WWT_ADDRESS_NO_ZIP = "SAVE_WWT_ADDRESS_NO_ZIP";
    _.FILL_MISSING_ZIP_CODE = "FILL_MISSING_ZIP_CODE";
    _.OPEN_WWT_ZIP_MODAL = "OPEN_WWT_ZIP_MODAL";
    _.CLOSE_WWT_ZIP_MODAL = "CLOSE_WWT_ZIP_MODAL";
    _.MIGRATION_OFFERS_FETCHING = "MIGRATION_OFFERS_FETCHING";
    _.MIGRATION_OFFERS_FETCHED = "MIGRATION_OFFERS_FETCHED";
    _.MIGRATION_OFFERS_FETCH_ERROR = "MIGRATION_OFFERS_FETCH_ERROR";
    _.ALL_MIGRATION_OFFERS_FETCHING = "ALL_MIGRATION_OFFERS_FETCHING";
    _.NEXT_MIGRATION_OFFER_FETCHING = "NEXT_MIGRATION_OFFER_FETCHING";
    _.NEXT_MIGRATION_OFFER_FETCHED = "NEXT_MIGRATION_OFFER_FETCHED";
    _.NEXT_MIGRATION_OFFER_FETCH_ERROR = "NEXT_MIGRATION_OFFER_FETCH_ERROR";
    _.ALL_MIGRATION_OFFERS_FETCHED = "ALL_MIGRATION_OFFERS_FETCHED";
    _.SHOW_ONLY_FTTH = "SHOW_ONLY_FTTH";
    _.SAVE_WWT_ADDITIONAL_DATA = "SAVE_WWT_ADDITIONAL_DATA"
});
//# sourceMappingURL=actionTypes.js.map