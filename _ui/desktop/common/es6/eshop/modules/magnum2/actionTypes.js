import {
    createRequestActionTypes
} from "../core/utils/request-actions-creator";

const FETCH_DEVICE_LIST = "magnum/FETCH_DEVICE_LIST";
export const fetchDeviceList = createRequestActionTypes(FETCH_DEVICE_LIST);

const FETCH_POSSIBLE_TRANSACTIONS = "magnum/fetchPossibleTransactions";
export const fetchPossibleTransactions = createRequestActionTypes(FETCH_POSSIBLE_TRANSACTIONS);

const FETCH_PROPOSITION_LIST = "magnum/FETCH_PROPOSITION_LIST";
export const fetchPropositionList = createRequestActionTypes(FETCH_PROPOSITION_LIST);

const FETCH_DOCUMENTS_LIST = "magnum/FETCH_DOCUMENTS_LIST";
export const fetchDocumentsList = createRequestActionTypes(FETCH_DOCUMENTS_LIST);

export const CUSTOMER_SEARCHED = "magnum/customerSearched";
export const SHOW_FORCE_SEARCH_MODAL_ACTION = "SHOW_FORCE_SEARCH_MODAL_ACTION"

export const SELECT_PROPOSITION = "magnum/propositions/selectProposition";
export const SELECT_DEVICE_VARIANT = "magnum/propositions/selectDeviceVariant";

export const SET_KNA_NUMBER = "magnum/propositions/setKnaNumber";
export const SET_PROPOSITION_COMPONENT_PK = "magnum/propositions/setPropositionComponentPk";
export const SET_FIX_BROADBAND_TRANSACTION = "magnum/propositions/setFixBroadbandTransaction";
export const SET_FIX_VOIP_TRANSACTION = "magnum/propositions/setFixVoipTransaction";
export const SET_MOBILE_TRANSACTION = "magnum/propositions/setMobileTransaction";
export const SET_LOYALTY_PERIOD = "magnum/propositions/setLoyaltyPeriod";
export const SET_MAGNUM_STORE = "magnum/setStore";
export const SET_AVAILABLE_BUNDLE_TYPES = "magnum/setAvailableBundleTypes";

export const SAVE_WWT_ADDRESS_NO_ZIP = "SAVE_WWT_ADDRESS_NO_ZIP";
export const FILL_MISSING_ZIP_CODE = "FILL_MISSING_ZIP_CODE";
export const OPEN_WWT_ZIP_MODAL = "OPEN_WWT_ZIP_MODAL";
export const CLOSE_WWT_ZIP_MODAL = "CLOSE_WWT_ZIP_MODAL";

export const MIGRATION_OFFERS_FETCHING = "MIGRATION_OFFERS_FETCHING";
export const MIGRATION_OFFERS_FETCHED = "MIGRATION_OFFERS_FETCHED";
export const MIGRATION_OFFERS_FETCH_ERROR = "MIGRATION_OFFERS_FETCH_ERROR";

export const ALL_MIGRATION_OFFERS_FETCHING = "ALL_MIGRATION_OFFERS_FETCHING";

export const NEXT_MIGRATION_OFFER_FETCHING = "NEXT_MIGRATION_OFFER_FETCHING";
export const NEXT_MIGRATION_OFFER_FETCHED = "NEXT_MIGRATION_OFFER_FETCHED";
export const NEXT_MIGRATION_OFFER_FETCH_ERROR = "NEXT_MIGRATION_OFFER_FETCH_ERROR";

export const ALL_MIGRATION_OFFERS_FETCHED = "ALL_MIGRATION_OFFERS_FETCHED";

export const SHOW_ONLY_FTTH = "SHOW_ONLY_FTTH";

export const SAVE_WWT_ADDITIONAL_DATA = "SAVE_WWT_ADDITIONAL_DATA";